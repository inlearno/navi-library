var X = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var r = (s, t, e) => (X(s, t, "read from private field"), e ? e.call(s) : t.get(s)), u = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, o = (s, t, e, i) => (X(s, t, "write to private field"), i ? i.call(s, e) : t.set(s, e), e);
var d = (s, t, e) => (X(s, t, "access private method"), e);
import { S as St, s as Y, n as xt, i as lt, a as dt, t as Ot, f as Et, c as Tt, r as ft, b as Rt, u as It, d as Qt, j as b, e as pt, g as Ut, h as Pt, k as Ft } from "./library-e86708b0.js";
import { C as Mt, P as zt } from "./Panel-d4a69dd5.js";
import { a as Dt } from "./mui-36ebfa29.js";
import { f as gt, u as kt, g as Lt } from "./table-46c094fe.js";
import { r as v } from "./react-72acea58.js";
import "./icons-a8a50daa.js";
var g, h, U, p, O, P, C, L, F, M, E, T, x, I, Q, k, A, Z, H, $, W, tt, K, et, B, st, j, rt, V, it, _, Ct, mt, At = (mt = class extends St {
  constructor(t, e) {
    super();
    u(this, Q);
    u(this, A);
    u(this, H);
    u(this, W);
    u(this, K);
    u(this, B);
    u(this, j);
    u(this, V);
    u(this, _);
    u(this, g, void 0);
    u(this, h, void 0);
    u(this, U, void 0);
    u(this, p, void 0);
    u(this, O, void 0);
    u(this, P, void 0);
    u(this, C, void 0);
    u(this, L, void 0);
    u(this, F, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    u(this, M, void 0);
    u(this, E, void 0);
    u(this, T, void 0);
    u(this, x, void 0);
    u(this, I, void 0);
    o(this, h, void 0), o(this, U, void 0), o(this, p, void 0), o(this, I, /* @__PURE__ */ new Set()), o(this, g, t), this.options = e, o(this, C, null), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (r(this, h).addObserver(this), yt(r(this, h), this.options) ? d(this, Q, k).call(this) : this.updateResult(), d(this, K, et).call(this));
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
    this.listeners = /* @__PURE__ */ new Set(), d(this, B, st).call(this), d(this, j, rt).call(this), r(this, h).removeObserver(this);
  }
  setOptions(t, e) {
    const i = this.options, f = r(this, h);
    if (this.options = r(this, g).defaultQueryOptions(t), Y(i, this.options) || r(this, g).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: r(this, h),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = i.queryKey), d(this, V, it).call(this);
    const a = this.hasListeners();
    a && bt(
      r(this, h),
      f,
      this.options,
      i
    ) && d(this, Q, k).call(this), this.updateResult(e), a && (r(this, h) !== f || this.options.enabled !== i.enabled || this.options.staleTime !== i.staleTime) && d(this, A, Z).call(this);
    const n = d(this, H, $).call(this);
    a && (r(this, h) !== f || this.options.enabled !== i.enabled || n !== r(this, x)) && d(this, W, tt).call(this, n);
  }
  getOptimisticResult(t) {
    const e = r(this, g).getQueryCache().build(r(this, g), t), i = this.createResult(e, t);
    return Wt(this, i) && (o(this, p, i), o(this, P, this.options), o(this, O, r(this, h).state)), i;
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
        get: () => (r(this, I).add(i), t[i])
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
    const e = r(this, g).defaultQueryOptions(t), i = r(this, g).getQueryCache().build(r(this, g), e);
    return i.isFetchingOptimistic = !0, i.fetch().then(() => this.createResult(i, e));
  }
  fetch(t) {
    return d(this, Q, k).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), r(this, p)));
  }
  createResult(t, e) {
    var ut;
    const i = r(this, h), f = this.options, a = r(this, p), n = r(this, O), l = r(this, P), w = t !== i ? t.state : r(this, U), { state: c } = t;
    let { error: z, errorUpdatedAt: at, fetchStatus: D, status: S } = c, ht = !1, R;
    if (e._optimisticResults) {
      const y = this.hasListeners(), J = !y && yt(t, e), wt = y && bt(t, i, e, f);
      (J || wt) && (D = Tt(t.options.networkMode) ? "fetching" : "paused", c.dataUpdatedAt || (S = "pending")), e._optimisticResults === "isRestoring" && (D = "idle");
    }
    if (e.select && typeof c.data < "u")
      if (a && c.data === (n == null ? void 0 : n.data) && e.select === r(this, L))
        R = r(this, F);
      else
        try {
          o(this, L, e.select), R = e.select(c.data), R = ft(a == null ? void 0 : a.data, R, e), o(this, F, R), o(this, C, null);
        } catch (y) {
          o(this, C, y);
        }
    else
      R = c.data;
    if (typeof e.placeholderData < "u" && typeof R > "u" && S === "pending") {
      let y;
      if (a != null && a.isPlaceholderData && e.placeholderData === (l == null ? void 0 : l.placeholderData))
        y = a.data;
      else if (y = typeof e.placeholderData == "function" ? e.placeholderData(
        (ut = r(this, M)) == null ? void 0 : ut.state.data,
        r(this, M)
      ) : e.placeholderData, e.select && typeof y < "u")
        try {
          y = e.select(y), o(this, C, null);
        } catch (J) {
          o(this, C, J);
        }
      typeof y < "u" && (S = "success", R = ft(
        a == null ? void 0 : a.data,
        y,
        e
      ), ht = !0);
    }
    r(this, C) && (z = r(this, C), R = r(this, F), at = Date.now(), S = "error");
    const q = D === "fetching", N = S === "pending", G = S === "error", ct = N && q;
    return {
      status: S,
      fetchStatus: D,
      isPending: N,
      isSuccess: S === "success",
      isError: G,
      isInitialLoading: ct,
      isLoading: ct,
      data: R,
      dataUpdatedAt: c.dataUpdatedAt,
      error: z,
      errorUpdatedAt: at,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > w.dataUpdateCount || c.errorUpdateCount > w.errorUpdateCount,
      isFetching: q,
      isRefetching: q && !N,
      isLoadingError: G && c.dataUpdatedAt === 0,
      isPaused: D === "paused",
      isPlaceholderData: ht,
      isRefetchError: G && c.dataUpdatedAt !== 0,
      isStale: ot(t, e),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const e = r(this, p), i = this.createResult(r(this, h), this.options);
    if (o(this, O, r(this, h).state), o(this, P, this.options), r(this, O).data !== void 0 && o(this, M, r(this, h)), Y(i, e))
      return;
    o(this, p, i);
    const f = {}, a = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: n } = this.options, l = typeof n == "function" ? n() : n;
      if (l === "all" || !l && !r(this, I).size)
        return !0;
      const m = new Set(
        l ?? r(this, I)
      );
      return this.options.throwOnError && m.add("error"), Object.keys(r(this, p)).some((w) => {
        const c = w;
        return r(this, p)[c] !== e[c] && m.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && a() && (f.listeners = !0), d(this, _, Ct).call(this, { ...f, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && d(this, K, et).call(this);
  }
}, g = new WeakMap(), h = new WeakMap(), U = new WeakMap(), p = new WeakMap(), O = new WeakMap(), P = new WeakMap(), C = new WeakMap(), L = new WeakMap(), F = new WeakMap(), M = new WeakMap(), E = new WeakMap(), T = new WeakMap(), x = new WeakMap(), I = new WeakMap(), Q = new WeakSet(), k = function(t) {
  d(this, V, it).call(this);
  let e = r(this, h).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (e = e.catch(xt)), e;
}, A = new WeakSet(), Z = function() {
  if (d(this, B, st).call(this), lt || r(this, p).isStale || !dt(this.options.staleTime))
    return;
  const e = Ot(
    r(this, p).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  o(this, E, setTimeout(() => {
    r(this, p).isStale || this.updateResult();
  }, e));
}, H = new WeakSet(), $ = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(r(this, h)) : this.options.refetchInterval) ?? !1;
}, W = new WeakSet(), tt = function(t) {
  d(this, j, rt).call(this), o(this, x, t), !(lt || this.options.enabled === !1 || !dt(r(this, x)) || r(this, x) === 0) && o(this, T, setInterval(() => {
    (this.options.refetchIntervalInBackground || Et.isFocused()) && d(this, Q, k).call(this);
  }, r(this, x)));
}, K = new WeakSet(), et = function() {
  d(this, A, Z).call(this), d(this, W, tt).call(this, d(this, H, $).call(this));
}, B = new WeakSet(), st = function() {
  r(this, E) && (clearTimeout(r(this, E)), o(this, E, void 0));
}, j = new WeakSet(), rt = function() {
  r(this, T) && (clearInterval(r(this, T)), o(this, T, void 0));
}, V = new WeakSet(), it = function() {
  const t = r(this, g).getQueryCache().build(r(this, g), this.options);
  if (t === r(this, h))
    return;
  const e = r(this, h);
  o(this, h, t), o(this, U, t.state), this.hasListeners() && (e == null || e.removeObserver(this), t.addObserver(this));
}, _ = new WeakSet(), Ct = function(t) {
  Rt.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(r(this, p));
    }), r(this, g).getQueryCache().notify({
      query: r(this, h),
      type: "observerResultsUpdated"
    });
  });
}, mt);
function Ht(s, t) {
  return t.enabled !== !1 && !s.state.dataUpdatedAt && !(s.state.status === "error" && t.retryOnMount === !1);
}
function yt(s, t) {
  return Ht(s, t) || s.state.dataUpdatedAt > 0 && nt(s, t, t.refetchOnMount);
}
function nt(s, t, e) {
  if (t.enabled !== !1) {
    const i = typeof e == "function" ? e(s) : e;
    return i === "always" || i !== !1 && ot(s, t);
  }
  return !1;
}
function bt(s, t, e, i) {
  return e.enabled !== !1 && (s !== t || i.enabled === !1) && (!e.suspense || s.state.status !== "error") && ot(s, e);
}
function ot(s, t) {
  return s.isStaleByTime(t.staleTime);
}
function Wt(s, t) {
  return !Y(s.getCurrentResult(), t);
}
var vt = v.createContext(!1), Kt = () => v.useContext(vt);
vt.Provider;
function Bt() {
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
var jt = v.createContext(Bt()), Vt = () => v.useContext(jt);
function _t(s, t) {
  return typeof s == "function" ? s(...t) : !!s;
}
var qt = (s, t) => {
  (s.suspense || s.throwOnError) && (t.isReset() || (s.retryOnMount = !1));
}, Nt = (s) => {
  v.useEffect(() => {
    s.clearReset();
  }, [s]);
}, Gt = ({
  result: s,
  errorResetBoundary: t,
  throwOnError: e,
  query: i
}) => s.isError && !t.isReset() && !s.isFetching && _t(e, [s.error, i]), Jt = (s) => {
  s.suspense && typeof s.staleTime != "number" && (s.staleTime = 1e3);
}, Xt = (s, t) => (s == null ? void 0 : s.suspense) && t.isPending, Yt = (s, t, e) => t.fetchOptimistic(s).catch(() => {
  e.clearReset();
});
function Zt(s, t, e) {
  const i = It(e), f = Kt(), a = Vt(), n = i.defaultQueryOptions(s);
  n._optimisticResults = f ? "isRestoring" : "optimistic", Jt(n), qt(n, a), Nt(a);
  const [l] = v.useState(
    () => new t(
      i,
      n
    )
  ), m = l.getOptimisticResult(n);
  if (v.useSyncExternalStore(
    v.useCallback(
      (w) => {
        const c = f ? () => {
        } : l.subscribe(Rt.batchCalls(w));
        return l.updateResult(), c;
      },
      [l, f]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), v.useEffect(() => {
    l.setOptions(n, { listeners: !1 });
  }, [n, l]), Xt(n, m))
    throw Yt(n, l, a);
  if (Gt({
    result: m,
    errorResetBoundary: a,
    throwOnError: n.throwOnError,
    query: l.getCurrentQuery()
  }))
    throw m.error;
  return n.notifyOnChangeProps ? m : l.trackResult(m);
}
function $t(s, t) {
  return Zt(s, At, t);
}
const te = () => {
  const [s] = Qt();
  return s == null ? void 0 : s.access_token;
}, ee = ({
  ...s
}) => /* @__PURE__ */ b("div", { children: /* @__PURE__ */ pt("table", { css: {
  minWidth: "100%",
  tableLayout: "auto",
  "--tw-border-opacity": "1",
  borderColor: "rgb(229 231 235 / var(--tw-border-opacity))"
}, children: [
  /* @__PURE__ */ b("thead", { children: s.getHeaderGroups().map((t) => /* @__PURE__ */ b("tr", { children: t.headers.map((e) => /* @__PURE__ */ pt("th", { css: [{
    position: "relative",
    userSelect: "none",
    borderRightWidth: "1px",
    padding: "0.5rem",
    textAlign: "left",
    ":hover": {
      backgroundColor: "rgb(229 231 235 / 0.6)"
    }
  }, e.column.getIsResizing() && {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  }, Dt`
                      &:last-child {
                        .resizer {
                          display: none;
                        }
                      }
                    `], style: {
    width: e.getSize()
  }, colSpan: e.colSpan, children: [
    e.isPlaceholder ? null : gt(e.column.columnDef.header, e.getContext()),
    /* @__PURE__ */ b("div", { css: {
      position: "absolute",
      right: "-2px",
      top: "0px",
      zIndex: "10",
      height: "100%",
      width: "4px",
      cursor: "col-resize"
    }, onMouseDown: e.getResizeHandler(), onTouchStart: e.getResizeHandler(), className: "resizer" })
  ] }, e.id)) }, t.id)) }),
  /* @__PURE__ */ b("tbody", { children: s.getRowModel().rows.map((t) => /* @__PURE__ */ b("tr", { css: [{
    borderBottomWidth: "1px",
    ":first-of-type": {
      borderTopWidth: "1px"
    },
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
    }
  }], children: t.getVisibleCells().map((e) => /* @__PURE__ */ b("td", { css: [{
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderRightWidth: "1px",
    padding: "0.375rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem"
  }, e.column.getIsResizing() && {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  }], children: /* @__PURE__ */ b("span", { css: [{
    position: "relative"
  }], children: gt(e.column.columnDef.cell, e.getContext()) }) }, e.id)) }, t.id)) })
] }) }), se = (s) => kt({
  getCoreRowModel: Lt(),
  ...s
}), re = () => {
  const {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: i,
    fold: f,
    setWidth: a,
    setHeight: n,
    updatePosition: l
  } = Ut();
  return {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: i,
    fold: f,
    setWidth: a,
    setHeight: n,
    updatePosition: l
  };
}, ie = () => {
  const s = Pt();
  if (!s)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return s.client;
};
function ne(s, t) {
  let e;
  typeof s == "string" ? e = {
    url: s,
    ...t
  } : e = s;
  const {
    url: i,
    params: f,
    ...a
  } = e, n = te(), l = ie();
  return $t({
    queryKey: f ? [i, f, n || ""] : [i, n || ""],
    queryFn: async ({
      queryKey: [m, w],
      signal: c
    }) => {
      const {
        data: z
      } = await l.get(m, {
        params: w,
        signal: c
      });
      return z;
    },
    ...a
  });
}
const oe = [{
  header: "E-mail",
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
  accessorKey: "is_deleted",
  cell: (s) => s.getValue() ? "Да" : "Нет"
}], ge = () => {
  const {
    close: s
  } = re(), {
    data: t,
    isLoading: e
  } = ne("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: f
    }) => f
  }), i = se({
    data: t || [],
    columns: oe,
    columnResizeMode: "onChange",
    enableMultiRowSelection: !1
  });
  return /* @__PURE__ */ b(zt, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ b(Mt, { onClick: s, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ b(Ft, { spinning: e, children: /* @__PURE__ */ b(ee, { ...i }) }) });
};
export {
  ge as default
};
