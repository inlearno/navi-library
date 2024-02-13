var qt = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var g = (e, t, r) => (qt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), z = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, k = (e, t, r, n) => (qt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var vt = (e, t, r, n) => ({
  set _(s) {
    k(e, t, s, r);
  },
  get _() {
    return g(e, t, n);
  }
}), X = (e, t, r) => (qt(e, t, "access private method"), r);
import { h as $r, j as ct, E as Kr, c as Wr, a as or, G as Vr, b as In, T as Un } from "./mui-02912ce2.js";
import { g as Bn, c as Gr, r as U, R as B } from "./react-54946355.js";
import { F as qn } from "./icons-6b7f2986.js";
var zn = ct.Fragment;
function K(e, t, r) {
  return $r.call(t, "css") ? ct.jsx(Kr, Wr(e, t), r) : ct.jsx(e, t, r);
}
function St(e, t, r) {
  return $r.call(t, "css") ? ct.jsxs(Kr, Wr(e, t), r) : ct.jsxs(e, t, r);
}
var Jt = {};
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
})(Jt);
const Hn = [{
  id: "users",
  path: "/users",
  component: () => import("./UsersList-0ee67f9c.js"),
  windowOptions: {
    icon: Jt.faUsers,
    title: "Пользователи",
    width: 800
  },
  shortcut: {
    title: "Пользователи",
    icon: Jt.faUsers,
    group: "fourth",
    order: 100
  },
  notExposeToLibrary: !0
}];
var Jr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "brush", n = 384, s = 512, i = [], o = "f55d", u = "M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z";
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
  }, e.faBrush = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = s, e.ligatures = i, e.unicode = o, e.svgPathData = u, e.aliases = i;
})(Jr);
const Qn = [{
  id: "program-docs",
  path: "/program-docs",
  component: () => import("./ProgramDocsList-7e3c4c7c.js"),
  windowOptions: {
    title: "Конструктор документов программ",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Конструктор документов программ",
    icon: Jr.faBrush,
    color: "#ef4444",
    group: "general",
    order: 1300
  }
}, {
  id: "program-docs-constructor",
  path: "/program-docs/constructor/:id",
  component: () => import("./ProgramConstructor-e638444c.js"),
  windowOptions: {
    title: "Конструктор программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-docs-draft",
  path: "/program-docs/draft",
  component: () => import("./Draft-15c289d7.js"),
  windowOptions: {
    title: "Черновик программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-constructor-copy",
  path: "/program-docs/copy/:id",
  component: () => import("./CopyProgramForm-28cb153d.js"),
  windowOptions: {
    title: "Копирование программы",
    width: 700,
    height: 500
  }
}], Xr = [...Qn, ...Hn];
var Yr = { exports: {} };
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
    }, i = 10, o = typeof process == "object" && typeof process.nextTick == "function", u = typeof Symbol == "function", v = typeof Reflect == "object", p = typeof setImmediate == "function", l = p ? setImmediate : setTimeout, m = u ? v && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(a) {
      var c = Object.getOwnPropertyNames(a);
      return c.push.apply(c, Object.getOwnPropertySymbols(a)), c;
    } : Object.keys;
    function A() {
      this._events = {}, this._conf && E.call(this, this._conf);
    }
    function E(a) {
      a && (this._conf = a, a.delimiter && (this.delimiter = a.delimiter), a.maxListeners !== r && (this._maxListeners = a.maxListeners), a.wildcard && (this.wildcard = a.wildcard), a.newListener && (this._newListener = a.newListener), a.removeListener && (this._removeListener = a.removeListener), a.verboseMemoryLeak && (this.verboseMemoryLeak = a.verboseMemoryLeak), a.ignoreErrors && (this.ignoreErrors = a.ignoreErrors), this.wildcard && (this.listenerTree = {}));
    }
    function d(a, c) {
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
          for (var y = new Array(h); h--; )
            y[h] = arguments[h];
          return y;
      }
    };
    function b(a, c) {
      for (var f = {}, h, y = a.length, w = c ? c.length : 0, R = 0; R < y; R++)
        h = a[R], f[h] = R < w ? c[R] : r;
      return f;
    }
    function O(a, c, f) {
      this._emitter = a, this._target = c, this._listeners = {}, this._listenersCount = 0;
      var h, y;
      if ((f.on || f.off) && (h = f.on, y = f.off), c.addEventListener ? (h = c.addEventListener, y = c.removeEventListener) : c.addListener ? (h = c.addListener, y = c.removeListener) : c.on && (h = c.on, y = c.off), !h && !y)
        throw Error("target does not implement any known event API");
      if (typeof h != "function")
        throw TypeError("on method must be a function");
      if (typeof y != "function")
        throw TypeError("off method must be a function");
      this._on = h, this._off = y;
      var w = a._observers;
      w ? w.push(this) : a._observers = [this];
    }
    Object.assign(O.prototype, {
      subscribe: function(a, c, f) {
        var h = this, y = this._target, w = this._emitter, R = this._listeners, S = function() {
          var C = T.apply(null, arguments), x = {
            data: C,
            name: c,
            original: a
          };
          if (f) {
            var N = f.call(y, x);
            N !== !1 && w.emit.apply(w, [x.name].concat(C));
            return;
          }
          w.emit.apply(w, [c].concat(C));
        };
        if (R[a])
          throw Error("Event '" + a + "' is already listening");
        this._listenersCount++, w._newListener && w._removeListener && !h._onNewListener ? (this._onNewListener = function(C) {
          C === c && R[a] === null && (R[a] = S, h._on.call(y, a, S));
        }, w.on("newListener", this._onNewListener), this._onRemoveListener = function(C) {
          C === c && !w.hasListeners(C) && R[a] && (R[a] = null, h._off.call(y, a, S));
        }, R[a] = null, w.on("removeListener", this._onRemoveListener)) : (R[a] = S, h._on.call(y, a, S));
      },
      unsubscribe: function(a) {
        var c = this, f = this._listeners, h = this._emitter, y, w, R = this._off, S = this._target, C;
        if (a && typeof a != "string")
          throw TypeError("event must be a string");
        function x() {
          c._onNewListener && (h.off("newListener", c._onNewListener), h.off("removeListener", c._onRemoveListener), c._onNewListener = null, c._onRemoveListener = null);
          var N = j.call(h, c);
          h._observers.splice(N, 1);
        }
        if (a) {
          if (y = f[a], !y)
            return;
          R.call(S, a, y), delete f[a], --this._listenersCount || x();
        } else {
          for (w = m(f), C = w.length; C-- > 0; )
            a = w[C], R.call(S, a, f[a]);
          this._listeners = {}, this._listenersCount = 0, x();
        }
      }
    });
    function L(a, c, f, h) {
      var y = Object.assign({}, c);
      if (!a)
        return y;
      if (typeof a != "object")
        throw TypeError("options must be an object");
      var w = Object.keys(a), R = w.length, S, C, x;
      function N(Q) {
        throw Error('Invalid "' + S + '" option value' + (Q ? ". Reason: " + Q : ""));
      }
      for (var ee = 0; ee < R; ee++) {
        if (S = w[ee], !h && !n.call(c, S))
          throw Error('Unknown "' + S + '" option');
        C = a[S], C !== r && (x = f[S], y[S] = x ? x(C, N) : C);
      }
      return y;
    }
    function F(a, c) {
      return (typeof a != "function" || !a.hasOwnProperty("prototype")) && c("value must be a constructor"), a;
    }
    function P(a) {
      var c = "value must be type of " + a.join("|"), f = a.length, h = a[0], y = a[1];
      return f === 1 ? function(w, R) {
        if (typeof w === h)
          return w;
        R(c);
      } : f === 2 ? function(w, R) {
        var S = typeof w;
        if (S === h || S === y)
          return w;
        R(c);
      } : function(w, R) {
        for (var S = typeof w, C = f; C-- > 0; )
          if (S === a[C])
            return w;
        R(c);
      };
    }
    var M = P(["function"]), q = P(["object", "function"]);
    function V(a, c, f) {
      var h, y, w = 0, R, S = new a(function(C, x, N) {
        f = L(f, {
          timeout: 0,
          overload: !1
        }, {
          timeout: function(G, se) {
            return G *= 1, (typeof G != "number" || G < 0 || !Number.isFinite(G)) && se("timeout must be a positive number"), G;
          }
        }), h = !f.overload && typeof a.prototype.cancel == "function" && typeof N == "function";
        function ee() {
          y && (y = null), w && (clearTimeout(w), w = 0);
        }
        var Q = function(G) {
          ee(), C(G);
        }, $ = function(G) {
          ee(), x(G);
        };
        h ? c(Q, $, N) : (y = [function(G) {
          $(G || Error("canceled"));
        }], c(Q, $, function(G) {
          if (R)
            throw Error("Unable to subscribe on cancel event asynchronously");
          if (typeof G != "function")
            throw TypeError("onCancel callback must be a function");
          y.push(G);
        }), R = !0), f.timeout > 0 && (w = setTimeout(function() {
          var G = Error("timeout");
          G.code = "ETIMEDOUT", w = 0, S.cancel(G), x(G);
        }, f.timeout));
      });
      return h || (S.cancel = function(C) {
        if (y) {
          for (var x = y.length, N = 1; N < x; N++)
            y[N](C);
          y[0](C), y = null;
        }
      }), S;
    }
    function j(a) {
      var c = this._observers;
      if (!c)
        return -1;
      for (var f = c.length, h = 0; h < f; h++)
        if (c[h]._target === a)
          return h;
      return -1;
    }
    function I(a, c, f, h, y) {
      if (!f)
        return null;
      if (h === 0) {
        var w = typeof c;
        if (w === "string") {
          var R, S, C = 0, x = 0, N = this.delimiter, ee = N.length;
          if ((S = c.indexOf(N)) !== -1) {
            R = new Array(5);
            do
              R[C++] = c.slice(x, S), x = S + ee;
            while ((S = c.indexOf(N, x)) !== -1);
            R[C++] = c.slice(x), c = R, y = C;
          } else
            c = [c], y = 1;
        } else
          w === "object" ? y = c.length : (c = [c], y = 1);
      }
      var Q = null, $, G, se, It, Ut, nt = c[h], Bt = c[h + 1], Re, oe;
      if (h === y)
        f._listeners && (typeof f._listeners == "function" ? (a && a.push(f._listeners), Q = [f]) : (a && a.push.apply(a, f._listeners), Q = [f]));
      else if (nt === "*") {
        for (Re = m(f), S = Re.length; S-- > 0; )
          $ = Re[S], $ !== "_listeners" && (oe = I(a, c, f[$], h + 1, y), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else if (nt === "**") {
        for (Ut = h + 1 === y || h + 2 === y && Bt === "*", Ut && f._listeners && (Q = I(a, c, f, y, y)), Re = m(f), S = Re.length; S-- > 0; )
          $ = Re[S], $ !== "_listeners" && ($ === "*" || $ === "**" ? (f[$]._listeners && !Ut && (oe = I(a, c, f[$], y, y), oe && (Q ? Q.push.apply(Q, oe) : Q = oe)), oe = I(a, c, f[$], h, y)) : $ === Bt ? oe = I(a, c, f[$], h + 2, y) : oe = I(a, c, f[$], h, y), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else
        f[nt] && (Q = I(a, c, f[nt], h + 1, y));
      if (G = f["*"], G && I(a, c, G, h + 1, y), se = f["**"], se)
        if (h < y)
          for (se._listeners && I(a, c, se, y, y), Re = m(se), S = Re.length; S-- > 0; )
            $ = Re[S], $ !== "_listeners" && ($ === Bt ? I(a, c, se[$], h + 2, y) : $ === nt ? I(a, c, se[$], h + 1, y) : (It = {}, It[$] = se[$], I(a, c, { "**": It }, h + 1, y)));
        else
          se._listeners ? I(a, c, se, y, y) : se["*"] && se["*"]._listeners && I(a, c, se["*"], y, y);
      return Q;
    }
    function le(a, c, f) {
      var h = 0, y = 0, w, R = this.delimiter, S = R.length, C;
      if (typeof a == "string")
        if ((w = a.indexOf(R)) !== -1) {
          C = new Array(5);
          do
            C[h++] = a.slice(y, w), y = w + S;
          while ((w = a.indexOf(R, y)) !== -1);
          C[h++] = a.slice(y);
        } else
          C = [a], h = 1;
      else
        C = a, h = a.length;
      if (h > 1) {
        for (w = 0; w + 1 < h; w++)
          if (C[w] === "**" && C[w + 1] === "**")
            return;
      }
      var x = this.listenerTree, N;
      for (w = 0; w < h; w++)
        if (N = C[w], x = x[N] || (x[N] = {}), w === h - 1)
          return x._listeners ? (typeof x._listeners == "function" && (x._listeners = [x._listeners]), f ? x._listeners.unshift(c) : x._listeners.push(c), !x._listeners.warned && this._maxListeners > 0 && x._listeners.length > this._maxListeners && (x._listeners.warned = !0, d.call(this, x._listeners.length, N))) : x._listeners = c, !0;
      return !0;
    }
    function we(a, c, f, h) {
      for (var y = m(a), w = y.length, R, S, C, x = a._listeners, N; w-- > 0; )
        S = y[w], R = a[S], S === "_listeners" ? C = f : C = f ? f.concat(S) : [S], N = h || typeof S == "symbol", x && c.push(N ? C : C.join(this.delimiter)), typeof R == "object" && we.call(this, R, c, C, N);
      return c;
    }
    function te(a) {
      for (var c = m(a), f = c.length, h, y, w; f-- > 0; )
        y = c[f], h = a[y], h && (w = !0, y !== "_listeners" && !te(h) && delete a[y]);
      return w;
    }
    function fe(a, c, f) {
      this.emitter = a, this.event = c, this.listener = f;
    }
    fe.prototype.off = function() {
      return this.emitter.off(this.event, this.listener), this;
    };
    function re(a, c, f) {
      if (f === !0)
        y = !0;
      else if (f === !1)
        h = !0;
      else {
        if (!f || typeof f != "object")
          throw TypeError("options should be an object or true");
        var h = f.async, y = f.promisify, w = f.nextTick, R = f.objectify;
      }
      if (h || w || y) {
        var S = c, C = c._origin || c;
        if (w && !o)
          throw Error("process.nextTick is not supported");
        y === r && (y = c.constructor.name === "AsyncFunction"), c = function() {
          var x = arguments, N = this, ee = this.event;
          return y ? w ? Promise.resolve() : new Promise(function(Q) {
            l(Q);
          }).then(function() {
            return N.event = ee, S.apply(N, x);
          }) : (w ? process.nextTick : l)(function() {
            N.event = ee, S.apply(N, x);
          });
        }, c._async = !0, c._origin = C;
      }
      return [c, R ? new fe(this, a, c) : this];
    }
    function D(a) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, E.call(this, a);
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
        reducers: q
      });
      function y(w) {
        if (typeof w != "object")
          throw TypeError("events must be an object");
        var R = f.reducers, S = j.call(h, a), C;
        S === -1 ? C = new O(h, a, f) : C = h._observers[S];
        for (var x = m(w), N = x.length, ee, Q = typeof R == "function", $ = 0; $ < N; $++)
          ee = x[$], C.subscribe(
            ee,
            w[ee] || ee,
            Q ? R : R && R[ee]
          );
      }
      return s(c) ? y(b(c)) : y(typeof c == "string" ? b(c.split(/\s+/)) : c), this;
    }, D.prototype.stopListeningTo = function(a, c) {
      var f = this._observers;
      if (!f)
        return !1;
      var h = f.length, y, w = !1;
      if (a && typeof a != "object")
        throw TypeError("target should be an object");
      for (; h-- > 0; )
        y = f[h], (!a || y._target === a) && (y.unsubscribe(c), w = !0);
      return w;
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
    }, D.prototype._many = function(a, c, f, h, y) {
      var w = this;
      if (typeof f != "function")
        throw new Error("many only accepts instances of Function");
      function R() {
        return --c === 0 && w.off(a, R), f.apply(this, arguments);
      }
      return R._origin = f, this._on(a, R, h, y);
    }, D.prototype.emit = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || A.call(this);
      var a = arguments[0], c, f = this.wildcard, h, y, w, R, S;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return !1;
      if (f && (c = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (y = a.length, u) {
          for (w = 0; w < y; w++)
            if (typeof a[w] == "symbol") {
              S = !0;
              break;
            }
        }
        S || (a = a.join(this.delimiter));
      }
      var C = arguments.length, x;
      if (this._all && this._all.length)
        for (x = this._all.slice(), w = 0, y = x.length; w < y; w++)
          switch (this.event = a, C) {
            case 1:
              x[w].call(this, a);
              break;
            case 2:
              x[w].call(this, a, arguments[1]);
              break;
            case 3:
              x[w].call(this, a, arguments[1], arguments[2]);
              break;
            default:
              x[w].apply(this, arguments);
          }
      if (f)
        x = [], I.call(this, x, c, this.listenerTree, 0, y);
      else if (x = this._events[a], typeof x == "function") {
        switch (this.event = a, C) {
          case 1:
            x.call(this);
            break;
          case 2:
            x.call(this, arguments[1]);
            break;
          case 3:
            x.call(this, arguments[1], arguments[2]);
            break;
          default:
            for (h = new Array(C - 1), R = 1; R < C; R++)
              h[R - 1] = arguments[R];
            x.apply(this, h);
        }
        return !0;
      } else
        x && (x = x.slice());
      if (x && x.length) {
        if (C > 3)
          for (h = new Array(C - 1), R = 1; R < C; R++)
            h[R - 1] = arguments[R];
        for (w = 0, y = x.length; w < y; w++)
          switch (this.event = a, C) {
            case 1:
              x[w].call(this);
              break;
            case 2:
              x[w].call(this, arguments[1]);
              break;
            case 3:
              x[w].call(this, arguments[1], arguments[2]);
              break;
            default:
              x[w].apply(this, h);
          }
        return !0;
      } else if (!this.ignoreErrors && !this._all && a === "error")
        throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all;
    }, D.prototype.emitAsync = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || A.call(this);
      var a = arguments[0], c = this.wildcard, f, h, y, w, R, S;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return Promise.resolve([!1]);
      if (c && (f = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (w = a.length, u) {
          for (R = 0; R < w; R++)
            if (typeof a[R] == "symbol") {
              h = !0;
              break;
            }
        }
        h || (a = a.join(this.delimiter));
      }
      var C = [], x = arguments.length, N;
      if (this._all)
        for (R = 0, w = this._all.length; R < w; R++)
          switch (this.event = a, x) {
            case 1:
              C.push(this._all[R].call(this, a));
              break;
            case 2:
              C.push(this._all[R].call(this, a, arguments[1]));
              break;
            case 3:
              C.push(this._all[R].call(this, a, arguments[1], arguments[2]));
              break;
            default:
              C.push(this._all[R].apply(this, arguments));
          }
      if (c ? (N = [], I.call(this, N, f, this.listenerTree, 0)) : N = this._events[a], typeof N == "function")
        switch (this.event = a, x) {
          case 1:
            C.push(N.call(this));
            break;
          case 2:
            C.push(N.call(this, arguments[1]));
            break;
          case 3:
            C.push(N.call(this, arguments[1], arguments[2]));
            break;
          default:
            for (y = new Array(x - 1), S = 1; S < x; S++)
              y[S - 1] = arguments[S];
            C.push(N.apply(this, y));
        }
      else if (N && N.length) {
        if (N = N.slice(), x > 3)
          for (y = new Array(x - 1), S = 1; S < x; S++)
            y[S - 1] = arguments[S];
        for (R = 0, w = N.length; R < w; R++)
          switch (this.event = a, x) {
            case 1:
              C.push(N[R].call(this));
              break;
            case 2:
              C.push(N[R].call(this, arguments[1]));
              break;
            case 3:
              C.push(N[R].call(this, arguments[1], arguments[2]));
              break;
            default:
              C.push(N[R].apply(this, y));
          }
      } else if (!this.ignoreErrors && !this._all && a === "error")
        return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
      return Promise.all(C);
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
      var y = this, w;
      return h !== r && (w = re.call(this, a, c, h), c = w[0], y = w[1]), this._newListener && this.emit("newListener", a, c), this.wildcard ? (le.call(this, a, c, f), y) : (this._events[a] ? (typeof this._events[a] == "function" && (this._events[a] = [this._events[a]]), f ? this._events[a].unshift(c) : this._events[a].push(c), !this._events[a].warned && this._maxListeners > 0 && this._events[a].length > this._maxListeners && (this._events[a].warned = !0, d.call(this, this._events[a].length, a))) : this._events[a] = c, y);
    }, D.prototype.off = function(a, c) {
      if (typeof c != "function")
        throw new Error("removeListener only takes instances of Function");
      var f, h = [];
      if (this.wildcard) {
        var y = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        if (h = I.call(this, null, y, this.listenerTree, 0), !h)
          return this;
      } else {
        if (!this._events[a])
          return this;
        f = this._events[a], h.push({ _listeners: f });
      }
      for (var w = 0; w < h.length; w++) {
        var R = h[w];
        if (f = R._listeners, s(f)) {
          for (var S = -1, C = 0, x = f.length; C < x; C++)
            if (f[C] === c || f[C].listener && f[C].listener === c || f[C]._origin && f[C]._origin === c) {
              S = C;
              break;
            }
          if (S < 0)
            continue;
          return this.wildcard ? R._listeners.splice(S, 1) : this._events[a].splice(S, 1), f.length === 0 && (this.wildcard ? delete R._listeners : delete this._events[a]), this._removeListener && this.emit("removeListener", a, c), this;
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
        var c = I.call(this, null, a, this.listenerTree, 0), f, h;
        if (!c)
          return this;
        for (h = 0; h < c.length; h++)
          f = c[h], f._listeners = null;
        this.listenerTree && te(this.listenerTree);
      } else
        this._events && (this._events[a] = null);
      return this;
    }, D.prototype.listeners = function(a) {
      var c = this._events, f, h, y, w, R;
      if (a === r) {
        if (this.wildcard)
          throw Error("event name required for wildcard emitter");
        if (!c)
          return [];
        for (f = m(c), w = f.length, y = []; w-- > 0; )
          h = c[f[w]], typeof h == "function" ? y.push(h) : y.push.apply(y, h);
        return y;
      } else {
        if (this.wildcard) {
          if (R = this.listenerTree, !R)
            return [];
          var S = [], C = typeof a == "string" ? a.split(this.delimiter) : a.slice();
          return I.call(this, S, C, R, 0), S;
        }
        return c ? (h = c[a], h ? typeof h == "function" ? [h] : h : []) : [];
      }
    }, D.prototype.eventNames = function(a) {
      var c = this._events;
      return this.wildcard ? we.call(this, this.listenerTree, [], null, a) : c ? m(c) : [];
    }, D.prototype.listenerCount = function(a) {
      return this.listeners(a).length;
    }, D.prototype.hasListeners = function(a) {
      if (this.wildcard) {
        var c = [], f = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        return I.call(this, c, f, this.listenerTree, 0), c.length > 0;
      }
      var h = this._events, y = this._all;
      return !!(y && y.length || h && (a === r ? m(h).length : h[a]));
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
      }), V(c.Promise, function(y, w, R) {
        function S() {
          var C = c.filter;
          if (!(C && !C.apply(f, arguments)))
            if (f.off(a, S), c.handleError) {
              var x = arguments[0];
              x ? w(x) : y(T.apply(null, arguments).slice(1));
            } else
              y(T.apply(null, arguments));
        }
        R(function() {
          f.off(a, S);
        }), f._on(a, S, !1);
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
      return V(h, function(y, w, R) {
        var S;
        if (typeof a.addEventListener == "function") {
          S = function() {
            y(T.apply(null, arguments));
          }, R(function() {
            a.removeEventListener(c, S);
          }), a.addEventListener(
            c,
            S,
            { once: !0 }
          );
          return;
        }
        var C = function() {
          x && a.removeListener("error", x), y(T.apply(null, arguments));
        }, x;
        c !== "error" && (x = function(N) {
          a.removeListener(c, C), w(N);
        }, a.once("error", x)), R(function() {
          x && a.removeListener("error", x), a.removeListener(c, C);
        }), a.once(c, C);
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
})(Yr);
var $n = Yr.exports;
const Kn = /* @__PURE__ */ Bn($n);
var Xt = {}, yr = Gr;
Xt.createRoot = yr.createRoot, Xt.hydrateRoot = yr.hydrateRoot;
function Zr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Zr(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function ke() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Zr(e)) && (n && (n += " "), n += t);
  return n;
}
const ot = (e) => typeof e == "number" && !isNaN(e), ze = (e) => typeof e == "string", ae = (e) => typeof e == "function", bt = (e) => ze(e) || ae(e) ? e : null, zt = (e) => U.isValidElement(e) || ze(e) || ae(e) || ot(e);
function Wn(e, t, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: s } = e;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = n + "px", s.transition = `all ${r}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t, r);
    });
  });
}
function At(e) {
  let { enter: t, exit: r, appendPosition: n = !1, collapse: s = !0, collapseDuration: i = 300 } = e;
  return function(o) {
    let { children: u, position: v, preventExitTransition: p, done: l, nodeRef: m, isIn: A } = o;
    const E = n ? `${t}--${v}` : t, d = n ? `${r}--${v}` : r, T = U.useRef(0);
    return U.useLayoutEffect(() => {
      const b = m.current, O = E.split(" "), L = (F) => {
        F.target === m.current && (b.dispatchEvent(new Event("d")), b.removeEventListener("animationend", L), b.removeEventListener("animationcancel", L), T.current === 0 && F.type !== "animationcancel" && b.classList.remove(...O));
      };
      b.classList.add(...O), b.addEventListener("animationend", L), b.addEventListener("animationcancel", L);
    }, []), U.useEffect(() => {
      const b = m.current, O = () => {
        b.removeEventListener("animationend", O), s ? Wn(b, l, i) : l();
      };
      A || (p ? O() : (T.current = 1, b.className += ` ${d}`, b.addEventListener("animationend", O)));
    }, [A]), B.createElement(B.Fragment, null, u);
  };
}
function vr(e, t) {
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
  return B.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...n });
}, Ht = { info: function(e) {
  return B.createElement(gt, { ...e }, B.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return B.createElement(gt, { ...e }, B.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return B.createElement(gt, { ...e }, B.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return B.createElement(gt, { ...e }, B.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return B.createElement("div", { className: "Toastify__spinner" });
} };
function Vn(e) {
  const [, t] = U.useReducer((E) => E + 1, 0), [r, n] = U.useState([]), s = U.useRef(null), i = U.useRef(/* @__PURE__ */ new Map()).current, o = (E) => r.indexOf(E) !== -1, u = U.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: o, getToast: (E) => i.get(E) }).current;
  function v(E) {
    let { containerId: d } = E;
    const { limit: T } = u.props;
    !T || d && u.containerId !== d || (u.count -= u.queue.length, u.queue = []);
  }
  function p(E) {
    n((d) => E == null ? [] : d.filter((T) => T !== E));
  }
  function l() {
    const { toastContent: E, toastProps: d, staleId: T } = u.queue.shift();
    A(E, d, T);
  }
  function m(E, d) {
    let { delay: T, staleId: b, ...O } = d;
    if (!zt(E) || function(te) {
      return !s.current || u.props.enableMultiContainer && te.containerId !== u.props.containerId || i.has(te.toastId) && te.updateId == null;
    }(O))
      return;
    const { toastId: L, updateId: F, data: P } = O, { props: M } = u, q = () => p(L), V = F == null;
    V && u.count++;
    const j = { ...M, style: M.toastStyle, key: u.toastKey++, ...Object.fromEntries(Object.entries(O).filter((te) => {
      let [fe, re] = te;
      return re != null;
    })), toastId: L, updateId: F, data: P, closeToast: q, isIn: !1, className: bt(O.className || M.toastClassName), bodyClassName: bt(O.bodyClassName || M.bodyClassName), progressClassName: bt(O.progressClassName || M.progressClassName), autoClose: !O.isLoading && (I = O.autoClose, le = M.autoClose, I === !1 || ot(I) && I > 0 ? I : le), deleteToast() {
      const te = vr(i.get(L), "removed");
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
    var I, le;
    j.iconOut = function(te) {
      let { theme: fe, type: re, isLoading: D, icon: ne } = te, ce = null;
      const a = { theme: fe, type: re };
      return ne === !1 || (ae(ne) ? ce = ne(a) : U.isValidElement(ne) ? ce = U.cloneElement(ne, a) : ze(ne) || ot(ne) ? ce = ne : D ? ce = Ht.spinner() : ((c) => c in Ht)(re) && (ce = Ht[re](a))), ce;
    }(j), ae(O.onOpen) && (j.onOpen = O.onOpen), ae(O.onClose) && (j.onClose = O.onClose), j.closeButton = M.closeButton, O.closeButton === !1 || zt(O.closeButton) ? j.closeButton = O.closeButton : O.closeButton === !0 && (j.closeButton = !zt(M.closeButton) || M.closeButton);
    let we = E;
    U.isValidElement(E) && !ze(E.type) ? we = U.cloneElement(E, { closeToast: q, toastProps: j, data: P }) : ae(E) && (we = E({ closeToast: q, toastProps: j, data: P })), M.limit && M.limit > 0 && u.count > M.limit && V ? u.queue.push({ toastContent: we, toastProps: j, staleId: b }) : ot(T) ? setTimeout(() => {
      A(we, j, b);
    }, T) : A(we, j, b);
  }
  function A(E, d, T) {
    const { toastId: b } = d;
    T && i.delete(T);
    const O = { content: E, props: d };
    i.set(b, O), n((L) => [...L, b].filter((F) => F !== T)), me.emit(4, vr(O, O.props.updateId == null ? "added" : "updated"));
  }
  return U.useEffect(() => (u.containerId = e.containerId, me.cancelEmit(3).on(0, m).on(1, (E) => s.current && p(E)).on(5, v).emit(2, u), () => {
    i.clear(), me.emit(3, u);
  }), []), U.useEffect(() => {
    u.props = e, u.isToastActive = o, u.displayedToast = r.length;
  }), { getToastToRender: function(E) {
    const d = /* @__PURE__ */ new Map(), T = Array.from(i.values());
    return e.newestOnTop && T.reverse(), T.forEach((b) => {
      const { position: O } = b.props;
      d.has(O) || d.set(O, []), d.get(O).push(b);
    }), Array.from(d, (b) => E(b[0], b[1]));
  }, containerRef: s, isToastActive: o };
}
function gr(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function wr(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function Gn(e) {
  const [t, r] = U.useState(!1), [n, s] = U.useState(!1), i = U.useRef(null), o = U.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, u = U.useRef(e), { autoClose: v, pauseOnHover: p, closeToast: l, onClick: m, closeOnClick: A } = e;
  function E(P) {
    if (e.draggable) {
      P.nativeEvent.type === "touchstart" && P.nativeEvent.preventDefault(), o.didMove = !1, document.addEventListener("mousemove", O), document.addEventListener("mouseup", L), document.addEventListener("touchmove", O), document.addEventListener("touchend", L);
      const M = i.current;
      o.canCloseOnClick = !0, o.canDrag = !0, o.boundingRect = M.getBoundingClientRect(), M.style.transition = "", o.x = gr(P.nativeEvent), o.y = wr(P.nativeEvent), e.draggableDirection === "x" ? (o.start = o.x, o.removalDistance = M.offsetWidth * (e.draggablePercent / 100)) : (o.start = o.y, o.removalDistance = M.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }
  function d(P) {
    if (o.boundingRect) {
      const { top: M, bottom: q, left: V, right: j } = o.boundingRect;
      P.nativeEvent.type !== "touchend" && e.pauseOnHover && o.x >= V && o.x <= j && o.y >= M && o.y <= q ? b() : T();
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
    o.canDrag && M && (o.didMove = !0, t && b(), o.x = gr(P), o.y = wr(P), o.delta = e.draggableDirection === "x" ? o.x - o.start : o.y - o.start, o.start !== o.x && (o.canCloseOnClick = !1), M.style.transform = `translate${e.draggableDirection}(${o.delta}px)`, M.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
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
  U.useEffect(() => {
    u.current = e;
  }), U.useEffect(() => (i.current && i.current.addEventListener("d", T, { once: !0 }), ae(e.onOpen) && e.onOpen(U.isValidElement(e.children) && e.children.props), () => {
    const P = u.current;
    ae(P.onClose) && P.onClose(U.isValidElement(P.children) && P.children.props);
  }), []), U.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || b(), window.addEventListener("focus", T), window.addEventListener("blur", b)), () => {
    e.pauseOnFocusLoss && (window.removeEventListener("focus", T), window.removeEventListener("blur", b));
  }), [e.pauseOnFocusLoss]);
  const F = { onMouseDown: E, onTouchStart: E, onMouseUp: d, onTouchEnd: d };
  return v && p && (F.onMouseEnter = b, F.onMouseLeave = T), A && (F.onClick = (P) => {
    m && m(P), o.canCloseOnClick && l();
  }), { playToast: T, pauseToast: b, isRunning: t, preventExitTransition: n, toastRef: i, eventHandlers: F };
}
function en(e) {
  let { closeToast: t, theme: r, ariaLabel: n = "close" } = e;
  return B.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (s) => {
    s.stopPropagation(), t(s);
  }, "aria-label": n }, B.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, B.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function Jn(e) {
  let { delay: t, isRunning: r, closeToast: n, type: s = "default", hide: i, className: o, style: u, controlledProgress: v, progress: p, rtl: l, isIn: m, theme: A } = e;
  const E = i || v && p === 0, d = { ...u, animationDuration: `${t}ms`, animationPlayState: r ? "running" : "paused", opacity: E ? 0 : 1 };
  v && (d.transform = `scaleX(${p})`);
  const T = ke("Toastify__progress-bar", v ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${A}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": l }), b = ae(o) ? o({ rtl: l, type: s, defaultClassName: T }) : ke(T, o);
  return B.createElement("div", { role: "progressbar", "aria-hidden": E ? "true" : "false", "aria-label": "notification timer", className: b, style: d, [v && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: v && p < 1 ? null : () => {
    m && n();
  } });
}
const Xn = (e) => {
  const { isRunning: t, preventExitTransition: r, toastRef: n, eventHandlers: s } = Gn(e), { closeButton: i, children: o, autoClose: u, onClick: v, type: p, hideProgressBar: l, closeToast: m, transition: A, position: E, className: d, style: T, bodyClassName: b, bodyStyle: O, progressClassName: L, progressStyle: F, updateId: P, role: M, progress: q, rtl: V, toastId: j, deleteToast: I, isIn: le, isLoading: we, iconOut: te, closeOnClick: fe, theme: re } = e, D = ke("Toastify__toast", `Toastify__toast-theme--${re}`, `Toastify__toast--${p}`, { "Toastify__toast--rtl": V }, { "Toastify__toast--close-on-click": fe }), ne = ae(d) ? d({ rtl: V, position: E, type: p, defaultClassName: D }) : ke(D, d), ce = !!q || !u, a = { closeToast: m, type: p, theme: re };
  let c = null;
  return i === !1 || (c = ae(i) ? i(a) : U.isValidElement(i) ? U.cloneElement(i, a) : en(a)), B.createElement(A, { isIn: le, done: I, position: E, preventExitTransition: r, nodeRef: n }, B.createElement("div", { id: j, onClick: v, className: ne, ...s, style: T, ref: n }, B.createElement("div", { ...le && { role: M }, className: ae(b) ? b({ type: p }) : ke("Toastify__toast-body", b), style: O }, te != null && B.createElement("div", { className: ke("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !we }) }, te), B.createElement("div", null, o)), c, B.createElement(Jn, { ...P && !ce ? { key: `pb-${P}` } : {}, rtl: V, theme: re, delay: u, isRunning: t, isIn: le, closeToast: m, hide: l, type: p, style: F, className: L, controlledProgress: ce, progress: q || 0 })));
}, Pt = function(e, t) {
  return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, Yn = At(Pt("bounce", !0));
At(Pt("slide", !0));
At(Pt("zoom"));
At(Pt("flip"));
const Yt = U.forwardRef((e, t) => {
  const { getToastToRender: r, containerRef: n, isToastActive: s } = Vn(e), { className: i, style: o, rtl: u, containerId: v } = e;
  function p(l) {
    const m = ke("Toastify__toast-container", `Toastify__toast-container--${l}`, { "Toastify__toast-container--rtl": u });
    return ae(i) ? i({ position: l, rtl: u, defaultClassName: m }) : ke(m, bt(i));
  }
  return U.useEffect(() => {
    t && (t.current = n.current);
  }, []), B.createElement("div", { ref: n, className: "Toastify", id: v }, r((l, m) => {
    const A = m.length ? { ...o } : { ...o, pointerEvents: "none" };
    return B.createElement("div", { className: p(l), style: A, key: `container-${l}` }, m.map((E, d) => {
      let { content: T, props: b } = E;
      return B.createElement(Xn, { ...b, isIn: s(b.toastId), style: { ...b.style, "--nth": d + 1, "--len": m.length }, key: `toast-${b.key}` }, T);
    }));
  }));
});
Yt.displayName = "ToastContainer", Yt.defaultProps = { position: "top-right", transition: Yn, autoClose: 5e3, closeButton: en, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let Qt, je = /* @__PURE__ */ new Map(), it = [], Zn = 1;
function tn() {
  return "" + Zn++;
}
function es(e) {
  return e && (ze(e.toastId) || ot(e.toastId)) ? e.toastId : tn();
}
function at(e, t) {
  return je.size > 0 ? me.emit(0, e, t) : it.push({ content: e, options: t }), t.toastId;
}
function Rt(e, t) {
  return { ...t, type: t && t.type || e, toastId: es(t) };
}
function wt(e) {
  return (t, r) => at(t, Rt(e, r));
}
function W(e, t) {
  return at(e, Rt("default", t));
}
W.loading = (e, t) => at(e, Rt("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), W.promise = function(e, t, r) {
  let n, { pending: s, error: i, success: o } = t;
  s && (n = ze(s) ? W.loading(s, r) : W.loading(s.render, { ...r, ...s }));
  const u = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, v = (l, m, A) => {
    if (m == null)
      return void W.dismiss(n);
    const E = { type: l, ...u, ...r, data: A }, d = ze(m) ? { render: m } : m;
    return n ? W.update(n, { ...E, ...d }) : W(d.render, { ...E, ...d }), A;
  }, p = ae(e) ? e() : e;
  return p.then((l) => v("success", o, l)).catch((l) => v("error", i, l)), p;
}, W.success = wt("success"), W.info = wt("info"), W.error = wt("error"), W.warning = wt("warning"), W.warn = W.warning, W.dark = (e, t) => at(e, Rt("default", { theme: "dark", ...t })), W.dismiss = (e) => {
  je.size > 0 ? me.emit(1, e) : it = it.filter((t) => e != null && t.options.toastId !== e);
}, W.clearWaitingQueue = function(e) {
  return e === void 0 && (e = {}), me.emit(5, e);
}, W.isActive = (e) => {
  let t = !1;
  return je.forEach((r) => {
    r.isToastActive && r.isToastActive(e) && (t = !0);
  }), t;
}, W.update = function(e, t) {
  t === void 0 && (t = {}), setTimeout(() => {
    const r = function(n, s) {
      let { containerId: i } = s;
      const o = je.get(i || Qt);
      return o && o.getToast(n);
    }(e, t);
    if (r) {
      const { props: n, content: s } = r, i = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: tn() };
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
  Qt = e.containerId || e, je.set(Qt, e), it.forEach((t) => {
    me.emit(0, t.content, t.options);
  }), it = [];
}).on(3, (e) => {
  je.delete(e.containerId || e), je.size === 0 && me.off(0).off(1).off(5);
});
const ts = () => /* @__PURE__ */ K(Vr, { styles: or`*, ::before, ::after {
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
}` }), rs = () => /* @__PURE__ */ St(zn, { children: [
  /* @__PURE__ */ K(ts, {}),
  /* @__PURE__ */ K(Yt, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
var Lt = class {
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
}, Nt = typeof window > "u" || "Deno" in window;
function ve() {
}
function ns(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ss(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function is(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function br(e, t) {
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
      if (t.queryHash !== ar(o, t.options))
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
function Er(e, t) {
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
function ar(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ut)(e);
}
function ut(e) {
  return JSON.stringify(
    e,
    (t, r) => Zt(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function lt(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !lt(e[r], t[r])) : !1;
}
function rn(e, t) {
  if (e === t)
    return e;
  const r = _r(e) && _r(t);
  if (r || Zt(e) && Zt(t)) {
    const n = r ? e.length : Object.keys(e).length, s = r ? t : Object.keys(t), i = s.length, o = r ? [] : {};
    let u = 0;
    for (let v = 0; v < i; v++) {
      const p = r ? v : s[v];
      o[p] = rn(e[p], t[p]), o[p] === e[p] && u++;
    }
    return n === i && u === n ? e : o;
  }
  return t;
}
function go(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function _r(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Zt(e) {
  if (!Tr(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!Tr(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Tr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function nn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Or(e) {
  nn(0).then(e);
}
function os(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? rn(e, t) : t;
}
function wo(e) {
  return e;
}
function as(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function cs(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Ie, Pe, Qe, jr, us = (jr = class extends Lt {
  constructor() {
    super();
    z(this, Ie, void 0);
    z(this, Pe, void 0);
    z(this, Qe, void 0);
    k(this, Qe, (t) => {
      if (!Nt && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    g(this, Pe) || this.setEventListener(g(this, Qe));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = g(this, Pe)) == null || t.call(this), k(this, Pe, void 0));
  }
  setEventListener(t) {
    var r;
    k(this, Qe, t), (r = g(this, Pe)) == null || r.call(this), k(this, Pe, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    g(this, Ie) !== t && (k(this, Ie, t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    var t;
    return typeof g(this, Ie) == "boolean" ? g(this, Ie) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Ie = new WeakMap(), Pe = new WeakMap(), Qe = new WeakMap(), jr), er = new us(), $e, Le, Ke, Ir, ls = (Ir = class extends Lt {
  constructor() {
    super();
    z(this, $e, !0);
    z(this, Le, void 0);
    z(this, Ke, void 0);
    k(this, Ke, (t) => {
      if (!Nt && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    g(this, Le) || this.setEventListener(g(this, Ke));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = g(this, Le)) == null || t.call(this), k(this, Le, void 0));
  }
  setEventListener(t) {
    var r;
    k(this, Ke, t), (r = g(this, Le)) == null || r.call(this), k(this, Le, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    g(this, $e) !== t && (k(this, $e, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return g(this, $e);
  }
}, $e = new WeakMap(), Le = new WeakMap(), Ke = new WeakMap(), Ir), Ct = new ls();
function fs(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function cr(e) {
  return (e ?? "online") === "online" ? Ct.isOnline() : !0;
}
var sn = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function $t(e) {
  return e instanceof sn;
}
function on(e) {
  let t = !1, r = 0, n = !1, s, i, o;
  const u = new Promise((b, O) => {
    i = b, o = O;
  }), v = (b) => {
    var O;
    n || (E(new sn(b)), (O = e.abort) == null || O.call(e));
  }, p = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, m = () => !er.isFocused() || e.networkMode !== "always" && !Ct.isOnline(), A = (b) => {
    var O;
    n || (n = !0, (O = e.onSuccess) == null || O.call(e, b), s == null || s(), i(b));
  }, E = (b) => {
    var O;
    n || (n = !0, (O = e.onError) == null || O.call(e, b), s == null || s(), o(b));
  }, d = () => new Promise((b) => {
    var O;
    s = (L) => {
      const F = n || !m();
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
      var q;
      if (n)
        return;
      const L = e.retry ?? (Nt ? 0 : 3), F = e.retryDelay ?? fs, P = typeof F == "function" ? F(r, O) : F, M = L === !0 || typeof L == "number" && r < L || typeof L == "function" && L(r, O);
      if (t || !M) {
        E(O);
        return;
      }
      r++, (q = e.onFail) == null || q.call(e, r, O), nn(P).then(() => {
        if (m())
          return d();
      }).then(() => {
        t ? E(O) : T();
      });
    });
  };
  return cr(e.networkMode) ? T() : d().then(T), {
    promise: u,
    cancel: v,
    continue: () => (s == null ? void 0 : s()) ? u : Promise.resolve(),
    cancelRetry: p,
    continueRetry: l
  };
}
function hs() {
  let e = [], t = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  };
  const s = (l) => {
    let m;
    t++;
    try {
      m = l();
    } finally {
      t--, t || u();
    }
    return m;
  }, i = (l) => {
    t ? e.push(l) : Or(() => {
      r(l);
    });
  }, o = (l) => (...m) => {
    i(() => {
      l(...m);
    });
  }, u = () => {
    const l = e;
    e = [], l.length && Or(() => {
      n(() => {
        l.forEach((m) => {
          r(m);
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
var ie = hs(), Ue, Ur, an = (Ur = class {
  constructor() {
    z(this, Ue, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ss(this.gcTime) && k(this, Ue, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Nt ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    g(this, Ue) && (clearTimeout(g(this, Ue)), k(this, Ue, void 0));
  }
}, Ue = new WeakMap(), Ur), We, Ve, he, Ne, de, Z, ht, Be, Ge, Et, ge, Ce, Br, ds = (Br = class extends an {
  constructor(t) {
    super();
    z(this, Ge);
    z(this, ge);
    z(this, We, void 0);
    z(this, Ve, void 0);
    z(this, he, void 0);
    z(this, Ne, void 0);
    z(this, de, void 0);
    z(this, Z, void 0);
    z(this, ht, void 0);
    z(this, Be, void 0);
    k(this, Be, !1), k(this, ht, t.defaultOptions), X(this, Ge, Et).call(this, t.options), k(this, Z, []), k(this, he, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, k(this, We, t.state || ps(this.options)), this.state = g(this, We), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !g(this, Z).length && this.state.fetchStatus === "idle" && g(this, he).remove(this);
  }
  setData(t, r) {
    const n = os(this.state.data, t, this.options);
    return X(this, ge, Ce).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    X(this, ge, Ce).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n;
    const r = g(this, Ne);
    return (n = g(this, de)) == null || n.cancel(t), r ? r.then(ve).catch(ve) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(g(this, We));
  }
  isActive() {
    return g(this, Z).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || g(this, Z).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !is(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = g(this, Z).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = g(this, de)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = g(this, Z).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = g(this, de)) == null || r.continue();
  }
  addObserver(t) {
    g(this, Z).includes(t) || (g(this, Z).push(t), this.clearGcTimeout(), g(this, he).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    g(this, Z).includes(t) && (k(this, Z, g(this, Z).filter((r) => r !== t)), g(this, Z).length || (g(this, de) && (g(this, Be) ? g(this, de).cancel({ revert: !0 }) : g(this, de).cancelRetry()), this.scheduleGc()), g(this, he).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return g(this, Z).length;
  }
  invalidate() {
    this.state.isInvalidated || X(this, ge, Ce).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var p, l, m, A;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (g(this, Ne))
        return (p = g(this, de)) == null || p.continueRetry(), g(this, Ne);
    }
    if (t && X(this, Ge, Et).call(this, t), !this.options.queryFn) {
      const E = g(this, Z).find((d) => d.options.queryFn);
      E && X(this, Ge, Et).call(this, E.options);
    }
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (E) => {
      Object.defineProperty(E, "signal", {
        enumerable: !0,
        get: () => (k(this, Be, !0), n.signal)
      });
    };
    i(s);
    const o = () => this.options.queryFn ? (k(this, Be, !1), this.options.persister ? this.options.persister(
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
    ), k(this, Ve, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((m = u.fetchOptions) == null ? void 0 : m.meta)) && X(this, ge, Ce).call(this, { type: "fetch", meta: (A = u.fetchOptions) == null ? void 0 : A.meta });
    const v = (E) => {
      var d, T, b, O;
      $t(E) && E.silent || X(this, ge, Ce).call(this, {
        type: "error",
        error: E
      }), $t(E) || ((T = (d = g(this, he).config).onError) == null || T.call(
        d,
        E,
        this
      ), (O = (b = g(this, he).config).onSettled) == null || O.call(
        b,
        this.state.data,
        E,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return k(this, de, on({
      fn: u.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (E) => {
        var d, T, b, O;
        if (typeof E > "u") {
          v(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(E), (T = (d = g(this, he).config).onSuccess) == null || T.call(d, E, this), (O = (b = g(this, he).config).onSettled) == null || O.call(
          b,
          E,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: v,
      onFail: (E, d) => {
        X(this, ge, Ce).call(this, { type: "failed", failureCount: E, error: d });
      },
      onPause: () => {
        X(this, ge, Ce).call(this, { type: "pause" });
      },
      onContinue: () => {
        X(this, ge, Ce).call(this, { type: "continue" });
      },
      retry: u.options.retry,
      retryDelay: u.options.retryDelay,
      networkMode: u.options.networkMode
    })), k(this, Ne, g(this, de).promise), g(this, Ne);
  }
}, We = new WeakMap(), Ve = new WeakMap(), he = new WeakMap(), Ne = new WeakMap(), de = new WeakMap(), Z = new WeakMap(), ht = new WeakMap(), Be = new WeakMap(), Ge = new WeakSet(), Et = function(t) {
  this.options = { ...g(this, ht), ...t }, this.updateGcTime(this.options.gcTime);
}, ge = new WeakSet(), Ce = function(t) {
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
          fetchStatus: cr(this.options.networkMode) ? "fetching" : "paused",
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
        return $t(s) && s.revert && g(this, Ve) ? { ...g(this, Ve), fetchStatus: "idle" } : {
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
    g(this, Z).forEach((n) => {
      n.onQueryUpdate();
    }), g(this, he).notify({ query: this, type: "updated", action: t });
  });
}, Br);
function ps(e) {
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
var be, qr, ms = (qr = class extends Lt {
  constructor(t = {}) {
    super();
    z(this, be, void 0);
    this.config = t, k(this, be, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const s = r.queryKey, i = r.queryHash ?? ar(s, r);
    let o = this.get(i);
    return o || (o = new ds({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(t) {
    g(this, be).has(t.queryHash) || (g(this, be).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = g(this, be).get(t.queryHash);
    r && (t.destroy(), r === t && g(this, be).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return g(this, be).get(t);
  }
  getAll() {
    return [...g(this, be).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => br(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => br(t, n)) : r;
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
}, be = new WeakMap(), qr), Ee, dt, ue, Je, _e, Ae, zr, ys = (zr = class extends an {
  constructor(t) {
    super();
    z(this, _e);
    z(this, Ee, void 0);
    z(this, dt, void 0);
    z(this, ue, void 0);
    z(this, Je, void 0);
    this.mutationId = t.mutationId, k(this, dt, t.defaultOptions), k(this, ue, t.mutationCache), k(this, Ee, []), this.state = t.state || vs(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...g(this, dt), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    g(this, Ee).includes(t) || (g(this, Ee).push(t), this.clearGcTimeout(), g(this, ue).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    k(this, Ee, g(this, Ee).filter((r) => r !== t)), this.scheduleGc(), g(this, ue).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    g(this, Ee).length || (this.state.status === "pending" ? this.scheduleGc() : g(this, ue).remove(this));
  }
  continue() {
    var t;
    return ((t = g(this, Je)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, i, o, u, v, p, l, m, A, E, d, T, b, O, L, F, P, M, q, V;
    const r = () => (k(this, Je, on({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (j, I) => {
        X(this, _e, Ae).call(this, { type: "failed", failureCount: j, error: I });
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
    })), g(this, Je).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        X(this, _e, Ae).call(this, { type: "pending", variables: t }), await ((i = (s = g(this, ue).config).onMutate) == null ? void 0 : i.call(
          s,
          t,
          this
        ));
        const I = await ((u = (o = this.options).onMutate) == null ? void 0 : u.call(o, t));
        I !== this.state.context && X(this, _e, Ae).call(this, {
          type: "pending",
          context: I,
          variables: t
        });
      }
      const j = await r();
      return await ((p = (v = g(this, ue).config).onSuccess) == null ? void 0 : p.call(
        v,
        j,
        t,
        this.state.context,
        this
      )), await ((m = (l = this.options).onSuccess) == null ? void 0 : m.call(l, j, t, this.state.context)), await ((E = (A = g(this, ue).config).onSettled) == null ? void 0 : E.call(
        A,
        j,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((T = (d = this.options).onSettled) == null ? void 0 : T.call(d, j, null, t, this.state.context)), X(this, _e, Ae).call(this, { type: "success", data: j }), j;
    } catch (j) {
      try {
        throw await ((O = (b = g(this, ue).config).onError) == null ? void 0 : O.call(
          b,
          j,
          t,
          this.state.context,
          this
        )), await ((F = (L = this.options).onError) == null ? void 0 : F.call(
          L,
          j,
          t,
          this.state.context
        )), await ((M = (P = g(this, ue).config).onSettled) == null ? void 0 : M.call(
          P,
          void 0,
          j,
          this.state.variables,
          this.state.context,
          this
        )), await ((V = (q = this.options).onSettled) == null ? void 0 : V.call(
          q,
          void 0,
          j,
          t,
          this.state.context
        )), j;
      } finally {
        X(this, _e, Ae).call(this, { type: "error", error: j });
      }
    }
  }
}, Ee = new WeakMap(), dt = new WeakMap(), ue = new WeakMap(), Je = new WeakMap(), _e = new WeakSet(), Ae = function(t) {
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
          isPaused: !cr(this.options.networkMode),
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
    g(this, Ee).forEach((n) => {
      n.onMutationUpdate(t);
    }), g(this, ue).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, zr);
function vs() {
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
var pe, pt, qe, Hr, gs = (Hr = class extends Lt {
  constructor(t = {}) {
    super();
    z(this, pe, void 0);
    z(this, pt, void 0);
    z(this, qe, void 0);
    this.config = t, k(this, pe, []), k(this, pt, 0);
  }
  build(t, r, n) {
    const s = new ys({
      mutationCache: this,
      mutationId: ++vt(this, pt)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(t) {
    g(this, pe).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    k(this, pe, g(this, pe).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    ie.batch(() => {
      g(this, pe).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return g(this, pe);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return g(this, pe).find(
      (n) => Er(r, n)
    );
  }
  findAll(t = {}) {
    return g(this, pe).filter(
      (r) => Er(t, r)
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
    return k(this, qe, (g(this, qe) ?? Promise.resolve()).then(() => {
      const t = g(this, pe).filter((r) => r.state.isPaused);
      return ie.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(ve)),
          Promise.resolve()
        )
      );
    }).then(() => {
      k(this, qe, void 0);
    })), g(this, qe);
  }
}, pe = new WeakMap(), pt = new WeakMap(), qe = new WeakMap(), Hr);
function ws(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var d, T, b, O, L;
        const s = t.options, i = (b = (T = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : T.fetchMore) == null ? void 0 : b.direction, o = ((O = t.state.data) == null ? void 0 : O.pages) || [], u = ((L = t.state.data) == null ? void 0 : L.pageParams) || [], v = { pages: [], pageParams: [] };
        let p = !1;
        const l = (F) => {
          Object.defineProperty(F, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? p = !0 : t.signal.addEventListener("abort", () => {
              p = !0;
            }), t.signal)
          });
        }, m = t.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), A = async (F, P, M) => {
          if (p)
            return Promise.reject();
          if (P == null && F.pages.length)
            return Promise.resolve(F);
          const q = {
            queryKey: t.queryKey,
            pageParam: P,
            direction: M ? "backward" : "forward",
            meta: t.options.meta
          };
          l(q);
          const V = await m(
            q
          ), { maxPages: j } = t.options, I = M ? cs : as;
          return {
            pages: I(F.pages, V, j),
            pageParams: I(F.pageParams, P, j)
          };
        };
        let E;
        if (i && o.length) {
          const F = i === "backward", P = F ? bs : Rr, M = {
            pages: o,
            pageParams: u
          }, q = P(s, M);
          E = await A(M, q, F);
        } else {
          E = await A(
            v,
            u[0] ?? s.initialPageParam
          );
          const F = e ?? o.length;
          for (let P = 1; P < F; P++) {
            const M = Rr(s, E);
            E = await A(E, M);
          }
        }
        return E;
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
function Rr(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function bs(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var Y, Fe, Me, Xe, Ye, De, Ze, et, Qr, Es = (Qr = class {
  constructor(e = {}) {
    z(this, Y, void 0);
    z(this, Fe, void 0);
    z(this, Me, void 0);
    z(this, Xe, void 0);
    z(this, Ye, void 0);
    z(this, De, void 0);
    z(this, Ze, void 0);
    z(this, et, void 0);
    k(this, Y, e.queryCache || new ms()), k(this, Fe, e.mutationCache || new gs()), k(this, Me, e.defaultOptions || {}), k(this, Xe, /* @__PURE__ */ new Map()), k(this, Ye, /* @__PURE__ */ new Map()), k(this, De, 0);
  }
  mount() {
    vt(this, De)._++, g(this, De) === 1 && (k(this, Ze, er.subscribe(() => {
      er.isFocused() && (this.resumePausedMutations(), g(this, Y).onFocus());
    })), k(this, et, Ct.subscribe(() => {
      Ct.isOnline() && (this.resumePausedMutations(), g(this, Y).onOnline());
    })));
  }
  unmount() {
    var e, t;
    vt(this, De)._--, g(this, De) === 0 && ((e = g(this, Ze)) == null || e.call(this), k(this, Ze, void 0), (t = g(this, et)) == null || t.call(this), k(this, et, void 0));
  }
  isFetching(e) {
    return g(this, Y).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return g(this, Fe).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var t;
    return (t = g(this, Y).find({ queryKey: e })) == null ? void 0 : t.state.data;
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
    const n = g(this, Y).find({ queryKey: e }), s = n == null ? void 0 : n.state.data, i = ns(t, s);
    if (typeof i > "u")
      return;
    const o = this.defaultQueryOptions({ queryKey: e });
    return g(this, Y).build(this, o).setData(i, { ...r, manual: !0 });
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
    return (t = g(this, Y).find({ queryKey: e })) == null ? void 0 : t.state;
  }
  removeQueries(e) {
    const t = g(this, Y);
    ie.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = g(this, Y), n = {
      type: "active",
      ...e
    };
    return ie.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = ie.batch(
      () => g(this, Y).findAll(e).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(ve).catch(ve);
  }
  invalidateQueries(e = {}, t = {}) {
    return ie.batch(() => {
      if (g(this, Y).findAll(e).forEach((n) => {
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
      () => g(this, Y).findAll(e).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(ve)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(ve);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = g(this, Y).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ve).catch(ve);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = ws(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ve).catch(ve);
  }
  resumePausedMutations() {
    return g(this, Fe).resumePausedMutations();
  }
  getQueryCache() {
    return g(this, Y);
  }
  getMutationCache() {
    return g(this, Fe);
  }
  getDefaultOptions() {
    return g(this, Me);
  }
  setDefaultOptions(e) {
    k(this, Me, e);
  }
  setQueryDefaults(e, t) {
    g(this, Xe).set(ut(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...g(this, Xe).values()];
    let r = {};
    return t.forEach((n) => {
      lt(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    g(this, Ye).set(ut(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...g(this, Ye).values()];
    let r = {};
    return t.forEach((n) => {
      lt(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const t = {
      ...g(this, Me).queries,
      ...(e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = ar(
      t.queryKey,
      t
    )), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...g(this, Me).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    g(this, Y).clear(), g(this, Fe).clear();
  }
}, Y = new WeakMap(), Fe = new WeakMap(), Me = new WeakMap(), Xe = new WeakMap(), Ye = new WeakMap(), De = new WeakMap(), Ze = new WeakMap(), et = new WeakMap(), Qr), cn = U.createContext(
  void 0
), bo = (e) => {
  const t = U.useContext(cn);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, _s = ({
  client: e,
  children: t
}) => (U.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ U.createElement(cn.Provider, { value: e }, t));
const un = B.createContext(null), Ts = ({
  children: e,
  session: t,
  setSession: r
}) => /* @__PURE__ */ K(un.Provider, { value: {
  session: t,
  setSession: r
}, children: e }), Os = () => {
  const e = U.useContext(un);
  if (!e)
    throw new Error("useSession must be used within a SessionContextProvider");
  return [e.session, e.setSession];
};
function ln(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Rs } = Object.prototype, { getPrototypeOf: ur } = Object, Ft = ((e) => (t) => {
  const r = Rs.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => Ft(t) === e), Mt = (e) => (t) => typeof t === e, { isArray: rt } = Array, ft = Mt("undefined");
function Cs(e) {
  return e !== null && !ft(e) && e.constructor !== null && !ft(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fn = Oe("ArrayBuffer");
function xs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fn(e.buffer), t;
}
const Ss = Mt("string"), ye = Mt("function"), hn = Mt("number"), Dt = (e) => e !== null && typeof e == "object", As = (e) => e === !0 || e === !1, _t = (e) => {
  if (Ft(e) !== "object")
    return !1;
  const t = ur(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ps = Oe("Date"), Ls = Oe("File"), Ns = Oe("Blob"), Fs = Oe("FileList"), Ms = (e) => Dt(e) && ye(e.pipe), Ds = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = Ft(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, ks = Oe("URLSearchParams"), js = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function dn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const pn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), mn = (e) => !ft(e) && e !== pn;
function tr() {
  const { caseless: e } = mn(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && dn(t, s) || s;
    _t(t[i]) && _t(n) ? t[i] = tr(t[i], n) : _t(n) ? t[i] = tr({}, n) : rt(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && mt(arguments[n], r);
  return t;
}
const Is = (e, t, r, { allOwnKeys: n } = {}) => (mt(t, (s, i) => {
  r && ye(s) ? e[i] = ln(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), Us = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Bs = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, qs = (e, t, r, n) => {
  let s, i, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = r !== !1 && ur(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, zs = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Hs = (e) => {
  if (!e)
    return null;
  if (rt(e))
    return e;
  let t = e.length;
  if (!hn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Qs = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ur(Uint8Array)), $s = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, Ks = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ws = Oe("HTMLFormElement"), Vs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Cr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Gs = Oe("RegExp"), yn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  mt(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, Js = (e) => {
  yn(e, (t, r) => {
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
}, Xs = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return rt(e) ? n(e) : n(String(e).split(t)), r;
}, Ys = () => {
}, Zs = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Kt = "abcdefghijklmnopqrstuvwxyz", xr = "0123456789", vn = {
  DIGIT: xr,
  ALPHA: Kt,
  ALPHA_DIGIT: Kt + Kt.toUpperCase() + xr
}, ei = (e = 16, t = vn.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function ti(e) {
  return !!(e && ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ri = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Dt(n)) {
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
}, ni = Oe("AsyncFunction"), si = (e) => e && (Dt(e) || ye(e)) && ye(e.then) && ye(e.catch), _ = {
  isArray: rt,
  isArrayBuffer: fn,
  isBuffer: Cs,
  isFormData: Ds,
  isArrayBufferView: xs,
  isString: Ss,
  isNumber: hn,
  isBoolean: As,
  isObject: Dt,
  isPlainObject: _t,
  isUndefined: ft,
  isDate: Ps,
  isFile: Ls,
  isBlob: Ns,
  isRegExp: Gs,
  isFunction: ye,
  isStream: Ms,
  isURLSearchParams: ks,
  isTypedArray: Qs,
  isFileList: Fs,
  forEach: mt,
  merge: tr,
  extend: Is,
  trim: js,
  stripBOM: Us,
  inherits: Bs,
  toFlatObject: qs,
  kindOf: Ft,
  kindOfTest: Oe,
  endsWith: zs,
  toArray: Hs,
  forEachEntry: $s,
  matchAll: Ks,
  isHTMLForm: Ws,
  hasOwnProperty: Cr,
  hasOwnProp: Cr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yn,
  freezeMethods: Js,
  toObjectSet: Xs,
  toCamelCase: Vs,
  noop: Ys,
  toFiniteNumber: Zs,
  findKey: dn,
  global: pn,
  isContextDefined: mn,
  ALPHABET: vn,
  generateString: ei,
  isSpecCompliantForm: ti,
  toJSONObject: ri,
  isAsyncFn: ni,
  isThenable: si
};
function H(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
_.inherits(H, Error, {
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
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const gn = H.prototype, wn = {};
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
  wn[e] = { value: e };
});
Object.defineProperties(H, wn);
Object.defineProperty(gn, "isAxiosError", { value: !0 });
H.from = (e, t, r, n, s, i) => {
  const o = Object.create(gn);
  return _.toFlatObject(e, o, function(v) {
    return v !== Error.prototype;
  }, (u) => u !== "isAxiosError"), H.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const ii = null;
function rr(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function bn(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Sr(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = bn(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function oi(e) {
  return _.isArray(e) && !e.some(rr);
}
const ai = _.toFlatObject(_, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function kt(e, t, r) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = _.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(T, b) {
    return !_.isUndefined(b[T]);
  });
  const n = r.metaTokens, s = r.visitor || l, i = r.dots, o = r.indexes, v = (r.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t);
  if (!_.isFunction(s))
    throw new TypeError("visitor must be a function");
  function p(d) {
    if (d === null)
      return "";
    if (_.isDate(d))
      return d.toISOString();
    if (!v && _.isBlob(d))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(d) || _.isTypedArray(d) ? v && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, T, b) {
    let O = d;
    if (d && !b && typeof d == "object") {
      if (_.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), d = JSON.stringify(d);
      else if (_.isArray(d) && oi(d) || (_.isFileList(d) || _.endsWith(T, "[]")) && (O = _.toArray(d)))
        return T = bn(T), O.forEach(function(F, P) {
          !(_.isUndefined(F) || F === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Sr([T], P, i) : o === null ? T : T + "[]",
            p(F)
          );
        }), !1;
    }
    return rr(d) ? !0 : (t.append(Sr(b, T, i), p(d)), !1);
  }
  const m = [], A = Object.assign(ai, {
    defaultVisitor: l,
    convertValue: p,
    isVisitable: rr
  });
  function E(d, T) {
    if (!_.isUndefined(d)) {
      if (m.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      m.push(d), _.forEach(d, function(O, L) {
        (!(_.isUndefined(O) || O === null) && s.call(
          t,
          O,
          _.isString(L) ? L.trim() : L,
          T,
          A
        )) === !0 && E(O, T ? T.concat(L) : [L]);
      }), m.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Ar(e) {
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
function lr(e, t) {
  this._pairs = [], e && kt(e, this, t);
}
const En = lr.prototype;
En.append = function(t, r) {
  this._pairs.push([t, r]);
};
En.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ar);
  } : Ar;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function ci(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function _n(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ci, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = _.isURLSearchParams(t) ? t.toString() : new lr(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class ui {
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
    _.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Pr = ui, Tn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, li = typeof URLSearchParams < "u" ? URLSearchParams : lr, fi = typeof FormData < "u" ? FormData : null, hi = typeof Blob < "u" ? Blob : null, di = {
  isBrowser: !0,
  classes: {
    URLSearchParams: li,
    FormData: fi,
    Blob: hi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, On = typeof window < "u" && typeof document < "u", pi = ((e) => On && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), mi = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: On,
  hasStandardBrowserEnv: pi,
  hasStandardBrowserWebWorkerEnv: mi
}, Symbol.toStringTag, { value: "Module" })), Te = {
  ...yi,
  ...di
};
function vi(e, t) {
  return kt(e, new Te.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return Te.isNode && _.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function gi(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function wi(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Rn(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    const u = Number.isFinite(+o), v = i >= r.length;
    return o = !o && _.isArray(s) ? s.length : o, v ? (_.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !_.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && _.isArray(s[o]) && (s[o] = wi(s[o])), !u);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const r = {};
    return _.forEachEntry(e, (n, s) => {
      t(gi(n), s, r, 0);
    }), r;
  }
  return null;
}
function bi(e, t, r) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const fr = {
  transitional: Tn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = _.isObject(t);
    if (i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
      return s && s ? JSON.stringify(Rn(t)) : t;
    if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t))
      return t;
    if (_.isArrayBufferView(t))
      return t.buffer;
    if (_.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return vi(t, this.formSerializer).toString();
      if ((u = _.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const v = this.env && this.env.FormData;
        return kt(
          u ? { "files[]": t } : t,
          v && new v(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), bi(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || fr.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && _.isString(t) && (n && !this.responseType || s)) {
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
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  fr.headers[e] = {};
});
const hr = fr, Ei = _.toObjectSet([
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
]), _i = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && Ei[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Lr = Symbol("internals");
function st(e) {
  return e && String(e).trim().toLowerCase();
}
function Tt(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Tt) : String(e);
}
function Ti(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Oi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Wt(e, t, r, n, s) {
  if (_.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!_.isString(t)) {
    if (_.isString(n))
      return t.indexOf(n) !== -1;
    if (_.isRegExp(n))
      return n.test(t);
  }
}
function Ri(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ci(e, t) {
  const r = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class jt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(u, v, p) {
      const l = st(v);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const m = _.findKey(s, l);
      (!m || s[m] === void 0 || p === !0 || p === void 0 && s[m] !== !1) && (s[m || v] = Tt(u));
    }
    const o = (u, v) => _.forEach(u, (p, l) => i(p, l, v));
    return _.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : _.isString(t) && (t = t.trim()) && !Oi(t) ? o(_i(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = st(t), t) {
      const n = _.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Ti(s);
        if (_.isFunction(r))
          return r.call(this, s, n);
        if (_.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = st(t), t) {
      const n = _.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Wt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = st(o), o) {
        const u = _.findKey(n, o);
        u && (!r || Wt(n, n[u], u, r)) && (delete n[u], s = !0);
      }
    }
    return _.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Wt(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return _.forEach(this, (s, i) => {
      const o = _.findKey(n, i);
      if (o) {
        r[o] = Tt(s), delete r[i];
        return;
      }
      const u = t ? Ri(i) : String(i).trim();
      u !== i && delete r[i], r[u] = Tt(s), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && _.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Lr] = this[Lr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const u = st(o);
      n[u] || (Ci(s, o), n[u] = !0);
    }
    return _.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(jt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
_.freezeMethods(jt);
const xe = jt;
function Vt(e, t) {
  const r = this || hr, n = t || r, s = xe.from(n.headers);
  let i = n.data;
  return _.forEach(e, function(u) {
    i = u.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Cn(e) {
  return !!(e && e.__CANCEL__);
}
function yt(e, t, r) {
  H.call(this, e ?? "canceled", H.ERR_CANCELED, t, r), this.name = "CanceledError";
}
_.inherits(yt, H, {
  __CANCEL__: !0
});
function xi(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new H(
    "Request failed with status code " + r.status,
    [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Si = Te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, s, i, o, u) {
        const v = [];
        v.push(r + "=" + encodeURIComponent(n)), _.isNumber(s) && v.push("expires=" + new Date(s).toGMTString()), _.isString(i) && v.push("path=" + i), _.isString(o) && v.push("domain=" + o), u === !0 && v.push("secure"), document.cookie = v.join("; ");
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
function Ai(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pi(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xn(e, t) {
  return e && !Ai(t) ? Pi(e, t) : t;
}
const Li = Te.hasStandardBrowserEnv ? (
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
      const u = _.isString(o) ? s(o) : o;
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
function Ni(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Fi(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(v) {
    const p = Date.now(), l = n[i];
    o || (o = p), r[s] = v, n[s] = p;
    let m = i, A = 0;
    for (; m !== s; )
      A += r[m++], m = m % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), p - o < t)
      return;
    const E = l && p - l;
    return E ? Math.round(A * 1e3 / E) : void 0;
  };
}
function Nr(e, t) {
  let r = 0;
  const n = Fi(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, u = i - r, v = n(u), p = i <= o;
    r = i;
    const l = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: u,
      rate: v || void 0,
      estimated: v && o && p ? (o - i) / v : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Mi = typeof XMLHttpRequest < "u", Di = Mi && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = xe.from(e.headers).normalize(), o = e.responseType;
    let u;
    function v() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let p;
    if (_.isFormData(s)) {
      if (Te.hasStandardBrowserEnv || Te.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((p = i.getContentType()) !== !1) {
        const [d, ...T] = p ? p.split(";").map((b) => b.trim()).filter(Boolean) : [];
        i.setContentType([d || "multipart/form-data", ...T].join("; "));
      }
    }
    let l = new XMLHttpRequest();
    if (e.auth) {
      const d = e.auth.username || "", T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(d + ":" + T));
    }
    const m = xn(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), _n(m, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function A() {
      if (!l)
        return;
      const d = xe.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), b = {
        data: !o || o === "text" || o === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: d,
        config: e,
        request: l
      };
      xi(function(L) {
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
      const b = e.transitional || Tn;
      e.timeoutErrorMessage && (T = e.timeoutErrorMessage), n(new H(
        T,
        b.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
        e,
        l
      )), l = null;
    }, Te.hasStandardBrowserEnv) {
      const d = Li(m) && e.xsrfCookieName && Si.read(e.xsrfCookieName);
      d && i.set(e.xsrfHeaderName, d);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in l && _.forEach(i.toJSON(), function(T, b) {
      l.setRequestHeader(b, T);
    }), _.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), o && o !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", Nr(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Nr(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (d) => {
      l && (n(!d || d.type ? new yt(null, e, l) : d), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const E = Ni(m);
    if (E && Te.protocols.indexOf(E) === -1) {
      n(new H("Unsupported protocol " + E + ":", H.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(s || null);
  });
}, nr = {
  http: ii,
  xhr: Di
};
_.forEach(nr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Fr = (e) => `- ${e}`, ki = (e) => _.isFunction(e) || e === null || e === !1, Sn = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !ki(r) && (n = nr[(o = String(r)).toLowerCase()], n === void 0))
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
` + i.map(Fr).join(`
`) : " " + Fr(i[0]) : "as no adapter specified";
      throw new H(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: nr
};
function Gt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yt(null, e);
}
function Mr(e) {
  return Gt(e), e.headers = xe.from(e.headers), e.data = Vt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Sn.getAdapter(e.adapter || hr.adapter)(e).then(function(n) {
    return Gt(e), n.data = Vt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = xe.from(n.headers), n;
  }, function(n) {
    return Cn(n) || (Gt(e), n && n.response && (n.response.data = Vt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = xe.from(n.response.headers))), Promise.reject(n);
  });
}
const Dr = (e) => e instanceof xe ? e.toJSON() : e;
function tt(e, t) {
  t = t || {};
  const r = {};
  function n(p, l, m) {
    return _.isPlainObject(p) && _.isPlainObject(l) ? _.merge.call({ caseless: m }, p, l) : _.isPlainObject(l) ? _.merge({}, l) : _.isArray(l) ? l.slice() : l;
  }
  function s(p, l, m) {
    if (_.isUndefined(l)) {
      if (!_.isUndefined(p))
        return n(void 0, p, m);
    } else
      return n(p, l, m);
  }
  function i(p, l) {
    if (!_.isUndefined(l))
      return n(void 0, l);
  }
  function o(p, l) {
    if (_.isUndefined(l)) {
      if (!_.isUndefined(p))
        return n(void 0, p);
    } else
      return n(void 0, l);
  }
  function u(p, l, m) {
    if (m in t)
      return n(p, l);
    if (m in e)
      return n(void 0, p);
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
    headers: (p, l) => s(Dr(p), Dr(l), !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const m = v[l] || s, A = m(e[l], t[l], l);
    _.isUndefined(A) && m !== u || (r[l] = A);
  }), r;
}
const An = "1.6.1", dr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  dr[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const kr = {};
dr.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + An + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, u) => {
    if (t === !1)
      throw new H(
        s(o, " has been removed" + (r ? " in " + r : "")),
        H.ERR_DEPRECATED
      );
    return r && !kr[o] && (kr[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, u) : !0;
  };
};
function ji(e, t, r) {
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
const sr = {
  assertOptions: ji,
  validators: dr
}, Se = sr.validators;
class xt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Pr(),
      response: new Pr()
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
    n !== void 0 && sr.assertOptions(n, {
      silentJSONParsing: Se.transitional(Se.boolean),
      forcedJSONParsing: Se.transitional(Se.boolean),
      clarifyTimeoutError: Se.transitional(Se.boolean)
    }, !1), s != null && (_.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : sr.assertOptions(s, {
      encode: Se.function,
      serialize: Se.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && _.merge(
      i.common,
      i[r.method]
    );
    i && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), r.headers = xe.concat(o, i);
    const u = [];
    let v = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (v = v && T.synchronous, u.unshift(T.fulfilled, T.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(T) {
      p.push(T.fulfilled, T.rejected);
    });
    let l, m = 0, A;
    if (!v) {
      const d = [Mr.bind(this), void 0];
      for (d.unshift.apply(d, u), d.push.apply(d, p), A = d.length, l = Promise.resolve(r); m < A; )
        l = l.then(d[m++], d[m++]);
      return l;
    }
    A = u.length;
    let E = r;
    for (m = 0; m < A; ) {
      const d = u[m++], T = u[m++];
      try {
        E = d(E);
      } catch (b) {
        T.call(this, b);
        break;
      }
    }
    try {
      l = Mr.call(this, E);
    } catch (d) {
      return Promise.reject(d);
    }
    for (m = 0, A = p.length; m < A; )
      l = l.then(p[m++], p[m++]);
    return l;
  }
  getUri(t) {
    t = tt(this.defaults, t);
    const r = xn(t.baseURL, t.url);
    return _n(r, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function(t) {
  xt.prototype[t] = function(r, n) {
    return this.request(tt(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(t) {
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
const Ot = xt;
class pr {
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
      token: new pr(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ii = pr;
function Ui(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Bi(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const ir = {
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
Object.entries(ir).forEach(([e, t]) => {
  ir[t] = e;
});
const qi = ir;
function Pn(e) {
  const t = new Ot(e), r = ln(Ot.prototype.request, t);
  return _.extend(r, Ot.prototype, t, { allOwnKeys: !0 }), _.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Pn(tt(e, s));
  }, r;
}
const J = Pn(hr);
J.Axios = Ot;
J.CanceledError = yt;
J.CancelToken = Ii;
J.isCancel = Cn;
J.VERSION = An;
J.toFormData = kt;
J.AxiosError = H;
J.Cancel = J.CanceledError;
J.all = function(t) {
  return Promise.all(t);
};
J.spread = Ui;
J.isAxiosError = Bi;
J.mergeConfig = tt;
J.AxiosHeaders = xe;
J.formToJSON = (e) => Rn(_.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = Sn.getAdapter;
J.HttpStatusCode = qi;
J.default = J;
const Ln = J, Nn = B.createContext(null), Eo = () => B.useContext(Nn), zi = ({
  children: e,
  baseURL: t,
  refreshSession: r,
  onSessionExpired: n
}) => {
  const [s, i] = Os();
  let o = null;
  const u = U.useMemo(() => {
    const v = Ln.create({
      baseURL: t,
      headers: {
        Authorization: s ? `Bearer ${s.access_token}` : void 0,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    return v.interceptors.response.use((p) => p, async (p) => {
      var m, A, E;
      const l = (d) => v({
        ...p.config,
        headers: {
          ...p.config.headers,
          Authorization: `Bearer ${d}`
        }
      });
      if (s && !s.locked && ((m = p.response) == null ? void 0 : m.status) === 401)
        if (o)
          try {
            const d = await o;
            return l(d.access_token);
          } catch {
            throw new Error("Need relogin");
          }
        else {
          o = r({
            refreshToken: s.refresh_token,
            accessToken: s.access_token,
            baseURL: t
          });
          try {
            const d = await o;
            return i(d), l(d.access_token);
          } catch {
            W.warn("Сессия истекла", {
              toastId: "session-stale"
            }), n();
          } finally {
            o = null;
          }
        }
      throw ((A = p.response) == null ? void 0 : A.status) === 500 && W.error(/* @__PURE__ */ St("div", { children: [
        /* @__PURE__ */ K("div", { css: {
          fontWeight: "500"
        }, children: "Ошибка сервера" }),
        /* @__PURE__ */ K("div", { css: {
          padding: "0.25rem",
          fontSize: "0.75rem",
          lineHeight: "1rem"
        }, children: ((E = p.response.data) == null ? void 0 : E.message) || p.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      }), p;
    }), v;
  }, [s == null ? void 0 : s.access_token]);
  return /* @__PURE__ */ K(Nn.Provider, { value: {
    client: u
  }, children: e });
}, Fn = B.createContext(null), Hi = () => {
  const e = B.useContext(Fn);
  if (!e)
    throw new Error("useRouteContext must be used within a RouteContextProvider");
  return e;
}, Qi = ({
  children: e,
  routes: t
}) => /* @__PURE__ */ K(Fn.Provider, { value: {
  routes: t
}, children: e }), $i = async ({
  baseURL: e,
  refreshToken: t,
  accessToken: r
}) => {
  const {
    data: {
      data: n
    }
  } = await Ln.post("/api/user/refresh", {
    refresh_token: t
  }, {
    baseURL: e,
    headers: {
      Authorization: `Bearer ${r}`,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  return n;
}, Ki = new Es({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    },
    mutations: {
      retry: !1
    }
  }
}), Wi = In({
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
}), Vi = ({
  children: e,
  refreshSession: t,
  onSessionExpired: r,
  updateSession: n,
  session: s
}) => /* @__PURE__ */ K(Ts, { session: s, setSession: n, children: /* @__PURE__ */ K(Un, { theme: Wi, children: /* @__PURE__ */ K(zi, { refreshSession: t || $i, onSessionExpired: r, children: /* @__PURE__ */ K(_s, { client: Ki, children: /* @__PURE__ */ K(Qi, { routes: Xr, children: e }) }) }) }) }), Gi = () => {
  const {
    routes: e
  } = Hi();
  return e;
};
var Mn = {};
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
})(Mn);
const Ji = ({
  children: e,
  spinning: t = !0
}) => t ? /* @__PURE__ */ St("div", { css: {
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
  }, children: /* @__PURE__ */ K(qn, { icon: Mn.faCircleNotch, css: [{
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, or`
                font-size: 32px;
              `], spin: !0 }) })
] }) : e, Xi = ({
  id: e
}) => {
  const t = Gi(), r = U.useMemo(() => {
    const {
      component: n,
      ...s
    } = t.find((i) => i.id === e) || {};
    if (!n)
      throw new Error(`Route with id ${e} not found`);
    return {
      ...s,
      Component: U.lazy(() => n())
    };
  }, [e, t]);
  return /* @__PURE__ */ K(U.Suspense, { fallback: /* @__PURE__ */ K(Ji, {}), children: /* @__PURE__ */ K(r.Component, {}) });
}, Dn = B.createContext(null), _o = () => {
  const e = B.useContext(Dn);
  if (!e)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return e;
}, Yi = ({
  children: e,
  ...t
}) => {
  const [r, n] = B.useState();
  return /* @__PURE__ */ K(Dn.Provider, { value: {
    ...t,
    state: r,
    setState: n
  }, children: e });
}, Zi = ({
  el: e,
  match: t,
  window: r
}) => Gr.createPortal(/* @__PURE__ */ K(Yi, { width: 0, height: 0, title: "", position: {
  x: 0,
  y: 0
}, maximized: !0, folded: !0, focused: !0, params: t.params, focus: () => r == null ? void 0 : r.focus(), blur: () => r == null ? void 0 : r.blur(), maximize: () => r == null ? void 0 : r.maximize(), minimize: () => r == null ? void 0 : r.restore(), fold: () => r == null ? void 0 : r.minimize(), close: () => {
  setTimeout(() => {
    r == null || r.close();
  }, 50);
}, updatePosition: ({
  x: n,
  y: s
}) => r == null ? void 0 : r.showAt(n, s), setTitle: (n) => r == null ? void 0 : r.setTitle(n), setWidth: (n) => r == null ? void 0 : r.setWidth(n), setHeight: (n) => r == null ? void 0 : r.setHeight(n), children: /* @__PURE__ */ K(Xi, { id: t.route.id }) }), e), eo = B.createContext(null), to = ({
  children: e,
  navigate: t
}) => /* @__PURE__ */ K(eo.Provider, { value: {
  navigate: t
}, children: e }), ro = ({
  eventEmitter: e,
  onNavigate: t,
  session: r,
  onSessionUpdate: n,
  onSessionExpired: s
}) => {
  const [i, o] = B.useState([]), [u, v] = B.useState(r);
  return B.useEffect(() => (e.on("update-session", (p) => {
    v(p);
  }), e.on("add", (p, l, m) => {
    o((A) => [...A, {
      el: p,
      match: l,
      window: m
    }]);
  }), e.on("destroy", (p) => {
    o((l) => l.filter((m) => m.el !== p));
  }), () => {
    e.removeAllListeners("add"), e.removeAllListeners("destroy");
  }), [e]), /* @__PURE__ */ K(Vi, { session: u, updateSession: (p) => {
    n(p), v(p);
  }, onSessionExpired: s, children: /* @__PURE__ */ St(to, { navigate: t, children: [
    /* @__PURE__ */ K(rs, {}),
    /* @__PURE__ */ K(Vr, { styles: or`
            .MuiPopper-root {
              z-index: 20000;
            }
            .inl-modal {
              z-index: 20000;
            }
          ` }),
    i.map((p) => /* @__PURE__ */ K(Zi, { ...p }, p.match.route.id))
  ] }) });
};
function no(e) {
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
function kn(e, t) {
  t === void 0 && (t = {});
  for (var r = no(e), n = t.prefixes, s = n === void 0 ? "./" : n, i = "[^".concat(He(t.delimiter || "/#?"), "]+?"), o = [], u = 0, v = 0, p = "", l = function(q) {
    if (v < r.length && r[v].type === q)
      return r[v++].value;
  }, m = function(q) {
    var V = l(q);
    if (V !== void 0)
      return V;
    var j = r[v], I = j.type, le = j.index;
    throw new TypeError("Unexpected ".concat(I, " at ").concat(le, ", expected ").concat(q));
  }, A = function() {
    for (var q = "", V; V = l("CHAR") || l("ESCAPED_CHAR"); )
      q += V;
    return q;
  }; v < r.length; ) {
    var E = l("CHAR"), d = l("NAME"), T = l("PATTERN");
    if (d || T) {
      var b = E || "";
      s.indexOf(b) === -1 && (p += b, b = ""), p && (o.push(p), p = ""), o.push({
        name: d || u++,
        prefix: b,
        suffix: "",
        pattern: T || i,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    var O = E || l("ESCAPED_CHAR");
    if (O) {
      p += O;
      continue;
    }
    p && (o.push(p), p = "");
    var L = l("OPEN");
    if (L) {
      var b = A(), F = l("NAME") || "", P = l("PATTERN") || "", M = A();
      m("CLOSE"), o.push({
        name: F || (P ? u++ : ""),
        pattern: F && !P ? i : P,
        prefix: b,
        suffix: M,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    m("END");
  }
  return o;
}
function To(e, t) {
  return so(kn(e, t), t);
}
function so(e, t) {
  t === void 0 && (t = {});
  var r = mr(t), n = t.encode, s = n === void 0 ? function(v) {
    return v;
  } : n, i = t.validate, o = i === void 0 ? !0 : i, u = e.map(function(v) {
    if (typeof v == "object")
      return new RegExp("^(?:".concat(v.pattern, ")$"), r);
  });
  return function(v) {
    for (var p = "", l = 0; l < e.length; l++) {
      var m = e[l];
      if (typeof m == "string") {
        p += m;
        continue;
      }
      var A = v ? v[m.name] : void 0, E = m.modifier === "?" || m.modifier === "*", d = m.modifier === "*" || m.modifier === "+";
      if (Array.isArray(A)) {
        if (!d)
          throw new TypeError('Expected "'.concat(m.name, '" to not repeat, but got an array'));
        if (A.length === 0) {
          if (E)
            continue;
          throw new TypeError('Expected "'.concat(m.name, '" to not be empty'));
        }
        for (var T = 0; T < A.length; T++) {
          var b = s(A[T], m);
          if (o && !u[l].test(b))
            throw new TypeError('Expected all "'.concat(m.name, '" to match "').concat(m.pattern, '", but got "').concat(b, '"'));
          p += m.prefix + b + m.suffix;
        }
        continue;
      }
      if (typeof A == "string" || typeof A == "number") {
        var b = s(String(A), m);
        if (o && !u[l].test(b))
          throw new TypeError('Expected "'.concat(m.name, '" to match "').concat(m.pattern, '", but got "').concat(b, '"'));
        p += m.prefix + b + m.suffix;
        continue;
      }
      if (!E) {
        var O = d ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(m.name, '" to be ').concat(O));
      }
    }
    return p;
  };
}
function io(e, t) {
  var r = [], n = jn(e, r, t);
  return oo(n, r, t);
}
function oo(e, t, r) {
  r === void 0 && (r = {});
  var n = r.decode, s = n === void 0 ? function(i) {
    return i;
  } : n;
  return function(i) {
    var o = e.exec(i);
    if (!o)
      return !1;
    for (var u = o[0], v = o.index, p = /* @__PURE__ */ Object.create(null), l = function(A) {
      if (o[A] === void 0)
        return "continue";
      var E = t[A - 1];
      E.modifier === "*" || E.modifier === "+" ? p[E.name] = o[A].split(E.prefix + E.suffix).map(function(d) {
        return s(d, E);
      }) : p[E.name] = s(o[A], E);
    }, m = 1; m < o.length; m++)
      l(m);
    return { path: u, index: v, params: p };
  };
}
function He(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function mr(e) {
  return e && e.sensitive ? "" : "i";
}
function ao(e, t) {
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
function co(e, t, r) {
  var n = e.map(function(s) {
    return jn(s, t, r).source;
  });
  return new RegExp("(?:".concat(n.join("|"), ")"), mr(r));
}
function uo(e, t, r) {
  return lo(kn(e, r), t, r);
}
function lo(e, t, r) {
  r === void 0 && (r = {});
  for (var n = r.strict, s = n === void 0 ? !1 : n, i = r.start, o = i === void 0 ? !0 : i, u = r.end, v = u === void 0 ? !0 : u, p = r.encode, l = p === void 0 ? function(le) {
    return le;
  } : p, m = r.delimiter, A = m === void 0 ? "/#?" : m, E = r.endsWith, d = E === void 0 ? "" : E, T = "[".concat(He(d), "]|$"), b = "[".concat(He(A), "]"), O = o ? "^" : "", L = 0, F = e; L < F.length; L++) {
    var P = F[L];
    if (typeof P == "string")
      O += He(l(P));
    else {
      var M = He(l(P.prefix)), q = He(l(P.suffix));
      if (P.pattern)
        if (t && t.push(P), M || q)
          if (P.modifier === "+" || P.modifier === "*") {
            var V = P.modifier === "*" ? "?" : "";
            O += "(?:".concat(M, "((?:").concat(P.pattern, ")(?:").concat(q).concat(M, "(?:").concat(P.pattern, "))*)").concat(q, ")").concat(V);
          } else
            O += "(?:".concat(M, "(").concat(P.pattern, ")").concat(q, ")").concat(P.modifier);
        else
          P.modifier === "+" || P.modifier === "*" ? O += "((?:".concat(P.pattern, ")").concat(P.modifier, ")") : O += "(".concat(P.pattern, ")").concat(P.modifier);
      else
        O += "(?:".concat(M).concat(q, ")").concat(P.modifier);
    }
  }
  if (v)
    s || (O += "".concat(b, "?")), O += r.endsWith ? "(?=".concat(T, ")") : "$";
  else {
    var j = e[e.length - 1], I = typeof j == "string" ? b.indexOf(j[j.length - 1]) > -1 : j === void 0;
    s || (O += "(?:".concat(b, "(?=").concat(T, "))?")), I || (O += "(?=".concat(b, "|").concat(T, ")"));
  }
  return new RegExp(O, mr(r));
}
function jn(e, t, r) {
  return e instanceof RegExp ? ao(e, t) : Array.isArray(e) ? co(e, t, r) : uo(e, t, r);
}
const fo = (e) => e.map((t) => [t, io(t.path)]), ho = (e, t) => {
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
  session: e,
  onNavigate: t,
  onSessionExpired: r,
  onSessionUpdate: n
} = {}) => {
  const s = document.createElement("div");
  document.body.appendChild(s);
  const i = new Kn(), o = fo(Xr.filter((u) => !u.notExposeToLibrary));
  return Xt.createRoot(s).render(/* @__PURE__ */ K(ro, { session: e, eventEmitter: i, onNavigate: (u) => {
    t == null || t(u);
  }, onSessionExpired: () => {
    r == null || r();
  }, onSessionUpdate: (u) => {
    n == null || n(u);
  } })), {
    updateSession: (u) => {
      i.emit("update-session", u);
    },
    match(u) {
      const v = ho(o, u);
      if (v)
        return {
          windowOptions: v.route.windowOptions,
          renderComponent: (p, l) => i.emit("add", p, v, l),
          destroyComponent: (p) => i.emit("destroy", p)
        };
    },
    getShortcuts() {
      return o.filter(([u]) => u.shortcut).map(([u]) => ({
        ...u.shortcut,
        route: u.path
      }));
    }
  };
};
export {
  zn as F,
  eo as N,
  W as Q,
  Ji as S,
  St as a,
  Lt as b,
  To as c,
  _o as d,
  ve as e,
  Mn as f,
  vs as g,
  ss as h,
  Nt as i,
  K as j,
  wo as k,
  er as l,
  cr as m,
  ie as n,
  Eo as o,
  kn as p,
  os as r,
  go as s,
  is as t,
  bo as u
};
