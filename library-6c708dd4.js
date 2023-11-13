var ad = Object.defineProperty;
var cd = (e, t, n) => t in e ? ad(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var es = (e, t, n) => (cd(e, typeof t != "symbol" ? t + "" : t, n), n);
function fd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function ka(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ea = { exports: {} }, Yl = {}, xa = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr = Symbol.for("react.element"), dd = Symbol.for("react.portal"), pd = Symbol.for("react.fragment"), md = Symbol.for("react.strict_mode"), hd = Symbol.for("react.profiler"), vd = Symbol.for("react.provider"), yd = Symbol.for("react.context"), gd = Symbol.for("react.forward_ref"), wd = Symbol.for("react.suspense"), Sd = Symbol.for("react.memo"), kd = Symbol.for("react.lazy"), ts = Symbol.iterator;
function Ed(e) {
  return e === null || typeof e != "object" ? null : (e = ts && e[ts] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ca = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, _a = Object.assign, Ta = {};
function In(e, t, n) {
  this.props = e, this.context = t, this.refs = Ta, this.updater = n || Ca;
}
In.prototype.isReactComponent = {};
In.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
In.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Na() {
}
Na.prototype = In.prototype;
function bi(e, t, n) {
  this.props = e, this.context = t, this.refs = Ta, this.updater = n || Ca;
}
var eu = bi.prototype = new Na();
eu.constructor = bi;
_a(eu, In.prototype);
eu.isPureReactComponent = !0;
var ns = Array.isArray, Pa = Object.prototype.hasOwnProperty, tu = { current: null }, za = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ra(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      Pa.call(t, r) && !za.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++)
      s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Rr, type: e, key: o, ref: i, props: l, _owner: tu.current };
}
function xd(e, t) {
  return { $$typeof: Rr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function nu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rr;
}
function Cd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var rs = /\/+/g;
function No(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Cd("" + e.key) : t.toString(36);
}
function ll(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Rr:
          case dd:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + No(i, 0) : r, ns(l) ? (n = "", e != null && (n = e.replace(rs, "$&/") + "/"), ll(l, t, n, "", function(f) {
      return f;
    })) : l != null && (nu(l) && (l = xd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(rs, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ns(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + No(o, u);
      i += ll(o, t, n, s, l);
    }
  else if (s = Ed(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + No(o, u++), i += ll(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Ar(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return ll(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function _d(e) {
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
var ke = { current: null }, ol = { transition: null }, Td = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: ol, ReactCurrentOwner: tu };
O.Children = { map: Ar, forEach: function(e, t, n) {
  Ar(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ar(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ar(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!nu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = In;
O.Fragment = pd;
O.Profiler = hd;
O.PureComponent = bi;
O.StrictMode = md;
O.Suspense = wd;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Td;
O.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = _a({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = tu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      Pa.call(t, s) && !za.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++)
      u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Rr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function(e) {
  return e = { $$typeof: yd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vd, _context: e }, e.Consumer = e;
};
O.createElement = Ra;
O.createFactory = function(e) {
  var t = Ra.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: gd, render: e };
};
O.isValidElement = nu;
O.lazy = function(e) {
  return { $$typeof: kd, _payload: { _status: -1, _result: e }, _init: _d };
};
O.memo = function(e, t) {
  return { $$typeof: Sd, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = ol.transition;
  ol.transition = {};
  try {
    e();
  } finally {
    ol.transition = t;
  }
};
O.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
O.useContext = function(e) {
  return ke.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
O.useId = function() {
  return ke.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return ke.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return ke.current.useRef(e);
};
O.useState = function(e) {
  return ke.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return ke.current.useTransition();
};
O.version = "18.2.0";
xa.exports = O;
var R = xa.exports;
const j = /* @__PURE__ */ ka(R), ls = /* @__PURE__ */ fd({
  __proto__: null,
  default: j
}, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd = R, Pd = Symbol.for("react.element"), zd = Symbol.for("react.fragment"), Rd = Object.prototype.hasOwnProperty, Ld = Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Od = { key: !0, ref: !0, __self: !0, __source: !0 };
function La(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Rd.call(t, r) && !Od.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Pd, type: e, key: o, ref: i, props: l, _owner: Ld.current };
}
Yl.Fragment = zd;
Yl.jsx = La;
Yl.jsxs = La;
Ea.exports = Yl;
var ar = Ea.exports;
function $d(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Id(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Md = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(l) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, o), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Id(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = $d(l);
      try {
        o.insertRule(r, o.cssRules.length);
      } catch {
      }
    } else
      l.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), he = "-ms-", Sl = "-moz-", M = "-webkit-", Oa = "comm", ru = "rule", lu = "decl", Dd = "@import", $a = "@keyframes", Fd = "@layer", Ad = Math.abs, Gl = String.fromCharCode, jd = Object.assign;
function Ud(e, t) {
  return ae(e, 0) ^ 45 ? (((t << 2 ^ ae(e, 0)) << 2 ^ ae(e, 1)) << 2 ^ ae(e, 2)) << 2 ^ ae(e, 3) : 0;
}
function Ia(e) {
  return e.trim();
}
function Bd(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function ri(e, t) {
  return e.indexOf(t);
}
function ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function cr(e, t, n) {
  return e.slice(t, n);
}
function tt(e) {
  return e.length;
}
function ou(e) {
  return e.length;
}
function jr(e, t) {
  return t.push(e), e;
}
function Hd(e, t) {
  return e.map(t).join("");
}
var Xl = 1, Tn = 1, Ma = 0, ze = 0, J = 0, Mn = "";
function Zl(e, t, n, r, l, o, i) {
  return { value: e, root: t, parent: n, type: r, props: l, children: o, line: Xl, column: Tn, length: i, return: "" };
}
function An(e, t) {
  return jd(Zl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Vd() {
  return J;
}
function Wd() {
  return J = ze > 0 ? ae(Mn, --ze) : 0, Tn--, J === 10 && (Tn = 1, Xl--), J;
}
function $e() {
  return J = ze < Ma ? ae(Mn, ze++) : 0, Tn++, J === 10 && (Tn = 1, Xl++), J;
}
function lt() {
  return ae(Mn, ze);
}
function il() {
  return ze;
}
function Lr(e, t) {
  return cr(Mn, e, t);
}
function fr(e) {
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
function Da(e) {
  return Xl = Tn = 1, Ma = tt(Mn = e), ze = 0, [];
}
function Fa(e) {
  return Mn = "", e;
}
function ul(e) {
  return Ia(Lr(ze - 1, li(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qd(e) {
  for (; (J = lt()) && J < 33; )
    $e();
  return fr(e) > 2 || fr(J) > 3 ? "" : " ";
}
function Kd(e, t) {
  for (; --t && $e() && !(J < 48 || J > 102 || J > 57 && J < 65 || J > 70 && J < 97); )
    ;
  return Lr(e, il() + (t < 6 && lt() == 32 && $e() == 32));
}
function li(e) {
  for (; $e(); )
    switch (J) {
      case e:
        return ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && li(J);
        break;
      case 40:
        e === 41 && li(e);
        break;
      case 92:
        $e();
        break;
    }
  return ze;
}
function Yd(e, t) {
  for (; $e() && e + J !== 47 + 10; )
    if (e + J === 42 + 42 && lt() === 47)
      break;
  return "/*" + Lr(t, ze - 1) + "*" + Gl(e === 47 ? e : $e());
}
function Gd(e) {
  for (; !fr(lt()); )
    $e();
  return Lr(e, ze);
}
function Xd(e) {
  return Fa(sl("", null, null, null, [""], e = Da(e), 0, [0], e));
}
function sl(e, t, n, r, l, o, i, u, s) {
  for (var f = 0, p = 0, m = i, h = 0, y = 0, w = 0, g = 1, E = 1, a = 1, c = 0, d = "", v = l, S = o, C = r, k = d; E; )
    switch (w = c, c = $e()) {
      case 40:
        if (w != 108 && ae(k, m - 1) == 58) {
          ri(k += D(ul(c), "&", "&\f"), "&\f") != -1 && (a = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += ul(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Qd(w);
        break;
      case 92:
        k += Kd(il() - 1, 7);
        continue;
      case 47:
        switch (lt()) {
          case 42:
          case 47:
            jr(Zd(Yd($e(), il()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * g:
        u[f++] = tt(k) * a;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            E = 0;
          case 59 + p:
            a == -1 && (k = D(k, /\f/g, "")), y > 0 && tt(k) - m && jr(y > 32 ? is(k + ";", r, n, m - 1) : is(D(k, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (jr(C = os(k, t, n, f, p, l, u, d, v = [], S = [], m), o), c === 123)
              if (p === 0)
                sl(k, t, C, C, v, o, m, u, S);
              else
                switch (h === 99 && ae(k, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sl(e, C, C, r && jr(os(e, C, C, 0, 0, l, u, d, l, v = [], m), S), l, S, m, u, r ? v : S);
                    break;
                  default:
                    sl(k, C, C, C, [""], S, 0, u, S);
                }
        }
        f = p = y = 0, g = a = 1, d = k = "", m = i;
        break;
      case 58:
        m = 1 + tt(k), y = w;
      default:
        if (g < 1) {
          if (c == 123)
            --g;
          else if (c == 125 && g++ == 0 && Wd() == 125)
            continue;
        }
        switch (k += Gl(c), c * g) {
          case 38:
            a = p > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[f++] = (tt(k) - 1) * a, a = 1;
            break;
          case 64:
            lt() === 45 && (k += ul($e())), h = lt(), p = m = tt(d = k += Gd(il())), c++;
            break;
          case 45:
            w === 45 && tt(k) == 2 && (g = 0);
        }
    }
  return o;
}
function os(e, t, n, r, l, o, i, u, s, f, p) {
  for (var m = l - 1, h = l === 0 ? o : [""], y = ou(h), w = 0, g = 0, E = 0; w < r; ++w)
    for (var a = 0, c = cr(e, m + 1, m = Ad(g = i[w])), d = e; a < y; ++a)
      (d = Ia(g > 0 ? h[a] + " " + c : D(c, /&\f/g, h[a]))) && (s[E++] = d);
  return Zl(e, t, n, l === 0 ? ru : u, s, f, p);
}
function Zd(e, t, n) {
  return Zl(e, t, n, Oa, Gl(Vd()), cr(e, 2, -2), 0);
}
function is(e, t, n, r) {
  return Zl(e, t, n, lu, cr(e, 0, r), cr(e, r + 1, -1), r);
}
function wn(e, t) {
  for (var n = "", r = ou(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function Jd(e, t, n, r) {
  switch (e.type) {
    case Fd:
      if (e.children.length)
        break;
    case Dd:
    case lu:
      return e.return = e.return || e.value;
    case Oa:
      return "";
    case $a:
      return e.return = e.value + "{" + wn(e.children, r) + "}";
    case ru:
      e.value = e.props.join(",");
  }
  return tt(n = wn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function qd(e) {
  var t = ou(e);
  return function(n, r, l, o) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, l, o) || "";
    return i;
  };
}
function bd(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ep(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var tp = function(t, n, r) {
  for (var l = 0, o = 0; l = o, o = lt(), l === 38 && o === 12 && (n[r] = 1), !fr(o); )
    $e();
  return Lr(t, ze);
}, np = function(t, n) {
  var r = -1, l = 44;
  do
    switch (fr(l)) {
      case 0:
        l === 38 && lt() === 12 && (n[r] = 1), t[r] += tp(ze - 1, n, r);
        break;
      case 2:
        t[r] += ul(l);
        break;
      case 4:
        if (l === 44) {
          t[++r] = lt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Gl(l);
    }
  while (l = $e());
  return t;
}, rp = function(t, n) {
  return Fa(np(Da(t), n));
}, us = /* @__PURE__ */ new WeakMap(), lp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !us.get(r)) && !l) {
      us.set(t, !0);
      for (var o = [], i = rp(n, o), u = r.props, s = 0, f = 0; s < i.length; s++)
        for (var p = 0; p < u.length; p++, f++)
          t.props[f] = o[s] ? i[s].replace(/&\f/g, u[p]) : u[p] + " " + i[s];
    }
  }
}, op = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Aa(e, t) {
  switch (Ud(e, t)) {
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
      return M + e + Sl + e + he + e + e;
    case 6828:
    case 4268:
      return M + e + he + e + e;
    case 6165:
      return M + e + he + "flex-" + e + e;
    case 5187:
      return M + e + D(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + he + "flex-$1$2") + e;
    case 5443:
      return M + e + he + "flex-item-" + D(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + he + "flex-line-pack" + D(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + he + D(e, "shrink", "negative") + e;
    case 5292:
      return M + e + he + D(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + D(e, "-grow", "") + M + e + he + D(e, "grow", "positive") + e;
    case 4554:
      return M + D(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, M + "$1$2") + e;
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
      if (tt(e) - 1 - t > 6)
        switch (ae(e, t + 1)) {
          case 109:
            if (ae(e, t + 4) !== 45)
              break;
          case 102:
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + Sl + (ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ri(e, "stretch") ? Aa(D(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ae(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ae(e, tt(e) - 3 - (~ri(e, "!important") && 10))) {
        case 107:
          return D(e, ":", ":" + M) + e;
        case 101:
          return D(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ae(e, t + 11)) {
        case 114:
          return M + e + he + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + he + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + he + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + he + e + e;
  }
  return e;
}
var ip = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case lu:
        t.return = Aa(t.value, t.length);
        break;
      case $a:
        return wn([An(t, {
          value: D(t.value, "@", "@" + M)
        })], l);
      case ru:
        if (t.length)
          return Hd(t.props, function(o) {
            switch (Bd(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return wn([An(t, {
                  props: [D(o, /:(read-\w+)/, ":" + Sl + "$1")]
                })], l);
              case "::placeholder":
                return wn([An(t, {
                  props: [D(o, /:(plac\w+)/, ":" + M + "input-$1")]
                }), An(t, {
                  props: [D(o, /:(plac\w+)/, ":" + Sl + "$1")]
                }), An(t, {
                  props: [D(o, /:(plac\w+)/, he + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, up = [ip], sp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var E = g.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || up, o = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var E = g.getAttribute("data-emotion").split(" "), a = 1; a < E.length; a++)
        o[E[a]] = !0;
      u.push(g);
    }
  );
  var s, f = [lp, op];
  {
    var p, m = [Jd, bd(function(g) {
      p.insert(g);
    })], h = qd(f.concat(l, m)), y = function(E) {
      return wn(Xd(E), h);
    };
    s = function(E, a, c, d) {
      p = c, y(E ? E + "{" + a.styles + "}" : a.styles), d && (w.inserted[a.name] = !0);
    };
  }
  var w = {
    key: n,
    sheet: new Md({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: s
  };
  return w.sheet.hydrate(u), w;
}, ja = { exports: {} }, A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie = typeof Symbol == "function" && Symbol.for, iu = ie ? Symbol.for("react.element") : 60103, uu = ie ? Symbol.for("react.portal") : 60106, Jl = ie ? Symbol.for("react.fragment") : 60107, ql = ie ? Symbol.for("react.strict_mode") : 60108, bl = ie ? Symbol.for("react.profiler") : 60114, eo = ie ? Symbol.for("react.provider") : 60109, to = ie ? Symbol.for("react.context") : 60110, su = ie ? Symbol.for("react.async_mode") : 60111, no = ie ? Symbol.for("react.concurrent_mode") : 60111, ro = ie ? Symbol.for("react.forward_ref") : 60112, lo = ie ? Symbol.for("react.suspense") : 60113, ap = ie ? Symbol.for("react.suspense_list") : 60120, oo = ie ? Symbol.for("react.memo") : 60115, io = ie ? Symbol.for("react.lazy") : 60116, cp = ie ? Symbol.for("react.block") : 60121, fp = ie ? Symbol.for("react.fundamental") : 60117, dp = ie ? Symbol.for("react.responder") : 60118, pp = ie ? Symbol.for("react.scope") : 60119;
function De(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case iu:
        switch (e = e.type, e) {
          case su:
          case no:
          case Jl:
          case bl:
          case ql:
          case lo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case to:
              case ro:
              case io:
              case oo:
              case eo:
                return e;
              default:
                return t;
            }
        }
      case uu:
        return t;
    }
  }
}
function Ua(e) {
  return De(e) === no;
}
A.AsyncMode = su;
A.ConcurrentMode = no;
A.ContextConsumer = to;
A.ContextProvider = eo;
A.Element = iu;
A.ForwardRef = ro;
A.Fragment = Jl;
A.Lazy = io;
A.Memo = oo;
A.Portal = uu;
A.Profiler = bl;
A.StrictMode = ql;
A.Suspense = lo;
A.isAsyncMode = function(e) {
  return Ua(e) || De(e) === su;
};
A.isConcurrentMode = Ua;
A.isContextConsumer = function(e) {
  return De(e) === to;
};
A.isContextProvider = function(e) {
  return De(e) === eo;
};
A.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === iu;
};
A.isForwardRef = function(e) {
  return De(e) === ro;
};
A.isFragment = function(e) {
  return De(e) === Jl;
};
A.isLazy = function(e) {
  return De(e) === io;
};
A.isMemo = function(e) {
  return De(e) === oo;
};
A.isPortal = function(e) {
  return De(e) === uu;
};
A.isProfiler = function(e) {
  return De(e) === bl;
};
A.isStrictMode = function(e) {
  return De(e) === ql;
};
A.isSuspense = function(e) {
  return De(e) === lo;
};
A.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Jl || e === no || e === bl || e === ql || e === lo || e === ap || typeof e == "object" && e !== null && (e.$$typeof === io || e.$$typeof === oo || e.$$typeof === eo || e.$$typeof === to || e.$$typeof === ro || e.$$typeof === fp || e.$$typeof === dp || e.$$typeof === pp || e.$$typeof === cp);
};
A.typeOf = De;
ja.exports = A;
var mp = ja.exports, Ba = mp, hp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ha = {};
Ha[Ba.ForwardRef] = hp;
Ha[Ba.Memo] = vp;
var yp = !0;
function gp(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(l) {
    e[l] !== void 0 ? t.push(e[l] + ";") : r += l + " ";
  }), r;
}
var Va = function(t, n, r) {
  var l = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  yp === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
}, Wa = function(t, n, r) {
  Va(t, n, r);
  var l = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + l : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function wp(e) {
  for (var t = 0, n, r = 0, l = e.length; l >= 4; ++r, l -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (l) {
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
var Sp = {
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
}, kp = /[A-Z]|^ms/g, Ep = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qa = function(t) {
  return t.charCodeAt(1) === 45;
}, ss = function(t) {
  return t != null && typeof t != "boolean";
}, Po = /* @__PURE__ */ ep(function(e) {
  return Qa(e) ? e : e.replace(kp, "-$&").toLowerCase();
}), as = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ep, function(r, l, o) {
          return nt = {
            name: l,
            styles: o,
            next: nt
          }, l;
        });
  }
  return Sp[t] !== 1 && !Qa(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function dr(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return nt = {
          name: n.name,
          styles: n.styles,
          next: nt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            nt = {
              name: r.name,
              styles: r.styles,
              next: nt
            }, r = r.next;
        var l = n.styles + ";";
        return l;
      }
      return xp(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = nt, i = n(e);
        return nt = o, dr(e, t, i);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function xp(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += dr(e, t, n[l]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? r += o + "{" + t[i] + "}" : ss(i) && (r += Po(o) + ":" + as(o, i) + ";");
      else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var u = 0; u < i.length; u++)
          ss(i[u]) && (r += Po(o) + ":" + as(o, i[u]) + ";");
      else {
        var s = dr(e, t, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += Po(o) + ":" + s + ";";
            break;
          }
          default:
            r += o + "{" + s + "}";
        }
      }
    }
  return r;
}
var cs = /label:\s*([^\s;\n{]+)\s*(;|$)/g, nt, au = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var l = !0, o = "";
  nt = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (l = !1, o += dr(r, n, i)) : o += i[0];
  for (var u = 1; u < t.length; u++)
    o += dr(r, n, t[u]), l && (o += i[u]);
  cs.lastIndex = 0;
  for (var s = "", f; (f = cs.exec(o)) !== null; )
    s += "-" + // $FlowFixMe we know it's not null
    f[1];
  var p = wp(o) + s;
  return {
    name: p,
    styles: o,
    next: nt
  };
}, Cp = function(t) {
  return t();
}, Ka = ls["useInsertionEffect"] ? ls["useInsertionEffect"] : !1, _p = Ka || Cp, fs = Ka || R.useLayoutEffect, uo = {}.hasOwnProperty, Ya = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ sp({
    key: "css"
  }) : null
);
Ya.Provider;
var Ga = function(t) {
  return /* @__PURE__ */ R.forwardRef(function(n, r) {
    var l = R.useContext(Ya);
    return t(n, l, r);
  });
}, Xa = /* @__PURE__ */ R.createContext({}), oi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Za = function(t, n) {
  var r = {};
  for (var l in n)
    uo.call(n, l) && (r[l] = n[l]);
  return r[oi] = t, r;
}, Tp = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return Va(n, r, l), _p(function() {
    return Wa(n, r, l);
  }), null;
}, Np = /* @__PURE__ */ Ga(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[oi], o = [r], i = "";
  typeof e.className == "string" ? i = gp(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var u = au(o, void 0, R.useContext(Xa));
  i += t.key + "-" + u.name;
  var s = {};
  for (var f in e)
    uo.call(e, f) && f !== "css" && f !== oi && (s[f] = e[f]);
  return s.ref = n, s.className = i, /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Tp, {
    cache: t,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ R.createElement(l, s));
}), Ja = Np, Pp = ar.Fragment;
function Yt(e, t, n) {
  return uo.call(t, "css") ? ar.jsx(Ja, Za(e, t), n) : ar.jsx(e, t, n);
}
function zp(e, t, n) {
  return uo.call(t, "css") ? ar.jsxs(Ja, Za(e, t), n) : ar.jsxs(e, t, n);
}
var kl = {}, qa = { exports: {} }, Fe = {}, ba = { exports: {} }, ec = {};
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
  function t(T, z) {
    var L = T.length;
    T.push(z);
    e:
      for (; 0 < L; ) {
        var X = L - 1 >>> 1, re = T[X];
        if (0 < l(re, z))
          T[X] = z, T[L] = re, L = X;
        else
          break e;
      }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0)
      return null;
    var z = T[0], L = T.pop();
    if (L !== z) {
      T[0] = L;
      e:
        for (var X = 0, re = T.length, Dr = re >>> 1; X < Dr; ) {
          var jt = 2 * (X + 1) - 1, To = T[jt], Ut = jt + 1, Fr = T[Ut];
          if (0 > l(To, L))
            Ut < re && 0 > l(Fr, To) ? (T[X] = Fr, T[Ut] = L, X = Ut) : (T[X] = To, T[jt] = L, X = jt);
          else if (Ut < re && 0 > l(Fr, L))
            T[X] = Fr, T[Ut] = L, X = Ut;
          else
            break e;
        }
    }
    return z;
  }
  function l(T, z) {
    var L = T.sortIndex - z.sortIndex;
    return L !== 0 ? L : T.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], f = [], p = 1, m = null, h = 3, y = !1, w = !1, g = !1, E = typeof setTimeout == "function" ? setTimeout : null, a = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(T) {
    for (var z = n(f); z !== null; ) {
      if (z.callback === null)
        r(f);
      else if (z.startTime <= T)
        r(f), z.sortIndex = z.expirationTime, t(s, z);
      else
        break;
      z = n(f);
    }
  }
  function v(T) {
    if (g = !1, d(T), !w)
      if (n(s) !== null)
        w = !0, ue(S);
      else {
        var z = n(f);
        z !== null && Re(v, z.startTime - T);
      }
  }
  function S(T, z) {
    w = !1, g && (g = !1, a(_), _ = -1), y = !0;
    var L = h;
    try {
      for (d(z), m = n(s); m !== null && (!(m.expirationTime > z) || T && !b()); ) {
        var X = m.callback;
        if (typeof X == "function") {
          m.callback = null, h = m.priorityLevel;
          var re = X(m.expirationTime <= z);
          z = e.unstable_now(), typeof re == "function" ? m.callback = re : m === n(s) && r(s), d(z);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var Dr = !0;
      else {
        var jt = n(f);
        jt !== null && Re(v, jt.startTime - z), Dr = !1;
      }
      return Dr;
    } finally {
      m = null, h = L, y = !1;
    }
  }
  var C = !1, k = null, _ = -1, $ = 5, P = -1;
  function b() {
    return !(e.unstable_now() - P < $);
  }
  function ne() {
    if (k !== null) {
      var T = e.unstable_now();
      P = T;
      var z = !0;
      try {
        z = k(!0, T);
      } finally {
        z ? ge() : (C = !1, k = null);
      }
    } else
      C = !1;
  }
  var ge;
  if (typeof c == "function")
    ge = function() {
      c(ne);
    };
  else if (typeof MessageChannel < "u") {
    var de = new MessageChannel(), ut = de.port2;
    de.port1.onmessage = ne, ge = function() {
      ut.postMessage(null);
    };
  } else
    ge = function() {
      E(ne, 0);
    };
  function ue(T) {
    k = T, C || (C = !0, ge());
  }
  function Re(T, z) {
    _ = E(function() {
      T(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, ue(S));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(T) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = h;
    }
    var L = h;
    h = z;
    try {
      return T();
    } finally {
      h = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, z) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var L = h;
    h = T;
    try {
      return z();
    } finally {
      h = L;
    }
  }, e.unstable_scheduleCallback = function(T, z, L) {
    var X = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? X + L : X) : L = X, T) {
      case 1:
        var re = -1;
        break;
      case 2:
        re = 250;
        break;
      case 5:
        re = 1073741823;
        break;
      case 4:
        re = 1e4;
        break;
      default:
        re = 5e3;
    }
    return re = L + re, T = { id: p++, callback: z, priorityLevel: T, startTime: L, expirationTime: re, sortIndex: -1 }, L > X ? (T.sortIndex = L, t(f, T), n(s) === null && T === n(f) && (g ? (a(_), _ = -1) : g = !0, Re(v, L - X))) : (T.sortIndex = re, t(s, T), w || y || (w = !0, ue(S))), T;
  }, e.unstable_shouldYield = b, e.unstable_wrapCallback = function(T) {
    var z = h;
    return function() {
      var L = h;
      h = z;
      try {
        return T.apply(this, arguments);
      } finally {
        h = L;
      }
    };
  };
})(ec);
ba.exports = ec;
var Rp = ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc = R, Me = Rp;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var nc = /* @__PURE__ */ new Set(), pr = {};
function nn(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (pr[e] = t, e = 0; e < t.length; e++)
    nc.add(t[e]);
}
var pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ii = Object.prototype.hasOwnProperty, Lp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ds = {}, ps = {};
function Op(e) {
  return ii.call(ps, e) ? !0 : ii.call(ds, e) ? !1 : Lp.test(e) ? ps[e] = !0 : (ds[e] = !0, !1);
}
function $p(e, t, n, r) {
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
function Ip(e, t, n, r) {
  if (t === null || typeof t > "u" || $p(e, t, n, r))
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
function Ee(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function fu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    cu,
    fu
  );
  fe[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(cu, fu);
  fe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(cu, fu);
  fe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ip(t, n, l, r) && (n = null), r || l === null ? Op(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ur = Symbol.for("react.element"), un = Symbol.for("react.portal"), sn = Symbol.for("react.fragment"), pu = Symbol.for("react.strict_mode"), ui = Symbol.for("react.profiler"), rc = Symbol.for("react.provider"), lc = Symbol.for("react.context"), mu = Symbol.for("react.forward_ref"), si = Symbol.for("react.suspense"), ai = Symbol.for("react.suspense_list"), hu = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), oc = Symbol.for("react.offscreen"), ms = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = ms && e[ms] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, zo;
function Yn(e) {
  if (zo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zo = t && t[1] || "";
    }
  return `
` + zo + e;
}
var Ro = !1;
function Lo(e, t) {
  if (!e || Ro)
    return "";
  Ro = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    Ro = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function Mp(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Lo(e.type, !1), e;
    case 11:
      return e = Lo(e.type.render, !1), e;
    case 1:
      return e = Lo(e.type, !0), e;
    default:
      return "";
  }
}
function ci(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case sn:
      return "Fragment";
    case un:
      return "Portal";
    case ui:
      return "Profiler";
    case pu:
      return "StrictMode";
    case si:
      return "Suspense";
    case ai:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lc:
        return (e.displayName || "Context") + ".Consumer";
      case rc:
        return (e._context.displayName || "Context") + ".Provider";
      case mu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case hu:
        return t = e.displayName || null, t !== null ? t : ci(e.type) || "Memo";
      case wt:
        t = e._payload, e = e._init;
        try {
          return ci(e(t));
        } catch {
        }
    }
  return null;
}
function Dp(e) {
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
      return ci(t);
    case 8:
      return t === pu ? "StrictMode" : "Mode";
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
function It(e) {
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
function ic(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Fp(e) {
  var t = ic(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Br(e) {
  e._valueTracker || (e._valueTracker = Fp(e));
}
function uc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = ic(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function El(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fi(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function hs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = It(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sc(e, t) {
  t = t.checked, t != null && du(e, "checked", t, !1);
}
function di(e, t) {
  sc(e, t);
  var n = It(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? pi(e, t.type, n) : t.hasOwnProperty("defaultValue") && pi(e, t.type, It(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function pi(e, t, n) {
  (t !== "number" || El(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gn = Array.isArray;
function Sn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mi(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(x(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(x(92));
      if (Gn(n)) {
        if (1 < n.length)
          throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: It(n) };
}
function ac(e, t) {
  var n = It(t.value), r = It(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function gs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function hi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? cc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Hr, fc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Hr = Hr || document.createElement("div"), Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
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
}, Ap = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  Ap.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
  });
});
function dc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
}
function pc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = dc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var jp = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vi(e, t) {
  if (t) {
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(x(62));
  }
}
function yi(e, t) {
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
var gi = null;
function vu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var wi = null, kn = null, En = null;
function ws(e) {
  if (e = Ir(e)) {
    if (typeof wi != "function")
      throw Error(x(280));
    var t = e.stateNode;
    t && (t = po(t), wi(e.stateNode, e.type, t));
  }
}
function mc(e) {
  kn ? En ? En.push(e) : En = [e] : kn = e;
}
function hc() {
  if (kn) {
    var e = kn, t = En;
    if (En = kn = null, ws(e), t)
      for (e = 0; e < t.length; e++)
        ws(t[e]);
  }
}
function vc(e, t) {
  return e(t);
}
function yc() {
}
var Oo = !1;
function gc(e, t, n) {
  if (Oo)
    return e(t, n);
  Oo = !0;
  try {
    return vc(e, t, n);
  } finally {
    Oo = !1, (kn !== null || En !== null) && (yc(), hc());
  }
}
function hr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = po(n);
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
    throw Error(x(231, t, typeof n));
  return n;
}
var Si = !1;
if (pt)
  try {
    var Un = {};
    Object.defineProperty(Un, "passive", { get: function() {
      Si = !0;
    } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
  } catch {
    Si = !1;
  }
function Up(e, t, n, r, l, o, i, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (p) {
    this.onError(p);
  }
}
var bn = !1, xl = null, Cl = !1, ki = null, Bp = { onError: function(e) {
  bn = !0, xl = e;
} };
function Hp(e, t, n, r, l, o, i, u, s) {
  bn = !1, xl = null, Up.apply(Bp, arguments);
}
function Vp(e, t, n, r, l, o, i, u, s) {
  if (Hp.apply(this, arguments), bn) {
    if (bn) {
      var f = xl;
      bn = !1, xl = null;
    } else
      throw Error(x(198));
    Cl || (Cl = !0, ki = f);
  }
}
function rn(e) {
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
function wc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ss(e) {
  if (rn(e) !== e)
    throw Error(x(188));
}
function Wp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = rn(e), t === null)
      throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return Ss(l), e;
        if (o === r)
          return Ss(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(x(189));
      }
    }
    if (n.alternate !== r)
      throw Error(x(190));
  }
  if (n.tag !== 3)
    throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Sc(e) {
  return e = Wp(e), e !== null ? kc(e) : null;
}
function kc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = kc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ec = Me.unstable_scheduleCallback, ks = Me.unstable_cancelCallback, Qp = Me.unstable_shouldYield, Kp = Me.unstable_requestPaint, Z = Me.unstable_now, Yp = Me.unstable_getCurrentPriorityLevel, yu = Me.unstable_ImmediatePriority, xc = Me.unstable_UserBlockingPriority, _l = Me.unstable_NormalPriority, Gp = Me.unstable_LowPriority, Cc = Me.unstable_IdlePriority, so = null, ot = null;
function Xp(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(so, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ze = Math.clz32 ? Math.clz32 : qp, Zp = Math.log, Jp = Math.LN2;
function qp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zp(e) / Jp | 0) | 0;
}
var Vr = 64, Wr = 4194304;
function Xn(e) {
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
function Tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Xn(u) : (o &= i, o !== 0 && (r = Xn(o)));
  } else
    i = n & ~l, i !== 0 ? r = Xn(i) : o !== 0 && (r = Xn(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Ze(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function bp(e, t) {
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
function em(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ze(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = bp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ei(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function _c() {
  var e = Vr;
  return Vr <<= 1, !(Vr & 4194240) && (Vr = 64), e;
}
function $o(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function tm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ze(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function gu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var F = 0;
function Tc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Nc, wu, Pc, zc, Rc, xi = !1, Qr = [], Tt = null, Nt = null, Pt = null, vr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), kt = [], nm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Es(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tt = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yr.delete(t.pointerId);
  }
}
function Bn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Ir(t), t !== null && wu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function rm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Tt = Bn(Tt, e, t, n, r, l), !0;
    case "dragenter":
      return Nt = Bn(Nt, e, t, n, r, l), !0;
    case "mouseover":
      return Pt = Bn(Pt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return vr.set(o, Bn(vr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, yr.set(o, Bn(yr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Lc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = wc(n), t !== null) {
          e.blockedOn = t, Rc(e.priority, function() {
            Pc(n);
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
function al(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      gi = r, n.target.dispatchEvent(r), gi = null;
    } else
      return t = Ir(n), t !== null && wu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xs(e, t, n) {
  al(e) && n.delete(t);
}
function lm() {
  xi = !1, Tt !== null && al(Tt) && (Tt = null), Nt !== null && al(Nt) && (Nt = null), Pt !== null && al(Pt) && (Pt = null), vr.forEach(xs), yr.forEach(xs);
}
function Hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, xi || (xi = !0, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, lm)));
}
function gr(e) {
  function t(l) {
    return Hn(l, e);
  }
  if (0 < Qr.length) {
    Hn(Qr[0], e);
    for (var n = 1; n < Qr.length; n++) {
      var r = Qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Tt !== null && Hn(Tt, e), Nt !== null && Hn(Nt, e), Pt !== null && Hn(Pt, e), vr.forEach(t), yr.forEach(t), n = 0; n < kt.length; n++)
    r = kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); )
    Lc(n), n.blockedOn === null && kt.shift();
}
var xn = yt.ReactCurrentBatchConfig, Nl = !0;
function om(e, t, n, r) {
  var l = F, o = xn.transition;
  xn.transition = null;
  try {
    F = 1, Su(e, t, n, r);
  } finally {
    F = l, xn.transition = o;
  }
}
function im(e, t, n, r) {
  var l = F, o = xn.transition;
  xn.transition = null;
  try {
    F = 4, Su(e, t, n, r);
  } finally {
    F = l, xn.transition = o;
  }
}
function Su(e, t, n, r) {
  if (Nl) {
    var l = Ci(e, t, n, r);
    if (l === null)
      Vo(e, t, r, Pl, n), Es(e, r);
    else if (rm(l, e, t, n, r))
      r.stopPropagation();
    else if (Es(e, r), t & 4 && -1 < nm.indexOf(e)) {
      for (; l !== null; ) {
        var o = Ir(l);
        if (o !== null && Nc(o), o = Ci(e, t, n, r), o === null && Vo(e, t, r, Pl, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Vo(e, t, r, null, n);
  }
}
var Pl = null;
function Ci(e, t, n, r) {
  if (Pl = null, e = vu(r), e = Wt(e), e !== null)
    if (t = rn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = wc(t), e !== null)
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
function Oc(e) {
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
      switch (Yp()) {
        case yu:
          return 1;
        case xc:
          return 4;
        case _l:
        case Gp:
          return 16;
        case Cc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xt = null, ku = null, cl = null;
function $c() {
  if (cl)
    return cl;
  var e, t = ku, n = t.length, r, l = "value" in xt ? xt.value : xt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return cl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function fl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Kr() {
  return !0;
}
function Cs() {
  return !1;
}
function Ae(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Kr : Cs, this.isPropagationStopped = Cs, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Kr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Kr);
  }, persist: function() {
  }, isPersistent: Kr }), t;
}
var Dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Eu = Ae(Dn), $r = Y({}, Dn, { view: 0, detail: 0 }), um = Ae($r), Io, Mo, Vn, ao = Y({}, $r, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Vn && (Vn && e.type === "mousemove" ? (Io = e.screenX - Vn.screenX, Mo = e.screenY - Vn.screenY) : Mo = Io = 0, Vn = e), Io);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Mo;
} }), _s = Ae(ao), sm = Y({}, ao, { dataTransfer: 0 }), am = Ae(sm), cm = Y({}, $r, { relatedTarget: 0 }), Do = Ae(cm), fm = Y({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), dm = Ae(fm), pm = Y({}, Dn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mm = Ae(pm), hm = Y({}, Dn, { data: 0 }), Ts = Ae(hm), vm = {
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
}, ym = {
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
}, gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function wm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gm[e]) ? !!t[e] : !1;
}
function xu() {
  return wm;
}
var Sm = Y({}, $r, { key: function(e) {
  if (e.key) {
    var t = vm[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ym[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xu, charCode: function(e) {
  return e.type === "keypress" ? fl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), km = Ae(Sm), Em = Y({}, ao, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ns = Ae(Em), xm = Y({}, $r, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xu }), Cm = Ae(xm), _m = Y({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tm = Ae(_m), Nm = Y({}, ao, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Pm = Ae(Nm), zm = [9, 13, 27, 32], Cu = pt && "CompositionEvent" in window, er = null;
pt && "documentMode" in document && (er = document.documentMode);
var Rm = pt && "TextEvent" in window && !er, Ic = pt && (!Cu || er && 8 < er && 11 >= er), Ps = String.fromCharCode(32), zs = !1;
function Mc(e, t) {
  switch (e) {
    case "keyup":
      return zm.indexOf(t.keyCode) !== -1;
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
function Dc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var an = !1;
function Lm(e, t) {
  switch (e) {
    case "compositionend":
      return Dc(t);
    case "keypress":
      return t.which !== 32 ? null : (zs = !0, Ps);
    case "textInput":
      return e = t.data, e === Ps && zs ? null : e;
    default:
      return null;
  }
}
function Om(e, t) {
  if (an)
    return e === "compositionend" || !Cu && Mc(e, t) ? (e = $c(), cl = ku = xt = null, an = !1, e) : null;
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
      return Ic && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $m = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$m[e.type] : t === "textarea";
}
function Fc(e, t, n, r) {
  mc(r), t = zl(t, "onChange"), 0 < t.length && (n = new Eu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var tr = null, wr = null;
function Im(e) {
  Gc(e, 0);
}
function co(e) {
  var t = dn(e);
  if (uc(t))
    return e;
}
function Mm(e, t) {
  if (e === "change")
    return t;
}
var Ac = !1;
if (pt) {
  var Fo;
  if (pt) {
    var Ao = "oninput" in document;
    if (!Ao) {
      var Ls = document.createElement("div");
      Ls.setAttribute("oninput", "return;"), Ao = typeof Ls.oninput == "function";
    }
    Fo = Ao;
  } else
    Fo = !1;
  Ac = Fo && (!document.documentMode || 9 < document.documentMode);
}
function Os() {
  tr && (tr.detachEvent("onpropertychange", jc), wr = tr = null);
}
function jc(e) {
  if (e.propertyName === "value" && co(wr)) {
    var t = [];
    Fc(t, wr, e, vu(e)), gc(Im, t);
  }
}
function Dm(e, t, n) {
  e === "focusin" ? (Os(), tr = t, wr = n, tr.attachEvent("onpropertychange", jc)) : e === "focusout" && Os();
}
function Fm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return co(wr);
}
function Am(e, t) {
  if (e === "click")
    return co(t);
}
function jm(e, t) {
  if (e === "input" || e === "change")
    return co(t);
}
function Um(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qe = typeof Object.is == "function" ? Object.is : Um;
function Sr(e, t) {
  if (qe(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ii.call(t, l) || !qe(e[l], t[l]))
      return !1;
  }
  return !0;
}
function $s(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Is(e, t) {
  var n = $s(e);
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
    n = $s(n);
  }
}
function Uc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Uc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bc() {
  for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = El(e.document);
  }
  return t;
}
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Bm(e) {
  var t = Bc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Uc(n.ownerDocument.documentElement, n)) {
    if (r !== null && _u(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Is(n, o);
        var i = Is(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Hm = pt && "documentMode" in document && 11 >= document.documentMode, cn = null, _i = null, nr = null, Ti = !1;
function Ms(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ti || cn == null || cn !== El(r) || (r = cn, "selectionStart" in r && _u(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), nr && Sr(nr, r) || (nr = r, r = zl(_i, "onSelect"), 0 < r.length && (t = new Eu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = cn)));
}
function Yr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var fn = { animationend: Yr("Animation", "AnimationEnd"), animationiteration: Yr("Animation", "AnimationIteration"), animationstart: Yr("Animation", "AnimationStart"), transitionend: Yr("Transition", "TransitionEnd") }, jo = {}, Hc = {};
pt && (Hc = document.createElement("div").style, "AnimationEvent" in window || (delete fn.animationend.animation, delete fn.animationiteration.animation, delete fn.animationstart.animation), "TransitionEvent" in window || delete fn.transitionend.transition);
function fo(e) {
  if (jo[e])
    return jo[e];
  if (!fn[e])
    return e;
  var t = fn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Hc)
      return jo[e] = t[n];
  return e;
}
var Vc = fo("animationend"), Wc = fo("animationiteration"), Qc = fo("animationstart"), Kc = fo("transitionend"), Yc = /* @__PURE__ */ new Map(), Ds = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dt(e, t) {
  Yc.set(e, t), nn(t, [e]);
}
for (var Uo = 0; Uo < Ds.length; Uo++) {
  var Bo = Ds[Uo], Vm = Bo.toLowerCase(), Wm = Bo[0].toUpperCase() + Bo.slice(1);
  Dt(Vm, "on" + Wm);
}
Dt(Vc, "onAnimationEnd");
Dt(Wc, "onAnimationIteration");
Dt(Qc, "onAnimationStart");
Dt("dblclick", "onDoubleClick");
Dt("focusin", "onFocus");
Dt("focusout", "onBlur");
Dt(Kc, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
nn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
nn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
nn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
nn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Fs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Vp(r, t, void 0, e), e.currentTarget = null;
}
function Gc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, f = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Fs(l, u, f), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, f = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Fs(l, u, f), o = s;
        }
    }
  }
  if (Cl)
    throw e = ki, Cl = !1, ki = null, e;
}
function B(e, t) {
  var n = t[Li];
  n === void 0 && (n = t[Li] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Xc(t, e, 2, !1), n.add(r));
}
function Ho(e, t, n) {
  var r = 0;
  t && (r |= 4), Xc(n, e, r, t);
}
var Gr = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
  if (!e[Gr]) {
    e[Gr] = !0, nc.forEach(function(n) {
      n !== "selectionchange" && (Qm.has(n) || Ho(n, !1, e), Ho(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gr] || (t[Gr] = !0, Ho("selectionchange", !1, t));
  }
}
function Xc(e, t, n, r) {
  switch (Oc(t)) {
    case 1:
      var l = om;
      break;
    case 4:
      l = im;
      break;
    default:
      l = Su;
  }
  n = l.bind(null, t, n, e), l = void 0, !Si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Vo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = Wt(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  gc(function() {
    var f = o, p = vu(n), m = [];
    e: {
      var h = Yc.get(e);
      if (h !== void 0) {
        var y = Eu, w = e;
        switch (e) {
          case "keypress":
            if (fl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = km;
            break;
          case "focusin":
            w = "focus", y = Do;
            break;
          case "focusout":
            w = "blur", y = Do;
            break;
          case "beforeblur":
          case "afterblur":
            y = Do;
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
            y = _s;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = am;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Cm;
            break;
          case Vc:
          case Wc:
          case Qc:
            y = dm;
            break;
          case Kc:
            y = Tm;
            break;
          case "scroll":
            y = um;
            break;
          case "wheel":
            y = Pm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = mm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ns;
        }
        var g = (t & 4) !== 0, E = !g && e === "scroll", a = g ? h !== null ? h + "Capture" : null : h;
        g = [];
        for (var c = f, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, a !== null && (v = hr(c, a), v != null && g.push(Er(c, v, d)))), E)
            break;
          c = c.return;
        }
        0 < g.length && (h = new y(h, w, null, n, p), m.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== gi && (w = n.relatedTarget || n.fromElement) && (Wt(w) || w[mt]))
          break e;
        if ((y || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = f, w = w ? Wt(w) : null, w !== null && (E = rn(w), w !== E || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = f), y !== w)) {
          if (g = _s, v = "onMouseLeave", a = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (g = Ns, v = "onPointerLeave", a = "onPointerEnter", c = "pointer"), E = y == null ? h : dn(y), d = w == null ? h : dn(w), h = new g(v, c + "leave", y, n, p), h.target = E, h.relatedTarget = d, v = null, Wt(p) === f && (g = new g(a, c + "enter", w, n, p), g.target = d, g.relatedTarget = E, v = g), E = v, y && w)
            t: {
              for (g = y, a = w, c = 0, d = g; d; d = ln(d))
                c++;
              for (d = 0, v = a; v; v = ln(v))
                d++;
              for (; 0 < c - d; )
                g = ln(g), c--;
              for (; 0 < d - c; )
                a = ln(a), d--;
              for (; c--; ) {
                if (g === a || a !== null && g === a.alternate)
                  break t;
                g = ln(g), a = ln(a);
              }
              g = null;
            }
          else
            g = null;
          y !== null && As(m, h, y, g, !1), w !== null && E !== null && As(m, E, w, g, !0);
        }
      }
      e: {
        if (h = f ? dn(f) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file")
          var S = Mm;
        else if (Rs(h))
          if (Ac)
            S = jm;
          else {
            S = Fm;
            var C = Dm;
          }
        else
          (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = Am);
        if (S && (S = S(e, f))) {
          Fc(m, S, n, p);
          break e;
        }
        C && C(e, h, f), e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && pi(h, "number", h.value);
      }
      switch (C = f ? dn(f) : window, e) {
        case "focusin":
          (Rs(C) || C.contentEditable === "true") && (cn = C, _i = f, nr = null);
          break;
        case "focusout":
          nr = _i = cn = null;
          break;
        case "mousedown":
          Ti = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ti = !1, Ms(m, n, p);
          break;
        case "selectionchange":
          if (Hm)
            break;
        case "keydown":
        case "keyup":
          Ms(m, n, p);
      }
      var k;
      if (Cu)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        an ? Mc(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (Ic && n.locale !== "ko" && (an || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && an && (k = $c()) : (xt = p, ku = "value" in xt ? xt.value : xt.textContent, an = !0)), C = zl(f, _), 0 < C.length && (_ = new Ts(_, e, null, n, p), m.push({ event: _, listeners: C }), k ? _.data = k : (k = Dc(n), k !== null && (_.data = k)))), (k = Rm ? Lm(e, n) : Om(e, n)) && (f = zl(f, "onBeforeInput"), 0 < f.length && (p = new Ts("onBeforeInput", "beforeinput", null, n, p), m.push({ event: p, listeners: f }), p.data = k));
    }
    Gc(m, t);
  });
}
function Er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = hr(e, n), o != null && r.unshift(Er(e, o, l)), o = hr(e, t), o != null && r.push(Er(e, o, l))), e = e.return;
  }
  return r;
}
function ln(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function As(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && f !== null && (u = f, l ? (s = hr(n, o), s != null && i.unshift(Er(n, s, u))) : l || (s = hr(n, o), s != null && i.push(Er(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Km = /\r\n?/g, Ym = /\u0000|\uFFFD/g;
function js(e) {
  return (typeof e == "string" ? e : "" + e).replace(Km, `
`).replace(Ym, "");
}
function Xr(e, t, n) {
  if (t = js(t), js(e) !== t && n)
    throw Error(x(425));
}
function Rl() {
}
var Ni = null, Pi = null;
function zi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ri = typeof setTimeout == "function" ? setTimeout : void 0, Gm = typeof clearTimeout == "function" ? clearTimeout : void 0, Us = typeof Promise == "function" ? Promise : void 0, Xm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Us < "u" ? function(e) {
  return Us.resolve(null).then(e).catch(Zm);
} : Ri;
function Zm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wo(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), gr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  gr(t);
}
function zt(e) {
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
function Bs(e) {
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
var Fn = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Fn, xr = "__reactProps$" + Fn, mt = "__reactContainer$" + Fn, Li = "__reactEvents$" + Fn, Jm = "__reactListeners$" + Fn, qm = "__reactHandles$" + Fn;
function Wt(e) {
  var t = e[rt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[mt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Bs(e); e !== null; ) {
          if (n = e[rt])
            return n;
          e = Bs(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ir(e) {
  return e = e[rt] || e[mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function dn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(x(33));
}
function po(e) {
  return e[xr] || null;
}
var Oi = [], pn = -1;
function Ft(e) {
  return { current: e };
}
function H(e) {
  0 > pn || (e.current = Oi[pn], Oi[pn] = null, pn--);
}
function U(e, t) {
  pn++, Oi[pn] = e.current, e.current = t;
}
var Mt = {}, ye = Ft(Mt), Te = Ft(!1), Zt = Mt;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function Ll() {
  H(Te), H(ye);
}
function Hs(e, t, n) {
  if (ye.current !== Mt)
    throw Error(x(168));
  U(ye, t), U(Te, n);
}
function Zc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(x(108, Dp(e) || "Unknown", l));
  return Y({}, n, r);
}
function Ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, Zt = ye.current, U(ye, e), U(Te, Te.current), !0;
}
function Vs(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(x(169));
  n ? (e = Zc(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, H(Te), H(ye), U(ye, e)) : H(Te), U(Te, n);
}
var at = null, mo = !1, Qo = !1;
function Jc(e) {
  at === null ? at = [e] : at.push(e);
}
function bm(e) {
  mo = !0, Jc(e);
}
function At() {
  if (!Qo && at !== null) {
    Qo = !0;
    var e = 0, t = F;
    try {
      var n = at;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, mo = !1;
    } catch (l) {
      throw at !== null && (at = at.slice(e + 1)), Ec(yu, At), l;
    } finally {
      F = t, Qo = !1;
    }
  }
  return null;
}
var mn = [], hn = 0, $l = null, Il = 0, Ue = [], Be = 0, Jt = null, ct = 1, ft = "";
function Bt(e, t) {
  mn[hn++] = Il, mn[hn++] = $l, $l = e, Il = t;
}
function qc(e, t, n) {
  Ue[Be++] = ct, Ue[Be++] = ft, Ue[Be++] = Jt, Jt = e;
  var r = ct;
  e = ft;
  var l = 32 - Ze(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ze(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, ct = 1 << 32 - Ze(t) + l | n << l | r, ft = o + e;
  } else
    ct = 1 << o | n << l | r, ft = e;
}
function Tu(e) {
  e.return !== null && (Bt(e, 1), qc(e, 1, 0));
}
function Nu(e) {
  for (; e === $l; )
    $l = mn[--hn], mn[hn] = null, Il = mn[--hn], mn[hn] = null;
  for (; e === Jt; )
    Jt = Ue[--Be], Ue[Be] = null, ft = Ue[--Be], Ue[Be] = null, ct = Ue[--Be], Ue[Be] = null;
}
var Ie = null, Oe = null, V = !1, Xe = null;
function bc(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ws(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, Oe = zt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: ct, overflow: ft } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function $i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ii(e) {
  if (V) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!Ws(e, t)) {
        if ($i(e))
          throw Error(x(418));
        t = zt(n.nextSibling);
        var r = Ie;
        t && Ws(e, t) ? bc(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, Ie = e);
      }
    } else {
      if ($i(e))
        throw Error(x(418));
      e.flags = e.flags & -4097 | 2, V = !1, Ie = e;
    }
  }
}
function Qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Zr(e) {
  if (e !== Ie)
    return !1;
  if (!V)
    return Qs(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zi(e.type, e.memoizedProps)), t && (t = Oe)) {
    if ($i(e))
      throw ef(), Error(x(418));
    for (; t; )
      bc(e, t), t = zt(t.nextSibling);
  }
  if (Qs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = zt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else
    Oe = Ie ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function ef() {
  for (var e = Oe; e; )
    e = zt(e.nextSibling);
}
function zn() {
  Oe = Ie = null, V = !1;
}
function Pu(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
var e0 = yt.ReactCurrentBatchConfig;
function Ye(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ml = Ft(null), Dl = null, vn = null, zu = null;
function Ru() {
  zu = vn = Dl = null;
}
function Lu(e) {
  var t = Ml.current;
  H(Ml), e._currentValue = t;
}
function Mi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Cn(e, t) {
  Dl = e, zu = vn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function We(e) {
  var t = e._currentValue;
  if (zu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, vn === null) {
      if (Dl === null)
        throw Error(x(308));
      vn = e, Dl.dependencies = { lanes: 0, firstContext: e };
    } else
      vn = vn.next = e;
  return t;
}
var Qt = null;
function Ou(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
function tf(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ou(t)) : (n.next = l.next, l.next = n), t.interleaved = n, ht(e, r);
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function $u(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function nf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, I & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, ht(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ou(r)) : (t.next = l.next, l.next = t), r.interleaved = t, ht(e, n);
}
function dl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gu(e, n);
  }
}
function Ks(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Fl(e, t, n, r) {
  var l = e.updateQueue;
  St = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, i === null ? o = f : i.next = f, i = s;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = f : u.next = f, p.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, p = f = s = null, u = o;
    do {
      var h = u.lane, y = u.eventTime;
      if ((r & h) === h) {
        p !== null && (p = p.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, g = u;
          switch (h = t, y = n, g.tag) {
            case 1:
              if (w = g.payload, typeof w == "function") {
                m = w.call(y, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = g.payload, h = typeof w == "function" ? w.call(y, m, h) : w, h == null)
                break e;
              m = Y({}, m, h);
              break e;
            case 2:
              St = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
      } else
        y = { eventTime: y, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, p === null ? (f = p = y, s = m) : p = p.next = y, i |= h;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (1);
    if (p === null && (s = m), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = p, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    bt |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Ys(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var rf = new tc.Component().refs;
function Di(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ho = { isMounted: function(e) {
  return (e = e._reactInternals) ? rn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = Ot(e), o = dt(r, l);
  o.payload = t, n != null && (o.callback = n), t = Rt(e, o, l), t !== null && (Je(t, e, l, r), dl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = Ot(e), o = dt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Rt(e, o, l), t !== null && (Je(t, e, l, r), dl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Se(), r = Ot(e), l = dt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Rt(e, l, r), t !== null && (Je(t, e, r, n), dl(t, e, r));
} };
function Gs(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Sr(n, r) || !Sr(l, o) : !0;
}
function lf(e, t, n) {
  var r = !1, l = Mt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = We(o) : (l = Ne(t) ? Zt : ye.current, r = t.contextTypes, o = (r = r != null) ? Pn(e, l) : Mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ho, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Xs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ho.enqueueReplaceState(t, t.state, null);
}
function Fi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = rf, $u(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = We(o) : (o = Ne(t) ? Zt : ye.current, l.context = Pn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Di(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ho.enqueueReplaceState(l, l.state, null), Fl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(x(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === rf && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(x(284));
    if (!n._owner)
      throw Error(x(290, e));
  }
  return e;
}
function Jr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Zs(e) {
  var t = e._init;
  return t(e._payload);
}
function of(e) {
  function t(a, c) {
    if (e) {
      var d = a.deletions;
      d === null ? (a.deletions = [c], a.flags |= 16) : d.push(c);
    }
  }
  function n(a, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(a, c), c = c.sibling;
    return null;
  }
  function r(a, c) {
    for (a = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? a.set(c.key, c) : a.set(c.index, c), c = c.sibling;
    return a;
  }
  function l(a, c) {
    return a = $t(a, c), a.index = 0, a.sibling = null, a;
  }
  function o(a, c, d) {
    return a.index = d, e ? (d = a.alternate, d !== null ? (d = d.index, d < c ? (a.flags |= 2, c) : d) : (a.flags |= 2, c)) : (a.flags |= 1048576, c);
  }
  function i(a) {
    return e && a.alternate === null && (a.flags |= 2), a;
  }
  function u(a, c, d, v) {
    return c === null || c.tag !== 6 ? (c = qo(d, a.mode, v), c.return = a, c) : (c = l(c, d), c.return = a, c);
  }
  function s(a, c, d, v) {
    var S = d.type;
    return S === sn ? p(a, c, d.props.children, v, d.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === wt && Zs(S) === c.type) ? (v = l(c, d.props), v.ref = Wn(a, c, d), v.return = a, v) : (v = gl(d.type, d.key, d.props, null, a.mode, v), v.ref = Wn(a, c, d), v.return = a, v);
  }
  function f(a, c, d, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = bo(d, a.mode, v), c.return = a, c) : (c = l(c, d.children || []), c.return = a, c);
  }
  function p(a, c, d, v, S) {
    return c === null || c.tag !== 7 ? (c = Xt(d, a.mode, v, S), c.return = a, c) : (c = l(c, d), c.return = a, c);
  }
  function m(a, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = qo("" + c, a.mode, d), c.return = a, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ur:
          return d = gl(c.type, c.key, c.props, null, a.mode, d), d.ref = Wn(a, null, c), d.return = a, d;
        case un:
          return c = bo(c, a.mode, d), c.return = a, c;
        case wt:
          var v = c._init;
          return m(a, v(c._payload), d);
      }
      if (Gn(c) || jn(c))
        return c = Xt(c, a.mode, d, null), c.return = a, c;
      Jr(a, c);
    }
    return null;
  }
  function h(a, c, d, v) {
    var S = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return S !== null ? null : u(a, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ur:
          return d.key === S ? s(a, c, d, v) : null;
        case un:
          return d.key === S ? f(a, c, d, v) : null;
        case wt:
          return S = d._init, h(
            a,
            c,
            S(d._payload),
            v
          );
      }
      if (Gn(d) || jn(d))
        return S !== null ? null : p(a, c, d, v, null);
      Jr(a, d);
    }
    return null;
  }
  function y(a, c, d, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return a = a.get(d) || null, u(c, a, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ur:
          return a = a.get(v.key === null ? d : v.key) || null, s(c, a, v, S);
        case un:
          return a = a.get(v.key === null ? d : v.key) || null, f(c, a, v, S);
        case wt:
          var C = v._init;
          return y(a, c, d, C(v._payload), S);
      }
      if (Gn(v) || jn(v))
        return a = a.get(d) || null, p(c, a, v, S, null);
      Jr(c, v);
    }
    return null;
  }
  function w(a, c, d, v) {
    for (var S = null, C = null, k = c, _ = c = 0, $ = null; k !== null && _ < d.length; _++) {
      k.index > _ ? ($ = k, k = null) : $ = k.sibling;
      var P = h(a, k, d[_], v);
      if (P === null) {
        k === null && (k = $);
        break;
      }
      e && k && P.alternate === null && t(a, k), c = o(P, c, _), C === null ? S = P : C.sibling = P, C = P, k = $;
    }
    if (_ === d.length)
      return n(a, k), V && Bt(a, _), S;
    if (k === null) {
      for (; _ < d.length; _++)
        k = m(a, d[_], v), k !== null && (c = o(k, c, _), C === null ? S = k : C.sibling = k, C = k);
      return V && Bt(a, _), S;
    }
    for (k = r(a, k); _ < d.length; _++)
      $ = y(k, a, _, d[_], v), $ !== null && (e && $.alternate !== null && k.delete($.key === null ? _ : $.key), c = o($, c, _), C === null ? S = $ : C.sibling = $, C = $);
    return e && k.forEach(function(b) {
      return t(a, b);
    }), V && Bt(a, _), S;
  }
  function g(a, c, d, v) {
    var S = jn(d);
    if (typeof S != "function")
      throw Error(x(150));
    if (d = S.call(d), d == null)
      throw Error(x(151));
    for (var C = S = null, k = c, _ = c = 0, $ = null, P = d.next(); k !== null && !P.done; _++, P = d.next()) {
      k.index > _ ? ($ = k, k = null) : $ = k.sibling;
      var b = h(a, k, P.value, v);
      if (b === null) {
        k === null && (k = $);
        break;
      }
      e && k && b.alternate === null && t(a, k), c = o(b, c, _), C === null ? S = b : C.sibling = b, C = b, k = $;
    }
    if (P.done)
      return n(
        a,
        k
      ), V && Bt(a, _), S;
    if (k === null) {
      for (; !P.done; _++, P = d.next())
        P = m(a, P.value, v), P !== null && (c = o(P, c, _), C === null ? S = P : C.sibling = P, C = P);
      return V && Bt(a, _), S;
    }
    for (k = r(a, k); !P.done; _++, P = d.next())
      P = y(k, a, _, P.value, v), P !== null && (e && P.alternate !== null && k.delete(P.key === null ? _ : P.key), c = o(P, c, _), C === null ? S = P : C.sibling = P, C = P);
    return e && k.forEach(function(ne) {
      return t(a, ne);
    }), V && Bt(a, _), S;
  }
  function E(a, c, d, v) {
    if (typeof d == "object" && d !== null && d.type === sn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ur:
          e: {
            for (var S = d.key, C = c; C !== null; ) {
              if (C.key === S) {
                if (S = d.type, S === sn) {
                  if (C.tag === 7) {
                    n(a, C.sibling), c = l(C, d.props.children), c.return = a, a = c;
                    break e;
                  }
                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === wt && Zs(S) === C.type) {
                  n(a, C.sibling), c = l(C, d.props), c.ref = Wn(a, C, d), c.return = a, a = c;
                  break e;
                }
                n(a, C);
                break;
              } else
                t(a, C);
              C = C.sibling;
            }
            d.type === sn ? (c = Xt(d.props.children, a.mode, v, d.key), c.return = a, a = c) : (v = gl(d.type, d.key, d.props, null, a.mode, v), v.ref = Wn(a, c, d), v.return = a, a = v);
          }
          return i(a);
        case un:
          e: {
            for (C = d.key; c !== null; ) {
              if (c.key === C)
                if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                  n(a, c.sibling), c = l(c, d.children || []), c.return = a, a = c;
                  break e;
                } else {
                  n(a, c);
                  break;
                }
              else
                t(a, c);
              c = c.sibling;
            }
            c = bo(d, a.mode, v), c.return = a, a = c;
          }
          return i(a);
        case wt:
          return C = d._init, E(a, c, C(d._payload), v);
      }
      if (Gn(d))
        return w(a, c, d, v);
      if (jn(d))
        return g(a, c, d, v);
      Jr(a, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(a, c.sibling), c = l(c, d), c.return = a, a = c) : (n(a, c), c = qo(d, a.mode, v), c.return = a, a = c), i(a)) : n(a, c);
  }
  return E;
}
var Rn = of(!0), uf = of(!1), Mr = {}, it = Ft(Mr), Cr = Ft(Mr), _r = Ft(Mr);
function Kt(e) {
  if (e === Mr)
    throw Error(x(174));
  return e;
}
function Iu(e, t) {
  switch (U(_r, t), U(Cr, e), U(it, Mr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = hi(t, e);
  }
  H(it), U(it, t);
}
function Ln() {
  H(it), H(Cr), H(_r);
}
function sf(e) {
  Kt(_r.current);
  var t = Kt(it.current), n = hi(t, e.type);
  t !== n && (U(Cr, e), U(it, n));
}
function Mu(e) {
  Cr.current === e && (H(it), H(Cr));
}
var Q = Ft(0);
function Al(e) {
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
var Ko = [];
function Du() {
  for (var e = 0; e < Ko.length; e++)
    Ko[e]._workInProgressVersionPrimary = null;
  Ko.length = 0;
}
var pl = yt.ReactCurrentDispatcher, Yo = yt.ReactCurrentBatchConfig, qt = 0, K = null, ee = null, le = null, jl = !1, rr = !1, Tr = 0, t0 = 0;
function pe() {
  throw Error(x(321));
}
function Fu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n]))
      return !1;
  return !0;
}
function Au(e, t, n, r, l, o) {
  if (qt = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pl.current = e === null || e.memoizedState === null ? o0 : i0, e = n(r, l), rr) {
    o = 0;
    do {
      if (rr = !1, Tr = 0, 25 <= o)
        throw Error(x(301));
      o += 1, le = ee = null, t.updateQueue = null, pl.current = u0, e = n(r, l);
    } while (rr);
  }
  if (pl.current = Ul, t = ee !== null && ee.next !== null, qt = 0, le = ee = K = null, jl = !1, t)
    throw Error(x(300));
  return e;
}
function ju() {
  var e = Tr !== 0;
  return Tr = 0, e;
}
function et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? K.memoizedState = le = e : le = le.next = e, le;
}
function Qe() {
  if (ee === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ee.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null)
    le = t, ee = e;
  else {
    if (e === null)
      throw Error(x(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, le === null ? K.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function Nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Go(e) {
  var t = Qe(), n = t.queue;
  if (n === null)
    throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ee, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, f = o;
    do {
      var p = f.lane;
      if ((qt & p) === p)
        s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: p,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, K.lanes |= p, bt |= p;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? i = r : s.next = u, qe(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, K.lanes |= o, bt |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xo(e) {
  var t = Qe(), n = t.queue;
  if (n === null)
    throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    qe(o, t.memoizedState) || (Ce = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function af() {
}
function cf(e, t) {
  var n = K, r = Qe(), l = t(), o = !qe(r.memoizedState, l);
  if (o && (r.memoizedState = l, Ce = !0), r = r.queue, Uu(pf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, Pr(9, df.bind(null, n, r, l, t), void 0, null), oe === null)
      throw Error(x(349));
    qt & 30 || ff(n, t, l);
  }
  return l;
}
function ff(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function df(e, t, n, r) {
  t.value = n, t.getSnapshot = r, mf(t) && hf(e);
}
function pf(e, t, n) {
  return n(function() {
    mf(t) && hf(e);
  });
}
function mf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function hf(e) {
  var t = ht(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Js(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = l0.bind(null, K, e), [t.memoizedState, e];
}
function Pr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vf() {
  return Qe().memoizedState;
}
function ml(e, t, n, r) {
  var l = et();
  K.flags |= e, l.memoizedState = Pr(1 | t, n, void 0, r === void 0 ? null : r);
}
function vo(e, t, n, r) {
  var l = Qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (o = i.destroy, r !== null && Fu(r, i.deps)) {
      l.memoizedState = Pr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, l.memoizedState = Pr(1 | t, n, o, r);
}
function qs(e, t) {
  return ml(8390656, 8, e, t);
}
function Uu(e, t) {
  return vo(2048, 8, e, t);
}
function yf(e, t) {
  return vo(4, 2, e, t);
}
function gf(e, t) {
  return vo(4, 4, e, t);
}
function wf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Sf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vo(4, 4, wf.bind(null, t, e), n);
}
function Bu() {
}
function kf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ef(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function xf(e, t, n) {
  return qt & 21 ? (qe(n, t) || (n = _c(), K.lanes |= n, bt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function n0(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Yo.transition;
  Yo.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, Yo.transition = r;
  }
}
function Cf() {
  return Qe().memoizedState;
}
function r0(e, t, n) {
  var r = Ot(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, _f(e))
    Tf(t, n);
  else if (n = tf(e, t, n, r), n !== null) {
    var l = Se();
    Je(n, e, r, l), Nf(n, t, r);
  }
}
function l0(e, t, n) {
  var r = Ot(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_f(e))
    Tf(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, qe(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Ou(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = tf(e, t, l, r), n !== null && (l = Se(), Je(n, e, r, l), Nf(n, t, r));
  }
}
function _f(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Tf(e, t) {
  rr = jl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Nf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gu(e, n);
  }
}
var Ul = { readContext: We, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, o0 = { readContext: We, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: We, useEffect: qs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ml(
    4194308,
    4,
    wf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ml(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ml(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = r0.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: Js, useDebugValue: Bu, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = Js(!1), t = e[0];
  return e = n0.bind(null, e[1]), et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, l = et();
  if (V) {
    if (n === void 0)
      throw Error(x(407));
    n = n();
  } else {
    if (n = t(), oe === null)
      throw Error(x(349));
    qt & 30 || ff(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, qs(pf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Pr(9, df.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = et(), t = oe.identifierPrefix;
  if (V) {
    var n = ft, r = ct;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = t0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, i0 = {
  readContext: We,
  useCallback: kf,
  useContext: We,
  useEffect: Uu,
  useImperativeHandle: Sf,
  useInsertionEffect: yf,
  useLayoutEffect: gf,
  useMemo: Ef,
  useReducer: Go,
  useRef: vf,
  useState: function() {
    return Go(Nr);
  },
  useDebugValue: Bu,
  useDeferredValue: function(e) {
    var t = Qe();
    return xf(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = Go(Nr)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: af,
  useSyncExternalStore: cf,
  useId: Cf,
  unstable_isNewReconciler: !1
}, u0 = { readContext: We, useCallback: kf, useContext: We, useEffect: Uu, useImperativeHandle: Sf, useInsertionEffect: yf, useLayoutEffect: gf, useMemo: Ef, useReducer: Xo, useRef: vf, useState: function() {
  return Xo(Nr);
}, useDebugValue: Bu, useDeferredValue: function(e) {
  var t = Qe();
  return ee === null ? t.memoizedState = e : xf(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = Xo(Nr)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: af, useSyncExternalStore: cf, useId: Cf, unstable_isNewReconciler: !1 };
function On(e, t) {
  try {
    var n = "", r = t;
    do
      n += Mp(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Zo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ai(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var s0 = typeof WeakMap == "function" ? WeakMap : Map;
function Pf(e, t, n) {
  n = dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Hl || (Hl = !0, Gi = r), Ai(e, t);
  }, n;
}
function zf(e, t, n) {
  n = dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ai(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ai(e, t), typeof r != "function" && (Lt === null ? Lt = /* @__PURE__ */ new Set([this]) : Lt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function bs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new s0();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = E0.bind(null, e, t, n), t.then(e, e));
}
function ea(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ta(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, Rt(n, t, 1))), n.lanes |= 1), e);
}
var a0 = yt.ReactCurrentOwner, Ce = !1;
function we(e, t, n, r) {
  t.child = e === null ? uf(t, null, n, r) : Rn(t, e.child, n, r);
}
function na(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Cn(t, l), r = Au(e, t, n, r, o, l), n = ju(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, vt(e, t, l)) : (V && n && Tu(t), t.flags |= 1, we(e, t, r, l), t.child);
}
function ra(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Xu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Rf(e, t, o, r, l)) : (e = gl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Sr, n(i, r) && e.ref === t.ref)
      return vt(e, t, l);
  }
  return t.flags |= 1, e = $t(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Rf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Sr(o, r) && e.ref === t.ref)
      if (Ce = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Ce = !0);
      else
        return t.lanes = e.lanes, vt(e, t, l);
  }
  return ji(e, t, n, r, l);
}
function Lf(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(gn, Le), Le |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(gn, Le), Le |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(gn, Le), Le |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(gn, Le), Le |= r;
  return we(e, t, l, n), t.child;
}
function Of(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ji(e, t, n, r, l) {
  var o = Ne(n) ? Zt : ye.current;
  return o = Pn(t, o), Cn(t, l), n = Au(e, t, n, r, o, l), r = ju(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, vt(e, t, l)) : (V && r && Tu(t), t.flags |= 1, we(e, t, n, l), t.child);
}
function la(e, t, n, r, l) {
  if (Ne(n)) {
    var o = !0;
    Ol(t);
  } else
    o = !1;
  if (Cn(t, l), t.stateNode === null)
    hl(e, t), lf(t, n, r), Fi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = We(f) : (f = Ne(n) ? Zt : ye.current, f = Pn(t, f));
    var p = n.getDerivedStateFromProps, m = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== f) && Xs(t, i, r, f), St = !1;
    var h = t.memoizedState;
    i.state = h, Fl(t, r, i, l), s = t.memoizedState, u !== r || h !== s || Te.current || St ? (typeof p == "function" && (Di(t, n, p, r), s = t.memoizedState), (u = St || Gs(t, n, u, r, h, s, f)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = f, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, nf(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Ye(t.type, u), i.props = f, m = t.pendingProps, h = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = We(s) : (s = Ne(n) ? Zt : ye.current, s = Pn(t, s));
    var y = n.getDerivedStateFromProps;
    (p = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || h !== s) && Xs(t, i, r, s), St = !1, h = t.memoizedState, i.state = h, Fl(t, r, i, l);
    var w = t.memoizedState;
    u !== m || h !== w || Te.current || St ? (typeof y == "function" && (Di(t, n, y, r), w = t.memoizedState), (f = St || Gs(t, n, f, r, h, w, s) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = f) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ui(e, t, n, r, o, l);
}
function Ui(e, t, n, r, l, o) {
  Of(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Vs(t, n, !1), vt(e, t, o);
  r = t.stateNode, a0.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Rn(t, e.child, null, o), t.child = Rn(t, null, u, o)) : we(e, t, u, o), t.memoizedState = r.state, l && Vs(t, n, !0), t.child;
}
function $f(e) {
  var t = e.stateNode;
  t.pendingContext ? Hs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hs(e, t.context, !1), Iu(e, t.containerInfo);
}
function oa(e, t, n, r, l) {
  return zn(), Pu(l), t.flags |= 256, we(e, t, n, r), t.child;
}
var Bi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function If(e, t, n) {
  var r = t.pendingProps, l = Q.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(Q, l & 1), e === null)
    return Ii(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = wo(i, r, 0, null), e = Xt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Hi(n), t.memoizedState = Bi, e) : Hu(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return c0(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = $t(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = $t(u, o) : (o = Xt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Hi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Bi, r;
  }
  return o = e.child, e = o.sibling, r = $t(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Hu(e, t) {
  return t = wo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qr(e, t, n, r) {
  return r !== null && Pu(r), Rn(t, e.child, null, n), e = Hu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function c0(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zo(Error(x(422))), qr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = wo({ mode: "visible", children: r.children }, l, 0, null), o = Xt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Rn(t, e.child, null, i), t.child.memoizedState = Hi(i), t.memoizedState = Bi, o);
  if (!(t.mode & 1))
    return qr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(x(419)), r = Zo(o, r, void 0), qr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ce || u) {
    if (r = oe, r !== null) {
      switch (i & -i) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, ht(e, l), Je(r, e, l, -1));
    }
    return Gu(), r = Zo(Error(x(421))), qr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = x0.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Oe = zt(l.nextSibling), Ie = t, V = !0, Xe = null, e !== null && (Ue[Be++] = ct, Ue[Be++] = ft, Ue[Be++] = Jt, ct = e.id, ft = e.overflow, Jt = t), t = Hu(t, r.children), t.flags |= 4096, t);
}
function ia(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Mi(e.return, t, n);
}
function Jo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Mf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (we(e, t, r.children, n), r = Q.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ia(e, n, t);
          else if (e.tag === 19)
            ia(e, n, t);
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
  if (U(Q, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Al(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Jo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Al(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Jo(t, !0, n, null, o);
        break;
      case "together":
        Jo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function vt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), bt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function f0(e, t, n) {
  switch (t.tag) {
    case 3:
      $f(t), zn();
      break;
    case 5:
      sf(t);
      break;
    case 1:
      Ne(t.type) && Ol(t);
      break;
    case 4:
      Iu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      U(Ml, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? If(e, t, n) : (U(Q, Q.current & 1), e = vt(e, t, n), e !== null ? e.sibling : null);
      U(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Mf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(Q, Q.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Lf(e, t, n);
  }
  return vt(e, t, n);
}
var Df, Vi, Ff, Af;
Df = function(e, t) {
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
Vi = function() {
};
Ff = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Kt(it.current);
    var o = null;
    switch (n) {
      case "input":
        l = fi(e, l), r = fi(e, r), o = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = mi(e, l), r = mi(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Rl);
    }
    vi(n, r);
    var i;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (pr.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null))
        if (f === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              f,
              n
            )), n = s;
        else
          f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (pr.hasOwnProperty(f) ? (s != null && f === "onScroll" && B("scroll", e), o || u === s || (o = [])) : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Af = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!V)
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
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function d0(e, t, n) {
  var r = t.pendingProps;
  switch (Nu(t), t.tag) {
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
      return me(t), null;
    case 1:
      return Ne(t.type) && Ll(), me(t), null;
    case 3:
      return r = t.stateNode, Ln(), H(Te), H(ye), Du(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (Ji(Xe), Xe = null))), Vi(e, t), me(t), null;
    case 5:
      Mu(t);
      var l = Kt(_r.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Ff(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(x(166));
          return me(t), null;
        }
        if (e = Kt(it.current), Zr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[rt] = t, r[xr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Zn.length; l++)
                B(Zn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              hs(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              ys(r, o), B("invalid", r);
          }
          vi(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Xr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : pr.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              Br(r), vs(r, o, !0);
              break;
            case "textarea":
              Br(r), gs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Rl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = cc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[rt] = t, e[xr] = r, Df(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = yi(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zn.length; l++)
                  B(Zn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), l = r;
                break;
              case "details":
                B("toggle", e), l = r;
                break;
              case "input":
                hs(e, r), l = fi(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                ys(e, r), l = mi(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            vi(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? pc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && fc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && mr(e, s) : typeof s == "number" && mr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (pr.hasOwnProperty(o) ? s != null && o === "onScroll" && B("scroll", e) : s != null && du(e, o, s, i));
              }
            switch (n) {
              case "input":
                Br(e), vs(e, r, !1);
                break;
              case "textarea":
                Br(e), gs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Sn(e, !!r.multiple, o, !1) : r.defaultValue != null && Sn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Rl);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null)
        Af(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(x(166));
        if (n = Kt(_r.current), Kt(it.current), Zr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = Ie, e !== null))
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (H(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && Oe !== null && t.mode & 1 && !(t.flags & 128))
          ef(), zn(), t.flags |= 98560, o = !1;
        else if (o = Zr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(x(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(x(317));
            o[rt] = t;
          } else
            zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), o = !1;
        } else
          Xe !== null && (Ji(Xe), Xe = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? te === 0 && (te = 3) : Gu())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Ln(), Vi(e, t), e === null && kr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Lu(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && Ll(), me(t), null;
    case 19:
      if (H(Q), o = t.memoizedState, o === null)
        return me(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Qn(o, !1);
        else {
          if (te !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Al(e), i !== null) {
                for (t.flags |= 128, Qn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return U(Q, Q.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && Z() > $n && (t.flags |= 128, r = !0, Qn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Al(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
              return me(t), null;
          } else
            2 * Z() - o.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128, r = !0, Qn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = Q.current, U(Q, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return Yu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Le & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function p0(e, t) {
  switch (Nu(t), t.tag) {
    case 1:
      return Ne(t.type) && Ll(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ln(), H(Te), H(ye), Du(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Mu(t), null;
    case 13:
      if (H(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(x(340));
        zn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Q), null;
    case 4:
      return Ln(), null;
    case 10:
      return Lu(t.type._context), null;
    case 22:
    case 23:
      return Yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1, ve = !1, m0 = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else
      n.current = null;
}
function Wi(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var ua = !1;
function h0(e, t) {
  if (Ni = Nl, e = Bc(), _u(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, f = 0, p = 0, m = e, h = null;
          t:
            for (; ; ) {
              for (var y; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (y = m.firstChild) !== null; )
                h = m, m = y;
              for (; ; ) {
                if (m === e)
                  break t;
                if (h === n && ++f === l && (u = i), h === o && ++p === r && (s = i), (y = m.nextSibling) !== null)
                  break;
                m = h, h = m.parentNode;
              }
              m = y;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Pi = { focusedElem: e, selectionRange: n }, Nl = !1, N = t; N !== null; )
    if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, N = e;
    else
      for (; N !== null; ) {
        t = N;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps, E = w.memoizedState, a = t.stateNode, c = a.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ye(t.type, g), E);
                  a.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (v) {
          G(t, t.return, v);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, N = e;
          break;
        }
        N = t.return;
      }
  return w = ua, ua = !1, w;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Wi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function yo(e, t) {
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
function Qi(e) {
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
function jf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, jf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[xr], delete t[Li], delete t[Jm], delete t[qm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Uf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sa(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uf(e.return))
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
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Rl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ki(e, t, n), e = e.sibling; e !== null; )
      Ki(e, t, n), e = e.sibling;
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Yi(e, t, n), e = e.sibling; e !== null; )
      Yi(e, t, n), e = e.sibling;
}
var se = null, Ge = !1;
function gt(e, t, n) {
  for (n = n.child; n !== null; )
    Bf(e, t, n), n = n.sibling;
}
function Bf(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(so, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ve || yn(n, t);
    case 6:
      var r = se, l = Ge;
      se = null, gt(e, t, n), se = r, Ge = l, se !== null && (Ge ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (Ge ? (e = se, n = n.stateNode, e.nodeType === 8 ? Wo(e.parentNode, n) : e.nodeType === 1 && Wo(e, n), gr(e)) : Wo(se, n.stateNode));
      break;
    case 4:
      r = se, l = Ge, se = n.stateNode.containerInfo, Ge = !0, gt(e, t, n), se = r, Ge = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Wi(n, t, i), l = l.next;
        } while (l !== r);
      }
      gt(e, t, n);
      break;
    case 1:
      if (!ve && (yn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          G(n, t, u);
        }
      gt(e, t, n);
      break;
    case 21:
      gt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null, gt(e, t, n), ve = r) : gt(e, t, n);
      break;
    default:
      gt(e, t, n);
  }
}
function aa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new m0()), t.forEach(function(r) {
      var l = C0.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                se = u.stateNode, Ge = !1;
                break e;
              case 3:
                se = u.stateNode.containerInfo, Ge = !0;
                break e;
              case 4:
                se = u.stateNode.containerInfo, Ge = !0;
                break e;
            }
            u = u.return;
          }
        if (se === null)
          throw Error(x(160));
        Bf(o, i, l), se = null, Ge = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (f) {
        G(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Hf(t, e), t = t.sibling;
}
function Hf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), be(e), r & 4) {
        try {
          lr(3, e, e.return), yo(3, e);
        } catch (g) {
          G(e, e.return, g);
        }
        try {
          lr(5, e, e.return);
        } catch (g) {
          G(e, e.return, g);
        }
      }
      break;
    case 1:
      Ke(t, e), be(e), r & 512 && n !== null && yn(n, n.return);
      break;
    case 5:
      if (Ke(t, e), be(e), r & 512 && n !== null && yn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          mr(l, "");
        } catch (g) {
          G(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && sc(l, o), yi(u, i);
            var f = yi(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i], m = s[i + 1];
              p === "style" ? pc(l, m) : p === "dangerouslySetInnerHTML" ? fc(l, m) : p === "children" ? mr(l, m) : du(l, p, m, f);
            }
            switch (u) {
              case "input":
                di(l, o);
                break;
              case "textarea":
                ac(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? Sn(l, !!o.multiple, y, !1) : h !== !!o.multiple && (o.defaultValue != null ? Sn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Sn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[xr] = o;
          } catch (g) {
            G(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Ke(t, e), be(e), r & 4) {
        if (e.stateNode === null)
          throw Error(x(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (g) {
          G(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ke(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          gr(t.containerInfo);
        } catch (g) {
          G(e, e.return, g);
        }
      break;
    case 4:
      Ke(t, e), be(e);
      break;
    case 13:
      Ke(t, e), be(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Qu = Z())), r & 4 && aa(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (f = ve) || p, Ke(t, e), ve = f) : Ke(t, e), be(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !p && e.mode & 1)
          for (N = e, p = e.child; p !== null; ) {
            for (m = N = p; N !== null; ) {
              switch (h = N, y = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, h, h.return);
                  break;
                case 1:
                  yn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = h, n = h.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (g) {
                      G(r, n, g);
                    }
                  }
                  break;
                case 5:
                  yn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    fa(m);
                    continue;
                  }
              }
              y !== null ? (y.return = h, N = y) : fa(m);
            }
            p = p.sibling;
          }
        e:
          for (p = null, m = e; ; ) {
            if (m.tag === 5) {
              if (p === null) {
                p = m;
                try {
                  l = m.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = dc("display", i));
                } catch (g) {
                  G(e, e.return, g);
                }
              }
            } else if (m.tag === 6) {
              if (p === null)
                try {
                  m.stateNode.nodeValue = f ? "" : m.memoizedProps;
                } catch (g) {
                  G(e, e.return, g);
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
      Ke(t, e), be(e), r & 4 && aa(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Uf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (mr(l, ""), r.flags &= -33);
          var o = sa(e);
          Yi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = sa(e);
          Ki(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      G(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function v0(e, t, n) {
  N = e, Vf(e);
}
function Vf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || br;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ve;
        u = br;
        var f = ve;
        if (br = i, (ve = s) && !f)
          for (N = l; N !== null; )
            i = N, s = i.child, i.tag === 22 && i.memoizedState !== null ? da(l) : s !== null ? (s.return = i, N = s) : da(l);
        for (; o !== null; )
          N = o, Vf(o), o = o.sibling;
        N = l, br = u, ve = f;
      }
      ca(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, N = o) : ca(e);
  }
}
function ca(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || yo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Ys(t, o, r);
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
                Ys(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var f = t.alternate;
                if (f !== null) {
                  var p = f.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && gr(m);
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
              throw Error(x(163));
          }
        ve || t.flags & 512 && Qi(t);
      } catch (h) {
        G(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function fa(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function da(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yo(4, t);
          } catch (s) {
            G(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              G(t, l, s);
            }
          }
          var o = t.return;
          try {
            Qi(t);
          } catch (s) {
            G(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Qi(t);
          } catch (s) {
            G(t, i, s);
          }
      }
    } catch (s) {
      G(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var y0 = Math.ceil, Bl = yt.ReactCurrentDispatcher, Vu = yt.ReactCurrentOwner, Ve = yt.ReactCurrentBatchConfig, I = 0, oe = null, q = null, ce = 0, Le = 0, gn = Ft(0), te = 0, zr = null, bt = 0, go = 0, Wu = 0, or = null, xe = null, Qu = 0, $n = 1 / 0, st = null, Hl = !1, Gi = null, Lt = null, el = !1, Ct = null, Vl = 0, ir = 0, Xi = null, vl = -1, yl = 0;
function Se() {
  return I & 6 ? Z() : vl !== -1 ? vl : vl = Z();
}
function Ot(e) {
  return e.mode & 1 ? I & 2 && ce !== 0 ? ce & -ce : e0.transition !== null ? (yl === 0 && (yl = _c()), yl) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Oc(e.type)), e) : 1;
}
function Je(e, t, n, r) {
  if (50 < ir)
    throw ir = 0, Xi = null, Error(x(185));
  Or(e, n, r), (!(I & 2) || e !== oe) && (e === oe && (!(I & 2) && (go |= n), te === 4 && Et(e, ce)), Pe(e, r), n === 1 && I === 0 && !(t.mode & 1) && ($n = Z() + 500, mo && At()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  em(e, t);
  var r = Tl(e, e === oe ? ce : 0);
  if (r === 0)
    n !== null && ks(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ks(n), t === 1)
      e.tag === 0 ? bm(pa.bind(null, e)) : Jc(pa.bind(null, e)), Xm(function() {
        !(I & 6) && At();
      }), n = null;
    else {
      switch (Tc(r)) {
        case 1:
          n = yu;
          break;
        case 4:
          n = xc;
          break;
        case 16:
          n = _l;
          break;
        case 536870912:
          n = Cc;
          break;
        default:
          n = _l;
      }
      n = Jf(n, Wf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Wf(e, t) {
  if (vl = -1, yl = 0, I & 6)
    throw Error(x(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n)
    return null;
  var r = Tl(e, e === oe ? ce : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Wl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = Kf();
    (oe !== e || ce !== t) && (st = null, $n = Z() + 500, Gt(e, t));
    do
      try {
        S0();
        break;
      } catch (u) {
        Qf(e, u);
      }
    while (1);
    Ru(), Bl.current = o, I = l, q !== null ? t = 0 : (oe = null, ce = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ei(e), l !== 0 && (r = l, t = Zi(e, l))), t === 1)
      throw n = zr, Gt(e, 0), Et(e, r), Pe(e, Z()), n;
    if (t === 6)
      Et(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !g0(l) && (t = Wl(e, r), t === 2 && (o = Ei(e), o !== 0 && (r = o, t = Zi(e, o))), t === 1))
        throw n = zr, Gt(e, 0), Et(e, r), Pe(e, Z()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Ht(e, xe, st);
          break;
        case 3:
          if (Et(e, r), (r & 130023424) === r && (t = Qu + 500 - Z(), 10 < t)) {
            if (Tl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ri(Ht.bind(null, e, xe, st), t);
            break;
          }
          Ht(e, xe, st);
          break;
        case 4:
          if (Et(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ze(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * y0(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ri(Ht.bind(null, e, xe, st), r);
            break;
          }
          Ht(e, xe, st);
          break;
        case 5:
          Ht(e, xe, st);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Pe(e, Z()), e.callbackNode === n ? Wf.bind(null, e) : null;
}
function Zi(e, t) {
  var n = or;
  return e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256), e = Wl(e, t), e !== 2 && (t = xe, xe = n, t !== null && Ji(t)), e;
}
function Ji(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function g0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!qe(o(), l))
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
function Et(e, t) {
  for (t &= ~Wu, t &= ~go, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function pa(e) {
  if (I & 6)
    throw Error(x(327));
  _n();
  var t = Tl(e, 0);
  if (!(t & 1))
    return Pe(e, Z()), null;
  var n = Wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ei(e);
    r !== 0 && (t = r, n = Zi(e, r));
  }
  if (n === 1)
    throw n = zr, Gt(e, 0), Et(e, t), Pe(e, Z()), n;
  if (n === 6)
    throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ht(e, xe, st), Pe(e, Z()), null;
}
function Ku(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && ($n = Z() + 500, mo && At());
  }
}
function en(e) {
  Ct !== null && Ct.tag === 0 && !(I & 6) && _n();
  var t = I;
  I |= 1;
  var n = Ve.transition, r = F;
  try {
    if (Ve.transition = null, F = 1, e)
      return e();
  } finally {
    F = r, Ve.transition = n, I = t, !(I & 6) && At();
  }
}
function Yu() {
  Le = gn.current, H(gn);
}
function Gt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Gm(n)), q !== null)
    for (n = q.return; n !== null; ) {
      var r = n;
      switch (Nu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ll();
          break;
        case 3:
          Ln(), H(Te), H(ye), Du();
          break;
        case 5:
          Mu(r);
          break;
        case 4:
          Ln();
          break;
        case 13:
          H(Q);
          break;
        case 19:
          H(Q);
          break;
        case 10:
          Lu(r.type._context);
          break;
        case 22:
        case 23:
          Yu();
      }
      n = n.return;
    }
  if (oe = e, q = e = $t(e.current, null), ce = Le = t, te = 0, zr = null, Wu = go = bt = 0, xe = or = null, Qt !== null) {
    for (t = 0; t < Qt.length; t++)
      if (n = Qt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Qt = null;
  }
  return e;
}
function Qf(e, t) {
  do {
    var n = q;
    try {
      if (Ru(), pl.current = Ul, jl) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        jl = !1;
      }
      if (qt = 0, le = ee = K = null, rr = !1, Tr = 0, Vu.current = null, n === null || n.return === null) {
        te = 1, zr = t, q = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ce, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, p = u, m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var y = ea(i);
          if (y !== null) {
            y.flags &= -257, ta(y, i, u, o, t), y.mode & 1 && bs(o, f, t), t = y, s = f;
            var w = t.updateQueue;
            if (w === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else
              w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              bs(o, f, t), Gu();
              break e;
            }
            s = Error(x(426));
          }
        } else if (V && u.mode & 1) {
          var E = ea(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), ta(E, i, u, o, t), Pu(On(s, u));
            break e;
          }
        }
        o = s = On(s, u), te !== 4 && (te = 2), or === null ? or = [o] : or.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var a = Pf(o, s, t);
              Ks(o, a);
              break e;
            case 1:
              u = s;
              var c = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Lt === null || !Lt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = zf(o, u, t);
                Ks(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Gf(n);
    } catch (S) {
      t = S, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Kf() {
  var e = Bl.current;
  return Bl.current = Ul, e === null ? Ul : e;
}
function Gu() {
  (te === 0 || te === 3 || te === 2) && (te = 4), oe === null || !(bt & 268435455) && !(go & 268435455) || Et(oe, ce);
}
function Wl(e, t) {
  var n = I;
  I |= 2;
  var r = Kf();
  (oe !== e || ce !== t) && (st = null, Gt(e, t));
  do
    try {
      w0();
      break;
    } catch (l) {
      Qf(e, l);
    }
  while (1);
  if (Ru(), I = n, Bl.current = r, q !== null)
    throw Error(x(261));
  return oe = null, ce = 0, te;
}
function w0() {
  for (; q !== null; )
    Yf(q);
}
function S0() {
  for (; q !== null && !Qp(); )
    Yf(q);
}
function Yf(e) {
  var t = Zf(e.alternate, e, Le);
  e.memoizedProps = e.pendingProps, t === null ? Gf(e) : q = t, Vu.current = null;
}
function Gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = p0(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, q = null;
        return;
      }
    } else if (n = d0(n, t, Le), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Ht(e, t, n) {
  var r = F, l = Ve.transition;
  try {
    Ve.transition = null, F = 1, k0(e, t, n, r);
  } finally {
    Ve.transition = l, F = r;
  }
  return null;
}
function k0(e, t, n, r) {
  do
    _n();
  while (Ct !== null);
  if (I & 6)
    throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (tm(e, o), e === oe && (q = oe = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || el || (el = !0, Jf(_l, function() {
    return _n(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ve.transition, Ve.transition = null;
    var i = F;
    F = 1;
    var u = I;
    I |= 4, Vu.current = null, h0(e, n), Hf(n, e), Bm(Pi), Nl = !!Ni, Pi = Ni = null, e.current = n, v0(n), Kp(), I = u, F = i, Ve.transition = o;
  } else
    e.current = n;
  if (el && (el = !1, Ct = e, Vl = l), o = e.pendingLanes, o === 0 && (Lt = null), Xp(n.stateNode), Pe(e, Z()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Hl)
    throw Hl = !1, e = Gi, Gi = null, e;
  return Vl & 1 && e.tag !== 0 && _n(), o = e.pendingLanes, o & 1 ? e === Xi ? ir++ : (ir = 0, Xi = e) : ir = 0, At(), null;
}
function _n() {
  if (Ct !== null) {
    var e = Tc(Vl), t = Ve.transition, n = F;
    try {
      if (Ve.transition = null, F = 16 > e ? 16 : e, Ct === null)
        var r = !1;
      else {
        if (e = Ct, Ct = null, Vl = 0, I & 6)
          throw Error(x(331));
        var l = I;
        for (I |= 4, N = e.current; N !== null; ) {
          var o = N, i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (N = f; N !== null; ) {
                  var p = N;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null)
                    m.return = p, N = m;
                  else
                    for (; N !== null; ) {
                      p = N;
                      var h = p.sibling, y = p.return;
                      if (jf(p), p === f) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = y, N = h;
                        break;
                      }
                      N = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var E = g.sibling;
                    g.sibling = null, g = E;
                  } while (g !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, N = i;
          else
            e:
              for (; N !== null; ) {
                if (o = N, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(9, o, o.return);
                  }
                var a = o.sibling;
                if (a !== null) {
                  a.return = o.return, N = a;
                  break e;
                }
                N = o.return;
              }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, N = d;
          else
            e:
              for (i = c; N !== null; ) {
                if (u = N, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(9, u);
                    }
                  } catch (S) {
                    G(u, u.return, S);
                  }
                if (u === i) {
                  N = null;
                  break e;
                }
                var v = u.sibling;
                if (v !== null) {
                  v.return = u.return, N = v;
                  break e;
                }
                N = u.return;
              }
        }
        if (I = l, At(), ot && typeof ot.onPostCommitFiberRoot == "function")
          try {
            ot.onPostCommitFiberRoot(so, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      F = n, Ve.transition = t;
    }
  }
  return !1;
}
function ma(e, t, n) {
  t = On(n, t), t = Pf(e, t, 1), e = Rt(e, t, 1), t = Se(), e !== null && (Or(e, 1, t), Pe(e, t));
}
function G(e, t, n) {
  if (e.tag === 3)
    ma(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ma(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Lt === null || !Lt.has(r))) {
          e = On(n, e), e = zf(t, e, 1), t = Rt(t, e, 1), e = Se(), t !== null && (Or(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function E0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ce & n) === n && (te === 4 || te === 3 && (ce & 130023424) === ce && 500 > Z() - Qu ? Gt(e, 0) : Wu |= n), Pe(e, t);
}
function Xf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Wr, Wr <<= 1, !(Wr & 130023424) && (Wr = 4194304)) : t = 1);
  var n = Se();
  e = ht(e, t), e !== null && (Or(e, t, n), Pe(e, n));
}
function x0(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Xf(e, n);
}
function C0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Xf(e, n);
}
var Zf;
Zf = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current)
      Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ce = !1, f0(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else
    Ce = !1, V && t.flags & 1048576 && qc(t, Il, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      hl(e, t), e = t.pendingProps;
      var l = Pn(t, ye.current);
      Cn(t, n), l = Au(null, t, r, e, l, n);
      var o = ju();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (o = !0, Ol(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, $u(t), l.updater = ho, t.stateNode = l, l._reactInternals = t, Fi(t, r, e, n), t = Ui(null, t, r, !0, o, n)) : (t.tag = 0, V && o && Tu(t), we(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (hl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = T0(r), e = Ye(r, e), l) {
          case 0:
            t = ji(null, t, r, e, n);
            break e;
          case 1:
            t = la(null, t, r, e, n);
            break e;
          case 11:
            t = na(null, t, r, e, n);
            break e;
          case 14:
            t = ra(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), ji(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), la(e, t, r, l, n);
    case 3:
      e: {
        if ($f(t), e === null)
          throw Error(x(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, nf(e, t), Fl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = On(Error(x(423)), t), t = oa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = On(Error(x(424)), t), t = oa(e, t, r, n, l);
            break e;
          } else
            for (Oe = zt(t.stateNode.containerInfo.firstChild), Ie = t, V = !0, Xe = null, n = uf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (zn(), r === l) {
            t = vt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return sf(t), e === null && Ii(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, zi(r, l) ? i = null : o !== null && zi(r, o) && (t.flags |= 32), Of(e, t), we(e, t, i, n), t.child;
    case 6:
      return e === null && Ii(t), null;
    case 13:
      return If(e, t, n);
    case 4:
      return Iu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Rn(t, null, r, n) : we(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), na(e, t, r, l, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, U(Ml, r._currentValue), r._currentValue = i, o !== null)
          if (qe(o.value, i)) {
            if (o.children === l.children && !Te.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = dt(-1, n & -n), s.tag = 2;
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var p = f.pending;
                        p === null ? s.next = s : (s.next = p.next, p.next = s), f.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Mi(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(x(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Mi(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        we(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Cn(t, n), l = We(l), r = r(l), t.flags |= 1, we(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ye(r, t.pendingProps), l = Ye(r.type, l), ra(e, t, r, l, n);
    case 15:
      return Rf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), hl(e, t), t.tag = 1, Ne(r) ? (e = !0, Ol(t)) : e = !1, Cn(t, n), lf(t, r, l), Fi(t, r, l, n), Ui(null, t, r, !0, e, n);
    case 19:
      return Mf(e, t, n);
    case 22:
      return Lf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Jf(e, t) {
  return Ec(e, t);
}
function _0(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new _0(e, t, n, r);
}
function Xu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function T0(e) {
  if (typeof e == "function")
    return Xu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === mu)
      return 11;
    if (e === hu)
      return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function gl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Xu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case sn:
          return Xt(n.children, l, o, t);
        case pu:
          i = 8, l |= 8;
          break;
        case ui:
          return e = He(12, n, t, l | 2), e.elementType = ui, e.lanes = o, e;
        case si:
          return e = He(13, n, t, l), e.elementType = si, e.lanes = o, e;
        case ai:
          return e = He(19, n, t, l), e.elementType = ai, e.lanes = o, e;
        case oc:
          return wo(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case rc:
                i = 10;
                break e;
              case lc:
                i = 9;
                break e;
              case mu:
                i = 11;
                break e;
              case hu:
                i = 14;
                break e;
              case wt:
                i = 16, r = null;
                break e;
            }
          throw Error(x(130, e == null ? e : typeof e, ""));
      }
  return t = He(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Xt(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function wo(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = oc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function qo(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function bo(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function N0(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $o(0), this.expirationTimes = $o(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $o(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Zu(e, t, n, r, l, o, i, u, s) {
  return e = new N0(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = He(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $u(o), e;
}
function P0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: un, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function qf(e) {
  if (!e)
    return Mt;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1)
      throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n))
      return Zc(e, n, t);
  }
  return t;
}
function bf(e, t, n, r, l, o, i, u, s) {
  return e = Zu(n, r, !0, e, l, o, i, u, s), e.context = qf(null), n = e.current, r = Se(), l = Ot(n), o = dt(r, l), o.callback = t ?? null, Rt(n, o, l), e.current.lanes = l, Or(e, l, r), Pe(e, r), e;
}
function So(e, t, n, r) {
  var l = t.current, o = Se(), i = Ot(l);
  return n = qf(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Rt(l, t, i), e !== null && (Je(e, l, i, o), dl(e, l, i)), i;
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
function ha(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ju(e, t) {
  ha(e, t), (e = e.alternate) && ha(e, t);
}
function z0() {
  return null;
}
var ed = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qu(e) {
  this._internalRoot = e;
}
ko.prototype.render = qu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(x(409));
  So(e, t, null, null);
};
ko.prototype.unmount = qu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function() {
      So(null, e, null, null);
    }), t[mt] = null;
  }
};
function ko(e) {
  this._internalRoot = e;
}
ko.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = zc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
      ;
    kt.splice(n, 0, e), n === 0 && Lc(e);
  }
};
function bu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Eo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function va() {
}
function R0(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = Ql(i);
        o.call(f);
      };
    }
    var i = bf(t, r, e, 0, null, !1, !1, "", va);
    return e._reactRootContainer = i, e[mt] = i.current, kr(e.nodeType === 8 ? e.parentNode : e), en(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = Ql(s);
      u.call(f);
    };
  }
  var s = Zu(e, 0, !1, null, null, !1, !1, "", va);
  return e._reactRootContainer = s, e[mt] = s.current, kr(e.nodeType === 8 ? e.parentNode : e), en(function() {
    So(t, s, n, r);
  }), s;
}
function xo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Ql(i);
        u.call(s);
      };
    }
    So(t, i, e, l);
  } else
    i = R0(n, t, e, l, r);
  return Ql(i);
}
Nc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 && (gu(t, n | 1), Pe(t, Z()), !(I & 6) && ($n = Z() + 500, At()));
      }
      break;
    case 13:
      en(function() {
        var r = ht(e, 1);
        if (r !== null) {
          var l = Se();
          Je(r, e, 1, l);
        }
      }), Ju(e, 1);
  }
};
wu = function(e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = Se();
      Je(t, e, 134217728, n);
    }
    Ju(e, 134217728);
  }
};
Pc = function(e) {
  if (e.tag === 13) {
    var t = Ot(e), n = ht(e, t);
    if (n !== null) {
      var r = Se();
      Je(n, e, t, r);
    }
    Ju(e, t);
  }
};
zc = function() {
  return F;
};
Rc = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
  }
};
wi = function(e, t, n) {
  switch (t) {
    case "input":
      if (di(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = po(r);
            if (!l)
              throw Error(x(90));
            uc(r), di(r, l);
          }
        }
      }
      break;
    case "textarea":
      ac(e, n);
      break;
    case "select":
      t = n.value, t != null && Sn(e, !!n.multiple, t, !1);
  }
};
vc = Ku;
yc = en;
var L0 = { usingClientEntryPoint: !1, Events: [Ir, dn, po, mc, hc, Ku] }, Kn = { findFiberByHostInstance: Wt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, O0 = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Sc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || z0, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      so = tl.inject(O0), ot = tl;
    } catch {
    }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L0;
Fe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bu(t))
    throw Error(x(200));
  return P0(e, t, null, n);
};
Fe.createRoot = function(e, t) {
  if (!bu(e))
    throw Error(x(299));
  var n = !1, r = "", l = ed;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zu(e, 1, !1, null, null, n, !1, r, l), e[mt] = t.current, kr(e.nodeType === 8 ? e.parentNode : e), new qu(t);
};
Fe.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Sc(t), e = e === null ? null : e.stateNode, e;
};
Fe.flushSync = function(e) {
  return en(e);
};
Fe.hydrate = function(e, t, n) {
  if (!Eo(t))
    throw Error(x(200));
  return xo(null, e, t, !0, n);
};
Fe.hydrateRoot = function(e, t, n) {
  if (!bu(e))
    throw Error(x(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = ed;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = bf(t, null, e, 1, n ?? null, l, !1, o, i), e[mt] = t.current, kr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new ko(t);
};
Fe.render = function(e, t, n) {
  if (!Eo(t))
    throw Error(x(200));
  return xo(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function(e) {
  if (!Eo(e))
    throw Error(x(40));
  return e._reactRootContainer ? (en(function() {
    xo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[mt] = null;
    });
  }), !0) : !1;
};
Fe.unstable_batchedUpdates = Ku;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Eo(n))
    throw Error(x(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(x(38));
  return xo(e, t, n, !1, r);
};
Fe.version = "18.2.0-next-9e3b772b8-20220608";
function td() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(td);
    } catch (e) {
      console.error(e);
    }
}
td(), qa.exports = Fe;
var nd = qa.exports;
const n1 = /* @__PURE__ */ ka(nd);
var ya = nd;
kl.createRoot = ya.createRoot, kl.hydrateRoot = ya.hydrateRoot;
function $0(e) {
  for (var t = [], n = 0; n < e.length; ) {
    var r = e[n];
    if (r === "*" || r === "+" || r === "?") {
      t.push({ type: "MODIFIER", index: n, value: e[n++] });
      continue;
    }
    if (r === "\\") {
      t.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] });
      continue;
    }
    if (r === "{") {
      t.push({ type: "OPEN", index: n, value: e[n++] });
      continue;
    }
    if (r === "}") {
      t.push({ type: "CLOSE", index: n, value: e[n++] });
      continue;
    }
    if (r === ":") {
      for (var l = "", o = n + 1; o < e.length; ) {
        var i = e.charCodeAt(o);
        if (
          // `0-9`
          i >= 48 && i <= 57 || // `A-Z`
          i >= 65 && i <= 90 || // `a-z`
          i >= 97 && i <= 122 || // `_`
          i === 95
        ) {
          l += e[o++];
          continue;
        }
        break;
      }
      if (!l)
        throw new TypeError("Missing parameter name at ".concat(n));
      t.push({ type: "NAME", index: n, value: l }), n = o;
      continue;
    }
    if (r === "(") {
      var u = 1, s = "", o = n + 1;
      if (e[o] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(o));
      for (; o < e.length; ) {
        if (e[o] === "\\") {
          s += e[o++] + e[o++];
          continue;
        }
        if (e[o] === ")") {
          if (u--, u === 0) {
            o++;
            break;
          }
        } else if (e[o] === "(" && (u++, e[o + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(o));
        s += e[o++];
      }
      if (u)
        throw new TypeError("Unbalanced pattern at ".concat(n));
      if (!s)
        throw new TypeError("Missing pattern at ".concat(n));
      t.push({ type: "PATTERN", index: n, value: s }), n = o;
      continue;
    }
    t.push({ type: "CHAR", index: n, value: e[n++] });
  }
  return t.push({ type: "END", index: n, value: "" }), t;
}
function I0(e, t) {
  t === void 0 && (t = {});
  for (var n = $0(e), r = t.prefixes, l = r === void 0 ? "./" : r, o = "[^".concat(on(t.delimiter || "/#?"), "]+?"), i = [], u = 0, s = 0, f = "", p = function(C) {
    if (s < n.length && n[s].type === C)
      return n[s++].value;
  }, m = function(C) {
    var k = p(C);
    if (k !== void 0)
      return k;
    var _ = n[s], $ = _.type, P = _.index;
    throw new TypeError("Unexpected ".concat($, " at ").concat(P, ", expected ").concat(C));
  }, h = function() {
    for (var C = "", k; k = p("CHAR") || p("ESCAPED_CHAR"); )
      C += k;
    return C;
  }; s < n.length; ) {
    var y = p("CHAR"), w = p("NAME"), g = p("PATTERN");
    if (w || g) {
      var E = y || "";
      l.indexOf(E) === -1 && (f += E, E = ""), f && (i.push(f), f = ""), i.push({
        name: w || u++,
        prefix: E,
        suffix: "",
        pattern: g || o,
        modifier: p("MODIFIER") || ""
      });
      continue;
    }
    var a = y || p("ESCAPED_CHAR");
    if (a) {
      f += a;
      continue;
    }
    f && (i.push(f), f = "");
    var c = p("OPEN");
    if (c) {
      var E = h(), d = p("NAME") || "", v = p("PATTERN") || "", S = h();
      m("CLOSE"), i.push({
        name: d || (v ? u++ : ""),
        pattern: d && !v ? o : v,
        prefix: E,
        suffix: S,
        modifier: p("MODIFIER") || ""
      });
      continue;
    }
    m("END");
  }
  return i;
}
function M0(e, t) {
  var n = [], r = ld(e, n, t);
  return D0(r, n, t);
}
function D0(e, t, n) {
  n === void 0 && (n = {});
  var r = n.decode, l = r === void 0 ? function(o) {
    return o;
  } : r;
  return function(o) {
    var i = e.exec(o);
    if (!i)
      return !1;
    for (var u = i[0], s = i.index, f = /* @__PURE__ */ Object.create(null), p = function(h) {
      if (i[h] === void 0)
        return "continue";
      var y = t[h - 1];
      y.modifier === "*" || y.modifier === "+" ? f[y.name] = i[h].split(y.prefix + y.suffix).map(function(w) {
        return l(w, y);
      }) : f[y.name] = l(i[h], y);
    }, m = 1; m < i.length; m++)
      p(m);
    return { path: u, index: s, params: f };
  };
}
function on(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function rd(e) {
  return e && e.sensitive ? "" : "i";
}
function F0(e, t) {
  if (!t)
    return e;
  for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, r = 0, l = n.exec(e.source); l; )
    t.push({
      // Use parenthesized substring match if available, index otherwise
      name: l[1] || r++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), l = n.exec(e.source);
  return e;
}
function A0(e, t, n) {
  var r = e.map(function(l) {
    return ld(l, t, n).source;
  });
  return new RegExp("(?:".concat(r.join("|"), ")"), rd(n));
}
function j0(e, t, n) {
  return U0(I0(e, n), t, n);
}
function U0(e, t, n) {
  n === void 0 && (n = {});
  for (var r = n.strict, l = r === void 0 ? !1 : r, o = n.start, i = o === void 0 ? !0 : o, u = n.end, s = u === void 0 ? !0 : u, f = n.encode, p = f === void 0 ? function(P) {
    return P;
  } : f, m = n.delimiter, h = m === void 0 ? "/#?" : m, y = n.endsWith, w = y === void 0 ? "" : y, g = "[".concat(on(w), "]|$"), E = "[".concat(on(h), "]"), a = i ? "^" : "", c = 0, d = e; c < d.length; c++) {
    var v = d[c];
    if (typeof v == "string")
      a += on(p(v));
    else {
      var S = on(p(v.prefix)), C = on(p(v.suffix));
      if (v.pattern)
        if (t && t.push(v), S || C)
          if (v.modifier === "+" || v.modifier === "*") {
            var k = v.modifier === "*" ? "?" : "";
            a += "(?:".concat(S, "((?:").concat(v.pattern, ")(?:").concat(C).concat(S, "(?:").concat(v.pattern, "))*)").concat(C, ")").concat(k);
          } else
            a += "(?:".concat(S, "(").concat(v.pattern, ")").concat(C, ")").concat(v.modifier);
        else
          v.modifier === "+" || v.modifier === "*" ? a += "((?:".concat(v.pattern, ")").concat(v.modifier, ")") : a += "(".concat(v.pattern, ")").concat(v.modifier);
      else
        a += "(?:".concat(S).concat(C, ")").concat(v.modifier);
    }
  }
  if (s)
    l || (a += "".concat(E, "?")), a += n.endsWith ? "(?=".concat(g, ")") : "$";
  else {
    var _ = e[e.length - 1], $ = typeof _ == "string" ? E.indexOf(_[_.length - 1]) > -1 : _ === void 0;
    l || (a += "(?:".concat(E, "(?=").concat(g, "))?")), $ || (a += "(?=".concat(E, "|").concat(g, ")"));
  }
  return new RegExp(a, rd(n));
}
function ld(e, t, n) {
  return e instanceof RegExp ? F0(e, t) : Array.isArray(e) ? A0(e, t, n) : j0(e, t, n);
}
class B0 {
  constructor(t, n) {
    this.route = t, this.path = n;
  }
  getPrivilege() {
    return this.route.privilege;
  }
  async getOptions() {
    const {
      Component: t,
      loader: n
    } = await this.route.component(), r = this.route.match(this.path);
    if (!r)
      return null;
    const l = await (n == null ? void 0 : n(r.params)), o = this.route.windowOptions;
    return {
      ...o,
      title: typeof (o == null ? void 0 : o.title) == "function" ? o.title(l) : o == null ? void 0 : o.title,
      renderComponent: (i) => {
        kl.createRoot(i).render(/* @__PURE__ */ Yt(j.StrictMode, { children: /* @__PURE__ */ Yt(R.Suspense, { fallback: "loading...", children: /* @__PURE__ */ Yt(t, { ...r, ...l }) }) }));
      }
    };
  }
}
var H0 = /* @__PURE__ */ Ga(function(e, t) {
  var n = e.styles, r = au([n], void 0, R.useContext(Xa)), l = R.useRef();
  return fs(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), i.hydrate([s])), l.current = [i, u], function() {
      i.flush();
    };
  }, [t]), fs(function() {
    var o = l.current, i = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && Wa(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
});
function od() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return au(t);
}
var r1 = function() {
  var t = od.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
function id(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = id(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function _t() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = id(e)) && (r && (r += " "), r += t);
  return r;
}
const ur = (e) => typeof e == "number" && !isNaN(e), tn = (e) => typeof e == "string", _e = (e) => typeof e == "function", wl = (e) => tn(e) || _e(e) ? e : null, ei = (e) => R.isValidElement(e) || tn(e) || _e(e) || ur(e);
function V0(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: l } = e;
  requestAnimationFrame(() => {
    l.minHeight = "initial", l.height = r + "px", l.transition = `all ${n}ms`, requestAnimationFrame(() => {
      l.height = "0", l.padding = "0", l.margin = "0", setTimeout(t, n);
    });
  });
}
function Co(e) {
  let { enter: t, exit: n, appendPosition: r = !1, collapse: l = !0, collapseDuration: o = 300 } = e;
  return function(i) {
    let { children: u, position: s, preventExitTransition: f, done: p, nodeRef: m, isIn: h } = i;
    const y = r ? `${t}--${s}` : t, w = r ? `${n}--${s}` : n, g = R.useRef(0);
    return R.useLayoutEffect(() => {
      const E = m.current, a = y.split(" "), c = (d) => {
        d.target === m.current && (E.dispatchEvent(new Event("d")), E.removeEventListener("animationend", c), E.removeEventListener("animationcancel", c), g.current === 0 && d.type !== "animationcancel" && E.classList.remove(...a));
      };
      E.classList.add(...a), E.addEventListener("animationend", c), E.addEventListener("animationcancel", c);
    }, []), R.useEffect(() => {
      const E = m.current, a = () => {
        E.removeEventListener("animationend", a), l ? V0(E, p, o) : p();
      };
      h || (f ? a() : (g.current = 1, E.className += ` ${w}`, E.addEventListener("animationend", a)));
    }, [h]), j.createElement(j.Fragment, null, u);
  };
}
function ga(e, t) {
  return e != null ? { content: e.content, containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, status: t } : {};
}
const je = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(e, t) {
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
  return j.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`, ...r });
}, ti = { info: function(e) {
  return j.createElement(nl, { ...e }, j.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return j.createElement(nl, { ...e }, j.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return j.createElement(nl, { ...e }, j.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return j.createElement(nl, { ...e }, j.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return j.createElement("div", { className: "Toastify__spinner" });
} };
function W0(e) {
  const [, t] = R.useReducer((y) => y + 1, 0), [n, r] = R.useState([]), l = R.useRef(null), o = R.useRef(/* @__PURE__ */ new Map()).current, i = (y) => n.indexOf(y) !== -1, u = R.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: i, getToast: (y) => o.get(y) }).current;
  function s(y) {
    let { containerId: w } = y;
    const { limit: g } = u.props;
    !g || w && u.containerId !== w || (u.count -= u.queue.length, u.queue = []);
  }
  function f(y) {
    r((w) => y == null ? [] : w.filter((g) => g !== y));
  }
  function p() {
    const { toastContent: y, toastProps: w, staleId: g } = u.queue.shift();
    h(y, w, g);
  }
  function m(y, w) {
    let { delay: g, staleId: E, ...a } = w;
    if (!ei(y) || function(ne) {
      return !l.current || u.props.enableMultiContainer && ne.containerId !== u.props.containerId || o.has(ne.toastId) && ne.updateId == null;
    }(a))
      return;
    const { toastId: c, updateId: d, data: v } = a, { props: S } = u, C = () => f(c), k = d == null;
    k && u.count++;
    const _ = { ...S, style: S.toastStyle, key: u.toastKey++, ...Object.fromEntries(Object.entries(a).filter((ne) => {
      let [ge, de] = ne;
      return de != null;
    })), toastId: c, updateId: d, data: v, closeToast: C, isIn: !1, className: wl(a.className || S.toastClassName), bodyClassName: wl(a.bodyClassName || S.bodyClassName), progressClassName: wl(a.progressClassName || S.progressClassName), autoClose: !a.isLoading && ($ = a.autoClose, P = S.autoClose, $ === !1 || ur($) && $ > 0 ? $ : P), deleteToast() {
      const ne = ga(o.get(c), "removed");
      o.delete(c), je.emit(4, ne);
      const ge = u.queue.length;
      if (u.count = c == null ? u.count - u.displayedToast : u.count - 1, u.count < 0 && (u.count = 0), ge > 0) {
        const de = c == null ? u.props.limit : 1;
        if (ge === 1 || de === 1)
          u.displayedToast++, p();
        else {
          const ut = de > ge ? ge : de;
          u.displayedToast = ut;
          for (let ue = 0; ue < ut; ue++)
            p();
        }
      } else
        t();
    } };
    var $, P;
    _.iconOut = function(ne) {
      let { theme: ge, type: de, isLoading: ut, icon: ue } = ne, Re = null;
      const T = { theme: ge, type: de };
      return ue === !1 || (_e(ue) ? Re = ue(T) : R.isValidElement(ue) ? Re = R.cloneElement(ue, T) : tn(ue) || ur(ue) ? Re = ue : ut ? Re = ti.spinner() : ((z) => z in ti)(de) && (Re = ti[de](T))), Re;
    }(_), _e(a.onOpen) && (_.onOpen = a.onOpen), _e(a.onClose) && (_.onClose = a.onClose), _.closeButton = S.closeButton, a.closeButton === !1 || ei(a.closeButton) ? _.closeButton = a.closeButton : a.closeButton === !0 && (_.closeButton = !ei(S.closeButton) || S.closeButton);
    let b = y;
    R.isValidElement(y) && !tn(y.type) ? b = R.cloneElement(y, { closeToast: C, toastProps: _, data: v }) : _e(y) && (b = y({ closeToast: C, toastProps: _, data: v })), S.limit && S.limit > 0 && u.count > S.limit && k ? u.queue.push({ toastContent: b, toastProps: _, staleId: E }) : ur(g) ? setTimeout(() => {
      h(b, _, E);
    }, g) : h(b, _, E);
  }
  function h(y, w, g) {
    const { toastId: E } = w;
    g && o.delete(g);
    const a = { content: y, props: w };
    o.set(E, a), r((c) => [...c, E].filter((d) => d !== g)), je.emit(4, ga(a, a.props.updateId == null ? "added" : "updated"));
  }
  return R.useEffect(() => (u.containerId = e.containerId, je.cancelEmit(3).on(0, m).on(1, (y) => l.current && f(y)).on(5, s).emit(2, u), () => {
    o.clear(), je.emit(3, u);
  }), []), R.useEffect(() => {
    u.props = e, u.isToastActive = i, u.displayedToast = n.length;
  }), { getToastToRender: function(y) {
    const w = /* @__PURE__ */ new Map(), g = Array.from(o.values());
    return e.newestOnTop && g.reverse(), g.forEach((E) => {
      const { position: a } = E.props;
      w.has(a) || w.set(a, []), w.get(a).push(E);
    }), Array.from(w, (E) => y(E[0], E[1]));
  }, containerRef: l, isToastActive: i };
}
function wa(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function Sa(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function Q0(e) {
  const [t, n] = R.useState(!1), [r, l] = R.useState(!1), o = R.useRef(null), i = R.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, u = R.useRef(e), { autoClose: s, pauseOnHover: f, closeToast: p, onClick: m, closeOnClick: h } = e;
  function y(v) {
    if (e.draggable) {
      v.nativeEvent.type === "touchstart" && v.nativeEvent.preventDefault(), i.didMove = !1, document.addEventListener("mousemove", a), document.addEventListener("mouseup", c), document.addEventListener("touchmove", a), document.addEventListener("touchend", c);
      const S = o.current;
      i.canCloseOnClick = !0, i.canDrag = !0, i.boundingRect = S.getBoundingClientRect(), S.style.transition = "", i.x = wa(v.nativeEvent), i.y = Sa(v.nativeEvent), e.draggableDirection === "x" ? (i.start = i.x, i.removalDistance = S.offsetWidth * (e.draggablePercent / 100)) : (i.start = i.y, i.removalDistance = S.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }
  function w(v) {
    if (i.boundingRect) {
      const { top: S, bottom: C, left: k, right: _ } = i.boundingRect;
      v.nativeEvent.type !== "touchend" && e.pauseOnHover && i.x >= k && i.x <= _ && i.y >= S && i.y <= C ? E() : g();
    }
  }
  function g() {
    n(!0);
  }
  function E() {
    n(!1);
  }
  function a(v) {
    const S = o.current;
    i.canDrag && S && (i.didMove = !0, t && E(), i.x = wa(v), i.y = Sa(v), i.delta = e.draggableDirection === "x" ? i.x - i.start : i.y - i.start, i.start !== i.x && (i.canCloseOnClick = !1), S.style.transform = `translate${e.draggableDirection}(${i.delta}px)`, S.style.opacity = "" + (1 - Math.abs(i.delta / i.removalDistance)));
  }
  function c() {
    document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", c), document.removeEventListener("touchmove", a), document.removeEventListener("touchend", c);
    const v = o.current;
    if (i.canDrag && i.didMove && v) {
      if (i.canDrag = !1, Math.abs(i.delta) > i.removalDistance)
        return l(!0), void e.closeToast();
      v.style.transition = "transform 0.2s, opacity 0.2s", v.style.transform = `translate${e.draggableDirection}(0)`, v.style.opacity = "1";
    }
  }
  R.useEffect(() => {
    u.current = e;
  }), R.useEffect(() => (o.current && o.current.addEventListener("d", g, { once: !0 }), _e(e.onOpen) && e.onOpen(R.isValidElement(e.children) && e.children.props), () => {
    const v = u.current;
    _e(v.onClose) && v.onClose(R.isValidElement(v.children) && v.children.props);
  }), []), R.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || E(), window.addEventListener("focus", g), window.addEventListener("blur", E)), () => {
    e.pauseOnFocusLoss && (window.removeEventListener("focus", g), window.removeEventListener("blur", E));
  }), [e.pauseOnFocusLoss]);
  const d = { onMouseDown: y, onTouchStart: y, onMouseUp: w, onTouchEnd: w };
  return s && f && (d.onMouseEnter = E, d.onMouseLeave = g), h && (d.onClick = (v) => {
    m && m(v), i.canCloseOnClick && p();
  }), { playToast: g, pauseToast: E, isRunning: t, preventExitTransition: r, toastRef: o, eventHandlers: d };
}
function ud(e) {
  let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
  return j.createElement("button", { className: `Toastify__close-button Toastify__close-button--${n}`, type: "button", onClick: (l) => {
    l.stopPropagation(), t(l);
  }, "aria-label": r }, j.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, j.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function K0(e) {
  let { delay: t, isRunning: n, closeToast: r, type: l = "default", hide: o, className: i, style: u, controlledProgress: s, progress: f, rtl: p, isIn: m, theme: h } = e;
  const y = o || s && f === 0, w = { ...u, animationDuration: `${t}ms`, animationPlayState: n ? "running" : "paused", opacity: y ? 0 : 1 };
  s && (w.transform = `scaleX(${f})`);
  const g = _t("Toastify__progress-bar", s ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${h}`, `Toastify__progress-bar--${l}`, { "Toastify__progress-bar--rtl": p }), E = _e(i) ? i({ rtl: p, type: l, defaultClassName: g }) : _t(g, i);
  return j.createElement("div", { role: "progressbar", "aria-hidden": y ? "true" : "false", "aria-label": "notification timer", className: E, style: w, [s && f >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: s && f < 1 ? null : () => {
    m && r();
  } });
}
const Y0 = (e) => {
  const { isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: l } = Q0(e), { closeButton: o, children: i, autoClose: u, onClick: s, type: f, hideProgressBar: p, closeToast: m, transition: h, position: y, className: w, style: g, bodyClassName: E, bodyStyle: a, progressClassName: c, progressStyle: d, updateId: v, role: S, progress: C, rtl: k, toastId: _, deleteToast: $, isIn: P, isLoading: b, iconOut: ne, closeOnClick: ge, theme: de } = e, ut = _t("Toastify__toast", `Toastify__toast-theme--${de}`, `Toastify__toast--${f}`, { "Toastify__toast--rtl": k }, { "Toastify__toast--close-on-click": ge }), ue = _e(w) ? w({ rtl: k, position: y, type: f, defaultClassName: ut }) : _t(ut, w), Re = !!C || !u, T = { closeToast: m, type: f, theme: de };
  let z = null;
  return o === !1 || (z = _e(o) ? o(T) : R.isValidElement(o) ? R.cloneElement(o, T) : ud(T)), j.createElement(h, { isIn: P, done: $, position: y, preventExitTransition: n, nodeRef: r }, j.createElement("div", { id: _, onClick: s, className: ue, ...l, style: g, ref: r }, j.createElement("div", { ...P && { role: S }, className: _e(E) ? E({ type: f }) : _t("Toastify__toast-body", E), style: a }, ne != null && j.createElement("div", { className: _t("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !b }) }, ne), j.createElement("div", null, i)), z, j.createElement(K0, { ...v && !Re ? { key: `pb-${v}` } : {}, rtl: k, theme: de, delay: u, isRunning: t, isIn: P, closeToast: m, hide: p, type: f, style: d, className: c, controlledProgress: Re, progress: C || 0 })));
}, _o = function(e, t) {
  return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, G0 = Co(_o("bounce", !0));
Co(_o("slide", !0));
Co(_o("zoom"));
Co(_o("flip"));
const qi = R.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: l } = W0(e), { className: o, style: i, rtl: u, containerId: s } = e;
  function f(p) {
    const m = _t("Toastify__toast-container", `Toastify__toast-container--${p}`, { "Toastify__toast-container--rtl": u });
    return _e(o) ? o({ position: p, rtl: u, defaultClassName: m }) : _t(m, wl(o));
  }
  return R.useEffect(() => {
    t && (t.current = r.current);
  }, []), j.createElement("div", { ref: r, className: "Toastify", id: s }, n((p, m) => {
    const h = m.length ? { ...i } : { ...i, pointerEvents: "none" };
    return j.createElement("div", { className: f(p), style: h, key: `container-${p}` }, m.map((y, w) => {
      let { content: g, props: E } = y;
      return j.createElement(Y0, { ...E, isIn: l(E.toastId), style: { ...E.style, "--nth": w + 1, "--len": m.length }, key: `toast-${E.key}` }, g);
    }));
  }));
});
qi.displayName = "ToastContainer", qi.defaultProps = { position: "top-right", transition: G0, autoClose: 5e3, closeButton: ud, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let ni, Vt = /* @__PURE__ */ new Map(), Jn = [], X0 = 1;
function sd() {
  return "" + X0++;
}
function Z0(e) {
  return e && (tn(e.toastId) || ur(e.toastId)) ? e.toastId : sd();
}
function sr(e, t) {
  return Vt.size > 0 ? je.emit(0, e, t) : Jn.push({ content: e, options: t }), t.toastId;
}
function Kl(e, t) {
  return { ...t, type: t && t.type || e, toastId: Z0(t) };
}
function rl(e) {
  return (t, n) => sr(t, Kl(e, n));
}
function W(e, t) {
  return sr(e, Kl("default", t));
}
W.loading = (e, t) => sr(e, Kl("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), W.promise = function(e, t, n) {
  let r, { pending: l, error: o, success: i } = t;
  l && (r = tn(l) ? W.loading(l, n) : W.loading(l.render, { ...n, ...l }));
  const u = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, s = (p, m, h) => {
    if (m == null)
      return void W.dismiss(r);
    const y = { type: p, ...u, ...n, data: h }, w = tn(m) ? { render: m } : m;
    return r ? W.update(r, { ...y, ...w }) : W(w.render, { ...y, ...w }), h;
  }, f = _e(e) ? e() : e;
  return f.then((p) => s("success", i, p)).catch((p) => s("error", o, p)), f;
}, W.success = rl("success"), W.info = rl("info"), W.error = rl("error"), W.warning = rl("warning"), W.warn = W.warning, W.dark = (e, t) => sr(e, Kl("default", { theme: "dark", ...t })), W.dismiss = (e) => {
  Vt.size > 0 ? je.emit(1, e) : Jn = Jn.filter((t) => e != null && t.options.toastId !== e);
}, W.clearWaitingQueue = function(e) {
  return e === void 0 && (e = {}), je.emit(5, e);
}, W.isActive = (e) => {
  let t = !1;
  return Vt.forEach((n) => {
    n.isToastActive && n.isToastActive(e) && (t = !0);
  }), t;
}, W.update = function(e, t) {
  t === void 0 && (t = {}), setTimeout(() => {
    const n = function(r, l) {
      let { containerId: o } = l;
      const i = Vt.get(o || ni);
      return i && i.getToast(r);
    }(e, t);
    if (n) {
      const { props: r, content: l } = n, o = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: sd() };
      o.toastId !== e && (o.staleId = e);
      const i = o.render || l;
      delete o.render, sr(i, o);
    }
  }, 0);
}, W.done = (e) => {
  W.update(e, { progress: 1 });
}, W.onChange = (e) => (je.on(4, e), () => {
  je.off(4, e);
}), W.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, W.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, je.on(2, (e) => {
  ni = e.containerId || e, Vt.set(ni, e), Jn.forEach((t) => {
    je.emit(0, t.content, t.options);
  }), Jn = [];
}).on(3, (e) => {
  Vt.delete(e.containerId || e), Vt.size === 0 && je.off(0).off(1).off(5);
});
const J0 = () => /* @__PURE__ */ Yt(H0, { styles: od`*, ::before, ::after {
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
}` }), q0 = () => /* @__PURE__ */ zp(Pp, { children: [
  /* @__PURE__ */ Yt(J0, {}),
  /* @__PURE__ */ Yt(qi, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
class b0 {
  constructor(t) {
    es(this, "routes", []);
    this.routes = t.map((n) => ({
      ...n,
      match: M0(n.path)
    }));
  }
  init() {
    const t = document.createElement("div");
    document.body.appendChild(t), kl.createRoot(t).render(/* @__PURE__ */ Yt(q0, {}));
  }
  match(t) {
    const n = this.routes.find((r) => r.match(t));
    if (n)
      return new B0(n, t);
  }
  getShortcuts() {
    return this.routes.filter((t) => t.desktopShortcut).map((t) => ({
      ...t.desktopShortcut,
      route: t.path
    }));
  }
}
const e1 = (e) => {
  const t = new b0(e);
  return t.init(), window.__REACT_INJECTOR__ = t, t;
};
e1([{
  path: "/program-constructor",
  component: () => import("./index-be7070c2.js"),
  windowOptions: {
    title: "Конструктор программы",
    width: 1200,
    height: 800
  },
  desktopShortcut: {
    title: "Конструктор программы",
    icon: "fa fa-code",
    color: "#000000",
    group: "general",
    order: 1e3
  }
}]);
export {
  W as Q,
  j as R,
  Xa as T,
  zp as a,
  ls as b,
  od as c,
  gp as d,
  Va as e,
  n1 as f,
  ka as g,
  ar as h,
  Wa as i,
  Yt as j,
  r1 as k,
  nd as l,
  ep as m,
  R as r,
  au as s,
  _p as u,
  Ga as w
};
