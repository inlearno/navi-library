var Wt = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var I = (t, e, r) => (Wt(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ie = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Me = (t, e, r, s) => (Wt(t, e, "write to private field"), s ? s.call(t, r) : e.set(t, r), r);
var We = (t, e, r) => (Wt(t, e, "access private method"), r);
import { r as $, R as j } from "./react-181b9648.js";
import { c as ms, s as ys, g as gs, n as Zr, u as vs, d as _s, p as bs, j as U, a as Fe, F as xs, f as ws } from "./library-047369e1.js";
import { s as ks, b as Ts, l as je, a as Ss, u as _r } from "./useDictionary-60a2240b.js";
import { n as Es, M as Cs, t as br, B as As, A as Os, d as Vs, u as Rs, e as Dr, f as Ns, a as Zs, P as Ds } from "./mui-a33a672b.js";
import { F as Tt } from "./icons-cd19d6df.js";
var Ce, X, ne, we, Ye, bt, pt, Gt, Nr, Is = (Nr = class extends ms {
  constructor(e, r) {
    super();
    Ie(this, Ye);
    Ie(this, pt);
    Ie(this, Ce, void 0);
    Ie(this, X, void 0);
    Ie(this, ne, void 0);
    Ie(this, we, void 0);
    Me(this, X, void 0), Me(this, Ce, e), this.setOptions(r), this.bindMethods(), We(this, Ye, bt).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var s;
    const r = this.options;
    this.options = I(this, Ce).defaultMutationOptions(e), ys(r, this.options) || I(this, Ce).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: I(this, ne),
      observer: this
    }), (s = I(this, ne)) == null || s.setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = I(this, ne)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    We(this, Ye, bt).call(this), We(this, pt, Gt).call(this, e);
  }
  getCurrentResult() {
    return I(this, X);
  }
  reset() {
    Me(this, ne, void 0), We(this, Ye, bt).call(this), We(this, pt, Gt).call(this);
  }
  mutate(e, r) {
    var s;
    return Me(this, we, r), (s = I(this, ne)) == null || s.removeObserver(this), Me(this, ne, I(this, Ce).getMutationCache().build(I(this, Ce), this.options)), I(this, ne).addObserver(this), I(this, ne).execute(e);
  }
}, Ce = new WeakMap(), X = new WeakMap(), ne = new WeakMap(), we = new WeakMap(), Ye = new WeakSet(), bt = function() {
  var r;
  const e = ((r = I(this, ne)) == null ? void 0 : r.state) ?? gs();
  Me(this, X, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, pt = new WeakSet(), Gt = function(e) {
  Zr.batch(() => {
    var r, s, n, a, i, u, c, d;
    I(this, we) && this.hasListeners() && ((e == null ? void 0 : e.type) === "success" ? ((s = (r = I(this, we)).onSuccess) == null || s.call(
      r,
      e.data,
      I(this, X).variables,
      I(this, X).context
    ), (a = (n = I(this, we)).onSettled) == null || a.call(
      n,
      e.data,
      null,
      I(this, X).variables,
      I(this, X).context
    )) : (e == null ? void 0 : e.type) === "error" && ((u = (i = I(this, we)).onError) == null || u.call(
      i,
      e.error,
      I(this, X).variables,
      I(this, X).context
    ), (d = (c = I(this, we)).onSettled) == null || d.call(
      c,
      void 0,
      e.error,
      I(this, X).variables,
      I(this, X).context
    ))), this.listeners.forEach((p) => {
      p(I(this, X));
    });
  });
}, Nr);
function Ms(t, e) {
  const r = vs(e), [s] = $.useState(
    () => new Is(
      r,
      t
    )
  );
  $.useEffect(() => {
    s.setOptions(t);
  }, [s, t]);
  const n = $.useSyncExternalStore(
    $.useCallback(
      (i) => s.subscribe(Zr.batchCalls(i)),
      [s]
    ),
    () => s.getCurrentResult(),
    () => s.getCurrentResult()
  ), a = $.useCallback(
    (i, u) => {
      s.mutate(i, u).catch(js);
    },
    [s]
  );
  if (n.error && ks(s.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: a, mutateAsync: n.mutate };
}
function js() {
}
function xa(t, e, r) {
  let s;
  typeof t == "string" && typeof e == "string" ? s = {
    url: e,
    method: t,
    ...r
  } : typeof t == "string" ? s = {
    url: t,
    ...e
  } : s = t;
  const n = $.useMemo(() => _s(s.url, {
    encode: encodeURIComponent
  }), [s.url]), a = $.useMemo(() => bs(s.url).reduce((x, w) => typeof w != "string" ? [...x, w.name] : x, []), [s.url]), i = Ts(), {
    wrapPayload: u = !0,
    ...c
  } = s;
  return Ms({
    ...c,
    mutationFn: async (p) => {
      const x = n(je.pick(p, ...a)), w = je.omit(p, ...a), z = je.isEmpty(w) ? void 0 : u ? {
        data: w
      } : w, {
        data: B
      } = await i.request({
        url: x,
        method: s.method || "POST",
        data: z
      });
      return B;
    }
  });
}
const Ps = Es(({
  className: t,
  ...e
}) => /* @__PURE__ */ U(Cs, { ...e, classes: {
  popper: t
} }))`
  .${br.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${br.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`, wa = ({
  children: t,
  className: e,
  tooltip: r,
  icon: s,
  iconAfter: n,
  ...a
}) => {
  let i = /* @__PURE__ */ Fe(As, { className: e, css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...a, children: [
    s && /* @__PURE__ */ U(Tt, { icon: s }),
    t,
    n && /* @__PURE__ */ U(Tt, { icon: n })
  ] });
  return r && (i = /* @__PURE__ */ U(Ps, { title: r, arrow: !0, children: i })), i;
};
var R;
(function(t) {
  t.assertEqual = (n) => n;
  function e(n) {
  }
  t.assertIs = e;
  function r(n) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (n) => {
    const a = {};
    for (const i of n)
      a[i] = i;
    return a;
  }, t.getValidEnumValues = (n) => {
    const a = t.objectKeys(n).filter((u) => typeof n[n[u]] != "number"), i = {};
    for (const u of a)
      i[u] = n[u];
    return t.objectValues(i);
  }, t.objectValues = (n) => t.objectKeys(n).map(function(a) {
    return n[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const a = [];
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
    return a;
  }, t.find = (n, a) => {
    for (const i of n)
      if (a(i))
        return i;
  }, t.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function s(n, a = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  t.joinValues = s, t.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(R || (R = {}));
var Kt;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Kt || (Kt = {}));
const v = R.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Ee = (t) => {
  switch (typeof t) {
    case "undefined":
      return v.undefined;
    case "string":
      return v.string;
    case "number":
      return isNaN(t) ? v.nan : v.number;
    case "boolean":
      return v.boolean;
    case "function":
      return v.function;
    case "bigint":
      return v.bigint;
    case "symbol":
      return v.symbol;
    case "object":
      return Array.isArray(t) ? v.array : t === null ? v.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? v.promise : typeof Map < "u" && t instanceof Map ? v.map : typeof Set < "u" && t instanceof Set ? v.set : typeof Date < "u" && t instanceof Date ? v.date : v.object;
    default:
      return v.unknown;
  }
}, h = R.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Ls = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class de extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(a) {
      return a.message;
    }, s = { _errors: [] }, n = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(n);
        else if (i.code === "invalid_return_type")
          n(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          n(i.argumentsError);
        else if (i.path.length === 0)
          s._errors.push(r(i));
        else {
          let u = s, c = 0;
          for (; c < i.path.length; ) {
            const d = i.path[c];
            c === i.path.length - 1 ? (u[d] = u[d] || { _errors: [] }, u[d]._errors.push(r(i))) : u[d] = u[d] || { _errors: [] }, u = u[d], c++;
          }
        }
    };
    return n(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, R.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, s = [];
    for (const n of this.issues)
      n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(e(n))) : s.push(e(n));
    return { formErrors: s, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
de.create = (t) => new de(t);
const rt = (t, e) => {
  let r;
  switch (t.code) {
    case h.invalid_type:
      t.received === v.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case h.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, R.jsonStringifyReplacer)}`;
      break;
    case h.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${R.joinValues(t.keys, ", ")}`;
      break;
    case h.invalid_union:
      r = "Invalid input";
      break;
    case h.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${R.joinValues(t.options)}`;
      break;
    case h.invalid_enum_value:
      r = `Invalid enum value. Expected ${R.joinValues(t.options)}, received '${t.received}'`;
      break;
    case h.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case h.invalid_return_type:
      r = "Invalid function return type";
      break;
    case h.invalid_date:
      r = "Invalid date";
      break;
    case h.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : R.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case h.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case h.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case h.custom:
      r = "Invalid input";
      break;
    case h.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case h.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case h.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, R.assertNever(t);
  }
  return { message: r };
};
let Ir = rt;
function Fs(t) {
  Ir = t;
}
function St() {
  return Ir;
}
const Et = (t) => {
  const { data: e, path: r, errorMaps: s, issueData: n } = t, a = [...r, ...n.path || []], i = {
    ...n,
    path: a
  };
  let u = "";
  const c = s.filter((d) => !!d).slice().reverse();
  for (const d of c)
    u = d(i, { data: e, defaultError: u }).message;
  return {
    ...n,
    path: a,
    message: n.message || u
  };
}, Us = [];
function _(t, e) {
  const r = Et({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      St(),
      rt
      // then global default map
    ].filter((s) => !!s)
  });
  t.common.issues.push(r);
}
class G {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const s = [];
    for (const n of r) {
      if (n.status === "aborted")
        return C;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, r) {
    const s = [];
    for (const n of r)
      s.push({
        key: await n.key,
        value: await n.value
      });
    return G.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, r) {
    const s = {};
    for (const n of r) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted")
        return C;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const C = Object.freeze({
  status: "aborted"
}), Mr = (t) => ({ status: "dirty", value: t }), te = (t) => ({ status: "valid", value: t }), Xt = (t) => t.status === "aborted", er = (t) => t.status === "dirty", st = (t) => t.status === "valid", Ct = (t) => typeof Promise < "u" && t instanceof Promise;
var k;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(k || (k = {}));
class ve {
  constructor(e, r, s, n) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const xr = (t, e) => {
  if (st(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new de(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function A(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: s, description: n } = t;
  if (e && (r || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (i, u) => i.code !== "invalid_type" ? { message: u.defaultError } : typeof u.data > "u" ? { message: s ?? u.defaultError } : { message: r ?? u.defaultError }, description: n };
}
class V {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Ee(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: Ee(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new G(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Ee(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Ct(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const s = this.safeParse(e, r);
    if (s.success)
      return s.data;
    throw s.error;
  }
  safeParse(e, r) {
    var s;
    const n = {
      common: {
        issues: [],
        async: (s = r == null ? void 0 : r.async) !== null && s !== void 0 ? s : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Ee(e)
    }, a = this._parseSync({ data: e, path: n.path, parent: n });
    return xr(n, a);
  }
  async parseAsync(e, r) {
    const s = await this.safeParseAsync(e, r);
    if (s.success)
      return s.data;
    throw s.error;
  }
  async safeParseAsync(e, r) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Ee(e)
    }, n = this._parse({ data: e, path: s.path, parent: s }), a = await (Ct(n) ? n : Promise.resolve(n));
    return xr(s, a);
  }
  refine(e, r) {
    const s = (n) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(n) : r;
    return this._refinement((n, a) => {
      const i = e(n), u = () => a.addIssue({
        code: h.custom,
        ...s(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((c) => c ? !0 : (u(), !1)) : i ? !0 : (u(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((s, n) => e(s) ? !0 : (n.addIssue(typeof r == "function" ? r(s, n) : r), !1));
  }
  _refinement(e) {
    return new he({
      schema: this,
      typeName: S.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return ke.create(this, this._def);
  }
  nullable() {
    return Be.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return fe.create(this, this._def);
  }
  promise() {
    return Ke.create(this, this._def);
  }
  or(e) {
    return ot.create([this, e], this._def);
  }
  and(e) {
    return ut.create(this, e, this._def);
  }
  transform(e) {
    return new he({
      ...A(this._def),
      schema: this,
      typeName: S.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ht({
      ...A(this._def),
      innerType: this,
      defaultValue: r,
      typeName: S.ZodDefault
    });
  }
  brand() {
    return new Pr({
      typeName: S.ZodBranded,
      type: this,
      ...A(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Rt({
      ...A(this._def),
      innerType: this,
      catchValue: r,
      typeName: S.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return mt.create(this, e);
  }
  readonly() {
    return Zt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const $s = /^c[^\s-]{8,}$/i, Bs = /^[a-z][a-z0-9]*$/, zs = /^[0-9A-HJKMNP-TV-Z]{26}$/, Ws = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, qs = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Hs = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let qt;
const Qs = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Js = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Ys = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Gs(t, e) {
  return !!((e === "v4" || !e) && Qs.test(t) || (e === "v6" || !e) && Js.test(t));
}
class le extends V {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== v.string) {
      const a = this._getOrReturnCtx(e);
      return _(
        a,
        {
          code: h.invalid_type,
          expected: v.string,
          received: a.parsedType
        }
        //
      ), C;
    }
    const s = new G();
    let n;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (n = this._getOrReturnCtx(e, n), _(n, {
          code: h.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (n = this._getOrReturnCtx(e, n), _(n, {
          code: h.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, u = e.data.length < a.value;
        (i || u) && (n = this._getOrReturnCtx(e, n), i ? _(n, {
          code: h.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : u && _(n, {
          code: h.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        qs.test(e.data) || (n = this._getOrReturnCtx(e, n), _(n, {
          validation: "email",
          code: h.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        qt || (qt = new RegExp(Hs, "u")), qt.test(e.data) || (n = this._getOrReturnCtx(e, n), _(n, {
          validation: "emoji",
          code: h.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        Ws.test(e.data) || (n = this._getOrReturnCtx(e, n), _(n, {
          validation: "uuid",
          code: h.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        $s.test(e.data) || (n = this._getOrReturnCtx(e, n), _(n, {
          validation: "cuid",
          code: h.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        Bs.test(e.data) || (n = this._getOrReturnCtx(e, n), _(n, {
          validation: "cuid2",
          code: h.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        zs.test(e.data) || (n = this._getOrReturnCtx(e, n), _(n, {
          validation: "ulid",
          code: h.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), _(n, {
            validation: "url",
            code: h.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), _(n, {
          validation: "regex",
          code: h.invalid_string,
          message: a.message
        }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), _(n, {
          code: h.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), _(n, {
          code: h.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), _(n, {
          code: h.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), s.dirty()) : a.kind === "datetime" ? Ys(a).test(e.data) || (n = this._getOrReturnCtx(e, n), _(n, {
          code: h.invalid_string,
          validation: "datetime",
          message: a.message
        }), s.dirty()) : a.kind === "ip" ? Gs(e.data, a.version) || (n = this._getOrReturnCtx(e, n), _(n, {
          validation: "ip",
          code: h.invalid_string,
          message: a.message
        }), s.dirty()) : R.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _regex(e, r, s) {
    return this.refinement((n) => e.test(n), {
      validation: r,
      code: h.invalid_string,
      ...k.errToObj(s)
    });
  }
  _addCheck(e) {
    return new le({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...k.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...k.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...k.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...k.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...k.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...k.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...k.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...k.errToObj(e) });
  }
  datetime(e) {
    var r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      ...k.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...k.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...k.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...k.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...k.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...k.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...k.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...k.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(e) {
    return this.min(1, k.errToObj(e));
  }
  trim() {
    return new le({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new le({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new le({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
le.create = (t) => {
  var e;
  return new le({
    checks: [],
    typeName: S.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...A(t)
  });
};
function Ks(t, e) {
  const r = (t.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = r > s ? r : s, a = parseInt(t.toFixed(n).replace(".", "")), i = parseInt(e.toFixed(n).replace(".", ""));
  return a % i / Math.pow(10, n);
}
class Oe extends V {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== v.number) {
      const a = this._getOrReturnCtx(e);
      return _(a, {
        code: h.invalid_type,
        expected: v.number,
        received: a.parsedType
      }), C;
    }
    let s;
    const n = new G();
    for (const a of this._def.checks)
      a.kind === "int" ? R.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), _(s, {
        code: h.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), _(s, {
        code: h.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), _(s, {
        code: h.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? Ks(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), _(s, {
        code: h.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), _(s, {
        code: h.not_finite,
        message: a.message
      }), n.dirty()) : R.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, k.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, k.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, k.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, k.toString(r));
  }
  setLimit(e, r, s, n) {
    return new Oe({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: s,
          message: k.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Oe({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: k.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: k.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: k.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: k.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: k.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: k.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: k.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: k.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: k.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && R.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min" ? (r === null || s.value > r) && (r = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
Oe.create = (t) => new Oe({
  checks: [],
  typeName: S.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...A(t)
});
class Ve extends V {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== v.bigint) {
      const a = this._getOrReturnCtx(e);
      return _(a, {
        code: h.invalid_type,
        expected: v.bigint,
        received: a.parsedType
      }), C;
    }
    let s;
    const n = new G();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), _(s, {
        code: h.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), _(s, {
        code: h.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), _(s, {
        code: h.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), n.dirty()) : R.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, k.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, k.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, k.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, k.toString(r));
  }
  setLimit(e, r, s, n) {
    return new Ve({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: s,
          message: k.toString(n)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ve({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: k.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: k.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: k.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: k.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: k.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
Ve.create = (t) => {
  var e;
  return new Ve({
    checks: [],
    typeName: S.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...A(t)
  });
};
class nt extends V {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== v.boolean) {
      const s = this._getOrReturnCtx(e);
      return _(s, {
        code: h.invalid_type,
        expected: v.boolean,
        received: s.parsedType
      }), C;
    }
    return te(e.data);
  }
}
nt.create = (t) => new nt({
  typeName: S.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...A(t)
});
class Ue extends V {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== v.date) {
      const a = this._getOrReturnCtx(e);
      return _(a, {
        code: h.invalid_type,
        expected: v.date,
        received: a.parsedType
      }), C;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return _(a, {
        code: h.invalid_date
      }), C;
    }
    const s = new G();
    let n;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), _(n, {
        code: h.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), _(n, {
        code: h.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : R.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Ue({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: k.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: k.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
Ue.create = (t) => new Ue({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: S.ZodDate,
  ...A(t)
});
class At extends V {
  _parse(e) {
    if (this._getType(e) !== v.symbol) {
      const s = this._getOrReturnCtx(e);
      return _(s, {
        code: h.invalid_type,
        expected: v.symbol,
        received: s.parsedType
      }), C;
    }
    return te(e.data);
  }
}
At.create = (t) => new At({
  typeName: S.ZodSymbol,
  ...A(t)
});
class at extends V {
  _parse(e) {
    if (this._getType(e) !== v.undefined) {
      const s = this._getOrReturnCtx(e);
      return _(s, {
        code: h.invalid_type,
        expected: v.undefined,
        received: s.parsedType
      }), C;
    }
    return te(e.data);
  }
}
at.create = (t) => new at({
  typeName: S.ZodUndefined,
  ...A(t)
});
class it extends V {
  _parse(e) {
    if (this._getType(e) !== v.null) {
      const s = this._getOrReturnCtx(e);
      return _(s, {
        code: h.invalid_type,
        expected: v.null,
        received: s.parsedType
      }), C;
    }
    return te(e.data);
  }
}
it.create = (t) => new it({
  typeName: S.ZodNull,
  ...A(t)
});
class Ge extends V {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return te(e.data);
  }
}
Ge.create = (t) => new Ge({
  typeName: S.ZodAny,
  ...A(t)
});
class Le extends V {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return te(e.data);
  }
}
Le.create = (t) => new Le({
  typeName: S.ZodUnknown,
  ...A(t)
});
class Te extends V {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return _(r, {
      code: h.invalid_type,
      expected: v.never,
      received: r.parsedType
    }), C;
  }
}
Te.create = (t) => new Te({
  typeName: S.ZodNever,
  ...A(t)
});
class Ot extends V {
  _parse(e) {
    if (this._getType(e) !== v.undefined) {
      const s = this._getOrReturnCtx(e);
      return _(s, {
        code: h.invalid_type,
        expected: v.void,
        received: s.parsedType
      }), C;
    }
    return te(e.data);
  }
}
Ot.create = (t) => new Ot({
  typeName: S.ZodVoid,
  ...A(t)
});
class fe extends V {
  _parse(e) {
    const { ctx: r, status: s } = this._processInputParams(e), n = this._def;
    if (r.parsedType !== v.array)
      return _(r, {
        code: h.invalid_type,
        expected: v.array,
        received: r.parsedType
      }), C;
    if (n.exactLength !== null) {
      const i = r.data.length > n.exactLength.value, u = r.data.length < n.exactLength.value;
      (i || u) && (_(r, {
        code: i ? h.too_big : h.too_small,
        minimum: u ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), s.dirty());
    }
    if (n.minLength !== null && r.data.length < n.minLength.value && (_(r, {
      code: h.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), s.dirty()), n.maxLength !== null && r.data.length > n.maxLength.value && (_(r, {
      code: h.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), s.dirty()), r.common.async)
      return Promise.all([...r.data].map((i, u) => n.type._parseAsync(new ve(r, i, r.path, u)))).then((i) => G.mergeArray(s, i));
    const a = [...r.data].map((i, u) => n.type._parseSync(new ve(r, i, r.path, u)));
    return G.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new fe({
      ...this._def,
      minLength: { value: e, message: k.toString(r) }
    });
  }
  max(e, r) {
    return new fe({
      ...this._def,
      maxLength: { value: e, message: k.toString(r) }
    });
  }
  length(e, r) {
    return new fe({
      ...this._def,
      exactLength: { value: e, message: k.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
fe.create = (t, e) => new fe({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: S.ZodArray,
  ...A(e)
});
function He(t) {
  if (t instanceof L) {
    const e = {};
    for (const r in t.shape) {
      const s = t.shape[r];
      e[r] = ke.create(He(s));
    }
    return new L({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof fe ? new fe({
      ...t._def,
      type: He(t.element)
    }) : t instanceof ke ? ke.create(He(t.unwrap())) : t instanceof Be ? Be.create(He(t.unwrap())) : t instanceof _e ? _e.create(t.items.map((e) => He(e))) : t;
}
class L extends V {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = R.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== v.object) {
      const d = this._getOrReturnCtx(e);
      return _(d, {
        code: h.invalid_type,
        expected: v.object,
        received: d.parsedType
      }), C;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), u = [];
    if (!(this._def.catchall instanceof Te && this._def.unknownKeys === "strip"))
      for (const d in n.data)
        i.includes(d) || u.push(d);
    const c = [];
    for (const d of i) {
      const p = a[d], x = n.data[d];
      c.push({
        key: { status: "valid", value: d },
        value: p._parse(new ve(n, x, n.path, d)),
        alwaysSet: d in n.data
      });
    }
    if (this._def.catchall instanceof Te) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const p of u)
          c.push({
            key: { status: "valid", value: p },
            value: { status: "valid", value: n.data[p] }
          });
      else if (d === "strict")
        u.length > 0 && (_(n, {
          code: h.unrecognized_keys,
          keys: u
        }), s.dirty());
      else if (d !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const p of u) {
        const x = n.data[p];
        c.push({
          key: { status: "valid", value: p },
          value: d._parse(
            new ve(n, x, n.path, p)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: p in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const p of c) {
        const x = await p.key;
        d.push({
          key: x,
          value: await p.value,
          alwaysSet: p.alwaysSet
        });
      }
      return d;
    }).then((d) => G.mergeObjectSync(s, d)) : G.mergeObjectSync(s, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return k.errToObj, new L({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, s) => {
          var n, a, i, u;
          const c = (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, r, s).message) !== null && i !== void 0 ? i : s.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (u = k.errToObj(e).message) !== null && u !== void 0 ? u : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new L({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new L({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new L({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new L({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: S.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new L({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return R.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (r[s] = this.shape[s]);
    }), new L({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return R.objectKeys(this.shape).forEach((s) => {
      e[s] || (r[s] = this.shape[s]);
    }), new L({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return He(this);
  }
  partial(e) {
    const r = {};
    return R.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? r[s] = n : r[s] = n.optional();
    }), new L({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return R.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s])
        r[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof ke; )
          a = a._def.innerType;
        r[s] = a;
      }
    }), new L({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return jr(R.objectKeys(this.shape));
  }
}
L.create = (t, e) => new L({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Te.create(),
  typeName: S.ZodObject,
  ...A(e)
});
L.strictCreate = (t, e) => new L({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Te.create(),
  typeName: S.ZodObject,
  ...A(e)
});
L.lazycreate = (t, e) => new L({
  shape: t,
  unknownKeys: "strip",
  catchall: Te.create(),
  typeName: S.ZodObject,
  ...A(e)
});
class ot extends V {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = this._def.options;
    function n(a) {
      for (const u of a)
        if (u.result.status === "valid")
          return u.result;
      for (const u of a)
        if (u.result.status === "dirty")
          return r.common.issues.push(...u.ctx.common.issues), u.result;
      const i = a.map((u) => new de(u.ctx.common.issues));
      return _(r, {
        code: h.invalid_union,
        unionErrors: i
      }), C;
    }
    if (r.common.async)
      return Promise.all(s.map(async (a) => {
        const i = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: r.data,
            path: r.path,
            parent: i
          }),
          ctx: i
        };
      })).then(n);
    {
      let a;
      const i = [];
      for (const c of s) {
        const d = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, p = c._parseSync({
          data: r.data,
          path: r.path,
          parent: d
        });
        if (p.status === "valid")
          return p;
        p.status === "dirty" && !a && (a = { result: p, ctx: d }), d.common.issues.length && i.push(d.common.issues);
      }
      if (a)
        return r.common.issues.push(...a.ctx.common.issues), a.result;
      const u = i.map((c) => new de(c));
      return _(r, {
        code: h.invalid_union,
        unionErrors: u
      }), C;
    }
  }
  get options() {
    return this._def.options;
  }
}
ot.create = (t, e) => new ot({
  options: t,
  typeName: S.ZodUnion,
  ...A(e)
});
const xt = (t) => t instanceof lt ? xt(t.schema) : t instanceof he ? xt(t.innerType()) : t instanceof dt ? [t.value] : t instanceof Re ? t.options : t instanceof ft ? Object.keys(t.enum) : t instanceof ht ? xt(t._def.innerType) : t instanceof at ? [void 0] : t instanceof it ? [null] : null;
class Lt extends V {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== v.object)
      return _(r, {
        code: h.invalid_type,
        expected: v.object,
        received: r.parsedType
      }), C;
    const s = this.discriminator, n = r.data[s], a = this.optionsMap.get(n);
    return a ? r.common.async ? a._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : a._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (_(r, {
      code: h.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [s]
    }), C);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, r, s) {
    const n = /* @__PURE__ */ new Map();
    for (const a of r) {
      const i = xt(a.shape[e]);
      if (!i)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const u of i) {
        if (n.has(u))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(u)}`);
        n.set(u, a);
      }
    }
    return new Lt({
      typeName: S.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: n,
      ...A(s)
    });
  }
}
function tr(t, e) {
  const r = Ee(t), s = Ee(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === v.object && s === v.object) {
    const n = R.objectKeys(e), a = R.objectKeys(t).filter((u) => n.indexOf(u) !== -1), i = { ...t, ...e };
    for (const u of a) {
      const c = tr(t[u], e[u]);
      if (!c.valid)
        return { valid: !1 };
      i[u] = c.data;
    }
    return { valid: !0, data: i };
  } else if (r === v.array && s === v.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const n = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], u = e[a], c = tr(i, u);
      if (!c.valid)
        return { valid: !1 };
      n.push(c.data);
    }
    return { valid: !0, data: n };
  } else
    return r === v.date && s === v.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class ut extends V {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (Xt(a) || Xt(i))
        return C;
      const u = tr(a.value, i.value);
      return u.valid ? ((er(a) || er(i)) && r.dirty(), { status: r.value, value: u.data }) : (_(s, {
        code: h.invalid_intersection_types
      }), C);
    };
    return s.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }),
      this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })
    ]).then(([a, i]) => n(a, i)) : n(this._def.left._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }), this._def.right._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }));
  }
}
ut.create = (t, e, r) => new ut({
  left: t,
  right: e,
  typeName: S.ZodIntersection,
  ...A(r)
});
class _e extends V {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== v.array)
      return _(s, {
        code: h.invalid_type,
        expected: v.array,
        received: s.parsedType
      }), C;
    if (s.data.length < this._def.items.length)
      return _(s, {
        code: h.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), C;
    !this._def.rest && s.data.length > this._def.items.length && (_(s, {
      code: h.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const a = [...s.data].map((i, u) => {
      const c = this._def.items[u] || this._def.rest;
      return c ? c._parse(new ve(s, i, s.path, u)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => G.mergeArray(r, i)) : G.mergeArray(r, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new _e({
      ...this._def,
      rest: e
    });
  }
}
_e.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new _e({
    items: t,
    typeName: S.ZodTuple,
    rest: null,
    ...A(e)
  });
};
class ct extends V {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== v.object)
      return _(s, {
        code: h.invalid_type,
        expected: v.object,
        received: s.parsedType
      }), C;
    const n = [], a = this._def.keyType, i = this._def.valueType;
    for (const u in s.data)
      n.push({
        key: a._parse(new ve(s, u, s.path, u)),
        value: i._parse(new ve(s, s.data[u], s.path, u))
      });
    return s.common.async ? G.mergeObjectAsync(r, n) : G.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, s) {
    return r instanceof V ? new ct({
      keyType: e,
      valueType: r,
      typeName: S.ZodRecord,
      ...A(s)
    }) : new ct({
      keyType: le.create(),
      valueType: e,
      typeName: S.ZodRecord,
      ...A(r)
    });
  }
}
class Vt extends V {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== v.map)
      return _(s, {
        code: h.invalid_type,
        expected: v.map,
        received: s.parsedType
      }), C;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([u, c], d) => ({
      key: n._parse(new ve(s, u, s.path, [d, "key"])),
      value: a._parse(new ve(s, c, s.path, [d, "value"]))
    }));
    if (s.common.async) {
      const u = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const d = await c.key, p = await c.value;
          if (d.status === "aborted" || p.status === "aborted")
            return C;
          (d.status === "dirty" || p.status === "dirty") && r.dirty(), u.set(d.value, p.value);
        }
        return { status: r.value, value: u };
      });
    } else {
      const u = /* @__PURE__ */ new Map();
      for (const c of i) {
        const d = c.key, p = c.value;
        if (d.status === "aborted" || p.status === "aborted")
          return C;
        (d.status === "dirty" || p.status === "dirty") && r.dirty(), u.set(d.value, p.value);
      }
      return { status: r.value, value: u };
    }
  }
}
Vt.create = (t, e, r) => new Vt({
  valueType: e,
  keyType: t,
  typeName: S.ZodMap,
  ...A(r)
});
class $e extends V {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== v.set)
      return _(s, {
        code: h.invalid_type,
        expected: v.set,
        received: s.parsedType
      }), C;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (_(s, {
      code: h.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), r.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (_(s, {
      code: h.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), r.dirty());
    const a = this._def.valueType;
    function i(c) {
      const d = /* @__PURE__ */ new Set();
      for (const p of c) {
        if (p.status === "aborted")
          return C;
        p.status === "dirty" && r.dirty(), d.add(p.value);
      }
      return { status: r.value, value: d };
    }
    const u = [...s.data.values()].map((c, d) => a._parse(new ve(s, c, s.path, d)));
    return s.common.async ? Promise.all(u).then((c) => i(c)) : i(u);
  }
  min(e, r) {
    return new $e({
      ...this._def,
      minSize: { value: e, message: k.toString(r) }
    });
  }
  max(e, r) {
    return new $e({
      ...this._def,
      maxSize: { value: e, message: k.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
$e.create = (t, e) => new $e({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: S.ZodSet,
  ...A(e)
});
class Je extends V {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== v.function)
      return _(r, {
        code: h.invalid_type,
        expected: v.function,
        received: r.parsedType
      }), C;
    function s(u, c) {
      return Et({
        data: u,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          St(),
          rt
        ].filter((d) => !!d),
        issueData: {
          code: h.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function n(u, c) {
      return Et({
        data: u,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          St(),
          rt
        ].filter((d) => !!d),
        issueData: {
          code: h.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: r.common.contextualErrorMap }, i = r.data;
    if (this._def.returns instanceof Ke) {
      const u = this;
      return te(async function(...c) {
        const d = new de([]), p = await u._def.args.parseAsync(c, a).catch((z) => {
          throw d.addIssue(s(c, z)), d;
        }), x = await Reflect.apply(i, this, p);
        return await u._def.returns._def.type.parseAsync(x, a).catch((z) => {
          throw d.addIssue(n(x, z)), d;
        });
      });
    } else {
      const u = this;
      return te(function(...c) {
        const d = u._def.args.safeParse(c, a);
        if (!d.success)
          throw new de([s(c, d.error)]);
        const p = Reflect.apply(i, this, d.data), x = u._def.returns.safeParse(p, a);
        if (!x.success)
          throw new de([n(p, x.error)]);
        return x.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Je({
      ...this._def,
      args: _e.create(e).rest(Le.create())
    });
  }
  returns(e) {
    return new Je({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, s) {
    return new Je({
      args: e || _e.create([]).rest(Le.create()),
      returns: r || Le.create(),
      typeName: S.ZodFunction,
      ...A(s)
    });
  }
}
class lt extends V {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
lt.create = (t, e) => new lt({
  getter: t,
  typeName: S.ZodLazy,
  ...A(e)
});
class dt extends V {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return _(r, {
        received: r.data,
        code: h.invalid_literal,
        expected: this._def.value
      }), C;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
dt.create = (t, e) => new dt({
  value: t,
  typeName: S.ZodLiteral,
  ...A(e)
});
function jr(t, e) {
  return new Re({
    values: t,
    typeName: S.ZodEnum,
    ...A(e)
  });
}
class Re extends V {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return _(r, {
        expected: R.joinValues(s),
        received: r.parsedType,
        code: h.invalid_type
      }), C;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), s = this._def.values;
      return _(r, {
        received: r.data,
        code: h.invalid_enum_value,
        options: s
      }), C;
    }
    return te(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e) {
    return Re.create(e);
  }
  exclude(e) {
    return Re.create(this.options.filter((r) => !e.includes(r)));
  }
}
Re.create = jr;
class ft extends V {
  _parse(e) {
    const r = R.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== v.string && s.parsedType !== v.number) {
      const n = R.objectValues(r);
      return _(s, {
        expected: R.joinValues(n),
        received: s.parsedType,
        code: h.invalid_type
      }), C;
    }
    if (r.indexOf(e.data) === -1) {
      const n = R.objectValues(r);
      return _(s, {
        received: s.data,
        code: h.invalid_enum_value,
        options: n
      }), C;
    }
    return te(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ft.create = (t, e) => new ft({
  values: t,
  typeName: S.ZodNativeEnum,
  ...A(e)
});
class Ke extends V {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== v.promise && r.common.async === !1)
      return _(r, {
        code: h.invalid_type,
        expected: v.promise,
        received: r.parsedType
      }), C;
    const s = r.parsedType === v.promise ? r.data : Promise.resolve(r.data);
    return te(s.then((n) => this._def.type.parseAsync(n, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Ke.create = (t, e) => new Ke({
  type: t,
  typeName: S.ZodPromise,
  ...A(e)
});
class he extends V {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === S.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e), n = this._def.effect || null, a = {
      addIssue: (i) => {
        _(s, i), i.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), n.type === "preprocess") {
      const i = n.transform(s.data, a);
      return s.common.issues.length ? {
        status: "dirty",
        value: s.data
      } : s.common.async ? Promise.resolve(i).then((u) => this._def.schema._parseAsync({
        data: u,
        path: s.path,
        parent: s
      })) : this._def.schema._parseSync({
        data: i,
        path: s.path,
        parent: s
      });
    }
    if (n.type === "refinement") {
      const i = (u) => {
        const c = n.refinement(u, a);
        if (s.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return u;
      };
      if (s.common.async === !1) {
        const u = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return u.status === "aborted" ? C : (u.status === "dirty" && r.dirty(), i(u.value), { status: r.value, value: u.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((u) => u.status === "aborted" ? C : (u.status === "dirty" && r.dirty(), i(u.value).then(() => ({ status: r.value, value: u.value }))));
    }
    if (n.type === "transform")
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!st(i))
          return i;
        const u = n.transform(i.value, a);
        if (u instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: u };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => st(i) ? Promise.resolve(n.transform(i.value, a)).then((u) => ({ status: r.value, value: u })) : i);
    R.assertNever(n);
  }
}
he.create = (t, e, r) => new he({
  schema: t,
  typeName: S.ZodEffects,
  effect: e,
  ...A(r)
});
he.createWithPreprocess = (t, e, r) => new he({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: S.ZodEffects,
  ...A(r)
});
class ke extends V {
  _parse(e) {
    return this._getType(e) === v.undefined ? te(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ke.create = (t, e) => new ke({
  innerType: t,
  typeName: S.ZodOptional,
  ...A(e)
});
class Be extends V {
  _parse(e) {
    return this._getType(e) === v.null ? te(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Be.create = (t, e) => new Be({
  innerType: t,
  typeName: S.ZodNullable,
  ...A(e)
});
class ht extends V {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let s = r.data;
    return r.parsedType === v.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ht.create = (t, e) => new ht({
  innerType: t,
  typeName: S.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...A(e)
});
class Rt extends V {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, n = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    return Ct(n) ? n.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new de(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new de(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Rt.create = (t, e) => new Rt({
  innerType: t,
  typeName: S.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...A(e)
});
class Nt extends V {
  _parse(e) {
    if (this._getType(e) !== v.nan) {
      const s = this._getOrReturnCtx(e);
      return _(s, {
        code: h.invalid_type,
        expected: v.nan,
        received: s.parsedType
      }), C;
    }
    return { status: "valid", value: e.data };
  }
}
Nt.create = (t) => new Nt({
  typeName: S.ZodNaN,
  ...A(t)
});
const Xs = Symbol("zod_brand");
class Pr extends V {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), s = r.data;
    return this._def.type._parse({
      data: s,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class mt extends V {
  _parse(e) {
    const { status: r, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return a.status === "aborted" ? C : a.status === "dirty" ? (r.dirty(), Mr(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: s.path,
          parent: s
        });
      })();
    {
      const n = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      return n.status === "aborted" ? C : n.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: n.value
      }) : this._def.out._parseSync({
        data: n.value,
        path: s.path,
        parent: s
      });
    }
  }
  static create(e, r) {
    return new mt({
      in: e,
      out: r,
      typeName: S.ZodPipeline
    });
  }
}
class Zt extends V {
  _parse(e) {
    const r = this._def.innerType._parse(e);
    return st(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Zt.create = (t, e) => new Zt({
  innerType: t,
  typeName: S.ZodReadonly,
  ...A(e)
});
const Lr = (t, e = {}, r) => t ? Ge.create().superRefine((s, n) => {
  var a, i;
  if (!t(s)) {
    const u = typeof e == "function" ? e(s) : typeof e == "string" ? { message: e } : e, c = (i = (a = u.fatal) !== null && a !== void 0 ? a : r) !== null && i !== void 0 ? i : !0, d = typeof u == "string" ? { message: u } : u;
    n.addIssue({ code: "custom", ...d, fatal: c });
  }
}) : Ge.create(), en = {
  object: L.lazycreate
};
var S;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(S || (S = {}));
const tn = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Lr((r) => r instanceof t, e), Fr = le.create, Ur = Oe.create, rn = Nt.create, sn = Ve.create, $r = nt.create, nn = Ue.create, an = At.create, on = at.create, un = it.create, cn = Ge.create, ln = Le.create, dn = Te.create, fn = Ot.create, hn = fe.create, pn = L.create, mn = L.strictCreate, yn = ot.create, gn = Lt.create, vn = ut.create, _n = _e.create, bn = ct.create, xn = Vt.create, wn = $e.create, kn = Je.create, Tn = lt.create, Sn = dt.create, En = Re.create, Cn = ft.create, An = Ke.create, wr = he.create, On = ke.create, Vn = Be.create, Rn = he.createWithPreprocess, Nn = mt.create, Zn = () => Fr().optional(), Dn = () => Ur().optional(), In = () => $r().optional(), Mn = {
  string: (t) => le.create({ ...t, coerce: !0 }),
  number: (t) => Oe.create({ ...t, coerce: !0 }),
  boolean: (t) => nt.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Ve.create({ ...t, coerce: !0 }),
  date: (t) => Ue.create({ ...t, coerce: !0 })
}, jn = C;
var ka = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: rt,
  setErrorMap: Fs,
  getErrorMap: St,
  makeIssue: Et,
  EMPTY_PATH: Us,
  addIssueToContext: _,
  ParseStatus: G,
  INVALID: C,
  DIRTY: Mr,
  OK: te,
  isAborted: Xt,
  isDirty: er,
  isValid: st,
  isAsync: Ct,
  get util() {
    return R;
  },
  get objectUtil() {
    return Kt;
  },
  ZodParsedType: v,
  getParsedType: Ee,
  ZodType: V,
  ZodString: le,
  ZodNumber: Oe,
  ZodBigInt: Ve,
  ZodBoolean: nt,
  ZodDate: Ue,
  ZodSymbol: At,
  ZodUndefined: at,
  ZodNull: it,
  ZodAny: Ge,
  ZodUnknown: Le,
  ZodNever: Te,
  ZodVoid: Ot,
  ZodArray: fe,
  ZodObject: L,
  ZodUnion: ot,
  ZodDiscriminatedUnion: Lt,
  ZodIntersection: ut,
  ZodTuple: _e,
  ZodRecord: ct,
  ZodMap: Vt,
  ZodSet: $e,
  ZodFunction: Je,
  ZodLazy: lt,
  ZodLiteral: dt,
  ZodEnum: Re,
  ZodNativeEnum: ft,
  ZodPromise: Ke,
  ZodEffects: he,
  ZodTransformer: he,
  ZodOptional: ke,
  ZodNullable: Be,
  ZodDefault: ht,
  ZodCatch: Rt,
  ZodNaN: Nt,
  BRAND: Xs,
  ZodBranded: Pr,
  ZodPipeline: mt,
  ZodReadonly: Zt,
  custom: Lr,
  Schema: V,
  ZodSchema: V,
  late: en,
  get ZodFirstPartyTypeKind() {
    return S;
  },
  coerce: Mn,
  any: cn,
  array: hn,
  bigint: sn,
  boolean: $r,
  date: nn,
  discriminatedUnion: gn,
  effect: wr,
  enum: En,
  function: kn,
  instanceof: tn,
  intersection: vn,
  lazy: Tn,
  literal: Sn,
  map: xn,
  nan: rn,
  nativeEnum: Cn,
  never: dn,
  null: un,
  nullable: Vn,
  number: Ur,
  object: pn,
  oboolean: In,
  onumber: Dn,
  optional: On,
  ostring: Zn,
  pipeline: Nn,
  preprocess: Rn,
  promise: An,
  record: bn,
  set: wn,
  strictObject: mn,
  string: Fr,
  symbol: an,
  transformer: wr,
  tuple: _n,
  undefined: on,
  union: yn,
  unknown: ln,
  void: fn,
  NEVER: jn,
  ZodIssueCode: h,
  quotelessJson: Ls,
  ZodError: de
});
const Ta = ({
  children: t,
  className: e,
  form: r
}) => {
  const s = r.formState.errors;
  return /* @__PURE__ */ Fe("form", { className: e, onSubmit: r.onSubmit, children: [
    s.root && /* @__PURE__ */ Fe(Os, { severity: "error", children: [
      /* @__PURE__ */ U(Vs, { children: s.root.message }),
      s.root.fields && /* @__PURE__ */ U("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(s.root.fields).map(([n, {
        message: a
      }]) => /* @__PURE__ */ U("li", { css: {}, children: a }, n)) })
    ] }),
    t
  ] });
};
var yt = (t) => t.type === "checkbox", Qe = (t) => t instanceof Date, ee = (t) => t == null;
const Br = (t) => typeof t == "object";
var H = (t) => !ee(t) && !Array.isArray(t) && Br(t) && !Qe(t), zr = (t) => H(t) && t.target ? yt(t.target) ? t.target.checked : t.target.value : t, Pn = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t, Wr = (t, e) => t.has(Pn(e)), Ln = (t) => {
  const e = t.constructor && t.constructor.prototype;
  return H(e) && e.hasOwnProperty("isPrototypeOf");
}, rr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function oe(t) {
  let e;
  const r = Array.isArray(t);
  if (t instanceof Date)
    e = new Date(t);
  else if (t instanceof Set)
    e = new Set(t);
  else if (!(rr && (t instanceof Blob || t instanceof FileList)) && (r || H(t)))
    if (e = r ? [] : {}, !r && !Ln(t))
      e = t;
    else
      for (const s in t)
        t.hasOwnProperty(s) && (e[s] = oe(t[s]));
  else
    return t;
  return e;
}
var gt = (t) => Array.isArray(t) ? t.filter(Boolean) : [], F = (t) => t === void 0, g = (t, e, r) => {
  if (!e || !H(t))
    return r;
  const s = gt(e.split(/[,[\].]+?/)).reduce((n, a) => ee(n) ? n : n[a], t);
  return F(s) || s === t ? F(t[e]) ? r : t[e] : s;
}, ue = (t) => typeof t == "boolean";
const Dt = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ce = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, xe = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Fn = j.createContext(null), sr = () => j.useContext(Fn);
var qr = (t, e, r, s = !0) => {
  const n = {
    defaultValues: e._defaultValues
  };
  for (const a in t)
    Object.defineProperty(n, a, {
      get: () => {
        const i = a;
        return e._proxyFormState[i] !== ce.all && (e._proxyFormState[i] = !s || ce.all), r && (r[i] = !0), t[i];
      }
    });
  return n;
}, ae = (t) => H(t) && !Object.keys(t).length, Hr = (t, e, r, s) => {
  r(t);
  const { name: n, ...a } = t;
  return ae(a) || Object.keys(a).length >= Object.keys(e).length || Object.keys(a).find((i) => e[i] === (!s || ce.all));
}, wt = (t) => Array.isArray(t) ? t : [t], Qr = (t, e, r) => !t || !e || t === e || wt(t).some((s) => s && (r ? s === e : s.startsWith(e) || e.startsWith(s)));
function nr(t) {
  const e = j.useRef(t);
  e.current = t, j.useEffect(() => {
    const r = !t.disabled && e.current.subject && e.current.subject.subscribe({
      next: e.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [t.disabled]);
}
function Un(t) {
  const e = sr(), { control: r = e.control, disabled: s, name: n, exact: a } = t || {}, [i, u] = j.useState(r._formState), c = j.useRef(!0), d = j.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), p = j.useRef(n);
  return p.current = n, nr({
    disabled: s,
    next: (x) => c.current && Qr(p.current, x.name, a) && Hr(x, d.current, r._updateFormState) && u({
      ...r._formState,
      ...x
    }),
    subject: r._subjects.state
  }), j.useEffect(() => (c.current = !0, d.current.isValid && r._updateValid(!0), () => {
    c.current = !1;
  }), [r]), qr(i, r, d.current, !1);
}
var ge = (t) => typeof t == "string", Jr = (t, e, r, s, n) => ge(t) ? (s && e.watch.add(t), g(r, t, n)) : Array.isArray(t) ? t.map((a) => (s && e.watch.add(a), g(r, a))) : (s && (e.watchAll = !0), r);
function $n(t) {
  const e = sr(), { control: r = e.control, name: s, defaultValue: n, disabled: a, exact: i } = t || {}, u = j.useRef(s);
  u.current = s, nr({
    disabled: a,
    subject: r._subjects.values,
    next: (p) => {
      Qr(u.current, p.name, i) && d(oe(Jr(u.current, r._names, p.values || r._formValues, !1, n)));
    }
  });
  const [c, d] = j.useState(r._getWatch(s, n));
  return j.useEffect(() => r._removeUnmounted()), c;
}
var ar = (t) => /^\w*$/.test(t), Yr = (t) => gt(t.replace(/["|']|\]/g, "").split(/\.|\[/)), Z = (t, e, r) => {
  let s = -1;
  const n = ar(e) ? [e] : Yr(e), a = n.length, i = a - 1;
  for (; ++s < a; ) {
    const u = n[s];
    let c = r;
    if (s !== i) {
      const d = t[u];
      c = H(d) || Array.isArray(d) ? d : isNaN(+n[s + 1]) ? {} : [];
    }
    t[u] = c, t = t[u];
  }
  return t;
};
function Bn(t) {
  const e = sr(), { name: r, disabled: s, control: n = e.control, shouldUnregister: a } = t, i = Wr(n._names.array, r), u = $n({
    control: n,
    name: r,
    defaultValue: g(n._formValues, r, g(n._defaultValues, r, t.defaultValue)),
    exact: !0
  }), c = Un({
    control: n,
    name: r
  }), d = j.useRef(n.register(r, {
    ...t.rules,
    value: u,
    disabled: t.disabled
  }));
  return d.current = n.register(r, t.rules), j.useEffect(() => {
    const p = n._options.shouldUnregister || a, x = (w, z) => {
      const B = g(n._fields, w);
      B && (B._f.mount = z);
    };
    if (x(r, !0), p) {
      const w = oe(g(n._options.defaultValues, r));
      Z(n._defaultValues, r, w), F(g(n._formValues, r)) && Z(n._formValues, r, w);
    }
    return () => {
      (i ? p && !n._state.action : p) ? n.unregister(r) : x(r, !1);
    };
  }, [r, n, i, a]), j.useEffect(() => {
    g(n._fields, r) && n._updateDisabledField({
      disabled: s,
      fields: n._fields,
      name: r,
      value: g(n._fields, r)._f.value
    });
  }, [s, r, n]), {
    field: {
      name: r,
      value: u,
      ...ue(s) || ue(c.disabled) ? { disabled: c.disabled || s } : {},
      onChange: j.useCallback((p) => d.current.onChange({
        target: {
          value: zr(p),
          name: r
        },
        type: Dt.CHANGE
      }), [r]),
      onBlur: j.useCallback(() => d.current.onBlur({
        target: {
          value: g(n._formValues, r),
          name: r
        },
        type: Dt.BLUR
      }), [r, n]),
      ref: (p) => {
        const x = g(n._fields, r);
        x && p && (x._f.ref = {
          focus: () => p.focus(),
          select: () => p.select(),
          setCustomValidity: (w) => p.setCustomValidity(w),
          reportValidity: () => p.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!g(c.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!g(c.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!g(c.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => g(c.errors, r)
      }
    })
  };
}
const Sa = (t) => t.render(Bn(t));
var Gr = (t, e, r, s, n) => e ? {
  ...r[t],
  types: {
    ...r[t] && r[t].types ? r[t].types : {},
    [s]: n || !0
  }
} : {}, kr = (t) => ({
  isOnSubmit: !t || t === ce.onSubmit,
  isOnBlur: t === ce.onBlur,
  isOnChange: t === ce.onChange,
  isOnAll: t === ce.all,
  isOnTouch: t === ce.onTouched
}), Tr = (t, e, r) => !r && (e.watchAll || e.watch.has(t) || [...e.watch].some((s) => t.startsWith(s) && /^\.\w+/.test(t.slice(s.length))));
const tt = (t, e, r, s) => {
  for (const n of r || Object.keys(t)) {
    const a = g(t, n);
    if (a) {
      const { _f: i, ...u } = a;
      if (i) {
        if (i.refs && i.refs[0] && e(i.refs[0], n) && !s)
          break;
        if (i.ref && e(i.ref, i.name) && !s)
          break;
        tt(u, e);
      } else
        H(u) && tt(u, e);
    }
  }
};
var zn = (t, e, r) => {
  const s = gt(g(t, r));
  return Z(s, "root", e[r]), Z(t, r, s), t;
}, ir = (t) => t.type === "file", Ae = (t) => typeof t == "function", It = (t) => {
  if (!rr)
    return !1;
  const e = t ? t.ownerDocument : 0;
  return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, kt = (t) => ge(t), or = (t) => t.type === "radio", Mt = (t) => t instanceof RegExp;
const Sr = {
  value: !1,
  isValid: !1
}, Er = { value: !0, isValid: !0 };
var Kr = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const e = t.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: e, isValid: !!e.length };
    }
    return t[0].checked && !t[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      t[0].attributes && !F(t[0].attributes.value) ? F(t[0].value) || t[0].value === "" ? Er : { value: t[0].value, isValid: !0 } : Er
    ) : Sr;
  }
  return Sr;
};
const Cr = {
  isValid: !1,
  value: null
};
var Xr = (t) => Array.isArray(t) ? t.reduce((e, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : e, Cr) : Cr;
function Ar(t, e, r = "validate") {
  if (kt(t) || Array.isArray(t) && t.every(kt) || ue(t) && !t)
    return {
      type: r,
      message: kt(t) ? t : "",
      ref: e
    };
}
var qe = (t) => H(t) && !Mt(t) ? t : {
  value: t,
  message: ""
}, Or = async (t, e, r, s, n) => {
  const { ref: a, refs: i, required: u, maxLength: c, minLength: d, min: p, max: x, pattern: w, validate: z, name: B, valueAsNumber: re, mount: be, disabled: Ne } = t._f, O = g(e, B);
  if (!be || Ne)
    return {};
  const K = i ? i[0] : a, Q = (E) => {
    s && K.reportValidity && (K.setCustomValidity(ue(E) ? "" : E || ""), K.reportValidity());
  }, D = {}, pe = or(a), me = yt(a), Ze = pe || me, Se = (re || ir(a)) && F(a.value) && F(O) || It(a) && a.value === "" || O === "" || Array.isArray(O) && !O.length, se = Gr.bind(null, B, r, D), W = (E, N, P, Y = xe.maxLength, ye = xe.minLength) => {
    const ie = E ? N : P;
    D[B] = {
      type: E ? Y : ye,
      message: ie,
      ref: a,
      ...se(E ? Y : ye, ie)
    };
  };
  if (n ? !Array.isArray(O) || !O.length : u && (!Ze && (Se || ee(O)) || ue(O) && !O || me && !Kr(i).isValid || pe && !Xr(i).isValid)) {
    const { value: E, message: N } = kt(u) ? { value: !!u, message: u } : qe(u);
    if (E && (D[B] = {
      type: xe.required,
      message: N,
      ref: K,
      ...se(xe.required, N)
    }, !r))
      return Q(N), D;
  }
  if (!Se && (!ee(p) || !ee(x))) {
    let E, N;
    const P = qe(x), Y = qe(p);
    if (!ee(O) && !isNaN(O)) {
      const ye = a.valueAsNumber || O && +O;
      ee(P.value) || (E = ye > P.value), ee(Y.value) || (N = ye < Y.value);
    } else {
      const ye = a.valueAsDate || new Date(O), ie = (vt) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + vt), Xe = a.type == "time", De = a.type == "week";
      ge(P.value) && O && (E = Xe ? ie(O) > ie(P.value) : De ? O > P.value : ye > new Date(P.value)), ge(Y.value) && O && (N = Xe ? ie(O) < ie(Y.value) : De ? O < Y.value : ye < new Date(Y.value));
    }
    if ((E || N) && (W(!!E, P.message, Y.message, xe.max, xe.min), !r))
      return Q(D[B].message), D;
  }
  if ((c || d) && !Se && (ge(O) || n && Array.isArray(O))) {
    const E = qe(c), N = qe(d), P = !ee(E.value) && O.length > +E.value, Y = !ee(N.value) && O.length < +N.value;
    if ((P || Y) && (W(P, E.message, N.message), !r))
      return Q(D[B].message), D;
  }
  if (w && !Se && ge(O)) {
    const { value: E, message: N } = qe(w);
    if (Mt(E) && !O.match(E) && (D[B] = {
      type: xe.pattern,
      message: N,
      ref: a,
      ...se(xe.pattern, N)
    }, !r))
      return Q(N), D;
  }
  if (z) {
    if (Ae(z)) {
      const E = await z(O, e), N = Ar(E, K);
      if (N && (D[B] = {
        ...N,
        ...se(xe.validate, N.message)
      }, !r))
        return Q(N.message), D;
    } else if (H(z)) {
      let E = {};
      for (const N in z) {
        if (!ae(E) && !r)
          break;
        const P = Ar(await z[N](O, e), K, N);
        P && (E = {
          ...P,
          ...se(N, P.message)
        }, Q(P.message), r && (D[B] = E));
      }
      if (!ae(E) && (D[B] = {
        ref: K,
        ...E
      }, !r))
        return D;
    }
  }
  return Q(!0), D;
};
function Wn(t, e) {
  const r = e.slice(0, -1).length;
  let s = 0;
  for (; s < r; )
    t = F(t) ? s++ : t[e[s++]];
  return t;
}
function qn(t) {
  for (const e in t)
    if (t.hasOwnProperty(e) && !F(t[e]))
      return !1;
  return !0;
}
function J(t, e) {
  const r = Array.isArray(e) ? e : ar(e) ? [e] : Yr(e), s = r.length === 1 ? t : Wn(t, r), n = r.length - 1, a = r[n];
  return s && delete s[a], n !== 0 && (H(s) && ae(s) || Array.isArray(s) && qn(s)) && J(t, r.slice(0, -1)), t;
}
var Ht = () => {
  let t = [];
  return {
    get observers() {
      return t;
    },
    next: (n) => {
      for (const a of t)
        a.next && a.next(n);
    },
    subscribe: (n) => (t.push(n), {
      unsubscribe: () => {
        t = t.filter((a) => a !== n);
      }
    }),
    unsubscribe: () => {
      t = [];
    }
  };
}, jt = (t) => ee(t) || !Br(t);
function Pe(t, e) {
  if (jt(t) || jt(e))
    return t === e;
  if (Qe(t) && Qe(e))
    return t.getTime() === e.getTime();
  const r = Object.keys(t), s = Object.keys(e);
  if (r.length !== s.length)
    return !1;
  for (const n of r) {
    const a = t[n];
    if (!s.includes(n))
      return !1;
    if (n !== "ref") {
      const i = e[n];
      if (Qe(a) && Qe(i) || H(a) && H(i) || Array.isArray(a) && Array.isArray(i) ? !Pe(a, i) : a !== i)
        return !1;
    }
  }
  return !0;
}
var es = (t) => t.type === "select-multiple", Hn = (t) => or(t) || yt(t), Qt = (t) => It(t) && t.isConnected, ts = (t) => {
  for (const e in t)
    if (Ae(t[e]))
      return !0;
  return !1;
};
function Pt(t, e = {}) {
  const r = Array.isArray(t);
  if (H(t) || r)
    for (const s in t)
      Array.isArray(t[s]) || H(t[s]) && !ts(t[s]) ? (e[s] = Array.isArray(t[s]) ? [] : {}, Pt(t[s], e[s])) : ee(t[s]) || (e[s] = !0);
  return e;
}
function rs(t, e, r) {
  const s = Array.isArray(t);
  if (H(t) || s)
    for (const n in t)
      Array.isArray(t[n]) || H(t[n]) && !ts(t[n]) ? F(e) || jt(r[n]) ? r[n] = Array.isArray(t[n]) ? Pt(t[n], []) : { ...Pt(t[n]) } : rs(t[n], ee(e) ? {} : e[n], r[n]) : r[n] = !Pe(t[n], e[n]);
  return r;
}
var Jt = (t, e) => rs(t, e, Pt(e)), ss = (t, { valueAsNumber: e, valueAsDate: r, setValueAs: s }) => F(t) ? t : e ? t === "" ? NaN : t && +t : r && ge(t) ? new Date(t) : s ? s(t) : t;
function Yt(t) {
  const e = t.ref;
  if (!(t.refs ? t.refs.every((r) => r.disabled) : e.disabled))
    return ir(e) ? e.files : or(e) ? Xr(t.refs).value : es(e) ? [...e.selectedOptions].map(({ value: r }) => r) : yt(e) ? Kr(t.refs).value : ss(F(e.value) ? t.ref.value : e.value, t);
}
var Qn = (t, e, r, s) => {
  const n = {};
  for (const a of t) {
    const i = g(e, a);
    i && Z(n, a, i._f);
  }
  return {
    criteriaMode: r,
    names: [...t],
    fields: n,
    shouldUseNativeValidation: s
  };
}, et = (t) => F(t) ? t : Mt(t) ? t.source : H(t) ? Mt(t.value) ? t.value.source : t.value : t, Jn = (t) => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function Vr(t, e, r) {
  const s = g(t, r);
  if (s || ar(r))
    return {
      error: s,
      name: r
    };
  const n = r.split(".");
  for (; n.length; ) {
    const a = n.join("."), i = g(e, a), u = g(t, a);
    if (i && !Array.isArray(i) && r !== a)
      return { name: r };
    if (u && u.type)
      return {
        name: a,
        error: u
      };
    n.pop();
  }
  return {
    name: r
  };
}
var Yn = (t, e, r, s, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(e || t) : (r ? s.isOnBlur : n.isOnBlur) ? !t : (r ? s.isOnChange : n.isOnChange) ? t : !0, Gn = (t, e) => !gt(g(t, e)).length && J(t, e);
const Kn = {
  mode: ce.onSubmit,
  reValidateMode: ce.onChange,
  shouldFocusError: !0
};
function Xn(t = {}, e) {
  let r = {
    ...Kn,
    ...t
  }, s = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Ae(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, n = {}, a = H(r.defaultValues) || H(r.values) ? oe(r.defaultValues || r.values) || {} : {}, i = r.shouldUnregister ? {} : oe(a), u = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, d, p = 0;
  const x = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, w = {
    values: Ht(),
    array: Ht(),
    state: Ht()
  }, z = t.resetOptions && t.resetOptions.keepDirtyValues, B = kr(r.mode), re = kr(r.reValidateMode), be = r.criteriaMode === ce.all, Ne = (o) => (l) => {
    clearTimeout(p), p = setTimeout(o, l);
  }, O = async (o) => {
    if (x.isValid || o) {
      const l = r.resolver ? ae((await se()).errors) : await E(n, !0);
      l !== s.isValid && w.state.next({
        isValid: l
      });
    }
  }, K = (o) => x.isValidating && w.state.next({
    isValidating: o
  }), Q = (o, l = [], f, b, y = !0, m = !0) => {
    if (b && f) {
      if (u.action = !0, m && Array.isArray(g(n, o))) {
        const T = f(g(n, o), b.argA, b.argB);
        y && Z(n, o, T);
      }
      if (m && Array.isArray(g(s.errors, o))) {
        const T = f(g(s.errors, o), b.argA, b.argB);
        y && Z(s.errors, o, T), Gn(s.errors, o);
      }
      if (x.touchedFields && m && Array.isArray(g(s.touchedFields, o))) {
        const T = f(g(s.touchedFields, o), b.argA, b.argB);
        y && Z(s.touchedFields, o, T);
      }
      x.dirtyFields && (s.dirtyFields = Jt(a, i)), w.state.next({
        name: o,
        isDirty: P(o, l),
        dirtyFields: s.dirtyFields,
        errors: s.errors,
        isValid: s.isValid
      });
    } else
      Z(i, o, l);
  }, D = (o, l) => {
    Z(s.errors, o, l), w.state.next({
      errors: s.errors
    });
  }, pe = (o) => {
    s.errors = o, w.state.next({
      errors: s.errors,
      isValid: !1
    });
  }, me = (o, l, f, b) => {
    const y = g(n, o);
    if (y) {
      const m = g(i, o, F(f) ? g(a, o) : f);
      F(m) || b && b.defaultChecked || l ? Z(i, o, l ? m : Yt(y._f)) : ie(o, m), u.mount && O();
    }
  }, Ze = (o, l, f, b, y) => {
    let m = !1, T = !1;
    const M = {
      name: o
    };
    if (!f || b) {
      x.isDirty && (T = s.isDirty, s.isDirty = M.isDirty = P(), m = T !== M.isDirty);
      const q = Pe(g(a, o), l);
      T = g(s.dirtyFields, o), q ? J(s.dirtyFields, o) : Z(s.dirtyFields, o, !0), M.dirtyFields = s.dirtyFields, m = m || x.dirtyFields && T !== !q;
    }
    if (f) {
      const q = g(s.touchedFields, o);
      q || (Z(s.touchedFields, o, f), M.touchedFields = s.touchedFields, m = m || x.touchedFields && q !== f);
    }
    return m && y && w.state.next(M), m ? M : {};
  }, Se = (o, l, f, b) => {
    const y = g(s.errors, o), m = x.isValid && ue(l) && s.isValid !== l;
    if (t.delayError && f ? (d = Ne(() => D(o, f)), d(t.delayError)) : (clearTimeout(p), d = null, f ? Z(s.errors, o, f) : J(s.errors, o)), (f ? !Pe(y, f) : y) || !ae(b) || m) {
      const T = {
        ...b,
        ...m && ue(l) ? { isValid: l } : {},
        errors: s.errors,
        name: o
      };
      s = {
        ...s,
        ...T
      }, w.state.next(T);
    }
    K(!1);
  }, se = async (o) => r.resolver(i, r.context, Qn(o || c.mount, n, r.criteriaMode, r.shouldUseNativeValidation)), W = async (o) => {
    const { errors: l } = await se(o);
    if (o)
      for (const f of o) {
        const b = g(l, f);
        b ? Z(s.errors, f, b) : J(s.errors, f);
      }
    else
      s.errors = l;
    return l;
  }, E = async (o, l, f = {
    valid: !0
  }) => {
    for (const b in o) {
      const y = o[b];
      if (y) {
        const { _f: m, ...T } = y;
        if (m) {
          const M = c.array.has(m.name), q = await Or(y, i, be, r.shouldUseNativeValidation && !l, M);
          if (q[m.name] && (f.valid = !1, l))
            break;
          !l && (g(q, m.name) ? M ? zn(s.errors, q, m.name) : Z(s.errors, m.name, q[m.name]) : J(s.errors, m.name));
        }
        T && await E(T, l, f);
      }
    }
    return f.valid;
  }, N = () => {
    for (const o of c.unMount) {
      const l = g(n, o);
      l && (l._f.refs ? l._f.refs.every((f) => !Qt(f)) : !Qt(l._f.ref)) && Ut(o);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, P = (o, l) => (o && l && Z(i, o, l), !Pe(cr(), a)), Y = (o, l, f) => Jr(o, c, {
    ...u.mount ? i : F(l) ? a : ge(o) ? { [o]: l } : l
  }, f, l), ye = (o) => gt(g(u.mount ? i : a, o, t.shouldUnregister ? g(a, o, []) : [])), ie = (o, l, f = {}) => {
    const b = g(n, o);
    let y = l;
    if (b) {
      const m = b._f;
      m && (!m.disabled && Z(i, o, ss(l, m)), y = It(m.ref) && ee(l) ? "" : l, es(m.ref) ? [...m.ref.options].forEach((T) => T.selected = y.includes(T.value)) : m.refs ? yt(m.ref) ? m.refs.length > 1 ? m.refs.forEach((T) => (!T.defaultChecked || !T.disabled) && (T.checked = Array.isArray(y) ? !!y.find((M) => M === T.value) : y === T.value)) : m.refs[0] && (m.refs[0].checked = !!y) : m.refs.forEach((T) => T.checked = T.value === y) : ir(m.ref) ? m.ref.value = "" : (m.ref.value = y, m.ref.type || w.values.next({
        name: o,
        values: { ...i }
      })));
    }
    (f.shouldDirty || f.shouldTouch) && Ze(o, y, f.shouldTouch, f.shouldDirty, !0), f.shouldValidate && Ft(o);
  }, Xe = (o, l, f) => {
    for (const b in l) {
      const y = l[b], m = `${o}.${b}`, T = g(n, m);
      (c.array.has(o) || !jt(y) || T && !T._f) && !Qe(y) ? Xe(m, y, f) : ie(m, y, f);
    }
  }, De = (o, l, f = {}) => {
    const b = g(n, o), y = c.array.has(o), m = oe(l);
    Z(i, o, m), y ? (w.array.next({
      name: o,
      values: { ...i }
    }), (x.isDirty || x.dirtyFields) && f.shouldDirty && w.state.next({
      name: o,
      dirtyFields: Jt(a, i),
      isDirty: P(o, m)
    })) : b && !b._f && !ee(m) ? Xe(o, m, f) : ie(o, m, f), Tr(o, c) && w.state.next({ ...s }), w.values.next({
      name: o,
      values: { ...i }
    }), !u.mount && e();
  }, vt = async (o) => {
    const l = o.target;
    let f = l.name, b = !0;
    const y = g(n, f), m = () => l.type ? Yt(y._f) : zr(o), T = (M) => {
      b = Number.isNaN(M) || M === g(i, f, M);
    };
    if (y) {
      let M, q;
      const _t = m(), ze = o.type === Dt.BLUR || o.type === Dt.FOCUS_OUT, fs = !Jn(y._f) && !r.resolver && !g(s.errors, f) && !y._f.deps || Yn(ze, g(s.touchedFields, f), s.isSubmitted, re, B), Bt = Tr(f, c, ze);
      Z(i, f, _t), ze ? (y._f.onBlur && y._f.onBlur(o), d && d(0)) : y._f.onChange && y._f.onChange(o);
      const zt = Ze(f, _t, ze, !1), hs = !ae(zt) || Bt;
      if (!ze && w.values.next({
        name: f,
        type: o.type,
        values: { ...i }
      }), fs)
        return x.isValid && O(), hs && w.state.next({ name: f, ...Bt ? {} : zt });
      if (!ze && Bt && w.state.next({ ...s }), K(!0), r.resolver) {
        const { errors: gr } = await se([f]);
        if (T(_t), b) {
          const ps = Vr(s.errors, n, f), vr = Vr(gr, n, ps.name || f);
          M = vr.error, f = vr.name, q = ae(gr);
        }
      } else
        M = (await Or(y, i, be, r.shouldUseNativeValidation))[f], T(_t), b && (M ? q = !1 : x.isValid && (q = await E(n, !0)));
      b && (y._f.deps && Ft(y._f.deps), Se(f, q, M, zt));
    }
  }, ur = (o, l) => {
    if (g(s.errors, l) && o.focus)
      return o.focus(), 1;
  }, Ft = async (o, l = {}) => {
    let f, b;
    const y = wt(o);
    if (K(!0), r.resolver) {
      const m = await W(F(o) ? o : y);
      f = ae(m), b = o ? !y.some((T) => g(m, T)) : f;
    } else
      o ? (b = (await Promise.all(y.map(async (m) => {
        const T = g(n, m);
        return await E(T && T._f ? { [m]: T } : T);
      }))).every(Boolean), !(!b && !s.isValid) && O()) : b = f = await E(n);
    return w.state.next({
      ...!ge(o) || x.isValid && f !== s.isValid ? {} : { name: o },
      ...r.resolver || !o ? { isValid: f } : {},
      errors: s.errors,
      isValidating: !1
    }), l.shouldFocus && !b && tt(n, ur, o ? y : c.mount), b;
  }, cr = (o) => {
    const l = {
      ...a,
      ...u.mount ? i : {}
    };
    return F(o) ? l : ge(o) ? g(l, o) : o.map((f) => g(l, f));
  }, lr = (o, l) => ({
    invalid: !!g((l || s).errors, o),
    isDirty: !!g((l || s).dirtyFields, o),
    isTouched: !!g((l || s).touchedFields, o),
    error: g((l || s).errors, o)
  }), us = (o) => {
    o && wt(o).forEach((l) => J(s.errors, l)), w.state.next({
      errors: o ? s.errors : {}
    });
  }, dr = (o, l, f) => {
    const b = (g(n, o, { _f: {} })._f || {}).ref;
    Z(s.errors, o, {
      ...l,
      ref: b
    }), w.state.next({
      name: o,
      errors: s.errors,
      isValid: !1
    }), f && f.shouldFocus && b && b.focus && b.focus();
  }, cs = (o, l) => Ae(o) ? w.values.subscribe({
    next: (f) => o(Y(void 0, l), f)
  }) : Y(o, l, !0), Ut = (o, l = {}) => {
    for (const f of o ? wt(o) : c.mount)
      c.mount.delete(f), c.array.delete(f), l.keepValue || (J(n, f), J(i, f)), !l.keepError && J(s.errors, f), !l.keepDirty && J(s.dirtyFields, f), !l.keepTouched && J(s.touchedFields, f), !r.shouldUnregister && !l.keepDefaultValue && J(a, f);
    w.values.next({
      values: { ...i }
    }), w.state.next({
      ...s,
      ...l.keepDirty ? { isDirty: P() } : {}
    }), !l.keepIsValid && O();
  }, fr = ({ disabled: o, name: l, field: f, fields: b, value: y }) => {
    if (ue(o)) {
      const m = o ? void 0 : F(y) ? Yt(f ? f._f : g(b, l)._f) : y;
      Z(i, l, m), Ze(l, m, !1, !1, !0);
    }
  }, $t = (o, l = {}) => {
    let f = g(n, o);
    const b = ue(l.disabled);
    return Z(n, o, {
      ...f || {},
      _f: {
        ...f && f._f ? f._f : { ref: { name: o } },
        name: o,
        mount: !0,
        ...l
      }
    }), c.mount.add(o), f ? fr({
      field: f,
      disabled: l.disabled,
      name: o
    }) : me(o, !0, l.value), {
      ...b ? { disabled: l.disabled } : {},
      ...r.progressive ? {
        required: !!l.required,
        min: et(l.min),
        max: et(l.max),
        minLength: et(l.minLength),
        maxLength: et(l.maxLength),
        pattern: et(l.pattern)
      } : {},
      name: o,
      onChange: vt,
      onBlur: vt,
      ref: (y) => {
        if (y) {
          $t(o, l), f = g(n, o);
          const m = F(y.value) && y.querySelectorAll && y.querySelectorAll("input,select,textarea")[0] || y, T = Hn(m), M = f._f.refs || [];
          if (T ? M.find((q) => q === m) : m === f._f.ref)
            return;
          Z(n, o, {
            _f: {
              ...f._f,
              ...T ? {
                refs: [
                  ...M.filter(Qt),
                  m,
                  ...Array.isArray(g(a, o)) ? [{}] : []
                ],
                ref: { type: m.type, name: o }
              } : { ref: m }
            }
          }), me(o, !1, void 0, m);
        } else
          f = g(n, o, {}), f._f && (f._f.mount = !1), (r.shouldUnregister || l.shouldUnregister) && !(Wr(c.array, o) && u.action) && c.unMount.add(o);
      }
    };
  }, hr = () => r.shouldFocusError && tt(n, ur, c.mount), ls = (o) => {
    ue(o) && (w.state.next({ disabled: o }), tt(n, (l, f) => {
      let b = o;
      const y = g(n, f);
      y && ue(y._f.disabled) && (b || (b = y._f.disabled)), l.disabled = b;
    }, 0, !1));
  }, pr = (o, l) => async (f) => {
    f && (f.preventDefault && f.preventDefault(), f.persist && f.persist());
    let b = oe(i);
    if (w.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: y, values: m } = await se();
      s.errors = y, b = m;
    } else
      await E(n);
    J(s.errors, "root"), ae(s.errors) ? (w.state.next({
      errors: {}
    }), await o(b, f)) : (l && await l({ ...s.errors }, f), hr(), setTimeout(hr)), w.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ae(s.errors),
      submitCount: s.submitCount + 1,
      errors: s.errors
    });
  }, ds = (o, l = {}) => {
    g(n, o) && (F(l.defaultValue) ? De(o, g(a, o)) : (De(o, l.defaultValue), Z(a, o, l.defaultValue)), l.keepTouched || J(s.touchedFields, o), l.keepDirty || (J(s.dirtyFields, o), s.isDirty = l.defaultValue ? P(o, g(a, o)) : P()), l.keepError || (J(s.errors, o), x.isValid && O()), w.state.next({ ...s }));
  }, mr = (o, l = {}) => {
    const f = o ? oe(o) : a, b = oe(f), y = o && !ae(o) ? b : a;
    if (l.keepDefaultValues || (a = f), !l.keepValues) {
      if (l.keepDirtyValues || z)
        for (const m of c.mount)
          g(s.dirtyFields, m) ? Z(y, m, g(i, m)) : De(m, g(y, m));
      else {
        if (rr && F(o))
          for (const m of c.mount) {
            const T = g(n, m);
            if (T && T._f) {
              const M = Array.isArray(T._f.refs) ? T._f.refs[0] : T._f.ref;
              if (It(M)) {
                const q = M.closest("form");
                if (q) {
                  q.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      i = t.shouldUnregister ? l.keepDefaultValues ? oe(a) : {} : oe(y), w.array.next({
        values: { ...y }
      }), w.values.next({
        values: { ...y }
      });
    }
    c = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !u.mount && e(), u.mount = !x.isValid || !!l.keepIsValid, u.watch = !!t.shouldUnregister, w.state.next({
      submitCount: l.keepSubmitCount ? s.submitCount : 0,
      isDirty: l.keepDirty ? s.isDirty : !!(l.keepDefaultValues && !Pe(o, a)),
      isSubmitted: l.keepIsSubmitted ? s.isSubmitted : !1,
      dirtyFields: l.keepDirtyValues ? s.dirtyFields : l.keepDefaultValues && o ? Jt(a, o) : {},
      touchedFields: l.keepTouched ? s.touchedFields : {},
      errors: l.keepErrors ? s.errors : {},
      isSubmitSuccessful: l.keepIsSubmitSuccessful ? s.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, yr = (o, l) => mr(Ae(o) ? o(i) : o, l);
  return {
    control: {
      register: $t,
      unregister: Ut,
      getFieldState: lr,
      handleSubmit: pr,
      setError: dr,
      _executeSchema: se,
      _getWatch: Y,
      _getDirty: P,
      _updateValid: O,
      _removeUnmounted: N,
      _updateFieldArray: Q,
      _updateDisabledField: fr,
      _getFieldArray: ye,
      _reset: mr,
      _resetDefaultValues: () => Ae(r.defaultValues) && r.defaultValues().then((o) => {
        yr(o, r.resetOptions), w.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (o) => {
        s = {
          ...s,
          ...o
        };
      },
      _disableForm: ls,
      _subjects: w,
      _proxyFormState: x,
      _setErrors: pe,
      get _fields() {
        return n;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return u;
      },
      set _state(o) {
        u = o;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return c;
      },
      set _names(o) {
        c = o;
      },
      get _formState() {
        return s;
      },
      set _formState(o) {
        s = o;
      },
      get _options() {
        return r;
      },
      set _options(o) {
        r = {
          ...r,
          ...o
        };
      }
    },
    trigger: Ft,
    register: $t,
    handleSubmit: pr,
    watch: cs,
    setValue: De,
    getValues: cr,
    reset: yr,
    resetField: ds,
    clearErrors: us,
    unregister: Ut,
    setError: dr,
    setFocus: (o, l = {}) => {
      const f = g(n, o), b = f && f._f;
      if (b) {
        const y = b.refs ? b.refs[0] : b.ref;
        y.focus && (y.focus(), l.shouldSelect && y.select());
      }
    },
    getFieldState: lr
  };
}
function ea(t = {}) {
  const e = j.useRef(), r = j.useRef(), [s, n] = j.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ae(t.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: t.errors || {},
    disabled: !1,
    defaultValues: Ae(t.defaultValues) ? void 0 : t.defaultValues
  });
  e.current || (e.current = {
    ...Xn(t, () => n((i) => ({ ...i }))),
    formState: s
  });
  const a = e.current.control;
  return a._options = t, nr({
    subject: a._subjects.state,
    next: (i) => {
      Hr(i, a._proxyFormState, a._updateFormState, !0) && n({ ...a._formState });
    }
  }), j.useEffect(() => a._disableForm(t.disabled), [a, t.disabled]), j.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const i = a._getDirty();
      i !== s.isDirty && a._subjects.state.next({
        isDirty: i
      });
    }
  }, [a, s.isDirty]), j.useEffect(() => {
    t.values && !Pe(t.values, r.current) ? (a._reset(t.values, a._options.resetOptions), r.current = t.values, n((i) => ({ ...i }))) : a._resetDefaultValues();
  }, [t.values, a]), j.useEffect(() => {
    t.errors && a._setErrors(t.errors);
  }, [t.errors, a]), j.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), e.current.formState = qr(s, a), e.current;
}
var Rr = function(t, e, r) {
  if (t && "reportValidity" in t) {
    var s = g(r, e);
    t.setCustomValidity(s && s.message || ""), t.reportValidity();
  }
}, ns = function(t, e) {
  var r = function(n) {
    var a = e.fields[n];
    a && a.ref && "reportValidity" in a.ref ? Rr(a.ref, n, t) : a.refs && a.refs.forEach(function(i) {
      return Rr(i, n, t);
    });
  };
  for (var s in e.fields)
    r(s);
}, ta = function(t, e) {
  e.shouldUseNativeValidation && ns(t, e);
  var r = {};
  for (var s in t) {
    var n = g(e.fields, s), a = Object.assign(t[s] || {}, { ref: n && n.ref });
    if (sa(e.names || Object.keys(t), s)) {
      var i = Object.assign({}, ra(g(r, s)));
      Z(i, "root", a), Z(r, s, i);
    } else
      Z(r, s, a);
  }
  return r;
}, ra = function(t) {
  return Array.isArray(t) ? t.filter(Boolean) : [];
}, sa = function(t, e) {
  return t.some(function(r) {
    return r.startsWith(e + ".");
  });
}, na = function(t, e) {
  for (var r = {}; t.length; ) {
    var s = t[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!r[i])
      if ("unionErrors" in s) {
        var u = s.unionErrors[0].errors[0];
        r[i] = { message: u.message, type: u.code };
      } else
        r[i] = { message: a, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(p) {
      return p.errors.forEach(function(x) {
        return t.push(x);
      });
    }), e) {
      var c = r[i].types, d = c && c[s.code];
      r[i] = Gr(i, e, r, n, d ? [].concat(d, s.message) : s.message);
    }
    t.shift();
  }
  return r;
}, aa = function(t, e, r) {
  return r === void 0 && (r = {}), function(s, n, a) {
    try {
      return Promise.resolve(function(i, u) {
        try {
          var c = Promise.resolve(t[r.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(d) {
            return a.shouldUseNativeValidation && ns({}, a), { errors: {}, values: r.raw ? s : d };
          });
        } catch (d) {
          return u(d);
        }
        return c && c.then ? c.then(void 0, u) : c;
      }(0, function(i) {
        if (function(u) {
          return u.errors != null;
        }(i))
          return { values: {}, errors: ta(na(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
};
const ia = ({
  schema: t,
  mode: e = "onChange",
  reValidateMode: r = "onChange",
  onValid: s,
  onInvalid: n,
  ...a
} = {}) => {
  const i = ea({
    mode: e,
    reValidateMode: r,
    resolver: t ? aa(t) : void 0,
    ...a
  });
  return {
    onSubmit: i.handleSubmit((u, c) => s == null ? void 0 : s(u, c), n),
    submit: async () => new Promise((u, c) => {
      i.handleSubmit(async (p, x) => {
        await (s == null ? void 0 : s(p, x)), u(void 0);
      }, (p) => {
        c(p);
      })();
    }),
    ...i
  };
}, Ea = ({
  onValid: t,
  context: e,
  mutation: r,
  ...s
}) => {
  const n = ia({
    context: e,
    onValid: async (a) => {
      await (t == null ? void 0 : t(a)), await (r == null ? void 0 : r.mutateAsync(a, {
        onError: (i, u) => {
          var c, d;
          (c = i.response) != null && c.data.message && n.setError("root", {
            type: "server",
            message: i.response.data.message
          }), (d = i.response) == null || d.data.errors.forEach((p) => {
            p.attribute in u ? n.setError(p.attribute, {
              message: p.msg
            }) : n.setError(`root.fields.${p.attribute}`, {
              type: "server",
              message: p.msg
            });
          });
        }
      }));
    },
    ...s
  });
  return n;
};
var as = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", r = "triangle-exclamation", s = 512, n = 512, a = [9888, "exclamation-triangle", "warning"], i = "f071", u = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  t.definition = {
    prefix: e,
    iconName: r,
    icon: [
      s,
      n,
      a,
      i,
      u
    ]
  }, t.faTriangleExclamation = t.definition, t.prefix = e, t.iconName = r, t.width = s, t.height = n, t.ligatures = a, t.unicode = i, t.svgPathData = u, t.aliases = a;
})(as);
const oa = $.forwardRef(({
  label: t,
  helperText: e,
  inputWrapRef: r,
  error: s,
  ...n
}, a) => {
  const {
    getRootProps: i,
    getInputProps: u
  } = Rs({
    error: !!s,
    ...n
  }), c = u();
  return c.ref = Dr(c.ref, a), c.value = c.value || "", s && (e = s), /* @__PURE__ */ Fe("div", { css: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    paddingTop: "1.5rem"
  }, ...i(), children: [
    /* @__PURE__ */ U("div", { ref: r, children: /* @__PURE__ */ U("input", { className: "peer", css: [{
      height: "100%",
      width: "100%",
      borderRadius: "4px",
      borderWidth: "1px",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: "400",
      "--tw-text-opacity": "1",
      color: "rgb(55 65 81 / var(--tw-text-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-placeholder-opacity))",
        fontWeight: "300"
      },
      outlineStyle: "solid",
      outlineWidth: "0px",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms"
    }, s ? {
      borderColor: "rgb(239 68 68 / 0.9)",
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        color: "rgb(239 68 68 / var(--tw-placeholder-opacity))"
      },
      outlineWidth: "0px",
      ":focus": {
        outlineWidth: "2px",
        outlineColor: "rgb(254 202 202 / 0.9)"
      }
    } : {
      ":hover": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(114 117 191 / var(--tw-border-opacity))"
      },
      ":focus": {
        "--tw-border-opacity": "1",
        borderColor: "rgb(114 117 191 / var(--tw-border-opacity))",
        outlineWidth: "2px",
        outlineColor: "#d2d5eb"
      }
    }], ...n, ...c }) }),
    t && /* @__PURE__ */ U("label", { css: [{
      pointerEvents: "none",
      position: "absolute",
      left: "0px",
      top: "0px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(55 65 81 / var(--tw-text-opacity))",
      ".peer:focus ~ &": {
        "--tw-text-opacity": "1",
        color: "rgb(90 84 161 / var(--tw-text-opacity))"
      }
    }, s && {
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))"
    }], children: t }),
    e && /* @__PURE__ */ Fe("div", { css: [{
      pointerEvents: "none",
      marginTop: "0.25rem",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      fontWeight: "300"
    }, s ? {
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))"
    } : {
      "--tw-text-opacity": "1",
      color: "rgb(107 114 128 / var(--tw-text-opacity))"
    }], children: [
      s && /* @__PURE__ */ U(Tt, { css: {
        color: "rgb(220 38 38 / 0.7)"
      }, icon: as.faTriangleExclamation }),
      e
    ] })
  ] });
}), is = "id", ua = ({
  isLoading: t = !1,
  idField: e = is,
  displayField: r,
  options: s,
  multiple: n,
  open: a,
  onOpen: i,
  onClose: u,
  optionRender: c,
  onChange: d,
  onInputChange: p,
  onSelect: x,
  autoComplete: w = !0,
  autoSelect: z = !1,
  ...B
}, re) => {
  const be = $.useCallback((W) => r && r in W ? W[r] : JSON.stringify(W), [r]), {
    getRootProps: Ne,
    getInputProps: O,
    getListboxProps: K,
    getOptionProps: Q,
    groupedOptions: D,
    setAnchorEl: pe,
    anchorEl: me,
    popupOpen: Ze
  } = Ns({
    options: s,
    id: e,
    autoComplete: w,
    autoSelect: z,
    multiple: n,
    open: a,
    getOptionLabel: be,
    isOptionEqualToValue: (W, E) => e ? W[e] === E[e] : W === E,
    onInputChange: p,
    autoHighlight: !0,
    onOpen: i,
    onClose: u,
    unstable_classNamePrefix: "c",
    onChange: (W, E) => {
      d && (Array.isArray(E) ? d(E.map((N) => N[e])) : d(E && typeof E == "object" ? E[e] : void 0)), x == null || x(E);
    }
  }), Se = Dr(re, pe), se = me && D.length > 0 ? /* @__PURE__ */ U("ul", { css: {
    width: "100%"
  }, ...K(), children: D.map((W, E) => /* @__PURE__ */ U(j.Fragment, { children: "group" in W ? /* @__PURE__ */ U(xs, {}) : /* @__PURE__ */ U("li", { css: [{
    cursor: "pointer",
    "--tw-border-opacity": "1",
    borderColor: "rgb(243 244 246 / var(--tw-border-opacity))",
    padding: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    ":not(:last-child)": {
      borderBottomWidth: "1px"
    }
  }, Zs`
                  &.c-focused {
                    ${{
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }}
                  }
                  &[aria-selected="true"] {
                    ${{
    backgroundColor: "rgb(114 117 191 / 0.9)",
    "--tw-text-opacity": "1",
    color: "rgb(255 255 255 / var(--tw-text-opacity))"
  }}
                  }
                `], ...Q({
    option: W,
    index: E
  }), children: c ? c(W) : be(W) }, W.key) }, e in W ? W[e] : E)) }) : null;
  return /* @__PURE__ */ Fe("div", { ...Ne(), children: [
    /* @__PURE__ */ U(oa, { ...B, ...O(), inputWrapRef: Se }),
    me && /* @__PURE__ */ U(Ds, { open: Ze, anchorEl: me, children: /* @__PURE__ */ U("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: me.offsetWidth
    }], children: t ? /* @__PURE__ */ Fe("div", { css: {
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "0.5rem",
      padding: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(107 114 128 / var(--tw-text-opacity))"
    }, children: [
      /* @__PURE__ */ U(Tt, { icon: ws.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }, spin: !0, size: "lg" }),
      "Загрузка..."
    ] }) : se }) })
  ] });
}, os = $.forwardRef(ua), ca = ({
  dictionary: t,
  open: e = !1,
  ...r
}, s) => {
  const [n, a] = $.useState(e), i = Ss(t, {
    enabled: n
  });
  return $.useEffect(() => {
    a(e);
  }, [e]), /* @__PURE__ */ U(
    os,
    {
      displayField: "name",
      ...r,
      ref: s,
      open: n,
      isLoading: i.isLoading,
      onOpen: () => {
        a(!0);
      },
      onClose: () => {
        a(!1);
      },
      options: i.data || []
    }
  );
}, Ca = $.forwardRef(ca), la = ({
  multiple: t,
  value: e,
  url: r,
  params: s,
  idField: n = is,
  onInputChange: a,
  open: i,
  ...u
}, c) => {
  const [d, p] = $.useState(""), [x, w] = $.useState(i);
  $.useEffect(() => {
    w(i);
  }, [i]);
  const z = $.useMemo(() => ({
    ...s,
    query: d
  }), [d, s]), B = d.length > 0 || x === !0, re = _r(r, {
    enabled: B,
    params: z
  }), be = $.useMemo(() => re.data && e ? t ? !je.every(e, (Q) => je.some(re.data.data, {
    [n]: Q
  })) : !je.some(re.data.data, {
    [n]: e
  }) : !1, [e, re.data]), Ne = $.useMemo(() => ({
    ...s
  }), [e, s]), O = _r(r, {
    params: Ne,
    enabled: be
  }), K = $.useMemo(() => {
    var Q, D;
    return je.uniqBy([...((Q = O.data) == null ? void 0 : Q.data) || [], ...((D = re.data) == null ? void 0 : D.data) || []], n);
  }, [O.data, re.data]);
  return /* @__PURE__ */ U(os, { ref: c, multiple: t, value: e, ...u, options: K, idField: n, onOpen: () => w(!0), onClose: () => w(!1), isLoading: re.isLoading, onInputChange: (Q, D, pe) => {
    pe === "input" && p(D), pe === "reset" && p(""), a == null || a(Q, D, pe);
  } });
}, da = $.forwardRef(la), Aa = (t) => $.forwardRef((e, r) => /* @__PURE__ */ U(da, { ...t, ...e, ref: r }));
export {
  os as C,
  Ca as D,
  Ta as F,
  oa as T,
  xa as a,
  Sa as b,
  wa as c,
  Aa as d,
  Ea as u,
  ka as z
};
