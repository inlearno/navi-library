var or = (e, n, r) => {
  if (!n.has(e))
    throw TypeError("Cannot " + r);
};
var Q = (e, n, r) => (or(e, n, "read from private field"), r ? r.call(e) : n.get(e)), fe = (e, n, r) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, r);
}, Oe = (e, n, r, t) => (or(e, n, "write to private field"), t ? t.call(e, r) : n.set(e, r), r);
var ge = (e, n, r) => (or(e, n, "access private method"), r);
import { J as _n, L as wt, O as mi, P as bi, T as $r, V as wi, I as Gt, W as Si, X as xi, l as yt, b as Ee, j as B, Y as _i, f as On, F as mt, Z as Oi, G as Di } from "./library-d5a831b9.js";
import { r as R, R as ne, e as Ei, c as Ht, g as Dn } from "./react-6f5a8403.js";
import { Q as En, d as Ri, e as zi, g as Pi, i as Ti, j as Mi, s as qr, k as Yr, w as Ci, l as ki, m as Ai, u as Rn, c as Ni, f as Fi, n as Li, h as Mt, b as Wi } from "./DictionaryCell-8a3fecdd.js";
import { F as Ye, p as zn } from "./icons-ad9f8a73.js";
import { B as Bi, A as ji, l as Vi, m as Hi, a as zr, o as Ii, u as Pn, P as Tn, p as Ui, I as $i, f as qi, j as Yi, C as Xi, q as Xr, r as Qi, M as Ki, F as Gi } from "./mui-a6e6a5b1.js";
import { f as Ji } from "./faEye-ea161ce6.js";
function Qr(e, n) {
  return e.filter((r) => !n.includes(r));
}
function Zi(e, n, r) {
  const t = e.slice(0);
  return t[n] = r, t;
}
var et, lt, ct, Pe, _t, ft, dt, Wt, Ot, gr, Dt, vr, Et, yr, Rt, mr, Sn, es = (Sn = class extends _n {
  constructor(n, r, t) {
    super();
    fe(this, dt);
    fe(this, Ot);
    fe(this, Dt);
    fe(this, Et);
    fe(this, Rt);
    fe(this, et, void 0);
    fe(this, lt, void 0);
    fe(this, ct, void 0);
    fe(this, Pe, void 0);
    fe(this, _t, void 0);
    fe(this, ft, void 0);
    Oe(this, et, n), Oe(this, ct, []), Oe(this, Pe, []), ge(this, dt, Wt).call(this, []), this.setQueries(r, t);
  }
  onSubscribe() {
    this.listeners.size === 1 && Q(this, Pe).forEach((n) => {
      n.subscribe((r) => {
        ge(this, Et, yr).call(this, n, r);
      });
    });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Q(this, Pe).forEach((n) => {
      n.destroy();
    });
  }
  setQueries(n, r, t) {
    Oe(this, ct, n), Oe(this, _t, r), wt.batch(() => {
      const i = Q(this, Pe), s = ge(this, Dt, vr).call(this, Q(this, ct));
      s.forEach(
        (c) => c.observer.setOptions(c.defaultedQueryOptions, t)
      );
      const o = s.map((c) => c.observer), a = o.map(
        (c) => c.getCurrentResult()
      ), l = o.some(
        (c, f) => c !== i[f]
      );
      i.length === o.length && !l || (Oe(this, Pe, o), ge(this, dt, Wt).call(this, a), this.hasListeners() && (Qr(i, o).forEach((c) => {
        c.destroy();
      }), Qr(o, i).forEach((c) => {
        c.subscribe((f) => {
          ge(this, Et, yr).call(this, c, f);
        });
      }), ge(this, Rt, mr).call(this)));
    });
  }
  getCurrentResult() {
    return Q(this, ft);
  }
  getQueries() {
    return Q(this, Pe).map((n) => n.getCurrentQuery());
  }
  getObservers() {
    return Q(this, Pe);
  }
  getOptimisticResult(n, r) {
    const t = ge(this, Dt, vr).call(this, n), i = t.map(
      (s) => s.observer.getOptimisticResult(s.defaultedQueryOptions)
    );
    return [
      i,
      (s) => ge(this, Ot, gr).call(this, s ?? i, r),
      () => t.map((s, o) => {
        const a = i[o];
        return s.defaultedQueryOptions.notifyOnChangeProps ? a : s.observer.trackResult(a);
      })
    ];
  }
}, et = new WeakMap(), lt = new WeakMap(), ct = new WeakMap(), Pe = new WeakMap(), _t = new WeakMap(), ft = new WeakMap(), dt = new WeakSet(), Wt = function(n) {
  var r;
  Oe(this, lt, n), Oe(this, ft, ge(this, Ot, gr).call(this, n, (r = Q(this, _t)) == null ? void 0 : r.combine));
}, Ot = new WeakSet(), gr = function(n, r) {
  return r ? mi(Q(this, ft), r(n)) : n;
}, Dt = new WeakSet(), vr = function(n) {
  const r = Q(this, Pe), t = new Map(
    r.map((h) => [h.options.queryHash, h])
  ), i = n.map(
    (h) => Q(this, et).defaultQueryOptions(h)
  ), s = i.flatMap((h) => {
    const p = t.get(h.queryHash);
    return p != null ? [{ defaultedQueryOptions: h, observer: p }] : [];
  }), o = new Set(
    s.map((h) => h.defaultedQueryOptions.queryHash)
  ), a = i.filter(
    (h) => !o.has(h.queryHash)
  ), l = (h) => {
    const p = Q(this, et).defaultQueryOptions(h);
    return Q(this, Pe).find(
      (m) => m.options.queryHash === p.queryHash
    ) ?? new En(Q(this, et), p);
  }, c = a.map((h) => ({
    defaultedQueryOptions: h,
    observer: l(h)
  })), f = (h, p) => i.indexOf(h.defaultedQueryOptions) - i.indexOf(p.defaultedQueryOptions);
  return s.concat(c).sort(f);
}, Et = new WeakSet(), yr = function(n, r) {
  const t = Q(this, Pe).indexOf(n);
  t !== -1 && (ge(this, dt, Wt).call(this, Zi(Q(this, lt), t, r)), ge(this, Rt, mr).call(this));
}, Rt = new WeakSet(), mr = function() {
  wt.batch(() => {
    this.listeners.forEach((n) => {
      n(Q(this, lt));
    });
  });
}, Sn), Ke, Ge, Te, qe, pt, Bt, zt, br, xn, ts = (xn = class extends _n {
  constructor(n, r) {
    super();
    fe(this, pt);
    fe(this, zt);
    fe(this, Ke, void 0);
    fe(this, Ge, void 0);
    fe(this, Te, void 0);
    fe(this, qe, void 0);
    Oe(this, Ke, n), this.setOptions(r), this.bindMethods(), ge(this, pt, Bt).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(n) {
    var t;
    const r = this.options;
    this.options = Q(this, Ke).defaultMutationOptions(n), bi(this.options, r) || Q(this, Ke).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: Q(this, Te),
      observer: this
    }), r != null && r.mutationKey && this.options.mutationKey && $r(r.mutationKey) !== $r(this.options.mutationKey) ? this.reset() : (t = Q(this, Te)) == null || t.setOptions(this.options);
  }
  onUnsubscribe() {
    var n;
    this.hasListeners() || (n = Q(this, Te)) == null || n.removeObserver(this);
  }
  onMutationUpdate(n) {
    ge(this, pt, Bt).call(this), ge(this, zt, br).call(this, n);
  }
  getCurrentResult() {
    return Q(this, Ge);
  }
  reset() {
    var n;
    (n = Q(this, Te)) == null || n.removeObserver(this), Oe(this, Te, void 0), ge(this, pt, Bt).call(this), ge(this, zt, br).call(this);
  }
  mutate(n, r) {
    var t;
    return Oe(this, qe, r), (t = Q(this, Te)) == null || t.removeObserver(this), Oe(this, Te, Q(this, Ke).getMutationCache().build(Q(this, Ke), this.options)), Q(this, Te).addObserver(this), Q(this, Te).execute(n);
  }
}, Ke = new WeakMap(), Ge = new WeakMap(), Te = new WeakMap(), qe = new WeakMap(), pt = new WeakSet(), Bt = function() {
  var r;
  const n = ((r = Q(this, Te)) == null ? void 0 : r.state) ?? wi();
  Oe(this, Ge, {
    ...n,
    isPending: n.status === "pending",
    isSuccess: n.status === "success",
    isError: n.status === "error",
    isIdle: n.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, zt = new WeakSet(), br = function(n) {
  wt.batch(() => {
    var r, t, i, s, o, a, l, c;
    if (Q(this, qe) && this.hasListeners()) {
      const f = Q(this, Ge).variables, h = Q(this, Ge).context;
      (n == null ? void 0 : n.type) === "success" ? ((t = (r = Q(this, qe)).onSuccess) == null || t.call(r, n.data, f, h), (s = (i = Q(this, qe)).onSettled) == null || s.call(i, n.data, null, f, h)) : (n == null ? void 0 : n.type) === "error" && ((a = (o = Q(this, qe)).onError) == null || a.call(o, n.error, f, h), (c = (l = Q(this, qe)).onSettled) == null || c.call(
        l,
        void 0,
        n.error,
        f,
        h
      ));
    }
    this.listeners.forEach((f) => {
      f(Q(this, Ge));
    });
  });
}, xn);
function rs({
  queries: e,
  ...n
}, r) {
  const t = Gt(r), i = Ri(), s = zi(), o = R.useMemo(
    () => e.map((m) => {
      const w = t.defaultQueryOptions(m);
      return w._optimisticResults = i ? "isRestoring" : "optimistic", w;
    }),
    [e, t, i]
  );
  o.forEach((m) => {
    Pi(m), Ti(m, s);
  }), Mi(s);
  const [a] = R.useState(
    () => new es(
      t,
      o,
      n
    )
  ), [l, c, f] = a.getOptimisticResult(
    o,
    n.combine
  );
  R.useSyncExternalStore(
    R.useCallback(
      (m) => i ? () => {
      } : a.subscribe(wt.batchCalls(m)),
      [a, i]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), R.useEffect(() => {
    a.setQueries(
      o,
      n,
      {
        listeners: !1
      }
    );
  }, [o, n, a]);
  const p = l.some(
    (m, w) => qr(o[w], m)
  ) ? l.flatMap((m, w) => {
    const T = o[w];
    if (T) {
      const E = new En(t, T);
      if (qr(T, m))
        return Yr(T, E, s);
      Ci(m, i) && Yr(T, E, s);
    }
    return [];
  }) : [];
  if (p.length > 0)
    throw Promise.all(p);
  const g = l.find(
    (m, w) => {
      const T = o[w];
      return T && ki({
        result: m,
        errorResetBoundary: s,
        throwOnError: T.throwOnError,
        query: t.getQueryCache().get(T.queryHash)
      });
    }
  );
  if (g != null && g.error)
    throw g.error;
  return c(f());
}
function ns(e, n) {
  const r = Gt(n), [t] = R.useState(
    () => new ts(
      r,
      e
    )
  );
  R.useEffect(() => {
    t.setOptions(e);
  }, [t, e]);
  const i = R.useSyncExternalStore(
    R.useCallback(
      (o) => t.subscribe(wt.batchCalls(o)),
      [t]
    ),
    () => t.getCurrentResult(),
    () => t.getCurrentResult()
  ), s = R.useCallback(
    (o, a) => {
      t.mutate(o, a).catch(is);
    },
    [t]
  );
  if (i.error && Ai(t.options.throwOnError, [i.error]))
    throw i.error;
  return { ...i, mutate: s, mutateAsync: i.mutate };
}
function is() {
}
function Wa(e, n, r) {
  let t;
  typeof e == "string" && typeof n == "string" ? t = {
    url: n,
    method: e,
    ...r
  } : typeof e == "string" ? t = {
    url: e,
    ...n
  } : t = e;
  const i = R.useMemo(() => Si(t.url, {
    encode: encodeURIComponent
  }), [t.url]), s = R.useMemo(() => xi(t.url).reduce((g, m) => typeof m != "string" ? [...g, m.name] : g, []), [t.url]), o = Rn(), {
    wrapPayload: a = !0,
    syncQueryCache: l = !1,
    ...c
  } = t, f = Gt();
  return ns({
    ...c,
    mutationFn: async (p) => {
      const g = i(yt.pick(p, ...s)), m = yt.omit(p, ...s), w = yt.isEmpty(m) ? void 0 : a ? {
        data: m
      } : m, {
        data: T
      } = await o.request({
        url: g,
        method: t.method || "POST",
        data: w
      });
      return T;
    },
    onSuccess: (p, g, m) => {
      var w;
      if (l) {
        const T = i(yt.pick(g, ...s));
        f.setQueriesData({
          queryKey: [T]
        }, (E) => ({
          ...E,
          data: [p.data]
        }));
      }
      (w = c.onSuccess) == null || w.call(c, p, g, m);
    }
  });
}
const Kr = () => {
  let e, n;
  const r = new Promise((t, i) => {
    e = t, n = i;
  });
  return {
    resolve: e,
    reject: n,
    value: r
  };
}, ss = (e, n) => {
  var l;
  const r = e.name ?? `batcher:${Math.random().toString(16).slice(2)})`, t = e.scheduler ?? Mn(10), i = (l = globalThis.__BATSHIT_DEVTOOLS__) == null ? void 0 : l.for(r);
  let s = n ?? {
    seq: 0,
    batch: /* @__PURE__ */ new Set(),
    currentRequest: Kr(),
    timer: void 0,
    start: null,
    latest: null
  };
  i == null || i.create({ seq: s.seq });
  const o = () => {
    s.batch = /* @__PURE__ */ new Set(), s.currentRequest = Kr(), s.timer = void 0, s.start = null, s.latest = null;
  };
  return { fetch: (c) => {
    s.start || (s.start = Date.now()), s.latest = Date.now(), s.batch.add(c), clearTimeout(s.timer);
    const f = t(s.start, s.latest, s.batch.size);
    i == null || i.queue({
      seq: s.seq,
      query: c,
      batch: [...s.batch],
      scheduled: f,
      latest: s.latest,
      start: s.start
    });
    const h = () => {
      const p = s.seq, g = e.fetcher([...s.batch]), m = s.currentRequest;
      return i == null || i.fetch({ seq: p, batch: [...s.batch] }), o(), g.then((w) => {
        i == null || i.data({ seq: p, data: w }), m.resolve(w);
      }).catch((w) => {
        i == null || i.error({ seq: p, error: w }), m.reject(w);
      }), s.seq++, g;
    };
    if (f === "immediate") {
      const p = s.currentRequest;
      return h(), p.value.then((g) => e.resolver(g, c));
    } else
      return f === "never" ? s.currentRequest.value.then((p) => e.resolver(p, c)) : (s.timer = setTimeout(h, f), s.currentRequest.value.then((p) => e.resolver(p, c)));
  } };
}, os = (e) => (n, r) => n.find((t) => t[e] == r), Mn = (e) => (n, r) => {
  const t = r - n;
  return e - t;
}, as = ({
  url: e,
  idField: n,
  params: r
}) => {
  const t = Rn();
  return R.useMemo(() => ss({
    fetcher: async (i) => {
      const {
        data: {
          data: s
        }
      } = await t.get(e, {
        params: {
          ...r,
          id: i.join(",")
        }
      });
      return s;
    },
    resolver: os(n),
    scheduler: Mn(10)
  }), [e, r]);
}, us = ({
  idField: e,
  value: n,
  url: r,
  params: t
}) => {
  const i = as({
    url: r,
    idField: e,
    params: t
  });
  return rs({
    queries: n.map((o) => ({
      queryFn: () => i.fetch(o),
      queryKey: [r, "item", o],
      staleTime: 12e4
    })),
    combine: (o) => ({
      records: o.map((a) => a.data).filter((a) => !!a),
      isLoading: !!o.find((a) => a.isLoading)
    })
  });
}, ls = (e, n = "id") => {
  const r = Gt();
  return (t) => {
    t && r.setQueryData([e, "item", t[n]], t);
  };
}, Ba = ({
  children: e,
  className: n,
  tooltip: r,
  icon: t,
  iconAfter: i,
  size: s,
  ...o
}) => {
  let a = /* @__PURE__ */ Ee(Bi, { className: n, size: s || "small", css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...o, children: [
    t && /* @__PURE__ */ B(Ye, { icon: t }),
    e,
    i && /* @__PURE__ */ B(Ye, { icon: i })
  ] });
  return r && (a = /* @__PURE__ */ B(_i, { title: r, arrow: !0, children: a })), a;
};
function cs(e, n) {
  const [r, t] = R.useState(e);
  return R.useEffect(() => {
    const i = setTimeout(() => {
      t(e);
    }, n);
    return () => {
      clearTimeout(i);
    };
  }, [e, n]), r;
}
function ja() {
  const [e, n] = R.useState({
    width: null,
    height: null
  });
  return R.useLayoutEffect(() => {
    const r = () => {
      n({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}
const fs = ({
  children: e,
  className: n,
  form: r
}) => {
  var i, s;
  const t = r.formState.errors;
  return /* @__PURE__ */ Ee("form", { className: n, onSubmit: r.onSubmit, children: [
    t.root && /* @__PURE__ */ Ee(ji, { severity: "error", children: [
      ((i = t.root.error) == null ? void 0 : i.message) && /* @__PURE__ */ B(Vi, { css: [{
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      }, !t.root.fields && {
        margin: "0px"
      }], children: (s = t.root.error) == null ? void 0 : s.message }),
      t.root.fields && /* @__PURE__ */ B("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(t.root.fields).map(([o, {
        message: a
      }]) => /* @__PURE__ */ B("li", { css: {}, children: a }, o)) })
    ] }),
    e
  ] });
}, Va = fs;
var Pt = (e) => e.type === "checkbox", ot = (e) => e instanceof Date, xe = (e) => e == null;
const Cn = (e) => typeof e == "object";
var le = (e) => !xe(e) && !Array.isArray(e) && Cn(e) && !ot(e), kn = (e) => le(e) && e.target ? Pt(e.target) ? e.target.checked : e.target.value : e, ds = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, An = (e, n) => e.has(ds(n)), ps = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return le(n) && n.hasOwnProperty("isPrototypeOf");
}, Pr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function De(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(Pr && (e instanceof Blob || e instanceof FileList)) && (r || le(e)))
    if (n = r ? [] : {}, !r && !ps(e))
      n = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (n[t] = De(e[t]));
  else
    return e;
  return n;
}
var Tt = (e) => Array.isArray(e) ? e.filter(Boolean) : [], oe = (e) => e === void 0, P = (e, n, r) => {
  if (!n || !le(e))
    return r;
  const t = Tt(n.split(/[,[\].]+?/)).reduce((i, s) => xe(i) ? i : i[s], e);
  return oe(t) || t === e ? oe(e[n]) ? r : e[n] : t;
}, Le = (e) => typeof e == "boolean";
const It = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, We = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, $e = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, hs = ne.createContext(null), Tr = () => ne.useContext(hs);
var Nn = (e, n, r, t = !0) => {
  const i = {
    defaultValues: n._defaultValues
  };
  for (const s in e)
    Object.defineProperty(i, s, {
      get: () => {
        const o = s;
        return n._proxyFormState[o] !== We.all && (n._proxyFormState[o] = !t || We.all), r && (r[o] = !0), e[o];
      }
    });
  return i;
}, Ae = (e) => le(e) && !Object.keys(e).length, Fn = (e, n, r, t) => {
  r(e);
  const { name: i, ...s } = e;
  return Ae(s) || Object.keys(s).length >= Object.keys(n).length || Object.keys(s).find((o) => n[o] === (!t || We.all));
}, jt = (e) => Array.isArray(e) ? e : [e], Ln = (e, n, r) => !e || !n || e === n || jt(e).some((t) => t && (r ? t === n : t.startsWith(n) || n.startsWith(t)));
function Mr(e) {
  const n = ne.useRef(e);
  n.current = e, ne.useEffect(() => {
    const r = !e.disabled && n.current.subject && n.current.subject.subscribe({
      next: n.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function gs(e) {
  const n = Tr(), { control: r = n.control, disabled: t, name: i, exact: s } = e || {}, [o, a] = ne.useState(r._formState), l = ne.useRef(!0), c = ne.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), f = ne.useRef(i);
  return f.current = i, Mr({
    disabled: t,
    next: (h) => l.current && Ln(f.current, h.name, s) && Fn(h, c.current, r._updateFormState) && a({
      ...r._formState,
      ...h
    }),
    subject: r._subjects.state
  }), ne.useEffect(() => (l.current = !0, c.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), Nn(o, r, c.current, !1);
}
var He = (e) => typeof e == "string", Wn = (e, n, r, t, i) => He(e) ? (t && n.watch.add(e), P(r, e, i)) : Array.isArray(e) ? e.map((s) => (t && n.watch.add(s), P(r, s))) : (t && (n.watchAll = !0), r);
function vs(e) {
  const n = Tr(), { control: r = n.control, name: t, defaultValue: i, disabled: s, exact: o } = e || {}, a = ne.useRef(t);
  a.current = t, Mr({
    disabled: s,
    subject: r._subjects.values,
    next: (f) => {
      Ln(a.current, f.name, o) && c(De(Wn(a.current, r._names, f.values || r._formValues, !1, i)));
    }
  });
  const [l, c] = ne.useState(r._getWatch(t, i));
  return ne.useEffect(() => r._removeUnmounted()), l;
}
var Cr = (e) => /^\w*$/.test(e), Bn = (e) => Tt(e.replace(/["|']|\]/g, "").split(/\.|\[/)), re = (e, n, r) => {
  let t = -1;
  const i = Cr(n) ? [n] : Bn(n), s = i.length, o = s - 1;
  for (; ++t < s; ) {
    const a = i[t];
    let l = r;
    if (t !== o) {
      const c = e[a];
      l = le(c) || Array.isArray(c) ? c : isNaN(+i[t + 1]) ? {} : [];
    }
    e[a] = l, e = e[a];
  }
  return e;
};
function ys(e) {
  const n = Tr(), { name: r, disabled: t, control: i = n.control, shouldUnregister: s } = e, o = An(i._names.array, r), a = vs({
    control: i,
    name: r,
    defaultValue: P(i._formValues, r, P(i._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = gs({
    control: i,
    name: r
  }), c = ne.useRef(i.register(r, {
    ...e.rules,
    value: a,
    ...Le(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return ne.useEffect(() => {
    const f = i._options.shouldUnregister || s, h = (p, g) => {
      const m = P(i._fields, p);
      m && (m._f.mount = g);
    };
    if (h(r, !0), f) {
      const p = De(P(i._options.defaultValues, r));
      re(i._defaultValues, r, p), oe(P(i._formValues, r)) && re(i._formValues, r, p);
    }
    return () => {
      (o ? f && !i._state.action : f) ? i.unregister(r) : h(r, !1);
    };
  }, [r, i, o, s]), ne.useEffect(() => {
    P(i._fields, r) && i._updateDisabledField({
      disabled: t,
      fields: i._fields,
      name: r,
      value: P(i._fields, r)._f.value
    });
  }, [t, r, i]), {
    field: {
      name: r,
      value: a,
      ...Le(t) || l.disabled ? { disabled: l.disabled || t } : {},
      onChange: ne.useCallback((f) => c.current.onChange({
        target: {
          value: kn(f),
          name: r
        },
        type: It.CHANGE
      }), [r]),
      onBlur: ne.useCallback(() => c.current.onBlur({
        target: {
          value: P(i._formValues, r),
          name: r
        },
        type: It.BLUR
      }), [r, i]),
      ref: (f) => {
        const h = P(i._fields, r);
        h && f && (h._f.ref = {
          focus: () => f.focus(),
          select: () => f.select(),
          setCustomValidity: (p) => f.setCustomValidity(p),
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
const ms = (e) => e.render(ys(e));
var jn = (e, n, r, t, i) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: i || !0
  }
} : {}, Gr = (e) => ({
  isOnSubmit: !e || e === We.onSubmit,
  isOnBlur: e === We.onBlur,
  isOnChange: e === We.onChange,
  isOnAll: e === We.all,
  isOnTouch: e === We.onTouched
}), Jr = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const bt = (e, n, r, t) => {
  for (const i of r || Object.keys(e)) {
    const s = P(e, i);
    if (s) {
      const { _f: o, ...a } = s;
      if (o) {
        if (o.refs && o.refs[0] && n(o.refs[0], i) && !t)
          break;
        if (o.ref && n(o.ref, o.name) && !t)
          break;
        bt(a, n);
      } else
        le(a) && bt(a, n);
    }
  }
};
var bs = (e, n, r) => {
  const t = Tt(P(e, r));
  return re(t, "root", n[r]), re(e, r, t), e;
}, kr = (e) => e.type === "file", Je = (e) => typeof e == "function", Ut = (e) => {
  if (!Pr)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, Vt = (e) => He(e), Ar = (e) => e.type === "radio", $t = (e) => e instanceof RegExp;
const Zr = {
  value: !1,
  isValid: !1
}, en = { value: !0, isValid: !0 };
var Vn = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !oe(e[0].attributes.value) ? oe(e[0].value) || e[0].value === "" ? en : { value: e[0].value, isValid: !0 } : en
    ) : Zr;
  }
  return Zr;
};
const tn = {
  isValid: !1,
  value: null
};
var Hn = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, tn) : tn;
function rn(e, n, r = "validate") {
  if (Vt(e) || Array.isArray(e) && e.every(Vt) || Le(e) && !e)
    return {
      type: r,
      message: Vt(e) ? e : "",
      ref: n
    };
}
var it = (e) => le(e) && !$t(e) ? e : {
  value: e,
  message: ""
}, nn = async (e, n, r, t, i) => {
  const { ref: s, refs: o, required: a, maxLength: l, minLength: c, min: f, max: h, pattern: p, validate: g, name: m, valueAsNumber: w, mount: T, disabled: E } = e._f, b = P(n, m);
  if (!T || E)
    return {};
  const M = o ? o[0] : s, A = (C) => {
    t && M.reportValidity && (M.setCustomValidity(Le(C) ? "" : C || ""), M.reportValidity());
  }, N = {}, ee = Ar(s), q = Pt(s), H = ee || q, j = (w || kr(s)) && oe(s.value) && oe(b) || Ut(s) && s.value === "" || b === "" || Array.isArray(b) && !b.length, L = jn.bind(null, m, r, N), U = (C, F, X, J = $e.maxLength, G = $e.minLength) => {
    const K = C ? F : X;
    N[m] = {
      type: C ? J : G,
      message: K,
      ref: s,
      ...L(C ? J : G, K)
    };
  };
  if (i ? !Array.isArray(b) || !b.length : a && (!H && (j || xe(b)) || Le(b) && !b || q && !Vn(o).isValid || ee && !Hn(o).isValid)) {
    const { value: C, message: F } = Vt(a) ? { value: !!a, message: a } : it(a);
    if (C && (N[m] = {
      type: $e.required,
      message: F,
      ref: M,
      ...L($e.required, F)
    }, !r))
      return A(F), N;
  }
  if (!j && (!xe(f) || !xe(h))) {
    let C, F;
    const X = it(h), J = it(f);
    if (!xe(b) && !isNaN(b)) {
      const G = s.valueAsNumber || b && +b;
      xe(X.value) || (C = G > X.value), xe(J.value) || (F = G < J.value);
    } else {
      const G = s.valueAsDate || new Date(b), K = (ie) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ie), Z = s.type == "time", te = s.type == "week";
      He(X.value) && b && (C = Z ? K(b) > K(X.value) : te ? b > X.value : G > new Date(X.value)), He(J.value) && b && (F = Z ? K(b) < K(J.value) : te ? b < J.value : G < new Date(J.value));
    }
    if ((C || F) && (U(!!C, X.message, J.message, $e.max, $e.min), !r))
      return A(N[m].message), N;
  }
  if ((l || c) && !j && (He(b) || i && Array.isArray(b))) {
    const C = it(l), F = it(c), X = !xe(C.value) && b.length > +C.value, J = !xe(F.value) && b.length < +F.value;
    if ((X || J) && (U(X, C.message, F.message), !r))
      return A(N[m].message), N;
  }
  if (p && !j && He(b)) {
    const { value: C, message: F } = it(p);
    if ($t(C) && !b.match(C) && (N[m] = {
      type: $e.pattern,
      message: F,
      ref: s,
      ...L($e.pattern, F)
    }, !r))
      return A(F), N;
  }
  if (g) {
    if (Je(g)) {
      const C = await g(b, n), F = rn(C, M);
      if (F && (N[m] = {
        ...F,
        ...L($e.validate, F.message)
      }, !r))
        return A(F.message), N;
    } else if (le(g)) {
      let C = {};
      for (const F in g) {
        if (!Ae(C) && !r)
          break;
        const X = rn(await g[F](b, n), M, F);
        X && (C = {
          ...X,
          ...L(F, X.message)
        }, A(X.message), r && (N[m] = C));
      }
      if (!Ae(C) && (N[m] = {
        ref: M,
        ...C
      }, !r))
        return N;
    }
  }
  return A(!0), N;
};
function ws(e, n) {
  const r = n.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = oe(e) ? t++ : e[n[t++]];
  return e;
}
function Ss(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !oe(e[n]))
      return !1;
  return !0;
}
function ve(e, n) {
  const r = Array.isArray(n) ? n : Cr(n) ? [n] : Bn(n), t = r.length === 1 ? e : ws(e, r), i = r.length - 1, s = r[i];
  return t && delete t[s], i !== 0 && (le(t) && Ae(t) || Array.isArray(t) && Ss(t)) && ve(e, r.slice(0, -1)), e;
}
var ar = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const s of e)
        s.next && s.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((s) => s !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, qt = (e) => xe(e) || !Cn(e);
function Ze(e, n) {
  if (qt(e) || qt(n))
    return e === n;
  if (ot(e) && ot(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), t = Object.keys(n);
  if (r.length !== t.length)
    return !1;
  for (const i of r) {
    const s = e[i];
    if (!t.includes(i))
      return !1;
    if (i !== "ref") {
      const o = n[i];
      if (ot(s) && ot(o) || le(s) && le(o) || Array.isArray(s) && Array.isArray(o) ? !Ze(s, o) : s !== o)
        return !1;
    }
  }
  return !0;
}
var In = (e) => e.type === "select-multiple", xs = (e) => Ar(e) || Pt(e), ur = (e) => Ut(e) && e.isConnected, Un = (e) => {
  for (const n in e)
    if (Je(e[n]))
      return !0;
  return !1;
};
function Yt(e, n = {}) {
  const r = Array.isArray(e);
  if (le(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || le(e[t]) && !Un(e[t]) ? (n[t] = Array.isArray(e[t]) ? [] : {}, Yt(e[t], n[t])) : xe(e[t]) || (n[t] = !0);
  return n;
}
function $n(e, n, r) {
  const t = Array.isArray(e);
  if (le(e) || t)
    for (const i in e)
      Array.isArray(e[i]) || le(e[i]) && !Un(e[i]) ? oe(n) || qt(r[i]) ? r[i] = Array.isArray(e[i]) ? Yt(e[i], []) : { ...Yt(e[i]) } : $n(e[i], xe(n) ? {} : n[i], r[i]) : r[i] = !Ze(e[i], n[i]);
  return r;
}
var Ct = (e, n) => $n(e, n, Yt(n)), qn = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: t }) => oe(e) ? e : n ? e === "" ? NaN : e && +e : r && He(e) ? new Date(e) : t ? t(e) : e;
function lr(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return kr(n) ? n.files : Ar(n) ? Hn(e.refs).value : In(n) ? [...n.selectedOptions].map(({ value: r }) => r) : Pt(n) ? Vn(e.refs).value : qn(oe(n.value) ? e.ref.value : n.value, e);
}
var _s = (e, n, r, t) => {
  const i = {};
  for (const s of e) {
    const o = P(n, s);
    o && re(i, s, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: t
  };
}, gt = (e) => oe(e) ? e : $t(e) ? e.source : le(e) ? $t(e.value) ? e.value.source : e.value : e, Os = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function sn(e, n, r) {
  const t = P(e, r);
  if (t || Cr(r))
    return {
      error: t,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const s = i.join("."), o = P(n, s), a = P(e, s);
    if (o && !Array.isArray(o) && r !== s)
      return { name: r };
    if (a && a.type)
      return {
        name: s,
        error: a
      };
    i.pop();
  }
  return {
    name: r
  };
}
var Ds = (e, n, r, t, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(n || e) : (r ? t.isOnBlur : i.isOnBlur) ? !e : (r ? t.isOnChange : i.isOnChange) ? e : !0, Es = (e, n) => !Tt(P(e, n)).length && ve(e, n);
const Rs = {
  mode: We.onSubmit,
  reValidateMode: We.onChange,
  shouldFocusError: !0
};
function zs(e = {}, n) {
  let r = {
    ...Rs,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Je(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, i = {}, s = le(r.values) || le(r.defaultValues) ? De(r.values || r.defaultValues) || {} : {}, o = r.shouldUnregister ? {} : De(s), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, f = 0;
  const h = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, p = {
    values: ar(),
    array: ar(),
    state: ar()
  }, g = Gr(r.mode), m = Gr(r.reValidateMode), w = r.criteriaMode === We.all, T = (u) => (d) => {
    clearTimeout(f), f = setTimeout(u, d);
  }, E = async (u) => {
    if (h.isValid || u) {
      const d = r.resolver ? Ae((await j()).errors) : await U(i, !0);
      d !== t.isValid && p.state.next({
        isValid: d
      });
    }
  }, b = (u) => h.isValidating && p.state.next({
    isValidating: u
  }), M = (u, d = [], v, k, z = !0, _ = !0) => {
    if (k && v) {
      if (a.action = !0, _ && Array.isArray(P(i, u))) {
        const V = v(P(i, u), k.argA, k.argB);
        z && re(i, u, V);
      }
      if (_ && Array.isArray(P(t.errors, u))) {
        const V = v(P(t.errors, u), k.argA, k.argB);
        z && re(t.errors, u, V), Es(t.errors, u);
      }
      if (h.touchedFields && _ && Array.isArray(P(t.touchedFields, u))) {
        const V = v(P(t.touchedFields, u), k.argA, k.argB);
        z && re(t.touchedFields, u, V);
      }
      h.dirtyFields && (t.dirtyFields = Ct(s, o)), p.state.next({
        name: u,
        isDirty: F(u, d),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      re(o, u, d);
  }, A = (u, d) => {
    re(t.errors, u, d), p.state.next({
      errors: t.errors
    });
  }, N = (u) => {
    t.errors = u, p.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, ee = (u, d, v, k) => {
    const z = P(i, u);
    if (z) {
      const _ = P(o, u, oe(v) ? P(s, u) : v);
      oe(_) || k && k.defaultChecked || d ? re(o, u, d ? _ : lr(z._f)) : G(u, _), a.mount && E();
    }
  }, q = (u, d, v, k, z) => {
    let _ = !1, V = !1;
    const se = {
      name: u
    }, ce = !!(P(i, u) && P(i, u)._f.disabled);
    if (!v || k) {
      h.isDirty && (V = t.isDirty, t.isDirty = se.isDirty = F(), _ = V !== se.isDirty);
      const je = ce || Ze(P(s, u), d);
      V = !!(!ce && P(t.dirtyFields, u)), je || ce ? ve(t.dirtyFields, u) : re(t.dirtyFields, u, !0), se.dirtyFields = t.dirtyFields, _ = _ || h.dirtyFields && V !== !je;
    }
    if (v) {
      const je = P(t.touchedFields, u);
      je || (re(t.touchedFields, u, v), se.touchedFields = t.touchedFields, _ = _ || h.touchedFields && je !== v);
    }
    return _ && z && p.state.next(se), _ ? se : {};
  }, H = (u, d, v, k) => {
    const z = P(t.errors, u), _ = h.isValid && Le(d) && t.isValid !== d;
    if (e.delayError && v ? (c = T(() => A(u, v)), c(e.delayError)) : (clearTimeout(f), c = null, v ? re(t.errors, u, v) : ve(t.errors, u)), (v ? !Ze(z, v) : z) || !Ae(k) || _) {
      const V = {
        ...k,
        ..._ && Le(d) ? { isValid: d } : {},
        errors: t.errors,
        name: u
      };
      t = {
        ...t,
        ...V
      }, p.state.next(V);
    }
    b(!1);
  }, j = async (u) => r.resolver(o, r.context, _s(u || l.mount, i, r.criteriaMode, r.shouldUseNativeValidation)), L = async (u) => {
    const { errors: d } = await j(u);
    if (u)
      for (const v of u) {
        const k = P(d, v);
        k ? re(t.errors, v, k) : ve(t.errors, v);
      }
    else
      t.errors = d;
    return d;
  }, U = async (u, d, v = {
    valid: !0
  }) => {
    for (const k in u) {
      const z = u[k];
      if (z) {
        const { _f: _, ...V } = z;
        if (_) {
          const se = l.array.has(_.name), ce = await nn(z, o, w, r.shouldUseNativeValidation && !d, se);
          if (ce[_.name] && (v.valid = !1, d))
            break;
          !d && (P(ce, _.name) ? se ? bs(t.errors, ce, _.name) : re(t.errors, _.name, ce[_.name]) : ve(t.errors, _.name));
        }
        V && await U(V, d, v);
      }
    }
    return v.valid;
  }, C = () => {
    for (const u of l.unMount) {
      const d = P(i, u);
      d && (d._f.refs ? d._f.refs.every((v) => !ur(v)) : !ur(d._f.ref)) && W(u);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, F = (u, d) => (u && d && re(o, u, d), !Ze(y(), s)), X = (u, d, v) => Wn(u, l, {
    ...a.mount ? o : oe(d) ? s : He(u) ? { [u]: d } : d
  }, v, d), J = (u) => Tt(P(a.mount ? o : s, u, e.shouldUnregister ? P(s, u, []) : [])), G = (u, d, v = {}) => {
    const k = P(i, u);
    let z = d;
    if (k) {
      const _ = k._f;
      _ && (!_.disabled && re(o, u, qn(d, _)), z = Ut(_.ref) && xe(d) ? "" : d, In(_.ref) ? [..._.ref.options].forEach((V) => V.selected = z.includes(V.value)) : _.refs ? Pt(_.ref) ? _.refs.length > 1 ? _.refs.forEach((V) => (!V.defaultChecked || !V.disabled) && (V.checked = Array.isArray(z) ? !!z.find((se) => se === V.value) : z === V.value)) : _.refs[0] && (_.refs[0].checked = !!z) : _.refs.forEach((V) => V.checked = V.value === z) : kr(_.ref) ? _.ref.value = "" : (_.ref.value = z, _.ref.type || p.values.next({
        name: u,
        values: { ...o }
      })));
    }
    (v.shouldDirty || v.shouldTouch) && q(u, z, v.shouldTouch, v.shouldDirty, !0), v.shouldValidate && pe(u);
  }, K = (u, d, v) => {
    for (const k in d) {
      const z = d[k], _ = `${u}.${k}`, V = P(i, _);
      (l.array.has(u) || !qt(z) || V && !V._f) && !ot(z) ? K(_, z, v) : G(_, z, v);
    }
  }, Z = (u, d, v = {}) => {
    const k = P(i, u), z = l.array.has(u), _ = De(d);
    re(o, u, _), z ? (p.array.next({
      name: u,
      values: { ...o }
    }), (h.isDirty || h.dirtyFields) && v.shouldDirty && p.state.next({
      name: u,
      dirtyFields: Ct(s, o),
      isDirty: F(u, _)
    })) : k && !k._f && !xe(_) ? K(u, _, v) : G(u, _, v), Jr(u, l) && p.state.next({ ...t }), p.values.next({
      name: u,
      values: { ...o }
    }), !a.mount && n();
  }, te = async (u) => {
    const d = u.target;
    let v = d.name, k = !0;
    const z = P(i, v), _ = () => d.type ? lr(z._f) : kn(u), V = (se) => {
      k = Number.isNaN(se) || se === P(o, v, se);
    };
    if (z) {
      let se, ce;
      const je = _(), nt = u.type === It.BLUR || u.type === It.FOCUS_OUT, gi = !Os(z._f) && !r.resolver && !P(t.errors, v) && !z._f.deps || Ds(nt, P(t.touchedFields, v), t.isSubmitted, m, g), ir = Jr(v, l, nt);
      re(o, v, je), nt ? (z._f.onBlur && z._f.onBlur(u), c && c(0)) : z._f.onChange && z._f.onChange(u);
      const sr = q(v, je, nt, !1), vi = !Ae(sr) || ir;
      if (!nt && p.values.next({
        name: v,
        type: u.type,
        values: { ...o }
      }), gi)
        return h.isValid && E(), vi && p.state.next({ name: v, ...ir ? {} : sr });
      if (!nt && ir && p.state.next({ ...t }), b(!0), r.resolver) {
        const { errors: Ir } = await j([v]);
        if (V(je), k) {
          const yi = sn(t.errors, i, v), Ur = sn(Ir, i, yi.name || v);
          se = Ur.error, v = Ur.name, ce = Ae(Ir);
        }
      } else
        se = (await nn(z, o, w, r.shouldUseNativeValidation))[v], V(je), k && (se ? ce = !1 : h.isValid && (ce = await U(i, !0)));
      k && (z._f.deps && pe(z._f.deps), H(v, ce, se, sr));
    }
  }, ie = (u, d) => {
    if (P(t.errors, d) && u.focus)
      return u.focus(), 1;
  }, pe = async (u, d = {}) => {
    let v, k;
    const z = jt(u);
    if (b(!0), r.resolver) {
      const _ = await L(oe(u) ? u : z);
      v = Ae(_), k = u ? !z.some((V) => P(_, V)) : v;
    } else
      u ? (k = (await Promise.all(z.map(async (_) => {
        const V = P(i, _);
        return await U(V && V._f ? { [_]: V } : V);
      }))).every(Boolean), !(!k && !t.isValid) && E()) : k = v = await U(i);
    return p.state.next({
      ...!He(u) || h.isValid && v !== t.isValid ? {} : { name: u },
      ...r.resolver || !u ? { isValid: v } : {},
      errors: t.errors,
      isValidating: !1
    }), d.shouldFocus && !k && bt(i, ie, u ? z : l.mount), k;
  }, y = (u) => {
    const d = {
      ...s,
      ...a.mount ? o : {}
    };
    return oe(u) ? d : He(u) ? P(d, u) : u.map((v) => P(d, v));
  }, S = (u, d) => ({
    invalid: !!P((d || t).errors, u),
    isDirty: !!P((d || t).dirtyFields, u),
    isTouched: !!P((d || t).touchedFields, u),
    error: P((d || t).errors, u)
  }), x = (u) => {
    u && jt(u).forEach((d) => ve(t.errors, d)), p.state.next({
      errors: u ? t.errors : {}
    });
  }, O = (u, d, v) => {
    const k = (P(i, u, { _f: {} })._f || {}).ref;
    re(t.errors, u, {
      ...d,
      ref: k
    }), p.state.next({
      name: u,
      errors: t.errors,
      isValid: !1
    }), v && v.shouldFocus && k && k.focus && k.focus();
  }, D = (u, d) => Je(u) ? p.values.subscribe({
    next: (v) => u(X(void 0, d), v)
  }) : X(u, d, !0), W = (u, d = {}) => {
    for (const v of u ? jt(u) : l.mount)
      l.mount.delete(v), l.array.delete(v), d.keepValue || (ve(i, v), ve(o, v)), !d.keepError && ve(t.errors, v), !d.keepDirty && ve(t.dirtyFields, v), !d.keepTouched && ve(t.touchedFields, v), !r.shouldUnregister && !d.keepDefaultValue && ve(s, v);
    p.values.next({
      values: { ...o }
    }), p.state.next({
      ...t,
      ...d.keepDirty ? { isDirty: F() } : {}
    }), !d.keepIsValid && E();
  }, $ = ({ disabled: u, name: d, field: v, fields: k, value: z }) => {
    if (Le(u)) {
      const _ = u ? void 0 : oe(z) ? lr(v ? v._f : P(k, d)._f) : z;
      re(o, d, _), q(d, _, !1, !1, !0);
    }
  }, I = (u, d = {}) => {
    let v = P(i, u);
    const k = Le(d.disabled);
    return re(i, u, {
      ...v || {},
      _f: {
        ...v && v._f ? v._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...d
      }
    }), l.mount.add(u), v ? $({
      field: v,
      disabled: d.disabled,
      name: u,
      value: d.value
    }) : ee(u, !0, d.value), {
      ...k ? { disabled: d.disabled } : {},
      ...r.progressive ? {
        required: !!d.required,
        min: gt(d.min),
        max: gt(d.max),
        minLength: gt(d.minLength),
        maxLength: gt(d.maxLength),
        pattern: gt(d.pattern)
      } : {},
      name: u,
      onChange: te,
      onBlur: te,
      ref: (z) => {
        if (z) {
          I(u, d), v = P(i, u);
          const _ = oe(z.value) && z.querySelectorAll && z.querySelectorAll("input,select,textarea")[0] || z, V = xs(_), se = v._f.refs || [];
          if (V ? se.find((ce) => ce === _) : _ === v._f.ref)
            return;
          re(i, u, {
            _f: {
              ...v._f,
              ...V ? {
                refs: [
                  ...se.filter(ur),
                  _,
                  ...Array.isArray(P(s, u)) ? [{}] : []
                ],
                ref: { type: _.type, name: u }
              } : { ref: _ }
            }
          }), ee(u, !1, void 0, _);
        } else
          v = P(i, u, {}), v._f && (v._f.mount = !1), (r.shouldUnregister || d.shouldUnregister) && !(An(l.array, u) && a.action) && l.unMount.add(u);
      }
    };
  }, Y = () => r.shouldFocusError && bt(i, ie, l.mount), be = (u) => {
    Le(u) && (p.state.next({ disabled: u }), bt(i, (d, v) => {
      let k = u;
      const z = P(i, v);
      z && Le(z._f.disabled) && (k || (k = z._f.disabled)), d.disabled = k;
    }, 0, !1));
  }, he = (u, d) => async (v) => {
    let k;
    v && (v.preventDefault && v.preventDefault(), v.persist && v.persist());
    let z = De(o);
    if (p.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: _, values: V } = await j();
      t.errors = _, z = V;
    } else
      await U(i);
    if (ve(t.errors, "root"), Ae(t.errors)) {
      p.state.next({
        errors: {}
      });
      try {
        await u(z, v);
      } catch (_) {
        k = _;
      }
    } else
      d && await d({ ...t.errors }, v), Y(), setTimeout(Y);
    if (p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ae(t.errors) && !k,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), k)
      throw k;
  }, we = (u, d = {}) => {
    P(i, u) && (oe(d.defaultValue) ? Z(u, De(P(s, u))) : (Z(u, d.defaultValue), re(s, u, De(d.defaultValue))), d.keepTouched || ve(t.touchedFields, u), d.keepDirty || (ve(t.dirtyFields, u), t.isDirty = d.defaultValue ? F(u, De(P(s, u))) : F()), d.keepError || (ve(t.errors, u), h.isValid && E()), p.state.next({ ...t }));
  }, _e = (u, d = {}) => {
    const v = u ? De(u) : s, k = De(v), z = u && !Ae(u) ? k : s;
    if (d.keepDefaultValues || (s = v), !d.keepValues) {
      if (d.keepDirtyValues)
        for (const _ of l.mount)
          P(t.dirtyFields, _) ? re(z, _, P(o, _)) : Z(_, P(z, _));
      else {
        if (Pr && oe(u))
          for (const _ of l.mount) {
            const V = P(i, _);
            if (V && V._f) {
              const se = Array.isArray(V._f.refs) ? V._f.refs[0] : V._f.ref;
              if (Ut(se)) {
                const ce = se.closest("form");
                if (ce) {
                  ce.reset();
                  break;
                }
              }
            }
          }
        i = {};
      }
      o = e.shouldUnregister ? d.keepDefaultValues ? De(s) : {} : De(z), p.array.next({
        values: { ...z }
      }), p.values.next({
        values: { ...z }
      });
    }
    l = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !a.mount && n(), a.mount = !h.isValid || !!d.keepIsValid || !!d.keepDirtyValues, a.watch = !!e.shouldUnregister, p.state.next({
      submitCount: d.keepSubmitCount ? t.submitCount : 0,
      isDirty: d.keepDirty ? t.isDirty : !!(d.keepDefaultValues && !Ze(u, s)),
      isSubmitted: d.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: d.keepDirtyValues ? d.keepDefaultValues && o ? Ct(s, o) : t.dirtyFields : d.keepDefaultValues && u ? Ct(s, u) : {},
      touchedFields: d.keepTouched ? t.touchedFields : {},
      errors: d.keepErrors ? t.errors : {},
      isSubmitSuccessful: d.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ce = (u, d) => _e(Je(u) ? u(o) : u, d);
  return {
    control: {
      register: I,
      unregister: W,
      getFieldState: S,
      handleSubmit: he,
      setError: O,
      _executeSchema: j,
      _getWatch: X,
      _getDirty: F,
      _updateValid: E,
      _removeUnmounted: C,
      _updateFieldArray: M,
      _updateDisabledField: $,
      _getFieldArray: J,
      _reset: _e,
      _resetDefaultValues: () => Je(r.defaultValues) && r.defaultValues().then((u) => {
        Ce(u, r.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (u) => {
        t = {
          ...t,
          ...u
        };
      },
      _disableForm: be,
      _subjects: p,
      _proxyFormState: h,
      _setErrors: N,
      get _fields() {
        return i;
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
        return s;
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
    trigger: pe,
    register: I,
    handleSubmit: he,
    watch: D,
    setValue: Z,
    getValues: y,
    reset: Ce,
    resetField: we,
    clearErrors: x,
    unregister: W,
    setError: O,
    setFocus: (u, d = {}) => {
      const v = P(i, u), k = v && v._f;
      if (k) {
        const z = k.refs ? k.refs[0] : k.ref;
        z.focus && (z.focus(), d.shouldSelect && z.select());
      }
    },
    getFieldState: S
  };
}
function Ps(e = {}) {
  const n = ne.useRef(), r = ne.useRef(), [t, i] = ne.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Je(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: Je(e.defaultValues) ? void 0 : e.defaultValues
  });
  n.current || (n.current = {
    ...zs(e, () => i((o) => ({ ...o }))),
    formState: t
  });
  const s = n.current.control;
  return s._options = e, Mr({
    subject: s._subjects.state,
    next: (o) => {
      Fn(o, s._proxyFormState, s._updateFormState, !0) && i({ ...s._formState });
    }
  }), ne.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), ne.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const o = s._getDirty();
      o !== t.isDirty && s._subjects.state.next({
        isDirty: o
      });
    }
  }, [s, t.isDirty]), ne.useEffect(() => {
    e.values && !Ze(e.values, r.current) ? (s._reset(e.values, s._options.resetOptions), r.current = e.values, i((o) => ({ ...o }))) : s._resetDefaultValues();
  }, [e.values, s]), ne.useEffect(() => {
    e.errors && s._setErrors(e.errors);
  }, [e.errors, s]), ne.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), ne.useEffect(() => {
    e.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [e.shouldUnregister, s]), n.current.formState = Nn(t, s), n.current;
}
const Ts = ({
  render: e,
  ...n
}) => /* @__PURE__ */ B(ms, { ...n, render: ({
  field: r,
  fieldState: t,
  ...i
}) => {
  var s;
  return e({
    field: {
      ...r,
      error: (s = t.error) == null ? void 0 : s.message
    },
    fieldState: t,
    ...i
  });
} }), Ha = Ts;
var Yn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", r = "triangle-exclamation", t = 512, i = 512, s = [9888, "exclamation-triangle", "warning"], o = "f071", a = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  e.definition = {
    prefix: n,
    iconName: r,
    icon: [
      t,
      i,
      s,
      o,
      a
    ]
  }, e.faTriangleExclamation = e.definition, e.prefix = n, e.iconName = r, e.width = t, e.height = i, e.ligatures = s, e.unicode = o, e.svgPathData = a, e.aliases = s;
})(Yn);
const Ms = ({
  helperText: e,
  label: n,
  error: r,
  children: t,
  ...i
}, s) => (e = r || e, /* @__PURE__ */ Ee("div", { ref: s, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, n && {
  paddingTop: "1.5rem"
}], ...i, children: [
  t,
  n && /* @__PURE__ */ B("label", { css: [{
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
  }], children: n }),
  e && /* @__PURE__ */ Ee("div", { css: [{
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
    r && /* @__PURE__ */ B(Ye, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: Yn.faTriangleExclamation }),
    e
  ] })
] })), Jt = R.forwardRef(Ms);
var on = function(e, n, r) {
  if (e && "reportValidity" in e) {
    var t = P(r, n);
    e.setCustomValidity(t && t.message || ""), e.reportValidity();
  }
}, Xn = function(e, n) {
  var r = function(i) {
    var s = n.fields[i];
    s && s.ref && "reportValidity" in s.ref ? on(s.ref, i, e) : s.refs && s.refs.forEach(function(o) {
      return on(o, i, e);
    });
  };
  for (var t in n.fields)
    r(t);
}, Cs = function(e, n) {
  n.shouldUseNativeValidation && Xn(e, n);
  var r = {};
  for (var t in e) {
    var i = P(n.fields, t), s = Object.assign(e[t] || {}, { ref: i && i.ref });
    if (ks(n.names || Object.keys(e), t)) {
      var o = Object.assign({}, P(r, t));
      re(o, "root", s), re(r, t, o);
    } else
      re(r, t, s);
  }
  return r;
}, ks = function(e, n) {
  return e.some(function(r) {
    return r.startsWith(n + ".");
  });
}, As = function(e, n) {
  for (var r = {}; e.length; ) {
    var t = e[0], i = t.code, s = t.message, o = t.path.join(".");
    if (!r[o])
      if ("unionErrors" in t) {
        var a = t.unionErrors[0].errors[0];
        r[o] = { message: a.message, type: a.code };
      } else
        r[o] = { message: s, type: i };
    if ("unionErrors" in t && t.unionErrors.forEach(function(f) {
      return f.errors.forEach(function(h) {
        return e.push(h);
      });
    }), n) {
      var l = r[o].types, c = l && l[t.code];
      r[o] = jn(o, n, r, i, c ? [].concat(c, t.message) : t.message);
    }
    e.shift();
  }
  return r;
}, Ns = function(e, n, r) {
  return r === void 0 && (r = {}), function(t, i, s) {
    try {
      return Promise.resolve(function(o, a) {
        try {
          var l = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](t, n)).then(function(c) {
            return s.shouldUseNativeValidation && Xn({}, s), { errors: {}, values: r.raw ? t : c };
          });
        } catch (c) {
          return a(c);
        }
        return l && l.then ? l.then(void 0, a) : l;
      }(0, function(o) {
        if (function(a) {
          return a.errors != null;
        }(o))
          return { values: {}, errors: Cs(As(o.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
};
const Fs = ({
  schema: e,
  mode: n = "onChange",
  reValidateMode: r = "onChange",
  onValid: t,
  onInvalid: i,
  ...s
} = {}) => {
  const o = Ps({
    mode: n,
    reValidateMode: r,
    resolver: e ? Ns(e) : void 0,
    ...s
  });
  return {
    onSubmit: o.handleSubmit((a, l) => t == null ? void 0 : t(a, l), i),
    submit: async () => new Promise((a, l) => {
      o.handleSubmit(async (f, h) => {
        try {
          await (t == null ? void 0 : t(f, h)), a(void 0);
        } catch (p) {
          l(p);
        }
      }, (f) => {
        l(f);
      })();
    }),
    ...o
  };
}, Ia = ({
  onValid: e,
  context: n,
  mutation: r,
  defaultValues: t,
  schema: i,
  transformSendData: s,
  ...o
}) => {
  const a = Fs({
    context: n,
    schema: i,
    defaultValues: t,
    onValid: async (l) => {
      await (e == null ? void 0 : e(l)), await (r == null ? void 0 : r.mutateAsync(s ? s(l) : l, {
        onError: (c, f) => {
          var p;
          const h = (p = c.response) == null ? void 0 : p.data;
          h ? h.errors ? h.errors.forEach((g) => {
            g.attribute in f ? a.setError(g.attribute, {
              message: g.msg
            }) : a.setError(`root.fields.${g.attribute}`, {
              type: "server",
              message: g.msg
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
var Qn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", r = "xmark", t = 384, i = 512, s = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], o = "f00d", a = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  e.definition = {
    prefix: n,
    iconName: r,
    icon: [
      t,
      i,
      s,
      o,
      a
    ]
  }, e.faXmark = e.definition, e.prefix = n, e.iconName = r, e.width = t, e.height = i, e.ligatures = s, e.unicode = o, e.svgPathData = a, e.aliases = s;
})(Qn);
var Zt = { exports: {} }, Kn = {};
function Gn(e) {
  var n, r, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (r = Gn(e[n])) && (t && (t += " "), t += r);
    else
      for (n in e)
        e[n] && (t && (t += " "), t += n);
  return t;
}
function an() {
  for (var e, n, r = 0, t = ""; r < arguments.length; )
    (e = arguments[r++]) && (n = Gn(e)) && (t && (t += " "), t += n);
  return t;
}
const Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: an,
  default: an
}, Symbol.toStringTag, { value: "Module" })), Ws = /* @__PURE__ */ Ei(Ls);
var ae = {}, Ie = {};
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.dontSetMe = Is;
Ie.findInArray = Bs;
Ie.int = Hs;
Ie.isFunction = js;
Ie.isNum = Vs;
function Bs(e, n) {
  for (var r = 0, t = e.length; r < t; r++)
    if (n.apply(n, [e[r], r, e]))
      return e[r];
}
function js(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Vs(e) {
  return typeof e == "number" && !isNaN(e);
}
function Hs(e) {
  return parseInt(e, 10);
}
function Is(e, n, r) {
  if (e[n])
    return new Error("Invalid prop ".concat(n, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var tt = {};
Object.defineProperty(tt, "__esModule", {
  value: !0
});
tt.browserPrefixToKey = Zn;
tt.browserPrefixToStyle = Us;
tt.default = void 0;
tt.getPrefix = Jn;
var cr = ["Moz", "Webkit", "O", "ms"];
function Jn() {
  var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var t = (e = window.document) === null || e === void 0 || (n = e.documentElement) === null || n === void 0 ? void 0 : n.style;
  if (!t || r in t)
    return "";
  for (var i = 0; i < cr.length; i++)
    if (Zn(r, cr[i]) in t)
      return cr[i];
  return "";
}
function Zn(e, n) {
  return n ? "".concat(n).concat($s(e)) : e;
}
function Us(e, n) {
  return n ? "-".concat(n.toLowerCase(), "-").concat(e) : e;
}
function $s(e) {
  for (var n = "", r = !0, t = 0; t < e.length; t++)
    r ? (n += e[t].toUpperCase(), r = !1) : e[t] === "-" ? r = !0 : n += e[t];
  return n;
}
var qs = Jn();
tt.default = qs;
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wr(e);
}
Object.defineProperty(ae, "__esModule", {
  value: !0
});
ae.addClassName = ii;
ae.addEvent = Qs;
ae.addUserSelectStyles = oo;
ae.createCSSTransform = ro;
ae.createSVGTransform = no;
ae.getTouch = io;
ae.getTouchIdentifier = so;
ae.getTranslation = Nr;
ae.innerHeight = Zs;
ae.innerWidth = eo;
ae.matchesSelector = ni;
ae.matchesSelectorAndParentsTo = Xs;
ae.offsetXYFromParent = to;
ae.outerHeight = Gs;
ae.outerWidth = Js;
ae.removeClassName = si;
ae.removeEvent = Ks;
ae.removeUserSelectStyles = ao;
var Me = Ie, un = Ys(tt);
function ei(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ei = function(i) {
    return i ? r : n;
  })(e);
}
function Ys(e, n) {
  if (!n && e && e.__esModule)
    return e;
  if (e === null || wr(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = ei(n);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, s) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, s, o) : t[s] = e[s];
    }
  return t.default = e, r && r.set(e, t), t;
}
function ln(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function ti(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ln(Object(r), !0).forEach(function(t) {
      ri(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ln(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function ri(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
var kt = "";
function ni(e, n) {
  return kt || (kt = (0, Me.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, Me.isFunction)(e[r]);
  })), (0, Me.isFunction)(e[kt]) ? e[kt](n) : !1;
}
function Xs(e, n, r) {
  var t = e;
  do {
    if (ni(t, n))
      return !0;
    if (t === r)
      return !1;
    t = t.parentNode;
  } while (t);
  return !1;
}
function Qs(e, n, r, t) {
  if (e) {
    var i = ti({
      capture: !0
    }, t);
    e.addEventListener ? e.addEventListener(n, r, i) : e.attachEvent ? e.attachEvent("on" + n, r) : e["on" + n] = r;
  }
}
function Ks(e, n, r, t) {
  if (e) {
    var i = ti({
      capture: !0
    }, t);
    e.removeEventListener ? e.removeEventListener(n, r, i) : e.detachEvent ? e.detachEvent("on" + n, r) : e["on" + n] = null;
  }
}
function Gs(e) {
  var n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n += (0, Me.int)(r.borderTopWidth), n += (0, Me.int)(r.borderBottomWidth), n;
}
function Js(e) {
  var n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n += (0, Me.int)(r.borderLeftWidth), n += (0, Me.int)(r.borderRightWidth), n;
}
function Zs(e) {
  var n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n -= (0, Me.int)(r.paddingTop), n -= (0, Me.int)(r.paddingBottom), n;
}
function eo(e) {
  var n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n -= (0, Me.int)(r.paddingLeft), n -= (0, Me.int)(r.paddingRight), n;
}
function to(e, n, r) {
  var t = n === n.ownerDocument.body, i = t ? {
    left: 0,
    top: 0
  } : n.getBoundingClientRect(), s = (e.clientX + n.scrollLeft - i.left) / r, o = (e.clientY + n.scrollTop - i.top) / r;
  return {
    x: s,
    y: o
  };
}
function ro(e, n) {
  var r = Nr(e, n, "px");
  return ri({}, (0, un.browserPrefixToKey)("transform", un.default), r);
}
function no(e, n) {
  var r = Nr(e, n, "");
  return r;
}
function Nr(e, n, r) {
  var t = e.x, i = e.y, s = "translate(".concat(t).concat(r, ",").concat(i).concat(r, ")");
  if (n) {
    var o = "".concat(typeof n.x == "string" ? n.x : n.x + r), a = "".concat(typeof n.y == "string" ? n.y : n.y + r);
    s = "translate(".concat(o, ", ").concat(a, ")") + s;
  }
  return s;
}
function io(e, n) {
  return e.targetTouches && (0, Me.findInArray)(e.targetTouches, function(r) {
    return n === r.identifier;
  }) || e.changedTouches && (0, Me.findInArray)(e.changedTouches, function(r) {
    return n === r.identifier;
  });
}
function so(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function oo(e) {
  if (e) {
    var n = e.getElementById("react-draggable-style-el");
    n || (n = e.createElement("style"), n.type = "text/css", n.id = "react-draggable-style-el", n.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, n.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(n)), e.body && ii(e.body, "react-draggable-transparent-selection");
  }
}
function ao(e) {
  if (e)
    try {
      if (e.body && si(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var n = (e.defaultView || window).getSelection();
        n && n.type !== "Caret" && n.removeAllRanges();
      }
    } catch {
    }
}
function ii(e, n) {
  e.classList ? e.classList.add(n) : e.className.match(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"))) || (e.className += " ".concat(n));
}
function si(e, n) {
  e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"), "g"), "");
}
var Ue = {};
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.canDragX = co;
Ue.canDragY = fo;
Ue.createCoreData = ho;
Ue.createDraggableData = go;
Ue.getBoundPosition = uo;
Ue.getControlPosition = po;
Ue.snapToGrid = lo;
var ze = Ie, at = ae;
function uo(e, n, r) {
  if (!e.props.bounds)
    return [n, r];
  var t = e.props.bounds;
  t = typeof t == "string" ? t : vo(t);
  var i = Fr(e);
  if (typeof t == "string") {
    var s = i.ownerDocument, o = s.defaultView, a;
    if (t === "parent" ? a = i.parentNode : a = s.querySelector(t), !(a instanceof o.HTMLElement))
      throw new Error('Bounds selector "' + t + '" could not find an element.');
    var l = a, c = o.getComputedStyle(i), f = o.getComputedStyle(l);
    t = {
      left: -i.offsetLeft + (0, ze.int)(f.paddingLeft) + (0, ze.int)(c.marginLeft),
      top: -i.offsetTop + (0, ze.int)(f.paddingTop) + (0, ze.int)(c.marginTop),
      right: (0, at.innerWidth)(l) - (0, at.outerWidth)(i) - i.offsetLeft + (0, ze.int)(f.paddingRight) - (0, ze.int)(c.marginRight),
      bottom: (0, at.innerHeight)(l) - (0, at.outerHeight)(i) - i.offsetTop + (0, ze.int)(f.paddingBottom) - (0, ze.int)(c.marginBottom)
    };
  }
  return (0, ze.isNum)(t.right) && (n = Math.min(n, t.right)), (0, ze.isNum)(t.bottom) && (r = Math.min(r, t.bottom)), (0, ze.isNum)(t.left) && (n = Math.max(n, t.left)), (0, ze.isNum)(t.top) && (r = Math.max(r, t.top)), [n, r];
}
function lo(e, n, r) {
  var t = Math.round(n / e[0]) * e[0], i = Math.round(r / e[1]) * e[1];
  return [t, i];
}
function co(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function fo(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function po(e, n, r) {
  var t = typeof n == "number" ? (0, at.getTouch)(e, n) : null;
  if (typeof n == "number" && !t)
    return null;
  var i = Fr(r), s = r.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, at.offsetXYFromParent)(t || e, s, r.props.scale);
}
function ho(e, n, r) {
  var t = e.state, i = !(0, ze.isNum)(t.lastX), s = Fr(e);
  return i ? {
    node: s,
    deltaX: 0,
    deltaY: 0,
    lastX: n,
    lastY: r,
    x: n,
    y: r
  } : {
    node: s,
    deltaX: n - t.lastX,
    deltaY: r - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: n,
    y: r
  };
}
function go(e, n) {
  var r = e.props.scale;
  return {
    node: n.node,
    x: e.state.x + n.deltaX / r,
    y: e.state.y + n.deltaY / r,
    deltaX: n.deltaX / r,
    deltaY: n.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function vo(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Fr(e) {
  var n = e.findDOMNode();
  if (!n)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return n;
}
var er = {}, tr = {};
Object.defineProperty(tr, "__esModule", {
  value: !0
});
tr.default = yo;
function yo() {
}
function Xt(e) {
  "@babel/helpers - typeof";
  return Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xt(e);
}
Object.defineProperty(er, "__esModule", {
  value: !0
});
er.default = void 0;
var fr = bo(R), Re = Lr(zn), mo = Lr(Ht), ye = ae, Xe = Ue, dr = Ie, vt = Lr(tr);
function Lr(e) {
  return e && e.__esModule ? e : { default: e };
}
function oi(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (oi = function(i) {
    return i ? r : n;
  })(e);
}
function bo(e, n) {
  if (!n && e && e.__esModule)
    return e;
  if (e === null || Xt(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = oi(n);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, s) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, s, o) : t[s] = e[s];
    }
  return t.default = e, r && r.set(e, t), t;
}
function cn(e, n) {
  return _o(e) || xo(e, n) || So(e, n) || wo();
}
function wo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function So(e, n) {
  if (e) {
    if (typeof e == "string")
      return fn(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fn(e, n);
  }
}
function fn(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function xo(e, n) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t = [], i = !0, s = !1, o, a;
    try {
      for (r = r.call(e); !(i = (o = r.next()).done) && (t.push(o.value), !(n && t.length === n)); i = !0)
        ;
    } catch (l) {
      s = !0, a = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw a;
      }
    }
    return t;
  }
}
function _o(e) {
  if (Array.isArray(e))
    return e;
}
function Oo(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function dn(e, n) {
  for (var r = 0; r < n.length; r++) {
    var t = n[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function Do(e, n, r) {
  return n && dn(e.prototype, n), r && dn(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Eo(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && Sr(e, n);
}
function Sr(e, n) {
  return Sr = Object.setPrototypeOf || function(t, i) {
    return t.__proto__ = i, t;
  }, Sr(e, n);
}
function Ro(e) {
  var n = Po();
  return function() {
    var t = Qt(e), i;
    if (n) {
      var s = Qt(this).constructor;
      i = Reflect.construct(t, arguments, s);
    } else
      i = t.apply(this, arguments);
    return zo(this, i);
  };
}
function zo(e, n) {
  if (n && (Xt(n) === "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return me(e);
}
function me(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Po() {
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
function Qt(e) {
  return Qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qt(e);
}
function ke(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
var Fe = {
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
}, Qe = Fe.mouse, rr = /* @__PURE__ */ function(e) {
  Eo(r, e);
  var n = Ro(r);
  function r() {
    var t;
    Oo(this, r);
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return t = n.call.apply(n, [this].concat(s)), ke(me(t), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), ke(me(t), "mounted", !1), ke(me(t), "handleDragStart", function(a) {
      if (t.props.onMouseDown(a), !t.props.allowAnyClick && typeof a.button == "number" && a.button !== 0)
        return !1;
      var l = t.findDOMNode();
      if (!l || !l.ownerDocument || !l.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var c = l.ownerDocument;
      if (!(t.props.disabled || !(a.target instanceof c.defaultView.Node) || t.props.handle && !(0, ye.matchesSelectorAndParentsTo)(a.target, t.props.handle, l) || t.props.cancel && (0, ye.matchesSelectorAndParentsTo)(a.target, t.props.cancel, l))) {
        a.type === "touchstart" && a.preventDefault();
        var f = (0, ye.getTouchIdentifier)(a);
        t.setState({
          touchIdentifier: f
        });
        var h = (0, Xe.getControlPosition)(a, f, me(t));
        if (h != null) {
          var p = h.x, g = h.y, m = (0, Xe.createCoreData)(me(t), p, g);
          (0, vt.default)("DraggableCore: handleDragStart: %j", m), (0, vt.default)("calling", t.props.onStart);
          var w = t.props.onStart(a, m);
          w === !1 || t.mounted === !1 || (t.props.enableUserSelectHack && (0, ye.addUserSelectStyles)(c), t.setState({
            dragging: !0,
            lastX: p,
            lastY: g
          }), (0, ye.addEvent)(c, Qe.move, t.handleDrag), (0, ye.addEvent)(c, Qe.stop, t.handleDragStop));
        }
      }
    }), ke(me(t), "handleDrag", function(a) {
      var l = (0, Xe.getControlPosition)(a, t.state.touchIdentifier, me(t));
      if (l != null) {
        var c = l.x, f = l.y;
        if (Array.isArray(t.props.grid)) {
          var h = c - t.state.lastX, p = f - t.state.lastY, g = (0, Xe.snapToGrid)(t.props.grid, h, p), m = cn(g, 2);
          if (h = m[0], p = m[1], !h && !p)
            return;
          c = t.state.lastX + h, f = t.state.lastY + p;
        }
        var w = (0, Xe.createCoreData)(me(t), c, f);
        (0, vt.default)("DraggableCore: handleDrag: %j", w);
        var T = t.props.onDrag(a, w);
        if (T === !1 || t.mounted === !1) {
          try {
            t.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var E = document.createEvent("MouseEvents");
            E.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(E);
          }
          return;
        }
        t.setState({
          lastX: c,
          lastY: f
        });
      }
    }), ke(me(t), "handleDragStop", function(a) {
      if (t.state.dragging) {
        var l = (0, Xe.getControlPosition)(a, t.state.touchIdentifier, me(t));
        if (l != null) {
          var c = l.x, f = l.y;
          if (Array.isArray(t.props.grid)) {
            var h = c - t.state.lastX || 0, p = f - t.state.lastY || 0, g = (0, Xe.snapToGrid)(t.props.grid, h, p), m = cn(g, 2);
            h = m[0], p = m[1], c = t.state.lastX + h, f = t.state.lastY + p;
          }
          var w = (0, Xe.createCoreData)(me(t), c, f), T = t.props.onStop(a, w);
          if (T === !1 || t.mounted === !1)
            return !1;
          var E = t.findDOMNode();
          E && t.props.enableUserSelectHack && (0, ye.removeUserSelectStyles)(E.ownerDocument), (0, vt.default)("DraggableCore: handleDragStop: %j", w), t.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), E && ((0, vt.default)("DraggableCore: Removing handlers"), (0, ye.removeEvent)(E.ownerDocument, Qe.move, t.handleDrag), (0, ye.removeEvent)(E.ownerDocument, Qe.stop, t.handleDragStop));
        }
      }
    }), ke(me(t), "onMouseDown", function(a) {
      return Qe = Fe.mouse, t.handleDragStart(a);
    }), ke(me(t), "onMouseUp", function(a) {
      return Qe = Fe.mouse, t.handleDragStop(a);
    }), ke(me(t), "onTouchStart", function(a) {
      return Qe = Fe.touch, t.handleDragStart(a);
    }), ke(me(t), "onTouchEnd", function(a) {
      return Qe = Fe.touch, t.handleDragStop(a);
    }), t;
  }
  return Do(r, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var i = this.findDOMNode();
      i && (0, ye.addEvent)(i, Fe.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.findDOMNode();
      if (i) {
        var s = i.ownerDocument;
        (0, ye.removeEvent)(s, Fe.mouse.move, this.handleDrag), (0, ye.removeEvent)(s, Fe.touch.move, this.handleDrag), (0, ye.removeEvent)(s, Fe.mouse.stop, this.handleDragStop), (0, ye.removeEvent)(s, Fe.touch.stop, this.handleDragStop), (0, ye.removeEvent)(i, Fe.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, ye.removeUserSelectStyles)(s);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var i, s, o;
      return (i = this.props) !== null && i !== void 0 && i.nodeRef ? (s = this.props) === null || s === void 0 || (o = s.nodeRef) === null || o === void 0 ? void 0 : o.current : mo.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ fr.cloneElement(fr.Children.only(this.props.children), {
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
}(fr.Component);
er.default = rr;
ke(rr, "displayName", "DraggableCore");
ke(rr, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: Re.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: Re.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: Re.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(n, r) {
    if (n[r] && n[r].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: Re.default.arrayOf(Re.default.number),
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
  handle: Re.default.string,
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
  cancel: Re.default.string,
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
  nodeRef: Re.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: Re.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: Re.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: Re.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: Re.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: Re.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: dr.dontSetMe,
  style: dr.dontSetMe,
  transform: dr.dontSetMe
});
ke(rr, "defaultProps", {
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
  function n(y) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
      return typeof S;
    } : function(S) {
      return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    }, n(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return c.default;
    }
  }), e.default = void 0;
  var r = m(R), t = p(zn), i = p(Ht), s = p(Ws), o = ae, a = Ue, l = Ie, c = p(er), f = p(tr), h = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function p(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function g(y) {
    if (typeof WeakMap != "function")
      return null;
    var S = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (g = function(D) {
      return D ? x : S;
    })(y);
  }
  function m(y, S) {
    if (!S && y && y.__esModule)
      return y;
    if (y === null || n(y) !== "object" && typeof y != "function")
      return { default: y };
    var x = g(S);
    if (x && x.has(y))
      return x.get(y);
    var O = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var W in y)
      if (W !== "default" && Object.prototype.hasOwnProperty.call(y, W)) {
        var $ = D ? Object.getOwnPropertyDescriptor(y, W) : null;
        $ && ($.get || $.set) ? Object.defineProperty(O, W, $) : O[W] = y[W];
      }
    return O.default = y, x && x.set(y, O), O;
  }
  function w() {
    return w = Object.assign || function(y) {
      for (var S = 1; S < arguments.length; S++) {
        var x = arguments[S];
        for (var O in x)
          Object.prototype.hasOwnProperty.call(x, O) && (y[O] = x[O]);
      }
      return y;
    }, w.apply(this, arguments);
  }
  function T(y, S) {
    if (y == null)
      return {};
    var x = E(y, S), O, D;
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(y);
      for (D = 0; D < W.length; D++)
        O = W[D], !(S.indexOf(O) >= 0) && Object.prototype.propertyIsEnumerable.call(y, O) && (x[O] = y[O]);
    }
    return x;
  }
  function E(y, S) {
    if (y == null)
      return {};
    var x = {}, O = Object.keys(y), D, W;
    for (W = 0; W < O.length; W++)
      D = O[W], !(S.indexOf(D) >= 0) && (x[D] = y[D]);
    return x;
  }
  function b(y, S) {
    var x = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(y);
      S && (O = O.filter(function(D) {
        return Object.getOwnPropertyDescriptor(y, D).enumerable;
      })), x.push.apply(x, O);
    }
    return x;
  }
  function M(y) {
    for (var S = 1; S < arguments.length; S++) {
      var x = arguments[S] != null ? arguments[S] : {};
      S % 2 ? b(Object(x), !0).forEach(function(O) {
        ie(y, O, x[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(x)) : b(Object(x)).forEach(function(O) {
        Object.defineProperty(y, O, Object.getOwnPropertyDescriptor(x, O));
      });
    }
    return y;
  }
  function A(y, S) {
    return j(y) || H(y, S) || ee(y, S) || N();
  }
  function N() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ee(y, S) {
    if (y) {
      if (typeof y == "string")
        return q(y, S);
      var x = Object.prototype.toString.call(y).slice(8, -1);
      if (x === "Object" && y.constructor && (x = y.constructor.name), x === "Map" || x === "Set")
        return Array.from(y);
      if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))
        return q(y, S);
    }
  }
  function q(y, S) {
    (S == null || S > y.length) && (S = y.length);
    for (var x = 0, O = new Array(S); x < S; x++)
      O[x] = y[x];
    return O;
  }
  function H(y, S) {
    var x = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (x != null) {
      var O = [], D = !0, W = !1, $, I;
      try {
        for (x = x.call(y); !(D = ($ = x.next()).done) && (O.push($.value), !(S && O.length === S)); D = !0)
          ;
      } catch (Y) {
        W = !0, I = Y;
      } finally {
        try {
          !D && x.return != null && x.return();
        } finally {
          if (W)
            throw I;
        }
      }
      return O;
    }
  }
  function j(y) {
    if (Array.isArray(y))
      return y;
  }
  function L(y, S) {
    if (!(y instanceof S))
      throw new TypeError("Cannot call a class as a function");
  }
  function U(y, S) {
    for (var x = 0; x < S.length; x++) {
      var O = S[x];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(y, O.key, O);
    }
  }
  function C(y, S, x) {
    return S && U(y.prototype, S), x && U(y, x), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function F(y, S) {
    if (typeof S != "function" && S !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(S && S.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), S && X(y, S);
  }
  function X(y, S) {
    return X = Object.setPrototypeOf || function(O, D) {
      return O.__proto__ = D, O;
    }, X(y, S);
  }
  function J(y) {
    var S = Z();
    return function() {
      var O = te(y), D;
      if (S) {
        var W = te(this).constructor;
        D = Reflect.construct(O, arguments, W);
      } else
        D = O.apply(this, arguments);
      return G(this, D);
    };
  }
  function G(y, S) {
    if (S && (n(S) === "object" || typeof S == "function"))
      return S;
    if (S !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return K(y);
  }
  function K(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function Z() {
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
  function te(y) {
    return te = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
      return x.__proto__ || Object.getPrototypeOf(x);
    }, te(y);
  }
  function ie(y, S, x) {
    return S in y ? Object.defineProperty(y, S, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : y[S] = x, y;
  }
  var pe = /* @__PURE__ */ function(y) {
    F(x, y);
    var S = J(x);
    function x(O) {
      var D;
      return L(this, x), D = S.call(this, O), ie(K(D), "onDragStart", function(W, $) {
        (0, f.default)("Draggable: onDragStart: %j", $);
        var I = D.props.onStart(W, (0, a.createDraggableData)(K(D), $));
        if (I === !1)
          return !1;
        D.setState({
          dragging: !0,
          dragged: !0
        });
      }), ie(K(D), "onDrag", function(W, $) {
        if (!D.state.dragging)
          return !1;
        (0, f.default)("Draggable: onDrag: %j", $);
        var I = (0, a.createDraggableData)(K(D), $), Y = {
          x: I.x,
          y: I.y
        };
        if (D.props.bounds) {
          var be = Y.x, he = Y.y;
          Y.x += D.state.slackX, Y.y += D.state.slackY;
          var we = (0, a.getBoundPosition)(K(D), Y.x, Y.y), _e = A(we, 2), Ce = _e[0], Be = _e[1];
          Y.x = Ce, Y.y = Be, Y.slackX = D.state.slackX + (be - Y.x), Y.slackY = D.state.slackY + (he - Y.y), I.x = Y.x, I.y = Y.y, I.deltaX = Y.x - D.state.x, I.deltaY = Y.y - D.state.y;
        }
        var Se = D.props.onDrag(W, I);
        if (Se === !1)
          return !1;
        D.setState(Y);
      }), ie(K(D), "onDragStop", function(W, $) {
        if (!D.state.dragging)
          return !1;
        var I = D.props.onStop(W, (0, a.createDraggableData)(K(D), $));
        if (I === !1)
          return !1;
        (0, f.default)("Draggable: onDragStop: %j", $);
        var Y = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, be = !!D.props.position;
        if (be) {
          var he = D.props.position, we = he.x, _e = he.y;
          Y.x = we, Y.y = _e;
        }
        D.setState(Y);
      }), D.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: O.position ? O.position.x : O.defaultPosition.x,
        y: O.position ? O.position.y : O.defaultPosition.y,
        prevPropsPosition: M({}, O.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, O.position && !(O.onDrag || O.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), D;
    }
    return C(x, [{
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
        var D, W, $;
        return (D = (W = this.props) === null || W === void 0 || ($ = W.nodeRef) === null || $ === void 0 ? void 0 : $.current) !== null && D !== void 0 ? D : i.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var D, W = this.props;
        W.axis, W.bounds;
        var $ = W.children, I = W.defaultPosition, Y = W.defaultClassName, be = W.defaultClassNameDragging, he = W.defaultClassNameDragged, we = W.position, _e = W.positionOffset;
        W.scale;
        var Ce = T(W, h), Be = {}, Se = null, Ne = !!we, u = !Ne || this.state.dragging, d = we || I, v = {
          // Set left if horizontal drag is enabled
          x: (0, a.canDragX)(this) && u ? this.state.x : d.x,
          // Set top if vertical drag is enabled
          y: (0, a.canDragY)(this) && u ? this.state.y : d.y
        };
        this.state.isElementSVG ? Se = (0, o.createSVGTransform)(v, _e) : Be = (0, o.createCSSTransform)(v, _e);
        var k = (0, s.default)($.props.className || "", Y, (D = {}, ie(D, be, this.state.dragging), ie(D, he, this.state.dragged), D));
        return /* @__PURE__ */ r.createElement(c.default, w({}, Ce, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only($), {
          className: k,
          style: M(M({}, $.props.style), Be),
          transform: Se
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(D, W) {
          var $ = D.position, I = W.prevPropsPosition;
          return $ && (!I || $.x !== I.x || $.y !== I.y) ? ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
            position: $,
            prevPropsPosition: I
          }), {
            x: $.x,
            y: $.y,
            prevPropsPosition: M({}, $)
          }) : null;
        }
      )
    }]), x;
  }(r.Component);
  e.default = pe, ie(pe, "displayName", "Draggable"), ie(pe, "propTypes", M(M({}, c.default.propTypes), {}, {
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
  })), ie(pe, "defaultProps", M(M({}, c.default.defaultProps), {}, {
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
})(Kn);
var ai = Kn, ui = ai.default, To = ai.DraggableCore;
Zt.exports = ui;
Zt.exports.default = ui;
Zt.exports.DraggableCore = To;
var Mo = Zt.exports;
const Co = /* @__PURE__ */ Dn(Mo);
var ko = globalThis && globalThis.__extends || function() {
  var e = function(n, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }, e(n, r);
  };
  return function(n, r) {
    e(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Kt = globalThis && globalThis.__assign || function() {
  return Kt = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Kt.apply(this, arguments);
}, Ao = {
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
}, No = (
  /** @class */
  function(e) {
    ko(n, e);
    function n() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.onMouseDown = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r.onTouchStart = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r;
    }
    return n.prototype.render = function() {
      return R.createElement("div", { className: this.props.className || "", style: Kt(Kt({ position: "absolute", userSelect: "none" }, Ao[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, n;
  }(R.PureComponent)
), Wr = { exports: {} };
function Fo(e, n) {
  var r = n && n.cache ? n.cache : Ho, t = n && n.serializer ? n.serializer : Vo, i = n && n.strategy ? n.strategy : Wo;
  return i(e, {
    cache: r,
    serializer: t
  });
}
function Lo(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function li(e, n, r, t) {
  var i = Lo(t) ? t : r(t), s = n.get(i);
  return typeof s > "u" && (s = e.call(this, t), n.set(i, s)), s;
}
function ci(e, n, r) {
  var t = Array.prototype.slice.call(arguments, 3), i = r(t), s = n.get(i);
  return typeof s > "u" && (s = e.apply(this, t), n.set(i, s)), s;
}
function Br(e, n, r, t, i) {
  return r.bind(
    n,
    e,
    t,
    i
  );
}
function Wo(e, n) {
  var r = e.length === 1 ? li : ci;
  return Br(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function Bo(e, n) {
  var r = ci;
  return Br(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function jo(e, n) {
  var r = li;
  return Br(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function Vo() {
  return JSON.stringify(arguments);
}
function nr() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
nr.prototype.has = function(e) {
  return e in this.cache;
};
nr.prototype.get = function(e) {
  return this.cache[e];
};
nr.prototype.set = function(e, n) {
  this.cache[e] = n;
};
var Ho = {
  create: function() {
    return new nr();
  }
};
Wr.exports = Fo;
Wr.exports.strategies = {
  variadic: Bo,
  monadic: jo
};
var Io = Wr.exports;
const rt = /* @__PURE__ */ Dn(Io);
var Uo = globalThis && globalThis.__extends || function() {
  var e = function(n, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }, e(n, r);
  };
  return function(n, r) {
    e(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Ve = globalThis && globalThis.__assign || function() {
  return Ve = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Ve.apply(this, arguments);
}, $o = {
  width: "auto",
  height: "auto"
}, At = rt(function(e, n, r) {
  return Math.max(Math.min(e, r), n);
}), pn = rt(function(e, n) {
  return Math.round(e / n) * n;
}), st = rt(function(e, n) {
  return new RegExp(e, "i").test(n);
}), Nt = function(e) {
  return !!(e.touches && e.touches.length);
}, qo = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, hn = rt(function(e, n, r) {
  r === void 0 && (r = 0);
  var t = n.reduce(function(s, o, a) {
    return Math.abs(o - e) < Math.abs(n[s] - e) ? a : s;
  }, 0), i = Math.abs(n[t] - e);
  return r === 0 || i < r ? n[t] : e;
}), de = rt(function(e, n) {
  return e.substr(e.length - n.length, n.length) === n;
}), pr = rt(function(e) {
  return e = e.toString(), e === "auto" || de(e, "px") || de(e, "%") || de(e, "vh") || de(e, "vw") || de(e, "vmax") || de(e, "vmin") ? e : e + "px";
}), Ft = function(e, n, r, t) {
  if (e && typeof e == "string") {
    if (de(e, "px"))
      return Number(e.replace("px", ""));
    if (de(e, "%")) {
      var i = Number(e.replace("%", "")) / 100;
      return n * i;
    }
    if (de(e, "vw")) {
      var i = Number(e.replace("vw", "")) / 100;
      return r * i;
    }
    if (de(e, "vh")) {
      var i = Number(e.replace("vh", "")) / 100;
      return t * i;
    }
  }
  return e;
}, Yo = rt(function(e, n, r, t, i, s, o) {
  return t = Ft(t, e.width, n, r), i = Ft(i, e.height, n, r), s = Ft(s, e.width, n, r), o = Ft(o, e.height, n, r), {
    maxWidth: typeof t > "u" ? void 0 : Number(t),
    maxHeight: typeof i > "u" ? void 0 : Number(i),
    minWidth: typeof s > "u" ? void 0 : Number(s),
    minHeight: typeof o > "u" ? void 0 : Number(o)
  };
}), Xo = [
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
], gn = "__resizable_base__", Qo = (
  /** @class */
  function(e) {
    Uo(n, e);
    function n(r) {
      var t = e.call(this, r) || this;
      return t.ratio = 1, t.resizable = null, t.parentLeft = 0, t.parentTop = 0, t.resizableLeft = 0, t.resizableRight = 0, t.resizableTop = 0, t.resizableBottom = 0, t.targetLeft = 0, t.targetTop = 0, t.appendBase = function() {
        if (!t.resizable || !t.window)
          return null;
        var i = t.parentNode;
        if (!i)
          return null;
        var s = t.window.document.createElement("div");
        return s.style.width = "100%", s.style.height = "100%", s.style.position = "absolute", s.style.transform = "scale(0, 0)", s.style.left = "0", s.style.flex = "0 0 100%", s.classList ? s.classList.add(gn) : s.className += gn, i.appendChild(s), s;
      }, t.removeBase = function(i) {
        var s = t.parentNode;
        s && s.removeChild(i);
      }, t.ref = function(i) {
        i && (t.resizable = i);
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
    return Object.defineProperty(n.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || $o;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "size", {
      get: function() {
        var r = 0, t = 0;
        if (this.resizable && this.window) {
          var i = this.resizable.offsetWidth, s = this.resizable.offsetHeight, o = this.resizable.style.position;
          o !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : i, t = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : s, this.resizable.style.position = o;
        }
        return { width: r, height: t };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "sizeStyle", {
      get: function() {
        var r = this, t = this.props.size, i = function(a) {
          if (typeof r.state[a] > "u" || r.state[a] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[a] && de(r.propsSize[a].toString(), "%")) {
            if (de(r.state[a].toString(), "%"))
              return r.state[a].toString();
            var l = r.getParentSize(), c = Number(r.state[a].toString().replace("px", "")), f = c / l[a] * 100;
            return f + "%";
          }
          return pr(r.state[a]);
        }, s = t && typeof t.width < "u" && !this.state.isResizing ? pr(t.width) : i("width"), o = t && typeof t.height < "u" && !this.state.isResizing ? pr(t.height) : i("height");
        return { width: s, height: o };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var r = this.appendBase();
      if (!r)
        return { width: 0, height: 0 };
      var t = !1, i = this.parentNode.style.flexWrap;
      i !== "wrap" && (t = !0, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var s = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return t && (this.parentNode.style.flexWrap = i), this.removeBase(r), s;
    }, n.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, n.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, n.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var r = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0
        });
      }
    }, n.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, n.prototype.createSizeForCssProperty = function(r, t) {
      var i = this.propsSize && this.propsSize[t];
      return this.state[t] === "auto" && this.state.original[t] === r && (typeof i > "u" || i === "auto") ? "auto" : r;
    }, n.prototype.calculateNewMaxFromBoundary = function(r, t) {
      var i = this.props.boundsByDirection, s = this.state.direction, o = i && st("left", s), a = i && st("top", s), l, c;
      if (this.props.bounds === "parent") {
        var f = this.parentNode;
        f && (l = o ? this.resizableRight - this.parentLeft : f.offsetWidth + (this.parentLeft - this.resizableLeft), c = a ? this.resizableBottom - this.parentTop : f.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (l = o ? this.resizableRight : this.window.innerWidth - this.resizableLeft, c = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (l = o ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), c = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return l && Number.isFinite(l) && (r = r && r < l ? r : l), c && Number.isFinite(c) && (t = t && t < c ? t : c), { maxWidth: r, maxHeight: t };
    }, n.prototype.calculateNewSizeFromDirection = function(r, t) {
      var i = this.props.scale || 1, s = this.props.resizeRatio || 1, o = this.state, a = o.direction, l = o.original, c = this.props, f = c.lockAspectRatio, h = c.lockAspectRatioExtraHeight, p = c.lockAspectRatioExtraWidth, g = l.width, m = l.height, w = h || 0, T = p || 0;
      return st("right", a) && (g = l.width + (r - l.x) * s / i, f && (m = (g - T) / this.ratio + w)), st("left", a) && (g = l.width - (r - l.x) * s / i, f && (m = (g - T) / this.ratio + w)), st("bottom", a) && (m = l.height + (t - l.y) * s / i, f && (g = (m - w) * this.ratio + T)), st("top", a) && (m = l.height - (t - l.y) * s / i, f && (g = (m - w) * this.ratio + T)), { newWidth: g, newHeight: m };
    }, n.prototype.calculateNewSizeFromAspectRatio = function(r, t, i, s) {
      var o = this.props, a = o.lockAspectRatio, l = o.lockAspectRatioExtraHeight, c = o.lockAspectRatioExtraWidth, f = typeof s.width > "u" ? 10 : s.width, h = typeof i.width > "u" || i.width < 0 ? r : i.width, p = typeof s.height > "u" ? 10 : s.height, g = typeof i.height > "u" || i.height < 0 ? t : i.height, m = l || 0, w = c || 0;
      if (a) {
        var T = (p - m) * this.ratio + w, E = (g - m) * this.ratio + w, b = (f - w) / this.ratio + m, M = (h - w) / this.ratio + m, A = Math.max(f, T), N = Math.min(h, E), ee = Math.max(p, b), q = Math.min(g, M);
        r = At(r, A, N), t = At(t, ee, q);
      } else
        r = At(r, f, h), t = At(t, p, g);
      return { newWidth: r, newHeight: t };
    }, n.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var r = this.parentNode;
        if (r) {
          var t = r.getBoundingClientRect();
          this.parentLeft = t.left, this.parentTop = t.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var i = this.props.bounds.getBoundingClientRect();
        this.targetLeft = i.left, this.targetTop = i.top;
      }
      if (this.resizable) {
        var s = this.resizable.getBoundingClientRect(), o = s.left, a = s.top, l = s.right, c = s.bottom;
        this.resizableLeft = o, this.resizableRight = l, this.resizableTop = a, this.resizableBottom = c;
      }
    }, n.prototype.onResizeStart = function(r, t) {
      if (!(!this.resizable || !this.window)) {
        var i = 0, s = 0;
        if (r.nativeEvent && qo(r.nativeEvent) ? (i = r.nativeEvent.clientX, s = r.nativeEvent.clientY) : r.nativeEvent && Nt(r.nativeEvent) && (i = r.nativeEvent.touches[0].clientX, s = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var o = this.props.onResizeStart(r, t, this.resizable);
          if (o === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var a, l = this.window.getComputedStyle(this.resizable);
        if (l.flexBasis !== "auto") {
          var c = this.parentNode;
          if (c) {
            var f = this.window.getComputedStyle(c).flexDirection;
            this.flexDir = f.startsWith("row") ? "row" : "column", a = l.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var h = {
          original: {
            x: i,
            y: s,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: Ve(Ve({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: t,
          flexBasis: a
        };
        this.setState(h);
      }
    }, n.prototype.onMouseMove = function(r) {
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && Nt(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var t = this.props, i = t.maxWidth, s = t.maxHeight, o = t.minWidth, a = t.minHeight, l = Nt(r) ? r.touches[0].clientX : r.clientX, c = Nt(r) ? r.touches[0].clientY : r.clientY, f = this.state, h = f.direction, p = f.original, g = f.width, m = f.height, w = this.getParentSize(), T = Yo(w, this.window.innerWidth, this.window.innerHeight, i, s, o, a);
        i = T.maxWidth, s = T.maxHeight, o = T.minWidth, a = T.minHeight;
        var E = this.calculateNewSizeFromDirection(l, c), b = E.newHeight, M = E.newWidth, A = this.calculateNewMaxFromBoundary(i, s);
        this.props.snap && this.props.snap.x && (M = hn(M, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (b = hn(b, this.props.snap.y, this.props.snapGap));
        var N = this.calculateNewSizeFromAspectRatio(M, b, { width: A.maxWidth, height: A.maxHeight }, { width: o, height: a });
        if (M = N.newWidth, b = N.newHeight, this.props.grid) {
          var ee = pn(M, this.props.grid[0]), q = pn(b, this.props.grid[1]), H = this.props.snapGap || 0;
          M = H === 0 || Math.abs(ee - M) <= H ? ee : M, b = H === 0 || Math.abs(q - b) <= H ? q : b;
        }
        var j = {
          width: M - p.width,
          height: b - p.height
        };
        if (g && typeof g == "string") {
          if (de(g, "%")) {
            var L = M / w.width * 100;
            M = L + "%";
          } else if (de(g, "vw")) {
            var U = M / this.window.innerWidth * 100;
            M = U + "vw";
          } else if (de(g, "vh")) {
            var C = M / this.window.innerHeight * 100;
            M = C + "vh";
          }
        }
        if (m && typeof m == "string") {
          if (de(m, "%")) {
            var L = b / w.height * 100;
            b = L + "%";
          } else if (de(m, "vw")) {
            var U = b / this.window.innerWidth * 100;
            b = U + "vw";
          } else if (de(m, "vh")) {
            var C = b / this.window.innerHeight * 100;
            b = C + "vh";
          }
        }
        var F = {
          width: this.createSizeForCssProperty(M, "width"),
          height: this.createSizeForCssProperty(b, "height")
        };
        this.flexDir === "row" ? F.flexBasis = F.width : this.flexDir === "column" && (F.flexBasis = F.height), this.setState(F), this.props.onResize && this.props.onResize(r, h, this.resizable, j);
      }
    }, n.prototype.onMouseUp = function(r) {
      var t = this.state, i = t.isResizing, s = t.direction, o = t.original;
      if (!(!i || !this.resizable)) {
        var a = {
          width: this.size.width - o.width,
          height: this.size.height - o.height
        };
        this.props.onResizeStop && this.props.onResizeStop(r, s, this.resizable, a), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: Ve(Ve({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, n.prototype.updateSize = function(r) {
      this.setState({ width: r.width, height: r.height });
    }, n.prototype.renderResizer = function() {
      var r = this, t = this.props, i = t.enable, s = t.handleStyles, o = t.handleClasses, a = t.handleWrapperStyle, l = t.handleWrapperClass, c = t.handleComponent;
      if (!i)
        return null;
      var f = Object.keys(i).map(function(h) {
        return i[h] !== !1 ? R.createElement(No, { key: h, direction: h, onResizeStart: r.onResizeStart, replaceStyles: s && s[h], className: o && o[h] }, c && c[h] ? c[h] : null) : null;
      });
      return R.createElement("div", { className: l, style: a }, f);
    }, n.prototype.render = function() {
      var r = this, t = Object.keys(this.props).reduce(function(o, a) {
        return Xo.indexOf(a) !== -1 || (o[a] = r.props[a]), o;
      }, {}), i = Ve(Ve(Ve({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
      var s = this.props.as || "div";
      return R.createElement(
        s,
        Ve({ ref: this.ref, style: i, className: this.props.className }, t),
        this.state.isResizing && R.createElement("div", { style: this.state.backgroundStyle }),
        this.props.children,
        this.renderResizer()
      );
    }, n.defaultProps = {
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
    }, n;
  }(R.PureComponent)
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
var xr = function(e, n) {
  return xr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var i in t)
      t.hasOwnProperty(i) && (r[i] = t[i]);
  }, xr(e, n);
};
function Ko(e, n) {
  xr(e, n);
  function r() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
var ue = function() {
  return ue = Object.assign || function(n) {
    for (var r, t = 1, i = arguments.length; t < i; t++) {
      r = arguments[t];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
    }
    return n;
  }, ue.apply(this, arguments);
};
function Go(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
      n.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
  return r;
}
var Jo = Co, Zo = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, ea = function(e) {
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
}, Ua = (
  /** @class */
  function(e) {
    Ko(n, e);
    function n(r) {
      var t = e.call(this, r) || this;
      return t.resizingPosition = { x: 0, y: 0 }, t.offsetFromParent = { left: 0, top: 0 }, t.resizableElement = { current: null }, t.originalPosition = { x: 0, y: 0 }, t.refDraggable = function(i) {
        i && (t.draggable = i);
      }, t.refResizable = function(i) {
        i && (t.resizable = i, t.resizableElement.current = i.resizable);
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
    return n.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var r = this.offsetFromParent, t = r.left, i = r.top, s = this.getDraggablePosition(), o = s.x, a = s.y;
      this.draggable.setState({
        x: o - t,
        y: a - i
      }), this.forceUpdate();
    }, n.prototype.getDraggablePosition = function() {
      var r = this.draggable.state, t = r.x, i = r.y;
      return { x: t, y: i };
    }, n.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, n.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, n.prototype.getMaxSizesFromProps = function() {
      var r = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, t = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: r, maxHeight: t };
    }, n.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, n.prototype.getOffsetHeight = function(r) {
      var t = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / t;
        case "body":
          return document.body.offsetHeight / t;
        default:
          return r.offsetHeight;
      }
    }, n.prototype.getOffsetWidth = function(r) {
      var t = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / t;
        case "body":
          return document.body.offsetWidth / t;
        default:
          return r.offsetWidth;
      }
    }, n.prototype.onDragStart = function(r, t) {
      this.props.onDragStart && this.props.onDragStart(r, t);
      var i = this.getDraggablePosition();
      if (this.originalPosition = i, !!this.props.bounds) {
        var s = this.getParent(), o = this.props.scale, a;
        if (this.props.bounds === "parent")
          a = s;
        else if (this.props.bounds === "body") {
          var l = s.getBoundingClientRect(), c = l.left, f = l.top, h = document.body.getBoundingClientRect(), p = -(c - s.offsetLeft * o - h.left) / o, g = -(f - s.offsetTop * o - h.top) / o, m = (document.body.offsetWidth - this.resizable.size.width * o) / o + p, w = (document.body.offsetHeight - this.resizable.size.height * o) / o + g;
          return this.setState({ bounds: { top: g, right: m, bottom: w, left: p } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var T = s.getBoundingClientRect(), E = T.left, b = T.top, M = -(E - s.offsetLeft * o) / o, A = -(b - s.offsetTop * o) / o, m = (window.innerWidth - this.resizable.size.width * o) / o + M, w = (window.innerHeight - this.resizable.size.height * o) / o + A;
          return this.setState({ bounds: { top: A, right: m, bottom: w, left: M } });
        } else
          typeof this.props.bounds == "string" ? a = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (a = this.props.bounds);
        if (!(!(a instanceof HTMLElement) || !(s instanceof HTMLElement))) {
          var N = a.getBoundingClientRect(), ee = N.left, q = N.top, H = s.getBoundingClientRect(), j = H.left, L = H.top, U = (ee - j) / o, C = q - L;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var F = this.offsetFromParent;
            this.setState({
              bounds: {
                top: C - F.top,
                right: U + (a.offsetWidth - this.resizable.size.width) - F.left / o,
                bottom: C + (a.offsetHeight - this.resizable.size.height) - F.top,
                left: U - F.left / o
              }
            });
          }
        }
      }
    }, n.prototype.onDrag = function(r, t) {
      if (this.props.onDrag) {
        var i = this.offsetFromParent, s = i.left, o = i.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, ue(ue({}, t), { x: t.x - s, y: t.y - o }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, ue(ue({}, t), { x: t.x + s, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, ue(ue({}, t), { x: this.originalPosition.x + s, y: t.y + o, deltaX: 0 }));
      }
    }, n.prototype.onDragStop = function(r, t) {
      if (this.props.onDragStop) {
        var i = this.offsetFromParent, s = i.left, o = i.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, ue(ue({}, t), { x: t.x + s, y: t.y + o }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, ue(ue({}, t), { x: t.x + s, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, ue(ue({}, t), { x: this.originalPosition.x + s, y: t.y + o, deltaX: 0 }));
      }
    }, n.prototype.onResizeStart = function(r, t, i) {
      r.stopPropagation(), this.setState({
        resizing: !0
      });
      var s = this.props.scale, o = this.offsetFromParent, a = this.getDraggablePosition();
      if (this.resizingPosition = { x: a.x + o.left, y: a.y + o.top }, this.originalPosition = a, this.props.bounds) {
        var l = this.getParent(), c = void 0;
        this.props.bounds === "parent" ? c = l : this.props.bounds === "body" ? c = document.body : this.props.bounds === "window" ? c = window : typeof this.props.bounds == "string" ? c = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (c = this.props.bounds);
        var f = this.getSelfElement();
        if (f instanceof Element && (c instanceof HTMLElement || c === window) && l instanceof HTMLElement) {
          var h = this.getMaxSizesFromProps(), p = h.maxWidth, g = h.maxHeight, m = this.getParentSize();
          if (p && typeof p == "string")
            if (p.endsWith("%")) {
              var w = Number(p.replace("%", "")) / 100;
              p = m.width * w;
            } else
              p.endsWith("px") && (p = Number(p.replace("px", "")));
          if (g && typeof g == "string")
            if (g.endsWith("%")) {
              var w = Number(g.replace("%", "")) / 100;
              g = m.width * w;
            } else
              g.endsWith("px") && (g = Number(g.replace("px", "")));
          var T = f.getBoundingClientRect(), E = T.left, b = T.top, M = this.props.bounds === "window" ? { left: 0, top: 0 } : c.getBoundingClientRect(), A = M.left, N = M.top, ee = this.getOffsetWidth(c), q = this.getOffsetHeight(c), H = t.toLowerCase().endsWith("left"), j = t.toLowerCase().endsWith("right"), L = t.startsWith("top"), U = t.startsWith("bottom");
          if ((H || L) && this.resizable) {
            var C = (E - A) / s + this.resizable.size.width;
            this.setState({ maxWidth: C > Number(p) ? p : C });
          }
          if (j || this.props.lockAspectRatio && !H && !L) {
            var C = ee + (A - E) / s;
            this.setState({ maxWidth: C > Number(p) ? p : C });
          }
          if ((L || H) && this.resizable) {
            var C = (b - N) / s + this.resizable.size.height;
            this.setState({
              maxHeight: C > Number(g) ? g : C
            });
          }
          if (U || this.props.lockAspectRatio && !L && !H) {
            var C = q + (N - b) / s;
            this.setState({
              maxHeight: C > Number(g) ? g : C
            });
          }
        }
      } else
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      this.props.onResizeStart && this.props.onResizeStart(r, t, i);
    }, n.prototype.onResize = function(r, t, i, s) {
      var o = { x: this.originalPosition.x, y: this.originalPosition.y }, a = -s.width, l = -s.height, c = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      c.indexOf(t) !== -1 && (t === "bottomLeft" ? o.x += a : (t === "topRight" || (o.x += a), o.y += l)), (o.x !== this.draggable.state.x || o.y !== this.draggable.state.y) && this.draggable.setState(o), this.updateOffsetFromParent();
      var f = this.offsetFromParent, h = this.getDraggablePosition().x + f.left, p = this.getDraggablePosition().y + f.top;
      this.resizingPosition = { x: h, y: p }, this.props.onResize && this.props.onResize(r, t, i, s, {
        x: h,
        y: p
      });
    }, n.prototype.onResizeStop = function(r, t, i, s) {
      this.setState({
        resizing: !1
      });
      var o = this.getMaxSizesFromProps(), a = o.maxWidth, l = o.maxHeight;
      this.setState({ maxWidth: a, maxHeight: l }), this.props.onResizeStop && this.props.onResizeStop(r, t, i, s, this.resizingPosition);
    }, n.prototype.updateSize = function(r) {
      this.resizable && this.resizable.updateSize({ width: r.width, height: r.height });
    }, n.prototype.updatePosition = function(r) {
      this.draggable.setState(r);
    }, n.prototype.updateOffsetFromParent = function() {
      var r = this.props.scale, t = this.getParent(), i = this.getSelfElement();
      if (!t || i === null)
        return {
          top: 0,
          left: 0
        };
      var s = t.getBoundingClientRect(), o = s.left, a = s.top, l = i.getBoundingClientRect(), c = this.getDraggablePosition(), f = t.scrollLeft, h = t.scrollTop;
      this.offsetFromParent = {
        left: l.left - o + f - c.x * r,
        top: l.top - a + h - c.y * r
      };
    }, n.prototype.render = function() {
      var r = this.props, t = r.disableDragging, i = r.style, s = r.dragHandleClassName, o = r.position, a = r.onMouseDown, l = r.onMouseUp, c = r.dragAxis, f = r.dragGrid, h = r.bounds, p = r.enableUserSelectHack, g = r.cancel, m = r.children;
      r.onResizeStart, r.onResize, r.onResizeStop, r.onDragStart, r.onDrag, r.onDragStop;
      var w = r.resizeHandleStyles, T = r.resizeHandleClasses, E = r.resizeHandleComponent, b = r.enableResizing, M = r.resizeGrid, A = r.resizeHandleWrapperClass, N = r.resizeHandleWrapperStyle, ee = r.scale, q = r.allowAnyClick, H = Go(r, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), j = this.props.default ? ue({}, this.props.default) : void 0;
      delete H.default;
      var L = t || s ? { cursor: "auto" } : { cursor: "move" }, U = ue(ue(ue({}, Zo), L), i), C = this.offsetFromParent, F = C.left, X = C.top, J;
      o && (J = {
        x: o.x - F,
        y: o.y - X
      });
      var G = this.state.resizing ? void 0 : J, K = this.state.resizing ? "both" : c;
      return R.createElement(
        Jo,
        { ref: this.refDraggable, handle: s ? ".".concat(s) : void 0, defaultPosition: j, onMouseDown: a, onMouseUp: l, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: K, disabled: t, grid: f, bounds: h ? this.state.bounds : void 0, position: G, enableUserSelectHack: p, cancel: g, scale: ee, allowAnyClick: q, nodeRef: this.resizableElement },
        R.createElement(Qo, ue({}, H, { ref: this.refResizable, defaultSize: j, size: this.props.size, enable: typeof b == "boolean" ? ea(b) : b, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: U, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: M, handleWrapperClass: A, handleWrapperStyle: N, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: w, handleClasses: T, handleComponent: E, scale: this.props.scale }), m)
      );
    }, n.defaultProps = {
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
    }, n;
  }(R.PureComponent)
), jr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = Qn;
  e.definition = {
    prefix: n.prefix,
    iconName: n.iconName,
    icon: [
      n.width,
      n.height,
      n.aliases,
      n.unicode,
      n.svgPathData
    ]
  }, e.faTimes = e.definition, e.prefix = n.prefix, e.iconName = n.iconName, e.width = n.width, e.height = n.height, e.ligatures = n.aliases, e.unicode = n.unicode, e.svgPathData = n.svgPathData, e.aliases = n.aliases;
})(jr);
const ta = [{
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
}], vn = (e, n = !1) => {
  let r = e.selectionStart || 0, t = e.selectionEnd || 0;
  const i = e.selectionDirection, s = ta.filter((o) => n ? !0 : !o.onBlur || !1).reduce((o, a) => {
    const l = o.replace(a.pattern, a.replace), c = l.length - o.length;
    return r += c, t += c, l;
  }, e.value);
  return setTimeout(() => {
    e.setSelectionRange(r, t, i || "none");
  }, 0), s;
}, ra = R.forwardRef(({
  placeholder: e = "Введите",
  ...n
}, r) => /* @__PURE__ */ B("input", { ref: r, placeholder: e, ...n })), na = ({
  label: e,
  helperText: n,
  className: r,
  inputWrapRef: t,
  onBlur: i,
  onFocus: s,
  error: o,
  afterItems: a,
  useTypograf: l = !0,
  disabled: c,
  isLoading: f,
  inputComponent: h = ra,
  ...p
}, g) => {
  const [m, w] = ne.useState(!1), {
    getRootProps: T,
    getInputProps: E
  } = Hi({
    error: !!o,
    onBlur: i,
    onFocus: s,
    disabled: c,
    inputRef: g,
    ...p
  }), {
    onBlur: b,
    onFocus: M,
    ...A
  } = E();
  A.value = A.value || "";
  const N = R.useCallback((H) => {
    c || (w(!0), M == null || M(H));
  }, [c, w, M]), ee = R.useCallback((H) => {
    var j;
    if (l) {
      const L = vn(H.target, !0);
      L !== H.target.value && (H.target.value = L, (j = A.onChange) == null || j.call(A, L));
    }
    w(!1), b == null || b(H);
  }, [w, b]);
  let q = /* @__PURE__ */ Ee("div", { className: r, ref: t, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, o ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, m && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : m ? {
    borderColor: "transparent",
    outlineWidth: "2px",
    outlineColor: "#7275bf"
  } : !c && {
    ":hover": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(114 117 191 / var(--tw-border-opacity))"
    }
  }], children: [
    f && /* @__PURE__ */ Ee("div", { css: {
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
      /* @__PURE__ */ B(Ye, { icon: On.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ B(h, { css: [{
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
    }], onFocus: N, onBlur: ee, onInput: (H) => {
      l && (H.currentTarget.value = vn(H.currentTarget));
    }, ...p, ...A, type: f ? "hidden" : p.type || "text" }),
    a && !c && /* @__PURE__ */ B("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: a })
  ] });
  return e && (q = /* @__PURE__ */ B(Jt, { label: e, error: o, helperText: n, ...T(), children: q })), q;
}, ht = R.forwardRef(na), ia = ({
  getTagProps: e,
  optionRender: n,
  getOptionLabel: r,
  items: t,
  isLoading: i,
  valueCount: s
}) => i ? /* @__PURE__ */ B("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: Array.from({
  length: s
}).map((o, a) => /* @__PURE__ */ B("div", { css: [{
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
}, zr`
              width: ${Math.round(Math.random() * 5) * 30 + 60}px;
              height: 30px;
            `] }, a)) }) : t && (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ B("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: t.map((o, a) => {
  const {
    onDelete: l,
    key: c,
    ...f
  } = e({
    index: a
  });
  return /* @__PURE__ */ Ee("div", { ...f, css: {
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
    /* @__PURE__ */ B("span", { children: n ? n(o) : r(o) }),
    /* @__PURE__ */ B("button", { onClick: l, children: /* @__PURE__ */ B(Ye, { icon: jr.faTimes, css: {
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    } }) })
  ] }, c);
}) }), fi = "id", sa = ({
  text: e = "Загрузка"
}) => {
  const [n, r] = R.useState("");
  return R.useEffect(() => {
    const t = setInterval(() => {
      r((i) => i.length < 3 ? i + "." : "");
    }, 300);
    return () => clearInterval(t);
  }, []), /* @__PURE__ */ Ee("span", { css: {
    "@keyframes pulse": {
      "50%": {
        opacity: ".5"
      }
    },
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  }, children: [
    e,
    n
  ] });
}, oa = ({
  className: e,
  isLoading: n = !1,
  inputLoading: r = !1,
  valueLoading: t = !1,
  idField: i = fi,
  displayField: s,
  options: o,
  multiple: a,
  open: l = !1,
  label: c,
  helperText: f,
  error: h,
  onOpen: p,
  onClose: g,
  optionRender: m,
  onChange: w,
  onInputChange: T,
  onSelect: E,
  disabled: b,
  placeholder: M = "Выберите",
  value: A,
  allowClear: N = !0,
  autoComplete: ee = !0,
  autoSelect: q = !1,
  afterItems: H,
  popupAdditionalOptionsRenderer: j,
  tagListPosition: L = "top",
  tagListRenderer: U,
  ...C
}, F) => {
  const X = R.useCallback((u) => s && s in u ? u[s] : JSON.stringify(u), [s]), [J, G] = R.useState(l);
  R.useEffect(() => {
    G(l);
  }, [l]);
  const K = R.useMemo(() => a ? (A == null ? void 0 : A.map((u) => o.find((d) => d[i] == u)).filter((u) => !!u)) || [] : o.find((u) => u[i] == A) || null, [A, o]), {
    value: Z,
    getRootProps: te,
    getInputProps: ie,
    getListboxProps: pe,
    getOptionProps: y,
    groupedOptions: S,
    getClearProps: x,
    setAnchorEl: O,
    anchorEl: D,
    popupOpen: W,
    getTagProps: $
  } = Ii({
    options: o,
    autoComplete: ee,
    autoSelect: q,
    multiple: a,
    open: J,
    value: K,
    getOptionLabel: X,
    isOptionEqualToValue: (u, d) => i ? u[i] === d[i] : u === d,
    onInputChange: T,
    onOpen: (u) => {
      G(!0), p == null || p(u);
    },
    onClose: (u, d) => {
      G(!1), g == null || g(u, d);
    },
    clearOnBlur: !1,
    disabled: b,
    unstable_classNamePrefix: "c",
    onChange: (u, d) => {
      w && (Array.isArray(d) ? w(d.map((v) => v[i])) : w(d && typeof d == "object" ? d[i] : null)), E == null || E(d);
    }
  }), I = R.useMemo(() => j ? j({
    closePopup: () => G(!1)
  }) : null, [j, G]), Y = n ? /* @__PURE__ */ B("div", { css: {
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
  }, children: /* @__PURE__ */ B(sa, {}) }) : /* @__PURE__ */ B("ul", { css: {
    zIndex: "20",
    width: "100%"
  }, ...pe(), children: D && S.length > 0 ? /* @__PURE__ */ Ee(mt, { children: [
    S.map((u, d) => /* @__PURE__ */ B(ne.Fragment, { children: "group" in u ? /* @__PURE__ */ B(mt, {}) : /* @__PURE__ */ B("li", { css: [{
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
    }, zr`
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
      index: d
    }), children: m ? m(u) : X(u) }) }, i in u ? u[i] : d)),
    I
  ] }) : I }), be = R.useMemo(() => a ? Z && Z.length > 0 : !!Z, [Z, a]), {
    onBlur: he,
    onChange: we,
    ref: _e,
    ...Ce
  } = ie(), Be = Pn(F, _e), Se = R.useMemo(() => a ? U ? U({
    items: Z,
    isLoading: t,
    onDelete: (u) => {
      w == null || w(Z.filter((d) => d[i] !== u[i]).map((d) => d[i]));
    },
    valueCount: (A == null ? void 0 : A.length) || 0
  }) : /* @__PURE__ */ B(ia, { items: Z, optionRender: m, getOptionLabel: X, getTagProps: $, isLoading: t, valueCount: A == null ? void 0 : A.length }) : null, [Z, U]), Ne = /* @__PURE__ */ Ee(mt, { children: [
    L === "top" && Se,
    /* @__PURE__ */ B(ht, { ...C, error: h, ...Ce, ref: Be, inputWrapRef: O, placeholder: M, isLoading: r, useTypograf: !1, onChange: we, onBlur: (u) => {
      he == null || he(u), a && (we == null || we({
        ...u,
        target: {
          ...u.target,
          value: ""
        }
      }));
    }, afterItems: !b && [H && /* @__PURE__ */ B(ne.Fragment, { children: H }, "after-items"), be && N && !a && /* @__PURE__ */ B("button", { ...x(), onMouseDown: (u) => {
      u.preventDefault(), u.stopPropagation();
    }, children: /* @__PURE__ */ B(Ye, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: jr.faTimes }) }, "clear"), /* @__PURE__ */ B("button", { onClick: (u) => {
      u.preventDefault(), u.stopPropagation(), G((d) => !d);
    }, children: /* @__PURE__ */ B(Ye, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, h && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: Ni.faCaretDown }) }, "arrow")] }),
    D && /* @__PURE__ */ B(Tn, { open: W, anchorEl: D, children: /* @__PURE__ */ B("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: D.offsetWidth
    }], children: Y }) })
  ] });
  return /* @__PURE__ */ Ee(mt, { children: [
    /* @__PURE__ */ B(Jt, { label: c, error: h, helperText: f, className: e, ...te(), children: Ne }),
    L === "bottom" && Se
  ] });
}, di = R.forwardRef(oa), aa = (e, n) => {
  const [r, t] = R.useState(!1);
  return /* @__PURE__ */ B(qi, { ref: n, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ B(Ui, { position: "end", children: /* @__PURE__ */ B($i, { size: "small", edge: "end", onClick: () => t((i) => !i), children: /* @__PURE__ */ B(Ye, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, zr`
                  width: 18px;
                `], icon: r ? Fi.faEyeSlash : Ji.faEye }) }) })
  }, ...e });
};
R.forwardRef(aa);
const _r = (e) => Array.isArray(e) ? e.length === 0 : !e, ua = ({
  dictionary: e,
  open: n = !1,
  value: r,
  filterOptions: t,
  ...i
}, s) => {
  const [o, a] = R.useState(n), l = Li(e, {
    enabled: o || !!r
  });
  R.useEffect(() => {
    a(n);
  }, [n]);
  const c = R.useMemo(() => t && l.data ? t(l.data) : l.data, [l.data, t]);
  return /* @__PURE__ */ B(
    di,
    {
      displayField: "name",
      ...i,
      ref: s,
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
      inputLoading: l.isLoading && !_r(r),
      disabled: l.isLoading && !_r(r) || i.disabled
    }
  );
}, $a = R.forwardRef(ua);
function yn(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Or(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? yn(Object(r), !0).forEach(function(t) {
      pi(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yn(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function la(e) {
  var n = function(r, t) {
    if (typeof r != "object" || !r)
      return r;
    var i = r[Symbol.toPrimitive];
    if (i !== void 0) {
      var s = i.call(r, t || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(r);
  }(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function pi(e, n, r) {
  return (n = la(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function ca(e, n) {
  if (e == null)
    return {};
  var r, t, i = function(o, a) {
    if (o == null)
      return {};
    var l, c, f = {}, h = Object.keys(o);
    for (c = 0; c < h.length; c++)
      l = h[c], a.indexOf(l) >= 0 || (f[l] = o[l]);
    return f;
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (t = 0; t < s.length; t++)
      r = s[t], n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function mn(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function hi(e, n) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = function(l, c) {
      if (l) {
        if (typeof l == "string")
          return mn(l, c);
        var f = Object.prototype.toString.call(l).slice(8, -1);
        return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? mn(l, c) : void 0;
      }
    }(e)) || n) {
      r && (e = r);
      var t = 0, i = function() {
      };
      return { s: i, n: function() {
        return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, o = !0, a = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var l = r.next();
    return o = l.done, l;
  }, e: function(l) {
    a = !0, s = l;
  }, f: function() {
    try {
      o || r.return == null || r.return();
    } finally {
      if (a)
        throw s;
    }
  } };
}
function hr(e, n) {
  var r, t = n.replacementChars, i = n.replacement, s = n.separate, o = t, a = "", l = hi(e);
  try {
    for (l.s(); !(r = l.n()).done; ) {
      var c, f = r.value, h = !Object.prototype.hasOwnProperty.call(i, f) && ((c = i[o[0]]) === null || c === void 0 ? void 0 : c.test(f));
      (s && f === o[0] || h) && (o = o.slice(1), a += f);
    }
  } catch (p) {
    l.e(p);
  } finally {
    l.f();
  }
  return a;
}
function Dr(e) {
  return e.length > 0 ? pi({}, e, /./) : {};
}
function fa(e, n) {
  var r, t = n.mask, i = n.replacement, s = n.showMask, o = 0, a = "", l = hi(t);
  try {
    for (l.s(); !(r = l.n()).done; ) {
      var c = r.value;
      if (!s && e[o] === void 0)
        break;
      Object.prototype.hasOwnProperty.call(i, c) && e[o] !== void 0 ? a += e[o++] : a += c;
    }
  } catch (f) {
    l.e(f);
  } finally {
    l.f();
  }
  return a;
}
function da(e, n) {
  for (var r = n.mask, t = n.replacement, i = [], s = 0; s < r.length; s++) {
    var o, a = (o = e[s]) !== null && o !== void 0 ? o : r[s], l = Object.prototype.hasOwnProperty.call(t, a) ? "replacement" : e[s] !== void 0 && e[s] !== r[s] ? "input" : "mask";
    i.push({ type: l, value: a, index: s });
  }
  return i;
}
function bn(e, n) {
  for (var r = n.start, t = r === void 0 ? 0 : r, i = n.end, s = n.mask, o = n.replacement, a = n.separate, l = e.slice(t, i), c = s.slice(t, i), f = "", h = 0; h < c.length; h++) {
    var p = Object.prototype.hasOwnProperty.call(o, c[h]);
    p && l[h] !== void 0 && l[h] !== c[h] ? f += l[h] : p && a && (f += c[h]);
  }
  return f;
}
function wn(e) {
  for (var n = e.mask, r = e.replacement, t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = typeof r == "string" ? Dr(r) : r, s = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"], o = "", a = 0; a < n.length; a++) {
    var l = Object.prototype.hasOwnProperty.call(i, n[a]), c = t ? "(?!".concat(n[a], ")") : "";
    a === 0 && (o += "^"), o += l ? c + i[n[a]].toString().slice(1, -1) : s.includes(n[a]) ? "\\".concat(n[a]) : n[a], a === n.length - 1 && (o += "$");
  }
  return o;
}
function pa(e, n, r) {
  return n = St(n), function(t, i) {
    if (i && (typeof i == "object" || typeof i == "function"))
      return i;
    if (i !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return function(s) {
      if (s === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return s;
    }(t);
  }(e, Vr() ? Reflect.construct(n, r || [], St(e).constructor) : n.apply(e, r));
}
function Vr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vr = function() {
    return !!e;
  })();
}
function Er(e) {
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Er(e);
}
function ha(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function ga(e, n, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function va(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && xt(e, n);
}
function St(e) {
  return St = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, St(e);
}
function xt(e, n) {
  return xt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, t) {
    return r.__proto__ = t, r;
  }, xt(e, n);
}
function Rr(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Rr = function(r) {
    if (r === null || !function(i) {
      try {
        return Function.toString.call(i).indexOf("[native code]") !== -1;
      } catch {
        return typeof i == "function";
      }
    }(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (n !== void 0) {
      if (n.has(r))
        return n.get(r);
      n.set(r, t);
    }
    function t() {
      return function(i, s, o) {
        if (Vr())
          return Reflect.construct.apply(null, arguments);
        var a = [null];
        a.push.apply(a, s);
        var l = new (i.bind.apply(i, a))();
        return o && xt(l, o.prototype), l;
      }(r, arguments, St(this).constructor);
    }
    return t.prototype = Object.create(r.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), xt(t, r);
  }, Rr(e);
}
var ut = function(e) {
  function n(r, t) {
    var i;
    return ha(this, n), (i = pa(this, n, [r])).name = "SyntheticChangeError", i.cause = t, i;
  }
  return va(n, e), ga(n);
}(Rr(Error));
function ya(e, n) {
  return R.useCallback(function(r) {
    e.current = r, typeof n == "function" ? n(r) : Er(n) === "object" && n !== null && (n.current = r);
  }, [e, n]);
}
function Lt(e, n) {
  var r = n.value, t = n.selectionStart, i = n.selectionEnd;
  r !== void 0 && (e.value = r), t !== void 0 && i !== void 0 && e.setSelectionRange(t, i);
}
var ma = ["text", "email", "tel", "search", "url"];
function ba(e) {
  var n = e.init, r = e.tracking, t = e.eventType, i = e.eventHandler, s = R.useRef({ timeoutId: -1, fallbackTimeoutId: -1, cachedTimeoutId: -1, start: 0, end: 0 }), o = R.useRef(!0), a = R.useRef(null), l = R.useRef({ init: n, tracking: r, eventType: t, eventHandler: i });
  return l.current.init = n, l.current.tracking = r, l.current.eventType = t, l.current.eventHandler = i, R.useMemo(function() {
    return function(c, f, h) {
      var p = h.onFocus, g = h.onBlur, m = h.onInput;
      return new Proxy(c, { set: function(w, T, E) {
        if (T !== "current")
          return !1;
        var b = E !== null && ma.includes(E.type);
        if (E !== c.current && (c.current !== null && (c.current.removeEventListener("focus", p), c.current.removeEventListener("blur", g), c.current.removeEventListener("input", m)), E !== null && b)) {
          var M, A = (M = E._wrapperState) !== null && M !== void 0 ? M : {}, N = A.controlled, ee = N !== void 0 && N, q = A.initialValue, H = q === void 0 ? "" : q, j = f({ controlled: ee, initialValue: E.value || H });
          Lt(E, { value: j.value }), document.activeElement === E && p(), E.addEventListener("focus", p), E.addEventListener("blur", g), E.addEventListener("input", m);
        }
        return w[T] = E, !0;
      } });
    }(a, l.current.init, { onFocus: function() {
      s.current.timeoutId = window.setTimeout(function c() {
        var f, h, p, g;
        o.current ? (s.current.start = (f = (h = a.current) === null || h === void 0 ? void 0 : h.selectionStart) !== null && f !== void 0 ? f : 0, s.current.end = (p = (g = a.current) === null || g === void 0 ? void 0 : g.selectionEnd) !== null && p !== void 0 ? p : 0, s.current.timeoutId = window.setTimeout(c)) : s.current.fallbackTimeoutId = window.setTimeout(c);
      });
    }, onBlur: function() {
      window.clearTimeout(s.current.timeoutId), window.clearTimeout(s.current.fallbackTimeoutId), s.current.timeoutId = -1, s.current.fallbackTimeoutId = -1, s.current.cachedTimeoutId = -1;
    }, onInput: function(c) {
      var f = a.current;
      if (f !== null)
        try {
          var h, p, g, m, w;
          if (s.current.cachedTimeoutId === s.current.timeoutId)
            throw new ut("The input selection has not been updated.");
          s.current.cachedTimeoutId = s.current.timeoutId;
          var T = f.value, E = f.selectionStart, b = f.selectionEnd;
          if (E === null || b === null)
            throw new ut("The selection attributes have not been initialized.");
          var M, A = (h = (p = f._valueTracker) === null || p === void 0 || (g = p.getValue) === null || g === void 0 ? void 0 : g.call(p)) !== null && h !== void 0 ? h : "";
          if (E > s.current.start ? M = "insert" : E <= s.current.start && E < s.current.end ? M = "deleteBackward" : E === s.current.end && T.length < A.length && (M = "deleteForward"), M === void 0 || (M === "deleteBackward" || M === "deleteForward") && T.length > A.length)
            throw new ut("Input type detection error.");
          var N = "", ee = "", q = s.current.start, H = s.current.end;
          if (M === "insert")
            N = T.slice(s.current.start, E);
          else {
            var j = A.length - T.length;
            q = E, H = E + j, ee = A.slice(q, H);
          }
          var L = l.current.tracking({ inputType: M, previousValue: A, value: T, addedValue: N, deletedValue: ee, changeStart: q, changeEnd: H, selectionStart: E, selectionEnd: b });
          Lt(f, { value: L.value, selectionStart: L.selectionStart, selectionEnd: L.selectionEnd });
          var U = l.current.eventType, C = l.current.eventHandler;
          if (typeof U == "string" && C) {
            var F = f.value, X = f.selectionStart, J = f.selectionEnd;
            o.current = !1, requestAnimationFrame(function() {
              Lt(f, { value: F, selectionStart: X ?? F.length, selectionEnd: J ?? F.length });
              var Y = new CustomEvent(U, { bubbles: !0, cancelable: !1, composed: !0, detail: L.__detail });
              f.dispatchEvent(Y), Ht.unstable_batchedUpdates ? Ht.unstable_batchedUpdates(C, Y) : C(Y), o.current = !0;
            });
          }
          (m = f._valueTracker) === null || m === void 0 || (w = m.setValue) === null || w === void 0 || w.call(m, A), s.current.start = L.selectionStart, s.current.end = L.selectionEnd;
        } catch (Y) {
          var G, K, Z, te, ie, pe, y, S, x, O, D, W = Y, $ = W.name, I = W.cause;
          if (Lt(f, { value: (G = (K = I == null || (Z = I.__attributes) === null || Z === void 0 ? void 0 : Z.value) !== null && K !== void 0 ? K : (te = f._valueTracker) === null || te === void 0 || (ie = te.getValue) === null || ie === void 0 ? void 0 : ie.call(te)) !== null && G !== void 0 ? G : "", selectionStart: (pe = I == null || (y = I.__attributes) === null || y === void 0 ? void 0 : y.selectionStart) !== null && pe !== void 0 ? pe : s.current.start, selectionEnd: (S = I == null || (x = I.__attributes) === null || x === void 0 ? void 0 : x.selectionEnd) !== null && S !== void 0 ? S : s.current.end }), (I == null || (O = I.__attributes) === null || O === void 0 ? void 0 : O.selectionStart) !== void 0 && (s.current.start = I.__attributes.selectionStart), (I == null || (D = I.__attributes) === null || D === void 0 ? void 0 : D.selectionEnd) !== void 0 && (s.current.end = I.__attributes.selectionEnd), c.preventDefault(), c.stopPropagation(), $ !== "SyntheticChangeError")
            throw Y;
        }
    } });
  }, []);
}
function Hr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mask, r = n === void 0 ? "" : n, t = e.replacement, i = t === void 0 ? {} : t, s = e.showMask, o = s !== void 0 && s, a = e.separate, l = a !== void 0 && a, c = e.track, f = e.modify, h = e.onMask, p = typeof i == "string" ? Dr(i) : i, g = R.useRef(null);
  return ba({ init: function(m) {
    var w = m.controlled, T = m.initialValue;
    T = w || T ? T : o ? r : "";
    var E = { mask: r, replacement: p, showMask: o, separate: l };
    return g.current = { value: T, props: E, fallbackProps: E }, { value: T };
  }, tracking: function(m) {
    var w, T = m.inputType, E = m.previousValue, b = m.addedValue, M = m.changeStart, A = m.changeEnd;
    if (g.current === null)
      throw new ut("The state has not been initialized.");
    g.current.value !== E ? g.current.props = g.current.fallbackProps : g.current.fallbackProps = g.current.props;
    var N = bn(E, { end: M, mask: g.current.props.mask, replacement: g.current.props.replacement, separate: g.current.props.separate }), ee = RegExp("[^".concat(Object.keys(g.current.props.replacement).join(""), "]"), "g"), q = g.current.props.mask.replace(ee, "");
    N && (N = hr(N, { replacementChars: q, replacement: g.current.props.replacement, separate: g.current.props.separate }));
    var H = c == null ? void 0 : c(Or(Or({}, T === "insert" ? { inputType: T, data: b } : { inputType: T, data: null }), {}, { value: E, selectionStart: M, selectionEnd: A }));
    if (H === !1)
      throw new ut("Custom trekking stop.");
    if (H === null ? b = "" : H !== !0 && H !== void 0 && (b = H), b && (b = hr(b, { replacementChars: q.slice(N.length), replacement: g.current.props.replacement, separate: !1 })), T === "insert" && b === "")
      throw new ut("The character does not match the key value of the `replacement` object.");
    var j = bn(E, { start: A, mask: g.current.props.mask, replacement: g.current.props.replacement, separate: g.current.props.separate });
    if (g.current.props.separate) {
      var L = g.current.props.mask.slice(M, A).replace(ee, ""), U = L.length - b.length;
      U < 0 ? j = j.slice(-U) : U > 0 && (j = L.slice(-U) + j);
    }
    j && (j = hr(j, { replacementChars: q.slice(N.length + b.length), replacement: g.current.props.replacement, separate: g.current.props.separate }));
    var C = N + b + j, F = (w = f == null ? void 0 : f(C)) !== null && w !== void 0 ? w : {}, X = F.mask, J = X === void 0 ? r : X, G = F.replacement, K = G === void 0 ? p : G, Z = F.showMask, te = Z === void 0 ? o : Z, ie = F.separate, pe = ie === void 0 ? l : ie;
    typeof K == "string" && (K = Dr(K));
    var y = function(x, O) {
      var D = O.mask, W = O.replacement, $ = O.showMask, I = fa(x, { mask: D, replacement: W, showMask: $ }), Y = da(I, { mask: D, replacement: W }), be = wn({ mask: D, replacement: W }), he = wn({ mask: D, replacement: W }, !0);
      return { value: I, input: x, parts: Y, pattern: be, isValid: RegExp(he).test(I) };
    }(C, { mask: J, replacement: K, showMask: te }), S = function(x) {
      var O, D, W, $ = x.inputType, I = x.value, Y = x.addedValue, be = x.beforeChangeValue, he = x.parts, we = x.replacement, _e = x.separate, Ce = he.filter(function(d) {
        var v = d.type;
        return v === "input" || _e && v === "replacement";
      }), Be = (O = Ce[be.length + Y.length - 1]) === null || O === void 0 ? void 0 : O.index, Se = (D = Ce[be.length - 1]) === null || D === void 0 ? void 0 : D.index, Ne = (W = Ce[be.length + Y.length]) === null || W === void 0 ? void 0 : W.index;
      if ($ === "insert") {
        if (Be !== void 0)
          return Be + 1;
        if (Ne !== void 0)
          return Ne;
        if (Se !== void 0)
          return Se + 1;
      }
      if ($ === "deleteForward") {
        if (Ne !== void 0)
          return Ne;
        if (Se !== void 0)
          return Se + 1;
      }
      if ($ === "deleteBackward") {
        if (Se !== void 0)
          return Se + 1;
        if (Ne !== void 0)
          return Ne;
      }
      var u = I.split("").findIndex(function(d) {
        return Object.prototype.hasOwnProperty.call(we, d);
      });
      return u !== -1 ? u : I.length;
    }({ inputType: T, value: y.value, addedValue: b, beforeChangeValue: N, parts: y.parts, replacement: K, separate: pe });
    return g.current.value = y.value, g.current.props = { mask: J, replacement: K, showMask: te, separate: pe }, { value: y.value, selectionStart: S, selectionEnd: S, __detail: y };
  }, eventType: "input-mask", eventHandler: h });
}
var wa = ["component", "mask", "replacement", "showMask", "separate", "track", "modify", "onMask"];
function Sa(e, n) {
  var r = e.component, t = e.mask, i = e.replacement, s = e.showMask, o = e.separate, a = e.track, l = e.modify, c = e.onMask, f = ca(e, wa), h = Hr({ mask: t, replacement: i, showMask: s, separate: o, track: a, modify: l, onMask: c }), p = ya(h, n);
  return Yi.jsx(r || "input", Or({ ref: p }, f));
}
R.forwardRef(Sa);
const xa = ({
  error: e,
  label: n,
  open: r,
  className: t,
  onFocus: i,
  onBlur: s,
  onClick: o,
  value: a,
  onChange: l,
  mask: c = "ДД.ММ.ГГГГ",
  replacement: f = {
    Д: /\d/,
    М: /\d/,
    Г: /\d/
  },
  showMask: h = !0,
  ...p
}, g) => {
  const [m, w] = R.useState(null), [T, E] = R.useState(!1), [b, M] = R.useState(!1), [A, N] = R.useState(a ? Mt(a).format("DD.MM.YYYY") : "");
  g = Hr({
    mask: c,
    replacement: f,
    showMask: h,
    track: (L) => {
      const {
        value: U,
        data: C,
        selectionEnd: F,
        selectionStart: X
      } = L, [J, G, K] = (U == null ? void 0 : U.split(".")) || [], Z = (ie) => F === ie && X === ie, te = C !== null;
      return Z(0) && te && !/[0123]/.test(C) || Z(1) && te && (J == null ? void 0 : J[0]) === "3" && +C > 1 || Z(1) && te && (J == null ? void 0 : J[0]) === "0" && +C == 0 || Z(2) && te && !/[01]/.test(C) || Z(4) && te && (G == null ? void 0 : G[0]) === "1" && !/[012]/.test(C) || Z(4) && te && (G == null ? void 0 : G[0]) === "0" && +C < 1 || Z(5) && te && !/[12]/.test(C) || Z(7) && te && (K == null ? void 0 : K[0]) === "1" && +C != 9 ? !1 : L.data;
    }
  }), R.useEffect(() => {
    r !== void 0 && E(r);
  }, [r]);
  const q = R.useCallback((L) => {
    M(!0), E(!0), i == null || i(L);
  }, [i, E]), H = (L) => {
    M(!1), A && (l == null || l(Mt(A, "DD-MM-YYYY").format("YYYY-MM-DD"))), s == null || s(L);
  }, j = R.useCallback((L) => {
    w(L);
  }, [w]);
  return /* @__PURE__ */ B(Xi, { onClickAway: () => E(!1), children: /* @__PURE__ */ Ee(Jt, { className: t, label: n, error: e, children: [
    /* @__PURE__ */ B(ht, { ...p, inputWrapRef: j, ref: g, onFocus: q, onBlur: H, useTypograf: !1, value: A, onChange: (L) => {
      N == null || N(L.target.value);
    }, onMouseDown: (L) => {
      b && E(!T), o == null || o(L);
    }, error: e }),
    m && /* @__PURE__ */ B(Tn, { open: T, anchorEl: m, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: m
      }
    }], children: /* @__PURE__ */ B("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ B(Oi, { value: a, onChange: (L) => {
      l == null || l(Mt(L).format("YYYY-MM-DD")), N(Mt(L).format("DD.MM.YYYY")), E(!1);
    } }) }) })
  ] }) });
}, qa = R.forwardRef(xa), _a = ({
  multiple: e,
  value: n,
  url: r,
  params: t,
  idField: i = fi,
  onInputChange: s,
  filters: o,
  open: a = !1,
  extraOptionsRenderer: l,
  ...c
}, f) => {
  const [h, p] = R.useState(""), [g, m] = R.useState(a), w = cs(h, 500), T = ls(r, i), {
    records: E,
    isLoading: b
  } = us({
    idField: i,
    value: (_r(n) ? [] : e ? n : [n]) || [],
    url: r,
    params: t
  });
  R.useEffect(() => {
    m(a);
  }, [a]);
  const M = R.useMemo(() => ({
    ...t,
    ...o && o.length > 0 && {
      extFilters: JSON.stringify(o)
    },
    ...w ? {
      query: w
    } : void 0
  }), [w, t, o]), A = h.length > 0 || g || !1, N = Wi(r, {
    enabled: A,
    params: M,
    placeholderData: Di,
    staleTime: 1e3 * 60
  }), ee = R.useMemo(() => {
    var j;
    return yt.uniqBy([...E, ...((j = N.data) == null ? void 0 : j.data) || []], i);
  }, [E, N.data]), q = !e && b, H = l ? (j) => l({
    ...j,
    search: h,
    searchIsLoading: N.isLoading
  }) : void 0;
  return /* @__PURE__ */ B(mt, { children: /* @__PURE__ */ B(di, { ref: f, multiple: e, value: n, ...c, disabled: q || c.disabled, inputLoading: q, options: ee, idField: i, onOpen: () => m(!0), onClose: () => m(!1), isLoading: N.isLoading || b, valueLoading: b, popupAdditionalOptionsRenderer: H, open: g, afterItems: [(N.isLoading || N.isFetching || e && b) && /* @__PURE__ */ B("div", { children: /* @__PURE__ */ B(Ye, { icon: On.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onSelect: (j) => {
    var L;
    e ? j == null || j.map((U) => {
      T(U);
    }) : T(j), (L = c.onSelect) == null || L.call(c, j);
  }, onInputChange: (j, L, U) => {
    U === "input" && p(L), U === "reset" && h !== "" && p(""), s == null || s(j, L, U);
  } }) });
}, Ya = R.forwardRef(_a), Oa = ({
  unit: e,
  error: n,
  onChange: r,
  allowFloat: t = !0,
  value: i,
  ...s
}, o) => {
  const [a, l] = R.useState(i), [c, f] = R.useState(null);
  R.useEffect(() => {
    l(i);
  }, [i]);
  const h = Pn(o, f);
  return /* @__PURE__ */ B(ht, { ...s, ref: h, error: n, value: a, useTypograf: !1, onChange: (p) => {
    const g = Number(p.target.value);
    if (!isNaN(g)) {
      if (p.target.value.includes(".") && !t)
        return;
      l(p.target.value), p.target.value.slice(-1) !== "." && (r == null || r(g));
    }
  }, afterItems: [e && /* @__PURE__ */ B("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, n && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => c == null ? void 0 : c.focus(), children: e }, "unit")] });
}, Xa = R.forwardRef(Oa), Da = R.forwardRef(({
  placeholder: e = "Введите",
  ...n
}, r) => /* @__PURE__ */ B("textarea", { ref: r, placeholder: e, ...n })), Ea = ({
  error: e,
  rows: n = 5,
  ...r
}, t) => /* @__PURE__ */ B(ht, { ...r, ref: t, rows: n, inputComponent: Da, error: e }), Qa = R.forwardRef(Ea), Ra = ({
  error: e,
  ...n
}, r) => /* @__PURE__ */ B(ht, { useTypograf: !1, ...n, ref: r, error: e }), Ka = R.forwardRef(Ra), za = ({
  label: e,
  error: n,
  value: r,
  helperText: t,
  className: i,
  onChange: s,
  ...o
}, a) => /* @__PURE__ */ B(Jt, { label: e, error: n, helperText: t, className: i, children: /* @__PURE__ */ Ee(Qi, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...o, onChange: (l) => {
  s == null || s(l.target.value === "true");
}, ref: a, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ B(Xr, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ B(Xr, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), Ga = R.forwardRef(za), Pa = ({
  label: e,
  ...n
}, r) => /* @__PURE__ */ B(Gi, { ref: r, label: e, labelPlacement: "top", sx: {
  mx: 0,
  alignItems: "flex-start",
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(55 65 81 / var(--tw-text-opacity))"
  }
}, control: /* @__PURE__ */ B(Ki, { ...n, checked: n.value, color: "primary", css: {
  paddingLeft: "0px",
  paddingRight: "0px"
} }) }), Ja = R.forwardRef(Pa), Ta = ({
  mask: e = "+7 (___) ___-__-__",
  replacement: n = {
    _: /\d/
  },
  showMask: r,
  ...t
}, i) => (i = Hr({
  mask: e,
  replacement: n,
  showMask: r
}), /* @__PURE__ */ B(ht, { useTypograf: !1, ...t, ref: i })), Za = R.forwardRef(Ta);
export {
  Ba as B,
  ms as C,
  $a as D,
  Va as F,
  Jt as L,
  Xa as N,
  Za as P,
  Ya as Q,
  Ua as R,
  ht as T,
  Ka as Y,
  Ia as a,
  Ha as b,
  qa as c,
  Qa as d,
  Ga as e,
  Yn as f,
  Fs as g,
  ls as h,
  fi as i,
  di as j,
  Ja as k,
  ja as l,
  Qn as m,
  Wa as u
};
