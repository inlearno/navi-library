var D = {}, B = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", i = "circle-check", n = 512, r = 512, a = [61533, "check-circle"], h = "f058", u = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  t.definition = {
    prefix: e,
    iconName: i,
    icon: [
      n,
      r,
      a,
      h,
      u
    ]
  }, t.faCircleCheck = t.definition, t.prefix = e, t.iconName = i, t.width = n, t.height = r, t.ligatures = a, t.unicode = h, t.svgPathData = u, t.aliases = a;
})(B);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = B;
  t.definition = {
    prefix: e.prefix,
    iconName: e.iconName,
    icon: [
      e.width,
      e.height,
      e.aliases,
      e.unicode,
      e.svgPathData
    ]
  }, t.faCheckCircle = t.definition, t.prefix = e.prefix, t.iconName = e.iconName, t.width = e.width, t.height = e.height, t.ligatures = e.aliases, t.unicode = e.unicode, t.svgPathData = e.svgPathData, t.aliases = e.aliases;
})(D);
const d = Symbol.for("@ts-pattern/matcher"), E = Symbol.for("@ts-pattern/isVariadic"), k = "@ts-pattern/anonymous-select-key", S = (t) => !!(t && typeof t == "object"), O = (t) => t && !!t[d], g = (t, e, i) => {
  if (O(t)) {
    const n = t[d](), { matched: r, selections: a } = n.match(e);
    return r && a && Object.keys(a).forEach((h) => i(h, a[h])), r;
  }
  if (S(t)) {
    if (!S(e))
      return !1;
    if (Array.isArray(t)) {
      if (!Array.isArray(e))
        return !1;
      let n = [], r = [], a = [];
      for (const h of t.keys()) {
        const u = t[h];
        O(u) && u[E] ? a.push(u) : a.length ? r.push(u) : n.push(u);
      }
      if (a.length) {
        if (a.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (e.length < n.length + r.length)
          return !1;
        const h = e.slice(0, n.length), u = r.length === 0 ? [] : e.slice(-r.length), C = e.slice(n.length, r.length === 0 ? 1 / 0 : -r.length);
        return n.every((p, j) => g(p, h[j], i)) && r.every((p, j) => g(p, u[j], i)) && (a.length === 0 || g(a[0], C, i));
      }
      return t.length === e.length && t.every((h, u) => g(h, e[u], i));
    }
    return Object.keys(t).every((n) => {
      const r = t[n];
      return (n in e || O(a = r) && a[d]().matcherType === "optional") && g(r, e[n], i);
      var a;
    });
  }
  return Object.is(e, t);
}, y = (t) => {
  var e, i, n;
  return S(t) ? O(t) ? (e = (i = (n = t[d]()).getSelectionKeys) == null ? void 0 : i.call(n)) != null ? e : [] : Array.isArray(t) ? N(t, y) : N(Object.values(t), y) : [];
}, N = (t, e) => t.reduce((i, n) => i.concat(e(n)), []);
function o(t) {
  return Object.assign(t, { optional: () => T(t), and: (e) => s(t, e), or: (e) => W(t, e), select: (e) => e === void 0 ? K(t) : K(e, t) });
}
function T(t) {
  return o({ [d]: () => ({ match: (e) => {
    let i = {};
    const n = (r, a) => {
      i[r] = a;
    };
    return e === void 0 ? (y(t).forEach((r) => n(r, void 0)), { matched: !0, selections: i }) : { matched: g(t, e, n), selections: i };
  }, getSelectionKeys: () => y(t), matcherType: "optional" }) });
}
function s(...t) {
  return o({ [d]: () => ({ match: (e) => {
    let i = {};
    const n = (r, a) => {
      i[r] = a;
    };
    return { matched: t.every((r) => g(r, e, n)), selections: i };
  }, getSelectionKeys: () => N(t, y), matcherType: "and" }) });
}
function W(...t) {
  return o({ [d]: () => ({ match: (e) => {
    let i = {};
    const n = (r, a) => {
      i[r] = a;
    };
    return N(t, y).forEach((r) => n(r, void 0)), { matched: t.some((r) => g(r, e, n)), selections: i };
  }, getSelectionKeys: () => N(t, y), matcherType: "or" }) });
}
function c(t) {
  return { [d]: () => ({ match: (e) => ({ matched: !!t(e) }) }) };
}
function K(...t) {
  const e = typeof t[0] == "string" ? t[0] : void 0, i = t.length === 2 ? t[1] : typeof t[0] == "string" ? void 0 : t[0];
  return o({ [d]: () => ({ match: (n) => {
    let r = { [e ?? k]: n };
    return { matched: i === void 0 || g(i, n, (a, h) => {
      r[a] = h;
    }), selections: r };
  }, getSelectionKeys: () => [e ?? k].concat(i === void 0 ? [] : y(i)) }) });
}
function l(t) {
  return typeof t == "number";
}
function b(t) {
  return typeof t == "string";
}
function v(t) {
  return typeof t == "bigint";
}
o(c(function(t) {
  return !0;
}));
const w = (t) => Object.assign(o(t), { startsWith: (e) => {
  return w(s(t, (i = e, c((n) => b(n) && n.startsWith(i)))));
  var i;
}, endsWith: (e) => {
  return w(s(t, (i = e, c((n) => b(n) && n.endsWith(i)))));
  var i;
}, minLength: (e) => w(s(t, ((i) => c((n) => b(n) && n.length >= i))(e))), maxLength: (e) => w(s(t, ((i) => c((n) => b(n) && n.length <= i))(e))), includes: (e) => {
  return w(s(t, (i = e, c((n) => b(n) && n.includes(i)))));
  var i;
}, regex: (e) => {
  return w(s(t, (i = e, c((n) => b(n) && !!n.match(i)))));
  var i;
} });
w(c(b));
const f = (t) => Object.assign(o(t), { between: (e, i) => f(s(t, ((n, r) => c((a) => l(a) && n <= a && r >= a))(e, i))), lt: (e) => f(s(t, ((i) => c((n) => l(n) && n < i))(e))), gt: (e) => f(s(t, ((i) => c((n) => l(n) && n > i))(e))), lte: (e) => f(s(t, ((i) => c((n) => l(n) && n <= i))(e))), gte: (e) => f(s(t, ((i) => c((n) => l(n) && n >= i))(e))), int: () => f(s(t, c((e) => l(e) && Number.isInteger(e)))), finite: () => f(s(t, c((e) => l(e) && Number.isFinite(e)))), positive: () => f(s(t, c((e) => l(e) && e > 0))), negative: () => f(s(t, c((e) => l(e) && e < 0))) });
f(c(l));
const m = (t) => Object.assign(o(t), { between: (e, i) => m(s(t, ((n, r) => c((a) => v(a) && n <= a && r >= a))(e, i))), lt: (e) => m(s(t, ((i) => c((n) => v(n) && n < i))(e))), gt: (e) => m(s(t, ((i) => c((n) => v(n) && n > i))(e))), lte: (e) => m(s(t, ((i) => c((n) => v(n) && n <= i))(e))), gte: (e) => m(s(t, ((i) => c((n) => v(n) && n >= i))(e))), positive: () => m(s(t, c((e) => v(e) && e > 0))), negative: () => m(s(t, c((e) => v(e) && e < 0))) });
m(c(v));
o(c(function(t) {
  return typeof t == "boolean";
}));
o(c(function(t) {
  return typeof t == "symbol";
}));
o(c(function(t) {
  return t == null;
}));
const A = { matched: !1, value: void 0 };
function L(t) {
  return new P(t, A);
}
class P {
  constructor(e, i) {
    this.input = void 0, this.state = void 0, this.input = e, this.state = i;
  }
  with(...e) {
    if (this.state.matched)
      return this;
    const i = e[e.length - 1], n = [e[0]];
    let r;
    e.length === 3 && typeof e[1] == "function" ? (n.push(e[0]), r = e[1]) : e.length > 2 && n.push(...e.slice(1, e.length - 1));
    let a = !1, h = {};
    const u = (p, j) => {
      a = !0, h[p] = j;
    }, C = !n.some((p) => g(p, this.input, u)) || r && !r(this.input) ? A : { matched: !0, value: i(a ? k in h ? h[k] : h : this.input, this.input) };
    return new P(this.input, C);
  }
  when(e, i) {
    if (this.state.matched)
      return this;
    const n = !!e(this.input);
    return new P(this.input, n ? { matched: !0, value: i(this.input, this.input) } : A);
  }
  otherwise(e) {
    return this.state.matched ? this.state.value : e(this.input);
  }
  exhaustive() {
    return this.run();
  }
  run() {
    if (this.state.matched)
      return this.state.value;
    let e;
    try {
      e = JSON.stringify(this.input);
    } catch {
      e = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${e}`);
  }
  returnType() {
    return this;
  }
}
export {
  L as N,
  D as f
};
