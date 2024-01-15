import { j as e, a as B, S as Ct } from "./library-ea68d1cc.js";
import { r as K, R as Et } from "./react-181b9648.js";
import { u as F, C as We, z as a, T as k, F as c, P as xt, D as X, R as zt, Y as ze, a as q, b as ve, c as L, N as W, L as Bt, B as Fe, d as N, e as Tt } from "./RootSection-70eb6e7e.js";
import { P as Dt, u as Ot } from "./useDictionary-cd08dfb2.js";
import { a as kt, B as Y } from "./mui-d2313b11.js";
import { f as St } from "./faPen-6d05924c.js";
import { f as qt } from "./faCheckCircle-ad748d9a.js";
import { F as ge } from "./icons-42066a3f.js";
import { u as Be } from "./useWindowController-393e37c7.js";
var T = /* @__PURE__ */ ((n) => (n.DONE = "done", n.ACTIVE = "active", n.WAIT = "wait", n.DISABLED = "disabled", n))(T || {});
const It = ({
  steps: n
}) => {
  const [r, t] = K.useState(n[0]), h = K.useRef(null), _ = K.useMemo(() => n.findIndex((u) => u.id === (r == null ? void 0 : r.id)) || 0, [r]), f = _ === n.length - 1, D = K.useCallback(async () => {
    if (!f)
      try {
        h.current && await h.current.save(), t(n[_ + 1]);
      } catch {
      }
  }, [_, f]), l = K.useCallback(() => {
    _ !== 0 && t(n[_ - 1]);
  }, [_]);
  return {
    stepFormRef: h,
    getNextButtonProps: () => ({
      onClick: D,
      disabled: f
    }),
    activeStep: n[_],
    activeStepIndex: _,
    setActiveStep: t,
    getPrevButtonProps: () => ({
      onClick: l,
      disabled: _ === 0
    })
  };
}, Ne = Et.createContext(null), oe = (n) => {
  const {
    stepFormRef: r,
    mutation: t
  } = K.useContext(Ne), h = F({
    mutation: t,
    ...n
  });
  return K.useImperativeHandle(r, () => ({
    save: () => h.submit()
  })), h;
};
var Le = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = "fas", t = "arrow-left", h = 448, _ = 512, f = [8592], D = "f060", l = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  n.definition = {
    prefix: r,
    iconName: t,
    icon: [
      h,
      _,
      f,
      D,
      l
    ]
  }, n.faArrowLeft = n.definition, n.prefix = r, n.iconName = t, n.width = h, n.height = _, n.ligatures = f, n.unicode = D, n.svgPathData = l, n.aliases = f;
})(Le);
var Ye = { exports: {} };
(function(n, r) {
  (function(t, h) {
    n.exports = h(K);
  })(self, (t) => (() => {
    var h = { 58: (l, u, m) => {
      m.d(u, { Z: () => v });
      var A = m(864), w = m.n(A), y = m(352), p = m.n(y)()(w());
      p.push([l.id, `
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
      const v = p;
    }, 672: (l, u, m) => {
      m.d(u, { Z: () => v });
      var A = m(864), w = m.n(A), y = m(352), p = m.n(y)()(w());
      p.push([l.id, `/* The top-level element of the splitter*/
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
      const v = p;
    }, 352: (l) => {
      l.exports = function(u) {
        var m = [];
        return m.toString = function() {
          return this.map(function(A) {
            var w = "", y = A[5] !== void 0;
            return A[4] && (w += "@supports (".concat(A[4], ") {")), A[2] && (w += "@media ".concat(A[2], " {")), y && (w += "@layer".concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")), w += u(A), y && (w += "}"), A[2] && (w += "}"), A[4] && (w += "}"), w;
          }).join("");
        }, m.i = function(A, w, y, p, v) {
          typeof A == "string" && (A = [[null, A, void 0]]);
          var E = {};
          if (y)
            for (var I = 0; I < this.length; I++) {
              var j = this[I][0];
              j != null && (E[j] = !0);
            }
          for (var H = 0; H < A.length; H++) {
            var C = [].concat(A[H]);
            y && E[C[0]] || (v !== void 0 && (C[5] === void 0 || (C[1] = "@layer".concat(C[5].length > 0 ? " ".concat(C[5]) : "", " {").concat(C[1], "}")), C[5] = v), w && (C[2] && (C[1] = "@media ".concat(C[2], " {").concat(C[1], "}")), C[2] = w), p && (C[4] ? (C[1] = "@supports (".concat(C[4], ") {").concat(C[1], "}"), C[4] = p) : C[4] = "".concat(p)), m.push(C));
          }
        }, m;
      };
    }, 864: (l) => {
      l.exports = function(u) {
        var m = u[1], A = u[3];
        if (!A)
          return m;
        if (typeof btoa == "function") {
          var w = btoa(unescape(encodeURIComponent(JSON.stringify(A)))), y = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(w), p = "/*# ".concat(y, " */");
          return [m].concat([p]).join(`
`);
        }
        return [m].join(`
`);
      };
    }, 372: (l, u, m) => {
      var A = m(567);
      function w() {
      }
      function y() {
      }
      y.resetWarningCache = w, l.exports = function() {
        function p(I, j, H, C, $, V) {
          if (V !== A) {
            var ee = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw ee.name = "Invariant Violation", ee;
          }
        }
        function v() {
          return p;
        }
        p.isRequired = p;
        var E = { array: p, bigint: p, bool: p, func: p, number: p, object: p, string: p, symbol: p, any: p, arrayOf: v, element: p, elementType: p, instanceOf: v, node: p, objectOf: v, oneOf: v, oneOfType: v, shape: v, exact: v, checkPropTypes: y, resetWarningCache: w };
        return E.PropTypes = E, E;
      };
    }, 652: (l, u, m) => {
      l.exports = m(372)();
    }, 567: (l) => {
      l.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (l) => {
      var u = [];
      function m(y) {
        for (var p = -1, v = 0; v < u.length; v++)
          if (u[v].identifier === y) {
            p = v;
            break;
          }
        return p;
      }
      function A(y, p) {
        for (var v = {}, E = [], I = 0; I < y.length; I++) {
          var j = y[I], H = p.base ? j[0] + p.base : j[0], C = v[H] || 0, $ = "".concat(H, " ").concat(C);
          v[H] = C + 1;
          var V = m($), ee = { css: j[1], media: j[2], sourceMap: j[3], supports: j[4], layer: j[5] };
          if (V !== -1)
            u[V].references++, u[V].updater(ee);
          else {
            var le = w(ee, p);
            p.byIndex = I, u.splice(I, 0, { identifier: $, updater: le, references: 1 });
          }
          E.push($);
        }
        return E;
      }
      function w(y, p) {
        var v = p.domAPI(p);
        return v.update(y), function(E) {
          if (E) {
            if (E.css === y.css && E.media === y.media && E.sourceMap === y.sourceMap && E.supports === y.supports && E.layer === y.layer)
              return;
            v.update(y = E);
          } else
            v.remove();
        };
      }
      l.exports = function(y, p) {
        var v = A(y = y || [], p = p || {});
        return function(E) {
          E = E || [];
          for (var I = 0; I < v.length; I++) {
            var j = m(v[I]);
            u[j].references--;
          }
          for (var H = A(E, p), C = 0; C < v.length; C++) {
            var $ = m(v[C]);
            u[$].references === 0 && (u[$].updater(), u.splice($, 1));
          }
          v = H;
        };
      };
    }, 80: (l) => {
      var u = {};
      l.exports = function(m, A) {
        var w = function(y) {
          if (u[y] === void 0) {
            var p = document.querySelector(y);
            if (window.HTMLIFrameElement && p instanceof window.HTMLIFrameElement)
              try {
                p = p.contentDocument.head;
              } catch {
                p = null;
              }
            u[y] = p;
          }
          return u[y];
        }(m);
        if (!w)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        w.appendChild(A);
      };
    }, 182: (l) => {
      l.exports = function(u) {
        var m = document.createElement("style");
        return u.setAttributes(m, u.attributes), u.insert(m, u.options), m;
      };
    }, 850: (l, u, m) => {
      l.exports = function(A) {
        var w = m.nc;
        w && A.setAttribute("nonce", w);
      };
    }, 236: (l) => {
      l.exports = function(u) {
        var m = u.insertStyleElement(u);
        return { update: function(A) {
          (function(w, y, p) {
            var v = "";
            p.supports && (v += "@supports (".concat(p.supports, ") {")), p.media && (v += "@media ".concat(p.media, " {"));
            var E = p.layer !== void 0;
            E && (v += "@layer".concat(p.layer.length > 0 ? " ".concat(p.layer) : "", " {")), v += p.css, E && (v += "}"), p.media && (v += "}"), p.supports && (v += "}");
            var I = p.sourceMap;
            I && typeof btoa < "u" && (v += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(I)))), " */")), y.styleTagTransform(v, w, y.options);
          })(m, u, A);
        }, remove: function() {
          (function(A) {
            if (A.parentNode === null)
              return !1;
            A.parentNode.removeChild(A);
          })(m);
        } };
      };
    }, 213: (l) => {
      l.exports = function(u, m) {
        if (m.styleSheet)
          m.styleSheet.cssText = u;
        else {
          for (; m.firstChild; )
            m.removeChild(m.firstChild);
          m.appendChild(document.createTextNode(u));
        }
      };
    }, 359: (l) => {
      l.exports = t;
    } }, _ = {};
    function f(l) {
      var u = _[l];
      if (u !== void 0)
        return u.exports;
      var m = _[l] = { id: l, exports: {} };
      return h[l](m, m.exports, f), m.exports;
    }
    f.n = (l) => {
      var u = l && l.__esModule ? () => l.default : () => l;
      return f.d(u, { a: u }), u;
    }, f.d = (l, u) => {
      for (var m in u)
        f.o(u, m) && !f.o(l, m) && Object.defineProperty(l, m, { enumerable: !0, get: u[m] });
    }, f.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), f.o = (l, u) => Object.prototype.hasOwnProperty.call(l, u), f.r = (l) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
    }, f.nc = void 0;
    var D = {};
    return (() => {
      f.r(D), f.d(D, { DefaultSplitter: () => le, Split: () => it });
      var l = f(359), u = f(701), m = f.n(u), A = f(236), w = f.n(A), y = f(80), p = f.n(y), v = f(850), E = f.n(v), I = f(182), j = f.n(I), H = f(213), C = f.n(H), $ = f(58), V = {};
      V.styleTagTransform = C(), V.setAttributes = E(), V.insert = p().bind(null, "head"), V.domAPI = w(), V.insertStyleElement = j(), m()($.Z, V), $.Z && $.Z.locals && $.Z.locals;
      const ee = (i) => (i % 2 == 0 ? 2 : 3) + "px", le = (i) => {
        const { dragging: o, pixelSize: s, color: d = "silver", hoverColor: g = "gray", dragColor: x = "black" } = i, O = { "--default-splitter-line-margin": (M = s, `${Math.max(0, Math.floor(M / 2) - 1)}px`), "--default-splitter-line-size": ee(s), "--default-splitter-line-color": o ? x : d, "--default-splitter-line-hover-color": o ? x : g };
        var M;
        return l.createElement("div", { className: "default-splitter", style: O }, l.createElement("div", { className: "line" }));
      };
      function Ae() {
        return Ae = Object.assign ? Object.assign.bind() : function(i) {
          for (var o = 1; o < arguments.length; o++) {
            var s = arguments[o];
            for (var d in s)
              Object.prototype.hasOwnProperty.call(s, d) && (i[d] = s[d]);
          }
          return i;
        }, Ae.apply(this, arguments);
      }
      function ye(i, o) {
        return ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, d) {
          return s.__proto__ = d, s;
        }, ye(i, o);
      }
      var He = f(652), G = f.n(He), Te = function() {
        if (typeof Map < "u")
          return Map;
        function i(o, s) {
          var d = -1;
          return o.some(function(g, x) {
            return g[0] === s && (d = x, !0);
          }), d;
        }
        return function() {
          function o() {
            this.__entries__ = [];
          }
          return Object.defineProperty(o.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), o.prototype.get = function(s) {
            var d = i(this.__entries__, s), g = this.__entries__[d];
            return g && g[1];
          }, o.prototype.set = function(s, d) {
            var g = i(this.__entries__, s);
            ~g ? this.__entries__[g][1] = d : this.__entries__.push([s, d]);
          }, o.prototype.delete = function(s) {
            var d = this.__entries__, g = i(d, s);
            ~g && d.splice(g, 1);
          }, o.prototype.has = function(s) {
            return !!~i(this.__entries__, s);
          }, o.prototype.clear = function() {
            this.__entries__.splice(0);
          }, o.prototype.forEach = function(s, d) {
            d === void 0 && (d = null);
            for (var g = 0, x = this.__entries__; g < x.length; g++) {
              var O = x[g];
              s.call(d, O[1], O[0]);
            }
          }, o;
        }();
      }(), _e = typeof window < "u" && typeof document < "u" && window.document === document, se = f.g !== void 0 && f.g.Math === Math ? f.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), Ve = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(se) : function(i) {
        return setTimeout(function() {
          return i(Date.now());
        }, 1e3 / 60);
      }, Ue = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Xe = typeof MutationObserver < "u", Ge = function() {
        function i() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(o, s) {
            var d = !1, g = !1, x = 0;
            function O() {
              d && (d = !1, o()), g && b();
            }
            function M() {
              Ve(O);
            }
            function b() {
              var R = Date.now();
              if (d) {
                if (R - x < 2)
                  return;
                g = !0;
              } else
                d = !0, g = !1, setTimeout(M, 20);
              x = R;
            }
            return b;
          }(this.refresh.bind(this));
        }
        return i.prototype.addObserver = function(o) {
          ~this.observers_.indexOf(o) || this.observers_.push(o), this.connected_ || this.connect_();
        }, i.prototype.removeObserver = function(o) {
          var s = this.observers_, d = s.indexOf(o);
          ~d && s.splice(d, 1), !s.length && this.connected_ && this.disconnect_();
        }, i.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, i.prototype.updateObservers_ = function() {
          var o = this.observers_.filter(function(s) {
            return s.gatherActive(), s.hasActive();
          });
          return o.forEach(function(s) {
            return s.broadcastActive();
          }), o.length > 0;
        }, i.prototype.connect_ = function() {
          _e && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Xe ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, i.prototype.disconnect_ = function() {
          _e && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, i.prototype.onTransitionEnd_ = function(o) {
          var s = o.propertyName, d = s === void 0 ? "" : s;
          Ue.some(function(g) {
            return !!~d.indexOf(g);
          }) && this.refresh();
        }, i.getInstance = function() {
          return this.instance_ || (this.instance_ = new i()), this.instance_;
        }, i.instance_ = null, i;
      }(), De = function(i, o) {
        for (var s = 0, d = Object.keys(o); s < d.length; s++) {
          var g = d[s];
          Object.defineProperty(i, g, { value: o[g], enumerable: !1, writable: !1, configurable: !0 });
        }
        return i;
      }, te = function(i) {
        return i && i.ownerDocument && i.ownerDocument.defaultView || se;
      }, Oe = de(0, 0, 0, 0);
      function ce(i) {
        return parseFloat(i) || 0;
      }
      function ke(i) {
        for (var o = [], s = 1; s < arguments.length; s++)
          o[s - 1] = arguments[s];
        return o.reduce(function(d, g) {
          return d + ce(i["border-" + g + "-width"]);
        }, 0);
      }
      var Je = typeof SVGGraphicsElement < "u" ? function(i) {
        return i instanceof te(i).SVGGraphicsElement;
      } : function(i) {
        return i instanceof te(i).SVGElement && typeof i.getBBox == "function";
      };
      function Ke(i) {
        return _e ? Je(i) ? function(o) {
          var s = o.getBBox();
          return de(0, 0, s.width, s.height);
        }(i) : function(o) {
          var s = o.clientWidth, d = o.clientHeight;
          if (!s && !d)
            return Oe;
          var g = te(o).getComputedStyle(o), x = function(P) {
            for (var S = {}, Q = 0, J = ["top", "right", "bottom", "left"]; Q < J.length; Q++) {
              var ue = J[Q], ne = P["padding-" + ue];
              S[ue] = ce(ne);
            }
            return S;
          }(g), O = x.left + x.right, M = x.top + x.bottom, b = ce(g.width), R = ce(g.height);
          if (g.boxSizing === "border-box" && (Math.round(b + O) !== s && (b -= ke(g, "left", "right") + O), Math.round(R + M) !== d && (R -= ke(g, "top", "bottom") + M)), !function(P) {
            return P === te(P).document.documentElement;
          }(o)) {
            var U = Math.round(b + O) - s, Z = Math.round(R + M) - d;
            Math.abs(U) !== 1 && (b -= U), Math.abs(Z) !== 1 && (R -= Z);
          }
          return de(x.left, x.top, b, R);
        }(i) : Oe;
      }
      function de(i, o, s, d) {
        return { x: i, y: o, width: s, height: d };
      }
      var Qe = function() {
        function i(o) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = de(0, 0, 0, 0), this.target = o;
        }
        return i.prototype.isActive = function() {
          var o = Ke(this.target);
          return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
        }, i.prototype.broadcastRect = function() {
          var o = this.contentRect_;
          return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
        }, i;
      }(), et = function(i, o) {
        var s, d, g, x, O, M, b, R = (d = (s = o).x, g = s.y, x = s.width, O = s.height, M = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, b = Object.create(M.prototype), De(b, { x: d, y: g, width: x, height: O, top: g, right: d + x, bottom: O + g, left: d }), b);
        De(this, { target: i, contentRect: R });
      }, tt = function() {
        function i(o, s, d) {
          if (this.activeObservations_ = [], this.observations_ = new Te(), typeof o != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = o, this.controller_ = s, this.callbackCtx_ = d;
        }
        return i.prototype.observe = function(o) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(o instanceof te(o).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var s = this.observations_;
            s.has(o) || (s.set(o, new Qe(o)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, i.prototype.unobserve = function(o) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(o instanceof te(o).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var s = this.observations_;
            s.has(o) && (s.delete(o), s.size || this.controller_.removeObserver(this));
          }
        }, i.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, i.prototype.gatherActive = function() {
          var o = this;
          this.clearActive(), this.observations_.forEach(function(s) {
            s.isActive() && o.activeObservations_.push(s);
          });
        }, i.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var o = this.callbackCtx_, s = this.activeObservations_.map(function(d) {
              return new et(d.target, d.broadcastRect());
            });
            this.callback_.call(o, s, o), this.clearActive();
          }
        }, i.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, i.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, i;
      }(), Se = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Te(), qe = function i(o) {
        if (!(this instanceof i))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var s = Ge.getInstance(), d = new tt(o, s, this);
        Se.set(this, d);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(i) {
        qe.prototype[i] = function() {
          var o;
          return (o = Se.get(this))[i].apply(o, arguments);
        };
      });
      const rt = se.ResizeObserver !== void 0 ? se.ResizeObserver : qe;
      var nt = ["client", "offset", "scroll", "bounds", "margin"];
      function Ie(i) {
        var o = [];
        return nt.forEach(function(s) {
          i[s] && o.push(s);
        }), o;
      }
      function Re(i, o) {
        var s = {};
        if (o.indexOf("client") > -1 && (s.client = { top: i.clientTop, left: i.clientLeft, width: i.clientWidth, height: i.clientHeight }), o.indexOf("offset") > -1 && (s.offset = { top: i.offsetTop, left: i.offsetLeft, width: i.offsetWidth, height: i.offsetHeight }), o.indexOf("scroll") > -1 && (s.scroll = { top: i.scrollTop, left: i.scrollLeft, width: i.scrollWidth, height: i.scrollHeight }), o.indexOf("bounds") > -1) {
          var d = i.getBoundingClientRect();
          s.bounds = { top: d.top, right: d.right, bottom: d.bottom, left: d.left, width: d.width, height: d.height };
        }
        if (o.indexOf("margin") > -1) {
          var g = getComputedStyle(i);
          s.margin = { top: g ? parseInt(g.marginTop) : 0, right: g ? parseInt(g.marginRight) : 0, bottom: g ? parseInt(g.marginBottom) : 0, left: g ? parseInt(g.marginLeft) : 0 };
        }
        return s;
      }
      function ot(i) {
        return i && i.ownerDocument && i.ownerDocument.defaultView || window;
      }
      var we = function(i) {
        var o, s;
        return s = o = function(d) {
          var g, x;
          function O() {
            for (var b, R = arguments.length, U = new Array(R), Z = 0; Z < R; Z++)
              U[Z] = arguments[Z];
            return (b = d.call.apply(d, [this].concat(U)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, b._animationFrameID = null, b._resizeObserver = null, b._node = null, b._window = null, b.measure = function(P) {
              var S = Re(b._node, Ie(b.props));
              P && (S.entry = P[0].contentRect), b._animationFrameID = b._window.requestAnimationFrame(function() {
                b._resizeObserver !== null && (b.setState({ contentRect: S }), typeof b.props.onResize == "function" && b.props.onResize(S));
              });
            }, b._handleRef = function(P) {
              b._resizeObserver !== null && b._node !== null && b._resizeObserver.unobserve(b._node), b._node = P, b._window = ot(b._node);
              var S = b.props.innerRef;
              S && (typeof S == "function" ? S(b._node) : S.current = b._node), b._resizeObserver !== null && b._node !== null && b._resizeObserver.observe(b._node);
            }, b;
          }
          x = d, (g = O).prototype = Object.create(x.prototype), g.prototype.constructor = g, ye(g, x);
          var M = O.prototype;
          return M.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new rt(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Re(this._node, Ie(this.props))));
          }, M.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, M.render = function() {
            var b = this.props, R = (b.innerRef, b.onResize, function(U, Z) {
              if (U == null)
                return {};
              var P, S, Q = {}, J = Object.keys(U);
              for (S = 0; S < J.length; S++)
                P = J[S], Z.indexOf(P) >= 0 || (Q[P] = U[P]);
              return Q;
            }(b, ["innerRef", "onResize"]));
            return (0, l.createElement)(i, Ae({}, R, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, O;
        }(l.Component), o.propTypes = { client: G().bool, offset: G().bool, scroll: G().bool, bounds: G().bool, margin: G().bool, innerRef: G().oneOfType([G().object, G().func]), onResize: G().func }, s;
      }(function(i) {
        var o = i.measure, s = i.measureRef, d = i.contentRect;
        return (0, i.children)({ measure: o, measureRef: s, contentRect: d });
      });
      we.displayName = "Measure", we.propTypes.children = G().func;
      const Ce = we;
      var pe = f(672), re = {};
      re.styleTagTransform = C(), re.setAttributes = E(), re.insert = p().bind(null, "head"), re.domAPI = w(), re.insertStyleElement = j(), m()(pe.Z, re), pe.Z && pe.Z.locals && pe.Z.locals;
      const it = (i) => {
        const { horizontal: o = !1, initialPrimarySize: s = "50%", minPrimarySize: d = "0px", minSecondarySize: g = "0px", splitterSize: x = "7px", renderSplitter: O, resetOnDoubleClick: M = !1, defaultSplitterColors: b = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: R, onMeasuredSizesChanged: U } = i, [Z, P] = l.useState({ height: 0, width: 0 }), [S, Q] = l.useState({ height: 0, width: 0 }), [J, ue] = l.useState({ height: 0, width: 0 }), ne = l.useMemo(() => o ? Z.height : Z.width, [o, Z]), me = l.useMemo(() => o ? S.height : S.width, [o, S]), he = l.useMemo(() => o ? J.height : J.width, [o, J]), [ie, Me] = l.useState(void 0), [at, lt] = l.useState(0), [st, ct] = l.useState(0), [Ee, je] = l.useState(!1);
        l.useEffect(() => {
          R && R(ie !== void 0 ? `${ie}%` : s);
        }, [ie, s]), l.useEffect(() => {
          U && U({ primary: me, splitter: he, secondary: ne - (me + he) });
        }, [o, ne, me, he]);
        const dt = (z) => {
          z.bounds && Q({ height: z.bounds.height, width: z.bounds.width });
        }, pt = (z) => {
          z.bounds && ue({ height: z.bounds.height, width: z.bounds.width });
        }, ut = (z) => {
          z.currentTarget.setPointerCapture(z.pointerId), lt(o ? z.clientY : z.clientX), ct(me), je(!0);
        }, mt = (z) => {
          if (z.currentTarget.hasPointerCapture(z.pointerId)) {
            const ae = o ? z.clientY : z.clientX, _t = st + (ae - at), wt = Math.max(0, Math.min(_t, ne));
            Me(wt / ne * 100);
          }
        }, ht = (z) => {
          z.currentTarget.releasePointerCapture(z.pointerId), je(!1);
        }, ft = () => {
          M && Me(void 0);
        }, fe = l.Children.toArray(i.children), gt = fe.length > 0 ? fe[0] : l.createElement("div", null), bt = fe.length > 1 ? fe[1] : l.createElement("div", null), xe = { primary: ie !== void 0 ? `${ie}%` : s, minPrimary: d ?? "0px", minSecondary: g ?? "0px" }, Pe = { pixelSize: he, horizontal: o, dragging: Ee }, vt = O ?? (() => l.createElement(le, Object.assign({}, Pe, { color: Ee ? b.drag : b.color, hoverColor: Ee ? b.drag : b.hover }))), At = o ? "split-container horizontal" : "split-container vertical", yt = { "--react-split-min-primary": xe.minPrimary, "--react-split-min-secondary": xe.minSecondary, "--react-split-primary": xe.primary, "--react-split-splitter": x };
        return l.createElement(Ce, { bounds: !0, onResize: (z) => {
          z.bounds && P({ height: z.bounds.height, width: z.bounds.width });
        } }, ({ measureRef: z }) => l.createElement("div", { className: "react-split", ref: z }, l.createElement("div", { className: At, style: yt }, l.createElement("div", { className: "primary" }, l.createElement(Ce, { bounds: !0, onResize: dt }, ({ measureRef: ae }) => l.createElement("div", { className: "full-content", ref: ae }, gt))), l.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: ut, onPointerUp: ht, onPointerMove: mt, onDoubleClick: ft }, l.createElement(Ce, { bounds: !0, onResize: pt }, ({ measureRef: ae }) => l.createElement("div", { className: "full-content", ref: ae }, vt(Pe)))), l.createElement("div", { className: "secondary" }, l.createElement("div", { className: "full-content" }, bt)))));
      };
    })(), D;
  })());
})(Ye);
var Rt = Ye.exports;
const Mt = ({
  children: n,
  ...r
}) => /* @__PURE__ */ e(Rt.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: t,
  dragging: h
}) => /* @__PURE__ */ e("div", { css: [{
  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
  }
}, t ? {
  height: "4px",
  width: "100%"
} : {
  height: "100%",
  width: "4px"
}, h && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...r, children: n });
var $e = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = "fas", t = "lock", h = 448, _ = 512, f = [128274], D = "f023", l = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  n.definition = {
    prefix: r,
    iconName: t,
    icon: [
      h,
      _,
      f,
      D,
      l
    ]
  }, n.faLock = n.definition, n.prefix = r, n.iconName = t, n.width = h, n.height = _, n.ligatures = f, n.unicode = D, n.svgPathData = l, n.aliases = f;
})($e);
var be = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = "fas", t = "circle", h = 512, _ = 512, f = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], D = "f111", l = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  n.definition = {
    prefix: r,
    iconName: t,
    icon: [
      h,
      _,
      f,
      D,
      l
    ]
  }, n.faCircle = n.definition, n.prefix = r, n.iconName = t, n.width = h, n.height = _, n.ligatures = f, n.unicode = D, n.svgPathData = l, n.aliases = f;
})(be);
var Ze = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = "far", t = "clock", h = 512, _ = 512, f = [128339, "clock-four"], D = "f017", l = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  n.definition = {
    prefix: r,
    iconName: t,
    icon: [
      h,
      _,
      f,
      D,
      l
    ]
  }, n.faClock = n.definition, n.prefix = r, n.iconName = t, n.width = h, n.height = _, n.ligatures = f, n.unicode = D, n.svgPathData = l, n.aliases = f;
})(Ze);
const jt = ({
  status: n
}) => n === T.DONE ? /* @__PURE__ */ e(ge, { icon: qt.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" }) : n === T.ACTIVE ? /* @__PURE__ */ e(ge, { mask: be.faCircle, icon: St.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : n === T.WAIT ? /* @__PURE__ */ e(ge, { mask: be.faCircle, icon: Ze.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : /* @__PURE__ */ e(ge, { mask: be.faCircle, transform: "shrink-8", icon: $e.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} }), Pt = ({
  items: n,
  activeItem: r,
  className: t,
  onChange: h
}) => /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: n.map((_, f) => {
  const D = (r == null ? void 0 : r.id) === _.id;
  return /* @__PURE__ */ e("li", { onClick: () => _.status !== T.DISABLED ? h == null ? void 0 : h(_) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, D ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : _.status === T.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, D && kt`
                    &::after {
                      content: "";
                      left: -0.4em;
                      top: 13%;
                      width: 0.2em;
                      height: 74%;
                      ${{
    position: "absolute",
    borderRadius: "0.5rem",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(141 148 205 / var(--tw-bg-opacity))"
  }};
                    }
                  `], children: /* @__PURE__ */ B("div", { css: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "0.5rem",
    padding: "0.5rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(55 65 81 / var(--tw-text-opacity))",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ B("div", { children: [
      f + 1,
      ". ",
      _.title
    ] }) }),
    /* @__PURE__ */ e(jt, { status: _.status })
  ] }) }, _.id);
}) }) }), Wt = ({
  steps: n,
  defaultValues: r,
  mutation: t
}) => {
  const {
    stepFormRef: h,
    getNextButtonProps: _,
    getPrevButtonProps: f,
    setActiveStep: D,
    activeStepIndex: l,
    activeStep: u
  } = It({
    steps: n
  }), {
    Component: m
  } = u;
  return /* @__PURE__ */ e(Ne.Provider, { value: {
    mutation: t,
    defaultValues: r,
    stepFormRef: h
  }, children: /* @__PURE__ */ e(Dt, { bbar: [/* @__PURE__ */ e(We, { icon: Le.faArrowLeft, ...f(), children: "Назад" }, "previous"), /* @__PURE__ */ e(We, { ..._(), variant: "contained", color: "success", children: "Сохранить" }, "next")], children: /* @__PURE__ */ B(Mt, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ e(Pt, { activeItem: u, onChange: D, items: n }) }),
    /* @__PURE__ */ B("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ B("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        l + 1,
        ". ",
        u == null ? void 0 : u.title
      ] }),
      /* @__PURE__ */ e("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ e(m, { defaultValues: r }) })
    ] })
  ] }) }) });
}, Ft = a.object({
  partner_id: a.string({
    required_error: "Выберите организацию",
    coerce: !0
  }),
  name: a.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование"),
  program_type_id: a.coerce.number({
    required_error: "Выберите тип программы",
    invalid_type_error: "Выберите тип программы"
  }).positive({
    message: "Выберите тип программы"
  }),
  program_level_id: a.string({
    required_error: "Выберите уровень программы",
    invalid_type_error: "Выберите уровень программы"
  }),
  section_id: a.string({
    required_error: "Выберите направленность",
    invalid_type_error: "Выберите направленность"
  }).optional(),
  year_created: a.string({
    required_error: "Выберите год создания"
  }),
  city_created: a.string({
    required_error: "Выберите город создания"
  })
}).required(), Nt = ({
  defaultValues: n
}) => {
  const r = oe({
    schema: Ft,
    defaultValues: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { control: r.control, name: "name", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "partner_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(xt, { ...t, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_type_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип программы", ...t, dictionary: "navProgramType", filterOptions: (h) => h.filter(({
      id: _
    }) => _ === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "section_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(zt, { label: "Направленность", placeholder: "Выберите направленность", ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Уровень", css: {
      width: "100%"
    }, ...t, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "year_created", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "city_created", render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...t }) })
  ] });
}, Lt = a.object({
  protocol_number: a.string().optional(),
  protocol_date: a.string().optional(),
  decree_number: a.string().optional(),
  decree_date: a.string().optional(),
  authors: a.string().optional(),
  comment: a.string().optional()
}), Yt = ({
  defaultValues: n
}) => {
  const r = oe({
    schema: Lt,
    defaultValues: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { control: r.control, name: "protocol_number", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "protocol_date", render: ({
      field: t
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "decree_number", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "decree_date", render: ({
      field: t
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "authors", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { css: {
      width: "100%"
    }, ...t, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "comment", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...t, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, $t = a.object({
  min_age: a.coerce.number().optional(),
  max_age: a.coerce.number().optional(),
  competence_level_id: a.coerce.number().optional(),
  program_volume: a.coerce.number().optional(),
  program_duration: a.coerce.number().optional(),
  edu_sessions_per_week: a.coerce.number().optional(),
  edu_sessions_per_day: a.coerce.number().optional(),
  edu_session_hour_limit: a.coerce.number().optional(),
  break_duration: a.coerce.number().optional(),
  education_form_id: a.string().optional(),
  min_group_size: a.coerce.number().optional(),
  max_group_size: a.coerce.number().optional(),
  is_one_age_group: a.boolean().optional()
}), Zt = ({
  defaultValues: n
}) => {
  const r = oe({
    schema: $t,
    defaultValues: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(Bt, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ B("div", { css: {
      display: "flex",
      width: "20rem",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ e(c, { control: r.control, name: "min_age", css: {
        width: "10rem"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ e(W, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ e("div", { children: "-" }),
      /* @__PURE__ */ e(c, { control: r.control, name: "max_age", css: {
        width: "10rem"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ e(W, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "competence_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "programDocCompetences", ...t, label: "Требования к уровню подготовки", placeholder: "Выберите требования к уровню подготовки" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_volume", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_duration", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Общая продолжительность", placeholder: "Введите общую продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "edu_sessions_per_week", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "edu_sessions_per_day", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Продолжительность занятия", placeholder: "Введите продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "edu_session_hour_limit", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Продолжительность ак. часа", placeholder: "Введите продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "break_duration", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Продолжительность перерыва", placeholder: "Введите продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "education_form_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "educationForm", ...t, label: "Форма обучения", placeholder: "Выберите форму обучения" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "min_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Минимальное кол-во обучающихся в группе", placeholder: "Введите минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "max_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Максимальное кол-во обучающихся в группе", placeholder: "Введите максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "is_one_age_group", render: ({
      field: t
    }) => /* @__PURE__ */ e(Fe, { ...t, label: "Группа одного возраста?" }) })
  ] });
}, Ht = a.object({
  explanatory_note: a.string().optional(),
  program_relevance: a.string().optional(),
  pedagogical_expediency: a.string().optional(),
  distinctive_features: a.string().optional(),
  actual: a.string().optional()
}), Vt = ({
  defaultValues: n
}) => {
  const r = oe({
    schema: Ht,
    defaultValues: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { control: r.control, name: "explanatory_note", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_relevance", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "pedagogical_expediency", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "distinctive_features", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "actual", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...t }) })
  ] });
};
a.object({
  category_id: a.number({
    required_error: "Выберите категорию"
  }),
  title: a.string({
    required_error: "Заполните наименование"
  })
}).required({
  category_id: !0,
  title: !0
});
const Ut = () => {
  const n = N("/api/rest/program-doc-results"), r = F({
    schema: a.object({
      category_id: a.number({
        required_error: "Выберите категорию"
      }),
      title: a.string({
        required_error: "Заполните наименование"
      })
    }).required({
      category_id: !0,
      title: !0
    }),
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "category_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Xt = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Ut, {}) }), Gt = a.object({
  title: a.string({
    required_error: "Введите наименование"
  })
}).required({
  title: !0
}), Jt = () => {
  const n = N("/api/rest/program-doc-objectives"), r = F({
    mutation: n,
    schema: Gt
  });
  return /* @__PURE__ */ B(q, { css: {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderWidth: "1px",
    padding: "0.5rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование задачи", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Kt = Tt({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Qt = a.object({
  mission: a.string({
    required_error: "Заполните цель/миссию"
  }),
  goal: a.string({
    required_error: "Заполните цель"
  }),
  objectives: a.array(a.string())
}).required({
  goal: !0
}), er = () => {
  const n = oe({
    schema: Qt
  });
  return /* @__PURE__ */ B("div", { children: [
    /* @__PURE__ */ B(q, { css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, form: n, children: [
      /* @__PURE__ */ e(c, { name: "mission", control: n.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(k, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...r }) }),
      /* @__PURE__ */ e(c, { name: "goal", control: n.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(k, { label: "Цель программы", placeholder: "Введите цель программы", ...r }) }),
      /* @__PURE__ */ e(c, { name: "objectives", control: n.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(Kt, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
    ] }),
    /* @__PURE__ */ e(Jt, {})
  ] });
}, tr = a.object({
  theme: a.string({
    required_error: "Заполните тему"
  }),
  theory: a.string().optional(),
  theory_volume: a.number().optional(),
  practice: a.string().optional(),
  practice_volume: a.number().optional(),
  sort_index: a.number(),
  doc_id: a.string()
}), rr = ({
  doc_id: n
}) => {
  const r = N("/api/rest/program-doc-plans"), t = F({
    schema: tr,
    mutation: r,
    defaultValues: {
      doc_id: n,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { name: "theme", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(k, { label: "Тема", placeholder: "Введите тему", ...h }) }),
    /* @__PURE__ */ e(c, { name: "theory", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(k, { label: "Теория", placeholder: "Введите теорию", ...h }) }),
    /* @__PURE__ */ e(c, { name: "theory_volume", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...h }) }),
    /* @__PURE__ */ e(c, { name: "practice", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(k, { label: "Практика", placeholder: "Введите практику", ...h }) }),
    /* @__PURE__ */ e(c, { name: "practice_volume", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...h }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, nr = () => {
  const {
    params: {
      id: n
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(rr, { doc_id: n }) });
}, or = a.object({
  control_type_id: a.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  control_type_id: !0,
  description: !0
}), ir = () => {
  const n = N("/api/rest/program-doc-forms"), r = F({
    schema: or,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "control_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, ar = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ir, {}) }), lr = a.object({
  criterion_type_id: a.number({
    required_error: "Заполните тип критерия"
  }),
  description: a.string({
    required_error: "Заполните описание критерия"
  })
}).required({
  criterion_type_id: !0
}), sr = () => {
  const n = N("/api/rest/program-doc-criteria"), r = F({
    schema: lr,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "criterion_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, cr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(sr, {}) }), dr = a.object({
  method_id: a.number({
    required_error: "Заполните метод"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  method_id: !0,
  description: !0
}), pr = () => {
  const n = N("/api/rest/program-doc-fixations"), r = F({
    mutation: n,
    schema: dr
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "method_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, ur = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(pr, {}) }), mr = a.object({
  base_knowledge: a.string({
    required_error: "Заполните базовые знания"
  }),
  material: a.string({
    required_error: "Заполните материалы"
  })
}).required({
  base_knowledge: !0,
  material: !0
}), hr = () => {
  const n = N("/api/rest/program-doc-materials"), r = F({
    schema: mr,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "base_knowledge", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Базовые знания", placeholder: "Введите базовые знания", ...t }) }),
    /* @__PURE__ */ e(c, { name: "material", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Материалы", placeholder: "Введите материалы", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, fr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(hr, {}) }), gr = a.object({
  management_type_id: a.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  management_type_id: !0
}), br = () => {
  const n = N("/api/rest/program-doc-managements"), r = F({
    schema: gr,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "management_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, vr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(br, {}) }), Ar = a.object({
  indoctrination_type_id: a.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  indoctrination_type_id: !0
}), yr = () => {
  const n = N("/api/rest/program-doc-indoctrinations"), r = F({
    schema: Ar,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "indoctrination_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, _r = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(yr, {}) }), wr = a.object({
  development_type_id: a.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  development_type_id: !0
}), Cr = () => {
  const n = N("/api/rest/program-doc-developments"), r = F({
    schema: wr,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "development_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Er = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Cr, {}) }), xr = () => {
  const n = oe({
    schema: a.object({
      staff_description: a.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ e(q, { tw: "flex flex-col gap-4", form: n, children: /* @__PURE__ */ e(c, { control: n.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ e(L, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, zr = a.object({
  inventory_type_id: a.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  inventory_type_id: !0,
  description: !0
}), Br = () => {
  const n = N("/api/rest/program-doc-inventories"), r = F({
    schema: zr,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "inventory_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Tr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Br, {}) }), Dr = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }),
  publisher: a.string().optional(),
  publish_year: a.number().optional(),
  isbn: a.string().optional()
}).required({
  title: !0
}), Or = () => {
  const n = N("/api/rest/program-doc-information"), r = F({
    schema: Dr,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "authors", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Авторы", placeholder: "Введите авторов", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publisher", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Издательство", placeholder: "Введите издательство", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publish_year", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...t }) }),
    /* @__PURE__ */ e(c, { name: "isbn", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, kr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Or, {}) }), Sr = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }),
  publisher: a.string().optional(),
  publish_year: a.number().optional()
}).required({
  title: !0
}), qr = () => {
  const n = N("/api/rest/program-doc-books"), r = F({
    schema: Sr,
    mutation: n
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "authors", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Авторы", placeholder: "Введите авторов", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publisher", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Издательство", placeholder: "Введите издательство", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publish_year", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Ir = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(qr, {}) }), Rr = a.object({
  number_year: a.number({
    required_error: "Заполните год"
  }),
  date_start: a.string({
    required_error: "Заполните дата начала обучения"
  }),
  date_end: a.string({
    required_error: "Заполните дата окончания обучения"
  }),
  edu_week_count: a.number({
    required_error: "Заполните количество учебных недель"
  }),
  is_vacations: a.boolean({
    required_error: "Заполните поле"
  }),
  // vacation: z.array(z.string()),
  edu_sessions_per_week: a.number().optional(),
  edu_sessions_per_day: a.number().optional(),
  doc_id: a.string()
}).required({
  number_year: !0,
  date_start: !0,
  date_end: !0,
  edu_week_count: !0,
  is_vacations: !0
}), Mr = ({
  doc_id: n
}) => {
  const r = N("/api/rest/program-doc-schedules"), t = F({
    schema: Rr,
    mutation: r,
    defaultValues: {
      doc_id: n
    }
  });
  return /* @__PURE__ */ B(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { name: "number_year", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Год обучения", helperText: "Год обучения (по счету)", placeholder: "Введите год обучения", ...h }) }),
    /* @__PURE__ */ e(c, { name: "date_start", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(ve, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...h }) }),
    /* @__PURE__ */ e(c, { name: "date_end", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(ve, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...h }) }),
    /* @__PURE__ */ e(c, { name: "edu_week_count", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...h }) }),
    /* @__PURE__ */ e(c, { name: "is_vacations", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(Fe, { label: "Есть каникулы?", ...h }) }),
    /* @__PURE__ */ e(c, { name: "edu_sessions_per_week", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...h }) }),
    /* @__PURE__ */ e(c, { name: "edu_sessions_per_day", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...h }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, jr = () => {
  const {
    params: {
      id: n
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Mr, { doc_id: n }) });
}, Pr = [{
  id: "general",
  title: "Основное",
  status: T.DONE,
  Component: Nt
}, {
  id: "params",
  title: "Параметры",
  status: T.DONE,
  Component: Zt
}, {
  id: "explanation",
  title: "Пояснительная записка",
  status: T.DONE,
  Component: Vt
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  status: T.DONE,
  Component: Xt
}, {
  id: "goals",
  title: "Цели и задачи",
  status: T.ACTIVE,
  Component: er
}, {
  id: "edu-plan",
  title: "Учебный план",
  status: T.WAIT,
  Component: nr
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  status: T.WAIT,
  Component: ar
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  status: T.WAIT,
  Component: cr
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  status: T.WAIT,
  Component: ur
}, {
  id: "materials",
  title: "Методические материалы",
  status: T.WAIT,
  Component: fr
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  status: T.WAIT,
  Component: vr
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  status: T.WAIT,
  Component: _r
}, {
  title: "Развивающая деятельность",
  id: "developments",
  status: T.WAIT,
  Component: Er
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  status: T.WAIT,
  Component: xr
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  status: T.WAIT,
  Component: Tr
}, {
  title: "Информационное обеспечение",
  id: "information",
  status: T.WAIT,
  Component: kr
}, {
  title: "Список литературы",
  id: "books",
  status: T.WAIT,
  Component: Ir
}, {
  title: "Календарный учебный график",
  id: "schedules",
  status: T.WAIT,
  Component: jr
}, {
  id: "description",
  title: "Утверждение",
  status: T.DONE,
  Component: Yt
}], Ur = () => {
  var _;
  const {
    params: {
      id: n
    },
    setTitle: r
  } = Be(), t = Ot(`/api/rest/program-docs/${n}`), h = N("PUT", `/api/rest/program-docs/${n}`);
  return K.useEffect(() => {
    r(`Конструктор программы #${n}`);
  }, [n, r]), t.isLoading ? /* @__PURE__ */ e(Ct, { spinning: !0 }) : /* @__PURE__ */ e(Wt, { steps: Pr, mutation: h, defaultValues: (_ = t.data) == null ? void 0 : _.data[0] });
};
export {
  Ur as default
};
