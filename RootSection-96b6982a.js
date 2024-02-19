var ka = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var Q = (e, t, r) => (ka(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ae = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, Fe = (e, t, r, n) => (ka(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var Le = (e, t, r) => (ka(e, t, "access private method"), r);
import { b as Vs, n as Rr, r as Nu, s as Au, g as Mu, u as tn, c as zu, p as Lu, a as et, j as W, f as Ws, F as kn, k as Iu } from "./library-64e31f23.js";
import { r as x, R as k, d as ju, c as Fs, g as Jn, e as mn } from "./react-54946355.js";
import { Q as Bs, d as Vu, e as Wu, g as Fu, i as Bu, j as $u, s as Yi, k as qi, w as Hu, m as Uu, n as Zu, u as $s, l as Tr, b as Yu, f as qu, c as Gu, h as yn, a as Xu } from "./useDictionary-0ecb9681.js";
import { F as kt, p as Hs, P as b } from "./icons-6b7f2986.js";
import { A as Qu, d as Ku, e as Ju, a as di, f as el, u as Us, P as Zs, n as Ys, M as tl, t as Gi, B as rl, g as nl, I as al, i as il, k as ea, C as sl, l as Xi, m as ol } from "./mui-02912ce2.js";
function Qi(e, t) {
  return e.filter((r) => !t.includes(r));
}
function ul(e, t, r) {
  const n = e.slice(0);
  return n[t] = r, n;
}
var $t, dr, hr, Ke, Gr, pr, vr, Tn, Xr, Ba, Qr, $a, Kr, Ha, Jr, Ua, Is, ll = (Is = class extends Vs {
  constructor(t, r, n) {
    super();
    Ae(this, vr);
    Ae(this, Xr);
    Ae(this, Qr);
    Ae(this, Kr);
    Ae(this, Jr);
    Ae(this, $t, void 0);
    Ae(this, dr, void 0);
    Ae(this, hr, void 0);
    Ae(this, Ke, void 0);
    Ae(this, Gr, void 0);
    Ae(this, pr, void 0);
    Fe(this, $t, t), Fe(this, hr, []), Fe(this, Ke, []), Le(this, vr, Tn).call(this, []), this.setQueries(r, n);
  }
  onSubscribe() {
    this.listeners.size === 1 && Q(this, Ke).forEach((t) => {
      t.subscribe((r) => {
        Le(this, Kr, Ha).call(this, t, r);
      });
    });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Q(this, Ke).forEach((t) => {
      t.destroy();
    });
  }
  setQueries(t, r, n) {
    Fe(this, hr, t), Fe(this, Gr, r), Rr.batch(() => {
      const a = Q(this, Ke), i = Le(this, Qr, $a).call(this, Q(this, hr));
      i.forEach(
        (l) => l.observer.setOptions(l.defaultedQueryOptions, n)
      );
      const s = i.map((l) => l.observer), o = s.map(
        (l) => l.getCurrentResult()
      ), u = s.some(
        (l, f) => l !== a[f]
      );
      a.length === s.length && !u || (Fe(this, Ke, s), Le(this, vr, Tn).call(this, o), this.hasListeners() && (Qi(a, s).forEach((l) => {
        l.destroy();
      }), Qi(s, a).forEach((l) => {
        l.subscribe((f) => {
          Le(this, Kr, Ha).call(this, l, f);
        });
      }), Le(this, Jr, Ua).call(this)));
    });
  }
  getCurrentResult() {
    return Q(this, pr);
  }
  getQueries() {
    return Q(this, Ke).map((t) => t.getCurrentQuery());
  }
  getObservers() {
    return Q(this, Ke);
  }
  getOptimisticResult(t) {
    const r = Le(this, Qr, $a).call(this, t), n = r.map(
      (a) => a.observer.getOptimisticResult(a.defaultedQueryOptions)
    );
    return [
      n,
      (a) => Le(this, Xr, Ba).call(this, a ?? n),
      () => r.map((a, i) => {
        const s = n[i];
        return a.defaultedQueryOptions.notifyOnChangeProps ? s : a.observer.trackResult(s);
      })
    ];
  }
}, $t = new WeakMap(), dr = new WeakMap(), hr = new WeakMap(), Ke = new WeakMap(), Gr = new WeakMap(), pr = new WeakMap(), vr = new WeakSet(), Tn = function(t) {
  Fe(this, dr, t), Fe(this, pr, Le(this, Xr, Ba).call(this, t));
}, Xr = new WeakSet(), Ba = function(t) {
  var n;
  const r = (n = Q(this, Gr)) == null ? void 0 : n.combine;
  return r ? Nu(Q(this, pr), r(t)) : t;
}, Qr = new WeakSet(), $a = function(t) {
  const r = Q(this, Ke), n = new Map(
    r.map((d) => [d.options.queryHash, d])
  ), a = t.map(
    (d) => Q(this, $t).defaultQueryOptions(d)
  ), i = a.flatMap((d) => {
    const h = n.get(d.queryHash);
    return h != null ? [{ defaultedQueryOptions: d, observer: h }] : [];
  }), s = new Set(
    i.map((d) => d.defaultedQueryOptions.queryHash)
  ), o = a.filter(
    (d) => !s.has(d.queryHash)
  ), u = (d) => {
    const h = Q(this, $t).defaultQueryOptions(d);
    return Q(this, Ke).find(
      (g) => g.options.queryHash === h.queryHash
    ) ?? new Bs(Q(this, $t), h);
  }, l = o.map((d) => ({
    defaultedQueryOptions: d,
    observer: u(d)
  })), f = (d, h) => a.indexOf(d.defaultedQueryOptions) - a.indexOf(h.defaultedQueryOptions);
  return i.concat(l).sort(f);
}, Kr = new WeakSet(), Ha = function(t, r) {
  const n = Q(this, Ke).indexOf(t);
  n !== -1 && (Le(this, vr, Tn).call(this, ul(Q(this, dr), n, r)), Le(this, Jr, Ua).call(this));
}, Jr = new WeakSet(), Ua = function() {
  Rr.batch(() => {
    this.listeners.forEach((t) => {
      t(Q(this, dr));
    });
  });
}, Is), Mt, Be, rt, Dt, gr, En, en, Za, js, cl = (js = class extends Vs {
  constructor(t, r) {
    super();
    Ae(this, gr);
    Ae(this, en);
    Ae(this, Mt, void 0);
    Ae(this, Be, void 0);
    Ae(this, rt, void 0);
    Ae(this, Dt, void 0);
    Fe(this, Be, void 0), Fe(this, Mt, t), this.setOptions(r), this.bindMethods(), Le(this, gr, En).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const r = this.options;
    this.options = Q(this, Mt).defaultMutationOptions(t), Au(r, this.options) || Q(this, Mt).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: Q(this, rt),
      observer: this
    }), (n = Q(this, rt)) == null || n.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = Q(this, rt)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    Le(this, gr, En).call(this), Le(this, en, Za).call(this, t);
  }
  getCurrentResult() {
    return Q(this, Be);
  }
  reset() {
    Fe(this, rt, void 0), Le(this, gr, En).call(this), Le(this, en, Za).call(this);
  }
  mutate(t, r) {
    var n;
    return Fe(this, Dt, r), (n = Q(this, rt)) == null || n.removeObserver(this), Fe(this, rt, Q(this, Mt).getMutationCache().build(Q(this, Mt), this.options)), Q(this, rt).addObserver(this), Q(this, rt).execute(t);
  }
}, Mt = new WeakMap(), Be = new WeakMap(), rt = new WeakMap(), Dt = new WeakMap(), gr = new WeakSet(), En = function() {
  var r;
  const t = ((r = Q(this, rt)) == null ? void 0 : r.state) ?? Mu();
  Fe(this, Be, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, en = new WeakSet(), Za = function(t) {
  Rr.batch(() => {
    var r, n, a, i, s, o, u, l;
    Q(this, Dt) && this.hasListeners() && ((t == null ? void 0 : t.type) === "success" ? ((n = (r = Q(this, Dt)).onSuccess) == null || n.call(
      r,
      t.data,
      Q(this, Be).variables,
      Q(this, Be).context
    ), (i = (a = Q(this, Dt)).onSettled) == null || i.call(
      a,
      t.data,
      null,
      Q(this, Be).variables,
      Q(this, Be).context
    )) : (t == null ? void 0 : t.type) === "error" && ((o = (s = Q(this, Dt)).onError) == null || o.call(
      s,
      t.error,
      Q(this, Be).variables,
      Q(this, Be).context
    ), (l = (u = Q(this, Dt)).onSettled) == null || l.call(
      u,
      void 0,
      t.error,
      Q(this, Be).variables,
      Q(this, Be).context
    ))), this.listeners.forEach((f) => {
      f(Q(this, Be));
    });
  });
}, js);
function fl({
  queries: e,
  ...t
}, r) {
  const n = tn(r), a = Vu(), i = Wu(), s = x.useMemo(
    () => e.map((w) => {
      const P = n.defaultQueryOptions(w);
      return P._optimisticResults = a ? "isRestoring" : "optimistic", P;
    }),
    [e, n, a]
  );
  s.forEach((w) => {
    Fu(w), Bu(w, i);
  }), $u(i);
  const [o] = x.useState(
    () => new ll(
      n,
      s,
      t
    )
  ), [u, l, f] = o.getOptimisticResult(s);
  x.useSyncExternalStore(
    x.useCallback(
      (w) => a ? () => {
      } : o.subscribe(Rr.batchCalls(w)),
      [o, a]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), x.useEffect(() => {
    o.setQueries(
      s,
      t,
      {
        listeners: !1
      }
    );
  }, [s, t, o]);
  const h = u.some(
    (w, P) => Yi(s[P], w)
  ) ? u.flatMap((w, P) => {
    const E = s[P];
    if (E) {
      const _ = new Bs(n, E);
      if (Yi(E, w))
        return qi(E, _, i);
      Hu(w, a) && qi(E, _, i);
    }
    return [];
  }) : [];
  if (h.length > 0)
    throw Promise.all(h);
  const v = o.getQueries(), g = u.find(
    (w, P) => {
      var E;
      return Uu({
        result: w,
        errorResetBoundary: i,
        throwOnError: ((E = s[P]) == null ? void 0 : E.throwOnError) ?? !1,
        query: v[P]
      });
    }
  );
  if (g != null && g.error)
    throw g.error;
  return l(f());
}
function dl(e, t) {
  const r = tn(t), [n] = x.useState(
    () => new cl(
      r,
      e
    )
  );
  x.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const a = x.useSyncExternalStore(
    x.useCallback(
      (s) => n.subscribe(Rr.batchCalls(s)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = x.useCallback(
    (s, o) => {
      n.mutate(s, o).catch(hl);
    },
    [n]
  );
  if (a.error && Zu(n.options.throwOnError, [a.error]))
    throw a.error;
  return { ...a, mutate: i, mutateAsync: a.mutate };
}
function hl() {
}
function qp(e, t, r) {
  let n;
  typeof e == "string" && typeof t == "string" ? n = {
    url: t,
    method: e,
    ...r
  } : typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const a = x.useMemo(() => zu(n.url, {
    encode: encodeURIComponent
  }), [n.url]), i = x.useMemo(() => Lu(n.url).reduce((v, g) => typeof g != "string" ? [...v, g.name] : v, []), [n.url]), s = $s(), {
    wrapPayload: o = !0,
    syncQueryCache: u = !1,
    ...l
  } = n, f = tn();
  return dl({
    ...l,
    mutationFn: async (h) => {
      const v = a(Tr.pick(h, ...i)), g = Tr.omit(h, ...i), w = Tr.isEmpty(g) ? void 0 : o ? {
        data: g
      } : g, {
        data: P
      } = await s.request({
        url: v,
        method: n.method || "POST",
        data: w
      });
      return P;
    },
    onSuccess: (h, v, g) => {
      var w;
      if (u) {
        const P = a(Tr.pick(v, ...i));
        f.setQueriesData({
          queryKey: [P]
        }, (E) => ({
          ...E,
          data: [h.data]
        }));
      }
      (w = l.onSuccess) == null || w.call(l, h, v, g);
    }
  });
}
const Gp = () => {
  const e = tn();
  return (t) => e.invalidateQueries({
    queryKey: [t]
  });
}, Ki = () => {
  let e, t;
  const r = new Promise((n, a) => {
    e = n, t = a;
  });
  return {
    resolve: e,
    reject: t,
    value: r
  };
}, pl = (e, t) => {
  var u;
  const r = e.name ?? `batcher:${Math.random().toString(16).slice(2)})`, n = e.scheduler ?? qs(10), a = (u = globalThis.__BATSHIT_DEVTOOLS__) == null ? void 0 : u.for(r);
  let i = t ?? {
    seq: 0,
    batch: /* @__PURE__ */ new Set(),
    currentRequest: Ki(),
    timer: void 0,
    start: null,
    latest: null
  };
  a == null || a.create({ seq: i.seq });
  const s = () => {
    i.batch = /* @__PURE__ */ new Set(), i.currentRequest = Ki(), i.timer = void 0, i.start = null, i.latest = null;
  };
  return { fetch: (l) => {
    i.start || (i.start = Date.now()), i.latest = Date.now(), i.batch.add(l), clearTimeout(i.timer);
    const f = n(i.start, i.latest, i.batch.size);
    a == null || a.queue({
      seq: i.seq,
      query: l,
      batch: [...i.batch],
      scheduled: f,
      latest: i.latest,
      start: i.start
    });
    const d = () => {
      const h = i.seq, v = e.fetcher([...i.batch]), g = i.currentRequest;
      return a == null || a.fetch({ seq: h, batch: [...i.batch] }), s(), v.then((w) => {
        a == null || a.data({ seq: h, data: w }), g.resolve(w);
      }).catch((w) => {
        a == null || a.error({ seq: h, error: w }), g.reject(w);
      }), i.seq++, v;
    };
    if (f === "immediate") {
      const h = i.currentRequest;
      return d(), h.value.then((v) => e.resolver(v, l));
    } else
      return f === "never" ? i.currentRequest.value.then((h) => e.resolver(h, l)) : (i.timer = setTimeout(d, f), i.currentRequest.value.then((h) => e.resolver(h, l)));
  } };
}, vl = (e) => (t, r) => t.find((n) => n[e] == r), qs = (e) => (t, r) => {
  const n = r - t;
  return e - n;
}, gl = ({
  url: e,
  idField: t,
  params: r
}) => {
  const n = $s();
  return x.useMemo(() => pl({
    fetcher: async (a) => {
      const {
        data: {
          data: i
        }
      } = await n.get(e, {
        params: {
          ...r,
          id: a.join(",")
        }
      });
      return i;
    },
    resolver: vl(t),
    scheduler: qs(10)
  }), [e, r]);
}, ml = ({
  idField: e,
  value: t,
  url: r,
  params: n
}) => {
  const a = gl({
    url: r,
    idField: e,
    params: n
  });
  return fl({
    queries: t.map((s) => ({
      queryFn: () => a.fetch(s),
      queryKey: [r, "item", s],
      staleTime: 12e4
    })),
    combine: (s) => ({
      records: s.map((o) => o.data).filter((o) => !!o),
      isLoading: !!s.find((o) => o.isLoading)
    })
  });
}, yl = (e, t = "id") => {
  const r = tn();
  return (n) => {
    r.setQueryData([e, "item", n[t]], n);
  };
};
function bl(e, t) {
  const [r, n] = x.useState(e);
  return x.useEffect(() => {
    const a = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(a);
    };
  }, [e, t]), r;
}
function Xp() {
  const [e, t] = x.useState({
    width: null,
    height: null
  });
  return x.useLayoutEffect(() => {
    const r = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}
var ce;
(function(e) {
  e.assertEqual = (a) => a;
  function t(a) {
  }
  e.assertIs = t;
  function r(a) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (a) => {
    const i = {};
    for (const s of a)
      i[s] = s;
    return i;
  }, e.getValidEnumValues = (a) => {
    const i = e.objectKeys(a).filter((o) => typeof a[a[o]] != "number"), s = {};
    for (const o of i)
      s[o] = a[o];
    return e.objectValues(s);
  }, e.objectValues = (a) => e.objectKeys(a).map(function(i) {
    return a[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const i = [];
    for (const s in a)
      Object.prototype.hasOwnProperty.call(a, s) && i.push(s);
    return i;
  }, e.find = (a, i) => {
    for (const s of a)
      if (i(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  function n(a, i = " | ") {
    return a.map((s) => typeof s == "string" ? `'${s}'` : s).join(i);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (a, i) => typeof i == "bigint" ? i.toString() : i;
})(ce || (ce = {}));
var Ya;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ya || (Ya = {}));
const z = ce.arrayToEnum([
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
]), At = (e) => {
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
}, D = ce.arrayToEnum([
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
]), wl = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class ft extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
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
    }, n = { _errors: [] }, a = (i) => {
      for (const s of i.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(a);
        else if (s.code === "invalid_return_type")
          a(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          a(s.argumentsError);
        else if (s.path.length === 0)
          n._errors.push(r(s));
        else {
          let o = n, u = 0;
          for (; u < s.path.length; ) {
            const l = s.path[u];
            u === s.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(s))) : o[l] = o[l] || { _errors: [] }, o = o[l], u++;
          }
        }
    };
    return a(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ce.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, n = [];
    for (const a of this.issues)
      a.path.length > 0 ? (r[a.path[0]] = r[a.path[0]] || [], r[a.path[0]].push(t(a))) : n.push(t(a));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
ft.create = (e) => new ft(e);
const Pr = (e, t) => {
  let r;
  switch (e.code) {
    case D.invalid_type:
      e.received === z.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case D.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, ce.jsonStringifyReplacer)}`;
      break;
    case D.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${ce.joinValues(e.keys, ", ")}`;
      break;
    case D.invalid_union:
      r = "Invalid input";
      break;
    case D.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${ce.joinValues(e.options)}`;
      break;
    case D.invalid_enum_value:
      r = `Invalid enum value. Expected ${ce.joinValues(e.options)}, received '${e.received}'`;
      break;
    case D.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case D.invalid_return_type:
      r = "Invalid function return type";
      break;
    case D.invalid_date:
      r = "Invalid date";
      break;
    case D.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : ce.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case D.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case D.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case D.custom:
      r = "Invalid input";
      break;
    case D.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case D.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case D.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, ce.assertNever(e);
  }
  return { message: r };
};
let Gs = Pr;
function _l(e) {
  Gs = e;
}
function Nn() {
  return Gs;
}
const An = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: a } = e, i = [...r, ...a.path || []], s = {
    ...a,
    path: i
  };
  let o = "";
  const u = n.filter((l) => !!l).slice().reverse();
  for (const l of u)
    o = l(s, { data: t, defaultError: o }).message;
  return {
    ...a,
    path: i,
    message: a.message || o
  };
}, xl = [];
function j(e, t) {
  const r = An({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Nn(),
      Pr
      // then global default map
    ].filter((n) => !!n)
  });
  e.common.issues.push(r);
}
class We {
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
    const n = [];
    for (const a of r) {
      if (a.status === "aborted")
        return K;
      a.status === "dirty" && t.dirty(), n.push(a.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const a of r)
      n.push({
        key: await a.key,
        value: await a.value
      });
    return We.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const a of r) {
      const { key: i, value: s } = a;
      if (i.status === "aborted" || s.status === "aborted")
        return K;
      i.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof s.value < "u" || a.alwaysSet) && (n[i.value] = s.value);
    }
    return { status: t.value, value: n };
  }
}
const K = Object.freeze({
  status: "aborted"
}), Xs = (e) => ({ status: "dirty", value: e }), He = (e) => ({ status: "valid", value: e }), qa = (e) => e.status === "aborted", Ga = (e) => e.status === "dirty", Nr = (e) => e.status === "valid", Mn = (e) => typeof Promise < "u" && e instanceof Promise;
var B;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(B || (B = {}));
class yt {
  constructor(t, r, n, a) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = a;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ji = (e, t) => {
  if (Nr(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new ft(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ee(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: a } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: a } : { errorMap: (s, o) => s.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: a };
}
class re {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return At(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: At(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new We(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: At(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Mn(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    var n;
    const a = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: At(t)
    }, i = this._parseSync({ data: t, path: a.path, parent: a });
    return Ji(a, i);
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: At(t)
    }, a = this._parse({ data: t, path: n.path, parent: n }), i = await (Mn(a) ? a : Promise.resolve(a));
    return Ji(n, i);
  }
  refine(t, r) {
    const n = (a) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(a) : r;
    return this._refinement((a, i) => {
      const s = t(a), o = () => i.addIssue({
        code: D.custom,
        ...n(a)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((u) => u ? !0 : (o(), !1)) : s ? !0 : (o(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, a) => t(n) ? !0 : (a.addIssue(typeof r == "function" ? r(n, a) : r), !1));
  }
  _refinement(t) {
    return new ht({
      schema: this,
      typeName: Y.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Ot.create(this, this._def);
  }
  nullable() {
    return qt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return dt.create(this, this._def);
  }
  promise() {
    return yr.create(this, this._def);
  }
  or(t) {
    return Lr.create([this, t], this._def);
  }
  and(t) {
    return Ir.create(this, t, this._def);
  }
  transform(t) {
    return new ht({
      ...ee(this._def),
      schema: this,
      typeName: Y.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Br({
      ...ee(this._def),
      innerType: this,
      defaultValue: r,
      typeName: Y.ZodDefault
    });
  }
  brand() {
    return new Ks({
      typeName: Y.ZodBranded,
      type: this,
      ...ee(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new jn({
      ...ee(this._def),
      innerType: this,
      catchValue: r,
      typeName: Y.ZodCatch
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
    return rn.create(this, t);
  }
  readonly() {
    return Wn.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Sl = /^c[^\s-]{8,}$/i, Dl = /^[a-z][a-z0-9]*$/, Ol = /^[0-9A-HJKMNP-TV-Z]{26}$/, kl = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Tl = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, El = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ta;
const Cl = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Rl = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Pl = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Nl(e, t) {
  return !!((t === "v4" || !t) && Cl.test(e) || (t === "v6" || !t) && Rl.test(e));
}
class ct extends re {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== z.string) {
      const i = this._getOrReturnCtx(t);
      return j(
        i,
        {
          code: D.invalid_type,
          expected: z.string,
          received: i.parsedType
        }
        //
      ), K;
    }
    const n = new We();
    let a;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (a = this._getOrReturnCtx(t, a), j(a, {
          code: D.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (a = this._getOrReturnCtx(t, a), j(a, {
          code: D.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const s = t.data.length > i.value, o = t.data.length < i.value;
        (s || o) && (a = this._getOrReturnCtx(t, a), s ? j(a, {
          code: D.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : o && j(a, {
          code: D.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        Tl.test(t.data) || (a = this._getOrReturnCtx(t, a), j(a, {
          validation: "email",
          code: D.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        Ta || (Ta = new RegExp(El, "u")), Ta.test(t.data) || (a = this._getOrReturnCtx(t, a), j(a, {
          validation: "emoji",
          code: D.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        kl.test(t.data) || (a = this._getOrReturnCtx(t, a), j(a, {
          validation: "uuid",
          code: D.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        Sl.test(t.data) || (a = this._getOrReturnCtx(t, a), j(a, {
          validation: "cuid",
          code: D.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        Dl.test(t.data) || (a = this._getOrReturnCtx(t, a), j(a, {
          validation: "cuid2",
          code: D.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        Ol.test(t.data) || (a = this._getOrReturnCtx(t, a), j(a, {
          validation: "ulid",
          code: D.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          a = this._getOrReturnCtx(t, a), j(a, {
            validation: "url",
            code: D.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (a = this._getOrReturnCtx(t, a), j(a, {
          validation: "regex",
          code: D.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (a = this._getOrReturnCtx(t, a), j(a, {
          code: D.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (a = this._getOrReturnCtx(t, a), j(a, {
          code: D.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (a = this._getOrReturnCtx(t, a), j(a, {
          code: D.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? Pl(i).test(t.data) || (a = this._getOrReturnCtx(t, a), j(a, {
          code: D.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? Nl(t.data, i.version) || (a = this._getOrReturnCtx(t, a), j(a, {
          validation: "ip",
          code: D.invalid_string,
          message: i.message
        }), n.dirty()) : ce.assertNever(i);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((a) => t.test(a), {
      validation: r,
      code: D.invalid_string,
      ...B.errToObj(n)
    });
  }
  _addCheck(t) {
    return new ct({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...B.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...B.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...B.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...B.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...B.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...B.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...B.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...B.errToObj(t) });
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
      ...B.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...B.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...B.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...B.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...B.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...B.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...B.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...B.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, B.errToObj(t));
  }
  trim() {
    return new ct({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ct({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ct({
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
ct.create = (e) => {
  var t;
  return new ct({
    checks: [],
    typeName: Y.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ee(e)
  });
};
function Al(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, a = r > n ? r : n, i = parseInt(e.toFixed(a).replace(".", "")), s = parseInt(t.toFixed(a).replace(".", ""));
  return i % s / Math.pow(10, a);
}
class Lt extends re {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== z.number) {
      const i = this._getOrReturnCtx(t);
      return j(i, {
        code: D.invalid_type,
        expected: z.number,
        received: i.parsedType
      }), K;
    }
    let n;
    const a = new We();
    for (const i of this._def.checks)
      i.kind === "int" ? ce.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), j(n, {
        code: D.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), a.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n), j(n, {
        code: D.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), a.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n), j(n, {
        code: D.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), a.dirty()) : i.kind === "multipleOf" ? Al(t.data, i.value) !== 0 && (n = this._getOrReturnCtx(t, n), j(n, {
        code: D.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), a.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), j(n, {
        code: D.not_finite,
        message: i.message
      }), a.dirty()) : ce.assertNever(i);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, B.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, B.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, B.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, B.toString(r));
  }
  setLimit(t, r, n, a) {
    return new Lt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: B.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Lt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: B.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: B.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: B.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: B.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: B.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: B.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: B.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: B.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: B.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ce.isInteger(t.value));
  }
  get isFinite() {
    let t = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
Lt.create = (e) => new Lt({
  checks: [],
  typeName: Y.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ee(e)
});
class It extends re {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== z.bigint) {
      const i = this._getOrReturnCtx(t);
      return j(i, {
        code: D.invalid_type,
        expected: z.bigint,
        received: i.parsedType
      }), K;
    }
    let n;
    const a = new We();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n), j(n, {
        code: D.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), a.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n), j(n, {
        code: D.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), a.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), j(n, {
        code: D.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), a.dirty()) : ce.assertNever(i);
    return { status: a.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, B.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, B.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, B.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, B.toString(r));
  }
  setLimit(t, r, n, a) {
    return new It({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: B.toString(a)
        }
      ]
    });
  }
  _addCheck(t) {
    return new It({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: B.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: B.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: B.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: B.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: B.toString(r)
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
It.create = (e) => {
  var t;
  return new It({
    checks: [],
    typeName: Y.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ee(e)
  });
};
class Ar extends re {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== z.boolean) {
      const n = this._getOrReturnCtx(t);
      return j(n, {
        code: D.invalid_type,
        expected: z.boolean,
        received: n.parsedType
      }), K;
    }
    return He(t.data);
  }
}
Ar.create = (e) => new Ar({
  typeName: Y.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ee(e)
});
class Zt extends re {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== z.date) {
      const i = this._getOrReturnCtx(t);
      return j(i, {
        code: D.invalid_type,
        expected: z.date,
        received: i.parsedType
      }), K;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return j(i, {
        code: D.invalid_date
      }), K;
    }
    const n = new We();
    let a;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (a = this._getOrReturnCtx(t, a), j(a, {
        code: D.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (a = this._getOrReturnCtx(t, a), j(a, {
        code: D.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : ce.assertNever(i);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: B.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: B.toString(r)
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
Zt.create = (e) => new Zt({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Y.ZodDate,
  ...ee(e)
});
class zn extends re {
  _parse(t) {
    if (this._getType(t) !== z.symbol) {
      const n = this._getOrReturnCtx(t);
      return j(n, {
        code: D.invalid_type,
        expected: z.symbol,
        received: n.parsedType
      }), K;
    }
    return He(t.data);
  }
}
zn.create = (e) => new zn({
  typeName: Y.ZodSymbol,
  ...ee(e)
});
class Mr extends re {
  _parse(t) {
    if (this._getType(t) !== z.undefined) {
      const n = this._getOrReturnCtx(t);
      return j(n, {
        code: D.invalid_type,
        expected: z.undefined,
        received: n.parsedType
      }), K;
    }
    return He(t.data);
  }
}
Mr.create = (e) => new Mr({
  typeName: Y.ZodUndefined,
  ...ee(e)
});
class zr extends re {
  _parse(t) {
    if (this._getType(t) !== z.null) {
      const n = this._getOrReturnCtx(t);
      return j(n, {
        code: D.invalid_type,
        expected: z.null,
        received: n.parsedType
      }), K;
    }
    return He(t.data);
  }
}
zr.create = (e) => new zr({
  typeName: Y.ZodNull,
  ...ee(e)
});
class mr extends re {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return He(t.data);
  }
}
mr.create = (e) => new mr({
  typeName: Y.ZodAny,
  ...ee(e)
});
class Ht extends re {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return He(t.data);
  }
}
Ht.create = (e) => new Ht({
  typeName: Y.ZodUnknown,
  ...ee(e)
});
class Tt extends re {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return j(r, {
      code: D.invalid_type,
      expected: z.never,
      received: r.parsedType
    }), K;
  }
}
Tt.create = (e) => new Tt({
  typeName: Y.ZodNever,
  ...ee(e)
});
class Ln extends re {
  _parse(t) {
    if (this._getType(t) !== z.undefined) {
      const n = this._getOrReturnCtx(t);
      return j(n, {
        code: D.invalid_type,
        expected: z.void,
        received: n.parsedType
      }), K;
    }
    return He(t.data);
  }
}
Ln.create = (e) => new Ln({
  typeName: Y.ZodVoid,
  ...ee(e)
});
class dt extends re {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), a = this._def;
    if (r.parsedType !== z.array)
      return j(r, {
        code: D.invalid_type,
        expected: z.array,
        received: r.parsedType
      }), K;
    if (a.exactLength !== null) {
      const s = r.data.length > a.exactLength.value, o = r.data.length < a.exactLength.value;
      (s || o) && (j(r, {
        code: s ? D.too_big : D.too_small,
        minimum: o ? a.exactLength.value : void 0,
        maximum: s ? a.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: a.exactLength.message
      }), n.dirty());
    }
    if (a.minLength !== null && r.data.length < a.minLength.value && (j(r, {
      code: D.too_small,
      minimum: a.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.minLength.message
    }), n.dirty()), a.maxLength !== null && r.data.length > a.maxLength.value && (j(r, {
      code: D.too_big,
      maximum: a.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: a.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((s, o) => a.type._parseAsync(new yt(r, s, r.path, o)))).then((s) => We.mergeArray(n, s));
    const i = [...r.data].map((s, o) => a.type._parseSync(new yt(r, s, r.path, o)));
    return We.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new dt({
      ...this._def,
      minLength: { value: t, message: B.toString(r) }
    });
  }
  max(t, r) {
    return new dt({
      ...this._def,
      maxLength: { value: t, message: B.toString(r) }
    });
  }
  length(t, r) {
    return new dt({
      ...this._def,
      exactLength: { value: t, message: B.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
dt.create = (e, t) => new dt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Y.ZodArray,
  ...ee(t)
});
function ar(e) {
  if (e instanceof _e) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = Ot.create(ar(n));
    }
    return new _e({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof dt ? new dt({
      ...e._def,
      type: ar(e.element)
    }) : e instanceof Ot ? Ot.create(ar(e.unwrap())) : e instanceof qt ? qt.create(ar(e.unwrap())) : e instanceof bt ? bt.create(e.items.map((t) => ar(t))) : e;
}
class _e extends re {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = ce.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== z.object) {
      const l = this._getOrReturnCtx(t);
      return j(l, {
        code: D.invalid_type,
        expected: z.object,
        received: l.parsedType
      }), K;
    }
    const { status: n, ctx: a } = this._processInputParams(t), { shape: i, keys: s } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Tt && this._def.unknownKeys === "strip"))
      for (const l in a.data)
        s.includes(l) || o.push(l);
    const u = [];
    for (const l of s) {
      const f = i[l], d = a.data[l];
      u.push({
        key: { status: "valid", value: l },
        value: f._parse(new yt(a, d, a.path, l)),
        alwaysSet: l in a.data
      });
    }
    if (this._def.catchall instanceof Tt) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const f of o)
          u.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: a.data[f] }
          });
      else if (l === "strict")
        o.length > 0 && (j(a, {
          code: D.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const f of o) {
        const d = a.data[f];
        u.push({
          key: { status: "valid", value: f },
          value: l._parse(
            new yt(a, d, a.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in a.data
        });
      }
    }
    return a.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const f of u) {
        const d = await f.key;
        l.push({
          key: d,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return l;
    }).then((l) => We.mergeObjectSync(n, l)) : We.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return B.errToObj, new _e({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var a, i, s, o;
          const u = (s = (i = (a = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(a, r, n).message) !== null && s !== void 0 ? s : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = B.errToObj(t).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new _e({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _e({
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
    return new _e({
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
    return new _e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Y.ZodObject
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
    return new _e({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return ce.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new _e({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return ce.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new _e({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ar(this);
  }
  partial(t) {
    const r = {};
    return ce.objectKeys(this.shape).forEach((n) => {
      const a = this.shape[n];
      t && !t[n] ? r[n] = a : r[n] = a.optional();
    }), new _e({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return ce.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof Ot; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new _e({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Qs(ce.objectKeys(this.shape));
  }
}
_e.create = (e, t) => new _e({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Tt.create(),
  typeName: Y.ZodObject,
  ...ee(t)
});
_e.strictCreate = (e, t) => new _e({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Tt.create(),
  typeName: Y.ZodObject,
  ...ee(t)
});
_e.lazycreate = (e, t) => new _e({
  shape: e,
  unknownKeys: "strip",
  catchall: Tt.create(),
  typeName: Y.ZodObject,
  ...ee(t)
});
class Lr extends re {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function a(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const s = i.map((o) => new ft(o.ctx.common.issues));
      return j(r, {
        code: D.invalid_union,
        unionErrors: s
      }), K;
    }
    if (r.common.async)
      return Promise.all(n.map(async (i) => {
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
      })).then(a);
    {
      let i;
      const s = [];
      for (const u of n) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, f = u._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !i && (i = { result: f, ctx: l }), l.common.issues.length && s.push(l.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = s.map((u) => new ft(u));
      return j(r, {
        code: D.invalid_union,
        unionErrors: o
      }), K;
    }
  }
  get options() {
    return this._def.options;
  }
}
Lr.create = (e, t) => new Lr({
  options: e,
  typeName: Y.ZodUnion,
  ...ee(t)
});
const Cn = (e) => e instanceof Vr ? Cn(e.schema) : e instanceof ht ? Cn(e.innerType()) : e instanceof Wr ? [e.value] : e instanceof jt ? e.options : e instanceof Fr ? Object.keys(e.enum) : e instanceof Br ? Cn(e._def.innerType) : e instanceof Mr ? [void 0] : e instanceof zr ? [null] : null;
class ta extends re {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.object)
      return j(r, {
        code: D.invalid_type,
        expected: z.object,
        received: r.parsedType
      }), K;
    const n = this.discriminator, a = r.data[n], i = this.optionsMap.get(a);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (j(r, {
      code: D.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
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
  static create(t, r, n) {
    const a = /* @__PURE__ */ new Map();
    for (const i of r) {
      const s = Cn(i.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const o of s) {
        if (a.has(o))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(o)}`);
        a.set(o, i);
      }
    }
    return new ta({
      typeName: Y.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: a,
      ...ee(n)
    });
  }
}
function Xa(e, t) {
  const r = At(e), n = At(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === z.object && n === z.object) {
    const a = ce.objectKeys(t), i = ce.objectKeys(e).filter((o) => a.indexOf(o) !== -1), s = { ...e, ...t };
    for (const o of i) {
      const u = Xa(e[o], t[o]);
      if (!u.valid)
        return { valid: !1 };
      s[o] = u.data;
    }
    return { valid: !0, data: s };
  } else if (r === z.array && n === z.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const a = [];
    for (let i = 0; i < e.length; i++) {
      const s = e[i], o = t[i], u = Xa(s, o);
      if (!u.valid)
        return { valid: !1 };
      a.push(u.data);
    }
    return { valid: !0, data: a };
  } else
    return r === z.date && n === z.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ir extends re {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = (i, s) => {
      if (qa(i) || qa(s))
        return K;
      const o = Xa(i.value, s.value);
      return o.valid ? ((Ga(i) || Ga(s)) && r.dirty(), { status: r.value, value: o.data }) : (j(n, {
        code: D.invalid_intersection_types
      }), K);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([i, s]) => a(i, s)) : a(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Ir.create = (e, t, r) => new Ir({
  left: e,
  right: t,
  typeName: Y.ZodIntersection,
  ...ee(r)
});
class bt extends re {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.array)
      return j(n, {
        code: D.invalid_type,
        expected: z.array,
        received: n.parsedType
      }), K;
    if (n.data.length < this._def.items.length)
      return j(n, {
        code: D.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), K;
    !this._def.rest && n.data.length > this._def.items.length && (j(n, {
      code: D.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((s, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new yt(n, s, n.path, o)) : null;
    }).filter((s) => !!s);
    return n.common.async ? Promise.all(i).then((s) => We.mergeArray(r, s)) : We.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new bt({
      ...this._def,
      rest: t
    });
  }
}
bt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new bt({
    items: e,
    typeName: Y.ZodTuple,
    rest: null,
    ...ee(t)
  });
};
class jr extends re {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.object)
      return j(n, {
        code: D.invalid_type,
        expected: z.object,
        received: n.parsedType
      }), K;
    const a = [], i = this._def.keyType, s = this._def.valueType;
    for (const o in n.data)
      a.push({
        key: i._parse(new yt(n, o, n.path, o)),
        value: s._parse(new yt(n, n.data[o], n.path, o))
      });
    return n.common.async ? We.mergeObjectAsync(r, a) : We.mergeObjectSync(r, a);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof re ? new jr({
      keyType: t,
      valueType: r,
      typeName: Y.ZodRecord,
      ...ee(n)
    }) : new jr({
      keyType: ct.create(),
      valueType: t,
      typeName: Y.ZodRecord,
      ...ee(r)
    });
  }
}
class In extends re {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.map)
      return j(n, {
        code: D.invalid_type,
        expected: z.map,
        received: n.parsedType
      }), K;
    const a = this._def.keyType, i = this._def.valueType, s = [...n.data.entries()].map(([o, u], l) => ({
      key: a._parse(new yt(n, o, n.path, [l, "key"])),
      value: i._parse(new yt(n, u, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of s) {
          const l = await u.key, f = await u.value;
          if (l.status === "aborted" || f.status === "aborted")
            return K;
          (l.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(l.value, f.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of s) {
        const l = u.key, f = u.value;
        if (l.status === "aborted" || f.status === "aborted")
          return K;
        (l.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(l.value, f.value);
      }
      return { status: r.value, value: o };
    }
  }
}
In.create = (e, t, r) => new In({
  valueType: t,
  keyType: e,
  typeName: Y.ZodMap,
  ...ee(r)
});
class Yt extends re {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== z.set)
      return j(n, {
        code: D.invalid_type,
        expected: z.set,
        received: n.parsedType
      }), K;
    const a = this._def;
    a.minSize !== null && n.data.size < a.minSize.value && (j(n, {
      code: D.too_small,
      minimum: a.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.minSize.message
    }), r.dirty()), a.maxSize !== null && n.data.size > a.maxSize.value && (j(n, {
      code: D.too_big,
      maximum: a.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: a.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function s(u) {
      const l = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f.status === "aborted")
          return K;
        f.status === "dirty" && r.dirty(), l.add(f.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...n.data.values()].map((u, l) => i._parse(new yt(n, u, n.path, l)));
    return n.common.async ? Promise.all(o).then((u) => s(u)) : s(o);
  }
  min(t, r) {
    return new Yt({
      ...this._def,
      minSize: { value: t, message: B.toString(r) }
    });
  }
  max(t, r) {
    return new Yt({
      ...this._def,
      maxSize: { value: t, message: B.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Yt.create = (e, t) => new Yt({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Y.ZodSet,
  ...ee(t)
});
class cr extends re {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.function)
      return j(r, {
        code: D.invalid_type,
        expected: z.function,
        received: r.parsedType
      }), K;
    function n(o, u) {
      return An({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Nn(),
          Pr
        ].filter((l) => !!l),
        issueData: {
          code: D.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function a(o, u) {
      return An({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Nn(),
          Pr
        ].filter((l) => !!l),
        issueData: {
          code: D.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, s = r.data;
    if (this._def.returns instanceof yr) {
      const o = this;
      return He(async function(...u) {
        const l = new ft([]), f = await o._def.args.parseAsync(u, i).catch((v) => {
          throw l.addIssue(n(u, v)), l;
        }), d = await Reflect.apply(s, this, f);
        return await o._def.returns._def.type.parseAsync(d, i).catch((v) => {
          throw l.addIssue(a(d, v)), l;
        });
      });
    } else {
      const o = this;
      return He(function(...u) {
        const l = o._def.args.safeParse(u, i);
        if (!l.success)
          throw new ft([n(u, l.error)]);
        const f = Reflect.apply(s, this, l.data), d = o._def.returns.safeParse(f, i);
        if (!d.success)
          throw new ft([a(f, d.error)]);
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
    return new cr({
      ...this._def,
      args: bt.create(t).rest(Ht.create())
    });
  }
  returns(t) {
    return new cr({
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
  static create(t, r, n) {
    return new cr({
      args: t || bt.create([]).rest(Ht.create()),
      returns: r || Ht.create(),
      typeName: Y.ZodFunction,
      ...ee(n)
    });
  }
}
class Vr extends re {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Vr.create = (e, t) => new Vr({
  getter: e,
  typeName: Y.ZodLazy,
  ...ee(t)
});
class Wr extends re {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return j(r, {
        received: r.data,
        code: D.invalid_literal,
        expected: this._def.value
      }), K;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Wr.create = (e, t) => new Wr({
  value: e,
  typeName: Y.ZodLiteral,
  ...ee(t)
});
function Qs(e, t) {
  return new jt({
    values: e,
    typeName: Y.ZodEnum,
    ...ee(t)
  });
}
class jt extends re {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return j(r, {
        expected: ce.joinValues(n),
        received: r.parsedType,
        code: D.invalid_type
      }), K;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return j(r, {
        received: r.data,
        code: D.invalid_enum_value,
        options: n
      }), K;
    }
    return He(t.data);
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
    return jt.create(t);
  }
  exclude(t) {
    return jt.create(this.options.filter((r) => !t.includes(r)));
  }
}
jt.create = Qs;
class Fr extends re {
  _parse(t) {
    const r = ce.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== z.string && n.parsedType !== z.number) {
      const a = ce.objectValues(r);
      return j(n, {
        expected: ce.joinValues(a),
        received: n.parsedType,
        code: D.invalid_type
      }), K;
    }
    if (r.indexOf(t.data) === -1) {
      const a = ce.objectValues(r);
      return j(n, {
        received: n.data,
        code: D.invalid_enum_value,
        options: a
      }), K;
    }
    return He(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Fr.create = (e, t) => new Fr({
  values: e,
  typeName: Y.ZodNativeEnum,
  ...ee(t)
});
class yr extends re {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== z.promise && r.common.async === !1)
      return j(r, {
        code: D.invalid_type,
        expected: z.promise,
        received: r.parsedType
      }), K;
    const n = r.parsedType === z.promise ? r.data : Promise.resolve(r.data);
    return He(n.then((a) => this._def.type.parseAsync(a, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
yr.create = (e, t) => new yr({
  type: e,
  typeName: Y.ZodPromise,
  ...ee(t)
});
class ht extends re {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Y.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), a = this._def.effect || null, i = {
      addIssue: (s) => {
        j(n, s), s.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), a.type === "preprocess") {
      const s = a.transform(n.data, i);
      return n.common.issues.length ? {
        status: "dirty",
        value: n.data
      } : n.common.async ? Promise.resolve(s).then((o) => this._def.schema._parseAsync({
        data: o,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: s,
        path: n.path,
        parent: n
      });
    }
    if (a.type === "refinement") {
      const s = (o) => {
        const u = a.refinement(o, i);
        if (n.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? K : (o.status === "dirty" && r.dirty(), s(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? K : (o.status === "dirty" && r.dirty(), s(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (a.type === "transform")
      if (n.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Nr(s))
          return s;
        const o = a.transform(s.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((s) => Nr(s) ? Promise.resolve(a.transform(s.value, i)).then((o) => ({ status: r.value, value: o })) : s);
    ce.assertNever(a);
  }
}
ht.create = (e, t, r) => new ht({
  schema: e,
  typeName: Y.ZodEffects,
  effect: t,
  ...ee(r)
});
ht.createWithPreprocess = (e, t, r) => new ht({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Y.ZodEffects,
  ...ee(r)
});
class Ot extends re {
  _parse(t) {
    return this._getType(t) === z.undefined ? He(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ot.create = (e, t) => new Ot({
  innerType: e,
  typeName: Y.ZodOptional,
  ...ee(t)
});
class qt extends re {
  _parse(t) {
    return this._getType(t) === z.null ? He(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
qt.create = (e, t) => new qt({
  innerType: e,
  typeName: Y.ZodNullable,
  ...ee(t)
});
class Br extends re {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === z.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Br.create = (e, t) => new Br({
  innerType: e,
  typeName: Y.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ee(t)
});
class jn extends re {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, a = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Mn(a) ? a.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new ft(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new ft(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
jn.create = (e, t) => new jn({
  innerType: e,
  typeName: Y.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ee(t)
});
class Vn extends re {
  _parse(t) {
    if (this._getType(t) !== z.nan) {
      const n = this._getOrReturnCtx(t);
      return j(n, {
        code: D.invalid_type,
        expected: z.nan,
        received: n.parsedType
      }), K;
    }
    return { status: "valid", value: t.data };
  }
}
Vn.create = (e) => new Vn({
  typeName: Y.ZodNaN,
  ...ee(e)
});
const Ml = Symbol("zod_brand");
class Ks extends re {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class rn extends re {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? K : i.status === "dirty" ? (r.dirty(), Xs(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const a = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return a.status === "aborted" ? K : a.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: a.value
      }) : this._def.out._parseSync({
        data: a.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, r) {
    return new rn({
      in: t,
      out: r,
      typeName: Y.ZodPipeline
    });
  }
}
class Wn extends re {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return Nr(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Wn.create = (e, t) => new Wn({
  innerType: e,
  typeName: Y.ZodReadonly,
  ...ee(t)
});
const Js = (e, t = {}, r) => e ? mr.create().superRefine((n, a) => {
  var i, s;
  if (!e(n)) {
    const o = typeof t == "function" ? t(n) : typeof t == "string" ? { message: t } : t, u = (s = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && s !== void 0 ? s : !0, l = typeof o == "string" ? { message: o } : o;
    a.addIssue({ code: "custom", ...l, fatal: u });
  }
}) : mr.create(), zl = {
  object: _e.lazycreate
};
var Y;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Y || (Y = {}));
const Ll = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Js((r) => r instanceof e, t), eo = ct.create, to = Lt.create, Il = Vn.create, jl = It.create, ro = Ar.create, Vl = Zt.create, Wl = zn.create, Fl = Mr.create, Bl = zr.create, $l = mr.create, Hl = Ht.create, Ul = Tt.create, Zl = Ln.create, Yl = dt.create, ql = _e.create, Gl = _e.strictCreate, Xl = Lr.create, Ql = ta.create, Kl = Ir.create, Jl = bt.create, ec = jr.create, tc = In.create, rc = Yt.create, nc = cr.create, ac = Vr.create, ic = Wr.create, sc = jt.create, oc = Fr.create, uc = yr.create, es = ht.create, lc = Ot.create, cc = qt.create, fc = ht.createWithPreprocess, dc = rn.create, hc = () => eo().optional(), pc = () => to().optional(), vc = () => ro().optional(), gc = {
  string: (e) => ct.create({ ...e, coerce: !0 }),
  number: (e) => Lt.create({ ...e, coerce: !0 }),
  boolean: (e) => Ar.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => It.create({ ...e, coerce: !0 }),
  date: (e) => Zt.create({ ...e, coerce: !0 })
}, mc = K;
var Qp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Pr,
  setErrorMap: _l,
  getErrorMap: Nn,
  makeIssue: An,
  EMPTY_PATH: xl,
  addIssueToContext: j,
  ParseStatus: We,
  INVALID: K,
  DIRTY: Xs,
  OK: He,
  isAborted: qa,
  isDirty: Ga,
  isValid: Nr,
  isAsync: Mn,
  get util() {
    return ce;
  },
  get objectUtil() {
    return Ya;
  },
  ZodParsedType: z,
  getParsedType: At,
  ZodType: re,
  ZodString: ct,
  ZodNumber: Lt,
  ZodBigInt: It,
  ZodBoolean: Ar,
  ZodDate: Zt,
  ZodSymbol: zn,
  ZodUndefined: Mr,
  ZodNull: zr,
  ZodAny: mr,
  ZodUnknown: Ht,
  ZodNever: Tt,
  ZodVoid: Ln,
  ZodArray: dt,
  ZodObject: _e,
  ZodUnion: Lr,
  ZodDiscriminatedUnion: ta,
  ZodIntersection: Ir,
  ZodTuple: bt,
  ZodRecord: jr,
  ZodMap: In,
  ZodSet: Yt,
  ZodFunction: cr,
  ZodLazy: Vr,
  ZodLiteral: Wr,
  ZodEnum: jt,
  ZodNativeEnum: Fr,
  ZodPromise: yr,
  ZodEffects: ht,
  ZodTransformer: ht,
  ZodOptional: Ot,
  ZodNullable: qt,
  ZodDefault: Br,
  ZodCatch: jn,
  ZodNaN: Vn,
  BRAND: Ml,
  ZodBranded: Ks,
  ZodPipeline: rn,
  ZodReadonly: Wn,
  custom: Js,
  Schema: re,
  ZodSchema: re,
  late: zl,
  get ZodFirstPartyTypeKind() {
    return Y;
  },
  coerce: gc,
  any: $l,
  array: Yl,
  bigint: jl,
  boolean: ro,
  date: Vl,
  discriminatedUnion: Ql,
  effect: es,
  enum: sc,
  function: nc,
  instanceof: Ll,
  intersection: Kl,
  lazy: ac,
  literal: ic,
  map: tc,
  nan: Il,
  nativeEnum: oc,
  never: Ul,
  null: Bl,
  nullable: cc,
  number: to,
  object: ql,
  oboolean: vc,
  onumber: pc,
  optional: lc,
  ostring: hc,
  pipeline: dc,
  preprocess: fc,
  promise: uc,
  record: ec,
  set: rc,
  strictObject: Gl,
  string: eo,
  symbol: Wl,
  transformer: es,
  tuple: Jl,
  undefined: Fl,
  union: Xl,
  unknown: Hl,
  void: Zl,
  NEVER: mc,
  ZodIssueCode: D,
  quotelessJson: wl,
  ZodError: ft
});
const yc = ({
  children: e,
  className: t,
  form: r
}) => {
  const n = r.formState.errors;
  return /* @__PURE__ */ et("form", { className: t, onSubmit: r.onSubmit, children: [
    n.root && /* @__PURE__ */ et(Qu, { severity: "error", children: [
      /* @__PURE__ */ W(Ku, { children: n.root.message }),
      n.root.fields && /* @__PURE__ */ W("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(n.root.fields).map(([a, {
        message: i
      }]) => /* @__PURE__ */ W("li", { css: {}, children: i }, a)) })
    ] }),
    e
  ] });
}, Kp = yc;
var nn = (e) => e.type === "checkbox", ir = (e) => e instanceof Date, $e = (e) => e == null;
const no = (e) => typeof e == "object";
var Re = (e) => !$e(e) && !Array.isArray(e) && no(e) && !ir(e), ao = (e) => Re(e) && e.target ? nn(e.target) ? e.target.checked : e.target.value : e, bc = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, io = (e, t) => e.has(bc(t)), wc = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Re(t) && t.hasOwnProperty("isPrototypeOf");
}, hi = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ot(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(hi && (e instanceof Blob || e instanceof FileList)) && (r || Re(e)))
    if (t = r ? [] : {}, !r && !wc(e))
      t = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (t[n] = ot(e[n]));
  else
    return e;
  return t;
}
var an = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Oe = (e) => e === void 0, A = (e, t, r) => {
  if (!t || !Re(e))
    return r;
  const n = an(t.split(/[,[\].]+?/)).reduce((a, i) => $e(a) ? a : a[i], e);
  return Oe(n) || n === e ? Oe(e[t]) ? r : e[t] : n;
}, ut = (e) => typeof e == "boolean";
const Fn = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, lt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, St = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, _c = k.createContext(null), pi = () => k.useContext(_c);
var so = (e, t, r, n = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(a, i, {
      get: () => {
        const s = i;
        return t._proxyFormState[s] !== lt.all && (t._proxyFormState[s] = !n || lt.all), r && (r[s] = !0), e[s];
      }
    });
  return a;
}, nt = (e) => Re(e) && !Object.keys(e).length, oo = (e, t, r, n) => {
  r(e);
  const { name: a, ...i } = e;
  return nt(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((s) => t[s] === (!n || lt.all));
}, Rn = (e) => Array.isArray(e) ? e : [e], uo = (e, t, r) => !e || !t || e === t || Rn(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n)));
function vi(e) {
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
function xc(e) {
  const t = pi(), { control: r = t.control, disabled: n, name: a, exact: i } = e || {}, [s, o] = k.useState(r._formState), u = k.useRef(!0), l = k.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), f = k.useRef(a);
  return f.current = a, vi({
    disabled: n,
    next: (d) => u.current && uo(f.current, d.name, i) && oo(d, l.current, r._updateFormState) && o({
      ...r._formState,
      ...d
    }),
    subject: r._subjects.state
  }), k.useEffect(() => (u.current = !0, l.current.isValid && r._updateValid(!0), () => {
    u.current = !1;
  }), [r]), so(s, r, l.current, !1);
}
var mt = (e) => typeof e == "string", lo = (e, t, r, n, a) => mt(e) ? (n && t.watch.add(e), A(r, e, a)) : Array.isArray(e) ? e.map((i) => (n && t.watch.add(i), A(r, i))) : (n && (t.watchAll = !0), r);
function Sc(e) {
  const t = pi(), { control: r = t.control, name: n, defaultValue: a, disabled: i, exact: s } = e || {}, o = k.useRef(n);
  o.current = n, vi({
    disabled: i,
    subject: r._subjects.values,
    next: (f) => {
      uo(o.current, f.name, s) && l(ot(lo(o.current, r._names, f.values || r._formValues, !1, a)));
    }
  });
  const [u, l] = k.useState(r._getWatch(n, a));
  return k.useEffect(() => r._removeUnmounted()), u;
}
var gi = (e) => /^\w*$/.test(e), co = (e) => an(e.replace(/["|']|\]/g, "").split(/\.|\[/)), de = (e, t, r) => {
  let n = -1;
  const a = gi(t) ? [t] : co(t), i = a.length, s = i - 1;
  for (; ++n < i; ) {
    const o = a[n];
    let u = r;
    if (n !== s) {
      const l = e[o];
      u = Re(l) || Array.isArray(l) ? l : isNaN(+a[n + 1]) ? {} : [];
    }
    e[o] = u, e = e[o];
  }
  return e;
};
function Dc(e) {
  const t = pi(), { name: r, disabled: n, control: a = t.control, shouldUnregister: i } = e, s = io(a._names.array, r), o = Sc({
    control: a,
    name: r,
    defaultValue: A(a._formValues, r, A(a._defaultValues, r, e.defaultValue)),
    exact: !0
  }), u = xc({
    control: a,
    name: r
  }), l = k.useRef(a.register(r, {
    ...e.rules,
    value: o,
    disabled: e.disabled
  }));
  return l.current = a.register(r, e.rules), k.useEffect(() => {
    const f = a._options.shouldUnregister || i, d = (h, v) => {
      const g = A(a._fields, h);
      g && (g._f.mount = v);
    };
    if (d(r, !0), f) {
      const h = ot(A(a._options.defaultValues, r));
      de(a._defaultValues, r, h), Oe(A(a._formValues, r)) && de(a._formValues, r, h);
    }
    return () => {
      (s ? f && !a._state.action : f) ? a.unregister(r) : d(r, !1);
    };
  }, [r, a, s, i]), k.useEffect(() => {
    A(a._fields, r) && a._updateDisabledField({
      disabled: n,
      fields: a._fields,
      name: r,
      value: A(a._fields, r)._f.value
    });
  }, [n, r, a]), {
    field: {
      name: r,
      value: o,
      ...ut(n) || ut(u.disabled) ? { disabled: u.disabled || n } : {},
      onChange: k.useCallback((f) => l.current.onChange({
        target: {
          value: ao(f),
          name: r
        },
        type: Fn.CHANGE
      }), [r]),
      onBlur: k.useCallback(() => l.current.onBlur({
        target: {
          value: A(a._formValues, r),
          name: r
        },
        type: Fn.BLUR
      }), [r, a]),
      ref: (f) => {
        const d = A(a._fields, r);
        d && f && (d._f.ref = {
          focus: () => f.focus(),
          select: () => f.select(),
          setCustomValidity: (h) => f.setCustomValidity(h),
          reportValidity: () => f.reportValidity()
        });
      }
    },
    formState: u,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!A(u.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!A(u.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!A(u.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => A(u.errors, r)
      }
    })
  };
}
const Oc = (e) => e.render(Dc(e));
var fo = (e, t, r, n, a) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: a || !0
  }
} : {}, ts = (e) => ({
  isOnSubmit: !e || e === lt.onSubmit,
  isOnBlur: e === lt.onBlur,
  isOnChange: e === lt.onChange,
  isOnAll: e === lt.all,
  isOnTouch: e === lt.onTouched
}), rs = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Cr = (e, t, r, n) => {
  for (const a of r || Object.keys(e)) {
    const i = A(e, a);
    if (i) {
      const { _f: s, ...o } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], a) && !n)
          break;
        if (s.ref && t(s.ref, s.name) && !n)
          break;
        Cr(o, t);
      } else
        Re(o) && Cr(o, t);
    }
  }
};
var kc = (e, t, r) => {
  const n = an(A(e, r));
  return de(n, "root", t[r]), de(e, r, n), e;
}, mi = (e) => e.type === "file", zt = (e) => typeof e == "function", Bn = (e) => {
  if (!hi)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Pn = (e) => mt(e), yi = (e) => e.type === "radio", $n = (e) => e instanceof RegExp;
const ns = {
  value: !1,
  isValid: !1
}, as = { value: !0, isValid: !0 };
var ho = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Oe(e[0].attributes.value) ? Oe(e[0].value) || e[0].value === "" ? as : { value: e[0].value, isValid: !0 } : as
    ) : ns;
  }
  return ns;
};
const is = {
  isValid: !1,
  value: null
};
var po = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, is) : is;
function ss(e, t, r = "validate") {
  if (Pn(e) || Array.isArray(e) && e.every(Pn) || ut(e) && !e)
    return {
      type: r,
      message: Pn(e) ? e : "",
      ref: t
    };
}
var tr = (e) => Re(e) && !$n(e) ? e : {
  value: e,
  message: ""
}, os = async (e, t, r, n, a) => {
  const { ref: i, refs: s, required: o, maxLength: u, minLength: l, min: f, max: d, pattern: h, validate: v, name: g, valueAsNumber: w, mount: P, disabled: E } = e._f, _ = A(t, g);
  if (!P || E)
    return {};
  const L = s ? s[0] : i, V = (M) => {
    n && L.reportValidity && (L.setCustomValidity(ut(M) ? "" : M || ""), L.reportValidity());
  }, q = {}, U = yi(i), ue = nn(i), H = U || ue, oe = (w || mi(i)) && Oe(i.value) && Oe(_) || Bn(i) && i.value === "" || _ === "" || Array.isArray(_) && !_.length, G = fo.bind(null, g, r, q), ve = (M, Z, J, ge = St.maxLength, se = St.minLength) => {
    const he = M ? Z : J;
    q[g] = {
      type: M ? ge : se,
      message: he,
      ref: i,
      ...G(M ? ge : se, he)
    };
  };
  if (a ? !Array.isArray(_) || !_.length : o && (!H && (oe || $e(_)) || ut(_) && !_ || ue && !ho(s).isValid || U && !po(s).isValid)) {
    const { value: M, message: Z } = Pn(o) ? { value: !!o, message: o } : tr(o);
    if (M && (q[g] = {
      type: St.required,
      message: Z,
      ref: L,
      ...G(St.required, Z)
    }, !r))
      return V(Z), q;
  }
  if (!oe && (!$e(f) || !$e(d))) {
    let M, Z;
    const J = tr(d), ge = tr(f);
    if (!$e(_) && !isNaN(_)) {
      const se = i.valueAsNumber || _ && +_;
      $e(J.value) || (M = se > J.value), $e(ge.value) || (Z = se < ge.value);
    } else {
      const se = i.valueAsDate || new Date(_), he = (le) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + le), Te = i.type == "time", be = i.type == "week";
      mt(J.value) && _ && (M = Te ? he(_) > he(J.value) : be ? _ > J.value : se > new Date(J.value)), mt(ge.value) && _ && (Z = Te ? he(_) < he(ge.value) : be ? _ < ge.value : se < new Date(ge.value));
    }
    if ((M || Z) && (ve(!!M, J.message, ge.message, St.max, St.min), !r))
      return V(q[g].message), q;
  }
  if ((u || l) && !oe && (mt(_) || a && Array.isArray(_))) {
    const M = tr(u), Z = tr(l), J = !$e(M.value) && _.length > +M.value, ge = !$e(Z.value) && _.length < +Z.value;
    if ((J || ge) && (ve(J, M.message, Z.message), !r))
      return V(q[g].message), q;
  }
  if (h && !oe && mt(_)) {
    const { value: M, message: Z } = tr(h);
    if ($n(M) && !_.match(M) && (q[g] = {
      type: St.pattern,
      message: Z,
      ref: i,
      ...G(St.pattern, Z)
    }, !r))
      return V(Z), q;
  }
  if (v) {
    if (zt(v)) {
      const M = await v(_, t), Z = ss(M, L);
      if (Z && (q[g] = {
        ...Z,
        ...G(St.validate, Z.message)
      }, !r))
        return V(Z.message), q;
    } else if (Re(v)) {
      let M = {};
      for (const Z in v) {
        if (!nt(M) && !r)
          break;
        const J = ss(await v[Z](_, t), L, Z);
        J && (M = {
          ...J,
          ...G(Z, J.message)
        }, V(J.message), r && (q[g] = M));
      }
      if (!nt(M) && (q[g] = {
        ref: L,
        ...M
      }, !r))
        return q;
    }
  }
  return V(!0), q;
};
function Tc(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = Oe(e) ? n++ : e[t[n++]];
  return e;
}
function Ec(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Oe(e[t]))
      return !1;
  return !0;
}
function Ie(e, t) {
  const r = Array.isArray(t) ? t : gi(t) ? [t] : co(t), n = r.length === 1 ? e : Tc(e, r), a = r.length - 1, i = r[a];
  return n && delete n[i], a !== 0 && (Re(n) && nt(n) || Array.isArray(n) && Ec(n)) && Ie(e, r.slice(0, -1)), e;
}
var Ea = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (a) => {
      for (const i of e)
        i.next && i.next(a);
    },
    subscribe: (a) => (e.push(a), {
      unsubscribe: () => {
        e = e.filter((i) => i !== a);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Hn = (e) => $e(e) || !no(e);
function Bt(e, t) {
  if (Hn(e) || Hn(t))
    return e === t;
  if (ir(e) && ir(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (const a of r) {
    const i = e[a];
    if (!n.includes(a))
      return !1;
    if (a !== "ref") {
      const s = t[a];
      if (ir(i) && ir(s) || Re(i) && Re(s) || Array.isArray(i) && Array.isArray(s) ? !Bt(i, s) : i !== s)
        return !1;
    }
  }
  return !0;
}
var vo = (e) => e.type === "select-multiple", Cc = (e) => yi(e) || nn(e), Ca = (e) => Bn(e) && e.isConnected, go = (e) => {
  for (const t in e)
    if (zt(e[t]))
      return !0;
  return !1;
};
function Un(e, t = {}) {
  const r = Array.isArray(e);
  if (Re(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || Re(e[n]) && !go(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, Un(e[n], t[n])) : $e(e[n]) || (t[n] = !0);
  return t;
}
function mo(e, t, r) {
  const n = Array.isArray(e);
  if (Re(e) || n)
    for (const a in e)
      Array.isArray(e[a]) || Re(e[a]) && !go(e[a]) ? Oe(t) || Hn(r[a]) ? r[a] = Array.isArray(e[a]) ? Un(e[a], []) : { ...Un(e[a]) } : mo(e[a], $e(t) ? {} : t[a], r[a]) : r[a] = !Bt(e[a], t[a]);
  return r;
}
var Ra = (e, t) => mo(e, t, Un(t)), yo = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => Oe(e) ? e : t ? e === "" ? NaN : e && +e : r && mt(e) ? new Date(e) : n ? n(e) : e;
function Pa(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return mi(t) ? t.files : yi(t) ? po(e.refs).value : vo(t) ? [...t.selectedOptions].map(({ value: r }) => r) : nn(t) ? ho(e.refs).value : yo(Oe(t.value) ? e.ref.value : t.value, e);
}
var Rc = (e, t, r, n) => {
  const a = {};
  for (const i of e) {
    const s = A(t, i);
    s && de(a, i, s._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: a,
    shouldUseNativeValidation: n
  };
}, Dr = (e) => Oe(e) ? e : $n(e) ? e.source : Re(e) ? $n(e.value) ? e.value.source : e.value : e, Pc = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function us(e, t, r) {
  const n = A(e, r);
  if (n || gi(r))
    return {
      error: n,
      name: r
    };
  const a = r.split(".");
  for (; a.length; ) {
    const i = a.join("."), s = A(t, i), o = A(e, i);
    if (s && !Array.isArray(s) && r !== i)
      return { name: r };
    if (o && o.type)
      return {
        name: i,
        error: o
      };
    a.pop();
  }
  return {
    name: r
  };
}
var Nc = (e, t, r, n, a) => a.isOnAll ? !1 : !r && a.isOnTouch ? !(t || e) : (r ? n.isOnBlur : a.isOnBlur) ? !e : (r ? n.isOnChange : a.isOnChange) ? e : !0, Ac = (e, t) => !an(A(e, t)).length && Ie(e, t);
const Mc = {
  mode: lt.onSubmit,
  reValidateMode: lt.onChange,
  shouldFocusError: !0
};
function zc(e = {}, t) {
  let r = {
    ...Mc,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: zt(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, a = {}, i = Re(r.defaultValues) || Re(r.values) ? ot(r.defaultValues || r.values) || {} : {}, s = r.shouldUnregister ? {} : ot(i), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, u = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, f = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, h = {
    values: Ea(),
    array: Ea(),
    state: Ea()
  }, v = e.resetOptions && e.resetOptions.keepDirtyValues, g = ts(r.mode), w = ts(r.reValidateMode), P = r.criteriaMode === lt.all, E = (c) => (p) => {
    clearTimeout(f), f = setTimeout(c, p);
  }, _ = async (c) => {
    if (d.isValid || c) {
      const p = r.resolver ? nt((await G()).errors) : await M(a, !0);
      p !== n.isValid && h.state.next({
        isValid: p
      });
    }
  }, L = (c) => d.isValidating && h.state.next({
    isValidating: c
  }), V = (c, p = [], m, I, T = !0, O = !0) => {
    if (I && m) {
      if (o.action = !0, O && Array.isArray(A(a, c))) {
        const $ = m(A(a, c), I.argA, I.argB);
        T && de(a, c, $);
      }
      if (O && Array.isArray(A(n.errors, c))) {
        const $ = m(A(n.errors, c), I.argA, I.argB);
        T && de(n.errors, c, $), Ac(n.errors, c);
      }
      if (d.touchedFields && O && Array.isArray(A(n.touchedFields, c))) {
        const $ = m(A(n.touchedFields, c), I.argA, I.argB);
        T && de(n.touchedFields, c, $);
      }
      d.dirtyFields && (n.dirtyFields = Ra(i, s)), h.state.next({
        name: c,
        isDirty: J(c, p),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      de(s, c, p);
  }, q = (c, p) => {
    de(n.errors, c, p), h.state.next({
      errors: n.errors
    });
  }, U = (c) => {
    n.errors = c, h.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, ue = (c, p, m, I) => {
    const T = A(a, c);
    if (T) {
      const O = A(s, c, Oe(m) ? A(i, c) : m);
      Oe(O) || I && I.defaultChecked || p ? de(s, c, p ? O : Pa(T._f)) : he(c, O), o.mount && _();
    }
  }, H = (c, p, m, I, T) => {
    let O = !1, $ = !1;
    const pe = {
      name: c
    };
    if (!m || I) {
      d.isDirty && ($ = n.isDirty, n.isDirty = pe.isDirty = J(), O = $ !== pe.isDirty);
      const Se = Bt(A(i, c), p);
      $ = A(n.dirtyFields, c), Se ? Ie(n.dirtyFields, c) : de(n.dirtyFields, c, !0), pe.dirtyFields = n.dirtyFields, O = O || d.dirtyFields && $ !== !Se;
    }
    if (m) {
      const Se = A(n.touchedFields, c);
      Se || (de(n.touchedFields, c, m), pe.touchedFields = n.touchedFields, O = O || d.touchedFields && Se !== m);
    }
    return O && T && h.state.next(pe), O ? pe : {};
  }, oe = (c, p, m, I) => {
    const T = A(n.errors, c), O = d.isValid && ut(p) && n.isValid !== p;
    if (e.delayError && m ? (l = E(() => q(c, m)), l(e.delayError)) : (clearTimeout(f), l = null, m ? de(n.errors, c, m) : Ie(n.errors, c)), (m ? !Bt(T, m) : T) || !nt(I) || O) {
      const $ = {
        ...I,
        ...O && ut(p) ? { isValid: p } : {},
        errors: n.errors,
        name: c
      };
      n = {
        ...n,
        ...$
      }, h.state.next($);
    }
    L(!1);
  }, G = async (c) => r.resolver(s, r.context, Rc(c || u.mount, a, r.criteriaMode, r.shouldUseNativeValidation)), ve = async (c) => {
    const { errors: p } = await G(c);
    if (c)
      for (const m of c) {
        const I = A(p, m);
        I ? de(n.errors, m, I) : Ie(n.errors, m);
      }
    else
      n.errors = p;
    return p;
  }, M = async (c, p, m = {
    valid: !0
  }) => {
    for (const I in c) {
      const T = c[I];
      if (T) {
        const { _f: O, ...$ } = T;
        if (O) {
          const pe = u.array.has(O.name), Se = await os(T, s, P, r.shouldUseNativeValidation && !p, pe);
          if (Se[O.name] && (m.valid = !1, p))
            break;
          !p && (A(Se, O.name) ? pe ? kc(n.errors, Se, O.name) : de(n.errors, O.name, Se[O.name]) : Ie(n.errors, O.name));
        }
        $ && await M($, p, m);
      }
    }
    return m.valid;
  }, Z = () => {
    for (const c of u.unMount) {
      const p = A(a, c);
      p && (p._f.refs ? p._f.refs.every((m) => !Ca(m)) : !Ca(p._f.ref)) && X(c);
    }
    u.unMount = /* @__PURE__ */ new Set();
  }, J = (c, p) => (c && p && de(s, c, p), !Bt(S(), i)), ge = (c, p, m) => lo(c, u, {
    ...o.mount ? s : Oe(p) ? i : mt(c) ? { [c]: p } : p
  }, m, p), se = (c) => an(A(o.mount ? s : i, c, e.shouldUnregister ? A(i, c, []) : [])), he = (c, p, m = {}) => {
    const I = A(a, c);
    let T = p;
    if (I) {
      const O = I._f;
      O && (!O.disabled && de(s, c, yo(p, O)), T = Bn(O.ref) && $e(p) ? "" : p, vo(O.ref) ? [...O.ref.options].forEach(($) => $.selected = T.includes($.value)) : O.refs ? nn(O.ref) ? O.refs.length > 1 ? O.refs.forEach(($) => (!$.defaultChecked || !$.disabled) && ($.checked = Array.isArray(T) ? !!T.find((pe) => pe === $.value) : T === $.value)) : O.refs[0] && (O.refs[0].checked = !!T) : O.refs.forEach(($) => $.checked = $.value === T) : mi(O.ref) ? O.ref.value = "" : (O.ref.value = T, O.ref.type || h.values.next({
        name: c,
        values: { ...s }
      })));
    }
    (m.shouldDirty || m.shouldTouch) && H(c, T, m.shouldTouch, m.shouldDirty, !0), m.shouldValidate && y(c);
  }, Te = (c, p, m) => {
    for (const I in p) {
      const T = p[I], O = `${c}.${I}`, $ = A(a, O);
      (u.array.has(c) || !Hn(T) || $ && !$._f) && !ir(T) ? Te(O, T, m) : he(O, T, m);
    }
  }, be = (c, p, m = {}) => {
    const I = A(a, c), T = u.array.has(c), O = ot(p);
    de(s, c, O), T ? (h.array.next({
      name: c,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && m.shouldDirty && h.state.next({
      name: c,
      dirtyFields: Ra(i, s),
      isDirty: J(c, O)
    })) : I && !I._f && !$e(O) ? Te(c, O, m) : he(c, O, m), rs(c, u) && h.state.next({ ...n }), h.values.next({
      name: c,
      values: { ...s }
    }), !o.mount && t();
  }, le = async (c) => {
    const p = c.target;
    let m = p.name, I = !0;
    const T = A(a, m), O = () => p.type ? Pa(T._f) : ao(c), $ = (pe) => {
      I = Number.isNaN(pe) || pe === A(s, m, pe);
    };
    if (T) {
      let pe, Se;
      const Ct = O(), xt = c.type === Fn.BLUR || c.type === Fn.FOCUS_OUT, fn = !Pc(T._f) && !r.resolver && !A(n.errors, m) && !T._f.deps || Nc(xt, A(n.touchedFields, m), n.isSubmitted, w, g), xr = rs(m, u, xt);
      de(s, m, Ct), xt ? (T._f.onBlur && T._f.onBlur(c), l && l(0)) : T._f.onChange && T._f.onChange(c);
      const Rt = H(m, Ct, xt, !1), dn = !nt(Rt) || xr;
      if (!xt && h.values.next({
        name: m,
        type: c.type,
        values: { ...s }
      }), fn)
        return d.isValid && _(), dn && h.state.next({ name: m, ...xr ? {} : Rt });
      if (!xt && xr && h.state.next({ ...n }), L(!0), r.resolver) {
        const { errors: hn } = await G([m]);
        if ($(Ct), I) {
          const pn = us(n.errors, a, m), Sr = us(hn, a, pn.name || m);
          pe = Sr.error, m = Sr.name, Se = nt(hn);
        }
      } else
        pe = (await os(T, s, P, r.shouldUseNativeValidation))[m], $(Ct), I && (pe ? Se = !1 : d.isValid && (Se = await M(a, !0)));
      I && (T._f.deps && y(T._f.deps), oe(m, Se, pe, Rt));
    }
  }, Pe = (c, p) => {
    if (A(n.errors, p) && c.focus)
      return c.focus(), 1;
  }, y = async (c, p = {}) => {
    let m, I;
    const T = Rn(c);
    if (L(!0), r.resolver) {
      const O = await ve(Oe(c) ? c : T);
      m = nt(O), I = c ? !T.some(($) => A(O, $)) : m;
    } else
      c ? (I = (await Promise.all(T.map(async (O) => {
        const $ = A(a, O);
        return await M($ && $._f ? { [O]: $ } : $);
      }))).every(Boolean), !(!I && !n.isValid) && _()) : I = m = await M(a);
    return h.state.next({
      ...!mt(c) || d.isValid && m !== n.isValid ? {} : { name: c },
      ...r.resolver || !c ? { isValid: m } : {},
      errors: n.errors,
      isValidating: !1
    }), p.shouldFocus && !I && Cr(a, Pe, c ? T : u.mount), I;
  }, S = (c) => {
    const p = {
      ...i,
      ...o.mount ? s : {}
    };
    return Oe(c) ? p : mt(c) ? A(p, c) : c.map((m) => A(p, m));
  }, C = (c, p) => ({
    invalid: !!A((p || n).errors, c),
    isDirty: !!A((p || n).dirtyFields, c),
    isTouched: !!A((p || n).touchedFields, c),
    error: A((p || n).errors, c)
  }), N = (c) => {
    c && Rn(c).forEach((p) => Ie(n.errors, p)), h.state.next({
      errors: c ? n.errors : {}
    });
  }, R = (c, p, m) => {
    const I = (A(a, c, { _f: {} })._f || {}).ref;
    de(n.errors, c, {
      ...p,
      ref: I
    }), h.state.next({
      name: c,
      errors: n.errors,
      isValid: !1
    }), m && m.shouldFocus && I && I.focus && I.focus();
  }, F = (c, p) => zt(c) ? h.values.subscribe({
    next: (m) => c(ge(void 0, p), m)
  }) : ge(c, p, !0), X = (c, p = {}) => {
    for (const m of c ? Rn(c) : u.mount)
      u.mount.delete(m), u.array.delete(m), p.keepValue || (Ie(a, m), Ie(s, m)), !p.keepError && Ie(n.errors, m), !p.keepDirty && Ie(n.dirtyFields, m), !p.keepTouched && Ie(n.touchedFields, m), !r.shouldUnregister && !p.keepDefaultValue && Ie(i, m);
    h.values.next({
      values: { ...s }
    }), h.state.next({
      ...n,
      ...p.keepDirty ? { isDirty: J() } : {}
    }), !p.keepIsValid && _();
  }, ne = ({ disabled: c, name: p, field: m, fields: I, value: T }) => {
    if (ut(c)) {
      const O = c ? void 0 : Oe(T) ? Pa(m ? m._f : A(I, p)._f) : T;
      de(s, p, O), H(p, O, !1, !1, !0);
    }
  }, ie = (c, p = {}) => {
    let m = A(a, c);
    const I = ut(p.disabled);
    return de(a, c, {
      ...m || {},
      _f: {
        ...m && m._f ? m._f : { ref: { name: c } },
        name: c,
        mount: !0,
        ...p
      }
    }), u.mount.add(c), m ? ne({
      field: m,
      disabled: p.disabled,
      name: c
    }) : ue(c, !0, p.value), {
      ...I ? { disabled: p.disabled } : {},
      ...r.progressive ? {
        required: !!p.required,
        min: Dr(p.min),
        max: Dr(p.max),
        minLength: Dr(p.minLength),
        maxLength: Dr(p.maxLength),
        pattern: Dr(p.pattern)
      } : {},
      name: c,
      onChange: le,
      onBlur: le,
      ref: (T) => {
        if (T) {
          ie(c, p), m = A(a, c);
          const O = Oe(T.value) && T.querySelectorAll && T.querySelectorAll("input,select,textarea")[0] || T, $ = Cc(O), pe = m._f.refs || [];
          if ($ ? pe.find((Se) => Se === O) : O === m._f.ref)
            return;
          de(a, c, {
            _f: {
              ...m._f,
              ...$ ? {
                refs: [
                  ...pe.filter(Ca),
                  O,
                  ...Array.isArray(A(i, c)) ? [{}] : []
                ],
                ref: { type: O.type, name: c }
              } : { ref: O }
            }
          }), ue(c, !1, void 0, O);
        } else
          m = A(a, c, {}), m._f && (m._f.mount = !1), (r.shouldUnregister || p.shouldUnregister) && !(io(u.array, c) && o.action) && u.unMount.add(c);
      }
    };
  }, Ue = () => r.shouldFocusError && Cr(a, Pe, u.mount), ze = (c) => {
    ut(c) && (h.state.next({ disabled: c }), Cr(a, (p, m) => {
      let I = c;
      const T = A(a, m);
      T && ut(T._f.disabled) && (I || (I = T._f.disabled)), p.disabled = I;
    }, 0, !1));
  }, Ne = (c, p) => async (m) => {
    m && (m.preventDefault && m.preventDefault(), m.persist && m.persist());
    let I = ot(s);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: T, values: O } = await G();
      n.errors = T, I = O;
    } else
      await M(a);
    Ie(n.errors, "root"), nt(n.errors) ? (h.state.next({
      errors: {}
    }), await c(I, m)) : (p && await p({ ...n.errors }, m), Ue(), setTimeout(Ue)), h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: nt(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, fe = (c, p = {}) => {
    A(a, c) && (Oe(p.defaultValue) ? be(c, A(i, c)) : (be(c, p.defaultValue), de(i, c, p.defaultValue)), p.keepTouched || Ie(n.touchedFields, c), p.keepDirty || (Ie(n.dirtyFields, c), n.isDirty = p.defaultValue ? J(c, A(i, c)) : J()), p.keepError || (Ie(n.errors, c), d.isValid && _()), h.state.next({ ...n }));
  }, Ze = (c, p = {}) => {
    const m = c ? ot(c) : i, I = ot(m), T = c && !nt(c) ? I : i;
    if (p.keepDefaultValues || (i = m), !p.keepValues) {
      if (p.keepDirtyValues || v)
        for (const O of u.mount)
          A(n.dirtyFields, O) ? de(T, O, A(s, O)) : be(O, A(T, O));
      else {
        if (hi && Oe(c))
          for (const O of u.mount) {
            const $ = A(a, O);
            if ($ && $._f) {
              const pe = Array.isArray($._f.refs) ? $._f.refs[0] : $._f.ref;
              if (Bn(pe)) {
                const Se = pe.closest("form");
                if (Se) {
                  Se.reset();
                  break;
                }
              }
            }
          }
        a = {};
      }
      s = e.shouldUnregister ? p.keepDefaultValues ? ot(i) : {} : ot(T), h.array.next({
        values: { ...T }
      }), h.values.next({
        values: { ...T }
      });
    }
    u = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !o.mount && t(), o.mount = !d.isValid || !!p.keepIsValid, o.watch = !!e.shouldUnregister, h.state.next({
      submitCount: p.keepSubmitCount ? n.submitCount : 0,
      isDirty: p.keepDirty ? n.isDirty : !!(p.keepDefaultValues && !Bt(c, i)),
      isSubmitted: p.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: p.keepDirtyValues ? n.dirtyFields : p.keepDefaultValues && c ? Ra(i, c) : {},
      touchedFields: p.keepTouched ? n.touchedFields : {},
      errors: p.keepErrors ? n.errors : {},
      isSubmitSuccessful: p.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, xe = (c, p) => Ze(zt(c) ? c(s) : c, p);
  return {
    control: {
      register: ie,
      unregister: X,
      getFieldState: C,
      handleSubmit: Ne,
      setError: R,
      _executeSchema: G,
      _getWatch: ge,
      _getDirty: J,
      _updateValid: _,
      _removeUnmounted: Z,
      _updateFieldArray: V,
      _updateDisabledField: ne,
      _getFieldArray: se,
      _reset: Ze,
      _resetDefaultValues: () => zt(r.defaultValues) && r.defaultValues().then((c) => {
        xe(c, r.resetOptions), h.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (c) => {
        n = {
          ...n,
          ...c
        };
      },
      _disableForm: ze,
      _subjects: h,
      _proxyFormState: d,
      _setErrors: U,
      get _fields() {
        return a;
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
        return u;
      },
      set _names(c) {
        u = c;
      },
      get _formState() {
        return n;
      },
      set _formState(c) {
        n = c;
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
    register: ie,
    handleSubmit: Ne,
    watch: F,
    setValue: be,
    getValues: S,
    reset: xe,
    resetField: fe,
    clearErrors: N,
    unregister: X,
    setError: R,
    setFocus: (c, p = {}) => {
      const m = A(a, c), I = m && m._f;
      if (I) {
        const T = I.refs ? I.refs[0] : I.ref;
        T.focus && (T.focus(), p.shouldSelect && T.select());
      }
    },
    getFieldState: C
  };
}
function Lc(e = {}) {
  const t = k.useRef(), r = k.useRef(), [n, a] = k.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: zt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: zt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...zc(e, () => a((s) => ({ ...s }))),
    formState: n
  });
  const i = t.current.control;
  return i._options = e, vi({
    subject: i._subjects.state,
    next: (s) => {
      oo(s, i._proxyFormState, i._updateFormState, !0) && a({ ...i._formState });
    }
  }), k.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), k.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const s = i._getDirty();
      s !== n.isDirty && i._subjects.state.next({
        isDirty: s
      });
    }
  }, [i, n.isDirty]), k.useEffect(() => {
    e.values && !Bt(e.values, r.current) ? (i._reset(e.values, i._options.resetOptions), r.current = e.values, a((s) => ({ ...s }))) : i._resetDefaultValues();
  }, [e.values, i]), k.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), k.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), t.current.formState = so(n, i), t.current;
}
const Ic = ({
  render: e,
  ...t
}) => /* @__PURE__ */ W(Oc, { ...t, render: ({
  field: r,
  fieldState: n,
  ...a
}) => {
  var i;
  return e({
    field: {
      ...r,
      error: (i = n.error) == null ? void 0 : i.message
    },
    fieldState: n,
    ...a
  });
} }), Jp = Ic;
var bo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "triangle-exclamation", n = 512, a = 512, i = [9888, "exclamation-triangle", "warning"], s = "f071", o = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      a,
      i,
      s,
      o
    ]
  }, e.faTriangleExclamation = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = a, e.ligatures = i, e.unicode = s, e.svgPathData = o, e.aliases = i;
})(bo);
const jc = ({
  helperText: e,
  label: t,
  error: r,
  children: n,
  ...a
}, i) => (e = r || e, /* @__PURE__ */ et("div", { ref: i, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, t && {
  paddingTop: "1.5rem"
}], ...a, children: [
  n,
  t && /* @__PURE__ */ W("label", { css: [{
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
  e && /* @__PURE__ */ et("div", { css: [{
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
    r && /* @__PURE__ */ W(kt, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: bo.faTriangleExclamation }),
    e
  ] })
] })), ra = x.forwardRef(jc);
var ls = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var n = A(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, wo = function(e, t) {
  var r = function(a) {
    var i = t.fields[a];
    i && i.ref && "reportValidity" in i.ref ? ls(i.ref, a, e) : i.refs && i.refs.forEach(function(s) {
      return ls(s, a, e);
    });
  };
  for (var n in t.fields)
    r(n);
}, Vc = function(e, t) {
  t.shouldUseNativeValidation && wo(e, t);
  var r = {};
  for (var n in e) {
    var a = A(t.fields, n), i = Object.assign(e[n] || {}, { ref: a && a.ref });
    if (Fc(t.names || Object.keys(e), n)) {
      var s = Object.assign({}, Wc(A(r, n)));
      de(s, "root", i), de(r, n, s);
    } else
      de(r, n, i);
  }
  return r;
}, Wc = function(e) {
  return Array.isArray(e) ? e.filter(Boolean) : [];
}, Fc = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, Bc = function(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0], a = n.code, i = n.message, s = n.path.join(".");
    if (!r[s])
      if ("unionErrors" in n) {
        var o = n.unionErrors[0].errors[0];
        r[s] = { message: o.message, type: o.code };
      } else
        r[s] = { message: i, type: a };
    if ("unionErrors" in n && n.unionErrors.forEach(function(f) {
      return f.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var u = r[s].types, l = u && u[n.code];
      r[s] = fo(s, t, r, a, l ? [].concat(l, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}, $c = function(e, t, r) {
  return r === void 0 && (r = {}), function(n, a, i) {
    try {
      return Promise.resolve(function(s, o) {
        try {
          var u = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](n, t)).then(function(l) {
            return i.shouldUseNativeValidation && wo({}, i), { errors: {}, values: r.raw ? n : l };
          });
        } catch (l) {
          return o(l);
        }
        return u && u.then ? u.then(void 0, o) : u;
      }(0, function(s) {
        if (function(o) {
          return o.errors != null;
        }(s))
          return { values: {}, errors: Vc(Bc(s.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
};
const Hc = ({
  schema: e,
  mode: t = "onChange",
  reValidateMode: r = "onChange",
  onValid: n,
  onInvalid: a,
  ...i
} = {}) => {
  const s = Lc({
    mode: t,
    reValidateMode: r,
    resolver: e ? $c(e) : void 0,
    ...i
  });
  return {
    onSubmit: s.handleSubmit((o, u) => n == null ? void 0 : n(o, u), a),
    submit: async () => new Promise((o, u) => {
      s.handleSubmit(async (f, d) => {
        try {
          await (n == null ? void 0 : n(f, d)), o(void 0);
        } catch (h) {
          u(h);
        }
      }, (f) => {
        u(f);
      })();
    }),
    ...s
  };
}, ev = ({
  onValid: e,
  context: t,
  mutation: r,
  defaultValues: n,
  schema: a,
  transformSendData: i,
  ...s
}) => {
  const o = Hc({
    context: t,
    schema: a,
    defaultValues: n,
    onValid: async (u) => {
      await (e == null ? void 0 : e(u)), await (r == null ? void 0 : r.mutateAsync(i ? i(u) : u, {
        onError: (l, f) => {
          var d;
          (d = l.response) == null || d.data.errors.forEach((h) => {
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
var _o = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "xmark", n = 384, a = 512, i = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], s = "f00d", o = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      a,
      i,
      s,
      o
    ]
  }, e.faXmark = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = a, e.ligatures = i, e.unicode = s, e.svgPathData = o, e.aliases = i;
})(_o);
var na = { exports: {} }, xo = {};
function So(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = So(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function cs() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = So(e)) && (n && (n += " "), n += t);
  return n;
}
const Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: cs,
  default: cs
}, Symbol.toStringTag, { value: "Module" })), Zc = /* @__PURE__ */ ju(Uc);
var ke = {}, wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.dontSetMe = Qc;
wt.findInArray = Yc;
wt.int = Xc;
wt.isFunction = qc;
wt.isNum = Gc;
function Yc(e, t) {
  for (var r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function qc(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Gc(e) {
  return typeof e == "number" && !isNaN(e);
}
function Xc(e) {
  return parseInt(e, 10);
}
function Qc(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var Xt = {};
Object.defineProperty(Xt, "__esModule", {
  value: !0
});
Xt.browserPrefixToKey = Oo;
Xt.browserPrefixToStyle = Kc;
Xt.default = void 0;
Xt.getPrefix = Do;
var Na = ["Moz", "Webkit", "O", "ms"];
function Do() {
  var e, t, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var n = (e = window.document) === null || e === void 0 || (t = e.documentElement) === null || t === void 0 ? void 0 : t.style;
  if (!n || r in n)
    return "";
  for (var a = 0; a < Na.length; a++)
    if (Oo(r, Na[a]) in n)
      return Na[a];
  return "";
}
function Oo(e, t) {
  return t ? "".concat(t).concat(Jc(e)) : e;
}
function Kc(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function Jc(e) {
  for (var t = "", r = !0, n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
var ef = Do();
Xt.default = ef;
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.addClassName = Ro;
ke.addEvent = nf;
ke.addUserSelectStyles = vf;
ke.createCSSTransform = ff;
ke.createSVGTransform = df;
ke.getTouch = hf;
ke.getTouchIdentifier = pf;
ke.getTranslation = bi;
ke.innerHeight = uf;
ke.innerWidth = lf;
ke.matchesSelector = Co;
ke.matchesSelectorAndParentsTo = rf;
ke.offsetXYFromParent = cf;
ke.outerHeight = sf;
ke.outerWidth = of;
ke.removeClassName = Po;
ke.removeEvent = af;
ke.removeUserSelectStyles = gf;
var Je = wt, fs = tf(Xt);
function ko(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ko = function(a) {
    return a ? r : t;
  })(e);
}
function tf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || Qa(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = ko(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function ds(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function To(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ds(Object(r), !0).forEach(function(n) {
      Eo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ds(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Eo(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var bn = "";
function Co(e, t) {
  return bn || (bn = (0, Je.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, Je.isFunction)(e[r]);
  })), (0, Je.isFunction)(e[bn]) ? e[bn](t) : !1;
}
function rf(e, t, r) {
  var n = e;
  do {
    if (Co(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function nf(e, t, r, n) {
  if (e) {
    var a = To({
      capture: !0
    }, n);
    e.addEventListener ? e.addEventListener(t, r, a) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
  }
}
function af(e, t, r, n) {
  if (e) {
    var a = To({
      capture: !0
    }, n);
    e.removeEventListener ? e.removeEventListener(t, r, a) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
  }
}
function sf(e) {
  var t = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Je.int)(r.borderTopWidth), t += (0, Je.int)(r.borderBottomWidth), t;
}
function of(e) {
  var t = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, Je.int)(r.borderLeftWidth), t += (0, Je.int)(r.borderRightWidth), t;
}
function uf(e) {
  var t = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Je.int)(r.paddingTop), t -= (0, Je.int)(r.paddingBottom), t;
}
function lf(e) {
  var t = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, Je.int)(r.paddingLeft), t -= (0, Je.int)(r.paddingRight), t;
}
function cf(e, t, r) {
  var n = t === t.ownerDocument.body, a = n ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - a.left) / r, s = (e.clientY + t.scrollTop - a.top) / r;
  return {
    x: i,
    y: s
  };
}
function ff(e, t) {
  var r = bi(e, t, "px");
  return Eo({}, (0, fs.browserPrefixToKey)("transform", fs.default), r);
}
function df(e, t) {
  var r = bi(e, t, "");
  return r;
}
function bi(e, t, r) {
  var n = e.x, a = e.y, i = "translate(".concat(n).concat(r, ",").concat(a).concat(r, ")");
  if (t) {
    var s = "".concat(typeof t.x == "string" ? t.x : t.x + r), o = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    i = "translate(".concat(s, ", ").concat(o, ")") + i;
  }
  return i;
}
function hf(e, t) {
  return e.targetTouches && (0, Je.findInArray)(e.targetTouches, function(r) {
    return t === r.identifier;
  }) || e.changedTouches && (0, Je.findInArray)(e.changedTouches, function(r) {
    return t === r.identifier;
  });
}
function pf(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function vf(e) {
  if (e) {
    var t = e.getElementById("react-draggable-style-el");
    t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Ro(e.body, "react-draggable-transparent-selection");
  }
}
function gf(e) {
  if (e)
    try {
      if (e.body && Po(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Ro(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Po(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var _t = {};
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.canDragX = bf;
_t.canDragY = wf;
_t.createCoreData = xf;
_t.createDraggableData = Sf;
_t.getBoundPosition = mf;
_t.getControlPosition = _f;
_t.snapToGrid = yf;
var Qe = wt, sr = ke;
function mf(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  var n = e.props.bounds;
  n = typeof n == "string" ? n : Df(n);
  var a = wi(e);
  if (typeof n == "string") {
    var i = a.ownerDocument, s = i.defaultView, o;
    if (n === "parent" ? o = a.parentNode : o = i.querySelector(n), !(o instanceof s.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    var u = o, l = s.getComputedStyle(a), f = s.getComputedStyle(u);
    n = {
      left: -a.offsetLeft + (0, Qe.int)(f.paddingLeft) + (0, Qe.int)(l.marginLeft),
      top: -a.offsetTop + (0, Qe.int)(f.paddingTop) + (0, Qe.int)(l.marginTop),
      right: (0, sr.innerWidth)(u) - (0, sr.outerWidth)(a) - a.offsetLeft + (0, Qe.int)(f.paddingRight) - (0, Qe.int)(l.marginRight),
      bottom: (0, sr.innerHeight)(u) - (0, sr.outerHeight)(a) - a.offsetTop + (0, Qe.int)(f.paddingBottom) - (0, Qe.int)(l.marginBottom)
    };
  }
  return (0, Qe.isNum)(n.right) && (t = Math.min(t, n.right)), (0, Qe.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, Qe.isNum)(n.left) && (t = Math.max(t, n.left)), (0, Qe.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function yf(e, t, r) {
  var n = Math.round(t / e[0]) * e[0], a = Math.round(r / e[1]) * e[1];
  return [n, a];
}
function bf(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function wf(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function _f(e, t, r) {
  var n = typeof t == "number" ? (0, sr.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  var a = wi(r), i = r.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, sr.offsetXYFromParent)(n || e, i, r.props.scale);
}
function xf(e, t, r) {
  var n = e.state, a = !(0, Qe.isNum)(n.lastX), i = wi(e);
  return a ? {
    node: i,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: i,
    deltaX: t - n.lastX,
    deltaY: r - n.lastY,
    lastX: n.lastX,
    lastY: n.lastY,
    x: t,
    y: r
  };
}
function Sf(e, t) {
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
function Df(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function wi(e) {
  var t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var aa = {}, ia = {};
Object.defineProperty(ia, "__esModule", {
  value: !0
});
ia.default = Of;
function Of() {
}
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
Object.defineProperty(aa, "__esModule", {
  value: !0
});
aa.default = void 0;
var Aa = Tf(x), Xe = _i(Hs), kf = _i(Fs), je = ke, Pt = _t, Ma = wt, Or = _i(ia);
function _i(e) {
  return e && e.__esModule ? e : { default: e };
}
function No(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (No = function(a) {
    return a ? r : t;
  })(e);
}
function Tf(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || Zn(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = No(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function hs(e, t) {
  return Pf(e) || Rf(e, t) || Cf(e, t) || Ef();
}
function Ef() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cf(e, t) {
  if (e) {
    if (typeof e == "string")
      return ps(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ps(e, t);
  }
}
function ps(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Rf(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, i = !1, s, o;
    try {
      for (r = r.call(e); !(a = (s = r.next()).done) && (n.push(s.value), !(t && n.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, o = u;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return n;
  }
}
function Pf(e) {
  if (Array.isArray(e))
    return e;
}
function Nf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Af(e, t, r) {
  return t && vs(e.prototype, t), r && vs(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Mf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ka(e, t);
}
function Ka(e, t) {
  return Ka = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Ka(e, t);
}
function zf(e) {
  var t = If();
  return function() {
    var n = Yn(e), a;
    if (t) {
      var i = Yn(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Lf(this, a);
  };
}
function Lf(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ve(e);
}
function Ve(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function If() {
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
function Yn(e) {
  return Yn = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yn(e);
}
function tt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var st = {
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
}, Nt = st.mouse, sa = /* @__PURE__ */ function(e) {
  Mf(r, e);
  var t = zf(r);
  function r() {
    var n;
    Nf(this, r);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return n = t.call.apply(t, [this].concat(i)), tt(Ve(n), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), tt(Ve(n), "mounted", !1), tt(Ve(n), "handleDragStart", function(o) {
      if (n.props.onMouseDown(o), !n.props.allowAnyClick && typeof o.button == "number" && o.button !== 0)
        return !1;
      var u = n.findDOMNode();
      if (!u || !u.ownerDocument || !u.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var l = u.ownerDocument;
      if (!(n.props.disabled || !(o.target instanceof l.defaultView.Node) || n.props.handle && !(0, je.matchesSelectorAndParentsTo)(o.target, n.props.handle, u) || n.props.cancel && (0, je.matchesSelectorAndParentsTo)(o.target, n.props.cancel, u))) {
        o.type === "touchstart" && o.preventDefault();
        var f = (0, je.getTouchIdentifier)(o);
        n.setState({
          touchIdentifier: f
        });
        var d = (0, Pt.getControlPosition)(o, f, Ve(n));
        if (d != null) {
          var h = d.x, v = d.y, g = (0, Pt.createCoreData)(Ve(n), h, v);
          (0, Or.default)("DraggableCore: handleDragStart: %j", g), (0, Or.default)("calling", n.props.onStart);
          var w = n.props.onStart(o, g);
          w === !1 || n.mounted === !1 || (n.props.enableUserSelectHack && (0, je.addUserSelectStyles)(l), n.setState({
            dragging: !0,
            lastX: h,
            lastY: v
          }), (0, je.addEvent)(l, Nt.move, n.handleDrag), (0, je.addEvent)(l, Nt.stop, n.handleDragStop));
        }
      }
    }), tt(Ve(n), "handleDrag", function(o) {
      var u = (0, Pt.getControlPosition)(o, n.state.touchIdentifier, Ve(n));
      if (u != null) {
        var l = u.x, f = u.y;
        if (Array.isArray(n.props.grid)) {
          var d = l - n.state.lastX, h = f - n.state.lastY, v = (0, Pt.snapToGrid)(n.props.grid, d, h), g = hs(v, 2);
          if (d = g[0], h = g[1], !d && !h)
            return;
          l = n.state.lastX + d, f = n.state.lastY + h;
        }
        var w = (0, Pt.createCoreData)(Ve(n), l, f);
        (0, Or.default)("DraggableCore: handleDrag: %j", w);
        var P = n.props.onDrag(o, w);
        if (P === !1 || n.mounted === !1) {
          try {
            n.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var E = document.createEvent("MouseEvents");
            E.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.handleDragStop(E);
          }
          return;
        }
        n.setState({
          lastX: l,
          lastY: f
        });
      }
    }), tt(Ve(n), "handleDragStop", function(o) {
      if (n.state.dragging) {
        var u = (0, Pt.getControlPosition)(o, n.state.touchIdentifier, Ve(n));
        if (u != null) {
          var l = u.x, f = u.y;
          if (Array.isArray(n.props.grid)) {
            var d = l - n.state.lastX || 0, h = f - n.state.lastY || 0, v = (0, Pt.snapToGrid)(n.props.grid, d, h), g = hs(v, 2);
            d = g[0], h = g[1], l = n.state.lastX + d, f = n.state.lastY + h;
          }
          var w = (0, Pt.createCoreData)(Ve(n), l, f), P = n.props.onStop(o, w);
          if (P === !1 || n.mounted === !1)
            return !1;
          var E = n.findDOMNode();
          E && n.props.enableUserSelectHack && (0, je.removeUserSelectStyles)(E.ownerDocument), (0, Or.default)("DraggableCore: handleDragStop: %j", w), n.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), E && ((0, Or.default)("DraggableCore: Removing handlers"), (0, je.removeEvent)(E.ownerDocument, Nt.move, n.handleDrag), (0, je.removeEvent)(E.ownerDocument, Nt.stop, n.handleDragStop));
        }
      }
    }), tt(Ve(n), "onMouseDown", function(o) {
      return Nt = st.mouse, n.handleDragStart(o);
    }), tt(Ve(n), "onMouseUp", function(o) {
      return Nt = st.mouse, n.handleDragStop(o);
    }), tt(Ve(n), "onTouchStart", function(o) {
      return Nt = st.touch, n.handleDragStart(o);
    }), tt(Ve(n), "onTouchEnd", function(o) {
      return Nt = st.touch, n.handleDragStop(o);
    }), n;
  }
  return Af(r, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var a = this.findDOMNode();
      a && (0, je.addEvent)(a, st.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.findDOMNode();
      if (a) {
        var i = a.ownerDocument;
        (0, je.removeEvent)(i, st.mouse.move, this.handleDrag), (0, je.removeEvent)(i, st.touch.move, this.handleDrag), (0, je.removeEvent)(i, st.mouse.stop, this.handleDragStop), (0, je.removeEvent)(i, st.touch.stop, this.handleDragStop), (0, je.removeEvent)(a, st.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, je.removeUserSelectStyles)(i);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var a, i, s;
      return (a = this.props) !== null && a !== void 0 && a.nodeRef ? (i = this.props) === null || i === void 0 || (s = i.nodeRef) === null || s === void 0 ? void 0 : s.current : kf.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Aa.cloneElement(Aa.Children.only(this.props.children), {
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
}(Aa.Component);
aa.default = sa;
tt(sa, "displayName", "DraggableCore");
tt(sa, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Xe.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Xe.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Xe.default.bool,
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
  grid: Xe.default.arrayOf(Xe.default.number),
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
  handle: Xe.default.string,
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
  cancel: Xe.default.string,
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
  nodeRef: Xe.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Xe.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Xe.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Xe.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Xe.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Xe.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Ma.dontSetMe,
  style: Ma.dontSetMe,
  transform: Ma.dontSetMe
});
tt(sa, "defaultProps", {
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
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
      return typeof S;
    } : function(S) {
      return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    }, t(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return l.default;
    }
  }), e.default = void 0;
  var r = g(x), n = h(Hs), a = h(Fs), i = h(Zc), s = ke, o = _t, u = wt, l = h(aa), f = h(ia), d = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function h(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function v(y) {
    if (typeof WeakMap != "function")
      return null;
    var S = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
    return (v = function(R) {
      return R ? C : S;
    })(y);
  }
  function g(y, S) {
    if (!S && y && y.__esModule)
      return y;
    if (y === null || t(y) !== "object" && typeof y != "function")
      return { default: y };
    var C = v(S);
    if (C && C.has(y))
      return C.get(y);
    var N = {}, R = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var F in y)
      if (F !== "default" && Object.prototype.hasOwnProperty.call(y, F)) {
        var X = R ? Object.getOwnPropertyDescriptor(y, F) : null;
        X && (X.get || X.set) ? Object.defineProperty(N, F, X) : N[F] = y[F];
      }
    return N.default = y, C && C.set(y, N), N;
  }
  function w() {
    return w = Object.assign || function(y) {
      for (var S = 1; S < arguments.length; S++) {
        var C = arguments[S];
        for (var N in C)
          Object.prototype.hasOwnProperty.call(C, N) && (y[N] = C[N]);
      }
      return y;
    }, w.apply(this, arguments);
  }
  function P(y, S) {
    if (y == null)
      return {};
    var C = E(y, S), N, R;
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(y);
      for (R = 0; R < F.length; R++)
        N = F[R], !(S.indexOf(N) >= 0) && Object.prototype.propertyIsEnumerable.call(y, N) && (C[N] = y[N]);
    }
    return C;
  }
  function E(y, S) {
    if (y == null)
      return {};
    var C = {}, N = Object.keys(y), R, F;
    for (F = 0; F < N.length; F++)
      R = N[F], !(S.indexOf(R) >= 0) && (C[R] = y[R]);
    return C;
  }
  function _(y, S) {
    var C = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(y);
      S && (N = N.filter(function(R) {
        return Object.getOwnPropertyDescriptor(y, R).enumerable;
      })), C.push.apply(C, N);
    }
    return C;
  }
  function L(y) {
    for (var S = 1; S < arguments.length; S++) {
      var C = arguments[S] != null ? arguments[S] : {};
      S % 2 ? _(Object(C), !0).forEach(function(N) {
        le(y, N, C[N]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C)) : _(Object(C)).forEach(function(N) {
        Object.defineProperty(y, N, Object.getOwnPropertyDescriptor(C, N));
      });
    }
    return y;
  }
  function V(y, S) {
    return oe(y) || H(y, S) || U(y, S) || q();
  }
  function q() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function U(y, S) {
    if (y) {
      if (typeof y == "string")
        return ue(y, S);
      var C = Object.prototype.toString.call(y).slice(8, -1);
      if (C === "Object" && y.constructor && (C = y.constructor.name), C === "Map" || C === "Set")
        return Array.from(y);
      if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))
        return ue(y, S);
    }
  }
  function ue(y, S) {
    (S == null || S > y.length) && (S = y.length);
    for (var C = 0, N = new Array(S); C < S; C++)
      N[C] = y[C];
    return N;
  }
  function H(y, S) {
    var C = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (C != null) {
      var N = [], R = !0, F = !1, X, ne;
      try {
        for (C = C.call(y); !(R = (X = C.next()).done) && (N.push(X.value), !(S && N.length === S)); R = !0)
          ;
      } catch (ie) {
        F = !0, ne = ie;
      } finally {
        try {
          !R && C.return != null && C.return();
        } finally {
          if (F)
            throw ne;
        }
      }
      return N;
    }
  }
  function oe(y) {
    if (Array.isArray(y))
      return y;
  }
  function G(y, S) {
    if (!(y instanceof S))
      throw new TypeError("Cannot call a class as a function");
  }
  function ve(y, S) {
    for (var C = 0; C < S.length; C++) {
      var N = S[C];
      N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(y, N.key, N);
    }
  }
  function M(y, S, C) {
    return S && ve(y.prototype, S), C && ve(y, C), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function Z(y, S) {
    if (typeof S != "function" && S !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(S && S.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), S && J(y, S);
  }
  function J(y, S) {
    return J = Object.setPrototypeOf || function(N, R) {
      return N.__proto__ = R, N;
    }, J(y, S);
  }
  function ge(y) {
    var S = Te();
    return function() {
      var N = be(y), R;
      if (S) {
        var F = be(this).constructor;
        R = Reflect.construct(N, arguments, F);
      } else
        R = N.apply(this, arguments);
      return se(this, R);
    };
  }
  function se(y, S) {
    if (S && (t(S) === "object" || typeof S == "function"))
      return S;
    if (S !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return he(y);
  }
  function he(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function Te() {
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
  function be(y) {
    return be = Object.setPrototypeOf ? Object.getPrototypeOf : function(C) {
      return C.__proto__ || Object.getPrototypeOf(C);
    }, be(y);
  }
  function le(y, S, C) {
    return S in y ? Object.defineProperty(y, S, { value: C, enumerable: !0, configurable: !0, writable: !0 }) : y[S] = C, y;
  }
  var Pe = /* @__PURE__ */ function(y) {
    Z(C, y);
    var S = ge(C);
    function C(N) {
      var R;
      return G(this, C), R = S.call(this, N), le(he(R), "onDragStart", function(F, X) {
        (0, f.default)("Draggable: onDragStart: %j", X);
        var ne = R.props.onStart(F, (0, o.createDraggableData)(he(R), X));
        if (ne === !1)
          return !1;
        R.setState({
          dragging: !0,
          dragged: !0
        });
      }), le(he(R), "onDrag", function(F, X) {
        if (!R.state.dragging)
          return !1;
        (0, f.default)("Draggable: onDrag: %j", X);
        var ne = (0, o.createDraggableData)(he(R), X), ie = {
          x: ne.x,
          y: ne.y
        };
        if (R.props.bounds) {
          var Ue = ie.x, ze = ie.y;
          ie.x += R.state.slackX, ie.y += R.state.slackY;
          var Ne = (0, o.getBoundPosition)(he(R), ie.x, ie.y), fe = V(Ne, 2), Ze = fe[0], xe = fe[1];
          ie.x = Ze, ie.y = xe, ie.slackX = R.state.slackX + (Ue - ie.x), ie.slackY = R.state.slackY + (ze - ie.y), ne.x = ie.x, ne.y = ie.y, ne.deltaX = ie.x - R.state.x, ne.deltaY = ie.y - R.state.y;
        }
        var Ge = R.props.onDrag(F, ne);
        if (Ge === !1)
          return !1;
        R.setState(ie);
      }), le(he(R), "onDragStop", function(F, X) {
        if (!R.state.dragging)
          return !1;
        var ne = R.props.onStop(F, (0, o.createDraggableData)(he(R), X));
        if (ne === !1)
          return !1;
        (0, f.default)("Draggable: onDragStop: %j", X);
        var ie = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, Ue = !!R.props.position;
        if (Ue) {
          var ze = R.props.position, Ne = ze.x, fe = ze.y;
          ie.x = Ne, ie.y = fe;
        }
        R.setState(ie);
      }), R.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: N.position ? N.position.x : N.defaultPosition.x,
        y: N.position ? N.position.y : N.defaultPosition.y,
        prevPropsPosition: L({}, N.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, N.position && !(N.onDrag || N.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), R;
    }
    return M(C, [{
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
        var R, F, X;
        return (R = (F = this.props) === null || F === void 0 || (X = F.nodeRef) === null || X === void 0 ? void 0 : X.current) !== null && R !== void 0 ? R : a.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var R, F = this.props;
        F.axis, F.bounds;
        var X = F.children, ne = F.defaultPosition, ie = F.defaultClassName, Ue = F.defaultClassNameDragging, ze = F.defaultClassNameDragged, Ne = F.position, fe = F.positionOffset;
        F.scale;
        var Ze = P(F, d), xe = {}, Ge = null, Ft = !!Ne, te = !Ft || this.state.dragging, c = Ne || ne, p = {
          // Set left if horizontal drag is enabled
          x: (0, o.canDragX)(this) && te ? this.state.x : c.x,
          // Set top if vertical drag is enabled
          y: (0, o.canDragY)(this) && te ? this.state.y : c.y
        };
        this.state.isElementSVG ? Ge = (0, s.createSVGTransform)(p, fe) : xe = (0, s.createCSSTransform)(p, fe);
        var m = (0, i.default)(X.props.className || "", ie, (R = {}, le(R, Ue, this.state.dragging), le(R, ze, this.state.dragged), R));
        return /* @__PURE__ */ r.createElement(l.default, w({}, Ze, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only(X), {
          className: m,
          style: L(L({}, X.props.style), xe),
          transform: Ge
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(R, F) {
          var X = R.position, ne = F.prevPropsPosition;
          return X && (!ne || X.x !== ne.x || X.y !== ne.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
            position: X,
            prevPropsPosition: ne
          }), {
            x: X.x,
            y: X.y,
            prevPropsPosition: L({}, X)
          }) : null;
        }
      )
    }]), C;
  }(r.Component);
  e.default = Pe, le(Pe, "displayName", "Draggable"), le(Pe, "propTypes", L(L({}, l.default.propTypes), {}, {
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
    axis: n.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: n.default.oneOfType([n.default.shape({
      left: n.default.number,
      right: n.default.number,
      top: n.default.number,
      bottom: n.default.number
    }), n.default.string, n.default.oneOf([!1])]),
    defaultClassName: n.default.string,
    defaultClassNameDragging: n.default.string,
    defaultClassNameDragged: n.default.string,
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
    defaultPosition: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    positionOffset: n.default.shape({
      x: n.default.oneOfType([n.default.number, n.default.string]),
      y: n.default.oneOfType([n.default.number, n.default.string])
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
    position: n.default.shape({
      x: n.default.number,
      y: n.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: u.dontSetMe,
    style: u.dontSetMe,
    transform: u.dontSetMe
  })), le(Pe, "defaultProps", L(L({}, l.default.defaultProps), {}, {
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
})(xo);
var Ao = xo, Mo = Ao.default, jf = Ao.DraggableCore;
na.exports = Mo;
na.exports.default = Mo;
na.exports.DraggableCore = jf;
var Vf = na.exports;
const Wf = /* @__PURE__ */ Jn(Vf);
var Ff = globalThis && globalThis.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), qn = globalThis && globalThis.__assign || function() {
  return qn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, qn.apply(this, arguments);
}, Bf = {
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
}, $f = (
  /** @class */
  function(e) {
    Ff(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.onMouseDown = function(n) {
        r.props.onResizeStart(n, r.props.direction);
      }, r.onTouchStart = function(n) {
        r.props.onResizeStart(n, r.props.direction);
      }, r;
    }
    return t.prototype.render = function() {
      return x.createElement("div", { className: this.props.className || "", style: qn(qn({ position: "absolute", userSelect: "none" }, Bf[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, t;
  }(x.PureComponent)
), xi = { exports: {} };
function Hf(e, t) {
  var r = t && t.cache ? t.cache : Xf, n = t && t.serializer ? t.serializer : Gf, a = t && t.strategy ? t.strategy : Zf;
  return a(e, {
    cache: r,
    serializer: n
  });
}
function Uf(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function zo(e, t, r, n) {
  var a = Uf(n) ? n : r(n), i = t.get(a);
  return typeof i > "u" && (i = e.call(this, n), t.set(a, i)), i;
}
function Lo(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), a = r(n), i = t.get(a);
  return typeof i > "u" && (i = e.apply(this, n), t.set(a, i)), i;
}
function Si(e, t, r, n, a) {
  return r.bind(
    t,
    e,
    n,
    a
  );
}
function Zf(e, t) {
  var r = e.length === 1 ? zo : Lo;
  return Si(
    e,
    this,
    r,
    t.cache.create(),
    t.serializer
  );
}
function Yf(e, t) {
  var r = Lo;
  return Si(
    e,
    this,
    r,
    t.cache.create(),
    t.serializer
  );
}
function qf(e, t) {
  var r = zo;
  return Si(
    e,
    this,
    r,
    t.cache.create(),
    t.serializer
  );
}
function Gf() {
  return JSON.stringify(arguments);
}
function oa() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
oa.prototype.has = function(e) {
  return e in this.cache;
};
oa.prototype.get = function(e) {
  return this.cache[e];
};
oa.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Xf = {
  create: function() {
    return new oa();
  }
};
xi.exports = Hf;
xi.exports.strategies = {
  variadic: Yf,
  monadic: qf
};
var Qf = xi.exports;
const Qt = /* @__PURE__ */ Jn(Qf);
var Kf = globalThis && globalThis.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), gt = globalThis && globalThis.__assign || function() {
  return gt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, gt.apply(this, arguments);
}, Jf = {
  width: "auto",
  height: "auto"
}, wn = Qt(function(e, t, r) {
  return Math.max(Math.min(e, r), t);
}), gs = Qt(function(e, t) {
  return Math.round(e / t) * t;
}), rr = Qt(function(e, t) {
  return new RegExp(e, "i").test(t);
}), _n = function(e) {
  return !!(e.touches && e.touches.length);
}, ed = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, ms = Qt(function(e, t, r) {
  r === void 0 && (r = 0);
  var n = t.reduce(function(i, s, o) {
    return Math.abs(s - e) < Math.abs(t[i] - e) ? o : i;
  }, 0), a = Math.abs(t[n] - e);
  return r === 0 || a < r ? t[n] : e;
}), Me = Qt(function(e, t) {
  return e.substr(e.length - t.length, t.length) === t;
}), za = Qt(function(e) {
  return e = e.toString(), e === "auto" || Me(e, "px") || Me(e, "%") || Me(e, "vh") || Me(e, "vw") || Me(e, "vmax") || Me(e, "vmin") ? e : e + "px";
}), xn = function(e, t, r, n) {
  if (e && typeof e == "string") {
    if (Me(e, "px"))
      return Number(e.replace("px", ""));
    if (Me(e, "%")) {
      var a = Number(e.replace("%", "")) / 100;
      return t * a;
    }
    if (Me(e, "vw")) {
      var a = Number(e.replace("vw", "")) / 100;
      return r * a;
    }
    if (Me(e, "vh")) {
      var a = Number(e.replace("vh", "")) / 100;
      return n * a;
    }
  }
  return e;
}, td = Qt(function(e, t, r, n, a, i, s) {
  return n = xn(n, e.width, t, r), a = xn(a, e.height, t, r), i = xn(i, e.width, t, r), s = xn(s, e.height, t, r), {
    maxWidth: typeof n > "u" ? void 0 : Number(n),
    maxHeight: typeof a > "u" ? void 0 : Number(a),
    minWidth: typeof i > "u" ? void 0 : Number(i),
    minHeight: typeof s > "u" ? void 0 : Number(s)
  };
}), rd = [
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
], ys = "__resizable_base__", nd = (
  /** @class */
  function(e) {
    Kf(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.ratio = 1, n.resizable = null, n.parentLeft = 0, n.parentTop = 0, n.resizableLeft = 0, n.resizableRight = 0, n.resizableTop = 0, n.resizableBottom = 0, n.targetLeft = 0, n.targetTop = 0, n.appendBase = function() {
        if (!n.resizable || !n.window)
          return null;
        var a = n.parentNode;
        if (!a)
          return null;
        var i = n.window.document.createElement("div");
        return i.style.width = "100%", i.style.height = "100%", i.style.position = "absolute", i.style.transform = "scale(0, 0)", i.style.left = "0", i.style.flex = "0 0 100%", i.classList ? i.classList.add(ys) : i.className += ys, a.appendChild(i), i;
      }, n.removeBase = function(a) {
        var i = n.parentNode;
        i && i.removeChild(a);
      }, n.ref = function(a) {
        a && (n.resizable = a);
      }, n.state = {
        isResizing: !1,
        width: typeof (n.propsSize && n.propsSize.width) > "u" ? "auto" : n.propsSize && n.propsSize.width,
        height: typeof (n.propsSize && n.propsSize.height) > "u" ? "auto" : n.propsSize && n.propsSize.height,
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
      }, n.onResizeStart = n.onResizeStart.bind(n), n.onMouseMove = n.onMouseMove.bind(n), n.onMouseUp = n.onMouseUp.bind(n), n;
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
        return this.props.size || this.props.defaultSize || Jf;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
      get: function() {
        var r = 0, n = 0;
        if (this.resizable && this.window) {
          var a = this.resizable.offsetWidth, i = this.resizable.offsetHeight, s = this.resizable.style.position;
          s !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : a, n = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : i, this.resizable.style.position = s;
        }
        return { width: r, height: n };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "sizeStyle", {
      get: function() {
        var r = this, n = this.props.size, a = function(o) {
          if (typeof r.state[o] > "u" || r.state[o] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[o] && Me(r.propsSize[o].toString(), "%")) {
            if (Me(r.state[o].toString(), "%"))
              return r.state[o].toString();
            var u = r.getParentSize(), l = Number(r.state[o].toString().replace("px", "")), f = l / u[o] * 100;
            return f + "%";
          }
          return za(r.state[o]);
        }, i = n && typeof n.width < "u" && !this.state.isResizing ? za(n.width) : a("width"), s = n && typeof n.height < "u" && !this.state.isResizing ? za(n.height) : a("height");
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
      var n = !1, a = this.parentNode.style.flexWrap;
      a !== "wrap" && (n = !0, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var i = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return n && (this.parentNode.style.flexWrap = a), this.removeBase(r), i;
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
    }, t.prototype.createSizeForCssProperty = function(r, n) {
      var a = this.propsSize && this.propsSize[n];
      return this.state[n] === "auto" && this.state.original[n] === r && (typeof a > "u" || a === "auto") ? "auto" : r;
    }, t.prototype.calculateNewMaxFromBoundary = function(r, n) {
      var a = this.props.boundsByDirection, i = this.state.direction, s = a && rr("left", i), o = a && rr("top", i), u, l;
      if (this.props.bounds === "parent") {
        var f = this.parentNode;
        f && (u = s ? this.resizableRight - this.parentLeft : f.offsetWidth + (this.parentLeft - this.resizableLeft), l = o ? this.resizableBottom - this.parentTop : f.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (u = s ? this.resizableRight : this.window.innerWidth - this.resizableLeft, l = o ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (u = s ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), l = o ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return u && Number.isFinite(u) && (r = r && r < u ? r : u), l && Number.isFinite(l) && (n = n && n < l ? n : l), { maxWidth: r, maxHeight: n };
    }, t.prototype.calculateNewSizeFromDirection = function(r, n) {
      var a = this.props.scale || 1, i = this.props.resizeRatio || 1, s = this.state, o = s.direction, u = s.original, l = this.props, f = l.lockAspectRatio, d = l.lockAspectRatioExtraHeight, h = l.lockAspectRatioExtraWidth, v = u.width, g = u.height, w = d || 0, P = h || 0;
      return rr("right", o) && (v = u.width + (r - u.x) * i / a, f && (g = (v - P) / this.ratio + w)), rr("left", o) && (v = u.width - (r - u.x) * i / a, f && (g = (v - P) / this.ratio + w)), rr("bottom", o) && (g = u.height + (n - u.y) * i / a, f && (v = (g - w) * this.ratio + P)), rr("top", o) && (g = u.height - (n - u.y) * i / a, f && (v = (g - w) * this.ratio + P)), { newWidth: v, newHeight: g };
    }, t.prototype.calculateNewSizeFromAspectRatio = function(r, n, a, i) {
      var s = this.props, o = s.lockAspectRatio, u = s.lockAspectRatioExtraHeight, l = s.lockAspectRatioExtraWidth, f = typeof i.width > "u" ? 10 : i.width, d = typeof a.width > "u" || a.width < 0 ? r : a.width, h = typeof i.height > "u" ? 10 : i.height, v = typeof a.height > "u" || a.height < 0 ? n : a.height, g = u || 0, w = l || 0;
      if (o) {
        var P = (h - g) * this.ratio + w, E = (v - g) * this.ratio + w, _ = (f - w) / this.ratio + g, L = (d - w) / this.ratio + g, V = Math.max(f, P), q = Math.min(d, E), U = Math.max(h, _), ue = Math.min(v, L);
        r = wn(r, V, q), n = wn(n, U, ue);
      } else
        r = wn(r, f, d), n = wn(n, h, v);
      return { newWidth: r, newHeight: n };
    }, t.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var r = this.parentNode;
        if (r) {
          var n = r.getBoundingClientRect();
          this.parentLeft = n.left, this.parentTop = n.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var a = this.props.bounds.getBoundingClientRect();
        this.targetLeft = a.left, this.targetTop = a.top;
      }
      if (this.resizable) {
        var i = this.resizable.getBoundingClientRect(), s = i.left, o = i.top, u = i.right, l = i.bottom;
        this.resizableLeft = s, this.resizableRight = u, this.resizableTop = o, this.resizableBottom = l;
      }
    }, t.prototype.onResizeStart = function(r, n) {
      if (!(!this.resizable || !this.window)) {
        var a = 0, i = 0;
        if (r.nativeEvent && ed(r.nativeEvent) ? (a = r.nativeEvent.clientX, i = r.nativeEvent.clientY) : r.nativeEvent && _n(r.nativeEvent) && (a = r.nativeEvent.touches[0].clientX, i = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var s = this.props.onResizeStart(r, n, this.resizable);
          if (s === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var o, u = this.window.getComputedStyle(this.resizable);
        if (u.flexBasis !== "auto") {
          var l = this.parentNode;
          if (l) {
            var f = this.window.getComputedStyle(l).flexDirection;
            this.flexDir = f.startsWith("row") ? "row" : "column", o = u.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var d = {
          original: {
            x: a,
            y: i,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: gt(gt({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: n,
          flexBasis: o
        };
        this.setState(d);
      }
    }, t.prototype.onMouseMove = function(r) {
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && _n(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var n = this.props, a = n.maxWidth, i = n.maxHeight, s = n.minWidth, o = n.minHeight, u = _n(r) ? r.touches[0].clientX : r.clientX, l = _n(r) ? r.touches[0].clientY : r.clientY, f = this.state, d = f.direction, h = f.original, v = f.width, g = f.height, w = this.getParentSize(), P = td(w, this.window.innerWidth, this.window.innerHeight, a, i, s, o);
        a = P.maxWidth, i = P.maxHeight, s = P.minWidth, o = P.minHeight;
        var E = this.calculateNewSizeFromDirection(u, l), _ = E.newHeight, L = E.newWidth, V = this.calculateNewMaxFromBoundary(a, i);
        this.props.snap && this.props.snap.x && (L = ms(L, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (_ = ms(_, this.props.snap.y, this.props.snapGap));
        var q = this.calculateNewSizeFromAspectRatio(L, _, { width: V.maxWidth, height: V.maxHeight }, { width: s, height: o });
        if (L = q.newWidth, _ = q.newHeight, this.props.grid) {
          var U = gs(L, this.props.grid[0]), ue = gs(_, this.props.grid[1]), H = this.props.snapGap || 0;
          L = H === 0 || Math.abs(U - L) <= H ? U : L, _ = H === 0 || Math.abs(ue - _) <= H ? ue : _;
        }
        var oe = {
          width: L - h.width,
          height: _ - h.height
        };
        if (v && typeof v == "string") {
          if (Me(v, "%")) {
            var G = L / w.width * 100;
            L = G + "%";
          } else if (Me(v, "vw")) {
            var ve = L / this.window.innerWidth * 100;
            L = ve + "vw";
          } else if (Me(v, "vh")) {
            var M = L / this.window.innerHeight * 100;
            L = M + "vh";
          }
        }
        if (g && typeof g == "string") {
          if (Me(g, "%")) {
            var G = _ / w.height * 100;
            _ = G + "%";
          } else if (Me(g, "vw")) {
            var ve = _ / this.window.innerWidth * 100;
            _ = ve + "vw";
          } else if (Me(g, "vh")) {
            var M = _ / this.window.innerHeight * 100;
            _ = M + "vh";
          }
        }
        var Z = {
          width: this.createSizeForCssProperty(L, "width"),
          height: this.createSizeForCssProperty(_, "height")
        };
        this.flexDir === "row" ? Z.flexBasis = Z.width : this.flexDir === "column" && (Z.flexBasis = Z.height), this.setState(Z), this.props.onResize && this.props.onResize(r, d, this.resizable, oe);
      }
    }, t.prototype.onMouseUp = function(r) {
      var n = this.state, a = n.isResizing, i = n.direction, s = n.original;
      if (!(!a || !this.resizable)) {
        var o = {
          width: this.size.width - s.width,
          height: this.size.height - s.height
        };
        this.props.onResizeStop && this.props.onResizeStop(r, i, this.resizable, o), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: gt(gt({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, t.prototype.updateSize = function(r) {
      this.setState({ width: r.width, height: r.height });
    }, t.prototype.renderResizer = function() {
      var r = this, n = this.props, a = n.enable, i = n.handleStyles, s = n.handleClasses, o = n.handleWrapperStyle, u = n.handleWrapperClass, l = n.handleComponent;
      if (!a)
        return null;
      var f = Object.keys(a).map(function(d) {
        return a[d] !== !1 ? x.createElement($f, { key: d, direction: d, onResizeStart: r.onResizeStart, replaceStyles: i && i[d], className: s && s[d] }, l && l[d] ? l[d] : null) : null;
      });
      return x.createElement("div", { className: u, style: o }, f);
    }, t.prototype.render = function() {
      var r = this, n = Object.keys(this.props).reduce(function(s, o) {
        return rd.indexOf(o) !== -1 || (s[o] = r.props[o]), s;
      }, {}), a = gt(gt(gt({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (a.flexBasis = this.state.flexBasis);
      var i = this.props.as || "div";
      return x.createElement(
        i,
        gt({ ref: this.ref, style: a, className: this.props.className }, n),
        this.state.isResizing && x.createElement("div", { style: this.state.backgroundStyle }),
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
  }(x.PureComponent)
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
var Ja = function(e, t) {
  return Ja = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n)
      n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Ja(e, t);
};
function ad(e, t) {
  Ja(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Ce = function() {
  return Ce = Object.assign || function(t) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Ce.apply(this, arguments);
};
function id(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
var sd = Wf, od = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, ud = function(e) {
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
}, tv = (
  /** @class */
  function(e) {
    ad(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.resizingPosition = { x: 0, y: 0 }, n.offsetFromParent = { left: 0, top: 0 }, n.resizableElement = { current: null }, n.originalPosition = { x: 0, y: 0 }, n.refDraggable = function(a) {
        a && (n.draggable = a);
      }, n.refResizable = function(a) {
        a && (n.resizable = a, n.resizableElement.current = a.resizable);
      }, n.state = {
        resizing: !1,
        bounds: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        maxWidth: r.maxWidth,
        maxHeight: r.maxHeight
      }, n.onResizeStart = n.onResizeStart.bind(n), n.onResize = n.onResize.bind(n), n.onResizeStop = n.onResizeStop.bind(n), n.onDragStart = n.onDragStart.bind(n), n.onDrag = n.onDrag.bind(n), n.onDragStop = n.onDragStop.bind(n), n.getMaxSizesFromProps = n.getMaxSizesFromProps.bind(n), n;
    }
    return t.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var r = this.offsetFromParent, n = r.left, a = r.top, i = this.getDraggablePosition(), s = i.x, o = i.y;
      this.draggable.setState({
        x: s - n,
        y: o - a
      }), this.forceUpdate();
    }, t.prototype.getDraggablePosition = function() {
      var r = this.draggable.state, n = r.x, a = r.y;
      return { x: n, y: a };
    }, t.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, t.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, t.prototype.getMaxSizesFromProps = function() {
      var r = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, n = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: r, maxHeight: n };
    }, t.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, t.prototype.getOffsetHeight = function(r) {
      var n = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / n;
        case "body":
          return document.body.offsetHeight / n;
        default:
          return r.offsetHeight;
      }
    }, t.prototype.getOffsetWidth = function(r) {
      var n = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / n;
        case "body":
          return document.body.offsetWidth / n;
        default:
          return r.offsetWidth;
      }
    }, t.prototype.onDragStart = function(r, n) {
      this.props.onDragStart && this.props.onDragStart(r, n);
      var a = this.getDraggablePosition();
      if (this.originalPosition = a, !!this.props.bounds) {
        var i = this.getParent(), s = this.props.scale, o;
        if (this.props.bounds === "parent")
          o = i;
        else if (this.props.bounds === "body") {
          var u = i.getBoundingClientRect(), l = u.left, f = u.top, d = document.body.getBoundingClientRect(), h = -(l - i.offsetLeft * s - d.left) / s, v = -(f - i.offsetTop * s - d.top) / s, g = (document.body.offsetWidth - this.resizable.size.width * s) / s + h, w = (document.body.offsetHeight - this.resizable.size.height * s) / s + v;
          return this.setState({ bounds: { top: v, right: g, bottom: w, left: h } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var P = i.getBoundingClientRect(), E = P.left, _ = P.top, L = -(E - i.offsetLeft * s) / s, V = -(_ - i.offsetTop * s) / s, g = (window.innerWidth - this.resizable.size.width * s) / s + L, w = (window.innerHeight - this.resizable.size.height * s) / s + V;
          return this.setState({ bounds: { top: V, right: g, bottom: w, left: L } });
        } else
          typeof this.props.bounds == "string" ? o = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (o = this.props.bounds);
        if (!(!(o instanceof HTMLElement) || !(i instanceof HTMLElement))) {
          var q = o.getBoundingClientRect(), U = q.left, ue = q.top, H = i.getBoundingClientRect(), oe = H.left, G = H.top, ve = (U - oe) / s, M = ue - G;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var Z = this.offsetFromParent;
            this.setState({
              bounds: {
                top: M - Z.top,
                right: ve + (o.offsetWidth - this.resizable.size.width) - Z.left / s,
                bottom: M + (o.offsetHeight - this.resizable.size.height) - Z.top,
                left: ve - Z.left / s
              }
            });
          }
        }
      }
    }, t.prototype.onDrag = function(r, n) {
      if (this.props.onDrag) {
        var a = this.offsetFromParent, i = a.left, s = a.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, Ce(Ce({}, n), { x: n.x - i, y: n.y - s }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, Ce(Ce({}, n), { x: n.x + i, y: this.originalPosition.y + s, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, Ce(Ce({}, n), { x: this.originalPosition.x + i, y: n.y + s, deltaX: 0 }));
      }
    }, t.prototype.onDragStop = function(r, n) {
      if (this.props.onDragStop) {
        var a = this.offsetFromParent, i = a.left, s = a.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, Ce(Ce({}, n), { x: n.x + i, y: n.y + s }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, Ce(Ce({}, n), { x: n.x + i, y: this.originalPosition.y + s, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, Ce(Ce({}, n), { x: this.originalPosition.x + i, y: n.y + s, deltaX: 0 }));
      }
    }, t.prototype.onResizeStart = function(r, n, a) {
      r.stopPropagation(), this.setState({
        resizing: !0
      });
      var i = this.props.scale, s = this.offsetFromParent, o = this.getDraggablePosition();
      if (this.resizingPosition = { x: o.x + s.left, y: o.y + s.top }, this.originalPosition = o, this.props.bounds) {
        var u = this.getParent(), l = void 0;
        this.props.bounds === "parent" ? l = u : this.props.bounds === "body" ? l = document.body : this.props.bounds === "window" ? l = window : typeof this.props.bounds == "string" ? l = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (l = this.props.bounds);
        var f = this.getSelfElement();
        if (f instanceof Element && (l instanceof HTMLElement || l === window) && u instanceof HTMLElement) {
          var d = this.getMaxSizesFromProps(), h = d.maxWidth, v = d.maxHeight, g = this.getParentSize();
          if (h && typeof h == "string")
            if (h.endsWith("%")) {
              var w = Number(h.replace("%", "")) / 100;
              h = g.width * w;
            } else
              h.endsWith("px") && (h = Number(h.replace("px", "")));
          if (v && typeof v == "string")
            if (v.endsWith("%")) {
              var w = Number(v.replace("%", "")) / 100;
              v = g.width * w;
            } else
              v.endsWith("px") && (v = Number(v.replace("px", "")));
          var P = f.getBoundingClientRect(), E = P.left, _ = P.top, L = this.props.bounds === "window" ? { left: 0, top: 0 } : l.getBoundingClientRect(), V = L.left, q = L.top, U = this.getOffsetWidth(l), ue = this.getOffsetHeight(l), H = n.toLowerCase().endsWith("left"), oe = n.toLowerCase().endsWith("right"), G = n.startsWith("top"), ve = n.startsWith("bottom");
          if ((H || G) && this.resizable) {
            var M = (E - V) / i + this.resizable.size.width;
            this.setState({ maxWidth: M > Number(h) ? h : M });
          }
          if (oe || this.props.lockAspectRatio && !H && !G) {
            var M = U + (V - E) / i;
            this.setState({ maxWidth: M > Number(h) ? h : M });
          }
          if ((G || H) && this.resizable) {
            var M = (_ - q) / i + this.resizable.size.height;
            this.setState({
              maxHeight: M > Number(v) ? v : M
            });
          }
          if (ve || this.props.lockAspectRatio && !G && !H) {
            var M = ue + (q - _) / i;
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
      this.props.onResizeStart && this.props.onResizeStart(r, n, a);
    }, t.prototype.onResize = function(r, n, a, i) {
      var s = { x: this.originalPosition.x, y: this.originalPosition.y }, o = -i.width, u = -i.height, l = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      l.indexOf(n) !== -1 && (n === "bottomLeft" ? s.x += o : (n === "topRight" || (s.x += o), s.y += u)), (s.x !== this.draggable.state.x || s.y !== this.draggable.state.y) && this.draggable.setState(s), this.updateOffsetFromParent();
      var f = this.offsetFromParent, d = this.getDraggablePosition().x + f.left, h = this.getDraggablePosition().y + f.top;
      this.resizingPosition = { x: d, y: h }, this.props.onResize && this.props.onResize(r, n, a, i, {
        x: d,
        y: h
      });
    }, t.prototype.onResizeStop = function(r, n, a, i) {
      this.setState({
        resizing: !1
      });
      var s = this.getMaxSizesFromProps(), o = s.maxWidth, u = s.maxHeight;
      this.setState({ maxWidth: o, maxHeight: u }), this.props.onResizeStop && this.props.onResizeStop(r, n, a, i, this.resizingPosition);
    }, t.prototype.updateSize = function(r) {
      this.resizable && this.resizable.updateSize({ width: r.width, height: r.height });
    }, t.prototype.updatePosition = function(r) {
      this.draggable.setState(r);
    }, t.prototype.updateOffsetFromParent = function() {
      var r = this.props.scale, n = this.getParent(), a = this.getSelfElement();
      if (!n || a === null)
        return {
          top: 0,
          left: 0
        };
      var i = n.getBoundingClientRect(), s = i.left, o = i.top, u = a.getBoundingClientRect(), l = this.getDraggablePosition(), f = n.scrollLeft, d = n.scrollTop;
      this.offsetFromParent = {
        left: u.left - s + f - l.x * r,
        top: u.top - o + d - l.y * r
      };
    }, t.prototype.render = function() {
      var r = this.props, n = r.disableDragging, a = r.style, i = r.dragHandleClassName, s = r.position, o = r.onMouseDown, u = r.onMouseUp, l = r.dragAxis, f = r.dragGrid, d = r.bounds, h = r.enableUserSelectHack, v = r.cancel, g = r.children;
      r.onResizeStart, r.onResize, r.onResizeStop, r.onDragStart, r.onDrag, r.onDragStop;
      var w = r.resizeHandleStyles, P = r.resizeHandleClasses, E = r.resizeHandleComponent, _ = r.enableResizing, L = r.resizeGrid, V = r.resizeHandleWrapperClass, q = r.resizeHandleWrapperStyle, U = r.scale, ue = r.allowAnyClick, H = id(r, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), oe = this.props.default ? Ce({}, this.props.default) : void 0;
      delete H.default;
      var G = n || i ? { cursor: "auto" } : { cursor: "move" }, ve = Ce(Ce(Ce({}, od), G), a), M = this.offsetFromParent, Z = M.left, J = M.top, ge;
      s && (ge = {
        x: s.x - Z,
        y: s.y - J
      });
      var se = this.state.resizing ? void 0 : ge, he = this.state.resizing ? "both" : l;
      return x.createElement(
        sd,
        { ref: this.refDraggable, handle: i ? ".".concat(i) : void 0, defaultPosition: oe, onMouseDown: o, onMouseUp: u, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: he, disabled: n, grid: f, bounds: d ? this.state.bounds : void 0, position: se, enableUserSelectHack: h, cancel: v, scale: U, allowAnyClick: ue, nodeRef: this.resizableElement },
        x.createElement(nd, Ce({}, H, { ref: this.refResizable, defaultSize: oe, size: this.props.size, enable: typeof _ == "boolean" ? ud(_) : _, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: ve, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: L, handleWrapperClass: V, handleWrapperStyle: q, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: w, handleClasses: P, handleComponent: E, scale: this.props.scale }), g)
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
  }(x.PureComponent)
), Di = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = _o;
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
})(Di);
const ld = x.forwardRef(({
  placeholder: e = "Введите",
  ...t
}, r) => /* @__PURE__ */ W("input", { ref: r, placeholder: e, ...t })), cd = ({
  label: e,
  helperText: t,
  className: r,
  inputWrapRef: n,
  onBlur: a,
  onFocus: i,
  error: s,
  afterItems: o,
  disabled: u,
  isLoading: l,
  inputComponent: f = ld,
  ...d
}, h) => {
  const [v, g] = k.useState(!1), {
    getRootProps: w,
    getInputProps: P
  } = Ju({
    error: !!s,
    onBlur: a,
    onFocus: i,
    disabled: u,
    inputRef: h,
    ...d
  }), {
    onBlur: E,
    onFocus: _,
    ...L
  } = P();
  L.value = L.value || "";
  const V = x.useCallback((ue) => {
    u || (g(!0), _ == null || _(ue));
  }, [u, g, _]), q = x.useCallback((ue) => {
    g(!1), E == null || E(ue);
  }, [g, E]);
  let U = /* @__PURE__ */ et("div", { className: r, ref: n, css: [{
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
  } : !u && {
    ":hover": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(114 117 191 / var(--tw-border-opacity))"
    }
  }], children: [
    l && /* @__PURE__ */ et("div", { css: {
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
      /* @__PURE__ */ W(kt, { icon: Ws.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ W(f, { css: [{
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
    }, u && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }], onFocus: V, onBlur: q, ...d, ...L, type: l ? "hidden" : d.type || "text" }),
    o && !u && /* @__PURE__ */ W("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: o })
  ] });
  return e && (U = /* @__PURE__ */ W(ra, { label: e, error: s, helperText: t, ...w(), children: U })), U;
}, sn = x.forwardRef(cd), fd = ({
  getTagProps: e,
  optionRender: t,
  getOptionLabel: r,
  items: n,
  isLoading: a,
  valueCount: i
}) => a ? /* @__PURE__ */ W("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: Array.from({
  length: i
}).map((s, o) => /* @__PURE__ */ W("div", { css: [{
  "@keyframes pulse": {
    "50%": {
      opacity: ".5"
    }
  },
  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  borderRadius: "0.25rem",
  borderWidth: "1px",
  "--tw-border-opacity": "1",
  borderColor: "rgb(210 213 235 / var(--tw-border-opacity))",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(229 230 244 / var(--tw-bg-opacity))"
}, di`
              width: ${Math.round(Math.random() * 5) * 30 + 60}px;
              height: 30px;
            `] }, o)) }) : n && (n == null ? void 0 : n.length) > 0 && /* @__PURE__ */ W("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: n.map((s, o) => {
  const {
    onDelete: u,
    key: l,
    ...f
  } = e({
    index: o
  });
  return /* @__PURE__ */ et("div", { ...f, css: {
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
    /* @__PURE__ */ W("span", { children: t ? t(s) : r(s) }),
    /* @__PURE__ */ W("button", { onClick: u, children: /* @__PURE__ */ W(kt, { icon: Di.faTimes, css: {
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    } }) })
  ] }, l);
}) }), Io = "id", dd = ({
  text: e = "Загрузка"
}) => {
  const [t, r] = x.useState("");
  return x.useEffect(() => {
    const n = setInterval(() => {
      r((a) => a.length < 3 ? a + "." : "");
    }, 300);
    return () => clearInterval(n);
  }, []), /* @__PURE__ */ et("span", { css: {
    "@keyframes pulse": {
      "50%": {
        opacity: ".5"
      }
    },
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  }, children: [
    e,
    t
  ] });
}, hd = ({
  className: e,
  isLoading: t = !1,
  inputLoading: r = !1,
  valueLoading: n = !1,
  idField: a = Io,
  displayField: i,
  options: s,
  multiple: o,
  open: u = !1,
  label: l,
  helperText: f,
  error: d,
  onOpen: h,
  onClose: v,
  optionRender: g,
  onChange: w,
  onInputChange: P,
  onSelect: E,
  disabled: _,
  placeholder: L = "Выберите",
  value: V,
  allowClear: q = !0,
  autoComplete: U = !0,
  autoSelect: ue = !1,
  afterItems: H,
  popupAdditionalOptionsRenderer: oe,
  tagListPosition: G = "top",
  tagListRenderer: ve,
  ...M
}, Z) => {
  const J = x.useCallback((te) => i && i in te ? te[i] : JSON.stringify(te), [i]), [ge, se] = x.useState(u);
  x.useEffect(() => {
    se(u);
  }, [u]);
  const he = x.useMemo(() => o ? (V == null ? void 0 : V.map((te) => s.find((c) => c[a] == te)).filter((te) => !!te)) || [] : s.find((te) => te[a] == V) || null, [V, s]), {
    value: Te,
    getRootProps: be,
    getInputProps: le,
    getListboxProps: Pe,
    getOptionProps: y,
    groupedOptions: S,
    getClearProps: C,
    setAnchorEl: N,
    anchorEl: R,
    popupOpen: F,
    getTagProps: X
  } = el({
    options: s,
    autoComplete: U,
    autoSelect: ue,
    multiple: o,
    open: ge,
    value: he,
    getOptionLabel: J,
    isOptionEqualToValue: (te, c) => a ? te[a] === c[a] : te === c,
    onInputChange: P,
    onOpen: (te) => {
      se(!0), h == null || h(te);
    },
    onClose: (te, c) => {
      se(!1), v == null || v(te, c);
    },
    clearOnBlur: !1,
    disabled: _,
    unstable_classNamePrefix: "c",
    onChange: (te, c) => {
      w && (Array.isArray(c) ? w(c.map((p) => p[a])) : w(c && typeof c == "object" ? c[a] : null)), E == null || E(c);
    }
  }), ne = x.useMemo(() => oe ? oe({
    closePopup: () => se(!1)
  }) : null, [oe, se]), ie = t ? /* @__PURE__ */ W("div", { css: {
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
  }, children: /* @__PURE__ */ W(dd, {}) }) : /* @__PURE__ */ W("ul", { css: {
    zIndex: "20",
    width: "100%"
  }, ...Pe(), children: R && S.length > 0 ? /* @__PURE__ */ et(kn, { children: [
    S.map((te, c) => /* @__PURE__ */ W(k.Fragment, { children: "group" in te ? /* @__PURE__ */ W(kn, {}) : /* @__PURE__ */ W("li", { css: [{
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
    }, di`
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
                    `], ...y({
      option: te,
      index: c
    }), children: g ? g(te) : J(te) }) }, a in te ? te[a] : c)),
    ne
  ] }) : ne }), Ue = x.useMemo(() => o ? Te && Te.length > 0 : !!Te, [Te, o]), {
    onBlur: ze,
    onChange: Ne,
    ref: fe,
    ...Ze
  } = le(), xe = Us(Z, fe), Ge = x.useMemo(() => o ? ve ? ve({
    items: Te,
    isLoading: n,
    onDelete: (te) => {
      w == null || w(Te.filter((c) => c[a] !== te[a]).map((c) => c[a]));
    },
    valueCount: (V == null ? void 0 : V.length) || 0
  }) : /* @__PURE__ */ W(fd, { items: Te, optionRender: g, getOptionLabel: J, getTagProps: X, isLoading: n, valueCount: V == null ? void 0 : V.length }) : null, [Te, ve]), Ft = /* @__PURE__ */ et(kn, { children: [
    G === "top" && Ge,
    /* @__PURE__ */ W(sn, { ...M, error: d, ...Ze, ref: xe, inputWrapRef: N, placeholder: L, isLoading: r, onChange: Ne, onBlur: (te) => {
      ze == null || ze(te), o && (Ne == null || Ne({
        ...te,
        target: {
          ...te.target,
          value: ""
        }
      }));
    }, afterItems: !_ && [H && /* @__PURE__ */ W(k.Fragment, { children: H }, "after-items"), Ue && q && !o && /* @__PURE__ */ W("button", { ...C(), onMouseDown: (te) => {
      te.preventDefault(), te.stopPropagation();
    }, children: /* @__PURE__ */ W(kt, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: Di.faTimes }) }, "clear"), /* @__PURE__ */ W("button", { css: [{
      pointerEvents: "none"
    }], children: /* @__PURE__ */ W(kt, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, d && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: Yu.faCaretDown }) }, "arrow")] }),
    G === "bottom" && Ge,
    R && /* @__PURE__ */ W(Zs, { open: F, anchorEl: R, children: /* @__PURE__ */ W("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: R.offsetWidth
    }], children: ie }) })
  ] });
  return /* @__PURE__ */ W(ra, { label: l, error: d, helperText: f, className: e, ...be(), children: Ft });
}, jo = x.forwardRef(hd), pd = Ys(({
  className: e,
  ...t
}) => /* @__PURE__ */ W(tl, { ...t, classes: {
  popper: e
} }))`
  .${Gi.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${Gi.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`, vd = ({
  children: e,
  className: t,
  tooltip: r,
  icon: n,
  iconAfter: a,
  ...i
}) => {
  let s = /* @__PURE__ */ et(rl, { className: t, css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...i, children: [
    n && /* @__PURE__ */ W(kt, { icon: n }),
    e,
    a && /* @__PURE__ */ W(kt, { icon: a })
  ] });
  return r && (s = /* @__PURE__ */ W(pd, { title: r, arrow: !0, children: s })), s;
}, rv = vd, Oi = (e, t) => x.forwardRef((r, n) => /* @__PURE__ */ W(e, { ...t, ...r, ref: n }));
var Vo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "eye", n = 576, a = 512, i = [128065], s = "f06e", o = "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      a,
      i,
      s,
      o
    ]
  }, e.faEye = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = a, e.ligatures = i, e.unicode = s, e.svgPathData = o, e.aliases = i;
})(Vo);
const gd = (e, t) => {
  const [r, n] = x.useState(!1);
  return /* @__PURE__ */ W(il, { ref: t, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ W(nl, { position: "end", children: /* @__PURE__ */ W(al, { size: "small", edge: "end", onClick: () => n((a) => !a), children: /* @__PURE__ */ W(kt, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, di`
                  width: 18px;
                `], icon: r ? qu.faEyeSlash : Vo.faEye }) }) })
  }, ...e });
};
x.forwardRef(gd);
const ei = (e) => Array.isArray(e) ? e.length === 0 : !e, md = ({
  dictionary: e,
  open: t = !1,
  value: r,
  filterOptions: n,
  ...a
}, i) => {
  const [s, o] = x.useState(t), u = Gu(e, {
    enabled: s || !!r
  });
  x.useEffect(() => {
    o(t);
  }, [t]);
  const l = x.useMemo(() => n && u.data ? n(u.data) : u.data, [u.data, n]);
  return /* @__PURE__ */ W(
    jo,
    {
      displayField: "name",
      ...a,
      ref: i,
      open: s,
      value: r,
      isLoading: u.isLoading,
      onOpen: () => {
        o(!0);
      },
      onClose: () => {
        o(!1);
      },
      options: l || [],
      inputLoading: u.isLoading && !ei(r),
      disabled: u.isLoading && !ei(r) || a.disabled
    }
  );
}, nv = x.forwardRef(md);
var yd = "Expected a function", Wo = "__lodash_hash_undefined__", bd = "[object Function]", wd = "[object GeneratorFunction]", _d = /[\\^$.*+?()[\]{}|]/g, xd = /^\[object .+?Constructor\]$/, Sd = typeof mn == "object" && mn && mn.Object === Object && mn, Dd = typeof self == "object" && self && self.Object === Object && self, Fo = Sd || Dd || Function("return this")();
function Od(e, t) {
  return e == null ? void 0 : e[t];
}
function kd(e) {
  var t = !1;
  if (e != null && typeof e.toString != "function")
    try {
      t = !!(e + "");
    } catch {
    }
  return t;
}
var Td = Array.prototype, Ed = Function.prototype, Bo = Object.prototype, La = Fo["__core-js_shared__"], bs = function() {
  var e = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), $o = Ed.toString, ki = Bo.hasOwnProperty, Cd = Bo.toString, Rd = RegExp(
  "^" + $o.call(ki).replace(_d, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), Pd = Td.splice, Nd = Ho(Fo, "Map"), $r = Ho(Object, "create");
function Gt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function Ad() {
  this.__data__ = $r ? $r(null) : {};
}
function Md(e) {
  return this.has(e) && delete this.__data__[e];
}
function zd(e) {
  var t = this.__data__;
  if ($r) {
    var r = t[e];
    return r === Wo ? void 0 : r;
  }
  return ki.call(t, e) ? t[e] : void 0;
}
function Ld(e) {
  var t = this.__data__;
  return $r ? t[e] !== void 0 : ki.call(t, e);
}
function Id(e, t) {
  var r = this.__data__;
  return r[e] = $r && t === void 0 ? Wo : t, this;
}
Gt.prototype.clear = Ad;
Gt.prototype.delete = Md;
Gt.prototype.get = zd;
Gt.prototype.has = Ld;
Gt.prototype.set = Id;
function br(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function jd() {
  this.__data__ = [];
}
function Vd(e) {
  var t = this.__data__, r = ua(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Pd.call(t, r, 1), !0;
}
function Wd(e) {
  var t = this.__data__, r = ua(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Fd(e) {
  return ua(this.__data__, e) > -1;
}
function Bd(e, t) {
  var r = this.__data__, n = ua(r, e);
  return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
}
br.prototype.clear = jd;
br.prototype.delete = Vd;
br.prototype.get = Wd;
br.prototype.has = Fd;
br.prototype.set = Bd;
function Kt(e) {
  var t = -1, r = e ? e.length : 0;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
function $d() {
  this.__data__ = {
    hash: new Gt(),
    map: new (Nd || br)(),
    string: new Gt()
  };
}
function Hd(e) {
  return la(this, e).delete(e);
}
function Ud(e) {
  return la(this, e).get(e);
}
function Zd(e) {
  return la(this, e).has(e);
}
function Yd(e, t) {
  return la(this, e).set(e, t), this;
}
Kt.prototype.clear = $d;
Kt.prototype.delete = Hd;
Kt.prototype.get = Ud;
Kt.prototype.has = Zd;
Kt.prototype.set = Yd;
function ua(e, t) {
  for (var r = e.length; r--; )
    if (Kd(e[r][0], t))
      return r;
  return -1;
}
function qd(e) {
  if (!Uo(e) || Xd(e))
    return !1;
  var t = Jd(e) || kd(e) ? Rd : xd;
  return t.test(Qd(e));
}
function la(e, t) {
  var r = e.__data__;
  return Gd(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ho(e, t) {
  var r = Od(e, t);
  return qd(r) ? r : void 0;
}
function Gd(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xd(e) {
  return !!bs && bs in e;
}
function Qd(e) {
  if (e != null) {
    try {
      return $o.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
function Ti(e, t) {
  if (typeof e != "function" || t && typeof t != "function")
    throw new TypeError(yd);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var s = e.apply(this, n);
    return r.cache = i.set(a, s), s;
  };
  return r.cache = new (Ti.Cache || Kt)(), r;
}
Ti.Cache = Kt;
function Kd(e, t) {
  return e === t || e !== e && t !== t;
}
function Jd(e) {
  var t = Uo(e) ? Cd.call(e) : "";
  return t == bd || t == wd;
}
function Uo(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
var eh = Ti;
const Zo = /* @__PURE__ */ Jn(eh);
function Yo(e) {
  return JSON.stringify(e);
}
function th(e) {
  return typeof e == "string";
}
function rh(e, t, r) {
  return r.indexOf(e) === t;
}
function nh(e) {
  return e.toLowerCase() === e;
}
function ws(e) {
  return e.indexOf(",") === -1 ? e : e.split(",");
}
function ti(e) {
  if (!e)
    return e;
  if (e === "C" || e === "posix" || e === "POSIX")
    return "en-US";
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0], r = t === void 0 ? "" : t;
    return ti(r);
  }
  if (e.indexOf("@") !== -1) {
    var n = e.split("@")[0], r = n === void 0 ? "" : n;
    return ti(r);
  }
  if (e.indexOf("-") === -1 || !nh(e))
    return e;
  var a = e.split("-"), i = a[0], s = a[1], o = s === void 0 ? "" : s;
  return "".concat(i, "-").concat(o.toUpperCase());
}
function ah(e) {
  var t = e === void 0 ? {} : e, r = t.useFallbackLocale, n = r === void 0 ? !0 : r, a = t.fallbackLocale, i = a === void 0 ? "en-US" : a, s = [];
  if (typeof navigator < "u") {
    for (var o = navigator.languages || [], u = [], l = 0, f = o; l < f.length; l++) {
      var d = f[l];
      u = u.concat(ws(d));
    }
    var h = navigator.language, v = h && ws(h);
    s = s.concat(u, v);
  }
  return n && s.push(i), s.filter(th).map(ti).filter(rh);
}
var ih = Zo(ah, Yo);
function sh(e) {
  return ih(e)[0] || null;
}
var qo = Zo(sh, Yo);
function Et(e, t, r) {
  return function(a, i) {
    i === void 0 && (i = r);
    var s = e(a) + i;
    return t(s);
  };
}
function on(e) {
  return function(r) {
    return new Date(e(r).getTime() - 1);
  };
}
function un(e, t) {
  return function(n) {
    return [e(n), t(n)];
  };
}
function ye(e) {
  if (e instanceof Date)
    return e.getFullYear();
  if (typeof e == "number")
    return e;
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t))
    return t;
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function Vt(e) {
  if (e instanceof Date)
    return e.getMonth();
  throw new Error("Failed to get month from date: ".concat(e, "."));
}
function ca(e) {
  if (e instanceof Date)
    return e.getDate();
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function wr(e) {
  var t = ye(e), r = t + (-t + 1) % 100, n = /* @__PURE__ */ new Date();
  return n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
}
var oh = Et(ye, wr, -100), Go = Et(ye, wr, 100), Ei = on(Go), uh = Et(ye, Ei, -100), Xo = un(wr, Ei);
function Wt(e) {
  var t = ye(e), r = t + (-t + 1) % 10, n = /* @__PURE__ */ new Date();
  return n.setFullYear(r, 0, 1), n.setHours(0, 0, 0, 0), n;
}
var Qo = Et(ye, Wt, -10), Ci = Et(ye, Wt, 10), fa = on(Ci), Ko = Et(ye, fa, -10), Jo = un(Wt, fa);
function _r(e) {
  var t = ye(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var eu = Et(ye, _r, -1), Ri = Et(ye, _r, 1), da = on(Ri), tu = Et(ye, da, -1), lh = un(_r, da);
function Pi(e, t) {
  return function(n, a) {
    a === void 0 && (a = t);
    var i = ye(n), s = Vt(n) + a, o = /* @__PURE__ */ new Date();
    return o.setFullYear(i, s, 1), o.setHours(0, 0, 0, 0), e(o);
  };
}
function Jt(e) {
  var t = ye(e), r = Vt(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, r, 1), n.setHours(0, 0, 0, 0), n;
}
var ru = Pi(Jt, -1), Ni = Pi(Jt, 1), ln = on(Ni), nu = Pi(ln, -1), ch = un(Jt, ln);
function fh(e, t) {
  return function(n, a) {
    a === void 0 && (a = t);
    var i = ye(n), s = Vt(n), o = ca(n) + a, u = /* @__PURE__ */ new Date();
    return u.setFullYear(i, s, o), u.setHours(0, 0, 0, 0), e(u);
  };
}
function cn(e) {
  var t = ye(e), r = Vt(e), n = ca(e), a = /* @__PURE__ */ new Date();
  return a.setFullYear(t, r, n), a.setHours(0, 0, 0, 0), a;
}
var dh = fh(cn, 1), Ai = on(dh), hh = un(cn, Ai);
function au(e) {
  return ca(ln(e));
}
var kr, me = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, or = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
}, ph = (kr = {}, kr[me.GREGORY] = [
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
], kr[me.HEBREW] = ["he", "he-IL"], kr[me.ISLAMIC] = [
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
], kr), Mi = [0, 1, 2, 3, 4, 5, 6], Ia = /* @__PURE__ */ new Map();
function vh(e) {
  return function(r, n) {
    var a = r || qo();
    Ia.has(a) || Ia.set(a, /* @__PURE__ */ new Map());
    var i = Ia.get(a);
    return i.has(e) || i.set(e, new Intl.DateTimeFormat(a || void 0, e).format), i.get(e)(n);
  };
}
function gh(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function er(e) {
  return function(t, r) {
    return vh(e)(t, gh(r));
  };
}
var mh = { day: "numeric" }, yh = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, bh = { month: "long" }, wh = {
  month: "long",
  year: "numeric"
}, _h = { weekday: "short" }, xh = { weekday: "long" }, Sh = { year: "numeric" }, Dh = er(mh), Oh = er(yh), kh = er(bh), iu = er(wh), Th = er(_h), Eh = er(xh), ha = er(Sh), Ch = Mi[0], Rh = Mi[5], _s = Mi[6];
function Hr(e, t) {
  t === void 0 && (t = me.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case me.ISO_8601:
      return (r + 6) % 7;
    case me.ISLAMIC:
      return (r + 1) % 7;
    case me.HEBREW:
    case me.GREGORY:
      return r;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function Ph(e) {
  var t = wr(e);
  return ye(t);
}
function Nh(e) {
  var t = Wt(e);
  return ye(t);
}
function ri(e, t) {
  t === void 0 && (t = me.ISO_8601);
  var r = ye(e), n = Vt(e), a = e.getDate() - Hr(e, t);
  return new Date(r, n, a);
}
function Ah(e, t) {
  t === void 0 && (t = me.ISO_8601);
  var r = t === me.GREGORY ? me.GREGORY : me.ISO_8601, n = ri(e, t), a = ye(e) + 1, i, s;
  do
    i = new Date(a, 0, r === me.ISO_8601 ? 4 : 1), s = ri(i, t), a -= 1;
  while (e < s);
  return Math.round((n.getTime() - s.getTime()) / (864e5 * 7)) + 1;
}
function Ut(e, t) {
  switch (e) {
    case "century":
      return wr(t);
    case "decade":
      return Wt(t);
    case "year":
      return _r(t);
    case "month":
      return Jt(t);
    case "day":
      return cn(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Mh(e, t) {
  switch (e) {
    case "century":
      return oh(t);
    case "decade":
      return Qo(t);
    case "year":
      return eu(t);
    case "month":
      return ru(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function su(e, t) {
  switch (e) {
    case "century":
      return Go(t);
    case "decade":
      return Ci(t);
    case "year":
      return Ri(t);
    case "month":
      return Ni(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function zh(e, t) {
  switch (e) {
    case "decade":
      return Qo(t, -100);
    case "year":
      return eu(t, -10);
    case "month":
      return ru(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Lh(e, t) {
  switch (e) {
    case "decade":
      return Ci(t, 100);
    case "year":
      return Ri(t, 10);
    case "month":
      return Ni(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ou(e, t) {
  switch (e) {
    case "century":
      return Ei(t);
    case "decade":
      return fa(t);
    case "year":
      return da(t);
    case "month":
      return ln(t);
    case "day":
      return Ai(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Ih(e, t) {
  switch (e) {
    case "century":
      return uh(t);
    case "decade":
      return Ko(t);
    case "year":
      return tu(t);
    case "month":
      return nu(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function jh(e, t) {
  switch (e) {
    case "decade":
      return Ko(t, -100);
    case "year":
      return tu(t, -10);
    case "month":
      return nu(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function xs(e, t) {
  switch (e) {
    case "century":
      return Xo(t);
    case "decade":
      return Jo(t);
    case "year":
      return lh(t);
    case "month":
      return ch(t);
    case "day":
      return hh(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Vh(e, t, r) {
  var n = [t, r].sort(function(a, i) {
    return a.getTime() - i.getTime();
  });
  return [Ut(e, n[0]), ou(e, n[1])];
}
function uu(e, t, r) {
  return t === void 0 && (t = ha), r.map(function(n) {
    return t(e, n);
  }).join(" – ");
}
function Wh(e, t, r) {
  return uu(e, t, Xo(r));
}
function lu(e, t, r) {
  return uu(e, t, Jo(r));
}
function Fh(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function cu(e, t) {
  t === void 0 && (t = me.ISO_8601);
  var r = e.getDay();
  switch (t) {
    case me.ISLAMIC:
    case me.HEBREW:
      return r === Rh || r === _s;
    case me.ISO_8601:
    case me.GREGORY:
      return r === _s || r === Ch;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var vt = "react-calendar__navigation";
function Bh(e) {
  var t = e.activeStartDate, r = e.drillUp, n = e.formatMonthYear, a = n === void 0 ? iu : n, i = e.formatYear, s = i === void 0 ? ha : i, o = e.locale, u = e.maxDate, l = e.minDate, f = e.navigationAriaLabel, d = f === void 0 ? "" : f, h = e.navigationAriaLive, v = e.navigationLabel, g = e.next2AriaLabel, w = g === void 0 ? "" : g, P = e.next2Label, E = P === void 0 ? "»" : P, _ = e.nextAriaLabel, L = _ === void 0 ? "" : _, V = e.nextLabel, q = V === void 0 ? "›" : V, U = e.prev2AriaLabel, ue = U === void 0 ? "" : U, H = e.prev2Label, oe = H === void 0 ? "«" : H, G = e.prevAriaLabel, ve = G === void 0 ? "" : G, M = e.prevLabel, Z = M === void 0 ? "‹" : M, J = e.setActiveStartDate, ge = e.showDoubleView, se = e.view, he = e.views, Te = he.indexOf(se) > 0, be = se !== "century", le = Mh(se, t), Pe = be ? zh(se, t) : void 0, y = su(se, t), S = be ? Lh(se, t) : void 0, C = function() {
    if (le.getFullYear() < 0)
      return !0;
    var fe = Ih(se, t);
    return l && l >= fe;
  }(), N = be && function() {
    if (Pe.getFullYear() < 0)
      return !0;
    var fe = jh(se, t);
    return l && l >= fe;
  }(), R = u && u < y, F = be && u && u < S;
  function X() {
    J(le, "prev");
  }
  function ne() {
    J(Pe, "prev2");
  }
  function ie() {
    J(y, "next");
  }
  function Ue() {
    J(S, "next2");
  }
  function ze(fe) {
    var Ze = function() {
      switch (se) {
        case "century":
          return Wh(o, s, fe);
        case "decade":
          return lu(o, s, fe);
        case "year":
          return s(o, fe);
        case "month":
          return a(o, fe);
        default:
          throw new Error("Invalid view: ".concat(se, "."));
      }
    }();
    return v ? v({
      date: fe,
      label: Ze,
      locale: o || qo() || void 0,
      view: se
    }) : Ze;
  }
  function Ne() {
    var fe = "".concat(vt, "__label");
    return k.createElement(
      "button",
      { "aria-label": d, "aria-live": h, className: fe, disabled: !Te, onClick: r, style: { flexGrow: 1 }, type: "button" },
      k.createElement("span", { className: "".concat(fe, "__labelText ").concat(fe, "__labelText--from") }, ze(t)),
      ge ? k.createElement(
        k.Fragment,
        null,
        k.createElement("span", { className: "".concat(fe, "__divider") }, " – "),
        k.createElement("span", { className: "".concat(fe, "__labelText ").concat(fe, "__labelText--to") }, ze(y))
      ) : null
    );
  }
  return k.createElement(
    "div",
    { className: vt },
    oe !== null && be ? k.createElement("button", { "aria-label": ue, className: "".concat(vt, "__arrow ").concat(vt, "__prev2-button"), disabled: N, onClick: ne, type: "button" }, oe) : null,
    Z !== null && k.createElement("button", { "aria-label": ve, className: "".concat(vt, "__arrow ").concat(vt, "__prev-button"), disabled: C, onClick: X, type: "button" }, Z),
    Ne(),
    q !== null && k.createElement("button", { "aria-label": L, className: "".concat(vt, "__arrow ").concat(vt, "__next-button"), disabled: R, onClick: ie, type: "button" }, q),
    E !== null && be ? k.createElement("button", { "aria-label": w, className: "".concat(vt, "__arrow ").concat(vt, "__next2-button"), disabled: F, onClick: Ue, type: "button" }, E) : null
  );
}
var ur = globalThis && globalThis.__assign || function() {
  return ur = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ur.apply(this, arguments);
}, $h = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Ss(e) {
  return "".concat(e, "%");
}
function zi(e) {
  var t = e.children, r = e.className, n = e.count, a = e.direction, i = e.offset, s = e.style, o = e.wrap, u = $h(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return k.createElement("div", ur({ className: r, style: ur({ display: "flex", flexDirection: a, flexWrap: o ? "wrap" : "nowrap" }, s) }, u), k.Children.map(t, function(l, f) {
    var d = i && f === 0 ? Ss(100 * i / n) : null;
    return k.cloneElement(l, ur(ur({}, l.props), { style: {
      flexBasis: Ss(100 / n),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: d,
      marginInlineStart: d,
      marginInlineEnd: 0
    } }));
  }));
}
var Hh = function() {
}, Uh = Hh;
const Zh = /* @__PURE__ */ Jn(Uh);
var nr;
function Yh(e, t, r) {
  return t && t > e ? t : r && r < e ? r : e;
}
function Ur(e, t) {
  return t[0] <= e && t[1] >= e;
}
function qh(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function fu(e, t) {
  return Ur(e[0], t) || Ur(e[1], t);
}
function Ds(e, t, r) {
  var n = fu(t, e), a = [];
  if (n) {
    a.push(r);
    var i = Ur(e[0], t), s = Ur(e[1], t);
    i && a.push("".concat(r, "Start")), s && a.push("".concat(r, "End")), i && s && a.push("".concat(r, "BothEnds"));
  }
  return a;
}
function Gh(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function Xh(e) {
  if (!e)
    throw new Error("args is required");
  var t = e.value, r = e.date, n = e.hover, a = "react-calendar__tile", i = [a];
  if (!r)
    return i;
  var s = /* @__PURE__ */ new Date(), o = function() {
    if (Array.isArray(r))
      return r;
    var v = e.dateType;
    if (!v)
      throw new Error("dateType is required when date is not an array of two dates");
    return xs(v, r);
  }();
  if (Ur(s, o) && i.push("".concat(a, "--now")), !t || !Gh(t))
    return i;
  var u = function() {
    if (Array.isArray(t))
      return t;
    var v = e.valueType;
    if (!v)
      throw new Error("valueType is required when value is not an array of two dates");
    return xs(v, t);
  }();
  qh(u, o) ? i.push("".concat(a, "--active")) : fu(u, o) && i.push("".concat(a, "--hasActive"));
  var l = Ds(u, o, "".concat(a, "--range"));
  i.push.apply(i, l);
  var f = Array.isArray(t) ? t : [t];
  if (n && f.length === 1) {
    var d = n > u[0] ? [u[0], n] : [n, u[0]], h = Ds(d, o, "".concat(a, "--hover"));
    i.push.apply(i, h);
  }
  return i;
}
var Qh = (nr = {}, nr[or.ARABIC] = me.ISLAMIC, nr[or.HEBREW] = me.HEBREW, nr[or.ISO_8601] = me.ISO_8601, nr[or.US] = me.GREGORY, nr);
function Kh(e) {
  return e !== void 0 && e in or;
}
var Os = !1;
function pa(e) {
  if (Kh(e)) {
    var t = Qh[e];
    return Zh(Os, 'Specifying calendarType="'.concat(e, '" is deprecated. Use calendarType="').concat(t, '" instead.')), Os = !0, t;
  }
  return e;
}
function va(e) {
  for (var t = e.className, r = e.count, n = r === void 0 ? 3 : r, a = e.dateTransform, i = e.dateType, s = e.end, o = e.hover, u = e.offset, l = e.renderTile, f = e.start, d = e.step, h = d === void 0 ? 1 : d, v = e.value, g = e.valueType, w = [], P = f; P <= s; P += h) {
    var E = a(P);
    w.push(l({
      classes: Xh({
        date: E,
        dateType: i,
        hover: o,
        value: v,
        valueType: g
      }),
      date: E
    }));
  }
  return k.createElement(zi, { className: t, count: n, offset: u, wrap: !0 }, w);
}
function ga(e) {
  var t = e.activeStartDate, r = e.children, n = e.classes, a = e.date, i = e.formatAbbr, s = e.locale, o = e.maxDate, u = e.maxDateTransform, l = e.minDate, f = e.minDateTransform, d = e.onClick, h = e.onMouseOver, v = e.style, g = e.tileClassName, w = e.tileContent, P = e.tileDisabled, E = e.view, _ = x.useMemo(function() {
    var V = { activeStartDate: t, date: a, view: E };
    return typeof g == "function" ? g(V) : g;
  }, [t, a, g, E]), L = x.useMemo(function() {
    var V = { activeStartDate: t, date: a, view: E };
    return typeof w == "function" ? w(V) : w;
  }, [t, a, w, E]);
  return k.createElement(
    "button",
    { className: ea(n, _), disabled: l && f(l) > a || o && u(o) < a || P && P({ activeStartDate: t, date: a, view: E }), onClick: d ? function(V) {
      return d(a, V);
    } : void 0, onFocus: h ? function() {
      return h(a);
    } : void 0, onMouseOver: h ? function() {
      return h(a);
    } : void 0, style: v, type: "button" },
    i ? k.createElement("abbr", { "aria-label": i(s, a) }, r) : r,
    L
  );
}
var ni = globalThis && globalThis.__assign || function() {
  return ni = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}, Jh = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, ja = "react-calendar__century-view__decades__decade";
function ep(e) {
  var t = e.classes, r = t === void 0 ? [] : t, n = e.currentCentury, a = e.formatYear, i = a === void 0 ? ha : a, s = Jh(e, ["classes", "currentCentury", "formatYear"]), o = s.date, u = s.locale, l = [];
  return r && l.push.apply(l, r), ja && l.push(ja), wr(o).getFullYear() !== n && l.push("".concat(ja, "--neighboringCentury")), k.createElement(ga, ni({}, s, { classes: l, maxDateTransform: fa, minDateTransform: Wt, view: "century" }), lu(u, i, o));
}
var ai = globalThis && globalThis.__assign || function() {
  return ai = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}, ks = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function tp(e) {
  var t = e.activeStartDate, r = e.hover, n = e.showNeighboringCentury, a = e.value, i = e.valueType, s = ks(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), o = Ph(t), u = o + (n ? 119 : 99);
  return k.createElement(va, { className: "react-calendar__century-view__decades", dateTransform: Wt, dateType: "decade", end: u, hover: r, renderTile: function(l) {
    var f = l.date, d = ks(l, ["date"]);
    return k.createElement(ep, ai({ key: f.getTime() }, s, d, { activeStartDate: t, currentCentury: o, date: f }));
  }, start: o, step: 10, value: a, valueType: i });
}
var Ts = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}, rp = Object.values(me), np = Object.values(or), ii = ["century", "decade", "year", "month"], du = b.oneOf(Ts(Ts([], rp, !0), np, !0)), Gn = b.oneOfType([
  b.string,
  b.arrayOf(b.string)
]), Li = function(t, r, n) {
  var a = t, i = r, s = a[i];
  if (!s)
    return null;
  if (!(s instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof s, "` supplied to `").concat(n, "`, expected instance of `Date`."));
  var o = t.maxDate;
  return o && s > o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof s, "` supplied to `").concat(n, "`, minDate cannot be larger than maxDate.")) : null;
}, Ii = function(t, r, n) {
  var a = t, i = r, s = a[i];
  if (!s)
    return null;
  if (!(s instanceof Date))
    return new Error("Invalid prop `".concat(r, "` of type `").concat(typeof s, "` supplied to `").concat(n, "`, expected instance of `Date`."));
  var o = t.minDate;
  return o && s < o ? new Error("Invalid prop `".concat(r, "` of type `").concat(typeof s, "` supplied to `").concat(n, "`, maxDate cannot be smaller than minDate.")) : null;
}, ap = b.oneOfType([
  b.func,
  b.exact({
    current: b.any
  })
]), ip = b.arrayOf(b.oneOfType([b.instanceOf(Date), b.oneOf([null])]).isRequired), sp = b.oneOfType([
  b.instanceOf(Date),
  b.oneOf([null]),
  ip
]);
b.arrayOf(b.oneOf(ii));
var Xn = function(t, r, n) {
  var a = t, i = r, s = a[i];
  return s !== void 0 && (typeof s != "string" || ii.indexOf(s) === -1) ? new Error("Invalid prop `".concat(r, "` of value `").concat(s, "` supplied to `").concat(n, "`, expected one of [").concat(ii.map(function(o) {
    return '"'.concat(o, '"');
  }).join(", "), "].")) : null;
};
Xn.isRequired = function(t, r, n, a, i) {
  var s = t, o = r, u = s[o];
  return u ? Xn(t, r, n) : new Error("The prop `".concat(r, "` is marked as required in `").concat(n, "`, but its value is `").concat(u, "`."));
};
var op = function(e) {
  return b.arrayOf(e);
}, ma = {
  activeStartDate: b.instanceOf(Date).isRequired,
  hover: b.instanceOf(Date),
  locale: b.string,
  maxDate: Ii,
  minDate: Li,
  onClick: b.func,
  onMouseOver: b.func,
  tileClassName: b.oneOfType([b.func, Gn]),
  tileContent: b.oneOfType([b.func, b.node]),
  value: sp,
  valueType: b.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
b.instanceOf(Date).isRequired, b.arrayOf(b.string.isRequired).isRequired, b.instanceOf(Date).isRequired, b.string, b.func, b.func, b.objectOf(b.oneOfType([b.string, b.number])), b.oneOfType([b.func, Gn]), b.oneOfType([b.func, b.node]), b.func;
var Zr = globalThis && globalThis.__assign || function() {
  return Zr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Zr.apply(this, arguments);
}, hu = function(t) {
  function r() {
    return k.createElement(tp, Zr({}, t));
  }
  return k.createElement("div", { className: "react-calendar__century-view" }, r());
};
hu.propTypes = Zr(Zr({}, ma), { showNeighboringCentury: b.bool });
const up = hu;
var si = globalThis && globalThis.__assign || function() {
  return si = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, si.apply(this, arguments);
}, lp = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Va = "react-calendar__decade-view__years__year";
function cp(e) {
  var t = e.classes, r = t === void 0 ? [] : t, n = e.currentDecade, a = e.formatYear, i = a === void 0 ? ha : a, s = lp(e, ["classes", "currentDecade", "formatYear"]), o = s.date, u = s.locale, l = [];
  return r && l.push.apply(l, r), Va && l.push(Va), Wt(o).getFullYear() !== n && l.push("".concat(Va, "--neighboringDecade")), k.createElement(ga, si({}, s, { classes: l, maxDateTransform: da, minDateTransform: _r, view: "decade" }), i(u, o));
}
var oi = globalThis && globalThis.__assign || function() {
  return oi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, oi.apply(this, arguments);
}, Es = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function fp(e) {
  var t = e.activeStartDate, r = e.hover, n = e.showNeighboringDecade, a = e.value, i = e.valueType, s = Es(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), o = Nh(t), u = o + (n ? 11 : 9);
  return k.createElement(va, { className: "react-calendar__decade-view__years", dateTransform: _r, dateType: "year", end: u, hover: r, renderTile: function(l) {
    var f = l.date, d = Es(l, ["date"]);
    return k.createElement(cp, oi({ key: f.getTime() }, s, d, { activeStartDate: t, currentDecade: o, date: f }));
  }, start: o, value: a, valueType: i });
}
var Yr = globalThis && globalThis.__assign || function() {
  return Yr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Yr.apply(this, arguments);
}, pu = function(t) {
  function r() {
    return k.createElement(fp, Yr({}, t));
  }
  return k.createElement("div", { className: "react-calendar__decade-view" }, r());
};
pu.propTypes = Yr(Yr({}, ma), { showNeighboringDecade: b.bool });
const dp = pu;
var ui = globalThis && globalThis.__assign || function() {
  return ui = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ui.apply(this, arguments);
}, hp = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Cs = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = t.length, i; n < a; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}, pp = "react-calendar__year-view__months__month";
function vp(e) {
  var t = e.classes, r = t === void 0 ? [] : t, n = e.formatMonth, a = n === void 0 ? kh : n, i = e.formatMonthYear, s = i === void 0 ? iu : i, o = hp(e, ["classes", "formatMonth", "formatMonthYear"]), u = o.date, l = o.locale;
  return k.createElement(ga, ui({}, o, { classes: Cs(Cs([], r, !0), [pp], !1), formatAbbr: s, maxDateTransform: ln, minDateTransform: Jt, view: "year" }), a(l, u));
}
var li = globalThis && globalThis.__assign || function() {
  return li = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, li.apply(this, arguments);
}, Rs = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function gp(e) {
  var t = e.activeStartDate, r = e.hover, n = e.value, a = e.valueType, i = Rs(e, ["activeStartDate", "hover", "value", "valueType"]), s = 0, o = 11, u = ye(t);
  return k.createElement(va, { className: "react-calendar__year-view__months", dateTransform: function(l) {
    var f = /* @__PURE__ */ new Date();
    return f.setFullYear(u, l, 1), Jt(f);
  }, dateType: "month", end: o, hover: r, renderTile: function(l) {
    var f = l.date, d = Rs(l, ["date"]);
    return k.createElement(vp, li({ key: f.getTime() }, i, d, { activeStartDate: t, date: f }));
  }, start: s, value: n, valueType: a });
}
var Qn = globalThis && globalThis.__assign || function() {
  return Qn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Qn.apply(this, arguments);
}, vu = function(t) {
  function r() {
    return k.createElement(gp, Qn({}, t));
  }
  return k.createElement("div", { className: "react-calendar__year-view" }, r());
};
vu.propTypes = Qn({}, ma);
const mp = vu;
var ci = globalThis && globalThis.__assign || function() {
  return ci = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}, yp = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Sn = "react-calendar__month-view__days__day";
function bp(e) {
  var t = e.calendarType, r = e.classes, n = r === void 0 ? [] : r, a = e.currentMonthIndex, i = e.formatDay, s = i === void 0 ? Dh : i, o = e.formatLongDate, u = o === void 0 ? Oh : o, l = yp(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), f = pa(t), d = l.date, h = l.locale, v = [];
  return n && v.push.apply(v, n), Sn && v.push(Sn), cu(d, f) && v.push("".concat(Sn, "--weekend")), d.getMonth() !== a && v.push("".concat(Sn, "--neighboringMonth")), k.createElement(ga, ci({}, l, { classes: v, formatAbbr: u, maxDateTransform: Ai, minDateTransform: cn, view: "month" }), s(h, d));
}
var fi = globalThis && globalThis.__assign || function() {
  return fi = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, fi.apply(this, arguments);
}, Ps = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function wp(e) {
  var t = e.activeStartDate, r = e.calendarType, n = e.hover, a = e.showFixedNumberOfWeeks, i = e.showNeighboringMonth, s = e.value, o = e.valueType, u = Ps(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), l = pa(r), f = ye(t), d = Vt(t), h = a || i, v = Hr(t, l), g = h ? 0 : v, w = (h ? -v : 0) + 1, P = function() {
    if (a)
      return w + 6 * 7 - 1;
    var E = au(t);
    if (i) {
      var _ = /* @__PURE__ */ new Date();
      _.setFullYear(f, d, E), _.setHours(0, 0, 0, 0);
      var L = 7 - Hr(_, l) - 1;
      return E + L;
    }
    return E;
  }();
  return k.createElement(va, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(E) {
    var _ = /* @__PURE__ */ new Date();
    return _.setFullYear(f, d, E), cn(_);
  }, dateType: "day", hover: n, end: P, renderTile: function(E) {
    var _ = E.date, L = Ps(E, ["date"]);
    return k.createElement(bp, fi({ key: _.getTime() }, u, L, { activeStartDate: t, calendarType: r, currentMonthIndex: d, date: _ }));
  }, offset: g, start: w, value: s, valueType: o });
}
var gu = "react-calendar__month-view__weekdays", Wa = "".concat(gu, "__weekday");
function _p(e) {
  for (var t = e.calendarType, r = e.formatShortWeekday, n = r === void 0 ? Th : r, a = e.formatWeekday, i = a === void 0 ? Eh : a, s = e.locale, o = e.onMouseLeave, u = pa(t), l = /* @__PURE__ */ new Date(), f = Jt(l), d = ye(f), h = Vt(f), v = [], g = 1; g <= 7; g += 1) {
    var w = new Date(d, h, g - Hr(f, u)), P = i(s, w);
    v.push(k.createElement(
      "div",
      { key: g, className: ea(Wa, Fh(w) && "".concat(Wa, "--current"), cu(w, u) && "".concat(Wa, "--weekend")) },
      k.createElement("abbr", { "aria-label": P, title: P }, n(s, w).replace(".", ""))
    ));
  }
  return k.createElement(zi, { className: gu, count: 7, onFocus: o, onMouseOver: o }, v);
}
var Kn = globalThis && globalThis.__assign || function() {
  return Kn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Kn.apply(this, arguments);
}, Ns = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, As = "react-calendar__tile";
function xp(e) {
  var t = e.onClickWeekNumber, r = e.weekNumber, n = k.createElement("span", null, r);
  if (t) {
    var a = e.date, i = e.onClickWeekNumber, s = e.weekNumber, o = Ns(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return k.createElement("button", Kn({}, o, { className: As, onClick: function(u) {
      return i(s, a, u);
    }, type: "button" }), n);
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var o = Ns(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return k.createElement("div", Kn({}, o, { className: As }), n);
  }
}
function Sp(e) {
  var t = e.activeStartDate, r = e.calendarType, n = e.onClickWeekNumber, a = e.onMouseLeave, i = e.showFixedNumberOfWeeks, s = pa(r), o = function() {
    if (i)
      return 6;
    var f = au(t), d = Hr(t, s), h = f - (7 - d);
    return 1 + Math.ceil(h / 7);
  }(), u = function() {
    for (var f = ye(t), d = Vt(t), h = ca(t), v = [], g = 0; g < o; g += 1)
      v.push(ri(new Date(f, d, h + g * 7), s));
    return v;
  }(), l = u.map(function(f) {
    return Ah(f, s);
  });
  return k.createElement(zi, { className: "react-calendar__month-view__weekNumbers", count: o, direction: "column", onFocus: a, onMouseOver: a, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, l.map(function(f, d) {
    var h = u[d];
    if (!h)
      throw new Error("date is not defined");
    return k.createElement(xp, { key: f, date: h, onClickWeekNumber: n, weekNumber: f });
  }));
}
var qr = globalThis && globalThis.__assign || function() {
  return qr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, qr.apply(this, arguments);
}, Dp = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function Op(e) {
  if (e)
    for (var t = 0, r = Object.entries(ph); t < r.length; t++) {
      var n = r[t], a = n[0], i = n[1];
      if (i.includes(e))
        return a;
    }
  return me.ISO_8601;
}
var mu = function(t) {
  var r = t.activeStartDate, n = t.locale, a = t.onMouseLeave, i = t.showFixedNumberOfWeeks, s = t.calendarType, o = s === void 0 ? Op(n) : s, u = t.formatShortWeekday, l = t.formatWeekday, f = t.onClickWeekNumber, d = t.showWeekNumbers, h = Dp(t, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function v() {
    return k.createElement(_p, { calendarType: o, formatShortWeekday: u, formatWeekday: l, locale: n, onMouseLeave: a });
  }
  function g() {
    return d ? k.createElement(Sp, { activeStartDate: r, calendarType: o, onClickWeekNumber: f, onMouseLeave: a, showFixedNumberOfWeeks: i }) : null;
  }
  function w() {
    return k.createElement(wp, qr({ calendarType: o }, h));
  }
  var P = "react-calendar__month-view";
  return k.createElement(
    "div",
    { className: ea(P, d ? "".concat(P, "--weekNumbers") : "") },
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
        w()
      )
    )
  );
};
mu.propTypes = qr(qr({}, ma), { calendarType: du, formatDay: b.func, formatLongDate: b.func, formatShortWeekday: b.func, formatWeekday: b.func, onClickWeekNumber: b.func, onMouseLeave: b.func, showFixedNumberOfWeeks: b.bool, showNeighboringMonth: b.bool, showWeekNumbers: b.bool });
const kp = mu;
var lr = globalThis && globalThis.__assign || function() {
  return lr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, lr.apply(this, arguments);
}, Dn = "react-calendar", fr = ["century", "decade", "year", "month"], Tp = ["decade", "year", "month", "day"], ji = /* @__PURE__ */ new Date();
ji.setFullYear(1, 0, 1);
ji.setHours(0, 0, 0, 0);
var Ep = /* @__PURE__ */ new Date(864e13);
function Er(e) {
  return e instanceof Date ? e : new Date(e);
}
function yu(e, t) {
  return fr.slice(fr.indexOf(e), fr.indexOf(t) + 1);
}
function Cp(e, t, r) {
  var n = yu(t, r);
  return n.indexOf(e) !== -1;
}
function Vi(e, t, r) {
  return e && Cp(e, t, r) ? e : r;
}
function bu(e) {
  var t = fr.indexOf(e);
  return Tp[t];
}
function Rp(e, t) {
  var r = Array.isArray(e) ? e[t] : e;
  if (!r)
    return null;
  var n = Er(r);
  if (isNaN(n.getTime()))
    throw new Error("Invalid date: ".concat(e));
  return n;
}
function wu(e, t) {
  var r = e.value, n = e.minDate, a = e.maxDate, i = e.maxDetail, s = Rp(r, t);
  if (!s)
    return null;
  var o = bu(i), u = function() {
    switch (t) {
      case 0:
        return Ut(o, s);
      case 1:
        return ou(o, s);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return Yh(u, n, a);
}
var Wi = function(e) {
  return wu(e, 0);
}, _u = function(e) {
  return wu(e, 1);
}, Pp = function(e) {
  return [Wi, _u].map(function(t) {
    return t(e);
  });
};
function xu(e) {
  var t = e.maxDate, r = e.maxDetail, n = e.minDate, a = e.minDetail, i = e.value, s = e.view, o = Vi(s, a, r), u = Wi({
    value: i,
    minDate: n,
    maxDate: t,
    maxDetail: r
  }) || /* @__PURE__ */ new Date();
  return Ut(o, u);
}
function Np(e) {
  var t = e.activeStartDate, r = e.defaultActiveStartDate, n = e.defaultValue, a = e.defaultView, i = e.maxDate, s = e.maxDetail, o = e.minDate, u = e.minDetail, l = e.value, f = e.view, d = Vi(f, u, s), h = t || r;
  return h ? Ut(d, h) : xu({
    maxDate: i,
    maxDetail: s,
    minDate: o,
    minDetail: u,
    value: l || n,
    view: f || a
  });
}
function Fa(e) {
  return e && (!Array.isArray(e) || e.length === 1);
}
function On(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var Su = x.forwardRef(function(t, r) {
  var n = t.activeStartDate, a = t.allowPartialRange, i = t.calendarType, s = t.className, o = t.defaultActiveStartDate, u = t.defaultValue, l = t.defaultView, f = t.formatDay, d = t.formatLongDate, h = t.formatMonth, v = t.formatMonthYear, g = t.formatShortWeekday, w = t.formatWeekday, P = t.formatYear, E = t.goToRangeStartOnSelect, _ = E === void 0 ? !0 : E, L = t.inputRef, V = t.locale, q = t.maxDate, U = q === void 0 ? Ep : q, ue = t.maxDetail, H = ue === void 0 ? "month" : ue, oe = t.minDate, G = oe === void 0 ? ji : oe, ve = t.minDetail, M = ve === void 0 ? "century" : ve, Z = t.navigationAriaLabel, J = t.navigationAriaLive, ge = t.navigationLabel, se = t.next2AriaLabel, he = t.next2Label, Te = t.nextAriaLabel, be = t.nextLabel, le = t.onActiveStartDateChange, Pe = t.onChange, y = t.onClickDay, S = t.onClickDecade, C = t.onClickMonth, N = t.onClickWeekNumber, R = t.onClickYear, F = t.onDrillDown, X = t.onDrillUp, ne = t.onViewChange, ie = t.prev2AriaLabel, Ue = t.prev2Label, ze = t.prevAriaLabel, Ne = t.prevLabel, fe = t.returnValue, Ze = fe === void 0 ? "start" : fe, xe = t.selectRange, Ge = t.showDoubleView, Ft = t.showFixedNumberOfWeeks, te = t.showNavigation, c = te === void 0 ? !0 : te, p = t.showNeighboringCentury, m = t.showNeighboringDecade, I = t.showNeighboringMonth, T = I === void 0 ? !0 : I, O = t.showWeekNumbers, $ = t.tileClassName, pe = t.tileContent, Se = t.tileDisabled, Ct = t.value, xt = t.view, fn = x.useState(o), xr = fn[0], Rt = fn[1], dn = x.useState(null), hn = dn[0], pn = dn[1], Sr = x.useState(Array.isArray(u) ? u.map(function(ae) {
    return ae !== null ? Er(ae) : null;
  }) : u != null ? Er(u) : null), ya = Sr[0], Du = Sr[1], Bi = x.useState(l), Ou = Bi[0], $i = Bi[1], Ye = n || xr || Np({
    activeStartDate: n,
    defaultActiveStartDate: o,
    defaultValue: u,
    defaultView: l,
    maxDate: U,
    maxDetail: H,
    minDate: G,
    minDetail: M,
    value: Ct,
    view: xt
  }), qe = function() {
    var ae = function() {
      return xe && Fa(ya) ? ya : Ct !== void 0 ? Ct : ya;
    }();
    return ae ? Array.isArray(ae) ? ae.map(function(De) {
      return De !== null ? Er(De) : null;
    }) : ae !== null ? Er(ae) : null : null;
  }(), vn = bu(H), we = Vi(xt || Ou, M, H), pt = yu(M, H), ku = xe ? hn : null, ba = pt.indexOf(we) < pt.length - 1, Hi = pt.indexOf(we) > 0, Ui = x.useCallback(function(ae) {
    var De = function() {
      switch (Ze) {
        case "start":
          return Wi;
        case "end":
          return _u;
        case "range":
          return Pp;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return De({
      maxDate: U,
      maxDetail: H,
      minDate: G,
      value: ae
    });
  }, [U, H, G, Ze]), wa = x.useCallback(function(ae, De) {
    Rt(ae);
    var Ee = {
      action: De,
      activeStartDate: ae,
      value: qe,
      view: we
    };
    le && !On(Ye, ae) && le(Ee);
  }, [Ye, le, qe, we]), gn = x.useCallback(function(ae, De) {
    var Ee = function() {
      switch (we) {
        case "century":
          return S;
        case "decade":
          return R;
        case "year":
          return C;
        case "month":
          return y;
        default:
          throw new Error("Invalid view: ".concat(we, "."));
      }
    }();
    Ee && Ee(ae, De);
  }, [y, S, C, R, we]), _a = x.useCallback(function(ae, De) {
    if (ba) {
      gn(ae, De);
      var Ee = pt[pt.indexOf(we) + 1];
      if (!Ee)
        throw new Error("Attempted to drill down from the lowest view.");
      Rt(ae), $i(Ee);
      var at = {
        action: "drillDown",
        activeStartDate: ae,
        value: qe,
        view: Ee
      };
      le && !On(Ye, ae) && le(at), ne && we !== Ee && ne(at), F && F(at);
    }
  }, [
    Ye,
    ba,
    le,
    gn,
    F,
    ne,
    qe,
    we,
    pt
  ]), xa = x.useCallback(function() {
    if (Hi) {
      var ae = pt[pt.indexOf(we) - 1];
      if (!ae)
        throw new Error("Attempted to drill up from the highest view.");
      var De = Ut(ae, Ye);
      Rt(De), $i(ae);
      var Ee = {
        action: "drillUp",
        activeStartDate: De,
        value: qe,
        view: ae
      };
      le && !On(Ye, De) && le(Ee), ne && we !== ae && ne(Ee), X && X(Ee);
    }
  }, [
    Ye,
    Hi,
    le,
    X,
    ne,
    qe,
    we,
    pt
  ]), Sa = x.useCallback(function(ae, De) {
    var Ee = qe;
    gn(ae, De);
    var at = xe && !Fa(Ee), it;
    if (xe)
      if (at)
        it = Ut(vn, ae);
      else {
        if (!Ee)
          throw new Error("previousValue is required");
        if (Array.isArray(Ee))
          throw new Error("previousValue must not be an array");
        it = Vh(vn, Ee, ae);
      }
    else
      it = Ui(ae);
    var Oa = (
      // Range selection turned off
      !xe || // Range selection turned on, first value
      at || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      _ ? xu({
        maxDate: U,
        maxDetail: H,
        minDate: G,
        minDetail: M,
        value: it,
        view: we
      }) : null
    );
    De.persist(), Rt(Oa), Du(it);
    var Ru = {
      action: "onChange",
      activeStartDate: Oa,
      value: it,
      view: we
    };
    if (le && !On(Ye, Oa) && le(Ru), Pe)
      if (xe) {
        var Pu = Fa(it);
        if (!Pu)
          Pe(it || null, De);
        else if (a) {
          if (Array.isArray(it))
            throw new Error("value must not be an array");
          Pe([it || null, null], De);
        }
      } else
        Pe(it || null, De);
  }, [
    Ye,
    a,
    Ui,
    _,
    U,
    H,
    G,
    M,
    le,
    Pe,
    gn,
    xe,
    qe,
    vn,
    we
  ]);
  function Tu(ae) {
    pn(ae);
  }
  function Da() {
    pn(null);
  }
  x.useImperativeHandle(r, function() {
    return {
      activeStartDate: Ye,
      drillDown: _a,
      drillUp: xa,
      onChange: Sa,
      setActiveStartDate: wa,
      value: qe,
      view: we
    };
  }, [Ye, _a, xa, Sa, wa, qe, we]);
  function Zi(ae) {
    var De = ae ? su(we, Ye) : Ut(we, Ye), Ee = ba ? _a : Sa, at = {
      activeStartDate: De,
      hover: ku,
      locale: V,
      maxDate: U,
      minDate: G,
      onClick: Ee,
      onMouseOver: xe ? Tu : void 0,
      tileClassName: $,
      tileContent: pe,
      tileDisabled: Se,
      value: qe,
      valueType: vn
    };
    switch (we) {
      case "century":
        return k.createElement(up, lr({ formatYear: P, showNeighboringCentury: p }, at));
      case "decade":
        return k.createElement(dp, lr({ formatYear: P, showNeighboringDecade: m }, at));
      case "year":
        return k.createElement(mp, lr({ formatMonth: h, formatMonthYear: v }, at));
      case "month":
        return k.createElement(kp, lr({ calendarType: i, formatDay: f, formatLongDate: d, formatShortWeekday: g, formatWeekday: w, onClickWeekNumber: N, onMouseLeave: xe ? Da : void 0, showFixedNumberOfWeeks: typeof Ft < "u" ? Ft : Ge, showNeighboringMonth: T, showWeekNumbers: O }, at));
      default:
        throw new Error("Invalid view: ".concat(we, "."));
    }
  }
  function Eu() {
    return c ? k.createElement(Bh, { activeStartDate: Ye, drillUp: xa, formatMonthYear: v, formatYear: P, locale: V, maxDate: U, minDate: G, navigationAriaLabel: Z, navigationAriaLive: J, navigationLabel: ge, next2AriaLabel: se, next2Label: he, nextAriaLabel: Te, nextLabel: be, prev2AriaLabel: ie, prev2Label: Ue, prevAriaLabel: ze, prevLabel: Ne, setActiveStartDate: wa, showDoubleView: Ge, view: we, views: pt }) : null;
  }
  var Cu = Array.isArray(qe) ? qe : [qe];
  return k.createElement(
    "div",
    { className: ea(Dn, xe && Cu.length === 1 && "".concat(Dn, "--selectRange"), Ge && "".concat(Dn, "--doubleView"), s), ref: L },
    Eu(),
    k.createElement(
      "div",
      { className: "".concat(Dn, "__viewContainer"), onBlur: xe ? Da : void 0, onMouseLeave: xe ? Da : void 0 },
      Zi(),
      Ge ? Zi(!0) : null
    )
  );
}), Ms = b.instanceOf(Date), zs = b.oneOfType([b.string, b.instanceOf(Date)]), Ls = b.oneOfType([zs, op(zs)]);
Su.propTypes = {
  activeStartDate: Ms,
  allowPartialRange: b.bool,
  calendarType: du,
  className: Gn,
  defaultActiveStartDate: Ms,
  defaultValue: Ls,
  defaultView: Xn,
  formatDay: b.func,
  formatLongDate: b.func,
  formatMonth: b.func,
  formatMonthYear: b.func,
  formatShortWeekday: b.func,
  formatWeekday: b.func,
  formatYear: b.func,
  goToRangeStartOnSelect: b.bool,
  inputRef: ap,
  locale: b.string,
  maxDate: Ii,
  maxDetail: b.oneOf(fr),
  minDate: Li,
  minDetail: b.oneOf(fr),
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
  tileClassName: b.oneOfType([b.func, Gn]),
  tileContent: b.oneOfType([b.func, b.node]),
  tileDisabled: b.func,
  value: Ls,
  view: Xn
};
const Ap = Su;
const Mp = Ys(Ap)`
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
`, zp = ({
  error: e,
  label: t,
  open: r,
  className: n,
  onFocus: a,
  onBlur: i,
  onClick: s,
  value: o,
  onChange: u,
  ...l
}, f) => {
  const [d, h] = x.useState(null), [v, g] = x.useState(!1), [w, P] = x.useState(!1);
  x.useEffect(() => {
    r !== void 0 && g(r);
  }, [r]);
  const E = x.useCallback((U) => {
    P(!0), g(!0), a == null || a(U);
  }, [a, g]), _ = x.useCallback((U) => {
    P(!1), i == null || i(U);
  }, [a, g]), L = x.useCallback((U) => {
    h(U);
  }, [h]), V = x.useMemo(() => o ? yn(o, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]).toDate() : null, [o]), q = x.useMemo(() => V ? yn(V).format("DD.MM.YYYY") : "", [V]);
  return /* @__PURE__ */ W(sl, { onClickAway: () => g(!1), children: /* @__PURE__ */ et(ra, { className: n, label: t, error: e, children: [
    /* @__PURE__ */ W(sn, { ...l, inputWrapRef: L, ref: f, onFocus: E, onBlur: _, value: q, onChange: (U) => {
      U.target.value ? u == null || u(yn(U.target.value, "DD.MM.YYYY").format("YYYY-MM-DD HH:mm:ss")) : u == null || u(void 0);
    }, onMouseDown: (U) => {
      w && g(!v), s == null || s(U);
    }, error: e }),
    d && /* @__PURE__ */ W(Zs, { open: v, anchorEl: d, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: d
      }
    }], children: /* @__PURE__ */ W("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ W(Mp, { value: V, onChange: (U) => {
      u == null || u(yn(U).format("YYYY-MM-DD HH:mm:ss")), g(!1);
    } }) }) })
  ] }) });
}, av = x.forwardRef(zp), Lp = ({
  multiple: e,
  value: t,
  url: r,
  params: n,
  idField: a = Io,
  onInputChange: i,
  open: s = !1,
  extraOptionsRenderer: o,
  ...u
}, l) => {
  const [f, d] = x.useState(""), [h, v] = x.useState(s), g = bl(f, 500), w = yl(r, a), {
    records: P,
    isLoading: E
  } = ml({
    idField: a,
    value: (ei(t) ? [] : e ? t : [t]) || [],
    url: r,
    params: n
  });
  x.useEffect(() => {
    v(s);
  }, [s]);
  const _ = x.useMemo(() => ({
    ...n,
    ...g ? {
      query: g
    } : void 0
  }), [g, n]), L = f.length > 0 || h || !1, V = Xu(r, {
    enabled: L,
    params: _,
    placeholderData: Iu,
    staleTime: 1e3 * 60
  }), q = x.useMemo(() => {
    var H;
    return Tr.uniqBy([...P, ...((H = V.data) == null ? void 0 : H.data) || []], a);
  }, [P, V.data]), U = !e && E, ue = o ? (H) => o({
    ...H,
    search: f,
    searchIsLoading: V.isLoading
  }) : void 0;
  return /* @__PURE__ */ W(kn, { children: /* @__PURE__ */ W(jo, { ref: l, multiple: e, value: t, ...u, disabled: U || u.disabled, inputLoading: U, options: q, idField: a, onOpen: () => v(!0), onClose: () => v(!1), isLoading: V.isLoading || E, valueLoading: E, popupAdditionalOptionsRenderer: ue, open: h, afterItems: [(V.isLoading || V.isFetching || e && E) && /* @__PURE__ */ W("div", { children: /* @__PURE__ */ W(kt, { icon: Ws.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onSelect: (H) => {
    var oe;
    e ? H == null || H.map((G) => {
      w(G);
    }) : w(H), (oe = u.onSelect) == null || oe.call(u, H);
  }, onInputChange: (H, oe, G) => {
    G === "input" && d(oe), G === "reset" && f !== "" && d(""), i == null || i(H, oe, G);
  } }) });
}, Fi = x.forwardRef(Lp), Ip = ({
  unit: e,
  error: t,
  onChange: r,
  allowFloat: n = !0,
  value: a,
  ...i
}, s) => {
  const [o, u] = x.useState(a), [l, f] = x.useState(null);
  x.useEffect(() => {
    u(a);
  }, [a]);
  const d = Us(s, f);
  return /* @__PURE__ */ W(sn, { ...i, ref: d, error: t, value: o, onChange: (h) => {
    const v = Number(h.target.value);
    if (!isNaN(v)) {
      if (h.target.value.includes(".") && !n)
        return;
      u(h.target.value), h.target.value.slice(-1) !== "." && (r == null || r(v));
    }
  }, afterItems: [e && /* @__PURE__ */ W("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, t && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => l == null ? void 0 : l.focus(), children: e }, "unit")] });
}, iv = x.forwardRef(Ip), jp = x.forwardRef(({
  placeholder: e = "Введите",
  ...t
}, r) => /* @__PURE__ */ W("textarea", { ref: r, placeholder: e, ...t })), Vp = ({
  error: e,
  rows: t = 5,
  ...r
}, n) => /* @__PURE__ */ W(sn, { ...r, ref: n, rows: t, inputComponent: jp, error: e }), sv = x.forwardRef(Vp), Wp = ({
  error: e,
  ...t
}, r) => /* @__PURE__ */ W(sn, { ...t, ref: r, error: e }), ov = x.forwardRef(Wp), Fp = ({
  label: e,
  error: t,
  value: r,
  helperText: n,
  className: a,
  onChange: i,
  ...s
}, o) => /* @__PURE__ */ W(ra, { label: e, error: t, helperText: n, className: a, children: /* @__PURE__ */ et(ol, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...s, onChange: (u) => {
  i == null || i(u.target.value === "true");
}, ref: o, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ W(Xi, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ W(Xi, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), uv = x.forwardRef(Fp), lv = Oi(Fi, {
  url: "/api/rest/partners",
  displayField: "name"
});
Oi(Fi, {
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "is_deleted",
      value: !1
    }])
  }
});
const cv = Oi(Fi, {
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
  rv as B,
  Io as D,
  Jp as F,
  ra as L,
  iv as N,
  lv as P,
  Fi as Q,
  tv as R,
  sn as T,
  ov as Y,
  yl as a,
  ev as b,
  bo as c,
  nv as d,
  cv as e,
  _o as f,
  Kp as g,
  av as h,
  sv as i,
  uv as j,
  qp as k,
  Oi as l,
  Gp as m,
  Xp as u,
  Qp as z
};
