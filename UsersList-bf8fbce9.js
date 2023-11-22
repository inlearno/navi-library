var Y = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var r = (e, t, s) => (Y(e, t, "read from private field"), s ? s.call(e) : t.get(e)), d = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
}, l = (e, t, s, i) => (Y(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s);
var f = (e, t, s) => (Y(e, t, "access private method"), s);
import { S as Ie, s as ee, n as Ee, i as pe, a as ge, t as Ue, f as Me, c as Te, r as me, b as Re, u as xe, j, d as p, e as Qe, g as Ae, h as Fe, k as Le } from "./library-b45bf7b1.js";
import { C as ke, P as He } from "./Panel-cfb6342e.js";
import { a as Z } from "./mui-36ebfa29.js";
import { f as ve, u as Ne, g as _e } from "./table-46c094fe.js";
import { F as $ } from "./icons-a8a50daa.js";
import { r as R } from "./react-72acea58.js";
var m, h, U, g, z, M, w, F, T, x, P, D, O, I, E, A, L, te, k, se, H, ie, N, re, _, ne, B, ae, W, oe, K, Ce, we, Be = (we = class extends Ie {
  constructor(t, s) {
    super();
    d(this, E);
    d(this, L);
    d(this, k);
    d(this, H);
    d(this, N);
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
    l(this, h, void 0), l(this, U, void 0), l(this, g, void 0), l(this, I, /* @__PURE__ */ new Set()), l(this, m, t), this.options = s, l(this, w, null), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (r(this, h).addObserver(this), be(r(this, h), this.options) ? f(this, E, A).call(this) : this.updateResult(), f(this, N, re).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ce(
      r(this, h),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return ce(
      r(this, h),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), f(this, _, ne).call(this), f(this, B, ae).call(this), r(this, h).removeObserver(this);
  }
  setOptions(t, s) {
    const i = this.options, c = r(this, h);
    if (this.options = r(this, m).defaultQueryOptions(t), ee(i, this.options) || r(this, m).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: r(this, h),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = i.queryKey), f(this, W, oe).call(this);
    const n = this.hasListeners();
    n && ye(
      r(this, h),
      c,
      this.options,
      i
    ) && f(this, E, A).call(this), this.updateResult(s), n && (r(this, h) !== c || this.options.enabled !== i.enabled || this.options.staleTime !== i.staleTime) && f(this, L, te).call(this);
    const a = f(this, k, se).call(this);
    n && (r(this, h) !== c || this.options.enabled !== i.enabled || a !== r(this, O)) && f(this, H, ie).call(this, a);
  }
  getOptimisticResult(t) {
    const s = r(this, m).getQueryCache().build(r(this, m), t), i = this.createResult(s, t);
    return je(this, i) && (l(this, g, i), l(this, M, this.options), l(this, z, r(this, h).state)), i;
  }
  getCurrentResult() {
    return r(this, g);
  }
  trackResult(t) {
    const s = {};
    return Object.keys(t).forEach((i) => {
      Object.defineProperty(s, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (r(this, I).add(i), t[i])
      });
    }), s;
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
    const s = r(this, m).defaultQueryOptions(t), i = r(this, m).getQueryCache().build(r(this, m), s);
    return i.isFetchingOptimistic = !0, i.fetch().then(() => this.createResult(i, s));
  }
  fetch(t) {
    return f(this, E, A).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), r(this, g)));
  }
  createResult(t, s) {
    var fe;
    const i = r(this, h), c = this.options, n = r(this, g), a = r(this, z), o = r(this, M), C = t !== i ? t.state : r(this, U), { state: u } = t;
    let { error: V, errorUpdatedAt: he, fetchStatus: Q, status: S } = u, ue = !1, y;
    if (s._optimisticResults) {
      const v = this.hasListeners(), X = !v && be(t, s), De = v && ye(t, i, s, c);
      (X || De) && (Q = Te(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (S = "pending")), s._optimisticResults === "isRestoring" && (Q = "idle");
    }
    if (s.select && typeof u.data < "u")
      if (n && u.data === (a == null ? void 0 : a.data) && s.select === r(this, F))
        y = r(this, T);
      else
        try {
          l(this, F, s.select), y = s.select(u.data), y = me(n == null ? void 0 : n.data, y, s), l(this, T, y), l(this, w, null);
        } catch (v) {
          l(this, w, v);
        }
    else
      y = u.data;
    if (typeof s.placeholderData < "u" && typeof y > "u" && S === "pending") {
      let v;
      if (n != null && n.isPlaceholderData && s.placeholderData === (o == null ? void 0 : o.placeholderData))
        v = n.data;
      else if (v = typeof s.placeholderData == "function" ? s.placeholderData(
        (fe = r(this, x)) == null ? void 0 : fe.state.data,
        r(this, x)
      ) : s.placeholderData, s.select && typeof v < "u")
        try {
          v = s.select(v), l(this, w, null);
        } catch (X) {
          l(this, w, X);
        }
      typeof v < "u" && (S = "success", y = me(
        n == null ? void 0 : n.data,
        v,
        s
      ), ue = !0);
    }
    r(this, w) && (V = r(this, w), y = r(this, T), he = Date.now(), S = "error");
    const q = Q === "fetching", G = S === "pending", J = S === "error", de = G && q;
    return {
      status: S,
      fetchStatus: Q,
      isPending: G,
      isSuccess: S === "success",
      isError: J,
      isInitialLoading: de,
      isLoading: de,
      data: y,
      dataUpdatedAt: u.dataUpdatedAt,
      error: V,
      errorUpdatedAt: he,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > C.dataUpdateCount || u.errorUpdateCount > C.errorUpdateCount,
      isFetching: q,
      isRefetching: q && !G,
      isLoadingError: J && u.dataUpdatedAt === 0,
      isPaused: Q === "paused",
      isPlaceholderData: ue,
      isRefetchError: J && u.dataUpdatedAt !== 0,
      isStale: le(t, s),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const s = r(this, g), i = this.createResult(r(this, h), this.options);
    if (l(this, z, r(this, h).state), l(this, M, this.options), r(this, z).data !== void 0 && l(this, x, r(this, h)), ee(i, s))
      return;
    l(this, g, i);
    const c = {}, n = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: a } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !r(this, I).size)
        return !0;
      const b = new Set(
        o ?? r(this, I)
      );
      return this.options.throwOnError && b.add("error"), Object.keys(r(this, g)).some((C) => {
        const u = C;
        return r(this, g)[u] !== s[u] && b.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && n() && (c.listeners = !0), f(this, K, Ce).call(this, { ...c, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && f(this, N, re).call(this);
  }
}, m = new WeakMap(), h = new WeakMap(), U = new WeakMap(), g = new WeakMap(), z = new WeakMap(), M = new WeakMap(), w = new WeakMap(), F = new WeakMap(), T = new WeakMap(), x = new WeakMap(), P = new WeakMap(), D = new WeakMap(), O = new WeakMap(), I = new WeakMap(), E = new WeakSet(), A = function(t) {
  f(this, W, oe).call(this);
  let s = r(this, h).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (s = s.catch(Ee)), s;
}, L = new WeakSet(), te = function() {
  if (f(this, _, ne).call(this), pe || r(this, g).isStale || !ge(this.options.staleTime))
    return;
  const s = Ue(
    r(this, g).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  l(this, P, setTimeout(() => {
    r(this, g).isStale || this.updateResult();
  }, s));
}, k = new WeakSet(), se = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(r(this, h)) : this.options.refetchInterval) ?? !1;
}, H = new WeakSet(), ie = function(t) {
  f(this, B, ae).call(this), l(this, O, t), !(pe || this.options.enabled === !1 || !ge(r(this, O)) || r(this, O) === 0) && l(this, D, setInterval(() => {
    (this.options.refetchIntervalInBackground || Me.isFocused()) && f(this, E, A).call(this);
  }, r(this, O)));
}, N = new WeakSet(), re = function() {
  f(this, L, te).call(this), f(this, H, ie).call(this, f(this, k, se).call(this));
}, _ = new WeakSet(), ne = function() {
  r(this, P) && (clearTimeout(r(this, P)), l(this, P, void 0));
}, B = new WeakSet(), ae = function() {
  r(this, D) && (clearInterval(r(this, D)), l(this, D, void 0));
}, W = new WeakSet(), oe = function() {
  const t = r(this, m).getQueryCache().build(r(this, m), this.options);
  if (t === r(this, h))
    return;
  const s = r(this, h);
  l(this, h, t), l(this, U, t.state), this.hasListeners() && (s == null || s.removeObserver(this), t.addObserver(this));
}, K = new WeakSet(), Ce = function(t) {
  Re.batch(() => {
    t.listeners && this.listeners.forEach((s) => {
      s(r(this, g));
    }), r(this, m).getQueryCache().notify({
      query: r(this, h),
      type: "observerResultsUpdated"
    });
  });
}, we);
function We(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function be(e, t) {
  return We(e, t) || e.state.dataUpdatedAt > 0 && ce(e, t, t.refetchOnMount);
}
function ce(e, t, s) {
  if (t.enabled !== !1) {
    const i = typeof s == "function" ? s(e) : s;
    return i === "always" || i !== !1 && le(e, t);
  }
  return !1;
}
function ye(e, t, s, i) {
  return s.enabled !== !1 && (e !== t || i.enabled === !1) && (!s.suspense || e.state.status !== "error") && le(e, s);
}
function le(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function je(e, t) {
  return !ee(e.getCurrentResult(), t);
}
var Se = R.createContext(!1), Ke = () => R.useContext(Se);
Se.Provider;
function Ve() {
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
var qe = R.createContext(Ve()), Ge = () => R.useContext(qe);
function Je(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Xe = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, Ye = (e) => {
  R.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Ze = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: s,
  query: i
}) => e.isError && !t.isReset() && !e.isFetching && Je(s, [e.error, i]), $e = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, et = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, tt = (e, t, s) => t.fetchOptimistic(e).catch(() => {
  s.clearReset();
});
function st(e, t, s) {
  const i = xe(s), c = Ke(), n = Ge(), a = i.defaultQueryOptions(e);
  a._optimisticResults = c ? "isRestoring" : "optimistic", $e(a), Xe(a, n), Ye(n);
  const [o] = R.useState(
    () => new t(
      i,
      a
    )
  ), b = o.getOptimisticResult(a);
  if (R.useSyncExternalStore(
    R.useCallback(
      (C) => {
        const u = c ? () => {
        } : o.subscribe(Re.batchCalls(C));
        return o.updateResult(), u;
      },
      [o, c]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), R.useEffect(() => {
    o.setOptions(a, { listeners: !1 });
  }, [a, o]), et(a, b))
    throw tt(a, o, n);
  if (Ze({
    result: b,
    errorResetBoundary: n,
    throwOnError: a.throwOnError,
    query: o.getCurrentQuery()
  }))
    throw b.error;
  return a.notifyOnChangeProps ? b : o.trackResult(b);
}
function it(e, t) {
  return st(e, Be, t);
}
var Oe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "caret-down", i = 320, c = 512, n = [], a = "f0d7", o = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      i,
      c,
      n,
      a,
      o
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = s, e.width = i, e.height = c, e.ligatures = n, e.unicode = a, e.svgPathData = o, e.aliases = n;
})(Oe);
var ze = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "arrow-down", i = 384, c = 512, n = [8595], a = "f063", o = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      i,
      c,
      n,
      a,
      o
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = s, e.width = i, e.height = c, e.ligatures = n, e.unicode = a, e.svgPathData = o, e.aliases = n;
})(ze);
var Pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "arrow-up", i = 384, c = 512, n = [8593], a = "f062", o = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      i,
      c,
      n,
      a,
      o
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = s, e.width = i, e.height = c, e.ligatures = n, e.unicode = a, e.svgPathData = o, e.aliases = n;
})(Pe);
const rt = ({
  table: e
}) => {
  const t = !!e.getAllColumns().find((s) => s.getIsResizing());
  return /* @__PURE__ */ j("table", { css: [{
    minWidth: "100%"
  }, Z`
          table-layout: fixed;
        `, t && {
    cursor: "col-resize"
  }], style: {
    width: e.getTotalSize()
  }, children: [
    e.getHeaderGroups().map((s) => /* @__PURE__ */ p("colgroup", { children: s.headers.map((i) => /* @__PURE__ */ p("col", { span: i.colSpan, style: {
      width: i.column.getSize()
    } }, i.id)) }, s.id)),
    /* @__PURE__ */ p("thead", { children: e.getHeaderGroups().map((s) => /* @__PURE__ */ p("tr", { css: {
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
        }, css: [i.column.getCanSort() && !t ? {
          cursor: "pointer"
        } : null, {
          position: "relative",
          flex: "1 1 0%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          padding: "0.5rem"
        }], children: [
          i.isPlaceholder ? null : ve(i.column.columnDef.header, i.getContext()),
          " ",
          i.column.getIsSorted() === "asc" && /* @__PURE__ */ p($, { icon: Pe.faArrowUp, css: {
            "--tw-text-opacity": "1",
            color: "rgb(90 88 173 / var(--tw-text-opacity))"
          } }),
          i.column.getIsSorted() === "desc" && /* @__PURE__ */ p($, { icon: ze.faArrowDown, css: {
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
        }, !t && {
          cursor: "pointer"
        }], children: /* @__PURE__ */ p($, { css: {
          "--tw-text-opacity": "1",
          color: "rgb(156 163 175 / var(--tw-text-opacity))"
        }, icon: Oe.faCaretDown }) })
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
    /* @__PURE__ */ p("tbody", { children: e.getRowModel().rows.map((s) => /* @__PURE__ */ p("tr", { css: [{
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
    }], children: ve(i.column.columnDef.cell, i.getContext()) }) }, i.id)) }, s.id)) })
  ] });
}, nt = ({
  columns: e,
  data: t = [],
  ...s
}) => {
  const [i, {
    width: c
  }] = Qe(), n = Ne({
    getCoreRowModel: _e(),
    ...s,
    columns: e,
    data: t
    // onColumnSizingChange,
    // state: { columnSizing },
  });
  return {
    ref: i,
    ...n
  };
}, at = () => {
  const {
    close: e,
    setTitle: t,
    maximize: s,
    minimize: i,
    fold: c,
    setWidth: n,
    setHeight: a,
    updatePosition: o
  } = Ae();
  return {
    close: e,
    setTitle: t,
    maximize: s,
    minimize: i,
    fold: c,
    setWidth: n,
    setHeight: a,
    updatePosition: o
  };
}, ot = () => {
  const e = Fe();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function ct(e, t) {
  let s;
  typeof e == "string" ? s = {
    url: e,
    ...t
  } : s = e;
  const {
    url: i,
    params: c,
    ...n
  } = s, a = ot();
  return it({
    queryKey: c ? [i, c, a.defaults.headers.Authorization || ""] : [i, a.defaults.headers.Authorization || ""],
    queryFn: async ({
      queryKey: [o, b],
      signal: C
    }) => {
      const {
        data: u
      } = await a.get(o, {
        params: b,
        signal: C
      });
      return u;
    },
    ...n
  });
}
const lt = [{
  header: "E-mail",
  accessorKey: "email",
  cell: (e) => e.getValue(),
  enableSorting: !1,
  enableResizing: !1,
  enableHiding: !0
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
  cell: (e) => e.getValue() ? "Да" : "Нет"
}], bt = () => {
  const {
    close: e
  } = at(), {
    data: t,
    isLoading: s
  } = ct("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: c
    }) => c
  }), i = nt({
    data: t,
    columns: lt,
    columnResizeMode: "onChange",
    debugRows: !0
  });
  return /* @__PURE__ */ p(He, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ p(ke, { onClick: e, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ p(Le, { spinning: s, children: /* @__PURE__ */ p(rt, { table: i }) }) });
};
export {
  bt as default
};
