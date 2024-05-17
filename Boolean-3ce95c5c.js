var tr = (e, i, r) => {
  if (!i.has(e))
    throw TypeError("Cannot " + r);
};
var V = (e, i, r) => (tr(e, i, "read from private field"), r ? r.call(e) : i.get(e)), le = (e, i, r) => {
  if (i.has(e))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(e) : i.set(e, r);
}, ve = (e, i, r, t) => (tr(e, i, "write to private field"), t ? t.call(e, r) : i.set(e, r), r);
var fe = (e, i, r) => (tr(e, i, "access private method"), r);
import { J as oi, L as vt, O as es, P as ts, T as Tr, V as rs, I as $t, W as is, X as ss, l as pt, b as be, j as M, Y as ns, f as ai, F as gt, Z as os, G as as } from "./library-d2e029ff.js";
import { r as z, R as K, e as us, c as ui, g as li } from "./react-6f5a8403.js";
import { Q as ci, d as ls, e as cs, g as fs, i as ds, j as hs, s as Nr, k as kr, w as ps, l as gs, m as ys, u as fi, c as vs, f as ms, n as bs, h as Pt, b as ws } from "./DictionaryCell-a98dea67.js";
import { F as je, p as di } from "./icons-ad9f8a73.js";
import { B as Ss, A as xs, g as _s, i as Ds, a as mr, k as zs, u as hi, P as pi, l as Os, I as Rs, f as Ps, C as Es, m as Fr, o as Ms } from "./mui-2ff488a7.js";
import { f as Cs } from "./faEye-ea161ce6.js";
function Lr(e, i) {
  return e.filter((r) => !i.includes(r));
}
function As(e, i, r) {
  const t = e.slice(0);
  return t[i] = r, t;
}
var Ze, at, ut, De, mt, lt, ct, Nt, bt, lr, wt, cr, St, fr, xt, dr, si, Ts = (si = class extends oi {
  constructor(i, r, t) {
    super();
    le(this, ct);
    le(this, bt);
    le(this, wt);
    le(this, St);
    le(this, xt);
    le(this, Ze, void 0);
    le(this, at, void 0);
    le(this, ut, void 0);
    le(this, De, void 0);
    le(this, mt, void 0);
    le(this, lt, void 0);
    ve(this, Ze, i), ve(this, ut, []), ve(this, De, []), fe(this, ct, Nt).call(this, []), this.setQueries(r, t);
  }
  onSubscribe() {
    this.listeners.size === 1 && V(this, De).forEach((i) => {
      i.subscribe((r) => {
        fe(this, St, fr).call(this, i, r);
      });
    });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), V(this, De).forEach((i) => {
      i.destroy();
    });
  }
  setQueries(i, r, t) {
    ve(this, ut, i), ve(this, mt, r), vt.batch(() => {
      const s = V(this, De), n = fe(this, wt, cr).call(this, V(this, ut));
      n.forEach(
        (c) => c.observer.setOptions(c.defaultedQueryOptions, t)
      );
      const o = n.map((c) => c.observer), a = o.map(
        (c) => c.getCurrentResult()
      ), l = o.some(
        (c, p) => c !== s[p]
      );
      s.length === o.length && !l || (ve(this, De, o), fe(this, ct, Nt).call(this, a), this.hasListeners() && (Lr(s, o).forEach((c) => {
        c.destroy();
      }), Lr(o, s).forEach((c) => {
        c.subscribe((p) => {
          fe(this, St, fr).call(this, c, p);
        });
      }), fe(this, xt, dr).call(this)));
    });
  }
  getCurrentResult() {
    return V(this, lt);
  }
  getQueries() {
    return V(this, De).map((i) => i.getCurrentQuery());
  }
  getObservers() {
    return V(this, De);
  }
  getOptimisticResult(i, r) {
    const t = fe(this, wt, cr).call(this, i), s = t.map(
      (n) => n.observer.getOptimisticResult(n.defaultedQueryOptions)
    );
    return [
      s,
      (n) => fe(this, bt, lr).call(this, n ?? s, r),
      () => t.map((n, o) => {
        const a = s[o];
        return n.defaultedQueryOptions.notifyOnChangeProps ? a : n.observer.trackResult(a);
      })
    ];
  }
}, Ze = new WeakMap(), at = new WeakMap(), ut = new WeakMap(), De = new WeakMap(), mt = new WeakMap(), lt = new WeakMap(), ct = new WeakSet(), Nt = function(i) {
  var r;
  ve(this, at, i), ve(this, lt, fe(this, bt, lr).call(this, i, (r = V(this, mt)) == null ? void 0 : r.combine));
}, bt = new WeakSet(), lr = function(i, r) {
  return r ? es(V(this, lt), r(i)) : i;
}, wt = new WeakSet(), cr = function(i) {
  const r = V(this, De), t = new Map(
    r.map((h) => [h.options.queryHash, h])
  ), s = i.map(
    (h) => V(this, Ze).defaultQueryOptions(h)
  ), n = s.flatMap((h) => {
    const d = t.get(h.queryHash);
    return d != null ? [{ defaultedQueryOptions: h, observer: d }] : [];
  }), o = new Set(
    n.map((h) => h.defaultedQueryOptions.queryHash)
  ), a = s.filter(
    (h) => !o.has(h.queryHash)
  ), l = (h) => {
    const d = V(this, Ze).defaultQueryOptions(h);
    return V(this, De).find(
      (v) => v.options.queryHash === d.queryHash
    ) ?? new ci(V(this, Ze), d);
  }, c = a.map((h) => ({
    defaultedQueryOptions: h,
    observer: l(h)
  })), p = (h, d) => s.indexOf(h.defaultedQueryOptions) - s.indexOf(d.defaultedQueryOptions);
  return n.concat(c).sort(p);
}, St = new WeakSet(), fr = function(i, r) {
  const t = V(this, De).indexOf(i);
  t !== -1 && (fe(this, ct, Nt).call(this, As(V(this, at), t, r)), fe(this, xt, dr).call(this));
}, xt = new WeakSet(), dr = function() {
  vt.batch(() => {
    this.listeners.forEach((i) => {
      i(V(this, at));
    });
  });
}, si), Xe, Qe, ze, Ie, ft, kt, _t, hr, ni, Ns = (ni = class extends oi {
  constructor(i, r) {
    super();
    le(this, ft);
    le(this, _t);
    le(this, Xe, void 0);
    le(this, Qe, void 0);
    le(this, ze, void 0);
    le(this, Ie, void 0);
    ve(this, Xe, i), this.setOptions(r), this.bindMethods(), fe(this, ft, kt).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(i) {
    var t;
    const r = this.options;
    this.options = V(this, Xe).defaultMutationOptions(i), ts(this.options, r) || V(this, Xe).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: V(this, ze),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && Tr(r.mutationKey) !== Tr(this.options.mutationKey) ? this.reset() : (t = V(this, ze)) == null || t.setOptions(this.options);
  }
  onUnsubscribe() {
    var i;
    this.hasListeners() || (i = V(this, ze)) == null || i.removeObserver(this);
  }
  onMutationUpdate(i) {
    fe(this, ft, kt).call(this), fe(this, _t, hr).call(this, i);
  }
  getCurrentResult() {
    return V(this, Qe);
  }
  reset() {
    var i;
    (i = V(this, ze)) == null || i.removeObserver(this), ve(this, ze, void 0), fe(this, ft, kt).call(this), fe(this, _t, hr).call(this);
  }
  mutate(i, r) {
    var t;
    return ve(this, Ie, r), (t = V(this, ze)) == null || t.removeObserver(this), ve(this, ze, V(this, Xe).getMutationCache().build(V(this, Xe), this.options)), V(this, ze).addObserver(this), V(this, ze).execute(i);
  }
}, Xe = new WeakMap(), Qe = new WeakMap(), ze = new WeakMap(), Ie = new WeakMap(), ft = new WeakSet(), kt = function() {
  var r;
  const i = ((r = V(this, ze)) == null ? void 0 : r.state) ?? rs();
  ve(this, Qe, {
    ...i,
    isPending: i.status === "pending",
    isSuccess: i.status === "success",
    isError: i.status === "error",
    isIdle: i.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, _t = new WeakSet(), hr = function(i) {
  vt.batch(() => {
    var r, t, s, n, o, a, l, c;
    if (V(this, Ie) && this.hasListeners()) {
      const p = V(this, Qe).variables, h = V(this, Qe).context;
      (i == null ? void 0 : i.type) === "success" ? ((t = (r = V(this, Ie)).onSuccess) == null || t.call(r, i.data, p, h), (n = (s = V(this, Ie)).onSettled) == null || n.call(s, i.data, null, p, h)) : (i == null ? void 0 : i.type) === "error" && ((a = (o = V(this, Ie)).onError) == null || a.call(o, i.error, p, h), (c = (l = V(this, Ie)).onSettled) == null || c.call(
        l,
        void 0,
        i.error,
        p,
        h
      ));
    }
    this.listeners.forEach((p) => {
      p(V(this, Qe));
    });
  });
}, ni);
function ks({
  queries: e,
  ...i
}, r) {
  const t = $t(r), s = ls(), n = cs(), o = z.useMemo(
    () => e.map((v) => {
      const x = t.defaultQueryOptions(v);
      return x._optimisticResults = s ? "isRestoring" : "optimistic", x;
    }),
    [e, t, s]
  );
  o.forEach((v) => {
    fs(v), ds(v, n);
  }), hs(n);
  const [a] = z.useState(
    () => new Ts(
      t,
      o,
      i
    )
  ), [l, c, p] = a.getOptimisticResult(
    o,
    i.combine
  );
  z.useSyncExternalStore(
    z.useCallback(
      (v) => s ? () => {
      } : a.subscribe(vt.batchCalls(v)),
      [a, s]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), z.useEffect(() => {
    a.setQueries(
      o,
      i,
      {
        listeners: !1
      }
    );
  }, [o, i, a]);
  const d = l.some(
    (v, x) => Nr(o[x], v)
  ) ? l.flatMap((v, x) => {
    const T = o[x];
    if (T) {
      const W = new ci(t, T);
      if (Nr(T, v))
        return kr(T, W, n);
      ps(v, s) && kr(T, W, n);
    }
    return [];
  }) : [];
  if (d.length > 0)
    throw Promise.all(d);
  const m = l.find(
    (v, x) => {
      const T = o[x];
      return T && gs({
        result: v,
        errorResetBoundary: n,
        throwOnError: T.throwOnError,
        query: t.getQueryCache().get(T.queryHash)
      });
    }
  );
  if (m != null && m.error)
    throw m.error;
  return c(p());
}
function Fs(e, i) {
  const r = $t(i), [t] = z.useState(
    () => new Ns(
      r,
      e
    )
  );
  z.useEffect(() => {
    t.setOptions(e);
  }, [t, e]);
  const s = z.useSyncExternalStore(
    z.useCallback(
      (o) => t.subscribe(vt.batchCalls(o)),
      [t]
    ),
    () => t.getCurrentResult(),
    () => t.getCurrentResult()
  ), n = z.useCallback(
    (o, a) => {
      t.mutate(o, a).catch(Ls);
    },
    [t]
  );
  if (s.error && ys(t.options.throwOnError, [s.error]))
    throw s.error;
  return { ...s, mutate: n, mutateAsync: s.mutate };
}
function Ls() {
}
function ia(e, i, r) {
  let t;
  typeof e == "string" && typeof i == "string" ? t = {
    url: i,
    method: e,
    ...r
  } : typeof e == "string" ? t = {
    url: e,
    ...i
  } : t = e;
  const s = z.useMemo(() => is(t.url, {
    encode: encodeURIComponent
  }), [t.url]), n = z.useMemo(() => ss(t.url).reduce((m, v) => typeof v != "string" ? [...m, v.name] : m, []), [t.url]), o = fi(), {
    wrapPayload: a = !0,
    syncQueryCache: l = !1,
    ...c
  } = t, p = $t();
  return Fs({
    ...c,
    mutationFn: async (d) => {
      const m = s(pt.pick(d, ...n)), v = pt.omit(d, ...n), x = pt.isEmpty(v) ? void 0 : a ? {
        data: v
      } : v, {
        data: T
      } = await o.request({
        url: m,
        method: t.method || "POST",
        data: x
      });
      return T;
    },
    onSuccess: (d, m, v) => {
      var x;
      if (l) {
        const T = s(pt.pick(m, ...n));
        p.setQueriesData({
          queryKey: [T]
        }, (W) => ({
          ...W,
          data: [d.data]
        }));
      }
      (x = c.onSuccess) == null || x.call(c, d, m, v);
    }
  });
}
const Wr = () => {
  let e, i;
  const r = new Promise((t, s) => {
    e = t, i = s;
  });
  return {
    resolve: e,
    reject: i,
    value: r
  };
}, Ws = (e, i) => {
  var l;
  const r = e.name ?? `batcher:${Math.random().toString(16).slice(2)})`, t = e.scheduler ?? gi(10), s = (l = globalThis.__BATSHIT_DEVTOOLS__) == null ? void 0 : l.for(r);
  let n = i ?? {
    seq: 0,
    batch: /* @__PURE__ */ new Set(),
    currentRequest: Wr(),
    timer: void 0,
    start: null,
    latest: null
  };
  s == null || s.create({ seq: n.seq });
  const o = () => {
    n.batch = /* @__PURE__ */ new Set(), n.currentRequest = Wr(), n.timer = void 0, n.start = null, n.latest = null;
  };
  return { fetch: (c) => {
    n.start || (n.start = Date.now()), n.latest = Date.now(), n.batch.add(c), clearTimeout(n.timer);
    const p = t(n.start, n.latest, n.batch.size);
    s == null || s.queue({
      seq: n.seq,
      query: c,
      batch: [...n.batch],
      scheduled: p,
      latest: n.latest,
      start: n.start
    });
    const h = () => {
      const d = n.seq, m = e.fetcher([...n.batch]), v = n.currentRequest;
      return s == null || s.fetch({ seq: d, batch: [...n.batch] }), o(), m.then((x) => {
        s == null || s.data({ seq: d, data: x }), v.resolve(x);
      }).catch((x) => {
        s == null || s.error({ seq: d, error: x }), v.reject(x);
      }), n.seq++, m;
    };
    if (p === "immediate") {
      const d = n.currentRequest;
      return h(), d.value.then((m) => e.resolver(m, c));
    } else
      return p === "never" ? n.currentRequest.value.then((d) => e.resolver(d, c)) : (n.timer = setTimeout(h, p), n.currentRequest.value.then((d) => e.resolver(d, c)));
  } };
}, Hs = (e) => (i, r) => i.find((t) => t[e] == r), gi = (e) => (i, r) => {
  const t = r - i;
  return e - t;
}, Bs = ({
  url: e,
  idField: i,
  params: r
}) => {
  const t = fi();
  return z.useMemo(() => Ws({
    fetcher: async (s) => {
      const {
        data: {
          data: n
        }
      } = await t.get(e, {
        params: {
          ...r,
          id: s.join(",")
        }
      });
      return n;
    },
    resolver: Hs(i),
    scheduler: gi(10)
  }), [e, r]);
}, Vs = ({
  idField: e,
  value: i,
  url: r,
  params: t
}) => {
  const s = Bs({
    url: r,
    idField: e,
    params: t
  });
  return ks({
    queries: i.map((o) => ({
      queryFn: () => s.fetch(o),
      queryKey: [r, "item", o],
      staleTime: 12e4
    })),
    combine: (o) => ({
      records: o.map((a) => a.data).filter((a) => !!a),
      isLoading: !!o.find((a) => a.isLoading)
    })
  });
}, Is = (e, i = "id") => {
  const r = $t();
  return (t) => {
    t && r.setQueryData([e, "item", t[i]], t);
  };
}, sa = ({
  children: e,
  className: i,
  tooltip: r,
  icon: t,
  iconAfter: s,
  size: n,
  ...o
}) => {
  let a = /* @__PURE__ */ be(Ss, { className: i, size: n || "small", css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...o, children: [
    t && /* @__PURE__ */ M(je, { icon: t }),
    e,
    s && /* @__PURE__ */ M(je, { icon: s })
  ] });
  return r && (a = /* @__PURE__ */ M(ns, { title: r, arrow: !0, children: a })), a;
};
function js(e, i) {
  const [r, t] = z.useState(e);
  return z.useEffect(() => {
    const s = setTimeout(() => {
      t(e);
    }, i);
    return () => {
      clearTimeout(s);
    };
  }, [e, i]), r;
}
function na() {
  const [e, i] = z.useState({
    width: null,
    height: null
  });
  return z.useLayoutEffect(() => {
    const r = () => {
      i({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}
const Us = ({
  children: e,
  className: i,
  form: r
}) => {
  var s, n;
  const t = r.formState.errors;
  return /* @__PURE__ */ be("form", { className: i, onSubmit: r.onSubmit, children: [
    t.root && /* @__PURE__ */ be(xs, { severity: "error", children: [
      ((s = t.root.error) == null ? void 0 : s.message) && /* @__PURE__ */ M(_s, { css: [{
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      }, !t.root.fields && {
        margin: "0px"
      }], children: (n = t.root.error) == null ? void 0 : n.message }),
      t.root.fields && /* @__PURE__ */ M("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(t.root.fields).map(([o, {
        message: a
      }]) => /* @__PURE__ */ M("li", { css: {}, children: a }, o)) })
    ] }),
    e
  ] });
}, oa = Us;
var Dt = (e) => e.type === "checkbox", nt = (e) => e instanceof Date, ye = (e) => e == null;
const yi = (e) => typeof e == "object";
var oe = (e) => !ye(e) && !Array.isArray(e) && yi(e) && !nt(e), vi = (e) => oe(e) && e.target ? Dt(e.target) ? e.target.checked : e.target.value : e, qs = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, mi = (e, i) => e.has(qs(i)), $s = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return oe(i) && i.hasOwnProperty("isPrototypeOf");
}, br = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function me(e) {
  let i;
  const r = Array.isArray(e);
  if (e instanceof Date)
    i = new Date(e);
  else if (e instanceof Set)
    i = new Set(e);
  else if (!(br && (e instanceof Blob || e instanceof FileList)) && (r || oe(e)))
    if (i = r ? [] : {}, !r && !$s(e))
      i = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (i[t] = me(e[t]));
  else
    return e;
  return i;
}
var zt = (e) => Array.isArray(e) ? e.filter(Boolean) : [], re = (e) => e === void 0, D = (e, i, r) => {
  if (!i || !oe(e))
    return r;
  const t = zt(i.split(/[,[\].]+?/)).reduce((s, n) => ye(s) ? s : s[n], e);
  return re(t) || t === e ? re(e[i]) ? r : e[i] : t;
}, Ae = (e) => typeof e == "boolean";
const Wt = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Te = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ve = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ys = K.createContext(null), wr = () => K.useContext(Ys);
var bi = (e, i, r, t = !0) => {
  const s = {
    defaultValues: i._defaultValues
  };
  for (const n in e)
    Object.defineProperty(s, n, {
      get: () => {
        const o = n;
        return i._proxyFormState[o] !== Te.all && (i._proxyFormState[o] = !t || Te.all), r && (r[o] = !0), e[o];
      }
    });
  return s;
}, Me = (e) => oe(e) && !Object.keys(e).length, wi = (e, i, r, t) => {
  r(e);
  const { name: s, ...n } = e;
  return Me(n) || Object.keys(n).length >= Object.keys(i).length || Object.keys(n).find((o) => i[o] === (!t || Te.all));
}, Ft = (e) => Array.isArray(e) ? e : [e], Si = (e, i, r) => !e || !i || e === i || Ft(e).some((t) => t && (r ? t === i : t.startsWith(i) || i.startsWith(t)));
function Sr(e) {
  const i = K.useRef(e);
  i.current = e, K.useEffect(() => {
    const r = !e.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function Xs(e) {
  const i = wr(), { control: r = i.control, disabled: t, name: s, exact: n } = e || {}, [o, a] = K.useState(r._formState), l = K.useRef(!0), c = K.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), p = K.useRef(s);
  return p.current = s, Sr({
    disabled: t,
    next: (h) => l.current && Si(p.current, h.name, n) && wi(h, c.current, r._updateFormState) && a({
      ...r._formState,
      ...h
    }),
    subject: r._subjects.state
  }), K.useEffect(() => (l.current = !0, c.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), bi(o, r, c.current, !1);
}
var Le = (e) => typeof e == "string", xi = (e, i, r, t, s) => Le(e) ? (t && i.watch.add(e), D(r, e, s)) : Array.isArray(e) ? e.map((n) => (t && i.watch.add(n), D(r, n))) : (t && (i.watchAll = !0), r);
function Qs(e) {
  const i = wr(), { control: r = i.control, name: t, defaultValue: s, disabled: n, exact: o } = e || {}, a = K.useRef(t);
  a.current = t, Sr({
    disabled: n,
    subject: r._subjects.values,
    next: (p) => {
      Si(a.current, p.name, o) && c(me(xi(a.current, r._names, p.values || r._formValues, !1, s)));
    }
  });
  const [l, c] = K.useState(r._getWatch(t, s));
  return K.useEffect(() => r._removeUnmounted()), l;
}
var xr = (e) => /^\w*$/.test(e), _i = (e) => zt(e.replace(/["|']|\]/g, "").split(/\.|\[/)), G = (e, i, r) => {
  let t = -1;
  const s = xr(i) ? [i] : _i(i), n = s.length, o = n - 1;
  for (; ++t < n; ) {
    const a = s[t];
    let l = r;
    if (t !== o) {
      const c = e[a];
      l = oe(c) || Array.isArray(c) ? c : isNaN(+s[t + 1]) ? {} : [];
    }
    e[a] = l, e = e[a];
  }
  return e;
};
function Gs(e) {
  const i = wr(), { name: r, disabled: t, control: s = i.control, shouldUnregister: n } = e, o = mi(s._names.array, r), a = Qs({
    control: s,
    name: r,
    defaultValue: D(s._formValues, r, D(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = Xs({
    control: s,
    name: r
  }), c = K.useRef(s.register(r, {
    ...e.rules,
    value: a,
    ...Ae(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return K.useEffect(() => {
    const p = s._options.shouldUnregister || n, h = (d, m) => {
      const v = D(s._fields, d);
      v && (v._f.mount = m);
    };
    if (h(r, !0), p) {
      const d = me(D(s._options.defaultValues, r));
      G(s._defaultValues, r, d), re(D(s._formValues, r)) && G(s._formValues, r, d);
    }
    return () => {
      (o ? p && !s._state.action : p) ? s.unregister(r) : h(r, !1);
    };
  }, [r, s, o, n]), K.useEffect(() => {
    D(s._fields, r) && s._updateDisabledField({
      disabled: t,
      fields: s._fields,
      name: r,
      value: D(s._fields, r)._f.value
    });
  }, [t, r, s]), {
    field: {
      name: r,
      value: a,
      ...Ae(t) || l.disabled ? { disabled: l.disabled || t } : {},
      onChange: K.useCallback((p) => c.current.onChange({
        target: {
          value: vi(p),
          name: r
        },
        type: Wt.CHANGE
      }), [r]),
      onBlur: K.useCallback(() => c.current.onBlur({
        target: {
          value: D(s._formValues, r),
          name: r
        },
        type: Wt.BLUR
      }), [r, s]),
      ref: (p) => {
        const h = D(s._fields, r);
        h && p && (h._f.ref = {
          focus: () => p.focus(),
          select: () => p.select(),
          setCustomValidity: (d) => p.setCustomValidity(d),
          reportValidity: () => p.reportValidity()
        });
      }
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!D(l.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!D(l.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!D(l.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => D(l.errors, r)
      }
    })
  };
}
const Ks = (e) => e.render(Gs(e));
var Di = (e, i, r, t, s) => i ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: s || !0
  }
} : {}, Hr = (e) => ({
  isOnSubmit: !e || e === Te.onSubmit,
  isOnBlur: e === Te.onBlur,
  isOnChange: e === Te.onChange,
  isOnAll: e === Te.all,
  isOnTouch: e === Te.onTouched
}), Br = (e, i, r) => !r && (i.watchAll || i.watch.has(e) || [...i.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const yt = (e, i, r, t) => {
  for (const s of r || Object.keys(e)) {
    const n = D(e, s);
    if (n) {
      const { _f: o, ...a } = n;
      if (o) {
        if (o.refs && o.refs[0] && i(o.refs[0], s) && !t)
          break;
        if (o.ref && i(o.ref, o.name) && !t)
          break;
        yt(a, i);
      } else
        oe(a) && yt(a, i);
    }
  }
};
var Js = (e, i, r) => {
  const t = zt(D(e, r));
  return G(t, "root", i[r]), G(e, r, t), e;
}, _r = (e) => e.type === "file", Ge = (e) => typeof e == "function", Ht = (e) => {
  if (!br)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, Lt = (e) => Le(e), Dr = (e) => e.type === "radio", Bt = (e) => e instanceof RegExp;
const Vr = {
  value: !1,
  isValid: !1
}, Ir = { value: !0, isValid: !0 };
var zi = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !re(e[0].attributes.value) ? re(e[0].value) || e[0].value === "" ? Ir : { value: e[0].value, isValid: !0 } : Ir
    ) : Vr;
  }
  return Vr;
};
const jr = {
  isValid: !1,
  value: null
};
var Oi = (e) => Array.isArray(e) ? e.reduce((i, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : i, jr) : jr;
function Ur(e, i, r = "validate") {
  if (Lt(e) || Array.isArray(e) && e.every(Lt) || Ae(e) && !e)
    return {
      type: r,
      message: Lt(e) ? e : "",
      ref: i
    };
}
var it = (e) => oe(e) && !Bt(e) ? e : {
  value: e,
  message: ""
}, qr = async (e, i, r, t, s) => {
  const { ref: n, refs: o, required: a, maxLength: l, minLength: c, min: p, max: h, pattern: d, validate: m, name: v, valueAsNumber: x, mount: T, disabled: W } = e._f, S = D(i, v);
  if (!T || W)
    return {};
  const C = o ? o[0] : n, F = (A) => {
    t && C.reportValidity && (C.setCustomValidity(Ae(A) ? "" : A || ""), C.reportValidity());
  }, H = {}, I = Dr(n), Q = Dt(n), U = I || Q, B = (x || _r(n)) && re(n.value) && re(S) || Ht(n) && n.value === "" || S === "" || Array.isArray(S) && !S.length, q = Di.bind(null, v, r, H), $ = (A, k, Y, se = Ve.maxLength, ee = Ve.minLength) => {
    const te = A ? k : Y;
    H[v] = {
      type: A ? se : ee,
      message: te,
      ref: n,
      ...q(A ? se : ee, te)
    };
  };
  if (s ? !Array.isArray(S) || !S.length : a && (!U && (B || ye(S)) || Ae(S) && !S || Q && !zi(o).isValid || I && !Oi(o).isValid)) {
    const { value: A, message: k } = Lt(a) ? { value: !!a, message: a } : it(a);
    if (A && (H[v] = {
      type: Ve.required,
      message: k,
      ref: C,
      ...q(Ve.required, k)
    }, !r))
      return F(k), H;
  }
  if (!B && (!ye(p) || !ye(h))) {
    let A, k;
    const Y = it(h), se = it(p);
    if (!ye(S) && !isNaN(S)) {
      const ee = n.valueAsNumber || S && +S;
      ye(Y.value) || (A = ee > Y.value), ye(se.value) || (k = ee < se.value);
    } else {
      const ee = n.valueAsDate || new Date(S), te = (he) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + he), ae = n.type == "time", Re = n.type == "week";
      Le(Y.value) && S && (A = ae ? te(S) > te(Y.value) : Re ? S > Y.value : ee > new Date(Y.value)), Le(se.value) && S && (k = ae ? te(S) < te(se.value) : Re ? S < se.value : ee < new Date(se.value));
    }
    if ((A || k) && ($(!!A, Y.message, se.message, Ve.max, Ve.min), !r))
      return F(H[v].message), H;
  }
  if ((l || c) && !B && (Le(S) || s && Array.isArray(S))) {
    const A = it(l), k = it(c), Y = !ye(A.value) && S.length > +A.value, se = !ye(k.value) && S.length < +k.value;
    if ((Y || se) && ($(Y, A.message, k.message), !r))
      return F(H[v].message), H;
  }
  if (d && !B && Le(S)) {
    const { value: A, message: k } = it(d);
    if (Bt(A) && !S.match(A) && (H[v] = {
      type: Ve.pattern,
      message: k,
      ref: n,
      ...q(Ve.pattern, k)
    }, !r))
      return F(k), H;
  }
  if (m) {
    if (Ge(m)) {
      const A = await m(S, i), k = Ur(A, C);
      if (k && (H[v] = {
        ...k,
        ...q(Ve.validate, k.message)
      }, !r))
        return F(k.message), H;
    } else if (oe(m)) {
      let A = {};
      for (const k in m) {
        if (!Me(A) && !r)
          break;
        const Y = Ur(await m[k](S, i), C, k);
        Y && (A = {
          ...Y,
          ...q(k, Y.message)
        }, F(Y.message), r && (H[v] = A));
      }
      if (!Me(A) && (H[v] = {
        ref: C,
        ...A
      }, !r))
        return H;
    }
  }
  return F(!0), H;
};
function Zs(e, i) {
  const r = i.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = re(e) ? t++ : e[i[t++]];
  return e;
}
function en(e) {
  for (const i in e)
    if (e.hasOwnProperty(i) && !re(e[i]))
      return !1;
  return !0;
}
function de(e, i) {
  const r = Array.isArray(i) ? i : xr(i) ? [i] : _i(i), t = r.length === 1 ? e : Zs(e, r), s = r.length - 1, n = r[s];
  return t && delete t[n], s !== 0 && (oe(t) && Me(t) || Array.isArray(t) && en(t)) && de(e, r.slice(0, -1)), e;
}
var rr = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const n of e)
        n.next && n.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((n) => n !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Vt = (e) => ye(e) || !yi(e);
function Je(e, i) {
  if (Vt(e) || Vt(i))
    return e === i;
  if (nt(e) && nt(i))
    return e.getTime() === i.getTime();
  const r = Object.keys(e), t = Object.keys(i);
  if (r.length !== t.length)
    return !1;
  for (const s of r) {
    const n = e[s];
    if (!t.includes(s))
      return !1;
    if (s !== "ref") {
      const o = i[s];
      if (nt(n) && nt(o) || oe(n) && oe(o) || Array.isArray(n) && Array.isArray(o) ? !Je(n, o) : n !== o)
        return !1;
    }
  }
  return !0;
}
var Ri = (e) => e.type === "select-multiple", tn = (e) => Dr(e) || Dt(e), ir = (e) => Ht(e) && e.isConnected, Pi = (e) => {
  for (const i in e)
    if (Ge(e[i]))
      return !0;
  return !1;
};
function It(e, i = {}) {
  const r = Array.isArray(e);
  if (oe(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || oe(e[t]) && !Pi(e[t]) ? (i[t] = Array.isArray(e[t]) ? [] : {}, It(e[t], i[t])) : ye(e[t]) || (i[t] = !0);
  return i;
}
function Ei(e, i, r) {
  const t = Array.isArray(e);
  if (oe(e) || t)
    for (const s in e)
      Array.isArray(e[s]) || oe(e[s]) && !Pi(e[s]) ? re(i) || Vt(r[s]) ? r[s] = Array.isArray(e[s]) ? It(e[s], []) : { ...It(e[s]) } : Ei(e[s], ye(i) ? {} : i[s], r[s]) : r[s] = !Je(e[s], i[s]);
  return r;
}
var Et = (e, i) => Ei(e, i, It(i)), Mi = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: t }) => re(e) ? e : i ? e === "" ? NaN : e && +e : r && Le(e) ? new Date(e) : t ? t(e) : e;
function sr(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return _r(i) ? i.files : Dr(i) ? Oi(e.refs).value : Ri(i) ? [...i.selectedOptions].map(({ value: r }) => r) : Dt(i) ? zi(e.refs).value : Mi(re(i.value) ? e.ref.value : i.value, e);
}
var rn = (e, i, r, t) => {
  const s = {};
  for (const n of e) {
    const o = D(i, n);
    o && G(s, n, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: t
  };
}, dt = (e) => re(e) ? e : Bt(e) ? e.source : oe(e) ? Bt(e.value) ? e.value.source : e.value : e, sn = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function $r(e, i, r) {
  const t = D(e, r);
  if (t || xr(r))
    return {
      error: t,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const n = s.join("."), o = D(i, n), a = D(e, n);
    if (o && !Array.isArray(o) && r !== n)
      return { name: r };
    if (a && a.type)
      return {
        name: n,
        error: a
      };
    s.pop();
  }
  return {
    name: r
  };
}
var nn = (e, i, r, t, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(i || e) : (r ? t.isOnBlur : s.isOnBlur) ? !e : (r ? t.isOnChange : s.isOnChange) ? e : !0, on = (e, i) => !zt(D(e, i)).length && de(e, i);
const an = {
  mode: Te.onSubmit,
  reValidateMode: Te.onChange,
  shouldFocusError: !0
};
function un(e = {}, i) {
  let r = {
    ...an,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Ge(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, s = {}, n = oe(r.values) || oe(r.defaultValues) ? me(r.values || r.defaultValues) || {} : {}, o = r.shouldUnregister ? {} : me(n), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, p = 0;
  const h = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, d = {
    values: rr(),
    array: rr(),
    state: rr()
  }, m = Hr(r.mode), v = Hr(r.reValidateMode), x = r.criteriaMode === Te.all, T = (u) => (f) => {
    clearTimeout(p), p = setTimeout(u, f);
  }, W = async (u) => {
    if (h.isValid || u) {
      const f = r.resolver ? Me((await B()).errors) : await $(s, !0);
      f !== t.isValid && d.state.next({
        isValid: f
      });
    }
  }, S = (u) => h.isValidating && d.state.next({
    isValidating: u
  }), C = (u, f = [], g, E, _ = !0, b = !0) => {
    if (E && g) {
      if (a.action = !0, b && Array.isArray(D(s, u))) {
        const N = g(D(s, u), E.argA, E.argB);
        _ && G(s, u, N);
      }
      if (b && Array.isArray(D(t.errors, u))) {
        const N = g(D(t.errors, u), E.argA, E.argB);
        _ && G(t.errors, u, N), on(t.errors, u);
      }
      if (h.touchedFields && b && Array.isArray(D(t.touchedFields, u))) {
        const N = g(D(t.touchedFields, u), E.argA, E.argB);
        _ && G(t.touchedFields, u, N);
      }
      h.dirtyFields && (t.dirtyFields = Et(n, o)), d.state.next({
        name: u,
        isDirty: k(u, f),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      G(o, u, f);
  }, F = (u, f) => {
    G(t.errors, u, f), d.state.next({
      errors: t.errors
    });
  }, H = (u) => {
    t.errors = u, d.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, I = (u, f, g, E) => {
    const _ = D(s, u);
    if (_) {
      const b = D(o, u, re(g) ? D(n, u) : g);
      re(b) || E && E.defaultChecked || f ? G(o, u, f ? b : sr(_._f)) : ee(u, b), a.mount && W();
    }
  }, Q = (u, f, g, E, _) => {
    let b = !1, N = !1;
    const Z = {
      name: u
    }, ue = !!(D(s, u) && D(s, u)._f.disabled);
    if (!g || E) {
      h.isDirty && (N = t.isDirty, t.isDirty = Z.isDirty = k(), b = N !== Z.isDirty);
      const ke = ue || Je(D(n, u), f);
      N = !!(!ue && D(t.dirtyFields, u)), ke || ue ? de(t.dirtyFields, u) : G(t.dirtyFields, u, !0), Z.dirtyFields = t.dirtyFields, b = b || h.dirtyFields && N !== !ke;
    }
    if (g) {
      const ke = D(t.touchedFields, u);
      ke || (G(t.touchedFields, u, g), Z.touchedFields = t.touchedFields, b = b || h.touchedFields && ke !== g);
    }
    return b && _ && d.state.next(Z), b ? Z : {};
  }, U = (u, f, g, E) => {
    const _ = D(t.errors, u), b = h.isValid && Ae(f) && t.isValid !== f;
    if (e.delayError && g ? (c = T(() => F(u, g)), c(e.delayError)) : (clearTimeout(p), c = null, g ? G(t.errors, u, g) : de(t.errors, u)), (g ? !Je(_, g) : _) || !Me(E) || b) {
      const N = {
        ...E,
        ...b && Ae(f) ? { isValid: f } : {},
        errors: t.errors,
        name: u
      };
      t = {
        ...t,
        ...N
      }, d.state.next(N);
    }
    S(!1);
  }, B = async (u) => r.resolver(o, r.context, rn(u || l.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), q = async (u) => {
    const { errors: f } = await B(u);
    if (u)
      for (const g of u) {
        const E = D(f, g);
        E ? G(t.errors, g, E) : de(t.errors, g);
      }
    else
      t.errors = f;
    return f;
  }, $ = async (u, f, g = {
    valid: !0
  }) => {
    for (const E in u) {
      const _ = u[E];
      if (_) {
        const { _f: b, ...N } = _;
        if (b) {
          const Z = l.array.has(b.name), ue = await qr(_, o, x, r.shouldUseNativeValidation && !f, Z);
          if (ue[b.name] && (g.valid = !1, f))
            break;
          !f && (D(ue, b.name) ? Z ? Js(t.errors, ue, b.name) : G(t.errors, b.name, ue[b.name]) : de(t.errors, b.name));
        }
        N && await $(N, f, g);
      }
    }
    return g.valid;
  }, A = () => {
    for (const u of l.unMount) {
      const f = D(s, u);
      f && (f._f.refs ? f._f.refs.every((g) => !ir(g)) : !ir(f._f.ref)) && L(u);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, k = (u, f) => (u && f && G(o, u, f), !Je(y(), n)), Y = (u, f, g) => xi(u, l, {
    ...a.mount ? o : re(f) ? n : Le(u) ? { [u]: f } : f
  }, g, f), se = (u) => zt(D(a.mount ? o : n, u, e.shouldUnregister ? D(n, u, []) : [])), ee = (u, f, g = {}) => {
    const E = D(s, u);
    let _ = f;
    if (E) {
      const b = E._f;
      b && (!b.disabled && G(o, u, Mi(f, b)), _ = Ht(b.ref) && ye(f) ? "" : f, Ri(b.ref) ? [...b.ref.options].forEach((N) => N.selected = _.includes(N.value)) : b.refs ? Dt(b.ref) ? b.refs.length > 1 ? b.refs.forEach((N) => (!N.defaultChecked || !N.disabled) && (N.checked = Array.isArray(_) ? !!_.find((Z) => Z === N.value) : _ === N.value)) : b.refs[0] && (b.refs[0].checked = !!_) : b.refs.forEach((N) => N.checked = N.value === _) : _r(b.ref) ? b.ref.value = "" : (b.ref.value = _, b.ref.type || d.values.next({
        name: u,
        values: { ...o }
      })));
    }
    (g.shouldDirty || g.shouldTouch) && Q(u, _, g.shouldTouch, g.shouldDirty, !0), g.shouldValidate && Ne(u);
  }, te = (u, f, g) => {
    for (const E in f) {
      const _ = f[E], b = `${u}.${E}`, N = D(s, b);
      (l.array.has(u) || !Vt(_) || N && !N._f) && !nt(_) ? te(b, _, g) : ee(b, _, g);
    }
  }, ae = (u, f, g = {}) => {
    const E = D(s, u), _ = l.array.has(u), b = me(f);
    G(o, u, b), _ ? (d.array.next({
      name: u,
      values: { ...o }
    }), (h.isDirty || h.dirtyFields) && g.shouldDirty && d.state.next({
      name: u,
      dirtyFields: Et(n, o),
      isDirty: k(u, b)
    })) : E && !E._f && !ye(b) ? te(u, b, g) : ee(u, b, g), Br(u, l) && d.state.next({ ...t }), d.values.next({
      name: u,
      values: { ...o }
    }), !a.mount && i();
  }, Re = async (u) => {
    const f = u.target;
    let g = f.name, E = !0;
    const _ = D(s, g), b = () => f.type ? sr(_._f) : vi(u), N = (Z) => {
      E = Number.isNaN(Z) || Z === D(o, g, Z);
    };
    if (_) {
      let Z, ue;
      const ke = b(), rt = u.type === Wt.BLUR || u.type === Wt.FOCUS_OUT, Ki = !sn(_._f) && !r.resolver && !D(t.errors, g) && !_._f.deps || nn(rt, D(t.touchedFields, g), t.isSubmitted, v, m), Zt = Br(g, l, rt);
      G(o, g, ke), rt ? (_._f.onBlur && _._f.onBlur(u), c && c(0)) : _._f.onChange && _._f.onChange(u);
      const er = Q(g, ke, rt, !1), Ji = !Me(er) || Zt;
      if (!rt && d.values.next({
        name: g,
        type: u.type,
        values: { ...o }
      }), Ki)
        return h.isValid && W(), Ji && d.state.next({ name: g, ...Zt ? {} : er });
      if (!rt && Zt && d.state.next({ ...t }), S(!0), r.resolver) {
        const { errors: Cr } = await B([g]);
        if (N(ke), E) {
          const Zi = $r(t.errors, s, g), Ar = $r(Cr, s, Zi.name || g);
          Z = Ar.error, g = Ar.name, ue = Me(Cr);
        }
      } else
        Z = (await qr(_, o, x, r.shouldUseNativeValidation))[g], N(ke), E && (Z ? ue = !1 : h.isValid && (ue = await $(s, !0)));
      E && (_._f.deps && Ne(_._f.deps), U(g, ue, Z, er));
    }
  }, he = (u, f) => {
    if (D(t.errors, f) && u.focus)
      return u.focus(), 1;
  }, Ne = async (u, f = {}) => {
    let g, E;
    const _ = Ft(u);
    if (S(!0), r.resolver) {
      const b = await q(re(u) ? u : _);
      g = Me(b), E = u ? !_.some((N) => D(b, N)) : g;
    } else
      u ? (E = (await Promise.all(_.map(async (b) => {
        const N = D(s, b);
        return await $(N && N._f ? { [b]: N } : N);
      }))).every(Boolean), !(!E && !t.isValid) && W()) : E = g = await $(s);
    return d.state.next({
      ...!Le(u) || h.isValid && g !== t.isValid ? {} : { name: u },
      ...r.resolver || !u ? { isValid: g } : {},
      errors: t.errors,
      isValidating: !1
    }), f.shouldFocus && !E && yt(s, he, u ? _ : l.mount), E;
  }, y = (u) => {
    const f = {
      ...n,
      ...a.mount ? o : {}
    };
    return re(u) ? f : Le(u) ? D(f, u) : u.map((g) => D(f, g));
  }, w = (u, f) => ({
    invalid: !!D((f || t).errors, u),
    isDirty: !!D((f || t).dirtyFields, u),
    isTouched: !!D((f || t).touchedFields, u),
    error: D((f || t).errors, u)
  }), R = (u) => {
    u && Ft(u).forEach((f) => de(t.errors, f)), d.state.next({
      errors: u ? t.errors : {}
    });
  }, O = (u, f, g) => {
    const E = (D(s, u, { _f: {} })._f || {}).ref;
    G(t.errors, u, {
      ...f,
      ref: E
    }), d.state.next({
      name: u,
      errors: t.errors,
      isValid: !1
    }), g && g.shouldFocus && E && E.focus && E.focus();
  }, P = (u, f) => Ge(u) ? d.values.subscribe({
    next: (g) => u(Y(void 0, f), g)
  }) : Y(u, f, !0), L = (u, f = {}) => {
    for (const g of u ? Ft(u) : l.mount)
      l.mount.delete(g), l.array.delete(g), f.keepValue || (de(s, g), de(o, g)), !f.keepError && de(t.errors, g), !f.keepDirty && de(t.dirtyFields, g), !f.keepTouched && de(t.touchedFields, g), !r.shouldUnregister && !f.keepDefaultValue && de(n, g);
    d.values.next({
      values: { ...o }
    }), d.state.next({
      ...t,
      ...f.keepDirty ? { isDirty: k() } : {}
    }), !f.keepIsValid && W();
  }, j = ({ disabled: u, name: f, field: g, fields: E, value: _ }) => {
    if (Ae(u)) {
      const b = u ? void 0 : re(_) ? sr(g ? g._f : D(E, f)._f) : _;
      G(o, f, b), Q(f, b, !1, !1, !0);
    }
  }, J = (u, f = {}) => {
    let g = D(s, u);
    const E = Ae(f.disabled);
    return G(s, u, {
      ...g || {},
      _f: {
        ...g && g._f ? g._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...f
      }
    }), l.mount.add(u), g ? j({
      field: g,
      disabled: f.disabled,
      name: u,
      value: f.value
    }) : I(u, !0, f.value), {
      ...E ? { disabled: f.disabled } : {},
      ...r.progressive ? {
        required: !!f.required,
        min: dt(f.min),
        max: dt(f.max),
        minLength: dt(f.minLength),
        maxLength: dt(f.maxLength),
        pattern: dt(f.pattern)
      } : {},
      name: u,
      onChange: Re,
      onBlur: Re,
      ref: (_) => {
        if (_) {
          J(u, f), g = D(s, u);
          const b = re(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, N = tn(b), Z = g._f.refs || [];
          if (N ? Z.find((ue) => ue === b) : b === g._f.ref)
            return;
          G(s, u, {
            _f: {
              ...g._f,
              ...N ? {
                refs: [
                  ...Z.filter(ir),
                  b,
                  ...Array.isArray(D(n, u)) ? [{}] : []
                ],
                ref: { type: b.type, name: u }
              } : { ref: b }
            }
          }), I(u, !1, void 0, b);
        } else
          g = D(s, u, {}), g._f && (g._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(mi(l.array, u) && a.action) && l.unMount.add(u);
      }
    };
  }, X = () => r.shouldFocusError && yt(s, he, l.mount), Be = (u) => {
    Ae(u) && (d.state.next({ disabled: u }), yt(s, (f, g) => {
      let E = u;
      const _ = D(s, g);
      _ && Ae(_._f.disabled) && (E || (E = _._f.disabled)), f.disabled = E;
    }, 0, !1));
  }, we = (u, f) => async (g) => {
    let E;
    g && (g.preventDefault && g.preventDefault(), g.persist && g.persist());
    let _ = me(o);
    if (d.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: b, values: N } = await B();
      t.errors = b, _ = N;
    } else
      await $(s);
    if (de(t.errors, "root"), Me(t.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await u(_, g);
      } catch (b) {
        E = b;
      }
    } else
      f && await f({ ...t.errors }, g), X(), setTimeout(X);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Me(t.errors) && !E,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), E)
      throw E;
  }, Se = (u, f = {}) => {
    D(s, u) && (re(f.defaultValue) ? ae(u, me(D(n, u))) : (ae(u, f.defaultValue), G(n, u, me(f.defaultValue))), f.keepTouched || de(t.touchedFields, u), f.keepDirty || (de(t.dirtyFields, u), t.isDirty = f.defaultValue ? k(u, me(D(n, u))) : k()), f.keepError || (de(t.errors, u), h.isValid && W()), d.state.next({ ...t }));
  }, Pe = (u, f = {}) => {
    const g = u ? me(u) : n, E = me(g), _ = u && !Me(u) ? E : n;
    if (f.keepDefaultValues || (n = g), !f.keepValues) {
      if (f.keepDirtyValues)
        for (const b of l.mount)
          D(t.dirtyFields, b) ? G(_, b, D(o, b)) : ae(b, D(_, b));
      else {
        if (br && re(u))
          for (const b of l.mount) {
            const N = D(s, b);
            if (N && N._f) {
              const Z = Array.isArray(N._f.refs) ? N._f.refs[0] : N._f.ref;
              if (Ht(Z)) {
                const ue = Z.closest("form");
                if (ue) {
                  ue.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      o = e.shouldUnregister ? f.keepDefaultValues ? me(n) : {} : me(_), d.array.next({
        values: { ..._ }
      }), d.values.next({
        values: { ..._ }
      });
    }
    l = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !a.mount && i(), a.mount = !h.isValid || !!f.keepIsValid || !!f.keepDirtyValues, a.watch = !!e.shouldUnregister, d.state.next({
      submitCount: f.keepSubmitCount ? t.submitCount : 0,
      isDirty: f.keepDirty ? t.isDirty : !!(f.keepDefaultValues && !Je(u, n)),
      isSubmitted: f.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: f.keepDirtyValues ? f.keepDefaultValues && o ? Et(n, o) : t.dirtyFields : f.keepDefaultValues && u ? Et(n, u) : {},
      touchedFields: f.keepTouched ? t.touchedFields : {},
      errors: f.keepErrors ? t.errors : {},
      isSubmitSuccessful: f.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ue = (u, f) => Pe(Ge(u) ? u(o) : u, f);
  return {
    control: {
      register: J,
      unregister: L,
      getFieldState: w,
      handleSubmit: we,
      setError: O,
      _executeSchema: B,
      _getWatch: Y,
      _getDirty: k,
      _updateValid: W,
      _removeUnmounted: A,
      _updateFieldArray: C,
      _updateDisabledField: j,
      _getFieldArray: se,
      _reset: Pe,
      _resetDefaultValues: () => Ge(r.defaultValues) && r.defaultValues().then((u) => {
        Ue(u, r.resetOptions), d.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (u) => {
        t = {
          ...t,
          ...u
        };
      },
      _disableForm: Be,
      _subjects: d,
      _proxyFormState: h,
      _setErrors: H,
      get _fields() {
        return s;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(u) {
        a = u;
      },
      get _defaultValues() {
        return n;
      },
      get _names() {
        return l;
      },
      set _names(u) {
        l = u;
      },
      get _formState() {
        return t;
      },
      set _formState(u) {
        t = u;
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
    trigger: Ne,
    register: J,
    handleSubmit: we,
    watch: P,
    setValue: ae,
    getValues: y,
    reset: Ue,
    resetField: Se,
    clearErrors: R,
    unregister: L,
    setError: O,
    setFocus: (u, f = {}) => {
      const g = D(s, u), E = g && g._f;
      if (E) {
        const _ = E.refs ? E.refs[0] : E.ref;
        _.focus && (_.focus(), f.shouldSelect && _.select());
      }
    },
    getFieldState: w
  };
}
function ln(e = {}) {
  const i = K.useRef(), r = K.useRef(), [t, s] = K.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ge(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: Ge(e.defaultValues) ? void 0 : e.defaultValues
  });
  i.current || (i.current = {
    ...un(e, () => s((o) => ({ ...o }))),
    formState: t
  });
  const n = i.current.control;
  return n._options = e, Sr({
    subject: n._subjects.state,
    next: (o) => {
      wi(o, n._proxyFormState, n._updateFormState, !0) && s({ ...n._formState });
    }
  }), K.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]), K.useEffect(() => {
    if (n._proxyFormState.isDirty) {
      const o = n._getDirty();
      o !== t.isDirty && n._subjects.state.next({
        isDirty: o
      });
    }
  }, [n, t.isDirty]), K.useEffect(() => {
    e.values && !Je(e.values, r.current) ? (n._reset(e.values, n._options.resetOptions), r.current = e.values, s((o) => ({ ...o }))) : n._resetDefaultValues();
  }, [e.values, n]), K.useEffect(() => {
    e.errors && n._setErrors(e.errors);
  }, [e.errors, n]), K.useEffect(() => {
    n._state.mount || (n._updateValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), K.useEffect(() => {
    e.shouldUnregister && n._subjects.values.next({
      values: n._getWatch()
    });
  }, [e.shouldUnregister, n]), i.current.formState = bi(t, n), i.current;
}
const cn = ({
  render: e,
  ...i
}) => /* @__PURE__ */ M(Ks, { ...i, render: ({
  field: r,
  fieldState: t,
  ...s
}) => {
  var n;
  return e({
    field: {
      ...r,
      error: (n = t.error) == null ? void 0 : n.message
    },
    fieldState: t,
    ...s
  });
} }), aa = cn;
var Ci = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", r = "triangle-exclamation", t = 512, s = 512, n = [9888, "exclamation-triangle", "warning"], o = "f071", a = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  e.definition = {
    prefix: i,
    iconName: r,
    icon: [
      t,
      s,
      n,
      o,
      a
    ]
  }, e.faTriangleExclamation = e.definition, e.prefix = i, e.iconName = r, e.width = t, e.height = s, e.ligatures = n, e.unicode = o, e.svgPathData = a, e.aliases = n;
})(Ci);
const fn = ({
  helperText: e,
  label: i,
  error: r,
  children: t,
  ...s
}, n) => (e = r || e, /* @__PURE__ */ be("div", { ref: n, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, i && {
  paddingTop: "1.5rem"
}], ...s, children: [
  t,
  i && /* @__PURE__ */ M("label", { css: [{
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
  }], children: i }),
  e && /* @__PURE__ */ be("div", { css: [{
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
    r && /* @__PURE__ */ M(je, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: Ci.faTriangleExclamation }),
    e
  ] })
] })), Yt = z.forwardRef(fn);
var Yr = function(e, i, r) {
  if (e && "reportValidity" in e) {
    var t = D(r, i);
    e.setCustomValidity(t && t.message || ""), e.reportValidity();
  }
}, Ai = function(e, i) {
  var r = function(s) {
    var n = i.fields[s];
    n && n.ref && "reportValidity" in n.ref ? Yr(n.ref, s, e) : n.refs && n.refs.forEach(function(o) {
      return Yr(o, s, e);
    });
  };
  for (var t in i.fields)
    r(t);
}, dn = function(e, i) {
  i.shouldUseNativeValidation && Ai(e, i);
  var r = {};
  for (var t in e) {
    var s = D(i.fields, t), n = Object.assign(e[t] || {}, { ref: s && s.ref });
    if (hn(i.names || Object.keys(e), t)) {
      var o = Object.assign({}, D(r, t));
      G(o, "root", n), G(r, t, o);
    } else
      G(r, t, n);
  }
  return r;
}, hn = function(e, i) {
  return e.some(function(r) {
    return r.startsWith(i + ".");
  });
}, pn = function(e, i) {
  for (var r = {}; e.length; ) {
    var t = e[0], s = t.code, n = t.message, o = t.path.join(".");
    if (!r[o])
      if ("unionErrors" in t) {
        var a = t.unionErrors[0].errors[0];
        r[o] = { message: a.message, type: a.code };
      } else
        r[o] = { message: n, type: s };
    if ("unionErrors" in t && t.unionErrors.forEach(function(p) {
      return p.errors.forEach(function(h) {
        return e.push(h);
      });
    }), i) {
      var l = r[o].types, c = l && l[t.code];
      r[o] = Di(o, i, r, s, c ? [].concat(c, t.message) : t.message);
    }
    e.shift();
  }
  return r;
}, gn = function(e, i, r) {
  return r === void 0 && (r = {}), function(t, s, n) {
    try {
      return Promise.resolve(function(o, a) {
        try {
          var l = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](t, i)).then(function(c) {
            return n.shouldUseNativeValidation && Ai({}, n), { errors: {}, values: r.raw ? t : c };
          });
        } catch (c) {
          return a(c);
        }
        return l && l.then ? l.then(void 0, a) : l;
      }(0, function(o) {
        if (function(a) {
          return a.errors != null;
        }(o))
          return { values: {}, errors: dn(pn(o.errors, !n.shouldUseNativeValidation && n.criteriaMode === "all"), n) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
};
const yn = ({
  schema: e,
  mode: i = "onChange",
  reValidateMode: r = "onChange",
  onValid: t,
  onInvalid: s,
  ...n
} = {}) => {
  const o = ln({
    mode: i,
    reValidateMode: r,
    resolver: e ? gn(e) : void 0,
    ...n
  });
  return {
    onSubmit: o.handleSubmit((a, l) => t == null ? void 0 : t(a, l), s),
    submit: async () => new Promise((a, l) => {
      o.handleSubmit(async (p, h) => {
        try {
          await (t == null ? void 0 : t(p, h)), a(void 0);
        } catch (d) {
          l(d);
        }
      }, (p) => {
        l(p);
      })();
    }),
    ...o
  };
}, ua = ({
  onValid: e,
  context: i,
  mutation: r,
  defaultValues: t,
  schema: s,
  transformSendData: n,
  ...o
}) => {
  const a = yn({
    context: i,
    schema: s,
    defaultValues: t,
    onValid: async (l) => {
      await (e == null ? void 0 : e(l)), await (r == null ? void 0 : r.mutateAsync(n ? n(l) : l, {
        onError: (c, p) => {
          var d;
          const h = (d = c.response) == null ? void 0 : d.data;
          h ? h.errors ? h.errors.forEach((m) => {
            m.attribute in p ? a.setError(m.attribute, {
              message: m.msg
            }) : a.setError(`root.fields.${m.attribute}`, {
              type: "server",
              message: m.msg
            });
          }) : a.setError("root.error", {
            type: "server",
            message: h.message
          }) : a.setError("root.error", {
            type: "server",
            message: c.message
          });
        }
      }));
    },
    ...o
  });
  return a;
};
var Ti = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", r = "xmark", t = 384, s = 512, n = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], o = "f00d", a = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  e.definition = {
    prefix: i,
    iconName: r,
    icon: [
      t,
      s,
      n,
      o,
      a
    ]
  }, e.faXmark = e.definition, e.prefix = i, e.iconName = r, e.width = t, e.height = s, e.ligatures = n, e.unicode = o, e.svgPathData = a, e.aliases = n;
})(Ti);
var Xt = { exports: {} }, Ni = {};
function ki(e) {
  var i, r, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (i = 0; i < e.length; i++)
        e[i] && (r = ki(e[i])) && (t && (t += " "), t += r);
    else
      for (i in e)
        e[i] && (t && (t += " "), t += i);
  return t;
}
function Xr() {
  for (var e, i, r = 0, t = ""; r < arguments.length; )
    (e = arguments[r++]) && (i = ki(e)) && (t && (t += " "), t += i);
  return t;
}
const vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Xr,
  default: Xr
}, Symbol.toStringTag, { value: "Module" })), mn = /* @__PURE__ */ us(vn);
var ie = {}, We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.dontSetMe = _n;
We.findInArray = bn;
We.int = xn;
We.isFunction = wn;
We.isNum = Sn;
function bn(e, i) {
  for (var r = 0, t = e.length; r < t; r++)
    if (i.apply(i, [e[r], r, e]))
      return e[r];
}
function wn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Sn(e) {
  return typeof e == "number" && !isNaN(e);
}
function xn(e) {
  return parseInt(e, 10);
}
function _n(e, i, r) {
  if (e[i])
    return new Error("Invalid prop ".concat(i, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var et = {};
Object.defineProperty(et, "__esModule", {
  value: !0
});
et.browserPrefixToKey = Li;
et.browserPrefixToStyle = Dn;
et.default = void 0;
et.getPrefix = Fi;
var nr = ["Moz", "Webkit", "O", "ms"];
function Fi() {
  var e, i, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var t = (e = window.document) === null || e === void 0 || (i = e.documentElement) === null || i === void 0 ? void 0 : i.style;
  if (!t || r in t)
    return "";
  for (var s = 0; s < nr.length; s++)
    if (Li(r, nr[s]) in t)
      return nr[s];
  return "";
}
function Li(e, i) {
  return i ? "".concat(i).concat(zn(e)) : e;
}
function Dn(e, i) {
  return i ? "-".concat(i.toLowerCase(), "-").concat(e) : e;
}
function zn(e) {
  for (var i = "", r = !0, t = 0; t < e.length; t++)
    r ? (i += e[t].toUpperCase(), r = !1) : e[t] === "-" ? r = !0 : i += e[t];
  return i;
}
var On = Fi();
et.default = On;
function pr(e) {
  "@babel/helpers - typeof";
  return pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, pr(e);
}
Object.defineProperty(ie, "__esModule", {
  value: !0
});
ie.addClassName = Ii;
ie.addEvent = En;
ie.addUserSelectStyles = Bn;
ie.createCSSTransform = Fn;
ie.createSVGTransform = Ln;
ie.getTouch = Wn;
ie.getTouchIdentifier = Hn;
ie.getTranslation = zr;
ie.innerHeight = Tn;
ie.innerWidth = Nn;
ie.matchesSelector = Vi;
ie.matchesSelectorAndParentsTo = Pn;
ie.offsetXYFromParent = kn;
ie.outerHeight = Cn;
ie.outerWidth = An;
ie.removeClassName = ji;
ie.removeEvent = Mn;
ie.removeUserSelectStyles = Vn;
var Oe = We, Qr = Rn(et);
function Wi(e) {
  if (typeof WeakMap != "function")
    return null;
  var i = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Wi = function(s) {
    return s ? r : i;
  })(e);
}
function Rn(e, i) {
  if (!i && e && e.__esModule)
    return e;
  if (e === null || pr(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = Wi(i);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var n in e)
    if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
      var o = s ? Object.getOwnPropertyDescriptor(e, n) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, n, o) : t[n] = e[n];
    }
  return t.default = e, r && r.set(e, t), t;
}
function Gr(e, i) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    i && (t = t.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Hi(e) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Gr(Object(r), !0).forEach(function(t) {
      Bi(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Bi(e, i, r) {
  return i in e ? Object.defineProperty(e, i, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = r, e;
}
var Mt = "";
function Vi(e, i) {
  return Mt || (Mt = (0, Oe.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, Oe.isFunction)(e[r]);
  })), (0, Oe.isFunction)(e[Mt]) ? e[Mt](i) : !1;
}
function Pn(e, i, r) {
  var t = e;
  do {
    if (Vi(t, i))
      return !0;
    if (t === r)
      return !1;
    t = t.parentNode;
  } while (t);
  return !1;
}
function En(e, i, r, t) {
  if (e) {
    var s = Hi({
      capture: !0
    }, t);
    e.addEventListener ? e.addEventListener(i, r, s) : e.attachEvent ? e.attachEvent("on" + i, r) : e["on" + i] = r;
  }
}
function Mn(e, i, r, t) {
  if (e) {
    var s = Hi({
      capture: !0
    }, t);
    e.removeEventListener ? e.removeEventListener(i, r, s) : e.detachEvent ? e.detachEvent("on" + i, r) : e["on" + i] = null;
  }
}
function Cn(e) {
  var i = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return i += (0, Oe.int)(r.borderTopWidth), i += (0, Oe.int)(r.borderBottomWidth), i;
}
function An(e) {
  var i = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return i += (0, Oe.int)(r.borderLeftWidth), i += (0, Oe.int)(r.borderRightWidth), i;
}
function Tn(e) {
  var i = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return i -= (0, Oe.int)(r.paddingTop), i -= (0, Oe.int)(r.paddingBottom), i;
}
function Nn(e) {
  var i = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return i -= (0, Oe.int)(r.paddingLeft), i -= (0, Oe.int)(r.paddingRight), i;
}
function kn(e, i, r) {
  var t = i === i.ownerDocument.body, s = t ? {
    left: 0,
    top: 0
  } : i.getBoundingClientRect(), n = (e.clientX + i.scrollLeft - s.left) / r, o = (e.clientY + i.scrollTop - s.top) / r;
  return {
    x: n,
    y: o
  };
}
function Fn(e, i) {
  var r = zr(e, i, "px");
  return Bi({}, (0, Qr.browserPrefixToKey)("transform", Qr.default), r);
}
function Ln(e, i) {
  var r = zr(e, i, "");
  return r;
}
function zr(e, i, r) {
  var t = e.x, s = e.y, n = "translate(".concat(t).concat(r, ",").concat(s).concat(r, ")");
  if (i) {
    var o = "".concat(typeof i.x == "string" ? i.x : i.x + r), a = "".concat(typeof i.y == "string" ? i.y : i.y + r);
    n = "translate(".concat(o, ", ").concat(a, ")") + n;
  }
  return n;
}
function Wn(e, i) {
  return e.targetTouches && (0, Oe.findInArray)(e.targetTouches, function(r) {
    return i === r.identifier;
  }) || e.changedTouches && (0, Oe.findInArray)(e.changedTouches, function(r) {
    return i === r.identifier;
  });
}
function Hn(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Bn(e) {
  if (e) {
    var i = e.getElementById("react-draggable-style-el");
    i || (i = e.createElement("style"), i.type = "text/css", i.id = "react-draggable-style-el", i.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, i.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(i)), e.body && Ii(e.body, "react-draggable-transparent-selection");
  }
}
function Vn(e) {
  if (e)
    try {
      if (e.body && ji(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var i = (e.defaultView || window).getSelection();
        i && i.type !== "Caret" && i.removeAllRanges();
      }
    } catch {
    }
}
function Ii(e, i) {
  e.classList ? e.classList.add(i) : e.className.match(new RegExp("(?:^|\\s)".concat(i, "(?!\\S)"))) || (e.className += " ".concat(i));
}
function ji(e, i) {
  e.classList ? e.classList.remove(i) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(i, "(?!\\S)"), "g"), "");
}
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.canDragX = Un;
He.canDragY = qn;
He.createCoreData = Yn;
He.createDraggableData = Xn;
He.getBoundPosition = In;
He.getControlPosition = $n;
He.snapToGrid = jn;
var _e = We, ot = ie;
function In(e, i, r) {
  if (!e.props.bounds)
    return [i, r];
  var t = e.props.bounds;
  t = typeof t == "string" ? t : Qn(t);
  var s = Or(e);
  if (typeof t == "string") {
    var n = s.ownerDocument, o = n.defaultView, a;
    if (t === "parent" ? a = s.parentNode : a = n.querySelector(t), !(a instanceof o.HTMLElement))
      throw new Error('Bounds selector "' + t + '" could not find an element.');
    var l = a, c = o.getComputedStyle(s), p = o.getComputedStyle(l);
    t = {
      left: -s.offsetLeft + (0, _e.int)(p.paddingLeft) + (0, _e.int)(c.marginLeft),
      top: -s.offsetTop + (0, _e.int)(p.paddingTop) + (0, _e.int)(c.marginTop),
      right: (0, ot.innerWidth)(l) - (0, ot.outerWidth)(s) - s.offsetLeft + (0, _e.int)(p.paddingRight) - (0, _e.int)(c.marginRight),
      bottom: (0, ot.innerHeight)(l) - (0, ot.outerHeight)(s) - s.offsetTop + (0, _e.int)(p.paddingBottom) - (0, _e.int)(c.marginBottom)
    };
  }
  return (0, _e.isNum)(t.right) && (i = Math.min(i, t.right)), (0, _e.isNum)(t.bottom) && (r = Math.min(r, t.bottom)), (0, _e.isNum)(t.left) && (i = Math.max(i, t.left)), (0, _e.isNum)(t.top) && (r = Math.max(r, t.top)), [i, r];
}
function jn(e, i, r) {
  var t = Math.round(i / e[0]) * e[0], s = Math.round(r / e[1]) * e[1];
  return [t, s];
}
function Un(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function qn(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function $n(e, i, r) {
  var t = typeof i == "number" ? (0, ot.getTouch)(e, i) : null;
  if (typeof i == "number" && !t)
    return null;
  var s = Or(r), n = r.props.offsetParent || s.offsetParent || s.ownerDocument.body;
  return (0, ot.offsetXYFromParent)(t || e, n, r.props.scale);
}
function Yn(e, i, r) {
  var t = e.state, s = !(0, _e.isNum)(t.lastX), n = Or(e);
  return s ? {
    node: n,
    deltaX: 0,
    deltaY: 0,
    lastX: i,
    lastY: r,
    x: i,
    y: r
  } : {
    node: n,
    deltaX: i - t.lastX,
    deltaY: r - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: i,
    y: r
  };
}
function Xn(e, i) {
  var r = e.props.scale;
  return {
    node: i.node,
    x: e.state.x + i.deltaX / r,
    y: e.state.y + i.deltaY / r,
    deltaX: i.deltaX / r,
    deltaY: i.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Qn(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Or(e) {
  var i = e.findDOMNode();
  if (!i)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return i;
}
var Qt = {}, Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
Gt.default = Gn;
function Gn() {
}
function jt(e) {
  "@babel/helpers - typeof";
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, jt(e);
}
Object.defineProperty(Qt, "__esModule", {
  value: !0
});
Qt.default = void 0;
var or = Jn(z), xe = Rr(di), Kn = Rr(ui), pe = ie, $e = He, ar = We, ht = Rr(Gt);
function Rr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ui(e) {
  if (typeof WeakMap != "function")
    return null;
  var i = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ui = function(s) {
    return s ? r : i;
  })(e);
}
function Jn(e, i) {
  if (!i && e && e.__esModule)
    return e;
  if (e === null || jt(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = Ui(i);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var n in e)
    if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
      var o = s ? Object.getOwnPropertyDescriptor(e, n) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, n, o) : t[n] = e[n];
    }
  return t.default = e, r && r.set(e, t), t;
}
function Kr(e, i) {
  return ro(e) || to(e, i) || eo(e, i) || Zn();
}
function Zn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eo(e, i) {
  if (e) {
    if (typeof e == "string")
      return Jr(e, i);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Jr(e, i);
  }
}
function Jr(e, i) {
  (i == null || i > e.length) && (i = e.length);
  for (var r = 0, t = new Array(i); r < i; r++)
    t[r] = e[r];
  return t;
}
function to(e, i) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t = [], s = !0, n = !1, o, a;
    try {
      for (r = r.call(e); !(s = (o = r.next()).done) && (t.push(o.value), !(i && t.length === i)); s = !0)
        ;
    } catch (l) {
      n = !0, a = l;
    } finally {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (n)
          throw a;
      }
    }
    return t;
  }
}
function ro(e) {
  if (Array.isArray(e))
    return e;
}
function io(e, i) {
  if (!(e instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
function Zr(e, i) {
  for (var r = 0; r < i.length; r++) {
    var t = i[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function so(e, i, r) {
  return i && Zr(e.prototype, i), r && Zr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function no(e, i) {
  if (typeof i != "function" && i !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(i && i.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), i && gr(e, i);
}
function gr(e, i) {
  return gr = Object.setPrototypeOf || function(t, s) {
    return t.__proto__ = s, t;
  }, gr(e, i);
}
function oo(e) {
  var i = uo();
  return function() {
    var t = Ut(e), s;
    if (i) {
      var n = Ut(this).constructor;
      s = Reflect.construct(t, arguments, n);
    } else
      s = t.apply(this, arguments);
    return ao(this, s);
  };
}
function ao(e, i) {
  if (i && (jt(i) === "object" || typeof i == "function"))
    return i;
  if (i !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ge(e);
}
function ge(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uo() {
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
function Ut(e) {
  return Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ut(e);
}
function Ee(e, i, r) {
  return i in e ? Object.defineProperty(e, i, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = r, e;
}
var Ce = {
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
}, Ye = Ce.mouse, Kt = /* @__PURE__ */ function(e) {
  no(r, e);
  var i = oo(r);
  function r() {
    var t;
    io(this, r);
    for (var s = arguments.length, n = new Array(s), o = 0; o < s; o++)
      n[o] = arguments[o];
    return t = i.call.apply(i, [this].concat(n)), Ee(ge(t), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), Ee(ge(t), "mounted", !1), Ee(ge(t), "handleDragStart", function(a) {
      if (t.props.onMouseDown(a), !t.props.allowAnyClick && typeof a.button == "number" && a.button !== 0)
        return !1;
      var l = t.findDOMNode();
      if (!l || !l.ownerDocument || !l.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var c = l.ownerDocument;
      if (!(t.props.disabled || !(a.target instanceof c.defaultView.Node) || t.props.handle && !(0, pe.matchesSelectorAndParentsTo)(a.target, t.props.handle, l) || t.props.cancel && (0, pe.matchesSelectorAndParentsTo)(a.target, t.props.cancel, l))) {
        a.type === "touchstart" && a.preventDefault();
        var p = (0, pe.getTouchIdentifier)(a);
        t.setState({
          touchIdentifier: p
        });
        var h = (0, $e.getControlPosition)(a, p, ge(t));
        if (h != null) {
          var d = h.x, m = h.y, v = (0, $e.createCoreData)(ge(t), d, m);
          (0, ht.default)("DraggableCore: handleDragStart: %j", v), (0, ht.default)("calling", t.props.onStart);
          var x = t.props.onStart(a, v);
          x === !1 || t.mounted === !1 || (t.props.enableUserSelectHack && (0, pe.addUserSelectStyles)(c), t.setState({
            dragging: !0,
            lastX: d,
            lastY: m
          }), (0, pe.addEvent)(c, Ye.move, t.handleDrag), (0, pe.addEvent)(c, Ye.stop, t.handleDragStop));
        }
      }
    }), Ee(ge(t), "handleDrag", function(a) {
      var l = (0, $e.getControlPosition)(a, t.state.touchIdentifier, ge(t));
      if (l != null) {
        var c = l.x, p = l.y;
        if (Array.isArray(t.props.grid)) {
          var h = c - t.state.lastX, d = p - t.state.lastY, m = (0, $e.snapToGrid)(t.props.grid, h, d), v = Kr(m, 2);
          if (h = v[0], d = v[1], !h && !d)
            return;
          c = t.state.lastX + h, p = t.state.lastY + d;
        }
        var x = (0, $e.createCoreData)(ge(t), c, p);
        (0, ht.default)("DraggableCore: handleDrag: %j", x);
        var T = t.props.onDrag(a, x);
        if (T === !1 || t.mounted === !1) {
          try {
            t.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var W = document.createEvent("MouseEvents");
            W.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(W);
          }
          return;
        }
        t.setState({
          lastX: c,
          lastY: p
        });
      }
    }), Ee(ge(t), "handleDragStop", function(a) {
      if (t.state.dragging) {
        var l = (0, $e.getControlPosition)(a, t.state.touchIdentifier, ge(t));
        if (l != null) {
          var c = l.x, p = l.y;
          if (Array.isArray(t.props.grid)) {
            var h = c - t.state.lastX || 0, d = p - t.state.lastY || 0, m = (0, $e.snapToGrid)(t.props.grid, h, d), v = Kr(m, 2);
            h = v[0], d = v[1], c = t.state.lastX + h, p = t.state.lastY + d;
          }
          var x = (0, $e.createCoreData)(ge(t), c, p), T = t.props.onStop(a, x);
          if (T === !1 || t.mounted === !1)
            return !1;
          var W = t.findDOMNode();
          W && t.props.enableUserSelectHack && (0, pe.removeUserSelectStyles)(W.ownerDocument), (0, ht.default)("DraggableCore: handleDragStop: %j", x), t.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), W && ((0, ht.default)("DraggableCore: Removing handlers"), (0, pe.removeEvent)(W.ownerDocument, Ye.move, t.handleDrag), (0, pe.removeEvent)(W.ownerDocument, Ye.stop, t.handleDragStop));
        }
      }
    }), Ee(ge(t), "onMouseDown", function(a) {
      return Ye = Ce.mouse, t.handleDragStart(a);
    }), Ee(ge(t), "onMouseUp", function(a) {
      return Ye = Ce.mouse, t.handleDragStop(a);
    }), Ee(ge(t), "onTouchStart", function(a) {
      return Ye = Ce.touch, t.handleDragStart(a);
    }), Ee(ge(t), "onTouchEnd", function(a) {
      return Ye = Ce.touch, t.handleDragStop(a);
    }), t;
  }
  return so(r, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var s = this.findDOMNode();
      s && (0, pe.addEvent)(s, Ce.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var s = this.findDOMNode();
      if (s) {
        var n = s.ownerDocument;
        (0, pe.removeEvent)(n, Ce.mouse.move, this.handleDrag), (0, pe.removeEvent)(n, Ce.touch.move, this.handleDrag), (0, pe.removeEvent)(n, Ce.mouse.stop, this.handleDragStop), (0, pe.removeEvent)(n, Ce.touch.stop, this.handleDragStop), (0, pe.removeEvent)(s, Ce.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, pe.removeUserSelectStyles)(n);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var s, n, o;
      return (s = this.props) !== null && s !== void 0 && s.nodeRef ? (n = this.props) === null || n === void 0 || (o = n.nodeRef) === null || o === void 0 ? void 0 : o.current : Kn.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ or.cloneElement(or.Children.only(this.props.children), {
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
}(or.Component);
Qt.default = Kt;
Ee(Kt, "displayName", "DraggableCore");
Ee(Kt, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: xe.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: xe.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: xe.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(i, r) {
    if (i[r] && i[r].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: xe.default.arrayOf(xe.default.number),
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
  handle: xe.default.string,
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
  cancel: xe.default.string,
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
  nodeRef: xe.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: xe.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: xe.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: xe.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: xe.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: xe.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: ar.dontSetMe,
  style: ar.dontSetMe,
  transform: ar.dontSetMe
});
Ee(Kt, "defaultProps", {
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
  function i(y) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
      return typeof w;
    } : function(w) {
      return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
    }, i(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return c.default;
    }
  }), e.default = void 0;
  var r = v(z), t = d(di), s = d(ui), n = d(mn), o = ie, a = He, l = We, c = d(Qt), p = d(Gt), h = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function d(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function m(y) {
    if (typeof WeakMap != "function")
      return null;
    var w = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
    return (m = function(P) {
      return P ? R : w;
    })(y);
  }
  function v(y, w) {
    if (!w && y && y.__esModule)
      return y;
    if (y === null || i(y) !== "object" && typeof y != "function")
      return { default: y };
    var R = m(w);
    if (R && R.has(y))
      return R.get(y);
    var O = {}, P = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in y)
      if (L !== "default" && Object.prototype.hasOwnProperty.call(y, L)) {
        var j = P ? Object.getOwnPropertyDescriptor(y, L) : null;
        j && (j.get || j.set) ? Object.defineProperty(O, L, j) : O[L] = y[L];
      }
    return O.default = y, R && R.set(y, O), O;
  }
  function x() {
    return x = Object.assign || function(y) {
      for (var w = 1; w < arguments.length; w++) {
        var R = arguments[w];
        for (var O in R)
          Object.prototype.hasOwnProperty.call(R, O) && (y[O] = R[O]);
      }
      return y;
    }, x.apply(this, arguments);
  }
  function T(y, w) {
    if (y == null)
      return {};
    var R = W(y, w), O, P;
    if (Object.getOwnPropertySymbols) {
      var L = Object.getOwnPropertySymbols(y);
      for (P = 0; P < L.length; P++)
        O = L[P], !(w.indexOf(O) >= 0) && Object.prototype.propertyIsEnumerable.call(y, O) && (R[O] = y[O]);
    }
    return R;
  }
  function W(y, w) {
    if (y == null)
      return {};
    var R = {}, O = Object.keys(y), P, L;
    for (L = 0; L < O.length; L++)
      P = O[L], !(w.indexOf(P) >= 0) && (R[P] = y[P]);
    return R;
  }
  function S(y, w) {
    var R = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(y);
      w && (O = O.filter(function(P) {
        return Object.getOwnPropertyDescriptor(y, P).enumerable;
      })), R.push.apply(R, O);
    }
    return R;
  }
  function C(y) {
    for (var w = 1; w < arguments.length; w++) {
      var R = arguments[w] != null ? arguments[w] : {};
      w % 2 ? S(Object(R), !0).forEach(function(O) {
        he(y, O, R[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(R)) : S(Object(R)).forEach(function(O) {
        Object.defineProperty(y, O, Object.getOwnPropertyDescriptor(R, O));
      });
    }
    return y;
  }
  function F(y, w) {
    return B(y) || U(y, w) || I(y, w) || H();
  }
  function H() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function I(y, w) {
    if (y) {
      if (typeof y == "string")
        return Q(y, w);
      var R = Object.prototype.toString.call(y).slice(8, -1);
      if (R === "Object" && y.constructor && (R = y.constructor.name), R === "Map" || R === "Set")
        return Array.from(y);
      if (R === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))
        return Q(y, w);
    }
  }
  function Q(y, w) {
    (w == null || w > y.length) && (w = y.length);
    for (var R = 0, O = new Array(w); R < w; R++)
      O[R] = y[R];
    return O;
  }
  function U(y, w) {
    var R = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (R != null) {
      var O = [], P = !0, L = !1, j, J;
      try {
        for (R = R.call(y); !(P = (j = R.next()).done) && (O.push(j.value), !(w && O.length === w)); P = !0)
          ;
      } catch (X) {
        L = !0, J = X;
      } finally {
        try {
          !P && R.return != null && R.return();
        } finally {
          if (L)
            throw J;
        }
      }
      return O;
    }
  }
  function B(y) {
    if (Array.isArray(y))
      return y;
  }
  function q(y, w) {
    if (!(y instanceof w))
      throw new TypeError("Cannot call a class as a function");
  }
  function $(y, w) {
    for (var R = 0; R < w.length; R++) {
      var O = w[R];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(y, O.key, O);
    }
  }
  function A(y, w, R) {
    return w && $(y.prototype, w), R && $(y, R), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function k(y, w) {
    if (typeof w != "function" && w !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(w && w.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), w && Y(y, w);
  }
  function Y(y, w) {
    return Y = Object.setPrototypeOf || function(O, P) {
      return O.__proto__ = P, O;
    }, Y(y, w);
  }
  function se(y) {
    var w = ae();
    return function() {
      var O = Re(y), P;
      if (w) {
        var L = Re(this).constructor;
        P = Reflect.construct(O, arguments, L);
      } else
        P = O.apply(this, arguments);
      return ee(this, P);
    };
  }
  function ee(y, w) {
    if (w && (i(w) === "object" || typeof w == "function"))
      return w;
    if (w !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return te(y);
  }
  function te(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function ae() {
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
  function Re(y) {
    return Re = Object.setPrototypeOf ? Object.getPrototypeOf : function(R) {
      return R.__proto__ || Object.getPrototypeOf(R);
    }, Re(y);
  }
  function he(y, w, R) {
    return w in y ? Object.defineProperty(y, w, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : y[w] = R, y;
  }
  var Ne = /* @__PURE__ */ function(y) {
    k(R, y);
    var w = se(R);
    function R(O) {
      var P;
      return q(this, R), P = w.call(this, O), he(te(P), "onDragStart", function(L, j) {
        (0, p.default)("Draggable: onDragStart: %j", j);
        var J = P.props.onStart(L, (0, a.createDraggableData)(te(P), j));
        if (J === !1)
          return !1;
        P.setState({
          dragging: !0,
          dragged: !0
        });
      }), he(te(P), "onDrag", function(L, j) {
        if (!P.state.dragging)
          return !1;
        (0, p.default)("Draggable: onDrag: %j", j);
        var J = (0, a.createDraggableData)(te(P), j), X = {
          x: J.x,
          y: J.y
        };
        if (P.props.bounds) {
          var Be = X.x, we = X.y;
          X.x += P.state.slackX, X.y += P.state.slackY;
          var Se = (0, a.getBoundPosition)(te(P), X.x, X.y), Pe = F(Se, 2), Ue = Pe[0], Ke = Pe[1];
          X.x = Ue, X.y = Ke, X.slackX = P.state.slackX + (Be - X.x), X.slackY = P.state.slackY + (we - X.y), J.x = X.x, J.y = X.y, J.deltaX = X.x - P.state.x, J.deltaY = X.y - P.state.y;
        }
        var qe = P.props.onDrag(L, J);
        if (qe === !1)
          return !1;
        P.setState(X);
      }), he(te(P), "onDragStop", function(L, j) {
        if (!P.state.dragging)
          return !1;
        var J = P.props.onStop(L, (0, a.createDraggableData)(te(P), j));
        if (J === !1)
          return !1;
        (0, p.default)("Draggable: onDragStop: %j", j);
        var X = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, Be = !!P.props.position;
        if (Be) {
          var we = P.props.position, Se = we.x, Pe = we.y;
          X.x = Se, X.y = Pe;
        }
        P.setState(X);
      }), P.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: O.position ? O.position.x : O.defaultPosition.x,
        y: O.position ? O.position.y : O.defaultPosition.y,
        prevPropsPosition: C({}, O.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, O.position && !(O.onDrag || O.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), P;
    }
    return A(R, [{
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
        var P, L, j;
        return (P = (L = this.props) === null || L === void 0 || (j = L.nodeRef) === null || j === void 0 ? void 0 : j.current) !== null && P !== void 0 ? P : s.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var P, L = this.props;
        L.axis, L.bounds;
        var j = L.children, J = L.defaultPosition, X = L.defaultClassName, Be = L.defaultClassNameDragging, we = L.defaultClassNameDragged, Se = L.position, Pe = L.positionOffset;
        L.scale;
        var Ue = T(L, h), Ke = {}, qe = null, Rt = !!Se, u = !Rt || this.state.dragging, f = Se || J, g = {
          // Set left if horizontal drag is enabled
          x: (0, a.canDragX)(this) && u ? this.state.x : f.x,
          // Set top if vertical drag is enabled
          y: (0, a.canDragY)(this) && u ? this.state.y : f.y
        };
        this.state.isElementSVG ? qe = (0, o.createSVGTransform)(g, Pe) : Ke = (0, o.createCSSTransform)(g, Pe);
        var E = (0, n.default)(j.props.className || "", X, (P = {}, he(P, Be, this.state.dragging), he(P, we, this.state.dragged), P));
        return /* @__PURE__ */ r.createElement(c.default, x({}, Ue, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only(j), {
          className: E,
          style: C(C({}, j.props.style), Ke),
          transform: qe
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(P, L) {
          var j = P.position, J = L.prevPropsPosition;
          return j && (!J || j.x !== J.x || j.y !== J.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
            position: j,
            prevPropsPosition: J
          }), {
            x: j.x,
            y: j.y,
            prevPropsPosition: C({}, j)
          }) : null;
        }
      )
    }]), R;
  }(r.Component);
  e.default = Ne, he(Ne, "displayName", "Draggable"), he(Ne, "propTypes", C(C({}, c.default.propTypes), {}, {
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
    axis: t.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: t.default.oneOfType([t.default.shape({
      left: t.default.number,
      right: t.default.number,
      top: t.default.number,
      bottom: t.default.number
    }), t.default.string, t.default.oneOf([!1])]),
    defaultClassName: t.default.string,
    defaultClassNameDragging: t.default.string,
    defaultClassNameDragged: t.default.string,
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
    defaultPosition: t.default.shape({
      x: t.default.number,
      y: t.default.number
    }),
    positionOffset: t.default.shape({
      x: t.default.oneOfType([t.default.number, t.default.string]),
      y: t.default.oneOfType([t.default.number, t.default.string])
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
    position: t.default.shape({
      x: t.default.number,
      y: t.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  })), he(Ne, "defaultProps", C(C({}, c.default.defaultProps), {}, {
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
})(Ni);
var qi = Ni, $i = qi.default, lo = qi.DraggableCore;
Xt.exports = $i;
Xt.exports.default = $i;
Xt.exports.DraggableCore = lo;
var co = Xt.exports;
const fo = /* @__PURE__ */ li(co);
var ho = globalThis && globalThis.__extends || function() {
  var e = function(i, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
      t.__proto__ = s;
    } || function(t, s) {
      for (var n in s)
        Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
    }, e(i, r);
  };
  return function(i, r) {
    e(i, r);
    function t() {
      this.constructor = i;
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), qt = globalThis && globalThis.__assign || function() {
  return qt = Object.assign || function(e) {
    for (var i, r = 1, t = arguments.length; r < t; r++) {
      i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, qt.apply(this, arguments);
}, po = {
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
}, go = (
  /** @class */
  function(e) {
    ho(i, e);
    function i() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.onMouseDown = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r.onTouchStart = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r;
    }
    return i.prototype.render = function() {
      return z.createElement("div", { className: this.props.className || "", style: qt(qt({ position: "absolute", userSelect: "none" }, po[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, i;
  }(z.PureComponent)
), Pr = { exports: {} };
function yo(e, i) {
  var r = i && i.cache ? i.cache : xo, t = i && i.serializer ? i.serializer : So, s = i && i.strategy ? i.strategy : mo;
  return s(e, {
    cache: r,
    serializer: t
  });
}
function vo(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Yi(e, i, r, t) {
  var s = vo(t) ? t : r(t), n = i.get(s);
  return typeof n > "u" && (n = e.call(this, t), i.set(s, n)), n;
}
function Xi(e, i, r) {
  var t = Array.prototype.slice.call(arguments, 3), s = r(t), n = i.get(s);
  return typeof n > "u" && (n = e.apply(this, t), i.set(s, n)), n;
}
function Er(e, i, r, t, s) {
  return r.bind(
    i,
    e,
    t,
    s
  );
}
function mo(e, i) {
  var r = e.length === 1 ? Yi : Xi;
  return Er(
    e,
    this,
    r,
    i.cache.create(),
    i.serializer
  );
}
function bo(e, i) {
  var r = Xi;
  return Er(
    e,
    this,
    r,
    i.cache.create(),
    i.serializer
  );
}
function wo(e, i) {
  var r = Yi;
  return Er(
    e,
    this,
    r,
    i.cache.create(),
    i.serializer
  );
}
function So() {
  return JSON.stringify(arguments);
}
function Jt() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Jt.prototype.has = function(e) {
  return e in this.cache;
};
Jt.prototype.get = function(e) {
  return this.cache[e];
};
Jt.prototype.set = function(e, i) {
  this.cache[e] = i;
};
var xo = {
  create: function() {
    return new Jt();
  }
};
Pr.exports = yo;
Pr.exports.strategies = {
  variadic: bo,
  monadic: wo
};
var _o = Pr.exports;
const tt = /* @__PURE__ */ li(_o);
var Do = globalThis && globalThis.__extends || function() {
  var e = function(i, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
      t.__proto__ = s;
    } || function(t, s) {
      for (var n in s)
        Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
    }, e(i, r);
  };
  return function(i, r) {
    e(i, r);
    function t() {
      this.constructor = i;
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Fe = globalThis && globalThis.__assign || function() {
  return Fe = Object.assign || function(e) {
    for (var i, r = 1, t = arguments.length; r < t; r++) {
      i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, Fe.apply(this, arguments);
}, zo = {
  width: "auto",
  height: "auto"
}, Ct = tt(function(e, i, r) {
  return Math.max(Math.min(e, r), i);
}), ei = tt(function(e, i) {
  return Math.round(e / i) * i;
}), st = tt(function(e, i) {
  return new RegExp(e, "i").test(i);
}), At = function(e) {
  return !!(e.touches && e.touches.length);
}, Oo = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, ti = tt(function(e, i, r) {
  r === void 0 && (r = 0);
  var t = i.reduce(function(n, o, a) {
    return Math.abs(o - e) < Math.abs(i[n] - e) ? a : n;
  }, 0), s = Math.abs(i[t] - e);
  return r === 0 || s < r ? i[t] : e;
}), ce = tt(function(e, i) {
  return e.substr(e.length - i.length, i.length) === i;
}), ur = tt(function(e) {
  return e = e.toString(), e === "auto" || ce(e, "px") || ce(e, "%") || ce(e, "vh") || ce(e, "vw") || ce(e, "vmax") || ce(e, "vmin") ? e : e + "px";
}), Tt = function(e, i, r, t) {
  if (e && typeof e == "string") {
    if (ce(e, "px"))
      return Number(e.replace("px", ""));
    if (ce(e, "%")) {
      var s = Number(e.replace("%", "")) / 100;
      return i * s;
    }
    if (ce(e, "vw")) {
      var s = Number(e.replace("vw", "")) / 100;
      return r * s;
    }
    if (ce(e, "vh")) {
      var s = Number(e.replace("vh", "")) / 100;
      return t * s;
    }
  }
  return e;
}, Ro = tt(function(e, i, r, t, s, n, o) {
  return t = Tt(t, e.width, i, r), s = Tt(s, e.height, i, r), n = Tt(n, e.width, i, r), o = Tt(o, e.height, i, r), {
    maxWidth: typeof t > "u" ? void 0 : Number(t),
    maxHeight: typeof s > "u" ? void 0 : Number(s),
    minWidth: typeof n > "u" ? void 0 : Number(n),
    minHeight: typeof o > "u" ? void 0 : Number(o)
  };
}), Po = [
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
], ri = "__resizable_base__", Eo = (
  /** @class */
  function(e) {
    Do(i, e);
    function i(r) {
      var t = e.call(this, r) || this;
      return t.ratio = 1, t.resizable = null, t.parentLeft = 0, t.parentTop = 0, t.resizableLeft = 0, t.resizableRight = 0, t.resizableTop = 0, t.resizableBottom = 0, t.targetLeft = 0, t.targetTop = 0, t.appendBase = function() {
        if (!t.resizable || !t.window)
          return null;
        var s = t.parentNode;
        if (!s)
          return null;
        var n = t.window.document.createElement("div");
        return n.style.width = "100%", n.style.height = "100%", n.style.position = "absolute", n.style.transform = "scale(0, 0)", n.style.left = "0", n.style.flex = "0 0 100%", n.classList ? n.classList.add(ri) : n.className += ri, s.appendChild(n), n;
      }, t.removeBase = function(s) {
        var n = t.parentNode;
        n && n.removeChild(s);
      }, t.ref = function(s) {
        s && (t.resizable = s);
      }, t.state = {
        isResizing: !1,
        width: typeof (t.propsSize && t.propsSize.width) > "u" ? "auto" : t.propsSize && t.propsSize.width,
        height: typeof (t.propsSize && t.propsSize.height) > "u" ? "auto" : t.propsSize && t.propsSize.height,
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
      }, t.onResizeStart = t.onResizeStart.bind(t), t.onMouseMove = t.onMouseMove.bind(t), t.onMouseUp = t.onMouseUp.bind(t), t;
    }
    return Object.defineProperty(i.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || zo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "size", {
      get: function() {
        var r = 0, t = 0;
        if (this.resizable && this.window) {
          var s = this.resizable.offsetWidth, n = this.resizable.offsetHeight, o = this.resizable.style.position;
          o !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : s, t = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : n, this.resizable.style.position = o;
        }
        return { width: r, height: t };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "sizeStyle", {
      get: function() {
        var r = this, t = this.props.size, s = function(a) {
          if (typeof r.state[a] > "u" || r.state[a] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[a] && ce(r.propsSize[a].toString(), "%")) {
            if (ce(r.state[a].toString(), "%"))
              return r.state[a].toString();
            var l = r.getParentSize(), c = Number(r.state[a].toString().replace("px", "")), p = c / l[a] * 100;
            return p + "%";
          }
          return ur(r.state[a]);
        }, n = t && typeof t.width < "u" && !this.state.isResizing ? ur(t.width) : s("width"), o = t && typeof t.height < "u" && !this.state.isResizing ? ur(t.height) : s("height");
        return { width: n, height: o };
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var r = this.appendBase();
      if (!r)
        return { width: 0, height: 0 };
      var t = !1, s = this.parentNode.style.flexWrap;
      s !== "wrap" && (t = !0, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var n = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return t && (this.parentNode.style.flexWrap = s), this.removeBase(r), n;
    }, i.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, i.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, i.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var r = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0
        });
      }
    }, i.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, i.prototype.createSizeForCssProperty = function(r, t) {
      var s = this.propsSize && this.propsSize[t];
      return this.state[t] === "auto" && this.state.original[t] === r && (typeof s > "u" || s === "auto") ? "auto" : r;
    }, i.prototype.calculateNewMaxFromBoundary = function(r, t) {
      var s = this.props.boundsByDirection, n = this.state.direction, o = s && st("left", n), a = s && st("top", n), l, c;
      if (this.props.bounds === "parent") {
        var p = this.parentNode;
        p && (l = o ? this.resizableRight - this.parentLeft : p.offsetWidth + (this.parentLeft - this.resizableLeft), c = a ? this.resizableBottom - this.parentTop : p.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (l = o ? this.resizableRight : this.window.innerWidth - this.resizableLeft, c = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (l = o ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), c = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return l && Number.isFinite(l) && (r = r && r < l ? r : l), c && Number.isFinite(c) && (t = t && t < c ? t : c), { maxWidth: r, maxHeight: t };
    }, i.prototype.calculateNewSizeFromDirection = function(r, t) {
      var s = this.props.scale || 1, n = this.props.resizeRatio || 1, o = this.state, a = o.direction, l = o.original, c = this.props, p = c.lockAspectRatio, h = c.lockAspectRatioExtraHeight, d = c.lockAspectRatioExtraWidth, m = l.width, v = l.height, x = h || 0, T = d || 0;
      return st("right", a) && (m = l.width + (r - l.x) * n / s, p && (v = (m - T) / this.ratio + x)), st("left", a) && (m = l.width - (r - l.x) * n / s, p && (v = (m - T) / this.ratio + x)), st("bottom", a) && (v = l.height + (t - l.y) * n / s, p && (m = (v - x) * this.ratio + T)), st("top", a) && (v = l.height - (t - l.y) * n / s, p && (m = (v - x) * this.ratio + T)), { newWidth: m, newHeight: v };
    }, i.prototype.calculateNewSizeFromAspectRatio = function(r, t, s, n) {
      var o = this.props, a = o.lockAspectRatio, l = o.lockAspectRatioExtraHeight, c = o.lockAspectRatioExtraWidth, p = typeof n.width > "u" ? 10 : n.width, h = typeof s.width > "u" || s.width < 0 ? r : s.width, d = typeof n.height > "u" ? 10 : n.height, m = typeof s.height > "u" || s.height < 0 ? t : s.height, v = l || 0, x = c || 0;
      if (a) {
        var T = (d - v) * this.ratio + x, W = (m - v) * this.ratio + x, S = (p - x) / this.ratio + v, C = (h - x) / this.ratio + v, F = Math.max(p, T), H = Math.min(h, W), I = Math.max(d, S), Q = Math.min(m, C);
        r = Ct(r, F, H), t = Ct(t, I, Q);
      } else
        r = Ct(r, p, h), t = Ct(t, d, m);
      return { newWidth: r, newHeight: t };
    }, i.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var r = this.parentNode;
        if (r) {
          var t = r.getBoundingClientRect();
          this.parentLeft = t.left, this.parentTop = t.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var s = this.props.bounds.getBoundingClientRect();
        this.targetLeft = s.left, this.targetTop = s.top;
      }
      if (this.resizable) {
        var n = this.resizable.getBoundingClientRect(), o = n.left, a = n.top, l = n.right, c = n.bottom;
        this.resizableLeft = o, this.resizableRight = l, this.resizableTop = a, this.resizableBottom = c;
      }
    }, i.prototype.onResizeStart = function(r, t) {
      if (!(!this.resizable || !this.window)) {
        var s = 0, n = 0;
        if (r.nativeEvent && Oo(r.nativeEvent) ? (s = r.nativeEvent.clientX, n = r.nativeEvent.clientY) : r.nativeEvent && At(r.nativeEvent) && (s = r.nativeEvent.touches[0].clientX, n = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var o = this.props.onResizeStart(r, t, this.resizable);
          if (o === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var a, l = this.window.getComputedStyle(this.resizable);
        if (l.flexBasis !== "auto") {
          var c = this.parentNode;
          if (c) {
            var p = this.window.getComputedStyle(c).flexDirection;
            this.flexDir = p.startsWith("row") ? "row" : "column", a = l.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var h = {
          original: {
            x: s,
            y: n,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: Fe(Fe({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: t,
          flexBasis: a
        };
        this.setState(h);
      }
    }, i.prototype.onMouseMove = function(r) {
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && At(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var t = this.props, s = t.maxWidth, n = t.maxHeight, o = t.minWidth, a = t.minHeight, l = At(r) ? r.touches[0].clientX : r.clientX, c = At(r) ? r.touches[0].clientY : r.clientY, p = this.state, h = p.direction, d = p.original, m = p.width, v = p.height, x = this.getParentSize(), T = Ro(x, this.window.innerWidth, this.window.innerHeight, s, n, o, a);
        s = T.maxWidth, n = T.maxHeight, o = T.minWidth, a = T.minHeight;
        var W = this.calculateNewSizeFromDirection(l, c), S = W.newHeight, C = W.newWidth, F = this.calculateNewMaxFromBoundary(s, n);
        this.props.snap && this.props.snap.x && (C = ti(C, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (S = ti(S, this.props.snap.y, this.props.snapGap));
        var H = this.calculateNewSizeFromAspectRatio(C, S, { width: F.maxWidth, height: F.maxHeight }, { width: o, height: a });
        if (C = H.newWidth, S = H.newHeight, this.props.grid) {
          var I = ei(C, this.props.grid[0]), Q = ei(S, this.props.grid[1]), U = this.props.snapGap || 0;
          C = U === 0 || Math.abs(I - C) <= U ? I : C, S = U === 0 || Math.abs(Q - S) <= U ? Q : S;
        }
        var B = {
          width: C - d.width,
          height: S - d.height
        };
        if (m && typeof m == "string") {
          if (ce(m, "%")) {
            var q = C / x.width * 100;
            C = q + "%";
          } else if (ce(m, "vw")) {
            var $ = C / this.window.innerWidth * 100;
            C = $ + "vw";
          } else if (ce(m, "vh")) {
            var A = C / this.window.innerHeight * 100;
            C = A + "vh";
          }
        }
        if (v && typeof v == "string") {
          if (ce(v, "%")) {
            var q = S / x.height * 100;
            S = q + "%";
          } else if (ce(v, "vw")) {
            var $ = S / this.window.innerWidth * 100;
            S = $ + "vw";
          } else if (ce(v, "vh")) {
            var A = S / this.window.innerHeight * 100;
            S = A + "vh";
          }
        }
        var k = {
          width: this.createSizeForCssProperty(C, "width"),
          height: this.createSizeForCssProperty(S, "height")
        };
        this.flexDir === "row" ? k.flexBasis = k.width : this.flexDir === "column" && (k.flexBasis = k.height), this.setState(k), this.props.onResize && this.props.onResize(r, h, this.resizable, B);
      }
    }, i.prototype.onMouseUp = function(r) {
      var t = this.state, s = t.isResizing, n = t.direction, o = t.original;
      if (!(!s || !this.resizable)) {
        var a = {
          width: this.size.width - o.width,
          height: this.size.height - o.height
        };
        this.props.onResizeStop && this.props.onResizeStop(r, n, this.resizable, a), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: Fe(Fe({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, i.prototype.updateSize = function(r) {
      this.setState({ width: r.width, height: r.height });
    }, i.prototype.renderResizer = function() {
      var r = this, t = this.props, s = t.enable, n = t.handleStyles, o = t.handleClasses, a = t.handleWrapperStyle, l = t.handleWrapperClass, c = t.handleComponent;
      if (!s)
        return null;
      var p = Object.keys(s).map(function(h) {
        return s[h] !== !1 ? z.createElement(go, { key: h, direction: h, onResizeStart: r.onResizeStart, replaceStyles: n && n[h], className: o && o[h] }, c && c[h] ? c[h] : null) : null;
      });
      return z.createElement("div", { className: l, style: a }, p);
    }, i.prototype.render = function() {
      var r = this, t = Object.keys(this.props).reduce(function(o, a) {
        return Po.indexOf(a) !== -1 || (o[a] = r.props[a]), o;
      }, {}), s = Fe(Fe(Fe({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (s.flexBasis = this.state.flexBasis);
      var n = this.props.as || "div";
      return z.createElement(
        n,
        Fe({ ref: this.ref, style: s, className: this.props.className }, t),
        this.state.isResizing && z.createElement("div", { style: this.state.backgroundStyle }),
        this.props.children,
        this.renderResizer()
      );
    }, i.defaultProps = {
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
    }, i;
  }(z.PureComponent)
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
var yr = function(e, i) {
  return yr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var s in t)
      t.hasOwnProperty(s) && (r[s] = t[s]);
  }, yr(e, i);
};
function Mo(e, i) {
  yr(e, i);
  function r() {
    this.constructor = e;
  }
  e.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r());
}
var ne = function() {
  return ne = Object.assign || function(i) {
    for (var r, t = 1, s = arguments.length; t < s; t++) {
      r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }
    return i;
  }, ne.apply(this, arguments);
};
function Co(e, i) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && i.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++)
      i.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (r[t[s]] = e[t[s]]);
  return r;
}
var Ao = fo, To = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, No = function(e) {
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
}, la = (
  /** @class */
  function(e) {
    Mo(i, e);
    function i(r) {
      var t = e.call(this, r) || this;
      return t.resizingPosition = { x: 0, y: 0 }, t.offsetFromParent = { left: 0, top: 0 }, t.resizableElement = { current: null }, t.originalPosition = { x: 0, y: 0 }, t.refDraggable = function(s) {
        s && (t.draggable = s);
      }, t.refResizable = function(s) {
        s && (t.resizable = s, t.resizableElement.current = s.resizable);
      }, t.state = {
        resizing: !1,
        bounds: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        maxWidth: r.maxWidth,
        maxHeight: r.maxHeight
      }, t.onResizeStart = t.onResizeStart.bind(t), t.onResize = t.onResize.bind(t), t.onResizeStop = t.onResizeStop.bind(t), t.onDragStart = t.onDragStart.bind(t), t.onDrag = t.onDrag.bind(t), t.onDragStop = t.onDragStop.bind(t), t.getMaxSizesFromProps = t.getMaxSizesFromProps.bind(t), t;
    }
    return i.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var r = this.offsetFromParent, t = r.left, s = r.top, n = this.getDraggablePosition(), o = n.x, a = n.y;
      this.draggable.setState({
        x: o - t,
        y: a - s
      }), this.forceUpdate();
    }, i.prototype.getDraggablePosition = function() {
      var r = this.draggable.state, t = r.x, s = r.y;
      return { x: t, y: s };
    }, i.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, i.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, i.prototype.getMaxSizesFromProps = function() {
      var r = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, t = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: r, maxHeight: t };
    }, i.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, i.prototype.getOffsetHeight = function(r) {
      var t = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / t;
        case "body":
          return document.body.offsetHeight / t;
        default:
          return r.offsetHeight;
      }
    }, i.prototype.getOffsetWidth = function(r) {
      var t = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / t;
        case "body":
          return document.body.offsetWidth / t;
        default:
          return r.offsetWidth;
      }
    }, i.prototype.onDragStart = function(r, t) {
      this.props.onDragStart && this.props.onDragStart(r, t);
      var s = this.getDraggablePosition();
      if (this.originalPosition = s, !!this.props.bounds) {
        var n = this.getParent(), o = this.props.scale, a;
        if (this.props.bounds === "parent")
          a = n;
        else if (this.props.bounds === "body") {
          var l = n.getBoundingClientRect(), c = l.left, p = l.top, h = document.body.getBoundingClientRect(), d = -(c - n.offsetLeft * o - h.left) / o, m = -(p - n.offsetTop * o - h.top) / o, v = (document.body.offsetWidth - this.resizable.size.width * o) / o + d, x = (document.body.offsetHeight - this.resizable.size.height * o) / o + m;
          return this.setState({ bounds: { top: m, right: v, bottom: x, left: d } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var T = n.getBoundingClientRect(), W = T.left, S = T.top, C = -(W - n.offsetLeft * o) / o, F = -(S - n.offsetTop * o) / o, v = (window.innerWidth - this.resizable.size.width * o) / o + C, x = (window.innerHeight - this.resizable.size.height * o) / o + F;
          return this.setState({ bounds: { top: F, right: v, bottom: x, left: C } });
        } else
          typeof this.props.bounds == "string" ? a = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (a = this.props.bounds);
        if (!(!(a instanceof HTMLElement) || !(n instanceof HTMLElement))) {
          var H = a.getBoundingClientRect(), I = H.left, Q = H.top, U = n.getBoundingClientRect(), B = U.left, q = U.top, $ = (I - B) / o, A = Q - q;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var k = this.offsetFromParent;
            this.setState({
              bounds: {
                top: A - k.top,
                right: $ + (a.offsetWidth - this.resizable.size.width) - k.left / o,
                bottom: A + (a.offsetHeight - this.resizable.size.height) - k.top,
                left: $ - k.left / o
              }
            });
          }
        }
      }
    }, i.prototype.onDrag = function(r, t) {
      if (this.props.onDrag) {
        var s = this.offsetFromParent, n = s.left, o = s.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, ne(ne({}, t), { x: t.x - n, y: t.y - o }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, ne(ne({}, t), { x: t.x + n, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, ne(ne({}, t), { x: this.originalPosition.x + n, y: t.y + o, deltaX: 0 }));
      }
    }, i.prototype.onDragStop = function(r, t) {
      if (this.props.onDragStop) {
        var s = this.offsetFromParent, n = s.left, o = s.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, ne(ne({}, t), { x: t.x + n, y: t.y + o }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, ne(ne({}, t), { x: t.x + n, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, ne(ne({}, t), { x: this.originalPosition.x + n, y: t.y + o, deltaX: 0 }));
      }
    }, i.prototype.onResizeStart = function(r, t, s) {
      r.stopPropagation(), this.setState({
        resizing: !0
      });
      var n = this.props.scale, o = this.offsetFromParent, a = this.getDraggablePosition();
      if (this.resizingPosition = { x: a.x + o.left, y: a.y + o.top }, this.originalPosition = a, this.props.bounds) {
        var l = this.getParent(), c = void 0;
        this.props.bounds === "parent" ? c = l : this.props.bounds === "body" ? c = document.body : this.props.bounds === "window" ? c = window : typeof this.props.bounds == "string" ? c = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (c = this.props.bounds);
        var p = this.getSelfElement();
        if (p instanceof Element && (c instanceof HTMLElement || c === window) && l instanceof HTMLElement) {
          var h = this.getMaxSizesFromProps(), d = h.maxWidth, m = h.maxHeight, v = this.getParentSize();
          if (d && typeof d == "string")
            if (d.endsWith("%")) {
              var x = Number(d.replace("%", "")) / 100;
              d = v.width * x;
            } else
              d.endsWith("px") && (d = Number(d.replace("px", "")));
          if (m && typeof m == "string")
            if (m.endsWith("%")) {
              var x = Number(m.replace("%", "")) / 100;
              m = v.width * x;
            } else
              m.endsWith("px") && (m = Number(m.replace("px", "")));
          var T = p.getBoundingClientRect(), W = T.left, S = T.top, C = this.props.bounds === "window" ? { left: 0, top: 0 } : c.getBoundingClientRect(), F = C.left, H = C.top, I = this.getOffsetWidth(c), Q = this.getOffsetHeight(c), U = t.toLowerCase().endsWith("left"), B = t.toLowerCase().endsWith("right"), q = t.startsWith("top"), $ = t.startsWith("bottom");
          if ((U || q) && this.resizable) {
            var A = (W - F) / n + this.resizable.size.width;
            this.setState({ maxWidth: A > Number(d) ? d : A });
          }
          if (B || this.props.lockAspectRatio && !U && !q) {
            var A = I + (F - W) / n;
            this.setState({ maxWidth: A > Number(d) ? d : A });
          }
          if ((q || U) && this.resizable) {
            var A = (S - H) / n + this.resizable.size.height;
            this.setState({
              maxHeight: A > Number(m) ? m : A
            });
          }
          if ($ || this.props.lockAspectRatio && !q && !U) {
            var A = Q + (H - S) / n;
            this.setState({
              maxHeight: A > Number(m) ? m : A
            });
          }
        }
      } else
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      this.props.onResizeStart && this.props.onResizeStart(r, t, s);
    }, i.prototype.onResize = function(r, t, s, n) {
      var o = { x: this.originalPosition.x, y: this.originalPosition.y }, a = -n.width, l = -n.height, c = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      c.indexOf(t) !== -1 && (t === "bottomLeft" ? o.x += a : (t === "topRight" || (o.x += a), o.y += l)), (o.x !== this.draggable.state.x || o.y !== this.draggable.state.y) && this.draggable.setState(o), this.updateOffsetFromParent();
      var p = this.offsetFromParent, h = this.getDraggablePosition().x + p.left, d = this.getDraggablePosition().y + p.top;
      this.resizingPosition = { x: h, y: d }, this.props.onResize && this.props.onResize(r, t, s, n, {
        x: h,
        y: d
      });
    }, i.prototype.onResizeStop = function(r, t, s, n) {
      this.setState({
        resizing: !1
      });
      var o = this.getMaxSizesFromProps(), a = o.maxWidth, l = o.maxHeight;
      this.setState({ maxWidth: a, maxHeight: l }), this.props.onResizeStop && this.props.onResizeStop(r, t, s, n, this.resizingPosition);
    }, i.prototype.updateSize = function(r) {
      this.resizable && this.resizable.updateSize({ width: r.width, height: r.height });
    }, i.prototype.updatePosition = function(r) {
      this.draggable.setState(r);
    }, i.prototype.updateOffsetFromParent = function() {
      var r = this.props.scale, t = this.getParent(), s = this.getSelfElement();
      if (!t || s === null)
        return {
          top: 0,
          left: 0
        };
      var n = t.getBoundingClientRect(), o = n.left, a = n.top, l = s.getBoundingClientRect(), c = this.getDraggablePosition(), p = t.scrollLeft, h = t.scrollTop;
      this.offsetFromParent = {
        left: l.left - o + p - c.x * r,
        top: l.top - a + h - c.y * r
      };
    }, i.prototype.render = function() {
      var r = this.props, t = r.disableDragging, s = r.style, n = r.dragHandleClassName, o = r.position, a = r.onMouseDown, l = r.onMouseUp, c = r.dragAxis, p = r.dragGrid, h = r.bounds, d = r.enableUserSelectHack, m = r.cancel, v = r.children;
      r.onResizeStart, r.onResize, r.onResizeStop, r.onDragStart, r.onDrag, r.onDragStop;
      var x = r.resizeHandleStyles, T = r.resizeHandleClasses, W = r.resizeHandleComponent, S = r.enableResizing, C = r.resizeGrid, F = r.resizeHandleWrapperClass, H = r.resizeHandleWrapperStyle, I = r.scale, Q = r.allowAnyClick, U = Co(r, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), B = this.props.default ? ne({}, this.props.default) : void 0;
      delete U.default;
      var q = t || n ? { cursor: "auto" } : { cursor: "move" }, $ = ne(ne(ne({}, To), q), s), A = this.offsetFromParent, k = A.left, Y = A.top, se;
      o && (se = {
        x: o.x - k,
        y: o.y - Y
      });
      var ee = this.state.resizing ? void 0 : se, te = this.state.resizing ? "both" : c;
      return z.createElement(
        Ao,
        { ref: this.refDraggable, handle: n ? ".".concat(n) : void 0, defaultPosition: B, onMouseDown: a, onMouseUp: l, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: te, disabled: t, grid: p, bounds: h ? this.state.bounds : void 0, position: ee, enableUserSelectHack: d, cancel: m, scale: I, allowAnyClick: Q, nodeRef: this.resizableElement },
        z.createElement(Eo, ne({}, U, { ref: this.refResizable, defaultSize: B, size: this.props.size, enable: typeof S == "boolean" ? No(S) : S, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: $, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: C, handleWrapperClass: F, handleWrapperStyle: H, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: x, handleClasses: T, handleComponent: W, scale: this.props.scale }), v)
      );
    }, i.defaultProps = {
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
    }, i;
  }(z.PureComponent)
), Mr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = Ti;
  e.definition = {
    prefix: i.prefix,
    iconName: i.iconName,
    icon: [
      i.width,
      i.height,
      i.aliases,
      i.unicode,
      i.svgPathData
    ]
  }, e.faTimes = e.definition, e.prefix = i.prefix, e.iconName = i.iconName, e.width = i.width, e.height = i.height, e.ligatures = i.aliases, e.unicode = i.unicode, e.svgPathData = i.svgPathData, e.aliases = i.aliases;
})(Mr);
const ko = [{
  pattern: /^[\p{So}\p{Pd}\p{Po}]\s*/gu,
  replace: ""
}, {
  pattern: /^\p{C}/gu,
  replace: ""
}, {
  pattern: new RegExp("(?<= |^|>|[^-!\\p{L}])-(?= |$|[^-])", "giu"),
  replace: "—"
}, {
  // Open quote
  pattern: /["»](?=\S)/g,
  replace: "«"
}, {
  // Close quote
  pattern: new RegExp('(?<=\\S)["«]', "g"),
  replace: "»"
}, {
  pattern: /^\s+/g,
  replace: "",
  onBlur: !0
}, {
  pattern: /^\p{Ll}/u,
  replace: (e) => e.toUpperCase()
}, {
  pattern: /[ ]+/gm,
  replace: " ",
  onBlur: !0
}, {
  pattern: /\s([!?.:;,])/g,
  replace: "$1"
}, {
  pattern: /,(\w)/g,
  replace: ", $1"
}, {
  pattern: /[\s,.;:]+$/g,
  replace: "",
  onBlur: !0
}], ii = (e, i = !1) => {
  let r = e.selectionStart || 0, t = e.selectionEnd || 0;
  const s = e.selectionDirection, n = ko.filter((o) => i ? !0 : !o.onBlur || !1).reduce((o, a) => {
    const l = o.replace(a.pattern, a.replace), c = l.length - o.length;
    return r += c, t += c, l;
  }, e.value);
  return setTimeout(() => {
    e.setSelectionRange(r, t, s || "none");
  }, 0), n;
}, Fo = z.forwardRef(({
  placeholder: e = "Введите",
  ...i
}, r) => /* @__PURE__ */ M("input", { ref: r, placeholder: e, ...i })), Lo = ({
  label: e,
  helperText: i,
  className: r,
  inputWrapRef: t,
  onBlur: s,
  onFocus: n,
  error: o,
  afterItems: a,
  useTypograf: l = !0,
  disabled: c,
  isLoading: p,
  inputComponent: h = Fo,
  ...d
}, m) => {
  const [v, x] = K.useState(!1), {
    getRootProps: T,
    getInputProps: W
  } = Ds({
    error: !!o,
    onBlur: s,
    onFocus: n,
    disabled: c,
    inputRef: m,
    ...d
  }), {
    onBlur: S,
    onFocus: C,
    ...F
  } = W();
  F.value = F.value || "";
  const H = z.useCallback((U) => {
    c || (x(!0), C == null || C(U));
  }, [c, x, C]), I = z.useCallback((U) => {
    var B;
    if (l) {
      const q = ii(U.target, !0);
      q !== U.target.value && (U.target.value = q, (B = F.onChange) == null || B.call(F, q));
    }
    x(!1), S == null || S(U);
  }, [x, S]);
  let Q = /* @__PURE__ */ be("div", { className: r, ref: t, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, o ? [{
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
  } : !c && {
    ":hover": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(114 117 191 / var(--tw-border-opacity))"
    }
  }], children: [
    p && /* @__PURE__ */ be("div", { css: {
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
      /* @__PURE__ */ M(je, { icon: ai.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ M(h, { css: [{
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
    }, o && {
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        color: "rgb(239 68 68 / var(--tw-placeholder-opacity))"
      }
    }, c && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }], onFocus: H, onBlur: I, onInput: (U) => {
      l && (U.currentTarget.value = ii(U.currentTarget));
    }, ...d, ...F, type: p ? "hidden" : d.type || "text" }),
    a && !c && /* @__PURE__ */ M("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: a })
  ] });
  return e && (Q = /* @__PURE__ */ M(Yt, { label: e, error: o, helperText: i, ...T(), children: Q })), Q;
}, Ot = z.forwardRef(Lo), Wo = ({
  getTagProps: e,
  optionRender: i,
  getOptionLabel: r,
  items: t,
  isLoading: s,
  valueCount: n
}) => s ? /* @__PURE__ */ M("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: Array.from({
  length: n
}).map((o, a) => /* @__PURE__ */ M("div", { css: [{
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
}, mr`
              width: ${Math.round(Math.random() * 5) * 30 + 60}px;
              height: 30px;
            `] }, a)) }) : t && (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ M("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: t.map((o, a) => {
  const {
    onDelete: l,
    key: c,
    ...p
  } = e({
    index: a
  });
  return /* @__PURE__ */ be("div", { ...p, css: {
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
    /* @__PURE__ */ M("span", { children: i ? i(o) : r(o) }),
    /* @__PURE__ */ M("button", { onClick: l, children: /* @__PURE__ */ M(je, { icon: Mr.faTimes, css: {
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    } }) })
  ] }, c);
}) }), Qi = "id", Ho = ({
  text: e = "Загрузка"
}) => {
  const [i, r] = z.useState("");
  return z.useEffect(() => {
    const t = setInterval(() => {
      r((s) => s.length < 3 ? s + "." : "");
    }, 300);
    return () => clearInterval(t);
  }, []), /* @__PURE__ */ be("span", { css: {
    "@keyframes pulse": {
      "50%": {
        opacity: ".5"
      }
    },
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  }, children: [
    e,
    i
  ] });
}, Bo = ({
  className: e,
  isLoading: i = !1,
  inputLoading: r = !1,
  valueLoading: t = !1,
  idField: s = Qi,
  displayField: n,
  options: o,
  multiple: a,
  open: l = !1,
  label: c,
  helperText: p,
  error: h,
  onOpen: d,
  onClose: m,
  optionRender: v,
  onChange: x,
  onInputChange: T,
  onSelect: W,
  disabled: S,
  placeholder: C = "Выберите",
  value: F,
  allowClear: H = !0,
  autoComplete: I = !0,
  autoSelect: Q = !1,
  afterItems: U,
  popupAdditionalOptionsRenderer: B,
  tagListPosition: q = "top",
  tagListRenderer: $,
  ...A
}, k) => {
  const Y = z.useCallback((u) => n && n in u ? u[n] : JSON.stringify(u), [n]), [se, ee] = z.useState(l);
  z.useEffect(() => {
    ee(l);
  }, [l]);
  const te = z.useMemo(() => a ? (F == null ? void 0 : F.map((u) => o.find((f) => f[s] == u)).filter((u) => !!u)) || [] : o.find((u) => u[s] == F) || null, [F, o]), {
    value: ae,
    getRootProps: Re,
    getInputProps: he,
    getListboxProps: Ne,
    getOptionProps: y,
    groupedOptions: w,
    getClearProps: R,
    setAnchorEl: O,
    anchorEl: P,
    popupOpen: L,
    getTagProps: j
  } = zs({
    options: o,
    autoComplete: I,
    autoSelect: Q,
    multiple: a,
    open: se,
    value: te,
    getOptionLabel: Y,
    isOptionEqualToValue: (u, f) => s ? u[s] === f[s] : u === f,
    onInputChange: T,
    onOpen: (u) => {
      ee(!0), d == null || d(u);
    },
    onClose: (u, f) => {
      ee(!1), m == null || m(u, f);
    },
    clearOnBlur: !1,
    disabled: S,
    unstable_classNamePrefix: "c",
    onChange: (u, f) => {
      x && (Array.isArray(f) ? x(f.map((g) => g[s])) : x(f && typeof f == "object" ? f[s] : null)), W == null || W(f);
    }
  }), J = z.useMemo(() => B ? B({
    closePopup: () => ee(!1)
  }) : null, [B, ee]), X = i ? /* @__PURE__ */ M("div", { css: {
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
  }, children: /* @__PURE__ */ M(Ho, {}) }) : /* @__PURE__ */ M("ul", { css: {
    zIndex: "20",
    width: "100%"
  }, ...Ne(), children: P && w.length > 0 ? /* @__PURE__ */ be(gt, { children: [
    w.map((u, f) => /* @__PURE__ */ M(K.Fragment, { children: "group" in u ? /* @__PURE__ */ M(gt, {}) : /* @__PURE__ */ M("li", { css: [{
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
    }, mr`
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
      option: u,
      index: f
    }), children: v ? v(u) : Y(u) }) }, s in u ? u[s] : f)),
    J
  ] }) : J }), Be = z.useMemo(() => a ? ae && ae.length > 0 : !!ae, [ae, a]), {
    onBlur: we,
    onChange: Se,
    ref: Pe,
    ...Ue
  } = he(), Ke = hi(k, Pe), qe = z.useMemo(() => a ? $ ? $({
    items: ae,
    isLoading: t,
    onDelete: (u) => {
      x == null || x(ae.filter((f) => f[s] !== u[s]).map((f) => f[s]));
    },
    valueCount: (F == null ? void 0 : F.length) || 0
  }) : /* @__PURE__ */ M(Wo, { items: ae, optionRender: v, getOptionLabel: Y, getTagProps: j, isLoading: t, valueCount: F == null ? void 0 : F.length }) : null, [ae, $]), Rt = /* @__PURE__ */ be(gt, { children: [
    q === "top" && qe,
    /* @__PURE__ */ M(Ot, { ...A, error: h, ...Ue, ref: Ke, inputWrapRef: O, placeholder: C, isLoading: r, useTypograf: !1, onChange: Se, onBlur: (u) => {
      we == null || we(u), a && (Se == null || Se({
        ...u,
        target: {
          ...u.target,
          value: ""
        }
      }));
    }, afterItems: !S && [U && /* @__PURE__ */ M(K.Fragment, { children: U }, "after-items"), Be && H && !a && /* @__PURE__ */ M("button", { ...R(), onMouseDown: (u) => {
      u.preventDefault(), u.stopPropagation();
    }, children: /* @__PURE__ */ M(je, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: Mr.faTimes }) }, "clear"), /* @__PURE__ */ M("button", { onClick: (u) => {
      u.preventDefault(), u.stopPropagation(), ee((f) => !f);
    }, children: /* @__PURE__ */ M(je, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, h && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: vs.faCaretDown }) }, "arrow")] }),
    P && /* @__PURE__ */ M(pi, { open: L, anchorEl: P, children: /* @__PURE__ */ M("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: P.offsetWidth
    }], children: X }) })
  ] });
  return /* @__PURE__ */ be(gt, { children: [
    /* @__PURE__ */ M(Yt, { label: c, error: h, helperText: p, className: e, ...Re(), children: Rt }),
    q === "bottom" && qe
  ] });
}, Gi = z.forwardRef(Bo), Vo = (e, i) => {
  const [r, t] = z.useState(!1);
  return /* @__PURE__ */ M(Ps, { ref: i, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ M(Os, { position: "end", children: /* @__PURE__ */ M(Rs, { size: "small", edge: "end", onClick: () => t((s) => !s), children: /* @__PURE__ */ M(je, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, mr`
                  width: 18px;
                `], icon: r ? ms.faEyeSlash : Cs.faEye }) }) })
  }, ...e });
};
z.forwardRef(Vo);
const vr = (e) => Array.isArray(e) ? e.length === 0 : !e, Io = ({
  dictionary: e,
  open: i = !1,
  value: r,
  filterOptions: t,
  ...s
}, n) => {
  const [o, a] = z.useState(i), l = bs(e, {
    enabled: o || !!r
  });
  z.useEffect(() => {
    a(i);
  }, [i]);
  const c = z.useMemo(() => t && l.data ? t(l.data) : l.data, [l.data, t]);
  return /* @__PURE__ */ M(
    Gi,
    {
      displayField: "name",
      ...s,
      ref: n,
      open: o,
      value: r,
      isLoading: l.isLoading,
      onOpen: () => {
        a(!0);
      },
      onClose: () => {
        a(!1);
      },
      options: c || [],
      useTypograf: !1,
      inputLoading: l.isLoading && !vr(r),
      disabled: l.isLoading && !vr(r) || s.disabled
    }
  );
}, ca = z.forwardRef(Io), jo = ({
  error: e,
  label: i,
  open: r,
  className: t,
  onFocus: s,
  onBlur: n,
  onClick: o,
  value: a,
  onChange: l,
  ...c
}, p) => {
  const [h, d] = z.useState(null), [m, v] = z.useState(!1), [x, T] = z.useState(!1);
  z.useEffect(() => {
    r !== void 0 && v(r);
  }, [r]);
  const W = z.useCallback((I) => {
    T(!0), v(!0), s == null || s(I);
  }, [s, v]), S = z.useCallback((I) => {
    T(!1), n == null || n(I);
  }, [s, v]), C = z.useCallback((I) => {
    d(I);
  }, [d]), F = z.useMemo(() => a ? Pt(a, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]).toDate() : null, [a]), H = z.useMemo(() => F ? Pt(F).format("DD.MM.YYYY") : "", [F]);
  return /* @__PURE__ */ M(Es, { onClickAway: () => v(!1), children: /* @__PURE__ */ be(Yt, { className: t, label: i, error: e, children: [
    /* @__PURE__ */ M(Ot, { ...c, inputWrapRef: C, ref: p, onFocus: W, onBlur: S, useTypograf: !1, value: H, onChange: (I) => {
      I.target.value ? l == null || l(Pt(I.target.value, "DD.MM.YYYY").format("YYYY-MM-DD HH:mm:ss")) : l == null || l(void 0);
    }, onMouseDown: (I) => {
      x && v(!m), o == null || o(I);
    }, error: e }),
    h && /* @__PURE__ */ M(pi, { open: m, anchorEl: h, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: h
      }
    }], children: /* @__PURE__ */ M("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ M(os, { value: F, onChange: (I) => {
      l == null || l(Pt(I).format("YYYY-MM-DD HH:mm:ss")), v(!1);
    } }) }) })
  ] }) });
}, fa = z.forwardRef(jo), Uo = ({
  multiple: e,
  value: i,
  url: r,
  params: t,
  idField: s = Qi,
  onInputChange: n,
  filters: o,
  open: a = !1,
  extraOptionsRenderer: l,
  ...c
}, p) => {
  const [h, d] = z.useState(""), [m, v] = z.useState(a), x = js(h, 500), T = Is(r, s), {
    records: W,
    isLoading: S
  } = Vs({
    idField: s,
    value: (vr(i) ? [] : e ? i : [i]) || [],
    url: r,
    params: t
  });
  z.useEffect(() => {
    v(a);
  }, [a]);
  const C = z.useMemo(() => ({
    ...t,
    ...o && o.length > 0 && {
      extFilters: JSON.stringify(o)
    },
    ...x ? {
      query: x
    } : void 0
  }), [x, t, o]), F = h.length > 0 || m || !1, H = ws(r, {
    enabled: F,
    params: C,
    placeholderData: as,
    staleTime: 1e3 * 60
  }), I = z.useMemo(() => {
    var B;
    return pt.uniqBy([...W, ...((B = H.data) == null ? void 0 : B.data) || []], s);
  }, [W, H.data]), Q = !e && S, U = l ? (B) => l({
    ...B,
    search: h,
    searchIsLoading: H.isLoading
  }) : void 0;
  return /* @__PURE__ */ M(gt, { children: /* @__PURE__ */ M(Gi, { ref: p, multiple: e, value: i, ...c, disabled: Q || c.disabled, inputLoading: Q, options: I, idField: s, onOpen: () => v(!0), onClose: () => v(!1), isLoading: H.isLoading || S, valueLoading: S, popupAdditionalOptionsRenderer: U, open: m, afterItems: [(H.isLoading || H.isFetching || e && S) && /* @__PURE__ */ M("div", { children: /* @__PURE__ */ M(je, { icon: ai.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onSelect: (B) => {
    var q;
    e ? B == null || B.map(($) => {
      T($);
    }) : T(B), (q = c.onSelect) == null || q.call(c, B);
  }, onInputChange: (B, q, $) => {
    $ === "input" && d(q), $ === "reset" && h !== "" && d(""), n == null || n(B, q, $);
  } }) });
}, da = z.forwardRef(Uo), qo = ({
  unit: e,
  error: i,
  onChange: r,
  allowFloat: t = !0,
  value: s,
  ...n
}, o) => {
  const [a, l] = z.useState(s), [c, p] = z.useState(null);
  z.useEffect(() => {
    l(s);
  }, [s]);
  const h = hi(o, p);
  return /* @__PURE__ */ M(Ot, { ...n, ref: h, error: i, value: a, useTypograf: !1, onChange: (d) => {
    const m = Number(d.target.value);
    if (!isNaN(m)) {
      if (d.target.value.includes(".") && !t)
        return;
      l(d.target.value), d.target.value.slice(-1) !== "." && (r == null || r(m));
    }
  }, afterItems: [e && /* @__PURE__ */ M("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, i && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => c == null ? void 0 : c.focus(), children: e }, "unit")] });
}, ha = z.forwardRef(qo), $o = z.forwardRef(({
  placeholder: e = "Введите",
  ...i
}, r) => /* @__PURE__ */ M("textarea", { ref: r, placeholder: e, ...i })), Yo = ({
  error: e,
  rows: i = 5,
  ...r
}, t) => /* @__PURE__ */ M(Ot, { ...r, ref: t, rows: i, inputComponent: $o, error: e }), pa = z.forwardRef(Yo), Xo = ({
  error: e,
  ...i
}, r) => /* @__PURE__ */ M(Ot, { useTypograf: !1, ...i, ref: r, error: e }), ga = z.forwardRef(Xo), Qo = ({
  label: e,
  error: i,
  value: r,
  helperText: t,
  className: s,
  onChange: n,
  ...o
}, a) => /* @__PURE__ */ M(Yt, { label: e, error: i, helperText: t, className: s, children: /* @__PURE__ */ be(Ms, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...o, onChange: (l) => {
  n == null || n(l.target.value === "true");
}, ref: a, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ M(Fr, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ M(Fr, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), ya = z.forwardRef(Qo);
export {
  sa as B,
  Ks as C,
  ca as D,
  oa as F,
  Yt as L,
  ha as N,
  da as Q,
  la as R,
  Ot as T,
  ga as Y,
  ua as a,
  aa as b,
  fa as c,
  pa as d,
  ya as e,
  Ci as f,
  yn as g,
  na as h,
  Ti as i,
  Is as j,
  Qi as k,
  ia as u
};
