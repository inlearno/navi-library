var qn = Object.defineProperty;
var Hn = (e, t, r) => t in e ? qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var vt = (e, t, r) => (Hn(e, typeof t != "symbol" ? t + "" : t, r), r), qt = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var w = (e, t, r) => (qt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), z = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, j = (e, t, r, n) => (qt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var wt = (e, t, r, n) => ({
  set _(s) {
    j(e, t, s, r);
  },
  get _() {
    return w(e, t, n);
  }
}), X = (e, t, r) => (qt(e, t, "access private method"), r);
import { h as Jr, j as ct, E as Vr, c as Xr, a as ar, G as Yr, b as Qn, T as $n } from "./mui-02912ce2.js";
import { g as Kn, c as Zr, r as k, R as q } from "./react-54946355.js";
import { F as Wn } from "./icons-6b7f2986.js";
var Gn = ct.Fragment;
function K(e, t, r) {
  return Jr.call(t, "css") ? ct.jsx(Vr, Xr(e, t), r) : ct.jsx(e, t, r);
}
function At(e, t, r) {
  return Jr.call(t, "css") ? ct.jsxs(Vr, Xr(e, t), r) : ct.jsxs(e, t, r);
}
var Xt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "users", n = 640, s = 512, i = [], o = "f0c0", u = "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      s,
      i,
      o,
      u
    ]
  }, e.faUsers = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = s, e.ligatures = i, e.unicode = o, e.svgPathData = u, e.aliases = i;
})(Xt);
const Jn = [{
  id: "users",
  path: "/users",
  component: () => import("./UsersList-925aa1ee.js"),
  windowOptions: {
    icon: Xt.faUsers,
    title: "Пользователи",
    width: 800
  },
  shortcut: {
    title: "Пользователи",
    icon: Xt.faUsers,
    group: "fourth",
    order: 100
  }
  // notExposeToLibrary: true,
}];
var en = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "code", n = 640, s = 512, i = [], o = "f121", u = "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      s,
      i,
      o,
      u
    ]
  }, e.faCode = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = s, e.ligatures = i, e.unicode = o, e.svgPathData = u, e.aliases = i;
})(en);
const Vn = [{
  id: "program-docs",
  path: "/program-docs",
  component: () => import("./ProgramDocsList-6c61388a.js"),
  windowOptions: {
    title: "Конструктор документов программ",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Конструктор документов программ",
    icon: en.faCode,
    color: "#ef4444",
    group: "general",
    order: 1e3
  }
}, {
  id: "program-docs-constructor",
  path: "/program-docs/constructor/:id",
  component: () => import("./ProgramConstructor-9a500ed5.js"),
  windowOptions: {
    title: "Конструктор программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-docs-draft",
  path: "/program-docs/draft",
  component: () => import("./Draft-c34d9621.js"),
  windowOptions: {
    title: "Черновик программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-constructor-copy",
  path: "/program-docs/copy/:id",
  component: () => import("./CopyProgramForm-b673a93a.js"),
  windowOptions: {
    title: "Копирование программы",
    width: 700,
    height: 500
  }
}], tn = [...Vn, ...Jn];
var rn = { exports: {} };
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
(function(e, t) {
  (function(r) {
    var n = Object.hasOwnProperty, s = Array.isArray ? Array.isArray : function(c) {
      return Object.prototype.toString.call(c) === "[object Array]";
    }, i = 10, o = typeof process == "object" && typeof process.nextTick == "function", u = typeof Symbol == "function", v = typeof Reflect == "object", _ = typeof setImmediate == "function", l = _ ? setImmediate : setTimeout, p = u ? v && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(a) {
      var c = Object.getOwnPropertyNames(a);
      return c.push.apply(c, Object.getOwnPropertySymbols(a)), c;
    } : Object.keys;
    function A() {
      this._events = {}, this._conf && y.call(this, this._conf);
    }
    function y(a) {
      a && (this._conf = a, a.delimiter && (this.delimiter = a.delimiter), a.maxListeners !== r && (this._maxListeners = a.maxListeners), a.wildcard && (this.wildcard = a.wildcard), a.newListener && (this._newListener = a.newListener), a.removeListener && (this._removeListener = a.removeListener), a.verboseMemoryLeak && (this.verboseMemoryLeak = a.verboseMemoryLeak), a.ignoreErrors && (this.ignoreErrors = a.ignoreErrors), this.wildcard && (this.listenerTree = {}));
    }
    function m(a, c) {
      var f = "(node) warning: possible EventEmitter memory leak detected. " + a + " listeners added. Use emitter.setMaxListeners() to increase limit.";
      if (this.verboseMemoryLeak && (f += " Event name: " + c + "."), typeof process < "u" && process.emitWarning) {
        var h = new Error(f);
        h.name = "MaxListenersExceededWarning", h.emitter = this, h.count = a, process.emitWarning(h);
      } else
        console.error(f), console.trace && console.trace();
    }
    var T = function(a, c, f) {
      var h = arguments.length;
      switch (h) {
        case 0:
          return [];
        case 1:
          return [a];
        case 2:
          return [a, c];
        case 3:
          return [a, c, f];
        default:
          for (var d = new Array(h); h--; )
            d[h] = arguments[h];
          return d;
      }
    };
    function b(a, c) {
      for (var f = {}, h, d = a.length, g = c ? c.length : 0, R = 0; R < d; R++)
        h = a[R], f[h] = R < g ? c[R] : r;
      return f;
    }
    function O(a, c, f) {
      this._emitter = a, this._target = c, this._listeners = {}, this._listenersCount = 0;
      var h, d;
      if ((f.on || f.off) && (h = f.on, d = f.off), c.addEventListener ? (h = c.addEventListener, d = c.removeEventListener) : c.addListener ? (h = c.addListener, d = c.removeListener) : c.on && (h = c.on, d = c.off), !h && !d)
        throw Error("target does not implement any known event API");
      if (typeof h != "function")
        throw TypeError("on method must be a function");
      if (typeof d != "function")
        throw TypeError("off method must be a function");
      this._on = h, this._off = d;
      var g = a._observers;
      g ? g.push(this) : a._observers = [this];
    }
    Object.assign(O.prototype, {
      subscribe: function(a, c, f) {
        var h = this, d = this._target, g = this._emitter, R = this._listeners, x = function() {
          var S = T.apply(null, arguments), C = {
            data: S,
            name: c,
            original: a
          };
          if (f) {
            var N = f.call(d, C);
            N !== !1 && g.emit.apply(g, [C.name].concat(S));
            return;
          }
          g.emit.apply(g, [c].concat(S));
        };
        if (R[a])
          throw Error("Event '" + a + "' is already listening");
        this._listenersCount++, g._newListener && g._removeListener && !h._onNewListener ? (this._onNewListener = function(S) {
          S === c && R[a] === null && (R[a] = x, h._on.call(d, a, x));
        }, g.on("newListener", this._onNewListener), this._onRemoveListener = function(S) {
          S === c && !g.hasListeners(S) && R[a] && (R[a] = null, h._off.call(d, a, x));
        }, R[a] = null, g.on("removeListener", this._onRemoveListener)) : (R[a] = x, h._on.call(d, a, x));
      },
      unsubscribe: function(a) {
        var c = this, f = this._listeners, h = this._emitter, d, g, R = this._off, x = this._target, S;
        if (a && typeof a != "string")
          throw TypeError("event must be a string");
        function C() {
          c._onNewListener && (h.off("newListener", c._onNewListener), h.off("removeListener", c._onRemoveListener), c._onNewListener = null, c._onRemoveListener = null);
          var N = I.call(h, c);
          h._observers.splice(N, 1);
        }
        if (a) {
          if (d = f[a], !d)
            return;
          R.call(x, a, d), delete f[a], --this._listenersCount || C();
        } else {
          for (g = p(f), S = g.length; S-- > 0; )
            a = g[S], R.call(x, a, f[a]);
          this._listeners = {}, this._listenersCount = 0, C();
        }
      }
    });
    function L(a, c, f, h) {
      var d = Object.assign({}, c);
      if (!a)
        return d;
      if (typeof a != "object")
        throw TypeError("options must be an object");
      var g = Object.keys(a), R = g.length, x, S, C;
      function N(Q) {
        throw Error('Invalid "' + x + '" option value' + (Q ? ". Reason: " + Q : ""));
      }
      for (var ee = 0; ee < R; ee++) {
        if (x = g[ee], !h && !n.call(c, x))
          throw Error('Unknown "' + x + '" option');
        S = a[x], S !== r && (C = f[x], d[x] = C ? C(S, N) : S);
      }
      return d;
    }
    function F(a, c) {
      return (typeof a != "function" || !a.hasOwnProperty("prototype")) && c("value must be a constructor"), a;
    }
    function P(a) {
      var c = "value must be type of " + a.join("|"), f = a.length, h = a[0], d = a[1];
      return f === 1 ? function(g, R) {
        if (typeof g === h)
          return g;
        R(c);
      } : f === 2 ? function(g, R) {
        var x = typeof g;
        if (x === h || x === d)
          return g;
        R(c);
      } : function(g, R) {
        for (var x = typeof g, S = f; S-- > 0; )
          if (x === a[S])
            return g;
        R(c);
      };
    }
    var M = P(["function"]), B = P(["object", "function"]);
    function G(a, c, f) {
      var h, d, g = 0, R, x = new a(function(S, C, N) {
        f = L(f, {
          timeout: 0,
          overload: !1
        }, {
          timeout: function(J, se) {
            return J *= 1, (typeof J != "number" || J < 0 || !Number.isFinite(J)) && se("timeout must be a positive number"), J;
          }
        }), h = !f.overload && typeof a.prototype.cancel == "function" && typeof N == "function";
        function ee() {
          d && (d = null), g && (clearTimeout(g), g = 0);
        }
        var Q = function(J) {
          ee(), S(J);
        }, $ = function(J) {
          ee(), C(J);
        };
        h ? c(Q, $, N) : (d = [function(J) {
          $(J || Error("canceled"));
        }], c(Q, $, function(J) {
          if (R)
            throw Error("Unable to subscribe on cancel event asynchronously");
          if (typeof J != "function")
            throw TypeError("onCancel callback must be a function");
          d.push(J);
        }), R = !0), f.timeout > 0 && (g = setTimeout(function() {
          var J = Error("timeout");
          J.code = "ETIMEDOUT", g = 0, x.cancel(J), C(J);
        }, f.timeout));
      });
      return h || (x.cancel = function(S) {
        if (d) {
          for (var C = d.length, N = 1; N < C; N++)
            d[N](S);
          d[0](S), d = null;
        }
      }), x;
    }
    function I(a) {
      var c = this._observers;
      if (!c)
        return -1;
      for (var f = c.length, h = 0; h < f; h++)
        if (c[h]._target === a)
          return h;
      return -1;
    }
    function U(a, c, f, h, d) {
      if (!f)
        return null;
      if (h === 0) {
        var g = typeof c;
        if (g === "string") {
          var R, x, S = 0, C = 0, N = this.delimiter, ee = N.length;
          if ((x = c.indexOf(N)) !== -1) {
            R = new Array(5);
            do
              R[S++] = c.slice(C, x), C = x + ee;
            while ((x = c.indexOf(N, C)) !== -1);
            R[S++] = c.slice(C), c = R, d = S;
          } else
            c = [c], d = 1;
        } else
          g === "object" ? d = c.length : (c = [c], d = 1);
      }
      var Q = null, $, J, se, Ut, Bt, nt = c[h], zt = c[h + 1], Re, oe;
      if (h === d)
        f._listeners && (typeof f._listeners == "function" ? (a && a.push(f._listeners), Q = [f]) : (a && a.push.apply(a, f._listeners), Q = [f]));
      else if (nt === "*") {
        for (Re = p(f), x = Re.length; x-- > 0; )
          $ = Re[x], $ !== "_listeners" && (oe = U(a, c, f[$], h + 1, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else if (nt === "**") {
        for (Bt = h + 1 === d || h + 2 === d && zt === "*", Bt && f._listeners && (Q = U(a, c, f, d, d)), Re = p(f), x = Re.length; x-- > 0; )
          $ = Re[x], $ !== "_listeners" && ($ === "*" || $ === "**" ? (f[$]._listeners && !Bt && (oe = U(a, c, f[$], d, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe)), oe = U(a, c, f[$], h, d)) : $ === zt ? oe = U(a, c, f[$], h + 2, d) : oe = U(a, c, f[$], h, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else
        f[nt] && (Q = U(a, c, f[nt], h + 1, d));
      if (J = f["*"], J && U(a, c, J, h + 1, d), se = f["**"], se)
        if (h < d)
          for (se._listeners && U(a, c, se, d, d), Re = p(se), x = Re.length; x-- > 0; )
            $ = Re[x], $ !== "_listeners" && ($ === zt ? U(a, c, se[$], h + 2, d) : $ === nt ? U(a, c, se[$], h + 1, d) : (Ut = {}, Ut[$] = se[$], U(a, c, { "**": Ut }, h + 1, d)));
        else
          se._listeners ? U(a, c, se, d, d) : se["*"] && se["*"]._listeners && U(a, c, se["*"], d, d);
      return Q;
    }
    function le(a, c, f) {
      var h = 0, d = 0, g, R = this.delimiter, x = R.length, S;
      if (typeof a == "string")
        if ((g = a.indexOf(R)) !== -1) {
          S = new Array(5);
          do
            S[h++] = a.slice(d, g), d = g + x;
          while ((g = a.indexOf(R, d)) !== -1);
          S[h++] = a.slice(d);
        } else
          S = [a], h = 1;
      else
        S = a, h = a.length;
      if (h > 1) {
        for (g = 0; g + 1 < h; g++)
          if (S[g] === "**" && S[g + 1] === "**")
            return;
      }
      var C = this.listenerTree, N;
      for (g = 0; g < h; g++)
        if (N = S[g], C = C[N] || (C[N] = {}), g === h - 1)
          return C._listeners ? (typeof C._listeners == "function" && (C._listeners = [C._listeners]), f ? C._listeners.unshift(c) : C._listeners.push(c), !C._listeners.warned && this._maxListeners > 0 && C._listeners.length > this._maxListeners && (C._listeners.warned = !0, m.call(this, C._listeners.length, N))) : C._listeners = c, !0;
      return !0;
    }
    function ge(a, c, f, h) {
      for (var d = p(a), g = d.length, R, x, S, C = a._listeners, N; g-- > 0; )
        x = d[g], R = a[x], x === "_listeners" ? S = f : S = f ? f.concat(x) : [x], N = h || typeof x == "symbol", C && c.push(N ? S : S.join(this.delimiter)), typeof R == "object" && ge.call(this, R, c, S, N);
      return c;
    }
    function te(a) {
      for (var c = p(a), f = c.length, h, d, g; f-- > 0; )
        d = c[f], h = a[d], h && (g = !0, d !== "_listeners" && !te(h) && delete a[d]);
      return g;
    }
    function fe(a, c, f) {
      this.emitter = a, this.event = c, this.listener = f;
    }
    fe.prototype.off = function() {
      return this.emitter.off(this.event, this.listener), this;
    };
    function re(a, c, f) {
      if (f === !0)
        d = !0;
      else if (f === !1)
        h = !0;
      else {
        if (!f || typeof f != "object")
          throw TypeError("options should be an object or true");
        var h = f.async, d = f.promisify, g = f.nextTick, R = f.objectify;
      }
      if (h || g || d) {
        var x = c, S = c._origin || c;
        if (g && !o)
          throw Error("process.nextTick is not supported");
        d === r && (d = c.constructor.name === "AsyncFunction"), c = function() {
          var C = arguments, N = this, ee = this.event;
          return d ? g ? Promise.resolve() : new Promise(function(Q) {
            l(Q);
          }).then(function() {
            return N.event = ee, x.apply(N, C);
          }) : (g ? process.nextTick : l)(function() {
            N.event = ee, x.apply(N, C);
          });
        }, c._async = !0, c._origin = S;
      }
      return [c, R ? new fe(this, a, c) : this];
    }
    function D(a) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, y.call(this, a);
    }
    D.EventEmitter2 = D, D.prototype.listenTo = function(a, c, f) {
      if (typeof a != "object")
        throw TypeError("target musts be an object");
      var h = this;
      f = L(f, {
        on: r,
        off: r,
        reducers: r
      }, {
        on: M,
        off: M,
        reducers: B
      });
      function d(g) {
        if (typeof g != "object")
          throw TypeError("events must be an object");
        var R = f.reducers, x = I.call(h, a), S;
        x === -1 ? S = new O(h, a, f) : S = h._observers[x];
        for (var C = p(g), N = C.length, ee, Q = typeof R == "function", $ = 0; $ < N; $++)
          ee = C[$], S.subscribe(
            ee,
            g[ee] || ee,
            Q ? R : R && R[ee]
          );
      }
      return s(c) ? d(b(c)) : d(typeof c == "string" ? b(c.split(/\s+/)) : c), this;
    }, D.prototype.stopListeningTo = function(a, c) {
      var f = this._observers;
      if (!f)
        return !1;
      var h = f.length, d, g = !1;
      if (a && typeof a != "object")
        throw TypeError("target should be an object");
      for (; h-- > 0; )
        d = f[h], (!a || d._target === a) && (d.unsubscribe(c), g = !0);
      return g;
    }, D.prototype.delimiter = ".", D.prototype.setMaxListeners = function(a) {
      a !== r && (this._maxListeners = a, this._conf || (this._conf = {}), this._conf.maxListeners = a);
    }, D.prototype.getMaxListeners = function() {
      return this._maxListeners;
    }, D.prototype.event = "", D.prototype.once = function(a, c, f) {
      return this._once(a, c, !1, f);
    }, D.prototype.prependOnceListener = function(a, c, f) {
      return this._once(a, c, !0, f);
    }, D.prototype._once = function(a, c, f, h) {
      return this._many(a, 1, c, f, h);
    }, D.prototype.many = function(a, c, f, h) {
      return this._many(a, c, f, !1, h);
    }, D.prototype.prependMany = function(a, c, f, h) {
      return this._many(a, c, f, !0, h);
    }, D.prototype._many = function(a, c, f, h, d) {
      var g = this;
      if (typeof f != "function")
        throw new Error("many only accepts instances of Function");
      function R() {
        return --c === 0 && g.off(a, R), f.apply(this, arguments);
      }
      return R._origin = f, this._on(a, R, h, d);
    }, D.prototype.emit = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || A.call(this);
      var a = arguments[0], c, f = this.wildcard, h, d, g, R, x;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return !1;
      if (f && (c = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (d = a.length, u) {
          for (g = 0; g < d; g++)
            if (typeof a[g] == "symbol") {
              x = !0;
              break;
            }
        }
        x || (a = a.join(this.delimiter));
      }
      var S = arguments.length, C;
      if (this._all && this._all.length)
        for (C = this._all.slice(), g = 0, d = C.length; g < d; g++)
          switch (this.event = a, S) {
            case 1:
              C[g].call(this, a);
              break;
            case 2:
              C[g].call(this, a, arguments[1]);
              break;
            case 3:
              C[g].call(this, a, arguments[1], arguments[2]);
              break;
            default:
              C[g].apply(this, arguments);
          }
      if (f)
        C = [], U.call(this, C, c, this.listenerTree, 0, d);
      else if (C = this._events[a], typeof C == "function") {
        switch (this.event = a, S) {
          case 1:
            C.call(this);
            break;
          case 2:
            C.call(this, arguments[1]);
            break;
          case 3:
            C.call(this, arguments[1], arguments[2]);
            break;
          default:
            for (h = new Array(S - 1), R = 1; R < S; R++)
              h[R - 1] = arguments[R];
            C.apply(this, h);
        }
        return !0;
      } else
        C && (C = C.slice());
      if (C && C.length) {
        if (S > 3)
          for (h = new Array(S - 1), R = 1; R < S; R++)
            h[R - 1] = arguments[R];
        for (g = 0, d = C.length; g < d; g++)
          switch (this.event = a, S) {
            case 1:
              C[g].call(this);
              break;
            case 2:
              C[g].call(this, arguments[1]);
              break;
            case 3:
              C[g].call(this, arguments[1], arguments[2]);
              break;
            default:
              C[g].apply(this, h);
          }
        return !0;
      } else if (!this.ignoreErrors && !this._all && a === "error")
        throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all;
    }, D.prototype.emitAsync = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || A.call(this);
      var a = arguments[0], c = this.wildcard, f, h, d, g, R, x;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return Promise.resolve([!1]);
      if (c && (f = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (g = a.length, u) {
          for (R = 0; R < g; R++)
            if (typeof a[R] == "symbol") {
              h = !0;
              break;
            }
        }
        h || (a = a.join(this.delimiter));
      }
      var S = [], C = arguments.length, N;
      if (this._all)
        for (R = 0, g = this._all.length; R < g; R++)
          switch (this.event = a, C) {
            case 1:
              S.push(this._all[R].call(this, a));
              break;
            case 2:
              S.push(this._all[R].call(this, a, arguments[1]));
              break;
            case 3:
              S.push(this._all[R].call(this, a, arguments[1], arguments[2]));
              break;
            default:
              S.push(this._all[R].apply(this, arguments));
          }
      if (c ? (N = [], U.call(this, N, f, this.listenerTree, 0)) : N = this._events[a], typeof N == "function")
        switch (this.event = a, C) {
          case 1:
            S.push(N.call(this));
            break;
          case 2:
            S.push(N.call(this, arguments[1]));
            break;
          case 3:
            S.push(N.call(this, arguments[1], arguments[2]));
            break;
          default:
            for (d = new Array(C - 1), x = 1; x < C; x++)
              d[x - 1] = arguments[x];
            S.push(N.apply(this, d));
        }
      else if (N && N.length) {
        if (N = N.slice(), C > 3)
          for (d = new Array(C - 1), x = 1; x < C; x++)
            d[x - 1] = arguments[x];
        for (R = 0, g = N.length; R < g; R++)
          switch (this.event = a, C) {
            case 1:
              S.push(N[R].call(this));
              break;
            case 2:
              S.push(N[R].call(this, arguments[1]));
              break;
            case 3:
              S.push(N[R].call(this, arguments[1], arguments[2]));
              break;
            default:
              S.push(N[R].apply(this, d));
          }
      } else if (!this.ignoreErrors && !this._all && a === "error")
        return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
      return Promise.all(S);
    }, D.prototype.on = function(a, c, f) {
      return this._on(a, c, !1, f);
    }, D.prototype.prependListener = function(a, c, f) {
      return this._on(a, c, !0, f);
    }, D.prototype.onAny = function(a) {
      return this._onAny(a, !1);
    }, D.prototype.prependAny = function(a) {
      return this._onAny(a, !0);
    }, D.prototype.addListener = D.prototype.on, D.prototype._onAny = function(a, c) {
      if (typeof a != "function")
        throw new Error("onAny only accepts instances of Function");
      return this._all || (this._all = []), c ? this._all.unshift(a) : this._all.push(a), this;
    }, D.prototype._on = function(a, c, f, h) {
      if (typeof a == "function")
        return this._onAny(a, c), this;
      if (typeof c != "function")
        throw new Error("on only accepts instances of Function");
      this._events || A.call(this);
      var d = this, g;
      return h !== r && (g = re.call(this, a, c, h), c = g[0], d = g[1]), this._newListener && this.emit("newListener", a, c), this.wildcard ? (le.call(this, a, c, f), d) : (this._events[a] ? (typeof this._events[a] == "function" && (this._events[a] = [this._events[a]]), f ? this._events[a].unshift(c) : this._events[a].push(c), !this._events[a].warned && this._maxListeners > 0 && this._events[a].length > this._maxListeners && (this._events[a].warned = !0, m.call(this, this._events[a].length, a))) : this._events[a] = c, d);
    }, D.prototype.off = function(a, c) {
      if (typeof c != "function")
        throw new Error("removeListener only takes instances of Function");
      var f, h = [];
      if (this.wildcard) {
        var d = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        if (h = U.call(this, null, d, this.listenerTree, 0), !h)
          return this;
      } else {
        if (!this._events[a])
          return this;
        f = this._events[a], h.push({ _listeners: f });
      }
      for (var g = 0; g < h.length; g++) {
        var R = h[g];
        if (f = R._listeners, s(f)) {
          for (var x = -1, S = 0, C = f.length; S < C; S++)
            if (f[S] === c || f[S].listener && f[S].listener === c || f[S]._origin && f[S]._origin === c) {
              x = S;
              break;
            }
          if (x < 0)
            continue;
          return this.wildcard ? R._listeners.splice(x, 1) : this._events[a].splice(x, 1), f.length === 0 && (this.wildcard ? delete R._listeners : delete this._events[a]), this._removeListener && this.emit("removeListener", a, c), this;
        } else
          (f === c || f.listener && f.listener === c || f._origin && f._origin === c) && (this.wildcard ? delete R._listeners : delete this._events[a], this._removeListener && this.emit("removeListener", a, c));
      }
      return this.listenerTree && te(this.listenerTree), this;
    }, D.prototype.offAny = function(a) {
      var c = 0, f = 0, h;
      if (a && this._all && this._all.length > 0) {
        for (h = this._all, c = 0, f = h.length; c < f; c++)
          if (a === h[c])
            return h.splice(c, 1), this._removeListener && this.emit("removeListenerAny", a), this;
      } else {
        if (h = this._all, this._removeListener)
          for (c = 0, f = h.length; c < f; c++)
            this.emit("removeListenerAny", h[c]);
        this._all = [];
      }
      return this;
    }, D.prototype.removeListener = D.prototype.off, D.prototype.removeAllListeners = function(a) {
      if (a === r)
        return !this._events || A.call(this), this;
      if (this.wildcard) {
        var c = U.call(this, null, a, this.listenerTree, 0), f, h;
        if (!c)
          return this;
        for (h = 0; h < c.length; h++)
          f = c[h], f._listeners = null;
        this.listenerTree && te(this.listenerTree);
      } else
        this._events && (this._events[a] = null);
      return this;
    }, D.prototype.listeners = function(a) {
      var c = this._events, f, h, d, g, R;
      if (a === r) {
        if (this.wildcard)
          throw Error("event name required for wildcard emitter");
        if (!c)
          return [];
        for (f = p(c), g = f.length, d = []; g-- > 0; )
          h = c[f[g]], typeof h == "function" ? d.push(h) : d.push.apply(d, h);
        return d;
      } else {
        if (this.wildcard) {
          if (R = this.listenerTree, !R)
            return [];
          var x = [], S = typeof a == "string" ? a.split(this.delimiter) : a.slice();
          return U.call(this, x, S, R, 0), x;
        }
        return c ? (h = c[a], h ? typeof h == "function" ? [h] : h : []) : [];
      }
    }, D.prototype.eventNames = function(a) {
      var c = this._events;
      return this.wildcard ? ge.call(this, this.listenerTree, [], null, a) : c ? p(c) : [];
    }, D.prototype.listenerCount = function(a) {
      return this.listeners(a).length;
    }, D.prototype.hasListeners = function(a) {
      if (this.wildcard) {
        var c = [], f = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        return U.call(this, c, f, this.listenerTree, 0), c.length > 0;
      }
      var h = this._events, d = this._all;
      return !!(d && d.length || h && (a === r ? p(h).length : h[a]));
    }, D.prototype.listenersAny = function() {
      return this._all ? this._all : [];
    }, D.prototype.waitFor = function(a, c) {
      var f = this, h = typeof c;
      return h === "number" ? c = { timeout: c } : h === "function" && (c = { filter: c }), c = L(c, {
        timeout: 0,
        filter: r,
        handleError: !1,
        Promise,
        overload: !1
      }, {
        filter: M,
        Promise: F
      }), G(c.Promise, function(d, g, R) {
        function x() {
          var S = c.filter;
          if (!(S && !S.apply(f, arguments)))
            if (f.off(a, x), c.handleError) {
              var C = arguments[0];
              C ? g(C) : d(T.apply(null, arguments).slice(1));
            } else
              d(T.apply(null, arguments));
        }
        R(function() {
          f.off(a, x);
        }), f._on(a, x, !1);
      }, {
        timeout: c.timeout,
        overload: c.overload
      });
    };
    function ne(a, c, f) {
      f = L(f, {
        Promise,
        timeout: 0,
        overload: !1
      }, {
        Promise: F
      });
      var h = f.Promise;
      return G(h, function(d, g, R) {
        var x;
        if (typeof a.addEventListener == "function") {
          x = function() {
            d(T.apply(null, arguments));
          }, R(function() {
            a.removeEventListener(c, x);
          }), a.addEventListener(
            c,
            x,
            { once: !0 }
          );
          return;
        }
        var S = function() {
          C && a.removeListener("error", C), d(T.apply(null, arguments));
        }, C;
        c !== "error" && (C = function(N) {
          a.removeListener(c, S), g(N);
        }, a.once("error", C)), R(function() {
          C && a.removeListener("error", C), a.removeListener(c, S);
        }), a.once(c, S);
      }, {
        timeout: f.timeout,
        overload: f.overload
      });
    }
    var ce = D.prototype;
    Object.defineProperties(D, {
      defaultMaxListeners: {
        get: function() {
          return ce._maxListeners;
        },
        set: function(a) {
          if (typeof a != "number" || a < 0 || Number.isNaN(a))
            throw TypeError("n must be a non-negative number");
          ce._maxListeners = a;
        },
        enumerable: !0
      },
      once: {
        value: ne,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperties(ce, {
      _maxListeners: {
        value: i,
        writable: !0,
        configurable: !0
      },
      _observers: { value: null, writable: !0, configurable: !0 }
    }), typeof r == "function" && r.amd ? r(function() {
      return D;
    }) : e.exports = D;
  })();
})(rn);
var Xn = rn.exports;
const Yn = /* @__PURE__ */ Kn(Xn);
var Yt = {}, vr = Zr;
Yt.createRoot = vr.createRoot, Yt.hydrateRoot = vr.hydrateRoot;
function nn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = nn(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function je() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = nn(e)) && (n && (n += " "), n += t);
  return n;
}
const ot = (e) => typeof e == "number" && !isNaN(e), qe = (e) => typeof e == "string", ae = (e) => typeof e == "function", Et = (e) => qe(e) || ae(e) ? e : null, Ht = (e) => k.isValidElement(e) || qe(e) || ae(e) || ot(e);
function Zn(e, t, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: s } = e;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = n + "px", s.transition = `all ${r}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t, r);
    });
  });
}
function Pt(e) {
  let { enter: t, exit: r, appendPosition: n = !1, collapse: s = !0, collapseDuration: i = 300 } = e;
  return function(o) {
    let { children: u, position: v, preventExitTransition: _, done: l, nodeRef: p, isIn: A } = o;
    const y = n ? `${t}--${v}` : t, m = n ? `${r}--${v}` : r, T = k.useRef(0);
    return k.useLayoutEffect(() => {
      const b = p.current, O = y.split(" "), L = (F) => {
        F.target === p.current && (b.dispatchEvent(new Event("d")), b.removeEventListener("animationend", L), b.removeEventListener("animationcancel", L), T.current === 0 && F.type !== "animationcancel" && b.classList.remove(...O));
      };
      b.classList.add(...O), b.addEventListener("animationend", L), b.addEventListener("animationcancel", L);
    }, []), k.useEffect(() => {
      const b = p.current, O = () => {
        b.removeEventListener("animationend", O), s ? Zn(b, l, i) : l();
      };
      A || (_ ? O() : (T.current = 1, b.className += ` ${m}`, b.addEventListener("animationend", O)));
    }, [A]), q.createElement(q.Fragment, null, u);
  };
}
function wr(e, t) {
  return e != null ? { content: e.content, containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, status: t } : {};
}
const me = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(e, t) {
  return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
}, off(e, t) {
  if (t) {
    const r = this.list.get(e).filter((n) => n !== t);
    return this.list.set(e, r), this;
  }
  return this.list.delete(e), this;
}, cancelEmit(e) {
  const t = this.emitQueue.get(e);
  return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
}, emit(e) {
  this.list.has(e) && this.list.get(e).forEach((t) => {
    const r = setTimeout(() => {
      t(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(r);
  });
} }, gt = (e) => {
  let { theme: t, type: r, ...n } = e;
  return q.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...n });
}, Qt = { info: function(e) {
  return q.createElement(gt, { ...e }, q.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return q.createElement(gt, { ...e }, q.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return q.createElement(gt, { ...e }, q.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return q.createElement(gt, { ...e }, q.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return q.createElement("div", { className: "Toastify__spinner" });
} };
function es(e) {
  const [, t] = k.useReducer((y) => y + 1, 0), [r, n] = k.useState([]), s = k.useRef(null), i = k.useRef(/* @__PURE__ */ new Map()).current, o = (y) => r.indexOf(y) !== -1, u = k.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: o, getToast: (y) => i.get(y) }).current;
  function v(y) {
    let { containerId: m } = y;
    const { limit: T } = u.props;
    !T || m && u.containerId !== m || (u.count -= u.queue.length, u.queue = []);
  }
  function _(y) {
    n((m) => y == null ? [] : m.filter((T) => T !== y));
  }
  function l() {
    const { toastContent: y, toastProps: m, staleId: T } = u.queue.shift();
    A(y, m, T);
  }
  function p(y, m) {
    let { delay: T, staleId: b, ...O } = m;
    if (!Ht(y) || function(te) {
      return !s.current || u.props.enableMultiContainer && te.containerId !== u.props.containerId || i.has(te.toastId) && te.updateId == null;
    }(O))
      return;
    const { toastId: L, updateId: F, data: P } = O, { props: M } = u, B = () => _(L), G = F == null;
    G && u.count++;
    const I = { ...M, style: M.toastStyle, key: u.toastKey++, ...Object.fromEntries(Object.entries(O).filter((te) => {
      let [fe, re] = te;
      return re != null;
    })), toastId: L, updateId: F, data: P, closeToast: B, isIn: !1, className: Et(O.className || M.toastClassName), bodyClassName: Et(O.bodyClassName || M.bodyClassName), progressClassName: Et(O.progressClassName || M.progressClassName), autoClose: !O.isLoading && (U = O.autoClose, le = M.autoClose, U === !1 || ot(U) && U > 0 ? U : le), deleteToast() {
      const te = wr(i.get(L), "removed");
      i.delete(L), me.emit(4, te);
      const fe = u.queue.length;
      if (u.count = L == null ? u.count - u.displayedToast : u.count - 1, u.count < 0 && (u.count = 0), fe > 0) {
        const re = L == null ? u.props.limit : 1;
        if (fe === 1 || re === 1)
          u.displayedToast++, l();
        else {
          const D = re > fe ? fe : re;
          u.displayedToast = D;
          for (let ne = 0; ne < D; ne++)
            l();
        }
      } else
        t();
    } };
    var U, le;
    I.iconOut = function(te) {
      let { theme: fe, type: re, isLoading: D, icon: ne } = te, ce = null;
      const a = { theme: fe, type: re };
      return ne === !1 || (ae(ne) ? ce = ne(a) : k.isValidElement(ne) ? ce = k.cloneElement(ne, a) : qe(ne) || ot(ne) ? ce = ne : D ? ce = Qt.spinner() : ((c) => c in Qt)(re) && (ce = Qt[re](a))), ce;
    }(I), ae(O.onOpen) && (I.onOpen = O.onOpen), ae(O.onClose) && (I.onClose = O.onClose), I.closeButton = M.closeButton, O.closeButton === !1 || Ht(O.closeButton) ? I.closeButton = O.closeButton : O.closeButton === !0 && (I.closeButton = !Ht(M.closeButton) || M.closeButton);
    let ge = y;
    k.isValidElement(y) && !qe(y.type) ? ge = k.cloneElement(y, { closeToast: B, toastProps: I, data: P }) : ae(y) && (ge = y({ closeToast: B, toastProps: I, data: P })), M.limit && M.limit > 0 && u.count > M.limit && G ? u.queue.push({ toastContent: ge, toastProps: I, staleId: b }) : ot(T) ? setTimeout(() => {
      A(ge, I, b);
    }, T) : A(ge, I, b);
  }
  function A(y, m, T) {
    const { toastId: b } = m;
    T && i.delete(T);
    const O = { content: y, props: m };
    i.set(b, O), n((L) => [...L, b].filter((F) => F !== T)), me.emit(4, wr(O, O.props.updateId == null ? "added" : "updated"));
  }
  return k.useEffect(() => (u.containerId = e.containerId, me.cancelEmit(3).on(0, p).on(1, (y) => s.current && _(y)).on(5, v).emit(2, u), () => {
    i.clear(), me.emit(3, u);
  }), []), k.useEffect(() => {
    u.props = e, u.isToastActive = o, u.displayedToast = r.length;
  }), { getToastToRender: function(y) {
    const m = /* @__PURE__ */ new Map(), T = Array.from(i.values());
    return e.newestOnTop && T.reverse(), T.forEach((b) => {
      const { position: O } = b.props;
      m.has(O) || m.set(O, []), m.get(O).push(b);
    }), Array.from(m, (b) => y(b[0], b[1]));
  }, containerRef: s, isToastActive: o };
}
function gr(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function br(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function ts(e) {
  const [t, r] = k.useState(!1), [n, s] = k.useState(!1), i = k.useRef(null), o = k.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, u = k.useRef(e), { autoClose: v, pauseOnHover: _, closeToast: l, onClick: p, closeOnClick: A } = e;
  function y(P) {
    if (e.draggable) {
      P.nativeEvent.type === "touchstart" && P.nativeEvent.preventDefault(), o.didMove = !1, document.addEventListener("mousemove", O), document.addEventListener("mouseup", L), document.addEventListener("touchmove", O), document.addEventListener("touchend", L);
      const M = i.current;
      o.canCloseOnClick = !0, o.canDrag = !0, o.boundingRect = M.getBoundingClientRect(), M.style.transition = "", o.x = gr(P.nativeEvent), o.y = br(P.nativeEvent), e.draggableDirection === "x" ? (o.start = o.x, o.removalDistance = M.offsetWidth * (e.draggablePercent / 100)) : (o.start = o.y, o.removalDistance = M.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }
  function m(P) {
    if (o.boundingRect) {
      const { top: M, bottom: B, left: G, right: I } = o.boundingRect;
      P.nativeEvent.type !== "touchend" && e.pauseOnHover && o.x >= G && o.x <= I && o.y >= M && o.y <= B ? b() : T();
    }
  }
  function T() {
    r(!0);
  }
  function b() {
    r(!1);
  }
  function O(P) {
    const M = i.current;
    o.canDrag && M && (o.didMove = !0, t && b(), o.x = gr(P), o.y = br(P), o.delta = e.draggableDirection === "x" ? o.x - o.start : o.y - o.start, o.start !== o.x && (o.canCloseOnClick = !1), M.style.transform = `translate${e.draggableDirection}(${o.delta}px)`, M.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
  }
  function L() {
    document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", L), document.removeEventListener("touchmove", O), document.removeEventListener("touchend", L);
    const P = i.current;
    if (o.canDrag && o.didMove && P) {
      if (o.canDrag = !1, Math.abs(o.delta) > o.removalDistance)
        return s(!0), void e.closeToast();
      P.style.transition = "transform 0.2s, opacity 0.2s", P.style.transform = `translate${e.draggableDirection}(0)`, P.style.opacity = "1";
    }
  }
  k.useEffect(() => {
    u.current = e;
  }), k.useEffect(() => (i.current && i.current.addEventListener("d", T, { once: !0 }), ae(e.onOpen) && e.onOpen(k.isValidElement(e.children) && e.children.props), () => {
    const P = u.current;
    ae(P.onClose) && P.onClose(k.isValidElement(P.children) && P.children.props);
  }), []), k.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || b(), window.addEventListener("focus", T), window.addEventListener("blur", b)), () => {
    e.pauseOnFocusLoss && (window.removeEventListener("focus", T), window.removeEventListener("blur", b));
  }), [e.pauseOnFocusLoss]);
  const F = { onMouseDown: y, onTouchStart: y, onMouseUp: m, onTouchEnd: m };
  return v && _ && (F.onMouseEnter = b, F.onMouseLeave = T), A && (F.onClick = (P) => {
    p && p(P), o.canCloseOnClick && l();
  }), { playToast: T, pauseToast: b, isRunning: t, preventExitTransition: n, toastRef: i, eventHandlers: F };
}
function sn(e) {
  let { closeToast: t, theme: r, ariaLabel: n = "close" } = e;
  return q.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (s) => {
    s.stopPropagation(), t(s);
  }, "aria-label": n }, q.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, q.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function rs(e) {
  let { delay: t, isRunning: r, closeToast: n, type: s = "default", hide: i, className: o, style: u, controlledProgress: v, progress: _, rtl: l, isIn: p, theme: A } = e;
  const y = i || v && _ === 0, m = { ...u, animationDuration: `${t}ms`, animationPlayState: r ? "running" : "paused", opacity: y ? 0 : 1 };
  v && (m.transform = `scaleX(${_})`);
  const T = je("Toastify__progress-bar", v ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${A}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": l }), b = ae(o) ? o({ rtl: l, type: s, defaultClassName: T }) : je(T, o);
  return q.createElement("div", { role: "progressbar", "aria-hidden": y ? "true" : "false", "aria-label": "notification timer", className: b, style: m, [v && _ >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: v && _ < 1 ? null : () => {
    p && n();
  } });
}
const ns = (e) => {
  const { isRunning: t, preventExitTransition: r, toastRef: n, eventHandlers: s } = ts(e), { closeButton: i, children: o, autoClose: u, onClick: v, type: _, hideProgressBar: l, closeToast: p, transition: A, position: y, className: m, style: T, bodyClassName: b, bodyStyle: O, progressClassName: L, progressStyle: F, updateId: P, role: M, progress: B, rtl: G, toastId: I, deleteToast: U, isIn: le, isLoading: ge, iconOut: te, closeOnClick: fe, theme: re } = e, D = je("Toastify__toast", `Toastify__toast-theme--${re}`, `Toastify__toast--${_}`, { "Toastify__toast--rtl": G }, { "Toastify__toast--close-on-click": fe }), ne = ae(m) ? m({ rtl: G, position: y, type: _, defaultClassName: D }) : je(D, m), ce = !!B || !u, a = { closeToast: p, type: _, theme: re };
  let c = null;
  return i === !1 || (c = ae(i) ? i(a) : k.isValidElement(i) ? k.cloneElement(i, a) : sn(a)), q.createElement(A, { isIn: le, done: U, position: y, preventExitTransition: r, nodeRef: n }, q.createElement("div", { id: I, onClick: v, className: ne, ...s, style: T, ref: n }, q.createElement("div", { ...le && { role: M }, className: ae(b) ? b({ type: _ }) : je("Toastify__toast-body", b), style: O }, te != null && q.createElement("div", { className: je("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !ge }) }, te), q.createElement("div", null, o)), c, q.createElement(rs, { ...P && !ce ? { key: `pb-${P}` } : {}, rtl: G, theme: re, delay: u, isRunning: t, isIn: le, closeToast: p, hide: l, type: _, style: F, className: L, controlledProgress: ce, progress: B || 0 })));
}, Lt = function(e, t) {
  return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, ss = Pt(Lt("bounce", !0));
Pt(Lt("slide", !0));
Pt(Lt("zoom"));
Pt(Lt("flip"));
const Zt = k.forwardRef((e, t) => {
  const { getToastToRender: r, containerRef: n, isToastActive: s } = es(e), { className: i, style: o, rtl: u, containerId: v } = e;
  function _(l) {
    const p = je("Toastify__toast-container", `Toastify__toast-container--${l}`, { "Toastify__toast-container--rtl": u });
    return ae(i) ? i({ position: l, rtl: u, defaultClassName: p }) : je(p, Et(i));
  }
  return k.useEffect(() => {
    t && (t.current = n.current);
  }, []), q.createElement("div", { ref: n, className: "Toastify", id: v }, r((l, p) => {
    const A = p.length ? { ...o } : { ...o, pointerEvents: "none" };
    return q.createElement("div", { className: _(l), style: A, key: `container-${l}` }, p.map((y, m) => {
      let { content: T, props: b } = y;
      return q.createElement(ns, { ...b, isIn: s(b.toastId), style: { ...b.style, "--nth": m + 1, "--len": p.length }, key: `toast-${b.key}` }, T);
    }));
  }));
});
Zt.displayName = "ToastContainer", Zt.defaultProps = { position: "top-right", transition: ss, autoClose: 5e3, closeButton: sn, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let $t, Ie = /* @__PURE__ */ new Map(), it = [], is = 1;
function on() {
  return "" + is++;
}
function os(e) {
  return e && (qe(e.toastId) || ot(e.toastId)) ? e.toastId : on();
}
function at(e, t) {
  return Ie.size > 0 ? me.emit(0, e, t) : it.push({ content: e, options: t }), t.toastId;
}
function St(e, t) {
  return { ...t, type: t && t.type || e, toastId: os(t) };
}
function bt(e) {
  return (t, r) => at(t, St(e, r));
}
function W(e, t) {
  return at(e, St("default", t));
}
W.loading = (e, t) => at(e, St("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), W.promise = function(e, t, r) {
  let n, { pending: s, error: i, success: o } = t;
  s && (n = qe(s) ? W.loading(s, r) : W.loading(s.render, { ...r, ...s }));
  const u = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, v = (l, p, A) => {
    if (p == null)
      return void W.dismiss(n);
    const y = { type: l, ...u, ...r, data: A }, m = qe(p) ? { render: p } : p;
    return n ? W.update(n, { ...y, ...m }) : W(m.render, { ...y, ...m }), A;
  }, _ = ae(e) ? e() : e;
  return _.then((l) => v("success", o, l)).catch((l) => v("error", i, l)), _;
}, W.success = bt("success"), W.info = bt("info"), W.error = bt("error"), W.warning = bt("warning"), W.warn = W.warning, W.dark = (e, t) => at(e, St("default", { theme: "dark", ...t })), W.dismiss = (e) => {
  Ie.size > 0 ? me.emit(1, e) : it = it.filter((t) => e != null && t.options.toastId !== e);
}, W.clearWaitingQueue = function(e) {
  return e === void 0 && (e = {}), me.emit(5, e);
}, W.isActive = (e) => {
  let t = !1;
  return Ie.forEach((r) => {
    r.isToastActive && r.isToastActive(e) && (t = !0);
  }), t;
}, W.update = function(e, t) {
  t === void 0 && (t = {}), setTimeout(() => {
    const r = function(n, s) {
      let { containerId: i } = s;
      const o = Ie.get(i || $t);
      return o && o.getToast(n);
    }(e, t);
    if (r) {
      const { props: n, content: s } = r, i = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: on() };
      i.toastId !== e && (i.staleId = e);
      const o = i.render || s;
      delete i.render, at(o, i);
    }
  }, 0);
}, W.done = (e) => {
  W.update(e, { progress: 1 });
}, W.onChange = (e) => (me.on(4, e), () => {
  me.off(4, e);
}), W.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, W.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, me.on(2, (e) => {
  $t = e.containerId || e, Ie.set($t, e), it.forEach((t) => {
    me.emit(0, t.content, t.options);
  }), it = [];
}).on(3, (e) => {
  Ie.delete(e.containerId || e), Ie.size === 0 && me.off(0).off(1).off(5);
});
const as = () => /* @__PURE__ */ K(Yr, { styles: ar`*, ::before, ::after {
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
}` }), cs = () => /* @__PURE__ */ At(Gn, { children: [
  /* @__PURE__ */ K(as, {}),
  /* @__PURE__ */ K(Zt, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
var Nt = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Ft = typeof window > "u" || "Deno" in window;
function ve() {
}
function us(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ls(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function fs(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Er(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: u
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== cr(o, t.options))
        return !1;
    } else if (!lt(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const v = t.isActive();
    if (r === "active" && !v || r === "inactive" && v)
      return !1;
  }
  return !(typeof u == "boolean" && t.isStale() !== u || typeof s < "u" && s !== t.state.fetchStatus || i && !i(t));
}
function _r(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (ut(t.options.mutationKey) !== ut(i))
        return !1;
    } else if (!lt(t.options.mutationKey, i))
      return !1;
  }
  return !(n && t.state.status !== n || s && !s(t));
}
function cr(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ut)(e);
}
function ut(e) {
  return JSON.stringify(
    e,
    (t, r) => er(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function lt(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !lt(e[r], t[r])) : !1;
}
function an(e, t) {
  if (e === t)
    return e;
  const r = Tr(e) && Tr(t);
  if (r || er(e) && er(t)) {
    const n = r ? e.length : Object.keys(e).length, s = r ? t : Object.keys(t), i = s.length, o = r ? [] : {};
    let u = 0;
    for (let v = 0; v < i; v++) {
      const _ = r ? v : s[v];
      o[_] = an(e[_], t[_]), o[_] === e[_] && u++;
    }
    return n === i && u === n ? e : o;
  }
  return t;
}
function Co(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Tr(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function er(e) {
  if (!Or(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!Or(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Or(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function cn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Rr(e) {
  cn(0).then(e);
}
function hs(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? an(e, t) : t;
}
function xo(e) {
  return e;
}
function ds(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function ps(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var ke, Pe, Qe, zr, ms = (zr = class extends Nt {
  constructor() {
    super();
    z(this, ke, void 0);
    z(this, Pe, void 0);
    z(this, Qe, void 0);
    j(this, Qe, (t) => {
      if (!Ft && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    w(this, Pe) || this.setEventListener(w(this, Qe));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = w(this, Pe)) == null || t.call(this), j(this, Pe, void 0));
  }
  setEventListener(t) {
    var r;
    j(this, Qe, t), (r = w(this, Pe)) == null || r.call(this), j(this, Pe, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    w(this, ke) !== t && (j(this, ke, t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    var t;
    return typeof w(this, ke) == "boolean" ? w(this, ke) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, ke = new WeakMap(), Pe = new WeakMap(), Qe = new WeakMap(), zr), tr = new ms(), $e, Le, Ke, qr, ys = (qr = class extends Nt {
  constructor() {
    super();
    z(this, $e, !0);
    z(this, Le, void 0);
    z(this, Ke, void 0);
    j(this, Ke, (t) => {
      if (!Ft && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    w(this, Le) || this.setEventListener(w(this, Ke));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = w(this, Le)) == null || t.call(this), j(this, Le, void 0));
  }
  setEventListener(t) {
    var r;
    j(this, Ke, t), (r = w(this, Le)) == null || r.call(this), j(this, Le, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    w(this, $e) !== t && (j(this, $e, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return w(this, $e);
  }
}, $e = new WeakMap(), Le = new WeakMap(), Ke = new WeakMap(), qr), Ct = new ys();
function vs(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ur(e) {
  return (e ?? "online") === "online" ? Ct.isOnline() : !0;
}
var un = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Kt(e) {
  return e instanceof un;
}
function ln(e) {
  let t = !1, r = 0, n = !1, s, i, o;
  const u = new Promise((b, O) => {
    i = b, o = O;
  }), v = (b) => {
    var O;
    n || (y(new un(b)), (O = e.abort) == null || O.call(e));
  }, _ = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, p = () => !tr.isFocused() || e.networkMode !== "always" && !Ct.isOnline(), A = (b) => {
    var O;
    n || (n = !0, (O = e.onSuccess) == null || O.call(e, b), s == null || s(), i(b));
  }, y = (b) => {
    var O;
    n || (n = !0, (O = e.onError) == null || O.call(e, b), s == null || s(), o(b));
  }, m = () => new Promise((b) => {
    var O;
    s = (L) => {
      const F = n || !p();
      return F && b(L), F;
    }, (O = e.onPause) == null || O.call(e);
  }).then(() => {
    var b;
    s = void 0, n || (b = e.onContinue) == null || b.call(e);
  }), T = () => {
    if (n)
      return;
    let b;
    try {
      b = e.fn();
    } catch (O) {
      b = Promise.reject(O);
    }
    Promise.resolve(b).then(A).catch((O) => {
      var B;
      if (n)
        return;
      const L = e.retry ?? (Ft ? 0 : 3), F = e.retryDelay ?? vs, P = typeof F == "function" ? F(r, O) : F, M = L === !0 || typeof L == "number" && r < L || typeof L == "function" && L(r, O);
      if (t || !M) {
        y(O);
        return;
      }
      r++, (B = e.onFail) == null || B.call(e, r, O), cn(P).then(() => {
        if (p())
          return m();
      }).then(() => {
        t ? y(O) : T();
      });
    });
  };
  return ur(e.networkMode) ? T() : m().then(T), {
    promise: u,
    cancel: v,
    continue: () => (s == null ? void 0 : s()) ? u : Promise.resolve(),
    cancelRetry: _,
    continueRetry: l
  };
}
function ws() {
  let e = [], t = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  };
  const s = (l) => {
    let p;
    t++;
    try {
      p = l();
    } finally {
      t--, t || u();
    }
    return p;
  }, i = (l) => {
    t ? e.push(l) : Rr(() => {
      r(l);
    });
  }, o = (l) => (...p) => {
    i(() => {
      l(...p);
    });
  }, u = () => {
    const l = e;
    e = [], l.length && Rr(() => {
      n(() => {
        l.forEach((p) => {
          r(p);
        });
      });
    });
  };
  return {
    batch: s,
    batchCalls: o,
    schedule: i,
    setNotifyFunction: (l) => {
      r = l;
    },
    setBatchNotifyFunction: (l) => {
      n = l;
    }
  };
}
var ie = ws(), Ue, Hr, fn = (Hr = class {
  constructor() {
    z(this, Ue, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ls(this.gcTime) && j(this, Ue, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Ft ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    w(this, Ue) && (clearTimeout(w(this, Ue)), j(this, Ue, void 0));
  }
}, Ue = new WeakMap(), Hr), We, Ge, he, Ne, de, Z, ht, Be, Je, _t, we, Se, Qr, gs = (Qr = class extends fn {
  constructor(t) {
    super();
    z(this, Je);
    z(this, we);
    z(this, We, void 0);
    z(this, Ge, void 0);
    z(this, he, void 0);
    z(this, Ne, void 0);
    z(this, de, void 0);
    z(this, Z, void 0);
    z(this, ht, void 0);
    z(this, Be, void 0);
    j(this, Be, !1), j(this, ht, t.defaultOptions), X(this, Je, _t).call(this, t.options), j(this, Z, []), j(this, he, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, j(this, We, t.state || bs(this.options)), this.state = w(this, We), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !w(this, Z).length && this.state.fetchStatus === "idle" && w(this, he).remove(this);
  }
  setData(t, r) {
    const n = hs(this.state.data, t, this.options);
    return X(this, we, Se).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    X(this, we, Se).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n;
    const r = w(this, Ne);
    return (n = w(this, de)) == null || n.cancel(t), r ? r.then(ve).catch(ve) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(w(this, We));
  }
  isActive() {
    return w(this, Z).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || w(this, Z).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !fs(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = w(this, Z).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = w(this, de)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = w(this, Z).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = w(this, de)) == null || r.continue();
  }
  addObserver(t) {
    w(this, Z).includes(t) || (w(this, Z).push(t), this.clearGcTimeout(), w(this, he).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    w(this, Z).includes(t) && (j(this, Z, w(this, Z).filter((r) => r !== t)), w(this, Z).length || (w(this, de) && (w(this, Be) ? w(this, de).cancel({ revert: !0 }) : w(this, de).cancelRetry()), this.scheduleGc()), w(this, he).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return w(this, Z).length;
  }
  invalidate() {
    this.state.isInvalidated || X(this, we, Se).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var _, l, p, A;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (w(this, Ne))
        return (_ = w(this, de)) == null || _.continueRetry(), w(this, Ne);
    }
    if (t && X(this, Je, _t).call(this, t), !this.options.queryFn) {
      const y = w(this, Z).find((m) => m.options.queryFn);
      y && X(this, Je, _t).call(this, y.options);
    }
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (y) => {
      Object.defineProperty(y, "signal", {
        enumerable: !0,
        get: () => (j(this, Be, !0), n.signal)
      });
    };
    i(s);
    const o = () => this.options.queryFn ? (j(this, Be, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      s,
      this
    ) : this.options.queryFn(
      s
    )) : Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ), u = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    i(u), (l = this.options.behavior) == null || l.onFetch(
      u,
      this
    ), j(this, Ge, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((p = u.fetchOptions) == null ? void 0 : p.meta)) && X(this, we, Se).call(this, { type: "fetch", meta: (A = u.fetchOptions) == null ? void 0 : A.meta });
    const v = (y) => {
      var m, T, b, O;
      Kt(y) && y.silent || X(this, we, Se).call(this, {
        type: "error",
        error: y
      }), Kt(y) || ((T = (m = w(this, he).config).onError) == null || T.call(
        m,
        y,
        this
      ), (O = (b = w(this, he).config).onSettled) == null || O.call(
        b,
        this.state.data,
        y,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return j(this, de, ln({
      fn: u.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (y) => {
        var m, T, b, O;
        if (typeof y > "u") {
          v(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(y), (T = (m = w(this, he).config).onSuccess) == null || T.call(m, y, this), (O = (b = w(this, he).config).onSettled) == null || O.call(
          b,
          y,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: v,
      onFail: (y, m) => {
        X(this, we, Se).call(this, { type: "failed", failureCount: y, error: m });
      },
      onPause: () => {
        X(this, we, Se).call(this, { type: "pause" });
      },
      onContinue: () => {
        X(this, we, Se).call(this, { type: "continue" });
      },
      retry: u.options.retry,
      retryDelay: u.options.retryDelay,
      networkMode: u.options.networkMode
    })), j(this, Ne, w(this, de).promise), w(this, Ne);
  }
}, We = new WeakMap(), Ge = new WeakMap(), he = new WeakMap(), Ne = new WeakMap(), de = new WeakMap(), Z = new WeakMap(), ht = new WeakMap(), Be = new WeakMap(), Je = new WeakSet(), _t = function(t) {
  this.options = { ...w(this, ht), ...t }, this.updateGcTime(this.options.gcTime);
}, we = new WeakSet(), Se = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: t.meta ?? null,
          fetchStatus: ur(this.options.networkMode) ? "fetching" : "paused",
          ...!n.dataUpdatedAt && {
            error: null,
            status: "pending"
          }
        };
      case "success":
        return {
          ...n,
          data: t.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const s = t.error;
        return Kt(s) && s.revert && w(this, Ge) ? { ...w(this, Ge), fetchStatus: "idle" } : {
          ...n,
          error: s,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: s,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...t.state
        };
    }
  };
  this.state = r(this.state), ie.batch(() => {
    w(this, Z).forEach((n) => {
      n.onQueryUpdate();
    }), w(this, he).notify({ query: this, type: "updated", action: t });
  });
}, Qr);
function bs(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = typeof t < "u", n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var be, $r, Es = ($r = class extends Nt {
  constructor(t = {}) {
    super();
    z(this, be, void 0);
    this.config = t, j(this, be, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const s = r.queryKey, i = r.queryHash ?? cr(s, r);
    let o = this.get(i);
    return o || (o = new gs({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(t) {
    w(this, be).has(t.queryHash) || (w(this, be).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = w(this, be).get(t.queryHash);
    r && (t.destroy(), r === t && w(this, be).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return w(this, be).get(t);
  }
  getAll() {
    return [...w(this, be).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Er(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => Er(t, n)) : r;
  }
  notify(t) {
    ie.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, be = new WeakMap(), $r), Ee, dt, ue, Ve, _e, Ae, Kr, _s = (Kr = class extends fn {
  constructor(t) {
    super();
    z(this, _e);
    z(this, Ee, void 0);
    z(this, dt, void 0);
    z(this, ue, void 0);
    z(this, Ve, void 0);
    this.mutationId = t.mutationId, j(this, dt, t.defaultOptions), j(this, ue, t.mutationCache), j(this, Ee, []), this.state = t.state || Ts(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...w(this, dt), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    w(this, Ee).includes(t) || (w(this, Ee).push(t), this.clearGcTimeout(), w(this, ue).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    j(this, Ee, w(this, Ee).filter((r) => r !== t)), this.scheduleGc(), w(this, ue).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    w(this, Ee).length || (this.state.status === "pending" ? this.scheduleGc() : w(this, ue).remove(this));
  }
  continue() {
    var t;
    return ((t = w(this, Ve)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, i, o, u, v, _, l, p, A, y, m, T, b, O, L, F, P, M, B, G;
    const r = () => (j(this, Ve, ln({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (I, U) => {
        X(this, _e, Ae).call(this, { type: "failed", failureCount: I, error: U });
      },
      onPause: () => {
        X(this, _e, Ae).call(this, { type: "pause" });
      },
      onContinue: () => {
        X(this, _e, Ae).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), w(this, Ve).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        X(this, _e, Ae).call(this, { type: "pending", variables: t }), await ((i = (s = w(this, ue).config).onMutate) == null ? void 0 : i.call(
          s,
          t,
          this
        ));
        const U = await ((u = (o = this.options).onMutate) == null ? void 0 : u.call(o, t));
        U !== this.state.context && X(this, _e, Ae).call(this, {
          type: "pending",
          context: U,
          variables: t
        });
      }
      const I = await r();
      return await ((_ = (v = w(this, ue).config).onSuccess) == null ? void 0 : _.call(
        v,
        I,
        t,
        this.state.context,
        this
      )), await ((p = (l = this.options).onSuccess) == null ? void 0 : p.call(l, I, t, this.state.context)), await ((y = (A = w(this, ue).config).onSettled) == null ? void 0 : y.call(
        A,
        I,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((T = (m = this.options).onSettled) == null ? void 0 : T.call(m, I, null, t, this.state.context)), X(this, _e, Ae).call(this, { type: "success", data: I }), I;
    } catch (I) {
      try {
        throw await ((O = (b = w(this, ue).config).onError) == null ? void 0 : O.call(
          b,
          I,
          t,
          this.state.context,
          this
        )), await ((F = (L = this.options).onError) == null ? void 0 : F.call(
          L,
          I,
          t,
          this.state.context
        )), await ((M = (P = w(this, ue).config).onSettled) == null ? void 0 : M.call(
          P,
          void 0,
          I,
          this.state.variables,
          this.state.context,
          this
        )), await ((G = (B = this.options).onSettled) == null ? void 0 : G.call(
          B,
          void 0,
          I,
          t,
          this.state.context
        )), I;
      } finally {
        X(this, _e, Ae).call(this, { type: "error", error: I });
      }
    }
  }
}, Ee = new WeakMap(), dt = new WeakMap(), ue = new WeakMap(), Ve = new WeakMap(), _e = new WeakSet(), Ae = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: !ur(this.options.networkMode),
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: t.error,
          failureCount: n.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), ie.batch(() => {
    w(this, Ee).forEach((n) => {
      n.onMutationUpdate(t);
    }), w(this, ue).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Kr);
function Ts() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var pe, pt, ze, Wr, Os = (Wr = class extends Nt {
  constructor(t = {}) {
    super();
    z(this, pe, void 0);
    z(this, pt, void 0);
    z(this, ze, void 0);
    this.config = t, j(this, pe, []), j(this, pt, 0);
  }
  build(t, r, n) {
    const s = new _s({
      mutationCache: this,
      mutationId: ++wt(this, pt)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(t) {
    w(this, pe).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    j(this, pe, w(this, pe).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    ie.batch(() => {
      w(this, pe).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return w(this, pe);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return w(this, pe).find(
      (n) => _r(r, n)
    );
  }
  findAll(t = {}) {
    return w(this, pe).filter(
      (r) => _r(t, r)
    );
  }
  notify(t) {
    ie.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    return j(this, ze, (w(this, ze) ?? Promise.resolve()).then(() => {
      const t = w(this, pe).filter((r) => r.state.isPaused);
      return ie.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(ve)),
          Promise.resolve()
        )
      );
    }).then(() => {
      j(this, ze, void 0);
    })), w(this, ze);
  }
}, pe = new WeakMap(), pt = new WeakMap(), ze = new WeakMap(), Wr);
function Rs(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var m, T, b, O, L;
        const s = t.options, i = (b = (T = (m = t.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : T.fetchMore) == null ? void 0 : b.direction, o = ((O = t.state.data) == null ? void 0 : O.pages) || [], u = ((L = t.state.data) == null ? void 0 : L.pageParams) || [], v = { pages: [], pageParams: [] };
        let _ = !1;
        const l = (F) => {
          Object.defineProperty(F, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? _ = !0 : t.signal.addEventListener("abort", () => {
              _ = !0;
            }), t.signal)
          });
        }, p = t.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), A = async (F, P, M) => {
          if (_)
            return Promise.reject();
          if (P == null && F.pages.length)
            return Promise.resolve(F);
          const B = {
            queryKey: t.queryKey,
            pageParam: P,
            direction: M ? "backward" : "forward",
            meta: t.options.meta
          };
          l(B);
          const G = await p(
            B
          ), { maxPages: I } = t.options, U = M ? ps : ds;
          return {
            pages: U(F.pages, G, I),
            pageParams: U(F.pageParams, P, I)
          };
        };
        let y;
        if (i && o.length) {
          const F = i === "backward", P = F ? Ss : Sr, M = {
            pages: o,
            pageParams: u
          }, B = P(s, M);
          y = await A(M, B, F);
        } else {
          y = await A(
            v,
            u[0] ?? s.initialPageParam
          );
          const F = e ?? o.length;
          for (let P = 1; P < F; P++) {
            const M = Sr(s, y);
            y = await A(y, M);
          }
        }
        return y;
      };
      t.options.persister ? t.fetchFn = () => {
        var s, i;
        return (i = (s = t.options).persister) == null ? void 0 : i.call(
          s,
          n,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = n;
    }
  };
}
function Sr(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function Ss(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var Y, Fe, Me, Xe, Ye, De, Ze, et, Gr, Cs = (Gr = class {
  constructor(e = {}) {
    z(this, Y, void 0);
    z(this, Fe, void 0);
    z(this, Me, void 0);
    z(this, Xe, void 0);
    z(this, Ye, void 0);
    z(this, De, void 0);
    z(this, Ze, void 0);
    z(this, et, void 0);
    j(this, Y, e.queryCache || new Es()), j(this, Fe, e.mutationCache || new Os()), j(this, Me, e.defaultOptions || {}), j(this, Xe, /* @__PURE__ */ new Map()), j(this, Ye, /* @__PURE__ */ new Map()), j(this, De, 0);
  }
  mount() {
    wt(this, De)._++, w(this, De) === 1 && (j(this, Ze, tr.subscribe(() => {
      tr.isFocused() && (this.resumePausedMutations(), w(this, Y).onFocus());
    })), j(this, et, Ct.subscribe(() => {
      Ct.isOnline() && (this.resumePausedMutations(), w(this, Y).onOnline());
    })));
  }
  unmount() {
    var e, t;
    wt(this, De)._--, w(this, De) === 0 && ((e = w(this, Ze)) == null || e.call(this), j(this, Ze, void 0), (t = w(this, et)) == null || t.call(this), j(this, et, void 0));
  }
  isFetching(e) {
    return w(this, Y).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return w(this, Fe).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var t;
    return (t = w(this, Y).find({ queryKey: e })) == null ? void 0 : t.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    return t !== void 0 ? Promise.resolve(t) : this.fetchQuery(e);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({ queryKey: t, state: r }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = w(this, Y).find({ queryKey: e }), s = n == null ? void 0 : n.state.data, i = us(t, s);
    if (typeof i > "u")
      return;
    const o = this.defaultQueryOptions({ queryKey: e });
    return w(this, Y).build(this, o).setData(i, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return ie.batch(
      () => this.getQueryCache().findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var t;
    return (t = w(this, Y).find({ queryKey: e })) == null ? void 0 : t.state;
  }
  removeQueries(e) {
    const t = w(this, Y);
    ie.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = w(this, Y), n = {
      type: "active",
      ...e
    };
    return ie.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = ie.batch(
      () => w(this, Y).findAll(e).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(ve).catch(ve);
  }
  invalidateQueries(e = {}, t = {}) {
    return ie.batch(() => {
      if (w(this, Y).findAll(e).forEach((n) => {
        n.invalidate();
      }), e.refetchType === "none")
        return Promise.resolve();
      const r = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(r, t);
    });
  }
  refetchQueries(e = {}, t) {
    const r = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }, n = ie.batch(
      () => w(this, Y).findAll(e).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(ve)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(ve);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = w(this, Y).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ve).catch(ve);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Rs(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ve).catch(ve);
  }
  resumePausedMutations() {
    return w(this, Fe).resumePausedMutations();
  }
  getQueryCache() {
    return w(this, Y);
  }
  getMutationCache() {
    return w(this, Fe);
  }
  getDefaultOptions() {
    return w(this, Me);
  }
  setDefaultOptions(e) {
    j(this, Me, e);
  }
  setQueryDefaults(e, t) {
    w(this, Xe).set(ut(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...w(this, Xe).values()];
    let r = {};
    return t.forEach((n) => {
      lt(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    w(this, Ye).set(ut(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...w(this, Ye).values()];
    let r = {};
    return t.forEach((n) => {
      lt(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const t = {
      ...w(this, Me).queries,
      ...(e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = cr(
      t.queryKey,
      t
    )), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...w(this, Me).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    w(this, Y).clear(), w(this, Fe).clear();
  }
}, Y = new WeakMap(), Fe = new WeakMap(), Me = new WeakMap(), Xe = new WeakMap(), Ye = new WeakMap(), De = new WeakMap(), Ze = new WeakMap(), et = new WeakMap(), Gr), hn = k.createContext(
  void 0
), Ao = (e) => {
  const t = k.useContext(hn);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, xs = ({
  client: e,
  children: t
}) => (k.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ k.createElement(hn.Provider, { value: e }, t));
function dn(e, t) {
  window.dispatchEvent(new StorageEvent("storage", { key: e, newValue: t }));
}
function Po(e, t) {
  const [r, n] = k.useState(e);
  return k.useEffect(() => {
    const s = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), r;
}
const Cr = (e, t) => {
  const r = JSON.stringify(t);
  window.localStorage.setItem(e, r), dn(e, r);
}, As = (e) => {
  window.localStorage.removeItem(e), dn(e, null);
}, xr = (e) => window.localStorage.getItem(e), Ps = (e) => (window.addEventListener("storage", e), () => window.removeEventListener("storage", e)), Ls = () => {
  throw Error("useLocalStorage is a client-only hook");
};
function Ns(e, t) {
  const r = () => xr(e), n = k.useSyncExternalStore(
    Ps,
    r,
    Ls
  ), s = k.useCallback(
    (i) => {
      try {
        const o = typeof i == "function" ? i(JSON.parse(n)) : i;
        o == null ? As(e) : Cr(e, o);
      } catch (o) {
        console.warn(o);
      }
    },
    [e, n]
  );
  return k.useEffect(() => {
    xr(e) === null && typeof t < "u" && Cr(e, t);
  }, [e, t]), [n ? JSON.parse(n) : t, s];
}
function Lo() {
  const [e, t] = k.useState({
    width: null,
    height: null
  });
  return k.useLayoutEffect(() => {
    const r = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}
const pn = () => Ns("app-state-session"), Fs = () => {
  const [e, t] = pn();
  return () => t((r) => r ? {
    ...r,
    locked: !0
  } : void 0);
};
function mn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ms } = Object.prototype, { getPrototypeOf: lr } = Object, Mt = ((e) => (t) => {
  const r = Ms.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => Mt(t) === e), Dt = (e) => (t) => typeof t === e, { isArray: rt } = Array, ft = Dt("undefined");
function Ds(e) {
  return e !== null && !ft(e) && e.constructor !== null && !ft(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yn = Oe("ArrayBuffer");
function js(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && yn(e.buffer), t;
}
const Is = Dt("string"), ye = Dt("function"), vn = Dt("number"), jt = (e) => e !== null && typeof e == "object", ks = (e) => e === !0 || e === !1, Tt = (e) => {
  if (Mt(e) !== "object")
    return !1;
  const t = lr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Us = Oe("Date"), Bs = Oe("File"), zs = Oe("Blob"), qs = Oe("FileList"), Hs = (e) => jt(e) && ye(e.pipe), Qs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = Mt(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, $s = Oe("URLSearchParams"), Ks = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), rt(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let u;
    for (n = 0; n < o; n++)
      u = i[n], t.call(null, e[u], u, e);
  }
}
function wn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const gn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), bn = (e) => !ft(e) && e !== gn;
function rr() {
  const { caseless: e } = bn(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && wn(t, s) || s;
    Tt(t[i]) && Tt(n) ? t[i] = rr(t[i], n) : Tt(n) ? t[i] = rr({}, n) : rt(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && mt(arguments[n], r);
  return t;
}
const Ws = (e, t, r, { allOwnKeys: n } = {}) => (mt(t, (s, i) => {
  r && ye(s) ? e[i] = mn(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), Gs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Js = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Vs = (e, t, r, n) => {
  let s, i, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = r !== !1 && lr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Xs = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Ys = (e) => {
  if (!e)
    return null;
  if (rt(e))
    return e;
  let t = e.length;
  if (!vn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Zs = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && lr(Uint8Array)), ei = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, ti = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, ri = Oe("HTMLFormElement"), ni = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Ar = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), si = Oe("RegExp"), En = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  mt(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, ii = (e) => {
  En(e, (t, r) => {
    if (ye(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ye(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, oi = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return rt(e) ? n(e) : n(String(e).split(t)), r;
}, ai = () => {
}, ci = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Wt = "abcdefghijklmnopqrstuvwxyz", Pr = "0123456789", _n = {
  DIGIT: Pr,
  ALPHA: Wt,
  ALPHA_DIGIT: Wt + Wt.toUpperCase() + Pr
}, ui = (e = 16, t = _n.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function li(e) {
  return !!(e && ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const fi = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (jt(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = rt(n) ? [] : {};
        return mt(n, (o, u) => {
          const v = r(o, s + 1);
          !ft(v) && (i[u] = v);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, hi = Oe("AsyncFunction"), di = (e) => e && (jt(e) || ye(e)) && ye(e.then) && ye(e.catch), E = {
  isArray: rt,
  isArrayBuffer: yn,
  isBuffer: Ds,
  isFormData: Qs,
  isArrayBufferView: js,
  isString: Is,
  isNumber: vn,
  isBoolean: ks,
  isObject: jt,
  isPlainObject: Tt,
  isUndefined: ft,
  isDate: Us,
  isFile: Bs,
  isBlob: zs,
  isRegExp: si,
  isFunction: ye,
  isStream: Hs,
  isURLSearchParams: $s,
  isTypedArray: Zs,
  isFileList: qs,
  forEach: mt,
  merge: rr,
  extend: Ws,
  trim: Ks,
  stripBOM: Gs,
  inherits: Js,
  toFlatObject: Vs,
  kindOf: Mt,
  kindOfTest: Oe,
  endsWith: Xs,
  toArray: Ys,
  forEachEntry: ei,
  matchAll: ti,
  isHTMLForm: ri,
  hasOwnProperty: Ar,
  hasOwnProp: Ar,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: En,
  freezeMethods: ii,
  toObjectSet: oi,
  toCamelCase: ni,
  noop: ai,
  toFiniteNumber: ci,
  findKey: wn,
  global: gn,
  isContextDefined: bn,
  ALPHABET: _n,
  generateString: ui,
  isSpecCompliantForm: li,
  toJSONObject: fi,
  isAsyncFn: hi,
  isThenable: di
};
function H(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
E.inherits(H, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Tn = H.prototype, On = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  On[e] = { value: e };
});
Object.defineProperties(H, On);
Object.defineProperty(Tn, "isAxiosError", { value: !0 });
H.from = (e, t, r, n, s, i) => {
  const o = Object.create(Tn);
  return E.toFlatObject(e, o, function(v) {
    return v !== Error.prototype;
  }, (u) => u !== "isAxiosError"), H.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const pi = null;
function nr(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Rn(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Lr(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Rn(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function mi(e) {
  return E.isArray(e) && !e.some(nr);
}
const yi = E.toFlatObject(E, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function It(e, t, r) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = E.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(T, b) {
    return !E.isUndefined(b[T]);
  });
  const n = r.metaTokens, s = r.visitor || l, i = r.dots, o = r.indexes, v = (r.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(t);
  if (!E.isFunction(s))
    throw new TypeError("visitor must be a function");
  function _(m) {
    if (m === null)
      return "";
    if (E.isDate(m))
      return m.toISOString();
    if (!v && E.isBlob(m))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(m) || E.isTypedArray(m) ? v && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function l(m, T, b) {
    let O = m;
    if (m && !b && typeof m == "object") {
      if (E.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), m = JSON.stringify(m);
      else if (E.isArray(m) && mi(m) || (E.isFileList(m) || E.endsWith(T, "[]")) && (O = E.toArray(m)))
        return T = Rn(T), O.forEach(function(F, P) {
          !(E.isUndefined(F) || F === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Lr([T], P, i) : o === null ? T : T + "[]",
            _(F)
          );
        }), !1;
    }
    return nr(m) ? !0 : (t.append(Lr(b, T, i), _(m)), !1);
  }
  const p = [], A = Object.assign(yi, {
    defaultVisitor: l,
    convertValue: _,
    isVisitable: nr
  });
  function y(m, T) {
    if (!E.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      p.push(m), E.forEach(m, function(O, L) {
        (!(E.isUndefined(O) || O === null) && s.call(
          t,
          O,
          E.isString(L) ? L.trim() : L,
          T,
          A
        )) === !0 && y(O, T ? T.concat(L) : [L]);
      }), p.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Nr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function fr(e, t) {
  this._pairs = [], e && It(e, this, t);
}
const Sn = fr.prototype;
Sn.append = function(t, r) {
  this._pairs.push([t, r]);
};
Sn.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Nr);
  } : Nr;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function vi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || vi, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = E.isURLSearchParams(t) ? t.toString() : new fr(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class wi {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    E.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Fr = wi, xn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gi = typeof URLSearchParams < "u" ? URLSearchParams : fr, bi = typeof FormData < "u" ? FormData : null, Ei = typeof Blob < "u" ? Blob : null, _i = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gi,
    FormData: bi,
    Blob: Ei
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, An = typeof window < "u" && typeof document < "u", Ti = ((e) => An && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Oi = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: An,
  hasStandardBrowserEnv: Ti,
  hasStandardBrowserWebWorkerEnv: Oi
}, Symbol.toStringTag, { value: "Module" })), Te = {
  ...Ri,
  ..._i
};
function Si(e, t) {
  return It(e, new Te.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return Te.isNode && E.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ci(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xi(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Pn(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    const u = Number.isFinite(+o), v = i >= r.length;
    return o = !o && E.isArray(s) ? s.length : o, v ? (E.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !E.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && E.isArray(s[o]) && (s[o] = xi(s[o])), !u);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const r = {};
    return E.forEachEntry(e, (n, s) => {
      t(Ci(n), s, r, 0);
    }), r;
  }
  return null;
}
function Ai(e, t, r) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const hr = {
  transitional: xn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = E.isObject(t);
    if (i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))
      return s && s ? JSON.stringify(Pn(t)) : t;
    if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Si(t, this.formSerializer).toString();
      if ((u = E.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const v = this.env && this.env.FormData;
        return It(
          u ? { "files[]": t } : t,
          v && new v(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), Ai(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || hr.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && E.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? H.from(u, H.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Te.classes.FormData,
    Blob: Te.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  hr.headers[e] = {};
});
const dr = hr, Pi = E.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Li = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && Pi[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Mr = Symbol("internals");
function st(e) {
  return e && String(e).trim().toLowerCase();
}
function Ot(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Ot) : String(e);
}
function Ni(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Fi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Gt(e, t, r, n, s) {
  if (E.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!E.isString(t)) {
    if (E.isString(n))
      return t.indexOf(n) !== -1;
    if (E.isRegExp(n))
      return n.test(t);
  }
}
function Mi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Di(e, t) {
  const r = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class kt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(u, v, _) {
      const l = st(v);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = E.findKey(s, l);
      (!p || s[p] === void 0 || _ === !0 || _ === void 0 && s[p] !== !1) && (s[p || v] = Ot(u));
    }
    const o = (u, v) => E.forEach(u, (_, l) => i(_, l, v));
    return E.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : E.isString(t) && (t = t.trim()) && !Fi(t) ? o(Li(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = st(t), t) {
      const n = E.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Ni(s);
        if (E.isFunction(r))
          return r.call(this, s, n);
        if (E.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = st(t), t) {
      const n = E.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Gt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = st(o), o) {
        const u = E.findKey(n, o);
        u && (!r || Gt(n, n[u], u, r)) && (delete n[u], s = !0);
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Gt(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return E.forEach(this, (s, i) => {
      const o = E.findKey(n, i);
      if (o) {
        r[o] = Ot(s), delete r[i];
        return;
      }
      const u = t ? Mi(i) : String(i).trim();
      u !== i && delete r[i], r[u] = Ot(s), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && E.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Mr] = this[Mr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const u = st(o);
      n[u] || (Di(s, o), n[u] = !0);
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
kt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(kt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
E.freezeMethods(kt);
const Ce = kt;
function Jt(e, t) {
  const r = this || dr, n = t || r, s = Ce.from(n.headers);
  let i = n.data;
  return E.forEach(e, function(u) {
    i = u.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Ln(e) {
  return !!(e && e.__CANCEL__);
}
function yt(e, t, r) {
  H.call(this, e ?? "canceled", H.ERR_CANCELED, t, r), this.name = "CanceledError";
}
E.inherits(yt, H, {
  __CANCEL__: !0
});
function ji(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new H(
    "Request failed with status code " + r.status,
    [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Ii = Te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, s, i, o, u) {
        const v = [];
        v.push(r + "=" + encodeURIComponent(n)), E.isNumber(s) && v.push("expires=" + new Date(s).toGMTString()), E.isString(i) && v.push("path=" + i), E.isString(o) && v.push("domain=" + o), u === !0 && v.push("secure"), document.cookie = v.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function ki(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ui(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Nn(e, t) {
  return e && !ki(t) ? Ui(e, t) : t;
}
const Bi = Te.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(i) {
      let o = i;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(o) {
      const u = E.isString(o) ? s(o) : o;
      return u.protocol === n.protocol && u.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function zi(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qi(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(v) {
    const _ = Date.now(), l = n[i];
    o || (o = _), r[s] = v, n[s] = _;
    let p = i, A = 0;
    for (; p !== s; )
      A += r[p++], p = p % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), _ - o < t)
      return;
    const y = l && _ - l;
    return y ? Math.round(A * 1e3 / y) : void 0;
  };
}
function Dr(e, t) {
  let r = 0;
  const n = qi(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, u = i - r, v = n(u), _ = i <= o;
    r = i;
    const l = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: u,
      rate: v || void 0,
      estimated: v && o && _ ? (o - i) / v : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Hi = typeof XMLHttpRequest < "u", Qi = Hi && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = Ce.from(e.headers).normalize(), o = e.responseType;
    let u;
    function v() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let _;
    if (E.isFormData(s)) {
      if (Te.hasStandardBrowserEnv || Te.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((_ = i.getContentType()) !== !1) {
        const [m, ...T] = _ ? _.split(";").map((b) => b.trim()).filter(Boolean) : [];
        i.setContentType([m || "multipart/form-data", ...T].join("; "));
      }
    }
    let l = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(m + ":" + T));
    }
    const p = Nn(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), Cn(p, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function A() {
      if (!l)
        return;
      const m = Ce.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), b = {
        data: !o || o === "text" || o === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: m,
        config: e,
        request: l
      };
      ji(function(L) {
        r(L), v();
      }, function(L) {
        n(L), v();
      }, b), l = null;
    }
    if ("onloadend" in l ? l.onloadend = A : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, l.onabort = function() {
      l && (n(new H("Request aborted", H.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      n(new H("Network Error", H.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let T = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || xn;
      e.timeoutErrorMessage && (T = e.timeoutErrorMessage), n(new H(
        T,
        b.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
        e,
        l
      )), l = null;
    }, Te.hasStandardBrowserEnv) {
      const m = Bi(p) && e.xsrfCookieName && Ii.read(e.xsrfCookieName);
      m && i.set(e.xsrfHeaderName, m);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in l && E.forEach(i.toJSON(), function(T, b) {
      l.setRequestHeader(b, T);
    }), E.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), o && o !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", Dr(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Dr(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (m) => {
      l && (n(!m || m.type ? new yt(null, e, l) : m), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const y = zi(p);
    if (y && Te.protocols.indexOf(y) === -1) {
      n(new H("Unsupported protocol " + y + ":", H.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(s || null);
  });
}, sr = {
  http: pi,
  xhr: Qi
};
E.forEach(sr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const jr = (e) => `- ${e}`, $i = (e) => E.isFunction(e) || e === null || e === !1, Fn = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !$i(r) && (n = sr[(o = String(r)).toLowerCase()], n === void 0))
        throw new H(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([u, v]) => `adapter ${u} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(jr).join(`
`) : " " + jr(i[0]) : "as no adapter specified";
      throw new H(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: sr
};
function Vt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yt(null, e);
}
function Ir(e) {
  return Vt(e), e.headers = Ce.from(e.headers), e.data = Jt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Fn.getAdapter(e.adapter || dr.adapter)(e).then(function(n) {
    return Vt(e), n.data = Jt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ce.from(n.headers), n;
  }, function(n) {
    return Ln(n) || (Vt(e), n && n.response && (n.response.data = Jt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ce.from(n.response.headers))), Promise.reject(n);
  });
}
const kr = (e) => e instanceof Ce ? e.toJSON() : e;
function tt(e, t) {
  t = t || {};
  const r = {};
  function n(_, l, p) {
    return E.isPlainObject(_) && E.isPlainObject(l) ? E.merge.call({ caseless: p }, _, l) : E.isPlainObject(l) ? E.merge({}, l) : E.isArray(l) ? l.slice() : l;
  }
  function s(_, l, p) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(_))
        return n(void 0, _, p);
    } else
      return n(_, l, p);
  }
  function i(_, l) {
    if (!E.isUndefined(l))
      return n(void 0, l);
  }
  function o(_, l) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(_))
        return n(void 0, _);
    } else
      return n(void 0, l);
  }
  function u(_, l, p) {
    if (p in t)
      return n(_, l);
    if (p in e)
      return n(void 0, _);
  }
  const v = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: u,
    headers: (_, l) => s(kr(_), kr(l), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const p = v[l] || s, A = p(e[l], t[l], l);
    E.isUndefined(A) && p !== u || (r[l] = A);
  }), r;
}
const Mn = "1.6.1", pr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pr[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ur = {};
pr.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + Mn + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, u) => {
    if (t === !1)
      throw new H(
        s(o, " has been removed" + (r ? " in " + r : "")),
        H.ERR_DEPRECATED
      );
    return r && !Ur[o] && (Ur[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, u) : !0;
  };
};
function Ki(e, t, r) {
  if (typeof e != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const u = e[i], v = u === void 0 || o(u, i, e);
      if (v !== !0)
        throw new H("option " + i + " must be " + v, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new H("Unknown option " + i, H.ERR_BAD_OPTION);
  }
}
const ir = {
  assertOptions: Ki,
  validators: pr
}, xe = ir.validators;
class xt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Fr(),
      response: new Fr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = tt(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && ir.assertOptions(n, {
      silentJSONParsing: xe.transitional(xe.boolean),
      forcedJSONParsing: xe.transitional(xe.boolean),
      clarifyTimeoutError: xe.transitional(xe.boolean)
    }, !1), s != null && (E.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ir.assertOptions(s, {
      encode: xe.function,
      serialize: xe.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && E.merge(
      i.common,
      i[r.method]
    );
    i && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), r.headers = Ce.concat(o, i);
    const u = [];
    let v = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (v = v && T.synchronous, u.unshift(T.fulfilled, T.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function(T) {
      _.push(T.fulfilled, T.rejected);
    });
    let l, p = 0, A;
    if (!v) {
      const m = [Ir.bind(this), void 0];
      for (m.unshift.apply(m, u), m.push.apply(m, _), A = m.length, l = Promise.resolve(r); p < A; )
        l = l.then(m[p++], m[p++]);
      return l;
    }
    A = u.length;
    let y = r;
    for (p = 0; p < A; ) {
      const m = u[p++], T = u[p++];
      try {
        y = m(y);
      } catch (b) {
        T.call(this, b);
        break;
      }
    }
    try {
      l = Ir.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, A = _.length; p < A; )
      l = l.then(_[p++], _[p++]);
    return l;
  }
  getUri(t) {
    t = tt(this.defaults, t);
    const r = Nn(t.baseURL, t.url);
    return Cn(r, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(t) {
  xt.prototype[t] = function(r, n) {
    return this.request(tt(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, u) {
      return this.request(tt(u || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  xt.prototype[t] = r(), xt.prototype[t + "Form"] = r(!0);
});
const Rt = xt;
class mr {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((u) => {
        n.subscribe(u), i = u;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, t(function(i, o, u) {
      n.reason || (n.reason = new yt(i, o, u), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new mr(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Wi = mr;
function Gi(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Ji(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const or = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(or).forEach(([e, t]) => {
  or[t] = e;
});
const Vi = or;
function Dn(e) {
  const t = new Rt(e), r = mn(Rt.prototype.request, t);
  return E.extend(r, Rt.prototype, t, { allOwnKeys: !0 }), E.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Dn(tt(e, s));
  }, r;
}
const V = Dn(dr);
V.Axios = Rt;
V.CanceledError = yt;
V.CancelToken = Wi;
V.isCancel = Ln;
V.VERSION = Mn;
V.toFormData = It;
V.AxiosError = H;
V.Cancel = V.CanceledError;
V.all = function(t) {
  return Promise.all(t);
};
V.spread = Gi;
V.isAxiosError = Ji;
V.mergeConfig = tt;
V.AxiosHeaders = Ce;
V.formToJSON = (e) => Pn(E.isHTMLForm(e) ? new FormData(e) : e);
V.getAdapter = Fn.getAdapter;
V.HttpStatusCode = Vi;
V.default = V;
const Br = V, jn = q.createContext(null), No = () => q.useContext(jn), Xi = ({
  children: e,
  baseURL: t
}) => {
  const [r, n] = pn(), s = Fs();
  let i = null;
  const o = k.useMemo(() => {
    const u = Br.create({
      baseURL: t,
      headers: {
        Authorization: r ? `Bearer ${r.access_token}` : void 0,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    return u.interceptors.response.use((v) => v, async (v) => {
      var l, p, A;
      const _ = (y) => u({
        ...v.config,
        headers: {
          ...v.config.headers,
          Authorization: `Bearer ${y}`
        }
      });
      if (r && !r.locked && ((l = v.response) == null ? void 0 : l.status) === 401)
        if (i) {
          const y = await i;
          if (y)
            return _(y);
        } else {
          i = new Yi();
          try {
            const {
              data: {
                data: y
              }
            } = await Br.post("/api/user/refresh", {
              refresh_token: r.refresh_token
            }, {
              baseURL: t,
              headers: {
                Authorization: `Bearer ${r.access_token}`,
                "X-Requested-With": "XMLHttpRequest"
              }
            });
            return n(y), i.resolve(y.access_token), _(y.access_token);
          } catch {
            i.resolve(null), W.warn("Сессия истекла", {
              toastId: "session-stale"
            }), s();
          } finally {
            i = null;
          }
        }
      throw ((p = v.response) == null ? void 0 : p.status) === 500 && W.error(/* @__PURE__ */ At("div", { children: [
        /* @__PURE__ */ K("div", { css: {
          fontWeight: "500"
        }, children: "Ошибка сервера" }),
        /* @__PURE__ */ K("div", { css: {
          padding: "0.25rem",
          fontSize: "0.75rem",
          lineHeight: "1rem"
        }, children: ((A = v.response.data) == null ? void 0 : A.message) || v.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      }), v;
    }), u;
  }, [r == null ? void 0 : r.access_token]);
  return /* @__PURE__ */ K(jn.Provider, { value: {
    client: o
  }, children: e });
};
class Yi {
  constructor() {
    vt(this, "internal");
    vt(this, "resolver");
    vt(this, "rejecter");
    this.internal = new Promise((t, r) => {
      this.resolver = t, this.rejecter = r;
    });
  }
  then(t, r) {
    return this.internal.then(t, r);
  }
  resolve(t) {
    this.resolver && this.resolver(t);
  }
}
const In = q.createContext(null), Zi = () => {
  const e = q.useContext(In);
  if (!e)
    throw new Error("useRouteContext must be used within a RouteContextProvider");
  return e;
}, eo = ({
  children: e,
  routes: t
}) => /* @__PURE__ */ K(In.Provider, { value: {
  routes: t
}, children: e }), to = new Cs({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    },
    mutations: {
      retry: !1
    }
  }
}), ro = Qn({
  palette: {
    primary: {
      50: "#f4f5fa",
      100: "#e5e6f4",
      200: "#d2d5eb",
      300: "#b2b8de",
      400: "#8d94cd",
      500: "#7275bf",
      600: "#5a58ad",
      700: "#5a54a1",
      800: "#4f4984",
      900: "#423e6a",
      950: "#2b2942"
    }
  }
}), no = ({
  children: e
}) => /* @__PURE__ */ K($n, { theme: ro, children: /* @__PURE__ */ K(Xi, { children: /* @__PURE__ */ K(xs, { client: to, children: /* @__PURE__ */ K(eo, { routes: tn, children: e }) }) }) }), so = () => {
  const {
    routes: e
  } = Zi();
  return e;
};
var kn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "circle-notch", n = 512, s = 512, i = [], o = "f1ce", u = "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      s,
      i,
      o,
      u
    ]
  }, e.faCircleNotch = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = s, e.ligatures = i, e.unicode = o, e.svgPathData = u, e.aliases = i;
})(kn);
const io = ({
  children: e,
  spinning: t = !0
}) => t ? /* @__PURE__ */ At("div", { css: {
  position: "relative",
  height: "100%",
  width: "100%",
  cursor: "wait"
}, children: [
  /* @__PURE__ */ K("div", { css: {
    opacity: "0.3",
    "--tw-grayscale": "grayscale(100%)",
    filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  }, children: e }),
  t && /* @__PURE__ */ K("div", { css: {
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(229 231 235 / 0.3)"
  }, children: /* @__PURE__ */ K(Wn, { icon: kn.faCircleNotch, css: [{
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, ar`
                font-size: 32px;
              `], spin: !0 }) })
] }) : e, oo = ({
  id: e
}) => {
  const t = so(), r = k.useMemo(() => {
    const {
      component: n,
      ...s
    } = t.find((i) => i.id === e) || {};
    if (!n)
      throw new Error(`Route with id ${e} not found`);
    return {
      ...s,
      Component: k.lazy(() => n())
    };
  }, [e, t]);
  return /* @__PURE__ */ K(k.Suspense, { fallback: /* @__PURE__ */ K(io, {}), children: /* @__PURE__ */ K(r.Component, {}) });
}, Un = q.createContext(null), Fo = () => {
  const e = q.useContext(Un);
  if (!e)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return e;
}, ao = ({
  children: e,
  ...t
}) => {
  const [r, n] = q.useState();
  return /* @__PURE__ */ K(Un.Provider, { value: {
    ...t,
    state: r,
    setState: n
  }, children: e });
}, co = ({
  el: e,
  match: t,
  window: r
}) => Zr.createPortal(/* @__PURE__ */ K(ao, { width: 0, height: 0, title: "", position: {
  x: 0,
  y: 0
}, maximized: !0, folded: !0, focused: !0, params: t.params, focus: () => r.focus(), blur: () => r.blur(), maximize: () => r.maximize(), minimize: () => r.restore(), fold: () => r.minimize(), close: () => r.close(), updatePosition: ({
  x: n,
  y: s
}) => r.showAt(n, s), setTitle: (n) => r.setTitle(n), setWidth: (n) => r.setWidth(n), setHeight: (n) => r.setHeight(n), children: /* @__PURE__ */ K(oo, { id: t.route.id }) }), e), uo = q.createContext(null), lo = ({
  children: e,
  navigate: t
}) => /* @__PURE__ */ K(uo.Provider, { value: {
  navigate: t
}, children: e }), fo = ({
  eventEmitter: e,
  onNavigate: t
}) => {
  const [r, n] = q.useState([]);
  return q.useEffect(() => (e.on("add", (s, i, o) => {
    n((u) => [...u, {
      el: s,
      match: i,
      window: o
    }]);
  }), e.on("destroy", (s) => {
    n((i) => i.filter((o) => o.el !== s));
  }), () => {
    e.removeAllListeners("add"), e.removeAllListeners("destroy");
  }), [e]), /* @__PURE__ */ K(no, { children: /* @__PURE__ */ At(lo, { navigate: t, children: [
    /* @__PURE__ */ K(cs, {}),
    /* @__PURE__ */ K(Yr, { styles: ar`
            .MuiPopper-root {
              z-index: 20000;
            }
          ` }),
    r.map((s) => /* @__PURE__ */ K(co, { ...s }, s.match.route.id))
  ] }) });
};
function ho(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r];
    if (n === "*" || n === "+" || n === "?") {
      t.push({ type: "MODIFIER", index: r, value: e[r++] });
      continue;
    }
    if (n === "\\") {
      t.push({ type: "ESCAPED_CHAR", index: r++, value: e[r++] });
      continue;
    }
    if (n === "{") {
      t.push({ type: "OPEN", index: r, value: e[r++] });
      continue;
    }
    if (n === "}") {
      t.push({ type: "CLOSE", index: r, value: e[r++] });
      continue;
    }
    if (n === ":") {
      for (var s = "", i = r + 1; i < e.length; ) {
        var o = e.charCodeAt(i);
        if (
          // `0-9`
          o >= 48 && o <= 57 || // `A-Z`
          o >= 65 && o <= 90 || // `a-z`
          o >= 97 && o <= 122 || // `_`
          o === 95
        ) {
          s += e[i++];
          continue;
        }
        break;
      }
      if (!s)
        throw new TypeError("Missing parameter name at ".concat(r));
      t.push({ type: "NAME", index: r, value: s }), r = i;
      continue;
    }
    if (n === "(") {
      var u = 1, v = "", i = r + 1;
      if (e[i] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(i));
      for (; i < e.length; ) {
        if (e[i] === "\\") {
          v += e[i++] + e[i++];
          continue;
        }
        if (e[i] === ")") {
          if (u--, u === 0) {
            i++;
            break;
          }
        } else if (e[i] === "(" && (u++, e[i + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(i));
        v += e[i++];
      }
      if (u)
        throw new TypeError("Unbalanced pattern at ".concat(r));
      if (!v)
        throw new TypeError("Missing pattern at ".concat(r));
      t.push({ type: "PATTERN", index: r, value: v }), r = i;
      continue;
    }
    t.push({ type: "CHAR", index: r, value: e[r++] });
  }
  return t.push({ type: "END", index: r, value: "" }), t;
}
function Bn(e, t) {
  t === void 0 && (t = {});
  for (var r = ho(e), n = t.prefixes, s = n === void 0 ? "./" : n, i = "[^".concat(He(t.delimiter || "/#?"), "]+?"), o = [], u = 0, v = 0, _ = "", l = function(B) {
    if (v < r.length && r[v].type === B)
      return r[v++].value;
  }, p = function(B) {
    var G = l(B);
    if (G !== void 0)
      return G;
    var I = r[v], U = I.type, le = I.index;
    throw new TypeError("Unexpected ".concat(U, " at ").concat(le, ", expected ").concat(B));
  }, A = function() {
    for (var B = "", G; G = l("CHAR") || l("ESCAPED_CHAR"); )
      B += G;
    return B;
  }; v < r.length; ) {
    var y = l("CHAR"), m = l("NAME"), T = l("PATTERN");
    if (m || T) {
      var b = y || "";
      s.indexOf(b) === -1 && (_ += b, b = ""), _ && (o.push(_), _ = ""), o.push({
        name: m || u++,
        prefix: b,
        suffix: "",
        pattern: T || i,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    var O = y || l("ESCAPED_CHAR");
    if (O) {
      _ += O;
      continue;
    }
    _ && (o.push(_), _ = "");
    var L = l("OPEN");
    if (L) {
      var b = A(), F = l("NAME") || "", P = l("PATTERN") || "", M = A();
      p("CLOSE"), o.push({
        name: F || (P ? u++ : ""),
        pattern: F && !P ? i : P,
        prefix: b,
        suffix: M,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    p("END");
  }
  return o;
}
function Mo(e, t) {
  return po(Bn(e, t), t);
}
function po(e, t) {
  t === void 0 && (t = {});
  var r = yr(t), n = t.encode, s = n === void 0 ? function(v) {
    return v;
  } : n, i = t.validate, o = i === void 0 ? !0 : i, u = e.map(function(v) {
    if (typeof v == "object")
      return new RegExp("^(?:".concat(v.pattern, ")$"), r);
  });
  return function(v) {
    for (var _ = "", l = 0; l < e.length; l++) {
      var p = e[l];
      if (typeof p == "string") {
        _ += p;
        continue;
      }
      var A = v ? v[p.name] : void 0, y = p.modifier === "?" || p.modifier === "*", m = p.modifier === "*" || p.modifier === "+";
      if (Array.isArray(A)) {
        if (!m)
          throw new TypeError('Expected "'.concat(p.name, '" to not repeat, but got an array'));
        if (A.length === 0) {
          if (y)
            continue;
          throw new TypeError('Expected "'.concat(p.name, '" to not be empty'));
        }
        for (var T = 0; T < A.length; T++) {
          var b = s(A[T], p);
          if (o && !u[l].test(b))
            throw new TypeError('Expected all "'.concat(p.name, '" to match "').concat(p.pattern, '", but got "').concat(b, '"'));
          _ += p.prefix + b + p.suffix;
        }
        continue;
      }
      if (typeof A == "string" || typeof A == "number") {
        var b = s(String(A), p);
        if (o && !u[l].test(b))
          throw new TypeError('Expected "'.concat(p.name, '" to match "').concat(p.pattern, '", but got "').concat(b, '"'));
        _ += p.prefix + b + p.suffix;
        continue;
      }
      if (!y) {
        var O = m ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(p.name, '" to be ').concat(O));
      }
    }
    return _;
  };
}
function mo(e, t) {
  var r = [], n = zn(e, r, t);
  return yo(n, r, t);
}
function yo(e, t, r) {
  r === void 0 && (r = {});
  var n = r.decode, s = n === void 0 ? function(i) {
    return i;
  } : n;
  return function(i) {
    var o = e.exec(i);
    if (!o)
      return !1;
    for (var u = o[0], v = o.index, _ = /* @__PURE__ */ Object.create(null), l = function(A) {
      if (o[A] === void 0)
        return "continue";
      var y = t[A - 1];
      y.modifier === "*" || y.modifier === "+" ? _[y.name] = o[A].split(y.prefix + y.suffix).map(function(m) {
        return s(m, y);
      }) : _[y.name] = s(o[A], y);
    }, p = 1; p < o.length; p++)
      l(p);
    return { path: u, index: v, params: _ };
  };
}
function He(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function yr(e) {
  return e && e.sensitive ? "" : "i";
}
function vo(e, t) {
  if (!t)
    return e;
  for (var r = /\((?:\?<(.*?)>)?(?!\?)/g, n = 0, s = r.exec(e.source); s; )
    t.push({
      // Use parenthesized substring match if available, index otherwise
      name: s[1] || n++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), s = r.exec(e.source);
  return e;
}
function wo(e, t, r) {
  var n = e.map(function(s) {
    return zn(s, t, r).source;
  });
  return new RegExp("(?:".concat(n.join("|"), ")"), yr(r));
}
function go(e, t, r) {
  return bo(Bn(e, r), t, r);
}
function bo(e, t, r) {
  r === void 0 && (r = {});
  for (var n = r.strict, s = n === void 0 ? !1 : n, i = r.start, o = i === void 0 ? !0 : i, u = r.end, v = u === void 0 ? !0 : u, _ = r.encode, l = _ === void 0 ? function(le) {
    return le;
  } : _, p = r.delimiter, A = p === void 0 ? "/#?" : p, y = r.endsWith, m = y === void 0 ? "" : y, T = "[".concat(He(m), "]|$"), b = "[".concat(He(A), "]"), O = o ? "^" : "", L = 0, F = e; L < F.length; L++) {
    var P = F[L];
    if (typeof P == "string")
      O += He(l(P));
    else {
      var M = He(l(P.prefix)), B = He(l(P.suffix));
      if (P.pattern)
        if (t && t.push(P), M || B)
          if (P.modifier === "+" || P.modifier === "*") {
            var G = P.modifier === "*" ? "?" : "";
            O += "(?:".concat(M, "((?:").concat(P.pattern, ")(?:").concat(B).concat(M, "(?:").concat(P.pattern, "))*)").concat(B, ")").concat(G);
          } else
            O += "(?:".concat(M, "(").concat(P.pattern, ")").concat(B, ")").concat(P.modifier);
        else
          P.modifier === "+" || P.modifier === "*" ? O += "((?:".concat(P.pattern, ")").concat(P.modifier, ")") : O += "(".concat(P.pattern, ")").concat(P.modifier);
      else
        O += "(?:".concat(M).concat(B, ")").concat(P.modifier);
    }
  }
  if (v)
    s || (O += "".concat(b, "?")), O += r.endsWith ? "(?=".concat(T, ")") : "$";
  else {
    var I = e[e.length - 1], U = typeof I == "string" ? b.indexOf(I[I.length - 1]) > -1 : I === void 0;
    s || (O += "(?:".concat(b, "(?=").concat(T, "))?")), U || (O += "(?=".concat(b, "|").concat(T, ")"));
  }
  return new RegExp(O, yr(r));
}
function zn(e, t, r) {
  return e instanceof RegExp ? vo(e, t) : Array.isArray(e) ? wo(e, t, r) : go(e, t, r);
}
const Eo = (e) => e.map((t) => [t, mo(t.path)]), _o = (e, t) => {
  for (let r = 0; r < e.length; r++) {
    const [n, s] = e[r], i = s(t);
    if (i)
      return {
        params: i.params,
        route: n,
        path: t
      };
  }
};
window.initReact = ({
  onNavigate: e
} = {}) => {
  const t = document.createElement("div");
  document.body.appendChild(t);
  const r = new Yn(), n = Eo(tn);
  return Yt.createRoot(t).render(/* @__PURE__ */ K(fo, { eventEmitter: r, onNavigate: (s) => {
    e == null || e(s);
  } })), {
    match(s) {
      const i = _o(n, s);
      if (i)
        return {
          windowOptions: i.route.windowOptions,
          renderComponent: (o, u) => r.emit("add", o, i, u),
          destroyComponent: (o) => r.emit("destroy", o)
        };
    },
    getShortcuts() {
      return n.filter(([s]) => s.shortcut).map(([s]) => ({
        ...s.shortcut,
        route: s.path
      }));
    }
  };
};
export {
  Gn as F,
  uo as N,
  W as Q,
  io as S,
  At as a,
  Nt as b,
  Ao as c,
  Mo as d,
  Po as e,
  kn as f,
  Ts as g,
  Fo as h,
  ve as i,
  K as j,
  xo as k,
  Ft as l,
  ls as m,
  ie as n,
  tr as o,
  Bn as p,
  ur as q,
  hs as r,
  Co as s,
  fs as t,
  Lo as u,
  No as v
};
