var oi = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var x = (e, t, r) => (oi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ie = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, K = (e, t, r, n) => (oi(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var dn = (e, t, r, n) => ({
  set _(i) {
    K(e, t, i, r);
  },
  get _() {
    return x(e, t, n);
  }
}), Ie = (e, t, r) => (oi(e, t, "access private method"), r);
import { h as Do, j as Be, E as Ro, c as Po, a as Xi, G as ko, b as pc, T as mc, n as Zi, d as vc, t as Ta, e as Fn } from "./mui-4f485058.js";
import { g as ea, c as Rr, r as P, R as F, d as pn } from "./react-6f5a8403.js";
import { P as R, F as yc } from "./icons-ad9f8a73.js";
var gc = Be.Fragment;
function ve(e, t, r) {
  return Do.call(t, "css") ? Be.jsx(Ro, Po(e, t), r) : Be.jsx(e, t, r);
}
function Bn(e, t, r) {
  return Do.call(t, "css") ? Be.jsxs(Ro, Po(e, t), r) : Be.jsxs(e, t, r);
}
var Ci = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "users", n = 640, i = 512, a = [], o = "f0c0", s = "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      i,
      a,
      o,
      s
    ]
  }, e.faUsers = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = i, e.ligatures = a, e.unicode = o, e.svgPathData = s, e.aliases = a;
})(Ci);
const bc = [{
  id: "users",
  path: "/users",
  component: () => import("./UsersList-e30140e1.js"),
  windowOptions: {
    icon: Ci.faUsers,
    title: "Пользователи",
    width: 800
  },
  shortcut: {
    title: "Пользователи",
    icon: Ci.faUsers,
    group: "fourth",
    order: 100
  },
  notExposeToLibrary: !0
}];
var No = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "book", n = 448, i = 512, a = [128212], o = "f02d", s = "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      i,
      a,
      o,
      s
    ]
  }, e.faBook = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = i, e.ligatures = a, e.unicode = o, e.svgPathData = s, e.aliases = a;
})(No);
var Lo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "brush", n = 384, i = 512, a = [], o = "f55d", s = "M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      i,
      a,
      o,
      s
    ]
  }, e.faBrush = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = i, e.ligatures = a, e.unicode = o, e.svgPathData = s, e.aliases = a;
})(Lo);
const wc = [{
  id: "program-docs",
  path: "/program-docs",
  component: () => import("./ProgramDocsList-bfbd5d57.js"),
  windowOptions: {
    title: "Конструктор документов программ",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Конструктор документов программ",
    icon: Lo.faBrush,
    color: "#dc2626",
    group: "general",
    order: 1300
  }
}, {
  id: "program-docs-constructor",
  path: "/program-docs/constructor/:id",
  component: () => import("./ProgramConstructor-03b02772.js"),
  windowOptions: {
    title: "Конструктор программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-docs-draft",
  path: "/program-docs/draft",
  component: () => import("./Draft-4529f5a3.js"),
  windowOptions: {
    title: "Черновик программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-constructor-copy",
  path: "/program-docs/copy/:id",
  component: () => import("./CopyProgramForm-bb2c9937.js"),
  windowOptions: {
    title: "Копирование программы",
    width: 700,
    height: 500
  }
}, {
  id: "program-constructor-dicts",
  path: "/program-docs/dicts",
  component: () => import("./Dictionaries-2db50c8b.js"),
  windowOptions: {
    title: "Справочники",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Справочники конструктор программы",
    icon: No.faBook,
    color: "#ef4444",
    group: "general",
    order: 1350
  }
}], Mo = [...wc, ...bc];
var jo = { exports: {} };
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
(function(e, t) {
  (function(r) {
    var n = Object.hasOwnProperty, i = Array.isArray ? Array.isArray : function(m) {
      return Object.prototype.toString.call(m) === "[object Array]";
    }, a = 10, o = typeof process == "object" && typeof process.nextTick == "function", s = typeof Symbol == "function", l = typeof Reflect == "object", u = typeof setImmediate == "function", h = u ? setImmediate : setTimeout, c = s ? l && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(f) {
      var m = Object.getOwnPropertyNames(f);
      return m.push.apply(m, Object.getOwnPropertySymbols(f)), m;
    } : Object.keys;
    function y() {
      this._events = {}, this._conf && p.call(this, this._conf);
    }
    function p(f) {
      f && (this._conf = f, f.delimiter && (this.delimiter = f.delimiter), f.maxListeners !== r && (this._maxListeners = f.maxListeners), f.wildcard && (this.wildcard = f.wildcard), f.newListener && (this._newListener = f.newListener), f.removeListener && (this._removeListener = f.removeListener), f.verboseMemoryLeak && (this.verboseMemoryLeak = f.verboseMemoryLeak), f.ignoreErrors && (this.ignoreErrors = f.ignoreErrors), this.wildcard && (this.listenerTree = {}));
    }
    function d(f, m) {
      var b = "(node) warning: possible EventEmitter memory leak detected. " + f + " listeners added. Use emitter.setMaxListeners() to increase limit.";
      if (this.verboseMemoryLeak && (b += " Event name: " + m + "."), typeof process < "u" && process.emitWarning) {
        var E = new Error(b);
        E.name = "MaxListenersExceededWarning", E.emitter = this, E.count = f, process.emitWarning(E);
      } else
        console.error(b), console.trace && console.trace();
    }
    var v = function(f, m, b) {
      var E = arguments.length;
      switch (E) {
        case 0:
          return [];
        case 1:
          return [f];
        case 2:
          return [f, m];
        case 3:
          return [f, m, b];
        default:
          for (var A = new Array(E); E--; )
            A[E] = arguments[E];
          return A;
      }
    };
    function g(f, m) {
      for (var b = {}, E, A = f.length, _ = m ? m.length : 0, N = 0; N < A; N++)
        E = f[N], b[E] = N < _ ? m[N] : r;
      return b;
    }
    function w(f, m, b) {
      this._emitter = f, this._target = m, this._listeners = {}, this._listenersCount = 0;
      var E, A;
      if ((b.on || b.off) && (E = b.on, A = b.off), m.addEventListener ? (E = m.addEventListener, A = m.removeEventListener) : m.addListener ? (E = m.addListener, A = m.removeListener) : m.on && (E = m.on, A = m.off), !E && !A)
        throw Error("target does not implement any known event API");
      if (typeof E != "function")
        throw TypeError("on method must be a function");
      if (typeof A != "function")
        throw TypeError("off method must be a function");
      this._on = E, this._off = A;
      var _ = f._observers;
      _ ? _.push(this) : f._observers = [this];
    }
    Object.assign(w.prototype, {
      subscribe: function(f, m, b) {
        var E = this, A = this._target, _ = this._emitter, N = this._listeners, I = function() {
          var L = v.apply(null, arguments), M = {
            data: L,
            name: m,
            original: f
          };
          if (b) {
            var U = b.call(A, M);
            U !== !1 && _.emit.apply(_, [M.name].concat(L));
            return;
          }
          _.emit.apply(_, [m].concat(L));
        };
        if (N[f])
          throw Error("Event '" + f + "' is already listening");
        this._listenersCount++, _._newListener && _._removeListener && !E._onNewListener ? (this._onNewListener = function(L) {
          L === m && N[f] === null && (N[f] = I, E._on.call(A, f, I));
        }, _.on("newListener", this._onNewListener), this._onRemoveListener = function(L) {
          L === m && !_.hasListeners(L) && N[f] && (N[f] = null, E._off.call(A, f, I));
        }, N[f] = null, _.on("removeListener", this._onRemoveListener)) : (N[f] = I, E._on.call(A, f, I));
      },
      unsubscribe: function(f) {
        var m = this, b = this._listeners, E = this._emitter, A, _, N = this._off, I = this._target, L;
        if (f && typeof f != "string")
          throw TypeError("event must be a string");
        function M() {
          m._onNewListener && (E.off("newListener", m._onNewListener), E.off("removeListener", m._onRemoveListener), m._onNewListener = null, m._onRemoveListener = null);
          var U = H.call(E, m);
          E._observers.splice(U, 1);
        }
        if (f) {
          if (A = b[f], !A)
            return;
          N.call(I, f, A), delete b[f], --this._listenersCount || M();
        } else {
          for (_ = c(b), L = _.length; L-- > 0; )
            f = _[L], N.call(I, f, b[f]);
          this._listeners = {}, this._listenersCount = 0, M();
        }
      }
    });
    function O(f, m, b, E) {
      var A = Object.assign({}, m);
      if (!f)
        return A;
      if (typeof f != "object")
        throw TypeError("options must be an object");
      var _ = Object.keys(f), N = _.length, I, L, M;
      function U(Z) {
        throw Error('Invalid "' + I + '" option value' + (Z ? ". Reason: " + Z : ""));
      }
      for (var fe = 0; fe < N; fe++) {
        if (I = _[fe], !E && !n.call(m, I))
          throw Error('Unknown "' + I + '" option');
        L = f[I], L !== r && (M = b[I], A[I] = M ? M(L, U) : L);
      }
      return A;
    }
    function T(f, m) {
      return (typeof f != "function" || !f.hasOwnProperty("prototype")) && m("value must be a constructor"), f;
    }
    function D(f) {
      var m = "value must be type of " + f.join("|"), b = f.length, E = f[0], A = f[1];
      return b === 1 ? function(_, N) {
        if (typeof _ === E)
          return _;
        N(m);
      } : b === 2 ? function(_, N) {
        var I = typeof _;
        if (I === E || I === A)
          return _;
        N(m);
      } : function(_, N) {
        for (var I = typeof _, L = b; L-- > 0; )
          if (I === f[L])
            return _;
        N(m);
      };
    }
    var B = D(["function"]), $ = D(["object", "function"]);
    function Q(f, m, b) {
      var E, A, _ = 0, N, I = new f(function(L, M, U) {
        b = O(b, {
          timeout: 0,
          overload: !1
        }, {
          timeout: function(ue, xe) {
            return ue *= 1, (typeof ue != "number" || ue < 0 || !Number.isFinite(ue)) && xe("timeout must be a positive number"), ue;
          }
        }), E = !b.overload && typeof f.prototype.cancel == "function" && typeof U == "function";
        function fe() {
          A && (A = null), _ && (clearTimeout(_), _ = 0);
        }
        var Z = function(ue) {
          fe(), L(ue);
        }, te = function(ue) {
          fe(), M(ue);
        };
        E ? m(Z, te, U) : (A = [function(ue) {
          te(ue || Error("canceled"));
        }], m(Z, te, function(ue) {
          if (N)
            throw Error("Unable to subscribe on cancel event asynchronously");
          if (typeof ue != "function")
            throw TypeError("onCancel callback must be a function");
          A.push(ue);
        }), N = !0), b.timeout > 0 && (_ = setTimeout(function() {
          var ue = Error("timeout");
          ue.code = "ETIMEDOUT", _ = 0, I.cancel(ue), M(ue);
        }, b.timeout));
      });
      return E || (I.cancel = function(L) {
        if (A) {
          for (var M = A.length, U = 1; U < M; U++)
            A[U](L);
          A[0](L), A = null;
        }
      }), I;
    }
    function H(f) {
      var m = this._observers;
      if (!m)
        return -1;
      for (var b = m.length, E = 0; E < b; E++)
        if (m[E]._target === f)
          return E;
      return -1;
    }
    function Y(f, m, b, E, A) {
      if (!b)
        return null;
      if (E === 0) {
        var _ = typeof m;
        if (_ === "string") {
          var N, I, L = 0, M = 0, U = this.delimiter, fe = U.length;
          if ((I = m.indexOf(U)) !== -1) {
            N = new Array(5);
            do
              N[L++] = m.slice(M, I), M = I + fe;
            while ((I = m.indexOf(U, M)) !== -1);
            N[L++] = m.slice(M), m = N, A = L;
          } else
            m = [m], A = 1;
        } else
          _ === "object" ? A = m.length : (m = [m], A = 1);
      }
      var Z = null, te, ue, xe, ae, We, Se = m[E], Ye = m[E + 1], ke, we;
      if (E === A)
        b._listeners && (typeof b._listeners == "function" ? (f && f.push(b._listeners), Z = [b]) : (f && f.push.apply(f, b._listeners), Z = [b]));
      else if (Se === "*") {
        for (ke = c(b), I = ke.length; I-- > 0; )
          te = ke[I], te !== "_listeners" && (we = Y(f, m, b[te], E + 1, A), we && (Z ? Z.push.apply(Z, we) : Z = we));
        return Z;
      } else if (Se === "**") {
        for (We = E + 1 === A || E + 2 === A && Ye === "*", We && b._listeners && (Z = Y(f, m, b, A, A)), ke = c(b), I = ke.length; I-- > 0; )
          te = ke[I], te !== "_listeners" && (te === "*" || te === "**" ? (b[te]._listeners && !We && (we = Y(f, m, b[te], A, A), we && (Z ? Z.push.apply(Z, we) : Z = we)), we = Y(f, m, b[te], E, A)) : te === Ye ? we = Y(f, m, b[te], E + 2, A) : we = Y(f, m, b[te], E, A), we && (Z ? Z.push.apply(Z, we) : Z = we));
        return Z;
      } else
        b[Se] && (Z = Y(f, m, b[Se], E + 1, A));
      if (ue = b["*"], ue && Y(f, m, ue, E + 1, A), xe = b["**"], xe)
        if (E < A)
          for (xe._listeners && Y(f, m, xe, A, A), ke = c(xe), I = ke.length; I-- > 0; )
            te = ke[I], te !== "_listeners" && (te === Ye ? Y(f, m, xe[te], E + 2, A) : te === Se ? Y(f, m, xe[te], E + 1, A) : (ae = {}, ae[te] = xe[te], Y(f, m, { "**": ae }, E + 1, A)));
        else
          xe._listeners ? Y(f, m, xe, A, A) : xe["*"] && xe["*"]._listeners && Y(f, m, xe["*"], A, A);
      return Z;
    }
    function se(f, m, b) {
      var E = 0, A = 0, _, N = this.delimiter, I = N.length, L;
      if (typeof f == "string")
        if ((_ = f.indexOf(N)) !== -1) {
          L = new Array(5);
          do
            L[E++] = f.slice(A, _), A = _ + I;
          while ((_ = f.indexOf(N, A)) !== -1);
          L[E++] = f.slice(A);
        } else
          L = [f], E = 1;
      else
        L = f, E = f.length;
      if (E > 1) {
        for (_ = 0; _ + 1 < E; _++)
          if (L[_] === "**" && L[_ + 1] === "**")
            return;
      }
      var M = this.listenerTree, U;
      for (_ = 0; _ < E; _++)
        if (U = L[_], M = M[U] || (M[U] = {}), _ === E - 1)
          return M._listeners ? (typeof M._listeners == "function" && (M._listeners = [M._listeners]), b ? M._listeners.unshift(m) : M._listeners.push(m), !M._listeners.warned && this._maxListeners > 0 && M._listeners.length > this._maxListeners && (M._listeners.warned = !0, d.call(this, M._listeners.length, U))) : M._listeners = m, !0;
      return !0;
    }
    function ne(f, m, b, E) {
      for (var A = c(f), _ = A.length, N, I, L, M = f._listeners, U; _-- > 0; )
        I = A[_], N = f[I], I === "_listeners" ? L = b : L = b ? b.concat(I) : [I], U = E || typeof I == "symbol", M && m.push(U ? L : L.join(this.delimiter)), typeof N == "object" && ne.call(this, N, m, L, U);
      return m;
    }
    function ce(f) {
      for (var m = c(f), b = m.length, E, A, _; b-- > 0; )
        A = m[b], E = f[A], E && (_ = !0, A !== "_listeners" && !ce(E) && delete f[A]);
      return _;
    }
    function ye(f, m, b) {
      this.emitter = f, this.event = m, this.listener = b;
    }
    ye.prototype.off = function() {
      return this.emitter.off(this.event, this.listener), this;
    };
    function de(f, m, b) {
      if (b === !0)
        A = !0;
      else if (b === !1)
        E = !0;
      else {
        if (!b || typeof b != "object")
          throw TypeError("options should be an object or true");
        var E = b.async, A = b.promisify, _ = b.nextTick, N = b.objectify;
      }
      if (E || _ || A) {
        var I = m, L = m._origin || m;
        if (_ && !o)
          throw Error("process.nextTick is not supported");
        A === r && (A = m.constructor.name === "AsyncFunction"), m = function() {
          var M = arguments, U = this, fe = this.event;
          return A ? _ ? Promise.resolve() : new Promise(function(Z) {
            h(Z);
          }).then(function() {
            return U.event = fe, I.apply(U, M);
          }) : (_ ? process.nextTick : h)(function() {
            U.event = fe, I.apply(U, M);
          });
        }, m._async = !0, m._origin = L;
      }
      return [m, N ? new ye(this, f, m) : this];
    }
    function V(f) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, p.call(this, f);
    }
    V.EventEmitter2 = V, V.prototype.listenTo = function(f, m, b) {
      if (typeof f != "object")
        throw TypeError("target musts be an object");
      var E = this;
      b = O(b, {
        on: r,
        off: r,
        reducers: r
      }, {
        on: B,
        off: B,
        reducers: $
      });
      function A(_) {
        if (typeof _ != "object")
          throw TypeError("events must be an object");
        var N = b.reducers, I = H.call(E, f), L;
        I === -1 ? L = new w(E, f, b) : L = E._observers[I];
        for (var M = c(_), U = M.length, fe, Z = typeof N == "function", te = 0; te < U; te++)
          fe = M[te], L.subscribe(
            fe,
            _[fe] || fe,
            Z ? N : N && N[fe]
          );
      }
      return i(m) ? A(g(m)) : A(typeof m == "string" ? g(m.split(/\s+/)) : m), this;
    }, V.prototype.stopListeningTo = function(f, m) {
      var b = this._observers;
      if (!b)
        return !1;
      var E = b.length, A, _ = !1;
      if (f && typeof f != "object")
        throw TypeError("target should be an object");
      for (; E-- > 0; )
        A = b[E], (!f || A._target === f) && (A.unsubscribe(m), _ = !0);
      return _;
    }, V.prototype.delimiter = ".", V.prototype.setMaxListeners = function(f) {
      f !== r && (this._maxListeners = f, this._conf || (this._conf = {}), this._conf.maxListeners = f);
    }, V.prototype.getMaxListeners = function() {
      return this._maxListeners;
    }, V.prototype.event = "", V.prototype.once = function(f, m, b) {
      return this._once(f, m, !1, b);
    }, V.prototype.prependOnceListener = function(f, m, b) {
      return this._once(f, m, !0, b);
    }, V.prototype._once = function(f, m, b, E) {
      return this._many(f, 1, m, b, E);
    }, V.prototype.many = function(f, m, b, E) {
      return this._many(f, m, b, !1, E);
    }, V.prototype.prependMany = function(f, m, b, E) {
      return this._many(f, m, b, !0, E);
    }, V.prototype._many = function(f, m, b, E, A) {
      var _ = this;
      if (typeof b != "function")
        throw new Error("many only accepts instances of Function");
      function N() {
        return --m === 0 && _.off(f, N), b.apply(this, arguments);
      }
      return N._origin = b, this._on(f, N, E, A);
    }, V.prototype.emit = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || y.call(this);
      var f = arguments[0], m, b = this.wildcard, E, A, _, N, I;
      if (f === "newListener" && !this._newListener && !this._events.newListener)
        return !1;
      if (b && (m = f, f !== "newListener" && f !== "removeListener" && typeof f == "object")) {
        if (A = f.length, s) {
          for (_ = 0; _ < A; _++)
            if (typeof f[_] == "symbol") {
              I = !0;
              break;
            }
        }
        I || (f = f.join(this.delimiter));
      }
      var L = arguments.length, M;
      if (this._all && this._all.length)
        for (M = this._all.slice(), _ = 0, A = M.length; _ < A; _++)
          switch (this.event = f, L) {
            case 1:
              M[_].call(this, f);
              break;
            case 2:
              M[_].call(this, f, arguments[1]);
              break;
            case 3:
              M[_].call(this, f, arguments[1], arguments[2]);
              break;
            default:
              M[_].apply(this, arguments);
          }
      if (b)
        M = [], Y.call(this, M, m, this.listenerTree, 0, A);
      else if (M = this._events[f], typeof M == "function") {
        switch (this.event = f, L) {
          case 1:
            M.call(this);
            break;
          case 2:
            M.call(this, arguments[1]);
            break;
          case 3:
            M.call(this, arguments[1], arguments[2]);
            break;
          default:
            for (E = new Array(L - 1), N = 1; N < L; N++)
              E[N - 1] = arguments[N];
            M.apply(this, E);
        }
        return !0;
      } else
        M && (M = M.slice());
      if (M && M.length) {
        if (L > 3)
          for (E = new Array(L - 1), N = 1; N < L; N++)
            E[N - 1] = arguments[N];
        for (_ = 0, A = M.length; _ < A; _++)
          switch (this.event = f, L) {
            case 1:
              M[_].call(this);
              break;
            case 2:
              M[_].call(this, arguments[1]);
              break;
            case 3:
              M[_].call(this, arguments[1], arguments[2]);
              break;
            default:
              M[_].apply(this, E);
          }
        return !0;
      } else if (!this.ignoreErrors && !this._all && f === "error")
        throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all;
    }, V.prototype.emitAsync = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || y.call(this);
      var f = arguments[0], m = this.wildcard, b, E, A, _, N, I;
      if (f === "newListener" && !this._newListener && !this._events.newListener)
        return Promise.resolve([!1]);
      if (m && (b = f, f !== "newListener" && f !== "removeListener" && typeof f == "object")) {
        if (_ = f.length, s) {
          for (N = 0; N < _; N++)
            if (typeof f[N] == "symbol") {
              E = !0;
              break;
            }
        }
        E || (f = f.join(this.delimiter));
      }
      var L = [], M = arguments.length, U;
      if (this._all)
        for (N = 0, _ = this._all.length; N < _; N++)
          switch (this.event = f, M) {
            case 1:
              L.push(this._all[N].call(this, f));
              break;
            case 2:
              L.push(this._all[N].call(this, f, arguments[1]));
              break;
            case 3:
              L.push(this._all[N].call(this, f, arguments[1], arguments[2]));
              break;
            default:
              L.push(this._all[N].apply(this, arguments));
          }
      if (m ? (U = [], Y.call(this, U, b, this.listenerTree, 0)) : U = this._events[f], typeof U == "function")
        switch (this.event = f, M) {
          case 1:
            L.push(U.call(this));
            break;
          case 2:
            L.push(U.call(this, arguments[1]));
            break;
          case 3:
            L.push(U.call(this, arguments[1], arguments[2]));
            break;
          default:
            for (A = new Array(M - 1), I = 1; I < M; I++)
              A[I - 1] = arguments[I];
            L.push(U.apply(this, A));
        }
      else if (U && U.length) {
        if (U = U.slice(), M > 3)
          for (A = new Array(M - 1), I = 1; I < M; I++)
            A[I - 1] = arguments[I];
        for (N = 0, _ = U.length; N < _; N++)
          switch (this.event = f, M) {
            case 1:
              L.push(U[N].call(this));
              break;
            case 2:
              L.push(U[N].call(this, arguments[1]));
              break;
            case 3:
              L.push(U[N].call(this, arguments[1], arguments[2]));
              break;
            default:
              L.push(U[N].apply(this, A));
          }
      } else if (!this.ignoreErrors && !this._all && f === "error")
        return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
      return Promise.all(L);
    }, V.prototype.on = function(f, m, b) {
      return this._on(f, m, !1, b);
    }, V.prototype.prependListener = function(f, m, b) {
      return this._on(f, m, !0, b);
    }, V.prototype.onAny = function(f) {
      return this._onAny(f, !1);
    }, V.prototype.prependAny = function(f) {
      return this._onAny(f, !0);
    }, V.prototype.addListener = V.prototype.on, V.prototype._onAny = function(f, m) {
      if (typeof f != "function")
        throw new Error("onAny only accepts instances of Function");
      return this._all || (this._all = []), m ? this._all.unshift(f) : this._all.push(f), this;
    }, V.prototype._on = function(f, m, b, E) {
      if (typeof f == "function")
        return this._onAny(f, m), this;
      if (typeof m != "function")
        throw new Error("on only accepts instances of Function");
      this._events || y.call(this);
      var A = this, _;
      return E !== r && (_ = de.call(this, f, m, E), m = _[0], A = _[1]), this._newListener && this.emit("newListener", f, m), this.wildcard ? (se.call(this, f, m, b), A) : (this._events[f] ? (typeof this._events[f] == "function" && (this._events[f] = [this._events[f]]), b ? this._events[f].unshift(m) : this._events[f].push(m), !this._events[f].warned && this._maxListeners > 0 && this._events[f].length > this._maxListeners && (this._events[f].warned = !0, d.call(this, this._events[f].length, f))) : this._events[f] = m, A);
    }, V.prototype.off = function(f, m) {
      if (typeof m != "function")
        throw new Error("removeListener only takes instances of Function");
      var b, E = [];
      if (this.wildcard) {
        var A = typeof f == "string" ? f.split(this.delimiter) : f.slice();
        if (E = Y.call(this, null, A, this.listenerTree, 0), !E)
          return this;
      } else {
        if (!this._events[f])
          return this;
        b = this._events[f], E.push({ _listeners: b });
      }
      for (var _ = 0; _ < E.length; _++) {
        var N = E[_];
        if (b = N._listeners, i(b)) {
          for (var I = -1, L = 0, M = b.length; L < M; L++)
            if (b[L] === m || b[L].listener && b[L].listener === m || b[L]._origin && b[L]._origin === m) {
              I = L;
              break;
            }
          if (I < 0)
            continue;
          return this.wildcard ? N._listeners.splice(I, 1) : this._events[f].splice(I, 1), b.length === 0 && (this.wildcard ? delete N._listeners : delete this._events[f]), this._removeListener && this.emit("removeListener", f, m), this;
        } else
          (b === m || b.listener && b.listener === m || b._origin && b._origin === m) && (this.wildcard ? delete N._listeners : delete this._events[f], this._removeListener && this.emit("removeListener", f, m));
      }
      return this.listenerTree && ce(this.listenerTree), this;
    }, V.prototype.offAny = function(f) {
      var m = 0, b = 0, E;
      if (f && this._all && this._all.length > 0) {
        for (E = this._all, m = 0, b = E.length; m < b; m++)
          if (f === E[m])
            return E.splice(m, 1), this._removeListener && this.emit("removeListenerAny", f), this;
      } else {
        if (E = this._all, this._removeListener)
          for (m = 0, b = E.length; m < b; m++)
            this.emit("removeListenerAny", E[m]);
        this._all = [];
      }
      return this;
    }, V.prototype.removeListener = V.prototype.off, V.prototype.removeAllListeners = function(f) {
      if (f === r)
        return !this._events || y.call(this), this;
      if (this.wildcard) {
        var m = Y.call(this, null, f, this.listenerTree, 0), b, E;
        if (!m)
          return this;
        for (E = 0; E < m.length; E++)
          b = m[E], b._listeners = null;
        this.listenerTree && ce(this.listenerTree);
      } else
        this._events && (this._events[f] = null);
      return this;
    }, V.prototype.listeners = function(f) {
      var m = this._events, b, E, A, _, N;
      if (f === r) {
        if (this.wildcard)
          throw Error("event name required for wildcard emitter");
        if (!m)
          return [];
        for (b = c(m), _ = b.length, A = []; _-- > 0; )
          E = m[b[_]], typeof E == "function" ? A.push(E) : A.push.apply(A, E);
        return A;
      } else {
        if (this.wildcard) {
          if (N = this.listenerTree, !N)
            return [];
          var I = [], L = typeof f == "string" ? f.split(this.delimiter) : f.slice();
          return Y.call(this, I, L, N, 0), I;
        }
        return m ? (E = m[f], E ? typeof E == "function" ? [E] : E : []) : [];
      }
    }, V.prototype.eventNames = function(f) {
      var m = this._events;
      return this.wildcard ? ne.call(this, this.listenerTree, [], null, f) : m ? c(m) : [];
    }, V.prototype.listenerCount = function(f) {
      return this.listeners(f).length;
    }, V.prototype.hasListeners = function(f) {
      if (this.wildcard) {
        var m = [], b = typeof f == "string" ? f.split(this.delimiter) : f.slice();
        return Y.call(this, m, b, this.listenerTree, 0), m.length > 0;
      }
      var E = this._events, A = this._all;
      return !!(A && A.length || E && (f === r ? c(E).length : E[f]));
    }, V.prototype.listenersAny = function() {
      return this._all ? this._all : [];
    }, V.prototype.waitFor = function(f, m) {
      var b = this, E = typeof m;
      return E === "number" ? m = { timeout: m } : E === "function" && (m = { filter: m }), m = O(m, {
        timeout: 0,
        filter: r,
        handleError: !1,
        Promise,
        overload: !1
      }, {
        filter: B,
        Promise: T
      }), Q(m.Promise, function(A, _, N) {
        function I() {
          var L = m.filter;
          if (!(L && !L.apply(b, arguments)))
            if (b.off(f, I), m.handleError) {
              var M = arguments[0];
              M ? _(M) : A(v.apply(null, arguments).slice(1));
            } else
              A(v.apply(null, arguments));
        }
        N(function() {
          b.off(f, I);
        }), b._on(f, I, !1);
      }, {
        timeout: m.timeout,
        overload: m.overload
      });
    };
    function ee(f, m, b) {
      b = O(b, {
        Promise,
        timeout: 0,
        overload: !1
      }, {
        Promise: T
      });
      var E = b.Promise;
      return Q(E, function(A, _, N) {
        var I;
        if (typeof f.addEventListener == "function") {
          I = function() {
            A(v.apply(null, arguments));
          }, N(function() {
            f.removeEventListener(m, I);
          }), f.addEventListener(
            m,
            I,
            { once: !0 }
          );
          return;
        }
        var L = function() {
          M && f.removeListener("error", M), A(v.apply(null, arguments));
        }, M;
        m !== "error" && (M = function(U) {
          f.removeListener(m, L), _(U);
        }, f.once("error", M)), N(function() {
          M && f.removeListener("error", M), f.removeListener(m, L);
        }), f.once(m, L);
      }, {
        timeout: b.timeout,
        overload: b.overload
      });
    }
    var Oe = V.prototype;
    Object.defineProperties(V, {
      defaultMaxListeners: {
        get: function() {
          return Oe._maxListeners;
        },
        set: function(f) {
          if (typeof f != "number" || f < 0 || Number.isNaN(f))
            throw TypeError("n must be a non-negative number");
          Oe._maxListeners = f;
        },
        enumerable: !0
      },
      once: {
        value: ee,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperties(Oe, {
      _maxListeners: {
        value: a,
        writable: !0,
        configurable: !0
      },
      _observers: { value: null, writable: !0, configurable: !0 }
    }), typeof r == "function" && r.amd ? r(function() {
      return V;
    }) : e.exports = V;
  })();
})(jo);
var Ec = jo.exports;
const Ac = /* @__PURE__ */ ea(Ec);
var Ti = {}, xa = Rr;
Ti.createRoot = xa.createRoot, Ti.hydrateRoot = xa.hydrateRoot;
function Io(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Io(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Vt() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Io(e)) && (n && (n += " "), n += t);
  return n;
}
const Wr = (e) => typeof e == "number" && !isNaN(e), or = (e) => typeof e == "string", Qe = (e) => typeof e == "function", wn = (e) => or(e) || Qe(e) ? e : null, si = (e) => P.isValidElement(e) || or(e) || Qe(e) || Wr(e);
function _c(e, t, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: i } = e;
  requestAnimationFrame(() => {
    i.minHeight = "initial", i.height = n + "px", i.transition = `all ${r}ms`, requestAnimationFrame(() => {
      i.height = "0", i.padding = "0", i.margin = "0", setTimeout(t, r);
    });
  });
}
function zn(e) {
  let { enter: t, exit: r, appendPosition: n = !1, collapse: i = !0, collapseDuration: a = 300 } = e;
  return function(o) {
    let { children: s, position: l, preventExitTransition: u, done: h, nodeRef: c, isIn: y } = o;
    const p = n ? `${t}--${l}` : t, d = n ? `${r}--${l}` : r, v = P.useRef(0);
    return P.useLayoutEffect(() => {
      const g = c.current, w = p.split(" "), O = (T) => {
        T.target === c.current && (g.dispatchEvent(new Event("d")), g.removeEventListener("animationend", O), g.removeEventListener("animationcancel", O), v.current === 0 && T.type !== "animationcancel" && g.classList.remove(...w));
      };
      g.classList.add(...w), g.addEventListener("animationend", O), g.addEventListener("animationcancel", O);
    }, []), P.useEffect(() => {
      const g = c.current, w = () => {
        g.removeEventListener("animationend", w), i ? _c(g, h, a) : h();
      };
      y || (u ? w() : (v.current = 1, g.className += ` ${d}`, g.addEventListener("animationend", w)));
    }, [y]), F.createElement(F.Fragment, null, s);
  };
}
function Sa(e, t) {
  return e != null ? { content: e.content, containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, status: t } : {};
}
const lt = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(e, t) {
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
} }, mn = (e) => {
  let { theme: t, type: r, ...n } = e;
  return F.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...n });
}, ci = { info: function(e) {
  return F.createElement(mn, { ...e }, F.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return F.createElement(mn, { ...e }, F.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return F.createElement(mn, { ...e }, F.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return F.createElement(mn, { ...e }, F.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return F.createElement("div", { className: "Toastify__spinner" });
} };
function Oc(e) {
  const [, t] = P.useReducer((p) => p + 1, 0), [r, n] = P.useState([]), i = P.useRef(null), a = P.useRef(/* @__PURE__ */ new Map()).current, o = (p) => r.indexOf(p) !== -1, s = P.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: o, getToast: (p) => a.get(p) }).current;
  function l(p) {
    let { containerId: d } = p;
    const { limit: v } = s.props;
    !v || d && s.containerId !== d || (s.count -= s.queue.length, s.queue = []);
  }
  function u(p) {
    n((d) => p == null ? [] : d.filter((v) => v !== p));
  }
  function h() {
    const { toastContent: p, toastProps: d, staleId: v } = s.queue.shift();
    y(p, d, v);
  }
  function c(p, d) {
    let { delay: v, staleId: g, ...w } = d;
    if (!si(p) || function(ce) {
      return !i.current || s.props.enableMultiContainer && ce.containerId !== s.props.containerId || a.has(ce.toastId) && ce.updateId == null;
    }(w))
      return;
    const { toastId: O, updateId: T, data: D } = w, { props: B } = s, $ = () => u(O), Q = T == null;
    Q && s.count++;
    const H = { ...B, style: B.toastStyle, key: s.toastKey++, ...Object.fromEntries(Object.entries(w).filter((ce) => {
      let [ye, de] = ce;
      return de != null;
    })), toastId: O, updateId: T, data: D, closeToast: $, isIn: !1, className: wn(w.className || B.toastClassName), bodyClassName: wn(w.bodyClassName || B.bodyClassName), progressClassName: wn(w.progressClassName || B.progressClassName), autoClose: !w.isLoading && (Y = w.autoClose, se = B.autoClose, Y === !1 || Wr(Y) && Y > 0 ? Y : se), deleteToast() {
      const ce = Sa(a.get(O), "removed");
      a.delete(O), lt.emit(4, ce);
      const ye = s.queue.length;
      if (s.count = O == null ? s.count - s.displayedToast : s.count - 1, s.count < 0 && (s.count = 0), ye > 0) {
        const de = O == null ? s.props.limit : 1;
        if (ye === 1 || de === 1)
          s.displayedToast++, h();
        else {
          const V = de > ye ? ye : de;
          s.displayedToast = V;
          for (let ee = 0; ee < V; ee++)
            h();
        }
      } else
        t();
    } };
    var Y, se;
    H.iconOut = function(ce) {
      let { theme: ye, type: de, isLoading: V, icon: ee } = ce, Oe = null;
      const f = { theme: ye, type: de };
      return ee === !1 || (Qe(ee) ? Oe = ee(f) : P.isValidElement(ee) ? Oe = P.cloneElement(ee, f) : or(ee) || Wr(ee) ? Oe = ee : V ? Oe = ci.spinner() : ((m) => m in ci)(de) && (Oe = ci[de](f))), Oe;
    }(H), Qe(w.onOpen) && (H.onOpen = w.onOpen), Qe(w.onClose) && (H.onClose = w.onClose), H.closeButton = B.closeButton, w.closeButton === !1 || si(w.closeButton) ? H.closeButton = w.closeButton : w.closeButton === !0 && (H.closeButton = !si(B.closeButton) || B.closeButton);
    let ne = p;
    P.isValidElement(p) && !or(p.type) ? ne = P.cloneElement(p, { closeToast: $, toastProps: H, data: D }) : Qe(p) && (ne = p({ closeToast: $, toastProps: H, data: D })), B.limit && B.limit > 0 && s.count > B.limit && Q ? s.queue.push({ toastContent: ne, toastProps: H, staleId: g }) : Wr(v) ? setTimeout(() => {
      y(ne, H, g);
    }, v) : y(ne, H, g);
  }
  function y(p, d, v) {
    const { toastId: g } = d;
    v && a.delete(v);
    const w = { content: p, props: d };
    a.set(g, w), n((O) => [...O, g].filter((T) => T !== v)), lt.emit(4, Sa(w, w.props.updateId == null ? "added" : "updated"));
  }
  return P.useEffect(() => (s.containerId = e.containerId, lt.cancelEmit(3).on(0, c).on(1, (p) => i.current && u(p)).on(5, l).emit(2, s), () => {
    a.clear(), lt.emit(3, s);
  }), []), P.useEffect(() => {
    s.props = e, s.isToastActive = o, s.displayedToast = r.length;
  }), { getToastToRender: function(p) {
    const d = /* @__PURE__ */ new Map(), v = Array.from(a.values());
    return e.newestOnTop && v.reverse(), v.forEach((g) => {
      const { position: w } = g.props;
      d.has(w) || d.set(w, []), d.get(w).push(g);
    }), Array.from(d, (g) => p(g[0], g[1]));
  }, containerRef: i, isToastActive: o };
}
function Da(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function Ra(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function Cc(e) {
  const [t, r] = P.useState(!1), [n, i] = P.useState(!1), a = P.useRef(null), o = P.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, s = P.useRef(e), { autoClose: l, pauseOnHover: u, closeToast: h, onClick: c, closeOnClick: y } = e;
  function p(D) {
    if (e.draggable) {
      D.nativeEvent.type === "touchstart" && D.nativeEvent.preventDefault(), o.didMove = !1, document.addEventListener("mousemove", w), document.addEventListener("mouseup", O), document.addEventListener("touchmove", w), document.addEventListener("touchend", O);
      const B = a.current;
      o.canCloseOnClick = !0, o.canDrag = !0, o.boundingRect = B.getBoundingClientRect(), B.style.transition = "", o.x = Da(D.nativeEvent), o.y = Ra(D.nativeEvent), e.draggableDirection === "x" ? (o.start = o.x, o.removalDistance = B.offsetWidth * (e.draggablePercent / 100)) : (o.start = o.y, o.removalDistance = B.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }
  function d(D) {
    if (o.boundingRect) {
      const { top: B, bottom: $, left: Q, right: H } = o.boundingRect;
      D.nativeEvent.type !== "touchend" && e.pauseOnHover && o.x >= Q && o.x <= H && o.y >= B && o.y <= $ ? g() : v();
    }
  }
  function v() {
    r(!0);
  }
  function g() {
    r(!1);
  }
  function w(D) {
    const B = a.current;
    o.canDrag && B && (o.didMove = !0, t && g(), o.x = Da(D), o.y = Ra(D), o.delta = e.draggableDirection === "x" ? o.x - o.start : o.y - o.start, o.start !== o.x && (o.canCloseOnClick = !1), B.style.transform = `translate${e.draggableDirection}(${o.delta}px)`, B.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
  }
  function O() {
    document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", O), document.removeEventListener("touchmove", w), document.removeEventListener("touchend", O);
    const D = a.current;
    if (o.canDrag && o.didMove && D) {
      if (o.canDrag = !1, Math.abs(o.delta) > o.removalDistance)
        return i(!0), void e.closeToast();
      D.style.transition = "transform 0.2s, opacity 0.2s", D.style.transform = `translate${e.draggableDirection}(0)`, D.style.opacity = "1";
    }
  }
  P.useEffect(() => {
    s.current = e;
  }), P.useEffect(() => (a.current && a.current.addEventListener("d", v, { once: !0 }), Qe(e.onOpen) && e.onOpen(P.isValidElement(e.children) && e.children.props), () => {
    const D = s.current;
    Qe(D.onClose) && D.onClose(P.isValidElement(D.children) && D.children.props);
  }), []), P.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || g(), window.addEventListener("focus", v), window.addEventListener("blur", g)), () => {
    e.pauseOnFocusLoss && (window.removeEventListener("focus", v), window.removeEventListener("blur", g));
  }), [e.pauseOnFocusLoss]);
  const T = { onMouseDown: p, onTouchStart: p, onMouseUp: d, onTouchEnd: d };
  return l && u && (T.onMouseEnter = g, T.onMouseLeave = v), y && (T.onClick = (D) => {
    c && c(D), o.canCloseOnClick && h();
  }), { playToast: v, pauseToast: g, isRunning: t, preventExitTransition: n, toastRef: a, eventHandlers: T };
}
function Fo(e) {
  let { closeToast: t, theme: r, ariaLabel: n = "close" } = e;
  return F.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (i) => {
    i.stopPropagation(), t(i);
  }, "aria-label": n }, F.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, F.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function Tc(e) {
  let { delay: t, isRunning: r, closeToast: n, type: i = "default", hide: a, className: o, style: s, controlledProgress: l, progress: u, rtl: h, isIn: c, theme: y } = e;
  const p = a || l && u === 0, d = { ...s, animationDuration: `${t}ms`, animationPlayState: r ? "running" : "paused", opacity: p ? 0 : 1 };
  l && (d.transform = `scaleX(${u})`);
  const v = Vt("Toastify__progress-bar", l ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${y}`, `Toastify__progress-bar--${i}`, { "Toastify__progress-bar--rtl": h }), g = Qe(o) ? o({ rtl: h, type: i, defaultClassName: v }) : Vt(v, o);
  return F.createElement("div", { role: "progressbar", "aria-hidden": p ? "true" : "false", "aria-label": "notification timer", className: g, style: d, [l && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: l && u < 1 ? null : () => {
    c && n();
  } });
}
const xc = (e) => {
  const { isRunning: t, preventExitTransition: r, toastRef: n, eventHandlers: i } = Cc(e), { closeButton: a, children: o, autoClose: s, onClick: l, type: u, hideProgressBar: h, closeToast: c, transition: y, position: p, className: d, style: v, bodyClassName: g, bodyStyle: w, progressClassName: O, progressStyle: T, updateId: D, role: B, progress: $, rtl: Q, toastId: H, deleteToast: Y, isIn: se, isLoading: ne, iconOut: ce, closeOnClick: ye, theme: de } = e, V = Vt("Toastify__toast", `Toastify__toast-theme--${de}`, `Toastify__toast--${u}`, { "Toastify__toast--rtl": Q }, { "Toastify__toast--close-on-click": ye }), ee = Qe(d) ? d({ rtl: Q, position: p, type: u, defaultClassName: V }) : Vt(V, d), Oe = !!$ || !s, f = { closeToast: c, type: u, theme: de };
  let m = null;
  return a === !1 || (m = Qe(a) ? a(f) : P.isValidElement(a) ? P.cloneElement(a, f) : Fo(f)), F.createElement(y, { isIn: se, done: Y, position: p, preventExitTransition: r, nodeRef: n }, F.createElement("div", { id: H, onClick: l, className: ee, ...i, style: v, ref: n }, F.createElement("div", { ...se && { role: B }, className: Qe(g) ? g({ type: u }) : Vt("Toastify__toast-body", g), style: w }, ce != null && F.createElement("div", { className: Vt("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !ne }) }, ce), F.createElement("div", null, o)), m, F.createElement(Tc, { ...D && !Oe ? { key: `pb-${D}` } : {}, rtl: Q, theme: de, delay: s, isRunning: t, isIn: se, closeToast: c, hide: h, type: u, style: T, className: O, controlledProgress: Oe, progress: $ || 0 })));
}, Wn = function(e, t) {
  return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, Sc = zn(Wn("bounce", !0));
zn(Wn("slide", !0));
zn(Wn("zoom"));
zn(Wn("flip"));
const xi = P.forwardRef((e, t) => {
  const { getToastToRender: r, containerRef: n, isToastActive: i } = Oc(e), { className: a, style: o, rtl: s, containerId: l } = e;
  function u(h) {
    const c = Vt("Toastify__toast-container", `Toastify__toast-container--${h}`, { "Toastify__toast-container--rtl": s });
    return Qe(a) ? a({ position: h, rtl: s, defaultClassName: c }) : Vt(c, wn(a));
  }
  return P.useEffect(() => {
    t && (t.current = n.current);
  }, []), F.createElement("div", { ref: n, className: "Toastify", id: l }, r((h, c) => {
    const y = c.length ? { ...o } : { ...o, pointerEvents: "none" };
    return F.createElement("div", { className: u(h), style: y, key: `container-${h}` }, c.map((p, d) => {
      let { content: v, props: g } = p;
      return F.createElement(xc, { ...g, isIn: i(g.toastId), style: { ...g.style, "--nth": d + 1, "--len": c.length }, key: `toast-${g.key}` }, v);
    }));
  }));
});
xi.displayName = "ToastContainer", xi.defaultProps = { position: "top-right", transition: Sc, autoClose: 5e3, closeButton: Fo, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let li, Xt = /* @__PURE__ */ new Map(), Br = [], Dc = 1;
function Bo() {
  return "" + Dc++;
}
function Rc(e) {
  return e && (or(e.toastId) || Wr(e.toastId)) ? e.toastId : Bo();
}
function Hr(e, t) {
  return Xt.size > 0 ? lt.emit(0, e, t) : Br.push({ content: e, options: t }), t.toastId;
}
function Tn(e, t) {
  return { ...t, type: t && t.type || e, toastId: Rc(t) };
}
function vn(e) {
  return (t, r) => Hr(t, Tn(e, r));
}
function Ae(e, t) {
  return Hr(e, Tn("default", t));
}
Ae.loading = (e, t) => Hr(e, Tn("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), Ae.promise = function(e, t, r) {
  let n, { pending: i, error: a, success: o } = t;
  i && (n = or(i) ? Ae.loading(i, r) : Ae.loading(i.render, { ...r, ...i }));
  const s = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l = (h, c, y) => {
    if (c == null)
      return void Ae.dismiss(n);
    const p = { type: h, ...s, ...r, data: y }, d = or(c) ? { render: c } : c;
    return n ? Ae.update(n, { ...p, ...d }) : Ae(d.render, { ...p, ...d }), y;
  }, u = Qe(e) ? e() : e;
  return u.then((h) => l("success", o, h)).catch((h) => l("error", a, h)), u;
}, Ae.success = vn("success"), Ae.info = vn("info"), Ae.error = vn("error"), Ae.warning = vn("warning"), Ae.warn = Ae.warning, Ae.dark = (e, t) => Hr(e, Tn("default", { theme: "dark", ...t })), Ae.dismiss = (e) => {
  Xt.size > 0 ? lt.emit(1, e) : Br = Br.filter((t) => e != null && t.options.toastId !== e);
}, Ae.clearWaitingQueue = function(e) {
  return e === void 0 && (e = {}), lt.emit(5, e);
}, Ae.isActive = (e) => {
  let t = !1;
  return Xt.forEach((r) => {
    r.isToastActive && r.isToastActive(e) && (t = !0);
  }), t;
}, Ae.update = function(e, t) {
  t === void 0 && (t = {}), setTimeout(() => {
    const r = function(n, i) {
      let { containerId: a } = i;
      const o = Xt.get(a || li);
      return o && o.getToast(n);
    }(e, t);
    if (r) {
      const { props: n, content: i } = r, a = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: Bo() };
      a.toastId !== e && (a.staleId = e);
      const o = a.render || i;
      delete a.render, Hr(o, a);
    }
  }, 0);
}, Ae.done = (e) => {
  Ae.update(e, { progress: 1 });
}, Ae.onChange = (e) => (lt.on(4, e), () => {
  lt.off(4, e);
}), Ae.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, Ae.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, lt.on(2, (e) => {
  li = e.containerId || e, Xt.set(li, e), Br.forEach((t) => {
    lt.emit(0, t.content, t.options);
  }), Br = [];
}).on(3, (e) => {
  Xt.delete(e.containerId || e), Xt.size === 0 && lt.off(0).off(1).off(5);
});
const Pc = () => /* @__PURE__ */ ve(ko, { styles: Xi`*, ::before, ::after {
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
html, :host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:  normal;
  font-variation-settings:  normal;
  -webkit-tap-highlight-color: transparent;
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
  font-feature-settings:  normal;
  font-variation-settings:  normal;
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
}` }), kc = () => /* @__PURE__ */ Bn(gc, { children: [
  /* @__PURE__ */ ve(Pc, {}),
  /* @__PURE__ */ ve(xi, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
var Hn = class {
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
}, Un = typeof window > "u" || "Deno" in window;
function ht() {
}
function Nc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Lc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Mc(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Pa(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== ta(o, t.options))
        return !1;
    } else if (!qr(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if (r === "active" && !l || r === "inactive" && l)
      return !1;
  }
  return !(typeof s == "boolean" && t.isStale() !== s || typeof i < "u" && i !== t.state.fetchStatus || a && !a(t));
}
function ka(e, t) {
  const { exact: r, status: n, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if ($r(t.options.mutationKey) !== $r(a))
        return !1;
    } else if (!qr(t.options.mutationKey, a))
      return !1;
  }
  return !(n && t.state.status !== n || i && !i(t));
}
function ta(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || $r)(e);
}
function $r(e) {
  return JSON.stringify(
    e,
    (t, r) => Si(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r
  );
}
function qr(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !qr(e[r], t[r])) : !1;
}
function zo(e, t) {
  if (e === t)
    return e;
  const r = Na(e) && Na(t);
  if (r || Si(e) && Si(t)) {
    const n = r ? e : Object.keys(e), i = n.length, a = r ? t : Object.keys(t), o = a.length, s = r ? [] : {};
    let l = 0;
    for (let u = 0; u < o; u++) {
      const h = r ? u : a[u];
      !r && e[h] === void 0 && t[h] === void 0 && n.includes(h) ? (s[h] = void 0, l++) : (s[h] = zo(e[h], t[h]), s[h] === e[h] && e[h] !== void 0 && l++);
    }
    return i === o && l === i ? e : s;
  }
  return t;
}
function Jd(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Na(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Si(e) {
  if (!La(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!La(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function La(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function jc(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Ic(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? zo(e, t) : t;
}
function Xd(e) {
  return e;
}
function Fc(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function Bc(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var tr, zt, br, Eo, zc = (Eo = class extends Hn {
  constructor() {
    super();
    ie(this, tr, void 0);
    ie(this, zt, void 0);
    ie(this, br, void 0);
    K(this, br, (t) => {
      if (!Un && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    x(this, zt) || this.setEventListener(x(this, br));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = x(this, zt)) == null || t.call(this), K(this, zt, void 0));
  }
  setEventListener(t) {
    var r;
    K(this, br, t), (r = x(this, zt)) == null || r.call(this), K(this, zt, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    x(this, tr) !== t && (K(this, tr, t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    var t;
    return typeof x(this, tr) == "boolean" ? x(this, tr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, tr = new WeakMap(), zt = new WeakMap(), br = new WeakMap(), Eo), Di = new zc(), wr, Wt, Er, Ao, Wc = (Ao = class extends Hn {
  constructor() {
    super();
    ie(this, wr, !0);
    ie(this, Wt, void 0);
    ie(this, Er, void 0);
    K(this, Er, (t) => {
      if (!Un && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    x(this, Wt) || this.setEventListener(x(this, Er));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = x(this, Wt)) == null || t.call(this), K(this, Wt, void 0));
  }
  setEventListener(t) {
    var r;
    K(this, Er, t), (r = x(this, Wt)) == null || r.call(this), K(this, Wt, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    x(this, wr) !== t && (K(this, wr, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return x(this, wr);
  }
}, wr = new WeakMap(), Wt = new WeakMap(), Er = new WeakMap(), Ao), xn = new Wc();
function Hc(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ra(e) {
  return (e ?? "online") === "online" ? xn.isOnline() : !0;
}
var Wo = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function ui(e) {
  return e instanceof Wo;
}
function Ho(e) {
  let t = !1, r = 0, n = !1, i, a, o;
  const s = new Promise((g, w) => {
    a = g, o = w;
  }), l = (g) => {
    var w;
    n || (p(new Wo(g)), (w = e.abort) == null || w.call(e));
  }, u = () => {
    t = !0;
  }, h = () => {
    t = !1;
  }, c = () => !Di.isFocused() || e.networkMode !== "always" && !xn.isOnline(), y = (g) => {
    var w;
    n || (n = !0, (w = e.onSuccess) == null || w.call(e, g), i == null || i(), a(g));
  }, p = (g) => {
    var w;
    n || (n = !0, (w = e.onError) == null || w.call(e, g), i == null || i(), o(g));
  }, d = () => new Promise((g) => {
    var w;
    i = (O) => {
      const T = n || !c();
      return T && g(O), T;
    }, (w = e.onPause) == null || w.call(e);
  }).then(() => {
    var g;
    i = void 0, n || (g = e.onContinue) == null || g.call(e);
  }), v = () => {
    if (n)
      return;
    let g;
    try {
      g = e.fn();
    } catch (w) {
      g = Promise.reject(w);
    }
    Promise.resolve(g).then(y).catch((w) => {
      var $;
      if (n)
        return;
      const O = e.retry ?? (Un ? 0 : 3), T = e.retryDelay ?? Hc, D = typeof T == "function" ? T(r, w) : T, B = O === !0 || typeof O == "number" && r < O || typeof O == "function" && O(r, w);
      if (t || !B) {
        p(w);
        return;
      }
      r++, ($ = e.onFail) == null || $.call(e, r, w), jc(D).then(() => {
        if (c())
          return d();
      }).then(() => {
        t ? p(w) : v();
      });
    });
  };
  return ra(e.networkMode) ? v() : d().then(v), {
    promise: s,
    cancel: l,
    continue: () => (i == null ? void 0 : i()) ? s : Promise.resolve(),
    cancelRetry: u,
    continueRetry: h
  };
}
function Uc() {
  let e = [], t = 0, r = (y) => {
    y();
  }, n = (y) => {
    y();
  }, i = (y) => setTimeout(y, 0);
  const a = (y) => {
    i = y;
  }, o = (y) => {
    let p;
    t++;
    try {
      p = y();
    } finally {
      t--, t || u();
    }
    return p;
  }, s = (y) => {
    t ? e.push(y) : i(() => {
      r(y);
    });
  }, l = (y) => (...p) => {
    s(() => {
      y(...p);
    });
  }, u = () => {
    const y = e;
    e = [], y.length && i(() => {
      n(() => {
        y.forEach((p) => {
          r(p);
        });
      });
    });
  };
  return {
    batch: o,
    batchCalls: l,
    schedule: s,
    setNotifyFunction: (y) => {
      r = y;
    },
    setBatchNotifyFunction: (y) => {
      n = y;
    },
    setScheduler: a
  };
}
var Ge = Uc(), rr, _o, Uo = (_o = class {
  constructor() {
    ie(this, rr, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Lc(this.gcTime) && K(this, rr, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Un ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    x(this, rr) && (clearTimeout(x(this, rr)), K(this, rr, void 0));
  }
}, rr = new WeakMap(), _o), Ar, _r, ot, Ht, st, ze, rn, nr, Or, En, dt, Dt, Oo, $c = (Oo = class extends Uo {
  constructor(t) {
    super();
    ie(this, Or);
    ie(this, dt);
    ie(this, Ar, void 0);
    ie(this, _r, void 0);
    ie(this, ot, void 0);
    ie(this, Ht, void 0);
    ie(this, st, void 0);
    ie(this, ze, void 0);
    ie(this, rn, void 0);
    ie(this, nr, void 0);
    K(this, nr, !1), K(this, rn, t.defaultOptions), Ie(this, Or, En).call(this, t.options), K(this, ze, []), K(this, ot, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, K(this, Ar, t.state || qc(this.options)), this.state = x(this, Ar), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !x(this, ze).length && this.state.fetchStatus === "idle" && x(this, ot).remove(this);
  }
  setData(t, r) {
    const n = Ic(this.state.data, t, this.options);
    return Ie(this, dt, Dt).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    Ie(this, dt, Dt).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n;
    const r = x(this, Ht);
    return (n = x(this, st)) == null || n.cancel(t), r ? r.then(ht).catch(ht) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(x(this, Ar));
  }
  isActive() {
    return x(this, ze).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || x(this, ze).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Mc(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = x(this, ze).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = x(this, st)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = x(this, ze).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = x(this, st)) == null || r.continue();
  }
  addObserver(t) {
    x(this, ze).includes(t) || (x(this, ze).push(t), this.clearGcTimeout(), x(this, ot).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    x(this, ze).includes(t) && (K(this, ze, x(this, ze).filter((r) => r !== t)), x(this, ze).length || (x(this, st) && (x(this, nr) ? x(this, st).cancel({ revert: !0 }) : x(this, st).cancelRetry()), this.scheduleGc()), x(this, ot).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return x(this, ze).length;
  }
  invalidate() {
    this.state.isInvalidated || Ie(this, dt, Dt).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var u, h, c, y;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (x(this, Ht))
        return (u = x(this, st)) == null || u.continueRetry(), x(this, Ht);
    }
    if (t && Ie(this, Or, En).call(this, t), !this.options.queryFn) {
      const p = x(this, ze).find((d) => d.options.queryFn);
      p && Ie(this, Or, En).call(this, p.options);
    }
    const n = new AbortController(), i = {
      queryKey: this.queryKey,
      meta: this.meta
    }, a = (p) => {
      Object.defineProperty(p, "signal", {
        enumerable: !0,
        get: () => (K(this, nr, !0), n.signal)
      });
    };
    a(i);
    const o = () => this.options.queryFn ? (K(this, nr, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      i,
      this
    ) : this.options.queryFn(
      i
    )) : Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ), s = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    a(s), (h = this.options.behavior) == null || h.onFetch(
      s,
      this
    ), K(this, _r, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = s.fetchOptions) == null ? void 0 : c.meta)) && Ie(this, dt, Dt).call(this, { type: "fetch", meta: (y = s.fetchOptions) == null ? void 0 : y.meta });
    const l = (p) => {
      var d, v, g, w;
      ui(p) && p.silent || Ie(this, dt, Dt).call(this, {
        type: "error",
        error: p
      }), ui(p) || ((v = (d = x(this, ot).config).onError) == null || v.call(
        d,
        p,
        this
      ), (w = (g = x(this, ot).config).onSettled) == null || w.call(
        g,
        this.state.data,
        p,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return K(this, st, Ho({
      fn: s.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (p) => {
        var d, v, g, w;
        if (typeof p > "u") {
          l(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(p), (v = (d = x(this, ot).config).onSuccess) == null || v.call(d, p, this), (w = (g = x(this, ot).config).onSettled) == null || w.call(
          g,
          p,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: l,
      onFail: (p, d) => {
        Ie(this, dt, Dt).call(this, { type: "failed", failureCount: p, error: d });
      },
      onPause: () => {
        Ie(this, dt, Dt).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ie(this, dt, Dt).call(this, { type: "continue" });
      },
      retry: s.options.retry,
      retryDelay: s.options.retryDelay,
      networkMode: s.options.networkMode
    })), K(this, Ht, x(this, st).promise), x(this, Ht);
  }
}, Ar = new WeakMap(), _r = new WeakMap(), ot = new WeakMap(), Ht = new WeakMap(), st = new WeakMap(), ze = new WeakMap(), rn = new WeakMap(), nr = new WeakMap(), Or = new WeakSet(), En = function(t) {
  this.options = { ...x(this, rn), ...t }, this.updateGcTime(this.options.gcTime);
}, dt = new WeakSet(), Dt = function(t) {
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
          fetchStatus: ra(this.options.networkMode) ? "fetching" : "paused",
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
        const i = t.error;
        return ui(i) && i.revert && x(this, _r) ? { ...x(this, _r), fetchStatus: "idle" } : {
          ...n,
          error: i,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: i,
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
  this.state = r(this.state), Ge.batch(() => {
    x(this, ze).forEach((n) => {
      n.onQueryUpdate();
    }), x(this, ot).notify({ query: this, type: "updated", action: t });
  });
}, Oo);
function qc(e) {
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
var wt, Co, Vc = (Co = class extends Hn {
  constructor(t = {}) {
    super();
    ie(this, wt, void 0);
    this.config = t, K(this, wt, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const i = r.queryKey, a = r.queryHash ?? ta(i, r);
    let o = this.get(a);
    return o || (o = new $c({
      cache: this,
      queryKey: i,
      queryHash: a,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(i)
    }), this.add(o)), o;
  }
  add(t) {
    x(this, wt).has(t.queryHash) || (x(this, wt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = x(this, wt).get(t.queryHash);
    r && (t.destroy(), r === t && x(this, wt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Ge.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return x(this, wt).get(t);
  }
  getAll() {
    return [...x(this, wt).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Pa(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => Pa(t, n)) : r;
  }
  notify(t) {
    Ge.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    Ge.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ge.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, wt = new WeakMap(), Co), Et, nn, Ze, Cr, At, It, To, Yc = (To = class extends Uo {
  constructor(t) {
    super();
    ie(this, At);
    ie(this, Et, void 0);
    ie(this, nn, void 0);
    ie(this, Ze, void 0);
    ie(this, Cr, void 0);
    this.mutationId = t.mutationId, K(this, nn, t.defaultOptions), K(this, Ze, t.mutationCache), K(this, Et, []), this.state = t.state || Gc(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...x(this, nn), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    x(this, Et).includes(t) || (x(this, Et).push(t), this.clearGcTimeout(), x(this, Ze).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    K(this, Et, x(this, Et).filter((r) => r !== t)), this.scheduleGc(), x(this, Ze).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    x(this, Et).length || (this.state.status === "pending" ? this.scheduleGc() : x(this, Ze).remove(this));
  }
  continue() {
    var t;
    return ((t = x(this, Cr)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var i, a, o, s, l, u, h, c, y, p, d, v, g, w, O, T, D, B, $, Q;
    const r = () => (K(this, Cr, Ho({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (H, Y) => {
        Ie(this, At, It).call(this, { type: "failed", failureCount: H, error: Y });
      },
      onPause: () => {
        Ie(this, At, It).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ie(this, At, It).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), x(this, Cr).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        Ie(this, At, It).call(this, { type: "pending", variables: t }), await ((a = (i = x(this, Ze).config).onMutate) == null ? void 0 : a.call(
          i,
          t,
          this
        ));
        const Y = await ((s = (o = this.options).onMutate) == null ? void 0 : s.call(o, t));
        Y !== this.state.context && Ie(this, At, It).call(this, {
          type: "pending",
          context: Y,
          variables: t
        });
      }
      const H = await r();
      return await ((u = (l = x(this, Ze).config).onSuccess) == null ? void 0 : u.call(
        l,
        H,
        t,
        this.state.context,
        this
      )), await ((c = (h = this.options).onSuccess) == null ? void 0 : c.call(h, H, t, this.state.context)), await ((p = (y = x(this, Ze).config).onSettled) == null ? void 0 : p.call(
        y,
        H,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((v = (d = this.options).onSettled) == null ? void 0 : v.call(d, H, null, t, this.state.context)), Ie(this, At, It).call(this, { type: "success", data: H }), H;
    } catch (H) {
      try {
        throw await ((w = (g = x(this, Ze).config).onError) == null ? void 0 : w.call(
          g,
          H,
          t,
          this.state.context,
          this
        )), await ((T = (O = this.options).onError) == null ? void 0 : T.call(
          O,
          H,
          t,
          this.state.context
        )), await ((B = (D = x(this, Ze).config).onSettled) == null ? void 0 : B.call(
          D,
          void 0,
          H,
          this.state.variables,
          this.state.context,
          this
        )), await ((Q = ($ = this.options).onSettled) == null ? void 0 : Q.call(
          $,
          void 0,
          H,
          t,
          this.state.context
        )), H;
      } finally {
        Ie(this, At, It).call(this, { type: "error", error: H });
      }
    }
  }
}, Et = new WeakMap(), nn = new WeakMap(), Ze = new WeakMap(), Cr = new WeakMap(), At = new WeakSet(), It = function(t) {
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
          isPaused: !ra(this.options.networkMode),
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
  this.state = r(this.state), Ge.batch(() => {
    x(this, Et).forEach((n) => {
      n.onMutationUpdate(t);
    }), x(this, Ze).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, To);
function Gc() {
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
var ct, an, ir, xo, Kc = (xo = class extends Hn {
  constructor(t = {}) {
    super();
    ie(this, ct, void 0);
    ie(this, an, void 0);
    ie(this, ir, void 0);
    this.config = t, K(this, ct, []), K(this, an, 0);
  }
  build(t, r, n) {
    const i = new Yc({
      mutationCache: this,
      mutationId: ++dn(this, an)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(i), i;
  }
  add(t) {
    x(this, ct).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    K(this, ct, x(this, ct).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    Ge.batch(() => {
      x(this, ct).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return x(this, ct);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return x(this, ct).find(
      (n) => ka(r, n)
    );
  }
  findAll(t = {}) {
    return x(this, ct).filter(
      (r) => ka(t, r)
    );
  }
  notify(t) {
    Ge.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    return K(this, ir, (x(this, ir) ?? Promise.resolve()).then(() => {
      const t = x(this, ct).filter((r) => r.state.isPaused);
      return Ge.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(ht)),
          Promise.resolve()
        )
      );
    }).then(() => {
      K(this, ir, void 0);
    })), x(this, ir);
  }
}, ct = new WeakMap(), an = new WeakMap(), ir = new WeakMap(), xo);
function Qc(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var d, v, g, w, O;
        const i = t.options, a = (g = (v = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : v.fetchMore) == null ? void 0 : g.direction, o = ((w = t.state.data) == null ? void 0 : w.pages) || [], s = ((O = t.state.data) == null ? void 0 : O.pageParams) || [], l = { pages: [], pageParams: [] };
        let u = !1;
        const h = (T) => {
          Object.defineProperty(T, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? u = !0 : t.signal.addEventListener("abort", () => {
              u = !0;
            }), t.signal)
          });
        }, c = t.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), y = async (T, D, B) => {
          if (u)
            return Promise.reject();
          if (D == null && T.pages.length)
            return Promise.resolve(T);
          const $ = {
            queryKey: t.queryKey,
            pageParam: D,
            direction: B ? "backward" : "forward",
            meta: t.options.meta
          };
          h($);
          const Q = await c(
            $
          ), { maxPages: H } = t.options, Y = B ? Bc : Fc;
          return {
            pages: Y(T.pages, Q, H),
            pageParams: Y(T.pageParams, D, H)
          };
        };
        let p;
        if (a && o.length) {
          const T = a === "backward", D = T ? Jc : Ma, B = {
            pages: o,
            pageParams: s
          }, $ = D(i, B);
          p = await y(B, $, T);
        } else {
          p = await y(
            l,
            s[0] ?? i.initialPageParam
          );
          const T = e ?? o.length;
          for (let D = 1; D < T; D++) {
            const B = Ma(i, p);
            p = await y(p, B);
          }
        }
        return p;
      };
      t.options.persister ? t.fetchFn = () => {
        var i, a;
        return (a = (i = t.options).persister) == null ? void 0 : a.call(
          i,
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
function Ma(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function Jc(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var Fe, Ut, $t, Tr, xr, qt, Sr, Dr, So, Xc = (So = class {
  constructor(e = {}) {
    ie(this, Fe, void 0);
    ie(this, Ut, void 0);
    ie(this, $t, void 0);
    ie(this, Tr, void 0);
    ie(this, xr, void 0);
    ie(this, qt, void 0);
    ie(this, Sr, void 0);
    ie(this, Dr, void 0);
    K(this, Fe, e.queryCache || new Vc()), K(this, Ut, e.mutationCache || new Kc()), K(this, $t, e.defaultOptions || {}), K(this, Tr, /* @__PURE__ */ new Map()), K(this, xr, /* @__PURE__ */ new Map()), K(this, qt, 0);
  }
  mount() {
    dn(this, qt)._++, x(this, qt) === 1 && (K(this, Sr, Di.subscribe(() => {
      Di.isFocused() && (this.resumePausedMutations(), x(this, Fe).onFocus());
    })), K(this, Dr, xn.subscribe(() => {
      xn.isOnline() && (this.resumePausedMutations(), x(this, Fe).onOnline());
    })));
  }
  unmount() {
    var e, t;
    dn(this, qt)._--, x(this, qt) === 0 && ((e = x(this, Sr)) == null || e.call(this), K(this, Sr, void 0), (t = x(this, Dr)) == null || t.call(this), K(this, Dr, void 0));
  }
  isFetching(e) {
    return x(this, Fe).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return x(this, Ut).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = x(this, Fe).get(t.queryHash)) == null ? void 0 : r.state.data;
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
    const n = this.defaultQueryOptions({ queryKey: e }), i = x(this, Fe).get(
      n.queryHash
    ), a = i == null ? void 0 : i.state.data, o = Nc(t, a);
    if (!(typeof o > "u"))
      return x(this, Fe).build(this, n).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Ge.batch(
      () => this.getQueryCache().findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = x(this, Fe).get(t.queryHash)) == null ? void 0 : r.state;
  }
  removeQueries(e) {
    const t = x(this, Fe);
    Ge.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = x(this, Fe), n = {
      type: "active",
      ...e
    };
    return Ge.batch(() => (r.findAll(e).forEach((i) => {
      i.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = Ge.batch(
      () => x(this, Fe).findAll(e).map((i) => i.cancel(r))
    );
    return Promise.all(n).then(ht).catch(ht);
  }
  invalidateQueries(e = {}, t = {}) {
    return Ge.batch(() => {
      if (x(this, Fe).findAll(e).forEach((n) => {
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
    }, n = Ge.batch(
      () => x(this, Fe).findAll(e).filter((i) => !i.isDisabled()).map((i) => {
        let a = i.fetch(void 0, r);
        return r.throwOnError || (a = a.catch(ht)), i.state.fetchStatus === "paused" ? Promise.resolve() : a;
      })
    );
    return Promise.all(n).then(ht);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = x(this, Fe).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ht).catch(ht);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Qc(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ht).catch(ht);
  }
  resumePausedMutations() {
    return x(this, Ut).resumePausedMutations();
  }
  getQueryCache() {
    return x(this, Fe);
  }
  getMutationCache() {
    return x(this, Ut);
  }
  getDefaultOptions() {
    return x(this, $t);
  }
  setDefaultOptions(e) {
    K(this, $t, e);
  }
  setQueryDefaults(e, t) {
    x(this, Tr).set($r(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...x(this, Tr).values()];
    let r = {};
    return t.forEach((n) => {
      qr(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    x(this, xr).set($r(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...x(this, xr).values()];
    let r = {};
    return t.forEach((n) => {
      qr(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...x(this, $t).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = ta(
      t.queryKey,
      t
    )), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...x(this, $t).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    x(this, Fe).clear(), x(this, Ut).clear();
  }
}, Fe = new WeakMap(), Ut = new WeakMap(), $t = new WeakMap(), Tr = new WeakMap(), xr = new WeakMap(), qt = new WeakMap(), Sr = new WeakMap(), Dr = new WeakMap(), So), $o = P.createContext(
  void 0
), Zd = (e) => {
  const t = P.useContext($o);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Zc = ({
  client: e,
  children: t
}) => (P.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ Be.jsx($o.Provider, { value: e, children: t }));
const qo = F.createContext(null), el = ({
  children: e,
  session: t,
  setSession: r
}) => /* @__PURE__ */ ve(qo.Provider, { value: {
  session: t,
  setSession: r
}, children: e }), tl = () => {
  const e = P.useContext(qo);
  if (!e)
    throw new Error("useSession must be used within a SessionContextProvider");
  return [e.session, e.setSession];
};
function Vo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: rl } = Object.prototype, { getPrototypeOf: na } = Object, $n = ((e) => (t) => {
  const r = rl.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Tt = (e) => (e = e.toLowerCase(), (t) => $n(t) === e), qn = (e) => (t) => typeof t === e, { isArray: kr } = Array, Vr = qn("undefined");
function nl(e) {
  return e !== null && !Vr(e) && e.constructor !== null && !Vr(e.constructor) && ut(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Yo = Tt("ArrayBuffer");
function il(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Yo(e.buffer), t;
}
const al = qn("string"), ut = qn("function"), Go = qn("number"), Vn = (e) => e !== null && typeof e == "object", ol = (e) => e === !0 || e === !1, An = (e) => {
  if ($n(e) !== "object")
    return !1;
  const t = na(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, sl = Tt("Date"), cl = Tt("File"), ll = Tt("Blob"), ul = Tt("FileList"), fl = (e) => Vn(e) && ut(e.pipe), hl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ut(e.append) && ((t = $n(e)) === "formdata" || // detect form-data instance
  t === "object" && ut(e.toString) && e.toString() === "[object FormData]"));
}, dl = Tt("URLSearchParams"), pl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function on(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, i;
  if (typeof e != "object" && (e = [e]), kr(e))
    for (n = 0, i = e.length; n < i; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let s;
    for (n = 0; n < o; n++)
      s = a[n], t.call(null, e[s], s, e);
  }
}
function Ko(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], t === i.toLowerCase())
      return i;
  return null;
}
const Qo = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Jo = (e) => !Vr(e) && e !== Qo;
function Ri() {
  const { caseless: e } = Jo(this) && this || {}, t = {}, r = (n, i) => {
    const a = e && Ko(t, i) || i;
    An(t[a]) && An(n) ? t[a] = Ri(t[a], n) : An(n) ? t[a] = Ri({}, n) : kr(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && on(arguments[n], r);
  return t;
}
const ml = (e, t, r, { allOwnKeys: n } = {}) => (on(t, (i, a) => {
  r && ut(i) ? e[a] = Vo(i, r) : e[a] = i;
}, { allOwnKeys: n }), e), vl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yl = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, gl = (e, t, r, n) => {
  let i, a, o;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      o = i[a], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = r !== !1 && na(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, bl = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, wl = (e) => {
  if (!e)
    return null;
  if (kr(e))
    return e;
  let t = e.length;
  if (!Go(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, El = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && na(Uint8Array)), Al = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, _l = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ol = Tt("HTMLFormElement"), Cl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), ja = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Tl = Tt("RegExp"), Xo = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  on(r, (i, a) => {
    let o;
    (o = t(i, a, e)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(e, n);
}, xl = (e) => {
  Xo(e, (t, r) => {
    if (ut(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ut(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Sl = (e, t) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return kr(e) ? n(e) : n(String(e).split(t)), r;
}, Dl = () => {
}, Rl = (e, t) => (e = +e, Number.isFinite(e) ? e : t), fi = "abcdefghijklmnopqrstuvwxyz", Ia = "0123456789", Zo = {
  DIGIT: Ia,
  ALPHA: fi,
  ALPHA_DIGIT: fi + fi.toUpperCase() + Ia
}, Pl = (e = 16, t = Zo.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function kl(e) {
  return !!(e && ut(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Nl = (e) => {
  const t = new Array(10), r = (n, i) => {
    if (Vn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[i] = n;
        const a = kr(n) ? [] : {};
        return on(n, (o, s) => {
          const l = r(o, i + 1);
          !Vr(l) && (a[s] = l);
        }), t[i] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ll = Tt("AsyncFunction"), Ml = (e) => e && (Vn(e) || ut(e)) && ut(e.then) && ut(e.catch), S = {
  isArray: kr,
  isArrayBuffer: Yo,
  isBuffer: nl,
  isFormData: hl,
  isArrayBufferView: il,
  isString: al,
  isNumber: Go,
  isBoolean: ol,
  isObject: Vn,
  isPlainObject: An,
  isUndefined: Vr,
  isDate: sl,
  isFile: cl,
  isBlob: ll,
  isRegExp: Tl,
  isFunction: ut,
  isStream: fl,
  isURLSearchParams: dl,
  isTypedArray: El,
  isFileList: ul,
  forEach: on,
  merge: Ri,
  extend: ml,
  trim: pl,
  stripBOM: vl,
  inherits: yl,
  toFlatObject: gl,
  kindOf: $n,
  kindOfTest: Tt,
  endsWith: bl,
  toArray: wl,
  forEachEntry: Al,
  matchAll: _l,
  isHTMLForm: Ol,
  hasOwnProperty: ja,
  hasOwnProp: ja,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xo,
  freezeMethods: xl,
  toObjectSet: Sl,
  toCamelCase: Cl,
  noop: Dl,
  toFiniteNumber: Rl,
  findKey: Ko,
  global: Qo,
  isContextDefined: Jo,
  ALPHABET: Zo,
  generateString: Pl,
  isSpecCompliantForm: kl,
  toJSONObject: Nl,
  isAsyncFn: Ll,
  isThenable: Ml
};
function oe(e, t, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i);
}
S.inherits(oe, Error, {
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
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const es = oe.prototype, ts = {};
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
  ts[e] = { value: e };
});
Object.defineProperties(oe, ts);
Object.defineProperty(es, "isAxiosError", { value: !0 });
oe.from = (e, t, r, n, i, a) => {
  const o = Object.create(es);
  return S.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), oe.call(o, e.message, t, r, n, i), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const jl = null;
function Pi(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function rs(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fa(e, t, r) {
  return e ? e.concat(t).map(function(i, a) {
    return i = rs(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : t;
}
function Il(e) {
  return S.isArray(e) && !e.some(Pi);
}
const Fl = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Yn(e, t, r) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = S.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, g) {
    return !S.isUndefined(g[v]);
  });
  const n = r.metaTokens, i = r.visitor || h, a = r.dots, o = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
  if (!S.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null)
      return "";
    if (S.isDate(d))
      return d.toISOString();
    if (!l && S.isBlob(d))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(d) || S.isTypedArray(d) ? l && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function h(d, v, g) {
    let w = d;
    if (d && !g && typeof d == "object") {
      if (S.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), d = JSON.stringify(d);
      else if (S.isArray(d) && Il(d) || (S.isFileList(d) || S.endsWith(v, "[]")) && (w = S.toArray(d)))
        return v = rs(v), w.forEach(function(T, D) {
          !(S.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Fa([v], D, a) : o === null ? v : v + "[]",
            u(T)
          );
        }), !1;
    }
    return Pi(d) ? !0 : (t.append(Fa(g, v, a), u(d)), !1);
  }
  const c = [], y = Object.assign(Fl, {
    defaultVisitor: h,
    convertValue: u,
    isVisitable: Pi
  });
  function p(d, v) {
    if (!S.isUndefined(d)) {
      if (c.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      c.push(d), S.forEach(d, function(w, O) {
        (!(S.isUndefined(w) || w === null) && i.call(
          t,
          w,
          S.isString(O) ? O.trim() : O,
          v,
          y
        )) === !0 && p(w, v ? v.concat(O) : [O]);
      }), c.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Ba(e) {
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
function ia(e, t) {
  this._pairs = [], e && Yn(e, this, t);
}
const ns = ia.prototype;
ns.append = function(t, r) {
  this._pairs.push([t, r]);
};
ns.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ba);
  } : Ba;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Bl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function is(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Bl, i = r && r.serialize;
  let a;
  if (i ? a = i(t, r) : a = S.isURLSearchParams(t) ? t.toString() : new ia(t, r).toString(n), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class zl {
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
    S.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const za = zl, as = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wl = typeof URLSearchParams < "u" ? URLSearchParams : ia, Hl = typeof FormData < "u" ? FormData : null, Ul = typeof Blob < "u" ? Blob : null, $l = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wl,
    FormData: Hl,
    Blob: Ul
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, os = typeof window < "u" && typeof document < "u", ql = ((e) => os && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Vl = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: os,
  hasStandardBrowserEnv: ql,
  hasStandardBrowserWebWorkerEnv: Vl
}, Symbol.toStringTag, { value: "Module" })), Ot = {
  ...Yl,
  ...$l
};
function Gl(e, t) {
  return Yn(e, new Ot.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return Ot.isNode && S.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Kl(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ql(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function ss(e) {
  function t(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__")
      return !0;
    const s = Number.isFinite(+o), l = a >= r.length;
    return o = !o && S.isArray(i) ? i.length : o, l ? (S.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !S.isObject(i[o])) && (i[o] = []), t(r, n, i[o], a) && S.isArray(i[o]) && (i[o] = Ql(i[o])), !s);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const r = {};
    return S.forEachEntry(e, (n, i) => {
      t(Kl(n), i, r, 0);
    }), r;
  }
  return null;
}
function Jl(e, t, r) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const aa = {
  transitional: as,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = S.isObject(t);
    if (a && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
      return i ? JSON.stringify(ss(t)) : t;
    if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t))
      return t;
    if (S.isArrayBufferView(t))
      return t.buffer;
    if (S.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Gl(t, this.formSerializer).toString();
      if ((s = S.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Yn(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Jl(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || aa.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if (t && S.isString(t) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? oe.from(s, oe.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Ot.classes.FormData,
    Blob: Ot.classes.Blob
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
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  aa.headers[e] = {};
});
const oa = aa, Xl = S.toObjectSet([
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
]), Zl = (e) => {
  const t = {};
  let r, n, i;
  return e && e.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || t[r] && Xl[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Wa = Symbol("internals");
function Ir(e) {
  return e && String(e).trim().toLowerCase();
}
function _n(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(_n) : String(e);
}
function eu(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const tu = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function hi(e, t, r, n, i) {
  if (S.isFunction(n))
    return n.call(this, t, r);
  if (i && (t = r), !!S.isString(t)) {
    if (S.isString(n))
      return t.indexOf(n) !== -1;
    if (S.isRegExp(n))
      return n.test(t);
  }
}
function ru(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function nu(e, t) {
  const r = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(i, a, o) {
        return this[n].call(this, t, i, a, o);
      },
      configurable: !0
    });
  });
}
class Gn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(s, l, u) {
      const h = Ir(l);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const c = S.findKey(i, h);
      (!c || i[c] === void 0 || u === !0 || u === void 0 && i[c] !== !1) && (i[c || l] = _n(s));
    }
    const o = (s, l) => S.forEach(s, (u, h) => a(u, h, l));
    return S.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : S.isString(t) && (t = t.trim()) && !tu(t) ? o(Zl(t), r) : t != null && a(r, t, n), this;
  }
  get(t, r) {
    if (t = Ir(t), t) {
      const n = S.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return eu(i);
        if (S.isFunction(r))
          return r.call(this, i, n);
        if (S.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ir(t), t) {
      const n = S.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || hi(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = Ir(o), o) {
        const s = S.findKey(n, o);
        s && (!r || hi(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return S.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || hi(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const r = this, n = {};
    return S.forEach(this, (i, a) => {
      const o = S.findKey(n, a);
      if (o) {
        r[o] = _n(i), delete r[a];
        return;
      }
      const s = t ? ru(a) : String(a).trim();
      s !== a && delete r[a], r[s] = _n(i), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = t && S.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[Wa] = this[Wa] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = Ir(o);
      n[s] || (nu(i, o), n[s] = !0);
    }
    return S.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Gn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(Gn.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
S.freezeMethods(Gn);
const Pt = Gn;
function di(e, t) {
  const r = this || oa, n = t || r, i = Pt.from(n.headers);
  let a = n.data;
  return S.forEach(e, function(s) {
    a = s.call(r, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function cs(e) {
  return !!(e && e.__CANCEL__);
}
function sn(e, t, r) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, r), this.name = "CanceledError";
}
S.inherits(sn, oe, {
  __CANCEL__: !0
});
function iu(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new oe(
    "Request failed with status code " + r.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const au = Ot.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, i, a) {
      const o = [e + "=" + encodeURIComponent(t)];
      S.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), S.isString(n) && o.push("path=" + n), S.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ou(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function su(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ls(e, t) {
  return e && !ou(t) ? su(e, t) : t;
}
const cu = Ot.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function i(a) {
      let o = a;
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
    return n = i(window.location.href), function(o) {
      const s = S.isString(o) ? i(o) : o;
      return s.protocol === n.protocol && s.host === n.host;
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
function lu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function uu(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let i = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), h = n[a];
    o || (o = u), r[i] = l, n[i] = u;
    let c = a, y = 0;
    for (; c !== i; )
      y += r[c++], c = c % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), u - o < t)
      return;
    const p = h && u - h;
    return p ? Math.round(y * 1e3 / p) : void 0;
  };
}
function Ha(e, t) {
  let r = 0;
  const n = uu(50, 250);
  return (i) => {
    const a = i.loaded, o = i.lengthComputable ? i.total : void 0, s = a - r, l = n(s), u = a <= o;
    r = a;
    const h = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && o && u ? (o - a) / l : void 0,
      event: i
    };
    h[t ? "download" : "upload"] = !0, e(h);
  };
}
const fu = typeof XMLHttpRequest < "u", hu = fu && function(e) {
  return new Promise(function(r, n) {
    let i = e.data;
    const a = Pt.from(e.headers).normalize();
    let { responseType: o, withXSRFToken: s } = e, l;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let h;
    if (S.isFormData(i)) {
      if (Ot.hasStandardBrowserEnv || Ot.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((h = a.getContentType()) !== !1) {
        const [v, ...g] = h ? h.split(";").map((w) => w.trim()).filter(Boolean) : [];
        a.setContentType([v || "multipart/form-data", ...g].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(v + ":" + g));
    }
    const y = ls(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), is(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function p() {
      if (!c)
        return;
      const v = Pt.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), w = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      iu(function(T) {
        r(T), u();
      }, function(T) {
        n(T), u();
      }, w), c = null;
    }
    if ("onloadend" in c ? c.onloadend = p : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, c.onabort = function() {
      c && (n(new oe("Request aborted", oe.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new oe("Network Error", oe.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || as;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), n(new oe(
        g,
        w.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Ot.hasStandardBrowserEnv && (s && S.isFunction(s) && (s = s(e)), s || s !== !1 && cu(y))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && au.read(e.xsrfCookieName);
      v && a.set(e.xsrfHeaderName, v);
    }
    i === void 0 && a.setContentType(null), "setRequestHeader" in c && S.forEach(a.toJSON(), function(g, w) {
      c.setRequestHeader(w, g);
    }), S.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Ha(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ha(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      c && (n(!v || v.type ? new sn(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const d = lu(y);
    if (d && Ot.protocols.indexOf(d) === -1) {
      n(new oe("Unsupported protocol " + d + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(i || null);
  });
}, ki = {
  http: jl,
  xhr: hu
};
S.forEach(ki, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ua = (e) => `- ${e}`, du = (e) => S.isFunction(e) || e === null || e === !1, us = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const i = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let o;
      if (n = r, !du(r) && (n = ki[(o = String(r)).toLowerCase()], n === void 0))
        throw new oe(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(Ua).join(`
`) : " " + Ua(a[0]) : "as no adapter specified";
      throw new oe(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ki
};
function pi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new sn(null, e);
}
function $a(e) {
  return pi(e), e.headers = Pt.from(e.headers), e.data = di.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), us.getAdapter(e.adapter || oa.adapter)(e).then(function(n) {
    return pi(e), n.data = di.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Pt.from(n.headers), n;
  }, function(n) {
    return cs(n) || (pi(e), n && n.response && (n.response.data = di.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Pt.from(n.response.headers))), Promise.reject(n);
  });
}
const qa = (e) => e instanceof Pt ? e.toJSON() : e;
function Pr(e, t) {
  t = t || {};
  const r = {};
  function n(u, h, c) {
    return S.isPlainObject(u) && S.isPlainObject(h) ? S.merge.call({ caseless: c }, u, h) : S.isPlainObject(h) ? S.merge({}, h) : S.isArray(h) ? h.slice() : h;
  }
  function i(u, h, c) {
    if (S.isUndefined(h)) {
      if (!S.isUndefined(u))
        return n(void 0, u, c);
    } else
      return n(u, h, c);
  }
  function a(u, h) {
    if (!S.isUndefined(h))
      return n(void 0, h);
  }
  function o(u, h) {
    if (S.isUndefined(h)) {
      if (!S.isUndefined(u))
        return n(void 0, u);
    } else
      return n(void 0, h);
  }
  function s(u, h, c) {
    if (c in t)
      return n(u, h);
    if (c in e)
      return n(void 0, u);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
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
    validateStatus: s,
    headers: (u, h) => i(qa(u), qa(h), !0)
  };
  return S.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
    const c = l[h] || i, y = c(e[h], t[h], h);
    S.isUndefined(y) && c !== s || (r[h] = y);
  }), r;
}
const fs = "1.6.7", sa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  sa[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Va = {};
sa.transitional = function(t, r, n) {
  function i(a, o) {
    return "[Axios v" + fs + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (t === !1)
      throw new oe(
        i(o, " has been removed" + (r ? " in " + r : "")),
        oe.ERR_DEPRECATED
      );
    return r && !Va[o] && (Va[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, o, s) : !0;
  };
};
function pu(e, t, r) {
  if (typeof e != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = t[a];
    if (o) {
      const s = e[a], l = s === void 0 || o(s, a, e);
      if (l !== !0)
        throw new oe("option " + a + " must be " + l, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new oe("Unknown option " + a, oe.ERR_BAD_OPTION);
  }
}
const Ni = {
  assertOptions: pu,
  validators: sa
}, jt = Ni.validators;
class Sn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new za(),
      response: new za()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Pr(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Ni.assertOptions(n, {
      silentJSONParsing: jt.transitional(jt.boolean),
      forcedJSONParsing: jt.transitional(jt.boolean),
      clarifyTimeoutError: jt.transitional(jt.boolean)
    }, !1), i != null && (S.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Ni.assertOptions(i, {
      encode: jt.function,
      serialize: jt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && S.merge(
      a.common,
      a[r.method]
    );
    a && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), r.headers = Pt.concat(o, a);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (l = l && v.synchronous, s.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let h, c = 0, y;
    if (!l) {
      const d = [$a.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, u), y = d.length, h = Promise.resolve(r); c < y; )
        h = h.then(d[c++], d[c++]);
      return h;
    }
    y = s.length;
    let p = r;
    for (c = 0; c < y; ) {
      const d = s[c++], v = s[c++];
      try {
        p = d(p);
      } catch (g) {
        v.call(this, g);
        break;
      }
    }
    try {
      h = $a.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (c = 0, y = u.length; c < y; )
      h = h.then(u[c++], u[c++]);
    return h;
  }
  getUri(t) {
    t = Pr(this.defaults, t);
    const r = ls(t.baseURL, t.url);
    return is(r, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(t) {
  Sn.prototype[t] = function(r, n) {
    return this.request(Pr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, o, s) {
      return this.request(Pr(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  Sn.prototype[t] = r(), Sn.prototype[t + "Form"] = r(!0);
});
const On = Sn;
class ca {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const o = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, t(function(a, o, s) {
      n.reason || (n.reason = new sn(a, o, s), r(n.reason));
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
      token: new ca(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
const mu = ca;
function vu(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function yu(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const Li = {
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
Object.entries(Li).forEach(([e, t]) => {
  Li[t] = e;
});
const gu = Li;
function hs(e) {
  const t = new On(e), r = Vo(On.prototype.request, t);
  return S.extend(r, On.prototype, t, { allOwnKeys: !0 }), S.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(i) {
    return hs(Pr(e, i));
  }, r;
}
const Le = hs(oa);
Le.Axios = On;
Le.CanceledError = sn;
Le.CancelToken = mu;
Le.isCancel = cs;
Le.VERSION = fs;
Le.toFormData = Yn;
Le.AxiosError = oe;
Le.Cancel = Le.CanceledError;
Le.all = function(t) {
  return Promise.all(t);
};
Le.spread = vu;
Le.isAxiosError = yu;
Le.mergeConfig = Pr;
Le.AxiosHeaders = Pt;
Le.formToJSON = (e) => ss(S.isHTMLForm(e) ? new FormData(e) : e);
Le.getAdapter = us.getAdapter;
Le.HttpStatusCode = gu;
Le.default = Le;
const ds = Le, ps = F.createContext(null), ep = () => F.useContext(ps), bu = ({
  children: e,
  baseURL: t,
  refreshSession: r,
  onSessionExpired: n
}) => {
  const [i, a] = tl();
  let o = null;
  const s = P.useMemo(() => {
    const l = ds.create({
      baseURL: t,
      headers: {
        Authorization: i ? `Bearer ${i.access_token}` : void 0,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    return l.interceptors.response.use((u) => u, async (u) => {
      var c, y, p;
      const h = (d) => l({
        ...u.config,
        headers: {
          ...u.config.headers,
          Authorization: `Bearer ${d}`
        }
      });
      if (i && !i.locked && ((c = u.response) == null ? void 0 : c.status) === 401)
        if (o)
          try {
            const d = await o;
            return h(d.access_token);
          } catch {
            throw new Error("Need relogin");
          }
        else {
          o = r({
            refreshToken: i.refresh_token,
            accessToken: i.access_token,
            baseURL: t
          });
          try {
            const d = await o;
            return a(d), h(d.access_token);
          } catch {
            Ae.warn("Сессия истекла", {
              toastId: "session-stale"
            }), n();
          } finally {
            o = null;
          }
        }
      throw ((y = u.response) == null ? void 0 : y.status) === 500 && Ae.error(/* @__PURE__ */ Bn("div", { children: [
        /* @__PURE__ */ ve("div", { css: {
          fontWeight: "500"
        }, children: "Ошибка сервера" }),
        /* @__PURE__ */ ve("div", { css: {
          padding: "0.25rem",
          fontSize: "0.75rem",
          lineHeight: "1rem"
        }, children: ((p = u.response.data) == null ? void 0 : p.message) || u.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      }), u;
    }), l;
  }, [i == null ? void 0 : i.access_token]);
  return /* @__PURE__ */ ve(ps.Provider, { value: {
    client: s
  }, children: e });
}, ms = F.createContext(null), wu = () => {
  const e = F.useContext(ms);
  if (!e)
    throw new Error("useRouteContext must be used within a RouteContextProvider");
  return e;
}, Eu = ({
  children: e,
  routes: t
}) => /* @__PURE__ */ ve(ms.Provider, { value: {
  routes: t
}, children: e }), Au = async ({
  baseURL: e,
  refreshToken: t,
  accessToken: r
}) => {
  const {
    data: {
      data: n
    }
  } = await ds.post("/api/user/refresh", {
    refresh_token: t
  }, {
    baseURL: e,
    headers: {
      Authorization: `Bearer ${r}`,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  return n;
}, _u = new Xc({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    },
    mutations: {
      retry: !1
    }
  }
}), Ou = pc({
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
}), Cu = ({
  children: e,
  refreshSession: t,
  onSessionExpired: r,
  updateSession: n,
  session: i
}) => /* @__PURE__ */ ve(el, { session: i, setSession: n, children: /* @__PURE__ */ ve(mc, { theme: Ou, children: /* @__PURE__ */ ve(bu, { refreshSession: t || Au, onSessionExpired: r, children: /* @__PURE__ */ ve(Zc, { client: _u, children: /* @__PURE__ */ ve(Eu, { routes: Mo, children: e }) }) }) }) }), Tu = () => {
  const {
    routes: e
  } = wu();
  return e;
}, tp = Zi(({
  className: e,
  ...t
}) => /* @__PURE__ */ ve(vc, { ...t, classes: {
  popper: e
} }))`
  .${Ta.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Ta.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`;
var xu = "Expected a function", vs = "__lodash_hash_undefined__", Su = "[object Function]", Du = "[object GeneratorFunction]", Ru = /[\\^$.*+?()[\]{}|]/g, Pu = /^\[object .+?Constructor\]$/, ku = typeof pn == "object" && pn && pn.Object === Object && pn, Nu = typeof self == "object" && self && self.Object === Object && self, ys = ku || Nu || Function("return this")();
function Lu(e, t) {
  return e == null ? void 0 : e[t];
}
function Mu(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
var ju = Array.prototype, Iu = Function.prototype, gs = Object.prototype, mi = ys["__core-js_shared__"], Ya = function() {
  var e = /[^.]+$/.exec(mi && mi.keys && mi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), bs = Iu.toString, la = gs.hasOwnProperty, Fu = gs.toString, Bu = RegExp(
  "^" + bs.call(la).replace(Ru, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), zu = ju.splice, Wu = ws(ys, "Map"), Yr = ws(Object, "create");
function sr(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function Hu() {
  this.__data__ = Yr ? Yr(null) : {};
}
function Uu(e) {
  return this.has(e) && delete this.__data__[e];
}
function $u(e) {
  var t = this.__data__;
  if (Yr) {
    var r = t[e];
    return r === vs ? void 0 : r;
  }
  return la.call(t, e) ? t[e] : void 0;
}
function qu(e) {
  var t = this.__data__;
  return Yr ? t[e] !== void 0 : la.call(t, e);
}
function Vu(e, t) {
  var r = this.__data__;
  return r[e] = Yr && t === void 0 ? vs : t, this;
}
sr.prototype.clear = Hu;
sr.prototype.delete = Uu;
sr.prototype.get = $u;
sr.prototype.has = qu;
sr.prototype.set = Vu;
function Nr(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function Yu() {
  this.__data__ = [];
}
function Gu(e) {
  var t = this.__data__, r = Kn(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : zu.call(t, r, 1), !0;
}
function Ku(e) {
  var t = this.__data__, r = Kn(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Qu(e) {
  return Kn(this.__data__, e) > -1;
}
function Ju(e, t) {
  var r = this.__data__, n = Kn(r, e);
  return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
}
Nr.prototype.clear = Yu;
Nr.prototype.delete = Gu;
Nr.prototype.get = Ku;
Nr.prototype.has = Qu;
Nr.prototype.set = Ju;
function cr(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function Xu() {
  this.__data__ = {
    hash: new sr(),
    map: new (Wu || Nr)(),
    string: new sr()
  };
}
function Zu(e) {
  return Qn(this, e).delete(e);
}
function ef(e) {
  return Qn(this, e).get(e);
}
function tf(e) {
  return Qn(this, e).has(e);
}
function rf(e, t) {
  return Qn(this, e).set(e, t), this;
}
cr.prototype.clear = Xu;
cr.prototype.delete = Zu;
cr.prototype.get = ef;
cr.prototype.has = tf;
cr.prototype.set = rf;
function Kn(e, t) {
  for (var r = e.length; r--; )
    if (cf(e[r][0], t))
      return r;
  return -1;
}
function nf(e) {
  if (!Es(e) || of(e))
    return !1;
  var t = lf(e) || Mu(e) ? Bu : Pu;
  return t.test(sf(e));
}
function Qn(e, t) {
  var r = e.__data__;
  return af(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ws(e, t) {
  var r = Lu(e, t);
  return nf(r) ? r : void 0;
}
function af(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function of(e) {
  return !!Ya && Ya in e;
}
function sf(e) {
  if (e != null) {
    try {
      return bs.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
function ua(e, t) {
  if (typeof e != "function" || t && typeof t != "function")
    throw new TypeError(xu);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o), o;
  };
  return r.cache = new (ua.Cache || cr)(), r;
}
ua.Cache = cr;
function cf(e, t) {
  return e === t || e !== e && t !== t;
}
function lf(e) {
  var t = Es(e) ? Fu.call(e) : "";
  return t == Su || t == Du;
}
function Es(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
var uf = ua;
const As = /* @__PURE__ */ ea(uf);
function _s(e) {
  return JSON.stringify(e);
}
function ff(e) {
  return typeof e == "string";
}
function hf(e, t, r) {
  return r.indexOf(e) === t;
}
function df(e) {
  return e.toLowerCase() === e;
}
function Ga(e) {
  return e.indexOf(",") === -1 ? e : e.split(",");
}
function Mi(e) {
  if (!e)
    return e;
  if (e === "C" || e === "posix" || e === "POSIX")
    return "en-US";
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0], r = t === void 0 ? "" : t;
    return Mi(r);
  }
  if (e.indexOf("@") !== -1) {
    var n = e.split("@")[0], r = n === void 0 ? "" : n;
    return Mi(r);
  }
  if (e.indexOf("-") === -1 || !df(e))
    return e;
  var i = e.split("-"), a = i[0], o = i[1], s = o === void 0 ? "" : o;
  return "".concat(a, "-").concat(s.toUpperCase());
}
function pf(e) {
  var t = e === void 0 ? {} : e, r = t.useFallbackLocale, n = r === void 0 ? !0 : r, i = t.fallbackLocale, a = i === void 0 ? "en-US" : i, o = [];
  if (typeof navigator < "u") {
    for (var s = navigator.languages || [], l = [], u = 0, h = s; u < h.length; u++) {
      var c = h[u];
      l = l.concat(Ga(c));
    }
    var y = navigator.language, p = y && Ga(y);
    o = o.concat(l, p);
  }
  return n && o.push(a), o.filter(ff).map(Mi).filter(hf);
}
var mf = As(pf, _s);
function vf(e) {
  return mf(e)[0] || null;
}
var Os = As(vf, _s);
function Nt(e, t, r) {
  return function(i, a) {
    a === void 0 && (a = r);
    var o = e(i) + a;
    return t(o);
  };
}
function cn(e) {
  return function(r) {
    return new Date(e(r).getTime() - 1);
  };
}
function ln(e, t) {
  return function(n) {
    return [e(n), t(n)];
  };
}
function Te(e) {
  if (e instanceof Date)
    return e.getFullYear();
  if (typeof e == "number")
    return e;
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t))
    return t;
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function Gt(e) {
  if (e instanceof Date)
    return e.getMonth();
  throw new Error("Failed to get month from date: ".concat(e, "."));
}
function Jn(e) {
  if (e instanceof Date)
    return e.getDate();
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function Lr(e) {
  var t = Te(e), r = t + (-t + 1) % 100, n = /* @__PURE__ */ new Date();
  return n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
}
var yf = Nt(Te, Lr, -100), Cs = Nt(Te, Lr, 100), fa = cn(Cs), gf = Nt(Te, fa, -100), Ts = ln(Lr, fa);
function Kt(e) {
  var t = Te(e), r = t + (-t + 1) % 10, n = /* @__PURE__ */ new Date();
  return n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
}
var xs = Nt(Te, Kt, -10), ha = Nt(Te, Kt, 10), Xn = cn(ha), Ss = Nt(Te, Xn, -10), Ds = ln(Kt, Xn);
function Mr(e) {
  var t = Te(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var Rs = Nt(Te, Mr, -1), da = Nt(Te, Mr, 1), Zn = cn(da), Ps = Nt(Te, Zn, -1), bf = ln(Mr, Zn);
function pa(e, t) {
  return function(n, i) {
    i === void 0 && (i = t);
    var a = Te(n), o = Gt(n) + i, s = /* @__PURE__ */ new Date();
    return s.setFullYear(a, o, 1), s.setHours(0, 0, 0, 0), e(s);
  };
}
function lr(e) {
  var t = Te(e), r = Gt(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, r, 1), n.setHours(0, 0, 0, 0), n;
}
var ks = pa(lr, -1), ma = pa(lr, 1), un = cn(ma), Ns = pa(un, -1), wf = ln(lr, un);
function Ef(e, t) {
  return function(n, i) {
    i === void 0 && (i = t);
    var a = Te(n), o = Gt(n), s = Jn(n) + i, l = /* @__PURE__ */ new Date();
    return l.setFullYear(a, o, s), l.setHours(0, 0, 0, 0), e(l);
  };
}
function fn(e) {
  var t = Te(e), r = Gt(e), n = Jn(e), i = /* @__PURE__ */ new Date();
  return i.setFullYear(t, r, n), i.setHours(0, 0, 0, 0), i;
}
var Af = Ef(fn, 1), va = cn(Af), _f = ln(fn, va);
function Ls(e) {
  return Jn(un(e));
}
var Fr, _e = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, mr = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
}, Of = (Fr = {}, Fr[_e.GREGORY] = [
  "en-CA",
  "en-US",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-DO",
  "es-EC",
  "es-GT",
  "es-HN",
  "es-MX",
  "es-NI",
  "es-PA",
  "es-PE",
  "es-PR",
  "es-SV",
  "es-VE",
  "pt-BR"
], Fr[_e.HEBREW] = ["he", "he-IL"], Fr[_e.ISLAMIC] = [
  // ar-LB, ar-MA intentionally missing
  "ar",
  "ar-AE",
  "ar-BH",
  "ar-DZ",
  "ar-EG",
  "ar-IQ",
  "ar-JO",
  "ar-KW",
  "ar-LY",
  "ar-OM",
  "ar-QA",
  "ar-SA",
  "ar-SD",
  "ar-SY",
  "ar-YE",
  "dv",
  "dv-MV",
  "ps",
  "ps-AR"
], Fr), ya = [0, 1, 2, 3, 4, 5, 6], vi = /* @__PURE__ */ new Map();
function Cf(e) {
  return function(r, n) {
    var i = r || Os();
    vi.has(i) || vi.set(i, /* @__PURE__ */ new Map());
    var a = vi.get(i);
    return a.has(e) || a.set(e, new Intl.DateTimeFormat(i || void 0, e).format), a.get(e)(n);
  };
}
function Tf(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function ur(e) {
  return function(t, r) {
    return Cf(e)(t, Tf(r));
  };
}
var xf = { day: "numeric" }, Sf = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, Df = { month: "long" }, Rf = {
  month: "long",
  year: "numeric"
}, Pf = { weekday: "short" }, kf = { weekday: "long" }, Nf = { year: "numeric" }, Lf = ur(xf), Mf = ur(Sf), jf = ur(Df), Ms = ur(Rf), If = ur(Pf), Ff = ur(kf), ei = ur(Nf), Bf = ya[0], zf = ya[5], Ka = ya[6];
function Gr(e, t) {
  t === void 0 && (t = _e.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case _e.ISO_8601:
      return (r + 6) % 7;
    case _e.ISLAMIC:
      return (r + 1) % 7;
    case _e.HEBREW:
    case _e.GREGORY:
      return r;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function Wf(e) {
  var t = Lr(e);
  return Te(t);
}
function Hf(e) {
  var t = Kt(e);
  return Te(t);
}
function ji(e, t) {
  t === void 0 && (t = _e.ISO_8601);
  var r = Te(e), n = Gt(e), i = e.getDate() - Gr(e, t);
  return new Date(r, n, i);
}
function Uf(e, t) {
  t === void 0 && (t = _e.ISO_8601);
  var r = t === _e.GREGORY ? _e.GREGORY : _e.ISO_8601, n = ji(e, t), i = Te(e) + 1, a, o;
  do
    a = new Date(i, 0, r === _e.ISO_8601 ? 4 : 1), o = ji(a, t), i -= 1;
  while (e < o);
  return Math.round((n.getTime() - o.getTime()) / (864e5 * 7)) + 1;
}
function ar(e, t) {
  switch (e) {
    case "century":
      return Lr(t);
    case "decade":
      return Kt(t);
    case "year":
      return Mr(t);
    case "month":
      return lr(t);
    case "day":
      return fn(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function $f(e, t) {
  switch (e) {
    case "century":
      return yf(t);
    case "decade":
      return xs(t);
    case "year":
      return Rs(t);
    case "month":
      return ks(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function js(e, t) {
  switch (e) {
    case "century":
      return Cs(t);
    case "decade":
      return ha(t);
    case "year":
      return da(t);
    case "month":
      return ma(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function qf(e, t) {
  switch (e) {
    case "decade":
      return xs(t, -100);
    case "year":
      return Rs(t, -10);
    case "month":
      return ks(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Vf(e, t) {
  switch (e) {
    case "decade":
      return ha(t, 100);
    case "year":
      return da(t, 10);
    case "month":
      return ma(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Is(e, t) {
  switch (e) {
    case "century":
      return fa(t);
    case "decade":
      return Xn(t);
    case "year":
      return Zn(t);
    case "month":
      return un(t);
    case "day":
      return va(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Yf(e, t) {
  switch (e) {
    case "century":
      return gf(t);
    case "decade":
      return Ss(t);
    case "year":
      return Ps(t);
    case "month":
      return Ns(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Gf(e, t) {
  switch (e) {
    case "decade":
      return Ss(t, -100);
    case "year":
      return Ps(t, -10);
    case "month":
      return Ns(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Qa(e, t) {
  switch (e) {
    case "century":
      return Ts(t);
    case "decade":
      return Ds(t);
    case "year":
      return bf(t);
    case "month":
      return wf(t);
    case "day":
      return _f(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Kf(e, t, r) {
  var n = [t, r].sort(function(i, a) {
    return i.getTime() - a.getTime();
  });
  return [ar(e, n[0]), Is(e, n[1])];
}
function Fs(e, t, r) {
  return t === void 0 && (t = ei), r.map(function(n) {
    return t(e, n);
  }).join(" – ");
}
function Qf(e, t, r) {
  return Fs(e, t, Ts(r));
}
function Bs(e, t, r) {
  return Fs(e, t, Ds(r));
}
function Jf(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function zs(e, t) {
  t === void 0 && (t = _e.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case _e.ISLAMIC:
    case _e.HEBREW:
      return r === zf || r === Ka;
    case _e.ISO_8601:
    case _e.GREGORY:
      return r === Ka || r === Bf;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var yt = "react-calendar__navigation";
function Xf(e) {
  var t = e.activeStartDate, r = e.drillUp, n = e.formatMonthYear, i = n === void 0 ? Ms : n, a = e.formatYear, o = a === void 0 ? ei : a, s = e.locale, l = e.maxDate, u = e.minDate, h = e.navigationAriaLabel, c = h === void 0 ? "" : h, y = e.navigationAriaLive, p = e.navigationLabel, d = e.next2AriaLabel, v = d === void 0 ? "" : d, g = e.next2Label, w = g === void 0 ? "»" : g, O = e.nextAriaLabel, T = O === void 0 ? "" : O, D = e.nextLabel, B = D === void 0 ? "›" : D, $ = e.prev2AriaLabel, Q = $ === void 0 ? "" : $, H = e.prev2Label, Y = H === void 0 ? "«" : H, se = e.prevAriaLabel, ne = se === void 0 ? "" : se, ce = e.prevLabel, ye = ce === void 0 ? "‹" : ce, de = e.setActiveStartDate, V = e.showDoubleView, ee = e.view, Oe = e.views, f = Oe.indexOf(ee) > 0, m = ee !== "century", b = $f(ee, t), E = m ? qf(ee, t) : void 0, A = js(ee, t), _ = m ? Vf(ee, t) : void 0, N = function() {
    if (b.getFullYear() < 0)
      return !0;
    var ae = Yf(ee, t);
    return u && u >= ae;
  }(), I = m && function() {
    if (E.getFullYear() < 0)
      return !0;
    var ae = Gf(ee, t);
    return u && u >= ae;
  }(), L = l && l < A, M = m && l && l < _;
  function U() {
    de(b, "prev");
  }
  function fe() {
    de(E, "prev2");
  }
  function Z() {
    de(A, "next");
  }
  function te() {
    de(_, "next2");
  }
  function ue(ae) {
    var We = function() {
      switch (ee) {
        case "century":
          return Qf(s, o, ae);
        case "decade":
          return Bs(s, o, ae);
        case "year":
          return o(s, ae);
        case "month":
          return i(s, ae);
        default:
          throw new Error("Invalid view: ".concat(ee, "."));
      }
    }();
    return p ? p({
      date: ae,
      label: We,
      locale: s || Os() || void 0,
      view: ee
    }) : We;
  }
  function xe() {
    var ae = "".concat(yt, "__label");
    return F.createElement(
      "button",
      { "aria-label": c, "aria-live": y, className: ae, disabled: !f, onClick: r, style: { flexGrow: 1 }, type: "button" },
      F.createElement("span", { className: "".concat(ae, "__labelText ").concat(ae, "__labelText--from") }, ue(t)),
      V ? F.createElement(
        F.Fragment,
        null,
        F.createElement("span", { className: "".concat(ae, "__divider") }, " – "),
        F.createElement("span", { className: "".concat(ae, "__labelText ").concat(ae, "__labelText--to") }, ue(A))
      ) : null
    );
  }
  return F.createElement(
    "div",
    { className: yt },
    Y !== null && m ? F.createElement("button", { "aria-label": Q, className: "".concat(yt, "__arrow ").concat(yt, "__prev2-button"), disabled: I, onClick: fe, type: "button" }, Y) : null,
    ye !== null && F.createElement("button", { "aria-label": ne, className: "".concat(yt, "__arrow ").concat(yt, "__prev-button"), disabled: N, onClick: U, type: "button" }, ye),
    xe(),
    B !== null && F.createElement("button", { "aria-label": T, className: "".concat(yt, "__arrow ").concat(yt, "__next-button"), disabled: L, onClick: Z, type: "button" }, B),
    w !== null && m ? F.createElement("button", { "aria-label": v, className: "".concat(yt, "__arrow ").concat(yt, "__next2-button"), disabled: M, onClick: te, type: "button" }, w) : null
  );
}
var vr = globalThis && globalThis.__assign || function() {
  return vr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, vr.apply(this, arguments);
}, Zf = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function Ja(e) {
  return "".concat(e, "%");
}
function ga(e) {
  var t = e.children, r = e.className, n = e.count, i = e.direction, a = e.offset, o = e.style, s = e.wrap, l = Zf(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return F.createElement("div", vr({ className: r, style: vr({ display: "flex", flexDirection: i, flexWrap: s ? "wrap" : "nowrap" }, o) }, l), F.Children.map(t, function(u, h) {
    var c = a && h === 0 ? Ja(100 * a / n) : null;
    return F.cloneElement(u, vr(vr({}, u.props), { style: {
      flexBasis: Ja(100 / n),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: c,
      marginInlineStart: c,
      marginInlineEnd: 0
    } }));
  }));
}
var eh = function() {
}, th = eh;
const rh = /* @__PURE__ */ ea(th);
var hr;
function nh(e, t, r) {
  return t && t > e ? t : r && r < e ? r : e;
}
function Kr(e, t) {
  return t[0] <= e && t[1] >= e;
}
function ih(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function Ws(e, t) {
  return Kr(e[0], t) || Kr(e[1], t);
}
function Xa(e, t, r) {
  var n = Ws(t, e), i = [];
  if (n) {
    i.push(r);
    var a = Kr(e[0], t), o = Kr(e[1], t);
    a && i.push("".concat(r, "Start")), o && i.push("".concat(r, "End")), a && o && i.push("".concat(r, "BothEnds"));
  }
  return i;
}
function ah(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function oh(e) {
  if (!e)
    throw new Error("args is required");
  var t = e.value, r = e.date, n = e.hover, i = "react-calendar__tile", a = [i];
  if (!r)
    return a;
  var o = /* @__PURE__ */ new Date(), s = function() {
    if (Array.isArray(r))
      return r;
    var p = e.dateType;
    if (!p)
      throw new Error("dateType is required when date is not an array of two dates");
    return Qa(p, r);
  }();
  if (Kr(o, s) && a.push("".concat(i, "--now")), !t || !ah(t))
    return a;
  var l = function() {
    if (Array.isArray(t))
      return t;
    var p = e.valueType;
    if (!p)
      throw new Error("valueType is required when value is not an array of two dates");
    return Qa(p, t);
  }();
  ih(l, s) ? a.push("".concat(i, "--active")) : Ws(l, s) && a.push("".concat(i, "--hasActive"));
  var u = Xa(l, s, "".concat(i, "--range"));
  a.push.apply(a, u);
  var h = Array.isArray(t) ? t : [t];
  if (n && h.length === 1) {
    var c = n > l[0] ? [l[0], n] : [n, l[0]], y = Xa(c, s, "".concat(i, "--hover"));
    a.push.apply(a, y);
  }
  return a;
}
var sh = (hr = {}, hr[mr.ARABIC] = _e.ISLAMIC, hr[mr.HEBREW] = _e.HEBREW, hr[mr.ISO_8601] = _e.ISO_8601, hr[mr.US] = _e.GREGORY, hr);
function ch(e) {
  return e !== void 0 && e in mr;
}
var Za = !1;
function ti(e) {
  if (ch(e)) {
    var t = sh[e];
    return rh(Za, 'Specifying calendarType="'.concat(e, '" is deprecated. Use calendarType="').concat(t, '" instead.')), Za = !0, t;
  }
  return e;
}
function ri(e) {
  for (var t = e.className, r = e.count, n = r === void 0 ? 3 : r, i = e.dateTransform, a = e.dateType, o = e.end, s = e.hover, l = e.offset, u = e.renderTile, h = e.start, c = e.step, y = c === void 0 ? 1 : c, p = e.value, d = e.valueType, v = [], g = h; g <= o; g += y) {
    var w = i(g);
    v.push(u({
      classes: oh({
        date: w,
        dateType: a,
        hover: s,
        value: p,
        valueType: d
      }),
      date: w
    }));
  }
  return F.createElement(ga, { className: t, count: n, offset: l, wrap: !0 }, v);
}
function ni(e) {
  var t = e.activeStartDate, r = e.children, n = e.classes, i = e.date, a = e.formatAbbr, o = e.locale, s = e.maxDate, l = e.maxDateTransform, u = e.minDate, h = e.minDateTransform, c = e.onClick, y = e.onMouseOver, p = e.style, d = e.tileClassName, v = e.tileContent, g = e.tileDisabled, w = e.view, O = P.useMemo(function() {
    var D = { activeStartDate: t, date: i, view: w };
    return typeof d == "function" ? d(D) : d;
  }, [t, i, d, w]), T = P.useMemo(function() {
    var D = { activeStartDate: t, date: i, view: w };
    return typeof v == "function" ? v(D) : v;
  }, [t, i, v, w]);
  return F.createElement(
    "button",
    { className: Fn(n, O), disabled: u && h(u) > i || s && l(s) < i || g && g({ activeStartDate: t, date: i, view: w }), onClick: c ? function(D) {
      return c(i, D);
    } : void 0, onFocus: y ? function() {
      return y(i);
    } : void 0, onMouseOver: y ? function() {
      return y(i);
    } : void 0, style: p, type: "button" },
    a ? F.createElement("abbr", { "aria-label": a(o, i) }, r) : r,
    T
  );
}
var Ii = globalThis && globalThis.__assign || function() {
  return Ii = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ii.apply(this, arguments);
}, lh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, yi = "react-calendar__century-view__decades__decade";
function uh(e) {
  var t = e.classes, r = t === void 0 ? [] : t, n = e.currentCentury, i = e.formatYear, a = i === void 0 ? ei : i, o = lh(e, ["classes", "currentCentury", "formatYear"]), s = o.date, l = o.locale, u = [];
  return r && u.push.apply(u, r), yi && u.push(yi), Lr(s).getFullYear() !== n && u.push("".concat(yi, "--neighboringCentury")), F.createElement(ni, Ii({}, o, { classes: u, maxDateTransform: Xn, minDateTransform: Kt, view: "century" }), Bs(l, a, s));
}
var Fi = globalThis && globalThis.__assign || function() {
  return Fi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Fi.apply(this, arguments);
}, eo = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function fh(e) {
  var t = e.activeStartDate, r = e.hover, n = e.showNeighboringCentury, i = e.value, a = e.valueType, o = eo(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), s = Wf(t), l = s + (n ? 119 : 99);
  return F.createElement(ri, { className: "react-calendar__century-view__decades", dateTransform: Kt, dateType: "decade", end: l, hover: r, renderTile: function(u) {
    var h = u.date, c = eo(u, ["date"]);
    return F.createElement(uh, Fi({ key: h.getTime() }, o, c, { activeStartDate: t, currentCentury: s, date: h }));
  }, start: s, step: 10, value: i, valueType: a });
}
var to = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, hh = Object.values(_e), dh = Object.values(mr), Bi = ["century", "decade", "year", "month"], Hs = R.oneOf(to(to([], hh, !0), dh, !0)), Dn = R.oneOfType([
  R.string,
  R.arrayOf(R.string)
]), ba = function(t, r, n) {
  var i = t, a = r, o = i[a];
  if (!o)
    return null;
  if (!(o instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof o, "` supplied to `").concat(n, "`, expected instance of `Date`."));
  var s = t.maxDate;
  return s && o > s ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof o, "` supplied to `").concat(n, "`, minDate cannot be larger than maxDate.")) : null;
}, wa = function(t, r, n) {
  var i = t, a = r, o = i[a];
  if (!o)
    return null;
  if (!(o instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof o, "` supplied to `").concat(n, "`, expected instance of `Date`."));
  var s = t.minDate;
  return s && o < s ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof o, "` supplied to `").concat(n, "`, maxDate cannot be smaller than minDate.")) : null;
}, ph = R.oneOfType([
  R.func,
  R.exact({
    current: R.any
  })
]), mh = R.arrayOf(R.oneOfType([R.instanceOf(Date), R.oneOf([null])]).isRequired), vh = R.oneOfType([
  R.instanceOf(Date),
  R.oneOf([null]),
  mh
]);
R.arrayOf(R.oneOf(Bi));
var Rn = function(t, r, n) {
  var i = t, a = r, o = i[a];
  return o !== void 0 && (typeof o != "string" || Bi.indexOf(o) === -1) ? new Error("Invalid prop `".concat(r, "` of value `").concat(o, "` supplied to `").concat(n, "`, expected one of [").concat(Bi.map(function(s) {
    return '"'.concat(s, '"');
  }).join(", "), "].")) : null;
};
Rn.isRequired = function(t, r, n, i, a) {
  var o = t, s = r, l = o[s];
  return l ? Rn(t, r, n) : new Error("The prop `".concat(r, "` is marked as required in `").concat(n, "`, but its value is `").concat(l, "`."));
};
var yh = function(e) {
  return R.arrayOf(e);
}, ii = {
  activeStartDate: R.instanceOf(Date).isRequired,
  hover: R.instanceOf(Date),
  locale: R.string,
  maxDate: wa,
  minDate: ba,
  onClick: R.func,
  onMouseOver: R.func,
  tileClassName: R.oneOfType([R.func, Dn]),
  tileContent: R.oneOfType([R.func, R.node]),
  value: vh,
  valueType: R.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
R.instanceOf(Date).isRequired, R.arrayOf(R.string.isRequired).isRequired, R.instanceOf(Date).isRequired, R.string, R.func, R.func, R.objectOf(R.oneOfType([R.string, R.number])), R.oneOfType([R.func, Dn]), R.oneOfType([R.func, R.node]), R.func;
var Qr = globalThis && globalThis.__assign || function() {
  return Qr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Qr.apply(this, arguments);
}, Us = function(t) {
  function r() {
    return F.createElement(fh, Qr({}, t));
  }
  return F.createElement("div", { className: "react-calendar__century-view" }, r());
};
Us.propTypes = Qr(Qr({}, ii), { showNeighboringCentury: R.bool });
const gh = Us;
var zi = globalThis && globalThis.__assign || function() {
  return zi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, zi.apply(this, arguments);
}, bh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, gi = "react-calendar__decade-view__years__year";
function wh(e) {
  var t = e.classes, r = t === void 0 ? [] : t, n = e.currentDecade, i = e.formatYear, a = i === void 0 ? ei : i, o = bh(e, ["classes", "currentDecade", "formatYear"]), s = o.date, l = o.locale, u = [];
  return r && u.push.apply(u, r), gi && u.push(gi), Kt(s).getFullYear() !== n && u.push("".concat(gi, "--neighboringDecade")), F.createElement(ni, zi({}, o, { classes: u, maxDateTransform: Zn, minDateTransform: Mr, view: "decade" }), a(l, s));
}
var Wi = globalThis && globalThis.__assign || function() {
  return Wi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Wi.apply(this, arguments);
}, ro = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function Eh(e) {
  var t = e.activeStartDate, r = e.hover, n = e.showNeighboringDecade, i = e.value, a = e.valueType, o = ro(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), s = Hf(t), l = s + (n ? 11 : 9);
  return F.createElement(ri, { className: "react-calendar__decade-view__years", dateTransform: Mr, dateType: "year", end: l, hover: r, renderTile: function(u) {
    var h = u.date, c = ro(u, ["date"]);
    return F.createElement(wh, Wi({ key: h.getTime() }, o, c, { activeStartDate: t, currentDecade: s, date: h }));
  }, start: s, value: i, valueType: a });
}
var Jr = globalThis && globalThis.__assign || function() {
  return Jr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Jr.apply(this, arguments);
}, $s = function(t) {
  function r() {
    return F.createElement(Eh, Jr({}, t));
  }
  return F.createElement("div", { className: "react-calendar__decade-view" }, r());
};
$s.propTypes = Jr(Jr({}, ii), { showNeighboringDecade: R.bool });
const Ah = $s;
var Hi = globalThis && globalThis.__assign || function() {
  return Hi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Hi.apply(this, arguments);
}, _h = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, no = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, Oh = "react-calendar__year-view__months__month";
function Ch(e) {
  var t = e.classes, r = t === void 0 ? [] : t, n = e.formatMonth, i = n === void 0 ? jf : n, a = e.formatMonthYear, o = a === void 0 ? Ms : a, s = _h(e, ["classes", "formatMonth", "formatMonthYear"]), l = s.date, u = s.locale;
  return F.createElement(ni, Hi({}, s, { classes: no(no([], r, !0), [Oh], !1), formatAbbr: o, maxDateTransform: un, minDateTransform: lr, view: "year" }), i(u, l));
}
var Ui = globalThis && globalThis.__assign || function() {
  return Ui = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Ui.apply(this, arguments);
}, io = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function Th(e) {
  var t = e.activeStartDate, r = e.hover, n = e.value, i = e.valueType, a = io(e, ["activeStartDate", "hover", "value", "valueType"]), o = 0, s = 11, l = Te(t);
  return F.createElement(ri, { className: "react-calendar__year-view__months", dateTransform: function(u) {
    var h = /* @__PURE__ */ new Date();
    return h.setFullYear(l, u, 1), lr(h);
  }, dateType: "month", end: s, hover: r, renderTile: function(u) {
    var h = u.date, c = io(u, ["date"]);
    return F.createElement(Ch, Ui({ key: h.getTime() }, a, c, { activeStartDate: t, date: h }));
  }, start: o, value: n, valueType: i });
}
var Pn = globalThis && globalThis.__assign || function() {
  return Pn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Pn.apply(this, arguments);
}, qs = function(t) {
  function r() {
    return F.createElement(Th, Pn({}, t));
  }
  return F.createElement("div", { className: "react-calendar__year-view" }, r());
};
qs.propTypes = Pn({}, ii);
const xh = qs;
var $i = globalThis && globalThis.__assign || function() {
  return $i = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, $i.apply(this, arguments);
}, Sh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, yn = "react-calendar__month-view__days__day";
function Dh(e) {
  var t = e.calendarType, r = e.classes, n = r === void 0 ? [] : r, i = e.currentMonthIndex, a = e.formatDay, o = a === void 0 ? Lf : a, s = e.formatLongDate, l = s === void 0 ? Mf : s, u = Sh(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), h = ti(t), c = u.date, y = u.locale, p = [];
  return n && p.push.apply(p, n), yn && p.push(yn), zs(c, h) && p.push("".concat(yn, "--weekend")), c.getMonth() !== i && p.push("".concat(yn, "--neighboringMonth")), F.createElement(ni, $i({}, u, { classes: p, formatAbbr: l, maxDateTransform: va, minDateTransform: fn, view: "month" }), o(y, c));
}
var qi = globalThis && globalThis.__assign || function() {
  return qi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, qi.apply(this, arguments);
}, ao = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function Rh(e) {
  var t = e.activeStartDate, r = e.calendarType, n = e.hover, i = e.showFixedNumberOfWeeks, a = e.showNeighboringMonth, o = e.value, s = e.valueType, l = ao(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), u = ti(r), h = Te(t), c = Gt(t), y = i || a, p = Gr(t, u), d = y ? 0 : p, v = (y ? -p : 0) + 1, g = function() {
    if (i)
      return v + 6 * 7 - 1;
    var w = Ls(t);
    if (a) {
      var O = /* @__PURE__ */ new Date();
      O.setFullYear(h, c, w), O.setHours(0, 0, 0, 0);
      var T = 7 - Gr(O, u) - 1;
      return w + T;
    }
    return w;
  }();
  return F.createElement(ri, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(w) {
    var O = /* @__PURE__ */ new Date();
    return O.setFullYear(h, c, w), fn(O);
  }, dateType: "day", hover: n, end: g, renderTile: function(w) {
    var O = w.date, T = ao(w, ["date"]);
    return F.createElement(Dh, qi({ key: O.getTime() }, l, T, { activeStartDate: t, calendarType: r, currentMonthIndex: c, date: O }));
  }, offset: d, start: v, value: o, valueType: s });
}
var Vs = "react-calendar__month-view__weekdays", bi = "".concat(Vs, "__weekday");
function Ph(e) {
  for (var t = e.calendarType, r = e.formatShortWeekday, n = r === void 0 ? If : r, i = e.formatWeekday, a = i === void 0 ? Ff : i, o = e.locale, s = e.onMouseLeave, l = ti(t), u = /* @__PURE__ */ new Date(), h = lr(u), c = Te(h), y = Gt(h), p = [], d = 1; d <= 7; d += 1) {
    var v = new Date(c, y, d - Gr(h, l)), g = a(o, v);
    p.push(F.createElement(
      "div",
      { key: d, className: Fn(bi, Jf(v) && "".concat(bi, "--current"), zs(v, l) && "".concat(bi, "--weekend")) },
      F.createElement("abbr", { "aria-label": g, title: g }, n(o, v).replace(".", ""))
    ));
  }
  return F.createElement(ga, { className: Vs, count: 7, onFocus: s, onMouseOver: s }, p);
}
var kn = globalThis && globalThis.__assign || function() {
  return kn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, kn.apply(this, arguments);
}, oo = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, so = "react-calendar__tile";
function kh(e) {
  var t = e.onClickWeekNumber, r = e.weekNumber, n = F.createElement("span", null, r);
  if (t) {
    var i = e.date, a = e.onClickWeekNumber, o = e.weekNumber, s = oo(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return F.createElement("button", kn({}, s, { className: so, onClick: function(l) {
      return a(o, i, l);
    }, type: "button" }), n);
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var s = oo(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return F.createElement("div", kn({}, s, { className: so }), n);
  }
}
function Nh(e) {
  var t = e.activeStartDate, r = e.calendarType, n = e.onClickWeekNumber, i = e.onMouseLeave, a = e.showFixedNumberOfWeeks, o = ti(r), s = function() {
    if (a)
      return 6;
    var h = Ls(t), c = Gr(t, o), y = h - (7 - c);
    return 1 + Math.ceil(y / 7);
  }(), l = function() {
    for (var h = Te(t), c = Gt(t), y = Jn(t), p = [], d = 0; d < s; d += 1)
      p.push(ji(new Date(h, c, y + d * 7), o));
    return p;
  }(), u = l.map(function(h) {
    return Uf(h, o);
  });
  return F.createElement(ga, { className: "react-calendar__month-view__weekNumbers", count: s, direction: "column", onFocus: i, onMouseOver: i, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, u.map(function(h, c) {
    var y = l[c];
    if (!y)
      throw new Error("date is not defined");
    return F.createElement(kh, { key: h, date: y, onClickWeekNumber: n, weekNumber: h });
  }));
}
var Xr = globalThis && globalThis.__assign || function() {
  return Xr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Xr.apply(this, arguments);
}, Lh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
};
function Mh(e) {
  if (e)
    for (var t = 0, r = Object.entries(Of); t < r.length; t++) {
      var n = r[t], i = n[0], a = n[1];
      if (a.includes(e))
        return i;
    }
  return _e.ISO_8601;
}
var Ys = function(t) {
  var r = t.activeStartDate, n = t.locale, i = t.onMouseLeave, a = t.showFixedNumberOfWeeks, o = t.calendarType, s = o === void 0 ? Mh(n) : o, l = t.formatShortWeekday, u = t.formatWeekday, h = t.onClickWeekNumber, c = t.showWeekNumbers, y = Lh(t, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function p() {
    return F.createElement(Ph, { calendarType: s, formatShortWeekday: l, formatWeekday: u, locale: n, onMouseLeave: i });
  }
  function d() {
    return c ? F.createElement(Nh, { activeStartDate: r, calendarType: s, onClickWeekNumber: h, onMouseLeave: i, showFixedNumberOfWeeks: a }) : null;
  }
  function v() {
    return F.createElement(Rh, Xr({ calendarType: s }, y));
  }
  var g = "react-calendar__month-view";
  return F.createElement(
    "div",
    { className: Fn(g, c ? "".concat(g, "--weekNumbers") : "") },
    F.createElement(
      "div",
      { style: {
        display: "flex",
        alignItems: "flex-end"
      } },
      d(),
      F.createElement(
        "div",
        { style: {
          flexGrow: 1,
          width: "100%"
        } },
        p(),
        v()
      )
    )
  );
};
Ys.propTypes = Xr(Xr({}, ii), { calendarType: Hs, formatDay: R.func, formatLongDate: R.func, formatShortWeekday: R.func, formatWeekday: R.func, onClickWeekNumber: R.func, onMouseLeave: R.func, showFixedNumberOfWeeks: R.bool, showNeighboringMonth: R.bool, showWeekNumbers: R.bool });
const jh = Ys;
var yr = globalThis && globalThis.__assign || function() {
  return yr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, yr.apply(this, arguments);
}, gn = "react-calendar", gr = ["century", "decade", "year", "month"], Ih = ["decade", "year", "month", "day"], Ea = /* @__PURE__ */ new Date();
Ea.setFullYear(1, 0, 1);
Ea.setHours(0, 0, 0, 0);
var Fh = /* @__PURE__ */ new Date(864e13);
function zr(e) {
  return e instanceof Date ? e : new Date(e);
}
function Gs(e, t) {
  return gr.slice(gr.indexOf(e), gr.indexOf(t) + 1);
}
function Bh(e, t, r) {
  var n = Gs(t, r);
  return n.indexOf(e) !== -1;
}
function Aa(e, t, r) {
  return e && Bh(e, t, r) ? e : r;
}
function Ks(e) {
  var t = gr.indexOf(e);
  return Ih[t];
}
function zh(e, t) {
  var r = Array.isArray(e) ? e[t] : e;
  if (!r)
    return null;
  var n = zr(r);
  if (isNaN(n.getTime()))
    throw new Error("Invalid date: ".concat(e));
  return n;
}
function Qs(e, t) {
  var r = e.value, n = e.minDate, i = e.maxDate, a = e.maxDetail, o = zh(r, t);
  if (!o)
    return null;
  var s = Ks(a), l = function() {
    switch (t) {
      case 0:
        return ar(s, o);
      case 1:
        return Is(s, o);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return nh(l, n, i);
}
var _a = function(e) {
  return Qs(e, 0);
}, Js = function(e) {
  return Qs(e, 1);
}, Wh = function(e) {
  return [_a, Js].map(function(t) {
    return t(e);
  });
};
function Xs(e) {
  var t = e.maxDate, r = e.maxDetail, n = e.minDate, i = e.minDetail, a = e.value, o = e.view, s = Aa(o, i, r), l = _a({
    value: a,
    minDate: n,
    maxDate: t,
    maxDetail: r
  }) || /* @__PURE__ */ new Date();
  return ar(s, l);
}
function Hh(e) {
  var t = e.activeStartDate, r = e.defaultActiveStartDate, n = e.defaultValue, i = e.defaultView, a = e.maxDate, o = e.maxDetail, s = e.minDate, l = e.minDetail, u = e.value, h = e.view, c = Aa(h, l, o), y = t || r;
  return y ? ar(c, y) : Xs({
    maxDate: a,
    maxDetail: o,
    minDate: s,
    minDetail: l,
    value: u || n,
    view: h || i
  });
}
function wi(e) {
  return e && (!Array.isArray(e) || e.length === 1);
}
function bn(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var Zs = P.forwardRef(function(t, r) {
  var n = t.activeStartDate, i = t.allowPartialRange, a = t.calendarType, o = t.className, s = t.defaultActiveStartDate, l = t.defaultValue, u = t.defaultView, h = t.formatDay, c = t.formatLongDate, y = t.formatMonth, p = t.formatMonthYear, d = t.formatShortWeekday, v = t.formatWeekday, g = t.formatYear, w = t.goToRangeStartOnSelect, O = w === void 0 ? !0 : w, T = t.inputRef, D = t.locale, B = t.maxDate, $ = B === void 0 ? Fh : B, Q = t.maxDetail, H = Q === void 0 ? "month" : Q, Y = t.minDate, se = Y === void 0 ? Ea : Y, ne = t.minDetail, ce = ne === void 0 ? "century" : ne, ye = t.navigationAriaLabel, de = t.navigationAriaLive, V = t.navigationLabel, ee = t.next2AriaLabel, Oe = t.next2Label, f = t.nextAriaLabel, m = t.nextLabel, b = t.onActiveStartDateChange, E = t.onChange, A = t.onClickDay, _ = t.onClickDecade, N = t.onClickMonth, I = t.onClickWeekNumber, L = t.onClickYear, M = t.onDrillDown, U = t.onDrillUp, fe = t.onViewChange, Z = t.prev2AriaLabel, te = t.prev2Label, ue = t.prevAriaLabel, xe = t.prevLabel, ae = t.returnValue, We = ae === void 0 ? "start" : ae, Se = t.selectRange, Ye = t.showDoubleView, ke = t.showFixedNumberOfWeeks, we = t.showNavigation, et = we === void 0 ? !0 : we, qe = t.showNeighboringCentury, k = t.showNeighboringDecade, C = t.showNeighboringMonth, j = C === void 0 ? !0 : C, z = t.showWeekNumbers, W = t.tileClassName, he = t.tileContent, Ee = t.tileDisabled, De = t.value, q = t.view, pe = P.useState(s), He = pe[0], Ne = pe[1], Re = P.useState(null), be = Re[0], Je = Re[1], Ke = P.useState(Array.isArray(l) ? l.map(function(re) {
    return re !== null ? zr(re) : null;
  }) : l != null ? zr(l) : null), ft = Ke[0], mt = Ke[1], xt = P.useState(u), St = xt[0], J = xt[1], le = n || He || Hh({
    activeStartDate: n,
    defaultActiveStartDate: s,
    defaultValue: l,
    defaultView: u,
    maxDate: $,
    maxDetail: H,
    minDate: se,
    minDetail: ce,
    value: De,
    view: q
  }), ge = function() {
    var re = function() {
      return Se && wi(ft) ? ft : De !== void 0 ? De : ft;
    }();
    return re ? Array.isArray(re) ? re.map(function(Ce) {
      return Ce !== null ? zr(Ce) : null;
    }) : re !== null ? zr(re) : null : null;
  }(), Me = Ks(H), X = Aa(q || St, ce, H), je = Gs(ce, H), tt = Se ? be : null, Ve = je.indexOf(X) < je.length - 1, Lt = je.indexOf(X) > 0, Qt = P.useCallback(function(re) {
    var Ce = function() {
      switch (We) {
        case "start":
          return _a;
        case "end":
          return Js;
        case "range":
          return Wh;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return Ce({
      maxDate: $,
      maxDetail: H,
      minDate: se,
      value: re
    });
  }, [$, H, se, We]), rt = P.useCallback(function(re, Ce) {
    Ne(re);
    var G = {
      action: Ce,
      activeStartDate: re,
      value: ge,
      view: X
    };
    b && !bn(le, re) && b(G);
  }, [le, b, ge, X]), Mt = P.useCallback(function(re, Ce) {
    var G = function() {
      switch (X) {
        case "century":
          return _;
        case "decade":
          return L;
        case "year":
          return N;
        case "month":
          return A;
        default:
          throw new Error("Invalid view: ".concat(X, "."));
      }
    }();
    G && G(re, Ce);
  }, [A, _, N, L, X]), Jt = P.useCallback(function(re, Ce) {
    if (Ve) {
      Mt(re, Ce);
      var G = je[je.indexOf(X) + 1];
      if (!G)
        throw new Error("Attempted to drill down from the lowest view.");
      Ne(re), J(G);
      var Ue = {
        action: "drillDown",
        activeStartDate: re,
        value: ge,
        view: G
      };
      b && !bn(le, re) && b(Ue), fe && X !== G && fe(Ue), M && M(Ue);
    }
  }, [
    le,
    Ve,
    b,
    Mt,
    M,
    fe,
    ge,
    X,
    je
  ]), nt = P.useCallback(function() {
    if (Lt) {
      var re = je[je.indexOf(X) - 1];
      if (!re)
        throw new Error("Attempted to drill up from the highest view.");
      var Ce = ar(re, le);
      Ne(Ce), J(re);
      var G = {
        action: "drillUp",
        activeStartDate: Ce,
        value: ge,
        view: re
      };
      b && !bn(le, Ce) && b(G), fe && X !== re && fe(G), U && U(G);
    }
  }, [
    le,
    Lt,
    b,
    U,
    fe,
    ge,
    X,
    je
  ]), it = P.useCallback(function(re, Ce) {
    var G = ge;
    Mt(re, Ce);
    var Ue = Se && !wi(G), Xe;
    if (Se)
      if (Ue)
        Xe = ar(Me, re);
      else {
        if (!G)
          throw new Error("previousValue is required");
        if (Array.isArray(G))
          throw new Error("previousValue must not be an array");
        Xe = Kf(Me, G, re);
      }
    else
      Xe = Qt(re);
    var jr = (
      // Range selection turned off
      !Se || // Range selection turned on, first value
      Ue || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      O ? Xs({
        maxDate: $,
        maxDetail: H,
        minDate: se,
        minDetail: ce,
        value: Xe,
        view: X
      }) : null
    );
    Ce.persist(), Ne(jr), mt(Xe);
    var hc = {
      action: "onChange",
      activeStartDate: jr,
      value: Xe,
      view: X
    };
    if (b && !bn(le, jr) && b(hc), E)
      if (Se) {
        var dc = wi(Xe);
        if (!dc)
          E(Xe || null, Ce);
        else if (i) {
          if (Array.isArray(Xe))
            throw new Error("value must not be an array");
          E([Xe || null, null], Ce);
        }
      } else
        E(Xe || null, Ce);
  }, [
    le,
    i,
    Qt,
    O,
    $,
    H,
    se,
    ce,
    b,
    E,
    Mt,
    Se,
    ge,
    Me,
    X
  ]);
  function fr(re) {
    Je(re);
  }
  function vt() {
    Je(null);
  }
  P.useImperativeHandle(r, function() {
    return {
      activeStartDate: le,
      drillDown: Jt,
      drillUp: nt,
      onChange: it,
      setActiveStartDate: rt,
      value: ge,
      view: X
    };
  }, [le, Jt, nt, it, rt, ge, X]);
  function at(re) {
    var Ce = re ? js(X, le) : ar(X, le), G = Ve ? Jt : it, Ue = {
      activeStartDate: Ce,
      hover: tt,
      locale: D,
      maxDate: $,
      minDate: se,
      onClick: G,
      onMouseOver: Se ? fr : void 0,
      tileClassName: W,
      tileContent: he,
      tileDisabled: Ee,
      value: ge,
      valueType: Me
    };
    switch (X) {
      case "century":
        return F.createElement(gh, yr({ formatYear: g, showNeighboringCentury: qe }, Ue));
      case "decade":
        return F.createElement(Ah, yr({ formatYear: g, showNeighboringDecade: k }, Ue));
      case "year":
        return F.createElement(xh, yr({ formatMonth: y, formatMonthYear: p }, Ue));
      case "month":
        return F.createElement(jh, yr({ calendarType: a, formatDay: h, formatLongDate: c, formatShortWeekday: d, formatWeekday: v, onClickWeekNumber: I, onMouseLeave: Se ? vt : void 0, showFixedNumberOfWeeks: typeof ke < "u" ? ke : Ye, showNeighboringMonth: j, showWeekNumbers: z }, Ue));
      default:
        throw new Error("Invalid view: ".concat(X, "."));
    }
  }
  function hn() {
    return et ? F.createElement(Xf, { activeStartDate: le, drillUp: nt, formatMonthYear: p, formatYear: g, locale: D, maxDate: $, minDate: se, navigationAriaLabel: ye, navigationAriaLive: de, navigationLabel: V, next2AriaLabel: ee, next2Label: Oe, nextAriaLabel: f, nextLabel: m, prev2AriaLabel: Z, prev2Label: te, prevAriaLabel: ue, prevLabel: xe, setActiveStartDate: rt, showDoubleView: Ye, view: X, views: je }) : null;
  }
  var ai = Array.isArray(ge) ? ge : [ge];
  return F.createElement(
    "div",
    { className: Fn(gn, Se && ai.length === 1 && "".concat(gn, "--selectRange"), Ye && "".concat(gn, "--doubleView"), o), ref: T },
    hn(),
    F.createElement(
      "div",
      { className: "".concat(gn, "__viewContainer"), onBlur: Se ? vt : void 0, onMouseLeave: Se ? vt : void 0 },
      at(),
      Ye ? at(!0) : null
    )
  );
}), co = R.instanceOf(Date), lo = R.oneOfType([R.string, R.instanceOf(Date)]), uo = R.oneOfType([lo, yh(lo)]);
Zs.propTypes = {
  activeStartDate: co,
  allowPartialRange: R.bool,
  calendarType: Hs,
  className: Dn,
  defaultActiveStartDate: co,
  defaultValue: uo,
  defaultView: Rn,
  formatDay: R.func,
  formatLongDate: R.func,
  formatMonth: R.func,
  formatMonthYear: R.func,
  formatShortWeekday: R.func,
  formatWeekday: R.func,
  formatYear: R.func,
  goToRangeStartOnSelect: R.bool,
  inputRef: ph,
  locale: R.string,
  maxDate: wa,
  maxDetail: R.oneOf(gr),
  minDate: ba,
  minDetail: R.oneOf(gr),
  navigationAriaLabel: R.string,
  navigationAriaLive: R.oneOf(["off", "polite", "assertive"]),
  navigationLabel: R.func,
  next2AriaLabel: R.string,
  next2Label: R.node,
  nextAriaLabel: R.string,
  nextLabel: R.node,
  onActiveStartDateChange: R.func,
  onChange: R.func,
  onClickDay: R.func,
  onClickDecade: R.func,
  onClickMonth: R.func,
  onClickWeekNumber: R.func,
  onClickYear: R.func,
  onDrillDown: R.func,
  onDrillUp: R.func,
  onViewChange: R.func,
  prev2AriaLabel: R.string,
  prev2Label: R.node,
  prevAriaLabel: R.string,
  prevLabel: R.node,
  returnValue: R.oneOf(["start", "end", "range"]),
  selectRange: R.bool,
  showDoubleView: R.bool,
  showFixedNumberOfWeeks: R.bool,
  showNavigation: R.bool,
  showNeighboringCentury: R.bool,
  showNeighboringDecade: R.bool,
  showNeighboringMonth: R.bool,
  showWeekNumbers: R.bool,
  tileClassName: R.oneOfType([R.func, Dn]),
  tileContent: R.oneOfType([R.func, R.node]),
  tileDisabled: R.func,
  value: uo,
  view: Rn
};
const Uh = Zs;
const rp = Zi(Uh)`
  &.react-calendar {
    ${{
  borderWidth: "0px"
}}
  }
  .react-calendar__tile--now {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 237 213 / var(--tw-bg-opacity))"
}}

    &:enabled:focus, &:hover {
      ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  color: "rgb(255 255 255 / var(--tw-text-opacity))"
}}
    }
  }
  .react-calendar__tile--active {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}}
    &:enabled:focus {
      ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}}
    }
  }
`, ec = (e) => !!e && e[0] === "o", fo = Rr.unstable_batchedUpdates || ((e) => e()), dr = (e, t, r = 1e-4) => Math.abs(e - t) < r, Zr = (e, t) => e === !0 || !!(e && e[t]), Ct = (e, t) => typeof e == "function" ? e(t) : e, $h = "_szhsinMenu", qh = (e) => e[$h], Oa = (e, t) => (t && Object.keys(t).forEach((r) => {
  const n = e[r], i = t[r];
  typeof i == "function" && n ? e[r] = (...a) => {
    i(...a), n(...a);
  } : e[r] = i;
}), e), Vh = (e) => {
  if (typeof e != "string")
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  const t = e.trim().split(/\s+/, 4).map(parseFloat), r = isNaN(t[0]) ? 0 : t[0], n = isNaN(t[1]) ? r : t[1];
  return {
    top: r,
    right: n,
    bottom: isNaN(t[2]) ? r : t[2],
    left: isNaN(t[3]) ? n : t[3]
  };
}, Ei = (e) => {
  for (; e; ) {
    if (e = e.parentNode, !e || e === document.body || !e.parentNode)
      return;
    const {
      overflow: t,
      overflowX: r,
      overflowY: n
    } = getComputedStyle(e);
    if (/auto|scroll|overlay|hidden/.test(t + n + r))
      return e;
  }
};
function Yh(e, t) {
  return {
    "aria-disabled": e || void 0,
    tabIndex: t ? 0 : -1
  };
}
function ho(e, t) {
  for (let r = 0; r < e.length; r++)
    if (e[r] === t)
      return r;
  return -1;
}
const Vi = ({
  block: e,
  element: t,
  modifiers: r,
  className: n
}) => P.useMemo(() => {
  const i = t ? `${e}__${t}` : e;
  let a = i;
  r && Object.keys(r).forEach((s) => {
    const l = r[s];
    l && (a += ` ${i}--${l === !0 ? s : `${s}-${l}`}`);
  });
  let o = typeof n == "function" ? n(r) : n;
  return typeof o == "string" && (o = o.trim(), o && (a += ` ${o}`)), a;
}, [e, t, r, n]), Gh = "szh-menu-container", Ai = "szh-menu", Kh = "arrow", np = "item", ip = "divider", ap = "submenu", Qh = /* @__PURE__ */ P.createContext(), Jh = /* @__PURE__ */ P.createContext({}), po = /* @__PURE__ */ P.createContext({}), Xh = /* @__PURE__ */ P.createContext({}), op = /* @__PURE__ */ P.createContext({}), tc = /* @__PURE__ */ P.createContext({}), Rt = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), $e = /* @__PURE__ */ Object.freeze({
  RESET: 0,
  SET: 1,
  UNSET: 2,
  INCREASE: 3,
  DECREASE: 4,
  FIRST: 5,
  LAST: 6,
  SET_INDEX: 7
}), en = /* @__PURE__ */ Object.freeze({
  CLICK: "click",
  CANCEL: "cancel",
  BLUR: "blur",
  SCROLL: "scroll"
}), Ur = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), Zh = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), _i = "absolute", sp = "presentation", ed = "menuitem", mo = {
  "aria-hidden": !0,
  role: ed
}, td = ({
  className: e,
  containerRef: t,
  containerProps: r,
  children: n,
  isOpen: i,
  theming: a,
  transition: o,
  onClose: s
}) => {
  const l = Zr(o, "item"), u = ({
    key: c
  }) => {
    switch (c) {
      case Rt.ESC:
        Ct(s, {
          key: c,
          reason: en.CANCEL
        });
        break;
    }
  }, h = (c) => {
    i && !c.currentTarget.contains(c.relatedTarget) && Ct(s, {
      reason: en.BLUR
    });
  };
  return /* @__PURE__ */ Be.jsx("div", {
    ...Oa({
      onKeyDown: u,
      onBlur: h
    }, r),
    className: Vi({
      block: Gh,
      modifiers: P.useMemo(() => ({
        theme: a,
        itemTransition: l
      }), [a, l]),
      className: e
    }),
    style: {
      position: "absolute",
      ...r == null ? void 0 : r.style
    },
    ref: t,
    children: n
  });
}, rd = () => {
  let e, t = 0;
  return {
    toggle: (r) => {
      r ? t++ : t--, t = Math.max(t, 0);
    },
    on: (r, n, i) => {
      t ? e || (e = setTimeout(() => {
        e = 0, n();
      }, r)) : i == null || i();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, nd = (e, t) => {
  const [r, n] = P.useState(), a = P.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, o = P.useCallback((l, u) => {
    const {
      items: h
    } = a;
    if (!l)
      a.items = [];
    else if (u)
      h.push(l);
    else {
      const c = h.indexOf(l);
      c > -1 && (h.splice(c, 1), l.contains(document.activeElement) && (t.current.focus(), n()));
    }
    a.hoverIndex = -1, a.sorted = !1;
  }, [a, t]), s = P.useCallback((l, u, h) => {
    const {
      items: c,
      hoverIndex: y
    } = a, p = () => {
      if (a.sorted)
        return;
      const g = e.current.querySelectorAll(".szh-menu__item");
      c.sort((w, O) => ho(g, w) - ho(g, O)), a.sorted = !0;
    };
    let d = -1, v;
    switch (l) {
      case $e.RESET:
        break;
      case $e.SET:
        v = u;
        break;
      case $e.UNSET:
        v = (g) => g === u ? void 0 : g;
        break;
      case $e.FIRST:
        p(), d = 0, v = c[d];
        break;
      case $e.LAST:
        p(), d = c.length - 1, v = c[d];
        break;
      case $e.SET_INDEX:
        p(), d = h, v = c[d];
        break;
      case $e.INCREASE:
        p(), d = y, d < 0 && (d = c.indexOf(u)), d++, d >= c.length && (d = 0), v = c[d];
        break;
      case $e.DECREASE:
        p(), d = y, d < 0 && (d = c.indexOf(u)), d--, d < 0 && (d = c.length - 1), v = c[d];
        break;
    }
    v || (d = -1), n(v), a.hoverIndex = d;
  }, [e, a]);
  return {
    hoverItem: r,
    dispatch: s,
    updateItems: o
  };
}, id = (e, t, r, n) => {
  const i = t.current.getBoundingClientRect(), a = e.current.getBoundingClientRect(), o = r === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : r.getBoundingClientRect(), s = Vh(n), l = (d) => d + a.left - o.left - s.left, u = (d) => d + a.left + i.width - o.right + s.right, h = (d) => d + a.top - o.top - s.top, c = (d) => d + a.top + i.height - o.bottom + s.bottom;
  return {
    menuRect: i,
    containerRect: a,
    getLeftOverflow: l,
    getRightOverflow: u,
    getTopOverflow: h,
    getBottomOverflow: c,
    confineHorizontally: (d) => {
      let v = l(d);
      if (v < 0)
        d -= v;
      else {
        const g = u(d);
        g > 0 && (d -= g, v = l(d), v < 0 && (d -= v));
      }
      return d;
    },
    confineVertically: (d) => {
      let v = h(d);
      if (v < 0)
        d -= v;
      else {
        const g = c(d);
        g > 0 && (d -= g, v = h(d), v < 0 && (d -= v));
      }
      return d;
    }
  };
}, ad = ({
  arrowRef: e,
  menuY: t,
  anchorRect: r,
  containerRect: n,
  menuRect: i
}) => {
  let a = r.top - n.top - t + r.height / 2;
  const o = e.current.offsetHeight * 1.25;
  return a = Math.max(o, a), a = Math.min(a, i.height - o), a;
}, od = ({
  anchorRect: e,
  containerRect: t,
  menuRect: r,
  placeLeftorRightY: n,
  placeLeftX: i,
  placeRightX: a,
  getLeftOverflow: o,
  getRightOverflow: s,
  confineHorizontally: l,
  confineVertically: u,
  arrowRef: h,
  arrow: c,
  direction: y,
  position: p
}) => {
  let d = y, v = n;
  p !== "initial" && (v = u(v), p === "anchor" && (v = Math.min(v, e.bottom - t.top), v = Math.max(v, e.top - t.top - r.height)));
  let g, w, O;
  return d === "left" ? (g = i, p !== "initial" && (w = o(g), w < 0 && (O = s(a), (O <= 0 || -w > O) && (g = a, d = "right")))) : (g = a, p !== "initial" && (O = s(g), O > 0 && (w = o(i), (w >= 0 || -w < O) && (g = i, d = "left")))), p === "auto" && (g = l(g)), {
    arrowY: c ? ad({
      menuY: v,
      arrowRef: h,
      anchorRect: e,
      containerRect: t,
      menuRect: r
    }) : void 0,
    x: g,
    y: v,
    computedDirection: d
  };
}, sd = ({
  arrowRef: e,
  menuX: t,
  anchorRect: r,
  containerRect: n,
  menuRect: i
}) => {
  let a = r.left - n.left - t + r.width / 2;
  const o = e.current.offsetWidth * 1.25;
  return a = Math.max(o, a), a = Math.min(a, i.width - o), a;
}, cd = ({
  anchorRect: e,
  containerRect: t,
  menuRect: r,
  placeToporBottomX: n,
  placeTopY: i,
  placeBottomY: a,
  getTopOverflow: o,
  getBottomOverflow: s,
  confineHorizontally: l,
  confineVertically: u,
  arrowRef: h,
  arrow: c,
  direction: y,
  position: p
}) => {
  let d = y === "top" ? "top" : "bottom", v = n;
  p !== "initial" && (v = l(v), p === "anchor" && (v = Math.min(v, e.right - t.left), v = Math.max(v, e.left - t.left - r.width)));
  let g, w, O;
  return d === "top" ? (g = i, p !== "initial" && (w = o(g), w < 0 && (O = s(a), (O <= 0 || -w > O) && (g = a, d = "bottom")))) : (g = a, p !== "initial" && (O = s(g), O > 0 && (w = o(i), (w >= 0 || -w < O) && (g = i, d = "top")))), p === "auto" && (g = u(g)), {
    arrowX: c ? sd({
      menuX: v,
      arrowRef: h,
      anchorRect: e,
      containerRect: t,
      menuRect: r
    }) : void 0,
    x: v,
    y: g,
    computedDirection: d
  };
}, ld = ({
  arrow: e,
  align: t,
  direction: r,
  gap: n,
  shift: i,
  position: a,
  anchorRect: o,
  arrowRef: s,
  positionHelpers: l
}) => {
  const {
    menuRect: u,
    containerRect: h
  } = l, c = r === "left" || r === "right";
  let y = c ? n : i, p = c ? i : n;
  if (e) {
    const B = s.current;
    c ? y += B.offsetWidth : p += B.offsetHeight;
  }
  const d = o.left - h.left - u.width - y, v = o.right - h.left + y, g = o.top - h.top - u.height - p, w = o.bottom - h.top + p;
  let O, T;
  t === "end" ? (O = o.right - h.left - u.width, T = o.bottom - h.top - u.height) : t === "center" ? (O = o.left - h.left - (u.width - o.width) / 2, T = o.top - h.top - (u.height - o.height) / 2) : (O = o.left - h.left, T = o.top - h.top), O += y, T += p;
  const D = {
    ...l,
    anchorRect: o,
    placeLeftX: d,
    placeRightX: v,
    placeLeftorRightY: T,
    placeTopY: g,
    placeBottomY: w,
    placeToporBottomX: O,
    arrowRef: s,
    arrow: e,
    direction: r,
    position: a
  };
  switch (r) {
    case "left":
    case "right":
      return od(D);
    case "top":
    case "bottom":
    default:
      return cd(D);
  }
}, Oi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? P.useLayoutEffect : P.useEffect;
function vo(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const rc = (e, t) => P.useMemo(() => e ? t ? (r) => {
  vo(e, r), vo(t, r);
} : e : t, [e, t]), yo = -9999, ud = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: r,
  arrow: n,
  arrowProps: i = {},
  anchorPoint: a,
  anchorRef: o,
  containerRef: s,
  containerProps: l,
  focusProps: u,
  externalRef: h,
  parentScrollingRef: c,
  align: y = "start",
  direction: p = "bottom",
  position: d = "auto",
  overflow: v = "visible",
  setDownOverflow: g,
  repositionFlag: w,
  captureFocus: O = !0,
  state: T,
  endTransition: D,
  isDisabled: B,
  menuItemFocus: $,
  gap: Q = 0,
  shift: H = 0,
  children: Y,
  onClose: se,
  ...ne
}) => {
  const [ce, ye] = P.useState({
    x: yo,
    y: yo
  }), [de, V] = P.useState({}), [ee, Oe] = P.useState(), [f, m] = P.useState(p), [b] = P.useState(rd), [E, A] = P.useReducer((J) => J + 1, 1), {
    transition: _,
    boundingBoxRef: N,
    boundingBoxPadding: I,
    rootMenuRef: L,
    rootAnchorRef: M,
    scrollNodesRef: U,
    reposition: fe,
    viewScroll: Z,
    submenuCloseDelay: te
  } = P.useContext(tc), {
    submenuCtx: ue,
    reposSubmenu: xe = w
  } = P.useContext(po), ae = P.useRef(null), We = P.useRef(), Se = P.useRef(), Ye = P.useRef(!1), ke = P.useRef({
    width: 0,
    height: 0
  }), we = P.useRef(() => {
  }), {
    hoverItem: et,
    dispatch: qe,
    updateItems: k
  } = nd(ae, We), C = ec(T), j = Zr(_, "open"), z = Zr(_, "close"), W = U.current, he = (J) => {
    switch (J.key) {
      case Rt.HOME:
        qe($e.FIRST);
        break;
      case Rt.END:
        qe($e.LAST);
        break;
      case Rt.UP:
        qe($e.DECREASE, et);
        break;
      case Rt.DOWN:
        qe($e.INCREASE, et);
        break;
      case Rt.SPACE:
        J.target && J.target.className.indexOf(Ai) !== -1 && J.preventDefault();
        return;
      default:
        return;
    }
    J.preventDefault(), J.stopPropagation();
  }, Ee = () => {
    T === "closing" && Oe(), Ct(D);
  }, De = (J) => {
    J.stopPropagation(), b.on(te, () => {
      qe($e.RESET), We.current.focus();
    });
  }, q = (J) => {
    J.target === J.currentTarget && b.off();
  }, pe = P.useCallback((J) => {
    var le;
    const ge = o ? (le = o.current) == null ? void 0 : le.getBoundingClientRect() : a ? {
      left: a.x,
      right: a.x,
      top: a.y,
      bottom: a.y,
      width: 0,
      height: 0
    } : null;
    if (!ge)
      return;
    W.menu || (W.menu = (N ? N.current : Ei(L.current)) || window);
    const Me = id(s, ae, W.menu, I);
    let {
      arrowX: X,
      arrowY: je,
      x: tt,
      y: Ve,
      computedDirection: Lt
    } = ld({
      arrow: n,
      align: y,
      direction: p,
      gap: Q,
      shift: H,
      position: d,
      anchorRect: ge,
      arrowRef: Se,
      positionHelpers: Me
    });
    const {
      menuRect: Qt
    } = Me;
    let rt = Qt.height;
    if (!J && v !== "visible") {
      const {
        getTopOverflow: Mt,
        getBottomOverflow: Jt
      } = Me;
      let nt, it;
      const fr = ke.current.height, vt = Jt(Ve);
      if (vt > 0 || dr(vt, 0) && dr(rt, fr))
        nt = rt - vt, it = vt;
      else {
        const at = Mt(Ve);
        (at < 0 || dr(at, 0) && dr(rt, fr)) && (nt = rt + at, it = 0 - at, nt >= 0 && (Ve -= at));
      }
      nt >= 0 ? (rt = nt, Oe({
        height: nt,
        overflowAmt: it
      })) : Oe();
    }
    n && V({
      x: X,
      y: je
    }), ye({
      x: tt,
      y: Ve
    }), m(Lt), ke.current = {
      width: Qt.width,
      height: rt
    };
  }, [n, y, I, p, Q, H, d, v, a, o, s, N, L, W]);
  Oi(() => {
    C && (pe(), Ye.current && A()), Ye.current = C, we.current = pe;
  }, [C, pe, xe]), Oi(() => {
    ee && !g && (ae.current.scrollTop = 0);
  }, [ee, g]), Oi(() => k, [k]), P.useEffect(() => {
    let {
      menu: J
    } = W;
    if (!C || !J)
      return;
    if (J = J.addEventListener ? J : window, !W.anchors) {
      W.anchors = [];
      let X = Ei(M && M.current);
      for (; X && X !== J; )
        W.anchors.push(X), X = Ei(X);
    }
    let le = Z;
    if (W.anchors.length && le === "initial" && (le = "auto"), le === "initial")
      return;
    const ge = () => {
      le === "auto" ? fo(() => pe(!0)) : Ct(se, {
        reason: en.SCROLL
      });
    }, Me = W.anchors.concat(Z !== "initial" ? J : []);
    return Me.forEach((X) => X.addEventListener("scroll", ge)), () => Me.forEach((X) => X.removeEventListener("scroll", ge));
  }, [M, W, C, se, Z, pe]);
  const He = !!ee && ee.overflowAmt > 0;
  P.useEffect(() => {
    if (He || !C || !c)
      return;
    const J = () => fo(pe), le = c.current;
    return le.addEventListener("scroll", J), () => le.removeEventListener("scroll", J);
  }, [C, He, c, pe]), P.useEffect(() => {
    if (typeof ResizeObserver != "function" || fe === "initial")
      return;
    const J = new ResizeObserver(([ge]) => {
      const {
        borderBoxSize: Me,
        target: X
      } = ge;
      let je, tt;
      if (Me) {
        const {
          inlineSize: Ve,
          blockSize: Lt
        } = Me[0] || Me;
        je = Ve, tt = Lt;
      } else {
        const Ve = X.getBoundingClientRect();
        je = Ve.width, tt = Ve.height;
      }
      je === 0 || tt === 0 || dr(je, ke.current.width, 1) && dr(tt, ke.current.height, 1) || Rr.flushSync(() => {
        we.current(), A();
      });
    }), le = ae.current;
    return J.observe(le, {
      box: "border-box"
    }), () => J.unobserve(le);
  }, [fe]), P.useEffect(() => {
    if (!C) {
      qe($e.RESET), z || Oe();
      return;
    }
    const {
      position: J,
      alwaysUpdate: le
    } = $ || {}, ge = () => {
      J === Ur.FIRST ? qe($e.FIRST) : J === Ur.LAST ? qe($e.LAST) : J >= -1 && qe($e.SET_INDEX, void 0, J);
    };
    if (le)
      ge();
    else if (O) {
      const Me = setTimeout(() => {
        const X = ae.current;
        X && !X.contains(document.activeElement) && (We.current.focus(), ge());
      }, j ? 170 : 100);
      return () => clearTimeout(Me);
    }
  }, [C, j, z, O, $, qe]);
  const Ne = P.useMemo(() => ({
    isParentOpen: C,
    submenuCtx: b,
    dispatch: qe,
    updateItems: k
  }), [C, b, qe, k]);
  let Re, be;
  ee && (g ? be = ee.overflowAmt : Re = ee.height);
  const Je = P.useMemo(() => ({
    reposSubmenu: E,
    submenuCtx: b,
    overflow: v,
    overflowAmt: be,
    parentMenuRef: ae,
    parentDir: f
  }), [E, b, v, be, f]), Ke = Re >= 0 ? {
    maxHeight: Re,
    overflow: v
  } : void 0, ft = P.useMemo(() => ({
    state: T,
    dir: f
  }), [T, f]), mt = P.useMemo(() => ({
    dir: f
  }), [f]), xt = Vi({
    block: Ai,
    element: Kh,
    modifiers: mt,
    className: i.className
  }), St = /* @__PURE__ */ Be.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Yh(B),
    ...Oa({
      onPointerEnter: ue == null ? void 0 : ue.off,
      onPointerMove: De,
      onPointerLeave: q,
      onKeyDown: he,
      onAnimationEnd: Ee
    }, ne),
    ref: rc(h, ae),
    className: Vi({
      block: Ai,
      modifiers: ft,
      className: t
    }),
    style: {
      ...r,
      ...Ke,
      margin: 0,
      display: T === "closed" ? "none" : void 0,
      position: _i,
      left: ce.x,
      top: ce.y
    },
    children: [/* @__PURE__ */ Be.jsx("li", {
      tabIndex: -1,
      style: {
        position: _i,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: We,
      ...mo,
      ...u
    }), n && /* @__PURE__ */ Be.jsx("li", {
      ...mo,
      ...i,
      className: xt,
      style: {
        display: "block",
        position: _i,
        left: de.x,
        top: de.y,
        ...i.style
      },
      ref: Se
    }), /* @__PURE__ */ Be.jsx(po.Provider, {
      value: Je,
      children: /* @__PURE__ */ Be.jsx(Jh.Provider, {
        value: Ne,
        children: /* @__PURE__ */ Be.jsx(Qh.Provider, {
          value: et,
          children: Ct(Y, ft)
        })
      })
    })]
  });
  return l ? /* @__PURE__ */ Be.jsx(td, {
    ...l,
    isOpen: C,
    children: St
  }) : St;
}, fd = /* @__PURE__ */ P.forwardRef(function({
  "aria-label": t,
  className: r,
  containerProps: n,
  initialMounted: i,
  unmountOnClose: a,
  transition: o,
  transitionTimeout: s,
  boundingBoxRef: l,
  boundingBoxPadding: u,
  reposition: h = "auto",
  submenuOpenDelay: c = 300,
  submenuCloseDelay: y = 150,
  viewScroll: p = "initial",
  portal: d,
  theming: v,
  onItemClick: g,
  ...w
}, O) {
  const T = P.useRef(null), D = P.useRef({}), {
    anchorRef: B,
    state: $,
    onClose: Q
  } = w, H = P.useMemo(() => ({
    initialMounted: i,
    unmountOnClose: a,
    transition: o,
    transitionTimeout: s,
    boundingBoxRef: l,
    boundingBoxPadding: u,
    rootMenuRef: T,
    rootAnchorRef: B,
    scrollNodesRef: D,
    reposition: h,
    viewScroll: p,
    submenuOpenDelay: c,
    submenuCloseDelay: y
  }), [i, a, o, s, B, l, u, h, p, c, y]), Y = P.useMemo(() => ({
    handleClick(ne, ce) {
      ne.stopPropagation || Ct(g, ne);
      let ye = ne.keepOpen;
      ye === void 0 && (ye = ce && ne.key === Rt.SPACE), ye || Ct(Q, {
        value: ne.value,
        key: ne.key,
        reason: en.CLICK
      });
    },
    handleClose(ne) {
      Ct(Q, {
        key: ne,
        reason: en.CLICK
      });
    }
  }), [g, Q]);
  if (!$)
    return null;
  const se = /* @__PURE__ */ Be.jsx(tc.Provider, {
    value: H,
    children: /* @__PURE__ */ Be.jsx(Xh.Provider, {
      value: Y,
      children: /* @__PURE__ */ Be.jsx(ud, {
        ...w,
        ariaLabel: t || "Menu",
        externalRef: O,
        containerRef: T,
        containerProps: {
          className: r,
          containerRef: T,
          containerProps: n,
          theming: v,
          transition: o,
          onClose: Q
        }
      })
    })
  });
  return d === !0 && typeof document < "u" ? /* @__PURE__ */ Rr.createPortal(se, document.body) : d ? d.target ? /* @__PURE__ */ Rr.createPortal(se, d.target) : d.stablePosition ? null : se : se;
}), Yi = 0, Gi = 1, Nn = 2, Ln = 3, Mn = 4, hd = 5, nc = 6, dd = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], ic = (e) => ({
  _s: e,
  status: dd[e],
  isEnter: e < Ln,
  isMounted: e !== nc,
  isResolved: e === Nn || e > Mn
}), Ki = (e) => e ? nc : hd, pd = (e, t) => {
  switch (e) {
    case Gi:
    case Yi:
      return Nn;
    case Mn:
    case Ln:
      return Ki(t);
  }
}, md = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], vd = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), go = (e, t, r, n, i) => {
  clearTimeout(n.current);
  const a = ic(e);
  t(a), r.current = a, i && i({
    current: a
  });
}, yd = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: r,
  preExit: n,
  timeout: i,
  initialEntered: a,
  mountOnEnter: o,
  unmountOnExit: s,
  onStateChange: l
} = {}) => {
  const [u, h] = P.useState(() => ic(a ? Nn : Ki(o))), c = P.useRef(u), y = P.useRef(), [p, d] = md(i), v = P.useCallback(() => {
    const w = pd(c.current._s, s);
    w && go(w, h, c, y, l);
  }, [l, s]), g = P.useCallback((w) => {
    const O = (D) => {
      switch (go(D, h, c, y, l), D) {
        case Gi:
          p >= 0 && (y.current = setTimeout(v, p));
          break;
        case Mn:
          d >= 0 && (y.current = setTimeout(v, d));
          break;
        case Yi:
        case Ln:
          y.current = vd(O, D);
          break;
      }
    }, T = c.current.isEnter;
    typeof w != "boolean" && (w = !T), w ? !T && O(e ? r ? Yi : Gi : Nn) : T && O(t ? n ? Ln : Mn : Ki(s));
  }, [v, l, e, t, r, n, p, d, s]);
  return P.useEffect(() => () => clearTimeout(y.current), []), [u, g, v];
}, gd = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: r,
  transition: n,
  transitionTimeout: i = 500
} = {}) => {
  const [{
    status: a
  }, o, s] = yd({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: r,
    timeout: i,
    enter: Zr(n, "open"),
    exit: Zr(n, "close")
  });
  return [{
    state: Zh[a],
    endTransition: s
  }, o];
}, bd = (e) => {
  const [t, r] = gd(e), [n, i] = P.useState(), a = (o, s) => {
    i({
      position: o,
      alwaysUpdate: s
    }), r(!0);
  };
  return [{
    menuItemFocus: n,
    ...t
  }, r, a];
}, wd = (e, t) => {
  const [r] = P.useState({});
  return {
    onMouseDown: () => {
      r.v = e && e !== "closed";
    },
    onClick: (n) => r.v ? r.v = !1 : t(!0, n)
  };
}, Ed = (e, t) => {
  const r = P.useRef(t);
  P.useEffect(() => {
    r.current !== t && Ct(e, {
      open: t
    }), r.current = t;
  }, [e, t]);
}, Ad = /* @__PURE__ */ P.forwardRef(function({
  "aria-label": t,
  captureFocus: r,
  initialOpen: n,
  menuButton: i,
  instanceRef: a,
  onMenuChange: o,
  ...s
}, l) {
  const [u, h, c] = bd(s), {
    state: y
  } = u, p = ec(y), d = P.useRef(null), v = wd(y, (B, $) => c($.detail ? void 0 : Ur.FIRST)), g = P.useCallback((B) => {
    h(!1), B.key && d.current.focus();
  }, [h]), w = (B) => {
    switch (B.key) {
      case Rt.UP:
        c(Ur.LAST);
        break;
      case Rt.DOWN:
        c(Ur.FIRST);
        break;
      default:
        return;
    }
    B.preventDefault();
  }, O = Ct(i, {
    open: p
  });
  if (!O || !O.type)
    throw new Error("Menu requires a menuButton prop.");
  const T = {
    ref: rc(O.ref, d),
    ...Oa({
      onKeyDown: w,
      ...v
    }, O.props)
  };
  qh(O.type) === "MenuButton" && (T.isOpen = p);
  const D = /* @__PURE__ */ P.cloneElement(O, T);
  return Ed(o, p), P.useImperativeHandle(a, () => ({
    openMenu: c,
    closeMenu: () => h(!1)
  })), /* @__PURE__ */ Be.jsxs(P.Fragment, {
    children: [D, /* @__PURE__ */ Be.jsx(fd, {
      ...s,
      ...u,
      "aria-label": t || (typeof O.props.children == "string" ? O.props.children : "Menu"),
      anchorRef: d,
      ref: l,
      onClose: g
    })]
  });
});
const _d = "szh-menu", Od = "item", Cd = (e) => (t) => (r) => {
  let n = `.${e}`;
  return t && (n += `__${t}`), r && (n += `--${r}`), n;
}, ac = (e, t = []) => {
  const r = {};
  return Object.defineProperty(r, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((n) => {
    const i = n.split("-").reduce((a, o) => `${a}${o[0].toUpperCase()}${o.slice(1)}`);
    Object.defineProperty(r, i, {
      value: e(n),
      enumerable: !0
    });
  }), r;
}, Td = ["dir-left", "dir-right", "dir-top", "dir-bottom"], oc = /* @__PURE__ */ Cd(_d);
[...Td];
const bo = /* @__PURE__ */ ac(/* @__PURE__ */ oc(Od), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), cp = Zi(Ad)`
  ${bo.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${bo.typeCheckbox} {
      ${{
  paddingLeft: "2rem"
}}
    }
    .svg-inline--fa {
      ${{
  "--tw-text-opacity": "1",
  color: "rgb(75 85 99 / var(--tw-text-opacity))"
}}
    }
  }
`;
var sc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "circle-notch", n = 512, i = 512, a = [], o = "f1ce", s = "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      i,
      a,
      o,
      s
    ]
  }, e.faCircleNotch = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = i, e.ligatures = a, e.unicode = o, e.svgPathData = s, e.aliases = a;
})(sc);
const xd = ({
  children: e,
  spinning: t = !0
}) => t ? /* @__PURE__ */ Bn("div", { css: {
  position: "relative",
  height: "100%",
  width: "100%",
  cursor: "wait"
}, children: [
  /* @__PURE__ */ ve("div", { css: {
    opacity: "0.3",
    "--tw-grayscale": "grayscale(100%)",
    filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  }, children: e }),
  t && /* @__PURE__ */ ve("div", { css: {
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(229 231 235 / 0.3)"
  }, children: /* @__PURE__ */ ve(yc, { icon: sc.faCircleNotch, css: [{
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, Xi`
                font-size: 32px;
              `], spin: !0 }) })
] }) : e;
var cc = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n(P);
  })(self, (r) => (() => {
    var n = { 58: (s, l, u) => {
      u.d(l, { Z: () => d });
      var h = u(864), c = u.n(h), y = u(352), p = u.n(y)()(c());
      p.push([s.id, `
/* The default splitter within a react-split */
.react-split > .split-container > .splitter .default-splitter {
  box-sizing: border-box;
  height: 100%;
  outline: none;
  overflow: hidden;
  user-select: none;
  width: 100%;
  --default-splitter-line-color: silver;
  --default-splitter-line-hover-color: black;
  --default-splitter-line-margin: 2px;
  --default-splitter-line-size: 3px;
}

.react-split > .split-container.horizontal > .splitter .default-splitter {
  cursor: row-resize;
}

.react-split > .split-container.vertical > .splitter .default-splitter {
  cursor: col-resize;
}

/* The thin line within a default splitter hit area */
.react-split > .split-container > .splitter .default-splitter > .line {
  background: var(--default-splitter-line-color);
}

.react-split > .split-container > .splitter .default-splitter:hover > .line {
  background: var(--default-splitter-line-hover-color);
}

.react-split > .split-container.horizontal > .splitter .default-splitter > .line {
  height: var(--default-splitter-line-size);
  width: 100%;
  margin-top: var(--default-splitter-line-margin);
  margin-left: 0;
}

.react-split > .split-container.vertical > .splitter .default-splitter > .line {
  height: 100%;
  width: var(--default-splitter-line-size);
  margin-top: 0;
  margin-left: var(--default-splitter-line-margin);
}`, "", { version: 3, sources: ["webpack://./src/defaultSplitter.css"], names: [], mappings: ";AACA,8CAA8C;AAC9C;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,qCAAqC;EACrC,0CAA0C;EAC1C,mCAAmC;EACnC,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,qDAAqD;AACrD;EACE,8CAA8C;AAChD;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,yCAAyC;EACzC,WAAW;EACX,+CAA+C;EAC/C,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,wCAAwC;EACxC,aAAa;EACb,gDAAgD;AAClD", sourcesContent: [`
/* The default splitter within a react-split */
.react-split > .split-container > .splitter .default-splitter {
  box-sizing: border-box;
  height: 100%;
  outline: none;
  overflow: hidden;
  user-select: none;
  width: 100%;
  --default-splitter-line-color: silver;
  --default-splitter-line-hover-color: black;
  --default-splitter-line-margin: 2px;
  --default-splitter-line-size: 3px;
}

.react-split > .split-container.horizontal > .splitter .default-splitter {
  cursor: row-resize;
}

.react-split > .split-container.vertical > .splitter .default-splitter {
  cursor: col-resize;
}

/* The thin line within a default splitter hit area */
.react-split > .split-container > .splitter .default-splitter > .line {
  background: var(--default-splitter-line-color);
}

.react-split > .split-container > .splitter .default-splitter:hover > .line {
  background: var(--default-splitter-line-hover-color);
}

.react-split > .split-container.horizontal > .splitter .default-splitter > .line {
  height: var(--default-splitter-line-size);
  width: 100%;
  margin-top: var(--default-splitter-line-margin);
  margin-left: 0;
}

.react-split > .split-container.vertical > .splitter .default-splitter > .line {
  height: 100%;
  width: var(--default-splitter-line-size);
  margin-top: 0;
  margin-left: var(--default-splitter-line-margin);
}`], sourceRoot: "" }]);
      const d = p;
    }, 672: (s, l, u) => {
      u.d(l, { Z: () => d });
      var h = u(864), c = u.n(h), y = u(352), p = u.n(y)()(c());
      p.push([s.id, `/* The top-level element of the splitter*/
.react-split {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  --react-split-min-primary: 0;
  --react-split-min-secondary: 0;
  --react-split-primary: 50%;
  --react-split-splitter: 7px;
}

/* The container for the primary pane, splitter, and secondary pane.*/
.react-split > .split-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  display: grid;
}

/* When the container is splitting horizontally */
.react-split > .split-container.horizontal {
  grid-template-columns: 1fr;
  grid-template-rows: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);
  grid-template-areas: "primary" "split" "secondary";
}

/* When the container is splitting vertical */
.react-split > .split-container.vertical {
  grid-template-columns: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "primary split secondary";
}

/* The primary pane. This is either the left or top depending on the split type */
.react-split > .split-container > .primary {
  grid-area: primary;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .primary {
  height: auto;
  width: 100%;
}

.react-split > .split-container.vertical > .primary {
  height: 100%;
  width: auto;
}

/* The splitter between panes. */
.react-split > .split-container > .splitter {
  grid-area: split;
  background: transparent;
  user-select: none;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .splitter {
  height: auto;
  width: 100%;
  cursor: row-resize;
}

.react-split > .split-container.vertical > .splitter {
  height: 100%;
  width: auto;
  cursor: col-resize;
}

/* The secondary pane. This is either the right or bottom depending on the split type */
.react-split > .split-container >.secondary {
  grid-area: secondary;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .secondary {
  height: auto;
  width: 100%;
}

.react-split > .split-container.vertical > .secondary {
  height: 100%;
  width: auto;
}

/* The content within the primary pane, splitter, or secondary pane.*/
.react-split .full-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}
`, "", { version: 3, sources: ["webpack://./src/split.css"], names: [], mappings: "AAAA,yCAAyC;AACzC;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,4BAA4B;EAC5B,8BAA8B;EAC9B,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA,qEAAqE;AACrE;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,aAAa;AACf;;AAEA,iDAAiD;AACjD;EACE,0BAA0B;EAC1B,+JAA+J;EAC/J,kDAAkD;AACpD;;AAEA,6CAA6C;AAC7C;EACE,kKAAkK;EAClK,uBAAuB;EACvB,8CAA8C;AAChD;;AAEA,iFAAiF;AACjF;EACE,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,gCAAgC;AAChC;EACE,gBAAgB;EAChB,uBAAuB;EACvB,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA,uFAAuF;AACvF;EACE,oBAAoB;EACpB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,qEAAqE;AACrE;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,gBAAgB;AAClB", sourcesContent: [`/* The top-level element of the splitter*/
.react-split {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  --react-split-min-primary: 0;
  --react-split-min-secondary: 0;
  --react-split-primary: 50%;
  --react-split-splitter: 7px;
}

/* The container for the primary pane, splitter, and secondary pane.*/
.react-split > .split-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
  display: grid;
}

/* When the container is splitting horizontally */
.react-split > .split-container.horizontal {
  grid-template-columns: 1fr;
  grid-template-rows: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);
  grid-template-areas: "primary" "split" "secondary";
}

/* When the container is splitting vertical */
.react-split > .split-container.vertical {
  grid-template-columns: minmax(var(--react-split-min-primary),var(--react-split-primary)) var(--react-split-splitter) minmax(var(--react-split-min-secondary), 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "primary split secondary";
}

/* The primary pane. This is either the left or top depending on the split type */
.react-split > .split-container > .primary {
  grid-area: primary;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .primary {
  height: auto;
  width: 100%;
}

.react-split > .split-container.vertical > .primary {
  height: 100%;
  width: auto;
}

/* The splitter between panes. */
.react-split > .split-container > .splitter {
  grid-area: split;
  background: transparent;
  user-select: none;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .splitter {
  height: auto;
  width: 100%;
  cursor: row-resize;
}

.react-split > .split-container.vertical > .splitter {
  height: 100%;
  width: auto;
  cursor: col-resize;
}

/* The secondary pane. This is either the right or bottom depending on the split type */
.react-split > .split-container >.secondary {
  grid-area: secondary;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}

.react-split > .split-container.horizontal > .secondary {
  height: auto;
  width: 100%;
}

.react-split > .split-container.vertical > .secondary {
  height: 100%;
  width: auto;
}

/* The content within the primary pane, splitter, or secondary pane.*/
.react-split .full-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  overflow: hidden;
}
`], sourceRoot: "" }]);
      const d = p;
    }, 352: (s) => {
      s.exports = function(l) {
        var u = [];
        return u.toString = function() {
          return this.map(function(h) {
            var c = "", y = h[5] !== void 0;
            return h[4] && (c += "@supports (".concat(h[4], ") {")), h[2] && (c += "@media ".concat(h[2], " {")), y && (c += "@layer".concat(h[5].length > 0 ? " ".concat(h[5]) : "", " {")), c += l(h), y && (c += "}"), h[2] && (c += "}"), h[4] && (c += "}"), c;
          }).join("");
        }, u.i = function(h, c, y, p, d) {
          typeof h == "string" && (h = [[null, h, void 0]]);
          var v = {};
          if (y)
            for (var g = 0; g < this.length; g++) {
              var w = this[g][0];
              w != null && (v[w] = !0);
            }
          for (var O = 0; O < h.length; O++) {
            var T = [].concat(h[O]);
            y && v[T[0]] || (d !== void 0 && (T[5] === void 0 || (T[1] = "@layer".concat(T[5].length > 0 ? " ".concat(T[5]) : "", " {").concat(T[1], "}")), T[5] = d), c && (T[2] && (T[1] = "@media ".concat(T[2], " {").concat(T[1], "}")), T[2] = c), p && (T[4] ? (T[1] = "@supports (".concat(T[4], ") {").concat(T[1], "}"), T[4] = p) : T[4] = "".concat(p)), u.push(T));
          }
        }, u;
      };
    }, 864: (s) => {
      s.exports = function(l) {
        var u = l[1], h = l[3];
        if (!h)
          return u;
        if (typeof btoa == "function") {
          var c = btoa(unescape(encodeURIComponent(JSON.stringify(h)))), y = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), p = "/*# ".concat(y, " */");
          return [u].concat([p]).join(`
`);
        }
        return [u].join(`
`);
      };
    }, 372: (s, l, u) => {
      var h = u(567);
      function c() {
      }
      function y() {
      }
      y.resetWarningCache = c, s.exports = function() {
        function p(g, w, O, T, D, B) {
          if (B !== h) {
            var $ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw $.name = "Invariant Violation", $;
          }
        }
        function d() {
          return p;
        }
        p.isRequired = p;
        var v = { array: p, bigint: p, bool: p, func: p, number: p, object: p, string: p, symbol: p, any: p, arrayOf: d, element: p, elementType: p, instanceOf: d, node: p, objectOf: d, oneOf: d, oneOfType: d, shape: d, exact: d, checkPropTypes: y, resetWarningCache: c };
        return v.PropTypes = v, v;
      };
    }, 652: (s, l, u) => {
      s.exports = u(372)();
    }, 567: (s) => {
      s.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (s) => {
      var l = [];
      function u(y) {
        for (var p = -1, d = 0; d < l.length; d++)
          if (l[d].identifier === y) {
            p = d;
            break;
          }
        return p;
      }
      function h(y, p) {
        for (var d = {}, v = [], g = 0; g < y.length; g++) {
          var w = y[g], O = p.base ? w[0] + p.base : w[0], T = d[O] || 0, D = "".concat(O, " ").concat(T);
          d[O] = T + 1;
          var B = u(D), $ = { css: w[1], media: w[2], sourceMap: w[3], supports: w[4], layer: w[5] };
          if (B !== -1)
            l[B].references++, l[B].updater($);
          else {
            var Q = c($, p);
            p.byIndex = g, l.splice(g, 0, { identifier: D, updater: Q, references: 1 });
          }
          v.push(D);
        }
        return v;
      }
      function c(y, p) {
        var d = p.domAPI(p);
        return d.update(y), function(v) {
          if (v) {
            if (v.css === y.css && v.media === y.media && v.sourceMap === y.sourceMap && v.supports === y.supports && v.layer === y.layer)
              return;
            d.update(y = v);
          } else
            d.remove();
        };
      }
      s.exports = function(y, p) {
        var d = h(y = y || [], p = p || {});
        return function(v) {
          v = v || [];
          for (var g = 0; g < d.length; g++) {
            var w = u(d[g]);
            l[w].references--;
          }
          for (var O = h(v, p), T = 0; T < d.length; T++) {
            var D = u(d[T]);
            l[D].references === 0 && (l[D].updater(), l.splice(D, 1));
          }
          d = O;
        };
      };
    }, 80: (s) => {
      var l = {};
      s.exports = function(u, h) {
        var c = function(y) {
          if (l[y] === void 0) {
            var p = document.querySelector(y);
            if (window.HTMLIFrameElement && p instanceof window.HTMLIFrameElement)
              try {
                p = p.contentDocument.head;
              } catch {
                p = null;
              }
            l[y] = p;
          }
          return l[y];
        }(u);
        if (!c)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        c.appendChild(h);
      };
    }, 182: (s) => {
      s.exports = function(l) {
        var u = document.createElement("style");
        return l.setAttributes(u, l.attributes), l.insert(u, l.options), u;
      };
    }, 850: (s, l, u) => {
      s.exports = function(h) {
        var c = u.nc;
        c && h.setAttribute("nonce", c);
      };
    }, 236: (s) => {
      s.exports = function(l) {
        var u = l.insertStyleElement(l);
        return { update: function(h) {
          (function(c, y, p) {
            var d = "";
            p.supports && (d += "@supports (".concat(p.supports, ") {")), p.media && (d += "@media ".concat(p.media, " {"));
            var v = p.layer !== void 0;
            v && (d += "@layer".concat(p.layer.length > 0 ? " ".concat(p.layer) : "", " {")), d += p.css, v && (d += "}"), p.media && (d += "}"), p.supports && (d += "}");
            var g = p.sourceMap;
            g && typeof btoa < "u" && (d += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(g)))), " */")), y.styleTagTransform(d, c, y.options);
          })(u, l, h);
        }, remove: function() {
          (function(h) {
            if (h.parentNode === null)
              return !1;
            h.parentNode.removeChild(h);
          })(u);
        } };
      };
    }, 213: (s) => {
      s.exports = function(l, u) {
        if (u.styleSheet)
          u.styleSheet.cssText = l;
        else {
          for (; u.firstChild; )
            u.removeChild(u.firstChild);
          u.appendChild(document.createTextNode(l));
        }
      };
    }, 359: (s) => {
      s.exports = r;
    } }, i = {};
    function a(s) {
      var l = i[s];
      if (l !== void 0)
        return l.exports;
      var u = i[s] = { id: s, exports: {} };
      return n[s](u, u.exports, a), u.exports;
    }
    a.n = (s) => {
      var l = s && s.__esModule ? () => s.default : () => s;
      return a.d(l, { a: l }), l;
    }, a.d = (s, l) => {
      for (var u in l)
        a.o(l, u) && !a.o(s, u) && Object.defineProperty(s, u, { enumerable: !0, get: l[u] });
    }, a.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), a.o = (s, l) => Object.prototype.hasOwnProperty.call(s, l), a.r = (s) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
    }, a.nc = void 0;
    var o = {};
    return (() => {
      a.r(o), a.d(o, { DefaultSplitter: () => Q, Split: () => qe });
      var s = a(359), l = a(701), u = a.n(l), h = a(236), c = a.n(h), y = a(80), p = a.n(y), d = a(850), v = a.n(d), g = a(182), w = a.n(g), O = a(213), T = a.n(O), D = a(58), B = {};
      B.styleTagTransform = T(), B.setAttributes = v(), B.insert = p().bind(null, "head"), B.domAPI = c(), B.insertStyleElement = w(), u()(D.Z, B), D.Z && D.Z.locals && D.Z.locals;
      const $ = (k) => (k % 2 == 0 ? 2 : 3) + "px", Q = (k) => {
        const { dragging: C, pixelSize: j, color: z = "silver", hoverColor: W = "gray", dragColor: he = "black" } = k, Ee = { "--default-splitter-line-margin": (De = j, `${Math.max(0, Math.floor(De / 2) - 1)}px`), "--default-splitter-line-size": $(j), "--default-splitter-line-color": C ? he : z, "--default-splitter-line-hover-color": C ? he : W };
        var De;
        return s.createElement("div", { className: "default-splitter", style: Ee }, s.createElement("div", { className: "line" }));
      };
      function H() {
        return H = Object.assign ? Object.assign.bind() : function(k) {
          for (var C = 1; C < arguments.length; C++) {
            var j = arguments[C];
            for (var z in j)
              Object.prototype.hasOwnProperty.call(j, z) && (k[z] = j[z]);
          }
          return k;
        }, H.apply(this, arguments);
      }
      function Y(k, C) {
        return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(j, z) {
          return j.__proto__ = z, j;
        }, Y(k, C);
      }
      var se = a(652), ne = a.n(se), ce = function() {
        if (typeof Map < "u")
          return Map;
        function k(C, j) {
          var z = -1;
          return C.some(function(W, he) {
            return W[0] === j && (z = he, !0);
          }), z;
        }
        return function() {
          function C() {
            this.__entries__ = [];
          }
          return Object.defineProperty(C.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), C.prototype.get = function(j) {
            var z = k(this.__entries__, j), W = this.__entries__[z];
            return W && W[1];
          }, C.prototype.set = function(j, z) {
            var W = k(this.__entries__, j);
            ~W ? this.__entries__[W][1] = z : this.__entries__.push([j, z]);
          }, C.prototype.delete = function(j) {
            var z = this.__entries__, W = k(z, j);
            ~W && z.splice(W, 1);
          }, C.prototype.has = function(j) {
            return !!~k(this.__entries__, j);
          }, C.prototype.clear = function() {
            this.__entries__.splice(0);
          }, C.prototype.forEach = function(j, z) {
            z === void 0 && (z = null);
            for (var W = 0, he = this.__entries__; W < he.length; W++) {
              var Ee = he[W];
              j.call(z, Ee[1], Ee[0]);
            }
          }, C;
        }();
      }(), ye = typeof window < "u" && typeof document < "u" && window.document === document, de = a.g !== void 0 && a.g.Math === Math ? a.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), V = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(de) : function(k) {
        return setTimeout(function() {
          return k(Date.now());
        }, 1e3 / 60);
      }, ee = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Oe = typeof MutationObserver < "u", f = function() {
        function k() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(C, j) {
            var z = !1, W = !1, he = 0;
            function Ee() {
              z && (z = !1, C()), W && q();
            }
            function De() {
              V(Ee);
            }
            function q() {
              var pe = Date.now();
              if (z) {
                if (pe - he < 2)
                  return;
                W = !0;
              } else
                z = !0, W = !1, setTimeout(De, 20);
              he = pe;
            }
            return q;
          }(this.refresh.bind(this));
        }
        return k.prototype.addObserver = function(C) {
          ~this.observers_.indexOf(C) || this.observers_.push(C), this.connected_ || this.connect_();
        }, k.prototype.removeObserver = function(C) {
          var j = this.observers_, z = j.indexOf(C);
          ~z && j.splice(z, 1), !j.length && this.connected_ && this.disconnect_();
        }, k.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, k.prototype.updateObservers_ = function() {
          var C = this.observers_.filter(function(j) {
            return j.gatherActive(), j.hasActive();
          });
          return C.forEach(function(j) {
            return j.broadcastActive();
          }), C.length > 0;
        }, k.prototype.connect_ = function() {
          ye && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Oe ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, k.prototype.disconnect_ = function() {
          ye && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, k.prototype.onTransitionEnd_ = function(C) {
          var j = C.propertyName, z = j === void 0 ? "" : j;
          ee.some(function(W) {
            return !!~z.indexOf(W);
          }) && this.refresh();
        }, k.getInstance = function() {
          return this.instance_ || (this.instance_ = new k()), this.instance_;
        }, k.instance_ = null, k;
      }(), m = function(k, C) {
        for (var j = 0, z = Object.keys(C); j < z.length; j++) {
          var W = z[j];
          Object.defineProperty(k, W, { value: C[W], enumerable: !1, writable: !1, configurable: !0 });
        }
        return k;
      }, b = function(k) {
        return k && k.ownerDocument && k.ownerDocument.defaultView || de;
      }, E = L(0, 0, 0, 0);
      function A(k) {
        return parseFloat(k) || 0;
      }
      function _(k) {
        for (var C = [], j = 1; j < arguments.length; j++)
          C[j - 1] = arguments[j];
        return C.reduce(function(z, W) {
          return z + A(k["border-" + W + "-width"]);
        }, 0);
      }
      var N = typeof SVGGraphicsElement < "u" ? function(k) {
        return k instanceof b(k).SVGGraphicsElement;
      } : function(k) {
        return k instanceof b(k).SVGElement && typeof k.getBBox == "function";
      };
      function I(k) {
        return ye ? N(k) ? function(C) {
          var j = C.getBBox();
          return L(0, 0, j.width, j.height);
        }(k) : function(C) {
          var j = C.clientWidth, z = C.clientHeight;
          if (!j && !z)
            return E;
          var W = b(C).getComputedStyle(C), he = function(Re) {
            for (var be = {}, Je = 0, Ke = ["top", "right", "bottom", "left"]; Je < Ke.length; Je++) {
              var ft = Ke[Je], mt = Re["padding-" + ft];
              be[ft] = A(mt);
            }
            return be;
          }(W), Ee = he.left + he.right, De = he.top + he.bottom, q = A(W.width), pe = A(W.height);
          if (W.boxSizing === "border-box" && (Math.round(q + Ee) !== j && (q -= _(W, "left", "right") + Ee), Math.round(pe + De) !== z && (pe -= _(W, "top", "bottom") + De)), !function(Re) {
            return Re === b(Re).document.documentElement;
          }(C)) {
            var He = Math.round(q + Ee) - j, Ne = Math.round(pe + De) - z;
            Math.abs(He) !== 1 && (q -= He), Math.abs(Ne) !== 1 && (pe -= Ne);
          }
          return L(he.left, he.top, q, pe);
        }(k) : E;
      }
      function L(k, C, j, z) {
        return { x: k, y: C, width: j, height: z };
      }
      var M = function() {
        function k(C) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = L(0, 0, 0, 0), this.target = C;
        }
        return k.prototype.isActive = function() {
          var C = I(this.target);
          return this.contentRect_ = C, C.width !== this.broadcastWidth || C.height !== this.broadcastHeight;
        }, k.prototype.broadcastRect = function() {
          var C = this.contentRect_;
          return this.broadcastWidth = C.width, this.broadcastHeight = C.height, C;
        }, k;
      }(), U = function(k, C) {
        var j, z, W, he, Ee, De, q, pe = (z = (j = C).x, W = j.y, he = j.width, Ee = j.height, De = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, q = Object.create(De.prototype), m(q, { x: z, y: W, width: he, height: Ee, top: W, right: z + he, bottom: Ee + W, left: z }), q);
        m(this, { target: k, contentRect: pe });
      }, fe = function() {
        function k(C, j, z) {
          if (this.activeObservations_ = [], this.observations_ = new ce(), typeof C != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = C, this.controller_ = j, this.callbackCtx_ = z;
        }
        return k.prototype.observe = function(C) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(C instanceof b(C).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var j = this.observations_;
            j.has(C) || (j.set(C, new M(C)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, k.prototype.unobserve = function(C) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(C instanceof b(C).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var j = this.observations_;
            j.has(C) && (j.delete(C), j.size || this.controller_.removeObserver(this));
          }
        }, k.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, k.prototype.gatherActive = function() {
          var C = this;
          this.clearActive(), this.observations_.forEach(function(j) {
            j.isActive() && C.activeObservations_.push(j);
          });
        }, k.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var C = this.callbackCtx_, j = this.activeObservations_.map(function(z) {
              return new U(z.target, z.broadcastRect());
            });
            this.callback_.call(C, j, C), this.clearActive();
          }
        }, k.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, k.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, k;
      }(), Z = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ce(), te = function k(C) {
        if (!(this instanceof k))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var j = f.getInstance(), z = new fe(C, j, this);
        Z.set(this, z);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(k) {
        te.prototype[k] = function() {
          var C;
          return (C = Z.get(this))[k].apply(C, arguments);
        };
      });
      const ue = de.ResizeObserver !== void 0 ? de.ResizeObserver : te;
      var xe = ["client", "offset", "scroll", "bounds", "margin"];
      function ae(k) {
        var C = [];
        return xe.forEach(function(j) {
          k[j] && C.push(j);
        }), C;
      }
      function We(k, C) {
        var j = {};
        if (C.indexOf("client") > -1 && (j.client = { top: k.clientTop, left: k.clientLeft, width: k.clientWidth, height: k.clientHeight }), C.indexOf("offset") > -1 && (j.offset = { top: k.offsetTop, left: k.offsetLeft, width: k.offsetWidth, height: k.offsetHeight }), C.indexOf("scroll") > -1 && (j.scroll = { top: k.scrollTop, left: k.scrollLeft, width: k.scrollWidth, height: k.scrollHeight }), C.indexOf("bounds") > -1) {
          var z = k.getBoundingClientRect();
          j.bounds = { top: z.top, right: z.right, bottom: z.bottom, left: z.left, width: z.width, height: z.height };
        }
        if (C.indexOf("margin") > -1) {
          var W = getComputedStyle(k);
          j.margin = { top: W ? parseInt(W.marginTop) : 0, right: W ? parseInt(W.marginRight) : 0, bottom: W ? parseInt(W.marginBottom) : 0, left: W ? parseInt(W.marginLeft) : 0 };
        }
        return j;
      }
      function Se(k) {
        return k && k.ownerDocument && k.ownerDocument.defaultView || window;
      }
      var Ye = function(k) {
        var C, j;
        return j = C = function(z) {
          var W, he;
          function Ee() {
            for (var q, pe = arguments.length, He = new Array(pe), Ne = 0; Ne < pe; Ne++)
              He[Ne] = arguments[Ne];
            return (q = z.call.apply(z, [this].concat(He)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, q._animationFrameID = null, q._resizeObserver = null, q._node = null, q._window = null, q.measure = function(Re) {
              var be = We(q._node, ae(q.props));
              Re && (be.entry = Re[0].contentRect), q._animationFrameID = q._window.requestAnimationFrame(function() {
                q._resizeObserver !== null && (q.setState({ contentRect: be }), typeof q.props.onResize == "function" && q.props.onResize(be));
              });
            }, q._handleRef = function(Re) {
              q._resizeObserver !== null && q._node !== null && q._resizeObserver.unobserve(q._node), q._node = Re, q._window = Se(q._node);
              var be = q.props.innerRef;
              be && (typeof be == "function" ? be(q._node) : be.current = q._node), q._resizeObserver !== null && q._node !== null && q._resizeObserver.observe(q._node);
            }, q;
          }
          he = z, (W = Ee).prototype = Object.create(he.prototype), W.prototype.constructor = W, Y(W, he);
          var De = Ee.prototype;
          return De.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new ue(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(We(this._node, ae(this.props))));
          }, De.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, De.render = function() {
            var q = this.props, pe = (q.innerRef, q.onResize, function(He, Ne) {
              if (He == null)
                return {};
              var Re, be, Je = {}, Ke = Object.keys(He);
              for (be = 0; be < Ke.length; be++)
                Re = Ke[be], Ne.indexOf(Re) >= 0 || (Je[Re] = He[Re]);
              return Je;
            }(q, ["innerRef", "onResize"]));
            return (0, s.createElement)(k, H({}, pe, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, Ee;
        }(s.Component), C.propTypes = { client: ne().bool, offset: ne().bool, scroll: ne().bool, bounds: ne().bool, margin: ne().bool, innerRef: ne().oneOfType([ne().object, ne().func]), onResize: ne().func }, j;
      }(function(k) {
        var C = k.measure, j = k.measureRef, z = k.contentRect;
        return (0, k.children)({ measure: C, measureRef: j, contentRect: z });
      });
      Ye.displayName = "Measure", Ye.propTypes.children = ne().func;
      const ke = Ye;
      var we = a(672), et = {};
      et.styleTagTransform = T(), et.setAttributes = v(), et.insert = p().bind(null, "head"), et.domAPI = c(), et.insertStyleElement = w(), u()(we.Z, et), we.Z && we.Z.locals && we.Z.locals;
      const qe = (k) => {
        const { horizontal: C = !1, initialPrimarySize: j = "50%", minPrimarySize: z = "0px", minSecondarySize: W = "0px", splitterSize: he = "7px", renderSplitter: Ee, resetOnDoubleClick: De = !1, defaultSplitterColors: q = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: pe, onMeasuredSizesChanged: He } = k, [Ne, Re] = s.useState({ height: 0, width: 0 }), [be, Je] = s.useState({ height: 0, width: 0 }), [Ke, ft] = s.useState({ height: 0, width: 0 }), mt = s.useMemo(() => C ? Ne.height : Ne.width, [C, Ne]), xt = s.useMemo(() => C ? be.height : be.width, [C, be]), St = s.useMemo(() => C ? Ke.height : Ke.width, [C, Ke]), [J, le] = s.useState(void 0), [ge, Me] = s.useState(0), [X, je] = s.useState(0), [tt, Ve] = s.useState(!1);
        s.useEffect(() => {
          pe && pe(J !== void 0 ? `${J}%` : j);
        }, [J, j]), s.useEffect(() => {
          He && He({ primary: xt, splitter: St, secondary: mt - (xt + St) });
        }, [C, mt, xt, St]);
        const Lt = (G) => {
          G.bounds && Je({ height: G.bounds.height, width: G.bounds.width });
        }, Qt = (G) => {
          G.bounds && ft({ height: G.bounds.height, width: G.bounds.width });
        }, rt = (G) => {
          G.currentTarget.setPointerCapture(G.pointerId), Me(C ? G.clientY : G.clientX), je(xt), Ve(!0);
        }, Mt = (G) => {
          if (G.currentTarget.hasPointerCapture(G.pointerId)) {
            const Ue = C ? G.clientY : G.clientX, Xe = X + (Ue - ge), jr = Math.max(0, Math.min(Xe, mt));
            le(jr / mt * 100);
          }
        }, Jt = (G) => {
          G.currentTarget.releasePointerCapture(G.pointerId), Ve(!1);
        }, nt = () => {
          De && le(void 0);
        }, it = s.Children.toArray(k.children), fr = it.length > 0 ? it[0] : s.createElement("div", null), vt = it.length > 1 ? it[1] : s.createElement("div", null), at = { primary: J !== void 0 ? `${J}%` : j, minPrimary: z ?? "0px", minSecondary: W ?? "0px" }, hn = { pixelSize: St, horizontal: C, dragging: tt }, ai = Ee ?? (() => s.createElement(Q, Object.assign({}, hn, { color: tt ? q.drag : q.color, hoverColor: tt ? q.drag : q.hover }))), re = C ? "split-container horizontal" : "split-container vertical", Ce = { "--react-split-min-primary": at.minPrimary, "--react-split-min-secondary": at.minSecondary, "--react-split-primary": at.primary, "--react-split-splitter": he };
        return s.createElement(ke, { bounds: !0, onResize: (G) => {
          G.bounds && Re({ height: G.bounds.height, width: G.bounds.width });
        } }, ({ measureRef: G }) => s.createElement("div", { className: "react-split", ref: G }, s.createElement("div", { className: re, style: Ce }, s.createElement("div", { className: "primary" }, s.createElement(ke, { bounds: !0, onResize: Lt }, ({ measureRef: Ue }) => s.createElement("div", { className: "full-content", ref: Ue }, fr))), s.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: rt, onPointerUp: Jt, onPointerMove: Mt, onDoubleClick: nt }, s.createElement(ke, { bounds: !0, onResize: Qt }, ({ measureRef: Ue }) => s.createElement("div", { className: "full-content", ref: Ue }, ai(hn)))), s.createElement("div", { className: "secondary" }, s.createElement("div", { className: "full-content" }, vt)))));
      };
    })(), o;
  })());
})(cc);
var lp = cc.exports;
const kt = Symbol.for("@ts-pattern/matcher"), Sd = Symbol.for("@ts-pattern/isVariadic"), jn = "@ts-pattern/anonymous-select-key", Qi = (e) => !!(e && typeof e == "object"), Cn = (e) => e && !!e[kt], _t = (e, t, r) => {
  if (Cn(e)) {
    const n = e[kt](), { matched: i, selections: a } = n.match(t);
    return i && a && Object.keys(a).forEach((o) => r(o, a[o])), i;
  }
  if (Qi(e)) {
    if (!Qi(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let n = [], i = [], a = [];
      for (const o of e.keys()) {
        const s = e[o];
        Cn(s) && s[Sd] ? a.push(s) : a.length ? i.push(s) : n.push(s);
      }
      if (a.length) {
        if (a.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < n.length + i.length)
          return !1;
        const o = t.slice(0, n.length), s = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
        return n.every((u, h) => _t(u, o[h], r)) && i.every((u, h) => _t(u, s[h], r)) && (a.length === 0 || _t(a[0], l, r));
      }
      return e.length === t.length && e.every((o, s) => _t(o, t[s], r));
    }
    return Object.keys(e).every((n) => {
      const i = e[n];
      return (n in t || Cn(a = i) && a[kt]().matcherType === "optional") && _t(i, t[n], r);
      var a;
    });
  }
  return Object.is(t, e);
}, Yt = (e) => {
  var t, r, n;
  return Qi(e) ? Cn(e) ? (t = (r = (n = e[kt]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? tn(e, Yt) : tn(Object.values(e), Yt) : [];
}, tn = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
function pt(e) {
  return Object.assign(e, { optional: () => Dd(e), and: (t) => Pe(e, t), or: (t) => Rd(e, t), select: (t) => t === void 0 ? wo(e) : wo(t, e) });
}
function Dd(e) {
  return pt({ [kt]: () => ({ match: (t) => {
    let r = {};
    const n = (i, a) => {
      r[i] = a;
    };
    return t === void 0 ? (Yt(e).forEach((i) => n(i, void 0)), { matched: !0, selections: r }) : { matched: _t(e, t, n), selections: r };
  }, getSelectionKeys: () => Yt(e), matcherType: "optional" }) });
}
function Pe(...e) {
  return pt({ [kt]: () => ({ match: (t) => {
    let r = {};
    const n = (i, a) => {
      r[i] = a;
    };
    return { matched: e.every((i) => _t(i, t, n)), selections: r };
  }, getSelectionKeys: () => tn(e, Yt), matcherType: "and" }) });
}
function Rd(...e) {
  return pt({ [kt]: () => ({ match: (t) => {
    let r = {};
    const n = (i, a) => {
      r[i] = a;
    };
    return tn(e, Yt).forEach((i) => n(i, void 0)), { matched: e.some((i) => _t(i, t, n)), selections: r };
  }, getSelectionKeys: () => tn(e, Yt), matcherType: "or" }) });
}
function me(e) {
  return { [kt]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function wo(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return pt({ [kt]: () => ({ match: (n) => {
    let i = { [t ?? jn]: n };
    return { matched: r === void 0 || _t(r, n, (a, o) => {
      i[a] = o;
    }), selections: i };
  }, getSelectionKeys: () => [t ?? jn].concat(r === void 0 ? [] : Yt(r)) }) });
}
function gt(e) {
  return typeof e == "number";
}
function Zt(e) {
  return typeof e == "string";
}
function Ft(e) {
  return typeof e == "bigint";
}
pt(me(function(e) {
  return !0;
}));
const er = (e) => Object.assign(pt(e), { startsWith: (t) => {
  return er(Pe(e, (r = t, me((n) => Zt(n) && n.startsWith(r)))));
  var r;
}, endsWith: (t) => {
  return er(Pe(e, (r = t, me((n) => Zt(n) && n.endsWith(r)))));
  var r;
}, minLength: (t) => er(Pe(e, ((r) => me((n) => Zt(n) && n.length >= r))(t))), maxLength: (t) => er(Pe(e, ((r) => me((n) => Zt(n) && n.length <= r))(t))), includes: (t) => {
  return er(Pe(e, (r = t, me((n) => Zt(n) && n.includes(r)))));
  var r;
}, regex: (t) => {
  return er(Pe(e, (r = t, me((n) => Zt(n) && !!n.match(r)))));
  var r;
} });
er(me(Zt));
const bt = (e) => Object.assign(pt(e), { between: (t, r) => bt(Pe(e, ((n, i) => me((a) => gt(a) && n <= a && i >= a))(t, r))), lt: (t) => bt(Pe(e, ((r) => me((n) => gt(n) && n < r))(t))), gt: (t) => bt(Pe(e, ((r) => me((n) => gt(n) && n > r))(t))), lte: (t) => bt(Pe(e, ((r) => me((n) => gt(n) && n <= r))(t))), gte: (t) => bt(Pe(e, ((r) => me((n) => gt(n) && n >= r))(t))), int: () => bt(Pe(e, me((t) => gt(t) && Number.isInteger(t)))), finite: () => bt(Pe(e, me((t) => gt(t) && Number.isFinite(t)))), positive: () => bt(Pe(e, me((t) => gt(t) && t > 0))), negative: () => bt(Pe(e, me((t) => gt(t) && t < 0))) });
bt(me(gt));
const Bt = (e) => Object.assign(pt(e), { between: (t, r) => Bt(Pe(e, ((n, i) => me((a) => Ft(a) && n <= a && i >= a))(t, r))), lt: (t) => Bt(Pe(e, ((r) => me((n) => Ft(n) && n < r))(t))), gt: (t) => Bt(Pe(e, ((r) => me((n) => Ft(n) && n > r))(t))), lte: (t) => Bt(Pe(e, ((r) => me((n) => Ft(n) && n <= r))(t))), gte: (t) => Bt(Pe(e, ((r) => me((n) => Ft(n) && n >= r))(t))), positive: () => Bt(Pe(e, me((t) => Ft(t) && t > 0))), negative: () => Bt(Pe(e, me((t) => Ft(t) && t < 0))) });
Bt(me(Ft));
pt(me(function(e) {
  return typeof e == "boolean";
}));
pt(me(function(e) {
  return typeof e == "symbol";
}));
pt(me(function(e) {
  return e == null;
}));
const Ji = { matched: !1, value: void 0 };
function up(e) {
  return new In(e, Ji);
}
class In {
  constructor(t, r) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = r;
  }
  with(...t) {
    if (this.state.matched)
      return this;
    const r = t[t.length - 1], n = [t[0]];
    let i;
    t.length === 3 && typeof t[1] == "function" ? i = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1));
    let a = !1, o = {};
    const s = (u, h) => {
      a = !0, o[u] = h;
    }, l = !n.some((u) => _t(u, this.input, s)) || i && !i(this.input) ? Ji : { matched: !0, value: r(a ? jn in o ? o[jn] : o : this.input, this.input) };
    return new In(this.input, l);
  }
  when(t, r) {
    if (this.state.matched)
      return this;
    const n = !!t(this.input);
    return new In(this.input, n ? { matched: !0, value: r(this.input, this.input) } : Ji);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    if (this.state.matched)
      return this.state.value;
    let t;
    try {
      t = JSON.stringify(this.input);
    } catch {
      t = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${t}`);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
}
const Pd = ({
  id: e
}) => {
  const t = Tu(), r = P.useMemo(() => {
    const {
      component: n,
      ...i
    } = t.find((a) => a.id === e) || {};
    if (!n)
      throw new Error(`Route with id ${e} not found`);
    return {
      ...i,
      Component: P.lazy(() => n())
    };
  }, [e, t]);
  return /* @__PURE__ */ ve(P.Suspense, { fallback: /* @__PURE__ */ ve(xd, {}), children: /* @__PURE__ */ ve(r.Component, {}) });
}, lc = F.createContext(null), fp = () => {
  const e = F.useContext(lc);
  if (!e)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return e;
}, kd = ({
  children: e,
  ...t
}) => {
  const [r, n] = F.useState();
  return /* @__PURE__ */ ve(lc.Provider, { value: {
    ...t,
    state: r,
    setState: n
  }, children: e });
}, Nd = ({
  el: e,
  match: t,
  window: r
}) => Rr.createPortal(/* @__PURE__ */ ve(kd, { width: 0, height: 0, title: "", position: {
  x: 0,
  y: 0
}, maximized: !0, folded: !0, focused: !0, params: t.params, focus: () => r == null ? void 0 : r.focus(), blur: () => r == null ? void 0 : r.blur(), maximize: () => r == null ? void 0 : r.maximize(), minimize: () => r == null ? void 0 : r.restore(), fold: () => r == null ? void 0 : r.minimize(), close: () => {
  setTimeout(() => {
    r == null || r.close();
  }, 50);
}, updatePosition: ({
  x: n,
  y: i
}) => r == null ? void 0 : r.showAt(n, i), setTitle: (n) => r == null ? void 0 : r.setTitle(n), setWidth: (n) => r == null ? void 0 : r.setWidth(n), setHeight: (n) => r == null ? void 0 : r.setHeight(n), children: /* @__PURE__ */ ve(Pd, { id: t.route.id }) }), e), Ld = F.createContext(null), Md = ({
  children: e,
  navigate: t
}) => /* @__PURE__ */ ve(Ld.Provider, { value: {
  navigate: t
}, children: e }), jd = ({
  eventEmitter: e,
  onNavigate: t,
  session: r,
  onSessionUpdate: n,
  onSessionExpired: i,
  onReady: a
}) => {
  const [o, s] = F.useState([]), [l, u] = F.useState(r);
  return F.useEffect(() => (e.on("update-session", (h) => {
    u(h);
  }), e.on("add", (h, c, y) => {
    s((p) => [...p, {
      el: h,
      match: c,
      window: y
    }]);
  }), e.on("destroy", (h) => {
    s((c) => c.filter((y) => y.el !== h));
  }), a(), () => {
    e.removeAllListeners("update-session"), e.removeAllListeners("add"), e.removeAllListeners("destroy");
  }), [e]), /* @__PURE__ */ ve(Cu, { session: l, updateSession: (h) => {
    n(h), u(h);
  }, onSessionExpired: i, children: /* @__PURE__ */ Bn(Md, { navigate: t, children: [
    /* @__PURE__ */ ve(kc, {}),
    /* @__PURE__ */ ve(ko, { styles: Xi`
            .MuiPopper-root {
              z-index: 50000;
            }
            .inl-modal {
              z-index: 20000;
            }
            .base-Popper-root {
              z-index: 20000;
            }
          ` }),
    o.map((h) => /* @__PURE__ */ ve(Nd, { ...h }, h.match.route.id))
  ] }) });
};
function Id(e) {
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
      for (var i = "", a = r + 1; a < e.length; ) {
        var o = e.charCodeAt(a);
        if (
          // `0-9`
          o >= 48 && o <= 57 || // `A-Z`
          o >= 65 && o <= 90 || // `a-z`
          o >= 97 && o <= 122 || // `_`
          o === 95
        ) {
          i += e[a++];
          continue;
        }
        break;
      }
      if (!i)
        throw new TypeError("Missing parameter name at ".concat(r));
      t.push({ type: "NAME", index: r, value: i }), r = a;
      continue;
    }
    if (n === "(") {
      var s = 1, l = "", a = r + 1;
      if (e[a] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(a));
      for (; a < e.length; ) {
        if (e[a] === "\\") {
          l += e[a++] + e[a++];
          continue;
        }
        if (e[a] === ")") {
          if (s--, s === 0) {
            a++;
            break;
          }
        } else if (e[a] === "(" && (s++, e[a + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(a));
        l += e[a++];
      }
      if (s)
        throw new TypeError("Unbalanced pattern at ".concat(r));
      if (!l)
        throw new TypeError("Missing pattern at ".concat(r));
      t.push({ type: "PATTERN", index: r, value: l }), r = a;
      continue;
    }
    t.push({ type: "CHAR", index: r, value: e[r++] });
  }
  return t.push({ type: "END", index: r, value: "" }), t;
}
function uc(e, t) {
  t === void 0 && (t = {});
  for (var r = Id(e), n = t.prefixes, i = n === void 0 ? "./" : n, a = "[^".concat(pr(t.delimiter || "/#?"), "]+?"), o = [], s = 0, l = 0, u = "", h = function($) {
    if (l < r.length && r[l].type === $)
      return r[l++].value;
  }, c = function($) {
    var Q = h($);
    if (Q !== void 0)
      return Q;
    var H = r[l], Y = H.type, se = H.index;
    throw new TypeError("Unexpected ".concat(Y, " at ").concat(se, ", expected ").concat($));
  }, y = function() {
    for (var $ = "", Q; Q = h("CHAR") || h("ESCAPED_CHAR"); )
      $ += Q;
    return $;
  }; l < r.length; ) {
    var p = h("CHAR"), d = h("NAME"), v = h("PATTERN");
    if (d || v) {
      var g = p || "";
      i.indexOf(g) === -1 && (u += g, g = ""), u && (o.push(u), u = ""), o.push({
        name: d || s++,
        prefix: g,
        suffix: "",
        pattern: v || a,
        modifier: h("MODIFIER") || ""
      });
      continue;
    }
    var w = p || h("ESCAPED_CHAR");
    if (w) {
      u += w;
      continue;
    }
    u && (o.push(u), u = "");
    var O = h("OPEN");
    if (O) {
      var g = y(), T = h("NAME") || "", D = h("PATTERN") || "", B = y();
      c("CLOSE"), o.push({
        name: T || (D ? s++ : ""),
        pattern: T && !D ? a : D,
        prefix: g,
        suffix: B,
        modifier: h("MODIFIER") || ""
      });
      continue;
    }
    c("END");
  }
  return o;
}
function hp(e, t) {
  return Fd(uc(e, t), t);
}
function Fd(e, t) {
  t === void 0 && (t = {});
  var r = Ca(t), n = t.encode, i = n === void 0 ? function(l) {
    return l;
  } : n, a = t.validate, o = a === void 0 ? !0 : a, s = e.map(function(l) {
    if (typeof l == "object")
      return new RegExp("^(?:".concat(l.pattern, ")$"), r);
  });
  return function(l) {
    for (var u = "", h = 0; h < e.length; h++) {
      var c = e[h];
      if (typeof c == "string") {
        u += c;
        continue;
      }
      var y = l ? l[c.name] : void 0, p = c.modifier === "?" || c.modifier === "*", d = c.modifier === "*" || c.modifier === "+";
      if (Array.isArray(y)) {
        if (!d)
          throw new TypeError('Expected "'.concat(c.name, '" to not repeat, but got an array'));
        if (y.length === 0) {
          if (p)
            continue;
          throw new TypeError('Expected "'.concat(c.name, '" to not be empty'));
        }
        for (var v = 0; v < y.length; v++) {
          var g = i(y[v], c);
          if (o && !s[h].test(g))
            throw new TypeError('Expected all "'.concat(c.name, '" to match "').concat(c.pattern, '", but got "').concat(g, '"'));
          u += c.prefix + g + c.suffix;
        }
        continue;
      }
      if (typeof y == "string" || typeof y == "number") {
        var g = i(String(y), c);
        if (o && !s[h].test(g))
          throw new TypeError('Expected "'.concat(c.name, '" to match "').concat(c.pattern, '", but got "').concat(g, '"'));
        u += c.prefix + g + c.suffix;
        continue;
      }
      if (!p) {
        var w = d ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(c.name, '" to be ').concat(w));
      }
    }
    return u;
  };
}
function Bd(e, t) {
  var r = [], n = fc(e, r, t);
  return zd(n, r, t);
}
function zd(e, t, r) {
  r === void 0 && (r = {});
  var n = r.decode, i = n === void 0 ? function(a) {
    return a;
  } : n;
  return function(a) {
    var o = e.exec(a);
    if (!o)
      return !1;
    for (var s = o[0], l = o.index, u = /* @__PURE__ */ Object.create(null), h = function(y) {
      if (o[y] === void 0)
        return "continue";
      var p = t[y - 1];
      p.modifier === "*" || p.modifier === "+" ? u[p.name] = o[y].split(p.prefix + p.suffix).map(function(d) {
        return i(d, p);
      }) : u[p.name] = i(o[y], p);
    }, c = 1; c < o.length; c++)
      h(c);
    return { path: s, index: l, params: u };
  };
}
function pr(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Ca(e) {
  return e && e.sensitive ? "" : "i";
}
function Wd(e, t) {
  if (!t)
    return e;
  for (var r = /\((?:\?<(.*?)>)?(?!\?)/g, n = 0, i = r.exec(e.source); i; )
    t.push({
      // Use parenthesized substring match if available, index otherwise
      name: i[1] || n++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), i = r.exec(e.source);
  return e;
}
function Hd(e, t, r) {
  var n = e.map(function(i) {
    return fc(i, t, r).source;
  });
  return new RegExp("(?:".concat(n.join("|"), ")"), Ca(r));
}
function Ud(e, t, r) {
  return $d(uc(e, r), t, r);
}
function $d(e, t, r) {
  r === void 0 && (r = {});
  for (var n = r.strict, i = n === void 0 ? !1 : n, a = r.start, o = a === void 0 ? !0 : a, s = r.end, l = s === void 0 ? !0 : s, u = r.encode, h = u === void 0 ? function(se) {
    return se;
  } : u, c = r.delimiter, y = c === void 0 ? "/#?" : c, p = r.endsWith, d = p === void 0 ? "" : p, v = "[".concat(pr(d), "]|$"), g = "[".concat(pr(y), "]"), w = o ? "^" : "", O = 0, T = e; O < T.length; O++) {
    var D = T[O];
    if (typeof D == "string")
      w += pr(h(D));
    else {
      var B = pr(h(D.prefix)), $ = pr(h(D.suffix));
      if (D.pattern)
        if (t && t.push(D), B || $)
          if (D.modifier === "+" || D.modifier === "*") {
            var Q = D.modifier === "*" ? "?" : "";
            w += "(?:".concat(B, "((?:").concat(D.pattern, ")(?:").concat($).concat(B, "(?:").concat(D.pattern, "))*)").concat($, ")").concat(Q);
          } else
            w += "(?:".concat(B, "(").concat(D.pattern, ")").concat($, ")").concat(D.modifier);
        else
          D.modifier === "+" || D.modifier === "*" ? w += "((?:".concat(D.pattern, ")").concat(D.modifier, ")") : w += "(".concat(D.pattern, ")").concat(D.modifier);
      else
        w += "(?:".concat(B).concat($, ")").concat(D.modifier);
    }
  }
  if (l)
    i || (w += "".concat(g, "?")), w += r.endsWith ? "(?=".concat(v, ")") : "$";
  else {
    var H = e[e.length - 1], Y = typeof H == "string" ? g.indexOf(H[H.length - 1]) > -1 : H === void 0;
    i || (w += "(?:".concat(g, "(?=").concat(v, "))?")), Y || (w += "(?=".concat(g, "|").concat(v, ")"));
  }
  return new RegExp(w, Ca(r));
}
function fc(e, t, r) {
  return e instanceof RegExp ? Wd(e, t) : Array.isArray(e) ? Hd(e, t, r) : Ud(e, t, r);
}
const qd = (e) => e.map((t) => [t, Bd(t.path)]), Vd = (e, t) => {
  for (let r = 0; r < e.length; r++) {
    const [n, i] = e[r], a = i(t);
    if (a)
      return {
        params: a.params,
        route: n,
        path: t
      };
  }
};
window.initReact = ({
  session: e,
  onNavigate: t,
  onSessionExpired: r,
  onSessionUpdate: n,
  onReady: i
}) => {
  const a = document.createElement("div");
  document.body.appendChild(a);
  const o = new Ac(), s = qd(Mo.filter((l) => !l.notExposeToLibrary));
  return Ti.createRoot(a).render(/* @__PURE__ */ ve(jd, { session: e, eventEmitter: o, onReady: i, onNavigate: (l) => {
    t == null || t(l);
  }, onSessionExpired: () => {
    r == null || r();
  }, onSessionUpdate: (l) => {
    n == null || n(l);
  } })), {
    updateSession: (l) => {
      o.emit("update-session", l);
    },
    match(l) {
      const u = Vd(s, l);
      if (u)
        return {
          windowOptions: u.route.windowOptions,
          renderComponent: (h, c) => o.emit("add", h, u, c),
          destroyComponent: (h) => o.emit("destroy", h)
        };
    },
    getShortcuts() {
      return s.filter(([l]) => l.shortcut).map(([l]) => ({
        ...l.shortcut,
        route: l.path
      }));
    }
  };
};
export {
  Di as $,
  fo as A,
  ip as B,
  cp as C,
  Xd as D,
  Xh as E,
  gc as F,
  Hn as G,
  Qh as H,
  Ge as I,
  zo as J,
  Rt as K,
  Jd as L,
  po as M,
  up as N,
  $r as O,
  Gc as P,
  Ae as Q,
  op as R,
  xd as S,
  tp as T,
  hp as U,
  uc as V,
  rp as W,
  ht as X,
  Un as Y,
  Lc as Z,
  Mc as _,
  Bn as a,
  ra as a0,
  Ic as a1,
  ep as a2,
  Ld as b,
  fp as c,
  lp as d,
  Oi as e,
  sc as f,
  tc as g,
  Jh as h,
  bd as i,
  ve as j,
  ec as k,
  Ed as l,
  Oa as m,
  Vi as n,
  Ai as o,
  ed as p,
  Yh as q,
  sp as r,
  ap as s,
  rc as t,
  Zd as u,
  np as v,
  Ct as w,
  $e as x,
  Ur as y,
  ud as z
};
