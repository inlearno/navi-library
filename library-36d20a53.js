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
import { h as Cd, j as Nt, E as Td, c as Sd, a as Oc, G as Dd, b as mw, T as gw, n as xc, d as yw, t as Oh, e as Zo } from "./mui-0a491bf1.js";
import { g as Cc, c as $i, r as G, R as te, d as hr } from "./react-6f5a8403.js";
import { P as Y, F as bw } from "./icons-ad9f8a73.js";
var ww = Nt.Fragment;
function at(t, n, i) {
  return Cd.call(n, "css") ? Nt.jsx(Td, Sd(t, n), i) : Nt.jsx(t, n, i);
}
function es(t, n, i) {
  return Cd.call(n, "css") ? Nt.jsxs(Td, Sd(t, n), i) : Nt.jsxs(t, n, i);
}
var Rd = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "user-gear", a = 640, s = 512, c = ["user-cog"], l = "f4fe", f = "M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v17.7c0 7.8 4.8 14.8 11.6 18.7c6.8 3.9 15.1 4.5 21.8 .6l13.8-7.9c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-14.4 8.3c-6.5 3.7-10 10.9-10 18.4s3.5 14.7 10 18.4l14.4 8.3c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-13.8-7.9c-6.7-3.9-15.1-3.3-21.8 .6c-6.8 3.9-11.6 10.9-11.6 18.7v17.7c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V467.8c0-7.9-4.9-14.9-11.7-18.9c-6.8-3.9-15.2-4.5-22-.6l-13.5 7.8c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l14-8.1c6.5-3.8 10.1-11.1 10.1-18.6s-3.5-14.8-10.1-18.6l-14-8.1c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l13.6 7.8c6.8 3.9 15.2 3.3 22-.6c6.9-3.9 11.7-11 11.7-18.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      c,
      l,
      f
    ]
  }, t.faUserGear = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = c, t.unicode = l, t.svgPathData = f, t.aliases = c;
})(Rd);
var Qu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "users", a = 640, s = 512, c = [], l = "f0c0", f = "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      c,
      l,
      f
    ]
  }, t.faUsers = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = c, t.unicode = l, t.svgPathData = f, t.aliases = c;
})(Qu);
const _w = [{
  id: "users",
  path: "/users",
  component: () => import("./UsersList-67e8e344.js"),
  windowOptions: {
    icon: Qu.faUsers,
    title: "Пользователи",
    width: 800
  },
  privilege: "UserViewList",
  shortcut: {
    title: "Пользователи",
    icon: Qu.faUsers,
    group: "fourth",
    order: 100
  },
  notExposeToLibrary: !0
}, {
  id: "user-profile",
  path: "/user-profile",
  component: () => import("./UserProfile-dcc9b9a4.js"),
  windowOptions: {
    icon: Rd.faUserGear,
    title: "Профиль",
    width: 400,
    height: 290
  },
  notExposeToLibrary: !0
}];
var Ld = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "book", a = 448, s = 512, c = [128212], l = "f02d", f = "M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      c,
      l,
      f
    ]
  }, t.faBook = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = c, t.unicode = l, t.svgPathData = f, t.aliases = c;
})(Ld);
var Pd = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "brush", a = 384, s = 512, c = [], l = "f55d", f = "M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      c,
      l,
      f
    ]
  }, t.faBrush = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = c, t.unicode = l, t.svgPathData = f, t.aliases = c;
})(Pd);
const Aw = [{
  id: "program-docs",
  path: "/program-docs",
  component: () => import("./ProgramDocsList-a09fcd24.js"),
  windowOptions: {
    title: "Конструктор документов программ",
    width: 700,
    height: 500,
    maximized: !0
  },
  privilege: "ProgramDocsView",
  shortcut: {
    title: "Конструктор документов программ",
    icon: Pd.faBrush,
    color: "#ef4444",
    group: "general",
    order: 1300
  }
}, {
  id: "program-docs-constructor",
  path: "/program-docs/constructor/:id",
  component: () => import("./ProgramConstructor-b79dd2bd.js"),
  privilege: "ProgramDocsView",
  windowOptions: {
    title: "Конструктор программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-docs-draft",
  path: "/program-docs/draft",
  component: () => import("./Draft-2aeff03e.js"),
  privilege: "ProgramDocsEdit",
  windowOptions: {
    title: "Черновик программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-constructor-copy",
  path: "/program-docs/copy/:id",
  component: () => import("./CopyProgramForm-ebfcebdc.js"),
  windowOptions: {
    title: "Копирование программы",
    width: 700,
    height: 500
  }
}, {
  id: "program-constructor-dicts",
  path: "/program-docs/dicts",
  component: () => import("./Dictionaries-bfcc1376.js"),
  windowOptions: {
    title: "Справочники",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Справочники конструктор программы",
    icon: Ld.faBook,
    color: "#ef4444",
    group: "general",
    order: 1350
  }
}];
var Xu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "building-columns", a = 512, s = 512, c = ["bank", "institution", "museum", "university"], l = "f19c", f = "M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      c,
      l,
      f
    ]
  }, t.faBuildingColumns = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = c, t.unicode = l, t.svgPathData = f, t.aliases = c;
})(Xu);
const Ew = [{
  id: "teacher-profile",
  path: "/teacher-profile",
  component: () => import("./TeacherProfile-73076fb9.js"),
  windowOptions: {
    title: "",
    icon: Xu.faBuildingColumns,
    width: 850,
    height: 500
  },
  shortcut: {
    title: "Профиль педагога",
    icon: Xu.faBuildingColumns,
    group: "fourth",
    order: 99
  },
  privilege: "TeachersProfile",
  notExposeToLibrary: !0
}], Ow = [...Aw, ..._w, ...Ew];
var Nd = { exports: {} };
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
(function(t, n) {
  (function(i) {
    var a = Object.hasOwnProperty, s = Array.isArray ? Array.isArray : function(O) {
      return Object.prototype.toString.call(O) === "[object Array]";
    }, c = 10, l = typeof process == "object" && typeof process.nextTick == "function", f = typeof Symbol == "function", b = typeof Reflect == "object", m = typeof setImmediate == "function", y = m ? setImmediate : setTimeout, v = f ? b && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(g) {
      var O = Object.getOwnPropertyNames(g);
      return O.push.apply(O, Object.getOwnPropertySymbols(g)), O;
    } : Object.keys;
    function C() {
      this._events = {}, this._conf && _.call(this, this._conf);
    }
    function _(g) {
      g && (this._conf = g, g.delimiter && (this.delimiter = g.delimiter), g.maxListeners !== i && (this._maxListeners = g.maxListeners), g.wildcard && (this.wildcard = g.wildcard), g.newListener && (this._newListener = g.newListener), g.removeListener && (this._removeListener = g.removeListener), g.verboseMemoryLeak && (this.verboseMemoryLeak = g.verboseMemoryLeak), g.ignoreErrors && (this.ignoreErrors = g.ignoreErrors), this.wildcard && (this.listenerTree = {}));
    }
    function w(g, O) {
      var S = "(node) warning: possible EventEmitter memory leak detected. " + g + " listeners added. Use emitter.setMaxListeners() to increase limit.";
      if (this.verboseMemoryLeak && (S += " Event name: " + O + "."), typeof process < "u" && process.emitWarning) {
        var P = new Error(S);
        P.name = "MaxListenersExceededWarning", P.emitter = this, P.count = g, process.emitWarning(P);
      } else
        console.error(S), console.trace && console.trace();
    }
    var E = function(g, O, S) {
      var P = arguments.length;
      switch (P) {
        case 0:
          return [];
        case 1:
          return [g];
        case 2:
          return [g, O];
        case 3:
          return [g, O, S];
        default:
          for (var N = new Array(P); P--; )
            N[P] = arguments[P];
          return N;
      }
    };
    function x(g, O) {
      for (var S = {}, P, N = g.length, k = O ? O.length : 0, K = 0; K < N; K++)
        P = g[K], S[P] = K < k ? O[K] : i;
      return S;
    }
    function D(g, O, S) {
      this._emitter = g, this._target = O, this._listeners = {}, this._listenersCount = 0;
      var P, N;
      if ((S.on || S.off) && (P = S.on, N = S.off), O.addEventListener ? (P = O.addEventListener, N = O.removeEventListener) : O.addListener ? (P = O.addListener, N = O.removeListener) : O.on && (P = O.on, N = O.off), !P && !N)
        throw Error("target does not implement any known event API");
      if (typeof P != "function")
        throw TypeError("on method must be a function");
      if (typeof N != "function")
        throw TypeError("off method must be a function");
      this._on = P, this._off = N;
      var k = g._observers;
      k ? k.push(this) : g._observers = [this];
    }
    Object.assign(D.prototype, {
      subscribe: function(g, O, S) {
        var P = this, N = this._target, k = this._emitter, K = this._listeners, J = function() {
          var V = E.apply(null, arguments), X = {
            data: V,
            name: O,
            original: g
          };
          if (S) {
            var se = S.call(N, X);
            se !== !1 && k.emit.apply(k, [X.name].concat(V));
            return;
          }
          k.emit.apply(k, [O].concat(V));
        };
        if (K[g])
          throw Error("Event '" + g + "' is already listening");
        this._listenersCount++, k._newListener && k._removeListener && !P._onNewListener ? (this._onNewListener = function(V) {
          V === O && K[g] === null && (K[g] = J, P._on.call(N, g, J));
        }, k.on("newListener", this._onNewListener), this._onRemoveListener = function(V) {
          V === O && !k.hasListeners(V) && K[g] && (K[g] = null, P._off.call(N, g, J));
        }, K[g] = null, k.on("removeListener", this._onRemoveListener)) : (K[g] = J, P._on.call(N, g, J));
      },
      unsubscribe: function(g) {
        var O = this, S = this._listeners, P = this._emitter, N, k, K = this._off, J = this._target, V;
        if (g && typeof g != "string")
          throw TypeError("event must be a string");
        function X() {
          O._onNewListener && (P.off("newListener", O._onNewListener), P.off("removeListener", O._onRemoveListener), O._onNewListener = null, O._onRemoveListener = null);
          var se = ie.call(P, O);
          P._observers.splice(se, 1);
        }
        if (g) {
          if (N = S[g], !N)
            return;
          K.call(J, g, N), delete S[g], --this._listenersCount || X();
        } else {
          for (k = v(S), V = k.length; V-- > 0; )
            g = k[V], K.call(J, g, S[g]);
          this._listeners = {}, this._listenersCount = 0, X();
        }
      }
    });
    function B(g, O, S, P) {
      var N = Object.assign({}, O);
      if (!g)
        return N;
      if (typeof g != "object")
        throw TypeError("options must be an object");
      var k = Object.keys(g), K = k.length, J, V, X;
      function se(xe) {
        throw Error('Invalid "' + J + '" option value' + (xe ? ". Reason: " + xe : ""));
      }
      for (var Pe = 0; Pe < K; Pe++) {
        if (J = k[Pe], !P && !a.call(O, J))
          throw Error('Unknown "' + J + '" option');
        V = g[J], V !== i && (X = S[J], N[J] = X ? X(V, se) : V);
      }
      return N;
    }
    function M(g, O) {
      return (typeof g != "function" || !g.hasOwnProperty("prototype")) && O("value must be a constructor"), g;
    }
    function U(g) {
      var O = "value must be type of " + g.join("|"), S = g.length, P = g[0], N = g[1];
      return S === 1 ? function(k, K) {
        if (typeof k === P)
          return k;
        K(O);
      } : S === 2 ? function(k, K) {
        var J = typeof k;
        if (J === P || J === N)
          return k;
        K(O);
      } : function(k, K) {
        for (var J = typeof k, V = S; V-- > 0; )
          if (J === g[V])
            return k;
        K(O);
      };
    }
    var ee = U(["function"]), oe = U(["object", "function"]);
    function de(g, O, S) {
      var P, N, k = 0, K, J = new g(function(V, X, se) {
        S = B(S, {
          timeout: 0,
          overload: !1
        }, {
          timeout: function(Ne, ot) {
            return Ne *= 1, (typeof Ne != "number" || Ne < 0 || !Number.isFinite(Ne)) && ot("timeout must be a positive number"), Ne;
          }
        }), P = !S.overload && typeof g.prototype.cancel == "function" && typeof se == "function";
        function Pe() {
          N && (N = null), k && (clearTimeout(k), k = 0);
        }
        var xe = function(Ne) {
          Pe(), V(Ne);
        }, Ee = function(Ne) {
          Pe(), X(Ne);
        };
        P ? O(xe, Ee, se) : (N = [function(Ne) {
          Ee(Ne || Error("canceled"));
        }], O(xe, Ee, function(Ne) {
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
    function ie(g) {
      var O = this._observers;
      if (!O)
        return -1;
      for (var S = O.length, P = 0; P < S; P++)
        if (O[P]._target === g)
          return P;
      return -1;
    }
    function fe(g, O, S, P, N) {
      if (!S)
        return null;
      if (P === 0) {
        var k = typeof O;
        if (k === "string") {
          var K, J, V = 0, X = 0, se = this.delimiter, Pe = se.length;
          if ((J = O.indexOf(se)) !== -1) {
            K = new Array(5);
            do
              K[V++] = O.slice(X, J), X = J + Pe;
            while ((J = O.indexOf(se, X)) !== -1);
            K[V++] = O.slice(X), O = K, N = V;
          } else
            O = [O], N = 1;
        } else
          k === "object" ? N = O.length : (O = [O], N = 1);
      }
      var xe = null, Ee, Ne, ot, be, yt, ct = O[P], lt = O[P + 1], pt, tt;
      if (P === N)
        S._listeners && (typeof S._listeners == "function" ? (g && g.push(S._listeners), xe = [S]) : (g && g.push.apply(g, S._listeners), xe = [S]));
      else if (ct === "*") {
        for (pt = v(S), J = pt.length; J-- > 0; )
          Ee = pt[J], Ee !== "_listeners" && (tt = fe(g, O, S[Ee], P + 1, N), tt && (xe ? xe.push.apply(xe, tt) : xe = tt));
        return xe;
      } else if (ct === "**") {
        for (yt = P + 1 === N || P + 2 === N && lt === "*", yt && S._listeners && (xe = fe(g, O, S, N, N)), pt = v(S), J = pt.length; J-- > 0; )
          Ee = pt[J], Ee !== "_listeners" && (Ee === "*" || Ee === "**" ? (S[Ee]._listeners && !yt && (tt = fe(g, O, S[Ee], N, N), tt && (xe ? xe.push.apply(xe, tt) : xe = tt)), tt = fe(g, O, S[Ee], P, N)) : Ee === lt ? tt = fe(g, O, S[Ee], P + 2, N) : tt = fe(g, O, S[Ee], P, N), tt && (xe ? xe.push.apply(xe, tt) : xe = tt));
        return xe;
      } else
        S[ct] && (xe = fe(g, O, S[ct], P + 1, N));
      if (Ne = S["*"], Ne && fe(g, O, Ne, P + 1, N), ot = S["**"], ot)
        if (P < N)
          for (ot._listeners && fe(g, O, ot, N, N), pt = v(ot), J = pt.length; J-- > 0; )
            Ee = pt[J], Ee !== "_listeners" && (Ee === lt ? fe(g, O, ot[Ee], P + 2, N) : Ee === ct ? fe(g, O, ot[Ee], P + 1, N) : (be = {}, be[Ee] = ot[Ee], fe(g, O, { "**": be }, P + 1, N)));
        else
          ot._listeners ? fe(g, O, ot, N, N) : ot["*"] && ot["*"]._listeners && fe(g, O, ot["*"], N, N);
      return xe;
    }
    function Fe(g, O, S) {
      var P = 0, N = 0, k, K = this.delimiter, J = K.length, V;
      if (typeof g == "string")
        if ((k = g.indexOf(K)) !== -1) {
          V = new Array(5);
          do
            V[P++] = g.slice(N, k), N = k + J;
          while ((k = g.indexOf(K, N)) !== -1);
          V[P++] = g.slice(N);
        } else
          V = [g], P = 1;
      else
        V = g, P = g.length;
      if (P > 1) {
        for (k = 0; k + 1 < P; k++)
          if (V[k] === "**" && V[k + 1] === "**")
            return;
      }
      var X = this.listenerTree, se;
      for (k = 0; k < P; k++)
        if (se = V[k], X = X[se] || (X[se] = {}), k === P - 1)
          return X._listeners ? (typeof X._listeners == "function" && (X._listeners = [X._listeners]), S ? X._listeners.unshift(O) : X._listeners.push(O), !X._listeners.warned && this._maxListeners > 0 && X._listeners.length > this._maxListeners && (X._listeners.warned = !0, w.call(this, X._listeners.length, se))) : X._listeners = O, !0;
      return !0;
    }
    function Re(g, O, S, P) {
      for (var N = v(g), k = N.length, K, J, V, X = g._listeners, se; k-- > 0; )
        J = N[k], K = g[J], J === "_listeners" ? V = S : V = S ? S.concat(J) : [J], se = P || typeof J == "symbol", X && O.push(se ? V : V.join(this.delimiter)), typeof K == "object" && Re.call(this, K, O, V, se);
      return O;
    }
    function Be(g) {
      for (var O = v(g), S = O.length, P, N, k; S-- > 0; )
        N = O[S], P = g[N], P && (k = !0, N !== "_listeners" && !Be(P) && delete g[N]);
      return k;
    }
    function Qe(g, O, S) {
      this.emitter = g, this.event = O, this.listener = S;
    }
    Qe.prototype.off = function() {
      return this.emitter.off(this.event, this.listener), this;
    };
    function je(g, O, S) {
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
        var J = O, V = O._origin || O;
        if (k && !l)
          throw Error("process.nextTick is not supported");
        N === i && (N = O.constructor.name === "AsyncFunction"), O = function() {
          var X = arguments, se = this, Pe = this.event;
          return N ? k ? Promise.resolve() : new Promise(function(xe) {
            y(xe);
          }).then(function() {
            return se.event = Pe, J.apply(se, X);
          }) : (k ? process.nextTick : y)(function() {
            se.event = Pe, J.apply(se, X);
          });
        }, O._async = !0, O._origin = V;
      }
      return [O, K ? new Qe(this, g, O) : this];
    }
    function he(g) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, _.call(this, g);
    }
    he.EventEmitter2 = he, he.prototype.listenTo = function(g, O, S) {
      if (typeof g != "object")
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
        var K = S.reducers, J = ie.call(P, g), V;
        J === -1 ? V = new D(P, g, S) : V = P._observers[J];
        for (var X = v(k), se = X.length, Pe, xe = typeof K == "function", Ee = 0; Ee < se; Ee++)
          Pe = X[Ee], V.subscribe(
            Pe,
            k[Pe] || Pe,
            xe ? K : K && K[Pe]
          );
      }
      return s(O) ? N(x(O)) : N(typeof O == "string" ? x(O.split(/\s+/)) : O), this;
    }, he.prototype.stopListeningTo = function(g, O) {
      var S = this._observers;
      if (!S)
        return !1;
      var P = S.length, N, k = !1;
      if (g && typeof g != "object")
        throw TypeError("target should be an object");
      for (; P-- > 0; )
        N = S[P], (!g || N._target === g) && (N.unsubscribe(O), k = !0);
      return k;
    }, he.prototype.delimiter = ".", he.prototype.setMaxListeners = function(g) {
      g !== i && (this._maxListeners = g, this._conf || (this._conf = {}), this._conf.maxListeners = g);
    }, he.prototype.getMaxListeners = function() {
      return this._maxListeners;
    }, he.prototype.event = "", he.prototype.once = function(g, O, S) {
      return this._once(g, O, !1, S);
    }, he.prototype.prependOnceListener = function(g, O, S) {
      return this._once(g, O, !0, S);
    }, he.prototype._once = function(g, O, S, P) {
      return this._many(g, 1, O, S, P);
    }, he.prototype.many = function(g, O, S, P) {
      return this._many(g, O, S, !1, P);
    }, he.prototype.prependMany = function(g, O, S, P) {
      return this._many(g, O, S, !0, P);
    }, he.prototype._many = function(g, O, S, P, N) {
      var k = this;
      if (typeof S != "function")
        throw new Error("many only accepts instances of Function");
      function K() {
        return --O === 0 && k.off(g, K), S.apply(this, arguments);
      }
      return K._origin = S, this._on(g, K, P, N);
    }, he.prototype.emit = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || C.call(this);
      var g = arguments[0], O, S = this.wildcard, P, N, k, K, J;
      if (g === "newListener" && !this._newListener && !this._events.newListener)
        return !1;
      if (S && (O = g, g !== "newListener" && g !== "removeListener" && typeof g == "object")) {
        if (N = g.length, f) {
          for (k = 0; k < N; k++)
            if (typeof g[k] == "symbol") {
              J = !0;
              break;
            }
        }
        J || (g = g.join(this.delimiter));
      }
      var V = arguments.length, X;
      if (this._all && this._all.length)
        for (X = this._all.slice(), k = 0, N = X.length; k < N; k++)
          switch (this.event = g, V) {
            case 1:
              X[k].call(this, g);
              break;
            case 2:
              X[k].call(this, g, arguments[1]);
              break;
            case 3:
              X[k].call(this, g, arguments[1], arguments[2]);
              break;
            default:
              X[k].apply(this, arguments);
          }
      if (S)
        X = [], fe.call(this, X, O, this.listenerTree, 0, N);
      else if (X = this._events[g], typeof X == "function") {
        switch (this.event = g, V) {
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
          switch (this.event = g, V) {
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
      } else if (!this.ignoreErrors && !this._all && g === "error")
        throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all;
    }, he.prototype.emitAsync = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || C.call(this);
      var g = arguments[0], O = this.wildcard, S, P, N, k, K, J;
      if (g === "newListener" && !this._newListener && !this._events.newListener)
        return Promise.resolve([!1]);
      if (O && (S = g, g !== "newListener" && g !== "removeListener" && typeof g == "object")) {
        if (k = g.length, f) {
          for (K = 0; K < k; K++)
            if (typeof g[K] == "symbol") {
              P = !0;
              break;
            }
        }
        P || (g = g.join(this.delimiter));
      }
      var V = [], X = arguments.length, se;
      if (this._all)
        for (K = 0, k = this._all.length; K < k; K++)
          switch (this.event = g, X) {
            case 1:
              V.push(this._all[K].call(this, g));
              break;
            case 2:
              V.push(this._all[K].call(this, g, arguments[1]));
              break;
            case 3:
              V.push(this._all[K].call(this, g, arguments[1], arguments[2]));
              break;
            default:
              V.push(this._all[K].apply(this, arguments));
          }
      if (O ? (se = [], fe.call(this, se, S, this.listenerTree, 0)) : se = this._events[g], typeof se == "function")
        switch (this.event = g, X) {
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
          switch (this.event = g, X) {
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
      } else if (!this.ignoreErrors && !this._all && g === "error")
        return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
      return Promise.all(V);
    }, he.prototype.on = function(g, O, S) {
      return this._on(g, O, !1, S);
    }, he.prototype.prependListener = function(g, O, S) {
      return this._on(g, O, !0, S);
    }, he.prototype.onAny = function(g) {
      return this._onAny(g, !1);
    }, he.prototype.prependAny = function(g) {
      return this._onAny(g, !0);
    }, he.prototype.addListener = he.prototype.on, he.prototype._onAny = function(g, O) {
      if (typeof g != "function")
        throw new Error("onAny only accepts instances of Function");
      return this._all || (this._all = []), O ? this._all.unshift(g) : this._all.push(g), this;
    }, he.prototype._on = function(g, O, S, P) {
      if (typeof g == "function")
        return this._onAny(g, O), this;
      if (typeof O != "function")
        throw new Error("on only accepts instances of Function");
      this._events || C.call(this);
      var N = this, k;
      return P !== i && (k = je.call(this, g, O, P), O = k[0], N = k[1]), this._newListener && this.emit("newListener", g, O), this.wildcard ? (Fe.call(this, g, O, S), N) : (this._events[g] ? (typeof this._events[g] == "function" && (this._events[g] = [this._events[g]]), S ? this._events[g].unshift(O) : this._events[g].push(O), !this._events[g].warned && this._maxListeners > 0 && this._events[g].length > this._maxListeners && (this._events[g].warned = !0, w.call(this, this._events[g].length, g))) : this._events[g] = O, N);
    }, he.prototype.off = function(g, O) {
      if (typeof O != "function")
        throw new Error("removeListener only takes instances of Function");
      var S, P = [];
      if (this.wildcard) {
        var N = typeof g == "string" ? g.split(this.delimiter) : g.slice();
        if (P = fe.call(this, null, N, this.listenerTree, 0), !P)
          return this;
      } else {
        if (!this._events[g])
          return this;
        S = this._events[g], P.push({ _listeners: S });
      }
      for (var k = 0; k < P.length; k++) {
        var K = P[k];
        if (S = K._listeners, s(S)) {
          for (var J = -1, V = 0, X = S.length; V < X; V++)
            if (S[V] === O || S[V].listener && S[V].listener === O || S[V]._origin && S[V]._origin === O) {
              J = V;
              break;
            }
          if (J < 0)
            continue;
          return this.wildcard ? K._listeners.splice(J, 1) : this._events[g].splice(J, 1), S.length === 0 && (this.wildcard ? delete K._listeners : delete this._events[g]), this._removeListener && this.emit("removeListener", g, O), this;
        } else
          (S === O || S.listener && S.listener === O || S._origin && S._origin === O) && (this.wildcard ? delete K._listeners : delete this._events[g], this._removeListener && this.emit("removeListener", g, O));
      }
      return this.listenerTree && Be(this.listenerTree), this;
    }, he.prototype.offAny = function(g) {
      var O = 0, S = 0, P;
      if (g && this._all && this._all.length > 0) {
        for (P = this._all, O = 0, S = P.length; O < S; O++)
          if (g === P[O])
            return P.splice(O, 1), this._removeListener && this.emit("removeListenerAny", g), this;
      } else {
        if (P = this._all, this._removeListener)
          for (O = 0, S = P.length; O < S; O++)
            this.emit("removeListenerAny", P[O]);
        this._all = [];
      }
      return this;
    }, he.prototype.removeListener = he.prototype.off, he.prototype.removeAllListeners = function(g) {
      if (g === i)
        return !this._events || C.call(this), this;
      if (this.wildcard) {
        var O = fe.call(this, null, g, this.listenerTree, 0), S, P;
        if (!O)
          return this;
        for (P = 0; P < O.length; P++)
          S = O[P], S._listeners = null;
        this.listenerTree && Be(this.listenerTree);
      } else
        this._events && (this._events[g] = null);
      return this;
    }, he.prototype.listeners = function(g) {
      var O = this._events, S, P, N, k, K;
      if (g === i) {
        if (this.wildcard)
          throw Error("event name required for wildcard emitter");
        if (!O)
          return [];
        for (S = v(O), k = S.length, N = []; k-- > 0; )
          P = O[S[k]], typeof P == "function" ? N.push(P) : N.push.apply(N, P);
        return N;
      } else {
        if (this.wildcard) {
          if (K = this.listenerTree, !K)
            return [];
          var J = [], V = typeof g == "string" ? g.split(this.delimiter) : g.slice();
          return fe.call(this, J, V, K, 0), J;
        }
        return O ? (P = O[g], P ? typeof P == "function" ? [P] : P : []) : [];
      }
    }, he.prototype.eventNames = function(g) {
      var O = this._events;
      return this.wildcard ? Re.call(this, this.listenerTree, [], null, g) : O ? v(O) : [];
    }, he.prototype.listenerCount = function(g) {
      return this.listeners(g).length;
    }, he.prototype.hasListeners = function(g) {
      if (this.wildcard) {
        var O = [], S = typeof g == "string" ? g.split(this.delimiter) : g.slice();
        return fe.call(this, O, S, this.listenerTree, 0), O.length > 0;
      }
      var P = this._events, N = this._all;
      return !!(N && N.length || P && (g === i ? v(P).length : P[g]));
    }, he.prototype.listenersAny = function() {
      return this._all ? this._all : [];
    }, he.prototype.waitFor = function(g, O) {
      var S = this, P = typeof O;
      return P === "number" ? O = { timeout: O } : P === "function" && (O = { filter: O }), O = B(O, {
        timeout: 0,
        filter: i,
        handleError: !1,
        Promise,
        overload: !1
      }, {
        filter: ee,
        Promise: M
      }), de(O.Promise, function(N, k, K) {
        function J() {
          var V = O.filter;
          if (!(V && !V.apply(S, arguments)))
            if (S.off(g, J), O.handleError) {
              var X = arguments[0];
              X ? k(X) : N(E.apply(null, arguments).slice(1));
            } else
              N(E.apply(null, arguments));
        }
        K(function() {
          S.off(g, J);
        }), S._on(g, J, !1);
      }, {
        timeout: O.timeout,
        overload: O.overload
      });
    };
    function Ce(g, O, S) {
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
        if (typeof g.addEventListener == "function") {
          J = function() {
            N(E.apply(null, arguments));
          }, K(function() {
            g.removeEventListener(O, J);
          }), g.addEventListener(
            O,
            J,
            { once: !0 }
          );
          return;
        }
        var V = function() {
          X && g.removeListener("error", X), N(E.apply(null, arguments));
        }, X;
        O !== "error" && (X = function(se) {
          g.removeListener(O, V), k(se);
        }, g.once("error", X)), K(function() {
          X && g.removeListener("error", X), g.removeListener(O, V);
        }), g.once(O, V);
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
        set: function(g) {
          if (typeof g != "number" || g < 0 || Number.isNaN(g))
            throw TypeError("n must be a non-negative number");
          qe._maxListeners = g;
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
        value: c,
        writable: !0,
        configurable: !0
      },
      _observers: { value: null, writable: !0, configurable: !0 }
    }), typeof i == "function" && i.amd ? i(function() {
      return he;
    }) : t.exports = he;
  })();
})(Nd);
var xw = Nd.exports;
const Cw = /* @__PURE__ */ Cc(xw);
var Ju = {}, xh = $i;
Ju.createRoot = xh.createRoot, Ju.hydrateRoot = xh.hydrateRoot;
function Id(t) {
  var n, i, a = "";
  if (typeof t == "string" || typeof t == "number")
    a += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (n = 0; n < t.length; n++)
        t[n] && (i = Id(t[n])) && (a && (a += " "), a += i);
    else
      for (n in t)
        t[n] && (a && (a += " "), a += n);
  return a;
}
function Fr() {
  for (var t, n, i = 0, a = ""; i < arguments.length; )
    (t = arguments[i++]) && (n = Id(t)) && (a && (a += " "), a += n);
  return a;
}
const ma = (t) => typeof t == "number" && !isNaN(t), ai = (t) => typeof t == "string", on = (t) => typeof t == "function", Io = (t) => ai(t) || on(t) ? t : null, Pu = (t) => G.isValidElement(t) || ai(t) || on(t) || ma(t);
function Tw(t, n, i) {
  i === void 0 && (i = 300);
  const { scrollHeight: a, style: s } = t;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = a + "px", s.transition = `all ${i}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(n, i);
    });
  });
}
function ts(t) {
  let { enter: n, exit: i, appendPosition: a = !1, collapse: s = !0, collapseDuration: c = 300 } = t;
  return function(l) {
    let { children: f, position: b, preventExitTransition: m, done: y, nodeRef: v, isIn: C } = l;
    const _ = a ? `${n}--${b}` : n, w = a ? `${i}--${b}` : i, E = G.useRef(0);
    return G.useLayoutEffect(() => {
      const x = v.current, D = _.split(" "), B = (M) => {
        M.target === v.current && (x.dispatchEvent(new Event("d")), x.removeEventListener("animationend", B), x.removeEventListener("animationcancel", B), E.current === 0 && M.type !== "animationcancel" && x.classList.remove(...D));
      };
      x.classList.add(...D), x.addEventListener("animationend", B), x.addEventListener("animationcancel", B);
    }, []), G.useEffect(() => {
      const x = v.current, D = () => {
        x.removeEventListener("animationend", D), s ? Tw(x, y, c) : y();
      };
      C || (m ? D() : (E.current = 1, x.className += ` ${w}`, x.addEventListener("animationend", D)));
    }, [C]), te.createElement(te.Fragment, null, f);
  };
}
function Ch(t, n) {
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
function Sw(t) {
  const [, n] = G.useReducer((_) => _ + 1, 0), [i, a] = G.useState([]), s = G.useRef(null), c = G.useRef(/* @__PURE__ */ new Map()).current, l = (_) => i.indexOf(_) !== -1, f = G.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t, containerId: null, isToastActive: l, getToast: (_) => c.get(_) }).current;
  function b(_) {
    let { containerId: w } = _;
    const { limit: E } = f.props;
    !E || w && f.containerId !== w || (f.count -= f.queue.length, f.queue = []);
  }
  function m(_) {
    a((w) => _ == null ? [] : w.filter((E) => E !== _));
  }
  function y() {
    const { toastContent: _, toastProps: w, staleId: E } = f.queue.shift();
    C(_, w, E);
  }
  function v(_, w) {
    let { delay: E, staleId: x, ...D } = w;
    if (!Pu(_) || function(Be) {
      return !s.current || f.props.enableMultiContainer && Be.containerId !== f.props.containerId || c.has(Be.toastId) && Be.updateId == null;
    }(D))
      return;
    const { toastId: B, updateId: M, data: U } = D, { props: ee } = f, oe = () => m(B), de = M == null;
    de && f.count++;
    const ie = { ...ee, style: ee.toastStyle, key: f.toastKey++, ...Object.fromEntries(Object.entries(D).filter((Be) => {
      let [Qe, je] = Be;
      return je != null;
    })), toastId: B, updateId: M, data: U, closeToast: oe, isIn: !1, className: Io(D.className || ee.toastClassName), bodyClassName: Io(D.bodyClassName || ee.bodyClassName), progressClassName: Io(D.progressClassName || ee.progressClassName), autoClose: !D.isLoading && (fe = D.autoClose, Fe = ee.autoClose, fe === !1 || ma(fe) && fe > 0 ? fe : Fe), deleteToast() {
      const Be = Ch(c.get(B), "removed");
      c.delete(B), Rn.emit(4, Be);
      const Qe = f.queue.length;
      if (f.count = B == null ? f.count - f.displayedToast : f.count - 1, f.count < 0 && (f.count = 0), Qe > 0) {
        const je = B == null ? f.props.limit : 1;
        if (Qe === 1 || je === 1)
          f.displayedToast++, y();
        else {
          const he = je > Qe ? Qe : je;
          f.displayedToast = he;
          for (let Ce = 0; Ce < he; Ce++)
            y();
        }
      } else
        n();
    } };
    var fe, Fe;
    ie.iconOut = function(Be) {
      let { theme: Qe, type: je, isLoading: he, icon: Ce } = Be, qe = null;
      const g = { theme: Qe, type: je };
      return Ce === !1 || (on(Ce) ? qe = Ce(g) : G.isValidElement(Ce) ? qe = G.cloneElement(Ce, g) : ai(Ce) || ma(Ce) ? qe = Ce : he ? qe = Nu.spinner() : ((O) => O in Nu)(je) && (qe = Nu[je](g))), qe;
    }(ie), on(D.onOpen) && (ie.onOpen = D.onOpen), on(D.onClose) && (ie.onClose = D.onClose), ie.closeButton = ee.closeButton, D.closeButton === !1 || Pu(D.closeButton) ? ie.closeButton = D.closeButton : D.closeButton === !0 && (ie.closeButton = !Pu(ee.closeButton) || ee.closeButton);
    let Re = _;
    G.isValidElement(_) && !ai(_.type) ? Re = G.cloneElement(_, { closeToast: oe, toastProps: ie, data: U }) : on(_) && (Re = _({ closeToast: oe, toastProps: ie, data: U })), ee.limit && ee.limit > 0 && f.count > ee.limit && de ? f.queue.push({ toastContent: Re, toastProps: ie, staleId: x }) : ma(E) ? setTimeout(() => {
      C(Re, ie, x);
    }, E) : C(Re, ie, x);
  }
  function C(_, w, E) {
    const { toastId: x } = w;
    E && c.delete(E);
    const D = { content: _, props: w };
    c.set(x, D), a((B) => [...B, x].filter((M) => M !== E)), Rn.emit(4, Ch(D, D.props.updateId == null ? "added" : "updated"));
  }
  return G.useEffect(() => (f.containerId = t.containerId, Rn.cancelEmit(3).on(0, v).on(1, (_) => s.current && m(_)).on(5, b).emit(2, f), () => {
    c.clear(), Rn.emit(3, f);
  }), []), G.useEffect(() => {
    f.props = t, f.isToastActive = l, f.displayedToast = i.length;
  }), { getToastToRender: function(_) {
    const w = /* @__PURE__ */ new Map(), E = Array.from(c.values());
    return t.newestOnTop && E.reverse(), E.forEach((x) => {
      const { position: D } = x.props;
      w.has(D) || w.set(D, []), w.get(D).push(x);
    }), Array.from(w, (x) => _(x[0], x[1]));
  }, containerRef: s, isToastActive: l };
}
function Th(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
}
function Sh(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
}
function Dw(t) {
  const [n, i] = G.useState(!1), [a, s] = G.useState(!1), c = G.useRef(null), l = G.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, f = G.useRef(t), { autoClose: b, pauseOnHover: m, closeToast: y, onClick: v, closeOnClick: C } = t;
  function _(U) {
    if (t.draggable) {
      U.nativeEvent.type === "touchstart" && U.nativeEvent.preventDefault(), l.didMove = !1, document.addEventListener("mousemove", D), document.addEventListener("mouseup", B), document.addEventListener("touchmove", D), document.addEventListener("touchend", B);
      const ee = c.current;
      l.canCloseOnClick = !0, l.canDrag = !0, l.boundingRect = ee.getBoundingClientRect(), ee.style.transition = "", l.x = Th(U.nativeEvent), l.y = Sh(U.nativeEvent), t.draggableDirection === "x" ? (l.start = l.x, l.removalDistance = ee.offsetWidth * (t.draggablePercent / 100)) : (l.start = l.y, l.removalDistance = ee.offsetHeight * (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent / 100));
    }
  }
  function w(U) {
    if (l.boundingRect) {
      const { top: ee, bottom: oe, left: de, right: ie } = l.boundingRect;
      U.nativeEvent.type !== "touchend" && t.pauseOnHover && l.x >= de && l.x <= ie && l.y >= ee && l.y <= oe ? x() : E();
    }
  }
  function E() {
    i(!0);
  }
  function x() {
    i(!1);
  }
  function D(U) {
    const ee = c.current;
    l.canDrag && ee && (l.didMove = !0, n && x(), l.x = Th(U), l.y = Sh(U), l.delta = t.draggableDirection === "x" ? l.x - l.start : l.y - l.start, l.start !== l.x && (l.canCloseOnClick = !1), ee.style.transform = `translate${t.draggableDirection}(${l.delta}px)`, ee.style.opacity = "" + (1 - Math.abs(l.delta / l.removalDistance)));
  }
  function B() {
    document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", B), document.removeEventListener("touchmove", D), document.removeEventListener("touchend", B);
    const U = c.current;
    if (l.canDrag && l.didMove && U) {
      if (l.canDrag = !1, Math.abs(l.delta) > l.removalDistance)
        return s(!0), void t.closeToast();
      U.style.transition = "transform 0.2s, opacity 0.2s", U.style.transform = `translate${t.draggableDirection}(0)`, U.style.opacity = "1";
    }
  }
  G.useEffect(() => {
    f.current = t;
  }), G.useEffect(() => (c.current && c.current.addEventListener("d", E, { once: !0 }), on(t.onOpen) && t.onOpen(G.isValidElement(t.children) && t.children.props), () => {
    const U = f.current;
    on(U.onClose) && U.onClose(G.isValidElement(U.children) && U.children.props);
  }), []), G.useEffect(() => (t.pauseOnFocusLoss && (document.hasFocus() || x(), window.addEventListener("focus", E), window.addEventListener("blur", x)), () => {
    t.pauseOnFocusLoss && (window.removeEventListener("focus", E), window.removeEventListener("blur", x));
  }), [t.pauseOnFocusLoss]);
  const M = { onMouseDown: _, onTouchStart: _, onMouseUp: w, onTouchEnd: w };
  return b && m && (M.onMouseEnter = x, M.onMouseLeave = E), C && (M.onClick = (U) => {
    v && v(U), l.canCloseOnClick && y();
  }), { playToast: E, pauseToast: x, isRunning: n, preventExitTransition: a, toastRef: c, eventHandlers: M };
}
function Md(t) {
  let { closeToast: n, theme: i, ariaLabel: a = "close" } = t;
  return te.createElement("button", { className: `Toastify__close-button Toastify__close-button--${i}`, type: "button", onClick: (s) => {
    s.stopPropagation(), n(s);
  }, "aria-label": a }, te.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, te.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function Rw(t) {
  let { delay: n, isRunning: i, closeToast: a, type: s = "default", hide: c, className: l, style: f, controlledProgress: b, progress: m, rtl: y, isIn: v, theme: C } = t;
  const _ = c || b && m === 0, w = { ...f, animationDuration: `${n}ms`, animationPlayState: i ? "running" : "paused", opacity: _ ? 0 : 1 };
  b && (w.transform = `scaleX(${m})`);
  const E = Fr("Toastify__progress-bar", b ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${C}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": y }), x = on(l) ? l({ rtl: y, type: s, defaultClassName: E }) : Fr(E, l);
  return te.createElement("div", { role: "progressbar", "aria-hidden": _ ? "true" : "false", "aria-label": "notification timer", className: x, style: w, [b && m >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: b && m < 1 ? null : () => {
    v && a();
  } });
}
const Lw = (t) => {
  const { isRunning: n, preventExitTransition: i, toastRef: a, eventHandlers: s } = Dw(t), { closeButton: c, children: l, autoClose: f, onClick: b, type: m, hideProgressBar: y, closeToast: v, transition: C, position: _, className: w, style: E, bodyClassName: x, bodyStyle: D, progressClassName: B, progressStyle: M, updateId: U, role: ee, progress: oe, rtl: de, toastId: ie, deleteToast: fe, isIn: Fe, isLoading: Re, iconOut: Be, closeOnClick: Qe, theme: je } = t, he = Fr("Toastify__toast", `Toastify__toast-theme--${je}`, `Toastify__toast--${m}`, { "Toastify__toast--rtl": de }, { "Toastify__toast--close-on-click": Qe }), Ce = on(w) ? w({ rtl: de, position: _, type: m, defaultClassName: he }) : Fr(he, w), qe = !!oe || !f, g = { closeToast: v, type: m, theme: je };
  let O = null;
  return c === !1 || (O = on(c) ? c(g) : G.isValidElement(c) ? G.cloneElement(c, g) : Md(g)), te.createElement(C, { isIn: Fe, done: fe, position: _, preventExitTransition: i, nodeRef: a }, te.createElement("div", { id: ie, onClick: b, className: Ce, ...s, style: E, ref: a }, te.createElement("div", { ...Fe && { role: ee }, className: on(x) ? x({ type: m }) : Fr("Toastify__toast-body", x), style: D }, Be != null && te.createElement("div", { className: Fr("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !Re }) }, Be), te.createElement("div", null, l)), O, te.createElement(Rw, { ...U && !qe ? { key: `pb-${U}` } : {}, rtl: de, theme: je, delay: f, isRunning: n, isIn: Fe, closeToast: v, hide: y, type: m, style: M, className: B, controlledProgress: qe, progress: oe || 0 })));
}, ns = function(t, n) {
  return n === void 0 && (n = !1), { enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: n };
}, Pw = ts(ns("bounce", !0));
ts(ns("slide", !0));
ts(ns("zoom"));
ts(ns("flip"));
const Zu = G.forwardRef((t, n) => {
  const { getToastToRender: i, containerRef: a, isToastActive: s } = Sw(t), { className: c, style: l, rtl: f, containerId: b } = t;
  function m(y) {
    const v = Fr("Toastify__toast-container", `Toastify__toast-container--${y}`, { "Toastify__toast-container--rtl": f });
    return on(c) ? c({ position: y, rtl: f, defaultClassName: v }) : Fr(v, Io(c));
  }
  return G.useEffect(() => {
    n && (n.current = a.current);
  }, []), te.createElement("div", { ref: a, className: "Toastify", id: b }, i((y, v) => {
    const C = v.length ? { ...l } : { ...l, pointerEvents: "none" };
    return te.createElement("div", { className: m(y), style: C, key: `container-${y}` }, v.map((_, w) => {
      let { content: E, props: x } = _;
      return te.createElement(Lw, { ...x, isIn: s(x.toastId), style: { ...x.style, "--nth": w + 1, "--len": v.length }, key: `toast-${x.key}` }, E);
    }));
  }));
});
Zu.displayName = "ToastContainer", Zu.defaultProps = { position: "top-right", transition: Pw, autoClose: 5e3, closeButton: Md, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let Iu, Xr = /* @__PURE__ */ new Map(), pa = [], Nw = 1;
function kd() {
  return "" + Nw++;
}
function Iw(t) {
  return t && (ai(t.toastId) || ma(t.toastId)) ? t.toastId : kd();
}
function ga(t, n) {
  return Xr.size > 0 ? Rn.emit(0, t, n) : pa.push({ content: t, options: n }), n.toastId;
}
function Uo(t, n) {
  return { ...n, type: n && n.type || t, toastId: Iw(n) };
}
function Ro(t) {
  return (n, i) => ga(n, Uo(t, i));
}
function ht(t, n) {
  return ga(t, Uo("default", n));
}
ht.loading = (t, n) => ga(t, Uo("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...n })), ht.promise = function(t, n, i) {
  let a, { pending: s, error: c, success: l } = n;
  s && (a = ai(s) ? ht.loading(s, i) : ht.loading(s.render, { ...i, ...s }));
  const f = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, b = (y, v, C) => {
    if (v == null)
      return void ht.dismiss(a);
    const _ = { type: y, ...f, ...i, data: C }, w = ai(v) ? { render: v } : v;
    return a ? ht.update(a, { ..._, ...w }) : ht(w.render, { ..._, ...w }), C;
  }, m = on(t) ? t() : t;
  return m.then((y) => b("success", l, y)).catch((y) => b("error", c, y)), m;
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
      let { containerId: c } = s;
      const l = Xr.get(c || Iu);
      return l && l.getToast(a);
    }(t, n);
    if (i) {
      const { props: a, content: s } = i, c = { delay: 100, ...a, ...n, toastId: n.toastId || t, updateId: kd() };
      c.toastId !== t && (c.staleId = t);
      const l = c.render || s;
      delete c.render, ga(l, c);
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
const Mw = () => /* @__PURE__ */ at(Dd, { styles: Oc`*, ::before, ::after {
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
}` }), kw = () => /* @__PURE__ */ es(ww, { children: [
  /* @__PURE__ */ at(Mw, {}),
  /* @__PURE__ */ at(Zu, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
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
function Fw(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function Bw(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Ww(t, n) {
  return Math.max(t + (n || 0) - Date.now(), 0);
}
function Dh(t, n) {
  const {
    type: i = "all",
    exact: a,
    fetchStatus: s,
    predicate: c,
    queryKey: l,
    stale: f
  } = t;
  if (l) {
    if (a) {
      if (n.queryHash !== Tc(l, n.options))
        return !1;
    } else if (!wa(n.queryKey, l))
      return !1;
  }
  if (i !== "all") {
    const b = n.isActive();
    if (i === "active" && !b || i === "inactive" && b)
      return !1;
  }
  return !(typeof f == "boolean" && n.isStale() !== f || typeof s < "u" && s !== n.state.fetchStatus || c && !c(n));
}
function Rh(t, n) {
  const { exact: i, status: a, predicate: s, mutationKey: c } = t;
  if (c) {
    if (!n.options.mutationKey)
      return !1;
    if (i) {
      if (ba(n.options.mutationKey) !== ba(c))
        return !1;
    } else if (!wa(n.options.mutationKey, c))
      return !1;
  }
  return !(a && n.state.status !== a || s && !s(n));
}
function Tc(t, n) {
  return ((n == null ? void 0 : n.queryKeyHashFn) || ba)(t);
}
function ba(t) {
  return JSON.stringify(
    t,
    (n, i) => ec(i) ? Object.keys(i).sort().reduce((a, s) => (a[s] = i[s], a), {}) : i
  );
}
function wa(t, n) {
  return t === n ? !0 : typeof t != typeof n ? !1 : t && n && typeof t == "object" && typeof n == "object" ? !Object.keys(n).some((i) => !wa(t[i], n[i])) : !1;
}
function Fd(t, n) {
  if (t === n)
    return t;
  const i = Lh(t) && Lh(n);
  if (i || ec(t) && ec(n)) {
    const a = i ? t : Object.keys(t), s = a.length, c = i ? n : Object.keys(n), l = c.length, f = i ? [] : {};
    let b = 0;
    for (let m = 0; m < l; m++) {
      const y = i ? m : c[m];
      !i && t[y] === void 0 && n[y] === void 0 && a.includes(y) ? (f[y] = void 0, b++) : (f[y] = Fd(t[y], n[y]), f[y] === t[y] && t[y] !== void 0 && b++);
    }
    return s === l && b === s ? t : f;
  }
  return n;
}
function eC(t, n) {
  if (!n || Object.keys(t).length !== Object.keys(n).length)
    return !1;
  for (const i in t)
    if (t[i] !== n[i])
      return !1;
  return !0;
}
function Lh(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function ec(t) {
  if (!Ph(t))
    return !1;
  const n = t.constructor;
  if (typeof n > "u")
    return !0;
  const i = n.prototype;
  return !(!Ph(i) || !i.hasOwnProperty("isPrototypeOf"));
}
function Ph(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Uw(t) {
  return new Promise((n) => {
    setTimeout(n, t);
  });
}
function zw(t, n, i) {
  return typeof i.structuralSharing == "function" ? i.structuralSharing(t, n) : i.structuralSharing !== !1 ? Fd(t, n) : n;
}
function tC(t) {
  return t;
}
function Hw(t, n, i = 0) {
  const a = [...t, n];
  return i && a.length > i ? a.slice(1) : a;
}
function jw(t, n, i = 0) {
  const a = [n, ...t];
  return i && a.length > i ? a.slice(0, -1) : a;
}
var ei, Lr, Ni, yd, $w = (yd = class extends rs {
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
}, ei = new WeakMap(), Lr = new WeakMap(), Ni = new WeakMap(), yd), tc = new $w(), Ii, Pr, Mi, bd, qw = (bd = class extends rs {
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
}, Ii = new WeakMap(), Pr = new WeakMap(), Mi = new WeakMap(), bd), zo = new qw();
function Yw(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Sc(t) {
  return (t ?? "online") === "online" ? zo.isOnline() : !0;
}
var Bd = class {
  constructor(t) {
    this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Mu(t) {
  return t instanceof Bd;
}
function Wd(t) {
  let n = !1, i = 0, a = !1, s, c, l;
  const f = new Promise((x, D) => {
    c = x, l = D;
  }), b = (x) => {
    var D;
    a || (_(new Bd(x)), (D = t.abort) == null || D.call(t));
  }, m = () => {
    n = !0;
  }, y = () => {
    n = !1;
  }, v = () => !tc.isFocused() || t.networkMode !== "always" && !zo.isOnline(), C = (x) => {
    var D;
    a || (a = !0, (D = t.onSuccess) == null || D.call(t, x), s == null || s(), c(x));
  }, _ = (x) => {
    var D;
    a || (a = !0, (D = t.onError) == null || D.call(t, x), s == null || s(), l(x));
  }, w = () => new Promise((x) => {
    var D;
    s = (B) => {
      const M = a || !v();
      return M && x(B), M;
    }, (D = t.onPause) == null || D.call(t);
  }).then(() => {
    var x;
    s = void 0, a || (x = t.onContinue) == null || x.call(t);
  }), E = () => {
    if (a)
      return;
    let x;
    try {
      x = t.fn();
    } catch (D) {
      x = Promise.reject(D);
    }
    Promise.resolve(x).then(C).catch((D) => {
      var oe;
      if (a)
        return;
      const B = t.retry ?? (is ? 0 : 3), M = t.retryDelay ?? Yw, U = typeof M == "function" ? M(i, D) : M, ee = B === !0 || typeof B == "number" && i < B || typeof B == "function" && B(i, D);
      if (n || !ee) {
        _(D);
        return;
      }
      i++, (oe = t.onFail) == null || oe.call(t, i, D), Uw(U).then(() => {
        if (v())
          return w();
      }).then(() => {
        n ? _(D) : E();
      });
    });
  };
  return Sc(t.networkMode) ? E() : w().then(E), {
    promise: f,
    cancel: b,
    continue: () => (s == null ? void 0 : s()) ? f : Promise.resolve(),
    cancelRetry: m,
    continueRetry: y
  };
}
function Gw() {
  let t = [], n = 0, i = (C) => {
    C();
  }, a = (C) => {
    C();
  }, s = (C) => setTimeout(C, 0);
  const c = (C) => {
    s = C;
  }, l = (C) => {
    let _;
    n++;
    try {
      _ = C();
    } finally {
      n--, n || m();
    }
    return _;
  }, f = (C) => {
    n ? t.push(C) : s(() => {
      i(C);
    });
  }, b = (C) => (..._) => {
    f(() => {
      C(..._);
    });
  }, m = () => {
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
    batch: l,
    batchCalls: b,
    schedule: f,
    setNotifyFunction: (C) => {
      i = C;
    },
    setBatchNotifyFunction: (C) => {
      a = C;
    },
    setScheduler: c
  };
}
var Kt = Gw(), ti, wd, Ud = (wd = class {
  constructor() {
    ze(this, ti, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Bw(this.gcTime) && ye(this, ti, setTimeout(() => {
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
}, ti = new WeakMap(), wd), ki, Fi, Tn, Nr, Sn, Bt, La, ni, Bi, Mo, Wn, fr, _d, Vw = (_d = class extends Ud {
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
    ye(this, ni, !1), ye(this, La, n.defaultOptions), Lt(this, Bi, Mo).call(this, n.options), ye(this, Bt, []), ye(this, Tn, n.cache), this.queryKey = n.queryKey, this.queryHash = n.queryHash, ye(this, ki, n.state || Kw(this.options)), this.state = z(this, ki), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !z(this, Bt).length && this.state.fetchStatus === "idle" && z(this, Tn).remove(this);
  }
  setData(n, i) {
    const a = zw(this.state.data, n, this.options);
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
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Ww(this.state.dataUpdatedAt, n);
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
    var m, y, v, C;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (i != null && i.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (z(this, Nr))
        return (m = z(this, Sn)) == null || m.continueRetry(), z(this, Nr);
    }
    if (n && Lt(this, Bi, Mo).call(this, n), !this.options.queryFn) {
      const _ = z(this, Bt).find((w) => w.options.queryFn);
      _ && Lt(this, Bi, Mo).call(this, _.options);
    }
    const a = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, c = (_) => {
      Object.defineProperty(_, "signal", {
        enumerable: !0,
        get: () => (ye(this, ni, !0), a.signal)
      });
    };
    c(s);
    const l = () => this.options.queryFn ? (ye(this, ni, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      s,
      this
    ) : this.options.queryFn(
      s
    )) : Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ), f = {
      fetchOptions: i,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: l
    };
    c(f), (y = this.options.behavior) == null || y.onFetch(
      f,
      this
    ), ye(this, Fi, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((v = f.fetchOptions) == null ? void 0 : v.meta)) && Lt(this, Wn, fr).call(this, { type: "fetch", meta: (C = f.fetchOptions) == null ? void 0 : C.meta });
    const b = (_) => {
      var w, E, x, D;
      Mu(_) && _.silent || Lt(this, Wn, fr).call(this, {
        type: "error",
        error: _
      }), Mu(_) || ((E = (w = z(this, Tn).config).onError) == null || E.call(
        w,
        _,
        this
      ), (D = (x = z(this, Tn).config).onSettled) == null || D.call(
        x,
        this.state.data,
        _,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return ye(this, Sn, Wd({
      fn: f.fetchFn,
      abort: a.abort.bind(a),
      onSuccess: (_) => {
        var w, E, x, D;
        if (typeof _ > "u") {
          b(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(_), (E = (w = z(this, Tn).config).onSuccess) == null || E.call(w, _, this), (D = (x = z(this, Tn).config).onSettled) == null || D.call(
          x,
          _,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: b,
      onFail: (_, w) => {
        Lt(this, Wn, fr).call(this, { type: "failed", failureCount: _, error: w });
      },
      onPause: () => {
        Lt(this, Wn, fr).call(this, { type: "pause" });
      },
      onContinue: () => {
        Lt(this, Wn, fr).call(this, { type: "continue" });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode
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
          fetchStatus: Sc(this.options.networkMode) ? "fetching" : "paused",
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
}, _d);
function Kw(t) {
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
var Vn, Ad, Qw = (Ad = class extends rs {
  constructor(n = {}) {
    super();
    ze(this, Vn, void 0);
    this.config = n, ye(this, Vn, /* @__PURE__ */ new Map());
  }
  build(n, i, a) {
    const s = i.queryKey, c = i.queryHash ?? Tc(s, i);
    let l = this.get(c);
    return l || (l = new Vw({
      cache: this,
      queryKey: s,
      queryHash: c,
      options: n.defaultQueryOptions(i),
      state: a,
      defaultOptions: n.getQueryDefaults(s)
    }), this.add(l)), l;
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
      (a) => Dh(i, a)
    );
  }
  findAll(n = {}) {
    const i = this.getAll();
    return Object.keys(n).length > 0 ? i.filter((a) => Dh(n, a)) : i;
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
}, Vn = new WeakMap(), Ad), Kn, Pa, pn, Wi, Qn, Sr, Ed, Xw = (Ed = class extends Ud {
  constructor(n) {
    super();
    ze(this, Qn);
    ze(this, Kn, void 0);
    ze(this, Pa, void 0);
    ze(this, pn, void 0);
    ze(this, Wi, void 0);
    this.mutationId = n.mutationId, ye(this, Pa, n.defaultOptions), ye(this, pn, n.mutationCache), ye(this, Kn, []), this.state = n.state || Jw(), this.setOptions(n.options), this.scheduleGc();
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
    var s, c, l, f, b, m, y, v, C, _, w, E, x, D, B, M, U, ee, oe, de;
    const i = () => (ye(this, Wi, Wd({
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
        Lt(this, Qn, Sr).call(this, { type: "pending", variables: n }), await ((c = (s = z(this, pn).config).onMutate) == null ? void 0 : c.call(
          s,
          n,
          this
        ));
        const fe = await ((f = (l = this.options).onMutate) == null ? void 0 : f.call(l, n));
        fe !== this.state.context && Lt(this, Qn, Sr).call(this, {
          type: "pending",
          context: fe,
          variables: n
        });
      }
      const ie = await i();
      return await ((m = (b = z(this, pn).config).onSuccess) == null ? void 0 : m.call(
        b,
        ie,
        n,
        this.state.context,
        this
      )), await ((v = (y = this.options).onSuccess) == null ? void 0 : v.call(y, ie, n, this.state.context)), await ((_ = (C = z(this, pn).config).onSettled) == null ? void 0 : _.call(
        C,
        ie,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((E = (w = this.options).onSettled) == null ? void 0 : E.call(w, ie, null, n, this.state.context)), Lt(this, Qn, Sr).call(this, { type: "success", data: ie }), ie;
    } catch (ie) {
      try {
        throw await ((D = (x = z(this, pn).config).onError) == null ? void 0 : D.call(
          x,
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
          isPaused: !Sc(this.options.networkMode),
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
}, Ed);
function Jw() {
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
var Dn, Na, ri, Od, Zw = (Od = class extends rs {
  constructor(n = {}) {
    super();
    ze(this, Dn, void 0);
    ze(this, Na, void 0);
    ze(this, ri, void 0);
    this.config = n, ye(this, Dn, []), ye(this, Na, 0);
  }
  build(n, i, a) {
    const s = new Xw({
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
      (a) => Rh(i, a)
    );
  }
  findAll(n = {}) {
    return z(this, Dn).filter(
      (i) => Rh(n, i)
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
}, Dn = new WeakMap(), Na = new WeakMap(), ri = new WeakMap(), Od);
function e_(t) {
  return {
    onFetch: (n, i) => {
      const a = async () => {
        var w, E, x, D, B;
        const s = n.options, c = (x = (E = (w = n.fetchOptions) == null ? void 0 : w.meta) == null ? void 0 : E.fetchMore) == null ? void 0 : x.direction, l = ((D = n.state.data) == null ? void 0 : D.pages) || [], f = ((B = n.state.data) == null ? void 0 : B.pageParams) || [], b = { pages: [], pageParams: [] };
        let m = !1;
        const y = (M) => {
          Object.defineProperty(M, "signal", {
            enumerable: !0,
            get: () => (n.signal.aborted ? m = !0 : n.signal.addEventListener("abort", () => {
              m = !0;
            }), n.signal)
          });
        }, v = n.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${n.options.queryHash}'`)
        )), C = async (M, U, ee) => {
          if (m)
            return Promise.reject();
          if (U == null && M.pages.length)
            return Promise.resolve(M);
          const oe = {
            queryKey: n.queryKey,
            pageParam: U,
            direction: ee ? "backward" : "forward",
            meta: n.options.meta
          };
          y(oe);
          const de = await v(
            oe
          ), { maxPages: ie } = n.options, fe = ee ? jw : Hw;
          return {
            pages: fe(M.pages, de, ie),
            pageParams: fe(M.pageParams, U, ie)
          };
        };
        let _;
        if (c && l.length) {
          const M = c === "backward", U = M ? t_ : Nh, ee = {
            pages: l,
            pageParams: f
          }, oe = U(s, ee);
          _ = await C(ee, oe, M);
        } else {
          _ = await C(
            b,
            f[0] ?? s.initialPageParam
          );
          const M = t ?? l.length;
          for (let U = 1; U < M; U++) {
            const ee = Nh(s, _);
            _ = await C(_, ee);
          }
        }
        return _;
      };
      n.options.persister ? n.fetchFn = () => {
        var s, c;
        return (c = (s = n.options).persister) == null ? void 0 : c.call(
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
function Nh(t, { pages: n, pageParams: i }) {
  const a = n.length - 1;
  return t.getNextPageParam(
    n[a],
    n,
    i[a],
    i
  );
}
function t_(t, { pages: n, pageParams: i }) {
  var a;
  return (a = t.getPreviousPageParam) == null ? void 0 : a.call(
    t,
    n[0],
    n,
    i[0],
    i
  );
}
var Pt, Ir, Mr, Ui, zi, kr, Hi, ji, xd, n_ = (xd = class {
  constructor(t = {}) {
    ze(this, Pt, void 0);
    ze(this, Ir, void 0);
    ze(this, Mr, void 0);
    ze(this, Ui, void 0);
    ze(this, zi, void 0);
    ze(this, kr, void 0);
    ze(this, Hi, void 0);
    ze(this, ji, void 0);
    ye(this, Pt, t.queryCache || new Qw()), ye(this, Ir, t.mutationCache || new Zw()), ye(this, Mr, t.defaultOptions || {}), ye(this, Ui, /* @__PURE__ */ new Map()), ye(this, zi, /* @__PURE__ */ new Map()), ye(this, kr, 0);
  }
  mount() {
    So(this, kr)._++, z(this, kr) === 1 && (ye(this, Hi, tc.subscribe(() => {
      tc.isFocused() && (this.resumePausedMutations(), z(this, Pt).onFocus());
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
    ), c = s == null ? void 0 : s.state.data, l = Fw(n, c);
    if (!(typeof l > "u"))
      return z(this, Pt).build(this, a).setData(l, { ...i, manual: !0 });
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
        let c = s.fetch(void 0, i);
        return i.throwOnError || (c = c.catch(Bn)), s.state.fetchStatus === "paused" ? Promise.resolve() : c;
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
    return t.behavior = e_(t.pages), this.fetchQuery(t);
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
    return n.queryHash || (n.queryHash = Tc(
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
}, Pt = new WeakMap(), Ir = new WeakMap(), Mr = new WeakMap(), Ui = new WeakMap(), zi = new WeakMap(), kr = new WeakMap(), Hi = new WeakMap(), ji = new WeakMap(), xd), zd = G.createContext(
  void 0
), nC = (t) => {
  const n = G.useContext(zd);
  if (t)
    return t;
  if (!n)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return n;
}, r_ = ({
  client: t,
  children: n
}) => (G.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ Nt.jsx(zd.Provider, { value: t, children: n }));
const Hd = te.createContext(null), i_ = ({
  children: t,
  session: n,
  setSession: i
}) => /* @__PURE__ */ at(Hd.Provider, { value: {
  session: n,
  setSession: i
}, children: t }), a_ = () => {
  const t = G.useContext(Hd);
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
    var i, a = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", f = "Invalid `variable` option passed into `_.template`", b = "__lodash_hash_undefined__", m = 500, y = "__lodash_placeholder__", v = 1, C = 2, _ = 4, w = 1, E = 2, x = 1, D = 2, B = 4, M = 8, U = 16, ee = 32, oe = 64, de = 128, ie = 256, fe = 512, Fe = 30, Re = "...", Be = 800, Qe = 16, je = 1, he = 2, Ce = 3, qe = 1 / 0, g = 9007199254740991, O = 17976931348623157e292, S = 0 / 0, P = 4294967295, N = P - 1, k = P >>> 1, K = [
      ["ary", de],
      ["bind", x],
      ["bindKey", D],
      ["curry", M],
      ["curryRight", U],
      ["flip", fe],
      ["partial", ee],
      ["partialRight", oe],
      ["rearg", ie]
    ], J = "[object Arguments]", V = "[object Array]", X = "[object AsyncFunction]", se = "[object Boolean]", Pe = "[object Date]", xe = "[object DOMException]", Ee = "[object Error]", Ne = "[object Function]", ot = "[object GeneratorFunction]", be = "[object Map]", yt = "[object Number]", ct = "[object Null]", lt = "[object Object]", pt = "[object Promise]", tt = "[object Proxy]", It = "[object RegExp]", et = "[object Set]", H = "[object String]", F = "[object Symbol]", Z = "[object Undefined]", ne = "[object WeakMap]", ae = "[object WeakSet]", Ie = "[object ArrayBuffer]", Ye = "[object DataView]", nt = "[object Float32Array]", ce = "[object Float64Array]", $e = "[object Int8Array]", Et = "[object Int16Array]", vt = "[object Int32Array]", rt = "[object Uint8Array]", Ve = "[object Uint8ClampedArray]", Wt = "[object Uint16Array]", Mt = "[object Uint32Array]", sn = /\b__p \+= '';/g, vn = /\b(__p \+=) '' \+/g, Pn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, mn = /&(?:amp|lt|gt|quot|#39);/g, we = /[&<>"']/g, We = RegExp(mn.source), Xe = RegExp(we.source), Ot = /<%-([\s\S]+?)%>/g, _e = /<%([\s\S]+?)%>/g, _t = /<%=([\s\S]+?)%>/g, Qt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kt = /^\w*$/, zn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nn = /[\\^$.*+?()[\]{}|]/g, Xt = RegExp(Nn.source), gn = /^\s+/, tr = /\s/, Jt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Zt = /\{\n\/\* \[wrapped with (.+)\] \*/, gr = /,? & /, yn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, en = /[()=,{}\[\]\/\s]/, li = /\\(\\)?/g, Qi = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Te = /\w*$/, st = /^[-+]0x[0-9a-f]+$/i, ge = /^0b[01]+$/i, St = /^\[object .+?Constructor\]$/, qt = /^0o[0-7]+$/i, zr = /^(?:0|[1-9]\d*)$/, ws = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fi = /($^)/, uv = /['\n\r\u2028\u2029\\]/g, Ua = "\\ud800-\\udfff", cv = "\\u0300-\\u036f", lv = "\\ufe20-\\ufe2f", fv = "\\u20d0-\\u20ff", Jc = cv + lv + fv, Zc = "\\u2700-\\u27bf", el = "a-z\\xdf-\\xf6\\xf8-\\xff", hv = "\\xac\\xb1\\xd7\\xf7", dv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", pv = "\\u2000-\\u206f", vv = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", tl = "A-Z\\xc0-\\xd6\\xd8-\\xde", nl = "\\ufe0e\\ufe0f", rl = hv + dv + pv + vv, _s = "['’]", mv = "[" + Ua + "]", il = "[" + rl + "]", za = "[" + Jc + "]", al = "\\d+", gv = "[" + Zc + "]", ol = "[" + el + "]", sl = "[^" + Ua + rl + al + Zc + el + tl + "]", As = "\\ud83c[\\udffb-\\udfff]", yv = "(?:" + za + "|" + As + ")", ul = "[^" + Ua + "]", Es = "(?:\\ud83c[\\udde6-\\uddff]){2}", Os = "[\\ud800-\\udbff][\\udc00-\\udfff]", hi = "[" + tl + "]", cl = "\\u200d", ll = "(?:" + ol + "|" + sl + ")", bv = "(?:" + hi + "|" + sl + ")", fl = "(?:" + _s + "(?:d|ll|m|re|s|t|ve))?", hl = "(?:" + _s + "(?:D|LL|M|RE|S|T|VE))?", dl = yv + "?", pl = "[" + nl + "]?", wv = "(?:" + cl + "(?:" + [ul, Es, Os].join("|") + ")" + pl + dl + ")*", _v = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Av = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", vl = pl + dl + wv, Ev = "(?:" + [gv, Es, Os].join("|") + ")" + vl, Ov = "(?:" + [ul + za + "?", za, Es, Os, mv].join("|") + ")", xv = RegExp(_s, "g"), Cv = RegExp(za, "g"), xs = RegExp(As + "(?=" + As + ")|" + Ov + vl, "g"), Tv = RegExp([
      hi + "?" + ol + "+" + fl + "(?=" + [il, hi, "$"].join("|") + ")",
      bv + "+" + hl + "(?=" + [il, hi + ll, "$"].join("|") + ")",
      hi + "?" + ll + "+" + fl,
      hi + "+" + hl,
      Av,
      _v,
      al,
      Ev
    ].join("|"), "g"), Sv = RegExp("[" + cl + Ua + Jc + nl + "]"), Dv = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Rv = [
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
    ft[nt] = ft[ce] = ft[$e] = ft[Et] = ft[vt] = ft[rt] = ft[Ve] = ft[Wt] = ft[Mt] = !0, ft[J] = ft[V] = ft[Ie] = ft[se] = ft[Ye] = ft[Pe] = ft[Ee] = ft[Ne] = ft[be] = ft[yt] = ft[lt] = ft[It] = ft[et] = ft[H] = ft[ne] = !1;
    var ut = {};
    ut[J] = ut[V] = ut[Ie] = ut[Ye] = ut[se] = ut[Pe] = ut[nt] = ut[ce] = ut[$e] = ut[Et] = ut[vt] = ut[be] = ut[yt] = ut[lt] = ut[It] = ut[et] = ut[H] = ut[F] = ut[rt] = ut[Ve] = ut[Wt] = ut[Mt] = !0, ut[Ee] = ut[Ne] = ut[ne] = !1;
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
    }, kv = parseFloat, Fv = parseInt, ml = typeof hr == "object" && hr && hr.Object === Object && hr, Bv = typeof self == "object" && self && self.Object === Object && self, Ut = ml || Bv || Function("return this")(), Cs = n && !n.nodeType && n, Hr = Cs && !0 && t && !t.nodeType && t, gl = Hr && Hr.exports === Cs, Ts = gl && ml.process, bn = function() {
      try {
        var R = Hr && Hr.require && Hr.require("util").types;
        return R || Ts && Ts.binding && Ts.binding("util");
      } catch {
      }
    }(), yl = bn && bn.isArrayBuffer, bl = bn && bn.isDate, wl = bn && bn.isMap, _l = bn && bn.isRegExp, Al = bn && bn.isSet, El = bn && bn.isTypedArray;
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
    function Ol(R, W) {
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
    function xl(R, W, I) {
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
      return W === W ? nm(R, W, I) : ja(R, Cl, I);
    }
    function qv(R, W, I, ue) {
      for (var Ae = I - 1, Ge = R.length; ++Ae < Ge; )
        if (ue(R[Ae], W))
          return Ae;
      return -1;
    }
    function Cl(R) {
      return R !== R;
    }
    function Tl(R, W) {
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
    function Sl(R, W, I, ue, Ae) {
      return Ae(R, function(Ge, Dt, it) {
        I = ue ? (ue = !1, Ge) : W(I, Ge, Dt, it);
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
    function Dl(R) {
      return R && R.slice(0, Nl(R) + 1).replace(gn, "");
    }
    function cn(R) {
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
    function Rl(R, W) {
      for (var I = -1, ue = R.length; ++I < ue && di(W, R[I], 0) > -1; )
        ;
      return I;
    }
    function Ll(R, W) {
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
    function Pl(R, W) {
      return function(I) {
        return R(W(I));
      };
    }
    function wr(R, W) {
      for (var I = -1, ue = R.length, Ae = 0, Ge = []; ++I < ue; ) {
        var Dt = R[I];
        (Dt === W || Dt === y) && (R[I] = y, Ge[Ae++] = I);
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
    function Nl(R) {
      for (var W = R.length; W-- && tr.test(R.charAt(W)); )
        ;
      return W;
    }
    var im = Ps(Iv);
    function am(R) {
      for (var W = xs.lastIndex = 0; xs.test(R); )
        ++W;
      return W;
    }
    function om(R) {
      return R.match(xs) || [];
    }
    function sm(R) {
      return R.match(Tv) || [];
    }
    var um = function R(W) {
      W = W == null ? Ut : mi.defaults(Ut.Object(), W, mi.pick(Ut, Rv));
      var I = W.Array, ue = W.Date, Ae = W.Error, Ge = W.Function, Dt = W.Math, it = W.Object, Fs = W.RegExp, cm = W.String, _n = W.TypeError, qa = I.prototype, lm = Ge.prototype, gi = it.prototype, Ya = W["__core-js_shared__"], Ga = lm.toString, Je = gi.hasOwnProperty, fm = 0, Il = function() {
        var e = /[^.]+$/.exec(Ya && Ya.keys && Ya.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Va = gi.toString, hm = Ga.call(it), dm = Ut._, pm = Fs(
        "^" + Ga.call(Je).replace(Nn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ka = gl ? W.Buffer : i, _r = W.Symbol, Qa = W.Uint8Array, Ml = Ka ? Ka.allocUnsafe : i, Xa = Pl(it.getPrototypeOf, it), kl = it.create, Fl = gi.propertyIsEnumerable, Ja = qa.splice, Bl = _r ? _r.isConcatSpreadable : i, Ji = _r ? _r.iterator : i, jr = _r ? _r.toStringTag : i, Za = function() {
        try {
          var e = Vr(it, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), vm = W.clearTimeout !== Ut.clearTimeout && W.clearTimeout, mm = ue && ue.now !== Ut.Date.now && ue.now, gm = W.setTimeout !== Ut.setTimeout && W.setTimeout, eo = Dt.ceil, to = Dt.floor, Bs = it.getOwnPropertySymbols, ym = Ka ? Ka.isBuffer : i, Wl = W.isFinite, bm = qa.join, wm = Pl(it.keys, it), Rt = Dt.max, jt = Dt.min, _m = ue.now, Am = W.parseInt, Ul = Dt.random, Em = qa.reverse, Ws = Vr(W, "DataView"), Zi = Vr(W, "Map"), Us = Vr(W, "Promise"), yi = Vr(W, "Set"), ea = Vr(W, "WeakMap"), ta = Vr(it, "create"), no = ea && new ea(), bi = {}, Om = Kr(Ws), xm = Kr(Zi), Cm = Kr(Us), Tm = Kr(yi), Sm = Kr(ea), ro = _r ? _r.prototype : i, na = ro ? ro.valueOf : i, zl = ro ? ro.toString : i;
      function d(e) {
        if (At(e) && !Oe(e) && !(e instanceof ke)) {
          if (e instanceof An)
            return e;
          if (Je.call(e, "__wrapped__"))
            return jf(e);
        }
        return new An(e);
      }
      var wi = function() {
        function e() {
        }
        return function(r) {
          if (!bt(r))
            return {};
          if (kl)
            return kl(r);
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
        escape: Ot,
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
        var e = this.__wrapped__.value(), r = this.__dir__, o = Oe(e), u = r < 0, h = o ? e.length : 0, p = jg(0, h, this.__views__), A = p.start, T = p.end, L = T - A, j = u ? T : A - 1, $ = this.__iteratees__, Q = $.length, re = 0, le = jt(L, this.__takeCount__);
        if (!o || !u && h == L && le == L)
          return hf(e, this.__actions__);
        var ve = [];
        e:
          for (; L-- && re < le; ) {
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
          return o === b ? i : o;
        }
        return Je.call(r, e) ? r[e] : i;
      }
      function Mm(e) {
        var r = this.__data__;
        return ta ? r[e] !== i : Je.call(r, e);
      }
      function km(e, r) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = ta && r === i ? b : r, this;
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
        return this.__data__.set(e, b), this;
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
      function Hl(e, r) {
        var o = Oe(e), u = !o && Qr(e), h = !o && !u && Cr(e), p = !o && !u && !h && Oi(e), A = o || u || h || p, T = A ? Is(e.length, cm) : [], L = T.length;
        for (var j in e)
          (r || Je.call(e, j)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (j == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (j == "offset" || j == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          p && (j == "buffer" || j == "byteLength" || j == "byteOffset") || // Skip index properties.
          sr(j, L))) && T.push(j);
        return T;
      }
      function jl(e) {
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
        return Ar(e, function(h, p, A) {
          r(u, h, o(h), A);
        }), u;
      }
      function $l(e, r) {
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
        for (var o = -1, u = r.length, h = I(u), p = e == null; ++o < u; )
          h[o] = p ? i : Au(e, r[o]);
        return h;
      }
      function Yr(e, r, o) {
        return e === e && (o !== i && (e = e <= o ? e : o), r !== i && (e = e >= r ? e : r)), e;
      }
      function En(e, r, o, u, h, p) {
        var A, T = r & v, L = r & C, j = r & _;
        if (o && (A = h ? o(e, u, h, p) : o(e)), A !== i)
          return A;
        if (!bt(e))
          return e;
        var $ = Oe(e);
        if ($) {
          if (A = qg(e), !T)
            return tn(e, A);
        } else {
          var Q = $t(e), re = Q == Ne || Q == ot;
          if (Cr(e))
            return vf(e, T);
          if (Q == lt || Q == J || re && !h) {
            if (A = L || re ? {} : If(e), !T)
              return L ? Ig(e, rg(A, e)) : Ng(e, $l(A, e));
          } else {
            if (!ut[Q])
              return h ? e : {};
            A = Yg(e, Q, T);
          }
        }
        p || (p = new Mn());
        var le = p.get(e);
        if (le)
          return le;
        p.set(e, A), ch(e) ? e.forEach(function(me) {
          A.add(En(me, r, o, me, e, p));
        }) : sh(e) && e.forEach(function(me, Me) {
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
          return ql(o, e, r);
        };
      }
      function ql(e, r, o) {
        var u = o.length;
        if (e == null)
          return !u;
        for (e = it(e); u--; ) {
          var h = o[u], p = r[h], A = e[h];
          if (A === i && !(h in e) || !p(A))
            return !1;
        }
        return !0;
      }
      function Yl(e, r, o) {
        if (typeof e != "function")
          throw new _n(l);
        return la(function() {
          e.apply(i, o);
        }, r);
      }
      function ia(e, r, o, u) {
        var h = -1, p = Ha, A = !0, T = e.length, L = [], j = r.length;
        if (!T)
          return L;
        o && (r = mt(r, cn(o))), u ? (p = Ss, A = !1) : r.length >= s && (p = Xi, A = !1, r = new qr(r));
        e:
          for (; ++h < T; ) {
            var $ = e[h], Q = o == null ? $ : o($);
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
      var Ar = wf(Hn), Gl = wf($s, !0);
      function ag(e, r) {
        var o = !0;
        return Ar(e, function(u, h, p) {
          return o = !!r(u, h, p), o;
        }), o;
      }
      function oo(e, r, o) {
        for (var u = -1, h = e.length; ++u < h; ) {
          var p = e[u], A = r(p);
          if (A != null && (T === i ? A === A && !fn(A) : o(A, T)))
            var T = A, L = p;
        }
        return L;
      }
      function og(e, r, o, u) {
        var h = e.length;
        for (o = Se(o), o < 0 && (o = -o > h ? 0 : h + o), u = u === i || u > h ? h : Se(u), u < 0 && (u += h), u = o > u ? 0 : fh(u); o < u; )
          e[o++] = r;
        return e;
      }
      function Vl(e, r) {
        var o = [];
        return Ar(e, function(u, h, p) {
          r(u, h, p) && o.push(u);
        }), o;
      }
      function zt(e, r, o, u, h) {
        var p = -1, A = e.length;
        for (o || (o = Vg), h || (h = []); ++p < A; ) {
          var T = e[p];
          r > 0 && o(T) ? r > 1 ? zt(T, r - 1, o, u, h) : br(h, T) : u || (h[h.length] = T);
        }
        return h;
      }
      var js = _f(), Kl = _f(!0);
      function Hn(e, r) {
        return e && js(e, r, Ft);
      }
      function $s(e, r) {
        return e && Kl(e, r, Ft);
      }
      function so(e, r) {
        return yr(r, function(o) {
          return ur(e[o]);
        });
      }
      function Gr(e, r) {
        r = Or(r, e);
        for (var o = 0, u = r.length; e != null && o < u; )
          e = e[$n(r[o++])];
        return o && o == u ? e : i;
      }
      function Ql(e, r, o) {
        var u = r(e);
        return Oe(e) ? u : br(u, o(e));
      }
      function Yt(e) {
        return e == null ? e === i ? Z : ct : jr && jr in it(e) ? Hg(e) : t0(e);
      }
      function qs(e, r) {
        return e > r;
      }
      function sg(e, r) {
        return e != null && Je.call(e, r);
      }
      function ug(e, r) {
        return e != null && r in it(e);
      }
      function cg(e, r, o) {
        return e >= jt(r, o) && e < Rt(r, o);
      }
      function Ys(e, r, o) {
        for (var u = o ? Ss : Ha, h = e[0].length, p = e.length, A = p, T = I(p), L = 1 / 0, j = []; A--; ) {
          var $ = e[A];
          A && r && ($ = mt($, cn(r))), L = jt($.length, L), T[A] = !o && (r || h >= 120 && $.length >= 120) ? new qr(A && $) : i;
        }
        $ = e[0];
        var Q = -1, re = T[0];
        e:
          for (; ++Q < h && j.length < L; ) {
            var le = $[Q], ve = r ? r(le) : le;
            if (le = o || le !== 0 ? le : 0, !(re ? Xi(re, ve) : u(j, ve, o))) {
              for (A = p; --A; ) {
                var De = T[A];
                if (!(De ? Xi(De, ve) : u(e[A], ve, o)))
                  continue e;
              }
              re && re.push(ve), j.push(le);
            }
          }
        return j;
      }
      function lg(e, r, o, u) {
        return Hn(e, function(h, p, A) {
          r(u, o(h), p, A);
        }), u;
      }
      function aa(e, r, o) {
        r = Or(r, e), e = Bf(e, r);
        var u = e == null ? e : e[$n(xn(r))];
        return u == null ? i : un(u, e, o);
      }
      function Xl(e) {
        return At(e) && Yt(e) == J;
      }
      function fg(e) {
        return At(e) && Yt(e) == Ie;
      }
      function hg(e) {
        return At(e) && Yt(e) == Pe;
      }
      function oa(e, r, o, u, h) {
        return e === r ? !0 : e == null || r == null || !At(e) && !At(r) ? e !== e && r !== r : dg(e, r, o, u, oa, h);
      }
      function dg(e, r, o, u, h, p) {
        var A = Oe(e), T = Oe(r), L = A ? V : $t(e), j = T ? V : $t(r);
        L = L == J ? lt : L, j = j == J ? lt : j;
        var $ = L == lt, Q = j == lt, re = L == j;
        if (re && Cr(e)) {
          if (!Cr(r))
            return !1;
          A = !0, $ = !1;
        }
        if (re && !$)
          return p || (p = new Mn()), A || Oi(e) ? Lf(e, r, o, u, h, p) : Ug(e, r, L, o, u, h, p);
        if (!(o & w)) {
          var le = $ && Je.call(e, "__wrapped__"), ve = Q && Je.call(r, "__wrapped__");
          if (le || ve) {
            var De = le ? e.value() : e, me = ve ? r.value() : r;
            return p || (p = new Mn()), h(De, me, o, u, p);
          }
        }
        return re ? (p || (p = new Mn()), zg(e, r, o, u, h, p)) : !1;
      }
      function pg(e) {
        return At(e) && $t(e) == be;
      }
      function Gs(e, r, o, u) {
        var h = o.length, p = h, A = !u;
        if (e == null)
          return !p;
        for (e = it(e); h--; ) {
          var T = o[h];
          if (A && T[2] ? T[1] !== e[T[0]] : !(T[0] in e))
            return !1;
        }
        for (; ++h < p; ) {
          T = o[h];
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
      function Jl(e) {
        if (!bt(e) || Qg(e))
          return !1;
        var r = ur(e) ? pm : St;
        return r.test(Kr(e));
      }
      function vg(e) {
        return At(e) && Yt(e) == It;
      }
      function mg(e) {
        return At(e) && $t(e) == et;
      }
      function gg(e) {
        return At(e) && xo(e.length) && !!ft[Yt(e)];
      }
      function Zl(e) {
        return typeof e == "function" ? e : e == null ? an : typeof e == "object" ? Oe(e) ? nf(e[0], e[1]) : tf(e) : Ah(e);
      }
      function Vs(e) {
        if (!ca(e))
          return wm(e);
        var r = [];
        for (var o in it(e))
          Je.call(e, o) && o != "constructor" && r.push(o);
        return r;
      }
      function yg(e) {
        if (!bt(e))
          return e0(e);
        var r = ca(e), o = [];
        for (var u in e)
          u == "constructor" && (r || !Je.call(e, u)) || o.push(u);
        return o;
      }
      function Ks(e, r) {
        return e < r;
      }
      function ef(e, r) {
        var o = -1, u = nn(e) ? I(e.length) : [];
        return Ar(e, function(h, p, A) {
          u[++o] = r(h, p, A);
        }), u;
      }
      function tf(e) {
        var r = lu(e);
        return r.length == 1 && r[0][2] ? kf(r[0][0], r[0][1]) : function(o) {
          return o === e || Gs(o, e, r);
        };
      }
      function nf(e, r) {
        return hu(e) && Mf(r) ? kf($n(e), r) : function(o) {
          var u = Au(o, e);
          return u === i && u === r ? Eu(o, e) : oa(r, u, w | E);
        };
      }
      function uo(e, r, o, u, h) {
        e !== r && js(r, function(p, A) {
          if (h || (h = new Mn()), bt(p))
            bg(e, r, A, o, uo, u, h);
          else {
            var T = u ? u(pu(e, A), p, A + "", e, r, h) : i;
            T === i && (T = p), zs(e, A, T);
          }
        }, rn);
      }
      function bg(e, r, o, u, h, p, A) {
        var T = pu(e, o), L = pu(r, o), j = A.get(L);
        if (j) {
          zs(e, o, j);
          return;
        }
        var $ = p ? p(T, L, o + "", e, r, A) : i, Q = $ === i;
        if (Q) {
          var re = Oe(L), le = !re && Cr(L), ve = !re && !le && Oi(L);
          $ = L, re || le || ve ? Oe(T) ? $ = T : xt(T) ? $ = tn(T) : le ? (Q = !1, $ = vf(L, !0)) : ve ? (Q = !1, $ = mf(L, !0)) : $ = [] : fa(L) || Qr(L) ? ($ = T, Qr(T) ? $ = hh(T) : (!bt(T) || ur(T)) && ($ = If(L))) : Q = !1;
        }
        Q && (A.set(L, $), h($, L, u, p, A), A.delete(L)), zs(e, o, $);
      }
      function rf(e, r) {
        var o = e.length;
        if (o)
          return r += r < 0 ? o : 0, sr(r, o) ? e[r] : i;
      }
      function af(e, r, o) {
        r.length ? r = mt(r, function(p) {
          return Oe(p) ? function(A) {
            return Gr(A, p.length === 1 ? p[0] : p);
          } : p;
        }) : r = [an];
        var u = -1;
        r = mt(r, cn(pe()));
        var h = ef(e, function(p, A, T) {
          var L = mt(r, function(j) {
            return j(p);
          });
          return { criteria: L, index: ++u, value: p };
        });
        return Yv(h, function(p, A) {
          return Pg(p, A, o);
        });
      }
      function wg(e, r) {
        return of(e, r, function(o, u) {
          return Eu(e, u);
        });
      }
      function of(e, r, o) {
        for (var u = -1, h = r.length, p = {}; ++u < h; ) {
          var A = r[u], T = Gr(e, A);
          o(T, A) && sa(p, Or(A, e), T);
        }
        return p;
      }
      function _g(e) {
        return function(r) {
          return Gr(r, e);
        };
      }
      function Qs(e, r, o, u) {
        var h = u ? qv : di, p = -1, A = r.length, T = e;
        for (e === r && (r = tn(r)), o && (T = mt(e, cn(o))); ++p < A; )
          for (var L = 0, j = r[p], $ = o ? o(j) : j; (L = h(T, $, L, u)) > -1; )
            T !== e && Ja.call(T, L, 1), Ja.call(e, L, 1);
        return e;
      }
      function sf(e, r) {
        for (var o = e ? r.length : 0, u = o - 1; o--; ) {
          var h = r[o];
          if (o == u || h !== p) {
            var p = h;
            sr(h) ? Ja.call(e, h, 1) : eu(e, h);
          }
        }
        return e;
      }
      function Xs(e, r) {
        return e + to(Ul() * (r - e + 1));
      }
      function Ag(e, r, o, u) {
        for (var h = -1, p = Rt(eo((r - e) / (o || 1)), 0), A = I(p); p--; )
          A[u ? p : ++h] = e, e += o;
        return A;
      }
      function Js(e, r) {
        var o = "";
        if (!e || r < 1 || r > g)
          return o;
        do
          r % 2 && (o += e), r = to(r / 2), r && (e += e);
        while (r);
        return o;
      }
      function Le(e, r) {
        return vu(Ff(e, r, an), e + "");
      }
      function Eg(e) {
        return jl(xi(e));
      }
      function Og(e, r) {
        var o = xi(e);
        return bo(o, Yr(r, 0, o.length));
      }
      function sa(e, r, o, u) {
        if (!bt(e))
          return e;
        r = Or(r, e);
        for (var h = -1, p = r.length, A = p - 1, T = e; T != null && ++h < p; ) {
          var L = $n(r[h]), j = o;
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return e;
          if (h != A) {
            var $ = T[L];
            j = u ? u($, L, T) : i, j === i && (j = bt($) ? $ : sr(r[h + 1]) ? [] : {});
          }
          ra(T, L, j), T = T[L];
        }
        return e;
      }
      var uf = no ? function(e, r) {
        return no.set(e, r), e;
      } : an, xg = Za ? function(e, r) {
        return Za(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: xu(r),
          writable: !0
        });
      } : an;
      function Cg(e) {
        return bo(xi(e));
      }
      function On(e, r, o) {
        var u = -1, h = e.length;
        r < 0 && (r = -r > h ? 0 : h + r), o = o > h ? h : o, o < 0 && (o += h), h = r > o ? 0 : o - r >>> 0, r >>>= 0;
        for (var p = I(h); ++u < h; )
          p[u] = e[u + r];
        return p;
      }
      function Tg(e, r) {
        var o;
        return Ar(e, function(u, h, p) {
          return o = r(u, h, p), !o;
        }), !!o;
      }
      function co(e, r, o) {
        var u = 0, h = e == null ? u : e.length;
        if (typeof r == "number" && r === r && h <= k) {
          for (; u < h; ) {
            var p = u + h >>> 1, A = e[p];
            A !== null && !fn(A) && (o ? A <= r : A < r) ? u = p + 1 : h = p;
          }
          return h;
        }
        return Zs(e, r, an, o);
      }
      function Zs(e, r, o, u) {
        var h = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        r = o(r);
        for (var A = r !== r, T = r === null, L = fn(r), j = r === i; h < p; ) {
          var $ = to((h + p) / 2), Q = o(e[$]), re = Q !== i, le = Q === null, ve = Q === Q, De = fn(Q);
          if (A)
            var me = u || ve;
          else
            j ? me = ve && (u || re) : T ? me = ve && re && (u || !le) : L ? me = ve && re && !le && (u || !De) : le || De ? me = !1 : me = u ? Q <= r : Q < r;
          me ? h = $ + 1 : p = $;
        }
        return jt(p, N);
      }
      function cf(e, r) {
        for (var o = -1, u = e.length, h = 0, p = []; ++o < u; ) {
          var A = e[o], T = r ? r(A) : A;
          if (!o || !kn(T, L)) {
            var L = T;
            p[h++] = A === 0 ? 0 : A;
          }
        }
        return p;
      }
      function lf(e) {
        return typeof e == "number" ? e : fn(e) ? S : +e;
      }
      function ln(e) {
        if (typeof e == "string")
          return e;
        if (Oe(e))
          return mt(e, ln) + "";
        if (fn(e))
          return zl ? zl.call(e) : "";
        var r = e + "";
        return r == "0" && 1 / e == -qe ? "-0" : r;
      }
      function Er(e, r, o) {
        var u = -1, h = Ha, p = e.length, A = !0, T = [], L = T;
        if (o)
          A = !1, h = Ss;
        else if (p >= s) {
          var j = r ? null : Bg(e);
          if (j)
            return $a(j);
          A = !1, h = Xi, L = new qr();
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
              h(L, Q, o) || (L !== T && L.push(Q), T.push($));
          }
        return T;
      }
      function eu(e, r) {
        return r = Or(r, e), e = Bf(e, r), e == null || delete e[$n(xn(r))];
      }
      function ff(e, r, o, u) {
        return sa(e, r, o(Gr(e, r)), u);
      }
      function lo(e, r, o, u) {
        for (var h = e.length, p = u ? h : -1; (u ? p-- : ++p < h) && r(e[p], p, e); )
          ;
        return o ? On(e, u ? 0 : p, u ? p + 1 : h) : On(e, u ? p + 1 : 0, u ? h : p);
      }
      function hf(e, r) {
        var o = e;
        return o instanceof ke && (o = o.value()), Ds(r, function(u, h) {
          return h.func.apply(h.thisArg, br([u], h.args));
        }, o);
      }
      function tu(e, r, o) {
        var u = e.length;
        if (u < 2)
          return u ? Er(e[0]) : [];
        for (var h = -1, p = I(u); ++h < u; )
          for (var A = e[h], T = -1; ++T < u; )
            T != h && (p[h] = ia(p[h] || A, e[T], r, o));
        return Er(zt(p, 1), r, o);
      }
      function df(e, r, o) {
        for (var u = -1, h = e.length, p = r.length, A = {}; ++u < h; ) {
          var T = u < p ? r[u] : i;
          o(A, e[u], T);
        }
        return A;
      }
      function nu(e) {
        return xt(e) ? e : [];
      }
      function ru(e) {
        return typeof e == "function" ? e : an;
      }
      function Or(e, r) {
        return Oe(e) ? e : hu(e, r) ? [e] : Hf(Ke(e));
      }
      var Sg = Le;
      function xr(e, r, o) {
        var u = e.length;
        return o = o === i ? u : o, !r && o >= u ? e : On(e, r, o);
      }
      var pf = vm || function(e) {
        return Ut.clearTimeout(e);
      };
      function vf(e, r) {
        if (r)
          return e.slice();
        var o = e.length, u = Ml ? Ml(o) : new e.constructor(o);
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
        return na ? it(na.call(e)) : {};
      }
      function mf(e, r) {
        var o = r ? iu(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function gf(e, r) {
        if (e !== r) {
          var o = e !== i, u = e === null, h = e === e, p = fn(e), A = r !== i, T = r === null, L = r === r, j = fn(r);
          if (!T && !j && !p && e > r || p && A && L && !T && !j || u && A && L || !o && L || !h)
            return 1;
          if (!u && !p && !j && e < r || j && o && h && !u && !p || T && o && h || !A && h || !L)
            return -1;
        }
        return 0;
      }
      function Pg(e, r, o) {
        for (var u = -1, h = e.criteria, p = r.criteria, A = h.length, T = o.length; ++u < A; ) {
          var L = gf(h[u], p[u]);
          if (L) {
            if (u >= T)
              return L;
            var j = o[u];
            return L * (j == "desc" ? -1 : 1);
          }
        }
        return e.index - r.index;
      }
      function yf(e, r, o, u) {
        for (var h = -1, p = e.length, A = o.length, T = -1, L = r.length, j = Rt(p - A, 0), $ = I(L + j), Q = !u; ++T < L; )
          $[T] = r[T];
        for (; ++h < A; )
          (Q || h < p) && ($[o[h]] = e[h]);
        for (; j--; )
          $[T++] = e[h++];
        return $;
      }
      function bf(e, r, o, u) {
        for (var h = -1, p = e.length, A = -1, T = o.length, L = -1, j = r.length, $ = Rt(p - T, 0), Q = I($ + j), re = !u; ++h < $; )
          Q[h] = e[h];
        for (var le = h; ++L < j; )
          Q[le + L] = r[L];
        for (; ++A < T; )
          (re || h < p) && (Q[le + o[A]] = e[h++]);
        return Q;
      }
      function tn(e, r) {
        var o = -1, u = e.length;
        for (r || (r = I(u)); ++o < u; )
          r[o] = e[o];
        return r;
      }
      function jn(e, r, o, u) {
        var h = !o;
        o || (o = {});
        for (var p = -1, A = r.length; ++p < A; ) {
          var T = r[p], L = u ? u(o[T], e[T], T, o, e) : i;
          L === i && (L = e[T]), h ? ir(o, T, L) : ra(o, T, L);
        }
        return o;
      }
      function Ng(e, r) {
        return jn(e, fu(e), r);
      }
      function Ig(e, r) {
        return jn(e, Pf(e), r);
      }
      function fo(e, r) {
        return function(o, u) {
          var h = Oe(o) ? Wv : ng, p = r ? r() : {};
          return h(o, e, pe(u, 2), p);
        };
      }
      function _i(e) {
        return Le(function(r, o) {
          var u = -1, h = o.length, p = h > 1 ? o[h - 1] : i, A = h > 2 ? o[2] : i;
          for (p = e.length > 3 && typeof p == "function" ? (h--, p) : i, A && Gt(o[0], o[1], A) && (p = h < 3 ? i : p, h = 1), r = it(r); ++u < h; ) {
            var T = o[u];
            T && e(r, T, u, p);
          }
          return r;
        });
      }
      function wf(e, r) {
        return function(o, u) {
          if (o == null)
            return o;
          if (!nn(o))
            return e(o, u);
          for (var h = o.length, p = r ? h : -1, A = it(o); (r ? p-- : ++p < h) && u(A[p], p, A) !== !1; )
            ;
          return o;
        };
      }
      function _f(e) {
        return function(r, o, u) {
          for (var h = -1, p = it(r), A = u(r), T = A.length; T--; ) {
            var L = A[e ? T : ++h];
            if (o(p[L], L, p) === !1)
              break;
          }
          return r;
        };
      }
      function Mg(e, r, o) {
        var u = r & x, h = ua(e);
        function p() {
          var A = this && this !== Ut && this instanceof p ? h : e;
          return A.apply(u ? o : this, arguments);
        }
        return p;
      }
      function Af(e) {
        return function(r) {
          r = Ke(r);
          var o = pi(r) ? In(r) : i, u = o ? o[0] : r.charAt(0), h = o ? xr(o, 1).join("") : r.slice(1);
          return u[e]() + h;
        };
      }
      function Ai(e) {
        return function(r) {
          return Ds(wh(bh(r).replace(xv, "")), e, "");
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
        function h() {
          for (var p = arguments.length, A = I(p), T = p, L = Ei(h); T--; )
            A[T] = arguments[T];
          var j = p < 3 && A[0] !== L && A[p - 1] !== L ? [] : wr(A, L);
          if (p -= j.length, p < o)
            return Tf(
              e,
              r,
              ho,
              h.placeholder,
              i,
              A,
              j,
              i,
              i,
              o - p
            );
          var $ = this && this !== Ut && this instanceof h ? u : e;
          return un($, this, A);
        }
        return h;
      }
      function Ef(e) {
        return function(r, o, u) {
          var h = it(r);
          if (!nn(r)) {
            var p = pe(o, 3);
            r = Ft(r), o = function(T) {
              return p(h[T], T, h);
            };
          }
          var A = e(r, o, u);
          return A > -1 ? h[p ? r[A] : A] : i;
        };
      }
      function Of(e) {
        return or(function(r) {
          var o = r.length, u = o, h = An.prototype.thru;
          for (e && r.reverse(); u--; ) {
            var p = r[u];
            if (typeof p != "function")
              throw new _n(l);
            if (h && !A && go(p) == "wrapper")
              var A = new An([], !0);
          }
          for (u = A ? u : o; ++u < o; ) {
            p = r[u];
            var T = go(p), L = T == "wrapper" ? cu(p) : i;
            L && du(L[0]) && L[1] == (de | M | ee | ie) && !L[4].length && L[9] == 1 ? A = A[go(L[0])].apply(A, L[3]) : A = p.length == 1 && du(p) ? A[T]() : A.thru(p);
          }
          return function() {
            var j = arguments, $ = j[0];
            if (A && j.length == 1 && Oe($))
              return A.plant($).value();
            for (var Q = 0, re = o ? r[Q].apply(this, j) : $; ++Q < o; )
              re = r[Q].call(this, re);
            return re;
          };
        });
      }
      function ho(e, r, o, u, h, p, A, T, L, j) {
        var $ = r & de, Q = r & x, re = r & D, le = r & (M | U), ve = r & fe, De = re ? i : ua(e);
        function me() {
          for (var Me = arguments.length, Ue = I(Me), hn = Me; hn--; )
            Ue[hn] = arguments[hn];
          if (le)
            var Vt = Ei(me), dn = Vv(Ue, Vt);
          if (u && (Ue = yf(Ue, u, h, le)), p && (Ue = bf(Ue, p, A, le)), Me -= dn, le && Me < j) {
            var Ct = wr(Ue, Vt);
            return Tf(
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
          var Fn = Q ? o : this, lr = re ? Fn[e] : e;
          return Me = Ue.length, T ? Ue = n0(Ue, T) : ve && Me > 1 && Ue.reverse(), $ && L < Me && (Ue.length = L), this && this !== Ut && this instanceof me && (lr = De || ua(lr)), lr.apply(Fn, Ue);
        }
        return me;
      }
      function xf(e, r) {
        return function(o, u) {
          return lg(o, e, r(u), {});
        };
      }
      function po(e, r) {
        return function(o, u) {
          var h;
          if (o === i && u === i)
            return r;
          if (o !== i && (h = o), u !== i) {
            if (h === i)
              return u;
            typeof o == "string" || typeof u == "string" ? (o = ln(o), u = ln(u)) : (o = lf(o), u = lf(u)), h = e(o, u);
          }
          return h;
        };
      }
      function au(e) {
        return or(function(r) {
          return r = mt(r, cn(pe())), Le(function(o) {
            var u = this;
            return e(r, function(h) {
              return un(h, u, o);
            });
          });
        });
      }
      function vo(e, r) {
        r = r === i ? " " : ln(r);
        var o = r.length;
        if (o < 2)
          return o ? Js(r, e) : r;
        var u = Js(r, eo(e / vi(r)));
        return pi(r) ? xr(In(u), 0, e).join("") : u.slice(0, e);
      }
      function Fg(e, r, o, u) {
        var h = r & x, p = ua(e);
        function A() {
          for (var T = -1, L = arguments.length, j = -1, $ = u.length, Q = I($ + L), re = this && this !== Ut && this instanceof A ? p : e; ++j < $; )
            Q[j] = u[j];
          for (; L--; )
            Q[j++] = arguments[++T];
          return un(re, h ? o : this, Q);
        }
        return A;
      }
      function Cf(e) {
        return function(r, o, u) {
          return u && typeof u != "number" && Gt(r, o, u) && (o = u = i), r = cr(r), o === i ? (o = r, r = 0) : o = cr(o), u = u === i ? r < o ? 1 : -1 : cr(u), Ag(r, o, u, e);
        };
      }
      function mo(e) {
        return function(r, o) {
          return typeof r == "string" && typeof o == "string" || (r = Cn(r), o = Cn(o)), e(r, o);
        };
      }
      function Tf(e, r, o, u, h, p, A, T, L, j) {
        var $ = r & M, Q = $ ? A : i, re = $ ? i : A, le = $ ? p : i, ve = $ ? i : p;
        r |= $ ? ee : oe, r &= ~($ ? oe : ee), r & B || (r &= ~(x | D));
        var De = [
          e,
          r,
          h,
          le,
          Q,
          ve,
          re,
          T,
          L,
          j
        ], me = o.apply(i, De);
        return du(e) && Wf(me, De), me.placeholder = u, Uf(me, e, r);
      }
      function ou(e) {
        var r = Dt[e];
        return function(o, u) {
          if (o = Cn(o), u = u == null ? 0 : jt(Se(u), 292), u && Wl(o)) {
            var h = (Ke(o) + "e").split("e"), p = r(h[0] + "e" + (+h[1] + u));
            return h = (Ke(p) + "e").split("e"), +(h[0] + "e" + (+h[1] - u));
          }
          return r(o);
        };
      }
      var Bg = yi && 1 / $a(new yi([, -0]))[1] == qe ? function(e) {
        return new yi(e);
      } : Su;
      function Sf(e) {
        return function(r) {
          var o = $t(r);
          return o == be ? ks(r) : o == et ? tm(r) : Gv(r, e(r));
        };
      }
      function ar(e, r, o, u, h, p, A, T) {
        var L = r & D;
        if (!L && typeof e != "function")
          throw new _n(l);
        var j = u ? u.length : 0;
        if (j || (r &= ~(ee | oe), u = h = i), A = A === i ? A : Rt(Se(A), 0), T = T === i ? T : Se(T), j -= h ? h.length : 0, r & oe) {
          var $ = u, Q = h;
          u = h = i;
        }
        var re = L ? i : cu(e), le = [
          e,
          r,
          o,
          u,
          h,
          $,
          Q,
          p,
          A,
          T
        ];
        if (re && Zg(le, re), e = le[0], r = le[1], o = le[2], u = le[3], h = le[4], T = le[9] = le[9] === i ? L ? 0 : e.length : Rt(le[9] - j, 0), !T && r & (M | U) && (r &= ~(M | U)), !r || r == x)
          var ve = Mg(e, r, o);
        else
          r == M || r == U ? ve = kg(e, r, T) : (r == ee || r == (x | ee)) && !h.length ? ve = Fg(e, r, o, u) : ve = ho.apply(i, le);
        var De = re ? uf : Wf;
        return Uf(De(ve, le), e, r);
      }
      function Df(e, r, o, u) {
        return e === i || kn(e, gi[o]) && !Je.call(u, o) ? r : e;
      }
      function Rf(e, r, o, u, h, p) {
        return bt(e) && bt(r) && (p.set(r, e), uo(e, r, i, Rf, p), p.delete(r)), e;
      }
      function Wg(e) {
        return fa(e) ? i : e;
      }
      function Lf(e, r, o, u, h, p) {
        var A = o & w, T = e.length, L = r.length;
        if (T != L && !(A && L > T))
          return !1;
        var j = p.get(e), $ = p.get(r);
        if (j && $)
          return j == r && $ == e;
        var Q = -1, re = !0, le = o & E ? new qr() : i;
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
          if (le) {
            if (!Rs(r, function(Me, Ue) {
              if (!Xi(le, Ue) && (ve === Me || h(ve, Me, o, u, p)))
                return le.push(Ue);
            })) {
              re = !1;
              break;
            }
          } else if (!(ve === De || h(ve, De, o, u, p))) {
            re = !1;
            break;
          }
        }
        return p.delete(e), p.delete(r), re;
      }
      function Ug(e, r, o, u, h, p, A) {
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
          case et:
            var L = u & w;
            if (T || (T = $a), e.size != r.size && !L)
              return !1;
            var j = A.get(e);
            if (j)
              return j == r;
            u |= E, A.set(e, r);
            var $ = Lf(T(e), T(r), u, h, p, A);
            return A.delete(e), $;
          case F:
            if (na)
              return na.call(e) == na.call(r);
        }
        return !1;
      }
      function zg(e, r, o, u, h, p) {
        var A = o & w, T = su(e), L = T.length, j = su(r), $ = j.length;
        if (L != $ && !A)
          return !1;
        for (var Q = L; Q--; ) {
          var re = T[Q];
          if (!(A ? re in r : Je.call(r, re)))
            return !1;
        }
        var le = p.get(e), ve = p.get(r);
        if (le && ve)
          return le == r && ve == e;
        var De = !0;
        p.set(e, r), p.set(r, e);
        for (var me = A; ++Q < L; ) {
          re = T[Q];
          var Me = e[re], Ue = r[re];
          if (u)
            var hn = A ? u(Ue, Me, re, r, e, p) : u(Me, Ue, re, e, r, p);
          if (!(hn === i ? Me === Ue || h(Me, Ue, o, u, p) : hn)) {
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
        return vu(Ff(e, i, Yf), e + "");
      }
      function su(e) {
        return Ql(e, Ft, fu);
      }
      function uu(e) {
        return Ql(e, rn, Pf);
      }
      var cu = no ? function(e) {
        return no.get(e);
      } : Su;
      function go(e) {
        for (var r = e.name + "", o = bi[r], u = Je.call(bi, r) ? o.length : 0; u--; ) {
          var h = o[u], p = h.func;
          if (p == null || p == e)
            return h.name;
        }
        return r;
      }
      function Ei(e) {
        var r = Je.call(d, "placeholder") ? d : e;
        return r.placeholder;
      }
      function pe() {
        var e = d.iteratee || Cu;
        return e = e === Cu ? Zl : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function yo(e, r) {
        var o = e.__data__;
        return Kg(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
      }
      function lu(e) {
        for (var r = Ft(e), o = r.length; o--; ) {
          var u = r[o], h = e[u];
          r[o] = [u, h, Mf(h)];
        }
        return r;
      }
      function Vr(e, r) {
        var o = Jv(e, r);
        return Jl(o) ? o : i;
      }
      function Hg(e) {
        var r = Je.call(e, jr), o = e[jr];
        try {
          e[jr] = i;
          var u = !0;
        } catch {
        }
        var h = Va.call(e);
        return u && (r ? e[jr] = o : delete e[jr]), h;
      }
      var fu = Bs ? function(e) {
        return e == null ? [] : (e = it(e), yr(Bs(e), function(r) {
          return Fl.call(e, r);
        }));
      } : Du, Pf = Bs ? function(e) {
        for (var r = []; e; )
          br(r, fu(e)), e = Xa(e);
        return r;
      } : Du, $t = Yt;
      (Ws && $t(new Ws(new ArrayBuffer(1))) != Ye || Zi && $t(new Zi()) != be || Us && $t(Us.resolve()) != pt || yi && $t(new yi()) != et || ea && $t(new ea()) != ne) && ($t = function(e) {
        var r = Yt(e), o = r == lt ? e.constructor : i, u = o ? Kr(o) : "";
        if (u)
          switch (u) {
            case Om:
              return Ye;
            case xm:
              return be;
            case Cm:
              return pt;
            case Tm:
              return et;
            case Sm:
              return ne;
          }
        return r;
      });
      function jg(e, r, o) {
        for (var u = -1, h = o.length; ++u < h; ) {
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
      function Nf(e, r, o) {
        r = Or(r, e);
        for (var u = -1, h = r.length, p = !1; ++u < h; ) {
          var A = $n(r[u]);
          if (!(p = e != null && o(e, A)))
            break;
          e = e[A];
        }
        return p || ++u != h ? p : (h = e == null ? 0 : e.length, !!h && xo(h) && sr(A, h) && (Oe(e) || Qr(e)));
      }
      function qg(e) {
        var r = e.length, o = new e.constructor(r);
        return r && typeof e[0] == "string" && Je.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function If(e) {
        return typeof e.constructor == "function" && !ca(e) ? wi(Xa(e)) : {};
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
          case nt:
          case ce:
          case $e:
          case Et:
          case vt:
          case rt:
          case Ve:
          case Wt:
          case Mt:
            return mf(e, o);
          case be:
            return new u();
          case yt:
          case H:
            return new u(e);
          case It:
            return Rg(e);
          case et:
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
        return Oe(e) || Qr(e) || !!(Bl && e && e[Bl]);
      }
      function sr(e, r) {
        var o = typeof e;
        return r = r ?? g, !!r && (o == "number" || o != "symbol" && zr.test(e)) && e > -1 && e % 1 == 0 && e < r;
      }
      function Gt(e, r, o) {
        if (!bt(o))
          return !1;
        var u = typeof r;
        return (u == "number" ? nn(o) && sr(r, o.length) : u == "string" && r in o) ? kn(o[r], e) : !1;
      }
      function hu(e, r) {
        if (Oe(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || fn(e) ? !0 : kt.test(e) || !Qt.test(e) || r != null && e in it(r);
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
        var u = cu(o);
        return !!u && e === u[0];
      }
      function Qg(e) {
        return !!Il && Il in e;
      }
      var Xg = Ya ? ur : Ru;
      function ca(e) {
        var r = e && e.constructor, o = typeof r == "function" && r.prototype || gi;
        return e === o;
      }
      function Mf(e) {
        return e === e && !bt(e);
      }
      function kf(e, r) {
        return function(o) {
          return o == null ? !1 : o[e] === r && (r !== i || e in it(o));
        };
      }
      function Jg(e) {
        var r = Eo(e, function(u) {
          return o.size === m && o.clear(), u;
        }), o = r.cache;
        return r;
      }
      function Zg(e, r) {
        var o = e[1], u = r[1], h = o | u, p = h < (x | D | de), A = u == de && o == M || u == de && o == ie && e[7].length <= r[8] || u == (de | ie) && r[7].length <= r[8] && o == M;
        if (!(p || A))
          return e;
        u & x && (e[2] = r[2], h |= o & x ? 0 : B);
        var T = r[3];
        if (T) {
          var L = e[3];
          e[3] = L ? yf(L, T, r[4]) : T, e[4] = L ? wr(e[3], y) : r[4];
        }
        return T = r[5], T && (L = e[5], e[5] = L ? bf(L, T, r[6]) : T, e[6] = L ? wr(e[5], y) : r[6]), T = r[7], T && (e[7] = T), u & de && (e[8] = e[8] == null ? r[8] : jt(e[8], r[8])), e[9] == null && (e[9] = r[9]), e[0] = r[0], e[1] = h, e;
      }
      function e0(e) {
        var r = [];
        if (e != null)
          for (var o in it(e))
            r.push(o);
        return r;
      }
      function t0(e) {
        return Va.call(e);
      }
      function Ff(e, r, o) {
        return r = Rt(r === i ? e.length - 1 : r, 0), function() {
          for (var u = arguments, h = -1, p = Rt(u.length - r, 0), A = I(p); ++h < p; )
            A[h] = u[r + h];
          h = -1;
          for (var T = I(r + 1); ++h < r; )
            T[h] = u[h];
          return T[r] = o(A), un(e, this, T);
        };
      }
      function Bf(e, r) {
        return r.length < 2 ? e : Gr(e, On(r, 0, -1));
      }
      function n0(e, r) {
        for (var o = e.length, u = jt(r.length, o), h = tn(e); u--; ) {
          var p = r[u];
          e[u] = sr(p, o) ? h[p] : i;
        }
        return e;
      }
      function pu(e, r) {
        if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
          return e[r];
      }
      var Wf = zf(uf), la = gm || function(e, r) {
        return Ut.setTimeout(e, r);
      }, vu = zf(xg);
      function Uf(e, r, o) {
        var u = r + "";
        return vu(e, Gg(u, r0($g(u), o)));
      }
      function zf(e) {
        var r = 0, o = 0;
        return function() {
          var u = _m(), h = Qe - (u - o);
          if (o = u, h > 0) {
            if (++r >= Be)
              return arguments[0];
          } else
            r = 0;
          return e.apply(i, arguments);
        };
      }
      function bo(e, r) {
        var o = -1, u = e.length, h = u - 1;
        for (r = r === i ? u : r; ++o < r; ) {
          var p = Xs(o, h), A = e[p];
          e[p] = e[o], e[o] = A;
        }
        return e.length = r, e;
      }
      var Hf = Jg(function(e) {
        var r = [];
        return e.charCodeAt(0) === 46 && r.push(""), e.replace(zn, function(o, u, h, p) {
          r.push(h ? p.replace(li, "$1") : u || o);
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
      function r0(e, r) {
        return wn(K, function(o) {
          var u = "_." + o[0];
          r & o[1] && !Ha(e, u) && e.push(u);
        }), e.sort();
      }
      function jf(e) {
        if (e instanceof ke)
          return e.clone();
        var r = new An(e.__wrapped__, e.__chain__);
        return r.__actions__ = tn(e.__actions__), r.__index__ = e.__index__, r.__values__ = e.__values__, r;
      }
      function i0(e, r, o) {
        (o ? Gt(e, r, o) : r === i) ? r = 1 : r = Rt(Se(r), 0);
        var u = e == null ? 0 : e.length;
        if (!u || r < 1)
          return [];
        for (var h = 0, p = 0, A = I(eo(u / r)); h < u; )
          A[p++] = On(e, h, h += r);
        return A;
      }
      function a0(e) {
        for (var r = -1, o = e == null ? 0 : e.length, u = 0, h = []; ++r < o; ) {
          var p = e[r];
          p && (h[u++] = p);
        }
        return h;
      }
      function o0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var r = I(e - 1), o = arguments[0], u = e; u--; )
          r[u - 1] = arguments[u];
        return br(Oe(o) ? tn(o) : [o], zt(r, 1));
      }
      var s0 = Le(function(e, r) {
        return xt(e) ? ia(e, zt(r, 1, xt, !0)) : [];
      }), u0 = Le(function(e, r) {
        var o = xn(r);
        return xt(o) && (o = i), xt(e) ? ia(e, zt(r, 1, xt, !0), pe(o, 2)) : [];
      }), c0 = Le(function(e, r) {
        var o = xn(r);
        return xt(o) && (o = i), xt(e) ? ia(e, zt(r, 1, xt, !0), i, o) : [];
      });
      function l0(e, r, o) {
        var u = e == null ? 0 : e.length;
        return u ? (r = o || r === i ? 1 : Se(r), On(e, r < 0 ? 0 : r, u)) : [];
      }
      function f0(e, r, o) {
        var u = e == null ? 0 : e.length;
        return u ? (r = o || r === i ? 1 : Se(r), r = u - r, On(e, 0, r < 0 ? 0 : r)) : [];
      }
      function h0(e, r) {
        return e && e.length ? lo(e, pe(r, 3), !0, !0) : [];
      }
      function d0(e, r) {
        return e && e.length ? lo(e, pe(r, 3), !0) : [];
      }
      function p0(e, r, o, u) {
        var h = e == null ? 0 : e.length;
        return h ? (o && typeof o != "number" && Gt(e, r, o) && (o = 0, u = h), og(e, r, o, u)) : [];
      }
      function $f(e, r, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var h = o == null ? 0 : Se(o);
        return h < 0 && (h = Rt(u + h, 0)), ja(e, pe(r, 3), h);
      }
      function qf(e, r, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var h = u - 1;
        return o !== i && (h = Se(o), h = o < 0 ? Rt(u + h, 0) : jt(h, u - 1)), ja(e, pe(r, 3), h, !0);
      }
      function Yf(e) {
        var r = e == null ? 0 : e.length;
        return r ? zt(e, 1) : [];
      }
      function v0(e) {
        var r = e == null ? 0 : e.length;
        return r ? zt(e, qe) : [];
      }
      function m0(e, r) {
        var o = e == null ? 0 : e.length;
        return o ? (r = r === i ? 1 : Se(r), zt(e, r)) : [];
      }
      function g0(e) {
        for (var r = -1, o = e == null ? 0 : e.length, u = {}; ++r < o; ) {
          var h = e[r];
          u[h[0]] = h[1];
        }
        return u;
      }
      function Gf(e) {
        return e && e.length ? e[0] : i;
      }
      function y0(e, r, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var h = o == null ? 0 : Se(o);
        return h < 0 && (h = Rt(u + h, 0)), di(e, r, h);
      }
      function b0(e) {
        var r = e == null ? 0 : e.length;
        return r ? On(e, 0, -1) : [];
      }
      var w0 = Le(function(e) {
        var r = mt(e, nu);
        return r.length && r[0] === e[0] ? Ys(r) : [];
      }), _0 = Le(function(e) {
        var r = xn(e), o = mt(e, nu);
        return r === xn(o) ? r = i : o.pop(), o.length && o[0] === e[0] ? Ys(o, pe(r, 2)) : [];
      }), A0 = Le(function(e) {
        var r = xn(e), o = mt(e, nu);
        return r = typeof r == "function" ? r : i, r && o.pop(), o.length && o[0] === e[0] ? Ys(o, i, r) : [];
      });
      function E0(e, r) {
        return e == null ? "" : bm.call(e, r);
      }
      function xn(e) {
        var r = e == null ? 0 : e.length;
        return r ? e[r - 1] : i;
      }
      function O0(e, r, o) {
        var u = e == null ? 0 : e.length;
        if (!u)
          return -1;
        var h = u;
        return o !== i && (h = Se(o), h = h < 0 ? Rt(u + h, 0) : jt(h, u - 1)), r === r ? rm(e, r, h) : ja(e, Cl, h, !0);
      }
      function x0(e, r) {
        return e && e.length ? rf(e, Se(r)) : i;
      }
      var C0 = Le(Vf);
      function Vf(e, r) {
        return e && e.length && r && r.length ? Qs(e, r) : e;
      }
      function T0(e, r, o) {
        return e && e.length && r && r.length ? Qs(e, r, pe(o, 2)) : e;
      }
      function S0(e, r, o) {
        return e && e.length && r && r.length ? Qs(e, r, i, o) : e;
      }
      var D0 = or(function(e, r) {
        var o = e == null ? 0 : e.length, u = Hs(e, r);
        return sf(e, mt(r, function(h) {
          return sr(h, o) ? +h : h;
        }).sort(gf)), u;
      });
      function R0(e, r) {
        var o = [];
        if (!(e && e.length))
          return o;
        var u = -1, h = [], p = e.length;
        for (r = pe(r, 3); ++u < p; ) {
          var A = e[u];
          r(A, u, e) && (o.push(A), h.push(u));
        }
        return sf(e, h), o;
      }
      function mu(e) {
        return e == null ? e : Em.call(e);
      }
      function L0(e, r, o) {
        var u = e == null ? 0 : e.length;
        return u ? (o && typeof o != "number" && Gt(e, r, o) ? (r = 0, o = u) : (r = r == null ? 0 : Se(r), o = o === i ? u : Se(o)), On(e, r, o)) : [];
      }
      function P0(e, r) {
        return co(e, r);
      }
      function N0(e, r, o) {
        return Zs(e, r, pe(o, 2));
      }
      function I0(e, r) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var u = co(e, r);
          if (u < o && kn(e[u], r))
            return u;
        }
        return -1;
      }
      function M0(e, r) {
        return co(e, r, !0);
      }
      function k0(e, r, o) {
        return Zs(e, r, pe(o, 2), !0);
      }
      function F0(e, r) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var u = co(e, r, !0) - 1;
          if (kn(e[u], r))
            return u;
        }
        return -1;
      }
      function B0(e) {
        return e && e.length ? cf(e) : [];
      }
      function W0(e, r) {
        return e && e.length ? cf(e, pe(r, 2)) : [];
      }
      function U0(e) {
        var r = e == null ? 0 : e.length;
        return r ? On(e, 1, r) : [];
      }
      function z0(e, r, o) {
        return e && e.length ? (r = o || r === i ? 1 : Se(r), On(e, 0, r < 0 ? 0 : r)) : [];
      }
      function H0(e, r, o) {
        var u = e == null ? 0 : e.length;
        return u ? (r = o || r === i ? 1 : Se(r), r = u - r, On(e, r < 0 ? 0 : r, u)) : [];
      }
      function j0(e, r) {
        return e && e.length ? lo(e, pe(r, 3), !1, !0) : [];
      }
      function $0(e, r) {
        return e && e.length ? lo(e, pe(r, 3)) : [];
      }
      var q0 = Le(function(e) {
        return Er(zt(e, 1, xt, !0));
      }), Y0 = Le(function(e) {
        var r = xn(e);
        return xt(r) && (r = i), Er(zt(e, 1, xt, !0), pe(r, 2));
      }), G0 = Le(function(e) {
        var r = xn(e);
        return r = typeof r == "function" ? r : i, Er(zt(e, 1, xt, !0), i, r);
      });
      function V0(e) {
        return e && e.length ? Er(e) : [];
      }
      function K0(e, r) {
        return e && e.length ? Er(e, pe(r, 2)) : [];
      }
      function Q0(e, r) {
        return r = typeof r == "function" ? r : i, e && e.length ? Er(e, i, r) : [];
      }
      function gu(e) {
        if (!(e && e.length))
          return [];
        var r = 0;
        return e = yr(e, function(o) {
          if (xt(o))
            return r = Rt(o.length, r), !0;
        }), Is(r, function(o) {
          return mt(e, Ls(o));
        });
      }
      function Kf(e, r) {
        if (!(e && e.length))
          return [];
        var o = gu(e);
        return r == null ? o : mt(o, function(u) {
          return un(r, i, u);
        });
      }
      var X0 = Le(function(e, r) {
        return xt(e) ? ia(e, r) : [];
      }), J0 = Le(function(e) {
        return tu(yr(e, xt));
      }), Z0 = Le(function(e) {
        var r = xn(e);
        return xt(r) && (r = i), tu(yr(e, xt), pe(r, 2));
      }), ey = Le(function(e) {
        var r = xn(e);
        return r = typeof r == "function" ? r : i, tu(yr(e, xt), i, r);
      }), ty = Le(gu);
      function ny(e, r) {
        return df(e || [], r || [], ra);
      }
      function ry(e, r) {
        return df(e || [], r || [], sa);
      }
      var iy = Le(function(e) {
        var r = e.length, o = r > 1 ? e[r - 1] : i;
        return o = typeof o == "function" ? (e.pop(), o) : i, Kf(e, o);
      });
      function Qf(e) {
        var r = d(e);
        return r.__chain__ = !0, r;
      }
      function ay(e, r) {
        return r(e), e;
      }
      function wo(e, r) {
        return r(e);
      }
      var oy = or(function(e) {
        var r = e.length, o = r ? e[0] : 0, u = this.__wrapped__, h = function(p) {
          return Hs(p, e);
        };
        return r > 1 || this.__actions__.length || !(u instanceof ke) || !sr(o) ? this.thru(h) : (u = u.slice(o, +o + (r ? 1 : 0)), u.__actions__.push({
          func: wo,
          args: [h],
          thisArg: i
        }), new An(u, this.__chain__).thru(function(p) {
          return r && !p.length && p.push(i), p;
        }));
      });
      function sy() {
        return Qf(this);
      }
      function uy() {
        return new An(this.value(), this.__chain__);
      }
      function cy() {
        this.__values__ === i && (this.__values__ = lh(this.value()));
        var e = this.__index__ >= this.__values__.length, r = e ? i : this.__values__[this.__index__++];
        return { done: e, value: r };
      }
      function ly() {
        return this;
      }
      function fy(e) {
        for (var r, o = this; o instanceof io; ) {
          var u = jf(o);
          u.__index__ = 0, u.__values__ = i, r ? h.__wrapped__ = u : r = u;
          var h = u;
          o = o.__wrapped__;
        }
        return h.__wrapped__ = e, r;
      }
      function hy() {
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
      function dy() {
        return hf(this.__wrapped__, this.__actions__);
      }
      var py = fo(function(e, r, o) {
        Je.call(e, o) ? ++e[o] : ir(e, o, 1);
      });
      function vy(e, r, o) {
        var u = Oe(e) ? Ol : ag;
        return o && Gt(e, r, o) && (r = i), u(e, pe(r, 3));
      }
      function my(e, r) {
        var o = Oe(e) ? yr : Vl;
        return o(e, pe(r, 3));
      }
      var gy = Ef($f), yy = Ef(qf);
      function by(e, r) {
        return zt(_o(e, r), 1);
      }
      function wy(e, r) {
        return zt(_o(e, r), qe);
      }
      function _y(e, r, o) {
        return o = o === i ? 1 : Se(o), zt(_o(e, r), o);
      }
      function Xf(e, r) {
        var o = Oe(e) ? wn : Ar;
        return o(e, pe(r, 3));
      }
      function Jf(e, r) {
        var o = Oe(e) ? Uv : Gl;
        return o(e, pe(r, 3));
      }
      var Ay = fo(function(e, r, o) {
        Je.call(e, o) ? e[o].push(r) : ir(e, o, [r]);
      });
      function Ey(e, r, o, u) {
        e = nn(e) ? e : xi(e), o = o && !u ? Se(o) : 0;
        var h = e.length;
        return o < 0 && (o = Rt(h + o, 0)), Co(e) ? o <= h && e.indexOf(r, o) > -1 : !!h && di(e, r, o) > -1;
      }
      var Oy = Le(function(e, r, o) {
        var u = -1, h = typeof r == "function", p = nn(e) ? I(e.length) : [];
        return Ar(e, function(A) {
          p[++u] = h ? un(r, A, o) : aa(A, r, o);
        }), p;
      }), xy = fo(function(e, r, o) {
        ir(e, o, r);
      });
      function _o(e, r) {
        var o = Oe(e) ? mt : ef;
        return o(e, pe(r, 3));
      }
      function Cy(e, r, o, u) {
        return e == null ? [] : (Oe(r) || (r = r == null ? [] : [r]), o = u ? i : o, Oe(o) || (o = o == null ? [] : [o]), af(e, r, o));
      }
      var Ty = fo(function(e, r, o) {
        e[o ? 0 : 1].push(r);
      }, function() {
        return [[], []];
      });
      function Sy(e, r, o) {
        var u = Oe(e) ? Ds : Sl, h = arguments.length < 3;
        return u(e, pe(r, 4), o, h, Ar);
      }
      function Dy(e, r, o) {
        var u = Oe(e) ? zv : Sl, h = arguments.length < 3;
        return u(e, pe(r, 4), o, h, Gl);
      }
      function Ry(e, r) {
        var o = Oe(e) ? yr : Vl;
        return o(e, Oo(pe(r, 3)));
      }
      function Ly(e) {
        var r = Oe(e) ? jl : Eg;
        return r(e);
      }
      function Py(e, r, o) {
        (o ? Gt(e, r, o) : r === i) ? r = 1 : r = Se(r);
        var u = Oe(e) ? eg : Og;
        return u(e, r);
      }
      function Ny(e) {
        var r = Oe(e) ? tg : Cg;
        return r(e);
      }
      function Iy(e) {
        if (e == null)
          return 0;
        if (nn(e))
          return Co(e) ? vi(e) : e.length;
        var r = $t(e);
        return r == be || r == et ? e.size : Vs(e).length;
      }
      function My(e, r, o) {
        var u = Oe(e) ? Rs : Tg;
        return o && Gt(e, r, o) && (r = i), u(e, pe(r, 3));
      }
      var ky = Le(function(e, r) {
        if (e == null)
          return [];
        var o = r.length;
        return o > 1 && Gt(e, r[0], r[1]) ? r = [] : o > 2 && Gt(r[0], r[1], r[2]) && (r = [r[0]]), af(e, zt(r, 1), []);
      }), Ao = mm || function() {
        return Ut.Date.now();
      };
      function Fy(e, r) {
        if (typeof r != "function")
          throw new _n(l);
        return e = Se(e), function() {
          if (--e < 1)
            return r.apply(this, arguments);
        };
      }
      function Zf(e, r, o) {
        return r = o ? i : r, r = e && r == null ? e.length : r, ar(e, de, i, i, i, i, r);
      }
      function eh(e, r) {
        var o;
        if (typeof r != "function")
          throw new _n(l);
        return e = Se(e), function() {
          return --e > 0 && (o = r.apply(this, arguments)), e <= 1 && (r = i), o;
        };
      }
      var yu = Le(function(e, r, o) {
        var u = x;
        if (o.length) {
          var h = wr(o, Ei(yu));
          u |= ee;
        }
        return ar(e, u, r, o, h);
      }), th = Le(function(e, r, o) {
        var u = x | D;
        if (o.length) {
          var h = wr(o, Ei(th));
          u |= ee;
        }
        return ar(r, u, e, o, h);
      });
      function nh(e, r, o) {
        r = o ? i : r;
        var u = ar(e, M, i, i, i, i, i, r);
        return u.placeholder = nh.placeholder, u;
      }
      function rh(e, r, o) {
        r = o ? i : r;
        var u = ar(e, U, i, i, i, i, i, r);
        return u.placeholder = rh.placeholder, u;
      }
      function ih(e, r, o) {
        var u, h, p, A, T, L, j = 0, $ = !1, Q = !1, re = !0;
        if (typeof e != "function")
          throw new _n(l);
        r = Cn(r) || 0, bt(o) && ($ = !!o.leading, Q = "maxWait" in o, p = Q ? Rt(Cn(o.maxWait) || 0, r) : p, re = "trailing" in o ? !!o.trailing : re);
        function le(Ct) {
          var Fn = u, lr = h;
          return u = h = i, j = Ct, A = e.apply(lr, Fn), A;
        }
        function ve(Ct) {
          return j = Ct, T = la(Me, r), $ ? le(Ct) : A;
        }
        function De(Ct) {
          var Fn = Ct - L, lr = Ct - j, Eh = r - Fn;
          return Q ? jt(Eh, p - lr) : Eh;
        }
        function me(Ct) {
          var Fn = Ct - L, lr = Ct - j;
          return L === i || Fn >= r || Fn < 0 || Q && lr >= p;
        }
        function Me() {
          var Ct = Ao();
          if (me(Ct))
            return Ue(Ct);
          T = la(Me, De(Ct));
        }
        function Ue(Ct) {
          return T = i, re && u ? le(Ct) : (u = h = i, A);
        }
        function hn() {
          T !== i && pf(T), j = 0, u = L = h = T = i;
        }
        function Vt() {
          return T === i ? A : Ue(Ao());
        }
        function dn() {
          var Ct = Ao(), Fn = me(Ct);
          if (u = arguments, h = this, L = Ct, Fn) {
            if (T === i)
              return ve(L);
            if (Q)
              return pf(T), T = la(Me, r), le(L);
          }
          return T === i && (T = la(Me, r)), A;
        }
        return dn.cancel = hn, dn.flush = Vt, dn;
      }
      var By = Le(function(e, r) {
        return Yl(e, 1, r);
      }), Wy = Le(function(e, r, o) {
        return Yl(e, Cn(r) || 0, o);
      });
      function Uy(e) {
        return ar(e, fe);
      }
      function Eo(e, r) {
        if (typeof e != "function" || r != null && typeof r != "function")
          throw new _n(l);
        var o = function() {
          var u = arguments, h = r ? r.apply(this, u) : u[0], p = o.cache;
          if (p.has(h))
            return p.get(h);
          var A = e.apply(this, u);
          return o.cache = p.set(h, A) || p, A;
        };
        return o.cache = new (Eo.Cache || rr)(), o;
      }
      Eo.Cache = rr;
      function Oo(e) {
        if (typeof e != "function")
          throw new _n(l);
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
      function zy(e) {
        return eh(2, e);
      }
      var Hy = Sg(function(e, r) {
        r = r.length == 1 && Oe(r[0]) ? mt(r[0], cn(pe())) : mt(zt(r, 1), cn(pe()));
        var o = r.length;
        return Le(function(u) {
          for (var h = -1, p = jt(u.length, o); ++h < p; )
            u[h] = r[h].call(this, u[h]);
          return un(e, this, u);
        });
      }), bu = Le(function(e, r) {
        var o = wr(r, Ei(bu));
        return ar(e, ee, i, r, o);
      }), ah = Le(function(e, r) {
        var o = wr(r, Ei(ah));
        return ar(e, oe, i, r, o);
      }), jy = or(function(e, r) {
        return ar(e, ie, i, i, i, r);
      });
      function $y(e, r) {
        if (typeof e != "function")
          throw new _n(l);
        return r = r === i ? r : Se(r), Le(e, r);
      }
      function qy(e, r) {
        if (typeof e != "function")
          throw new _n(l);
        return r = r == null ? 0 : Rt(Se(r), 0), Le(function(o) {
          var u = o[r], h = xr(o, 0, r);
          return u && br(h, u), un(e, this, h);
        });
      }
      function Yy(e, r, o) {
        var u = !0, h = !0;
        if (typeof e != "function")
          throw new _n(l);
        return bt(o) && (u = "leading" in o ? !!o.leading : u, h = "trailing" in o ? !!o.trailing : h), ih(e, r, {
          leading: u,
          maxWait: r,
          trailing: h
        });
      }
      function Gy(e) {
        return Zf(e, 1);
      }
      function Vy(e, r) {
        return bu(ru(r), e);
      }
      function Ky() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return Oe(e) ? e : [e];
      }
      function Qy(e) {
        return En(e, _);
      }
      function Xy(e, r) {
        return r = typeof r == "function" ? r : i, En(e, _, r);
      }
      function Jy(e) {
        return En(e, v | _);
      }
      function Zy(e, r) {
        return r = typeof r == "function" ? r : i, En(e, v | _, r);
      }
      function e1(e, r) {
        return r == null || ql(e, r, Ft(r));
      }
      function kn(e, r) {
        return e === r || e !== e && r !== r;
      }
      var t1 = mo(qs), n1 = mo(function(e, r) {
        return e >= r;
      }), Qr = Xl(function() {
        return arguments;
      }()) ? Xl : function(e) {
        return At(e) && Je.call(e, "callee") && !Fl.call(e, "callee");
      }, Oe = I.isArray, r1 = yl ? cn(yl) : fg;
      function nn(e) {
        return e != null && xo(e.length) && !ur(e);
      }
      function xt(e) {
        return At(e) && nn(e);
      }
      function i1(e) {
        return e === !0 || e === !1 || At(e) && Yt(e) == se;
      }
      var Cr = ym || Ru, a1 = bl ? cn(bl) : hg;
      function o1(e) {
        return At(e) && e.nodeType === 1 && !fa(e);
      }
      function s1(e) {
        if (e == null)
          return !0;
        if (nn(e) && (Oe(e) || typeof e == "string" || typeof e.splice == "function" || Cr(e) || Oi(e) || Qr(e)))
          return !e.length;
        var r = $t(e);
        if (r == be || r == et)
          return !e.size;
        if (ca(e))
          return !Vs(e).length;
        for (var o in e)
          if (Je.call(e, o))
            return !1;
        return !0;
      }
      function u1(e, r) {
        return oa(e, r);
      }
      function c1(e, r, o) {
        o = typeof o == "function" ? o : i;
        var u = o ? o(e, r) : i;
        return u === i ? oa(e, r, i, o) : !!u;
      }
      function wu(e) {
        if (!At(e))
          return !1;
        var r = Yt(e);
        return r == Ee || r == xe || typeof e.message == "string" && typeof e.name == "string" && !fa(e);
      }
      function l1(e) {
        return typeof e == "number" && Wl(e);
      }
      function ur(e) {
        if (!bt(e))
          return !1;
        var r = Yt(e);
        return r == Ne || r == ot || r == X || r == tt;
      }
      function oh(e) {
        return typeof e == "number" && e == Se(e);
      }
      function xo(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= g;
      }
      function bt(e) {
        var r = typeof e;
        return e != null && (r == "object" || r == "function");
      }
      function At(e) {
        return e != null && typeof e == "object";
      }
      var sh = wl ? cn(wl) : pg;
      function f1(e, r) {
        return e === r || Gs(e, r, lu(r));
      }
      function h1(e, r, o) {
        return o = typeof o == "function" ? o : i, Gs(e, r, lu(r), o);
      }
      function d1(e) {
        return uh(e) && e != +e;
      }
      function p1(e) {
        if (Xg(e))
          throw new Ae(c);
        return Jl(e);
      }
      function v1(e) {
        return e === null;
      }
      function m1(e) {
        return e == null;
      }
      function uh(e) {
        return typeof e == "number" || At(e) && Yt(e) == yt;
      }
      function fa(e) {
        if (!At(e) || Yt(e) != lt)
          return !1;
        var r = Xa(e);
        if (r === null)
          return !0;
        var o = Je.call(r, "constructor") && r.constructor;
        return typeof o == "function" && o instanceof o && Ga.call(o) == hm;
      }
      var _u = _l ? cn(_l) : vg;
      function g1(e) {
        return oh(e) && e >= -g && e <= g;
      }
      var ch = Al ? cn(Al) : mg;
      function Co(e) {
        return typeof e == "string" || !Oe(e) && At(e) && Yt(e) == H;
      }
      function fn(e) {
        return typeof e == "symbol" || At(e) && Yt(e) == F;
      }
      var Oi = El ? cn(El) : gg;
      function y1(e) {
        return e === i;
      }
      function b1(e) {
        return At(e) && $t(e) == ne;
      }
      function w1(e) {
        return At(e) && Yt(e) == ae;
      }
      var _1 = mo(Ks), A1 = mo(function(e, r) {
        return e <= r;
      });
      function lh(e) {
        if (!e)
          return [];
        if (nn(e))
          return Co(e) ? In(e) : tn(e);
        if (Ji && e[Ji])
          return em(e[Ji]());
        var r = $t(e), o = r == be ? ks : r == et ? $a : xi;
        return o(e);
      }
      function cr(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Cn(e), e === qe || e === -qe) {
          var r = e < 0 ? -1 : 1;
          return r * O;
        }
        return e === e ? e : 0;
      }
      function Se(e) {
        var r = cr(e), o = r % 1;
        return r === r ? o ? r - o : r : 0;
      }
      function fh(e) {
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
        e = Dl(e);
        var o = ge.test(e);
        return o || qt.test(e) ? Fv(e.slice(2), o ? 2 : 8) : st.test(e) ? S : +e;
      }
      function hh(e) {
        return jn(e, rn(e));
      }
      function E1(e) {
        return e ? Yr(Se(e), -g, g) : e === 0 ? e : 0;
      }
      function Ke(e) {
        return e == null ? "" : ln(e);
      }
      var O1 = _i(function(e, r) {
        if (ca(r) || nn(r)) {
          jn(r, Ft(r), e);
          return;
        }
        for (var o in r)
          Je.call(r, o) && ra(e, o, r[o]);
      }), dh = _i(function(e, r) {
        jn(r, rn(r), e);
      }), To = _i(function(e, r, o, u) {
        jn(r, rn(r), e, u);
      }), x1 = _i(function(e, r, o, u) {
        jn(r, Ft(r), e, u);
      }), C1 = or(Hs);
      function T1(e, r) {
        var o = wi(e);
        return r == null ? o : $l(o, r);
      }
      var S1 = Le(function(e, r) {
        e = it(e);
        var o = -1, u = r.length, h = u > 2 ? r[2] : i;
        for (h && Gt(r[0], r[1], h) && (u = 1); ++o < u; )
          for (var p = r[o], A = rn(p), T = -1, L = A.length; ++T < L; ) {
            var j = A[T], $ = e[j];
            ($ === i || kn($, gi[j]) && !Je.call(e, j)) && (e[j] = p[j]);
          }
        return e;
      }), D1 = Le(function(e) {
        return e.push(i, Rf), un(ph, i, e);
      });
      function R1(e, r) {
        return xl(e, pe(r, 3), Hn);
      }
      function L1(e, r) {
        return xl(e, pe(r, 3), $s);
      }
      function P1(e, r) {
        return e == null ? e : js(e, pe(r, 3), rn);
      }
      function N1(e, r) {
        return e == null ? e : Kl(e, pe(r, 3), rn);
      }
      function I1(e, r) {
        return e && Hn(e, pe(r, 3));
      }
      function M1(e, r) {
        return e && $s(e, pe(r, 3));
      }
      function k1(e) {
        return e == null ? [] : so(e, Ft(e));
      }
      function F1(e) {
        return e == null ? [] : so(e, rn(e));
      }
      function Au(e, r, o) {
        var u = e == null ? i : Gr(e, r);
        return u === i ? o : u;
      }
      function B1(e, r) {
        return e != null && Nf(e, r, sg);
      }
      function Eu(e, r) {
        return e != null && Nf(e, r, ug);
      }
      var W1 = xf(function(e, r, o) {
        r != null && typeof r.toString != "function" && (r = Va.call(r)), e[r] = o;
      }, xu(an)), U1 = xf(function(e, r, o) {
        r != null && typeof r.toString != "function" && (r = Va.call(r)), Je.call(e, r) ? e[r].push(o) : e[r] = [o];
      }, pe), z1 = Le(aa);
      function Ft(e) {
        return nn(e) ? Hl(e) : Vs(e);
      }
      function rn(e) {
        return nn(e) ? Hl(e, !0) : yg(e);
      }
      function H1(e, r) {
        var o = {};
        return r = pe(r, 3), Hn(e, function(u, h, p) {
          ir(o, r(u, h, p), u);
        }), o;
      }
      function j1(e, r) {
        var o = {};
        return r = pe(r, 3), Hn(e, function(u, h, p) {
          ir(o, h, r(u, h, p));
        }), o;
      }
      var $1 = _i(function(e, r, o) {
        uo(e, r, o);
      }), ph = _i(function(e, r, o, u) {
        uo(e, r, o, u);
      }), q1 = or(function(e, r) {
        var o = {};
        if (e == null)
          return o;
        var u = !1;
        r = mt(r, function(p) {
          return p = Or(p, e), u || (u = p.length > 1), p;
        }), jn(e, uu(e), o), u && (o = En(o, v | C | _, Wg));
        for (var h = r.length; h--; )
          eu(o, r[h]);
        return o;
      });
      function Y1(e, r) {
        return vh(e, Oo(pe(r)));
      }
      var G1 = or(function(e, r) {
        return e == null ? {} : wg(e, r);
      });
      function vh(e, r) {
        if (e == null)
          return {};
        var o = mt(uu(e), function(u) {
          return [u];
        });
        return r = pe(r), of(e, o, function(u, h) {
          return r(u, h[0]);
        });
      }
      function V1(e, r, o) {
        r = Or(r, e);
        var u = -1, h = r.length;
        for (h || (h = 1, e = i); ++u < h; ) {
          var p = e == null ? i : e[$n(r[u])];
          p === i && (u = h, p = o), e = ur(p) ? p.call(e) : p;
        }
        return e;
      }
      function K1(e, r, o) {
        return e == null ? e : sa(e, r, o);
      }
      function Q1(e, r, o, u) {
        return u = typeof u == "function" ? u : i, e == null ? e : sa(e, r, o, u);
      }
      var mh = Sf(Ft), gh = Sf(rn);
      function X1(e, r, o) {
        var u = Oe(e), h = u || Cr(e) || Oi(e);
        if (r = pe(r, 4), o == null) {
          var p = e && e.constructor;
          h ? o = u ? new p() : [] : bt(e) ? o = ur(p) ? wi(Xa(e)) : {} : o = {};
        }
        return (h ? wn : Hn)(e, function(A, T, L) {
          return r(o, A, T, L);
        }), o;
      }
      function J1(e, r) {
        return e == null ? !0 : eu(e, r);
      }
      function Z1(e, r, o) {
        return e == null ? e : ff(e, r, ru(o));
      }
      function eb(e, r, o, u) {
        return u = typeof u == "function" ? u : i, e == null ? e : ff(e, r, ru(o), u);
      }
      function xi(e) {
        return e == null ? [] : Ms(e, Ft(e));
      }
      function tb(e) {
        return e == null ? [] : Ms(e, rn(e));
      }
      function nb(e, r, o) {
        return o === i && (o = r, r = i), o !== i && (o = Cn(o), o = o === o ? o : 0), r !== i && (r = Cn(r), r = r === r ? r : 0), Yr(Cn(e), r, o);
      }
      function rb(e, r, o) {
        return r = cr(r), o === i ? (o = r, r = 0) : o = cr(o), e = Cn(e), cg(e, r, o);
      }
      function ib(e, r, o) {
        if (o && typeof o != "boolean" && Gt(e, r, o) && (r = o = i), o === i && (typeof r == "boolean" ? (o = r, r = i) : typeof e == "boolean" && (o = e, e = i)), e === i && r === i ? (e = 0, r = 1) : (e = cr(e), r === i ? (r = e, e = 0) : r = cr(r)), e > r) {
          var u = e;
          e = r, r = u;
        }
        if (o || e % 1 || r % 1) {
          var h = Ul();
          return jt(e + h * (r - e + kv("1e-" + ((h + "").length - 1))), r);
        }
        return Xs(e, r);
      }
      var ab = Ai(function(e, r, o) {
        return r = r.toLowerCase(), e + (o ? yh(r) : r);
      });
      function yh(e) {
        return Ou(Ke(e).toLowerCase());
      }
      function bh(e) {
        return e = Ke(e), e && e.replace(ws, Kv).replace(Cv, "");
      }
      function ob(e, r, o) {
        e = Ke(e), r = ln(r);
        var u = e.length;
        o = o === i ? u : Yr(Se(o), 0, u);
        var h = o;
        return o -= r.length, o >= 0 && e.slice(o, h) == r;
      }
      function sb(e) {
        return e = Ke(e), e && Xe.test(e) ? e.replace(we, Qv) : e;
      }
      function ub(e) {
        return e = Ke(e), e && Xt.test(e) ? e.replace(Nn, "\\$&") : e;
      }
      var cb = Ai(function(e, r, o) {
        return e + (o ? "-" : "") + r.toLowerCase();
      }), lb = Ai(function(e, r, o) {
        return e + (o ? " " : "") + r.toLowerCase();
      }), fb = Af("toLowerCase");
      function hb(e, r, o) {
        e = Ke(e), r = Se(r);
        var u = r ? vi(e) : 0;
        if (!r || u >= r)
          return e;
        var h = (r - u) / 2;
        return vo(to(h), o) + e + vo(eo(h), o);
      }
      function db(e, r, o) {
        e = Ke(e), r = Se(r);
        var u = r ? vi(e) : 0;
        return r && u < r ? e + vo(r - u, o) : e;
      }
      function pb(e, r, o) {
        e = Ke(e), r = Se(r);
        var u = r ? vi(e) : 0;
        return r && u < r ? vo(r - u, o) + e : e;
      }
      function vb(e, r, o) {
        return o || r == null ? r = 0 : r && (r = +r), Am(Ke(e).replace(gn, ""), r || 0);
      }
      function mb(e, r, o) {
        return (o ? Gt(e, r, o) : r === i) ? r = 1 : r = Se(r), Js(Ke(e), r);
      }
      function gb() {
        var e = arguments, r = Ke(e[0]);
        return e.length < 3 ? r : r.replace(e[1], e[2]);
      }
      var yb = Ai(function(e, r, o) {
        return e + (o ? "_" : "") + r.toLowerCase();
      });
      function bb(e, r, o) {
        return o && typeof o != "number" && Gt(e, r, o) && (r = o = i), o = o === i ? P : o >>> 0, o ? (e = Ke(e), e && (typeof r == "string" || r != null && !_u(r)) && (r = ln(r), !r && pi(e)) ? xr(In(e), 0, o) : e.split(r, o)) : [];
      }
      var wb = Ai(function(e, r, o) {
        return e + (o ? " " : "") + Ou(r);
      });
      function _b(e, r, o) {
        return e = Ke(e), o = o == null ? 0 : Yr(Se(o), 0, e.length), r = ln(r), e.slice(o, o + r.length) == r;
      }
      function Ab(e, r, o) {
        var u = d.templateSettings;
        o && Gt(e, r, o) && (r = i), e = Ke(e), r = To({}, r, u, Df);
        var h = To({}, r.imports, u.imports, Df), p = Ft(h), A = Ms(h, p), T, L, j = 0, $ = r.interpolate || fi, Q = "__p += '", re = Fs(
          (r.escape || fi).source + "|" + $.source + "|" + ($ === _t ? Qi : fi).source + "|" + (r.evaluate || fi).source + "|$",
          "g"
        ), le = "//# sourceURL=" + (Je.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Lv + "]") + `
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
          throw new Ae(f);
        Q = (L ? Q.replace(sn, "") : Q).replace(vn, "$1").replace(Pn, "$1;"), Q = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Q + `return __p
}`;
        var De = _h(function() {
          return Ge(p, le + "return " + Q).apply(i, A);
        });
        if (De.source = Q, wu(De))
          throw De;
        return De;
      }
      function Eb(e) {
        return Ke(e).toLowerCase();
      }
      function Ob(e) {
        return Ke(e).toUpperCase();
      }
      function xb(e, r, o) {
        if (e = Ke(e), e && (o || r === i))
          return Dl(e);
        if (!e || !(r = ln(r)))
          return e;
        var u = In(e), h = In(r), p = Rl(u, h), A = Ll(u, h) + 1;
        return xr(u, p, A).join("");
      }
      function Cb(e, r, o) {
        if (e = Ke(e), e && (o || r === i))
          return e.slice(0, Nl(e) + 1);
        if (!e || !(r = ln(r)))
          return e;
        var u = In(e), h = Ll(u, In(r)) + 1;
        return xr(u, 0, h).join("");
      }
      function Tb(e, r, o) {
        if (e = Ke(e), e && (o || r === i))
          return e.replace(gn, "");
        if (!e || !(r = ln(r)))
          return e;
        var u = In(e), h = Rl(u, In(r));
        return xr(u, h).join("");
      }
      function Sb(e, r) {
        var o = Fe, u = Re;
        if (bt(r)) {
          var h = "separator" in r ? r.separator : h;
          o = "length" in r ? Se(r.length) : o, u = "omission" in r ? ln(r.omission) : u;
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
        var L = A ? xr(A, 0, T).join("") : e.slice(0, T);
        if (h === i)
          return L + u;
        if (A && (T += L.length - T), _u(h)) {
          if (e.slice(T).search(h)) {
            var j, $ = L;
            for (h.global || (h = Fs(h.source, Ke(Te.exec(h)) + "g")), h.lastIndex = 0; j = h.exec($); )
              var Q = j.index;
            L = L.slice(0, Q === i ? T : Q);
          }
        } else if (e.indexOf(ln(h), T) != T) {
          var re = L.lastIndexOf(h);
          re > -1 && (L = L.slice(0, re));
        }
        return L + u;
      }
      function Db(e) {
        return e = Ke(e), e && We.test(e) ? e.replace(mn, im) : e;
      }
      var Rb = Ai(function(e, r, o) {
        return e + (o ? " " : "") + r.toUpperCase();
      }), Ou = Af("toUpperCase");
      function wh(e, r, o) {
        return e = Ke(e), r = o ? i : r, r === i ? Zv(e) ? sm(e) : $v(e) : e.match(r) || [];
      }
      var _h = Le(function(e, r) {
        try {
          return un(e, i, r);
        } catch (o) {
          return wu(o) ? o : new Ae(o);
        }
      }), Lb = or(function(e, r) {
        return wn(r, function(o) {
          o = $n(o), ir(e, o, yu(e[o], e));
        }), e;
      });
      function Pb(e) {
        var r = e == null ? 0 : e.length, o = pe();
        return e = r ? mt(e, function(u) {
          if (typeof u[1] != "function")
            throw new _n(l);
          return [o(u[0]), u[1]];
        }) : [], Le(function(u) {
          for (var h = -1; ++h < r; ) {
            var p = e[h];
            if (un(p[0], this, u))
              return un(p[1], this, u);
          }
        });
      }
      function Nb(e) {
        return ig(En(e, v));
      }
      function xu(e) {
        return function() {
          return e;
        };
      }
      function Ib(e, r) {
        return e == null || e !== e ? r : e;
      }
      var Mb = Of(), kb = Of(!0);
      function an(e) {
        return e;
      }
      function Cu(e) {
        return Zl(typeof e == "function" ? e : En(e, v));
      }
      function Fb(e) {
        return tf(En(e, v));
      }
      function Bb(e, r) {
        return nf(e, En(r, v));
      }
      var Wb = Le(function(e, r) {
        return function(o) {
          return aa(o, e, r);
        };
      }), Ub = Le(function(e, r) {
        return function(o) {
          return aa(e, o, r);
        };
      });
      function Tu(e, r, o) {
        var u = Ft(r), h = so(r, u);
        o == null && !(bt(r) && (h.length || !u.length)) && (o = r, r = e, e = this, h = so(r, Ft(r)));
        var p = !(bt(o) && "chain" in o) || !!o.chain, A = ur(e);
        return wn(h, function(T) {
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
      function zb() {
        return Ut._ === this && (Ut._ = dm), this;
      }
      function Su() {
      }
      function Hb(e) {
        return e = Se(e), Le(function(r) {
          return rf(r, e);
        });
      }
      var jb = au(mt), $b = au(Ol), qb = au(Rs);
      function Ah(e) {
        return hu(e) ? Ls($n(e)) : _g(e);
      }
      function Yb(e) {
        return function(r) {
          return e == null ? i : Gr(e, r);
        };
      }
      var Gb = Cf(), Vb = Cf(!0);
      function Du() {
        return [];
      }
      function Ru() {
        return !1;
      }
      function Kb() {
        return {};
      }
      function Qb() {
        return "";
      }
      function Xb() {
        return !0;
      }
      function Jb(e, r) {
        if (e = Se(e), e < 1 || e > g)
          return [];
        var o = P, u = jt(e, P);
        r = pe(r), e -= P;
        for (var h = Is(u, r); ++o < e; )
          r(o);
        return h;
      }
      function Zb(e) {
        return Oe(e) ? mt(e, $n) : fn(e) ? [e] : tn(Hf(Ke(e)));
      }
      function ew(e) {
        var r = ++fm;
        return Ke(e) + r;
      }
      var tw = po(function(e, r) {
        return e + r;
      }, 0), nw = ou("ceil"), rw = po(function(e, r) {
        return e / r;
      }, 1), iw = ou("floor");
      function aw(e) {
        return e && e.length ? oo(e, an, qs) : i;
      }
      function ow(e, r) {
        return e && e.length ? oo(e, pe(r, 2), qs) : i;
      }
      function sw(e) {
        return Tl(e, an);
      }
      function uw(e, r) {
        return Tl(e, pe(r, 2));
      }
      function cw(e) {
        return e && e.length ? oo(e, an, Ks) : i;
      }
      function lw(e, r) {
        return e && e.length ? oo(e, pe(r, 2), Ks) : i;
      }
      var fw = po(function(e, r) {
        return e * r;
      }, 1), hw = ou("round"), dw = po(function(e, r) {
        return e - r;
      }, 0);
      function pw(e) {
        return e && e.length ? Ns(e, an) : 0;
      }
      function vw(e, r) {
        return e && e.length ? Ns(e, pe(r, 2)) : 0;
      }
      return d.after = Fy, d.ary = Zf, d.assign = O1, d.assignIn = dh, d.assignInWith = To, d.assignWith = x1, d.at = C1, d.before = eh, d.bind = yu, d.bindAll = Lb, d.bindKey = th, d.castArray = Ky, d.chain = Qf, d.chunk = i0, d.compact = a0, d.concat = o0, d.cond = Pb, d.conforms = Nb, d.constant = xu, d.countBy = py, d.create = T1, d.curry = nh, d.curryRight = rh, d.debounce = ih, d.defaults = S1, d.defaultsDeep = D1, d.defer = By, d.delay = Wy, d.difference = s0, d.differenceBy = u0, d.differenceWith = c0, d.drop = l0, d.dropRight = f0, d.dropRightWhile = h0, d.dropWhile = d0, d.fill = p0, d.filter = my, d.flatMap = by, d.flatMapDeep = wy, d.flatMapDepth = _y, d.flatten = Yf, d.flattenDeep = v0, d.flattenDepth = m0, d.flip = Uy, d.flow = Mb, d.flowRight = kb, d.fromPairs = g0, d.functions = k1, d.functionsIn = F1, d.groupBy = Ay, d.initial = b0, d.intersection = w0, d.intersectionBy = _0, d.intersectionWith = A0, d.invert = W1, d.invertBy = U1, d.invokeMap = Oy, d.iteratee = Cu, d.keyBy = xy, d.keys = Ft, d.keysIn = rn, d.map = _o, d.mapKeys = H1, d.mapValues = j1, d.matches = Fb, d.matchesProperty = Bb, d.memoize = Eo, d.merge = $1, d.mergeWith = ph, d.method = Wb, d.methodOf = Ub, d.mixin = Tu, d.negate = Oo, d.nthArg = Hb, d.omit = q1, d.omitBy = Y1, d.once = zy, d.orderBy = Cy, d.over = jb, d.overArgs = Hy, d.overEvery = $b, d.overSome = qb, d.partial = bu, d.partialRight = ah, d.partition = Ty, d.pick = G1, d.pickBy = vh, d.property = Ah, d.propertyOf = Yb, d.pull = C0, d.pullAll = Vf, d.pullAllBy = T0, d.pullAllWith = S0, d.pullAt = D0, d.range = Gb, d.rangeRight = Vb, d.rearg = jy, d.reject = Ry, d.remove = R0, d.rest = $y, d.reverse = mu, d.sampleSize = Py, d.set = K1, d.setWith = Q1, d.shuffle = Ny, d.slice = L0, d.sortBy = ky, d.sortedUniq = B0, d.sortedUniqBy = W0, d.split = bb, d.spread = qy, d.tail = U0, d.take = z0, d.takeRight = H0, d.takeRightWhile = j0, d.takeWhile = $0, d.tap = ay, d.throttle = Yy, d.thru = wo, d.toArray = lh, d.toPairs = mh, d.toPairsIn = gh, d.toPath = Zb, d.toPlainObject = hh, d.transform = X1, d.unary = Gy, d.union = q0, d.unionBy = Y0, d.unionWith = G0, d.uniq = V0, d.uniqBy = K0, d.uniqWith = Q0, d.unset = J1, d.unzip = gu, d.unzipWith = Kf, d.update = Z1, d.updateWith = eb, d.values = xi, d.valuesIn = tb, d.without = X0, d.words = wh, d.wrap = Vy, d.xor = J0, d.xorBy = Z0, d.xorWith = ey, d.zip = ty, d.zipObject = ny, d.zipObjectDeep = ry, d.zipWith = iy, d.entries = mh, d.entriesIn = gh, d.extend = dh, d.extendWith = To, Tu(d, d), d.add = tw, d.attempt = _h, d.camelCase = ab, d.capitalize = yh, d.ceil = nw, d.clamp = nb, d.clone = Qy, d.cloneDeep = Jy, d.cloneDeepWith = Zy, d.cloneWith = Xy, d.conformsTo = e1, d.deburr = bh, d.defaultTo = Ib, d.divide = rw, d.endsWith = ob, d.eq = kn, d.escape = sb, d.escapeRegExp = ub, d.every = vy, d.find = gy, d.findIndex = $f, d.findKey = R1, d.findLast = yy, d.findLastIndex = qf, d.findLastKey = L1, d.floor = iw, d.forEach = Xf, d.forEachRight = Jf, d.forIn = P1, d.forInRight = N1, d.forOwn = I1, d.forOwnRight = M1, d.get = Au, d.gt = t1, d.gte = n1, d.has = B1, d.hasIn = Eu, d.head = Gf, d.identity = an, d.includes = Ey, d.indexOf = y0, d.inRange = rb, d.invoke = z1, d.isArguments = Qr, d.isArray = Oe, d.isArrayBuffer = r1, d.isArrayLike = nn, d.isArrayLikeObject = xt, d.isBoolean = i1, d.isBuffer = Cr, d.isDate = a1, d.isElement = o1, d.isEmpty = s1, d.isEqual = u1, d.isEqualWith = c1, d.isError = wu, d.isFinite = l1, d.isFunction = ur, d.isInteger = oh, d.isLength = xo, d.isMap = sh, d.isMatch = f1, d.isMatchWith = h1, d.isNaN = d1, d.isNative = p1, d.isNil = m1, d.isNull = v1, d.isNumber = uh, d.isObject = bt, d.isObjectLike = At, d.isPlainObject = fa, d.isRegExp = _u, d.isSafeInteger = g1, d.isSet = ch, d.isString = Co, d.isSymbol = fn, d.isTypedArray = Oi, d.isUndefined = y1, d.isWeakMap = b1, d.isWeakSet = w1, d.join = E0, d.kebabCase = cb, d.last = xn, d.lastIndexOf = O0, d.lowerCase = lb, d.lowerFirst = fb, d.lt = _1, d.lte = A1, d.max = aw, d.maxBy = ow, d.mean = sw, d.meanBy = uw, d.min = cw, d.minBy = lw, d.stubArray = Du, d.stubFalse = Ru, d.stubObject = Kb, d.stubString = Qb, d.stubTrue = Xb, d.multiply = fw, d.nth = x0, d.noConflict = zb, d.noop = Su, d.now = Ao, d.pad = hb, d.padEnd = db, d.padStart = pb, d.parseInt = vb, d.random = ib, d.reduce = Sy, d.reduceRight = Dy, d.repeat = mb, d.replace = gb, d.result = V1, d.round = hw, d.runInContext = R, d.sample = Ly, d.size = Iy, d.snakeCase = yb, d.some = My, d.sortedIndex = P0, d.sortedIndexBy = N0, d.sortedIndexOf = I0, d.sortedLastIndex = M0, d.sortedLastIndexBy = k0, d.sortedLastIndexOf = F0, d.startCase = wb, d.startsWith = _b, d.subtract = dw, d.sum = pw, d.sumBy = vw, d.template = Ab, d.times = Jb, d.toFinite = cr, d.toInteger = Se, d.toLength = fh, d.toLower = Eb, d.toNumber = Cn, d.toSafeInteger = E1, d.toString = Ke, d.toUpper = Ob, d.trim = xb, d.trimEnd = Cb, d.trimStart = Tb, d.truncate = Sb, d.unescape = Db, d.uniqueId = ew, d.upperCase = Rb, d.upperFirst = Ou, d.each = Xf, d.eachRight = Jf, d.first = Gf, Tu(d, function() {
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
        ke.prototype[e] = function(h) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: pe(h, 3),
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
        return this.filter(Oo(pe(e)));
      }, ke.prototype.slice = function(e, r) {
        e = Se(e);
        var o = this;
        return o.__filtered__ && (e > 0 || r < 0) ? new ke(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), r !== i && (r = Se(r), o = r < 0 ? o.dropRight(-r) : o.take(r - e)), o);
      }, ke.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ke.prototype.toArray = function() {
        return this.take(P);
      }, Hn(ke.prototype, function(e, r) {
        var o = /^(?:filter|find|map|reject)|While$/.test(r), u = /^(?:head|last)$/.test(r), h = d[u ? "take" + (r == "last" ? "Right" : "") : r], p = u || /^find/.test(r);
        h && (d.prototype[r] = function() {
          var A = this.__wrapped__, T = u ? [1] : arguments, L = A instanceof ke, j = T[0], $ = L || Oe(A), Q = function(Me) {
            var Ue = h.apply(d, br([Me], T));
            return u && re ? Ue[0] : Ue;
          };
          $ && o && typeof j == "function" && j.length != 1 && (L = $ = !1);
          var re = this.__chain__, le = !!this.__actions__.length, ve = p && !re, De = L && !le;
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
          var h = arguments;
          if (u && !this.__chain__) {
            var p = this.value();
            return r.apply(Oe(p) ? p : [], h);
          }
          return this[o](function(A) {
            return r.apply(Oe(A) ? A : [], h);
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
      }], ke.prototype.clone = Dm, ke.prototype.reverse = Rm, ke.prototype.value = Lm, d.prototype.at = oy, d.prototype.chain = sy, d.prototype.commit = uy, d.prototype.next = cy, d.prototype.plant = fy, d.prototype.reverse = hy, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = dy, d.prototype.first = d.prototype.head, Ji && (d.prototype[Ji] = ly), d;
    }, mi = um();
    Hr ? ((Hr.exports = mi)._ = mi, Cs._ = mi) : Ut._ = mi;
  }).call(hr);
})(Ho, Ho.exports);
var o_ = Ho.exports;
class s_ {
  constructor(n) {
    this.session = n;
  }
  get name() {
    return this.session.user.name;
  }
  get isLockedSession() {
    return !!this.session.locked;
  }
  getGroup() {
    return this.session.user.group_code;
  }
  can(n) {
    return n ? Array.isArray(n) ? this.canAll(n) : typeof n == "function" ? n(this) : this.session.perms[n] || !1 : !0;
  }
  canAll(n) {
    return o_.every(n.map((i) => this.can(i)));
  }
  canNot(n) {
    return !this.can(n);
  }
  canAny(n) {
    return n.findIndex((i) => this.can(i)) >= 0;
  }
}
function u_(t) {
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
      for (var s = "", c = i + 1; c < t.length; ) {
        var l = t.charCodeAt(c);
        if (
          // `0-9`
          l >= 48 && l <= 57 || // `A-Z`
          l >= 65 && l <= 90 || // `a-z`
          l >= 97 && l <= 122 || // `_`
          l === 95
        ) {
          s += t[c++];
          continue;
        }
        break;
      }
      if (!s)
        throw new TypeError("Missing parameter name at ".concat(i));
      n.push({ type: "NAME", index: i, value: s }), i = c;
      continue;
    }
    if (a === "(") {
      var f = 1, b = "", c = i + 1;
      if (t[c] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(c));
      for (; c < t.length; ) {
        if (t[c] === "\\") {
          b += t[c++] + t[c++];
          continue;
        }
        if (t[c] === ")") {
          if (f--, f === 0) {
            c++;
            break;
          }
        } else if (t[c] === "(" && (f++, t[c + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(c));
        b += t[c++];
      }
      if (f)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!b)
        throw new TypeError("Missing pattern at ".concat(i));
      n.push({ type: "PATTERN", index: i, value: b }), i = c;
      continue;
    }
    n.push({ type: "CHAR", index: i, value: t[i++] });
  }
  return n.push({ type: "END", index: i, value: "" }), n;
}
function jd(t, n) {
  n === void 0 && (n = {});
  for (var i = u_(t), a = n.prefixes, s = a === void 0 ? "./" : a, c = "[^".concat(Si(n.delimiter || "/#?"), "]+?"), l = [], f = 0, b = 0, m = "", y = function(oe) {
    if (b < i.length && i[b].type === oe)
      return i[b++].value;
  }, v = function(oe) {
    var de = y(oe);
    if (de !== void 0)
      return de;
    var ie = i[b], fe = ie.type, Fe = ie.index;
    throw new TypeError("Unexpected ".concat(fe, " at ").concat(Fe, ", expected ").concat(oe));
  }, C = function() {
    for (var oe = "", de; de = y("CHAR") || y("ESCAPED_CHAR"); )
      oe += de;
    return oe;
  }; b < i.length; ) {
    var _ = y("CHAR"), w = y("NAME"), E = y("PATTERN");
    if (w || E) {
      var x = _ || "";
      s.indexOf(x) === -1 && (m += x, x = ""), m && (l.push(m), m = ""), l.push({
        name: w || f++,
        prefix: x,
        suffix: "",
        pattern: E || c,
        modifier: y("MODIFIER") || ""
      });
      continue;
    }
    var D = _ || y("ESCAPED_CHAR");
    if (D) {
      m += D;
      continue;
    }
    m && (l.push(m), m = "");
    var B = y("OPEN");
    if (B) {
      var x = C(), M = y("NAME") || "", U = y("PATTERN") || "", ee = C();
      v("CLOSE"), l.push({
        name: M || (U ? f++ : ""),
        pattern: M && !U ? c : U,
        prefix: x,
        suffix: ee,
        modifier: y("MODIFIER") || ""
      });
      continue;
    }
    v("END");
  }
  return l;
}
function rC(t, n) {
  return c_(jd(t, n), n);
}
function c_(t, n) {
  n === void 0 && (n = {});
  var i = Dc(n), a = n.encode, s = a === void 0 ? function(b) {
    return b;
  } : a, c = n.validate, l = c === void 0 ? !0 : c, f = t.map(function(b) {
    if (typeof b == "object")
      return new RegExp("^(?:".concat(b.pattern, ")$"), i);
  });
  return function(b) {
    for (var m = "", y = 0; y < t.length; y++) {
      var v = t[y];
      if (typeof v == "string") {
        m += v;
        continue;
      }
      var C = b ? b[v.name] : void 0, _ = v.modifier === "?" || v.modifier === "*", w = v.modifier === "*" || v.modifier === "+";
      if (Array.isArray(C)) {
        if (!w)
          throw new TypeError('Expected "'.concat(v.name, '" to not repeat, but got an array'));
        if (C.length === 0) {
          if (_)
            continue;
          throw new TypeError('Expected "'.concat(v.name, '" to not be empty'));
        }
        for (var E = 0; E < C.length; E++) {
          var x = s(C[E], v);
          if (l && !f[y].test(x))
            throw new TypeError('Expected all "'.concat(v.name, '" to match "').concat(v.pattern, '", but got "').concat(x, '"'));
          m += v.prefix + x + v.suffix;
        }
        continue;
      }
      if (typeof C == "string" || typeof C == "number") {
        var x = s(String(C), v);
        if (l && !f[y].test(x))
          throw new TypeError('Expected "'.concat(v.name, '" to match "').concat(v.pattern, '", but got "').concat(x, '"'));
        m += v.prefix + x + v.suffix;
        continue;
      }
      if (!_) {
        var D = w ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(v.name, '" to be ').concat(D));
      }
    }
    return m;
  };
}
function l_(t, n) {
  var i = [], a = $d(t, i, n);
  return f_(a, i, n);
}
function f_(t, n, i) {
  i === void 0 && (i = {});
  var a = i.decode, s = a === void 0 ? function(c) {
    return c;
  } : a;
  return function(c) {
    var l = t.exec(c);
    if (!l)
      return !1;
    for (var f = l[0], b = l.index, m = /* @__PURE__ */ Object.create(null), y = function(C) {
      if (l[C] === void 0)
        return "continue";
      var _ = n[C - 1];
      _.modifier === "*" || _.modifier === "+" ? m[_.name] = l[C].split(_.prefix + _.suffix).map(function(w) {
        return s(w, _);
      }) : m[_.name] = s(l[C], _);
    }, v = 1; v < l.length; v++)
      y(v);
    return { path: f, index: b, params: m };
  };
}
function Si(t) {
  return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Dc(t) {
  return t && t.sensitive ? "" : "i";
}
function h_(t, n) {
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
function d_(t, n, i) {
  var a = t.map(function(s) {
    return $d(s, n, i).source;
  });
  return new RegExp("(?:".concat(a.join("|"), ")"), Dc(i));
}
function p_(t, n, i) {
  return v_(jd(t, i), n, i);
}
function v_(t, n, i) {
  i === void 0 && (i = {});
  for (var a = i.strict, s = a === void 0 ? !1 : a, c = i.start, l = c === void 0 ? !0 : c, f = i.end, b = f === void 0 ? !0 : f, m = i.encode, y = m === void 0 ? function(Fe) {
    return Fe;
  } : m, v = i.delimiter, C = v === void 0 ? "/#?" : v, _ = i.endsWith, w = _ === void 0 ? "" : _, E = "[".concat(Si(w), "]|$"), x = "[".concat(Si(C), "]"), D = l ? "^" : "", B = 0, M = t; B < M.length; B++) {
    var U = M[B];
    if (typeof U == "string")
      D += Si(y(U));
    else {
      var ee = Si(y(U.prefix)), oe = Si(y(U.suffix));
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
  if (b)
    s || (D += "".concat(x, "?")), D += i.endsWith ? "(?=".concat(E, ")") : "$";
  else {
    var ie = t[t.length - 1], fe = typeof ie == "string" ? x.indexOf(ie[ie.length - 1]) > -1 : ie === void 0;
    s || (D += "(?:".concat(x, "(?=").concat(E, "))?")), fe || (D += "(?=".concat(x, "|").concat(E, ")"));
  }
  return new RegExp(D, Dc(i));
}
function $d(t, n, i) {
  return t instanceof RegExp ? h_(t, n) : Array.isArray(t) ? d_(t, n, i) : p_(t, n, i);
}
function qd(t, n) {
  return function() {
    return t.apply(n, arguments);
  };
}
const { toString: m_ } = Object.prototype, { getPrototypeOf: Rc } = Object, as = ((t) => (n) => {
  const i = m_.call(n);
  return t[i] || (t[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), er = (t) => (t = t.toLowerCase(), (n) => as(n) === t), os = (t) => (n) => typeof n === t, { isArray: Yi } = Array, _a = os("undefined");
function g_(t) {
  return t !== null && !_a(t) && t.constructor !== null && !_a(t.constructor) && Ln(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Yd = er("ArrayBuffer");
function y_(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Yd(t.buffer), n;
}
const b_ = os("string"), Ln = os("function"), Gd = os("number"), ss = (t) => t !== null && typeof t == "object", w_ = (t) => t === !0 || t === !1, ko = (t) => {
  if (as(t) !== "object")
    return !1;
  const n = Rc(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, __ = er("Date"), A_ = er("File"), E_ = er("Blob"), O_ = er("FileList"), x_ = (t) => ss(t) && Ln(t.pipe), C_ = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || Ln(t.append) && ((n = as(t)) === "formdata" || // detect form-data instance
  n === "object" && Ln(t.toString) && t.toString() === "[object FormData]"));
}, T_ = er("URLSearchParams"), S_ = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ia(t, n, { allOwnKeys: i = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let a, s;
  if (typeof t != "object" && (t = [t]), Yi(t))
    for (a = 0, s = t.length; a < s; a++)
      n.call(null, t[a], a, t);
  else {
    const c = i ? Object.getOwnPropertyNames(t) : Object.keys(t), l = c.length;
    let f;
    for (a = 0; a < l; a++)
      f = c[a], n.call(null, t[f], f, t);
  }
}
function Vd(t, n) {
  n = n.toLowerCase();
  const i = Object.keys(t);
  let a = i.length, s;
  for (; a-- > 0; )
    if (s = i[a], n === s.toLowerCase())
      return s;
  return null;
}
const Kd = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Qd = (t) => !_a(t) && t !== Kd;
function nc() {
  const { caseless: t } = Qd(this) && this || {}, n = {}, i = (a, s) => {
    const c = t && Vd(n, s) || s;
    ko(n[c]) && ko(a) ? n[c] = nc(n[c], a) : ko(a) ? n[c] = nc({}, a) : Yi(a) ? n[c] = a.slice() : n[c] = a;
  };
  for (let a = 0, s = arguments.length; a < s; a++)
    arguments[a] && Ia(arguments[a], i);
  return n;
}
const D_ = (t, n, i, { allOwnKeys: a } = {}) => (Ia(n, (s, c) => {
  i && Ln(s) ? t[c] = qd(s, i) : t[c] = s;
}, { allOwnKeys: a }), t), R_ = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), L_ = (t, n, i, a) => {
  t.prototype = Object.create(n.prototype, a), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: n.prototype
  }), i && Object.assign(t.prototype, i);
}, P_ = (t, n, i, a) => {
  let s, c, l;
  const f = {};
  if (n = n || {}, t == null)
    return n;
  do {
    for (s = Object.getOwnPropertyNames(t), c = s.length; c-- > 0; )
      l = s[c], (!a || a(l, t, n)) && !f[l] && (n[l] = t[l], f[l] = !0);
    t = i !== !1 && Rc(t);
  } while (t && (!i || i(t, n)) && t !== Object.prototype);
  return n;
}, N_ = (t, n, i) => {
  t = String(t), (i === void 0 || i > t.length) && (i = t.length), i -= n.length;
  const a = t.indexOf(n, i);
  return a !== -1 && a === i;
}, I_ = (t) => {
  if (!t)
    return null;
  if (Yi(t))
    return t;
  let n = t.length;
  if (!Gd(n))
    return null;
  const i = new Array(n);
  for (; n-- > 0; )
    i[n] = t[n];
  return i;
}, M_ = ((t) => (n) => t && n instanceof t)(typeof Uint8Array < "u" && Rc(Uint8Array)), k_ = (t, n) => {
  const a = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = a.next()) && !s.done; ) {
    const c = s.value;
    n.call(t, c[0], c[1]);
  }
}, F_ = (t, n) => {
  let i;
  const a = [];
  for (; (i = t.exec(n)) !== null; )
    a.push(i);
  return a;
}, B_ = er("HTMLFormElement"), W_ = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, a, s) {
    return a.toUpperCase() + s;
  }
), Ih = (({ hasOwnProperty: t }) => (n, i) => t.call(n, i))(Object.prototype), U_ = er("RegExp"), Xd = (t, n) => {
  const i = Object.getOwnPropertyDescriptors(t), a = {};
  Ia(i, (s, c) => {
    let l;
    (l = n(s, c, t)) !== !1 && (a[c] = l || s);
  }), Object.defineProperties(t, a);
}, z_ = (t) => {
  Xd(t, (n, i) => {
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
}, H_ = (t, n) => {
  const i = {}, a = (s) => {
    s.forEach((c) => {
      i[c] = !0;
    });
  };
  return Yi(t) ? a(t) : a(String(t).split(n)), i;
}, j_ = () => {
}, $_ = (t, n) => (t = +t, Number.isFinite(t) ? t : n), ku = "abcdefghijklmnopqrstuvwxyz", Mh = "0123456789", Jd = {
  DIGIT: Mh,
  ALPHA: ku,
  ALPHA_DIGIT: ku + ku.toUpperCase() + Mh
}, q_ = (t = 16, n = Jd.ALPHA_DIGIT) => {
  let i = "";
  const { length: a } = n;
  for (; t--; )
    i += n[Math.random() * a | 0];
  return i;
};
function Y_(t) {
  return !!(t && Ln(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const G_ = (t) => {
  const n = new Array(10), i = (a, s) => {
    if (ss(a)) {
      if (n.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        n[s] = a;
        const c = Yi(a) ? [] : {};
        return Ia(a, (l, f) => {
          const b = i(l, s + 1);
          !_a(b) && (c[f] = b);
        }), n[s] = void 0, c;
      }
    }
    return a;
  };
  return i(t, 0);
}, V_ = er("AsyncFunction"), K_ = (t) => t && (ss(t) || Ln(t)) && Ln(t.then) && Ln(t.catch), q = {
  isArray: Yi,
  isArrayBuffer: Yd,
  isBuffer: g_,
  isFormData: C_,
  isArrayBufferView: y_,
  isString: b_,
  isNumber: Gd,
  isBoolean: w_,
  isObject: ss,
  isPlainObject: ko,
  isUndefined: _a,
  isDate: __,
  isFile: A_,
  isBlob: E_,
  isRegExp: U_,
  isFunction: Ln,
  isStream: x_,
  isURLSearchParams: T_,
  isTypedArray: M_,
  isFileList: O_,
  forEach: Ia,
  merge: nc,
  extend: D_,
  trim: S_,
  stripBOM: R_,
  inherits: L_,
  toFlatObject: P_,
  kindOf: as,
  kindOfTest: er,
  endsWith: N_,
  toArray: I_,
  forEachEntry: k_,
  matchAll: F_,
  isHTMLForm: B_,
  hasOwnProperty: Ih,
  hasOwnProp: Ih,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xd,
  freezeMethods: z_,
  toObjectSet: H_,
  toCamelCase: W_,
  noop: j_,
  toFiniteNumber: $_,
  findKey: Vd,
  global: Kd,
  isContextDefined: Qd,
  ALPHABET: Jd,
  generateString: q_,
  isSpecCompliantForm: Y_,
  toJSONObject: G_,
  isAsyncFn: V_,
  isThenable: K_
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
const Zd = He.prototype, ep = {};
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
  ep[t] = { value: t };
});
Object.defineProperties(He, ep);
Object.defineProperty(Zd, "isAxiosError", { value: !0 });
He.from = (t, n, i, a, s, c) => {
  const l = Object.create(Zd);
  return q.toFlatObject(t, l, function(b) {
    return b !== Error.prototype;
  }, (f) => f !== "isAxiosError"), He.call(l, t.message, n, i, a, s), l.cause = t, l.name = t.name, c && Object.assign(l, c), l;
};
const Q_ = null;
function rc(t) {
  return q.isPlainObject(t) || q.isArray(t);
}
function tp(t) {
  return q.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function kh(t, n, i) {
  return t ? t.concat(n).map(function(s, c) {
    return s = tp(s), !i && c ? "[" + s + "]" : s;
  }).join(i ? "." : "") : n;
}
function X_(t) {
  return q.isArray(t) && !t.some(rc);
}
const J_ = q.toFlatObject(q, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function us(t, n, i) {
  if (!q.isObject(t))
    throw new TypeError("target must be an object");
  n = n || new FormData(), i = q.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, x) {
    return !q.isUndefined(x[E]);
  });
  const a = i.metaTokens, s = i.visitor || y, c = i.dots, l = i.indexes, b = (i.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(n);
  if (!q.isFunction(s))
    throw new TypeError("visitor must be a function");
  function m(w) {
    if (w === null)
      return "";
    if (q.isDate(w))
      return w.toISOString();
    if (!b && q.isBlob(w))
      throw new He("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(w) || q.isTypedArray(w) ? b && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function y(w, E, x) {
    let D = w;
    if (w && !x && typeof w == "object") {
      if (q.endsWith(E, "{}"))
        E = a ? E : E.slice(0, -2), w = JSON.stringify(w);
      else if (q.isArray(w) && X_(w) || (q.isFileList(w) || q.endsWith(E, "[]")) && (D = q.toArray(w)))
        return E = tp(E), D.forEach(function(M, U) {
          !(q.isUndefined(M) || M === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? kh([E], U, c) : l === null ? E : E + "[]",
            m(M)
          );
        }), !1;
    }
    return rc(w) ? !0 : (n.append(kh(x, E, c), m(w)), !1);
  }
  const v = [], C = Object.assign(J_, {
    defaultVisitor: y,
    convertValue: m,
    isVisitable: rc
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
function Fh(t) {
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
function Lc(t, n) {
  this._pairs = [], t && us(t, this, n);
}
const np = Lc.prototype;
np.append = function(n, i) {
  this._pairs.push([n, i]);
};
np.toString = function(n) {
  const i = n ? function(a) {
    return n.call(this, a, Fh);
  } : Fh;
  return this._pairs.map(function(s) {
    return i(s[0]) + "=" + i(s[1]);
  }, "").join("&");
};
function Z_(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function rp(t, n, i) {
  if (!n)
    return t;
  const a = i && i.encode || Z_, s = i && i.serialize;
  let c;
  if (s ? c = s(n, i) : c = q.isURLSearchParams(n) ? n.toString() : new Lc(n, i).toString(a), c) {
    const l = t.indexOf("#");
    l !== -1 && (t = t.slice(0, l)), t += (t.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return t;
}
class eA {
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
const Bh = eA, ip = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, tA = typeof URLSearchParams < "u" ? URLSearchParams : Lc, nA = typeof FormData < "u" ? FormData : null, rA = typeof Blob < "u" ? Blob : null, iA = {
  isBrowser: !0,
  classes: {
    URLSearchParams: tA,
    FormData: nA,
    Blob: rA
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ap = typeof window < "u" && typeof document < "u", aA = ((t) => ap && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), oA = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), sA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ap,
  hasStandardBrowserEnv: aA,
  hasStandardBrowserWebWorkerEnv: oA
}, Symbol.toStringTag, { value: "Module" })), Jn = {
  ...sA,
  ...iA
};
function uA(t, n) {
  return us(t, new Jn.classes.URLSearchParams(), Object.assign({
    visitor: function(i, a, s, c) {
      return Jn.isNode && q.isBuffer(i) ? (this.append(a, i.toString("base64")), !1) : c.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function cA(t) {
  return q.matchAll(/\w+|\[(\w*)]/g, t).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function lA(t) {
  const n = {}, i = Object.keys(t);
  let a;
  const s = i.length;
  let c;
  for (a = 0; a < s; a++)
    c = i[a], n[c] = t[c];
  return n;
}
function op(t) {
  function n(i, a, s, c) {
    let l = i[c++];
    if (l === "__proto__")
      return !0;
    const f = Number.isFinite(+l), b = c >= i.length;
    return l = !l && q.isArray(s) ? s.length : l, b ? (q.hasOwnProp(s, l) ? s[l] = [s[l], a] : s[l] = a, !f) : ((!s[l] || !q.isObject(s[l])) && (s[l] = []), n(i, a, s[l], c) && q.isArray(s[l]) && (s[l] = lA(s[l])), !f);
  }
  if (q.isFormData(t) && q.isFunction(t.entries)) {
    const i = {};
    return q.forEachEntry(t, (a, s) => {
      n(cA(a), s, i, 0);
    }), i;
  }
  return null;
}
function fA(t, n, i) {
  if (q.isString(t))
    try {
      return (n || JSON.parse)(t), q.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (i || JSON.stringify)(t);
}
const Pc = {
  transitional: ip,
  adapter: ["xhr", "http"],
  transformRequest: [function(n, i) {
    const a = i.getContentType() || "", s = a.indexOf("application/json") > -1, c = q.isObject(n);
    if (c && q.isHTMLForm(n) && (n = new FormData(n)), q.isFormData(n))
      return s ? JSON.stringify(op(n)) : n;
    if (q.isArrayBuffer(n) || q.isBuffer(n) || q.isStream(n) || q.isFile(n) || q.isBlob(n))
      return n;
    if (q.isArrayBufferView(n))
      return n.buffer;
    if (q.isURLSearchParams(n))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let f;
    if (c) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return uA(n, this.formSerializer).toString();
      if ((f = q.isFileList(n)) || a.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return us(
          f ? { "files[]": n } : n,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return c || s ? (i.setContentType("application/json", !1), fA(n)) : n;
  }],
  transformResponse: [function(n) {
    const i = this.transitional || Pc.transitional, a = i && i.forcedJSONParsing, s = this.responseType === "json";
    if (n && q.isString(n) && (a && !this.responseType || s)) {
      const l = !(i && i.silentJSONParsing) && s;
      try {
        return JSON.parse(n);
      } catch (f) {
        if (l)
          throw f.name === "SyntaxError" ? He.from(f, He.ERR_BAD_RESPONSE, this, null, this.response) : f;
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
  Pc.headers[t] = {};
});
const Nc = Pc, hA = q.toObjectSet([
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
]), dA = (t) => {
  const n = {};
  let i, a, s;
  return t && t.split(`
`).forEach(function(l) {
    s = l.indexOf(":"), i = l.substring(0, s).trim().toLowerCase(), a = l.substring(s + 1).trim(), !(!i || n[i] && hA[i]) && (i === "set-cookie" ? n[i] ? n[i].push(a) : n[i] = [a] : n[i] = n[i] ? n[i] + ", " + a : a);
  }), n;
}, Wh = Symbol("internals");
function ha(t) {
  return t && String(t).trim().toLowerCase();
}
function Fo(t) {
  return t === !1 || t == null ? t : q.isArray(t) ? t.map(Fo) : String(t);
}
function pA(t) {
  const n = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = i.exec(t); )
    n[a[1]] = a[2];
  return n;
}
const vA = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
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
function mA(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, i, a) => i.toUpperCase() + a);
}
function gA(t, n) {
  const i = q.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(t, a + i, {
      value: function(s, c, l) {
        return this[a].call(this, n, s, c, l);
      },
      configurable: !0
    });
  });
}
class cs {
  constructor(n) {
    n && this.set(n);
  }
  set(n, i, a) {
    const s = this;
    function c(f, b, m) {
      const y = ha(b);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const v = q.findKey(s, y);
      (!v || s[v] === void 0 || m === !0 || m === void 0 && s[v] !== !1) && (s[v || b] = Fo(f));
    }
    const l = (f, b) => q.forEach(f, (m, y) => c(m, y, b));
    return q.isPlainObject(n) || n instanceof this.constructor ? l(n, i) : q.isString(n) && (n = n.trim()) && !vA(n) ? l(dA(n), i) : n != null && c(i, n, a), this;
  }
  get(n, i) {
    if (n = ha(n), n) {
      const a = q.findKey(this, n);
      if (a) {
        const s = this[a];
        if (!i)
          return s;
        if (i === !0)
          return pA(s);
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
    function c(l) {
      if (l = ha(l), l) {
        const f = q.findKey(a, l);
        f && (!i || Fu(a, a[f], f, i)) && (delete a[f], s = !0);
      }
    }
    return q.isArray(n) ? n.forEach(c) : c(n), s;
  }
  clear(n) {
    const i = Object.keys(this);
    let a = i.length, s = !1;
    for (; a--; ) {
      const c = i[a];
      (!n || Fu(this, this[c], c, n, !0)) && (delete this[c], s = !0);
    }
    return s;
  }
  normalize(n) {
    const i = this, a = {};
    return q.forEach(this, (s, c) => {
      const l = q.findKey(a, c);
      if (l) {
        i[l] = Fo(s), delete i[c];
        return;
      }
      const f = n ? mA(c) : String(c).trim();
      f !== c && delete i[c], i[f] = Fo(s), a[f] = !0;
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
    const a = (this[Wh] = this[Wh] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function c(l) {
      const f = ha(l);
      a[f] || (gA(s, l), a[f] = !0);
    }
    return q.isArray(n) ? n.forEach(c) : c(n), this;
  }
}
cs.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
q.reduceDescriptors(cs.prototype, ({ value: t }, n) => {
  let i = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(a) {
      this[i] = a;
    }
  };
});
q.freezeMethods(cs);
const pr = cs;
function Bu(t, n) {
  const i = this || Nc, a = n || i, s = pr.from(a.headers);
  let c = a.data;
  return q.forEach(t, function(f) {
    c = f.call(i, c, s.normalize(), n ? n.status : void 0);
  }), s.normalize(), c;
}
function sp(t) {
  return !!(t && t.__CANCEL__);
}
function Ma(t, n, i) {
  He.call(this, t ?? "canceled", He.ERR_CANCELED, n, i), this.name = "CanceledError";
}
q.inherits(Ma, He, {
  __CANCEL__: !0
});
function yA(t, n, i) {
  const a = i.config.validateStatus;
  !i.status || !a || a(i.status) ? t(i) : n(new He(
    "Request failed with status code " + i.status,
    [He.ERR_BAD_REQUEST, He.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
const bA = Jn.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, n, i, a, s, c) {
      const l = [t + "=" + encodeURIComponent(n)];
      q.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()), q.isString(a) && l.push("path=" + a), q.isString(s) && l.push("domain=" + s), c === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function wA(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function _A(t, n) {
  return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
}
function up(t, n) {
  return t && !wA(n) ? _A(t, n) : n;
}
const AA = Jn.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const n = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
    let a;
    function s(c) {
      let l = c;
      return n && (i.setAttribute("href", l), l = i.href), i.setAttribute("href", l), {
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
    return a = s(window.location.href), function(l) {
      const f = q.isString(l) ? s(l) : l;
      return f.protocol === a.protocol && f.host === a.host;
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
function EA(t) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return n && n[1] || "";
}
function OA(t, n) {
  t = t || 10;
  const i = new Array(t), a = new Array(t);
  let s = 0, c = 0, l;
  return n = n !== void 0 ? n : 1e3, function(b) {
    const m = Date.now(), y = a[c];
    l || (l = m), i[s] = b, a[s] = m;
    let v = c, C = 0;
    for (; v !== s; )
      C += i[v++], v = v % t;
    if (s = (s + 1) % t, s === c && (c = (c + 1) % t), m - l < n)
      return;
    const _ = y && m - y;
    return _ ? Math.round(C * 1e3 / _) : void 0;
  };
}
function Uh(t, n) {
  let i = 0;
  const a = OA(50, 250);
  return (s) => {
    const c = s.loaded, l = s.lengthComputable ? s.total : void 0, f = c - i, b = a(f), m = c <= l;
    i = c;
    const y = {
      loaded: c,
      total: l,
      progress: l ? c / l : void 0,
      bytes: f,
      rate: b || void 0,
      estimated: b && l && m ? (l - c) / b : void 0,
      event: s
    };
    y[n ? "download" : "upload"] = !0, t(y);
  };
}
const xA = typeof XMLHttpRequest < "u", CA = xA && function(t) {
  return new Promise(function(i, a) {
    let s = t.data;
    const c = pr.from(t.headers).normalize();
    let { responseType: l, withXSRFToken: f } = t, b;
    function m() {
      t.cancelToken && t.cancelToken.unsubscribe(b), t.signal && t.signal.removeEventListener("abort", b);
    }
    let y;
    if (q.isFormData(s)) {
      if (Jn.hasStandardBrowserEnv || Jn.hasStandardBrowserWebWorkerEnv)
        c.setContentType(!1);
      else if ((y = c.getContentType()) !== !1) {
        const [E, ...x] = y ? y.split(";").map((D) => D.trim()).filter(Boolean) : [];
        c.setContentType([E || "multipart/form-data", ...x].join("; "));
      }
    }
    let v = new XMLHttpRequest();
    if (t.auth) {
      const E = t.auth.username || "", x = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      c.set("Authorization", "Basic " + btoa(E + ":" + x));
    }
    const C = up(t.baseURL, t.url);
    v.open(t.method.toUpperCase(), rp(C, t.params, t.paramsSerializer), !0), v.timeout = t.timeout;
    function _() {
      if (!v)
        return;
      const E = pr.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), D = {
        data: !l || l === "text" || l === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: E,
        config: t,
        request: v
      };
      yA(function(M) {
        i(M), m();
      }, function(M) {
        a(M), m();
      }, D), v = null;
    }
    if ("onloadend" in v ? v.onloadend = _ : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, v.onabort = function() {
      v && (a(new He("Request aborted", He.ECONNABORTED, t, v)), v = null);
    }, v.onerror = function() {
      a(new He("Network Error", He.ERR_NETWORK, t, v)), v = null;
    }, v.ontimeout = function() {
      let x = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const D = t.transitional || ip;
      t.timeoutErrorMessage && (x = t.timeoutErrorMessage), a(new He(
        x,
        D.clarifyTimeoutError ? He.ETIMEDOUT : He.ECONNABORTED,
        t,
        v
      )), v = null;
    }, Jn.hasStandardBrowserEnv && (f && q.isFunction(f) && (f = f(t)), f || f !== !1 && AA(C))) {
      const E = t.xsrfHeaderName && t.xsrfCookieName && bA.read(t.xsrfCookieName);
      E && c.set(t.xsrfHeaderName, E);
    }
    s === void 0 && c.setContentType(null), "setRequestHeader" in v && q.forEach(c.toJSON(), function(x, D) {
      v.setRequestHeader(D, x);
    }), q.isUndefined(t.withCredentials) || (v.withCredentials = !!t.withCredentials), l && l !== "json" && (v.responseType = t.responseType), typeof t.onDownloadProgress == "function" && v.addEventListener("progress", Uh(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && v.upload && v.upload.addEventListener("progress", Uh(t.onUploadProgress)), (t.cancelToken || t.signal) && (b = (E) => {
      v && (a(!E || E.type ? new Ma(null, t, v) : E), v.abort(), v = null);
    }, t.cancelToken && t.cancelToken.subscribe(b), t.signal && (t.signal.aborted ? b() : t.signal.addEventListener("abort", b)));
    const w = EA(C);
    if (w && Jn.protocols.indexOf(w) === -1) {
      a(new He("Unsupported protocol " + w + ":", He.ERR_BAD_REQUEST, t));
      return;
    }
    v.send(s || null);
  });
}, ic = {
  http: Q_,
  xhr: CA
};
q.forEach(ic, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const zh = (t) => `- ${t}`, TA = (t) => q.isFunction(t) || t === null || t === !1, cp = {
  getAdapter: (t) => {
    t = q.isArray(t) ? t : [t];
    const { length: n } = t;
    let i, a;
    const s = {};
    for (let c = 0; c < n; c++) {
      i = t[c];
      let l;
      if (a = i, !TA(i) && (a = ic[(l = String(i)).toLowerCase()], a === void 0))
        throw new He(`Unknown adapter '${l}'`);
      if (a)
        break;
      s[l || "#" + c] = a;
    }
    if (!a) {
      const c = Object.entries(s).map(
        ([f, b]) => `adapter ${f} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = n ? c.length > 1 ? `since :
` + c.map(zh).join(`
`) : " " + zh(c[0]) : "as no adapter specified";
      throw new He(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: ic
};
function Wu(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ma(null, t);
}
function Hh(t) {
  return Wu(t), t.headers = pr.from(t.headers), t.data = Bu.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), cp.getAdapter(t.adapter || Nc.adapter)(t).then(function(a) {
    return Wu(t), a.data = Bu.call(
      t,
      t.transformResponse,
      a
    ), a.headers = pr.from(a.headers), a;
  }, function(a) {
    return sp(a) || (Wu(t), a && a.response && (a.response.data = Bu.call(
      t,
      t.transformResponse,
      a.response
    ), a.response.headers = pr.from(a.response.headers))), Promise.reject(a);
  });
}
const jh = (t) => t instanceof pr ? t.toJSON() : t;
function qi(t, n) {
  n = n || {};
  const i = {};
  function a(m, y, v) {
    return q.isPlainObject(m) && q.isPlainObject(y) ? q.merge.call({ caseless: v }, m, y) : q.isPlainObject(y) ? q.merge({}, y) : q.isArray(y) ? y.slice() : y;
  }
  function s(m, y, v) {
    if (q.isUndefined(y)) {
      if (!q.isUndefined(m))
        return a(void 0, m, v);
    } else
      return a(m, y, v);
  }
  function c(m, y) {
    if (!q.isUndefined(y))
      return a(void 0, y);
  }
  function l(m, y) {
    if (q.isUndefined(y)) {
      if (!q.isUndefined(m))
        return a(void 0, m);
    } else
      return a(void 0, y);
  }
  function f(m, y, v) {
    if (v in n)
      return a(m, y);
    if (v in t)
      return a(void 0, m);
  }
  const b = {
    url: c,
    method: c,
    data: c,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: f,
    headers: (m, y) => s(jh(m), jh(y), !0)
  };
  return q.forEach(Object.keys(Object.assign({}, t, n)), function(y) {
    const v = b[y] || s, C = v(t[y], n[y], y);
    q.isUndefined(C) && v !== f || (i[y] = C);
  }), i;
}
const lp = "1.6.7", Ic = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
  Ic[t] = function(a) {
    return typeof a === t || "a" + (n < 1 ? "n " : " ") + t;
  };
});
const $h = {};
Ic.transitional = function(n, i, a) {
  function s(c, l) {
    return "[Axios v" + lp + "] Transitional option '" + c + "'" + l + (a ? ". " + a : "");
  }
  return (c, l, f) => {
    if (n === !1)
      throw new He(
        s(l, " has been removed" + (i ? " in " + i : "")),
        He.ERR_DEPRECATED
      );
    return i && !$h[l] && ($h[l] = !0, console.warn(
      s(
        l,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), n ? n(c, l, f) : !0;
  };
};
function SA(t, n, i) {
  if (typeof t != "object")
    throw new He("options must be an object", He.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(t);
  let s = a.length;
  for (; s-- > 0; ) {
    const c = a[s], l = n[c];
    if (l) {
      const f = t[c], b = f === void 0 || l(f, c, t);
      if (b !== !0)
        throw new He("option " + c + " must be " + b, He.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new He("Unknown option " + c, He.ERR_BAD_OPTION);
  }
}
const ac = {
  assertOptions: SA,
  validators: Ic
}, Tr = ac.validators;
class jo {
  constructor(n) {
    this.defaults = n, this.interceptors = {
      request: new Bh(),
      response: new Bh()
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
        const c = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        a.stack ? c && !String(a.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + c) : a.stack = c;
      }
      throw a;
    }
  }
  _request(n, i) {
    typeof n == "string" ? (i = i || {}, i.url = n) : i = n || {}, i = qi(this.defaults, i);
    const { transitional: a, paramsSerializer: s, headers: c } = i;
    a !== void 0 && ac.assertOptions(a, {
      silentJSONParsing: Tr.transitional(Tr.boolean),
      forcedJSONParsing: Tr.transitional(Tr.boolean),
      clarifyTimeoutError: Tr.transitional(Tr.boolean)
    }, !1), s != null && (q.isFunction(s) ? i.paramsSerializer = {
      serialize: s
    } : ac.assertOptions(s, {
      encode: Tr.function,
      serialize: Tr.function
    }, !0)), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let l = c && q.merge(
      c.common,
      c[i.method]
    );
    c && q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete c[w];
      }
    ), i.headers = pr.concat(l, c);
    const f = [];
    let b = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(i) === !1 || (b = b && E.synchronous, f.unshift(E.fulfilled, E.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(E) {
      m.push(E.fulfilled, E.rejected);
    });
    let y, v = 0, C;
    if (!b) {
      const w = [Hh.bind(this), void 0];
      for (w.unshift.apply(w, f), w.push.apply(w, m), C = w.length, y = Promise.resolve(i); v < C; )
        y = y.then(w[v++], w[v++]);
      return y;
    }
    C = f.length;
    let _ = i;
    for (v = 0; v < C; ) {
      const w = f[v++], E = f[v++];
      try {
        _ = w(_);
      } catch (x) {
        E.call(this, x);
        break;
      }
    }
    try {
      y = Hh.call(this, _);
    } catch (w) {
      return Promise.reject(w);
    }
    for (v = 0, C = m.length; v < C; )
      y = y.then(m[v++], m[v++]);
    return y;
  }
  getUri(n) {
    n = qi(this.defaults, n);
    const i = up(n.baseURL, n.url);
    return rp(i, n.params, n.paramsSerializer);
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
    return function(c, l, f) {
      return this.request(qi(f || {}, {
        method: n,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: l
      }));
    };
  }
  jo.prototype[n] = i(), jo.prototype[n + "Form"] = i(!0);
});
const Bo = jo;
class Mc {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(c) {
      i = c;
    });
    const a = this;
    this.promise.then((s) => {
      if (!a._listeners)
        return;
      let c = a._listeners.length;
      for (; c-- > 0; )
        a._listeners[c](s);
      a._listeners = null;
    }), this.promise.then = (s) => {
      let c;
      const l = new Promise((f) => {
        a.subscribe(f), c = f;
      }).then(s);
      return l.cancel = function() {
        a.unsubscribe(c);
      }, l;
    }, n(function(c, l, f) {
      a.reason || (a.reason = new Ma(c, l, f), i(a.reason));
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
      token: new Mc(function(s) {
        n = s;
      }),
      cancel: n
    };
  }
}
const DA = Mc;
function RA(t) {
  return function(i) {
    return t.apply(null, i);
  };
}
function LA(t) {
  return q.isObject(t) && t.isAxiosError === !0;
}
const oc = {
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
Object.entries(oc).forEach(([t, n]) => {
  oc[n] = t;
});
const PA = oc;
function fp(t) {
  const n = new Bo(t), i = qd(Bo.prototype.request, n);
  return q.extend(i, Bo.prototype, n, { allOwnKeys: !0 }), q.extend(i, n, null, { allOwnKeys: !0 }), i.create = function(s) {
    return fp(qi(t, s));
  }, i;
}
const Tt = fp(Nc);
Tt.Axios = Bo;
Tt.CanceledError = Ma;
Tt.CancelToken = DA;
Tt.isCancel = sp;
Tt.VERSION = lp;
Tt.toFormData = us;
Tt.AxiosError = He;
Tt.Cancel = Tt.CanceledError;
Tt.all = function(n) {
  return Promise.all(n);
};
Tt.spread = RA;
Tt.isAxiosError = LA;
Tt.mergeConfig = qi;
Tt.AxiosHeaders = pr;
Tt.formToJSON = (t) => op(q.isHTMLForm(t) ? new FormData(t) : t);
Tt.getAdapter = cp.getAdapter;
Tt.HttpStatusCode = PA;
Tt.default = Tt;
const hp = Tt, dp = te.createContext(null), iC = () => te.useContext(dp), NA = ({
  children: t,
  baseURL: n,
  refreshSession: i,
  onSessionExpired: a
}) => {
  const [s, c] = a_();
  let l = null;
  const f = G.useMemo(() => {
    const b = hp.create({
      baseURL: n,
      headers: {
        Authorization: s ? `Bearer ${s.access_token}` : void 0,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    return b.interceptors.response.use((m) => m, async (m) => {
      var v, C, _;
      const y = (w) => b({
        ...m.config,
        headers: {
          ...m.config.headers,
          Authorization: `Bearer ${w}`
        }
      });
      if (s && !s.locked && ((v = m.response) == null ? void 0 : v.status) === 401)
        if (l)
          try {
            const w = await l;
            return y(w.access_token);
          } catch {
            throw new Error("Need relogin");
          }
        else {
          l = i({
            refreshToken: s.refresh_token,
            accessToken: s.access_token,
            baseURL: n
          });
          try {
            const w = await l;
            return c(w), y(w.access_token);
          } catch {
            ht.warn("Сессия истекла", {
              toastId: "session-stale"
            }), a();
          } finally {
            l = null;
          }
        }
      throw ((C = m.response) == null ? void 0 : C.status) === 500 && ht.error(/* @__PURE__ */ es("div", { children: [
        /* @__PURE__ */ at("div", { css: {
          fontWeight: "500"
        }, children: "Ошибка сервера" }),
        /* @__PURE__ */ at("div", { css: {
          padding: "0.25rem",
          fontSize: "0.75rem",
          lineHeight: "1rem"
        }, children: ((_ = m.response.data) == null ? void 0 : _.message) || m.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      }), m;
    }), b;
  }, [s == null ? void 0 : s.access_token]);
  return /* @__PURE__ */ at(dp.Provider, { value: {
    client: f
  }, children: t });
}, IA = async ({
  baseURL: t,
  refreshToken: n,
  accessToken: i
}) => {
  const {
    data: {
      data: a
    }
  } = await hp.post("/api/user/refresh", {
    refresh_token: n
  }, {
    baseURL: t,
    headers: {
      Authorization: `Bearer ${i}`,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  return a;
}, MA = new n_({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    },
    mutations: {
      retry: !1
    }
  }
}), kA = mw({
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
}), FA = ({
  children: t,
  refreshSession: n,
  onSessionExpired: i,
  updateSession: a,
  session: s
}) => /* @__PURE__ */ at(i_, { session: s, setSession: a, children: /* @__PURE__ */ at(gw, { theme: kA, children: /* @__PURE__ */ at(NA, { refreshSession: n || IA, onSessionExpired: i, children: /* @__PURE__ */ at(r_, { client: MA, children: t }) }) }) }), aC = xc(({
  className: t,
  ...n
}) => /* @__PURE__ */ at(yw, { ...n, classes: {
  popper: t
} }))`
  .${Oh.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Oh.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`;
var BA = "Expected a function", pp = "__lodash_hash_undefined__", WA = "[object Function]", UA = "[object GeneratorFunction]", zA = /[\\^$.*+?()[\]{}|]/g, HA = /^\[object .+?Constructor\]$/, jA = typeof hr == "object" && hr && hr.Object === Object && hr, $A = typeof self == "object" && self && self.Object === Object && self, vp = jA || $A || Function("return this")();
function qA(t, n) {
  return t == null ? void 0 : t[n];
}
function YA(t) {
  var n = !1;
  if (t != null && typeof t.toString != "function")
    try {
      n = !!(t + "");
    } catch {
    }
  return n;
}
var GA = Array.prototype, VA = Function.prototype, mp = Object.prototype, Uu = vp["__core-js_shared__"], qh = function() {
  var t = /[^.]+$/.exec(Uu && Uu.keys && Uu.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}(), gp = VA.toString, kc = mp.hasOwnProperty, KA = mp.toString, QA = RegExp(
  "^" + gp.call(kc).replace(zA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), XA = GA.splice, JA = yp(vp, "Map"), Aa = yp(Object, "create");
function oi(t) {
  var n = -1, i = t ? t.length : 0;
  for (this.clear(); ++n < i; ) {
    var a = t[n];
    this.set(a[0], a[1]);
  }
}
function ZA() {
  this.__data__ = Aa ? Aa(null) : {};
}
function eE(t) {
  return this.has(t) && delete this.__data__[t];
}
function tE(t) {
  var n = this.__data__;
  if (Aa) {
    var i = n[t];
    return i === pp ? void 0 : i;
  }
  return kc.call(n, t) ? n[t] : void 0;
}
function nE(t) {
  var n = this.__data__;
  return Aa ? n[t] !== void 0 : kc.call(n, t);
}
function rE(t, n) {
  var i = this.__data__;
  return i[t] = Aa && n === void 0 ? pp : n, this;
}
oi.prototype.clear = ZA;
oi.prototype.delete = eE;
oi.prototype.get = tE;
oi.prototype.has = nE;
oi.prototype.set = rE;
function Gi(t) {
  var n = -1, i = t ? t.length : 0;
  for (this.clear(); ++n < i; ) {
    var a = t[n];
    this.set(a[0], a[1]);
  }
}
function iE() {
  this.__data__ = [];
}
function aE(t) {
  var n = this.__data__, i = ls(n, t);
  if (i < 0)
    return !1;
  var a = n.length - 1;
  return i == a ? n.pop() : XA.call(n, i, 1), !0;
}
function oE(t) {
  var n = this.__data__, i = ls(n, t);
  return i < 0 ? void 0 : n[i][1];
}
function sE(t) {
  return ls(this.__data__, t) > -1;
}
function uE(t, n) {
  var i = this.__data__, a = ls(i, t);
  return a < 0 ? i.push([t, n]) : i[a][1] = n, this;
}
Gi.prototype.clear = iE;
Gi.prototype.delete = aE;
Gi.prototype.get = oE;
Gi.prototype.has = sE;
Gi.prototype.set = uE;
function si(t) {
  var n = -1, i = t ? t.length : 0;
  for (this.clear(); ++n < i; ) {
    var a = t[n];
    this.set(a[0], a[1]);
  }
}
function cE() {
  this.__data__ = {
    hash: new oi(),
    map: new (JA || Gi)(),
    string: new oi()
  };
}
function lE(t) {
  return fs(this, t).delete(t);
}
function fE(t) {
  return fs(this, t).get(t);
}
function hE(t) {
  return fs(this, t).has(t);
}
function dE(t, n) {
  return fs(this, t).set(t, n), this;
}
si.prototype.clear = cE;
si.prototype.delete = lE;
si.prototype.get = fE;
si.prototype.has = hE;
si.prototype.set = dE;
function ls(t, n) {
  for (var i = t.length; i--; )
    if (yE(t[i][0], n))
      return i;
  return -1;
}
function pE(t) {
  if (!bp(t) || mE(t))
    return !1;
  var n = bE(t) || YA(t) ? QA : HA;
  return n.test(gE(t));
}
function fs(t, n) {
  var i = t.__data__;
  return vE(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
}
function yp(t, n) {
  var i = qA(t, n);
  return pE(i) ? i : void 0;
}
function vE(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function mE(t) {
  return !!qh && qh in t;
}
function gE(t) {
  if (t != null) {
    try {
      return gp.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
function Fc(t, n) {
  if (typeof t != "function" || n && typeof n != "function")
    throw new TypeError(BA);
  var i = function() {
    var a = arguments, s = n ? n.apply(this, a) : a[0], c = i.cache;
    if (c.has(s))
      return c.get(s);
    var l = t.apply(this, a);
    return i.cache = c.set(s, l), l;
  };
  return i.cache = new (Fc.Cache || si)(), i;
}
Fc.Cache = si;
function yE(t, n) {
  return t === n || t !== t && n !== n;
}
function bE(t) {
  var n = bp(t) ? KA.call(t) : "";
  return n == WA || n == UA;
}
function bp(t) {
  var n = typeof t;
  return !!t && (n == "object" || n == "function");
}
var wE = Fc;
const wp = /* @__PURE__ */ Cc(wE);
function _p(t) {
  return JSON.stringify(t);
}
function _E(t) {
  return typeof t == "string";
}
function AE(t, n, i) {
  return i.indexOf(t) === n;
}
function EE(t) {
  return t.toLowerCase() === t;
}
function Yh(t) {
  return t.indexOf(",") === -1 ? t : t.split(",");
}
function sc(t) {
  if (!t)
    return t;
  if (t === "C" || t === "posix" || t === "POSIX")
    return "en-US";
  if (t.indexOf(".") !== -1) {
    var n = t.split(".")[0], i = n === void 0 ? "" : n;
    return sc(i);
  }
  if (t.indexOf("@") !== -1) {
    var a = t.split("@")[0], i = a === void 0 ? "" : a;
    return sc(i);
  }
  if (t.indexOf("-") === -1 || !EE(t))
    return t;
  var s = t.split("-"), c = s[0], l = s[1], f = l === void 0 ? "" : l;
  return "".concat(c, "-").concat(f.toUpperCase());
}
function OE(t) {
  var n = t === void 0 ? {} : t, i = n.useFallbackLocale, a = i === void 0 ? !0 : i, s = n.fallbackLocale, c = s === void 0 ? "en-US" : s, l = [];
  if (typeof navigator < "u") {
    for (var f = navigator.languages || [], b = [], m = 0, y = f; m < y.length; m++) {
      var v = y[m];
      b = b.concat(Yh(v));
    }
    var C = navigator.language, _ = C && Yh(C);
    l = l.concat(b, _);
  }
  return a && l.push(c), l.filter(_E).map(sc).filter(AE);
}
var xE = wp(OE, _p);
function CE(t) {
  return xE(t)[0] || null;
}
var Ap = wp(CE, _p);
function mr(t, n, i) {
  return function(s, c) {
    c === void 0 && (c = i);
    var l = t(s) + c;
    return n(l);
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
var TE = mr(gt, Vi, -100), Ep = mr(gt, Vi, 100), Bc = ka(Ep), SE = mr(gt, Bc, -100), Op = Fa(Vi, Bc);
function Ur(t) {
  var n = gt(t), i = n + (-n + 1) % 10, a = /* @__PURE__ */ new Date();
  return a.setFullYear(i, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var xp = mr(gt, Ur, -10), Wc = mr(gt, Ur, 10), ds = ka(Wc), Cp = mr(gt, ds, -10), Tp = Fa(Ur, ds);
function Ki(t) {
  var n = gt(t), i = /* @__PURE__ */ new Date();
  return i.setFullYear(n, 0, 1), i.setHours(0, 0, 0, 0), i;
}
var Sp = mr(gt, Ki, -1), Uc = mr(gt, Ki, 1), ps = ka(Uc), Dp = mr(gt, ps, -1), DE = Fa(Ki, ps);
function zc(t, n) {
  return function(a, s) {
    s === void 0 && (s = n);
    var c = gt(a), l = Wr(a) + s, f = /* @__PURE__ */ new Date();
    return f.setFullYear(c, l, 1), f.setHours(0, 0, 0, 0), t(f);
  };
}
function ui(t) {
  var n = gt(t), i = Wr(t), a = /* @__PURE__ */ new Date();
  return a.setFullYear(n, i, 1), a.setHours(0, 0, 0, 0), a;
}
var Rp = zc(ui, -1), Hc = zc(ui, 1), Ba = ka(Hc), Lp = zc(Ba, -1), RE = Fa(ui, Ba);
function LE(t, n) {
  return function(a, s) {
    s === void 0 && (s = n);
    var c = gt(a), l = Wr(a), f = hs(a) + s, b = /* @__PURE__ */ new Date();
    return b.setFullYear(c, l, f), b.setHours(0, 0, 0, 0), t(b);
  };
}
function Wa(t) {
  var n = gt(t), i = Wr(t), a = hs(t), s = /* @__PURE__ */ new Date();
  return s.setFullYear(n, i, a), s.setHours(0, 0, 0, 0), s;
}
var PE = LE(Wa, 1), jc = ka(PE), NE = Fa(Wa, jc);
function Pp(t) {
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
}, IE = (da = {}, da[dt.GREGORY] = [
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
], da), $c = [0, 1, 2, 3, 4, 5, 6], zu = /* @__PURE__ */ new Map();
function ME(t) {
  return function(i, a) {
    var s = i || Ap();
    zu.has(s) || zu.set(s, /* @__PURE__ */ new Map());
    var c = zu.get(s);
    return c.has(t) || c.set(t, new Intl.DateTimeFormat(s || void 0, t).format), c.get(t)(a);
  };
}
function kE(t) {
  var n = new Date(t);
  return new Date(n.setHours(12));
}
function ci(t) {
  return function(n, i) {
    return ME(t)(n, kE(i));
  };
}
var FE = { day: "numeric" }, BE = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, WE = { month: "long" }, UE = {
  month: "long",
  year: "numeric"
}, zE = { weekday: "short" }, HE = { weekday: "long" }, jE = { year: "numeric" }, $E = ci(FE), qE = ci(BE), YE = ci(WE), Np = ci(UE), GE = ci(zE), VE = ci(HE), vs = ci(jE), KE = $c[0], QE = $c[5], Gh = $c[6];
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
function XE(t) {
  var n = Vi(t);
  return gt(n);
}
function JE(t) {
  var n = Ur(t);
  return gt(n);
}
function uc(t, n) {
  n === void 0 && (n = dt.ISO_8601);
  var i = gt(t), a = Wr(t), s = t.getDate() - Ea(t, n);
  return new Date(i, a, s);
}
function ZE(t, n) {
  n === void 0 && (n = dt.ISO_8601);
  var i = n === dt.GREGORY ? dt.GREGORY : dt.ISO_8601, a = uc(t, n), s = gt(t) + 1, c, l;
  do
    c = new Date(s, 0, i === dt.ISO_8601 ? 4 : 1), l = uc(c, n), s -= 1;
  while (t < l);
  return Math.round((a.getTime() - l.getTime()) / (864e5 * 7)) + 1;
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
function eO(t, n) {
  switch (t) {
    case "century":
      return TE(n);
    case "decade":
      return xp(n);
    case "year":
      return Sp(n);
    case "month":
      return Rp(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function Ip(t, n) {
  switch (t) {
    case "century":
      return Ep(n);
    case "decade":
      return Wc(n);
    case "year":
      return Uc(n);
    case "month":
      return Hc(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function tO(t, n) {
  switch (t) {
    case "decade":
      return xp(n, -100);
    case "year":
      return Sp(n, -10);
    case "month":
      return Rp(n, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function nO(t, n) {
  switch (t) {
    case "decade":
      return Wc(n, 100);
    case "year":
      return Uc(n, 10);
    case "month":
      return Hc(n, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function Mp(t, n) {
  switch (t) {
    case "century":
      return Bc(n);
    case "decade":
      return ds(n);
    case "year":
      return ps(n);
    case "month":
      return Ba(n);
    case "day":
      return jc(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function rO(t, n) {
  switch (t) {
    case "century":
      return SE(n);
    case "decade":
      return Cp(n);
    case "year":
      return Dp(n);
    case "month":
      return Lp(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function iO(t, n) {
  switch (t) {
    case "decade":
      return Cp(n, -100);
    case "year":
      return Dp(n, -10);
    case "month":
      return Lp(n, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function Vh(t, n) {
  switch (t) {
    case "century":
      return Op(n);
    case "decade":
      return Tp(n);
    case "year":
      return DE(n);
    case "month":
      return RE(n);
    case "day":
      return NE(n);
    default:
      throw new Error("Invalid rangeType: ".concat(t));
  }
}
function aO(t, n, i) {
  var a = [n, i].sort(function(s, c) {
    return s.getTime() - c.getTime();
  });
  return [ii(t, a[0]), Mp(t, a[1])];
}
function kp(t, n, i) {
  return n === void 0 && (n = vs), i.map(function(a) {
    return n(t, a);
  }).join(" – ");
}
function oO(t, n, i) {
  return kp(t, n, Op(i));
}
function Fp(t, n, i) {
  return kp(t, n, Tp(i));
}
function sO(t) {
  return t.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function Bp(t, n) {
  n === void 0 && (n = dt.ISO_8601);
  var i = t.getDay();
  switch (n) {
    case dt.ISLAMIC:
    case dt.HEBREW:
      return i === QE || i === Gh;
    case dt.ISO_8601:
    case dt.GREGORY:
      return i === Gh || i === KE;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var qn = "react-calendar__navigation";
function uO(t) {
  var n = t.activeStartDate, i = t.drillUp, a = t.formatMonthYear, s = a === void 0 ? Np : a, c = t.formatYear, l = c === void 0 ? vs : c, f = t.locale, b = t.maxDate, m = t.minDate, y = t.navigationAriaLabel, v = y === void 0 ? "" : y, C = t.navigationAriaLive, _ = t.navigationLabel, w = t.next2AriaLabel, E = w === void 0 ? "" : w, x = t.next2Label, D = x === void 0 ? "»" : x, B = t.nextAriaLabel, M = B === void 0 ? "" : B, U = t.nextLabel, ee = U === void 0 ? "›" : U, oe = t.prev2AriaLabel, de = oe === void 0 ? "" : oe, ie = t.prev2Label, fe = ie === void 0 ? "«" : ie, Fe = t.prevAriaLabel, Re = Fe === void 0 ? "" : Fe, Be = t.prevLabel, Qe = Be === void 0 ? "‹" : Be, je = t.setActiveStartDate, he = t.showDoubleView, Ce = t.view, qe = t.views, g = qe.indexOf(Ce) > 0, O = Ce !== "century", S = eO(Ce, n), P = O ? tO(Ce, n) : void 0, N = Ip(Ce, n), k = O ? nO(Ce, n) : void 0, K = function() {
    if (S.getFullYear() < 0)
      return !0;
    var be = rO(Ce, n);
    return m && m >= be;
  }(), J = O && function() {
    if (P.getFullYear() < 0)
      return !0;
    var be = iO(Ce, n);
    return m && m >= be;
  }(), V = b && b < N, X = O && b && b < k;
  function se() {
    je(S, "prev");
  }
  function Pe() {
    je(P, "prev2");
  }
  function xe() {
    je(N, "next");
  }
  function Ee() {
    je(k, "next2");
  }
  function Ne(be) {
    var yt = function() {
      switch (Ce) {
        case "century":
          return oO(f, l, be);
        case "decade":
          return Fp(f, l, be);
        case "year":
          return l(f, be);
        case "month":
          return s(f, be);
        default:
          throw new Error("Invalid view: ".concat(Ce, "."));
      }
    }();
    return _ ? _({
      date: be,
      label: yt,
      locale: f || Ap() || void 0,
      view: Ce
    }) : yt;
  }
  function ot() {
    var be = "".concat(qn, "__label");
    return te.createElement(
      "button",
      { "aria-label": v, "aria-live": C, className: be, disabled: !g, onClick: i, style: { flexGrow: 1 }, type: "button" },
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
    fe !== null && O ? te.createElement("button", { "aria-label": de, className: "".concat(qn, "__arrow ").concat(qn, "__prev2-button"), disabled: J, onClick: Pe, type: "button" }, fe) : null,
    Qe !== null && te.createElement("button", { "aria-label": Re, className: "".concat(qn, "__arrow ").concat(qn, "__prev-button"), disabled: K, onClick: se, type: "button" }, Qe),
    ot(),
    ee !== null && te.createElement("button", { "aria-label": M, className: "".concat(qn, "__arrow ").concat(qn, "__next-button"), disabled: V, onClick: xe, type: "button" }, ee),
    D !== null && O ? te.createElement("button", { "aria-label": E, className: "".concat(qn, "__arrow ").concat(qn, "__next2-button"), disabled: X, onClick: Ee, type: "button" }, D) : null
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
}, cO = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function Kh(t) {
  return "".concat(t, "%");
}
function qc(t) {
  var n = t.children, i = t.className, a = t.count, s = t.direction, c = t.offset, l = t.style, f = t.wrap, b = cO(t, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return te.createElement("div", Ri({ className: i, style: Ri({ display: "flex", flexDirection: s, flexWrap: f ? "wrap" : "nowrap" }, l) }, b), te.Children.map(n, function(m, y) {
    var v = c && y === 0 ? Kh(100 * c / a) : null;
    return te.cloneElement(m, Ri(Ri({}, m.props), { style: {
      flexBasis: Kh(100 / a),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: v,
      marginInlineStart: v,
      marginInlineEnd: 0
    } }));
  }));
}
var lO = function() {
}, fO = lO;
const hO = /* @__PURE__ */ Cc(fO);
var Ci;
function dO(t, n, i) {
  return n && n > t ? n : i && i < t ? i : t;
}
function Oa(t, n) {
  return n[0] <= t && n[1] >= t;
}
function pO(t, n) {
  return t[0] <= n[0] && t[1] >= n[1];
}
function Wp(t, n) {
  return Oa(t[0], n) || Oa(t[1], n);
}
function Qh(t, n, i) {
  var a = Wp(n, t), s = [];
  if (a) {
    s.push(i);
    var c = Oa(t[0], n), l = Oa(t[1], n);
    c && s.push("".concat(i, "Start")), l && s.push("".concat(i, "End")), c && l && s.push("".concat(i, "BothEnds"));
  }
  return s;
}
function vO(t) {
  return Array.isArray(t) ? t[0] !== null && t[1] !== null : t !== null;
}
function mO(t) {
  if (!t)
    throw new Error("args is required");
  var n = t.value, i = t.date, a = t.hover, s = "react-calendar__tile", c = [s];
  if (!i)
    return c;
  var l = /* @__PURE__ */ new Date(), f = function() {
    if (Array.isArray(i))
      return i;
    var _ = t.dateType;
    if (!_)
      throw new Error("dateType is required when date is not an array of two dates");
    return Vh(_, i);
  }();
  if (Oa(l, f) && c.push("".concat(s, "--now")), !n || !vO(n))
    return c;
  var b = function() {
    if (Array.isArray(n))
      return n;
    var _ = t.valueType;
    if (!_)
      throw new Error("valueType is required when value is not an array of two dates");
    return Vh(_, n);
  }();
  pO(b, f) ? c.push("".concat(s, "--active")) : Wp(b, f) && c.push("".concat(s, "--hasActive"));
  var m = Qh(b, f, "".concat(s, "--range"));
  c.push.apply(c, m);
  var y = Array.isArray(n) ? n : [n];
  if (a && y.length === 1) {
    var v = a > b[0] ? [b[0], a] : [a, b[0]], C = Qh(v, f, "".concat(s, "--hover"));
    c.push.apply(c, C);
  }
  return c;
}
var gO = (Ci = {}, Ci[Di.ARABIC] = dt.ISLAMIC, Ci[Di.HEBREW] = dt.HEBREW, Ci[Di.ISO_8601] = dt.ISO_8601, Ci[Di.US] = dt.GREGORY, Ci);
function yO(t) {
  return t !== void 0 && t in Di;
}
var Xh = !1;
function ms(t) {
  if (yO(t)) {
    var n = gO[t];
    return hO(Xh, 'Specifying calendarType="'.concat(t, '" is deprecated. Use calendarType="').concat(n, '" instead.')), Xh = !0, n;
  }
  return t;
}
function gs(t) {
  for (var n = t.className, i = t.count, a = i === void 0 ? 3 : i, s = t.dateTransform, c = t.dateType, l = t.end, f = t.hover, b = t.offset, m = t.renderTile, y = t.start, v = t.step, C = v === void 0 ? 1 : v, _ = t.value, w = t.valueType, E = [], x = y; x <= l; x += C) {
    var D = s(x);
    E.push(m({
      classes: mO({
        date: D,
        dateType: c,
        hover: f,
        value: _,
        valueType: w
      }),
      date: D
    }));
  }
  return te.createElement(qc, { className: n, count: a, offset: b, wrap: !0 }, E);
}
function ys(t) {
  var n = t.activeStartDate, i = t.children, a = t.classes, s = t.date, c = t.formatAbbr, l = t.locale, f = t.maxDate, b = t.maxDateTransform, m = t.minDate, y = t.minDateTransform, v = t.onClick, C = t.onMouseOver, _ = t.style, w = t.tileClassName, E = t.tileContent, x = t.tileDisabled, D = t.view, B = G.useMemo(function() {
    var U = { activeStartDate: n, date: s, view: D };
    return typeof w == "function" ? w(U) : w;
  }, [n, s, w, D]), M = G.useMemo(function() {
    var U = { activeStartDate: n, date: s, view: D };
    return typeof E == "function" ? E(U) : E;
  }, [n, s, E, D]);
  return te.createElement(
    "button",
    { className: Zo(a, B), disabled: m && y(m) > s || f && b(f) < s || x && x({ activeStartDate: n, date: s, view: D }), onClick: v ? function(U) {
      return v(s, U);
    } : void 0, onFocus: C ? function() {
      return C(s);
    } : void 0, onMouseOver: C ? function() {
      return C(s);
    } : void 0, style: _, type: "button" },
    c ? te.createElement("abbr", { "aria-label": c(l, s) }, i) : i,
    M
  );
}
var cc = globalThis && globalThis.__assign || function() {
  return cc = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, cc.apply(this, arguments);
}, bO = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, Hu = "react-calendar__century-view__decades__decade";
function wO(t) {
  var n = t.classes, i = n === void 0 ? [] : n, a = t.currentCentury, s = t.formatYear, c = s === void 0 ? vs : s, l = bO(t, ["classes", "currentCentury", "formatYear"]), f = l.date, b = l.locale, m = [];
  return i && m.push.apply(m, i), Hu && m.push(Hu), Vi(f).getFullYear() !== a && m.push("".concat(Hu, "--neighboringCentury")), te.createElement(ys, cc({}, l, { classes: m, maxDateTransform: ds, minDateTransform: Ur, view: "century" }), Fp(b, c, f));
}
var lc = globalThis && globalThis.__assign || function() {
  return lc = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, lc.apply(this, arguments);
}, Jh = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function _O(t) {
  var n = t.activeStartDate, i = t.hover, a = t.showNeighboringCentury, s = t.value, c = t.valueType, l = Jh(t, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), f = XE(n), b = f + (a ? 119 : 99);
  return te.createElement(gs, { className: "react-calendar__century-view__decades", dateTransform: Ur, dateType: "decade", end: b, hover: i, renderTile: function(m) {
    var y = m.date, v = Jh(m, ["date"]);
    return te.createElement(wO, lc({ key: y.getTime() }, l, v, { activeStartDate: n, currentCentury: f, date: y }));
  }, start: f, step: 10, value: s, valueType: c });
}
var Zh = globalThis && globalThis.__spreadArray || function(t, n, i) {
  if (i || arguments.length === 2)
    for (var a = 0, s = n.length, c; a < s; a++)
      (c || !(a in n)) && (c || (c = Array.prototype.slice.call(n, 0, a)), c[a] = n[a]);
  return t.concat(c || Array.prototype.slice.call(n));
}, AO = Object.values(dt), EO = Object.values(Di), fc = ["century", "decade", "year", "month"], Up = Y.oneOf(Zh(Zh([], AO, !0), EO, !0)), $o = Y.oneOfType([
  Y.string,
  Y.arrayOf(Y.string)
]), Yc = function(n, i, a) {
  var s = n, c = i, l = s[c];
  if (!l)
    return null;
  if (!(l instanceof Date))
    return new Error("Invalid prop `".concat(i, "` of type `").concat(typeof l, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var f = n.maxDate;
  return f && l > f ? new Error("Invalid prop `".concat(i, "` of type `").concat(typeof l, "` supplied to `").concat(a, "`, minDate cannot be larger than maxDate.")) : null;
}, Gc = function(n, i, a) {
  var s = n, c = i, l = s[c];
  if (!l)
    return null;
  if (!(l instanceof Date))
    return new Error("Invalid prop `".concat(i, "` of type `").concat(typeof l, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var f = n.minDate;
  return f && l < f ? new Error("Invalid prop `".concat(i, "` of type `").concat(typeof l, "` supplied to `").concat(a, "`, maxDate cannot be smaller than minDate.")) : null;
}, OO = Y.oneOfType([
  Y.func,
  Y.exact({
    current: Y.any
  })
]), xO = Y.arrayOf(Y.oneOfType([Y.instanceOf(Date), Y.oneOf([null])]).isRequired), CO = Y.oneOfType([
  Y.instanceOf(Date),
  Y.oneOf([null]),
  xO
]);
Y.arrayOf(Y.oneOf(fc));
var qo = function(n, i, a) {
  var s = n, c = i, l = s[c];
  return l !== void 0 && (typeof l != "string" || fc.indexOf(l) === -1) ? new Error("Invalid prop `".concat(i, "` of value `").concat(l, "` supplied to `").concat(a, "`, expected one of [").concat(fc.map(function(f) {
    return '"'.concat(f, '"');
  }).join(", "), "].")) : null;
};
qo.isRequired = function(n, i, a, s, c) {
  var l = n, f = i, b = l[f];
  return b ? qo(n, i, a) : new Error("The prop `".concat(i, "` is marked as required in `").concat(a, "`, but its value is `").concat(b, "`."));
};
var TO = function(t) {
  return Y.arrayOf(t);
}, bs = {
  activeStartDate: Y.instanceOf(Date).isRequired,
  hover: Y.instanceOf(Date),
  locale: Y.string,
  maxDate: Gc,
  minDate: Yc,
  onClick: Y.func,
  onMouseOver: Y.func,
  tileClassName: Y.oneOfType([Y.func, $o]),
  tileContent: Y.oneOfType([Y.func, Y.node]),
  value: CO,
  valueType: Y.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
Y.instanceOf(Date).isRequired, Y.arrayOf(Y.string.isRequired).isRequired, Y.instanceOf(Date).isRequired, Y.string, Y.func, Y.func, Y.objectOf(Y.oneOfType([Y.string, Y.number])), Y.oneOfType([Y.func, $o]), Y.oneOfType([Y.func, Y.node]), Y.func;
var xa = globalThis && globalThis.__assign || function() {
  return xa = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, xa.apply(this, arguments);
}, zp = function(n) {
  function i() {
    return te.createElement(_O, xa({}, n));
  }
  return te.createElement("div", { className: "react-calendar__century-view" }, i());
};
zp.propTypes = xa(xa({}, bs), { showNeighboringCentury: Y.bool });
const SO = zp;
var hc = globalThis && globalThis.__assign || function() {
  return hc = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, hc.apply(this, arguments);
}, DO = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, ju = "react-calendar__decade-view__years__year";
function RO(t) {
  var n = t.classes, i = n === void 0 ? [] : n, a = t.currentDecade, s = t.formatYear, c = s === void 0 ? vs : s, l = DO(t, ["classes", "currentDecade", "formatYear"]), f = l.date, b = l.locale, m = [];
  return i && m.push.apply(m, i), ju && m.push(ju), Ur(f).getFullYear() !== a && m.push("".concat(ju, "--neighboringDecade")), te.createElement(ys, hc({}, l, { classes: m, maxDateTransform: ps, minDateTransform: Ki, view: "decade" }), c(b, f));
}
var dc = globalThis && globalThis.__assign || function() {
  return dc = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, dc.apply(this, arguments);
}, ed = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function LO(t) {
  var n = t.activeStartDate, i = t.hover, a = t.showNeighboringDecade, s = t.value, c = t.valueType, l = ed(t, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), f = JE(n), b = f + (a ? 11 : 9);
  return te.createElement(gs, { className: "react-calendar__decade-view__years", dateTransform: Ki, dateType: "year", end: b, hover: i, renderTile: function(m) {
    var y = m.date, v = ed(m, ["date"]);
    return te.createElement(RO, dc({ key: y.getTime() }, l, v, { activeStartDate: n, currentDecade: f, date: y }));
  }, start: f, value: s, valueType: c });
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
}, Hp = function(n) {
  function i() {
    return te.createElement(LO, Ca({}, n));
  }
  return te.createElement("div", { className: "react-calendar__decade-view" }, i());
};
Hp.propTypes = Ca(Ca({}, bs), { showNeighboringDecade: Y.bool });
const PO = Hp;
var pc = globalThis && globalThis.__assign || function() {
  return pc = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, pc.apply(this, arguments);
}, NO = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, td = globalThis && globalThis.__spreadArray || function(t, n, i) {
  if (i || arguments.length === 2)
    for (var a = 0, s = n.length, c; a < s; a++)
      (c || !(a in n)) && (c || (c = Array.prototype.slice.call(n, 0, a)), c[a] = n[a]);
  return t.concat(c || Array.prototype.slice.call(n));
}, IO = "react-calendar__year-view__months__month";
function MO(t) {
  var n = t.classes, i = n === void 0 ? [] : n, a = t.formatMonth, s = a === void 0 ? YE : a, c = t.formatMonthYear, l = c === void 0 ? Np : c, f = NO(t, ["classes", "formatMonth", "formatMonthYear"]), b = f.date, m = f.locale;
  return te.createElement(ys, pc({}, f, { classes: td(td([], i, !0), [IO], !1), formatAbbr: l, maxDateTransform: Ba, minDateTransform: ui, view: "year" }), s(m, b));
}
var vc = globalThis && globalThis.__assign || function() {
  return vc = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, vc.apply(this, arguments);
}, nd = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function kO(t) {
  var n = t.activeStartDate, i = t.hover, a = t.value, s = t.valueType, c = nd(t, ["activeStartDate", "hover", "value", "valueType"]), l = 0, f = 11, b = gt(n);
  return te.createElement(gs, { className: "react-calendar__year-view__months", dateTransform: function(m) {
    var y = /* @__PURE__ */ new Date();
    return y.setFullYear(b, m, 1), ui(y);
  }, dateType: "month", end: f, hover: i, renderTile: function(m) {
    var y = m.date, v = nd(m, ["date"]);
    return te.createElement(MO, vc({ key: y.getTime() }, c, v, { activeStartDate: n, date: y }));
  }, start: l, value: a, valueType: s });
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
}, jp = function(n) {
  function i() {
    return te.createElement(kO, Yo({}, n));
  }
  return te.createElement("div", { className: "react-calendar__year-view" }, i());
};
jp.propTypes = Yo({}, bs);
const FO = jp;
var mc = globalThis && globalThis.__assign || function() {
  return mc = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, mc.apply(this, arguments);
}, BO = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, Lo = "react-calendar__month-view__days__day";
function WO(t) {
  var n = t.calendarType, i = t.classes, a = i === void 0 ? [] : i, s = t.currentMonthIndex, c = t.formatDay, l = c === void 0 ? $E : c, f = t.formatLongDate, b = f === void 0 ? qE : f, m = BO(t, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), y = ms(n), v = m.date, C = m.locale, _ = [];
  return a && _.push.apply(_, a), Lo && _.push(Lo), Bp(v, y) && _.push("".concat(Lo, "--weekend")), v.getMonth() !== s && _.push("".concat(Lo, "--neighboringMonth")), te.createElement(ys, mc({}, m, { classes: _, formatAbbr: b, maxDateTransform: jc, minDateTransform: Wa, view: "month" }), l(C, v));
}
var gc = globalThis && globalThis.__assign || function() {
  return gc = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, gc.apply(this, arguments);
}, rd = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function UO(t) {
  var n = t.activeStartDate, i = t.calendarType, a = t.hover, s = t.showFixedNumberOfWeeks, c = t.showNeighboringMonth, l = t.value, f = t.valueType, b = rd(t, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), m = ms(i), y = gt(n), v = Wr(n), C = s || c, _ = Ea(n, m), w = C ? 0 : _, E = (C ? -_ : 0) + 1, x = function() {
    if (s)
      return E + 6 * 7 - 1;
    var D = Pp(n);
    if (c) {
      var B = /* @__PURE__ */ new Date();
      B.setFullYear(y, v, D), B.setHours(0, 0, 0, 0);
      var M = 7 - Ea(B, m) - 1;
      return D + M;
    }
    return D;
  }();
  return te.createElement(gs, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(D) {
    var B = /* @__PURE__ */ new Date();
    return B.setFullYear(y, v, D), Wa(B);
  }, dateType: "day", hover: a, end: x, renderTile: function(D) {
    var B = D.date, M = rd(D, ["date"]);
    return te.createElement(WO, gc({ key: B.getTime() }, b, M, { activeStartDate: n, calendarType: i, currentMonthIndex: v, date: B }));
  }, offset: w, start: E, value: l, valueType: f });
}
var $p = "react-calendar__month-view__weekdays", $u = "".concat($p, "__weekday");
function zO(t) {
  for (var n = t.calendarType, i = t.formatShortWeekday, a = i === void 0 ? GE : i, s = t.formatWeekday, c = s === void 0 ? VE : s, l = t.locale, f = t.onMouseLeave, b = ms(n), m = /* @__PURE__ */ new Date(), y = ui(m), v = gt(y), C = Wr(y), _ = [], w = 1; w <= 7; w += 1) {
    var E = new Date(v, C, w - Ea(y, b)), x = c(l, E);
    _.push(te.createElement(
      "div",
      { key: w, className: Zo($u, sO(E) && "".concat($u, "--current"), Bp(E, b) && "".concat($u, "--weekend")) },
      te.createElement("abbr", { "aria-label": x, title: x }, a(l, E).replace(".", ""))
    ));
  }
  return te.createElement(qc, { className: $p, count: 7, onFocus: f, onMouseOver: f }, _);
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
}, id = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
}, ad = "react-calendar__tile";
function HO(t) {
  var n = t.onClickWeekNumber, i = t.weekNumber, a = te.createElement("span", null, i);
  if (n) {
    var s = t.date, c = t.onClickWeekNumber, l = t.weekNumber, f = id(t, ["date", "onClickWeekNumber", "weekNumber"]);
    return te.createElement("button", Go({}, f, { className: ad, onClick: function(b) {
      return c(l, s, b);
    }, type: "button" }), a);
  } else {
    t.date, t.onClickWeekNumber, t.weekNumber;
    var f = id(t, ["date", "onClickWeekNumber", "weekNumber"]);
    return te.createElement("div", Go({}, f, { className: ad }), a);
  }
}
function jO(t) {
  var n = t.activeStartDate, i = t.calendarType, a = t.onClickWeekNumber, s = t.onMouseLeave, c = t.showFixedNumberOfWeeks, l = ms(i), f = function() {
    if (c)
      return 6;
    var y = Pp(n), v = Ea(n, l), C = y - (7 - v);
    return 1 + Math.ceil(C / 7);
  }(), b = function() {
    for (var y = gt(n), v = Wr(n), C = hs(n), _ = [], w = 0; w < f; w += 1)
      _.push(uc(new Date(y, v, C + w * 7), l));
    return _;
  }(), m = b.map(function(y) {
    return ZE(y, l);
  });
  return te.createElement(qc, { className: "react-calendar__month-view__weekNumbers", count: f, direction: "column", onFocus: s, onMouseOver: s, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, m.map(function(y, v) {
    var C = b[v];
    if (!C)
      throw new Error("date is not defined");
    return te.createElement(HO, { key: y, date: C, onClickWeekNumber: a, weekNumber: y });
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
}, $O = globalThis && globalThis.__rest || function(t, n) {
  var i = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) && n.indexOf(a) < 0 && (i[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      n.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, a[s]) && (i[a[s]] = t[a[s]]);
  return i;
};
function qO(t) {
  if (t)
    for (var n = 0, i = Object.entries(IE); n < i.length; n++) {
      var a = i[n], s = a[0], c = a[1];
      if (c.includes(t))
        return s;
    }
  return dt.ISO_8601;
}
var qp = function(n) {
  var i = n.activeStartDate, a = n.locale, s = n.onMouseLeave, c = n.showFixedNumberOfWeeks, l = n.calendarType, f = l === void 0 ? qO(a) : l, b = n.formatShortWeekday, m = n.formatWeekday, y = n.onClickWeekNumber, v = n.showWeekNumbers, C = $O(n, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function _() {
    return te.createElement(zO, { calendarType: f, formatShortWeekday: b, formatWeekday: m, locale: a, onMouseLeave: s });
  }
  function w() {
    return v ? te.createElement(jO, { activeStartDate: i, calendarType: f, onClickWeekNumber: y, onMouseLeave: s, showFixedNumberOfWeeks: c }) : null;
  }
  function E() {
    return te.createElement(UO, Ta({ calendarType: f }, C));
  }
  var x = "react-calendar__month-view";
  return te.createElement(
    "div",
    { className: Zo(x, v ? "".concat(x, "--weekNumbers") : "") },
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
qp.propTypes = Ta(Ta({}, bs), { calendarType: Up, formatDay: Y.func, formatLongDate: Y.func, formatShortWeekday: Y.func, formatWeekday: Y.func, onClickWeekNumber: Y.func, onMouseLeave: Y.func, showFixedNumberOfWeeks: Y.bool, showNeighboringMonth: Y.bool, showWeekNumbers: Y.bool });
const YO = qp;
var Li = globalThis && globalThis.__assign || function() {
  return Li = Object.assign || function(t) {
    for (var n, i = 1, a = arguments.length; i < a; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Li.apply(this, arguments);
}, Po = "react-calendar", Pi = ["century", "decade", "year", "month"], GO = ["decade", "year", "month", "day"], Vc = /* @__PURE__ */ new Date();
Vc.setFullYear(1, 0, 1);
Vc.setHours(0, 0, 0, 0);
var VO = /* @__PURE__ */ new Date(864e13);
function va(t) {
  return t instanceof Date ? t : new Date(t);
}
function Yp(t, n) {
  return Pi.slice(Pi.indexOf(t), Pi.indexOf(n) + 1);
}
function KO(t, n, i) {
  var a = Yp(n, i);
  return a.indexOf(t) !== -1;
}
function Kc(t, n, i) {
  return t && KO(t, n, i) ? t : i;
}
function Gp(t) {
  var n = Pi.indexOf(t);
  return GO[n];
}
function QO(t, n) {
  var i = Array.isArray(t) ? t[n] : t;
  if (!i)
    return null;
  var a = va(i);
  if (isNaN(a.getTime()))
    throw new Error("Invalid date: ".concat(t));
  return a;
}
function Vp(t, n) {
  var i = t.value, a = t.minDate, s = t.maxDate, c = t.maxDetail, l = QO(i, n);
  if (!l)
    return null;
  var f = Gp(c), b = function() {
    switch (n) {
      case 0:
        return ii(f, l);
      case 1:
        return Mp(f, l);
      default:
        throw new Error("Invalid index value: ".concat(n));
    }
  }();
  return dO(b, a, s);
}
var Qc = function(t) {
  return Vp(t, 0);
}, Kp = function(t) {
  return Vp(t, 1);
}, XO = function(t) {
  return [Qc, Kp].map(function(n) {
    return n(t);
  });
};
function Qp(t) {
  var n = t.maxDate, i = t.maxDetail, a = t.minDate, s = t.minDetail, c = t.value, l = t.view, f = Kc(l, s, i), b = Qc({
    value: c,
    minDate: a,
    maxDate: n,
    maxDetail: i
  }) || /* @__PURE__ */ new Date();
  return ii(f, b);
}
function JO(t) {
  var n = t.activeStartDate, i = t.defaultActiveStartDate, a = t.defaultValue, s = t.defaultView, c = t.maxDate, l = t.maxDetail, f = t.minDate, b = t.minDetail, m = t.value, y = t.view, v = Kc(y, b, l), C = n || i;
  return C ? ii(v, C) : Qp({
    maxDate: c,
    maxDetail: l,
    minDate: f,
    minDetail: b,
    value: m || a,
    view: y || s
  });
}
function qu(t) {
  return t && (!Array.isArray(t) || t.length === 1);
}
function No(t, n) {
  return t instanceof Date && n instanceof Date && t.getTime() === n.getTime();
}
var Xp = G.forwardRef(function(n, i) {
  var a = n.activeStartDate, s = n.allowPartialRange, c = n.calendarType, l = n.className, f = n.defaultActiveStartDate, b = n.defaultValue, m = n.defaultView, y = n.formatDay, v = n.formatLongDate, C = n.formatMonth, _ = n.formatMonthYear, w = n.formatShortWeekday, E = n.formatWeekday, x = n.formatYear, D = n.goToRangeStartOnSelect, B = D === void 0 ? !0 : D, M = n.inputRef, U = n.locale, ee = n.maxDate, oe = ee === void 0 ? VO : ee, de = n.maxDetail, ie = de === void 0 ? "month" : de, fe = n.minDate, Fe = fe === void 0 ? Vc : fe, Re = n.minDetail, Be = Re === void 0 ? "century" : Re, Qe = n.navigationAriaLabel, je = n.navigationAriaLive, he = n.navigationLabel, Ce = n.next2AriaLabel, qe = n.next2Label, g = n.nextAriaLabel, O = n.nextLabel, S = n.onActiveStartDateChange, P = n.onChange, N = n.onClickDay, k = n.onClickDecade, K = n.onClickMonth, J = n.onClickWeekNumber, V = n.onClickYear, X = n.onDrillDown, se = n.onDrillUp, Pe = n.onViewChange, xe = n.prev2AriaLabel, Ee = n.prev2Label, Ne = n.prevAriaLabel, ot = n.prevLabel, be = n.returnValue, yt = be === void 0 ? "start" : be, ct = n.selectRange, lt = n.showDoubleView, pt = n.showFixedNumberOfWeeks, tt = n.showNavigation, It = tt === void 0 ? !0 : tt, et = n.showNeighboringCentury, H = n.showNeighboringDecade, F = n.showNeighboringMonth, Z = F === void 0 ? !0 : F, ne = n.showWeekNumbers, ae = n.tileClassName, Ie = n.tileContent, Ye = n.tileDisabled, nt = n.value, ce = n.view, $e = G.useState(f), Et = $e[0], vt = $e[1], rt = G.useState(null), Ve = rt[0], Wt = rt[1], Mt = G.useState(Array.isArray(b) ? b.map(function(Te) {
    return Te !== null ? va(Te) : null;
  }) : b != null ? va(b) : null), sn = Mt[0], vn = Mt[1], Pn = G.useState(m), mn = Pn[0], we = Pn[1], We = a || Et || JO({
    activeStartDate: a,
    defaultActiveStartDate: f,
    defaultValue: b,
    defaultView: m,
    maxDate: oe,
    maxDetail: ie,
    minDate: Fe,
    minDetail: Be,
    value: nt,
    view: ce
  }), Xe = function() {
    var Te = function() {
      return ct && qu(sn) ? sn : nt !== void 0 ? nt : sn;
    }();
    return Te ? Array.isArray(Te) ? Te.map(function(st) {
      return st !== null ? va(st) : null;
    }) : Te !== null ? va(Te) : null : null;
  }(), Ot = Gp(ie), _e = Kc(ce || mn, Be, ie), _t = Yp(Be, ie), Qt = ct ? Ve : null, kt = _t.indexOf(_e) < _t.length - 1, zn = _t.indexOf(_e) > 0, Nn = G.useCallback(function(Te) {
    var st = function() {
      switch (yt) {
        case "start":
          return Qc;
        case "end":
          return Kp;
        case "range":
          return XO;
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
    var St = ct && !qu(ge), qt;
    if (ct)
      if (St)
        qt = ii(Ot, Te);
      else {
        if (!ge)
          throw new Error("previousValue is required");
        if (Array.isArray(ge))
          throw new Error("previousValue must not be an array");
        qt = aO(Ot, ge, Te);
      }
    else
      qt = Nn(Te);
    var zr = (
      // Range selection turned off
      !ct || // Range selection turned on, first value
      St || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      B ? Qp({
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
      if (ct) {
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
    ct,
    Xe,
    Ot,
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
    var st = Te ? Ip(_e, We) : ii(_e, We), ge = kt ? tr : Zt, St = {
      activeStartDate: st,
      hover: Qt,
      locale: U,
      maxDate: oe,
      minDate: Fe,
      onClick: ge,
      onMouseOver: ct ? gr : void 0,
      tileClassName: ae,
      tileContent: Ie,
      tileDisabled: Ye,
      value: Xe,
      valueType: Ot
    };
    switch (_e) {
      case "century":
        return te.createElement(SO, Li({ formatYear: x, showNeighboringCentury: et }, St));
      case "decade":
        return te.createElement(PO, Li({ formatYear: x, showNeighboringDecade: H }, St));
      case "year":
        return te.createElement(FO, Li({ formatMonth: C, formatMonthYear: _ }, St));
      case "month":
        return te.createElement(YO, Li({ calendarType: c, formatDay: y, formatLongDate: v, formatShortWeekday: w, formatWeekday: E, onClickWeekNumber: J, onMouseLeave: ct ? yn : void 0, showFixedNumberOfWeeks: typeof pt < "u" ? pt : lt, showNeighboringMonth: Z, showWeekNumbers: ne }, St));
      default:
        throw new Error("Invalid view: ".concat(_e, "."));
    }
  }
  function li() {
    return It ? te.createElement(uO, { activeStartDate: We, drillUp: Jt, formatMonthYear: _, formatYear: x, locale: U, maxDate: oe, minDate: Fe, navigationAriaLabel: Qe, navigationAriaLive: je, navigationLabel: he, next2AriaLabel: Ce, next2Label: qe, nextAriaLabel: g, nextLabel: O, prev2AriaLabel: xe, prev2Label: Ee, prevAriaLabel: Ne, prevLabel: ot, setActiveStartDate: Xt, showDoubleView: lt, view: _e, views: _t }) : null;
  }
  var Qi = Array.isArray(Xe) ? Xe : [Xe];
  return te.createElement(
    "div",
    { className: Zo(Po, ct && Qi.length === 1 && "".concat(Po, "--selectRange"), lt && "".concat(Po, "--doubleView"), l), ref: M },
    li(),
    te.createElement(
      "div",
      { className: "".concat(Po, "__viewContainer"), onBlur: ct ? yn : void 0, onMouseLeave: ct ? yn : void 0 },
      en(),
      lt ? en(!0) : null
    )
  );
}), od = Y.instanceOf(Date), sd = Y.oneOfType([Y.string, Y.instanceOf(Date)]), ud = Y.oneOfType([sd, TO(sd)]);
Xp.propTypes = {
  activeStartDate: od,
  allowPartialRange: Y.bool,
  calendarType: Up,
  className: $o,
  defaultActiveStartDate: od,
  defaultValue: ud,
  defaultView: qo,
  formatDay: Y.func,
  formatLongDate: Y.func,
  formatMonth: Y.func,
  formatMonthYear: Y.func,
  formatShortWeekday: Y.func,
  formatWeekday: Y.func,
  formatYear: Y.func,
  goToRangeStartOnSelect: Y.bool,
  inputRef: OO,
  locale: Y.string,
  maxDate: Gc,
  maxDetail: Y.oneOf(Pi),
  minDate: Yc,
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
  value: ud,
  view: qo
};
const ZO = Xp;
const oC = xc(ZO)`
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
`, Jp = (t) => !!t && t[0] === "o", cd = $i.unstable_batchedUpdates || ((t) => t()), Ti = (t, n, i = 1e-4) => Math.abs(t - n) < i, Sa = (t, n) => t === !0 || !!(t && t[n]), Zn = (t, n) => typeof t == "function" ? t(n) : t, ex = "_szhsinMenu", tx = (t) => t[ex], Xc = (t, n) => (n && Object.keys(n).forEach((i) => {
  const a = t[i], s = n[i];
  typeof s == "function" && a ? t[i] = (...c) => {
    s(...c), a(...c);
  } : t[i] = s;
}), t), nx = (t) => {
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
function rx(t, n) {
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
const yc = ({
  block: t,
  element: n,
  modifiers: i,
  className: a
}) => G.useMemo(() => {
  const s = n ? `${t}__${n}` : t;
  let c = s;
  i && Object.keys(i).forEach((f) => {
    const b = i[f];
    b && (c += ` ${s}--${b === !0 ? f : `${f}-${b}`}`);
  });
  let l = typeof a == "function" ? a(i) : a;
  return typeof l == "string" && (l = l.trim(), l && (c += ` ${l}`)), c;
}, [t, n, i, a]), ix = "szh-menu-container", Gu = "szh-menu", ax = "arrow", sC = "item", uC = "divider", cC = "submenu", ox = /* @__PURE__ */ G.createContext(), sx = /* @__PURE__ */ G.createContext({}), fd = /* @__PURE__ */ G.createContext({}), ux = /* @__PURE__ */ G.createContext({}), lC = /* @__PURE__ */ G.createContext({}), Zp = /* @__PURE__ */ G.createContext({}), dr = /* @__PURE__ */ Object.freeze({
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
}), cx = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Vu = "absolute", fC = "presentation", lx = "menuitem", hd = {
  "aria-hidden": !0,
  role: lx
}, fx = ({
  className: t,
  containerRef: n,
  containerProps: i,
  children: a,
  isOpen: s,
  theming: c,
  transition: l,
  onClose: f
}) => {
  const b = Sa(l, "item"), m = ({
    key: v
  }) => {
    switch (v) {
      case dr.ESC:
        Zn(f, {
          key: v,
          reason: Da.CANCEL
        });
        break;
    }
  }, y = (v) => {
    s && !v.currentTarget.contains(v.relatedTarget) && Zn(f, {
      reason: Da.BLUR
    });
  };
  return /* @__PURE__ */ Nt.jsx("div", {
    ...Xc({
      onKeyDown: m,
      onBlur: y
    }, i),
    className: yc({
      block: ix,
      modifiers: G.useMemo(() => ({
        theme: c,
        itemTransition: b
      }), [c, b]),
      className: t
    }),
    style: {
      position: "absolute",
      ...i == null ? void 0 : i.style
    },
    ref: n,
    children: a
  });
}, hx = () => {
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
}, dx = (t, n) => {
  const [i, a] = G.useState(), c = G.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, l = G.useCallback((b, m) => {
    const {
      items: y
    } = c;
    if (!b)
      c.items = [];
    else if (m)
      y.push(b);
    else {
      const v = y.indexOf(b);
      v > -1 && (y.splice(v, 1), b.contains(document.activeElement) && (n.current.focus(), a()));
    }
    c.hoverIndex = -1, c.sorted = !1;
  }, [c, n]), f = G.useCallback((b, m, y) => {
    const {
      items: v,
      hoverIndex: C
    } = c, _ = () => {
      if (c.sorted)
        return;
      const x = t.current.querySelectorAll(".szh-menu__item");
      v.sort((D, B) => ld(x, D) - ld(x, B)), c.sorted = !0;
    };
    let w = -1, E;
    switch (b) {
      case Ht.RESET:
        break;
      case Ht.SET:
        E = m;
        break;
      case Ht.UNSET:
        E = (x) => x === m ? void 0 : x;
        break;
      case Ht.FIRST:
        _(), w = 0, E = v[w];
        break;
      case Ht.LAST:
        _(), w = v.length - 1, E = v[w];
        break;
      case Ht.SET_INDEX:
        _(), w = y, E = v[w];
        break;
      case Ht.INCREASE:
        _(), w = C, w < 0 && (w = v.indexOf(m)), w++, w >= v.length && (w = 0), E = v[w];
        break;
      case Ht.DECREASE:
        _(), w = C, w < 0 && (w = v.indexOf(m)), w--, w < 0 && (w = v.length - 1), E = v[w];
        break;
    }
    E || (w = -1), a(E), c.hoverIndex = w;
  }, [t, c]);
  return {
    hoverItem: i,
    dispatch: f,
    updateItems: l
  };
}, px = (t, n, i, a) => {
  const s = n.current.getBoundingClientRect(), c = t.current.getBoundingClientRect(), l = i === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : i.getBoundingClientRect(), f = nx(a), b = (w) => w + c.left - l.left - f.left, m = (w) => w + c.left + s.width - l.right + f.right, y = (w) => w + c.top - l.top - f.top, v = (w) => w + c.top + s.height - l.bottom + f.bottom;
  return {
    menuRect: s,
    containerRect: c,
    getLeftOverflow: b,
    getRightOverflow: m,
    getTopOverflow: y,
    getBottomOverflow: v,
    confineHorizontally: (w) => {
      let E = b(w);
      if (E < 0)
        w -= E;
      else {
        const x = m(w);
        x > 0 && (w -= x, E = b(w), E < 0 && (w -= E));
      }
      return w;
    },
    confineVertically: (w) => {
      let E = y(w);
      if (E < 0)
        w -= E;
      else {
        const x = v(w);
        x > 0 && (w -= x, E = y(w), E < 0 && (w -= E));
      }
      return w;
    }
  };
}, vx = ({
  arrowRef: t,
  menuY: n,
  anchorRect: i,
  containerRect: a,
  menuRect: s
}) => {
  let c = i.top - a.top - n + i.height / 2;
  const l = t.current.offsetHeight * 1.25;
  return c = Math.max(l, c), c = Math.min(c, s.height - l), c;
}, mx = ({
  anchorRect: t,
  containerRect: n,
  menuRect: i,
  placeLeftorRightY: a,
  placeLeftX: s,
  placeRightX: c,
  getLeftOverflow: l,
  getRightOverflow: f,
  confineHorizontally: b,
  confineVertically: m,
  arrowRef: y,
  arrow: v,
  direction: C,
  position: _
}) => {
  let w = C, E = a;
  _ !== "initial" && (E = m(E), _ === "anchor" && (E = Math.min(E, t.bottom - n.top), E = Math.max(E, t.top - n.top - i.height)));
  let x, D, B;
  return w === "left" ? (x = s, _ !== "initial" && (D = l(x), D < 0 && (B = f(c), (B <= 0 || -D > B) && (x = c, w = "right")))) : (x = c, _ !== "initial" && (B = f(x), B > 0 && (D = l(s), (D >= 0 || -D < B) && (x = s, w = "left")))), _ === "auto" && (x = b(x)), {
    arrowY: v ? vx({
      menuY: E,
      arrowRef: y,
      anchorRect: t,
      containerRect: n,
      menuRect: i
    }) : void 0,
    x,
    y: E,
    computedDirection: w
  };
}, gx = ({
  arrowRef: t,
  menuX: n,
  anchorRect: i,
  containerRect: a,
  menuRect: s
}) => {
  let c = i.left - a.left - n + i.width / 2;
  const l = t.current.offsetWidth * 1.25;
  return c = Math.max(l, c), c = Math.min(c, s.width - l), c;
}, yx = ({
  anchorRect: t,
  containerRect: n,
  menuRect: i,
  placeToporBottomX: a,
  placeTopY: s,
  placeBottomY: c,
  getTopOverflow: l,
  getBottomOverflow: f,
  confineHorizontally: b,
  confineVertically: m,
  arrowRef: y,
  arrow: v,
  direction: C,
  position: _
}) => {
  let w = C === "top" ? "top" : "bottom", E = a;
  _ !== "initial" && (E = b(E), _ === "anchor" && (E = Math.min(E, t.right - n.left), E = Math.max(E, t.left - n.left - i.width)));
  let x, D, B;
  return w === "top" ? (x = s, _ !== "initial" && (D = l(x), D < 0 && (B = f(c), (B <= 0 || -D > B) && (x = c, w = "bottom")))) : (x = c, _ !== "initial" && (B = f(x), B > 0 && (D = l(s), (D >= 0 || -D < B) && (x = s, w = "top")))), _ === "auto" && (x = m(x)), {
    arrowX: v ? gx({
      menuX: E,
      arrowRef: y,
      anchorRect: t,
      containerRect: n,
      menuRect: i
    }) : void 0,
    x: E,
    y: x,
    computedDirection: w
  };
}, bx = ({
  arrow: t,
  align: n,
  direction: i,
  gap: a,
  shift: s,
  position: c,
  anchorRect: l,
  arrowRef: f,
  positionHelpers: b
}) => {
  const {
    menuRect: m,
    containerRect: y
  } = b, v = i === "left" || i === "right";
  let C = v ? a : s, _ = v ? s : a;
  if (t) {
    const ee = f.current;
    v ? C += ee.offsetWidth : _ += ee.offsetHeight;
  }
  const w = l.left - y.left - m.width - C, E = l.right - y.left + C, x = l.top - y.top - m.height - _, D = l.bottom - y.top + _;
  let B, M;
  n === "end" ? (B = l.right - y.left - m.width, M = l.bottom - y.top - m.height) : n === "center" ? (B = l.left - y.left - (m.width - l.width) / 2, M = l.top - y.top - (m.height - l.height) / 2) : (B = l.left - y.left, M = l.top - y.top), B += C, M += _;
  const U = {
    ...b,
    anchorRect: l,
    placeLeftX: w,
    placeRightX: E,
    placeLeftorRightY: M,
    placeTopY: x,
    placeBottomY: D,
    placeToporBottomX: B,
    arrowRef: f,
    arrow: t,
    direction: i,
    position: c
  };
  switch (i) {
    case "left":
    case "right":
      return mx(U);
    case "top":
    case "bottom":
    default:
      return yx(U);
  }
}, Ku = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? G.useLayoutEffect : G.useEffect;
function dd(t, n) {
  typeof t == "function" ? t(n) : t.current = n;
}
const ev = (t, n) => G.useMemo(() => t ? n ? (i) => {
  dd(t, i), dd(n, i);
} : t : n, [t, n]), pd = -9999, wx = ({
  ariaLabel: t,
  menuClassName: n,
  menuStyle: i,
  arrow: a,
  arrowProps: s = {},
  anchorPoint: c,
  anchorRef: l,
  containerRef: f,
  containerProps: b,
  focusProps: m,
  externalRef: y,
  parentScrollingRef: v,
  align: C = "start",
  direction: _ = "bottom",
  position: w = "auto",
  overflow: E = "visible",
  setDownOverflow: x,
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
    x: pd,
    y: pd
  }), [je, he] = G.useState({}), [Ce, qe] = G.useState(), [g, O] = G.useState(_), [S] = G.useState(hx), [P, N] = G.useReducer((we) => we + 1, 1), {
    transition: k,
    boundingBoxRef: K,
    boundingBoxPadding: J,
    rootMenuRef: V,
    rootAnchorRef: X,
    scrollNodesRef: se,
    reposition: Pe,
    viewScroll: xe,
    submenuCloseDelay: Ee
  } = G.useContext(Zp), {
    submenuCtx: Ne,
    reposSubmenu: ot = D
  } = G.useContext(fd), be = G.useRef(null), yt = G.useRef(), ct = G.useRef(), lt = G.useRef(!1), pt = G.useRef({
    width: 0,
    height: 0
  }), tt = G.useRef(() => {
  }), {
    hoverItem: It,
    dispatch: et,
    updateItems: H
  } = dx(be, yt), F = Jp(M), Z = Sa(k, "open"), ne = Sa(k, "close"), ae = se.current, Ie = (we) => {
    switch (we.key) {
      case dr.HOME:
        et(Ht.FIRST);
        break;
      case dr.END:
        et(Ht.LAST);
        break;
      case dr.UP:
        et(Ht.DECREASE, It);
        break;
      case dr.DOWN:
        et(Ht.INCREASE, It);
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
  }, nt = (we) => {
    we.stopPropagation(), S.on(Ee, () => {
      et(Ht.RESET), yt.current.focus();
    });
  }, ce = (we) => {
    we.target === we.currentTarget && S.off();
  }, $e = G.useCallback((we) => {
    var We;
    const Xe = l ? (We = l.current) == null ? void 0 : We.getBoundingClientRect() : c ? {
      left: c.x,
      right: c.x,
      top: c.y,
      bottom: c.y,
      width: 0,
      height: 0
    } : null;
    if (!Xe)
      return;
    ae.menu || (ae.menu = (K ? K.current : Yu(V.current)) || window);
    const Ot = px(f, be, ae.menu, J);
    let {
      arrowX: _e,
      arrowY: _t,
      x: Qt,
      y: kt,
      computedDirection: zn
    } = bx({
      arrow: a,
      align: C,
      direction: _,
      gap: de,
      shift: ie,
      position: w,
      anchorRect: Xe,
      arrowRef: ct,
      positionHelpers: Ot
    });
    const {
      menuRect: Nn
    } = Ot;
    let Xt = Nn.height;
    if (!we && E !== "visible") {
      const {
        getTopOverflow: gn,
        getBottomOverflow: tr
      } = Ot;
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
    }), O(zn), pt.current = {
      width: Nn.width,
      height: Xt
    };
  }, [a, C, J, _, de, ie, w, E, c, l, f, K, V, ae]);
  Ku(() => {
    F && ($e(), lt.current && N()), lt.current = F, tt.current = $e;
  }, [F, $e, ot]), Ku(() => {
    Ce && !x && (be.current.scrollTop = 0);
  }, [Ce, x]), Ku(() => H, [H]), G.useEffect(() => {
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
    let We = xe;
    if (ae.anchors.length && We === "initial" && (We = "auto"), We === "initial")
      return;
    const Xe = () => {
      We === "auto" ? cd(() => $e(!0)) : Zn(Fe, {
        reason: Da.SCROLL
      });
    }, Ot = ae.anchors.concat(xe !== "initial" ? we : []);
    return Ot.forEach((_e) => _e.addEventListener("scroll", Xe)), () => Ot.forEach((_e) => _e.removeEventListener("scroll", Xe));
  }, [X, ae, F, Fe, xe, $e]);
  const Et = !!Ce && Ce.overflowAmt > 0;
  G.useEffect(() => {
    if (Et || !F || !v)
      return;
    const we = () => cd($e), We = v.current;
    return We.addEventListener("scroll", we), () => We.removeEventListener("scroll", we);
  }, [F, Et, v, $e]), G.useEffect(() => {
    if (typeof ResizeObserver != "function" || Pe === "initial")
      return;
    const we = new ResizeObserver(([Xe]) => {
      const {
        borderBoxSize: Ot,
        target: _e
      } = Xe;
      let _t, Qt;
      if (Ot) {
        const {
          inlineSize: kt,
          blockSize: zn
        } = Ot[0] || Ot;
        _t = kt, Qt = zn;
      } else {
        const kt = _e.getBoundingClientRect();
        _t = kt.width, Qt = kt.height;
      }
      _t === 0 || Qt === 0 || Ti(_t, pt.current.width, 1) && Ti(Qt, pt.current.height, 1) || $i.flushSync(() => {
        tt.current(), N();
      });
    }), We = be.current;
    return we.observe(We, {
      box: "border-box"
    }), () => we.unobserve(We);
  }, [Pe]), G.useEffect(() => {
    if (!F) {
      et(Ht.RESET), ne || qe();
      return;
    }
    const {
      position: we,
      alwaysUpdate: We
    } = oe || {}, Xe = () => {
      we === ya.FIRST ? et(Ht.FIRST) : we === ya.LAST ? et(Ht.LAST) : we >= -1 && et(Ht.SET_INDEX, void 0, we);
    };
    if (We)
      Xe();
    else if (B) {
      const Ot = setTimeout(() => {
        const _e = be.current;
        _e && !_e.contains(document.activeElement) && (yt.current.focus(), Xe());
      }, Z ? 170 : 100);
      return () => clearTimeout(Ot);
    }
  }, [F, Z, ne, B, oe, et]);
  const vt = G.useMemo(() => ({
    isParentOpen: F,
    submenuCtx: S,
    dispatch: et,
    updateItems: H
  }), [F, S, et, H]);
  let rt, Ve;
  Ce && (x ? Ve = Ce.overflowAmt : rt = Ce.height);
  const Wt = G.useMemo(() => ({
    reposSubmenu: P,
    submenuCtx: S,
    overflow: E,
    overflowAmt: Ve,
    parentMenuRef: be,
    parentDir: g
  }), [P, S, E, Ve, g]), Mt = rt >= 0 ? {
    maxHeight: rt,
    overflow: E
  } : void 0, sn = G.useMemo(() => ({
    state: M,
    dir: g
  }), [M, g]), vn = G.useMemo(() => ({
    dir: g
  }), [g]), Pn = yc({
    block: Gu,
    element: ax,
    modifiers: vn,
    className: s.className
  }), mn = /* @__PURE__ */ Nt.jsxs("ul", {
    role: "menu",
    "aria-label": t,
    ...rx(ee),
    ...Xc({
      onPointerEnter: Ne == null ? void 0 : Ne.off,
      onPointerMove: nt,
      onPointerLeave: ce,
      onKeyDown: Ie,
      onAnimationEnd: Ye
    }, Re),
    ref: ev(y, be),
    className: yc({
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
      ...hd,
      ...m
    }), a && /* @__PURE__ */ Nt.jsx("li", {
      ...hd,
      ...s,
      className: Pn,
      style: {
        display: "block",
        position: Vu,
        left: je.x,
        top: je.y,
        ...s.style
      },
      ref: ct
    }), /* @__PURE__ */ Nt.jsx(fd.Provider, {
      value: Wt,
      children: /* @__PURE__ */ Nt.jsx(sx.Provider, {
        value: vt,
        children: /* @__PURE__ */ Nt.jsx(ox.Provider, {
          value: It,
          children: Zn(fe, sn)
        })
      })
    })]
  });
  return b ? /* @__PURE__ */ Nt.jsx(fx, {
    ...b,
    isOpen: F,
    children: mn
  }) : mn;
}, _x = /* @__PURE__ */ G.forwardRef(function({
  "aria-label": n,
  className: i,
  containerProps: a,
  initialMounted: s,
  unmountOnClose: c,
  transition: l,
  transitionTimeout: f,
  boundingBoxRef: b,
  boundingBoxPadding: m,
  reposition: y = "auto",
  submenuOpenDelay: v = 300,
  submenuCloseDelay: C = 150,
  viewScroll: _ = "initial",
  portal: w,
  theming: E,
  onItemClick: x,
  ...D
}, B) {
  const M = G.useRef(null), U = G.useRef({}), {
    anchorRef: ee,
    state: oe,
    onClose: de
  } = D, ie = G.useMemo(() => ({
    initialMounted: s,
    unmountOnClose: c,
    transition: l,
    transitionTimeout: f,
    boundingBoxRef: b,
    boundingBoxPadding: m,
    rootMenuRef: M,
    rootAnchorRef: ee,
    scrollNodesRef: U,
    reposition: y,
    viewScroll: _,
    submenuOpenDelay: v,
    submenuCloseDelay: C
  }), [s, c, l, f, ee, b, m, y, _, v, C]), fe = G.useMemo(() => ({
    handleClick(Re, Be) {
      Re.stopPropagation || Zn(x, Re);
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
  }), [x, de]);
  if (!oe)
    return null;
  const Fe = /* @__PURE__ */ Nt.jsx(Zp.Provider, {
    value: ie,
    children: /* @__PURE__ */ Nt.jsx(ux.Provider, {
      value: fe,
      children: /* @__PURE__ */ Nt.jsx(wx, {
        ...D,
        ariaLabel: n || "Menu",
        externalRef: B,
        containerRef: M,
        containerProps: {
          className: i,
          containerRef: M,
          containerProps: a,
          theming: E,
          transition: l,
          onClose: de
        }
      })
    })
  });
  return w === !0 && typeof document < "u" ? /* @__PURE__ */ $i.createPortal(Fe, document.body) : w ? w.target ? /* @__PURE__ */ $i.createPortal(Fe, w.target) : w.stablePosition ? null : Fe : Fe;
}), bc = 0, wc = 1, Vo = 2, Ko = 3, Qo = 4, Ax = 5, tv = 6, Ex = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], nv = (t) => ({
  _s: t,
  status: Ex[t],
  isEnter: t < Ko,
  isMounted: t !== tv,
  isResolved: t === Vo || t > Qo
}), _c = (t) => t ? tv : Ax, Ox = (t, n) => {
  switch (t) {
    case wc:
    case bc:
      return Vo;
    case Qo:
    case Ko:
      return _c(n);
  }
}, xx = (t) => typeof t == "object" ? [t.enter, t.exit] : [t, t], Cx = (t, n) => setTimeout(() => {
  isNaN(document.body.offsetTop) || t(n + 1);
}, 0), vd = (t, n, i, a, s) => {
  clearTimeout(a.current);
  const c = nv(t);
  n(c), i.current = c, s && s({
    current: c
  });
}, Tx = ({
  enter: t = !0,
  exit: n = !0,
  preEnter: i,
  preExit: a,
  timeout: s,
  initialEntered: c,
  mountOnEnter: l,
  unmountOnExit: f,
  onStateChange: b
} = {}) => {
  const [m, y] = G.useState(() => nv(c ? Vo : _c(l))), v = G.useRef(m), C = G.useRef(), [_, w] = xx(s), E = G.useCallback(() => {
    const D = Ox(v.current._s, f);
    D && vd(D, y, v, C, b);
  }, [b, f]), x = G.useCallback((D) => {
    const B = (U) => {
      switch (vd(U, y, v, C, b), U) {
        case wc:
          _ >= 0 && (C.current = setTimeout(E, _));
          break;
        case Qo:
          w >= 0 && (C.current = setTimeout(E, w));
          break;
        case bc:
        case Ko:
          C.current = Cx(B, U);
          break;
      }
    }, M = v.current.isEnter;
    typeof D != "boolean" && (D = !M), D ? !M && B(t ? i ? bc : wc : Vo) : M && B(n ? a ? Ko : Qo : _c(f));
  }, [E, b, t, n, i, a, _, w, f]);
  return G.useEffect(() => () => clearTimeout(C.current), []), [m, x, E];
}, Sx = ({
  initialOpen: t,
  initialMounted: n,
  unmountOnClose: i,
  transition: a,
  transitionTimeout: s = 500
} = {}) => {
  const [{
    status: c
  }, l, f] = Tx({
    initialEntered: t,
    mountOnEnter: !n,
    unmountOnExit: i,
    timeout: s,
    enter: Sa(a, "open"),
    exit: Sa(a, "close")
  });
  return [{
    state: cx[c],
    endTransition: f
  }, l];
}, Dx = (t) => {
  const [n, i] = Sx(t), [a, s] = G.useState(), c = (l, f) => {
    s({
      position: l,
      alwaysUpdate: f
    }), i(!0);
  };
  return [{
    menuItemFocus: a,
    ...n
  }, i, c];
}, Rx = (t, n) => {
  const [i] = G.useState({});
  return {
    onMouseDown: () => {
      i.v = t && t !== "closed";
    },
    onClick: (a) => i.v ? i.v = !1 : n(!0, a)
  };
}, Lx = (t, n) => {
  const i = G.useRef(n);
  G.useEffect(() => {
    i.current !== n && Zn(t, {
      open: n
    }), i.current = n;
  }, [t, n]);
}, Px = /* @__PURE__ */ G.forwardRef(function({
  "aria-label": n,
  captureFocus: i,
  initialOpen: a,
  menuButton: s,
  instanceRef: c,
  onMenuChange: l,
  ...f
}, b) {
  const [m, y, v] = Dx(f), {
    state: C
  } = m, _ = Jp(C), w = G.useRef(null), E = Rx(C, (ee, oe) => v(oe.detail ? void 0 : ya.FIRST)), x = G.useCallback((ee) => {
    y(!1), ee.key && w.current.focus();
  }, [y]), D = (ee) => {
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
    ref: ev(B.ref, w),
    ...Xc({
      onKeyDown: D,
      ...E
    }, B.props)
  };
  tx(B.type) === "MenuButton" && (M.isOpen = _);
  const U = /* @__PURE__ */ G.cloneElement(B, M);
  return Lx(l, _), G.useImperativeHandle(c, () => ({
    openMenu: v,
    closeMenu: () => y(!1)
  })), /* @__PURE__ */ Nt.jsxs(G.Fragment, {
    children: [U, /* @__PURE__ */ Nt.jsx(_x, {
      ...f,
      ...m,
      "aria-label": n || (typeof B.props.children == "string" ? B.props.children : "Menu"),
      anchorRef: w,
      ref: b,
      onClose: x
    })]
  });
});
const Nx = "szh-menu", Ix = "item", Mx = (t) => (n) => (i) => {
  let a = `.${t}`;
  return n && (a += `__${n}`), i && (a += `--${i}`), a;
}, rv = (t, n = []) => {
  const i = {};
  return Object.defineProperty(i, "name", {
    value: t(),
    enumerable: !0
  }), n.forEach((a) => {
    const s = a.split("-").reduce((c, l) => `${c}${l[0].toUpperCase()}${l.slice(1)}`);
    Object.defineProperty(i, s, {
      value: t(a),
      enumerable: !0
    });
  }), i;
}, kx = ["dir-left", "dir-right", "dir-top", "dir-bottom"], iv = /* @__PURE__ */ Mx(Nx);
[...kx];
const md = /* @__PURE__ */ rv(/* @__PURE__ */ iv(Ix), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), hC = xc(Px)`
  ${md.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${md.typeCheckbox} {
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
var av = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = "fas", i = "circle-notch", a = 512, s = 512, c = [], l = "f1ce", f = "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z";
  t.definition = {
    prefix: n,
    iconName: i,
    icon: [
      a,
      s,
      c,
      l,
      f
    ]
  }, t.faCircleNotch = t.definition, t.prefix = n, t.iconName = i, t.width = a, t.height = s, t.ligatures = c, t.unicode = l, t.svgPathData = f, t.aliases = c;
})(av);
const Fx = ({
  children: t,
  spinning: n = !0
}) => n ? /* @__PURE__ */ es("div", { css: {
  position: "relative",
  height: "100%",
  width: "100%",
  cursor: "wait"
}, children: [
  /* @__PURE__ */ at("div", { css: {
    opacity: "0.3",
    "--tw-grayscale": "grayscale(100%)",
    filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  }, children: t }),
  n && /* @__PURE__ */ at("div", { css: {
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(229 231 235 / 0.3)"
  }, children: /* @__PURE__ */ at(bw, { icon: av.faCircleNotch, css: [{
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, Oc`
                font-size: 32px;
              `], spin: !0 }) })
] }) : t;
var ov = { exports: {} };
(function(t, n) {
  (function(i, a) {
    t.exports = a(G);
  })(self, (i) => (() => {
    var a = { 58: (f, b, m) => {
      m.d(b, { Z: () => w });
      var y = m(864), v = m.n(y), C = m(352), _ = m.n(C)()(v());
      _.push([f.id, `
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
    }, 672: (f, b, m) => {
      m.d(b, { Z: () => w });
      var y = m(864), v = m.n(y), C = m(352), _ = m.n(C)()(v());
      _.push([f.id, `/* The top-level element of the splitter*/
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
    }, 352: (f) => {
      f.exports = function(b) {
        var m = [];
        return m.toString = function() {
          return this.map(function(y) {
            var v = "", C = y[5] !== void 0;
            return y[4] && (v += "@supports (".concat(y[4], ") {")), y[2] && (v += "@media ".concat(y[2], " {")), C && (v += "@layer".concat(y[5].length > 0 ? " ".concat(y[5]) : "", " {")), v += b(y), C && (v += "}"), y[2] && (v += "}"), y[4] && (v += "}"), v;
          }).join("");
        }, m.i = function(y, v, C, _, w) {
          typeof y == "string" && (y = [[null, y, void 0]]);
          var E = {};
          if (C)
            for (var x = 0; x < this.length; x++) {
              var D = this[x][0];
              D != null && (E[D] = !0);
            }
          for (var B = 0; B < y.length; B++) {
            var M = [].concat(y[B]);
            C && E[M[0]] || (w !== void 0 && (M[5] === void 0 || (M[1] = "@layer".concat(M[5].length > 0 ? " ".concat(M[5]) : "", " {").concat(M[1], "}")), M[5] = w), v && (M[2] && (M[1] = "@media ".concat(M[2], " {").concat(M[1], "}")), M[2] = v), _ && (M[4] ? (M[1] = "@supports (".concat(M[4], ") {").concat(M[1], "}"), M[4] = _) : M[4] = "".concat(_)), m.push(M));
          }
        }, m;
      };
    }, 864: (f) => {
      f.exports = function(b) {
        var m = b[1], y = b[3];
        if (!y)
          return m;
        if (typeof btoa == "function") {
          var v = btoa(unescape(encodeURIComponent(JSON.stringify(y)))), C = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(v), _ = "/*# ".concat(C, " */");
          return [m].concat([_]).join(`
`);
        }
        return [m].join(`
`);
      };
    }, 372: (f, b, m) => {
      var y = m(567);
      function v() {
      }
      function C() {
      }
      C.resetWarningCache = v, f.exports = function() {
        function _(x, D, B, M, U, ee) {
          if (ee !== y) {
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
    }, 652: (f, b, m) => {
      f.exports = m(372)();
    }, 567: (f) => {
      f.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (f) => {
      var b = [];
      function m(C) {
        for (var _ = -1, w = 0; w < b.length; w++)
          if (b[w].identifier === C) {
            _ = w;
            break;
          }
        return _;
      }
      function y(C, _) {
        for (var w = {}, E = [], x = 0; x < C.length; x++) {
          var D = C[x], B = _.base ? D[0] + _.base : D[0], M = w[B] || 0, U = "".concat(B, " ").concat(M);
          w[B] = M + 1;
          var ee = m(U), oe = { css: D[1], media: D[2], sourceMap: D[3], supports: D[4], layer: D[5] };
          if (ee !== -1)
            b[ee].references++, b[ee].updater(oe);
          else {
            var de = v(oe, _);
            _.byIndex = x, b.splice(x, 0, { identifier: U, updater: de, references: 1 });
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
      f.exports = function(C, _) {
        var w = y(C = C || [], _ = _ || {});
        return function(E) {
          E = E || [];
          for (var x = 0; x < w.length; x++) {
            var D = m(w[x]);
            b[D].references--;
          }
          for (var B = y(E, _), M = 0; M < w.length; M++) {
            var U = m(w[M]);
            b[U].references === 0 && (b[U].updater(), b.splice(U, 1));
          }
          w = B;
        };
      };
    }, 80: (f) => {
      var b = {};
      f.exports = function(m, y) {
        var v = function(C) {
          if (b[C] === void 0) {
            var _ = document.querySelector(C);
            if (window.HTMLIFrameElement && _ instanceof window.HTMLIFrameElement)
              try {
                _ = _.contentDocument.head;
              } catch {
                _ = null;
              }
            b[C] = _;
          }
          return b[C];
        }(m);
        if (!v)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        v.appendChild(y);
      };
    }, 182: (f) => {
      f.exports = function(b) {
        var m = document.createElement("style");
        return b.setAttributes(m, b.attributes), b.insert(m, b.options), m;
      };
    }, 850: (f, b, m) => {
      f.exports = function(y) {
        var v = m.nc;
        v && y.setAttribute("nonce", v);
      };
    }, 236: (f) => {
      f.exports = function(b) {
        var m = b.insertStyleElement(b);
        return { update: function(y) {
          (function(v, C, _) {
            var w = "";
            _.supports && (w += "@supports (".concat(_.supports, ") {")), _.media && (w += "@media ".concat(_.media, " {"));
            var E = _.layer !== void 0;
            E && (w += "@layer".concat(_.layer.length > 0 ? " ".concat(_.layer) : "", " {")), w += _.css, E && (w += "}"), _.media && (w += "}"), _.supports && (w += "}");
            var x = _.sourceMap;
            x && typeof btoa < "u" && (w += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(x)))), " */")), C.styleTagTransform(w, v, C.options);
          })(m, b, y);
        }, remove: function() {
          (function(y) {
            if (y.parentNode === null)
              return !1;
            y.parentNode.removeChild(y);
          })(m);
        } };
      };
    }, 213: (f) => {
      f.exports = function(b, m) {
        if (m.styleSheet)
          m.styleSheet.cssText = b;
        else {
          for (; m.firstChild; )
            m.removeChild(m.firstChild);
          m.appendChild(document.createTextNode(b));
        }
      };
    }, 359: (f) => {
      f.exports = i;
    } }, s = {};
    function c(f) {
      var b = s[f];
      if (b !== void 0)
        return b.exports;
      var m = s[f] = { id: f, exports: {} };
      return a[f](m, m.exports, c), m.exports;
    }
    c.n = (f) => {
      var b = f && f.__esModule ? () => f.default : () => f;
      return c.d(b, { a: b }), b;
    }, c.d = (f, b) => {
      for (var m in b)
        c.o(b, m) && !c.o(f, m) && Object.defineProperty(f, m, { enumerable: !0, get: b[m] });
    }, c.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), c.o = (f, b) => Object.prototype.hasOwnProperty.call(f, b), c.r = (f) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 });
    }, c.nc = void 0;
    var l = {};
    return (() => {
      c.r(l), c.d(l, { DefaultSplitter: () => de, Split: () => et });
      var f = c(359), b = c(701), m = c.n(b), y = c(236), v = c.n(y), C = c(80), _ = c.n(C), w = c(850), E = c.n(w), x = c(182), D = c.n(x), B = c(213), M = c.n(B), U = c(58), ee = {};
      ee.styleTagTransform = M(), ee.setAttributes = E(), ee.insert = _().bind(null, "head"), ee.domAPI = v(), ee.insertStyleElement = D(), m()(U.Z, ee), U.Z && U.Z.locals && U.Z.locals;
      const oe = (H) => (H % 2 == 0 ? 2 : 3) + "px", de = (H) => {
        const { dragging: F, pixelSize: Z, color: ne = "silver", hoverColor: ae = "gray", dragColor: Ie = "black" } = H, Ye = { "--default-splitter-line-margin": (nt = Z, `${Math.max(0, Math.floor(nt / 2) - 1)}px`), "--default-splitter-line-size": oe(Z), "--default-splitter-line-color": F ? Ie : ne, "--default-splitter-line-hover-color": F ? Ie : ae };
        var nt;
        return f.createElement("div", { className: "default-splitter", style: Ye }, f.createElement("div", { className: "line" }));
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
      var Fe = c(652), Re = c.n(Fe), Be = function() {
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
      }(), Qe = typeof window < "u" && typeof document < "u" && window.document === document, je = c.g !== void 0 && c.g.Math === Math ? c.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), he = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(je) : function(H) {
        return setTimeout(function() {
          return H(Date.now());
        }, 1e3 / 60);
      }, Ce = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], qe = typeof MutationObserver < "u", g = function() {
        function H() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(F, Z) {
            var ne = !1, ae = !1, Ie = 0;
            function Ye() {
              ne && (ne = !1, F()), ae && ce();
            }
            function nt() {
              he(Ye);
            }
            function ce() {
              var $e = Date.now();
              if (ne) {
                if ($e - Ie < 2)
                  return;
                ae = !0;
              } else
                ne = !0, ae = !1, setTimeout(nt, 20);
              Ie = $e;
            }
            return ce;
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
      }(), O = function(H, F) {
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
          var ae = S(F).getComputedStyle(F), Ie = function(rt) {
            for (var Ve = {}, Wt = 0, Mt = ["top", "right", "bottom", "left"]; Wt < Mt.length; Wt++) {
              var sn = Mt[Wt], vn = rt["padding-" + sn];
              Ve[sn] = N(vn);
            }
            return Ve;
          }(ae), Ye = Ie.left + Ie.right, nt = Ie.top + Ie.bottom, ce = N(ae.width), $e = N(ae.height);
          if (ae.boxSizing === "border-box" && (Math.round(ce + Ye) !== Z && (ce -= k(ae, "left", "right") + Ye), Math.round($e + nt) !== ne && ($e -= k(ae, "top", "bottom") + nt)), !function(rt) {
            return rt === S(rt).document.documentElement;
          }(F)) {
            var Et = Math.round(ce + Ye) - Z, vt = Math.round($e + nt) - ne;
            Math.abs(Et) !== 1 && (ce -= Et), Math.abs(vt) !== 1 && ($e -= vt);
          }
          return V(Ie.left, Ie.top, ce, $e);
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
        var Z, ne, ae, Ie, Ye, nt, ce, $e = (ne = (Z = F).x, ae = Z.y, Ie = Z.width, Ye = Z.height, nt = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, ce = Object.create(nt.prototype), O(ce, { x: ne, y: ae, width: Ie, height: Ye, top: ae, right: ne + Ie, bottom: Ye + ae, left: ne }), ce);
        O(this, { target: H, contentRect: $e });
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
      }(), xe = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Be(), Ee = function H(F) {
        if (!(this instanceof H))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var Z = g.getInstance(), ne = new Pe(F, Z, this);
        xe.set(this, ne);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(H) {
        Ee.prototype[H] = function() {
          var F;
          return (F = xe.get(this))[H].apply(F, arguments);
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
      function ct(H) {
        return H && H.ownerDocument && H.ownerDocument.defaultView || window;
      }
      var lt = function(H) {
        var F, Z;
        return Z = F = function(ne) {
          var ae, Ie;
          function Ye() {
            for (var ce, $e = arguments.length, Et = new Array($e), vt = 0; vt < $e; vt++)
              Et[vt] = arguments[vt];
            return (ce = ne.call.apply(ne, [this].concat(Et)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, ce._animationFrameID = null, ce._resizeObserver = null, ce._node = null, ce._window = null, ce.measure = function(rt) {
              var Ve = yt(ce._node, be(ce.props));
              rt && (Ve.entry = rt[0].contentRect), ce._animationFrameID = ce._window.requestAnimationFrame(function() {
                ce._resizeObserver !== null && (ce.setState({ contentRect: Ve }), typeof ce.props.onResize == "function" && ce.props.onResize(Ve));
              });
            }, ce._handleRef = function(rt) {
              ce._resizeObserver !== null && ce._node !== null && ce._resizeObserver.unobserve(ce._node), ce._node = rt, ce._window = ct(ce._node);
              var Ve = ce.props.innerRef;
              Ve && (typeof Ve == "function" ? Ve(ce._node) : Ve.current = ce._node), ce._resizeObserver !== null && ce._node !== null && ce._resizeObserver.observe(ce._node);
            }, ce;
          }
          Ie = ne, (ae = Ye).prototype = Object.create(Ie.prototype), ae.prototype.constructor = ae, fe(ae, Ie);
          var nt = Ye.prototype;
          return nt.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new Ne(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(yt(this._node, be(this.props))));
          }, nt.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, nt.render = function() {
            var ce = this.props, $e = (ce.innerRef, ce.onResize, function(Et, vt) {
              if (Et == null)
                return {};
              var rt, Ve, Wt = {}, Mt = Object.keys(Et);
              for (Ve = 0; Ve < Mt.length; Ve++)
                rt = Mt[Ve], vt.indexOf(rt) >= 0 || (Wt[rt] = Et[rt]);
              return Wt;
            }(ce, ["innerRef", "onResize"]));
            return (0, f.createElement)(H, ie({}, $e, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, Ye;
        }(f.Component), F.propTypes = { client: Re().bool, offset: Re().bool, scroll: Re().bool, bounds: Re().bool, margin: Re().bool, innerRef: Re().oneOfType([Re().object, Re().func]), onResize: Re().func }, Z;
      }(function(H) {
        var F = H.measure, Z = H.measureRef, ne = H.contentRect;
        return (0, H.children)({ measure: F, measureRef: Z, contentRect: ne });
      });
      lt.displayName = "Measure", lt.propTypes.children = Re().func;
      const pt = lt;
      var tt = c(672), It = {};
      It.styleTagTransform = M(), It.setAttributes = E(), It.insert = _().bind(null, "head"), It.domAPI = v(), It.insertStyleElement = D(), m()(tt.Z, It), tt.Z && tt.Z.locals && tt.Z.locals;
      const et = (H) => {
        const { horizontal: F = !1, initialPrimarySize: Z = "50%", minPrimarySize: ne = "0px", minSecondarySize: ae = "0px", splitterSize: Ie = "7px", renderSplitter: Ye, resetOnDoubleClick: nt = !1, defaultSplitterColors: ce = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: $e, onMeasuredSizesChanged: Et } = H, [vt, rt] = f.useState({ height: 0, width: 0 }), [Ve, Wt] = f.useState({ height: 0, width: 0 }), [Mt, sn] = f.useState({ height: 0, width: 0 }), vn = f.useMemo(() => F ? vt.height : vt.width, [F, vt]), Pn = f.useMemo(() => F ? Ve.height : Ve.width, [F, Ve]), mn = f.useMemo(() => F ? Mt.height : Mt.width, [F, Mt]), [we, We] = f.useState(void 0), [Xe, Ot] = f.useState(0), [_e, _t] = f.useState(0), [Qt, kt] = f.useState(!1);
        f.useEffect(() => {
          $e && $e(we !== void 0 ? `${we}%` : Z);
        }, [we, Z]), f.useEffect(() => {
          Et && Et({ primary: Pn, splitter: mn, secondary: vn - (Pn + mn) });
        }, [F, vn, Pn, mn]);
        const zn = (ge) => {
          ge.bounds && Wt({ height: ge.bounds.height, width: ge.bounds.width });
        }, Nn = (ge) => {
          ge.bounds && sn({ height: ge.bounds.height, width: ge.bounds.width });
        }, Xt = (ge) => {
          ge.currentTarget.setPointerCapture(ge.pointerId), Ot(F ? ge.clientY : ge.clientX), _t(Pn), kt(!0);
        }, gn = (ge) => {
          if (ge.currentTarget.hasPointerCapture(ge.pointerId)) {
            const St = F ? ge.clientY : ge.clientX, qt = _e + (St - Xe), zr = Math.max(0, Math.min(qt, vn));
            We(zr / vn * 100);
          }
        }, tr = (ge) => {
          ge.currentTarget.releasePointerCapture(ge.pointerId), kt(!1);
        }, Jt = () => {
          nt && We(void 0);
        }, Zt = f.Children.toArray(H.children), gr = Zt.length > 0 ? Zt[0] : f.createElement("div", null), yn = Zt.length > 1 ? Zt[1] : f.createElement("div", null), en = { primary: we !== void 0 ? `${we}%` : Z, minPrimary: ne ?? "0px", minSecondary: ae ?? "0px" }, li = { pixelSize: mn, horizontal: F, dragging: Qt }, Qi = Ye ?? (() => f.createElement(de, Object.assign({}, li, { color: Qt ? ce.drag : ce.color, hoverColor: Qt ? ce.drag : ce.hover }))), Te = F ? "split-container horizontal" : "split-container vertical", st = { "--react-split-min-primary": en.minPrimary, "--react-split-min-secondary": en.minSecondary, "--react-split-primary": en.primary, "--react-split-splitter": Ie };
        return f.createElement(pt, { bounds: !0, onResize: (ge) => {
          ge.bounds && rt({ height: ge.bounds.height, width: ge.bounds.width });
        } }, ({ measureRef: ge }) => f.createElement("div", { className: "react-split", ref: ge }, f.createElement("div", { className: Te, style: st }, f.createElement("div", { className: "primary" }, f.createElement(pt, { bounds: !0, onResize: zn }, ({ measureRef: St }) => f.createElement("div", { className: "full-content", ref: St }, gr))), f.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: Xt, onPointerUp: tr, onPointerMove: gn, onDoubleClick: Jt }, f.createElement(pt, { bounds: !0, onResize: Nn }, ({ measureRef: St }) => f.createElement("div", { className: "full-content", ref: St }, Qi(li)))), f.createElement("div", { className: "secondary" }, f.createElement("div", { className: "full-content" }, yn)))));
      };
    })(), l;
  })());
})(ov);
var dC = ov.exports;
const vr = Symbol.for("@ts-pattern/matcher"), Bx = Symbol.for("@ts-pattern/isVariadic"), Xo = "@ts-pattern/anonymous-select-key", Ac = (t) => !!(t && typeof t == "object"), Wo = (t) => t && !!t[vr], Xn = (t, n, i) => {
  if (Wo(t)) {
    const a = t[vr](), { matched: s, selections: c } = a.match(n);
    return s && c && Object.keys(c).forEach((l) => i(l, c[l])), s;
  }
  if (Ac(t)) {
    if (!Ac(n))
      return !1;
    if (Array.isArray(t)) {
      if (!Array.isArray(n))
        return !1;
      let a = [], s = [], c = [];
      for (const l of t.keys()) {
        const f = t[l];
        Wo(f) && f[Bx] ? c.push(f) : c.length ? s.push(f) : a.push(f);
      }
      if (c.length) {
        if (c.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (n.length < a.length + s.length)
          return !1;
        const l = n.slice(0, a.length), f = s.length === 0 ? [] : n.slice(-s.length), b = n.slice(a.length, s.length === 0 ? 1 / 0 : -s.length);
        return a.every((m, y) => Xn(m, l[y], i)) && s.every((m, y) => Xn(m, f[y], i)) && (c.length === 0 || Xn(c[0], b, i));
      }
      return t.length === n.length && t.every((l, f) => Xn(l, n[f], i));
    }
    return Object.keys(t).every((a) => {
      const s = t[a];
      return (a in n || Wo(c = s) && c[vr]().matcherType === "optional") && Xn(s, n[a], i);
      var c;
    });
  }
  return Object.is(n, t);
}, Br = (t) => {
  var n, i, a;
  return Ac(t) ? Wo(t) ? (n = (i = (a = t[vr]()).getSelectionKeys) == null ? void 0 : i.call(a)) != null ? n : [] : Array.isArray(t) ? Ra(t, Br) : Ra(Object.values(t), Br) : [];
}, Ra = (t, n) => t.reduce((i, a) => i.concat(n(a)), []);
function Un(t) {
  return Object.assign(t, { optional: () => Wx(t), and: (n) => wt(t, n), or: (n) => Ux(t, n), select: (n) => n === void 0 ? gd(t) : gd(n, t) });
}
function Wx(t) {
  return Un({ [vr]: () => ({ match: (n) => {
    let i = {};
    const a = (s, c) => {
      i[s] = c;
    };
    return n === void 0 ? (Br(t).forEach((s) => a(s, void 0)), { matched: !0, selections: i }) : { matched: Xn(t, n, a), selections: i };
  }, getSelectionKeys: () => Br(t), matcherType: "optional" }) });
}
function wt(...t) {
  return Un({ [vr]: () => ({ match: (n) => {
    let i = {};
    const a = (s, c) => {
      i[s] = c;
    };
    return { matched: t.every((s) => Xn(s, n, a)), selections: i };
  }, getSelectionKeys: () => Ra(t, Br), matcherType: "and" }) });
}
function Ux(...t) {
  return Un({ [vr]: () => ({ match: (n) => {
    let i = {};
    const a = (s, c) => {
      i[s] = c;
    };
    return Ra(t, Br).forEach((s) => a(s, void 0)), { matched: t.some((s) => Xn(s, n, a)), selections: i };
  }, getSelectionKeys: () => Ra(t, Br), matcherType: "or" }) });
}
function Ze(t) {
  return { [vr]: () => ({ match: (n) => ({ matched: !!t(n) }) }) };
}
function gd(...t) {
  const n = typeof t[0] == "string" ? t[0] : void 0, i = t.length === 2 ? t[1] : typeof t[0] == "string" ? void 0 : t[0];
  return Un({ [vr]: () => ({ match: (a) => {
    let s = { [n ?? Xo]: a };
    return { matched: i === void 0 || Xn(i, a, (c, l) => {
      s[c] = l;
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
const Gn = (t) => Object.assign(Un(t), { between: (n, i) => Gn(wt(t, ((a, s) => Ze((c) => Yn(c) && a <= c && s >= c))(n, i))), lt: (n) => Gn(wt(t, ((i) => Ze((a) => Yn(a) && a < i))(n))), gt: (n) => Gn(wt(t, ((i) => Ze((a) => Yn(a) && a > i))(n))), lte: (n) => Gn(wt(t, ((i) => Ze((a) => Yn(a) && a <= i))(n))), gte: (n) => Gn(wt(t, ((i) => Ze((a) => Yn(a) && a >= i))(n))), int: () => Gn(wt(t, Ze((n) => Yn(n) && Number.isInteger(n)))), finite: () => Gn(wt(t, Ze((n) => Yn(n) && Number.isFinite(n)))), positive: () => Gn(wt(t, Ze((n) => Yn(n) && n > 0))), negative: () => Gn(wt(t, Ze((n) => Yn(n) && n < 0))) });
Gn(Ze(Yn));
const Rr = (t) => Object.assign(Un(t), { between: (n, i) => Rr(wt(t, ((a, s) => Ze((c) => Dr(c) && a <= c && s >= c))(n, i))), lt: (n) => Rr(wt(t, ((i) => Ze((a) => Dr(a) && a < i))(n))), gt: (n) => Rr(wt(t, ((i) => Ze((a) => Dr(a) && a > i))(n))), lte: (n) => Rr(wt(t, ((i) => Ze((a) => Dr(a) && a <= i))(n))), gte: (n) => Rr(wt(t, ((i) => Ze((a) => Dr(a) && a >= i))(n))), positive: () => Rr(wt(t, Ze((n) => Dr(n) && n > 0))), negative: () => Rr(wt(t, Ze((n) => Dr(n) && n < 0))) });
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
const Ec = { matched: !1, value: void 0 };
function pC(t) {
  return new Jo(t, Ec);
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
    let c = !1, l = {};
    const f = (m, y) => {
      c = !0, l[m] = y;
    }, b = !a.some((m) => Xn(m, this.input, f)) || s && !s(this.input) ? Ec : { matched: !0, value: i(c ? Xo in l ? l[Xo] : l : this.input, this.input) };
    return new Jo(this.input, b);
  }
  when(n, i) {
    if (this.state.matched)
      return this;
    const a = !!n(this.input);
    return new Jo(this.input, a ? { matched: !0, value: i(this.input, this.input) } : Ec);
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
const zx = ({
  component: t
}) => {
  const n = G.useMemo(() => G.lazy(() => t()), [t]);
  return /* @__PURE__ */ at(G.Suspense, { fallback: /* @__PURE__ */ at(Fx, {}), children: /* @__PURE__ */ at(n, {}) });
}, sv = te.createContext(null), vC = () => {
  const t = te.useContext(sv);
  if (!t)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return t;
}, Hx = ({
  children: t,
  ...n
}) => {
  const [i, a] = te.useState();
  return /* @__PURE__ */ at(sv.Provider, { value: {
    ...n,
    state: i,
    setState: a
  }, children: t });
}, jx = ({
  el: t,
  match: n,
  window: i
}) => $i.createPortal(/* @__PURE__ */ at(Hx, { width: 0, height: 0, title: "", position: {
  x: 0,
  y: 0
}, maximized: !0, folded: !0, focused: !0, params: n.params, focus: () => i == null ? void 0 : i.focus(), blur: () => i == null ? void 0 : i.blur(), maximize: () => i == null ? void 0 : i.maximize(), minimize: () => i == null ? void 0 : i.restore(), fold: () => i == null ? void 0 : i.minimize(), close: () => {
  setTimeout(() => {
    i == null || i.close();
  }, 50);
}, updatePosition: ({
  x: a,
  y: s
}) => i == null ? void 0 : i.showAt(a, s), setTitle: (a) => i == null ? void 0 : i.setTitle(a), setWidth: (a) => i == null ? void 0 : i.setWidth(a), setHeight: (a) => i == null ? void 0 : i.setHeight(a), children: /* @__PURE__ */ at(zx, { component: n.route.component }) }), t), $x = te.memo(jx), qx = te.createContext(null), Yx = ({
  children: t,
  navigate: n
}) => /* @__PURE__ */ at(qx.Provider, { value: {
  navigate: n
}, children: t }), Gx = ({
  eventEmitter: t,
  onNavigate: n,
  session: i,
  onSessionUpdate: a,
  onSessionExpired: s,
  onReady: c
}) => {
  const [l, f] = te.useState([]), [b, m] = te.useState(i);
  return te.useEffect(() => (t.on("update-session", (y) => {
    m(y);
  }), t.on("add", (y, v, C) => {
    f((_) => [..._, {
      el: y,
      match: v,
      window: C
    }]);
  }), t.on("destroy", (y) => {
    f((v) => v.filter((C) => C.el !== y));
  }), c(), () => {
    t.removeAllListeners("update-session"), t.removeAllListeners("add"), t.removeAllListeners("destroy");
  }), [t]), /* @__PURE__ */ at(FA, { session: b, updateSession: (y) => {
    a(y), m(y);
  }, onSessionExpired: s, children: /* @__PURE__ */ es(Yx, { navigate: n, children: [
    /* @__PURE__ */ at(kw, {}),
    /* @__PURE__ */ at(Dd, { styles: Oc`
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
    l.map((y) => /* @__PURE__ */ at($x, { ...y }, y.match.route.id))
  ] }) });
}, Vx = (t) => t.map((n) => [n, l_(n.path)]), Kx = (t, n) => {
  for (let i = 0; i < t.length; i++) {
    const [a, s] = t[i], c = s(n);
    if (c)
      return {
        params: c.params,
        route: a,
        path: n
      };
  }
};
te.createContext(null);
window.initReact = ({
  session: t,
  onNavigate: n,
  onSessionExpired: i,
  onSessionUpdate: a,
  onReady: s
}) => {
  const c = document.createElement("div");
  document.body.appendChild(c);
  const l = new Cw(), f = t ? new s_(t) : void 0, b = Vx(Ow.filter((m) => !m.notExposeToLibrary && ((f == null ? void 0 : f.can(m.privilege)) || !0)));
  return Ju.createRoot(c).render(/* @__PURE__ */ at(Gx, { session: t, eventEmitter: l, onReady: s, onNavigate: (m) => {
    n == null || n(m);
  }, onSessionExpired: () => {
    i == null || i();
  }, onSessionUpdate: (m) => {
    a == null || a(m);
  } })), {
    updateSession: (m) => {
      l.emit("update-session", m);
    },
    match(m) {
      const y = Kx(b, m);
      if (y)
        return {
          windowOptions: y.route.windowOptions,
          renderComponent: (v, C) => l.emit("add", v, y, C),
          destroyComponent: (v) => l.emit("destroy", v)
        };
    },
    getShortcuts() {
      return b.filter(([m]) => m.shortcut).map(([m]) => ({
        ...m.shortcut,
        route: m.path
      }));
    }
  };
};
export {
  Bn as $,
  wx as A,
  cd as B,
  uC as C,
  hC as D,
  ux as E,
  ww as F,
  tC as G,
  ox as H,
  hO as I,
  nC as J,
  dr as K,
  rs as L,
  fd as M,
  pC as N,
  Kt as O,
  Fd as P,
  ht as Q,
  lC as R,
  Fx as S,
  eC as T,
  s_ as U,
  ba as V,
  Jw as W,
  rC as X,
  jd as Y,
  aC as Z,
  oC as _,
  vC as a,
  is as a0,
  Bw as a1,
  Ww as a2,
  tc as a3,
  Sc as a4,
  zw as a5,
  iC as a6,
  es as b,
  qx as c,
  dC as d,
  Ku as e,
  av as f,
  Zp as g,
  sx as h,
  Dx as i,
  at as j,
  Jp as k,
  o_ as l,
  Lx as m,
  Xc as n,
  yc as o,
  Gu as p,
  lx as q,
  fC as r,
  cC as s,
  rx as t,
  a_ as u,
  ev as v,
  sC as w,
  Zn as x,
  Ht as y,
  ya as z
};
