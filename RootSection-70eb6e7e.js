var Aa = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var Q = (e, t, r) => (Aa(e, t, "read from private field"), r ? r.call(e) : t.get(e)), gt = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, bt = (e, t, r, a) => (Aa(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r);
var Rt = (e, t, r) => (Aa(e, t, "access private method"), r);
import { r as E, R as b, d as Mr, g as vs } from "./react-181b9648.js";
import { b as Yi, s as Bi, g as Ui, n as ms, u as zi, c as Hi, p as qi, a as Ye, j as A, f as ys, F as Rn } from "./library-ea68d1cc.js";
import { s as Gi, c as Ji, l as Le, f as Qi, a as Xi, b as Ki, h as Pr, u as Mn } from "./useDictionary-cd08dfb2.js";
import { A as eo, d as to, e as ro, I as ao, a as ps, f as no, u as so, g as gs, i as io, P as bs, k as oa, n as _s, C as oo, l as Pn, m as co, M as uo, t as Vn, B as lo } from "./mui-d2313b11.js";
import { F as lt, P as m } from "./icons-42066a3f.js";
var ct, we, Ee, et, Yt, Zr, _r, Ya, hs, fo = (hs = class extends Yi {
  constructor(t, r) {
    super();
    gt(this, Yt);
    gt(this, _r);
    gt(this, ct, void 0);
    gt(this, we, void 0);
    gt(this, Ee, void 0);
    gt(this, et, void 0);
    bt(this, we, void 0), bt(this, ct, t), this.setOptions(r), this.bindMethods(), Rt(this, Yt, Zr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var a;
    const r = this.options;
    this.options = Q(this, ct).defaultMutationOptions(t), Bi(r, this.options) || Q(this, ct).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: Q(this, Ee),
      observer: this
    }), (a = Q(this, Ee)) == null || a.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = Q(this, Ee)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    Rt(this, Yt, Zr).call(this), Rt(this, _r, Ya).call(this, t);
  }
  getCurrentResult() {
    return Q(this, we);
  }
  reset() {
    bt(this, Ee, void 0), Rt(this, Yt, Zr).call(this), Rt(this, _r, Ya).call(this);
  }
  mutate(t, r) {
    var a;
    return bt(this, et, r), (a = Q(this, Ee)) == null || a.removeObserver(this), bt(this, Ee, Q(this, ct).getMutationCache().build(Q(this, ct), this.options)), Q(this, Ee).addObserver(this), Q(this, Ee).execute(t);
  }
}, ct = new WeakMap(), we = new WeakMap(), Ee = new WeakMap(), et = new WeakMap(), Yt = new WeakSet(), Zr = function() {
  var r;
  const t = ((r = Q(this, Ee)) == null ? void 0 : r.state) ?? Ui();
  bt(this, we, {
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
    Q(this, et) && this.hasListeners() && ((t == null ? void 0 : t.type) === "success" ? ((a = (r = Q(this, et)).onSuccess) == null || a.call(
      r,
      t.data,
      Q(this, we).variables,
      Q(this, we).context
    ), (s = (n = Q(this, et)).onSettled) == null || s.call(
      n,
      t.data,
      null,
      Q(this, we).variables,
      Q(this, we).context
    )) : (t == null ? void 0 : t.type) === "error" && ((o = (i = Q(this, et)).onError) == null || o.call(
      i,
      t.error,
      Q(this, we).variables,
      Q(this, we).context
    ), (l = (c = Q(this, et)).onSettled) == null || l.call(
      c,
      void 0,
      t.error,
      Q(this, we).variables,
      Q(this, we).context
    ))), this.listeners.forEach((d) => {
      d(Q(this, we));
    });
  });
}, hs);
function ho(e, t) {
  const r = zi(t), [a] = E.useState(
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
function xd(e, t, r) {
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
  }), [a.url]), s = E.useMemo(() => qi(a.url).reduce((v, y) => typeof y != "string" ? [...v, y.name] : v, []), [a.url]), i = Ji(), {
    wrapPayload: o = !0,
    ...c
  } = a;
  return ho({
    ...c,
    mutationFn: async (d) => {
      const v = n(Le.pick(d, ...s)), y = Le.omit(d, ...s), T = Le.isEmpty(y) ? void 0 : o ? {
        data: y
      } : y, {
        data: S
      } = await i.request({
        url: v,
        method: a.method || "POST",
        data: T
      });
      return S;
    }
  });
}
var q;
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
})(q || (q = {}));
var Ba;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ba || (Ba = {}));
const x = q.arrayToEnum([
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
]), ot = (e) => {
  switch (typeof e) {
    case "undefined":
      return x.undefined;
    case "string":
      return x.string;
    case "number":
      return isNaN(e) ? x.nan : x.number;
    case "boolean":
      return x.boolean;
    case "function":
      return x.function;
    case "bigint":
      return x.bigint;
    case "symbol":
      return x.symbol;
    case "object":
      return Array.isArray(e) ? x.array : e === null ? x.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? x.promise : typeof Map < "u" && e instanceof Map ? x.map : typeof Set < "u" && e instanceof Set ? x.set : typeof Date < "u" && e instanceof Date ? x.date : x.object;
    default:
      return x.unknown;
  }
}, p = q.arrayToEnum([
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
    return JSON.stringify(this.issues, q.jsonStringifyReplacer, 2);
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
      e.received === x.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case p.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, q.jsonStringifyReplacer)}`;
      break;
    case p.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${q.joinValues(e.keys, ", ")}`;
      break;
    case p.invalid_union:
      r = "Invalid input";
      break;
    case p.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${q.joinValues(e.options)}`;
      break;
    case p.invalid_enum_value:
      r = `Invalid enum value. Expected ${q.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : q.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
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
      r = t.defaultError, q.assertNever(e);
  }
  return { message: r };
};
let ws = rr;
function yo(e) {
  ws = e;
}
function Yr() {
  return ws;
}
const Br = (e) => {
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
function O(e, t) {
  const r = Br({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Yr(),
      rr
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(r);
}
class be {
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
        return M;
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
    return be.mergeObjectSync(t, a);
  }
  static mergeObjectSync(t, r) {
    const a = {};
    for (const n of r) {
      const { key: s, value: i } = n;
      if (s.status === "aborted" || i.status === "aborted")
        return M;
      s.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (a[s.value] = i.value);
    }
    return { status: t.value, value: a };
  }
}
const M = Object.freeze({
  status: "aborted"
}), xs = (e) => ({ status: "dirty", value: e }), ke = (e) => ({ status: "valid", value: e }), Ua = (e) => e.status === "aborted", za = (e) => e.status === "dirty", ar = (e) => e.status === "valid", Ur = (e) => typeof Promise < "u" && e instanceof Promise;
var C;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(C || (C = {}));
class qe {
  constructor(t, r, a, n) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = a, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ln = (e, t) => {
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
class Z {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ot(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: ot(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new be(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ot(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Ur(r))
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
      parsedType: ot(t)
    }, s = this._parseSync({ data: t, path: n.path, parent: n });
    return Ln(n, s);
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
      parsedType: ot(t)
    }, n = this._parse({ data: t, path: a.path, parent: a }), s = await (Ur(n) ? n : Promise.resolve(n));
    return Ln(a, s);
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
    return new Ds({
      typeName: I.ZodBranded,
      type: this,
      ...V(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Gr({
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
    return Qr.create(this);
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
class Fe extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== x.string) {
      const s = this._getOrReturnCtx(t);
      return O(
        s,
        {
          code: p.invalid_type,
          expected: x.string,
          received: s.parsedType
        }
        //
      ), M;
    }
    const a = new be();
    let n;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (n = this._getOrReturnCtx(t, n), O(n, {
          code: p.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (n = this._getOrReturnCtx(t, n), O(n, {
          code: p.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "length") {
        const i = t.data.length > s.value, o = t.data.length < s.value;
        (i || o) && (n = this._getOrReturnCtx(t, n), i ? O(n, {
          code: p.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && O(n, {
          code: p.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), a.dirty());
      } else if (s.kind === "email")
        xo.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "email",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "emoji")
        Ia || (Ia = new RegExp(ko, "u")), Ia.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "emoji",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "uuid")
        wo.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "uuid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid")
        go.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "cuid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid2")
        bo.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "cuid2",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "ulid")
        _o.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "ulid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          n = this._getOrReturnCtx(t, n), O(n, {
            validation: "url",
            code: p.invalid_string,
            message: s.message
          }), a.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "regex",
          code: p.invalid_string,
          message: s.message
        }), a.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (n = this._getOrReturnCtx(t, n), O(n, {
          code: p.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), a.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (n = this._getOrReturnCtx(t, n), O(n, {
          code: p.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), a.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (n = this._getOrReturnCtx(t, n), O(n, {
          code: p.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), a.dirty()) : s.kind === "datetime" ? To(s).test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          code: p.invalid_string,
          validation: "datetime",
          message: s.message
        }), a.dirty()) : s.kind === "ip" ? So(t.data, s.version) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "ip",
          code: p.invalid_string,
          message: s.message
        }), a.dirty()) : q.assertNever(s);
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
class dt extends Z {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== x.number) {
      const s = this._getOrReturnCtx(t);
      return O(s, {
        code: p.invalid_type,
        expected: x.number,
        received: s.parsedType
      }), M;
    }
    let a;
    const n = new be();
    for (const s of this._def.checks)
      s.kind === "int" ? q.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), n.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? Eo(t.data, s.value) !== 0 && (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.not_finite,
        message: s.message
      }), n.dirty()) : q.assertNever(s);
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
    return new dt({
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
    return new dt({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && q.isInteger(t.value));
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
dt.create = (e) => new dt({
  checks: [],
  typeName: I.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...V(e)
});
class ft extends Z {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== x.bigint) {
      const s = this._getOrReturnCtx(t);
      return O(s, {
        code: p.invalid_type,
        expected: x.bigint,
        received: s.parsedType
      }), M;
    }
    let a;
    const n = new be();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : q.assertNever(s);
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
ft.create = (e) => {
  var t;
  return new ft({
    checks: [],
    typeName: I.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...V(e)
  });
};
class nr extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== x.boolean) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: x.boolean,
        received: a.parsedType
      }), M;
    }
    return ke(t.data);
  }
}
nr.create = (e) => new nr({
  typeName: I.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...V(e)
});
class kt extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== x.date) {
      const s = this._getOrReturnCtx(t);
      return O(s, {
        code: p.invalid_type,
        expected: x.date,
        received: s.parsedType
      }), M;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return O(s, {
        code: p.invalid_date
      }), M;
    }
    const a = new be();
    let n;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (n = this._getOrReturnCtx(t, n), O(n, {
        code: p.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), a.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (n = this._getOrReturnCtx(t, n), O(n, {
        code: p.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), a.dirty()) : q.assertNever(s);
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
class zr extends Z {
  _parse(t) {
    if (this._getType(t) !== x.symbol) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: x.symbol,
        received: a.parsedType
      }), M;
    }
    return ke(t.data);
  }
}
zr.create = (e) => new zr({
  typeName: I.ZodSymbol,
  ...V(e)
});
class sr extends Z {
  _parse(t) {
    if (this._getType(t) !== x.undefined) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: x.undefined,
        received: a.parsedType
      }), M;
    }
    return ke(t.data);
  }
}
sr.create = (e) => new sr({
  typeName: I.ZodUndefined,
  ...V(e)
});
class ir extends Z {
  _parse(t) {
    if (this._getType(t) !== x.null) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: x.null,
        received: a.parsedType
      }), M;
    }
    return ke(t.data);
  }
}
ir.create = (e) => new ir({
  typeName: I.ZodNull,
  ...V(e)
});
class Bt extends Z {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return ke(t.data);
  }
}
Bt.create = (e) => new Bt({
  typeName: I.ZodAny,
  ...V(e)
});
class wt extends Z {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return ke(t.data);
  }
}
wt.create = (e) => new wt({
  typeName: I.ZodUnknown,
  ...V(e)
});
class rt extends Z {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return O(r, {
      code: p.invalid_type,
      expected: x.never,
      received: r.parsedType
    }), M;
  }
}
rt.create = (e) => new rt({
  typeName: I.ZodNever,
  ...V(e)
});
class Hr extends Z {
  _parse(t) {
    if (this._getType(t) !== x.undefined) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: x.void,
        received: a.parsedType
      }), M;
    }
    return ke(t.data);
  }
}
Hr.create = (e) => new Hr({
  typeName: I.ZodVoid,
  ...V(e)
});
class We extends Z {
  _parse(t) {
    const { ctx: r, status: a } = this._processInputParams(t), n = this._def;
    if (r.parsedType !== x.array)
      return O(r, {
        code: p.invalid_type,
        expected: x.array,
        received: r.parsedType
      }), M;
    if (n.exactLength !== null) {
      const i = r.data.length > n.exactLength.value, o = r.data.length < n.exactLength.value;
      (i || o) && (O(r, {
        code: i ? p.too_big : p.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: i ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), a.dirty());
    }
    if (n.minLength !== null && r.data.length < n.minLength.value && (O(r, {
      code: p.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), a.dirty()), n.maxLength !== null && r.data.length > n.maxLength.value && (O(r, {
      code: p.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), a.dirty()), r.common.async)
      return Promise.all([...r.data].map((i, o) => n.type._parseAsync(new qe(r, i, r.path, o)))).then((i) => be.mergeArray(a, i));
    const s = [...r.data].map((i, o) => n.type._parseSync(new qe(r, i, r.path, o)));
    return be.mergeArray(a, s);
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
  if (e instanceof ne) {
    const t = {};
    for (const r in e.shape) {
      const a = e.shape[r];
      t[r] = tt.create(Vt(a));
    }
    return new ne({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof We ? new We({
      ...e._def,
      type: Vt(e.element)
    }) : e instanceof tt ? tt.create(Vt(e.unwrap())) : e instanceof Ot ? Ot.create(Vt(e.unwrap())) : e instanceof Ge ? Ge.create(e.items.map((t) => Vt(t))) : e;
}
class ne extends Z {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = q.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== x.object) {
      const l = this._getOrReturnCtx(t);
      return O(l, {
        code: p.invalid_type,
        expected: x.object,
        received: l.parsedType
      }), M;
    }
    const { status: a, ctx: n } = this._processInputParams(t), { shape: s, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof rt && this._def.unknownKeys === "strip"))
      for (const l in n.data)
        i.includes(l) || o.push(l);
    const c = [];
    for (const l of i) {
      const d = s[l], v = n.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: d._parse(new qe(n, v, n.path, l)),
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
        o.length > 0 && (O(n, {
          code: p.unrecognized_keys,
          keys: o
        }), a.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of o) {
        const v = n.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: l._parse(
            new qe(n, v, n.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const d of c) {
        const v = await d.key;
        l.push({
          key: v,
          value: await d.value,
          alwaysSet: d.alwaysSet
        });
      }
      return l;
    }).then((l) => be.mergeObjectSync(a, l)) : be.mergeObjectSync(a, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return C.errToObj, new ne({
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
    return new ne({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ne({
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
    return new ne({
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
    return new ne({
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
    return new ne({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return q.objectKeys(t).forEach((a) => {
      t[a] && this.shape[a] && (r[a] = this.shape[a]);
    }), new ne({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return q.objectKeys(this.shape).forEach((a) => {
      t[a] || (r[a] = this.shape[a]);
    }), new ne({
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
    return q.objectKeys(this.shape).forEach((a) => {
      const n = this.shape[a];
      t && !t[a] ? r[a] = n : r[a] = n.optional();
    }), new ne({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return q.objectKeys(this.shape).forEach((a) => {
      if (t && !t[a])
        r[a] = this.shape[a];
      else {
        let s = this.shape[a];
        for (; s instanceof tt; )
          s = s._def.innerType;
        r[a] = s;
      }
    }), new ne({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return ks(q.objectKeys(this.shape));
  }
}
ne.create = (e, t) => new ne({
  shape: () => e,
  unknownKeys: "strip",
  catchall: rt.create(),
  typeName: I.ZodObject,
  ...V(t)
});
ne.strictCreate = (e, t) => new ne({
  shape: () => e,
  unknownKeys: "strict",
  catchall: rt.create(),
  typeName: I.ZodObject,
  ...V(t)
});
ne.lazycreate = (e, t) => new ne({
  shape: e,
  unknownKeys: "strip",
  catchall: rt.create(),
  typeName: I.ZodObject,
  ...V(t)
});
class or extends Z {
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
      return O(r, {
        code: p.invalid_union,
        unionErrors: i
      }), M;
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
      return O(r, {
        code: p.invalid_union,
        unionErrors: o
      }), M;
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
const Fr = (e) => e instanceof lr ? Fr(e.schema) : e instanceof Be ? Fr(e.innerType()) : e instanceof dr ? [e.value] : e instanceof ht ? e.options : e instanceof fr ? Object.keys(e.enum) : e instanceof hr ? Fr(e._def.innerType) : e instanceof sr ? [void 0] : e instanceof ir ? [null] : null;
class ca extends Z {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.object)
      return O(r, {
        code: p.invalid_type,
        expected: x.object,
        received: r.parsedType
      }), M;
    const a = this.discriminator, n = r.data[a], s = this.optionsMap.get(n);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (O(r, {
      code: p.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [a]
    }), M);
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
      const i = Fr(s.shape[t]);
      if (!i)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (n.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        n.set(o, s);
      }
    }
    return new ca({
      typeName: I.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: n,
      ...V(a)
    });
  }
}
function Ha(e, t) {
  const r = ot(e), a = ot(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === x.object && a === x.object) {
    const n = q.objectKeys(t), s = q.objectKeys(e).filter((o) => n.indexOf(o) !== -1), i = { ...e, ...t };
    for (const o of s) {
      const c = Ha(e[o], t[o]);
      if (!c.valid)
        return { valid: !1 };
      i[o] = c.data;
    }
    return { valid: !0, data: i };
  } else if (r === x.array && a === x.array) {
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
    return r === x.date && a === x.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class cr extends Z {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t), n = (s, i) => {
      if (Ua(s) || Ua(i))
        return M;
      const o = Ha(s.value, i.value);
      return o.valid ? ((za(s) || za(i)) && r.dirty(), { status: r.value, value: o.data }) : (O(a, {
        code: p.invalid_intersection_types
      }), M);
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
class Ge extends Z {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== x.array)
      return O(a, {
        code: p.invalid_type,
        expected: x.array,
        received: a.parsedType
      }), M;
    if (a.data.length < this._def.items.length)
      return O(a, {
        code: p.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), M;
    !this._def.rest && a.data.length > this._def.items.length && (O(a, {
      code: p.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...a.data].map((i, o) => {
      const c = this._def.items[o] || this._def.rest;
      return c ? c._parse(new qe(a, i, a.path, o)) : null;
    }).filter((i) => !!i);
    return a.common.async ? Promise.all(s).then((i) => be.mergeArray(r, i)) : be.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Ge({
      ...this._def,
      rest: t
    });
  }
}
Ge.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ge({
    items: e,
    typeName: I.ZodTuple,
    rest: null,
    ...V(t)
  });
};
class ur extends Z {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== x.object)
      return O(a, {
        code: p.invalid_type,
        expected: x.object,
        received: a.parsedType
      }), M;
    const n = [], s = this._def.keyType, i = this._def.valueType;
    for (const o in a.data)
      n.push({
        key: s._parse(new qe(a, o, a.path, o)),
        value: i._parse(new qe(a, a.data[o], a.path, o))
      });
    return a.common.async ? be.mergeObjectAsync(r, n) : be.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, a) {
    return r instanceof Z ? new ur({
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
class qr extends Z {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== x.map)
      return O(a, {
        code: p.invalid_type,
        expected: x.map,
        received: a.parsedType
      }), M;
    const n = this._def.keyType, s = this._def.valueType, i = [...a.data.entries()].map(([o, c], l) => ({
      key: n._parse(new qe(a, o, a.path, [l, "key"])),
      value: s._parse(new qe(a, c, a.path, [l, "value"]))
    }));
    if (a.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of i) {
          const l = await c.key, d = await c.value;
          if (l.status === "aborted" || d.status === "aborted")
            return M;
          (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of i) {
        const l = c.key, d = c.value;
        if (l.status === "aborted" || d.status === "aborted")
          return M;
        (l.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(l.value, d.value);
      }
      return { status: r.value, value: o };
    }
  }
}
qr.create = (e, t, r) => new qr({
  valueType: t,
  keyType: e,
  typeName: I.ZodMap,
  ...V(r)
});
class Dt extends Z {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== x.set)
      return O(a, {
        code: p.invalid_type,
        expected: x.set,
        received: a.parsedType
      }), M;
    const n = this._def;
    n.minSize !== null && a.data.size < n.minSize.value && (O(a, {
      code: p.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), r.dirty()), n.maxSize !== null && a.data.size > n.maxSize.value && (O(a, {
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
          return M;
        d.status === "dirty" && r.dirty(), l.add(d.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...a.data.values()].map((c, l) => s._parse(new qe(a, c, a.path, l)));
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
class $t extends Z {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.function)
      return O(r, {
        code: p.invalid_type,
        expected: x.function,
        received: r.parsedType
      }), M;
    function a(o, c) {
      return Br({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Yr(),
          rr
        ].filter((l) => !!l),
        issueData: {
          code: p.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function n(o, c) {
      return Br({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Yr(),
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
      return ke(async function(...c) {
        const l = new $e([]), d = await o._def.args.parseAsync(c, s).catch((T) => {
          throw l.addIssue(a(c, T)), l;
        }), v = await Reflect.apply(i, this, d);
        return await o._def.returns._def.type.parseAsync(v, s).catch((T) => {
          throw l.addIssue(n(v, T)), l;
        });
      });
    } else {
      const o = this;
      return ke(function(...c) {
        const l = o._def.args.safeParse(c, s);
        if (!l.success)
          throw new $e([a(c, l.error)]);
        const d = Reflect.apply(i, this, l.data), v = o._def.returns.safeParse(d, s);
        if (!v.success)
          throw new $e([n(d, v.error)]);
        return v.data;
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
      args: Ge.create(t).rest(wt.create())
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
      args: t || Ge.create([]).rest(wt.create()),
      returns: r || wt.create(),
      typeName: I.ZodFunction,
      ...V(a)
    });
  }
}
class lr extends Z {
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
class dr extends Z {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return O(r, {
        received: r.data,
        code: p.invalid_literal,
        expected: this._def.value
      }), M;
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
function ks(e, t) {
  return new ht({
    values: e,
    typeName: I.ZodEnum,
    ...V(t)
  });
}
class ht extends Z {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), a = this._def.values;
      return O(r, {
        expected: q.joinValues(a),
        received: r.parsedType,
        code: p.invalid_type
      }), M;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), a = this._def.values;
      return O(r, {
        received: r.data,
        code: p.invalid_enum_value,
        options: a
      }), M;
    }
    return ke(t.data);
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
    return ht.create(t);
  }
  exclude(t) {
    return ht.create(this.options.filter((r) => !t.includes(r)));
  }
}
ht.create = ks;
class fr extends Z {
  _parse(t) {
    const r = q.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(t);
    if (a.parsedType !== x.string && a.parsedType !== x.number) {
      const n = q.objectValues(r);
      return O(a, {
        expected: q.joinValues(n),
        received: a.parsedType,
        code: p.invalid_type
      }), M;
    }
    if (r.indexOf(t.data) === -1) {
      const n = q.objectValues(r);
      return O(a, {
        received: a.data,
        code: p.invalid_enum_value,
        options: n
      }), M;
    }
    return ke(t.data);
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
class Ut extends Z {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== x.promise && r.common.async === !1)
      return O(r, {
        code: p.invalid_type,
        expected: x.promise,
        received: r.parsedType
      }), M;
    const a = r.parsedType === x.promise ? r.data : Promise.resolve(r.data);
    return ke(a.then((n) => this._def.type.parseAsync(n, {
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
class Be extends Z {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === I.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t), n = this._def.effect || null, s = {
      addIssue: (i) => {
        O(a, i), i.fatal ? r.abort() : r.dirty();
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
        return o.status === "aborted" ? M : (o.status === "dirty" && r.dirty(), i(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((o) => o.status === "aborted" ? M : (o.status === "dirty" && r.dirty(), i(o.value).then(() => ({ status: r.value, value: o.value }))));
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
    q.assertNever(n);
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
class tt extends Z {
  _parse(t) {
    return this._getType(t) === x.undefined ? ke(void 0) : this._def.innerType._parse(t);
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
class Ot extends Z {
  _parse(t) {
    return this._getType(t) === x.null ? ke(null) : this._def.innerType._parse(t);
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
class hr extends Z {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let a = r.data;
    return r.parsedType === x.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
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
class Gr extends Z {
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
    return Ur(n) ? n.then((s) => ({
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
Gr.create = (e, t) => new Gr({
  innerType: e,
  typeName: I.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...V(t)
});
class Jr extends Z {
  _parse(t) {
    if (this._getType(t) !== x.nan) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: x.nan,
        received: a.parsedType
      }), M;
    }
    return { status: "valid", value: t.data };
  }
}
Jr.create = (e) => new Jr({
  typeName: I.ZodNaN,
  ...V(e)
});
const Co = Symbol("zod_brand");
class Ds extends Z {
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
class wr extends Z {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? M : s.status === "dirty" ? (r.dirty(), xs(s.value)) : this._def.out._parseAsync({
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
      return n.status === "aborted" ? M : n.status === "dirty" ? (r.dirty(), {
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
class Qr extends Z {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return ar(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Qr.create = (e, t) => new Qr({
  innerType: e,
  typeName: I.ZodReadonly,
  ...V(t)
});
const Os = (e, t = {}, r) => e ? Bt.create().superRefine((a, n) => {
  var s, i;
  if (!e(a)) {
    const o = typeof t == "function" ? t(a) : typeof t == "string" ? { message: t } : t, c = (i = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && i !== void 0 ? i : !0, l = typeof o == "string" ? { message: o } : o;
    n.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Bt.create(), No = {
  object: ne.lazycreate
};
var I;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(I || (I = {}));
const Ao = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Os((r) => r instanceof e, t), Ts = Fe.create, Ss = dt.create, Io = Jr.create, Ro = ft.create, Es = nr.create, Mo = kt.create, Po = zr.create, Vo = sr.create, Lo = ir.create, jo = Bt.create, Zo = wt.create, Fo = rt.create, $o = Hr.create, Wo = We.create, Yo = ne.create, Bo = ne.strictCreate, Uo = or.create, zo = ca.create, Ho = cr.create, qo = Ge.create, Go = ur.create, Jo = qr.create, Qo = Dt.create, Xo = $t.create, Ko = lr.create, ec = dr.create, tc = ht.create, rc = fr.create, ac = Ut.create, jn = Be.create, nc = tt.create, sc = Ot.create, ic = Be.createWithPreprocess, oc = wr.create, cc = () => Ts().optional(), uc = () => Ss().optional(), lc = () => Es().optional(), dc = {
  string: (e) => Fe.create({ ...e, coerce: !0 }),
  number: (e) => dt.create({ ...e, coerce: !0 }),
  boolean: (e) => nr.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => ft.create({ ...e, coerce: !0 }),
  date: (e) => kt.create({ ...e, coerce: !0 })
}, fc = M;
var Zn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: rr,
  setErrorMap: yo,
  getErrorMap: Yr,
  makeIssue: Br,
  EMPTY_PATH: po,
  addIssueToContext: O,
  ParseStatus: be,
  INVALID: M,
  DIRTY: xs,
  OK: ke,
  isAborted: Ua,
  isDirty: za,
  isValid: ar,
  isAsync: Ur,
  get util() {
    return q;
  },
  get objectUtil() {
    return Ba;
  },
  ZodParsedType: x,
  getParsedType: ot,
  ZodType: Z,
  ZodString: Fe,
  ZodNumber: dt,
  ZodBigInt: ft,
  ZodBoolean: nr,
  ZodDate: kt,
  ZodSymbol: zr,
  ZodUndefined: sr,
  ZodNull: ir,
  ZodAny: Bt,
  ZodUnknown: wt,
  ZodNever: rt,
  ZodVoid: Hr,
  ZodArray: We,
  ZodObject: ne,
  ZodUnion: or,
  ZodDiscriminatedUnion: ca,
  ZodIntersection: cr,
  ZodTuple: Ge,
  ZodRecord: ur,
  ZodMap: qr,
  ZodSet: Dt,
  ZodFunction: $t,
  ZodLazy: lr,
  ZodLiteral: dr,
  ZodEnum: ht,
  ZodNativeEnum: fr,
  ZodPromise: Ut,
  ZodEffects: Be,
  ZodTransformer: Be,
  ZodOptional: tt,
  ZodNullable: Ot,
  ZodDefault: hr,
  ZodCatch: Gr,
  ZodNaN: Jr,
  BRAND: Co,
  ZodBranded: Ds,
  ZodPipeline: wr,
  ZodReadonly: Qr,
  custom: Os,
  Schema: Z,
  ZodSchema: Z,
  late: No,
  get ZodFirstPartyTypeKind() {
    return I;
  },
  coerce: dc,
  any: jo,
  array: Wo,
  bigint: Ro,
  boolean: Es,
  date: Mo,
  discriminatedUnion: zo,
  effect: jn,
  enum: tc,
  function: Xo,
  instanceof: Ao,
  intersection: Ho,
  lazy: Ko,
  literal: ec,
  map: Jo,
  nan: Io,
  nativeEnum: rc,
  never: Fo,
  null: Lo,
  nullable: sc,
  number: Ss,
  object: Yo,
  oboolean: lc,
  onumber: uc,
  optional: nc,
  ostring: cc,
  pipeline: oc,
  preprocess: ic,
  promise: ac,
  record: Go,
  set: Qo,
  strictObject: Bo,
  string: Ts,
  symbol: Po,
  transformer: jn,
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
const kd = ({
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
var xr = (e) => e.type === "checkbox", Lt = (e) => e instanceof Date, xe = (e) => e == null;
const Cs = (e) => typeof e == "object";
var ye = (e) => !xe(e) && !Array.isArray(e) && Cs(e) && !Lt(e), Ns = (e) => ye(e) && e.target ? xr(e.target) ? e.target.checked : e.target.value : e, hc = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, As = (e, t) => e.has(hc(t)), vc = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ye(t) && t.hasOwnProperty("isPrototypeOf");
}, sn = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ve(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(sn && (e instanceof Blob || e instanceof FileList)) && (r || ye(e)))
    if (t = r ? [] : {}, !r && !vc(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = Ve(e[a]));
  else
    return e;
  return t;
}
var kr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], de = (e) => e === void 0, w = (e, t, r) => {
  if (!t || !ye(e))
    return r;
  const a = kr(t.split(/[,[\].]+?/)).reduce((n, s) => xe(n) ? n : n[s], e);
  return de(a) || a === e ? de(e[t]) ? r : e[t] : a;
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
}, Ke = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, mc = b.createContext(null), on = () => b.useContext(mc);
var Is = (e, t, r, a = !0) => {
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
}, Ce = (e) => ye(e) && !Object.keys(e).length, Rs = (e, t, r, a) => {
  r(e);
  const { name: n, ...s } = e;
  return Ce(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((i) => t[i] === (!a || Ze.all));
}, $r = (e) => Array.isArray(e) ? e : [e], Ms = (e, t, r) => !e || !t || e === t || $r(e).some((a) => a && (r ? a === t : a.startsWith(t) || t.startsWith(a)));
function cn(e) {
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
  const t = on(), { control: r = t.control, disabled: a, name: n, exact: s } = e || {}, [i, o] = b.useState(r._formState), c = b.useRef(!0), l = b.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = b.useRef(n);
  return d.current = n, cn({
    disabled: a,
    next: (v) => c.current && Ms(d.current, v.name, s) && Rs(v, l.current, r._updateFormState) && o({
      ...r._formState,
      ...v
    }),
    subject: r._subjects.state
  }), b.useEffect(() => (c.current = !0, l.current.isValid && r._updateValid(!0), () => {
    c.current = !1;
  }), [r]), Is(i, r, l.current, !1);
}
var He = (e) => typeof e == "string", Ps = (e, t, r, a, n) => He(e) ? (a && t.watch.add(e), w(r, e, n)) : Array.isArray(e) ? e.map((s) => (a && t.watch.add(s), w(r, s))) : (a && (t.watchAll = !0), r);
function pc(e) {
  const t = on(), { control: r = t.control, name: a, defaultValue: n, disabled: s, exact: i } = e || {}, o = b.useRef(a);
  o.current = a, cn({
    disabled: s,
    subject: r._subjects.values,
    next: (d) => {
      Ms(o.current, d.name, i) && l(Ve(Ps(o.current, r._names, d.values || r._formValues, !1, n)));
    }
  });
  const [c, l] = b.useState(r._getWatch(a, n));
  return b.useEffect(() => r._removeUnmounted()), c;
}
var un = (e) => /^\w*$/.test(e), Vs = (e) => kr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), G = (e, t, r) => {
  let a = -1;
  const n = un(t) ? [t] : Vs(t), s = n.length, i = s - 1;
  for (; ++a < s; ) {
    const o = n[a];
    let c = r;
    if (a !== i) {
      const l = e[o];
      c = ye(l) || Array.isArray(l) ? l : isNaN(+n[a + 1]) ? {} : [];
    }
    e[o] = c, e = e[o];
  }
  return e;
};
function gc(e) {
  const t = on(), { name: r, disabled: a, control: n = t.control, shouldUnregister: s } = e, i = As(n._names.array, r), o = pc({
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
    const d = n._options.shouldUnregister || s, v = (y, T) => {
      const S = w(n._fields, y);
      S && (S._f.mount = T);
    };
    if (v(r, !0), d) {
      const y = Ve(w(n._options.defaultValues, r));
      G(n._defaultValues, r, y), de(w(n._formValues, r)) && G(n._formValues, r, y);
    }
    return () => {
      (i ? d && !n._state.action : d) ? n.unregister(r) : v(r, !1);
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
          value: Ns(d),
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
        const v = w(n._fields, r);
        v && d && (v._f.ref = {
          focus: () => d.focus(),
          select: () => d.select(),
          setCustomValidity: (y) => d.setCustomValidity(y),
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
var Ls = (e, t, r, a, n) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [a]: n || !0
  }
} : {}, Fn = (e) => ({
  isOnSubmit: !e || e === Ze.onSubmit,
  isOnBlur: e === Ze.onBlur,
  isOnChange: e === Ze.onChange,
  isOnAll: e === Ze.all,
  isOnTouch: e === Ze.onTouched
}), $n = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))));
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
        ye(o) && tr(o, t);
    }
  }
};
var _c = (e, t, r) => {
  const a = kr(w(e, r));
  return G(a, "root", t[r]), G(e, r, a), e;
}, ln = (e) => e.type === "file", ut = (e) => typeof e == "function", Kr = (e) => {
  if (!sn)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Wr = (e) => He(e), dn = (e) => e.type === "radio", ea = (e) => e instanceof RegExp;
const Wn = {
  value: !1,
  isValid: !1
}, Yn = { value: !0, isValid: !0 };
var js = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !de(e[0].attributes.value) ? de(e[0].value) || e[0].value === "" ? Yn : { value: e[0].value, isValid: !0 } : Yn
    ) : Wn;
  }
  return Wn;
};
const Bn = {
  isValid: !1,
  value: null
};
var Zs = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Bn) : Bn;
function Un(e, t, r = "validate") {
  if (Wr(e) || Array.isArray(e) && e.every(Wr) || je(e) && !e)
    return {
      type: r,
      message: Wr(e) ? e : "",
      ref: t
    };
}
var Mt = (e) => ye(e) && !ea(e) ? e : {
  value: e,
  message: ""
}, zn = async (e, t, r, a, n) => {
  const { ref: s, refs: i, required: o, maxLength: c, minLength: l, min: d, max: v, pattern: y, validate: T, name: S, valueAsNumber: L, mount: $, disabled: P } = e._f, k = w(t, S);
  if (!$ || P)
    return {};
  const U = i ? i[0] : s, z = (R) => {
    a && U.reportValidity && (U.setCustomValidity(je(R) ? "" : R || ""), U.reportValidity());
  }, F = {}, j = dn(s), se = xr(s), me = j || se, re = (L || ln(s)) && de(s.value) && de(k) || Kr(s) && s.value === "" || k === "" || Array.isArray(k) && !k.length, ee = Ls.bind(null, S, r, F), Ne = (R, Y, B, ie = Ke.maxLength, X = Ke.minLength) => {
    const he = R ? Y : B;
    F[S] = {
      type: R ? ie : X,
      message: he,
      ref: s,
      ...ee(R ? ie : X, he)
    };
  };
  if (n ? !Array.isArray(k) || !k.length : o && (!me && (re || xe(k)) || je(k) && !k || se && !js(i).isValid || j && !Zs(i).isValid)) {
    const { value: R, message: Y } = Wr(o) ? { value: !!o, message: o } : Mt(o);
    if (R && (F[S] = {
      type: Ke.required,
      message: Y,
      ref: U,
      ...ee(Ke.required, Y)
    }, !r))
      return z(Y), F;
  }
  if (!re && (!xe(d) || !xe(v))) {
    let R, Y;
    const B = Mt(v), ie = Mt(d);
    if (!xe(k) && !isNaN(k)) {
      const X = s.valueAsNumber || k && +k;
      xe(B.value) || (R = X > B.value), xe(ie.value) || (Y = X < ie.value);
    } else {
      const X = s.valueAsDate || new Date(k), he = (oe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + oe), Ae = s.type == "time", pe = s.type == "week";
      He(B.value) && k && (R = Ae ? he(k) > he(B.value) : pe ? k > B.value : X > new Date(B.value)), He(ie.value) && k && (Y = Ae ? he(k) < he(ie.value) : pe ? k < ie.value : X < new Date(ie.value));
    }
    if ((R || Y) && (Ne(!!R, B.message, ie.message, Ke.max, Ke.min), !r))
      return z(F[S].message), F;
  }
  if ((c || l) && !re && (He(k) || n && Array.isArray(k))) {
    const R = Mt(c), Y = Mt(l), B = !xe(R.value) && k.length > +R.value, ie = !xe(Y.value) && k.length < +Y.value;
    if ((B || ie) && (Ne(B, R.message, Y.message), !r))
      return z(F[S].message), F;
  }
  if (y && !re && He(k)) {
    const { value: R, message: Y } = Mt(y);
    if (ea(R) && !k.match(R) && (F[S] = {
      type: Ke.pattern,
      message: Y,
      ref: s,
      ...ee(Ke.pattern, Y)
    }, !r))
      return z(Y), F;
  }
  if (T) {
    if (ut(T)) {
      const R = await T(k, t), Y = Un(R, U);
      if (Y && (F[S] = {
        ...Y,
        ...ee(Ke.validate, Y.message)
      }, !r))
        return z(Y.message), F;
    } else if (ye(T)) {
      let R = {};
      for (const Y in T) {
        if (!Ce(R) && !r)
          break;
        const B = Un(await T[Y](k, t), U, Y);
        B && (R = {
          ...B,
          ...ee(Y, B.message)
        }, z(B.message), r && (F[S] = R));
      }
      if (!Ce(R) && (F[S] = {
        ref: U,
        ...R
      }, !r))
        return F;
    }
  }
  return z(!0), F;
};
function wc(e, t) {
  const r = t.slice(0, -1).length;
  let a = 0;
  for (; a < r; )
    e = de(e) ? a++ : e[t[a++]];
  return e;
}
function xc(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !de(e[t]))
      return !1;
  return !0;
}
function ge(e, t) {
  const r = Array.isArray(t) ? t : un(t) ? [t] : Vs(t), a = r.length === 1 ? e : wc(e, r), n = r.length - 1, s = r[n];
  return a && delete a[s], n !== 0 && (ye(a) && Ce(a) || Array.isArray(a) && xc(a)) && ge(e, r.slice(0, -1)), e;
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
}, ta = (e) => xe(e) || !Cs(e);
function _t(e, t) {
  if (ta(e) || ta(t))
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
      if (Lt(s) && Lt(i) || ye(s) && ye(i) || Array.isArray(s) && Array.isArray(i) ? !_t(s, i) : s !== i)
        return !1;
    }
  }
  return !0;
}
var Fs = (e) => e.type === "select-multiple", kc = (e) => dn(e) || xr(e), Ma = (e) => Kr(e) && e.isConnected, $s = (e) => {
  for (const t in e)
    if (ut(e[t]))
      return !0;
  return !1;
};
function ra(e, t = {}) {
  const r = Array.isArray(e);
  if (ye(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || ye(e[a]) && !$s(e[a]) ? (t[a] = Array.isArray(e[a]) ? [] : {}, ra(e[a], t[a])) : xe(e[a]) || (t[a] = !0);
  return t;
}
function Ws(e, t, r) {
  const a = Array.isArray(e);
  if (ye(e) || a)
    for (const n in e)
      Array.isArray(e[n]) || ye(e[n]) && !$s(e[n]) ? de(t) || ta(r[n]) ? r[n] = Array.isArray(e[n]) ? ra(e[n], []) : { ...ra(e[n]) } : Ws(e[n], xe(t) ? {} : t[n], r[n]) : r[n] = !_t(e[n], t[n]);
  return r;
}
var Pa = (e, t) => Ws(e, t, ra(t)), Ys = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: a }) => de(e) ? e : t ? e === "" ? NaN : e && +e : r && He(e) ? new Date(e) : a ? a(e) : e;
function Va(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return ln(t) ? t.files : dn(t) ? Zs(e.refs).value : Fs(t) ? [...t.selectedOptions].map(({ value: r }) => r) : xr(t) ? js(e.refs).value : Ys(de(t.value) ? e.ref.value : t.value, e);
}
var Dc = (e, t, r, a) => {
  const n = {};
  for (const s of e) {
    const i = w(t, s);
    i && G(n, s, i._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: n,
    shouldUseNativeValidation: a
  };
}, Xt = (e) => de(e) ? e : ea(e) ? e.source : ye(e) ? ea(e.value) ? e.value.source : e.value : e, Oc = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Hn(e, t, r) {
  const a = w(e, r);
  if (a || un(r))
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
var Tc = (e, t, r, a, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(t || e) : (r ? a.isOnBlur : n.isOnBlur) ? !e : (r ? a.isOnChange : n.isOnChange) ? e : !0, Sc = (e, t) => !kr(w(e, t)).length && ge(e, t);
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
    isLoading: ut(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, n = {}, s = ye(r.defaultValues) || ye(r.values) ? Ve(r.defaultValues || r.values) || {} : {}, i = r.shouldUnregister ? {} : Ve(s), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, d = 0;
  const v = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, y = {
    values: Ra(),
    array: Ra(),
    state: Ra()
  }, T = e.resetOptions && e.resetOptions.keepDirtyValues, S = Fn(r.mode), L = Fn(r.reValidateMode), $ = r.criteriaMode === Ze.all, P = (u) => (f) => {
    clearTimeout(d), d = setTimeout(u, f);
  }, k = async (u) => {
    if (v.isValid || u) {
      const f = r.resolver ? Ce((await ee()).errors) : await R(n, !0);
      f !== a.isValid && y.state.next({
        isValid: f
      });
    }
  }, U = (u) => v.isValidating && y.state.next({
    isValidating: u
  }), z = (u, f = [], h, D, _ = !0, g = !0) => {
    if (D && h) {
      if (o.action = !0, g && Array.isArray(w(n, u))) {
        const N = h(w(n, u), D.argA, D.argB);
        _ && G(n, u, N);
      }
      if (g && Array.isArray(w(a.errors, u))) {
        const N = h(w(a.errors, u), D.argA, D.argB);
        _ && G(a.errors, u, N), Sc(a.errors, u);
      }
      if (v.touchedFields && g && Array.isArray(w(a.touchedFields, u))) {
        const N = h(w(a.touchedFields, u), D.argA, D.argB);
        _ && G(a.touchedFields, u, N);
      }
      v.dirtyFields && (a.dirtyFields = Pa(s, i)), y.state.next({
        name: u,
        isDirty: B(u, f),
        dirtyFields: a.dirtyFields,
        errors: a.errors,
        isValid: a.isValid
      });
    } else
      G(i, u, f);
  }, F = (u, f) => {
    G(a.errors, u, f), y.state.next({
      errors: a.errors
    });
  }, j = (u) => {
    a.errors = u, y.state.next({
      errors: a.errors,
      isValid: !1
    });
  }, se = (u, f, h, D) => {
    const _ = w(n, u);
    if (_) {
      const g = w(i, u, de(h) ? w(s, u) : h);
      de(g) || D && D.defaultChecked || f ? G(i, u, f ? g : Va(_._f)) : he(u, g), o.mount && k();
    }
  }, me = (u, f, h, D, _) => {
    let g = !1, N = !1;
    const J = {
      name: u
    };
    if (!h || D) {
      v.isDirty && (N = a.isDirty, a.isDirty = J.isDirty = B(), g = N !== J.isDirty);
      const ue = _t(w(s, u), f);
      N = w(a.dirtyFields, u), ue ? ge(a.dirtyFields, u) : G(a.dirtyFields, u, !0), J.dirtyFields = a.dirtyFields, g = g || v.dirtyFields && N !== !ue;
    }
    if (h) {
      const ue = w(a.touchedFields, u);
      ue || (G(a.touchedFields, u, h), J.touchedFields = a.touchedFields, g = g || v.touchedFields && ue !== h);
    }
    return g && _ && y.state.next(J), g ? J : {};
  }, re = (u, f, h, D) => {
    const _ = w(a.errors, u), g = v.isValid && je(f) && a.isValid !== f;
    if (e.delayError && h ? (l = P(() => F(u, h)), l(e.delayError)) : (clearTimeout(d), l = null, h ? G(a.errors, u, h) : ge(a.errors, u)), (h ? !_t(_, h) : _) || !Ce(D) || g) {
      const N = {
        ...D,
        ...g && je(f) ? { isValid: f } : {},
        errors: a.errors,
        name: u
      };
      a = {
        ...a,
        ...N
      }, y.state.next(N);
    }
    U(!1);
  }, ee = async (u) => r.resolver(i, r.context, Dc(u || c.mount, n, r.criteriaMode, r.shouldUseNativeValidation)), Ne = async (u) => {
    const { errors: f } = await ee(u);
    if (u)
      for (const h of u) {
        const D = w(f, h);
        D ? G(a.errors, h, D) : ge(a.errors, h);
      }
    else
      a.errors = f;
    return f;
  }, R = async (u, f, h = {
    valid: !0
  }) => {
    for (const D in u) {
      const _ = u[D];
      if (_) {
        const { _f: g, ...N } = _;
        if (g) {
          const J = c.array.has(g.name), ue = await zn(_, i, $, r.shouldUseNativeValidation && !f, J);
          if (ue[g.name] && (h.valid = !1, f))
            break;
          !f && (w(ue, g.name) ? J ? _c(a.errors, ue, g.name) : G(a.errors, g.name, ue[g.name]) : ge(a.errors, g.name));
        }
        N && await R(N, f, h);
      }
    }
    return h.valid;
  }, Y = () => {
    for (const u of c.unMount) {
      const f = w(n, u);
      f && (f._f.refs ? f._f.refs.every((h) => !Ma(h)) : !Ma(f._f.ref)) && Qe(u);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, B = (u, f) => (u && f && G(i, u, f), !_t(Ie(), s)), ie = (u, f, h) => Ps(u, c, {
    ...o.mount ? i : de(f) ? s : He(u) ? { [u]: f } : f
  }, h, f), X = (u) => kr(w(o.mount ? i : s, u, e.shouldUnregister ? w(s, u, []) : [])), he = (u, f, h = {}) => {
    const D = w(n, u);
    let _ = f;
    if (D) {
      const g = D._f;
      g && (!g.disabled && G(i, u, Ys(f, g)), _ = Kr(g.ref) && xe(f) ? "" : f, Fs(g.ref) ? [...g.ref.options].forEach((N) => N.selected = _.includes(N.value)) : g.refs ? xr(g.ref) ? g.refs.length > 1 ? g.refs.forEach((N) => (!N.defaultChecked || !N.disabled) && (N.checked = Array.isArray(_) ? !!_.find((J) => J === N.value) : _ === N.value)) : g.refs[0] && (g.refs[0].checked = !!_) : g.refs.forEach((N) => N.checked = N.value === _) : ln(g.ref) ? g.ref.value = "" : (g.ref.value = _, g.ref.type || y.values.next({
        name: u,
        values: { ...i }
      })));
    }
    (h.shouldDirty || h.shouldTouch) && me(u, _, h.shouldTouch, h.shouldDirty, !0), h.shouldValidate && Se(u);
  }, Ae = (u, f, h) => {
    for (const D in f) {
      const _ = f[D], g = `${u}.${D}`, N = w(n, g);
      (c.array.has(u) || !ta(_) || N && !N._f) && !Lt(_) ? Ae(g, _, h) : he(g, _, h);
    }
  }, pe = (u, f, h = {}) => {
    const D = w(n, u), _ = c.array.has(u), g = Ve(f);
    G(i, u, g), _ ? (y.array.next({
      name: u,
      values: { ...i }
    }), (v.isDirty || v.dirtyFields) && h.shouldDirty && y.state.next({
      name: u,
      dirtyFields: Pa(s, i),
      isDirty: B(u, g)
    })) : D && !D._f && !xe(g) ? Ae(u, g, h) : he(u, g, h), $n(u, c) && y.state.next({ ...a }), y.values.next({
      name: u,
      values: { ...i }
    }), !o.mount && t();
  }, oe = async (u) => {
    const f = u.target;
    let h = f.name, D = !0;
    const _ = w(n, h), g = () => f.type ? Va(_._f) : Ns(u), N = (J) => {
      D = Number.isNaN(J) || J === w(i, h, J);
    };
    if (_) {
      let J, ue;
      const st = g(), Xe = u.type === Xr.BLUR || u.type === Xr.FOCUS_OUT, Er = !Oc(_._f) && !r.resolver && !w(a.errors, h) && !_._f.deps || Tc(Xe, w(a.touchedFields, h), a.isSubmitted, L, S), Jt = $n(h, c, Xe);
      G(i, h, st), Xe ? (_._f.onBlur && _._f.onBlur(u), l && l(0)) : _._f.onChange && _._f.onChange(u);
      const it = me(h, st, Xe, !1), Cr = !Ce(it) || Jt;
      if (!Xe && y.values.next({
        name: h,
        type: u.type,
        values: { ...i }
      }), Er)
        return v.isValid && k(), Cr && y.state.next({ name: h, ...Jt ? {} : it });
      if (!Xe && Jt && y.state.next({ ...a }), U(!0), r.resolver) {
        const { errors: Nr } = await ee([h]);
        if (N(st), D) {
          const Ar = Hn(a.errors, n, h), Qt = Hn(Nr, n, Ar.name || h);
          J = Qt.error, h = Qt.name, ue = Ce(Nr);
        }
      } else
        J = (await zn(_, i, $, r.shouldUseNativeValidation))[h], N(st), D && (J ? ue = !1 : v.isValid && (ue = await R(n, !0)));
      D && (_._f.deps && Se(_._f.deps), re(h, ue, J, it));
    }
  }, Te = (u, f) => {
    if (w(a.errors, f) && u.focus)
      return u.focus(), 1;
  }, Se = async (u, f = {}) => {
    let h, D;
    const _ = $r(u);
    if (U(!0), r.resolver) {
      const g = await Ne(de(u) ? u : _);
      h = Ce(g), D = u ? !_.some((N) => w(g, N)) : h;
    } else
      u ? (D = (await Promise.all(_.map(async (g) => {
        const N = w(n, g);
        return await R(N && N._f ? { [g]: N } : N);
      }))).every(Boolean), !(!D && !a.isValid) && k()) : D = h = await R(n);
    return y.state.next({
      ...!He(u) || v.isValid && h !== a.isValid ? {} : { name: u },
      ...r.resolver || !u ? { isValid: h } : {},
      errors: a.errors,
      isValidating: !1
    }), f.shouldFocus && !D && tr(n, Te, u ? _ : c.mount), D;
  }, Ie = (u) => {
    const f = {
      ...s,
      ...o.mount ? i : {}
    };
    return de(u) ? f : He(u) ? w(f, u) : u.map((h) => w(f, h));
  }, H = (u, f) => ({
    invalid: !!w((f || a).errors, u),
    isDirty: !!w((f || a).dirtyFields, u),
    isTouched: !!w((f || a).touchedFields, u),
    error: w((f || a).errors, u)
  }), ce = (u) => {
    u && $r(u).forEach((f) => ge(a.errors, f)), y.state.next({
      errors: u ? a.errors : {}
    });
  }, Je = (u, f, h) => {
    const D = (w(n, u, { _f: {} })._f || {}).ref;
    G(a.errors, u, {
      ...f,
      ref: D
    }), y.state.next({
      name: u,
      errors: a.errors,
      isValid: !1
    }), h && h.shouldFocus && D && D.focus && D.focus();
  }, yt = (u, f) => ut(u) ? y.values.subscribe({
    next: (h) => u(ie(void 0, f), h)
  }) : ie(u, f, !0), Qe = (u, f = {}) => {
    for (const h of u ? $r(u) : c.mount)
      c.mount.delete(h), c.array.delete(h), f.keepValue || (ge(n, h), ge(i, h)), !f.keepError && ge(a.errors, h), !f.keepDirty && ge(a.dirtyFields, h), !f.keepTouched && ge(a.touchedFields, h), !r.shouldUnregister && !f.keepDefaultValue && ge(s, h);
    y.values.next({
      values: { ...i }
    }), y.state.next({
      ...a,
      ...f.keepDirty ? { isDirty: B() } : {}
    }), !f.keepIsValid && k();
  }, Re = ({ disabled: u, name: f, field: h, fields: D, value: _ }) => {
    if (je(u)) {
      const g = u ? void 0 : de(_) ? Va(h ? h._f : w(D, f)._f) : _;
      G(i, f, g), me(f, g, !1, !1, !0);
    }
  }, pt = (u, f = {}) => {
    let h = w(n, u);
    const D = je(f.disabled);
    return G(n, u, {
      ...h || {},
      _f: {
        ...h && h._f ? h._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...f
      }
    }), c.mount.add(u), h ? Re({
      field: h,
      disabled: f.disabled,
      name: u
    }) : se(u, !0, f.value), {
      ...D ? { disabled: f.disabled } : {},
      ...r.progressive ? {
        required: !!f.required,
        min: Xt(f.min),
        max: Xt(f.max),
        minLength: Xt(f.minLength),
        maxLength: Xt(f.maxLength),
        pattern: Xt(f.pattern)
      } : {},
      name: u,
      onChange: oe,
      onBlur: oe,
      ref: (_) => {
        if (_) {
          pt(u, f), h = w(n, u);
          const g = de(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, N = kc(g), J = h._f.refs || [];
          if (N ? J.find((ue) => ue === g) : g === h._f.ref)
            return;
          G(n, u, {
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
          }), se(u, !1, void 0, g);
        } else
          h = w(n, u, {}), h._f && (h._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(As(c.array, u) && o.action) && c.unMount.add(u);
      }
    };
  }, Nt = () => r.shouldFocusError && tr(n, Te, c.mount), At = (u) => {
    je(u) && (y.state.next({ disabled: u }), tr(n, (f, h) => {
      let D = u;
      const _ = w(n, h);
      _ && je(_._f.disabled) && (D || (D = _._f.disabled)), f.disabled = D;
    }, 0, !1));
  }, It = (u, f) => async (h) => {
    h && (h.preventDefault && h.preventDefault(), h.persist && h.persist());
    let D = Ve(i);
    if (y.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: _, values: g } = await ee();
      a.errors = _, D = g;
    } else
      await R(n);
    ge(a.errors, "root"), Ce(a.errors) ? (y.state.next({
      errors: {}
    }), await u(D, h)) : (f && await f({ ...a.errors }, h), Nt(), setTimeout(Nt)), y.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ce(a.errors),
      submitCount: a.submitCount + 1,
      errors: a.errors
    });
  }, fe = (u, f = {}) => {
    w(n, u) && (de(f.defaultValue) ? pe(u, w(s, u)) : (pe(u, f.defaultValue), G(s, u, f.defaultValue)), f.keepTouched || ge(a.touchedFields, u), f.keepDirty || (ge(a.dirtyFields, u), a.isDirty = f.defaultValue ? B(u, w(s, u)) : B()), f.keepError || (ge(a.errors, u), v.isValid && k()), y.state.next({ ...a }));
  }, nt = (u, f = {}) => {
    const h = u ? Ve(u) : s, D = Ve(h), _ = u && !Ce(u) ? D : s;
    if (f.keepDefaultValues || (s = h), !f.keepValues) {
      if (f.keepDirtyValues || T)
        for (const g of c.mount)
          w(a.dirtyFields, g) ? G(_, g, w(i, g)) : pe(g, w(_, g));
      else {
        if (sn && de(u))
          for (const g of c.mount) {
            const N = w(n, g);
            if (N && N._f) {
              const J = Array.isArray(N._f.refs) ? N._f.refs[0] : N._f.ref;
              if (Kr(J)) {
                const ue = J.closest("form");
                if (ue) {
                  ue.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      i = e.shouldUnregister ? f.keepDefaultValues ? Ve(s) : {} : Ve(_), y.array.next({
        values: { ..._ }
      }), y.values.next({
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
    }, !o.mount && t(), o.mount = !v.isValid || !!f.keepIsValid, o.watch = !!e.shouldUnregister, y.state.next({
      submitCount: f.keepSubmitCount ? a.submitCount : 0,
      isDirty: f.keepDirty ? a.isDirty : !!(f.keepDefaultValues && !_t(u, s)),
      isSubmitted: f.keepIsSubmitted ? a.isSubmitted : !1,
      dirtyFields: f.keepDirtyValues ? a.dirtyFields : f.keepDefaultValues && u ? Pa(s, u) : {},
      touchedFields: f.keepTouched ? a.touchedFields : {},
      errors: f.keepErrors ? a.errors : {},
      isSubmitSuccessful: f.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, _e = (u, f) => nt(ut(u) ? u(i) : u, f);
  return {
    control: {
      register: pt,
      unregister: Qe,
      getFieldState: H,
      handleSubmit: It,
      setError: Je,
      _executeSchema: ee,
      _getWatch: ie,
      _getDirty: B,
      _updateValid: k,
      _removeUnmounted: Y,
      _updateFieldArray: z,
      _updateDisabledField: Re,
      _getFieldArray: X,
      _reset: nt,
      _resetDefaultValues: () => ut(r.defaultValues) && r.defaultValues().then((u) => {
        _e(u, r.resetOptions), y.state.next({
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
      _subjects: y,
      _proxyFormState: v,
      _setErrors: j,
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
    trigger: Se,
    register: pt,
    handleSubmit: It,
    watch: yt,
    setValue: pe,
    getValues: Ie,
    reset: _e,
    resetField: fe,
    clearErrors: ce,
    unregister: Qe,
    setError: Je,
    setFocus: (u, f = {}) => {
      const h = w(n, u), D = h && h._f;
      if (D) {
        const _ = D.refs ? D.refs[0] : D.ref;
        _.focus && (_.focus(), f.shouldSelect && _.select());
      }
    },
    getFieldState: H
  };
}
function Nc(e = {}) {
  const t = b.useRef(), r = b.useRef(), [a, n] = b.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ut(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: ut(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Cc(e, () => n((i) => ({ ...i }))),
    formState: a
  });
  const s = t.current.control;
  return s._options = e, cn({
    subject: s._subjects.state,
    next: (i) => {
      Rs(i, s._proxyFormState, s._updateFormState, !0) && n({ ...s._formState });
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
  }), t.current.formState = Is(a, s), t.current;
}
const Dd = ({
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
var Bs = {};
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
})(Bs);
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
    r && /* @__PURE__ */ A(lt, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: Bs.faTriangleExclamation }),
    e
  ] })
] })), ua = E.forwardRef(Ac);
var qn = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var a = w(r, t);
    e.setCustomValidity(a && a.message || ""), e.reportValidity();
  }
}, Us = function(e, t) {
  var r = function(n) {
    var s = t.fields[n];
    s && s.ref && "reportValidity" in s.ref ? qn(s.ref, n, e) : s.refs && s.refs.forEach(function(i) {
      return qn(i, n, e);
    });
  };
  for (var a in t.fields)
    r(a);
}, Ic = function(e, t) {
  t.shouldUseNativeValidation && Us(e, t);
  var r = {};
  for (var a in e) {
    var n = w(t.fields, a), s = Object.assign(e[a] || {}, { ref: n && n.ref });
    if (Mc(t.names || Object.keys(e), a)) {
      var i = Object.assign({}, Rc(w(r, a)));
      G(i, "root", s), G(r, a, i);
    } else
      G(r, a, s);
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
      return d.errors.forEach(function(v) {
        return e.push(v);
      });
    }), t) {
      var c = r[i].types, l = c && c[a.code];
      r[i] = Ls(i, t, r, n, l ? [].concat(l, a.message) : a.message);
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
            return s.shouldUseNativeValidation && Us({}, s), { errors: {}, values: r.raw ? a : l };
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
      i.handleSubmit(async (d, v) => {
        await (a == null ? void 0 : a(d, v)), o(void 0);
      }, (d) => {
        c(d);
      })();
    }),
    ...i
  };
}, Od = ({
  onValid: e,
  context: t,
  mutation: r,
  defaultValues: a,
  schema: n,
  ...s
}) => {
  const i = Lc({
    context: t,
    schema: n,
    defaultValues: {
      ...a,
      ...n == null ? void 0 : n.default
    },
    onValid: async (o) => {
      await (e == null ? void 0 : e(o)), await (r == null ? void 0 : r.mutateAsync(o, {
        onError: (c, l) => {
          var d;
          (d = c.response) == null || d.data.errors.forEach((v) => {
            v.attribute in l ? i.setError(v.attribute, {
              message: v.msg
            }) : i.setError(`root.fields.${v.attribute}`, {
              type: "server",
              message: v.msg
            });
          });
        }
      }));
    },
    ...s
  });
  return i;
};
var zs = {};
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
})(zs);
const jc = (e, t) => {
  const [r, a] = E.useState(!1);
  return /* @__PURE__ */ A(no, { ref: t, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ A(ro, { position: "end", children: /* @__PURE__ */ A(ao, { size: "small", edge: "end", onClick: () => a((n) => !n), children: /* @__PURE__ */ A(lt, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, ps`
                  width: 18px;
                `], icon: r ? Qi.faEyeSlash : zs.faEye }) }) })
  }, ...e });
};
E.forwardRef(jc);
const Zc = (e) => /* @__PURE__ */ A("input", { ...e }), Fc = ({
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
  ...v
}, y) => {
  const [T, S] = b.useState(!1), {
    getRootProps: L,
    getInputProps: $
  } = so({
    error: !!i,
    onBlur: n,
    onFocus: s,
    disabled: c,
    ...v
  }), {
    onBlur: P,
    onFocus: k,
    ...U
  } = $();
  U.ref = gs(U.ref, y), U.value = U.value || "";
  const z = E.useCallback((se) => {
    c || (S(!0), k == null || k(se));
  }, [c, S, k]), F = E.useCallback((se) => {
    S(!1), P == null || P(se);
  }, [S, P]);
  let j = /* @__PURE__ */ Ye("div", { className: r, ref: a, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, i ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, T && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : T ? {
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
      /* @__PURE__ */ A(lt, { icon: ys.faCircleNotch, css: {
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
    }], onFocus: z, onBlur: F, ...v, ...U, type: l ? "hidden" : v.type || "text" }),
    o && !c && /* @__PURE__ */ A("div", { css: {
      display: "flex",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: o })
  ] });
  return e && (j = /* @__PURE__ */ A(ua, { label: e, error: i, helperText: t, ...L(), children: j })), j;
}, la = E.forwardRef(Fc);
var Hs = {}, qs = {};
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
})(qs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = qs;
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
})(Hs);
const Gs = "id", $c = ({
  className: e,
  isLoading: t = !1,
  inputLoading: r = !1,
  idField: a = Gs,
  displayField: n,
  options: s,
  multiple: i,
  open: o,
  label: c,
  error: l,
  onOpen: d,
  onClose: v,
  optionRender: y,
  onChange: T,
  onInputChange: S,
  onSelect: L,
  disabled: $,
  value: P,
  allowClear: k = !0,
  autoComplete: U = !0,
  autoSelect: z = !1,
  ...F
}, j) => {
  const se = E.useCallback((H) => n && n in H ? H[n] : JSON.stringify(H), [n]), me = E.useMemo(() => i ? (P == null ? void 0 : P.map((H) => s.find((ce) => ce[a] == H))) || [] : s.find((H) => H[a] == P) || null, [P, s]), {
    value: re,
    getRootProps: ee,
    getInputProps: Ne,
    getListboxProps: R,
    getOptionProps: Y,
    groupedOptions: B,
    getClearProps: ie,
    setAnchorEl: X,
    anchorEl: he,
    popupOpen: Ae,
    getTagProps: pe
  } = io({
    options: s,
    autoComplete: U,
    autoSelect: z,
    multiple: i,
    open: o,
    value: me,
    getOptionLabel: se,
    isOptionEqualToValue: (H, ce) => a ? H[a] === ce[a] : H === ce,
    onInputChange: S,
    autoHighlight: !0,
    onOpen: d,
    onClose: v,
    disabled: $,
    unstable_classNamePrefix: "c",
    onChange: (H, ce) => {
      T && (Array.isArray(ce) ? T(ce.map((Je) => Je[a])) : T(ce && typeof ce == "object" ? ce[a] : null)), L == null || L(ce);
    }
  }), oe = gs(j, X), Te = he && B.length > 0 ? /* @__PURE__ */ A("ul", { css: {
    width: "100%"
  }, ...R(), children: B.map((H, ce) => /* @__PURE__ */ A(b.Fragment, { children: "group" in H ? /* @__PURE__ */ A(Rn, {}) : /* @__PURE__ */ A("li", { css: [{
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
  }, ps`
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
                `], ...Y({
    option: H,
    index: ce
  }), children: y ? y(H) : se(H) }, H.key) }, a in H ? H[a] : ce)) }) : null, Se = E.useMemo(() => i ? re && re.length > 0 : !!re, [re, i]), Ie = /* @__PURE__ */ Ye(Rn, { children: [
    i && (re == null ? void 0 : re.length) > 0 && /* @__PURE__ */ A("div", { css: {
      marginBottom: "0.25rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }, children: re == null ? void 0 : re.map((H, ce) => (
      // eslint-disable-next-line react/jsx-key
      /* @__PURE__ */ A("div", { ...pe({
        index: ce
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
      }, children: y ? y(H) : se(H) })
    )) }),
    /* @__PURE__ */ A(la, { ...F, error: l, ...Ne(), inputWrapRef: oe, isLoading: r, afterItems: [Se && k && !i && /* @__PURE__ */ A("button", { ...ie(), onMouseDown: (H) => {
      H.preventDefault(), H.stopPropagation();
    }, children: /* @__PURE__ */ A(lt, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: Hs.faTimes }) }, "clear"), /* @__PURE__ */ A("button", { css: [{
      pointerEvents: "none"
    }], children: /* @__PURE__ */ A(lt, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, l && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: Xi.faCaretDown }) }, "arrow")] }),
    he && /* @__PURE__ */ A(bs, { open: Ae, anchorEl: he, children: /* @__PURE__ */ A("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: he.offsetWidth
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
      /* @__PURE__ */ A(lt, { icon: ys.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }, spin: !0, size: "lg" }),
      "Загрузка..."
    ] }) : Te }) })
  ] });
  return c ? /* @__PURE__ */ A(ua, { label: c, error: l, className: e, ...ee(), children: Ie }) : Ie;
}, Js = E.forwardRef($c), Wc = ({
  dictionary: e,
  open: t = !1,
  value: r,
  filterOptions: a,
  ...n
}, s) => {
  const [i, o] = E.useState(t), c = Ki(e, {
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
      inputLoading: c.isLoading && !Le.isEmpty(r),
      disabled: c.isLoading && !Le.isEmpty(r) || n.disabled
    }
  );
}, Td = E.forwardRef(Wc);
var Yc = "Expected a function", Qs = "__lodash_hash_undefined__", Bc = "[object Function]", Uc = "[object GeneratorFunction]", zc = /[\\^$.*+?()[\]{}|]/g, Hc = /^\[object .+?Constructor\]$/, qc = typeof Mr == "object" && Mr && Mr.Object === Object && Mr, Gc = typeof self == "object" && self && self.Object === Object && self, Xs = qc || Gc || Function("return this")();
function Jc(e, t) {
  return e == null ? void 0 : e[t];
}
function Qc(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
var Xc = Array.prototype, Kc = Function.prototype, Ks = Object.prototype, La = Xs["__core-js_shared__"], Gn = function() {
  var e = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), ei = Kc.toString, fn = Ks.hasOwnProperty, eu = Ks.toString, tu = RegExp(
  "^" + ei.call(fn).replace(zc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), ru = Xc.splice, au = ti(Xs, "Map"), vr = ti(Object, "create");
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
    return r === Qs ? void 0 : r;
  }
  return fn.call(t, e) ? t[e] : void 0;
}
function ou(e) {
  var t = this.__data__;
  return vr ? t[e] !== void 0 : fn.call(t, e);
}
function cu(e, t) {
  var r = this.__data__;
  return r[e] = vr && t === void 0 ? Qs : t, this;
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
  if (!ri(e) || wu(e))
    return !1;
  var t = Du(e) || Qc(e) ? tu : Hc;
  return t.test(xu(e));
}
function fa(e, t) {
  var r = e.__data__;
  return _u(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ti(e, t) {
  var r = Jc(e, t);
  return bu(r) ? r : void 0;
}
function _u(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function wu(e) {
  return !!Gn && Gn in e;
}
function xu(e) {
  if (e != null) {
    try {
      return ei.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
function hn(e, t) {
  if (typeof e != "function" || t && typeof t != "function")
    throw new TypeError(Yc);
  var r = function() {
    var a = arguments, n = t ? t.apply(this, a) : a[0], s = r.cache;
    if (s.has(n))
      return s.get(n);
    var i = e.apply(this, a);
    return r.cache = s.set(n, i), i;
  };
  return r.cache = new (hn.Cache || St)(), r;
}
hn.Cache = St;
function ku(e, t) {
  return e === t || e !== e && t !== t;
}
function Du(e) {
  var t = ri(e) ? eu.call(e) : "";
  return t == Bc || t == Uc;
}
function ri(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
var Ou = hn;
const ai = /* @__PURE__ */ vs(Ou);
function ni(e) {
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
      var v = d[l];
      c = c.concat(Jn(v));
    }
    var y = navigator.language, T = y && Jn(y);
    i = i.concat(c, T);
  }
  return a && i.push(s), i.filter(Tu).map(qa).filter(Su);
}
var Nu = ai(Cu, ni);
function Au(e) {
  return Nu(e)[0] || null;
}
var si = ai(Au, ni);
function at(e, t, r) {
  return function(n, s) {
    s === void 0 && (s = r);
    var i = e(n) + s;
    return t(i);
  };
}
function Dr(e) {
  return function(r) {
    return new Date(e(r).getTime() - 1);
  };
}
function Or(e, t) {
  return function(a) {
    return [e(a), t(a)];
  };
}
function te(e) {
  if (e instanceof Date)
    return e.getFullYear();
  if (typeof e == "number")
    return e;
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t))
    return t;
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function vt(e) {
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
  var t = te(e), r = t + (-t + 1) % 100, a = /* @__PURE__ */ new Date();
  return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var Iu = at(te, Ht, -100), ii = at(te, Ht, 100), vn = Dr(ii), Ru = at(te, vn, -100), oi = Or(Ht, vn);
function mt(e) {
  var t = te(e), r = t + (-t + 1) % 10, a = /* @__PURE__ */ new Date();
  return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var ci = at(te, mt, -10), mn = at(te, mt, 10), va = Dr(mn), ui = at(te, va, -10), li = Or(mt, va);
function qt(e) {
  var t = te(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var di = at(te, qt, -1), yn = at(te, qt, 1), ma = Dr(yn), fi = at(te, ma, -1), Mu = Or(qt, ma);
function pn(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var s = te(a), i = vt(a) + n, o = /* @__PURE__ */ new Date();
    return o.setFullYear(s, i, 1), o.setHours(0, 0, 0, 0), e(o);
  };
}
function Et(e) {
  var t = te(e), r = vt(e), a = /* @__PURE__ */ new Date();
  return a.setFullYear(t, r, 1), a.setHours(0, 0, 0, 0), a;
}
var hi = pn(Et, -1), gn = pn(Et, 1), Tr = Dr(gn), vi = pn(Tr, -1), Pu = Or(Et, Tr);
function Vu(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var s = te(a), i = vt(a), o = ha(a) + n, c = /* @__PURE__ */ new Date();
    return c.setFullYear(s, i, o), c.setHours(0, 0, 0, 0), e(c);
  };
}
function Sr(e) {
  var t = te(e), r = vt(e), a = ha(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, r, a), n.setHours(0, 0, 0, 0), n;
}
var Lu = Vu(Sr, 1), bn = Dr(Lu), ju = Or(Sr, bn);
function mi(e) {
  return ha(Tr(e));
}
var Kt, K = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, jt = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
}, Zu = (Kt = {}, Kt[K.GREGORY] = [
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
], Kt[K.HEBREW] = ["he", "he-IL"], Kt[K.ISLAMIC] = [
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
], Kt), _n = [0, 1, 2, 3, 4, 5, 6], ja = /* @__PURE__ */ new Map();
function Fu(e) {
  return function(r, a) {
    var n = r || si();
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
}, zu = { weekday: "short" }, Hu = { weekday: "long" }, qu = { year: "numeric" }, Gu = Ct(Wu), Ju = Ct(Yu), Qu = Ct(Bu), yi = Ct(Uu), Xu = Ct(zu), Ku = Ct(Hu), ya = Ct(qu), el = _n[0], tl = _n[5], Qn = _n[6];
function mr(e, t) {
  t === void 0 && (t = K.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case K.ISO_8601:
      return (r + 6) % 7;
    case K.ISLAMIC:
      return (r + 1) % 7;
    case K.HEBREW:
    case K.GREGORY:
      return r;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function rl(e) {
  var t = Ht(e);
  return te(t);
}
function al(e) {
  var t = mt(e);
  return te(t);
}
function Ga(e, t) {
  t === void 0 && (t = K.ISO_8601);
  var r = te(e), a = vt(e), n = e.getDate() - mr(e, t);
  return new Date(r, a, n);
}
function nl(e, t) {
  t === void 0 && (t = K.ISO_8601);
  var r = t === K.GREGORY ? K.GREGORY : K.ISO_8601, a = Ga(e, t), n = te(e) + 1, s, i;
  do
    s = new Date(n, 0, r === K.ISO_8601 ? 4 : 1), i = Ga(s, t), n -= 1;
  while (e < i);
  return Math.round((a.getTime() - i.getTime()) / (864e5 * 7)) + 1;
}
function xt(e, t) {
  switch (e) {
    case "century":
      return Ht(t);
    case "decade":
      return mt(t);
    case "year":
      return qt(t);
    case "month":
      return Et(t);
    case "day":
      return Sr(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function sl(e, t) {
  switch (e) {
    case "century":
      return Iu(t);
    case "decade":
      return ci(t);
    case "year":
      return di(t);
    case "month":
      return hi(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function pi(e, t) {
  switch (e) {
    case "century":
      return ii(t);
    case "decade":
      return mn(t);
    case "year":
      return yn(t);
    case "month":
      return gn(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function il(e, t) {
  switch (e) {
    case "decade":
      return ci(t, -100);
    case "year":
      return di(t, -10);
    case "month":
      return hi(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ol(e, t) {
  switch (e) {
    case "decade":
      return mn(t, 100);
    case "year":
      return yn(t, 10);
    case "month":
      return gn(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function gi(e, t) {
  switch (e) {
    case "century":
      return vn(t);
    case "decade":
      return va(t);
    case "year":
      return ma(t);
    case "month":
      return Tr(t);
    case "day":
      return bn(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function cl(e, t) {
  switch (e) {
    case "century":
      return Ru(t);
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
function ul(e, t) {
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
function Xn(e, t) {
  switch (e) {
    case "century":
      return oi(t);
    case "decade":
      return li(t);
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
  return [xt(e, a[0]), gi(e, a[1])];
}
function bi(e, t, r) {
  return t === void 0 && (t = ya), r.map(function(a) {
    return t(e, a);
  }).join(" – ");
}
function dl(e, t, r) {
  return bi(e, t, oi(r));
}
function _i(e, t, r) {
  return bi(e, t, li(r));
}
function fl(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function wi(e, t) {
  t === void 0 && (t = K.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case K.ISLAMIC:
    case K.HEBREW:
      return r === tl || r === Qn;
    case K.ISO_8601:
    case K.GREGORY:
      return r === Qn || r === el;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var ze = "react-calendar__navigation";
function hl(e) {
  var t = e.activeStartDate, r = e.drillUp, a = e.formatMonthYear, n = a === void 0 ? yi : a, s = e.formatYear, i = s === void 0 ? ya : s, o = e.locale, c = e.maxDate, l = e.minDate, d = e.navigationAriaLabel, v = d === void 0 ? "" : d, y = e.navigationAriaLive, T = e.navigationLabel, S = e.next2AriaLabel, L = S === void 0 ? "" : S, $ = e.next2Label, P = $ === void 0 ? "»" : $, k = e.nextAriaLabel, U = k === void 0 ? "" : k, z = e.nextLabel, F = z === void 0 ? "›" : z, j = e.prev2AriaLabel, se = j === void 0 ? "" : j, me = e.prev2Label, re = me === void 0 ? "«" : me, ee = e.prevAriaLabel, Ne = ee === void 0 ? "" : ee, R = e.prevLabel, Y = R === void 0 ? "‹" : R, B = e.setActiveStartDate, ie = e.showDoubleView, X = e.view, he = e.views, Ae = he.indexOf(X) > 0, pe = X !== "century", oe = sl(X, t), Te = pe ? il(X, t) : void 0, Se = pi(X, t), Ie = pe ? ol(X, t) : void 0, H = function() {
    if (oe.getFullYear() < 0)
      return !0;
    var fe = cl(X, t);
    return l && l >= fe;
  }(), ce = pe && function() {
    if (Te.getFullYear() < 0)
      return !0;
    var fe = ul(X, t);
    return l && l >= fe;
  }(), Je = c && c < Se, yt = pe && c && c < Ie;
  function Qe() {
    B(oe, "prev");
  }
  function Re() {
    B(Te, "prev2");
  }
  function pt() {
    B(Se, "next");
  }
  function Nt() {
    B(Ie, "next2");
  }
  function At(fe) {
    var nt = function() {
      switch (X) {
        case "century":
          return dl(o, i, fe);
        case "decade":
          return _i(o, i, fe);
        case "year":
          return i(o, fe);
        case "month":
          return n(o, fe);
        default:
          throw new Error("Invalid view: ".concat(X, "."));
      }
    }();
    return T ? T({
      date: fe,
      label: nt,
      locale: o || si() || void 0,
      view: X
    }) : nt;
  }
  function It() {
    var fe = "".concat(ze, "__label");
    return b.createElement(
      "button",
      { "aria-label": v, "aria-live": y, className: fe, disabled: !Ae, onClick: r, style: { flexGrow: 1 }, type: "button" },
      b.createElement("span", { className: "".concat(fe, "__labelText ").concat(fe, "__labelText--from") }, At(t)),
      ie ? b.createElement(
        b.Fragment,
        null,
        b.createElement("span", { className: "".concat(fe, "__divider") }, " – "),
        b.createElement("span", { className: "".concat(fe, "__labelText ").concat(fe, "__labelText--to") }, At(Se))
      ) : null
    );
  }
  return b.createElement(
    "div",
    { className: ze },
    re !== null && pe ? b.createElement("button", { "aria-label": se, className: "".concat(ze, "__arrow ").concat(ze, "__prev2-button"), disabled: ce, onClick: Re, type: "button" }, re) : null,
    Y !== null && b.createElement("button", { "aria-label": Ne, className: "".concat(ze, "__arrow ").concat(ze, "__prev-button"), disabled: H, onClick: Qe, type: "button" }, Y),
    It(),
    F !== null && b.createElement("button", { "aria-label": U, className: "".concat(ze, "__arrow ").concat(ze, "__next-button"), disabled: Je, onClick: pt, type: "button" }, F),
    P !== null && pe ? b.createElement("button", { "aria-label": L, className: "".concat(ze, "__arrow ").concat(ze, "__next2-button"), disabled: yt, onClick: Nt, type: "button" }, P) : null
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
function Kn(e) {
  return "".concat(e, "%");
}
function wn(e) {
  var t = e.children, r = e.className, a = e.count, n = e.direction, s = e.offset, i = e.style, o = e.wrap, c = vl(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return b.createElement("div", Zt({ className: r, style: Zt({ display: "flex", flexDirection: n, flexWrap: o ? "wrap" : "nowrap" }, i) }, c), b.Children.map(t, function(l, d) {
    var v = s && d === 0 ? Kn(100 * s / a) : null;
    return b.cloneElement(l, Zt(Zt({}, l.props), { style: {
      flexBasis: Kn(100 / a),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: v,
      marginInlineStart: v,
      marginInlineEnd: 0
    } }));
  }));
}
var ml = function() {
}, yl = ml;
const pl = /* @__PURE__ */ vs(yl);
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
function xi(e, t) {
  return yr(e[0], t) || yr(e[1], t);
}
function es(e, t, r) {
  var a = xi(t, e), n = [];
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
    var T = e.dateType;
    if (!T)
      throw new Error("dateType is required when date is not an array of two dates");
    return Xn(T, r);
  }();
  if (yr(i, o) && s.push("".concat(n, "--now")), !t || !_l(t))
    return s;
  var c = function() {
    if (Array.isArray(t))
      return t;
    var T = e.valueType;
    if (!T)
      throw new Error("valueType is required when value is not an array of two dates");
    return Xn(T, t);
  }();
  bl(c, o) ? s.push("".concat(n, "--active")) : xi(c, o) && s.push("".concat(n, "--hasActive"));
  var l = es(c, o, "".concat(n, "--range"));
  s.push.apply(s, l);
  var d = Array.isArray(t) ? t : [t];
  if (a && d.length === 1) {
    var v = a > c[0] ? [c[0], a] : [a, c[0]], y = es(v, o, "".concat(n, "--hover"));
    s.push.apply(s, y);
  }
  return s;
}
var xl = (Pt = {}, Pt[jt.ARABIC] = K.ISLAMIC, Pt[jt.HEBREW] = K.HEBREW, Pt[jt.ISO_8601] = K.ISO_8601, Pt[jt.US] = K.GREGORY, Pt);
function kl(e) {
  return e !== void 0 && e in jt;
}
var ts = !1;
function pa(e) {
  if (kl(e)) {
    var t = xl[e];
    return pl(ts, 'Specifying calendarType="'.concat(e, '" is deprecated. Use calendarType="').concat(t, '" instead.')), ts = !0, t;
  }
  return e;
}
function ga(e) {
  for (var t = e.className, r = e.count, a = r === void 0 ? 3 : r, n = e.dateTransform, s = e.dateType, i = e.end, o = e.hover, c = e.offset, l = e.renderTile, d = e.start, v = e.step, y = v === void 0 ? 1 : v, T = e.value, S = e.valueType, L = [], $ = d; $ <= i; $ += y) {
    var P = n($);
    L.push(l({
      classes: wl({
        date: P,
        dateType: s,
        hover: o,
        value: T,
        valueType: S
      }),
      date: P
    }));
  }
  return b.createElement(wn, { className: t, count: a, offset: c, wrap: !0 }, L);
}
function ba(e) {
  var t = e.activeStartDate, r = e.children, a = e.classes, n = e.date, s = e.formatAbbr, i = e.locale, o = e.maxDate, c = e.maxDateTransform, l = e.minDate, d = e.minDateTransform, v = e.onClick, y = e.onMouseOver, T = e.style, S = e.tileClassName, L = e.tileContent, $ = e.tileDisabled, P = e.view, k = E.useMemo(function() {
    var z = { activeStartDate: t, date: n, view: P };
    return typeof S == "function" ? S(z) : S;
  }, [t, n, S, P]), U = E.useMemo(function() {
    var z = { activeStartDate: t, date: n, view: P };
    return typeof L == "function" ? L(z) : L;
  }, [t, n, L, P]);
  return b.createElement(
    "button",
    { className: oa(a, k), disabled: l && d(l) > n || o && c(o) < n || $ && $({ activeStartDate: t, date: n, view: P }), onClick: v ? function(z) {
      return v(n, z);
    } : void 0, onFocus: y ? function() {
      return y(n);
    } : void 0, onMouseOver: y ? function() {
      return y(n);
    } : void 0, style: T, type: "button" },
    s ? b.createElement("abbr", { "aria-label": s(i, n) }, r) : r,
    U
  );
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
  return r && l.push.apply(l, r), Za && l.push(Za), Ht(o).getFullYear() !== a && l.push("".concat(Za, "--neighboringCentury")), b.createElement(ba, Ja({}, i, { classes: l, maxDateTransform: va, minDateTransform: mt, view: "century" }), _i(c, s, o));
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
}, rs = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Tl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringCentury, n = e.value, s = e.valueType, i = rs(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), o = rl(t), c = o + (a ? 119 : 99);
  return b.createElement(ga, { className: "react-calendar__century-view__decades", dateTransform: mt, dateType: "decade", end: c, hover: r, renderTile: function(l) {
    var d = l.date, v = rs(l, ["date"]);
    return b.createElement(Ol, Qa({ key: d.getTime() }, i, v, { activeStartDate: t, currentCentury: o, date: d }));
  }, start: o, step: 10, value: n, valueType: s });
}
var as = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, s; a < n; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Sl = Object.values(K), El = Object.values(jt), Xa = ["century", "decade", "year", "month"], ki = m.oneOf(as(as([], Sl, !0), El, !0)), aa = m.oneOfType([
  m.string,
  m.arrayOf(m.string)
]), xn = function(t, r, a) {
  var n = t, s = r, i = n[s];
  if (!i)
    return null;
  if (!(i instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var o = t.maxDate;
  return o && i > o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, minDate cannot be larger than maxDate.")) : null;
}, kn = function(t, r, a) {
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
m.arrayOf(m.oneOf(Xa));
var na = function(t, r, a) {
  var n = t, s = r, i = n[s];
  return i !== void 0 && (typeof i != "string" || Xa.indexOf(i) === -1) ? new Error("Invalid prop `".concat(r, "` of value `").concat(i, "` supplied to `").concat(a, "`, expected one of [").concat(Xa.map(function(o) {
    return '"'.concat(o, '"');
  }).join(", "), "].")) : null;
};
na.isRequired = function(t, r, a, n, s) {
  var i = t, o = r, c = i[o];
  return c ? na(t, r, a) : new Error("The prop `".concat(r, "` is marked as required in `").concat(a, "`, but its value is `").concat(c, "`."));
};
var Il = function(e) {
  return m.arrayOf(e);
}, _a = {
  activeStartDate: m.instanceOf(Date).isRequired,
  hover: m.instanceOf(Date),
  locale: m.string,
  maxDate: kn,
  minDate: xn,
  onClick: m.func,
  onMouseOver: m.func,
  tileClassName: m.oneOfType([m.func, aa]),
  tileContent: m.oneOfType([m.func, m.node]),
  value: Al,
  valueType: m.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
m.instanceOf(Date).isRequired, m.arrayOf(m.string.isRequired).isRequired, m.instanceOf(Date).isRequired, m.string, m.func, m.func, m.objectOf(m.oneOfType([m.string, m.number])), m.oneOfType([m.func, aa]), m.oneOfType([m.func, m.node]), m.func;
var pr = globalThis && globalThis.__assign || function() {
  return pr = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, pr.apply(this, arguments);
}, Di = function(t) {
  function r() {
    return b.createElement(Tl, pr({}, t));
  }
  return b.createElement("div", { className: "react-calendar__century-view" }, r());
};
Di.propTypes = pr(pr({}, _a), { showNeighboringCentury: m.bool });
const Rl = Di;
var Ka = globalThis && globalThis.__assign || function() {
  return Ka = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ka.apply(this, arguments);
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
  return r && l.push.apply(l, r), Fa && l.push(Fa), mt(o).getFullYear() !== a && l.push("".concat(Fa, "--neighboringDecade")), b.createElement(ba, Ka({}, i, { classes: l, maxDateTransform: ma, minDateTransform: qt, view: "decade" }), s(c, o));
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
}, ns = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Vl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringDecade, n = e.value, s = e.valueType, i = ns(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), o = al(t), c = o + (a ? 11 : 9);
  return b.createElement(ga, { className: "react-calendar__decade-view__years", dateTransform: qt, dateType: "year", end: c, hover: r, renderTile: function(l) {
    var d = l.date, v = ns(l, ["date"]);
    return b.createElement(Pl, en({ key: d.getTime() }, i, v, { activeStartDate: t, currentDecade: o, date: d }));
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
}, Oi = function(t) {
  function r() {
    return b.createElement(Vl, gr({}, t));
  }
  return b.createElement("div", { className: "react-calendar__decade-view" }, r());
};
Oi.propTypes = gr(gr({}, _a), { showNeighboringDecade: m.bool });
const Ll = Oi;
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
}, ss = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, s; a < n; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Zl = "react-calendar__year-view__months__month";
function Fl(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.formatMonth, n = a === void 0 ? Qu : a, s = e.formatMonthYear, i = s === void 0 ? yi : s, o = jl(e, ["classes", "formatMonth", "formatMonthYear"]), c = o.date, l = o.locale;
  return b.createElement(ba, tn({}, o, { classes: ss(ss([], r, !0), [Zl], !1), formatAbbr: i, maxDateTransform: Tr, minDateTransform: Et, view: "year" }), n(l, c));
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
}, is = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function $l(e) {
  var t = e.activeStartDate, r = e.hover, a = e.value, n = e.valueType, s = is(e, ["activeStartDate", "hover", "value", "valueType"]), i = 0, o = 11, c = te(t);
  return b.createElement(ga, { className: "react-calendar__year-view__months", dateTransform: function(l) {
    var d = /* @__PURE__ */ new Date();
    return d.setFullYear(c, l, 1), Et(d);
  }, dateType: "month", end: o, hover: r, renderTile: function(l) {
    var d = l.date, v = is(l, ["date"]);
    return b.createElement(Fl, rn({ key: d.getTime() }, s, v, { activeStartDate: t, date: d }));
  }, start: i, value: a, valueType: n });
}
var sa = globalThis && globalThis.__assign || function() {
  return sa = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, sa.apply(this, arguments);
}, Ti = function(t) {
  function r() {
    return b.createElement($l, sa({}, t));
  }
  return b.createElement("div", { className: "react-calendar__year-view" }, r());
};
Ti.propTypes = sa({}, _a);
const Wl = Ti;
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
}, Vr = "react-calendar__month-view__days__day";
function Bl(e) {
  var t = e.calendarType, r = e.classes, a = r === void 0 ? [] : r, n = e.currentMonthIndex, s = e.formatDay, i = s === void 0 ? Gu : s, o = e.formatLongDate, c = o === void 0 ? Ju : o, l = Yl(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), d = pa(t), v = l.date, y = l.locale, T = [];
  return a && T.push.apply(T, a), Vr && T.push(Vr), wi(v, d) && T.push("".concat(Vr, "--weekend")), v.getMonth() !== n && T.push("".concat(Vr, "--neighboringMonth")), b.createElement(ba, an({}, l, { classes: T, formatAbbr: c, maxDateTransform: bn, minDateTransform: Sr, view: "month" }), i(y, v));
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
}, os = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Ul(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.hover, n = e.showFixedNumberOfWeeks, s = e.showNeighboringMonth, i = e.value, o = e.valueType, c = os(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), l = pa(r), d = te(t), v = vt(t), y = n || s, T = mr(t, l), S = y ? 0 : T, L = (y ? -T : 0) + 1, $ = function() {
    if (n)
      return L + 6 * 7 - 1;
    var P = mi(t);
    if (s) {
      var k = /* @__PURE__ */ new Date();
      k.setFullYear(d, v, P), k.setHours(0, 0, 0, 0);
      var U = 7 - mr(k, l) - 1;
      return P + U;
    }
    return P;
  }();
  return b.createElement(ga, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(P) {
    var k = /* @__PURE__ */ new Date();
    return k.setFullYear(d, v, P), Sr(k);
  }, dateType: "day", hover: a, end: $, renderTile: function(P) {
    var k = P.date, U = os(P, ["date"]);
    return b.createElement(Bl, nn({ key: k.getTime() }, c, U, { activeStartDate: t, calendarType: r, currentMonthIndex: v, date: k }));
  }, offset: S, start: L, value: i, valueType: o });
}
var Si = "react-calendar__month-view__weekdays", $a = "".concat(Si, "__weekday");
function zl(e) {
  for (var t = e.calendarType, r = e.formatShortWeekday, a = r === void 0 ? Xu : r, n = e.formatWeekday, s = n === void 0 ? Ku : n, i = e.locale, o = e.onMouseLeave, c = pa(t), l = /* @__PURE__ */ new Date(), d = Et(l), v = te(d), y = vt(d), T = [], S = 1; S <= 7; S += 1) {
    var L = new Date(v, y, S - mr(d, c)), $ = s(i, L);
    T.push(b.createElement(
      "div",
      { key: S, className: oa($a, fl(L) && "".concat($a, "--current"), wi(L, c) && "".concat($a, "--weekend")) },
      b.createElement("abbr", { "aria-label": $, title: $ }, a(i, L).replace(".", ""))
    ));
  }
  return b.createElement(wn, { className: Si, count: 7, onFocus: o, onMouseOver: o }, T);
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
}, cs = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, us = "react-calendar__tile";
function Hl(e) {
  var t = e.onClickWeekNumber, r = e.weekNumber, a = b.createElement("span", null, r);
  if (t) {
    var n = e.date, s = e.onClickWeekNumber, i = e.weekNumber, o = cs(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return b.createElement("button", ia({}, o, { className: us, onClick: function(c) {
      return s(i, n, c);
    }, type: "button" }), a);
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var o = cs(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return b.createElement("div", ia({}, o, { className: us }), a);
  }
}
function ql(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.onClickWeekNumber, n = e.onMouseLeave, s = e.showFixedNumberOfWeeks, i = pa(r), o = function() {
    if (s)
      return 6;
    var d = mi(t), v = mr(t, i), y = d - (7 - v);
    return 1 + Math.ceil(y / 7);
  }(), c = function() {
    for (var d = te(t), v = vt(t), y = ha(t), T = [], S = 0; S < o; S += 1)
      T.push(Ga(new Date(d, v, y + S * 7), i));
    return T;
  }(), l = c.map(function(d) {
    return nl(d, i);
  });
  return b.createElement(wn, { className: "react-calendar__month-view__weekNumbers", count: o, direction: "column", onFocus: n, onMouseOver: n, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, l.map(function(d, v) {
    var y = c[v];
    if (!y)
      throw new Error("date is not defined");
    return b.createElement(Hl, { key: d, date: y, onClickWeekNumber: a, weekNumber: d });
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
function Jl(e) {
  if (e)
    for (var t = 0, r = Object.entries(Zu); t < r.length; t++) {
      var a = r[t], n = a[0], s = a[1];
      if (s.includes(e))
        return n;
    }
  return K.ISO_8601;
}
var Ei = function(t) {
  var r = t.activeStartDate, a = t.locale, n = t.onMouseLeave, s = t.showFixedNumberOfWeeks, i = t.calendarType, o = i === void 0 ? Jl(a) : i, c = t.formatShortWeekday, l = t.formatWeekday, d = t.onClickWeekNumber, v = t.showWeekNumbers, y = Gl(t, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function T() {
    return b.createElement(zl, { calendarType: o, formatShortWeekday: c, formatWeekday: l, locale: a, onMouseLeave: n });
  }
  function S() {
    return v ? b.createElement(ql, { activeStartDate: r, calendarType: o, onClickWeekNumber: d, onMouseLeave: n, showFixedNumberOfWeeks: s }) : null;
  }
  function L() {
    return b.createElement(Ul, br({ calendarType: o }, y));
  }
  var $ = "react-calendar__month-view";
  return b.createElement(
    "div",
    { className: oa($, v ? "".concat($, "--weekNumbers") : "") },
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
        T(),
        L()
      )
    )
  );
};
Ei.propTypes = br(br({}, _a), { calendarType: ki, formatDay: m.func, formatLongDate: m.func, formatShortWeekday: m.func, formatWeekday: m.func, onClickWeekNumber: m.func, onMouseLeave: m.func, showFixedNumberOfWeeks: m.bool, showNeighboringMonth: m.bool, showWeekNumbers: m.bool });
const Ql = Ei;
var Ft = globalThis && globalThis.__assign || function() {
  return Ft = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ft.apply(this, arguments);
}, Lr = "react-calendar", Wt = ["century", "decade", "year", "month"], Xl = ["decade", "year", "month", "day"], Dn = /* @__PURE__ */ new Date();
Dn.setFullYear(1, 0, 1);
Dn.setHours(0, 0, 0, 0);
var Kl = /* @__PURE__ */ new Date(864e13);
function er(e) {
  return e instanceof Date ? e : new Date(e);
}
function Ci(e, t) {
  return Wt.slice(Wt.indexOf(e), Wt.indexOf(t) + 1);
}
function ed(e, t, r) {
  var a = Ci(t, r);
  return a.indexOf(e) !== -1;
}
function On(e, t, r) {
  return e && ed(e, t, r) ? e : r;
}
function Ni(e) {
  var t = Wt.indexOf(e);
  return Xl[t];
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
function Ai(e, t) {
  var r = e.value, a = e.minDate, n = e.maxDate, s = e.maxDetail, i = td(r, t);
  if (!i)
    return null;
  var o = Ni(s), c = function() {
    switch (t) {
      case 0:
        return xt(o, i);
      case 1:
        return gi(o, i);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return gl(c, a, n);
}
var Tn = function(e) {
  return Ai(e, 0);
}, Ii = function(e) {
  return Ai(e, 1);
}, rd = function(e) {
  return [Tn, Ii].map(function(t) {
    return t(e);
  });
};
function Ri(e) {
  var t = e.maxDate, r = e.maxDetail, a = e.minDate, n = e.minDetail, s = e.value, i = e.view, o = On(i, n, r), c = Tn({
    value: s,
    minDate: a,
    maxDate: t,
    maxDetail: r
  }) || /* @__PURE__ */ new Date();
  return xt(o, c);
}
function ad(e) {
  var t = e.activeStartDate, r = e.defaultActiveStartDate, a = e.defaultValue, n = e.defaultView, s = e.maxDate, i = e.maxDetail, o = e.minDate, c = e.minDetail, l = e.value, d = e.view, v = On(d, c, i), y = t || r;
  return y ? xt(v, y) : Ri({
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
function jr(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var Mi = E.forwardRef(function(t, r) {
  var a = t.activeStartDate, n = t.allowPartialRange, s = t.calendarType, i = t.className, o = t.defaultActiveStartDate, c = t.defaultValue, l = t.defaultView, d = t.formatDay, v = t.formatLongDate, y = t.formatMonth, T = t.formatMonthYear, S = t.formatShortWeekday, L = t.formatWeekday, $ = t.formatYear, P = t.goToRangeStartOnSelect, k = P === void 0 ? !0 : P, U = t.inputRef, z = t.locale, F = t.maxDate, j = F === void 0 ? Kl : F, se = t.maxDetail, me = se === void 0 ? "month" : se, re = t.minDate, ee = re === void 0 ? Dn : re, Ne = t.minDetail, R = Ne === void 0 ? "century" : Ne, Y = t.navigationAriaLabel, B = t.navigationAriaLive, ie = t.navigationLabel, X = t.next2AriaLabel, he = t.next2Label, Ae = t.nextAriaLabel, pe = t.nextLabel, oe = t.onActiveStartDateChange, Te = t.onChange, Se = t.onClickDay, Ie = t.onClickDecade, H = t.onClickMonth, ce = t.onClickWeekNumber, Je = t.onClickYear, yt = t.onDrillDown, Qe = t.onDrillUp, Re = t.onViewChange, pt = t.prev2AriaLabel, Nt = t.prev2Label, At = t.prevAriaLabel, It = t.prevLabel, fe = t.returnValue, nt = fe === void 0 ? "start" : fe, _e = t.selectRange, Gt = t.showDoubleView, wa = t.showFixedNumberOfWeeks, xa = t.showNavigation, u = xa === void 0 ? !0 : xa, f = t.showNeighboringCentury, h = t.showNeighboringDecade, D = t.showNeighboringMonth, _ = D === void 0 ? !0 : D, g = t.showWeekNumbers, N = t.tileClassName, J = t.tileContent, ue = t.tileDisabled, st = t.value, Xe = t.view, Er = E.useState(o), Jt = Er[0], it = Er[1], Cr = E.useState(null), Nr = Cr[0], Ar = Cr[1], Qt = E.useState(Array.isArray(c) ? c.map(function(W) {
    return W !== null ? er(W) : null;
  }) : c != null ? er(c) : null), ka = Qt[0], Pi = Qt[1], En = E.useState(l), Vi = En[0], Cn = En[1], De = a || Jt || ad({
    activeStartDate: a,
    defaultActiveStartDate: o,
    defaultValue: c,
    defaultView: l,
    maxDate: j,
    maxDetail: me,
    minDate: ee,
    minDetail: R,
    value: st,
    view: Xe
  }), Oe = function() {
    var W = function() {
      return _e && Wa(ka) ? ka : st !== void 0 ? st : ka;
    }();
    return W ? Array.isArray(W) ? W.map(function(le) {
      return le !== null ? er(le) : null;
    }) : W !== null ? er(W) : null : null;
  }(), Ir = Ni(me), ae = On(Xe || Vi, R, me), Ue = Ci(R, me), Li = _e ? Nr : null, Da = Ue.indexOf(ae) < Ue.length - 1, Nn = Ue.indexOf(ae) > 0, An = E.useCallback(function(W) {
    var le = function() {
      switch (nt) {
        case "start":
          return Tn;
        case "end":
          return Ii;
        case "range":
          return rd;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return le({
      maxDate: j,
      maxDetail: me,
      minDate: ee,
      value: W
    });
  }, [j, me, ee, nt]), Oa = E.useCallback(function(W, le) {
    it(W);
    var ve = {
      action: le,
      activeStartDate: W,
      value: Oe,
      view: ae
    };
    oe && !jr(De, W) && oe(ve);
  }, [De, oe, Oe, ae]), Rr = E.useCallback(function(W, le) {
    var ve = function() {
      switch (ae) {
        case "century":
          return Ie;
        case "decade":
          return Je;
        case "year":
          return H;
        case "month":
          return Se;
        default:
          throw new Error("Invalid view: ".concat(ae, "."));
      }
    }();
    ve && ve(W, le);
  }, [Se, Ie, H, Je, ae]), Ta = E.useCallback(function(W, le) {
    if (Da) {
      Rr(W, le);
      var ve = Ue[Ue.indexOf(ae) + 1];
      if (!ve)
        throw new Error("Attempted to drill down from the lowest view.");
      it(W), Cn(ve);
      var Me = {
        action: "drillDown",
        activeStartDate: W,
        value: Oe,
        view: ve
      };
      oe && !jr(De, W) && oe(Me), Re && ae !== ve && Re(Me), yt && yt(Me);
    }
  }, [
    De,
    Da,
    oe,
    Rr,
    yt,
    Re,
    Oe,
    ae,
    Ue
  ]), Sa = E.useCallback(function() {
    if (Nn) {
      var W = Ue[Ue.indexOf(ae) - 1];
      if (!W)
        throw new Error("Attempted to drill up from the highest view.");
      var le = xt(W, De);
      it(le), Cn(W);
      var ve = {
        action: "drillUp",
        activeStartDate: le,
        value: Oe,
        view: W
      };
      oe && !jr(De, le) && oe(ve), Re && ae !== W && Re(ve), Qe && Qe(ve);
    }
  }, [
    De,
    Nn,
    oe,
    Qe,
    Re,
    Oe,
    ae,
    Ue
  ]), Ea = E.useCallback(function(W, le) {
    var ve = Oe;
    Rr(W, le);
    var Me = _e && !Wa(ve), Pe;
    if (_e)
      if (Me)
        Pe = xt(Ir, W);
      else {
        if (!ve)
          throw new Error("previousValue is required");
        if (Array.isArray(ve))
          throw new Error("previousValue must not be an array");
        Pe = ll(Ir, ve, W);
      }
    else
      Pe = An(W);
    var Na = (
      // Range selection turned off
      !_e || // Range selection turned on, first value
      Me || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      k ? Ri({
        maxDate: j,
        maxDetail: me,
        minDate: ee,
        minDetail: R,
        value: Pe,
        view: ae
      }) : null
    );
    le.persist(), it(Na), Pi(Pe);
    var $i = {
      action: "onChange",
      activeStartDate: Na,
      value: Pe,
      view: ae
    };
    if (oe && !jr(De, Na) && oe($i), Te)
      if (_e) {
        var Wi = Wa(Pe);
        if (!Wi)
          Te(Pe || null, le);
        else if (n) {
          if (Array.isArray(Pe))
            throw new Error("value must not be an array");
          Te([Pe || null, null], le);
        }
      } else
        Te(Pe || null, le);
  }, [
    De,
    n,
    An,
    k,
    j,
    me,
    ee,
    R,
    oe,
    Te,
    Rr,
    _e,
    Oe,
    Ir,
    ae
  ]);
  function ji(W) {
    Ar(W);
  }
  function Ca() {
    Ar(null);
  }
  E.useImperativeHandle(r, function() {
    return {
      activeStartDate: De,
      drillDown: Ta,
      drillUp: Sa,
      onChange: Ea,
      setActiveStartDate: Oa,
      value: Oe,
      view: ae
    };
  }, [De, Ta, Sa, Ea, Oa, Oe, ae]);
  function In(W) {
    var le = W ? pi(ae, De) : xt(ae, De), ve = Da ? Ta : Ea, Me = {
      activeStartDate: le,
      hover: Li,
      locale: z,
      maxDate: j,
      minDate: ee,
      onClick: ve,
      onMouseOver: _e ? ji : void 0,
      tileClassName: N,
      tileContent: J,
      tileDisabled: ue,
      value: Oe,
      valueType: Ir
    };
    switch (ae) {
      case "century":
        return b.createElement(Rl, Ft({ formatYear: $, showNeighboringCentury: f }, Me));
      case "decade":
        return b.createElement(Ll, Ft({ formatYear: $, showNeighboringDecade: h }, Me));
      case "year":
        return b.createElement(Wl, Ft({ formatMonth: y, formatMonthYear: T }, Me));
      case "month":
        return b.createElement(Ql, Ft({ calendarType: s, formatDay: d, formatLongDate: v, formatShortWeekday: S, formatWeekday: L, onClickWeekNumber: ce, onMouseLeave: _e ? Ca : void 0, showFixedNumberOfWeeks: typeof wa < "u" ? wa : Gt, showNeighboringMonth: _, showWeekNumbers: g }, Me));
      default:
        throw new Error("Invalid view: ".concat(ae, "."));
    }
  }
  function Zi() {
    return u ? b.createElement(hl, { activeStartDate: De, drillUp: Sa, formatMonthYear: T, formatYear: $, locale: z, maxDate: j, minDate: ee, navigationAriaLabel: Y, navigationAriaLive: B, navigationLabel: ie, next2AriaLabel: X, next2Label: he, nextAriaLabel: Ae, nextLabel: pe, prev2AriaLabel: pt, prev2Label: Nt, prevAriaLabel: At, prevLabel: It, setActiveStartDate: Oa, showDoubleView: Gt, view: ae, views: Ue }) : null;
  }
  var Fi = Array.isArray(Oe) ? Oe : [Oe];
  return b.createElement(
    "div",
    { className: oa(Lr, _e && Fi.length === 1 && "".concat(Lr, "--selectRange"), Gt && "".concat(Lr, "--doubleView"), i), ref: U },
    Zi(),
    b.createElement(
      "div",
      { className: "".concat(Lr, "__viewContainer"), onBlur: _e ? Ca : void 0, onMouseLeave: _e ? Ca : void 0 },
      In(),
      Gt ? In(!0) : null
    )
  );
}), ls = m.instanceOf(Date), ds = m.oneOfType([m.string, m.instanceOf(Date)]), fs = m.oneOfType([ds, Il(ds)]);
Mi.propTypes = {
  activeStartDate: ls,
  allowPartialRange: m.bool,
  calendarType: ki,
  className: aa,
  defaultActiveStartDate: ls,
  defaultValue: fs,
  defaultView: na,
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
  maxDate: kn,
  maxDetail: m.oneOf(Wt),
  minDate: xn,
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
  tileClassName: m.oneOfType([m.func, aa]),
  tileContent: m.oneOfType([m.func, m.node]),
  tileDisabled: m.func,
  value: fs,
  view: na
};
const nd = Mi;
const sd = _s(nd)`
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
  const [v, y] = E.useState(null), [T, S] = E.useState(!1), [L, $] = E.useState(!1);
  E.useEffect(() => {
    r !== void 0 && S(r);
  }, [r]);
  const P = E.useCallback((j) => {
    $(!0), S(!0), n == null || n(j);
  }, [n, S]), k = E.useCallback((j) => {
    $(!1), s == null || s(j);
  }, [n, S]), U = E.useCallback((j) => {
    y(j);
  }, [y]), z = E.useMemo(() => o ? Pr(o, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]).toDate() : null, [o]), F = E.useMemo(() => z ? Pr(z).format("DD.MM.YYYY") : "", [z]);
  return /* @__PURE__ */ A(oo, { onClickAway: () => S(!1), children: /* @__PURE__ */ Ye(ua, { className: a, label: t, error: e, children: [
    /* @__PURE__ */ A(la, { ...l, inputWrapRef: U, ref: d, onFocus: P, onBlur: k, value: F, onChange: (j) => {
      j.target.value ? c == null || c(Pr(j.target.value, "DD.MM.YYYY").format("YYYY-MM-DD HH:mm:ss")) : c == null || c(void 0);
    }, onMouseDown: (j) => {
      L && S(!T), i == null || i(j);
    }, error: e }),
    v && /* @__PURE__ */ A(bs, { open: T, anchorEl: v, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: v
      }
    }], children: /* @__PURE__ */ A("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ A(sd, { value: z, onChange: (j) => {
      c == null || c(Pr(j).format("YYYY-MM-DD HH:mm:ss")), S(!1);
    } }) }) })
  ] }) });
}, Sd = E.forwardRef(id), od = ({
  multiple: e,
  value: t,
  url: r,
  params: a,
  idField: n = Gs,
  onInputChange: s,
  open: i,
  ...o
}, c) => {
  const [l, d] = E.useState(""), [v, y] = E.useState(i);
  E.useEffect(() => {
    y(i);
  }, [i]);
  const T = E.useMemo(() => ({
    ...a,
    ...l ? {
      query: l
    } : void 0
  }), [l, a]), S = l.length > 0 || v === !0, L = Mn(r, {
    enabled: S,
    params: T
  }), $ = E.useMemo(() => Le.isEmpty(t) ? !1 : L.data ? e ? !Le.every(t, (F) => Le.some(L.data.data, {
    [n]: F
  })) : !Le.some(L.data.data, {
    [n]: t
  }) : !0, [t, L.data]), P = E.useMemo(() => ({
    ...a,
    id: e ? Le.uniq(t).join(",") : t
  }), [t, a]), k = Mn(r, {
    params: P,
    enabled: $,
    staleTime: 60 * 1e3
  }), U = E.useMemo(() => {
    var F, j;
    return Le.uniqBy([...((F = k.data) == null ? void 0 : F.data) || [], ...((j = L.data) == null ? void 0 : j.data) || []], n);
  }, [k.data, L.data]), z = $ && k.isLoading;
  return /* @__PURE__ */ A(Js, { ref: c, multiple: e, value: t, ...o, disabled: z || o.disabled, inputLoading: z, options: U, idField: n, onOpen: () => y(!0), onClose: () => y(!1), isLoading: L.isLoading, onInputChange: (F, j, se) => {
    se === "input" && d(j), se === "reset" && d(""), s == null || s(F, j, se);
  } });
}, cd = E.forwardRef(od), Sn = (e) => E.forwardRef((t, r) => /* @__PURE__ */ A(cd, { ...e, ...t, ref: r })), ud = ({
  unit: e,
  error: t,
  onChange: r,
  ...a
}, n) => /* @__PURE__ */ A(la, { ...a, ref: n, error: t, onChange: (s) => {
  r == null || r(Number(s.target.value));
}, afterItems: [e && /* @__PURE__ */ A("div", { css: [{
  whiteSpace: "nowrap",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  "--tw-text-opacity": "1",
  color: "rgb(75 85 99 / var(--tw-text-opacity))"
}, t && {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
}], children: e }, "unit")] }), ld = E.forwardRef(ud), dd = (e) => /* @__PURE__ */ A("textarea", { ...e }), fd = ({
  error: e,
  rows: t = 5,
  ...r
}, a) => /* @__PURE__ */ A(la, { ...r, ref: a, rows: t, inputComponent: dd, error: e }), Ed = E.forwardRef(fd), hd = ({
  error: e,
  ...t
}, r) => /* @__PURE__ */ A(ld, { ...t, ref: r, error: e }), Cd = E.forwardRef(hd), vd = ({
  label: e,
  error: t,
  value: r,
  helperText: a,
  className: n,
  onChange: s,
  ...i
}, o) => /* @__PURE__ */ A(ua, { label: e, error: t, helperText: a, className: n, children: /* @__PURE__ */ Ye(co, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...i, onChange: (c) => {
  s == null || s(c.target.value === "true");
}, ref: o, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ A(Pn, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ A(Pn, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), Nd = E.forwardRef(vd);
({
  ...Zn
});
const md = _s(({
  className: e,
  ...t
}) => /* @__PURE__ */ A(uo, { ...t, classes: {
  popper: e
} }))`
  .${Vn.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Vn.arrow} {
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
    a && /* @__PURE__ */ A(lt, { icon: a }),
    e,
    n && /* @__PURE__ */ A(lt, { icon: n })
  ] });
  return r && (i = /* @__PURE__ */ A(md, { title: r, arrow: !0, children: i })), i;
}, Id = Sn({
  url: "/api/rest/partners",
  displayField: "name"
});
Sn({
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "is_deleted",
      value: !1
    }])
  }
});
const Rd = Sn({
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
  Td as D,
  Dd as F,
  ua as L,
  ld as N,
  Id as P,
  Rd as R,
  la as T,
  Cd as Y,
  kd as a,
  Sd as b,
  Ed as c,
  xd as d,
  Sn as e,
  Od as u,
  Zn as z
};
