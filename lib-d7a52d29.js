function _f(e, n) {
  for (var t = 0; t < n.length; t++) {
    const r = n[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i && Object.defineProperty(e, l, i.get ? i : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Ys(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gs = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr = Symbol.for("react.element"), Pf = Symbol.for("react.portal"), Nf = Symbol.for("react.fragment"), zf = Symbol.for("react.strict_mode"), Tf = Symbol.for("react.profiler"), Lf = Symbol.for("react.provider"), Rf = Symbol.for("react.context"), Of = Symbol.for("react.forward_ref"), Mf = Symbol.for("react.suspense"), $f = Symbol.for("react.memo"), If = Symbol.for("react.lazy"), Ou = Symbol.iterator;
function Df(e) {
  return e === null || typeof e != "object" ? null : (e = Ou && e[Ou] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Zs = Object.assign, Js = {};
function wt(e, n, t) {
  this.props = e, this.context = n, this.refs = Js, this.updater = t || Xs;
}
wt.prototype.isReactComponent = {};
wt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
wt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qs() {
}
qs.prototype = wt.prototype;
function Lo(e, n, t) {
  this.props = e, this.context = n, this.refs = Js, this.updater = t || Xs;
}
var Ro = Lo.prototype = new qs();
Ro.constructor = Lo;
Zs(Ro, wt.prototype);
Ro.isPureReactComponent = !0;
var Mu = Array.isArray, bs = Object.prototype.hasOwnProperty, Oo = { current: null }, ea = { key: !0, ref: !0, __self: !0, __source: !0 };
function na(e, n, t) {
  var r, l = {}, i = null, o = null;
  if (n != null)
    for (r in n.ref !== void 0 && (o = n.ref), n.key !== void 0 && (i = "" + n.key), n)
      bs.call(n, r) && !ea.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: pr, type: e, key: i, ref: o, props: l, _owner: Oo.current };
}
function Ff(e, n) {
  return { $$typeof: pr, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Mo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pr;
}
function jf(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var $u = /\/+/g;
function ii(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? jf("" + e.key) : n.toString(36);
}
function Ar(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pr:
          case Pf:
            o = !0;
        }
    }
  if (o)
    return o = e, l = l(o), e = r === "" ? "." + ii(o, 0) : r, Mu(l) ? (t = "", e != null && (t = e.replace($u, "$&/") + "/"), Ar(l, n, t, "", function(c) {
      return c;
    })) : l != null && (Mo(l) && (l = Ff(l, t + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace($u, "$&/") + "/") + e)), n.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Mu(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + ii(i, u);
      o += Ar(i, n, t, s, l);
    }
  else if (s = Df(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, s = r + ii(i, u++), o += Ar(i, n, t, s, l);
  else if (i === "object")
    throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function kr(e, n, t) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Ar(e, r, "", "", function(i) {
    return n.call(t, i, l++);
  }), r;
}
function Af(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var pe = { current: null }, Ur = { transition: null }, Uf = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: Ur, ReactCurrentOwner: Oo };
L.Children = { map: kr, forEach: function(e, n, t) {
  kr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return kr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return kr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Mo(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = wt;
L.Fragment = Nf;
L.Profiler = Tf;
L.PureComponent = Lo;
L.StrictMode = zf;
L.Suspense = Mf;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
L.cloneElement = function(e, n, t) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Zs({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (i = n.ref, o = Oo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in n)
      bs.call(n, s) && !ea.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: pr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function(e) {
  return e = { $$typeof: Rf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lf, _context: e }, e.Consumer = e;
};
L.createElement = na;
L.createFactory = function(e) {
  var n = na.bind(null, e);
  return n.type = e, n;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Of, render: e };
};
L.isValidElement = Mo;
L.lazy = function(e) {
  return { $$typeof: If, _payload: { _status: -1, _result: e }, _init: Af };
};
L.memo = function(e, n) {
  return { $$typeof: $f, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function(e) {
  var n = Ur.transition;
  Ur.transition = {};
  try {
    e();
  } finally {
    Ur.transition = n;
  }
};
L.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function(e, n) {
  return pe.current.useCallback(e, n);
};
L.useContext = function(e) {
  return pe.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return pe.current.useDeferredValue(e);
};
L.useEffect = function(e, n) {
  return pe.current.useEffect(e, n);
};
L.useId = function() {
  return pe.current.useId();
};
L.useImperativeHandle = function(e, n, t) {
  return pe.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function(e, n) {
  return pe.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function(e, n) {
  return pe.current.useLayoutEffect(e, n);
};
L.useMemo = function(e, n) {
  return pe.current.useMemo(e, n);
};
L.useReducer = function(e, n, t) {
  return pe.current.useReducer(e, n, t);
};
L.useRef = function(e) {
  return pe.current.useRef(e);
};
L.useState = function(e) {
  return pe.current.useState(e);
};
L.useSyncExternalStore = function(e, n, t) {
  return pe.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function() {
  return pe.current.useTransition();
};
L.version = "18.2.0";
Gs.exports = L;
var ve = Gs.exports;
const $o = /* @__PURE__ */ Ys(ve), Iu = /* @__PURE__ */ _f({
  __proto__: null,
  default: $o
}, [ve]);
var ta = { exports: {} }, Pl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vf = ve, Wf = Symbol.for("react.element"), Bf = Symbol.for("react.fragment"), Hf = Object.prototype.hasOwnProperty, Qf = Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ra(e, n, t) {
  var r, l = {}, i = null, o = null;
  t !== void 0 && (i = "" + t), n.key !== void 0 && (i = "" + n.key), n.ref !== void 0 && (o = n.ref);
  for (r in n)
    Hf.call(n, r) && !Kf.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in n = e.defaultProps, n)
      l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Wf, type: e, key: i, ref: o, props: l, _owner: Qf.current };
}
Pl.Fragment = Bf;
Pl.jsx = ra;
Pl.jsxs = ra;
ta.exports = Pl;
var el = ta.exports;
function Yf(e) {
  if (e.sheet)
    return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e)
      return document.styleSheets[n];
}
function Gf(e) {
  var n = document.createElement("style");
  return n.setAttribute("data-emotion", e.key), e.nonce !== void 0 && n.setAttribute("nonce", e.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n;
}
var Xf = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    this._insertTag = function(l) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, i), r.tags.push(l);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var n = e.prototype;
  return n.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, n.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gf(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Yf(l);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      l.appendChild(document.createTextNode(r));
    this.ctr++;
  }, n.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), se = "-ms-", nl = "-moz-", M = "-webkit-", la = "comm", Io = "rule", Do = "decl", Zf = "@import", ia = "@keyframes", Jf = "@layer", qf = Math.abs, Nl = String.fromCharCode, bf = Object.assign;
function ed(e, n) {
  return re(e, 0) ^ 45 ? (((n << 2 ^ re(e, 0)) << 2 ^ re(e, 1)) << 2 ^ re(e, 2)) << 2 ^ re(e, 3) : 0;
}
function oa(e) {
  return e.trim();
}
function nd(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function $(e, n, t) {
  return e.replace(n, t);
}
function Mi(e, n) {
  return e.indexOf(n);
}
function re(e, n) {
  return e.charCodeAt(n) | 0;
}
function Yt(e, n, t) {
  return e.slice(n, t);
}
function Ke(e) {
  return e.length;
}
function Fo(e) {
  return e.length;
}
function Er(e, n) {
  return n.push(e), e;
}
function td(e, n) {
  return e.map(n).join("");
}
var zl = 1, ft = 1, ua = 0, ke = 0, G = 0, St = "";
function Tl(e, n, t, r, l, i, o) {
  return { value: e, root: n, parent: t, type: r, props: l, children: i, line: zl, column: ft, length: o, return: "" };
}
function _t(e, n) {
  return bf(Tl("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function rd() {
  return G;
}
function ld() {
  return G = ke > 0 ? re(St, --ke) : 0, ft--, G === 10 && (ft = 1, zl--), G;
}
function Ce() {
  return G = ke < ua ? re(St, ke++) : 0, ft++, G === 10 && (ft = 1, zl++), G;
}
function Xe() {
  return re(St, ke);
}
function Vr() {
  return ke;
}
function mr(e, n) {
  return Yt(St, e, n);
}
function Gt(e) {
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
  return zl = ft = 1, ua = Ke(St = e), ke = 0, [];
}
function aa(e) {
  return St = "", e;
}
function Wr(e) {
  return oa(mr(ke - 1, $i(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function id(e) {
  for (; (G = Xe()) && G < 33; )
    Ce();
  return Gt(e) > 2 || Gt(G) > 3 ? "" : " ";
}
function od(e, n) {
  for (; --n && Ce() && !(G < 48 || G > 102 || G > 57 && G < 65 || G > 70 && G < 97); )
    ;
  return mr(e, Vr() + (n < 6 && Xe() == 32 && Ce() == 32));
}
function $i(e) {
  for (; Ce(); )
    switch (G) {
      case e:
        return ke;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $i(G);
        break;
      case 40:
        e === 41 && $i(e);
        break;
      case 92:
        Ce();
        break;
    }
  return ke;
}
function ud(e, n) {
  for (; Ce() && e + G !== 47 + 10; )
    if (e + G === 42 + 42 && Xe() === 47)
      break;
  return "/*" + mr(n, ke - 1) + "*" + Nl(e === 47 ? e : Ce());
}
function sd(e) {
  for (; !Gt(Xe()); )
    Ce();
  return mr(e, ke);
}
function ad(e) {
  return aa(Br("", null, null, null, [""], e = sa(e), 0, [0], e));
}
function Br(e, n, t, r, l, i, o, u, s) {
  for (var c = 0, h = 0, m = o, p = 0, S = 0, w = 0, g = 1, z = 1, f = 1, a = 0, d = "", v = l, E = i, x = r, k = d; z; )
    switch (w = a, a = Ce()) {
      case 40:
        if (w != 108 && re(k, m - 1) == 58) {
          Mi(k += $(Wr(a), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Wr(a);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += id(w);
        break;
      case 92:
        k += od(Vr() - 1, 7);
        continue;
      case 47:
        switch (Xe()) {
          case 42:
          case 47:
            Er(cd(ud(Ce(), Vr()), n, t), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * g:
        u[c++] = Ke(k) * f;
      case 125 * g:
      case 59:
      case 0:
        switch (a) {
          case 0:
          case 125:
            z = 0;
          case 59 + h:
            f == -1 && (k = $(k, /\f/g, "")), S > 0 && Ke(k) - m && Er(S > 32 ? Fu(k + ";", r, t, m - 1) : Fu($(k, " ", "") + ";", r, t, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (Er(x = Du(k, n, t, c, h, l, u, d, v = [], E = [], m), i), a === 123)
              if (h === 0)
                Br(k, n, x, x, v, i, m, u, E);
              else
                switch (p === 99 && re(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Br(e, x, x, r && Er(Du(e, x, x, 0, 0, l, u, d, l, v = [], m), E), l, E, m, u, r ? v : E);
                    break;
                  default:
                    Br(k, x, x, x, [""], E, 0, u, E);
                }
        }
        c = h = S = 0, g = f = 1, d = k = "", m = o;
        break;
      case 58:
        m = 1 + Ke(k), S = w;
      default:
        if (g < 1) {
          if (a == 123)
            --g;
          else if (a == 125 && g++ == 0 && ld() == 125)
            continue;
        }
        switch (k += Nl(a), a * g) {
          case 38:
            f = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[c++] = (Ke(k) - 1) * f, f = 1;
            break;
          case 64:
            Xe() === 45 && (k += Wr(Ce())), p = Xe(), h = m = Ke(d = k += sd(Vr())), a++;
            break;
          case 45:
            w === 45 && Ke(k) == 2 && (g = 0);
        }
    }
  return i;
}
function Du(e, n, t, r, l, i, o, u, s, c, h) {
  for (var m = l - 1, p = l === 0 ? i : [""], S = Fo(p), w = 0, g = 0, z = 0; w < r; ++w)
    for (var f = 0, a = Yt(e, m + 1, m = qf(g = o[w])), d = e; f < S; ++f)
      (d = oa(g > 0 ? p[f] + " " + a : $(a, /&\f/g, p[f]))) && (s[z++] = d);
  return Tl(e, n, t, l === 0 ? Io : u, s, c, h);
}
function cd(e, n, t) {
  return Tl(e, n, t, la, Nl(rd()), Yt(e, 2, -2), 0);
}
function Fu(e, n, t, r) {
  return Tl(e, n, t, Do, Yt(e, 0, r), Yt(e, r + 1, -1), r);
}
function lt(e, n) {
  for (var t = "", r = Fo(e), l = 0; l < r; l++)
    t += n(e[l], l, e, n) || "";
  return t;
}
function fd(e, n, t, r) {
  switch (e.type) {
    case Jf:
      if (e.children.length)
        break;
    case Zf:
    case Do:
      return e.return = e.return || e.value;
    case la:
      return "";
    case ia:
      return e.return = e.value + "{" + lt(e.children, r) + "}";
    case Io:
      e.value = e.props.join(",");
  }
  return Ke(t = lt(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function dd(e) {
  var n = Fo(e);
  return function(t, r, l, i) {
    for (var o = "", u = 0; u < n; u++)
      o += e[u](t, r, l, i) || "";
    return o;
  };
}
function pd(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function md(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var hd = function(n, t, r) {
  for (var l = 0, i = 0; l = i, i = Xe(), l === 38 && i === 12 && (t[r] = 1), !Gt(i); )
    Ce();
  return mr(n, ke);
}, vd = function(n, t) {
  var r = -1, l = 44;
  do
    switch (Gt(l)) {
      case 0:
        l === 38 && Xe() === 12 && (t[r] = 1), n[r] += hd(ke - 1, t, r);
        break;
      case 2:
        n[r] += Wr(l);
        break;
      case 4:
        if (l === 44) {
          n[++r] = Xe() === 58 ? "&\f" : "", t[r] = n[r].length;
          break;
        }
      default:
        n[r] += Nl(l);
    }
  while (l = Ce());
  return n;
}, yd = function(n, t) {
  return aa(vd(sa(n), t));
}, ju = /* @__PURE__ */ new WeakMap(), gd = function(n) {
  if (!(n.type !== "rule" || !n.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  n.length < 1)) {
    for (var t = n.value, r = n.parent, l = n.column === r.column && n.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(n.props.length === 1 && t.charCodeAt(0) !== 58 && !ju.get(r)) && !l) {
      ju.set(n, !0);
      for (var i = [], o = yd(t, i), u = r.props, s = 0, c = 0; s < o.length; s++)
        for (var h = 0; h < u.length; h++, c++)
          n.props[c] = i[s] ? o[s].replace(/&\f/g, u[h]) : u[h] + " " + o[s];
    }
  }
}, wd = function(n) {
  if (n.type === "decl") {
    var t = n.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (n.return = "", n.value = "");
  }
};
function ca(e, n) {
  switch (ed(e, n)) {
    case 5103:
      return M + "print-" + e + e;
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
      return M + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return M + e + nl + e + se + e + e;
    case 6828:
    case 4268:
      return M + e + se + e + e;
    case 6165:
      return M + e + se + "flex-" + e + e;
    case 5187:
      return M + e + $(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + se + "flex-$1$2") + e;
    case 5443:
      return M + e + se + "flex-item-" + $(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + se + "flex-line-pack" + $(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + se + $(e, "shrink", "negative") + e;
    case 5292:
      return M + e + se + $(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + $(e, "-grow", "") + M + e + se + $(e, "grow", "positive") + e;
    case 4554:
      return M + $(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return $($($(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return $(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return $($(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $(e, /(.+)-inline(.+)/, M + "$1$2") + e;
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
      if (Ke(e) - 1 - n > 6)
        switch (re(e, n + 1)) {
          case 109:
            if (re(e, n + 4) !== 45)
              break;
          case 102:
            return $(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + nl + (re(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Mi(e, "stretch") ? ca($(e, "stretch", "fill-available"), n) + e : e;
        }
      break;
    case 4949:
      if (re(e, n + 1) !== 115)
        break;
    case 6444:
      switch (re(e, Ke(e) - 3 - (~Mi(e, "!important") && 10))) {
        case 107:
          return $(e, ":", ":" + M) + e;
        case 101:
          return $(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (re(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + se + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (re(e, n + 11)) {
        case 114:
          return M + e + se + $(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + se + $(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + se + $(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + se + e + e;
  }
  return e;
}
var Sd = function(n, t, r, l) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case Do:
        n.return = ca(n.value, n.length);
        break;
      case ia:
        return lt([_t(n, {
          value: $(n.value, "@", "@" + M)
        })], l);
      case Io:
        if (n.length)
          return td(n.props, function(i) {
            switch (nd(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return lt([_t(n, {
                  props: [$(i, /:(read-\w+)/, ":" + nl + "$1")]
                })], l);
              case "::placeholder":
                return lt([_t(n, {
                  props: [$(i, /:(plac\w+)/, ":" + M + "input-$1")]
                }), _t(n, {
                  props: [$(i, /:(plac\w+)/, ":" + nl + "$1")]
                }), _t(n, {
                  props: [$(i, /:(plac\w+)/, se + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, kd = [Sd], Ed = function(n) {
  var t = n.key;
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var z = g.getAttribute("data-emotion");
      z.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var l = n.stylisPlugins || kd, i = {}, o, u = [];
  o = n.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(g) {
      for (var z = g.getAttribute("data-emotion").split(" "), f = 1; f < z.length; f++)
        i[z[f]] = !0;
      u.push(g);
    }
  );
  var s, c = [gd, wd];
  {
    var h, m = [fd, pd(function(g) {
      h.insert(g);
    })], p = dd(c.concat(l, m)), S = function(z) {
      return lt(ad(z), p);
    };
    s = function(z, f, a, d) {
      h = a, S(z ? z + "{" + f.styles + "}" : f.styles), d && (w.inserted[f.name] = !0);
    };
  }
  var w = {
    key: t,
    sheet: new Xf({
      key: t,
      container: o,
      nonce: n.nonce,
      speedy: n.speedy,
      prepend: n.prepend,
      insertionPoint: n.insertionPoint
    }),
    nonce: n.nonce,
    inserted: i,
    registered: {},
    insert: s
  };
  return w.sheet.hydrate(u), w;
}, fa = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne = typeof Symbol == "function" && Symbol.for, jo = ne ? Symbol.for("react.element") : 60103, Ao = ne ? Symbol.for("react.portal") : 60106, Ll = ne ? Symbol.for("react.fragment") : 60107, Rl = ne ? Symbol.for("react.strict_mode") : 60108, Ol = ne ? Symbol.for("react.profiler") : 60114, Ml = ne ? Symbol.for("react.provider") : 60109, $l = ne ? Symbol.for("react.context") : 60110, Uo = ne ? Symbol.for("react.async_mode") : 60111, Il = ne ? Symbol.for("react.concurrent_mode") : 60111, Dl = ne ? Symbol.for("react.forward_ref") : 60112, Fl = ne ? Symbol.for("react.suspense") : 60113, xd = ne ? Symbol.for("react.suspense_list") : 60120, jl = ne ? Symbol.for("react.memo") : 60115, Al = ne ? Symbol.for("react.lazy") : 60116, Cd = ne ? Symbol.for("react.block") : 60121, _d = ne ? Symbol.for("react.fundamental") : 60117, Pd = ne ? Symbol.for("react.responder") : 60118, Nd = ne ? Symbol.for("react.scope") : 60119;
function Ne(e) {
  if (typeof e == "object" && e !== null) {
    var n = e.$$typeof;
    switch (n) {
      case jo:
        switch (e = e.type, e) {
          case Uo:
          case Il:
          case Ll:
          case Ol:
          case Rl:
          case Fl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case $l:
              case Dl:
              case Al:
              case jl:
              case Ml:
                return e;
              default:
                return n;
            }
        }
      case Ao:
        return n;
    }
  }
}
function da(e) {
  return Ne(e) === Il;
}
D.AsyncMode = Uo;
D.ConcurrentMode = Il;
D.ContextConsumer = $l;
D.ContextProvider = Ml;
D.Element = jo;
D.ForwardRef = Dl;
D.Fragment = Ll;
D.Lazy = Al;
D.Memo = jl;
D.Portal = Ao;
D.Profiler = Ol;
D.StrictMode = Rl;
D.Suspense = Fl;
D.isAsyncMode = function(e) {
  return da(e) || Ne(e) === Uo;
};
D.isConcurrentMode = da;
D.isContextConsumer = function(e) {
  return Ne(e) === $l;
};
D.isContextProvider = function(e) {
  return Ne(e) === Ml;
};
D.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jo;
};
D.isForwardRef = function(e) {
  return Ne(e) === Dl;
};
D.isFragment = function(e) {
  return Ne(e) === Ll;
};
D.isLazy = function(e) {
  return Ne(e) === Al;
};
D.isMemo = function(e) {
  return Ne(e) === jl;
};
D.isPortal = function(e) {
  return Ne(e) === Ao;
};
D.isProfiler = function(e) {
  return Ne(e) === Ol;
};
D.isStrictMode = function(e) {
  return Ne(e) === Rl;
};
D.isSuspense = function(e) {
  return Ne(e) === Fl;
};
D.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ll || e === Il || e === Ol || e === Rl || e === Fl || e === xd || typeof e == "object" && e !== null && (e.$$typeof === Al || e.$$typeof === jl || e.$$typeof === Ml || e.$$typeof === $l || e.$$typeof === Dl || e.$$typeof === _d || e.$$typeof === Pd || e.$$typeof === Nd || e.$$typeof === Cd);
};
D.typeOf = Ne;
fa.exports = D;
var zd = fa.exports, pa = zd, Td = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ld = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ma = {};
ma[pa.ForwardRef] = Td;
ma[pa.Memo] = Ld;
var Rd = !0;
function Od(e, n, t) {
  var r = "";
  return t.split(" ").forEach(function(l) {
    e[l] !== void 0 ? n.push(e[l] + ";") : r += l + " ";
  }), r;
}
var ha = function(n, t, r) {
  var l = n.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Rd === !1) && n.registered[l] === void 0 && (n.registered[l] = t.styles);
}, Md = function(n, t, r) {
  ha(n, t, r);
  var l = n.key + "-" + t.name;
  if (n.inserted[t.name] === void 0) {
    var i = t;
    do
      n.insert(t === i ? "." + l : "", i, n.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function $d(e) {
  for (var n = 0, t, r = 0, l = e.length; l >= 4; ++r, l -= 4)
    t = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, n = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      n ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(r) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
var Id = {
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
}, Dd = /[A-Z]|^ms/g, Fd = /_EMO_([^_]+?)_([^]*?)_EMO_/g, va = function(n) {
  return n.charCodeAt(1) === 45;
}, Au = function(n) {
  return n != null && typeof n != "boolean";
}, oi = /* @__PURE__ */ md(function(e) {
  return va(e) ? e : e.replace(Dd, "-$&").toLowerCase();
}), Uu = function(n, t) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Fd, function(r, l, i) {
          return Ye = {
            name: l,
            styles: i,
            next: Ye
          }, l;
        });
  }
  return Id[n] !== 1 && !va(n) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function Xt(e, n, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0)
    return t;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Ye = {
          name: t.name,
          styles: t.styles,
          next: Ye
        }, t.name;
      if (t.styles !== void 0) {
        var r = t.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Ye = {
              name: r.name,
              styles: r.styles,
              next: Ye
            }, r = r.next;
        var l = t.styles + ";";
        return l;
      }
      return jd(e, n, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ye, o = t(e);
        return Ye = i, Xt(e, n, o);
      }
      break;
    }
  }
  if (n == null)
    return t;
  var u = n[t];
  return u !== void 0 ? u : t;
}
function jd(e, n, t) {
  var r = "";
  if (Array.isArray(t))
    for (var l = 0; l < t.length; l++)
      r += Xt(e, n, t[l]) + ";";
  else
    for (var i in t) {
      var o = t[i];
      if (typeof o != "object")
        n != null && n[o] !== void 0 ? r += i + "{" + n[o] + "}" : Au(o) && (r += oi(i) + ":" + Uu(i, o) + ";");
      else if (Array.isArray(o) && typeof o[0] == "string" && (n == null || n[o[0]] === void 0))
        for (var u = 0; u < o.length; u++)
          Au(o[u]) && (r += oi(i) + ":" + Uu(i, o[u]) + ";");
      else {
        var s = Xt(e, n, o);
        switch (i) {
          case "animation":
          case "animationName": {
            r += oi(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var Vu = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ye, Ad = function(n, t, r) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var l = !0, i = "";
  Ye = void 0;
  var o = n[0];
  o == null || o.raw === void 0 ? (l = !1, i += Xt(r, t, o)) : i += o[0];
  for (var u = 1; u < n.length; u++)
    i += Xt(r, t, n[u]), l && (i += o[u]);
  Vu.lastIndex = 0;
  for (var s = "", c; (c = Vu.exec(i)) !== null; )
    s += "-" + // $FlowFixMe we know it's not null
    c[1];
  var h = $d(i) + s;
  return {
    name: h,
    styles: i,
    next: Ye
  };
}, Ud = function(n) {
  return n();
}, Vd = Iu["useInsertionEffect"] ? Iu["useInsertionEffect"] : !1, Wd = Vd || Ud, Ul = {}.hasOwnProperty, ya = /* @__PURE__ */ ve.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ed({
    key: "css"
  }) : null
);
ya.Provider;
var Bd = function(n) {
  return /* @__PURE__ */ ve.forwardRef(function(t, r) {
    var l = ve.useContext(ya);
    return n(t, l, r);
  });
}, Hd = /* @__PURE__ */ ve.createContext({}), Ii = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ga = function(n, t) {
  var r = {};
  for (var l in t)
    Ul.call(t, l) && (r[l] = t[l]);
  return r[Ii] = n, r;
}, Qd = function(n) {
  var t = n.cache, r = n.serialized, l = n.isStringTag;
  return ha(t, r, l), Wd(function() {
    return Md(t, r, l);
  }), null;
}, Kd = /* @__PURE__ */ Bd(function(e, n, t) {
  var r = e.css;
  typeof r == "string" && n.registered[r] !== void 0 && (r = n.registered[r]);
  var l = e[Ii], i = [r], o = "";
  typeof e.className == "string" ? o = Od(n.registered, i, e.className) : e.className != null && (o = e.className + " ");
  var u = Ad(i, void 0, ve.useContext(Hd));
  o += n.key + "-" + u.name;
  var s = {};
  for (var c in e)
    Ul.call(e, c) && c !== "css" && c !== Ii && (s[c] = e[c]);
  return s.ref = t, s.className = o, /* @__PURE__ */ ve.createElement(ve.Fragment, null, /* @__PURE__ */ ve.createElement(Qd, {
    cache: n,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ ve.createElement(l, s));
}), wa = Kd;
function ui(e, n, t) {
  return Ul.call(n, "css") ? el.jsx(wa, ga(e, n), t) : el.jsx(e, n, t);
}
function e0(e, n, t) {
  return Ul.call(n, "css") ? el.jsxs(wa, ga(e, n), t) : el.jsxs(e, n, t);
}
var Sa = { exports: {} }, ze = {}, ka = { exports: {} }, Ea = {};
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
  function n(_, N) {
    var T = _.length;
    _.push(N);
    e:
      for (; 0 < T; ) {
        var K = T - 1 >>> 1, q = _[K];
        if (0 < l(q, N))
          _[K] = N, _[T] = q, T = K;
        else
          break e;
      }
  }
  function t(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0)
      return null;
    var N = _[0], T = _.pop();
    if (T !== N) {
      _[0] = T;
      e:
        for (var K = 0, q = _.length, wr = q >>> 1; K < wr; ) {
          var Tn = 2 * (K + 1) - 1, li = _[Tn], Ln = Tn + 1, Sr = _[Ln];
          if (0 > l(li, T))
            Ln < q && 0 > l(Sr, li) ? (_[K] = Sr, _[Ln] = T, K = Ln) : (_[K] = li, _[Tn] = T, K = Tn);
          else if (Ln < q && 0 > l(Sr, T))
            _[K] = Sr, _[Ln] = T, K = Ln;
          else
            break e;
        }
    }
    return N;
  }
  function l(_, N) {
    var T = _.sortIndex - N.sortIndex;
    return T !== 0 ? T : _.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, S = !1, w = !1, g = !1, z = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null)
        r(c);
      else if (N.startTime <= _)
        r(c), N.sortIndex = N.expirationTime, n(s, N);
      else
        break;
      N = t(c);
    }
  }
  function v(_) {
    if (g = !1, d(_), !w)
      if (t(s) !== null)
        w = !0, ti(E);
      else {
        var N = t(c);
        N !== null && ri(v, N.startTime - _);
      }
  }
  function E(_, N) {
    w = !1, g && (g = !1, f(P), P = -1), S = !0;
    var T = p;
    try {
      for (d(N), m = t(s); m !== null && (!(m.expirationTime > N) || _ && !De()); ) {
        var K = m.callback;
        if (typeof K == "function") {
          m.callback = null, p = m.priorityLevel;
          var q = K(m.expirationTime <= N);
          N = e.unstable_now(), typeof q == "function" ? m.callback = q : m === t(s) && r(s), d(N);
        } else
          r(s);
        m = t(s);
      }
      if (m !== null)
        var wr = !0;
      else {
        var Tn = t(c);
        Tn !== null && ri(v, Tn.startTime - N), wr = !1;
      }
      return wr;
    } finally {
      m = null, p = T, S = !1;
    }
  }
  var x = !1, k = null, P = -1, Q = 5, R = -1;
  function De() {
    return !(e.unstable_now() - R < Q);
  }
  function xt() {
    if (k !== null) {
      var _ = e.unstable_now();
      R = _;
      var N = !0;
      try {
        N = k(!0, _);
      } finally {
        N ? Ct() : (x = !1, k = null);
      }
    } else
      x = !1;
  }
  var Ct;
  if (typeof a == "function")
    Ct = function() {
      a(xt);
    };
  else if (typeof MessageChannel < "u") {
    var Ru = new MessageChannel(), Cf = Ru.port2;
    Ru.port1.onmessage = xt, Ct = function() {
      Cf.postMessage(null);
    };
  } else
    Ct = function() {
      z(xt, 0);
    };
  function ti(_) {
    k = _, x || (x = !0, Ct());
  }
  function ri(_, N) {
    P = z(function() {
      _(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    w || S || (w = !0, ti(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var T = p;
    p = N;
    try {
      return _();
    } finally {
      p = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, N) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var T = p;
    p = _;
    try {
      return N();
    } finally {
      p = T;
    }
  }, e.unstable_scheduleCallback = function(_, N, T) {
    var K = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? K + T : K) : T = K, _) {
      case 1:
        var q = -1;
        break;
      case 2:
        q = 250;
        break;
      case 5:
        q = 1073741823;
        break;
      case 4:
        q = 1e4;
        break;
      default:
        q = 5e3;
    }
    return q = T + q, _ = { id: h++, callback: N, priorityLevel: _, startTime: T, expirationTime: q, sortIndex: -1 }, T > K ? (_.sortIndex = T, n(c, _), t(s) === null && _ === t(c) && (g ? (f(P), P = -1) : g = !0, ri(v, T - K))) : (_.sortIndex = q, n(s, _), w || S || (w = !0, ti(E))), _;
  }, e.unstable_shouldYield = De, e.unstable_wrapCallback = function(_) {
    var N = p;
    return function() {
      var T = p;
      p = N;
      try {
        return _.apply(this, arguments);
      } finally {
        p = T;
      }
    };
  };
})(Ea);
ka.exports = Ea;
var Yd = ka.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa = ve, Pe = Yd;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ca = /* @__PURE__ */ new Set(), Zt = {};
function Bn(e, n) {
  dt(e, n), dt(e + "Capture", n);
}
function dt(e, n) {
  for (Zt[e] = n, e = 0; e < n.length; e++)
    Ca.add(n[e]);
}
var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Di = Object.prototype.hasOwnProperty, Gd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Wu = {}, Bu = {};
function Xd(e) {
  return Di.call(Bu, e) ? !0 : Di.call(Wu, e) ? !1 : Gd.test(e) ? Bu[e] = !0 : (Wu[e] = !0, !1);
}
function Zd(e, n, t, r) {
  if (t !== null && t.type === 0)
    return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Jd(e, n, t, r) {
  if (n === null || typeof n > "u" || Zd(e, n, t, r))
    return !0;
  if (r)
    return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function me(e, n, t, r, l, i, o) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = o;
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ie[e] = new me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  ie[n] = new me(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ie[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ie[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ie[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ie[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ie[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ie[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ie[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vo = /[\-:]([a-z])/g;
function Wo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Vo,
    Wo
  );
  ie[n] = new me(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Vo, Wo);
  ie[n] = new me(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Vo, Wo);
  ie[n] = new me(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bo(e, n, t, r) {
  var l = ie.hasOwnProperty(n) ? ie[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Jd(n, t, l, r) && (t = null), r || l === null ? Xd(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var sn = xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xr = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Yn = Symbol.for("react.fragment"), Ho = Symbol.for("react.strict_mode"), Fi = Symbol.for("react.profiler"), _a = Symbol.for("react.provider"), Pa = Symbol.for("react.context"), Qo = Symbol.for("react.forward_ref"), ji = Symbol.for("react.suspense"), Ai = Symbol.for("react.suspense_list"), Ko = Symbol.for("react.memo"), cn = Symbol.for("react.lazy"), Na = Symbol.for("react.offscreen"), Hu = Symbol.iterator;
function Pt(e) {
  return e === null || typeof e != "object" ? null : (e = Hu && e[Hu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, si;
function $t(e) {
  if (si === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      si = n && n[1] || "";
    }
  return `
` + si + e;
}
var ai = !1;
function ci(e, n) {
  if (!e || ai)
    return "";
  ai = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if (o--, u--, 0 > u || l[o] !== i[u]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    ai = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? $t(e) : "";
}
function qd(e) {
  switch (e.tag) {
    case 5:
      return $t(e.type);
    case 16:
      return $t("Lazy");
    case 13:
      return $t("Suspense");
    case 19:
      return $t("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ci(e.type, !1), e;
    case 11:
      return e = ci(e.type.render, !1), e;
    case 1:
      return e = ci(e.type, !0), e;
    default:
      return "";
  }
}
function Ui(e) {
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
    case Fi:
      return "Profiler";
    case Ho:
      return "StrictMode";
    case ji:
      return "Suspense";
    case Ai:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Pa:
        return (e.displayName || "Context") + ".Consumer";
      case _a:
        return (e._context.displayName || "Context") + ".Provider";
      case Qo:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ko:
        return n = e.displayName || null, n !== null ? n : Ui(e.type) || "Memo";
      case cn:
        n = e._payload, e = e._init;
        try {
          return Ui(e(n));
        } catch {
        }
    }
  return null;
}
function bd(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ui(n);
    case 8:
      return n === Ho ? "StrictMode" : "Mode";
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
      if (typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
  }
  return null;
}
function Cn(e) {
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
function za(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function ep(e) {
  var n = za(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, i = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function Cr(e) {
  e._valueTracker || (e._valueTracker = ep(e));
}
function Ta(e) {
  if (!e)
    return !1;
  var n = e._valueTracker;
  if (!n)
    return !0;
  var t = n.getValue(), r = "";
  return e && (r = za(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function tl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vi(e, n) {
  var t = n.checked;
  return B({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Qu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = Cn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function La(e, n) {
  n = n.checked, n != null && Bo(e, "checked", n, !1);
}
function Wi(e, n) {
  La(e, n);
  var t = Cn(n.value), r = n.type;
  if (t != null)
    r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? Bi(e, n.type, t) : n.hasOwnProperty("defaultValue") && Bi(e, n.type, Cn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Ku(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
      return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function Bi(e, n, t) {
  (n !== "number" || tl(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var It = Array.isArray;
function it(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++)
      n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + Cn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function Hi(e, n) {
  if (n.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return B({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yu(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null)
        throw Error(y(92));
      if (It(t)) {
        if (1 < t.length)
          throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: Cn(t) };
}
function Ra(e, n) {
  var t = Cn(n.value), r = Cn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Gu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Oa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qi(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Oa(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var _r, Ma = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = n;
  else {
    for (_r = _r || document.createElement("div"), _r.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = _r.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; n.firstChild; )
      e.appendChild(n.firstChild);
  }
});
function Jt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var jt = {
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
}, np = ["Webkit", "ms", "Moz", "O"];
Object.keys(jt).forEach(function(e) {
  np.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), jt[n] = jt[e];
  });
});
function $a(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || jt.hasOwnProperty(e) && jt[e] ? ("" + n).trim() : n + "px";
}
function Ia(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = $a(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
}
var tp = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ki(e, n) {
  if (n) {
    if (tp[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null)
        throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object")
      throw Error(y(62));
  }
}
function Yi(e, n) {
  if (e.indexOf("-") === -1)
    return typeof n.is == "string";
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
var Gi = null;
function Yo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Xi = null, ot = null, ut = null;
function Xu(e) {
  if (e = yr(e)) {
    if (typeof Xi != "function")
      throw Error(y(280));
    var n = e.stateNode;
    n && (n = Ql(n), Xi(e.stateNode, e.type, n));
  }
}
function Da(e) {
  ot ? ut ? ut.push(e) : ut = [e] : ot = e;
}
function Fa() {
  if (ot) {
    var e = ot, n = ut;
    if (ut = ot = null, Xu(e), n)
      for (e = 0; e < n.length; e++)
        Xu(n[e]);
  }
}
function ja(e, n) {
  return e(n);
}
function Aa() {
}
var fi = !1;
function Ua(e, n, t) {
  if (fi)
    return e(n, t);
  fi = !0;
  try {
    return ja(e, n, t);
  } finally {
    fi = !1, (ot !== null || ut !== null) && (Aa(), Fa());
  }
}
function qt(e, n) {
  var t = e.stateNode;
  if (t === null)
    return null;
  var r = Ql(t);
  if (r === null)
    return null;
  t = r[n];
  e:
    switch (n) {
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
  if (t && typeof t != "function")
    throw Error(y(231, n, typeof t));
  return t;
}
var Zi = !1;
if (rn)
  try {
    var Nt = {};
    Object.defineProperty(Nt, "passive", { get: function() {
      Zi = !0;
    } }), window.addEventListener("test", Nt, Nt), window.removeEventListener("test", Nt, Nt);
  } catch {
    Zi = !1;
  }
function rp(e, n, t, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var At = !1, rl = null, ll = !1, Ji = null, lp = { onError: function(e) {
  At = !0, rl = e;
} };
function ip(e, n, t, r, l, i, o, u, s) {
  At = !1, rl = null, rp.apply(lp, arguments);
}
function op(e, n, t, r, l, i, o, u, s) {
  if (ip.apply(this, arguments), At) {
    if (At) {
      var c = rl;
      At = !1, rl = null;
    } else
      throw Error(y(198));
    ll || (ll = !0, Ji = c);
  }
}
function Hn(e) {
  var n = e, t = e;
  if (e.alternate)
    for (; n.return; )
      n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Va(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
      return n.dehydrated;
  }
  return null;
}
function Zu(e) {
  if (Hn(e) !== e)
    throw Error(y(188));
}
function up(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Hn(e), n === null)
      throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null)
      break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t)
          return Zu(l), e;
        if (i === r)
          return Zu(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return)
      t = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          o = !0, t = l, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = l, t = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            o = !0, t = i, r = l;
            break;
          }
          if (u === r) {
            o = !0, r = i, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!o)
          throw Error(y(189));
      }
    }
    if (t.alternate !== r)
      throw Error(y(190));
  }
  if (t.tag !== 3)
    throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Wa(e) {
  return e = up(e), e !== null ? Ba(e) : null;
}
function Ba(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var n = Ba(e);
    if (n !== null)
      return n;
    e = e.sibling;
  }
  return null;
}
var Ha = Pe.unstable_scheduleCallback, Ju = Pe.unstable_cancelCallback, sp = Pe.unstable_shouldYield, ap = Pe.unstable_requestPaint, Y = Pe.unstable_now, cp = Pe.unstable_getCurrentPriorityLevel, Go = Pe.unstable_ImmediatePriority, Qa = Pe.unstable_UserBlockingPriority, il = Pe.unstable_NormalPriority, fp = Pe.unstable_LowPriority, Ka = Pe.unstable_IdlePriority, Vl = null, Ze = null;
function dp(e) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function")
    try {
      Ze.onCommitFiberRoot(Vl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ve = Math.clz32 ? Math.clz32 : hp, pp = Math.log, mp = Math.LN2;
function hp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (pp(e) / mp | 0) | 0;
}
var Pr = 64, Nr = 4194304;
function Dt(e) {
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
function ol(e, n) {
  var t = e.pendingLanes;
  if (t === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Dt(u) : (i &= o, i !== 0 && (r = Dt(i)));
  } else
    o = t & ~l, o !== 0 ? r = Dt(o) : i !== 0 && (r = Dt(i));
  if (r === 0)
    return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, i = n & -n, l >= i || l === 16 && (i & 4194240) !== 0))
    return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
    for (e = e.entanglements, n &= r; 0 < n; )
      t = 31 - Ve(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function vp(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
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
      return n + 5e3;
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
function yp(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Ve(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & t) || u & r) && (l[o] = vp(u, n)) : s <= n && (e.expiredLanes |= u), i &= ~u;
  }
}
function qi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ya() {
  var e = Pr;
  return Pr <<= 1, !(Pr & 4194240) && (Pr = 64), e;
}
function di(e) {
  for (var n = [], t = 0; 31 > t; t++)
    n.push(e);
  return n;
}
function hr(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Ve(n), e[n] = t;
}
function gp(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Ve(t), i = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~i;
  }
}
function Xo(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Ve(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var I = 0;
function Ga(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xa, Zo, Za, Ja, qa, bi = !1, zr = [], vn = null, yn = null, gn = null, bt = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Map(), dn = [], wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function qu(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      vn = null;
      break;
    case "dragenter":
    case "dragleave":
      yn = null;
      break;
    case "mouseover":
    case "mouseout":
      gn = null;
      break;
    case "pointerover":
    case "pointerout":
      bt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(n.pointerId);
  }
}
function zt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, n !== null && (n = yr(n), n !== null && Zo(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function Sp(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return vn = zt(vn, e, n, t, r, l), !0;
    case "dragenter":
      return yn = zt(yn, e, n, t, r, l), !0;
    case "mouseover":
      return gn = zt(gn, e, n, t, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return bt.set(i, zt(bt.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, er.set(i, zt(er.get(i) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function ba(e) {
  var n = Mn(e.target);
  if (n !== null) {
    var t = Hn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Va(t), n !== null) {
          e.blockedOn = n, qa(e.priority, function() {
            Za(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = eo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      Gi = r, t.target.dispatchEvent(r), Gi = null;
    } else
      return n = yr(t), n !== null && Zo(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function bu(e, n, t) {
  Hr(e) && t.delete(n);
}
function kp() {
  bi = !1, vn !== null && Hr(vn) && (vn = null), yn !== null && Hr(yn) && (yn = null), gn !== null && Hr(gn) && (gn = null), bt.forEach(bu), er.forEach(bu);
}
function Tt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, bi || (bi = !0, Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, kp)));
}
function nr(e) {
  function n(l) {
    return Tt(l, e);
  }
  if (0 < zr.length) {
    Tt(zr[0], e);
    for (var t = 1; t < zr.length; t++) {
      var r = zr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (vn !== null && Tt(vn, e), yn !== null && Tt(yn, e), gn !== null && Tt(gn, e), bt.forEach(n), er.forEach(n), t = 0; t < dn.length; t++)
    r = dn[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dn.length && (t = dn[0], t.blockedOn === null); )
    ba(t), t.blockedOn === null && dn.shift();
}
var st = sn.ReactCurrentBatchConfig, ul = !0;
function Ep(e, n, t, r) {
  var l = I, i = st.transition;
  st.transition = null;
  try {
    I = 1, Jo(e, n, t, r);
  } finally {
    I = l, st.transition = i;
  }
}
function xp(e, n, t, r) {
  var l = I, i = st.transition;
  st.transition = null;
  try {
    I = 4, Jo(e, n, t, r);
  } finally {
    I = l, st.transition = i;
  }
}
function Jo(e, n, t, r) {
  if (ul) {
    var l = eo(e, n, t, r);
    if (l === null)
      Ei(e, n, r, sl, t), qu(e, r);
    else if (Sp(l, e, n, t, r))
      r.stopPropagation();
    else if (qu(e, r), n & 4 && -1 < wp.indexOf(e)) {
      for (; l !== null; ) {
        var i = yr(l);
        if (i !== null && Xa(i), i = eo(e, n, t, r), i === null && Ei(e, n, r, sl, t), i === l)
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else
      Ei(e, n, r, null, t);
  }
}
var sl = null;
function eo(e, n, t, r) {
  if (sl = null, e = Yo(r), e = Mn(e), e !== null)
    if (n = Hn(e), n === null)
      e = null;
    else if (t = n.tag, t === 13) {
      if (e = Va(n), e !== null)
        return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else
      n !== e && (e = null);
  return sl = e, null;
}
function ec(e) {
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
      switch (cp()) {
        case Go:
          return 1;
        case Qa:
          return 4;
        case il:
        case fp:
          return 16;
        case Ka:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mn = null, qo = null, Qr = null;
function nc() {
  if (Qr)
    return Qr;
  var e, n = qo, t = n.length, r, l = "value" in mn ? mn.value : mn.textContent, i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++)
    ;
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++)
    ;
  return Qr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Kr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Tr() {
  return !0;
}
function es() {
  return !1;
}
function Te(e) {
  function n(t, r, l, i, o) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Tr : es, this.isPropagationStopped = es, this;
  }
  return B(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Tr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Tr);
  }, persist: function() {
  }, isPersistent: Tr }), n;
}
var kt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, bo = Te(kt), vr = B({}, kt, { view: 0, detail: 0 }), Cp = Te(vr), pi, mi, Lt, Wl = B({}, vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: eu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Lt && (Lt && e.type === "mousemove" ? (pi = e.screenX - Lt.screenX, mi = e.screenY - Lt.screenY) : mi = pi = 0, Lt = e), pi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : mi;
} }), ns = Te(Wl), _p = B({}, Wl, { dataTransfer: 0 }), Pp = Te(_p), Np = B({}, vr, { relatedTarget: 0 }), hi = Te(Np), zp = B({}, kt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tp = Te(zp), Lp = B({}, kt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Rp = Te(Lp), Op = B({}, kt, { data: 0 }), ts = Te(Op), Mp = {
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
}, $p = {
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
}, Ip = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Dp(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Ip[e]) ? !!n[e] : !1;
}
function eu() {
  return Dp;
}
var Fp = B({}, vr, { key: function(e) {
  if (e.key) {
    var n = Mp[e.key] || e.key;
    if (n !== "Unidentified")
      return n;
  }
  return e.type === "keypress" ? (e = Kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $p[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: eu, charCode: function(e) {
  return e.type === "keypress" ? Kr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), jp = Te(Fp), Ap = B({}, Wl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rs = Te(Ap), Up = B({}, vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eu }), Vp = Te(Up), Wp = B({}, kt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bp = Te(Wp), Hp = B({}, Wl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Qp = Te(Hp), Kp = [9, 13, 27, 32], nu = rn && "CompositionEvent" in window, Ut = null;
rn && "documentMode" in document && (Ut = document.documentMode);
var Yp = rn && "TextEvent" in window && !Ut, tc = rn && (!nu || Ut && 8 < Ut && 11 >= Ut), ls = String.fromCharCode(32), is = !1;
function rc(e, n) {
  switch (e) {
    case "keyup":
      return Kp.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function lc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function Gp(e, n) {
  switch (e) {
    case "compositionend":
      return lc(n);
    case "keypress":
      return n.which !== 32 ? null : (is = !0, ls);
    case "textInput":
      return e = n.data, e === ls && is ? null : e;
    default:
      return null;
  }
}
function Xp(e, n) {
  if (Gn)
    return e === "compositionend" || !nu && rc(e, n) ? (e = nc(), Qr = qo = mn = null, Gn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length)
          return n.char;
        if (n.which)
          return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return tc && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Zp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function os(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Zp[e.type] : n === "textarea";
}
function ic(e, n, t, r) {
  Da(r), n = al(n, "onChange"), 0 < n.length && (t = new bo("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Vt = null, tr = null;
function Jp(e) {
  vc(e, 0);
}
function Bl(e) {
  var n = Jn(e);
  if (Ta(n))
    return e;
}
function qp(e, n) {
  if (e === "change")
    return n;
}
var oc = !1;
if (rn) {
  var vi;
  if (rn) {
    var yi = "oninput" in document;
    if (!yi) {
      var us = document.createElement("div");
      us.setAttribute("oninput", "return;"), yi = typeof us.oninput == "function";
    }
    vi = yi;
  } else
    vi = !1;
  oc = vi && (!document.documentMode || 9 < document.documentMode);
}
function ss() {
  Vt && (Vt.detachEvent("onpropertychange", uc), tr = Vt = null);
}
function uc(e) {
  if (e.propertyName === "value" && Bl(tr)) {
    var n = [];
    ic(n, tr, e, Yo(e)), Ua(Jp, n);
  }
}
function bp(e, n, t) {
  e === "focusin" ? (ss(), Vt = n, tr = t, Vt.attachEvent("onpropertychange", uc)) : e === "focusout" && ss();
}
function em(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bl(tr);
}
function nm(e, n) {
  if (e === "click")
    return Bl(n);
}
function tm(e, n) {
  if (e === "input" || e === "change")
    return Bl(n);
}
function rm(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Be = typeof Object.is == "function" ? Object.is : rm;
function rr(e, n) {
  if (Be(e, n))
    return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length)
    return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Di.call(n, l) || !Be(e[l], n[l]))
      return !1;
  }
  return !0;
}
function as(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function cs(e, n) {
  var t = as(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n)
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = as(t);
  }
}
function sc(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? sc(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function ac() {
  for (var e = window, n = tl(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t)
      e = n.contentWindow;
    else
      break;
    n = tl(e.document);
  }
  return n;
}
function tu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function lm(e) {
  var n = ac(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && sc(t.ownerDocument.documentElement, t)) {
    if (r !== null && tu(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
        t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = cs(t, i);
        var o = cs(
          t,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; )
      e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var im = rn && "documentMode" in document && 11 >= document.documentMode, Xn = null, no = null, Wt = null, to = !1;
function fs(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  to || Xn == null || Xn !== tl(r) || (r = Xn, "selectionStart" in r && tu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wt && rr(Wt, r) || (Wt = r, r = al(no, "onSelect"), 0 < r.length && (n = new bo("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Xn)));
}
function Lr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Zn = { animationend: Lr("Animation", "AnimationEnd"), animationiteration: Lr("Animation", "AnimationIteration"), animationstart: Lr("Animation", "AnimationStart"), transitionend: Lr("Transition", "TransitionEnd") }, gi = {}, cc = {};
rn && (cc = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
function Hl(e) {
  if (gi[e])
    return gi[e];
  if (!Zn[e])
    return e;
  var n = Zn[e], t;
  for (t in n)
    if (n.hasOwnProperty(t) && t in cc)
      return gi[e] = n[t];
  return e;
}
var fc = Hl("animationend"), dc = Hl("animationiteration"), pc = Hl("animationstart"), mc = Hl("transitionend"), hc = /* @__PURE__ */ new Map(), ds = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Pn(e, n) {
  hc.set(e, n), Bn(n, [e]);
}
for (var wi = 0; wi < ds.length; wi++) {
  var Si = ds[wi], om = Si.toLowerCase(), um = Si[0].toUpperCase() + Si.slice(1);
  Pn(om, "on" + um);
}
Pn(fc, "onAnimationEnd");
Pn(dc, "onAnimationIteration");
Pn(pc, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(mc, "onTransitionEnd");
dt("onMouseEnter", ["mouseout", "mouseover"]);
dt("onMouseLeave", ["mouseout", "mouseover"]);
dt("onPointerEnter", ["pointerout", "pointerover"]);
dt("onPointerLeave", ["pointerout", "pointerover"]);
Bn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ft = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ft));
function ps(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, op(r, n, void 0, e), e.currentTarget = null;
}
function vc(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== i && l.isPropagationStopped())
            break e;
          ps(l, u, c), i = s;
        }
      else
        for (o = 0; o < r.length; o++) {
          if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped())
            break e;
          ps(l, u, c), i = s;
        }
    }
  }
  if (ll)
    throw e = Ji, ll = !1, Ji = null, e;
}
function j(e, n) {
  var t = n[uo];
  t === void 0 && (t = n[uo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (yc(n, e, 2, !1), t.add(r));
}
function ki(e, n, t) {
  var r = 0;
  n && (r |= 4), yc(t, e, r, n);
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[Rr]) {
    e[Rr] = !0, Ca.forEach(function(t) {
      t !== "selectionchange" && (sm.has(t) || ki(t, !1, e), ki(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Rr] || (n[Rr] = !0, ki("selectionchange", !1, n));
  }
}
function yc(e, n, t, r) {
  switch (ec(n)) {
    case 1:
      var l = Ep;
      break;
    case 4:
      l = xp;
      break;
    default:
      l = Jo;
  }
  t = l.bind(null, n, t, e), l = void 0, !Zi || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Ei(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (o = Mn(u), o === null)
              return;
            if (s = o.tag, s === 5 || s === 6) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Ua(function() {
    var c = i, h = Yo(t), m = [];
    e: {
      var p = hc.get(e);
      if (p !== void 0) {
        var S = bo, w = e;
        switch (e) {
          case "keypress":
            if (Kr(t) === 0)
              break e;
          case "keydown":
          case "keyup":
            S = jp;
            break;
          case "focusin":
            w = "focus", S = hi;
            break;
          case "focusout":
            w = "blur", S = hi;
            break;
          case "beforeblur":
          case "afterblur":
            S = hi;
            break;
          case "click":
            if (t.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = ns;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Pp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Vp;
            break;
          case fc:
          case dc:
          case pc:
            S = Tp;
            break;
          case mc:
            S = Bp;
            break;
          case "scroll":
            S = Cp;
            break;
          case "wheel":
            S = Qp;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Rp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = rs;
        }
        var g = (n & 4) !== 0, z = !g && e === "scroll", f = g ? p !== null ? p + "Capture" : null : p;
        g = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = qt(a, f), v != null && g.push(ir(a, v, d)))), z)
            break;
          a = a.return;
        }
        0 < g.length && (p = new S(p, w, null, t, h), m.push({ event: p, listeners: g }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && t !== Gi && (w = t.relatedTarget || t.fromElement) && (Mn(w) || w[ln]))
          break e;
        if ((S || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (w = t.relatedTarget || t.toElement, S = c, w = w ? Mn(w) : null, w !== null && (z = Hn(w), w !== z || w.tag !== 5 && w.tag !== 6) && (w = null)) : (S = null, w = c), S !== w)) {
          if (g = ns, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (g = rs, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), z = S == null ? p : Jn(S), d = w == null ? p : Jn(w), p = new g(v, a + "leave", S, t, h), p.target = z, p.relatedTarget = d, v = null, Mn(h) === c && (g = new g(f, a + "enter", w, t, h), g.target = d, g.relatedTarget = z, v = g), z = v, S && w)
            n: {
              for (g = S, f = w, a = 0, d = g; d; d = Qn(d))
                a++;
              for (d = 0, v = f; v; v = Qn(v))
                d++;
              for (; 0 < a - d; )
                g = Qn(g), a--;
              for (; 0 < d - a; )
                f = Qn(f), d--;
              for (; a--; ) {
                if (g === f || f !== null && g === f.alternate)
                  break n;
                g = Qn(g), f = Qn(f);
              }
              g = null;
            }
          else
            g = null;
          S !== null && ms(m, p, S, g, !1), w !== null && z !== null && ms(m, z, w, g, !0);
        }
      }
      e: {
        if (p = c ? Jn(c) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file")
          var E = qp;
        else if (os(p))
          if (oc)
            E = tm;
          else {
            E = em;
            var x = bp;
          }
        else
          (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = nm);
        if (E && (E = E(e, c))) {
          ic(m, E, t, h);
          break e;
        }
        x && x(e, p, c), e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && Bi(p, "number", p.value);
      }
      switch (x = c ? Jn(c) : window, e) {
        case "focusin":
          (os(x) || x.contentEditable === "true") && (Xn = x, no = c, Wt = null);
          break;
        case "focusout":
          Wt = no = Xn = null;
          break;
        case "mousedown":
          to = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          to = !1, fs(m, t, h);
          break;
        case "selectionchange":
          if (im)
            break;
        case "keydown":
        case "keyup":
          fs(m, t, h);
      }
      var k;
      if (nu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Gn ? rc(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && (tc && t.locale !== "ko" && (Gn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Gn && (k = nc()) : (mn = h, qo = "value" in mn ? mn.value : mn.textContent, Gn = !0)), x = al(c, P), 0 < x.length && (P = new ts(P, e, null, t, h), m.push({ event: P, listeners: x }), k ? P.data = k : (k = lc(t), k !== null && (P.data = k)))), (k = Yp ? Gp(e, t) : Xp(e, t)) && (c = al(c, "onBeforeInput"), 0 < c.length && (h = new ts("onBeforeInput", "beforeinput", null, t, h), m.push({ event: h, listeners: c }), h.data = k));
    }
    vc(m, n);
  });
}
function ir(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function al(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = qt(e, t), i != null && r.unshift(ir(e, i, l)), i = qt(e, n), i != null && r.push(ir(e, i, l))), e = e.return;
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
function ms(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = qt(t, i), s != null && o.unshift(ir(t, s, u))) : l || (s = qt(t, i), s != null && o.push(ir(t, s, u)))), t = t.return;
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var am = /\r\n?/g, cm = /\u0000|\uFFFD/g;
function hs(e) {
  return (typeof e == "string" ? e : "" + e).replace(am, `
`).replace(cm, "");
}
function Or(e, n, t) {
  if (n = hs(n), hs(e) !== n && t)
    throw Error(y(425));
}
function cl() {
}
var ro = null, lo = null;
function io(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var oo = typeof setTimeout == "function" ? setTimeout : void 0, fm = typeof clearTimeout == "function" ? clearTimeout : void 0, vs = typeof Promise == "function" ? Promise : void 0, dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof vs < "u" ? function(e) {
  return vs.resolve(null).then(e).catch(pm);
} : oo;
function pm(e) {
  setTimeout(function() {
    throw e;
  });
}
function xi(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8)
      if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), nr(n);
          return;
        }
        r--;
      } else
        t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  nr(n);
}
function wn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3)
      break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?")
        break;
      if (n === "/$")
        return null;
    }
  }
  return e;
}
function ys(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0)
          return e;
        n--;
      } else
        t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Et = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + Et, or = "__reactProps$" + Et, ln = "__reactContainer$" + Et, uo = "__reactEvents$" + Et, mm = "__reactListeners$" + Et, hm = "__reactHandles$" + Et;
function Mn(e) {
  var n = e[Ge];
  if (n)
    return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[ln] || t[Ge]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
        for (e = ys(e); e !== null; ) {
          if (t = e[Ge])
            return t;
          e = ys(e);
        }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function yr(e) {
  return e = e[Ge] || e[ln], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function Ql(e) {
  return e[or] || null;
}
var so = [], qn = -1;
function Nn(e) {
  return { current: e };
}
function A(e) {
  0 > qn || (e.current = so[qn], so[qn] = null, qn--);
}
function F(e, n) {
  qn++, so[qn] = e.current, e.current = n;
}
var _n = {}, ce = Nn(_n), ge = Nn(!1), jn = _n;
function pt(e, n) {
  var t = e.type.contextTypes;
  if (!t)
    return _n;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in t)
    l[i] = n[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function we(e) {
  return e = e.childContextTypes, e != null;
}
function fl() {
  A(ge), A(ce);
}
function gs(e, n, t) {
  if (ce.current !== _n)
    throw Error(y(168));
  F(ce, n), F(ge, t);
}
function gc(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function")
    return t;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in n))
      throw Error(y(108, bd(e) || "Unknown", l));
  return B({}, t, r);
}
function dl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, jn = ce.current, F(ce, e), F(ge, ge.current), !0;
}
function ws(e, n, t) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  t ? (e = gc(e, n, jn), r.__reactInternalMemoizedMergedChildContext = e, A(ge), A(ce), F(ce, e)) : A(ge), F(ge, t);
}
var be = null, Kl = !1, Ci = !1;
function wc(e) {
  be === null ? be = [e] : be.push(e);
}
function vm(e) {
  Kl = !0, wc(e);
}
function zn() {
  if (!Ci && be !== null) {
    Ci = !0;
    var e = 0, n = I;
    try {
      var t = be;
      for (I = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      be = null, Kl = !1;
    } catch (l) {
      throw be !== null && (be = be.slice(e + 1)), Ha(Go, zn), l;
    } finally {
      I = n, Ci = !1;
    }
  }
  return null;
}
var bn = [], et = 0, pl = null, ml = 0, Le = [], Re = 0, An = null, en = 1, nn = "";
function Rn(e, n) {
  bn[et++] = ml, bn[et++] = pl, pl = e, ml = n;
}
function Sc(e, n, t) {
  Le[Re++] = en, Le[Re++] = nn, Le[Re++] = An, An = e;
  var r = en;
  e = nn;
  var l = 32 - Ve(r) - 1;
  r &= ~(1 << l), t += 1;
  var i = 32 - Ve(n) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, en = 1 << 32 - Ve(n) + l | t << l | r, nn = i + e;
  } else
    en = 1 << i | t << l | r, nn = e;
}
function ru(e) {
  e.return !== null && (Rn(e, 1), Sc(e, 1, 0));
}
function lu(e) {
  for (; e === pl; )
    pl = bn[--et], bn[et] = null, ml = bn[--et], bn[et] = null;
  for (; e === An; )
    An = Le[--Re], Le[Re] = null, nn = Le[--Re], Le[Re] = null, en = Le[--Re], Le[Re] = null;
}
var _e = null, xe = null, U = !1, Ue = null;
function kc(e, n) {
  var t = Oe(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function Ss(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, _e = e, xe = wn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, _e = e, xe = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = An !== null ? { id: en, overflow: nn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Oe(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, _e = e, xe = null, !0) : !1;
    default:
      return !1;
  }
}
function ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function co(e) {
  if (U) {
    var n = xe;
    if (n) {
      var t = n;
      if (!Ss(e, n)) {
        if (ao(e))
          throw Error(y(418));
        n = wn(t.nextSibling);
        var r = _e;
        n && Ss(e, n) ? kc(r, t) : (e.flags = e.flags & -4097 | 2, U = !1, _e = e);
      }
    } else {
      if (ao(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, _e = e;
    }
  }
}
function ks(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function Mr(e) {
  if (e !== _e)
    return !1;
  if (!U)
    return ks(e), U = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !io(e.type, e.memoizedProps)), n && (n = xe)) {
    if (ao(e))
      throw Ec(), Error(y(418));
    for (; n; )
      kc(e, n), n = wn(n.nextSibling);
  }
  if (ks(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              xe = wn(e.nextSibling);
              break e;
            }
            n--;
          } else
            t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else
    xe = _e ? wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ec() {
  for (var e = xe; e; )
    e = wn(e.nextSibling);
}
function mt() {
  xe = _e = null, U = !1;
}
function iu(e) {
  Ue === null ? Ue = [e] : Ue.push(e);
}
var ym = sn.ReactCurrentBatchConfig;
function je(e, n) {
  if (e && e.defaultProps) {
    n = B({}, n), e = e.defaultProps;
    for (var t in e)
      n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var hl = Nn(null), vl = null, nt = null, ou = null;
function uu() {
  ou = nt = vl = null;
}
function su(e) {
  var n = hl.current;
  A(hl), e._currentValue = n;
}
function fo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
      break;
    e = e.return;
  }
}
function at(e, n) {
  vl = e, ou = nt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ye = !0), e.firstContext = null);
}
function $e(e) {
  var n = e._currentValue;
  if (ou !== e)
    if (e = { context: e, memoizedValue: n, next: null }, nt === null) {
      if (vl === null)
        throw Error(y(308));
      nt = e, vl.dependencies = { lanes: 0, firstContext: e };
    } else
      nt = nt.next = e;
  return n;
}
var $n = null;
function au(e) {
  $n === null ? $n = [e] : $n.push(e);
}
function xc(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, au(n)) : (t.next = l.next, l.next = t), n.interleaved = t, on(e, r);
}
function on(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var fn = !1;
function cu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Cc(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function tn(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function Sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, O & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, on(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, au(r)) : (n.next = l.next, l.next = n), r.interleaved = n, on(e, t);
}
function Yr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, Xo(e, t);
  }
}
function Es(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, i = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        i === null ? l = i = o : i = i.next = o, t = t.next;
      } while (t !== null);
      i === null ? l = i = n : i = i.next = n;
    } else
      l = i = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function yl(e, n, t, r) {
  var l = e.updateQueue;
  fn = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, o === null ? i = c : o.next = c, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== o && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, h = c = s = null, u = i;
    do {
      var p = u.lane, S = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: S,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, g = u;
          switch (p = n, S = t, g.tag) {
            case 1:
              if (w = g.payload, typeof w == "function") {
                m = w.call(S, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = g.payload, p = typeof w == "function" ? w.call(S, m, p) : w, p == null)
                break e;
              m = B({}, m, p);
              break e;
            case 2:
              fn = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        S = { eventTime: S, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = S, s = m) : h = h.next = S, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        o |= l.lane, l = l.next;
      while (l !== n);
    } else
      i === null && (l.shared.lanes = 0);
    Vn |= o, e.lanes = o, e.memoizedState = m;
  }
}
function xs(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null)
    for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function")
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var _c = new xa.Component().refs;
function po(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : B({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var Yl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Hn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = de(), l = En(e), i = tn(r, l);
  i.payload = n, t != null && (i.callback = t), n = Sn(e, i, l), n !== null && (We(n, e, l, r), Yr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = de(), l = En(e), i = tn(r, l);
  i.tag = 1, i.payload = n, t != null && (i.callback = t), n = Sn(e, i, l), n !== null && (We(n, e, l, r), Yr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = de(), r = En(e), l = tn(t, r);
  l.tag = 2, n != null && (l.callback = n), n = Sn(e, l, r), n !== null && (We(n, e, r, t), Yr(n, e, r));
} };
function Cs(e, n, t, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : n.prototype && n.prototype.isPureReactComponent ? !rr(t, r) || !rr(l, i) : !0;
}
function Pc(e, n, t) {
  var r = !1, l = _n, i = n.contextType;
  return typeof i == "object" && i !== null ? i = $e(i) : (l = we(n) ? jn : ce.current, r = n.contextTypes, i = (r = r != null) ? pt(e, l) : _n), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Yl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), n;
}
function _s(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Yl.enqueueReplaceState(n, n.state, null);
}
function mo(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = _c, cu(e);
  var i = n.contextType;
  typeof i == "object" && i !== null ? l.context = $e(i) : (i = we(n) ? jn : ce.current, l.context = pt(e, i)), l.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (po(e, n, i, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && Yl.enqueueReplaceState(l, l.state, null), yl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1)
          throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r)
        throw Error(y(147, e));
      var l = r, i = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === i ? n.ref : (n = function(o) {
        var u = l.refs;
        u === _c && (u = l.refs = {}), o === null ? delete u[i] : u[i] = o;
      }, n._stringRef = i, n);
    }
    if (typeof e != "string")
      throw Error(y(284));
    if (!t._owner)
      throw Error(y(290, e));
  }
  return e;
}
function $r(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Ps(e) {
  var n = e._init;
  return n(e._payload);
}
function Nc(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = xn(f, a), f.index = 0, f.sibling = null, f;
  }
  function i(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Ri(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Yn ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === cn && Ps(E) === a.type) ? (v = l(a, d.props), v.ref = Rt(f, a, d), v.return = f, v) : (v = br(d.type, d.key, d.props, null, f.mode, v), v.ref = Rt(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Oi(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = Fn(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = Ri("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case xr:
          return d = br(a.type, a.key, a.props, null, f.mode, d), d.ref = Rt(f, null, a), d.return = f, d;
        case Kn:
          return a = Oi(a, f.mode, d), a.return = f, a;
        case cn:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (It(a) || Pt(a))
        return a = Fn(a, f.mode, d, null), a.return = f, a;
      $r(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xr:
          return d.key === E ? s(f, a, d, v) : null;
        case Kn:
          return d.key === E ? c(f, a, d, v) : null;
        case cn:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (It(d) || Pt(d))
        return E !== null ? null : h(f, a, d, v, null);
      $r(f, d);
    }
    return null;
  }
  function S(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case xr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case Kn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case cn:
          var x = v._init;
          return S(f, a, d, x(v._payload), E);
      }
      if (It(v) || Pt(v))
        return f = f.get(d) || null, h(a, f, v, E, null);
      $r(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, x = null, k = a, P = a = 0, Q = null; k !== null && P < d.length; P++) {
      k.index > P ? (Q = k, k = null) : Q = k.sibling;
      var R = p(f, k, d[P], v);
      if (R === null) {
        k === null && (k = Q);
        break;
      }
      e && k && R.alternate === null && n(f, k), a = i(R, a, P), x === null ? E = R : x.sibling = R, x = R, k = Q;
    }
    if (P === d.length)
      return t(f, k), U && Rn(f, P), E;
    if (k === null) {
      for (; P < d.length; P++)
        k = m(f, d[P], v), k !== null && (a = i(k, a, P), x === null ? E = k : x.sibling = k, x = k);
      return U && Rn(f, P), E;
    }
    for (k = r(f, k); P < d.length; P++)
      Q = S(k, f, P, d[P], v), Q !== null && (e && Q.alternate !== null && k.delete(Q.key === null ? P : Q.key), a = i(Q, a, P), x === null ? E = Q : x.sibling = Q, x = Q);
    return e && k.forEach(function(De) {
      return n(f, De);
    }), U && Rn(f, P), E;
  }
  function g(f, a, d, v) {
    var E = Pt(d);
    if (typeof E != "function")
      throw Error(y(150));
    if (d = E.call(d), d == null)
      throw Error(y(151));
    for (var x = E = null, k = a, P = a = 0, Q = null, R = d.next(); k !== null && !R.done; P++, R = d.next()) {
      k.index > P ? (Q = k, k = null) : Q = k.sibling;
      var De = p(f, k, R.value, v);
      if (De === null) {
        k === null && (k = Q);
        break;
      }
      e && k && De.alternate === null && n(f, k), a = i(De, a, P), x === null ? E = De : x.sibling = De, x = De, k = Q;
    }
    if (R.done)
      return t(
        f,
        k
      ), U && Rn(f, P), E;
    if (k === null) {
      for (; !R.done; P++, R = d.next())
        R = m(f, R.value, v), R !== null && (a = i(R, a, P), x === null ? E = R : x.sibling = R, x = R);
      return U && Rn(f, P), E;
    }
    for (k = r(f, k); !R.done; P++, R = d.next())
      R = S(k, f, P, R.value, v), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? P : R.key), a = i(R, a, P), x === null ? E = R : x.sibling = R, x = R);
    return e && k.forEach(function(xt) {
      return n(f, xt);
    }), U && Rn(f, P), E;
  }
  function z(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Yn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xr:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (E = d.type, E === Yn) {
                  if (x.tag === 7) {
                    t(f, x.sibling), a = l(x, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (x.elementType === E || typeof E == "object" && E !== null && E.$$typeof === cn && Ps(E) === x.type) {
                  t(f, x.sibling), a = l(x, d.props), a.ref = Rt(f, x, d), a.return = f, f = a;
                  break e;
                }
                t(f, x);
                break;
              } else
                n(f, x);
              x = x.sibling;
            }
            d.type === Yn ? (a = Fn(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = br(d.type, d.key, d.props, null, f.mode, v), v.ref = Rt(f, a, d), v.return = f, f = v);
          }
          return o(f);
        case Kn:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else
                n(f, a);
              a = a.sibling;
            }
            a = Oi(d, f.mode, v), a.return = f, f = a;
          }
          return o(f);
        case cn:
          return x = d._init, z(f, a, x(d._payload), v);
      }
      if (It(d))
        return w(f, a, d, v);
      if (Pt(d))
        return g(f, a, d, v);
      $r(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Ri(d, f.mode, v), a.return = f, f = a), o(f)) : t(f, a);
  }
  return z;
}
var ht = Nc(!0), zc = Nc(!1), gr = {}, Je = Nn(gr), ur = Nn(gr), sr = Nn(gr);
function In(e) {
  if (e === gr)
    throw Error(y(174));
  return e;
}
function fu(e, n) {
  switch (F(sr, n), F(ur, e), F(Je, gr), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : Qi(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Qi(n, e);
  }
  A(Je), F(Je, n);
}
function vt() {
  A(Je), A(ur), A(sr);
}
function Tc(e) {
  In(sr.current);
  var n = In(Je.current), t = Qi(n, e.type);
  n !== t && (F(ur, e), F(Je, t));
}
function du(e) {
  ur.current === e && (A(Je), A(ur));
}
var V = Nn(0);
function gl(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128)
        return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e)
        return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var _i = [];
function pu() {
  for (var e = 0; e < _i.length; e++)
    _i[e]._workInProgressVersionPrimary = null;
  _i.length = 0;
}
var Gr = sn.ReactCurrentDispatcher, Pi = sn.ReactCurrentBatchConfig, Un = 0, W = null, Z = null, b = null, wl = !1, Bt = !1, ar = 0, gm = 0;
function oe() {
  throw Error(y(321));
}
function mu(e, n) {
  if (n === null)
    return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Be(e[t], n[t]))
      return !1;
  return !0;
}
function hu(e, n, t, r, l, i) {
  if (Un = i, W = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Gr.current = e === null || e.memoizedState === null ? Em : xm, e = t(r, l), Bt) {
    i = 0;
    do {
      if (Bt = !1, ar = 0, 25 <= i)
        throw Error(y(301));
      i += 1, b = Z = null, n.updateQueue = null, Gr.current = Cm, e = t(r, l);
    } while (Bt);
  }
  if (Gr.current = Sl, n = Z !== null && Z.next !== null, Un = 0, b = Z = W = null, wl = !1, n)
    throw Error(y(300));
  return e;
}
function vu() {
  var e = ar !== 0;
  return ar = 0, e;
}
function Qe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return b === null ? W.memoizedState = b = e : b = b.next = e, b;
}
function Ie() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Z.next;
  var n = b === null ? W.memoizedState : b.next;
  if (n !== null)
    b = n, Z = e;
  else {
    if (e === null)
      throw Error(y(310));
    Z = e, e = { memoizedState: Z.memoizedState, baseState: Z.baseState, baseQueue: Z.baseQueue, queue: Z.queue, next: null }, b === null ? W.memoizedState = b = e : b = b.next = e;
  }
  return b;
}
function cr(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Ni(e) {
  var n = Ie(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Z, l = r.baseQueue, i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, t.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, s = null, c = i;
    do {
      var h = c.lane;
      if ((Un & h) === h)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = m, o = r) : s = s.next = m, W.lanes |= h, Vn |= h;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? o = r : s.next = u, Be(r, n.memoizedState) || (ye = !0), n.memoizedState = r, n.baseState = o, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, W.lanes |= i, Vn |= i, l = l.next;
    while (l !== e);
  } else
    l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function zi(e) {
  var n = Ie(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Be(i, n.memoizedState) || (ye = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
  }
  return [i, r];
}
function Lc() {
}
function Rc(e, n) {
  var t = W, r = Ie(), l = n(), i = !Be(r.memoizedState, l);
  if (i && (r.memoizedState = l, ye = !0), r = r.queue, yu($c.bind(null, t, r, e), [e]), r.getSnapshot !== n || i || b !== null && b.memoizedState.tag & 1) {
    if (t.flags |= 2048, fr(9, Mc.bind(null, t, r, l, n), void 0, null), ee === null)
      throw Error(y(349));
    Un & 30 || Oc(t, n, l);
  }
  return l;
}
function Oc(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = W.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, W.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Mc(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Ic(n) && Dc(e);
}
function $c(e, n, t) {
  return t(function() {
    Ic(n) && Dc(e);
  });
}
function Ic(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Be(e, t);
  } catch {
    return !0;
  }
}
function Dc(e) {
  var n = on(e, 1);
  n !== null && We(n, e, 1, -1);
}
function Ns(e) {
  var n = Qe();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, n.queue = e, e = e.dispatch = km.bind(null, W, e), [n.memoizedState, e];
}
function fr(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = W.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, W.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Fc() {
  return Ie().memoizedState;
}
function Xr(e, n, t, r) {
  var l = Qe();
  W.flags |= e, l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r);
}
function Gl(e, n, t, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (i = o.destroy, r !== null && mu(r, o.deps)) {
      l.memoizedState = fr(n, t, i, r);
      return;
    }
  }
  W.flags |= e, l.memoizedState = fr(1 | n, t, i, r);
}
function zs(e, n) {
  return Xr(8390656, 8, e, n);
}
function yu(e, n) {
  return Gl(2048, 8, e, n);
}
function jc(e, n) {
  return Gl(4, 2, e, n);
}
function Ac(e, n) {
  return Gl(4, 4, e, n);
}
function Uc(e, n) {
  if (typeof n == "function")
    return e = e(), n(e), function() {
      n(null);
    };
  if (n != null)
    return e = e(), n.current = e, function() {
      n.current = null;
    };
}
function Vc(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Gl(4, 4, Uc.bind(null, n, e), t);
}
function gu() {
}
function Wc(e, n) {
  var t = Ie();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && mu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Bc(e, n) {
  var t = Ie();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && mu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Hc(e, n, t) {
  return Un & 21 ? (Be(t, n) || (t = Ya(), W.lanes |= t, Vn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ye = !0), e.memoizedState = t);
}
function wm(e, n) {
  var t = I;
  I = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Pi.transition;
  Pi.transition = {};
  try {
    e(!1), n();
  } finally {
    I = t, Pi.transition = r;
  }
}
function Qc() {
  return Ie().memoizedState;
}
function Sm(e, n, t) {
  var r = En(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Kc(e))
    Yc(n, t);
  else if (t = xc(e, n, t, r), t !== null) {
    var l = de();
    We(t, e, r, l), Gc(t, n, r);
  }
}
function km(e, n, t) {
  var r = En(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Kc(e))
    Yc(n, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = n.lastRenderedReducer, i !== null))
      try {
        var o = n.lastRenderedState, u = i(o, t);
        if (l.hasEagerState = !0, l.eagerState = u, Be(u, o)) {
          var s = n.interleaved;
          s === null ? (l.next = l, au(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    t = xc(e, n, l, r), t !== null && (l = de(), We(t, e, r, l), Gc(t, n, r));
  }
}
function Kc(e) {
  var n = e.alternate;
  return e === W || n !== null && n === W;
}
function Yc(e, n) {
  Bt = wl = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Gc(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, Xo(e, t);
  }
}
var Sl = { readContext: $e, useCallback: oe, useContext: oe, useEffect: oe, useImperativeHandle: oe, useInsertionEffect: oe, useLayoutEffect: oe, useMemo: oe, useReducer: oe, useRef: oe, useState: oe, useDebugValue: oe, useDeferredValue: oe, useTransition: oe, useMutableSource: oe, useSyncExternalStore: oe, useId: oe, unstable_isNewReconciler: !1 }, Em = { readContext: $e, useCallback: function(e, n) {
  return Qe().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: $e, useEffect: zs, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Xr(
    4194308,
    4,
    Uc.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Xr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Xr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = Qe();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = Qe();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Sm.bind(null, W, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = Qe();
  return e = { current: e }, n.memoizedState = e;
}, useState: Ns, useDebugValue: gu, useDeferredValue: function(e) {
  return Qe().memoizedState = e;
}, useTransition: function() {
  var e = Ns(!1), n = e[0];
  return e = wm.bind(null, e[1]), Qe().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = W, l = Qe();
  if (U) {
    if (t === void 0)
      throw Error(y(407));
    t = t();
  } else {
    if (t = n(), ee === null)
      throw Error(y(349));
    Un & 30 || Oc(r, n, t);
  }
  l.memoizedState = t;
  var i = { value: t, getSnapshot: n };
  return l.queue = i, zs($c.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, fr(9, Mc.bind(null, r, i, t, n), void 0, null), t;
}, useId: function() {
  var e = Qe(), n = ee.identifierPrefix;
  if (U) {
    var t = nn, r = en;
    t = (r & ~(1 << 32 - Ve(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ar++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else
    t = gm++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, xm = {
  readContext: $e,
  useCallback: Wc,
  useContext: $e,
  useEffect: yu,
  useImperativeHandle: Vc,
  useInsertionEffect: jc,
  useLayoutEffect: Ac,
  useMemo: Bc,
  useReducer: Ni,
  useRef: Fc,
  useState: function() {
    return Ni(cr);
  },
  useDebugValue: gu,
  useDeferredValue: function(e) {
    var n = Ie();
    return Hc(n, Z.memoizedState, e);
  },
  useTransition: function() {
    var e = Ni(cr)[0], n = Ie().memoizedState;
    return [e, n];
  },
  useMutableSource: Lc,
  useSyncExternalStore: Rc,
  useId: Qc,
  unstable_isNewReconciler: !1
}, Cm = { readContext: $e, useCallback: Wc, useContext: $e, useEffect: yu, useImperativeHandle: Vc, useInsertionEffect: jc, useLayoutEffect: Ac, useMemo: Bc, useReducer: zi, useRef: Fc, useState: function() {
  return zi(cr);
}, useDebugValue: gu, useDeferredValue: function(e) {
  var n = Ie();
  return Z === null ? n.memoizedState = e : Hc(n, Z.memoizedState, e);
}, useTransition: function() {
  var e = zi(cr)[0], n = Ie().memoizedState;
  return [e, n];
}, useMutableSource: Lc, useSyncExternalStore: Rc, useId: Qc, unstable_isNewReconciler: !1 };
function yt(e, n) {
  try {
    var t = "", r = n;
    do
      t += qd(r), r = r.return;
    while (r);
    var l = t;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Ti(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function ho(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var _m = typeof WeakMap == "function" ? WeakMap : Map;
function Xc(e, n, t) {
  t = tn(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    El || (El = !0, _o = r), ho(e, n);
  }, t;
}
function Zc(e, n, t) {
  t = tn(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      ho(e, n);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
    ho(e, n), typeof r != "function" && (kn === null ? kn = /* @__PURE__ */ new Set([this]) : kn.add(this));
    var o = n.stack;
    this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
  }), t;
}
function Ts(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _m();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else
    l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Am.bind(null, e, n, t), n.then(e, e));
}
function Ls(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Rs(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = tn(-1, 1), n.tag = 2, Sn(t, n, 1))), t.lanes |= 1), e);
}
var Pm = sn.ReactCurrentOwner, ye = !1;
function fe(e, n, t, r) {
  n.child = e === null ? zc(n, null, t, r) : ht(n, e.child, t, r);
}
function Os(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return at(n, l), r = hu(e, n, t, r, i, l), t = vu(), e !== null && !ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, un(e, n, l)) : (U && t && ru(n), n.flags |= 1, fe(e, n, r, l), n.child);
}
function Ms(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" && !Pu(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = i, Jc(e, n, i, r, l)) : (e = br(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (t = t.compare, t = t !== null ? t : rr, t(o, r) && e.ref === n.ref)
      return un(e, n, l);
  }
  return n.flags |= 1, e = xn(i, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Jc(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rr(i, r) && e.ref === n.ref)
      if (ye = !1, n.pendingProps = r = i, (e.lanes & l) !== 0)
        e.flags & 131072 && (ye = !0);
      else
        return n.lanes = e.lanes, un(e, n, l);
  }
  return vo(e, n, t, r, l);
}
function qc(e, n, t) {
  var r = n.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(rt, Ee), Ee |= t;
    else {
      if (!(t & 1073741824))
        return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, F(rt, Ee), Ee |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : t, F(rt, Ee), Ee |= r;
    }
  else
    i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, F(rt, Ee), Ee |= r;
  return fe(e, n, l, t), n.child;
}
function bc(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function vo(e, n, t, r, l) {
  var i = we(t) ? jn : ce.current;
  return i = pt(n, i), at(n, l), t = hu(e, n, t, r, i, l), r = vu(), e !== null && !ye ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, un(e, n, l)) : (U && r && ru(n), n.flags |= 1, fe(e, n, t, l), n.child);
}
function $s(e, n, t, r, l) {
  if (we(t)) {
    var i = !0;
    dl(n);
  } else
    i = !1;
  if (at(n, l), n.stateNode === null)
    Zr(e, n), Pc(n, t, r), mo(n, t, r, l), r = !0;
  else if (e === null) {
    var o = n.stateNode, u = n.memoizedProps;
    o.props = u;
    var s = o.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = $e(c) : (c = we(t) ? jn : ce.current, c = pt(n, c));
    var h = t.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && _s(n, o, r, c), fn = !1;
    var p = n.memoizedState;
    o.state = p, yl(n, r, o, l), s = n.memoizedState, u !== r || p !== s || ge.current || fn ? (typeof h == "function" && (po(n, t, h, r), s = n.memoizedState), (u = fn || Cs(n, t, u, r, p, s, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    o = n.stateNode, Cc(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : je(n.type, u), o.props = c, m = n.pendingProps, p = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = $e(s) : (s = we(t) ? jn : ce.current, s = pt(n, s));
    var S = t.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== s) && _s(n, o, r, s), fn = !1, p = n.memoizedState, o.state = p, yl(n, r, o, l);
    var w = n.memoizedState;
    u !== m || p !== w || ge.current || fn ? (typeof S == "function" && (po(n, t, S, r), w = n.memoizedState), (c = fn || Cs(n, t, c, r, p, w, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), o.props = r, o.state = w, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return yo(e, n, t, r, i, l);
}
function yo(e, n, t, r, l, i) {
  bc(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o)
    return l && ws(n, t, !1), un(e, n, i);
  r = n.stateNode, Pm.current = n;
  var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && o ? (n.child = ht(n, e.child, null, i), n.child = ht(n, null, u, i)) : fe(e, n, u, i), n.memoizedState = r.state, l && ws(n, t, !0), n.child;
}
function ef(e) {
  var n = e.stateNode;
  n.pendingContext ? gs(e, n.pendingContext, n.pendingContext !== n.context) : n.context && gs(e, n.context, !1), fu(e, n.containerInfo);
}
function Is(e, n, t, r, l) {
  return mt(), iu(l), n.flags |= 256, fe(e, n, t, r), n.child;
}
var go = { dehydrated: null, treeContext: null, retryLane: 0 };
function wo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nf(e, n, t) {
  var r = n.pendingProps, l = V.current, i = !1, o = (n.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(V, l & 1), e === null)
    return co(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = n.mode, i = n.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Jl(o, r, 0, null), e = Fn(e, r, t, null), i.return = n, e.return = n, i.sibling = e, n.child = i, n.child.memoizedState = wo(t), n.memoizedState = go, e) : wu(n, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Nm(e, n, o, r, u, l, t);
  if (i) {
    i = r.fallback, o = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = xn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = xn(u, i) : (i = Fn(i, o, t, null), i.flags |= 2), i.return = n, r.return = n, r.sibling = i, n.child = r, r = i, i = n.child, o = e.child.memoizedState, o = o === null ? wo(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~t, n.memoizedState = go, r;
  }
  return i = e.child, e = i.sibling, r = xn(i, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function wu(e, n) {
  return n = Jl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function Ir(e, n, t, r) {
  return r !== null && iu(r), ht(n, e.child, null, t), e = wu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function Nm(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Ti(Error(y(422))), Ir(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (i = r.fallback, l = n.mode, r = Jl({ mode: "visible", children: r.children }, l, 0, null), i = Fn(i, l, o, null), i.flags |= 2, r.return = n, i.return = n, r.sibling = i, n.child = r, n.mode & 1 && ht(n, e.child, null, o), n.child.memoizedState = wo(o), n.memoizedState = go, i);
  if (!(n.mode & 1))
    return Ir(e, n, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, i = Error(y(419)), r = Ti(i, r, void 0), Ir(e, n, o, r);
  }
  if (u = (o & e.childLanes) !== 0, ye || u) {
    if (r = ee, r !== null) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, on(e, l), We(r, e, l, -1));
    }
    return _u(), r = Ti(Error(y(421))), Ir(e, n, o, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Um.bind(null, e), l._reactRetry = n, null) : (e = i.treeContext, xe = wn(l.nextSibling), _e = n, U = !0, Ue = null, e !== null && (Le[Re++] = en, Le[Re++] = nn, Le[Re++] = An, en = e.id, nn = e.overflow, An = n), n = wu(n, r.children), n.flags |= 4096, n);
}
function Ds(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), fo(e.return, n, t);
}
function Li(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (i.isBackwards = n, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = l);
}
function tf(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, i = r.tail;
  if (fe(e, n, r.children, t), r = V.current, r & 2)
    r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ds(e, t, n);
          else if (e.tag === 19)
            Ds(e, t, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (F(V, r), !(n.mode & 1))
    n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          e = t.alternate, e !== null && gl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Li(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && gl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        Li(n, !0, t, null, i);
        break;
      case "together":
        Li(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Zr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function un(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Vn |= n.lanes, !(t & n.childLanes))
    return null;
  if (e !== null && n.child !== e.child)
    throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = xn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
      e = e.sibling, t = t.sibling = xn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function zm(e, n, t) {
  switch (n.tag) {
    case 3:
      ef(n), mt();
      break;
    case 5:
      Tc(n);
      break;
    case 1:
      we(n.type) && dl(n);
      break;
    case 4:
      fu(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      F(hl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(V, V.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? nf(e, n, t) : (F(V, V.current & 1), e = un(e, n, t), e !== null ? e.sibling : null);
      F(V, V.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r)
          return tf(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(V, V.current), r)
        break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, qc(e, n, t);
  }
  return un(e, n, t);
}
var rf, So, lf, of;
rf = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6)
      e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n)
        return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
So = function() {
};
lf = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, In(Je.current);
    var i = null;
    switch (t) {
      case "input":
        l = Vi(e, l), r = Vi(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Hi(e, l), r = Hi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = cl);
    }
    Ki(t, r);
    var o;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u)
            u.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Zt.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
            for (o in s)
              s.hasOwnProperty(o) && u[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
          } else
            t || (i || (i = []), i.push(
              c,
              t
            )), t = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Zt.hasOwnProperty(c) ? (s != null && c === "onScroll" && j("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    t && (i = i || []).push("style", t);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
of = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Ot(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ue(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function Tm(e, n, t) {
  var r = n.pendingProps;
  switch (lu(n), n.tag) {
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
      return ue(n), null;
    case 1:
      return we(n.type) && fl(), ue(n), null;
    case 3:
      return r = n.stateNode, vt(), A(ge), A(ce), pu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Mr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Ue !== null && (zo(Ue), Ue = null))), So(e, n), ue(n), null;
    case 5:
      du(n);
      var l = In(sr.current);
      if (t = n.type, e !== null && n.stateNode != null)
        lf(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null)
            throw Error(y(166));
          return ue(n), null;
        }
        if (e = In(Je.current), Mr(n)) {
          r = n.stateNode, t = n.type;
          var i = n.memoizedProps;
          switch (r[Ge] = n, r[or] = i, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              j("cancel", r), j("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              j("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ft.length; l++)
                j(Ft[l], r);
              break;
            case "source":
              j("error", r);
              break;
            case "img":
            case "image":
            case "link":
              j(
                "error",
                r
              ), j("load", r);
              break;
            case "details":
              j("toggle", r);
              break;
            case "input":
              Qu(r, i), j("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, j("invalid", r);
              break;
            case "textarea":
              Yu(r, i), j("invalid", r);
          }
          Ki(t, i), l = null;
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Or(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Or(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Zt.hasOwnProperty(o) && u != null && o === "onScroll" && j("scroll", r);
            }
          switch (t) {
            case "input":
              Cr(r), Ku(r, i, !0);
              break;
            case "textarea":
              Cr(r), Gu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = cl);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oa(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, { is: r.is }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[Ge] = n, e[or] = r, rf(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (o = Yi(t, r), t) {
              case "dialog":
                j("cancel", e), j("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ft.length; l++)
                  j(Ft[l], e);
                l = r;
                break;
              case "source":
                j("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                j(
                  "error",
                  e
                ), j("load", e), l = r;
                break;
              case "details":
                j("toggle", e), l = r;
                break;
              case "input":
                Qu(e, r), l = Vi(e, r), j("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), j("invalid", e);
                break;
              case "textarea":
                Yu(e, r), l = Hi(e, r), j("invalid", e);
                break;
              default:
                l = r;
            }
            Ki(t, l), u = l;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? Ia(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ma(e, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Jt(e, s) : typeof s == "number" && Jt(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Zt.hasOwnProperty(i) ? s != null && i === "onScroll" && j("scroll", e) : s != null && Bo(e, i, s, o));
              }
            switch (t) {
              case "input":
                Cr(e), Ku(e, r, !1);
                break;
              case "textarea":
                Cr(e), Gu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Cn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? it(e, !!r.multiple, i, !1) : r.defaultValue != null && it(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = cl);
            }
            switch (t) {
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
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ue(n), null;
    case 6:
      if (e && n.stateNode != null)
        of(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null)
          throw Error(y(166));
        if (t = In(sr.current), In(Je.current), Mr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ge] = n, (i = r.nodeValue !== t) && (e = _e, e !== null))
            switch (e.tag) {
              case 3:
                Or(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Or(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ge] = n, n.stateNode = r;
      }
      return ue(n), null;
    case 13:
      if (A(V), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && xe !== null && n.mode & 1 && !(n.flags & 128))
          Ec(), mt(), n.flags |= 98560, i = !1;
        else if (i = Mr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(y(318));
            if (i = n.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(y(317));
            i[Ge] = n;
          } else
            mt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ue(n), i = !1;
        } else
          Ue !== null && (zo(Ue), Ue = null), i = !0;
        if (!i)
          return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || V.current & 1 ? J === 0 && (J = 3) : _u())), n.updateQueue !== null && (n.flags |= 4), ue(n), null);
    case 4:
      return vt(), So(e, n), e === null && lr(n.stateNode.containerInfo), ue(n), null;
    case 10:
      return su(n.type._context), ue(n), null;
    case 17:
      return we(n.type) && fl(), ue(n), null;
    case 19:
      if (A(V), i = n.memoizedState, i === null)
        return ue(n), null;
      if (r = (n.flags & 128) !== 0, o = i.rendering, o === null)
        if (r)
          Ot(i, !1);
        else {
          if (J !== 0 || e !== null && e.flags & 128)
            for (e = n.child; e !== null; ) {
              if (o = gl(e), o !== null) {
                for (n.flags |= 128, Ot(i, !1), r = o.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                  i = t, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                return F(V, V.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Y() > gt && (n.flags |= 128, r = !0, Ot(i, !1), n.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = gl(o), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Ot(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
              return ue(n), null;
          } else
            2 * Y() - i.renderingStartTime > gt && t !== 1073741824 && (n.flags |= 128, r = !0, Ot(i, !1), n.lanes = 4194304);
        i.isBackwards ? (o.sibling = n.child, n.child = o) : (t = i.last, t !== null ? t.sibling = o : n.child = o, i.last = o);
      }
      return i.tail !== null ? (n = i.tail, i.rendering = n, i.tail = n.sibling, i.renderingStartTime = Y(), n.sibling = null, t = V.current, F(V, r ? t & 1 | 2 : t & 1), n) : (ue(n), null);
    case 22:
    case 23:
      return Cu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Ee & 1073741824 && (ue(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ue(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function Lm(e, n) {
  switch (lu(n), n.tag) {
    case 1:
      return we(n.type) && fl(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return vt(), A(ge), A(ce), pu(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return du(n), null;
    case 13:
      if (A(V), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null)
          throw Error(y(340));
        mt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return A(V), null;
    case 4:
      return vt(), null;
    case 10:
      return su(n.type._context), null;
    case 22:
    case 23:
      return Cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1, ae = !1, Rm = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function tt(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        H(e, n, r);
      }
    else
      t.current = null;
}
function ko(e, n, t) {
  try {
    t();
  } catch (r) {
    H(e, n, r);
  }
}
var Fs = !1;
function Om(e, n) {
  if (ro = ul, e = ac(), tu(e)) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0, u = -1, s = -1, c = 0, h = 0, m = e, p = null;
          n:
            for (; ; ) {
              for (var S; m !== t || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (S = m.firstChild) !== null; )
                p = m, m = S;
              for (; ; ) {
                if (m === e)
                  break n;
                if (p === t && ++c === l && (u = o), p === i && ++h === r && (s = o), (S = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = S;
            }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          t = null;
      }
    t = t || { start: 0, end: 0 };
  } else
    t = null;
  for (lo = { focusedElem: e, selectionRange: t }, ul = !1, C = n; C !== null; )
    if (n = C, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = n, C = e;
    else
      for (; C !== null; ) {
        n = C;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps, z = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? g : je(n.type, g), z);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          H(n, n.return, v);
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, C = e;
          break;
        }
        C = n.return;
      }
  return w = Fs, Fs = !1, w;
}
function Ht(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && ko(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Xl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Eo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function uf(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, uf(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ge], delete n[or], delete n[uo], delete n[mm], delete n[hm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function sf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function js(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || sf(e.return))
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
function xo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = cl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (xo(e, n, t), e = e.sibling; e !== null; )
      xo(e, n, t), e = e.sibling;
}
function Co(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Co(e, n, t), e = e.sibling; e !== null; )
      Co(e, n, t), e = e.sibling;
}
var te = null, Ae = !1;
function an(e, n, t) {
  for (t = t.child; t !== null; )
    af(e, n, t), t = t.sibling;
}
function af(e, n, t) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function")
    try {
      Ze.onCommitFiberUnmount(Vl, t);
    } catch {
    }
  switch (t.tag) {
    case 5:
      ae || tt(t, n);
    case 6:
      var r = te, l = Ae;
      te = null, an(e, n, t), te = r, Ae = l, te !== null && (Ae ? (e = te, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : te.removeChild(t.stateNode));
      break;
    case 18:
      te !== null && (Ae ? (e = te, t = t.stateNode, e.nodeType === 8 ? xi(e.parentNode, t) : e.nodeType === 1 && xi(e, t), nr(e)) : xi(te, t.stateNode));
      break;
    case 4:
      r = te, l = Ae, te = t.stateNode.containerInfo, Ae = !0, an(e, n, t), te = r, Ae = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ae && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && ko(t, n, o), l = l.next;
        } while (l !== r);
      }
      an(e, n, t);
      break;
    case 1:
      if (!ae && (tt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          H(t, n, u);
        }
      an(e, n, t);
      break;
    case 21:
      an(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (ae = (r = ae) || t.memoizedState !== null, an(e, n, t), ae = r) : an(e, n, t);
      break;
    default:
      an(e, n, t);
  }
}
function As(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Rm()), n.forEach(function(r) {
      var l = Vm.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Fe(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e, o = n, u = o;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                te = u.stateNode, Ae = !1;
                break e;
              case 3:
                te = u.stateNode.containerInfo, Ae = !0;
                break e;
              case 4:
                te = u.stateNode.containerInfo, Ae = !0;
                break e;
            }
            u = u.return;
          }
        if (te === null)
          throw Error(y(160));
        af(i, o, l), te = null, Ae = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        H(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; )
      cf(n, e), n = n.sibling;
}
function cf(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Fe(n, e), He(e), r & 4) {
        try {
          Ht(3, e, e.return), Xl(3, e);
        } catch (g) {
          H(e, e.return, g);
        }
        try {
          Ht(5, e, e.return);
        } catch (g) {
          H(e, e.return, g);
        }
      }
      break;
    case 1:
      Fe(n, e), He(e), r & 512 && t !== null && tt(t, t.return);
      break;
    case 5:
      if (Fe(n, e), He(e), r & 512 && t !== null && tt(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Jt(l, "");
        } catch (g) {
          H(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = t !== null ? t.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && i.type === "radio" && i.name != null && La(l, i), Yi(u, o);
            var c = Yi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o], m = s[o + 1];
              h === "style" ? Ia(l, m) : h === "dangerouslySetInnerHTML" ? Ma(l, m) : h === "children" ? Jt(l, m) : Bo(l, h, m, c);
            }
            switch (u) {
              case "input":
                Wi(l, i);
                break;
              case "textarea":
                Ra(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null ? it(l, !!i.multiple, S, !1) : p !== !!i.multiple && (i.defaultValue != null ? it(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : it(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[or] = i;
          } catch (g) {
            H(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Fe(n, e), He(e), r & 4) {
        if (e.stateNode === null)
          throw Error(y(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (g) {
          H(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Fe(n, e), He(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        try {
          nr(n.containerInfo);
        } catch (g) {
          H(e, e.return, g);
        }
      break;
    case 4:
      Fe(n, e), He(e);
      break;
    case 13:
      Fe(n, e), He(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Eu = Y())), r & 4 && As(e);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, e.mode & 1 ? (ae = (c = ae) || h, Fe(n, e), ae = c) : Fe(n, e), He(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1)
          for (C = e, h = e.child; h !== null; ) {
            for (m = C = h; C !== null; ) {
              switch (p = C, S = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ht(4, p, p.return);
                  break;
                case 1:
                  tt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, t = p.return;
                    try {
                      n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                    } catch (g) {
                      H(r, t, g);
                    }
                  }
                  break;
                case 5:
                  tt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Vs(m);
                    continue;
                  }
              }
              S !== null ? (S.return = p, C = S) : Vs(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = $a("display", o));
                } catch (g) {
                  H(e, e.return, g);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                } catch (g) {
                  H(e, e.return, g);
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
              h === m && (h = null), m = m.return;
            }
            h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
          }
      }
      break;
    case 19:
      Fe(n, e), He(e), r & 4 && As(e);
      break;
    case 21:
      break;
    default:
      Fe(
        n,
        e
      ), He(e);
  }
}
function He(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (sf(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jt(l, ""), r.flags &= -33);
          var i = js(e);
          Co(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = js(e);
          xo(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Mm(e, n, t) {
  C = e, ff(e);
}
function ff(e, n, t) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Dr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ae;
        u = Dr;
        var c = ae;
        if (Dr = o, (ae = s) && !c)
          for (C = l; C !== null; )
            o = C, s = o.child, o.tag === 22 && o.memoizedState !== null ? Ws(l) : s !== null ? (s.return = o, C = s) : Ws(l);
        for (; i !== null; )
          C = i, ff(i), i = i.sibling;
        C = l, Dr = u, ae = c;
      }
      Us(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? (i.return = l, C = i) : Us(e);
  }
}
function Us(e) {
  for (; C !== null; ) {
    var n = C;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              ae || Xl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !ae)
                if (t === null)
                  r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : je(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = n.updateQueue;
              i !== null && xs(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (t = null, n.child !== null)
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                xs(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
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
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && nr(m);
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
              throw Error(y(163));
          }
        ae || n.flags & 512 && Eo(n);
      } catch (p) {
        H(n, n.return, p);
      }
    }
    if (n === e) {
      C = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, C = t;
      break;
    }
    C = n.return;
  }
}
function Vs(e) {
  for (; C !== null; ) {
    var n = C;
    if (n === e) {
      C = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, C = t;
      break;
    }
    C = n.return;
  }
}
function Ws(e) {
  for (; C !== null; ) {
    var n = C;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            Xl(4, n);
          } catch (s) {
            H(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(n, l, s);
            }
          }
          var i = n.return;
          try {
            Eo(n);
          } catch (s) {
            H(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Eo(n);
          } catch (s) {
            H(n, o, s);
          }
      }
    } catch (s) {
      H(n, n.return, s);
    }
    if (n === e) {
      C = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, C = u;
      break;
    }
    C = n.return;
  }
}
var $m = Math.ceil, kl = sn.ReactCurrentDispatcher, Su = sn.ReactCurrentOwner, Me = sn.ReactCurrentBatchConfig, O = 0, ee = null, X = null, le = 0, Ee = 0, rt = Nn(0), J = 0, dr = null, Vn = 0, Zl = 0, ku = 0, Qt = null, he = null, Eu = 0, gt = 1 / 0, qe = null, El = !1, _o = null, kn = null, Fr = !1, hn = null, xl = 0, Kt = 0, Po = null, Jr = -1, qr = 0;
function de() {
  return O & 6 ? Y() : Jr !== -1 ? Jr : Jr = Y();
}
function En(e) {
  return e.mode & 1 ? O & 2 && le !== 0 ? le & -le : ym.transition !== null ? (qr === 0 && (qr = Ya()), qr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ec(e.type)), e) : 1;
}
function We(e, n, t, r) {
  if (50 < Kt)
    throw Kt = 0, Po = null, Error(y(185));
  hr(e, t, r), (!(O & 2) || e !== ee) && (e === ee && (!(O & 2) && (Zl |= t), J === 4 && pn(e, le)), Se(e, r), t === 1 && O === 0 && !(n.mode & 1) && (gt = Y() + 500, Kl && zn()));
}
function Se(e, n) {
  var t = e.callbackNode;
  yp(e, n);
  var r = ol(e, e === ee ? le : 0);
  if (r === 0)
    t !== null && Ju(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Ju(t), n === 1)
      e.tag === 0 ? vm(Bs.bind(null, e)) : wc(Bs.bind(null, e)), dm(function() {
        !(O & 6) && zn();
      }), t = null;
    else {
      switch (Ga(r)) {
        case 1:
          t = Go;
          break;
        case 4:
          t = Qa;
          break;
        case 16:
          t = il;
          break;
        case 536870912:
          t = Ka;
          break;
        default:
          t = il;
      }
      t = wf(t, df.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function df(e, n) {
  if (Jr = -1, qr = 0, O & 6)
    throw Error(y(327));
  var t = e.callbackNode;
  if (ct() && e.callbackNode !== t)
    return null;
  var r = ol(e, e === ee ? le : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || n)
    n = Cl(e, r);
  else {
    n = r;
    var l = O;
    O |= 2;
    var i = mf();
    (ee !== e || le !== n) && (qe = null, gt = Y() + 500, Dn(e, n));
    do
      try {
        Fm();
        break;
      } catch (u) {
        pf(e, u);
      }
    while (1);
    uu(), kl.current = i, O = l, X !== null ? n = 0 : (ee = null, le = 0, n = J);
  }
  if (n !== 0) {
    if (n === 2 && (l = qi(e), l !== 0 && (r = l, n = No(e, l))), n === 1)
      throw t = dr, Dn(e, 0), pn(e, r), Se(e, Y()), t;
    if (n === 6)
      pn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Im(l) && (n = Cl(e, r), n === 2 && (i = qi(e), i !== 0 && (r = i, n = No(e, i))), n === 1))
        throw t = dr, Dn(e, 0), pn(e, r), Se(e, Y()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          On(e, he, qe);
          break;
        case 3:
          if (pn(e, r), (r & 130023424) === r && (n = Eu + 500 - Y(), 10 < n)) {
            if (ol(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              de(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = oo(On.bind(null, e, he, qe), n);
            break;
          }
          On(e, he, qe);
          break;
        case 4:
          if (pn(e, r), (r & 4194240) === r)
            break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ve(r);
            i = 1 << o, o = n[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $m(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = oo(On.bind(null, e, he, qe), r);
            break;
          }
          On(e, he, qe);
          break;
        case 5:
          On(e, he, qe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return Se(e, Y()), e.callbackNode === t ? df.bind(null, e) : null;
}
function No(e, n) {
  var t = Qt;
  return e.current.memoizedState.isDehydrated && (Dn(e, n).flags |= 256), e = Cl(e, n), e !== 2 && (n = he, he = t, n !== null && zo(n)), e;
}
function zo(e) {
  he === null ? he = e : he.push.apply(he, e);
}
function Im(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Be(i(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null)
      t.return = n, n = t;
    else {
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function pn(e, n) {
  for (n &= ~ku, n &= ~Zl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Ve(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Bs(e) {
  if (O & 6)
    throw Error(y(327));
  ct();
  var n = ol(e, 0);
  if (!(n & 1))
    return Se(e, Y()), null;
  var t = Cl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = qi(e);
    r !== 0 && (n = r, t = No(e, r));
  }
  if (t === 1)
    throw t = dr, Dn(e, 0), pn(e, n), Se(e, Y()), t;
  if (t === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, On(e, he, qe), Se(e, Y()), null;
}
function xu(e, n) {
  var t = O;
  O |= 1;
  try {
    return e(n);
  } finally {
    O = t, O === 0 && (gt = Y() + 500, Kl && zn());
  }
}
function Wn(e) {
  hn !== null && hn.tag === 0 && !(O & 6) && ct();
  var n = O;
  O |= 1;
  var t = Me.transition, r = I;
  try {
    if (Me.transition = null, I = 1, e)
      return e();
  } finally {
    I = r, Me.transition = t, O = n, !(O & 6) && zn();
  }
}
function Cu() {
  Ee = rt.current, A(rt);
}
function Dn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, fm(t)), X !== null)
    for (t = X.return; t !== null; ) {
      var r = t;
      switch (lu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && fl();
          break;
        case 3:
          vt(), A(ge), A(ce), pu();
          break;
        case 5:
          du(r);
          break;
        case 4:
          vt();
          break;
        case 13:
          A(V);
          break;
        case 19:
          A(V);
          break;
        case 10:
          su(r.type._context);
          break;
        case 22:
        case 23:
          Cu();
      }
      t = t.return;
    }
  if (ee = e, X = e = xn(e.current, null), le = Ee = n, J = 0, dr = null, ku = Zl = Vn = 0, he = Qt = null, $n !== null) {
    for (n = 0; n < $n.length; n++)
      if (t = $n[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, i = t.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        t.pending = r;
      }
    $n = null;
  }
  return e;
}
function pf(e, n) {
  do {
    var t = X;
    try {
      if (uu(), Gr.current = Sl, wl) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        wl = !1;
      }
      if (Un = 0, b = Z = W = null, Bt = !1, ar = 0, Su.current = null, t === null || t.return === null) {
        J = 1, dr = n, X = null;
        break;
      }
      e: {
        var i = e, o = t.return, u = t, s = n;
        if (n = le, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var S = Ls(o);
          if (S !== null) {
            S.flags &= -257, Rs(S, o, u, i, n), S.mode & 1 && Ts(i, c, n), n = S, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), n.updateQueue = g;
            } else
              w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Ts(i, c, n), _u();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var z = Ls(o);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256), Rs(z, o, u, i, n), iu(yt(s, u));
            break e;
          }
        }
        i = s = yt(s, u), J !== 4 && (J = 2), Qt === null ? Qt = [i] : Qt.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, n &= -n, i.lanes |= n;
              var f = Xc(i, s, n);
              Es(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (kn === null || !kn.has(d)))) {
                i.flags |= 65536, n &= -n, i.lanes |= n;
                var v = Zc(i, u, n);
                Es(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      vf(t);
    } catch (E) {
      n = E, X === t && t !== null && (X = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function mf() {
  var e = kl.current;
  return kl.current = Sl, e === null ? Sl : e;
}
function _u() {
  (J === 0 || J === 3 || J === 2) && (J = 4), ee === null || !(Vn & 268435455) && !(Zl & 268435455) || pn(ee, le);
}
function Cl(e, n) {
  var t = O;
  O |= 2;
  var r = mf();
  (ee !== e || le !== n) && (qe = null, Dn(e, n));
  do
    try {
      Dm();
      break;
    } catch (l) {
      pf(e, l);
    }
  while (1);
  if (uu(), O = t, kl.current = r, X !== null)
    throw Error(y(261));
  return ee = null, le = 0, J;
}
function Dm() {
  for (; X !== null; )
    hf(X);
}
function Fm() {
  for (; X !== null && !sp(); )
    hf(X);
}
function hf(e) {
  var n = gf(e.alternate, e, Ee);
  e.memoizedProps = e.pendingProps, n === null ? vf(e) : X = n, Su.current = null;
}
function vf(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = Lm(t, n), t !== null) {
        t.flags &= 32767, X = t;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        J = 6, X = null;
        return;
      }
    } else if (t = Tm(t, n, Ee), t !== null) {
      X = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      X = n;
      return;
    }
    X = n = e;
  } while (n !== null);
  J === 0 && (J = 5);
}
function On(e, n, t) {
  var r = I, l = Me.transition;
  try {
    Me.transition = null, I = 1, jm(e, n, t, r);
  } finally {
    Me.transition = l, I = r;
  }
  return null;
}
function jm(e, n, t, r) {
  do
    ct();
  while (hn !== null);
  if (O & 6)
    throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
    throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = t.lanes | t.childLanes;
  if (gp(e, i), e === ee && (X = ee = null, le = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Fr || (Fr = !0, wf(il, function() {
    return ct(), null;
  })), i = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || i) {
    i = Me.transition, Me.transition = null;
    var o = I;
    I = 1;
    var u = O;
    O |= 4, Su.current = null, Om(e, t), cf(t, e), lm(lo), ul = !!ro, lo = ro = null, e.current = t, Mm(t), ap(), O = u, I = o, Me.transition = i;
  } else
    e.current = t;
  if (Fr && (Fr = !1, hn = e, xl = l), i = e.pendingLanes, i === 0 && (kn = null), dp(t.stateNode), Se(e, Y()), n !== null)
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (El)
    throw El = !1, e = _o, _o = null, e;
  return xl & 1 && e.tag !== 0 && ct(), i = e.pendingLanes, i & 1 ? e === Po ? Kt++ : (Kt = 0, Po = e) : Kt = 0, zn(), null;
}
function ct() {
  if (hn !== null) {
    var e = Ga(xl), n = Me.transition, t = I;
    try {
      if (Me.transition = null, I = 16 > e ? 16 : e, hn === null)
        var r = !1;
      else {
        if (e = hn, hn = null, xl = 0, O & 6)
          throw Error(y(331));
        var l = O;
        for (O |= 4, C = e.current; C !== null; ) {
          var i = C, o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (C = c; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ht(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, C = m;
                  else
                    for (; C !== null; ) {
                      h = C;
                      var p = h.sibling, S = h.return;
                      if (uf(h), h === c) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = S, C = p;
                        break;
                      }
                      C = S;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var z = g.sibling;
                    g.sibling = null, g = z;
                  } while (g !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null)
            o.return = i, C = o;
          else
            e:
              for (; C !== null; ) {
                if (i = C, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ht(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  f.return = i.return, C = f;
                  break e;
                }
                C = i.return;
              }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null)
            d.return = o, C = d;
          else
            e:
              for (o = a; C !== null; ) {
                if (u = C, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xl(9, u);
                    }
                  } catch (E) {
                    H(u, u.return, E);
                  }
                if (u === o) {
                  C = null;
                  break e;
                }
                var v = u.sibling;
                if (v !== null) {
                  v.return = u.return, C = v;
                  break e;
                }
                C = u.return;
              }
        }
        if (O = l, zn(), Ze && typeof Ze.onPostCommitFiberRoot == "function")
          try {
            Ze.onPostCommitFiberRoot(Vl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      I = t, Me.transition = n;
    }
  }
  return !1;
}
function Hs(e, n, t) {
  n = yt(t, n), n = Xc(e, n, 1), e = Sn(e, n, 1), n = de(), e !== null && (hr(e, 1, n), Se(e, n));
}
function H(e, n, t) {
  if (e.tag === 3)
    Hs(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Hs(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
          e = yt(t, e), e = Zc(n, e, 1), n = Sn(n, e, 1), e = de(), n !== null && (hr(n, 1, e), Se(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Am(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = de(), e.pingedLanes |= e.suspendedLanes & t, ee === e && (le & t) === t && (J === 4 || J === 3 && (le & 130023424) === le && 500 > Y() - Eu ? Dn(e, 0) : ku |= t), Se(e, n);
}
function yf(e, n) {
  n === 0 && (e.mode & 1 ? (n = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : n = 1);
  var t = de();
  e = on(e, n), e !== null && (hr(e, n, t), Se(e, t));
}
function Um(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), yf(e, t);
}
function Vm(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), yf(e, t);
}
var gf;
gf = function(e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || ge.current)
      ye = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128))
        return ye = !1, zm(e, n, t);
      ye = !!(e.flags & 131072);
    }
  else
    ye = !1, U && n.flags & 1048576 && Sc(n, ml, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Zr(e, n), e = n.pendingProps;
      var l = pt(n, ce.current);
      at(n, t), l = hu(null, n, r, e, l, t);
      var i = vu();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, we(r) ? (i = !0, dl(n)) : i = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, cu(n), l.updater = Yl, n.stateNode = l, l._reactInternals = n, mo(n, r, e, t), n = yo(null, n, r, !0, i, t)) : (n.tag = 0, U && i && ru(n), fe(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Zr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Bm(r), e = je(r, e), l) {
          case 0:
            n = vo(null, n, r, e, t);
            break e;
          case 1:
            n = $s(null, n, r, e, t);
            break e;
          case 11:
            n = Os(null, n, r, e, t);
            break e;
          case 14:
            n = Ms(null, n, r, je(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : je(r, l), vo(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : je(r, l), $s(e, n, r, l, t);
    case 3:
      e: {
        if (ef(n), e === null)
          throw Error(y(387));
        r = n.pendingProps, i = n.memoizedState, l = i.element, Cc(e, n), yl(n, r, null, t);
        var o = n.memoizedState;
        if (r = o.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, n.updateQueue.baseState = i, n.memoizedState = i, n.flags & 256) {
            l = yt(Error(y(423)), n), n = Is(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = yt(Error(y(424)), n), n = Is(e, n, r, t, l);
            break e;
          } else
            for (xe = wn(n.stateNode.containerInfo.firstChild), _e = n, U = !0, Ue = null, t = zc(n, null, r, t), n.child = t; t; )
              t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (mt(), r === l) {
            n = un(e, n, t);
            break e;
          }
          fe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return Tc(n), e === null && co(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, io(r, l) ? o = null : i !== null && io(r, i) && (n.flags |= 32), bc(e, n), fe(e, n, o, t), n.child;
    case 6:
      return e === null && co(n), null;
    case 13:
      return nf(e, n, t);
    case 4:
      return fu(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = ht(n, null, r, t) : fe(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : je(r, l), Os(e, n, r, l, t);
    case 7:
      return fe(e, n, n.pendingProps, t), n.child;
    case 8:
      return fe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return fe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, i = n.memoizedProps, o = l.value, F(hl, r._currentValue), r._currentValue = o, i !== null)
          if (Be(i.value, o)) {
            if (i.children === l.children && !ge.current) {
              n = un(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      s = tn(-1, t & -t), s.tag = 2;
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                      }
                    }
                    i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), fo(
                      i.return,
                      t,
                      n
                    ), u.lanes |= t;
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10)
                o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (o = i.return, o === null)
                  throw Error(y(341));
                o.lanes |= t, u = o.alternate, u !== null && (u.lanes |= t), fo(o, t, n), o = i.sibling;
              } else
                o = i.child;
              if (o !== null)
                o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (i = o.sibling, i !== null) {
                    i.return = o.return, o = i;
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        fe(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, at(n, t), l = $e(l), r = r(l), n.flags |= 1, fe(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = je(r, n.pendingProps), l = je(r.type, l), Ms(e, n, r, l, t);
    case 15:
      return Jc(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : je(r, l), Zr(e, n), n.tag = 1, we(r) ? (e = !0, dl(n)) : e = !1, at(n, t), Pc(n, r, l), mo(n, r, l, t), yo(null, n, r, !0, e, t);
    case 19:
      return tf(e, n, t);
    case 22:
      return qc(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function wf(e, n) {
  return Ha(e, n);
}
function Wm(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Oe(e, n, t, r) {
  return new Wm(e, n, t, r);
}
function Pu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Bm(e) {
  if (typeof e == "function")
    return Pu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Qo)
      return 11;
    if (e === Ko)
      return 14;
  }
  return 2;
}
function xn(e, n) {
  var t = e.alternate;
  return t === null ? (t = Oe(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function br(e, n, t, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function")
    Pu(e) && (o = 1);
  else if (typeof e == "string")
    o = 5;
  else
    e:
      switch (e) {
        case Yn:
          return Fn(t.children, l, i, n);
        case Ho:
          o = 8, l |= 8;
          break;
        case Fi:
          return e = Oe(12, t, n, l | 2), e.elementType = Fi, e.lanes = i, e;
        case ji:
          return e = Oe(13, t, n, l), e.elementType = ji, e.lanes = i, e;
        case Ai:
          return e = Oe(19, t, n, l), e.elementType = Ai, e.lanes = i, e;
        case Na:
          return Jl(t, l, i, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case _a:
                o = 10;
                break e;
              case Pa:
                o = 9;
                break e;
              case Qo:
                o = 11;
                break e;
              case Ko:
                o = 14;
                break e;
              case cn:
                o = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return n = Oe(o, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n;
}
function Fn(e, n, t, r) {
  return e = Oe(7, e, r, n), e.lanes = t, e;
}
function Jl(e, n, t, r) {
  return e = Oe(22, e, r, n), e.elementType = Na, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Ri(e, n, t) {
  return e = Oe(6, e, null, n), e.lanes = t, e;
}
function Oi(e, n, t) {
  return n = Oe(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Hm(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = di(0), this.expirationTimes = di(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = di(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Nu(e, n, t, r, l, i, o, u, s) {
  return e = new Hm(e, n, t, u, s), n === 1 ? (n = 1, i === !0 && (n |= 8)) : n = 0, i = Oe(3, null, null, n), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cu(i), e;
}
function Qm(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function Sf(e) {
  if (!e)
    return _n;
  e = e._reactInternals;
  e: {
    if (Hn(e) !== e || e.tag !== 1)
      throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (we(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (we(t))
      return gc(e, t, n);
  }
  return n;
}
function kf(e, n, t, r, l, i, o, u, s) {
  return e = Nu(t, r, !0, e, l, i, o, u, s), e.context = Sf(null), t = e.current, r = de(), l = En(t), i = tn(r, l), i.callback = n ?? null, Sn(t, i, l), e.current.lanes = l, hr(e, l, r), Se(e, r), e;
}
function ql(e, n, t, r) {
  var l = n.current, i = de(), o = En(l);
  return t = Sf(t), n.context === null ? n.context = t : n.pendingContext = t, n = tn(i, o), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Sn(l, n, o), e !== null && (We(e, l, o, i), Yr(e, l, o)), o;
}
function _l(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qs(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function zu(e, n) {
  Qs(e, n), (e = e.alternate) && Qs(e, n);
}
function Km() {
  return null;
}
var Ef = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Tu(e) {
  this._internalRoot = e;
}
bl.prototype.render = Tu.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null)
    throw Error(y(409));
  ql(e, n, null, null);
};
bl.prototype.unmount = Tu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Wn(function() {
      ql(null, e, null, null);
    }), n[ln] = null;
  }
};
function bl(e) {
  this._internalRoot = e;
}
bl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ja();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < dn.length && n !== 0 && n < dn[t].priority; t++)
      ;
    dn.splice(t, 0, e), t === 0 && ba(e);
  }
};
function Lu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ei(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ks() {
}
function Ym(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = _l(o);
        i.call(c);
      };
    }
    var o = kf(n, r, e, 0, null, !1, !1, "", Ks);
    return e._reactRootContainer = o, e[ln] = o.current, lr(e.nodeType === 8 ? e.parentNode : e), Wn(), o;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = _l(s);
      u.call(c);
    };
  }
  var s = Nu(e, 0, !1, null, null, !1, !1, "", Ks);
  return e._reactRootContainer = s, e[ln] = s.current, lr(e.nodeType === 8 ? e.parentNode : e), Wn(function() {
    ql(n, s, t, r);
  }), s;
}
function ni(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = _l(o);
        u.call(s);
      };
    }
    ql(n, o, e, l);
  } else
    o = Ym(t, n, e, l, r);
  return _l(o);
}
Xa = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Dt(n.pendingLanes);
        t !== 0 && (Xo(n, t | 1), Se(n, Y()), !(O & 6) && (gt = Y() + 500, zn()));
      }
      break;
    case 13:
      Wn(function() {
        var r = on(e, 1);
        if (r !== null) {
          var l = de();
          We(r, e, 1, l);
        }
      }), zu(e, 1);
  }
};
Zo = function(e) {
  if (e.tag === 13) {
    var n = on(e, 134217728);
    if (n !== null) {
      var t = de();
      We(n, e, 134217728, t);
    }
    zu(e, 134217728);
  }
};
Za = function(e) {
  if (e.tag === 13) {
    var n = En(e), t = on(e, n);
    if (t !== null) {
      var r = de();
      We(t, e, n, r);
    }
    zu(e, n);
  }
};
Ja = function() {
  return I;
};
qa = function(e, n) {
  var t = I;
  try {
    return I = e, n();
  } finally {
    I = t;
  }
};
Xi = function(e, n, t) {
  switch (n) {
    case "input":
      if (Wi(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; )
          t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = Ql(r);
            if (!l)
              throw Error(y(90));
            Ta(r), Wi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ra(e, t);
      break;
    case "select":
      n = t.value, n != null && it(e, !!t.multiple, n, !1);
  }
};
ja = xu;
Aa = Wn;
var Gm = { usingClientEntryPoint: !1, Events: [yr, Jn, Ql, Da, Fa, xu] }, Mt = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Xm = { bundleType: Mt.bundleType, version: Mt.version, rendererPackageName: Mt.rendererPackageName, rendererConfig: Mt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: sn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Wa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Mt.findFiberByHostInstance || Km, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      Vl = jr.inject(Xm), Ze = jr;
    } catch {
    }
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm;
ze.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lu(n))
    throw Error(y(200));
  return Qm(e, n, null, t);
};
ze.createRoot = function(e, n) {
  if (!Lu(e))
    throw Error(y(299));
  var t = !1, r = "", l = Ef;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Nu(e, 1, !1, null, null, t, !1, r, l), e[ln] = n.current, lr(e.nodeType === 8 ? e.parentNode : e), new Tu(n);
};
ze.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Wa(n), e = e === null ? null : e.stateNode, e;
};
ze.flushSync = function(e) {
  return Wn(e);
};
ze.hydrate = function(e, n, t) {
  if (!ei(n))
    throw Error(y(200));
  return ni(null, e, n, !0, t);
};
ze.hydrateRoot = function(e, n, t) {
  if (!Lu(e))
    throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, i = "", o = Ef;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), n = kf(n, null, e, 1, t ?? null, l, !1, i, o), e[ln] = n.current, lr(e), r)
    for (e = 0; e < r.length; e++)
      t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
        t,
        l
      );
  return new bl(n);
};
ze.render = function(e, n, t) {
  if (!ei(n))
    throw Error(y(200));
  return ni(null, e, n, !1, t);
};
ze.unmountComponentAtNode = function(e) {
  if (!ei(e))
    throw Error(y(40));
  return e._reactRootContainer ? (Wn(function() {
    ni(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ln] = null;
    });
  }), !0) : !1;
};
ze.unstable_batchedUpdates = xu;
ze.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!ei(t))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return ni(e, n, t, !1, r);
};
ze.version = "18.2.0-next-9e3b772b8-20220608";
function xf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf);
    } catch (e) {
      console.error(e);
    }
}
xf(), Sa.exports = ze;
var Zm = Sa.exports;
const Jm = /* @__PURE__ */ Ys(Zm), To = {}, qm = (e, n) => {
  To[e] = n;
};
class bm extends HTMLElement {
  connectedCallback() {
    const n = this.getAttribute("component");
    if (n && To[n]) {
      const t = To[n];
      Jm.render(/* @__PURE__ */ ui($o.StrictMode, { children: /* @__PURE__ */ ui(ve.Suspense, { fallback: "loading...", children: /* @__PURE__ */ ui(t, {}) }) }), this);
    }
  }
}
customElements.get("react-component") || customElements.define("react-component", bm);
qm("program-constructor", $o.lazy(() => import("./ProgramConstructor-9231985e.js")));
export {
  Iu as R,
  Hd as T,
  ha as a,
  Ys as b,
  $o as c,
  Jm as d,
  el as e,
  Zm as f,
  Od as g,
  e0 as h,
  Md as i,
  ui as j,
  md as m,
  ve as r,
  Ad as s,
  Wd as u,
  Bd as w
};
