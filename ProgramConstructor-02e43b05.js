import { j as x, e as G, Q as pe } from "./library-22552ae6.js";
import { a as de, n as ue, M as he, t as zt, B as fe } from "./mui-e0e0d1d4.js";
import { S as J, f as Ae, s as H } from "./constants-f6a5084f.js";
import { f as me, P as ve } from "./faCheckCircle-2f98e90d.js";
import { F as $ } from "./icons-cd19d6df.js";
import { r as U, R as xt } from "./react-181b9648.js";
var Tt = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var w = "fas", E = "arrow-right", g = 448, A = 512, s = [8594], _ = "f061", r = "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";
  i.definition = {
    prefix: w,
    iconName: E,
    icon: [
      g,
      A,
      s,
      _,
      r
    ]
  }, i.faArrowRight = i.definition, i.prefix = w, i.iconName = E, i.width = g, i.height = A, i.ligatures = s, i.unicode = _, i.svgPathData = r, i.aliases = s;
})(Tt);
var St = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var w = "fas", E = "arrow-left", g = 448, A = 512, s = [8592], _ = "f060", r = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  i.definition = {
    prefix: w,
    iconName: E,
    icon: [
      g,
      A,
      s,
      _,
      r
    ]
  }, i.faArrowLeft = i.definition, i.prefix = w, i.iconName = E, i.width = g, i.height = A, i.ligatures = s, i.unicode = _, i.svgPathData = r, i.aliases = s;
})(St);
var kt = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var w = "fas", E = "lock", g = 448, A = 512, s = [128274], _ = "f023", r = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  i.definition = {
    prefix: w,
    iconName: E,
    icon: [
      g,
      A,
      s,
      _,
      r
    ]
  }, i.faLock = i.definition, i.prefix = w, i.iconName = E, i.width = g, i.height = A, i.ligatures = s, i.unicode = _, i.svgPathData = r, i.aliases = s;
})(kt);
var ft = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var w = "fas", E = "circle", g = 512, A = 512, s = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], _ = "f111", r = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  i.definition = {
    prefix: w,
    iconName: E,
    icon: [
      g,
      A,
      s,
      _,
      r
    ]
  }, i.faCircle = i.definition, i.prefix = w, i.iconName = E, i.width = g, i.height = A, i.ligatures = s, i.unicode = _, i.svgPathData = r, i.aliases = s;
})(ft);
const ge = ({
  status: i
}) => i === J.DONE ? /* @__PURE__ */ x($, { icon: me.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" }) : i === J.ACTIVE ? /* @__PURE__ */ x($, { mask: ft.faCircle, icon: Ae.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : /* @__PURE__ */ x($, { mask: ft.faCircle, transform: "shrink-8", icon: kt.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} }), be = ({
  items: i,
  activeItem: w,
  className: E,
  onChange: g
}) => /* @__PURE__ */ x("div", { className: E, children: /* @__PURE__ */ x("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: i.map((A, s) => {
  const _ = (w == null ? void 0 : w.id) === A.id;
  return /* @__PURE__ */ x("li", { onClick: () => A.status !== J.DISABLED ? g == null ? void 0 : g(A) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, _ ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : A.status === J.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, _ && de`
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
                  `], children: /* @__PURE__ */ G("div", { css: {
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
    /* @__PURE__ */ x("div", { children: /* @__PURE__ */ G("div", { children: [
      s + 1,
      ". ",
      A.title
    ] }) }),
    /* @__PURE__ */ x(ge, { status: A.status })
  ] }) }, A.id);
}) }) }), ye = ue(({
  className: i,
  ...w
}) => /* @__PURE__ */ x(he, { ...w, classes: {
  popper: i
} }))`
  .${zt.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${zt.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`, Ot = ({
  children: i,
  className: w,
  tooltip: E,
  icon: g,
  iconAfter: A,
  ...s
}) => {
  let _ = /* @__PURE__ */ G(fe, { className: w, css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...s, children: [
    g && /* @__PURE__ */ x($, { icon: g }),
    i,
    A && /* @__PURE__ */ x($, { icon: A })
  ] });
  return E && (_ = /* @__PURE__ */ x(ye, { title: E, arrow: !0, children: _ })), _;
};
var Rt = { exports: {} };
(function(i, w) {
  (function(E, g) {
    i.exports = g(U);
  })(self, (E) => (() => {
    var g = { 58: (r, p, l) => {
      l.d(p, { Z: () => u });
      var h = l(864), m = l.n(h), f = l(352), a = l.n(f)()(m());
      a.push([r.id, `
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
      const u = a;
    }, 672: (r, p, l) => {
      l.d(p, { Z: () => u });
      var h = l(864), m = l.n(h), f = l(352), a = l.n(f)()(m());
      a.push([r.id, `/* The top-level element of the splitter*/
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
      const u = a;
    }, 352: (r) => {
      r.exports = function(p) {
        var l = [];
        return l.toString = function() {
          return this.map(function(h) {
            var m = "", f = h[5] !== void 0;
            return h[4] && (m += "@supports (".concat(h[4], ") {")), h[2] && (m += "@media ".concat(h[2], " {")), f && (m += "@layer".concat(h[5].length > 0 ? " ".concat(h[5]) : "", " {")), m += p(h), f && (m += "}"), h[2] && (m += "}"), h[4] && (m += "}"), m;
          }).join("");
        }, l.i = function(h, m, f, a, u) {
          typeof h == "string" && (h = [[null, h, void 0]]);
          var b = {};
          if (f)
            for (var O = 0; O < this.length; O++) {
              var k = this[O][0];
              k != null && (b[k] = !0);
            }
          for (var P = 0; P < h.length; P++) {
            var v = [].concat(h[P]);
            f && b[v[0]] || (u !== void 0 && (v[5] === void 0 || (v[1] = "@layer".concat(v[5].length > 0 ? " ".concat(v[5]) : "", " {").concat(v[1], "}")), v[5] = u), m && (v[2] && (v[1] = "@media ".concat(v[2], " {").concat(v[1], "}")), v[2] = m), a && (v[4] ? (v[1] = "@supports (".concat(v[4], ") {").concat(v[1], "}"), v[4] = a) : v[4] = "".concat(a)), l.push(v));
          }
        }, l;
      };
    }, 864: (r) => {
      r.exports = function(p) {
        var l = p[1], h = p[3];
        if (!h)
          return l;
        if (typeof btoa == "function") {
          var m = btoa(unescape(encodeURIComponent(JSON.stringify(h)))), f = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(m), a = "/*# ".concat(f, " */");
          return [l].concat([a]).join(`
`);
        }
        return [l].join(`
`);
      };
    }, 372: (r, p, l) => {
      var h = l(567);
      function m() {
      }
      function f() {
      }
      f.resetWarningCache = m, r.exports = function() {
        function a(O, k, P, v, M, j) {
          if (j !== h) {
            var Y = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw Y.name = "Invariant Violation", Y;
          }
        }
        function u() {
          return a;
        }
        a.isRequired = a;
        var b = { array: a, bigint: a, bool: a, func: a, number: a, object: a, string: a, symbol: a, any: a, arrayOf: u, element: a, elementType: a, instanceOf: u, node: a, objectOf: u, oneOf: u, oneOfType: u, shape: u, exact: u, checkPropTypes: f, resetWarningCache: m };
        return b.PropTypes = b, b;
      };
    }, 652: (r, p, l) => {
      r.exports = l(372)();
    }, 567: (r) => {
      r.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (r) => {
      var p = [];
      function l(f) {
        for (var a = -1, u = 0; u < p.length; u++)
          if (p[u].identifier === f) {
            a = u;
            break;
          }
        return a;
      }
      function h(f, a) {
        for (var u = {}, b = [], O = 0; O < f.length; O++) {
          var k = f[O], P = a.base ? k[0] + a.base : k[0], v = u[P] || 0, M = "".concat(P, " ").concat(v);
          u[P] = v + 1;
          var j = l(M), Y = { css: k[1], media: k[2], sourceMap: k[3], supports: k[4], layer: k[5] };
          if (j !== -1)
            p[j].references++, p[j].updater(Y);
          else {
            var K = m(Y, a);
            a.byIndex = O, p.splice(O, 0, { identifier: M, updater: K, references: 1 });
          }
          b.push(M);
        }
        return b;
      }
      function m(f, a) {
        var u = a.domAPI(a);
        return u.update(f), function(b) {
          if (b) {
            if (b.css === f.css && b.media === f.media && b.sourceMap === f.sourceMap && b.supports === f.supports && b.layer === f.layer)
              return;
            u.update(f = b);
          } else
            u.remove();
        };
      }
      r.exports = function(f, a) {
        var u = h(f = f || [], a = a || {});
        return function(b) {
          b = b || [];
          for (var O = 0; O < u.length; O++) {
            var k = l(u[O]);
            p[k].references--;
          }
          for (var P = h(b, a), v = 0; v < u.length; v++) {
            var M = l(u[v]);
            p[M].references === 0 && (p[M].updater(), p.splice(M, 1));
          }
          u = P;
        };
      };
    }, 80: (r) => {
      var p = {};
      r.exports = function(l, h) {
        var m = function(f) {
          if (p[f] === void 0) {
            var a = document.querySelector(f);
            if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement)
              try {
                a = a.contentDocument.head;
              } catch {
                a = null;
              }
            p[f] = a;
          }
          return p[f];
        }(l);
        if (!m)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        m.appendChild(h);
      };
    }, 182: (r) => {
      r.exports = function(p) {
        var l = document.createElement("style");
        return p.setAttributes(l, p.attributes), p.insert(l, p.options), l;
      };
    }, 850: (r, p, l) => {
      r.exports = function(h) {
        var m = l.nc;
        m && h.setAttribute("nonce", m);
      };
    }, 236: (r) => {
      r.exports = function(p) {
        var l = p.insertStyleElement(p);
        return { update: function(h) {
          (function(m, f, a) {
            var u = "";
            a.supports && (u += "@supports (".concat(a.supports, ") {")), a.media && (u += "@media ".concat(a.media, " {"));
            var b = a.layer !== void 0;
            b && (u += "@layer".concat(a.layer.length > 0 ? " ".concat(a.layer) : "", " {")), u += a.css, b && (u += "}"), a.media && (u += "}"), a.supports && (u += "}");
            var O = a.sourceMap;
            O && typeof btoa < "u" && (u += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), f.styleTagTransform(u, m, f.options);
          })(l, p, h);
        }, remove: function() {
          (function(h) {
            if (h.parentNode === null)
              return !1;
            h.parentNode.removeChild(h);
          })(l);
        } };
      };
    }, 213: (r) => {
      r.exports = function(p, l) {
        if (l.styleSheet)
          l.styleSheet.cssText = p;
        else {
          for (; l.firstChild; )
            l.removeChild(l.firstChild);
          l.appendChild(document.createTextNode(p));
        }
      };
    }, 359: (r) => {
      r.exports = E;
    } }, A = {};
    function s(r) {
      var p = A[r];
      if (p !== void 0)
        return p.exports;
      var l = A[r] = { id: r, exports: {} };
      return g[r](l, l.exports, s), l.exports;
    }
    s.n = (r) => {
      var p = r && r.__esModule ? () => r.default : () => r;
      return s.d(p, { a: p }), p;
    }, s.d = (r, p) => {
      for (var l in p)
        s.o(p, l) && !s.o(r, l) && Object.defineProperty(r, l, { enumerable: !0, get: p[l] });
    }, s.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), s.o = (r, p) => Object.prototype.hasOwnProperty.call(r, p), s.r = (r) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
    }, s.nc = void 0;
    var _ = {};
    return (() => {
      s.r(_), s.d(_, { DefaultSplitter: () => K, Split: () => Vt });
      var r = s(359), p = s(701), l = s.n(p), h = s(236), m = s.n(h), f = s(80), a = s.n(f), u = s(850), b = s.n(u), O = s(182), k = s.n(O), P = s(213), v = s.n(P), M = s(58), j = {};
      j.styleTagTransform = v(), j.setAttributes = b(), j.insert = a().bind(null, "head"), j.domAPI = m(), j.insertStyleElement = k(), l()(M.Z, j), M.Z && M.Z.locals && M.Z.locals;
      const Y = (e) => (e % 2 == 0 ? 2 : 3) + "px", K = (e) => {
        const { dragging: t, pixelSize: n, color: o = "silver", hoverColor: c = "gray", dragColor: y = "black" } = e, B = { "--default-splitter-line-margin": (S = n, `${Math.max(0, Math.floor(S / 2) - 1)}px`), "--default-splitter-line-size": Y(n), "--default-splitter-line-color": t ? y : o, "--default-splitter-line-hover-color": t ? y : c };
        var S;
        return r.createElement("div", { className: "default-splitter", style: B }, r.createElement("div", { className: "line" }));
      };
      function st() {
        return st = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }, st.apply(this, arguments);
      }
      function lt(e, t) {
        return lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
          return n.__proto__ = o, n;
        }, lt(e, t);
      }
      var Mt = s(652), L = s.n(Mt), At = function() {
        if (typeof Map < "u")
          return Map;
        function e(t, n) {
          var o = -1;
          return t.some(function(c, y) {
            return c[0] === n && (o = y, !0);
          }), o;
        }
        return function() {
          function t() {
            this.__entries__ = [];
          }
          return Object.defineProperty(t.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), t.prototype.get = function(n) {
            var o = e(this.__entries__, n), c = this.__entries__[o];
            return c && c[1];
          }, t.prototype.set = function(n, o) {
            var c = e(this.__entries__, n);
            ~c ? this.__entries__[c][1] = o : this.__entries__.push([n, o]);
          }, t.prototype.delete = function(n) {
            var o = this.__entries__, c = e(o, n);
            ~c && o.splice(c, 1);
          }, t.prototype.has = function(n) {
            return !!~e(this.__entries__, n);
          }, t.prototype.clear = function() {
            this.__entries__.splice(0);
          }, t.prototype.forEach = function(n, o) {
            o === void 0 && (o = null);
            for (var c = 0, y = this.__entries__; c < y.length; c++) {
              var B = y[c];
              n.call(o, B[1], B[0]);
            }
          }, t;
        }();
      }(), ct = typeof window < "u" && typeof document < "u" && window.document === document, Q = s.g !== void 0 && s.g.Math === Math ? s.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), Dt = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Q) : function(e) {
        return setTimeout(function() {
          return e(Date.now());
        }, 1e3 / 60);
      }, Pt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], jt = typeof MutationObserver < "u", Wt = function() {
        function e() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, n) {
            var o = !1, c = !1, y = 0;
            function B() {
              o && (o = !1, t()), c && d();
            }
            function S() {
              Dt(B);
            }
            function d() {
              var T = Date.now();
              if (o) {
                if (T - y < 2)
                  return;
                c = !0;
              } else
                o = !0, c = !1, setTimeout(S, 20);
              y = T;
            }
            return d;
          }(this.refresh.bind(this));
        }
        return e.prototype.addObserver = function(t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
        }, e.prototype.removeObserver = function(t) {
          var n = this.observers_, o = n.indexOf(t);
          ~o && n.splice(o, 1), !n.length && this.connected_ && this.disconnect_();
        }, e.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, e.prototype.updateObservers_ = function() {
          var t = this.observers_.filter(function(n) {
            return n.gatherActive(), n.hasActive();
          });
          return t.forEach(function(n) {
            return n.broadcastActive();
          }), t.length > 0;
        }, e.prototype.connect_ = function() {
          ct && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), jt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, e.prototype.disconnect_ = function() {
          ct && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, e.prototype.onTransitionEnd_ = function(t) {
          var n = t.propertyName, o = n === void 0 ? "" : n;
          Pt.some(function(c) {
            return !!~o.indexOf(c);
          }) && this.refresh();
        }, e.getInstance = function() {
          return this.instance_ || (this.instance_ = new e()), this.instance_;
        }, e.instance_ = null, e;
      }(), mt = function(e, t) {
        for (var n = 0, o = Object.keys(t); n < o.length; n++) {
          var c = o[n];
          Object.defineProperty(e, c, { value: t[c], enumerable: !1, writable: !1, configurable: !0 });
        }
        return e;
      }, F = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || Q;
      }, vt = et(0, 0, 0, 0);
      function tt(e) {
        return parseFloat(e) || 0;
      }
      function gt(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function(o, c) {
          return o + tt(e["border-" + c + "-width"]);
        }, 0);
      }
      var Lt = typeof SVGGraphicsElement < "u" ? function(e) {
        return e instanceof F(e).SVGGraphicsElement;
      } : function(e) {
        return e instanceof F(e).SVGElement && typeof e.getBBox == "function";
      };
      function Nt(e) {
        return ct ? Lt(e) ? function(t) {
          var n = t.getBBox();
          return et(0, 0, n.width, n.height);
        }(e) : function(t) {
          var n = t.clientWidth, o = t.clientHeight;
          if (!n && !o)
            return vt;
          var c = F(t).getComputedStyle(t), y = function(R) {
            for (var z = {}, I = 0, N = ["top", "right", "bottom", "left"]; I < N.length; I++) {
              var rt = N[I], q = R["padding-" + rt];
              z[rt] = tt(q);
            }
            return z;
          }(c), B = y.left + y.right, S = y.top + y.bottom, d = tt(c.width), T = tt(c.height);
          if (c.boxSizing === "border-box" && (Math.round(d + B) !== n && (d -= gt(c, "left", "right") + B), Math.round(T + S) !== o && (T -= gt(c, "top", "bottom") + S)), !function(R) {
            return R === F(R).document.documentElement;
          }(t)) {
            var W = Math.round(d + B) - n, D = Math.round(T + S) - o;
            Math.abs(W) !== 1 && (d -= W), Math.abs(D) !== 1 && (T -= D);
          }
          return et(y.left, y.top, d, T);
        }(e) : vt;
      }
      function et(e, t, n, o) {
        return { x: e, y: t, width: n, height: o };
      }
      var It = function() {
        function e(t) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = et(0, 0, 0, 0), this.target = t;
        }
        return e.prototype.isActive = function() {
          var t = Nt(this.target);
          return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
        }, e.prototype.broadcastRect = function() {
          var t = this.contentRect_;
          return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
        }, e;
      }(), Yt = function(e, t) {
        var n, o, c, y, B, S, d, T = (o = (n = t).x, c = n.y, y = n.width, B = n.height, S = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, d = Object.create(S.prototype), mt(d, { x: o, y: c, width: y, height: B, top: c, right: o + y, bottom: B + c, left: o }), d);
        mt(this, { target: e, contentRect: T });
      }, Ft = function() {
        function e(t, n, o) {
          if (this.activeObservations_ = [], this.observations_ = new At(), typeof t != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
        }
        return e.prototype.observe = function(t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(t instanceof F(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) || (n.set(t, new It(t)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, e.prototype.unobserve = function(t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(t instanceof F(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
          }
        }, e.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, e.prototype.gatherActive = function() {
          var t = this;
          this.clearActive(), this.observations_.forEach(function(n) {
            n.isActive() && t.activeObservations_.push(n);
          });
        }, e.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var t = this.callbackCtx_, n = this.activeObservations_.map(function(o) {
              return new Yt(o.target, o.broadcastRect());
            });
            this.callback_.call(t, n, t), this.clearActive();
          }
        }, e.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, e.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, e;
      }(), bt = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new At(), yt = function e(t) {
        if (!(this instanceof e))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var n = Wt.getInstance(), o = new Ft(t, n, this);
        bt.set(this, o);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(e) {
        yt.prototype[e] = function() {
          var t;
          return (t = bt.get(this))[e].apply(t, arguments);
        };
      });
      const Zt = Q.ResizeObserver !== void 0 ? Q.ResizeObserver : yt;
      var qt = ["client", "offset", "scroll", "bounds", "margin"];
      function wt(e) {
        var t = [];
        return qt.forEach(function(n) {
          e[n] && t.push(n);
        }), t;
      }
      function Ct(e, t) {
        var n = {};
        if (t.indexOf("client") > -1 && (n.client = { top: e.clientTop, left: e.clientLeft, width: e.clientWidth, height: e.clientHeight }), t.indexOf("offset") > -1 && (n.offset = { top: e.offsetTop, left: e.offsetLeft, width: e.offsetWidth, height: e.offsetHeight }), t.indexOf("scroll") > -1 && (n.scroll = { top: e.scrollTop, left: e.scrollLeft, width: e.scrollWidth, height: e.scrollHeight }), t.indexOf("bounds") > -1) {
          var o = e.getBoundingClientRect();
          n.bounds = { top: o.top, right: o.right, bottom: o.bottom, left: o.left, width: o.width, height: o.height };
        }
        if (t.indexOf("margin") > -1) {
          var c = getComputedStyle(e);
          n.margin = { top: c ? parseInt(c.marginTop) : 0, right: c ? parseInt(c.marginRight) : 0, bottom: c ? parseInt(c.marginBottom) : 0, left: c ? parseInt(c.marginLeft) : 0 };
        }
        return n;
      }
      function Ht(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || window;
      }
      var pt = function(e) {
        var t, n;
        return n = t = function(o) {
          var c, y;
          function B() {
            for (var d, T = arguments.length, W = new Array(T), D = 0; D < T; D++)
              W[D] = arguments[D];
            return (d = o.call.apply(o, [this].concat(W)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, d._animationFrameID = null, d._resizeObserver = null, d._node = null, d._window = null, d.measure = function(R) {
              var z = Ct(d._node, wt(d.props));
              R && (z.entry = R[0].contentRect), d._animationFrameID = d._window.requestAnimationFrame(function() {
                d._resizeObserver !== null && (d.setState({ contentRect: z }), typeof d.props.onResize == "function" && d.props.onResize(z));
              });
            }, d._handleRef = function(R) {
              d._resizeObserver !== null && d._node !== null && d._resizeObserver.unobserve(d._node), d._node = R, d._window = Ht(d._node);
              var z = d.props.innerRef;
              z && (typeof z == "function" ? z(d._node) : z.current = d._node), d._resizeObserver !== null && d._node !== null && d._resizeObserver.observe(d._node);
            }, d;
          }
          y = o, (c = B).prototype = Object.create(y.prototype), c.prototype.constructor = c, lt(c, y);
          var S = B.prototype;
          return S.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new Zt(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Ct(this._node, wt(this.props))));
          }, S.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, S.render = function() {
            var d = this.props, T = (d.innerRef, d.onResize, function(W, D) {
              if (W == null)
                return {};
              var R, z, I = {}, N = Object.keys(W);
              for (z = 0; z < N.length; z++)
                R = N[z], D.indexOf(R) >= 0 || (I[R] = W[R]);
              return I;
            }(d, ["innerRef", "onResize"]));
            return (0, r.createElement)(e, st({}, T, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, B;
        }(r.Component), t.propTypes = { client: L().bool, offset: L().bool, scroll: L().bool, bounds: L().bool, margin: L().bool, innerRef: L().oneOfType([L().object, L().func]), onResize: L().func }, n;
      }(function(e) {
        var t = e.measure, n = e.measureRef, o = e.contentRect;
        return (0, e.children)({ measure: t, measureRef: n, contentRect: o });
      });
      pt.displayName = "Measure", pt.propTypes.children = L().func;
      const dt = pt;
      var nt = s(672), Z = {};
      Z.styleTagTransform = v(), Z.setAttributes = b(), Z.insert = a().bind(null, "head"), Z.domAPI = m(), Z.insertStyleElement = k(), l()(nt.Z, Z), nt.Z && nt.Z.locals && nt.Z.locals;
      const Vt = (e) => {
        const { horizontal: t = !1, initialPrimarySize: n = "50%", minPrimarySize: o = "0px", minSecondarySize: c = "0px", splitterSize: y = "7px", renderSplitter: B, resetOnDoubleClick: S = !1, defaultSplitterColors: d = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: T, onMeasuredSizesChanged: W } = e, [D, R] = r.useState({ height: 0, width: 0 }), [z, I] = r.useState({ height: 0, width: 0 }), [N, rt] = r.useState({ height: 0, width: 0 }), q = r.useMemo(() => t ? D.height : D.width, [t, D]), it = r.useMemo(() => t ? z.height : z.width, [t, z]), ot = r.useMemo(() => t ? N.height : N.width, [t, N]), [V, Et] = r.useState(void 0), [Xt, Ut] = r.useState(0), [$t, Gt] = r.useState(0), [ut, _t] = r.useState(!1);
        r.useEffect(() => {
          T && T(V !== void 0 ? `${V}%` : n);
        }, [V, n]), r.useEffect(() => {
          W && W({ primary: it, splitter: ot, secondary: q - (it + ot) });
        }, [t, q, it, ot]);
        const Jt = (C) => {
          C.bounds && I({ height: C.bounds.height, width: C.bounds.width });
        }, Kt = (C) => {
          C.bounds && rt({ height: C.bounds.height, width: C.bounds.width });
        }, Qt = (C) => {
          C.currentTarget.setPointerCapture(C.pointerId), Ut(t ? C.clientY : C.clientX), Gt(it), _t(!0);
        }, te = (C) => {
          if (C.currentTarget.hasPointerCapture(C.pointerId)) {
            const X = t ? C.clientY : C.clientX, le = $t + (X - Xt), ce = Math.max(0, Math.min(le, q));
            Et(ce / q * 100);
          }
        }, ee = (C) => {
          C.currentTarget.releasePointerCapture(C.pointerId), _t(!1);
        }, ne = () => {
          S && Et(void 0);
        }, at = r.Children.toArray(e.children), re = at.length > 0 ? at[0] : r.createElement("div", null), ie = at.length > 1 ? at[1] : r.createElement("div", null), ht = { primary: V !== void 0 ? `${V}%` : n, minPrimary: o ?? "0px", minSecondary: c ?? "0px" }, Bt = { pixelSize: ot, horizontal: t, dragging: ut }, oe = B ?? (() => r.createElement(K, Object.assign({}, Bt, { color: ut ? d.drag : d.color, hoverColor: ut ? d.drag : d.hover }))), ae = t ? "split-container horizontal" : "split-container vertical", se = { "--react-split-min-primary": ht.minPrimary, "--react-split-min-secondary": ht.minSecondary, "--react-split-primary": ht.primary, "--react-split-splitter": y };
        return r.createElement(dt, { bounds: !0, onResize: (C) => {
          C.bounds && R({ height: C.bounds.height, width: C.bounds.width });
        } }, ({ measureRef: C }) => r.createElement("div", { className: "react-split", ref: C }, r.createElement("div", { className: ae, style: se }, r.createElement("div", { className: "primary" }, r.createElement(dt, { bounds: !0, onResize: Jt }, ({ measureRef: X }) => r.createElement("div", { className: "full-content", ref: X }, re))), r.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: Qt, onPointerUp: ee, onPointerMove: te, onDoubleClick: ne }, r.createElement(dt, { bounds: !0, onResize: Kt }, ({ measureRef: X }) => r.createElement("div", { className: "full-content", ref: X }, oe(Bt)))), r.createElement("div", { className: "secondary" }, r.createElement("div", { className: "full-content" }, ie)))));
      };
    })(), _;
  })());
})(Rt);
var we = Rt.exports;
const Ce = ({
  children: i,
  ...w
}) => /* @__PURE__ */ x(we.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: E,
  dragging: g
}) => /* @__PURE__ */ x("div", { css: [{
  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
  }
}, E ? {
  height: "4px",
  width: "100%"
} : {
  height: "100%",
  width: "4px"
}, g && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...w, children: i }), Te = () => {
  const [i, w] = xt.useState(H[0]), [E, g] = xt.useState(!1), A = U.useMemo(() => H.findIndex((p) => p.id === (i == null ? void 0 : i.id)) || 0, [i]), s = A === H.length - 1, _ = U.useCallback(() => {
    s || w(H[A + 1]);
  }, [A, s]), r = U.useCallback(() => {
    A !== 0 && w(H[A - 1]);
  }, [A]);
  return U.useEffect(() => {
    E && setTimeout(() => {
      g(!1), pe.success("Сохранено", {
        position: "bottom-left",
        autoClose: 1e3,
        hideProgressBar: !1,
        closeOnClick: !0,
        draggable: !0,
        theme: "light"
      }), s || _();
    }, 500);
  }, [E, s, A, _]), /* @__PURE__ */ x(ve, { bbar: [/* @__PURE__ */ x(Ot, { onClick: () => r(), icon: St.faArrowLeft, disabled: A === 0, children: "Назад" }, "previous"), /* @__PURE__ */ x(Ot, { tooltip: s ? "Сохранить программу" : "Следующий шаг", onClick: () => g(!0), disabled: E, variant: "contained", color: "success", iconAfter: s ? void 0 : Tt.faArrowRight, children: s ? "Сохранить" : (i == null ? void 0 : i.status) == J.DONE ? "Обновить" : "Далее" }, "next")], children: /* @__PURE__ */ G(Ce, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ x("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ x(be, { activeItem: i, onChange: w, items: H }) }),
    /* @__PURE__ */ x("div", { css: {
      flex: "1 1 0%",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: /* @__PURE__ */ G("h1", { css: {
      borderBottomWidth: "1px",
      "--tw-border-opacity": "1",
      borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
      paddingBottom: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: "400",
      color: "rgb(0 0 0 / 0.75)"
    }, children: [
      A + 1,
      ". ",
      i == null ? void 0 : i.title
    ] }) })
  ] }) });
};
export {
  Te as default
};
