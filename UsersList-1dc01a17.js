var G = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var i = (s, t, e) => (G(s, t, "read from private field"), e ? e.call(s) : t.get(s)), c = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, n = (s, t, e, r) => (G(s, t, "write to private field"), r ? r.call(s, e) : t.set(s, e), e);
var d = (s, t, e) => (G(s, t, "access private method"), e);
import { S as Ot, s as Y, n as wt, i as lt, a as dt, t as Et, f as St, c as xt, r as ft, b as mt, u as Qt, d as Ut, j as X } from "./library-12fbf959.js";
import { C as It, P as Ft } from "./Panel-a6c773e1.js";
import { r as C, R as Rt } from "./react-72acea58.js";
import "./mui-36ebfa29.js";
import "./icons-a8a50daa.js";
var y, a, I, f, E, F, g, A, P, T, S, x, w, Q, U, M, L, Z, k, $, B, tt, H, et, W, st, j, it, K, rt, q, gt, bt, Pt = (bt = class extends Ot {
  constructor(t, e) {
    super();
    c(this, U);
    c(this, L);
    c(this, k);
    c(this, B);
    c(this, H);
    c(this, W);
    c(this, j);
    c(this, K);
    c(this, q);
    c(this, y, void 0);
    c(this, a, void 0);
    c(this, I, void 0);
    c(this, f, void 0);
    c(this, E, void 0);
    c(this, F, void 0);
    c(this, g, void 0);
    c(this, A, void 0);
    c(this, P, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    c(this, T, void 0);
    c(this, S, void 0);
    c(this, x, void 0);
    c(this, w, void 0);
    c(this, Q, void 0);
    n(this, a, void 0), n(this, I, void 0), n(this, f, void 0), n(this, Q, /* @__PURE__ */ new Set()), n(this, y, t), this.options = e, n(this, g, null), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (i(this, a).addObserver(this), pt(i(this, a), this.options) ? d(this, U, M).call(this) : this.updateResult(), d(this, H, et).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return nt(
      i(this, a),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return nt(
      i(this, a),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), d(this, W, st).call(this), d(this, j, it).call(this), i(this, a).removeObserver(this);
  }
  setOptions(t, e) {
    const r = this.options, p = i(this, a);
    if (this.options = i(this, y).defaultQueryOptions(t), Y(r, this.options) || i(this, y).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: i(this, a),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), d(this, K, rt).call(this);
    const o = this.hasListeners();
    o && yt(
      i(this, a),
      p,
      this.options,
      r
    ) && d(this, U, M).call(this), this.updateResult(e), o && (i(this, a) !== p || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && d(this, L, Z).call(this);
    const h = d(this, k, $).call(this);
    o && (i(this, a) !== p || this.options.enabled !== r.enabled || h !== i(this, w)) && d(this, B, tt).call(this, h);
  }
  getOptimisticResult(t) {
    const e = i(this, y).getQueryCache().build(i(this, y), t), r = this.createResult(e, t);
    return Dt(this, r) && (n(this, f, r), n(this, F, this.options), n(this, E, i(this, a).state)), r;
  }
  getCurrentResult() {
    return i(this, f);
  }
  trackResult(t) {
    const e = {};
    return Object.keys(t).forEach((r) => {
      Object.defineProperty(e, r, {
        configurable: !1,
        enumerable: !0,
        get: () => (i(this, Q).add(r), t[r])
      });
    }), e;
  }
  getCurrentQuery() {
    return i(this, a);
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
    return d(this, U, M).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), i(this, f)));
  }
  createResult(t, e) {
    var ct;
    const r = i(this, a), p = this.options, o = i(this, f), h = i(this, E), l = i(this, F), v = t !== r ? t.state : i(this, I), { state: u } = t;
    let { error: z, errorUpdatedAt: ot, fetchStatus: D, status: O } = u, ht = !1, R;
    if (e._optimisticResults) {
      const b = this.hasListeners(), J = !b && pt(t, e), vt = b && yt(t, r, e, p);
      (J || vt) && (D = xt(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (O = "pending")), e._optimisticResults === "isRestoring" && (D = "idle");
    }
    if (e.select && typeof u.data < "u")
      if (o && u.data === (h == null ? void 0 : h.data) && e.select === i(this, A))
        R = i(this, P);
      else
        try {
          n(this, A, e.select), R = e.select(u.data), R = ft(o == null ? void 0 : o.data, R, e), n(this, P, R), n(this, g, null);
        } catch (b) {
          n(this, g, b);
        }
    else
      R = u.data;
    if (typeof e.placeholderData < "u" && typeof R > "u" && O === "pending") {
      let b;
      if (o != null && o.isPlaceholderData && e.placeholderData === (l == null ? void 0 : l.placeholderData))
        b = o.data;
      else if (b = typeof e.placeholderData == "function" ? e.placeholderData(
        (ct = i(this, T)) == null ? void 0 : ct.state.data,
        i(this, T)
      ) : e.placeholderData, e.select && typeof b < "u")
        try {
          b = e.select(b), n(this, g, null);
        } catch (J) {
          n(this, g, J);
        }
      typeof b < "u" && (O = "success", R = ft(
        o == null ? void 0 : o.data,
        b,
        e
      ), ht = !0);
    }
    i(this, g) && (z = i(this, g), R = i(this, P), ot = Date.now(), O = "error");
    const N = D === "fetching", V = O === "pending", _ = O === "error", ut = V && N;
    return {
      status: O,
      fetchStatus: D,
      isPending: V,
      isSuccess: O === "success",
      isError: _,
      isInitialLoading: ut,
      isLoading: ut,
      data: R,
      dataUpdatedAt: u.dataUpdatedAt,
      error: z,
      errorUpdatedAt: ot,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > v.dataUpdateCount || u.errorUpdateCount > v.errorUpdateCount,
      isFetching: N,
      isRefetching: N && !V,
      isLoadingError: _ && u.dataUpdatedAt === 0,
      isPaused: D === "paused",
      isPlaceholderData: ht,
      isRefetchError: _ && u.dataUpdatedAt !== 0,
      isStale: at(t, e),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const e = i(this, f), r = this.createResult(i(this, a), this.options);
    if (n(this, E, i(this, a).state), n(this, F, this.options), i(this, E).data !== void 0 && n(this, T, i(this, a)), Y(r, e))
      return;
    n(this, f, r);
    const p = {}, o = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: h } = this.options, l = typeof h == "function" ? h() : h;
      if (l === "all" || !l && !i(this, Q).size)
        return !0;
      const m = new Set(
        l ?? i(this, Q)
      );
      return this.options.throwOnError && m.add("error"), Object.keys(i(this, f)).some((v) => {
        const u = v;
        return i(this, f)[u] !== e[u] && m.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (p.listeners = !0), d(this, q, gt).call(this, { ...p, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && d(this, H, et).call(this);
  }
}, y = new WeakMap(), a = new WeakMap(), I = new WeakMap(), f = new WeakMap(), E = new WeakMap(), F = new WeakMap(), g = new WeakMap(), A = new WeakMap(), P = new WeakMap(), T = new WeakMap(), S = new WeakMap(), x = new WeakMap(), w = new WeakMap(), Q = new WeakMap(), U = new WeakSet(), M = function(t) {
  d(this, K, rt).call(this);
  let e = i(this, a).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (e = e.catch(wt)), e;
}, L = new WeakSet(), Z = function() {
  if (d(this, W, st).call(this), lt || i(this, f).isStale || !dt(this.options.staleTime))
    return;
  const e = Et(
    i(this, f).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  n(this, S, setTimeout(() => {
    i(this, f).isStale || this.updateResult();
  }, e));
}, k = new WeakSet(), $ = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(i(this, a)) : this.options.refetchInterval) ?? !1;
}, B = new WeakSet(), tt = function(t) {
  d(this, j, it).call(this), n(this, w, t), !(lt || this.options.enabled === !1 || !dt(i(this, w)) || i(this, w) === 0) && n(this, x, setInterval(() => {
    (this.options.refetchIntervalInBackground || St.isFocused()) && d(this, U, M).call(this);
  }, i(this, w)));
}, H = new WeakSet(), et = function() {
  d(this, L, Z).call(this), d(this, B, tt).call(this, d(this, k, $).call(this));
}, W = new WeakSet(), st = function() {
  i(this, S) && (clearTimeout(i(this, S)), n(this, S, void 0));
}, j = new WeakSet(), it = function() {
  i(this, x) && (clearInterval(i(this, x)), n(this, x, void 0));
}, K = new WeakSet(), rt = function() {
  const t = i(this, y).getQueryCache().build(i(this, y), this.options);
  if (t === i(this, a))
    return;
  const e = i(this, a);
  n(this, a, t), n(this, I, t.state), this.hasListeners() && (e == null || e.removeObserver(this), t.addObserver(this));
}, q = new WeakSet(), gt = function(t) {
  mt.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(i(this, f));
    }), i(this, y).getQueryCache().notify({
      query: i(this, a),
      type: "observerResultsUpdated"
    });
  });
}, bt);
function Tt(s, t) {
  return t.enabled !== !1 && !s.state.dataUpdatedAt && !(s.state.status === "error" && t.retryOnMount === !1);
}
function pt(s, t) {
  return Tt(s, t) || s.state.dataUpdatedAt > 0 && nt(s, t, t.refetchOnMount);
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
function Dt(s, t) {
  return !Y(s.getCurrentResult(), t);
}
var Ct = C.createContext(!1), Mt = () => C.useContext(Ct);
Ct.Provider;
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
var Lt = C.createContext(At()), kt = () => C.useContext(Lt);
function Bt(s, t) {
  return typeof s == "function" ? s(...t) : !!s;
}
var Ht = (s, t) => {
  (s.suspense || s.throwOnError) && (t.isReset() || (s.retryOnMount = !1));
}, Wt = (s) => {
  C.useEffect(() => {
    s.clearReset();
  }, [s]);
}, jt = ({
  result: s,
  errorResetBoundary: t,
  throwOnError: e,
  query: r
}) => s.isError && !t.isReset() && !s.isFetching && Bt(e, [s.error, r]), Kt = (s) => {
  s.suspense && typeof s.staleTime != "number" && (s.staleTime = 1e3);
}, qt = (s, t) => (s == null ? void 0 : s.suspense) && t.isPending, zt = (s, t, e) => t.fetchOptimistic(s).catch(() => {
  e.clearReset();
});
function Nt(s, t, e) {
  const r = Qt(e), p = Mt(), o = kt(), h = r.defaultQueryOptions(s);
  h._optimisticResults = p ? "isRestoring" : "optimistic", Kt(h), Ht(h, o), Wt(o);
  const [l] = C.useState(
    () => new t(
      r,
      h
    )
  ), m = l.getOptimisticResult(h);
  if (C.useSyncExternalStore(
    C.useCallback(
      (v) => {
        const u = p ? () => {
        } : l.subscribe(mt.batchCalls(v));
        return l.updateResult(), u;
      },
      [l, p]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), C.useEffect(() => {
    l.setOptions(h, { listeners: !1 });
  }, [h, l]), qt(h, m))
    throw zt(h, l, o);
  if (jt({
    result: m,
    errorResetBoundary: o,
    throwOnError: h.throwOnError,
    query: l.getCurrentQuery()
  }))
    throw m.error;
  return h.notifyOnChangeProps ? m : l.trackResult(m);
}
function Vt(s, t) {
  return Nt(s, Pt, t);
}
const _t = Rt.createContext(null), Jt = () => {
  const s = Rt.useContext(_t);
  if (!s)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return s;
}, Gt = () => {
  const s = Ut();
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
    params: p,
    ...o
  } = e, h = Gt();
  return Vt({
    queryKey: p ? [r, p] : [r],
    queryFn: async ({
      queryKey: [l, m],
      signal: v
    }) => {
      const {
        data: u
      } = await h.get(l, {
        params: m,
        signal: v
      });
      return u;
    },
    ...o
  });
}
const re = () => {
  const {
    close: s
  } = Jt(), {
    data: t
  } = Xt("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: e
    }) => e
  });
  return /* @__PURE__ */ X(Ft, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ X(It, { onClick: s, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ X("pre", { children: JSON.stringify(t, void 0, 2) }) });
};
export {
  re as default
};
