import { j as e, a as T } from "./library-f93f7de3.js";
import { a as Ct, B as Y } from "./mui-3466ac1e.js";
import { f as Et } from "./faPen-6d05924c.js";
import { f as xt } from "./faCheckCircle-ad748d9a.js";
import { F as ge } from "./icons-cd19d6df.js";
import { u as F, a as N, z as i, T as k, F as c, P as zt, D as X, S as Bt, Y as ze, b as q, c as ve, d as L, N as W, L as Tt, B as Ne, e as Dt, C as We } from "./Section-cb6e6f4d.js";
import { r as ne } from "./react-181b9648.js";
import { P as Ot } from "./useDictionary-43b83091.js";
import { u as Be } from "./useWindowController-99debd62.js";
var Le = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", a = "arrow-left", g = 448, C = 512, u = [8592], E = "f060", s = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  t.definition = {
    prefix: r,
    iconName: a,
    icon: [
      g,
      C,
      u,
      E,
      s
    ]
  }, t.faArrowLeft = t.definition, t.prefix = r, t.iconName = a, t.width = g, t.height = C, t.ligatures = u, t.unicode = E, t.svgPathData = s, t.aliases = u;
})(Le);
var D = /* @__PURE__ */ ((t) => (t.DONE = "done", t.ACTIVE = "active", t.WAIT = "wait", t.DISABLED = "disabled", t))(D || {}), Ye = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", a = "lock", g = 448, C = 512, u = [128274], E = "f023", s = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  t.definition = {
    prefix: r,
    iconName: a,
    icon: [
      g,
      C,
      u,
      E,
      s
    ]
  }, t.faLock = t.definition, t.prefix = r, t.iconName = a, t.width = g, t.height = C, t.ligatures = u, t.unicode = E, t.svgPathData = s, t.aliases = u;
})(Ye);
var be = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "fas", a = "circle", g = 512, C = 512, u = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], E = "f111", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  t.definition = {
    prefix: r,
    iconName: a,
    icon: [
      g,
      C,
      u,
      E,
      s
    ]
  }, t.faCircle = t.definition, t.prefix = r, t.iconName = a, t.width = g, t.height = C, t.ligatures = u, t.unicode = E, t.svgPathData = s, t.aliases = u;
})(be);
var $e = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = "far", a = "clock", g = 512, C = 512, u = [128339, "clock-four"], E = "f017", s = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  t.definition = {
    prefix: r,
    iconName: a,
    icon: [
      g,
      C,
      u,
      E,
      s
    ]
  }, t.faClock = t.definition, t.prefix = r, t.iconName = a, t.width = g, t.height = C, t.ligatures = u, t.unicode = E, t.svgPathData = s, t.aliases = u;
})($e);
const kt = ({
  status: t
}) => t === D.DONE ? /* @__PURE__ */ e(ge, { icon: xt.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" }) : t === D.ACTIVE ? /* @__PURE__ */ e(ge, { mask: be.faCircle, icon: Et.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : t === D.WAIT ? /* @__PURE__ */ e(ge, { mask: be.faCircle, icon: $e.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : /* @__PURE__ */ e(ge, { mask: be.faCircle, transform: "shrink-8", icon: Ye.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} }), St = ({
  items: t,
  activeItem: r,
  className: a,
  onChange: g
}) => /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: t.map((C, u) => {
  const E = (r == null ? void 0 : r.id) === C.id;
  return /* @__PURE__ */ e("li", { onClick: () => C.status !== D.DISABLED ? g == null ? void 0 : g(C) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, E ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : C.status === D.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, E && Ct`
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
      u + 1,
      ". ",
      C.title
    ] }) }),
    /* @__PURE__ */ e(kt, { status: C.status })
  ] }) }, C.id);
}) }) });
var Ze = { exports: {} };
(function(t, r) {
  (function(a, g) {
    t.exports = g(ne);
  })(self, (a) => (() => {
    var g = { 58: (s, f, h) => {
      h.d(f, { Z: () => v });
      var A = h(864), _ = h.n(A), y = h(352), p = h.n(y)()(_());
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
      const v = p;
    }, 672: (s, f, h) => {
      h.d(f, { Z: () => v });
      var A = h(864), _ = h.n(A), y = h(352), p = h.n(y)()(_());
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
      const v = p;
    }, 352: (s) => {
      s.exports = function(f) {
        var h = [];
        return h.toString = function() {
          return this.map(function(A) {
            var _ = "", y = A[5] !== void 0;
            return A[4] && (_ += "@supports (".concat(A[4], ") {")), A[2] && (_ += "@media ".concat(A[2], " {")), y && (_ += "@layer".concat(A[5].length > 0 ? " ".concat(A[5]) : "", " {")), _ += f(A), y && (_ += "}"), A[2] && (_ += "}"), A[4] && (_ += "}"), _;
          }).join("");
        }, h.i = function(A, _, y, p, v) {
          typeof A == "string" && (A = [[null, A, void 0]]);
          var x = {};
          if (y)
            for (var I = 0; I < this.length; I++) {
              var P = this[I][0];
              P != null && (x[P] = !0);
            }
          for (var V = 0; V < A.length; V++) {
            var w = [].concat(A[V]);
            y && x[w[0]] || (v !== void 0 && (w[5] === void 0 || (w[1] = "@layer".concat(w[5].length > 0 ? " ".concat(w[5]) : "", " {").concat(w[1], "}")), w[5] = v), _ && (w[2] && (w[1] = "@media ".concat(w[2], " {").concat(w[1], "}")), w[2] = _), p && (w[4] ? (w[1] = "@supports (".concat(w[4], ") {").concat(w[1], "}"), w[4] = p) : w[4] = "".concat(p)), h.push(w));
          }
        }, h;
      };
    }, 864: (s) => {
      s.exports = function(f) {
        var h = f[1], A = f[3];
        if (!A)
          return h;
        if (typeof btoa == "function") {
          var _ = btoa(unescape(encodeURIComponent(JSON.stringify(A)))), y = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(_), p = "/*# ".concat(y, " */");
          return [h].concat([p]).join(`
`);
        }
        return [h].join(`
`);
      };
    }, 372: (s, f, h) => {
      var A = h(567);
      function _() {
      }
      function y() {
      }
      y.resetWarningCache = _, s.exports = function() {
        function p(I, P, V, w, $, H) {
          if (H !== A) {
            var Q = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw Q.name = "Invariant Violation", Q;
          }
        }
        function v() {
          return p;
        }
        p.isRequired = p;
        var x = { array: p, bigint: p, bool: p, func: p, number: p, object: p, string: p, symbol: p, any: p, arrayOf: v, element: p, elementType: p, instanceOf: v, node: p, objectOf: v, oneOf: v, oneOfType: v, shape: v, exact: v, checkPropTypes: y, resetWarningCache: _ };
        return x.PropTypes = x, x;
      };
    }, 652: (s, f, h) => {
      s.exports = h(372)();
    }, 567: (s) => {
      s.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (s) => {
      var f = [];
      function h(y) {
        for (var p = -1, v = 0; v < f.length; v++)
          if (f[v].identifier === y) {
            p = v;
            break;
          }
        return p;
      }
      function A(y, p) {
        for (var v = {}, x = [], I = 0; I < y.length; I++) {
          var P = y[I], V = p.base ? P[0] + p.base : P[0], w = v[V] || 0, $ = "".concat(V, " ").concat(w);
          v[V] = w + 1;
          var H = h($), Q = { css: P[1], media: P[2], sourceMap: P[3], supports: P[4], layer: P[5] };
          if (H !== -1)
            f[H].references++, f[H].updater(Q);
          else {
            var le = _(Q, p);
            p.byIndex = I, f.splice(I, 0, { identifier: $, updater: le, references: 1 });
          }
          x.push($);
        }
        return x;
      }
      function _(y, p) {
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
      s.exports = function(y, p) {
        var v = A(y = y || [], p = p || {});
        return function(x) {
          x = x || [];
          for (var I = 0; I < v.length; I++) {
            var P = h(v[I]);
            f[P].references--;
          }
          for (var V = A(x, p), w = 0; w < v.length; w++) {
            var $ = h(v[w]);
            f[$].references === 0 && (f[$].updater(), f.splice($, 1));
          }
          v = V;
        };
      };
    }, 80: (s) => {
      var f = {};
      s.exports = function(h, A) {
        var _ = function(y) {
          if (f[y] === void 0) {
            var p = document.querySelector(y);
            if (window.HTMLIFrameElement && p instanceof window.HTMLIFrameElement)
              try {
                p = p.contentDocument.head;
              } catch {
                p = null;
              }
            f[y] = p;
          }
          return f[y];
        }(h);
        if (!_)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        _.appendChild(A);
      };
    }, 182: (s) => {
      s.exports = function(f) {
        var h = document.createElement("style");
        return f.setAttributes(h, f.attributes), f.insert(h, f.options), h;
      };
    }, 850: (s, f, h) => {
      s.exports = function(A) {
        var _ = h.nc;
        _ && A.setAttribute("nonce", _);
      };
    }, 236: (s) => {
      s.exports = function(f) {
        var h = f.insertStyleElement(f);
        return { update: function(A) {
          (function(_, y, p) {
            var v = "";
            p.supports && (v += "@supports (".concat(p.supports, ") {")), p.media && (v += "@media ".concat(p.media, " {"));
            var x = p.layer !== void 0;
            x && (v += "@layer".concat(p.layer.length > 0 ? " ".concat(p.layer) : "", " {")), v += p.css, x && (v += "}"), p.media && (v += "}"), p.supports && (v += "}");
            var I = p.sourceMap;
            I && typeof btoa < "u" && (v += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(I)))), " */")), y.styleTagTransform(v, _, y.options);
          })(h, f, A);
        }, remove: function() {
          (function(A) {
            if (A.parentNode === null)
              return !1;
            A.parentNode.removeChild(A);
          })(h);
        } };
      };
    }, 213: (s) => {
      s.exports = function(f, h) {
        if (h.styleSheet)
          h.styleSheet.cssText = f;
        else {
          for (; h.firstChild; )
            h.removeChild(h.firstChild);
          h.appendChild(document.createTextNode(f));
        }
      };
    }, 359: (s) => {
      s.exports = a;
    } }, C = {};
    function u(s) {
      var f = C[s];
      if (f !== void 0)
        return f.exports;
      var h = C[s] = { id: s, exports: {} };
      return g[s](h, h.exports, u), h.exports;
    }
    u.n = (s) => {
      var f = s && s.__esModule ? () => s.default : () => s;
      return u.d(f, { a: f }), f;
    }, u.d = (s, f) => {
      for (var h in f)
        u.o(f, h) && !u.o(s, h) && Object.defineProperty(s, h, { enumerable: !0, get: f[h] });
    }, u.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), u.o = (s, f) => Object.prototype.hasOwnProperty.call(s, f), u.r = (s) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
    }, u.nc = void 0;
    var E = {};
    return (() => {
      u.r(E), u.d(E, { DefaultSplitter: () => le, Split: () => it });
      var s = u(359), f = u(701), h = u.n(f), A = u(236), _ = u.n(A), y = u(80), p = u.n(y), v = u(850), x = u.n(v), I = u(182), P = u.n(I), V = u(213), w = u.n(V), $ = u(58), H = {};
      H.styleTagTransform = w(), H.setAttributes = x(), H.insert = p().bind(null, "head"), H.domAPI = _(), H.insertStyleElement = P(), h()($.Z, H), $.Z && $.Z.locals && $.Z.locals;
      const Q = (o) => (o % 2 == 0 ? 2 : 3) + "px", le = (o) => {
        const { dragging: n, pixelSize: l, color: d = "silver", hoverColor: m = "gray", dragColor: z = "black" } = o, O = { "--default-splitter-line-margin": (j = l, `${Math.max(0, Math.floor(j / 2) - 1)}px`), "--default-splitter-line-size": Q(l), "--default-splitter-line-color": n ? z : d, "--default-splitter-line-hover-color": n ? z : m };
        var j;
        return s.createElement("div", { className: "default-splitter", style: O }, s.createElement("div", { className: "line" }));
      };
      function Ae() {
        return Ae = Object.assign ? Object.assign.bind() : function(o) {
          for (var n = 1; n < arguments.length; n++) {
            var l = arguments[n];
            for (var d in l)
              Object.prototype.hasOwnProperty.call(l, d) && (o[d] = l[d]);
          }
          return o;
        }, Ae.apply(this, arguments);
      }
      function ye(o, n) {
        return ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, d) {
          return l.__proto__ = d, l;
        }, ye(o, n);
      }
      var Ve = u(652), G = u.n(Ve), Te = function() {
        if (typeof Map < "u")
          return Map;
        function o(n, l) {
          var d = -1;
          return n.some(function(m, z) {
            return m[0] === l && (d = z, !0);
          }), d;
        }
        return function() {
          function n() {
            this.__entries__ = [];
          }
          return Object.defineProperty(n.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), n.prototype.get = function(l) {
            var d = o(this.__entries__, l), m = this.__entries__[d];
            return m && m[1];
          }, n.prototype.set = function(l, d) {
            var m = o(this.__entries__, l);
            ~m ? this.__entries__[m][1] = d : this.__entries__.push([l, d]);
          }, n.prototype.delete = function(l) {
            var d = this.__entries__, m = o(d, l);
            ~m && d.splice(m, 1);
          }, n.prototype.has = function(l) {
            return !!~o(this.__entries__, l);
          }, n.prototype.clear = function() {
            this.__entries__.splice(0);
          }, n.prototype.forEach = function(l, d) {
            d === void 0 && (d = null);
            for (var m = 0, z = this.__entries__; m < z.length; m++) {
              var O = z[m];
              l.call(d, O[1], O[0]);
            }
          }, n;
        }();
      }(), _e = typeof window < "u" && typeof document < "u" && window.document === document, se = u.g !== void 0 && u.g.Math === Math ? u.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), He = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(se) : function(o) {
        return setTimeout(function() {
          return o(Date.now());
        }, 1e3 / 60);
      }, Ue = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Xe = typeof MutationObserver < "u", Ge = function() {
        function o() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(n, l) {
            var d = !1, m = !1, z = 0;
            function O() {
              d && (d = !1, n()), m && b();
            }
            function j() {
              He(O);
            }
            function b() {
              var M = Date.now();
              if (d) {
                if (M - z < 2)
                  return;
                m = !0;
              } else
                d = !0, m = !1, setTimeout(j, 20);
              z = M;
            }
            return b;
          }(this.refresh.bind(this));
        }
        return o.prototype.addObserver = function(n) {
          ~this.observers_.indexOf(n) || this.observers_.push(n), this.connected_ || this.connect_();
        }, o.prototype.removeObserver = function(n) {
          var l = this.observers_, d = l.indexOf(n);
          ~d && l.splice(d, 1), !l.length && this.connected_ && this.disconnect_();
        }, o.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, o.prototype.updateObservers_ = function() {
          var n = this.observers_.filter(function(l) {
            return l.gatherActive(), l.hasActive();
          });
          return n.forEach(function(l) {
            return l.broadcastActive();
          }), n.length > 0;
        }, o.prototype.connect_ = function() {
          _e && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Xe ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, o.prototype.disconnect_ = function() {
          _e && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, o.prototype.onTransitionEnd_ = function(n) {
          var l = n.propertyName, d = l === void 0 ? "" : l;
          Ue.some(function(m) {
            return !!~d.indexOf(m);
          }) && this.refresh();
        }, o.getInstance = function() {
          return this.instance_ || (this.instance_ = new o()), this.instance_;
        }, o.instance_ = null, o;
      }(), De = function(o, n) {
        for (var l = 0, d = Object.keys(n); l < d.length; l++) {
          var m = d[l];
          Object.defineProperty(o, m, { value: n[m], enumerable: !1, writable: !1, configurable: !0 });
        }
        return o;
      }, ee = function(o) {
        return o && o.ownerDocument && o.ownerDocument.defaultView || se;
      }, Oe = de(0, 0, 0, 0);
      function ce(o) {
        return parseFloat(o) || 0;
      }
      function ke(o) {
        for (var n = [], l = 1; l < arguments.length; l++)
          n[l - 1] = arguments[l];
        return n.reduce(function(d, m) {
          return d + ce(o["border-" + m + "-width"]);
        }, 0);
      }
      var Je = typeof SVGGraphicsElement < "u" ? function(o) {
        return o instanceof ee(o).SVGGraphicsElement;
      } : function(o) {
        return o instanceof ee(o).SVGElement && typeof o.getBBox == "function";
      };
      function Ke(o) {
        return _e ? Je(o) ? function(n) {
          var l = n.getBBox();
          return de(0, 0, l.width, l.height);
        }(o) : function(n) {
          var l = n.clientWidth, d = n.clientHeight;
          if (!l && !d)
            return Oe;
          var m = ee(n).getComputedStyle(n), z = function(R) {
            for (var S = {}, K = 0, J = ["top", "right", "bottom", "left"]; K < J.length; K++) {
              var ue = J[K], re = R["padding-" + ue];
              S[ue] = ce(re);
            }
            return S;
          }(m), O = z.left + z.right, j = z.top + z.bottom, b = ce(m.width), M = ce(m.height);
          if (m.boxSizing === "border-box" && (Math.round(b + O) !== l && (b -= ke(m, "left", "right") + O), Math.round(M + j) !== d && (M -= ke(m, "top", "bottom") + j)), !function(R) {
            return R === ee(R).document.documentElement;
          }(n)) {
            var U = Math.round(b + O) - l, Z = Math.round(M + j) - d;
            Math.abs(U) !== 1 && (b -= U), Math.abs(Z) !== 1 && (M -= Z);
          }
          return de(z.left, z.top, b, M);
        }(o) : Oe;
      }
      function de(o, n, l, d) {
        return { x: o, y: n, width: l, height: d };
      }
      var Qe = function() {
        function o(n) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = de(0, 0, 0, 0), this.target = n;
        }
        return o.prototype.isActive = function() {
          var n = Ke(this.target);
          return this.contentRect_ = n, n.width !== this.broadcastWidth || n.height !== this.broadcastHeight;
        }, o.prototype.broadcastRect = function() {
          var n = this.contentRect_;
          return this.broadcastWidth = n.width, this.broadcastHeight = n.height, n;
        }, o;
      }(), et = function(o, n) {
        var l, d, m, z, O, j, b, M = (d = (l = n).x, m = l.y, z = l.width, O = l.height, j = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, b = Object.create(j.prototype), De(b, { x: d, y: m, width: z, height: O, top: m, right: d + z, bottom: O + m, left: d }), b);
        De(this, { target: o, contentRect: M });
      }, tt = function() {
        function o(n, l, d) {
          if (this.activeObservations_ = [], this.observations_ = new Te(), typeof n != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = n, this.controller_ = l, this.callbackCtx_ = d;
        }
        return o.prototype.observe = function(n) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(n instanceof ee(n).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var l = this.observations_;
            l.has(n) || (l.set(n, new Qe(n)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, o.prototype.unobserve = function(n) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(n instanceof ee(n).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var l = this.observations_;
            l.has(n) && (l.delete(n), l.size || this.controller_.removeObserver(this));
          }
        }, o.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, o.prototype.gatherActive = function() {
          var n = this;
          this.clearActive(), this.observations_.forEach(function(l) {
            l.isActive() && n.activeObservations_.push(l);
          });
        }, o.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var n = this.callbackCtx_, l = this.activeObservations_.map(function(d) {
              return new et(d.target, d.broadcastRect());
            });
            this.callback_.call(n, l, n), this.clearActive();
          }
        }, o.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, o.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, o;
      }(), Se = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Te(), qe = function o(n) {
        if (!(this instanceof o))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var l = Ge.getInstance(), d = new tt(n, l, this);
        Se.set(this, d);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(o) {
        qe.prototype[o] = function() {
          var n;
          return (n = Se.get(this))[o].apply(n, arguments);
        };
      });
      const rt = se.ResizeObserver !== void 0 ? se.ResizeObserver : qe;
      var nt = ["client", "offset", "scroll", "bounds", "margin"];
      function Ie(o) {
        var n = [];
        return nt.forEach(function(l) {
          o[l] && n.push(l);
        }), n;
      }
      function Me(o, n) {
        var l = {};
        if (n.indexOf("client") > -1 && (l.client = { top: o.clientTop, left: o.clientLeft, width: o.clientWidth, height: o.clientHeight }), n.indexOf("offset") > -1 && (l.offset = { top: o.offsetTop, left: o.offsetLeft, width: o.offsetWidth, height: o.offsetHeight }), n.indexOf("scroll") > -1 && (l.scroll = { top: o.scrollTop, left: o.scrollLeft, width: o.scrollWidth, height: o.scrollHeight }), n.indexOf("bounds") > -1) {
          var d = o.getBoundingClientRect();
          l.bounds = { top: d.top, right: d.right, bottom: d.bottom, left: d.left, width: d.width, height: d.height };
        }
        if (n.indexOf("margin") > -1) {
          var m = getComputedStyle(o);
          l.margin = { top: m ? parseInt(m.marginTop) : 0, right: m ? parseInt(m.marginRight) : 0, bottom: m ? parseInt(m.marginBottom) : 0, left: m ? parseInt(m.marginLeft) : 0 };
        }
        return l;
      }
      function ot(o) {
        return o && o.ownerDocument && o.ownerDocument.defaultView || window;
      }
      var we = function(o) {
        var n, l;
        return l = n = function(d) {
          var m, z;
          function O() {
            for (var b, M = arguments.length, U = new Array(M), Z = 0; Z < M; Z++)
              U[Z] = arguments[Z];
            return (b = d.call.apply(d, [this].concat(U)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, b._animationFrameID = null, b._resizeObserver = null, b._node = null, b._window = null, b.measure = function(R) {
              var S = Me(b._node, Ie(b.props));
              R && (S.entry = R[0].contentRect), b._animationFrameID = b._window.requestAnimationFrame(function() {
                b._resizeObserver !== null && (b.setState({ contentRect: S }), typeof b.props.onResize == "function" && b.props.onResize(S));
              });
            }, b._handleRef = function(R) {
              b._resizeObserver !== null && b._node !== null && b._resizeObserver.unobserve(b._node), b._node = R, b._window = ot(b._node);
              var S = b.props.innerRef;
              S && (typeof S == "function" ? S(b._node) : S.current = b._node), b._resizeObserver !== null && b._node !== null && b._resizeObserver.observe(b._node);
            }, b;
          }
          z = d, (m = O).prototype = Object.create(z.prototype), m.prototype.constructor = m, ye(m, z);
          var j = O.prototype;
          return j.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new rt(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Me(this._node, Ie(this.props))));
          }, j.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, j.render = function() {
            var b = this.props, M = (b.innerRef, b.onResize, function(U, Z) {
              if (U == null)
                return {};
              var R, S, K = {}, J = Object.keys(U);
              for (S = 0; S < J.length; S++)
                R = J[S], Z.indexOf(R) >= 0 || (K[R] = U[R]);
              return K;
            }(b, ["innerRef", "onResize"]));
            return (0, s.createElement)(o, Ae({}, M, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, O;
        }(s.Component), n.propTypes = { client: G().bool, offset: G().bool, scroll: G().bool, bounds: G().bool, margin: G().bool, innerRef: G().oneOfType([G().object, G().func]), onResize: G().func }, l;
      }(function(o) {
        var n = o.measure, l = o.measureRef, d = o.contentRect;
        return (0, o.children)({ measure: n, measureRef: l, contentRect: d });
      });
      we.displayName = "Measure", we.propTypes.children = G().func;
      const Ce = we;
      var pe = u(672), te = {};
      te.styleTagTransform = w(), te.setAttributes = x(), te.insert = p().bind(null, "head"), te.domAPI = _(), te.insertStyleElement = P(), h()(pe.Z, te), pe.Z && pe.Z.locals && pe.Z.locals;
      const it = (o) => {
        const { horizontal: n = !1, initialPrimarySize: l = "50%", minPrimarySize: d = "0px", minSecondarySize: m = "0px", splitterSize: z = "7px", renderSplitter: O, resetOnDoubleClick: j = !1, defaultSplitterColors: b = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: M, onMeasuredSizesChanged: U } = o, [Z, R] = s.useState({ height: 0, width: 0 }), [S, K] = s.useState({ height: 0, width: 0 }), [J, ue] = s.useState({ height: 0, width: 0 }), re = s.useMemo(() => n ? Z.height : Z.width, [n, Z]), he = s.useMemo(() => n ? S.height : S.width, [n, S]), me = s.useMemo(() => n ? J.height : J.width, [n, J]), [ie, je] = s.useState(void 0), [at, lt] = s.useState(0), [st, ct] = s.useState(0), [Ee, Pe] = s.useState(!1);
        s.useEffect(() => {
          M && M(ie !== void 0 ? `${ie}%` : l);
        }, [ie, l]), s.useEffect(() => {
          U && U({ primary: he, splitter: me, secondary: re - (he + me) });
        }, [n, re, he, me]);
        const dt = (B) => {
          B.bounds && K({ height: B.bounds.height, width: B.bounds.width });
        }, pt = (B) => {
          B.bounds && ue({ height: B.bounds.height, width: B.bounds.width });
        }, ut = (B) => {
          B.currentTarget.setPointerCapture(B.pointerId), lt(n ? B.clientY : B.clientX), ct(he), Pe(!0);
        }, ht = (B) => {
          if (B.currentTarget.hasPointerCapture(B.pointerId)) {
            const ae = n ? B.clientY : B.clientX, _t = st + (ae - at), wt = Math.max(0, Math.min(_t, re));
            je(wt / re * 100);
          }
        }, mt = (B) => {
          B.currentTarget.releasePointerCapture(B.pointerId), Pe(!1);
        }, ft = () => {
          j && je(void 0);
        }, fe = s.Children.toArray(o.children), gt = fe.length > 0 ? fe[0] : s.createElement("div", null), bt = fe.length > 1 ? fe[1] : s.createElement("div", null), xe = { primary: ie !== void 0 ? `${ie}%` : l, minPrimary: d ?? "0px", minSecondary: m ?? "0px" }, Re = { pixelSize: me, horizontal: n, dragging: Ee }, vt = O ?? (() => s.createElement(le, Object.assign({}, Re, { color: Ee ? b.drag : b.color, hoverColor: Ee ? b.drag : b.hover }))), At = n ? "split-container horizontal" : "split-container vertical", yt = { "--react-split-min-primary": xe.minPrimary, "--react-split-min-secondary": xe.minSecondary, "--react-split-primary": xe.primary, "--react-split-splitter": z };
        return s.createElement(Ce, { bounds: !0, onResize: (B) => {
          B.bounds && R({ height: B.bounds.height, width: B.bounds.width });
        } }, ({ measureRef: B }) => s.createElement("div", { className: "react-split", ref: B }, s.createElement("div", { className: At, style: yt }, s.createElement("div", { className: "primary" }, s.createElement(Ce, { bounds: !0, onResize: dt }, ({ measureRef: ae }) => s.createElement("div", { className: "full-content", ref: ae }, gt))), s.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: ut, onPointerUp: mt, onPointerMove: ht, onDoubleClick: ft }, s.createElement(Ce, { bounds: !0, onResize: pt }, ({ measureRef: ae }) => s.createElement("div", { className: "full-content", ref: ae }, vt(Re)))), s.createElement("div", { className: "secondary" }, s.createElement("div", { className: "full-content" }, bt)))));
      };
    })(), E;
  })());
})(Ze);
var qt = Ze.exports;
const It = ({
  children: t,
  ...r
}) => /* @__PURE__ */ e(qt.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: a,
  dragging: g
}) => /* @__PURE__ */ e("div", { css: [{
  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
  }
}, a ? {
  height: "4px",
  width: "100%"
} : {
  height: "100%",
  width: "4px"
}, g && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...r, children: t }), Mt = ({
  steps: t,
  url: r,
  method: a = "POST"
}) => {
  const [g, C] = ne.useState(t[0]), u = ne.useMemo(() => t.findIndex((A) => A.id === (g == null ? void 0 : g.id)) || 0, [g]), E = u === t.length - 1, s = ne.useCallback(async () => {
    if (!E)
      try {
        C(t[u + 1]);
      } catch {
      }
  }, [u, E]), f = F({
    url: r,
    method: a
  }), h = ne.useCallback(() => {
    u !== 0 && C(t[u - 1]);
  }, [u]);
  return {
    getNextButtonProps: () => ({
      onClick: s,
      disabled: E
    }),
    activeStep: t[u],
    activeStepIndex: u,
    setActiveStep: C,
    getPrevButtonProps: () => ({
      onClick: h,
      disabled: u === 0
    }),
    stepProps: {
      mutation: f
    }
  };
}, oe = (t) => N(t), jt = i.object({
  partner_id: i.string({
    required_error: "Выберите организацию"
  }),
  name: i.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование"),
  program_type_id: i.number({
    required_error: "Выберите тип программы"
  }),
  program_level_id: i.string({
    required_error: "Выберите уровень программы"
  }),
  section_id: i.string({
    required_error: "Выберите направленность"
  }),
  year_created: i.string({
    required_error: "Выберите год создания"
  }),
  city_created: i.string({
    required_error: "Выберите город создания"
  })
}), Pt = () => {
  const t = oe({
    schema: jt
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { control: t.control, name: "name", render: ({
      field: r
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "partner_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(zt, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "program_type_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(X, { label: "Тип программы", ...r, dictionary: "navProgramType", placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "section_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(Bt, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "program_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(X, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "year_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(k, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "city_created", render: ({
      field: r
    }) => /* @__PURE__ */ e(ze, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] });
}, Rt = i.object({
  protocol_number: i.string().optional(),
  protocol_date: i.string().optional(),
  decree_number: i.string().optional(),
  decree_date: i.string().optional(),
  authors: i.string().optional(),
  comment: i.string().optional()
}), Wt = () => {
  const t = oe({
    schema: Rt
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { control: t.control, name: "protocol_number", render: ({
      field: r
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "protocol_date", render: ({
      field: r
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "decree_number", render: ({
      field: r
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "decree_date", render: ({
      field: r
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...r, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "authors", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { css: {
      width: "100%"
    }, ...r, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "comment", render: ({
      field: r
    }) => /* @__PURE__ */ e(k, { css: {
      width: "100%"
    }, ...r, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Ft = i.object({
  min_age: i.number().optional(),
  max_age: i.number().optional(),
  competence_level_id: i.string().optional(),
  program_volume: i.number().optional(),
  program_duration: i.number().optional(),
  edu_sessions_per_week: i.number().optional(),
  edu_sessions_per_day: i.number().optional(),
  edu_session_hour_limit: i.number().optional(),
  break_duration: i.number().optional(),
  education_form_id: i.string().optional(),
  min_group_size: i.number().optional(),
  max_group_size: i.number().optional(),
  is_one_age_group: i.boolean().optional()
}), Nt = () => {
  const t = oe({
    schema: Ft
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(Tt, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ T("div", { css: {
      display: "flex",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ e(c, { control: t.control, name: "min_age", render: ({
        field: r
      }) => /* @__PURE__ */ e(W, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ e(c, { control: t.control, name: "max_age", render: ({
        field: r
      }) => /* @__PURE__ */ e(W, { ...r, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "competence_level_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(X, { dictionary: "programDocCompetences", ...r, label: "Требования к уровню подготовки", placeholder: "Выберите требования к уровню подготовки" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "program_volume", render: ({
      field: r
    }) => /* @__PURE__ */ e(W, { ...r, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "program_duration", render: ({
      field: r
    }) => /* @__PURE__ */ e(W, { ...r, label: "Общая продолжительность", placeholder: "Введите общую продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "edu_sessions_per_week", render: ({
      field: r
    }) => /* @__PURE__ */ e(W, { ...r, label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "edu_sessions_per_day", render: ({
      field: r
    }) => /* @__PURE__ */ e(W, { ...r, label: "Продолжительность занятия", placeholder: "Введите продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "edu_session_hour_limit", render: ({
      field: r
    }) => /* @__PURE__ */ e(W, { ...r, label: "Продолжительность ак. часа", placeholder: "Введите продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "break_duration", render: ({
      field: r
    }) => /* @__PURE__ */ e(W, { ...r, label: "Продолжительность перерыва", placeholder: "Введите продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "education_form_id", render: ({
      field: r
    }) => /* @__PURE__ */ e(X, { dictionary: "educationForm", ...r, label: "Форма обучения", placeholder: "Выберите форму обучения" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "min_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ e(W, { ...r, label: "Минимальное кол-во обучающихся в группе", placeholder: "Введите минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "max_group_size", render: ({
      field: r
    }) => /* @__PURE__ */ e(W, { ...r, label: "Максимальное кол-во обучающихся в группе", placeholder: "Введите максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "is_one_age_group", render: ({
      field: r
    }) => /* @__PURE__ */ e(Ne, { ...r, label: "Группа одного возраста?" }) })
  ] });
}, Lt = i.object({
  explanatory_note: i.string().optional(),
  program_relevance: i.string().optional(),
  pedagogical_expediency: i.string().optional(),
  distinctive_features: i.string().optional(),
  actual: i.string().optional()
}), Yt = () => {
  const t = oe({
    schema: Lt
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(c, { control: t.control, name: "explanatory_note", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "program_relevance", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "pedagogical_expediency", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "distinctive_features", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...r }) }),
    /* @__PURE__ */ e(c, { control: t.control, name: "actual", render: ({
      field: r
    }) => /* @__PURE__ */ e(L, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...r }) })
  ] });
};
i.object({
  category_id: i.number({
    required_error: "Выберите категорию"
  }),
  title: i.string({
    required_error: "Заполните наименование"
  })
}).required({
  category_id: !0,
  title: !0
});
const $t = () => {
  const t = F("/api/rest/program-doc-results"), r = N({
    schema: i.object({
      category_id: i.number({
        required_error: "Выберите категорию"
      }),
      title: i.string({
        required_error: "Заполните наименование"
      })
    }).required({
      category_id: !0,
      title: !0
    }),
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "category_id", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(X, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...a }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Zt = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e($t, {}) }), Vt = i.object({
  title: i.string({
    required_error: "Введите наименование"
  })
}).required({
  title: !0
}), Ht = () => {
  const t = F("/api/rest/program-doc-objectives"), r = N({
    mutation: t,
    schema: Vt
  });
  return /* @__PURE__ */ T(q, { css: {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderWidth: "1px",
    padding: "0.5rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование задачи", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Ut = Dt({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), Xt = i.object({
  mission: i.string({
    required_error: "Заполните цель/миссию"
  }),
  goal: i.string({
    required_error: "Заполните цель"
  }),
  objectives: i.array(i.string())
}).required({
  goal: !0
}), Gt = () => {
  const t = oe({
    schema: Xt
  });
  return /* @__PURE__ */ T("div", { children: [
    /* @__PURE__ */ T(q, { css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, form: t, children: [
      /* @__PURE__ */ e(c, { name: "mission", control: t.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(k, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...r }) }),
      /* @__PURE__ */ e(c, { name: "goal", control: t.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(k, { label: "Цель программы", placeholder: "Введите цель программы", ...r }) }),
      /* @__PURE__ */ e(c, { name: "objectives", control: t.control, render: ({
        field: r
      }) => /* @__PURE__ */ e(Ut, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...r }) })
    ] }),
    /* @__PURE__ */ e(Ht, {})
  ] });
}, Jt = i.object({
  theme: i.string({
    required_error: "Заполните тему"
  }),
  theory: i.string().optional(),
  theory_volume: i.number().optional(),
  practice: i.string().optional(),
  practice_volume: i.number().optional(),
  sort_index: i.number(),
  doc_id: i.string()
}), Kt = ({
  doc_id: t
}) => {
  const r = F("/api/rest/program-doc-plans"), a = N({
    schema: Jt,
    mutation: r,
    defaultValues: {
      doc_id: t,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: a, children: [
    /* @__PURE__ */ e(c, { name: "theme", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(k, { label: "Тема", placeholder: "Введите тему", ...g }) }),
    /* @__PURE__ */ e(c, { name: "theory", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(k, { label: "Теория", placeholder: "Введите теорию", ...g }) }),
    /* @__PURE__ */ e(c, { name: "theory_volume", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(W, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...g }) }),
    /* @__PURE__ */ e(c, { name: "practice", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(k, { label: "Практика", placeholder: "Введите практику", ...g }) }),
    /* @__PURE__ */ e(c, { name: "practice_volume", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(W, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...g }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Qt = () => {
  const {
    params: {
      id: t
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Kt, { doc_id: t }) });
}, er = i.object({
  control_type_id: i.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  control_type_id: !0,
  description: !0
}), tr = () => {
  const t = F("/api/rest/program-doc-forms"), r = N({
    schema: er,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "control_type_id", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(X, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...a }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, rr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(tr, {}) }), nr = i.object({
  criterion_type_id: i.number({
    required_error: "Заполните тип критерия"
  }),
  description: i.string({
    required_error: "Заполните описание критерия"
  })
}).required({
  criterion_type_id: !0
}), or = () => {
  const t = F("/api/rest/program-doc-criteria"), r = N({
    schema: nr,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "criterion_type_id", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(X, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...a }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, ir = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(or, {}) }), ar = i.object({
  method_id: i.number({
    required_error: "Заполните метод"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  method_id: !0,
  description: !0
}), lr = () => {
  const t = F("/api/rest/program-doc-fixations"), r = N({
    mutation: t,
    schema: ar
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "method_id", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(X, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...a }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, sr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(lr, {}) }), cr = i.object({
  base_knowledge: i.string({
    required_error: "Заполните базовые знания"
  }),
  material: i.string({
    required_error: "Заполните материалы"
  })
}).required({
  base_knowledge: !0,
  material: !0
}), dr = () => {
  const t = F("/api/rest/program-doc-materials"), r = N({
    schema: cr,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "base_knowledge", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Базовые знания", placeholder: "Введите базовые знания", ...a }) }),
    /* @__PURE__ */ e(c, { name: "material", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Материалы", placeholder: "Введите материалы", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, pr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(dr, {}) }), ur = i.object({
  management_type_id: i.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  management_type_id: !0
}), hr = () => {
  const t = F("/api/rest/program-doc-managements"), r = N({
    schema: ur,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "management_type_id", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(X, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...a }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, mr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(hr, {}) }), fr = i.object({
  indoctrination_type_id: i.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  indoctrination_type_id: !0
}), gr = () => {
  const t = F("/api/rest/program-doc-indoctrinations"), r = N({
    schema: fr,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "indoctrination_type_id", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(X, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocCriteriaTypes", ...a }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(L, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, br = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(gr, {}) }), vr = i.object({
  development_type_id: i.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  development_type_id: !0
}), Ar = () => {
  const t = F("/api/rest/program-doc-developments"), r = N({
    schema: vr,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "development_type_id", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(X, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocCriteriaTypes", ...a }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(L, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, yr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Ar, {}) }), _r = () => {
  const t = oe({
    schema: i.object({
      staff_description: i.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ e(q, { tw: "flex flex-col gap-4", form: t, children: /* @__PURE__ */ e(c, { control: t.control, name: "staff_description", render: ({
    field: r
  }) => /* @__PURE__ */ e(L, { tw: "w-full", ...r, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, wr = i.object({
  inventory_type_id: i.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  inventory_type_id: !0,
  description: !0
}), Cr = () => {
  const t = F("/api/rest/program-doc-inventories"), r = N({
    schema: wr,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "inventory_type_id", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(X, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...a }) }),
    /* @__PURE__ */ e(c, { name: "description", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(L, { label: "Описание", placeholder: "Введите описание", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Er = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Cr, {}) }), xr = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }),
  publisher: i.string().optional(),
  publish_year: i.number().optional(),
  isbn: i.string().optional()
}).required({
  title: !0
}), zr = () => {
  const t = F("/api/rest/program-doc-information"), r = N({
    schema: xr,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "authors", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Авторы", placeholder: "Введите авторов", ...a }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...a }) }),
    /* @__PURE__ */ e(c, { name: "publisher", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Издательство", placeholder: "Введите издательство", ...a }) }),
    /* @__PURE__ */ e(c, { name: "publish_year", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...a }) }),
    /* @__PURE__ */ e(c, { name: "isbn", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Br = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(zr, {}) }), Tr = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }),
  publisher: i.string().optional(),
  publish_year: i.number().optional()
}).required({
  title: !0
}), Dr = () => {
  const t = F("/api/rest/program-doc-books"), r = N({
    schema: Tr,
    mutation: t
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: r, children: [
    /* @__PURE__ */ e(c, { name: "authors", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Авторы", placeholder: "Введите авторов", ...a }) }),
    /* @__PURE__ */ e(c, { name: "title", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Наименование", placeholder: "Введите наименование", ...a }) }),
    /* @__PURE__ */ e(c, { name: "publisher", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(k, { label: "Издательство", placeholder: "Введите издательство", ...a }) }),
    /* @__PURE__ */ e(c, { name: "publish_year", control: r.control, render: ({
      field: a
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...a }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Or = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Dr, {}) }), kr = i.object({
  number_year: i.number({
    required_error: "Заполните год"
  }),
  date_start: i.string({
    required_error: "Заполните дата начала обучения"
  }),
  date_end: i.string({
    required_error: "Заполните дата окончания обучения"
  }),
  edu_week_count: i.number({
    required_error: "Заполните количество учебных недель"
  }),
  is_vacations: i.boolean({
    required_error: "Заполните поле"
  }),
  // vacation: z.array(z.string()),
  edu_sessions_per_week: i.number().optional(),
  edu_sessions_per_day: i.number().optional(),
  doc_id: i.string()
}).required({
  number_year: !0,
  date_start: !0,
  date_end: !0,
  edu_week_count: !0,
  is_vacations: !0
}), Sr = ({
  doc_id: t
}) => {
  const r = F("/api/rest/program-doc-schedules"), a = N({
    schema: kr,
    mutation: r,
    defaultValues: {
      doc_id: t
    }
  });
  return /* @__PURE__ */ T(q, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: a, children: [
    /* @__PURE__ */ e(c, { name: "number_year", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(W, { label: "Год обучения", helperText: "Год обучения (по счету)", placeholder: "Введите год обучения", ...g }) }),
    /* @__PURE__ */ e(c, { name: "date_start", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(ve, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...g }) }),
    /* @__PURE__ */ e(c, { name: "date_end", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(ve, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...g }) }),
    /* @__PURE__ */ e(c, { name: "edu_week_count", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(W, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...g }) }),
    /* @__PURE__ */ e(c, { name: "is_vacations", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(Ne, { label: "Есть каникулы?", ...g }) }),
    /* @__PURE__ */ e(c, { name: "edu_sessions_per_week", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(W, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...g }) }),
    /* @__PURE__ */ e(c, { name: "edu_sessions_per_day", control: a.control, render: ({
      field: g
    }) => /* @__PURE__ */ e(W, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...g }) }),
    /* @__PURE__ */ e(Y, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, qr = () => {
  const {
    params: {
      id: t
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Sr, { doc_id: t }) });
}, Fe = [{
  id: "general",
  title: "Основное",
  status: D.DONE,
  Component: Pt
}, {
  id: "description",
  title: "Описание",
  status: D.DONE,
  Component: Wt
}, {
  id: "params",
  title: "Параметры",
  status: D.DONE,
  Component: Nt
}, {
  id: "explanation",
  title: "Пояснительная записка",
  status: D.DONE,
  Component: Yt
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  status: D.DONE,
  Component: Zt
}, {
  id: "goals",
  title: "Цели и задачи",
  status: D.ACTIVE,
  Component: Gt
}, {
  id: "edu-plan",
  title: "Учебный план",
  status: D.WAIT,
  Component: Qt
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  status: D.WAIT,
  Component: rr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  status: D.WAIT,
  Component: ir
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  status: D.WAIT,
  Component: sr
}, {
  id: "materials",
  title: "Методические материалы",
  status: D.WAIT,
  Component: pr
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  status: D.WAIT,
  Component: mr
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  status: D.WAIT,
  Component: br
}, {
  title: "Развивающая деятельность",
  id: "developments",
  status: D.WAIT,
  Component: yr
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  status: D.WAIT,
  Component: _r
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  status: D.WAIT,
  Component: Er
}, {
  title: "Информационное обеспечение",
  id: "information",
  status: D.WAIT,
  Component: Br
}, {
  title: "Список литературы",
  id: "books",
  status: D.WAIT,
  Component: Or
}, {
  title: "Календарный учебный график",
  id: "schedules",
  status: D.WAIT,
  Component: qr
}], Yr = () => {
  const {
    params: {
      id: t
    },
    setTitle: r
  } = Be(), {
    getNextButtonProps: a,
    getPrevButtonProps: g,
    setActiveStep: C,
    activeStepIndex: u,
    activeStep: E
  } = Mt({
    steps: Fe,
    url: `/api/rest/program-docs/${t}`,
    method: "PUT"
  });
  return ne.useEffect(() => {
    r(`Конструктор программы #${t}`);
  }, [t, r]), /* @__PURE__ */ e(Ot, { bbar: [/* @__PURE__ */ e(We, { icon: Le.faArrowLeft, ...g(), children: "Назад" }, "previous"), /* @__PURE__ */ e(We, { ...a(), variant: "contained", color: "success", children: "Сохранить" }, "next")], children: /* @__PURE__ */ T(It, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ e(St, { activeItem: E, onChange: C, items: Fe }) }),
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
        E == null ? void 0 : E.title
      ] }),
      /* @__PURE__ */ e("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ e(E.Component, {}) })
    ] })
  ] }) });
};
export {
  Yr as default
};
