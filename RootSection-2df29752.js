var dn = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var me = (e, t, r) => (dn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), jt = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, Vt = (e, t, r, a) => (dn(e, t, "write to private field"), a ? a.call(e, r) : t.set(e, r), r);
var Qt = (e, t, r) => (dn(e, t, "access private method"), r);
import { b as ll, s as ul, g as cl, n as gs, c as Gn, d as fl, p as dl, a as qe, j as V, f as ms, F as Sr, e as hl, k as pl } from "./library-77edbc59.js";
import { r as O, R as k, d as vl, c as ys, g as ja, e as na } from "./react-54946355.js";
import { s as gl, u as bs, l as _r, a as ml, b as yl, f as bl, c as wl, h as ia } from "./useDictionary-78cc1306.js";
import { A as _l, d as xl, e as Sl, f as Dl, a as En, u as ws, P as _s, g as Ol, I as kl, i as Tl, k as Va, n as xs, C as El, l as Ei, m as Cl, M as Nl, t as Ci, B as Pl } from "./mui-02912ce2.js";
import { F as wt, p as Ss, P as b } from "./icons-6b7f2986.js";
var Nt, je, Ke, bt, cr, ha, Br, Cn, vs, Rl = (vs = class extends ll {
  constructor(t, r) {
    super();
    jt(this, cr);
    jt(this, Br);
    jt(this, Nt, void 0);
    jt(this, je, void 0);
    jt(this, Ke, void 0);
    jt(this, bt, void 0);
    Vt(this, je, void 0), Vt(this, Nt, t), this.setOptions(r), this.bindMethods(), Qt(this, cr, ha).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var a;
    const r = this.options;
    this.options = me(this, Nt).defaultMutationOptions(t), ul(r, this.options) || me(this, Nt).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: me(this, Ke),
      observer: this
    }), (a = me(this, Ke)) == null || a.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = me(this, Ke)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    Qt(this, cr, ha).call(this), Qt(this, Br, Cn).call(this, t);
  }
  getCurrentResult() {
    return me(this, je);
  }
  reset() {
    Vt(this, Ke, void 0), Qt(this, cr, ha).call(this), Qt(this, Br, Cn).call(this);
  }
  mutate(t, r) {
    var a;
    return Vt(this, bt, r), (a = me(this, Ke)) == null || a.removeObserver(this), Vt(this, Ke, me(this, Nt).getMutationCache().build(me(this, Nt), this.options)), me(this, Ke).addObserver(this), me(this, Ke).execute(t);
  }
}, Nt = new WeakMap(), je = new WeakMap(), Ke = new WeakMap(), bt = new WeakMap(), cr = new WeakSet(), ha = function() {
  var r;
  const t = ((r = me(this, Ke)) == null ? void 0 : r.state) ?? cl();
  Vt(this, je, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Br = new WeakSet(), Cn = function(t) {
  gs.batch(() => {
    var r, a, n, i, s, o, l, u;
    me(this, bt) && this.hasListeners() && ((t == null ? void 0 : t.type) === "success" ? ((a = (r = me(this, bt)).onSuccess) == null || a.call(
      r,
      t.data,
      me(this, je).variables,
      me(this, je).context
    ), (i = (n = me(this, bt)).onSettled) == null || i.call(
      n,
      t.data,
      null,
      me(this, je).variables,
      me(this, je).context
    )) : (t == null ? void 0 : t.type) === "error" && ((o = (s = me(this, bt)).onError) == null || o.call(
      s,
      t.error,
      me(this, je).variables,
      me(this, je).context
    ), (u = (l = me(this, bt)).onSettled) == null || u.call(
      l,
      void 0,
      t.error,
      me(this, je).variables,
      me(this, je).context
    ))), this.listeners.forEach((f) => {
      f(me(this, je));
    });
  });
}, vs);
function Al(e, t) {
  const r = Gn(t), [a] = O.useState(
    () => new Rl(
      r,
      e
    )
  );
  O.useEffect(() => {
    a.setOptions(e);
  }, [a, e]);
  const n = O.useSyncExternalStore(
    O.useCallback(
      (s) => a.subscribe(gs.batchCalls(s)),
      [a]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), i = O.useCallback(
    (s, o) => {
      a.mutate(s, o).catch(Ml);
    },
    [a]
  );
  if (n.error && gl(a.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: i, mutateAsync: n.mutate };
}
function Ml() {
}
function cp(e, t, r) {
  let a;
  typeof e == "string" && typeof t == "string" ? a = {
    url: t,
    method: e,
    ...r
  } : typeof e == "string" ? a = {
    url: e,
    ...t
  } : a = e;
  const n = O.useMemo(() => fl(a.url, {
    encode: encodeURIComponent
  }), [a.url]), i = O.useMemo(() => dl(a.url).reduce((v, g) => typeof g != "string" ? [...v, g.name] : v, []), [a.url]), s = bs(), {
    wrapPayload: o = !0,
    syncQueryCache: l = !1,
    ...u
  } = a, f = Gn();
  return Al({
    ...u,
    mutationFn: async (h) => {
      const v = n(_r.pick(h, ...i)), g = _r.omit(h, ...i), S = _r.isEmpty(g) ? void 0 : o ? {
        data: g
      } : g, {
        data: A
      } = await s.request({
        url: v,
        method: a.method || "POST",
        data: S
      });
      return A;
    },
    onSuccess: (h, v, g) => {
      var S;
      if (l) {
        const A = n(_r.pick(v, ...i));
        f.setQueriesData({
          queryKey: [A]
        }, (j) => ({
          ...j,
          data: [h.data]
        }));
      }
      (S = u.onSuccess) == null || S.call(u, h, v, g);
    }
  });
}
const fp = () => {
  const e = Gn();
  return (t) => e.invalidateQueries({
    queryKey: [t]
  });
}, Ds = Symbol("RECORD_IS_LOADING"), zl = ({
  initialRecordsCache: e,
  idField: t,
  value: r,
  url: a,
  params: n
}) => {
  const i = bs(), [s, o] = O.useState(!1), [l, u] = O.useState(e || []), f = O.useCallback((v) => {
    u((g) => [...g.filter((S) => S[t] !== v[t]), v]);
  }, [u]), d = O.useMemo(() => r.filter((v) => !l.find((g) => g[t] === v)), [r.join(",")]);
  O.useEffect(() => {
    if (d.length > 0) {
      const v = new AbortController();
      return u((g) => [...g.filter((S) => !d.includes(S[t])), ...d.map((S) => ({
        [t]: S,
        [Ds]: !0
      }))]), o(!0), i.get(a, {
        params: {
          ...n,
          id: d.join(",")
        },
        signal: v.signal
      }).then((g) => {
        u((S) => [...S.filter((A) => !d.includes(A[t])), ...g.data.data]);
      }).catch(() => {
        u((g) => g.filter((S) => !d.includes(S[t])));
      }).finally(() => {
        o(!1);
      }), () => {
        v.abort();
      };
    }
  }, [d]);
  const h = O.useMemo(() => l.filter((v) => r.includes(v[t])), [r, l, t]);
  return {
    addRecord: f,
    records: h,
    isLoading: s
  };
};
var fe;
(function(e) {
  e.assertEqual = (n) => n;
  function t(n) {
  }
  e.assertIs = t;
  function r(n) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (n) => {
    const i = {};
    for (const s of n)
      i[s] = s;
    return i;
  }, e.getValidEnumValues = (n) => {
    const i = e.objectKeys(n).filter((o) => typeof n[n[o]] != "number"), s = {};
    for (const o of i)
      s[o] = n[o];
    return e.objectValues(s);
  }, e.objectValues = (n) => e.objectKeys(n).map(function(i) {
    return n[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const i = [];
    for (const s in n)
      Object.prototype.hasOwnProperty.call(n, s) && i.push(s);
    return i;
  }, e.find = (n, i) => {
    for (const s of n)
      if (i(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function a(n, i = " | ") {
    return n.map((s) => typeof s == "string" ? `'${s}'` : s).join(i);
  }
  e.joinValues = a, e.jsonStringifyReplacer = (n, i) => typeof i == "bigint" ? i.toString() : i;
})(fe || (fe = {}));
var Nn;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Nn || (Nn = {}));
const z = fe.arrayToEnum([
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
]), Ct = (e) => {
  switch (typeof e) {
    case "undefined":
      return z.undefined;
    case "string":
      return z.string;
    case "number":
      return isNaN(e) ? z.nan : z.number;
    case "boolean":
      return z.boolean;
    case "function":
      return z.function;
    case "bigint":
      return z.bigint;
    case "symbol":
      return z.symbol;
    case "object":
      return Array.isArray(e) ? z.array : e === null ? z.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? z.promise : typeof Map < "u" && e instanceof Map ? z.map : typeof Set < "u" && e instanceof Set ? z.set : typeof Date < "u" && e instanceof Date ? z.date : z.object;
    default:
      return z.unknown;
  }
}, x = fe.arrayToEnum([
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
]), Ll = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class st extends Error {
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
    const r = t || function(i) {
      return i.message;
    }, a = { _errors: [] }, n = (i) => {
      for (const s of i.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(n);
        else if (s.code === "invalid_return_type")
          n(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          n(s.argumentsError);
        else if (s.path.length === 0)
          a._errors.push(r(s));
        else {
          let o = a, l = 0;
          for (; l < s.path.length; ) {
            const u = s.path[l];
            l === s.path.length - 1 ? (o[u] = o[u] || { _errors: [] }, o[u]._errors.push(r(s))) : o[u] = o[u] || { _errors: [] }, o = o[u], l++;
          }
        }
    };
    return n(this), a;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, fe.jsonStringifyReplacer, 2);
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
st.create = (e) => new st(e);
const Or = (e, t) => {
  let r;
  switch (e.code) {
    case x.invalid_type:
      e.received === z.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case x.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, fe.jsonStringifyReplacer)}`;
      break;
    case x.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${fe.joinValues(e.keys, ", ")}`;
      break;
    case x.invalid_union:
      r = "Invalid input";
      break;
    case x.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${fe.joinValues(e.options)}`;
      break;
    case x.invalid_enum_value:
      r = `Invalid enum value. Expected ${fe.joinValues(e.options)}, received '${e.received}'`;
      break;
    case x.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case x.invalid_return_type:
      r = "Invalid function return type";
      break;
    case x.invalid_date:
      r = "Invalid date";
      break;
    case x.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : fe.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case x.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case x.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case x.custom:
      r = "Invalid input";
      break;
    case x.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case x.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case x.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, fe.assertNever(e);
  }
  return { message: r };
};
let Os = Or;
function Il(e) {
  Os = e;
}
function ma() {
  return Os;
}
const ya = (e) => {
  const { data: t, path: r, errorMaps: a, issueData: n } = e, i = [...r, ...n.path || []], s = {
    ...n,
    path: i
  };
  let o = "";
  const l = a.filter((u) => !!u).slice().reverse();
  for (const u of l)
    o = u(s, { data: t, defaultError: o }).message;
  return {
    ...n,
    path: i,
    message: n.message || o
  };
}, jl = [];
function I(e, t) {
  const r = ya({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      ma(),
      Or
      // then global default map
    ].filter((a) => !!a)
  });
  e.common.issues.push(r);
}
class ze {
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
        return K;
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
    return ze.mergeObjectSync(t, a);
  }
  static mergeObjectSync(t, r) {
    const a = {};
    for (const n of r) {
      const { key: i, value: s } = n;
      if (i.status === "aborted" || s.status === "aborted")
        return K;
      i.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof s.value < "u" || n.alwaysSet) && (a[i.value] = s.value);
    }
    return { status: t.value, value: a };
  }
}
const K = Object.freeze({
  status: "aborted"
}), ks = (e) => ({ status: "dirty", value: e }), We = (e) => ({ status: "valid", value: e }), Pn = (e) => e.status === "aborted", Rn = (e) => e.status === "dirty", kr = (e) => e.status === "valid", ba = (e) => typeof Promise < "u" && e instanceof Promise;
var $;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})($ || ($ = {}));
class ht {
  constructor(t, r, a, n) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = a, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ni = (e, t) => {
  if (kr(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new st(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function Q(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: a, description: n } = e;
  if (t && (r || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: n } : { errorMap: (s, o) => s.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: a ?? o.defaultError } : { message: r ?? o.defaultError }, description: n };
}
class te {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Ct(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Ct(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new ze(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Ct(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (ba(r))
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
      parsedType: Ct(t)
    }, i = this._parseSync({ data: t, path: n.path, parent: n });
    return Ni(n, i);
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
      parsedType: Ct(t)
    }, n = this._parse({ data: t, path: a.path, parent: a }), i = await (ba(n) ? n : Promise.resolve(n));
    return Ni(a, i);
  }
  refine(t, r) {
    const a = (n) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(n) : r;
    return this._refinement((n, i) => {
      const s = t(n), o = () => i.addIssue({
        code: x.custom,
        ...a(n)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((l) => l ? !0 : (o(), !1)) : s ? !0 : (o(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((a, n) => t(a) ? !0 : (n.addIssue(typeof r == "function" ? r(a, n) : r), !1));
  }
  _refinement(t) {
    return new lt({
      schema: this,
      typeName: Z.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return _t.create(this, this._def);
  }
  nullable() {
    return Ut.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ot.create(this, this._def);
  }
  promise() {
    return dr.create(this, this._def);
  }
  or(t) {
    return Nr.create([this, t], this._def);
  }
  and(t) {
    return Pr.create(this, t, this._def);
  }
  transform(t) {
    return new lt({
      ...Q(this._def),
      schema: this,
      typeName: Z.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Lr({
      ...Q(this._def),
      innerType: this,
      defaultValue: r,
      typeName: Z.ZodDefault
    });
  }
  brand() {
    return new Es({
      typeName: Z.ZodBranded,
      type: this,
      ...Q(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Sa({
      ...Q(this._def),
      innerType: this,
      catchValue: r,
      typeName: Z.ZodCatch
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
    return Hr.create(this, t);
  }
  readonly() {
    return Oa.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Vl = /^c[^\s-]{8,}$/i, Wl = /^[a-z][a-z0-9]*$/, Fl = /^[0-9A-HJKMNP-TV-Z]{26}$/, $l = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Bl = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Hl = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let hn;
const Ul = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Zl = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Yl = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function ql(e, t) {
  return !!((t === "v4" || !t) && Ul.test(e) || (t === "v6" || !t) && Zl.test(e));
}
class it extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== z.string) {
      const i = this._getOrReturnCtx(t);
      return I(
        i,
        {
          code: x.invalid_type,
          expected: z.string,
          received: i.parsedType
        }
        //
      ), K;
    }
    const a = new ze();
    let n;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (n = this._getOrReturnCtx(t, n), I(n, {
          code: x.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), a.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (n = this._getOrReturnCtx(t, n), I(n, {
          code: x.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), a.dirty());
      else if (i.kind === "length") {
        const s = t.data.length > i.value, o = t.data.length < i.value;
        (s || o) && (n = this._getOrReturnCtx(t, n), s ? I(n, {
          code: x.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : o && I(n, {
          code: x.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), a.dirty());
      } else if (i.kind === "email")
        Bl.test(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
          validation: "email",
          code: x.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "emoji")
        hn || (hn = new RegExp(Hl, "u")), hn.test(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
          validation: "emoji",
          code: x.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "uuid")
        $l.test(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
          validation: "uuid",
          code: x.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "cuid")
        Vl.test(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
          validation: "cuid",
          code: x.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "cuid2")
        Wl.test(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
          validation: "cuid2",
          code: x.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "ulid")
        Fl.test(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
          validation: "ulid",
          code: x.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          n = this._getOrReturnCtx(t, n), I(n, {
            validation: "url",
            code: x.invalid_string,
            message: i.message
          }), a.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
          validation: "regex",
          code: x.invalid_string,
          message: i.message
        }), a.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (n = this._getOrReturnCtx(t, n), I(n, {
          code: x.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), a.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (n = this._getOrReturnCtx(t, n), I(n, {
          code: x.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), a.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (n = this._getOrReturnCtx(t, n), I(n, {
          code: x.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), a.dirty()) : i.kind === "datetime" ? Yl(i).test(t.data) || (n = this._getOrReturnCtx(t, n), I(n, {
          code: x.invalid_string,
          validation: "datetime",
          message: i.message
        }), a.dirty()) : i.kind === "ip" ? ql(t.data, i.version) || (n = this._getOrReturnCtx(t, n), I(n, {
          validation: "ip",
          code: x.invalid_string,
          message: i.message
        }), a.dirty()) : fe.assertNever(i);
    return { status: a.value, value: t.data };
  }
  _regex(t, r, a) {
    return this.refinement((n) => t.test(n), {
      validation: r,
      code: x.invalid_string,
      ...$.errToObj(a)
    });
  }
  _addCheck(t) {
    return new it({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...$.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...$.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...$.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...$.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...$.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...$.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...$.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...$.errToObj(t) });
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
      ...$.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...$.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...$.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...$.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...$.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...$.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...$.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...$.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, $.errToObj(t));
  }
  trim() {
    return new it({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new it({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new it({
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
it.create = (e) => {
  var t;
  return new it({
    checks: [],
    typeName: Z.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Q(e)
  });
};
function Gl(e, t) {
  const r = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, n = r > a ? r : a, i = parseInt(e.toFixed(n).replace(".", "")), s = parseInt(t.toFixed(n).replace(".", ""));
  return i % s / Math.pow(10, n);
}
class Rt extends te {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== z.number) {
      const i = this._getOrReturnCtx(t);
      return I(i, {
        code: x.invalid_type,
        expected: z.number,
        received: i.parsedType
      }), K;
    }
    let a;
    const n = new ze();
    for (const i of this._def.checks)
      i.kind === "int" ? fe.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), n.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), n.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), n.dirty()) : i.kind === "multipleOf" ? Gl(t.data, i.value) !== 0 && (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), n.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.not_finite,
        message: i.message
      }), n.dirty()) : fe.assertNever(i);
    return { status: n.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, $.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, $.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, $.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, $.toString(r));
  }
  setLimit(t, r, a, n) {
    return new Rt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: a,
          message: $.toString(n)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Rt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: $.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: $.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: $.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: $.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: $.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: $.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: $.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: $.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: $.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && fe.isInteger(t.value));
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
Rt.create = (e) => new Rt({
  checks: [],
  typeName: Z.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Q(e)
});
class At extends te {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== z.bigint) {
      const i = this._getOrReturnCtx(t);
      return I(i, {
        code: x.invalid_type,
        expected: z.bigint,
        received: i.parsedType
      }), K;
    }
    let a;
    const n = new ze();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), n.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), n.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (a = this._getOrReturnCtx(t, a), I(a, {
        code: x.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), n.dirty()) : fe.assertNever(i);
    return { status: n.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, $.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, $.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, $.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, $.toString(r));
  }
  setLimit(t, r, a, n) {
    return new At({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: a,
          message: $.toString(n)
        }
      ]
    });
  }
  _addCheck(t) {
    return new At({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: $.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: $.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: $.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: $.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: $.toString(r)
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
At.create = (e) => {
  var t;
  return new At({
    checks: [],
    typeName: Z.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Q(e)
  });
};
class Tr extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== z.boolean) {
      const a = this._getOrReturnCtx(t);
      return I(a, {
        code: x.invalid_type,
        expected: z.boolean,
        received: a.parsedType
      }), K;
    }
    return We(t.data);
  }
}
Tr.create = (e) => new Tr({
  typeName: Z.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Q(e)
});
class Bt extends te {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== z.date) {
      const i = this._getOrReturnCtx(t);
      return I(i, {
        code: x.invalid_type,
        expected: z.date,
        received: i.parsedType
      }), K;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return I(i, {
        code: x.invalid_date
      }), K;
    }
    const a = new ze();
    let n;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), a.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (n = this._getOrReturnCtx(t, n), I(n, {
        code: x.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), a.dirty()) : fe.assertNever(i);
    return {
      status: a.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Bt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: $.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: $.toString(r)
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
Bt.create = (e) => new Bt({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Z.ZodDate,
  ...Q(e)
});
class wa extends te {
  _parse(t) {
    if (this._getType(t) !== z.symbol) {
      const a = this._getOrReturnCtx(t);
      return I(a, {
        code: x.invalid_type,
        expected: z.symbol,
        received: a.parsedType
      }), K;
    }
    return We(t.data);
  }
}
wa.create = (e) => new wa({
  typeName: Z.ZodSymbol,
  ...Q(e)
});
class Er extends te {
  _parse(t) {
    if (this._getType(t) !== z.undefined) {
      const a = this._getOrReturnCtx(t);
      return I(a, {
        code: x.invalid_type,
        expected: z.undefined,
        received: a.parsedType
      }), K;
    }
    return We(t.data);
  }
}
Er.create = (e) => new Er({
  typeName: Z.ZodUndefined,
  ...Q(e)
});
class Cr extends te {
  _parse(t) {
    if (this._getType(t) !== z.null) {
      const a = this._getOrReturnCtx(t);
      return I(a, {
        code: x.invalid_type,
        expected: z.null,
        received: a.parsedType
      }), K;
    }
    return We(t.data);
  }
}
Cr.create = (e) => new Cr({
  typeName: Z.ZodNull,
  ...Q(e)
});
class fr extends te {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return We(t.data);
  }
}
fr.create = (e) => new fr({
  typeName: Z.ZodAny,
  ...Q(e)
});
class Ft extends te {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return We(t.data);
  }
}
Ft.create = (e) => new Ft({
  typeName: Z.ZodUnknown,
  ...Q(e)
});
class xt extends te {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return I(r, {
      code: x.invalid_type,
      expected: z.never,
      received: r.parsedType
    }), K;
  }
}
xt.create = (e) => new xt({
  typeName: Z.ZodNever,
  ...Q(e)
});
class _a extends te {
  _parse(t) {
    if (this._getType(t) !== z.undefined) {
      const a = this._getOrReturnCtx(t);
      return I(a, {
        code: x.invalid_type,
        expected: z.void,
        received: a.parsedType
      }), K;
    }
    return We(t.data);
  }
}
_a.create = (e) => new _a({
  typeName: Z.ZodVoid,
  ...Q(e)
});
class ot extends te {
  _parse(t) {
    const { ctx: r, status: a } = this._processInputParams(t), n = this._def;
    if (r.parsedType !== z.array)
      return I(r, {
        code: x.invalid_type,
        expected: z.array,
        received: r.parsedType
      }), K;
    if (n.exactLength !== null) {
      const s = r.data.length > n.exactLength.value, o = r.data.length < n.exactLength.value;
      (s || o) && (I(r, {
        code: s ? x.too_big : x.too_small,
        minimum: o ? n.exactLength.value : void 0,
        maximum: s ? n.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: n.exactLength.message
      }), a.dirty());
    }
    if (n.minLength !== null && r.data.length < n.minLength.value && (I(r, {
      code: x.too_small,
      minimum: n.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.minLength.message
    }), a.dirty()), n.maxLength !== null && r.data.length > n.maxLength.value && (I(r, {
      code: x.too_big,
      maximum: n.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: n.maxLength.message
    }), a.dirty()), r.common.async)
      return Promise.all([...r.data].map((s, o) => n.type._parseAsync(new ht(r, s, r.path, o)))).then((s) => ze.mergeArray(a, s));
    const i = [...r.data].map((s, o) => n.type._parseSync(new ht(r, s, r.path, o)));
    return ze.mergeArray(a, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new ot({
      ...this._def,
      minLength: { value: t, message: $.toString(r) }
    });
  }
  max(t, r) {
    return new ot({
      ...this._def,
      maxLength: { value: t, message: $.toString(r) }
    });
  }
  length(t, r) {
    return new ot({
      ...this._def,
      exactLength: { value: t, message: $.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ot.create = (e, t) => new ot({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Z.ZodArray,
  ...Q(t)
});
function rr(e) {
  if (e instanceof xe) {
    const t = {};
    for (const r in e.shape) {
      const a = e.shape[r];
      t[r] = _t.create(rr(a));
    }
    return new xe({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof ot ? new ot({
      ...e._def,
      type: rr(e.element)
    }) : e instanceof _t ? _t.create(rr(e.unwrap())) : e instanceof Ut ? Ut.create(rr(e.unwrap())) : e instanceof pt ? pt.create(e.items.map((t) => rr(t))) : e;
}
class xe extends te {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = fe.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== z.object) {
      const u = this._getOrReturnCtx(t);
      return I(u, {
        code: x.invalid_type,
        expected: z.object,
        received: u.parsedType
      }), K;
    }
    const { status: a, ctx: n } = this._processInputParams(t), { shape: i, keys: s } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof xt && this._def.unknownKeys === "strip"))
      for (const u in n.data)
        s.includes(u) || o.push(u);
    const l = [];
    for (const u of s) {
      const f = i[u], d = n.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: f._parse(new ht(n, d, n.path, u)),
        alwaysSet: u in n.data
      });
    }
    if (this._def.catchall instanceof xt) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const f of o)
          l.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: n.data[f] }
          });
      else if (u === "strict")
        o.length > 0 && (I(n, {
          code: x.unrecognized_keys,
          keys: o
        }), a.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const f of o) {
        const d = n.data[f];
        l.push({
          key: { status: "valid", value: f },
          value: u._parse(
            new ht(n, d, n.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const f of l) {
        const d = await f.key;
        u.push({
          key: d,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return u;
    }).then((u) => ze.mergeObjectSync(a, u)) : ze.mergeObjectSync(a, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return $.errToObj, new xe({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, a) => {
          var n, i, s, o;
          const l = (s = (i = (n = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(n, r, a).message) !== null && s !== void 0 ? s : a.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = $.errToObj(t).message) !== null && o !== void 0 ? o : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new xe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new xe({
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
    return new xe({
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
    return new xe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Z.ZodObject
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
    return new xe({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return fe.objectKeys(t).forEach((a) => {
      t[a] && this.shape[a] && (r[a] = this.shape[a]);
    }), new xe({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return fe.objectKeys(this.shape).forEach((a) => {
      t[a] || (r[a] = this.shape[a]);
    }), new xe({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return rr(this);
  }
  partial(t) {
    const r = {};
    return fe.objectKeys(this.shape).forEach((a) => {
      const n = this.shape[a];
      t && !t[a] ? r[a] = n : r[a] = n.optional();
    }), new xe({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return fe.objectKeys(this.shape).forEach((a) => {
      if (t && !t[a])
        r[a] = this.shape[a];
      else {
        let i = this.shape[a];
        for (; i instanceof _t; )
          i = i._def.innerType;
        r[a] = i;
      }
    }), new xe({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Ts(fe.objectKeys(this.shape));
  }
}
xe.create = (e, t) => new xe({
  shape: () => e,
  unknownKeys: "strip",
  catchall: xt.create(),
  typeName: Z.ZodObject,
  ...Q(t)
});
xe.strictCreate = (e, t) => new xe({
  shape: () => e,
  unknownKeys: "strict",
  catchall: xt.create(),
  typeName: Z.ZodObject,
  ...Q(t)
});
xe.lazycreate = (e, t) => new xe({
  shape: e,
  unknownKeys: "strip",
  catchall: xt.create(),
  typeName: Z.ZodObject,
  ...Q(t)
});
class Nr extends te {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), a = this._def.options;
    function n(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const s = i.map((o) => new st(o.ctx.common.issues));
      return I(r, {
        code: x.invalid_union,
        unionErrors: s
      }), K;
    }
    if (r.common.async)
      return Promise.all(a.map(async (i) => {
        const s = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: r.data,
            path: r.path,
            parent: s
          }),
          ctx: s
        };
      })).then(n);
    {
      let i;
      const s = [];
      for (const l of a) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, f = l._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !i && (i = { result: f, ctx: u }), u.common.issues.length && s.push(u.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((l) => new st(l));
      return I(r, {
        code: x.invalid_union,
        unionErrors: o
      }), K;
    }
  }
  get options() {
    return this._def.options;
  }
}
Nr.create = (e, t) => new Nr({
  options: e,
  typeName: Z.ZodUnion,
  ...Q(t)
});
const pa = (e) => e instanceof Ar ? pa(e.schema) : e instanceof lt ? pa(e.innerType()) : e instanceof Mr ? [e.value] : e instanceof Mt ? e.options : e instanceof zr ? Object.keys(e.enum) : e instanceof Lr ? pa(e._def.innerType) : e instanceof Er ? [void 0] : e instanceof Cr ? [null] : null;
class Wa extends te {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.object)
      return I(r, {
        code: x.invalid_type,
        expected: z.object,
        received: r.parsedType
      }), K;
    const a = this.discriminator, n = r.data[a], i = this.optionsMap.get(n);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (I(r, {
      code: x.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [a]
    }), K);
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
    for (const i of r) {
      const s = pa(i.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of s) {
        if (n.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        n.set(o, i);
      }
    }
    return new Wa({
      typeName: Z.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: n,
      ...Q(a)
    });
  }
}
function An(e, t) {
  const r = Ct(e), a = Ct(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === z.object && a === z.object) {
    const n = fe.objectKeys(t), i = fe.objectKeys(e).filter((o) => n.indexOf(o) !== -1), s = { ...e, ...t };
    for (const o of i) {
      const l = An(e[o], t[o]);
      if (!l.valid)
        return { valid: !1 };
      s[o] = l.data;
    }
    return { valid: !0, data: s };
  } else if (r === z.array && a === z.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const n = [];
    for (let i = 0; i < e.length; i++) {
      const s = e[i], o = t[i], l = An(s, o);
      if (!l.valid)
        return { valid: !1 };
      n.push(l.data);
    }
    return { valid: !0, data: n };
  } else
    return r === z.date && a === z.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Pr extends te {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t), n = (i, s) => {
      if (Pn(i) || Pn(s))
        return K;
      const o = An(i.value, s.value);
      return o.valid ? ((Rn(i) || Rn(s)) && r.dirty(), { status: r.value, value: o.data }) : (I(a, {
        code: x.invalid_intersection_types
      }), K);
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
    ]).then(([i, s]) => n(i, s)) : n(this._def.left._parseSync({
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
Pr.create = (e, t, r) => new Pr({
  left: e,
  right: t,
  typeName: Z.ZodIntersection,
  ...Q(r)
});
class pt extends te {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== z.array)
      return I(a, {
        code: x.invalid_type,
        expected: z.array,
        received: a.parsedType
      }), K;
    if (a.data.length < this._def.items.length)
      return I(a, {
        code: x.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), K;
    !this._def.rest && a.data.length > this._def.items.length && (I(a, {
      code: x.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...a.data].map((s, o) => {
      const l = this._def.items[o] || this._def.rest;
      return l ? l._parse(new ht(a, s, a.path, o)) : null;
    }).filter((s) => !!s);
    return a.common.async ? Promise.all(i).then((s) => ze.mergeArray(r, s)) : ze.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new pt({
      ...this._def,
      rest: t
    });
  }
}
pt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new pt({
    items: e,
    typeName: Z.ZodTuple,
    rest: null,
    ...Q(t)
  });
};
class Rr extends te {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== z.object)
      return I(a, {
        code: x.invalid_type,
        expected: z.object,
        received: a.parsedType
      }), K;
    const n = [], i = this._def.keyType, s = this._def.valueType;
    for (const o in a.data)
      n.push({
        key: i._parse(new ht(a, o, a.path, o)),
        value: s._parse(new ht(a, a.data[o], a.path, o))
      });
    return a.common.async ? ze.mergeObjectAsync(r, n) : ze.mergeObjectSync(r, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, a) {
    return r instanceof te ? new Rr({
      keyType: t,
      valueType: r,
      typeName: Z.ZodRecord,
      ...Q(a)
    }) : new Rr({
      keyType: it.create(),
      valueType: t,
      typeName: Z.ZodRecord,
      ...Q(r)
    });
  }
}
class xa extends te {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== z.map)
      return I(a, {
        code: x.invalid_type,
        expected: z.map,
        received: a.parsedType
      }), K;
    const n = this._def.keyType, i = this._def.valueType, s = [...a.data.entries()].map(([o, l], u) => ({
      key: n._parse(new ht(a, o, a.path, [u, "key"])),
      value: i._parse(new ht(a, l, a.path, [u, "value"]))
    }));
    if (a.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of s) {
          const u = await l.key, f = await l.value;
          if (u.status === "aborted" || f.status === "aborted")
            return K;
          (u.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(u.value, f.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const l of s) {
        const u = l.key, f = l.value;
        if (u.status === "aborted" || f.status === "aborted")
          return K;
        (u.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(u.value, f.value);
      }
      return { status: r.value, value: o };
    }
  }
}
xa.create = (e, t, r) => new xa({
  valueType: t,
  keyType: e,
  typeName: Z.ZodMap,
  ...Q(r)
});
class Ht extends te {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== z.set)
      return I(a, {
        code: x.invalid_type,
        expected: z.set,
        received: a.parsedType
      }), K;
    const n = this._def;
    n.minSize !== null && a.data.size < n.minSize.value && (I(a, {
      code: x.too_small,
      minimum: n.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.minSize.message
    }), r.dirty()), n.maxSize !== null && a.data.size > n.maxSize.value && (I(a, {
      code: x.too_big,
      maximum: n.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: n.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function s(l) {
      const u = /* @__PURE__ */ new Set();
      for (const f of l) {
        if (f.status === "aborted")
          return K;
        f.status === "dirty" && r.dirty(), u.add(f.value);
      }
      return { status: r.value, value: u };
    }
    const o = [...a.data.values()].map((l, u) => i._parse(new ht(a, l, a.path, u)));
    return a.common.async ? Promise.all(o).then((l) => s(l)) : s(o);
  }
  min(t, r) {
    return new Ht({
      ...this._def,
      minSize: { value: t, message: $.toString(r) }
    });
  }
  max(t, r) {
    return new Ht({
      ...this._def,
      maxSize: { value: t, message: $.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ht.create = (e, t) => new Ht({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Z.ZodSet,
  ...Q(t)
});
class lr extends te {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.function)
      return I(r, {
        code: x.invalid_type,
        expected: z.function,
        received: r.parsedType
      }), K;
    function a(o, l) {
      return ya({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ma(),
          Or
        ].filter((u) => !!u),
        issueData: {
          code: x.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function n(o, l) {
      return ya({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ma(),
          Or
        ].filter((u) => !!u),
        issueData: {
          code: x.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, s = r.data;
    if (this._def.returns instanceof dr) {
      const o = this;
      return We(async function(...l) {
        const u = new st([]), f = await o._def.args.parseAsync(l, i).catch((v) => {
          throw u.addIssue(a(l, v)), u;
        }), d = await Reflect.apply(s, this, f);
        return await o._def.returns._def.type.parseAsync(d, i).catch((v) => {
          throw u.addIssue(n(d, v)), u;
        });
      });
    } else {
      const o = this;
      return We(function(...l) {
        const u = o._def.args.safeParse(l, i);
        if (!u.success)
          throw new st([a(l, u.error)]);
        const f = Reflect.apply(s, this, u.data), d = o._def.returns.safeParse(f, i);
        if (!d.success)
          throw new st([n(f, d.error)]);
        return d.data;
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
    return new lr({
      ...this._def,
      args: pt.create(t).rest(Ft.create())
    });
  }
  returns(t) {
    return new lr({
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
    return new lr({
      args: t || pt.create([]).rest(Ft.create()),
      returns: r || Ft.create(),
      typeName: Z.ZodFunction,
      ...Q(a)
    });
  }
}
class Ar extends te {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Ar.create = (e, t) => new Ar({
  getter: e,
  typeName: Z.ZodLazy,
  ...Q(t)
});
class Mr extends te {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return I(r, {
        received: r.data,
        code: x.invalid_literal,
        expected: this._def.value
      }), K;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Mr.create = (e, t) => new Mr({
  value: e,
  typeName: Z.ZodLiteral,
  ...Q(t)
});
function Ts(e, t) {
  return new Mt({
    values: e,
    typeName: Z.ZodEnum,
    ...Q(t)
  });
}
class Mt extends te {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), a = this._def.values;
      return I(r, {
        expected: fe.joinValues(a),
        received: r.parsedType,
        code: x.invalid_type
      }), K;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), a = this._def.values;
      return I(r, {
        received: r.data,
        code: x.invalid_enum_value,
        options: a
      }), K;
    }
    return We(t.data);
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
    return Mt.create(t);
  }
  exclude(t) {
    return Mt.create(this.options.filter((r) => !t.includes(r)));
  }
}
Mt.create = Ts;
class zr extends te {
  _parse(t) {
    const r = fe.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(t);
    if (a.parsedType !== z.string && a.parsedType !== z.number) {
      const n = fe.objectValues(r);
      return I(a, {
        expected: fe.joinValues(n),
        received: a.parsedType,
        code: x.invalid_type
      }), K;
    }
    if (r.indexOf(t.data) === -1) {
      const n = fe.objectValues(r);
      return I(a, {
        received: a.data,
        code: x.invalid_enum_value,
        options: n
      }), K;
    }
    return We(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
zr.create = (e, t) => new zr({
  values: e,
  typeName: Z.ZodNativeEnum,
  ...Q(t)
});
class dr extends te {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.promise && r.common.async === !1)
      return I(r, {
        code: x.invalid_type,
        expected: z.promise,
        received: r.parsedType
      }), K;
    const a = r.parsedType === z.promise ? r.data : Promise.resolve(r.data);
    return We(a.then((n) => this._def.type.parseAsync(n, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
dr.create = (e, t) => new dr({
  type: e,
  typeName: Z.ZodPromise,
  ...Q(t)
});
class lt extends te {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Z.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t), n = this._def.effect || null, i = {
      addIssue: (s) => {
        I(a, s), s.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), n.type === "preprocess") {
      const s = n.transform(a.data, i);
      return a.common.issues.length ? {
        status: "dirty",
        value: a.data
      } : a.common.async ? Promise.resolve(s).then((o) => this._def.schema._parseAsync({
        data: o,
        path: a.path,
        parent: a
      })) : this._def.schema._parseSync({
        data: s,
        path: a.path,
        parent: a
      });
    }
    if (n.type === "refinement") {
      const s = (o) => {
        const l = n.refinement(o, i);
        if (a.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (a.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return o.status === "aborted" ? K : (o.status === "dirty" && r.dirty(), s(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((o) => o.status === "aborted" ? K : (o.status === "dirty" && r.dirty(), s(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (n.type === "transform")
      if (a.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!kr(s))
          return s;
        const o = n.transform(s.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((s) => kr(s) ? Promise.resolve(n.transform(s.value, i)).then((o) => ({ status: r.value, value: o })) : s);
    fe.assertNever(n);
  }
}
lt.create = (e, t, r) => new lt({
  schema: e,
  typeName: Z.ZodEffects,
  effect: t,
  ...Q(r)
});
lt.createWithPreprocess = (e, t, r) => new lt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Z.ZodEffects,
  ...Q(r)
});
class _t extends te {
  _parse(t) {
    return this._getType(t) === z.undefined ? We(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
_t.create = (e, t) => new _t({
  innerType: e,
  typeName: Z.ZodOptional,
  ...Q(t)
});
class Ut extends te {
  _parse(t) {
    return this._getType(t) === z.null ? We(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ut.create = (e, t) => new Ut({
  innerType: e,
  typeName: Z.ZodNullable,
  ...Q(t)
});
class Lr extends te {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let a = r.data;
    return r.parsedType === z.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Lr.create = (e, t) => new Lr({
  innerType: e,
  typeName: Z.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Q(t)
});
class Sa extends te {
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
    return ba(n) ? n.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new st(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new st(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Sa.create = (e, t) => new Sa({
  innerType: e,
  typeName: Z.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Q(t)
});
class Da extends te {
  _parse(t) {
    if (this._getType(t) !== z.nan) {
      const a = this._getOrReturnCtx(t);
      return I(a, {
        code: x.invalid_type,
        expected: z.nan,
        received: a.parsedType
      }), K;
    }
    return { status: "valid", value: t.data };
  }
}
Da.create = (e) => new Da({
  typeName: Z.ZodNaN,
  ...Q(e)
});
const Xl = Symbol("zod_brand");
class Es extends te {
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
class Hr extends te {
  _parse(t) {
    const { status: r, ctx: a } = this._processInputParams(t);
    if (a.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return i.status === "aborted" ? K : i.status === "dirty" ? (r.dirty(), ks(i.value)) : this._def.out._parseAsync({
          data: i.value,
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
      return n.status === "aborted" ? K : n.status === "dirty" ? (r.dirty(), {
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
    return new Hr({
      in: t,
      out: r,
      typeName: Z.ZodPipeline
    });
  }
}
class Oa extends te {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return kr(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Oa.create = (e, t) => new Oa({
  innerType: e,
  typeName: Z.ZodReadonly,
  ...Q(t)
});
const Cs = (e, t = {}, r) => e ? fr.create().superRefine((a, n) => {
  var i, s;
  if (!e(a)) {
    const o = typeof t == "function" ? t(a) : typeof t == "string" ? { message: t } : t, l = (s = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && s !== void 0 ? s : !0, u = typeof o == "string" ? { message: o } : o;
    n.addIssue({ code: "custom", ...u, fatal: l });
  }
}) : fr.create(), Kl = {
  object: xe.lazycreate
};
var Z;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Z || (Z = {}));
const Ql = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Cs((r) => r instanceof e, t), Ns = it.create, Ps = Rt.create, Jl = Da.create, eu = At.create, Rs = Tr.create, tu = Bt.create, ru = wa.create, au = Er.create, nu = Cr.create, iu = fr.create, su = Ft.create, ou = xt.create, lu = _a.create, uu = ot.create, cu = xe.create, fu = xe.strictCreate, du = Nr.create, hu = Wa.create, pu = Pr.create, vu = pt.create, gu = Rr.create, mu = xa.create, yu = Ht.create, bu = lr.create, wu = Ar.create, _u = Mr.create, xu = Mt.create, Su = zr.create, Du = dr.create, Pi = lt.create, Ou = _t.create, ku = Ut.create, Tu = lt.createWithPreprocess, Eu = Hr.create, Cu = () => Ns().optional(), Nu = () => Ps().optional(), Pu = () => Rs().optional(), Ru = {
  string: (e) => it.create({ ...e, coerce: !0 }),
  number: (e) => Rt.create({ ...e, coerce: !0 }),
  boolean: (e) => Tr.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => At.create({ ...e, coerce: !0 }),
  date: (e) => Bt.create({ ...e, coerce: !0 })
}, Au = K;
var dp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Or,
  setErrorMap: Il,
  getErrorMap: ma,
  makeIssue: ya,
  EMPTY_PATH: jl,
  addIssueToContext: I,
  ParseStatus: ze,
  INVALID: K,
  DIRTY: ks,
  OK: We,
  isAborted: Pn,
  isDirty: Rn,
  isValid: kr,
  isAsync: ba,
  get util() {
    return fe;
  },
  get objectUtil() {
    return Nn;
  },
  ZodParsedType: z,
  getParsedType: Ct,
  ZodType: te,
  ZodString: it,
  ZodNumber: Rt,
  ZodBigInt: At,
  ZodBoolean: Tr,
  ZodDate: Bt,
  ZodSymbol: wa,
  ZodUndefined: Er,
  ZodNull: Cr,
  ZodAny: fr,
  ZodUnknown: Ft,
  ZodNever: xt,
  ZodVoid: _a,
  ZodArray: ot,
  ZodObject: xe,
  ZodUnion: Nr,
  ZodDiscriminatedUnion: Wa,
  ZodIntersection: Pr,
  ZodTuple: pt,
  ZodRecord: Rr,
  ZodMap: xa,
  ZodSet: Ht,
  ZodFunction: lr,
  ZodLazy: Ar,
  ZodLiteral: Mr,
  ZodEnum: Mt,
  ZodNativeEnum: zr,
  ZodPromise: dr,
  ZodEffects: lt,
  ZodTransformer: lt,
  ZodOptional: _t,
  ZodNullable: Ut,
  ZodDefault: Lr,
  ZodCatch: Sa,
  ZodNaN: Da,
  BRAND: Xl,
  ZodBranded: Es,
  ZodPipeline: Hr,
  ZodReadonly: Oa,
  custom: Cs,
  Schema: te,
  ZodSchema: te,
  late: Kl,
  get ZodFirstPartyTypeKind() {
    return Z;
  },
  coerce: Ru,
  any: iu,
  array: uu,
  bigint: eu,
  boolean: Rs,
  date: tu,
  discriminatedUnion: hu,
  effect: Pi,
  enum: xu,
  function: bu,
  instanceof: Ql,
  intersection: pu,
  lazy: wu,
  literal: _u,
  map: mu,
  nan: Jl,
  nativeEnum: Su,
  never: ou,
  null: nu,
  nullable: ku,
  number: Ps,
  object: cu,
  oboolean: Pu,
  onumber: Nu,
  optional: Ou,
  ostring: Cu,
  pipeline: Eu,
  preprocess: Tu,
  promise: Du,
  record: gu,
  set: yu,
  strictObject: fu,
  string: Ns,
  symbol: ru,
  transformer: Pi,
  tuple: vu,
  undefined: au,
  union: du,
  unknown: su,
  void: lu,
  NEVER: Au,
  ZodIssueCode: x,
  quotelessJson: Ll,
  ZodError: st
});
const Mu = ({
  children: e,
  className: t,
  form: r
}) => {
  const a = r.formState.errors;
  return /* @__PURE__ */ qe("form", { className: t, onSubmit: r.onSubmit, children: [
    a.root && /* @__PURE__ */ qe(_l, { severity: "error", children: [
      /* @__PURE__ */ V(xl, { children: a.root.message }),
      a.root.fields && /* @__PURE__ */ V("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(a.root.fields).map(([n, {
        message: i
      }]) => /* @__PURE__ */ V("li", { css: {}, children: i }, n)) })
    ] }),
    e
  ] });
}, hp = Mu;
var Ur = (e) => e.type === "checkbox", ar = (e) => e instanceof Date, Ve = (e) => e == null;
const As = (e) => typeof e == "object";
var Ce = (e) => !Ve(e) && !Array.isArray(e) && As(e) && !ar(e), Ms = (e) => Ce(e) && e.target ? Ur(e.target) ? e.target.checked : e.target.value : e, zu = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, zs = (e, t) => e.has(zu(t)), Lu = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Ce(t) && t.hasOwnProperty("isPrototypeOf");
}, Xn = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function rt(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Xn && (e instanceof Blob || e instanceof FileList)) && (r || Ce(e)))
    if (t = r ? [] : {}, !r && !Lu(e))
      t = e;
    else
      for (const a in e)
        e.hasOwnProperty(a) && (t[a] = rt(e[a]));
  else
    return e;
  return t;
}
var Zr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Oe = (e) => e === void 0, P = (e, t, r) => {
  if (!t || !Ce(e))
    return r;
  const a = Zr(t.split(/[,[\].]+?/)).reduce((n, i) => Ve(n) ? n : n[i], e);
  return Oe(a) || a === e ? Oe(e[t]) ? r : e[t] : a;
}, at = (e) => typeof e == "boolean";
const ka = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, nt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, yt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Iu = k.createContext(null), Kn = () => k.useContext(Iu);
var Ls = (e, t, r, a = !0) => {
  const n = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(n, i, {
      get: () => {
        const s = i;
        return t._proxyFormState[s] !== nt.all && (t._proxyFormState[s] = !a || nt.all), r && (r[s] = !0), e[s];
      }
    });
  return n;
}, Qe = (e) => Ce(e) && !Object.keys(e).length, Is = (e, t, r, a) => {
  r(e);
  const { name: n, ...i } = e;
  return Qe(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((s) => t[s] === (!a || nt.all));
}, va = (e) => Array.isArray(e) ? e : [e], js = (e, t, r) => !e || !t || e === t || va(e).some((a) => a && (r ? a === t : a.startsWith(t) || t.startsWith(a)));
function Qn(e) {
  const t = k.useRef(e);
  t.current = e, k.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function ju(e) {
  const t = Kn(), { control: r = t.control, disabled: a, name: n, exact: i } = e || {}, [s, o] = k.useState(r._formState), l = k.useRef(!0), u = k.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), f = k.useRef(n);
  return f.current = n, Qn({
    disabled: a,
    next: (d) => l.current && js(f.current, d.name, i) && Is(d, u.current, r._updateFormState) && o({
      ...r._formState,
      ...d
    }),
    subject: r._subjects.state
  }), k.useEffect(() => (l.current = !0, u.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), Ls(s, r, u.current, !1);
}
var dt = (e) => typeof e == "string", Vs = (e, t, r, a, n) => dt(e) ? (a && t.watch.add(e), P(r, e, n)) : Array.isArray(e) ? e.map((i) => (a && t.watch.add(i), P(r, i))) : (a && (t.watchAll = !0), r);
function Vu(e) {
  const t = Kn(), { control: r = t.control, name: a, defaultValue: n, disabled: i, exact: s } = e || {}, o = k.useRef(a);
  o.current = a, Qn({
    disabled: i,
    subject: r._subjects.values,
    next: (f) => {
      js(o.current, f.name, s) && u(rt(Vs(o.current, r._names, f.values || r._formValues, !1, n)));
    }
  });
  const [l, u] = k.useState(r._getWatch(a, n));
  return k.useEffect(() => r._removeUnmounted()), l;
}
var Jn = (e) => /^\w*$/.test(e), Ws = (e) => Zr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), pe = (e, t, r) => {
  let a = -1;
  const n = Jn(t) ? [t] : Ws(t), i = n.length, s = i - 1;
  for (; ++a < i; ) {
    const o = n[a];
    let l = r;
    if (a !== s) {
      const u = e[o];
      l = Ce(u) || Array.isArray(u) ? u : isNaN(+n[a + 1]) ? {} : [];
    }
    e[o] = l, e = e[o];
  }
  return e;
};
function Wu(e) {
  const t = Kn(), { name: r, disabled: a, control: n = t.control, shouldUnregister: i } = e, s = zs(n._names.array, r), o = Vu({
    control: n,
    name: r,
    defaultValue: P(n._formValues, r, P(n._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = ju({
    control: n,
    name: r
  }), u = k.useRef(n.register(r, {
    ...e.rules,
    value: o,
    disabled: e.disabled
  }));
  return u.current = n.register(r, e.rules), k.useEffect(() => {
    const f = n._options.shouldUnregister || i, d = (h, v) => {
      const g = P(n._fields, h);
      g && (g._f.mount = v);
    };
    if (d(r, !0), f) {
      const h = rt(P(n._options.defaultValues, r));
      pe(n._defaultValues, r, h), Oe(P(n._formValues, r)) && pe(n._formValues, r, h);
    }
    return () => {
      (s ? f && !n._state.action : f) ? n.unregister(r) : d(r, !1);
    };
  }, [r, n, s, i]), k.useEffect(() => {
    P(n._fields, r) && n._updateDisabledField({
      disabled: a,
      fields: n._fields,
      name: r,
      value: P(n._fields, r)._f.value
    });
  }, [a, r, n]), {
    field: {
      name: r,
      value: o,
      ...at(a) || at(l.disabled) ? { disabled: l.disabled || a } : {},
      onChange: k.useCallback((f) => u.current.onChange({
        target: {
          value: Ms(f),
          name: r
        },
        type: ka.CHANGE
      }), [r]),
      onBlur: k.useCallback(() => u.current.onBlur({
        target: {
          value: P(n._formValues, r),
          name: r
        },
        type: ka.BLUR
      }), [r, n]),
      ref: (f) => {
        const d = P(n._fields, r);
        d && f && (d._f.ref = {
          focus: () => f.focus(),
          select: () => f.select(),
          setCustomValidity: (h) => f.setCustomValidity(h),
          reportValidity: () => f.reportValidity()
        });
      }
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!P(l.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!P(l.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!P(l.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => P(l.errors, r)
      }
    })
  };
}
const Fu = (e) => e.render(Wu(e));
var Fs = (e, t, r, a, n) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [a]: n || !0
  }
} : {}, Ri = (e) => ({
  isOnSubmit: !e || e === nt.onSubmit,
  isOnBlur: e === nt.onBlur,
  isOnChange: e === nt.onChange,
  isOnAll: e === nt.all,
  isOnTouch: e === nt.onTouched
}), Ai = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))));
const Dr = (e, t, r, a) => {
  for (const n of r || Object.keys(e)) {
    const i = P(e, n);
    if (i) {
      const { _f: s, ...o } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], n) && !a)
          break;
        if (s.ref && t(s.ref, s.name) && !a)
          break;
        Dr(o, t);
      } else
        Ce(o) && Dr(o, t);
    }
  }
};
var $u = (e, t, r) => {
  const a = Zr(P(e, r));
  return pe(a, "root", t[r]), pe(e, r, a), e;
}, ei = (e) => e.type === "file", Pt = (e) => typeof e == "function", Ta = (e) => {
  if (!Xn)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ga = (e) => dt(e), ti = (e) => e.type === "radio", Ea = (e) => e instanceof RegExp;
const Mi = {
  value: !1,
  isValid: !1
}, zi = { value: !0, isValid: !0 };
var $s = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Oe(e[0].attributes.value) ? Oe(e[0].value) || e[0].value === "" ? zi : { value: e[0].value, isValid: !0 } : zi
    ) : Mi;
  }
  return Mi;
};
const Li = {
  isValid: !1,
  value: null
};
var Bs = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Li) : Li;
function Ii(e, t, r = "validate") {
  if (ga(e) || Array.isArray(e) && e.every(ga) || at(e) && !e)
    return {
      type: r,
      message: ga(e) ? e : "",
      ref: t
    };
}
var Jt = (e) => Ce(e) && !Ea(e) ? e : {
  value: e,
  message: ""
}, ji = async (e, t, r, a, n) => {
  const { ref: i, refs: s, required: o, maxLength: l, minLength: u, min: f, max: d, pattern: h, validate: v, name: g, valueAsNumber: S, mount: A, disabled: j } = e._f, w = P(t, g);
  if (!A || j)
    return {};
  const R = s ? s[0] : i, q = (M) => {
    a && R.reportValidity && (R.setCustomValidity(at(M) ? "" : M || ""), R.reportValidity());
  }, B = {}, U = ti(i), le = Ur(i), J = U || le, ae = (S || ei(i)) && Oe(i.value) && Oe(w) || Ta(i) && i.value === "" || w === "" || Array.isArray(w) && !w.length, G = Fs.bind(null, g, r, B), ue = (M, W, ee, se = yt.maxLength, he = yt.minLength) => {
    const ve = M ? W : ee;
    B[g] = {
      type: M ? se : he,
      message: ve,
      ref: i,
      ...G(M ? se : he, ve)
    };
  };
  if (n ? !Array.isArray(w) || !w.length : o && (!J && (ae || Ve(w)) || at(w) && !w || le && !$s(s).isValid || U && !Bs(s).isValid)) {
    const { value: M, message: W } = ga(o) ? { value: !!o, message: o } : Jt(o);
    if (M && (B[g] = {
      type: yt.required,
      message: W,
      ref: R,
      ...G(yt.required, W)
    }, !r))
      return q(W), B;
  }
  if (!ae && (!Ve(f) || !Ve(d))) {
    let M, W;
    const ee = Jt(d), se = Jt(f);
    if (!Ve(w) && !isNaN(w)) {
      const he = i.valueAsNumber || w && +w;
      Ve(ee.value) || (M = he > ee.value), Ve(se.value) || (W = he < se.value);
    } else {
      const he = i.valueAsDate || new Date(w), ve = (ce) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ce), Fe = i.type == "time", we = i.type == "week";
      dt(ee.value) && w && (M = Fe ? ve(w) > ve(ee.value) : we ? w > ee.value : he > new Date(ee.value)), dt(se.value) && w && (W = Fe ? ve(w) < ve(se.value) : we ? w < se.value : he < new Date(se.value));
    }
    if ((M || W) && (ue(!!M, ee.message, se.message, yt.max, yt.min), !r))
      return q(B[g].message), B;
  }
  if ((l || u) && !ae && (dt(w) || n && Array.isArray(w))) {
    const M = Jt(l), W = Jt(u), ee = !Ve(M.value) && w.length > +M.value, se = !Ve(W.value) && w.length < +W.value;
    if ((ee || se) && (ue(ee, M.message, W.message), !r))
      return q(B[g].message), B;
  }
  if (h && !ae && dt(w)) {
    const { value: M, message: W } = Jt(h);
    if (Ea(M) && !w.match(M) && (B[g] = {
      type: yt.pattern,
      message: W,
      ref: i,
      ...G(yt.pattern, W)
    }, !r))
      return q(W), B;
  }
  if (v) {
    if (Pt(v)) {
      const M = await v(w, t), W = Ii(M, R);
      if (W && (B[g] = {
        ...W,
        ...G(yt.validate, W.message)
      }, !r))
        return q(W.message), B;
    } else if (Ce(v)) {
      let M = {};
      for (const W in v) {
        if (!Qe(M) && !r)
          break;
        const ee = Ii(await v[W](w, t), R, W);
        ee && (M = {
          ...ee,
          ...G(W, ee.message)
        }, q(ee.message), r && (B[g] = M));
      }
      if (!Qe(M) && (B[g] = {
        ref: R,
        ...M
      }, !r))
        return B;
    }
  }
  return q(!0), B;
};
function Bu(e, t) {
  const r = t.slice(0, -1).length;
  let a = 0;
  for (; a < r; )
    e = Oe(e) ? a++ : e[t[a++]];
  return e;
}
function Hu(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Oe(e[t]))
      return !1;
  return !0;
}
function Re(e, t) {
  const r = Array.isArray(t) ? t : Jn(t) ? [t] : Ws(t), a = r.length === 1 ? e : Bu(e, r), n = r.length - 1, i = r[n];
  return a && delete a[i], n !== 0 && (Ce(a) && Qe(a) || Array.isArray(a) && Hu(a)) && Re(e, r.slice(0, -1)), e;
}
var pn = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (n) => {
      for (const i of e)
        i.next && i.next(n);
    },
    subscribe: (n) => (e.push(n), {
      unsubscribe: () => {
        e = e.filter((i) => i !== n);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Ca = (e) => Ve(e) || !As(e);
function Wt(e, t) {
  if (Ca(e) || Ca(t))
    return e === t;
  if (ar(e) && ar(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), a = Object.keys(t);
  if (r.length !== a.length)
    return !1;
  for (const n of r) {
    const i = e[n];
    if (!a.includes(n))
      return !1;
    if (n !== "ref") {
      const s = t[n];
      if (ar(i) && ar(s) || Ce(i) && Ce(s) || Array.isArray(i) && Array.isArray(s) ? !Wt(i, s) : i !== s)
        return !1;
    }
  }
  return !0;
}
var Hs = (e) => e.type === "select-multiple", Uu = (e) => ti(e) || Ur(e), vn = (e) => Ta(e) && e.isConnected, Us = (e) => {
  for (const t in e)
    if (Pt(e[t]))
      return !0;
  return !1;
};
function Na(e, t = {}) {
  const r = Array.isArray(e);
  if (Ce(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || Ce(e[a]) && !Us(e[a]) ? (t[a] = Array.isArray(e[a]) ? [] : {}, Na(e[a], t[a])) : Ve(e[a]) || (t[a] = !0);
  return t;
}
function Zs(e, t, r) {
  const a = Array.isArray(e);
  if (Ce(e) || a)
    for (const n in e)
      Array.isArray(e[n]) || Ce(e[n]) && !Us(e[n]) ? Oe(t) || Ca(r[n]) ? r[n] = Array.isArray(e[n]) ? Na(e[n], []) : { ...Na(e[n]) } : Zs(e[n], Ve(t) ? {} : t[n], r[n]) : r[n] = !Wt(e[n], t[n]);
  return r;
}
var gn = (e, t) => Zs(e, t, Na(t)), Ys = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: a }) => Oe(e) ? e : t ? e === "" ? NaN : e && +e : r && dt(e) ? new Date(e) : a ? a(e) : e;
function mn(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return ei(t) ? t.files : ti(t) ? Bs(e.refs).value : Hs(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Ur(t) ? $s(e.refs).value : Ys(Oe(t.value) ? e.ref.value : t.value, e);
}
var Zu = (e, t, r, a) => {
  const n = {};
  for (const i of e) {
    const s = P(t, i);
    s && pe(n, i, s._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: n,
    shouldUseNativeValidation: a
  };
}, yr = (e) => Oe(e) ? e : Ea(e) ? e.source : Ce(e) ? Ea(e.value) ? e.value.source : e.value : e, Yu = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Vi(e, t, r) {
  const a = P(e, r);
  if (a || Jn(r))
    return {
      error: a,
      name: r
    };
  const n = r.split(".");
  for (; n.length; ) {
    const i = n.join("."), s = P(t, i), o = P(e, i);
    if (s && !Array.isArray(s) && r !== i)
      return { name: r };
    if (o && o.type)
      return {
        name: i,
        error: o
      };
    n.pop();
  }
  return {
    name: r
  };
}
var qu = (e, t, r, a, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(t || e) : (r ? a.isOnBlur : n.isOnBlur) ? !e : (r ? a.isOnChange : n.isOnChange) ? e : !0, Gu = (e, t) => !Zr(P(e, t)).length && Re(e, t);
const Xu = {
  mode: nt.onSubmit,
  reValidateMode: nt.onChange,
  shouldFocusError: !0
};
function Ku(e = {}, t) {
  let r = {
    ...Xu,
    ...e
  }, a = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Pt(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, n = {}, i = Ce(r.defaultValues) || Ce(r.values) ? rt(r.defaultValues || r.values) || {} : {}, s = r.shouldUnregister ? {} : rt(i), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, u, f = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, h = {
    values: pn(),
    array: pn(),
    state: pn()
  }, v = e.resetOptions && e.resetOptions.keepDirtyValues, g = Ri(r.mode), S = Ri(r.reValidateMode), A = r.criteriaMode === nt.all, j = (c) => (p) => {
    clearTimeout(f), f = setTimeout(c, p);
  }, w = async (c) => {
    if (d.isValid || c) {
      const p = r.resolver ? Qe((await G()).errors) : await M(n, !0);
      p !== a.isValid && h.state.next({
        isValid: p
      });
    }
  }, R = (c) => d.isValidating && h.state.next({
    isValidating: c
  }), q = (c, p = [], m, L, T = !0, D = !0) => {
    if (L && m) {
      if (o.action = !0, D && Array.isArray(P(n, c))) {
        const H = m(P(n, c), L.argA, L.argB);
        T && pe(n, c, H);
      }
      if (D && Array.isArray(P(a.errors, c))) {
        const H = m(P(a.errors, c), L.argA, L.argB);
        T && pe(a.errors, c, H), Gu(a.errors, c);
      }
      if (d.touchedFields && D && Array.isArray(P(a.touchedFields, c))) {
        const H = m(P(a.touchedFields, c), L.argA, L.argB);
        T && pe(a.touchedFields, c, H);
      }
      d.dirtyFields && (a.dirtyFields = gn(i, s)), h.state.next({
        name: c,
        isDirty: ee(c, p),
        dirtyFields: a.dirtyFields,
        errors: a.errors,
        isValid: a.isValid
      });
    } else
      pe(s, c, p);
  }, B = (c, p) => {
    pe(a.errors, c, p), h.state.next({
      errors: a.errors
    });
  }, U = (c) => {
    a.errors = c, h.state.next({
      errors: a.errors,
      isValid: !1
    });
  }, le = (c, p, m, L) => {
    const T = P(n, c);
    if (T) {
      const D = P(s, c, Oe(m) ? P(i, c) : m);
      Oe(D) || L && L.defaultChecked || p ? pe(s, c, p ? D : mn(T._f)) : ve(c, D), o.mount && w();
    }
  }, J = (c, p, m, L, T) => {
    let D = !1, H = !1;
    const ge = {
      name: c
    };
    if (!m || L) {
      d.isDirty && (H = a.isDirty, a.isDirty = ge.isDirty = ee(), D = H !== ge.isDirty);
      const Se = Wt(P(i, c), p);
      H = P(a.dirtyFields, c), Se ? Re(a.dirtyFields, c) : pe(a.dirtyFields, c, !0), ge.dirtyFields = a.dirtyFields, D = D || d.dirtyFields && H !== !Se;
    }
    if (m) {
      const Se = P(a.touchedFields, c);
      Se || (pe(a.touchedFields, c, m), ge.touchedFields = a.touchedFields, D = D || d.touchedFields && Se !== m);
    }
    return D && T && h.state.next(ge), D ? ge : {};
  }, ae = (c, p, m, L) => {
    const T = P(a.errors, c), D = d.isValid && at(p) && a.isValid !== p;
    if (e.delayError && m ? (u = j(() => B(c, m)), u(e.delayError)) : (clearTimeout(f), u = null, m ? pe(a.errors, c, m) : Re(a.errors, c)), (m ? !Wt(T, m) : T) || !Qe(L) || D) {
      const H = {
        ...L,
        ...D && at(p) ? { isValid: p } : {},
        errors: a.errors,
        name: c
      };
      a = {
        ...a,
        ...H
      }, h.state.next(H);
    }
    R(!1);
  }, G = async (c) => r.resolver(s, r.context, Zu(c || l.mount, n, r.criteriaMode, r.shouldUseNativeValidation)), ue = async (c) => {
    const { errors: p } = await G(c);
    if (c)
      for (const m of c) {
        const L = P(p, m);
        L ? pe(a.errors, m, L) : Re(a.errors, m);
      }
    else
      a.errors = p;
    return p;
  }, M = async (c, p, m = {
    valid: !0
  }) => {
    for (const L in c) {
      const T = c[L];
      if (T) {
        const { _f: D, ...H } = T;
        if (D) {
          const ge = l.array.has(D.name), Se = await ji(T, s, A, r.shouldUseNativeValidation && !p, ge);
          if (Se[D.name] && (m.valid = !1, p))
            break;
          !p && (P(Se, D.name) ? ge ? $u(a.errors, Se, D.name) : pe(a.errors, D.name, Se[D.name]) : Re(a.errors, D.name));
        }
        H && await M(H, p, m);
      }
    }
    return m.valid;
  }, W = () => {
    for (const c of l.unMount) {
      const p = P(n, c);
      p && (p._f.refs ? p._f.refs.every((m) => !vn(m)) : !vn(p._f.ref)) && X(c);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, ee = (c, p) => (c && p && pe(s, c, p), !Wt(_(), i)), se = (c, p, m) => Vs(c, l, {
    ...o.mount ? s : Oe(p) ? i : dt(c) ? { [c]: p } : p
  }, m, p), he = (c) => Zr(P(o.mount ? s : i, c, e.shouldUnregister ? P(i, c, []) : [])), ve = (c, p, m = {}) => {
    const L = P(n, c);
    let T = p;
    if (L) {
      const D = L._f;
      D && (!D.disabled && pe(s, c, Ys(p, D)), T = Ta(D.ref) && Ve(p) ? "" : p, Hs(D.ref) ? [...D.ref.options].forEach((H) => H.selected = T.includes(H.value)) : D.refs ? Ur(D.ref) ? D.refs.length > 1 ? D.refs.forEach((H) => (!H.defaultChecked || !H.disabled) && (H.checked = Array.isArray(T) ? !!T.find((ge) => ge === H.value) : T === H.value)) : D.refs[0] && (D.refs[0].checked = !!T) : D.refs.forEach((H) => H.checked = H.value === T) : ei(D.ref) ? D.ref.value = "" : (D.ref.value = T, D.ref.type || h.values.next({
        name: c,
        values: { ...s }
      })));
    }
    (m.shouldDirty || m.shouldTouch) && J(c, T, m.shouldTouch, m.shouldDirty, !0), m.shouldValidate && y(c);
  }, Fe = (c, p, m) => {
    for (const L in p) {
      const T = p[L], D = `${c}.${L}`, H = P(n, D);
      (l.array.has(c) || !Ca(T) || H && !H._f) && !ar(T) ? Fe(D, T, m) : ve(D, T, m);
    }
  }, we = (c, p, m = {}) => {
    const L = P(n, c), T = l.array.has(c), D = rt(p);
    pe(s, c, D), T ? (h.array.next({
      name: c,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && m.shouldDirty && h.state.next({
      name: c,
      dirtyFields: gn(i, s),
      isDirty: ee(c, D)
    })) : L && !L._f && !Ve(D) ? Fe(c, D, m) : ve(c, D, m), Ai(c, l) && h.state.next({ ...a }), h.values.next({
      name: c,
      values: { ...s }
    }), !o.mount && t();
  }, ce = async (c) => {
    const p = c.target;
    let m = p.name, L = !0;
    const T = P(n, m), D = () => p.type ? mn(T._f) : Ms(c), H = (ge) => {
      L = Number.isNaN(ge) || ge === P(s, m, ge);
    };
    if (T) {
      let ge, Se;
      const Ot = D(), mt = c.type === ka.BLUR || c.type === ka.FOCUS_OUT, Qr = !Yu(T._f) && !r.resolver && !P(a.errors, m) && !T._f.deps || qu(mt, P(a.touchedFields, m), a.isSubmitted, S, g), gr = Ai(m, l, mt);
      pe(s, m, Ot), mt ? (T._f.onBlur && T._f.onBlur(c), u && u(0)) : T._f.onChange && T._f.onChange(c);
      const kt = J(m, Ot, mt, !1), Jr = !Qe(kt) || gr;
      if (!mt && h.values.next({
        name: m,
        type: c.type,
        values: { ...s }
      }), Qr)
        return d.isValid && w(), Jr && h.state.next({ name: m, ...gr ? {} : kt });
      if (!mt && gr && h.state.next({ ...a }), R(!0), r.resolver) {
        const { errors: ea } = await G([m]);
        if (H(Ot), L) {
          const ta = Vi(a.errors, n, m), mr = Vi(ea, n, ta.name || m);
          ge = mr.error, m = mr.name, Se = Qe(ea);
        }
      } else
        ge = (await ji(T, s, A, r.shouldUseNativeValidation))[m], H(Ot), L && (ge ? Se = !1 : d.isValid && (Se = await M(n, !0)));
      L && (T._f.deps && y(T._f.deps), ae(m, Se, ge, kt));
    }
  }, Ne = (c, p) => {
    if (P(a.errors, p) && c.focus)
      return c.focus(), 1;
  }, y = async (c, p = {}) => {
    let m, L;
    const T = va(c);
    if (R(!0), r.resolver) {
      const D = await ue(Oe(c) ? c : T);
      m = Qe(D), L = c ? !T.some((H) => P(D, H)) : m;
    } else
      c ? (L = (await Promise.all(T.map(async (D) => {
        const H = P(n, D);
        return await M(H && H._f ? { [D]: H } : H);
      }))).every(Boolean), !(!L && !a.isValid) && w()) : L = m = await M(n);
    return h.state.next({
      ...!dt(c) || d.isValid && m !== a.isValid ? {} : { name: c },
      ...r.resolver || !c ? { isValid: m } : {},
      errors: a.errors,
      isValidating: !1
    }), p.shouldFocus && !L && Dr(n, Ne, c ? T : l.mount), L;
  }, _ = (c) => {
    const p = {
      ...i,
      ...o.mount ? s : {}
    };
    return Oe(c) ? p : dt(c) ? P(p, c) : c.map((m) => P(p, m));
  }, E = (c, p) => ({
    invalid: !!P((p || a).errors, c),
    isDirty: !!P((p || a).dirtyFields, c),
    isTouched: !!P((p || a).touchedFields, c),
    error: P((p || a).errors, c)
  }), N = (c) => {
    c && va(c).forEach((p) => Re(a.errors, p)), h.state.next({
      errors: c ? a.errors : {}
    });
  }, C = (c, p, m) => {
    const L = (P(n, c, { _f: {} })._f || {}).ref;
    pe(a.errors, c, {
      ...p,
      ref: L
    }), h.state.next({
      name: c,
      errors: a.errors,
      isValid: !1
    }), m && m.shouldFocus && L && L.focus && L.focus();
  }, F = (c, p) => Pt(c) ? h.values.subscribe({
    next: (m) => c(se(void 0, p), m)
  }) : se(c, p, !0), X = (c, p = {}) => {
    for (const m of c ? va(c) : l.mount)
      l.mount.delete(m), l.array.delete(m), p.keepValue || (Re(n, m), Re(s, m)), !p.keepError && Re(a.errors, m), !p.keepDirty && Re(a.dirtyFields, m), !p.keepTouched && Re(a.touchedFields, m), !r.shouldUnregister && !p.keepDefaultValue && Re(i, m);
    h.values.next({
      values: { ...s }
    }), h.state.next({
      ...a,
      ...p.keepDirty ? { isDirty: ee() } : {}
    }), !p.keepIsValid && w();
  }, ie = ({ disabled: c, name: p, field: m, fields: L, value: T }) => {
    if (at(c)) {
      const D = c ? void 0 : Oe(T) ? mn(m ? m._f : P(L, p)._f) : T;
      pe(s, p, D), J(p, D, !1, !1, !0);
    }
  }, ne = (c, p = {}) => {
    let m = P(n, c);
    const L = at(p.disabled);
    return pe(n, c, {
      ...m || {},
      _f: {
        ...m && m._f ? m._f : { ref: { name: c } },
        name: c,
        mount: !0,
        ...p
      }
    }), l.mount.add(c), m ? ie({
      field: m,
      disabled: p.disabled,
      name: c
    }) : le(c, !0, p.value), {
      ...L ? { disabled: p.disabled } : {},
      ...r.progressive ? {
        required: !!p.required,
        min: yr(p.min),
        max: yr(p.max),
        minLength: yr(p.minLength),
        maxLength: yr(p.maxLength),
        pattern: yr(p.pattern)
      } : {},
      name: c,
      onChange: ce,
      onBlur: ce,
      ref: (T) => {
        if (T) {
          ne(c, p), m = P(n, c);
          const D = Oe(T.value) && T.querySelectorAll && T.querySelectorAll("input,select,textarea")[0] || T, H = Uu(D), ge = m._f.refs || [];
          if (H ? ge.find((Se) => Se === D) : D === m._f.ref)
            return;
          pe(n, c, {
            _f: {
              ...m._f,
              ...H ? {
                refs: [
                  ...ge.filter(vn),
                  D,
                  ...Array.isArray(P(i, c)) ? [{}] : []
                ],
                ref: { type: D.type, name: c }
              } : { ref: D }
            }
          }), le(c, !1, void 0, D);
        } else
          m = P(n, c, {}), m._f && (m._f.mount = !1), (r.shouldUnregister || p.shouldUnregister) && !(zs(l.array, c) && o.action) && l.unMount.add(c);
      }
    };
  }, $e = () => r.shouldFocusError && Dr(n, Ne, l.mount), Le = (c) => {
    at(c) && (h.state.next({ disabled: c }), Dr(n, (p, m) => {
      let L = c;
      const T = P(n, m);
      T && at(T._f.disabled) && (L || (L = T._f.disabled)), p.disabled = L;
    }, 0, !1));
  }, Ie = (c, p) => async (m) => {
    m && (m.preventDefault && m.preventDefault(), m.persist && m.persist());
    let L = rt(s);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: T, values: D } = await G();
      a.errors = T, L = D;
    } else
      await M(n);
    Re(a.errors, "root"), Qe(a.errors) ? (h.state.next({
      errors: {}
    }), await c(L, m)) : (p && await p({ ...a.errors }, m), $e(), setTimeout($e)), h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Qe(a.errors),
      submitCount: a.submitCount + 1,
      errors: a.errors
    });
  }, de = (c, p = {}) => {
    P(n, c) && (Oe(p.defaultValue) ? we(c, P(i, c)) : (we(c, p.defaultValue), pe(i, c, p.defaultValue)), p.keepTouched || Re(a.touchedFields, c), p.keepDirty || (Re(a.dirtyFields, c), a.isDirty = p.defaultValue ? ee(c, P(i, c)) : ee()), p.keepError || (Re(a.errors, c), d.isValid && w()), h.state.next({ ...a }));
  }, Y = (c, p = {}) => {
    const m = c ? rt(c) : i, L = rt(m), T = c && !Qe(c) ? L : i;
    if (p.keepDefaultValues || (i = m), !p.keepValues) {
      if (p.keepDirtyValues || v)
        for (const D of l.mount)
          P(a.dirtyFields, D) ? pe(T, D, P(s, D)) : we(D, P(T, D));
      else {
        if (Xn && Oe(c))
          for (const D of l.mount) {
            const H = P(n, D);
            if (H && H._f) {
              const ge = Array.isArray(H._f.refs) ? H._f.refs[0] : H._f.ref;
              if (Ta(ge)) {
                const Se = ge.closest("form");
                if (Se) {
                  Se.reset();
                  break;
                }
              }
            }
          }
        n = {};
      }
      s = e.shouldUnregister ? p.keepDefaultValues ? rt(i) : {} : rt(T), h.array.next({
        values: { ...T }
      }), h.values.next({
        values: { ...T }
      });
    }
    l = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !o.mount && t(), o.mount = !d.isValid || !!p.keepIsValid, o.watch = !!e.shouldUnregister, h.state.next({
      submitCount: p.keepSubmitCount ? a.submitCount : 0,
      isDirty: p.keepDirty ? a.isDirty : !!(p.keepDefaultValues && !Wt(c, i)),
      isSubmitted: p.keepIsSubmitted ? a.isSubmitted : !1,
      dirtyFields: p.keepDirtyValues ? a.dirtyFields : p.keepDefaultValues && c ? gn(i, c) : {},
      touchedFields: p.keepTouched ? a.touchedFields : {},
      errors: p.keepErrors ? a.errors : {},
      isSubmitSuccessful: p.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, re = (c, p) => Y(Pt(c) ? c(s) : c, p);
  return {
    control: {
      register: ne,
      unregister: X,
      getFieldState: E,
      handleSubmit: Ie,
      setError: C,
      _executeSchema: G,
      _getWatch: se,
      _getDirty: ee,
      _updateValid: w,
      _removeUnmounted: W,
      _updateFieldArray: q,
      _updateDisabledField: ie,
      _getFieldArray: he,
      _reset: Y,
      _resetDefaultValues: () => Pt(r.defaultValues) && r.defaultValues().then((c) => {
        re(c, r.resetOptions), h.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (c) => {
        a = {
          ...a,
          ...c
        };
      },
      _disableForm: Le,
      _subjects: h,
      _proxyFormState: d,
      _setErrors: U,
      get _fields() {
        return n;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return o;
      },
      set _state(c) {
        o = c;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return l;
      },
      set _names(c) {
        l = c;
      },
      get _formState() {
        return a;
      },
      set _formState(c) {
        a = c;
      },
      get _options() {
        return r;
      },
      set _options(c) {
        r = {
          ...r,
          ...c
        };
      }
    },
    trigger: y,
    register: ne,
    handleSubmit: Ie,
    watch: F,
    setValue: we,
    getValues: _,
    reset: re,
    resetField: de,
    clearErrors: N,
    unregister: X,
    setError: C,
    setFocus: (c, p = {}) => {
      const m = P(n, c), L = m && m._f;
      if (L) {
        const T = L.refs ? L.refs[0] : L.ref;
        T.focus && (T.focus(), p.shouldSelect && T.select());
      }
    },
    getFieldState: E
  };
}
function Qu(e = {}) {
  const t = k.useRef(), r = k.useRef(), [a, n] = k.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Pt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: Pt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Ku(e, () => n((s) => ({ ...s }))),
    formState: a
  });
  const i = t.current.control;
  return i._options = e, Qn({
    subject: i._subjects.state,
    next: (s) => {
      Is(s, i._proxyFormState, i._updateFormState, !0) && n({ ...i._formState });
    }
  }), k.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), k.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const s = i._getDirty();
      s !== a.isDirty && i._subjects.state.next({
        isDirty: s
      });
    }
  }, [i, a.isDirty]), k.useEffect(() => {
    e.values && !Wt(e.values, r.current) ? (i._reset(e.values, i._options.resetOptions), r.current = e.values, n((s) => ({ ...s }))) : i._resetDefaultValues();
  }, [e.values, i]), k.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), k.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), t.current.formState = Ls(a, i), t.current;
}
const Ju = ({
  render: e,
  ...t
}) => /* @__PURE__ */ V(Fu, { ...t, render: ({
  field: r,
  fieldState: a,
  ...n
}) => {
  var i;
  return e({
    field: {
      ...r,
      error: (i = a.error) == null ? void 0 : i.message
    },
    fieldState: a,
    ...n
  });
} }), pp = Ju;
var qs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "triangle-exclamation", a = 512, n = 512, i = [9888, "exclamation-triangle", "warning"], s = "f071", o = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      a,
      n,
      i,
      s,
      o
    ]
  }, e.faTriangleExclamation = e.definition, e.prefix = t, e.iconName = r, e.width = a, e.height = n, e.ligatures = i, e.unicode = s, e.svgPathData = o, e.aliases = i;
})(qs);
const ec = ({
  helperText: e,
  label: t,
  error: r,
  children: a,
  ...n
}, i) => (e = r || e, /* @__PURE__ */ qe("div", { ref: i, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, t && {
  paddingTop: "1.5rem"
}], ...n, children: [
  a,
  t && /* @__PURE__ */ V("label", { css: [{
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
  e && /* @__PURE__ */ qe("div", { css: [{
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
    r && /* @__PURE__ */ V(wt, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: qs.faTriangleExclamation }),
    e
  ] })
] })), Fa = O.forwardRef(ec);
var Wi = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var a = P(r, t);
    e.setCustomValidity(a && a.message || ""), e.reportValidity();
  }
}, Gs = function(e, t) {
  var r = function(n) {
    var i = t.fields[n];
    i && i.ref && "reportValidity" in i.ref ? Wi(i.ref, n, e) : i.refs && i.refs.forEach(function(s) {
      return Wi(s, n, e);
    });
  };
  for (var a in t.fields)
    r(a);
}, tc = function(e, t) {
  t.shouldUseNativeValidation && Gs(e, t);
  var r = {};
  for (var a in e) {
    var n = P(t.fields, a), i = Object.assign(e[a] || {}, { ref: n && n.ref });
    if (ac(t.names || Object.keys(e), a)) {
      var s = Object.assign({}, rc(P(r, a)));
      pe(s, "root", i), pe(r, a, s);
    } else
      pe(r, a, i);
  }
  return r;
}, rc = function(e) {
  return Array.isArray(e) ? e.filter(Boolean) : [];
}, ac = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, nc = function(e, t) {
  for (var r = {}; e.length; ) {
    var a = e[0], n = a.code, i = a.message, s = a.path.join(".");
    if (!r[s])
      if ("unionErrors" in a) {
        var o = a.unionErrors[0].errors[0];
        r[s] = { message: o.message, type: o.code };
      } else
        r[s] = { message: i, type: n };
    if ("unionErrors" in a && a.unionErrors.forEach(function(f) {
      return f.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var l = r[s].types, u = l && l[a.code];
      r[s] = Fs(s, t, r, n, u ? [].concat(u, a.message) : a.message);
    }
    e.shift();
  }
  return r;
}, ic = function(e, t, r) {
  return r === void 0 && (r = {}), function(a, n, i) {
    try {
      return Promise.resolve(function(s, o) {
        try {
          var l = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](a, t)).then(function(u) {
            return i.shouldUseNativeValidation && Gs({}, i), { errors: {}, values: r.raw ? a : u };
          });
        } catch (u) {
          return o(u);
        }
        return l && l.then ? l.then(void 0, o) : l;
      }(0, function(s) {
        if (function(o) {
          return o.errors != null;
        }(s))
          return { values: {}, errors: tc(nc(s.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
};
const sc = ({
  schema: e,
  mode: t = "onChange",
  reValidateMode: r = "onChange",
  onValid: a,
  onInvalid: n,
  ...i
} = {}) => {
  const s = Qu({
    mode: t,
    reValidateMode: r,
    resolver: e ? ic(e) : void 0,
    ...i
  });
  return {
    onSubmit: s.handleSubmit((o, l) => a == null ? void 0 : a(o, l), n),
    submit: async () => new Promise((o, l) => {
      s.handleSubmit(async (f, d) => {
        try {
          await (a == null ? void 0 : a(f, d)), o(void 0);
        } catch (h) {
          l(h);
        }
      }, (f) => {
        l(f);
      })();
    }),
    ...s
  };
}, vp = ({
  onValid: e,
  context: t,
  mutation: r,
  defaultValues: a,
  schema: n,
  transformSendData: i,
  ...s
}) => {
  const o = sc({
    context: t,
    schema: n,
    defaultValues: a,
    onValid: async (l) => {
      await (e == null ? void 0 : e(l)), await (r == null ? void 0 : r.mutateAsync(i ? i(l) : l, {
        onError: (u, f) => {
          var d;
          (d = u.response) == null || d.data.errors.forEach((h) => {
            h.attribute in f ? o.setError(h.attribute, {
              message: h.msg
            }) : o.setError(`root.fields.${h.attribute}`, {
              type: "server",
              message: h.msg
            });
          });
        }
      }));
    },
    ...s
  });
  return o;
};
var Xs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "xmark", a = 384, n = 512, i = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], s = "f00d", o = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      a,
      n,
      i,
      s,
      o
    ]
  }, e.faXmark = e.definition, e.prefix = t, e.iconName = r, e.width = a, e.height = n, e.ligatures = i, e.unicode = s, e.svgPathData = o, e.aliases = i;
})(Xs);
var $a = { exports: {} }, Ks = {};
function Qs(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number")
    a += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Qs(e[t])) && (a && (a += " "), a += r);
    else
      for (t in e)
        e[t] && (a && (a += " "), a += t);
  return a;
}
function Fi() {
  for (var e, t, r = 0, a = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Qs(e)) && (a && (a += " "), a += t);
  return a;
}
const oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Fi,
  default: Fi
}, Symbol.toStringTag, { value: "Module" })), lc = /* @__PURE__ */ vl(oc);
var ke = {}, vt = {};
Object.defineProperty(vt, "__esModule", {
  value: !0
});
vt.dontSetMe = hc;
vt.findInArray = uc;
vt.int = dc;
vt.isFunction = cc;
vt.isNum = fc;
function uc(e, t) {
  for (var r = 0, a = e.length; r < a; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function cc(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function fc(e) {
  return typeof e == "number" && !isNaN(e);
}
function dc(e) {
  return parseInt(e, 10);
}
function hc(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var Yt = {};
Object.defineProperty(Yt, "__esModule", {
  value: !0
});
Yt.browserPrefixToKey = eo;
Yt.browserPrefixToStyle = pc;
Yt.default = void 0;
Yt.getPrefix = Js;
var yn = ["Moz", "Webkit", "O", "ms"];
function Js() {
  var e, t, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var a = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!a || r in a)
    return "";
  for (var n = 0; n < yn.length; n++)
    if (eo(r, yn[n]) in a)
      return yn[n];
  return "";
}
function eo(e, t) {
  return t ? "".concat(t).concat(vc(e)) : e;
}
function pc(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function vc(e) {
  for (var t = "", r = !0, a = 0; a < e.length; a++)
    r ? (t += e[a].toUpperCase(), r = !1) : e[a] === "-" ? r = !0 : t += e[a];
  return t;
}
var gc = Js();
Yt.default = gc;
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.addClassName = io;
ke.addEvent = bc;
ke.addUserSelectStyles = Nc;
ke.createCSSTransform = kc;
ke.createSVGTransform = Tc;
ke.getTouch = Ec;
ke.getTouchIdentifier = Cc;
ke.getTranslation = ri;
ke.innerHeight = Sc;
ke.innerWidth = Dc;
ke.matchesSelector = no;
ke.matchesSelectorAndParentsTo = yc;
ke.offsetXYFromParent = Oc;
ke.outerHeight = _c;
ke.outerWidth = xc;
ke.removeClassName = so;
ke.removeEvent = wc;
ke.removeUserSelectStyles = Pc;
var Ge = vt, $i = mc(Yt);
function to(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (to = function(n) {
    return n ? r : t;
  })(e);
}
function mc(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || Mn(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = to(t);
  if (r && r.has(e))
    return r.get(e);
  var a = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = n ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(a, i, s) : a[i] = e[i];
    }
  return a.default = e, r && r.set(e, a), a;
}
function Bi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function ro(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bi(Object(r), !0).forEach(function(a) {
      ao(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bi(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function ao(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var sa = "";
function no(e, t) {
  return sa || (sa = (0, Ge.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, Ge.isFunction)(e[r]);
  })), (0, Ge.isFunction)(e[sa]) ? e[sa](t) : !1;
}
function yc(e, t, r) {
  var a = e;
  do {
    if (no(a, t))
      return !0;
    if (a === r)
      return !1;
    a = a.parentNode;
  } while (a);
  return !1;
}
function bc(e, t, r, a) {
  if (e) {
    var n = ro({
      capture: !0
    }, a);
    e.addEventListener ? e.addEventListener(t, r, n) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
  }
}
function wc(e, t, r, a) {
  if (e) {
    var n = ro({
      capture: !0
    }, a);
    e.removeEventListener ? e.removeEventListener(t, r, n) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
  }
}
function _c(e) {
  var t = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Ge.int)(r.borderTopWidth), t += (0, Ge.int)(r.borderBottomWidth), t;
}
function xc(e) {
  var t = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Ge.int)(r.borderLeftWidth), t += (0, Ge.int)(r.borderRightWidth), t;
}
function Sc(e) {
  var t = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Ge.int)(r.paddingTop), t -= (0, Ge.int)(r.paddingBottom), t;
}
function Dc(e) {
  var t = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Ge.int)(r.paddingLeft), t -= (0, Ge.int)(r.paddingRight), t;
}
function Oc(e, t, r) {
  var a = t === t.ownerDocument.body, n = a ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - n.left) / r, s = (e.clientY + t.scrollTop - n.top) / r;
  return {
    x: i,
    y: s
  };
}
function kc(e, t) {
  var r = ri(e, t, "px");
  return ao({}, (0, $i.browserPrefixToKey)("transform", $i.default), r);
}
function Tc(e, t) {
  var r = ri(e, t, "");
  return r;
}
function ri(e, t, r) {
  var a = e.x, n = e.y, i = "translate(".concat(a).concat(r, ",").concat(n).concat(r, ")");
  if (t) {
    var s = "".concat(typeof t.x == "string" ? t.x : t.x + r), o = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    i = "translate(".concat(s, ", ").concat(o, ")") + i;
  }
  return i;
}
function Ec(e, t) {
  return e.targetTouches && (0, Ge.findInArray)(e.targetTouches, function(r) {
    return t === r.identifier;
  }) || e.changedTouches && (0, Ge.findInArray)(e.changedTouches, function(r) {
    return t === r.identifier;
  });
}
function Cc(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Nc(e) {
  if (e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && io(e.body, "react-draggable-transparent-selection");
  }
}
function Pc(e) {
  if (e)
    try {
      if (e.body && so(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function io(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function so(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var gt = {};
Object.defineProperty(gt, "__esModule", {
  value: !0
});
gt.canDragX = Mc;
gt.canDragY = zc;
gt.createCoreData = Ic;
gt.createDraggableData = jc;
gt.getBoundPosition = Rc;
gt.getControlPosition = Lc;
gt.snapToGrid = Ac;
var Ye = vt, nr = ke;
function Rc(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  var a = e.props.bounds;
  a = typeof a == "string" ? a : Vc(a);
  var n = ai(e);
  if (typeof a == "string") {
    var i = n.ownerDocument, s = i.defaultView, o;
    if (a === "parent" ? o = n.parentNode : o = i.querySelector(a), !(o instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + a + '" could not find an element.');
    var l = o, u = s.getComputedStyle(n), f = s.getComputedStyle(l);
    a = {
      left: -n.offsetLeft + (0, Ye.int)(f.paddingLeft) + (0, Ye.int)(u.marginLeft),
      top: -n.offsetTop + (0, Ye.int)(f.paddingTop) + (0, Ye.int)(u.marginTop),
      right: (0, nr.innerWidth)(l) - (0, nr.outerWidth)(n) - n.offsetLeft + (0, Ye.int)(f.paddingRight) - (0, Ye.int)(u.marginRight),
      bottom: (0, nr.innerHeight)(l) - (0, nr.outerHeight)(n) - n.offsetTop + (0, Ye.int)(f.paddingBottom) - (0, Ye.int)(u.marginBottom)
    };
  }
  return (0, Ye.isNum)(a.right) && (t = Math.min(t, a.right)), (0, Ye.isNum)(a.bottom) && (r = Math.min(r, a.bottom)), (0, Ye.isNum)(a.left) && (t = Math.max(t, a.left)), (0, Ye.isNum)(a.top) && (r = Math.max(r, a.top)), [t, r];
}
function Ac(e, t, r) {
  var a = Math.round(t / e[0]) * e[0], n = Math.round(r / e[1]) * e[1];
  return [a, n];
}
function Mc(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function zc(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Lc(e, t, r) {
  var a = typeof t == "number" ? (0, nr.getTouch)(e, t) : null;
  if (typeof t == "number" && !a)
    return null;
  var n = ai(r), i = r.props.offsetParent || n.offsetParent || n.ownerDocument.body;
  return (0, nr.offsetXYFromParent)(a || e, i, r.props.scale);
}
function Ic(e, t, r) {
  var a = e.state, n = !(0, Ye.isNum)(a.lastX), i = ai(e);
  return n ? {
    node: i,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: i,
    deltaX: t - a.lastX,
    deltaY: r - a.lastY,
    lastX: a.lastX,
    lastY: a.lastY,
    x: t,
    y: r
  };
}
function jc(e, t) {
  var r = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / r,
    y: e.state.y + t.deltaY / r,
    deltaX: t.deltaX / r,
    deltaY: t.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Vc(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function ai(e) {
  var t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Ba = {}, Ha = {};
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
Ha.default = Wc;
function Wc() {
}
function Pa(e) {
  "@babel/helpers - typeof";
  return Pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pa(e);
}
Object.defineProperty(Ba, "__esModule", {
  value: !0
});
Ba.default = void 0;
var bn = $c(O), Ze = ni(Ss), Fc = ni(ys), Ae = ke, Tt = gt, wn = vt, br = ni(Ha);
function ni(e) {
  return e && e.__esModule ? e : { default: e };
}
function oo(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (oo = function(n) {
    return n ? r : t;
  })(e);
}
function $c(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || Pa(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = oo(t);
  if (r && r.has(e))
    return r.get(e);
  var a = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = n ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(a, i, s) : a[i] = e[i];
    }
  return a.default = e, r && r.set(e, a), a;
}
function Hi(e, t) {
  return Zc(e) || Uc(e, t) || Hc(e, t) || Bc();
}
function Bc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hc(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ui(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ui(e, t);
  }
}
function Ui(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function Uc(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a = [], n = !0, i = !1, s, o;
    try {
      for (r = r.call(e); !(n = (s = r.next()).done) && (a.push(s.value), !(t && a.length === t)); n = !0)
        ;
    } catch (l) {
      i = !0, o = l;
    } finally {
      try {
        !n && r.return != null && r.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return a;
  }
}
function Zc(e) {
  if (Array.isArray(e))
    return e;
}
function Yc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function qc(e, t, r) {
  return t && Zi(e.prototype, t), r && Zi(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Gc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zn(e, t);
}
function zn(e, t) {
  return zn = Object.setPrototypeOf || function(a, n) {
    return a.__proto__ = n, a;
  }, zn(e, t);
}
function Xc(e) {
  var t = Qc();
  return function() {
    var a = Ra(e), n;
    if (t) {
      var i = Ra(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return Kc(this, n);
  };
}
function Kc(e, t) {
  if (t && (Pa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Me(e);
}
function Me(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ra(e) {
  return Ra = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ra(e);
}
function Xe(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var tt = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
}, Et = tt.mouse, Ua = /* @__PURE__ */ function(e) {
  Gc(r, e);
  var t = Xc(r);
  function r() {
    var a;
    Yc(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), Xe(Me(a), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), Xe(Me(a), "mounted", !1), Xe(Me(a), "handleDragStart", function(o) {
      if (a.props.onMouseDown(o), !a.props.allowAnyClick && typeof o.button == "number" && o.button !== 0)
        return !1;
      var l = a.findDOMNode();
      if (!l || !l.ownerDocument || !l.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var u = l.ownerDocument;
      if (!(a.props.disabled || !(o.target instanceof u.defaultView.Node) || a.props.handle && !(0, Ae.matchesSelectorAndParentsTo)(o.target, a.props.handle, l) || a.props.cancel && (0, Ae.matchesSelectorAndParentsTo)(o.target, a.props.cancel, l))) {
        o.type === "touchstart" && o.preventDefault();
        var f = (0, Ae.getTouchIdentifier)(o);
        a.setState({
          touchIdentifier: f
        });
        var d = (0, Tt.getControlPosition)(o, f, Me(a));
        if (d != null) {
          var h = d.x, v = d.y, g = (0, Tt.createCoreData)(Me(a), h, v);
          (0, br.default)("DraggableCore: handleDragStart: %j", g), (0, br.default)("calling", a.props.onStart);
          var S = a.props.onStart(o, g);
          S === !1 || a.mounted === !1 || (a.props.enableUserSelectHack && (0, Ae.addUserSelectStyles)(u), a.setState({
            dragging: !0,
            lastX: h,
            lastY: v
          }), (0, Ae.addEvent)(u, Et.move, a.handleDrag), (0, Ae.addEvent)(u, Et.stop, a.handleDragStop));
        }
      }
    }), Xe(Me(a), "handleDrag", function(o) {
      var l = (0, Tt.getControlPosition)(o, a.state.touchIdentifier, Me(a));
      if (l != null) {
        var u = l.x, f = l.y;
        if (Array.isArray(a.props.grid)) {
          var d = u - a.state.lastX, h = f - a.state.lastY, v = (0, Tt.snapToGrid)(a.props.grid, d, h), g = Hi(v, 2);
          if (d = g[0], h = g[1], !d && !h)
            return;
          u = a.state.lastX + d, f = a.state.lastY + h;
        }
        var S = (0, Tt.createCoreData)(Me(a), u, f);
        (0, br.default)("DraggableCore: handleDrag: %j", S);
        var A = a.props.onDrag(o, S);
        if (A === !1 || a.mounted === !1) {
          try {
            a.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var j = document.createEvent("MouseEvents");
            j.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.handleDragStop(j);
          }
          return;
        }
        a.setState({
          lastX: u,
          lastY: f
        });
      }
    }), Xe(Me(a), "handleDragStop", function(o) {
      if (a.state.dragging) {
        var l = (0, Tt.getControlPosition)(o, a.state.touchIdentifier, Me(a));
        if (l != null) {
          var u = l.x, f = l.y;
          if (Array.isArray(a.props.grid)) {
            var d = u - a.state.lastX || 0, h = f - a.state.lastY || 0, v = (0, Tt.snapToGrid)(a.props.grid, d, h), g = Hi(v, 2);
            d = g[0], h = g[1], u = a.state.lastX + d, f = a.state.lastY + h;
          }
          var S = (0, Tt.createCoreData)(Me(a), u, f), A = a.props.onStop(o, S);
          if (A === !1 || a.mounted === !1)
            return !1;
          var j = a.findDOMNode();
          j && a.props.enableUserSelectHack && (0, Ae.removeUserSelectStyles)(j.ownerDocument), (0, br.default)("DraggableCore: handleDragStop: %j", S), a.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), j && ((0, br.default)("DraggableCore: Removing handlers"), (0, Ae.removeEvent)(j.ownerDocument, Et.move, a.handleDrag), (0, Ae.removeEvent)(j.ownerDocument, Et.stop, a.handleDragStop));
        }
      }
    }), Xe(Me(a), "onMouseDown", function(o) {
      return Et = tt.mouse, a.handleDragStart(o);
    }), Xe(Me(a), "onMouseUp", function(o) {
      return Et = tt.mouse, a.handleDragStop(o);
    }), Xe(Me(a), "onTouchStart", function(o) {
      return Et = tt.touch, a.handleDragStart(o);
    }), Xe(Me(a), "onTouchEnd", function(o) {
      return Et = tt.touch, a.handleDragStop(o);
    }), a;
  }
  return qc(r, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var n = this.findDOMNode();
      n && (0, Ae.addEvent)(n, tt.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var n = this.findDOMNode();
      if (n) {
        var i = n.ownerDocument;
        (0, Ae.removeEvent)(i, tt.mouse.move, this.handleDrag), (0, Ae.removeEvent)(i, tt.touch.move, this.handleDrag), (0, Ae.removeEvent)(i, tt.mouse.stop, this.handleDragStop), (0, Ae.removeEvent)(i, tt.touch.stop, this.handleDragStop), (0, Ae.removeEvent)(n, tt.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, Ae.removeUserSelectStyles)(i);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var n, i, s;
      return (n = this.props) !== null && n !== void 0 && n.nodeRef ? (i = this.props) === null || i === void 0 || (s = i.nodeRef) === null || s === void 0 ? void 0 : s.current : Fc.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ bn.cloneElement(bn.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]), r;
}(bn.Component);
Ba.default = Ua;
Xe(Ua, "displayName", "DraggableCore");
Xe(Ua, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Ze.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Ze.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Ze.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(t, r) {
    if (t[r] && t[r].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: Ze.default.arrayOf(Ze.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: Ze.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: Ze.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: Ze.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Ze.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Ze.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Ze.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Ze.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Ze.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: wn.dontSetMe,
  style: wn.dontSetMe,
  transform: wn.dontSetMe
});
Xe(Ua, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  function t(y) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(_) {
      return typeof _;
    } : function(_) {
      return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _;
    }, t(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  }), e.default = void 0;
  var r = g(O), a = h(Ss), n = h(ys), i = h(lc), s = ke, o = gt, l = vt, u = h(Ba), f = h(Ha), d = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function h(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function v(y) {
    if (typeof WeakMap != "function")
      return null;
    var _ = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap();
    return (v = function(C) {
      return C ? E : _;
    })(y);
  }
  function g(y, _) {
    if (!_ && y && y.__esModule)
      return y;
    if (y === null || t(y) !== "object" && typeof y != "function")
      return { default: y };
    var E = v(_);
    if (E && E.has(y))
      return E.get(y);
    var N = {}, C = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var F in y)
      if (F !== "default" && Object.prototype.hasOwnProperty.call(y, F)) {
        var X = C ? Object.getOwnPropertyDescriptor(y, F) : null;
        X && (X.get || X.set) ? Object.defineProperty(N, F, X) : N[F] = y[F];
      }
    return N.default = y, E && E.set(y, N), N;
  }
  function S() {
    return S = Object.assign || function(y) {
      for (var _ = 1; _ < arguments.length; _++) {
        var E = arguments[_];
        for (var N in E)
          Object.prototype.hasOwnProperty.call(E, N) && (y[N] = E[N]);
      }
      return y;
    }, S.apply(this, arguments);
  }
  function A(y, _) {
    if (y == null)
      return {};
    var E = j(y, _), N, C;
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(y);
      for (C = 0; C < F.length; C++)
        N = F[C], !(_.indexOf(N) >= 0) && Object.prototype.propertyIsEnumerable.call(y, N) && (E[N] = y[N]);
    }
    return E;
  }
  function j(y, _) {
    if (y == null)
      return {};
    var E = {}, N = Object.keys(y), C, F;
    for (F = 0; F < N.length; F++)
      C = N[F], !(_.indexOf(C) >= 0) && (E[C] = y[C]);
    return E;
  }
  function w(y, _) {
    var E = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(y);
      _ && (N = N.filter(function(C) {
        return Object.getOwnPropertyDescriptor(y, C).enumerable;
      })), E.push.apply(E, N);
    }
    return E;
  }
  function R(y) {
    for (var _ = 1; _ < arguments.length; _++) {
      var E = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? w(Object(E), !0).forEach(function(N) {
        ce(y, N, E[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(E)) : w(Object(E)).forEach(function(N) {
        Object.defineProperty(y, N, Object.getOwnPropertyDescriptor(E, N));
      });
    }
    return y;
  }
  function q(y, _) {
    return ae(y) || J(y, _) || U(y, _) || B();
  }
  function B() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function U(y, _) {
    if (y) {
      if (typeof y == "string")
        return le(y, _);
      var E = Object.prototype.toString.call(y).slice(8, -1);
      if (E === "Object" && y.constructor && (E = y.constructor.name), E === "Map" || E === "Set")
        return Array.from(y);
      if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))
        return le(y, _);
    }
  }
  function le(y, _) {
    (_ == null || _ > y.length) && (_ = y.length);
    for (var E = 0, N = new Array(_); E < _; E++)
      N[E] = y[E];
    return N;
  }
  function J(y, _) {
    var E = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (E != null) {
      var N = [], C = !0, F = !1, X, ie;
      try {
        for (E = E.call(y); !(C = (X = E.next()).done) && (N.push(X.value), !(_ && N.length === _)); C = !0)
          ;
      } catch (ne) {
        F = !0, ie = ne;
      } finally {
        try {
          !C && E.return != null && E.return();
        } finally {
          if (F)
            throw ie;
        }
      }
      return N;
    }
  }
  function ae(y) {
    if (Array.isArray(y))
      return y;
  }
  function G(y, _) {
    if (!(y instanceof _))
      throw new TypeError("Cannot call a class as a function");
  }
  function ue(y, _) {
    for (var E = 0; E < _.length; E++) {
      var N = _[E];
      N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(y, N.key, N);
    }
  }
  function M(y, _, E) {
    return _ && ue(y.prototype, _), E && ue(y, E), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function W(y, _) {
    if (typeof _ != "function" && _ !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(_ && _.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), _ && ee(y, _);
  }
  function ee(y, _) {
    return ee = Object.setPrototypeOf || function(N, C) {
      return N.__proto__ = C, N;
    }, ee(y, _);
  }
  function se(y) {
    var _ = Fe();
    return function() {
      var N = we(y), C;
      if (_) {
        var F = we(this).constructor;
        C = Reflect.construct(N, arguments, F);
      } else
        C = N.apply(this, arguments);
      return he(this, C);
    };
  }
  function he(y, _) {
    if (_ && (t(_) === "object" || typeof _ == "function"))
      return _;
    if (_ !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return ve(y);
  }
  function ve(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function Fe() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function we(y) {
    return we = Object.setPrototypeOf ? Object.getPrototypeOf : function(E) {
      return E.__proto__ || Object.getPrototypeOf(E);
    }, we(y);
  }
  function ce(y, _, E) {
    return _ in y ? Object.defineProperty(y, _, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : y[_] = E, y;
  }
  var Ne = /* @__PURE__ */ function(y) {
    W(E, y);
    var _ = se(E);
    function E(N) {
      var C;
      return G(this, E), C = _.call(this, N), ce(ve(C), "onDragStart", function(F, X) {
        (0, f.default)("Draggable: onDragStart: %j", X);
        var ie = C.props.onStart(F, (0, o.createDraggableData)(ve(C), X));
        if (ie === !1)
          return !1;
        C.setState({
          dragging: !0,
          dragged: !0
        });
      }), ce(ve(C), "onDrag", function(F, X) {
        if (!C.state.dragging)
          return !1;
        (0, f.default)("Draggable: onDrag: %j", X);
        var ie = (0, o.createDraggableData)(ve(C), X), ne = {
          x: ie.x,
          y: ie.y
        };
        if (C.props.bounds) {
          var $e = ne.x, Le = ne.y;
          ne.x += C.state.slackX, ne.y += C.state.slackY;
          var Ie = (0, o.getBoundPosition)(ve(C), ne.x, ne.y), de = q(Ie, 2), Y = de[0], re = de[1];
          ne.x = Y, ne.y = re, ne.slackX = C.state.slackX + ($e - ne.x), ne.slackY = C.state.slackY + (Le - ne.y), ie.x = ne.x, ie.y = ne.y, ie.deltaX = ne.x - C.state.x, ie.deltaY = ne.y - C.state.y;
        }
        var Be = C.props.onDrag(F, ie);
        if (Be === !1)
          return !1;
        C.setState(ne);
      }), ce(ve(C), "onDragStop", function(F, X) {
        if (!C.state.dragging)
          return !1;
        var ie = C.props.onStop(F, (0, o.createDraggableData)(ve(C), X));
        if (ie === !1)
          return !1;
        (0, f.default)("Draggable: onDragStop: %j", X);
        var ne = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, $e = !!C.props.position;
        if ($e) {
          var Le = C.props.position, Ie = Le.x, de = Le.y;
          ne.x = Ie, ne.y = de;
        }
        C.setState(ne);
      }), C.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: N.position ? N.position.x : N.defaultPosition.x,
        y: N.position ? N.position.y : N.defaultPosition.y,
        prevPropsPosition: R({}, N.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, N.position && !(N.onDrag || N.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), C;
    }
    return M(E, [{
      key: "componentDidMount",
      value: function() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
    }, {
      key: "findDOMNode",
      value: function() {
        var C, F, X;
        return (C = (F = this.props) === null || F === void 0 || (X = F.nodeRef) === null || X === void 0 ? void 0 : X.current) !== null && C !== void 0 ? C : n.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var C, F = this.props;
        F.axis, F.bounds;
        var X = F.children, ie = F.defaultPosition, ne = F.defaultClassName, $e = F.defaultClassNameDragging, Le = F.defaultClassNameDragged, Ie = F.position, de = F.positionOffset;
        F.scale;
        var Y = A(F, d), re = {}, Be = null, It = !!Ie, Dt = !It || this.state.dragging, c = Ie || ie, p = {
          // Set left if horizontal drag is enabled
          x: (0, o.canDragX)(this) && Dt ? this.state.x : c.x,
          // Set top if vertical drag is enabled
          y: (0, o.canDragY)(this) && Dt ? this.state.y : c.y
        };
        this.state.isElementSVG ? Be = (0, s.createSVGTransform)(p, de) : re = (0, s.createCSSTransform)(p, de);
        var m = (0, i.default)(X.props.className || "", ne, (C = {}, ce(C, $e, this.state.dragging), ce(C, Le, this.state.dragged), C));
        return /* @__PURE__ */ r.createElement(u.default, S({}, Y, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only(X), {
          className: m,
          style: R(R({}, X.props.style), re),
          transform: Be
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(C, F) {
          var X = C.position, ie = F.prevPropsPosition;
          return X && (!ie || X.x !== ie.x || X.y !== ie.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
            position: X,
            prevPropsPosition: ie
          }), {
            x: X.x,
            y: X.y,
            prevPropsPosition: R({}, X)
          }) : null;
        }
      )
    }]), E;
  }(r.Component);
  e.default = Ne, ce(Ne, "displayName", "Draggable"), ce(Ne, "propTypes", R(R({}, u.default.propTypes), {}, {
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: a.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: a.default.oneOfType([a.default.shape({
      left: a.default.number,
      right: a.default.number,
      top: a.default.number,
      bottom: a.default.number
    }), a.default.string, a.default.oneOf([!1])]),
    defaultClassName: a.default.string,
    defaultClassNameDragging: a.default.string,
    defaultClassNameDragged: a.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: a.default.shape({
      x: a.default.number,
      y: a.default.number
    }),
    positionOffset: a.default.shape({
      x: a.default.oneOfType([a.default.number, a.default.string]),
      y: a.default.oneOfType([a.default.number, a.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: a.default.shape({
      x: a.default.number,
      y: a.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  })), ce(Ne, "defaultProps", R(R({}, u.default.defaultProps), {}, {
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  }));
})(Ks);
var lo = Ks, uo = lo.default, Jc = lo.DraggableCore;
$a.exports = uo;
$a.exports.default = uo;
$a.exports.DraggableCore = Jc;
var ef = $a.exports;
const tf = /* @__PURE__ */ ja(ef);
var rf = globalThis && globalThis.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, n) {
      a.__proto__ = n;
    } || function(a, n) {
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (a[i] = n[i]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function a() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
  };
}(), Aa = globalThis && globalThis.__assign || function() {
  return Aa = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Aa.apply(this, arguments);
}, af = {
  top: {
    width: "100%",
    height: "10px",
    top: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  right: {
    width: "10px",
    height: "100%",
    top: "0px",
    right: "-5px",
    cursor: "col-resize"
  },
  bottom: {
    width: "100%",
    height: "10px",
    bottom: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  left: {
    width: "10px",
    height: "100%",
    top: "0px",
    left: "-5px",
    cursor: "col-resize"
  },
  topRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    top: "-10px",
    cursor: "ne-resize"
  },
  bottomRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    bottom: "-10px",
    cursor: "se-resize"
  },
  bottomLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    bottom: "-10px",
    cursor: "sw-resize"
  },
  topLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    top: "-10px",
    cursor: "nw-resize"
  }
}, nf = (
  /** @class */
  function(e) {
    rf(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.onMouseDown = function(a) {
        r.props.onResizeStart(a, r.props.direction);
      }, r.onTouchStart = function(a) {
        r.props.onResizeStart(a, r.props.direction);
      }, r;
    }
    return t.prototype.render = function() {
      return O.createElement("div", { className: this.props.className || "", style: Aa(Aa({ position: "absolute", userSelect: "none" }, af[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, t;
  }(O.PureComponent)
), ii = { exports: {} };
function sf(e, t) {
  var r = t && t.cache ? t.cache : df, a = t && t.serializer ? t.serializer : ff, n = t && t.strategy ? t.strategy : lf;
  return n(e, {
    cache: r,
    serializer: a
  });
}
function of(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function co(e, t, r, a) {
  var n = of(a) ? a : r(a), i = t.get(n);
  return typeof i > "u" && (i = e.call(this, a), t.set(n, i)), i;
}
function fo(e, t, r) {
  var a = Array.prototype.slice.call(arguments, 3), n = r(a), i = t.get(n);
  return typeof i > "u" && (i = e.apply(this, a), t.set(n, i)), i;
}
function si(e, t, r, a, n) {
  return r.bind(
    t,
    e,
    a,
    n
  );
}
function lf(e, t) {
  var r = e.length === 1 ? co : fo;
  return si(
    e,
    this,
    r,
    t.cache.create(),
    t.serializer
  );
}
function uf(e, t) {
  var r = fo;
  return si(
    e,
    this,
    r,
    t.cache.create(),
    t.serializer
  );
}
function cf(e, t) {
  var r = co;
  return si(
    e,
    this,
    r,
    t.cache.create(),
    t.serializer
  );
}
function ff() {
  return JSON.stringify(arguments);
}
function Za() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Za.prototype.has = function(e) {
  return e in this.cache;
};
Za.prototype.get = function(e) {
  return this.cache[e];
};
Za.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var df = {
  create: function() {
    return new Za();
  }
};
ii.exports = sf;
ii.exports.strategies = {
  variadic: uf,
  monadic: cf
};
var hf = ii.exports;
const qt = /* @__PURE__ */ ja(hf);
var pf = globalThis && globalThis.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, n) {
      a.__proto__ = n;
    } || function(a, n) {
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (a[i] = n[i]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function a() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (a.prototype = r.prototype, new a());
  };
}(), ft = globalThis && globalThis.__assign || function() {
  return ft = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ft.apply(this, arguments);
}, vf = {
  width: "auto",
  height: "auto"
}, oa = qt(function(e, t, r) {
  return Math.max(Math.min(e, r), t);
}), Yi = qt(function(e, t) {
  return Math.round(e / t) * t;
}), er = qt(function(e, t) {
  return new RegExp(e, "i").test(t);
}), la = function(e) {
  return !!(e.touches && e.touches.length);
}, gf = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, qi = qt(function(e, t, r) {
  r === void 0 && (r = 0);
  var a = t.reduce(function(i, s, o) {
    return Math.abs(s - e) < Math.abs(t[i] - e) ? o : i;
  }, 0), n = Math.abs(t[a] - e);
  return r === 0 || n < r ? t[a] : e;
}), Pe = qt(function(e, t) {
  return e.substr(e.length - t.length, t.length) === t;
}), _n = qt(function(e) {
  return e = e.toString(), e === "auto" || Pe(e, "px") || Pe(e, "%") || Pe(e, "vh") || Pe(e, "vw") || Pe(e, "vmax") || Pe(e, "vmin") ? e : e + "px";
}), ua = function(e, t, r, a) {
  if (e && typeof e == "string") {
    if (Pe(e, "px"))
      return Number(e.replace("px", ""));
    if (Pe(e, "%")) {
      var n = Number(e.replace("%", "")) / 100;
      return t * n;
    }
    if (Pe(e, "vw")) {
      var n = Number(e.replace("vw", "")) / 100;
      return r * n;
    }
    if (Pe(e, "vh")) {
      var n = Number(e.replace("vh", "")) / 100;
      return a * n;
    }
  }
  return e;
}, mf = qt(function(e, t, r, a, n, i, s) {
  return a = ua(a, e.width, t, r), n = ua(n, e.height, t, r), i = ua(i, e.width, t, r), s = ua(s, e.height, t, r), {
    maxWidth: typeof a > "u" ? void 0 : Number(a),
    maxHeight: typeof n > "u" ? void 0 : Number(n),
    minWidth: typeof i > "u" ? void 0 : Number(i),
    minHeight: typeof s > "u" ? void 0 : Number(s)
  };
}), yf = [
  "as",
  "style",
  "className",
  "grid",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
], Gi = "__resizable_base__", bf = (
  /** @class */
  function(e) {
    pf(t, e);
    function t(r) {
      var a = e.call(this, r) || this;
      return a.ratio = 1, a.resizable = null, a.parentLeft = 0, a.parentTop = 0, a.resizableLeft = 0, a.resizableRight = 0, a.resizableTop = 0, a.resizableBottom = 0, a.targetLeft = 0, a.targetTop = 0, a.appendBase = function() {
        if (!a.resizable || !a.window)
          return null;
        var n = a.parentNode;
        if (!n)
          return null;
        var i = a.window.document.createElement("div");
        return i.style.width = "100%", i.style.height = "100%", i.style.position = "absolute", i.style.transform = "scale(0, 0)", i.style.left = "0", i.style.flex = "0 0 100%", i.classList ? i.classList.add(Gi) : i.className += Gi, n.appendChild(i), i;
      }, a.removeBase = function(n) {
        var i = a.parentNode;
        i && i.removeChild(n);
      }, a.ref = function(n) {
        n && (a.resizable = n);
      }, a.state = {
        isResizing: !1,
        width: typeof (a.propsSize && a.propsSize.width) > "u" ? "auto" : a.propsSize && a.propsSize.width,
        height: typeof (a.propsSize && a.propsSize.height) > "u" ? "auto" : a.propsSize && a.propsSize.height,
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, a.onResizeStart = a.onResizeStart.bind(a), a.onMouseMove = a.onMouseMove.bind(a), a.onMouseUp = a.onMouseUp.bind(a), a;
    }
    return Object.defineProperty(t.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || vf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
      get: function() {
        var r = 0, a = 0;
        if (this.resizable && this.window) {
          var n = this.resizable.offsetWidth, i = this.resizable.offsetHeight, s = this.resizable.style.position;
          s !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : n, a = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : i, this.resizable.style.position = s;
        }
        return { width: r, height: a };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "sizeStyle", {
      get: function() {
        var r = this, a = this.props.size, n = function(o) {
          if (typeof r.state[o] > "u" || r.state[o] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[o] && Pe(r.propsSize[o].toString(), "%")) {
            if (Pe(r.state[o].toString(), "%"))
              return r.state[o].toString();
            var l = r.getParentSize(), u = Number(r.state[o].toString().replace("px", "")), f = u / l[o] * 100;
            return f + "%";
          }
          return _n(r.state[o]);
        }, i = a && typeof a.width < "u" && !this.state.isResizing ? _n(a.width) : n("width"), s = a && typeof a.height < "u" && !this.state.isResizing ? _n(a.height) : n("height");
        return { width: i, height: s };
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var r = this.appendBase();
      if (!r)
        return { width: 0, height: 0 };
      var a = !1, n = this.parentNode.style.flexWrap;
      n !== "wrap" && (a = !0, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var i = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return a && (this.parentNode.style.flexWrap = n), this.removeBase(r), i;
    }, t.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, t.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, t.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var r = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0
        });
      }
    }, t.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, t.prototype.createSizeForCssProperty = function(r, a) {
      var n = this.propsSize && this.propsSize[a];
      return this.state[a] === "auto" && this.state.original[a] === r && (typeof n > "u" || n === "auto") ? "auto" : r;
    }, t.prototype.calculateNewMaxFromBoundary = function(r, a) {
      var n = this.props.boundsByDirection, i = this.state.direction, s = n && er("left", i), o = n && er("top", i), l, u;
      if (this.props.bounds === "parent") {
        var f = this.parentNode;
        f && (l = s ? this.resizableRight - this.parentLeft : f.offsetWidth + (this.parentLeft - this.resizableLeft), u = o ? this.resizableBottom - this.parentTop : f.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (l = s ? this.resizableRight : this.window.innerWidth - this.resizableLeft, u = o ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (l = s ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), u = o ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return l && Number.isFinite(l) && (r = r && r < l ? r : l), u && Number.isFinite(u) && (a = a && a < u ? a : u), { maxWidth: r, maxHeight: a };
    }, t.prototype.calculateNewSizeFromDirection = function(r, a) {
      var n = this.props.scale || 1, i = this.props.resizeRatio || 1, s = this.state, o = s.direction, l = s.original, u = this.props, f = u.lockAspectRatio, d = u.lockAspectRatioExtraHeight, h = u.lockAspectRatioExtraWidth, v = l.width, g = l.height, S = d || 0, A = h || 0;
      return er("right", o) && (v = l.width + (r - l.x) * i / n, f && (g = (v - A) / this.ratio + S)), er("left", o) && (v = l.width - (r - l.x) * i / n, f && (g = (v - A) / this.ratio + S)), er("bottom", o) && (g = l.height + (a - l.y) * i / n, f && (v = (g - S) * this.ratio + A)), er("top", o) && (g = l.height - (a - l.y) * i / n, f && (v = (g - S) * this.ratio + A)), { newWidth: v, newHeight: g };
    }, t.prototype.calculateNewSizeFromAspectRatio = function(r, a, n, i) {
      var s = this.props, o = s.lockAspectRatio, l = s.lockAspectRatioExtraHeight, u = s.lockAspectRatioExtraWidth, f = typeof i.width > "u" ? 10 : i.width, d = typeof n.width > "u" || n.width < 0 ? r : n.width, h = typeof i.height > "u" ? 10 : i.height, v = typeof n.height > "u" || n.height < 0 ? a : n.height, g = l || 0, S = u || 0;
      if (o) {
        var A = (h - g) * this.ratio + S, j = (v - g) * this.ratio + S, w = (f - S) / this.ratio + g, R = (d - S) / this.ratio + g, q = Math.max(f, A), B = Math.min(d, j), U = Math.max(h, w), le = Math.min(v, R);
        r = oa(r, q, B), a = oa(a, U, le);
      } else
        r = oa(r, f, d), a = oa(a, h, v);
      return { newWidth: r, newHeight: a };
    }, t.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var r = this.parentNode;
        if (r) {
          var a = r.getBoundingClientRect();
          this.parentLeft = a.left, this.parentTop = a.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var n = this.props.bounds.getBoundingClientRect();
        this.targetLeft = n.left, this.targetTop = n.top;
      }
      if (this.resizable) {
        var i = this.resizable.getBoundingClientRect(), s = i.left, o = i.top, l = i.right, u = i.bottom;
        this.resizableLeft = s, this.resizableRight = l, this.resizableTop = o, this.resizableBottom = u;
      }
    }, t.prototype.onResizeStart = function(r, a) {
      if (!(!this.resizable || !this.window)) {
        var n = 0, i = 0;
        if (r.nativeEvent && gf(r.nativeEvent) ? (n = r.nativeEvent.clientX, i = r.nativeEvent.clientY) : r.nativeEvent && la(r.nativeEvent) && (n = r.nativeEvent.touches[0].clientX, i = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var s = this.props.onResizeStart(r, a, this.resizable);
          if (s === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var o, l = this.window.getComputedStyle(this.resizable);
        if (l.flexBasis !== "auto") {
          var u = this.parentNode;
          if (u) {
            var f = this.window.getComputedStyle(u).flexDirection;
            this.flexDir = f.startsWith("row") ? "row" : "column", o = l.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var d = {
          original: {
            x: n,
            y: i,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: ft(ft({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: a,
          flexBasis: o
        };
        this.setState(d);
      }
    }, t.prototype.onMouseMove = function(r) {
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && la(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var a = this.props, n = a.maxWidth, i = a.maxHeight, s = a.minWidth, o = a.minHeight, l = la(r) ? r.touches[0].clientX : r.clientX, u = la(r) ? r.touches[0].clientY : r.clientY, f = this.state, d = f.direction, h = f.original, v = f.width, g = f.height, S = this.getParentSize(), A = mf(S, this.window.innerWidth, this.window.innerHeight, n, i, s, o);
        n = A.maxWidth, i = A.maxHeight, s = A.minWidth, o = A.minHeight;
        var j = this.calculateNewSizeFromDirection(l, u), w = j.newHeight, R = j.newWidth, q = this.calculateNewMaxFromBoundary(n, i);
        this.props.snap && this.props.snap.x && (R = qi(R, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (w = qi(w, this.props.snap.y, this.props.snapGap));
        var B = this.calculateNewSizeFromAspectRatio(R, w, { width: q.maxWidth, height: q.maxHeight }, { width: s, height: o });
        if (R = B.newWidth, w = B.newHeight, this.props.grid) {
          var U = Yi(R, this.props.grid[0]), le = Yi(w, this.props.grid[1]), J = this.props.snapGap || 0;
          R = J === 0 || Math.abs(U - R) <= J ? U : R, w = J === 0 || Math.abs(le - w) <= J ? le : w;
        }
        var ae = {
          width: R - h.width,
          height: w - h.height
        };
        if (v && typeof v == "string") {
          if (Pe(v, "%")) {
            var G = R / S.width * 100;
            R = G + "%";
          } else if (Pe(v, "vw")) {
            var ue = R / this.window.innerWidth * 100;
            R = ue + "vw";
          } else if (Pe(v, "vh")) {
            var M = R / this.window.innerHeight * 100;
            R = M + "vh";
          }
        }
        if (g && typeof g == "string") {
          if (Pe(g, "%")) {
            var G = w / S.height * 100;
            w = G + "%";
          } else if (Pe(g, "vw")) {
            var ue = w / this.window.innerWidth * 100;
            w = ue + "vw";
          } else if (Pe(g, "vh")) {
            var M = w / this.window.innerHeight * 100;
            w = M + "vh";
          }
        }
        var W = {
          width: this.createSizeForCssProperty(R, "width"),
          height: this.createSizeForCssProperty(w, "height")
        };
        this.flexDir === "row" ? W.flexBasis = W.width : this.flexDir === "column" && (W.flexBasis = W.height), this.setState(W), this.props.onResize && this.props.onResize(r, d, this.resizable, ae);
      }
    }, t.prototype.onMouseUp = function(r) {
      var a = this.state, n = a.isResizing, i = a.direction, s = a.original;
      if (!(!n || !this.resizable)) {
        var o = {
          width: this.size.width - s.width,
          height: this.size.height - s.height
        };
        this.props.onResizeStop && this.props.onResizeStop(r, i, this.resizable, o), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: ft(ft({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, t.prototype.updateSize = function(r) {
      this.setState({ width: r.width, height: r.height });
    }, t.prototype.renderResizer = function() {
      var r = this, a = this.props, n = a.enable, i = a.handleStyles, s = a.handleClasses, o = a.handleWrapperStyle, l = a.handleWrapperClass, u = a.handleComponent;
      if (!n)
        return null;
      var f = Object.keys(n).map(function(d) {
        return n[d] !== !1 ? O.createElement(nf, { key: d, direction: d, onResizeStart: r.onResizeStart, replaceStyles: i && i[d], className: s && s[d] }, u && u[d] ? u[d] : null) : null;
      });
      return O.createElement("div", { className: l, style: o }, f);
    }, t.prototype.render = function() {
      var r = this, a = Object.keys(this.props).reduce(function(s, o) {
        return yf.indexOf(o) !== -1 || (s[o] = r.props[o]), s;
      }, {}), n = ft(ft(ft({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (n.flexBasis = this.state.flexBasis);
      var i = this.props.as || "div";
      return O.createElement(
        i,
        ft({ ref: this.ref, style: n, className: this.props.className }, a),
        this.state.isResizing && O.createElement("div", { style: this.state.backgroundStyle }),
        this.props.children,
        this.renderResizer()
      );
    }, t.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        topRight: !0,
        bottomRight: !0,
        bottomLeft: !0,
        topLeft: !0
      },
      style: {},
      grid: [1, 1],
      lockAspectRatio: !1,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, t;
  }(O.PureComponent)
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Ln = function(e, t) {
  return Ln = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
    r.__proto__ = a;
  } || function(r, a) {
    for (var n in a)
      a.hasOwnProperty(n) && (r[n] = a[n]);
  }, Ln(e, t);
};
function wf(e, t) {
  Ln(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Ee = function() {
  return Ee = Object.assign || function(t) {
    for (var r, a = 1, n = arguments.length; a < n; a++) {
      r = arguments[a];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Ee.apply(this, arguments);
};
function _f(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}
var xf = tf, Sf = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, Df = function(e) {
  return {
    bottom: e,
    bottomLeft: e,
    bottomRight: e,
    left: e,
    right: e,
    top: e,
    topLeft: e,
    topRight: e
  };
}, gp = (
  /** @class */
  function(e) {
    wf(t, e);
    function t(r) {
      var a = e.call(this, r) || this;
      return a.resizingPosition = { x: 0, y: 0 }, a.offsetFromParent = { left: 0, top: 0 }, a.resizableElement = { current: null }, a.originalPosition = { x: 0, y: 0 }, a.refDraggable = function(n) {
        n && (a.draggable = n);
      }, a.refResizable = function(n) {
        n && (a.resizable = n, a.resizableElement.current = n.resizable);
      }, a.state = {
        resizing: !1,
        bounds: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        maxWidth: r.maxWidth,
        maxHeight: r.maxHeight
      }, a.onResizeStart = a.onResizeStart.bind(a), a.onResize = a.onResize.bind(a), a.onResizeStop = a.onResizeStop.bind(a), a.onDragStart = a.onDragStart.bind(a), a.onDrag = a.onDrag.bind(a), a.onDragStop = a.onDragStop.bind(a), a.getMaxSizesFromProps = a.getMaxSizesFromProps.bind(a), a;
    }
    return t.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var r = this.offsetFromParent, a = r.left, n = r.top, i = this.getDraggablePosition(), s = i.x, o = i.y;
      this.draggable.setState({
        x: s - a,
        y: o - n
      }), this.forceUpdate();
    }, t.prototype.getDraggablePosition = function() {
      var r = this.draggable.state, a = r.x, n = r.y;
      return { x: a, y: n };
    }, t.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, t.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, t.prototype.getMaxSizesFromProps = function() {
      var r = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, a = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: r, maxHeight: a };
    }, t.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, t.prototype.getOffsetHeight = function(r) {
      var a = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / a;
        case "body":
          return document.body.offsetHeight / a;
        default:
          return r.offsetHeight;
      }
    }, t.prototype.getOffsetWidth = function(r) {
      var a = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / a;
        case "body":
          return document.body.offsetWidth / a;
        default:
          return r.offsetWidth;
      }
    }, t.prototype.onDragStart = function(r, a) {
      this.props.onDragStart && this.props.onDragStart(r, a);
      var n = this.getDraggablePosition();
      if (this.originalPosition = n, !!this.props.bounds) {
        var i = this.getParent(), s = this.props.scale, o;
        if (this.props.bounds === "parent")
          o = i;
        else if (this.props.bounds === "body") {
          var l = i.getBoundingClientRect(), u = l.left, f = l.top, d = document.body.getBoundingClientRect(), h = -(u - i.offsetLeft * s - d.left) / s, v = -(f - i.offsetTop * s - d.top) / s, g = (document.body.offsetWidth - this.resizable.size.width * s) / s + h, S = (document.body.offsetHeight - this.resizable.size.height * s) / s + v;
          return this.setState({ bounds: { top: v, right: g, bottom: S, left: h } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var A = i.getBoundingClientRect(), j = A.left, w = A.top, R = -(j - i.offsetLeft * s) / s, q = -(w - i.offsetTop * s) / s, g = (window.innerWidth - this.resizable.size.width * s) / s + R, S = (window.innerHeight - this.resizable.size.height * s) / s + q;
          return this.setState({ bounds: { top: q, right: g, bottom: S, left: R } });
        } else
          typeof this.props.bounds == "string" ? o = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (o = this.props.bounds);
        if (!(!(o instanceof HTMLElement) || !(i instanceof HTMLElement))) {
          var B = o.getBoundingClientRect(), U = B.left, le = B.top, J = i.getBoundingClientRect(), ae = J.left, G = J.top, ue = (U - ae) / s, M = le - G;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var W = this.offsetFromParent;
            this.setState({
              bounds: {
                top: M - W.top,
                right: ue + (o.offsetWidth - this.resizable.size.width) - W.left / s,
                bottom: M + (o.offsetHeight - this.resizable.size.height) - W.top,
                left: ue - W.left / s
              }
            });
          }
        }
      }
    }, t.prototype.onDrag = function(r, a) {
      if (this.props.onDrag) {
        var n = this.offsetFromParent, i = n.left, s = n.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, Ee(Ee({}, a), { x: a.x - i, y: a.y - s }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, Ee(Ee({}, a), { x: a.x + i, y: this.originalPosition.y + s, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, Ee(Ee({}, a), { x: this.originalPosition.x + i, y: a.y + s, deltaX: 0 }));
      }
    }, t.prototype.onDragStop = function(r, a) {
      if (this.props.onDragStop) {
        var n = this.offsetFromParent, i = n.left, s = n.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, Ee(Ee({}, a), { x: a.x + i, y: a.y + s }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, Ee(Ee({}, a), { x: a.x + i, y: this.originalPosition.y + s, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, Ee(Ee({}, a), { x: this.originalPosition.x + i, y: a.y + s, deltaX: 0 }));
      }
    }, t.prototype.onResizeStart = function(r, a, n) {
      r.stopPropagation(), this.setState({
        resizing: !0
      });
      var i = this.props.scale, s = this.offsetFromParent, o = this.getDraggablePosition();
      if (this.resizingPosition = { x: o.x + s.left, y: o.y + s.top }, this.originalPosition = o, this.props.bounds) {
        var l = this.getParent(), u = void 0;
        this.props.bounds === "parent" ? u = l : this.props.bounds === "body" ? u = document.body : this.props.bounds === "window" ? u = window : typeof this.props.bounds == "string" ? u = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (u = this.props.bounds);
        var f = this.getSelfElement();
        if (f instanceof Element && (u instanceof HTMLElement || u === window) && l instanceof HTMLElement) {
          var d = this.getMaxSizesFromProps(), h = d.maxWidth, v = d.maxHeight, g = this.getParentSize();
          if (h && typeof h == "string")
            if (h.endsWith("%")) {
              var S = Number(h.replace("%", "")) / 100;
              h = g.width * S;
            } else
              h.endsWith("px") && (h = Number(h.replace("px", "")));
          if (v && typeof v == "string")
            if (v.endsWith("%")) {
              var S = Number(v.replace("%", "")) / 100;
              v = g.width * S;
            } else
              v.endsWith("px") && (v = Number(v.replace("px", "")));
          var A = f.getBoundingClientRect(), j = A.left, w = A.top, R = this.props.bounds === "window" ? { left: 0, top: 0 } : u.getBoundingClientRect(), q = R.left, B = R.top, U = this.getOffsetWidth(u), le = this.getOffsetHeight(u), J = a.toLowerCase().endsWith("left"), ae = a.toLowerCase().endsWith("right"), G = a.startsWith("top"), ue = a.startsWith("bottom");
          if ((J || G) && this.resizable) {
            var M = (j - q) / i + this.resizable.size.width;
            this.setState({ maxWidth: M > Number(h) ? h : M });
          }
          if (ae || this.props.lockAspectRatio && !J && !G) {
            var M = U + (q - j) / i;
            this.setState({ maxWidth: M > Number(h) ? h : M });
          }
          if ((G || J) && this.resizable) {
            var M = (w - B) / i + this.resizable.size.height;
            this.setState({
              maxHeight: M > Number(v) ? v : M
            });
          }
          if (ue || this.props.lockAspectRatio && !G && !J) {
            var M = le + (B - w) / i;
            this.setState({
              maxHeight: M > Number(v) ? v : M
            });
          }
        }
      } else
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      this.props.onResizeStart && this.props.onResizeStart(r, a, n);
    }, t.prototype.onResize = function(r, a, n, i) {
      var s = { x: this.originalPosition.x, y: this.originalPosition.y }, o = -i.width, l = -i.height, u = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      u.indexOf(a) !== -1 && (a === "bottomLeft" ? s.x += o : (a === "topRight" || (s.x += o), s.y += l)), (s.x !== this.draggable.state.x || s.y !== this.draggable.state.y) && this.draggable.setState(s), this.updateOffsetFromParent();
      var f = this.offsetFromParent, d = this.getDraggablePosition().x + f.left, h = this.getDraggablePosition().y + f.top;
      this.resizingPosition = { x: d, y: h }, this.props.onResize && this.props.onResize(r, a, n, i, {
        x: d,
        y: h
      });
    }, t.prototype.onResizeStop = function(r, a, n, i) {
      this.setState({
        resizing: !1
      });
      var s = this.getMaxSizesFromProps(), o = s.maxWidth, l = s.maxHeight;
      this.setState({ maxWidth: o, maxHeight: l }), this.props.onResizeStop && this.props.onResizeStop(r, a, n, i, this.resizingPosition);
    }, t.prototype.updateSize = function(r) {
      this.resizable && this.resizable.updateSize({ width: r.width, height: r.height });
    }, t.prototype.updatePosition = function(r) {
      this.draggable.setState(r);
    }, t.prototype.updateOffsetFromParent = function() {
      var r = this.props.scale, a = this.getParent(), n = this.getSelfElement();
      if (!a || n === null)
        return {
          top: 0,
          left: 0
        };
      var i = a.getBoundingClientRect(), s = i.left, o = i.top, l = n.getBoundingClientRect(), u = this.getDraggablePosition(), f = a.scrollLeft, d = a.scrollTop;
      this.offsetFromParent = {
        left: l.left - s + f - u.x * r,
        top: l.top - o + d - u.y * r
      };
    }, t.prototype.render = function() {
      var r = this.props, a = r.disableDragging, n = r.style, i = r.dragHandleClassName, s = r.position, o = r.onMouseDown, l = r.onMouseUp, u = r.dragAxis, f = r.dragGrid, d = r.bounds, h = r.enableUserSelectHack, v = r.cancel, g = r.children;
      r.onResizeStart, r.onResize, r.onResizeStop, r.onDragStart, r.onDrag, r.onDragStop;
      var S = r.resizeHandleStyles, A = r.resizeHandleClasses, j = r.resizeHandleComponent, w = r.enableResizing, R = r.resizeGrid, q = r.resizeHandleWrapperClass, B = r.resizeHandleWrapperStyle, U = r.scale, le = r.allowAnyClick, J = _f(r, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), ae = this.props.default ? Ee({}, this.props.default) : void 0;
      delete J.default;
      var G = a || i ? { cursor: "auto" } : { cursor: "move" }, ue = Ee(Ee(Ee({}, Sf), G), n), M = this.offsetFromParent, W = M.left, ee = M.top, se;
      s && (se = {
        x: s.x - W,
        y: s.y - ee
      });
      var he = this.state.resizing ? void 0 : se, ve = this.state.resizing ? "both" : u;
      return O.createElement(
        xf,
        { ref: this.refDraggable, handle: i ? ".".concat(i) : void 0, defaultPosition: ae, onMouseDown: o, onMouseUp: l, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: ve, disabled: a, grid: f, bounds: d ? this.state.bounds : void 0, position: he, enableUserSelectHack: h, cancel: v, scale: U, allowAnyClick: le, nodeRef: this.resizableElement },
        O.createElement(bf, Ee({}, J, { ref: this.refResizable, defaultSize: ae, size: this.props.size, enable: typeof w == "boolean" ? Df(w) : w, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: ue, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: R, handleWrapperClass: q, handleWrapperStyle: B, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: S, handleClasses: A, handleComponent: j, scale: this.props.scale }), g)
      );
    }, t.defaultProps = {
      maxWidth: Number.MAX_SAFE_INTEGER,
      maxHeight: Number.MAX_SAFE_INTEGER,
      scale: 1,
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      onDragStart: function() {
      },
      onDrag: function() {
      },
      onDragStop: function() {
      }
    }, t;
  }(O.PureComponent)
), In = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Xs;
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
})(In);
const Of = O.forwardRef(({
  placeholder: e = "Введите",
  ...t
}, r) => /* @__PURE__ */ V("input", { ref: r, placeholder: e, ...t })), kf = ({
  label: e,
  helperText: t,
  className: r,
  inputWrapRef: a,
  onBlur: n,
  onFocus: i,
  error: s,
  afterItems: o,
  disabled: l,
  isLoading: u,
  inputComponent: f = Of,
  ...d
}, h) => {
  const [v, g] = k.useState(!1), {
    getRootProps: S,
    getInputProps: A
  } = Sl({
    error: !!s,
    onBlur: n,
    onFocus: i,
    disabled: l,
    inputRef: h,
    ...d
  }), {
    onBlur: j,
    onFocus: w,
    ...R
  } = A();
  R.value = R.value || "";
  const q = O.useCallback((le) => {
    l || (g(!0), w == null || w(le));
  }, [l, g, w]), B = O.useCallback((le) => {
    g(!1), j == null || j(le);
  }, [g, j]);
  let U = /* @__PURE__ */ qe("div", { className: r, ref: a, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, s ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, v && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : v ? {
    "--tw-border-opacity": "1",
    borderColor: "rgb(114 117 191 / var(--tw-border-opacity))",
    outlineWidth: "2px",
    outlineColor: "#d2d5eb"
  } : !l && {
    ":hover": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(114 117 191 / var(--tw-border-opacity))"
    }
  }], children: [
    u && /* @__PURE__ */ qe("div", { css: {
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
      /* @__PURE__ */ V(wt, { icon: ms.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ V(f, { css: [{
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
    }, s && {
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        color: "rgb(239 68 68 / var(--tw-placeholder-opacity))"
      }
    }, l && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }], onFocus: q, onBlur: B, ...d, ...R, type: u ? "hidden" : d.type || "text" }),
    o && !l && /* @__PURE__ */ V("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: o })
  ] });
  return e && (U = /* @__PURE__ */ V(Fa, { label: e, error: s, helperText: t, ...S(), children: U })), U;
}, Yr = O.forwardRef(kf), ho = "id", Tf = ({
  text: e = "Загрузка"
}) => {
  const [t, r] = O.useState("");
  return O.useEffect(() => {
    const a = setInterval(() => {
      r((n) => n.length < 3 ? n + "." : "");
    }, 300);
    return () => clearInterval(a);
  }, []), /* @__PURE__ */ qe(Sr, { children: [
    e,
    t
  ] });
}, Ef = ({
  className: e,
  isLoading: t = !1,
  inputLoading: r = !1,
  idField: a = ho,
  displayField: n,
  options: i,
  multiple: s,
  open: o = !1,
  label: l,
  helperText: u,
  error: f,
  onOpen: d,
  onClose: h,
  optionRender: v,
  onChange: g,
  onInputChange: S,
  onSelect: A,
  disabled: j,
  placeholder: w = "Выберите",
  value: R,
  allowClear: q = !0,
  autoComplete: B = !0,
  autoSelect: U = !1,
  afterItems: le,
  extraOptionsRenderer: J,
  ...ae
}, G) => {
  const ue = O.useCallback((Y) => n && n in Y ? Y[n] : JSON.stringify(Y), [n]), [M, W] = O.useState(o);
  O.useEffect(() => {
    W(o);
  }, [o]);
  const ee = O.useMemo(() => s ? (R == null ? void 0 : R.map((Y) => i.find((re) => re[a] == Y)).filter((Y) => !!Y)) || [] : i.find((Y) => Y[a] == R) || null, [R, i]), {
    value: se,
    getRootProps: he,
    getInputProps: ve,
    getListboxProps: Fe,
    getOptionProps: we,
    groupedOptions: ce,
    getClearProps: Ne,
    setAnchorEl: y,
    anchorEl: _,
    popupOpen: E,
    getTagProps: N
  } = Dl({
    options: i,
    autoComplete: B,
    autoSelect: U,
    multiple: s,
    open: M,
    value: ee,
    getOptionLabel: ue,
    isOptionEqualToValue: (Y, re) => a ? Y[a] === re[a] : Y === re,
    onInputChange: S,
    onOpen: (Y) => {
      W(!0), d == null || d(Y);
    },
    onClose: (Y, re) => {
      W(!1), h == null || h(Y, re);
    },
    clearOnBlur: !1,
    disabled: j,
    unstable_classNamePrefix: "c",
    onChange: (Y, re) => {
      g && (Array.isArray(re) ? g(re.map((Be) => Be[a])) : g(re && typeof re == "object" ? re[a] : null)), A == null || A(re);
    }
  }), C = O.useMemo(() => J ? J({
    closePopup: () => W(!1)
  }) : null, [J, W]), F = t ? /* @__PURE__ */ V("div", { css: {
    zIndex: "20",
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
  }, children: /* @__PURE__ */ V(Tf, {}) }) : /* @__PURE__ */ V("ul", { css: {
    zIndex: "20",
    width: "100%"
  }, ...Fe(), children: _ && ce.length > 0 ? /* @__PURE__ */ qe(Sr, { children: [
    ce.map((Y, re) => /* @__PURE__ */ V(k.Fragment, { children: "group" in Y ? /* @__PURE__ */ V(Sr, {}) : /* @__PURE__ */ V("li", { css: [{
      cursor: "pointer",
      "--tw-border-opacity": "1",
      borderColor: "rgb(243 244 246 / var(--tw-border-opacity))",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(210 213 235 / var(--tw-bg-opacity))"
      },
      ":not(:last-child)": {
        borderBottomWidth: "1px"
      }
    }, En`
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
                    `], ...we({
      option: Y,
      index: re
    }), children: v ? v(Y) : ue(Y) }) }, a in Y ? Y[a] : re)),
    C
  ] }) : C && /* @__PURE__ */ V("ul", { css: {
    width: "100%"
  }, ...Fe(), children: C }) }), X = O.useMemo(() => s ? se && se.length > 0 : !!se, [se, s]), {
    onBlur: ie,
    onChange: ne,
    ref: $e,
    ...Le
  } = ve(), Ie = ws(G, $e), de = /* @__PURE__ */ qe(Sr, { children: [
    s && (se == null ? void 0 : se.length) > 0 && /* @__PURE__ */ V("div", { css: {
      marginBottom: "0.25rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }, children: se == null ? void 0 : se.map((Y, re) => {
      const {
        onDelete: Be,
        key: It,
        ...Dt
      } = N({
        index: re
      });
      return /* @__PURE__ */ qe("div", { ...Dt, css: {
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
        /* @__PURE__ */ V("span", { children: Y[Ds] ? /* @__PURE__ */ V("div", { css: [{
          height: "0.625rem",
          "@keyframes pulse": {
            "50%": {
              opacity: ".5"
            }
          },
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          borderRadius: "9999px",
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(156 163 175 / var(--tw-bg-opacity))"
        }, En`
                        width: ${Math.round(Math.random() * 5) * 30 + 30}px;
                      `] }) : v ? v(Y) : ue(Y) }),
        /* @__PURE__ */ V("button", { onClick: Be, children: /* @__PURE__ */ V(wt, { icon: In.faTimes, css: {
          "--tw-text-opacity": "1",
          color: "rgb(156 163 175 / var(--tw-text-opacity))"
        } }) })
      ] }, It);
    }) }),
    /* @__PURE__ */ V(Yr, { ...ae, error: f, ...Le, ref: Ie, inputWrapRef: y, placeholder: w, isLoading: r, onChange: ne, onBlur: (Y) => {
      ie == null || ie(Y), s && (ne == null || ne({
        ...Y,
        target: {
          ...Y.target,
          value: ""
        }
      }));
    }, afterItems: !j && [le && /* @__PURE__ */ V(k.Fragment, { children: le }, "after-items"), X && q && !s && /* @__PURE__ */ V("button", { ...Ne(), onMouseDown: (Y) => {
      Y.preventDefault(), Y.stopPropagation();
    }, children: /* @__PURE__ */ V(wt, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: In.faTimes }) }, "clear"), /* @__PURE__ */ V("button", { css: [{
      pointerEvents: "none"
    }], children: /* @__PURE__ */ V(wt, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, f && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: ml.faCaretDown }) }, "arrow")] }),
    _ && /* @__PURE__ */ V(_s, { open: E, anchorEl: _, children: /* @__PURE__ */ V("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: _.offsetWidth
    }], children: F }) })
  ] });
  return /* @__PURE__ */ V(Fa, { label: l, error: f, helperText: u, className: e, ...he(), children: de });
}, po = O.forwardRef(Ef), Cf = ({
  multiple: e,
  value: t,
  url: r,
  params: a,
  idField: n = ho,
  onInputChange: i,
  open: s = !1,
  valueOptions: o,
  extraOptionsRenderer: l,
  ...u
}, f) => {
  const [d, h] = O.useState(""), [v, g] = O.useState(s), S = hl(d, 500), {
    records: A,
    addRecord: j,
    isLoading: w
  } = zl({
    idField: n,
    value: (e ? t : [t]) || [],
    url: r,
    initialRecordsCache: o
  });
  O.useEffect(() => {
    g(s);
  }, [s]);
  const R = O.useMemo(() => ({
    ...a,
    ...S ? {
      query: S
    } : void 0
  }), [S, a]), q = d.length > 0 || v || !1, B = yl(r, {
    enabled: q,
    params: R,
    placeholderData: pl,
    staleTime: 1e3 * 60
  }), U = O.useMemo(() => {
    var ae;
    return _r.uniqBy([...A, ...((ae = B.data) == null ? void 0 : ae.data) || []], n);
  }, [A, B.data]), le = !e && w, J = l ? (ae) => l({
    ...ae,
    search: d,
    searchIsLoading: B.isLoading
  }) : void 0;
  return /* @__PURE__ */ V(Sr, { children: /* @__PURE__ */ V(po, { ref: f, multiple: e, value: t, ...u, disabled: le || u.disabled, inputLoading: le, options: U, idField: n, onOpen: () => g(!0), onClose: () => g(!1), isLoading: B.isLoading || w, extraOptionsRenderer: J, open: v, afterItems: [(B.isLoading || B.isFetching) && /* @__PURE__ */ V("div", { children: /* @__PURE__ */ V(wt, { icon: ms.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onSelect: (ae) => {
    var G;
    e ? ae == null || ae.map((ue) => {
      j(ue);
    }) : j(ae), (G = u.onSelect) == null || G.call(u, ae);
  }, onInputChange: (ae, G, ue) => {
    ue === "input" && h(G), ue === "reset" && d !== "" && h(""), i == null || i(ae, G, ue);
  } }) });
}, Nf = O.forwardRef(Cf), oi = (e) => O.forwardRef((t, r) => /* @__PURE__ */ V(Nf, { ...e, ...t, ref: r }));
var vo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "eye", a = 576, n = 512, i = [128065], s = "f06e", o = "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      a,
      n,
      i,
      s,
      o
    ]
  }, e.faEye = e.definition, e.prefix = t, e.iconName = r, e.width = a, e.height = n, e.ligatures = i, e.unicode = s, e.svgPathData = o, e.aliases = i;
})(vo);
const Pf = (e, t) => {
  const [r, a] = O.useState(!1);
  return /* @__PURE__ */ V(Tl, { ref: t, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ V(Ol, { position: "end", children: /* @__PURE__ */ V(kl, { size: "small", edge: "end", onClick: () => a((n) => !n), children: /* @__PURE__ */ V(wt, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, En`
                  width: 18px;
                `], icon: r ? bl.faEyeSlash : vo.faEye }) }) })
  }, ...e });
};
O.forwardRef(Pf);
const Xi = (e) => Array.isArray(e) ? e.length === 0 : !e, Rf = ({
  dictionary: e,
  open: t = !1,
  value: r,
  filterOptions: a,
  ...n
}, i) => {
  const [s, o] = O.useState(t), l = wl(e, {
    enabled: s || !!r
  });
  O.useEffect(() => {
    o(t);
  }, [t]);
  const u = O.useMemo(() => a && l.data ? a(l.data) : l.data, [l.data, a]);
  return /* @__PURE__ */ V(
    po,
    {
      displayField: "name",
      ...n,
      ref: i,
      open: s,
      value: r,
      isLoading: l.isLoading,
      onOpen: () => {
        o(!0);
      },
      onClose: () => {
        o(!1);
      },
      options: u || [],
      inputLoading: l.isLoading && !Xi(r),
      disabled: l.isLoading && !Xi(r) || n.disabled
    }
  );
}, mp = O.forwardRef(Rf);
var Af = "Expected a function", go = "__lodash_hash_undefined__", Mf = "[object Function]", zf = "[object GeneratorFunction]", Lf = /[\\^$.*+?()[\]{}|]/g, If = /^\[object .+?Constructor\]$/, jf = typeof na == "object" && na && na.Object === Object && na, Vf = typeof self == "object" && self && self.Object === Object && self, mo = jf || Vf || Function("return this")();
function Wf(e, t) {
  return e == null ? void 0 : e[t];
}
function Ff(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
var $f = Array.prototype, Bf = Function.prototype, yo = Object.prototype, xn = mo["__core-js_shared__"], Ki = function() {
  var e = /[^.]+$/.exec(xn && xn.keys && xn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), bo = Bf.toString, li = yo.hasOwnProperty, Hf = yo.toString, Uf = RegExp(
  "^" + bo.call(li).replace(Lf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), Zf = $f.splice, Yf = wo(mo, "Map"), Ir = wo(Object, "create");
function Zt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function qf() {
  this.__data__ = Ir ? Ir(null) : {};
}
function Gf(e) {
  return this.has(e) && delete this.__data__[e];
}
function Xf(e) {
  var t = this.__data__;
  if (Ir) {
    var r = t[e];
    return r === go ? void 0 : r;
  }
  return li.call(t, e) ? t[e] : void 0;
}
function Kf(e) {
  var t = this.__data__;
  return Ir ? t[e] !== void 0 : li.call(t, e);
}
function Qf(e, t) {
  var r = this.__data__;
  return r[e] = Ir && t === void 0 ? go : t, this;
}
Zt.prototype.clear = qf;
Zt.prototype.delete = Gf;
Zt.prototype.get = Xf;
Zt.prototype.has = Kf;
Zt.prototype.set = Qf;
function hr(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function Jf() {
  this.__data__ = [];
}
function ed(e) {
  var t = this.__data__, r = Ya(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Zf.call(t, r, 1), !0;
}
function td(e) {
  var t = this.__data__, r = Ya(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function rd(e) {
  return Ya(this.__data__, e) > -1;
}
function ad(e, t) {
  var r = this.__data__, a = Ya(r, e);
  return a < 0 ? r.push([e, t]) : r[a][1] = t, this;
}
hr.prototype.clear = Jf;
hr.prototype.delete = ed;
hr.prototype.get = td;
hr.prototype.has = rd;
hr.prototype.set = ad;
function Gt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
function nd() {
  this.__data__ = {
    hash: new Zt(),
    map: new (Yf || hr)(),
    string: new Zt()
  };
}
function id(e) {
  return qa(this, e).delete(e);
}
function sd(e) {
  return qa(this, e).get(e);
}
function od(e) {
  return qa(this, e).has(e);
}
function ld(e, t) {
  return qa(this, e).set(e, t), this;
}
Gt.prototype.clear = nd;
Gt.prototype.delete = id;
Gt.prototype.get = sd;
Gt.prototype.has = od;
Gt.prototype.set = ld;
function Ya(e, t) {
  for (var r = e.length; r--; )
    if (hd(e[r][0], t))
      return r;
  return -1;
}
function ud(e) {
  if (!_o(e) || fd(e))
    return !1;
  var t = pd(e) || Ff(e) ? Uf : If;
  return t.test(dd(e));
}
function qa(e, t) {
  var r = e.__data__;
  return cd(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function wo(e, t) {
  var r = Wf(e, t);
  return ud(r) ? r : void 0;
}
function cd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function fd(e) {
  return !!Ki && Ki in e;
}
function dd(e) {
  if (e != null) {
    try {
      return bo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
function ui(e, t) {
  if (typeof e != "function" || t && typeof t != "function")
    throw new TypeError(Af);
  var r = function() {
    var a = arguments, n = t ? t.apply(this, a) : a[0], i = r.cache;
    if (i.has(n))
      return i.get(n);
    var s = e.apply(this, a);
    return r.cache = i.set(n, s), s;
  };
  return r.cache = new (ui.Cache || Gt)(), r;
}
ui.Cache = Gt;
function hd(e, t) {
  return e === t || e !== e && t !== t;
}
function pd(e) {
  var t = _o(e) ? Hf.call(e) : "";
  return t == Mf || t == zf;
}
function _o(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
var vd = ui;
const xo = /* @__PURE__ */ ja(vd);
function So(e) {
  return JSON.stringify(e);
}
function gd(e) {
  return typeof e == "string";
}
function md(e, t, r) {
  return r.indexOf(e) === t;
}
function yd(e) {
  return e.toLowerCase() === e;
}
function Qi(e) {
  return e.indexOf(",") === -1 ? e : e.split(",");
}
function jn(e) {
  if (!e)
    return e;
  if (e === "C" || e === "posix" || e === "POSIX")
    return "en-US";
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0], r = t === void 0 ? "" : t;
    return jn(r);
  }
  if (e.indexOf("@") !== -1) {
    var a = e.split("@")[0], r = a === void 0 ? "" : a;
    return jn(r);
  }
  if (e.indexOf("-") === -1 || !yd(e))
    return e;
  var n = e.split("-"), i = n[0], s = n[1], o = s === void 0 ? "" : s;
  return "".concat(i, "-").concat(o.toUpperCase());
}
function bd(e) {
  var t = e === void 0 ? {} : e, r = t.useFallbackLocale, a = r === void 0 ? !0 : r, n = t.fallbackLocale, i = n === void 0 ? "en-US" : n, s = [];
  if (typeof navigator < "u") {
    for (var o = navigator.languages || [], l = [], u = 0, f = o; u < f.length; u++) {
      var d = f[u];
      l = l.concat(Qi(d));
    }
    var h = navigator.language, v = h && Qi(h);
    s = s.concat(l, v);
  }
  return a && s.push(i), s.filter(gd).map(jn).filter(md);
}
var wd = xo(bd, So);
function _d(e) {
  return wd(e)[0] || null;
}
var Do = xo(_d, So);
function St(e, t, r) {
  return function(n, i) {
    i === void 0 && (i = r);
    var s = e(n) + i;
    return t(s);
  };
}
function qr(e) {
  return function(r) {
    return new Date(e(r).getTime() - 1);
  };
}
function Gr(e, t) {
  return function(a) {
    return [e(a), t(a)];
  };
}
function be(e) {
  if (e instanceof Date)
    return e.getFullYear();
  if (typeof e == "number")
    return e;
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t))
    return t;
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function zt(e) {
  if (e instanceof Date)
    return e.getMonth();
  throw new Error("Failed to get month from date: ".concat(e, "."));
}
function Ga(e) {
  if (e instanceof Date)
    return e.getDate();
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function pr(e) {
  var t = be(e), r = t + (-t + 1) % 100, a = /* @__PURE__ */ new Date();
  return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var xd = St(be, pr, -100), Oo = St(be, pr, 100), ci = qr(Oo), Sd = St(be, ci, -100), ko = Gr(pr, ci);
function Lt(e) {
  var t = be(e), r = t + (-t + 1) % 10, a = /* @__PURE__ */ new Date();
  return a.setFullYear(r, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var To = St(be, Lt, -10), fi = St(be, Lt, 10), Xa = qr(fi), Eo = St(be, Xa, -10), Co = Gr(Lt, Xa);
function vr(e) {
  var t = be(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var No = St(be, vr, -1), di = St(be, vr, 1), Ka = qr(di), Po = St(be, Ka, -1), Dd = Gr(vr, Ka);
function hi(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var i = be(a), s = zt(a) + n, o = /* @__PURE__ */ new Date();
    return o.setFullYear(i, s, 1), o.setHours(0, 0, 0, 0), e(o);
  };
}
function Xt(e) {
  var t = be(e), r = zt(e), a = /* @__PURE__ */ new Date();
  return a.setFullYear(t, r, 1), a.setHours(0, 0, 0, 0), a;
}
var Ro = hi(Xt, -1), pi = hi(Xt, 1), Xr = qr(pi), Ao = hi(Xr, -1), Od = Gr(Xt, Xr);
function kd(e, t) {
  return function(a, n) {
    n === void 0 && (n = t);
    var i = be(a), s = zt(a), o = Ga(a) + n, l = /* @__PURE__ */ new Date();
    return l.setFullYear(i, s, o), l.setHours(0, 0, 0, 0), e(l);
  };
}
function Kr(e) {
  var t = be(e), r = zt(e), a = Ga(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, r, a), n.setHours(0, 0, 0, 0), n;
}
var Td = kd(Kr, 1), vi = qr(Td), Ed = Gr(Kr, vi);
function Mo(e) {
  return Ga(Xr(e));
}
var wr, ye = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, ir = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
}, Cd = (wr = {}, wr[ye.GREGORY] = [
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
], wr[ye.HEBREW] = ["he", "he-IL"], wr[ye.ISLAMIC] = [
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
], wr), gi = [0, 1, 2, 3, 4, 5, 6], Sn = /* @__PURE__ */ new Map();
function Nd(e) {
  return function(r, a) {
    var n = r || Do();
    Sn.has(n) || Sn.set(n, /* @__PURE__ */ new Map());
    var i = Sn.get(n);
    return i.has(e) || i.set(e, new Intl.DateTimeFormat(n || void 0, e).format), i.get(e)(a);
  };
}
function Pd(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function Kt(e) {
  return function(t, r) {
    return Nd(e)(t, Pd(r));
  };
}
var Rd = { day: "numeric" }, Ad = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, Md = { month: "long" }, zd = {
  month: "long",
  year: "numeric"
}, Ld = { weekday: "short" }, Id = { weekday: "long" }, jd = { year: "numeric" }, Vd = Kt(Rd), Wd = Kt(Ad), Fd = Kt(Md), zo = Kt(zd), $d = Kt(Ld), Bd = Kt(Id), Qa = Kt(jd), Hd = gi[0], Ud = gi[5], Ji = gi[6];
function jr(e, t) {
  t === void 0 && (t = ye.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case ye.ISO_8601:
      return (r + 6) % 7;
    case ye.ISLAMIC:
      return (r + 1) % 7;
    case ye.HEBREW:
    case ye.GREGORY:
      return r;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function Zd(e) {
  var t = pr(e);
  return be(t);
}
function Yd(e) {
  var t = Lt(e);
  return be(t);
}
function Vn(e, t) {
  t === void 0 && (t = ye.ISO_8601);
  var r = be(e), a = zt(e), n = e.getDate() - jr(e, t);
  return new Date(r, a, n);
}
function qd(e, t) {
  t === void 0 && (t = ye.ISO_8601);
  var r = t === ye.GREGORY ? ye.GREGORY : ye.ISO_8601, a = Vn(e, t), n = be(e) + 1, i, s;
  do
    i = new Date(n, 0, r === ye.ISO_8601 ? 4 : 1), s = Vn(i, t), n -= 1;
  while (e < s);
  return Math.round((a.getTime() - s.getTime()) / (864e5 * 7)) + 1;
}
function $t(e, t) {
  switch (e) {
    case "century":
      return pr(t);
    case "decade":
      return Lt(t);
    case "year":
      return vr(t);
    case "month":
      return Xt(t);
    case "day":
      return Kr(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Gd(e, t) {
  switch (e) {
    case "century":
      return xd(t);
    case "decade":
      return To(t);
    case "year":
      return No(t);
    case "month":
      return Ro(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Lo(e, t) {
  switch (e) {
    case "century":
      return Oo(t);
    case "decade":
      return fi(t);
    case "year":
      return di(t);
    case "month":
      return pi(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Xd(e, t) {
  switch (e) {
    case "decade":
      return To(t, -100);
    case "year":
      return No(t, -10);
    case "month":
      return Ro(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Kd(e, t) {
  switch (e) {
    case "decade":
      return fi(t, 100);
    case "year":
      return di(t, 10);
    case "month":
      return pi(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Io(e, t) {
  switch (e) {
    case "century":
      return ci(t);
    case "decade":
      return Xa(t);
    case "year":
      return Ka(t);
    case "month":
      return Xr(t);
    case "day":
      return vi(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Qd(e, t) {
  switch (e) {
    case "century":
      return Sd(t);
    case "decade":
      return Eo(t);
    case "year":
      return Po(t);
    case "month":
      return Ao(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Jd(e, t) {
  switch (e) {
    case "decade":
      return Eo(t, -100);
    case "year":
      return Po(t, -10);
    case "month":
      return Ao(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function es(e, t) {
  switch (e) {
    case "century":
      return ko(t);
    case "decade":
      return Co(t);
    case "year":
      return Dd(t);
    case "month":
      return Od(t);
    case "day":
      return Ed(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function eh(e, t, r) {
  var a = [t, r].sort(function(n, i) {
    return n.getTime() - i.getTime();
  });
  return [$t(e, a[0]), Io(e, a[1])];
}
function jo(e, t, r) {
  return t === void 0 && (t = Qa), r.map(function(a) {
    return t(e, a);
  }).join(" – ");
}
function th(e, t, r) {
  return jo(e, t, ko(r));
}
function Vo(e, t, r) {
  return jo(e, t, Co(r));
}
function rh(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function Wo(e, t) {
  t === void 0 && (t = ye.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case ye.ISLAMIC:
    case ye.HEBREW:
      return r === Ud || r === Ji;
    case ye.ISO_8601:
    case ye.GREGORY:
      return r === Ji || r === Hd;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var ct = "react-calendar__navigation";
function ah(e) {
  var t = e.activeStartDate, r = e.drillUp, a = e.formatMonthYear, n = a === void 0 ? zo : a, i = e.formatYear, s = i === void 0 ? Qa : i, o = e.locale, l = e.maxDate, u = e.minDate, f = e.navigationAriaLabel, d = f === void 0 ? "" : f, h = e.navigationAriaLive, v = e.navigationLabel, g = e.next2AriaLabel, S = g === void 0 ? "" : g, A = e.next2Label, j = A === void 0 ? "»" : A, w = e.nextAriaLabel, R = w === void 0 ? "" : w, q = e.nextLabel, B = q === void 0 ? "›" : q, U = e.prev2AriaLabel, le = U === void 0 ? "" : U, J = e.prev2Label, ae = J === void 0 ? "«" : J, G = e.prevAriaLabel, ue = G === void 0 ? "" : G, M = e.prevLabel, W = M === void 0 ? "‹" : M, ee = e.setActiveStartDate, se = e.showDoubleView, he = e.view, ve = e.views, Fe = ve.indexOf(he) > 0, we = he !== "century", ce = Gd(he, t), Ne = we ? Xd(he, t) : void 0, y = Lo(he, t), _ = we ? Kd(he, t) : void 0, E = function() {
    if (ce.getFullYear() < 0)
      return !0;
    var de = Qd(he, t);
    return u && u >= de;
  }(), N = we && function() {
    if (Ne.getFullYear() < 0)
      return !0;
    var de = Jd(he, t);
    return u && u >= de;
  }(), C = l && l < y, F = we && l && l < _;
  function X() {
    ee(ce, "prev");
  }
  function ie() {
    ee(Ne, "prev2");
  }
  function ne() {
    ee(y, "next");
  }
  function $e() {
    ee(_, "next2");
  }
  function Le(de) {
    var Y = function() {
      switch (he) {
        case "century":
          return th(o, s, de);
        case "decade":
          return Vo(o, s, de);
        case "year":
          return s(o, de);
        case "month":
          return n(o, de);
        default:
          throw new Error("Invalid view: ".concat(he, "."));
      }
    }();
    return v ? v({
      date: de,
      label: Y,
      locale: o || Do() || void 0,
      view: he
    }) : Y;
  }
  function Ie() {
    var de = "".concat(ct, "__label");
    return k.createElement(
      "button",
      { "aria-label": d, "aria-live": h, className: de, disabled: !Fe, onClick: r, style: { flexGrow: 1 }, type: "button" },
      k.createElement("span", { className: "".concat(de, "__labelText ").concat(de, "__labelText--from") }, Le(t)),
      se ? k.createElement(
        k.Fragment,
        null,
        k.createElement("span", { className: "".concat(de, "__divider") }, " – "),
        k.createElement("span", { className: "".concat(de, "__labelText ").concat(de, "__labelText--to") }, Le(y))
      ) : null
    );
  }
  return k.createElement(
    "div",
    { className: ct },
    ae !== null && we ? k.createElement("button", { "aria-label": le, className: "".concat(ct, "__arrow ").concat(ct, "__prev2-button"), disabled: N, onClick: ie, type: "button" }, ae) : null,
    W !== null && k.createElement("button", { "aria-label": ue, className: "".concat(ct, "__arrow ").concat(ct, "__prev-button"), disabled: E, onClick: X, type: "button" }, W),
    Ie(),
    B !== null && k.createElement("button", { "aria-label": R, className: "".concat(ct, "__arrow ").concat(ct, "__next-button"), disabled: C, onClick: ne, type: "button" }, B),
    j !== null && we ? k.createElement("button", { "aria-label": S, className: "".concat(ct, "__arrow ").concat(ct, "__next2-button"), disabled: F, onClick: $e, type: "button" }, j) : null
  );
}
var sr = globalThis && globalThis.__assign || function() {
  return sr = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, sr.apply(this, arguments);
}, nh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function ts(e) {
  return "".concat(e, "%");
}
function mi(e) {
  var t = e.children, r = e.className, a = e.count, n = e.direction, i = e.offset, s = e.style, o = e.wrap, l = nh(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return k.createElement("div", sr({ className: r, style: sr({ display: "flex", flexDirection: n, flexWrap: o ? "wrap" : "nowrap" }, s) }, l), k.Children.map(t, function(u, f) {
    var d = i && f === 0 ? ts(100 * i / a) : null;
    return k.cloneElement(u, sr(sr({}, u.props), { style: {
      flexBasis: ts(100 / a),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: d,
      marginInlineStart: d,
      marginInlineEnd: 0
    } }));
  }));
}
var ih = function() {
}, sh = ih;
const oh = /* @__PURE__ */ ja(sh);
var tr;
function lh(e, t, r) {
  return t && t > e ? t : r && r < e ? r : e;
}
function Vr(e, t) {
  return t[0] <= e && t[1] >= e;
}
function uh(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function Fo(e, t) {
  return Vr(e[0], t) || Vr(e[1], t);
}
function rs(e, t, r) {
  var a = Fo(t, e), n = [];
  if (a) {
    n.push(r);
    var i = Vr(e[0], t), s = Vr(e[1], t);
    i && n.push("".concat(r, "Start")), s && n.push("".concat(r, "End")), i && s && n.push("".concat(r, "BothEnds"));
  }
  return n;
}
function ch(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function fh(e) {
  if (!e)
    throw new Error("args is required");
  var t = e.value, r = e.date, a = e.hover, n = "react-calendar__tile", i = [n];
  if (!r)
    return i;
  var s = /* @__PURE__ */ new Date(), o = function() {
    if (Array.isArray(r))
      return r;
    var v = e.dateType;
    if (!v)
      throw new Error("dateType is required when date is not an array of two dates");
    return es(v, r);
  }();
  if (Vr(s, o) && i.push("".concat(n, "--now")), !t || !ch(t))
    return i;
  var l = function() {
    if (Array.isArray(t))
      return t;
    var v = e.valueType;
    if (!v)
      throw new Error("valueType is required when value is not an array of two dates");
    return es(v, t);
  }();
  uh(l, o) ? i.push("".concat(n, "--active")) : Fo(l, o) && i.push("".concat(n, "--hasActive"));
  var u = rs(l, o, "".concat(n, "--range"));
  i.push.apply(i, u);
  var f = Array.isArray(t) ? t : [t];
  if (a && f.length === 1) {
    var d = a > l[0] ? [l[0], a] : [a, l[0]], h = rs(d, o, "".concat(n, "--hover"));
    i.push.apply(i, h);
  }
  return i;
}
var dh = (tr = {}, tr[ir.ARABIC] = ye.ISLAMIC, tr[ir.HEBREW] = ye.HEBREW, tr[ir.ISO_8601] = ye.ISO_8601, tr[ir.US] = ye.GREGORY, tr);
function hh(e) {
  return e !== void 0 && e in ir;
}
var as = !1;
function Ja(e) {
  if (hh(e)) {
    var t = dh[e];
    return oh(as, 'Specifying calendarType="'.concat(e, '" is deprecated. Use calendarType="').concat(t, '" instead.')), as = !0, t;
  }
  return e;
}
function en(e) {
  for (var t = e.className, r = e.count, a = r === void 0 ? 3 : r, n = e.dateTransform, i = e.dateType, s = e.end, o = e.hover, l = e.offset, u = e.renderTile, f = e.start, d = e.step, h = d === void 0 ? 1 : d, v = e.value, g = e.valueType, S = [], A = f; A <= s; A += h) {
    var j = n(A);
    S.push(u({
      classes: fh({
        date: j,
        dateType: i,
        hover: o,
        value: v,
        valueType: g
      }),
      date: j
    }));
  }
  return k.createElement(mi, { className: t, count: a, offset: l, wrap: !0 }, S);
}
function tn(e) {
  var t = e.activeStartDate, r = e.children, a = e.classes, n = e.date, i = e.formatAbbr, s = e.locale, o = e.maxDate, l = e.maxDateTransform, u = e.minDate, f = e.minDateTransform, d = e.onClick, h = e.onMouseOver, v = e.style, g = e.tileClassName, S = e.tileContent, A = e.tileDisabled, j = e.view, w = O.useMemo(function() {
    var q = { activeStartDate: t, date: n, view: j };
    return typeof g == "function" ? g(q) : g;
  }, [t, n, g, j]), R = O.useMemo(function() {
    var q = { activeStartDate: t, date: n, view: j };
    return typeof S == "function" ? S(q) : S;
  }, [t, n, S, j]);
  return k.createElement(
    "button",
    { className: Va(a, w), disabled: u && f(u) > n || o && l(o) < n || A && A({ activeStartDate: t, date: n, view: j }), onClick: d ? function(q) {
      return d(n, q);
    } : void 0, onFocus: h ? function() {
      return h(n);
    } : void 0, onMouseOver: h ? function() {
      return h(n);
    } : void 0, style: v, type: "button" },
    i ? k.createElement("abbr", { "aria-label": i(s, n) }, r) : r,
    R
  );
}
var Wn = globalThis && globalThis.__assign || function() {
  return Wn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Wn.apply(this, arguments);
}, ph = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, Dn = "react-calendar__century-view__decades__decade";
function vh(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.currentCentury, n = e.formatYear, i = n === void 0 ? Qa : n, s = ph(e, ["classes", "currentCentury", "formatYear"]), o = s.date, l = s.locale, u = [];
  return r && u.push.apply(u, r), Dn && u.push(Dn), pr(o).getFullYear() !== a && u.push("".concat(Dn, "--neighboringCentury")), k.createElement(tn, Wn({}, s, { classes: u, maxDateTransform: Xa, minDateTransform: Lt, view: "century" }), Vo(l, i, o));
}
var Fn = globalThis && globalThis.__assign || function() {
  return Fn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Fn.apply(this, arguments);
}, ns = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function gh(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringCentury, n = e.value, i = e.valueType, s = ns(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), o = Zd(t), l = o + (a ? 119 : 99);
  return k.createElement(en, { className: "react-calendar__century-view__decades", dateTransform: Lt, dateType: "decade", end: l, hover: r, renderTile: function(u) {
    var f = u.date, d = ns(u, ["date"]);
    return k.createElement(vh, Fn({ key: f.getTime() }, s, d, { activeStartDate: t, currentCentury: o, date: f }));
  }, start: o, step: 10, value: n, valueType: i });
}
var is = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, i; a < n; a++)
      (i || !(a in t)) && (i || (i = Array.prototype.slice.call(t, 0, a)), i[a] = t[a]);
  return e.concat(i || Array.prototype.slice.call(t));
}, mh = Object.values(ye), yh = Object.values(ir), $n = ["century", "decade", "year", "month"], $o = b.oneOf(is(is([], mh, !0), yh, !0)), Ma = b.oneOfType([
  b.string,
  b.arrayOf(b.string)
]), yi = function(t, r, a) {
  var n = t, i = r, s = n[i];
  if (!s)
    return null;
  if (!(s instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof s, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var o = t.maxDate;
  return o && s > o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof s, "` supplied to `").concat(a, "`, minDate cannot be larger than maxDate.")) : null;
}, bi = function(t, r, a) {
  var n = t, i = r, s = n[i];
  if (!s)
    return null;
  if (!(s instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof s, "` supplied to `").concat(a, "`, expected instance of `Date`."));
  var o = t.minDate;
  return o && s < o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof s, "` supplied to `").concat(a, "`, maxDate cannot be smaller than minDate.")) : null;
}, bh = b.oneOfType([
  b.func,
  b.exact({
    current: b.any
  })
]), wh = b.arrayOf(b.oneOfType([b.instanceOf(Date), b.oneOf([null])]).isRequired), _h = b.oneOfType([
  b.instanceOf(Date),
  b.oneOf([null]),
  wh
]);
b.arrayOf(b.oneOf($n));
var za = function(t, r, a) {
  var n = t, i = r, s = n[i];
  return s !== void 0 && (typeof s != "string" || $n.indexOf(s) === -1) ? new Error("Invalid prop `".concat(r, "` of value `").concat(s, "` supplied to `").concat(a, "`, expected one of [").concat($n.map(function(o) {
    return '"'.concat(o, '"');
  }).join(", "), "].")) : null;
};
za.isRequired = function(t, r, a, n, i) {
  var s = t, o = r, l = s[o];
  return l ? za(t, r, a) : new Error("The prop `".concat(r, "` is marked as required in `").concat(a, "`, but its value is `").concat(l, "`."));
};
var xh = function(e) {
  return b.arrayOf(e);
}, rn = {
  activeStartDate: b.instanceOf(Date).isRequired,
  hover: b.instanceOf(Date),
  locale: b.string,
  maxDate: bi,
  minDate: yi,
  onClick: b.func,
  onMouseOver: b.func,
  tileClassName: b.oneOfType([b.func, Ma]),
  tileContent: b.oneOfType([b.func, b.node]),
  value: _h,
  valueType: b.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
b.instanceOf(Date).isRequired, b.arrayOf(b.string.isRequired).isRequired, b.instanceOf(Date).isRequired, b.string, b.func, b.func, b.objectOf(b.oneOfType([b.string, b.number])), b.oneOfType([b.func, Ma]), b.oneOfType([b.func, b.node]), b.func;
var Wr = globalThis && globalThis.__assign || function() {
  return Wr = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Wr.apply(this, arguments);
}, Bo = function(t) {
  function r() {
    return k.createElement(gh, Wr({}, t));
  }
  return k.createElement("div", { className: "react-calendar__century-view" }, r());
};
Bo.propTypes = Wr(Wr({}, rn), { showNeighboringCentury: b.bool });
const Sh = Bo;
var Bn = globalThis && globalThis.__assign || function() {
  return Bn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Bn.apply(this, arguments);
}, Dh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, On = "react-calendar__decade-view__years__year";
function Oh(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.currentDecade, n = e.formatYear, i = n === void 0 ? Qa : n, s = Dh(e, ["classes", "currentDecade", "formatYear"]), o = s.date, l = s.locale, u = [];
  return r && u.push.apply(u, r), On && u.push(On), Lt(o).getFullYear() !== a && u.push("".concat(On, "--neighboringDecade")), k.createElement(tn, Bn({}, s, { classes: u, maxDateTransform: Ka, minDateTransform: vr, view: "decade" }), i(l, o));
}
var Hn = globalThis && globalThis.__assign || function() {
  return Hn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Hn.apply(this, arguments);
}, ss = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function kh(e) {
  var t = e.activeStartDate, r = e.hover, a = e.showNeighboringDecade, n = e.value, i = e.valueType, s = ss(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), o = Yd(t), l = o + (a ? 11 : 9);
  return k.createElement(en, { className: "react-calendar__decade-view__years", dateTransform: vr, dateType: "year", end: l, hover: r, renderTile: function(u) {
    var f = u.date, d = ss(u, ["date"]);
    return k.createElement(Oh, Hn({ key: f.getTime() }, s, d, { activeStartDate: t, currentDecade: o, date: f }));
  }, start: o, value: n, valueType: i });
}
var Fr = globalThis && globalThis.__assign || function() {
  return Fr = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Fr.apply(this, arguments);
}, Ho = function(t) {
  function r() {
    return k.createElement(kh, Fr({}, t));
  }
  return k.createElement("div", { className: "react-calendar__decade-view" }, r());
};
Ho.propTypes = Fr(Fr({}, rn), { showNeighboringDecade: b.bool });
const Th = Ho;
var Un = globalThis && globalThis.__assign || function() {
  return Un = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Un.apply(this, arguments);
}, Eh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, os = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var a = 0, n = t.length, i; a < n; a++)
      (i || !(a in t)) && (i || (i = Array.prototype.slice.call(t, 0, a)), i[a] = t[a]);
  return e.concat(i || Array.prototype.slice.call(t));
}, Ch = "react-calendar__year-view__months__month";
function Nh(e) {
  var t = e.classes, r = t === void 0 ? [] : t, a = e.formatMonth, n = a === void 0 ? Fd : a, i = e.formatMonthYear, s = i === void 0 ? zo : i, o = Eh(e, ["classes", "formatMonth", "formatMonthYear"]), l = o.date, u = o.locale;
  return k.createElement(tn, Un({}, o, { classes: os(os([], r, !0), [Ch], !1), formatAbbr: s, maxDateTransform: Xr, minDateTransform: Xt, view: "year" }), n(u, l));
}
var Zn = globalThis && globalThis.__assign || function() {
  return Zn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Zn.apply(this, arguments);
}, ls = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Ph(e) {
  var t = e.activeStartDate, r = e.hover, a = e.value, n = e.valueType, i = ls(e, ["activeStartDate", "hover", "value", "valueType"]), s = 0, o = 11, l = be(t);
  return k.createElement(en, { className: "react-calendar__year-view__months", dateTransform: function(u) {
    var f = /* @__PURE__ */ new Date();
    return f.setFullYear(l, u, 1), Xt(f);
  }, dateType: "month", end: o, hover: r, renderTile: function(u) {
    var f = u.date, d = ls(u, ["date"]);
    return k.createElement(Nh, Zn({ key: f.getTime() }, i, d, { activeStartDate: t, date: f }));
  }, start: s, value: a, valueType: n });
}
var La = globalThis && globalThis.__assign || function() {
  return La = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, La.apply(this, arguments);
}, Uo = function(t) {
  function r() {
    return k.createElement(Ph, La({}, t));
  }
  return k.createElement("div", { className: "react-calendar__year-view" }, r());
};
Uo.propTypes = La({}, rn);
const Rh = Uo;
var Yn = globalThis && globalThis.__assign || function() {
  return Yn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Yn.apply(this, arguments);
}, Ah = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, ca = "react-calendar__month-view__days__day";
function Mh(e) {
  var t = e.calendarType, r = e.classes, a = r === void 0 ? [] : r, n = e.currentMonthIndex, i = e.formatDay, s = i === void 0 ? Vd : i, o = e.formatLongDate, l = o === void 0 ? Wd : o, u = Ah(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), f = Ja(t), d = u.date, h = u.locale, v = [];
  return a && v.push.apply(v, a), ca && v.push(ca), Wo(d, f) && v.push("".concat(ca, "--weekend")), d.getMonth() !== n && v.push("".concat(ca, "--neighboringMonth")), k.createElement(tn, Yn({}, u, { classes: v, formatAbbr: l, maxDateTransform: vi, minDateTransform: Kr, view: "month" }), s(h, d));
}
var qn = globalThis && globalThis.__assign || function() {
  return qn = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, qn.apply(this, arguments);
}, us = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function zh(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.hover, n = e.showFixedNumberOfWeeks, i = e.showNeighboringMonth, s = e.value, o = e.valueType, l = us(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), u = Ja(r), f = be(t), d = zt(t), h = n || i, v = jr(t, u), g = h ? 0 : v, S = (h ? -v : 0) + 1, A = function() {
    if (n)
      return S + 6 * 7 - 1;
    var j = Mo(t);
    if (i) {
      var w = /* @__PURE__ */ new Date();
      w.setFullYear(f, d, j), w.setHours(0, 0, 0, 0);
      var R = 7 - jr(w, u) - 1;
      return j + R;
    }
    return j;
  }();
  return k.createElement(en, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(j) {
    var w = /* @__PURE__ */ new Date();
    return w.setFullYear(f, d, j), Kr(w);
  }, dateType: "day", hover: a, end: A, renderTile: function(j) {
    var w = j.date, R = us(j, ["date"]);
    return k.createElement(Mh, qn({ key: w.getTime() }, l, R, { activeStartDate: t, calendarType: r, currentMonthIndex: d, date: w }));
  }, offset: g, start: S, value: s, valueType: o });
}
var Zo = "react-calendar__month-view__weekdays", kn = "".concat(Zo, "__weekday");
function Lh(e) {
  for (var t = e.calendarType, r = e.formatShortWeekday, a = r === void 0 ? $d : r, n = e.formatWeekday, i = n === void 0 ? Bd : n, s = e.locale, o = e.onMouseLeave, l = Ja(t), u = /* @__PURE__ */ new Date(), f = Xt(u), d = be(f), h = zt(f), v = [], g = 1; g <= 7; g += 1) {
    var S = new Date(d, h, g - jr(f, l)), A = i(s, S);
    v.push(k.createElement(
      "div",
      { key: g, className: Va(kn, rh(S) && "".concat(kn, "--current"), Wo(S, l) && "".concat(kn, "--weekend")) },
      k.createElement("abbr", { "aria-label": A, title: A }, a(s, S).replace(".", ""))
    ));
  }
  return k.createElement(mi, { className: Zo, count: 7, onFocus: o, onMouseOver: o }, v);
}
var Ia = globalThis && globalThis.__assign || function() {
  return Ia = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ia.apply(this, arguments);
}, cs = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
}, fs = "react-calendar__tile";
function Ih(e) {
  var t = e.onClickWeekNumber, r = e.weekNumber, a = k.createElement("span", null, r);
  if (t) {
    var n = e.date, i = e.onClickWeekNumber, s = e.weekNumber, o = cs(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return k.createElement("button", Ia({}, o, { className: fs, onClick: function(l) {
      return i(s, n, l);
    }, type: "button" }), a);
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var o = cs(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return k.createElement("div", Ia({}, o, { className: fs }), a);
  }
}
function jh(e) {
  var t = e.activeStartDate, r = e.calendarType, a = e.onClickWeekNumber, n = e.onMouseLeave, i = e.showFixedNumberOfWeeks, s = Ja(r), o = function() {
    if (i)
      return 6;
    var f = Mo(t), d = jr(t, s), h = f - (7 - d);
    return 1 + Math.ceil(h / 7);
  }(), l = function() {
    for (var f = be(t), d = zt(t), h = Ga(t), v = [], g = 0; g < o; g += 1)
      v.push(Vn(new Date(f, d, h + g * 7), s));
    return v;
  }(), u = l.map(function(f) {
    return qd(f, s);
  });
  return k.createElement(mi, { className: "react-calendar__month-view__weekNumbers", count: o, direction: "column", onFocus: n, onMouseOver: n, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, u.map(function(f, d) {
    var h = l[d];
    if (!h)
      throw new Error("date is not defined");
    return k.createElement(Ih, { key: f, date: h, onClickWeekNumber: a, weekNumber: f });
  }));
}
var $r = globalThis && globalThis.__assign || function() {
  return $r = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, $r.apply(this, arguments);
}, Vh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
  return r;
};
function Wh(e) {
  if (e)
    for (var t = 0, r = Object.entries(Cd); t < r.length; t++) {
      var a = r[t], n = a[0], i = a[1];
      if (i.includes(e))
        return n;
    }
  return ye.ISO_8601;
}
var Yo = function(t) {
  var r = t.activeStartDate, a = t.locale, n = t.onMouseLeave, i = t.showFixedNumberOfWeeks, s = t.calendarType, o = s === void 0 ? Wh(a) : s, l = t.formatShortWeekday, u = t.formatWeekday, f = t.onClickWeekNumber, d = t.showWeekNumbers, h = Vh(t, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function v() {
    return k.createElement(Lh, { calendarType: o, formatShortWeekday: l, formatWeekday: u, locale: a, onMouseLeave: n });
  }
  function g() {
    return d ? k.createElement(jh, { activeStartDate: r, calendarType: o, onClickWeekNumber: f, onMouseLeave: n, showFixedNumberOfWeeks: i }) : null;
  }
  function S() {
    return k.createElement(zh, $r({ calendarType: o }, h));
  }
  var A = "react-calendar__month-view";
  return k.createElement(
    "div",
    { className: Va(A, d ? "".concat(A, "--weekNumbers") : "") },
    k.createElement(
      "div",
      { style: {
        display: "flex",
        alignItems: "flex-end"
      } },
      g(),
      k.createElement(
        "div",
        { style: {
          flexGrow: 1,
          width: "100%"
        } },
        v(),
        S()
      )
    )
  );
};
Yo.propTypes = $r($r({}, rn), { calendarType: $o, formatDay: b.func, formatLongDate: b.func, formatShortWeekday: b.func, formatWeekday: b.func, onClickWeekNumber: b.func, onMouseLeave: b.func, showFixedNumberOfWeeks: b.bool, showNeighboringMonth: b.bool, showWeekNumbers: b.bool });
const Fh = Yo;
var or = globalThis && globalThis.__assign || function() {
  return or = Object.assign || function(e) {
    for (var t, r = 1, a = arguments.length; r < a; r++) {
      t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, or.apply(this, arguments);
}, fa = "react-calendar", ur = ["century", "decade", "year", "month"], $h = ["decade", "year", "month", "day"], wi = /* @__PURE__ */ new Date();
wi.setFullYear(1, 0, 1);
wi.setHours(0, 0, 0, 0);
var Bh = /* @__PURE__ */ new Date(864e13);
function xr(e) {
  return e instanceof Date ? e : new Date(e);
}
function qo(e, t) {
  return ur.slice(ur.indexOf(e), ur.indexOf(t) + 1);
}
function Hh(e, t, r) {
  var a = qo(t, r);
  return a.indexOf(e) !== -1;
}
function _i(e, t, r) {
  return e && Hh(e, t, r) ? e : r;
}
function Go(e) {
  var t = ur.indexOf(e);
  return $h[t];
}
function Uh(e, t) {
  var r = Array.isArray(e) ? e[t] : e;
  if (!r)
    return null;
  var a = xr(r);
  if (isNaN(a.getTime()))
    throw new Error("Invalid date: ".concat(e));
  return a;
}
function Xo(e, t) {
  var r = e.value, a = e.minDate, n = e.maxDate, i = e.maxDetail, s = Uh(r, t);
  if (!s)
    return null;
  var o = Go(i), l = function() {
    switch (t) {
      case 0:
        return $t(o, s);
      case 1:
        return Io(o, s);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return lh(l, a, n);
}
var xi = function(e) {
  return Xo(e, 0);
}, Ko = function(e) {
  return Xo(e, 1);
}, Zh = function(e) {
  return [xi, Ko].map(function(t) {
    return t(e);
  });
};
function Qo(e) {
  var t = e.maxDate, r = e.maxDetail, a = e.minDate, n = e.minDetail, i = e.value, s = e.view, o = _i(s, n, r), l = xi({
    value: i,
    minDate: a,
    maxDate: t,
    maxDetail: r
  }) || /* @__PURE__ */ new Date();
  return $t(o, l);
}
function Yh(e) {
  var t = e.activeStartDate, r = e.defaultActiveStartDate, a = e.defaultValue, n = e.defaultView, i = e.maxDate, s = e.maxDetail, o = e.minDate, l = e.minDetail, u = e.value, f = e.view, d = _i(f, l, s), h = t || r;
  return h ? $t(d, h) : Qo({
    maxDate: i,
    maxDetail: s,
    minDate: o,
    minDetail: l,
    value: u || a,
    view: f || n
  });
}
function Tn(e) {
  return e && (!Array.isArray(e) || e.length === 1);
}
function da(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var Jo = O.forwardRef(function(t, r) {
  var a = t.activeStartDate, n = t.allowPartialRange, i = t.calendarType, s = t.className, o = t.defaultActiveStartDate, l = t.defaultValue, u = t.defaultView, f = t.formatDay, d = t.formatLongDate, h = t.formatMonth, v = t.formatMonthYear, g = t.formatShortWeekday, S = t.formatWeekday, A = t.formatYear, j = t.goToRangeStartOnSelect, w = j === void 0 ? !0 : j, R = t.inputRef, q = t.locale, B = t.maxDate, U = B === void 0 ? Bh : B, le = t.maxDetail, J = le === void 0 ? "month" : le, ae = t.minDate, G = ae === void 0 ? wi : ae, ue = t.minDetail, M = ue === void 0 ? "century" : ue, W = t.navigationAriaLabel, ee = t.navigationAriaLive, se = t.navigationLabel, he = t.next2AriaLabel, ve = t.next2Label, Fe = t.nextAriaLabel, we = t.nextLabel, ce = t.onActiveStartDateChange, Ne = t.onChange, y = t.onClickDay, _ = t.onClickDecade, E = t.onClickMonth, N = t.onClickWeekNumber, C = t.onClickYear, F = t.onDrillDown, X = t.onDrillUp, ie = t.onViewChange, ne = t.prev2AriaLabel, $e = t.prev2Label, Le = t.prevAriaLabel, Ie = t.prevLabel, de = t.returnValue, Y = de === void 0 ? "start" : de, re = t.selectRange, Be = t.showDoubleView, It = t.showFixedNumberOfWeeks, Dt = t.showNavigation, c = Dt === void 0 ? !0 : Dt, p = t.showNeighboringCentury, m = t.showNeighboringDecade, L = t.showNeighboringMonth, T = L === void 0 ? !0 : L, D = t.showWeekNumbers, H = t.tileClassName, ge = t.tileContent, Se = t.tileDisabled, Ot = t.value, mt = t.view, Qr = O.useState(o), gr = Qr[0], kt = Qr[1], Jr = O.useState(null), ea = Jr[0], ta = Jr[1], mr = O.useState(Array.isArray(l) ? l.map(function(oe) {
    return oe !== null ? xr(oe) : null;
  }) : l != null ? xr(l) : null), an = mr[0], el = mr[1], Si = O.useState(u), tl = Si[0], Di = Si[1], He = a || gr || Yh({
    activeStartDate: a,
    defaultActiveStartDate: o,
    defaultValue: l,
    defaultView: u,
    maxDate: U,
    maxDetail: J,
    minDate: G,
    minDetail: M,
    value: Ot,
    view: mt
  }), Ue = function() {
    var oe = function() {
      return re && Tn(an) ? an : Ot !== void 0 ? Ot : an;
    }();
    return oe ? Array.isArray(oe) ? oe.map(function(De) {
      return De !== null ? xr(De) : null;
    }) : oe !== null ? xr(oe) : null : null;
  }(), ra = Go(J), _e = _i(mt || tl, M, J), ut = qo(M, J), rl = re ? ea : null, nn = ut.indexOf(_e) < ut.length - 1, Oi = ut.indexOf(_e) > 0, ki = O.useCallback(function(oe) {
    var De = function() {
      switch (Y) {
        case "start":
          return xi;
        case "end":
          return Ko;
        case "range":
          return Zh;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return De({
      maxDate: U,
      maxDetail: J,
      minDate: G,
      value: oe
    });
  }, [U, J, G, Y]), sn = O.useCallback(function(oe, De) {
    kt(oe);
    var Te = {
      action: De,
      activeStartDate: oe,
      value: Ue,
      view: _e
    };
    ce && !da(He, oe) && ce(Te);
  }, [He, ce, Ue, _e]), aa = O.useCallback(function(oe, De) {
    var Te = function() {
      switch (_e) {
        case "century":
          return _;
        case "decade":
          return C;
        case "year":
          return E;
        case "month":
          return y;
        default:
          throw new Error("Invalid view: ".concat(_e, "."));
      }
    }();
    Te && Te(oe, De);
  }, [y, _, E, C, _e]), on = O.useCallback(function(oe, De) {
    if (nn) {
      aa(oe, De);
      var Te = ut[ut.indexOf(_e) + 1];
      if (!Te)
        throw new Error("Attempted to drill down from the lowest view.");
      kt(oe), Di(Te);
      var Je = {
        action: "drillDown",
        activeStartDate: oe,
        value: Ue,
        view: Te
      };
      ce && !da(He, oe) && ce(Je), ie && _e !== Te && ie(Je), F && F(Je);
    }
  }, [
    He,
    nn,
    ce,
    aa,
    F,
    ie,
    Ue,
    _e,
    ut
  ]), ln = O.useCallback(function() {
    if (Oi) {
      var oe = ut[ut.indexOf(_e) - 1];
      if (!oe)
        throw new Error("Attempted to drill up from the highest view.");
      var De = $t(oe, He);
      kt(De), Di(oe);
      var Te = {
        action: "drillUp",
        activeStartDate: De,
        value: Ue,
        view: oe
      };
      ce && !da(He, De) && ce(Te), ie && _e !== oe && ie(Te), X && X(Te);
    }
  }, [
    He,
    Oi,
    ce,
    X,
    ie,
    Ue,
    _e,
    ut
  ]), un = O.useCallback(function(oe, De) {
    var Te = Ue;
    aa(oe, De);
    var Je = re && !Tn(Te), et;
    if (re)
      if (Je)
        et = $t(ra, oe);
      else {
        if (!Te)
          throw new Error("previousValue is required");
        if (Array.isArray(Te))
          throw new Error("previousValue must not be an array");
        et = eh(ra, Te, oe);
      }
    else
      et = ki(oe);
    var fn = (
      // Range selection turned off
      !re || // Range selection turned on, first value
      Je || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      w ? Qo({
        maxDate: U,
        maxDetail: J,
        minDate: G,
        minDetail: M,
        value: et,
        view: _e
      }) : null
    );
    De.persist(), kt(fn), el(et);
    var sl = {
      action: "onChange",
      activeStartDate: fn,
      value: et,
      view: _e
    };
    if (ce && !da(He, fn) && ce(sl), Ne)
      if (re) {
        var ol = Tn(et);
        if (!ol)
          Ne(et || null, De);
        else if (n) {
          if (Array.isArray(et))
            throw new Error("value must not be an array");
          Ne([et || null, null], De);
        }
      } else
        Ne(et || null, De);
  }, [
    He,
    n,
    ki,
    w,
    U,
    J,
    G,
    M,
    ce,
    Ne,
    aa,
    re,
    Ue,
    ra,
    _e
  ]);
  function al(oe) {
    ta(oe);
  }
  function cn() {
    ta(null);
  }
  O.useImperativeHandle(r, function() {
    return {
      activeStartDate: He,
      drillDown: on,
      drillUp: ln,
      onChange: un,
      setActiveStartDate: sn,
      value: Ue,
      view: _e
    };
  }, [He, on, ln, un, sn, Ue, _e]);
  function Ti(oe) {
    var De = oe ? Lo(_e, He) : $t(_e, He), Te = nn ? on : un, Je = {
      activeStartDate: De,
      hover: rl,
      locale: q,
      maxDate: U,
      minDate: G,
      onClick: Te,
      onMouseOver: re ? al : void 0,
      tileClassName: H,
      tileContent: ge,
      tileDisabled: Se,
      value: Ue,
      valueType: ra
    };
    switch (_e) {
      case "century":
        return k.createElement(Sh, or({ formatYear: A, showNeighboringCentury: p }, Je));
      case "decade":
        return k.createElement(Th, or({ formatYear: A, showNeighboringDecade: m }, Je));
      case "year":
        return k.createElement(Rh, or({ formatMonth: h, formatMonthYear: v }, Je));
      case "month":
        return k.createElement(Fh, or({ calendarType: i, formatDay: f, formatLongDate: d, formatShortWeekday: g, formatWeekday: S, onClickWeekNumber: N, onMouseLeave: re ? cn : void 0, showFixedNumberOfWeeks: typeof It < "u" ? It : Be, showNeighboringMonth: T, showWeekNumbers: D }, Je));
      default:
        throw new Error("Invalid view: ".concat(_e, "."));
    }
  }
  function nl() {
    return c ? k.createElement(ah, { activeStartDate: He, drillUp: ln, formatMonthYear: v, formatYear: A, locale: q, maxDate: U, minDate: G, navigationAriaLabel: W, navigationAriaLive: ee, navigationLabel: se, next2AriaLabel: he, next2Label: ve, nextAriaLabel: Fe, nextLabel: we, prev2AriaLabel: ne, prev2Label: $e, prevAriaLabel: Le, prevLabel: Ie, setActiveStartDate: sn, showDoubleView: Be, view: _e, views: ut }) : null;
  }
  var il = Array.isArray(Ue) ? Ue : [Ue];
  return k.createElement(
    "div",
    { className: Va(fa, re && il.length === 1 && "".concat(fa, "--selectRange"), Be && "".concat(fa, "--doubleView"), s), ref: R },
    nl(),
    k.createElement(
      "div",
      { className: "".concat(fa, "__viewContainer"), onBlur: re ? cn : void 0, onMouseLeave: re ? cn : void 0 },
      Ti(),
      Be ? Ti(!0) : null
    )
  );
}), ds = b.instanceOf(Date), hs = b.oneOfType([b.string, b.instanceOf(Date)]), ps = b.oneOfType([hs, xh(hs)]);
Jo.propTypes = {
  activeStartDate: ds,
  allowPartialRange: b.bool,
  calendarType: $o,
  className: Ma,
  defaultActiveStartDate: ds,
  defaultValue: ps,
  defaultView: za,
  formatDay: b.func,
  formatLongDate: b.func,
  formatMonth: b.func,
  formatMonthYear: b.func,
  formatShortWeekday: b.func,
  formatWeekday: b.func,
  formatYear: b.func,
  goToRangeStartOnSelect: b.bool,
  inputRef: bh,
  locale: b.string,
  maxDate: bi,
  maxDetail: b.oneOf(ur),
  minDate: yi,
  minDetail: b.oneOf(ur),
  navigationAriaLabel: b.string,
  navigationAriaLive: b.oneOf(["off", "polite", "assertive"]),
  navigationLabel: b.func,
  next2AriaLabel: b.string,
  next2Label: b.node,
  nextAriaLabel: b.string,
  nextLabel: b.node,
  onActiveStartDateChange: b.func,
  onChange: b.func,
  onClickDay: b.func,
  onClickDecade: b.func,
  onClickMonth: b.func,
  onClickWeekNumber: b.func,
  onClickYear: b.func,
  onDrillDown: b.func,
  onDrillUp: b.func,
  onViewChange: b.func,
  prev2AriaLabel: b.string,
  prev2Label: b.node,
  prevAriaLabel: b.string,
  prevLabel: b.node,
  returnValue: b.oneOf(["start", "end", "range"]),
  selectRange: b.bool,
  showDoubleView: b.bool,
  showFixedNumberOfWeeks: b.bool,
  showNavigation: b.bool,
  showNeighboringCentury: b.bool,
  showNeighboringDecade: b.bool,
  showNeighboringMonth: b.bool,
  showWeekNumbers: b.bool,
  tileClassName: b.oneOfType([b.func, Ma]),
  tileContent: b.oneOfType([b.func, b.node]),
  tileDisabled: b.func,
  value: ps,
  view: za
};
const qh = Jo;
const Gh = xs(qh)`
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
`, Xh = ({
  error: e,
  label: t,
  open: r,
  className: a,
  onFocus: n,
  onBlur: i,
  onClick: s,
  value: o,
  onChange: l,
  ...u
}, f) => {
  const [d, h] = O.useState(null), [v, g] = O.useState(!1), [S, A] = O.useState(!1);
  O.useEffect(() => {
    r !== void 0 && g(r);
  }, [r]);
  const j = O.useCallback((U) => {
    A(!0), g(!0), n == null || n(U);
  }, [n, g]), w = O.useCallback((U) => {
    A(!1), i == null || i(U);
  }, [n, g]), R = O.useCallback((U) => {
    h(U);
  }, [h]), q = O.useMemo(() => o ? ia(o, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]).toDate() : null, [o]), B = O.useMemo(() => q ? ia(q).format("DD.MM.YYYY") : "", [q]);
  return /* @__PURE__ */ V(El, { onClickAway: () => g(!1), children: /* @__PURE__ */ qe(Fa, { className: a, label: t, error: e, children: [
    /* @__PURE__ */ V(Yr, { ...u, inputWrapRef: R, ref: f, onFocus: j, onBlur: w, value: B, onChange: (U) => {
      U.target.value ? l == null || l(ia(U.target.value, "DD.MM.YYYY").format("YYYY-MM-DD HH:mm:ss")) : l == null || l(void 0);
    }, onMouseDown: (U) => {
      S && g(!v), s == null || s(U);
    }, error: e }),
    d && /* @__PURE__ */ V(_s, { open: v, anchorEl: d, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: d
      }
    }], children: /* @__PURE__ */ V("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ V(Gh, { value: q, onChange: (U) => {
      l == null || l(ia(U).format("YYYY-MM-DD HH:mm:ss")), g(!1);
    } }) }) })
  ] }) });
}, yp = O.forwardRef(Xh), Kh = ({
  unit: e,
  error: t,
  onChange: r,
  allowFloat: a = !0,
  value: n,
  ...i
}, s) => {
  const [o, l] = O.useState(n), [u, f] = O.useState(null);
  O.useEffect(() => {
    l(n);
  }, [n]);
  const d = ws(s, f);
  return /* @__PURE__ */ V(Yr, { ...i, ref: d, error: t, value: o, onChange: (h) => {
    const v = Number(h.target.value);
    if (!isNaN(v)) {
      if (h.target.value.includes(".") && !a)
        return;
      l(h.target.value), h.target.value.slice(-1) !== "." && (r == null || r(v));
    }
  }, afterItems: [e && /* @__PURE__ */ V("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, t && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => u == null ? void 0 : u.focus(), children: e }, "unit")] });
}, bp = O.forwardRef(Kh), Qh = O.forwardRef(({
  placeholder: e = "Введите",
  ...t
}, r) => /* @__PURE__ */ V("textarea", { ref: r, placeholder: e, ...t })), Jh = ({
  error: e,
  rows: t = 5,
  ...r
}, a) => /* @__PURE__ */ V(Yr, { ...r, ref: a, rows: t, inputComponent: Qh, error: e }), wp = O.forwardRef(Jh), ep = ({
  error: e,
  ...t
}, r) => /* @__PURE__ */ V(Yr, { ...t, ref: r, error: e }), _p = O.forwardRef(ep), tp = ({
  label: e,
  error: t,
  value: r,
  helperText: a,
  className: n,
  onChange: i,
  ...s
}, o) => /* @__PURE__ */ V(Fa, { label: e, error: t, helperText: a, className: n, children: /* @__PURE__ */ qe(Cl, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...s, onChange: (l) => {
  i == null || i(l.target.value === "true");
}, ref: o, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ V(Ei, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ V(Ei, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), xp = O.forwardRef(tp), rp = xs(({
  className: e,
  ...t
}) => /* @__PURE__ */ V(Nl, { ...t, classes: {
  popper: e
} }))`
  .${Ci.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Ci.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`, ap = ({
  children: e,
  className: t,
  tooltip: r,
  icon: a,
  iconAfter: n,
  ...i
}) => {
  let s = /* @__PURE__ */ qe(Pl, { className: t, css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...i, children: [
    a && /* @__PURE__ */ V(wt, { icon: a }),
    e,
    n && /* @__PURE__ */ V(wt, { icon: n })
  ] });
  return r && (s = /* @__PURE__ */ V(rp, { title: r, arrow: !0, children: s })), s;
}, Sp = ap, Dp = oi({
  url: "/api/rest/partners",
  displayField: "name"
});
oi({
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "is_deleted",
      value: !1
    }])
  }
});
const Op = oi({
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
  Sp as B,
  ho as D,
  pp as F,
  Fa as L,
  bp as N,
  Dp as P,
  gp as R,
  Yr as T,
  _p as Y,
  qs as a,
  mp as b,
  Op as c,
  hp as d,
  yp as e,
  Xs as f,
  wp as g,
  xp as h,
  cp as i,
  oi as j,
  fp as k,
  vp as u,
  dp as z
};
