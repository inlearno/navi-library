var Aa = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var J = (e, t, r) => (Aa(e, t, "read from private field"), r ? r.call(e) : t.get(e)), gt = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, bt = (e, t, r, a) => (Aa(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r);
var Rt = (e, t, r) => (Aa(e, t, "access private method"), r);
import { r as E, R as b, d as Mr, g as ds } from "./react-181b9648.js";
import { b as $i, s as Wi, g as Yi, n as fs, u as Bi, c as Ui, p as zi, a as $e, j as I, f as hs, F as Hi } from "./library-ff1fc96d.js";
import { s as qi, c as Gi, l as Je, f as Qi, a as Ji, b as Xi, h as Pr, u as In } from "./useDictionary-1b7f8f4c.js";
import { A as Ki, d as eo, e as to, I as ro, a as vs, f as ao, u as no, g as ms, i as so, P as ys, k as oa, n as ps, C as io, l as Rn, m as oo, M as co, t as Mn, B as uo } from "./mui-d2313b11.js";
import { F as ct, P as m } from "./icons-42066a3f.js";
var it, _e, Ee, Xe, Yt, Zr, _r, Ya, ls, lo = (ls = class extends $i {
  constructor(t, r) {
    super();
    gt(this, Yt);
    gt(this, _r);
    gt(this, it, void 0);
    gt(this, _e, void 0);
    gt(this, Ee, void 0);
    gt(this, Xe, void 0);
    bt(this, _e, void 0), bt(this, it, t), this.setOptions(r), this.bindMethods(), Rt(this, Yt, Zr).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var a;
    const r = this.options;
    this.options = J(this, it).defaultMutationOptions(t), Wi(r, this.options) || J(this, it).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: J(this, Ee),
      observer: this
    }), (a = J(this, Ee)) == null || a.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = J(this, Ee)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    Rt(this, Yt, Zr).call(this), Rt(this, _r, Ya).call(this, t);
  }
  getCurrentResult() {
    return J(this, _e);
  }
  reset() {
    bt(this, Ee, void 0), Rt(this, Yt, Zr).call(this), Rt(this, _r, Ya).call(this);
  }
  mutate(t, r) {
    var a;
    return bt(this, Xe, r), (a = J(this, Ee)) == null || a.removeObserver(this), bt(this, Ee, J(this, it).getMutationCache().build(J(this, it), this.options)), J(this, Ee).addObserver(this), J(this, Ee).execute(t);
  }
}, it = new WeakMap(), _e = new WeakMap(), Ee = new WeakMap(), Xe = new WeakMap(), Yt = new WeakSet(), Zr = function() {
  var r;
  const t = ((r = J(this, Ee)) == null ? void 0 : r.state) ?? Yi();
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
  fs.batch(() => {
    var r, a, n, s, i, o, c, l;
    J(this, Xe) && this.hasListeners() && ((t == null ? void 0 : t.type) === "success" ? ((a = (r = J(this, Xe)).onSuccess) == null || a.call(
      r,
      t.data,
      J(this, _e).variables,
      J(this, _e).context
    ), (s = (n = J(this, Xe)).onSettled) == null || s.call(
      n,
      t.data,
      null,
      J(this, _e).variables,
      J(this, _e).context
    )) : (t == null ? void 0 : t.type) === "error" && ((o = (i = J(this, Xe)).onError) == null || o.call(
      i,
      t.error,
      J(this, _e).variables,
      J(this, _e).context
    ), (l = (c = J(this, Xe)).onSettled) == null || l.call(
      c,
      void 0,
      t.error,
      J(this, _e).variables,
      J(this, _e).context
    ))), this.listeners.forEach((d) => {
      d(J(this, _e));
    });
  });
}, ls);
function fo(e, t) {
  const r = Bi(t), [a] = E.useState(
    () => new lo(
      r,
      e
    )
  );
  E.useEffect(() => {
    a.setOptions(e);
  }, [a, e]);
  const n = E.useSyncExternalStore(
    E.useCallback(
      (i) => a.subscribe(fs.batchCalls(i)),
      [a]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), s = E.useCallback(
    (i, o) => {
      a.mutate(i, o).catch(ho);
    },
    [a]
  );
  if (n.error && qi(a.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: s, mutateAsync: n.mutate };
}
function ho() {
}
function gd(e, t, r) {
  let a;
  typeof e == "string" && typeof t == "string" ? a = {
    url: t,
    method: e,
    ...r
  } : typeof e == "string" ? a = {
    url: e,
    ...t
  } : a = e;
  const n = E.useMemo(() => Ui(a.url, {
    encode: encodeURIComponent
  }), [a.url]), s = E.useMemo(() => zi(a.url).reduce((v, y) => typeof y != "string" ? [...v, y.name] : v, []), [a.url]), i = Gi(), {
    wrapPayload: o = !0,
    ...c
  } = a;
  return fo({
    ...c,
    mutationFn: async (d) => {
      const v = n(Je.pick(d, ...s)), y = Je.omit(d, ...s), T = Je.isEmpty(y) ? void 0 : o ? {
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
var H;
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
})(H || (H = {}));
var Ba;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ba || (Ba = {}));
const k = H.arrayToEnum([
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
]), st = (e) => {
  switch (typeof e) {
    case "undefined":
      return k.undefined;
    case "string":
      return k.string;
    case "number":
      return isNaN(e) ? k.nan : k.number;
    case "boolean":
      return k.boolean;
    case "function":
      return k.function;
    case "bigint":
      return k.bigint;
    case "symbol":
      return k.symbol;
    case "object":
      return Array.isArray(e) ? k.array : e === null ? k.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? k.promise : typeof Map < "u" && e instanceof Map ? k.map : typeof Set < "u" && e instanceof Set ? k.set : typeof Date < "u" && e instanceof Date ? k.date : k.object;
    default:
      return k.unknown;
  }
}, p = H.arrayToEnum([
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
]), vo = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
    return JSON.stringify(this.issues, H.jsonStringifyReplacer, 2);
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
      e.received === k.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case p.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, H.jsonStringifyReplacer)}`;
      break;
    case p.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${H.joinValues(e.keys, ", ")}`;
      break;
    case p.invalid_union:
      r = "Invalid input";
      break;
    case p.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${H.joinValues(e.options)}`;
      break;
    case p.invalid_enum_value:
      r = `Invalid enum value. Expected ${H.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : H.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
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
      r = t.defaultError, H.assertNever(e);
  }
  return { message: r };
};
let gs = rr;
function mo(e) {
  gs = e;
}
function Yr() {
  return gs;
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
}, yo = [];
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
    return ge.mergeObjectSync(t, a);
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
}), bs = (e) => ({ status: "dirty", value: e }), xe = (e) => ({ status: "valid", value: e }), Ua = (e) => e.status === "aborted", za = (e) => e.status === "dirty", ar = (e) => e.status === "valid", Ur = (e) => typeof Promise < "u" && e instanceof Promise;
var C;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(C || (C = {}));
class ze {
  constructor(t, r, a, n) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = a, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Pn = (e, t) => {
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
function P(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: a, description: n } = e;
  if (t && (r || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: n } : { errorMap: (i, o) => i.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: a ?? o.defaultError } : { message: r ?? o.defaultError }, description: n };
}
class j {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return st(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: st(t.data),
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
        parsedType: st(t.data),
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
      parsedType: st(t)
    }, s = this._parseSync({ data: t, path: n.path, parent: n });
    return Pn(n, s);
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
      parsedType: st(t)
    }, n = this._parse({ data: t, path: a.path, parent: a }), s = await (Ur(n) ? n : Promise.resolve(n));
    return Pn(a, s);
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
    return new We({
      schema: this,
      typeName: A.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Ke.create(this, this._def);
  }
  nullable() {
    return Ot.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Fe.create(this, this._def);
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
    return new We({
      ...P(this._def),
      schema: this,
      typeName: A.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new hr({
      ...P(this._def),
      innerType: this,
      defaultValue: r,
      typeName: A.ZodDefault
    });
  }
  brand() {
    return new ws({
      typeName: A.ZodBranded,
      type: this,
      ...P(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Gr({
      ...P(this._def),
      innerType: this,
      catchValue: r,
      typeName: A.ZodCatch
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
    return Jr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const po = /^c[^\s-]{8,}$/i, go = /^[a-z][a-z0-9]*$/, bo = /^[0-9A-HJKMNP-TV-Z]{26}$/, _o = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, wo = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, xo = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ia;
const ko = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Do = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Oo = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function To(e, t) {
  return !!((t === "v4" || !t) && ko.test(e) || (t === "v6" || !t) && Do.test(e));
}
class je extends j {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== k.string) {
      const s = this._getOrReturnCtx(t);
      return O(
        s,
        {
          code: p.invalid_type,
          expected: k.string,
          received: s.parsedType
        }
        //
      ), M;
    }
    const a = new ge();
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
        wo.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "email",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "emoji")
        Ia || (Ia = new RegExp(xo, "u")), Ia.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "emoji",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "uuid")
        _o.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "uuid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid")
        po.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "cuid",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid2")
        go.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "cuid2",
          code: p.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "ulid")
        bo.test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
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
        }), a.dirty()) : s.kind === "datetime" ? Oo(s).test(t.data) || (n = this._getOrReturnCtx(t, n), O(n, {
          code: p.invalid_string,
          validation: "datetime",
          message: s.message
        }), a.dirty()) : s.kind === "ip" ? To(t.data, s.version) || (n = this._getOrReturnCtx(t, n), O(n, {
          validation: "ip",
          code: p.invalid_string,
          message: s.message
        }), a.dirty()) : H.assertNever(s);
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
    return new je({
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
    return new je({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new je({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new je({
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
je.create = (e) => {
  var t;
  return new je({
    checks: [],
    typeName: A.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...P(e)
  });
};
function So(e, t) {
  const r = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, n = r > a ? r : a, s = parseInt(e.toFixed(n).replace(".", "")), i = parseInt(t.toFixed(n).replace(".", ""));
  return s % i / Math.pow(10, n);
}
class ut extends j {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== k.number) {
      const s = this._getOrReturnCtx(t);
      return O(s, {
        code: p.invalid_type,
        expected: k.number,
        received: s.parsedType
      }), M;
    }
    let a;
    const n = new ge();
    for (const s of this._def.checks)
      s.kind === "int" ? H.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), O(a, {
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
      }), n.dirty()) : s.kind === "multipleOf" ? So(t.data, s.value) !== 0 && (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), O(a, {
        code: p.not_finite,
        message: s.message
      }), n.dirty()) : H.assertNever(s);
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
    return new ut({
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
    return new ut({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && H.isInteger(t.value));
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
ut.create = (e) => new ut({
  checks: [],
  typeName: A.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...P(e)
});
class lt extends j {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== k.bigint) {
      const s = this._getOrReturnCtx(t);
      return O(s, {
        code: p.invalid_type,
        expected: k.bigint,
        received: s.parsedType
      }), M;
    }
    let a;
    const n = new ge();
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
      }), n.dirty()) : H.assertNever(s);
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
    return new lt({
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
    return new lt({
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
lt.create = (e) => {
  var t;
  return new lt({
    checks: [],
    typeName: A.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...P(e)
  });
};
class nr extends j {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== k.boolean) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: k.boolean,
        received: a.parsedType
      }), M;
    }
    return xe(t.data);
  }
}
nr.create = (e) => new nr({
  typeName: A.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...P(e)
});
class kt extends j {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== k.date) {
      const s = this._getOrReturnCtx(t);
      return O(s, {
        code: p.invalid_type,
        expected: k.date,
        received: s.parsedType
      }), M;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return O(s, {
        code: p.invalid_date
      }), M;
    }
    const a = new ge();
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
      }), a.dirty()) : H.assertNever(s);
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
  typeName: A.ZodDate,
  ...P(e)
});
class zr extends j {
  _parse(t) {
    if (this._getType(t) !== k.symbol) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: k.symbol,
        received: a.parsedType
      }), M;
    }
    return xe(t.data);
  }
}
zr.create = (e) => new zr({
  typeName: A.ZodSymbol,
  ...P(e)
});
class sr extends j {
  _parse(t) {
    if (this._getType(t) !== k.undefined) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: k.undefined,
        received: a.parsedType
      }), M;
    }
    return xe(t.data);
  }
}
sr.create = (e) => new sr({
  typeName: A.ZodUndefined,
  ...P(e)
});
class ir extends j {
  _parse(t) {
    if (this._getType(t) !== k.null) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: k.null,
        received: a.parsedType
      }), M;
    }
    return xe(t.data);
  }
}
ir.create = (e) => new ir({
  typeName: A.ZodNull,
  ...P(e)
});
class Bt extends j {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return xe(t.data);
  }
}
Bt.create = (e) => new Bt({
  typeName: A.ZodAny,
  ...P(e)
});
class wt extends j {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return xe(t.data);
  }
}
wt.create = (e) => new wt({
  typeName: A.ZodUnknown,
  ...P(e)
});
class et extends j {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return O(r, {
      code: p.invalid_type,
      expected: k.never,
      received: r.parsedType
    }), M;
  }
}
et.create = (e) => new et({
  typeName: A.ZodNever,
  ...P(e)
});
class Hr extends j {
  _parse(t) {
    if (this._getType(t) !== k.undefined) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: k.void,
        received: a.parsedType
      }), M;
    }
    return xe(t.data);
  }
}
Hr.create = (e) => new Hr({
  typeName: A.ZodVoid,
  ...P(e)
});
class Fe extends j {
  _parse(t) {
    const { ctx: r, status: a } = this._processInputParams(t), n = this._def;
    if (r.parsedType !== k.array)
      return O(r, {
        code: p.invalid_type,
        expected: k.array,
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
      return Promise.all([...r.data].map((i, o) => n.type._parseAsync(new ze(r, i, r.path, o)))).then((i) => ge.mergeArray(a, i));
    const s = [...r.data].map((i, o) => n.type._parseSync(new ze(r, i, r.path, o)));
    return ge.mergeArray(a, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new Fe({
      ...this._def,
      minLength: { value: t, message: C.toString(r) }
    });
  }
  max(t, r) {
    return new Fe({
      ...this._def,
      maxLength: { value: t, message: C.toString(r) }
    });
  }
  length(t, r) {
    return new Fe({
      ...this._def,
      exactLength: { value: t, message: C.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Fe.create = (e, t) => new Fe({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: A.ZodArray,
  ...P(t)
});
function Vt(e) {
  if (e instanceof se) {
    const t = {};
    for (const r in e.shape) {
      const a = e.shape[r];
      t[r] = Ke.create(Vt(a));
    }
    return new se({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof Fe ? new Fe({
      ...e._def,
      type: Vt(e.element)
    }) : e instanceof Ke ? Ke.create(Vt(e.unwrap())) : e instanceof Ot ? Ot.create(Vt(e.unwrap())) : e instanceof He ? He.create(e.items.map((t) => Vt(t))) : e;
}
class se extends j {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = H.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== k.object) {
      const l = this._getOrReturnCtx(t);
      return O(l, {
        code: p.invalid_type,
        expected: k.object,
        received: l.parsedType
      }), M;
    }
    const { status: a, ctx: n } = this._processInputParams(t), { shape: s, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof et && this._def.unknownKeys === "strip"))
      for (const l in n.data)
        i.includes(l) || o.push(l);
    const c = [];
    for (const l of i) {
      const d = s[l], v = n.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: d._parse(new ze(n, v, n.path, l)),
        alwaysSet: l in n.data
      });
    }
    if (this._def.catchall instanceof et) {
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
            new ze(n, v, n.path, d)
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
      typeName: A.ZodObject
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
    return H.objectKeys(t).forEach((a) => {
      t[a] && this.shape[a] && (r[a] = this.shape[a]);
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return H.objectKeys(this.shape).forEach((a) => {
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
    return H.objectKeys(this.shape).forEach((a) => {
      const n = this.shape[a];
      t && !t[a] ? r[a] = n : r[a] = n.optional();
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return H.objectKeys(this.shape).forEach((a) => {
      if (t && !t[a])
        r[a] = this.shape[a];
      else {
        let s = this.shape[a];
        for (; s instanceof Ke; )
          s = s._def.innerType;
        r[a] = s;
      }
    }), new se({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return _s(H.objectKeys(this.shape));
  }
}
se.create = (e, t) => new se({
  shape: () => e,
  unknownKeys: "strip",
  catchall: et.create(),
  typeName: A.ZodObject,
  ...P(t)
});
se.strictCreate = (e, t) => new se({
  shape: () => e,
  unknownKeys: "strict",
  catchall: et.create(),
  typeName: A.ZodObject,
  ...P(t)
});
se.lazycreate = (e, t) => new se({
  shape: e,
  unknownKeys: "strip",
  catchall: et.create(),
  typeName: A.ZodObject,
  ...P(t)
});
class or extends j {
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
      const o = i.map((c) => new Ze(c));
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
  typeName: A.ZodUnion,
  ...P(t)
});
const Fr = (e) => e instanceof lr ? Fr(e.schema) : e instanceof We ? Fr(e.innerType()) : e instanceof dr ? [e.value] : e instanceof dt ? e.options : e instanceof fr ? Object.keys(e.enum) : e instanceof hr ? Fr(e._def.innerType) : e instanceof sr ? [void 0] : e instanceof ir ? [null] : null;
class ca extends j {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.object)
      return O(r, {
        code: p.invalid_type,
        expected: k.object,
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
      typeName: A.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: n,
      ...P(a)
    });
  }
}
function Ha(e, t) {
  const r = st(e), a = st(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === k.object && a === k.object) {
    const n = H.objectKeys(t), s = H.objectKeys(e).filter((o) => n.indexOf(o) !== -1), i = { ...e, ...t };
    for (const o of s) {
      const c = Ha(e[o], t[o]);
      if (!c.valid)
        return { valid: !1 };
      i[o] = c.data;
    }
    return { valid: !0, data: i };
  } else if (r === k.array && a === k.array) {
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
    return r === k.date && a === k.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class cr extends j {
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
  typeName: A.ZodIntersection,
  ...P(r)
});
class He extends j {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== k.array)
      return O(a, {
        code: p.invalid_type,
        expected: k.array,
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
      return c ? c._parse(new ze(a, i, a.path, o)) : null;
    }).filter((i) => !!i);
    return a.common.async ? Promise.all(s).then((i) => ge.mergeArray(r, i)) : ge.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new He({
      ...this._def,
      rest: t
    });
  }
}
He.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new He({
    items: e,
    typeName: A.ZodTuple,
    rest: null,
    ...P(t)
  });
};
class ur extends j {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== k.object)
      return O(a, {
        code: p.invalid_type,
        expected: k.object,
        received: a.parsedType
      }), M;
    const n = [], s = this._def.keyType, i = this._def.valueType;
    for (const o in a.data)
      n.push({
        key: s._parse(new ze(a, o, a.path, o)),
        value: i._parse(new ze(a, a.data[o], a.path, o))
      });
    return a.common.async ? ge.mergeObjectAsync(r, n) : ge.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, a) {
    return r instanceof j ? new ur({
      keyType: t,
      valueType: r,
      typeName: A.ZodRecord,
      ...P(a)
    }) : new ur({
      keyType: je.create(),
      valueType: t,
      typeName: A.ZodRecord,
      ...P(r)
    });
  }
}
class qr extends j {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== k.map)
      return O(a, {
        code: p.invalid_type,
        expected: k.map,
        received: a.parsedType
      }), M;
    const n = this._def.keyType, s = this._def.valueType, i = [...a.data.entries()].map(([o, c], l) => ({
      key: n._parse(new ze(a, o, a.path, [l, "key"])),
      value: s._parse(new ze(a, c, a.path, [l, "value"]))
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
  typeName: A.ZodMap,
  ...P(r)
});
class Dt extends j {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== k.set)
      return O(a, {
        code: p.invalid_type,
        expected: k.set,
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
    const o = [...a.data.values()].map((c, l) => s._parse(new ze(a, c, a.path, l)));
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
  typeName: A.ZodSet,
  ...P(t)
});
class $t extends j {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.function)
      return O(r, {
        code: p.invalid_type,
        expected: k.function,
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
      return xe(async function(...c) {
        const l = new Ze([]), d = await o._def.args.parseAsync(c, s).catch((T) => {
          throw l.addIssue(a(c, T)), l;
        }), v = await Reflect.apply(i, this, d);
        return await o._def.returns._def.type.parseAsync(v, s).catch((T) => {
          throw l.addIssue(n(v, T)), l;
        });
      });
    } else {
      const o = this;
      return xe(function(...c) {
        const l = o._def.args.safeParse(c, s);
        if (!l.success)
          throw new Ze([a(c, l.error)]);
        const d = Reflect.apply(i, this, l.data), v = o._def.returns.safeParse(d, s);
        if (!v.success)
          throw new Ze([n(d, v.error)]);
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
      args: He.create(t).rest(wt.create())
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
      args: t || He.create([]).rest(wt.create()),
      returns: r || wt.create(),
      typeName: A.ZodFunction,
      ...P(a)
    });
  }
}
class lr extends j {
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
  typeName: A.ZodLazy,
  ...P(t)
});
class dr extends j {
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
  typeName: A.ZodLiteral,
  ...P(t)
});
function _s(e, t) {
  return new dt({
    values: e,
    typeName: A.ZodEnum,
    ...P(t)
  });
}
class dt extends j {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), a = this._def.values;
      return O(r, {
        expected: H.joinValues(a),
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
    return dt.create(t);
  }
  exclude(t) {
    return dt.create(this.options.filter((r) => !t.includes(r)));
  }
}
dt.create = _s;
class fr extends j {
  _parse(t) {
    const r = H.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(t);
    if (a.parsedType !== k.string && a.parsedType !== k.number) {
      const n = H.objectValues(r);
      return O(a, {
        expected: H.joinValues(n),
        received: a.parsedType,
        code: p.invalid_type
      }), M;
    }
    if (r.indexOf(t.data) === -1) {
      const n = H.objectValues(r);
      return O(a, {
        received: a.data,
        code: p.invalid_enum_value,
        options: n
      }), M;
    }
    return xe(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
fr.create = (e, t) => new fr({
  values: e,
  typeName: A.ZodNativeEnum,
  ...P(t)
});
class Ut extends j {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== k.promise && r.common.async === !1)
      return O(r, {
        code: p.invalid_type,
        expected: k.promise,
        received: r.parsedType
      }), M;
    const a = r.parsedType === k.promise ? r.data : Promise.resolve(r.data);
    return xe(a.then((n) => this._def.type.parseAsync(n, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Ut.create = (e, t) => new Ut({
  type: e,
  typeName: A.ZodPromise,
  ...P(t)
});
class We extends j {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === A.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
    H.assertNever(n);
  }
}
We.create = (e, t, r) => new We({
  schema: e,
  typeName: A.ZodEffects,
  effect: t,
  ...P(r)
});
We.createWithPreprocess = (e, t, r) => new We({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: A.ZodEffects,
  ...P(r)
});
class Ke extends j {
  _parse(t) {
    return this._getType(t) === k.undefined ? xe(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ke.create = (e, t) => new Ke({
  innerType: e,
  typeName: A.ZodOptional,
  ...P(t)
});
class Ot extends j {
  _parse(t) {
    return this._getType(t) === k.null ? xe(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ot.create = (e, t) => new Ot({
  innerType: e,
  typeName: A.ZodNullable,
  ...P(t)
});
class hr extends j {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let a = r.data;
    return r.parsedType === k.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
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
  typeName: A.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...P(t)
});
class Gr extends j {
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
Gr.create = (e, t) => new Gr({
  innerType: e,
  typeName: A.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...P(t)
});
class Qr extends j {
  _parse(t) {
    if (this._getType(t) !== k.nan) {
      const a = this._getOrReturnCtx(t);
      return O(a, {
        code: p.invalid_type,
        expected: k.nan,
        received: a.parsedType
      }), M;
    }
    return { status: "valid", value: t.data };
  }
}
Qr.create = (e) => new Qr({
  typeName: A.ZodNaN,
  ...P(e)
});
const Eo = Symbol("zod_brand");
class ws extends j {
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
class wr extends j {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? M : s.status === "dirty" ? (r.dirty(), bs(s.value)) : this._def.out._parseAsync({
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
      typeName: A.ZodPipeline
    });
  }
}
class Jr extends j {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return ar(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Jr.create = (e, t) => new Jr({
  innerType: e,
  typeName: A.ZodReadonly,
  ...P(t)
});
const xs = (e, t = {}, r) => e ? Bt.create().superRefine((a, n) => {
  var s, i;
  if (!e(a)) {
    const o = typeof t == "function" ? t(a) : typeof t == "string" ? { message: t } : t, c = (i = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && i !== void 0 ? i : !0, l = typeof o == "string" ? { message: o } : o;
    n.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Bt.create(), Co = {
  object: se.lazycreate
};
var A;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(A || (A = {}));
const No = (e, t = {
  message: `Input not instance of ${e.name}`
}) => xs((r) => r instanceof e, t), ks = je.create, Ds = ut.create, Ao = Qr.create, Io = lt.create, Os = nr.create, Ro = kt.create, Mo = zr.create, Po = sr.create, Vo = ir.create, Lo = Bt.create, jo = wt.create, Zo = et.create, Fo = Hr.create, $o = Fe.create, Wo = se.create, Yo = se.strictCreate, Bo = or.create, Uo = ca.create, zo = cr.create, Ho = He.create, qo = ur.create, Go = qr.create, Qo = Dt.create, Jo = $t.create, Xo = lr.create, Ko = dr.create, ec = dt.create, tc = fr.create, rc = Ut.create, Vn = We.create, ac = Ke.create, nc = Ot.create, sc = We.createWithPreprocess, ic = wr.create, oc = () => ks().optional(), cc = () => Ds().optional(), uc = () => Os().optional(), lc = {
  string: (e) => je.create({ ...e, coerce: !0 }),
  number: (e) => ut.create({ ...e, coerce: !0 }),
  boolean: (e) => nr.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => lt.create({ ...e, coerce: !0 }),
  date: (e) => kt.create({ ...e, coerce: !0 })
}, dc = M;
var bd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: rr,
  setErrorMap: mo,
  getErrorMap: Yr,
  makeIssue: Br,
  EMPTY_PATH: yo,
  addIssueToContext: O,
  ParseStatus: ge,
  INVALID: M,
  DIRTY: bs,
  OK: xe,
  isAborted: Ua,
  isDirty: za,
  isValid: ar,
  isAsync: Ur,
  get util() {
    return H;
  },
  get objectUtil() {
    return Ba;
  },
  ZodParsedType: k,
  getParsedType: st,
  ZodType: j,
  ZodString: je,
  ZodNumber: ut,
  ZodBigInt: lt,
  ZodBoolean: nr,
  ZodDate: kt,
  ZodSymbol: zr,
  ZodUndefined: sr,
  ZodNull: ir,
  ZodAny: Bt,
  ZodUnknown: wt,
  ZodNever: et,
  ZodVoid: Hr,
  ZodArray: Fe,
  ZodObject: se,
  ZodUnion: or,
  ZodDiscriminatedUnion: ca,
  ZodIntersection: cr,
  ZodTuple: He,
  ZodRecord: ur,
  ZodMap: qr,
  ZodSet: Dt,
  ZodFunction: $t,
  ZodLazy: lr,
  ZodLiteral: dr,
  ZodEnum: dt,
  ZodNativeEnum: fr,
  ZodPromise: Ut,
  ZodEffects: We,
  ZodTransformer: We,
  ZodOptional: Ke,
  ZodNullable: Ot,
  ZodDefault: hr,
  ZodCatch: Gr,
  ZodNaN: Qr,
  BRAND: Eo,
  ZodBranded: ws,
  ZodPipeline: wr,
  ZodReadonly: Jr,
  custom: xs,
  Schema: j,
  ZodSchema: j,
  late: Co,
  get ZodFirstPartyTypeKind() {
    return A;
  },
  coerce: lc,
  any: Lo,
  array: $o,
  bigint: Io,
  boolean: Os,
  date: Ro,
  discriminatedUnion: Uo,
  effect: Vn,
  enum: ec,
  function: Jo,
  instanceof: No,
  intersection: zo,
  lazy: Xo,
  literal: Ko,
  map: Go,
  nan: Ao,
  nativeEnum: tc,
  never: Zo,
  null: Vo,
  nullable: nc,
  number: Ds,
  object: Wo,
  oboolean: uc,
  onumber: cc,
  optional: ac,
  ostring: oc,
  pipeline: ic,
  preprocess: sc,
  promise: rc,
  record: qo,
  set: Qo,
  strictObject: Yo,
  string: ks,
  symbol: Mo,
  transformer: Vn,
  tuple: Ho,
  undefined: Po,
  union: Bo,
  unknown: jo,
  void: Fo,
  NEVER: dc,
  ZodIssueCode: p,
  quotelessJson: vo,
  ZodError: Ze
});
const _d = ({
  children: e,
  className: t,
  form: r
}) => {
  const a = r.formState.errors;
  return /* @__PURE__ */ $e("form", { className: t, onSubmit: r.onSubmit, children: [
    a.root && /* @__PURE__ */ $e(Ki, { severity: "error", children: [
      /* @__PURE__ */ I(eo, { children: a.root.message }),
      a.root.fields && /* @__PURE__ */ I("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(a.root.fields).map(([n, {
        message: s
      }]) => /* @__PURE__ */ I("li", { css: {}, children: s }, n)) })
    ] }),
    e
  ] });
};
var xr = (e) => e.type === "checkbox", Lt = (e) => e instanceof Date, we = (e) => e == null;
const Ts = (e) => typeof e == "object";
var me = (e) => !we(e) && !Array.isArray(e) && Ts(e) && !Lt(e), Ss = (e) => me(e) && e.target ? xr(e.target) ? e.target.checked : e.target.value : e, fc = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Es = (e, t) => e.has(fc(t)), hc = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return me(t) && t.hasOwnProperty("isPrototypeOf");
}, sn = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Pe(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(sn && (e instanceof Blob || e instanceof FileList)) && (r || me(e)))
    if (t = r ? [] : {}, !r && !hc(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = Pe(e[a]));
  else
    return e;
  return t;
}
var kr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], le = (e) => e === void 0, w = (e, t, r) => {
  if (!t || !me(e))
    return r;
  const a = kr(t.split(/[,[\].]+?/)).reduce((n, s) => we(n) ? n : n[s], e);
  return le(a) || a === e ? le(e[t]) ? r : e[t] : a;
}, Ve = (e) => typeof e == "boolean";
const Xr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Le = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Qe = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, vc = b.createContext(null), on = () => b.useContext(vc);
var Cs = (e, t, r, a = !0) => {
  const n = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(n, s, {
      get: () => {
        const i = s;
        return t._proxyFormState[i] !== Le.all && (t._proxyFormState[i] = !a || Le.all), r && (r[i] = !0), e[i];
      }
    });
  return n;
}, Ce = (e) => me(e) && !Object.keys(e).length, Ns = (e, t, r, a) => {
  r(e);
  const { name: n, ...s } = e;
  return Ce(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((i) => t[i] === (!a || Le.all));
}, $r = (e) => Array.isArray(e) ? e : [e], As = (e, t, r) => !e || !t || e === t || $r(e).some((a) => a && (r ? a === t : a.startsWith(t) || t.startsWith(a)));
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
function mc(e) {
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
    next: (v) => c.current && As(d.current, v.name, s) && Ns(v, l.current, r._updateFormState) && o({
      ...r._formState,
      ...v
    }),
    subject: r._subjects.state
  }), b.useEffect(() => (c.current = !0, l.current.isValid && r._updateValid(!0), () => {
    c.current = !1;
  }), [r]), Cs(i, r, l.current, !1);
}
var Ue = (e) => typeof e == "string", Is = (e, t, r, a, n) => Ue(e) ? (a && t.watch.add(e), w(r, e, n)) : Array.isArray(e) ? e.map((s) => (a && t.watch.add(s), w(r, s))) : (a && (t.watchAll = !0), r);
function yc(e) {
  const t = on(), { control: r = t.control, name: a, defaultValue: n, disabled: s, exact: i } = e || {}, o = b.useRef(a);
  o.current = a, cn({
    disabled: s,
    subject: r._subjects.values,
    next: (d) => {
      As(o.current, d.name, i) && l(Pe(Is(o.current, r._names, d.values || r._formValues, !1, n)));
    }
  });
  const [c, l] = b.useState(r._getWatch(a, n));
  return b.useEffect(() => r._removeUnmounted()), c;
}
var un = (e) => /^\w*$/.test(e), Rs = (e) => kr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), G = (e, t, r) => {
  let a = -1;
  const n = un(t) ? [t] : Rs(t), s = n.length, i = s - 1;
  for (; ++a < s; ) {
    const o = n[a];
    let c = r;
    if (a !== i) {
      const l = e[o];
      c = me(l) || Array.isArray(l) ? l : isNaN(+n[a + 1]) ? {} : [];
    }
    e[o] = c, e = e[o];
  }
  return e;
};
function pc(e) {
  const t = on(), { name: r, disabled: a, control: n = t.control, shouldUnregister: s } = e, i = Es(n._names.array, r), o = yc({
    control: n,
    name: r,
    defaultValue: w(n._formValues, r, w(n._defaultValues, r, e.defaultValue)),
    exact: !0
  }), c = mc({
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
      const y = Pe(w(n._options.defaultValues, r));
      G(n._defaultValues, r, y), le(w(n._formValues, r)) && G(n._formValues, r, y);
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
      ...Ve(a) || Ve(c.disabled) ? { disabled: c.disabled || a } : {},
      onChange: b.useCallback((d) => l.current.onChange({
        target: {
          value: Ss(d),
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
const gc = (e) => e.render(pc(e));
var Ms = (e, t, r, a, n) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [a]: n || !0
  }
} : {}, Ln = (e) => ({
  isOnSubmit: !e || e === Le.onSubmit,
  isOnBlur: e === Le.onBlur,
  isOnChange: e === Le.onChange,
  isOnAll: e === Le.all,
  isOnTouch: e === Le.onTouched
}), jn = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))));
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
        me(o) && tr(o, t);
    }
  }
};
var bc = (e, t, r) => {
  const a = kr(w(e, r));
  return G(a, "root", t[r]), G(e, r, a), e;
}, ln = (e) => e.type === "file", ot = (e) => typeof e == "function", Kr = (e) => {
  if (!sn)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Wr = (e) => Ue(e), dn = (e) => e.type === "radio", ea = (e) => e instanceof RegExp;
const Zn = {
  value: !1,
  isValid: !1
}, Fn = { value: !0, isValid: !0 };
var Ps = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !le(e[0].attributes.value) ? le(e[0].value) || e[0].value === "" ? Fn : { value: e[0].value, isValid: !0 } : Fn
    ) : Zn;
  }
  return Zn;
};
const $n = {
  isValid: !1,
  value: null
};
var Vs = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, $n) : $n;
function Wn(e, t, r = "validate") {
  if (Wr(e) || Array.isArray(e) && e.every(Wr) || Ve(e) && !e)
    return {
      type: r,
      message: Wr(e) ? e : "",
      ref: t
    };
}
var Mt = (e) => me(e) && !ea(e) ? e : {
  value: e,
  message: ""
}, Yn = async (e, t, r, a, n) => {
  const { ref: s, refs: i, required: o, maxLength: c, minLength: l, min: d, max: v, pattern: y, validate: T, name: S, valueAsNumber: V, mount: F, disabled: L } = e._f, x = w(t, S);
  if (!F || L)
    return {};
  const q = i ? i[0] : s, Z = (R) => {
    a && q.reportValidity && (q.setCustomValidity(Ve(R) ? "" : R || ""), q.reportValidity());
  }, B = {}, U = dn(s), ke = xr(s), ve = U || ke, ae = (V || ln(s)) && le(s.value) && le(x) || Kr(s) && s.value === "" || x === "" || Array.isArray(x) && !x.length, te = Ms.bind(null, S, r, B), Ne = (R, W, Y, ie = Qe.maxLength, X = Qe.minLength) => {
    const fe = R ? W : Y;
    B[S] = {
      type: R ? ie : X,
      message: fe,
      ref: s,
      ...te(R ? ie : X, fe)
    };
  };
  if (n ? !Array.isArray(x) || !x.length : o && (!ve && (ae || we(x)) || Ve(x) && !x || ke && !Ps(i).isValid || U && !Vs(i).isValid)) {
    const { value: R, message: W } = Wr(o) ? { value: !!o, message: o } : Mt(o);
    if (R && (B[S] = {
      type: Qe.required,
      message: W,
      ref: q,
      ...te(Qe.required, W)
    }, !r))
      return Z(W), B;
  }
  if (!ae && (!we(d) || !we(v))) {
    let R, W;
    const Y = Mt(v), ie = Mt(d);
    if (!we(x) && !isNaN(x)) {
      const X = s.valueAsNumber || x && +x;
      we(Y.value) || (R = X > Y.value), we(ie.value) || (W = X < ie.value);
    } else {
      const X = s.valueAsDate || new Date(x), fe = (oe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + oe), Ae = s.type == "time", ye = s.type == "week";
      Ue(Y.value) && x && (R = Ae ? fe(x) > fe(Y.value) : ye ? x > Y.value : X > new Date(Y.value)), Ue(ie.value) && x && (W = Ae ? fe(x) < fe(ie.value) : ye ? x < ie.value : X < new Date(ie.value));
    }
    if ((R || W) && (Ne(!!R, Y.message, ie.message, Qe.max, Qe.min), !r))
      return Z(B[S].message), B;
  }
  if ((c || l) && !ae && (Ue(x) || n && Array.isArray(x))) {
    const R = Mt(c), W = Mt(l), Y = !we(R.value) && x.length > +R.value, ie = !we(W.value) && x.length < +W.value;
    if ((Y || ie) && (Ne(Y, R.message, W.message), !r))
      return Z(B[S].message), B;
  }
  if (y && !ae && Ue(x)) {
    const { value: R, message: W } = Mt(y);
    if (ea(R) && !x.match(R) && (B[S] = {
      type: Qe.pattern,
      message: W,
      ref: s,
      ...te(Qe.pattern, W)
    }, !r))
      return Z(W), B;
  }
  if (T) {
    if (ot(T)) {
      const R = await T(x, t), W = Wn(R, q);
      if (W && (B[S] = {
        ...W,
        ...te(Qe.validate, W.message)
      }, !r))
        return Z(W.message), B;
    } else if (me(T)) {
      let R = {};
      for (const W in T) {
        if (!Ce(R) && !r)
          break;
        const Y = Wn(await T[W](x, t), q, W);
        Y && (R = {
          ...Y,
          ...te(W, Y.message)
        }, Z(Y.message), r && (B[S] = R));
      }
      if (!Ce(R) && (B[S] = {
        ref: q,
        ...R
      }, !r))
        return B;
    }
  }
  return Z(!0), B;
};
function _c(e, t) {
  const r = t.slice(0, -1).length;
  let a = 0;
  for (; a < r; )
    e = le(e) ? a++ : e[t[a++]];
  return e;
}
function wc(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !le(e[t]))
      return !1;
  return !0;
}
function pe(e, t) {
  const r = Array.isArray(t) ? t : un(t) ? [t] : Rs(t), a = r.length === 1 ? e : _c(e, r), n = r.length - 1, s = r[n];
  return a && delete a[s], n !== 0 && (me(a) && Ce(a) || Array.isArray(a) && wc(a)) && pe(e, r.slice(0, -1)), e;
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
}, ta = (e) => we(e) || !Ts(e);
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
      if (Lt(s) && Lt(i) || me(s) && me(i) || Array.isArray(s) && Array.isArray(i) ? !_t(s, i) : s !== i)
        return !1;
    }
  }
  return !0;
}
var Ls = (e) => e.type === "select-multiple", xc = (e) => dn(e) || xr(e), Ma = (e) => Kr(e) && e.isConnected, js = (e) => {
  for (const t in e)
    if (ot(e[t]))
      return !0;
  return !1;
};
function ra(e, t = {}) {
  const r = Array.isArray(e);
  if (me(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || me(e[a]) && !js(e[a]) ? (t[a] = Array.isArray(e[a]) ? [] : {}, ra(e[a], t[a])) : we(e[a]) || (t[a] = !0);
  return t;
}
function Zs(e, t, r) {
  const a = Array.isArray(e);
  if (me(e) || a)
    for (const n in e)
      Array.isArray(e[n]) || me(e[n]) && !js(e[n]) ? le(t) || ta(r[n]) ? r[n] = Array.isArray(e[n]) ? ra(e[n], []) : { ...ra(e[n]) } : Zs(e[n], we(t) ? {} : t[n], r[n]) : r[n] = !_t(e[n], t[n]);
  return r;
}
var Pa = (e, t) => Zs(e, t, ra(t)), Fs = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: a }) => le(e) ? e : t ? e === "" ? NaN : e && +e : r && Ue(e) ? new Date(e) : a ? a(e) : e;
function Va(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return ln(t) ? t.files : dn(t) ? Vs(e.refs).value : Ls(t) ? [...t.selectedOptions].map(({ value: r }) => r) : xr(t) ? Ps(e.refs).value : Fs(le(t.value) ? e.ref.value : t.value, e);
}
var kc = (e, t, r, a) => {
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
}, Xt = (e) => le(e) ? e : ea(e) ? e.source : me(e) ? ea(e.value) ? e.value.source : e.value : e, Dc = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Bn(e, t, r) {
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
var Oc = (e, t, r, a, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(t || e) : (r ? a.isOnBlur : n.isOnBlur) ? !e : (r ? a.isOnChange : n.isOnChange) ? e : !0, Tc = (e, t) => !kr(w(e, t)).length && pe(e, t);
const Sc = {
  mode: Le.onSubmit,
  reValidateMode: Le.onChange,
  shouldFocusError: !0
};
function Ec(e = {}, t) {
  let r = {
    ...Sc,
    ...e
  }, a = {
    submitCount: 0,
    isDirty: !1,
    isLoading: ot(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, n = {}, s = me(r.defaultValues) || me(r.values) ? Pe(r.defaultValues || r.values) || {} : {}, i = r.shouldUnregister ? {} : Pe(s), o = {
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
  }, T = e.resetOptions && e.resetOptions.keepDirtyValues, S = Ln(r.mode), V = Ln(r.reValidateMode), F = r.criteriaMode === Le.all, L = (u) => (f) => {
    clearTimeout(d), d = setTimeout(u, f);
  }, x = async (u) => {
    if (v.isValid || u) {
      const f = r.resolver ? Ce((await te()).errors) : await R(n, !0);
      f !== a.isValid && y.state.next({
        isValid: f
      });
    }
  }, q = (u) => v.isValidating && y.state.next({
    isValidating: u
  }), Z = (u, f = [], h, D, _ = !0, g = !0) => {
    if (D && h) {
      if (o.action = !0, g && Array.isArray(w(n, u))) {
        const N = h(w(n, u), D.argA, D.argB);
        _ && G(n, u, N);
      }
      if (g && Array.isArray(w(a.errors, u))) {
        const N = h(w(a.errors, u), D.argA, D.argB);
        _ && G(a.errors, u, N), Tc(a.errors, u);
      }
      if (v.touchedFields && g && Array.isArray(w(a.touchedFields, u))) {
        const N = h(w(a.touchedFields, u), D.argA, D.argB);
        _ && G(a.touchedFields, u, N);
      }
      v.dirtyFields && (a.dirtyFields = Pa(s, i)), y.state.next({
        name: u,
        isDirty: Y(u, f),
        dirtyFields: a.dirtyFields,
        errors: a.errors,
        isValid: a.isValid
      });
    } else
      G(i, u, f);
  }, B = (u, f) => {
    G(a.errors, u, f), y.state.next({
      errors: a.errors
    });
  }, U = (u) => {
    a.errors = u, y.state.next({
      errors: a.errors,
      isValid: !1
    });
  }, ke = (u, f, h, D) => {
    const _ = w(n, u);
    if (_) {
      const g = w(i, u, le(h) ? w(s, u) : h);
      le(g) || D && D.defaultChecked || f ? G(i, u, f ? g : Va(_._f)) : fe(u, g), o.mount && x();
    }
  }, ve = (u, f, h, D, _) => {
    let g = !1, N = !1;
    const Q = {
      name: u
    };
    if (!h || D) {
      v.isDirty && (N = a.isDirty, a.isDirty = Q.isDirty = Y(), g = N !== Q.isDirty);
      const ce = _t(w(s, u), f);
      N = w(a.dirtyFields, u), ce ? pe(a.dirtyFields, u) : G(a.dirtyFields, u, !0), Q.dirtyFields = a.dirtyFields, g = g || v.dirtyFields && N !== !ce;
    }
    if (h) {
      const ce = w(a.touchedFields, u);
      ce || (G(a.touchedFields, u, h), Q.touchedFields = a.touchedFields, g = g || v.touchedFields && ce !== h);
    }
    return g && _ && y.state.next(Q), g ? Q : {};
  }, ae = (u, f, h, D) => {
    const _ = w(a.errors, u), g = v.isValid && Ve(f) && a.isValid !== f;
    if (e.delayError && h ? (l = L(() => B(u, h)), l(e.delayError)) : (clearTimeout(d), l = null, h ? G(a.errors, u, h) : pe(a.errors, u)), (h ? !_t(_, h) : _) || !Ce(D) || g) {
      const N = {
        ...D,
        ...g && Ve(f) ? { isValid: f } : {},
        errors: a.errors,
        name: u
      };
      a = {
        ...a,
        ...N
      }, y.state.next(N);
    }
    q(!1);
  }, te = async (u) => r.resolver(i, r.context, kc(u || c.mount, n, r.criteriaMode, r.shouldUseNativeValidation)), Ne = async (u) => {
    const { errors: f } = await te(u);
    if (u)
      for (const h of u) {
        const D = w(f, h);
        D ? G(a.errors, h, D) : pe(a.errors, h);
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
          const Q = c.array.has(g.name), ce = await Yn(_, i, F, r.shouldUseNativeValidation && !f, Q);
          if (ce[g.name] && (h.valid = !1, f))
            break;
          !f && (w(ce, g.name) ? Q ? bc(a.errors, ce, g.name) : G(a.errors, g.name, ce[g.name]) : pe(a.errors, g.name));
        }
        N && await R(N, f, h);
      }
    }
    return h.valid;
  }, W = () => {
    for (const u of c.unMount) {
      const f = w(n, u);
      f && (f._f.refs ? f._f.refs.every((h) => !Ma(h)) : !Ma(f._f.ref)) && qe(u);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Y = (u, f) => (u && f && G(i, u, f), !_t(z(), s)), ie = (u, f, h) => Is(u, c, {
    ...o.mount ? i : le(f) ? s : Ue(u) ? { [u]: f } : f
  }, h, f), X = (u) => kr(w(o.mount ? i : s, u, e.shouldUnregister ? w(s, u, []) : [])), fe = (u, f, h = {}) => {
    const D = w(n, u);
    let _ = f;
    if (D) {
      const g = D._f;
      g && (!g.disabled && G(i, u, Fs(f, g)), _ = Kr(g.ref) && we(f) ? "" : f, Ls(g.ref) ? [...g.ref.options].forEach((N) => N.selected = _.includes(N.value)) : g.refs ? xr(g.ref) ? g.refs.length > 1 ? g.refs.forEach((N) => (!N.defaultChecked || !N.disabled) && (N.checked = Array.isArray(_) ? !!_.find((Q) => Q === N.value) : _ === N.value)) : g.refs[0] && (g.refs[0].checked = !!_) : g.refs.forEach((N) => N.checked = N.value === _) : ln(g.ref) ? g.ref.value = "" : (g.ref.value = _, g.ref.type || y.values.next({
        name: u,
        values: { ...i }
      })));
    }
    (h.shouldDirty || h.shouldTouch) && ve(u, _, h.shouldTouch, h.shouldDirty, !0), h.shouldValidate && Se(u);
  }, Ae = (u, f, h) => {
    for (const D in f) {
      const _ = f[D], g = `${u}.${D}`, N = w(n, g);
      (c.array.has(u) || !ta(_) || N && !N._f) && !Lt(_) ? Ae(g, _, h) : fe(g, _, h);
    }
  }, ye = (u, f, h = {}) => {
    const D = w(n, u), _ = c.array.has(u), g = Pe(f);
    G(i, u, g), _ ? (y.array.next({
      name: u,
      values: { ...i }
    }), (v.isDirty || v.dirtyFields) && h.shouldDirty && y.state.next({
      name: u,
      dirtyFields: Pa(s, i),
      isDirty: Y(u, g)
    })) : D && !D._f && !we(g) ? Ae(u, g, h) : fe(u, g, h), jn(u, c) && y.state.next({ ...a }), y.values.next({
      name: u,
      values: { ...i }
    }), !o.mount && t();
  }, oe = async (u) => {
    const f = u.target;
    let h = f.name, D = !0;
    const _ = w(n, h), g = () => f.type ? Va(_._f) : Ss(u), N = (Q) => {
      D = Number.isNaN(Q) || Q === w(i, h, Q);
    };
    if (_) {
      let Q, ce;
      const at = g(), Ge = u.type === Xr.BLUR || u.type === Xr.FOCUS_OUT, Er = !Dc(_._f) && !r.resolver && !w(a.errors, h) && !_._f.deps || Oc(Ge, w(a.touchedFields, h), a.isSubmitted, V, S), Qt = jn(h, c, Ge);
      G(i, h, at), Ge ? (_._f.onBlur && _._f.onBlur(u), l && l(0)) : _._f.onChange && _._f.onChange(u);
      const nt = ve(h, at, Ge, !1), Cr = !Ce(nt) || Qt;
      if (!Ge && y.values.next({
        name: h,
        type: u.type,
        values: { ...i }
      }), Er)
        return v.isValid && x(), Cr && y.state.next({ name: h, ...Qt ? {} : nt });
      if (!Ge && Qt && y.state.next({ ...a }), q(!0), r.resolver) {
        const { errors: Nr } = await te([h]);
        if (N(at), D) {
          const Ar = Bn(a.errors, n, h), Jt = Bn(Nr, n, Ar.name || h);
          Q = Jt.error, h = Jt.name, ce = Ce(Nr);
        }
      } else
        Q = (await Yn(_, i, F, r.shouldUseNativeValidation))[h], N(at), D && (Q ? ce = !1 : v.isValid && (ce = await R(n, !0)));
      D && (_._f.deps && Se(_._f.deps), ae(h, ce, Q, nt));
    }
  }, Te = (u, f) => {
    if (w(a.errors, f) && u.focus)
      return u.focus(), 1;
  }, Se = async (u, f = {}) => {
    let h, D;
    const _ = $r(u);
    if (q(!0), r.resolver) {
      const g = await Ne(le(u) ? u : _);
      h = Ce(g), D = u ? !_.some((N) => w(g, N)) : h;
    } else
      u ? (D = (await Promise.all(_.map(async (g) => {
        const N = w(n, g);
        return await R(N && N._f ? { [g]: N } : N);
      }))).every(Boolean), !(!D && !a.isValid) && x()) : D = h = await R(n);
    return y.state.next({
      ...!Ue(u) || v.isValid && h !== a.isValid ? {} : { name: u },
      ...r.resolver || !u ? { isValid: h } : {},
      errors: a.errors,
      isValidating: !1
    }), f.shouldFocus && !D && tr(n, Te, u ? _ : c.mount), D;
  }, z = (u) => {
    const f = {
      ...s,
      ...o.mount ? i : {}
    };
    return le(u) ? f : Ue(u) ? w(f, u) : u.map((h) => w(f, h));
  }, K = (u, f) => ({
    invalid: !!w((f || a).errors, u),
    isDirty: !!w((f || a).dirtyFields, u),
    isTouched: !!w((f || a).touchedFields, u),
    error: w((f || a).errors, u)
  }), vt = (u) => {
    u && $r(u).forEach((f) => pe(a.errors, f)), y.state.next({
      errors: u ? a.errors : {}
    });
  }, mt = (u, f, h) => {
    const D = (w(n, u, { _f: {} })._f || {}).ref;
    G(a.errors, u, {
      ...f,
      ref: D
    }), y.state.next({
      name: u,
      errors: a.errors,
      isValid: !1
    }), h && h.shouldFocus && D && D.focus && D.focus();
  }, yt = (u, f) => ot(u) ? y.values.subscribe({
    next: (h) => u(ie(void 0, f), h)
  }) : ie(u, f, !0), qe = (u, f = {}) => {
    for (const h of u ? $r(u) : c.mount)
      c.mount.delete(h), c.array.delete(h), f.keepValue || (pe(n, h), pe(i, h)), !f.keepError && pe(a.errors, h), !f.keepDirty && pe(a.dirtyFields, h), !f.keepTouched && pe(a.touchedFields, h), !r.shouldUnregister && !f.keepDefaultValue && pe(s, h);
    y.values.next({
      values: { ...i }
    }), y.state.next({
      ...a,
      ...f.keepDirty ? { isDirty: Y() } : {}
    }), !f.keepIsValid && x();
  }, Ie = ({ disabled: u, name: f, field: h, fields: D, value: _ }) => {
    if (Ve(u)) {
      const g = u ? void 0 : le(_) ? Va(h ? h._f : w(D, f)._f) : _;
      G(i, f, g), ve(f, g, !1, !1, !0);
    }
  }, pt = (u, f = {}) => {
    let h = w(n, u);
    const D = Ve(f.disabled);
    return G(n, u, {
      ...h || {},
      _f: {
        ...h && h._f ? h._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...f
      }
    }), c.mount.add(u), h ? Ie({
      field: h,
      disabled: f.disabled,
      name: u
    }) : ke(u, !0, f.value), {
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
          const g = le(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, N = xc(g), Q = h._f.refs || [];
          if (N ? Q.find((ce) => ce === g) : g === h._f.ref)
            return;
          G(n, u, {
            _f: {
              ...h._f,
              ...N ? {
                refs: [
                  ...Q.filter(Ma),
                  g,
                  ...Array.isArray(w(s, u)) ? [{}] : []
                ],
                ref: { type: g.type, name: u }
              } : { ref: g }
            }
          }), ke(u, !1, void 0, g);
        } else
          h = w(n, u, {}), h._f && (h._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(Es(c.array, u) && o.action) && c.unMount.add(u);
      }
    };
  }, Nt = () => r.shouldFocusError && tr(n, Te, c.mount), At = (u) => {
    Ve(u) && (y.state.next({ disabled: u }), tr(n, (f, h) => {
      let D = u;
      const _ = w(n, h);
      _ && Ve(_._f.disabled) && (D || (D = _._f.disabled)), f.disabled = D;
    }, 0, !1));
  }, It = (u, f) => async (h) => {
    h && (h.preventDefault && h.preventDefault(), h.persist && h.persist());
    let D = Pe(i);
    if (y.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: _, values: g } = await te();
      a.errors = _, D = g;
    } else
      await R(n);
    pe(a.errors, "root"), Ce(a.errors) ? (y.state.next({
      errors: {}
    }), await u(D, h)) : (f && await f({ ...a.errors }, h), Nt(), setTimeout(Nt)), y.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ce(a.errors),
      submitCount: a.submitCount + 1,
      errors: a.errors
    });
  }, de = (u, f = {}) => {
    w(n, u) && (le(f.defaultValue) ? ye(u, w(s, u)) : (ye(u, f.defaultValue), G(s, u, f.defaultValue)), f.keepTouched || pe(a.touchedFields, u), f.keepDirty || (pe(a.dirtyFields, u), a.isDirty = f.defaultValue ? Y(u, w(s, u)) : Y()), f.keepError || (pe(a.errors, u), v.isValid && x()), y.state.next({ ...a }));
  }, rt = (u, f = {}) => {
    const h = u ? Pe(u) : s, D = Pe(h), _ = u && !Ce(u) ? D : s;
    if (f.keepDefaultValues || (s = h), !f.keepValues) {
      if (f.keepDirtyValues || T)
        for (const g of c.mount)
          w(a.dirtyFields, g) ? G(_, g, w(i, g)) : ye(g, w(_, g));
      else {
        if (sn && le(u))
          for (const g of c.mount) {
            const N = w(n, g);
            if (N && N._f) {
              const Q = Array.isArray(N._f.refs) ? N._f.refs[0] : N._f.ref;
              if (Kr(Q)) {
                const ce = Q.closest("form");
                if (ce) {
                  ce.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      i = e.shouldUnregister ? f.keepDefaultValues ? Pe(s) : {} : Pe(_), y.array.next({
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
  }, be = (u, f) => rt(ot(u) ? u(i) : u, f);
  return {
    control: {
      register: pt,
      unregister: qe,
      getFieldState: K,
      handleSubmit: It,
      setError: mt,
      _executeSchema: te,
      _getWatch: ie,
      _getDirty: Y,
      _updateValid: x,
      _removeUnmounted: W,
      _updateFieldArray: Z,
      _updateDisabledField: Ie,
      _getFieldArray: X,
      _reset: rt,
      _resetDefaultValues: () => ot(r.defaultValues) && r.defaultValues().then((u) => {
        be(u, r.resetOptions), y.state.next({
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
      _setErrors: U,
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
    setValue: ye,
    getValues: z,
    reset: be,
    resetField: de,
    clearErrors: vt,
    unregister: qe,
    setError: mt,
    setFocus: (u, f = {}) => {
      const h = w(n, u), D = h && h._f;
      if (D) {
        const _ = D.refs ? D.refs[0] : D.ref;
        _.focus && (_.focus(), f.shouldSelect && _.select());
      }
    },
    getFieldState: K
  };
}
function Cc(e = {}) {
  const t = b.useRef(), r = b.useRef(), [a, n] = b.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ot(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: ot(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Ec(e, () => n((i) => ({ ...i }))),
    formState: a
  });
  const s = t.current.control;
  return s._options = e, cn({
    subject: s._subjects.state,
    next: (i) => {
      Ns(i, s._proxyFormState, s._updateFormState, !0) && n({ ...s._formState });
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
  }), t.current.formState = Cs(a, s), t.current;
}
const wd = ({
  render: e,
  ...t
}) => /* @__PURE__ */ I(gc, { ...t, render: ({
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
var $s = {};
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
})($s);
const Nc = ({
  helperText: e,
  label: t,
  error: r,
  children: a,
  ...n
}, s) => (e = r || e, /* @__PURE__ */ $e("div", { ref: s, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, t && {
  paddingTop: "1.5rem"
}], ...n, children: [
  a,
  t && /* @__PURE__ */ I("label", { css: [{
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
  e && /* @__PURE__ */ $e("div", { css: [{
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
    r && /* @__PURE__ */ I(ct, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: $s.faTriangleExclamation }),
    e
  ] })
] })), ua = E.forwardRef(Nc);
var Un = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var a = w(r, t);
    e.setCustomValidity(a && a.message || ""), e.reportValidity();
  }
}, Ws = function(e, t) {
  var r = function(n) {
    var s = t.fields[n];
    s && s.ref && "reportValidity" in s.ref ? Un(s.ref, n, e) : s.refs && s.refs.forEach(function(i) {
      return Un(i, n, e);
    });
  };
  for (var a in t.fields)
    r(a);
}, Ac = function(e, t) {
  t.shouldUseNativeValidation && Ws(e, t);
  var r = {};
  for (var a in e) {
    var n = w(t.fields, a), s = Object.assign(e[a] || {}, { ref: n && n.ref });
    if (Rc(t.names || Object.keys(e), a)) {
      var i = Object.assign({}, Ic(w(r, a)));
      G(i, "root", s), G(r, a, i);
    } else
      G(r, a, s);
  }
  return r;
}, Ic = function(e) {
  return Array.isArray(e) ? e.filter(Boolean) : [];
}, Rc = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, Mc = function(e, t) {
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
      r[i] = Ms(i, t, r, n, l ? [].concat(l, a.message) : a.message);
    }
    e.shift();
  }
  return r;
}, Pc = function(e, t, r) {
  return r === void 0 && (r = {}), function(a, n, s) {
    try {
      return Promise.resolve(function(i, o) {
        try {
          var c = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](a, t)).then(function(l) {
            return s.shouldUseNativeValidation && Ws({}, s), { errors: {}, values: r.raw ? a : l };
          });
        } catch (l) {
          return o(l);
        }
        return c && c.then ? c.then(void 0, o) : c;
      }(0, function(i) {
        if (function(o) {
          return o.errors != null;
        }(i))
          return { values: {}, errors: Ac(Mc(i.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
};
const Vc = ({
  schema: e,
  mode: t = "onChange",
  reValidateMode: r = "onChange",
  onValid: a,
  onInvalid: n,
  ...s
} = {}) => {
  const i = Cc({
    mode: t,
    reValidateMode: r,
    resolver: e ? Pc(e) : void 0,
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
}, xd = ({
  onValid: e,
  context: t,
  mutation: r,
  defaultValues: a,
  schema: n,
  ...s
}) => {
  const i = Vc({
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
var Ys = {};
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
})(Ys);
const Lc = (e, t) => {
  const [r, a] = E.useState(!1);
  return /* @__PURE__ */ I(ao, { ref: t, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ I(to, { position: "end", children: /* @__PURE__ */ I(ro, { size: "small", edge: "end", onClick: () => a((n) => !n), children: /* @__PURE__ */ I(ct, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, vs`
                  width: 18px;
                `], icon: r ? Qi.faEyeSlash : Ys.faEye }) }) })
  }, ...e });
};
E.forwardRef(Lc);
const la = E.forwardRef(({
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
  ...d
}, v) => {
  const [y, T] = b.useState(!1), {
    getRootProps: S,
    getInputProps: V
  } = no({
    error: !!i,
    onBlur: n,
    onFocus: s,
    disabled: c,
    ...d
  }), {
    onBlur: F,
    onFocus: L,
    ...x
  } = V();
  x.ref = ms(x.ref, v), x.value = x.value || "", i && (t = i);
  let q = /* @__PURE__ */ $e("div", { ref: a, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, i ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, y && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : y ? {
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
    l && /* @__PURE__ */ $e("div", { css: {
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
      /* @__PURE__ */ I(ct, { icon: hs.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ I("input", { css: [{
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
    }], onFocus: (Z) => {
      c || (T(!0), L == null || L(Z));
    }, onBlur: (Z) => {
      T(!1), F == null || F(Z);
    }, ...d, ...x, type: l ? "hidden" : d.type || "text" }),
    o && !c && /* @__PURE__ */ I("div", { css: {
      display: "flex",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: o })
  ] });
  return e && (q = /* @__PURE__ */ I(ua, { label: e, error: i, className: r, helperText: t, ...S(), children: q })), q;
});
var Bs = {}, Us = {};
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
})(Us);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Us;
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
})(Bs);
const zs = "id", jc = ({
  className: e,
  isLoading: t = !1,
  inputLoading: r = !1,
  idField: a = zs,
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
  onSelect: V,
  disabled: F,
  value: L,
  allowClear: x = !0,
  autoComplete: q = !0,
  autoSelect: Z = !1,
  ...B
}, U) => {
  const ke = E.useCallback((z) => n && n in z ? z[n] : JSON.stringify(z), [n]), ve = E.useMemo(() => i ? (L == null ? void 0 : L.map((z) => s.find((K) => K[a] == z))) || null : s.find((z) => z[a] == L) || null, [L, s]), {
    value: ae,
    getRootProps: te,
    getInputProps: Ne,
    getListboxProps: R,
    getOptionProps: W,
    groupedOptions: Y,
    getClearProps: ie,
    setAnchorEl: X,
    anchorEl: fe,
    popupOpen: Ae,
    getTagProps: ye
  } = so({
    options: s,
    autoComplete: q,
    autoSelect: Z,
    multiple: i,
    open: o,
    value: ve,
    getOptionLabel: ke,
    isOptionEqualToValue: (z, K) => a ? z[a] === K[a] : z === K,
    onInputChange: S,
    autoHighlight: !0,
    onOpen: d,
    onClose: v,
    disabled: F,
    unstable_classNamePrefix: "c",
    onChange: (z, K) => {
      T && (Array.isArray(K) ? T(K.map((vt) => vt[a])) : T(K && typeof K == "object" ? K[a] : K)), V == null || V(K);
    }
  }), oe = ms(U, X), Te = fe && Y.length > 0 ? /* @__PURE__ */ I("ul", { css: {
    width: "100%"
  }, ...R(), children: Y.map((z, K) => /* @__PURE__ */ I(b.Fragment, { children: "group" in z ? /* @__PURE__ */ I(Hi, {}) : /* @__PURE__ */ I("li", { css: [{
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
  }, vs`
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
                `], ...W({
    option: z,
    index: K
  }), children: y ? y(z) : ke(z) }, z.key) }, a in z ? z[a] : K)) }) : null, Se = E.useMemo(() => i ? ae && ae.length > 0 : !!ae, [ae, i]);
  return /* @__PURE__ */ $e(ua, { label: c, error: l, className: e, ...te(), children: [
    i && (ae == null ? void 0 : ae.length) > 0 && /* @__PURE__ */ I("div", { css: {
      marginBottom: "0.25rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }, children: ae == null ? void 0 : ae.map((z, K) => (
      // eslint-disable-next-line react/jsx-key
      /* @__PURE__ */ I("div", { ...ye({
        index: K
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
      }, children: y ? y(z) : ke(z) })
    )) }),
    /* @__PURE__ */ I(la, { ...B, error: l, ...Ne(), inputWrapRef: oe, isLoading: r, afterItems: [Se && x && !i && /* @__PURE__ */ I("button", { ...ie(), onMouseDown: (z) => {
      z.preventDefault(), z.stopPropagation();
    }, children: /* @__PURE__ */ I(ct, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: Bs.faTimes }) }, "clear"), /* @__PURE__ */ I("button", { css: [{
      pointerEvents: "none"
    }], children: /* @__PURE__ */ I(ct, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, l && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: Ji.faCaretDown }) }, "arrow")] }),
    fe && /* @__PURE__ */ I(ys, { open: Ae, anchorEl: fe, children: /* @__PURE__ */ I("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: fe.offsetWidth
    }], children: t ? /* @__PURE__ */ $e("div", { css: {
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
      /* @__PURE__ */ I(ct, { icon: hs.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }, spin: !0, size: "lg" }),
      "Загрузка..."
    ] }) : Te }) })
  ] });
}, Hs = E.forwardRef(jc), Zc = ({
  dictionary: e,
  open: t = !1,
  value: r,
  ...a
}, n) => {
  const [s, i] = E.useState(t), o = Xi(e, {
    enabled: s || !!r
  });
  return E.useEffect(() => {
    i(t);
  }, [t]), /* @__PURE__ */ I(
    Hs,
    {
      displayField: "name",
      ...a,
      ref: n,
      open: s,
      value: r,
      isLoading: o.isLoading,
      onOpen: () => {
        i(!0);
      },
      onClose: () => {
        i(!1);
      },
      options: o.data || []
    }
  );
}, kd = E.forwardRef(Zc);
var Fc = "Expected a function", qs = "__lodash_hash_undefined__", $c = "[object Function]", Wc = "[object GeneratorFunction]", Yc = /[\\^$.*+?()[\]{}|]/g, Bc = /^\[object .+?Constructor\]$/, Uc = typeof Mr == "object" && Mr && Mr.Object === Object && Mr, zc = typeof self == "object" && self && self.Object === Object && self, Gs = Uc || zc || Function("return this")();
function Hc(e, t) {
  return e == null ? void 0 : e[t];
}
function qc(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
var Gc = Array.prototype, Qc = Function.prototype, Qs = Object.prototype, La = Gs["__core-js_shared__"], zn = function() {
  var e = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), Js = Qc.toString, fn = Qs.hasOwnProperty, Jc = Qs.toString, Xc = RegExp(
  "^" + Js.call(fn).replace(Yc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), Kc = Gc.splice, eu = Xs(Gs, "Map"), vr = Xs(Object, "create");
function Tt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function tu() {
  this.__data__ = vr ? vr(null) : {};
}
function ru(e) {
  return this.has(e) && delete this.__data__[e];
}
function au(e) {
  var t = this.__data__;
  if (vr) {
    var r = t[e];
    return r === qs ? void 0 : r;
  }
  return fn.call(t, e) ? t[e] : void 0;
}
function nu(e) {
  var t = this.__data__;
  return vr ? t[e] !== void 0 : fn.call(t, e);
}
function su(e, t) {
  var r = this.__data__;
  return r[e] = vr && t === void 0 ? qs : t, this;
}
Tt.prototype.clear = tu;
Tt.prototype.delete = ru;
Tt.prototype.get = au;
Tt.prototype.has = nu;
Tt.prototype.set = su;
function zt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function iu() {
  this.__data__ = [];
}
function ou(e) {
  var t = this.__data__, r = da(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Kc.call(t, r, 1), !0;
}
function cu(e) {
  var t = this.__data__, r = da(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function uu(e) {
  return da(this.__data__, e) > -1;
}
function lu(e, t) {
  var r = this.__data__, a = da(r, e);
  return a < 0 ? r.push([e, t]) : r[a][1] = t, this;
}
zt.prototype.clear = iu;
zt.prototype.delete = ou;
zt.prototype.get = cu;
zt.prototype.has = uu;
zt.prototype.set = lu;
function St(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function du() {
  this.__data__ = {
    hash: new Tt(),
    map: new (eu || zt)(),
    string: new Tt()
  };
}
function fu(e) {
  return fa(this, e).delete(e);
}
function hu(e) {
  return fa(this, e).get(e);
}
function vu(e) {
  return fa(this, e).has(e);
}
function mu(e, t) {
  return fa(this, e).set(e, t), this;
}
St.prototype.clear = du;
St.prototype.delete = fu;
St.prototype.get = hu;
St.prototype.has = vu;
St.prototype.set = mu;
function da(e, t) {
  for (var r = e.length; r--; )
    if (_u(e[r][0], t))
      return r;
  return -1;
}
function yu(e) {
  if (!Ks(e) || gu(e))
    return !1;
  var t = wu(e) || qc(e) ? Xc : Bc;
  return t.test(bu(e));
}
function fa(e, t) {
  var r = e.__data__;
  return pu(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Xs(e, t) {
  var r = Hc(e, t);
  return yu(r) ? r : void 0;
}
function pu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function gu(e) {
  return !!zn && zn in e;
}
function bu(e) {
  if (e != null) {
    try {
      return Js.call(e);
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
    throw new TypeError(Fc);
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
function _u(e, t) {
  return e === t || e !== e && t !== t;
}
function wu(e) {
  var t = Ks(e) ? Jc.call(e) : "";
  return t == $c || t == Wc;
}
function Ks(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
var xu = hn;
const ei = /* @__PURE__ */ ds(xu);
function ti(e) {
  return JSON.stringify(e);
}
function ku(e) {
  return typeof e == "string";
}
function Du(e, t, r) {
  return r.indexOf(e) === t;
}
function Ou(e) {
  return e.toLowerCase() === e;
}
function Hn(e) {
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
  if (e.indexOf("-") === -1 || !Ou(e))
    return e;
  var n = e.split("-"), s = n[0], i = n[1], o = i === void 0 ? "" : i;
  return "".concat(s, "-").concat(o.toUpperCase());
}
function Tu(e) {
  var t = e === void 0 ? {} : e, r = t.useFallbackLocale, a = r === void 0 ? !0 : r, n = t.fallbackLocale, s = n === void 0 ? "en-US" : n, i = [];
  if (typeof navigator < "u") {
    for (var o = navigator.languages || [], c = [], l = 0, d = o; l < d.length; l++) {
      var v = d[l];
      c = c.concat(Hn(v));
    }
    var y = navigator.language, T = y && Hn(y);
    i = i.concat(c, T);
  }
  return a && i.push(s), i.filter(ku).map(qa).filter(Du);
}
var Su = ei(Tu, ti);
function Eu(e) {
  return Su(e)[0] || null;
}
var ri = ei(Eu, ti);
function tt(e, t, r) {
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
function ft(e) {
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
var Cu = tt(re, Ht, -100), ai = tt(re, Ht, 100), vn = Dr(ai), Nu = tt(re, vn, -100), ni = Or(Ht, vn);
function ht(e) {
  var t = re(e), r = t + (-t + 1) % 10, a = /* @__PURE__ */ new Date();
  return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var si = tt(re, ht, -10), mn = tt(re, ht, 10), va = Dr(mn), ii = tt(re, va, -10), oi = Or(ht, va);
function qt(e) {
  var t = re(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var ci = tt(re, qt, -1), yn = tt(re, qt, 1), ma = Dr(yn), ui = tt(re, ma, -1), Au = Or(qt, ma);
function pn(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var s = re(a), i = ft(a) + n, o = /* @__PURE__ */ new Date();
    return o.setFullYear(s, i, 1), o.setHours(0, 0, 0, 0), e(o);
  };
}
function Et(e) {
  var t = re(e), r = ft(e), a = /* @__PURE__ */ new Date();
  return a.setFullYear(t, r, 1), a.setHours(0, 0, 0, 0), a;
}
var li = pn(Et, -1), gn = pn(Et, 1), Tr = Dr(gn), di = pn(Tr, -1), Iu = Or(Et, Tr);
function Ru(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var s = re(a), i = ft(a), o = ha(a) + n, c = /* @__PURE__ */ new Date();
    return c.setFullYear(s, i, o), c.setHours(0, 0, 0, 0), e(c);
  };
}
function Sr(e) {
  var t = re(e), r = ft(e), a = ha(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, r, a), n.setHours(0, 0, 0, 0), n;
}
var Mu = Ru(Sr, 1), bn = Dr(Mu), Pu = Or(Sr, bn);
function fi(e) {
  return ha(Tr(e));
}
var Kt, ee = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, jt = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
}, Vu = (Kt = {}, Kt[ee.GREGORY] = [
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
], Kt[ee.HEBREW] = ["he", "he-IL"], Kt[ee.ISLAMIC] = [
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
function Lu(e) {
  return function(r, a) {
    var n = r || ri();
    ja.has(n) || ja.set(n, /* @__PURE__ */ new Map());
    var s = ja.get(n);
    return s.has(e) || s.set(e, new Intl.DateTimeFormat(n || void 0, e).format), s.get(e)(a);
  };
}
function ju(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function Ct(e) {
  return function(t, r) {
    return Lu(e)(t, ju(r));
  };
}
var Zu = { day: "numeric" }, Fu = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, $u = { month: "long" }, Wu = {
  month: "long",
  year: "numeric"
}, Yu = { weekday: "short" }, Bu = { weekday: "long" }, Uu = { year: "numeric" }, zu = Ct(Zu), Hu = Ct(Fu), qu = Ct($u), hi = Ct(Wu), Gu = Ct(Yu), Qu = Ct(Bu), ya = Ct(Uu), Ju = _n[0], Xu = _n[5], qn = _n[6];
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
function Ku(e) {
  var t = Ht(e);
  return re(t);
}
function el(e) {
  var t = ht(e);
  return re(t);
}
function Ga(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = re(e), a = ft(e), n = e.getDate() - mr(e, t);
  return new Date(r, a, n);
}
function tl(e, t) {
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
      return ht(t);
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
function rl(e, t) {
  switch (e) {
    case "century":
      return Cu(t);
    case "decade":
      return si(t);
    case "year":
      return ci(t);
    case "month":
      return li(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function vi(e, t) {
  switch (e) {
    case "century":
      return ai(t);
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
function al(e, t) {
  switch (e) {
    case "decade":
      return si(t, -100);
    case "year":
      return ci(t, -10);
    case "month":
      return li(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function nl(e, t) {
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
function mi(e, t) {
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
function sl(e, t) {
  switch (e) {
    case "century":
      return Nu(t);
    case "decade":
      return ii(t);
    case "year":
      return ui(t);
    case "month":
      return di(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function il(e, t) {
  switch (e) {
    case "decade":
      return ii(t, -100);
    case "year":
      return ui(t, -10);
    case "month":
      return di(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Gn(e, t) {
  switch (e) {
    case "century":
      return ni(t);
    case "decade":
      return oi(t);
    case "year":
      return Au(t);
    case "month":
      return Iu(t);
    case "day":
      return Pu(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ol(e, t, r) {
  var a = [t, r].sort(function(n, s) {
    return n.getTime() - s.getTime();
  });
  return [xt(e, a[0]), mi(e, a[1])];
}
function yi(e, t, r) {
  return t === void 0 && (t = ya), r.map(function(a) {
    return t(e, a);
  }).join(" – ");
}
function cl(e, t, r) {
  return yi(e, t, ni(r));
}
function pi(e, t, r) {
  return yi(e, t, oi(r));
}
function ul(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function gi(e, t) {
  t === void 0 && (t = ee.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case ee.ISLAMIC:
    case ee.HEBREW:
      return r === Xu || r === qn;
    case ee.ISO_8601:
    case ee.GREGORY:
      return r === qn || r === Ju;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var Be = "react-calendar__navigation";
function ll(e) {
  var t = e.activeStartDate, r = e.drillUp, a = e.formatMonthYear, n = a === void 0 ? hi : a, s = e.formatYear, i = s === void 0 ? ya : s, o = e.locale, c = e.maxDate, l = e.minDate, d = e.navigationAriaLabel, v = d === void 0 ? "" : d, y = e.navigationAriaLive, T = e.navigationLabel, S = e.next2AriaLabel, V = S === void 0 ? "" : S, F = e.next2Label, L = F === void 0 ? "»" : F, x = e.nextAriaLabel, q = x === void 0 ? "" : x, Z = e.nextLabel, B = Z === void 0 ? "›" : Z, U = e.prev2AriaLabel, ke = U === void 0 ? "" : U, ve = e.prev2Label, ae = ve === void 0 ? "«" : ve, te = e.prevAriaLabel, Ne = te === void 0 ? "" : te, R = e.prevLabel, W = R === void 0 ? "‹" : R, Y = e.setActiveStartDate, ie = e.showDoubleView, X = e.view, fe = e.views, Ae = fe.indexOf(X) > 0, ye = X !== "century", oe = rl(X, t), Te = ye ? al(X, t) : void 0, Se = vi(X, t), z = ye ? nl(X, t) : void 0, K = function() {
    if (oe.getFullYear() < 0)
      return !0;
    var de = sl(X, t);
    return l && l >= de;
  }(), vt = ye && function() {
    if (Te.getFullYear() < 0)
      return !0;
    var de = il(X, t);
    return l && l >= de;
  }(), mt = c && c < Se, yt = ye && c && c < z;
  function qe() {
    Y(oe, "prev");
  }
  function Ie() {
    Y(Te, "prev2");
  }
  function pt() {
    Y(Se, "next");
  }
  function Nt() {
    Y(z, "next2");
  }
  function At(de) {
    var rt = function() {
      switch (X) {
        case "century":
          return cl(o, i, de);
        case "decade":
          return pi(o, i, de);
        case "year":
          return i(o, de);
        case "month":
          return n(o, de);
        default:
          throw new Error("Invalid view: ".concat(X, "."));
      }
    }();
    return T ? T({
      date: de,
      label: rt,
      locale: o || ri() || void 0,
      view: X
    }) : rt;
  }
  function It() {
    var de = "".concat(Be, "__label");
    return b.createElement(
      "button",
      { "aria-label": v, "aria-live": y, className: de, disabled: !Ae, onClick: r, style: { flexGrow: 1 }, type: "button" },
      b.createElement("span", { className: "".concat(de, "__labelText ").concat(de, "__labelText--from") }, At(t)),
      ie ? b.createElement(
        b.Fragment,
        null,
        b.createElement("span", { className: "".concat(de, "__divider") }, " – "),
        b.createElement("span", { className: "".concat(de, "__labelText ").concat(de, "__labelText--to") }, At(Se))
      ) : null
    );
  }
  return b.createElement(
    "div",
    { className: Be },
    ae !== null && ye ? b.createElement("button", { "aria-label": ke, className: "".concat(Be, "__arrow ").concat(Be, "__prev2-button"), disabled: vt, onClick: Ie, type: "button" }, ae) : null,
    W !== null && b.createElement("button", { "aria-label": Ne, className: "".concat(Be, "__arrow ").concat(Be, "__prev-button"), disabled: K, onClick: qe, type: "button" }, W),
    It(),
    B !== null && b.createElement("button", { "aria-label": q, className: "".concat(Be, "__arrow ").concat(Be, "__next-button"), disabled: mt, onClick: pt, type: "button" }, B),
    L !== null && ye ? b.createElement("button", { "aria-label": V, className: "".concat(Be, "__arrow ").concat(Be, "__next2-button"), disabled: yt, onClick: Nt, type: "button" }, L) : null
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
}, dl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Qn(e) {
  return "".concat(e, "%");
}
function wn(e) {
  var t = e.children, r = e.className, a = e.count, n = e.direction, s = e.offset, i = e.style, o = e.wrap, c = dl(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return b.createElement("div", Zt({ className: r, style: Zt({ display: "flex", flexDirection: n, flexWrap: o ? "wrap" : "nowrap" }, i) }, c), b.Children.map(t, function(l, d) {
    var v = s && d === 0 ? Qn(100 * s / a) : null;
    return b.cloneElement(l, Zt(Zt({}, l.props), { style: {
      flexBasis: Qn(100 / a),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: v,
      marginInlineStart: v,
      marginInlineEnd: 0
    } }));
  }));
}
var fl = function() {
}, hl = fl;
const vl = /* @__PURE__ */ ds(hl);
var Pt;
function ml(e, t, r) {
  return t && t > e ? t : r && r < e ? r : e;
}
function yr(e, t) {
  return t[0] <= e && t[1] >= e;
}
function yl(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function bi(e, t) {
  return yr(e[0], t) || yr(e[1], t);
}
function Jn(e, t, r) {
  var a = bi(t, e), n = [];
  if (a) {
    n.push(r);
    var s = yr(e[0], t), i = yr(e[1], t);
    s && n.push("".concat(r, "Start")), i && n.push("".concat(r, "End")), s && i && n.push("".concat(r, "BothEnds"));
  }
  return n;
}
function pl(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function gl(e) {
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
    return Gn(T, r);
  }();
  if (yr(i, o) && s.push("".concat(n, "--now")), !t || !pl(t))
    return s;
  var c = function() {
    if (Array.isArray(t))
      return t;
    var T = e.valueType;
    if (!T)
      throw new Error("valueType is required when value is not an array of two dates");
    return Gn(T, t);
  }();
  yl(c, o) ? s.push("".concat(n, "--active")) : bi(c, o) && s.push("".concat(n, "--hasActive"));
  var l = Jn(c, o, "".concat(n, "--range"));
  s.push.apply(s, l);
  var d = Array.isArray(t) ? t : [t];
  if (a && d.length === 1) {
    var v = a > c[0] ? [c[0], a] : [a, c[0]], y = Jn(v, o, "".concat(n, "--hover"));
    s.push.apply(s, y);
  }
  return s;
}
var bl = (Pt = {}, Pt[jt.ARABIC] = ee.ISLAMIC, Pt[jt.HEBREW] = ee.HEBREW, Pt[jt.ISO_8601] = ee.ISO_8601, Pt[jt.US] = ee.GREGORY, Pt);
function _l(e) {
  return e !== void 0 && e in jt;
}
var Xn = !1;
function pa(e) {
  if (_l(e)) {
    var t = bl[e];
    return vl(Xn, 'Specifying calendarType="'.concat(e, '" is deprecated. Use calendarType="').concat(t, '" instead.')), Xn = !0, t;
  }
  return e;
}
function ga(e) {
  for (var t = e.className, r = e.count, a = r === void 0 ? 3 : r, n = e.dateTransform, s = e.dateType, i = e.end, o = e.hover, c = e.offset, l = e.renderTile, d = e.start, v = e.step, y = v === void 0 ? 1 : v, T = e.value, S = e.valueType, V = [], F = d; F <= i; F += y) {
    var L = n(F);
    V.push(l({
      classes: gl({
        date: L,
        dateType: s,
        hover: o,
        value: T,
        valueType: S
      }),
      date: L
    }));
  }
  return b.createElement(wn, { className: t, count: a, offset: c, wrap: !0 }, V);
}
function ba(e) {
  var t = e.activeStartDate, r = e.children, a = e.classes, n = e.date, s = e.formatAbbr, i = e.locale, o = e.maxDate, c = e.maxDateTransform, l = e.minDate, d = e.minDateTransform, v = e.onClick, y = e.onMouseOver, T = e.style, S = e.tileClassName, V = e.tileContent, F = e.tileDisabled, L = e.view, x = E.useMemo(function() {
    var Z = { activeStartDate: t, date: n, view: L };
    return typeof S == "function" ? S(Z) : S;
  }, [t, n, S, L]), q = E.useMemo(function() {
    var Z = { activeStartDate: t, date: n, view: L };
    return typeof V == "function" ? V(Z) : V;
  }, [t, n, V, L]);
  return b.createElement(
    "button",
    { className: oa(a, x), disabled: l && d(l) > n || o && c(o) < n || F && F({ activeStartDate: t, date: n, view: L }), onClick: v ? function(Z) {
      return v(n, Z);
    } : void 0, onFocus: y ? function() {
      return y(n);
    } : void 0, onMouseOver: y ? function() {
      return y(n);
    } : void 0, style: T, type: "button" },
    s ? b.createElement("abbr", { "aria-label": s(i, n) }, r) : r,
    q
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
}, wl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Za = "react-calendar__century-view__decades__decade";
function xl(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.currentCentury, n = e.formatYear, s = n === void 0 ? ya : n, i = wl(e, ["classes", "currentCentury", "formatYear"]), o = i.date, c = i.locale, l = [];
  return r && l.push.apply(l, r), Za && l.push(Za), Ht(o).getFullYear() !== a && l.push("".concat(Za, "--neighboringCentury")), b.createElement(ba, Qa({}, i, { classes: l, maxDateTransform: va, minDateTransform: ht, view: "century" }), pi(c, s, o));
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
}, Kn = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function kl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringCentury, n = e.value, s = e.valueType, i = Kn(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), o = Ku(t), c = o + (a ? 119 : 99);
  return b.createElement(ga, { className: "react-calendar__century-view__decades", dateTransform: ht, dateType: "decade", end: c, hover: r, renderTile: function(l) {
    var d = l.date, v = Kn(l, ["date"]);
    return b.createElement(xl, Ja({ key: d.getTime() }, i, v, { activeStartDate: t, currentCentury: o, date: d }));
  }, start: o, step: 10, value: n, valueType: s });
}
var es = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, s; a < n; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Dl = Object.values(ee), Ol = Object.values(jt), Xa = ["century", "decade", "year", "month"], _i = m.oneOf(es(es([], Dl, !0), Ol, !0)), aa = m.oneOfType([
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
}, Tl = m.oneOfType([
  m.func,
  m.exact({
    current: m.any
  })
]), Sl = m.arrayOf(m.oneOfType([m.instanceOf(Date), m.oneOf([null])]).isRequired), El = m.oneOfType([
  m.instanceOf(Date),
  m.oneOf([null]),
  Sl
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
var Cl = function(e) {
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
  value: El,
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
}, wi = function(t) {
  function r() {
    return b.createElement(kl, pr({}, t));
  }
  return b.createElement("div", { className: "react-calendar__century-view" }, r());
};
wi.propTypes = pr(pr({}, _a), { showNeighboringCentury: m.bool });
const Nl = wi;
var Ka = globalThis && globalThis.__assign || function() {
  return Ka = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ka.apply(this, arguments);
}, Al = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Fa = "react-calendar__decade-view__years__year";
function Il(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.currentDecade, n = e.formatYear, s = n === void 0 ? ya : n, i = Al(e, ["classes", "currentDecade", "formatYear"]), o = i.date, c = i.locale, l = [];
  return r && l.push.apply(l, r), Fa && l.push(Fa), ht(o).getFullYear() !== a && l.push("".concat(Fa, "--neighboringDecade")), b.createElement(ba, Ka({}, i, { classes: l, maxDateTransform: ma, minDateTransform: qt, view: "decade" }), s(c, o));
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
}, ts = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Rl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringDecade, n = e.value, s = e.valueType, i = ts(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), o = el(t), c = o + (a ? 11 : 9);
  return b.createElement(ga, { className: "react-calendar__decade-view__years", dateTransform: qt, dateType: "year", end: c, hover: r, renderTile: function(l) {
    var d = l.date, v = ts(l, ["date"]);
    return b.createElement(Il, en({ key: d.getTime() }, i, v, { activeStartDate: t, currentDecade: o, date: d }));
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
}, xi = function(t) {
  function r() {
    return b.createElement(Rl, gr({}, t));
  }
  return b.createElement("div", { className: "react-calendar__decade-view" }, r());
};
xi.propTypes = gr(gr({}, _a), { showNeighboringDecade: m.bool });
const Ml = xi;
var tn = globalThis && globalThis.__assign || function() {
  return tn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, tn.apply(this, arguments);
}, Pl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, rs = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, s; a < n; a++)
      (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), s[a] = t[a]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Vl = "react-calendar__year-view__months__month";
function Ll(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.formatMonth, n = a === void 0 ? qu : a, s = e.formatMonthYear, i = s === void 0 ? hi : s, o = Pl(e, ["classes", "formatMonth", "formatMonthYear"]), c = o.date, l = o.locale;
  return b.createElement(ba, tn({}, o, { classes: rs(rs([], r, !0), [Vl], !1), formatAbbr: i, maxDateTransform: Tr, minDateTransform: Et, view: "year" }), n(l, c));
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
}, as = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function jl(e) {
  var t = e.activeStartDate, r = e.hover, a = e.value, n = e.valueType, s = as(e, ["activeStartDate", "hover", "value", "valueType"]), i = 0, o = 11, c = re(t);
  return b.createElement(ga, { className: "react-calendar__year-view__months", dateTransform: function(l) {
    var d = /* @__PURE__ */ new Date();
    return d.setFullYear(c, l, 1), Et(d);
  }, dateType: "month", end: o, hover: r, renderTile: function(l) {
    var d = l.date, v = as(l, ["date"]);
    return b.createElement(Ll, rn({ key: d.getTime() }, s, v, { activeStartDate: t, date: d }));
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
}, ki = function(t) {
  function r() {
    return b.createElement(jl, sa({}, t));
  }
  return b.createElement("div", { className: "react-calendar__year-view" }, r());
};
ki.propTypes = sa({}, _a);
const Zl = ki;
var an = globalThis && globalThis.__assign || function() {
  return an = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, an.apply(this, arguments);
}, Fl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Vr = "react-calendar__month-view__days__day";
function $l(e) {
  var t = e.calendarType, r = e.classes, a = r === void 0 ? [] : r, n = e.currentMonthIndex, s = e.formatDay, i = s === void 0 ? zu : s, o = e.formatLongDate, c = o === void 0 ? Hu : o, l = Fl(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), d = pa(t), v = l.date, y = l.locale, T = [];
  return a && T.push.apply(T, a), Vr && T.push(Vr), gi(v, d) && T.push("".concat(Vr, "--weekend")), v.getMonth() !== n && T.push("".concat(Vr, "--neighboringMonth")), b.createElement(ba, an({}, l, { classes: T, formatAbbr: c, maxDateTransform: bn, minDateTransform: Sr, view: "month" }), i(y, v));
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
}, ns = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Wl(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.hover, n = e.showFixedNumberOfWeeks, s = e.showNeighboringMonth, i = e.value, o = e.valueType, c = ns(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), l = pa(r), d = re(t), v = ft(t), y = n || s, T = mr(t, l), S = y ? 0 : T, V = (y ? -T : 0) + 1, F = function() {
    if (n)
      return V + 6 * 7 - 1;
    var L = fi(t);
    if (s) {
      var x = /* @__PURE__ */ new Date();
      x.setFullYear(d, v, L), x.setHours(0, 0, 0, 0);
      var q = 7 - mr(x, l) - 1;
      return L + q;
    }
    return L;
  }();
  return b.createElement(ga, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(L) {
    var x = /* @__PURE__ */ new Date();
    return x.setFullYear(d, v, L), Sr(x);
  }, dateType: "day", hover: a, end: F, renderTile: function(L) {
    var x = L.date, q = ns(L, ["date"]);
    return b.createElement($l, nn({ key: x.getTime() }, c, q, { activeStartDate: t, calendarType: r, currentMonthIndex: v, date: x }));
  }, offset: S, start: V, value: i, valueType: o });
}
var Di = "react-calendar__month-view__weekdays", $a = "".concat(Di, "__weekday");
function Yl(e) {
  for (var t = e.calendarType, r = e.formatShortWeekday, a = r === void 0 ? Gu : r, n = e.formatWeekday, s = n === void 0 ? Qu : n, i = e.locale, o = e.onMouseLeave, c = pa(t), l = /* @__PURE__ */ new Date(), d = Et(l), v = re(d), y = ft(d), T = [], S = 1; S <= 7; S += 1) {
    var V = new Date(v, y, S - mr(d, c)), F = s(i, V);
    T.push(b.createElement(
      "div",
      { key: S, className: oa($a, ul(V) && "".concat($a, "--current"), gi(V, c) && "".concat($a, "--weekend")) },
      b.createElement("abbr", { "aria-label": F, title: F }, a(i, V).replace(".", ""))
    ));
  }
  return b.createElement(wn, { className: Di, count: 7, onFocus: o, onMouseOver: o }, T);
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
}, ss = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, is = "react-calendar__tile";
function Bl(e) {
  var t = e.onClickWeekNumber, r = e.weekNumber, a = b.createElement("span", null, r);
  if (t) {
    var n = e.date, s = e.onClickWeekNumber, i = e.weekNumber, o = ss(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return b.createElement("button", ia({}, o, { className: is, onClick: function(c) {
      return s(i, n, c);
    }, type: "button" }), a);
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var o = ss(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return b.createElement("div", ia({}, o, { className: is }), a);
  }
}
function Ul(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.onClickWeekNumber, n = e.onMouseLeave, s = e.showFixedNumberOfWeeks, i = pa(r), o = function() {
    if (s)
      return 6;
    var d = fi(t), v = mr(t, i), y = d - (7 - v);
    return 1 + Math.ceil(y / 7);
  }(), c = function() {
    for (var d = re(t), v = ft(t), y = ha(t), T = [], S = 0; S < o; S += 1)
      T.push(Ga(new Date(d, v, y + S * 7), i));
    return T;
  }(), l = c.map(function(d) {
    return tl(d, i);
  });
  return b.createElement(wn, { className: "react-calendar__month-view__weekNumbers", count: o, direction: "column", onFocus: n, onMouseOver: n, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, l.map(function(d, v) {
    var y = c[v];
    if (!y)
      throw new Error("date is not defined");
    return b.createElement(Bl, { key: d, date: y, onClickWeekNumber: a, weekNumber: d });
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
}, zl = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Hl(e) {
  if (e)
    for (var t = 0, r = Object.entries(Vu); t < r.length; t++) {
      var a = r[t], n = a[0], s = a[1];
      if (s.includes(e))
        return n;
    }
  return ee.ISO_8601;
}
var Oi = function(t) {
  var r = t.activeStartDate, a = t.locale, n = t.onMouseLeave, s = t.showFixedNumberOfWeeks, i = t.calendarType, o = i === void 0 ? Hl(a) : i, c = t.formatShortWeekday, l = t.formatWeekday, d = t.onClickWeekNumber, v = t.showWeekNumbers, y = zl(t, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function T() {
    return b.createElement(Yl, { calendarType: o, formatShortWeekday: c, formatWeekday: l, locale: a, onMouseLeave: n });
  }
  function S() {
    return v ? b.createElement(Ul, { activeStartDate: r, calendarType: o, onClickWeekNumber: d, onMouseLeave: n, showFixedNumberOfWeeks: s }) : null;
  }
  function V() {
    return b.createElement(Wl, br({ calendarType: o }, y));
  }
  var F = "react-calendar__month-view";
  return b.createElement(
    "div",
    { className: oa(F, v ? "".concat(F, "--weekNumbers") : "") },
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
        V()
      )
    )
  );
};
Oi.propTypes = br(br({}, _a), { calendarType: _i, formatDay: m.func, formatLongDate: m.func, formatShortWeekday: m.func, formatWeekday: m.func, onClickWeekNumber: m.func, onMouseLeave: m.func, showFixedNumberOfWeeks: m.bool, showNeighboringMonth: m.bool, showWeekNumbers: m.bool });
const ql = Oi;
var Ft = globalThis && globalThis.__assign || function() {
  return Ft = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ft.apply(this, arguments);
}, Lr = "react-calendar", Wt = ["century", "decade", "year", "month"], Gl = ["decade", "year", "month", "day"], Dn = /* @__PURE__ */ new Date();
Dn.setFullYear(1, 0, 1);
Dn.setHours(0, 0, 0, 0);
var Ql = /* @__PURE__ */ new Date(864e13);
function er(e) {
  return e instanceof Date ? e : new Date(e);
}
function Ti(e, t) {
  return Wt.slice(Wt.indexOf(e), Wt.indexOf(t) + 1);
}
function Jl(e, t, r) {
  var a = Ti(t, r);
  return a.indexOf(e) !== -1;
}
function On(e, t, r) {
  return e && Jl(e, t, r) ? e : r;
}
function Si(e) {
  var t = Wt.indexOf(e);
  return Gl[t];
}
function Xl(e, t) {
  var r = Array.isArray(e) ? e[t] : e;
  if (!r)
    return null;
  var a = er(r);
  if (isNaN(a.getTime()))
    throw new Error("Invalid date: ".concat(e));
  return a;
}
function Ei(e, t) {
  var r = e.value, a = e.minDate, n = e.maxDate, s = e.maxDetail, i = Xl(r, t);
  if (!i)
    return null;
  var o = Si(s), c = function() {
    switch (t) {
      case 0:
        return xt(o, i);
      case 1:
        return mi(o, i);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return ml(c, a, n);
}
var Tn = function(e) {
  return Ei(e, 0);
}, Ci = function(e) {
  return Ei(e, 1);
}, Kl = function(e) {
  return [Tn, Ci].map(function(t) {
    return t(e);
  });
};
function Ni(e) {
  var t = e.maxDate, r = e.maxDetail, a = e.minDate, n = e.minDetail, s = e.value, i = e.view, o = On(i, n, r), c = Tn({
    value: s,
    minDate: a,
    maxDate: t,
    maxDetail: r
  }) || /* @__PURE__ */ new Date();
  return xt(o, c);
}
function ed(e) {
  var t = e.activeStartDate, r = e.defaultActiveStartDate, a = e.defaultValue, n = e.defaultView, s = e.maxDate, i = e.maxDetail, o = e.minDate, c = e.minDetail, l = e.value, d = e.view, v = On(d, c, i), y = t || r;
  return y ? xt(v, y) : Ni({
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
var Ai = E.forwardRef(function(t, r) {
  var a = t.activeStartDate, n = t.allowPartialRange, s = t.calendarType, i = t.className, o = t.defaultActiveStartDate, c = t.defaultValue, l = t.defaultView, d = t.formatDay, v = t.formatLongDate, y = t.formatMonth, T = t.formatMonthYear, S = t.formatShortWeekday, V = t.formatWeekday, F = t.formatYear, L = t.goToRangeStartOnSelect, x = L === void 0 ? !0 : L, q = t.inputRef, Z = t.locale, B = t.maxDate, U = B === void 0 ? Ql : B, ke = t.maxDetail, ve = ke === void 0 ? "month" : ke, ae = t.minDate, te = ae === void 0 ? Dn : ae, Ne = t.minDetail, R = Ne === void 0 ? "century" : Ne, W = t.navigationAriaLabel, Y = t.navigationAriaLive, ie = t.navigationLabel, X = t.next2AriaLabel, fe = t.next2Label, Ae = t.nextAriaLabel, ye = t.nextLabel, oe = t.onActiveStartDateChange, Te = t.onChange, Se = t.onClickDay, z = t.onClickDecade, K = t.onClickMonth, vt = t.onClickWeekNumber, mt = t.onClickYear, yt = t.onDrillDown, qe = t.onDrillUp, Ie = t.onViewChange, pt = t.prev2AriaLabel, Nt = t.prev2Label, At = t.prevAriaLabel, It = t.prevLabel, de = t.returnValue, rt = de === void 0 ? "start" : de, be = t.selectRange, Gt = t.showDoubleView, wa = t.showFixedNumberOfWeeks, xa = t.showNavigation, u = xa === void 0 ? !0 : xa, f = t.showNeighboringCentury, h = t.showNeighboringDecade, D = t.showNeighboringMonth, _ = D === void 0 ? !0 : D, g = t.showWeekNumbers, N = t.tileClassName, Q = t.tileContent, ce = t.tileDisabled, at = t.value, Ge = t.view, Er = E.useState(o), Qt = Er[0], nt = Er[1], Cr = E.useState(null), Nr = Cr[0], Ar = Cr[1], Jt = E.useState(Array.isArray(c) ? c.map(function($) {
    return $ !== null ? er($) : null;
  }) : c != null ? er(c) : null), ka = Jt[0], Ri = Jt[1], Sn = E.useState(l), Mi = Sn[0], En = Sn[1], De = a || Qt || ed({
    activeStartDate: a,
    defaultActiveStartDate: o,
    defaultValue: c,
    defaultView: l,
    maxDate: U,
    maxDetail: ve,
    minDate: te,
    minDetail: R,
    value: at,
    view: Ge
  }), Oe = function() {
    var $ = function() {
      return be && Wa(ka) ? ka : at !== void 0 ? at : ka;
    }();
    return $ ? Array.isArray($) ? $.map(function(ue) {
      return ue !== null ? er(ue) : null;
    }) : $ !== null ? er($) : null : null;
  }(), Ir = Si(ve), ne = On(Ge || Mi, R, ve), Ye = Ti(R, ve), Pi = be ? Nr : null, Da = Ye.indexOf(ne) < Ye.length - 1, Cn = Ye.indexOf(ne) > 0, Nn = E.useCallback(function($) {
    var ue = function() {
      switch (rt) {
        case "start":
          return Tn;
        case "end":
          return Ci;
        case "range":
          return Kl;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return ue({
      maxDate: U,
      maxDetail: ve,
      minDate: te,
      value: $
    });
  }, [U, ve, te, rt]), Oa = E.useCallback(function($, ue) {
    nt($);
    var he = {
      action: ue,
      activeStartDate: $,
      value: Oe,
      view: ne
    };
    oe && !jr(De, $) && oe(he);
  }, [De, oe, Oe, ne]), Rr = E.useCallback(function($, ue) {
    var he = function() {
      switch (ne) {
        case "century":
          return z;
        case "decade":
          return mt;
        case "year":
          return K;
        case "month":
          return Se;
        default:
          throw new Error("Invalid view: ".concat(ne, "."));
      }
    }();
    he && he($, ue);
  }, [Se, z, K, mt, ne]), Ta = E.useCallback(function($, ue) {
    if (Da) {
      Rr($, ue);
      var he = Ye[Ye.indexOf(ne) + 1];
      if (!he)
        throw new Error("Attempted to drill down from the lowest view.");
      nt($), En(he);
      var Re = {
        action: "drillDown",
        activeStartDate: $,
        value: Oe,
        view: he
      };
      oe && !jr(De, $) && oe(Re), Ie && ne !== he && Ie(Re), yt && yt(Re);
    }
  }, [
    De,
    Da,
    oe,
    Rr,
    yt,
    Ie,
    Oe,
    ne,
    Ye
  ]), Sa = E.useCallback(function() {
    if (Cn) {
      var $ = Ye[Ye.indexOf(ne) - 1];
      if (!$)
        throw new Error("Attempted to drill up from the highest view.");
      var ue = xt($, De);
      nt(ue), En($);
      var he = {
        action: "drillUp",
        activeStartDate: ue,
        value: Oe,
        view: $
      };
      oe && !jr(De, ue) && oe(he), Ie && ne !== $ && Ie(he), qe && qe(he);
    }
  }, [
    De,
    Cn,
    oe,
    qe,
    Ie,
    Oe,
    ne,
    Ye
  ]), Ea = E.useCallback(function($, ue) {
    var he = Oe;
    Rr($, ue);
    var Re = be && !Wa(he), Me;
    if (be)
      if (Re)
        Me = xt(Ir, $);
      else {
        if (!he)
          throw new Error("previousValue is required");
        if (Array.isArray(he))
          throw new Error("previousValue must not be an array");
        Me = ol(Ir, he, $);
      }
    else
      Me = Nn($);
    var Na = (
      // Range selection turned off
      !be || // Range selection turned on, first value
      Re || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      x ? Ni({
        maxDate: U,
        maxDetail: ve,
        minDate: te,
        minDetail: R,
        value: Me,
        view: ne
      }) : null
    );
    ue.persist(), nt(Na), Ri(Me);
    var Zi = {
      action: "onChange",
      activeStartDate: Na,
      value: Me,
      view: ne
    };
    if (oe && !jr(De, Na) && oe(Zi), Te)
      if (be) {
        var Fi = Wa(Me);
        if (!Fi)
          Te(Me || null, ue);
        else if (n) {
          if (Array.isArray(Me))
            throw new Error("value must not be an array");
          Te([Me || null, null], ue);
        }
      } else
        Te(Me || null, ue);
  }, [
    De,
    n,
    Nn,
    x,
    U,
    ve,
    te,
    R,
    oe,
    Te,
    Rr,
    be,
    Oe,
    Ir,
    ne
  ]);
  function Vi($) {
    Ar($);
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
      view: ne
    };
  }, [De, Ta, Sa, Ea, Oa, Oe, ne]);
  function An($) {
    var ue = $ ? vi(ne, De) : xt(ne, De), he = Da ? Ta : Ea, Re = {
      activeStartDate: ue,
      hover: Pi,
      locale: Z,
      maxDate: U,
      minDate: te,
      onClick: he,
      onMouseOver: be ? Vi : void 0,
      tileClassName: N,
      tileContent: Q,
      tileDisabled: ce,
      value: Oe,
      valueType: Ir
    };
    switch (ne) {
      case "century":
        return b.createElement(Nl, Ft({ formatYear: F, showNeighboringCentury: f }, Re));
      case "decade":
        return b.createElement(Ml, Ft({ formatYear: F, showNeighboringDecade: h }, Re));
      case "year":
        return b.createElement(Zl, Ft({ formatMonth: y, formatMonthYear: T }, Re));
      case "month":
        return b.createElement(ql, Ft({ calendarType: s, formatDay: d, formatLongDate: v, formatShortWeekday: S, formatWeekday: V, onClickWeekNumber: vt, onMouseLeave: be ? Ca : void 0, showFixedNumberOfWeeks: typeof wa < "u" ? wa : Gt, showNeighboringMonth: _, showWeekNumbers: g }, Re));
      default:
        throw new Error("Invalid view: ".concat(ne, "."));
    }
  }
  function Li() {
    return u ? b.createElement(ll, { activeStartDate: De, drillUp: Sa, formatMonthYear: T, formatYear: F, locale: Z, maxDate: U, minDate: te, navigationAriaLabel: W, navigationAriaLive: Y, navigationLabel: ie, next2AriaLabel: X, next2Label: fe, nextAriaLabel: Ae, nextLabel: ye, prev2AriaLabel: pt, prev2Label: Nt, prevAriaLabel: At, prevLabel: It, setActiveStartDate: Oa, showDoubleView: Gt, view: ne, views: Ye }) : null;
  }
  var ji = Array.isArray(Oe) ? Oe : [Oe];
  return b.createElement(
    "div",
    { className: oa(Lr, be && ji.length === 1 && "".concat(Lr, "--selectRange"), Gt && "".concat(Lr, "--doubleView"), i), ref: q },
    Li(),
    b.createElement(
      "div",
      { className: "".concat(Lr, "__viewContainer"), onBlur: be ? Ca : void 0, onMouseLeave: be ? Ca : void 0 },
      An(),
      Gt ? An(!0) : null
    )
  );
}), os = m.instanceOf(Date), cs = m.oneOfType([m.string, m.instanceOf(Date)]), us = m.oneOfType([cs, Cl(cs)]);
Ai.propTypes = {
  activeStartDate: os,
  allowPartialRange: m.bool,
  calendarType: _i,
  className: aa,
  defaultActiveStartDate: os,
  defaultValue: us,
  defaultView: na,
  formatDay: m.func,
  formatLongDate: m.func,
  formatMonth: m.func,
  formatMonthYear: m.func,
  formatShortWeekday: m.func,
  formatWeekday: m.func,
  formatYear: m.func,
  goToRangeStartOnSelect: m.bool,
  inputRef: Tl,
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
  value: us,
  view: na
};
const td = Ai;
const rd = ps(td)`
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
`, ad = ({
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
  const [v, y] = E.useState(null), [T, S] = E.useState(!1), [V, F] = E.useState(!1);
  E.useEffect(() => {
    r !== void 0 && S(r);
  }, [r]);
  const L = E.useCallback((U) => {
    F(!0), S(!0), n == null || n(U);
  }, [n, S]), x = E.useCallback((U) => {
    F(!1), s == null || s(U);
  }, [n, S]), q = E.useCallback((U) => {
    y(U);
  }, [y]), Z = E.useMemo(() => o ? Pr(o, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]).toDate() : null, [o]), B = E.useMemo(() => Z ? Pr(Z).format("DD.MM.YYYY") : "", [Z]);
  return /* @__PURE__ */ I(io, { onClickAway: () => S(!1), children: /* @__PURE__ */ $e(ua, { className: a, label: t, error: e, children: [
    /* @__PURE__ */ I(la, { ...l, inputWrapRef: q, ref: d, onFocus: L, onBlur: x, value: B, onChange: (U) => {
      U.target.value ? c == null || c(Pr(U.target.value, "DD.MM.YYYY").format("YYYY-MM-DD HH:mm:ss")) : c == null || c(void 0);
    }, onMouseDown: (U) => {
      V && S(!T), i == null || i(U);
    }, error: e }),
    v && /* @__PURE__ */ I(ys, { open: T, anchorEl: v, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: v
      }
    }], children: /* @__PURE__ */ I("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ I(rd, { value: Z, onChange: (U) => {
      c == null || c(Pr(U).format("YYYY-MM-DD HH:mm:ss")), S(!1);
    } }) }) })
  ] }) });
}, Dd = E.forwardRef(ad), nd = ({
  multiple: e,
  value: t,
  url: r,
  params: a,
  idField: n = zs,
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
  }), [l, a]), S = l.length > 0 || v === !0, V = In(r, {
    enabled: S,
    params: T
  }), F = E.useMemo(() => Je.isEmpty(t) ? !1 : V.data ? e ? !Je.every(t, (Z) => Je.some(V.data.data, {
    [n]: Z
  })) : !Je.some(V.data.data, {
    [n]: t
  }) : !0, [t, V.data]), L = E.useMemo(() => ({
    ...a,
    id: e ? Je.uniq(t).join(",") : t
  }), [t, a]), x = In(r, {
    params: L,
    enabled: F,
    staleTime: 60 * 1e3
  }), q = E.useMemo(() => {
    var Z, B;
    return Je.uniqBy([...((Z = x.data) == null ? void 0 : Z.data) || [], ...((B = V.data) == null ? void 0 : B.data) || []], n);
  }, [x.data, V.data]);
  return /* @__PURE__ */ I(Hs, { ref: c, multiple: e, value: t, ...o, disabled: x.isLoading || o.disabled, inputLoading: x.isLoading, options: q, idField: n, onOpen: () => y(!0), onClose: () => y(!1), isLoading: V.isLoading, onInputChange: (Z, B, U) => {
    U === "input" && d(B), U === "reset" && d(""), s == null || s(Z, B, U);
  } });
}, sd = E.forwardRef(nd), Ii = (e) => E.forwardRef((t, r) => /* @__PURE__ */ I(sd, { ...e, ...t, ref: r })), id = ({
  unit: e,
  error: t,
  onChange: r,
  ...a
}, n) => /* @__PURE__ */ I(la, { ...a, ref: n, error: t, onChange: (s) => {
  r == null || r(Number(s.target.value));
}, afterItems: [e && /* @__PURE__ */ I("div", { css: [{
  whiteSpace: "nowrap",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  "--tw-text-opacity": "1",
  color: "rgb(75 85 99 / var(--tw-text-opacity))"
}, t && {
  "--tw-text-opacity": "1",
  color: "rgb(239 68 68 / var(--tw-text-opacity))"
}], children: e }, "unit")] }), od = E.forwardRef(id), cd = ({
  error: e,
  ...t
}, r) => /* @__PURE__ */ I(la, { ...t, ref: r, error: e }), Od = E.forwardRef(cd), ud = ({
  error: e,
  ...t
}, r) => /* @__PURE__ */ I(od, { ...t, ref: r, error: e }), Td = E.forwardRef(ud), ld = ({
  label: e,
  error: t,
  value: r,
  helperText: a,
  className: n,
  onChange: s,
  ...i
}, o) => /* @__PURE__ */ I(ua, { label: e, error: t, helperText: a, className: n, children: /* @__PURE__ */ $e(oo, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...i, onChange: (c) => {
  s == null || s(c.target.value === "true");
}, ref: o, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ I(Rn, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ I(Rn, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), Sd = E.forwardRef(ld), dd = ps(({
  className: e,
  ...t
}) => /* @__PURE__ */ I(co, { ...t, classes: {
  popper: e
} }))`
  .${Mn.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Mn.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`, Ed = ({
  children: e,
  className: t,
  tooltip: r,
  icon: a,
  iconAfter: n,
  ...s
}) => {
  let i = /* @__PURE__ */ $e(uo, { className: t, css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...s, children: [
    a && /* @__PURE__ */ I(ct, { icon: a }),
    e,
    n && /* @__PURE__ */ I(ct, { icon: n })
  ] });
  return r && (i = /* @__PURE__ */ I(dd, { title: r, arrow: !0, children: i })), i;
}, Cd = Ii({
  url: "/api/rest/partners",
  displayField: "name"
}), Nd = Ii({
  url: "/api/rest/sections",
  displayField: "title"
});
export {
  Sd as B,
  Ed as C,
  kd as D,
  wd as F,
  ua as L,
  od as N,
  Cd as P,
  Nd as S,
  la as T,
  Td as Y,
  _d as a,
  Dd as b,
  Od as c,
  gd as d,
  Ii as e,
  xd as u,
  bd as z
};
