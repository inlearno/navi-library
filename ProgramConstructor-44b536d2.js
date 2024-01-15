import { j as e, a as T, u as Ct, S as Et } from "./library-8f6b8813.js";
import { r as K, R as xt } from "./react-181b9648.js";
import { u as F, C as We, z as a, T as k, F as c, P as zt, D as X, R as Bt, Y as ze, a as q, b as ve, c as L, N as W, L as Tt, B as Fe, d as N, e as Dt } from "./RootSection-cc4f27ac.js";
import { P as Ot, u as kt } from "./useDictionary-9d47a5b3.js";
import { a as St, B as Y } from "./mui-d2313b11.js";
import { f as qt } from "./faPen-6d05924c.js";
import { f as It } from "./faCheckCircle-ad748d9a.js";
import { F as ge } from "./icons-42066a3f.js";
import { u as Be } from "./useWindowController-17983267.js";
var D = /* @__PURE__ */ ((r) => (r.DONE = "done", r.ACTIVE = "active", r.WAIT = "wait", r.DISABLED = "disabled", r))(D || {});
const Rt = ({
  steps: r
}) => {
  const [n, t] = K.useState(r[0]), f = K.useRef(null), _ = K.useMemo(() => r.findIndex((u) => u.id === (n == null ? void 0 : n.id)) || 0, [n]), m = _ === r.length - 1, E = K.useCallback(async () => {
    if (!m)
      try {
        f.current && await f.current.save(), t(r[_ + 1]);
      } catch {
      }
  }, [_, m]), l = K.useCallback(() => {
    _ !== 0 && t(r[_ - 1]);
  }, [_]);
  return {
    stepFormRef: f,
    getNextButtonProps: () => ({
      onClick: E,
      disabled: m
    }),
    activeStep: r[_],
    activeStepIndex: _,
    setActiveStep: t,
    getPrevButtonProps: () => ({
      onClick: l,
      disabled: _ === 0
    })
  };
}, Ne = xt.createContext(null), oe = (r) => {
  const {
    stepFormRef: n,
    mutation: t
  } = K.useContext(Ne), f = F({
    mutation: t,
    ...r
  });
  return K.useImperativeHandle(n, () => ({
    save: () => f.submit()
  })), f;
};
var Le = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "arrow-left", f = 448, _ = 512, m = [8592], E = "f060", l = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      f,
      _,
      m,
      E,
      l
    ]
  }, r.faArrowLeft = r.definition, r.prefix = n, r.iconName = t, r.width = f, r.height = _, r.ligatures = m, r.unicode = E, r.svgPathData = l, r.aliases = m;
})(Le);
var Ye = { exports: {} };
(function(r, n) {
  (function(t, f) {
    r.exports = f(K);
  })(self, (t) => (() => {
    var f = { 58: (l, u, h) => {
      h.d(u, { Z: () => v });
      var A = h(864), w = h.n(A), y = h(352), p = h.n(y)()(w());
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
    }, 672: (l, u, h) => {
      h.d(u, { Z: () => v });
      var A = h(864), w = h.n(A), y = h(352), p = h.n(y)()(w());
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
        var h = [];
        return h.toString = function() {
          return this.map(function(A) {
            var w = "", y = A[5] !== void 0;
            return A[4] && (w += "@supports (".concat(A[4], ") {")), A[2] && (w += "@media ".concat(A[2], " {")), y && (w += "@layer".concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")), w += u(A), y && (w += "}"), A[2] && (w += "}"), A[4] && (w += "}"), w;
          }).join("");
        }, h.i = function(A, w, y, p, v) {
          typeof A == "string" && (A = [[null, A, void 0]]);
          var x = {};
          if (y)
            for (var I = 0; I < this.length; I++) {
              var j = this[I][0];
              j != null && (x[j] = !0);
            }
          for (var H = 0; H < A.length; H++) {
            var C = [].concat(A[H]);
            y && x[C[0]] || (v !== void 0 && (C[5] === void 0 || (C[1] = "@layer".concat(C[5].length > 0 ? " ".concat(C[5]) : "", " {").concat(C[1], "}")), C[5] = v), w && (C[2] && (C[1] = "@media ".concat(C[2], " {").concat(C[1], "}")), C[2] = w), p && (C[4] ? (C[1] = "@supports (".concat(C[4], ") {").concat(C[1], "}"), C[4] = p) : C[4] = "".concat(p)), h.push(C));
          }
        }, h;
      };
    }, 864: (l) => {
      l.exports = function(u) {
        var h = u[1], A = u[3];
        if (!A)
          return h;
        if (typeof btoa == "function") {
          var w = btoa(unescape(encodeURIComponent(JSON.stringify(A)))), y = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(w), p = "/*# ".concat(y, " */");
          return [h].concat([p]).join(`
`);
        }
        return [h].join(`
`);
      };
    }, 372: (l, u, h) => {
      var A = h(567);
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
        var x = { array: p, bigint: p, bool: p, func: p, number: p, object: p, string: p, symbol: p, any: p, arrayOf: v, element: p, elementType: p, instanceOf: v, node: p, objectOf: v, oneOf: v, oneOfType: v, shape: v, exact: v, checkPropTypes: y, resetWarningCache: w };
        return x.PropTypes = x, x;
      };
    }, 652: (l, u, h) => {
      l.exports = h(372)();
    }, 567: (l) => {
      l.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (l) => {
      var u = [];
      function h(y) {
        for (var p = -1, v = 0; v < u.length; v++)
          if (u[v].identifier === y) {
            p = v;
            break;
          }
        return p;
      }
      function A(y, p) {
        for (var v = {}, x = [], I = 0; I < y.length; I++) {
          var j = y[I], H = p.base ? j[0] + p.base : j[0], C = v[H] || 0, $ = "".concat(H, " ").concat(C);
          v[H] = C + 1;
          var V = h($), ee = { css: j[1], media: j[2], sourceMap: j[3], supports: j[4], layer: j[5] };
          if (V !== -1)
            u[V].references++, u[V].updater(ee);
          else {
            var le = w(ee, p);
            p.byIndex = I, u.splice(I, 0, { identifier: $, updater: le, references: 1 });
          }
          x.push($);
        }
        return x;
      }
      function w(y, p) {
        var v = p.domAPI(p);
        return v.update(y), function(x) {
          if (x) {
            if (x.css === y.css && x.media === y.media && x.sourceMap === y.sourceMap && x.supports === y.supports && x.layer === y.layer)
              return;
            v.update(y = x);
          } else
            v.remove();
        };
      }
      l.exports = function(y, p) {
        var v = A(y = y || [], p = p || {});
        return function(x) {
          x = x || [];
          for (var I = 0; I < v.length; I++) {
            var j = h(v[I]);
            u[j].references--;
          }
          for (var H = A(x, p), C = 0; C < v.length; C++) {
            var $ = h(v[C]);
            u[$].references === 0 && (u[$].updater(), u.splice($, 1));
          }
          v = H;
        };
      };
    }, 80: (l) => {
      var u = {};
      l.exports = function(h, A) {
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
        }(h);
        if (!w)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        w.appendChild(A);
      };
    }, 182: (l) => {
      l.exports = function(u) {
        var h = document.createElement("style");
        return u.setAttributes(h, u.attributes), u.insert(h, u.options), h;
      };
    }, 850: (l, u, h) => {
      l.exports = function(A) {
        var w = h.nc;
        w && A.setAttribute("nonce", w);
      };
    }, 236: (l) => {
      l.exports = function(u) {
        var h = u.insertStyleElement(u);
        return { update: function(A) {
          (function(w, y, p) {
            var v = "";
            p.supports && (v += "@supports (".concat(p.supports, ") {")), p.media && (v += "@media ".concat(p.media, " {"));
            var x = p.layer !== void 0;
            x && (v += "@layer".concat(p.layer.length > 0 ? " ".concat(p.layer) : "", " {")), v += p.css, x && (v += "}"), p.media && (v += "}"), p.supports && (v += "}");
            var I = p.sourceMap;
            I && typeof btoa < "u" && (v += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(I)))), " */")), y.styleTagTransform(v, w, y.options);
          })(h, u, A);
        }, remove: function() {
          (function(A) {
            if (A.parentNode === null)
              return !1;
            A.parentNode.removeChild(A);
          })(h);
        } };
      };
    }, 213: (l) => {
      l.exports = function(u, h) {
        if (h.styleSheet)
          h.styleSheet.cssText = u;
        else {
          for (; h.firstChild; )
            h.removeChild(h.firstChild);
          h.appendChild(document.createTextNode(u));
        }
      };
    }, 359: (l) => {
      l.exports = t;
    } }, _ = {};
    function m(l) {
      var u = _[l];
      if (u !== void 0)
        return u.exports;
      var h = _[l] = { id: l, exports: {} };
      return f[l](h, h.exports, m), h.exports;
    }
    m.n = (l) => {
      var u = l && l.__esModule ? () => l.default : () => l;
      return m.d(u, { a: u }), u;
    }, m.d = (l, u) => {
      for (var h in u)
        m.o(u, h) && !m.o(l, h) && Object.defineProperty(l, h, { enumerable: !0, get: u[h] });
    }, m.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), m.o = (l, u) => Object.prototype.hasOwnProperty.call(l, u), m.r = (l) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
    }, m.nc = void 0;
    var E = {};
    return (() => {
      m.r(E), m.d(E, { DefaultSplitter: () => le, Split: () => it });
      var l = m(359), u = m(701), h = m.n(u), A = m(236), w = m.n(A), y = m(80), p = m.n(y), v = m(850), x = m.n(v), I = m(182), j = m.n(I), H = m(213), C = m.n(H), $ = m(58), V = {};
      V.styleTagTransform = C(), V.setAttributes = x(), V.insert = p().bind(null, "head"), V.domAPI = w(), V.insertStyleElement = j(), h()($.Z, V), $.Z && $.Z.locals && $.Z.locals;
      const ee = (i) => (i % 2 == 0 ? 2 : 3) + "px", le = (i) => {
        const { dragging: o, pixelSize: s, color: d = "silver", hoverColor: g = "gray", dragColor: z = "black" } = i, O = { "--default-splitter-line-margin": (M = s, `${Math.max(0, Math.floor(M / 2) - 1)}px`), "--default-splitter-line-size": ee(s), "--default-splitter-line-color": o ? z : d, "--default-splitter-line-hover-color": o ? z : g };
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
      var He = m(652), G = m.n(He), Te = function() {
        if (typeof Map < "u")
          return Map;
        function i(o, s) {
          var d = -1;
          return o.some(function(g, z) {
            return g[0] === s && (d = z, !0);
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
            for (var g = 0, z = this.__entries__; g < z.length; g++) {
              var O = z[g];
              s.call(d, O[1], O[0]);
            }
          }, o;
        }();
      }(), _e = typeof window < "u" && typeof document < "u" && window.document === document, se = m.g !== void 0 && m.g.Math === Math ? m.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), Ve = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(se) : function(i) {
        return setTimeout(function() {
          return i(Date.now());
        }, 1e3 / 60);
      }, Ue = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Xe = typeof MutationObserver < "u", Ge = function() {
        function i() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(o, s) {
            var d = !1, g = !1, z = 0;
            function O() {
              d && (d = !1, o()), g && b();
            }
            function M() {
              Ve(O);
            }
            function b() {
              var R = Date.now();
              if (d) {
                if (R - z < 2)
                  return;
                g = !0;
              } else
                d = !0, g = !1, setTimeout(M, 20);
              z = R;
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
          var g = te(o).getComputedStyle(o), z = function(P) {
            for (var S = {}, Q = 0, J = ["top", "right", "bottom", "left"]; Q < J.length; Q++) {
              var ue = J[Q], ne = P["padding-" + ue];
              S[ue] = ce(ne);
            }
            return S;
          }(g), O = z.left + z.right, M = z.top + z.bottom, b = ce(g.width), R = ce(g.height);
          if (g.boxSizing === "border-box" && (Math.round(b + O) !== s && (b -= ke(g, "left", "right") + O), Math.round(R + M) !== d && (R -= ke(g, "top", "bottom") + M)), !function(P) {
            return P === te(P).document.documentElement;
          }(o)) {
            var U = Math.round(b + O) - s, Z = Math.round(R + M) - d;
            Math.abs(U) !== 1 && (b -= U), Math.abs(Z) !== 1 && (R -= Z);
          }
          return de(z.left, z.top, b, R);
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
        var s, d, g, z, O, M, b, R = (d = (s = o).x, g = s.y, z = s.width, O = s.height, M = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, b = Object.create(M.prototype), De(b, { x: d, y: g, width: z, height: O, top: g, right: d + z, bottom: O + g, left: d }), b);
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
          var g, z;
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
          z = d, (g = O).prototype = Object.create(z.prototype), g.prototype.constructor = g, ye(g, z);
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
      var pe = m(672), re = {};
      re.styleTagTransform = C(), re.setAttributes = x(), re.insert = p().bind(null, "head"), re.domAPI = w(), re.insertStyleElement = j(), h()(pe.Z, re), pe.Z && pe.Z.locals && pe.Z.locals;
      const it = (i) => {
        const { horizontal: o = !1, initialPrimarySize: s = "50%", minPrimarySize: d = "0px", minSecondarySize: g = "0px", splitterSize: z = "7px", renderSplitter: O, resetOnDoubleClick: M = !1, defaultSplitterColors: b = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: R, onMeasuredSizesChanged: U } = i, [Z, P] = l.useState({ height: 0, width: 0 }), [S, Q] = l.useState({ height: 0, width: 0 }), [J, ue] = l.useState({ height: 0, width: 0 }), ne = l.useMemo(() => o ? Z.height : Z.width, [o, Z]), me = l.useMemo(() => o ? S.height : S.width, [o, S]), he = l.useMemo(() => o ? J.height : J.width, [o, J]), [ie, Me] = l.useState(void 0), [at, lt] = l.useState(0), [st, ct] = l.useState(0), [Ee, je] = l.useState(!1);
        l.useEffect(() => {
          R && R(ie !== void 0 ? `${ie}%` : s);
        }, [ie, s]), l.useEffect(() => {
          U && U({ primary: me, splitter: he, secondary: ne - (me + he) });
        }, [o, ne, me, he]);
        const dt = (B) => {
          B.bounds && Q({ height: B.bounds.height, width: B.bounds.width });
        }, pt = (B) => {
          B.bounds && ue({ height: B.bounds.height, width: B.bounds.width });
        }, ut = (B) => {
          B.currentTarget.setPointerCapture(B.pointerId), lt(o ? B.clientY : B.clientX), ct(me), je(!0);
        }, mt = (B) => {
          if (B.currentTarget.hasPointerCapture(B.pointerId)) {
            const ae = o ? B.clientY : B.clientX, _t = st + (ae - at), wt = Math.max(0, Math.min(_t, ne));
            Me(wt / ne * 100);
          }
        }, ht = (B) => {
          B.currentTarget.releasePointerCapture(B.pointerId), je(!1);
        }, ft = () => {
          M && Me(void 0);
        }, fe = l.Children.toArray(i.children), gt = fe.length > 0 ? fe[0] : l.createElement("div", null), bt = fe.length > 1 ? fe[1] : l.createElement("div", null), xe = { primary: ie !== void 0 ? `${ie}%` : s, minPrimary: d ?? "0px", minSecondary: g ?? "0px" }, Pe = { pixelSize: he, horizontal: o, dragging: Ee }, vt = O ?? (() => l.createElement(le, Object.assign({}, Pe, { color: Ee ? b.drag : b.color, hoverColor: Ee ? b.drag : b.hover }))), At = o ? "split-container horizontal" : "split-container vertical", yt = { "--react-split-min-primary": xe.minPrimary, "--react-split-min-secondary": xe.minSecondary, "--react-split-primary": xe.primary, "--react-split-splitter": z };
        return l.createElement(Ce, { bounds: !0, onResize: (B) => {
          B.bounds && P({ height: B.bounds.height, width: B.bounds.width });
        } }, ({ measureRef: B }) => l.createElement("div", { className: "react-split", ref: B }, l.createElement("div", { className: At, style: yt }, l.createElement("div", { className: "primary" }, l.createElement(Ce, { bounds: !0, onResize: dt }, ({ measureRef: ae }) => l.createElement("div", { className: "full-content", ref: ae }, gt))), l.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: ut, onPointerUp: ht, onPointerMove: mt, onDoubleClick: ft }, l.createElement(Ce, { bounds: !0, onResize: pt }, ({ measureRef: ae }) => l.createElement("div", { className: "full-content", ref: ae }, vt(Pe)))), l.createElement("div", { className: "secondary" }, l.createElement("div", { className: "full-content" }, bt)))));
      };
    })(), E;
  })());
})(Ye);
var Mt = Ye.exports;
const jt = ({
  children: r,
  ...n
}) => /* @__PURE__ */ e(Mt.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: t,
  dragging: f
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
}, f && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...n, children: r });
var $e = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "lock", f = 448, _ = 512, m = [128274], E = "f023", l = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      f,
      _,
      m,
      E,
      l
    ]
  }, r.faLock = r.definition, r.prefix = n, r.iconName = t, r.width = f, r.height = _, r.ligatures = m, r.unicode = E, r.svgPathData = l, r.aliases = m;
})($e);
var be = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "circle", f = 512, _ = 512, m = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], E = "f111", l = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      f,
      _,
      m,
      E,
      l
    ]
  }, r.faCircle = r.definition, r.prefix = n, r.iconName = t, r.width = f, r.height = _, r.ligatures = m, r.unicode = E, r.svgPathData = l, r.aliases = m;
})(be);
var Ze = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "far", t = "clock", f = 512, _ = 512, m = [128339, "clock-four"], E = "f017", l = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      f,
      _,
      m,
      E,
      l
    ]
  }, r.faClock = r.definition, r.prefix = n, r.iconName = t, r.width = f, r.height = _, r.ligatures = m, r.unicode = E, r.svgPathData = l, r.aliases = m;
})(Ze);
const Pt = ({
  status: r
}) => r === D.DONE ? /* @__PURE__ */ e(ge, { icon: It.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" }) : r === D.ACTIVE ? /* @__PURE__ */ e(ge, { mask: be.faCircle, icon: qt.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : r === D.WAIT ? /* @__PURE__ */ e(ge, { mask: be.faCircle, icon: Ze.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : /* @__PURE__ */ e(ge, { mask: be.faCircle, transform: "shrink-8", icon: $e.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} }), Wt = ({
  items: r,
  activeItem: n,
  className: t,
  onChange: f
}) => /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: r.map((_, m) => {
  const E = (n == null ? void 0 : n.id) === _.id;
  return /* @__PURE__ */ e("li", { onClick: () => _.status !== D.DISABLED ? f == null ? void 0 : f(_) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, E ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : _.status === D.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, E && St`
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
                  `], children: /* @__PURE__ */ T("div", { css: {
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
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ T("div", { children: [
      m + 1,
      ". ",
      _.title
    ] }) }),
    /* @__PURE__ */ e(Pt, { status: _.status })
  ] }) }, _.id);
}) }) }), Ft = ({
  steps: r,
  defaultValues: n,
  mutation: t
}) => {
  const {
    stepFormRef: f,
    getNextButtonProps: _,
    getPrevButtonProps: m,
    setActiveStep: E,
    activeStepIndex: l,
    activeStep: u
  } = Rt({
    steps: r
  }), {
    Component: h
  } = u;
  return /* @__PURE__ */ e(Ne.Provider, { value: {
    mutation: t,
    stepFormRef: f
  }, children: /* @__PURE__ */ e(Ot, { bbar: [/* @__PURE__ */ e(We, { icon: Le.faArrowLeft, ...m(), children: "Назад" }, "previous"), /* @__PURE__ */ e(We, { ..._(), variant: "contained", color: "success", children: "Сохранить" }, "next")], children: /* @__PURE__ */ T(jt, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ e(Wt, { activeItem: u, onChange: E, items: r }) }),
    /* @__PURE__ */ T("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ T("h1", { css: {
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
      }, children: /* @__PURE__ */ e(h, { defaultValues: n }) })
    ] })
  ] }) }) });
}, Nt = a.object({
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
}).required(), Lt = ({
  defaultValues: r
}) => {
  const n = oe({
    schema: Nt,
    defaultValues: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { control: n.control, name: "name", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "partner_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(zt, { ...t, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "program_type_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип программы", ...t, dictionary: "navProgramType", filterOptions: (f) => f.filter(({
      id: _
    }) => _ === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "section_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(Bt, { label: "Направленность", placeholder: "Выберите направленность", ...t }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "program_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Уровень", css: {
      width: "100%"
    }, ...t, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "year_created", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...t }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "city_created", render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...t }) })
  ] });
}, Yt = a.object({
  protocol_number: a.string().optional(),
  protocol_date: a.string().optional(),
  decree_number: a.string().optional(),
  decree_date: a.string().optional(),
  authors: a.string().optional(),
  comment: a.string().optional()
}), $t = ({
  defaultValues: r
}) => {
  const n = oe({
    schema: Yt,
    defaultValues: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { control: n.control, name: "protocol_number", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "protocol_date", render: ({
      field: t
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "decree_number", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "decree_date", render: ({
      field: t
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "authors", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { css: {
      width: "100%"
    }, ...t, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "comment", render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...t, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Zt = a.object({
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
}), Ht = ({
  defaultValues: r
}) => {
  const n = oe({
    schema: Zt,
    defaultValues: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(Tt, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ T("div", { css: {
      display: "flex",
      width: "20rem",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ e(c, { control: n.control, name: "min_age", css: {
        width: "10rem"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ e(W, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ e("div", { children: "-" }),
      /* @__PURE__ */ e(c, { control: n.control, name: "max_age", css: {
        width: "10rem"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ e(W, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "competence_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "programDocCompetences", ...t, label: "Требования к уровню подготовки", placeholder: "Выберите требования к уровню подготовки" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "program_volume", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "program_duration", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Общая продолжительность", placeholder: "Введите общую продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "edu_sessions_per_week", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "edu_sessions_per_day", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Продолжительность занятия", placeholder: "Введите продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "edu_session_hour_limit", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Продолжительность ак. часа", placeholder: "Введите продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "break_duration", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Продолжительность перерыва", placeholder: "Введите продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "education_form_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "educationForm", ...t, label: "Форма обучения", placeholder: "Выберите форму обучения" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "min_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Минимальное кол-во обучающихся в группе", placeholder: "Введите минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "max_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem"
    }, label: "Максимальное кол-во обучающихся в группе", placeholder: "Введите максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "is_one_age_group", render: ({
      field: t
    }) => /* @__PURE__ */ e(Fe, { ...t, label: "Группа одного возраста?" }) })
  ] });
}, Vt = a.object({
  explanatory_note: a.string().optional(),
  program_relevance: a.string().optional(),
  pedagogical_expediency: a.string().optional(),
  distinctive_features: a.string().optional(),
  actual: a.string().optional()
}), Ut = ({
  defaultValues: r
}) => {
  const n = oe({
    schema: Vt,
    defaultValues: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { control: n.control, name: "explanatory_note", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "program_relevance", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "pedagogical_expediency", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "distinctive_features", render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: n.control, name: "actual", render: ({
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
const Xt = () => {
  const r = N("/api/rest/program-doc-results"), n = F({
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
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "category_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Gt = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Xt, {}) }), Jt = a.object({
  title: a.string({
    required_error: "Введите наименование"
  })
}).required({
  title: !0
}), Kt = () => {
  const r = N("/api/rest/program-doc-objectives"), n = F({
    mutation: r,
    schema: Jt
  });
  return /* @__PURE__ */ T(q, { css: {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderWidth: "1px",
    padding: "0.5rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "title", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование задачи", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Qt = Dt({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), er = a.object({
  mission: a.string({
    required_error: "Заполните цель/миссию"
  }),
  goal: a.string({
    required_error: "Заполните цель"
  }),
  objectives: a.array(a.string())
}).required({
  goal: !0
}), tr = () => {
  const r = oe({
    schema: er
  });
  return /* @__PURE__ */ T("div", { children: [
    /* @__PURE__ */ T(q, { css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, form: r, children: [
      /* @__PURE__ */ e(c, { name: "mission", control: r.control, render: ({
        field: n
      }) => /* @__PURE__ */ e(k, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...n }) }),
      /* @__PURE__ */ e(c, { name: "goal", control: r.control, render: ({
        field: n
      }) => /* @__PURE__ */ e(k, { label: "Цель программы", placeholder: "Введите цель программы", ...n }) }),
      /* @__PURE__ */ e(c, { name: "objectives", control: r.control, render: ({
        field: n
      }) => /* @__PURE__ */ e(Qt, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...n }) })
    ] }),
    /* @__PURE__ */ e(Kt, {})
  ] });
}, rr = a.object({
  theme: a.string({
    required_error: "Заполните тему"
  }),
  theory: a.string().optional(),
  theory_volume: a.number().optional(),
  practice: a.string().optional(),
  practice_volume: a.number().optional(),
  sort_index: a.number(),
  doc_id: a.string()
}), nr = ({
  doc_id: r
}) => {
  const n = N("/api/rest/program-doc-plans"), t = F({
    schema: rr,
    mutation: n,
    defaultValues: {
      doc_id: r,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { name: "theme", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(k, { label: "Тема", placeholder: "Введите тему", ...f }) }),
    /* @__PURE__ */ e(c, { name: "theory", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(k, { label: "Теория", placeholder: "Введите теорию", ...f }) }),
    /* @__PURE__ */ e(c, { name: "theory_volume", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(W, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...f }) }),
    /* @__PURE__ */ e(c, { name: "practice", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(k, { label: "Практика", placeholder: "Введите практику", ...f }) }),
    /* @__PURE__ */ e(c, { name: "practice_volume", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(W, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...f }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, or = () => {
  const {
    params: {
      id: r
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(nr, { doc_id: r }) });
}, ir = a.object({
  control_type_id: a.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  control_type_id: !0,
  description: !0
}), ar = () => {
  const r = N("/api/rest/program-doc-forms"), n = F({
    schema: ir,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "control_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, lr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ar, {}) }), sr = a.object({
  criterion_type_id: a.number({
    required_error: "Заполните тип критерия"
  }),
  description: a.string({
    required_error: "Заполните описание критерия"
  })
}).required({
  criterion_type_id: !0
}), cr = () => {
  const r = N("/api/rest/program-doc-criteria"), n = F({
    schema: sr,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "criterion_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, dr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(cr, {}) }), pr = a.object({
  method_id: a.number({
    required_error: "Заполните метод"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  method_id: !0,
  description: !0
}), ur = () => {
  const r = N("/api/rest/program-doc-fixations"), n = F({
    mutation: r,
    schema: pr
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "method_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, mr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ur, {}) }), hr = a.object({
  base_knowledge: a.string({
    required_error: "Заполните базовые знания"
  }),
  material: a.string({
    required_error: "Заполните материалы"
  })
}).required({
  base_knowledge: !0,
  material: !0
}), fr = () => {
  const r = N("/api/rest/program-doc-materials"), n = F({
    schema: hr,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "base_knowledge", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Базовые знания", placeholder: "Введите базовые знания", ...t }) }),
    /* @__PURE__ */ e(c, { name: "material", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Материалы", placeholder: "Введите материалы", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, gr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(fr, {}) }), br = a.object({
  management_type_id: a.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  management_type_id: !0
}), vr = () => {
  const r = N("/api/rest/program-doc-managements"), n = F({
    schema: br,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "management_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Ar = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(vr, {}) }), yr = a.object({
  indoctrination_type_id: a.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  indoctrination_type_id: !0
}), _r = () => {
  const r = N("/api/rest/program-doc-indoctrinations"), n = F({
    schema: yr,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "indoctrination_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, wr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(_r, {}) }), Cr = a.object({
  development_type_id: a.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  development_type_id: !0
}), Er = () => {
  const r = N("/api/rest/program-doc-developments"), n = F({
    schema: Cr,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "development_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, xr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Er, {}) }), zr = () => {
  const r = oe({
    schema: a.object({
      staff_description: a.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ e(q, { tw: "flex flex-col gap-4", form: r, children: /* @__PURE__ */ e(c, { control: r.control, name: "staff_description", render: ({
    field: n
  }) => /* @__PURE__ */ e(L, { tw: "w-full", ...n, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, Br = a.object({
  inventory_type_id: a.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  inventory_type_id: !0,
  description: !0
}), Tr = () => {
  const r = N("/api/rest/program-doc-inventories"), n = F({
    schema: Br,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "inventory_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Dr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Tr, {}) }), Or = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }),
  publisher: a.string().optional(),
  publish_year: a.number().optional(),
  isbn: a.string().optional()
}).required({
  title: !0
}), kr = () => {
  const r = N("/api/rest/program-doc-information"), n = F({
    schema: Or,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "authors", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Авторы", placeholder: "Введите авторов", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publisher", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Издательство", placeholder: "Введите издательство", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publish_year", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...t }) }),
    /* @__PURE__ */ e(c, { name: "isbn", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Sr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(kr, {}) }), qr = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }),
  publisher: a.string().optional(),
  publish_year: a.number().optional()
}).required({
  title: !0
}), Ir = () => {
  const r = N("/api/rest/program-doc-books"), n = F({
    schema: qr,
    mutation: r
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(c, { name: "authors", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Авторы", placeholder: "Введите авторов", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publisher", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(k, { label: "Издательство", placeholder: "Введите издательство", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publish_year", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...t }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Rr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Ir, {}) }), Mr = a.object({
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
}), jr = ({
  doc_id: r
}) => {
  const n = N("/api/rest/program-doc-schedules"), t = F({
    schema: Mr,
    mutation: n,
    defaultValues: {
      doc_id: r
    }
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { name: "number_year", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(W, { label: "Год обучения", helperText: "Год обучения (по счету)", placeholder: "Введите год обучения", ...f }) }),
    /* @__PURE__ */ e(c, { name: "date_start", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(ve, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...f }) }),
    /* @__PURE__ */ e(c, { name: "date_end", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(ve, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...f }) }),
    /* @__PURE__ */ e(c, { name: "edu_week_count", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(W, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...f }) }),
    /* @__PURE__ */ e(c, { name: "is_vacations", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(Fe, { label: "Есть каникулы?", ...f }) }),
    /* @__PURE__ */ e(c, { name: "edu_sessions_per_week", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(W, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...f }) }),
    /* @__PURE__ */ e(c, { name: "edu_sessions_per_day", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(W, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...f }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Pr = () => {
  const {
    params: {
      id: r
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(jr, { doc_id: r }) });
}, Wr = [{
  id: "general",
  title: "Основное",
  status: D.DONE,
  Component: Lt
}, {
  id: "params",
  title: "Параметры",
  status: D.DONE,
  Component: Ht
}, {
  id: "explanation",
  title: "Пояснительная записка",
  status: D.DONE,
  Component: Ut
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  status: D.DONE,
  Component: Gt
}, {
  id: "goals",
  title: "Цели и задачи",
  status: D.ACTIVE,
  Component: tr
}, {
  id: "edu-plan",
  title: "Учебный план",
  status: D.WAIT,
  Component: or
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  status: D.WAIT,
  Component: lr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  status: D.WAIT,
  Component: dr
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  status: D.WAIT,
  Component: mr
}, {
  id: "materials",
  title: "Методические материалы",
  status: D.WAIT,
  Component: gr
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  status: D.WAIT,
  Component: Ar
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  status: D.WAIT,
  Component: wr
}, {
  title: "Развивающая деятельность",
  id: "developments",
  status: D.WAIT,
  Component: xr
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  status: D.WAIT,
  Component: zr
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  status: D.WAIT,
  Component: Dr
}, {
  title: "Информационное обеспечение",
  id: "information",
  status: D.WAIT,
  Component: Sr
}, {
  title: "Список литературы",
  id: "books",
  status: D.WAIT,
  Component: Rr
}, {
  title: "Календарный учебный график",
  id: "schedules",
  status: D.WAIT,
  Component: Pr
}, {
  id: "description",
  title: "Утверждение",
  status: D.DONE,
  Component: $t
}], Xr = () => {
  const {
    params: {
      id: r
    },
    setTitle: n
  } = Be(), t = kt(`/api/rest/program-docs/${r}`, {
    select: ({
      data: m
    }) => {
      const E = m[0];
      return {
        ...E,
        max_age: E.max_age ? Number(E.max_age) : void 0,
        min_age: E.min_age ? Number(E.min_age) : void 0
      };
    }
  }), f = Ct(), _ = N("PUT", `/api/rest/program-docs/${r}`, {
    onSuccess: (m) => {
      f.setQueriesData({
        queryKey: [`/api/rest/program-docs/${r}`]
      }, (E) => ({
        ...E,
        data: [m.data]
      }));
    }
  });
  return K.useEffect(() => {
    n(`Конструктор программы #${r}`);
  }, [r, n]), t.isLoading ? /* @__PURE__ */ e(Et, { spinning: !0 }) : /* @__PURE__ */ e(Ft, { steps: Wr, mutation: _, defaultValues: t.data });
};
export {
  Xr as default
};
