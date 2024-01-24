import { j as e, f as We, a as T, S as zt } from "./library-9eac01d6.js";
import { r as P, R as Ne } from "./react-181b9648.js";
import { u as N, f as Bt, C as Fe, z as i, T as O, F as d, P as Tt, D as X, R as St, Y as ze, a as R, b as ve, c as Y, N as W, L as Dt, B as Le, d as L, e as Ot } from "./RootSection-d21b9564.js";
import { l as kt, P as Rt, u as qt } from "./useDictionary-cc69974b.js";
import { a as Mt, B as $ } from "./mui-d2313b11.js";
import { f as Pt } from "./faPen-6d05924c.js";
import { N as jt, f as It } from "./index-38b3fe08.js";
import { F as ee } from "./icons-42066a3f.js";
import { u as Be } from "./useWindowController-58e97652.js";
var j = /* @__PURE__ */ ((r) => (r.DONE = "done", r.ACTIVE = "active", r.WAIT = "wait", r.DISABLED = "disabled", r.LOADING = "loading", r.ERROR = "error", r.EDIT = "edit", r))(j || {});
const Ft = ({
  stepsDefinition: r,
  values: n,
  stateKey: t
}) => {
  const [h, w] = P.useState(!1), [f, C] = P.useState({});
  P.useEffect(() => {
    n && t in n && n[t] && C(n[t]);
  }, [n]);
  const a = P.useMemo(() => r.map((z) => ({
    ...z,
    status: f[z.id] ?? j.WAIT
  })), [r, f]), [p, m] = P.useState(a[0]), _ = P.useRef(null), y = P.useMemo(() => a.findIndex((z) => z.id === (p == null ? void 0 : p.id)) || 0, [p]), b = P.useCallback((z) => {
    C((q) => ({
      ...q,
      [p.id]: q[p.id] === j.ERROR && z === j.EDIT ? j.ERROR : z
    }));
  }, [p, C]), c = y === a.length - 1, A = P.useCallback(async () => {
    if (!c)
      try {
        w(!0), b(j.LOADING), _.current && await _.current.save(), m(a[y + 1]);
      } catch {
        b(j.ERROR);
      } finally {
        w(!1);
      }
  }, [y, c]), x = P.useCallback(() => {
    y !== 0 && m(a[y - 1]);
  }, [y]);
  return {
    steps: a,
    stepFormRef: _,
    isSubmitting: h,
    setActiveStepStatus: b,
    getNextButtonProps: () => ({
      onClick: A,
      disabled: c || h
    }),
    activeStep: p,
    activeStepIndex: y,
    setActiveStep: m,
    getPrevButtonProps: () => ({
      onClick: x,
      disabled: y === 0
    })
  };
}, Ye = Ne.createContext(null), Wt = ({
  children: r,
  value: n
}) => {
  const [t, h] = Ne.useState({}), {
    activeStep: {
      id: w
    }
  } = n, f = P.useCallback(() => t[w] || {}, [w, t]), C = P.useCallback((a) => h((p) => ({
    ...p,
    [w]: {
      ...p[w],
      ...a
    }
  })), [w, t, h]);
  return /* @__PURE__ */ e(Ye.Provider, { value: {
    ...n,
    getStepState: f,
    setStepState: C
  }, children: r });
};
function Nt() {
  const r = P.useContext(Ye);
  if (!r)
    throw new Error("useStepsContext must be used within a StepsContextProvider");
  return r;
}
const oe = ({
  defaultValues: r = {},
  ...n
}) => {
  const {
    stepFormRef: t,
    activeStep: h,
    stateKey: w,
    getStepState: f,
    setStepState: C,
    values: a,
    mutation: p,
    setActiveStepStatus: m
  } = Nt(), _ = f(), {
    errors: y,
    fields: b
  } = _, c = N({
    mutation: p,
    errors: y,
    defaultValues: b || r,
    transformSendData: (A) => ({
      ...A,
      [w]: {
        ...a ? a[w] : {},
        [h.id]: j.DONE
      }
    }),
    ...n
  });
  return P.useEffect(() => {
    C({
      errors: c.formState.errors
    });
  }, [c.formState.errors]), P.useEffect(() => {
    kt.isEqual(c.getValues(), r) || (m(j.EDIT), C({
      fields: c.getValues()
    }));
  }, [h, JSON.stringify(c.formState.dirtyFields)]), P.useImperativeHandle(t, () => ({
    save: async () => {
      await c.submit(), C({
        fields: void 0
      });
    }
  })), c;
};
var $e = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "arrow-left", h = 448, w = 512, f = [8592], C = "f060", a = "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      h,
      w,
      f,
      C,
      a
    ]
  }, r.faArrowLeft = r.definition, r.prefix = n, r.iconName = t, r.width = h, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})($e);
var Ze = { exports: {} };
(function(r, n) {
  (function(t, h) {
    r.exports = h(P);
  })(self, (t) => (() => {
    var h = { 58: (a, p, m) => {
      m.d(p, { Z: () => A });
      var _ = m(864), y = m.n(_), b = m(352), c = m.n(b)()(y());
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
    }, 672: (a, p, m) => {
      m.d(p, { Z: () => A });
      var _ = m(864), y = m.n(_), b = m(352), c = m.n(b)()(y());
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
        var m = [];
        return m.toString = function() {
          return this.map(function(_) {
            var y = "", b = _[5] !== void 0;
            return _[4] && (y += "@supports (".concat(_[4], ") {")), _[2] && (y += "@media ".concat(_[2], " {")), b && (y += "@layer".concat(_[5].length > 0 ? " ".concat(_[5]) : "", " {")), y += p(_), b && (y += "}"), _[2] && (y += "}"), _[4] && (y += "}"), y;
          }).join("");
        }, m.i = function(_, y, b, c, A) {
          typeof _ == "string" && (_ = [[null, _, void 0]]);
          var x = {};
          if (b)
            for (var z = 0; z < this.length; z++) {
              var q = this[z][0];
              q != null && (x[q] = !0);
            }
          for (var H = 0; H < _.length; H++) {
            var E = [].concat(_[H]);
            b && x[E[0]] || (A !== void 0 && (E[5] === void 0 || (E[1] = "@layer".concat(E[5].length > 0 ? " ".concat(E[5]) : "", " {").concat(E[1], "}")), E[5] = A), y && (E[2] && (E[1] = "@media ".concat(E[2], " {").concat(E[1], "}")), E[2] = y), c && (E[4] ? (E[1] = "@supports (".concat(E[4], ") {").concat(E[1], "}"), E[4] = c) : E[4] = "".concat(c)), m.push(E));
          }
        }, m;
      };
    }, 864: (a) => {
      a.exports = function(p) {
        var m = p[1], _ = p[3];
        if (!_)
          return m;
        if (typeof btoa == "function") {
          var y = btoa(unescape(encodeURIComponent(JSON.stringify(_)))), b = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(y), c = "/*# ".concat(b, " */");
          return [m].concat([c]).join(`
`);
        }
        return [m].join(`
`);
      };
    }, 372: (a, p, m) => {
      var _ = m(567);
      function y() {
      }
      function b() {
      }
      b.resetWarningCache = y, a.exports = function() {
        function c(z, q, H, E, Z, G) {
          if (G !== _) {
            var te = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw te.name = "Invariant Violation", te;
          }
        }
        function A() {
          return c;
        }
        c.isRequired = c;
        var x = { array: c, bigint: c, bool: c, func: c, number: c, object: c, string: c, symbol: c, any: c, arrayOf: A, element: c, elementType: c, instanceOf: A, node: c, objectOf: A, oneOf: A, oneOfType: A, shape: A, exact: A, checkPropTypes: b, resetWarningCache: y };
        return x.PropTypes = x, x;
      };
    }, 652: (a, p, m) => {
      a.exports = m(372)();
    }, 567: (a) => {
      a.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 701: (a) => {
      var p = [];
      function m(b) {
        for (var c = -1, A = 0; A < p.length; A++)
          if (p[A].identifier === b) {
            c = A;
            break;
          }
        return c;
      }
      function _(b, c) {
        for (var A = {}, x = [], z = 0; z < b.length; z++) {
          var q = b[z], H = c.base ? q[0] + c.base : q[0], E = A[H] || 0, Z = "".concat(H, " ").concat(E);
          A[H] = E + 1;
          var G = m(Z), te = { css: q[1], media: q[2], sourceMap: q[3], supports: q[4], layer: q[5] };
          if (G !== -1)
            p[G].references++, p[G].updater(te);
          else {
            var ce = y(te, c);
            c.byIndex = z, p.splice(z, 0, { identifier: Z, updater: ce, references: 1 });
          }
          x.push(Z);
        }
        return x;
      }
      function y(b, c) {
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
        var A = _(b = b || [], c = c || {});
        return function(x) {
          x = x || [];
          for (var z = 0; z < A.length; z++) {
            var q = m(A[z]);
            p[q].references--;
          }
          for (var H = _(x, c), E = 0; E < A.length; E++) {
            var Z = m(A[E]);
            p[Z].references === 0 && (p[Z].updater(), p.splice(Z, 1));
          }
          A = H;
        };
      };
    }, 80: (a) => {
      var p = {};
      a.exports = function(m, _) {
        var y = function(b) {
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
        }(m);
        if (!y)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        y.appendChild(_);
      };
    }, 182: (a) => {
      a.exports = function(p) {
        var m = document.createElement("style");
        return p.setAttributes(m, p.attributes), p.insert(m, p.options), m;
      };
    }, 850: (a, p, m) => {
      a.exports = function(_) {
        var y = m.nc;
        y && _.setAttribute("nonce", y);
      };
    }, 236: (a) => {
      a.exports = function(p) {
        var m = p.insertStyleElement(p);
        return { update: function(_) {
          (function(y, b, c) {
            var A = "";
            c.supports && (A += "@supports (".concat(c.supports, ") {")), c.media && (A += "@media ".concat(c.media, " {"));
            var x = c.layer !== void 0;
            x && (A += "@layer".concat(c.layer.length > 0 ? " ".concat(c.layer) : "", " {")), A += c.css, x && (A += "}"), c.media && (A += "}"), c.supports && (A += "}");
            var z = c.sourceMap;
            z && typeof btoa < "u" && (A += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(z)))), " */")), b.styleTagTransform(A, y, b.options);
          })(m, p, _);
        }, remove: function() {
          (function(_) {
            if (_.parentNode === null)
              return !1;
            _.parentNode.removeChild(_);
          })(m);
        } };
      };
    }, 213: (a) => {
      a.exports = function(p, m) {
        if (m.styleSheet)
          m.styleSheet.cssText = p;
        else {
          for (; m.firstChild; )
            m.removeChild(m.firstChild);
          m.appendChild(document.createTextNode(p));
        }
      };
    }, 359: (a) => {
      a.exports = t;
    } }, w = {};
    function f(a) {
      var p = w[a];
      if (p !== void 0)
        return p.exports;
      var m = w[a] = { id: a, exports: {} };
      return h[a](m, m.exports, f), m.exports;
    }
    f.n = (a) => {
      var p = a && a.__esModule ? () => a.default : () => a;
      return f.d(p, { a: p }), p;
    }, f.d = (a, p) => {
      for (var m in p)
        f.o(p, m) && !f.o(a, m) && Object.defineProperty(a, m, { enumerable: !0, get: p[m] });
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
      f.r(C), f.d(C, { DefaultSplitter: () => ce, Split: () => st });
      var a = f(359), p = f(701), m = f.n(p), _ = f(236), y = f.n(_), b = f(80), c = f.n(b), A = f(850), x = f.n(A), z = f(182), q = f.n(z), H = f(213), E = f.n(H), Z = f(58), G = {};
      G.styleTagTransform = E(), G.setAttributes = x(), G.insert = c().bind(null, "head"), G.domAPI = y(), G.insertStyleElement = q(), m()(Z.Z, G), Z.Z && Z.Z.locals && Z.Z.locals;
      const te = (l) => (l % 2 == 0 ? 2 : 3) + "px", ce = (l) => {
        const { dragging: o, pixelSize: s, color: u = "silver", hoverColor: g = "gray", dragColor: B = "black" } = l, D = { "--default-splitter-line-margin": (I = s, `${Math.max(0, Math.floor(I / 2) - 1)}px`), "--default-splitter-line-size": te(s), "--default-splitter-line-color": o ? B : u, "--default-splitter-line-hover-color": o ? B : g };
        var I;
        return a.createElement("div", { className: "default-splitter", style: D }, a.createElement("div", { className: "line" }));
      };
      function Ae() {
        return Ae = Object.assign ? Object.assign.bind() : function(l) {
          for (var o = 1; o < arguments.length; o++) {
            var s = arguments[o];
            for (var u in s)
              Object.prototype.hasOwnProperty.call(s, u) && (l[u] = s[u]);
          }
          return l;
        }, Ae.apply(this, arguments);
      }
      function _e(l, o) {
        return _e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, u) {
          return s.__proto__ = u, s;
        }, _e(l, o);
      }
      var Ue = f(652), J = f.n(Ue), Te = function() {
        if (typeof Map < "u")
          return Map;
        function l(o, s) {
          var u = -1;
          return o.some(function(g, B) {
            return g[0] === s && (u = B, !0);
          }), u;
        }
        return function() {
          function o() {
            this.__entries__ = [];
          }
          return Object.defineProperty(o.prototype, "size", { get: function() {
            return this.__entries__.length;
          }, enumerable: !0, configurable: !0 }), o.prototype.get = function(s) {
            var u = l(this.__entries__, s), g = this.__entries__[u];
            return g && g[1];
          }, o.prototype.set = function(s, u) {
            var g = l(this.__entries__, s);
            ~g ? this.__entries__[g][1] = u : this.__entries__.push([s, u]);
          }, o.prototype.delete = function(s) {
            var u = this.__entries__, g = l(u, s);
            ~g && u.splice(g, 1);
          }, o.prototype.has = function(s) {
            return !!~l(this.__entries__, s);
          }, o.prototype.clear = function() {
            this.__entries__.splice(0);
          }, o.prototype.forEach = function(s, u) {
            u === void 0 && (u = null);
            for (var g = 0, B = this.__entries__; g < B.length; g++) {
              var D = B[g];
              s.call(u, D[1], D[0]);
            }
          }, o;
        }();
      }(), ye = typeof window < "u" && typeof document < "u" && window.document === document, de = f.g !== void 0 && f.g.Math === Math ? f.g : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")(), Xe = typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(de) : function(l) {
        return setTimeout(function() {
          return l(Date.now());
        }, 1e3 / 60);
      }, Je = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ke = typeof MutationObserver < "u", Qe = function() {
        function l() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(o, s) {
            var u = !1, g = !1, B = 0;
            function D() {
              u && (u = !1, o()), g && v();
            }
            function I() {
              Xe(D);
            }
            function v() {
              var M = Date.now();
              if (u) {
                if (M - B < 2)
                  return;
                g = !0;
              } else
                u = !0, g = !1, setTimeout(I, 20);
              B = M;
            }
            return v;
          }(this.refresh.bind(this));
        }
        return l.prototype.addObserver = function(o) {
          ~this.observers_.indexOf(o) || this.observers_.push(o), this.connected_ || this.connect_();
        }, l.prototype.removeObserver = function(o) {
          var s = this.observers_, u = s.indexOf(o);
          ~u && s.splice(u, 1), !s.length && this.connected_ && this.disconnect_();
        }, l.prototype.refresh = function() {
          this.updateObservers_() && this.refresh();
        }, l.prototype.updateObservers_ = function() {
          var o = this.observers_.filter(function(s) {
            return s.gatherActive(), s.hasActive();
          });
          return o.forEach(function(s) {
            return s.broadcastActive();
          }), o.length > 0;
        }, l.prototype.connect_ = function() {
          ye && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ke ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
        }, l.prototype.disconnect_ = function() {
          ye && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
        }, l.prototype.onTransitionEnd_ = function(o) {
          var s = o.propertyName, u = s === void 0 ? "" : s;
          Je.some(function(g) {
            return !!~u.indexOf(g);
          }) && this.refresh();
        }, l.getInstance = function() {
          return this.instance_ || (this.instance_ = new l()), this.instance_;
        }, l.instance_ = null, l;
      }(), Se = function(l, o) {
        for (var s = 0, u = Object.keys(o); s < u.length; s++) {
          var g = u[s];
          Object.defineProperty(l, g, { value: o[g], enumerable: !1, writable: !1, configurable: !0 });
        }
        return l;
      }, re = function(l) {
        return l && l.ownerDocument && l.ownerDocument.defaultView || de;
      }, De = pe(0, 0, 0, 0);
      function ue(l) {
        return parseFloat(l) || 0;
      }
      function Oe(l) {
        for (var o = [], s = 1; s < arguments.length; s++)
          o[s - 1] = arguments[s];
        return o.reduce(function(u, g) {
          return u + ue(l["border-" + g + "-width"]);
        }, 0);
      }
      var et = typeof SVGGraphicsElement < "u" ? function(l) {
        return l instanceof re(l).SVGGraphicsElement;
      } : function(l) {
        return l instanceof re(l).SVGElement && typeof l.getBBox == "function";
      };
      function tt(l) {
        return ye ? et(l) ? function(o) {
          var s = o.getBBox();
          return pe(0, 0, s.width, s.height);
        }(l) : function(o) {
          var s = o.clientWidth, u = o.clientHeight;
          if (!s && !u)
            return De;
          var g = re(o).getComputedStyle(o), B = function(F) {
            for (var k = {}, Q = 0, K = ["top", "right", "bottom", "left"]; Q < K.length; Q++) {
              var he = K[Q], ie = F["padding-" + he];
              k[he] = ue(ie);
            }
            return k;
          }(g), D = B.left + B.right, I = B.top + B.bottom, v = ue(g.width), M = ue(g.height);
          if (g.boxSizing === "border-box" && (Math.round(v + D) !== s && (v -= Oe(g, "left", "right") + D), Math.round(M + I) !== u && (M -= Oe(g, "top", "bottom") + I)), !function(F) {
            return F === re(F).document.documentElement;
          }(o)) {
            var U = Math.round(v + D) - s, V = Math.round(M + I) - u;
            Math.abs(U) !== 1 && (v -= U), Math.abs(V) !== 1 && (M -= V);
          }
          return pe(B.left, B.top, v, M);
        }(l) : De;
      }
      function pe(l, o, s, u) {
        return { x: l, y: o, width: s, height: u };
      }
      var rt = function() {
        function l(o) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = pe(0, 0, 0, 0), this.target = o;
        }
        return l.prototype.isActive = function() {
          var o = tt(this.target);
          return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
        }, l.prototype.broadcastRect = function() {
          var o = this.contentRect_;
          return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
        }, l;
      }(), nt = function(l, o) {
        var s, u, g, B, D, I, v, M = (u = (s = o).x, g = s.y, B = s.width, D = s.height, I = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, v = Object.create(I.prototype), Se(v, { x: u, y: g, width: B, height: D, top: g, right: u + B, bottom: D + g, left: u }), v);
        Se(this, { target: l, contentRect: M });
      }, it = function() {
        function l(o, s, u) {
          if (this.activeObservations_ = [], this.observations_ = new Te(), typeof o != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = o, this.controller_ = s, this.callbackCtx_ = u;
        }
        return l.prototype.observe = function(o) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(o instanceof re(o).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var s = this.observations_;
            s.has(o) || (s.set(o, new rt(o)), this.controller_.addObserver(this), this.controller_.refresh());
          }
        }, l.prototype.unobserve = function(o) {
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          if (typeof Element < "u" && Element instanceof Object) {
            if (!(o instanceof re(o).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var s = this.observations_;
            s.has(o) && (s.delete(o), s.size || this.controller_.removeObserver(this));
          }
        }, l.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
        }, l.prototype.gatherActive = function() {
          var o = this;
          this.clearActive(), this.observations_.forEach(function(s) {
            s.isActive() && o.activeObservations_.push(s);
          });
        }, l.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var o = this.callbackCtx_, s = this.activeObservations_.map(function(u) {
              return new nt(u.target, u.broadcastRect());
            });
            this.callback_.call(o, s, o), this.clearActive();
          }
        }, l.prototype.clearActive = function() {
          this.activeObservations_.splice(0);
        }, l.prototype.hasActive = function() {
          return this.activeObservations_.length > 0;
        }, l;
      }(), ke = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Te(), Re = function l(o) {
        if (!(this instanceof l))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var s = Qe.getInstance(), u = new it(o, s, this);
        ke.set(this, u);
      };
      ["observe", "unobserve", "disconnect"].forEach(function(l) {
        Re.prototype[l] = function() {
          var o;
          return (o = ke.get(this))[l].apply(o, arguments);
        };
      });
      const ot = de.ResizeObserver !== void 0 ? de.ResizeObserver : Re;
      var at = ["client", "offset", "scroll", "bounds", "margin"];
      function qe(l) {
        var o = [];
        return at.forEach(function(s) {
          l[s] && o.push(s);
        }), o;
      }
      function Me(l, o) {
        var s = {};
        if (o.indexOf("client") > -1 && (s.client = { top: l.clientTop, left: l.clientLeft, width: l.clientWidth, height: l.clientHeight }), o.indexOf("offset") > -1 && (s.offset = { top: l.offsetTop, left: l.offsetLeft, width: l.offsetWidth, height: l.offsetHeight }), o.indexOf("scroll") > -1 && (s.scroll = { top: l.scrollTop, left: l.scrollLeft, width: l.scrollWidth, height: l.scrollHeight }), o.indexOf("bounds") > -1) {
          var u = l.getBoundingClientRect();
          s.bounds = { top: u.top, right: u.right, bottom: u.bottom, left: u.left, width: u.width, height: u.height };
        }
        if (o.indexOf("margin") > -1) {
          var g = getComputedStyle(l);
          s.margin = { top: g ? parseInt(g.marginTop) : 0, right: g ? parseInt(g.marginRight) : 0, bottom: g ? parseInt(g.marginBottom) : 0, left: g ? parseInt(g.marginLeft) : 0 };
        }
        return s;
      }
      function lt(l) {
        return l && l.ownerDocument && l.ownerDocument.defaultView || window;
      }
      var we = function(l) {
        var o, s;
        return s = o = function(u) {
          var g, B;
          function D() {
            for (var v, M = arguments.length, U = new Array(M), V = 0; V < M; V++)
              U[V] = arguments[V];
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
          B = u, (g = D).prototype = Object.create(B.prototype), g.prototype.constructor = g, _e(g, B);
          var I = D.prototype;
          return I.componentDidMount = function() {
            this._resizeObserver = this._window !== null && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new ot(this.measure), this._node !== null && (this._resizeObserver.observe(this._node), typeof this.props.onResize == "function" && this.props.onResize(Me(this._node, qe(this.props))));
          }, I.componentWillUnmount = function() {
            this._window !== null && this._window.cancelAnimationFrame(this._animationFrameID), this._resizeObserver !== null && (this._resizeObserver.disconnect(), this._resizeObserver = null);
          }, I.render = function() {
            var v = this.props, M = (v.innerRef, v.onResize, function(U, V) {
              if (U == null)
                return {};
              var F, k, Q = {}, K = Object.keys(U);
              for (k = 0; k < K.length; k++)
                F = K[k], V.indexOf(F) >= 0 || (Q[F] = U[F]);
              return Q;
            }(v, ["innerRef", "onResize"]));
            return (0, a.createElement)(l, Ae({}, M, { measureRef: this._handleRef, measure: this.measure, contentRect: this.state.contentRect }));
          }, D;
        }(a.Component), o.propTypes = { client: J().bool, offset: J().bool, scroll: J().bool, bounds: J().bool, margin: J().bool, innerRef: J().oneOfType([J().object, J().func]), onResize: J().func }, s;
      }(function(l) {
        var o = l.measure, s = l.measureRef, u = l.contentRect;
        return (0, l.children)({ measure: o, measureRef: s, contentRect: u });
      });
      we.displayName = "Measure", we.propTypes.children = J().func;
      const Ce = we;
      var me = f(672), ne = {};
      ne.styleTagTransform = E(), ne.setAttributes = x(), ne.insert = c().bind(null, "head"), ne.domAPI = y(), ne.insertStyleElement = q(), m()(me.Z, ne), me.Z && me.Z.locals && me.Z.locals;
      const st = (l) => {
        const { horizontal: o = !1, initialPrimarySize: s = "50%", minPrimarySize: u = "0px", minSecondarySize: g = "0px", splitterSize: B = "7px", renderSplitter: D, resetOnDoubleClick: I = !1, defaultSplitterColors: v = { color: "silver", hover: "gray", drag: "black" }, onSplitChanged: M, onMeasuredSizesChanged: U } = l, [V, F] = a.useState({ height: 0, width: 0 }), [k, Q] = a.useState({ height: 0, width: 0 }), [K, he] = a.useState({ height: 0, width: 0 }), ie = a.useMemo(() => o ? V.height : V.width, [o, V]), fe = a.useMemo(() => o ? k.height : k.width, [o, k]), ge = a.useMemo(() => o ? K.height : K.width, [o, K]), [ae, Pe] = a.useState(void 0), [ct, dt] = a.useState(0), [ut, pt] = a.useState(0), [Ee, je] = a.useState(!1);
        a.useEffect(() => {
          M && M(ae !== void 0 ? `${ae}%` : s);
        }, [ae, s]), a.useEffect(() => {
          U && U({ primary: fe, splitter: ge, secondary: ie - (fe + ge) });
        }, [o, ie, fe, ge]);
        const mt = (S) => {
          S.bounds && Q({ height: S.bounds.height, width: S.bounds.width });
        }, ht = (S) => {
          S.bounds && he({ height: S.bounds.height, width: S.bounds.width });
        }, ft = (S) => {
          S.currentTarget.setPointerCapture(S.pointerId), dt(o ? S.clientY : S.clientX), pt(fe), je(!0);
        }, gt = (S) => {
          if (S.currentTarget.hasPointerCapture(S.pointerId)) {
            const le = o ? S.clientY : S.clientX, Et = ut + (le - ct), xt = Math.max(0, Math.min(Et, ie));
            Pe(xt / ie * 100);
          }
        }, bt = (S) => {
          S.currentTarget.releasePointerCapture(S.pointerId), je(!1);
        }, vt = () => {
          I && Pe(void 0);
        }, be = a.Children.toArray(l.children), At = be.length > 0 ? be[0] : a.createElement("div", null), _t = be.length > 1 ? be[1] : a.createElement("div", null), xe = { primary: ae !== void 0 ? `${ae}%` : s, minPrimary: u ?? "0px", minSecondary: g ?? "0px" }, Ie = { pixelSize: ge, horizontal: o, dragging: Ee }, yt = D ?? (() => a.createElement(ce, Object.assign({}, Ie, { color: Ee ? v.drag : v.color, hoverColor: Ee ? v.drag : v.hover }))), wt = o ? "split-container horizontal" : "split-container vertical", Ct = { "--react-split-min-primary": xe.minPrimary, "--react-split-min-secondary": xe.minSecondary, "--react-split-primary": xe.primary, "--react-split-splitter": B };
        return a.createElement(Ce, { bounds: !0, onResize: (S) => {
          S.bounds && F({ height: S.bounds.height, width: S.bounds.width });
        } }, ({ measureRef: S }) => a.createElement("div", { className: "react-split", ref: S }, a.createElement("div", { className: wt, style: Ct }, a.createElement("div", { className: "primary" }, a.createElement(Ce, { bounds: !0, onResize: mt }, ({ measureRef: le }) => a.createElement("div", { className: "full-content", ref: le }, At))), a.createElement("div", { className: "splitter", tabIndex: -1, onPointerDown: ft, onPointerUp: bt, onPointerMove: gt, onDoubleClick: vt }, a.createElement(Ce, { bounds: !0, onResize: ht }, ({ measureRef: le }) => a.createElement("div", { className: "full-content", ref: le }, yt(Ie)))), a.createElement("div", { className: "secondary" }, a.createElement("div", { className: "full-content" }, _t)))));
      };
    })(), C;
  })());
})(Ze);
var Lt = Ze.exports;
const Yt = ({
  children: r,
  ...n
}) => /* @__PURE__ */ e(Lt.Split, { defaultSplitterColors: {
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
}] }), ...n, children: r });
var Ve = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "pencil", h = 512, w = 512, f = [9999, 61504, "pencil-alt"], C = "f303", a = "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      h,
      w,
      f,
      C,
      a
    ]
  }, r.faPencil = r.definition, r.prefix = n, r.iconName = t, r.width = h, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(Ve);
var se = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "circle", h = 512, w = 512, f = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915], C = "f111", a = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      h,
      w,
      f,
      C,
      a
    ]
  }, r.faCircle = r.definition, r.prefix = n, r.iconName = t, r.width = h, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(se);
var He = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "fas", t = "lock", h = 448, w = 512, f = [128274], C = "f023", a = "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      h,
      w,
      f,
      C,
      a
    ]
  }, r.faLock = r.definition, r.prefix = n, r.iconName = t, r.width = h, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(He);
var Ge = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var n = "far", t = "clock", h = 512, w = 512, f = [128339, "clock-four"], C = "f017", a = "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z";
  r.definition = {
    prefix: n,
    iconName: t,
    icon: [
      h,
      w,
      f,
      C,
      a
    ]
  }, r.faClock = r.definition, r.prefix = n, r.iconName = t, r.width = h, r.height = w, r.ligatures = f, r.unicode = C, r.svgPathData = a, r.aliases = f;
})(Ge);
const $t = ({
  status: r
}) => jt(r).with(j.DONE, () => /* @__PURE__ */ e(ee, { icon: It.faCheckCircle, css: {
  "--tw-text-opacity": "1",
  color: "rgb(22 163 74 / var(--tw-text-opacity))"
}, size: "lg" })).with(j.ACTIVE, () => /* @__PURE__ */ e(ee, { mask: se.faCircle, icon: Pt.faPen, css: {
  "--tw-text-opacity": "1",
  color: "rgb(114 117 191 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(j.WAIT, () => /* @__PURE__ */ e(ee, { mask: se.faCircle, icon: Ge.faClock, css: {
  "--tw-text-opacity": "1",
  color: "rgb(234 179 8 / var(--tw-text-opacity))"
}, transform: "shrink-8", size: "lg" })).with(j.LOADING, () => /* @__PURE__ */ e(ee, { icon: We.faCircleNotch, css: {
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))"
}, spin: !0, size: "lg" })).with(j.DISABLED, () => /* @__PURE__ */ e(ee, { mask: se.faCircle, transform: "shrink-8", icon: He.faLock, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(209 213 219 / var(--tw-text-opacity))"
} })).with(j.ERROR, () => /* @__PURE__ */ e(ee, { icon: Bt.faTriangleExclamation, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
} })).with(j.EDIT, () => /* @__PURE__ */ e(ee, { mask: se.faCircle, transform: "shrink-8", icon: Ve.faPencil, size: "lg", css: {
  "--tw-text-opacity": "1",
  color: "rgb(90 88 173 / var(--tw-text-opacity))"
} })).exhaustive(), Zt = ({
  items: r,
  activeItem: n,
  className: t,
  onChange: h
}) => /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e("ul", { css: {
  display: "flex",
  userSelect: "none",
  flexDirection: "column",
  gap: "0.375rem",
  paddingLeft: "0.25rem"
}, children: r.map((w, f) => {
  const C = (n == null ? void 0 : n.id) === w.id;
  return /* @__PURE__ */ e("li", { onClick: () => w.status !== j.DISABLED ? h == null ? void 0 : h(w) : void 0, css: [{
    position: "relative",
    borderRadius: "0.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "500ms"
  }, C ? {
    backgroundColor: "rgb(229 230 244 / 0.5)",
    "--tw-text-opacity": "1",
    color: "rgb(0 0 0 / var(--tw-text-opacity))"
  } : w.status === j.DISABLED ? {
    cursor: "not-allowed"
  } : {
    cursor: "pointer",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }
  }, C && Mt`
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
      f + 1,
      ". ",
      w.title
    ] }) }),
    /* @__PURE__ */ e($t, { status: w.status })
  ] }) }, w.id);
}) }) }), Vt = ({
  steps: r,
  values: n,
  mutation: t,
  stateKey: h = "state"
}) => {
  const {
    isSubmitting: w,
    steps: f,
    stepFormRef: C,
    setActiveStepStatus: a,
    getNextButtonProps: p,
    getPrevButtonProps: m,
    setActiveStep: _,
    activeStepIndex: y,
    activeStep: b
  } = Ft({
    stepsDefinition: r,
    values: n,
    stateKey: h
  }), {
    Component: c
  } = b;
  return /* @__PURE__ */ e(Wt, { value: {
    activeStep: b,
    mutation: t,
    stepFormRef: C,
    stateKey: h,
    values: n,
    setActiveStepStatus: a
  }, children: /* @__PURE__ */ e(Rt, { bbar: [/* @__PURE__ */ e(Fe, { icon: $e.faArrowLeft, ...m(), children: "Назад" }, "previous"), /* @__PURE__ */ T(Fe, { ...p(), variant: "contained", color: "success", children: [
    w && /* @__PURE__ */ e(ee, { icon: We.faCircleNotch, spin: !0 }),
    "Сохранить"
  ] }, "next")], children: /* @__PURE__ */ T(Yt, { initialPrimarySize: "30%", minPrimarySize: "200px", css: {
    display: "flex"
  }, children: [
    /* @__PURE__ */ e("div", { css: {
      height: "100%",
      flexBasis: "33.333333%",
      overflowY: "auto",
      padding: "0.5rem"
    }, children: /* @__PURE__ */ e(Zt, { activeItem: b, onChange: _, items: f }) }),
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
        y + 1,
        ". ",
        b == null ? void 0 : b.title
      ] }),
      /* @__PURE__ */ e("div", { css: {
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }, children: /* @__PURE__ */ e(c, { defaultValues: n }) })
    ] })
  ] }) }) });
}, Ht = i.object({
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
}).required(), Gt = ({
  defaultValues: r
}) => {
  const n = oe({
    schema: Ht,
    defaultValues: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
    }) => /* @__PURE__ */ e(X, { label: "Тип программы", ...t, dictionary: "navProgramType", filterOptions: (h) => h.filter(({
      id: w
    }) => w === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(d, { control: n.control, name: "section_id", render: ({
      field: t
    }) => /* @__PURE__ */ e(St, { label: "Направленность", placeholder: "Выберите направленность", ...t }) }),
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
}, Ut = i.object({
  protocol_number: i.string().optional(),
  protocol_date: i.string().optional(),
  decree_number: i.string().optional(),
  decree_date: i.string().optional(),
  authors: i.string().optional(),
  comment: i.string().optional()
}), Xt = ({
  defaultValues: r
}) => {
  const n = oe({
    schema: Ut,
    defaultValues: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, Jt = i.object({
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
  const n = oe({
    schema: Jt,
    defaultValues: r
  });
  return /* @__PURE__ */ T(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: n, children: [
    /* @__PURE__ */ e(Dt, { label: "Возраст", helperText: "Введите минимальный и максимальный возраст", children: /* @__PURE__ */ T("div", { css: {
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
}, Qt = i.object({
  explanatory_note: i.string().nullish(),
  program_relevance: i.string().nullish(),
  pedagogical_expediency: i.string().nullish(),
  distinctive_features: i.string().nullish(),
  actual: i.string().nullish()
}), er = ({
  defaultValues: r
}) => {
  const n = oe({
    schema: Qt,
    defaultValues: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
const tr = () => {
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
  return /* @__PURE__ */ T(R, { css: {
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
}, rr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(tr, {}) }), nr = i.object({
  title: i.string({
    required_error: "Введите наименование"
  })
}).required({
  title: !0
}), ir = () => {
  const r = L("/api/rest/program-doc-objectives"), n = N({
    mutation: r,
    schema: nr
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, or = Ot({
  url: "/api/rest/program-doc-objectives",
  displayField: "title"
}), ar = i.object({
  mission: i.string({
    required_error: "Заполните цель/миссию"
  }),
  goal: i.string({
    required_error: "Заполните цель"
  }),
  objectives: i.array(i.string())
}).required({
  goal: !0
}), lr = () => {
  const r = oe({
    schema: ar
  });
  return /* @__PURE__ */ T("div", { children: [
    /* @__PURE__ */ T(R, { css: {
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
      }) => /* @__PURE__ */ e(or, { multiple: !0, label: "Задачи", placeholder: "Выберите задачу", ...n }) })
    ] }),
    /* @__PURE__ */ e(ir, {})
  ] });
}, sr = i.object({
  theme: i.string({
    required_error: "Заполните тему"
  }),
  theory: i.string().optional(),
  theory_volume: i.number().optional(),
  practice: i.string().optional(),
  practice_volume: i.number().optional(),
  sort_index: i.number(),
  doc_id: i.string()
}), cr = ({
  doc_id: r
}) => {
  const n = L("/api/rest/program-doc-plans"), t = N({
    schema: sr,
    mutation: n,
    defaultValues: {
      doc_id: r,
      sort_index: 0
    }
  });
  return /* @__PURE__ */ T(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(d, { name: "theme", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(O, { label: "Тема", placeholder: "Введите тему", ...h }) }),
    /* @__PURE__ */ e(d, { name: "theory", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(O, { label: "Теория", placeholder: "Введите теорию", ...h }) }),
    /* @__PURE__ */ e(d, { name: "theory_volume", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Объем теории", unit: "часов", placeholder: "Введите объем теории", ...h }) }),
    /* @__PURE__ */ e(d, { name: "practice", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(O, { label: "Практика", placeholder: "Введите практику", ...h }) }),
    /* @__PURE__ */ e(d, { name: "practice_volume", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Объем практики", unit: "часов", placeholder: "Введите объем практики", ...h }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, dr = () => {
  const {
    params: {
      id: r
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(cr, { doc_id: r }) });
}, ur = i.object({
  control_type_id: i.number({
    required_error: "Заполните тип формы аттестации"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  control_type_id: !0,
  description: !0
}), pr = () => {
  const r = L("/api/rest/program-doc-forms"), n = N({
    schema: ur,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, mr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(pr, {}) }), hr = i.object({
  criterion_type_id: i.number({
    required_error: "Заполните тип критерия"
  }),
  description: i.string({
    required_error: "Заполните описание критерия"
  })
}).required({
  criterion_type_id: !0
}), fr = () => {
  const r = L("/api/rest/program-doc-criteria"), n = N({
    schema: hr,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, gr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(fr, {}) }), br = i.object({
  method_id: i.number({
    required_error: "Заполните метод"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  method_id: !0,
  description: !0
}), vr = () => {
  const r = L("/api/rest/program-doc-fixations"), n = N({
    mutation: r,
    schema: br
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, Ar = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(vr, {}) }), _r = i.object({
  base_knowledge: i.string({
    required_error: "Заполните базовые знания"
  }),
  material: i.string({
    required_error: "Заполните материалы"
  })
}).required({
  base_knowledge: !0,
  material: !0
}), yr = () => {
  const r = L("/api/rest/program-doc-materials"), n = N({
    schema: _r,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, wr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(yr, {}) }), Cr = i.object({
  management_type_id: i.number({
    required_error: "Введите тип организации образовательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  management_type_id: !0
}), Er = () => {
  const r = L("/api/rest/program-doc-managements"), n = N({
    schema: Cr,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, xr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Er, {}) }), zr = i.object({
  indoctrination_type_id: i.number({
    required_error: "Заполните тип воспитательной деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  indoctrination_type_id: !0
}), Br = () => {
  const r = L("/api/rest/program-doc-indoctrinations"), n = N({
    schema: zr,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, Tr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Br, {}) }), Sr = i.object({
  development_type_id: i.number({
    required_error: "Выберите тип развивающей деятельности"
  }),
  description: i.string({
    required_error: "Введите описание"
  })
}).required({
  development_type_id: !0
}), Dr = () => {
  const r = L("/api/rest/program-doc-developments"), n = N({
    schema: Sr,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, Or = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Dr, {}) }), kr = () => {
  const r = oe({
    schema: i.object({
      staff_description: i.string()
    }).required({
      staff_description: !0
    })
  });
  return /* @__PURE__ */ e(R, { tw: "flex flex-col gap-4", form: r, children: /* @__PURE__ */ e(d, { control: r.control, name: "staff_description", render: ({
    field: n
  }) => /* @__PURE__ */ e(Y, { tw: "w-full", ...n, placeholder: "Введите кадровое обеспечение", label: "Кадровое обеспечение" }) }) });
}, Rr = i.object({
  inventory_type_id: i.number({
    required_error: "Заполните тип материально-технического обеспечения"
  }),
  description: i.string({
    required_error: "Заполните описание"
  })
}).required({
  inventory_type_id: !0,
  description: !0
}), qr = () => {
  const r = L("/api/rest/program-doc-inventories"), n = N({
    schema: Rr,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, Mr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(qr, {}) }), Pr = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }),
  publisher: i.string().optional(),
  publish_year: i.number().optional(),
  isbn: i.string().optional()
}).required({
  title: !0
}), jr = () => {
  const r = L("/api/rest/program-doc-information"), n = N({
    schema: Pr,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, Ir = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(jr, {}) }), Fr = i.object({
  authors: i.string().optional(),
  title: i.string({
    required_error: "Заполните наименования"
  }),
  publisher: i.string().optional(),
  publish_year: i.number().optional()
}).required({
  title: !0
}), Wr = () => {
  const r = L("/api/rest/program-doc-books"), n = N({
    schema: Fr,
    mutation: r
  });
  return /* @__PURE__ */ T(R, { css: {
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
}, Nr = () => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Wr, {}) }), Lr = i.object({
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
}), Yr = ({
  doc_id: r
}) => {
  const n = L("/api/rest/program-doc-schedules"), t = N({
    schema: Lr,
    mutation: n,
    defaultValues: {
      doc_id: r
    }
  });
  return /* @__PURE__ */ T(R, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, form: t, children: [
    /* @__PURE__ */ e(d, { name: "number_year", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Год обучения", helperText: "Год обучения (по счету)", placeholder: "Введите год обучения", ...h }) }),
    /* @__PURE__ */ e(d, { name: "date_start", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(ve, { label: "Дата начала обучения", placeholder: "Выберите дату начала обучения", ...h }) }),
    /* @__PURE__ */ e(d, { name: "date_end", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(ve, { label: "Дата окончания обучения", placeholder: "Выберите дату окончания обучения", ...h }) }),
    /* @__PURE__ */ e(d, { name: "edu_week_count", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Количество учебных недель", placeholder: "Введите количество учебных недель", ...h }) }),
    /* @__PURE__ */ e(d, { name: "is_vacations", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(Le, { label: "Есть каникулы?", ...h }) }),
    /* @__PURE__ */ e(d, { name: "edu_sessions_per_week", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Количество занятий в неделю", placeholder: "Введите количество занятий в неделю", ...h }) }),
    /* @__PURE__ */ e(d, { name: "edu_sessions_per_day", control: t.control, render: ({
      field: h
    }) => /* @__PURE__ */ e(W, { label: "Продолжительность занятия", unit: "ак. часов", placeholder: "Введите продолжительность занятия", ...h }) }),
    /* @__PURE__ */ e($, { type: "submit", size: "medium", variant: "outlined", color: "primary", children: "Добавить" })
  ] });
}, $r = () => {
  const {
    params: {
      id: r
    }
  } = Be();
  return /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(Yr, { doc_id: r }) });
}, Zr = [{
  id: "general",
  title: "Основное",
  Component: Gt
}, {
  id: "params",
  title: "Параметры",
  Component: Kt
}, {
  id: "explanation",
  title: "Пояснительная записка",
  Component: er
}, {
  id: "results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  Component: rr
}, {
  id: "goals",
  title: "Цели и задачи",
  Component: lr
}, {
  id: "edu-plan",
  title: "Учебный план",
  Component: dr
}, {
  id: "attestation-forms",
  title: "Формы аттестации и оценочные материалы",
  Component: mr
}, {
  id: "criteries",
  title: "Критерии оценки учебных результатов",
  Component: gr
}, {
  id: "fixations",
  title: "Способ фиксации учебных результатов",
  Component: Ar
}, {
  id: "materials",
  title: "Методические материалы",
  Component: wr
}, {
  title: "Особенности организации образовательной деятельности",
  id: "managements",
  Component: xr
}, {
  title: "Воспитательная деятельность",
  id: "indoctrinations",
  Component: Tr
}, {
  title: "Развивающая деятельность",
  id: "developments",
  Component: Or
}, {
  title: "Кадровое обеспечение",
  id: "staff",
  Component: kr
}, {
  title: "Материально-техническое обеспечение",
  id: "inventories",
  Component: Mr
}, {
  title: "Информационное обеспечение",
  id: "information",
  Component: Ir
}, {
  title: "Список литературы",
  id: "books",
  Component: Nr
}, {
  title: "Календарный учебный график",
  id: "schedules",
  Component: $r
}, {
  id: "description",
  title: "Утверждение",
  Component: Xt
}], Vr = i.object({
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
}).passthrough(), Hr = i.object({
  data: i.array(Vr).transform((r) => r[0])
}).transform((r) => r.data), nn = () => {
  const {
    params: {
      id: r
    },
    setTitle: n
  } = Be(), t = qt(`/api/rest/program-docs/${r}`, {
    schema: Hr
  }), h = L("PUT", `/api/rest/program-docs/${r}`, {
    syncQueryCache: !0
  });
  return P.useEffect(() => {
    n(`Конструктор программы #${r}`);
  }, [r, n]), t.isLoading ? /* @__PURE__ */ e(zt, { spinning: !0 }) : t.isError ? /* @__PURE__ */ e("div", {}) : /* @__PURE__ */ e(Vt, { steps: Zr, stateKey: "steps_info", mutation: h, values: t.data });
};
export {
  nn as default
};
