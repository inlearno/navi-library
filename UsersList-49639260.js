var X = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var r = (s, t, e) => (X(s, t, "read from private field"), e ? e.call(s) : t.get(s)), u = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, n = (s, t, e, i) => (X(s, t, "write to private field"), i ? i.call(s, e) : t.set(s, e), e);
var d = (s, t, e) => (X(s, t, "access private method"), e);
import { S as Ot, s as Y, n as wt, i as lt, a as dt, t as xt, f as St, c as Et, r as ft, b as gt, u as Qt, j as g, d as Ut, e as Tt, g as It, h as Pt } from "./library-fcff51cc.js";
import { C as Ft, P as Dt } from "./Panel-cc9d7d18.js";
import { f as pt, u as Mt, g as Lt } from "./table-46c094fe.js";
import { r as v } from "./react-72acea58.js";
import "./mui-36ebfa29.js";
import "./icons-a8a50daa.js";
var m, h, I, p, S, P, C, W, F, D, E, Q, x, U, T, L, k, Z, A, $, B, tt, K, et, H, st, j, rt, z, it, V, Rt, bt, Wt = (bt = class extends Ot {
  constructor(t, e) {
    super();
    u(this, T);
    u(this, k);
    u(this, A);
    u(this, B);
    u(this, K);
    u(this, H);
    u(this, j);
    u(this, z);
    u(this, V);
    u(this, m, void 0);
    u(this, h, void 0);
    u(this, I, void 0);
    u(this, p, void 0);
    u(this, S, void 0);
    u(this, P, void 0);
    u(this, C, void 0);
    u(this, W, void 0);
    u(this, F, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    u(this, D, void 0);
    u(this, E, void 0);
    u(this, Q, void 0);
    u(this, x, void 0);
    u(this, U, void 0);
    n(this, h, void 0), n(this, I, void 0), n(this, p, void 0), n(this, U, /* @__PURE__ */ new Set()), n(this, m, t), this.options = e, n(this, C, null), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (r(this, h).addObserver(this), mt(r(this, h), this.options) ? d(this, T, L).call(this) : this.updateResult(), d(this, K, et).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return nt(
      r(this, h),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return nt(
      r(this, h),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), d(this, H, st).call(this), d(this, j, rt).call(this), r(this, h).removeObserver(this);
  }
  setOptions(t, e) {
    const i = this.options, f = r(this, h);
    if (this.options = r(this, m).defaultQueryOptions(t), Y(i, this.options) || r(this, m).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: r(this, h),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = i.queryKey), d(this, z, it).call(this);
    const a = this.hasListeners();
    a && yt(
      r(this, h),
      f,
      this.options,
      i
    ) && d(this, T, L).call(this), this.updateResult(e), a && (r(this, h) !== f || this.options.enabled !== i.enabled || this.options.staleTime !== i.staleTime) && d(this, k, Z).call(this);
    const o = d(this, A, $).call(this);
    a && (r(this, h) !== f || this.options.enabled !== i.enabled || o !== r(this, x)) && d(this, B, tt).call(this, o);
  }
  getOptimisticResult(t) {
    const e = r(this, m).getQueryCache().build(r(this, m), t), i = this.createResult(e, t);
    return At(this, i) && (n(this, p, i), n(this, P, this.options), n(this, S, r(this, h).state)), i;
  }
  getCurrentResult() {
    return r(this, p);
  }
  trackResult(t) {
    const e = {};
    return Object.keys(t).forEach((i) => {
      Object.defineProperty(e, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (r(this, U).add(i), t[i])
      });
    }), e;
  }
  getCurrentQuery() {
    return r(this, h);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const e = r(this, m).defaultQueryOptions(t), i = r(this, m).getQueryCache().build(r(this, m), e);
    return i.isFetchingOptimistic = !0, i.fetch().then(() => this.createResult(i, e));
  }
  fetch(t) {
    return d(this, T, L).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), r(this, p)));
  }
  createResult(t, e) {
    var ut;
    const i = r(this, h), f = this.options, a = r(this, p), o = r(this, S), l = r(this, P), O = t !== i ? t.state : r(this, I), { state: c } = t;
    let { error: _, errorUpdatedAt: ot, fetchStatus: M, status: w } = c, ht = !1, R;
    if (e._optimisticResults) {
      const y = this.hasListeners(), J = !y && mt(t, e), vt = y && yt(t, i, e, f);
      (J || vt) && (M = Et(t.options.networkMode) ? "fetching" : "paused", c.dataUpdatedAt || (w = "pending")), e._optimisticResults === "isRestoring" && (M = "idle");
    }
    if (e.select && typeof c.data < "u")
      if (a && c.data === (o == null ? void 0 : o.data) && e.select === r(this, W))
        R = r(this, F);
      else
        try {
          n(this, W, e.select), R = e.select(c.data), R = ft(a == null ? void 0 : a.data, R, e), n(this, F, R), n(this, C, null);
        } catch (y) {
          n(this, C, y);
        }
    else
      R = c.data;
    if (typeof e.placeholderData < "u" && typeof R > "u" && w === "pending") {
      let y;
      if (a != null && a.isPlaceholderData && e.placeholderData === (l == null ? void 0 : l.placeholderData))
        y = a.data;
      else if (y = typeof e.placeholderData == "function" ? e.placeholderData(
        (ut = r(this, D)) == null ? void 0 : ut.state.data,
        r(this, D)
      ) : e.placeholderData, e.select && typeof y < "u")
        try {
          y = e.select(y), n(this, C, null);
        } catch (J) {
          n(this, C, J);
        }
      typeof y < "u" && (w = "success", R = ft(
        a == null ? void 0 : a.data,
        y,
        e
      ), ht = !0);
    }
    r(this, C) && (_ = r(this, C), R = r(this, F), ot = Date.now(), w = "error");
    const q = M === "fetching", N = w === "pending", G = w === "error", ct = N && q;
    return {
      status: w,
      fetchStatus: M,
      isPending: N,
      isSuccess: w === "success",
      isError: G,
      isInitialLoading: ct,
      isLoading: ct,
      data: R,
      dataUpdatedAt: c.dataUpdatedAt,
      error: _,
      errorUpdatedAt: ot,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > O.dataUpdateCount || c.errorUpdateCount > O.errorUpdateCount,
      isFetching: q,
      isRefetching: q && !N,
      isLoadingError: G && c.dataUpdatedAt === 0,
      isPaused: M === "paused",
      isPlaceholderData: ht,
      isRefetchError: G && c.dataUpdatedAt !== 0,
      isStale: at(t, e),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const e = r(this, p), i = this.createResult(r(this, h), this.options);
    if (n(this, S, r(this, h).state), n(this, P, this.options), r(this, S).data !== void 0 && n(this, D, r(this, h)), Y(i, e))
      return;
    n(this, p, i);
    const f = {}, a = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: o } = this.options, l = typeof o == "function" ? o() : o;
      if (l === "all" || !l && !r(this, U).size)
        return !0;
      const b = new Set(
        l ?? r(this, U)
      );
      return this.options.throwOnError && b.add("error"), Object.keys(r(this, p)).some((O) => {
        const c = O;
        return r(this, p)[c] !== e[c] && b.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && a() && (f.listeners = !0), d(this, V, Rt).call(this, { ...f, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && d(this, K, et).call(this);
  }
}, m = new WeakMap(), h = new WeakMap(), I = new WeakMap(), p = new WeakMap(), S = new WeakMap(), P = new WeakMap(), C = new WeakMap(), W = new WeakMap(), F = new WeakMap(), D = new WeakMap(), E = new WeakMap(), Q = new WeakMap(), x = new WeakMap(), U = new WeakMap(), T = new WeakSet(), L = function(t) {
  d(this, z, it).call(this);
  let e = r(this, h).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (e = e.catch(wt)), e;
}, k = new WeakSet(), Z = function() {
  if (d(this, H, st).call(this), lt || r(this, p).isStale || !dt(this.options.staleTime))
    return;
  const e = xt(
    r(this, p).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  n(this, E, setTimeout(() => {
    r(this, p).isStale || this.updateResult();
  }, e));
}, A = new WeakSet(), $ = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(r(this, h)) : this.options.refetchInterval) ?? !1;
}, B = new WeakSet(), tt = function(t) {
  d(this, j, rt).call(this), n(this, x, t), !(lt || this.options.enabled === !1 || !dt(r(this, x)) || r(this, x) === 0) && n(this, Q, setInterval(() => {
    (this.options.refetchIntervalInBackground || St.isFocused()) && d(this, T, L).call(this);
  }, r(this, x)));
}, K = new WeakSet(), et = function() {
  d(this, k, Z).call(this), d(this, B, tt).call(this, d(this, A, $).call(this));
}, H = new WeakSet(), st = function() {
  r(this, E) && (clearTimeout(r(this, E)), n(this, E, void 0));
}, j = new WeakSet(), rt = function() {
  r(this, Q) && (clearInterval(r(this, Q)), n(this, Q, void 0));
}, z = new WeakSet(), it = function() {
  const t = r(this, m).getQueryCache().build(r(this, m), this.options);
  if (t === r(this, h))
    return;
  const e = r(this, h);
  n(this, h, t), n(this, I, t.state), this.hasListeners() && (e == null || e.removeObserver(this), t.addObserver(this));
}, V = new WeakSet(), Rt = function(t) {
  gt.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(r(this, p));
    }), r(this, m).getQueryCache().notify({
      query: r(this, h),
      type: "observerResultsUpdated"
    });
  });
}, bt);
function kt(s, t) {
  return t.enabled !== !1 && !s.state.dataUpdatedAt && !(s.state.status === "error" && t.retryOnMount === !1);
}
function mt(s, t) {
  return kt(s, t) || s.state.dataUpdatedAt > 0 && nt(s, t, t.refetchOnMount);
}
function nt(s, t, e) {
  if (t.enabled !== !1) {
    const i = typeof e == "function" ? e(s) : e;
    return i === "always" || i !== !1 && at(s, t);
  }
  return !1;
}
function yt(s, t, e, i) {
  return e.enabled !== !1 && (s !== t || i.enabled === !1) && (!e.suspense || s.state.status !== "error") && at(s, e);
}
function at(s, t) {
  return s.isStaleByTime(t.staleTime);
}
function At(s, t) {
  return !Y(s.getCurrentResult(), t);
}
var Ct = v.createContext(!1), Bt = () => v.useContext(Ct);
Ct.Provider;
function Kt() {
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
var Ht = v.createContext(Kt()), jt = () => v.useContext(Ht);
function zt(s, t) {
  return typeof s == "function" ? s(...t) : !!s;
}
var Vt = (s, t) => {
  (s.suspense || s.throwOnError) && (t.isReset() || (s.retryOnMount = !1));
}, _t = (s) => {
  v.useEffect(() => {
    s.clearReset();
  }, [s]);
}, qt = ({
  result: s,
  errorResetBoundary: t,
  throwOnError: e,
  query: i
}) => s.isError && !t.isReset() && !s.isFetching && zt(e, [s.error, i]), Nt = (s) => {
  s.suspense && typeof s.staleTime != "number" && (s.staleTime = 1e3);
}, Gt = (s, t) => (s == null ? void 0 : s.suspense) && t.isPending, Jt = (s, t, e) => t.fetchOptimistic(s).catch(() => {
  e.clearReset();
});
function Xt(s, t, e) {
  const i = Qt(e), f = Bt(), a = jt(), o = i.defaultQueryOptions(s);
  o._optimisticResults = f ? "isRestoring" : "optimistic", Nt(o), Vt(o, a), _t(a);
  const [l] = v.useState(
    () => new t(
      i,
      o
    )
  ), b = l.getOptimisticResult(o);
  if (v.useSyncExternalStore(
    v.useCallback(
      (O) => {
        const c = f ? () => {
        } : l.subscribe(gt.batchCalls(O));
        return l.updateResult(), c;
      },
      [l, f]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), v.useEffect(() => {
    l.setOptions(o, { listeners: !1 });
  }, [o, l]), Gt(o, b))
    throw Jt(o, l, a);
  if (qt({
    result: b,
    errorResetBoundary: a,
    throwOnError: o.throwOnError,
    query: l.getCurrentQuery()
  }))
    throw b.error;
  return o.notifyOnChangeProps ? b : l.trackResult(b);
}
function Yt(s, t) {
  return Xt(s, Wt, t);
}
const Zt = ({
  ...s
}) => /* @__PURE__ */ g("div", { children: /* @__PURE__ */ Ut("table", { css: {
  minWidth: "100%"
}, children: [
  /* @__PURE__ */ g("thead", { children: s.getHeaderGroups().map((t) => /* @__PURE__ */ g("tr", { children: t.headers.map((e) => /* @__PURE__ */ g("th", { css: {
    borderBottomWidth: "1px",
    borderLeftWidth: "1px",
    backgroundColor: "rgb(243 244 246 / 0.6)",
    padding: "0.5rem",
    ":last-child": {
      borderRightWidth: "1px"
    },
    ":hover": {
      backgroundColor: "rgb(229 231 235 / 0.6)"
    }
  }, colSpan: e.colSpan, children: e.isPlaceholder ? null : pt(e.column.columnDef.header, e.getContext()) }, e.id)) }, t.id)) }),
  /* @__PURE__ */ g("tbody", { children: s.getRowModel().rows.map((t) => /* @__PURE__ */ g("tr", { css: {
    borderBottomWidth: "1px",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
    }
  }, children: t.getVisibleCells().map((e) => /* @__PURE__ */ g("td", { css: [{
    whiteSpace: "nowrap",
    borderLeftWidth: "1px",
    padding: "0.25rem"
  }], children: pt(e.column.columnDef.cell, e.getContext()) }, e.id)) }, t.id)) })
] }) }), $t = (s) => Mt({
  getCoreRowModel: Lt(),
  ...s
}), te = () => {
  const {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: i,
    fold: f,
    setWidth: a,
    setHeight: o,
    updatePosition: l
  } = Tt();
  return {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: i,
    fold: f,
    setWidth: a,
    setHeight: o,
    updatePosition: l
  };
}, ee = () => {
  const s = It();
  if (!s)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return s.client;
};
function se(s, t) {
  let e;
  typeof s == "string" ? e = {
    url: s,
    ...t
  } : e = s;
  const {
    url: i,
    params: f,
    ...a
  } = e, o = ee();
  return Yt({
    queryKey: f ? [i, f] : [i],
    queryFn: async ({
      queryKey: [l, b],
      signal: O
    }) => {
      const {
        data: c
      } = await o.get(l, {
        params: b,
        signal: O
      });
      return c;
    },
    ...a
  });
}
const re = [{
  header: "email",
  accessorKey: "email",
  cell: (s) => s.getValue()
}, {
  header: "Имя",
  accessorKey: "name"
}, {
  header: "Группа",
  accessorKey: "group_id"
}, {
  header: "Удален",
  accessorKey: "is_deleted"
}], de = () => {
  const {
    close: s
  } = te(), {
    data: t,
    isLoading: e
  } = se("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: f
    }) => f
  }), i = $t({
    data: t || [],
    columns: re
  });
  return /* @__PURE__ */ g(Dt, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ g(Ft, { onClick: s, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ g(Pt, { spinning: e, children: /* @__PURE__ */ g(Zt, { ...i }) }) });
};
export {
  de as default
};
