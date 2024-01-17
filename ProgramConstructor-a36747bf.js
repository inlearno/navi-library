import { j as e, f as Ct, a as T, u as Et, S as xt } from "./library-364e75ac.js";
import { r as Z, R as zt } from "./react-181b9648.js";
import { u as W, C as We, z as a, T as O, F as c, P as Bt, D as U, R as Tt, Y as ze, a as S, b as ve, c as N, N as I, L as Dt, B as Fe, d as F, e as Ot } from "./RootSection-5a48d5a7.js";
import { P as kt, u as St } from "./useDictionary-403c6ca6.js";
import { a as qt, B as L } from "./mui-d2313b11.js";
import { f as Rt } from "./faPen-6d05924c.js";
import { f as Mt } from "./faCheckCircle-ad748d9a.js";
import { F as se } from "./icons-42066a3f.js";
import { u as Be } from "./useWindowController-0b93e3bf.js";
var J = /* @__PURE__ */ ((n) => (n.DONE = "done", n.ACTIVE = "active", n.WAIT = "wait", n.DISABLED = "disabled", n.LOADING = "loading", n))(J || {});
const jt = ({
  stepsDefinition: n,
  values: r,
  stateKey: t
}) => {
  const [f, E] = Z.useState(!1), [m, _] = Z.useState({});
  Z.useEffect(() => {
    r && t in r && r[t] && _(r[t]);
  }, [r]);
  const s = Z.useMemo(() => n.map((C) => ({
    ...C,
    status: m[C.id] ?? J.WAIT
  })), [n, m]), [h, u] = Z.useState(s[0]), v = Z.useRef(null), y = Z.useMemo(() => s.findIndex((C) => C.id === (h == null ? void 0 : h.id)) || 0, [h]), w = y === s.length - 1, p = Z.useCallback(async () => {
    if (!w)
      try {
        E(!0), _((C) => ({
          ...C,
          [h.id]: J.LOADING
        })), v.current && await v.current.save(), u(s[y + 1]);
      } catch {
      } finally {
        E(!1);
      }
  }, [y, w]), A = Z.useCallback(() => {
    y !== 0 && u(s[y - 1]);
  }, [y]);
  return {
    steps: s,
    stepFormRef: v,
    getNextButtonProps: () => ({
      onClick: p,
      disabled: w || f
    }),
    activeStep: h,
    activeStepIndex: y,
    setActiveStep: u,
    getPrevButtonProps: () => ({
      onClick: A,
      disabled: y === 0
    })
  };
}, Ne = zt.createContext(null), ie = (n) => {
  const {
    stepFormRef: r,
    activeStep: t,
    stateKey: f,
    values: E,
    mutation: m
  } = Z.useContext(Ne), _ = W({
    mutation: m,
    transformSendData: (s) => ({
      ...s,
      [f]: {
        ...E ? E[f] : {},
        [t.id]: J.DONE
      }
    }),
    ...n
  });
  return Z.useImperativeHandle(r, () => ({
    save: () => _.submit()
  })), _;
};
var Le = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = "fas", t = "arrow-left", f = 448, E = 512, m = [8592], _ = "f060", s = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  n.definition = {
    prefix: r,
    iconName: t,
    icon: [
      f,
      E,
      m,
      _,
      s
    ]
  }, n.faArrowLeft = n.definition, n.prefix = r, n.iconName = t, n.width = f, n.height = E, n.ligatures = m, n.unicode = _, n.svgPathData = s, n.aliases = m;
})(Le);
var Ye = { exports: {} };
(function(n, r) {
  (function(t, f) {
    n.exports = f(Z);
  })(self, (t) => (() => {
    var f = { 58: (s, h, u) => {
      u.d(h, { Z: () => A });
      var v = u(864), y = u.n(v), w = u(352), p = u.n(w)()(y());
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
      const A = p;
    }, 672: (s, h, u) => {
      u.d(h, { Z: () => A });
      var v = u(864), y = u.n(v), w = u(352), p = u.n(w)()(y());
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
      const A = p;
    }, 352: (s) => {
      s.exports = function(h) {
        var u = [];
        return u.toString = function() {
          return this.map(function(v) {
            var y = "", w = v[5] !== void 0;
            return v[4] && (y += "@supports (".concat(v[4], ") {")), v[2] && (y += "@media ".concat(v[2], " {")), w && (y += "@layer".concat(v[5].length > 0 ? " ".concat(v[5]) : "", " {")), y += h(v), w && (y += "}"), v[2] && (y += "}"), v[4] && (y += "}"), y;
          }).join("");
        }, u.i = function(v, y, w, p, A) {
          typeof v == "string" && (v = [[null, v, void 0]]);
          var C = {};
          if (w)
            for (var q = 0; q < this.length; q++) {
              var j = this[q][0];
              j != null && (C[j] = !0);
            }
          for (var H = 0; H < v.length; H++) {
            var x = [].concat(v[H]);
            w && C[x[0]] || (A !== void 0 && (x[5] === void 0 || (x[1] = "@layer".concat(x[5].length > 0 ? " ".concat(x[5]) : "", " {").concat(x[1], "}")), x[5] = A), y && (x[2] && (x[1] = "@media ".concat(x[2], " {").concat(x[1], "}")), x[2] = y), p && (x[4] ? (x[1] = "@supports (".concat(x[4], ") {").concat(x[1], "}"), x[4] = p) : x[4] = "".concat(p)), u.push(x));
          }
        }, u;
      };
    }, 864: (s) => {
      s.exports = function(h) {
        var u = h[1], v = h[3];
        if (!v)
          return u;
        if (typeof btoa == "function") {
          var y = btoa(unescape(encodeURIComponent(JSON.stringify(v)))), w = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(y), p = "/*# ".concat(w, " */");
          return [u].concat([p]).join(`
`);
        }
        return [u].join(`
`);
      };
    }, 372: (s, h, u) => {
      var v = u(567);
      function y() {
      }
      function w() {
      }
      w.resetWarningCache = y, s.exports = function() {
        function p(q, j, H, x, Y, V) {
          if (V !== v) {
            var ee = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw ee.name = "Invariant Violation", ee;
          }
        }
        function A() {
          return p;
        }
        p.isRequired = p;
        var C = { array: p, bigint: p, bool: p, func: p, number: p, object: p, string: p, symbol: p, any: p, arrayOf: A, element: p, elementType: p, instanceOf: A, node: p, objectOf: A, oneOf: A, oneOfType: A, shape: A, exact: A, checkPropTypes: w, resetWarningCache: y };
        return C.PropTypes = C, C;
      };
    }, 652: (s, h, u) => {
      s.exports = u(372)();
    }, 567: (s) => {
      s.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (s) => {
      var h = [];
      function u(w) {
        for (var p = -1, A = 0; A < h.length; A++)
          if (h[A].identifier === w) {
            p = A;
            break;
          }
        return p;
      }
      function v(w, p) {
        for (var A = {}, C = [], q = 0; q < w.length; q++) {
          var j = w[q], H = p.base ? j[0] + p.base : j[0], x = A[H] || 0, Y = "".concat(H, " ").concat(x);
          A[H] = x + 1;
          var V = u(Y), ee = { css: j[1], media: j[2], sourceMap: j[3], supports: j[4], layer: j[5] };
          if (V !== -1)
            h[V].references++, h[V].updater(ee);
          else {
            var le = y(ee, p);
            p.byIndex = q, h.splice(q, 0, { identifier: Y, updater: le, references: 1 });
          }
          C.push(Y);
        }
        return C;
      }
      function y(w, p) {
        var A = p.domAPI(p);
        return A.update(w), function(C) {
          if (C) {
            if (C.css === w.css && C.media === w.media && C.sourceMap === w.sourceMap && C.supports === w.supports && C.layer === w.layer)
              return;
            A.update(w = C);
          } else
            A.remove();
        };
      }
      s.exports = function(w, p) {
        var A = v(w = w || [], p = p || {});
        return function(C) {
          C = C || [];
          for (var q = 0; q < A.length; q++) {
            var j = u(A[q]);
            h[j].references--;
          }
          for (var H = v(C, p), x = 0; x < A.length; x++) {
            var Y = u(A[x]);
            h[Y].references === 0 && (h[Y].updater(), h.splice(Y, 1));
          }
          A = H;
        };
      };
    }, 80: (s) => {
      var h = {};
      s.exports = function(u, v) {
        var y = function(w) {
          if (h[w] === void 0) {
            var p = document.querySelector(w);
            if (window.HTMLIFrameElement && p instanceof window.HTMLIFrameElement)
              try {
                p = p.contentDocument.head;
              } catch {
                p = null;
              }
            h[w] = p;
          }
          return h[w];
        }(u);
        if (!y)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        y.appendChild(v);
      };
    }, 182: (s) => {
      s.exports = function(h) {
        var u = document.createElement("style");
        return h.setAttributes(u, h.attributes), h.insert(u, h.options), u;
      };
    }, 850: (s, h, u) => {
      s.exports = function(v) {
        var y = u.nc;
        y && v.setAttribute("nonce", y);
      };
    }, 236: (s) => {
      s.exports = function(h) {
        var u = h.insertStyleElement(h);
        return { update: function(v) {
          (function(y, w, p) {
            var A = "";
            p.supports && (A += "@supports (".concat(p.supports, ") {")), p.media && (A += "@media ".concat(p.media, " {"));
            var C = p.layer !== void 0;
            C && (A += "@layer".concat(p.layer.length > 0 ? " ".concat(p.layer) : "", " {")), A += p.css, C && (A += "}"), p.media && (A += "}"), p.supports && (A += "}");
            var q = p.sourceMap;
            q && typeof btoa < "u" && (A += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(q)))), " */")), w.styleTagTransform(A, y, w.options);
          })(u, h, v);
        }, remove: function() {
          (function(v) {
            if (v.parentNode === null)
              return !1;
            v.parentNode.removeChild(v);
          })(u);
        } };
      };
    }, 213: (s) => {
      s.exports = function(h, u) {
        if (u.styleSheet)
          u.styleSheet.cssText = h;
        else {
          for (; u.firstChild; )
            u.removeChild(u.firstChild);
          u.appendChild(document.createTextNode(h));
        }
      };
    }, 359: (s) => {
      s.exports = t;
    } }, E = {};
    function m(s) {
      var h = E[s];
      if (h !== void 0)
        return h.exports;
      var u = E[s] = { id: s, exports: {} };
      return f[s](u, u.exports, m), u.exports;
    }
    m.n = (s) => {
      var h = s && s.__esModule ? () => s.default : () => s;
      return m.d(h, { a: h }), h;
    }, m.d = (s, h) => {
      for (var u in h)
        m.o(h, u) && !m.o(s, u) && Object.defineProperty(s, u, { enumerable: !0, get: h[u] });
    }, m.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), m.o = (s, h) => Object.prototype.hasOwnProperty.call(s, h), m.r = (s) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
    }, m.nc = void 0;
    var _ = {};
    return (() => {
      m.r(_), m.d(_, { DefaultSplitter: () => le, Split: () => ot });
      var s = m(359), h = m(701), u = m.n(h), v = m(236), y = m.n(v), w = m(80), p = m.n(w), A = m(850), C = m.n(A), q = m(182), j = m.n(q), H = m(213), x = m.n(H), Y = m(58), V = {};
      V.styleTagTransform = x(), V.setAttributes = C(), V.insert = p().bind(null, "head"), V.domAPI = y(), V.insertStyleElement = j(), u()(Y.Z, V), Y.Z && Y.Z.locals && Y.Z.locals;
      const ee = (o) => (o % 2 == 0 ? 2 : 3) + "px", le = (o) => {
        const { dragging: i, pixelSize: l, color: d = "silver", hoverColor: g = "gray", dragColor: z = "black" } = o, D = { "--default-splitter-line-margin": (M = l, `${Math.max(0, Math.floor(M / 2) - 1)}px`), "--default-splitter-line-size": ee(l), "--default-splitter-line-color": i ? z : d, "--default-splitter-line-hover-color": i ? z : g };
        var M;
        return s.createElement("div", { className: "default-splitter", style: D }, s.createElement("div", { className: "line" }));
      };
      function _e() {
        return _e = Object.assign ? Object.assign.bind() : function(o) {
          for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i];
            for (var d in l)
              Object.prototype.hasOwnProperty.call(l, d) && (o[d] = l[d]);
          }
          return o;
        }, _e.apply(this, arguments);
      }
      function Ae(o, i) {
        return Ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, d) {
          return l.__proto__ = d, l;
        }, Ae(o, i);
      }
      var He = m(652), X = m.n(He), Te = function() {
        if (typeof Map < "u")
          return Map;
        function o(i, l) {
          var d = -1;
          return i.some(function(g, z) {
            return g[0] === l && (d = z, !0);
          }), d;
        }
        return function() {
          function i() {
            this.__entries__ = [];
          }
          return Object.defineProperty(i.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), i.prototype.get = function(l) {
            var d = o(this.__entries__, l), g = this.__entries__[d];
            return g && g[1];
          }, i.prototype.set = function(l, d) {
            var g = o(this.__entries__, l);
            ~g ? this.__entries__[g][1] = d : this.__entries__.push([l, d]);
          }, i.prototype.delete = function(l) {
            var d = this.__entries__, g = o(d, l);
            ~g && d.splice(g, 1);
          }, i.prototype.has = function(l) {
            return !!~o(this.__entries__, l);
          }, i.prototype.clear = function() {
            this.__entries__.splice(0);
          }, i.prototype.forEach = function(l, d) {
            d === void 0 && (d = null);
            for (var g = 0, z = this.__entries__; g < z.length; g++) {
              var D = z[g];
              l.call(d, D[1], D[0]);
            }
          }, i;
        }();
      }(), ye = typeof window < "u" && typeof document < "u" && window.document === document, ce = m.g !== void 0 && m.g.Math === Math ? m.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), Ve = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ce) : function(o) {
        return setTimeout(function() {
          return o(Date.now());
        }, 1e3 / 60);
      }, Ge = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ue = typeof MutationObserver < "u", Xe = function() {
        function o() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(i, l) {
            var d = !1, g = !1, z = 0;
            function D() {
              d && (d = !1, i()), g && b();
            }
            function M() {
              Ve(D);
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
        return o.prototype.addObserver = function(i) {
          ~this.observers_.indexOf(i) || this.observers_.push(i), this.connected_ || this.connect_();
        }, o.prototype.removeObserver = function(i) {
          var l = this.observers_, d = l.indexOf(i);
          ~d && l.splice(d, 1), !l.length && this.connected_ && this.disconnect_();
        }, o.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, o.prototype.updateObservers_ = function() {
          var i = this.observers_.filter(function(l) {
            return l.gatherActive(), l.hasActive();
          });
          return i.forEach(function(l) {
            return l.broadcastActive();
          }), i.length > 0;
        }, o.prototype.connect_ = function() {
          ye && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ue ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, o.prototype.disconnect_ = function() {
          ye && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, o.prototype.onTransitionEnd_ = function(i) {
          var l = i.propertyName, d = l === void 0 ? "" : l;
          Ge.some(function(g) {
            return !!~d.indexOf(g);
          }) && this.refresh();
        }, o.getInstance = function() {
          return this.instance_ || (this.instance_ = new o()), this.instance_;
        }, o.instance_ = null, o;
      }(), De = function(o, i) {
        for (var l = 0, d = Object.keys(i); l < d.length; l++) {
          var g = d[l];
          Object.defineProperty(o, g, { value: i[g], enumerable: !1, writable: !1, configurable: !0 });
        }
        return o;
      }, te = function(o) {
        return o && o.ownerDocument && o.ownerDocument.defaultView || ce;
      }, Oe = pe(0, 0, 0, 0);
      function de(o) {
        return parseFloat(o) || 0;
      }
      function ke(o) {
        for (var i = [], l = 1; l < arguments.length; l++)
          i[l - 1] = arguments[l];
        return i.reduce(function(d, g) {
          return d + de(o["border-" + g + "-width"]);
        }, 0);
      }
      var Je = typeof SVGGraphicsElement < "u" ? function(o) {
        return o instanceof te(o).SVGGraphicsElement;
      } : function(o) {
        return o instanceof te(o).SVGElement && typeof o.getBBox == "function";
      };
      function Ke(o) {
        return ye ? Je(o) ? function(i) {
          var l = i.getBBox();
          return pe(0, 0, l.width, l.height);
        }(o) : function(i) {
          var l = i.clientWidth, d = i.clientHeight;
          if (!l && !d)
            return Oe;
          var g = te(i).getComputedStyle(i), z = function(P) {
            for (var k = {}, Q = 0, K = ["top", "right", "bottom", "left"]; Q < K.length; Q++) {
              var me = K[Q], ne = P["padding-" + me];
              k[me] = de(ne);
            }
            return k;
          }(g), D = z.left + z.right, M = z.top + z.bottom, b = de(g.width), R = de(g.height);
          if (g.boxSizing === "border-box" && (Math.round(b + D) !== l && (b -= ke(g, "left", "right") + D), Math.round(R + M) !== d && (R -= ke(g, "top", "bottom") + M)), !function(P) {
            return P === te(P).document.documentElement;
          }(i)) {
            var G = Math.round(b + D) - l, $ = Math.round(R + M) - d;
            Math.abs(G) !== 1 && (b -= G), Math.abs($) !== 1 && (R -= $);
          }
          return pe(z.left, z.top, b, R);
        }(o) : Oe;
      }
      function pe(o, i, l, d) {
        return { x: o, y: i, width: l, height: d };
      }
      var Qe = function() {
        function o(i) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = pe(0, 0, 0, 0), this.target = i;
        }
        return o.prototype.isActive = function() {
          var i = Ke(this.target);
          return this.contentRect_ = i, i.width !== this.broadcastWidth || i.height !== this.broadcastHeight;
        }, o.prototype.broadcastRect = function() {
          var i = this.contentRect_;
          return this.broadcastWidth = i.width, this.broadcastHeight = i.height, i;
        }, o;
      }(), et = function(o, i) {
        var l, d, g, z, D, M, b, R = (d = (l = i).x, g = l.y, z = l.width, D = l.height, M = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, b = Object.create(M.prototype), De(b, { x: d, y: g, width: z, height: D, top: g, right: d + z, bottom: D + g, left: d }), b);
        De(this, { target: o, contentRect: R });
      }, tt = function() {
        function o(i, l, d) {
          if (this.activeObservations_ = [], this.observations_ = new Te(), typeof i != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = i, this.controller_ = l, this.callbackCtx_ = d;
        }
        return o.prototype.observe = function(i) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(i instanceof te(i).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var l = this.observations_;
            l.has(i) || (l.set(i, new Qe(i)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, o.prototype.unobserve = function(i) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(i instanceof te(i).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var l = this.observations_;
            l.has(i) && (l.delete(i), l.size || this.controller_.removeObserver(this));
          }
        }, o.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, o.prototype.gatherActive = function() {
          var i = this;
          this.clearActive(), this.observations_.forEach(function(l) {
            l.isActive() && i.activeObservations_.push(l);
          });
        }, o.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var i = this.callbackCtx_, l = this.activeObservations_.map(function(d) {
              return new et(d.target, d.broadcastRect());
            });
            this.callback_.call(i, l, i), this.clearActive();
          }
        }, o.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, o.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, o;
      }(), Se = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Te(), qe = function o(i) {
        if (!(this instanceof o))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var l = Xe.getInstance(), d = new tt(i, l, this);
        Se.set(this, d);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(o) {
        qe.prototype[o] = function() {
          var i;
          return (i = Se.get(this))[o].apply(i, arguments);
        };
      });
      const rt = ce.ResizeObserver !== void 0 ? ce.ResizeObserver : qe;
      var nt = ["client", "offset", "scroll", "bounds", "margin"];
      function Re(o) {
        var i = [];
        return nt.forEach(function(l) {
          o[l] && i.push(l);
        }), i;
      }
      function Me(o, i) {
        var l = {};
        if (i.indexOf("client") > -1 && (l.client = { top: o.clientTop, left: o.clientLeft, width: o.clientWidth, height: o.clientHeight }), i.indexOf("offset") > -1 && (l.offset = { top: o.offsetTop, left: o.offsetLeft, width: o.offsetWidth, height: o.offsetHeight }), i.indexOf("scroll") > -1 && (l.scroll = { top: o.scrollTop, left: o.scrollLeft, width: o.scrollWidth, height: o.scrollHeight }), i.indexOf("bounds") > -1) {
          var d = o.getBoundingClientRect();
          l.bounds = { top: d.top, right: d.right, bottom: d.bottom, left: d.left, width: d.width, height: d.height };
        }
        if (i.indexOf("margin") > -1) {
          var g = getComputedStyle(o);
          l.margin = { top: g ? parseInt(g.marginTop) : 0, right: g ? parseInt(g.marginRight) : 0, bottom: g ? parseInt(g.marginBottom) : 0, left: g ? parseInt(g.marginLeft) : 0 };
        }
        return l;
      }
      function it(o) {
        return o && o.ownerDocument && o.ownerDocument.defaultView || window;
      }
      var we = function(o) {
        var i, l;
        return l = i = function(d) {
          var g, z;
          function D() {
            for (var b, R = arguments.length, G = new Array(R), $ = 0; $ < R; $++)
              G[$] = arguments[$];
            return (b = d.call.apply(d, [this].concat(G)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, b._animationFrameID = null, b._resizeObserver = null, b._node = null, b._window = null, b.measure = function(P) {
              var k = Me(b._node, Re(b.props));
              P && (k.entry = P[0].contentRect), b._animationFrameID = b._window.requestAnimationFrame(function() {
                b._resizeObserver !== null && (b.setState({ contentRect: k }), typeof b.props.onResize == "function" && b.props.onResize(k));
              });
            }, b._handleRef = function(P) {
              b._resizeObserver !== null && b._node !== null && b._resizeObserver.unobserve(b._node), b._node = P, b._window = it(b._node);
              var k = b.props.innerRef;
              k && (typeof k == "function" ? k(b._node) : k.current = b._node), b._resizeObserver !== null && b._node !== null && b._resizeObserver.observe(b._node);
            }, b;
          }
          z = d, (g = D).prototype = Object.create(z.prototype), g.prototype.constructor = g, Ae(g, z);
          var M = D.prototype;
          return M.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new rt(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Me(this._node, Re(this.props))));
          }, M.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, M.render = function() {
            var b = this.props, R = (b.innerRef, b.onResize, function(G, $) {
              if (G == null)
                return {};
              var P, k, Q = {}, K = Object.keys(G);
              for (k = 0; k < K.length; k++)
                P = K[k], $.indexOf(P) >= 0 || (Q[P] = G[P]);
              return Q;
            }(b, ["innerRef", "onResize"]));
            return (0, s.createElement)(o, _e({}, R, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, D;
        }(s.Component), i.propTypes = { client: X().bool, offset: X().bool, scroll: X().bool, bounds: X().bool, margin: X().bool, innerRef: X().oneOfType([X().object, X().func]), onResize: X().func }, l;
      }(function(o) {
        var i = o.measure, l = o.measureRef, d = o.contentRect;
        return (0, o.children)({ measure: i, measureRef: l, contentRect: d });
      });
      we.displayName = "Measure", we.propTypes.children = X().func;
      const Ce = we;
      var ue = m(672), re = {};
      re.styleTagTransform = x(), re.setAttributes = C(), re.insert = p().bind(null, "head"), re.domAPI = y(), re.insertStyleElement = j(), u()(ue.Z, re), ue.Z && ue.Z.locals && ue.Z.locals;
      const ot = (o) => {
        const { horizontal: i = !1, initialPrimarySize: l = "50%", minPrimarySize: d = "0px", minSecondarySize: g = "0px", splitterSize: z = "7px", renderSplitter: D, resetOnDoubleClick: M = !1, defaultSplitterColors: b = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: R, onMeasuredSizesChanged: G } = o, [$, P] = s.useState({ height: 0, width: 0 }), [k, Q] = s.useState({ height: 0, width: 0 }), [K, me] = s.useState({ height: 0, width: 0 }), ne = s.useMemo(() => i ? $.height : $.width, [i, $]), he = s.useMemo(() => i ? k.height : k.width, [i, k]), fe = s.useMemo(() => i ? K.height : K.width, [i, K]), [oe, je] = s.useState(void 0), [at, st] = s.useState(0), [lt, ct] = s.useState(0), [Ee, Pe] = s.useState(!1);
        s.useEffect(() => {
          R && R(oe !== void 0 ? `${oe}%` : l);
        }, [oe, l]), s.useEffect(() => {
          G && G({ primary: he, splitter: fe, secondary: ne - (he + fe) });
        }, [i, ne, he, fe]);
        const dt = (B) => {
          B.bounds && Q({ height: B.bounds.height, width: B.bounds.width });
        }, pt = (B) => {
          B.bounds && me({ height: B.bounds.height, width: B.bounds.width });
        }, ut = (B) => {
          B.currentTarget.setPointerCapture(B.pointerId), st(i ? B.clientY : B.clientX), ct(he), Pe(!0);
        }, mt = (B) => {
          if (B.currentTarget.hasPointerCapture(B.pointerId)) {
            const ae = i ? B.clientY : B.clientX, yt = lt + (ae - at), wt = Math.max(0, Math.min(yt, ne));
            je(wt / ne * 100);
          }
        }, ht = (B) => {
          B.currentTarget.releasePointerCapture(B.pointerId), Pe(!1);
        }, ft = () => {
          M && je(void 0);
        }, ge = s.Children.toArray(o.children), gt = ge.length > 0 ? ge[0] : s.createElement("div", null), bt = ge.length > 1 ? ge[1] : s.createElement("div", null), xe = { primary: oe !== void 0 ? `${oe}%` : l, minPrimary: d ?? "0px", minSecondary: g ?? "0px" }, Ie = { pixelSize: fe, horizontal: i, dragging: Ee }, vt = D ?? (() => s.createElement(le, Object.assign({}, Ie, { color: Ee ? b.drag : b.color, hoverColor: Ee ? b.drag : b.hover }))), _t = i ? "split-container horizontal" : "split-container vertical", At = { "--react-split-min-primary": xe.minPrimary, "--react-split-min-secondary": xe.minSecondary, "--react-split-primary": xe.primary, "--react-split-splitter": z };
        return s.createElement(Ce, { bounds: !0, onResize: (B) => {
          B.bounds && P({ height: B.bounds.height, width: B.bounds.width });
        } }, ({ measureRef: B }) => s.createElement("div", { className: "react-split", ref: B }, s.createElement("div", { className: _t, style: At }, s.createElement("div", { className: "primary" }, s.createElement(Ce, { bounds: !0, onResize: dt }, ({ measureRef: ae }) => s.createElement("div", { className: "full-content", ref: ae }, gt))), s.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: ut, onPointerUp: ht, onPointerMove: mt, onDoubleClick: ft }, s.createElement(Ce, { bounds: !0, onResize: pt }, ({ measureRef: ae }) => s.createElement("div", { className: "full-content", ref: ae }, vt(Ie)))), s.createElement("div", { className: "secondary" }, s.createElement("div", { className: "full-content" }, bt)))));
      };
    })(), _;
  })());
})(Ye);
var Pt = Ye.exports;
const It = ({
  children: n,
  ...r
}) => /* @__PURE__ */ e(Pt.Split, { defaultSplitterColors: {
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
}] }), ...r, children: n });
var $e = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = "fas", t = "lock", f = 448, E = 512, m = [128274], _ = "f023", s = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  n.definition = {
    prefix: r,
    iconName: t,
    icon: [
      f,
      E,
      m,
      _,
      s
    ]
  }, n.faLock = n.definition, n.prefix = r, n.iconName = t, n.width = f, n.height = E, n.ligatures = m, n.unicode = _, n.svgPathData = s, n.aliases = m;
})($e);
var be = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = "fas", t = "circle", f = 512, E = 512, m = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], _ = "f111", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  n.definition = {
    prefix: r,
    iconName: t,
    icon: [
      f,
      E,
      m,
      _,
      s
    ]
  }, n.faCircle = n.definition, n.prefix = r, n.iconName = t, n.width = f, n.height = E, n.ligatures = m, n.unicode = _, n.svgPathData = s, n.aliases = m;
})(be);
var Ze = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  var r = "far", t = "clock", f = 512, E = 512, m = [128339, "clock-four"], _ = "f017", s = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  n.definition = {
    prefix: r,
    iconName: t,
    icon: [
      f,
      E,
      m,
      _,
      s
    ]
  }, n.faClock = n.definition, n.prefix = r, n.iconName = t, n.width = f, n.height = E, n.ligatures = m, n.unicode = _, n.svgPathData = s, n.aliases = m;
})(Ze);
const Wt = ({
  status: n
}) => n === J.DONE ? /* @__PURE__ */ e(se, { icon: Mt.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" }) : n === J.ACTIVE ? /* @__PURE__ */ e(se, { mask: be.faCircle, icon: Rt.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : n === J.WAIT ? /* @__PURE__ */ e(se, { mask: be.faCircle, icon: Ze.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : n === J.LOADING ? /* @__PURE__ */ e(se, { icon: Ct.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" }) : /* @__PURE__ */ e(se, { mask: be.faCircle, transform: "shrink-8", icon: $e.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} }), Ft = ({
  items: n,
  activeItem: r,
  className: t,
  onChange: f
}) => /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: n.map((E, m) => {
  const _ = (r == null ? void 0 : r.id) === E.id;
  return /* @__PURE__ */ e("li", { onClick: () => E.status !== J.DISABLED ? f == null ? void 0 : f(E) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, _ ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : E.status === J.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, _ && qt`
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
      E.title
    ] }) }),
    /* @__PURE__ */ e(Wt, { status: E.status })
  ] }) }, E.id);
}) }) }), Nt = ({
  steps: n,
  values: r,
  mutation: t,
  stateKey: f = "state"
}) => {
  const {
    steps: E,
    stepFormRef: m,
    getNextButtonProps: _,
    getPrevButtonProps: s,
    setActiveStep: h,
    activeStepIndex: u,
    activeStep: v
  } = jt({
    stepsDefinition: n,
    values: r,
    stateKey: f
  }), {
    Component: y
  } = v;
  return /* @__PURE__ */ e(Ne.Provider, { value: {
    activeStep: v,
    mutation: t,
    stepFormRef: m,
    stateKey: f,
    values: r
  }, children: /* @__PURE__ */ e(kt, { bbar: [/* @__PURE__ */ e(We, { icon: Le.faArrowLeft, ...s(), children: "Назад" }, "previous"), /* @__PURE__ */ e(We, { ..._(), variant: "contained", color: "success", children: "Сохранить" }, "next")], children: /* @__PURE__ */ T(It, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ e(Ft, { activeItem: v, onChange: h, items: E }) }),
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
        u + 1,
        ". ",
        v == null ? void 0 : v.title
      ] }),
      /* @__PURE__ */ e("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ e(y, { defaultValues: r }) })
    ] })
  ] }) }) });
}, Lt = a.object({
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
}).required(), Yt = ({
  defaultValues: n
}) => {
  const r = ie({
    schema: Lt,
    defaultValues: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { control: r.control, name: "name", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "partner_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(Bt, { ...t, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_type_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Тип программы", ...t, dictionary: "navProgramType", filterOptions: (f) => f.filter(({
      id: E
    }) => E === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "section_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(Tt, { label: "Направленность", placeholder: "Выберите направленность", ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Уровень", css: {
      width: "100%"
    }, ...t, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "year_created", render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "city_created", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...t }) })
  ] });
}, $t = a.object({
  protocol_number: a.string().optional(),
  protocol_date: a.string().optional(),
  decree_number: a.string().optional(),
  decree_date: a.string().optional(),
  authors: a.string().optional(),
  comment: a.string().optional()
}), Zt = ({
  defaultValues: n
}) => {
  const r = ie({
    schema: $t,
    defaultValues: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { control: r.control, name: "protocol_number", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "protocol_date", render: ({
      field: t
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "decree_number", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "decree_date", render: ({
      field: t
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "authors", render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { css: {
      width: "100%"
    }, ...t, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "comment", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { css: {
      width: "100%"
    }, ...t, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Ht = a.object({
  min_age: a.coerce.number().optional(),
  max_age: a.coerce.number().optional(),
  competence_level_id: a.number().nullish(),
  program_volume: a.coerce.number().optional(),
  program_duration: a.coerce.number().optional(),
  edu_sessions_per_week: a.coerce.number().optional(),
  edu_sessions_per_day: a.coerce.number().optional(),
  edu_session_hour_limit: a.coerce.number().optional(),
  break_duration: a.coerce.number().optional(),
  education_form_id: a.string().nullish(),
  min_group_size: a.coerce.number().optional(),
  max_group_size: a.coerce.number().optional(),
  is_one_age_group: a.boolean().optional()
}), Vt = ({
  defaultValues: n
}) => {
  const r = ie({
    schema: Ht,
    defaultValues: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(Dt, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ T("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ e(c, { control: r.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ e(I, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ e("div", { children: "-" }),
      /* @__PURE__ */ e(c, { control: r.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ e(I, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "competence_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { dictionary: "programDocCompetences", ...t, label: "Требования к уровню подготовки", placeholder: "Выберите требования к уровню подготовки" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_volume", render: ({
      field: t
    }) => /* @__PURE__ */ e(I, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_duration", render: ({
      field: t
    }) => /* @__PURE__ */ e(I, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", placeholder: "Введите общую продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "edu_sessions_per_week", render: ({
      field: t
    }) => /* @__PURE__ */ e(I, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "edu_sessions_per_day", render: ({
      field: t
    }) => /* @__PURE__ */ e(I, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", placeholder: "Введите продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "edu_session_hour_limit", render: ({
      field: t
    }) => /* @__PURE__ */ e(I, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", placeholder: "Введите продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "break_duration", render: ({
      field: t
    }) => /* @__PURE__ */ e(I, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", placeholder: "Введите продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "education_form_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { dictionary: "educationForm", ...t, label: "Форма обучения", placeholder: "Выберите форму обучения" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "min_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ e(I, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе", placeholder: "Введите минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "max_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ e(I, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе", placeholder: "Введите максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "is_one_age_group", render: ({
      field: t
    }) => /* @__PURE__ */ e(Fe, { ...t, label: "Группа одного возраста?" }) })
  ] });
}, Gt = a.object({
  explanatory_note: a.string().nullish(),
  program_relevance: a.string().nullish(),
  pedagogical_expediency: a.string().nullish(),
  distinctive_features: a.string().nullish(),
  actual: a.string().nullish()
}), Ut = ({
  defaultValues: n
}) => {
  const r = ie({
    schema: Gt,
    defaultValues: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { control: r.control, name: "explanatory_note", render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "program_relevance", render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "pedagogical_expediency", render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "distinctive_features", render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(c, { control: r.control, name: "actual", render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Новизна", placeholder: "Введите новизну", css: {
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
  const n = F("/api/rest/program-doc-results"), r = W({
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
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "category_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Jt = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Xt, {}) }), Kt = a.object({
  title: a.string({
    required_error: "Введите наименование"
  })
}).required({
  title: !0
}), Qt = () => {
  const n = F("/api/rest/program-doc-objectives"), r = W({
    mutation: n,
    schema: Kt
  });
  return /* @__PURE__ */ T(S, { css: {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderWidth: "1px",
    padding: "0.5rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Наименование", placeholder: "Введите наименование задачи", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, er = Ot({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), tr = a.object({
  mission: a.string({
    required_error: "Заполните цель/миссию"
  }),
  goal: a.string({
    required_error: "Заполните цель"
  }),
  objectives: a.array(a.string())
}).required({
  goal: !0
}), rr = () => {
  const n = ie({
    schema: tr
  });
  return /* @__PURE__ */ T("div", { children: [
    /* @__PURE__ */ T(S, { css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, form: n, children: [
      /* @__PURE__ */ e(c, { name: "mission", control: n.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(O, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...r }) }),
      /* @__PURE__ */ e(c, { name: "goal", control: n.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(O, { label: "Цель программы", placeholder: "Введите цель программы", ...r }) }),
      /* @__PURE__ */ e(c, { name: "objectives", control: n.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(er, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
    ] }),
    /* @__PURE__ */ e(Qt, {})
  ] });
}, nr = a.object({
  theme: a.string({
    required_error: "Заполните тему"
  }),
  theory: a.string().optional(),
  theory_volume: a.number().optional(),
  practice: a.string().optional(),
  practice_volume: a.number().optional(),
  sort_index: a.number(),
  doc_id: a.string()
}), ir = ({
  doc_id: n
}) => {
  const r = F("/api/rest/program-doc-plans"), t = W({
    schema: nr,
    mutation: r,
    defaultValues: {
      doc_id: n,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { name: "theme", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(O, { label: "Тема", placeholder: "Введите тему", ...f }) }),
    /* @__PURE__ */ e(c, { name: "theory", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(O, { label: "Теория", placeholder: "Введите теорию", ...f }) }),
    /* @__PURE__ */ e(c, { name: "theory_volume", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(I, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...f }) }),
    /* @__PURE__ */ e(c, { name: "practice", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(O, { label: "Практика", placeholder: "Введите практику", ...f }) }),
    /* @__PURE__ */ e(c, { name: "practice_volume", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(I, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...f }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, or = () => {
  const {
    params: {
      id: n
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ir, { doc_id: n }) });
}, ar = a.object({
  control_type_id: a.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  control_type_id: !0,
  description: !0
}), sr = () => {
  const n = F("/api/rest/program-doc-forms"), r = W({
    schema: ar,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "control_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, lr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(sr, {}) }), cr = a.object({
  criterion_type_id: a.number({
    required_error: "Заполните тип критерия"
  }),
  description: a.string({
    required_error: "Заполните описание критерия"
  })
}).required({
  criterion_type_id: !0
}), dr = () => {
  const n = F("/api/rest/program-doc-criteria"), r = W({
    schema: cr,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "criterion_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, pr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(dr, {}) }), ur = a.object({
  method_id: a.number({
    required_error: "Заполните метод"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  method_id: !0,
  description: !0
}), mr = () => {
  const n = F("/api/rest/program-doc-fixations"), r = W({
    mutation: n,
    schema: ur
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "method_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, hr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(mr, {}) }), fr = a.object({
  base_knowledge: a.string({
    required_error: "Заполните базовые знания"
  }),
  material: a.string({
    required_error: "Заполните материалы"
  })
}).required({
  base_knowledge: !0,
  material: !0
}), gr = () => {
  const n = F("/api/rest/program-doc-materials"), r = W({
    schema: fr,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "base_knowledge", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Базовые знания", placeholder: "Введите базовые знания", ...t }) }),
    /* @__PURE__ */ e(c, { name: "material", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Материалы", placeholder: "Введите материалы", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, br = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(gr, {}) }), vr = a.object({
  management_type_id: a.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  management_type_id: !0
}), _r = () => {
  const n = F("/api/rest/program-doc-managements"), r = W({
    schema: vr,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "management_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Ar = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(_r, {}) }), yr = a.object({
  indoctrination_type_id: a.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  indoctrination_type_id: !0
}), wr = () => {
  const n = F("/api/rest/program-doc-indoctrinations"), r = W({
    schema: yr,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "indoctrination_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Cr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(wr, {}) }), Er = a.object({
  development_type_id: a.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: a.string({
    required_error: "Введите описание"
  })
}).required({
  development_type_id: !0
}), xr = () => {
  const n = F("/api/rest/program-doc-developments"), r = W({
    schema: Er,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "development_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, zr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(xr, {}) }), Br = () => {
  const n = ie({
    schema: a.object({
      staff_description: a.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ e(S, { tw: "flex flex-col gap-4", form: n, children: /* @__PURE__ */ e(c, { control: n.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ e(N, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, Tr = a.object({
  inventory_type_id: a.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: a.string({
    required_error: "Заполните описание"
  })
}).required({
  inventory_type_id: !0,
  description: !0
}), Dr = () => {
  const n = F("/api/rest/program-doc-inventories"), r = W({
    schema: Tr,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "inventory_type_id", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(U, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...t }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(N, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Or = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Dr, {}) }), kr = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }),
  publisher: a.string().optional(),
  publish_year: a.number().optional(),
  isbn: a.string().optional()
}).required({
  title: !0
}), Sr = () => {
  const n = F("/api/rest/program-doc-information"), r = W({
    schema: kr,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "authors", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Авторы", placeholder: "Введите авторов", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publisher", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Издательство", placeholder: "Введите издательство", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publish_year", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...t }) }),
    /* @__PURE__ */ e(c, { name: "isbn", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, qr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Sr, {}) }), Rr = a.object({
  authors: a.string().optional(),
  title: a.string({
    required_error: "Заполните наименования"
  }),
  publisher: a.string().optional(),
  publish_year: a.number().optional()
}).required({
  title: !0
}), Mr = () => {
  const n = F("/api/rest/program-doc-books"), r = W({
    schema: Rr,
    mutation: n
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "authors", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Авторы", placeholder: "Введите авторов", ...t }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publisher", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Издательство", placeholder: "Введите издательство", ...t }) }),
    /* @__PURE__ */ e(c, { name: "publish_year", control: r.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...t }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, jr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Mr, {}) }), Pr = a.object({
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
}), Ir = ({
  doc_id: n
}) => {
  const r = F("/api/rest/program-doc-schedules"), t = W({
    schema: Pr,
    mutation: r,
    defaultValues: {
      doc_id: n
    }
  });
  return /* @__PURE__ */ T(S, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { name: "number_year", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(I, { label: "Год обучения", helperText: "Год обучения (по счету)", placeholder: "Введите год обучения", ...f }) }),
    /* @__PURE__ */ e(c, { name: "date_start", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(ve, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...f }) }),
    /* @__PURE__ */ e(c, { name: "date_end", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(ve, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...f }) }),
    /* @__PURE__ */ e(c, { name: "edu_week_count", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(I, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...f }) }),
    /* @__PURE__ */ e(c, { name: "is_vacations", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(Fe, { label: "Есть каникулы?", ...f }) }),
    /* @__PURE__ */ e(c, { name: "edu_sessions_per_week", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(I, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...f }) }),
    /* @__PURE__ */ e(c, { name: "edu_sessions_per_day", control: t.control, render: ({
      field: f
    }) => /* @__PURE__ */ e(I, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...f }) }),
    /* @__PURE__ */ e(L, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Wr = () => {
  const {
    params: {
      id: n
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Ir, { doc_id: n }) });
}, Fr = [{
  id: "general",
  title: "Основное",
  Component: Yt
}, {
  id: "params",
  title: "Параметры",
  Component: Vt
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: Ut
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: Jt
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: rr
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: or
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: lr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: pr
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: hr
}, {
  id: "materials",
  title: "Методические материалы",
  Component: br
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: Ar
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: Cr
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: zr
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: Br
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: Or
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: qr
}, {
  title: "Список литературы",
  id: "books",
  Component: jr
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: Wr
}, {
  id: "description",
  title: "Утверждение",
  Component: Zt
}], Xr = () => {
  const {
    params: {
      id: n
    },
    setTitle: r
  } = Be(), t = St(`/api/rest/program-docs/${n}`, {
    select: ({
      data: m
    }) => {
      const _ = m[0];
      return {
        ..._,
        max_age: _.max_age ? Number(_.max_age) : void 0,
        min_age: _.min_age ? Number(_.min_age) : void 0,
        program_volume: _.program_volume ? Number(_.program_volume) : null,
        program_duration: _.program_duration ? Number(_.program_duration) : null,
        edu_sessions_per_week: _.edu_sessions_per_week ? Number(_.edu_sessions_per_week) : null,
        edu_sessions_per_day: _.edu_sessions_per_day ? Number(_.edu_sessions_per_day) : null,
        edu_session_hour_limit: _.edu_session_hour_limit ? Number(_.edu_session_hour_limit) : null,
        break_duration: _.break_duration ? Number(_.break_duration) : null,
        min_group_size: _.min_group_size ? Number(_.min_group_size) : null,
        max_group_size: _.max_group_size ? Number(_.max_group_size) : null
      };
    }
  }), f = Et(), E = F("PUT", `/api/rest/program-docs/${n}`, {
    onSuccess: (m) => {
      f.setQueriesData({
        queryKey: [`/api/rest/program-docs/${n}`]
      }, (_) => ({
        ..._,
        data: [m.data]
      }));
    }
  });
  return Z.useEffect(() => {
    r(`Конструктор программы #${n}`);
  }, [n, r]), t.isLoading ? /* @__PURE__ */ e(xt, { spinning: !0 }) : t.isError ? /* @__PURE__ */ e("div", {}) : /* @__PURE__ */ e(Nt, { steps: Fr, stateKey: "steps_info", mutation: E, values: t.data });
};
export {
  Xr as default
};
