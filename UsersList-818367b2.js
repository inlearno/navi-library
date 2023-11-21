var X = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var i = (s, t, e) => (X(s, t, "read from private field"), e ? e.call(s) : t.get(s)), c = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, n = (s, t, e, r) => (X(s, t, "write to private field"), r ? r.call(s, e) : t.set(s, e), e);
var d = (s, t, e) => (X(s, t, "access private method"), e);
import { S as vt, s as Y, n as Ot, i as lt, a as dt, t as St, f as Et, c as wt, r as ft, b as bt, u as Qt, d as Ut, e as xt, j as W, g as It } from "./library-b5abd821.js";
import { C as Ft, P as Pt } from "./Panel-f4a91a53.js";
import { r as C } from "./react-72acea58.js";
import "./mui-36ebfa29.js";
import "./icons-a8a50daa.js";
var y, h, I, p, E, F, R, M, P, T, w, Q, S, U, x, L, A, Z, k, $, B, tt, H, et, j, st, z, it, K, rt, q, gt, mt, Tt = (mt = class extends vt {
  constructor(t, e) {
    super();
    c(this, x);
    c(this, A);
    c(this, k);
    c(this, B);
    c(this, H);
    c(this, j);
    c(this, z);
    c(this, K);
    c(this, q);
    c(this, y, void 0);
    c(this, h, void 0);
    c(this, I, void 0);
    c(this, p, void 0);
    c(this, E, void 0);
    c(this, F, void 0);
    c(this, R, void 0);
    c(this, M, void 0);
    c(this, P, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    c(this, T, void 0);
    c(this, w, void 0);
    c(this, Q, void 0);
    c(this, S, void 0);
    c(this, U, void 0);
    n(this, h, void 0), n(this, I, void 0), n(this, p, void 0), n(this, U, /* @__PURE__ */ new Set()), n(this, y, t), this.options = e, n(this, R, null), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (i(this, h).addObserver(this), pt(i(this, h), this.options) ? d(this, x, L).call(this) : this.updateResult(), d(this, H, et).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return nt(
      i(this, h),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return nt(
      i(this, h),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), d(this, j, st).call(this), d(this, z, it).call(this), i(this, h).removeObserver(this);
  }
  setOptions(t, e) {
    const r = this.options, f = i(this, h);
    if (this.options = i(this, y).defaultQueryOptions(t), Y(r, this.options) || i(this, y).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: i(this, h),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), d(this, K, rt).call(this);
    const a = this.hasListeners();
    a && yt(
      i(this, h),
      f,
      this.options,
      r
    ) && d(this, x, L).call(this), this.updateResult(e), a && (i(this, h) !== f || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && d(this, A, Z).call(this);
    const o = d(this, k, $).call(this);
    a && (i(this, h) !== f || this.options.enabled !== r.enabled || o !== i(this, S)) && d(this, B, tt).call(this, o);
  }
  getOptimisticResult(t) {
    const e = i(this, y).getQueryCache().build(i(this, y), t), r = this.createResult(e, t);
    return Lt(this, r) && (n(this, p, r), n(this, F, this.options), n(this, E, i(this, h).state)), r;
  }
  getCurrentResult() {
    return i(this, p);
  }
  trackResult(t) {
    const e = {};
    return Object.keys(t).forEach((r) => {
      Object.defineProperty(e, r, {
        configurable: !1,
        enumerable: !0,
        get: () => (i(this, U).add(r), t[r])
      });
    }), e;
  }
  getCurrentQuery() {
    return i(this, h);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const e = i(this, y).defaultQueryOptions(t), r = i(this, y).getQueryCache().build(i(this, y), e);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e));
  }
  fetch(t) {
    return d(this, x, L).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), i(this, p)));
  }
  createResult(t, e) {
    var ct;
    const r = i(this, h), f = this.options, a = i(this, p), o = i(this, E), l = i(this, F), v = t !== r ? t.state : i(this, I), { state: u } = t;
    let { error: N, errorUpdatedAt: ot, fetchStatus: D, status: O } = u, ht = !1, g;
    if (e._optimisticResults) {
      const m = this.hasListeners(), G = !m && pt(t, e), Ct = m && yt(t, r, e, f);
      (G || Ct) && (D = wt(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (O = "pending")), e._optimisticResults === "isRestoring" && (D = "idle");
    }
    if (e.select && typeof u.data < "u")
      if (a && u.data === (o == null ? void 0 : o.data) && e.select === i(this, M))
        g = i(this, P);
      else
        try {
          n(this, M, e.select), g = e.select(u.data), g = ft(a == null ? void 0 : a.data, g, e), n(this, P, g), n(this, R, null);
        } catch (m) {
          n(this, R, m);
        }
    else
      g = u.data;
    if (typeof e.placeholderData < "u" && typeof g > "u" && O === "pending") {
      let m;
      if (a != null && a.isPlaceholderData && e.placeholderData === (l == null ? void 0 : l.placeholderData))
        m = a.data;
      else if (m = typeof e.placeholderData == "function" ? e.placeholderData(
        (ct = i(this, T)) == null ? void 0 : ct.state.data,
        i(this, T)
      ) : e.placeholderData, e.select && typeof m < "u")
        try {
          m = e.select(m), n(this, R, null);
        } catch (G) {
          n(this, R, G);
        }
      typeof m < "u" && (O = "success", g = ft(
        a == null ? void 0 : a.data,
        m,
        e
      ), ht = !0);
    }
    i(this, R) && (N = i(this, R), g = i(this, P), ot = Date.now(), O = "error");
    const V = D === "fetching", _ = O === "pending", J = O === "error", ut = _ && V;
    return {
      status: O,
      fetchStatus: D,
      isPending: _,
      isSuccess: O === "success",
      isError: J,
      isInitialLoading: ut,
      isLoading: ut,
      data: g,
      dataUpdatedAt: u.dataUpdatedAt,
      error: N,
      errorUpdatedAt: ot,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > v.dataUpdateCount || u.errorUpdateCount > v.errorUpdateCount,
      isFetching: V,
      isRefetching: V && !_,
      isLoadingError: J && u.dataUpdatedAt === 0,
      isPaused: D === "paused",
      isPlaceholderData: ht,
      isRefetchError: J && u.dataUpdatedAt !== 0,
      isStale: at(t, e),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const e = i(this, p), r = this.createResult(i(this, h), this.options);
    if (n(this, E, i(this, h).state), n(this, F, this.options), i(this, E).data !== void 0 && n(this, T, i(this, h)), Y(r, e))
      return;
    n(this, p, r);
    const f = {}, a = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: o } = this.options, l = typeof o == "function" ? o() : o;
      if (l === "all" || !l && !i(this, U).size)
        return !0;
      const b = new Set(
        l ?? i(this, U)
      );
      return this.options.throwOnError && b.add("error"), Object.keys(i(this, p)).some((v) => {
        const u = v;
        return i(this, p)[u] !== e[u] && b.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && a() && (f.listeners = !0), d(this, q, gt).call(this, { ...f, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && d(this, H, et).call(this);
  }
}, y = new WeakMap(), h = new WeakMap(), I = new WeakMap(), p = new WeakMap(), E = new WeakMap(), F = new WeakMap(), R = new WeakMap(), M = new WeakMap(), P = new WeakMap(), T = new WeakMap(), w = new WeakMap(), Q = new WeakMap(), S = new WeakMap(), U = new WeakMap(), x = new WeakSet(), L = function(t) {
  d(this, K, rt).call(this);
  let e = i(this, h).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (e = e.catch(Ot)), e;
}, A = new WeakSet(), Z = function() {
  if (d(this, j, st).call(this), lt || i(this, p).isStale || !dt(this.options.staleTime))
    return;
  const e = St(
    i(this, p).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  n(this, w, setTimeout(() => {
    i(this, p).isStale || this.updateResult();
  }, e));
}, k = new WeakSet(), $ = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(i(this, h)) : this.options.refetchInterval) ?? !1;
}, B = new WeakSet(), tt = function(t) {
  d(this, z, it).call(this), n(this, S, t), !(lt || this.options.enabled === !1 || !dt(i(this, S)) || i(this, S) === 0) && n(this, Q, setInterval(() => {
    (this.options.refetchIntervalInBackground || Et.isFocused()) && d(this, x, L).call(this);
  }, i(this, S)));
}, H = new WeakSet(), et = function() {
  d(this, A, Z).call(this), d(this, B, tt).call(this, d(this, k, $).call(this));
}, j = new WeakSet(), st = function() {
  i(this, w) && (clearTimeout(i(this, w)), n(this, w, void 0));
}, z = new WeakSet(), it = function() {
  i(this, Q) && (clearInterval(i(this, Q)), n(this, Q, void 0));
}, K = new WeakSet(), rt = function() {
  const t = i(this, y).getQueryCache().build(i(this, y), this.options);
  if (t === i(this, h))
    return;
  const e = i(this, h);
  n(this, h, t), n(this, I, t.state), this.hasListeners() && (e == null || e.removeObserver(this), t.addObserver(this));
}, q = new WeakSet(), gt = function(t) {
  bt.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(i(this, p));
    }), i(this, y).getQueryCache().notify({
      query: i(this, h),
      type: "observerResultsUpdated"
    });
  });
}, mt);
function Dt(s, t) {
  return t.enabled !== !1 && !s.state.dataUpdatedAt && !(s.state.status === "error" && t.retryOnMount === !1);
}
function pt(s, t) {
  return Dt(s, t) || s.state.dataUpdatedAt > 0 && nt(s, t, t.refetchOnMount);
}
function nt(s, t, e) {
  if (t.enabled !== !1) {
    const r = typeof e == "function" ? e(s) : e;
    return r === "always" || r !== !1 && at(s, t);
  }
  return !1;
}
function yt(s, t, e, r) {
  return e.enabled !== !1 && (s !== t || r.enabled === !1) && (!e.suspense || s.state.status !== "error") && at(s, e);
}
function at(s, t) {
  return s.isStaleByTime(t.staleTime);
}
function Lt(s, t) {
  return !Y(s.getCurrentResult(), t);
}
var Rt = C.createContext(!1), Mt = () => C.useContext(Rt);
Rt.Provider;
function At() {
  let s = !1;
  return {
    clearReset: () => {
      s = !1;
    },
    reset: () => {
      s = !0;
    },
    isReset: () => s
  };
}
var kt = C.createContext(At()), Bt = () => C.useContext(kt);
function Ht(s, t) {
  return typeof s == "function" ? s(...t) : !!s;
}
var jt = (s, t) => {
  (s.suspense || s.throwOnError) && (t.isReset() || (s.retryOnMount = !1));
}, zt = (s) => {
  C.useEffect(() => {
    s.clearReset();
  }, [s]);
}, Kt = ({
  result: s,
  errorResetBoundary: t,
  throwOnError: e,
  query: r
}) => s.isError && !t.isReset() && !s.isFetching && Ht(e, [s.error, r]), Wt = (s) => {
  s.suspense && typeof s.staleTime != "number" && (s.staleTime = 1e3);
}, qt = (s, t) => (s == null ? void 0 : s.suspense) && t.isPending, Nt = (s, t, e) => t.fetchOptimistic(s).catch(() => {
  e.clearReset();
});
function Vt(s, t, e) {
  const r = Qt(e), f = Mt(), a = Bt(), o = r.defaultQueryOptions(s);
  o._optimisticResults = f ? "isRestoring" : "optimistic", Wt(o), jt(o, a), zt(a);
  const [l] = C.useState(
    () => new t(
      r,
      o
    )
  ), b = l.getOptimisticResult(o);
  if (C.useSyncExternalStore(
    C.useCallback(
      (v) => {
        const u = f ? () => {
        } : l.subscribe(bt.batchCalls(v));
        return l.updateResult(), u;
      },
      [l, f]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), C.useEffect(() => {
    l.setOptions(o, { listeners: !1 });
  }, [o, l]), qt(o, b))
    throw Nt(o, l, a);
  if (Kt({
    result: b,
    errorResetBoundary: a,
    throwOnError: o.throwOnError,
    query: l.getCurrentQuery()
  }))
    throw b.error;
  return o.notifyOnChangeProps ? b : l.trackResult(b);
}
function _t(s, t) {
  return Vt(s, Tt, t);
}
const Jt = () => {
  const {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: r,
    fold: f,
    setWidth: a,
    setHeight: o,
    updatePosition: l
  } = Ut();
  return {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: r,
    fold: f,
    setWidth: a,
    setHeight: o,
    updatePosition: l
  };
}, Gt = () => {
  const s = xt();
  if (!s)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return s.client;
};
function Xt(s, t) {
  let e;
  typeof s == "string" ? e = {
    url: s,
    ...t
  } : e = s;
  const {
    url: r,
    params: f,
    ...a
  } = e, o = Gt();
  return _t({
    queryKey: f ? [r, f] : [r],
    queryFn: async ({
      queryKey: [l, b],
      signal: v
    }) => {
      const {
        data: u
      } = await o.get(l, {
        params: b,
        signal: v
      });
      return u;
    },
    ...a
  });
}
const re = () => {
  const {
    close: s
  } = Jt(), {
    data: t,
    isLoading: e
  } = Xt("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: r
    }) => r
  });
  return /* @__PURE__ */ W(Pt, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ W(Ft, { onClick: s, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ W(It, { spinning: e, children: /* @__PURE__ */ W("pre", { children: JSON.stringify(t, void 0, 2) }) }) });
};
export {
  re as default
};
