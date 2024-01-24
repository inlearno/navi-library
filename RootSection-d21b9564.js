var Aa = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var K = (e, t, r) => (Aa(e, t, "read from private field"), r ? r.call(e) : t.get(e)), gt = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, bt = (e, t, r, a) => (Aa(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r);
var Rt = (e, t, r) => (Aa(e, t, "access private method"), r);
import { b as Bi, s as Ui, g as zi, n as ms, u as ys, c as Hi, p as qi, a as Ye, j as A, f as ps, F as Mn } from "./library-9eac01d6.js";
import { r as E, R as b, d as Pr, g as gs } from "./react-181b9648.js";
import { s as Gi, c as Qi, l as Ae, f as Ji, a as Ki, b as Xi, h as Vr, u as Pn } from "./useDictionary-cc69974b.js";
import { A as eo, d as to, e as ro, I as ao, a as bs, f as no, u as so, g as sn, i as io, P as _s, k as ca, n as ws, C as oo, l as Vn, m as co, M as uo, t as Ln, B as lo } from "./mui-d2313b11.js";
import { F as dt, P as m } from "./icons-42066a3f.js";
var ut, _e, Ce, et, Yt, Fr, _r, Ya, vs, fo = (vs = class extends Bi {
  constructor(t, r) {
    super();
    gt(this, Yt);
    gt(this, _r);
    gt(this, ut, void 0);
    gt(this, _e, void 0);
    gt(this, Ce, void 0);
    gt(this, et, void 0);
    bt(this, _e, void 0), bt(this, ut, t), this.setOptions(r), this.bindMethods(), Rt(this, Yt, Fr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var a;
    const r = this.options;
    this.options = K(this, ut).defaultMutationOptions(t), Ui(r, this.options) || K(this, ut).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: K(this, Ce),
      observer: this
    }), (a = K(this, Ce)) == null || a.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = K(this, Ce)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    Rt(this, Yt, Fr).call(this), Rt(this, _r, Ya).call(this, t);
  }
  getCurrentResult() {
    return K(this, _e);
  }
  reset() {
    bt(this, Ce, void 0), Rt(this, Yt, Fr).call(this), Rt(this, _r, Ya).call(this);
  }
  mutate(t, r) {
    var a;
    return bt(this, et, r), (a = K(this, Ce)) == null || a.removeObserver(this), bt(this, Ce, K(this, ut).getMutationCache().build(K(this, ut), this.options)), K(this, Ce).addObserver(this), K(this, Ce).execute(t);
  }
}, ut = new WeakMap(), _e = new WeakMap(), Ce = new WeakMap(), et = new WeakMap(), Yt = new WeakSet(), Fr = function() {
  var r;
  const t = ((r = K(this, Ce)) == null ? void 0 : r.state) ?? zi();
  bt(this, _e, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, _r = new WeakSet(), Ya = function(t) {
  ms.batch(() => {
    var r, a, n, s, i, o, c, l;
    K(this, et) && this.hasListeners() && ((t == null ? void 0 : t.type) === "success" ? ((a = (r = K(this, et)).onSuccess) == null || a.call(
      r,
      t.data,
      K(this, _e).variables,
      K(this, _e).context
    ), (s = (n = K(this, et)).onSettled) == null || s.call(
      n,
      t.data,
      null,
      K(this, _e).variables,
      K(this, _e).context
    )) : (t == null ? void 0 : t.type) === "error" && ((o = (i = K(this, et)).onError) == null || o.call(
      i,
      t.error,
      K(this, _e).variables,
      K(this, _e).context
    ), (l = (c = K(this, et)).onSettled) == null || l.call(
      c,
      void 0,
      t.error,
      K(this, _e).variables,
      K(this, _e).context
    ))), this.listeners.forEach((d) => {
      d(K(this, _e));
    });
  });
}, vs);
function ho(e, t) {
  const r = ys(t), [a] = E.useState(
    () => new fo(
      r,
      e
    )
  );
  E.useEffect(() => {
    a.setOptions(e);
  }, [a, e]);
  const n = E.useSyncExternalStore(
    E.useCallback(
      (i) => a.subscribe(ms.batchCalls(i)),
      [a]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), s = E.useCallback(
    (i, o) => {
      a.mutate(i, o).catch(vo);
    },
    [a]
  );
  if (n.error && Gi(a.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: s, mutateAsync: n.mutate };
}
function vo() {
}
function wd(e, t, r) {
  let a;
  typeof e == "string" && typeof t == "string" ? a = {
    url: t,
    method: e,
    ...r
  } : typeof e == "string" ? a = {
    url: e,
    ...t
  } : a = e;
  const n = E.useMemo(() => Hi(a.url, {
    encode: encodeURIComponent
  }), [a.url]), s = E.useMemo(() => qi(a.url).reduce((x, S) => typeof S != "string" ? [...x, S.name] : x, []), [a.url]), i = Qi(), {
    wrapPayload: o = !0,
    syncQueryCache: c = !1,
    ...l
  } = a, d = ys();
  return ho({
    ...l,
    mutationFn: async (v) => {
      const x = n(Ae.pick(v, ...s)), S = Ae.omit(v, ...s), R = Ae.isEmpty(S) ? void 0 : o ? {
        data: S
      } : S, {
        data: L
      } = await i.request({
        url: x,
        method: a.method || "POST",
        data: R
      });
      return L;
    },
    onSuccess: (v, x, S) => {
      var R;
      if (c) {
        const L = n(Ae.pick(x, ...s));
        d.setQueriesData({
          queryKey: [L]
        }, (j) => ({
          ...j,
          data: [v.data]
        }));
      }
      (R = l.onSuccess) == null || R.call(l, v, x, S);
    }
  });
}
var G;
(function(e) {
  e.assertEqual = (n) => n;
  function t(n) {
  }
  e.assertIs = t;
  function r(n) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (n) => {
    const s = {};
    for (const i of n)
      s[i] = i;
    return s;
  }, e.getValidEnumValues = (n) => {
    const s = e.objectKeys(n).filter((o) => typeof n[n[o]] != "number"), i = {};
    for (const o of s)
      i[o] = n[o];
    return e.objectValues(i);
  }, e.objectValues = (n) => e.objectKeys(n).map(function(s) {
    return n[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const s = [];
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && s.push(i);
    return s;
  }, e.find = (n, s) => {
    for (const i of n)
      if (s(i))
        return i;
  }, e.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function a(n, s = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(s);
  }
  e.joinValues = a, e.jsonStringifyReplacer = (n, s) => typeof s == "bigint" ? s.toString() : s;
})(G || (G = {}));
var Ba;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ba || (Ba = {}));
const D = G.arrayToEnum([
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
]), ct = (e) => {
  switch (typeof e) {
    case "undefined":
      return D.undefined;
    case "string":
      return D.string;
    case "number":
      return isNaN(e) ? D.nan : D.number;
    case "boolean":
      return D.boolean;
    case "function":
      return D.function;
    case "bigint":
      return D.bigint;
    case "symbol":
      return D.symbol;
    case "object":
      return Array.isArray(e) ? D.array : e === null ? D.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? D.promise : typeof Map < "u" && e instanceof Map ? D.map : typeof Set < "u" && e instanceof Set ? D.set : typeof Date < "u" && e instanceof Date ? D.date : D.object;
    default:
      return D.unknown;
  }
}, p = G.arrayToEnum([
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
]), mo = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class $e extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (a) => {
      this.issues = [...this.issues, a];
    }, this.addIssues = (a = []) => {
      this.issues = [...this.issues, ...a];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const r = t || function(s) {
      return s.message;
    }, a = { _errors: [] }, n = (s) => {
      for (const i of s.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(n);
        else if (i.code === "invalid_return_type")
          n(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          n(i.argumentsError);
        else if (i.path.length === 0)
          a._errors.push(r(i));
        else {
          let o = a, c = 0;
          for (; c < i.path.length; ) {
            const l = i.path[c];
            c === i.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(i))) : o[l] = o[l] || { _errors: [] }, o = o[l], c++;
          }
        }
    };
    return n(this), a;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, G.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, a = [];
    for (const n of this.issues)
      n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : a.push(t(n));
    return { formErrors: a, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
$e.create = (e) => new $e(e);
const rr = (e, t) => {
  let r;
  switch (e.code) {
    case p.invalid_type:
      e.received === D.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case p.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, G.jsonStringifyReplacer)}`;
      break;
    case p.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${G.joinValues(e.keys, ", ")}`;
      break;
    case p.invalid_union:
      r = "Invalid input";
      break;
    case p.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${G.joinValues(e.options)}`;
      break;
    case p.invalid_enum_value:
      r = `Invalid enum value. Expected ${G.joinValues(e.options)}, received '${e.received}'`;
      break;
    case p.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case p.invalid_return_type:
      r = "Invalid function return type";
      break;
    case p.invalid_date:
      r = "Invalid date";
      break;
    case p.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : G.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case p.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case p.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case p.custom:
      r = "Invalid input";
      break;
    case p.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case p.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case p.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, G.assertNever(e);
  }
  return { message: r };
};
let xs = rr;
function yo(e) {
  xs = e;
}
function Br() {
  return xs;
}
const Ur = (e) => {
  const { data: t, path: r, errorMaps: a, issueData: n } = e, s = [...r, ...n.path || []], i = {
    ...n,
    path: s
  };
  let o = "";
  const c = a.filter((l) => !!l).slice().reverse();
  for (const l of c)
    o = l(i, { data: t, defaultError: o }).message;
  return {
    ...n,
    path: s,
    message: n.message || o
  };
}, po = [];
function T(e, t) {
  const r = Ur({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Br(),
      rr
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(r);
}
class ge {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const a = [];
    for (const n of r) {
      if (n.status === "aborted")
        return P;
      n.status === "dirty" && t.dirty(), a.push(n.value);
    }
    return { status: t.value, value: a };
  }
  static async mergeObjectAsync(t, r) {
    const a = [];
    for (const n of r)
      a.push({
        key: await n.key,
        value: await n.value
      });
    return ge.mergeObjectSync(t, a);
  }
  static mergeObjectSync(t, r) {
    const a = {};
    for (const n of r) {
      const { key: s, value: i } = n;
      if (s.status === "aborted" || i.status === "aborted")
        return P;
      s.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (a[s.value] = i.value);
    }
    return { status: t.value, value: a };
  }
}
const P = Object.freeze({
  status: "aborted"
}), ks = (e) => ({ status: "dirty", value: e }), xe = (e) => ({ status: "valid", value: e }), Ua = (e) => e.status === "aborted", za = (e) => e.status === "dirty", ar = (e) => e.status === "valid", zr = (e) => typeof Promise < "u" && e instanceof Promise;
var C;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(C || (C = {}));
class Ge {
  constructor(t, r, a, n) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = a, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const jn = (e, t) => {
  if (ar(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new $e(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function V(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: a, description: n } = e;
  if (t && (r || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: n } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: a ?? o.defaultError } : { message: r ?? o.defaultError }, description: n };
}
class F {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ct(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: ct(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new ge(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ct(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (zr(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const a = this.safeParse(t, r);
    if (a.success)
      return a.data;
    throw a.error;
  }
  safeParse(t, r) {
    var a;
    const n = {
      common: {
        issues: [],
        async: (a = r == null ? void 0 : r.async) !== null && a !== void 0 ? a : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ct(t)
    }, s = this._parseSync({ data: t, path: n.path, parent: n });
    return jn(n, s);
  }
  async parseAsync(t, r) {
    const a = await this.safeParseAsync(t, r);
    if (a.success)
      return a.data;
    throw a.error;
  }
  async safeParseAsync(t, r) {
    const a = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ct(t)
    }, n = this._parse({ data: t, path: a.path, parent: a }), s = await (zr(n) ? n : Promise.resolve(n));
    return jn(a, s);
  }
  refine(t, r) {
    const a = (n) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(n) : r;
    return this._refinement((n, s) => {
      const i = t(n), o = () => s.addIssue({
        code: p.custom,
        ...a(n)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((c) => c ? !0 : (o(), !1)) : i ? !0 : (o(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((a, n) => t(a) ? !0 : (n.addIssue(typeof r == "function" ? r(a, n) : r), !1));
  }
  _refinement(t) {
    return new Be({
      schema: this,
      typeName: I.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return tt.create(this, this._def);
  }
  nullable() {
    return Ot.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return We.create(this, this._def);
  }
  promise() {
    return Ut.create(this, this._def);
  }
  or(t) {
    return or.create([this, t], this._def);
  }
  and(t) {
    return cr.create(this, t, this._def);
  }
  transform(t) {
    return new Be({
      ...V(this._def),
      schema: this,
      typeName: I.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new hr({
      ...V(this._def),
      innerType: this,
      defaultValue: r,
      typeName: I.ZodDefault
    });
  }
  brand() {
    return new Os({
      typeName: I.ZodBranded,
      type: this,
      ...V(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Qr({
      ...V(this._def),
      innerType: this,
      catchValue: r,
      typeName: I.ZodCatch
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return wr.create(this, t);
  }
  readonly() {
    return Kr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const go = /^c[^\s-]{8,}$/i, bo = /^[a-z][a-z0-9]*$/, _o = /^[0-9A-HJKMNP-TV-Z]{26}$/, wo = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, xo = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ko = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ia;
const Do = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Oo = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, To = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function So(e, t) {
  return !!((t === "v4" || !t) && Do.test(e) || (t === "v6" || !t) && Oo.test(e));
}
class Fe extends F {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== D.string) {
      const s = this._getOrReturnCtx(t);
      return T(
        s,
        {
          code: p.invalid_type,
          expected: D.string,
          received: s.parsedType
        }
        //
      ), P;
    }
    const a = new ge();
    let n;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (n = this._getOrReturnCtx(t, n), T(n, {
          code: p.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (n = this._getOrReturnCtx(t, n), T(n, {
          code: p.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "length") {
        const i = t.data.length > s.value, o = t.data.length < s.value;
        (i || o) && (n = this._getOrReturnCtx(t, n), i ? T(n, {
          code: p.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && T(n, {
          code: p.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), a.dirty());
      } else if (s.kind === "email")
        xo.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "email",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "emoji")
        Ia || (Ia = new RegExp(ko, "u")), Ia.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "emoji",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "uuid")
        wo.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "uuid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid")
        go.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "cuid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid2")
        bo.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "cuid2",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "ulid")
        _o.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "ulid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          n = this._getOrReturnCtx(t, n), T(n, {
            validation: "url",
            code: p.invalid_string,
            message: s.message
          }), a.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "regex",
          code: p.invalid_string,
          message: s.message
        }), a.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (n = this._getOrReturnCtx(t, n), T(n, {
          code: p.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), a.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (n = this._getOrReturnCtx(t, n), T(n, {
          code: p.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), a.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (n = this._getOrReturnCtx(t, n), T(n, {
          code: p.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), a.dirty()) : s.kind === "datetime" ? To(s).test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          code: p.invalid_string,
          validation: "datetime",
          message: s.message
        }), a.dirty()) : s.kind === "ip" ? So(t.data, s.version) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "ip",
          code: p.invalid_string,
          message: s.message
        }), a.dirty()) : G.assertNever(s);
    return { status: a.value, value: t.data };
  }
  _regex(t, r, a) {
    return this.refinement((n) => t.test(n), {
      validation: r,
      code: p.invalid_string,
      ...C.errToObj(a)
    });
  }
  _addCheck(t) {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...C.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...C.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...C.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...C.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...C.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...C.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...C.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...C.errToObj(t) });
  }
  datetime(t) {
    var r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (r = t == null ? void 0 : t.offset) !== null && r !== void 0 ? r : !1,
      ...C.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...C.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...C.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...C.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...C.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...C.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...C.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...C.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, C.errToObj(t));
  }
  trim() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Fe.create = (e) => {
  var t;
  return new Fe({
    checks: [],
    typeName: I.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...V(e)
  });
};
function Eo(e, t) {
  const r = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, n = r > a ? r : a, s = parseInt(e.toFixed(n).replace(".", "")), i = parseInt(t.toFixed(n).replace(".", ""));
  return s % i / Math.pow(10, n);
}
class ft extends F {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== D.number) {
      const s = this._getOrReturnCtx(t);
      return T(s, {
        code: p.invalid_type,
        expected: D.number,
        received: s.parsedType
      }), P;
    }
    let a;
    const n = new ge();
    for (const s of this._def.checks)
      s.kind === "int" ? G.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), n.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? Eo(t.data, s.value) !== 0 && (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.not_finite,
        message: s.message
      }), n.dirty()) : G.assertNever(s);
    return { status: n.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, C.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, C.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, C.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, C.toString(r));
  }
  setLimit(t, r, a, n) {
    return new ft({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: a,
          message: C.toString(n)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ft({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: C.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: C.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: C.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: C.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: C.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: C.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: C.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: C.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: C.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && G.isInteger(t.value));
  }
  get isFinite() {
    let t = null, r = null;
    for (const a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf")
        return !0;
      a.kind === "min" ? (r === null || a.value > r) && (r = a.value) : a.kind === "max" && (t === null || a.value < t) && (t = a.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
ft.create = (e) => new ft({
  checks: [],
  typeName: I.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...V(e)
});
class ht extends F {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== D.bigint) {
      const s = this._getOrReturnCtx(t);
      return T(s, {
        code: p.invalid_type,
        expected: D.bigint,
        received: s.parsedType
      }), P;
    }
    let a;
    const n = new ge();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : G.assertNever(s);
    return { status: n.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, C.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, C.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, C.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, C.toString(r));
  }
  setLimit(t, r, a, n) {
    return new ht({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: a,
          message: C.toString(n)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ht({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: C.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: C.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: C.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: C.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: C.toString(r)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
ht.create = (e) => {
  var t;
  return new ht({
    checks: [],
    typeName: I.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...V(e)
  });
};
class nr extends F {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== D.boolean) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.boolean,
        received: a.parsedType
      }), P;
    }
    return xe(t.data);
  }
}
nr.create = (e) => new nr({
  typeName: I.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...V(e)
});
class kt extends F {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== D.date) {
      const s = this._getOrReturnCtx(t);
      return T(s, {
        code: p.invalid_type,
        expected: D.date,
        received: s.parsedType
      }), P;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return T(s, {
        code: p.invalid_date
      }), P;
    }
    const a = new ge();
    let n;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (n = this._getOrReturnCtx(t, n), T(n, {
        code: p.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), a.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (n = this._getOrReturnCtx(t, n), T(n, {
        code: p.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), a.dirty()) : G.assertNever(s);
    return {
      status: a.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new kt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: C.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: C.toString(r)
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
kt.create = (e) => new kt({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: I.ZodDate,
  ...V(e)
});
class Hr extends F {
  _parse(t) {
    if (this._getType(t) !== D.symbol) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.symbol,
        received: a.parsedType
      }), P;
    }
    return xe(t.data);
  }
}
Hr.create = (e) => new Hr({
  typeName: I.ZodSymbol,
  ...V(e)
});
class sr extends F {
  _parse(t) {
    if (this._getType(t) !== D.undefined) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.undefined,
        received: a.parsedType
      }), P;
    }
    return xe(t.data);
  }
}
sr.create = (e) => new sr({
  typeName: I.ZodUndefined,
  ...V(e)
});
class ir extends F {
  _parse(t) {
    if (this._getType(t) !== D.null) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.null,
        received: a.parsedType
      }), P;
    }
    return xe(t.data);
  }
}
ir.create = (e) => new ir({
  typeName: I.ZodNull,
  ...V(e)
});
class Bt extends F {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return xe(t.data);
  }
}
Bt.create = (e) => new Bt({
  typeName: I.ZodAny,
  ...V(e)
});
class wt extends F {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return xe(t.data);
  }
}
wt.create = (e) => new wt({
  typeName: I.ZodUnknown,
  ...V(e)
});
class rt extends F {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return T(r, {
      code: p.invalid_type,
      expected: D.never,
      received: r.parsedType
    }), P;
  }
}
rt.create = (e) => new rt({
  typeName: I.ZodNever,
  ...V(e)
});
class qr extends F {
  _parse(t) {
    if (this._getType(t) !== D.undefined) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.void,
        received: a.parsedType
      }), P;
    }
    return xe(t.data);
  }
}
qr.create = (e) => new qr({
  typeName: I.ZodVoid,
  ...V(e)
});
class We extends F {
  _parse(t) {
    const { ctx: r, status: a } = this._processInputParams(t), n = this._def;
    if (r.parsedType !== D.array)
      return T(r, {
        code: p.invalid_type,
        expected: D.array,
        received: r.parsedType
      }), P;
    if (n.exactLength !== null) {
      const i = r.data.length > n.exactLength.value, o = r.data.length < n.exactLength.value;
      (i || o) && (T(r, {
        code: i ? p.too_big : p.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), a.dirty());
    }
    if (n.minLength !== null && r.data.length < n.minLength.value && (T(r, {
      code: p.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), a.dirty()), n.maxLength !== null && r.data.length > n.maxLength.value && (T(r, {
      code: p.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), a.dirty()), r.common.async)
      return Promise.all([...r.data].map((i, o) => n.type._parseAsync(new Ge(r, i, r.path, o)))).then((i) => ge.mergeArray(a, i));
    const s = [...r.data].map((i, o) => n.type._parseSync(new Ge(r, i, r.path, o)));
    return ge.mergeArray(a, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new We({
      ...this._def,
      minLength: { value: t, message: C.toString(r) }
    });
  }
  max(t, r) {
    return new We({
      ...this._def,
      maxLength: { value: t, message: C.toString(r) }
    });
  }
  length(t, r) {
    return new We({
      ...this._def,
      exactLength: { value: t, message: C.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
We.create = (e, t) => new We({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: I.ZodArray,
  ...V(t)
});
function Vt(e) {
  if (e instanceof se) {
    const t = {};
    for (const r in e.shape) {
      const a = e.shape[r];
      t[r] = tt.create(Vt(a));
    }
    return new se({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof We ? new We({
      ...e._def,
      type: Vt(e.element)
    }) : e instanceof tt ? tt.create(Vt(e.unwrap())) : e instanceof Ot ? Ot.create(Vt(e.unwrap())) : e instanceof Qe ? Qe.create(e.items.map((t) => Vt(t))) : e;
}
class se extends F {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = G.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== D.object) {
      const l = this._getOrReturnCtx(t);
      return T(l, {
        code: p.invalid_type,
        expected: D.object,
        received: l.parsedType
      }), P;
    }
    const { status: a, ctx: n } = this._processInputParams(t), { shape: s, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof rt && this._def.unknownKeys === "strip"))
      for (const l in n.data)
        i.includes(l) || o.push(l);
    const c = [];
    for (const l of i) {
      const d = s[l], y = n.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: d._parse(new Ge(n, y, n.path, l)),
        alwaysSet: l in n.data
      });
    }
    if (this._def.catchall instanceof rt) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of o)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: n.data[d] }
          });
      else if (l === "strict")
        o.length > 0 && (T(n, {
          code: p.unrecognized_keys,
          keys: o
        }), a.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of o) {
        const y = n.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: l._parse(
            new Ge(n, y, n.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const d of c) {
        const y = await d.key;
        l.push({
          key: y,
          value: await d.value,
          alwaysSet: d.alwaysSet
        });
      }
      return l;
    }).then((l) => ge.mergeObjectSync(a, l)) : ge.mergeObjectSync(a, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return C.errToObj, new se({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, a) => {
          var n, s, i, o;
          const c = (i = (s = (n = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(n, r, a).message) !== null && i !== void 0 ? i : a.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = C.errToObj(t).message) !== null && o !== void 0 ? o : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new se({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new se({
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
  extend(t) {
    return new se({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new se({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: I.ZodObject
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
  setKey(t, r) {
    return this.augment({ [t]: r });
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
  catchall(t) {
    return new se({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return G.objectKeys(t).forEach((a) => {
      t[a] && this.shape[a] && (r[a] = this.shape[a]);
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return G.objectKeys(this.shape).forEach((a) => {
      t[a] || (r[a] = this.shape[a]);
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Vt(this);
  }
  partial(t) {
    const r = {};
    return G.objectKeys(this.shape).forEach((a) => {
      const n = this.shape[a];
      t && !t[a] ? r[a] = n : r[a] = n.optional();
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return G.objectKeys(this.shape).forEach((a) => {
      if (t && !t[a])
        r[a] = this.shape[a];
      else {
        let s = this.shape[a];
        for (; s instanceof tt; )
          s = s._def.innerType;
        r[a] = s;
      }
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ds(G.objectKeys(this.shape));
  }
}
se.create = (e, t) => new se({
  shape: () => e,
  unknownKeys: "strip",
  catchall: rt.create(),
  typeName: I.ZodObject,
  ...V(t)
});
se.strictCreate = (e, t) => new se({
  shape: () => e,
  unknownKeys: "strict",
  catchall: rt.create(),
  typeName: I.ZodObject,
  ...V(t)
});
se.lazycreate = (e, t) => new se({
  shape: e,
  unknownKeys: "strip",
  catchall: rt.create(),
  typeName: I.ZodObject,
  ...V(t)
});
class or extends F {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), a = this._def.options;
    function n(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const i = s.map((o) => new $e(o.ctx.common.issues));
      return T(r, {
        code: p.invalid_union,
        unionErrors: i
      }), P;
    }
    if (r.common.async)
      return Promise.all(a.map(async (s) => {
        const i = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: r.data,
            path: r.path,
            parent: i
          }),
          ctx: i
        };
      })).then(n);
    {
      let s;
      const i = [];
      for (const c of a) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = c._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !s && (s = { result: d, ctx: l }), l.common.issues.length && i.push(l.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const o = i.map((c) => new $e(c));
      return T(r, {
        code: p.invalid_union,
        unionErrors: o
      }), P;
    }
  }
  get options() {
    return this._def.options;
  }
}
or.create = (e, t) => new or({
  options: e,
  typeName: I.ZodUnion,
  ...V(t)
});
const $r = (e) => e instanceof lr ? $r(e.schema) : e instanceof Be ? $r(e.innerType()) : e instanceof dr ? [e.value] : e instanceof vt ? e.options : e instanceof fr ? Object.keys(e.enum) : e instanceof hr ? $r(e._def.innerType) : e instanceof sr ? [void 0] : e instanceof ir ? [null] : null;
class ua extends F {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== D.object)
      return T(r, {
        code: p.invalid_type,
        expected: D.object,
        received: r.parsedType
      }), P;
    const a = this.discriminator, n = r.data[a], s = this.optionsMap.get(n);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (T(r, {
      code: p.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [a]
    }), P);
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
  static create(t, r, a) {
    const n = /* @__PURE__ */ new Map();
    for (const s of r) {
      const i = $r(s.shape[t]);
      if (!i)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (n.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        n.set(o, s);
      }
    }
    return new ua({
      typeName: I.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: n,
      ...V(a)
    });
  }
}
function Ha(e, t) {
  const r = ct(e), a = ct(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === D.object && a === D.object) {
    const n = G.objectKeys(t), s = G.objectKeys(e).filter((o) => n.indexOf(o) !== -1), i = { ...e, ...t };
    for (const o of s) {
      const c = Ha(e[o], t[o]);
      if (!c.valid)
        return { valid: !1 };
      i[o] = c.data;
    }
    return { valid: !0, data: i };
  } else if (r === D.array && a === D.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const n = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s], o = t[s], c = Ha(i, o);
      if (!c.valid)
        return { valid: !1 };
      n.push(c.data);
    }
    return { valid: !0, data: n };
  } else
    return r === D.date && a === D.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class cr extends F {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t), n = (s, i) => {
      if (Ua(s) || Ua(i))
        return P;
      const o = Ha(s.value, i.value);
      return o.valid ? ((za(s) || za(i)) && r.dirty(), { status: r.value, value: o.data }) : (T(a, {
        code: p.invalid_intersection_types
      }), P);
    };
    return a.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      }),
      this._def.right._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      })
    ]).then(([s, i]) => n(s, i)) : n(this._def.left._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }), this._def.right._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }));
  }
}
cr.create = (e, t, r) => new cr({
  left: e,
  right: t,
  typeName: I.ZodIntersection,
  ...V(r)
});
class Qe extends F {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== D.array)
      return T(a, {
        code: p.invalid_type,
        expected: D.array,
        received: a.parsedType
      }), P;
    if (a.data.length < this._def.items.length)
      return T(a, {
        code: p.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), P;
    !this._def.rest && a.data.length > this._def.items.length && (T(a, {
      code: p.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...a.data].map((i, o) => {
      const c = this._def.items[o] || this._def.rest;
      return c ? c._parse(new Ge(a, i, a.path, o)) : null;
    }).filter((i) => !!i);
    return a.common.async ? Promise.all(s).then((i) => ge.mergeArray(r, i)) : ge.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Qe({
      ...this._def,
      rest: t
    });
  }
}
Qe.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Qe({
    items: e,
    typeName: I.ZodTuple,
    rest: null,
    ...V(t)
  });
};
class ur extends F {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== D.object)
      return T(a, {
        code: p.invalid_type,
        expected: D.object,
        received: a.parsedType
      }), P;
    const n = [], s = this._def.keyType, i = this._def.valueType;
    for (const o in a.data)
      n.push({
        key: s._parse(new Ge(a, o, a.path, o)),
        value: i._parse(new Ge(a, a.data[o], a.path, o))
      });
    return a.common.async ? ge.mergeObjectAsync(r, n) : ge.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, a) {
    return r instanceof F ? new ur({
      keyType: t,
      valueType: r,
      typeName: I.ZodRecord,
      ...V(a)
    }) : new ur({
      keyType: Fe.create(),
      valueType: t,
      typeName: I.ZodRecord,
      ...V(r)
    });
  }
}
class Gr extends F {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== D.map)
      return T(a, {
        code: p.invalid_type,
        expected: D.map,
        received: a.parsedType
      }), P;
    const n = this._def.keyType, s = this._def.valueType, i = [...a.data.entries()].map(([o, c], l) => ({
      key: n._parse(new Ge(a, o, a.path, [l, "key"])),
      value: s._parse(new Ge(a, c, a.path, [l, "value"]))
    }));
    if (a.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const l = await c.key, d = await c.value;
          if (l.status === "aborted" || d.status === "aborted")
            return P;
          (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of i) {
        const l = c.key, d = c.value;
        if (l.status === "aborted" || d.status === "aborted")
          return P;
        (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Gr.create = (e, t, r) => new Gr({
  valueType: t,
  keyType: e,
  typeName: I.ZodMap,
  ...V(r)
});
class Dt extends F {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== D.set)
      return T(a, {
        code: p.invalid_type,
        expected: D.set,
        received: a.parsedType
      }), P;
    const n = this._def;
    n.minSize !== null && a.data.size < n.minSize.value && (T(a, {
      code: p.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), r.dirty()), n.maxSize !== null && a.data.size > n.maxSize.value && (T(a, {
      code: p.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function i(c) {
      const l = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return P;
        d.status === "dirty" && r.dirty(), l.add(d.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...a.data.values()].map((c, l) => s._parse(new Ge(a, c, a.path, l)));
    return a.common.async ? Promise.all(o).then((c) => i(c)) : i(o);
  }
  min(t, r) {
    return new Dt({
      ...this._def,
      minSize: { value: t, message: C.toString(r) }
    });
  }
  max(t, r) {
    return new Dt({
      ...this._def,
      maxSize: { value: t, message: C.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Dt.create = (e, t) => new Dt({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: I.ZodSet,
  ...V(t)
});
class $t extends F {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== D.function)
      return T(r, {
        code: p.invalid_type,
        expected: D.function,
        received: r.parsedType
      }), P;
    function a(o, c) {
      return Ur({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Br(),
          rr
        ].filter((l) => !!l),
        issueData: {
          code: p.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function n(o, c) {
      return Ur({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Br(),
          rr
        ].filter((l) => !!l),
        issueData: {
          code: p.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, i = r.data;
    if (this._def.returns instanceof Ut) {
      const o = this;
      return xe(async function(...c) {
        const l = new $e([]), d = await o._def.args.parseAsync(c, s).catch((x) => {
          throw l.addIssue(a(c, x)), l;
        }), y = await Reflect.apply(i, this, d);
        return await o._def.returns._def.type.parseAsync(y, s).catch((x) => {
          throw l.addIssue(n(y, x)), l;
        });
      });
    } else {
      const o = this;
      return xe(function(...c) {
        const l = o._def.args.safeParse(c, s);
        if (!l.success)
          throw new $e([a(c, l.error)]);
        const d = Reflect.apply(i, this, l.data), y = o._def.returns.safeParse(d, s);
        if (!y.success)
          throw new $e([n(d, y.error)]);
        return y.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new $t({
      ...this._def,
      args: Qe.create(t).rest(wt.create())
    });
  }
  returns(t) {
    return new $t({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, a) {
    return new $t({
      args: t || Qe.create([]).rest(wt.create()),
      returns: r || wt.create(),
      typeName: I.ZodFunction,
      ...V(a)
    });
  }
}
class lr extends F {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
lr.create = (e, t) => new lr({
  getter: e,
  typeName: I.ZodLazy,
  ...V(t)
});
class dr extends F {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return T(r, {
        received: r.data,
        code: p.invalid_literal,
        expected: this._def.value
      }), P;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
dr.create = (e, t) => new dr({
  value: e,
  typeName: I.ZodLiteral,
  ...V(t)
});
function Ds(e, t) {
  return new vt({
    values: e,
    typeName: I.ZodEnum,
    ...V(t)
  });
}
class vt extends F {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), a = this._def.values;
      return T(r, {
        expected: G.joinValues(a),
        received: r.parsedType,
        code: p.invalid_type
      }), P;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), a = this._def.values;
      return T(r, {
        received: r.data,
        code: p.invalid_enum_value,
        options: a
      }), P;
    }
    return xe(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  extract(t) {
    return vt.create(t);
  }
  exclude(t) {
    return vt.create(this.options.filter((r) => !t.includes(r)));
  }
}
vt.create = Ds;
class fr extends F {
  _parse(t) {
    const r = G.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(t);
    if (a.parsedType !== D.string && a.parsedType !== D.number) {
      const n = G.objectValues(r);
      return T(a, {
        expected: G.joinValues(n),
        received: a.parsedType,
        code: p.invalid_type
      }), P;
    }
    if (r.indexOf(t.data) === -1) {
      const n = G.objectValues(r);
      return T(a, {
        received: a.data,
        code: p.invalid_enum_value,
        options: n
      }), P;
    }
    return xe(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
fr.create = (e, t) => new fr({
  values: e,
  typeName: I.ZodNativeEnum,
  ...V(t)
});
class Ut extends F {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== D.promise && r.common.async === !1)
      return T(r, {
        code: p.invalid_type,
        expected: D.promise,
        received: r.parsedType
      }), P;
    const a = r.parsedType === D.promise ? r.data : Promise.resolve(r.data);
    return xe(a.then((n) => this._def.type.parseAsync(n, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Ut.create = (e, t) => new Ut({
  type: e,
  typeName: I.ZodPromise,
  ...V(t)
});
class Be extends F {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === I.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t), n = this._def.effect || null, s = {
      addIssue: (i) => {
        T(a, i), i.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), n.type === "preprocess") {
      const i = n.transform(a.data, s);
      return a.common.issues.length ? {
        status: "dirty",
        value: a.data
      } : a.common.async ? Promise.resolve(i).then((o) => this._def.schema._parseAsync({
        data: o,
        path: a.path,
        parent: a
      })) : this._def.schema._parseSync({
        data: i,
        path: a.path,
        parent: a
      });
    }
    if (n.type === "refinement") {
      const i = (o) => {
        const c = n.refinement(o, s);
        if (a.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (a.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return o.status === "aborted" ? P : (o.status === "dirty" && r.dirty(), i(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((o) => o.status === "aborted" ? P : (o.status === "dirty" && r.dirty(), i(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (n.type === "transform")
      if (a.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!ar(i))
          return i;
        const o = n.transform(i.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((i) => ar(i) ? Promise.resolve(n.transform(i.value, s)).then((o) => ({ status: r.value, value: o })) : i);
    G.assertNever(n);
  }
}
Be.create = (e, t, r) => new Be({
  schema: e,
  typeName: I.ZodEffects,
  effect: t,
  ...V(r)
});
Be.createWithPreprocess = (e, t, r) => new Be({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: I.ZodEffects,
  ...V(r)
});
class tt extends F {
  _parse(t) {
    return this._getType(t) === D.undefined ? xe(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
tt.create = (e, t) => new tt({
  innerType: e,
  typeName: I.ZodOptional,
  ...V(t)
});
class Ot extends F {
  _parse(t) {
    return this._getType(t) === D.null ? xe(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ot.create = (e, t) => new Ot({
  innerType: e,
  typeName: I.ZodNullable,
  ...V(t)
});
class hr extends F {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let a = r.data;
    return r.parsedType === D.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
hr.create = (e, t) => new hr({
  innerType: e,
  typeName: I.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...V(t)
});
class Qr extends F {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), a = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, n = this._def.innerType._parse({
      data: a.data,
      path: a.path,
      parent: {
        ...a
      }
    });
    return zr(n) ? n.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new $e(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new $e(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Qr.create = (e, t) => new Qr({
  innerType: e,
  typeName: I.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...V(t)
});
class Jr extends F {
  _parse(t) {
    if (this._getType(t) !== D.nan) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.nan,
        received: a.parsedType
      }), P;
    }
    return { status: "valid", value: t.data };
  }
}
Jr.create = (e) => new Jr({
  typeName: I.ZodNaN,
  ...V(e)
});
const Co = Symbol("zod_brand");
class Os extends F {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), a = r.data;
    return this._def.type._parse({
      data: a,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class wr extends F {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? P : s.status === "dirty" ? (r.dirty(), ks(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: a.path,
          parent: a
        });
      })();
    {
      const n = this._def.in._parseSync({
        data: a.data,
        path: a.path,
        parent: a
      });
      return n.status === "aborted" ? P : n.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: n.value
      }) : this._def.out._parseSync({
        data: n.value,
        path: a.path,
        parent: a
      });
    }
  }
  static create(t, r) {
    return new wr({
      in: t,
      out: r,
      typeName: I.ZodPipeline
    });
  }
}
class Kr extends F {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return ar(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Kr.create = (e, t) => new Kr({
  innerType: e,
  typeName: I.ZodReadonly,
  ...V(t)
});
const Ts = (e, t = {}, r) => e ? Bt.create().superRefine((a, n) => {
  var s, i;
  if (!e(a)) {
    const o = typeof t == "function" ? t(a) : typeof t == "string" ? { message: t } : t, c = (i = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && i !== void 0 ? i : !0, l = typeof o == "string" ? { message: o } : o;
    n.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Bt.create(), No = {
  object: se.lazycreate
};
var I;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(I || (I = {}));
const Ao = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Ts((r) => r instanceof e, t), Ss = Fe.create, Es = ft.create, Io = Jr.create, Ro = ht.create, Cs = nr.create, Mo = kt.create, Po = Hr.create, Vo = sr.create, Lo = ir.create, jo = Bt.create, Zo = wt.create, Fo = rt.create, $o = qr.create, Wo = We.create, Yo = se.create, Bo = se.strictCreate, Uo = or.create, zo = ua.create, Ho = cr.create, qo = Qe.create, Go = ur.create, Qo = Gr.create, Jo = Dt.create, Ko = $t.create, Xo = lr.create, ec = dr.create, tc = vt.create, rc = fr.create, ac = Ut.create, Zn = Be.create, nc = tt.create, sc = Ot.create, ic = Be.createWithPreprocess, oc = wr.create, cc = () => Ss().optional(), uc = () => Es().optional(), lc = () => Cs().optional(), dc = {
  string: (e) => Fe.create({ ...e, coerce: !0 }),
  number: (e) => ft.create({ ...e, coerce: !0 }),
  boolean: (e) => nr.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => ht.create({ ...e, coerce: !0 }),
  date: (e) => kt.create({ ...e, coerce: !0 })
}, fc = P;
var Fn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: rr,
  setErrorMap: yo,
  getErrorMap: Br,
  makeIssue: Ur,
  EMPTY_PATH: po,
  addIssueToContext: T,
  ParseStatus: ge,
  INVALID: P,
  DIRTY: ks,
  OK: xe,
  isAborted: Ua,
  isDirty: za,
  isValid: ar,
  isAsync: zr,
  get util() {
    return G;
  },
  get objectUtil() {
    return Ba;
  },
  ZodParsedType: D,
  getParsedType: ct,
  ZodType: F,
  ZodString: Fe,
  ZodNumber: ft,
  ZodBigInt: ht,
  ZodBoolean: nr,
  ZodDate: kt,
  ZodSymbol: Hr,
  ZodUndefined: sr,
  ZodNull: ir,
  ZodAny: Bt,
  ZodUnknown: wt,
  ZodNever: rt,
  ZodVoid: qr,
  ZodArray: We,
  ZodObject: se,
  ZodUnion: or,
  ZodDiscriminatedUnion: ua,
  ZodIntersection: cr,
  ZodTuple: Qe,
  ZodRecord: ur,
  ZodMap: Gr,
  ZodSet: Dt,
  ZodFunction: $t,
  ZodLazy: lr,
  ZodLiteral: dr,
  ZodEnum: vt,
  ZodNativeEnum: fr,
  ZodPromise: Ut,
  ZodEffects: Be,
  ZodTransformer: Be,
  ZodOptional: tt,
  ZodNullable: Ot,
  ZodDefault: hr,
  ZodCatch: Qr,
  ZodNaN: Jr,
  BRAND: Co,
  ZodBranded: Os,
  ZodPipeline: wr,
  ZodReadonly: Kr,
  custom: Ts,
  Schema: F,
  ZodSchema: F,
  late: No,
  get ZodFirstPartyTypeKind() {
    return I;
  },
  coerce: dc,
  any: jo,
  array: Wo,
  bigint: Ro,
  boolean: Cs,
  date: Mo,
  discriminatedUnion: zo,
  effect: Zn,
  enum: tc,
  function: Ko,
  instanceof: Ao,
  intersection: Ho,
  lazy: Xo,
  literal: ec,
  map: Qo,
  nan: Io,
  nativeEnum: rc,
  never: Fo,
  null: Lo,
  nullable: sc,
  number: Es,
  object: Yo,
  oboolean: lc,
  onumber: uc,
  optional: nc,
  ostring: cc,
  pipeline: oc,
  preprocess: ic,
  promise: ac,
  record: Go,
  set: Jo,
  strictObject: Bo,
  string: Ss,
  symbol: Po,
  transformer: Zn,
  tuple: qo,
  undefined: Vo,
  union: Uo,
  unknown: Zo,
  void: $o,
  NEVER: fc,
  ZodIssueCode: p,
  quotelessJson: mo,
  ZodError: $e
});
const xd = ({
  children: e,
  className: t,
  form: r
}) => {
  const a = r.formState.errors;
  return /* @__PURE__ */ Ye("form", { className: t, onSubmit: r.onSubmit, children: [
    a.root && /* @__PURE__ */ Ye(eo, { severity: "error", children: [
      /* @__PURE__ */ A(to, { children: a.root.message }),
      a.root.fields && /* @__PURE__ */ A("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(a.root.fields).map(([n, {
        message: s
      }]) => /* @__PURE__ */ A("li", { css: {}, children: s }, n)) })
    ] }),
    e
  ] });
};
var xr = (e) => e.type === "checkbox", Lt = (e) => e instanceof Date, we = (e) => e == null;
const Ns = (e) => typeof e == "object";
var ve = (e) => !we(e) && !Array.isArray(e) && Ns(e) && !Lt(e), As = (e) => ve(e) && e.target ? xr(e.target) ? e.target.checked : e.target.value : e, hc = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Is = (e, t) => e.has(hc(t)), vc = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ve(t) && t.hasOwnProperty("isPrototypeOf");
}, on = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Le(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(on && (e instanceof Blob || e instanceof FileList)) && (r || ve(e)))
    if (t = r ? [] : {}, !r && !vc(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = Le(e[a]));
  else
    return e;
  return t;
}
var kr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ue = (e) => e === void 0, w = (e, t, r) => {
  if (!t || !ve(e))
    return r;
  const a = kr(t.split(/[,[\].]+?/)).reduce((n, s) => we(n) ? n : n[s], e);
  return ue(a) || a === e ? ue(e[t]) ? r : e[t] : a;
}, je = (e) => typeof e == "boolean";
const Xr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Ze = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Xe = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, mc = b.createContext(null), cn = () => b.useContext(mc);
var Rs = (e, t, r, a = !0) => {
  const n = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(n, s, {
      get: () => {
        const i = s;
        return t._proxyFormState[i] !== Ze.all && (t._proxyFormState[i] = !a || Ze.all), r && (r[i] = !0), e[i];
      }
    });
  return n;
}, Ne = (e) => ve(e) && !Object.keys(e).length, Ms = (e, t, r, a) => {
  r(e);
  const { name: n, ...s } = e;
  return Ne(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((i) => t[i] === (!a || Ze.all));
}, Wr = (e) => Array.isArray(e) ? e : [e], Ps = (e, t, r) => !e || !t || e === t || Wr(e).some((a) => a && (r ? a === t : a.startsWith(t) || t.startsWith(a)));
function un(e) {
  const t = b.useRef(e);
  t.current = e, b.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function yc(e) {
  const t = cn(), { control: r = t.control, disabled: a, name: n, exact: s } = e || {}, [i, o] = b.useState(r._formState), c = b.useRef(!0), l = b.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = b.useRef(n);
  return d.current = n, un({
    disabled: a,
    next: (y) => c.current && Ps(d.current, y.name, s) && Ms(y, l.current, r._updateFormState) && o({
      ...r._formState,
      ...y
    }),
    subject: r._subjects.state
  }), b.useEffect(() => (c.current = !0, l.current.isValid && r._updateValid(!0), () => {
    c.current = !1;
  }), [r]), Rs(i, r, l.current, !1);
}
var qe = (e) => typeof e == "string", Vs = (e, t, r, a, n) => qe(e) ? (a && t.watch.add(e), w(r, e, n)) : Array.isArray(e) ? e.map((s) => (a && t.watch.add(s), w(r, s))) : (a && (t.watchAll = !0), r);
function pc(e) {
  const t = cn(), { control: r = t.control, name: a, defaultValue: n, disabled: s, exact: i } = e || {}, o = b.useRef(a);
  o.current = a, un({
    disabled: s,
    subject: r._subjects.values,
    next: (d) => {
      Ps(o.current, d.name, i) && l(Le(Vs(o.current, r._names, d.values || r._formValues, !1, n)));
    }
  });
  const [c, l] = b.useState(r._getWatch(a, n));
  return b.useEffect(() => r._removeUnmounted()), c;
}
var ln = (e) => /^\w*$/.test(e), Ls = (e) => kr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Q = (e, t, r) => {
  let a = -1;
  const n = ln(t) ? [t] : Ls(t), s = n.length, i = s - 1;
  for (; ++a < s; ) {
    const o = n[a];
    let c = r;
    if (a !== i) {
      const l = e[o];
      c = ve(l) || Array.isArray(l) ? l : isNaN(+n[a + 1]) ? {} : [];
    }
    e[o] = c, e = e[o];
  }
  return e;
};
function gc(e) {
  const t = cn(), { name: r, disabled: a, control: n = t.control, shouldUnregister: s } = e, i = Is(n._names.array, r), o = pc({
    control: n,
    name: r,
    defaultValue: w(n._formValues, r, w(n._defaultValues, r, e.defaultValue)),
    exact: !0
  }), c = yc({
    control: n,
    name: r
  }), l = b.useRef(n.register(r, {
    ...e.rules,
    value: o,
    disabled: e.disabled
  }));
  return l.current = n.register(r, e.rules), b.useEffect(() => {
    const d = n._options.shouldUnregister || s, y = (v, x) => {
      const S = w(n._fields, v);
      S && (S._f.mount = x);
    };
    if (y(r, !0), d) {
      const v = Le(w(n._options.defaultValues, r));
      Q(n._defaultValues, r, v), ue(w(n._formValues, r)) && Q(n._formValues, r, v);
    }
    return () => {
      (i ? d && !n._state.action : d) ? n.unregister(r) : y(r, !1);
    };
  }, [r, n, i, s]), b.useEffect(() => {
    w(n._fields, r) && n._updateDisabledField({
      disabled: a,
      fields: n._fields,
      name: r,
      value: w(n._fields, r)._f.value
    });
  }, [a, r, n]), {
    field: {
      name: r,
      value: o,
      ...je(a) || je(c.disabled) ? { disabled: c.disabled || a } : {},
      onChange: b.useCallback((d) => l.current.onChange({
        target: {
          value: As(d),
          name: r
        },
        type: Xr.CHANGE
      }), [r]),
      onBlur: b.useCallback(() => l.current.onBlur({
        target: {
          value: w(n._formValues, r),
          name: r
        },
        type: Xr.BLUR
      }), [r, n]),
      ref: (d) => {
        const y = w(n._fields, r);
        y && d && (y._f.ref = {
          focus: () => d.focus(),
          select: () => d.select(),
          setCustomValidity: (v) => d.setCustomValidity(v),
          reportValidity: () => d.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!w(c.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!w(c.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!w(c.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => w(c.errors, r)
      }
    })
  };
}
const bc = (e) => e.render(gc(e));
var js = (e, t, r, a, n) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [a]: n || !0
  }
} : {}, $n = (e) => ({
  isOnSubmit: !e || e === Ze.onSubmit,
  isOnBlur: e === Ze.onBlur,
  isOnChange: e === Ze.onChange,
  isOnAll: e === Ze.all,
  isOnTouch: e === Ze.onTouched
}), Wn = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))));
const tr = (e, t, r, a) => {
  for (const n of r || Object.keys(e)) {
    const s = w(e, n);
    if (s) {
      const { _f: i, ...o } = s;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], n) && !a)
          break;
        if (i.ref && t(i.ref, i.name) && !a)
          break;
        tr(o, t);
      } else
        ve(o) && tr(o, t);
    }
  }
};
var _c = (e, t, r) => {
  const a = kr(w(e, r));
  return Q(a, "root", t[r]), Q(e, r, a), e;
}, dn = (e) => e.type === "file", lt = (e) => typeof e == "function", ea = (e) => {
  if (!on)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Yr = (e) => qe(e), fn = (e) => e.type === "radio", ta = (e) => e instanceof RegExp;
const Yn = {
  value: !1,
  isValid: !1
}, Bn = { value: !0, isValid: !0 };
var Zs = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ue(e[0].attributes.value) ? ue(e[0].value) || e[0].value === "" ? Bn : { value: e[0].value, isValid: !0 } : Bn
    ) : Yn;
  }
  return Yn;
};
const Un = {
  isValid: !1,
  value: null
};
var Fs = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Un) : Un;
function zn(e, t, r = "validate") {
  if (Yr(e) || Array.isArray(e) && e.every(Yr) || je(e) && !e)
    return {
      type: r,
      message: Yr(e) ? e : "",
      ref: t
    };
}
var Mt = (e) => ve(e) && !ta(e) ? e : {
  value: e,
  message: ""
}, Hn = async (e, t, r, a, n) => {
  const { ref: s, refs: i, required: o, maxLength: c, minLength: l, min: d, max: y, pattern: v, validate: x, name: S, valueAsNumber: R, mount: L, disabled: j } = e._f, k = w(t, S);
  if (!L || j)
    return {};
  const U = i ? i[0] : s, z = (M) => {
    a && U.reportValidity && (U.setCustomValidity(je(M) ? "" : M || ""), U.reportValidity());
  }, $ = {}, Z = fn(s), fe = xr(s), le = Z || fe, ke = (R || dn(s)) && ue(s.value) && ue(k) || ea(s) && s.value === "" || k === "" || Array.isArray(k) && !k.length, H = js.bind(null, S, r, $), Ie = (M, Y, B, ae = Xe.maxLength, X = Xe.minLength) => {
    const ye = M ? Y : B;
    $[S] = {
      type: M ? ae : X,
      message: ye,
      ref: s,
      ...H(M ? ae : X, ye)
    };
  };
  if (n ? !Array.isArray(k) || !k.length : o && (!le && (ke || we(k)) || je(k) && !k || fe && !Zs(i).isValid || Z && !Fs(i).isValid)) {
    const { value: M, message: Y } = Yr(o) ? { value: !!o, message: o } : Mt(o);
    if (M && ($[S] = {
      type: Xe.required,
      message: Y,
      ref: U,
      ...H(Xe.required, Y)
    }, !r))
      return z(Y), $;
  }
  if (!ke && (!we(d) || !we(y))) {
    let M, Y;
    const B = Mt(y), ae = Mt(d);
    if (!we(k) && !isNaN(k)) {
      const X = s.valueAsNumber || k && +k;
      we(B.value) || (M = X > B.value), we(ae.value) || (Y = X < ae.value);
    } else {
      const X = s.valueAsDate || new Date(k), ye = (ie) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ie), De = s.type == "time", me = s.type == "week";
      qe(B.value) && k && (M = De ? ye(k) > ye(B.value) : me ? k > B.value : X > new Date(B.value)), qe(ae.value) && k && (Y = De ? ye(k) < ye(ae.value) : me ? k < ae.value : X < new Date(ae.value));
    }
    if ((M || Y) && (Ie(!!M, B.message, ae.message, Xe.max, Xe.min), !r))
      return z($[S].message), $;
  }
  if ((c || l) && !ke && (qe(k) || n && Array.isArray(k))) {
    const M = Mt(c), Y = Mt(l), B = !we(M.value) && k.length > +M.value, ae = !we(Y.value) && k.length < +Y.value;
    if ((B || ae) && (Ie(B, M.message, Y.message), !r))
      return z($[S].message), $;
  }
  if (v && !ke && qe(k)) {
    const { value: M, message: Y } = Mt(v);
    if (ta(M) && !k.match(M) && ($[S] = {
      type: Xe.pattern,
      message: Y,
      ref: s,
      ...H(Xe.pattern, Y)
    }, !r))
      return z(Y), $;
  }
  if (x) {
    if (lt(x)) {
      const M = await x(k, t), Y = zn(M, U);
      if (Y && ($[S] = {
        ...Y,
        ...H(Xe.validate, Y.message)
      }, !r))
        return z(Y.message), $;
    } else if (ve(x)) {
      let M = {};
      for (const Y in x) {
        if (!Ne(M) && !r)
          break;
        const B = zn(await x[Y](k, t), U, Y);
        B && (M = {
          ...B,
          ...H(Y, B.message)
        }, z(B.message), r && ($[S] = M));
      }
      if (!Ne(M) && ($[S] = {
        ref: U,
        ...M
      }, !r))
        return $;
    }
  }
  return z(!0), $;
};
function wc(e, t) {
  const r = t.slice(0, -1).length;
  let a = 0;
  for (; a < r; )
    e = ue(e) ? a++ : e[t[a++]];
  return e;
}
function xc(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ue(e[t]))
      return !1;
  return !0;
}
function pe(e, t) {
  const r = Array.isArray(t) ? t : ln(t) ? [t] : Ls(t), a = r.length === 1 ? e : wc(e, r), n = r.length - 1, s = r[n];
  return a && delete a[s], n !== 0 && (ve(a) && Ne(a) || Array.isArray(a) && xc(a)) && pe(e, r.slice(0, -1)), e;
}
var Ra = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (n) => {
      for (const s of e)
        s.next && s.next(n);
    },
    subscribe: (n) => (e.push(n), {
      unsubscribe: () => {
        e = e.filter((s) => s !== n);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, ra = (e) => we(e) || !Ns(e);
function _t(e, t) {
  if (ra(e) || ra(t))
    return e === t;
  if (Lt(e) && Lt(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), a = Object.keys(t);
  if (r.length !== a.length)
    return !1;
  for (const n of r) {
    const s = e[n];
    if (!a.includes(n))
      return !1;
    if (n !== "ref") {
      const i = t[n];
      if (Lt(s) && Lt(i) || ve(s) && ve(i) || Array.isArray(s) && Array.isArray(i) ? !_t(s, i) : s !== i)
        return !1;
    }
  }
  return !0;
}
var $s = (e) => e.type === "select-multiple", kc = (e) => fn(e) || xr(e), Ma = (e) => ea(e) && e.isConnected, Ws = (e) => {
  for (const t in e)
    if (lt(e[t]))
      return !0;
  return !1;
};
function aa(e, t = {}) {
  const r = Array.isArray(e);
  if (ve(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || ve(e[a]) && !Ws(e[a]) ? (t[a] = Array.isArray(e[a]) ? [] : {}, aa(e[a], t[a])) : we(e[a]) || (t[a] = !0);
  return t;
}
function Ys(e, t, r) {
  const a = Array.isArray(e);
  if (ve(e) || a)
    for (const n in e)
      Array.isArray(e[n]) || ve(e[n]) && !Ws(e[n]) ? ue(t) || ra(r[n]) ? r[n] = Array.isArray(e[n]) ? aa(e[n], []) : { ...aa(e[n]) } : Ys(e[n], we(t) ? {} : t[n], r[n]) : r[n] = !_t(e[n], t[n]);
  return r;
}
var Pa = (e, t) => Ys(e, t, aa(t)), Bs = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: a }) => ue(e) ? e : t ? e === "" ? NaN : e && +e : r && qe(e) ? new Date(e) : a ? a(e) : e;
function Va(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return dn(t) ? t.files : fn(t) ? Fs(e.refs).value : $s(t) ? [...t.selectedOptions].map(({ value: r }) => r) : xr(t) ? Zs(e.refs).value : Bs(ue(t.value) ? e.ref.value : t.value, e);
}
var Dc = (e, t, r, a) => {
  const n = {};
  for (const s of e) {
    const i = w(t, s);
    i && Q(n, s, i._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: n,
    shouldUseNativeValidation: a
  };
}, Kt = (e) => ue(e) ? e : ta(e) ? e.source : ve(e) ? ta(e.value) ? e.value.source : e.value : e, Oc = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function qn(e, t, r) {
  const a = w(e, r);
  if (a || ln(r))
    return {
      error: a,
      name: r
    };
  const n = r.split(".");
  for (; n.length; ) {
    const s = n.join("."), i = w(t, s), o = w(e, s);
    if (i && !Array.isArray(i) && r !== s)
      return { name: r };
    if (o && o.type)
      return {
        name: s,
        error: o
      };
    n.pop();
  }
  return {
    name: r
  };
}
var Tc = (e, t, r, a, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(t || e) : (r ? a.isOnBlur : n.isOnBlur) ? !e : (r ? a.isOnChange : n.isOnChange) ? e : !0, Sc = (e, t) => !kr(w(e, t)).length && pe(e, t);
const Ec = {
  mode: Ze.onSubmit,
  reValidateMode: Ze.onChange,
  shouldFocusError: !0
};
function Cc(e = {}, t) {
  let r = {
    ...Ec,
    ...e
  }, a = {
    submitCount: 0,
    isDirty: !1,
    isLoading: lt(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, n = {}, s = ve(r.defaultValues) || ve(r.values) ? Le(r.defaultValues || r.values) || {} : {}, i = r.shouldUnregister ? {} : Le(s), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, d = 0;
  const y = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    values: Ra(),
    array: Ra(),
    state: Ra()
  }, x = e.resetOptions && e.resetOptions.keepDirtyValues, S = $n(r.mode), R = $n(r.reValidateMode), L = r.criteriaMode === Ze.all, j = (u) => (f) => {
    clearTimeout(d), d = setTimeout(u, f);
  }, k = async (u) => {
    if (y.isValid || u) {
      const f = r.resolver ? Ne((await H()).errors) : await M(n, !0);
      f !== a.isValid && v.state.next({
        isValid: f
      });
    }
  }, U = (u) => y.isValidating && v.state.next({
    isValidating: u
  }), z = (u, f = [], h, O, _ = !0, g = !0) => {
    if (O && h) {
      if (o.action = !0, g && Array.isArray(w(n, u))) {
        const N = h(w(n, u), O.argA, O.argB);
        _ && Q(n, u, N);
      }
      if (g && Array.isArray(w(a.errors, u))) {
        const N = h(w(a.errors, u), O.argA, O.argB);
        _ && Q(a.errors, u, N), Sc(a.errors, u);
      }
      if (y.touchedFields && g && Array.isArray(w(a.touchedFields, u))) {
        const N = h(w(a.touchedFields, u), O.argA, O.argB);
        _ && Q(a.touchedFields, u, N);
      }
      y.dirtyFields && (a.dirtyFields = Pa(s, i)), v.state.next({
        name: u,
        isDirty: B(u, f),
        dirtyFields: a.dirtyFields,
        errors: a.errors,
        isValid: a.isValid
      });
    } else
      Q(i, u, f);
  }, $ = (u, f) => {
    Q(a.errors, u, f), v.state.next({
      errors: a.errors
    });
  }, Z = (u) => {
    a.errors = u, v.state.next({
      errors: a.errors,
      isValid: !1
    });
  }, fe = (u, f, h, O) => {
    const _ = w(n, u);
    if (_) {
      const g = w(i, u, ue(h) ? w(s, u) : h);
      ue(g) || O && O.defaultChecked || f ? Q(i, u, f ? g : Va(_._f)) : ye(u, g), o.mount && k();
    }
  }, le = (u, f, h, O, _) => {
    let g = !1, N = !1;
    const J = {
      name: u
    };
    if (!h || O) {
      y.isDirty && (N = a.isDirty, a.isDirty = J.isDirty = B(), g = N !== J.isDirty);
      const oe = _t(w(s, u), f);
      N = w(a.dirtyFields, u), oe ? pe(a.dirtyFields, u) : Q(a.dirtyFields, u, !0), J.dirtyFields = a.dirtyFields, g = g || y.dirtyFields && N !== !oe;
    }
    if (h) {
      const oe = w(a.touchedFields, u);
      oe || (Q(a.touchedFields, u, h), J.touchedFields = a.touchedFields, g = g || y.touchedFields && oe !== h);
    }
    return g && _ && v.state.next(J), g ? J : {};
  }, ke = (u, f, h, O) => {
    const _ = w(a.errors, u), g = y.isValid && je(f) && a.isValid !== f;
    if (e.delayError && h ? (l = j(() => $(u, h)), l(e.delayError)) : (clearTimeout(d), l = null, h ? Q(a.errors, u, h) : pe(a.errors, u)), (h ? !_t(_, h) : _) || !Ne(O) || g) {
      const N = {
        ...O,
        ...g && je(f) ? { isValid: f } : {},
        errors: a.errors,
        name: u
      };
      a = {
        ...a,
        ...N
      }, v.state.next(N);
    }
    U(!1);
  }, H = async (u) => r.resolver(i, r.context, Dc(u || c.mount, n, r.criteriaMode, r.shouldUseNativeValidation)), Ie = async (u) => {
    const { errors: f } = await H(u);
    if (u)
      for (const h of u) {
        const O = w(f, h);
        O ? Q(a.errors, h, O) : pe(a.errors, h);
      }
    else
      a.errors = f;
    return f;
  }, M = async (u, f, h = {
    valid: !0
  }) => {
    for (const O in u) {
      const _ = u[O];
      if (_) {
        const { _f: g, ...N } = _;
        if (g) {
          const J = c.array.has(g.name), oe = await Hn(_, i, L, r.shouldUseNativeValidation && !f, J);
          if (oe[g.name] && (h.valid = !1, f))
            break;
          !f && (w(oe, g.name) ? J ? _c(a.errors, oe, g.name) : Q(a.errors, g.name, oe[g.name]) : pe(a.errors, g.name));
        }
        N && await M(N, f, h);
      }
    }
    return h.valid;
  }, Y = () => {
    for (const u of c.unMount) {
      const f = w(n, u);
      f && (f._f.refs ? f._f.refs.every((h) => !Ma(h)) : !Ma(f._f.ref)) && Re(u);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, B = (u, f) => (u && f && Q(i, u, f), !_t(Ue(), s)), ae = (u, f, h) => Vs(u, c, {
    ...o.mount ? i : ue(f) ? s : qe(u) ? { [u]: f } : f
  }, h, f), X = (u) => kr(w(o.mount ? i : s, u, e.shouldUnregister ? w(s, u, []) : [])), ye = (u, f, h = {}) => {
    const O = w(n, u);
    let _ = f;
    if (O) {
      const g = O._f;
      g && (!g.disabled && Q(i, u, Bs(f, g)), _ = ea(g.ref) && we(f) ? "" : f, $s(g.ref) ? [...g.ref.options].forEach((N) => N.selected = _.includes(N.value)) : g.refs ? xr(g.ref) ? g.refs.length > 1 ? g.refs.forEach((N) => (!N.defaultChecked || !N.disabled) && (N.checked = Array.isArray(_) ? !!_.find((J) => J === N.value) : _ === N.value)) : g.refs[0] && (g.refs[0].checked = !!_) : g.refs.forEach((N) => N.checked = N.value === _) : dn(g.ref) ? g.ref.value = "" : (g.ref.value = _, g.ref.type || v.values.next({
        name: u,
        values: { ...i }
      })));
    }
    (h.shouldDirty || h.shouldTouch) && le(u, _, h.shouldTouch, h.shouldDirty, !0), h.shouldValidate && Ee(u);
  }, De = (u, f, h) => {
    for (const O in f) {
      const _ = f[O], g = `${u}.${O}`, N = w(n, g);
      (c.array.has(u) || !ra(_) || N && !N._f) && !Lt(_) ? De(g, _, h) : ye(g, _, h);
    }
  }, me = (u, f, h = {}) => {
    const O = w(n, u), _ = c.array.has(u), g = Le(f);
    Q(i, u, g), _ ? (v.array.next({
      name: u,
      values: { ...i }
    }), (y.isDirty || y.dirtyFields) && h.shouldDirty && v.state.next({
      name: u,
      dirtyFields: Pa(s, i),
      isDirty: B(u, g)
    })) : O && !O._f && !we(g) ? De(u, g, h) : ye(u, g, h), Wn(u, c) && v.state.next({ ...a }), v.values.next({
      name: u,
      values: { ...i }
    }), !o.mount && t();
  }, ie = async (u) => {
    const f = u.target;
    let h = f.name, O = !0;
    const _ = w(n, h), g = () => f.type ? Va(_._f) : As(u), N = (J) => {
      O = Number.isNaN(J) || J === w(i, h, J);
    };
    if (_) {
      let J, oe;
      const it = g(), Ke = u.type === Xr.BLUR || u.type === Xr.FOCUS_OUT, Cr = !Oc(_._f) && !r.resolver && !w(a.errors, h) && !_._f.deps || Tc(Ke, w(a.touchedFields, h), a.isSubmitted, R, S), Qt = Wn(h, c, Ke);
      Q(i, h, it), Ke ? (_._f.onBlur && _._f.onBlur(u), l && l(0)) : _._f.onChange && _._f.onChange(u);
      const ot = le(h, it, Ke, !1), Nr = !Ne(ot) || Qt;
      if (!Ke && v.values.next({
        name: h,
        type: u.type,
        values: { ...i }
      }), Cr)
        return y.isValid && k(), Nr && v.state.next({ name: h, ...Qt ? {} : ot });
      if (!Ke && Qt && v.state.next({ ...a }), U(!0), r.resolver) {
        const { errors: Ar } = await H([h]);
        if (N(it), O) {
          const Ir = qn(a.errors, n, h), Jt = qn(Ar, n, Ir.name || h);
          J = Jt.error, h = Jt.name, oe = Ne(Ar);
        }
      } else
        J = (await Hn(_, i, L, r.shouldUseNativeValidation))[h], N(it), O && (J ? oe = !1 : y.isValid && (oe = await M(n, !0)));
      O && (_._f.deps && Ee(_._f.deps), ke(h, oe, J, ot));
    }
  }, Se = (u, f) => {
    if (w(a.errors, f) && u.focus)
      return u.focus(), 1;
  }, Ee = async (u, f = {}) => {
    let h, O;
    const _ = Wr(u);
    if (U(!0), r.resolver) {
      const g = await Ie(ue(u) ? u : _);
      h = Ne(g), O = u ? !_.some((N) => w(g, N)) : h;
    } else
      u ? (O = (await Promise.all(_.map(async (g) => {
        const N = w(n, g);
        return await M(N && N._f ? { [g]: N } : N);
      }))).every(Boolean), !(!O && !a.isValid) && k()) : O = h = await M(n);
    return v.state.next({
      ...!qe(u) || y.isValid && h !== a.isValid ? {} : { name: u },
      ...r.resolver || !u ? { isValid: h } : {},
      errors: a.errors,
      isValidating: !1
    }), f.shouldFocus && !O && tr(n, Se, u ? _ : c.mount), O;
  }, Ue = (u) => {
    const f = {
      ...s,
      ...o.mount ? i : {}
    };
    return ue(u) ? f : qe(u) ? w(f, u) : u.map((h) => w(f, h));
  }, Je = (u, f) => ({
    invalid: !!w((f || a).errors, u),
    isDirty: !!w((f || a).dirtyFields, u),
    isTouched: !!w((f || a).touchedFields, u),
    error: w((f || a).errors, u)
  }), nt = (u) => {
    u && Wr(u).forEach((f) => pe(a.errors, f)), v.state.next({
      errors: u ? a.errors : {}
    });
  }, q = (u, f, h) => {
    const O = (w(n, u, { _f: {} })._f || {}).ref;
    Q(a.errors, u, {
      ...f,
      ref: O
    }), v.state.next({
      name: u,
      errors: a.errors,
      isValid: !1
    }), h && h.shouldFocus && O && O.focus && O.focus();
  }, te = (u, f) => lt(u) ? v.values.subscribe({
    next: (h) => u(ae(void 0, f), h)
  }) : ae(u, f, !0), Re = (u, f = {}) => {
    for (const h of u ? Wr(u) : c.mount)
      c.mount.delete(h), c.array.delete(h), f.keepValue || (pe(n, h), pe(i, h)), !f.keepError && pe(a.errors, h), !f.keepDirty && pe(a.dirtyFields, h), !f.keepTouched && pe(a.touchedFields, h), !r.shouldUnregister && !f.keepDefaultValue && pe(s, h);
    v.values.next({
      values: { ...i }
    }), v.state.next({
      ...a,
      ...f.keepDirty ? { isDirty: B() } : {}
    }), !f.keepIsValid && k();
  }, Me = ({ disabled: u, name: f, field: h, fields: O, value: _ }) => {
    if (je(u)) {
      const g = u ? void 0 : ue(_) ? Va(h ? h._f : w(O, f)._f) : _;
      Q(i, f, g), le(f, g, !1, !1, !0);
    }
  }, pt = (u, f = {}) => {
    let h = w(n, u);
    const O = je(f.disabled);
    return Q(n, u, {
      ...h || {},
      _f: {
        ...h && h._f ? h._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...f
      }
    }), c.mount.add(u), h ? Me({
      field: h,
      disabled: f.disabled,
      name: u
    }) : fe(u, !0, f.value), {
      ...O ? { disabled: f.disabled } : {},
      ...r.progressive ? {
        required: !!f.required,
        min: Kt(f.min),
        max: Kt(f.max),
        minLength: Kt(f.minLength),
        maxLength: Kt(f.maxLength),
        pattern: Kt(f.pattern)
      } : {},
      name: u,
      onChange: ie,
      onBlur: ie,
      ref: (_) => {
        if (_) {
          pt(u, f), h = w(n, u);
          const g = ue(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, N = kc(g), J = h._f.refs || [];
          if (N ? J.find((oe) => oe === g) : g === h._f.ref)
            return;
          Q(n, u, {
            _f: {
              ...h._f,
              ...N ? {
                refs: [
                  ...J.filter(Ma),
                  g,
                  ...Array.isArray(w(s, u)) ? [{}] : []
                ],
                ref: { type: g.type, name: u }
              } : { ref: g }
            }
          }), fe(u, !1, void 0, g);
        } else
          h = w(n, u, {}), h._f && (h._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(Is(c.array, u) && o.action) && c.unMount.add(u);
      }
    };
  }, Nt = () => r.shouldFocusError && tr(n, Se, c.mount), At = (u) => {
    je(u) && (v.state.next({ disabled: u }), tr(n, (f, h) => {
      let O = u;
      const _ = w(n, h);
      _ && je(_._f.disabled) && (O || (O = _._f.disabled)), f.disabled = O;
    }, 0, !1));
  }, It = (u, f) => async (h) => {
    h && (h.preventDefault && h.preventDefault(), h.persist && h.persist());
    let O = Le(i);
    if (v.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: _, values: g } = await H();
      a.errors = _, O = g;
    } else
      await M(n);
    pe(a.errors, "root"), Ne(a.errors) ? (v.state.next({
      errors: {}
    }), await u(O, h)) : (f && await f({ ...a.errors }, h), Nt(), setTimeout(Nt)), v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ne(a.errors),
      submitCount: a.submitCount + 1,
      errors: a.errors
    });
  }, de = (u, f = {}) => {
    w(n, u) && (ue(f.defaultValue) ? me(u, w(s, u)) : (me(u, f.defaultValue), Q(s, u, f.defaultValue)), f.keepTouched || pe(a.touchedFields, u), f.keepDirty || (pe(a.dirtyFields, u), a.isDirty = f.defaultValue ? B(u, w(s, u)) : B()), f.keepError || (pe(a.errors, u), y.isValid && k()), v.state.next({ ...a }));
  }, st = (u, f = {}) => {
    const h = u ? Le(u) : s, O = Le(h), _ = u && !Ne(u) ? O : s;
    if (f.keepDefaultValues || (s = h), !f.keepValues) {
      if (f.keepDirtyValues || x)
        for (const g of c.mount)
          w(a.dirtyFields, g) ? Q(_, g, w(i, g)) : me(g, w(_, g));
      else {
        if (on && ue(u))
          for (const g of c.mount) {
            const N = w(n, g);
            if (N && N._f) {
              const J = Array.isArray(N._f.refs) ? N._f.refs[0] : N._f.ref;
              if (ea(J)) {
                const oe = J.closest("form");
                if (oe) {
                  oe.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      i = e.shouldUnregister ? f.keepDefaultValues ? Le(s) : {} : Le(_), v.array.next({
        values: { ..._ }
      }), v.values.next({
        values: { ..._ }
      });
    }
    c = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !o.mount && t(), o.mount = !y.isValid || !!f.keepIsValid, o.watch = !!e.shouldUnregister, v.state.next({
      submitCount: f.keepSubmitCount ? a.submitCount : 0,
      isDirty: f.keepDirty ? a.isDirty : !!(f.keepDefaultValues && !_t(u, s)),
      isSubmitted: f.keepIsSubmitted ? a.isSubmitted : !1,
      dirtyFields: f.keepDirtyValues ? a.dirtyFields : f.keepDefaultValues && u ? Pa(s, u) : {},
      touchedFields: f.keepTouched ? a.touchedFields : {},
      errors: f.keepErrors ? a.errors : {},
      isSubmitSuccessful: f.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, be = (u, f) => st(lt(u) ? u(i) : u, f);
  return {
    control: {
      register: pt,
      unregister: Re,
      getFieldState: Je,
      handleSubmit: It,
      setError: q,
      _executeSchema: H,
      _getWatch: ae,
      _getDirty: B,
      _updateValid: k,
      _removeUnmounted: Y,
      _updateFieldArray: z,
      _updateDisabledField: Me,
      _getFieldArray: X,
      _reset: st,
      _resetDefaultValues: () => lt(r.defaultValues) && r.defaultValues().then((u) => {
        be(u, r.resetOptions), v.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (u) => {
        a = {
          ...a,
          ...u
        };
      },
      _disableForm: At,
      _subjects: v,
      _proxyFormState: y,
      _setErrors: Z,
      get _fields() {
        return n;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(u) {
        o = u;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return c;
      },
      set _names(u) {
        c = u;
      },
      get _formState() {
        return a;
      },
      set _formState(u) {
        a = u;
      },
      get _options() {
        return r;
      },
      set _options(u) {
        r = {
          ...r,
          ...u
        };
      }
    },
    trigger: Ee,
    register: pt,
    handleSubmit: It,
    watch: te,
    setValue: me,
    getValues: Ue,
    reset: be,
    resetField: de,
    clearErrors: nt,
    unregister: Re,
    setError: q,
    setFocus: (u, f = {}) => {
      const h = w(n, u), O = h && h._f;
      if (O) {
        const _ = O.refs ? O.refs[0] : O.ref;
        _.focus && (_.focus(), f.shouldSelect && _.select());
      }
    },
    getFieldState: Je
  };
}
function Nc(e = {}) {
  const t = b.useRef(), r = b.useRef(), [a, n] = b.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: lt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: lt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Cc(e, () => n((i) => ({ ...i }))),
    formState: a
  });
  const s = t.current.control;
  return s._options = e, un({
    subject: s._subjects.state,
    next: (i) => {
      Ms(i, s._proxyFormState, s._updateFormState, !0) && n({ ...s._formState });
    }
  }), b.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), b.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const i = s._getDirty();
      i !== a.isDirty && s._subjects.state.next({
        isDirty: i
      });
    }
  }, [s, a.isDirty]), b.useEffect(() => {
    e.values && !_t(e.values, r.current) ? (s._reset(e.values, s._options.resetOptions), r.current = e.values, n((i) => ({ ...i }))) : s._resetDefaultValues();
  }, [e.values, s]), b.useEffect(() => {
    e.errors && s._setErrors(e.errors);
  }, [e.errors, s]), b.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), t.current.formState = Rs(a, s), t.current;
}
const kd = ({
  render: e,
  ...t
}) => /* @__PURE__ */ A(bc, { ...t, render: ({
  field: r,
  fieldState: a,
  ...n
}) => {
  var s;
  return e({
    field: {
      ...r,
      error: (s = a.error) == null ? void 0 : s.message
    },
    fieldState: a,
    ...n
  });
} });
var Us = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "triangle-exclamation", a = 512, n = 512, s = [9888, "exclamation-triangle", "warning"], i = "f071", o = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      a,
      n,
      s,
      i,
      o
    ]
  }, e.faTriangleExclamation = e.definition, e.prefix = t, e.iconName = r, e.width = a, e.height = n, e.ligatures = s, e.unicode = i, e.svgPathData = o, e.aliases = s;
})(Us);
const Ac = ({
  helperText: e,
  label: t,
  error: r,
  children: a,
  ...n
}, s) => (e = r || e, /* @__PURE__ */ Ye("div", { ref: s, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, t && {
  paddingTop: "1.5rem"
}], ...n, children: [
  a,
  t && /* @__PURE__ */ A("label", { css: [{
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
  }, r && {
    "--tw-text-opacity": "1",
    color: "rgb(220 38 38 / var(--tw-text-opacity))"
  }], children: t }),
  e && /* @__PURE__ */ Ye("div", { css: [{
    pointerEvents: "none",
    marginTop: "0.25rem",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: "300"
  }, r ? {
    "--tw-text-opacity": "1",
    color: "rgb(220 38 38 / var(--tw-text-opacity))"
  } : {
    "--tw-text-opacity": "1",
    color: "rgb(107 114 128 / var(--tw-text-opacity))"
  }], children: [
    r && /* @__PURE__ */ A(dt, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: Us.faTriangleExclamation }),
    e
  ] })
] })), la = E.forwardRef(Ac);
var Gn = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var a = w(r, t);
    e.setCustomValidity(a && a.message || ""), e.reportValidity();
  }
}, zs = function(e, t) {
  var r = function(n) {
    var s = t.fields[n];
    s && s.ref && "reportValidity" in s.ref ? Gn(s.ref, n, e) : s.refs && s.refs.forEach(function(i) {
      return Gn(i, n, e);
    });
  };
  for (var a in t.fields)
    r(a);
}, Ic = function(e, t) {
  t.shouldUseNativeValidation && zs(e, t);
  var r = {};
  for (var a in e) {
    var n = w(t.fields, a), s = Object.assign(e[a] || {}, { ref: n && n.ref });
    if (Mc(t.names || Object.keys(e), a)) {
      var i = Object.assign({}, Rc(w(r, a)));
      Q(i, "root", s), Q(r, a, i);
    } else
      Q(r, a, s);
  }
  return r;
}, Rc = function(e) {
  return Array.isArray(e) ? e.filter(Boolean) : [];
}, Mc = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, Pc = function(e, t) {
  for (var r = {}; e.length; ) {
    var a = e[0], n = a.code, s = a.message, i = a.path.join(".");
    if (!r[i])
      if ("unionErrors" in a) {
        var o = a.unionErrors[0].errors[0];
        r[i] = { message: o.message, type: o.code };
      } else
        r[i] = { message: s, type: n };
    if ("unionErrors" in a && a.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(y) {
        return e.push(y);
      });
    }), t) {
      var c = r[i].types, l = c && c[a.code];
      r[i] = js(i, t, r, n, l ? [].concat(l, a.message) : a.message);
    }
    e.shift();
  }
  return r;
}, Vc = function(e, t, r) {
  return r === void 0 && (r = {}), function(a, n, s) {
    try {
      return Promise.resolve(function(i, o) {
        try {
          var c = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](a, t)).then(function(l) {
            return s.shouldUseNativeValidation && zs({}, s), { errors: {}, values: r.raw ? a : l };
          });
        } catch (l) {
          return o(l);
        }
        return c && c.then ? c.then(void 0, o) : c;
      }(0, function(i) {
        if (function(o) {
          return o.errors != null;
        }(i))
          return { values: {}, errors: Ic(Pc(i.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
};
const Lc = ({
  schema: e,
  mode: t = "onChange",
  reValidateMode: r = "onChange",
  onValid: a,
  onInvalid: n,
  ...s
} = {}) => {
  const i = Nc({
    mode: t,
    reValidateMode: r,
    resolver: e ? Vc(e) : void 0,
    ...s
  });
  return {
    onSubmit: i.handleSubmit((o, c) => a == null ? void 0 : a(o, c), n),
    submit: async () => new Promise((o, c) => {
      i.handleSubmit(async (d, y) => {
        try {
          await (a == null ? void 0 : a(d, y)), o(void 0);
        } catch (v) {
          c(v);
        }
      }, (d) => {
        c(d);
      })();
    }),
    ...i
  };
}, Dd = ({
  onValid: e,
  context: t,
  mutation: r,
  defaultValues: a,
  schema: n,
  transformSendData: s,
  ...i
}) => {
  const o = Lc({
    context: t,
    schema: n,
    defaultValues: a,
    onValid: async (c) => {
      await (e == null ? void 0 : e(c)), await (r == null ? void 0 : r.mutateAsync(s ? s(c) : c, {
        onError: (l, d) => {
          var y;
          (y = l.response) == null || y.data.errors.forEach((v) => {
            v.attribute in d ? o.setError(v.attribute, {
              message: v.msg
            }) : o.setError(`root.fields.${v.attribute}`, {
              type: "server",
              message: v.msg
            });
          });
        }
      }));
    },
    ...i
  });
  return o;
};
var Hs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "eye", a = 576, n = 512, s = [128065], i = "f06e", o = "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      a,
      n,
      s,
      i,
      o
    ]
  }, e.faEye = e.definition, e.prefix = t, e.iconName = r, e.width = a, e.height = n, e.ligatures = s, e.unicode = i, e.svgPathData = o, e.aliases = s;
})(Hs);
const jc = (e, t) => {
  const [r, a] = E.useState(!1);
  return /* @__PURE__ */ A(no, { ref: t, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ A(ro, { position: "end", children: /* @__PURE__ */ A(ao, { size: "small", edge: "end", onClick: () => a((n) => !n), children: /* @__PURE__ */ A(dt, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, bs`
                  width: 18px;
                `], icon: r ? Ji.faEyeSlash : Hs.faEye }) }) })
  }, ...e });
};
E.forwardRef(jc);
const Zc = E.forwardRef(({
  placeholder: e = "Введите",
  ...t
}, r) => /* @__PURE__ */ A("input", { ref: r, placeholder: e, ...t })), Fc = ({
  label: e,
  helperText: t,
  className: r,
  inputWrapRef: a,
  onBlur: n,
  onFocus: s,
  error: i,
  afterItems: o,
  disabled: c,
  isLoading: l,
  inputComponent: d = Zc,
  ...y
}, v) => {
  const [x, S] = b.useState(!1), {
    getRootProps: R,
    getInputProps: L
  } = so({
    error: !!i,
    onBlur: n,
    onFocus: s,
    disabled: c,
    ...y
  }), {
    onBlur: j,
    onFocus: k,
    ...U
  } = L();
  U.ref = sn(U.ref, v), U.value = U.value || "";
  const z = E.useCallback((fe) => {
    c || (S(!0), k == null || k(fe));
  }, [c, S, k]), $ = E.useCallback((fe) => {
    S(!1), j == null || j(fe);
  }, [S, j]);
  let Z = /* @__PURE__ */ Ye("div", { className: r, ref: a, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, i ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, x && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : x ? {
    "--tw-border-opacity": "1",
    borderColor: "rgb(114 117 191 / var(--tw-border-opacity))",
    outlineWidth: "2px",
    outlineColor: "#d2d5eb"
  } : !c && {
    ":hover": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(114 117 191 / var(--tw-border-opacity))"
    }
  }], children: [
    l && /* @__PURE__ */ Ye("div", { css: {
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",
      gap: "0.5rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
      padding: "0.375rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, children: [
      /* @__PURE__ */ A(dt, { icon: ps.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ A(d, { css: [{
      height: "100%",
      width: "100%",
      borderRadius: "4px",
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
      outlineWidth: "0px",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms"
    }, i && {
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        color: "rgb(239 68 68 / var(--tw-placeholder-opacity))"
      }
    }, c && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }], onFocus: z, onBlur: $, ...y, ...U, type: l ? "hidden" : y.type || "text" }),
    o && !c && /* @__PURE__ */ A("div", { css: {
      display: "flex",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: o })
  ] });
  return e && (Z = /* @__PURE__ */ A(la, { label: e, error: i, helperText: t, ...R(), children: Z })), Z;
}, Dr = E.forwardRef(Fc);
var qs = {}, Gs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "xmark", a = 384, n = 512, s = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], i = "f00d", o = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      a,
      n,
      s,
      i,
      o
    ]
  }, e.faXmark = e.definition, e.prefix = t, e.iconName = r, e.width = a, e.height = n, e.ligatures = s, e.unicode = i, e.svgPathData = o, e.aliases = s;
})(Gs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Gs;
  e.definition = {
    prefix: t.prefix,
    iconName: t.iconName,
    icon: [
      t.width,
      t.height,
      t.aliases,
      t.unicode,
      t.svgPathData
    ]
  }, e.faTimes = e.definition, e.prefix = t.prefix, e.iconName = t.iconName, e.width = t.width, e.height = t.height, e.ligatures = t.aliases, e.unicode = t.unicode, e.svgPathData = t.svgPathData, e.aliases = t.aliases;
})(qs);
const Qs = "id", $c = ({
  className: e,
  isLoading: t = !1,
  inputLoading: r = !1,
  idField: a = Qs,
  displayField: n,
  options: s,
  multiple: i,
  open: o,
  label: c,
  error: l,
  onOpen: d,
  onClose: y,
  optionRender: v,
  onChange: x,
  onInputChange: S,
  onSelect: R,
  disabled: L,
  placeholder: j = "Выберите",
  value: k,
  allowClear: U = !0,
  autoComplete: z = !0,
  autoSelect: $ = !1,
  ...Z
}, fe) => {
  const le = E.useCallback((q) => n && n in q ? q[n] : JSON.stringify(q), [n]), ke = E.useMemo(() => i ? (k == null ? void 0 : k.map((q) => s.find((te) => te[a] == q))) || [] : s.find((q) => q[a] == k) || null, [k, s]), {
    value: H,
    getRootProps: Ie,
    getInputProps: M,
    getListboxProps: Y,
    getOptionProps: B,
    groupedOptions: ae,
    getClearProps: X,
    setAnchorEl: ye,
    anchorEl: De,
    popupOpen: me,
    getTagProps: ie
  } = io({
    options: s,
    autoComplete: z,
    autoSelect: $,
    multiple: i,
    open: o,
    value: ke,
    getOptionLabel: le,
    isOptionEqualToValue: (q, te) => a ? q[a] === te[a] : q === te,
    onInputChange: S,
    autoHighlight: !0,
    onOpen: d,
    onClose: y,
    disabled: L,
    unstable_classNamePrefix: "c",
    onChange: (q, te) => {
      x && (Array.isArray(te) ? x(te.map((Re) => Re[a])) : x(te && typeof te == "object" ? te[a] : null)), R == null || R(te);
    }
  }), Se = sn(fe, ye), Ee = De && ae.length > 0 ? /* @__PURE__ */ A("ul", { css: {
    width: "100%"
  }, ...Y(), children: ae.map((q, te) => /* @__PURE__ */ A(b.Fragment, { children: "group" in q ? /* @__PURE__ */ A(Mn, {}) : /* @__PURE__ */ A("li", { css: [{
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
  }, bs`
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
                `], ...B({
    option: q,
    index: te
  }), children: v ? v(q) : le(q) }, q.key) }, a in q ? q[a] : te)) }) : null, Ue = E.useMemo(() => i ? H && H.length > 0 : !!H, [H, i]), Je = M(), nt = /* @__PURE__ */ Ye(Mn, { children: [
    i && (H == null ? void 0 : H.length) > 0 && /* @__PURE__ */ A("div", { css: {
      marginBottom: "0.25rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }, children: H == null ? void 0 : H.map((q, te) => (
      // eslint-disable-next-line react/jsx-key
      /* @__PURE__ */ A("div", { ...ie({
        index: te
      }), css: {
        borderRadius: "0.25rem",
        borderWidth: "1px",
        "--tw-border-opacity": "1",
        borderColor: "rgb(210 213 235 / var(--tw-border-opacity))",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))",
        padding: "0.25rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      }, children: v ? v(q) : le(q) })
    )) }),
    /* @__PURE__ */ A(Dr, { ...Z, error: l, ...Je, inputWrapRef: Se, placeholder: j, isLoading: r, afterItems: [Ue && U && !i && /* @__PURE__ */ A("button", { ...X(), onMouseDown: (q) => {
      q.preventDefault(), q.stopPropagation();
    }, children: /* @__PURE__ */ A(dt, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: qs.faTimes }) }, "clear"), /* @__PURE__ */ A("button", { css: [{
      pointerEvents: "none"
    }], children: /* @__PURE__ */ A(dt, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, l && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: Ki.faCaretDown }) }, "arrow")] }),
    De && /* @__PURE__ */ A(_s, { open: me, anchorEl: De, children: /* @__PURE__ */ A("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: De.offsetWidth
    }], children: t ? /* @__PURE__ */ Ye("div", { css: {
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
      /* @__PURE__ */ A(dt, { icon: ps.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }, spin: !0, size: "lg" }),
      "Загрузка..."
    ] }) : Ee }) })
  ] });
  return c ? /* @__PURE__ */ A(la, { label: c, error: l, className: e, ...Ie(), children: nt }) : nt;
}, Js = E.forwardRef($c), Wc = ({
  dictionary: e,
  open: t = !1,
  value: r,
  filterOptions: a,
  ...n
}, s) => {
  const [i, o] = E.useState(t), c = Xi(e, {
    enabled: i || !!r
  });
  E.useEffect(() => {
    o(t);
  }, [t]);
  const l = E.useMemo(() => a && c.data ? a(c.data) : c.data, [c.data, a]);
  return /* @__PURE__ */ A(
    Js,
    {
      displayField: "name",
      ...n,
      ref: s,
      open: i,
      value: r,
      isLoading: c.isLoading,
      onOpen: () => {
        o(!0);
      },
      onClose: () => {
        o(!1);
      },
      options: l || [],
      inputLoading: c.isLoading && !Ae.isEmpty(r),
      disabled: c.isLoading && !Ae.isEmpty(r) || n.disabled
    }
  );
}, Od = E.forwardRef(Wc);
var Yc = "Expected a function", Ks = "__lodash_hash_undefined__", Bc = "[object Function]", Uc = "[object GeneratorFunction]", zc = /[\\^$.*+?()[\]{}|]/g, Hc = /^\[object .+?Constructor\]$/, qc = typeof Pr == "object" && Pr && Pr.Object === Object && Pr, Gc = typeof self == "object" && self && self.Object === Object && self, Xs = qc || Gc || Function("return this")();
function Qc(e, t) {
  return e == null ? void 0 : e[t];
}
function Jc(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
var Kc = Array.prototype, Xc = Function.prototype, ei = Object.prototype, La = Xs["__core-js_shared__"], Qn = function() {
  var e = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), ti = Xc.toString, hn = ei.hasOwnProperty, eu = ei.toString, tu = RegExp(
  "^" + ti.call(hn).replace(zc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), ru = Kc.splice, au = ri(Xs, "Map"), vr = ri(Object, "create");
function Tt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function nu() {
  this.__data__ = vr ? vr(null) : {};
}
function su(e) {
  return this.has(e) && delete this.__data__[e];
}
function iu(e) {
  var t = this.__data__;
  if (vr) {
    var r = t[e];
    return r === Ks ? void 0 : r;
  }
  return hn.call(t, e) ? t[e] : void 0;
}
function ou(e) {
  var t = this.__data__;
  return vr ? t[e] !== void 0 : hn.call(t, e);
}
function cu(e, t) {
  var r = this.__data__;
  return r[e] = vr && t === void 0 ? Ks : t, this;
}
Tt.prototype.clear = nu;
Tt.prototype.delete = su;
Tt.prototype.get = iu;
Tt.prototype.has = ou;
Tt.prototype.set = cu;
function zt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function uu() {
  this.__data__ = [];
}
function lu(e) {
  var t = this.__data__, r = da(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : ru.call(t, r, 1), !0;
}
function du(e) {
  var t = this.__data__, r = da(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function fu(e) {
  return da(this.__data__, e) > -1;
}
function hu(e, t) {
  var r = this.__data__, a = da(r, e);
  return a < 0 ? r.push([e, t]) : r[a][1] = t, this;
}
zt.prototype.clear = uu;
zt.prototype.delete = lu;
zt.prototype.get = du;
zt.prototype.has = fu;
zt.prototype.set = hu;
function St(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function vu() {
  this.__data__ = {
    hash: new Tt(),
    map: new (au || zt)(),
    string: new Tt()
  };
}
function mu(e) {
  return fa(this, e).delete(e);
}
function yu(e) {
  return fa(this, e).get(e);
}
function pu(e) {
  return fa(this, e).has(e);
}
function gu(e, t) {
  return fa(this, e).set(e, t), this;
}
St.prototype.clear = vu;
St.prototype.delete = mu;
St.prototype.get = yu;
St.prototype.has = pu;
St.prototype.set = gu;
function da(e, t) {
  for (var r = e.length; r--; )
    if (ku(e[r][0], t))
      return r;
  return -1;
}
function bu(e) {
  if (!ai(e) || wu(e))
    return !1;
  var t = Du(e) || Jc(e) ? tu : Hc;
  return t.test(xu(e));
}
function fa(e, t) {
  var r = e.__data__;
  return _u(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ri(e, t) {
  var r = Qc(e, t);
  return bu(r) ? r : void 0;
}
function _u(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function wu(e) {
  return !!Qn && Qn in e;
}
function xu(e) {
  if (e != null) {
    try {
      return ti.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
function vn(e, t) {
  if (typeof e != "function" || t && typeof t != "function")
    throw new TypeError(Yc);
  var r = function() {
    var a = arguments, n = t ? t.apply(this, a) : a[0], s = r.cache;
    if (s.has(n))
      return s.get(n);
    var i = e.apply(this, a);
    return r.cache = s.set(n, i), i;
  };
  return r.cache = new (vn.Cache || St)(), r;
}
vn.Cache = St;
function ku(e, t) {
  return e === t || e !== e && t !== t;
}
function Du(e) {
  var t = ai(e) ? eu.call(e) : "";
  return t == Bc || t == Uc;
}
function ai(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
var Ou = vn;
const ni = /* @__PURE__ */ gs(Ou);
function si(e) {
  return JSON.stringify(e);
}
function Tu(e) {
  return typeof e == "string";
}
function Su(e, t, r) {
  return r.indexOf(e) === t;
}
function Eu(e) {
  return e.toLowerCase() === e;
}
function Jn(e) {
  return e.indexOf(",") === -1 ? e : e.split(",");
}
function qa(e) {
  if (!e)
    return e;
  if (e === "C" || e === "posix" || e === "POSIX")
    return "en-US";
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0], r = t === void 0 ? "" : t;
    return qa(r);
  }
  if (e.indexOf("@") !== -1) {
    var a = e.split("@")[0], r = a === void 0 ? "" : a;
    return qa(r);
  }
  if (e.indexOf("-") === -1 || !Eu(e))
    return e;
  var n = e.split("-"), s = n[0], i = n[1], o = i === void 0 ? "" : i;
  return "".concat(s, "-").concat(o.toUpperCase());
}
function Cu(e) {
  var t = e === void 0 ? {} : e, r = t.useFallbackLocale, a = r === void 0 ? !0 : r, n = t.fallbackLocale, s = n === void 0 ? "en-US" : n, i = [];
  if (typeof navigator < "u") {
    for (var o = navigator.languages || [], c = [], l = 0, d = o; l < d.length; l++) {
      var y = d[l];
      c = c.concat(Jn(y));
    }
    var v = navigator.language, x = v && Jn(v);
    i = i.concat(c, x);
  }
  return a && i.push(s), i.filter(Tu).map(qa).filter(Su);
}
var Nu = ni(Cu, si);
function Au(e) {
  return Nu(e)[0] || null;
}
var ii = ni(Au, si);
function at(e, t, r) {
  return function(n, s) {
    s === void 0 && (s = r);
    var i = e(n) + s;
    return t(i);
  };
}
function Or(e) {
  return function(r) {
    return new Date(e(r).getTime() - 1);
  };
}
function Tr(e, t) {
  return function(a) {
    return [e(a), t(a)];
  };
}
function re(e) {
  if (e instanceof Date)
    return e.getFullYear();
  if (typeof e == "number")
    return e;
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t))
    return t;
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function mt(e) {
  if (e instanceof Date)
    return e.getMonth();
  throw new Error("Failed to get month from date: ".concat(e, "."));
}
function ha(e) {
  if (e instanceof Date)
    return e.getDate();
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function Ht(e) {
  var t = re(e), r = t + (-t + 1) % 100, a = /* @__PURE__ */ new Date();
  return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var Iu = at(re, Ht, -100), oi = at(re, Ht, 100), mn = Or(oi), Ru = at(re, mn, -100), ci = Tr(Ht, mn);
function yt(e) {
  var t = re(e), r = t + (-t + 1) % 10, a = /* @__PURE__ */ new Date();
  return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var ui = at(re, yt, -10), yn = at(re, yt, 10), va = Or(yn), li = at(re, va, -10), di = Tr(yt, va);
function qt(e) {
  var t = re(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var fi = at(re, qt, -1), pn = at(re, qt, 1), ma = Or(pn), hi = at(re, ma, -1), Mu = Tr(qt, ma);
function gn(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var s = re(a), i = mt(a) + n, o = /* @__PURE__ */ new Date();
    return o.setFullYear(s, i, 1), o.setHours(0, 0, 0, 0), e(o);
  };
}
function Et(e) {
  var t = re(e), r = mt(e), a = /* @__PURE__ */ new Date();
  return a.setFullYear(t, r, 1), a.setHours(0, 0, 0, 0), a;
}
var vi = gn(Et, -1), bn = gn(Et, 1), Sr = Or(bn), mi = gn(Sr, -1), Pu = Tr(Et, Sr);
function Vu(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var s = re(a), i = mt(a), o = ha(a) + n, c = /* @__PURE__ */ new Date();
    return c.setFullYear(s, i, o), c.setHours(0, 0, 0, 0), e(c);
  };
}
function Er(e) {
  var t = re(e), r = mt(e), a = ha(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, r, a), n.setHours(0, 0, 0, 0), n;
}
var Lu = Vu(Er, 1), _n = Or(Lu), ju = Tr(Er, _n);
function yi(e) {
  return ha(Sr(e));
}
var Xt, ee = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, jt = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
}, Zu = (Xt = {}, Xt[ee.GREGORY] = [
  "en-CA",
  "en-US",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-DO",
  "es-EC",
  "es-GT",
  "es-HN",
  "es-MX",
  "es-NI",
  "es-PA",
  "es-PE",
  "es-PR",
  "es-SV",
  "es-VE",
  "pt-BR"
], Xt[ee.HEBREW] = ["he", "he-IL"], Xt[ee.ISLAMIC] = [
  // ar-LB, ar-MA intentionally missing
  "ar",
  "ar-AE",
  "ar-BH",
  "ar-DZ",
  "ar-EG",
  "ar-IQ",
  "ar-JO",
  "ar-KW",
  "ar-LY",
  "ar-OM",
  "ar-QA",
  "ar-SA",
  "ar-SD",
  "ar-SY",
  "ar-YE",
  "dv",
  "dv-MV",
  "ps",
  "ps-AR"
], Xt), wn = [0, 1, 2, 3, 4, 5, 6], ja = /* @__PURE__ */ new Map();
function Fu(e) {
  return function(r, a) {
    var n = r || ii();
    ja.has(n) || ja.set(n, /* @__PURE__ */ new Map());
    var s = ja.get(n);
    return s.has(e) || s.set(e, new Intl.DateTimeFormat(n || void 0, e).format), s.get(e)(a);
  };
}
function $u(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function Ct(e) {
  return function(t, r) {
    return Fu(e)(t, $u(r));
  };
}
var Wu = { day: "numeric" }, Yu = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, Bu = { month: "long" }, Uu = {
  month: "long",
  year: "numeric"
}, zu = { weekday: "short" }, Hu = { weekday: "long" }, qu = { year: "numeric" }, Gu = Ct(Wu), Qu = Ct(Yu), Ju = Ct(Bu), pi = Ct(Uu), Ku = Ct(zu), Xu = Ct(Hu), ya = Ct(qu), el = wn[0], tl = wn[5], Kn = wn[6];
function mr(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case ee.ISO_8601:
      return (r + 6) % 7;
    case ee.ISLAMIC:
      return (r + 1) % 7;
    case ee.HEBREW:
    case ee.GREGORY:
      return r;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function rl(e) {
  var t = Ht(e);
  return re(t);
}
function al(e) {
  var t = yt(e);
  return re(t);
}
function Ga(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = re(e), a = mt(e), n = e.getDate() - mr(e, t);
  return new Date(r, a, n);
}
function nl(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = t === ee.GREGORY ? ee.GREGORY : ee.ISO_8601, a = Ga(e, t), n = re(e) + 1, s, i;
  do
    s = new Date(n, 0, r === ee.ISO_8601 ? 4 : 1), i = Ga(s, t), n -= 1;
  while (e < i);
  return Math.round((a.getTime() - i.getTime()) / (864e5 * 7)) + 1;
}
function xt(e, t) {
  switch (e) {
    case "century":
      return Ht(t);
    case "decade":
      return yt(t);
    case "year":
      return qt(t);
    case "month":
      return Et(t);
    case "day":
      return Er(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function sl(e, t) {
  switch (e) {
    case "century":
      return Iu(t);
    case "decade":
      return ui(t);
    case "year":
      return fi(t);
    case "month":
      return vi(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function gi(e, t) {
  switch (e) {
    case "century":
      return oi(t);
    case "decade":
      return yn(t);
    case "year":
      return pn(t);
    case "month":
      return bn(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function il(e, t) {
  switch (e) {
    case "decade":
      return ui(t, -100);
    case "year":
      return fi(t, -10);
    case "month":
      return vi(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ol(e, t) {
  switch (e) {
    case "decade":
      return yn(t, 100);
    case "year":
      return pn(t, 10);
    case "month":
      return bn(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function bi(e, t) {
  switch (e) {
    case "century":
      return mn(t);
    case "decade":
      return va(t);
    case "year":
      return ma(t);
    case "month":
      return Sr(t);
    case "day":
      return _n(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function cl(e, t) {
  switch (e) {
    case "century":
      return Ru(t);
    case "decade":
      return li(t);
    case "year":
      return hi(t);
    case "month":
      return mi(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ul(e, t) {
  switch (e) {
    case "decade":
      return li(t, -100);
    case "year":
      return hi(t, -10);
    case "month":
      return mi(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Xn(e, t) {
  switch (e) {
    case "century":
      return ci(t);
    case "decade":
      return di(t);
    case "year":
      return Mu(t);
    case "month":
      return Pu(t);
    case "day":
      return ju(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ll(e, t, r) {
  var a = [t, r].sort(function(n, s) {
    return n.getTime() - s.getTime();
  });
  return [xt(e, a[0]), bi(e, a[1])];
}
function _i(e, t, r) {
  return t === void 0 && (t = ya), r.map(function(a) {
    return t(e, a);
  }).join(" – ");
}
function dl(e, t, r) {
  return _i(e, t, ci(r));
}
function wi(e, t, r) {
  return _i(e, t, di(r));
}
function fl(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function xi(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case ee.ISLAMIC:
    case ee.HEBREW:
      return r === tl || r === Kn;
    case ee.ISO_8601:
    case ee.GREGORY:
      return r === Kn || r === el;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var He = "react-calendar__navigation";
function hl(e) {
  var t = e.activeStartDate, r = e.drillUp, a = e.formatMonthYear, n = a === void 0 ? pi : a, s = e.formatYear, i = s === void 0 ? ya : s, o = e.locale, c = e.maxDate, l = e.minDate, d = e.navigationAriaLabel, y = d === void 0 ? "" : d, v = e.navigationAriaLive, x = e.navigationLabel, S = e.next2AriaLabel, R = S === void 0 ? "" : S, L = e.next2Label, j = L === void 0 ? "»" : L, k = e.nextAriaLabel, U = k === void 0 ? "" : k, z = e.nextLabel, $ = z === void 0 ? "›" : z, Z = e.prev2AriaLabel, fe = Z === void 0 ? "" : Z, le = e.prev2Label, ke = le === void 0 ? "«" : le, H = e.prevAriaLabel, Ie = H === void 0 ? "" : H, M = e.prevLabel, Y = M === void 0 ? "‹" : M, B = e.setActiveStartDate, ae = e.showDoubleView, X = e.view, ye = e.views, De = ye.indexOf(X) > 0, me = X !== "century", ie = sl(X, t), Se = me ? il(X, t) : void 0, Ee = gi(X, t), Ue = me ? ol(X, t) : void 0, Je = function() {
    if (ie.getFullYear() < 0)
      return !0;
    var de = cl(X, t);
    return l && l >= de;
  }(), nt = me && function() {
    if (Se.getFullYear() < 0)
      return !0;
    var de = ul(X, t);
    return l && l >= de;
  }(), q = c && c < Ee, te = me && c && c < Ue;
  function Re() {
    B(ie, "prev");
  }
  function Me() {
    B(Se, "prev2");
  }
  function pt() {
    B(Ee, "next");
  }
  function Nt() {
    B(Ue, "next2");
  }
  function At(de) {
    var st = function() {
      switch (X) {
        case "century":
          return dl(o, i, de);
        case "decade":
          return wi(o, i, de);
        case "year":
          return i(o, de);
        case "month":
          return n(o, de);
        default:
          throw new Error("Invalid view: ".concat(X, "."));
      }
    }();
    return x ? x({
      date: de,
      label: st,
      locale: o || ii() || void 0,
      view: X
    }) : st;
  }
  function It() {
    var de = "".concat(He, "__label");
    return b.createElement(
      "button",
      { "aria-label": y, "aria-live": v, className: de, disabled: !De, onClick: r, style: { flexGrow: 1 }, type: "button" },
      b.createElement("span", { className: "".concat(de, "__labelText ").concat(de, "__labelText--from") }, At(t)),
      ae ? b.createElement(
        b.Fragment,
        null,
        b.createElement("span", { className: "".concat(de, "__divider") }, " – "),
        b.createElement("span", { className: "".concat(de, "__labelText ").concat(de, "__labelText--to") }, At(Ee))
      ) : null
    );
  }
  return b.createElement(
    "div",
    { className: He },
    ke !== null && me ? b.createElement("button", { "aria-label": fe, className: "".concat(He, "__arrow ").concat(He, "__prev2-button"), disabled: nt, onClick: Me, type: "button" }, ke) : null,
    Y !== null && b.createElement("button", { "aria-label": Ie, className: "".concat(He, "__arrow ").concat(He, "__prev-button"), disabled: Je, onClick: Re, type: "button" }, Y),
    It(),
    $ !== null && b.createElement("button", { "aria-label": U, className: "".concat(He, "__arrow ").concat(He, "__next-button"), disabled: q, onClick: pt, type: "button" }, $),
    j !== null && me ? b.createElement("button", { "aria-label": R, className: "".concat(He, "__arrow ").concat(He, "__next2-button"), disabled: te, onClick: Nt, type: "button" }, j) : null
  );
}
var Zt = globalThis && globalThis.__assign || function() {
  return Zt = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Zt.apply(this, arguments);
}, vl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function es(e) {
  return "".concat(e, "%");
}
function xn(e) {
  var t = e.children, r = e.className, a = e.count, n = e.direction, s = e.offset, i = e.style, o = e.wrap, c = vl(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return b.createElement("div", Zt({ className: r, style: Zt({ display: "flex", flexDirection: n, flexWrap: o ? "wrap" : "nowrap" }, i) }, c), b.Children.map(t, function(l, d) {
    var y = s && d === 0 ? es(100 * s / a) : null;
    return b.cloneElement(l, Zt(Zt({}, l.props), { style: {
      flexBasis: es(100 / a),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: y,
      marginInlineStart: y,
      marginInlineEnd: 0
    } }));
  }));
}
var ml = function() {
}, yl = ml;
const pl = /* @__PURE__ */ gs(yl);
var Pt;
function gl(e, t, r) {
  return t && t > e ? t : r && r < e ? r : e;
}
function yr(e, t) {
  return t[0] <= e && t[1] >= e;
}
function bl(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function ki(e, t) {
  return yr(e[0], t) || yr(e[1], t);
}
function ts(e, t, r) {
  var a = ki(t, e), n = [];
  if (a) {
    n.push(r);
    var s = yr(e[0], t), i = yr(e[1], t);
    s && n.push("".concat(r, "Start")), i && n.push("".concat(r, "End")), s && i && n.push("".concat(r, "BothEnds"));
  }
  return n;
}
function _l(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function wl(e) {
  if (!e)
    throw new Error("args is required");
  var t = e.value, r = e.date, a = e.hover, n = "react-calendar__tile", s = [n];
  if (!r)
    return s;
  var i = /* @__PURE__ */ new Date(), o = function() {
    if (Array.isArray(r))
      return r;
    var x = e.dateType;
    if (!x)
      throw new Error("dateType is required when date is not an array of two dates");
    return Xn(x, r);
  }();
  if (yr(i, o) && s.push("".concat(n, "--now")), !t || !_l(t))
    return s;
  var c = function() {
    if (Array.isArray(t))
      return t;
    var x = e.valueType;
    if (!x)
      throw new Error("valueType is required when value is not an array of two dates");
    return Xn(x, t);
  }();
  bl(c, o) ? s.push("".concat(n, "--active")) : ki(c, o) && s.push("".concat(n, "--hasActive"));
  var l = ts(c, o, "".concat(n, "--range"));
  s.push.apply(s, l);
  var d = Array.isArray(t) ? t : [t];
  if (a && d.length === 1) {
    var y = a > c[0] ? [c[0], a] : [a, c[0]], v = ts(y, o, "".concat(n, "--hover"));
    s.push.apply(s, v);
  }
  return s;
}
var xl = (Pt = {}, Pt[jt.ARABIC] = ee.ISLAMIC, Pt[jt.HEBREW] = ee.HEBREW, Pt[jt.ISO_8601] = ee.ISO_8601, Pt[jt.US] = ee.GREGORY, Pt);
function kl(e) {
  return e !== void 0 && e in jt;
}
var rs = !1;
function pa(e) {
  if (kl(e)) {
    var t = xl[e];
    return pl(rs, 'Specifying calendarType="'.concat(e, '" is deprecated. Use calendarType="').concat(t, '" instead.')), rs = !0, t;
  }
  return e;
}
function ga(e) {
  for (var t = e.className, r = e.count, a = r === void 0 ? 3 : r, n = e.dateTransform, s = e.dateType, i = e.end, o = e.hover, c = e.offset, l = e.renderTile, d = e.start, y = e.step, v = y === void 0 ? 1 : y, x = e.value, S = e.valueType, R = [], L = d; L <= i; L += v) {
    var j = n(L);
    R.push(l({
      classes: wl({
        date: j,
        dateType: s,
        hover: o,
        value: x,
        valueType: S
      }),
      date: j
    }));
  }
  return b.createElement(xn, { className: t, count: a, offset: c, wrap: !0 }, R);
}
function ba(e) {
  var t = e.activeStartDate, r = e.children, a = e.classes, n = e.date, s = e.formatAbbr, i = e.locale, o = e.maxDate, c = e.maxDateTransform, l = e.minDate, d = e.minDateTransform, y = e.onClick, v = e.onMouseOver, x = e.style, S = e.tileClassName, R = e.tileContent, L = e.tileDisabled, j = e.view, k = E.useMemo(function() {
    var z = { activeStartDate: t, date: n, view: j };
    return typeof S == "function" ? S(z) : S;
  }, [t, n, S, j]), U = E.useMemo(function() {
    var z = { activeStartDate: t, date: n, view: j };
    return typeof R == "function" ? R(z) : R;
  }, [t, n, R, j]);
  return b.createElement(
    "button",
    { className: ca(a, k), disabled: l && d(l) > n || o && c(o) < n || L && L({ activeStartDate: t, date: n, view: j }), onClick: y ? function(z) {
      return y(n, z);
    } : void 0, onFocus: v ? function() {
      return v(n);
    } : void 0, onMouseOver: v ? function() {
      return v(n);
    } : void 0, style: x, type: "button" },
    s ? b.createElement("abbr", { "aria-label": s(i, n) }, r) : r,
    U
  );
}
var Qa = globalThis && globalThis.__assign || function() {
  return Qa = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Qa.apply(this, arguments);
}, Dl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Za = "react-calendar__century-view__decades__decade";
function Ol(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.currentCentury, n = e.formatYear, s = n === void 0 ? ya : n, i = Dl(e, ["classes", "currentCentury", "formatYear"]), o = i.date, c = i.locale, l = [];
  return r && l.push.apply(l, r), Za && l.push(Za), Ht(o).getFullYear() !== a && l.push("".concat(Za, "--neighboringCentury")), b.createElement(ba, Qa({}, i, { classes: l, maxDateTransform: va, minDateTransform: yt, view: "century" }), wi(c, s, o));
}
var Ja = globalThis && globalThis.__assign || function() {
  return Ja = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ja.apply(this, arguments);
}, as = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Tl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringCentury, n = e.value, s = e.valueType, i = as(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), o = rl(t), c = o + (a ? 119 : 99);
  return b.createElement(ga, { className: "react-calendar__century-view__decades", dateTransform: yt, dateType: "decade", end: c, hover: r, renderTile: function(l) {
    var d = l.date, y = as(l, ["date"]);
    return b.createElement(Ol, Ja({ key: d.getTime() }, i, y, { activeStartDate: t, currentCentury: o, date: d }));
  }, start: o, step: 10, value: n, valueType: s });
}
var ns = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, s; a < n; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Sl = Object.values(ee), El = Object.values(jt), Ka = ["century", "decade", "year", "month"], Di = m.oneOf(ns(ns([], Sl, !0), El, !0)), na = m.oneOfType([
  m.string,
  m.arrayOf(m.string)
]), kn = function(t, r, a) {
  var n = t, s = r, i = n[s];
  if (!i)
    return null;
  if (!(i instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var o = t.maxDate;
  return o && i > o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, minDate cannot be larger than maxDate.")) : null;
}, Dn = function(t, r, a) {
  var n = t, s = r, i = n[s];
  if (!i)
    return null;
  if (!(i instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var o = t.minDate;
  return o && i < o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, maxDate cannot be smaller than minDate.")) : null;
}, Cl = m.oneOfType([
  m.func,
  m.exact({
    current: m.any
  })
]), Nl = m.arrayOf(m.oneOfType([m.instanceOf(Date), m.oneOf([null])]).isRequired), Al = m.oneOfType([
  m.instanceOf(Date),
  m.oneOf([null]),
  Nl
]);
m.arrayOf(m.oneOf(Ka));
var sa = function(t, r, a) {
  var n = t, s = r, i = n[s];
  return i !== void 0 && (typeof i != "string" || Ka.indexOf(i) === -1) ? new Error("Invalid prop `".concat(r, "` of value `").concat(i, "` supplied to `").concat(a, "`, expected one of [").concat(Ka.map(function(o) {
    return '"'.concat(o, '"');
  }).join(", "), "].")) : null;
};
sa.isRequired = function(t, r, a, n, s) {
  var i = t, o = r, c = i[o];
  return c ? sa(t, r, a) : new Error("The prop `".concat(r, "` is marked as required in `").concat(a, "`, but its value is `").concat(c, "`."));
};
var Il = function(e) {
  return m.arrayOf(e);
}, _a = {
  activeStartDate: m.instanceOf(Date).isRequired,
  hover: m.instanceOf(Date),
  locale: m.string,
  maxDate: Dn,
  minDate: kn,
  onClick: m.func,
  onMouseOver: m.func,
  tileClassName: m.oneOfType([m.func, na]),
  tileContent: m.oneOfType([m.func, m.node]),
  value: Al,
  valueType: m.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
m.instanceOf(Date).isRequired, m.arrayOf(m.string.isRequired).isRequired, m.instanceOf(Date).isRequired, m.string, m.func, m.func, m.objectOf(m.oneOfType([m.string, m.number])), m.oneOfType([m.func, na]), m.oneOfType([m.func, m.node]), m.func;
var pr = globalThis && globalThis.__assign || function() {
  return pr = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, pr.apply(this, arguments);
}, Oi = function(t) {
  function r() {
    return b.createElement(Tl, pr({}, t));
  }
  return b.createElement("div", { className: "react-calendar__century-view" }, r());
};
Oi.propTypes = pr(pr({}, _a), { showNeighboringCentury: m.bool });
const Rl = Oi;
var Xa = globalThis && globalThis.__assign || function() {
  return Xa = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Xa.apply(this, arguments);
}, Ml = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Fa = "react-calendar__decade-view__years__year";
function Pl(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.currentDecade, n = e.formatYear, s = n === void 0 ? ya : n, i = Ml(e, ["classes", "currentDecade", "formatYear"]), o = i.date, c = i.locale, l = [];
  return r && l.push.apply(l, r), Fa && l.push(Fa), yt(o).getFullYear() !== a && l.push("".concat(Fa, "--neighboringDecade")), b.createElement(ba, Xa({}, i, { classes: l, maxDateTransform: ma, minDateTransform: qt, view: "decade" }), s(c, o));
}
var en = globalThis && globalThis.__assign || function() {
  return en = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, en.apply(this, arguments);
}, ss = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Vl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringDecade, n = e.value, s = e.valueType, i = ss(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), o = al(t), c = o + (a ? 11 : 9);
  return b.createElement(ga, { className: "react-calendar__decade-view__years", dateTransform: qt, dateType: "year", end: c, hover: r, renderTile: function(l) {
    var d = l.date, y = ss(l, ["date"]);
    return b.createElement(Pl, en({ key: d.getTime() }, i, y, { activeStartDate: t, currentDecade: o, date: d }));
  }, start: o, value: n, valueType: s });
}
var gr = globalThis && globalThis.__assign || function() {
  return gr = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, gr.apply(this, arguments);
}, Ti = function(t) {
  function r() {
    return b.createElement(Vl, gr({}, t));
  }
  return b.createElement("div", { className: "react-calendar__decade-view" }, r());
};
Ti.propTypes = gr(gr({}, _a), { showNeighboringDecade: m.bool });
const Ll = Ti;
var tn = globalThis && globalThis.__assign || function() {
  return tn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, tn.apply(this, arguments);
}, jl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, is = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, s; a < n; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Zl = "react-calendar__year-view__months__month";
function Fl(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.formatMonth, n = a === void 0 ? Ju : a, s = e.formatMonthYear, i = s === void 0 ? pi : s, o = jl(e, ["classes", "formatMonth", "formatMonthYear"]), c = o.date, l = o.locale;
  return b.createElement(ba, tn({}, o, { classes: is(is([], r, !0), [Zl], !1), formatAbbr: i, maxDateTransform: Sr, minDateTransform: Et, view: "year" }), n(l, c));
}
var rn = globalThis && globalThis.__assign || function() {
  return rn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, rn.apply(this, arguments);
}, os = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function $l(e) {
  var t = e.activeStartDate, r = e.hover, a = e.value, n = e.valueType, s = os(e, ["activeStartDate", "hover", "value", "valueType"]), i = 0, o = 11, c = re(t);
  return b.createElement(ga, { className: "react-calendar__year-view__months", dateTransform: function(l) {
    var d = /* @__PURE__ */ new Date();
    return d.setFullYear(c, l, 1), Et(d);
  }, dateType: "month", end: o, hover: r, renderTile: function(l) {
    var d = l.date, y = os(l, ["date"]);
    return b.createElement(Fl, rn({ key: d.getTime() }, s, y, { activeStartDate: t, date: d }));
  }, start: i, value: a, valueType: n });
}
var ia = globalThis && globalThis.__assign || function() {
  return ia = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ia.apply(this, arguments);
}, Si = function(t) {
  function r() {
    return b.createElement($l, ia({}, t));
  }
  return b.createElement("div", { className: "react-calendar__year-view" }, r());
};
Si.propTypes = ia({}, _a);
const Wl = Si;
var an = globalThis && globalThis.__assign || function() {
  return an = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, an.apply(this, arguments);
}, Yl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Lr = "react-calendar__month-view__days__day";
function Bl(e) {
  var t = e.calendarType, r = e.classes, a = r === void 0 ? [] : r, n = e.currentMonthIndex, s = e.formatDay, i = s === void 0 ? Gu : s, o = e.formatLongDate, c = o === void 0 ? Qu : o, l = Yl(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), d = pa(t), y = l.date, v = l.locale, x = [];
  return a && x.push.apply(x, a), Lr && x.push(Lr), xi(y, d) && x.push("".concat(Lr, "--weekend")), y.getMonth() !== n && x.push("".concat(Lr, "--neighboringMonth")), b.createElement(ba, an({}, l, { classes: x, formatAbbr: c, maxDateTransform: _n, minDateTransform: Er, view: "month" }), i(v, y));
}
var nn = globalThis && globalThis.__assign || function() {
  return nn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, nn.apply(this, arguments);
}, cs = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Ul(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.hover, n = e.showFixedNumberOfWeeks, s = e.showNeighboringMonth, i = e.value, o = e.valueType, c = cs(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), l = pa(r), d = re(t), y = mt(t), v = n || s, x = mr(t, l), S = v ? 0 : x, R = (v ? -x : 0) + 1, L = function() {
    if (n)
      return R + 6 * 7 - 1;
    var j = yi(t);
    if (s) {
      var k = /* @__PURE__ */ new Date();
      k.setFullYear(d, y, j), k.setHours(0, 0, 0, 0);
      var U = 7 - mr(k, l) - 1;
      return j + U;
    }
    return j;
  }();
  return b.createElement(ga, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(j) {
    var k = /* @__PURE__ */ new Date();
    return k.setFullYear(d, y, j), Er(k);
  }, dateType: "day", hover: a, end: L, renderTile: function(j) {
    var k = j.date, U = cs(j, ["date"]);
    return b.createElement(Bl, nn({ key: k.getTime() }, c, U, { activeStartDate: t, calendarType: r, currentMonthIndex: y, date: k }));
  }, offset: S, start: R, value: i, valueType: o });
}
var Ei = "react-calendar__month-view__weekdays", $a = "".concat(Ei, "__weekday");
function zl(e) {
  for (var t = e.calendarType, r = e.formatShortWeekday, a = r === void 0 ? Ku : r, n = e.formatWeekday, s = n === void 0 ? Xu : n, i = e.locale, o = e.onMouseLeave, c = pa(t), l = /* @__PURE__ */ new Date(), d = Et(l), y = re(d), v = mt(d), x = [], S = 1; S <= 7; S += 1) {
    var R = new Date(y, v, S - mr(d, c)), L = s(i, R);
    x.push(b.createElement(
      "div",
      { key: S, className: ca($a, fl(R) && "".concat($a, "--current"), xi(R, c) && "".concat($a, "--weekend")) },
      b.createElement("abbr", { "aria-label": L, title: L }, a(i, R).replace(".", ""))
    ));
  }
  return b.createElement(xn, { className: Ei, count: 7, onFocus: o, onMouseOver: o }, x);
}
var oa = globalThis && globalThis.__assign || function() {
  return oa = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, oa.apply(this, arguments);
}, us = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, ls = "react-calendar__tile";
function Hl(e) {
  var t = e.onClickWeekNumber, r = e.weekNumber, a = b.createElement("span", null, r);
  if (t) {
    var n = e.date, s = e.onClickWeekNumber, i = e.weekNumber, o = us(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return b.createElement("button", oa({}, o, { className: ls, onClick: function(c) {
      return s(i, n, c);
    }, type: "button" }), a);
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var o = us(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return b.createElement("div", oa({}, o, { className: ls }), a);
  }
}
function ql(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.onClickWeekNumber, n = e.onMouseLeave, s = e.showFixedNumberOfWeeks, i = pa(r), o = function() {
    if (s)
      return 6;
    var d = yi(t), y = mr(t, i), v = d - (7 - y);
    return 1 + Math.ceil(v / 7);
  }(), c = function() {
    for (var d = re(t), y = mt(t), v = ha(t), x = [], S = 0; S < o; S += 1)
      x.push(Ga(new Date(d, y, v + S * 7), i));
    return x;
  }(), l = c.map(function(d) {
    return nl(d, i);
  });
  return b.createElement(xn, { className: "react-calendar__month-view__weekNumbers", count: o, direction: "column", onFocus: n, onMouseOver: n, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, l.map(function(d, y) {
    var v = c[y];
    if (!v)
      throw new Error("date is not defined");
    return b.createElement(Hl, { key: d, date: v, onClickWeekNumber: a, weekNumber: d });
  }));
}
var br = globalThis && globalThis.__assign || function() {
  return br = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, br.apply(this, arguments);
}, Gl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Ql(e) {
  if (e)
    for (var t = 0, r = Object.entries(Zu); t < r.length; t++) {
      var a = r[t], n = a[0], s = a[1];
      if (s.includes(e))
        return n;
    }
  return ee.ISO_8601;
}
var Ci = function(t) {
  var r = t.activeStartDate, a = t.locale, n = t.onMouseLeave, s = t.showFixedNumberOfWeeks, i = t.calendarType, o = i === void 0 ? Ql(a) : i, c = t.formatShortWeekday, l = t.formatWeekday, d = t.onClickWeekNumber, y = t.showWeekNumbers, v = Gl(t, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function x() {
    return b.createElement(zl, { calendarType: o, formatShortWeekday: c, formatWeekday: l, locale: a, onMouseLeave: n });
  }
  function S() {
    return y ? b.createElement(ql, { activeStartDate: r, calendarType: o, onClickWeekNumber: d, onMouseLeave: n, showFixedNumberOfWeeks: s }) : null;
  }
  function R() {
    return b.createElement(Ul, br({ calendarType: o }, v));
  }
  var L = "react-calendar__month-view";
  return b.createElement(
    "div",
    { className: ca(L, y ? "".concat(L, "--weekNumbers") : "") },
    b.createElement(
      "div",
      { style: {
        display: "flex",
        alignItems: "flex-end"
      } },
      S(),
      b.createElement(
        "div",
        { style: {
          flexGrow: 1,
          width: "100%"
        } },
        x(),
        R()
      )
    )
  );
};
Ci.propTypes = br(br({}, _a), { calendarType: Di, formatDay: m.func, formatLongDate: m.func, formatShortWeekday: m.func, formatWeekday: m.func, onClickWeekNumber: m.func, onMouseLeave: m.func, showFixedNumberOfWeeks: m.bool, showNeighboringMonth: m.bool, showWeekNumbers: m.bool });
const Jl = Ci;
var Ft = globalThis && globalThis.__assign || function() {
  return Ft = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ft.apply(this, arguments);
}, jr = "react-calendar", Wt = ["century", "decade", "year", "month"], Kl = ["decade", "year", "month", "day"], On = /* @__PURE__ */ new Date();
On.setFullYear(1, 0, 1);
On.setHours(0, 0, 0, 0);
var Xl = /* @__PURE__ */ new Date(864e13);
function er(e) {
  return e instanceof Date ? e : new Date(e);
}
function Ni(e, t) {
  return Wt.slice(Wt.indexOf(e), Wt.indexOf(t) + 1);
}
function ed(e, t, r) {
  var a = Ni(t, r);
  return a.indexOf(e) !== -1;
}
function Tn(e, t, r) {
  return e && ed(e, t, r) ? e : r;
}
function Ai(e) {
  var t = Wt.indexOf(e);
  return Kl[t];
}
function td(e, t) {
  var r = Array.isArray(e) ? e[t] : e;
  if (!r)
    return null;
  var a = er(r);
  if (isNaN(a.getTime()))
    throw new Error("Invalid date: ".concat(e));
  return a;
}
function Ii(e, t) {
  var r = e.value, a = e.minDate, n = e.maxDate, s = e.maxDetail, i = td(r, t);
  if (!i)
    return null;
  var o = Ai(s), c = function() {
    switch (t) {
      case 0:
        return xt(o, i);
      case 1:
        return bi(o, i);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return gl(c, a, n);
}
var Sn = function(e) {
  return Ii(e, 0);
}, Ri = function(e) {
  return Ii(e, 1);
}, rd = function(e) {
  return [Sn, Ri].map(function(t) {
    return t(e);
  });
};
function Mi(e) {
  var t = e.maxDate, r = e.maxDetail, a = e.minDate, n = e.minDetail, s = e.value, i = e.view, o = Tn(i, n, r), c = Sn({
    value: s,
    minDate: a,
    maxDate: t,
    maxDetail: r
  }) || /* @__PURE__ */ new Date();
  return xt(o, c);
}
function ad(e) {
  var t = e.activeStartDate, r = e.defaultActiveStartDate, a = e.defaultValue, n = e.defaultView, s = e.maxDate, i = e.maxDetail, o = e.minDate, c = e.minDetail, l = e.value, d = e.view, y = Tn(d, c, i), v = t || r;
  return v ? xt(y, v) : Mi({
    maxDate: s,
    maxDetail: i,
    minDate: o,
    minDetail: c,
    value: l || a,
    view: d || n
  });
}
function Wa(e) {
  return e && (!Array.isArray(e) || e.length === 1);
}
function Zr(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var Pi = E.forwardRef(function(t, r) {
  var a = t.activeStartDate, n = t.allowPartialRange, s = t.calendarType, i = t.className, o = t.defaultActiveStartDate, c = t.defaultValue, l = t.defaultView, d = t.formatDay, y = t.formatLongDate, v = t.formatMonth, x = t.formatMonthYear, S = t.formatShortWeekday, R = t.formatWeekday, L = t.formatYear, j = t.goToRangeStartOnSelect, k = j === void 0 ? !0 : j, U = t.inputRef, z = t.locale, $ = t.maxDate, Z = $ === void 0 ? Xl : $, fe = t.maxDetail, le = fe === void 0 ? "month" : fe, ke = t.minDate, H = ke === void 0 ? On : ke, Ie = t.minDetail, M = Ie === void 0 ? "century" : Ie, Y = t.navigationAriaLabel, B = t.navigationAriaLive, ae = t.navigationLabel, X = t.next2AriaLabel, ye = t.next2Label, De = t.nextAriaLabel, me = t.nextLabel, ie = t.onActiveStartDateChange, Se = t.onChange, Ee = t.onClickDay, Ue = t.onClickDecade, Je = t.onClickMonth, nt = t.onClickWeekNumber, q = t.onClickYear, te = t.onDrillDown, Re = t.onDrillUp, Me = t.onViewChange, pt = t.prev2AriaLabel, Nt = t.prev2Label, At = t.prevAriaLabel, It = t.prevLabel, de = t.returnValue, st = de === void 0 ? "start" : de, be = t.selectRange, Gt = t.showDoubleView, wa = t.showFixedNumberOfWeeks, xa = t.showNavigation, u = xa === void 0 ? !0 : xa, f = t.showNeighboringCentury, h = t.showNeighboringDecade, O = t.showNeighboringMonth, _ = O === void 0 ? !0 : O, g = t.showWeekNumbers, N = t.tileClassName, J = t.tileContent, oe = t.tileDisabled, it = t.value, Ke = t.view, Cr = E.useState(o), Qt = Cr[0], ot = Cr[1], Nr = E.useState(null), Ar = Nr[0], Ir = Nr[1], Jt = E.useState(Array.isArray(c) ? c.map(function(W) {
    return W !== null ? er(W) : null;
  }) : c != null ? er(c) : null), ka = Jt[0], Vi = Jt[1], Cn = E.useState(l), Li = Cn[0], Nn = Cn[1], Oe = a || Qt || ad({
    activeStartDate: a,
    defaultActiveStartDate: o,
    defaultValue: c,
    defaultView: l,
    maxDate: Z,
    maxDetail: le,
    minDate: H,
    minDetail: M,
    value: it,
    view: Ke
  }), Te = function() {
    var W = function() {
      return be && Wa(ka) ? ka : it !== void 0 ? it : ka;
    }();
    return W ? Array.isArray(W) ? W.map(function(ce) {
      return ce !== null ? er(ce) : null;
    }) : W !== null ? er(W) : null : null;
  }(), Rr = Ai(le), ne = Tn(Ke || Li, M, le), ze = Ni(M, le), ji = be ? Ar : null, Da = ze.indexOf(ne) < ze.length - 1, An = ze.indexOf(ne) > 0, In = E.useCallback(function(W) {
    var ce = function() {
      switch (st) {
        case "start":
          return Sn;
        case "end":
          return Ri;
        case "range":
          return rd;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return ce({
      maxDate: Z,
      maxDetail: le,
      minDate: H,
      value: W
    });
  }, [Z, le, H, st]), Oa = E.useCallback(function(W, ce) {
    ot(W);
    var he = {
      action: ce,
      activeStartDate: W,
      value: Te,
      view: ne
    };
    ie && !Zr(Oe, W) && ie(he);
  }, [Oe, ie, Te, ne]), Mr = E.useCallback(function(W, ce) {
    var he = function() {
      switch (ne) {
        case "century":
          return Ue;
        case "decade":
          return q;
        case "year":
          return Je;
        case "month":
          return Ee;
        default:
          throw new Error("Invalid view: ".concat(ne, "."));
      }
    }();
    he && he(W, ce);
  }, [Ee, Ue, Je, q, ne]), Ta = E.useCallback(function(W, ce) {
    if (Da) {
      Mr(W, ce);
      var he = ze[ze.indexOf(ne) + 1];
      if (!he)
        throw new Error("Attempted to drill down from the lowest view.");
      ot(W), Nn(he);
      var Pe = {
        action: "drillDown",
        activeStartDate: W,
        value: Te,
        view: he
      };
      ie && !Zr(Oe, W) && ie(Pe), Me && ne !== he && Me(Pe), te && te(Pe);
    }
  }, [
    Oe,
    Da,
    ie,
    Mr,
    te,
    Me,
    Te,
    ne,
    ze
  ]), Sa = E.useCallback(function() {
    if (An) {
      var W = ze[ze.indexOf(ne) - 1];
      if (!W)
        throw new Error("Attempted to drill up from the highest view.");
      var ce = xt(W, Oe);
      ot(ce), Nn(W);
      var he = {
        action: "drillUp",
        activeStartDate: ce,
        value: Te,
        view: W
      };
      ie && !Zr(Oe, ce) && ie(he), Me && ne !== W && Me(he), Re && Re(he);
    }
  }, [
    Oe,
    An,
    ie,
    Re,
    Me,
    Te,
    ne,
    ze
  ]), Ea = E.useCallback(function(W, ce) {
    var he = Te;
    Mr(W, ce);
    var Pe = be && !Wa(he), Ve;
    if (be)
      if (Pe)
        Ve = xt(Rr, W);
      else {
        if (!he)
          throw new Error("previousValue is required");
        if (Array.isArray(he))
          throw new Error("previousValue must not be an array");
        Ve = ll(Rr, he, W);
      }
    else
      Ve = In(W);
    var Na = (
      // Range selection turned off
      !be || // Range selection turned on, first value
      Pe || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      k ? Mi({
        maxDate: Z,
        maxDetail: le,
        minDate: H,
        minDetail: M,
        value: Ve,
        view: ne
      }) : null
    );
    ce.persist(), ot(Na), Vi(Ve);
    var Wi = {
      action: "onChange",
      activeStartDate: Na,
      value: Ve,
      view: ne
    };
    if (ie && !Zr(Oe, Na) && ie(Wi), Se)
      if (be) {
        var Yi = Wa(Ve);
        if (!Yi)
          Se(Ve || null, ce);
        else if (n) {
          if (Array.isArray(Ve))
            throw new Error("value must not be an array");
          Se([Ve || null, null], ce);
        }
      } else
        Se(Ve || null, ce);
  }, [
    Oe,
    n,
    In,
    k,
    Z,
    le,
    H,
    M,
    ie,
    Se,
    Mr,
    be,
    Te,
    Rr,
    ne
  ]);
  function Zi(W) {
    Ir(W);
  }
  function Ca() {
    Ir(null);
  }
  E.useImperativeHandle(r, function() {
    return {
      activeStartDate: Oe,
      drillDown: Ta,
      drillUp: Sa,
      onChange: Ea,
      setActiveStartDate: Oa,
      value: Te,
      view: ne
    };
  }, [Oe, Ta, Sa, Ea, Oa, Te, ne]);
  function Rn(W) {
    var ce = W ? gi(ne, Oe) : xt(ne, Oe), he = Da ? Ta : Ea, Pe = {
      activeStartDate: ce,
      hover: ji,
      locale: z,
      maxDate: Z,
      minDate: H,
      onClick: he,
      onMouseOver: be ? Zi : void 0,
      tileClassName: N,
      tileContent: J,
      tileDisabled: oe,
      value: Te,
      valueType: Rr
    };
    switch (ne) {
      case "century":
        return b.createElement(Rl, Ft({ formatYear: L, showNeighboringCentury: f }, Pe));
      case "decade":
        return b.createElement(Ll, Ft({ formatYear: L, showNeighboringDecade: h }, Pe));
      case "year":
        return b.createElement(Wl, Ft({ formatMonth: v, formatMonthYear: x }, Pe));
      case "month":
        return b.createElement(Jl, Ft({ calendarType: s, formatDay: d, formatLongDate: y, formatShortWeekday: S, formatWeekday: R, onClickWeekNumber: nt, onMouseLeave: be ? Ca : void 0, showFixedNumberOfWeeks: typeof wa < "u" ? wa : Gt, showNeighboringMonth: _, showWeekNumbers: g }, Pe));
      default:
        throw new Error("Invalid view: ".concat(ne, "."));
    }
  }
  function Fi() {
    return u ? b.createElement(hl, { activeStartDate: Oe, drillUp: Sa, formatMonthYear: x, formatYear: L, locale: z, maxDate: Z, minDate: H, navigationAriaLabel: Y, navigationAriaLive: B, navigationLabel: ae, next2AriaLabel: X, next2Label: ye, nextAriaLabel: De, nextLabel: me, prev2AriaLabel: pt, prev2Label: Nt, prevAriaLabel: At, prevLabel: It, setActiveStartDate: Oa, showDoubleView: Gt, view: ne, views: ze }) : null;
  }
  var $i = Array.isArray(Te) ? Te : [Te];
  return b.createElement(
    "div",
    { className: ca(jr, be && $i.length === 1 && "".concat(jr, "--selectRange"), Gt && "".concat(jr, "--doubleView"), i), ref: U },
    Fi(),
    b.createElement(
      "div",
      { className: "".concat(jr, "__viewContainer"), onBlur: be ? Ca : void 0, onMouseLeave: be ? Ca : void 0 },
      Rn(),
      Gt ? Rn(!0) : null
    )
  );
}), ds = m.instanceOf(Date), fs = m.oneOfType([m.string, m.instanceOf(Date)]), hs = m.oneOfType([fs, Il(fs)]);
Pi.propTypes = {
  activeStartDate: ds,
  allowPartialRange: m.bool,
  calendarType: Di,
  className: na,
  defaultActiveStartDate: ds,
  defaultValue: hs,
  defaultView: sa,
  formatDay: m.func,
  formatLongDate: m.func,
  formatMonth: m.func,
  formatMonthYear: m.func,
  formatShortWeekday: m.func,
  formatWeekday: m.func,
  formatYear: m.func,
  goToRangeStartOnSelect: m.bool,
  inputRef: Cl,
  locale: m.string,
  maxDate: Dn,
  maxDetail: m.oneOf(Wt),
  minDate: kn,
  minDetail: m.oneOf(Wt),
  navigationAriaLabel: m.string,
  navigationAriaLive: m.oneOf(["off", "polite", "assertive"]),
  navigationLabel: m.func,
  next2AriaLabel: m.string,
  next2Label: m.node,
  nextAriaLabel: m.string,
  nextLabel: m.node,
  onActiveStartDateChange: m.func,
  onChange: m.func,
  onClickDay: m.func,
  onClickDecade: m.func,
  onClickMonth: m.func,
  onClickWeekNumber: m.func,
  onClickYear: m.func,
  onDrillDown: m.func,
  onDrillUp: m.func,
  onViewChange: m.func,
  prev2AriaLabel: m.string,
  prev2Label: m.node,
  prevAriaLabel: m.string,
  prevLabel: m.node,
  returnValue: m.oneOf(["start", "end", "range"]),
  selectRange: m.bool,
  showDoubleView: m.bool,
  showFixedNumberOfWeeks: m.bool,
  showNavigation: m.bool,
  showNeighboringCentury: m.bool,
  showNeighboringDecade: m.bool,
  showNeighboringMonth: m.bool,
  showWeekNumbers: m.bool,
  tileClassName: m.oneOfType([m.func, na]),
  tileContent: m.oneOfType([m.func, m.node]),
  tileDisabled: m.func,
  value: hs,
  view: sa
};
const nd = Pi;
const sd = ws(nd)`
  &.react-calendar {
    ${{
  borderWidth: "0px"
}}
  }
  .react-calendar__tile--now {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 237 213 / var(--tw-bg-opacity))"
}}

    &:enabled:focus, &:hover {
      ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  color: "rgb(255 255 255 / var(--tw-text-opacity))"
}}
    }
  }
  .react-calendar__tile--active {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}}
    &:enabled:focus {
      ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(114 117 191 / var(--tw-bg-opacity))"
}}
    }
  }
`, id = ({
  error: e,
  label: t,
  open: r,
  className: a,
  onFocus: n,
  onBlur: s,
  onClick: i,
  value: o,
  onChange: c,
  ...l
}, d) => {
  const [y, v] = E.useState(null), [x, S] = E.useState(!1), [R, L] = E.useState(!1);
  E.useEffect(() => {
    r !== void 0 && S(r);
  }, [r]);
  const j = E.useCallback((Z) => {
    L(!0), S(!0), n == null || n(Z);
  }, [n, S]), k = E.useCallback((Z) => {
    L(!1), s == null || s(Z);
  }, [n, S]), U = E.useCallback((Z) => {
    v(Z);
  }, [v]), z = E.useMemo(() => o ? Vr(o, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]).toDate() : null, [o]), $ = E.useMemo(() => z ? Vr(z).format("DD.MM.YYYY") : "", [z]);
  return /* @__PURE__ */ A(oo, { onClickAway: () => S(!1), children: /* @__PURE__ */ Ye(la, { className: a, label: t, error: e, children: [
    /* @__PURE__ */ A(Dr, { ...l, inputWrapRef: U, ref: d, onFocus: j, onBlur: k, value: $, onChange: (Z) => {
      Z.target.value ? c == null || c(Vr(Z.target.value, "DD.MM.YYYY").format("YYYY-MM-DD HH:mm:ss")) : c == null || c(void 0);
    }, onMouseDown: (Z) => {
      R && S(!x), i == null || i(Z);
    }, error: e }),
    y && /* @__PURE__ */ A(_s, { open: x, anchorEl: y, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: y
      }
    }], children: /* @__PURE__ */ A("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ A(sd, { value: z, onChange: (Z) => {
      c == null || c(Vr(Z).format("YYYY-MM-DD HH:mm:ss")), S(!1);
    } }) }) })
  ] }) });
}, Td = E.forwardRef(id), od = ({
  multiple: e,
  value: t,
  url: r,
  params: a,
  idField: n = Qs,
  onInputChange: s,
  open: i,
  ...o
}, c) => {
  const [l, d] = E.useState(""), [y, v] = E.useState(i);
  E.useEffect(() => {
    v(i);
  }, [i]);
  const x = E.useMemo(() => ({
    ...a,
    ...l ? {
      query: l
    } : void 0
  }), [l, a]), S = l.length > 0 || y === !0, R = Pn(r, {
    enabled: S,
    params: x
  }), L = E.useMemo(() => Ae.isEmpty(t) ? !1 : R.data ? e ? !Ae.every(t, ($) => Ae.some(R.data.data, {
    [n]: $
  })) : !Ae.some(R.data.data, {
    [n]: t
  }) : !0, [t, R.data]), j = E.useMemo(() => ({
    ...a,
    id: e ? Ae.uniq(t).join(",") : t
  }), [t, a]), k = Pn(r, {
    params: j,
    enabled: L,
    staleTime: 60 * 1e3
  }), U = E.useMemo(() => {
    var $, Z;
    return Ae.uniqBy([...(($ = k.data) == null ? void 0 : $.data) || [], ...((Z = R.data) == null ? void 0 : Z.data) || []], n);
  }, [k.data, R.data]), z = L && k.isLoading;
  return /* @__PURE__ */ A(Js, { ref: c, multiple: e, value: t, ...o, disabled: z || o.disabled, inputLoading: z, options: U, idField: n, onOpen: () => v(!0), onClose: () => v(!1), isLoading: R.isLoading, onInputChange: ($, Z, fe) => {
    fe === "input" && d(Z), fe === "reset" && d(""), s == null || s($, Z, fe);
  } });
}, cd = E.forwardRef(od), En = (e) => E.forwardRef((t, r) => /* @__PURE__ */ A(cd, { ...e, ...t, ref: r })), ud = ({
  unit: e,
  error: t,
  onChange: r,
  allowFloat: a = !0,
  value: n,
  ...s
}, i) => {
  const [o, c] = E.useState(n), [l, d] = E.useState(null);
  E.useEffect(() => {
    c(n);
  }, [n]);
  const y = sn(i, d);
  return /* @__PURE__ */ A(Dr, { ...s, ref: y, error: t, value: o, onChange: (v) => {
    const x = Number(v.target.value);
    if (!isNaN(x)) {
      if (v.target.value.includes(".") && !a)
        return;
      c(v.target.value), v.target.value.slice(-1) !== "." && (r == null || r(x));
    }
  }, afterItems: [e && /* @__PURE__ */ A("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, t && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => l == null ? void 0 : l.focus(), children: e }, "unit")] });
}, Sd = E.forwardRef(ud), ld = E.forwardRef(({
  placeholder: e = "Введите",
  ...t
}, r) => /* @__PURE__ */ A("textarea", { ref: r, placeholder: e, ...t })), dd = ({
  error: e,
  rows: t = 5,
  ...r
}, a) => /* @__PURE__ */ A(Dr, { ...r, ref: a, rows: t, inputComponent: ld, error: e }), Ed = E.forwardRef(dd), fd = ({
  error: e,
  ...t
}, r) => /* @__PURE__ */ A(Dr, { ...t, ref: r, error: e }), Cd = E.forwardRef(fd), hd = ({
  label: e,
  error: t,
  value: r,
  helperText: a,
  className: n,
  onChange: s,
  ...i
}, o) => /* @__PURE__ */ A(la, { label: e, error: t, helperText: a, className: n, children: /* @__PURE__ */ Ye(co, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...i, onChange: (c) => {
  s == null || s(c.target.value === "true");
}, ref: o, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ A(Vn, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ A(Vn, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), Nd = E.forwardRef(hd);
({
  ...Fn
});
const vd = ws(({
  className: e,
  ...t
}) => /* @__PURE__ */ A(uo, { ...t, classes: {
  popper: e
} }))`
  .${Ln.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Ln.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`, Ad = ({
  children: e,
  className: t,
  tooltip: r,
  icon: a,
  iconAfter: n,
  ...s
}) => {
  let i = /* @__PURE__ */ Ye(lo, { className: t, css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...s, children: [
    a && /* @__PURE__ */ A(dt, { icon: a }),
    e,
    n && /* @__PURE__ */ A(dt, { icon: n })
  ] });
  return r && (i = /* @__PURE__ */ A(vd, { title: r, arrow: !0, children: i })), i;
}, Id = En({
  url: "/api/rest/partners",
  displayField: "name"
});
En({
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "is_deleted",
      value: !1
    }])
  }
});
const Rd = En({
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "parent_id",
      value: 0
    }, {
      property: "is_deleted",
      value: !1
    }])
  }
});
export {
  Nd as B,
  Ad as C,
  Od as D,
  kd as F,
  la as L,
  Sd as N,
  Id as P,
  Rd as R,
  Dr as T,
  Cd as Y,
  xd as a,
  Td as b,
  Ed as c,
  wd as d,
  En as e,
  Us as f,
  Dd as u,
  Fn as z
};
