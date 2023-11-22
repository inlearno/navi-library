var X = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var i = (s, t, e) => (X(s, t, "read from private field"), e ? e.call(s) : t.get(s)), l = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, a = (s, t, e, r) => (X(s, t, "write to private field"), r ? r.call(s, e) : t.set(s, e), e);
var f = (s, t, e) => (X(s, t, "access private method"), e);
import { S as Ot, s as Y, n as St, i as ut, a as dt, t as Et, f as It, c as zt, r as ft, b as vt, u as Tt, j as pt, d as m, e as Qt, g as Ut, h as Pt, k as Ft } from "./library-49276824.js";
import { C as Mt, P as Dt } from "./Panel-ad29d68b.js";
import { a as gt } from "./mui-36ebfa29.js";
import { f as mt, u as At, g as kt } from "./table-46c094fe.js";
import { r as C } from "./react-72acea58.js";
import "./icons-a8a50daa.js";
var g, h, Q, p, S, U, v, A, P, F, E, I, O, z, T, D, k, Z, L, $, H, tt, W, et, B, st, K, it, j, rt, V, Ct, Rt, Lt = (Rt = class extends Ot {
  constructor(t, e) {
    super();
    l(this, T);
    l(this, k);
    l(this, L);
    l(this, H);
    l(this, W);
    l(this, B);
    l(this, K);
    l(this, j);
    l(this, V);
    l(this, g, void 0);
    l(this, h, void 0);
    l(this, Q, void 0);
    l(this, p, void 0);
    l(this, S, void 0);
    l(this, U, void 0);
    l(this, v, void 0);
    l(this, A, void 0);
    l(this, P, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    l(this, F, void 0);
    l(this, E, void 0);
    l(this, I, void 0);
    l(this, O, void 0);
    l(this, z, void 0);
    a(this, h, void 0), a(this, Q, void 0), a(this, p, void 0), a(this, z, /* @__PURE__ */ new Set()), a(this, g, t), this.options = e, a(this, v, null), this.bindMethods(), this.setOptions(e);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (i(this, h).addObserver(this), yt(i(this, h), this.options) ? f(this, T, D).call(this) : this.updateResult(), f(this, W, et).call(this));
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
    this.listeners = /* @__PURE__ */ new Set(), f(this, B, st).call(this), f(this, K, it).call(this), i(this, h).removeObserver(this);
  }
  setOptions(t, e) {
    const r = this.options, d = i(this, h);
    if (this.options = i(this, g).defaultQueryOptions(t), Y(r, this.options) || i(this, g).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: i(this, h),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey), f(this, j, rt).call(this);
    const n = this.hasListeners();
    n && bt(
      i(this, h),
      d,
      this.options,
      r
    ) && f(this, T, D).call(this), this.updateResult(e), n && (i(this, h) !== d || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && f(this, k, Z).call(this);
    const o = f(this, L, $).call(this);
    n && (i(this, h) !== d || this.options.enabled !== r.enabled || o !== i(this, O)) && f(this, H, tt).call(this, o);
  }
  getOptimisticResult(t) {
    const e = i(this, g).getQueryCache().build(i(this, g), t), r = this.createResult(e, t);
    return Wt(this, r) && (a(this, p, r), a(this, U, this.options), a(this, S, i(this, h).state)), r;
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
        get: () => (i(this, z).add(r), t[r])
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
    return f(this, T, D).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), i(this, p)));
  }
  createResult(t, e) {
    var lt;
    const r = i(this, h), d = this.options, n = i(this, p), o = i(this, S), u = i(this, U), w = t !== r ? t.state : i(this, Q), { state: c } = t;
    let { error: _, errorUpdatedAt: at, fetchStatus: M, status: x } = c, ht = !1, R;
    if (e._optimisticResults) {
      const y = this.hasListeners(), J = !y && yt(t, e), xt = y && bt(t, r, e, d);
      (J || xt) && (M = zt(t.options.networkMode) ? "fetching" : "paused", c.dataUpdatedAt || (x = "pending")), e._optimisticResults === "isRestoring" && (M = "idle");
    }
    if (e.select && typeof c.data < "u")
      if (n && c.data === (o == null ? void 0 : o.data) && e.select === i(this, A))
        R = i(this, P);
      else
        try {
          a(this, A, e.select), R = e.select(c.data), R = ft(n == null ? void 0 : n.data, R, e), a(this, P, R), a(this, v, null);
        } catch (y) {
          a(this, v, y);
        }
    else
      R = c.data;
    if (typeof e.placeholderData < "u" && typeof R > "u" && x === "pending") {
      let y;
      if (n != null && n.isPlaceholderData && e.placeholderData === (u == null ? void 0 : u.placeholderData))
        y = n.data;
      else if (y = typeof e.placeholderData == "function" ? e.placeholderData(
        (lt = i(this, F)) == null ? void 0 : lt.state.data,
        i(this, F)
      ) : e.placeholderData, e.select && typeof y < "u")
        try {
          y = e.select(y), a(this, v, null);
        } catch (J) {
          a(this, v, J);
        }
      typeof y < "u" && (x = "success", R = ft(
        n == null ? void 0 : n.data,
        y,
        e
      ), ht = !0);
    }
    i(this, v) && (_ = i(this, v), R = i(this, P), at = Date.now(), x = "error");
    const q = M === "fetching", N = x === "pending", G = x === "error", ct = N && q;
    return {
      status: x,
      fetchStatus: M,
      isPending: N,
      isSuccess: x === "success",
      isError: G,
      isInitialLoading: ct,
      isLoading: ct,
      data: R,
      dataUpdatedAt: c.dataUpdatedAt,
      error: _,
      errorUpdatedAt: at,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > w.dataUpdateCount || c.errorUpdateCount > w.errorUpdateCount,
      isFetching: q,
      isRefetching: q && !N,
      isLoadingError: G && c.dataUpdatedAt === 0,
      isPaused: M === "paused",
      isPlaceholderData: ht,
      isRefetchError: G && c.dataUpdatedAt !== 0,
      isStale: ot(t, e),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const e = i(this, p), r = this.createResult(i(this, h), this.options);
    if (a(this, S, i(this, h).state), a(this, U, this.options), i(this, S).data !== void 0 && a(this, F, i(this, h)), Y(r, e))
      return;
    a(this, p, r);
    const d = {}, n = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: o } = this.options, u = typeof o == "function" ? o() : o;
      if (u === "all" || !u && !i(this, z).size)
        return !0;
      const b = new Set(
        u ?? i(this, z)
      );
      return this.options.throwOnError && b.add("error"), Object.keys(i(this, p)).some((w) => {
        const c = w;
        return i(this, p)[c] !== e[c] && b.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && n() && (d.listeners = !0), f(this, V, Ct).call(this, { ...d, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && f(this, W, et).call(this);
  }
}, g = new WeakMap(), h = new WeakMap(), Q = new WeakMap(), p = new WeakMap(), S = new WeakMap(), U = new WeakMap(), v = new WeakMap(), A = new WeakMap(), P = new WeakMap(), F = new WeakMap(), E = new WeakMap(), I = new WeakMap(), O = new WeakMap(), z = new WeakMap(), T = new WeakSet(), D = function(t) {
  f(this, j, rt).call(this);
  let e = i(this, h).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (e = e.catch(St)), e;
}, k = new WeakSet(), Z = function() {
  if (f(this, B, st).call(this), ut || i(this, p).isStale || !dt(this.options.staleTime))
    return;
  const e = Et(
    i(this, p).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  a(this, E, setTimeout(() => {
    i(this, p).isStale || this.updateResult();
  }, e));
}, L = new WeakSet(), $ = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(i(this, h)) : this.options.refetchInterval) ?? !1;
}, H = new WeakSet(), tt = function(t) {
  f(this, K, it).call(this), a(this, O, t), !(ut || this.options.enabled === !1 || !dt(i(this, O)) || i(this, O) === 0) && a(this, I, setInterval(() => {
    (this.options.refetchIntervalInBackground || It.isFocused()) && f(this, T, D).call(this);
  }, i(this, O)));
}, W = new WeakSet(), et = function() {
  f(this, k, Z).call(this), f(this, H, tt).call(this, f(this, L, $).call(this));
}, B = new WeakSet(), st = function() {
  i(this, E) && (clearTimeout(i(this, E)), a(this, E, void 0));
}, K = new WeakSet(), it = function() {
  i(this, I) && (clearInterval(i(this, I)), a(this, I, void 0));
}, j = new WeakSet(), rt = function() {
  const t = i(this, g).getQueryCache().build(i(this, g), this.options);
  if (t === i(this, h))
    return;
  const e = i(this, h);
  a(this, h, t), a(this, Q, t.state), this.hasListeners() && (e == null || e.removeObserver(this), t.addObserver(this));
}, V = new WeakSet(), Ct = function(t) {
  vt.batch(() => {
    t.listeners && this.listeners.forEach((e) => {
      e(i(this, p));
    }), i(this, g).getQueryCache().notify({
      query: i(this, h),
      type: "observerResultsUpdated"
    });
  });
}, Rt);
function Ht(s, t) {
  return t.enabled !== !1 && !s.state.dataUpdatedAt && !(s.state.status === "error" && t.retryOnMount === !1);
}
function yt(s, t) {
  return Ht(s, t) || s.state.dataUpdatedAt > 0 && nt(s, t, t.refetchOnMount);
}
function nt(s, t, e) {
  if (t.enabled !== !1) {
    const r = typeof e == "function" ? e(s) : e;
    return r === "always" || r !== !1 && ot(s, t);
  }
  return !1;
}
function bt(s, t, e, r) {
  return e.enabled !== !1 && (s !== t || r.enabled === !1) && (!e.suspense || s.state.status !== "error") && ot(s, e);
}
function ot(s, t) {
  return s.isStaleByTime(t.staleTime);
}
function Wt(s, t) {
  return !Y(s.getCurrentResult(), t);
}
var wt = C.createContext(!1), Bt = () => C.useContext(wt);
wt.Provider;
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
var jt = C.createContext(Kt()), Vt = () => C.useContext(jt);
function _t(s, t) {
  return typeof s == "function" ? s(...t) : !!s;
}
var qt = (s, t) => {
  (s.suspense || s.throwOnError) && (t.isReset() || (s.retryOnMount = !1));
}, Nt = (s) => {
  C.useEffect(() => {
    s.clearReset();
  }, [s]);
}, Gt = ({
  result: s,
  errorResetBoundary: t,
  throwOnError: e,
  query: r
}) => s.isError && !t.isReset() && !s.isFetching && _t(e, [s.error, r]), Jt = (s) => {
  s.suspense && typeof s.staleTime != "number" && (s.staleTime = 1e3);
}, Xt = (s, t) => (s == null ? void 0 : s.suspense) && t.isPending, Yt = (s, t, e) => t.fetchOptimistic(s).catch(() => {
  e.clearReset();
});
function Zt(s, t, e) {
  const r = Tt(e), d = Bt(), n = Vt(), o = r.defaultQueryOptions(s);
  o._optimisticResults = d ? "isRestoring" : "optimistic", Jt(o), qt(o, n), Nt(n);
  const [u] = C.useState(
    () => new t(
      r,
      o
    )
  ), b = u.getOptimisticResult(o);
  if (C.useSyncExternalStore(
    C.useCallback(
      (w) => {
        const c = d ? () => {
        } : u.subscribe(vt.batchCalls(w));
        return u.updateResult(), c;
      },
      [u, d]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), C.useEffect(() => {
    u.setOptions(o, { listeners: !1 });
  }, [o, u]), Xt(o, b))
    throw Yt(o, u, n);
  if (Gt({
    result: b,
    errorResetBoundary: n,
    throwOnError: o.throwOnError,
    query: u.getCurrentQuery()
  }))
    throw b.error;
  return o.notifyOnChangeProps ? b : u.trackResult(b);
}
function $t(s, t) {
  return Zt(s, Lt, t);
}
const te = ({
  table: s
}) => /* @__PURE__ */ pt("table", { css: [{
  minWidth: "100%"
}, gt`
          table-layout: fixed;
        `, s.getAllColumns().find((t) => t.getIsResizing()) && {
  cursor: "col-resize"
}], style: {
  width: s.getTotalSize()
}, children: [
  s.getHeaderGroups().map((t) => /* @__PURE__ */ m("colgroup", { children: t.headers.map((e) => /* @__PURE__ */ m("col", { span: e.colSpan, style: {
    width: e.column.getSize()
  } }, e.id)) }, t.id)),
  /* @__PURE__ */ m("thead", { children: s.getHeaderGroups().map((t) => /* @__PURE__ */ m("tr", { css: {
    borderBottomWidth: "1px"
  }, children: t.headers.map((e) => /* @__PURE__ */ pt("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderRightWidth: "1px",
    padding: "0.5rem",
    textAlign: "left",
    ":hover": {
      backgroundColor: "rgb(229 231 235 / 0.6)"
    }
  }, e.column.getIsResizing() ? {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  } : e.column.getCanSort() ? {
    cursor: "pointer"
  } : null, gt`
                    &:last-child {
                      .resizer {
                        right: 0;
                      }
                    }
                  `], colSpan: e.colSpan, children: [
    /* @__PURE__ */ m("div", { css: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }, children: e.isPlaceholder ? null : mt(e.column.columnDef.header, e.getContext()) }),
    /* @__PURE__ */ m("div", { css: [{
      position: "absolute",
      right: "-4px",
      top: "0px",
      zIndex: "10",
      height: "100%",
      width: "7px",
      cursor: "col-resize",
      ":hover": {
        backgroundColor: "rgb(141 148 205 / 0.3)"
      }
    }, e.column.getIsResizing() && {
      backgroundColor: "rgb(141 148 205 / 0.3)"
    }], onMouseDown: e.getResizeHandler(), onTouchStart: e.getResizeHandler(), className: "resizer" })
  ] }, e.id)) }, t.id)) }),
  /* @__PURE__ */ m("tbody", { children: s.getRowModel().rows.map((t) => /* @__PURE__ */ m("tr", { css: [{
    position: "relative",
    overflow: "hidden",
    textOverflow: "ellipsis",
    borderBottomWidth: "1px",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
    }
  }], children: t.getVisibleCells().map((e) => /* @__PURE__ */ m("td", { css: [{
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderRightWidth: "1px",
    padding: "0.375rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem"
  }, e.column.getIsResizing() && {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  }], children: /* @__PURE__ */ m("span", { css: [{
    position: "relative"
  }], children: mt(e.column.columnDef.cell, e.getContext()) }) }, e.id)) }, t.id)) })
] }), ee = ({
  columns: s,
  data: t = [],
  ...e
}) => {
  const [r, {
    width: d
  }] = Qt(), n = At({
    getCoreRowModel: kt(),
    ...e,
    columns: s,
    data: t
    // onColumnSizingChange,
    // state: { columnSizing },
  });
  return {
    ref: r,
    ...n
  };
}, se = () => {
  const {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: r,
    fold: d,
    setWidth: n,
    setHeight: o,
    updatePosition: u
  } = Ut();
  return {
    close: s,
    setTitle: t,
    maximize: e,
    minimize: r,
    fold: d,
    setWidth: n,
    setHeight: o,
    updatePosition: u
  };
}, ie = () => {
  const s = Pt();
  if (!s)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return s.client;
};
function re(s, t) {
  let e;
  typeof s == "string" ? e = {
    url: s,
    ...t
  } : e = s;
  const {
    url: r,
    params: d,
    ...n
  } = e, o = ie();
  return $t({
    queryKey: d ? [r, d, o.defaults.headers.Authorization || ""] : [r, o.defaults.headers.Authorization || ""],
    queryFn: async ({
      queryKey: [u, b],
      signal: w
    }) => {
      const {
        data: c
      } = await o.get(u, {
        params: b,
        signal: w
      });
      return c;
    },
    ...n
  });
}
const ne = [{
  header: "E-mail",
  accessorKey: "email",
  cell: (s) => s.getValue()
}, {
  header: "Имя",
  accessorKey: "name",
  size: 300
}, {
  header: "Группа",
  accessorKey: "group_id"
}, {
  header: "Удален",
  accessorKey: "is_deleted",
  size: 80,
  cell: (s) => s.getValue() ? "Да" : "Нет"
}], pe = () => {
  const {
    close: s
  } = se(), {
    data: t,
    isLoading: e
  } = re("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: d
    }) => d
  }), r = ee({
    data: t,
    columns: ne,
    columnResizeMode: "onChange"
  });
  return /* @__PURE__ */ m(Dt, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ m(Mt, { onClick: s, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ m(Ft, { spinning: e, children: /* @__PURE__ */ m(te, { table: r }) }) });
};
export {
  pe as default
};
