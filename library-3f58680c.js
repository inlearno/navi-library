var Lu = (t, n, i) => {
  if (!n.has(t))
    throw TypeError("Cannot " + i);
};
var z = (t, n, i) => (Lu(t, n, "read from private field"), i ? i.call(t) : n.get(t)), ze = (t, n, i) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, i);
}, ye = (t, n, i, a) => (Lu(t, n, "write to private field"), a ? a.call(t, i) : n.set(t, i), i);
var So = (t, n, i, a) => ({
  set _(s) {
    ye(t, n, s, i);
  },
  get _() {
    return z(t, n, a);
  }
}), Lt = (t, n, i) => (Lu(t, n, "access private method"), i);
import { h as Od, j as Nt, E as Cd, c as Td, a as El, G as Sd, b as m1, T as g1, n as xl, d as y1, t as Eh, e as Zo } from "./mui-4f485058.js";
import { g as Ol, c as $i, r as G, R as te, d as hr } from "./react-6f5a8403.js";
import { P as Y, F as b1 } from "./icons-ad9f8a73.js";
var w1 = Nt.Fragment;
function et(t, n, i) {
  return Od.call(n, "css") ? Nt.jsx(Cd, Td(t, n), i) : Nt.jsx(t, n, i);
}
function es(t, n, i) {
  return Od.call(n, "css") ? Nt.jsxs(Cd, Td(t, n), i) : Nt.jsxs(t, n, i);
}
var Qu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "users", a = 640, s = 512, l = [], c = "f0c0", h = "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      l,
      c,
      h
    ]
  }, t.faUsers = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = l, t.unicode = c, t.svgPathData = h, t.aliases = l;
})(Qu);
const _1 = [{
  id: "users",
  path: "/users",
  component: () => import("./UsersList-7e75cbe6.js"),
  windowOptions: {
    icon: Qu.faUsers,
    title: "Пользователи",
    width: 800
  },
  shortcut: {
    title: "Пользователи",
    icon: Qu.faUsers,
    group: "fourth",
    order: 100
  },
  notExposeToLibrary: !0
}];
var Dd = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "book", a = 448, s = 512, l = [128212], c = "f02d", h = "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      l,
      c,
      h
    ]
  }, t.faBook = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = l, t.unicode = c, t.svgPathData = h, t.aliases = l;
})(Dd);
var Rd = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "brush", a = 384, s = 512, l = [], c = "f55d", h = "M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      l,
      c,
      h
    ]
  }, t.faBrush = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = l, t.unicode = c, t.svgPathData = h, t.aliases = l;
})(Rd);
const A1 = [{
  id: "program-docs",
  path: "/program-docs",
  component: () => import("./ProgramDocsList-4adf0984.js"),
  windowOptions: {
    title: "Конструктор документов программ",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Конструктор документов программ",
    icon: Rd.faBrush,
    color: "#ef4444",
    group: "general",
    order: 1300
  }
}, {
  id: "program-docs-constructor",
  path: "/program-docs/constructor/:id",
  component: () => import("./ProgramConstructor-0fdbe1c9.js"),
  windowOptions: {
    title: "Конструктор программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-docs-draft",
  path: "/program-docs/draft",
  component: () => import("./Draft-6d3ebc2f.js"),
  windowOptions: {
    title: "Черновик программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-constructor-copy",
  path: "/program-docs/copy/:id",
  component: () => import("./CopyProgramForm-679d6d51.js"),
  windowOptions: {
    title: "Копирование программы",
    width: 700,
    height: 500
  }
}, {
  id: "program-constructor-dicts",
  path: "/program-docs/dicts",
  component: () => import("./Dictionaries-6cde6f05.js"),
  windowOptions: {
    title: "Справочники",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Справочники конструктор программы",
    icon: Dd.faBook,
    color: "#ef4444",
    group: "general",
    order: 1350
  }
}], Ld = [...A1, ..._1];
var Pd = { exports: {} };
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
(function(t, n) {
  (function(i) {
    var a = Object.hasOwnProperty, s = Array.isArray ? Array.isArray : function(x) {
      return Object.prototype.toString.call(x) === "[object Array]";
    }, l = 10, c = typeof process == "object" && typeof process.nextTick == "function", h = typeof Symbol == "function", g = typeof Reflect == "object", y = typeof setImmediate == "function", b = y ? setImmediate : setTimeout, v = h ? g && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(m) {
      var x = Object.getOwnPropertyNames(m);
      return x.push.apply(x, Object.getOwnPropertySymbols(m)), x;
    } : Object.keys;
    function C() {
      this._events = {}, this._conf && _.call(this, this._conf);
    }
    function _(m) {
      m && (this._conf = m, m.delimiter && (this.delimiter = m.delimiter), m.maxListeners !== i && (this._maxListeners = m.maxListeners), m.wildcard && (this.wildcard = m.wildcard), m.newListener && (this._newListener = m.newListener), m.removeListener && (this._removeListener = m.removeListener), m.verboseMemoryLeak && (this.verboseMemoryLeak = m.verboseMemoryLeak), m.ignoreErrors && (this.ignoreErrors = m.ignoreErrors), this.wildcard && (this.listenerTree = {}));
    }
    function w(m, x) {
      var S = "(node) warning: possible EventEmitter memory leak detected. " + m + " listeners added. Use emitter.setMaxListeners() to increase limit.";
      if (this.verboseMemoryLeak && (S += " Event name: " + x + "."), typeof process < "u" && process.emitWarning) {
        var P = new Error(S);
        P.name = "MaxListenersExceededWarning", P.emitter = this, P.count = m, process.emitWarning(P);
      } else
        console.error(S), console.trace && console.trace();
    }
    var E = function(m, x, S) {
      var P = arguments.length;
      switch (P) {
        case 0:
          return [];
        case 1:
          return [m];
        case 2:
          return [m, x];
        case 3:
          return [m, x, S];
        default:
          for (var N = new Array(P); P--; )
            N[P] = arguments[P];
          return N;
      }
    };
    function O(m, x) {
      for (var S = {}, P, N = m.length, k = x ? x.length : 0, K = 0; K < N; K++)
        P = m[K], S[P] = K < k ? x[K] : i;
      return S;
    }
    function D(m, x, S) {
      this._emitter = m, this._target = x, this._listeners = {}, this._listenersCount = 0;
      var P, N;
      if ((S.on || S.off) && (P = S.on, N = S.off), x.addEventListener ? (P = x.addEventListener, N = x.removeEventListener) : x.addListener ? (P = x.addListener, N = x.removeListener) : x.on && (P = x.on, N = x.off), !P && !N)
        throw Error("target does not implement any known event API");
      if (typeof P != "function")
        throw TypeError("on method must be a function");
      if (typeof N != "function")
        throw TypeError("off method must be a function");
      this._on = P, this._off = N;
      var k = m._observers;
      k ? k.push(this) : m._observers = [this];
    }
    Object.assign(D.prototype, {
      subscribe: function(m, x, S) {
        var P = this, N = this._target, k = this._emitter, K = this._listeners, J = function() {
          var V = E.apply(null, arguments), X = {
            data: V,
            name: x,
            original: m
          };
          if (S) {
            var se = S.call(N, X);
            se !== !1 && k.emit.apply(k, [X.name].concat(V));
            return;
          }
          k.emit.apply(k, [x].concat(V));
        };
        if (K[m])
          throw Error("Event '" + m + "' is already listening");
        this._listenersCount++, k._newListener && k._removeListener && !P._onNewListener ? (this._onNewListener = function(V) {
          V === x && K[m] === null && (K[m] = J, P._on.call(N, m, J));
        }, k.on("newListener", this._onNewListener), this._onRemoveListener = function(V) {
          V === x && !k.hasListeners(V) && K[m] && (K[m] = null, P._off.call(N, m, J));
        }, K[m] = null, k.on("removeListener", this._onRemoveListener)) : (K[m] = J, P._on.call(N, m, J));
      },
      unsubscribe: function(m) {
        var x = this, S = this._listeners, P = this._emitter, N, k, K = this._off, J = this._target, V;
        if (m && typeof m != "string")
          throw TypeError("event must be a string");
        function X() {
          x._onNewListener && (P.off("newListener", x._onNewListener), P.off("removeListener", x._onRemoveListener), x._onNewListener = null, x._onRemoveListener = null);
          var se = ie.call(P, x);
          P._observers.splice(se, 1);
        }
        if (m) {
          if (N = S[m], !N)
            return;
          K.call(J, m, N), delete S[m], --this._listenersCount || X();
        } else {
          for (k = v(S), V = k.length; V-- > 0; )
            m = k[V], K.call(J, m, S[m]);
          this._listeners = {}, this._listenersCount = 0, X();
        }
      }
    });
    function B(m, x, S, P) {
      var N = Object.assign({}, x);
      if (!m)
        return N;
      if (typeof m != "object")
        throw TypeError("options must be an object");
      var k = Object.keys(m), K = k.length, J, V, X;
      function se(Oe) {
        throw Error('Invalid "' + J + '" option value' + (Oe ? ". Reason: " + Oe : ""));
      }
      for (var Pe = 0; Pe < K; Pe++) {
        if (J = k[Pe], !P && !a.call(x, J))
          throw Error('Unknown "' + J + '" option');
        V = m[J], V !== i && (X = S[J], N[J] = X ? X(V, se) : V);
      }
      return N;
    }
    function M(m, x) {
      return (typeof m != "function" || !m.hasOwnProperty("prototype")) && x("value must be a constructor"), m;
    }
    function U(m) {
      var x = "value must be type of " + m.join("|"), S = m.length, P = m[0], N = m[1];
      return S === 1 ? function(k, K) {
        if (typeof k === P)
          return k;
        K(x);
      } : S === 2 ? function(k, K) {
        var J = typeof k;
        if (J === P || J === N)
          return k;
        K(x);
      } : function(k, K) {
        for (var J = typeof k, V = S; V-- > 0; )
          if (J === m[V])
            return k;
        K(x);
      };
    }
    var ee = U(["function"]), oe = U(["object", "function"]);
    function de(m, x, S) {
      var P, N, k = 0, K, J = new m(function(V, X, se) {
        S = B(S, {
          timeout: 0,
          overload: !1
        }, {
          timeout: function(Ne, ot) {
            return Ne *= 1, (typeof Ne != "number" || Ne < 0 || !Number.isFinite(Ne)) && ot("timeout must be a positive number"), Ne;
          }
        }), P = !S.overload && typeof m.prototype.cancel == "function" && typeof se == "function";
        function Pe() {
          N && (N = null), k && (clearTimeout(k), k = 0);
        }
        var Oe = function(Ne) {
          Pe(), V(Ne);
        }, Ee = function(Ne) {
          Pe(), X(Ne);
        };
        P ? x(Oe, Ee, se) : (N = [function(Ne) {
          Ee(Ne || Error("canceled"));
        }], x(Oe, Ee, function(Ne) {
          if (K)
            throw Error("Unable to subscribe on cancel event asynchronously");
          if (typeof Ne != "function")
            throw TypeError("onCancel callback must be a function");
          N.push(Ne);
        }), K = !0), S.timeout > 0 && (k = setTimeout(function() {
          var Ne = Error("timeout");
          Ne.code = "ETIMEDOUT", k = 0, J.cancel(Ne), X(Ne);
        }, S.timeout));
      });
      return P || (J.cancel = function(V) {
        if (N) {
          for (var X = N.length, se = 1; se < X; se++)
            N[se](V);
          N[0](V), N = null;
        }
      }), J;
    }
    function ie(m) {
      var x = this._observers;
      if (!x)
        return -1;
      for (var S = x.length, P = 0; P < S; P++)
        if (x[P]._target === m)
          return P;
      return -1;
    }
    function fe(m, x, S, P, N) {
      if (!S)
        return null;
      if (P === 0) {
        var k = typeof x;
        if (k === "string") {
          var K, J, V = 0, X = 0, se = this.delimiter, Pe = se.length;
          if ((J = x.indexOf(se)) !== -1) {
            K = new Array(5);
            do
              K[V++] = x.slice(X, J), X = J + Pe;
            while ((J = x.indexOf(se, X)) !== -1);
            K[V++] = x.slice(X), x = K, N = V;
          } else
            x = [x], N = 1;
        } else
          k === "object" ? N = x.length : (x = [x], N = 1);
      }
      var Oe = null, Ee, Ne, ot, be, yt, lt = x[P], ct = x[P + 1], pt, nt;
      if (P === N)
        S._listeners && (typeof S._listeners == "function" ? (m && m.push(S._listeners), Oe = [S]) : (m && m.push.apply(m, S._listeners), Oe = [S]));
      else if (lt === "*") {
        for (pt = v(S), J = pt.length; J-- > 0; )
          Ee = pt[J], Ee !== "_listeners" && (nt = fe(m, x, S[Ee], P + 1, N), nt && (Oe ? Oe.push.apply(Oe, nt) : Oe = nt));
        return Oe;
      } else if (lt === "**") {
        for (yt = P + 1 === N || P + 2 === N && ct === "*", yt && S._listeners && (Oe = fe(m, x, S, N, N)), pt = v(S), J = pt.length; J-- > 0; )
          Ee = pt[J], Ee !== "_listeners" && (Ee === "*" || Ee === "**" ? (S[Ee]._listeners && !yt && (nt = fe(m, x, S[Ee], N, N), nt && (Oe ? Oe.push.apply(Oe, nt) : Oe = nt)), nt = fe(m, x, S[Ee], P, N)) : Ee === ct ? nt = fe(m, x, S[Ee], P + 2, N) : nt = fe(m, x, S[Ee], P, N), nt && (Oe ? Oe.push.apply(Oe, nt) : Oe = nt));
        return Oe;
      } else
        S[lt] && (Oe = fe(m, x, S[lt], P + 1, N));
      if (Ne = S["*"], Ne && fe(m, x, Ne, P + 1, N), ot = S["**"], ot)
        if (P < N)
          for (ot._listeners && fe(m, x, ot, N, N), pt = v(ot), J = pt.length; J-- > 0; )
            Ee = pt[J], Ee !== "_listeners" && (Ee === ct ? fe(m, x, ot[Ee], P + 2, N) : Ee === lt ? fe(m, x, ot[Ee], P + 1, N) : (be = {}, be[Ee] = ot[Ee], fe(m, x, { "**": be }, P + 1, N)));
        else
          ot._listeners ? fe(m, x, ot, N, N) : ot["*"] && ot["*"]._listeners && fe(m, x, ot["*"], N, N);
      return Oe;
    }
    function Fe(m, x, S) {
      var P = 0, N = 0, k, K = this.delimiter, J = K.length, V;
      if (typeof m == "string")
        if ((k = m.indexOf(K)) !== -1) {
          V = new Array(5);
          do
            V[P++] = m.slice(N, k), N = k + J;
          while ((k = m.indexOf(K, N)) !== -1);
          V[P++] = m.slice(N);
        } else
          V = [m], P = 1;
      else
        V = m, P = m.length;
      if (P > 1) {
        for (k = 0; k + 1 < P; k++)
          if (V[k] === "**" && V[k + 1] === "**")
            return;
      }
      var X = this.listenerTree, se;
      for (k = 0; k < P; k++)
        if (se = V[k], X = X[se] || (X[se] = {}), k === P - 1)
          return X._listeners ? (typeof X._listeners == "function" && (X._listeners = [X._listeners]), S ? X._listeners.unshift(x) : X._listeners.push(x), !X._listeners.warned && this._maxListeners > 0 && X._listeners.length > this._maxListeners && (X._listeners.warned = !0, w.call(this, X._listeners.length, se))) : X._listeners = x, !0;
      return !0;
    }
    function Re(m, x, S, P) {
      for (var N = v(m), k = N.length, K, J, V, X = m._listeners, se; k-- > 0; )
        J = N[k], K = m[J], J === "_listeners" ? V = S : V = S ? S.concat(J) : [J], se = P || typeof J == "symbol", X && x.push(se ? V : V.join(this.delimiter)), typeof K == "object" && Re.call(this, K, x, V, se);
      return x;
    }
    function Be(m) {
      for (var x = v(m), S = x.length, P, N, k; S-- > 0; )
        N = x[S], P = m[N], P && (k = !0, N !== "_listeners" && !Be(P) && delete m[N]);
      return k;
    }
    function Qe(m, x, S) {
      this.emitter = m, this.event = x, this.listener = S;
    }
    Qe.prototype.off = function() {
      return this.emitter.off(this.event, this.listener), this;
    };
    function je(m, x, S) {
      if (S === !0)
        N = !0;
      else if (S === !1)
        P = !0;
      else {
        if (!S || typeof S != "object")
          throw TypeError("options should be an object or true");
        var P = S.async, N = S.promisify, k = S.nextTick, K = S.objectify;
      }
      if (P || k || N) {
        var J = x, V = x._origin || x;
        if (k && !c)
          throw Error("process.nextTick is not supported");
        N === i && (N = x.constructor.name === "AsyncFunction"), x = function() {
          var X = arguments, se = this, Pe = this.event;
          return N ? k ? Promise.resolve() : new Promise(function(Oe) {
            b(Oe);
          }).then(function() {
            return se.event = Pe, J.apply(se, X);
          }) : (k ? process.nextTick : b)(function() {
            se.event = Pe, J.apply(se, X);
          });
        }, x._async = !0, x._origin = V;
      }
      return [x, K ? new Qe(this, m, x) : this];
    }
    function he(m) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, _.call(this, m);
    }
    he.EventEmitter2 = he, he.prototype.listenTo = function(m, x, S) {
      if (typeof m != "object")
        throw TypeError("target musts be an object");
      var P = this;
      S = B(S, {
        on: i,
        off: i,
        reducers: i
      }, {
        on: ee,
        off: ee,
        reducers: oe
      });
      function N(k) {
        if (typeof k != "object")
          throw TypeError("events must be an object");
        var K = S.reducers, J = ie.call(P, m), V;
        J === -1 ? V = new D(P, m, S) : V = P._observers[J];
        for (var X = v(k), se = X.length, Pe, Oe = typeof K == "function", Ee = 0; Ee < se; Ee++)
          Pe = X[Ee], V.subscribe(
            Pe,
            k[Pe] || Pe,
            Oe ? K : K && K[Pe]
          );
      }
      return s(x) ? N(O(x)) : N(typeof x == "string" ? O(x.split(/\s+/)) : x), this;
    }, he.prototype.stopListeningTo = function(m, x) {
      var S = this._observers;
      if (!S)
        return !1;
      var P = S.length, N, k = !1;
      if (m && typeof m != "object")
        throw TypeError("target should be an object");
      for (; P-- > 0; )
        N = S[P], (!m || N._target === m) && (N.unsubscribe(x), k = !0);
      return k;
    }, he.prototype.delimiter = ".", he.prototype.setMaxListeners = function(m) {
      m !== i && (this._maxListeners = m, this._conf || (this._conf = {}), this._conf.maxListeners = m);
    }, he.prototype.getMaxListeners = function() {
      return this._maxListeners;
    }, he.prototype.event = "", he.prototype.once = function(m, x, S) {
      return this._once(m, x, !1, S);
    }, he.prototype.prependOnceListener = function(m, x, S) {
      return this._once(m, x, !0, S);
    }, he.prototype._once = function(m, x, S, P) {
      return this._many(m, 1, x, S, P);
    }, he.prototype.many = function(m, x, S, P) {
      return this._many(m, x, S, !1, P);
    }, he.prototype.prependMany = function(m, x, S, P) {
      return this._many(m, x, S, !0, P);
    }, he.prototype._many = function(m, x, S, P, N) {
      var k = this;
      if (typeof S != "function")
        throw new Error("many only accepts instances of Function");
      function K() {
        return --x === 0 && k.off(m, K), S.apply(this, arguments);
      }
      return K._origin = S, this._on(m, K, P, N);
    }, he.prototype.emit = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || C.call(this);
      var m = arguments[0], x, S = this.wildcard, P, N, k, K, J;
      if (m === "newListener" && !this._newListener && !this._events.newListener)
        return !1;
      if (S && (x = m, m !== "newListener" && m !== "removeListener" && typeof m == "object")) {
        if (N = m.length, h) {
          for (k = 0; k < N; k++)
            if (typeof m[k] == "symbol") {
              J = !0;
              break;
            }
        }
        J || (m = m.join(this.delimiter));
      }
      var V = arguments.length, X;
      if (this._all && this._all.length)
        for (X = this._all.slice(), k = 0, N = X.length; k < N; k++)
          switch (this.event = m, V) {
            case 1:
              X[k].call(this, m);
              break;
            case 2:
              X[k].call(this, m, arguments[1]);
              break;
            case 3:
              X[k].call(this, m, arguments[1], arguments[2]);
              break;
            default:
              X[k].apply(this, arguments);
          }
      if (S)
        X = [], fe.call(this, X, x, this.listenerTree, 0, N);
      else if (X = this._events[m], typeof X == "function") {
        switch (this.event = m, V) {
          case 1:
            X.call(this);
            break;
          case 2:
            X.call(this, arguments[1]);
            break;
          case 3:
            X.call(this, arguments[1], arguments[2]);
            break;
          default:
            for (P = new Array(V - 1), K = 1; K < V; K++)
              P[K - 1] = arguments[K];
            X.apply(this, P);
        }
        return !0;
      } else
        X && (X = X.slice());
      if (X && X.length) {
        if (V > 3)
          for (P = new Array(V - 1), K = 1; K < V; K++)
            P[K - 1] = arguments[K];
        for (k = 0, N = X.length; k < N; k++)
          switch (this.event = m, V) {
            case 1:
              X[k].call(this);
              break;
            case 2:
              X[k].call(this, arguments[1]);
              break;
            case 3:
              X[k].call(this, arguments[1], arguments[2]);
              break;
            default:
              X[k].apply(this, P);
          }
        return !0;
      } else if (!this.ignoreErrors && !this._all && m === "error")
        throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all;
    }, he.prototype.emitAsync = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || C.call(this);
      var m = arguments[0], x = this.wildcard, S, P, N, k, K, J;
      if (m === "newListener" && !this._newListener && !this._events.newListener)
        return Promise.resolve([!1]);
      if (x && (S = m, m !== "newListener" && m !== "removeListener" && typeof m == "object")) {
        if (k = m.length, h) {
          for (K = 0; K < k; K++)
            if (typeof m[K] == "symbol") {
              P = !0;
              break;
            }
        }
        P || (m = m.join(this.delimiter));
      }
      var V = [], X = arguments.length, se;
      if (this._all)
        for (K = 0, k = this._all.length; K < k; K++)
          switch (this.event = m, X) {
            case 1:
              V.push(this._all[K].call(this, m));
              break;
            case 2:
              V.push(this._all[K].call(this, m, arguments[1]));
              break;
            case 3:
              V.push(this._all[K].call(this, m, arguments[1], arguments[2]));
              break;
            default:
              V.push(this._all[K].apply(this, arguments));
          }
      if (x ? (se = [], fe.call(this, se, S, this.listenerTree, 0)) : se = this._events[m], typeof se == "function")
        switch (this.event = m, X) {
          case 1:
            V.push(se.call(this));
            break;
          case 2:
            V.push(se.call(this, arguments[1]));
            break;
          case 3:
            V.push(se.call(this, arguments[1], arguments[2]));
            break;
          default:
            for (N = new Array(X - 1), J = 1; J < X; J++)
              N[J - 1] = arguments[J];
            V.push(se.apply(this, N));
        }
      else if (se && se.length) {
        if (se = se.slice(), X > 3)
          for (N = new Array(X - 1), J = 1; J < X; J++)
            N[J - 1] = arguments[J];
        for (K = 0, k = se.length; K < k; K++)
          switch (this.event = m, X) {
            case 1:
              V.push(se[K].call(this));
              break;
            case 2:
              V.push(se[K].call(this, arguments[1]));
              break;
            case 3:
              V.push(se[K].call(this, arguments[1], arguments[2]));
              break;
            default:
              V.push(se[K].apply(this, N));
          }
      } else if (!this.ignoreErrors && !this._all && m === "error")
        return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
      return Promise.all(V);
    }, he.prototype.on = function(m, x, S) {
      return this._on(m, x, !1, S);
    }, he.prototype.prependListener = function(m, x, S) {
      return this._on(m, x, !0, S);
    }, he.prototype.onAny = function(m) {
      return this._onAny(m, !1);
    }, he.prototype.prependAny = function(m) {
      return this._onAny(m, !0);
    }, he.prototype.addListener = he.prototype.on, he.prototype._onAny = function(m, x) {
      if (typeof m != "function")
        throw new Error("onAny only accepts instances of Function");
      return this._all || (this._all = []), x ? this._all.unshift(m) : this._all.push(m), this;
    }, he.prototype._on = function(m, x, S, P) {
      if (typeof m == "function")
        return this._onAny(m, x), this;
      if (typeof x != "function")
        throw new Error("on only accepts instances of Function");
      this._events || C.call(this);
      var N = this, k;
      return P !== i && (k = je.call(this, m, x, P), x = k[0], N = k[1]), this._newListener && this.emit("newListener", m, x), this.wildcard ? (Fe.call(this, m, x, S), N) : (this._events[m] ? (typeof this._events[m] == "function" && (this._events[m] = [this._events[m]]), S ? this._events[m].unshift(x) : this._events[m].push(x), !this._events[m].warned && this._maxListeners > 0 && this._events[m].length > this._maxListeners && (this._events[m].warned = !0, w.call(this, this._events[m].length, m))) : this._events[m] = x, N);
    }, he.prototype.off = function(m, x) {
      if (typeof x != "function")
        throw new Error("removeListener only takes instances of Function");
      var S, P = [];
      if (this.wildcard) {
        var N = typeof m == "string" ? m.split(this.delimiter) : m.slice();
        if (P = fe.call(this, null, N, this.listenerTree, 0), !P)
          return this;
      } else {
        if (!this._events[m])
          return this;
        S = this._events[m], P.push({ _listeners: S });
      }
      for (var k = 0; k < P.length; k++) {
        var K = P[k];
        if (S = K._listeners, s(S)) {
          for (var J = -1, V = 0, X = S.length; V < X; V++)
            if (S[V] === x || S[V].listener && S[V].listener === x || S[V]._origin && S[V]._origin === x) {
              J = V;
              break;
            }
          if (J < 0)
            continue;
          return this.wildcard ? K._listeners.splice(J, 1) : this._events[m].splice(J, 1), S.length === 0 && (this.wildcard ? delete K._listeners : delete this._events[m]), this._removeListener && this.emit("removeListener", m, x), this;
        } else
          (S === x || S.listener && S.listener === x || S._origin && S._origin === x) && (this.wildcard ? delete K._listeners : delete this._events[m], this._removeListener && this.emit("removeListener", m, x));
      }
      return this.listenerTree && Be(this.listenerTree), this;
    }, he.prototype.offAny = function(m) {
      var x = 0, S = 0, P;
      if (m && this._all && this._all.length > 0) {
        for (P = this._all, x = 0, S = P.length; x < S; x++)
          if (m === P[x])
            return P.splice(x, 1), this._removeListener && this.emit("removeListenerAny", m), this;
      } else {
        if (P = this._all, this._removeListener)
          for (x = 0, S = P.length; x < S; x++)
            this.emit("removeListenerAny", P[x]);
        this._all = [];
      }
      return this;
    }, he.prototype.removeListener = he.prototype.off, he.prototype.removeAllListeners = function(m) {
      if (m === i)
        return !this._events || C.call(this), this;
      if (this.wildcard) {
        var x = fe.call(this, null, m, this.listenerTree, 0), S, P;
        if (!x)
          return this;
        for (P = 0; P < x.length; P++)
          S = x[P], S._listeners = null;
        this.listenerTree && Be(this.listenerTree);
      } else
        this._events && (this._events[m] = null);
      return this;
    }, he.prototype.listeners = function(m) {
      var x = this._events, S, P, N, k, K;
      if (m === i) {
        if (this.wildcard)
          throw Error("event name required for wildcard emitter");
        if (!x)
          return [];
        for (S = v(x), k = S.length, N = []; k-- > 0; )
          P = x[S[k]], typeof P == "function" ? N.push(P) : N.push.apply(N, P);
        return N;
      } else {
        if (this.wildcard) {
          if (K = this.listenerTree, !K)
            return [];
          var J = [], V = typeof m == "string" ? m.split(this.delimiter) : m.slice();
          return fe.call(this, J, V, K, 0), J;
        }
        return x ? (P = x[m], P ? typeof P == "function" ? [P] : P : []) : [];
      }
    }, he.prototype.eventNames = function(m) {
      var x = this._events;
      return this.wildcard ? Re.call(this, this.listenerTree, [], null, m) : x ? v(x) : [];
    }, he.prototype.listenerCount = function(m) {
      return this.listeners(m).length;
    }, he.prototype.hasListeners = function(m) {
      if (this.wildcard) {
        var x = [], S = typeof m == "string" ? m.split(this.delimiter) : m.slice();
        return fe.call(this, x, S, this.listenerTree, 0), x.length > 0;
      }
      var P = this._events, N = this._all;
      return !!(N && N.length || P && (m === i ? v(P).length : P[m]));
    }, he.prototype.listenersAny = function() {
      return this._all ? this._all : [];
    }, he.prototype.waitFor = function(m, x) {
      var S = this, P = typeof x;
      return P === "number" ? x = { timeout: x } : P === "function" && (x = { filter: x }), x = B(x, {
        timeout: 0,
        filter: i,
        handleError: !1,
        Promise,
        overload: !1
      }, {
        filter: ee,
        Promise: M
      }), de(x.Promise, function(N, k, K) {
        function J() {
          var V = x.filter;
          if (!(V && !V.apply(S, arguments)))
            if (S.off(m, J), x.handleError) {
              var X = arguments[0];
              X ? k(X) : N(E.apply(null, arguments).slice(1));
            } else
              N(E.apply(null, arguments));
        }
        K(function() {
          S.off(m, J);
        }), S._on(m, J, !1);
      }, {
        timeout: x.timeout,
        overload: x.overload
      });
    };
    function Ce(m, x, S) {
      S = B(S, {
        Promise,
        timeout: 0,
        overload: !1
      }, {
        Promise: M
      });
      var P = S.Promise;
      return de(P, function(N, k, K) {
        var J;
        if (typeof m.addEventListener == "function") {
          J = function() {
            N(E.apply(null, arguments));
          }, K(function() {
            m.removeEventListener(x, J);
          }), m.addEventListener(
            x,
            J,
            { once: !0 }
          );
          return;
        }
        var V = function() {
          X && m.removeListener("error", X), N(E.apply(null, arguments));
        }, X;
        x !== "error" && (X = function(se) {
          m.removeListener(x, V), k(se);
        }, m.once("error", X)), K(function() {
          X && m.removeListener("error", X), m.removeListener(x, V);
        }), m.once(x, V);
      }, {
        timeout: S.timeout,
        overload: S.overload
      });
    }
    var qe = he.prototype;
    Object.defineProperties(he, {
      defaultMaxListeners: {
        get: function() {
          return qe._maxListeners;
        },
        set: function(m) {
          if (typeof m != "number" || m < 0 || Number.isNaN(m))
            throw TypeError("n must be a non-negative number");
          qe._maxListeners = m;
        },
        enumerable: !0
      },
      once: {
        value: Ce,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperties(qe, {
      _maxListeners: {
        value: l,
        writable: !0,
        configurable: !0
      },
      _observers: { value: null, writable: !0, configurable: !0 }
    }), typeof i == "function" && i.amd ? i(function() {
      return he;
    }) : t.exports = he;
  })();
})(Pd);
var E1 = Pd.exports;
const x1 = /* @__PURE__ */ Ol(E1);
var Xu = {}, xh = $i;
Xu.createRoot = xh.createRoot, Xu.hydrateRoot = xh.hydrateRoot;
function Nd(t) {
  var n, i, a = "";
  if (typeof t == "string" || typeof t == "number")
    a += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (n = 0; n < t.length; n++)
        t[n] && (i = Nd(t[n])) && (a && (a += " "), a += i);
    else
      for (n in t)
        t[n] && (a && (a += " "), a += n);
  return a;
}
function Fr() {
  for (var t, n, i = 0, a = ""; i < arguments.length; )
    (t = arguments[i++]) && (n = Nd(t)) && (a && (a += " "), a += n);
  return a;
}
const ma = (t) => typeof t == "number" && !isNaN(t), ai = (t) => typeof t == "string", on = (t) => typeof t == "function", Io = (t) => ai(t) || on(t) ? t : null, Pu = (t) => G.isValidElement(t) || ai(t) || on(t) || ma(t);
function O1(t, n, i) {
  i === void 0 && (i = 300);
  const { scrollHeight: a, style: s } = t;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = a + "px", s.transition = `all ${i}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(n, i);
    });
  });
}
function ts(t) {
  let { enter: n, exit: i, appendPosition: a = !1, collapse: s = !0, collapseDuration: l = 300 } = t;
  return function(c) {
    let { children: h, position: g, preventExitTransition: y, done: b, nodeRef: v, isIn: C } = c;
    const _ = a ? `${n}--${g}` : n, w = a ? `${i}--${g}` : i, E = G.useRef(0);
    return G.useLayoutEffect(() => {
      const O = v.current, D = _.split(" "), B = (M) => {
        M.target === v.current && (O.dispatchEvent(new Event("d")), O.removeEventListener("animationend", B), O.removeEventListener("animationcancel", B), E.current === 0 && M.type !== "animationcancel" && O.classList.remove(...D));
      };
      O.classList.add(...D), O.addEventListener("animationend", B), O.addEventListener("animationcancel", B);
    }, []), G.useEffect(() => {
      const O = v.current, D = () => {
        O.removeEventListener("animationend", D), s ? O1(O, b, l) : b();
      };
      C || (y ? D() : (E.current = 1, O.className += ` ${w}`, O.addEventListener("animationend", D)));
    }, [C]), te.createElement(te.Fragment, null, h);
  };
}
function Oh(t, n) {
  return t != null ? { content: t.content, containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, status: n } : {};
}
const Rn = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(t, n) {
  return this.list.has(t) || this.list.set(t, []), this.list.get(t).push(n), this;
}, off(t, n) {
  if (n) {
    const i = this.list.get(t).filter((a) => a !== n);
    return this.list.set(t, i), this;
  }
  return this.list.delete(t), this;
}, cancelEmit(t) {
  const n = this.emitQueue.get(t);
  return n && (n.forEach(clearTimeout), this.emitQueue.delete(t)), this;
}, emit(t) {
  this.list.has(t) && this.list.get(t).forEach((n) => {
    const i = setTimeout(() => {
      n(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(t) || this.emitQueue.set(t, []), this.emitQueue.get(t).push(i);
  });
} }, Do = (t) => {
  let { theme: n, type: i, ...a } = t;
  return te.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: n === "colored" ? "currentColor" : `var(--toastify-icon-color-${i})`, ...a });
}, Nu = { info: function(t) {
  return te.createElement(Do, { ...t }, te.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t) {
  return te.createElement(Do, { ...t }, te.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t) {
  return te.createElement(Do, { ...t }, te.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t) {
  return te.createElement(Do, { ...t }, te.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return te.createElement("div", { className: "Toastify__spinner" });
} };
function C1(t) {
  const [, n] = G.useReducer((_) => _ + 1, 0), [i, a] = G.useState([]), s = G.useRef(null), l = G.useRef(/* @__PURE__ */ new Map()).current, c = (_) => i.indexOf(_) !== -1, h = G.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t, containerId: null, isToastActive: c, getToast: (_) => l.get(_) }).current;
  function g(_) {
    let { containerId: w } = _;
    const { limit: E } = h.props;
    !E || w && h.containerId !== w || (h.count -= h.queue.length, h.queue = []);
  }
  function y(_) {
    a((w) => _ == null ? [] : w.filter((E) => E !== _));
  }
  function b() {
    const { toastContent: _, toastProps: w, staleId: E } = h.queue.shift();
    C(_, w, E);
  }
  function v(_, w) {
    let { delay: E, staleId: O, ...D } = w;
    if (!Pu(_) || function(Be) {
      return !s.current || h.props.enableMultiContainer && Be.containerId !== h.props.containerId || l.has(Be.toastId) && Be.updateId == null;
    }(D))
      return;
    const { toastId: B, updateId: M, data: U } = D, { props: ee } = h, oe = () => y(B), de = M == null;
    de && h.count++;
    const ie = { ...ee, style: ee.toastStyle, key: h.toastKey++, ...Object.fromEntries(Object.entries(D).filter((Be) => {
      let [Qe, je] = Be;
      return je != null;
    })), toastId: B, updateId: M, data: U, closeToast: oe, isIn: !1, className: Io(D.className || ee.toastClassName), bodyClassName: Io(D.bodyClassName || ee.bodyClassName), progressClassName: Io(D.progressClassName || ee.progressClassName), autoClose: !D.isLoading && (fe = D.autoClose, Fe = ee.autoClose, fe === !1 || ma(fe) && fe > 0 ? fe : Fe), deleteToast() {
      const Be = Oh(l.get(B), "removed");
      l.delete(B), Rn.emit(4, Be);
      const Qe = h.queue.length;
      if (h.count = B == null ? h.count - h.displayedToast : h.count - 1, h.count < 0 && (h.count = 0), Qe > 0) {
        const je = B == null ? h.props.limit : 1;
        if (Qe === 1 || je === 1)
          h.displayedToast++, b();
        else {
          const he = je > Qe ? Qe : je;
          h.displayedToast = he;
          for (let Ce = 0; Ce < he; Ce++)
            b();
        }
      } else
        n();
    } };
    var fe, Fe;
    ie.iconOut = function(Be) {
      let { theme: Qe, type: je, isLoading: he, icon: Ce } = Be, qe = null;
      const m = { theme: Qe, type: je };
      return Ce === !1 || (on(Ce) ? qe = Ce(m) : G.isValidElement(Ce) ? qe = G.cloneElement(Ce, m) : ai(Ce) || ma(Ce) ? qe = Ce : he ? qe = Nu.spinner() : ((x) => x in Nu)(je) && (qe = Nu[je](m))), qe;
    }(ie), on(D.onOpen) && (ie.onOpen = D.onOpen), on(D.onClose) && (ie.onClose = D.onClose), ie.closeButton = ee.closeButton, D.closeButton === !1 || Pu(D.closeButton) ? ie.closeButton = D.closeButton : D.closeButton === !0 && (ie.closeButton = !Pu(ee.closeButton) || ee.closeButton);
    let Re = _;
    G.isValidElement(_) && !ai(_.type) ? Re = G.cloneElement(_, { closeToast: oe, toastProps: ie, data: U }) : on(_) && (Re = _({ closeToast: oe, toastProps: ie, data: U })), ee.limit && ee.limit > 0 && h.count > ee.limit && de ? h.queue.push({ toastContent: Re, toastProps: ie, staleId: O }) : ma(E) ? setTimeout(() => {
      C(Re, ie, O);
    }, E) : C(Re, ie, O);
  }
  function C(_, w, E) {
    const { toastId: O } = w;
    E && l.delete(E);
    const D = { content: _, props: w };
    l.set(O, D), a((B) => [...B, O].filter((M) => M !== E)), Rn.emit(4, Oh(D, D.props.updateId == null ? "added" : "updated"));
  }
  return G.useEffect(() => (h.containerId = t.containerId, Rn.cancelEmit(3).on(0, v).on(1, (_) => s.current && y(_)).on(5, g).emit(2, h), () => {
    l.clear(), Rn.emit(3, h);
  }), []), G.useEffect(() => {
    h.props = t, h.isToastActive = c, h.displayedToast = i.length;
  }), { getToastToRender: function(_) {
    const w = /* @__PURE__ */ new Map(), E = Array.from(l.values());
    return t.newestOnTop && E.reverse(), E.forEach((O) => {
      const { position: D } = O.props;
      w.has(D) || w.set(D, []), w.get(D).push(O);
    }), Array.from(w, (O) => _(O[0], O[1]));
  }, containerRef: s, isToastActive: c };
}
function Ch(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
}
function Th(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
}
function T1(t) {
  const [n, i] = G.useState(!1), [a, s] = G.useState(!1), l = G.useRef(null), c = G.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, h = G.useRef(t), { autoClose: g, pauseOnHover: y, closeToast: b, onClick: v, closeOnClick: C } = t;
  function _(U) {
    if (t.draggable) {
      U.nativeEvent.type === "touchstart" && U.nativeEvent.preventDefault(), c.didMove = !1, document.addEventListener("mousemove", D), document.addEventListener("mouseup", B), document.addEventListener("touchmove", D), document.addEventListener("touchend", B);
      const ee = l.current;
      c.canCloseOnClick = !0, c.canDrag = !0, c.boundingRect = ee.getBoundingClientRect(), ee.style.transition = "", c.x = Ch(U.nativeEvent), c.y = Th(U.nativeEvent), t.draggableDirection === "x" ? (c.start = c.x, c.removalDistance = ee.offsetWidth * (t.draggablePercent / 100)) : (c.start = c.y, c.removalDistance = ee.offsetHeight * (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent / 100));
    }
  }
  function w(U) {
    if (c.boundingRect) {
      const { top: ee, bottom: oe, left: de, right: ie } = c.boundingRect;
      U.nativeEvent.type !== "touchend" && t.pauseOnHover && c.x >= de && c.x <= ie && c.y >= ee && c.y <= oe ? O() : E();
    }
  }
  function E() {
    i(!0);
  }
  function O() {
    i(!1);
  }
  function D(U) {
    const ee = l.current;
    c.canDrag && ee && (c.didMove = !0, n && O(), c.x = Ch(U), c.y = Th(U), c.delta = t.draggableDirection === "x" ? c.x - c.start : c.y - c.start, c.start !== c.x && (c.canCloseOnClick = !1), ee.style.transform = `translate${t.draggableDirection}(${c.delta}px)`, ee.style.opacity = "" + (1 - Math.abs(c.delta / c.removalDistance)));
  }
  function B() {
    document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", B), document.removeEventListener("touchmove", D), document.removeEventListener("touchend", B);
    const U = l.current;
    if (c.canDrag && c.didMove && U) {
      if (c.canDrag = !1, Math.abs(c.delta) > c.removalDistance)
        return s(!0), void t.closeToast();
      U.style.transition = "transform 0.2s, opacity 0.2s", U.style.transform = `translate${t.draggableDirection}(0)`, U.style.opacity = "1";
    }
  }
  G.useEffect(() => {
    h.current = t;
  }), G.useEffect(() => (l.current && l.current.addEventListener("d", E, { once: !0 }), on(t.onOpen) && t.onOpen(G.isValidElement(t.children) && t.children.props), () => {
    const U = h.current;
    on(U.onClose) && U.onClose(G.isValidElement(U.children) && U.children.props);
  }), []), G.useEffect(() => (t.pauseOnFocusLoss && (document.hasFocus() || O(), window.addEventListener("focus", E), window.addEventListener("blur", O)), () => {
    t.pauseOnFocusLoss && (window.removeEventListener("focus", E), window.removeEventListener("blur", O));
  }), [t.pauseOnFocusLoss]);
  const M = { onMouseDown: _, onTouchStart: _, onMouseUp: w, onTouchEnd: w };
  return g && y && (M.onMouseEnter = O, M.onMouseLeave = E), C && (M.onClick = (U) => {
    v && v(U), c.canCloseOnClick && b();
  }), { playToast: E, pauseToast: O, isRunning: n, preventExitTransition: a, toastRef: l, eventHandlers: M };
}
function Id(t) {
  let { closeToast: n, theme: i, ariaLabel: a = "close" } = t;
  return te.createElement("button", { className: `Toastify__close-button Toastify__close-button--${i}`, type: "button", onClick: (s) => {
    s.stopPropagation(), n(s);
  }, "aria-label": a }, te.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, te.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function S1(t) {
  let { delay: n, isRunning: i, closeToast: a, type: s = "default", hide: l, className: c, style: h, controlledProgress: g, progress: y, rtl: b, isIn: v, theme: C } = t;
  const _ = l || g && y === 0, w = { ...h, animationDuration: `${n}ms`, animationPlayState: i ? "running" : "paused", opacity: _ ? 0 : 1 };
  g && (w.transform = `scaleX(${y})`);
  const E = Fr("Toastify__progress-bar", g ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${C}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": b }), O = on(c) ? c({ rtl: b, type: s, defaultClassName: E }) : Fr(E, c);
  return te.createElement("div", { role: "progressbar", "aria-hidden": _ ? "true" : "false", "aria-label": "notification timer", className: O, style: w, [g && y >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: g && y < 1 ? null : () => {
    v && a();
  } });
}
const D1 = (t) => {
  const { isRunning: n, preventExitTransition: i, toastRef: a, eventHandlers: s } = T1(t), { closeButton: l, children: c, autoClose: h, onClick: g, type: y, hideProgressBar: b, closeToast: v, transition: C, position: _, className: w, style: E, bodyClassName: O, bodyStyle: D, progressClassName: B, progressStyle: M, updateId: U, role: ee, progress: oe, rtl: de, toastId: ie, deleteToast: fe, isIn: Fe, isLoading: Re, iconOut: Be, closeOnClick: Qe, theme: je } = t, he = Fr("Toastify__toast", `Toastify__toast-theme--${je}`, `Toastify__toast--${y}`, { "Toastify__toast--rtl": de }, { "Toastify__toast--close-on-click": Qe }), Ce = on(w) ? w({ rtl: de, position: _, type: y, defaultClassName: he }) : Fr(he, w), qe = !!oe || !h, m = { closeToast: v, type: y, theme: je };
  let x = null;
  return l === !1 || (x = on(l) ? l(m) : G.isValidElement(l) ? G.cloneElement(l, m) : Id(m)), te.createElement(C, { isIn: Fe, done: fe, position: _, preventExitTransition: i, nodeRef: a }, te.createElement("div", { id: ie, onClick: g, className: Ce, ...s, style: E, ref: a }, te.createElement("div", { ...Fe && { role: ee }, className: on(O) ? O({ type: y }) : Fr("Toastify__toast-body", O), style: D }, Be != null && te.createElement("div", { className: Fr("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !Re }) }, Be), te.createElement("div", null, c)), x, te.createElement(S1, { ...U && !qe ? { key: `pb-${U}` } : {}, rtl: de, theme: je, delay: h, isRunning: n, isIn: Fe, closeToast: v, hide: b, type: y, style: M, className: B, controlledProgress: qe, progress: oe || 0 })));
}, ns = function(t, n) {
  return n === void 0 && (n = !1), { enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: n };
}, R1 = ts(ns("bounce", !0));
ts(ns("slide", !0));
ts(ns("zoom"));
ts(ns("flip"));
const Ju = G.forwardRef((t, n) => {
  const { getToastToRender: i, containerRef: a, isToastActive: s } = C1(t), { className: l, style: c, rtl: h, containerId: g } = t;
  function y(b) {
    const v = Fr("Toastify__toast-container", `Toastify__toast-container--${b}`, { "Toastify__toast-container--rtl": h });
    return on(l) ? l({ position: b, rtl: h, defaultClassName: v }) : Fr(v, Io(l));
  }
  return G.useEffect(() => {
    n && (n.current = a.current);
  }, []), te.createElement("div", { ref: a, className: "Toastify", id: g }, i((b, v) => {
    const C = v.length ? { ...c } : { ...c, pointerEvents: "none" };
    return te.createElement("div", { className: y(b), style: C, key: `container-${b}` }, v.map((_, w) => {
      let { content: E, props: O } = _;
      return te.createElement(D1, { ...O, isIn: s(O.toastId), style: { ...O.style, "--nth": w + 1, "--len": v.length }, key: `toast-${O.key}` }, E);
    }));
  }));
});
Ju.displayName = "ToastContainer", Ju.defaultProps = { position: "top-right", transition: R1, autoClose: 5e3, closeButton: Id, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let Iu, Xr = /* @__PURE__ */ new Map(), pa = [], L1 = 1;
function Md() {
  return "" + L1++;
}
function P1(t) {
  return t && (ai(t.toastId) || ma(t.toastId)) ? t.toastId : Md();
}
function ga(t, n) {
  return Xr.size > 0 ? Rn.emit(0, t, n) : pa.push({ content: t, options: n }), n.toastId;
}
function Uo(t, n) {
  return { ...n, type: n && n.type || t, toastId: P1(n) };
}
function Ro(t) {
  return (n, i) => ga(n, Uo(t, i));
}
function ht(t, n) {
  return ga(t, Uo("default", n));
}
ht.loading = (t, n) => ga(t, Uo("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...n })), ht.promise = function(t, n, i) {
  let a, { pending: s, error: l, success: c } = n;
  s && (a = ai(s) ? ht.loading(s, i) : ht.loading(s.render, { ...i, ...s }));
  const h = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, g = (b, v, C) => {
    if (v == null)
      return void ht.dismiss(a);
    const _ = { type: b, ...h, ...i, data: C }, w = ai(v) ? { render: v } : v;
    return a ? ht.update(a, { ..._, ...w }) : ht(w.render, { ..._, ...w }), C;
  }, y = on(t) ? t() : t;
  return y.then((b) => g("success", c, b)).catch((b) => g("error", l, b)), y;
}, ht.success = Ro("success"), ht.info = Ro("info"), ht.error = Ro("error"), ht.warning = Ro("warning"), ht.warn = ht.warning, ht.dark = (t, n) => ga(t, Uo("default", { theme: "dark", ...n })), ht.dismiss = (t) => {
  Xr.size > 0 ? Rn.emit(1, t) : pa = pa.filter((n) => t != null && n.options.toastId !== t);
}, ht.clearWaitingQueue = function(t) {
  return t === void 0 && (t = {}), Rn.emit(5, t);
}, ht.isActive = (t) => {
  let n = !1;
  return Xr.forEach((i) => {
    i.isToastActive && i.isToastActive(t) && (n = !0);
  }), n;
}, ht.update = function(t, n) {
  n === void 0 && (n = {}), setTimeout(() => {
    const i = function(a, s) {
      let { containerId: l } = s;
      const c = Xr.get(l || Iu);
      return c && c.getToast(a);
    }(t, n);
    if (i) {
      const { props: a, content: s } = i, l = { delay: 100, ...a, ...n, toastId: n.toastId || t, updateId: Md() };
      l.toastId !== t && (l.staleId = t);
      const c = l.render || s;
      delete l.render, ga(c, l);
    }
  }, 0);
}, ht.done = (t) => {
  ht.update(t, { progress: 1 });
}, ht.onChange = (t) => (Rn.on(4, t), () => {
  Rn.off(4, t);
}), ht.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, ht.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, Rn.on(2, (t) => {
  Iu = t.containerId || t, Xr.set(Iu, t), pa.forEach((n) => {
    Rn.emit(0, n.content, n.options);
  }), pa = [];
}).on(3, (t) => {
  Xr.delete(t.containerId || t), Xr.size === 0 && Rn.off(0).off(1).off(5);
});
const N1 = () => /* @__PURE__ */ et(Sd, { styles: El`*, ::before, ::after {
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
}` }), I1 = () => /* @__PURE__ */ es(w1, { children: [
  /* @__PURE__ */ et(N1, {}),
  /* @__PURE__ */ et(Ju, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
var rs = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, is = typeof window > "u" || "Deno" in window;
function Bn() {
}
function M1(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function k1(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function F1(t, n) {
  return Math.max(t + (n || 0) - Date.now(), 0);
}
function Sh(t, n) {
  const {
    type: i = "all",
    exact: a,
    fetchStatus: s,
    predicate: l,
    queryKey: c,
    stale: h
  } = t;
  if (c) {
    if (a) {
      if (n.queryHash !== Cl(c, n.options))
        return !1;
    } else if (!wa(n.queryKey, c))
      return !1;
  }
  if (i !== "all") {
    const g = n.isActive();
    if (i === "active" && !g || i === "inactive" && g)
      return !1;
  }
  return !(typeof h == "boolean" && n.isStale() !== h || typeof s < "u" && s !== n.state.fetchStatus || l && !l(n));
}
function Dh(t, n) {
  const { exact: i, status: a, predicate: s, mutationKey: l } = t;
  if (l) {
    if (!n.options.mutationKey)
      return !1;
    if (i) {
      if (ba(n.options.mutationKey) !== ba(l))
        return !1;
    } else if (!wa(n.options.mutationKey, l))
      return !1;
  }
  return !(a && n.state.status !== a || s && !s(n));
}
function Cl(t, n) {
  return ((n == null ? void 0 : n.queryKeyHashFn) || ba)(t);
}
function ba(t) {
  return JSON.stringify(
    t,
    (n, i) => Zu(i) ? Object.keys(i).sort().reduce((a, s) => (a[s] = i[s], a), {}) : i
  );
}
function wa(t, n) {
  return t === n ? !0 : typeof t != typeof n ? !1 : t && n && typeof t == "object" && typeof n == "object" ? !Object.keys(n).some((i) => !wa(t[i], n[i])) : !1;
}
function kd(t, n) {
  if (t === n)
    return t;
  const i = Rh(t) && Rh(n);
  if (i || Zu(t) && Zu(n)) {
    const a = i ? t : Object.keys(t), s = a.length, l = i ? n : Object.keys(n), c = l.length, h = i ? [] : {};
    let g = 0;
    for (let y = 0; y < c; y++) {
      const b = i ? y : l[y];
      !i && t[b] === void 0 && n[b] === void 0 && a.includes(b) ? (h[b] = void 0, g++) : (h[b] = kd(t[b], n[b]), h[b] === t[b] && t[b] !== void 0 && g++);
    }
    return s === c && g === s ? t : h;
  }
  return n;
}
function JO(t, n) {
  if (!n || Object.keys(t).length !== Object.keys(n).length)
    return !1;
  for (const i in t)
    if (t[i] !== n[i])
      return !1;
  return !0;
}
function Rh(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Zu(t) {
  if (!Lh(t))
    return !1;
  const n = t.constructor;
  if (typeof n > "u")
    return !0;
  const i = n.prototype;
  return !(!Lh(i) || !i.hasOwnProperty("isPrototypeOf"));
}
function Lh(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function B1(t) {
  return new Promise((n) => {
    setTimeout(n, t);
  });
}
function W1(t, n, i) {
  return typeof i.structuralSharing == "function" ? i.structuralSharing(t, n) : i.structuralSharing !== !1 ? kd(t, n) : n;
}
function ZO(t) {
  return t;
}
function U1(t, n, i = 0) {
  const a = [...t, n];
  return i && a.length > i ? a.slice(1) : a;
}
function z1(t, n, i = 0) {
  const a = [n, ...t];
  return i && a.length > i ? a.slice(0, -1) : a;
}
var ei, Lr, Ni, gd, H1 = (gd = class extends rs {
  constructor() {
    super();
    ze(this, ei, void 0);
    ze(this, Lr, void 0);
    ze(this, Ni, void 0);
    ye(this, Ni, (n) => {
      if (!is && window.addEventListener) {
        const i = () => n();
        return window.addEventListener("visibilitychange", i, !1), () => {
          window.removeEventListener("visibilitychange", i);
        };
      }
    });
  }
  onSubscribe() {
    z(this, Lr) || this.setEventListener(z(this, Ni));
  }
  onUnsubscribe() {
    var n;
    this.hasListeners() || ((n = z(this, Lr)) == null || n.call(this), ye(this, Lr, void 0));
  }
  setEventListener(n) {
    var i;
    ye(this, Ni, n), (i = z(this, Lr)) == null || i.call(this), ye(this, Lr, n((a) => {
      typeof a == "boolean" ? this.setFocused(a) : this.onFocus();
    }));
  }
  setFocused(n) {
    z(this, ei) !== n && (ye(this, ei, n), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((n) => {
      n();
    });
  }
  isFocused() {
    var n;
    return typeof z(this, ei) == "boolean" ? z(this, ei) : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !== "hidden";
  }
}, ei = new WeakMap(), Lr = new WeakMap(), Ni = new WeakMap(), gd), el = new H1(), Ii, Pr, Mi, yd, j1 = (yd = class extends rs {
  constructor() {
    super();
    ze(this, Ii, !0);
    ze(this, Pr, void 0);
    ze(this, Mi, void 0);
    ye(this, Mi, (n) => {
      if (!is && window.addEventListener) {
        const i = () => n(!0), a = () => n(!1);
        return window.addEventListener("online", i, !1), window.addEventListener("offline", a, !1), () => {
          window.removeEventListener("online", i), window.removeEventListener("offline", a);
        };
      }
    });
  }
  onSubscribe() {
    z(this, Pr) || this.setEventListener(z(this, Mi));
  }
  onUnsubscribe() {
    var n;
    this.hasListeners() || ((n = z(this, Pr)) == null || n.call(this), ye(this, Pr, void 0));
  }
  setEventListener(n) {
    var i;
    ye(this, Mi, n), (i = z(this, Pr)) == null || i.call(this), ye(this, Pr, n(this.setOnline.bind(this)));
  }
  setOnline(n) {
    z(this, Ii) !== n && (ye(this, Ii, n), this.listeners.forEach((a) => {
      a(n);
    }));
  }
  isOnline() {
    return z(this, Ii);
  }
}, Ii = new WeakMap(), Pr = new WeakMap(), Mi = new WeakMap(), yd), zo = new j1();
function $1(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Tl(t) {
  return (t ?? "online") === "online" ? zo.isOnline() : !0;
}
var Fd = class {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Mu(t) {
  return t instanceof Fd;
}
function Bd(t) {
  let n = !1, i = 0, a = !1, s, l, c;
  const h = new Promise((O, D) => {
    l = O, c = D;
  }), g = (O) => {
    var D;
    a || (_(new Fd(O)), (D = t.abort) == null || D.call(t));
  }, y = () => {
    n = !0;
  }, b = () => {
    n = !1;
  }, v = () => !el.isFocused() || t.networkMode !== "always" && !zo.isOnline(), C = (O) => {
    var D;
    a || (a = !0, (D = t.onSuccess) == null || D.call(t, O), s == null || s(), l(O));
  }, _ = (O) => {
    var D;
    a || (a = !0, (D = t.onError) == null || D.call(t, O), s == null || s(), c(O));
  }, w = () => new Promise((O) => {
    var D;
    s = (B) => {
      const M = a || !v();
      return M && O(B), M;
    }, (D = t.onPause) == null || D.call(t);
  }).then(() => {
    var O;
    s = void 0, a || (O = t.onContinue) == null || O.call(t);
  }), E = () => {
    if (a)
      return;
    let O;
    try {
      O = t.fn();
    } catch (D) {
      O = Promise.reject(D);
    }
    Promise.resolve(O).then(C).catch((D) => {
      var oe;
      if (a)
        return;
      const B = t.retry ?? (is ? 0 : 3), M = t.retryDelay ?? $1, U = typeof M == "function" ? M(i, D) : M, ee = B === !0 || typeof B == "number" && i < B || typeof B == "function" && B(i, D);
      if (n || !ee) {
        _(D);
        return;
      }
      i++, (oe = t.onFail) == null || oe.call(t, i, D), B1(U).then(() => {
        if (v())
          return w();
      }).then(() => {
        n ? _(D) : E();
      });
    });
  };
  return Tl(t.networkMode) ? E() : w().then(E), {
    promise: h,
    cancel: g,
    continue: () => (s == null ? void 0 : s()) ? h : Promise.resolve(),
    cancelRetry: y,
    continueRetry: b
  };
}
function q1() {
  let t = [], n = 0, i = (C) => {
    C();
  }, a = (C) => {
    C();
  }, s = (C) => setTimeout(C, 0);
  const l = (C) => {
    s = C;
  }, c = (C) => {
    let _;
    n++;
    try {
      _ = C();
    } finally {
      n--, n || y();
    }
    return _;
  }, h = (C) => {
    n ? t.push(C) : s(() => {
      i(C);
    });
  }, g = (C) => (..._) => {
    h(() => {
      C(..._);
    });
  }, y = () => {
    const C = t;
    t = [], C.length && s(() => {
      a(() => {
        C.forEach((_) => {
          i(_);
        });
      });
    });
  };
  return {
    batch: c,
    batchCalls: g,
    schedule: h,
    setNotifyFunction: (C) => {
      i = C;
    },
    setBatchNotifyFunction: (C) => {
      a = C;
    },
    setScheduler: l
  };
}
var Kt = q1(), ti, bd, Wd = (bd = class {
  constructor() {
    ze(this, ti, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), k1(this.gcTime) && ye(this, ti, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (is ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    z(this, ti) && (clearTimeout(z(this, ti)), ye(this, ti, void 0));
  }
}, ti = new WeakMap(), bd), ki, Fi, Tn, Nr, Sn, Bt, La, ni, Bi, Mo, Wn, fr, wd, Y1 = (wd = class extends Wd {
  constructor(n) {
    super();
    ze(this, Bi);
    ze(this, Wn);
    ze(this, ki, void 0);
    ze(this, Fi, void 0);
    ze(this, Tn, void 0);
    ze(this, Nr, void 0);
    ze(this, Sn, void 0);
    ze(this, Bt, void 0);
    ze(this, La, void 0);
    ze(this, ni, void 0);
    ye(this, ni, !1), ye(this, La, n.defaultOptions), Lt(this, Bi, Mo).call(this, n.options), ye(this, Bt, []), ye(this, Tn, n.cache), this.queryKey = n.queryKey, this.queryHash = n.queryHash, ye(this, ki, n.state || G1(this.options)), this.state = z(this, ki), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !z(this, Bt).length && this.state.fetchStatus === "idle" && z(this, Tn).remove(this);
  }
  setData(n, i) {
    const a = W1(this.state.data, n, this.options);
    return Lt(this, Wn, fr).call(this, {
      data: a,
      type: "success",
      dataUpdatedAt: i == null ? void 0 : i.updatedAt,
      manual: i == null ? void 0 : i.manual
    }), a;
  }
  setState(n, i) {
    Lt(this, Wn, fr).call(this, { type: "setState", state: n, setStateOptions: i });
  }
  cancel(n) {
    var a;
    const i = z(this, Nr);
    return (a = z(this, Sn)) == null || a.cancel(n), i ? i.then(Bn).catch(Bn) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(z(this, ki));
  }
  isActive() {
    return z(this, Bt).some(
      (n) => n.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || z(this, Bt).some((n) => n.getCurrentResult().isStale);
  }
  isStaleByTime(n = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !F1(this.state.dataUpdatedAt, n);
  }
  onFocus() {
    var i;
    const n = z(this, Bt).find((a) => a.shouldFetchOnWindowFocus());
    n == null || n.refetch({ cancelRefetch: !1 }), (i = z(this, Sn)) == null || i.continue();
  }
  onOnline() {
    var i;
    const n = z(this, Bt).find((a) => a.shouldFetchOnReconnect());
    n == null || n.refetch({ cancelRefetch: !1 }), (i = z(this, Sn)) == null || i.continue();
  }
  addObserver(n) {
    z(this, Bt).includes(n) || (z(this, Bt).push(n), this.clearGcTimeout(), z(this, Tn).notify({ type: "observerAdded", query: this, observer: n }));
  }
  removeObserver(n) {
    z(this, Bt).includes(n) && (ye(this, Bt, z(this, Bt).filter((i) => i !== n)), z(this, Bt).length || (z(this, Sn) && (z(this, ni) ? z(this, Sn).cancel({ revert: !0 }) : z(this, Sn).cancelRetry()), this.scheduleGc()), z(this, Tn).notify({ type: "observerRemoved", query: this, observer: n }));
  }
  getObserversCount() {
    return z(this, Bt).length;
  }
  invalidate() {
    this.state.isInvalidated || Lt(this, Wn, fr).call(this, { type: "invalidate" });
  }
  fetch(n, i) {
    var y, b, v, C;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (i != null && i.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (z(this, Nr))
        return (y = z(this, Sn)) == null || y.continueRetry(), z(this, Nr);
    }
    if (n && Lt(this, Bi, Mo).call(this, n), !this.options.queryFn) {
      const _ = z(this, Bt).find((w) => w.options.queryFn);
      _ && Lt(this, Bi, Mo).call(this, _.options);
    }
    const a = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, l = (_) => {
      Object.defineProperty(_, "signal", {
        enumerable: !0,
        get: () => (ye(this, ni, !0), a.signal)
      });
    };
    l(s);
    const c = () => this.options.queryFn ? (ye(this, ni, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      s,
      this
    ) : this.options.queryFn(
      s
    )) : Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ), h = {
      fetchOptions: i,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: c
    };
    l(h), (b = this.options.behavior) == null || b.onFetch(
      h,
      this
    ), ye(this, Fi, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((v = h.fetchOptions) == null ? void 0 : v.meta)) && Lt(this, Wn, fr).call(this, { type: "fetch", meta: (C = h.fetchOptions) == null ? void 0 : C.meta });
    const g = (_) => {
      var w, E, O, D;
      Mu(_) && _.silent || Lt(this, Wn, fr).call(this, {
        type: "error",
        error: _
      }), Mu(_) || ((E = (w = z(this, Tn).config).onError) == null || E.call(
        w,
        _,
        this
      ), (D = (O = z(this, Tn).config).onSettled) == null || D.call(
        O,
        this.state.data,
        _,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return ye(this, Sn, Bd({
      fn: h.fetchFn,
      abort: a.abort.bind(a),
      onSuccess: (_) => {
        var w, E, O, D;
        if (typeof _ > "u") {
          g(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(_), (E = (w = z(this, Tn).config).onSuccess) == null || E.call(w, _, this), (D = (O = z(this, Tn).config).onSettled) == null || D.call(
          O,
          _,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: g,
      onFail: (_, w) => {
        Lt(this, Wn, fr).call(this, { type: "failed", failureCount: _, error: w });
      },
      onPause: () => {
        Lt(this, Wn, fr).call(this, { type: "pause" });
      },
      onContinue: () => {
        Lt(this, Wn, fr).call(this, { type: "continue" });
      },
      retry: h.options.retry,
      retryDelay: h.options.retryDelay,
      networkMode: h.options.networkMode
    })), ye(this, Nr, z(this, Sn).promise), z(this, Nr);
  }
}, ki = new WeakMap(), Fi = new WeakMap(), Tn = new WeakMap(), Nr = new WeakMap(), Sn = new WeakMap(), Bt = new WeakMap(), La = new WeakMap(), ni = new WeakMap(), Bi = new WeakSet(), Mo = function(n) {
  this.options = { ...z(this, La), ...n }, this.updateGcTime(this.options.gcTime);
}, Wn = new WeakSet(), fr = function(n) {
  const i = (a) => {
    switch (n.type) {
      case "failed":
        return {
          ...a,
          fetchFailureCount: n.failureCount,
          fetchFailureReason: n.error
        };
      case "pause":
        return {
          ...a,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...a,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...a,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: n.meta ?? null,
          fetchStatus: Tl(this.options.networkMode) ? "fetching" : "paused",
          ...!a.dataUpdatedAt && {
            error: null,
            status: "pending"
          }
        };
      case "success":
        return {
          ...a,
          data: n.data,
          dataUpdateCount: a.dataUpdateCount + 1,
          dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!n.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const s = n.error;
        return Mu(s) && s.revert && z(this, Fi) ? { ...z(this, Fi), fetchStatus: "idle" } : {
          ...a,
          error: s,
          errorUpdateCount: a.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: a.fetchFailureCount + 1,
          fetchFailureReason: s,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...a,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...a,
          ...n.state
        };
    }
  };
  this.state = i(this.state), Kt.batch(() => {
    z(this, Bt).forEach((a) => {
      a.onQueryUpdate();
    }), z(this, Tn).notify({ query: this, type: "updated", action: n });
  });
}, wd);
function G1(t) {
  const n = typeof t.initialData == "function" ? t.initialData() : t.initialData, i = typeof n < "u", a = i ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: n,
    dataUpdateCount: 0,
    dataUpdatedAt: i ? a ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: i ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Vn, _d, V1 = (_d = class extends rs {
  constructor(n = {}) {
    super();
    ze(this, Vn, void 0);
    this.config = n, ye(this, Vn, /* @__PURE__ */ new Map());
  }
  build(n, i, a) {
    const s = i.queryKey, l = i.queryHash ?? Cl(s, i);
    let c = this.get(l);
    return c || (c = new Y1({
      cache: this,
      queryKey: s,
      queryHash: l,
      options: n.defaultQueryOptions(i),
      state: a,
      defaultOptions: n.getQueryDefaults(s)
    }), this.add(c)), c;
  }
  add(n) {
    z(this, Vn).has(n.queryHash) || (z(this, Vn).set(n.queryHash, n), this.notify({
      type: "added",
      query: n
    }));
  }
  remove(n) {
    const i = z(this, Vn).get(n.queryHash);
    i && (n.destroy(), i === n && z(this, Vn).delete(n.queryHash), this.notify({ type: "removed", query: n }));
  }
  clear() {
    Kt.batch(() => {
      this.getAll().forEach((n) => {
        this.remove(n);
      });
    });
  }
  get(n) {
    return z(this, Vn).get(n);
  }
  getAll() {
    return [...z(this, Vn).values()];
  }
  find(n) {
    const i = { exact: !0, ...n };
    return this.getAll().find(
      (a) => Sh(i, a)
    );
  }
  findAll(n = {}) {
    const i = this.getAll();
    return Object.keys(n).length > 0 ? i.filter((a) => Sh(n, a)) : i;
  }
  notify(n) {
    Kt.batch(() => {
      this.listeners.forEach((i) => {
        i(n);
      });
    });
  }
  onFocus() {
    Kt.batch(() => {
      this.getAll().forEach((n) => {
        n.onFocus();
      });
    });
  }
  onOnline() {
    Kt.batch(() => {
      this.getAll().forEach((n) => {
        n.onOnline();
      });
    });
  }
}, Vn = new WeakMap(), _d), Kn, Pa, pn, Wi, Qn, Sr, Ad, K1 = (Ad = class extends Wd {
  constructor(n) {
    super();
    ze(this, Qn);
    ze(this, Kn, void 0);
    ze(this, Pa, void 0);
    ze(this, pn, void 0);
    ze(this, Wi, void 0);
    this.mutationId = n.mutationId, ye(this, Pa, n.defaultOptions), ye(this, pn, n.mutationCache), ye(this, Kn, []), this.state = n.state || Q1(), this.setOptions(n.options), this.scheduleGc();
  }
  setOptions(n) {
    this.options = { ...z(this, Pa), ...n }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(n) {
    z(this, Kn).includes(n) || (z(this, Kn).push(n), this.clearGcTimeout(), z(this, pn).notify({
      type: "observerAdded",
      mutation: this,
      observer: n
    }));
  }
  removeObserver(n) {
    ye(this, Kn, z(this, Kn).filter((i) => i !== n)), this.scheduleGc(), z(this, pn).notify({
      type: "observerRemoved",
      mutation: this,
      observer: n
    });
  }
  optionalRemove() {
    z(this, Kn).length || (this.state.status === "pending" ? this.scheduleGc() : z(this, pn).remove(this));
  }
  continue() {
    var n;
    return ((n = z(this, Wi)) == null ? void 0 : n.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(n) {
    var s, l, c, h, g, y, b, v, C, _, w, E, O, D, B, M, U, ee, oe, de;
    const i = () => (ye(this, Wi, Bd({
      fn: () => this.options.mutationFn ? this.options.mutationFn(n) : Promise.reject(new Error("No mutationFn found")),
      onFail: (ie, fe) => {
        Lt(this, Qn, Sr).call(this, { type: "failed", failureCount: ie, error: fe });
      },
      onPause: () => {
        Lt(this, Qn, Sr).call(this, { type: "pause" });
      },
      onContinue: () => {
        Lt(this, Qn, Sr).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), z(this, Wi).promise), a = this.state.status === "pending";
    try {
      if (!a) {
        Lt(this, Qn, Sr).call(this, { type: "pending", variables: n }), await ((l = (s = z(this, pn).config).onMutate) == null ? void 0 : l.call(
          s,
          n,
          this
        ));
        const fe = await ((h = (c = this.options).onMutate) == null ? void 0 : h.call(c, n));
        fe !== this.state.context && Lt(this, Qn, Sr).call(this, {
          type: "pending",
          context: fe,
          variables: n
        });
      }
      const ie = await i();
      return await ((y = (g = z(this, pn).config).onSuccess) == null ? void 0 : y.call(
        g,
        ie,
        n,
        this.state.context,
        this
      )), await ((v = (b = this.options).onSuccess) == null ? void 0 : v.call(b, ie, n, this.state.context)), await ((_ = (C = z(this, pn).config).onSettled) == null ? void 0 : _.call(
        C,
        ie,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((E = (w = this.options).onSettled) == null ? void 0 : E.call(w, ie, null, n, this.state.context)), Lt(this, Qn, Sr).call(this, { type: "success", data: ie }), ie;
    } catch (ie) {
      try {
        throw await ((D = (O = z(this, pn).config).onError) == null ? void 0 : D.call(
          O,
          ie,
          n,
          this.state.context,
          this
        )), await ((M = (B = this.options).onError) == null ? void 0 : M.call(
          B,
          ie,
          n,
          this.state.context
        )), await ((ee = (U = z(this, pn).config).onSettled) == null ? void 0 : ee.call(
          U,
          void 0,
          ie,
          this.state.variables,
          this.state.context,
          this
        )), await ((de = (oe = this.options).onSettled) == null ? void 0 : de.call(
          oe,
          void 0,
          ie,
          n,
          this.state.context
        )), ie;
      } finally {
        Lt(this, Qn, Sr).call(this, { type: "error", error: ie });
      }
    }
  }
}, Kn = new WeakMap(), Pa = new WeakMap(), pn = new WeakMap(), Wi = new WeakMap(), Qn = new WeakSet(), Sr = function(n) {
  const i = (a) => {
    switch (n.type) {
      case "failed":
        return {
          ...a,
          failureCount: n.failureCount,
          failureReason: n.error
        };
      case "pause":
        return {
          ...a,
          isPaused: !0
        };
      case "continue":
        return {
          ...a,
          isPaused: !1
        };
      case "pending":
        return {
          ...a,
          context: n.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: !Tl(this.options.networkMode),
          status: "pending",
          variables: n.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...a,
          data: n.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...a,
          data: void 0,
          error: n.error,
          failureCount: a.failureCount + 1,
          failureReason: n.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = i(this.state), Kt.batch(() => {
    z(this, Kn).forEach((a) => {
      a.onMutationUpdate(n);
    }), z(this, pn).notify({
      mutation: this,
      type: "updated",
      action: n
    });
  });
}, Ad);
function Q1() {
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
var Dn, Na, ri, Ed, X1 = (Ed = class extends rs {
  constructor(n = {}) {
    super();
    ze(this, Dn, void 0);
    ze(this, Na, void 0);
    ze(this, ri, void 0);
    this.config = n, ye(this, Dn, []), ye(this, Na, 0);
  }
  build(n, i, a) {
    const s = new K1({
      mutationCache: this,
      mutationId: ++So(this, Na)._,
      options: n.defaultMutationOptions(i),
      state: a
    });
    return this.add(s), s;
  }
  add(n) {
    z(this, Dn).push(n), this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    ye(this, Dn, z(this, Dn).filter((i) => i !== n)), this.notify({ type: "removed", mutation: n });
  }
  clear() {
    Kt.batch(() => {
      z(this, Dn).forEach((n) => {
        this.remove(n);
      });
    });
  }
  getAll() {
    return z(this, Dn);
  }
  find(n) {
    const i = { exact: !0, ...n };
    return z(this, Dn).find(
      (a) => Dh(i, a)
    );
  }
  findAll(n = {}) {
    return z(this, Dn).filter(
      (i) => Dh(n, i)
    );
  }
  notify(n) {
    Kt.batch(() => {
      this.listeners.forEach((i) => {
        i(n);
      });
    });
  }
  resumePausedMutations() {
    return ye(this, ri, (z(this, ri) ?? Promise.resolve()).then(() => {
      const n = z(this, Dn).filter((i) => i.state.isPaused);
      return Kt.batch(
        () => n.reduce(
          (i, a) => i.then(() => a.continue().catch(Bn)),
          Promise.resolve()
        )
      );
    }).then(() => {
      ye(this, ri, void 0);
    })), z(this, ri);
  }
}, Dn = new WeakMap(), Na = new WeakMap(), ri = new WeakMap(), Ed);
function J1(t) {
  return {
    onFetch: (n, i) => {
      const a = async () => {
        var w, E, O, D, B;
        const s = n.options, l = (O = (E = (w = n.fetchOptions) == null ? void 0 : w.meta) == null ? void 0 : E.fetchMore) == null ? void 0 : O.direction, c = ((D = n.state.data) == null ? void 0 : D.pages) || [], h = ((B = n.state.data) == null ? void 0 : B.pageParams) || [], g = { pages: [], pageParams: [] };
        let y = !1;
        const b = (M) => {
          Object.defineProperty(M, "signal", {
            enumerable: !0,
            get: () => (n.signal.aborted ? y = !0 : n.signal.addEventListener("abort", () => {
              y = !0;
            }), n.signal)
          });
        }, v = n.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${n.options.queryHash}'`)
        )), C = async (M, U, ee) => {
          if (y)
            return Promise.reject();
          if (U == null && M.pages.length)
            return Promise.resolve(M);
          const oe = {
            queryKey: n.queryKey,
            pageParam: U,
            direction: ee ? "backward" : "forward",
            meta: n.options.meta
          };
          b(oe);
          const de = await v(
            oe
          ), { maxPages: ie } = n.options, fe = ee ? z1 : U1;
          return {
            pages: fe(M.pages, de, ie),
            pageParams: fe(M.pageParams, U, ie)
          };
        };
        let _;
        if (l && c.length) {
          const M = l === "backward", U = M ? Z1 : Ph, ee = {
            pages: c,
            pageParams: h
          }, oe = U(s, ee);
          _ = await C(ee, oe, M);
        } else {
          _ = await C(
            g,
            h[0] ?? s.initialPageParam
          );
          const M = t ?? c.length;
          for (let U = 1; U < M; U++) {
            const ee = Ph(s, _);
            _ = await C(_, ee);
          }
        }
        return _;
      };
      n.options.persister ? n.fetchFn = () => {
        var s, l;
        return (l = (s = n.options).persister) == null ? void 0 : l.call(
          s,
          a,
          {
            queryKey: n.queryKey,
            meta: n.options.meta,
            signal: n.signal
          },
          i
        );
      } : n.fetchFn = a;
    }
  };
}
function Ph(t, { pages: n, pageParams: i }) {
  const a = n.length - 1;
  return t.getNextPageParam(
    n[a],
    n,
    i[a],
    i
  );
}
function Z1(t, { pages: n, pageParams: i }) {
  var a;
  return (a = t.getPreviousPageParam) == null ? void 0 : a.call(
    t,
    n[0],
    n,
    i[0],
    i
  );
}
var Pt, Ir, Mr, Ui, zi, kr, Hi, ji, xd, e_ = (xd = class {
  constructor(t = {}) {
    ze(this, Pt, void 0);
    ze(this, Ir, void 0);
    ze(this, Mr, void 0);
    ze(this, Ui, void 0);
    ze(this, zi, void 0);
    ze(this, kr, void 0);
    ze(this, Hi, void 0);
    ze(this, ji, void 0);
    ye(this, Pt, t.queryCache || new V1()), ye(this, Ir, t.mutationCache || new X1()), ye(this, Mr, t.defaultOptions || {}), ye(this, Ui, /* @__PURE__ */ new Map()), ye(this, zi, /* @__PURE__ */ new Map()), ye(this, kr, 0);
  }
  mount() {
    So(this, kr)._++, z(this, kr) === 1 && (ye(this, Hi, el.subscribe(() => {
      el.isFocused() && (this.resumePausedMutations(), z(this, Pt).onFocus());
    })), ye(this, ji, zo.subscribe(() => {
      zo.isOnline() && (this.resumePausedMutations(), z(this, Pt).onOnline());
    })));
  }
  unmount() {
    var t, n;
    So(this, kr)._--, z(this, kr) === 0 && ((t = z(this, Hi)) == null || t.call(this), ye(this, Hi, void 0), (n = z(this, ji)) == null || n.call(this), ye(this, ji, void 0));
  }
  isFetching(t) {
    return z(this, Pt).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return z(this, Ir).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var i;
    const n = this.defaultQueryOptions({ queryKey: t });
    return (i = z(this, Pt).get(n.queryHash)) == null ? void 0 : i.state.data;
  }
  ensureQueryData(t) {
    const n = this.getQueryData(t.queryKey);
    return n !== void 0 ? Promise.resolve(n) : this.fetchQuery(t);
  }
  getQueriesData(t) {
    return this.getQueryCache().findAll(t).map(({ queryKey: n, state: i }) => {
      const a = i.data;
      return [n, a];
    });
  }
  setQueryData(t, n, i) {
    const a = this.defaultQueryOptions({ queryKey: t }), s = z(this, Pt).get(
      a.queryHash
    ), l = s == null ? void 0 : s.state.data, c = M1(n, l);
    if (!(typeof c > "u"))
      return z(this, Pt).build(this, a).setData(c, { ...i, manual: !0 });
  }
  setQueriesData(t, n, i) {
    return Kt.batch(
      () => this.getQueryCache().findAll(t).map(({ queryKey: a }) => [
        a,
        this.setQueryData(a, n, i)
      ])
    );
  }
  getQueryState(t) {
    var i;
    const n = this.defaultQueryOptions({ queryKey: t });
    return (i = z(this, Pt).get(n.queryHash)) == null ? void 0 : i.state;
  }
  removeQueries(t) {
    const n = z(this, Pt);
    Kt.batch(() => {
      n.findAll(t).forEach((i) => {
        n.remove(i);
      });
    });
  }
  resetQueries(t, n) {
    const i = z(this, Pt), a = {
      type: "active",
      ...t
    };
    return Kt.batch(() => (i.findAll(t).forEach((s) => {
      s.reset();
    }), this.refetchQueries(a, n)));
  }
  cancelQueries(t = {}, n = {}) {
    const i = { revert: !0, ...n }, a = Kt.batch(
      () => z(this, Pt).findAll(t).map((s) => s.cancel(i))
    );
    return Promise.all(a).then(Bn).catch(Bn);
  }
  invalidateQueries(t = {}, n = {}) {
    return Kt.batch(() => {
      if (z(this, Pt).findAll(t).forEach((a) => {
        a.invalidate();
      }), t.refetchType === "none")
        return Promise.resolve();
      const i = {
        ...t,
        type: t.refetchType ?? t.type ?? "active"
      };
      return this.refetchQueries(i, n);
    });
  }
  refetchQueries(t = {}, n) {
    const i = {
      ...n,
      cancelRefetch: (n == null ? void 0 : n.cancelRefetch) ?? !0
    }, a = Kt.batch(
      () => z(this, Pt).findAll(t).filter((s) => !s.isDisabled()).map((s) => {
        let l = s.fetch(void 0, i);
        return i.throwOnError || (l = l.catch(Bn)), s.state.fetchStatus === "paused" ? Promise.resolve() : l;
      })
    );
    return Promise.all(a).then(Bn);
  }
  fetchQuery(t) {
    const n = this.defaultQueryOptions(t);
    typeof n.retry > "u" && (n.retry = !1);
    const i = z(this, Pt).build(this, n);
    return i.isStaleByTime(n.staleTime) ? i.fetch(n) : Promise.resolve(i.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(Bn).catch(Bn);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = J1(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(Bn).catch(Bn);
  }
  resumePausedMutations() {
    return z(this, Ir).resumePausedMutations();
  }
  getQueryCache() {
    return z(this, Pt);
  }
  getMutationCache() {
    return z(this, Ir);
  }
  getDefaultOptions() {
    return z(this, Mr);
  }
  setDefaultOptions(t) {
    ye(this, Mr, t);
  }
  setQueryDefaults(t, n) {
    z(this, Ui).set(ba(t), {
      queryKey: t,
      defaultOptions: n
    });
  }
  getQueryDefaults(t) {
    const n = [...z(this, Ui).values()];
    let i = {};
    return n.forEach((a) => {
      wa(t, a.queryKey) && (i = { ...i, ...a.defaultOptions });
    }), i;
  }
  setMutationDefaults(t, n) {
    z(this, zi).set(ba(t), {
      mutationKey: t,
      defaultOptions: n
    });
  }
  getMutationDefaults(t) {
    const n = [...z(this, zi).values()];
    let i = {};
    return n.forEach((a) => {
      wa(t, a.mutationKey) && (i = { ...i, ...a.defaultOptions });
    }), i;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const n = {
      ...z(this, Mr).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return n.queryHash || (n.queryHash = Cl(
      n.queryKey,
      n
    )), typeof n.refetchOnReconnect > "u" && (n.refetchOnReconnect = n.networkMode !== "always"), typeof n.throwOnError > "u" && (n.throwOnError = !!n.suspense), typeof n.networkMode > "u" && n.persister && (n.networkMode = "offlineFirst"), n;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...z(this, Mr).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    z(this, Pt).clear(), z(this, Ir).clear();
  }
}, Pt = new WeakMap(), Ir = new WeakMap(), Mr = new WeakMap(), Ui = new WeakMap(), zi = new WeakMap(), kr = new WeakMap(), Hi = new WeakMap(), ji = new WeakMap(), xd), Ud = G.createContext(
  void 0
), eC = (t) => {
  const n = G.useContext(Ud);
  if (t)
    return t;
  if (!n)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return n;
}, t_ = ({
  client: t,
  children: n
}) => (G.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ Nt.jsx(Ud.Provider, { value: t, children: n }));
const zd = te.createContext(null), n_ = ({
  children: t,
  session: n,
  setSession: i
}) => /* @__PURE__ */ et(zd.Provider, { value: {
  session: n,
  setSession: i
}, children: t }), r_ = () => {
  const t = G.useContext(zd);
  if (!t)
    throw new Error("useSession must be used within a SessionContextProvider");
  return [t.session, t.setSession];
};
var Ho = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ho.exports;
(function(t, n) {
  (function() {
    var i, a = "4.17.21", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", h = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", y = 500, b = "__lodash_placeholder__", v = 1, C = 2, _ = 4, w = 1, E = 2, O = 1, D = 2, B = 4, M = 8, U = 16, ee = 32, oe = 64, de = 128, ie = 256, fe = 512, Fe = 30, Re = "...", Be = 800, Qe = 16, je = 1, he = 2, Ce = 3, qe = 1 / 0, m = 9007199254740991, x = 17976931348623157e292, S = 0 / 0, P = 4294967295, N = P - 1, k = P >>> 1, K = [
      ["ary", de],
      ["bind", O],
      ["bindKey", D],
      ["curry", M],
      ["curryRight", U],
      ["flip", fe],
      ["partial", ee],
      ["partialRight", oe],
      ["rearg", ie]
    ], J = "[object Arguments]", V = "[object Array]", X = "[object AsyncFunction]", se = "[object Boolean]", Pe = "[object Date]", Oe = "[object DOMException]", Ee = "[object Error]", Ne = "[object Function]", ot = "[object GeneratorFunction]", be = "[object Map]", yt = "[object Number]", lt = "[object Null]", ct = "[object Object]", pt = "[object Promise]", nt = "[object Proxy]", It = "[object RegExp]", tt = "[object Set]", H = "[object String]", F = "[object Symbol]", Z = "[object Undefined]", ne = "[object WeakMap]", ae = "[object WeakSet]", Ie = "[object ArrayBuffer]", Ye = "[object DataView]", rt = "[object Float32Array]", le = "[object Float64Array]", $e = "[object Int8Array]", Et = "[object Int16Array]", vt = "[object Int32Array]", it = "[object Uint8Array]", Ve = "[object Uint8ClampedArray]", Wt = "[object Uint16Array]", Mt = "[object Uint32Array]", sn = /\b__p \+= '';/g, vn = /\b(__p \+=) '' \+/g, Pn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, mn = /&(?:amp|lt|gt|quot|#39);/g, we = /[&<>"']/g, We = RegExp(mn.source), Xe = RegExp(we.source), xt = /<%-([\s\S]+?)%>/g, _e = /<%([\s\S]+?)%>/g, _t = /<%=([\s\S]+?)%>/g, Qt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kt = /^\w*$/, zn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nn = /[\\^$.*+?()[\]{}|]/g, Xt = RegExp(Nn.source), gn = /^\s+/, tr = /\s/, Jt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Zt = /\{\n\/\* \[wrapped with (.+)\] \*/, gr = /,? & /, yn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, en = /[()=,{}\[\]\/\s]/, ci = /\\(\\)?/g, Qi = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Te = /\w*$/, st = /^[-+]0x[0-9a-f]+$/i, ge = /^0b[01]+$/i, St = /^\[object .+?Constructor\]$/, qt = /^0o[0-7]+$/i, zr = /^(?:0|[1-9]\d*)$/, ws = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fi = /($^)/, uv = /['\n\r\u2028\u2029\\]/g, Ua = "\\ud800-\\udfff", lv = "\\u0300-\\u036f", cv = "\\ufe20-\\ufe2f", fv = "\\u20d0-\\u20ff", Xl = lv + cv + fv, Jl = "\\u2700-\\u27bf", Zl = "a-z\\xdf-\\xf6\\xf8-\\xff", hv = "\\xac\\xb1\\xd7\\xf7", dv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", pv = "\\u2000-\\u206f", vv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ec = "A-Z\\xc0-\\xd6\\xd8-\\xde", tc = "\\ufe0e\\ufe0f", nc = hv + dv + pv + vv, _s = "['’]", mv = "[" + Ua + "]", rc = "[" + nc + "]", za = "[" + Xl + "]", ic = "\\d+", gv = "[" + Jl + "]", ac = "[" + Zl + "]", oc = "[^" + Ua + nc + ic + Jl + Zl + ec + "]", As = "\\ud83c[\\udffb-\\udfff]", yv = "(?:" + za + "|" + As + ")", sc = "[^" + Ua + "]", Es = "(?:\\ud83c[\\udde6-\\uddff]){2}", xs = "[\\ud800-\\udbff][\\udc00-\\udfff]", hi = "[" + ec + "]", uc = "\\u200d", lc = "(?:" + ac + "|" + oc + ")", bv = "(?:" + hi + "|" + oc + ")", cc = "(?:" + _s + "(?:d|ll|m|re|s|t|ve))?", fc = "(?:" + _s + "(?:D|LL|M|RE|S|T|VE))?", hc = yv + "?", dc = "[" + tc + "]?", wv = "(?:" + uc + "(?:" + [sc, Es, xs].join("|") + ")" + dc + hc + ")*", _v = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Av = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", pc = dc + hc + wv, Ev = "(?:" + [gv, Es, xs].join("|") + ")" + pc, xv = "(?:" + [sc + za + "?", za, Es, xs, mv].join("|") + ")", Ov = RegExp(_s, "g"), Cv = RegExp(za, "g"), Os = RegExp(As + "(?=" + As + ")|" + xv + pc, "g"), Tv = RegExp([
      hi + "?" + ac + "+" + cc + "(?=" + [rc, hi, "$"].join("|") + ")",
      bv + "+" + fc + "(?=" + [rc, hi + lc, "$"].join("|") + ")",
      hi + "?" + lc + "+" + cc,
      hi + "+" + fc,
      Av,
      _v,
      ic,
      Ev
    ].join("|"), "g"), Sv = RegExp("[" + uc + Ua + Xl + tc + "]"), Dv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Rv = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Lv = -1, ft = {};
    ft[rt] = ft[le] = ft[$e] = ft[Et] = ft[vt] = ft[it] = ft[Ve] = ft[Wt] = ft[Mt] = !0, ft[J] = ft[V] = ft[Ie] = ft[se] = ft[Ye] = ft[Pe] = ft[Ee] = ft[Ne] = ft[be] = ft[yt] = ft[ct] = ft[It] = ft[tt] = ft[H] = ft[ne] = !1;
    var ut = {};
    ut[J] = ut[V] = ut[Ie] = ut[Ye] = ut[se] = ut[Pe] = ut[rt] = ut[le] = ut[$e] = ut[Et] = ut[vt] = ut[be] = ut[yt] = ut[ct] = ut[It] = ut[tt] = ut[H] = ut[F] = ut[it] = ut[Ve] = ut[Wt] = ut[Mt] = !0, ut[Ee] = ut[Ne] = ut[ne] = !1;
    var Pv = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Nv = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Iv = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Mv = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, kv = parseFloat, Fv = parseInt, vc = typeof hr == "object" && hr && hr.Object === Object && hr, Bv = typeof self == "object" && self && self.Object === Object && self, Ut = vc || Bv || Function("return this")(), Cs = n && !n.nodeType && n, Hr = Cs && !0 && t && !t.nodeType && t, mc = Hr && Hr.exports === Cs, Ts = mc && vc.process, bn = function() {
      try {
        var R = Hr && Hr.require && Hr.require("util").types;
        return R || Ts && Ts.binding && Ts.binding("util");
      } catch {
      }
    }(), gc = bn && bn.isArrayBuffer, yc = bn && bn.isDate, bc = bn && bn.isMap, wc = bn && bn.isRegExp, _c = bn && bn.isSet, Ac = bn && bn.isTypedArray;
    function un(R, W, I) {
      switch (I.length) {
        case 0:
          return R.call(W);
        case 1:
          return R.call(W, I[0]);
        case 2:
          return R.call(W, I[0], I[1]);
        case 3:
          return R.call(W, I[0], I[1], I[2]);
      }
      return R.apply(W, I);
    }
    function Wv(R, W, I, ue) {
      for (var Ae = -1, Ge = R == null ? 0 : R.length; ++Ae < Ge; ) {
        var Dt = R[Ae];
        W(ue, Dt, I(Dt), R);
      }
      return ue;
    }
    function wn(R, W) {
      for (var I = -1, ue = R == null ? 0 : R.length; ++I < ue && W(R[I], I, R) !== !1; )
        ;
      return R;
    }
    function Uv(R, W) {
      for (var I = R == null ? 0 : R.length; I-- && W(R[I], I, R) !== !1; )
        ;
      return R;
    }
    function Ec(R, W) {
      for (var I = -1, ue = R == null ? 0 : R.length; ++I < ue; )
        if (!W(R[I], I, R))
          return !1;
      return !0;
    }
    function yr(R, W) {
      for (var I = -1, ue = R == null ? 0 : R.length, Ae = 0, Ge = []; ++I < ue; ) {
        var Dt = R[I];
        W(Dt, I, R) && (Ge[Ae++] = Dt);
      }
      return Ge;
    }
    function Ha(R, W) {
      var I = R == null ? 0 : R.length;
      return !!I && di(R, W, 0) > -1;
    }
    function Ss(R, W, I) {
      for (var ue = -1, Ae = R == null ? 0 : R.length; ++ue < Ae; )
        if (I(W, R[ue]))
          return !0;
      return !1;
    }
    function mt(R, W) {
      for (var I = -1, ue = R == null ? 0 : R.length, Ae = Array(ue); ++I < ue; )
        Ae[I] = W(R[I], I, R);
      return Ae;
    }
    function br(R, W) {
      for (var I = -1, ue = W.length, Ae = R.length; ++I < ue; )
        R[Ae + I] = W[I];
      return R;
    }
    function Ds(R, W, I, ue) {
      var Ae = -1, Ge = R == null ? 0 : R.length;
      for (ue && Ge && (I = R[++Ae]); ++Ae < Ge; )
        I = W(I, R[Ae], Ae, R);
      return I;
    }
    function zv(R, W, I, ue) {
      var Ae = R == null ? 0 : R.length;
      for (ue && Ae && (I = R[--Ae]); Ae--; )
        I = W(I, R[Ae], Ae, R);
      return I;
    }
    function Rs(R, W) {
      for (var I = -1, ue = R == null ? 0 : R.length; ++I < ue; )
        if (W(R[I], I, R))
          return !0;
      return !1;
    }
    var Hv = Ls("length");
    function jv(R) {
      return R.split("");
    }
    function $v(R) {
      return R.match(yn) || [];
    }
    function xc(R, W, I) {
      var ue;
      return I(R, function(Ae, Ge, Dt) {
        if (W(Ae, Ge, Dt))
          return ue = Ge, !1;
      }), ue;
    }
    function ja(R, W, I, ue) {
      for (var Ae = R.length, Ge = I + (ue ? 1 : -1); ue ? Ge-- : ++Ge < Ae; )
        if (W(R[Ge], Ge, R))
          return Ge;
      return -1;
    }
    function di(R, W, I) {
      return W === W ? nm(R, W, I) : ja(R, Oc, I);
    }
    function qv(R, W, I, ue) {
      for (var Ae = I - 1, Ge = R.length; ++Ae < Ge; )
        if (ue(R[Ae], W))
          return Ae;
      return -1;
    }
    function Oc(R) {
      return R !== R;
    }
    function Cc(R, W) {
      var I = R == null ? 0 : R.length;
      return I ? Ns(R, W) / I : S;
    }
    function Ls(R) {
      return function(W) {
        return W == null ? i : W[R];
      };
    }
    function Ps(R) {
      return function(W) {
        return R == null ? i : R[W];
      };
    }
    function Tc(R, W, I, ue, Ae) {
      return Ae(R, function(Ge, Dt, at) {
        I = ue ? (ue = !1, Ge) : W(I, Ge, Dt, at);
      }), I;
    }
    function Yv(R, W) {
      var I = R.length;
      for (R.sort(W); I--; )
        R[I] = R[I].value;
      return R;
    }
    function Ns(R, W) {
      for (var I, ue = -1, Ae = R.length; ++ue < Ae; ) {
        var Ge = W(R[ue]);
        Ge !== i && (I = I === i ? Ge : I + Ge);
      }
      return I;
    }
    function Is(R, W) {
      for (var I = -1, ue = Array(R); ++I < R; )
        ue[I] = W(I);
      return ue;
    }
    function Gv(R, W) {
      return mt(W, function(I) {
        return [I, R[I]];
      });
    }
    function Sc(R) {
      return R && R.slice(0, Pc(R) + 1).replace(gn, "");
    }
    function ln(R) {
      return function(W) {
        return R(W);
      };
    }
    function Ms(R, W) {
      return mt(W, function(I) {
        return R[I];
      });
    }
    function Xi(R, W) {
      return R.has(W);
    }
    function Dc(R, W) {
      for (var I = -1, ue = R.length; ++I < ue && di(W, R[I], 0) > -1; )
        ;
      return I;
    }
    function Rc(R, W) {
      for (var I = R.length; I-- && di(W, R[I], 0) > -1; )
        ;
      return I;
    }
    function Vv(R, W) {
      for (var I = R.length, ue = 0; I--; )
        R[I] === W && ++ue;
      return ue;
    }
    var Kv = Ps(Pv), Qv = Ps(Nv);
    function Xv(R) {
      return "\\" + Mv[R];
    }
    function Jv(R, W) {
      return R == null ? i : R[W];
    }
    function pi(R) {
      return Sv.test(R);
    }
    function Zv(R) {
      return Dv.test(R);
    }
    function em(R) {
      for (var W, I = []; !(W = R.next()).done; )
        I.push(W.value);
      return I;
    }
    function ks(R) {
      var W = -1, I = Array(R.size);
      return R.forEach(function(ue, Ae) {
        I[++W] = [Ae, ue];
      }), I;
    }
    function Lc(R, W) {
      return function(I) {
        return R(W(I));
      };
    }
    function wr(R, W) {
      for (var I = -1, ue = R.length, Ae = 0, Ge = []; ++I < ue; ) {
        var Dt = R[I];
        (Dt === W || Dt === b) && (R[I] = b, Ge[Ae++] = I);
      }
      return Ge;
    }
    function $a(R) {
      var W = -1, I = Array(R.size);
      return R.forEach(function(ue) {
        I[++W] = ue;
      }), I;
    }
    function tm(R) {
      var W = -1, I = Array(R.size);
      return R.forEach(function(ue) {
        I[++W] = [ue, ue];
      }), I;
    }
    function nm(R, W, I) {
      for (var ue = I - 1, Ae = R.length; ++ue < Ae; )
        if (R[ue] === W)
          return ue;
      return -1;
    }
    function rm(R, W, I) {
      for (var ue = I + 1; ue--; )
        if (R[ue] === W)
          return ue;
      return ue;
    }
    function vi(R) {
      return pi(R) ? am(R) : Hv(R);
    }
    function In(R) {
      return pi(R) ? om(R) : jv(R);
    }
    function Pc(R) {
      for (var W = R.length; W-- && tr.test(R.charAt(W)); )
        ;
      return W;
    }
    var im = Ps(Iv);
    function am(R) {
      for (var W = Os.lastIndex = 0; Os.test(R); )
        ++W;
      return W;
    }
    function om(R) {
      return R.match(Os) || [];
    }
    function sm(R) {
      return R.match(Tv) || [];
    }
    var um = function R(W) {
      W = W == null ? Ut : mi.defaults(Ut.Object(), W, mi.pick(Ut, Rv));
      var I = W.Array, ue = W.Date, Ae = W.Error, Ge = W.Function, Dt = W.Math, at = W.Object, Fs = W.RegExp, lm = W.String, _n = W.TypeError, qa = I.prototype, cm = Ge.prototype, gi = at.prototype, Ya = W["__core-js_shared__"], Ga = cm.toString, Je = gi.hasOwnProperty, fm = 0, Nc = function() {
        var e = /[^.]+$/.exec(Ya && Ya.keys && Ya.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Va = gi.toString, hm = Ga.call(at), dm = Ut._, pm = Fs(
        "^" + Ga.call(Je).replace(Nn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ka = mc ? W.Buffer : i, _r = W.Symbol, Qa = W.Uint8Array, Ic = Ka ? Ka.allocUnsafe : i, Xa = Lc(at.getPrototypeOf, at), Mc = at.create, kc = gi.propertyIsEnumerable, Ja = qa.splice, Fc = _r ? _r.isConcatSpreadable : i, Ji = _r ? _r.iterator : i, jr = _r ? _r.toStringTag : i, Za = function() {
        try {
          var e = Vr(at, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), vm = W.clearTimeout !== Ut.clearTimeout && W.clearTimeout, mm = ue && ue.now !== Ut.Date.now && ue.now, gm = W.setTimeout !== Ut.setTimeout && W.setTimeout, eo = Dt.ceil, to = Dt.floor, Bs = at.getOwnPropertySymbols, ym = Ka ? Ka.isBuffer : i, Bc = W.isFinite, bm = qa.join, wm = Lc(at.keys, at), Rt = Dt.max, jt = Dt.min, _m = ue.now, Am = W.parseInt, Wc = Dt.random, Em = qa.reverse, Ws = Vr(W, "DataView"), Zi = Vr(W, "Map"), Us = Vr(W, "Promise"), yi = Vr(W, "Set"), ea = Vr(W, "WeakMap"), ta = Vr(at, "create"), no = ea && new ea(), bi = {}, xm = Kr(Ws), Om = Kr(Zi), Cm = Kr(Us), Tm = Kr(yi), Sm = Kr(ea), ro = _r ? _r.prototype : i, na = ro ? ro.valueOf : i, Uc = ro ? ro.toString : i;
      function d(e) {
        if (At(e) && !xe(e) && !(e instanceof ke)) {
          if (e instanceof An)
            return e;
          if (Je.call(e, "__wrapped__"))
            return Hf(e);
        }
        return new An(e);
      }
      var wi = function() {
        function e() {
        }
        return function(r) {
          if (!bt(r))
            return {};
          if (Mc)
            return Mc(r);
          e.prototype = r;
          var o = new e();
          return e.prototype = i, o;
        };
      }();
      function io() {
      }
      function An(e, r) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = i;
      }
      d.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: xt,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: _e,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: _t,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: d
        }
      }, d.prototype = io.prototype, d.prototype.constructor = d, An.prototype = wi(io.prototype), An.prototype.constructor = An;
      function ke(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = P, this.__views__ = [];
      }
      function Dm() {
        var e = new ke(this.__wrapped__);
        return e.__actions__ = tn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = tn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = tn(this.__views__), e;
      }
      function Rm() {
        if (this.__filtered__) {
          var e = new ke(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Lm() {
        var e = this.__wrapped__.value(), r = this.__dir__, o = xe(e), u = r < 0, f = o ? e.length : 0, p = jg(0, f, this.__views__), A = p.start, T = p.end, L = T - A, j = u ? T : A - 1, $ = this.__iteratees__, Q = $.length, re = 0, ce = jt(L, this.__takeCount__);
        if (!o || !u && f == L && ce == L)
          return ff(e, this.__actions__);
        var ve = [];
        e:
          for (; L-- && re < ce; ) {
            j += r;
            for (var De = -1, me = e[j]; ++De < Q; ) {
              var Me = $[De], Ue = Me.iteratee, hn = Me.type, Vt = Ue(me);
              if (hn == he)
                me = Vt;
              else if (!Vt) {
                if (hn == je)
                  continue e;
                break e;
              }
            }
            ve[re++] = me;
          }
        return ve;
      }
      ke.prototype = wi(io.prototype), ke.prototype.constructor = ke;
      function $r(e) {
        var r = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++r < o; ) {
          var u = e[r];
          this.set(u[0], u[1]);
        }
      }
      function Pm() {
        this.__data__ = ta ? ta(null) : {}, this.size = 0;
      }
      function Nm(e) {
        var r = this.has(e) && delete this.__data__[e];
        return this.size -= r ? 1 : 0, r;
      }
      function Im(e) {
        var r = this.__data__;
        if (ta) {
          var o = r[e];
          return o === g ? i : o;
        }
        return Je.call(r, e) ? r[e] : i;
      }
      function Mm(e) {
        var r = this.__data__;
        return ta ? r[e] !== i : Je.call(r, e);
      }
      function km(e, r) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = ta && r === i ? g : r, this;
      }
      $r.prototype.clear = Pm, $r.prototype.delete = Nm, $r.prototype.get = Im, $r.prototype.has = Mm, $r.prototype.set = km;
      function nr(e) {
        var r = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++r < o; ) {
          var u = e[r];
          this.set(u[0], u[1]);
        }
      }
      function Fm() {
        this.__data__ = [], this.size = 0;
      }
      function Bm(e) {
        var r = this.__data__, o = ao(r, e);
        if (o < 0)
          return !1;
        var u = r.length - 1;
        return o == u ? r.pop() : Ja.call(r, o, 1), --this.size, !0;
      }
      function Wm(e) {
        var r = this.__data__, o = ao(r, e);
        return o < 0 ? i : r[o][1];
      }
      function Um(e) {
        return ao(this.__data__, e) > -1;
      }
      function zm(e, r) {
        var o = this.__data__, u = ao(o, e);
        return u < 0 ? (++this.size, o.push([e, r])) : o[u][1] = r, this;
      }
      nr.prototype.clear = Fm, nr.prototype.delete = Bm, nr.prototype.get = Wm, nr.prototype.has = Um, nr.prototype.set = zm;
      function rr(e) {
        var r = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++r < o; ) {
          var u = e[r];
          this.set(u[0], u[1]);
        }
      }
      function Hm() {
        this.size = 0, this.__data__ = {
          hash: new $r(),
          map: new (Zi || nr)(),
          string: new $r()
        };
      }
      function jm(e) {
        var r = yo(this, e).delete(e);
        return this.size -= r ? 1 : 0, r;
      }
      function $m(e) {
        return yo(this, e).get(e);
      }
      function qm(e) {
        return yo(this, e).has(e);
      }
      function Ym(e, r) {
        var o = yo(this, e), u = o.size;
        return o.set(e, r), this.size += o.size == u ? 0 : 1, this;
      }
      rr.prototype.clear = Hm, rr.prototype.delete = jm, rr.prototype.get = $m, rr.prototype.has = qm, rr.prototype.set = Ym;
      function qr(e) {
        var r = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new rr(); ++r < o; )
          this.add(e[r]);
      }
      function Gm(e) {
        return this.__data__.set(e, g), this;
      }
      function Vm(e) {
        return this.__data__.has(e);
      }
      qr.prototype.add = qr.prototype.push = Gm, qr.prototype.has = Vm;
      function Mn(e) {
        var r = this.__data__ = new nr(e);
        this.size = r.size;
      }
      function Km() {
        this.__data__ = new nr(), this.size = 0;
      }
      function Qm(e) {
        var r = this.__data__, o = r.delete(e);
        return this.size = r.size, o;
      }
      function Xm(e) {
        return this.__data__.get(e);
      }
      function Jm(e) {
        return this.__data__.has(e);
      }
      function Zm(e, r) {
        var o = this.__data__;
        if (o instanceof nr) {
          var u = o.__data__;
          if (!Zi || u.length < s - 1)
            return u.push([e, r]), this.size = ++o.size, this;
          o = this.__data__ = new rr(u);
        }
        return o.set(e, r), this.size = o.size, this;
      }
      Mn.prototype.clear = Km, Mn.prototype.delete = Qm, Mn.prototype.get = Xm, Mn.prototype.has = Jm, Mn.prototype.set = Zm;
      function zc(e, r) {
        var o = xe(e), u = !o && Qr(e), f = !o && !u && Cr(e), p = !o && !u && !f && xi(e), A = o || u || f || p, T = A ? Is(e.length, lm) : [], L = T.length;
        for (var j in e)
          (r || Je.call(e, j)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (j == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          f && (j == "offset" || j == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          p && (j == "buffer" || j == "byteLength" || j == "byteOffset") || // Skip index properties.
          sr(j, L))) && T.push(j);
        return T;
      }
      function Hc(e) {
        var r = e.length;
        return r ? e[Xs(0, r - 1)] : i;
      }
      function eg(e, r) {
        return bo(tn(e), Yr(r, 0, e.length));
      }
      function tg(e) {
        return bo(tn(e));
      }
      function zs(e, r, o) {
        (o !== i && !kn(e[r], o) || o === i && !(r in e)) && ir(e, r, o);
      }
      function ra(e, r, o) {
        var u = e[r];
        (!(Je.call(e, r) && kn(u, o)) || o === i && !(r in e)) && ir(e, r, o);
      }
      function ao(e, r) {
        for (var o = e.length; o--; )
          if (kn(e[o][0], r))
            return o;
        return -1;
      }
      function ng(e, r, o, u) {
        return Ar(e, function(f, p, A) {
          r(u, f, o(f), A);
        }), u;
      }
      function jc(e, r) {
        return e && jn(r, Ft(r), e);
      }
      function rg(e, r) {
        return e && jn(r, rn(r), e);
      }
      function ir(e, r, o) {
        r == "__proto__" && Za ? Za(e, r, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[r] = o;
      }
      function Hs(e, r) {
        for (var o = -1, u = r.length, f = I(u), p = e == null; ++o < u; )
          f[o] = p ? i : Au(e, r[o]);
        return f;
      }
      function Yr(e, r, o) {
        return e === e && (o !== i && (e = e <= o ? e : o), r !== i && (e = e >= r ? e : r)), e;
      }
      function En(e, r, o, u, f, p) {
        var A, T = r & v, L = r & C, j = r & _;
        if (o && (A = f ? o(e, u, f, p) : o(e)), A !== i)
          return A;
        if (!bt(e))
          return e;
        var $ = xe(e);
        if ($) {
          if (A = qg(e), !T)
            return tn(e, A);
        } else {
          var Q = $t(e), re = Q == Ne || Q == ot;
          if (Cr(e))
            return pf(e, T);
          if (Q == ct || Q == J || re && !f) {
            if (A = L || re ? {} : Nf(e), !T)
              return L ? Ig(e, rg(A, e)) : Ng(e, jc(A, e));
          } else {
            if (!ut[Q])
              return f ? e : {};
            A = Yg(e, Q, T);
          }
        }
        p || (p = new Mn());
        var ce = p.get(e);
        if (ce)
          return ce;
        p.set(e, A), uh(e) ? e.forEach(function(me) {
          A.add(En(me, r, o, me, e, p));
        }) : oh(e) && e.forEach(function(me, Me) {
          A.set(Me, En(me, r, o, Me, e, p));
        });
        var ve = j ? L ? uu : su : L ? rn : Ft, De = $ ? i : ve(e);
        return wn(De || e, function(me, Me) {
          De && (Me = me, me = e[Me]), ra(A, Me, En(me, r, o, Me, e, p));
        }), A;
      }
      function ig(e) {
        var r = Ft(e);
        return function(o) {
          return $c(o, e, r);
        };
      }
      function $c(e, r, o) {
        var u = o.length;
        if (e == null)
          return !u;
        for (e = at(e); u--; ) {
          var f = o[u], p = r[f], A = e[f];
          if (A === i && !(f in e) || !p(A))
            return !1;
        }
        return !0;
      }
      function qc(e, r, o) {
        if (typeof e != "function")
          throw new _n(c);
        return ca(function() {
          e.apply(i, o);
        }, r);
      }
      function ia(e, r, o, u) {
        var f = -1, p = Ha, A = !0, T = e.length, L = [], j = r.length;
        if (!T)
          return L;
        o && (r = mt(r, ln(o))), u ? (p = Ss, A = !1) : r.length >= s && (p = Xi, A = !1, r = new qr(r));
        e:
          for (; ++f < T; ) {
            var $ = e[f], Q = o == null ? $ : o($);
            if ($ = u || $ !== 0 ? $ : 0, A && Q === Q) {
              for (var re = j; re--; )
                if (r[re] === Q)
                  continue e;
              L.push($);
            } else
              p(r, Q, u) || L.push($);
          }
        return L;
      }
      var Ar = bf(Hn), Yc = bf($s, !0);
      function ag(e, r) {
        var o = !0;
        return Ar(e, function(u, f, p) {
          return o = !!r(u, f, p), o;
        }), o;
      }
      function oo(e, r, o) {
        for (var u = -1, f = e.length; ++u < f; ) {
          var p = e[u], A = r(p);
          if (A != null && (T === i ? A === A && !fn(A) : o(A, T)))
            var T = A, L = p;
        }
        return L;
      }
      function og(e, r, o, u) {
        var f = e.length;
        for (o = Se(o), o < 0 && (o = -o > f ? 0 : f + o), u = u === i || u > f ? f : Se(u), u < 0 && (u += f), u = o > u ? 0 : ch(u); o < u; )
          e[o++] = r;
        return e;
      }
      function Gc(e, r) {
        var o = [];
        return Ar(e, function(u, f, p) {
          r(u, f, p) && o.push(u);
        }), o;
      }
      function zt(e, r, o, u, f) {
        var p = -1, A = e.length;
        for (o || (o = Vg), f || (f = []); ++p < A; ) {
          var T = e[p];
          r > 0 && o(T) ? r > 1 ? zt(T, r - 1, o, u, f) : br(f, T) : u || (f[f.length] = T);
        }
        return f;
      }
      var js = wf(), Vc = wf(!0);
      function Hn(e, r) {
        return e && js(e, r, Ft);
      }
      function $s(e, r) {
        return e && Vc(e, r, Ft);
      }
      function so(e, r) {
        return yr(r, function(o) {
          return ur(e[o]);
        });
      }
      function Gr(e, r) {
        r = xr(r, e);
        for (var o = 0, u = r.length; e != null && o < u; )
          e = e[$n(r[o++])];
        return o && o == u ? e : i;
      }
      function Kc(e, r, o) {
        var u = r(e);
        return xe(e) ? u : br(u, o(e));
      }
      function Yt(e) {
        return e == null ? e === i ? Z : lt : jr && jr in at(e) ? Hg(e) : ty(e);
      }
      function qs(e, r) {
        return e > r;
      }
      function sg(e, r) {
        return e != null && Je.call(e, r);
      }
      function ug(e, r) {
        return e != null && r in at(e);
      }
      function lg(e, r, o) {
        return e >= jt(r, o) && e < Rt(r, o);
      }
      function Ys(e, r, o) {
        for (var u = o ? Ss : Ha, f = e[0].length, p = e.length, A = p, T = I(p), L = 1 / 0, j = []; A--; ) {
          var $ = e[A];
          A && r && ($ = mt($, ln(r))), L = jt($.length, L), T[A] = !o && (r || f >= 120 && $.length >= 120) ? new qr(A && $) : i;
        }
        $ = e[0];
        var Q = -1, re = T[0];
        e:
          for (; ++Q < f && j.length < L; ) {
            var ce = $[Q], ve = r ? r(ce) : ce;
            if (ce = o || ce !== 0 ? ce : 0, !(re ? Xi(re, ve) : u(j, ve, o))) {
              for (A = p; --A; ) {
                var De = T[A];
                if (!(De ? Xi(De, ve) : u(e[A], ve, o)))
                  continue e;
              }
              re && re.push(ve), j.push(ce);
            }
          }
        return j;
      }
      function cg(e, r, o, u) {
        return Hn(e, function(f, p, A) {
          r(u, o(f), p, A);
        }), u;
      }
      function aa(e, r, o) {
        r = xr(r, e), e = Ff(e, r);
        var u = e == null ? e : e[$n(On(r))];
        return u == null ? i : un(u, e, o);
      }
      function Qc(e) {
        return At(e) && Yt(e) == J;
      }
      function fg(e) {
        return At(e) && Yt(e) == Ie;
      }
      function hg(e) {
        return At(e) && Yt(e) == Pe;
      }
      function oa(e, r, o, u, f) {
        return e === r ? !0 : e == null || r == null || !At(e) && !At(r) ? e !== e && r !== r : dg(e, r, o, u, oa, f);
      }
      function dg(e, r, o, u, f, p) {
        var A = xe(e), T = xe(r), L = A ? V : $t(e), j = T ? V : $t(r);
        L = L == J ? ct : L, j = j == J ? ct : j;
        var $ = L == ct, Q = j == ct, re = L == j;
        if (re && Cr(e)) {
          if (!Cr(r))
            return !1;
          A = !0, $ = !1;
        }
        if (re && !$)
          return p || (p = new Mn()), A || xi(e) ? Rf(e, r, o, u, f, p) : Ug(e, r, L, o, u, f, p);
        if (!(o & w)) {
          var ce = $ && Je.call(e, "__wrapped__"), ve = Q && Je.call(r, "__wrapped__");
          if (ce || ve) {
            var De = ce ? e.value() : e, me = ve ? r.value() : r;
            return p || (p = new Mn()), f(De, me, o, u, p);
          }
        }
        return re ? (p || (p = new Mn()), zg(e, r, o, u, f, p)) : !1;
      }
      function pg(e) {
        return At(e) && $t(e) == be;
      }
      function Gs(e, r, o, u) {
        var f = o.length, p = f, A = !u;
        if (e == null)
          return !p;
        for (e = at(e); f--; ) {
          var T = o[f];
          if (A && T[2] ? T[1] !== e[T[0]] : !(T[0] in e))
            return !1;
        }
        for (; ++f < p; ) {
          T = o[f];
          var L = T[0], j = e[L], $ = T[1];
          if (A && T[2]) {
            if (j === i && !(L in e))
              return !1;
          } else {
            var Q = new Mn();
            if (u)
              var re = u(j, $, L, e, r, Q);
            if (!(re === i ? oa($, j, w | E, u, Q) : re))
              return !1;
          }
        }
        return !0;
      }
      function Xc(e) {
        if (!bt(e) || Qg(e))
          return !1;
        var r = ur(e) ? pm : St;
        return r.test(Kr(e));
      }
      function vg(e) {
        return At(e) && Yt(e) == It;
      }
      function mg(e) {
        return At(e) && $t(e) == tt;
      }
      function gg(e) {
        return At(e) && Oo(e.length) && !!ft[Yt(e)];
      }
      function Jc(e) {
        return typeof e == "function" ? e : e == null ? an : typeof e == "object" ? xe(e) ? tf(e[0], e[1]) : ef(e) : _h(e);
      }
      function Vs(e) {
        if (!la(e))
          return wm(e);
        var r = [];
        for (var o in at(e))
          Je.call(e, o) && o != "constructor" && r.push(o);
        return r;
      }
      function yg(e) {
        if (!bt(e))
          return ey(e);
        var r = la(e), o = [];
        for (var u in e)
          u == "constructor" && (r || !Je.call(e, u)) || o.push(u);
        return o;
      }
      function Ks(e, r) {
        return e < r;
      }
      function Zc(e, r) {
        var o = -1, u = nn(e) ? I(e.length) : [];
        return Ar(e, function(f, p, A) {
          u[++o] = r(f, p, A);
        }), u;
      }
      function ef(e) {
        var r = cu(e);
        return r.length == 1 && r[0][2] ? Mf(r[0][0], r[0][1]) : function(o) {
          return o === e || Gs(o, e, r);
        };
      }
      function tf(e, r) {
        return hu(e) && If(r) ? Mf($n(e), r) : function(o) {
          var u = Au(o, e);
          return u === i && u === r ? Eu(o, e) : oa(r, u, w | E);
        };
      }
      function uo(e, r, o, u, f) {
        e !== r && js(r, function(p, A) {
          if (f || (f = new Mn()), bt(p))
            bg(e, r, A, o, uo, u, f);
          else {
            var T = u ? u(pu(e, A), p, A + "", e, r, f) : i;
            T === i && (T = p), zs(e, A, T);
          }
        }, rn);
      }
      function bg(e, r, o, u, f, p, A) {
        var T = pu(e, o), L = pu(r, o), j = A.get(L);
        if (j) {
          zs(e, o, j);
          return;
        }
        var $ = p ? p(T, L, o + "", e, r, A) : i, Q = $ === i;
        if (Q) {
          var re = xe(L), ce = !re && Cr(L), ve = !re && !ce && xi(L);
          $ = L, re || ce || ve ? xe(T) ? $ = T : Ot(T) ? $ = tn(T) : ce ? (Q = !1, $ = pf(L, !0)) : ve ? (Q = !1, $ = vf(L, !0)) : $ = [] : fa(L) || Qr(L) ? ($ = T, Qr(T) ? $ = fh(T) : (!bt(T) || ur(T)) && ($ = Nf(L))) : Q = !1;
        }
        Q && (A.set(L, $), f($, L, u, p, A), A.delete(L)), zs(e, o, $);
      }
      function nf(e, r) {
        var o = e.length;
        if (o)
          return r += r < 0 ? o : 0, sr(r, o) ? e[r] : i;
      }
      function rf(e, r, o) {
        r.length ? r = mt(r, function(p) {
          return xe(p) ? function(A) {
            return Gr(A, p.length === 1 ? p[0] : p);
          } : p;
        }) : r = [an];
        var u = -1;
        r = mt(r, ln(pe()));
        var f = Zc(e, function(p, A, T) {
          var L = mt(r, function(j) {
            return j(p);
          });
          return { criteria: L, index: ++u, value: p };
        });
        return Yv(f, function(p, A) {
          return Pg(p, A, o);
        });
      }
      function wg(e, r) {
        return af(e, r, function(o, u) {
          return Eu(e, u);
        });
      }
      function af(e, r, o) {
        for (var u = -1, f = r.length, p = {}; ++u < f; ) {
          var A = r[u], T = Gr(e, A);
          o(T, A) && sa(p, xr(A, e), T);
        }
        return p;
      }
      function _g(e) {
        return function(r) {
          return Gr(r, e);
        };
      }
      function Qs(e, r, o, u) {
        var f = u ? qv : di, p = -1, A = r.length, T = e;
        for (e === r && (r = tn(r)), o && (T = mt(e, ln(o))); ++p < A; )
          for (var L = 0, j = r[p], $ = o ? o(j) : j; (L = f(T, $, L, u)) > -1; )
            T !== e && Ja.call(T, L, 1), Ja.call(e, L, 1);
        return e;
      }
      function of(e, r) {
        for (var o = e ? r.length : 0, u = o - 1; o--; ) {
          var f = r[o];
          if (o == u || f !== p) {
            var p = f;
            sr(f) ? Ja.call(e, f, 1) : eu(e, f);
          }
        }
        return e;
      }
      function Xs(e, r) {
        return e + to(Wc() * (r - e + 1));
      }
      function Ag(e, r, o, u) {
        for (var f = -1, p = Rt(eo((r - e) / (o || 1)), 0), A = I(p); p--; )
          A[u ? p : ++f] = e, e += o;
        return A;
      }
      function Js(e, r) {
        var o = "";
        if (!e || r < 1 || r > m)
          return o;
        do
          r % 2 && (o += e), r = to(r / 2), r && (e += e);
        while (r);
        return o;
      }
      function Le(e, r) {
        return vu(kf(e, r, an), e + "");
      }
      function Eg(e) {
        return Hc(Oi(e));
      }
      function xg(e, r) {
        var o = Oi(e);
        return bo(o, Yr(r, 0, o.length));
      }
      function sa(e, r, o, u) {
        if (!bt(e))
          return e;
        r = xr(r, e);
        for (var f = -1, p = r.length, A = p - 1, T = e; T != null && ++f < p; ) {
          var L = $n(r[f]), j = o;
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return e;
          if (f != A) {
            var $ = T[L];
            j = u ? u($, L, T) : i, j === i && (j = bt($) ? $ : sr(r[f + 1]) ? [] : {});
          }
          ra(T, L, j), T = T[L];
        }
        return e;
      }
      var sf = no ? function(e, r) {
        return no.set(e, r), e;
      } : an, Og = Za ? function(e, r) {
        return Za(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ou(r),
          writable: !0
        });
      } : an;
      function Cg(e) {
        return bo(Oi(e));
      }
      function xn(e, r, o) {
        var u = -1, f = e.length;
        r < 0 && (r = -r > f ? 0 : f + r), o = o > f ? f : o, o < 0 && (o += f), f = r > o ? 0 : o - r >>> 0, r >>>= 0;
        for (var p = I(f); ++u < f; )
          p[u] = e[u + r];
        return p;
      }
      function Tg(e, r) {
        var o;
        return Ar(e, function(u, f, p) {
          return o = r(u, f, p), !o;
        }), !!o;
      }
      function lo(e, r, o) {
        var u = 0, f = e == null ? u : e.length;
        if (typeof r == "number" && r === r && f <= k) {
          for (; u < f; ) {
            var p = u + f >>> 1, A = e[p];
            A !== null && !fn(A) && (o ? A <= r : A < r) ? u = p + 1 : f = p;
          }
          return f;
        }
        return Zs(e, r, an, o);
      }
      function Zs(e, r, o, u) {
        var f = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        r = o(r);
        for (var A = r !== r, T = r === null, L = fn(r), j = r === i; f < p; ) {
          var $ = to((f + p) / 2), Q = o(e[$]), re = Q !== i, ce = Q === null, ve = Q === Q, De = fn(Q);
          if (A)
            var me = u || ve;
          else
            j ? me = ve && (u || re) : T ? me = ve && re && (u || !ce) : L ? me = ve && re && !ce && (u || !De) : ce || De ? me = !1 : me = u ? Q <= r : Q < r;
          me ? f = $ + 1 : p = $;
        }
        return jt(p, N);
      }
      function uf(e, r) {
        for (var o = -1, u = e.length, f = 0, p = []; ++o < u; ) {
          var A = e[o], T = r ? r(A) : A;
          if (!o || !kn(T, L)) {
            var L = T;
            p[f++] = A === 0 ? 0 : A;
          }
        }
        return p;
      }
      function lf(e) {
        return typeof e == "number" ? e : fn(e) ? S : +e;
      }
      function cn(e) {
        if (typeof e == "string")
          return e;
        if (xe(e))
          return mt(e, cn) + "";
        if (fn(e))
          return Uc ? Uc.call(e) : "";
        var r = e + "";
        return r == "0" && 1 / e == -qe ? "-0" : r;
      }
      function Er(e, r, o) {
        var u = -1, f = Ha, p = e.length, A = !0, T = [], L = T;
        if (o)
          A = !1, f = Ss;
        else if (p >= s) {
          var j = r ? null : Bg(e);
          if (j)
            return $a(j);
          A = !1, f = Xi, L = new qr();
        } else
          L = r ? [] : T;
        e:
          for (; ++u < p; ) {
            var $ = e[u], Q = r ? r($) : $;
            if ($ = o || $ !== 0 ? $ : 0, A && Q === Q) {
              for (var re = L.length; re--; )
                if (L[re] === Q)
                  continue e;
              r && L.push(Q), T.push($);
            } else
              f(L, Q, o) || (L !== T && L.push(Q), T.push($));
          }
        return T;
      }
      function eu(e, r) {
        return r = xr(r, e), e = Ff(e, r), e == null || delete e[$n(On(r))];
      }
      function cf(e, r, o, u) {
        return sa(e, r, o(Gr(e, r)), u);
      }
      function co(e, r, o, u) {
        for (var f = e.length, p = u ? f : -1; (u ? p-- : ++p < f) && r(e[p], p, e); )
          ;
        return o ? xn(e, u ? 0 : p, u ? p + 1 : f) : xn(e, u ? p + 1 : 0, u ? f : p);
      }
      function ff(e, r) {
        var o = e;
        return o instanceof ke && (o = o.value()), Ds(r, function(u, f) {
          return f.func.apply(f.thisArg, br([u], f.args));
        }, o);
      }
      function tu(e, r, o) {
        var u = e.length;
        if (u < 2)
          return u ? Er(e[0]) : [];
        for (var f = -1, p = I(u); ++f < u; )
          for (var A = e[f], T = -1; ++T < u; )
            T != f && (p[f] = ia(p[f] || A, e[T], r, o));
        return Er(zt(p, 1), r, o);
      }
      function hf(e, r, o) {
        for (var u = -1, f = e.length, p = r.length, A = {}; ++u < f; ) {
          var T = u < p ? r[u] : i;
          o(A, e[u], T);
        }
        return A;
      }
      function nu(e) {
        return Ot(e) ? e : [];
      }
      function ru(e) {
        return typeof e == "function" ? e : an;
      }
      function xr(e, r) {
        return xe(e) ? e : hu(e, r) ? [e] : zf(Ke(e));
      }
      var Sg = Le;
      function Or(e, r, o) {
        var u = e.length;
        return o = o === i ? u : o, !r && o >= u ? e : xn(e, r, o);
      }
      var df = vm || function(e) {
        return Ut.clearTimeout(e);
      };
      function pf(e, r) {
        if (r)
          return e.slice();
        var o = e.length, u = Ic ? Ic(o) : new e.constructor(o);
        return e.copy(u), u;
      }
      function iu(e) {
        var r = new e.constructor(e.byteLength);
        return new Qa(r).set(new Qa(e)), r;
      }
      function Dg(e, r) {
        var o = r ? iu(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function Rg(e) {
        var r = new e.constructor(e.source, Te.exec(e));
        return r.lastIndex = e.lastIndex, r;
      }
      function Lg(e) {
        return na ? at(na.call(e)) : {};
      }
      function vf(e, r) {
        var o = r ? iu(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function mf(e, r) {
        if (e !== r) {
          var o = e !== i, u = e === null, f = e === e, p = fn(e), A = r !== i, T = r === null, L = r === r, j = fn(r);
          if (!T && !j && !p && e > r || p && A && L && !T && !j || u && A && L || !o && L || !f)
            return 1;
          if (!u && !p && !j && e < r || j && o && f && !u && !p || T && o && f || !A && f || !L)
            return -1;
        }
        return 0;
      }
      function Pg(e, r, o) {
        for (var u = -1, f = e.criteria, p = r.criteria, A = f.length, T = o.length; ++u < A; ) {
          var L = mf(f[u], p[u]);
          if (L) {
            if (u >= T)
              return L;
            var j = o[u];
            return L * (j == "desc" ? -1 : 1);
          }
        }
        return e.index - r.index;
      }
      function gf(e, r, o, u) {
        for (var f = -1, p = e.length, A = o.length, T = -1, L = r.length, j = Rt(p - A, 0), $ = I(L + j), Q = !u; ++T < L; )
          $[T] = r[T];
        for (; ++f < A; )
          (Q || f < p) && ($[o[f]] = e[f]);
        for (; j--; )
          $[T++] = e[f++];
        return $;
      }
      function yf(e, r, o, u) {
        for (var f = -1, p = e.length, A = -1, T = o.length, L = -1, j = r.length, $ = Rt(p - T, 0), Q = I($ + j), re = !u; ++f < $; )
          Q[f] = e[f];
        for (var ce = f; ++L < j; )
          Q[ce + L] = r[L];
        for (; ++A < T; )
          (re || f < p) && (Q[ce + o[A]] = e[f++]);
        return Q;
      }
      function tn(e, r) {
        var o = -1, u = e.length;
        for (r || (r = I(u)); ++o < u; )
          r[o] = e[o];
        return r;
      }
      function jn(e, r, o, u) {
        var f = !o;
        o || (o = {});
        for (var p = -1, A = r.length; ++p < A; ) {
          var T = r[p], L = u ? u(o[T], e[T], T, o, e) : i;
          L === i && (L = e[T]), f ? ir(o, T, L) : ra(o, T, L);
        }
        return o;
      }
      function Ng(e, r) {
        return jn(e, fu(e), r);
      }
      function Ig(e, r) {
        return jn(e, Lf(e), r);
      }
      function fo(e, r) {
        return function(o, u) {
          var f = xe(o) ? Wv : ng, p = r ? r() : {};
          return f(o, e, pe(u, 2), p);
        };
      }
      function _i(e) {
        return Le(function(r, o) {
          var u = -1, f = o.length, p = f > 1 ? o[f - 1] : i, A = f > 2 ? o[2] : i;
          for (p = e.length > 3 && typeof p == "function" ? (f--, p) : i, A && Gt(o[0], o[1], A) && (p = f < 3 ? i : p, f = 1), r = at(r); ++u < f; ) {
            var T = o[u];
            T && e(r, T, u, p);
          }
          return r;
        });
      }
      function bf(e, r) {
        return function(o, u) {
          if (o == null)
            return o;
          if (!nn(o))
            return e(o, u);
          for (var f = o.length, p = r ? f : -1, A = at(o); (r ? p-- : ++p < f) && u(A[p], p, A) !== !1; )
            ;
          return o;
        };
      }
      function wf(e) {
        return function(r, o, u) {
          for (var f = -1, p = at(r), A = u(r), T = A.length; T--; ) {
            var L = A[e ? T : ++f];
            if (o(p[L], L, p) === !1)
              break;
          }
          return r;
        };
      }
      function Mg(e, r, o) {
        var u = r & O, f = ua(e);
        function p() {
          var A = this && this !== Ut && this instanceof p ? f : e;
          return A.apply(u ? o : this, arguments);
        }
        return p;
      }
      function _f(e) {
        return function(r) {
          r = Ke(r);
          var o = pi(r) ? In(r) : i, u = o ? o[0] : r.charAt(0), f = o ? Or(o, 1).join("") : r.slice(1);
          return u[e]() + f;
        };
      }
      function Ai(e) {
        return function(r) {
          return Ds(bh(yh(r).replace(Ov, "")), e, "");
        };
      }
      function ua(e) {
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return new e();
            case 1:
              return new e(r[0]);
            case 2:
              return new e(r[0], r[1]);
            case 3:
              return new e(r[0], r[1], r[2]);
            case 4:
              return new e(r[0], r[1], r[2], r[3]);
            case 5:
              return new e(r[0], r[1], r[2], r[3], r[4]);
            case 6:
              return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
            case 7:
              return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
          }
          var o = wi(e.prototype), u = e.apply(o, r);
          return bt(u) ? u : o;
        };
      }
      function kg(e, r, o) {
        var u = ua(e);
        function f() {
          for (var p = arguments.length, A = I(p), T = p, L = Ei(f); T--; )
            A[T] = arguments[T];
          var j = p < 3 && A[0] !== L && A[p - 1] !== L ? [] : wr(A, L);
          if (p -= j.length, p < o)
            return Cf(
              e,
              r,
              ho,
              f.placeholder,
              i,
              A,
              j,
              i,
              i,
              o - p
            );
          var $ = this && this !== Ut && this instanceof f ? u : e;
          return un($, this, A);
        }
        return f;
      }
      function Af(e) {
        return function(r, o, u) {
          var f = at(r);
          if (!nn(r)) {
            var p = pe(o, 3);
            r = Ft(r), o = function(T) {
              return p(f[T], T, f);
            };
          }
          var A = e(r, o, u);
          return A > -1 ? f[p ? r[A] : A] : i;
        };
      }
      function Ef(e) {
        return or(function(r) {
          var o = r.length, u = o, f = An.prototype.thru;
          for (e && r.reverse(); u--; ) {
            var p = r[u];
            if (typeof p != "function")
              throw new _n(c);
            if (f && !A && go(p) == "wrapper")
              var A = new An([], !0);
          }
          for (u = A ? u : o; ++u < o; ) {
            p = r[u];
            var T = go(p), L = T == "wrapper" ? lu(p) : i;
            L && du(L[0]) && L[1] == (de | M | ee | ie) && !L[4].length && L[9] == 1 ? A = A[go(L[0])].apply(A, L[3]) : A = p.length == 1 && du(p) ? A[T]() : A.thru(p);
          }
          return function() {
            var j = arguments, $ = j[0];
            if (A && j.length == 1 && xe($))
              return A.plant($).value();
            for (var Q = 0, re = o ? r[Q].apply(this, j) : $; ++Q < o; )
              re = r[Q].call(this, re);
            return re;
          };
        });
      }
      function ho(e, r, o, u, f, p, A, T, L, j) {
        var $ = r & de, Q = r & O, re = r & D, ce = r & (M | U), ve = r & fe, De = re ? i : ua(e);
        function me() {
          for (var Me = arguments.length, Ue = I(Me), hn = Me; hn--; )
            Ue[hn] = arguments[hn];
          if (ce)
            var Vt = Ei(me), dn = Vv(Ue, Vt);
          if (u && (Ue = gf(Ue, u, f, ce)), p && (Ue = yf(Ue, p, A, ce)), Me -= dn, ce && Me < j) {
            var Ct = wr(Ue, Vt);
            return Cf(
              e,
              r,
              ho,
              me.placeholder,
              o,
              Ue,
              Ct,
              T,
              L,
              j - Me
            );
          }
          var Fn = Q ? o : this, cr = re ? Fn[e] : e;
          return Me = Ue.length, T ? Ue = ny(Ue, T) : ve && Me > 1 && Ue.reverse(), $ && L < Me && (Ue.length = L), this && this !== Ut && this instanceof me && (cr = De || ua(cr)), cr.apply(Fn, Ue);
        }
        return me;
      }
      function xf(e, r) {
        return function(o, u) {
          return cg(o, e, r(u), {});
        };
      }
      function po(e, r) {
        return function(o, u) {
          var f;
          if (o === i && u === i)
            return r;
          if (o !== i && (f = o), u !== i) {
            if (f === i)
              return u;
            typeof o == "string" || typeof u == "string" ? (o = cn(o), u = cn(u)) : (o = lf(o), u = lf(u)), f = e(o, u);
          }
          return f;
        };
      }
      function au(e) {
        return or(function(r) {
          return r = mt(r, ln(pe())), Le(function(o) {
            var u = this;
            return e(r, function(f) {
              return un(f, u, o);
            });
          });
        });
      }
      function vo(e, r) {
        r = r === i ? " " : cn(r);
        var o = r.length;
        if (o < 2)
          return o ? Js(r, e) : r;
        var u = Js(r, eo(e / vi(r)));
        return pi(r) ? Or(In(u), 0, e).join("") : u.slice(0, e);
      }
      function Fg(e, r, o, u) {
        var f = r & O, p = ua(e);
        function A() {
          for (var T = -1, L = arguments.length, j = -1, $ = u.length, Q = I($ + L), re = this && this !== Ut && this instanceof A ? p : e; ++j < $; )
            Q[j] = u[j];
          for (; L--; )
            Q[j++] = arguments[++T];
          return un(re, f ? o : this, Q);
        }
        return A;
      }
      function Of(e) {
        return function(r, o, u) {
          return u && typeof u != "number" && Gt(r, o, u) && (o = u = i), r = lr(r), o === i ? (o = r, r = 0) : o = lr(o), u = u === i ? r < o ? 1 : -1 : lr(u), Ag(r, o, u, e);
        };
      }
      function mo(e) {
        return function(r, o) {
          return typeof r == "string" && typeof o == "string" || (r = Cn(r), o = Cn(o)), e(r, o);
        };
      }
      function Cf(e, r, o, u, f, p, A, T, L, j) {
        var $ = r & M, Q = $ ? A : i, re = $ ? i : A, ce = $ ? p : i, ve = $ ? i : p;
        r |= $ ? ee : oe, r &= ~($ ? oe : ee), r & B || (r &= ~(O | D));
        var De = [
          e,
          r,
          f,
          ce,
          Q,
          ve,
          re,
          T,
          L,
          j
        ], me = o.apply(i, De);
        return du(e) && Bf(me, De), me.placeholder = u, Wf(me, e, r);
      }
      function ou(e) {
        var r = Dt[e];
        return function(o, u) {
          if (o = Cn(o), u = u == null ? 0 : jt(Se(u), 292), u && Bc(o)) {
            var f = (Ke(o) + "e").split("e"), p = r(f[0] + "e" + (+f[1] + u));
            return f = (Ke(p) + "e").split("e"), +(f[0] + "e" + (+f[1] - u));
          }
          return r(o);
        };
      }
      var Bg = yi && 1 / $a(new yi([, -0]))[1] == qe ? function(e) {
        return new yi(e);
      } : Su;
      function Tf(e) {
        return function(r) {
          var o = $t(r);
          return o == be ? ks(r) : o == tt ? tm(r) : Gv(r, e(r));
        };
      }
      function ar(e, r, o, u, f, p, A, T) {
        var L = r & D;
        if (!L && typeof e != "function")
          throw new _n(c);
        var j = u ? u.length : 0;
        if (j || (r &= ~(ee | oe), u = f = i), A = A === i ? A : Rt(Se(A), 0), T = T === i ? T : Se(T), j -= f ? f.length : 0, r & oe) {
          var $ = u, Q = f;
          u = f = i;
        }
        var re = L ? i : lu(e), ce = [
          e,
          r,
          o,
          u,
          f,
          $,
          Q,
          p,
          A,
          T
        ];
        if (re && Zg(ce, re), e = ce[0], r = ce[1], o = ce[2], u = ce[3], f = ce[4], T = ce[9] = ce[9] === i ? L ? 0 : e.length : Rt(ce[9] - j, 0), !T && r & (M | U) && (r &= ~(M | U)), !r || r == O)
          var ve = Mg(e, r, o);
        else
          r == M || r == U ? ve = kg(e, r, T) : (r == ee || r == (O | ee)) && !f.length ? ve = Fg(e, r, o, u) : ve = ho.apply(i, ce);
        var De = re ? sf : Bf;
        return Wf(De(ve, ce), e, r);
      }
      function Sf(e, r, o, u) {
        return e === i || kn(e, gi[o]) && !Je.call(u, o) ? r : e;
      }
      function Df(e, r, o, u, f, p) {
        return bt(e) && bt(r) && (p.set(r, e), uo(e, r, i, Df, p), p.delete(r)), e;
      }
      function Wg(e) {
        return fa(e) ? i : e;
      }
      function Rf(e, r, o, u, f, p) {
        var A = o & w, T = e.length, L = r.length;
        if (T != L && !(A && L > T))
          return !1;
        var j = p.get(e), $ = p.get(r);
        if (j && $)
          return j == r && $ == e;
        var Q = -1, re = !0, ce = o & E ? new qr() : i;
        for (p.set(e, r), p.set(r, e); ++Q < T; ) {
          var ve = e[Q], De = r[Q];
          if (u)
            var me = A ? u(De, ve, Q, r, e, p) : u(ve, De, Q, e, r, p);
          if (me !== i) {
            if (me)
              continue;
            re = !1;
            break;
          }
          if (ce) {
            if (!Rs(r, function(Me, Ue) {
              if (!Xi(ce, Ue) && (ve === Me || f(ve, Me, o, u, p)))
                return ce.push(Ue);
            })) {
              re = !1;
              break;
            }
          } else if (!(ve === De || f(ve, De, o, u, p))) {
            re = !1;
            break;
          }
        }
        return p.delete(e), p.delete(r), re;
      }
      function Ug(e, r, o, u, f, p, A) {
        switch (o) {
          case Ye:
            if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
              return !1;
            e = e.buffer, r = r.buffer;
          case Ie:
            return !(e.byteLength != r.byteLength || !p(new Qa(e), new Qa(r)));
          case se:
          case Pe:
          case yt:
            return kn(+e, +r);
          case Ee:
            return e.name == r.name && e.message == r.message;
          case It:
          case H:
            return e == r + "";
          case be:
            var T = ks;
          case tt:
            var L = u & w;
            if (T || (T = $a), e.size != r.size && !L)
              return !1;
            var j = A.get(e);
            if (j)
              return j == r;
            u |= E, A.set(e, r);
            var $ = Rf(T(e), T(r), u, f, p, A);
            return A.delete(e), $;
          case F:
            if (na)
              return na.call(e) == na.call(r);
        }
        return !1;
      }
      function zg(e, r, o, u, f, p) {
        var A = o & w, T = su(e), L = T.length, j = su(r), $ = j.length;
        if (L != $ && !A)
          return !1;
        for (var Q = L; Q--; ) {
          var re = T[Q];
          if (!(A ? re in r : Je.call(r, re)))
            return !1;
        }
        var ce = p.get(e), ve = p.get(r);
        if (ce && ve)
          return ce == r && ve == e;
        var De = !0;
        p.set(e, r), p.set(r, e);
        for (var me = A; ++Q < L; ) {
          re = T[Q];
          var Me = e[re], Ue = r[re];
          if (u)
            var hn = A ? u(Ue, Me, re, r, e, p) : u(Me, Ue, re, e, r, p);
          if (!(hn === i ? Me === Ue || f(Me, Ue, o, u, p) : hn)) {
            De = !1;
            break;
          }
          me || (me = re == "constructor");
        }
        if (De && !me) {
          var Vt = e.constructor, dn = r.constructor;
          Vt != dn && "constructor" in e && "constructor" in r && !(typeof Vt == "function" && Vt instanceof Vt && typeof dn == "function" && dn instanceof dn) && (De = !1);
        }
        return p.delete(e), p.delete(r), De;
      }
      function or(e) {
        return vu(kf(e, i, qf), e + "");
      }
      function su(e) {
        return Kc(e, Ft, fu);
      }
      function uu(e) {
        return Kc(e, rn, Lf);
      }
      var lu = no ? function(e) {
        return no.get(e);
      } : Su;
      function go(e) {
        for (var r = e.name + "", o = bi[r], u = Je.call(bi, r) ? o.length : 0; u--; ) {
          var f = o[u], p = f.func;
          if (p == null || p == e)
            return f.name;
        }
        return r;
      }
      function Ei(e) {
        var r = Je.call(d, "placeholder") ? d : e;
        return r.placeholder;
      }
      function pe() {
        var e = d.iteratee || Cu;
        return e = e === Cu ? Jc : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function yo(e, r) {
        var o = e.__data__;
        return Kg(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
      }
      function cu(e) {
        for (var r = Ft(e), o = r.length; o--; ) {
          var u = r[o], f = e[u];
          r[o] = [u, f, If(f)];
        }
        return r;
      }
      function Vr(e, r) {
        var o = Jv(e, r);
        return Xc(o) ? o : i;
      }
      function Hg(e) {
        var r = Je.call(e, jr), o = e[jr];
        try {
          e[jr] = i;
          var u = !0;
        } catch {
        }
        var f = Va.call(e);
        return u && (r ? e[jr] = o : delete e[jr]), f;
      }
      var fu = Bs ? function(e) {
        return e == null ? [] : (e = at(e), yr(Bs(e), function(r) {
          return kc.call(e, r);
        }));
      } : Du, Lf = Bs ? function(e) {
        for (var r = []; e; )
          br(r, fu(e)), e = Xa(e);
        return r;
      } : Du, $t = Yt;
      (Ws && $t(new Ws(new ArrayBuffer(1))) != Ye || Zi && $t(new Zi()) != be || Us && $t(Us.resolve()) != pt || yi && $t(new yi()) != tt || ea && $t(new ea()) != ne) && ($t = function(e) {
        var r = Yt(e), o = r == ct ? e.constructor : i, u = o ? Kr(o) : "";
        if (u)
          switch (u) {
            case xm:
              return Ye;
            case Om:
              return be;
            case Cm:
              return pt;
            case Tm:
              return tt;
            case Sm:
              return ne;
          }
        return r;
      });
      function jg(e, r, o) {
        for (var u = -1, f = o.length; ++u < f; ) {
          var p = o[u], A = p.size;
          switch (p.type) {
            case "drop":
              e += A;
              break;
            case "dropRight":
              r -= A;
              break;
            case "take":
              r = jt(r, e + A);
              break;
            case "takeRight":
              e = Rt(e, r - A);
              break;
          }
        }
        return { start: e, end: r };
      }
      function $g(e) {
        var r = e.match(Zt);
        return r ? r[1].split(gr) : [];
      }
      function Pf(e, r, o) {
        r = xr(r, e);
        for (var u = -1, f = r.length, p = !1; ++u < f; ) {
          var A = $n(r[u]);
          if (!(p = e != null && o(e, A)))
            break;
          e = e[A];
        }
        return p || ++u != f ? p : (f = e == null ? 0 : e.length, !!f && Oo(f) && sr(A, f) && (xe(e) || Qr(e)));
      }
      function qg(e) {
        var r = e.length, o = new e.constructor(r);
        return r && typeof e[0] == "string" && Je.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function Nf(e) {
        return typeof e.constructor == "function" && !la(e) ? wi(Xa(e)) : {};
      }
      function Yg(e, r, o) {
        var u = e.constructor;
        switch (r) {
          case Ie:
            return iu(e);
          case se:
          case Pe:
            return new u(+e);
          case Ye:
            return Dg(e, o);
          case rt:
          case le:
          case $e:
          case Et:
          case vt:
          case it:
          case Ve:
          case Wt:
          case Mt:
            return vf(e, o);
          case be:
            return new u();
          case yt:
          case H:
            return new u(e);
          case It:
            return Rg(e);
          case tt:
            return new u();
          case F:
            return Lg(e);
        }
      }
      function Gg(e, r) {
        var o = r.length;
        if (!o)
          return e;
        var u = o - 1;
        return r[u] = (o > 1 ? "& " : "") + r[u], r = r.join(o > 2 ? ", " : " "), e.replace(Jt, `{
/* [wrapped with ` + r + `] */
`);
      }
      function Vg(e) {
        return xe(e) || Qr(e) || !!(Fc && e && e[Fc]);
      }
      function sr(e, r) {
        var o = typeof e;
        return r = r ?? m, !!r && (o == "number" || o != "symbol" && zr.test(e)) && e > -1 && e % 1 == 0 && e < r;
      }
      function Gt(e, r, o) {
        if (!bt(o))
          return !1;
        var u = typeof r;
        return (u == "number" ? nn(o) && sr(r, o.length) : u == "string" && r in o) ? kn(o[r], e) : !1;
      }
      function hu(e, r) {
        if (xe(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || fn(e) ? !0 : kt.test(e) || !Qt.test(e) || r != null && e in at(r);
      }
      function Kg(e) {
        var r = typeof e;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
      }
      function du(e) {
        var r = go(e), o = d[r];
        if (typeof o != "function" || !(r in ke.prototype))
          return !1;
        if (e === o)
          return !0;
        var u = lu(o);
        return !!u && e === u[0];
      }
      function Qg(e) {
        return !!Nc && Nc in e;
      }
      var Xg = Ya ? ur : Ru;
      function la(e) {
        var r = e && e.constructor, o = typeof r == "function" && r.prototype || gi;
        return e === o;
      }
      function If(e) {
        return e === e && !bt(e);
      }
      function Mf(e, r) {
        return function(o) {
          return o == null ? !1 : o[e] === r && (r !== i || e in at(o));
        };
      }
      function Jg(e) {
        var r = Eo(e, function(u) {
          return o.size === y && o.clear(), u;
        }), o = r.cache;
        return r;
      }
      function Zg(e, r) {
        var o = e[1], u = r[1], f = o | u, p = f < (O | D | de), A = u == de && o == M || u == de && o == ie && e[7].length <= r[8] || u == (de | ie) && r[7].length <= r[8] && o == M;
        if (!(p || A))
          return e;
        u & O && (e[2] = r[2], f |= o & O ? 0 : B);
        var T = r[3];
        if (T) {
          var L = e[3];
          e[3] = L ? gf(L, T, r[4]) : T, e[4] = L ? wr(e[3], b) : r[4];
        }
        return T = r[5], T && (L = e[5], e[5] = L ? yf(L, T, r[6]) : T, e[6] = L ? wr(e[5], b) : r[6]), T = r[7], T && (e[7] = T), u & de && (e[8] = e[8] == null ? r[8] : jt(e[8], r[8])), e[9] == null && (e[9] = r[9]), e[0] = r[0], e[1] = f, e;
      }
      function ey(e) {
        var r = [];
        if (e != null)
          for (var o in at(e))
            r.push(o);
        return r;
      }
      function ty(e) {
        return Va.call(e);
      }
      function kf(e, r, o) {
        return r = Rt(r === i ? e.length - 1 : r, 0), function() {
          for (var u = arguments, f = -1, p = Rt(u.length - r, 0), A = I(p); ++f < p; )
            A[f] = u[r + f];
          f = -1;
          for (var T = I(r + 1); ++f < r; )
            T[f] = u[f];
          return T[r] = o(A), un(e, this, T);
        };
      }
      function Ff(e, r) {
        return r.length < 2 ? e : Gr(e, xn(r, 0, -1));
      }
      function ny(e, r) {
        for (var o = e.length, u = jt(r.length, o), f = tn(e); u--; ) {
          var p = r[u];
          e[u] = sr(p, o) ? f[p] : i;
        }
        return e;
      }
      function pu(e, r) {
        if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
          return e[r];
      }
      var Bf = Uf(sf), ca = gm || function(e, r) {
        return Ut.setTimeout(e, r);
      }, vu = Uf(Og);
      function Wf(e, r, o) {
        var u = r + "";
        return vu(e, Gg(u, ry($g(u), o)));
      }
      function Uf(e) {
        var r = 0, o = 0;
        return function() {
          var u = _m(), f = Qe - (u - o);
          if (o = u, f > 0) {
            if (++r >= Be)
              return arguments[0];
          } else
            r = 0;
          return e.apply(i, arguments);
        };
      }
      function bo(e, r) {
        var o = -1, u = e.length, f = u - 1;
        for (r = r === i ? u : r; ++o < r; ) {
          var p = Xs(o, f), A = e[p];
          e[p] = e[o], e[o] = A;
        }
        return e.length = r, e;
      }
      var zf = Jg(function(e) {
        var r = [];
        return e.charCodeAt(0) === 46 && r.push(""), e.replace(zn, function(o, u, f, p) {
          r.push(f ? p.replace(ci, "$1") : u || o);
        }), r;
      });
      function $n(e) {
        if (typeof e == "string" || fn(e))
          return e;
        var r = e + "";
        return r == "0" && 1 / e == -qe ? "-0" : r;
      }
      function Kr(e) {
        if (e != null) {
          try {
            return Ga.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function ry(e, r) {
        return wn(K, function(o) {
          var u = "_." + o[0];
          r & o[1] && !Ha(e, u) && e.push(u);
        }), e.sort();
      }
      function Hf(e) {
        if (e instanceof ke)
          return e.clone();
        var r = new An(e.__wrapped__, e.__chain__);
        return r.__actions__ = tn(e.__actions__), r.__index__ = e.__index__, r.__values__ = e.__values__, r;
      }
      function iy(e, r, o) {
        (o ? Gt(e, r, o) : r === i) ? r = 1 : r = Rt(Se(r), 0);
        var u = e == null ? 0 : e.length;
        if (!u || r < 1)
          return [];
        for (var f = 0, p = 0, A = I(eo(u / r)); f < u; )
          A[p++] = xn(e, f, f += r);
        return A;
      }
      function ay(e) {
        for (var r = -1, o = e == null ? 0 : e.length, u = 0, f = []; ++r < o; ) {
          var p = e[r];
          p && (f[u++] = p);
        }
        return f;
      }
      function oy() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var r = I(e - 1), o = arguments[0], u = e; u--; )
          r[u - 1] = arguments[u];
        return br(xe(o) ? tn(o) : [o], zt(r, 1));
      }
      var sy = Le(function(e, r) {
        return Ot(e) ? ia(e, zt(r, 1, Ot, !0)) : [];
      }), uy = Le(function(e, r) {
        var o = On(r);
        return Ot(o) && (o = i), Ot(e) ? ia(e, zt(r, 1, Ot, !0), pe(o, 2)) : [];
      }), ly = Le(function(e, r) {
        var o = On(r);
        return Ot(o) && (o = i), Ot(e) ? ia(e, zt(r, 1, Ot, !0), i, o) : [];
      });
      function cy(e, r, o) {
        var u = e == null ? 0 : e.length;
        return u ? (r = o || r === i ? 1 : Se(r), xn(e, r < 0 ? 0 : r, u)) : [];
      }
      function fy(e, r, o) {
        var u = e == null ? 0 : e.length;
        return u ? (r = o || r === i ? 1 : Se(r), r = u - r, xn(e, 0, r < 0 ? 0 : r)) : [];
      }
      function hy(e, r) {
        return e && e.length ? co(e, pe(r, 3), !0, !0) : [];
      }
      function dy(e, r) {
        return e && e.length ? co(e, pe(r, 3), !0) : [];
      }
      function py(e, r, o, u) {
        var f = e == null ? 0 : e.length;
        return f ? (o && typeof o != "number" && Gt(e, r, o) && (o = 0, u = f), og(e, r, o, u)) : [];
      }
      function jf(e, r, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var f = o == null ? 0 : Se(o);
        return f < 0 && (f = Rt(u + f, 0)), ja(e, pe(r, 3), f);
      }
      function $f(e, r, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var f = u - 1;
        return o !== i && (f = Se(o), f = o < 0 ? Rt(u + f, 0) : jt(f, u - 1)), ja(e, pe(r, 3), f, !0);
      }
      function qf(e) {
        var r = e == null ? 0 : e.length;
        return r ? zt(e, 1) : [];
      }
      function vy(e) {
        var r = e == null ? 0 : e.length;
        return r ? zt(e, qe) : [];
      }
      function my(e, r) {
        var o = e == null ? 0 : e.length;
        return o ? (r = r === i ? 1 : Se(r), zt(e, r)) : [];
      }
      function gy(e) {
        for (var r = -1, o = e == null ? 0 : e.length, u = {}; ++r < o; ) {
          var f = e[r];
          u[f[0]] = f[1];
        }
        return u;
      }
      function Yf(e) {
        return e && e.length ? e[0] : i;
      }
      function yy(e, r, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var f = o == null ? 0 : Se(o);
        return f < 0 && (f = Rt(u + f, 0)), di(e, r, f);
      }
      function by(e) {
        var r = e == null ? 0 : e.length;
        return r ? xn(e, 0, -1) : [];
      }
      var wy = Le(function(e) {
        var r = mt(e, nu);
        return r.length && r[0] === e[0] ? Ys(r) : [];
      }), _y = Le(function(e) {
        var r = On(e), o = mt(e, nu);
        return r === On(o) ? r = i : o.pop(), o.length && o[0] === e[0] ? Ys(o, pe(r, 2)) : [];
      }), Ay = Le(function(e) {
        var r = On(e), o = mt(e, nu);
        return r = typeof r == "function" ? r : i, r && o.pop(), o.length && o[0] === e[0] ? Ys(o, i, r) : [];
      });
      function Ey(e, r) {
        return e == null ? "" : bm.call(e, r);
      }
      function On(e) {
        var r = e == null ? 0 : e.length;
        return r ? e[r - 1] : i;
      }
      function xy(e, r, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var f = u;
        return o !== i && (f = Se(o), f = f < 0 ? Rt(u + f, 0) : jt(f, u - 1)), r === r ? rm(e, r, f) : ja(e, Oc, f, !0);
      }
      function Oy(e, r) {
        return e && e.length ? nf(e, Se(r)) : i;
      }
      var Cy = Le(Gf);
      function Gf(e, r) {
        return e && e.length && r && r.length ? Qs(e, r) : e;
      }
      function Ty(e, r, o) {
        return e && e.length && r && r.length ? Qs(e, r, pe(o, 2)) : e;
      }
      function Sy(e, r, o) {
        return e && e.length && r && r.length ? Qs(e, r, i, o) : e;
      }
      var Dy = or(function(e, r) {
        var o = e == null ? 0 : e.length, u = Hs(e, r);
        return of(e, mt(r, function(f) {
          return sr(f, o) ? +f : f;
        }).sort(mf)), u;
      });
      function Ry(e, r) {
        var o = [];
        if (!(e && e.length))
          return o;
        var u = -1, f = [], p = e.length;
        for (r = pe(r, 3); ++u < p; ) {
          var A = e[u];
          r(A, u, e) && (o.push(A), f.push(u));
        }
        return of(e, f), o;
      }
      function mu(e) {
        return e == null ? e : Em.call(e);
      }
      function Ly(e, r, o) {
        var u = e == null ? 0 : e.length;
        return u ? (o && typeof o != "number" && Gt(e, r, o) ? (r = 0, o = u) : (r = r == null ? 0 : Se(r), o = o === i ? u : Se(o)), xn(e, r, o)) : [];
      }
      function Py(e, r) {
        return lo(e, r);
      }
      function Ny(e, r, o) {
        return Zs(e, r, pe(o, 2));
      }
      function Iy(e, r) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var u = lo(e, r);
          if (u < o && kn(e[u], r))
            return u;
        }
        return -1;
      }
      function My(e, r) {
        return lo(e, r, !0);
      }
      function ky(e, r, o) {
        return Zs(e, r, pe(o, 2), !0);
      }
      function Fy(e, r) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var u = lo(e, r, !0) - 1;
          if (kn(e[u], r))
            return u;
        }
        return -1;
      }
      function By(e) {
        return e && e.length ? uf(e) : [];
      }
      function Wy(e, r) {
        return e && e.length ? uf(e, pe(r, 2)) : [];
      }
      function Uy(e) {
        var r = e == null ? 0 : e.length;
        return r ? xn(e, 1, r) : [];
      }
      function zy(e, r, o) {
        return e && e.length ? (r = o || r === i ? 1 : Se(r), xn(e, 0, r < 0 ? 0 : r)) : [];
      }
      function Hy(e, r, o) {
        var u = e == null ? 0 : e.length;
        return u ? (r = o || r === i ? 1 : Se(r), r = u - r, xn(e, r < 0 ? 0 : r, u)) : [];
      }
      function jy(e, r) {
        return e && e.length ? co(e, pe(r, 3), !1, !0) : [];
      }
      function $y(e, r) {
        return e && e.length ? co(e, pe(r, 3)) : [];
      }
      var qy = Le(function(e) {
        return Er(zt(e, 1, Ot, !0));
      }), Yy = Le(function(e) {
        var r = On(e);
        return Ot(r) && (r = i), Er(zt(e, 1, Ot, !0), pe(r, 2));
      }), Gy = Le(function(e) {
        var r = On(e);
        return r = typeof r == "function" ? r : i, Er(zt(e, 1, Ot, !0), i, r);
      });
      function Vy(e) {
        return e && e.length ? Er(e) : [];
      }
      function Ky(e, r) {
        return e && e.length ? Er(e, pe(r, 2)) : [];
      }
      function Qy(e, r) {
        return r = typeof r == "function" ? r : i, e && e.length ? Er(e, i, r) : [];
      }
      function gu(e) {
        if (!(e && e.length))
          return [];
        var r = 0;
        return e = yr(e, function(o) {
          if (Ot(o))
            return r = Rt(o.length, r), !0;
        }), Is(r, function(o) {
          return mt(e, Ls(o));
        });
      }
      function Vf(e, r) {
        if (!(e && e.length))
          return [];
        var o = gu(e);
        return r == null ? o : mt(o, function(u) {
          return un(r, i, u);
        });
      }
      var Xy = Le(function(e, r) {
        return Ot(e) ? ia(e, r) : [];
      }), Jy = Le(function(e) {
        return tu(yr(e, Ot));
      }), Zy = Le(function(e) {
        var r = On(e);
        return Ot(r) && (r = i), tu(yr(e, Ot), pe(r, 2));
      }), e0 = Le(function(e) {
        var r = On(e);
        return r = typeof r == "function" ? r : i, tu(yr(e, Ot), i, r);
      }), t0 = Le(gu);
      function n0(e, r) {
        return hf(e || [], r || [], ra);
      }
      function r0(e, r) {
        return hf(e || [], r || [], sa);
      }
      var i0 = Le(function(e) {
        var r = e.length, o = r > 1 ? e[r - 1] : i;
        return o = typeof o == "function" ? (e.pop(), o) : i, Vf(e, o);
      });
      function Kf(e) {
        var r = d(e);
        return r.__chain__ = !0, r;
      }
      function a0(e, r) {
        return r(e), e;
      }
      function wo(e, r) {
        return r(e);
      }
      var o0 = or(function(e) {
        var r = e.length, o = r ? e[0] : 0, u = this.__wrapped__, f = function(p) {
          return Hs(p, e);
        };
        return r > 1 || this.__actions__.length || !(u instanceof ke) || !sr(o) ? this.thru(f) : (u = u.slice(o, +o + (r ? 1 : 0)), u.__actions__.push({
          func: wo,
          args: [f],
          thisArg: i
        }), new An(u, this.__chain__).thru(function(p) {
          return r && !p.length && p.push(i), p;
        }));
      });
      function s0() {
        return Kf(this);
      }
      function u0() {
        return new An(this.value(), this.__chain__);
      }
      function l0() {
        this.__values__ === i && (this.__values__ = lh(this.value()));
        var e = this.__index__ >= this.__values__.length, r = e ? i : this.__values__[this.__index__++];
        return { done: e, value: r };
      }
      function c0() {
        return this;
      }
      function f0(e) {
        for (var r, o = this; o instanceof io; ) {
          var u = Hf(o);
          u.__index__ = 0, u.__values__ = i, r ? f.__wrapped__ = u : r = u;
          var f = u;
          o = o.__wrapped__;
        }
        return f.__wrapped__ = e, r;
      }
      function h0() {
        var e = this.__wrapped__;
        if (e instanceof ke) {
          var r = e;
          return this.__actions__.length && (r = new ke(this)), r = r.reverse(), r.__actions__.push({
            func: wo,
            args: [mu],
            thisArg: i
          }), new An(r, this.__chain__);
        }
        return this.thru(mu);
      }
      function d0() {
        return ff(this.__wrapped__, this.__actions__);
      }
      var p0 = fo(function(e, r, o) {
        Je.call(e, o) ? ++e[o] : ir(e, o, 1);
      });
      function v0(e, r, o) {
        var u = xe(e) ? Ec : ag;
        return o && Gt(e, r, o) && (r = i), u(e, pe(r, 3));
      }
      function m0(e, r) {
        var o = xe(e) ? yr : Gc;
        return o(e, pe(r, 3));
      }
      var g0 = Af(jf), y0 = Af($f);
      function b0(e, r) {
        return zt(_o(e, r), 1);
      }
      function w0(e, r) {
        return zt(_o(e, r), qe);
      }
      function _0(e, r, o) {
        return o = o === i ? 1 : Se(o), zt(_o(e, r), o);
      }
      function Qf(e, r) {
        var o = xe(e) ? wn : Ar;
        return o(e, pe(r, 3));
      }
      function Xf(e, r) {
        var o = xe(e) ? Uv : Yc;
        return o(e, pe(r, 3));
      }
      var A0 = fo(function(e, r, o) {
        Je.call(e, o) ? e[o].push(r) : ir(e, o, [r]);
      });
      function E0(e, r, o, u) {
        e = nn(e) ? e : Oi(e), o = o && !u ? Se(o) : 0;
        var f = e.length;
        return o < 0 && (o = Rt(f + o, 0)), Co(e) ? o <= f && e.indexOf(r, o) > -1 : !!f && di(e, r, o) > -1;
      }
      var x0 = Le(function(e, r, o) {
        var u = -1, f = typeof r == "function", p = nn(e) ? I(e.length) : [];
        return Ar(e, function(A) {
          p[++u] = f ? un(r, A, o) : aa(A, r, o);
        }), p;
      }), O0 = fo(function(e, r, o) {
        ir(e, o, r);
      });
      function _o(e, r) {
        var o = xe(e) ? mt : Zc;
        return o(e, pe(r, 3));
      }
      function C0(e, r, o, u) {
        return e == null ? [] : (xe(r) || (r = r == null ? [] : [r]), o = u ? i : o, xe(o) || (o = o == null ? [] : [o]), rf(e, r, o));
      }
      var T0 = fo(function(e, r, o) {
        e[o ? 0 : 1].push(r);
      }, function() {
        return [[], []];
      });
      function S0(e, r, o) {
        var u = xe(e) ? Ds : Tc, f = arguments.length < 3;
        return u(e, pe(r, 4), o, f, Ar);
      }
      function D0(e, r, o) {
        var u = xe(e) ? zv : Tc, f = arguments.length < 3;
        return u(e, pe(r, 4), o, f, Yc);
      }
      function R0(e, r) {
        var o = xe(e) ? yr : Gc;
        return o(e, xo(pe(r, 3)));
      }
      function L0(e) {
        var r = xe(e) ? Hc : Eg;
        return r(e);
      }
      function P0(e, r, o) {
        (o ? Gt(e, r, o) : r === i) ? r = 1 : r = Se(r);
        var u = xe(e) ? eg : xg;
        return u(e, r);
      }
      function N0(e) {
        var r = xe(e) ? tg : Cg;
        return r(e);
      }
      function I0(e) {
        if (e == null)
          return 0;
        if (nn(e))
          return Co(e) ? vi(e) : e.length;
        var r = $t(e);
        return r == be || r == tt ? e.size : Vs(e).length;
      }
      function M0(e, r, o) {
        var u = xe(e) ? Rs : Tg;
        return o && Gt(e, r, o) && (r = i), u(e, pe(r, 3));
      }
      var k0 = Le(function(e, r) {
        if (e == null)
          return [];
        var o = r.length;
        return o > 1 && Gt(e, r[0], r[1]) ? r = [] : o > 2 && Gt(r[0], r[1], r[2]) && (r = [r[0]]), rf(e, zt(r, 1), []);
      }), Ao = mm || function() {
        return Ut.Date.now();
      };
      function F0(e, r) {
        if (typeof r != "function")
          throw new _n(c);
        return e = Se(e), function() {
          if (--e < 1)
            return r.apply(this, arguments);
        };
      }
      function Jf(e, r, o) {
        return r = o ? i : r, r = e && r == null ? e.length : r, ar(e, de, i, i, i, i, r);
      }
      function Zf(e, r) {
        var o;
        if (typeof r != "function")
          throw new _n(c);
        return e = Se(e), function() {
          return --e > 0 && (o = r.apply(this, arguments)), e <= 1 && (r = i), o;
        };
      }
      var yu = Le(function(e, r, o) {
        var u = O;
        if (o.length) {
          var f = wr(o, Ei(yu));
          u |= ee;
        }
        return ar(e, u, r, o, f);
      }), eh = Le(function(e, r, o) {
        var u = O | D;
        if (o.length) {
          var f = wr(o, Ei(eh));
          u |= ee;
        }
        return ar(r, u, e, o, f);
      });
      function th(e, r, o) {
        r = o ? i : r;
        var u = ar(e, M, i, i, i, i, i, r);
        return u.placeholder = th.placeholder, u;
      }
      function nh(e, r, o) {
        r = o ? i : r;
        var u = ar(e, U, i, i, i, i, i, r);
        return u.placeholder = nh.placeholder, u;
      }
      function rh(e, r, o) {
        var u, f, p, A, T, L, j = 0, $ = !1, Q = !1, re = !0;
        if (typeof e != "function")
          throw new _n(c);
        r = Cn(r) || 0, bt(o) && ($ = !!o.leading, Q = "maxWait" in o, p = Q ? Rt(Cn(o.maxWait) || 0, r) : p, re = "trailing" in o ? !!o.trailing : re);
        function ce(Ct) {
          var Fn = u, cr = f;
          return u = f = i, j = Ct, A = e.apply(cr, Fn), A;
        }
        function ve(Ct) {
          return j = Ct, T = ca(Me, r), $ ? ce(Ct) : A;
        }
        function De(Ct) {
          var Fn = Ct - L, cr = Ct - j, Ah = r - Fn;
          return Q ? jt(Ah, p - cr) : Ah;
        }
        function me(Ct) {
          var Fn = Ct - L, cr = Ct - j;
          return L === i || Fn >= r || Fn < 0 || Q && cr >= p;
        }
        function Me() {
          var Ct = Ao();
          if (me(Ct))
            return Ue(Ct);
          T = ca(Me, De(Ct));
        }
        function Ue(Ct) {
          return T = i, re && u ? ce(Ct) : (u = f = i, A);
        }
        function hn() {
          T !== i && df(T), j = 0, u = L = f = T = i;
        }
        function Vt() {
          return T === i ? A : Ue(Ao());
        }
        function dn() {
          var Ct = Ao(), Fn = me(Ct);
          if (u = arguments, f = this, L = Ct, Fn) {
            if (T === i)
              return ve(L);
            if (Q)
              return df(T), T = ca(Me, r), ce(L);
          }
          return T === i && (T = ca(Me, r)), A;
        }
        return dn.cancel = hn, dn.flush = Vt, dn;
      }
      var B0 = Le(function(e, r) {
        return qc(e, 1, r);
      }), W0 = Le(function(e, r, o) {
        return qc(e, Cn(r) || 0, o);
      });
      function U0(e) {
        return ar(e, fe);
      }
      function Eo(e, r) {
        if (typeof e != "function" || r != null && typeof r != "function")
          throw new _n(c);
        var o = function() {
          var u = arguments, f = r ? r.apply(this, u) : u[0], p = o.cache;
          if (p.has(f))
            return p.get(f);
          var A = e.apply(this, u);
          return o.cache = p.set(f, A) || p, A;
        };
        return o.cache = new (Eo.Cache || rr)(), o;
      }
      Eo.Cache = rr;
      function xo(e) {
        if (typeof e != "function")
          throw new _n(c);
        return function() {
          var r = arguments;
          switch (r.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, r[0]);
            case 2:
              return !e.call(this, r[0], r[1]);
            case 3:
              return !e.call(this, r[0], r[1], r[2]);
          }
          return !e.apply(this, r);
        };
      }
      function z0(e) {
        return Zf(2, e);
      }
      var H0 = Sg(function(e, r) {
        r = r.length == 1 && xe(r[0]) ? mt(r[0], ln(pe())) : mt(zt(r, 1), ln(pe()));
        var o = r.length;
        return Le(function(u) {
          for (var f = -1, p = jt(u.length, o); ++f < p; )
            u[f] = r[f].call(this, u[f]);
          return un(e, this, u);
        });
      }), bu = Le(function(e, r) {
        var o = wr(r, Ei(bu));
        return ar(e, ee, i, r, o);
      }), ih = Le(function(e, r) {
        var o = wr(r, Ei(ih));
        return ar(e, oe, i, r, o);
      }), j0 = or(function(e, r) {
        return ar(e, ie, i, i, i, r);
      });
      function $0(e, r) {
        if (typeof e != "function")
          throw new _n(c);
        return r = r === i ? r : Se(r), Le(e, r);
      }
      function q0(e, r) {
        if (typeof e != "function")
          throw new _n(c);
        return r = r == null ? 0 : Rt(Se(r), 0), Le(function(o) {
          var u = o[r], f = Or(o, 0, r);
          return u && br(f, u), un(e, this, f);
        });
      }
      function Y0(e, r, o) {
        var u = !0, f = !0;
        if (typeof e != "function")
          throw new _n(c);
        return bt(o) && (u = "leading" in o ? !!o.leading : u, f = "trailing" in o ? !!o.trailing : f), rh(e, r, {
          leading: u,
          maxWait: r,
          trailing: f
        });
      }
      function G0(e) {
        return Jf(e, 1);
      }
      function V0(e, r) {
        return bu(ru(r), e);
      }
      function K0() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return xe(e) ? e : [e];
      }
      function Q0(e) {
        return En(e, _);
      }
      function X0(e, r) {
        return r = typeof r == "function" ? r : i, En(e, _, r);
      }
      function J0(e) {
        return En(e, v | _);
      }
      function Z0(e, r) {
        return r = typeof r == "function" ? r : i, En(e, v | _, r);
      }
      function eb(e, r) {
        return r == null || $c(e, r, Ft(r));
      }
      function kn(e, r) {
        return e === r || e !== e && r !== r;
      }
      var tb = mo(qs), nb = mo(function(e, r) {
        return e >= r;
      }), Qr = Qc(function() {
        return arguments;
      }()) ? Qc : function(e) {
        return At(e) && Je.call(e, "callee") && !kc.call(e, "callee");
      }, xe = I.isArray, rb = gc ? ln(gc) : fg;
      function nn(e) {
        return e != null && Oo(e.length) && !ur(e);
      }
      function Ot(e) {
        return At(e) && nn(e);
      }
      function ib(e) {
        return e === !0 || e === !1 || At(e) && Yt(e) == se;
      }
      var Cr = ym || Ru, ab = yc ? ln(yc) : hg;
      function ob(e) {
        return At(e) && e.nodeType === 1 && !fa(e);
      }
      function sb(e) {
        if (e == null)
          return !0;
        if (nn(e) && (xe(e) || typeof e == "string" || typeof e.splice == "function" || Cr(e) || xi(e) || Qr(e)))
          return !e.length;
        var r = $t(e);
        if (r == be || r == tt)
          return !e.size;
        if (la(e))
          return !Vs(e).length;
        for (var o in e)
          if (Je.call(e, o))
            return !1;
        return !0;
      }
      function ub(e, r) {
        return oa(e, r);
      }
      function lb(e, r, o) {
        o = typeof o == "function" ? o : i;
        var u = o ? o(e, r) : i;
        return u === i ? oa(e, r, i, o) : !!u;
      }
      function wu(e) {
        if (!At(e))
          return !1;
        var r = Yt(e);
        return r == Ee || r == Oe || typeof e.message == "string" && typeof e.name == "string" && !fa(e);
      }
      function cb(e) {
        return typeof e == "number" && Bc(e);
      }
      function ur(e) {
        if (!bt(e))
          return !1;
        var r = Yt(e);
        return r == Ne || r == ot || r == X || r == nt;
      }
      function ah(e) {
        return typeof e == "number" && e == Se(e);
      }
      function Oo(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= m;
      }
      function bt(e) {
        var r = typeof e;
        return e != null && (r == "object" || r == "function");
      }
      function At(e) {
        return e != null && typeof e == "object";
      }
      var oh = bc ? ln(bc) : pg;
      function fb(e, r) {
        return e === r || Gs(e, r, cu(r));
      }
      function hb(e, r, o) {
        return o = typeof o == "function" ? o : i, Gs(e, r, cu(r), o);
      }
      function db(e) {
        return sh(e) && e != +e;
      }
      function pb(e) {
        if (Xg(e))
          throw new Ae(l);
        return Xc(e);
      }
      function vb(e) {
        return e === null;
      }
      function mb(e) {
        return e == null;
      }
      function sh(e) {
        return typeof e == "number" || At(e) && Yt(e) == yt;
      }
      function fa(e) {
        if (!At(e) || Yt(e) != ct)
          return !1;
        var r = Xa(e);
        if (r === null)
          return !0;
        var o = Je.call(r, "constructor") && r.constructor;
        return typeof o == "function" && o instanceof o && Ga.call(o) == hm;
      }
      var _u = wc ? ln(wc) : vg;
      function gb(e) {
        return ah(e) && e >= -m && e <= m;
      }
      var uh = _c ? ln(_c) : mg;
      function Co(e) {
        return typeof e == "string" || !xe(e) && At(e) && Yt(e) == H;
      }
      function fn(e) {
        return typeof e == "symbol" || At(e) && Yt(e) == F;
      }
      var xi = Ac ? ln(Ac) : gg;
      function yb(e) {
        return e === i;
      }
      function bb(e) {
        return At(e) && $t(e) == ne;
      }
      function wb(e) {
        return At(e) && Yt(e) == ae;
      }
      var _b = mo(Ks), Ab = mo(function(e, r) {
        return e <= r;
      });
      function lh(e) {
        if (!e)
          return [];
        if (nn(e))
          return Co(e) ? In(e) : tn(e);
        if (Ji && e[Ji])
          return em(e[Ji]());
        var r = $t(e), o = r == be ? ks : r == tt ? $a : Oi;
        return o(e);
      }
      function lr(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Cn(e), e === qe || e === -qe) {
          var r = e < 0 ? -1 : 1;
          return r * x;
        }
        return e === e ? e : 0;
      }
      function Se(e) {
        var r = lr(e), o = r % 1;
        return r === r ? o ? r - o : r : 0;
      }
      function ch(e) {
        return e ? Yr(Se(e), 0, P) : 0;
      }
      function Cn(e) {
        if (typeof e == "number")
          return e;
        if (fn(e))
          return S;
        if (bt(e)) {
          var r = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = bt(r) ? r + "" : r;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Sc(e);
        var o = ge.test(e);
        return o || qt.test(e) ? Fv(e.slice(2), o ? 2 : 8) : st.test(e) ? S : +e;
      }
      function fh(e) {
        return jn(e, rn(e));
      }
      function Eb(e) {
        return e ? Yr(Se(e), -m, m) : e === 0 ? e : 0;
      }
      function Ke(e) {
        return e == null ? "" : cn(e);
      }
      var xb = _i(function(e, r) {
        if (la(r) || nn(r)) {
          jn(r, Ft(r), e);
          return;
        }
        for (var o in r)
          Je.call(r, o) && ra(e, o, r[o]);
      }), hh = _i(function(e, r) {
        jn(r, rn(r), e);
      }), To = _i(function(e, r, o, u) {
        jn(r, rn(r), e, u);
      }), Ob = _i(function(e, r, o, u) {
        jn(r, Ft(r), e, u);
      }), Cb = or(Hs);
      function Tb(e, r) {
        var o = wi(e);
        return r == null ? o : jc(o, r);
      }
      var Sb = Le(function(e, r) {
        e = at(e);
        var o = -1, u = r.length, f = u > 2 ? r[2] : i;
        for (f && Gt(r[0], r[1], f) && (u = 1); ++o < u; )
          for (var p = r[o], A = rn(p), T = -1, L = A.length; ++T < L; ) {
            var j = A[T], $ = e[j];
            ($ === i || kn($, gi[j]) && !Je.call(e, j)) && (e[j] = p[j]);
          }
        return e;
      }), Db = Le(function(e) {
        return e.push(i, Df), un(dh, i, e);
      });
      function Rb(e, r) {
        return xc(e, pe(r, 3), Hn);
      }
      function Lb(e, r) {
        return xc(e, pe(r, 3), $s);
      }
      function Pb(e, r) {
        return e == null ? e : js(e, pe(r, 3), rn);
      }
      function Nb(e, r) {
        return e == null ? e : Vc(e, pe(r, 3), rn);
      }
      function Ib(e, r) {
        return e && Hn(e, pe(r, 3));
      }
      function Mb(e, r) {
        return e && $s(e, pe(r, 3));
      }
      function kb(e) {
        return e == null ? [] : so(e, Ft(e));
      }
      function Fb(e) {
        return e == null ? [] : so(e, rn(e));
      }
      function Au(e, r, o) {
        var u = e == null ? i : Gr(e, r);
        return u === i ? o : u;
      }
      function Bb(e, r) {
        return e != null && Pf(e, r, sg);
      }
      function Eu(e, r) {
        return e != null && Pf(e, r, ug);
      }
      var Wb = xf(function(e, r, o) {
        r != null && typeof r.toString != "function" && (r = Va.call(r)), e[r] = o;
      }, Ou(an)), Ub = xf(function(e, r, o) {
        r != null && typeof r.toString != "function" && (r = Va.call(r)), Je.call(e, r) ? e[r].push(o) : e[r] = [o];
      }, pe), zb = Le(aa);
      function Ft(e) {
        return nn(e) ? zc(e) : Vs(e);
      }
      function rn(e) {
        return nn(e) ? zc(e, !0) : yg(e);
      }
      function Hb(e, r) {
        var o = {};
        return r = pe(r, 3), Hn(e, function(u, f, p) {
          ir(o, r(u, f, p), u);
        }), o;
      }
      function jb(e, r) {
        var o = {};
        return r = pe(r, 3), Hn(e, function(u, f, p) {
          ir(o, f, r(u, f, p));
        }), o;
      }
      var $b = _i(function(e, r, o) {
        uo(e, r, o);
      }), dh = _i(function(e, r, o, u) {
        uo(e, r, o, u);
      }), qb = or(function(e, r) {
        var o = {};
        if (e == null)
          return o;
        var u = !1;
        r = mt(r, function(p) {
          return p = xr(p, e), u || (u = p.length > 1), p;
        }), jn(e, uu(e), o), u && (o = En(o, v | C | _, Wg));
        for (var f = r.length; f--; )
          eu(o, r[f]);
        return o;
      });
      function Yb(e, r) {
        return ph(e, xo(pe(r)));
      }
      var Gb = or(function(e, r) {
        return e == null ? {} : wg(e, r);
      });
      function ph(e, r) {
        if (e == null)
          return {};
        var o = mt(uu(e), function(u) {
          return [u];
        });
        return r = pe(r), af(e, o, function(u, f) {
          return r(u, f[0]);
        });
      }
      function Vb(e, r, o) {
        r = xr(r, e);
        var u = -1, f = r.length;
        for (f || (f = 1, e = i); ++u < f; ) {
          var p = e == null ? i : e[$n(r[u])];
          p === i && (u = f, p = o), e = ur(p) ? p.call(e) : p;
        }
        return e;
      }
      function Kb(e, r, o) {
        return e == null ? e : sa(e, r, o);
      }
      function Qb(e, r, o, u) {
        return u = typeof u == "function" ? u : i, e == null ? e : sa(e, r, o, u);
      }
      var vh = Tf(Ft), mh = Tf(rn);
      function Xb(e, r, o) {
        var u = xe(e), f = u || Cr(e) || xi(e);
        if (r = pe(r, 4), o == null) {
          var p = e && e.constructor;
          f ? o = u ? new p() : [] : bt(e) ? o = ur(p) ? wi(Xa(e)) : {} : o = {};
        }
        return (f ? wn : Hn)(e, function(A, T, L) {
          return r(o, A, T, L);
        }), o;
      }
      function Jb(e, r) {
        return e == null ? !0 : eu(e, r);
      }
      function Zb(e, r, o) {
        return e == null ? e : cf(e, r, ru(o));
      }
      function ew(e, r, o, u) {
        return u = typeof u == "function" ? u : i, e == null ? e : cf(e, r, ru(o), u);
      }
      function Oi(e) {
        return e == null ? [] : Ms(e, Ft(e));
      }
      function tw(e) {
        return e == null ? [] : Ms(e, rn(e));
      }
      function nw(e, r, o) {
        return o === i && (o = r, r = i), o !== i && (o = Cn(o), o = o === o ? o : 0), r !== i && (r = Cn(r), r = r === r ? r : 0), Yr(Cn(e), r, o);
      }
      function rw(e, r, o) {
        return r = lr(r), o === i ? (o = r, r = 0) : o = lr(o), e = Cn(e), lg(e, r, o);
      }
      function iw(e, r, o) {
        if (o && typeof o != "boolean" && Gt(e, r, o) && (r = o = i), o === i && (typeof r == "boolean" ? (o = r, r = i) : typeof e == "boolean" && (o = e, e = i)), e === i && r === i ? (e = 0, r = 1) : (e = lr(e), r === i ? (r = e, e = 0) : r = lr(r)), e > r) {
          var u = e;
          e = r, r = u;
        }
        if (o || e % 1 || r % 1) {
          var f = Wc();
          return jt(e + f * (r - e + kv("1e-" + ((f + "").length - 1))), r);
        }
        return Xs(e, r);
      }
      var aw = Ai(function(e, r, o) {
        return r = r.toLowerCase(), e + (o ? gh(r) : r);
      });
      function gh(e) {
        return xu(Ke(e).toLowerCase());
      }
      function yh(e) {
        return e = Ke(e), e && e.replace(ws, Kv).replace(Cv, "");
      }
      function ow(e, r, o) {
        e = Ke(e), r = cn(r);
        var u = e.length;
        o = o === i ? u : Yr(Se(o), 0, u);
        var f = o;
        return o -= r.length, o >= 0 && e.slice(o, f) == r;
      }
      function sw(e) {
        return e = Ke(e), e && Xe.test(e) ? e.replace(we, Qv) : e;
      }
      function uw(e) {
        return e = Ke(e), e && Xt.test(e) ? e.replace(Nn, "\\$&") : e;
      }
      var lw = Ai(function(e, r, o) {
        return e + (o ? "-" : "") + r.toLowerCase();
      }), cw = Ai(function(e, r, o) {
        return e + (o ? " " : "") + r.toLowerCase();
      }), fw = _f("toLowerCase");
      function hw(e, r, o) {
        e = Ke(e), r = Se(r);
        var u = r ? vi(e) : 0;
        if (!r || u >= r)
          return e;
        var f = (r - u) / 2;
        return vo(to(f), o) + e + vo(eo(f), o);
      }
      function dw(e, r, o) {
        e = Ke(e), r = Se(r);
        var u = r ? vi(e) : 0;
        return r && u < r ? e + vo(r - u, o) : e;
      }
      function pw(e, r, o) {
        e = Ke(e), r = Se(r);
        var u = r ? vi(e) : 0;
        return r && u < r ? vo(r - u, o) + e : e;
      }
      function vw(e, r, o) {
        return o || r == null ? r = 0 : r && (r = +r), Am(Ke(e).replace(gn, ""), r || 0);
      }
      function mw(e, r, o) {
        return (o ? Gt(e, r, o) : r === i) ? r = 1 : r = Se(r), Js(Ke(e), r);
      }
      function gw() {
        var e = arguments, r = Ke(e[0]);
        return e.length < 3 ? r : r.replace(e[1], e[2]);
      }
      var yw = Ai(function(e, r, o) {
        return e + (o ? "_" : "") + r.toLowerCase();
      });
      function bw(e, r, o) {
        return o && typeof o != "number" && Gt(e, r, o) && (r = o = i), o = o === i ? P : o >>> 0, o ? (e = Ke(e), e && (typeof r == "string" || r != null && !_u(r)) && (r = cn(r), !r && pi(e)) ? Or(In(e), 0, o) : e.split(r, o)) : [];
      }
      var ww = Ai(function(e, r, o) {
        return e + (o ? " " : "") + xu(r);
      });
      function _w(e, r, o) {
        return e = Ke(e), o = o == null ? 0 : Yr(Se(o), 0, e.length), r = cn(r), e.slice(o, o + r.length) == r;
      }
      function Aw(e, r, o) {
        var u = d.templateSettings;
        o && Gt(e, r, o) && (r = i), e = Ke(e), r = To({}, r, u, Sf);
        var f = To({}, r.imports, u.imports, Sf), p = Ft(f), A = Ms(f, p), T, L, j = 0, $ = r.interpolate || fi, Q = "__p += '", re = Fs(
          (r.escape || fi).source + "|" + $.source + "|" + ($ === _t ? Qi : fi).source + "|" + (r.evaluate || fi).source + "|$",
          "g"
        ), ce = "//# sourceURL=" + (Je.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Lv + "]") + `
`;
        e.replace(re, function(me, Me, Ue, hn, Vt, dn) {
          return Ue || (Ue = hn), Q += e.slice(j, dn).replace(uv, Xv), Me && (T = !0, Q += `' +
__e(` + Me + `) +
'`), Vt && (L = !0, Q += `';
` + Vt + `;
__p += '`), Ue && (Q += `' +
((__t = (` + Ue + `)) == null ? '' : __t) +
'`), j = dn + me.length, me;
        }), Q += `';
`;
        var ve = Je.call(r, "variable") && r.variable;
        if (!ve)
          Q = `with (obj) {
` + Q + `
}
`;
        else if (en.test(ve))
          throw new Ae(h);
        Q = (L ? Q.replace(sn, "") : Q).replace(vn, "$1").replace(Pn, "$1;"), Q = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Q + `return __p
}`;
        var De = wh(function() {
          return Ge(p, ce + "return " + Q).apply(i, A);
        });
        if (De.source = Q, wu(De))
          throw De;
        return De;
      }
      function Ew(e) {
        return Ke(e).toLowerCase();
      }
      function xw(e) {
        return Ke(e).toUpperCase();
      }
      function Ow(e, r, o) {
        if (e = Ke(e), e && (o || r === i))
          return Sc(e);
        if (!e || !(r = cn(r)))
          return e;
        var u = In(e), f = In(r), p = Dc(u, f), A = Rc(u, f) + 1;
        return Or(u, p, A).join("");
      }
      function Cw(e, r, o) {
        if (e = Ke(e), e && (o || r === i))
          return e.slice(0, Pc(e) + 1);
        if (!e || !(r = cn(r)))
          return e;
        var u = In(e), f = Rc(u, In(r)) + 1;
        return Or(u, 0, f).join("");
      }
      function Tw(e, r, o) {
        if (e = Ke(e), e && (o || r === i))
          return e.replace(gn, "");
        if (!e || !(r = cn(r)))
          return e;
        var u = In(e), f = Dc(u, In(r));
        return Or(u, f).join("");
      }
      function Sw(e, r) {
        var o = Fe, u = Re;
        if (bt(r)) {
          var f = "separator" in r ? r.separator : f;
          o = "length" in r ? Se(r.length) : o, u = "omission" in r ? cn(r.omission) : u;
        }
        e = Ke(e);
        var p = e.length;
        if (pi(e)) {
          var A = In(e);
          p = A.length;
        }
        if (o >= p)
          return e;
        var T = o - vi(u);
        if (T < 1)
          return u;
        var L = A ? Or(A, 0, T).join("") : e.slice(0, T);
        if (f === i)
          return L + u;
        if (A && (T += L.length - T), _u(f)) {
          if (e.slice(T).search(f)) {
            var j, $ = L;
            for (f.global || (f = Fs(f.source, Ke(Te.exec(f)) + "g")), f.lastIndex = 0; j = f.exec($); )
              var Q = j.index;
            L = L.slice(0, Q === i ? T : Q);
          }
        } else if (e.indexOf(cn(f), T) != T) {
          var re = L.lastIndexOf(f);
          re > -1 && (L = L.slice(0, re));
        }
        return L + u;
      }
      function Dw(e) {
        return e = Ke(e), e && We.test(e) ? e.replace(mn, im) : e;
      }
      var Rw = Ai(function(e, r, o) {
        return e + (o ? " " : "") + r.toUpperCase();
      }), xu = _f("toUpperCase");
      function bh(e, r, o) {
        return e = Ke(e), r = o ? i : r, r === i ? Zv(e) ? sm(e) : $v(e) : e.match(r) || [];
      }
      var wh = Le(function(e, r) {
        try {
          return un(e, i, r);
        } catch (o) {
          return wu(o) ? o : new Ae(o);
        }
      }), Lw = or(function(e, r) {
        return wn(r, function(o) {
          o = $n(o), ir(e, o, yu(e[o], e));
        }), e;
      });
      function Pw(e) {
        var r = e == null ? 0 : e.length, o = pe();
        return e = r ? mt(e, function(u) {
          if (typeof u[1] != "function")
            throw new _n(c);
          return [o(u[0]), u[1]];
        }) : [], Le(function(u) {
          for (var f = -1; ++f < r; ) {
            var p = e[f];
            if (un(p[0], this, u))
              return un(p[1], this, u);
          }
        });
      }
      function Nw(e) {
        return ig(En(e, v));
      }
      function Ou(e) {
        return function() {
          return e;
        };
      }
      function Iw(e, r) {
        return e == null || e !== e ? r : e;
      }
      var Mw = Ef(), kw = Ef(!0);
      function an(e) {
        return e;
      }
      function Cu(e) {
        return Jc(typeof e == "function" ? e : En(e, v));
      }
      function Fw(e) {
        return ef(En(e, v));
      }
      function Bw(e, r) {
        return tf(e, En(r, v));
      }
      var Ww = Le(function(e, r) {
        return function(o) {
          return aa(o, e, r);
        };
      }), Uw = Le(function(e, r) {
        return function(o) {
          return aa(e, o, r);
        };
      });
      function Tu(e, r, o) {
        var u = Ft(r), f = so(r, u);
        o == null && !(bt(r) && (f.length || !u.length)) && (o = r, r = e, e = this, f = so(r, Ft(r)));
        var p = !(bt(o) && "chain" in o) || !!o.chain, A = ur(e);
        return wn(f, function(T) {
          var L = r[T];
          e[T] = L, A && (e.prototype[T] = function() {
            var j = this.__chain__;
            if (p || j) {
              var $ = e(this.__wrapped__), Q = $.__actions__ = tn(this.__actions__);
              return Q.push({ func: L, args: arguments, thisArg: e }), $.__chain__ = j, $;
            }
            return L.apply(e, br([this.value()], arguments));
          });
        }), e;
      }
      function zw() {
        return Ut._ === this && (Ut._ = dm), this;
      }
      function Su() {
      }
      function Hw(e) {
        return e = Se(e), Le(function(r) {
          return nf(r, e);
        });
      }
      var jw = au(mt), $w = au(Ec), qw = au(Rs);
      function _h(e) {
        return hu(e) ? Ls($n(e)) : _g(e);
      }
      function Yw(e) {
        return function(r) {
          return e == null ? i : Gr(e, r);
        };
      }
      var Gw = Of(), Vw = Of(!0);
      function Du() {
        return [];
      }
      function Ru() {
        return !1;
      }
      function Kw() {
        return {};
      }
      function Qw() {
        return "";
      }
      function Xw() {
        return !0;
      }
      function Jw(e, r) {
        if (e = Se(e), e < 1 || e > m)
          return [];
        var o = P, u = jt(e, P);
        r = pe(r), e -= P;
        for (var f = Is(u, r); ++o < e; )
          r(o);
        return f;
      }
      function Zw(e) {
        return xe(e) ? mt(e, $n) : fn(e) ? [e] : tn(zf(Ke(e)));
      }
      function e1(e) {
        var r = ++fm;
        return Ke(e) + r;
      }
      var t1 = po(function(e, r) {
        return e + r;
      }, 0), n1 = ou("ceil"), r1 = po(function(e, r) {
        return e / r;
      }, 1), i1 = ou("floor");
      function a1(e) {
        return e && e.length ? oo(e, an, qs) : i;
      }
      function o1(e, r) {
        return e && e.length ? oo(e, pe(r, 2), qs) : i;
      }
      function s1(e) {
        return Cc(e, an);
      }
      function u1(e, r) {
        return Cc(e, pe(r, 2));
      }
      function l1(e) {
        return e && e.length ? oo(e, an, Ks) : i;
      }
      function c1(e, r) {
        return e && e.length ? oo(e, pe(r, 2), Ks) : i;
      }
      var f1 = po(function(e, r) {
        return e * r;
      }, 1), h1 = ou("round"), d1 = po(function(e, r) {
        return e - r;
      }, 0);
      function p1(e) {
        return e && e.length ? Ns(e, an) : 0;
      }
      function v1(e, r) {
        return e && e.length ? Ns(e, pe(r, 2)) : 0;
      }
      return d.after = F0, d.ary = Jf, d.assign = xb, d.assignIn = hh, d.assignInWith = To, d.assignWith = Ob, d.at = Cb, d.before = Zf, d.bind = yu, d.bindAll = Lw, d.bindKey = eh, d.castArray = K0, d.chain = Kf, d.chunk = iy, d.compact = ay, d.concat = oy, d.cond = Pw, d.conforms = Nw, d.constant = Ou, d.countBy = p0, d.create = Tb, d.curry = th, d.curryRight = nh, d.debounce = rh, d.defaults = Sb, d.defaultsDeep = Db, d.defer = B0, d.delay = W0, d.difference = sy, d.differenceBy = uy, d.differenceWith = ly, d.drop = cy, d.dropRight = fy, d.dropRightWhile = hy, d.dropWhile = dy, d.fill = py, d.filter = m0, d.flatMap = b0, d.flatMapDeep = w0, d.flatMapDepth = _0, d.flatten = qf, d.flattenDeep = vy, d.flattenDepth = my, d.flip = U0, d.flow = Mw, d.flowRight = kw, d.fromPairs = gy, d.functions = kb, d.functionsIn = Fb, d.groupBy = A0, d.initial = by, d.intersection = wy, d.intersectionBy = _y, d.intersectionWith = Ay, d.invert = Wb, d.invertBy = Ub, d.invokeMap = x0, d.iteratee = Cu, d.keyBy = O0, d.keys = Ft, d.keysIn = rn, d.map = _o, d.mapKeys = Hb, d.mapValues = jb, d.matches = Fw, d.matchesProperty = Bw, d.memoize = Eo, d.merge = $b, d.mergeWith = dh, d.method = Ww, d.methodOf = Uw, d.mixin = Tu, d.negate = xo, d.nthArg = Hw, d.omit = qb, d.omitBy = Yb, d.once = z0, d.orderBy = C0, d.over = jw, d.overArgs = H0, d.overEvery = $w, d.overSome = qw, d.partial = bu, d.partialRight = ih, d.partition = T0, d.pick = Gb, d.pickBy = ph, d.property = _h, d.propertyOf = Yw, d.pull = Cy, d.pullAll = Gf, d.pullAllBy = Ty, d.pullAllWith = Sy, d.pullAt = Dy, d.range = Gw, d.rangeRight = Vw, d.rearg = j0, d.reject = R0, d.remove = Ry, d.rest = $0, d.reverse = mu, d.sampleSize = P0, d.set = Kb, d.setWith = Qb, d.shuffle = N0, d.slice = Ly, d.sortBy = k0, d.sortedUniq = By, d.sortedUniqBy = Wy, d.split = bw, d.spread = q0, d.tail = Uy, d.take = zy, d.takeRight = Hy, d.takeRightWhile = jy, d.takeWhile = $y, d.tap = a0, d.throttle = Y0, d.thru = wo, d.toArray = lh, d.toPairs = vh, d.toPairsIn = mh, d.toPath = Zw, d.toPlainObject = fh, d.transform = Xb, d.unary = G0, d.union = qy, d.unionBy = Yy, d.unionWith = Gy, d.uniq = Vy, d.uniqBy = Ky, d.uniqWith = Qy, d.unset = Jb, d.unzip = gu, d.unzipWith = Vf, d.update = Zb, d.updateWith = ew, d.values = Oi, d.valuesIn = tw, d.without = Xy, d.words = bh, d.wrap = V0, d.xor = Jy, d.xorBy = Zy, d.xorWith = e0, d.zip = t0, d.zipObject = n0, d.zipObjectDeep = r0, d.zipWith = i0, d.entries = vh, d.entriesIn = mh, d.extend = hh, d.extendWith = To, Tu(d, d), d.add = t1, d.attempt = wh, d.camelCase = aw, d.capitalize = gh, d.ceil = n1, d.clamp = nw, d.clone = Q0, d.cloneDeep = J0, d.cloneDeepWith = Z0, d.cloneWith = X0, d.conformsTo = eb, d.deburr = yh, d.defaultTo = Iw, d.divide = r1, d.endsWith = ow, d.eq = kn, d.escape = sw, d.escapeRegExp = uw, d.every = v0, d.find = g0, d.findIndex = jf, d.findKey = Rb, d.findLast = y0, d.findLastIndex = $f, d.findLastKey = Lb, d.floor = i1, d.forEach = Qf, d.forEachRight = Xf, d.forIn = Pb, d.forInRight = Nb, d.forOwn = Ib, d.forOwnRight = Mb, d.get = Au, d.gt = tb, d.gte = nb, d.has = Bb, d.hasIn = Eu, d.head = Yf, d.identity = an, d.includes = E0, d.indexOf = yy, d.inRange = rw, d.invoke = zb, d.isArguments = Qr, d.isArray = xe, d.isArrayBuffer = rb, d.isArrayLike = nn, d.isArrayLikeObject = Ot, d.isBoolean = ib, d.isBuffer = Cr, d.isDate = ab, d.isElement = ob, d.isEmpty = sb, d.isEqual = ub, d.isEqualWith = lb, d.isError = wu, d.isFinite = cb, d.isFunction = ur, d.isInteger = ah, d.isLength = Oo, d.isMap = oh, d.isMatch = fb, d.isMatchWith = hb, d.isNaN = db, d.isNative = pb, d.isNil = mb, d.isNull = vb, d.isNumber = sh, d.isObject = bt, d.isObjectLike = At, d.isPlainObject = fa, d.isRegExp = _u, d.isSafeInteger = gb, d.isSet = uh, d.isString = Co, d.isSymbol = fn, d.isTypedArray = xi, d.isUndefined = yb, d.isWeakMap = bb, d.isWeakSet = wb, d.join = Ey, d.kebabCase = lw, d.last = On, d.lastIndexOf = xy, d.lowerCase = cw, d.lowerFirst = fw, d.lt = _b, d.lte = Ab, d.max = a1, d.maxBy = o1, d.mean = s1, d.meanBy = u1, d.min = l1, d.minBy = c1, d.stubArray = Du, d.stubFalse = Ru, d.stubObject = Kw, d.stubString = Qw, d.stubTrue = Xw, d.multiply = f1, d.nth = Oy, d.noConflict = zw, d.noop = Su, d.now = Ao, d.pad = hw, d.padEnd = dw, d.padStart = pw, d.parseInt = vw, d.random = iw, d.reduce = S0, d.reduceRight = D0, d.repeat = mw, d.replace = gw, d.result = Vb, d.round = h1, d.runInContext = R, d.sample = L0, d.size = I0, d.snakeCase = yw, d.some = M0, d.sortedIndex = Py, d.sortedIndexBy = Ny, d.sortedIndexOf = Iy, d.sortedLastIndex = My, d.sortedLastIndexBy = ky, d.sortedLastIndexOf = Fy, d.startCase = ww, d.startsWith = _w, d.subtract = d1, d.sum = p1, d.sumBy = v1, d.template = Aw, d.times = Jw, d.toFinite = lr, d.toInteger = Se, d.toLength = ch, d.toLower = Ew, d.toNumber = Cn, d.toSafeInteger = Eb, d.toString = Ke, d.toUpper = xw, d.trim = Ow, d.trimEnd = Cw, d.trimStart = Tw, d.truncate = Sw, d.unescape = Dw, d.uniqueId = e1, d.upperCase = Rw, d.upperFirst = xu, d.each = Qf, d.eachRight = Xf, d.first = Yf, Tu(d, function() {
        var e = {};
        return Hn(d, function(r, o) {
          Je.call(d.prototype, o) || (e[o] = r);
        }), e;
      }(), { chain: !1 }), d.VERSION = a, wn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        d[e].placeholder = d;
      }), wn(["drop", "take"], function(e, r) {
        ke.prototype[e] = function(o) {
          o = o === i ? 1 : Rt(Se(o), 0);
          var u = this.__filtered__ && !r ? new ke(this) : this.clone();
          return u.__filtered__ ? u.__takeCount__ = jt(o, u.__takeCount__) : u.__views__.push({
            size: jt(o, P),
            type: e + (u.__dir__ < 0 ? "Right" : "")
          }), u;
        }, ke.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), wn(["filter", "map", "takeWhile"], function(e, r) {
        var o = r + 1, u = o == je || o == Ce;
        ke.prototype[e] = function(f) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: pe(f, 3),
            type: o
          }), p.__filtered__ = p.__filtered__ || u, p;
        };
      }), wn(["head", "last"], function(e, r) {
        var o = "take" + (r ? "Right" : "");
        ke.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), wn(["initial", "tail"], function(e, r) {
        var o = "drop" + (r ? "" : "Right");
        ke.prototype[e] = function() {
          return this.__filtered__ ? new ke(this) : this[o](1);
        };
      }), ke.prototype.compact = function() {
        return this.filter(an);
      }, ke.prototype.find = function(e) {
        return this.filter(e).head();
      }, ke.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ke.prototype.invokeMap = Le(function(e, r) {
        return typeof e == "function" ? new ke(this) : this.map(function(o) {
          return aa(o, e, r);
        });
      }), ke.prototype.reject = function(e) {
        return this.filter(xo(pe(e)));
      }, ke.prototype.slice = function(e, r) {
        e = Se(e);
        var o = this;
        return o.__filtered__ && (e > 0 || r < 0) ? new ke(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), r !== i && (r = Se(r), o = r < 0 ? o.dropRight(-r) : o.take(r - e)), o);
      }, ke.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ke.prototype.toArray = function() {
        return this.take(P);
      }, Hn(ke.prototype, function(e, r) {
        var o = /^(?:filter|find|map|reject)|While$/.test(r), u = /^(?:head|last)$/.test(r), f = d[u ? "take" + (r == "last" ? "Right" : "") : r], p = u || /^find/.test(r);
        f && (d.prototype[r] = function() {
          var A = this.__wrapped__, T = u ? [1] : arguments, L = A instanceof ke, j = T[0], $ = L || xe(A), Q = function(Me) {
            var Ue = f.apply(d, br([Me], T));
            return u && re ? Ue[0] : Ue;
          };
          $ && o && typeof j == "function" && j.length != 1 && (L = $ = !1);
          var re = this.__chain__, ce = !!this.__actions__.length, ve = p && !re, De = L && !ce;
          if (!p && $) {
            A = De ? A : new ke(this);
            var me = e.apply(A, T);
            return me.__actions__.push({ func: wo, args: [Q], thisArg: i }), new An(me, re);
          }
          return ve && De ? e.apply(this, T) : (me = this.thru(Q), ve ? u ? me.value()[0] : me.value() : me);
        });
      }), wn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var r = qa[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", u = /^(?:pop|shift)$/.test(e);
        d.prototype[e] = function() {
          var f = arguments;
          if (u && !this.__chain__) {
            var p = this.value();
            return r.apply(xe(p) ? p : [], f);
          }
          return this[o](function(A) {
            return r.apply(xe(A) ? A : [], f);
          });
        };
      }), Hn(ke.prototype, function(e, r) {
        var o = d[r];
        if (o) {
          var u = o.name + "";
          Je.call(bi, u) || (bi[u] = []), bi[u].push({ name: r, func: o });
        }
      }), bi[ho(i, D).name] = [{
        name: "wrapper",
        func: i
      }], ke.prototype.clone = Dm, ke.prototype.reverse = Rm, ke.prototype.value = Lm, d.prototype.at = o0, d.prototype.chain = s0, d.prototype.commit = u0, d.prototype.next = l0, d.prototype.plant = f0, d.prototype.reverse = h0, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = d0, d.prototype.first = d.prototype.head, Ji && (d.prototype[Ji] = c0), d;
    }, mi = um();
    Hr ? ((Hr.exports = mi)._ = mi, Cs._ = mi) : Ut._ = mi;
  }).call(hr);
})(Ho, Ho.exports);
var tC = Ho.exports;
function Hd(t, n) {
  return function() {
    return t.apply(n, arguments);
  };
}
const { toString: i_ } = Object.prototype, { getPrototypeOf: Sl } = Object, as = ((t) => (n) => {
  const i = i_.call(n);
  return t[i] || (t[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), er = (t) => (t = t.toLowerCase(), (n) => as(n) === t), os = (t) => (n) => typeof n === t, { isArray: Yi } = Array, _a = os("undefined");
function a_(t) {
  return t !== null && !_a(t) && t.constructor !== null && !_a(t.constructor) && Ln(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const jd = er("ArrayBuffer");
function o_(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && jd(t.buffer), n;
}
const s_ = os("string"), Ln = os("function"), $d = os("number"), ss = (t) => t !== null && typeof t == "object", u_ = (t) => t === !0 || t === !1, ko = (t) => {
  if (as(t) !== "object")
    return !1;
  const n = Sl(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, l_ = er("Date"), c_ = er("File"), f_ = er("Blob"), h_ = er("FileList"), d_ = (t) => ss(t) && Ln(t.pipe), p_ = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || Ln(t.append) && ((n = as(t)) === "formdata" || // detect form-data instance
  n === "object" && Ln(t.toString) && t.toString() === "[object FormData]"));
}, v_ = er("URLSearchParams"), m_ = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ia(t, n, { allOwnKeys: i = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let a, s;
  if (typeof t != "object" && (t = [t]), Yi(t))
    for (a = 0, s = t.length; a < s; a++)
      n.call(null, t[a], a, t);
  else {
    const l = i ? Object.getOwnPropertyNames(t) : Object.keys(t), c = l.length;
    let h;
    for (a = 0; a < c; a++)
      h = l[a], n.call(null, t[h], h, t);
  }
}
function qd(t, n) {
  n = n.toLowerCase();
  const i = Object.keys(t);
  let a = i.length, s;
  for (; a-- > 0; )
    if (s = i[a], n === s.toLowerCase())
      return s;
  return null;
}
const Yd = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Gd = (t) => !_a(t) && t !== Yd;
function tl() {
  const { caseless: t } = Gd(this) && this || {}, n = {}, i = (a, s) => {
    const l = t && qd(n, s) || s;
    ko(n[l]) && ko(a) ? n[l] = tl(n[l], a) : ko(a) ? n[l] = tl({}, a) : Yi(a) ? n[l] = a.slice() : n[l] = a;
  };
  for (let a = 0, s = arguments.length; a < s; a++)
    arguments[a] && Ia(arguments[a], i);
  return n;
}
const g_ = (t, n, i, { allOwnKeys: a } = {}) => (Ia(n, (s, l) => {
  i && Ln(s) ? t[l] = Hd(s, i) : t[l] = s;
}, { allOwnKeys: a }), t), y_ = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), b_ = (t, n, i, a) => {
  t.prototype = Object.create(n.prototype, a), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: n.prototype
  }), i && Object.assign(t.prototype, i);
}, w_ = (t, n, i, a) => {
  let s, l, c;
  const h = {};
  if (n = n || {}, t == null)
    return n;
  do {
    for (s = Object.getOwnPropertyNames(t), l = s.length; l-- > 0; )
      c = s[l], (!a || a(c, t, n)) && !h[c] && (n[c] = t[c], h[c] = !0);
    t = i !== !1 && Sl(t);
  } while (t && (!i || i(t, n)) && t !== Object.prototype);
  return n;
}, __ = (t, n, i) => {
  t = String(t), (i === void 0 || i > t.length) && (i = t.length), i -= n.length;
  const a = t.indexOf(n, i);
  return a !== -1 && a === i;
}, A_ = (t) => {
  if (!t)
    return null;
  if (Yi(t))
    return t;
  let n = t.length;
  if (!$d(n))
    return null;
  const i = new Array(n);
  for (; n-- > 0; )
    i[n] = t[n];
  return i;
}, E_ = ((t) => (n) => t && n instanceof t)(typeof Uint8Array < "u" && Sl(Uint8Array)), x_ = (t, n) => {
  const a = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = a.next()) && !s.done; ) {
    const l = s.value;
    n.call(t, l[0], l[1]);
  }
}, O_ = (t, n) => {
  let i;
  const a = [];
  for (; (i = t.exec(n)) !== null; )
    a.push(i);
  return a;
}, C_ = er("HTMLFormElement"), T_ = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, a, s) {
    return a.toUpperCase() + s;
  }
), Nh = (({ hasOwnProperty: t }) => (n, i) => t.call(n, i))(Object.prototype), S_ = er("RegExp"), Vd = (t, n) => {
  const i = Object.getOwnPropertyDescriptors(t), a = {};
  Ia(i, (s, l) => {
    let c;
    (c = n(s, l, t)) !== !1 && (a[l] = c || s);
  }), Object.defineProperties(t, a);
}, D_ = (t) => {
  Vd(t, (n, i) => {
    if (Ln(t) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const a = t[i];
    if (Ln(a)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, R_ = (t, n) => {
  const i = {}, a = (s) => {
    s.forEach((l) => {
      i[l] = !0;
    });
  };
  return Yi(t) ? a(t) : a(String(t).split(n)), i;
}, L_ = () => {
}, P_ = (t, n) => (t = +t, Number.isFinite(t) ? t : n), ku = "abcdefghijklmnopqrstuvwxyz", Ih = "0123456789", Kd = {
  DIGIT: Ih,
  ALPHA: ku,
  ALPHA_DIGIT: ku + ku.toUpperCase() + Ih
}, N_ = (t = 16, n = Kd.ALPHA_DIGIT) => {
  let i = "";
  const { length: a } = n;
  for (; t--; )
    i += n[Math.random() * a | 0];
  return i;
};
function I_(t) {
  return !!(t && Ln(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const M_ = (t) => {
  const n = new Array(10), i = (a, s) => {
    if (ss(a)) {
      if (n.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        n[s] = a;
        const l = Yi(a) ? [] : {};
        return Ia(a, (c, h) => {
          const g = i(c, s + 1);
          !_a(g) && (l[h] = g);
        }), n[s] = void 0, l;
      }
    }
    return a;
  };
  return i(t, 0);
}, k_ = er("AsyncFunction"), F_ = (t) => t && (ss(t) || Ln(t)) && Ln(t.then) && Ln(t.catch), q = {
  isArray: Yi,
  isArrayBuffer: jd,
  isBuffer: a_,
  isFormData: p_,
  isArrayBufferView: o_,
  isString: s_,
  isNumber: $d,
  isBoolean: u_,
  isObject: ss,
  isPlainObject: ko,
  isUndefined: _a,
  isDate: l_,
  isFile: c_,
  isBlob: f_,
  isRegExp: S_,
  isFunction: Ln,
  isStream: d_,
  isURLSearchParams: v_,
  isTypedArray: E_,
  isFileList: h_,
  forEach: Ia,
  merge: tl,
  extend: g_,
  trim: m_,
  stripBOM: y_,
  inherits: b_,
  toFlatObject: w_,
  kindOf: as,
  kindOfTest: er,
  endsWith: __,
  toArray: A_,
  forEachEntry: x_,
  matchAll: O_,
  isHTMLForm: C_,
  hasOwnProperty: Nh,
  hasOwnProp: Nh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Vd,
  freezeMethods: D_,
  toObjectSet: R_,
  toCamelCase: T_,
  noop: L_,
  toFiniteNumber: P_,
  findKey: qd,
  global: Yd,
  isContextDefined: Gd,
  ALPHABET: Kd,
  generateString: N_,
  isSpecCompliantForm: I_,
  toJSONObject: M_,
  isAsyncFn: k_,
  isThenable: F_
};
function He(t, n, i, a, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", n && (this.code = n), i && (this.config = i), a && (this.request = a), s && (this.response = s);
}
q.inherits(He, Error, {
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
      config: q.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Qd = He.prototype, Xd = {};
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
].forEach((t) => {
  Xd[t] = { value: t };
});
Object.defineProperties(He, Xd);
Object.defineProperty(Qd, "isAxiosError", { value: !0 });
He.from = (t, n, i, a, s, l) => {
  const c = Object.create(Qd);
  return q.toFlatObject(t, c, function(g) {
    return g !== Error.prototype;
  }, (h) => h !== "isAxiosError"), He.call(c, t.message, n, i, a, s), c.cause = t, c.name = t.name, l && Object.assign(c, l), c;
};
const B_ = null;
function nl(t) {
  return q.isPlainObject(t) || q.isArray(t);
}
function Jd(t) {
  return q.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Mh(t, n, i) {
  return t ? t.concat(n).map(function(s, l) {
    return s = Jd(s), !i && l ? "[" + s + "]" : s;
  }).join(i ? "." : "") : n;
}
function W_(t) {
  return q.isArray(t) && !t.some(nl);
}
const U_ = q.toFlatObject(q, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function us(t, n, i) {
  if (!q.isObject(t))
    throw new TypeError("target must be an object");
  n = n || new FormData(), i = q.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, O) {
    return !q.isUndefined(O[E]);
  });
  const a = i.metaTokens, s = i.visitor || b, l = i.dots, c = i.indexes, g = (i.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(n);
  if (!q.isFunction(s))
    throw new TypeError("visitor must be a function");
  function y(w) {
    if (w === null)
      return "";
    if (q.isDate(w))
      return w.toISOString();
    if (!g && q.isBlob(w))
      throw new He("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(w) || q.isTypedArray(w) ? g && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function b(w, E, O) {
    let D = w;
    if (w && !O && typeof w == "object") {
      if (q.endsWith(E, "{}"))
        E = a ? E : E.slice(0, -2), w = JSON.stringify(w);
      else if (q.isArray(w) && W_(w) || (q.isFileList(w) || q.endsWith(E, "[]")) && (D = q.toArray(w)))
        return E = Jd(E), D.forEach(function(M, U) {
          !(q.isUndefined(M) || M === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? Mh([E], U, l) : c === null ? E : E + "[]",
            y(M)
          );
        }), !1;
    }
    return nl(w) ? !0 : (n.append(Mh(O, E, l), y(w)), !1);
  }
  const v = [], C = Object.assign(U_, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: nl
  });
  function _(w, E) {
    if (!q.isUndefined(w)) {
      if (v.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      v.push(w), q.forEach(w, function(D, B) {
        (!(q.isUndefined(D) || D === null) && s.call(
          n,
          D,
          q.isString(B) ? B.trim() : B,
          E,
          C
        )) === !0 && _(D, E ? E.concat(B) : [B]);
      }), v.pop();
    }
  }
  if (!q.isObject(t))
    throw new TypeError("data must be an object");
  return _(t), n;
}
function kh(t) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(a) {
    return n[a];
  });
}
function Dl(t, n) {
  this._pairs = [], t && us(t, this, n);
}
const Zd = Dl.prototype;
Zd.append = function(n, i) {
  this._pairs.push([n, i]);
};
Zd.toString = function(n) {
  const i = n ? function(a) {
    return n.call(this, a, kh);
  } : kh;
  return this._pairs.map(function(s) {
    return i(s[0]) + "=" + i(s[1]);
  }, "").join("&");
};
function z_(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ep(t, n, i) {
  if (!n)
    return t;
  const a = i && i.encode || z_, s = i && i.serialize;
  let l;
  if (s ? l = s(n, i) : l = q.isURLSearchParams(n) ? n.toString() : new Dl(n, i).toString(a), l) {
    const c = t.indexOf("#");
    c !== -1 && (t = t.slice(0, c)), t += (t.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return t;
}
class H_ {
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
  use(n, i, a) {
    return this.handlers.push({
      fulfilled: n,
      rejected: i,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
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
  forEach(n) {
    q.forEach(this.handlers, function(a) {
      a !== null && n(a);
    });
  }
}
const Fh = H_, tp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, j_ = typeof URLSearchParams < "u" ? URLSearchParams : Dl, $_ = typeof FormData < "u" ? FormData : null, q_ = typeof Blob < "u" ? Blob : null, Y_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: j_,
    FormData: $_,
    Blob: q_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, np = typeof window < "u" && typeof document < "u", G_ = ((t) => np && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), V_ = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), K_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: np,
  hasStandardBrowserEnv: G_,
  hasStandardBrowserWebWorkerEnv: V_
}, Symbol.toStringTag, { value: "Module" })), Jn = {
  ...K_,
  ...Y_
};
function Q_(t, n) {
  return us(t, new Jn.classes.URLSearchParams(), Object.assign({
    visitor: function(i, a, s, l) {
      return Jn.isNode && q.isBuffer(i) ? (this.append(a, i.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function X_(t) {
  return q.matchAll(/\w+|\[(\w*)]/g, t).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function J_(t) {
  const n = {}, i = Object.keys(t);
  let a;
  const s = i.length;
  let l;
  for (a = 0; a < s; a++)
    l = i[a], n[l] = t[l];
  return n;
}
function rp(t) {
  function n(i, a, s, l) {
    let c = i[l++];
    if (c === "__proto__")
      return !0;
    const h = Number.isFinite(+c), g = l >= i.length;
    return c = !c && q.isArray(s) ? s.length : c, g ? (q.hasOwnProp(s, c) ? s[c] = [s[c], a] : s[c] = a, !h) : ((!s[c] || !q.isObject(s[c])) && (s[c] = []), n(i, a, s[c], l) && q.isArray(s[c]) && (s[c] = J_(s[c])), !h);
  }
  if (q.isFormData(t) && q.isFunction(t.entries)) {
    const i = {};
    return q.forEachEntry(t, (a, s) => {
      n(X_(a), s, i, 0);
    }), i;
  }
  return null;
}
function Z_(t, n, i) {
  if (q.isString(t))
    try {
      return (n || JSON.parse)(t), q.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (i || JSON.stringify)(t);
}
const Rl = {
  transitional: tp,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, i) {
    const a = i.getContentType() || "", s = a.indexOf("application/json") > -1, l = q.isObject(n);
    if (l && q.isHTMLForm(n) && (n = new FormData(n)), q.isFormData(n))
      return s ? JSON.stringify(rp(n)) : n;
    if (q.isArrayBuffer(n) || q.isBuffer(n) || q.isStream(n) || q.isFile(n) || q.isBlob(n))
      return n;
    if (q.isArrayBufferView(n))
      return n.buffer;
    if (q.isURLSearchParams(n))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let h;
    if (l) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return Q_(n, this.formSerializer).toString();
      if ((h = q.isFileList(n)) || a.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return us(
          h ? { "files[]": n } : n,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return l || s ? (i.setContentType("application/json", !1), Z_(n)) : n;
  }],
  transformResponse: [function(n) {
    const i = this.transitional || Rl.transitional, a = i && i.forcedJSONParsing, s = this.responseType === "json";
    if (n && q.isString(n) && (a && !this.responseType || s)) {
      const c = !(i && i.silentJSONParsing) && s;
      try {
        return JSON.parse(n);
      } catch (h) {
        if (c)
          throw h.name === "SyntaxError" ? He.from(h, He.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    }
    return n;
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
    FormData: Jn.classes.FormData,
    Blob: Jn.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
q.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Rl.headers[t] = {};
});
const Ll = Rl, eA = q.toObjectSet([
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
]), tA = (t) => {
  const n = {};
  let i, a, s;
  return t && t.split(`
`).forEach(function(c) {
    s = c.indexOf(":"), i = c.substring(0, s).trim().toLowerCase(), a = c.substring(s + 1).trim(), !(!i || n[i] && eA[i]) && (i === "set-cookie" ? n[i] ? n[i].push(a) : n[i] = [a] : n[i] = n[i] ? n[i] + ", " + a : a);
  }), n;
}, Bh = Symbol("internals");
function ha(t) {
  return t && String(t).trim().toLowerCase();
}
function Fo(t) {
  return t === !1 || t == null ? t : q.isArray(t) ? t.map(Fo) : String(t);
}
function nA(t) {
  const n = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = i.exec(t); )
    n[a[1]] = a[2];
  return n;
}
const rA = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Fu(t, n, i, a, s) {
  if (q.isFunction(a))
    return a.call(this, n, i);
  if (s && (n = i), !!q.isString(n)) {
    if (q.isString(a))
      return n.indexOf(a) !== -1;
    if (q.isRegExp(a))
      return a.test(n);
  }
}
function iA(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, i, a) => i.toUpperCase() + a);
}
function aA(t, n) {
  const i = q.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(t, a + i, {
      value: function(s, l, c) {
        return this[a].call(this, n, s, l, c);
      },
      configurable: !0
    });
  });
}
class ls {
  constructor(n) {
    n && this.set(n);
  }
  set(n, i, a) {
    const s = this;
    function l(h, g, y) {
      const b = ha(g);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const v = q.findKey(s, b);
      (!v || s[v] === void 0 || y === !0 || y === void 0 && s[v] !== !1) && (s[v || g] = Fo(h));
    }
    const c = (h, g) => q.forEach(h, (y, b) => l(y, b, g));
    return q.isPlainObject(n) || n instanceof this.constructor ? c(n, i) : q.isString(n) && (n = n.trim()) && !rA(n) ? c(tA(n), i) : n != null && l(i, n, a), this;
  }
  get(n, i) {
    if (n = ha(n), n) {
      const a = q.findKey(this, n);
      if (a) {
        const s = this[a];
        if (!i)
          return s;
        if (i === !0)
          return nA(s);
        if (q.isFunction(i))
          return i.call(this, s, a);
        if (q.isRegExp(i))
          return i.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, i) {
    if (n = ha(n), n) {
      const a = q.findKey(this, n);
      return !!(a && this[a] !== void 0 && (!i || Fu(this, this[a], a, i)));
    }
    return !1;
  }
  delete(n, i) {
    const a = this;
    let s = !1;
    function l(c) {
      if (c = ha(c), c) {
        const h = q.findKey(a, c);
        h && (!i || Fu(a, a[h], h, i)) && (delete a[h], s = !0);
      }
    }
    return q.isArray(n) ? n.forEach(l) : l(n), s;
  }
  clear(n) {
    const i = Object.keys(this);
    let a = i.length, s = !1;
    for (; a--; ) {
      const l = i[a];
      (!n || Fu(this, this[l], l, n, !0)) && (delete this[l], s = !0);
    }
    return s;
  }
  normalize(n) {
    const i = this, a = {};
    return q.forEach(this, (s, l) => {
      const c = q.findKey(a, l);
      if (c) {
        i[c] = Fo(s), delete i[l];
        return;
      }
      const h = n ? iA(l) : String(l).trim();
      h !== l && delete i[l], i[h] = Fo(s), a[h] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const i = /* @__PURE__ */ Object.create(null);
    return q.forEach(this, (a, s) => {
      a != null && a !== !1 && (i[s] = n && q.isArray(a) ? a.join(", ") : a);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, i]) => n + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...i) {
    const a = new this(n);
    return i.forEach((s) => a.set(s)), a;
  }
  static accessor(n) {
    const a = (this[Bh] = this[Bh] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function l(c) {
      const h = ha(c);
      a[h] || (aA(s, c), a[h] = !0);
    }
    return q.isArray(n) ? n.forEach(l) : l(n), this;
  }
}
ls.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
q.reduceDescriptors(ls.prototype, ({ value: t }, n) => {
  let i = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(a) {
      this[i] = a;
    }
  };
});
q.freezeMethods(ls);
const pr = ls;
function Bu(t, n) {
  const i = this || Ll, a = n || i, s = pr.from(a.headers);
  let l = a.data;
  return q.forEach(t, function(h) {
    l = h.call(i, l, s.normalize(), n ? n.status : void 0);
  }), s.normalize(), l;
}
function ip(t) {
  return !!(t && t.__CANCEL__);
}
function Ma(t, n, i) {
  He.call(this, t ?? "canceled", He.ERR_CANCELED, n, i), this.name = "CanceledError";
}
q.inherits(Ma, He, {
  __CANCEL__: !0
});
function oA(t, n, i) {
  const a = i.config.validateStatus;
  !i.status || !a || a(i.status) ? t(i) : n(new He(
    "Request failed with status code " + i.status,
    [He.ERR_BAD_REQUEST, He.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
const sA = Jn.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, n, i, a, s, l) {
      const c = [t + "=" + encodeURIComponent(n)];
      q.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()), q.isString(a) && c.push("path=" + a), q.isString(s) && c.push("domain=" + s), l === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read(t) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
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
function uA(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function lA(t, n) {
  return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
}
function ap(t, n) {
  return t && !uA(n) ? lA(t, n) : n;
}
const cA = Jn.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
    let a;
    function s(l) {
      let c = l;
      return n && (i.setAttribute("href", c), c = i.href), i.setAttribute("href", c), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return a = s(window.location.href), function(c) {
      const h = q.isString(c) ? s(c) : c;
      return h.protocol === a.protocol && h.host === a.host;
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
function fA(t) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return n && n[1] || "";
}
function hA(t, n) {
  t = t || 10;
  const i = new Array(t), a = new Array(t);
  let s = 0, l = 0, c;
  return n = n !== void 0 ? n : 1e3, function(g) {
    const y = Date.now(), b = a[l];
    c || (c = y), i[s] = g, a[s] = y;
    let v = l, C = 0;
    for (; v !== s; )
      C += i[v++], v = v % t;
    if (s = (s + 1) % t, s === l && (l = (l + 1) % t), y - c < n)
      return;
    const _ = b && y - b;
    return _ ? Math.round(C * 1e3 / _) : void 0;
  };
}
function Wh(t, n) {
  let i = 0;
  const a = hA(50, 250);
  return (s) => {
    const l = s.loaded, c = s.lengthComputable ? s.total : void 0, h = l - i, g = a(h), y = l <= c;
    i = l;
    const b = {
      loaded: l,
      total: c,
      progress: c ? l / c : void 0,
      bytes: h,
      rate: g || void 0,
      estimated: g && c && y ? (c - l) / g : void 0,
      event: s
    };
    b[n ? "download" : "upload"] = !0, t(b);
  };
}
const dA = typeof XMLHttpRequest < "u", pA = dA && function(t) {
  return new Promise(function(i, a) {
    let s = t.data;
    const l = pr.from(t.headers).normalize();
    let { responseType: c, withXSRFToken: h } = t, g;
    function y() {
      t.cancelToken && t.cancelToken.unsubscribe(g), t.signal && t.signal.removeEventListener("abort", g);
    }
    let b;
    if (q.isFormData(s)) {
      if (Jn.hasStandardBrowserEnv || Jn.hasStandardBrowserWebWorkerEnv)
        l.setContentType(!1);
      else if ((b = l.getContentType()) !== !1) {
        const [E, ...O] = b ? b.split(";").map((D) => D.trim()).filter(Boolean) : [];
        l.setContentType([E || "multipart/form-data", ...O].join("; "));
      }
    }
    let v = new XMLHttpRequest();
    if (t.auth) {
      const E = t.auth.username || "", O = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      l.set("Authorization", "Basic " + btoa(E + ":" + O));
    }
    const C = ap(t.baseURL, t.url);
    v.open(t.method.toUpperCase(), ep(C, t.params, t.paramsSerializer), !0), v.timeout = t.timeout;
    function _() {
      if (!v)
        return;
      const E = pr.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), D = {
        data: !c || c === "text" || c === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: E,
        config: t,
        request: v
      };
      oA(function(M) {
        i(M), y();
      }, function(M) {
        a(M), y();
      }, D), v = null;
    }
    if ("onloadend" in v ? v.onloadend = _ : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, v.onabort = function() {
      v && (a(new He("Request aborted", He.ECONNABORTED, t, v)), v = null);
    }, v.onerror = function() {
      a(new He("Network Error", He.ERR_NETWORK, t, v)), v = null;
    }, v.ontimeout = function() {
      let O = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const D = t.transitional || tp;
      t.timeoutErrorMessage && (O = t.timeoutErrorMessage), a(new He(
        O,
        D.clarifyTimeoutError ? He.ETIMEDOUT : He.ECONNABORTED,
        t,
        v
      )), v = null;
    }, Jn.hasStandardBrowserEnv && (h && q.isFunction(h) && (h = h(t)), h || h !== !1 && cA(C))) {
      const E = t.xsrfHeaderName && t.xsrfCookieName && sA.read(t.xsrfCookieName);
      E && l.set(t.xsrfHeaderName, E);
    }
    s === void 0 && l.setContentType(null), "setRequestHeader" in v && q.forEach(l.toJSON(), function(O, D) {
      v.setRequestHeader(D, O);
    }), q.isUndefined(t.withCredentials) || (v.withCredentials = !!t.withCredentials), c && c !== "json" && (v.responseType = t.responseType), typeof t.onDownloadProgress == "function" && v.addEventListener("progress", Wh(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", Wh(t.onUploadProgress)), (t.cancelToken || t.signal) && (g = (E) => {
      v && (a(!E || E.type ? new Ma(null, t, v) : E), v.abort(), v = null);
    }, t.cancelToken && t.cancelToken.subscribe(g), t.signal && (t.signal.aborted ? g() : t.signal.addEventListener("abort", g)));
    const w = fA(C);
    if (w && Jn.protocols.indexOf(w) === -1) {
      a(new He("Unsupported protocol " + w + ":", He.ERR_BAD_REQUEST, t));
      return;
    }
    v.send(s || null);
  });
}, rl = {
  http: B_,
  xhr: pA
};
q.forEach(rl, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const Uh = (t) => `- ${t}`, vA = (t) => q.isFunction(t) || t === null || t === !1, op = {
  getAdapter: (t) => {
    t = q.isArray(t) ? t : [t];
    const { length: n } = t;
    let i, a;
    const s = {};
    for (let l = 0; l < n; l++) {
      i = t[l];
      let c;
      if (a = i, !vA(i) && (a = rl[(c = String(i)).toLowerCase()], a === void 0))
        throw new He(`Unknown adapter '${c}'`);
      if (a)
        break;
      s[c || "#" + l] = a;
    }
    if (!a) {
      const l = Object.entries(s).map(
        ([h, g]) => `adapter ${h} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = n ? l.length > 1 ? `since :
` + l.map(Uh).join(`
`) : " " + Uh(l[0]) : "as no adapter specified";
      throw new He(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: rl
};
function Wu(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ma(null, t);
}
function zh(t) {
  return Wu(t), t.headers = pr.from(t.headers), t.data = Bu.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), op.getAdapter(t.adapter || Ll.adapter)(t).then(function(a) {
    return Wu(t), a.data = Bu.call(
      t,
      t.transformResponse,
      a
    ), a.headers = pr.from(a.headers), a;
  }, function(a) {
    return ip(a) || (Wu(t), a && a.response && (a.response.data = Bu.call(
      t,
      t.transformResponse,
      a.response
    ), a.response.headers = pr.from(a.response.headers))), Promise.reject(a);
  });
}
const Hh = (t) => t instanceof pr ? t.toJSON() : t;
function qi(t, n) {
  n = n || {};
  const i = {};
  function a(y, b, v) {
    return q.isPlainObject(y) && q.isPlainObject(b) ? q.merge.call({ caseless: v }, y, b) : q.isPlainObject(b) ? q.merge({}, b) : q.isArray(b) ? b.slice() : b;
  }
  function s(y, b, v) {
    if (q.isUndefined(b)) {
      if (!q.isUndefined(y))
        return a(void 0, y, v);
    } else
      return a(y, b, v);
  }
  function l(y, b) {
    if (!q.isUndefined(b))
      return a(void 0, b);
  }
  function c(y, b) {
    if (q.isUndefined(b)) {
      if (!q.isUndefined(y))
        return a(void 0, y);
    } else
      return a(void 0, b);
  }
  function h(y, b, v) {
    if (v in n)
      return a(y, b);
    if (v in t)
      return a(void 0, y);
  }
  const g = {
    url: l,
    method: l,
    data: l,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: h,
    headers: (y, b) => s(Hh(y), Hh(b), !0)
  };
  return q.forEach(Object.keys(Object.assign({}, t, n)), function(b) {
    const v = g[b] || s, C = v(t[b], n[b], b);
    q.isUndefined(C) && v !== h || (i[b] = C);
  }), i;
}
const sp = "1.6.7", Pl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
  Pl[t] = function(a) {
    return typeof a === t || "a" + (n < 1 ? "n " : " ") + t;
  };
});
const jh = {};
Pl.transitional = function(n, i, a) {
  function s(l, c) {
    return "[Axios v" + sp + "] Transitional option '" + l + "'" + c + (a ? ". " + a : "");
  }
  return (l, c, h) => {
    if (n === !1)
      throw new He(
        s(c, " has been removed" + (i ? " in " + i : "")),
        He.ERR_DEPRECATED
      );
    return i && !jh[c] && (jh[c] = !0, console.warn(
      s(
        c,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), n ? n(l, c, h) : !0;
  };
};
function mA(t, n, i) {
  if (typeof t != "object")
    throw new He("options must be an object", He.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(t);
  let s = a.length;
  for (; s-- > 0; ) {
    const l = a[s], c = n[l];
    if (c) {
      const h = t[l], g = h === void 0 || c(h, l, t);
      if (g !== !0)
        throw new He("option " + l + " must be " + g, He.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new He("Unknown option " + l, He.ERR_BAD_OPTION);
  }
}
const il = {
  assertOptions: mA,
  validators: Pl
}, Tr = il.validators;
class jo {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new Fh(),
      response: new Fh()
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
  async request(n, i) {
    try {
      return await this._request(n, i);
    } catch (a) {
      if (a instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const l = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        a.stack ? l && !String(a.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + l) : a.stack = l;
      }
      throw a;
    }
  }
  _request(n, i) {
    typeof n == "string" ? (i = i || {}, i.url = n) : i = n || {}, i = qi(this.defaults, i);
    const { transitional: a, paramsSerializer: s, headers: l } = i;
    a !== void 0 && il.assertOptions(a, {
      silentJSONParsing: Tr.transitional(Tr.boolean),
      forcedJSONParsing: Tr.transitional(Tr.boolean),
      clarifyTimeoutError: Tr.transitional(Tr.boolean)
    }, !1), s != null && (q.isFunction(s) ? i.paramsSerializer = {
      serialize: s
    } : il.assertOptions(s, {
      encode: Tr.function,
      serialize: Tr.function
    }, !0)), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let c = l && q.merge(
      l.common,
      l[i.method]
    );
    l && q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete l[w];
      }
    ), i.headers = pr.concat(c, l);
    const h = [];
    let g = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(i) === !1 || (g = g && E.synchronous, h.unshift(E.fulfilled, E.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(E) {
      y.push(E.fulfilled, E.rejected);
    });
    let b, v = 0, C;
    if (!g) {
      const w = [zh.bind(this), void 0];
      for (w.unshift.apply(w, h), w.push.apply(w, y), C = w.length, b = Promise.resolve(i); v < C; )
        b = b.then(w[v++], w[v++]);
      return b;
    }
    C = h.length;
    let _ = i;
    for (v = 0; v < C; ) {
      const w = h[v++], E = h[v++];
      try {
        _ = w(_);
      } catch (O) {
        E.call(this, O);
        break;
      }
    }
    try {
      b = zh.call(this, _);
    } catch (w) {
      return Promise.reject(w);
    }
    for (v = 0, C = y.length; v < C; )
      b = b.then(y[v++], y[v++]);
    return b;
  }
  getUri(n) {
    n = qi(this.defaults, n);
    const i = ap(n.baseURL, n.url);
    return ep(i, n.params, n.paramsSerializer);
  }
}
q.forEach(["delete", "get", "head", "options"], function(n) {
  jo.prototype[n] = function(i, a) {
    return this.request(qi(a || {}, {
      method: n,
      url: i,
      data: (a || {}).data
    }));
  };
});
q.forEach(["post", "put", "patch"], function(n) {
  function i(a) {
    return function(l, c, h) {
      return this.request(qi(h || {}, {
        method: n,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: l,
        data: c
      }));
    };
  }
  jo.prototype[n] = i(), jo.prototype[n + "Form"] = i(!0);
});
const Bo = jo;
class Nl {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(l) {
      i = l;
    });
    const a = this;
    this.promise.then((s) => {
      if (!a._listeners)
        return;
      let l = a._listeners.length;
      for (; l-- > 0; )
        a._listeners[l](s);
      a._listeners = null;
    }), this.promise.then = (s) => {
      let l;
      const c = new Promise((h) => {
        a.subscribe(h), l = h;
      }).then(s);
      return c.cancel = function() {
        a.unsubscribe(l);
      }, c;
    }, n(function(l, c, h) {
      a.reason || (a.reason = new Ma(l, c, h), i(a.reason));
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
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(n);
    i !== -1 && this._listeners.splice(i, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new Nl(function(s) {
        n = s;
      }),
      cancel: n
    };
  }
}
const gA = Nl;
function yA(t) {
  return function(i) {
    return t.apply(null, i);
  };
}
function bA(t) {
  return q.isObject(t) && t.isAxiosError === !0;
}
const al = {
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
Object.entries(al).forEach(([t, n]) => {
  al[n] = t;
});
const wA = al;
function up(t) {
  const n = new Bo(t), i = Hd(Bo.prototype.request, n);
  return q.extend(i, Bo.prototype, n, { allOwnKeys: !0 }), q.extend(i, n, null, { allOwnKeys: !0 }), i.create = function(s) {
    return up(qi(t, s));
  }, i;
}
const Tt = up(Ll);
Tt.Axios = Bo;
Tt.CanceledError = Ma;
Tt.CancelToken = gA;
Tt.isCancel = ip;
Tt.VERSION = sp;
Tt.toFormData = us;
Tt.AxiosError = He;
Tt.Cancel = Tt.CanceledError;
Tt.all = function(n) {
  return Promise.all(n);
};
Tt.spread = yA;
Tt.isAxiosError = bA;
Tt.mergeConfig = qi;
Tt.AxiosHeaders = pr;
Tt.formToJSON = (t) => rp(q.isHTMLForm(t) ? new FormData(t) : t);
Tt.getAdapter = op.getAdapter;
Tt.HttpStatusCode = wA;
Tt.default = Tt;
const lp = Tt, cp = te.createContext(null), nC = () => te.useContext(cp), _A = ({
  children: t,
  baseURL: n,
  refreshSession: i,
  onSessionExpired: a
}) => {
  const [s, l] = r_();
  let c = null;
  const h = G.useMemo(() => {
    const g = lp.create({
      baseURL: n,
      headers: {
        Authorization: s ? `Bearer ${s.access_token}` : void 0,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    return g.interceptors.response.use((y) => y, async (y) => {
      var v, C, _;
      const b = (w) => g({
        ...y.config,
        headers: {
          ...y.config.headers,
          Authorization: `Bearer ${w}`
        }
      });
      if (s && !s.locked && ((v = y.response) == null ? void 0 : v.status) === 401)
        if (c)
          try {
            const w = await c;
            return b(w.access_token);
          } catch {
            throw new Error("Need relogin");
          }
        else {
          c = i({
            refreshToken: s.refresh_token,
            accessToken: s.access_token,
            baseURL: n
          });
          try {
            const w = await c;
            return l(w), b(w.access_token);
          } catch {
            ht.warn("Сессия истекла", {
              toastId: "session-stale"
            }), a();
          } finally {
            c = null;
          }
        }
      throw ((C = y.response) == null ? void 0 : C.status) === 500 && ht.error(/* @__PURE__ */ es("div", { children: [
        /* @__PURE__ */ et("div", { css: {
          fontWeight: "500"
        }, children: "Ошибка сервера" }),
        /* @__PURE__ */ et("div", { css: {
          padding: "0.25rem",
          fontSize: "0.75rem",
          lineHeight: "1rem"
        }, children: ((_ = y.response.data) == null ? void 0 : _.message) || y.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      }), y;
    }), g;
  }, [s == null ? void 0 : s.access_token]);
  return /* @__PURE__ */ et(cp.Provider, { value: {
    client: h
  }, children: t });
}, fp = te.createContext(null), AA = () => {
  const t = te.useContext(fp);
  if (!t)
    throw new Error("useRouteContext must be used within a RouteContextProvider");
  return t;
}, EA = ({
  children: t,
  routes: n
}) => /* @__PURE__ */ et(fp.Provider, { value: {
  routes: n
}, children: t }), xA = async ({
  baseURL: t,
  refreshToken: n,
  accessToken: i
}) => {
  const {
    data: {
      data: a
    }
  } = await lp.post("/api/user/refresh", {
    refresh_token: n
  }, {
    baseURL: t,
    headers: {
      Authorization: `Bearer ${i}`,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  return a;
}, OA = new e_({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    },
    mutations: {
      retry: !1
    }
  }
}), CA = m1({
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
}), TA = ({
  children: t,
  refreshSession: n,
  onSessionExpired: i,
  updateSession: a,
  session: s
}) => /* @__PURE__ */ et(n_, { session: s, setSession: a, children: /* @__PURE__ */ et(g1, { theme: CA, children: /* @__PURE__ */ et(_A, { refreshSession: n || xA, onSessionExpired: i, children: /* @__PURE__ */ et(t_, { client: OA, children: /* @__PURE__ */ et(EA, { routes: Ld, children: t }) }) }) }) }), SA = () => {
  const {
    routes: t
  } = AA();
  return t;
}, rC = xl(({
  className: t,
  ...n
}) => /* @__PURE__ */ et(y1, { ...n, classes: {
  popper: t
} }))`
  .${Eh.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Eh.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`;
var DA = "Expected a function", hp = "__lodash_hash_undefined__", RA = "[object Function]", LA = "[object GeneratorFunction]", PA = /[\\^$.*+?()[\]{}|]/g, NA = /^\[object .+?Constructor\]$/, IA = typeof hr == "object" && hr && hr.Object === Object && hr, MA = typeof self == "object" && self && self.Object === Object && self, dp = IA || MA || Function("return this")();
function kA(t, n) {
  return t == null ? void 0 : t[n];
}
function FA(t) {
  var n = !1;
  if (t != null && typeof t.toString != "function")
    try {
      n = !!(t + "");
    } catch {
    }
  return n;
}
var BA = Array.prototype, WA = Function.prototype, pp = Object.prototype, Uu = dp["__core-js_shared__"], $h = function() {
  var t = /[^.]+$/.exec(Uu && Uu.keys && Uu.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}(), vp = WA.toString, Il = pp.hasOwnProperty, UA = pp.toString, zA = RegExp(
  "^" + vp.call(Il).replace(PA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), HA = BA.splice, jA = mp(dp, "Map"), Aa = mp(Object, "create");
function oi(t) {
  var n = -1, i = t ? t.length : 0;
  for (this.clear(); ++n < i; ) {
    var a = t[n];
    this.set(a[0], a[1]);
  }
}
function $A() {
  this.__data__ = Aa ? Aa(null) : {};
}
function qA(t) {
  return this.has(t) && delete this.__data__[t];
}
function YA(t) {
  var n = this.__data__;
  if (Aa) {
    var i = n[t];
    return i === hp ? void 0 : i;
  }
  return Il.call(n, t) ? n[t] : void 0;
}
function GA(t) {
  var n = this.__data__;
  return Aa ? n[t] !== void 0 : Il.call(n, t);
}
function VA(t, n) {
  var i = this.__data__;
  return i[t] = Aa && n === void 0 ? hp : n, this;
}
oi.prototype.clear = $A;
oi.prototype.delete = qA;
oi.prototype.get = YA;
oi.prototype.has = GA;
oi.prototype.set = VA;
function Gi(t) {
  var n = -1, i = t ? t.length : 0;
  for (this.clear(); ++n < i; ) {
    var a = t[n];
    this.set(a[0], a[1]);
  }
}
function KA() {
  this.__data__ = [];
}
function QA(t) {
  var n = this.__data__, i = cs(n, t);
  if (i < 0)
    return !1;
  var a = n.length - 1;
  return i == a ? n.pop() : HA.call(n, i, 1), !0;
}
function XA(t) {
  var n = this.__data__, i = cs(n, t);
  return i < 0 ? void 0 : n[i][1];
}
function JA(t) {
  return cs(this.__data__, t) > -1;
}
function ZA(t, n) {
  var i = this.__data__, a = cs(i, t);
  return a < 0 ? i.push([t, n]) : i[a][1] = n, this;
}
Gi.prototype.clear = KA;
Gi.prototype.delete = QA;
Gi.prototype.get = XA;
Gi.prototype.has = JA;
Gi.prototype.set = ZA;
function si(t) {
  var n = -1, i = t ? t.length : 0;
  for (this.clear(); ++n < i; ) {
    var a = t[n];
    this.set(a[0], a[1]);
  }
}
function eE() {
  this.__data__ = {
    hash: new oi(),
    map: new (jA || Gi)(),
    string: new oi()
  };
}
function tE(t) {
  return fs(this, t).delete(t);
}
function nE(t) {
  return fs(this, t).get(t);
}
function rE(t) {
  return fs(this, t).has(t);
}
function iE(t, n) {
  return fs(this, t).set(t, n), this;
}
si.prototype.clear = eE;
si.prototype.delete = tE;
si.prototype.get = nE;
si.prototype.has = rE;
si.prototype.set = iE;
function cs(t, n) {
  for (var i = t.length; i--; )
    if (lE(t[i][0], n))
      return i;
  return -1;
}
function aE(t) {
  if (!gp(t) || sE(t))
    return !1;
  var n = cE(t) || FA(t) ? zA : NA;
  return n.test(uE(t));
}
function fs(t, n) {
  var i = t.__data__;
  return oE(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
}
function mp(t, n) {
  var i = kA(t, n);
  return aE(i) ? i : void 0;
}
function oE(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function sE(t) {
  return !!$h && $h in t;
}
function uE(t) {
  if (t != null) {
    try {
      return vp.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
function Ml(t, n) {
  if (typeof t != "function" || n && typeof n != "function")
    throw new TypeError(DA);
  var i = function() {
    var a = arguments, s = n ? n.apply(this, a) : a[0], l = i.cache;
    if (l.has(s))
      return l.get(s);
    var c = t.apply(this, a);
    return i.cache = l.set(s, c), c;
  };
  return i.cache = new (Ml.Cache || si)(), i;
}
Ml.Cache = si;
function lE(t, n) {
  return t === n || t !== t && n !== n;
}
function cE(t) {
  var n = gp(t) ? UA.call(t) : "";
  return n == RA || n == LA;
}
function gp(t) {
  var n = typeof t;
  return !!t && (n == "object" || n == "function");
}
var fE = Ml;
const yp = /* @__PURE__ */ Ol(fE);
function bp(t) {
  return JSON.stringify(t);
}
function hE(t) {
  return typeof t == "string";
}
function dE(t, n, i) {
  return i.indexOf(t) === n;
}
function pE(t) {
  return t.toLowerCase() === t;
}
function qh(t) {
  return t.indexOf(",") === -1 ? t : t.split(",");
}
function ol(t) {
  if (!t)
    return t;
  if (t === "C" || t === "posix" || t === "POSIX")
    return "en-US";
  if (t.indexOf(".") !== -1) {
    var n = t.split(".")[0], i = n === void 0 ? "" : n;
    return ol(i);
  }
  if (t.indexOf("@") !== -1) {
    var a = t.split("@")[0], i = a === void 0 ? "" : a;
    return ol(i);
  }
  if (t.indexOf("-") === -1 || !pE(t))
    return t;
  var s = t.split("-"), l = s[0], c = s[1], h = c === void 0 ? "" : c;
  return "".concat(l, "-").concat(h.toUpperCase());
}
function vE(t) {
  var n = t === void 0 ? {} : t, i = n.useFallbackLocale, a = i === void 0 ? !0 : i, s = n.fallbackLocale, l = s === void 0 ? "en-US" : s, c = [];
  if (typeof navigator < "u") {
    for (var h = navigator.languages || [], g = [], y = 0, b = h; y < b.length; y++) {
      var v = b[y];
      g = g.concat(qh(v));
    }
    var C = navigator.language, _ = C && qh(C);
    c = c.concat(g, _);
  }
  return a && c.push(l), c.filter(hE).map(ol).filter(dE);
}
var mE = yp(vE, bp);
function gE(t) {
  return mE(t)[0] || null;
}
var wp = yp(gE, bp);
function mr(t, n, i) {
  return function(s, l) {
    l === void 0 && (l = i);
    var c = t(s) + l;
    return n(c);
  };
}
function ka(t) {
  return function(i) {
    return new Date(t(i).getTime() - 1);
  };
}
function Fa(t, n) {
  return function(a) {
    return [t(a), n(a)];
  };
}
function gt(t) {
  if (t instanceof Date)
    return t.getFullYear();
  if (typeof t == "number")
    return t;
  var n = parseInt(t, 10);
  if (typeof t == "string" && !isNaN(n))
    return n;
  throw new Error("Failed to get year from date: ".concat(t, "."));
}
function Wr(t) {
  if (t instanceof Date)
    return t.getMonth();
  throw new Error("Failed to get month from date: ".concat(t, "."));
}
function hs(t) {
  if (t instanceof Date)
    return t.getDate();
  throw new Error("Failed to get year from date: ".concat(t, "."));
}
function Vi(t) {
  var n = gt(t), i = n + (-n + 1) % 100, a = /* @__PURE__ */ new Date();
  return a.setFullYear(i, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var yE = mr(gt, Vi, -100), _p = mr(gt, Vi, 100), kl = ka(_p), bE = mr(gt, kl, -100), Ap = Fa(Vi, kl);
function Ur(t) {
  var n = gt(t), i = n + (-n + 1) % 10, a = /* @__PURE__ */ new Date();
  return a.setFullYear(i, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var Ep = mr(gt, Ur, -10), Fl = mr(gt, Ur, 10), ds = ka(Fl), xp = mr(gt, ds, -10), Op = Fa(Ur, ds);
function Ki(t) {
  var n = gt(t), i = /* @__PURE__ */ new Date();
  return i.setFullYear(n, 0, 1), i.setHours(0, 0, 0, 0), i;
}
var Cp = mr(gt, Ki, -1), Bl = mr(gt, Ki, 1), ps = ka(Bl), Tp = mr(gt, ps, -1), wE = Fa(Ki, ps);
function Wl(t, n) {
  return function(a, s) {
    s === void 0 && (s = n);
    var l = gt(a), c = Wr(a) + s, h = /* @__PURE__ */ new Date();
    return h.setFullYear(l, c, 1), h.setHours(0, 0, 0, 0), t(h);
  };
}
function ui(t) {
  var n = gt(t), i = Wr(t), a = /* @__PURE__ */ new Date();
  return a.setFullYear(n, i, 1), a.setHours(0, 0, 0, 0), a;
}
var Sp = Wl(ui, -1), Ul = Wl(ui, 1), Ba = ka(Ul), Dp = Wl(Ba, -1), _E = Fa(ui, Ba);
function AE(t, n) {
  return function(a, s) {
    s === void 0 && (s = n);
    var l = gt(a), c = Wr(a), h = hs(a) + s, g = /* @__PURE__ */ new Date();
    return g.setFullYear(l, c, h), g.setHours(0, 0, 0, 0), t(g);
  };
}
function Wa(t) {
  var n = gt(t), i = Wr(t), a = hs(t), s = /* @__PURE__ */ new Date();
  return s.setFullYear(n, i, a), s.setHours(0, 0, 0, 0), s;
}
var EE = AE(Wa, 1), zl = ka(EE), xE = Fa(Wa, zl);
function Rp(t) {
  return hs(Ba(t));
}
var da, dt = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, Di = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
}, OE = (da = {}, da[dt.GREGORY] = [
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
], da[dt.HEBREW] = ["he", "he-IL"], da[dt.ISLAMIC] = [
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
], da), Hl = [0, 1, 2, 3, 4, 5, 6], zu = /* @__PURE__ */ new Map();
function CE(t) {
  return function(i, a) {
    var s = i || wp();
    zu.has(s) || zu.set(s, /* @__PURE__ */ new Map());
    var l = zu.get(s);
    return l.has(t) || l.set(t, new Intl.DateTimeFormat(s || void 0, t).format), l.get(t)(a);
  };
}
function TE(t) {
  var n = new Date(t);
  return new Date(n.setHours(12));
}
function li(t) {
  return function(n, i) {
    return CE(t)(n, TE(i));
  };
}
var SE = { day: "numeric" }, DE = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, RE = { month: "long" }, LE = {
  month: "long",
  year: "numeric"
}, PE = { weekday: "short" }, NE = { weekday: "long" }, IE = { year: "numeric" }, ME = li(SE), kE = li(DE), FE = li(RE), Lp = li(LE), BE = li(PE), WE = li(NE), vs = li(IE), UE = Hl[0], zE = Hl[5], Yh = Hl[6];
function Ea(t, n) {
  n === void 0 && (n = dt.ISO_8601);
  var i = t.getDay();
  switch (n) {
    case dt.ISO_8601:
      return (i + 6) % 7;
    case dt.ISLAMIC:
      return (i + 1) % 7;
    case dt.HEBREW:
    case dt.GREGORY:
      return i;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function HE(t) {
  var n = Vi(t);
  return gt(n);
}
function jE(t) {
  var n = Ur(t);
  return gt(n);
}
function sl(t, n) {
  n === void 0 && (n = dt.ISO_8601);
  var i = gt(t), a = Wr(t), s = t.getDate() - Ea(t, n);
  return new Date(i, a, s);
}
function $E(t, n) {
  n === void 0 && (n = dt.ISO_8601);
  var i = n === dt.GREGORY ? dt.GREGORY : dt.ISO_8601, a = sl(t, n), s = gt(t) + 1, l, c;
  do
    l = new Date(s, 0, i === dt.ISO_8601 ? 4 : 1), c = sl(l, n), s -= 1;
  while (t < c);
  return Math.round((a.getTime() - c.getTime()) / (864e5 * 7)) + 1;
}
function ii(t, n) {
  switch (t) {
    case "century":
      return Vi(n);
    case "decade":
      return Ur(n);
    case "year":
      return Ki(n);
    case "month":
      return ui(n);
    case "day":
      return Wa(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function qE(t, n) {
  switch (t) {
    case "century":
      return yE(n);
    case "decade":
      return Ep(n);
    case "year":
      return Cp(n);
    case "month":
      return Sp(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function Pp(t, n) {
  switch (t) {
    case "century":
      return _p(n);
    case "decade":
      return Fl(n);
    case "year":
      return Bl(n);
    case "month":
      return Ul(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function YE(t, n) {
  switch (t) {
    case "decade":
      return Ep(n, -100);
    case "year":
      return Cp(n, -10);
    case "month":
      return Sp(n, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function GE(t, n) {
  switch (t) {
    case "decade":
      return Fl(n, 100);
    case "year":
      return Bl(n, 10);
    case "month":
      return Ul(n, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function Np(t, n) {
  switch (t) {
    case "century":
      return kl(n);
    case "decade":
      return ds(n);
    case "year":
      return ps(n);
    case "month":
      return Ba(n);
    case "day":
      return zl(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function VE(t, n) {
  switch (t) {
    case "century":
      return bE(n);
    case "decade":
      return xp(n);
    case "year":
      return Tp(n);
    case "month":
      return Dp(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function KE(t, n) {
  switch (t) {
    case "decade":
      return xp(n, -100);
    case "year":
      return Tp(n, -10);
    case "month":
      return Dp(n, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function Gh(t, n) {
  switch (t) {
    case "century":
      return Ap(n);
    case "decade":
      return Op(n);
    case "year":
      return wE(n);
    case "month":
      return _E(n);
    case "day":
      return xE(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function QE(t, n, i) {
  var a = [n, i].sort(function(s, l) {
    return s.getTime() - l.getTime();
  });
  return [ii(t, a[0]), Np(t, a[1])];
}
function Ip(t, n, i) {
  return n === void 0 && (n = vs), i.map(function(a) {
    return n(t, a);
  }).join(" – ");
}
function XE(t, n, i) {
  return Ip(t, n, Ap(i));
}
function Mp(t, n, i) {
  return Ip(t, n, Op(i));
}
function JE(t) {
  return t.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function kp(t, n) {
  n === void 0 && (n = dt.ISO_8601);
  var i = t.getDay();
  switch (n) {
    case dt.ISLAMIC:
    case dt.HEBREW:
      return i === zE || i === Yh;
    case dt.ISO_8601:
    case dt.GREGORY:
      return i === Yh || i === UE;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var qn = "react-calendar__navigation";
function ZE(t) {
  var n = t.activeStartDate, i = t.drillUp, a = t.formatMonthYear, s = a === void 0 ? Lp : a, l = t.formatYear, c = l === void 0 ? vs : l, h = t.locale, g = t.maxDate, y = t.minDate, b = t.navigationAriaLabel, v = b === void 0 ? "" : b, C = t.navigationAriaLive, _ = t.navigationLabel, w = t.next2AriaLabel, E = w === void 0 ? "" : w, O = t.next2Label, D = O === void 0 ? "»" : O, B = t.nextAriaLabel, M = B === void 0 ? "" : B, U = t.nextLabel, ee = U === void 0 ? "›" : U, oe = t.prev2AriaLabel, de = oe === void 0 ? "" : oe, ie = t.prev2Label, fe = ie === void 0 ? "«" : ie, Fe = t.prevAriaLabel, Re = Fe === void 0 ? "" : Fe, Be = t.prevLabel, Qe = Be === void 0 ? "‹" : Be, je = t.setActiveStartDate, he = t.showDoubleView, Ce = t.view, qe = t.views, m = qe.indexOf(Ce) > 0, x = Ce !== "century", S = qE(Ce, n), P = x ? YE(Ce, n) : void 0, N = Pp(Ce, n), k = x ? GE(Ce, n) : void 0, K = function() {
    if (S.getFullYear() < 0)
      return !0;
    var be = VE(Ce, n);
    return y && y >= be;
  }(), J = x && function() {
    if (P.getFullYear() < 0)
      return !0;
    var be = KE(Ce, n);
    return y && y >= be;
  }(), V = g && g < N, X = x && g && g < k;
  function se() {
    je(S, "prev");
  }
  function Pe() {
    je(P, "prev2");
  }
  function Oe() {
    je(N, "next");
  }
  function Ee() {
    je(k, "next2");
  }
  function Ne(be) {
    var yt = function() {
      switch (Ce) {
        case "century":
          return XE(h, c, be);
        case "decade":
          return Mp(h, c, be);
        case "year":
          return c(h, be);
        case "month":
          return s(h, be);
        default:
          throw new Error("Invalid view: ".concat(Ce, "."));
      }
    }();
    return _ ? _({
      date: be,
      label: yt,
      locale: h || wp() || void 0,
      view: Ce
    }) : yt;
  }
  function ot() {
    var be = "".concat(qn, "__label");
    return te.createElement(
      "button",
      { "aria-label": v, "aria-live": C, className: be, disabled: !m, onClick: i, style: { flexGrow: 1 }, type: "button" },
      te.createElement("span", { className: "".concat(be, "__labelText ").concat(be, "__labelText--from") }, Ne(n)),
      he ? te.createElement(
        te.Fragment,
        null,
        te.createElement("span", { className: "".concat(be, "__divider") }, " – "),
        te.createElement("span", { className: "".concat(be, "__labelText ").concat(be, "__labelText--to") }, Ne(N))
      ) : null
    );
  }
  return te.createElement(
    "div",
    { className: qn },
    fe !== null && x ? te.createElement("button", { "aria-label": de, className: "".concat(qn, "__arrow ").concat(qn, "__prev2-button"), disabled: J, onClick: Pe, type: "button" }, fe) : null,
    Qe !== null && te.createElement("button", { "aria-label": Re, className: "".concat(qn, "__arrow ").concat(qn, "__prev-button"), disabled: K, onClick: se, type: "button" }, Qe),
    ot(),
    ee !== null && te.createElement("button", { "aria-label": M, className: "".concat(qn, "__arrow ").concat(qn, "__next-button"), disabled: V, onClick: Oe, type: "button" }, ee),
    D !== null && x ? te.createElement("button", { "aria-label": E, className: "".concat(qn, "__arrow ").concat(qn, "__next2-button"), disabled: X, onClick: Ee, type: "button" }, D) : null
  );
}
var Ri = globalThis && globalThis.__assign || function() {
  return Ri = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ri.apply(this, arguments);
}, ex = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function Vh(t) {
  return "".concat(t, "%");
}
function jl(t) {
  var n = t.children, i = t.className, a = t.count, s = t.direction, l = t.offset, c = t.style, h = t.wrap, g = ex(t, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return te.createElement("div", Ri({ className: i, style: Ri({ display: "flex", flexDirection: s, flexWrap: h ? "wrap" : "nowrap" }, c) }, g), te.Children.map(n, function(y, b) {
    var v = l && b === 0 ? Vh(100 * l / a) : null;
    return te.cloneElement(y, Ri(Ri({}, y.props), { style: {
      flexBasis: Vh(100 / a),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: v,
      marginInlineStart: v,
      marginInlineEnd: 0
    } }));
  }));
}
var tx = function() {
}, nx = tx;
const rx = /* @__PURE__ */ Ol(nx);
var Ci;
function ix(t, n, i) {
  return n && n > t ? n : i && i < t ? i : t;
}
function xa(t, n) {
  return n[0] <= t && n[1] >= t;
}
function ax(t, n) {
  return t[0] <= n[0] && t[1] >= n[1];
}
function Fp(t, n) {
  return xa(t[0], n) || xa(t[1], n);
}
function Kh(t, n, i) {
  var a = Fp(n, t), s = [];
  if (a) {
    s.push(i);
    var l = xa(t[0], n), c = xa(t[1], n);
    l && s.push("".concat(i, "Start")), c && s.push("".concat(i, "End")), l && c && s.push("".concat(i, "BothEnds"));
  }
  return s;
}
function ox(t) {
  return Array.isArray(t) ? t[0] !== null && t[1] !== null : t !== null;
}
function sx(t) {
  if (!t)
    throw new Error("args is required");
  var n = t.value, i = t.date, a = t.hover, s = "react-calendar__tile", l = [s];
  if (!i)
    return l;
  var c = /* @__PURE__ */ new Date(), h = function() {
    if (Array.isArray(i))
      return i;
    var _ = t.dateType;
    if (!_)
      throw new Error("dateType is required when date is not an array of two dates");
    return Gh(_, i);
  }();
  if (xa(c, h) && l.push("".concat(s, "--now")), !n || !ox(n))
    return l;
  var g = function() {
    if (Array.isArray(n))
      return n;
    var _ = t.valueType;
    if (!_)
      throw new Error("valueType is required when value is not an array of two dates");
    return Gh(_, n);
  }();
  ax(g, h) ? l.push("".concat(s, "--active")) : Fp(g, h) && l.push("".concat(s, "--hasActive"));
  var y = Kh(g, h, "".concat(s, "--range"));
  l.push.apply(l, y);
  var b = Array.isArray(n) ? n : [n];
  if (a && b.length === 1) {
    var v = a > g[0] ? [g[0], a] : [a, g[0]], C = Kh(v, h, "".concat(s, "--hover"));
    l.push.apply(l, C);
  }
  return l;
}
var ux = (Ci = {}, Ci[Di.ARABIC] = dt.ISLAMIC, Ci[Di.HEBREW] = dt.HEBREW, Ci[Di.ISO_8601] = dt.ISO_8601, Ci[Di.US] = dt.GREGORY, Ci);
function lx(t) {
  return t !== void 0 && t in Di;
}
var Qh = !1;
function ms(t) {
  if (lx(t)) {
    var n = ux[t];
    return rx(Qh, 'Specifying calendarType="'.concat(t, '" is deprecated. Use calendarType="').concat(n, '" instead.')), Qh = !0, n;
  }
  return t;
}
function gs(t) {
  for (var n = t.className, i = t.count, a = i === void 0 ? 3 : i, s = t.dateTransform, l = t.dateType, c = t.end, h = t.hover, g = t.offset, y = t.renderTile, b = t.start, v = t.step, C = v === void 0 ? 1 : v, _ = t.value, w = t.valueType, E = [], O = b; O <= c; O += C) {
    var D = s(O);
    E.push(y({
      classes: sx({
        date: D,
        dateType: l,
        hover: h,
        value: _,
        valueType: w
      }),
      date: D
    }));
  }
  return te.createElement(jl, { className: n, count: a, offset: g, wrap: !0 }, E);
}
function ys(t) {
  var n = t.activeStartDate, i = t.children, a = t.classes, s = t.date, l = t.formatAbbr, c = t.locale, h = t.maxDate, g = t.maxDateTransform, y = t.minDate, b = t.minDateTransform, v = t.onClick, C = t.onMouseOver, _ = t.style, w = t.tileClassName, E = t.tileContent, O = t.tileDisabled, D = t.view, B = G.useMemo(function() {
    var U = { activeStartDate: n, date: s, view: D };
    return typeof w == "function" ? w(U) : w;
  }, [n, s, w, D]), M = G.useMemo(function() {
    var U = { activeStartDate: n, date: s, view: D };
    return typeof E == "function" ? E(U) : E;
  }, [n, s, E, D]);
  return te.createElement(
    "button",
    { className: Zo(a, B), disabled: y && b(y) > s || h && g(h) < s || O && O({ activeStartDate: n, date: s, view: D }), onClick: v ? function(U) {
      return v(s, U);
    } : void 0, onFocus: C ? function() {
      return C(s);
    } : void 0, onMouseOver: C ? function() {
      return C(s);
    } : void 0, style: _, type: "button" },
    l ? te.createElement("abbr", { "aria-label": l(c, s) }, i) : i,
    M
  );
}
var ul = globalThis && globalThis.__assign || function() {
  return ul = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ul.apply(this, arguments);
}, cx = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, Hu = "react-calendar__century-view__decades__decade";
function fx(t) {
  var n = t.classes, i = n === void 0 ? [] : n, a = t.currentCentury, s = t.formatYear, l = s === void 0 ? vs : s, c = cx(t, ["classes", "currentCentury", "formatYear"]), h = c.date, g = c.locale, y = [];
  return i && y.push.apply(y, i), Hu && y.push(Hu), Vi(h).getFullYear() !== a && y.push("".concat(Hu, "--neighboringCentury")), te.createElement(ys, ul({}, c, { classes: y, maxDateTransform: ds, minDateTransform: Ur, view: "century" }), Mp(g, l, h));
}
var ll = globalThis && globalThis.__assign || function() {
  return ll = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ll.apply(this, arguments);
}, Xh = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function hx(t) {
  var n = t.activeStartDate, i = t.hover, a = t.showNeighboringCentury, s = t.value, l = t.valueType, c = Xh(t, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), h = HE(n), g = h + (a ? 119 : 99);
  return te.createElement(gs, { className: "react-calendar__century-view__decades", dateTransform: Ur, dateType: "decade", end: g, hover: i, renderTile: function(y) {
    var b = y.date, v = Xh(y, ["date"]);
    return te.createElement(fx, ll({ key: b.getTime() }, c, v, { activeStartDate: n, currentCentury: h, date: b }));
  }, start: h, step: 10, value: s, valueType: l });
}
var Jh = globalThis && globalThis.__spreadArray || function(t, n, i) {
  if (i || arguments.length === 2)
    for (var a = 0, s = n.length, l; a < s; a++)
      (l || !(a in n)) && (l || (l = Array.prototype.slice.call(n, 0, a)), l[a] = n[a]);
  return t.concat(l || Array.prototype.slice.call(n));
}, dx = Object.values(dt), px = Object.values(Di), cl = ["century", "decade", "year", "month"], Bp = Y.oneOf(Jh(Jh([], dx, !0), px, !0)), $o = Y.oneOfType([
  Y.string,
  Y.arrayOf(Y.string)
]), $l = function(n, i, a) {
  var s = n, l = i, c = s[l];
  if (!c)
    return null;
  if (!(c instanceof Date))
    return new Error("Invalid prop `".concat(i, "` of type `").concat(typeof c, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var h = n.maxDate;
  return h && c > h ? new Error("Invalid prop `".concat(i, "` of type `").concat(typeof c, "` supplied to `").concat(a, "`, minDate cannot be larger than maxDate.")) : null;
}, ql = function(n, i, a) {
  var s = n, l = i, c = s[l];
  if (!c)
    return null;
  if (!(c instanceof Date))
    return new Error("Invalid prop `".concat(i, "` of type `").concat(typeof c, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var h = n.minDate;
  return h && c < h ? new Error("Invalid prop `".concat(i, "` of type `").concat(typeof c, "` supplied to `").concat(a, "`, maxDate cannot be smaller than minDate.")) : null;
}, vx = Y.oneOfType([
  Y.func,
  Y.exact({
    current: Y.any
  })
]), mx = Y.arrayOf(Y.oneOfType([Y.instanceOf(Date), Y.oneOf([null])]).isRequired), gx = Y.oneOfType([
  Y.instanceOf(Date),
  Y.oneOf([null]),
  mx
]);
Y.arrayOf(Y.oneOf(cl));
var qo = function(n, i, a) {
  var s = n, l = i, c = s[l];
  return c !== void 0 && (typeof c != "string" || cl.indexOf(c) === -1) ? new Error("Invalid prop `".concat(i, "` of value `").concat(c, "` supplied to `").concat(a, "`, expected one of [").concat(cl.map(function(h) {
    return '"'.concat(h, '"');
  }).join(", "), "].")) : null;
};
qo.isRequired = function(n, i, a, s, l) {
  var c = n, h = i, g = c[h];
  return g ? qo(n, i, a) : new Error("The prop `".concat(i, "` is marked as required in `").concat(a, "`, but its value is `").concat(g, "`."));
};
var yx = function(t) {
  return Y.arrayOf(t);
}, bs = {
  activeStartDate: Y.instanceOf(Date).isRequired,
  hover: Y.instanceOf(Date),
  locale: Y.string,
  maxDate: ql,
  minDate: $l,
  onClick: Y.func,
  onMouseOver: Y.func,
  tileClassName: Y.oneOfType([Y.func, $o]),
  tileContent: Y.oneOfType([Y.func, Y.node]),
  value: gx,
  valueType: Y.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
Y.instanceOf(Date).isRequired, Y.arrayOf(Y.string.isRequired).isRequired, Y.instanceOf(Date).isRequired, Y.string, Y.func, Y.func, Y.objectOf(Y.oneOfType([Y.string, Y.number])), Y.oneOfType([Y.func, $o]), Y.oneOfType([Y.func, Y.node]), Y.func;
var Oa = globalThis && globalThis.__assign || function() {
  return Oa = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Oa.apply(this, arguments);
}, Wp = function(n) {
  function i() {
    return te.createElement(hx, Oa({}, n));
  }
  return te.createElement("div", { className: "react-calendar__century-view" }, i());
};
Wp.propTypes = Oa(Oa({}, bs), { showNeighboringCentury: Y.bool });
const bx = Wp;
var fl = globalThis && globalThis.__assign || function() {
  return fl = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, fl.apply(this, arguments);
}, wx = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, ju = "react-calendar__decade-view__years__year";
function _x(t) {
  var n = t.classes, i = n === void 0 ? [] : n, a = t.currentDecade, s = t.formatYear, l = s === void 0 ? vs : s, c = wx(t, ["classes", "currentDecade", "formatYear"]), h = c.date, g = c.locale, y = [];
  return i && y.push.apply(y, i), ju && y.push(ju), Ur(h).getFullYear() !== a && y.push("".concat(ju, "--neighboringDecade")), te.createElement(ys, fl({}, c, { classes: y, maxDateTransform: ps, minDateTransform: Ki, view: "decade" }), l(g, h));
}
var hl = globalThis && globalThis.__assign || function() {
  return hl = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, hl.apply(this, arguments);
}, Zh = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function Ax(t) {
  var n = t.activeStartDate, i = t.hover, a = t.showNeighboringDecade, s = t.value, l = t.valueType, c = Zh(t, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), h = jE(n), g = h + (a ? 11 : 9);
  return te.createElement(gs, { className: "react-calendar__decade-view__years", dateTransform: Ki, dateType: "year", end: g, hover: i, renderTile: function(y) {
    var b = y.date, v = Zh(y, ["date"]);
    return te.createElement(_x, hl({ key: b.getTime() }, c, v, { activeStartDate: n, currentDecade: h, date: b }));
  }, start: h, value: s, valueType: l });
}
var Ca = globalThis && globalThis.__assign || function() {
  return Ca = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ca.apply(this, arguments);
}, Up = function(n) {
  function i() {
    return te.createElement(Ax, Ca({}, n));
  }
  return te.createElement("div", { className: "react-calendar__decade-view" }, i());
};
Up.propTypes = Ca(Ca({}, bs), { showNeighboringDecade: Y.bool });
const Ex = Up;
var dl = globalThis && globalThis.__assign || function() {
  return dl = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, dl.apply(this, arguments);
}, xx = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, ed = globalThis && globalThis.__spreadArray || function(t, n, i) {
  if (i || arguments.length === 2)
    for (var a = 0, s = n.length, l; a < s; a++)
      (l || !(a in n)) && (l || (l = Array.prototype.slice.call(n, 0, a)), l[a] = n[a]);
  return t.concat(l || Array.prototype.slice.call(n));
}, Ox = "react-calendar__year-view__months__month";
function Cx(t) {
  var n = t.classes, i = n === void 0 ? [] : n, a = t.formatMonth, s = a === void 0 ? FE : a, l = t.formatMonthYear, c = l === void 0 ? Lp : l, h = xx(t, ["classes", "formatMonth", "formatMonthYear"]), g = h.date, y = h.locale;
  return te.createElement(ys, dl({}, h, { classes: ed(ed([], i, !0), [Ox], !1), formatAbbr: c, maxDateTransform: Ba, minDateTransform: ui, view: "year" }), s(y, g));
}
var pl = globalThis && globalThis.__assign || function() {
  return pl = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, pl.apply(this, arguments);
}, td = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function Tx(t) {
  var n = t.activeStartDate, i = t.hover, a = t.value, s = t.valueType, l = td(t, ["activeStartDate", "hover", "value", "valueType"]), c = 0, h = 11, g = gt(n);
  return te.createElement(gs, { className: "react-calendar__year-view__months", dateTransform: function(y) {
    var b = /* @__PURE__ */ new Date();
    return b.setFullYear(g, y, 1), ui(b);
  }, dateType: "month", end: h, hover: i, renderTile: function(y) {
    var b = y.date, v = td(y, ["date"]);
    return te.createElement(Cx, pl({ key: b.getTime() }, l, v, { activeStartDate: n, date: b }));
  }, start: c, value: a, valueType: s });
}
var Yo = globalThis && globalThis.__assign || function() {
  return Yo = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Yo.apply(this, arguments);
}, zp = function(n) {
  function i() {
    return te.createElement(Tx, Yo({}, n));
  }
  return te.createElement("div", { className: "react-calendar__year-view" }, i());
};
zp.propTypes = Yo({}, bs);
const Sx = zp;
var vl = globalThis && globalThis.__assign || function() {
  return vl = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, vl.apply(this, arguments);
}, Dx = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, Lo = "react-calendar__month-view__days__day";
function Rx(t) {
  var n = t.calendarType, i = t.classes, a = i === void 0 ? [] : i, s = t.currentMonthIndex, l = t.formatDay, c = l === void 0 ? ME : l, h = t.formatLongDate, g = h === void 0 ? kE : h, y = Dx(t, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), b = ms(n), v = y.date, C = y.locale, _ = [];
  return a && _.push.apply(_, a), Lo && _.push(Lo), kp(v, b) && _.push("".concat(Lo, "--weekend")), v.getMonth() !== s && _.push("".concat(Lo, "--neighboringMonth")), te.createElement(ys, vl({}, y, { classes: _, formatAbbr: g, maxDateTransform: zl, minDateTransform: Wa, view: "month" }), c(C, v));
}
var ml = globalThis && globalThis.__assign || function() {
  return ml = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ml.apply(this, arguments);
}, nd = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function Lx(t) {
  var n = t.activeStartDate, i = t.calendarType, a = t.hover, s = t.showFixedNumberOfWeeks, l = t.showNeighboringMonth, c = t.value, h = t.valueType, g = nd(t, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), y = ms(i), b = gt(n), v = Wr(n), C = s || l, _ = Ea(n, y), w = C ? 0 : _, E = (C ? -_ : 0) + 1, O = function() {
    if (s)
      return E + 6 * 7 - 1;
    var D = Rp(n);
    if (l) {
      var B = /* @__PURE__ */ new Date();
      B.setFullYear(b, v, D), B.setHours(0, 0, 0, 0);
      var M = 7 - Ea(B, y) - 1;
      return D + M;
    }
    return D;
  }();
  return te.createElement(gs, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(D) {
    var B = /* @__PURE__ */ new Date();
    return B.setFullYear(b, v, D), Wa(B);
  }, dateType: "day", hover: a, end: O, renderTile: function(D) {
    var B = D.date, M = nd(D, ["date"]);
    return te.createElement(Rx, ml({ key: B.getTime() }, g, M, { activeStartDate: n, calendarType: i, currentMonthIndex: v, date: B }));
  }, offset: w, start: E, value: c, valueType: h });
}
var Hp = "react-calendar__month-view__weekdays", $u = "".concat(Hp, "__weekday");
function Px(t) {
  for (var n = t.calendarType, i = t.formatShortWeekday, a = i === void 0 ? BE : i, s = t.formatWeekday, l = s === void 0 ? WE : s, c = t.locale, h = t.onMouseLeave, g = ms(n), y = /* @__PURE__ */ new Date(), b = ui(y), v = gt(b), C = Wr(b), _ = [], w = 1; w <= 7; w += 1) {
    var E = new Date(v, C, w - Ea(b, g)), O = l(c, E);
    _.push(te.createElement(
      "div",
      { key: w, className: Zo($u, JE(E) && "".concat($u, "--current"), kp(E, g) && "".concat($u, "--weekend")) },
      te.createElement("abbr", { "aria-label": O, title: O }, a(c, E).replace(".", ""))
    ));
  }
  return te.createElement(jl, { className: Hp, count: 7, onFocus: h, onMouseOver: h }, _);
}
var Go = globalThis && globalThis.__assign || function() {
  return Go = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Go.apply(this, arguments);
}, rd = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, id = "react-calendar__tile";
function Nx(t) {
  var n = t.onClickWeekNumber, i = t.weekNumber, a = te.createElement("span", null, i);
  if (n) {
    var s = t.date, l = t.onClickWeekNumber, c = t.weekNumber, h = rd(t, ["date", "onClickWeekNumber", "weekNumber"]);
    return te.createElement("button", Go({}, h, { className: id, onClick: function(g) {
      return l(c, s, g);
    }, type: "button" }), a);
  } else {
    t.date, t.onClickWeekNumber, t.weekNumber;
    var h = rd(t, ["date", "onClickWeekNumber", "weekNumber"]);
    return te.createElement("div", Go({}, h, { className: id }), a);
  }
}
function Ix(t) {
  var n = t.activeStartDate, i = t.calendarType, a = t.onClickWeekNumber, s = t.onMouseLeave, l = t.showFixedNumberOfWeeks, c = ms(i), h = function() {
    if (l)
      return 6;
    var b = Rp(n), v = Ea(n, c), C = b - (7 - v);
    return 1 + Math.ceil(C / 7);
  }(), g = function() {
    for (var b = gt(n), v = Wr(n), C = hs(n), _ = [], w = 0; w < h; w += 1)
      _.push(sl(new Date(b, v, C + w * 7), c));
    return _;
  }(), y = g.map(function(b) {
    return $E(b, c);
  });
  return te.createElement(jl, { className: "react-calendar__month-view__weekNumbers", count: h, direction: "column", onFocus: s, onMouseOver: s, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, y.map(function(b, v) {
    var C = g[v];
    if (!C)
      throw new Error("date is not defined");
    return te.createElement(Nx, { key: b, date: C, onClickWeekNumber: a, weekNumber: b });
  }));
}
var Ta = globalThis && globalThis.__assign || function() {
  return Ta = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ta.apply(this, arguments);
}, Mx = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function kx(t) {
  if (t)
    for (var n = 0, i = Object.entries(OE); n < i.length; n++) {
      var a = i[n], s = a[0], l = a[1];
      if (l.includes(t))
        return s;
    }
  return dt.ISO_8601;
}
var jp = function(n) {
  var i = n.activeStartDate, a = n.locale, s = n.onMouseLeave, l = n.showFixedNumberOfWeeks, c = n.calendarType, h = c === void 0 ? kx(a) : c, g = n.formatShortWeekday, y = n.formatWeekday, b = n.onClickWeekNumber, v = n.showWeekNumbers, C = Mx(n, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function _() {
    return te.createElement(Px, { calendarType: h, formatShortWeekday: g, formatWeekday: y, locale: a, onMouseLeave: s });
  }
  function w() {
    return v ? te.createElement(Ix, { activeStartDate: i, calendarType: h, onClickWeekNumber: b, onMouseLeave: s, showFixedNumberOfWeeks: l }) : null;
  }
  function E() {
    return te.createElement(Lx, Ta({ calendarType: h }, C));
  }
  var O = "react-calendar__month-view";
  return te.createElement(
    "div",
    { className: Zo(O, v ? "".concat(O, "--weekNumbers") : "") },
    te.createElement(
      "div",
      { style: {
        display: "flex",
        alignItems: "flex-end"
      } },
      w(),
      te.createElement(
        "div",
        { style: {
          flexGrow: 1,
          width: "100%"
        } },
        _(),
        E()
      )
    )
  );
};
jp.propTypes = Ta(Ta({}, bs), { calendarType: Bp, formatDay: Y.func, formatLongDate: Y.func, formatShortWeekday: Y.func, formatWeekday: Y.func, onClickWeekNumber: Y.func, onMouseLeave: Y.func, showFixedNumberOfWeeks: Y.bool, showNeighboringMonth: Y.bool, showWeekNumbers: Y.bool });
const Fx = jp;
var Li = globalThis && globalThis.__assign || function() {
  return Li = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Li.apply(this, arguments);
}, Po = "react-calendar", Pi = ["century", "decade", "year", "month"], Bx = ["decade", "year", "month", "day"], Yl = /* @__PURE__ */ new Date();
Yl.setFullYear(1, 0, 1);
Yl.setHours(0, 0, 0, 0);
var Wx = /* @__PURE__ */ new Date(864e13);
function va(t) {
  return t instanceof Date ? t : new Date(t);
}
function $p(t, n) {
  return Pi.slice(Pi.indexOf(t), Pi.indexOf(n) + 1);
}
function Ux(t, n, i) {
  var a = $p(n, i);
  return a.indexOf(t) !== -1;
}
function Gl(t, n, i) {
  return t && Ux(t, n, i) ? t : i;
}
function qp(t) {
  var n = Pi.indexOf(t);
  return Bx[n];
}
function zx(t, n) {
  var i = Array.isArray(t) ? t[n] : t;
  if (!i)
    return null;
  var a = va(i);
  if (isNaN(a.getTime()))
    throw new Error("Invalid date: ".concat(t));
  return a;
}
function Yp(t, n) {
  var i = t.value, a = t.minDate, s = t.maxDate, l = t.maxDetail, c = zx(i, n);
  if (!c)
    return null;
  var h = qp(l), g = function() {
    switch (n) {
      case 0:
        return ii(h, c);
      case 1:
        return Np(h, c);
      default:
        throw new Error("Invalid index value: ".concat(n));
    }
  }();
  return ix(g, a, s);
}
var Vl = function(t) {
  return Yp(t, 0);
}, Gp = function(t) {
  return Yp(t, 1);
}, Hx = function(t) {
  return [Vl, Gp].map(function(n) {
    return n(t);
  });
};
function Vp(t) {
  var n = t.maxDate, i = t.maxDetail, a = t.minDate, s = t.minDetail, l = t.value, c = t.view, h = Gl(c, s, i), g = Vl({
    value: l,
    minDate: a,
    maxDate: n,
    maxDetail: i
  }) || /* @__PURE__ */ new Date();
  return ii(h, g);
}
function jx(t) {
  var n = t.activeStartDate, i = t.defaultActiveStartDate, a = t.defaultValue, s = t.defaultView, l = t.maxDate, c = t.maxDetail, h = t.minDate, g = t.minDetail, y = t.value, b = t.view, v = Gl(b, g, c), C = n || i;
  return C ? ii(v, C) : Vp({
    maxDate: l,
    maxDetail: c,
    minDate: h,
    minDetail: g,
    value: y || a,
    view: b || s
  });
}
function qu(t) {
  return t && (!Array.isArray(t) || t.length === 1);
}
function No(t, n) {
  return t instanceof Date && n instanceof Date && t.getTime() === n.getTime();
}
var Kp = G.forwardRef(function(n, i) {
  var a = n.activeStartDate, s = n.allowPartialRange, l = n.calendarType, c = n.className, h = n.defaultActiveStartDate, g = n.defaultValue, y = n.defaultView, b = n.formatDay, v = n.formatLongDate, C = n.formatMonth, _ = n.formatMonthYear, w = n.formatShortWeekday, E = n.formatWeekday, O = n.formatYear, D = n.goToRangeStartOnSelect, B = D === void 0 ? !0 : D, M = n.inputRef, U = n.locale, ee = n.maxDate, oe = ee === void 0 ? Wx : ee, de = n.maxDetail, ie = de === void 0 ? "month" : de, fe = n.minDate, Fe = fe === void 0 ? Yl : fe, Re = n.minDetail, Be = Re === void 0 ? "century" : Re, Qe = n.navigationAriaLabel, je = n.navigationAriaLive, he = n.navigationLabel, Ce = n.next2AriaLabel, qe = n.next2Label, m = n.nextAriaLabel, x = n.nextLabel, S = n.onActiveStartDateChange, P = n.onChange, N = n.onClickDay, k = n.onClickDecade, K = n.onClickMonth, J = n.onClickWeekNumber, V = n.onClickYear, X = n.onDrillDown, se = n.onDrillUp, Pe = n.onViewChange, Oe = n.prev2AriaLabel, Ee = n.prev2Label, Ne = n.prevAriaLabel, ot = n.prevLabel, be = n.returnValue, yt = be === void 0 ? "start" : be, lt = n.selectRange, ct = n.showDoubleView, pt = n.showFixedNumberOfWeeks, nt = n.showNavigation, It = nt === void 0 ? !0 : nt, tt = n.showNeighboringCentury, H = n.showNeighboringDecade, F = n.showNeighboringMonth, Z = F === void 0 ? !0 : F, ne = n.showWeekNumbers, ae = n.tileClassName, Ie = n.tileContent, Ye = n.tileDisabled, rt = n.value, le = n.view, $e = G.useState(h), Et = $e[0], vt = $e[1], it = G.useState(null), Ve = it[0], Wt = it[1], Mt = G.useState(Array.isArray(g) ? g.map(function(Te) {
    return Te !== null ? va(Te) : null;
  }) : g != null ? va(g) : null), sn = Mt[0], vn = Mt[1], Pn = G.useState(y), mn = Pn[0], we = Pn[1], We = a || Et || jx({
    activeStartDate: a,
    defaultActiveStartDate: h,
    defaultValue: g,
    defaultView: y,
    maxDate: oe,
    maxDetail: ie,
    minDate: Fe,
    minDetail: Be,
    value: rt,
    view: le
  }), Xe = function() {
    var Te = function() {
      return lt && qu(sn) ? sn : rt !== void 0 ? rt : sn;
    }();
    return Te ? Array.isArray(Te) ? Te.map(function(st) {
      return st !== null ? va(st) : null;
    }) : Te !== null ? va(Te) : null : null;
  }(), xt = qp(ie), _e = Gl(le || mn, Be, ie), _t = $p(Be, ie), Qt = lt ? Ve : null, kt = _t.indexOf(_e) < _t.length - 1, zn = _t.indexOf(_e) > 0, Nn = G.useCallback(function(Te) {
    var st = function() {
      switch (yt) {
        case "start":
          return Vl;
        case "end":
          return Gp;
        case "range":
          return Hx;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return st({
      maxDate: oe,
      maxDetail: ie,
      minDate: Fe,
      value: Te
    });
  }, [oe, ie, Fe, yt]), Xt = G.useCallback(function(Te, st) {
    vt(Te);
    var ge = {
      action: st,
      activeStartDate: Te,
      value: Xe,
      view: _e
    };
    S && !No(We, Te) && S(ge);
  }, [We, S, Xe, _e]), gn = G.useCallback(function(Te, st) {
    var ge = function() {
      switch (_e) {
        case "century":
          return k;
        case "decade":
          return V;
        case "year":
          return K;
        case "month":
          return N;
        default:
          throw new Error("Invalid view: ".concat(_e, "."));
      }
    }();
    ge && ge(Te, st);
  }, [N, k, K, V, _e]), tr = G.useCallback(function(Te, st) {
    if (kt) {
      gn(Te, st);
      var ge = _t[_t.indexOf(_e) + 1];
      if (!ge)
        throw new Error("Attempted to drill down from the lowest view.");
      vt(Te), we(ge);
      var St = {
        action: "drillDown",
        activeStartDate: Te,
        value: Xe,
        view: ge
      };
      S && !No(We, Te) && S(St), Pe && _e !== ge && Pe(St), X && X(St);
    }
  }, [
    We,
    kt,
    S,
    gn,
    X,
    Pe,
    Xe,
    _e,
    _t
  ]), Jt = G.useCallback(function() {
    if (zn) {
      var Te = _t[_t.indexOf(_e) - 1];
      if (!Te)
        throw new Error("Attempted to drill up from the highest view.");
      var st = ii(Te, We);
      vt(st), we(Te);
      var ge = {
        action: "drillUp",
        activeStartDate: st,
        value: Xe,
        view: Te
      };
      S && !No(We, st) && S(ge), Pe && _e !== Te && Pe(ge), se && se(ge);
    }
  }, [
    We,
    zn,
    S,
    se,
    Pe,
    Xe,
    _e,
    _t
  ]), Zt = G.useCallback(function(Te, st) {
    var ge = Xe;
    gn(Te, st);
    var St = lt && !qu(ge), qt;
    if (lt)
      if (St)
        qt = ii(xt, Te);
      else {
        if (!ge)
          throw new Error("previousValue is required");
        if (Array.isArray(ge))
          throw new Error("previousValue must not be an array");
        qt = QE(xt, ge, Te);
      }
    else
      qt = Nn(Te);
    var zr = (
      // Range selection turned off
      !lt || // Range selection turned on, first value
      St || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      B ? Vp({
        maxDate: oe,
        maxDetail: ie,
        minDate: Fe,
        minDetail: Be,
        value: qt,
        view: _e
      }) : null
    );
    st.persist(), vt(zr), vn(qt);
    var ws = {
      action: "onChange",
      activeStartDate: zr,
      value: qt,
      view: _e
    };
    if (S && !No(We, zr) && S(ws), P)
      if (lt) {
        var fi = qu(qt);
        if (!fi)
          P(qt || null, st);
        else if (s) {
          if (Array.isArray(qt))
            throw new Error("value must not be an array");
          P([qt || null, null], st);
        }
      } else
        P(qt || null, st);
  }, [
    We,
    s,
    Nn,
    B,
    oe,
    ie,
    Fe,
    Be,
    S,
    P,
    gn,
    lt,
    Xe,
    xt,
    _e
  ]);
  function gr(Te) {
    Wt(Te);
  }
  function yn() {
    Wt(null);
  }
  G.useImperativeHandle(i, function() {
    return {
      activeStartDate: We,
      drillDown: tr,
      drillUp: Jt,
      onChange: Zt,
      setActiveStartDate: Xt,
      value: Xe,
      view: _e
    };
  }, [We, tr, Jt, Zt, Xt, Xe, _e]);
  function en(Te) {
    var st = Te ? Pp(_e, We) : ii(_e, We), ge = kt ? tr : Zt, St = {
      activeStartDate: st,
      hover: Qt,
      locale: U,
      maxDate: oe,
      minDate: Fe,
      onClick: ge,
      onMouseOver: lt ? gr : void 0,
      tileClassName: ae,
      tileContent: Ie,
      tileDisabled: Ye,
      value: Xe,
      valueType: xt
    };
    switch (_e) {
      case "century":
        return te.createElement(bx, Li({ formatYear: O, showNeighboringCentury: tt }, St));
      case "decade":
        return te.createElement(Ex, Li({ formatYear: O, showNeighboringDecade: H }, St));
      case "year":
        return te.createElement(Sx, Li({ formatMonth: C, formatMonthYear: _ }, St));
      case "month":
        return te.createElement(Fx, Li({ calendarType: l, formatDay: b, formatLongDate: v, formatShortWeekday: w, formatWeekday: E, onClickWeekNumber: J, onMouseLeave: lt ? yn : void 0, showFixedNumberOfWeeks: typeof pt < "u" ? pt : ct, showNeighboringMonth: Z, showWeekNumbers: ne }, St));
      default:
        throw new Error("Invalid view: ".concat(_e, "."));
    }
  }
  function ci() {
    return It ? te.createElement(ZE, { activeStartDate: We, drillUp: Jt, formatMonthYear: _, formatYear: O, locale: U, maxDate: oe, minDate: Fe, navigationAriaLabel: Qe, navigationAriaLive: je, navigationLabel: he, next2AriaLabel: Ce, next2Label: qe, nextAriaLabel: m, nextLabel: x, prev2AriaLabel: Oe, prev2Label: Ee, prevAriaLabel: Ne, prevLabel: ot, setActiveStartDate: Xt, showDoubleView: ct, view: _e, views: _t }) : null;
  }
  var Qi = Array.isArray(Xe) ? Xe : [Xe];
  return te.createElement(
    "div",
    { className: Zo(Po, lt && Qi.length === 1 && "".concat(Po, "--selectRange"), ct && "".concat(Po, "--doubleView"), c), ref: M },
    ci(),
    te.createElement(
      "div",
      { className: "".concat(Po, "__viewContainer"), onBlur: lt ? yn : void 0, onMouseLeave: lt ? yn : void 0 },
      en(),
      ct ? en(!0) : null
    )
  );
}), ad = Y.instanceOf(Date), od = Y.oneOfType([Y.string, Y.instanceOf(Date)]), sd = Y.oneOfType([od, yx(od)]);
Kp.propTypes = {
  activeStartDate: ad,
  allowPartialRange: Y.bool,
  calendarType: Bp,
  className: $o,
  defaultActiveStartDate: ad,
  defaultValue: sd,
  defaultView: qo,
  formatDay: Y.func,
  formatLongDate: Y.func,
  formatMonth: Y.func,
  formatMonthYear: Y.func,
  formatShortWeekday: Y.func,
  formatWeekday: Y.func,
  formatYear: Y.func,
  goToRangeStartOnSelect: Y.bool,
  inputRef: vx,
  locale: Y.string,
  maxDate: ql,
  maxDetail: Y.oneOf(Pi),
  minDate: $l,
  minDetail: Y.oneOf(Pi),
  navigationAriaLabel: Y.string,
  navigationAriaLive: Y.oneOf(["off", "polite", "assertive"]),
  navigationLabel: Y.func,
  next2AriaLabel: Y.string,
  next2Label: Y.node,
  nextAriaLabel: Y.string,
  nextLabel: Y.node,
  onActiveStartDateChange: Y.func,
  onChange: Y.func,
  onClickDay: Y.func,
  onClickDecade: Y.func,
  onClickMonth: Y.func,
  onClickWeekNumber: Y.func,
  onClickYear: Y.func,
  onDrillDown: Y.func,
  onDrillUp: Y.func,
  onViewChange: Y.func,
  prev2AriaLabel: Y.string,
  prev2Label: Y.node,
  prevAriaLabel: Y.string,
  prevLabel: Y.node,
  returnValue: Y.oneOf(["start", "end", "range"]),
  selectRange: Y.bool,
  showDoubleView: Y.bool,
  showFixedNumberOfWeeks: Y.bool,
  showNavigation: Y.bool,
  showNeighboringCentury: Y.bool,
  showNeighboringDecade: Y.bool,
  showNeighboringMonth: Y.bool,
  showWeekNumbers: Y.bool,
  tileClassName: Y.oneOfType([Y.func, $o]),
  tileContent: Y.oneOfType([Y.func, Y.node]),
  tileDisabled: Y.func,
  value: sd,
  view: qo
};
const $x = Kp;
const iC = xl($x)`
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
`, Qp = (t) => !!t && t[0] === "o", ud = $i.unstable_batchedUpdates || ((t) => t()), Ti = (t, n, i = 1e-4) => Math.abs(t - n) < i, Sa = (t, n) => t === !0 || !!(t && t[n]), Zn = (t, n) => typeof t == "function" ? t(n) : t, qx = "_szhsinMenu", Yx = (t) => t[qx], Kl = (t, n) => (n && Object.keys(n).forEach((i) => {
  const a = t[i], s = n[i];
  typeof s == "function" && a ? t[i] = (...l) => {
    s(...l), a(...l);
  } : t[i] = s;
}), t), Gx = (t) => {
  if (typeof t != "string")
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  const n = t.trim().split(/\s+/, 4).map(parseFloat), i = isNaN(n[0]) ? 0 : n[0], a = isNaN(n[1]) ? i : n[1];
  return {
    top: i,
    right: a,
    bottom: isNaN(n[2]) ? i : n[2],
    left: isNaN(n[3]) ? a : n[3]
  };
}, Yu = (t) => {
  for (; t; ) {
    if (t = t.parentNode, !t || t === document.body || !t.parentNode)
      return;
    const {
      overflow: n,
      overflowX: i,
      overflowY: a
    } = getComputedStyle(t);
    if (/auto|scroll|overlay|hidden/.test(n + a + i))
      return t;
  }
};
function Vx(t, n) {
  return {
    "aria-disabled": t || void 0,
    tabIndex: n ? 0 : -1
  };
}
function ld(t, n) {
  for (let i = 0; i < t.length; i++)
    if (t[i] === n)
      return i;
  return -1;
}
const gl = ({
  block: t,
  element: n,
  modifiers: i,
  className: a
}) => G.useMemo(() => {
  const s = n ? `${t}__${n}` : t;
  let l = s;
  i && Object.keys(i).forEach((h) => {
    const g = i[h];
    g && (l += ` ${s}--${g === !0 ? h : `${h}-${g}`}`);
  });
  let c = typeof a == "function" ? a(i) : a;
  return typeof c == "string" && (c = c.trim(), c && (l += ` ${c}`)), l;
}, [t, n, i, a]), Kx = "szh-menu-container", Gu = "szh-menu", Qx = "arrow", aC = "item", oC = "divider", sC = "submenu", Xx = /* @__PURE__ */ G.createContext(), Jx = /* @__PURE__ */ G.createContext({}), cd = /* @__PURE__ */ G.createContext({}), Zx = /* @__PURE__ */ G.createContext({}), uC = /* @__PURE__ */ G.createContext({}), Xp = /* @__PURE__ */ G.createContext({}), dr = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), Ht = /* @__PURE__ */ Object.freeze({
  RESET: 0,
  SET: 1,
  UNSET: 2,
  INCREASE: 3,
  DECREASE: 4,
  FIRST: 5,
  LAST: 6,
  SET_INDEX: 7
}), Da = /* @__PURE__ */ Object.freeze({
  CLICK: "click",
  CANCEL: "cancel",
  BLUR: "blur",
  SCROLL: "scroll"
}), ya = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), eO = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Vu = "absolute", lC = "presentation", tO = "menuitem", fd = {
  "aria-hidden": !0,
  role: tO
}, nO = ({
  className: t,
  containerRef: n,
  containerProps: i,
  children: a,
  isOpen: s,
  theming: l,
  transition: c,
  onClose: h
}) => {
  const g = Sa(c, "item"), y = ({
    key: v
  }) => {
    switch (v) {
      case dr.ESC:
        Zn(h, {
          key: v,
          reason: Da.CANCEL
        });
        break;
    }
  }, b = (v) => {
    s && !v.currentTarget.contains(v.relatedTarget) && Zn(h, {
      reason: Da.BLUR
    });
  };
  return /* @__PURE__ */ Nt.jsx("div", {
    ...Kl({
      onKeyDown: y,
      onBlur: b
    }, i),
    className: gl({
      block: Kx,
      modifiers: G.useMemo(() => ({
        theme: l,
        itemTransition: g
      }), [l, g]),
      className: t
    }),
    style: {
      position: "absolute",
      ...i == null ? void 0 : i.style
    },
    ref: n,
    children: a
  });
}, rO = () => {
  let t, n = 0;
  return {
    toggle: (i) => {
      i ? n++ : n--, n = Math.max(n, 0);
    },
    on: (i, a, s) => {
      n ? t || (t = setTimeout(() => {
        t = 0, a();
      }, i)) : s == null || s();
    },
    off: () => {
      t && (clearTimeout(t), t = 0);
    }
  };
}, iO = (t, n) => {
  const [i, a] = G.useState(), l = G.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, c = G.useCallback((g, y) => {
    const {
      items: b
    } = l;
    if (!g)
      l.items = [];
    else if (y)
      b.push(g);
    else {
      const v = b.indexOf(g);
      v > -1 && (b.splice(v, 1), g.contains(document.activeElement) && (n.current.focus(), a()));
    }
    l.hoverIndex = -1, l.sorted = !1;
  }, [l, n]), h = G.useCallback((g, y, b) => {
    const {
      items: v,
      hoverIndex: C
    } = l, _ = () => {
      if (l.sorted)
        return;
      const O = t.current.querySelectorAll(".szh-menu__item");
      v.sort((D, B) => ld(O, D) - ld(O, B)), l.sorted = !0;
    };
    let w = -1, E;
    switch (g) {
      case Ht.RESET:
        break;
      case Ht.SET:
        E = y;
        break;
      case Ht.UNSET:
        E = (O) => O === y ? void 0 : O;
        break;
      case Ht.FIRST:
        _(), w = 0, E = v[w];
        break;
      case Ht.LAST:
        _(), w = v.length - 1, E = v[w];
        break;
      case Ht.SET_INDEX:
        _(), w = b, E = v[w];
        break;
      case Ht.INCREASE:
        _(), w = C, w < 0 && (w = v.indexOf(y)), w++, w >= v.length && (w = 0), E = v[w];
        break;
      case Ht.DECREASE:
        _(), w = C, w < 0 && (w = v.indexOf(y)), w--, w < 0 && (w = v.length - 1), E = v[w];
        break;
    }
    E || (w = -1), a(E), l.hoverIndex = w;
  }, [t, l]);
  return {
    hoverItem: i,
    dispatch: h,
    updateItems: c
  };
}, aO = (t, n, i, a) => {
  const s = n.current.getBoundingClientRect(), l = t.current.getBoundingClientRect(), c = i === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : i.getBoundingClientRect(), h = Gx(a), g = (w) => w + l.left - c.left - h.left, y = (w) => w + l.left + s.width - c.right + h.right, b = (w) => w + l.top - c.top - h.top, v = (w) => w + l.top + s.height - c.bottom + h.bottom;
  return {
    menuRect: s,
    containerRect: l,
    getLeftOverflow: g,
    getRightOverflow: y,
    getTopOverflow: b,
    getBottomOverflow: v,
    confineHorizontally: (w) => {
      let E = g(w);
      if (E < 0)
        w -= E;
      else {
        const O = y(w);
        O > 0 && (w -= O, E = g(w), E < 0 && (w -= E));
      }
      return w;
    },
    confineVertically: (w) => {
      let E = b(w);
      if (E < 0)
        w -= E;
      else {
        const O = v(w);
        O > 0 && (w -= O, E = b(w), E < 0 && (w -= E));
      }
      return w;
    }
  };
}, oO = ({
  arrowRef: t,
  menuY: n,
  anchorRect: i,
  containerRect: a,
  menuRect: s
}) => {
  let l = i.top - a.top - n + i.height / 2;
  const c = t.current.offsetHeight * 1.25;
  return l = Math.max(c, l), l = Math.min(l, s.height - c), l;
}, sO = ({
  anchorRect: t,
  containerRect: n,
  menuRect: i,
  placeLeftorRightY: a,
  placeLeftX: s,
  placeRightX: l,
  getLeftOverflow: c,
  getRightOverflow: h,
  confineHorizontally: g,
  confineVertically: y,
  arrowRef: b,
  arrow: v,
  direction: C,
  position: _
}) => {
  let w = C, E = a;
  _ !== "initial" && (E = y(E), _ === "anchor" && (E = Math.min(E, t.bottom - n.top), E = Math.max(E, t.top - n.top - i.height)));
  let O, D, B;
  return w === "left" ? (O = s, _ !== "initial" && (D = c(O), D < 0 && (B = h(l), (B <= 0 || -D > B) && (O = l, w = "right")))) : (O = l, _ !== "initial" && (B = h(O), B > 0 && (D = c(s), (D >= 0 || -D < B) && (O = s, w = "left")))), _ === "auto" && (O = g(O)), {
    arrowY: v ? oO({
      menuY: E,
      arrowRef: b,
      anchorRect: t,
      containerRect: n,
      menuRect: i
    }) : void 0,
    x: O,
    y: E,
    computedDirection: w
  };
}, uO = ({
  arrowRef: t,
  menuX: n,
  anchorRect: i,
  containerRect: a,
  menuRect: s
}) => {
  let l = i.left - a.left - n + i.width / 2;
  const c = t.current.offsetWidth * 1.25;
  return l = Math.max(c, l), l = Math.min(l, s.width - c), l;
}, lO = ({
  anchorRect: t,
  containerRect: n,
  menuRect: i,
  placeToporBottomX: a,
  placeTopY: s,
  placeBottomY: l,
  getTopOverflow: c,
  getBottomOverflow: h,
  confineHorizontally: g,
  confineVertically: y,
  arrowRef: b,
  arrow: v,
  direction: C,
  position: _
}) => {
  let w = C === "top" ? "top" : "bottom", E = a;
  _ !== "initial" && (E = g(E), _ === "anchor" && (E = Math.min(E, t.right - n.left), E = Math.max(E, t.left - n.left - i.width)));
  let O, D, B;
  return w === "top" ? (O = s, _ !== "initial" && (D = c(O), D < 0 && (B = h(l), (B <= 0 || -D > B) && (O = l, w = "bottom")))) : (O = l, _ !== "initial" && (B = h(O), B > 0 && (D = c(s), (D >= 0 || -D < B) && (O = s, w = "top")))), _ === "auto" && (O = y(O)), {
    arrowX: v ? uO({
      menuX: E,
      arrowRef: b,
      anchorRect: t,
      containerRect: n,
      menuRect: i
    }) : void 0,
    x: E,
    y: O,
    computedDirection: w
  };
}, cO = ({
  arrow: t,
  align: n,
  direction: i,
  gap: a,
  shift: s,
  position: l,
  anchorRect: c,
  arrowRef: h,
  positionHelpers: g
}) => {
  const {
    menuRect: y,
    containerRect: b
  } = g, v = i === "left" || i === "right";
  let C = v ? a : s, _ = v ? s : a;
  if (t) {
    const ee = h.current;
    v ? C += ee.offsetWidth : _ += ee.offsetHeight;
  }
  const w = c.left - b.left - y.width - C, E = c.right - b.left + C, O = c.top - b.top - y.height - _, D = c.bottom - b.top + _;
  let B, M;
  n === "end" ? (B = c.right - b.left - y.width, M = c.bottom - b.top - y.height) : n === "center" ? (B = c.left - b.left - (y.width - c.width) / 2, M = c.top - b.top - (y.height - c.height) / 2) : (B = c.left - b.left, M = c.top - b.top), B += C, M += _;
  const U = {
    ...g,
    anchorRect: c,
    placeLeftX: w,
    placeRightX: E,
    placeLeftorRightY: M,
    placeTopY: O,
    placeBottomY: D,
    placeToporBottomX: B,
    arrowRef: h,
    arrow: t,
    direction: i,
    position: l
  };
  switch (i) {
    case "left":
    case "right":
      return sO(U);
    case "top":
    case "bottom":
    default:
      return lO(U);
  }
}, Ku = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? G.useLayoutEffect : G.useEffect;
function hd(t, n) {
  typeof t == "function" ? t(n) : t.current = n;
}
const Jp = (t, n) => G.useMemo(() => t ? n ? (i) => {
  hd(t, i), hd(n, i);
} : t : n, [t, n]), dd = -9999, fO = ({
  ariaLabel: t,
  menuClassName: n,
  menuStyle: i,
  arrow: a,
  arrowProps: s = {},
  anchorPoint: l,
  anchorRef: c,
  containerRef: h,
  containerProps: g,
  focusProps: y,
  externalRef: b,
  parentScrollingRef: v,
  align: C = "start",
  direction: _ = "bottom",
  position: w = "auto",
  overflow: E = "visible",
  setDownOverflow: O,
  repositionFlag: D,
  captureFocus: B = !0,
  state: M,
  endTransition: U,
  isDisabled: ee,
  menuItemFocus: oe,
  gap: de = 0,
  shift: ie = 0,
  children: fe,
  onClose: Fe,
  ...Re
}) => {
  const [Be, Qe] = G.useState({
    x: dd,
    y: dd
  }), [je, he] = G.useState({}), [Ce, qe] = G.useState(), [m, x] = G.useState(_), [S] = G.useState(rO), [P, N] = G.useReducer((we) => we + 1, 1), {
    transition: k,
    boundingBoxRef: K,
    boundingBoxPadding: J,
    rootMenuRef: V,
    rootAnchorRef: X,
    scrollNodesRef: se,
    reposition: Pe,
    viewScroll: Oe,
    submenuCloseDelay: Ee
  } = G.useContext(Xp), {
    submenuCtx: Ne,
    reposSubmenu: ot = D
  } = G.useContext(cd), be = G.useRef(null), yt = G.useRef(), lt = G.useRef(), ct = G.useRef(!1), pt = G.useRef({
    width: 0,
    height: 0
  }), nt = G.useRef(() => {
  }), {
    hoverItem: It,
    dispatch: tt,
    updateItems: H
  } = iO(be, yt), F = Qp(M), Z = Sa(k, "open"), ne = Sa(k, "close"), ae = se.current, Ie = (we) => {
    switch (we.key) {
      case dr.HOME:
        tt(Ht.FIRST);
        break;
      case dr.END:
        tt(Ht.LAST);
        break;
      case dr.UP:
        tt(Ht.DECREASE, It);
        break;
      case dr.DOWN:
        tt(Ht.INCREASE, It);
        break;
      case dr.SPACE:
        we.target && we.target.className.indexOf(Gu) !== -1 && we.preventDefault();
        return;
      default:
        return;
    }
    we.preventDefault(), we.stopPropagation();
  }, Ye = () => {
    M === "closing" && qe(), Zn(U);
  }, rt = (we) => {
    we.stopPropagation(), S.on(Ee, () => {
      tt(Ht.RESET), yt.current.focus();
    });
  }, le = (we) => {
    we.target === we.currentTarget && S.off();
  }, $e = G.useCallback((we) => {
    var We;
    const Xe = c ? (We = c.current) == null ? void 0 : We.getBoundingClientRect() : l ? {
      left: l.x,
      right: l.x,
      top: l.y,
      bottom: l.y,
      width: 0,
      height: 0
    } : null;
    if (!Xe)
      return;
    ae.menu || (ae.menu = (K ? K.current : Yu(V.current)) || window);
    const xt = aO(h, be, ae.menu, J);
    let {
      arrowX: _e,
      arrowY: _t,
      x: Qt,
      y: kt,
      computedDirection: zn
    } = cO({
      arrow: a,
      align: C,
      direction: _,
      gap: de,
      shift: ie,
      position: w,
      anchorRect: Xe,
      arrowRef: lt,
      positionHelpers: xt
    });
    const {
      menuRect: Nn
    } = xt;
    let Xt = Nn.height;
    if (!we && E !== "visible") {
      const {
        getTopOverflow: gn,
        getBottomOverflow: tr
      } = xt;
      let Jt, Zt;
      const gr = pt.current.height, yn = tr(kt);
      if (yn > 0 || Ti(yn, 0) && Ti(Xt, gr))
        Jt = Xt - yn, Zt = yn;
      else {
        const en = gn(kt);
        (en < 0 || Ti(en, 0) && Ti(Xt, gr)) && (Jt = Xt + en, Zt = 0 - en, Jt >= 0 && (kt -= en));
      }
      Jt >= 0 ? (Xt = Jt, qe({
        height: Jt,
        overflowAmt: Zt
      })) : qe();
    }
    a && he({
      x: _e,
      y: _t
    }), Qe({
      x: Qt,
      y: kt
    }), x(zn), pt.current = {
      width: Nn.width,
      height: Xt
    };
  }, [a, C, J, _, de, ie, w, E, l, c, h, K, V, ae]);
  Ku(() => {
    F && ($e(), ct.current && N()), ct.current = F, nt.current = $e;
  }, [F, $e, ot]), Ku(() => {
    Ce && !O && (be.current.scrollTop = 0);
  }, [Ce, O]), Ku(() => H, [H]), G.useEffect(() => {
    let {
      menu: we
    } = ae;
    if (!F || !we)
      return;
    if (we = we.addEventListener ? we : window, !ae.anchors) {
      ae.anchors = [];
      let _e = Yu(X && X.current);
      for (; _e && _e !== we; )
        ae.anchors.push(_e), _e = Yu(_e);
    }
    let We = Oe;
    if (ae.anchors.length && We === "initial" && (We = "auto"), We === "initial")
      return;
    const Xe = () => {
      We === "auto" ? ud(() => $e(!0)) : Zn(Fe, {
        reason: Da.SCROLL
      });
    }, xt = ae.anchors.concat(Oe !== "initial" ? we : []);
    return xt.forEach((_e) => _e.addEventListener("scroll", Xe)), () => xt.forEach((_e) => _e.removeEventListener("scroll", Xe));
  }, [X, ae, F, Fe, Oe, $e]);
  const Et = !!Ce && Ce.overflowAmt > 0;
  G.useEffect(() => {
    if (Et || !F || !v)
      return;
    const we = () => ud($e), We = v.current;
    return We.addEventListener("scroll", we), () => We.removeEventListener("scroll", we);
  }, [F, Et, v, $e]), G.useEffect(() => {
    if (typeof ResizeObserver != "function" || Pe === "initial")
      return;
    const we = new ResizeObserver(([Xe]) => {
      const {
        borderBoxSize: xt,
        target: _e
      } = Xe;
      let _t, Qt;
      if (xt) {
        const {
          inlineSize: kt,
          blockSize: zn
        } = xt[0] || xt;
        _t = kt, Qt = zn;
      } else {
        const kt = _e.getBoundingClientRect();
        _t = kt.width, Qt = kt.height;
      }
      _t === 0 || Qt === 0 || Ti(_t, pt.current.width, 1) && Ti(Qt, pt.current.height, 1) || $i.flushSync(() => {
        nt.current(), N();
      });
    }), We = be.current;
    return we.observe(We, {
      box: "border-box"
    }), () => we.unobserve(We);
  }, [Pe]), G.useEffect(() => {
    if (!F) {
      tt(Ht.RESET), ne || qe();
      return;
    }
    const {
      position: we,
      alwaysUpdate: We
    } = oe || {}, Xe = () => {
      we === ya.FIRST ? tt(Ht.FIRST) : we === ya.LAST ? tt(Ht.LAST) : we >= -1 && tt(Ht.SET_INDEX, void 0, we);
    };
    if (We)
      Xe();
    else if (B) {
      const xt = setTimeout(() => {
        const _e = be.current;
        _e && !_e.contains(document.activeElement) && (yt.current.focus(), Xe());
      }, Z ? 170 : 100);
      return () => clearTimeout(xt);
    }
  }, [F, Z, ne, B, oe, tt]);
  const vt = G.useMemo(() => ({
    isParentOpen: F,
    submenuCtx: S,
    dispatch: tt,
    updateItems: H
  }), [F, S, tt, H]);
  let it, Ve;
  Ce && (O ? Ve = Ce.overflowAmt : it = Ce.height);
  const Wt = G.useMemo(() => ({
    reposSubmenu: P,
    submenuCtx: S,
    overflow: E,
    overflowAmt: Ve,
    parentMenuRef: be,
    parentDir: m
  }), [P, S, E, Ve, m]), Mt = it >= 0 ? {
    maxHeight: it,
    overflow: E
  } : void 0, sn = G.useMemo(() => ({
    state: M,
    dir: m
  }), [M, m]), vn = G.useMemo(() => ({
    dir: m
  }), [m]), Pn = gl({
    block: Gu,
    element: Qx,
    modifiers: vn,
    className: s.className
  }), mn = /* @__PURE__ */ Nt.jsxs("ul", {
    role: "menu",
    "aria-label": t,
    ...Vx(ee),
    ...Kl({
      onPointerEnter: Ne == null ? void 0 : Ne.off,
      onPointerMove: rt,
      onPointerLeave: le,
      onKeyDown: Ie,
      onAnimationEnd: Ye
    }, Re),
    ref: Jp(b, be),
    className: gl({
      block: Gu,
      modifiers: sn,
      className: n
    }),
    style: {
      ...i,
      ...Mt,
      margin: 0,
      display: M === "closed" ? "none" : void 0,
      position: Vu,
      left: Be.x,
      top: Be.y
    },
    children: [/* @__PURE__ */ Nt.jsx("li", {
      tabIndex: -1,
      style: {
        position: Vu,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: yt,
      ...fd,
      ...y
    }), a && /* @__PURE__ */ Nt.jsx("li", {
      ...fd,
      ...s,
      className: Pn,
      style: {
        display: "block",
        position: Vu,
        left: je.x,
        top: je.y,
        ...s.style
      },
      ref: lt
    }), /* @__PURE__ */ Nt.jsx(cd.Provider, {
      value: Wt,
      children: /* @__PURE__ */ Nt.jsx(Jx.Provider, {
        value: vt,
        children: /* @__PURE__ */ Nt.jsx(Xx.Provider, {
          value: It,
          children: Zn(fe, sn)
        })
      })
    })]
  });
  return g ? /* @__PURE__ */ Nt.jsx(nO, {
    ...g,
    isOpen: F,
    children: mn
  }) : mn;
}, hO = /* @__PURE__ */ G.forwardRef(function({
  "aria-label": n,
  className: i,
  containerProps: a,
  initialMounted: s,
  unmountOnClose: l,
  transition: c,
  transitionTimeout: h,
  boundingBoxRef: g,
  boundingBoxPadding: y,
  reposition: b = "auto",
  submenuOpenDelay: v = 300,
  submenuCloseDelay: C = 150,
  viewScroll: _ = "initial",
  portal: w,
  theming: E,
  onItemClick: O,
  ...D
}, B) {
  const M = G.useRef(null), U = G.useRef({}), {
    anchorRef: ee,
    state: oe,
    onClose: de
  } = D, ie = G.useMemo(() => ({
    initialMounted: s,
    unmountOnClose: l,
    transition: c,
    transitionTimeout: h,
    boundingBoxRef: g,
    boundingBoxPadding: y,
    rootMenuRef: M,
    rootAnchorRef: ee,
    scrollNodesRef: U,
    reposition: b,
    viewScroll: _,
    submenuOpenDelay: v,
    submenuCloseDelay: C
  }), [s, l, c, h, ee, g, y, b, _, v, C]), fe = G.useMemo(() => ({
    handleClick(Re, Be) {
      Re.stopPropagation || Zn(O, Re);
      let Qe = Re.keepOpen;
      Qe === void 0 && (Qe = Be && Re.key === dr.SPACE), Qe || Zn(de, {
        value: Re.value,
        key: Re.key,
        reason: Da.CLICK
      });
    },
    handleClose(Re) {
      Zn(de, {
        key: Re,
        reason: Da.CLICK
      });
    }
  }), [O, de]);
  if (!oe)
    return null;
  const Fe = /* @__PURE__ */ Nt.jsx(Xp.Provider, {
    value: ie,
    children: /* @__PURE__ */ Nt.jsx(Zx.Provider, {
      value: fe,
      children: /* @__PURE__ */ Nt.jsx(fO, {
        ...D,
        ariaLabel: n || "Menu",
        externalRef: B,
        containerRef: M,
        containerProps: {
          className: i,
          containerRef: M,
          containerProps: a,
          theming: E,
          transition: c,
          onClose: de
        }
      })
    })
  });
  return w === !0 && typeof document < "u" ? /* @__PURE__ */ $i.createPortal(Fe, document.body) : w ? w.target ? /* @__PURE__ */ $i.createPortal(Fe, w.target) : w.stablePosition ? null : Fe : Fe;
}), yl = 0, bl = 1, Vo = 2, Ko = 3, Qo = 4, dO = 5, Zp = 6, pO = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], ev = (t) => ({
  _s: t,
  status: pO[t],
  isEnter: t < Ko,
  isMounted: t !== Zp,
  isResolved: t === Vo || t > Qo
}), wl = (t) => t ? Zp : dO, vO = (t, n) => {
  switch (t) {
    case bl:
    case yl:
      return Vo;
    case Qo:
    case Ko:
      return wl(n);
  }
}, mO = (t) => typeof t == "object" ? [t.enter, t.exit] : [t, t], gO = (t, n) => setTimeout(() => {
  isNaN(document.body.offsetTop) || t(n + 1);
}, 0), pd = (t, n, i, a, s) => {
  clearTimeout(a.current);
  const l = ev(t);
  n(l), i.current = l, s && s({
    current: l
  });
}, yO = ({
  enter: t = !0,
  exit: n = !0,
  preEnter: i,
  preExit: a,
  timeout: s,
  initialEntered: l,
  mountOnEnter: c,
  unmountOnExit: h,
  onStateChange: g
} = {}) => {
  const [y, b] = G.useState(() => ev(l ? Vo : wl(c))), v = G.useRef(y), C = G.useRef(), [_, w] = mO(s), E = G.useCallback(() => {
    const D = vO(v.current._s, h);
    D && pd(D, b, v, C, g);
  }, [g, h]), O = G.useCallback((D) => {
    const B = (U) => {
      switch (pd(U, b, v, C, g), U) {
        case bl:
          _ >= 0 && (C.current = setTimeout(E, _));
          break;
        case Qo:
          w >= 0 && (C.current = setTimeout(E, w));
          break;
        case yl:
        case Ko:
          C.current = gO(B, U);
          break;
      }
    }, M = v.current.isEnter;
    typeof D != "boolean" && (D = !M), D ? !M && B(t ? i ? yl : bl : Vo) : M && B(n ? a ? Ko : Qo : wl(h));
  }, [E, g, t, n, i, a, _, w, h]);
  return G.useEffect(() => () => clearTimeout(C.current), []), [y, O, E];
}, bO = ({
  initialOpen: t,
  initialMounted: n,
  unmountOnClose: i,
  transition: a,
  transitionTimeout: s = 500
} = {}) => {
  const [{
    status: l
  }, c, h] = yO({
    initialEntered: t,
    mountOnEnter: !n,
    unmountOnExit: i,
    timeout: s,
    enter: Sa(a, "open"),
    exit: Sa(a, "close")
  });
  return [{
    state: eO[l],
    endTransition: h
  }, c];
}, wO = (t) => {
  const [n, i] = bO(t), [a, s] = G.useState(), l = (c, h) => {
    s({
      position: c,
      alwaysUpdate: h
    }), i(!0);
  };
  return [{
    menuItemFocus: a,
    ...n
  }, i, l];
}, _O = (t, n) => {
  const [i] = G.useState({});
  return {
    onMouseDown: () => {
      i.v = t && t !== "closed";
    },
    onClick: (a) => i.v ? i.v = !1 : n(!0, a)
  };
}, AO = (t, n) => {
  const i = G.useRef(n);
  G.useEffect(() => {
    i.current !== n && Zn(t, {
      open: n
    }), i.current = n;
  }, [t, n]);
}, EO = /* @__PURE__ */ G.forwardRef(function({
  "aria-label": n,
  captureFocus: i,
  initialOpen: a,
  menuButton: s,
  instanceRef: l,
  onMenuChange: c,
  ...h
}, g) {
  const [y, b, v] = wO(h), {
    state: C
  } = y, _ = Qp(C), w = G.useRef(null), E = _O(C, (ee, oe) => v(oe.detail ? void 0 : ya.FIRST)), O = G.useCallback((ee) => {
    b(!1), ee.key && w.current.focus();
  }, [b]), D = (ee) => {
    switch (ee.key) {
      case dr.UP:
        v(ya.LAST);
        break;
      case dr.DOWN:
        v(ya.FIRST);
        break;
      default:
        return;
    }
    ee.preventDefault();
  }, B = Zn(s, {
    open: _
  });
  if (!B || !B.type)
    throw new Error("Menu requires a menuButton prop.");
  const M = {
    ref: Jp(B.ref, w),
    ...Kl({
      onKeyDown: D,
      ...E
    }, B.props)
  };
  Yx(B.type) === "MenuButton" && (M.isOpen = _);
  const U = /* @__PURE__ */ G.cloneElement(B, M);
  return AO(c, _), G.useImperativeHandle(l, () => ({
    openMenu: v,
    closeMenu: () => b(!1)
  })), /* @__PURE__ */ Nt.jsxs(G.Fragment, {
    children: [U, /* @__PURE__ */ Nt.jsx(hO, {
      ...h,
      ...y,
      "aria-label": n || (typeof B.props.children == "string" ? B.props.children : "Menu"),
      anchorRef: w,
      ref: g,
      onClose: O
    })]
  });
});
const xO = "szh-menu", OO = "item", CO = (t) => (n) => (i) => {
  let a = `.${t}`;
  return n && (a += `__${n}`), i && (a += `--${i}`), a;
}, tv = (t, n = []) => {
  const i = {};
  return Object.defineProperty(i, "name", {
    value: t(),
    enumerable: !0
  }), n.forEach((a) => {
    const s = a.split("-").reduce((l, c) => `${l}${c[0].toUpperCase()}${c.slice(1)}`);
    Object.defineProperty(i, s, {
      value: t(a),
      enumerable: !0
    });
  }), i;
}, TO = ["dir-left", "dir-right", "dir-top", "dir-bottom"], nv = /* @__PURE__ */ CO(xO);
[...TO];
const vd = /* @__PURE__ */ tv(/* @__PURE__ */ nv(OO), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), cC = xl(EO)`
  ${vd.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${vd.typeCheckbox} {
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
var rv = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "circle-notch", a = 512, s = 512, l = [], c = "f1ce", h = "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      l,
      c,
      h
    ]
  }, t.faCircleNotch = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = l, t.unicode = c, t.svgPathData = h, t.aliases = l;
})(rv);
const SO = ({
  children: t,
  spinning: n = !0
}) => n ? /* @__PURE__ */ es("div", { css: {
  position: "relative",
  height: "100%",
  width: "100%",
  cursor: "wait"
}, children: [
  /* @__PURE__ */ et("div", { css: {
    opacity: "0.3",
    "--tw-grayscale": "grayscale(100%)",
    filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  }, children: t }),
  n && /* @__PURE__ */ et("div", { css: {
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(229 231 235 / 0.3)"
  }, children: /* @__PURE__ */ et(b1, { icon: rv.faCircleNotch, css: [{
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, El`
                font-size: 32px;
              `], spin: !0 }) })
] }) : t;
var iv = { exports: {} };
(function(t, n) {
  (function(i, a) {
    t.exports = a(G);
  })(self, (i) => (() => {
    var a = { 58: (h, g, y) => {
      y.d(g, { Z: () => w });
      var b = y(864), v = y.n(b), C = y(352), _ = y.n(C)()(v());
      _.push([h.id, `
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
      const w = _;
    }, 672: (h, g, y) => {
      y.d(g, { Z: () => w });
      var b = y(864), v = y.n(b), C = y(352), _ = y.n(C)()(v());
      _.push([h.id, `/* The top-level element of the splitter*/
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
      const w = _;
    }, 352: (h) => {
      h.exports = function(g) {
        var y = [];
        return y.toString = function() {
          return this.map(function(b) {
            var v = "", C = b[5] !== void 0;
            return b[4] && (v += "@supports (".concat(b[4], ") {")), b[2] && (v += "@media ".concat(b[2], " {")), C && (v += "@layer".concat(b[5].length > 0 ? " ".concat(b[5]) : "", " {")), v += g(b), C && (v += "}"), b[2] && (v += "}"), b[4] && (v += "}"), v;
          }).join("");
        }, y.i = function(b, v, C, _, w) {
          typeof b == "string" && (b = [[null, b, void 0]]);
          var E = {};
          if (C)
            for (var O = 0; O < this.length; O++) {
              var D = this[O][0];
              D != null && (E[D] = !0);
            }
          for (var B = 0; B < b.length; B++) {
            var M = [].concat(b[B]);
            C && E[M[0]] || (w !== void 0 && (M[5] === void 0 || (M[1] = "@layer".concat(M[5].length > 0 ? " ".concat(M[5]) : "", " {").concat(M[1], "}")), M[5] = w), v && (M[2] && (M[1] = "@media ".concat(M[2], " {").concat(M[1], "}")), M[2] = v), _ && (M[4] ? (M[1] = "@supports (".concat(M[4], ") {").concat(M[1], "}"), M[4] = _) : M[4] = "".concat(_)), y.push(M));
          }
        }, y;
      };
    }, 864: (h) => {
      h.exports = function(g) {
        var y = g[1], b = g[3];
        if (!b)
          return y;
        if (typeof btoa == "function") {
          var v = btoa(unescape(encodeURIComponent(JSON.stringify(b)))), C = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(v), _ = "/*# ".concat(C, " */");
          return [y].concat([_]).join(`
`);
        }
        return [y].join(`
`);
      };
    }, 372: (h, g, y) => {
      var b = y(567);
      function v() {
      }
      function C() {
      }
      C.resetWarningCache = v, h.exports = function() {
        function _(O, D, B, M, U, ee) {
          if (ee !== b) {
            var oe = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw oe.name = "Invariant Violation", oe;
          }
        }
        function w() {
          return _;
        }
        _.isRequired = _;
        var E = { array: _, bigint: _, bool: _, func: _, number: _, object: _, string: _, symbol: _, any: _, arrayOf: w, element: _, elementType: _, instanceOf: w, node: _, objectOf: w, oneOf: w, oneOfType: w, shape: w, exact: w, checkPropTypes: C, resetWarningCache: v };
        return E.PropTypes = E, E;
      };
    }, 652: (h, g, y) => {
      h.exports = y(372)();
    }, 567: (h) => {
      h.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (h) => {
      var g = [];
      function y(C) {
        for (var _ = -1, w = 0; w < g.length; w++)
          if (g[w].identifier === C) {
            _ = w;
            break;
          }
        return _;
      }
      function b(C, _) {
        for (var w = {}, E = [], O = 0; O < C.length; O++) {
          var D = C[O], B = _.base ? D[0] + _.base : D[0], M = w[B] || 0, U = "".concat(B, " ").concat(M);
          w[B] = M + 1;
          var ee = y(U), oe = { css: D[1], media: D[2], sourceMap: D[3], supports: D[4], layer: D[5] };
          if (ee !== -1)
            g[ee].references++, g[ee].updater(oe);
          else {
            var de = v(oe, _);
            _.byIndex = O, g.splice(O, 0, { identifier: U, updater: de, references: 1 });
          }
          E.push(U);
        }
        return E;
      }
      function v(C, _) {
        var w = _.domAPI(_);
        return w.update(C), function(E) {
          if (E) {
            if (E.css === C.css && E.media === C.media && E.sourceMap === C.sourceMap && E.supports === C.supports && E.layer === C.layer)
              return;
            w.update(C = E);
          } else
            w.remove();
        };
      }
      h.exports = function(C, _) {
        var w = b(C = C || [], _ = _ || {});
        return function(E) {
          E = E || [];
          for (var O = 0; O < w.length; O++) {
            var D = y(w[O]);
            g[D].references--;
          }
          for (var B = b(E, _), M = 0; M < w.length; M++) {
            var U = y(w[M]);
            g[U].references === 0 && (g[U].updater(), g.splice(U, 1));
          }
          w = B;
        };
      };
    }, 80: (h) => {
      var g = {};
      h.exports = function(y, b) {
        var v = function(C) {
          if (g[C] === void 0) {
            var _ = document.querySelector(C);
            if (window.HTMLIFrameElement && _ instanceof window.HTMLIFrameElement)
              try {
                _ = _.contentDocument.head;
              } catch {
                _ = null;
              }
            g[C] = _;
          }
          return g[C];
        }(y);
        if (!v)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        v.appendChild(b);
      };
    }, 182: (h) => {
      h.exports = function(g) {
        var y = document.createElement("style");
        return g.setAttributes(y, g.attributes), g.insert(y, g.options), y;
      };
    }, 850: (h, g, y) => {
      h.exports = function(b) {
        var v = y.nc;
        v && b.setAttribute("nonce", v);
      };
    }, 236: (h) => {
      h.exports = function(g) {
        var y = g.insertStyleElement(g);
        return { update: function(b) {
          (function(v, C, _) {
            var w = "";
            _.supports && (w += "@supports (".concat(_.supports, ") {")), _.media && (w += "@media ".concat(_.media, " {"));
            var E = _.layer !== void 0;
            E && (w += "@layer".concat(_.layer.length > 0 ? " ".concat(_.layer) : "", " {")), w += _.css, E && (w += "}"), _.media && (w += "}"), _.supports && (w += "}");
            var O = _.sourceMap;
            O && typeof btoa < "u" && (w += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), C.styleTagTransform(w, v, C.options);
          })(y, g, b);
        }, remove: function() {
          (function(b) {
            if (b.parentNode === null)
              return !1;
            b.parentNode.removeChild(b);
          })(y);
        } };
      };
    }, 213: (h) => {
      h.exports = function(g, y) {
        if (y.styleSheet)
          y.styleSheet.cssText = g;
        else {
          for (; y.firstChild; )
            y.removeChild(y.firstChild);
          y.appendChild(document.createTextNode(g));
        }
      };
    }, 359: (h) => {
      h.exports = i;
    } }, s = {};
    function l(h) {
      var g = s[h];
      if (g !== void 0)
        return g.exports;
      var y = s[h] = { id: h, exports: {} };
      return a[h](y, y.exports, l), y.exports;
    }
    l.n = (h) => {
      var g = h && h.__esModule ? () => h.default : () => h;
      return l.d(g, { a: g }), g;
    }, l.d = (h, g) => {
      for (var y in g)
        l.o(g, y) && !l.o(h, y) && Object.defineProperty(h, y, { enumerable: !0, get: g[y] });
    }, l.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), l.o = (h, g) => Object.prototype.hasOwnProperty.call(h, g), l.r = (h) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(h, "__esModule", { value: !0 });
    }, l.nc = void 0;
    var c = {};
    return (() => {
      l.r(c), l.d(c, { DefaultSplitter: () => de, Split: () => tt });
      var h = l(359), g = l(701), y = l.n(g), b = l(236), v = l.n(b), C = l(80), _ = l.n(C), w = l(850), E = l.n(w), O = l(182), D = l.n(O), B = l(213), M = l.n(B), U = l(58), ee = {};
      ee.styleTagTransform = M(), ee.setAttributes = E(), ee.insert = _().bind(null, "head"), ee.domAPI = v(), ee.insertStyleElement = D(), y()(U.Z, ee), U.Z && U.Z.locals && U.Z.locals;
      const oe = (H) => (H % 2 == 0 ? 2 : 3) + "px", de = (H) => {
        const { dragging: F, pixelSize: Z, color: ne = "silver", hoverColor: ae = "gray", dragColor: Ie = "black" } = H, Ye = { "--default-splitter-line-margin": (rt = Z, `${Math.max(0, Math.floor(rt / 2) - 1)}px`), "--default-splitter-line-size": oe(Z), "--default-splitter-line-color": F ? Ie : ne, "--default-splitter-line-hover-color": F ? Ie : ae };
        var rt;
        return h.createElement("div", { className: "default-splitter", style: Ye }, h.createElement("div", { className: "line" }));
      };
      function ie() {
        return ie = Object.assign ? Object.assign.bind() : function(H) {
          for (var F = 1; F < arguments.length; F++) {
            var Z = arguments[F];
            for (var ne in Z)
              Object.prototype.hasOwnProperty.call(Z, ne) && (H[ne] = Z[ne]);
          }
          return H;
        }, ie.apply(this, arguments);
      }
      function fe(H, F) {
        return fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(Z, ne) {
          return Z.__proto__ = ne, Z;
        }, fe(H, F);
      }
      var Fe = l(652), Re = l.n(Fe), Be = function() {
        if (typeof Map < "u")
          return Map;
        function H(F, Z) {
          var ne = -1;
          return F.some(function(ae, Ie) {
            return ae[0] === Z && (ne = Ie, !0);
          }), ne;
        }
        return function() {
          function F() {
            this.__entries__ = [];
          }
          return Object.defineProperty(F.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), F.prototype.get = function(Z) {
            var ne = H(this.__entries__, Z), ae = this.__entries__[ne];
            return ae && ae[1];
          }, F.prototype.set = function(Z, ne) {
            var ae = H(this.__entries__, Z);
            ~ae ? this.__entries__[ae][1] = ne : this.__entries__.push([Z, ne]);
          }, F.prototype.delete = function(Z) {
            var ne = this.__entries__, ae = H(ne, Z);
            ~ae && ne.splice(ae, 1);
          }, F.prototype.has = function(Z) {
            return !!~H(this.__entries__, Z);
          }, F.prototype.clear = function() {
            this.__entries__.splice(0);
          }, F.prototype.forEach = function(Z, ne) {
            ne === void 0 && (ne = null);
            for (var ae = 0, Ie = this.__entries__; ae < Ie.length; ae++) {
              var Ye = Ie[ae];
              Z.call(ne, Ye[1], Ye[0]);
            }
          }, F;
        }();
      }(), Qe = typeof window < "u" && typeof document < "u" && window.document === document, je = l.g !== void 0 && l.g.Math === Math ? l.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), he = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(je) : function(H) {
        return setTimeout(function() {
          return H(Date.now());
        }, 1e3 / 60);
      }, Ce = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], qe = typeof MutationObserver < "u", m = function() {
        function H() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(F, Z) {
            var ne = !1, ae = !1, Ie = 0;
            function Ye() {
              ne && (ne = !1, F()), ae && le();
            }
            function rt() {
              he(Ye);
            }
            function le() {
              var $e = Date.now();
              if (ne) {
                if ($e - Ie < 2)
                  return;
                ae = !0;
              } else
                ne = !0, ae = !1, setTimeout(rt, 20);
              Ie = $e;
            }
            return le;
          }(this.refresh.bind(this));
        }
        return H.prototype.addObserver = function(F) {
          ~this.observers_.indexOf(F) || this.observers_.push(F), this.connected_ || this.connect_();
        }, H.prototype.removeObserver = function(F) {
          var Z = this.observers_, ne = Z.indexOf(F);
          ~ne && Z.splice(ne, 1), !Z.length && this.connected_ && this.disconnect_();
        }, H.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, H.prototype.updateObservers_ = function() {
          var F = this.observers_.filter(function(Z) {
            return Z.gatherActive(), Z.hasActive();
          });
          return F.forEach(function(Z) {
            return Z.broadcastActive();
          }), F.length > 0;
        }, H.prototype.connect_ = function() {
          Qe && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qe ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, H.prototype.disconnect_ = function() {
          Qe && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, H.prototype.onTransitionEnd_ = function(F) {
          var Z = F.propertyName, ne = Z === void 0 ? "" : Z;
          Ce.some(function(ae) {
            return !!~ne.indexOf(ae);
          }) && this.refresh();
        }, H.getInstance = function() {
          return this.instance_ || (this.instance_ = new H()), this.instance_;
        }, H.instance_ = null, H;
      }(), x = function(H, F) {
        for (var Z = 0, ne = Object.keys(F); Z < ne.length; Z++) {
          var ae = ne[Z];
          Object.defineProperty(H, ae, { value: F[ae], enumerable: !1, writable: !1, configurable: !0 });
        }
        return H;
      }, S = function(H) {
        return H && H.ownerDocument && H.ownerDocument.defaultView || je;
      }, P = V(0, 0, 0, 0);
      function N(H) {
        return parseFloat(H) || 0;
      }
      function k(H) {
        for (var F = [], Z = 1; Z < arguments.length; Z++)
          F[Z - 1] = arguments[Z];
        return F.reduce(function(ne, ae) {
          return ne + N(H["border-" + ae + "-width"]);
        }, 0);
      }
      var K = typeof SVGGraphicsElement < "u" ? function(H) {
        return H instanceof S(H).SVGGraphicsElement;
      } : function(H) {
        return H instanceof S(H).SVGElement && typeof H.getBBox == "function";
      };
      function J(H) {
        return Qe ? K(H) ? function(F) {
          var Z = F.getBBox();
          return V(0, 0, Z.width, Z.height);
        }(H) : function(F) {
          var Z = F.clientWidth, ne = F.clientHeight;
          if (!Z && !ne)
            return P;
          var ae = S(F).getComputedStyle(F), Ie = function(it) {
            for (var Ve = {}, Wt = 0, Mt = ["top", "right", "bottom", "left"]; Wt < Mt.length; Wt++) {
              var sn = Mt[Wt], vn = it["padding-" + sn];
              Ve[sn] = N(vn);
            }
            return Ve;
          }(ae), Ye = Ie.left + Ie.right, rt = Ie.top + Ie.bottom, le = N(ae.width), $e = N(ae.height);
          if (ae.boxSizing === "border-box" && (Math.round(le + Ye) !== Z && (le -= k(ae, "left", "right") + Ye), Math.round($e + rt) !== ne && ($e -= k(ae, "top", "bottom") + rt)), !function(it) {
            return it === S(it).document.documentElement;
          }(F)) {
            var Et = Math.round(le + Ye) - Z, vt = Math.round($e + rt) - ne;
            Math.abs(Et) !== 1 && (le -= Et), Math.abs(vt) !== 1 && ($e -= vt);
          }
          return V(Ie.left, Ie.top, le, $e);
        }(H) : P;
      }
      function V(H, F, Z, ne) {
        return { x: H, y: F, width: Z, height: ne };
      }
      var X = function() {
        function H(F) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = V(0, 0, 0, 0), this.target = F;
        }
        return H.prototype.isActive = function() {
          var F = J(this.target);
          return this.contentRect_ = F, F.width !== this.broadcastWidth || F.height !== this.broadcastHeight;
        }, H.prototype.broadcastRect = function() {
          var F = this.contentRect_;
          return this.broadcastWidth = F.width, this.broadcastHeight = F.height, F;
        }, H;
      }(), se = function(H, F) {
        var Z, ne, ae, Ie, Ye, rt, le, $e = (ne = (Z = F).x, ae = Z.y, Ie = Z.width, Ye = Z.height, rt = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, le = Object.create(rt.prototype), x(le, { x: ne, y: ae, width: Ie, height: Ye, top: ae, right: ne + Ie, bottom: Ye + ae, left: ne }), le);
        x(this, { target: H, contentRect: $e });
      }, Pe = function() {
        function H(F, Z, ne) {
          if (this.activeObservations_ = [], this.observations_ = new Be(), typeof F != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = F, this.controller_ = Z, this.callbackCtx_ = ne;
        }
        return H.prototype.observe = function(F) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(F instanceof S(F).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var Z = this.observations_;
            Z.has(F) || (Z.set(F, new X(F)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, H.prototype.unobserve = function(F) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(F instanceof S(F).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var Z = this.observations_;
            Z.has(F) && (Z.delete(F), Z.size || this.controller_.removeObserver(this));
          }
        }, H.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, H.prototype.gatherActive = function() {
          var F = this;
          this.clearActive(), this.observations_.forEach(function(Z) {
            Z.isActive() && F.activeObservations_.push(Z);
          });
        }, H.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var F = this.callbackCtx_, Z = this.activeObservations_.map(function(ne) {
              return new se(ne.target, ne.broadcastRect());
            });
            this.callback_.call(F, Z, F), this.clearActive();
          }
        }, H.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, H.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, H;
      }(), Oe = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Be(), Ee = function H(F) {
        if (!(this instanceof H))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var Z = m.getInstance(), ne = new Pe(F, Z, this);
        Oe.set(this, ne);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(H) {
        Ee.prototype[H] = function() {
          var F;
          return (F = Oe.get(this))[H].apply(F, arguments);
        };
      });
      const Ne = je.ResizeObserver !== void 0 ? je.ResizeObserver : Ee;
      var ot = ["client", "offset", "scroll", "bounds", "margin"];
      function be(H) {
        var F = [];
        return ot.forEach(function(Z) {
          H[Z] && F.push(Z);
        }), F;
      }
      function yt(H, F) {
        var Z = {};
        if (F.indexOf("client") > -1 && (Z.client = { top: H.clientTop, left: H.clientLeft, width: H.clientWidth, height: H.clientHeight }), F.indexOf("offset") > -1 && (Z.offset = { top: H.offsetTop, left: H.offsetLeft, width: H.offsetWidth, height: H.offsetHeight }), F.indexOf("scroll") > -1 && (Z.scroll = { top: H.scrollTop, left: H.scrollLeft, width: H.scrollWidth, height: H.scrollHeight }), F.indexOf("bounds") > -1) {
          var ne = H.getBoundingClientRect();
          Z.bounds = { top: ne.top, right: ne.right, bottom: ne.bottom, left: ne.left, width: ne.width, height: ne.height };
        }
        if (F.indexOf("margin") > -1) {
          var ae = getComputedStyle(H);
          Z.margin = { top: ae ? parseInt(ae.marginTop) : 0, right: ae ? parseInt(ae.marginRight) : 0, bottom: ae ? parseInt(ae.marginBottom) : 0, left: ae ? parseInt(ae.marginLeft) : 0 };
        }
        return Z;
      }
      function lt(H) {
        return H && H.ownerDocument && H.ownerDocument.defaultView || window;
      }
      var ct = function(H) {
        var F, Z;
        return Z = F = function(ne) {
          var ae, Ie;
          function Ye() {
            for (var le, $e = arguments.length, Et = new Array($e), vt = 0; vt < $e; vt++)
              Et[vt] = arguments[vt];
            return (le = ne.call.apply(ne, [this].concat(Et)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, le._animationFrameID = null, le._resizeObserver = null, le._node = null, le._window = null, le.measure = function(it) {
              var Ve = yt(le._node, be(le.props));
              it && (Ve.entry = it[0].contentRect), le._animationFrameID = le._window.requestAnimationFrame(function() {
                le._resizeObserver !== null && (le.setState({ contentRect: Ve }), typeof le.props.onResize == "function" && le.props.onResize(Ve));
              });
            }, le._handleRef = function(it) {
              le._resizeObserver !== null && le._node !== null && le._resizeObserver.unobserve(le._node), le._node = it, le._window = lt(le._node);
              var Ve = le.props.innerRef;
              Ve && (typeof Ve == "function" ? Ve(le._node) : Ve.current = le._node), le._resizeObserver !== null && le._node !== null && le._resizeObserver.observe(le._node);
            }, le;
          }
          Ie = ne, (ae = Ye).prototype = Object.create(Ie.prototype), ae.prototype.constructor = ae, fe(ae, Ie);
          var rt = Ye.prototype;
          return rt.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new Ne(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(yt(this._node, be(this.props))));
          }, rt.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, rt.render = function() {
            var le = this.props, $e = (le.innerRef, le.onResize, function(Et, vt) {
              if (Et == null)
                return {};
              var it, Ve, Wt = {}, Mt = Object.keys(Et);
              for (Ve = 0; Ve < Mt.length; Ve++)
                it = Mt[Ve], vt.indexOf(it) >= 0 || (Wt[it] = Et[it]);
              return Wt;
            }(le, ["innerRef", "onResize"]));
            return (0, h.createElement)(H, ie({}, $e, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, Ye;
        }(h.Component), F.propTypes = { client: Re().bool, offset: Re().bool, scroll: Re().bool, bounds: Re().bool, margin: Re().bool, innerRef: Re().oneOfType([Re().object, Re().func]), onResize: Re().func }, Z;
      }(function(H) {
        var F = H.measure, Z = H.measureRef, ne = H.contentRect;
        return (0, H.children)({ measure: F, measureRef: Z, contentRect: ne });
      });
      ct.displayName = "Measure", ct.propTypes.children = Re().func;
      const pt = ct;
      var nt = l(672), It = {};
      It.styleTagTransform = M(), It.setAttributes = E(), It.insert = _().bind(null, "head"), It.domAPI = v(), It.insertStyleElement = D(), y()(nt.Z, It), nt.Z && nt.Z.locals && nt.Z.locals;
      const tt = (H) => {
        const { horizontal: F = !1, initialPrimarySize: Z = "50%", minPrimarySize: ne = "0px", minSecondarySize: ae = "0px", splitterSize: Ie = "7px", renderSplitter: Ye, resetOnDoubleClick: rt = !1, defaultSplitterColors: le = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: $e, onMeasuredSizesChanged: Et } = H, [vt, it] = h.useState({ height: 0, width: 0 }), [Ve, Wt] = h.useState({ height: 0, width: 0 }), [Mt, sn] = h.useState({ height: 0, width: 0 }), vn = h.useMemo(() => F ? vt.height : vt.width, [F, vt]), Pn = h.useMemo(() => F ? Ve.height : Ve.width, [F, Ve]), mn = h.useMemo(() => F ? Mt.height : Mt.width, [F, Mt]), [we, We] = h.useState(void 0), [Xe, xt] = h.useState(0), [_e, _t] = h.useState(0), [Qt, kt] = h.useState(!1);
        h.useEffect(() => {
          $e && $e(we !== void 0 ? `${we}%` : Z);
        }, [we, Z]), h.useEffect(() => {
          Et && Et({ primary: Pn, splitter: mn, secondary: vn - (Pn + mn) });
        }, [F, vn, Pn, mn]);
        const zn = (ge) => {
          ge.bounds && Wt({ height: ge.bounds.height, width: ge.bounds.width });
        }, Nn = (ge) => {
          ge.bounds && sn({ height: ge.bounds.height, width: ge.bounds.width });
        }, Xt = (ge) => {
          ge.currentTarget.setPointerCapture(ge.pointerId), xt(F ? ge.clientY : ge.clientX), _t(Pn), kt(!0);
        }, gn = (ge) => {
          if (ge.currentTarget.hasPointerCapture(ge.pointerId)) {
            const St = F ? ge.clientY : ge.clientX, qt = _e + (St - Xe), zr = Math.max(0, Math.min(qt, vn));
            We(zr / vn * 100);
          }
        }, tr = (ge) => {
          ge.currentTarget.releasePointerCapture(ge.pointerId), kt(!1);
        }, Jt = () => {
          rt && We(void 0);
        }, Zt = h.Children.toArray(H.children), gr = Zt.length > 0 ? Zt[0] : h.createElement("div", null), yn = Zt.length > 1 ? Zt[1] : h.createElement("div", null), en = { primary: we !== void 0 ? `${we}%` : Z, minPrimary: ne ?? "0px", minSecondary: ae ?? "0px" }, ci = { pixelSize: mn, horizontal: F, dragging: Qt }, Qi = Ye ?? (() => h.createElement(de, Object.assign({}, ci, { color: Qt ? le.drag : le.color, hoverColor: Qt ? le.drag : le.hover }))), Te = F ? "split-container horizontal" : "split-container vertical", st = { "--react-split-min-primary": en.minPrimary, "--react-split-min-secondary": en.minSecondary, "--react-split-primary": en.primary, "--react-split-splitter": Ie };
        return h.createElement(pt, { bounds: !0, onResize: (ge) => {
          ge.bounds && it({ height: ge.bounds.height, width: ge.bounds.width });
        } }, ({ measureRef: ge }) => h.createElement("div", { className: "react-split", ref: ge }, h.createElement("div", { className: Te, style: st }, h.createElement("div", { className: "primary" }, h.createElement(pt, { bounds: !0, onResize: zn }, ({ measureRef: St }) => h.createElement("div", { className: "full-content", ref: St }, gr))), h.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: Xt, onPointerUp: tr, onPointerMove: gn, onDoubleClick: Jt }, h.createElement(pt, { bounds: !0, onResize: Nn }, ({ measureRef: St }) => h.createElement("div", { className: "full-content", ref: St }, Qi(ci)))), h.createElement("div", { className: "secondary" }, h.createElement("div", { className: "full-content" }, yn)))));
      };
    })(), c;
  })());
})(iv);
var fC = iv.exports;
const vr = Symbol.for("@ts-pattern/matcher"), DO = Symbol.for("@ts-pattern/isVariadic"), Xo = "@ts-pattern/anonymous-select-key", _l = (t) => !!(t && typeof t == "object"), Wo = (t) => t && !!t[vr], Xn = (t, n, i) => {
  if (Wo(t)) {
    const a = t[vr](), { matched: s, selections: l } = a.match(n);
    return s && l && Object.keys(l).forEach((c) => i(c, l[c])), s;
  }
  if (_l(t)) {
    if (!_l(n))
      return !1;
    if (Array.isArray(t)) {
      if (!Array.isArray(n))
        return !1;
      let a = [], s = [], l = [];
      for (const c of t.keys()) {
        const h = t[c];
        Wo(h) && h[DO] ? l.push(h) : l.length ? s.push(h) : a.push(h);
      }
      if (l.length) {
        if (l.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (n.length < a.length + s.length)
          return !1;
        const c = n.slice(0, a.length), h = s.length === 0 ? [] : n.slice(-s.length), g = n.slice(a.length, s.length === 0 ? 1 / 0 : -s.length);
        return a.every((y, b) => Xn(y, c[b], i)) && s.every((y, b) => Xn(y, h[b], i)) && (l.length === 0 || Xn(l[0], g, i));
      }
      return t.length === n.length && t.every((c, h) => Xn(c, n[h], i));
    }
    return Object.keys(t).every((a) => {
      const s = t[a];
      return (a in n || Wo(l = s) && l[vr]().matcherType === "optional") && Xn(s, n[a], i);
      var l;
    });
  }
  return Object.is(n, t);
}, Br = (t) => {
  var n, i, a;
  return _l(t) ? Wo(t) ? (n = (i = (a = t[vr]()).getSelectionKeys) == null ? void 0 : i.call(a)) != null ? n : [] : Array.isArray(t) ? Ra(t, Br) : Ra(Object.values(t), Br) : [];
}, Ra = (t, n) => t.reduce((i, a) => i.concat(n(a)), []);
function Un(t) {
  return Object.assign(t, { optional: () => RO(t), and: (n) => wt(t, n), or: (n) => LO(t, n), select: (n) => n === void 0 ? md(t) : md(n, t) });
}
function RO(t) {
  return Un({ [vr]: () => ({ match: (n) => {
    let i = {};
    const a = (s, l) => {
      i[s] = l;
    };
    return n === void 0 ? (Br(t).forEach((s) => a(s, void 0)), { matched: !0, selections: i }) : { matched: Xn(t, n, a), selections: i };
  }, getSelectionKeys: () => Br(t), matcherType: "optional" }) });
}
function wt(...t) {
  return Un({ [vr]: () => ({ match: (n) => {
    let i = {};
    const a = (s, l) => {
      i[s] = l;
    };
    return { matched: t.every((s) => Xn(s, n, a)), selections: i };
  }, getSelectionKeys: () => Ra(t, Br), matcherType: "and" }) });
}
function LO(...t) {
  return Un({ [vr]: () => ({ match: (n) => {
    let i = {};
    const a = (s, l) => {
      i[s] = l;
    };
    return Ra(t, Br).forEach((s) => a(s, void 0)), { matched: t.some((s) => Xn(s, n, a)), selections: i };
  }, getSelectionKeys: () => Ra(t, Br), matcherType: "or" }) });
}
function Ze(t) {
  return { [vr]: () => ({ match: (n) => ({ matched: !!t(n) }) }) };
}
function md(...t) {
  const n = typeof t[0] == "string" ? t[0] : void 0, i = t.length === 2 ? t[1] : typeof t[0] == "string" ? void 0 : t[0];
  return Un({ [vr]: () => ({ match: (a) => {
    let s = { [n ?? Xo]: a };
    return { matched: i === void 0 || Xn(i, a, (l, c) => {
      s[l] = c;
    }), selections: s };
  }, getSelectionKeys: () => [n ?? Xo].concat(i === void 0 ? [] : Br(i)) }) });
}
function Yn(t) {
  return typeof t == "number";
}
function Jr(t) {
  return typeof t == "string";
}
function Dr(t) {
  return typeof t == "bigint";
}
Un(Ze(function(t) {
  return !0;
}));
const Zr = (t) => Object.assign(Un(t), { startsWith: (n) => {
  return Zr(wt(t, (i = n, Ze((a) => Jr(a) && a.startsWith(i)))));
  var i;
}, endsWith: (n) => {
  return Zr(wt(t, (i = n, Ze((a) => Jr(a) && a.endsWith(i)))));
  var i;
}, minLength: (n) => Zr(wt(t, ((i) => Ze((a) => Jr(a) && a.length >= i))(n))), maxLength: (n) => Zr(wt(t, ((i) => Ze((a) => Jr(a) && a.length <= i))(n))), includes: (n) => {
  return Zr(wt(t, (i = n, Ze((a) => Jr(a) && a.includes(i)))));
  var i;
}, regex: (n) => {
  return Zr(wt(t, (i = n, Ze((a) => Jr(a) && !!a.match(i)))));
  var i;
} });
Zr(Ze(Jr));
const Gn = (t) => Object.assign(Un(t), { between: (n, i) => Gn(wt(t, ((a, s) => Ze((l) => Yn(l) && a <= l && s >= l))(n, i))), lt: (n) => Gn(wt(t, ((i) => Ze((a) => Yn(a) && a < i))(n))), gt: (n) => Gn(wt(t, ((i) => Ze((a) => Yn(a) && a > i))(n))), lte: (n) => Gn(wt(t, ((i) => Ze((a) => Yn(a) && a <= i))(n))), gte: (n) => Gn(wt(t, ((i) => Ze((a) => Yn(a) && a >= i))(n))), int: () => Gn(wt(t, Ze((n) => Yn(n) && Number.isInteger(n)))), finite: () => Gn(wt(t, Ze((n) => Yn(n) && Number.isFinite(n)))), positive: () => Gn(wt(t, Ze((n) => Yn(n) && n > 0))), negative: () => Gn(wt(t, Ze((n) => Yn(n) && n < 0))) });
Gn(Ze(Yn));
const Rr = (t) => Object.assign(Un(t), { between: (n, i) => Rr(wt(t, ((a, s) => Ze((l) => Dr(l) && a <= l && s >= l))(n, i))), lt: (n) => Rr(wt(t, ((i) => Ze((a) => Dr(a) && a < i))(n))), gt: (n) => Rr(wt(t, ((i) => Ze((a) => Dr(a) && a > i))(n))), lte: (n) => Rr(wt(t, ((i) => Ze((a) => Dr(a) && a <= i))(n))), gte: (n) => Rr(wt(t, ((i) => Ze((a) => Dr(a) && a >= i))(n))), positive: () => Rr(wt(t, Ze((n) => Dr(n) && n > 0))), negative: () => Rr(wt(t, Ze((n) => Dr(n) && n < 0))) });
Rr(Ze(Dr));
Un(Ze(function(t) {
  return typeof t == "boolean";
}));
Un(Ze(function(t) {
  return typeof t == "symbol";
}));
Un(Ze(function(t) {
  return t == null;
}));
const Al = { matched: !1, value: void 0 };
function hC(t) {
  return new Jo(t, Al);
}
class Jo {
  constructor(n, i) {
    this.input = void 0, this.state = void 0, this.input = n, this.state = i;
  }
  with(...n) {
    if (this.state.matched)
      return this;
    const i = n[n.length - 1], a = [n[0]];
    let s;
    n.length === 3 && typeof n[1] == "function" ? s = n[1] : n.length > 2 && a.push(...n.slice(1, n.length - 1));
    let l = !1, c = {};
    const h = (y, b) => {
      l = !0, c[y] = b;
    }, g = !a.some((y) => Xn(y, this.input, h)) || s && !s(this.input) ? Al : { matched: !0, value: i(l ? Xo in c ? c[Xo] : c : this.input, this.input) };
    return new Jo(this.input, g);
  }
  when(n, i) {
    if (this.state.matched)
      return this;
    const a = !!n(this.input);
    return new Jo(this.input, a ? { matched: !0, value: i(this.input, this.input) } : Al);
  }
  otherwise(n) {
    return this.state.matched ? this.state.value : n(this.input);
  }
  exhaustive() {
    if (this.state.matched)
      return this.state.value;
    let n;
    try {
      n = JSON.stringify(this.input);
    } catch {
      n = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${n}`);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
}
const PO = ({
  id: t
}) => {
  const n = SA(), i = G.useMemo(() => {
    const {
      component: a,
      ...s
    } = n.find((l) => l.id === t) || {};
    if (!a)
      throw new Error(`Route with id ${t} not found`);
    return {
      ...s,
      Component: G.lazy(() => a())
    };
  }, [t, n]);
  return /* @__PURE__ */ et(G.Suspense, { fallback: /* @__PURE__ */ et(SO, {}), children: /* @__PURE__ */ et(i.Component, {}) });
}, av = te.createContext(null), dC = () => {
  const t = te.useContext(av);
  if (!t)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return t;
}, NO = ({
  children: t,
  ...n
}) => {
  const [i, a] = te.useState();
  return /* @__PURE__ */ et(av.Provider, { value: {
    ...n,
    state: i,
    setState: a
  }, children: t });
}, IO = ({
  el: t,
  match: n,
  window: i
}) => $i.createPortal(/* @__PURE__ */ et(NO, { width: 0, height: 0, title: "", position: {
  x: 0,
  y: 0
}, maximized: !0, folded: !0, focused: !0, params: n.params, focus: () => i == null ? void 0 : i.focus(), blur: () => i == null ? void 0 : i.blur(), maximize: () => i == null ? void 0 : i.maximize(), minimize: () => i == null ? void 0 : i.restore(), fold: () => i == null ? void 0 : i.minimize(), close: () => {
  setTimeout(() => {
    i == null || i.close();
  }, 50);
}, updatePosition: ({
  x: a,
  y: s
}) => i == null ? void 0 : i.showAt(a, s), setTitle: (a) => i == null ? void 0 : i.setTitle(a), setWidth: (a) => i == null ? void 0 : i.setWidth(a), setHeight: (a) => i == null ? void 0 : i.setHeight(a), children: /* @__PURE__ */ et(PO, { id: n.route.id }) }), t), MO = te.createContext(null), kO = ({
  children: t,
  navigate: n
}) => /* @__PURE__ */ et(MO.Provider, { value: {
  navigate: n
}, children: t }), FO = ({
  eventEmitter: t,
  onNavigate: n,
  session: i,
  onSessionUpdate: a,
  onSessionExpired: s,
  onReady: l
}) => {
  const [c, h] = te.useState([]), [g, y] = te.useState(i);
  return te.useEffect(() => (t.on("update-session", (b) => {
    y(b);
  }), t.on("add", (b, v, C) => {
    h((_) => [..._, {
      el: b,
      match: v,
      window: C
    }]);
  }), t.on("destroy", (b) => {
    h((v) => v.filter((C) => C.el !== b));
  }), l(), () => {
    t.removeAllListeners("update-session"), t.removeAllListeners("add"), t.removeAllListeners("destroy");
  }), [t]), /* @__PURE__ */ et(TA, { session: g, updateSession: (b) => {
    a(b), y(b);
  }, onSessionExpired: s, children: /* @__PURE__ */ es(kO, { navigate: n, children: [
    /* @__PURE__ */ et(I1, {}),
    /* @__PURE__ */ et(Sd, { styles: El`
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
    c.map((b) => /* @__PURE__ */ et(IO, { ...b }, b.match.route.id))
  ] }) });
};
function BO(t) {
  for (var n = [], i = 0; i < t.length; ) {
    var a = t[i];
    if (a === "*" || a === "+" || a === "?") {
      n.push({ type: "MODIFIER", index: i, value: t[i++] });
      continue;
    }
    if (a === "\\") {
      n.push({ type: "ESCAPED_CHAR", index: i++, value: t[i++] });
      continue;
    }
    if (a === "{") {
      n.push({ type: "OPEN", index: i, value: t[i++] });
      continue;
    }
    if (a === "}") {
      n.push({ type: "CLOSE", index: i, value: t[i++] });
      continue;
    }
    if (a === ":") {
      for (var s = "", l = i + 1; l < t.length; ) {
        var c = t.charCodeAt(l);
        if (
          // `0-9`
          c >= 48 && c <= 57 || // `A-Z`
          c >= 65 && c <= 90 || // `a-z`
          c >= 97 && c <= 122 || // `_`
          c === 95
        ) {
          s += t[l++];
          continue;
        }
        break;
      }
      if (!s)
        throw new TypeError("Missing parameter name at ".concat(i));
      n.push({ type: "NAME", index: i, value: s }), i = l;
      continue;
    }
    if (a === "(") {
      var h = 1, g = "", l = i + 1;
      if (t[l] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(l));
      for (; l < t.length; ) {
        if (t[l] === "\\") {
          g += t[l++] + t[l++];
          continue;
        }
        if (t[l] === ")") {
          if (h--, h === 0) {
            l++;
            break;
          }
        } else if (t[l] === "(" && (h++, t[l + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(l));
        g += t[l++];
      }
      if (h)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!g)
        throw new TypeError("Missing pattern at ".concat(i));
      n.push({ type: "PATTERN", index: i, value: g }), i = l;
      continue;
    }
    n.push({ type: "CHAR", index: i, value: t[i++] });
  }
  return n.push({ type: "END", index: i, value: "" }), n;
}
function ov(t, n) {
  n === void 0 && (n = {});
  for (var i = BO(t), a = n.prefixes, s = a === void 0 ? "./" : a, l = "[^".concat(Si(n.delimiter || "/#?"), "]+?"), c = [], h = 0, g = 0, y = "", b = function(oe) {
    if (g < i.length && i[g].type === oe)
      return i[g++].value;
  }, v = function(oe) {
    var de = b(oe);
    if (de !== void 0)
      return de;
    var ie = i[g], fe = ie.type, Fe = ie.index;
    throw new TypeError("Unexpected ".concat(fe, " at ").concat(Fe, ", expected ").concat(oe));
  }, C = function() {
    for (var oe = "", de; de = b("CHAR") || b("ESCAPED_CHAR"); )
      oe += de;
    return oe;
  }; g < i.length; ) {
    var _ = b("CHAR"), w = b("NAME"), E = b("PATTERN");
    if (w || E) {
      var O = _ || "";
      s.indexOf(O) === -1 && (y += O, O = ""), y && (c.push(y), y = ""), c.push({
        name: w || h++,
        prefix: O,
        suffix: "",
        pattern: E || l,
        modifier: b("MODIFIER") || ""
      });
      continue;
    }
    var D = _ || b("ESCAPED_CHAR");
    if (D) {
      y += D;
      continue;
    }
    y && (c.push(y), y = "");
    var B = b("OPEN");
    if (B) {
      var O = C(), M = b("NAME") || "", U = b("PATTERN") || "", ee = C();
      v("CLOSE"), c.push({
        name: M || (U ? h++ : ""),
        pattern: M && !U ? l : U,
        prefix: O,
        suffix: ee,
        modifier: b("MODIFIER") || ""
      });
      continue;
    }
    v("END");
  }
  return c;
}
function pC(t, n) {
  return WO(ov(t, n), n);
}
function WO(t, n) {
  n === void 0 && (n = {});
  var i = Ql(n), a = n.encode, s = a === void 0 ? function(g) {
    return g;
  } : a, l = n.validate, c = l === void 0 ? !0 : l, h = t.map(function(g) {
    if (typeof g == "object")
      return new RegExp("^(?:".concat(g.pattern, ")$"), i);
  });
  return function(g) {
    for (var y = "", b = 0; b < t.length; b++) {
      var v = t[b];
      if (typeof v == "string") {
        y += v;
        continue;
      }
      var C = g ? g[v.name] : void 0, _ = v.modifier === "?" || v.modifier === "*", w = v.modifier === "*" || v.modifier === "+";
      if (Array.isArray(C)) {
        if (!w)
          throw new TypeError('Expected "'.concat(v.name, '" to not repeat, but got an array'));
        if (C.length === 0) {
          if (_)
            continue;
          throw new TypeError('Expected "'.concat(v.name, '" to not be empty'));
        }
        for (var E = 0; E < C.length; E++) {
          var O = s(C[E], v);
          if (c && !h[b].test(O))
            throw new TypeError('Expected all "'.concat(v.name, '" to match "').concat(v.pattern, '", but got "').concat(O, '"'));
          y += v.prefix + O + v.suffix;
        }
        continue;
      }
      if (typeof C == "string" || typeof C == "number") {
        var O = s(String(C), v);
        if (c && !h[b].test(O))
          throw new TypeError('Expected "'.concat(v.name, '" to match "').concat(v.pattern, '", but got "').concat(O, '"'));
        y += v.prefix + O + v.suffix;
        continue;
      }
      if (!_) {
        var D = w ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(v.name, '" to be ').concat(D));
      }
    }
    return y;
  };
}
function UO(t, n) {
  var i = [], a = sv(t, i, n);
  return zO(a, i, n);
}
function zO(t, n, i) {
  i === void 0 && (i = {});
  var a = i.decode, s = a === void 0 ? function(l) {
    return l;
  } : a;
  return function(l) {
    var c = t.exec(l);
    if (!c)
      return !1;
    for (var h = c[0], g = c.index, y = /* @__PURE__ */ Object.create(null), b = function(C) {
      if (c[C] === void 0)
        return "continue";
      var _ = n[C - 1];
      _.modifier === "*" || _.modifier === "+" ? y[_.name] = c[C].split(_.prefix + _.suffix).map(function(w) {
        return s(w, _);
      }) : y[_.name] = s(c[C], _);
    }, v = 1; v < c.length; v++)
      b(v);
    return { path: h, index: g, params: y };
  };
}
function Si(t) {
  return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Ql(t) {
  return t && t.sensitive ? "" : "i";
}
function HO(t, n) {
  if (!n)
    return t;
  for (var i = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, s = i.exec(t.source); s; )
    n.push({
      // Use parenthesized substring match if available, index otherwise
      name: s[1] || a++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), s = i.exec(t.source);
  return t;
}
function jO(t, n, i) {
  var a = t.map(function(s) {
    return sv(s, n, i).source;
  });
  return new RegExp("(?:".concat(a.join("|"), ")"), Ql(i));
}
function $O(t, n, i) {
  return qO(ov(t, i), n, i);
}
function qO(t, n, i) {
  i === void 0 && (i = {});
  for (var a = i.strict, s = a === void 0 ? !1 : a, l = i.start, c = l === void 0 ? !0 : l, h = i.end, g = h === void 0 ? !0 : h, y = i.encode, b = y === void 0 ? function(Fe) {
    return Fe;
  } : y, v = i.delimiter, C = v === void 0 ? "/#?" : v, _ = i.endsWith, w = _ === void 0 ? "" : _, E = "[".concat(Si(w), "]|$"), O = "[".concat(Si(C), "]"), D = c ? "^" : "", B = 0, M = t; B < M.length; B++) {
    var U = M[B];
    if (typeof U == "string")
      D += Si(b(U));
    else {
      var ee = Si(b(U.prefix)), oe = Si(b(U.suffix));
      if (U.pattern)
        if (n && n.push(U), ee || oe)
          if (U.modifier === "+" || U.modifier === "*") {
            var de = U.modifier === "*" ? "?" : "";
            D += "(?:".concat(ee, "((?:").concat(U.pattern, ")(?:").concat(oe).concat(ee, "(?:").concat(U.pattern, "))*)").concat(oe, ")").concat(de);
          } else
            D += "(?:".concat(ee, "(").concat(U.pattern, ")").concat(oe, ")").concat(U.modifier);
        else
          U.modifier === "+" || U.modifier === "*" ? D += "((?:".concat(U.pattern, ")").concat(U.modifier, ")") : D += "(".concat(U.pattern, ")").concat(U.modifier);
      else
        D += "(?:".concat(ee).concat(oe, ")").concat(U.modifier);
    }
  }
  if (g)
    s || (D += "".concat(O, "?")), D += i.endsWith ? "(?=".concat(E, ")") : "$";
  else {
    var ie = t[t.length - 1], fe = typeof ie == "string" ? O.indexOf(ie[ie.length - 1]) > -1 : ie === void 0;
    s || (D += "(?:".concat(O, "(?=").concat(E, "))?")), fe || (D += "(?=".concat(O, "|").concat(E, ")"));
  }
  return new RegExp(D, Ql(i));
}
function sv(t, n, i) {
  return t instanceof RegExp ? HO(t, n) : Array.isArray(t) ? jO(t, n, i) : $O(t, n, i);
}
const YO = (t) => t.map((n) => [n, UO(n.path)]), GO = (t, n) => {
  for (let i = 0; i < t.length; i++) {
    const [a, s] = t[i], l = s(n);
    if (l)
      return {
        params: l.params,
        route: a,
        path: n
      };
  }
};
window.initReact = ({
  session: t,
  onNavigate: n,
  onSessionExpired: i,
  onSessionUpdate: a,
  onReady: s
}) => {
  const l = document.createElement("div");
  document.body.appendChild(l);
  const c = new x1(), h = YO(Ld.filter((g) => !g.notExposeToLibrary));
  return Xu.createRoot(l).render(/* @__PURE__ */ et(FO, { session: t, eventEmitter: c, onReady: s, onNavigate: (g) => {
    n == null || n(g);
  }, onSessionExpired: () => {
    i == null || i();
  }, onSessionUpdate: (g) => {
    a == null || a(g);
  } })), {
    updateSession: (g) => {
      c.emit("update-session", g);
    },
    match(g) {
      const y = GO(h, g);
      if (y)
        return {
          windowOptions: y.route.windowOptions,
          renderComponent: (b, v) => c.emit("add", b, y, v),
          destroyComponent: (b) => c.emit("destroy", b)
        };
    },
    getShortcuts() {
      return h.filter(([g]) => g.shortcut).map(([g]) => ({
        ...g.shortcut,
        route: g.path
      }));
    }
  };
};
export {
  k1 as $,
  ya as A,
  fO as B,
  ud as C,
  oC as D,
  Zx as E,
  w1 as F,
  cC as G,
  Xx as H,
  ZO as I,
  rs as J,
  dr as K,
  Kt as L,
  cd as M,
  hC as N,
  kd as O,
  JO as P,
  ht as Q,
  uC as R,
  SO as S,
  ba as T,
  Q1 as U,
  rC as V,
  pC as W,
  ov as X,
  iC as Y,
  Bn as Z,
  is as _,
  es as a,
  F1 as a0,
  el as a1,
  Tl as a2,
  W1 as a3,
  nC as a4,
  MO as b,
  eC as c,
  dC as d,
  fC as e,
  rv as f,
  Ku as g,
  Xp as h,
  Jx as i,
  et as j,
  wO as k,
  tC as l,
  Qp as m,
  AO as n,
  Kl as o,
  gl as p,
  Gu as q,
  lC as r,
  sC as s,
  tO as t,
  r_ as u,
  Vx as v,
  Jp as w,
  aC as x,
  Zn as y,
  Ht as z
};
