import { j as e, f as We, a as B, S as Bt } from "./library-72beada2.js";
import { r as j, R as Ne } from "./react-181b9648.js";
import { u as N, f as St, B as Fe, z as i, T as O, F as d, P as Tt, D as X, R as Dt, Y as ze, a as R, b as ve, c as Y, N as W, L as Ot, d as Le, e as L, g as Ye, h as kt } from "./RootSection-610debea.js";
import { l as Rt, P as qt, b as Mt } from "./useDictionary-464da608.js";
import { a as jt, B as $ } from "./mui-d2313b11.js";
import { f as Pt } from "./faPen-6d05924c.js";
import { N as It, f as Ft } from "./index-38b3fe08.js";
import { F as ee } from "./icons-42066a3f.js";
import { u as Be } from "./useWindowController-1af7876d.js";
var P = /* @__PURE__ */ ((r) => (r.DONE = "done", r.ACTIVE = "active", r.WAIT = "wait", r.DISABLED = "disabled", r.LOADING = "loading", r.ERROR = "error", r.EDIT = "edit", r))(P || {});
const Wt = ({
  stepsDefinition: r,
  values: n,
  stateKey: t
}) => {
  const [m, w] = j.useState(!1), [f, C] = j.useState({});
  j.useEffect(() => {
    n && t in n && n[t] && C(n[t]);
  }, [n]);
  const a = j.useMemo(() => r.map((z) => ({
    ...z,
    status: f[z.id] ?? P.WAIT
  })), [r, f]), [p, h] = j.useState(a[0]), y = j.useRef(null), _ = j.useMemo(() => a.findIndex((z) => z.id === (p == null ? void 0 : p.id)) || 0, [p]), b = j.useCallback((z) => {
    C((q) => ({
      ...q,
      [p.id]: q[p.id] === P.ERROR && z === P.EDIT ? P.ERROR : z
    }));
  }, [p, C]), c = _ === a.length - 1, A = j.useCallback(async () => {
    if (!c)
      try {
        w(!0), b(P.LOADING), y.current && await y.current.save(), h(a[_ + 1]);
      } catch {
        b(P.ERROR);
      } finally {
        w(!1);
      }
  }, [_, c]), x = j.useCallback(() => {
    _ !== 0 && h(a[_ - 1]);
  }, [_]);
  return {
    steps: a,
    stepFormRef: y,
    isSubmitting: m,
    setActiveStepStatus: b,
    getNextButtonProps: () => ({
      onClick: A,
      disabled: c || m
    }),
    activeStep: p,
    activeStepIndex: _,
    setActiveStep: h,
    getPrevButtonProps: () => ({
      onClick: x,
      disabled: _ === 0
    })
  };
}, $e = Ne.createContext(null), Nt = ({
  children: r,
  value: n
}) => {
  const [t, m] = Ne.useState({}), {
    activeStep: {
      id: w
    }
  } = n, f = j.useCallback(() => t[w] || {}, [w, t]), C = j.useCallback((a) => m((p) => ({
    ...p,
    [w]: {
      ...p[w],
      ...a
    }
  })), [w, t, m]);
  return /* @__PURE__ */ e($e.Provider, { value: {
    ...n,
    getStepState: f,
    setStepState: C
  }, children: r });
};
function Lt() {
  const r = j.useContext($e);
  if (!r)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return r;
}
const re = ({
  defaultValues: r = {},
  ...n
}) => {
  const {
    stepFormRef: t,
    activeStep: m,
    stateKey: w,
    getStepState: f,
    setStepState: C,
    values: a,
    mutation: p,
    setActiveStepStatus: h
  } = Lt(), y = f(), {
    errors: _,
    fields: b
  } = y, c = N({
    mutation: p,
    errors: _,
    defaultValues: b || r,
    transformSendData: (A) => ({
      ...A,
      [w]: {
        ...a ? a[w] : {},
        [m.id]: P.DONE
      }
    }),
    ...n
  });
  return j.useEffect(() => {
    C({
      errors: c.formState.errors
    });
  }, [c.formState.errors]), j.useEffect(() => {
    Rt.isEqual(c.getValues(), r) || (h(P.EDIT), C({
      fields: c.getValues()
    }));
  }, [m, JSON.stringify(c.formState.dirtyFields)]), j.useImperativeHandle(t, () => ({
    save: async () => {
      await c.submit(), C({
        fields: void 0
      });
    }
  })), c;
};
var Ze = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "arrow-left", m = 448, w = 512, f = [8592], C = "f060", a = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      m,
      w,
      f,
      C,
      a
    ]
  }, r.faArrowLeft = r.definition, r.prefix = n, r.iconName = t, r.width = m, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(Ze);
var He = { exports: {} };
(function(r, n) {
  (function(t, m) {
    r.exports = m(j);
  })(self, (t) => (() => {
    var m = { 58: (a, p, h) => {
      h.d(p, { Z: () => A });
      var y = h(864), _ = h.n(y), b = h(352), c = h.n(b)()(_());
      c.push([a.id, `
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
      const A = c;
    }, 672: (a, p, h) => {
      h.d(p, { Z: () => A });
      var y = h(864), _ = h.n(y), b = h(352), c = h.n(b)()(_());
      c.push([a.id, `/* The top-level element of the splitter*/
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
      const A = c;
    }, 352: (a) => {
      a.exports = function(p) {
        var h = [];
        return h.toString = function() {
          return this.map(function(y) {
            var _ = "", b = y[5] !== void 0;
            return y[4] && (_ += "@supports (".concat(y[4], ") {")), y[2] && (_ += "@media ".concat(y[2], " {")), b && (_ += "@layer".concat(y[5].length > 0 ? " ".concat(y[5]) : "", " {")), _ += p(y), b && (_ += "}"), y[2] && (_ += "}"), y[4] && (_ += "}"), _;
          }).join("");
        }, h.i = function(y, _, b, c, A) {
          typeof y == "string" && (y = [[null, y, void 0]]);
          var x = {};
          if (b)
            for (var z = 0; z < this.length; z++) {
              var q = this[z][0];
              q != null && (x[q] = !0);
            }
          for (var V = 0; V < y.length; V++) {
            var E = [].concat(y[V]);
            b && x[E[0]] || (A !== void 0 && (E[5] === void 0 || (E[1] = "@layer".concat(E[5].length > 0 ? " ".concat(E[5]) : "", " {").concat(E[1], "}")), E[5] = A), _ && (E[2] && (E[1] = "@media ".concat(E[2], " {").concat(E[1], "}")), E[2] = _), c && (E[4] ? (E[1] = "@supports (".concat(E[4], ") {").concat(E[1], "}"), E[4] = c) : E[4] = "".concat(c)), h.push(E));
          }
        }, h;
      };
    }, 864: (a) => {
      a.exports = function(p) {
        var h = p[1], y = p[3];
        if (!y)
          return h;
        if (typeof btoa == "function") {
          var _ = btoa(unescape(encodeURIComponent(JSON.stringify(y)))), b = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(_), c = "/*# ".concat(b, " */");
          return [h].concat([c]).join(`
`);
        }
        return [h].join(`
`);
      };
    }, 372: (a, p, h) => {
      var y = h(567);
      function _() {
      }
      function b() {
      }
      b.resetWarningCache = _, a.exports = function() {
        function c(z, q, V, E, Z, G) {
          if (G !== y) {
            var te = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw te.name = "Invariant Violation", te;
          }
        }
        function A() {
          return c;
        }
        c.isRequired = c;
        var x = { array: c, bigint: c, bool: c, func: c, number: c, object: c, string: c, symbol: c, any: c, arrayOf: A, element: c, elementType: c, instanceOf: A, node: c, objectOf: A, oneOf: A, oneOfType: A, shape: A, exact: A, checkPropTypes: b, resetWarningCache: _ };
        return x.PropTypes = x, x;
      };
    }, 652: (a, p, h) => {
      a.exports = h(372)();
    }, 567: (a) => {
      a.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (a) => {
      var p = [];
      function h(b) {
        for (var c = -1, A = 0; A < p.length; A++)
          if (p[A].identifier === b) {
            c = A;
            break;
          }
        return c;
      }
      function y(b, c) {
        for (var A = {}, x = [], z = 0; z < b.length; z++) {
          var q = b[z], V = c.base ? q[0] + c.base : q[0], E = A[V] || 0, Z = "".concat(V, " ").concat(E);
          A[V] = E + 1;
          var G = h(Z), te = { css: q[1], media: q[2], sourceMap: q[3], supports: q[4], layer: q[5] };
          if (G !== -1)
            p[G].references++, p[G].updater(te);
          else {
            var ce = _(te, c);
            c.byIndex = z, p.splice(z, 0, { identifier: Z, updater: ce, references: 1 });
          }
          x.push(Z);
        }
        return x;
      }
      function _(b, c) {
        var A = c.domAPI(c);
        return A.update(b), function(x) {
          if (x) {
            if (x.css === b.css && x.media === b.media && x.sourceMap === b.sourceMap && x.supports === b.supports && x.layer === b.layer)
              return;
            A.update(b = x);
          } else
            A.remove();
        };
      }
      a.exports = function(b, c) {
        var A = y(b = b || [], c = c || {});
        return function(x) {
          x = x || [];
          for (var z = 0; z < A.length; z++) {
            var q = h(A[z]);
            p[q].references--;
          }
          for (var V = y(x, c), E = 0; E < A.length; E++) {
            var Z = h(A[E]);
            p[Z].references === 0 && (p[Z].updater(), p.splice(Z, 1));
          }
          A = V;
        };
      };
    }, 80: (a) => {
      var p = {};
      a.exports = function(h, y) {
        var _ = function(b) {
          if (p[b] === void 0) {
            var c = document.querySelector(b);
            if (window.HTMLIFrameElement && c instanceof window.HTMLIFrameElement)
              try {
                c = c.contentDocument.head;
              } catch {
                c = null;
              }
            p[b] = c;
          }
          return p[b];
        }(h);
        if (!_)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        _.appendChild(y);
      };
    }, 182: (a) => {
      a.exports = function(p) {
        var h = document.createElement("style");
        return p.setAttributes(h, p.attributes), p.insert(h, p.options), h;
      };
    }, 850: (a, p, h) => {
      a.exports = function(y) {
        var _ = h.nc;
        _ && y.setAttribute("nonce", _);
      };
    }, 236: (a) => {
      a.exports = function(p) {
        var h = p.insertStyleElement(p);
        return { update: function(y) {
          (function(_, b, c) {
            var A = "";
            c.supports && (A += "@supports (".concat(c.supports, ") {")), c.media && (A += "@media ".concat(c.media, " {"));
            var x = c.layer !== void 0;
            x && (A += "@layer".concat(c.layer.length > 0 ? " ".concat(c.layer) : "", " {")), A += c.css, x && (A += "}"), c.media && (A += "}"), c.supports && (A += "}");
            var z = c.sourceMap;
            z && typeof btoa < "u" && (A += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(z)))), " */")), b.styleTagTransform(A, _, b.options);
          })(h, p, y);
        }, remove: function() {
          (function(y) {
            if (y.parentNode === null)
              return !1;
            y.parentNode.removeChild(y);
          })(h);
        } };
      };
    }, 213: (a) => {
      a.exports = function(p, h) {
        if (h.styleSheet)
          h.styleSheet.cssText = p;
        else {
          for (; h.firstChild; )
            h.removeChild(h.firstChild);
          h.appendChild(document.createTextNode(p));
        }
      };
    }, 359: (a) => {
      a.exports = t;
    } }, w = {};
    function f(a) {
      var p = w[a];
      if (p !== void 0)
        return p.exports;
      var h = w[a] = { id: a, exports: {} };
      return m[a](h, h.exports, f), h.exports;
    }
    f.n = (a) => {
      var p = a && a.__esModule ? () => a.default : () => a;
      return f.d(p, { a: p }), p;
    }, f.d = (a, p) => {
      for (var h in p)
        f.o(p, h) && !f.o(a, h) && Object.defineProperty(a, h, { enumerable: !0, get: p[h] });
    }, f.g = function() {
      if (typeof globalThis == "object")
        return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object")
          return window;
      }
    }(), f.o = (a, p) => Object.prototype.hasOwnProperty.call(a, p), f.r = (a) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
    }, f.nc = void 0;
    var C = {};
    return (() => {
      f.r(C), f.d(C, { DefaultSplitter: () => ce, Split: () => ct });
      var a = f(359), p = f(701), h = f.n(p), y = f(236), _ = f.n(y), b = f(80), c = f.n(b), A = f(850), x = f.n(A), z = f(182), q = f.n(z), V = f(213), E = f.n(V), Z = f(58), G = {};
      G.styleTagTransform = E(), G.setAttributes = x(), G.insert = c().bind(null, "head"), G.domAPI = _(), G.insertStyleElement = q(), h()(Z.Z, G), Z.Z && Z.Z.locals && Z.Z.locals;
      const te = (s) => (s % 2 == 0 ? 2 : 3) + "px", ce = (s) => {
        const { dragging: o, pixelSize: l, color: u = "silver", hoverColor: g = "gray", dragColor: S = "black" } = s, D = { "--default-splitter-line-margin": (I = l, `${Math.max(0, Math.floor(I / 2) - 1)}px`), "--default-splitter-line-size": te(l), "--default-splitter-line-color": o ? S : u, "--default-splitter-line-hover-color": o ? S : g };
        var I;
        return a.createElement("div", { className: "default-splitter", style: D }, a.createElement("div", { className: "line" }));
      };
      function Ae() {
        return Ae = Object.assign ? Object.assign.bind() : function(s) {
          for (var o = 1; o < arguments.length; o++) {
            var l = arguments[o];
            for (var u in l)
              Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
          }
          return s;
        }, Ae.apply(this, arguments);
      }
      function ye(s, o) {
        return ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
          return l.__proto__ = u, l;
        }, ye(s, o);
      }
      var Xe = f(652), J = f.n(Xe), Se = function() {
        if (typeof Map < "u")
          return Map;
        function s(o, l) {
          var u = -1;
          return o.some(function(g, S) {
            return g[0] === l && (u = S, !0);
          }), u;
        }
        return function() {
          function o() {
            this.__entries__ = [];
          }
          return Object.defineProperty(o.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), o.prototype.get = function(l) {
            var u = s(this.__entries__, l), g = this.__entries__[u];
            return g && g[1];
          }, o.prototype.set = function(l, u) {
            var g = s(this.__entries__, l);
            ~g ? this.__entries__[g][1] = u : this.__entries__.push([l, u]);
          }, o.prototype.delete = function(l) {
            var u = this.__entries__, g = s(u, l);
            ~g && u.splice(g, 1);
          }, o.prototype.has = function(l) {
            return !!~s(this.__entries__, l);
          }, o.prototype.clear = function() {
            this.__entries__.splice(0);
          }, o.prototype.forEach = function(l, u) {
            u === void 0 && (u = null);
            for (var g = 0, S = this.__entries__; g < S.length; g++) {
              var D = S[g];
              l.call(u, D[1], D[0]);
            }
          }, o;
        }();
      }(), _e = typeof window < "u" && typeof document < "u" && window.document === document, de = f.g !== void 0 && f.g.Math === Math ? f.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), Je = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(de) : function(s) {
        return setTimeout(function() {
          return s(Date.now());
        }, 1e3 / 60);
      }, Qe = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ke = typeof MutationObserver < "u", et = function() {
        function s() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(o, l) {
            var u = !1, g = !1, S = 0;
            function D() {
              u && (u = !1, o()), g && v();
            }
            function I() {
              Je(D);
            }
            function v() {
              var M = Date.now();
              if (u) {
                if (M - S < 2)
                  return;
                g = !0;
              } else
                u = !0, g = !1, setTimeout(I, 20);
              S = M;
            }
            return v;
          }(this.refresh.bind(this));
        }
        return s.prototype.addObserver = function(o) {
          ~this.observers_.indexOf(o) || this.observers_.push(o), this.connected_ || this.connect_();
        }, s.prototype.removeObserver = function(o) {
          var l = this.observers_, u = l.indexOf(o);
          ~u && l.splice(u, 1), !l.length && this.connected_ && this.disconnect_();
        }, s.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, s.prototype.updateObservers_ = function() {
          var o = this.observers_.filter(function(l) {
            return l.gatherActive(), l.hasActive();
          });
          return o.forEach(function(l) {
            return l.broadcastActive();
          }), o.length > 0;
        }, s.prototype.connect_ = function() {
          _e && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ke ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, s.prototype.disconnect_ = function() {
          _e && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, s.prototype.onTransitionEnd_ = function(o) {
          var l = o.propertyName, u = l === void 0 ? "" : l;
          Qe.some(function(g) {
            return !!~u.indexOf(g);
          }) && this.refresh();
        }, s.getInstance = function() {
          return this.instance_ || (this.instance_ = new s()), this.instance_;
        }, s.instance_ = null, s;
      }(), Te = function(s, o) {
        for (var l = 0, u = Object.keys(o); l < u.length; l++) {
          var g = u[l];
          Object.defineProperty(s, g, { value: o[g], enumerable: !1, writable: !1, configurable: !0 });
        }
        return s;
      }, ne = function(s) {
        return s && s.ownerDocument && s.ownerDocument.defaultView || de;
      }, De = pe(0, 0, 0, 0);
      function ue(s) {
        return parseFloat(s) || 0;
      }
      function Oe(s) {
        for (var o = [], l = 1; l < arguments.length; l++)
          o[l - 1] = arguments[l];
        return o.reduce(function(u, g) {
          return u + ue(s["border-" + g + "-width"]);
        }, 0);
      }
      var tt = typeof SVGGraphicsElement < "u" ? function(s) {
        return s instanceof ne(s).SVGGraphicsElement;
      } : function(s) {
        return s instanceof ne(s).SVGElement && typeof s.getBBox == "function";
      };
      function rt(s) {
        return _e ? tt(s) ? function(o) {
          var l = o.getBBox();
          return pe(0, 0, l.width, l.height);
        }(s) : function(o) {
          var l = o.clientWidth, u = o.clientHeight;
          if (!l && !u)
            return De;
          var g = ne(o).getComputedStyle(o), S = function(F) {
            for (var k = {}, K = 0, Q = ["top", "right", "bottom", "left"]; K < Q.length; K++) {
              var he = Q[K], oe = F["padding-" + he];
              k[he] = ue(oe);
            }
            return k;
          }(g), D = S.left + S.right, I = S.top + S.bottom, v = ue(g.width), M = ue(g.height);
          if (g.boxSizing === "border-box" && (Math.round(v + D) !== l && (v -= Oe(g, "left", "right") + D), Math.round(M + I) !== u && (M -= Oe(g, "top", "bottom") + I)), !function(F) {
            return F === ne(F).document.documentElement;
          }(o)) {
            var U = Math.round(v + D) - l, H = Math.round(M + I) - u;
            Math.abs(U) !== 1 && (v -= U), Math.abs(H) !== 1 && (M -= H);
          }
          return pe(S.left, S.top, v, M);
        }(s) : De;
      }
      function pe(s, o, l, u) {
        return { x: s, y: o, width: l, height: u };
      }
      var nt = function() {
        function s(o) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = pe(0, 0, 0, 0), this.target = o;
        }
        return s.prototype.isActive = function() {
          var o = rt(this.target);
          return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
        }, s.prototype.broadcastRect = function() {
          var o = this.contentRect_;
          return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
        }, s;
      }(), it = function(s, o) {
        var l, u, g, S, D, I, v, M = (u = (l = o).x, g = l.y, S = l.width, D = l.height, I = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, v = Object.create(I.prototype), Te(v, { x: u, y: g, width: S, height: D, top: g, right: u + S, bottom: D + g, left: u }), v);
        Te(this, { target: s, contentRect: M });
      }, ot = function() {
        function s(o, l, u) {
          if (this.activeObservations_ = [], this.observations_ = new Se(), typeof o != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = o, this.controller_ = l, this.callbackCtx_ = u;
        }
        return s.prototype.observe = function(o) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(o instanceof ne(o).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var l = this.observations_;
            l.has(o) || (l.set(o, new nt(o)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, s.prototype.unobserve = function(o) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(o instanceof ne(o).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var l = this.observations_;
            l.has(o) && (l.delete(o), l.size || this.controller_.removeObserver(this));
          }
        }, s.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, s.prototype.gatherActive = function() {
          var o = this;
          this.clearActive(), this.observations_.forEach(function(l) {
            l.isActive() && o.activeObservations_.push(l);
          });
        }, s.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var o = this.callbackCtx_, l = this.activeObservations_.map(function(u) {
              return new it(u.target, u.broadcastRect());
            });
            this.callback_.call(o, l, o), this.clearActive();
          }
        }, s.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, s.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, s;
      }(), ke = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Se(), Re = function s(o) {
        if (!(this instanceof s))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var l = et.getInstance(), u = new ot(o, l, this);
        ke.set(this, u);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(s) {
        Re.prototype[s] = function() {
          var o;
          return (o = ke.get(this))[s].apply(o, arguments);
        };
      });
      const at = de.ResizeObserver !== void 0 ? de.ResizeObserver : Re;
      var st = ["client", "offset", "scroll", "bounds", "margin"];
      function qe(s) {
        var o = [];
        return st.forEach(function(l) {
          s[l] && o.push(l);
        }), o;
      }
      function Me(s, o) {
        var l = {};
        if (o.indexOf("client") > -1 && (l.client = { top: s.clientTop, left: s.clientLeft, width: s.clientWidth, height: s.clientHeight }), o.indexOf("offset") > -1 && (l.offset = { top: s.offsetTop, left: s.offsetLeft, width: s.offsetWidth, height: s.offsetHeight }), o.indexOf("scroll") > -1 && (l.scroll = { top: s.scrollTop, left: s.scrollLeft, width: s.scrollWidth, height: s.scrollHeight }), o.indexOf("bounds") > -1) {
          var u = s.getBoundingClientRect();
          l.bounds = { top: u.top, right: u.right, bottom: u.bottom, left: u.left, width: u.width, height: u.height };
        }
        if (o.indexOf("margin") > -1) {
          var g = getComputedStyle(s);
          l.margin = { top: g ? parseInt(g.marginTop) : 0, right: g ? parseInt(g.marginRight) : 0, bottom: g ? parseInt(g.marginBottom) : 0, left: g ? parseInt(g.marginLeft) : 0 };
        }
        return l;
      }
      function lt(s) {
        return s && s.ownerDocument && s.ownerDocument.defaultView || window;
      }
      var we = function(s) {
        var o, l;
        return l = o = function(u) {
          var g, S;
          function D() {
            for (var v, M = arguments.length, U = new Array(M), H = 0; H < M; H++)
              U[H] = arguments[H];
            return (v = u.call.apply(u, [this].concat(U)) || this).state = { contentRect: { entry: {}, client: {}, offset: {}, scroll: {}, bounds: {}, margin: {} } }, v._animationFrameID = null, v._resizeObserver = null, v._node = null, v._window = null, v.measure = function(F) {
              var k = Me(v._node, qe(v.props));
              F && (k.entry = F[0].contentRect), v._animationFrameID = v._window.requestAnimationFrame(function() {
                v._resizeObserver !== null && (v.setState({ contentRect: k }), typeof v.props.onResize == "function" && v.props.onResize(k));
              });
            }, v._handleRef = function(F) {
              v._resizeObserver !== null && v._node !== null && v._resizeObserver.unobserve(v._node), v._node = F, v._window = lt(v._node);
              var k = v.props.innerRef;
              k && (typeof k == "function" ? k(v._node) : k.current = v._node), v._resizeObserver !== null && v._node !== null && v._resizeObserver.observe(v._node);
            }, v;
          }
          S = u, (g = D).prototype = Object.create(S.prototype), g.prototype.constructor = g, ye(g, S);
          var I = D.prototype;
          return I.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new at(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Me(this._node, qe(this.props))));
          }, I.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, I.render = function() {
            var v = this.props, M = (v.innerRef, v.onResize, function(U, H) {
              if (U == null)
                return {};
              var F, k, K = {}, Q = Object.keys(U);
              for (k = 0; k < Q.length; k++)
                F = Q[k], H.indexOf(F) >= 0 || (K[F] = U[F]);
              return K;
            }(v, ["innerRef", "onResize"]));
            return (0, a.createElement)(s, Ae({}, M, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, D;
        }(a.Component), o.propTypes = { client: J().bool, offset: J().bool, scroll: J().bool, bounds: J().bool, margin: J().bool, innerRef: J().oneOfType([J().object, J().func]), onResize: J().func }, l;
      }(function(s) {
        var o = s.measure, l = s.measureRef, u = s.contentRect;
        return (0, s.children)({ measure: o, measureRef: l, contentRect: u });
      });
      we.displayName = "Measure", we.propTypes.children = J().func;
      const Ce = we;
      var me = f(672), ie = {};
      ie.styleTagTransform = E(), ie.setAttributes = x(), ie.insert = c().bind(null, "head"), ie.domAPI = _(), ie.insertStyleElement = q(), h()(me.Z, ie), me.Z && me.Z.locals && me.Z.locals;
      const ct = (s) => {
        const { horizontal: o = !1, initialPrimarySize: l = "50%", minPrimarySize: u = "0px", minSecondarySize: g = "0px", splitterSize: S = "7px", renderSplitter: D, resetOnDoubleClick: I = !1, defaultSplitterColors: v = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: M, onMeasuredSizesChanged: U } = s, [H, F] = a.useState({ height: 0, width: 0 }), [k, K] = a.useState({ height: 0, width: 0 }), [Q, he] = a.useState({ height: 0, width: 0 }), oe = a.useMemo(() => o ? H.height : H.width, [o, H]), fe = a.useMemo(() => o ? k.height : k.width, [o, k]), ge = a.useMemo(() => o ? Q.height : Q.width, [o, Q]), [ae, je] = a.useState(void 0), [dt, ut] = a.useState(0), [pt, mt] = a.useState(0), [Ee, Pe] = a.useState(!1);
        a.useEffect(() => {
          M && M(ae !== void 0 ? `${ae}%` : l);
        }, [ae, l]), a.useEffect(() => {
          U && U({ primary: fe, splitter: ge, secondary: oe - (fe + ge) });
        }, [o, oe, fe, ge]);
        const ht = (T) => {
          T.bounds && K({ height: T.bounds.height, width: T.bounds.width });
        }, ft = (T) => {
          T.bounds && he({ height: T.bounds.height, width: T.bounds.width });
        }, gt = (T) => {
          T.currentTarget.setPointerCapture(T.pointerId), ut(o ? T.clientY : T.clientX), mt(fe), Pe(!0);
        }, bt = (T) => {
          if (T.currentTarget.hasPointerCapture(T.pointerId)) {
            const se = o ? T.clientY : T.clientX, xt = pt + (se - dt), zt = Math.max(0, Math.min(xt, oe));
            je(zt / oe * 100);
          }
        }, vt = (T) => {
          T.currentTarget.releasePointerCapture(T.pointerId), Pe(!1);
        }, At = () => {
          I && je(void 0);
        }, be = a.Children.toArray(s.children), yt = be.length > 0 ? be[0] : a.createElement("div", null), _t = be.length > 1 ? be[1] : a.createElement("div", null), xe = { primary: ae !== void 0 ? `${ae}%` : l, minPrimary: u ?? "0px", minSecondary: g ?? "0px" }, Ie = { pixelSize: ge, horizontal: o, dragging: Ee }, wt = D ?? (() => a.createElement(ce, Object.assign({}, Ie, { color: Ee ? v.drag : v.color, hoverColor: Ee ? v.drag : v.hover }))), Ct = o ? "split-container horizontal" : "split-container vertical", Et = { "--react-split-min-primary": xe.minPrimary, "--react-split-min-secondary": xe.minSecondary, "--react-split-primary": xe.primary, "--react-split-splitter": S };
        return a.createElement(Ce, { bounds: !0, onResize: (T) => {
          T.bounds && F({ height: T.bounds.height, width: T.bounds.width });
        } }, ({ measureRef: T }) => a.createElement("div", { className: "react-split", ref: T }, a.createElement("div", { className: Ct, style: Et }, a.createElement("div", { className: "primary" }, a.createElement(Ce, { bounds: !0, onResize: ht }, ({ measureRef: se }) => a.createElement("div", { className: "full-content", ref: se }, yt))), a.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: gt, onPointerUp: vt, onPointerMove: bt, onDoubleClick: At }, a.createElement(Ce, { bounds: !0, onResize: ft }, ({ measureRef: se }) => a.createElement("div", { className: "full-content", ref: se }, wt(Ie)))), a.createElement("div", { className: "secondary" }, a.createElement("div", { className: "full-content" }, _t)))));
      };
    })(), C;
  })());
})(He);
var Yt = He.exports;
const $t = ({
  children: r,
  ...n
}) => /* @__PURE__ */ e(Yt.Split, { defaultSplitterColors: {
  color: "#e5e7eb",
  hover: "#d1d5db",
  drag: "#9ca3af"
}, splitterSize: "4px", renderSplitter: ({
  horizontal: t,
  dragging: m
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
}, m && {
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}] }), ...n, children: r });
var Ve = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "pencil", m = 512, w = 512, f = [9999, 61504, "pencil-alt"], C = "f303", a = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      m,
      w,
      f,
      C,
      a
    ]
  }, r.faPencil = r.definition, r.prefix = n, r.iconName = t, r.width = m, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(Ve);
var le = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "circle", m = 512, w = 512, f = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], C = "f111", a = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      m,
      w,
      f,
      C,
      a
    ]
  }, r.faCircle = r.definition, r.prefix = n, r.iconName = t, r.width = m, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(le);
var Ge = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "lock", m = 448, w = 512, f = [128274], C = "f023", a = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      m,
      w,
      f,
      C,
      a
    ]
  }, r.faLock = r.definition, r.prefix = n, r.iconName = t, r.width = m, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(Ge);
var Ue = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "far", t = "clock", m = 512, w = 512, f = [128339, "clock-four"], C = "f017", a = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      m,
      w,
      f,
      C,
      a
    ]
  }, r.faClock = r.definition, r.prefix = n, r.iconName = t, r.width = m, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(Ue);
const Zt = ({
  status: r
}) => It(r).with(P.DONE, () => /* @__PURE__ */ e(ee, { icon: Ft.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(P.ACTIVE, () => /* @__PURE__ */ e(ee, { mask: le.faCircle, icon: Pt.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(P.WAIT, () => /* @__PURE__ */ e(ee, { mask: le.faCircle, icon: Ue.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(P.LOADING, () => /* @__PURE__ */ e(ee, { icon: We.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(P.DISABLED, () => /* @__PURE__ */ e(ee, { mask: le.faCircle, transform: "shrink-8", icon: Ge.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(P.ERROR, () => /* @__PURE__ */ e(ee, { icon: St.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(P.EDIT, () => /* @__PURE__ */ e(ee, { mask: le.faCircle, transform: "shrink-8", icon: Ve.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), Ht = ({
  items: r,
  activeItem: n,
  className: t,
  onChange: m
}) => /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: r.map((w, f) => {
  const C = (n == null ? void 0 : n.id) === w.id;
  return /* @__PURE__ */ e("li", { onClick: () => w.status !== P.DISABLED ? m == null ? void 0 : m(w) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, C ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : w.status === P.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, C && jt`
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
      w.title
    ] }) }),
    /* @__PURE__ */ e(Zt, { status: w.status })
  ] }) }, w.id);
}) }) }), Vt = ({
  steps: r,
  values: n,
  mutation: t,
  stateKey: m = "state"
}) => {
  const {
    isSubmitting: w,
    steps: f,
    stepFormRef: C,
    setActiveStepStatus: a,
    getNextButtonProps: p,
    getPrevButtonProps: h,
    setActiveStep: y,
    activeStepIndex: _,
    activeStep: b
  } = Wt({
    stepsDefinition: r,
    values: n,
    stateKey: m
  }), {
    Component: c
  } = b;
  return /* @__PURE__ */ e(Nt, { value: {
    activeStep: b,
    mutation: t,
    stepFormRef: C,
    stateKey: m,
    values: n,
    setActiveStepStatus: a
  }, children: /* @__PURE__ */ e(qt, { bbar: [/* @__PURE__ */ e(Fe, { icon: Ze.faArrowLeft, ...h(), children: "Назад" }, "previous"), /* @__PURE__ */ B(Fe, { ...p(), variant: "contained", color: "success", children: [
    w && /* @__PURE__ */ e(ee, { icon: We.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next")], children: /* @__PURE__ */ B($t, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ e(Ht, { activeItem: b, onChange: y, items: f }) }),
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
        _ + 1,
        ". ",
        b == null ? void 0 : b.title
      ] }),
      /* @__PURE__ */ e("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ e(c, { defaultValues: n }) })
    ] })
  ] }) }) });
}, Gt = i.object({
  partner_id: i.string({
    required_error: "Выберите организацию",
    coerce: !0
  }),
  name: i.string({
    required_error: "Заполните наименование"
  }).trim().min(1, "Заполните наименование"),
  program_type_id: i.coerce.number({
    required_error: "Выберите тип программы",
    invalid_type_error: "Выберите тип программы"
  }).positive({
    message: "Выберите тип программы"
  }),
  program_level_id: i.string({
    required_error: "Выберите уровень программы",
    invalid_type_error: "Выберите уровень программы"
  }),
  section_id: i.string({
    required_error: "Выберите направленность",
    invalid_type_error: "Выберите направленность"
  }).optional(),
  year_created: i.string({
    required_error: "Выберите год создания"
  }).min(4, "Минимум 4 цифры").max(4, "Максимум 4 цифры").refine((r) => {
    const n = Number(r);
    return isNaN(n) ? !1 : n >= 1900 && n <= (/* @__PURE__ */ new Date()).getFullYear();
  }, "Введите валидный год"),
  city_created: i.string({
    required_error: "Выберите город создания"
  })
}).required(), Ut = ({
  defaultValues: r
}) => {
  const n = re({
    schema: Gt,
    defaultValues: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { control: n.control, name: "name", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "partner_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(Tt, { ...t, placeholder: "Выберите организацию", label: "Организация" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "program_type_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип программы", ...t, dictionary: "navProgramType", filterOptions: (m) => m.filter(({
      id: w
    }) => w === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "section_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(Dt, { label: "Направленность", placeholder: "Выберите направленность", ...t }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "program_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Уровень", css: {
      width: "100%"
    }, ...t, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "year_created", render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...t }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "city_created", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...t }) })
  ] });
}, Xt = i.object({
  protocol_number: i.string().optional(),
  protocol_date: i.string().optional(),
  decree_number: i.string().optional(),
  decree_date: i.string().optional(),
  authors: i.string().optional(),
  comment: i.string().optional()
}), Jt = ({
  defaultValues: r
}) => {
  const n = re({
    schema: Xt,
    defaultValues: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { control: n.control, name: "protocol_number", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер заседания", label: "Номер протокола заседания", helperText: "Номер протокола заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "protocol_date", render: ({
      field: t
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату заседания", label: "Дата заседания", helperText: "Дата заседания методического (педагогического совета)" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "decree_number", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { css: {
      width: "100%"
    }, ...t, placeholder: "Введите номер приказа", label: "Номер приказа", helperText: "Номер приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "decree_date", render: ({
      field: t
    }) => /* @__PURE__ */ e(ve, { css: {
      width: "100%"
    }, ...t, placeholder: "Выберите дату приказа", label: "Дата приказа", helperText: "Дата приказа по организации об утверждении программы" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "authors", render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { css: {
      width: "100%"
    }, ...t, label: "Авторы", placeholder: "Введите авторов", helperText: "ФИО авторов и их должности" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "comment", render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { css: {
      width: "100%"
    }, ...t, label: "Комментарий", placeholder: "Введите комментарии" }) })
  ] });
}, Qt = i.object({
  min_age: i.coerce.number().optional(),
  max_age: i.coerce.number().optional(),
  competence_level_id: i.number().nullish(),
  program_volume: i.coerce.number().optional(),
  program_duration: i.coerce.number().optional(),
  edu_sessions_per_week: i.coerce.number().optional(),
  edu_sessions_per_day: i.coerce.number().optional(),
  edu_session_hour_limit: i.coerce.number().optional(),
  break_duration: i.coerce.number().optional(),
  education_form_id: i.string().nullish(),
  min_group_size: i.coerce.number().optional(),
  max_group_size: i.coerce.number().optional(),
  is_one_age_group: i.boolean().optional()
}), Kt = ({
  defaultValues: r
}) => {
  const n = re({
    schema: Qt,
    defaultValues: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(Ot, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ B("div", { css: {
      display: "flex",
      width: "20rem",
      maxWidth: "100%",
      alignItems: "center",
      gap: "1rem"
    }, children: [
      /* @__PURE__ */ e(d, { control: n.control, name: "min_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ e(W, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "от", unit: "лет" }) }),
      /* @__PURE__ */ e("div", { children: "-" }),
      /* @__PURE__ */ e(d, { control: n.control, name: "max_age", css: {
        width: "10rem",
        maxWidth: "100%"
      }, render: ({
        field: t
      }) => /* @__PURE__ */ e(W, { ...t, css: {
        flex: "1 1 0%"
      }, placeholder: "до", unit: "лет" }) })
    ] }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "competence_level_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "programDocCompetences", ...t, label: "Требования к уровню подготовки" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "program_volume", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Объем программы", placeholder: "Введите объем программы", unit: "часов" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "program_duration", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Общая продолжительность", helperText: "Общая продолжительность образовательного процесса", unit: "месяцев" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "edu_sessions_per_week", render: ({
      field: t
    }) => /* @__PURE__ */ e(
      W,
      {
        ...t,
        css: {
          width: "20rem",
          maxWidth: "100%"
        },
        allowFloat: !1,
        label: "Количество занятий в неделю"
      }
    ) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "edu_sessions_per_day", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность занятия", unit: "ак. часов" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "edu_session_hour_limit", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность ак. часа", unit: "мин" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "break_duration", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Продолжительность перерыва", unit: "мин" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "education_form_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "educationForm", ...t, label: "Форма обучения" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "min_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Минимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "max_group_size", render: ({
      field: t
    }) => /* @__PURE__ */ e(W, { ...t, allowFloat: !1, css: {
      width: "20rem",
      maxWidth: "100%"
    }, label: "Максимальное кол-во обучающихся в группе" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "is_one_age_group", render: ({
      field: t
    }) => /* @__PURE__ */ e(Le, { ...t, label: "Группа одного возраста?" }) })
  ] });
}, er = i.object({
  explanatory_note: i.string().nullish(),
  program_relevance: i.string().nullish(),
  pedagogical_expediency: i.string().nullish(),
  distinctive_features: i.string().nullish(),
  actual: i.string().nullish()
}), tr = ({
  defaultValues: r
}) => {
  const n = re({
    schema: er,
    defaultValues: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { control: n.control, name: "explanatory_note", render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Пояснительная записка", placeholder: "Введите пояснительную записку", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "program_relevance", render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Актуальность программы", placeholder: "Введите актуальность программы", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "pedagogical_expediency", render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Педагогическая целесообразность", placeholder: "Введите педагогическую целесообразность", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "distinctive_features", render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Отличительные особенности", placeholder: "Введите отличительные особенности", css: {
      width: "100%"
    }, ...t }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "actual", render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Новизна", placeholder: "Введите новизну", css: {
      width: "100%"
    }, ...t }) })
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
const rr = () => {
  const r = L("/api/rest/program-doc-results"), n = N({
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
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "category_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { dictionary: "programDocCategories", label: "Категория", placeholder: "Выберите категорию", ...t }) }),
    /* @__PURE__ */ e(d, { name: "title", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, nr = Ye({
  url: "/api/rest/program-doc-results",
  displayField: "title"
}), ir = i.object({
  results: i.array(i.string())
}), or = () => {
  const r = re({
    schema: ir
  });
  return /* @__PURE__ */ B("div", { children: [
    /* @__PURE__ */ e(d, { name: "results", control: r.control, render: ({
      field: n
    }) => /* @__PURE__ */ e(nr, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...n }) }),
    /* @__PURE__ */ e(rr, {})
  ] });
}, ar = i.object({
  title: i.string({
    required_error: "Введите наименование"
  })
}).required({
  title: !0
}), sr = () => {
  const r = L("/api/rest/program-doc-objectives"), n = N({
    mutation: r,
    schema: ar
  });
  return /* @__PURE__ */ B(R, { css: {
    marginTop: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderWidth: "1px",
    padding: "0.5rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "title", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Наименование", placeholder: "Введите наименование задачи", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, lr = Ye({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), cr = i.object({
  mission: i.string({
    required_error: "Заполните цель/миссию"
  }),
  goal: i.string({
    required_error: "Заполните цель"
  }),
  objectives: i.array(i.string())
}).required({
  goal: !0
}), dr = () => {
  const r = re({
    schema: cr
  });
  return /* @__PURE__ */ B("div", { children: [
    /* @__PURE__ */ B(R, { css: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }, form: r, children: [
      /* @__PURE__ */ e(d, { name: "mission", control: r.control, render: ({
        field: n
      }) => /* @__PURE__ */ e(O, { label: "Стратегическая цель / миссия", placeholder: "Введите стратегическую цель или миссию", ...n }) }),
      /* @__PURE__ */ e(d, { name: "goal", control: r.control, render: ({
        field: n
      }) => /* @__PURE__ */ e(O, { label: "Цель программы", placeholder: "Введите цель программы", ...n }) }),
      /* @__PURE__ */ e(d, { name: "objectives", control: r.control, render: ({
        field: n
      }) => /* @__PURE__ */ e(lr, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...n }) })
    ] }),
    /* @__PURE__ */ e(sr, {})
  ] });
}, ur = i.object({
  theme: i.string({
    required_error: "Заполните тему"
  }),
  theory: i.string().optional(),
  theory_volume: i.number().optional(),
  practice: i.string().optional(),
  practice_volume: i.number().optional(),
  sort_index: i.number(),
  doc_id: i.string()
}), pr = ({
  doc_id: r
}) => {
  const n = L("/api/rest/program-doc-plans"), t = N({
    schema: ur,
    mutation: n,
    defaultValues: {
      doc_id: r,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(d, { name: "theme", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(O, { label: "Тема", placeholder: "Введите тему", ...m }) }),
    /* @__PURE__ */ e(d, { name: "theory", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(O, { label: "Теория", placeholder: "Введите теорию", ...m }) }),
    /* @__PURE__ */ e(d, { name: "theory_volume", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(W, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...m }) }),
    /* @__PURE__ */ e(d, { name: "practice", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(O, { label: "Практика", placeholder: "Введите практику", ...m }) }),
    /* @__PURE__ */ e(d, { name: "practice_volume", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(W, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...m }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, mr = () => {
  const {
    params: {
      id: r
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(pr, { doc_id: r }) });
}, hr = i.object({
  control_type_id: i.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  control_type_id: !0,
  description: !0
}), fr = () => {
  const r = L("/api/rest/program-doc-forms"), n = N({
    schema: hr,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "control_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип формы аттестации", placeholder: "Выберите тип формы аттестации", dictionary: "programDocFormControlTypes", ...t }) }),
    /* @__PURE__ */ e(d, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, gr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(fr, {}) }), br = i.object({
  criterion_type_id: i.number({
    required_error: "Заполните тип критерия"
  }),
  description: i.string({
    required_error: "Заполните описание критерия"
  })
}).required({
  criterion_type_id: !0
}), vr = () => {
  const r = L("/api/rest/program-doc-criteria"), n = N({
    schema: br,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "criterion_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип критерия", placeholder: "Выберите тип критерия", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(d, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Ar = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(vr, {}) }), yr = i.object({
  method_id: i.number({
    required_error: "Заполните метод"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  method_id: !0,
  description: !0
}), _r = () => {
  const r = L("/api/rest/program-doc-fixations"), n = N({
    mutation: r,
    schema: yr
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "method_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Метод", placeholder: "Выберите метод", dictionary: "programDocMethodTypes", ...t }) }),
    /* @__PURE__ */ e(d, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, wr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(_r, {}) }), Cr = i.object({
  base_knowledge: i.string({
    required_error: "Заполните базовые знания"
  }),
  material: i.string({
    required_error: "Заполните материалы"
  })
}).required({
  base_knowledge: !0,
  material: !0
}), Er = () => {
  const r = L("/api/rest/program-doc-materials"), n = N({
    schema: Cr,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "base_knowledge", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Базовые знания", placeholder: "Введите базовые знания", ...t }) }),
    /* @__PURE__ */ e(d, { name: "material", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Материалы", placeholder: "Введите материалы", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, xr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Er, {}) }), zr = i.object({
  management_type_id: i.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  management_type_id: !0
}), Br = () => {
  const r = L("/api/rest/program-doc-managements"), n = N({
    schema: zr,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "management_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип организации образовательной деятельности", placeholder: "Выберите тип организации образовательной деятельности", dictionary: "programDocManagementTypes", ...t }) }),
    /* @__PURE__ */ e(d, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Sr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Br, {}) }), Tr = i.object({
  indoctrination_type_id: i.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  indoctrination_type_id: !0
}), Dr = () => {
  const r = L("/api/rest/program-doc-indoctrinations"), n = N({
    schema: Tr,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "indoctrination_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип воспитательной деятельности", placeholder: "Выберите тип воспитательной деятельности", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(d, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Наименование воспитательной деятельности", placeholder: "Введите наименование воспитательной деятельности", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Or = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Dr, {}) }), kr = i.object({
  development_type_id: i.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  development_type_id: !0
}), Rr = () => {
  const r = L("/api/rest/program-doc-developments"), n = N({
    schema: kr,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "development_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип развивающей деятельности", placeholder: "Выберите тип развивающей деятельности", dictionary: "programDocCriteriaTypes", ...t }) }),
    /* @__PURE__ */ e(d, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Наименование развивающей деятельности", placeholder: "Введите наименование развивающей деятельности", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, qr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Rr, {}) }), Mr = () => {
  const r = re({
    schema: i.object({
      staff_description: i.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ e(R, { tw: "flex flex-col gap-4", form: r, children: /* @__PURE__ */ e(d, { control: r.control, name: "staff_description", render: ({
    field: n
  }) => /* @__PURE__ */ e(Y, { tw: "w-full", ...n, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, jr = i.object({
  inventory_type_id: i.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  inventory_type_id: !0,
  description: !0
}), Pr = () => {
  const r = L("/api/rest/program-doc-inventories"), n = N({
    schema: jr,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "inventory_type_id", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(X, { label: "Тип материально-технического обеспечения", placeholder: "Выберите тип материально-технического обеспечения", dictionary: "programDocInventoryTypes", ...t }) }),
    /* @__PURE__ */ e(d, { name: "description", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(Y, { label: "Описание", placeholder: "Введите описание", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Ir = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Pr, {}) }), Fr = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }),
  publisher: i.string().optional(),
  publish_year: i.number().optional(),
  isbn: i.string().optional()
}).required({
  title: !0
}), Wr = () => {
  const r = L("/api/rest/program-doc-information"), n = N({
    schema: Fr,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "authors", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Авторы", placeholder: "Введите авторов", ...t }) }),
    /* @__PURE__ */ e(d, { name: "title", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(d, { name: "publisher", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Издательство", placeholder: "Введите издательство", ...t }) }),
    /* @__PURE__ */ e(d, { name: "publish_year", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...t }) }),
    /* @__PURE__ */ e(d, { name: "isbn", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "ISBN", placeholder: "Выберите ISBN", helperText: "Международный стандартный книжный номер (ISBN)", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Nr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Wr, {}) }), Lr = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }),
  publisher: i.string().optional(),
  publish_year: i.number().optional()
}).required({
  title: !0
}), Yr = () => {
  const r = L("/api/rest/program-doc-books"), n = N({
    schema: Lr,
    mutation: r
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(d, { name: "authors", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Авторы", placeholder: "Введите авторов", ...t }) }),
    /* @__PURE__ */ e(d, { name: "title", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Наименование", placeholder: "Введите наименование", ...t }) }),
    /* @__PURE__ */ e(d, { name: "publisher", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(O, { label: "Издательство", placeholder: "Введите издательство", ...t }) }),
    /* @__PURE__ */ e(d, { name: "publish_year", control: n.control, render: ({
      field: t
    }) => /* @__PURE__ */ e(ze, { label: "Год издательства", placeholder: "Выберите год издательства", ...t }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, $r = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Yr, {}) }), Zr = i.object({
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
}), Hr = ({
  doc_id: r
}) => {
  const n = L("/api/rest/program-doc-schedules"), t = N({
    schema: Zr,
    mutation: n,
    defaultValues: {
      doc_id: r
    }
  });
  return /* @__PURE__ */ B(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(d, { name: "number_year", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(W, { label: "Год обучения", helperText: "Год обучения (по счету)", placeholder: "Введите год обучения", ...m }) }),
    /* @__PURE__ */ e(d, { name: "date_start", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(ve, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...m }) }),
    /* @__PURE__ */ e(d, { name: "date_end", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(ve, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...m }) }),
    /* @__PURE__ */ e(d, { name: "edu_week_count", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(W, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...m }) }),
    /* @__PURE__ */ e(d, { name: "is_vacations", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(Le, { label: "Есть каникулы?", ...m }) }),
    /* @__PURE__ */ e(d, { name: "edu_sessions_per_week", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(W, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...m }) }),
    /* @__PURE__ */ e(d, { name: "edu_sessions_per_day", control: t.control, render: ({
      field: m
    }) => /* @__PURE__ */ e(W, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...m }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, Vr = () => {
  const {
    params: {
      id: r
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Hr, { doc_id: r }) });
}, Gr = [{
  id: "general",
  title: "Основное",
  Component: Ut
}, {
  id: "params",
  title: "Параметры",
  Component: Kt
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: tr
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: or
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: dr
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: mr
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: gr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: Ar
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: wr
}, {
  id: "materials",
  title: "Методические материалы",
  Component: xr
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: Sr
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: Or
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: qr
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: Mr
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: Ir
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: Nr
}, {
  title: "Список литературы",
  id: "books",
  Component: $r
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: Vr
}, {
  id: "description",
  title: "Утверждение",
  Component: Jt
}], Ur = i.object({
  min_age: i.coerce.number().nullable(),
  max_age: i.coerce.number().nullable(),
  program_volume: i.coerce.number().nullable(),
  program_duration: i.coerce.number().nullable(),
  edu_sessions_per_week: i.coerce.number().nullable(),
  edu_sessions_per_day: i.coerce.number().nullable(),
  edu_session_hour_limit: i.coerce.number().nullable(),
  break_duration: i.coerce.number().nullable(),
  min_group_size: i.coerce.number().nullable(),
  max_group_size: i.coerce.number().nullable(),
  competence_level_id: i.coerce.number().nullable()
}).passthrough(), Xr = i.object({
  data: i.array(Ur).transform((r) => r[0])
}).transform((r) => r.data), sn = () => {
  const {
    params: {
      id: r
    },
    setTitle: n
  } = Be(), t = kt(), m = Mt(`/api/rest/program-docs/${r}`, {
    schema: Xr,
    refetchOnWindowFocus: !1
  }), w = L("PUT", `/api/rest/program-docs/${r}`, {
    syncQueryCache: !0,
    onSuccess: () => {
      t("/api/rest/program-docs");
    }
  });
  return j.useEffect(() => {
    n(`Конструктор программы #${r}`);
  }, [r, n]), m.isLoading ? /* @__PURE__ */ e(Bt, { spinning: !0 }) : m.isError ? /* @__PURE__ */ e("div", {}) : /* @__PURE__ */ e(Vt, { steps: Gr, stateKey: "steps_info", mutation: w, values: m.data });
};
export {
  sn as default
};
