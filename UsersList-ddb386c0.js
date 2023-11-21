var X = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var i = (s, t, e) => (X(s, t, "read from private field"), e ? e.call(s) : t.get(s)), u = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, n = (s, t, e, r) => (X(s, t, "write to private field"), r ? r.call(s, e) : t.set(s, e), e);
var d = (s, t, e) => (X(s, t, "access private method"), e);
import { S as xt, s as Y, n as Ot, i as lt, a as dt, t as St, f as Et, c as Tt, r as ft, b as Rt, u as It, j as b, d as pt, e as Qt, g as Ut, h as Pt } from "./library-e47249d9.js";
import { C as Ft, P as Mt } from "./Panel-a740cd5c.js";
import { a as zt } from "./mui-36ebfa29.js";
import { f as gt, u as Dt, g as Lt } from "./table-46c094fe.js";
import { r as v } from "./react-72acea58.js";
import "./icons-a8a50daa.js";
var g, h, U, p, S, P, C, L, F, M, E, T, O, I, Q, D, A, Z, H, $, W, tt, k, et, K, st, B, it, j, rt, V, Ct, mt, At = (mt = class extends xt {
  constructor(t, e) {
    super();
    u(this, Q);
    u(this, A);
    u(this, H);
    u(this, W);
    u(this, k);
    u(this, K);
    u(this, B);
    u(this, j);
    u(this, V);
    u(this, g, void 0);
    u(this, h, void 0);
    u(this, U, void 0);
    u(this, p, void 0);
    u(this, S, void 0);
    u(this, P, void 0);
    u(this, C, void 0);
    u(this, L, void 0);
    u(this, F, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    u(this, M, void 0);
    u(this, E, void 0);
    u(this, T, void 0);
    u(this, O, void 0);
    u(this, I, void 0);
    n(this, h, void 0), n(this, U, void 0), n(this, p, void 0), n(this, I, /* @__PURE__ */ new Set()), n(this, g, t), this.options = e, n(this, C, null), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (i(this, h).addObserver(this), yt(i(this, h), this.options) ? d(this, Q, D).call(this) : this.updateResult(), d(this, k, et).call(this));
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
    this.listeners = /* @__PURE__ */ new Set(), d(this, K, st).call(this), d(this, B, it).call(this), i(this, h).removeObserver(this);
  }
  setOptions(t, e) {
    const r = this.options, f = i(this, h);
    if (this.options = i(this, g).defaultQueryOptions(t), Y(r, this.options) || i(this, g).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: i(this, h),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), d(this, j, rt).call(this);
    const a = this.hasListeners();
    a && bt(
      i(this, h),
      f,
      this.options,
      r
    ) && d(this, Q, D).call(this), this.updateResult(e), a && (i(this, h) !== f || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && d(this, A, Z).call(this);
    const o = d(this, H, $).call(this);
    a && (i(this, h) !== f || this.options.enabled !== r.enabled || o !== i(this, O)) && d(this, W, tt).call(this, o);
  }
  getOptimisticResult(t) {
    const e = i(this, g).getQueryCache().build(i(this, g), t), r = this.createResult(e, t);
    return Wt(this, r) && (n(this, p, r), n(this, P, this.options), n(this, S, i(this, h).state)), r;
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
        get: () => (i(this, I).add(r), t[r])
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
    const e = i(this, g).defaultQueryOptions(t), r = i(this, g).getQueryCache().build(i(this, g), e);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e));
  }
  fetch(t) {
    return d(this, Q, D).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), i(this, p)));
  }
  createResult(t, e) {
    var ut;
    const r = i(this, h), f = this.options, a = i(this, p), o = i(this, S), l = i(this, P), w = t !== r ? t.state : i(this, U), { state: c } = t;
    let { error: _, errorUpdatedAt: ot, fetchStatus: z, status: x } = c, ht = !1, R;
    if (e._optimisticResults) {
      const y = this.hasListeners(), J = !y && yt(t, e), wt = y && bt(t, r, e, f);
      (J || wt) && (z = Tt(t.options.networkMode) ? "fetching" : "paused", c.dataUpdatedAt || (x = "pending")), e._optimisticResults === "isRestoring" && (z = "idle");
    }
    if (e.select && typeof c.data < "u")
      if (a && c.data === (o == null ? void 0 : o.data) && e.select === i(this, L))
        R = i(this, F);
      else
        try {
          n(this, L, e.select), R = e.select(c.data), R = ft(a == null ? void 0 : a.data, R, e), n(this, F, R), n(this, C, null);
        } catch (y) {
          n(this, C, y);
        }
    else
      R = c.data;
    if (typeof e.placeholderData < "u" && typeof R > "u" && x === "pending") {
      let y;
      if (a != null && a.isPlaceholderData && e.placeholderData === (l == null ? void 0 : l.placeholderData))
        y = a.data;
      else if (y = typeof e.placeholderData == "function" ? e.placeholderData(
        (ut = i(this, M)) == null ? void 0 : ut.state.data,
        i(this, M)
      ) : e.placeholderData, e.select && typeof y < "u")
        try {
          y = e.select(y), n(this, C, null);
        } catch (J) {
          n(this, C, J);
        }
      typeof y < "u" && (x = "success", R = ft(
        a == null ? void 0 : a.data,
        y,
        e
      ), ht = !0);
    }
    i(this, C) && (_ = i(this, C), R = i(this, F), ot = Date.now(), x = "error");
    const q = z === "fetching", N = x === "pending", G = x === "error", ct = N && q;
    return {
      status: x,
      fetchStatus: z,
      isPending: N,
      isSuccess: x === "success",
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
      isFetchedAfterMount: c.dataUpdateCount > w.dataUpdateCount || c.errorUpdateCount > w.errorUpdateCount,
      isFetching: q,
      isRefetching: q && !N,
      isLoadingError: G && c.dataUpdatedAt === 0,
      isPaused: z === "paused",
      isPlaceholderData: ht,
      isRefetchError: G && c.dataUpdatedAt !== 0,
      isStale: at(t, e),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const e = i(this, p), r = this.createResult(i(this, h), this.options);
    if (n(this, S, i(this, h).state), n(this, P, this.options), i(this, S).data !== void 0 && n(this, M, i(this, h)), Y(r, e))
      return;
    n(this, p, r);
    const f = {}, a = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: o } = this.options, l = typeof o == "function" ? o() : o;
      if (l === "all" || !l && !i(this, I).size)
        return !0;
      const m = new Set(
        l ?? i(this, I)
      );
      return this.options.throwOnError && m.add("error"), Object.keys(i(this, p)).some((w) => {
        const c = w;
        return i(this, p)[c] !== e[c] && m.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && a() && (f.listeners = !0), d(this, V, Ct).call(this, { ...f, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && d(this, k, et).call(this);
  }
}, g = new WeakMap(), h = new WeakMap(), U = new WeakMap(), p = new WeakMap(), S = new WeakMap(), P = new WeakMap(), C = new WeakMap(), L = new WeakMap(), F = new WeakMap(), M = new WeakMap(), E = new WeakMap(), T = new WeakMap(), O = new WeakMap(), I = new WeakMap(), Q = new WeakSet(), D = function(t) {
  d(this, j, rt).call(this);
  let e = i(this, h).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (e = e.catch(Ot)), e;
}, A = new WeakSet(), Z = function() {
  if (d(this, K, st).call(this), lt || i(this, p).isStale || !dt(this.options.staleTime))
    return;
  const e = St(
    i(this, p).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  n(this, E, setTimeout(() => {
    i(this, p).isStale || this.updateResult();
  }, e));
}, H = new WeakSet(), $ = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(i(this, h)) : this.options.refetchInterval) ?? !1;
}, W = new WeakSet(), tt = function(t) {
  d(this, B, it).call(this), n(this, O, t), !(lt || this.options.enabled === !1 || !dt(i(this, O)) || i(this, O) === 0) && n(this, T, setInterval(() => {
    (this.options.refetchIntervalInBackground || Et.isFocused()) && d(this, Q, D).call(this);
  }, i(this, O)));
}, k = new WeakSet(), et = function() {
  d(this, A, Z).call(this), d(this, W, tt).call(this, d(this, H, $).call(this));
}, K = new WeakSet(), st = function() {
  i(this, E) && (clearTimeout(i(this, E)), n(this, E, void 0));
}, B = new WeakSet(), it = function() {
  i(this, T) && (clearInterval(i(this, T)), n(this, T, void 0));
}, j = new WeakSet(), rt = function() {
  const t = i(this, g).getQueryCache().build(i(this, g), this.options);
  if (t === i(this, h))
    return;
  const e = i(this, h);
  n(this, h, t), n(this, U, t.state), this.hasListeners() && (e == null || e.removeObserver(this), t.addObserver(this));
}, V = new WeakSet(), Ct = function(t) {
  Rt.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(i(this, p));
    }), i(this, g).getQueryCache().notify({
      query: i(this, h),
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
    const r = typeof e == "function" ? e(s) : e;
    return r === "always" || r !== !1 && at(s, t);
  }
  return !1;
}
function bt(s, t, e, r) {
  return e.enabled !== !1 && (s !== t || r.enabled === !1) && (!e.suspense || s.state.status !== "error") && at(s, e);
}
function at(s, t) {
  return s.isStaleByTime(t.staleTime);
}
function Wt(s, t) {
  return !Y(s.getCurrentResult(), t);
}
var vt = v.createContext(!1), kt = () => v.useContext(vt);
vt.Provider;
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
var Bt = v.createContext(Kt()), jt = () => v.useContext(Bt);
function Vt(s, t) {
  return typeof s == "function" ? s(...t) : !!s;
}
var _t = (s, t) => {
  (s.suspense || s.throwOnError) && (t.isReset() || (s.retryOnMount = !1));
}, qt = (s) => {
  v.useEffect(() => {
    s.clearReset();
  }, [s]);
}, Nt = ({
  result: s,
  errorResetBoundary: t,
  throwOnError: e,
  query: r
}) => s.isError && !t.isReset() && !s.isFetching && Vt(e, [s.error, r]), Gt = (s) => {
  s.suspense && typeof s.staleTime != "number" && (s.staleTime = 1e3);
}, Jt = (s, t) => (s == null ? void 0 : s.suspense) && t.isPending, Xt = (s, t, e) => t.fetchOptimistic(s).catch(() => {
  e.clearReset();
});
function Yt(s, t, e) {
  const r = It(e), f = kt(), a = jt(), o = r.defaultQueryOptions(s);
  o._optimisticResults = f ? "isRestoring" : "optimistic", Gt(o), _t(o, a), qt(a);
  const [l] = v.useState(
    () => new t(
      r,
      o
    )
  ), m = l.getOptimisticResult(o);
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
    l.setOptions(o, { listeners: !1 });
  }, [o, l]), Jt(o, m))
    throw Xt(o, l, a);
  if (Nt({
    result: m,
    errorResetBoundary: a,
    throwOnError: o.throwOnError,
    query: l.getCurrentQuery()
  }))
    throw m.error;
  return o.notifyOnChangeProps ? m : l.trackResult(m);
}
function Zt(s, t) {
  return Yt(s, At, t);
}
const $t = ({
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
  }, zt`
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
] }) }), te = (s) => Dt({
  getCoreRowModel: Lt(),
  ...s
}), ee = () => {
  const {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: r,
    fold: f,
    setWidth: a,
    setHeight: o,
    updatePosition: l
  } = Qt();
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
}, se = () => {
  const s = Ut();
  if (!s)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return s.client;
};
function ie(s, t) {
  let e;
  typeof s == "string" ? e = {
    url: s,
    ...t
  } : e = s;
  const {
    url: r,
    params: f,
    ...a
  } = e, o = se();
  return Zt({
    queryKey: f ? [r, f] : [r],
    queryFn: async ({
      queryKey: [l, m],
      signal: w
    }) => {
      const {
        data: c
      } = await o.get(l, {
        params: m,
        signal: w
      });
      return c;
    },
    ...a
  });
}
const re = [{
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
}], fe = () => {
  const {
    close: s
  } = ee(), {
    data: t,
    isLoading: e
  } = ie("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: f
    }) => f
  }), r = te({
    data: t || [],
    columns: re,
    columnResizeMode: "onChange",
    enableMultiRowSelection: !1
  });
  return /* @__PURE__ */ b(Mt, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ b(Ft, { onClick: s, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ b(Pt, { spinning: e, children: /* @__PURE__ */ b($t, { ...r }) }) });
};
export {
  fe as default
};
