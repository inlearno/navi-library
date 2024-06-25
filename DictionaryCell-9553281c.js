var Qt = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var u = (e, t, s) => (Qt(e, t, "read from private field"), s ? s.call(e) : t.get(e)), v = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
}, D = (e, t, s, r) => (Qt(e, t, "write to private field"), r ? r.call(e, s) : t.set(e, s), s);
var O = (e, t, s) => (Qt(e, t, "access private method"), s);
import { r as F, R as or } from "./react-6f5a8403.js";
import { L as lr, O as Jt, Z as ga, _ as Gs, $ as Qs, a0 as wa, a1 as va, a2 as pa, a3 as qs, V as Je, a4 as Sa, I as ur, a5 as Ma, j as W, b as fe, f as ka } from "./library-6ace56c9.js";
import { F as Te } from "./icons-ad9f8a73.js";
import { I as Qe } from "./mui-2ff488a7.js";
var V, R, st, A, pe, Fe, X, rt, Le, Ie, Se, Me, me, Ee, ke, Ze, at, Kt, it, Xt, nt, es, ot, ts, lt, ss, ut, rs, dt, as, xt, dr, ir, vs = (ir = class extends lr {
  constructor(t, s) {
    super();
    v(this, ke);
    v(this, at);
    v(this, it);
    v(this, nt);
    v(this, ot);
    v(this, lt);
    v(this, ut);
    v(this, dt);
    v(this, xt);
    v(this, V, void 0);
    v(this, R, void 0);
    v(this, st, void 0);
    v(this, A, void 0);
    v(this, pe, void 0);
    v(this, Fe, void 0);
    v(this, X, void 0);
    v(this, rt, void 0);
    v(this, Le, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    v(this, Ie, void 0);
    v(this, Se, void 0);
    v(this, Me, void 0);
    v(this, me, void 0);
    v(this, Ee, /* @__PURE__ */ new Set());
    this.options = s, D(this, V, t), D(this, X, null), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (u(this, R).addObserver(this), $s(u(this, R), this.options) ? O(this, ke, Ze).call(this) : this.updateResult(), O(this, ot, ts).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return is(
      u(this, R),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return is(
      u(this, R),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), O(this, lt, ss).call(this), O(this, ut, rs).call(this), u(this, R).removeObserver(this);
  }
  setOptions(t, s) {
    const r = this.options, a = u(this, R);
    if (this.options = u(this, V).defaultQueryOptions(t), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    O(this, dt, as).call(this), Jt(this.options, r) || u(this, V).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: u(this, R),
      observer: this
    });
    const i = this.hasListeners();
    i && Zs(
      u(this, R),
      a,
      this.options,
      r
    ) && O(this, ke, Ze).call(this), this.updateResult(s), i && (u(this, R) !== a || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && O(this, at, Kt).call(this);
    const n = O(this, it, Xt).call(this);
    i && (u(this, R) !== a || this.options.enabled !== r.enabled || n !== u(this, me)) && O(this, nt, es).call(this, n);
  }
  getOptimisticResult(t) {
    const s = u(this, V).getQueryCache().build(u(this, V), t), r = this.createResult(s, t);
    return Oa(this, r) && (D(this, A, r), D(this, Fe, this.options), D(this, pe, u(this, R).state)), r;
  }
  getCurrentResult() {
    return u(this, A);
  }
  trackResult(t) {
    const s = {};
    return Object.keys(t).forEach((r) => {
      Object.defineProperty(s, r, {
        configurable: !1,
        enumerable: !0,
        get: () => (u(this, Ee).add(r), t[r])
      });
    }), s;
  }
  getCurrentQuery() {
    return u(this, R);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const s = u(this, V).defaultQueryOptions(t), r = u(this, V).getQueryCache().build(u(this, V), s);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, s));
  }
  fetch(t) {
    return O(this, ke, Ze).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), u(this, A)));
  }
  createResult(t, s) {
    var zs;
    const r = u(this, R), a = this.options, i = u(this, A), n = u(this, pe), o = u(this, Fe), c = t !== r ? t.state : u(this, st), { state: y } = t;
    let { error: g, errorUpdatedAt: S, fetchStatus: E, status: Y } = y, I = !1, N;
    if (s._optimisticResults) {
      const G = this.hasListeners(), Gt = !G && $s(t, s), _a = G && Zs(t, r, s, a);
      (Gt || _a) && (E = pa(t.options.networkMode) ? "fetching" : "paused", y.dataUpdatedAt || (Y = "pending")), s._optimisticResults === "isRestoring" && (E = "idle");
    }
    if (s.select && typeof y.data < "u")
      if (i && y.data === (n == null ? void 0 : n.data) && s.select === u(this, rt))
        N = u(this, Le);
      else
        try {
          D(this, rt, s.select), N = s.select(y.data), N = qs(i == null ? void 0 : i.data, N, s), D(this, Le, N), D(this, X, null);
        } catch (G) {
          D(this, X, G);
        }
    else
      N = y.data;
    if (typeof s.placeholderData < "u" && typeof N > "u" && Y === "pending") {
      let G;
      if (i != null && i.isPlaceholderData && s.placeholderData === (o == null ? void 0 : o.placeholderData))
        G = i.data;
      else if (G = typeof s.placeholderData == "function" ? s.placeholderData(
        (zs = u(this, Ie)) == null ? void 0 : zs.state.data,
        u(this, Ie)
      ) : s.placeholderData, s.select && typeof G < "u")
        try {
          G = s.select(G), D(this, X, null);
        } catch (Gt) {
          D(this, X, Gt);
        }
      typeof G < "u" && (Y = "success", N = qs(
        i == null ? void 0 : i.data,
        G,
        s
      ), I = !0);
    }
    u(this, X) && (g = u(this, X), N = u(this, Le), S = Date.now(), Y = "error");
    const Ye = E === "fetching", jt = Y === "pending", zt = Y === "error", js = jt && Ye;
    return {
      status: Y,
      fetchStatus: E,
      isPending: jt,
      isSuccess: Y === "success",
      isError: zt,
      isInitialLoading: js,
      isLoading: js,
      data: N,
      dataUpdatedAt: y.dataUpdatedAt,
      error: g,
      errorUpdatedAt: S,
      failureCount: y.fetchFailureCount,
      failureReason: y.fetchFailureReason,
      errorUpdateCount: y.errorUpdateCount,
      isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
      isFetchedAfterMount: y.dataUpdateCount > c.dataUpdateCount || y.errorUpdateCount > c.errorUpdateCount,
      isFetching: Ye,
      isRefetching: Ye && !jt,
      isLoadingError: zt && y.dataUpdatedAt === 0,
      isPaused: E === "paused",
      isPlaceholderData: I,
      isRefetchError: zt && y.dataUpdatedAt !== 0,
      isStale: ps(t, s),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const s = u(this, A), r = this.createResult(u(this, R), this.options);
    if (D(this, pe, u(this, R).state), D(this, Fe, this.options), u(this, pe).data !== void 0 && D(this, Ie, u(this, R)), Jt(r, s))
      return;
    D(this, A, r);
    const a = {}, i = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: n } = this.options, o = typeof n == "function" ? n() : n;
      if (o === "all" || !o && !u(this, Ee).size)
        return !0;
      const d = new Set(
        o ?? u(this, Ee)
      );
      return this.options.throwOnError && d.add("error"), Object.keys(u(this, A)).some((c) => {
        const y = c;
        return u(this, A)[y] !== s[y] && d.has(y);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (a.listeners = !0), O(this, xt, dr).call(this, { ...a, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && O(this, ot, ts).call(this);
  }
}, V = new WeakMap(), R = new WeakMap(), st = new WeakMap(), A = new WeakMap(), pe = new WeakMap(), Fe = new WeakMap(), X = new WeakMap(), rt = new WeakMap(), Le = new WeakMap(), Ie = new WeakMap(), Se = new WeakMap(), Me = new WeakMap(), me = new WeakMap(), Ee = new WeakMap(), ke = new WeakSet(), Ze = function(t) {
  O(this, dt, as).call(this);
  let s = u(this, R).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (s = s.catch(ga)), s;
}, at = new WeakSet(), Kt = function() {
  if (O(this, lt, ss).call(this), Gs || u(this, A).isStale || !Qs(this.options.staleTime))
    return;
  const s = wa(
    u(this, A).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  D(this, Se, setTimeout(() => {
    u(this, A).isStale || this.updateResult();
  }, s));
}, it = new WeakSet(), Xt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(u(this, R)) : this.options.refetchInterval) ?? !1;
}, nt = new WeakSet(), es = function(t) {
  O(this, ut, rs).call(this), D(this, me, t), !(Gs || this.options.enabled === !1 || !Qs(u(this, me)) || u(this, me) === 0) && D(this, Me, setInterval(() => {
    (this.options.refetchIntervalInBackground || va.isFocused()) && O(this, ke, Ze).call(this);
  }, u(this, me)));
}, ot = new WeakSet(), ts = function() {
  O(this, at, Kt).call(this), O(this, nt, es).call(this, O(this, it, Xt).call(this));
}, lt = new WeakSet(), ss = function() {
  u(this, Se) && (clearTimeout(u(this, Se)), D(this, Se, void 0));
}, ut = new WeakSet(), rs = function() {
  u(this, Me) && (clearInterval(u(this, Me)), D(this, Me, void 0));
}, dt = new WeakSet(), as = function() {
  const t = u(this, V).getQueryCache().build(u(this, V), this.options);
  if (t === u(this, R))
    return;
  const s = u(this, R);
  D(this, R, t), D(this, st, t.state), this.hasListeners() && (s == null || s.removeObserver(this), t.addObserver(this));
}, xt = new WeakSet(), dr = function(t) {
  Je.batch(() => {
    t.listeners && this.listeners.forEach((s) => {
      s(u(this, A));
    }), u(this, V).getQueryCache().notify({
      query: u(this, R),
      type: "observerResultsUpdated"
    });
  });
}, ir);
function Da(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function $s(e, t) {
  return Da(e, t) || e.state.dataUpdatedAt > 0 && is(e, t, t.refetchOnMount);
}
function is(e, t, s) {
  if (t.enabled !== !1) {
    const r = typeof s == "function" ? s(e) : s;
    return r === "always" || r !== !1 && ps(e, t);
  }
  return !1;
}
function Zs(e, t, s, r) {
  return s.enabled !== !1 && (e !== t || r.enabled === !1) && (!s.suspense || e.state.status !== "error") && ps(e, s);
}
function ps(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function Oa(e, t) {
  return !Jt(e.getCurrentResult(), t);
}
function Bs(e, t) {
  return e.filter((s) => !t.includes(s));
}
function ba(e, t, s) {
  const r = e.slice(0);
  return r[t] = s, r;
}
var De, Ue, Ae, j, ht, He, Ve, Mt, ct, ns, ft, os, mt, ls, yt, us, nr, Ya = (nr = class extends lr {
  constructor(t, s, r) {
    super();
    v(this, Ve);
    v(this, ct);
    v(this, ft);
    v(this, mt);
    v(this, yt);
    v(this, De, void 0);
    v(this, Ue, void 0);
    v(this, Ae, void 0);
    v(this, j, void 0);
    v(this, ht, void 0);
    v(this, He, void 0);
    D(this, De, t), D(this, Ae, []), D(this, j, []), O(this, Ve, Mt).call(this, []), this.setQueries(s, r);
  }
  onSubscribe() {
    this.listeners.size === 1 && u(this, j).forEach((t) => {
      t.subscribe((s) => {
        O(this, mt, ls).call(this, t, s);
      });
    });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), u(this, j).forEach((t) => {
      t.destroy();
    });
  }
  setQueries(t, s, r) {
    D(this, Ae, t), D(this, ht, s), Je.batch(() => {
      const a = u(this, j), i = O(this, ft, os).call(this, u(this, Ae));
      i.forEach(
        (c) => c.observer.setOptions(c.defaultedQueryOptions, r)
      );
      const n = i.map((c) => c.observer), o = n.map(
        (c) => c.getCurrentResult()
      ), d = n.some(
        (c, y) => c !== a[y]
      );
      a.length === n.length && !d || (D(this, j, n), O(this, Ve, Mt).call(this, o), this.hasListeners() && (Bs(a, n).forEach((c) => {
        c.destroy();
      }), Bs(n, a).forEach((c) => {
        c.subscribe((y) => {
          O(this, mt, ls).call(this, c, y);
        });
      }), O(this, yt, us).call(this)));
    });
  }
  getCurrentResult() {
    return u(this, He);
  }
  getQueries() {
    return u(this, j).map((t) => t.getCurrentQuery());
  }
  getObservers() {
    return u(this, j);
  }
  getOptimisticResult(t, s) {
    const r = O(this, ft, os).call(this, t), a = r.map(
      (i) => i.observer.getOptimisticResult(i.defaultedQueryOptions)
    );
    return [
      a,
      (i) => O(this, ct, ns).call(this, i ?? a, s),
      () => r.map((i, n) => {
        const o = a[n];
        return i.defaultedQueryOptions.notifyOnChangeProps ? o : i.observer.trackResult(o);
      })
    ];
  }
}, De = new WeakMap(), Ue = new WeakMap(), Ae = new WeakMap(), j = new WeakMap(), ht = new WeakMap(), He = new WeakMap(), Ve = new WeakSet(), Mt = function(t) {
  var s;
  D(this, Ue, t), D(this, He, O(this, ct, ns).call(this, t, (s = u(this, ht)) == null ? void 0 : s.combine));
}, ct = new WeakSet(), ns = function(t, s) {
  return s ? Sa(u(this, He), s(t)) : t;
}, ft = new WeakSet(), os = function(t) {
  const s = u(this, j), r = new Map(
    s.map((g) => [g.options.queryHash, g])
  ), a = t.map(
    (g) => u(this, De).defaultQueryOptions(g)
  ), i = a.flatMap((g) => {
    const S = r.get(g.queryHash);
    return S != null ? [{ defaultedQueryOptions: g, observer: S }] : [];
  }), n = new Set(
    i.map((g) => g.defaultedQueryOptions.queryHash)
  ), o = a.filter(
    (g) => !n.has(g.queryHash)
  ), d = (g) => {
    const S = u(this, De).defaultQueryOptions(g);
    return u(this, j).find(
      (Y) => Y.options.queryHash === S.queryHash
    ) ?? new vs(u(this, De), S);
  }, c = o.map((g) => ({
    defaultedQueryOptions: g,
    observer: d(g)
  })), y = (g, S) => a.indexOf(g.defaultedQueryOptions) - a.indexOf(S.defaultedQueryOptions);
  return i.concat(c).sort(y);
}, mt = new WeakSet(), ls = function(t, s) {
  const r = u(this, j).indexOf(t);
  r !== -1 && (O(this, Ve, Mt).call(this, ba(u(this, Ue), r, s)), O(this, yt, us).call(this));
}, yt = new WeakSet(), us = function() {
  Je.batch(() => {
    this.listeners.forEach((t) => {
      t(u(this, Ue));
    });
  });
}, nr), hr = F.createContext(!1), cr = () => F.useContext(hr);
hr.Provider;
function Ra() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Ta = F.createContext(Ra()), fr = () => F.useContext(Ta);
function Pa(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var mr = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, yr = (e) => {
  F.useEffect(() => {
    e.clearReset();
  }, [e]);
}, _r = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: s,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && Pa(s, [e.error, r]), gr = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, xa = (e, t) => e.isLoading && e.isFetching && !t, ds = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, hs = (e, t, s) => t.fetchOptimistic(e).catch(() => {
  s.clearReset();
});
function Ca({
  queries: e,
  ...t
}, s) {
  const r = ur(s), a = cr(), i = fr(), n = F.useMemo(
    () => e.map((Y) => {
      const I = r.defaultQueryOptions(Y);
      return I._optimisticResults = a ? "isRestoring" : "optimistic", I;
    }),
    [e, r, a]
  );
  n.forEach((Y) => {
    gr(Y), mr(Y, i);
  }), yr(i);
  const [o] = F.useState(
    () => new Ya(
      r,
      n,
      t
    )
  ), [d, c, y] = o.getOptimisticResult(
    n,
    t.combine
  );
  F.useSyncExternalStore(
    F.useCallback(
      (Y) => a ? () => {
      } : o.subscribe(Je.batchCalls(Y)),
      [o, a]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), F.useEffect(() => {
    o.setQueries(
      n,
      t,
      {
        listeners: !1
      }
    );
  }, [n, t, o]);
  const S = d.some(
    (Y, I) => ds(n[I], Y)
  ) ? d.flatMap((Y, I) => {
    const N = n[I];
    if (N) {
      const Ye = new vs(r, N);
      if (ds(N, Y))
        return hs(N, Ye, i);
      xa(Y, a) && hs(N, Ye, i);
    }
    return [];
  }) : [];
  if (S.length > 0)
    throw Promise.all(S);
  const E = d.find(
    (Y, I) => {
      const N = n[I];
      return N && _r({
        result: Y,
        errorResetBoundary: i,
        throwOnError: N.throwOnError,
        query: r.getQueryCache().get(N.queryHash)
      });
    }
  );
  if (E != null && E.error)
    throw E.error;
  return c(y());
}
function Na(e, t, s) {
  const r = ur(s), a = cr(), i = fr(), n = r.defaultQueryOptions(e);
  n._optimisticResults = a ? "isRestoring" : "optimistic", gr(n), mr(n, i), yr(i);
  const [o] = F.useState(
    () => new t(
      r,
      n
    )
  ), d = o.getOptimisticResult(n);
  if (F.useSyncExternalStore(
    F.useCallback(
      (c) => {
        const y = a ? () => {
        } : o.subscribe(Je.batchCalls(c));
        return o.updateResult(), y;
      },
      [o, a]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), F.useEffect(() => {
    o.setOptions(n, { listeners: !1 });
  }, [n, o]), ds(n, d))
    throw hs(n, o, i);
  if (_r({
    result: d,
    errorResetBoundary: i,
    throwOnError: n.throwOnError,
    query: r.getQueryCache().get(n.queryHash)
  }))
    throw d.error;
  return n.notifyOnChangeProps ? d : o.trackResult(d);
}
function Wa(e, t) {
  return Na(e, vs, t);
}
const wr = () => {
  const e = Ma();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function Fa(e, t) {
  let s;
  typeof e == "string" ? s = {
    url: e,
    ...t
  } : s = e;
  const {
    url: r,
    params: a,
    schema: i,
    select: n,
    ...o
  } = s, d = wr();
  return Wa({
    queryKey: a ? [r, JSON.stringify(a)] : [r, d.defaults.headers.Authorization || ""],
    select: i ? (c) => i.parse(c) : n,
    queryFn: async ({
      signal: c
    }) => {
      const {
        data: y
      } = await d.get(r, {
        params: a,
        signal: c
      });
      return y;
    },
    ...o
  });
}
const Js = () => {
  let e, t;
  const s = new Promise((r, a) => {
    e = r, t = a;
  });
  return {
    resolve: e,
    reject: t,
    value: s
  };
}, La = (e, t) => {
  var d;
  const s = e.name ?? `batcher:${Math.random().toString(16).slice(2)})`, r = e.scheduler ?? vr(10), a = (d = globalThis.__BATSHIT_DEVTOOLS__) == null ? void 0 : d.for(s);
  let i = t ?? {
    seq: 0,
    batch: /* @__PURE__ */ new Set(),
    currentRequest: Js(),
    timer: void 0,
    start: null,
    latest: null
  };
  a == null || a.create({ seq: i.seq });
  const n = () => {
    i.batch = /* @__PURE__ */ new Set(), i.currentRequest = Js(), i.timer = void 0, i.start = null, i.latest = null;
  };
  return { fetch: (c) => {
    i.start || (i.start = Date.now()), i.latest = Date.now(), i.batch.add(c), clearTimeout(i.timer);
    const y = r(i.start, i.latest, i.batch.size);
    a == null || a.queue({
      seq: i.seq,
      query: c,
      batch: [...i.batch],
      scheduled: y,
      latest: i.latest,
      start: i.start
    });
    const g = () => {
      const S = i.seq, E = e.fetcher([...i.batch]), Y = i.currentRequest;
      return a == null || a.fetch({ seq: S, batch: [...i.batch] }), n(), E.then((I) => {
        a == null || a.data({ seq: S, data: I }), Y.resolve(I);
      }).catch((I) => {
        a == null || a.error({ seq: S, error: I }), Y.reject(I);
      }), i.seq++, E;
    };
    if (y === "immediate") {
      const S = i.currentRequest;
      return g(), S.value.then((E) => e.resolver(E, c));
    } else
      return y === "never" ? i.currentRequest.value.then((S) => e.resolver(S, c)) : (i.timer = setTimeout(g, y), i.currentRequest.value.then((S) => e.resolver(S, c)));
  } };
}, Ia = (e) => (t, s) => t.find((r) => r[e] == s), vr = (e) => (t, s) => {
  const r = s - t;
  return e - r;
}, Ea = ({
  url: e,
  idField: t,
  params: s
}) => {
  const r = wr();
  return F.useMemo(() => La({
    fetcher: async (a) => {
      const {
        data: {
          data: i
        }
      } = await r.get(e, {
        params: {
          ...s,
          id: a.join(",")
        }
      });
      return i;
    },
    resolver: Ia(t),
    scheduler: vr(10)
  }), [e, s]);
}, Kl = ({
  idField: e,
  value: t,
  url: s,
  params: r
}) => {
  const a = Ea({
    url: s,
    idField: e,
    params: r
  });
  return Ca({
    queries: t.map((n) => ({
      queryFn: () => a.fetch(n),
      queryKey: [s, "item", n],
      staleTime: 12e4
    })),
    combine: (n) => ({
      records: n.map((o) => o.data).filter((o) => !!o),
      isLoading: !!n.find((o) => o.isLoading)
    })
  });
}, Ks = ({
  children: e,
  top: t,
  className: s
}) => /* @__PURE__ */ W("div", { role: "toolbar", css: [{
  zIndex: "10",
  display: "flex",
  height: "3rem",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, t ? {
  borderBottomWidth: "1px",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  "--tw-shadow": "var(--tw-shadow-colored)",
  "--tw-shadow-colored": "0 10px 20px -5px var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-shadow-color": "rgb(0 0 0 / 0.05)"
} : {
  borderTopWidth: "1px",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  "--tw-shadow": "var(--tw-shadow-colored)",
  "--tw-shadow-colored": "0 -10px 30px -15px var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-shadow-color": "rgb(0 0 0 / 0.1)"
}], className: s, children: e }), Xl = ({
  children: e,
  fit: t = !1,
  header: s,
  footer: r,
  ...a
}) => /* @__PURE__ */ fe("div", { css: [{
  display: "flex",
  userSelect: "text",
  flexDirection: "column"
}, t && {
  height: "100%"
}], ...a, children: [
  s && /* @__PURE__ */ W(Ks, { top: !0, children: s }),
  /* @__PURE__ */ W("div", { css: [{
    flex: "1 1 0%",
    overflow: "auto"
  }], children: e }),
  r && /* @__PURE__ */ W(Ks, { children: r })
] });
var Ua = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "caret-down", r = 320, a = 512, i = [], n = "f0d7", o = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(Ua);
var Aa = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "eye-slash", r = 640, a = 512, i = [], n = "f070", o = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faEyeSlash = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(Aa);
var pr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "arrows-rotate", r = 512, a = 512, i = [128472, "refresh", "sync"], n = "f021", o = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(pr);
var Sr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "angles-right", r = 512, a = 512, i = [187, "angle-double-right"], n = "f101", o = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(Sr);
var Mr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "angle-right", r = 320, a = 512, i = [8250], n = "f105", o = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(Mr);
var kr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "angle-left", r = 320, a = 512, i = [8249], n = "f104", o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(kr);
var Dr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "angles-left", r = 512, a = 512, i = [171, "angle-double-left"], n = "f100", o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(Dr);
const Ha = ({
  table: {
    refetch: e,
    recordsTotal: t = 0,
    ...s
  }
}) => {
  const r = s.getState(), {
    pagination: a
  } = r, i = F.useMemo(() => a.pageIndex * a.pageSize + (t > 0 ? 1 : 0), [a, t]), n = F.useMemo(() => Math.min(t, (a.pageIndex + 1) * a.pageSize), [a, t]);
  return /* @__PURE__ */ fe("div", { css: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    containerType: "inline-size"
  }, children: [
    /* @__PURE__ */ fe("div", { css: {
      display: "flex",
      flex: "1 1 0%",
      justifyContent: "center",
      gap: "0.25rem",
      "@container (min-width: 300px)": {
        justifyContent: "flex-start"
      },
      "@container (min-width: 670px)": {
        gap: "0.75rem"
      }
    }, children: [
      /* @__PURE__ */ W(Qe, { onClick: () => s.setPageIndex(0), size: "small", disabled: !s.getCanPreviousPage(), children: /* @__PURE__ */ W(Te, { icon: Dr.faAnglesLeft }) }),
      /* @__PURE__ */ W(Qe, { size: "small", onClick: () => s.previousPage(), disabled: !s.getCanPreviousPage(), children: /* @__PURE__ */ W(Te, { css: {
        width: "18px"
      }, icon: kr.faAngleLeft }) }),
      /* @__PURE__ */ fe("span", { css: {
        display: "none",
        alignItems: "center",
        gap: "0.5rem",
        whiteSpace: "nowrap",
        "@container (min-width: 220px)": {
          display: "flex"
        }
      }, children: [
        /* @__PURE__ */ W("span", { css: {
          display: "none",
          "@container (min-width: 610px)": {
            display: "block"
          }
        }, children: "Страница" }),
        /* @__PURE__ */ W("input", { type: "number", value: s.getState().pagination.pageIndex + 1, onChange: (o) => {
          const d = o.target.value ? Number(o.target.value) - 1 : 0;
          s.setPageIndex(d);
        }, css: {
          width: "3rem",
          borderWidth: "1px",
          padding: "0.25rem"
        } }),
        "из ",
        s.getPageCount()
      ] }),
      /* @__PURE__ */ W(Qe, { size: "small", onClick: () => s.nextPage(), disabled: !s.getCanNextPage(), children: /* @__PURE__ */ W(Te, { css: {
        width: "18px"
      }, icon: Mr.faAngleRight }) }),
      /* @__PURE__ */ W(Qe, { size: "small", onClick: () => s.setPageIndex(s.getPageCount() - 1), disabled: !s.getCanNextPage(), children: /* @__PURE__ */ W(Te, { icon: Sr.faAnglesRight }) }),
      e && /* @__PURE__ */ W(Qe, { size: "small", disabled: s.isFetching, onClick: e, children: /* @__PURE__ */ W(Te, { spin: s.isFetching, icon: pr.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ fe("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ fe("div", { css: {
        display: "flex",
        gap: "0.125rem"
      }, children: [
        /* @__PURE__ */ W("span", { css: {
          display: "none",
          "@container (min-width: 540px)": {
            display: "block"
          }
        }, children: "Отражаются записи" }),
        /* @__PURE__ */ fe("span", { css: {
          display: "none",
          "@container (min-width: 410px)": {
            display: "block"
          }
        }, children: [
          "c ",
          i,
          " по ",
          n,
          ","
        ] }),
        /* @__PURE__ */ fe("span", { css: {
          display: "none",
          paddingLeft: "0.25rem",
          "@container (min-width: 360px)": {
            display: "block"
          }
        }, children: [
          " всего ",
          t
        ] })
      ] }),
      /* @__PURE__ */ W("select", { css: {
        display: "none",
        borderWidth: "1px",
        padding: "0.25rem",
        "@container (min-width: 300px)": {
          display: "block"
        }
      }, value: a.pageSize, onChange: (o) => {
        s.setPageSize(Number(o.target.value));
      }, children: [25, 50, 100].map((o) => /* @__PURE__ */ W("option", { value: o, children: o }, o)) })
    ] })
  ] });
}, eu = or.memo(Ha);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Or;
function h() {
  return Or.apply(null, arguments);
}
function Va(e) {
  Or = e;
}
function B(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Oe(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function M(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ss(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (M(e, t))
      return !1;
  return !0;
}
function H(e) {
  return e === void 0;
}
function de(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function _t(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function br(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function ye(e, t) {
  for (var s in t)
    M(t, s) && (e[s] = t[s]);
  return M(t, "toString") && (e.toString = t.toString), M(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function se(e, t, s, r) {
  return Zr(e, t, s, r, !0).utc();
}
function ja() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function _(e) {
  return e._pf == null && (e._pf = ja()), e._pf;
}
var cs;
Array.prototype.some ? cs = Array.prototype.some : cs = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Ms(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = _(e), s = cs.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Ct(e) {
  var t = se(NaN);
  return e != null ? ye(_(t), e) : _(t).userInvalidated = !0, t;
}
var Xs = h.momentProperties = [], qt = !1;
function ks(e, t) {
  var s, r, a, i = Xs.length;
  if (H(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), H(t._i) || (e._i = t._i), H(t._f) || (e._f = t._f), H(t._l) || (e._l = t._l), H(t._strict) || (e._strict = t._strict), H(t._tzm) || (e._tzm = t._tzm), H(t._isUTC) || (e._isUTC = t._isUTC), H(t._offset) || (e._offset = t._offset), H(t._pf) || (e._pf = _(t)), H(t._locale) || (e._locale = t._locale), i > 0)
    for (s = 0; s < i; s++)
      r = Xs[s], a = t[r], H(a) || (e[r] = a);
  return e;
}
function gt(e) {
  ks(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), qt === !1 && (qt = !0, h.updateOffset(this), qt = !1);
}
function J(e) {
  return e instanceof gt || e != null && e._isAMomentObject != null;
}
function Yr(e) {
  h.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function q(e, t) {
  var s = !0;
  return ye(function() {
    if (h.deprecationHandler != null && h.deprecationHandler(null, e), s) {
      var r = [], a, i, n, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (a = "", typeof arguments[i] == "object") {
          a += `
[` + i + "] ";
          for (n in arguments[0])
            M(arguments[0], n) && (a += n + ": " + arguments[0][n] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[i];
        r.push(a);
      }
      Yr(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var er = {};
function Rr(e, t) {
  h.deprecationHandler != null && h.deprecationHandler(e, t), er[e] || (Yr(t), er[e] = !0);
}
h.suppressDeprecationWarnings = !1;
h.deprecationHandler = null;
function re(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function za(e) {
  var t, s;
  for (s in e)
    M(e, s) && (t = e[s], re(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function fs(e, t) {
  var s = ye({}, e), r;
  for (r in t)
    M(t, r) && (Oe(e[r]) && Oe(t[r]) ? (s[r] = {}, ye(s[r], e[r]), ye(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    M(e, r) && !M(t, r) && Oe(e[r]) && (s[r] = ye({}, s[r]));
  return s;
}
function Ds(e) {
  e != null && this.set(e);
}
var ms;
Object.keys ? ms = Object.keys : ms = function(e) {
  var t, s = [];
  for (t in e)
    M(e, t) && s.push(t);
  return s;
};
var Ga = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Qa(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return re(r) ? r.call(t, s) : r;
}
function te(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, i = e >= 0;
  return (i ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Os = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, pt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, $t = {}, Ce = {};
function m(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (Ce[e] = a), t && (Ce[t[0]] = function() {
    return te(a.apply(this, arguments), t[1], t[2]);
  }), s && (Ce[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function qa(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function $a(e) {
  var t = e.match(Os), s, r;
  for (s = 0, r = t.length; s < r; s++)
    Ce[t[s]] ? t[s] = Ce[t[s]] : t[s] = qa(t[s]);
  return function(a) {
    var i = "", n;
    for (n = 0; n < r; n++)
      i += re(t[n]) ? t[n].call(a, e) : t[n];
    return i;
  };
}
function kt(e, t) {
  return e.isValid() ? (t = Tr(t, e.localeData()), $t[t] = $t[t] || $a(t), $t[t](e)) : e.localeData().invalidDate();
}
function Tr(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (pt.lastIndex = 0; s >= 0 && pt.test(e); )
    e = e.replace(
      pt,
      r
    ), pt.lastIndex = 0, s -= 1;
  return e;
}
var Za = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ba(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(Os).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Ja = "Invalid date";
function Ka() {
  return this._invalidDate;
}
var Xa = "%d", ei = /\d{1,2}/;
function ti(e) {
  return this._ordinal.replace("%d", e);
}
var si = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function ri(e, t, s, r) {
  var a = this._relativeTime[s];
  return re(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function ai(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return re(s) ? s(t) : s.replace(/%s/i, t);
}
var tr = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function $(e) {
  return typeof e == "string" ? tr[e] || tr[e.toLowerCase()] : void 0;
}
function bs(e) {
  var t = {}, s, r;
  for (r in e)
    M(e, r) && (s = $(r), s && (t[s] = e[r]));
  return t;
}
var ii = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function ni(e) {
  var t = [], s;
  for (s in e)
    M(e, s) && t.push({ unit: s, priority: ii[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var Pr = /\d/, z = /\d\d/, xr = /\d{3}/, Ys = /\d{4}/, Nt = /[+-]?\d{6}/, P = /\d\d?/, Cr = /\d\d\d\d?/, Nr = /\d\d\d\d\d\d?/, Wt = /\d{1,3}/, Rs = /\d{1,4}/, Ft = /[+-]?\d{1,6}/, je = /\d+/, Lt = /[+-]?\d+/, oi = /Z|[+-]\d\d:?\d\d/gi, It = /Z|[+-]\d\d(?::?\d\d)?/gi, li = /[+-]?\d+(\.\d{1,3})?/, wt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ze = /^[1-9]\d?/, Ts = /^([1-9]\d|\d)/, bt;
bt = {};
function f(e, t, s) {
  bt[e] = re(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function ui(e, t) {
  return M(bt, e) ? bt[e](t._strict, t._locale) : new RegExp(di(e));
}
function di(e) {
  return le(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, i) {
        return s || r || a || i;
      }
    )
  );
}
function le(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Q(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function w(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = Q(t)), s;
}
var ys = {};
function b(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), de(t) && (r = function(i, n) {
    n[t] = w(i);
  }), a = e.length, s = 0; s < a; s++)
    ys[e[s]] = r;
}
function vt(e, t) {
  b(e, function(s, r, a, i) {
    a._w = a._w || {}, t(s, a._w, a, i);
  });
}
function hi(e, t, s) {
  t != null && M(ys, e) && ys[e](t, s._a, s, e);
}
function Et(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var U = 0, ne = 1, ee = 2, L = 3, Z = 4, oe = 5, ve = 6, ci = 7, fi = 8;
m("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? te(e, 4) : "+" + e;
});
m(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
m(0, ["YYYY", 4], 0, "year");
m(0, ["YYYYY", 5], 0, "year");
m(0, ["YYYYYY", 6, !0], 0, "year");
f("Y", Lt);
f("YY", P, z);
f("YYYY", Rs, Ys);
f("YYYYY", Ft, Nt);
f("YYYYYY", Ft, Nt);
b(["YYYYY", "YYYYYY"], U);
b("YYYY", function(e, t) {
  t[U] = e.length === 2 ? h.parseTwoDigitYear(e) : w(e);
});
b("YY", function(e, t) {
  t[U] = h.parseTwoDigitYear(e);
});
b("Y", function(e, t) {
  t[U] = parseInt(e, 10);
});
function Be(e) {
  return Et(e) ? 366 : 365;
}
h.parseTwoDigitYear = function(e) {
  return w(e) + (w(e) > 68 ? 1900 : 2e3);
};
var Wr = Ge("FullYear", !0);
function mi() {
  return Et(this.year());
}
function Ge(e, t) {
  return function(s) {
    return s != null ? (Fr(this, e, s), h.updateOffset(this, t), this) : Ke(this, e);
  };
}
function Ke(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function Fr(e, t, s) {
  var r, a, i, n, o;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    i = s, n = e.month(), o = e.date(), o = o === 29 && n === 1 && !Et(i) ? 28 : o, a ? r.setUTCFullYear(i, n, o) : r.setFullYear(i, n, o);
  }
}
function yi(e) {
  return e = $(e), re(this[e]) ? this[e]() : this;
}
function _i(e, t) {
  if (typeof e == "object") {
    e = bs(e);
    var s = ni(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = $(e), re(this[e]))
    return this[e](t);
  return this;
}
function gi(e, t) {
  return (e % t + t) % t;
}
var C;
Array.prototype.indexOf ? C = Array.prototype.indexOf : C = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ps(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = gi(t, 12);
  return e += (t - s) / 12, s === 1 ? Et(e) ? 29 : 28 : 31 - s % 7 % 2;
}
m("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
m("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
m("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
f("M", P, ze);
f("MM", P, z);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
b(["M", "MM"], function(e, t) {
  t[ne] = w(e) - 1;
});
b(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[ne] = a : _(s).invalidMonth = e;
});
var wi = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Lr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ir = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, vi = wt, pi = wt;
function Si(e, t) {
  return e ? B(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ir).test(t) ? "format" : "standalone"][e.month()] : B(this._months) ? this._months : this._months.standalone;
}
function Mi(e, t) {
  return e ? B(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ir.test(t) ? "format" : "standalone"][e.month()] : B(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function ki(e, t, s) {
  var r, a, i, n = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = se([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = C.call(this._shortMonthsParse, n), a !== -1 ? a : null) : (a = C.call(this._longMonthsParse, n), a !== -1 ? a : null) : t === "MMM" ? (a = C.call(this._shortMonthsParse, n), a !== -1 ? a : (a = C.call(this._longMonthsParse, n), a !== -1 ? a : null)) : (a = C.call(this._longMonthsParse, n), a !== -1 ? a : (a = C.call(this._shortMonthsParse, n), a !== -1 ? a : null));
}
function Di(e, t, s) {
  var r, a, i;
  if (this._monthsParseExact)
    return ki.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = se([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function Er(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = w(t);
    else if (t = e.localeData().monthsParse(t), !de(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Ps(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function Ur(e) {
  return e != null ? (Er(this, e), h.updateOffset(this, !0), this) : Ke(this, "Month");
}
function Oi() {
  return Ps(this.year(), this.month());
}
function bi(e) {
  return this._monthsParseExact ? (M(this, "_monthsRegex") || Ar.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (M(this, "_monthsShortRegex") || (this._monthsShortRegex = vi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Yi(e) {
  return this._monthsParseExact ? (M(this, "_monthsRegex") || Ar.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (M(this, "_monthsRegex") || (this._monthsRegex = pi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ar() {
  function e(d, c) {
    return c.length - d.length;
  }
  var t = [], s = [], r = [], a, i, n, o;
  for (a = 0; a < 12; a++)
    i = se([2e3, a]), n = le(this.monthsShort(i, "")), o = le(this.months(i, "")), t.push(n), s.push(o), r.push(o), r.push(n);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ri(e, t, s, r, a, i, n) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, s, r, a, i, n), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, s, r, a, i, n), o;
}
function Xe(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Yt(e, t, s) {
  var r = 7 + t - s, a = (7 + Xe(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function Hr(e, t, s, r, a) {
  var i = (7 + s - r) % 7, n = Yt(e, r, a), o = 1 + 7 * (t - 1) + i + n, d, c;
  return o <= 0 ? (d = e - 1, c = Be(d) + o) : o > Be(e) ? (d = e + 1, c = o - Be(e)) : (d = e, c = o), {
    year: d,
    dayOfYear: c
  };
}
function et(e, t, s) {
  var r = Yt(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, n;
  return a < 1 ? (n = e.year() - 1, i = a + ue(n, t, s)) : a > ue(e.year(), t, s) ? (i = a - ue(e.year(), t, s), n = e.year() + 1) : (n = e.year(), i = a), {
    week: i,
    year: n
  };
}
function ue(e, t, s) {
  var r = Yt(e, t, s), a = Yt(e + 1, t, s);
  return (Be(e) - r + a) / 7;
}
m("w", ["ww", 2], "wo", "week");
m("W", ["WW", 2], "Wo", "isoWeek");
f("w", P, ze);
f("ww", P, z);
f("W", P, ze);
f("WW", P, z);
vt(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = w(e);
  }
);
function Ti(e) {
  return et(e, this._week.dow, this._week.doy).week;
}
var Pi = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function xi() {
  return this._week.dow;
}
function Ci() {
  return this._week.doy;
}
function Ni(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Wi(e) {
  var t = et(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
m("d", 0, "do", "day");
m("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
m("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
m("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
m("e", 0, 0, "weekday");
m("E", 0, 0, "isoWeekday");
f("d", P);
f("e", P);
f("E", P);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
vt(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : _(s).invalidWeekday = e;
});
vt(["d", "e", "E"], function(e, t, s, r) {
  t[r] = w(e);
});
function Fi(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Li(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function xs(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Ii = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Vr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ei = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ui = wt, Ai = wt, Hi = wt;
function Vi(e, t) {
  var s = B(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? xs(s, this._week.dow) : e ? s[e.day()] : s;
}
function ji(e) {
  return e === !0 ? xs(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function zi(e) {
  return e === !0 ? xs(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Gi(e, t, s) {
  var r, a, i, n = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = se([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = C.call(this._weekdaysParse, n), a !== -1 ? a : null) : t === "ddd" ? (a = C.call(this._shortWeekdaysParse, n), a !== -1 ? a : null) : (a = C.call(this._minWeekdaysParse, n), a !== -1 ? a : null) : t === "dddd" ? (a = C.call(this._weekdaysParse, n), a !== -1 || (a = C.call(this._shortWeekdaysParse, n), a !== -1) ? a : (a = C.call(this._minWeekdaysParse, n), a !== -1 ? a : null)) : t === "ddd" ? (a = C.call(this._shortWeekdaysParse, n), a !== -1 || (a = C.call(this._weekdaysParse, n), a !== -1) ? a : (a = C.call(this._minWeekdaysParse, n), a !== -1 ? a : null)) : (a = C.call(this._minWeekdaysParse, n), a !== -1 || (a = C.call(this._weekdaysParse, n), a !== -1) ? a : (a = C.call(this._shortWeekdaysParse, n), a !== -1 ? a : null));
}
function Qi(e, t, s) {
  var r, a, i;
  if (this._weekdaysParseExact)
    return Gi.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = se([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function qi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Ke(this, "Day");
  return e != null ? (e = Fi(e, this.localeData()), this.add(e - t, "d")) : t;
}
function $i(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Zi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Li(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Bi(e) {
  return this._weekdaysParseExact ? (M(this, "_weekdaysRegex") || Cs.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (M(this, "_weekdaysRegex") || (this._weekdaysRegex = Ui), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ji(e) {
  return this._weekdaysParseExact ? (M(this, "_weekdaysRegex") || Cs.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (M(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ai), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ki(e) {
  return this._weekdaysParseExact ? (M(this, "_weekdaysRegex") || Cs.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (M(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Hi), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Cs() {
  function e(y, g) {
    return g.length - y.length;
  }
  var t = [], s = [], r = [], a = [], i, n, o, d, c;
  for (i = 0; i < 7; i++)
    n = se([2e3, 1]).day(i), o = le(this.weekdaysMin(n, "")), d = le(this.weekdaysShort(n, "")), c = le(this.weekdays(n, "")), t.push(o), s.push(d), r.push(c), a.push(o), a.push(d), a.push(c);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ns() {
  return this.hours() % 12 || 12;
}
function Xi() {
  return this.hours() || 24;
}
m("H", ["HH", 2], 0, "hour");
m("h", ["hh", 2], 0, Ns);
m("k", ["kk", 2], 0, Xi);
m("hmm", 0, 0, function() {
  return "" + Ns.apply(this) + te(this.minutes(), 2);
});
m("hmmss", 0, 0, function() {
  return "" + Ns.apply(this) + te(this.minutes(), 2) + te(this.seconds(), 2);
});
m("Hmm", 0, 0, function() {
  return "" + this.hours() + te(this.minutes(), 2);
});
m("Hmmss", 0, 0, function() {
  return "" + this.hours() + te(this.minutes(), 2) + te(this.seconds(), 2);
});
function jr(e, t) {
  m(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
jr("a", !0);
jr("A", !1);
function zr(e, t) {
  return t._meridiemParse;
}
f("a", zr);
f("A", zr);
f("H", P, Ts);
f("h", P, ze);
f("k", P, ze);
f("HH", P, z);
f("hh", P, z);
f("kk", P, z);
f("hmm", Cr);
f("hmmss", Nr);
f("Hmm", Cr);
f("Hmmss", Nr);
b(["H", "HH"], L);
b(["k", "kk"], function(e, t, s) {
  var r = w(e);
  t[L] = r === 24 ? 0 : r;
});
b(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
b(["h", "hh"], function(e, t, s) {
  t[L] = w(e), _(s).bigHour = !0;
});
b("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[L] = w(e.substr(0, r)), t[Z] = w(e.substr(r)), _(s).bigHour = !0;
});
b("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[L] = w(e.substr(0, r)), t[Z] = w(e.substr(r, 2)), t[oe] = w(e.substr(a)), _(s).bigHour = !0;
});
b("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[L] = w(e.substr(0, r)), t[Z] = w(e.substr(r));
});
b("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[L] = w(e.substr(0, r)), t[Z] = w(e.substr(r, 2)), t[oe] = w(e.substr(a));
});
function en(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var tn = /[ap]\.?m?\.?/i, sn = Ge("Hours", !0);
function rn(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Gr = {
  calendar: Ga,
  longDateFormat: Za,
  invalidDate: Ja,
  ordinal: Xa,
  dayOfMonthOrdinalParse: ei,
  relativeTime: si,
  months: wi,
  monthsShort: Lr,
  week: Pi,
  weekdays: Ii,
  weekdaysMin: Ei,
  weekdaysShort: Vr,
  meridiemParse: tn
}, x = {}, qe = {}, tt;
function an(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function sr(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function nn(e) {
  for (var t = 0, s, r, a, i; t < e.length; ) {
    for (i = sr(e[t]).split("-"), s = i.length, r = sr(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = Ut(i.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && an(i, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return tt;
}
function on(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Ut(e) {
  var t = null, s;
  if (x[e] === void 0 && typeof module < "u" && module && module.exports && on(e))
    try {
      t = tt._abbr, s = require, s("./locale/" + e), ge(t);
    } catch {
      x[e] = null;
    }
  return x[e];
}
function ge(e, t) {
  var s;
  return e && (H(t) ? s = he(e) : s = Ws(e, t), s ? tt = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), tt._abbr;
}
function Ws(e, t) {
  if (t !== null) {
    var s, r = Gr;
    if (t.abbr = e, x[e] != null)
      Rr(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = x[e]._config;
    else if (t.parentLocale != null)
      if (x[t.parentLocale] != null)
        r = x[t.parentLocale]._config;
      else if (s = Ut(t.parentLocale), s != null)
        r = s._config;
      else
        return qe[t.parentLocale] || (qe[t.parentLocale] = []), qe[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return x[e] = new Ds(fs(r, t)), qe[e] && qe[e].forEach(function(a) {
      Ws(a.name, a.config);
    }), ge(e), x[e];
  } else
    return delete x[e], null;
}
function ln(e, t) {
  if (t != null) {
    var s, r, a = Gr;
    x[e] != null && x[e].parentLocale != null ? x[e].set(fs(x[e]._config, t)) : (r = Ut(e), r != null && (a = r._config), t = fs(a, t), r == null && (t.abbr = e), s = new Ds(t), s.parentLocale = x[e], x[e] = s), ge(e);
  } else
    x[e] != null && (x[e].parentLocale != null ? (x[e] = x[e].parentLocale, e === ge() && ge(e)) : x[e] != null && delete x[e]);
  return x[e];
}
function he(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return tt;
  if (!B(e)) {
    if (t = Ut(e), t)
      return t;
    e = [e];
  }
  return nn(e);
}
function un() {
  return ms(x);
}
function Fs(e) {
  var t, s = e._a;
  return s && _(e).overflow === -2 && (t = s[ne] < 0 || s[ne] > 11 ? ne : s[ee] < 1 || s[ee] > Ps(s[U], s[ne]) ? ee : s[L] < 0 || s[L] > 24 || s[L] === 24 && (s[Z] !== 0 || s[oe] !== 0 || s[ve] !== 0) ? L : s[Z] < 0 || s[Z] > 59 ? Z : s[oe] < 0 || s[oe] > 59 ? oe : s[ve] < 0 || s[ve] > 999 ? ve : -1, _(e)._overflowDayOfYear && (t < U || t > ee) && (t = ee), _(e)._overflowWeeks && t === -1 && (t = ci), _(e)._overflowWeekday && t === -1 && (t = fi), _(e).overflow = t), e;
}
var dn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, hn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, cn = /Z|[+-]\d\d(?::?\d\d)?/, St = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Zt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], fn = /^\/?Date\((-?\d+)/i, mn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, yn = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Qr(e) {
  var t, s, r = e._i, a = dn.exec(r) || hn.exec(r), i, n, o, d, c = St.length, y = Zt.length;
  if (a) {
    for (_(e).iso = !0, t = 0, s = c; t < s; t++)
      if (St[t][1].exec(a[1])) {
        n = St[t][0], i = St[t][2] !== !1;
        break;
      }
    if (n == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = y; t < s; t++)
        if (Zt[t][1].exec(a[3])) {
          o = (a[2] || " ") + Zt[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && o != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (cn.exec(a[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = n + (o || "") + (d || ""), Is(e);
  } else
    e._isValid = !1;
}
function _n(e, t, s, r, a, i) {
  var n = [
    gn(e),
    Lr.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return i && n.push(parseInt(i, 10)), n;
}
function gn(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function wn(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function vn(e, t, s) {
  if (e) {
    var r = Vr.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return _(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function pn(e, t, s) {
  if (e)
    return yn[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, i = (r - a) / 100;
  return i * 60 + a;
}
function qr(e) {
  var t = mn.exec(wn(e._i)), s;
  if (t) {
    if (s = _n(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !vn(t[1], s, e))
      return;
    e._a = s, e._tzm = pn(t[8], t[9], t[10]), e._d = Xe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Sn(e) {
  var t = fn.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Qr(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (qr(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : h.createFromInputFallback(e);
}
h.createFromInputFallback = q(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Pe(e, t, s) {
  return e ?? t ?? s;
}
function Mn(e) {
  var t = new Date(h.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ls(e) {
  var t, s, r = [], a, i, n;
  if (!e._d) {
    for (a = Mn(e), e._w && e._a[ee] == null && e._a[ne] == null && kn(e), e._dayOfYear != null && (n = Pe(e._a[U], a[U]), (e._dayOfYear > Be(n) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), s = Xe(n, 0, e._dayOfYear), e._a[ne] = s.getUTCMonth(), e._a[ee] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[L] === 24 && e._a[Z] === 0 && e._a[oe] === 0 && e._a[ve] === 0 && (e._nextDay = !0, e._a[L] = 0), e._d = (e._useUTC ? Xe : Ri).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[L] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (_(e).weekdayMismatch = !0);
  }
}
function kn(e) {
  var t, s, r, a, i, n, o, d, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, n = 4, s = Pe(
    t.GG,
    e._a[U],
    et(T(), 1, 4).year
  ), r = Pe(t.W, 1), a = Pe(t.E, 1), (a < 1 || a > 7) && (d = !0)) : (i = e._locale._week.dow, n = e._locale._week.doy, c = et(T(), i, n), s = Pe(t.gg, e._a[U], c.year), r = Pe(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (d = !0)) : t.e != null ? (a = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : a = i), r < 1 || r > ue(s, i, n) ? _(e)._overflowWeeks = !0 : d != null ? _(e)._overflowWeekday = !0 : (o = Hr(s, r, a, i, n), e._a[U] = o.year, e._dayOfYear = o.dayOfYear);
}
h.ISO_8601 = function() {
};
h.RFC_2822 = function() {
};
function Is(e) {
  if (e._f === h.ISO_8601) {
    Qr(e);
    return;
  }
  if (e._f === h.RFC_2822) {
    qr(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, s, r, a, i, n, o = t.length, d = 0, c, y;
  for (a = Tr(e._f, e._locale).match(Os) || [], y = a.length, s = 0; s < y; s++)
    i = a[s], r = (t.match(ui(i, e)) || [])[0], r && (n = t.substr(0, t.indexOf(r)), n.length > 0 && _(e).unusedInput.push(n), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), Ce[i] ? (r ? _(e).empty = !1 : _(e).unusedTokens.push(i), hi(i, r, e)) : e._strict && !r && _(e).unusedTokens.push(i);
  _(e).charsLeftOver = o - d, t.length > 0 && _(e).unusedInput.push(t), e._a[L] <= 12 && _(e).bigHour === !0 && e._a[L] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[L] = Dn(
    e._locale,
    e._a[L],
    e._meridiem
  ), c = _(e).era, c !== null && (e._a[U] = e._locale.erasConvertYear(c, e._a[U])), Ls(e), Fs(e);
}
function Dn(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function On(e) {
  var t, s, r, a, i, n, o = !1, d = e._f.length;
  if (d === 0) {
    _(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < d; a++)
    i = 0, n = !1, t = ks({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Is(t), Ms(t) && (n = !0), i += _(t).charsLeftOver, i += _(t).unusedTokens.length * 10, _(t).score = i, o ? i < r && (r = i, s = t) : (r == null || i < r || n) && (r = i, s = t, n && (o = !0));
  ye(e, s || t);
}
function bn(e) {
  if (!e._d) {
    var t = bs(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = br(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Ls(e);
  }
}
function Yn(e) {
  var t = new gt(Fs($r(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function $r(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || he(e._l), t === null || s === void 0 && t === "" ? Ct({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), J(t) ? new gt(Fs(t)) : (_t(t) ? e._d = t : B(s) ? On(e) : s ? Is(e) : Rn(e), Ms(e) || (e._d = null), e));
}
function Rn(e) {
  var t = e._i;
  H(t) ? e._d = new Date(h.now()) : _t(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Sn(e) : B(t) ? (e._a = br(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Ls(e)) : Oe(t) ? bn(e) : de(t) ? e._d = new Date(t) : h.createFromInputFallback(e);
}
function Zr(e, t, s, r, a) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (Oe(e) && Ss(e) || B(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = a, i._l = s, i._i = e, i._f = t, i._strict = r, Yn(i);
}
function T(e, t, s, r) {
  return Zr(e, t, s, r, !1);
}
var Tn = q(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = T.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ct();
  }
), Pn = q(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = T.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ct();
  }
);
function Br(e, t) {
  var s, r;
  if (t.length === 1 && B(t[0]) && (t = t[0]), !t.length)
    return T();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function xn() {
  var e = [].slice.call(arguments, 0);
  return Br("isBefore", e);
}
function Cn() {
  var e = [].slice.call(arguments, 0);
  return Br("isAfter", e);
}
var Nn = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, $e = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Wn(e) {
  var t, s = !1, r, a = $e.length;
  for (t in e)
    if (M(e, t) && !(C.call($e, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[$e[r]]) {
      if (s)
        return !1;
      parseFloat(e[$e[r]]) !== w(e[$e[r]]) && (s = !0);
    }
  return !0;
}
function Fn() {
  return this._isValid;
}
function Ln() {
  return K(NaN);
}
function At(e) {
  var t = bs(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, i = t.week || t.isoWeek || 0, n = t.day || 0, o = t.hour || 0, d = t.minute || 0, c = t.second || 0, y = t.millisecond || 0;
  this._isValid = Wn(t), this._milliseconds = +y + c * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +n + i * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = he(), this._bubble();
}
function Dt(e) {
  return e instanceof At;
}
function _s(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function In(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), i = 0, n;
  for (n = 0; n < r; n++)
    (s && e[n] !== t[n] || !s && w(e[n]) !== w(t[n])) && i++;
  return i + a;
}
function Jr(e, t) {
  m(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + te(~~(s / 60), 2) + t + te(~~s % 60, 2);
  });
}
Jr("Z", ":");
Jr("ZZ", "");
f("Z", It);
f("ZZ", It);
b(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Es(It, e);
});
var En = /([\+\-]|\d\d)/gi;
function Es(e, t) {
  var s = (t || "").match(e), r, a, i;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(En) || ["-", 0, 0], i = +(a[1] * 60) + w(a[2]), i === 0 ? 0 : a[0] === "+" ? i : -i);
}
function Us(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (J(e) || _t(e) ? e.valueOf() : T(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), h.updateOffset(s, !1), s) : T(e).local();
}
function gs(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
h.updateOffset = function() {
};
function Un(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Es(It, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = gs(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? ea(
      this,
      K(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, h.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : gs(this);
}
function An(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Hn(e) {
  return this.utcOffset(0, e);
}
function Vn(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(gs(this), "m")), this;
}
function jn() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Es(oi, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function zn(e) {
  return this.isValid() ? (e = e ? T(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Gn() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Qn() {
  if (!H(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return ks(e, this), e = $r(e), e._a ? (t = e._isUTC ? se(e._a) : T(e._a), this._isDSTShifted = this.isValid() && In(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function qn() {
  return this.isValid() ? !this._isUTC : !1;
}
function $n() {
  return this.isValid() ? this._isUTC : !1;
}
function Kr() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Zn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Bn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function K(e, t) {
  var s = e, r = null, a, i, n;
  return Dt(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : de(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Zn.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: w(r[ee]) * a,
    h: w(r[L]) * a,
    m: w(r[Z]) * a,
    s: w(r[oe]) * a,
    ms: w(_s(r[ve] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = Bn.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: we(r[2], a),
    M: we(r[3], a),
    w: we(r[4], a),
    d: we(r[5], a),
    h: we(r[6], a),
    m: we(r[7], a),
    s: we(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (n = Jn(
    T(s.from),
    T(s.to)
  ), s = {}, s.ms = n.milliseconds, s.M = n.months), i = new At(s), Dt(e) && M(e, "_locale") && (i._locale = e._locale), Dt(e) && M(e, "_isValid") && (i._isValid = e._isValid), i;
}
K.fn = At.prototype;
K.invalid = Ln;
function we(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function rr(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Jn(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Us(t, e), e.isBefore(t) ? s = rr(e, t) : (s = rr(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Xr(e, t) {
  return function(s, r) {
    var a, i;
    return r !== null && !isNaN(+r) && (Rr(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = s, s = r, r = i), a = K(s, r), ea(this, a, e), this;
  };
}
function ea(e, t, s, r) {
  var a = t._milliseconds, i = _s(t._days), n = _s(t._months);
  e.isValid() && (r = r ?? !0, n && Er(e, Ke(e, "Month") + n * s), i && Fr(e, "Date", Ke(e, "Date") + i * s), a && e._d.setTime(e._d.valueOf() + a * s), r && h.updateOffset(e, i || n));
}
var Kn = Xr(1, "add"), Xn = Xr(-1, "subtract");
function ta(e) {
  return typeof e == "string" || e instanceof String;
}
function eo(e) {
  return J(e) || _t(e) || ta(e) || de(e) || so(e) || to(e) || e === null || e === void 0;
}
function to(e) {
  var t = Oe(e) && !Ss(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, i, n = r.length;
  for (a = 0; a < n; a += 1)
    i = r[a], s = s || M(e, i);
  return t && s;
}
function so(e) {
  var t = B(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !de(r) && ta(e);
  }).length === 0), t && s;
}
function ro(e) {
  var t = Oe(e) && !Ss(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, i;
  for (a = 0; a < r.length; a += 1)
    i = r[a], s = s || M(e, i);
  return t && s;
}
function ao(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function io(e, t) {
  arguments.length === 1 && (arguments[0] ? eo(arguments[0]) ? (e = arguments[0], t = void 0) : ro(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || T(), r = Us(s, this).startOf("day"), a = h.calendarFormat(this, r) || "sameElse", i = t && (re(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    i || this.localeData().calendar(a, this, T(s))
  );
}
function no() {
  return new gt(this);
}
function oo(e, t) {
  var s = J(e) ? e : T(e);
  return this.isValid() && s.isValid() ? (t = $(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function lo(e, t) {
  var s = J(e) ? e : T(e);
  return this.isValid() && s.isValid() ? (t = $(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function uo(e, t, s, r) {
  var a = J(e) ? e : T(e), i = J(t) ? t : T(t);
  return this.isValid() && a.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(i, s) : !this.isAfter(i, s))) : !1;
}
function ho(e, t) {
  var s = J(e) ? e : T(e), r;
  return this.isValid() && s.isValid() ? (t = $(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function co(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function fo(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function mo(e, t, s) {
  var r, a, i;
  if (!this.isValid())
    return NaN;
  if (r = Us(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = $(t), t) {
    case "year":
      i = Ot(this, r) / 12;
      break;
    case "month":
      i = Ot(this, r);
      break;
    case "quarter":
      i = Ot(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    case "minute":
      i = (this - r) / 6e4;
      break;
    case "hour":
      i = (this - r) / 36e5;
      break;
    case "day":
      i = (this - r - a) / 864e5;
      break;
    case "week":
      i = (this - r - a) / 6048e5;
      break;
    default:
      i = this - r;
  }
  return s ? i : Q(i);
}
function Ot(e, t) {
  if (e.date() < t.date())
    return -Ot(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, i;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), i = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), i = (t - r) / (a - r)), -(s + i) || 0;
}
h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function yo() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function _o(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? kt(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : re(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", kt(s, "Z")) : kt(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function go() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(s + r + a + i);
}
function wo(e) {
  e || (e = this.isUtc() ? h.defaultFormatUtc : h.defaultFormat);
  var t = kt(this, e);
  return this.localeData().postformat(t);
}
function vo(e, t) {
  return this.isValid() && (J(e) && e.isValid() || T(e).isValid()) ? K({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function po(e) {
  return this.from(T(), e);
}
function So(e, t) {
  return this.isValid() && (J(e) && e.isValid() || T(e).isValid()) ? K({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Mo(e) {
  return this.to(T(), e);
}
function sa(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = he(e), t != null && (this._locale = t), this);
}
var ra = q(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function aa() {
  return this._locale;
}
var Rt = 1e3, Ne = 60 * Rt, Tt = 60 * Ne, ia = (365 * 400 + 97) * 24 * Tt;
function We(e, t) {
  return (e % t + t) % t;
}
function na(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - ia : new Date(e, t, s).valueOf();
}
function oa(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - ia : Date.UTC(e, t, s);
}
function ko(e) {
  var t, s;
  if (e = $(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? oa : na, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= We(
        t + (this._isUTC ? 0 : this.utcOffset() * Ne),
        Tt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= We(t, Ne);
      break;
    case "second":
      t = this._d.valueOf(), t -= We(t, Rt);
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function Do(e) {
  var t, s;
  if (e = $(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? oa : na, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Tt - We(
        t + (this._isUTC ? 0 : this.utcOffset() * Ne),
        Tt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ne - We(t, Ne) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Rt - We(t, Rt) - 1;
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function Oo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function bo() {
  return Math.floor(this.valueOf() / 1e3);
}
function Yo() {
  return new Date(this.valueOf());
}
function Ro() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function To() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Po() {
  return this.isValid() ? this.toISOString() : null;
}
function xo() {
  return Ms(this);
}
function Co() {
  return ye({}, _(this));
}
function No() {
  return _(this).overflow;
}
function Wo() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
m("N", 0, 0, "eraAbbr");
m("NN", 0, 0, "eraAbbr");
m("NNN", 0, 0, "eraAbbr");
m("NNNN", 0, 0, "eraName");
m("NNNNN", 0, 0, "eraNarrow");
m("y", ["y", 1], "yo", "eraYear");
m("y", ["yy", 2], 0, "eraYear");
m("y", ["yyy", 3], 0, "eraYear");
m("y", ["yyyy", 4], 0, "eraYear");
f("N", As);
f("NN", As);
f("NNN", As);
f("NNNN", Go);
f("NNNNN", Qo);
b(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? _(s).era = a : _(s).invalidEra = e;
  }
);
f("y", je);
f("yy", je);
f("yyy", je);
f("yyyy", je);
f("yo", qo);
b(["y", "yy", "yyy", "yyyy"], U);
b(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[U] = s._locale.eraYearOrdinalParse(e, a) : t[U] = parseInt(e, 10);
});
function Fo(e, t) {
  var s, r, a, i = this._eras || he("en")._eras;
  for (s = 0, r = i.length; s < r; ++s) {
    switch (typeof i[s].since) {
      case "string":
        a = h(i[s].since).startOf("day"), i[s].since = a.valueOf();
        break;
    }
    switch (typeof i[s].until) {
      case "undefined":
        i[s].until = 1 / 0;
        break;
      case "string":
        a = h(i[s].until).startOf("day").valueOf(), i[s].until = a.valueOf();
        break;
    }
  }
  return i;
}
function Lo(e, t, s) {
  var r, a, i = this.eras(), n, o, d;
  for (e = e.toUpperCase(), r = 0, a = i.length; r < a; ++r)
    if (n = i[r].name.toUpperCase(), o = i[r].abbr.toUpperCase(), d = i[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[r];
          break;
        case "NNNN":
          if (n === e)
            return i[r];
          break;
        case "NNNNN":
          if (d === e)
            return i[r];
          break;
      }
    else if ([n, o, d].indexOf(e) >= 0)
      return i[r];
}
function Io(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? h(e.since).year() : h(e.since).year() + (t - e.offset) * s;
}
function Eo() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function Uo() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function Ao() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function Ho() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - h(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Vo(e) {
  return M(this, "_erasNameRegex") || Hs.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function jo(e) {
  return M(this, "_erasAbbrRegex") || Hs.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function zo(e) {
  return M(this, "_erasNarrowRegex") || Hs.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function As(e, t) {
  return t.erasAbbrRegex(e);
}
function Go(e, t) {
  return t.erasNameRegex(e);
}
function Qo(e, t) {
  return t.erasNarrowRegex(e);
}
function qo(e, t) {
  return t._eraYearOrdinalRegex || je;
}
function Hs() {
  var e = [], t = [], s = [], r = [], a, i, n, o, d, c = this.eras();
  for (a = 0, i = c.length; a < i; ++a)
    n = le(c[a].name), o = le(c[a].abbr), d = le(c[a].narrow), t.push(n), e.push(o), s.push(d), r.push(n), r.push(o), r.push(d);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
m(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
m(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ht(e, t) {
  m(0, [e, e.length], 0, t);
}
Ht("gggg", "weekYear");
Ht("ggggg", "weekYear");
Ht("GGGG", "isoWeekYear");
Ht("GGGGG", "isoWeekYear");
f("G", Lt);
f("g", Lt);
f("GG", P, z);
f("gg", P, z);
f("GGGG", Rs, Ys);
f("gggg", Rs, Ys);
f("GGGGG", Ft, Nt);
f("ggggg", Ft, Nt);
vt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = w(e);
  }
);
vt(["gg", "GG"], function(e, t, s, r) {
  t[r] = h.parseTwoDigitYear(e);
});
function $o(e) {
  return la.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Zo(e) {
  return la.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Bo() {
  return ue(this.year(), 1, 4);
}
function Jo() {
  return ue(this.isoWeekYear(), 1, 4);
}
function Ko() {
  var e = this.localeData()._week;
  return ue(this.year(), e.dow, e.doy);
}
function Xo() {
  var e = this.localeData()._week;
  return ue(this.weekYear(), e.dow, e.doy);
}
function la(e, t, s, r, a) {
  var i;
  return e == null ? et(this, r, a).year : (i = ue(e, r, a), t > i && (t = i), el.call(this, e, t, s, r, a));
}
function el(e, t, s, r, a) {
  var i = Hr(e, t, s, r, a), n = Xe(i.year, 0, i.dayOfYear);
  return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), this;
}
m("Q", 0, "Qo", "quarter");
f("Q", Pr);
b("Q", function(e, t) {
  t[ne] = (w(e) - 1) * 3;
});
function tl(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
m("D", ["DD", 2], "Do", "date");
f("D", P, ze);
f("DD", P, z);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
b(["D", "DD"], ee);
b("Do", function(e, t) {
  t[ee] = w(e.match(P)[0]);
});
var ua = Ge("Date", !0);
m("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
f("DDD", Wt);
f("DDDD", xr);
b(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = w(e);
});
function sl(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
m("m", ["mm", 2], 0, "minute");
f("m", P, Ts);
f("mm", P, z);
b(["m", "mm"], Z);
var rl = Ge("Minutes", !1);
m("s", ["ss", 2], 0, "second");
f("s", P, Ts);
f("ss", P, z);
b(["s", "ss"], oe);
var al = Ge("Seconds", !1);
m("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
m(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
m(0, ["SSS", 3], 0, "millisecond");
m(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
m(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
m(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
m(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
m(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
m(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
f("S", Wt, Pr);
f("SS", Wt, z);
f("SSS", Wt, xr);
var _e, da;
for (_e = "SSSS"; _e.length <= 9; _e += "S")
  f(_e, je);
function il(e, t) {
  t[ve] = w(("0." + e) * 1e3);
}
for (_e = "S"; _e.length <= 9; _e += "S")
  b(_e, il);
da = Ge("Milliseconds", !1);
m("z", 0, 0, "zoneAbbr");
m("zz", 0, 0, "zoneName");
function nl() {
  return this._isUTC ? "UTC" : "";
}
function ol() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = gt.prototype;
l.add = Kn;
l.calendar = io;
l.clone = no;
l.diff = mo;
l.endOf = Do;
l.format = wo;
l.from = vo;
l.fromNow = po;
l.to = So;
l.toNow = Mo;
l.get = yi;
l.invalidAt = No;
l.isAfter = oo;
l.isBefore = lo;
l.isBetween = uo;
l.isSame = ho;
l.isSameOrAfter = co;
l.isSameOrBefore = fo;
l.isValid = xo;
l.lang = ra;
l.locale = sa;
l.localeData = aa;
l.max = Pn;
l.min = Tn;
l.parsingFlags = Co;
l.set = _i;
l.startOf = ko;
l.subtract = Xn;
l.toArray = Ro;
l.toObject = To;
l.toDate = Yo;
l.toISOString = _o;
l.inspect = go;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = Po;
l.toString = yo;
l.unix = bo;
l.valueOf = Oo;
l.creationData = Wo;
l.eraName = Eo;
l.eraNarrow = Uo;
l.eraAbbr = Ao;
l.eraYear = Ho;
l.year = Wr;
l.isLeapYear = mi;
l.weekYear = $o;
l.isoWeekYear = Zo;
l.quarter = l.quarters = tl;
l.month = Ur;
l.daysInMonth = Oi;
l.week = l.weeks = Ni;
l.isoWeek = l.isoWeeks = Wi;
l.weeksInYear = Ko;
l.weeksInWeekYear = Xo;
l.isoWeeksInYear = Bo;
l.isoWeeksInISOWeekYear = Jo;
l.date = ua;
l.day = l.days = qi;
l.weekday = $i;
l.isoWeekday = Zi;
l.dayOfYear = sl;
l.hour = l.hours = sn;
l.minute = l.minutes = rl;
l.second = l.seconds = al;
l.millisecond = l.milliseconds = da;
l.utcOffset = Un;
l.utc = Hn;
l.local = Vn;
l.parseZone = jn;
l.hasAlignedHourOffset = zn;
l.isDST = Gn;
l.isLocal = qn;
l.isUtcOffset = $n;
l.isUtc = Kr;
l.isUTC = Kr;
l.zoneAbbr = nl;
l.zoneName = ol;
l.dates = q(
  "dates accessor is deprecated. Use date instead.",
  ua
);
l.months = q(
  "months accessor is deprecated. Use month instead",
  Ur
);
l.years = q(
  "years accessor is deprecated. Use year instead",
  Wr
);
l.zone = q(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  An
);
l.isDSTShifted = q(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Qn
);
function ll(e) {
  return T(e * 1e3);
}
function ul() {
  return T.apply(null, arguments).parseZone();
}
function ha(e) {
  return e;
}
var k = Ds.prototype;
k.calendar = Qa;
k.longDateFormat = Ba;
k.invalidDate = Ka;
k.ordinal = ti;
k.preparse = ha;
k.postformat = ha;
k.relativeTime = ri;
k.pastFuture = ai;
k.set = za;
k.eras = Fo;
k.erasParse = Lo;
k.erasConvertYear = Io;
k.erasAbbrRegex = jo;
k.erasNameRegex = Vo;
k.erasNarrowRegex = zo;
k.months = Si;
k.monthsShort = Mi;
k.monthsParse = Di;
k.monthsRegex = Yi;
k.monthsShortRegex = bi;
k.week = Ti;
k.firstDayOfYear = Ci;
k.firstDayOfWeek = xi;
k.weekdays = Vi;
k.weekdaysMin = zi;
k.weekdaysShort = ji;
k.weekdaysParse = Qi;
k.weekdaysRegex = Bi;
k.weekdaysShortRegex = Ji;
k.weekdaysMinRegex = Ki;
k.isPM = en;
k.meridiem = rn;
function Pt(e, t, s, r) {
  var a = he(), i = se().set(r, t);
  return a[s](i, e);
}
function ca(e, t, s) {
  if (de(e) && (t = e, e = void 0), e = e || "", t != null)
    return Pt(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Pt(e, r, s, "month");
  return a;
}
function Vs(e, t, s, r) {
  typeof e == "boolean" ? (de(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, de(t) && (s = t, t = void 0), t = t || "");
  var a = he(), i = e ? a._week.dow : 0, n, o = [];
  if (s != null)
    return Pt(t, (s + i) % 7, r, "day");
  for (n = 0; n < 7; n++)
    o[n] = Pt(t, (n + i) % 7, r, "day");
  return o;
}
function dl(e, t) {
  return ca(e, t, "months");
}
function hl(e, t) {
  return ca(e, t, "monthsShort");
}
function cl(e, t, s) {
  return Vs(e, t, s, "weekdays");
}
function fl(e, t, s) {
  return Vs(e, t, s, "weekdaysShort");
}
function ml(e, t, s) {
  return Vs(e, t, s, "weekdaysMin");
}
ge("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = w(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
h.lang = q(
  "moment.lang is deprecated. Use moment.locale instead.",
  ge
);
h.langData = q(
  "moment.langData is deprecated. Use moment.localeData instead.",
  he
);
var ae = Math.abs;
function yl() {
  var e = this._data;
  return this._milliseconds = ae(this._milliseconds), this._days = ae(this._days), this._months = ae(this._months), e.milliseconds = ae(e.milliseconds), e.seconds = ae(e.seconds), e.minutes = ae(e.minutes), e.hours = ae(e.hours), e.months = ae(e.months), e.years = ae(e.years), this;
}
function fa(e, t, s, r) {
  var a = K(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function _l(e, t) {
  return fa(this, e, t, 1);
}
function gl(e, t) {
  return fa(this, e, t, -1);
}
function ar(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function wl() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, i, n, o, d;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += ar(ws(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = Q(e / 1e3), r.seconds = a % 60, i = Q(a / 60), r.minutes = i % 60, n = Q(i / 60), r.hours = n % 24, t += Q(n / 24), d = Q(ma(t)), s += d, t -= ar(ws(d)), o = Q(s / 12), s %= 12, r.days = t, r.months = s, r.years = o, this;
}
function ma(e) {
  return e * 4800 / 146097;
}
function ws(e) {
  return e * 146097 / 4800;
}
function vl(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = $(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + ma(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(ws(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function ce(e) {
  return function() {
    return this.as(e);
  };
}
var ya = ce("ms"), pl = ce("s"), Sl = ce("m"), Ml = ce("h"), kl = ce("d"), Dl = ce("w"), Ol = ce("M"), bl = ce("Q"), Yl = ce("y"), Rl = ya;
function Tl() {
  return K(this);
}
function Pl(e) {
  return e = $(e), this.isValid() ? this[e + "s"]() : NaN;
}
function be(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var xl = be("milliseconds"), Cl = be("seconds"), Nl = be("minutes"), Wl = be("hours"), Fl = be("days"), Ll = be("months"), Il = be("years");
function El() {
  return Q(this.days() / 7);
}
var ie = Math.round, xe = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Ul(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function Al(e, t, s, r) {
  var a = K(e).abs(), i = ie(a.as("s")), n = ie(a.as("m")), o = ie(a.as("h")), d = ie(a.as("d")), c = ie(a.as("M")), y = ie(a.as("w")), g = ie(a.as("y")), S = i <= s.ss && ["s", i] || i < s.s && ["ss", i] || n <= 1 && ["m"] || n < s.m && ["mm", n] || o <= 1 && ["h"] || o < s.h && ["hh", o] || d <= 1 && ["d"] || d < s.d && ["dd", d];
  return s.w != null && (S = S || y <= 1 && ["w"] || y < s.w && ["ww", y]), S = S || c <= 1 && ["M"] || c < s.M && ["MM", c] || g <= 1 && ["y"] || ["yy", g], S[2] = t, S[3] = +e > 0, S[4] = r, Ul.apply(null, S);
}
function Hl(e) {
  return e === void 0 ? ie : typeof e == "function" ? (ie = e, !0) : !1;
}
function Vl(e, t) {
  return xe[e] === void 0 ? !1 : t === void 0 ? xe[e] : (xe[e] = t, e === "s" && (xe.ss = t - 1), !0);
}
function jl(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = xe, a, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, xe, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), i = Al(this, !s, r, a), s && (i = a.pastFuture(+this, i)), a.postformat(i);
}
var Bt = Math.abs;
function Re(e) {
  return (e > 0) - (e < 0) || +e;
}
function Vt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Bt(this._milliseconds) / 1e3, t = Bt(this._days), s = Bt(this._months), r, a, i, n, o = this.asSeconds(), d, c, y, g;
  return o ? (r = Q(e / 60), a = Q(r / 60), e %= 60, r %= 60, i = Q(s / 12), s %= 12, n = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = o < 0 ? "-" : "", c = Re(this._months) !== Re(o) ? "-" : "", y = Re(this._days) !== Re(o) ? "-" : "", g = Re(this._milliseconds) !== Re(o) ? "-" : "", d + "P" + (i ? c + i + "Y" : "") + (s ? c + s + "M" : "") + (t ? y + t + "D" : "") + (a || r || e ? "T" : "") + (a ? g + a + "H" : "") + (r ? g + r + "M" : "") + (e ? g + n + "S" : "")) : "P0D";
}
var p = At.prototype;
p.isValid = Fn;
p.abs = yl;
p.add = _l;
p.subtract = gl;
p.as = vl;
p.asMilliseconds = ya;
p.asSeconds = pl;
p.asMinutes = Sl;
p.asHours = Ml;
p.asDays = kl;
p.asWeeks = Dl;
p.asMonths = Ol;
p.asQuarters = bl;
p.asYears = Yl;
p.valueOf = Rl;
p._bubble = wl;
p.clone = Tl;
p.get = Pl;
p.milliseconds = xl;
p.seconds = Cl;
p.minutes = Nl;
p.hours = Wl;
p.days = Fl;
p.weeks = El;
p.months = Ll;
p.years = Il;
p.humanize = jl;
p.toISOString = Vt;
p.toString = Vt;
p.toJSON = Vt;
p.locale = sa;
p.localeData = aa;
p.toIsoString = q(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Vt
);
p.lang = ra;
m("X", 0, 0, "unix");
m("x", 0, 0, "valueOf");
f("x", Lt);
f("X", li);
b("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
b("x", function(e, t, s) {
  s._d = new Date(w(e));
});
//! moment.js
h.version = "2.30.1";
Va(T);
h.fn = l;
h.min = xn;
h.max = Cn;
h.now = Nn;
h.utc = se;
h.unix = ll;
h.months = dl;
h.isDate = _t;
h.locale = ge;
h.invalid = Ct;
h.duration = K;
h.isMoment = J;
h.weekdays = cl;
h.parseZone = ul;
h.localeData = he;
h.isDuration = Dt;
h.monthsShort = hl;
h.weekdaysMin = ml;
h.defineLocale = Ws;
h.updateLocale = ln;
h.locales = un;
h.weekdaysShort = fl;
h.normalizeUnits = $;
h.relativeTimeRounding = Hl;
h.relativeTimeThreshold = Vl;
h.calendarFormat = ao;
h.prototype = l;
h.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const zl = (e, t) => {
  const s = Fa(`/api/getDictionary/${e}`, {
    ...t,
    staleTime: 36e5,
    select: (i) => i.data
  }), r = F.useCallback((i) => {
    if (s.data)
      return s.data.find((n) => n.id == i);
  }, [s.data]), a = F.useCallback((i) => {
    var n;
    return (n = r(i)) == null ? void 0 : n.name;
  }, [r]);
  return F.useMemo(() => ({
    data: s.data,
    getEntryById: r,
    getValueById: a,
    isLoading: s.isLoading,
    isError: s.isError,
    error: s.error
  }), [s, r, a]);
}, Gl = ({
  info: e,
  dictionary: t
}) => {
  const {
    getValueById: s,
    isLoading: r
  } = zl(t);
  return r ? /* @__PURE__ */ W(Te, { css: {
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, icon: ka.faCircleNotch, spin: !0 }) : s(e.getValue());
}, tu = or.memo(Gl);
export {
  tu as D,
  eu as P,
  Xl as a,
  Fa as b,
  Ua as c,
  Kl as d,
  zl as e,
  Aa as f,
  h,
  Pa as s,
  wr as u
};
