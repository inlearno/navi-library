import { j as x, a as X } from "./library-047369e1.js";
import { a as ce } from "./mui-a33a672b.js";
import { f as de } from "./faPen-6d05924c.js";
import { f as pe } from "./faCheckCircle-ad748d9a.js";
import { F as ut } from "./icons-cd19d6df.js";
import { u as ue, z as ht, a as he, C as fe, b as xt, T as Ae, F as me, c as zt } from "./QueriedComboBox-12e46834.js";
import { r as V } from "./react-181b9648.js";
import { P as ve } from "./useDictionary-60a2240b.js";
var Dt = {};
(function(o) {
  Object.defineProperty(o, "__esModule", { value: !0 });
  var C = "fas", w = "arrow-left", g = 448, A = 512, s = [8592], S = "f060", r = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  o.definition = {
    prefix: C,
    iconName: w,
    icon: [
      g,
      A,
      s,
      S,
      r
    ]
  }, o.faArrowLeft = o.definition, o.prefix = C, o.iconName = w, o.width = g, o.height = A, o.ligatures = s, o.unicode = S, o.svgPathData = r, o.aliases = s;
})(Dt);
var _ = /* @__PURE__ */ ((o) => (o.DONE = "done", o.ACTIVE = "active", o.DISABLED = "disabled", o))(_ || {}), St = {};
(function(o) {
  Object.defineProperty(o, "__esModule", { value: !0 });
  var C = "fas", w = "lock", g = 448, A = 512, s = [128274], S = "f023", r = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  o.definition = {
    prefix: C,
    iconName: w,
    icon: [
      g,
      A,
      s,
      S,
      r
    ]
  }, o.faLock = o.definition, o.prefix = C, o.iconName = w, o.width = g, o.height = A, o.ligatures = s, o.unicode = S, o.svgPathData = r, o.aliases = s;
})(St);
var ft = {};
(function(o) {
  Object.defineProperty(o, "__esModule", { value: !0 });
  var C = "fas", w = "circle", g = 512, A = 512, s = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], S = "f111", r = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  o.definition = {
    prefix: C,
    iconName: w,
    icon: [
      g,
      A,
      s,
      S,
      r
    ]
  }, o.faCircle = o.definition, o.prefix = C, o.iconName = w, o.width = g, o.height = A, o.ligatures = s, o.unicode = S, o.svgPathData = r, o.aliases = s;
})(ft);
const ge = ({
  status: o
}) => o === _.DONE ? /* @__PURE__ */ x(ut, { icon: pe.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" }) : o === _.ACTIVE ? /* @__PURE__ */ x(ut, { mask: ft.faCircle, icon: de.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" }) : /* @__PURE__ */ x(ut, { mask: ft.faCircle, transform: "shrink-8", icon: St.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} }), be = ({
  items: o,
  activeItem: C,
  className: w,
  onChange: g
}) => /* @__PURE__ */ x("div", { className: w, children: /* @__PURE__ */ x("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: o.map((A, s) => {
  const S = (C == null ? void 0 : C.id) === A.id;
  return /* @__PURE__ */ x("li", { onClick: () => A.status !== _.DISABLED ? g == null ? void 0 : g(A) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, S ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : A.status === _.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, S && ce`
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
                  `], children: /* @__PURE__ */ X("div", { css: {
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
    /* @__PURE__ */ x("div", { children: /* @__PURE__ */ X("div", { children: [
      s + 1,
      ". ",
      A.title
    ] }) }),
    /* @__PURE__ */ x(ge, { status: A.status })
  ] }) }, A.id);
}) }) });
var Tt = { exports: {} };
(function(o, C) {
  (function(w, g) {
    o.exports = g(V);
  })(self, (w) => (() => {
    var g = { 58: (r, d, l) => {
      l.d(d, { Z: () => u });
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
    }, 672: (r, d, l) => {
      l.d(d, { Z: () => u });
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
      r.exports = function(d) {
        var l = [];
        return l.toString = function() {
          return this.map(function(h) {
            var m = "", f = h[5] !== void 0;
            return h[4] && (m += "@supports (".concat(h[4], ") {")), h[2] && (m += "@media ".concat(h[2], " {")), f && (m += "@layer".concat(h[5].length > 0 ? " ".concat(h[5]) : "", " {")), m += d(h), f && (m += "}"), h[2] && (m += "}"), h[4] && (m += "}"), m;
          }).join("");
        }, l.i = function(h, m, f, a, u) {
          typeof h == "string" && (h = [[null, h, void 0]]);
          var b = {};
          if (f)
            for (var O = 0; O < this.length; O++) {
              var k = this[O][0];
              k != null && (b[k] = !0);
            }
          for (var I = 0; I < h.length; I++) {
            var v = [].concat(h[I]);
            f && b[v[0]] || (u !== void 0 && (v[5] === void 0 || (v[1] = "@layer".concat(v[5].length > 0 ? " ".concat(v[5]) : "", " {").concat(v[1], "}")), v[5] = u), m && (v[2] && (v[1] = "@media ".concat(v[2], " {").concat(v[1], "}")), v[2] = m), a && (v[4] ? (v[1] = "@supports (".concat(v[4], ") {").concat(v[1], "}"), v[4] = a) : v[4] = "".concat(a)), l.push(v));
          }
        }, l;
      };
    }, 864: (r) => {
      r.exports = function(d) {
        var l = d[1], h = d[3];
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
    }, 372: (r, d, l) => {
      var h = l(567);
      function m() {
      }
      function f() {
      }
      f.resetWarningCache = m, r.exports = function() {
        function a(O, k, I, v, M, L) {
          if (L !== h) {
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
    }, 652: (r, d, l) => {
      r.exports = l(372)();
    }, 567: (r) => {
      r.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (r) => {
      var d = [];
      function l(f) {
        for (var a = -1, u = 0; u < d.length; u++)
          if (d[u].identifier === f) {
            a = u;
            break;
          }
        return a;
      }
      function h(f, a) {
        for (var u = {}, b = [], O = 0; O < f.length; O++) {
          var k = f[O], I = a.base ? k[0] + a.base : k[0], v = u[I] || 0, M = "".concat(I, " ").concat(v);
          u[I] = v + 1;
          var L = l(M), Y = { css: k[1], media: k[2], sourceMap: k[3], supports: k[4], layer: k[5] };
          if (L !== -1)
            d[L].references++, d[L].updater(Y);
          else {
            var J = m(Y, a);
            a.byIndex = O, d.splice(O, 0, { identifier: M, updater: J, references: 1 });
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
            d[k].references--;
          }
          for (var I = h(b, a), v = 0; v < u.length; v++) {
            var M = l(u[v]);
            d[M].references === 0 && (d[M].updater(), d.splice(M, 1));
          }
          u = I;
        };
      };
    }, 80: (r) => {
      var d = {};
      r.exports = function(l, h) {
        var m = function(f) {
          if (d[f] === void 0) {
            var a = document.querySelector(f);
            if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement)
              try {
                a = a.contentDocument.head;
              } catch {
                a = null;
              }
            d[f] = a;
          }
          return d[f];
        }(l);
        if (!m)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        m.appendChild(h);
      };
    }, 182: (r) => {
      r.exports = function(d) {
        var l = document.createElement("style");
        return d.setAttributes(l, d.attributes), d.insert(l, d.options), l;
      };
    }, 850: (r, d, l) => {
      r.exports = function(h) {
        var m = l.nc;
        m && h.setAttribute("nonce", m);
      };
    }, 236: (r) => {
      r.exports = function(d) {
        var l = d.insertStyleElement(d);
        return { update: function(h) {
          (function(m, f, a) {
            var u = "";
            a.supports && (u += "@supports (".concat(a.supports, ") {")), a.media && (u += "@media ".concat(a.media, " {"));
            var b = a.layer !== void 0;
            b && (u += "@layer".concat(a.layer.length > 0 ? " ".concat(a.layer) : "", " {")), u += a.css, b && (u += "}"), a.media && (u += "}"), a.supports && (u += "}");
            var O = a.sourceMap;
            O && typeof btoa < "u" && (u += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O)))), " */")), f.styleTagTransform(u, m, f.options);
          })(l, d, h);
        }, remove: function() {
          (function(h) {
            if (h.parentNode === null)
              return !1;
            h.parentNode.removeChild(h);
          })(l);
        } };
      };
    }, 213: (r) => {
      r.exports = function(d, l) {
        if (l.styleSheet)
          l.styleSheet.cssText = d;
        else {
          for (; l.firstChild; )
            l.removeChild(l.firstChild);
          l.appendChild(document.createTextNode(d));
        }
      };
    }, 359: (r) => {
      r.exports = w;
    } }, A = {};
    function s(r) {
      var d = A[r];
      if (d !== void 0)
        return d.exports;
      var l = A[r] = { id: r, exports: {} };
      return g[r](l, l.exports, s), l.exports;
    }
    s.n = (r) => {
      var d = r && r.__esModule ? () => r.default : () => r;
      return s.d(d, { a: d }), d;
    }, s.d = (r, d) => {
      for (var l in d)
        s.o(d, l) && !s.o(r, l) && Object.defineProperty(r, l, { enumerable: !0, get: d[l] });
    }, s.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), s.o = (r, d) => Object.prototype.hasOwnProperty.call(r, d), s.r = (r) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
    }, s.nc = void 0;
    var S = {};
    return (() => {
      s.r(S), s.d(S, { DefaultSplitter: () => J, Split: () => Ht });
      var r = s(359), d = s(701), l = s.n(d), h = s(236), m = s.n(h), f = s(80), a = s.n(f), u = s(850), b = s.n(u), O = s(182), k = s.n(O), I = s(213), v = s.n(I), M = s(58), L = {};
      L.styleTagTransform = v(), L.setAttributes = b(), L.insert = a().bind(null, "head"), L.domAPI = m(), L.insertStyleElement = k(), l()(M.Z, L), M.Z && M.Z.locals && M.Z.locals;
      const Y = (e) => (e % 2 == 0 ? 2 : 3) + "px", J = (e) => {
        const { dragging: t, pixelSize: n, color: i = "silver", hoverColor: c = "gray", dragColor: y = "black" } = e, B = { "--default-splitter-line-margin": (T = n, `${Math.max(0, Math.floor(T / 2) - 1)}px`), "--default-splitter-line-size": Y(n), "--default-splitter-line-color": t ? y : i, "--default-splitter-line-hover-color": t ? y : c };
        var T;
        return r.createElement("div", { className: "default-splitter", style: B }, r.createElement("div", { className: "line" }));
      };
      function ot() {
        return ot = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }, ot.apply(this, arguments);
      }
      function at(e, t) {
        return at = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
          return n.__proto__ = i, n;
        }, at(e, t);
      }
      var kt = s(652), j = s.n(kt), At = function() {
        if (typeof Map < "u")
          return Map;
        function e(t, n) {
          var i = -1;
          return t.some(function(c, y) {
            return c[0] === n && (i = y, !0);
          }), i;
        }
        return function() {
          function t() {
            this.__entries__ = [];
          }
          return Object.defineProperty(t.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), t.prototype.get = function(n) {
            var i = e(this.__entries__, n), c = this.__entries__[i];
            return c && c[1];
          }, t.prototype.set = function(n, i) {
            var c = e(this.__entries__, n);
            ~c ? this.__entries__[c][1] = i : this.__entries__.push([n, i]);
          }, t.prototype.delete = function(n) {
            var i = this.__entries__, c = e(i, n);
            ~c && i.splice(c, 1);
          }, t.prototype.has = function(n) {
            return !!~e(this.__entries__, n);
          }, t.prototype.clear = function() {
            this.__entries__.splice(0);
          }, t.prototype.forEach = function(n, i) {
            i === void 0 && (i = null);
            for (var c = 0, y = this.__entries__; c < y.length; c++) {
              var B = y[c];
              n.call(i, B[1], B[0]);
            }
          }, t;
        }();
      }(), st = typeof window < "u" && typeof document < "u" && window.document === document, $ = s.g !== void 0 && s.g.Math === Math ? s.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), Rt = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind($) : function(e) {
        return setTimeout(function() {
          return e(Date.now());
        }, 1e3 / 60);
      }, Mt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Pt = typeof MutationObserver < "u", It = function() {
        function e() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, n) {
            var i = !1, c = !1, y = 0;
            function B() {
              i && (i = !1, t()), c && p();
            }
            function T() {
              Rt(B);
            }
            function p() {
              var D = Date.now();
              if (i) {
                if (D - y < 2)
                  return;
                c = !0;
              } else
                i = !0, c = !1, setTimeout(T, 20);
              y = D;
            }
            return p;
          }(this.refresh.bind(this));
        }
        return e.prototype.addObserver = function(t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
        }, e.prototype.removeObserver = function(t) {
          var n = this.observers_, i = n.indexOf(t);
          ~i && n.splice(i, 1), !n.length && this.connected_ && this.disconnect_();
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
          st && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Pt ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, e.prototype.disconnect_ = function() {
          st && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, e.prototype.onTransitionEnd_ = function(t) {
          var n = t.propertyName, i = n === void 0 ? "" : n;
          Mt.some(function(c) {
            return !!~i.indexOf(c);
          }) && this.refresh();
        }, e.getInstance = function() {
          return this.instance_ || (this.instance_ = new e()), this.instance_;
        }, e.instance_ = null, e;
      }(), mt = function(e, t) {
        for (var n = 0, i = Object.keys(t); n < i.length; n++) {
          var c = i[n];
          Object.defineProperty(e, c, { value: t[c], enumerable: !1, writable: !1, configurable: !0 });
        }
        return e;
      }, Z = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || $;
      }, vt = Q(0, 0, 0, 0);
      function K(e) {
        return parseFloat(e) || 0;
      }
      function gt(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function(i, c) {
          return i + K(e["border-" + c + "-width"]);
        }, 0);
      }
      var Lt = typeof SVGGraphicsElement < "u" ? function(e) {
        return e instanceof Z(e).SVGGraphicsElement;
      } : function(e) {
        return e instanceof Z(e).SVGElement && typeof e.getBBox == "function";
      };
      function Wt(e) {
        return st ? Lt(e) ? function(t) {
          var n = t.getBBox();
          return Q(0, 0, n.width, n.height);
        }(e) : function(t) {
          var n = t.clientWidth, i = t.clientHeight;
          if (!n && !i)
            return vt;
          var c = Z(t).getComputedStyle(t), y = function(R) {
            for (var z = {}, F = 0, N = ["top", "right", "bottom", "left"]; F < N.length; F++) {
              var et = N[F], H = R["padding-" + et];
              z[et] = K(H);
            }
            return z;
          }(c), B = y.left + y.right, T = y.top + y.bottom, p = K(c.width), D = K(c.height);
          if (c.boxSizing === "border-box" && (Math.round(p + B) !== n && (p -= gt(c, "left", "right") + B), Math.round(D + T) !== i && (D -= gt(c, "top", "bottom") + T)), !function(R) {
            return R === Z(R).document.documentElement;
          }(t)) {
            var W = Math.round(p + B) - n, P = Math.round(D + T) - i;
            Math.abs(W) !== 1 && (p -= W), Math.abs(P) !== 1 && (D -= P);
          }
          return Q(y.left, y.top, p, D);
        }(e) : vt;
      }
      function Q(e, t, n, i) {
        return { x: e, y: t, width: n, height: i };
      }
      var jt = function() {
        function e(t) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Q(0, 0, 0, 0), this.target = t;
        }
        return e.prototype.isActive = function() {
          var t = Wt(this.target);
          return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
        }, e.prototype.broadcastRect = function() {
          var t = this.contentRect_;
          return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
        }, e;
      }(), Nt = function(e, t) {
        var n, i, c, y, B, T, p, D = (i = (n = t).x, c = n.y, y = n.width, B = n.height, T = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, p = Object.create(T.prototype), mt(p, { x: i, y: c, width: y, height: B, top: c, right: i + y, bottom: B + c, left: i }), p);
        mt(this, { target: e, contentRect: D });
      }, Ft = function() {
        function e(t, n, i) {
          if (this.activeObservations_ = [], this.observations_ = new At(), typeof t != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = t, this.controller_ = n, this.callbackCtx_ = i;
        }
        return e.prototype.observe = function(t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(t instanceof Z(t).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) || (n.set(t, new jt(t)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, e.prototype.unobserve = function(t) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(t instanceof Z(t).Element))
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
            var t = this.callbackCtx_, n = this.activeObservations_.map(function(i) {
              return new Nt(i.target, i.broadcastRect());
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
        var n = It.getInstance(), i = new Ft(t, n, this);
        bt.set(this, i);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(e) {
        yt.prototype[e] = function() {
          var t;
          return (t = bt.get(this))[e].apply(t, arguments);
        };
      });
      const Yt = $.ResizeObserver !== void 0 ? $.ResizeObserver : yt;
      var Zt = ["client", "offset", "scroll", "bounds", "margin"];
      function Et(e) {
        var t = [];
        return Zt.forEach(function(n) {
          e[n] && t.push(n);
        }), t;
      }
      function Ct(e, t) {
        var n = {};
        if (t.indexOf("client") > -1 && (n.client = { top: e.clientTop, left: e.clientLeft, width: e.clientWidth, height: e.clientHeight }), t.indexOf("offset") > -1 && (n.offset = { top: e.offsetTop, left: e.offsetLeft, width: e.offsetWidth, height: e.offsetHeight }), t.indexOf("scroll") > -1 && (n.scroll = { top: e.scrollTop, left: e.scrollLeft, width: e.scrollWidth, height: e.scrollHeight }), t.indexOf("bounds") > -1) {
          var i = e.getBoundingClientRect();
          n.bounds = { top: i.top, right: i.right, bottom: i.bottom, left: i.left, width: i.width, height: i.height };
        }
        if (t.indexOf("margin") > -1) {
          var c = getComputedStyle(e);
          n.margin = { top: c ? parseInt(c.marginTop) : 0, right: c ? parseInt(c.marginRight) : 0, bottom: c ? parseInt(c.marginBottom) : 0, left: c ? parseInt(c.marginLeft) : 0 };
        }
        return n;
      }
      function qt(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || window;
      }
      var lt = function(e) {
        var t, n;
        return n = t = function(i) {
          var c, y;
          function B() {
            for (var p, D = arguments.length, W = new Array(D), P = 0; P < D; P++)
              W[P] = arguments[P];
            return (p = i.call.apply(i, [this].concat(W)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, p._animationFrameID = null, p._resizeObserver = null, p._node = null, p._window = null, p.measure = function(R) {
              var z = Ct(p._node, Et(p.props));
              R && (z.entry = R[0].contentRect), p._animationFrameID = p._window.requestAnimationFrame(function() {
                p._resizeObserver !== null && (p.setState({ contentRect: z }), typeof p.props.onResize == "function" && p.props.onResize(z));
              });
            }, p._handleRef = function(R) {
              p._resizeObserver !== null && p._node !== null && p._resizeObserver.unobserve(p._node), p._node = R, p._window = qt(p._node);
              var z = p.props.innerRef;
              z && (typeof z == "function" ? z(p._node) : z.current = p._node), p._resizeObserver !== null && p._node !== null && p._resizeObserver.observe(p._node);
            }, p;
          }
          y = i, (c = B).prototype = Object.create(y.prototype), c.prototype.constructor = c, at(c, y);
          var T = B.prototype;
          return T.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new Yt(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Ct(this._node, Et(this.props))));
          }, T.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, T.render = function() {
            var p = this.props, D = (p.innerRef, p.onResize, function(W, P) {
              if (W == null)
                return {};
              var R, z, F = {}, N = Object.keys(W);
              for (z = 0; z < N.length; z++)
                R = N[z], P.indexOf(R) >= 0 || (F[R] = W[R]);
              return F;
            }(p, ["innerRef", "onResize"]));
            return (0, r.createElement)(e, ot({}, D, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, B;
        }(r.Component), t.propTypes = { client: j().bool, offset: j().bool, scroll: j().bool, bounds: j().bool, margin: j().bool, innerRef: j().oneOfType([j().object, j().func]), onResize: j().func }, n;
      }(function(e) {
        var t = e.measure, n = e.measureRef, i = e.contentRect;
        return (0, e.children)({ measure: t, measureRef: n, contentRect: i });
      });
      lt.displayName = "Measure", lt.propTypes.children = j().func;
      const ct = lt;
      var tt = s(672), q = {};
      q.styleTagTransform = v(), q.setAttributes = b(), q.insert = a().bind(null, "head"), q.domAPI = m(), q.insertStyleElement = k(), l()(tt.Z, q), tt.Z && tt.Z.locals && tt.Z.locals;
      const Ht = (e) => {
        const { horizontal: t = !1, initialPrimarySize: n = "50%", minPrimarySize: i = "0px", minSecondarySize: c = "0px", splitterSize: y = "7px", renderSplitter: B, resetOnDoubleClick: T = !1, defaultSplitterColors: p = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: D, onMeasuredSizesChanged: W } = e, [P, R] = r.useState({ height: 0, width: 0 }), [z, F] = r.useState({ height: 0, width: 0 }), [N, et] = r.useState({ height: 0, width: 0 }), H = r.useMemo(() => t ? P.height : P.width, [t, P]), nt = r.useMemo(() => t ? z.height : z.width, [t, z]), rt = r.useMemo(() => t ? N.height : N.width, [t, N]), [U, wt] = r.useState(void 0), [Vt, Xt] = r.useState(0), [Ut, Gt] = r.useState(0), [dt, _t] = r.useState(!1);
        r.useEffect(() => {
          D && D(U !== void 0 ? `${U}%` : n);
        }, [U, n]), r.useEffect(() => {
          W && W({ primary: nt, splitter: rt, secondary: H - (nt + rt) });
        }, [t, H, nt, rt]);
        const Jt = (E) => {
          E.bounds && F({ height: E.bounds.height, width: E.bounds.width });
        }, $t = (E) => {
          E.bounds && et({ height: E.bounds.height, width: E.bounds.width });
        }, Kt = (E) => {
          E.currentTarget.setPointerCapture(E.pointerId), Xt(t ? E.clientY : E.clientX), Gt(nt), _t(!0);
        }, Qt = (E) => {
          if (E.currentTarget.hasPointerCapture(E.pointerId)) {
            const G = t ? E.clientY : E.clientX, se = Ut + (G - Vt), le = Math.max(0, Math.min(se, H));
            wt(le / H * 100);
          }
        }, te = (E) => {
          E.currentTarget.releasePointerCapture(E.pointerId), _t(!1);
        }, ee = () => {
          T && wt(void 0);
        }, it = r.Children.toArray(e.children), ne = it.length > 0 ? it[0] : r.createElement("div", null), re = it.length > 1 ? it[1] : r.createElement("div", null), pt = { primary: U !== void 0 ? `${U}%` : n, minPrimary: i ?? "0px", minSecondary: c ?? "0px" }, Bt = { pixelSize: rt, horizontal: t, dragging: dt }, ie = B ?? (() => r.createElement(J, Object.assign({}, Bt, { color: dt ? p.drag : p.color, hoverColor: dt ? p.drag : p.hover }))), oe = t ? "split-container horizontal" : "split-container vertical", ae = { "--react-split-min-primary": pt.minPrimary, "--react-split-min-secondary": pt.minSecondary, "--react-split-primary": pt.primary, "--react-split-splitter": y };
        return r.createElement(ct, { bounds: !0, onResize: (E) => {
          E.bounds && R({ height: E.bounds.height, width: E.bounds.width });
        } }, ({ measureRef: E }) => r.createElement("div", { className: "react-split", ref: E }, r.createElement("div", { className: oe, style: ae }, r.createElement("div", { className: "primary" }, r.createElement(ct, { bounds: !0, onResize: Jt }, ({ measureRef: G }) => r.createElement("div", { className: "full-content", ref: G }, ne))), r.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: Kt, onPointerUp: te, onPointerMove: Qt, onDoubleClick: ee }, r.createElement(ct, { bounds: !0, onResize: $t }, ({ measureRef: G }) => r.createElement("div", { className: "full-content", ref: G }, ie(Bt)))), r.createElement("div", { className: "secondary" }, r.createElement("div", { className: "full-content" }, re)))));
      };
    })(), S;
  })());
})(Tt);
var ye = Tt.exports;
const Ee = ({
  children: o,
  ...C
}) => /* @__PURE__ */ x(ye.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: w,
  dragging: g
}) => /* @__PURE__ */ x("div", { css: [{
  transitionProperty: "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "200ms",
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
  }
}, w ? {
  height: "4px",
  width: "100%"
} : {
  height: "100%",
  width: "4px"
}, g && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...C, children: o }), Ce = ({
  steps: o
}) => {
  const [C, w] = V.useState(o[0]), g = V.useRef(null), A = V.useMemo(() => o.findIndex((d) => d.id === (C == null ? void 0 : C.id)) || 0, [C]), s = A === o.length - 1, S = V.useCallback(async () => {
    if (!s)
      try {
        g.current && await g.current.save(), w(o[A + 1]);
      } catch {
      }
  }, [A, s]), r = V.useCallback(() => {
    A !== 0 && w(o[A - 1]);
  }, [A]);
  return {
    getNextButtonProps: () => ({
      onClick: S,
      disabled: s
    }),
    activeStep: o[A],
    activeStepIndex: A,
    setActiveStep: w,
    getPrevButtonProps: () => ({
      onClick: r,
      disabled: A === 0
    }),
    stepRef: g
  };
}, we = (o) => ue(o), _e = ht.object({
  partner_id: ht.number({
    required_error: "Выберите партнера"
  }).min(1, "Выберите партнера"),
  name: ht.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование")
}), Be = (o) => {
  const C = he("POST", "/api/"), w = we({
    mutation: C,
    schema: _e
  });
  return /* @__PURE__ */ X(me, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: w, children: [
    /* @__PURE__ */ x(xt, { control: w.control, name: "partner_id", render: ({
      field: g,
      fieldState: {
        error: A
      }
    }) => /* @__PURE__ */ x(fe, { css: {
      width: "100%"
    }, ...g, placeholder: "Выберите партнера", label: "Партнер", helperText: "Партнер программы", displayField: "name", error: A == null ? void 0 : A.message, options: [{
      id: 1,
      name: "Партнер 1"
    }, {
      id: 2,
      name: "Партнер 2"
    }] }) }),
    /* @__PURE__ */ x(xt, { control: w.control, name: "name", defaultValue: "", render: ({
      field: g,
      fieldState: {
        error: A
      }
    }) => /* @__PURE__ */ x(Ae, { css: {
      width: "100%"
    }, ...g, error: A == null ? void 0 : A.message, placeholder: "Введите наименование", label: "Наименование" }) })
  ] });
}, Ot = [{
  id: "general",
  title: "Основное",
  status: _.DONE,
  Component: Be
}, {
  id: "description",
  title: "Описание",
  status: _.DONE
}, {
  id: "parameters",
  title: "Параметры",
  status: _.DONE
}, {
  id: "plan-results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  status: _.DONE
}, {
  id: "goals-tasks",
  title: "Цели и задачи",
  status: _.ACTIVE
}, {
  id: "study-plan",
  title: "Учебный план",
  status: _.DISABLED
}, {
  id: "evaluation",
  title: "Формы аттестации и оценочные материалы",
  status: _.DISABLED
}, {
  id: "criteria",
  title: "Критерии оценки учебных результатов",
  status: _.DISABLED
}, {
  id: "assessment",
  title: "Способ фиксации учебных результатов",
  status: _.DISABLED
}, {
  id: "materials",
  title: "Методические материалы",
  status: _.DISABLED
}, {
  title: "Особенности организации образовательной деятельности",
  id: "organizational-features",
  status: _.DISABLED
}, {
  title: "Воспитательная деятельность",
  id: "teaching-experience",
  status: _.DISABLED
}, {
  title: "Развивающая деятельность",
  id: "academic-experience",
  status: _.DISABLED
}, {
  title: "Кадровое обеспечение",
  id: "learning-style",
  status: _.DISABLED
}, {
  title: "Материально-техническое обеспечение",
  id: "technology-support",
  status: _.DISABLED
}, {
  title: "Информационное обеспечение",
  id: "information-support",
  status: _.DISABLED
}, {
  title: "Список литературы",
  id: "list-of-references",
  status: _.DISABLED
}, {
  title: "Календарный учебный график",
  id: "calendar-study-plan",
  status: _.DISABLED
}], Me = () => {
  const {
    getNextButtonProps: o,
    getPrevButtonProps: C,
    setActiveStep: w,
    activeStepIndex: g,
    stepRef: A,
    activeStep: s
  } = Ce({
    steps: Ot
  });
  return /* @__PURE__ */ x(ve, { bbar: [/* @__PURE__ */ x(zt, { icon: Dt.faArrowLeft, ...C(), children: "Назад" }, "previous"), /* @__PURE__ */ x(zt, { ...o(), variant: "contained", color: "success", children: "Сохранить" }, "next")], children: /* @__PURE__ */ X(Ee, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ x("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ x(be, { activeItem: s, onChange: w, items: Ot }) }),
    /* @__PURE__ */ X("div", { css: {
      height: "100%",
      flex: "1 1 0%",
      overflowY: "auto",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem"
    }, children: [
      /* @__PURE__ */ X("h1", { css: {
        borderBottomWidth: "1px",
        "--tw-border-opacity": "1",
        borderBottomColor: "rgb(229 231 235 / var(--tw-border-opacity))",
        paddingBottom: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "400",
        color: "rgb(0 0 0 / 0.75)"
      }, children: [
        g + 1,
        ". ",
        s == null ? void 0 : s.title
      ] }),
      /* @__PURE__ */ x("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: s && s.Component && /* @__PURE__ */ x(s.Component, { stepRef: A }) })
    ] })
  ] }) });
};
export {
  Me as default,
  Ot as steps
};
