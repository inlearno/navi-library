var Y = (t, e, s) => {
  if (!e.has(t))
    throw TypeError("Cannot " + s);
};
var r = (t, e, s) => (Y(t, e, "read from private field"), s ? s.call(t) : e.get(t)), d = (t, e, s) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, s);
}, l = (t, e, s, i) => (Y(t, e, "write to private field"), i ? i.call(t, s) : e.set(t, s), s);
var f = (t, e, s) => (Y(t, e, "access private method"), s);
import { S as It, s as tt, n as Et, i as pt, a as gt, t as Ut, f as Mt, c as Tt, r as mt, b as Rt, u as xt, j, d as p, e as Qt, g as At, h as Ft, k as Lt } from "./library-ba578f6d.js";
import { C as kt, P as Nt } from "./Panel-1c1bb233.js";
import { a as Z } from "./mui-36ebfa29.js";
import { f as vt, u as Ht, g as _t } from "./table-46c094fe.js";
import { F as $ } from "./icons-a8a50daa.js";
import { r as R } from "./react-72acea58.js";
var m, h, U, g, z, M, w, F, T, x, P, D, O, I, E, A, L, et, k, st, N, it, H, rt, _, nt, B, at, W, ot, K, Ct, wt, Bt = (wt = class extends It {
  constructor(e, s) {
    super();
    d(this, E);
    d(this, L);
    d(this, k);
    d(this, N);
    d(this, H);
    d(this, _);
    d(this, B);
    d(this, W);
    d(this, K);
    d(this, m, void 0);
    d(this, h, void 0);
    d(this, U, void 0);
    d(this, g, void 0);
    d(this, z, void 0);
    d(this, M, void 0);
    d(this, w, void 0);
    d(this, F, void 0);
    d(this, T, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    d(this, x, void 0);
    d(this, P, void 0);
    d(this, D, void 0);
    d(this, O, void 0);
    d(this, I, void 0);
    l(this, h, void 0), l(this, U, void 0), l(this, g, void 0), l(this, I, /* @__PURE__ */ new Set()), l(this, m, e), this.options = s, l(this, w, null), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (r(this, h).addObserver(this), yt(r(this, h), this.options) ? f(this, E, A).call(this) : this.updateResult(), f(this, H, rt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ct(
      r(this, h),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return ct(
      r(this, h),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), f(this, _, nt).call(this), f(this, B, at).call(this), r(this, h).removeObserver(this);
  }
  setOptions(e, s) {
    const i = this.options, c = r(this, h);
    if (this.options = r(this, m).defaultQueryOptions(e), tt(i, this.options) || r(this, m).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: r(this, h),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = i.queryKey), f(this, W, ot).call(this);
    const n = this.hasListeners();
    n && bt(
      r(this, h),
      c,
      this.options,
      i
    ) && f(this, E, A).call(this), this.updateResult(s), n && (r(this, h) !== c || this.options.enabled !== i.enabled || this.options.staleTime !== i.staleTime) && f(this, L, et).call(this);
    const a = f(this, k, st).call(this);
    n && (r(this, h) !== c || this.options.enabled !== i.enabled || a !== r(this, O)) && f(this, N, it).call(this, a);
  }
  getOptimisticResult(e) {
    const s = r(this, m).getQueryCache().build(r(this, m), e), i = this.createResult(s, e);
    return jt(this, i) && (l(this, g, i), l(this, M, this.options), l(this, z, r(this, h).state)), i;
  }
  getCurrentResult() {
    return r(this, g);
  }
  trackResult(e) {
    const s = {};
    return Object.keys(e).forEach((i) => {
      Object.defineProperty(s, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (r(this, I).add(i), e[i])
      });
    }), s;
  }
  getCurrentQuery() {
    return r(this, h);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const s = r(this, m).defaultQueryOptions(e), i = r(this, m).getQueryCache().build(r(this, m), s);
    return i.isFetchingOptimistic = !0, i.fetch().then(() => this.createResult(i, s));
  }
  fetch(e) {
    return f(this, E, A).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), r(this, g)));
  }
  createResult(e, s) {
    var ft;
    const i = r(this, h), c = this.options, n = r(this, g), a = r(this, z), o = r(this, M), C = e !== i ? e.state : r(this, U), { state: u } = e;
    let { error: V, errorUpdatedAt: ht, fetchStatus: Q, status: S } = u, ut = !1, b;
    if (s._optimisticResults) {
      const v = this.hasListeners(), X = !v && yt(e, s), Dt = v && bt(e, i, s, c);
      (X || Dt) && (Q = Tt(e.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (S = "pending")), s._optimisticResults === "isRestoring" && (Q = "idle");
    }
    if (s.select && typeof u.data < "u")
      if (n && u.data === (a == null ? void 0 : a.data) && s.select === r(this, F))
        b = r(this, T);
      else
        try {
          l(this, F, s.select), b = s.select(u.data), b = mt(n == null ? void 0 : n.data, b, s), l(this, T, b), l(this, w, null);
        } catch (v) {
          l(this, w, v);
        }
    else
      b = u.data;
    if (typeof s.placeholderData < "u" && typeof b > "u" && S === "pending") {
      let v;
      if (n != null && n.isPlaceholderData && s.placeholderData === (o == null ? void 0 : o.placeholderData))
        v = n.data;
      else if (v = typeof s.placeholderData == "function" ? s.placeholderData(
        (ft = r(this, x)) == null ? void 0 : ft.state.data,
        r(this, x)
      ) : s.placeholderData, s.select && typeof v < "u")
        try {
          v = s.select(v), l(this, w, null);
        } catch (X) {
          l(this, w, X);
        }
      typeof v < "u" && (S = "success", b = mt(
        n == null ? void 0 : n.data,
        v,
        s
      ), ut = !0);
    }
    r(this, w) && (V = r(this, w), b = r(this, T), ht = Date.now(), S = "error");
    const q = Q === "fetching", G = S === "pending", J = S === "error", dt = G && q;
    return {
      status: S,
      fetchStatus: Q,
      isPending: G,
      isSuccess: S === "success",
      isError: J,
      isInitialLoading: dt,
      isLoading: dt,
      data: b,
      dataUpdatedAt: u.dataUpdatedAt,
      error: V,
      errorUpdatedAt: ht,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > C.dataUpdateCount || u.errorUpdateCount > C.errorUpdateCount,
      isFetching: q,
      isRefetching: q && !G,
      isLoadingError: J && u.dataUpdatedAt === 0,
      isPaused: Q === "paused",
      isPlaceholderData: ut,
      isRefetchError: J && u.dataUpdatedAt !== 0,
      isStale: lt(e, s),
      refetch: this.refetch
    };
  }
  updateResult(e) {
    const s = r(this, g), i = this.createResult(r(this, h), this.options);
    if (l(this, z, r(this, h).state), l(this, M, this.options), r(this, z).data !== void 0 && l(this, x, r(this, h)), tt(i, s))
      return;
    l(this, g, i);
    const c = {}, n = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: a } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !r(this, I).size)
        return !0;
      const y = new Set(
        o ?? r(this, I)
      );
      return this.options.throwOnError && y.add("error"), Object.keys(r(this, g)).some((C) => {
        const u = C;
        return r(this, g)[u] !== s[u] && y.has(u);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && n() && (c.listeners = !0), f(this, K, Ct).call(this, { ...c, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && f(this, H, rt).call(this);
  }
}, m = new WeakMap(), h = new WeakMap(), U = new WeakMap(), g = new WeakMap(), z = new WeakMap(), M = new WeakMap(), w = new WeakMap(), F = new WeakMap(), T = new WeakMap(), x = new WeakMap(), P = new WeakMap(), D = new WeakMap(), O = new WeakMap(), I = new WeakMap(), E = new WeakSet(), A = function(e) {
  f(this, W, ot).call(this);
  let s = r(this, h).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (s = s.catch(Et)), s;
}, L = new WeakSet(), et = function() {
  if (f(this, _, nt).call(this), pt || r(this, g).isStale || !gt(this.options.staleTime))
    return;
  const s = Ut(
    r(this, g).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  l(this, P, setTimeout(() => {
    r(this, g).isStale || this.updateResult();
  }, s));
}, k = new WeakSet(), st = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(r(this, h)) : this.options.refetchInterval) ?? !1;
}, N = new WeakSet(), it = function(e) {
  f(this, B, at).call(this), l(this, O, e), !(pt || this.options.enabled === !1 || !gt(r(this, O)) || r(this, O) === 0) && l(this, D, setInterval(() => {
    (this.options.refetchIntervalInBackground || Mt.isFocused()) && f(this, E, A).call(this);
  }, r(this, O)));
}, H = new WeakSet(), rt = function() {
  f(this, L, et).call(this), f(this, N, it).call(this, f(this, k, st).call(this));
}, _ = new WeakSet(), nt = function() {
  r(this, P) && (clearTimeout(r(this, P)), l(this, P, void 0));
}, B = new WeakSet(), at = function() {
  r(this, D) && (clearInterval(r(this, D)), l(this, D, void 0));
}, W = new WeakSet(), ot = function() {
  const e = r(this, m).getQueryCache().build(r(this, m), this.options);
  if (e === r(this, h))
    return;
  const s = r(this, h);
  l(this, h, e), l(this, U, e.state), this.hasListeners() && (s == null || s.removeObserver(this), e.addObserver(this));
}, K = new WeakSet(), Ct = function(e) {
  Rt.batch(() => {
    e.listeners && this.listeners.forEach((s) => {
      s(r(this, g));
    }), r(this, m).getQueryCache().notify({
      query: r(this, h),
      type: "observerResultsUpdated"
    });
  });
}, wt);
function Wt(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function yt(t, e) {
  return Wt(t, e) || t.state.dataUpdatedAt > 0 && ct(t, e, e.refetchOnMount);
}
function ct(t, e, s) {
  if (e.enabled !== !1) {
    const i = typeof s == "function" ? s(t) : s;
    return i === "always" || i !== !1 && lt(t, e);
  }
  return !1;
}
function bt(t, e, s, i) {
  return s.enabled !== !1 && (t !== e || i.enabled === !1) && (!s.suspense || t.state.status !== "error") && lt(t, s);
}
function lt(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function jt(t, e) {
  return !tt(t.getCurrentResult(), e);
}
var St = R.createContext(!1), Kt = () => R.useContext(St);
St.Provider;
function Vt() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
var qt = R.createContext(Vt()), Gt = () => R.useContext(qt);
function Jt(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
var Xt = (t, e) => {
  (t.suspense || t.throwOnError) && (e.isReset() || (t.retryOnMount = !1));
}, Yt = (t) => {
  R.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Zt = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: s,
  query: i
}) => t.isError && !e.isReset() && !t.isFetching && Jt(s, [t.error, i]), $t = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, te = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, ee = (t, e, s) => e.fetchOptimistic(t).catch(() => {
  s.clearReset();
});
function se(t, e, s) {
  const i = xt(s), c = Kt(), n = Gt(), a = i.defaultQueryOptions(t);
  a._optimisticResults = c ? "isRestoring" : "optimistic", $t(a), Xt(a, n), Yt(n);
  const [o] = R.useState(
    () => new e(
      i,
      a
    )
  ), y = o.getOptimisticResult(a);
  if (R.useSyncExternalStore(
    R.useCallback(
      (C) => {
        const u = c ? () => {
        } : o.subscribe(Rt.batchCalls(C));
        return o.updateResult(), u;
      },
      [o, c]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), R.useEffect(() => {
    o.setOptions(a, { listeners: !1 });
  }, [a, o]), te(a, y))
    throw ee(a, o, n);
  if (Zt({
    result: y,
    errorResetBoundary: n,
    throwOnError: a.throwOnError,
    query: o.getCurrentQuery()
  }))
    throw y.error;
  return a.notifyOnChangeProps ? y : o.trackResult(y);
}
function ie(t, e) {
  return se(t, Bt, e);
}
var Ot = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", s = "caret-down", i = 320, c = 512, n = [], a = "f0d7", o = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  t.definition = {
    prefix: e,
    iconName: s,
    icon: [
      i,
      c,
      n,
      a,
      o
    ]
  }, t.faCaretDown = t.definition, t.prefix = e, t.iconName = s, t.width = i, t.height = c, t.ligatures = n, t.unicode = a, t.svgPathData = o, t.aliases = n;
})(Ot);
var zt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", s = "arrow-down", i = 384, c = 512, n = [8595], a = "f063", o = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  t.definition = {
    prefix: e,
    iconName: s,
    icon: [
      i,
      c,
      n,
      a,
      o
    ]
  }, t.faArrowDown = t.definition, t.prefix = e, t.iconName = s, t.width = i, t.height = c, t.ligatures = n, t.unicode = a, t.svgPathData = o, t.aliases = n;
})(zt);
var Pt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = "fas", s = "arrow-up", i = 384, c = 512, n = [8593], a = "f062", o = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  t.definition = {
    prefix: e,
    iconName: s,
    icon: [
      i,
      c,
      n,
      a,
      o
    ]
  }, t.faArrowUp = t.definition, t.prefix = e, t.iconName = s, t.width = i, t.height = c, t.ligatures = n, t.unicode = a, t.svgPathData = o, t.aliases = n;
})(Pt);
const re = ({
  table: t
}) => {
  const e = !!t.getAllColumns().find((s) => s.getIsResizing());
  return /* @__PURE__ */ j("table", { css: [{
    minWidth: "100%"
  }, Z`
          table-layout: fixed;
        `, e && {
    cursor: "col-resize"
  }], style: {
    width: t.getTotalSize()
  }, children: [
    t.getHeaderGroups().map((s) => /* @__PURE__ */ p("colgroup", { children: s.headers.map((i) => /* @__PURE__ */ p("col", { span: i.colSpan, style: {
      width: i.column.getSize()
    } }, i.id)) }, s.id)),
    /* @__PURE__ */ p("thead", { children: t.getHeaderGroups().map((s) => /* @__PURE__ */ p("tr", { css: {
      borderBottomWidth: "1px"
    }, children: s.headers.map((i) => /* @__PURE__ */ j("th", { css: [{
      position: "relative",
      userSelect: "none",
      whiteSpace: "nowrap",
      borderRightWidth: "1px",
      padding: "0px",
      textAlign: "left"
    }, i.column.getIsResizing() && {
      "--tw-border-opacity": "1",
      borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
    }, Z`
                    &:last-child {
                      .resizer {
                        right: 0;
                      }
                    }
                  `], colSpan: i.colSpan, children: [
      /* @__PURE__ */ j("div", { css: [{
        position: "relative",
        display: "flex",
        width: "100%",
        overflow: "hidden",
        ":hover": {
          backgroundColor: "rgb(229 231 235 / 0.6)"
        }
      }, Z`
                      &:hover {
                        .menu {
                          display: block;
                        }
                      }
                    `], children: [
        /* @__PURE__ */ j("div", { onClick: () => {
          if (i.column.getCanSort())
            return i.column.toggleSorting();
        }, css: [i.column.getCanSort() && !e ? {
          cursor: "pointer"
        } : null, {
          position: "relative",
          flex: "1 1 0%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          padding: "0.5rem"
        }], children: [
          i.isPlaceholder ? null : vt(i.column.columnDef.header, i.getContext()),
          " ",
          i.column.getIsSorted() === "asc" && /* @__PURE__ */ p($, { icon: Pt.faArrowUp, css: {
            "--tw-text-opacity": "1",
            color: "rgb(90 88 173 / var(--tw-text-opacity))"
          } }),
          i.column.getIsSorted() === "desc" && /* @__PURE__ */ p($, { icon: zt.faArrowDown, css: {
            "--tw-text-opacity": "1",
            color: "rgb(90 88 173 / var(--tw-text-opacity))"
          } })
        ] }),
        /* @__PURE__ */ p("div", { className: "menu", css: [{
          position: "relative",
          right: "0px",
          display: "none",
          padding: "0.5rem",
          ":hover": {
            "--tw-bg-opacity": "1",
            backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
          }
        }, !e && {
          cursor: "pointer"
        }], children: /* @__PURE__ */ p($, { css: {
          "--tw-text-opacity": "1",
          color: "rgb(156 163 175 / var(--tw-text-opacity))"
        }, icon: Ot.faCaretDown }) })
      ] }),
      i.column.getCanResize() && /* @__PURE__ */ p("div", { css: [{
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
      }, i.column.getIsResizing() && {
        backgroundColor: "rgb(141 148 205 / 0.3)"
      }], onMouseDown: i.getResizeHandler(), onTouchStart: i.getResizeHandler(), className: "resizer" })
    ] }, i.id)) }, s.id)) }),
    /* @__PURE__ */ p("tbody", { children: t.getRowModel().rows.map((s) => /* @__PURE__ */ p("tr", { css: [{
      position: "relative",
      overflow: "hidden",
      textOverflow: "ellipsis",
      borderBottomWidth: "1px",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
      }
    }], children: s.getVisibleCells().map((i) => /* @__PURE__ */ p("td", { css: [{
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      borderRightWidth: "1px",
      padding: "0.375rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem"
    }, i.column.getIsResizing() && {
      "--tw-border-opacity": "1",
      borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
    }], children: /* @__PURE__ */ p("span", { css: [{
      position: "relative"
    }], children: vt(i.column.columnDef.cell, i.getContext()) }) }, i.id)) }, s.id)) })
  ] });
}, ne = ({
  columns: t,
  data: e = [],
  ...s
}) => {
  const [i, {
    width: c
  }] = Qt(), n = Ht({
    getCoreRowModel: _t(),
    ...s,
    columns: t,
    data: e
    // onColumnSizingChange,
    // state: { columnSizing },
  });
  return {
    ref: i,
    ...n
  };
}, ae = () => {
  const {
    close: t,
    setTitle: e,
    maximize: s,
    minimize: i,
    fold: c,
    setWidth: n,
    setHeight: a,
    updatePosition: o
  } = At();
  return {
    close: t,
    setTitle: e,
    maximize: s,
    minimize: i,
    fold: c,
    setWidth: n,
    setHeight: a,
    updatePosition: o
  };
}, oe = () => {
  const t = Ft();
  if (!t)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return t.client;
};
function ce(t, e) {
  let s;
  typeof t == "string" ? s = {
    url: t,
    ...e
  } : s = t;
  const {
    url: i,
    params: c,
    ...n
  } = s, a = oe();
  return ie({
    queryKey: c ? [i, c, a.defaults.headers.Authorization || ""] : [i, a.defaults.headers.Authorization || ""],
    queryFn: async ({
      queryKey: [o, y],
      signal: C
    }) => {
      const {
        data: u
      } = await a.get(o, {
        params: y,
        signal: C
      });
      return u;
    },
    ...n
  });
}
const le = [{
  header: "E-mail",
  accessorKey: "email",
  cell: (t) => t.getValue()
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
  cell: (t) => t.getValue() ? "Да" : "Нет"
}], ye = () => {
  const {
    close: t
  } = ae(), {
    data: e,
    isLoading: s
  } = ce("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: c
    }) => c
  }), i = ne({
    data: e,
    columns: le,
    columnResizeMode: "onChange"
  });
  return /* @__PURE__ */ p(Nt, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ p(kt, { onClick: t, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ p(Lt, { spinning: s, children: /* @__PURE__ */ p(re, { table: i }) }) });
};
export {
  ye as default
};
