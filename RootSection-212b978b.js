var Aa = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var K = (e, t, r) => (Aa(e, t, "read from private field"), r ? r.call(e) : t.get(e)), bt = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, _t = (e, t, r, a) => (Aa(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r);
var Rt = (e, t, r) => (Aa(e, t, "access private method"), r);
import { b as Ui, s as zi, g as Hi, n as ps, u as gs, c as qi, p as Gi, a as We, j as C, f as bs, F as Pn, d as Qi, k as Vn } from "./library-1a956507.js";
import { r as E, R as b, d as Pr, g as _s } from "./react-181b9648.js";
import { s as Ji, c as Ki, l as Ie, f as Xi, a as eo, b as to, h as Vr, u as Ln } from "./useDictionary-be508e70.js";
import { A as ro, d as ao, e as no, I as so, a as ws, f as io, u as oo, g as on, i as co, P as xs, k as ca, n as ks, C as uo, l as jn, m as lo, M as fo, t as Fn, B as ho } from "./mui-d2313b11.js";
import { F as rt, P as m } from "./icons-42066a3f.js";
var dt, ke, Ne, tt, Yt, Zr, _r, Ya, ys, vo = (ys = class extends Ui {
  constructor(t, r) {
    super();
    bt(this, Yt);
    bt(this, _r);
    bt(this, dt, void 0);
    bt(this, ke, void 0);
    bt(this, Ne, void 0);
    bt(this, tt, void 0);
    _t(this, ke, void 0), _t(this, dt, t), this.setOptions(r), this.bindMethods(), Rt(this, Yt, Zr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var a;
    const r = this.options;
    this.options = K(this, dt).defaultMutationOptions(t), zi(r, this.options) || K(this, dt).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: K(this, Ne),
      observer: this
    }), (a = K(this, Ne)) == null || a.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = K(this, Ne)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    Rt(this, Yt, Zr).call(this), Rt(this, _r, Ya).call(this, t);
  }
  getCurrentResult() {
    return K(this, ke);
  }
  reset() {
    _t(this, Ne, void 0), Rt(this, Yt, Zr).call(this), Rt(this, _r, Ya).call(this);
  }
  mutate(t, r) {
    var a;
    return _t(this, tt, r), (a = K(this, Ne)) == null || a.removeObserver(this), _t(this, Ne, K(this, dt).getMutationCache().build(K(this, dt), this.options)), K(this, Ne).addObserver(this), K(this, Ne).execute(t);
  }
}, dt = new WeakMap(), ke = new WeakMap(), Ne = new WeakMap(), tt = new WeakMap(), Yt = new WeakSet(), Zr = function() {
  var r;
  const t = ((r = K(this, Ne)) == null ? void 0 : r.state) ?? Hi();
  _t(this, ke, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, _r = new WeakSet(), Ya = function(t) {
  ps.batch(() => {
    var r, a, n, s, i, o, c, l;
    K(this, tt) && this.hasListeners() && ((t == null ? void 0 : t.type) === "success" ? ((a = (r = K(this, tt)).onSuccess) == null || a.call(
      r,
      t.data,
      K(this, ke).variables,
      K(this, ke).context
    ), (s = (n = K(this, tt)).onSettled) == null || s.call(
      n,
      t.data,
      null,
      K(this, ke).variables,
      K(this, ke).context
    )) : (t == null ? void 0 : t.type) === "error" && ((o = (i = K(this, tt)).onError) == null || o.call(
      i,
      t.error,
      K(this, ke).variables,
      K(this, ke).context
    ), (l = (c = K(this, tt)).onSettled) == null || l.call(
      c,
      void 0,
      t.error,
      K(this, ke).variables,
      K(this, ke).context
    ))), this.listeners.forEach((d) => {
      d(K(this, ke));
    });
  });
}, ys);
function mo(e, t) {
  const r = gs(t), [a] = E.useState(
    () => new vo(
      r,
      e
    )
  );
  E.useEffect(() => {
    a.setOptions(e);
  }, [a, e]);
  const n = E.useSyncExternalStore(
    E.useCallback(
      (i) => a.subscribe(ps.batchCalls(i)),
      [a]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), s = E.useCallback(
    (i, o) => {
      a.mutate(i, o).catch(yo);
    },
    [a]
  );
  if (n.error && Ji(a.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: s, mutateAsync: n.mutate };
}
function yo() {
}
function kd(e, t, r) {
  let a;
  typeof e == "string" && typeof t == "string" ? a = {
    url: t,
    method: e,
    ...r
  } : typeof e == "string" ? a = {
    url: e,
    ...t
  } : a = e;
  const n = E.useMemo(() => qi(a.url, {
    encode: encodeURIComponent
  }), [a.url]), s = E.useMemo(() => Gi(a.url).reduce((w, S) => typeof S != "string" ? [...w, S.name] : w, []), [a.url]), i = Ki(), {
    wrapPayload: o = !0,
    syncQueryCache: c = !1,
    ...l
  } = a, d = gs();
  return mo({
    ...l,
    mutationFn: async (v) => {
      const w = n(Ie.pick(v, ...s)), S = Ie.omit(v, ...s), F = Ie.isEmpty(S) ? void 0 : o ? {
        data: S
      } : S, {
        data: R
      } = await i.request({
        url: w,
        method: a.method || "POST",
        data: F
      });
      return R;
    },
    onSuccess: (v, w, S) => {
      var F;
      if (c) {
        const R = n(Ie.pick(w, ...s));
        d.setQueriesData({
          queryKey: [R]
        }, (j) => ({
          ...j,
          data: [v.data]
        }));
      }
      (F = l.onSuccess) == null || F.call(l, v, w, S);
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
const D = q.arrayToEnum([
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
]), lt = (e) => {
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
]), po = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ze extends Error {
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
Ze.create = (e) => new Ze(e);
const rr = (e, t) => {
  let r;
  switch (e.code) {
    case p.invalid_type:
      e.received === D.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
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
let Ds = rr;
function go(e) {
  Ds = e;
}
function Br() {
  return Ds;
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
}, bo = [];
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
class _e {
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
    return _e.mergeObjectSync(t, a);
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
}), Os = (e) => ({ status: "dirty", value: e }), Oe = (e) => ({ status: "valid", value: e }), Ua = (e) => e.status === "aborted", za = (e) => e.status === "dirty", ar = (e) => e.status === "valid", zr = (e) => typeof Promise < "u" && e instanceof Promise;
var N;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(N || (N = {}));
class Ge {
  constructor(t, r, a, n) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = a, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Zn = (e, t) => {
  if (ar(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Ze(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function L(e) {
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
    return lt(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: lt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new _e(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: lt(t.data),
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
      parsedType: lt(t)
    }, s = this._parseSync({ data: t, path: n.path, parent: n });
    return Zn(n, s);
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
      parsedType: lt(t)
    }, n = this._parse({ data: t, path: a.path, parent: a }), s = await (zr(n) ? n : Promise.resolve(n));
    return Zn(a, s);
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
    return new Ye({
      schema: this,
      typeName: I.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return at.create(this, this._def);
  }
  nullable() {
    return Tt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return $e.create(this, this._def);
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
    return new Ye({
      ...L(this._def),
      schema: this,
      typeName: I.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new hr({
      ...L(this._def),
      innerType: this,
      defaultValue: r,
      typeName: I.ZodDefault
    });
  }
  brand() {
    return new Ss({
      typeName: I.ZodBranded,
      type: this,
      ...L(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Qr({
      ...L(this._def),
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
const _o = /^c[^\s-]{8,}$/i, wo = /^[a-z][a-z0-9]*$/, xo = /^[0-9A-HJKMNP-TV-Z]{26}$/, ko = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Do = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Oo = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ia;
const To = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, So = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Eo = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Co(e, t) {
  return !!((t === "v4" || !t) && To.test(e) || (t === "v6" || !t) && So.test(e));
}
class Fe extends Z {
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
    const a = new _e();
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
        Do.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "email",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "emoji")
        Ia || (Ia = new RegExp(Oo, "u")), Ia.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "emoji",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "uuid")
        ko.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "uuid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid")
        _o.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "cuid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid2")
        wo.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          validation: "cuid2",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "ulid")
        xo.test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
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
        }), a.dirty()) : s.kind === "datetime" ? Eo(s).test(t.data) || (n = this._getOrReturnCtx(t, n), T(n, {
          code: p.invalid_string,
          validation: "datetime",
          message: s.message
        }), a.dirty()) : s.kind === "ip" ? Co(t.data, s.version) || (n = this._getOrReturnCtx(t, n), T(n, {
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
      ...N.errToObj(a)
    });
  }
  _addCheck(t) {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...N.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...N.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...N.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...N.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...N.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...N.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...N.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...N.errToObj(t) });
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
      ...N.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...N.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...N.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...N.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...N.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...N.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...N.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...N.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, N.errToObj(t));
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
    ...L(e)
  });
};
function No(e, t) {
  const r = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, n = r > a ? r : a, s = parseInt(e.toFixed(n).replace(".", "")), i = parseInt(t.toFixed(n).replace(".", ""));
  return s % i / Math.pow(10, n);
}
class ht extends Z {
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
    const n = new _e();
    for (const s of this._def.checks)
      s.kind === "int" ? q.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), T(a, {
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
      }), n.dirty()) : s.kind === "multipleOf" ? No(t.data, s.value) !== 0 && (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), T(a, {
        code: p.not_finite,
        message: s.message
      }), n.dirty()) : q.assertNever(s);
    return { status: n.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, N.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, N.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, N.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, N.toString(r));
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
          message: N.toString(n)
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
  int(t) {
    return this._addCheck({
      kind: "int",
      message: N.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: N.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: N.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: N.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: N.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: N.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: N.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: N.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: N.toString(t)
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
ht.create = (e) => new ht({
  checks: [],
  typeName: I.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...L(e)
});
class vt extends Z {
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
    const n = new _e();
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
      }), n.dirty()) : q.assertNever(s);
    return { status: n.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, N.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, N.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, N.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, N.toString(r));
  }
  setLimit(t, r, a, n) {
    return new vt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: a,
          message: N.toString(n)
        }
      ]
    });
  }
  _addCheck(t) {
    return new vt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: N.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: N.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: N.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: N.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: N.toString(r)
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
vt.create = (e) => {
  var t;
  return new vt({
    checks: [],
    typeName: I.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...L(e)
  });
};
class nr extends Z {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== D.boolean) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.boolean,
        received: a.parsedType
      }), P;
    }
    return Oe(t.data);
  }
}
nr.create = (e) => new nr({
  typeName: I.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...L(e)
});
class Dt extends Z {
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
    const a = new _e();
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
      }), a.dirty()) : q.assertNever(s);
    return {
      status: a.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Dt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: N.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: N.toString(r)
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
Dt.create = (e) => new Dt({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: I.ZodDate,
  ...L(e)
});
class Hr extends Z {
  _parse(t) {
    if (this._getType(t) !== D.symbol) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.symbol,
        received: a.parsedType
      }), P;
    }
    return Oe(t.data);
  }
}
Hr.create = (e) => new Hr({
  typeName: I.ZodSymbol,
  ...L(e)
});
class sr extends Z {
  _parse(t) {
    if (this._getType(t) !== D.undefined) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.undefined,
        received: a.parsedType
      }), P;
    }
    return Oe(t.data);
  }
}
sr.create = (e) => new sr({
  typeName: I.ZodUndefined,
  ...L(e)
});
class ir extends Z {
  _parse(t) {
    if (this._getType(t) !== D.null) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.null,
        received: a.parsedType
      }), P;
    }
    return Oe(t.data);
  }
}
ir.create = (e) => new ir({
  typeName: I.ZodNull,
  ...L(e)
});
class Bt extends Z {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Oe(t.data);
  }
}
Bt.create = (e) => new Bt({
  typeName: I.ZodAny,
  ...L(e)
});
class xt extends Z {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Oe(t.data);
  }
}
xt.create = (e) => new xt({
  typeName: I.ZodUnknown,
  ...L(e)
});
class nt extends Z {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return T(r, {
      code: p.invalid_type,
      expected: D.never,
      received: r.parsedType
    }), P;
  }
}
nt.create = (e) => new nt({
  typeName: I.ZodNever,
  ...L(e)
});
class qr extends Z {
  _parse(t) {
    if (this._getType(t) !== D.undefined) {
      const a = this._getOrReturnCtx(t);
      return T(a, {
        code: p.invalid_type,
        expected: D.void,
        received: a.parsedType
      }), P;
    }
    return Oe(t.data);
  }
}
qr.create = (e) => new qr({
  typeName: I.ZodVoid,
  ...L(e)
});
class $e extends Z {
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
      return Promise.all([...r.data].map((i, o) => n.type._parseAsync(new Ge(r, i, r.path, o)))).then((i) => _e.mergeArray(a, i));
    const s = [...r.data].map((i, o) => n.type._parseSync(new Ge(r, i, r.path, o)));
    return _e.mergeArray(a, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new $e({
      ...this._def,
      minLength: { value: t, message: N.toString(r) }
    });
  }
  max(t, r) {
    return new $e({
      ...this._def,
      maxLength: { value: t, message: N.toString(r) }
    });
  }
  length(t, r) {
    return new $e({
      ...this._def,
      exactLength: { value: t, message: N.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
$e.create = (e, t) => new $e({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: I.ZodArray,
  ...L(t)
});
function Vt(e) {
  if (e instanceof se) {
    const t = {};
    for (const r in e.shape) {
      const a = e.shape[r];
      t[r] = at.create(Vt(a));
    }
    return new se({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof $e ? new $e({
      ...e._def,
      type: Vt(e.element)
    }) : e instanceof at ? at.create(Vt(e.unwrap())) : e instanceof Tt ? Tt.create(Vt(e.unwrap())) : e instanceof Qe ? Qe.create(e.items.map((t) => Vt(t))) : e;
}
class se extends Z {
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
    if (this._getType(t) !== D.object) {
      const l = this._getOrReturnCtx(t);
      return T(l, {
        code: p.invalid_type,
        expected: D.object,
        received: l.parsedType
      }), P;
    }
    const { status: a, ctx: n } = this._processInputParams(t), { shape: s, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof nt && this._def.unknownKeys === "strip"))
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
    if (this._def.catchall instanceof nt) {
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
    }).then((l) => _e.mergeObjectSync(a, l)) : _e.mergeObjectSync(a, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return N.errToObj, new se({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, a) => {
          var n, s, i, o;
          const c = (i = (s = (n = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(n, r, a).message) !== null && i !== void 0 ? i : a.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = N.errToObj(t).message) !== null && o !== void 0 ? o : c
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
    return q.objectKeys(t).forEach((a) => {
      t[a] && this.shape[a] && (r[a] = this.shape[a]);
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return q.objectKeys(this.shape).forEach((a) => {
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
    return q.objectKeys(this.shape).forEach((a) => {
      const n = this.shape[a];
      t && !t[a] ? r[a] = n : r[a] = n.optional();
    }), new se({
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
        for (; s instanceof at; )
          s = s._def.innerType;
        r[a] = s;
      }
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ts(q.objectKeys(this.shape));
  }
}
se.create = (e, t) => new se({
  shape: () => e,
  unknownKeys: "strip",
  catchall: nt.create(),
  typeName: I.ZodObject,
  ...L(t)
});
se.strictCreate = (e, t) => new se({
  shape: () => e,
  unknownKeys: "strict",
  catchall: nt.create(),
  typeName: I.ZodObject,
  ...L(t)
});
se.lazycreate = (e, t) => new se({
  shape: e,
  unknownKeys: "strip",
  catchall: nt.create(),
  typeName: I.ZodObject,
  ...L(t)
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
      const i = s.map((o) => new Ze(o.ctx.common.issues));
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
      const o = i.map((c) => new Ze(c));
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
  ...L(t)
});
const $r = (e) => e instanceof lr ? $r(e.schema) : e instanceof Ye ? $r(e.innerType()) : e instanceof dr ? [e.value] : e instanceof mt ? e.options : e instanceof fr ? Object.keys(e.enum) : e instanceof hr ? $r(e._def.innerType) : e instanceof sr ? [void 0] : e instanceof ir ? [null] : null;
class ua extends Z {
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
      ...L(a)
    });
  }
}
function Ha(e, t) {
  const r = lt(e), a = lt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === D.object && a === D.object) {
    const n = q.objectKeys(t), s = q.objectKeys(e).filter((o) => n.indexOf(o) !== -1), i = { ...e, ...t };
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
class cr extends Z {
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
  ...L(r)
});
class Qe extends Z {
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
    return a.common.async ? Promise.all(s).then((i) => _e.mergeArray(r, i)) : _e.mergeArray(r, s);
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
    ...L(t)
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
    return a.common.async ? _e.mergeObjectAsync(r, n) : _e.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, a) {
    return r instanceof Z ? new ur({
      keyType: t,
      valueType: r,
      typeName: I.ZodRecord,
      ...L(a)
    }) : new ur({
      keyType: Fe.create(),
      valueType: t,
      typeName: I.ZodRecord,
      ...L(r)
    });
  }
}
class Gr extends Z {
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
  ...L(r)
});
class Ot extends Z {
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
    return new Ot({
      ...this._def,
      minSize: { value: t, message: N.toString(r) }
    });
  }
  max(t, r) {
    return new Ot({
      ...this._def,
      maxSize: { value: t, message: N.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ot.create = (e, t) => new Ot({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: I.ZodSet,
  ...L(t)
});
class $t extends Z {
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
      return Oe(async function(...c) {
        const l = new Ze([]), d = await o._def.args.parseAsync(c, s).catch((w) => {
          throw l.addIssue(a(c, w)), l;
        }), y = await Reflect.apply(i, this, d);
        return await o._def.returns._def.type.parseAsync(y, s).catch((w) => {
          throw l.addIssue(n(y, w)), l;
        });
      });
    } else {
      const o = this;
      return Oe(function(...c) {
        const l = o._def.args.safeParse(c, s);
        if (!l.success)
          throw new Ze([a(c, l.error)]);
        const d = Reflect.apply(i, this, l.data), y = o._def.returns.safeParse(d, s);
        if (!y.success)
          throw new Ze([n(d, y.error)]);
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
      args: Qe.create(t).rest(xt.create())
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
      args: t || Qe.create([]).rest(xt.create()),
      returns: r || xt.create(),
      typeName: I.ZodFunction,
      ...L(a)
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
  ...L(t)
});
class dr extends Z {
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
  ...L(t)
});
function Ts(e, t) {
  return new mt({
    values: e,
    typeName: I.ZodEnum,
    ...L(t)
  });
}
class mt extends Z {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), a = this._def.values;
      return T(r, {
        expected: q.joinValues(a),
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
    return Oe(t.data);
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
    return mt.create(t);
  }
  exclude(t) {
    return mt.create(this.options.filter((r) => !t.includes(r)));
  }
}
mt.create = Ts;
class fr extends Z {
  _parse(t) {
    const r = q.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(t);
    if (a.parsedType !== D.string && a.parsedType !== D.number) {
      const n = q.objectValues(r);
      return T(a, {
        expected: q.joinValues(n),
        received: a.parsedType,
        code: p.invalid_type
      }), P;
    }
    if (r.indexOf(t.data) === -1) {
      const n = q.objectValues(r);
      return T(a, {
        received: a.data,
        code: p.invalid_enum_value,
        options: n
      }), P;
    }
    return Oe(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
fr.create = (e, t) => new fr({
  values: e,
  typeName: I.ZodNativeEnum,
  ...L(t)
});
class Ut extends Z {
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
    return Oe(a.then((n) => this._def.type.parseAsync(n, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Ut.create = (e, t) => new Ut({
  type: e,
  typeName: I.ZodPromise,
  ...L(t)
});
class Ye extends Z {
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
    q.assertNever(n);
  }
}
Ye.create = (e, t, r) => new Ye({
  schema: e,
  typeName: I.ZodEffects,
  effect: t,
  ...L(r)
});
Ye.createWithPreprocess = (e, t, r) => new Ye({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: I.ZodEffects,
  ...L(r)
});
class at extends Z {
  _parse(t) {
    return this._getType(t) === D.undefined ? Oe(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
at.create = (e, t) => new at({
  innerType: e,
  typeName: I.ZodOptional,
  ...L(t)
});
class Tt extends Z {
  _parse(t) {
    return this._getType(t) === D.null ? Oe(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Tt.create = (e, t) => new Tt({
  innerType: e,
  typeName: I.ZodNullable,
  ...L(t)
});
class hr extends Z {
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
  ...L(t)
});
class Qr extends Z {
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
          return new Ze(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new Ze(a.common.issues);
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
  ...L(t)
});
class Jr extends Z {
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
  ...L(e)
});
const Ao = Symbol("zod_brand");
class Ss extends Z {
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
        return s.status === "aborted" ? P : s.status === "dirty" ? (r.dirty(), Os(s.value)) : this._def.out._parseAsync({
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
class Kr extends Z {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return ar(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Kr.create = (e, t) => new Kr({
  innerType: e,
  typeName: I.ZodReadonly,
  ...L(t)
});
const Es = (e, t = {}, r) => e ? Bt.create().superRefine((a, n) => {
  var s, i;
  if (!e(a)) {
    const o = typeof t == "function" ? t(a) : typeof t == "string" ? { message: t } : t, c = (i = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && i !== void 0 ? i : !0, l = typeof o == "string" ? { message: o } : o;
    n.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Bt.create(), Io = {
  object: se.lazycreate
};
var I;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(I || (I = {}));
const Ro = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Es((r) => r instanceof e, t), Cs = Fe.create, Ns = ht.create, Mo = Jr.create, Po = vt.create, As = nr.create, Vo = Dt.create, Lo = Hr.create, jo = sr.create, Fo = ir.create, Zo = Bt.create, $o = xt.create, Wo = nt.create, Yo = qr.create, Bo = $e.create, Uo = se.create, zo = se.strictCreate, Ho = or.create, qo = ua.create, Go = cr.create, Qo = Qe.create, Jo = ur.create, Ko = Gr.create, Xo = Ot.create, ec = $t.create, tc = lr.create, rc = dr.create, ac = mt.create, nc = fr.create, sc = Ut.create, $n = Ye.create, ic = at.create, oc = Tt.create, cc = Ye.createWithPreprocess, uc = wr.create, lc = () => Cs().optional(), dc = () => Ns().optional(), fc = () => As().optional(), hc = {
  string: (e) => Fe.create({ ...e, coerce: !0 }),
  number: (e) => ht.create({ ...e, coerce: !0 }),
  boolean: (e) => nr.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => vt.create({ ...e, coerce: !0 }),
  date: (e) => Dt.create({ ...e, coerce: !0 })
}, vc = P;
var Wn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: rr,
  setErrorMap: go,
  getErrorMap: Br,
  makeIssue: Ur,
  EMPTY_PATH: bo,
  addIssueToContext: T,
  ParseStatus: _e,
  INVALID: P,
  DIRTY: Os,
  OK: Oe,
  isAborted: Ua,
  isDirty: za,
  isValid: ar,
  isAsync: zr,
  get util() {
    return q;
  },
  get objectUtil() {
    return Ba;
  },
  ZodParsedType: D,
  getParsedType: lt,
  ZodType: Z,
  ZodString: Fe,
  ZodNumber: ht,
  ZodBigInt: vt,
  ZodBoolean: nr,
  ZodDate: Dt,
  ZodSymbol: Hr,
  ZodUndefined: sr,
  ZodNull: ir,
  ZodAny: Bt,
  ZodUnknown: xt,
  ZodNever: nt,
  ZodVoid: qr,
  ZodArray: $e,
  ZodObject: se,
  ZodUnion: or,
  ZodDiscriminatedUnion: ua,
  ZodIntersection: cr,
  ZodTuple: Qe,
  ZodRecord: ur,
  ZodMap: Gr,
  ZodSet: Ot,
  ZodFunction: $t,
  ZodLazy: lr,
  ZodLiteral: dr,
  ZodEnum: mt,
  ZodNativeEnum: fr,
  ZodPromise: Ut,
  ZodEffects: Ye,
  ZodTransformer: Ye,
  ZodOptional: at,
  ZodNullable: Tt,
  ZodDefault: hr,
  ZodCatch: Qr,
  ZodNaN: Jr,
  BRAND: Ao,
  ZodBranded: Ss,
  ZodPipeline: wr,
  ZodReadonly: Kr,
  custom: Es,
  Schema: Z,
  ZodSchema: Z,
  late: Io,
  get ZodFirstPartyTypeKind() {
    return I;
  },
  coerce: hc,
  any: Zo,
  array: Bo,
  bigint: Po,
  boolean: As,
  date: Vo,
  discriminatedUnion: qo,
  effect: $n,
  enum: ac,
  function: ec,
  instanceof: Ro,
  intersection: Go,
  lazy: tc,
  literal: rc,
  map: Ko,
  nan: Mo,
  nativeEnum: nc,
  never: Wo,
  null: Fo,
  nullable: oc,
  number: Ns,
  object: Uo,
  oboolean: fc,
  onumber: dc,
  optional: ic,
  ostring: lc,
  pipeline: uc,
  preprocess: cc,
  promise: sc,
  record: Jo,
  set: Xo,
  strictObject: zo,
  string: Cs,
  symbol: Lo,
  transformer: $n,
  tuple: Qo,
  undefined: jo,
  union: Ho,
  unknown: $o,
  void: Yo,
  NEVER: vc,
  ZodIssueCode: p,
  quotelessJson: po,
  ZodError: Ze
});
const Dd = ({
  children: e,
  className: t,
  form: r
}) => {
  const a = r.formState.errors;
  return /* @__PURE__ */ We("form", { className: t, onSubmit: r.onSubmit, children: [
    a.root && /* @__PURE__ */ We(ro, { severity: "error", children: [
      /* @__PURE__ */ C(ao, { children: a.root.message }),
      a.root.fields && /* @__PURE__ */ C("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(a.root.fields).map(([n, {
        message: s
      }]) => /* @__PURE__ */ C("li", { css: {}, children: s }, n)) })
    ] }),
    e
  ] });
};
var xr = (e) => e.type === "checkbox", Lt = (e) => e instanceof Date, De = (e) => e == null;
const Is = (e) => typeof e == "object";
var ye = (e) => !De(e) && !Array.isArray(e) && Is(e) && !Lt(e), Rs = (e) => ye(e) && e.target ? xr(e.target) ? e.target.checked : e.target.value : e, mc = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Ms = (e, t) => e.has(mc(t)), yc = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ye(t) && t.hasOwnProperty("isPrototypeOf");
}, cn = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ve(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(cn && (e instanceof Blob || e instanceof FileList)) && (r || ye(e)))
    if (t = r ? [] : {}, !r && !yc(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = Ve(e[a]));
  else
    return e;
  return t;
}
var kr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], de = (e) => e === void 0, x = (e, t, r) => {
  if (!t || !ye(e))
    return r;
  const a = kr(t.split(/[,[\].]+?/)).reduce((n, s) => De(n) ? n : n[s], e);
  return de(a) || a === e ? de(e[t]) ? r : e[t] : a;
}, Le = (e) => typeof e == "boolean";
const Xr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, je = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, et = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, pc = b.createContext(null), un = () => b.useContext(pc);
var Ps = (e, t, r, a = !0) => {
  const n = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(n, s, {
      get: () => {
        const i = s;
        return t._proxyFormState[i] !== je.all && (t._proxyFormState[i] = !a || je.all), r && (r[i] = !0), e[i];
      }
    });
  return n;
}, Ae = (e) => ye(e) && !Object.keys(e).length, Vs = (e, t, r, a) => {
  r(e);
  const { name: n, ...s } = e;
  return Ae(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((i) => t[i] === (!a || je.all));
}, Wr = (e) => Array.isArray(e) ? e : [e], Ls = (e, t, r) => !e || !t || e === t || Wr(e).some((a) => a && (r ? a === t : a.startsWith(t) || t.startsWith(a)));
function ln(e) {
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
function gc(e) {
  const t = un(), { control: r = t.control, disabled: a, name: n, exact: s } = e || {}, [i, o] = b.useState(r._formState), c = b.useRef(!0), l = b.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = b.useRef(n);
  return d.current = n, ln({
    disabled: a,
    next: (y) => c.current && Ls(d.current, y.name, s) && Vs(y, l.current, r._updateFormState) && o({
      ...r._formState,
      ...y
    }),
    subject: r._subjects.state
  }), b.useEffect(() => (c.current = !0, l.current.isValid && r._updateValid(!0), () => {
    c.current = !1;
  }), [r]), Ps(i, r, l.current, !1);
}
var qe = (e) => typeof e == "string", js = (e, t, r, a, n) => qe(e) ? (a && t.watch.add(e), x(r, e, n)) : Array.isArray(e) ? e.map((s) => (a && t.watch.add(s), x(r, s))) : (a && (t.watchAll = !0), r);
function bc(e) {
  const t = un(), { control: r = t.control, name: a, defaultValue: n, disabled: s, exact: i } = e || {}, o = b.useRef(a);
  o.current = a, ln({
    disabled: s,
    subject: r._subjects.values,
    next: (d) => {
      Ls(o.current, d.name, i) && l(Ve(js(o.current, r._names, d.values || r._formValues, !1, n)));
    }
  });
  const [c, l] = b.useState(r._getWatch(a, n));
  return b.useEffect(() => r._removeUnmounted()), c;
}
var dn = (e) => /^\w*$/.test(e), Fs = (e) => kr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), G = (e, t, r) => {
  let a = -1;
  const n = dn(t) ? [t] : Fs(t), s = n.length, i = s - 1;
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
function _c(e) {
  const t = un(), { name: r, disabled: a, control: n = t.control, shouldUnregister: s } = e, i = Ms(n._names.array, r), o = bc({
    control: n,
    name: r,
    defaultValue: x(n._formValues, r, x(n._defaultValues, r, e.defaultValue)),
    exact: !0
  }), c = gc({
    control: n,
    name: r
  }), l = b.useRef(n.register(r, {
    ...e.rules,
    value: o,
    disabled: e.disabled
  }));
  return l.current = n.register(r, e.rules), b.useEffect(() => {
    const d = n._options.shouldUnregister || s, y = (v, w) => {
      const S = x(n._fields, v);
      S && (S._f.mount = w);
    };
    if (y(r, !0), d) {
      const v = Ve(x(n._options.defaultValues, r));
      G(n._defaultValues, r, v), de(x(n._formValues, r)) && G(n._formValues, r, v);
    }
    return () => {
      (i ? d && !n._state.action : d) ? n.unregister(r) : y(r, !1);
    };
  }, [r, n, i, s]), b.useEffect(() => {
    x(n._fields, r) && n._updateDisabledField({
      disabled: a,
      fields: n._fields,
      name: r,
      value: x(n._fields, r)._f.value
    });
  }, [a, r, n]), {
    field: {
      name: r,
      value: o,
      ...Le(a) || Le(c.disabled) ? { disabled: c.disabled || a } : {},
      onChange: b.useCallback((d) => l.current.onChange({
        target: {
          value: Rs(d),
          name: r
        },
        type: Xr.CHANGE
      }), [r]),
      onBlur: b.useCallback(() => l.current.onBlur({
        target: {
          value: x(n._formValues, r),
          name: r
        },
        type: Xr.BLUR
      }), [r, n]),
      ref: (d) => {
        const y = x(n._fields, r);
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
        get: () => !!x(c.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!x(c.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!x(c.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => x(c.errors, r)
      }
    })
  };
}
const wc = (e) => e.render(_c(e));
var Zs = (e, t, r, a, n) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [a]: n || !0
  }
} : {}, Yn = (e) => ({
  isOnSubmit: !e || e === je.onSubmit,
  isOnBlur: e === je.onBlur,
  isOnChange: e === je.onChange,
  isOnAll: e === je.all,
  isOnTouch: e === je.onTouched
}), Bn = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))));
const tr = (e, t, r, a) => {
  for (const n of r || Object.keys(e)) {
    const s = x(e, n);
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
var xc = (e, t, r) => {
  const a = kr(x(e, r));
  return G(a, "root", t[r]), G(e, r, a), e;
}, fn = (e) => e.type === "file", ft = (e) => typeof e == "function", ea = (e) => {
  if (!cn)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Yr = (e) => qe(e), hn = (e) => e.type === "radio", ta = (e) => e instanceof RegExp;
const Un = {
  value: !1,
  isValid: !1
}, zn = { value: !0, isValid: !0 };
var $s = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !de(e[0].attributes.value) ? de(e[0].value) || e[0].value === "" ? zn : { value: e[0].value, isValid: !0 } : zn
    ) : Un;
  }
  return Un;
};
const Hn = {
  isValid: !1,
  value: null
};
var Ws = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Hn) : Hn;
function qn(e, t, r = "validate") {
  if (Yr(e) || Array.isArray(e) && e.every(Yr) || Le(e) && !e)
    return {
      type: r,
      message: Yr(e) ? e : "",
      ref: t
    };
}
var Mt = (e) => ye(e) && !ta(e) ? e : {
  value: e,
  message: ""
}, Gn = async (e, t, r, a, n) => {
  const { ref: s, refs: i, required: o, maxLength: c, minLength: l, min: d, max: y, pattern: v, validate: w, name: S, valueAsNumber: F, mount: R, disabled: j } = e._f, k = x(t, S);
  if (!R || j)
    return {};
  const W = i ? i[0] : s, H = (M) => {
    a && W.reportValidity && (W.setCustomValidity(Le(M) ? "" : M || ""), W.reportValidity());
  }, z = {}, V = hn(s), ie = xr(s), ae = V || ie, be = (F || fn(s)) && de(s.value) && de(k) || ea(s) && s.value === "" || k === "" || Array.isArray(k) && !k.length, te = Zs.bind(null, S, r, z), ve = (M, Y, B, oe = et.maxLength, J = et.minLength) => {
    const pe = M ? Y : B;
    z[S] = {
      type: M ? oe : J,
      message: pe,
      ref: s,
      ...te(M ? oe : J, pe)
    };
  };
  if (n ? !Array.isArray(k) || !k.length : o && (!ae && (be || De(k)) || Le(k) && !k || ie && !$s(i).isValid || V && !Ws(i).isValid)) {
    const { value: M, message: Y } = Yr(o) ? { value: !!o, message: o } : Mt(o);
    if (M && (z[S] = {
      type: et.required,
      message: Y,
      ref: W,
      ...te(et.required, Y)
    }, !r))
      return H(Y), z;
  }
  if (!be && (!De(d) || !De(y))) {
    let M, Y;
    const B = Mt(y), oe = Mt(d);
    if (!De(k) && !isNaN(k)) {
      const J = s.valueAsNumber || k && +k;
      De(B.value) || (M = J > B.value), De(oe.value) || (Y = J < oe.value);
    } else {
      const J = s.valueAsDate || new Date(k), pe = (ce) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ce), Re = s.type == "time", fe = s.type == "week";
      qe(B.value) && k && (M = Re ? pe(k) > pe(B.value) : fe ? k > B.value : J > new Date(B.value)), qe(oe.value) && k && (Y = Re ? pe(k) < pe(oe.value) : fe ? k < oe.value : J < new Date(oe.value));
    }
    if ((M || Y) && (ve(!!M, B.message, oe.message, et.max, et.min), !r))
      return H(z[S].message), z;
  }
  if ((c || l) && !be && (qe(k) || n && Array.isArray(k))) {
    const M = Mt(c), Y = Mt(l), B = !De(M.value) && k.length > +M.value, oe = !De(Y.value) && k.length < +Y.value;
    if ((B || oe) && (ve(B, M.message, Y.message), !r))
      return H(z[S].message), z;
  }
  if (v && !be && qe(k)) {
    const { value: M, message: Y } = Mt(v);
    if (ta(M) && !k.match(M) && (z[S] = {
      type: et.pattern,
      message: Y,
      ref: s,
      ...te(et.pattern, Y)
    }, !r))
      return H(Y), z;
  }
  if (w) {
    if (ft(w)) {
      const M = await w(k, t), Y = qn(M, W);
      if (Y && (z[S] = {
        ...Y,
        ...te(et.validate, Y.message)
      }, !r))
        return H(Y.message), z;
    } else if (ye(w)) {
      let M = {};
      for (const Y in w) {
        if (!Ae(M) && !r)
          break;
        const B = qn(await w[Y](k, t), W, Y);
        B && (M = {
          ...B,
          ...te(Y, B.message)
        }, H(B.message), r && (z[S] = M));
      }
      if (!Ae(M) && (z[S] = {
        ref: W,
        ...M
      }, !r))
        return z;
    }
  }
  return H(!0), z;
};
function kc(e, t) {
  const r = t.slice(0, -1).length;
  let a = 0;
  for (; a < r; )
    e = de(e) ? a++ : e[t[a++]];
  return e;
}
function Dc(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !de(e[t]))
      return !1;
  return !0;
}
function ge(e, t) {
  const r = Array.isArray(t) ? t : dn(t) ? [t] : Fs(t), a = r.length === 1 ? e : kc(e, r), n = r.length - 1, s = r[n];
  return a && delete a[s], n !== 0 && (ye(a) && Ae(a) || Array.isArray(a) && Dc(a)) && ge(e, r.slice(0, -1)), e;
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
}, ra = (e) => De(e) || !Is(e);
function wt(e, t) {
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
      if (Lt(s) && Lt(i) || ye(s) && ye(i) || Array.isArray(s) && Array.isArray(i) ? !wt(s, i) : s !== i)
        return !1;
    }
  }
  return !0;
}
var Ys = (e) => e.type === "select-multiple", Oc = (e) => hn(e) || xr(e), Ma = (e) => ea(e) && e.isConnected, Bs = (e) => {
  for (const t in e)
    if (ft(e[t]))
      return !0;
  return !1;
};
function aa(e, t = {}) {
  const r = Array.isArray(e);
  if (ye(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || ye(e[a]) && !Bs(e[a]) ? (t[a] = Array.isArray(e[a]) ? [] : {}, aa(e[a], t[a])) : De(e[a]) || (t[a] = !0);
  return t;
}
function Us(e, t, r) {
  const a = Array.isArray(e);
  if (ye(e) || a)
    for (const n in e)
      Array.isArray(e[n]) || ye(e[n]) && !Bs(e[n]) ? de(t) || ra(r[n]) ? r[n] = Array.isArray(e[n]) ? aa(e[n], []) : { ...aa(e[n]) } : Us(e[n], De(t) ? {} : t[n], r[n]) : r[n] = !wt(e[n], t[n]);
  return r;
}
var Pa = (e, t) => Us(e, t, aa(t)), zs = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: a }) => de(e) ? e : t ? e === "" ? NaN : e && +e : r && qe(e) ? new Date(e) : a ? a(e) : e;
function Va(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return fn(t) ? t.files : hn(t) ? Ws(e.refs).value : Ys(t) ? [...t.selectedOptions].map(({ value: r }) => r) : xr(t) ? $s(e.refs).value : zs(de(t.value) ? e.ref.value : t.value, e);
}
var Tc = (e, t, r, a) => {
  const n = {};
  for (const s of e) {
    const i = x(t, s);
    i && G(n, s, i._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: n,
    shouldUseNativeValidation: a
  };
}, Kt = (e) => de(e) ? e : ta(e) ? e.source : ye(e) ? ta(e.value) ? e.value.source : e.value : e, Sc = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Qn(e, t, r) {
  const a = x(e, r);
  if (a || dn(r))
    return {
      error: a,
      name: r
    };
  const n = r.split(".");
  for (; n.length; ) {
    const s = n.join("."), i = x(t, s), o = x(e, s);
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
var Ec = (e, t, r, a, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(t || e) : (r ? a.isOnBlur : n.isOnBlur) ? !e : (r ? a.isOnChange : n.isOnChange) ? e : !0, Cc = (e, t) => !kr(x(e, t)).length && ge(e, t);
const Nc = {
  mode: je.onSubmit,
  reValidateMode: je.onChange,
  shouldFocusError: !0
};
function Ac(e = {}, t) {
  let r = {
    ...Nc,
    ...e
  }, a = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ft(r.defaultValues),
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
  }, w = e.resetOptions && e.resetOptions.keepDirtyValues, S = Yn(r.mode), F = Yn(r.reValidateMode), R = r.criteriaMode === je.all, j = (u) => (f) => {
    clearTimeout(d), d = setTimeout(u, f);
  }, k = async (u) => {
    if (y.isValid || u) {
      const f = r.resolver ? Ae((await te()).errors) : await M(n, !0);
      f !== a.isValid && v.state.next({
        isValid: f
      });
    }
  }, W = (u) => y.isValidating && v.state.next({
    isValidating: u
  }), H = (u, f = [], h, O, _ = !0, g = !0) => {
    if (O && h) {
      if (o.action = !0, g && Array.isArray(x(n, u))) {
        const A = h(x(n, u), O.argA, O.argB);
        _ && G(n, u, A);
      }
      if (g && Array.isArray(x(a.errors, u))) {
        const A = h(x(a.errors, u), O.argA, O.argB);
        _ && G(a.errors, u, A), Cc(a.errors, u);
      }
      if (y.touchedFields && g && Array.isArray(x(a.touchedFields, u))) {
        const A = h(x(a.touchedFields, u), O.argA, O.argB);
        _ && G(a.touchedFields, u, A);
      }
      y.dirtyFields && (a.dirtyFields = Pa(s, i)), v.state.next({
        name: u,
        isDirty: B(u, f),
        dirtyFields: a.dirtyFields,
        errors: a.errors,
        isValid: a.isValid
      });
    } else
      G(i, u, f);
  }, z = (u, f) => {
    G(a.errors, u, f), v.state.next({
      errors: a.errors
    });
  }, V = (u) => {
    a.errors = u, v.state.next({
      errors: a.errors,
      isValid: !1
    });
  }, ie = (u, f, h, O) => {
    const _ = x(n, u);
    if (_) {
      const g = x(i, u, de(h) ? x(s, u) : h);
      de(g) || O && O.defaultChecked || f ? G(i, u, f ? g : Va(_._f)) : pe(u, g), o.mount && k();
    }
  }, ae = (u, f, h, O, _) => {
    let g = !1, A = !1;
    const Q = {
      name: u
    };
    if (!h || O) {
      y.isDirty && (A = a.isDirty, a.isDirty = Q.isDirty = B(), g = A !== Q.isDirty);
      const ue = wt(x(s, u), f);
      A = x(a.dirtyFields, u), ue ? ge(a.dirtyFields, u) : G(a.dirtyFields, u, !0), Q.dirtyFields = a.dirtyFields, g = g || y.dirtyFields && A !== !ue;
    }
    if (h) {
      const ue = x(a.touchedFields, u);
      ue || (G(a.touchedFields, u, h), Q.touchedFields = a.touchedFields, g = g || y.touchedFields && ue !== h);
    }
    return g && _ && v.state.next(Q), g ? Q : {};
  }, be = (u, f, h, O) => {
    const _ = x(a.errors, u), g = y.isValid && Le(f) && a.isValid !== f;
    if (e.delayError && h ? (l = j(() => z(u, h)), l(e.delayError)) : (clearTimeout(d), l = null, h ? G(a.errors, u, h) : ge(a.errors, u)), (h ? !wt(_, h) : _) || !Ae(O) || g) {
      const A = {
        ...O,
        ...g && Le(f) ? { isValid: f } : {},
        errors: a.errors,
        name: u
      };
      a = {
        ...a,
        ...A
      }, v.state.next(A);
    }
    W(!1);
  }, te = async (u) => r.resolver(i, r.context, Tc(u || c.mount, n, r.criteriaMode, r.shouldUseNativeValidation)), ve = async (u) => {
    const { errors: f } = await te(u);
    if (u)
      for (const h of u) {
        const O = x(f, h);
        O ? G(a.errors, h, O) : ge(a.errors, h);
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
        const { _f: g, ...A } = _;
        if (g) {
          const Q = c.array.has(g.name), ue = await Gn(_, i, R, r.shouldUseNativeValidation && !f, Q);
          if (ue[g.name] && (h.valid = !1, f))
            break;
          !f && (x(ue, g.name) ? Q ? xc(a.errors, ue, g.name) : G(a.errors, g.name, ue[g.name]) : ge(a.errors, g.name));
        }
        A && await M(A, f, h);
      }
    }
    return h.valid;
  }, Y = () => {
    for (const u of c.unMount) {
      const f = x(n, u);
      f && (f._f.refs ? f._f.refs.every((h) => !Ma(h)) : !Ma(f._f.ref)) && X(u);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, B = (u, f) => (u && f && G(i, u, f), !wt(Be(), s)), oe = (u, f, h) => js(u, c, {
    ...o.mount ? i : de(f) ? s : qe(u) ? { [u]: f } : f
  }, h, f), J = (u) => kr(x(o.mount ? i : s, u, e.shouldUnregister ? x(s, u, []) : [])), pe = (u, f, h = {}) => {
    const O = x(n, u);
    let _ = f;
    if (O) {
      const g = O._f;
      g && (!g.disabled && G(i, u, zs(f, g)), _ = ea(g.ref) && De(f) ? "" : f, Ys(g.ref) ? [...g.ref.options].forEach((A) => A.selected = _.includes(A.value)) : g.refs ? xr(g.ref) ? g.refs.length > 1 ? g.refs.forEach((A) => (!A.defaultChecked || !A.disabled) && (A.checked = Array.isArray(_) ? !!_.find((Q) => Q === A.value) : _ === A.value)) : g.refs[0] && (g.refs[0].checked = !!_) : g.refs.forEach((A) => A.checked = A.value === _) : fn(g.ref) ? g.ref.value = "" : (g.ref.value = _, g.ref.type || v.values.next({
        name: u,
        values: { ...i }
      })));
    }
    (h.shouldDirty || h.shouldTouch) && ae(u, _, h.shouldTouch, h.shouldDirty, !0), h.shouldValidate && Ce(u);
  }, Re = (u, f, h) => {
    for (const O in f) {
      const _ = f[O], g = `${u}.${O}`, A = x(n, g);
      (c.array.has(u) || !ra(_) || A && !A._f) && !Lt(_) ? Re(g, _, h) : pe(g, _, h);
    }
  }, fe = (u, f, h = {}) => {
    const O = x(n, u), _ = c.array.has(u), g = Ve(f);
    G(i, u, g), _ ? (v.array.next({
      name: u,
      values: { ...i }
    }), (y.isDirty || y.dirtyFields) && h.shouldDirty && v.state.next({
      name: u,
      dirtyFields: Pa(s, i),
      isDirty: B(u, g)
    })) : O && !O._f && !De(g) ? Re(u, g, h) : pe(u, g, h), Bn(u, c) && v.state.next({ ...a }), v.values.next({
      name: u,
      values: { ...i }
    }), !o.mount && t();
  }, ce = async (u) => {
    const f = u.target;
    let h = f.name, O = !0;
    const _ = x(n, h), g = () => f.type ? Va(_._f) : Rs(u), A = (Q) => {
      O = Number.isNaN(Q) || Q === x(i, h, Q);
    };
    if (_) {
      let Q, ue;
      const ct = g(), Xe = u.type === Xr.BLUR || u.type === Xr.FOCUS_OUT, Cr = !Sc(_._f) && !r.resolver && !x(a.errors, h) && !_._f.deps || Ec(Xe, x(a.touchedFields, h), a.isSubmitted, F, S), Qt = Bn(h, c, Xe);
      G(i, h, ct), Xe ? (_._f.onBlur && _._f.onBlur(u), l && l(0)) : _._f.onChange && _._f.onChange(u);
      const ut = ae(h, ct, Xe, !1), Nr = !Ae(ut) || Qt;
      if (!Xe && v.values.next({
        name: h,
        type: u.type,
        values: { ...i }
      }), Cr)
        return y.isValid && k(), Nr && v.state.next({ name: h, ...Qt ? {} : ut });
      if (!Xe && Qt && v.state.next({ ...a }), W(!0), r.resolver) {
        const { errors: Ar } = await te([h]);
        if (A(ct), O) {
          const Ir = Qn(a.errors, n, h), Jt = Qn(Ar, n, Ir.name || h);
          Q = Jt.error, h = Jt.name, ue = Ae(Ar);
        }
      } else
        Q = (await Gn(_, i, R, r.shouldUseNativeValidation))[h], A(ct), O && (Q ? ue = !1 : y.isValid && (ue = await M(n, !0)));
      O && (_._f.deps && Ce(_._f.deps), be(h, ue, Q, ut));
    }
  }, Ee = (u, f) => {
    if (x(a.errors, f) && u.focus)
      return u.focus(), 1;
  }, Ce = async (u, f = {}) => {
    let h, O;
    const _ = Wr(u);
    if (W(!0), r.resolver) {
      const g = await ve(de(u) ? u : _);
      h = Ae(g), O = u ? !_.some((A) => x(g, A)) : h;
    } else
      u ? (O = (await Promise.all(_.map(async (g) => {
        const A = x(n, g);
        return await M(A && A._f ? { [g]: A } : A);
      }))).every(Boolean), !(!O && !a.isValid) && k()) : O = h = await M(n);
    return v.state.next({
      ...!qe(u) || y.isValid && h !== a.isValid ? {} : { name: u },
      ...r.resolver || !u ? { isValid: h } : {},
      errors: a.errors,
      isValidating: !1
    }), f.shouldFocus && !O && tr(n, Ee, u ? _ : c.mount), O;
  }, Be = (u) => {
    const f = {
      ...s,
      ...o.mount ? i : {}
    };
    return de(u) ? f : qe(u) ? x(f, u) : u.map((h) => x(f, h));
  }, Je = (u, f) => ({
    invalid: !!x((f || a).errors, u),
    isDirty: !!x((f || a).dirtyFields, u),
    isTouched: !!x((f || a).touchedFields, u),
    error: x((f || a).errors, u)
  }), gt = (u) => {
    u && Wr(u).forEach((f) => ge(a.errors, f)), v.state.next({
      errors: u ? a.errors : {}
    });
  }, Ue = (u, f, h) => {
    const O = (x(n, u, { _f: {} })._f || {}).ref;
    G(a.errors, u, {
      ...f,
      ref: O
    }), v.state.next({
      name: u,
      errors: a.errors,
      isValid: !1
    }), h && h.shouldFocus && O && O.focus && O.focus();
  }, U = (u, f) => ft(u) ? v.values.subscribe({
    next: (h) => u(oe(void 0, f), h)
  }) : oe(u, f, !0), X = (u, f = {}) => {
    for (const h of u ? Wr(u) : c.mount)
      c.mount.delete(h), c.array.delete(h), f.keepValue || (ge(n, h), ge(i, h)), !f.keepError && ge(a.errors, h), !f.keepDirty && ge(a.dirtyFields, h), !f.keepTouched && ge(a.touchedFields, h), !r.shouldUnregister && !f.keepDefaultValue && ge(s, h);
    v.values.next({
      values: { ...i }
    }), v.state.next({
      ...a,
      ...f.keepDirty ? { isDirty: B() } : {}
    }), !f.keepIsValid && k();
  }, we = ({ disabled: u, name: f, field: h, fields: O, value: _ }) => {
    if (Le(u)) {
      const g = u ? void 0 : de(_) ? Va(h ? h._f : x(O, f)._f) : _;
      G(i, f, g), ae(f, g, !1, !1, !0);
    }
  }, Ke = (u, f = {}) => {
    let h = x(n, u);
    const O = Le(f.disabled);
    return G(n, u, {
      ...h || {},
      _f: {
        ...h && h._f ? h._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...f
      }
    }), c.mount.add(u), h ? we({
      field: h,
      disabled: f.disabled,
      name: u
    }) : ie(u, !0, f.value), {
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
      onChange: ce,
      onBlur: ce,
      ref: (_) => {
        if (_) {
          Ke(u, f), h = x(n, u);
          const g = de(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, A = Oc(g), Q = h._f.refs || [];
          if (A ? Q.find((ue) => ue === g) : g === h._f.ref)
            return;
          G(n, u, {
            _f: {
              ...h._f,
              ...A ? {
                refs: [
                  ...Q.filter(Ma),
                  g,
                  ...Array.isArray(x(s, u)) ? [{}] : []
                ],
                ref: { type: g.type, name: u }
              } : { ref: g }
            }
          }), ie(u, !1, void 0, g);
        } else
          h = x(n, u, {}), h._f && (h._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(Ms(c.array, u) && o.action) && c.unMount.add(u);
      }
    };
  }, it = () => r.shouldFocusError && tr(n, Ee, c.mount), At = (u) => {
    Le(u) && (v.state.next({ disabled: u }), tr(n, (f, h) => {
      let O = u;
      const _ = x(n, h);
      _ && Le(_._f.disabled) && (O || (O = _._f.disabled)), f.disabled = O;
    }, 0, !1));
  }, It = (u, f) => async (h) => {
    h && (h.preventDefault && h.preventDefault(), h.persist && h.persist());
    let O = Ve(i);
    if (v.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: _, values: g } = await te();
      a.errors = _, O = g;
    } else
      await M(n);
    ge(a.errors, "root"), Ae(a.errors) ? (v.state.next({
      errors: {}
    }), await u(O, h)) : (f && await f({ ...a.errors }, h), it(), setTimeout(it)), v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ae(a.errors),
      submitCount: a.submitCount + 1,
      errors: a.errors
    });
  }, he = (u, f = {}) => {
    x(n, u) && (de(f.defaultValue) ? fe(u, x(s, u)) : (fe(u, f.defaultValue), G(s, u, f.defaultValue)), f.keepTouched || ge(a.touchedFields, u), f.keepDirty || (ge(a.dirtyFields, u), a.isDirty = f.defaultValue ? B(u, x(s, u)) : B()), f.keepError || (ge(a.errors, u), y.isValid && k()), v.state.next({ ...a }));
  }, ot = (u, f = {}) => {
    const h = u ? Ve(u) : s, O = Ve(h), _ = u && !Ae(u) ? O : s;
    if (f.keepDefaultValues || (s = h), !f.keepValues) {
      if (f.keepDirtyValues || w)
        for (const g of c.mount)
          x(a.dirtyFields, g) ? G(_, g, x(i, g)) : fe(g, x(_, g));
      else {
        if (cn && de(u))
          for (const g of c.mount) {
            const A = x(n, g);
            if (A && A._f) {
              const Q = Array.isArray(A._f.refs) ? A._f.refs[0] : A._f.ref;
              if (ea(Q)) {
                const ue = Q.closest("form");
                if (ue) {
                  ue.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      i = e.shouldUnregister ? f.keepDefaultValues ? Ve(s) : {} : Ve(_), v.array.next({
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
      isDirty: f.keepDirty ? a.isDirty : !!(f.keepDefaultValues && !wt(u, s)),
      isSubmitted: f.keepIsSubmitted ? a.isSubmitted : !1,
      dirtyFields: f.keepDirtyValues ? a.dirtyFields : f.keepDefaultValues && u ? Pa(s, u) : {},
      touchedFields: f.keepTouched ? a.touchedFields : {},
      errors: f.keepErrors ? a.errors : {},
      isSubmitSuccessful: f.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, xe = (u, f) => ot(ft(u) ? u(i) : u, f);
  return {
    control: {
      register: Ke,
      unregister: X,
      getFieldState: Je,
      handleSubmit: It,
      setError: Ue,
      _executeSchema: te,
      _getWatch: oe,
      _getDirty: B,
      _updateValid: k,
      _removeUnmounted: Y,
      _updateFieldArray: H,
      _updateDisabledField: we,
      _getFieldArray: J,
      _reset: ot,
      _resetDefaultValues: () => ft(r.defaultValues) && r.defaultValues().then((u) => {
        xe(u, r.resetOptions), v.state.next({
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
      _setErrors: V,
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
    trigger: Ce,
    register: Ke,
    handleSubmit: It,
    watch: U,
    setValue: fe,
    getValues: Be,
    reset: xe,
    resetField: he,
    clearErrors: gt,
    unregister: X,
    setError: Ue,
    setFocus: (u, f = {}) => {
      const h = x(n, u), O = h && h._f;
      if (O) {
        const _ = O.refs ? O.refs[0] : O.ref;
        _.focus && (_.focus(), f.shouldSelect && _.select());
      }
    },
    getFieldState: Je
  };
}
function Ic(e = {}) {
  const t = b.useRef(), r = b.useRef(), [a, n] = b.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ft(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: ft(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Ac(e, () => n((i) => ({ ...i }))),
    formState: a
  });
  const s = t.current.control;
  return s._options = e, ln({
    subject: s._subjects.state,
    next: (i) => {
      Vs(i, s._proxyFormState, s._updateFormState, !0) && n({ ...s._formState });
    }
  }), b.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), b.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const i = s._getDirty();
      i !== a.isDirty && s._subjects.state.next({
        isDirty: i
      });
    }
  }, [s, a.isDirty]), b.useEffect(() => {
    e.values && !wt(e.values, r.current) ? (s._reset(e.values, s._options.resetOptions), r.current = e.values, n((i) => ({ ...i }))) : s._resetDefaultValues();
  }, [e.values, s]), b.useEffect(() => {
    e.errors && s._setErrors(e.errors);
  }, [e.errors, s]), b.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), t.current.formState = Ps(a, s), t.current;
}
const Od = ({
  render: e,
  ...t
}) => /* @__PURE__ */ C(wc, { ...t, render: ({
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
var Hs = {};
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
})(Hs);
const Rc = ({
  helperText: e,
  label: t,
  error: r,
  children: a,
  ...n
}, s) => (e = r || e, /* @__PURE__ */ We("div", { ref: s, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, t && {
  paddingTop: "1.5rem"
}], ...n, children: [
  a,
  t && /* @__PURE__ */ C("label", { css: [{
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
  e && /* @__PURE__ */ We("div", { css: [{
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
    r && /* @__PURE__ */ C(rt, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: Hs.faTriangleExclamation }),
    e
  ] })
] })), la = E.forwardRef(Rc);
var Jn = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var a = x(r, t);
    e.setCustomValidity(a && a.message || ""), e.reportValidity();
  }
}, qs = function(e, t) {
  var r = function(n) {
    var s = t.fields[n];
    s && s.ref && "reportValidity" in s.ref ? Jn(s.ref, n, e) : s.refs && s.refs.forEach(function(i) {
      return Jn(i, n, e);
    });
  };
  for (var a in t.fields)
    r(a);
}, Mc = function(e, t) {
  t.shouldUseNativeValidation && qs(e, t);
  var r = {};
  for (var a in e) {
    var n = x(t.fields, a), s = Object.assign(e[a] || {}, { ref: n && n.ref });
    if (Vc(t.names || Object.keys(e), a)) {
      var i = Object.assign({}, Pc(x(r, a)));
      G(i, "root", s), G(r, a, i);
    } else
      G(r, a, s);
  }
  return r;
}, Pc = function(e) {
  return Array.isArray(e) ? e.filter(Boolean) : [];
}, Vc = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, Lc = function(e, t) {
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
      r[i] = Zs(i, t, r, n, l ? [].concat(l, a.message) : a.message);
    }
    e.shift();
  }
  return r;
}, jc = function(e, t, r) {
  return r === void 0 && (r = {}), function(a, n, s) {
    try {
      return Promise.resolve(function(i, o) {
        try {
          var c = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](a, t)).then(function(l) {
            return s.shouldUseNativeValidation && qs({}, s), { errors: {}, values: r.raw ? a : l };
          });
        } catch (l) {
          return o(l);
        }
        return c && c.then ? c.then(void 0, o) : c;
      }(0, function(i) {
        if (function(o) {
          return o.errors != null;
        }(i))
          return { values: {}, errors: Mc(Lc(i.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
};
const Fc = ({
  schema: e,
  mode: t = "onChange",
  reValidateMode: r = "onChange",
  onValid: a,
  onInvalid: n,
  ...s
} = {}) => {
  const i = Ic({
    mode: t,
    reValidateMode: r,
    resolver: e ? jc(e) : void 0,
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
}, Td = ({
  onValid: e,
  context: t,
  mutation: r,
  defaultValues: a,
  schema: n,
  transformSendData: s,
  ...i
}) => {
  const o = Fc({
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
var Gs = {};
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
})(Gs);
const Zc = (e, t) => {
  const [r, a] = E.useState(!1);
  return /* @__PURE__ */ C(io, { ref: t, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ C(no, { position: "end", children: /* @__PURE__ */ C(so, { size: "small", edge: "end", onClick: () => a((n) => !n), children: /* @__PURE__ */ C(rt, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, ws`
                  width: 18px;
                `], icon: r ? Xi.faEyeSlash : Gs.faEye }) }) })
  }, ...e });
};
E.forwardRef(Zc);
const $c = E.forwardRef(({
  placeholder: e = "Введите",
  ...t
}, r) => /* @__PURE__ */ C("input", { ref: r, placeholder: e, ...t })), Wc = ({
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
  inputComponent: d = $c,
  ...y
}, v) => {
  const [w, S] = b.useState(!1), {
    getRootProps: F,
    getInputProps: R
  } = oo({
    error: !!i,
    onBlur: n,
    onFocus: s,
    disabled: c,
    ...y
  }), {
    onBlur: j,
    onFocus: k,
    ...W
  } = R();
  W.ref = on(W.ref, v), W.value = W.value || "";
  const H = E.useCallback((ie) => {
    c || (S(!0), k == null || k(ie));
  }, [c, S, k]), z = E.useCallback((ie) => {
    S(!1), j == null || j(ie);
  }, [S, j]);
  let V = /* @__PURE__ */ We("div", { className: r, ref: a, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, i ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, w && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : w ? {
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
    l && /* @__PURE__ */ We("div", { css: {
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
      /* @__PURE__ */ C(rt, { icon: bs.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ C(d, { css: [{
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
    }], onFocus: H, onBlur: z, ...y, ...W, type: l ? "hidden" : y.type || "text" }),
    o && !c && /* @__PURE__ */ C("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: o })
  ] });
  return e && (V = /* @__PURE__ */ C(la, { label: e, error: i, helperText: t, ...F(), children: V })), V;
}, Dr = E.forwardRef(Wc);
var qa = {}, Qs = {};
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
})(Qs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Qs;
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
})(qa);
const Js = "id", Yc = ({
  className: e,
  isLoading: t = !1,
  inputLoading: r = !1,
  idField: a = Js,
  displayField: n,
  options: s,
  multiple: i,
  open: o,
  label: c,
  error: l,
  onOpen: d,
  onClose: y,
  optionRender: v,
  onChange: w,
  onInputChange: S,
  onSelect: F,
  disabled: R,
  placeholder: j = "Выберите",
  value: k,
  allowClear: W = !0,
  autoComplete: H = !0,
  autoSelect: z = !1,
  afterItems: V,
  ...ie
}, ae) => {
  const be = E.useCallback((U) => n && n in U ? U[n] : JSON.stringify(U), [n]), te = E.useMemo(() => i ? (k == null ? void 0 : k.map((U) => s.find((X) => X[a] == U)).filter((U) => !!U)) || [] : s.find((U) => U[a] == k) || null, [k, s]), {
    value: ve,
    getRootProps: M,
    getInputProps: Y,
    getListboxProps: B,
    getOptionProps: oe,
    groupedOptions: J,
    getClearProps: pe,
    setAnchorEl: Re,
    anchorEl: fe,
    popupOpen: ce,
    getTagProps: Ee
  } = co({
    options: s,
    autoComplete: H,
    autoSelect: z,
    multiple: i,
    open: o,
    value: te,
    getOptionLabel: be,
    isOptionEqualToValue: (U, X) => a ? U[a] === X[a] : U === X,
    onInputChange: S,
    onOpen: d,
    onClose: y,
    disabled: R,
    unstable_classNamePrefix: "c",
    onChange: (U, X) => {
      w && (Array.isArray(X) ? w(X.map((we) => we[a])) : w(X && typeof X == "object" ? X[a] : null)), F == null || F(X);
    }
  }), Ce = on(ae, Re), Be = fe && J.length > 0 ? /* @__PURE__ */ C("ul", { css: {
    width: "100%"
  }, ...B(), children: J.map((U, X) => /* @__PURE__ */ C(b.Fragment, { children: "group" in U ? /* @__PURE__ */ C(Pn, {}) : /* @__PURE__ */ C("li", { css: [{
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
  }, ws`
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
                  `], ...oe({
    option: U,
    index: X
  }), children: v ? v(U) : be(U) }) }, a in U ? U[a] : X)) }) : t ? /* @__PURE__ */ C("div", { css: {
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
  }, children: "Загрузка..." }) : /* @__PURE__ */ C("div", { children: "не фига не найдено, создать?" }), Je = E.useMemo(() => i ? ve && ve.length > 0 : !!ve, [ve, i]), gt = Y(), Ue = /* @__PURE__ */ We(Pn, { children: [
    i && (ve == null ? void 0 : ve.length) > 0 && /* @__PURE__ */ C("div", { css: {
      marginBottom: "0.25rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }, children: ve == null ? void 0 : ve.map((U, X) => {
      const {
        onDelete: we,
        key: Ke,
        ...it
      } = Ee({
        index: X
      });
      return /* @__PURE__ */ We("div", { ...it, css: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
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
      }, children: [
        /* @__PURE__ */ C("span", { children: v ? v(U) : be(U) }),
        /* @__PURE__ */ C("button", { onClick: we, children: /* @__PURE__ */ C(rt, { icon: qa.faTimes, css: {
          "--tw-text-opacity": "1",
          color: "rgb(156 163 175 / var(--tw-text-opacity))"
        } }) })
      ] }, Ke);
    }) }),
    /* @__PURE__ */ C(Dr, { ...ie, error: l, ...gt, inputWrapRef: Ce, placeholder: j, isLoading: r, afterItems: [V && /* @__PURE__ */ C(b.Fragment, { children: V }, "after-items"), Je && W && !i && /* @__PURE__ */ C("button", { ...pe(), onMouseDown: (U) => {
      U.preventDefault(), U.stopPropagation();
    }, children: /* @__PURE__ */ C(rt, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: qa.faTimes }) }, "clear"), /* @__PURE__ */ C("button", { css: [{
      pointerEvents: "none"
    }], children: /* @__PURE__ */ C(rt, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, l && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: eo.faCaretDown }) }, "arrow")] }),
    fe && /* @__PURE__ */ C(xs, { open: ce, anchorEl: fe, children: /* @__PURE__ */ C("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: fe.offsetWidth
    }], children: Be }) })
  ] });
  return c ? /* @__PURE__ */ C(la, { label: c, error: l, className: e, ...M(), children: Ue }) : Ue;
}, Ks = E.forwardRef(Yc), Bc = ({
  dictionary: e,
  open: t = !1,
  value: r,
  filterOptions: a,
  ...n
}, s) => {
  const [i, o] = E.useState(t), c = to(e, {
    enabled: i || !!r
  });
  E.useEffect(() => {
    o(t);
  }, [t]);
  const l = E.useMemo(() => a && c.data ? a(c.data) : c.data, [c.data, a]);
  return /* @__PURE__ */ C(
    Ks,
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
      inputLoading: c.isLoading && !Ie.isEmpty(r),
      disabled: c.isLoading && !Ie.isEmpty(r) || n.disabled
    }
  );
}, Sd = E.forwardRef(Bc);
var Uc = "Expected a function", Xs = "__lodash_hash_undefined__", zc = "[object Function]", Hc = "[object GeneratorFunction]", qc = /[\\^$.*+?()[\]{}|]/g, Gc = /^\[object .+?Constructor\]$/, Qc = typeof Pr == "object" && Pr && Pr.Object === Object && Pr, Jc = typeof self == "object" && self && self.Object === Object && self, ei = Qc || Jc || Function("return this")();
function Kc(e, t) {
  return e == null ? void 0 : e[t];
}
function Xc(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
var eu = Array.prototype, tu = Function.prototype, ti = Object.prototype, La = ei["__core-js_shared__"], Kn = function() {
  var e = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), ri = tu.toString, vn = ti.hasOwnProperty, ru = ti.toString, au = RegExp(
  "^" + ri.call(vn).replace(qc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), nu = eu.splice, su = ai(ei, "Map"), vr = ai(Object, "create");
function St(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function iu() {
  this.__data__ = vr ? vr(null) : {};
}
function ou(e) {
  return this.has(e) && delete this.__data__[e];
}
function cu(e) {
  var t = this.__data__;
  if (vr) {
    var r = t[e];
    return r === Xs ? void 0 : r;
  }
  return vn.call(t, e) ? t[e] : void 0;
}
function uu(e) {
  var t = this.__data__;
  return vr ? t[e] !== void 0 : vn.call(t, e);
}
function lu(e, t) {
  var r = this.__data__;
  return r[e] = vr && t === void 0 ? Xs : t, this;
}
St.prototype.clear = iu;
St.prototype.delete = ou;
St.prototype.get = cu;
St.prototype.has = uu;
St.prototype.set = lu;
function zt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function du() {
  this.__data__ = [];
}
function fu(e) {
  var t = this.__data__, r = da(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : nu.call(t, r, 1), !0;
}
function hu(e) {
  var t = this.__data__, r = da(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function vu(e) {
  return da(this.__data__, e) > -1;
}
function mu(e, t) {
  var r = this.__data__, a = da(r, e);
  return a < 0 ? r.push([e, t]) : r[a][1] = t, this;
}
zt.prototype.clear = du;
zt.prototype.delete = fu;
zt.prototype.get = hu;
zt.prototype.has = vu;
zt.prototype.set = mu;
function Et(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function yu() {
  this.__data__ = {
    hash: new St(),
    map: new (su || zt)(),
    string: new St()
  };
}
function pu(e) {
  return fa(this, e).delete(e);
}
function gu(e) {
  return fa(this, e).get(e);
}
function bu(e) {
  return fa(this, e).has(e);
}
function _u(e, t) {
  return fa(this, e).set(e, t), this;
}
Et.prototype.clear = yu;
Et.prototype.delete = pu;
Et.prototype.get = gu;
Et.prototype.has = bu;
Et.prototype.set = _u;
function da(e, t) {
  for (var r = e.length; r--; )
    if (Ou(e[r][0], t))
      return r;
  return -1;
}
function wu(e) {
  if (!ni(e) || ku(e))
    return !1;
  var t = Tu(e) || Xc(e) ? au : Gc;
  return t.test(Du(e));
}
function fa(e, t) {
  var r = e.__data__;
  return xu(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ai(e, t) {
  var r = Kc(e, t);
  return wu(r) ? r : void 0;
}
function xu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ku(e) {
  return !!Kn && Kn in e;
}
function Du(e) {
  if (e != null) {
    try {
      return ri.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
function mn(e, t) {
  if (typeof e != "function" || t && typeof t != "function")
    throw new TypeError(Uc);
  var r = function() {
    var a = arguments, n = t ? t.apply(this, a) : a[0], s = r.cache;
    if (s.has(n))
      return s.get(n);
    var i = e.apply(this, a);
    return r.cache = s.set(n, i), i;
  };
  return r.cache = new (mn.Cache || Et)(), r;
}
mn.Cache = Et;
function Ou(e, t) {
  return e === t || e !== e && t !== t;
}
function Tu(e) {
  var t = ni(e) ? ru.call(e) : "";
  return t == zc || t == Hc;
}
function ni(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
var Su = mn;
const si = /* @__PURE__ */ _s(Su);
function ii(e) {
  return JSON.stringify(e);
}
function Eu(e) {
  return typeof e == "string";
}
function Cu(e, t, r) {
  return r.indexOf(e) === t;
}
function Nu(e) {
  return e.toLowerCase() === e;
}
function Xn(e) {
  return e.indexOf(",") === -1 ? e : e.split(",");
}
function Ga(e) {
  if (!e)
    return e;
  if (e === "C" || e === "posix" || e === "POSIX")
    return "en-US";
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0], r = t === void 0 ? "" : t;
    return Ga(r);
  }
  if (e.indexOf("@") !== -1) {
    var a = e.split("@")[0], r = a === void 0 ? "" : a;
    return Ga(r);
  }
  if (e.indexOf("-") === -1 || !Nu(e))
    return e;
  var n = e.split("-"), s = n[0], i = n[1], o = i === void 0 ? "" : i;
  return "".concat(s, "-").concat(o.toUpperCase());
}
function Au(e) {
  var t = e === void 0 ? {} : e, r = t.useFallbackLocale, a = r === void 0 ? !0 : r, n = t.fallbackLocale, s = n === void 0 ? "en-US" : n, i = [];
  if (typeof navigator < "u") {
    for (var o = navigator.languages || [], c = [], l = 0, d = o; l < d.length; l++) {
      var y = d[l];
      c = c.concat(Xn(y));
    }
    var v = navigator.language, w = v && Xn(v);
    i = i.concat(c, w);
  }
  return a && i.push(s), i.filter(Eu).map(Ga).filter(Cu);
}
var Iu = si(Au, ii);
function Ru(e) {
  return Iu(e)[0] || null;
}
var oi = si(Ru, ii);
function st(e, t, r) {
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
function yt(e) {
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
var Mu = st(re, Ht, -100), ci = st(re, Ht, 100), yn = Or(ci), Pu = st(re, yn, -100), ui = Tr(Ht, yn);
function pt(e) {
  var t = re(e), r = t + (-t + 1) % 10, a = /* @__PURE__ */ new Date();
  return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var li = st(re, pt, -10), pn = st(re, pt, 10), va = Or(pn), di = st(re, va, -10), fi = Tr(pt, va);
function qt(e) {
  var t = re(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var hi = st(re, qt, -1), gn = st(re, qt, 1), ma = Or(gn), vi = st(re, ma, -1), Vu = Tr(qt, ma);
function bn(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var s = re(a), i = yt(a) + n, o = /* @__PURE__ */ new Date();
    return o.setFullYear(s, i, 1), o.setHours(0, 0, 0, 0), e(o);
  };
}
function Ct(e) {
  var t = re(e), r = yt(e), a = /* @__PURE__ */ new Date();
  return a.setFullYear(t, r, 1), a.setHours(0, 0, 0, 0), a;
}
var mi = bn(Ct, -1), _n = bn(Ct, 1), Sr = Or(_n), yi = bn(Sr, -1), Lu = Tr(Ct, Sr);
function ju(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var s = re(a), i = yt(a), o = ha(a) + n, c = /* @__PURE__ */ new Date();
    return c.setFullYear(s, i, o), c.setHours(0, 0, 0, 0), e(c);
  };
}
function Er(e) {
  var t = re(e), r = yt(e), a = ha(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, r, a), n.setHours(0, 0, 0, 0), n;
}
var Fu = ju(Er, 1), wn = Or(Fu), Zu = Tr(Er, wn);
function pi(e) {
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
}, $u = (Xt = {}, Xt[ee.GREGORY] = [
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
], Xt), xn = [0, 1, 2, 3, 4, 5, 6], ja = /* @__PURE__ */ new Map();
function Wu(e) {
  return function(r, a) {
    var n = r || oi();
    ja.has(n) || ja.set(n, /* @__PURE__ */ new Map());
    var s = ja.get(n);
    return s.has(e) || s.set(e, new Intl.DateTimeFormat(n || void 0, e).format), s.get(e)(a);
  };
}
function Yu(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function Nt(e) {
  return function(t, r) {
    return Wu(e)(t, Yu(r));
  };
}
var Bu = { day: "numeric" }, Uu = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, zu = { month: "long" }, Hu = {
  month: "long",
  year: "numeric"
}, qu = { weekday: "short" }, Gu = { weekday: "long" }, Qu = { year: "numeric" }, Ju = Nt(Bu), Ku = Nt(Uu), Xu = Nt(zu), gi = Nt(Hu), el = Nt(qu), tl = Nt(Gu), ya = Nt(Qu), rl = xn[0], al = xn[5], es = xn[6];
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
function nl(e) {
  var t = Ht(e);
  return re(t);
}
function sl(e) {
  var t = pt(e);
  return re(t);
}
function Qa(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = re(e), a = yt(e), n = e.getDate() - mr(e, t);
  return new Date(r, a, n);
}
function il(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = t === ee.GREGORY ? ee.GREGORY : ee.ISO_8601, a = Qa(e, t), n = re(e) + 1, s, i;
  do
    s = new Date(n, 0, r === ee.ISO_8601 ? 4 : 1), i = Qa(s, t), n -= 1;
  while (e < i);
  return Math.round((a.getTime() - i.getTime()) / (864e5 * 7)) + 1;
}
function kt(e, t) {
  switch (e) {
    case "century":
      return Ht(t);
    case "decade":
      return pt(t);
    case "year":
      return qt(t);
    case "month":
      return Ct(t);
    case "day":
      return Er(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ol(e, t) {
  switch (e) {
    case "century":
      return Mu(t);
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
function bi(e, t) {
  switch (e) {
    case "century":
      return ci(t);
    case "decade":
      return pn(t);
    case "year":
      return gn(t);
    case "month":
      return _n(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function cl(e, t) {
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
function ul(e, t) {
  switch (e) {
    case "decade":
      return pn(t, 100);
    case "year":
      return gn(t, 10);
    case "month":
      return _n(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function _i(e, t) {
  switch (e) {
    case "century":
      return yn(t);
    case "decade":
      return va(t);
    case "year":
      return ma(t);
    case "month":
      return Sr(t);
    case "day":
      return wn(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ll(e, t) {
  switch (e) {
    case "century":
      return Pu(t);
    case "decade":
      return di(t);
    case "year":
      return vi(t);
    case "month":
      return yi(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function dl(e, t) {
  switch (e) {
    case "decade":
      return di(t, -100);
    case "year":
      return vi(t, -10);
    case "month":
      return yi(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ts(e, t) {
  switch (e) {
    case "century":
      return ui(t);
    case "decade":
      return fi(t);
    case "year":
      return Vu(t);
    case "month":
      return Lu(t);
    case "day":
      return Zu(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function fl(e, t, r) {
  var a = [t, r].sort(function(n, s) {
    return n.getTime() - s.getTime();
  });
  return [kt(e, a[0]), _i(e, a[1])];
}
function wi(e, t, r) {
  return t === void 0 && (t = ya), r.map(function(a) {
    return t(e, a);
  }).join(" – ");
}
function hl(e, t, r) {
  return wi(e, t, ui(r));
}
function xi(e, t, r) {
  return wi(e, t, fi(r));
}
function vl(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function ki(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case ee.ISLAMIC:
    case ee.HEBREW:
      return r === al || r === es;
    case ee.ISO_8601:
    case ee.GREGORY:
      return r === es || r === rl;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var He = "react-calendar__navigation";
function ml(e) {
  var t = e.activeStartDate, r = e.drillUp, a = e.formatMonthYear, n = a === void 0 ? gi : a, s = e.formatYear, i = s === void 0 ? ya : s, o = e.locale, c = e.maxDate, l = e.minDate, d = e.navigationAriaLabel, y = d === void 0 ? "" : d, v = e.navigationAriaLive, w = e.navigationLabel, S = e.next2AriaLabel, F = S === void 0 ? "" : S, R = e.next2Label, j = R === void 0 ? "»" : R, k = e.nextAriaLabel, W = k === void 0 ? "" : k, H = e.nextLabel, z = H === void 0 ? "›" : H, V = e.prev2AriaLabel, ie = V === void 0 ? "" : V, ae = e.prev2Label, be = ae === void 0 ? "«" : ae, te = e.prevAriaLabel, ve = te === void 0 ? "" : te, M = e.prevLabel, Y = M === void 0 ? "‹" : M, B = e.setActiveStartDate, oe = e.showDoubleView, J = e.view, pe = e.views, Re = pe.indexOf(J) > 0, fe = J !== "century", ce = ol(J, t), Ee = fe ? cl(J, t) : void 0, Ce = bi(J, t), Be = fe ? ul(J, t) : void 0, Je = function() {
    if (ce.getFullYear() < 0)
      return !0;
    var he = ll(J, t);
    return l && l >= he;
  }(), gt = fe && function() {
    if (Ee.getFullYear() < 0)
      return !0;
    var he = dl(J, t);
    return l && l >= he;
  }(), Ue = c && c < Ce, U = fe && c && c < Be;
  function X() {
    B(ce, "prev");
  }
  function we() {
    B(Ee, "prev2");
  }
  function Ke() {
    B(Ce, "next");
  }
  function it() {
    B(Be, "next2");
  }
  function At(he) {
    var ot = function() {
      switch (J) {
        case "century":
          return hl(o, i, he);
        case "decade":
          return xi(o, i, he);
        case "year":
          return i(o, he);
        case "month":
          return n(o, he);
        default:
          throw new Error("Invalid view: ".concat(J, "."));
      }
    }();
    return w ? w({
      date: he,
      label: ot,
      locale: o || oi() || void 0,
      view: J
    }) : ot;
  }
  function It() {
    var he = "".concat(He, "__label");
    return b.createElement(
      "button",
      { "aria-label": y, "aria-live": v, className: he, disabled: !Re, onClick: r, style: { flexGrow: 1 }, type: "button" },
      b.createElement("span", { className: "".concat(he, "__labelText ").concat(he, "__labelText--from") }, At(t)),
      oe ? b.createElement(
        b.Fragment,
        null,
        b.createElement("span", { className: "".concat(he, "__divider") }, " – "),
        b.createElement("span", { className: "".concat(he, "__labelText ").concat(he, "__labelText--to") }, At(Ce))
      ) : null
    );
  }
  return b.createElement(
    "div",
    { className: He },
    be !== null && fe ? b.createElement("button", { "aria-label": ie, className: "".concat(He, "__arrow ").concat(He, "__prev2-button"), disabled: gt, onClick: we, type: "button" }, be) : null,
    Y !== null && b.createElement("button", { "aria-label": ve, className: "".concat(He, "__arrow ").concat(He, "__prev-button"), disabled: Je, onClick: X, type: "button" }, Y),
    It(),
    z !== null && b.createElement("button", { "aria-label": W, className: "".concat(He, "__arrow ").concat(He, "__next-button"), disabled: Ue, onClick: Ke, type: "button" }, z),
    j !== null && fe ? b.createElement("button", { "aria-label": F, className: "".concat(He, "__arrow ").concat(He, "__next2-button"), disabled: U, onClick: it, type: "button" }, j) : null
  );
}
var Ft = globalThis && globalThis.__assign || function() {
  return Ft = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ft.apply(this, arguments);
}, yl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function rs(e) {
  return "".concat(e, "%");
}
function kn(e) {
  var t = e.children, r = e.className, a = e.count, n = e.direction, s = e.offset, i = e.style, o = e.wrap, c = yl(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return b.createElement("div", Ft({ className: r, style: Ft({ display: "flex", flexDirection: n, flexWrap: o ? "wrap" : "nowrap" }, i) }, c), b.Children.map(t, function(l, d) {
    var y = s && d === 0 ? rs(100 * s / a) : null;
    return b.cloneElement(l, Ft(Ft({}, l.props), { style: {
      flexBasis: rs(100 / a),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: y,
      marginInlineStart: y,
      marginInlineEnd: 0
    } }));
  }));
}
var pl = function() {
}, gl = pl;
const bl = /* @__PURE__ */ _s(gl);
var Pt;
function _l(e, t, r) {
  return t && t > e ? t : r && r < e ? r : e;
}
function yr(e, t) {
  return t[0] <= e && t[1] >= e;
}
function wl(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function Di(e, t) {
  return yr(e[0], t) || yr(e[1], t);
}
function as(e, t, r) {
  var a = Di(t, e), n = [];
  if (a) {
    n.push(r);
    var s = yr(e[0], t), i = yr(e[1], t);
    s && n.push("".concat(r, "Start")), i && n.push("".concat(r, "End")), s && i && n.push("".concat(r, "BothEnds"));
  }
  return n;
}
function xl(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function kl(e) {
  if (!e)
    throw new Error("args is required");
  var t = e.value, r = e.date, a = e.hover, n = "react-calendar__tile", s = [n];
  if (!r)
    return s;
  var i = /* @__PURE__ */ new Date(), o = function() {
    if (Array.isArray(r))
      return r;
    var w = e.dateType;
    if (!w)
      throw new Error("dateType is required when date is not an array of two dates");
    return ts(w, r);
  }();
  if (yr(i, o) && s.push("".concat(n, "--now")), !t || !xl(t))
    return s;
  var c = function() {
    if (Array.isArray(t))
      return t;
    var w = e.valueType;
    if (!w)
      throw new Error("valueType is required when value is not an array of two dates");
    return ts(w, t);
  }();
  wl(c, o) ? s.push("".concat(n, "--active")) : Di(c, o) && s.push("".concat(n, "--hasActive"));
  var l = as(c, o, "".concat(n, "--range"));
  s.push.apply(s, l);
  var d = Array.isArray(t) ? t : [t];
  if (a && d.length === 1) {
    var y = a > c[0] ? [c[0], a] : [a, c[0]], v = as(y, o, "".concat(n, "--hover"));
    s.push.apply(s, v);
  }
  return s;
}
var Dl = (Pt = {}, Pt[jt.ARABIC] = ee.ISLAMIC, Pt[jt.HEBREW] = ee.HEBREW, Pt[jt.ISO_8601] = ee.ISO_8601, Pt[jt.US] = ee.GREGORY, Pt);
function Ol(e) {
  return e !== void 0 && e in jt;
}
var ns = !1;
function pa(e) {
  if (Ol(e)) {
    var t = Dl[e];
    return bl(ns, 'Specifying calendarType="'.concat(e, '" is deprecated. Use calendarType="').concat(t, '" instead.')), ns = !0, t;
  }
  return e;
}
function ga(e) {
  for (var t = e.className, r = e.count, a = r === void 0 ? 3 : r, n = e.dateTransform, s = e.dateType, i = e.end, o = e.hover, c = e.offset, l = e.renderTile, d = e.start, y = e.step, v = y === void 0 ? 1 : y, w = e.value, S = e.valueType, F = [], R = d; R <= i; R += v) {
    var j = n(R);
    F.push(l({
      classes: kl({
        date: j,
        dateType: s,
        hover: o,
        value: w,
        valueType: S
      }),
      date: j
    }));
  }
  return b.createElement(kn, { className: t, count: a, offset: c, wrap: !0 }, F);
}
function ba(e) {
  var t = e.activeStartDate, r = e.children, a = e.classes, n = e.date, s = e.formatAbbr, i = e.locale, o = e.maxDate, c = e.maxDateTransform, l = e.minDate, d = e.minDateTransform, y = e.onClick, v = e.onMouseOver, w = e.style, S = e.tileClassName, F = e.tileContent, R = e.tileDisabled, j = e.view, k = E.useMemo(function() {
    var H = { activeStartDate: t, date: n, view: j };
    return typeof S == "function" ? S(H) : S;
  }, [t, n, S, j]), W = E.useMemo(function() {
    var H = { activeStartDate: t, date: n, view: j };
    return typeof F == "function" ? F(H) : F;
  }, [t, n, F, j]);
  return b.createElement(
    "button",
    { className: ca(a, k), disabled: l && d(l) > n || o && c(o) < n || R && R({ activeStartDate: t, date: n, view: j }), onClick: y ? function(H) {
      return y(n, H);
    } : void 0, onFocus: v ? function() {
      return v(n);
    } : void 0, onMouseOver: v ? function() {
      return v(n);
    } : void 0, style: w, type: "button" },
    s ? b.createElement("abbr", { "aria-label": s(i, n) }, r) : r,
    W
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
}, Tl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Fa = "react-calendar__century-view__decades__decade";
function Sl(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.currentCentury, n = e.formatYear, s = n === void 0 ? ya : n, i = Tl(e, ["classes", "currentCentury", "formatYear"]), o = i.date, c = i.locale, l = [];
  return r && l.push.apply(l, r), Fa && l.push(Fa), Ht(o).getFullYear() !== a && l.push("".concat(Fa, "--neighboringCentury")), b.createElement(ba, Ja({}, i, { classes: l, maxDateTransform: va, minDateTransform: pt, view: "century" }), xi(c, s, o));
}
var Ka = globalThis && globalThis.__assign || function() {
  return Ka = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ka.apply(this, arguments);
}, ss = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function El(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringCentury, n = e.value, s = e.valueType, i = ss(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), o = nl(t), c = o + (a ? 119 : 99);
  return b.createElement(ga, { className: "react-calendar__century-view__decades", dateTransform: pt, dateType: "decade", end: c, hover: r, renderTile: function(l) {
    var d = l.date, y = ss(l, ["date"]);
    return b.createElement(Sl, Ka({ key: d.getTime() }, i, y, { activeStartDate: t, currentCentury: o, date: d }));
  }, start: o, step: 10, value: n, valueType: s });
}
var is = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, s; a < n; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Cl = Object.values(ee), Nl = Object.values(jt), Xa = ["century", "decade", "year", "month"], Oi = m.oneOf(is(is([], Cl, !0), Nl, !0)), na = m.oneOfType([
  m.string,
  m.arrayOf(m.string)
]), Dn = function(t, r, a) {
  var n = t, s = r, i = n[s];
  if (!i)
    return null;
  if (!(i instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var o = t.maxDate;
  return o && i > o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, minDate cannot be larger than maxDate.")) : null;
}, On = function(t, r, a) {
  var n = t, s = r, i = n[s];
  if (!i)
    return null;
  if (!(i instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var o = t.minDate;
  return o && i < o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof i, "` supplied to `").concat(a, "`, maxDate cannot be smaller than minDate.")) : null;
}, Al = m.oneOfType([
  m.func,
  m.exact({
    current: m.any
  })
]), Il = m.arrayOf(m.oneOfType([m.instanceOf(Date), m.oneOf([null])]).isRequired), Rl = m.oneOfType([
  m.instanceOf(Date),
  m.oneOf([null]),
  Il
]);
m.arrayOf(m.oneOf(Xa));
var sa = function(t, r, a) {
  var n = t, s = r, i = n[s];
  return i !== void 0 && (typeof i != "string" || Xa.indexOf(i) === -1) ? new Error("Invalid prop `".concat(r, "` of value `").concat(i, "` supplied to `").concat(a, "`, expected one of [").concat(Xa.map(function(o) {
    return '"'.concat(o, '"');
  }).join(", "), "].")) : null;
};
sa.isRequired = function(t, r, a, n, s) {
  var i = t, o = r, c = i[o];
  return c ? sa(t, r, a) : new Error("The prop `".concat(r, "` is marked as required in `").concat(a, "`, but its value is `").concat(c, "`."));
};
var Ml = function(e) {
  return m.arrayOf(e);
}, _a = {
  activeStartDate: m.instanceOf(Date).isRequired,
  hover: m.instanceOf(Date),
  locale: m.string,
  maxDate: On,
  minDate: Dn,
  onClick: m.func,
  onMouseOver: m.func,
  tileClassName: m.oneOfType([m.func, na]),
  tileContent: m.oneOfType([m.func, m.node]),
  value: Rl,
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
}, Ti = function(t) {
  function r() {
    return b.createElement(El, pr({}, t));
  }
  return b.createElement("div", { className: "react-calendar__century-view" }, r());
};
Ti.propTypes = pr(pr({}, _a), { showNeighboringCentury: m.bool });
const Pl = Ti;
var en = globalThis && globalThis.__assign || function() {
  return en = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, en.apply(this, arguments);
}, Vl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Za = "react-calendar__decade-view__years__year";
function Ll(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.currentDecade, n = e.formatYear, s = n === void 0 ? ya : n, i = Vl(e, ["classes", "currentDecade", "formatYear"]), o = i.date, c = i.locale, l = [];
  return r && l.push.apply(l, r), Za && l.push(Za), pt(o).getFullYear() !== a && l.push("".concat(Za, "--neighboringDecade")), b.createElement(ba, en({}, i, { classes: l, maxDateTransform: ma, minDateTransform: qt, view: "decade" }), s(c, o));
}
var tn = globalThis && globalThis.__assign || function() {
  return tn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, tn.apply(this, arguments);
}, os = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function jl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringDecade, n = e.value, s = e.valueType, i = os(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), o = sl(t), c = o + (a ? 11 : 9);
  return b.createElement(ga, { className: "react-calendar__decade-view__years", dateTransform: qt, dateType: "year", end: c, hover: r, renderTile: function(l) {
    var d = l.date, y = os(l, ["date"]);
    return b.createElement(Ll, tn({ key: d.getTime() }, i, y, { activeStartDate: t, currentDecade: o, date: d }));
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
}, Si = function(t) {
  function r() {
    return b.createElement(jl, gr({}, t));
  }
  return b.createElement("div", { className: "react-calendar__decade-view" }, r());
};
Si.propTypes = gr(gr({}, _a), { showNeighboringDecade: m.bool });
const Fl = Si;
var rn = globalThis && globalThis.__assign || function() {
  return rn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, rn.apply(this, arguments);
}, Zl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, cs = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, s; a < n; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}, $l = "react-calendar__year-view__months__month";
function Wl(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.formatMonth, n = a === void 0 ? Xu : a, s = e.formatMonthYear, i = s === void 0 ? gi : s, o = Zl(e, ["classes", "formatMonth", "formatMonthYear"]), c = o.date, l = o.locale;
  return b.createElement(ba, rn({}, o, { classes: cs(cs([], r, !0), [$l], !1), formatAbbr: i, maxDateTransform: Sr, minDateTransform: Ct, view: "year" }), n(l, c));
}
var an = globalThis && globalThis.__assign || function() {
  return an = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, an.apply(this, arguments);
}, us = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Yl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.value, n = e.valueType, s = us(e, ["activeStartDate", "hover", "value", "valueType"]), i = 0, o = 11, c = re(t);
  return b.createElement(ga, { className: "react-calendar__year-view__months", dateTransform: function(l) {
    var d = /* @__PURE__ */ new Date();
    return d.setFullYear(c, l, 1), Ct(d);
  }, dateType: "month", end: o, hover: r, renderTile: function(l) {
    var d = l.date, y = us(l, ["date"]);
    return b.createElement(Wl, an({ key: d.getTime() }, s, y, { activeStartDate: t, date: d }));
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
}, Ei = function(t) {
  function r() {
    return b.createElement(Yl, ia({}, t));
  }
  return b.createElement("div", { className: "react-calendar__year-view" }, r());
};
Ei.propTypes = ia({}, _a);
const Bl = Ei;
var nn = globalThis && globalThis.__assign || function() {
  return nn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, nn.apply(this, arguments);
}, Ul = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Lr = "react-calendar__month-view__days__day";
function zl(e) {
  var t = e.calendarType, r = e.classes, a = r === void 0 ? [] : r, n = e.currentMonthIndex, s = e.formatDay, i = s === void 0 ? Ju : s, o = e.formatLongDate, c = o === void 0 ? Ku : o, l = Ul(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), d = pa(t), y = l.date, v = l.locale, w = [];
  return a && w.push.apply(w, a), Lr && w.push(Lr), ki(y, d) && w.push("".concat(Lr, "--weekend")), y.getMonth() !== n && w.push("".concat(Lr, "--neighboringMonth")), b.createElement(ba, nn({}, l, { classes: w, formatAbbr: c, maxDateTransform: wn, minDateTransform: Er, view: "month" }), i(v, y));
}
var sn = globalThis && globalThis.__assign || function() {
  return sn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, sn.apply(this, arguments);
}, ls = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Hl(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.hover, n = e.showFixedNumberOfWeeks, s = e.showNeighboringMonth, i = e.value, o = e.valueType, c = ls(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), l = pa(r), d = re(t), y = yt(t), v = n || s, w = mr(t, l), S = v ? 0 : w, F = (v ? -w : 0) + 1, R = function() {
    if (n)
      return F + 6 * 7 - 1;
    var j = pi(t);
    if (s) {
      var k = /* @__PURE__ */ new Date();
      k.setFullYear(d, y, j), k.setHours(0, 0, 0, 0);
      var W = 7 - mr(k, l) - 1;
      return j + W;
    }
    return j;
  }();
  return b.createElement(ga, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(j) {
    var k = /* @__PURE__ */ new Date();
    return k.setFullYear(d, y, j), Er(k);
  }, dateType: "day", hover: a, end: R, renderTile: function(j) {
    var k = j.date, W = ls(j, ["date"]);
    return b.createElement(zl, sn({ key: k.getTime() }, c, W, { activeStartDate: t, calendarType: r, currentMonthIndex: y, date: k }));
  }, offset: S, start: F, value: i, valueType: o });
}
var Ci = "react-calendar__month-view__weekdays", $a = "".concat(Ci, "__weekday");
function ql(e) {
  for (var t = e.calendarType, r = e.formatShortWeekday, a = r === void 0 ? el : r, n = e.formatWeekday, s = n === void 0 ? tl : n, i = e.locale, o = e.onMouseLeave, c = pa(t), l = /* @__PURE__ */ new Date(), d = Ct(l), y = re(d), v = yt(d), w = [], S = 1; S <= 7; S += 1) {
    var F = new Date(y, v, S - mr(d, c)), R = s(i, F);
    w.push(b.createElement(
      "div",
      { key: S, className: ca($a, vl(F) && "".concat($a, "--current"), ki(F, c) && "".concat($a, "--weekend")) },
      b.createElement("abbr", { "aria-label": R, title: R }, a(i, F).replace(".", ""))
    ));
  }
  return b.createElement(kn, { className: Ci, count: 7, onFocus: o, onMouseOver: o }, w);
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
}, ds = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, fs = "react-calendar__tile";
function Gl(e) {
  var t = e.onClickWeekNumber, r = e.weekNumber, a = b.createElement("span", null, r);
  if (t) {
    var n = e.date, s = e.onClickWeekNumber, i = e.weekNumber, o = ds(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return b.createElement("button", oa({}, o, { className: fs, onClick: function(c) {
      return s(i, n, c);
    }, type: "button" }), a);
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var o = ds(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return b.createElement("div", oa({}, o, { className: fs }), a);
  }
}
function Ql(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.onClickWeekNumber, n = e.onMouseLeave, s = e.showFixedNumberOfWeeks, i = pa(r), o = function() {
    if (s)
      return 6;
    var d = pi(t), y = mr(t, i), v = d - (7 - y);
    return 1 + Math.ceil(v / 7);
  }(), c = function() {
    for (var d = re(t), y = yt(t), v = ha(t), w = [], S = 0; S < o; S += 1)
      w.push(Qa(new Date(d, y, v + S * 7), i));
    return w;
  }(), l = c.map(function(d) {
    return il(d, i);
  });
  return b.createElement(kn, { className: "react-calendar__month-view__weekNumbers", count: o, direction: "column", onFocus: n, onMouseOver: n, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, l.map(function(d, y) {
    var v = c[y];
    if (!v)
      throw new Error("date is not defined");
    return b.createElement(Gl, { key: d, date: v, onClickWeekNumber: a, weekNumber: d });
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
}, Jl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Kl(e) {
  if (e)
    for (var t = 0, r = Object.entries($u); t < r.length; t++) {
      var a = r[t], n = a[0], s = a[1];
      if (s.includes(e))
        return n;
    }
  return ee.ISO_8601;
}
var Ni = function(t) {
  var r = t.activeStartDate, a = t.locale, n = t.onMouseLeave, s = t.showFixedNumberOfWeeks, i = t.calendarType, o = i === void 0 ? Kl(a) : i, c = t.formatShortWeekday, l = t.formatWeekday, d = t.onClickWeekNumber, y = t.showWeekNumbers, v = Jl(t, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function w() {
    return b.createElement(ql, { calendarType: o, formatShortWeekday: c, formatWeekday: l, locale: a, onMouseLeave: n });
  }
  function S() {
    return y ? b.createElement(Ql, { activeStartDate: r, calendarType: o, onClickWeekNumber: d, onMouseLeave: n, showFixedNumberOfWeeks: s }) : null;
  }
  function F() {
    return b.createElement(Hl, br({ calendarType: o }, v));
  }
  var R = "react-calendar__month-view";
  return b.createElement(
    "div",
    { className: ca(R, y ? "".concat(R, "--weekNumbers") : "") },
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
        w(),
        F()
      )
    )
  );
};
Ni.propTypes = br(br({}, _a), { calendarType: Oi, formatDay: m.func, formatLongDate: m.func, formatShortWeekday: m.func, formatWeekday: m.func, onClickWeekNumber: m.func, onMouseLeave: m.func, showFixedNumberOfWeeks: m.bool, showNeighboringMonth: m.bool, showWeekNumbers: m.bool });
const Xl = Ni;
var Zt = globalThis && globalThis.__assign || function() {
  return Zt = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Zt.apply(this, arguments);
}, jr = "react-calendar", Wt = ["century", "decade", "year", "month"], ed = ["decade", "year", "month", "day"], Tn = /* @__PURE__ */ new Date();
Tn.setFullYear(1, 0, 1);
Tn.setHours(0, 0, 0, 0);
var td = /* @__PURE__ */ new Date(864e13);
function er(e) {
  return e instanceof Date ? e : new Date(e);
}
function Ai(e, t) {
  return Wt.slice(Wt.indexOf(e), Wt.indexOf(t) + 1);
}
function rd(e, t, r) {
  var a = Ai(t, r);
  return a.indexOf(e) !== -1;
}
function Sn(e, t, r) {
  return e && rd(e, t, r) ? e : r;
}
function Ii(e) {
  var t = Wt.indexOf(e);
  return ed[t];
}
function ad(e, t) {
  var r = Array.isArray(e) ? e[t] : e;
  if (!r)
    return null;
  var a = er(r);
  if (isNaN(a.getTime()))
    throw new Error("Invalid date: ".concat(e));
  return a;
}
function Ri(e, t) {
  var r = e.value, a = e.minDate, n = e.maxDate, s = e.maxDetail, i = ad(r, t);
  if (!i)
    return null;
  var o = Ii(s), c = function() {
    switch (t) {
      case 0:
        return kt(o, i);
      case 1:
        return _i(o, i);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return _l(c, a, n);
}
var En = function(e) {
  return Ri(e, 0);
}, Mi = function(e) {
  return Ri(e, 1);
}, nd = function(e) {
  return [En, Mi].map(function(t) {
    return t(e);
  });
};
function Pi(e) {
  var t = e.maxDate, r = e.maxDetail, a = e.minDate, n = e.minDetail, s = e.value, i = e.view, o = Sn(i, n, r), c = En({
    value: s,
    minDate: a,
    maxDate: t,
    maxDetail: r
  }) || /* @__PURE__ */ new Date();
  return kt(o, c);
}
function sd(e) {
  var t = e.activeStartDate, r = e.defaultActiveStartDate, a = e.defaultValue, n = e.defaultView, s = e.maxDate, i = e.maxDetail, o = e.minDate, c = e.minDetail, l = e.value, d = e.view, y = Sn(d, c, i), v = t || r;
  return v ? kt(y, v) : Pi({
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
function Fr(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var Vi = E.forwardRef(function(t, r) {
  var a = t.activeStartDate, n = t.allowPartialRange, s = t.calendarType, i = t.className, o = t.defaultActiveStartDate, c = t.defaultValue, l = t.defaultView, d = t.formatDay, y = t.formatLongDate, v = t.formatMonth, w = t.formatMonthYear, S = t.formatShortWeekday, F = t.formatWeekday, R = t.formatYear, j = t.goToRangeStartOnSelect, k = j === void 0 ? !0 : j, W = t.inputRef, H = t.locale, z = t.maxDate, V = z === void 0 ? td : z, ie = t.maxDetail, ae = ie === void 0 ? "month" : ie, be = t.minDate, te = be === void 0 ? Tn : be, ve = t.minDetail, M = ve === void 0 ? "century" : ve, Y = t.navigationAriaLabel, B = t.navigationAriaLive, oe = t.navigationLabel, J = t.next2AriaLabel, pe = t.next2Label, Re = t.nextAriaLabel, fe = t.nextLabel, ce = t.onActiveStartDateChange, Ee = t.onChange, Ce = t.onClickDay, Be = t.onClickDecade, Je = t.onClickMonth, gt = t.onClickWeekNumber, Ue = t.onClickYear, U = t.onDrillDown, X = t.onDrillUp, we = t.onViewChange, Ke = t.prev2AriaLabel, it = t.prev2Label, At = t.prevAriaLabel, It = t.prevLabel, he = t.returnValue, ot = he === void 0 ? "start" : he, xe = t.selectRange, Gt = t.showDoubleView, wa = t.showFixedNumberOfWeeks, xa = t.showNavigation, u = xa === void 0 ? !0 : xa, f = t.showNeighboringCentury, h = t.showNeighboringDecade, O = t.showNeighboringMonth, _ = O === void 0 ? !0 : O, g = t.showWeekNumbers, A = t.tileClassName, Q = t.tileContent, ue = t.tileDisabled, ct = t.value, Xe = t.view, Cr = E.useState(o), Qt = Cr[0], ut = Cr[1], Nr = E.useState(null), Ar = Nr[0], Ir = Nr[1], Jt = E.useState(Array.isArray(c) ? c.map(function($) {
    return $ !== null ? er($) : null;
  }) : c != null ? er(c) : null), ka = Jt[0], Li = Jt[1], Nn = E.useState(l), ji = Nn[0], An = Nn[1], Te = a || Qt || sd({
    activeStartDate: a,
    defaultActiveStartDate: o,
    defaultValue: c,
    defaultView: l,
    maxDate: V,
    maxDetail: ae,
    minDate: te,
    minDetail: M,
    value: ct,
    view: Xe
  }), Se = function() {
    var $ = function() {
      return xe && Wa(ka) ? ka : ct !== void 0 ? ct : ka;
    }();
    return $ ? Array.isArray($) ? $.map(function(le) {
      return le !== null ? er(le) : null;
    }) : $ !== null ? er($) : null : null;
  }(), Rr = Ii(ae), ne = Sn(Xe || ji, M, ae), ze = Ai(M, ae), Fi = xe ? Ar : null, Da = ze.indexOf(ne) < ze.length - 1, In = ze.indexOf(ne) > 0, Rn = E.useCallback(function($) {
    var le = function() {
      switch (ot) {
        case "start":
          return En;
        case "end":
          return Mi;
        case "range":
          return nd;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return le({
      maxDate: V,
      maxDetail: ae,
      minDate: te,
      value: $
    });
  }, [V, ae, te, ot]), Oa = E.useCallback(function($, le) {
    ut($);
    var me = {
      action: le,
      activeStartDate: $,
      value: Se,
      view: ne
    };
    ce && !Fr(Te, $) && ce(me);
  }, [Te, ce, Se, ne]), Mr = E.useCallback(function($, le) {
    var me = function() {
      switch (ne) {
        case "century":
          return Be;
        case "decade":
          return Ue;
        case "year":
          return Je;
        case "month":
          return Ce;
        default:
          throw new Error("Invalid view: ".concat(ne, "."));
      }
    }();
    me && me($, le);
  }, [Ce, Be, Je, Ue, ne]), Ta = E.useCallback(function($, le) {
    if (Da) {
      Mr($, le);
      var me = ze[ze.indexOf(ne) + 1];
      if (!me)
        throw new Error("Attempted to drill down from the lowest view.");
      ut($), An(me);
      var Me = {
        action: "drillDown",
        activeStartDate: $,
        value: Se,
        view: me
      };
      ce && !Fr(Te, $) && ce(Me), we && ne !== me && we(Me), U && U(Me);
    }
  }, [
    Te,
    Da,
    ce,
    Mr,
    U,
    we,
    Se,
    ne,
    ze
  ]), Sa = E.useCallback(function() {
    if (In) {
      var $ = ze[ze.indexOf(ne) - 1];
      if (!$)
        throw new Error("Attempted to drill up from the highest view.");
      var le = kt($, Te);
      ut(le), An($);
      var me = {
        action: "drillUp",
        activeStartDate: le,
        value: Se,
        view: $
      };
      ce && !Fr(Te, le) && ce(me), we && ne !== $ && we(me), X && X(me);
    }
  }, [
    Te,
    In,
    ce,
    X,
    we,
    Se,
    ne,
    ze
  ]), Ea = E.useCallback(function($, le) {
    var me = Se;
    Mr($, le);
    var Me = xe && !Wa(me), Pe;
    if (xe)
      if (Me)
        Pe = kt(Rr, $);
      else {
        if (!me)
          throw new Error("previousValue is required");
        if (Array.isArray(me))
          throw new Error("previousValue must not be an array");
        Pe = fl(Rr, me, $);
      }
    else
      Pe = Rn($);
    var Na = (
      // Range selection turned off
      !xe || // Range selection turned on, first value
      Me || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      k ? Pi({
        maxDate: V,
        maxDetail: ae,
        minDate: te,
        minDetail: M,
        value: Pe,
        view: ne
      }) : null
    );
    le.persist(), ut(Na), Li(Pe);
    var Yi = {
      action: "onChange",
      activeStartDate: Na,
      value: Pe,
      view: ne
    };
    if (ce && !Fr(Te, Na) && ce(Yi), Ee)
      if (xe) {
        var Bi = Wa(Pe);
        if (!Bi)
          Ee(Pe || null, le);
        else if (n) {
          if (Array.isArray(Pe))
            throw new Error("value must not be an array");
          Ee([Pe || null, null], le);
        }
      } else
        Ee(Pe || null, le);
  }, [
    Te,
    n,
    Rn,
    k,
    V,
    ae,
    te,
    M,
    ce,
    Ee,
    Mr,
    xe,
    Se,
    Rr,
    ne
  ]);
  function Zi($) {
    Ir($);
  }
  function Ca() {
    Ir(null);
  }
  E.useImperativeHandle(r, function() {
    return {
      activeStartDate: Te,
      drillDown: Ta,
      drillUp: Sa,
      onChange: Ea,
      setActiveStartDate: Oa,
      value: Se,
      view: ne
    };
  }, [Te, Ta, Sa, Ea, Oa, Se, ne]);
  function Mn($) {
    var le = $ ? bi(ne, Te) : kt(ne, Te), me = Da ? Ta : Ea, Me = {
      activeStartDate: le,
      hover: Fi,
      locale: H,
      maxDate: V,
      minDate: te,
      onClick: me,
      onMouseOver: xe ? Zi : void 0,
      tileClassName: A,
      tileContent: Q,
      tileDisabled: ue,
      value: Se,
      valueType: Rr
    };
    switch (ne) {
      case "century":
        return b.createElement(Pl, Zt({ formatYear: R, showNeighboringCentury: f }, Me));
      case "decade":
        return b.createElement(Fl, Zt({ formatYear: R, showNeighboringDecade: h }, Me));
      case "year":
        return b.createElement(Bl, Zt({ formatMonth: v, formatMonthYear: w }, Me));
      case "month":
        return b.createElement(Xl, Zt({ calendarType: s, formatDay: d, formatLongDate: y, formatShortWeekday: S, formatWeekday: F, onClickWeekNumber: gt, onMouseLeave: xe ? Ca : void 0, showFixedNumberOfWeeks: typeof wa < "u" ? wa : Gt, showNeighboringMonth: _, showWeekNumbers: g }, Me));
      default:
        throw new Error("Invalid view: ".concat(ne, "."));
    }
  }
  function $i() {
    return u ? b.createElement(ml, { activeStartDate: Te, drillUp: Sa, formatMonthYear: w, formatYear: R, locale: H, maxDate: V, minDate: te, navigationAriaLabel: Y, navigationAriaLive: B, navigationLabel: oe, next2AriaLabel: J, next2Label: pe, nextAriaLabel: Re, nextLabel: fe, prev2AriaLabel: Ke, prev2Label: it, prevAriaLabel: At, prevLabel: It, setActiveStartDate: Oa, showDoubleView: Gt, view: ne, views: ze }) : null;
  }
  var Wi = Array.isArray(Se) ? Se : [Se];
  return b.createElement(
    "div",
    { className: ca(jr, xe && Wi.length === 1 && "".concat(jr, "--selectRange"), Gt && "".concat(jr, "--doubleView"), i), ref: W },
    $i(),
    b.createElement(
      "div",
      { className: "".concat(jr, "__viewContainer"), onBlur: xe ? Ca : void 0, onMouseLeave: xe ? Ca : void 0 },
      Mn(),
      Gt ? Mn(!0) : null
    )
  );
}), hs = m.instanceOf(Date), vs = m.oneOfType([m.string, m.instanceOf(Date)]), ms = m.oneOfType([vs, Ml(vs)]);
Vi.propTypes = {
  activeStartDate: hs,
  allowPartialRange: m.bool,
  calendarType: Oi,
  className: na,
  defaultActiveStartDate: hs,
  defaultValue: ms,
  defaultView: sa,
  formatDay: m.func,
  formatLongDate: m.func,
  formatMonth: m.func,
  formatMonthYear: m.func,
  formatShortWeekday: m.func,
  formatWeekday: m.func,
  formatYear: m.func,
  goToRangeStartOnSelect: m.bool,
  inputRef: Al,
  locale: m.string,
  maxDate: On,
  maxDetail: m.oneOf(Wt),
  minDate: Dn,
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
  value: ms,
  view: sa
};
const id = Vi;
const od = ks(id)`
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
`, cd = ({
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
  const [y, v] = E.useState(null), [w, S] = E.useState(!1), [F, R] = E.useState(!1);
  E.useEffect(() => {
    r !== void 0 && S(r);
  }, [r]);
  const j = E.useCallback((V) => {
    R(!0), S(!0), n == null || n(V);
  }, [n, S]), k = E.useCallback((V) => {
    R(!1), s == null || s(V);
  }, [n, S]), W = E.useCallback((V) => {
    v(V);
  }, [v]), H = E.useMemo(() => o ? Vr(o, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]).toDate() : null, [o]), z = E.useMemo(() => H ? Vr(H).format("DD.MM.YYYY") : "", [H]);
  return /* @__PURE__ */ C(uo, { onClickAway: () => S(!1), children: /* @__PURE__ */ We(la, { className: a, label: t, error: e, children: [
    /* @__PURE__ */ C(Dr, { ...l, inputWrapRef: W, ref: d, onFocus: j, onBlur: k, value: z, onChange: (V) => {
      V.target.value ? c == null || c(Vr(V.target.value, "DD.MM.YYYY").format("YYYY-MM-DD HH:mm:ss")) : c == null || c(void 0);
    }, onMouseDown: (V) => {
      F && S(!w), i == null || i(V);
    }, error: e }),
    y && /* @__PURE__ */ C(xs, { open: w, anchorEl: y, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: y
      }
    }], children: /* @__PURE__ */ C("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ C(od, { value: H, onChange: (V) => {
      c == null || c(Vr(V).format("YYYY-MM-DD HH:mm:ss")), S(!1);
    } }) }) })
  ] }) });
}, Ed = E.forwardRef(cd), ud = ({
  multiple: e,
  value: t,
  url: r,
  params: a,
  idField: n = Js,
  onInputChange: s,
  open: i,
  ...o
}, c) => {
  const [l, d] = E.useState(""), [y, v] = E.useState(i), w = Qi(l, 500);
  E.useEffect(() => {
    v(i);
  }, [i]);
  const S = E.useMemo(() => ({
    ...a,
    ...w ? {
      query: w
    } : void 0
  }), [w, a]), F = l.length > 0 || y === !0, R = Ln(r, {
    enabled: F,
    params: S,
    placeholderData: Vn
  }), j = E.useMemo(() => Ie.isEmpty(t) ? !1 : R.data ? e ? !Ie.every(t, (V) => Ie.some(R.data.data, {
    [n]: V
  })) : !Ie.some(R.data.data, {
    [n]: t
  }) : !0, [t, R.data]), k = E.useMemo(() => ({
    ...a,
    id: e ? Ie.uniq(t).join(",") : t
  }), [t, a]), W = Ln(r, {
    params: k,
    enabled: j,
    staleTime: 60 * 1e3,
    placeholderData: Vn
  }), H = E.useMemo(() => {
    var V, ie;
    return Ie.uniqBy([...((V = W.data) == null ? void 0 : V.data) || [], ...((ie = R.data) == null ? void 0 : ie.data) || []], n);
  }, [W.data, R.data]), z = j && W.isLoading;
  return /* @__PURE__ */ C(Ks, { ref: c, multiple: e, value: t, ...o, disabled: z || o.disabled, inputLoading: z, options: H, idField: n, onOpen: () => v(!0), onClose: () => v(!1), isLoading: R.isLoading, afterItems: [(R.isLoading || R.isFetching) && /* @__PURE__ */ C("div", { children: /* @__PURE__ */ C(rt, { icon: bs.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onInputChange: (V, ie, ae) => {
    ae === "input" && d(ie), ae === "reset" && d(""), s == null || s(V, ie, ae);
  } });
}, ld = E.forwardRef(ud), Cn = (e) => E.forwardRef((t, r) => /* @__PURE__ */ C(ld, { ...e, ...t, ref: r })), dd = ({
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
  const y = on(i, d);
  return /* @__PURE__ */ C(Dr, { ...s, ref: y, error: t, value: o, onChange: (v) => {
    const w = Number(v.target.value);
    if (!isNaN(w)) {
      if (v.target.value.includes(".") && !a)
        return;
      c(v.target.value), v.target.value.slice(-1) !== "." && (r == null || r(w));
    }
  }, afterItems: [e && /* @__PURE__ */ C("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, t && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => l == null ? void 0 : l.focus(), children: e }, "unit")] });
}, Cd = E.forwardRef(dd), fd = E.forwardRef(({
  placeholder: e = "Введите",
  ...t
}, r) => /* @__PURE__ */ C("textarea", { ref: r, placeholder: e, ...t })), hd = ({
  error: e,
  rows: t = 5,
  ...r
}, a) => /* @__PURE__ */ C(Dr, { ...r, ref: a, rows: t, inputComponent: fd, error: e }), Nd = E.forwardRef(hd), vd = ({
  error: e,
  ...t
}, r) => /* @__PURE__ */ C(Dr, { ...t, ref: r, error: e }), Ad = E.forwardRef(vd), md = ({
  label: e,
  error: t,
  value: r,
  helperText: a,
  className: n,
  onChange: s,
  ...i
}, o) => /* @__PURE__ */ C(la, { label: e, error: t, helperText: a, className: n, children: /* @__PURE__ */ We(lo, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...i, onChange: (c) => {
  s == null || s(c.target.value === "true");
}, ref: o, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ C(jn, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ C(jn, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), Id = E.forwardRef(md);
({
  ...Wn
});
const yd = ks(({
  className: e,
  ...t
}) => /* @__PURE__ */ C(fo, { ...t, classes: {
  popper: e
} }))`
  .${Fn.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Fn.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`, Rd = ({
  children: e,
  className: t,
  tooltip: r,
  icon: a,
  iconAfter: n,
  ...s
}) => {
  let i = /* @__PURE__ */ We(ho, { className: t, css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...s, children: [
    a && /* @__PURE__ */ C(rt, { icon: a }),
    e,
    n && /* @__PURE__ */ C(rt, { icon: n })
  ] });
  return r && (i = /* @__PURE__ */ C(yd, { title: r, arrow: !0, children: i })), i;
}, Md = Cn({
  url: "/api/rest/partners",
  displayField: "name"
});
Cn({
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "is_deleted",
      value: !1
    }])
  }
});
const Pd = Cn({
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
  Id as B,
  Rd as C,
  Sd as D,
  Od as F,
  la as L,
  Cd as N,
  Md as P,
  Pd as R,
  Dr as T,
  Ad as Y,
  Dd as a,
  Ed as b,
  Nd as c,
  kd as d,
  Cn as e,
  Hs as f,
  Td as u,
  Wn as z
};
