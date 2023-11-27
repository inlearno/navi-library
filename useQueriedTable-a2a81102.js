var jt = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var g = (e, t, n) => (jt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), T = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, k = (e, t, n, i) => (jt(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
var z = (e, t, n) => (jt(e, t, "access private method"), n);
import { S as Pi, s as Ht, n as Ri, i as bn, a as wn, t as Ni, f as ki, c as Oi, r as yn, b as An, d as Ti, e as H, j as w, F as Di, g as Ii, h as Ai, k as Li } from "./library-504a24c4.js";
import { j as L, n as zi, a as yt, I as Ke } from "./mui-b24eacef.js";
import { f as tn, u as ji, g as xi } from "./table-ce790a12.js";
import { r as c, R as Ln, b as Xe } from "./react-97c263ed.js";
import { F as Z } from "./icons-fa70a1ec.js";
var q, O, je, B, Ee, xe, ce, Ye, _e, He, Me, Pe, me, Re, Ne, Qe, Je, Ft, et, Ut, tt, Bt, nt, Vt, it, Wt, st, $t, rt, Kt, Rt, zn, In, _i = (In = class extends Pi {
  constructor(t, n) {
    super();
    T(this, Ne);
    T(this, Je);
    T(this, et);
    T(this, tt);
    T(this, nt);
    T(this, it);
    T(this, st);
    T(this, rt);
    T(this, Rt);
    T(this, q, void 0);
    T(this, O, void 0);
    T(this, je, void 0);
    T(this, B, void 0);
    T(this, Ee, void 0);
    T(this, xe, void 0);
    T(this, ce, void 0);
    T(this, Ye, void 0);
    T(this, _e, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    T(this, He, void 0);
    T(this, Me, void 0);
    T(this, Pe, void 0);
    T(this, me, void 0);
    T(this, Re, void 0);
    k(this, O, void 0), k(this, je, void 0), k(this, B, void 0), k(this, Re, /* @__PURE__ */ new Set()), k(this, q, t), this.options = n, k(this, ce, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (g(this, O).addObserver(this), Cn(g(this, O), this.options) ? z(this, Ne, Qe).call(this) : this.updateResult(), z(this, nt, Vt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Qt(
      g(this, O),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Qt(
      g(this, O),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), z(this, it, Wt).call(this), z(this, st, $t).call(this), g(this, O).removeObserver(this);
  }
  setOptions(t, n) {
    const i = this.options, r = g(this, O);
    if (this.options = g(this, q).defaultQueryOptions(t), Ht(i, this.options) || g(this, q).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: g(this, O),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = i.queryKey), z(this, rt, Kt).call(this);
    const s = this.hasListeners();
    s && Sn(
      g(this, O),
      r,
      this.options,
      i
    ) && z(this, Ne, Qe).call(this), this.updateResult(n), s && (g(this, O) !== r || this.options.enabled !== i.enabled || this.options.staleTime !== i.staleTime) && z(this, Je, Ft).call(this);
    const a = z(this, et, Ut).call(this);
    s && (g(this, O) !== r || this.options.enabled !== i.enabled || a !== g(this, me)) && z(this, tt, Bt).call(this, a);
  }
  getOptimisticResult(t) {
    const n = g(this, q).getQueryCache().build(g(this, q), t), i = this.createResult(n, t);
    return Fi(this, i) && (k(this, B, i), k(this, xe, this.options), k(this, Ee, g(this, O).state)), i;
  }
  getCurrentResult() {
    return g(this, B);
  }
  trackResult(t) {
    const n = {};
    return Object.keys(t).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (g(this, Re).add(i), t[i])
      });
    }), n;
  }
  getCurrentQuery() {
    return g(this, O);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = g(this, q).defaultQueryOptions(t), i = g(this, q).getQueryCache().build(g(this, q), n);
    return i.isFetchingOptimistic = !0, i.fetch().then(() => this.createResult(i, n));
  }
  fetch(t) {
    return z(this, Ne, Qe).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), g(this, B)));
  }
  createResult(t, n) {
    var j;
    const i = g(this, O), r = this.options, s = g(this, B), a = g(this, Ee), o = g(this, xe), m = t !== i ? t.state : g(this, je), { state: u } = t;
    let { error: p, errorUpdatedAt: S, fetchStatus: f, status: l } = u, h = !1, v;
    if (n._optimisticResults) {
      const R = this.hasListeners(), W = !R && Cn(t, n), ue = R && Sn(t, i, n, r);
      (W || ue) && (f = Oi(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (l = "pending")), n._optimisticResults === "isRestoring" && (f = "idle");
    }
    if (n.select && typeof u.data < "u")
      if (s && u.data === (a == null ? void 0 : a.data) && n.select === g(this, Ye))
        v = g(this, _e);
      else
        try {
          k(this, Ye, n.select), v = n.select(u.data), v = yn(s == null ? void 0 : s.data, v, n), k(this, _e, v), k(this, ce, null);
        } catch (R) {
          k(this, ce, R);
        }
    else
      v = u.data;
    if (typeof n.placeholderData < "u" && typeof v > "u" && l === "pending") {
      let R;
      if (s != null && s.isPlaceholderData && n.placeholderData === (o == null ? void 0 : o.placeholderData))
        R = s.data;
      else if (R = typeof n.placeholderData == "function" ? n.placeholderData(
        (j = g(this, He)) == null ? void 0 : j.state.data,
        g(this, He)
      ) : n.placeholderData, n.select && typeof R < "u")
        try {
          R = n.select(R), k(this, ce, null);
        } catch (W) {
          k(this, ce, W);
        }
      typeof R < "u" && (l = "success", v = yn(
        s == null ? void 0 : s.data,
        R,
        n
      ), h = !0);
    }
    g(this, ce) && (p = g(this, ce), v = g(this, _e), S = Date.now(), l = "error");
    const y = f === "fetching", b = l === "pending", C = l === "error", M = b && y;
    return {
      status: l,
      fetchStatus: f,
      isPending: b,
      isSuccess: l === "success",
      isError: C,
      isInitialLoading: M,
      isLoading: M,
      data: v,
      dataUpdatedAt: u.dataUpdatedAt,
      error: p,
      errorUpdatedAt: S,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > m.dataUpdateCount || u.errorUpdateCount > m.errorUpdateCount,
      isFetching: y,
      isRefetching: y && !b,
      isLoadingError: C && u.dataUpdatedAt === 0,
      isPaused: f === "paused",
      isPlaceholderData: h,
      isRefetchError: C && u.dataUpdatedAt !== 0,
      isStale: nn(t, n),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const n = g(this, B), i = this.createResult(g(this, O), this.options);
    if (k(this, Ee, g(this, O).state), k(this, xe, this.options), g(this, Ee).data !== void 0 && k(this, He, g(this, O)), Ht(i, n))
      return;
    k(this, B, i);
    const r = {}, s = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: a } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !g(this, Re).size)
        return !0;
      const d = new Set(
        o ?? g(this, Re)
      );
      return this.options.throwOnError && d.add("error"), Object.keys(g(this, B)).some((m) => {
        const u = m;
        return g(this, B)[u] !== n[u] && d.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (r.listeners = !0), z(this, Rt, zn).call(this, { ...r, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && z(this, nt, Vt).call(this);
  }
}, q = new WeakMap(), O = new WeakMap(), je = new WeakMap(), B = new WeakMap(), Ee = new WeakMap(), xe = new WeakMap(), ce = new WeakMap(), Ye = new WeakMap(), _e = new WeakMap(), He = new WeakMap(), Me = new WeakMap(), Pe = new WeakMap(), me = new WeakMap(), Re = new WeakMap(), Ne = new WeakSet(), Qe = function(t) {
  z(this, rt, Kt).call(this);
  let n = g(this, O).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Ri)), n;
}, Je = new WeakSet(), Ft = function() {
  if (z(this, it, Wt).call(this), bn || g(this, B).isStale || !wn(this.options.staleTime))
    return;
  const n = Ni(
    g(this, B).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  k(this, Me, setTimeout(() => {
    g(this, B).isStale || this.updateResult();
  }, n));
}, et = new WeakSet(), Ut = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(g(this, O)) : this.options.refetchInterval) ?? !1;
}, tt = new WeakSet(), Bt = function(t) {
  z(this, st, $t).call(this), k(this, me, t), !(bn || this.options.enabled === !1 || !wn(g(this, me)) || g(this, me) === 0) && k(this, Pe, setInterval(() => {
    (this.options.refetchIntervalInBackground || ki.isFocused()) && z(this, Ne, Qe).call(this);
  }, g(this, me)));
}, nt = new WeakSet(), Vt = function() {
  z(this, Je, Ft).call(this), z(this, tt, Bt).call(this, z(this, et, Ut).call(this));
}, it = new WeakSet(), Wt = function() {
  g(this, Me) && (clearTimeout(g(this, Me)), k(this, Me, void 0));
}, st = new WeakSet(), $t = function() {
  g(this, Pe) && (clearInterval(g(this, Pe)), k(this, Pe, void 0));
}, rt = new WeakSet(), Kt = function() {
  const t = g(this, q).getQueryCache().build(g(this, q), this.options);
  if (t === g(this, O))
    return;
  const n = g(this, O);
  k(this, O, t), k(this, je, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, Rt = new WeakSet(), zn = function(t) {
  An.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(g(this, B));
    }), g(this, q).getQueryCache().notify({
      query: g(this, O),
      type: "observerResultsUpdated"
    });
  });
}, In);
function Hi(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Cn(e, t) {
  return Hi(e, t) || e.state.dataUpdatedAt > 0 && Qt(e, t, t.refetchOnMount);
}
function Qt(e, t, n) {
  if (t.enabled !== !1) {
    const i = typeof n == "function" ? n(e) : n;
    return i === "always" || i !== !1 && nn(e, t);
  }
  return !1;
}
function Sn(e, t, n, i) {
  return n.enabled !== !1 && (e !== t || i.enabled === !1) && (!n.suspense || e.state.status !== "error") && nn(e, n);
}
function nn(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function Fi(e, t) {
  return !Ht(e.getCurrentResult(), t);
}
var jn = c.createContext(!1), Ui = () => c.useContext(jn);
jn.Provider;
function Bi() {
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
var Vi = c.createContext(Bi()), Wi = () => c.useContext(Vi);
function $i(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Ki = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, Qi = (e) => {
  c.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Xi = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: i
}) => e.isError && !t.isReset() && !e.isFetching && $i(n, [e.error, i]), qi = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Gi = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Zi = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Yi(e, t, n) {
  const i = Ti(n), r = Ui(), s = Wi(), a = i.defaultQueryOptions(e);
  a._optimisticResults = r ? "isRestoring" : "optimistic", qi(a), Ki(a, s), Qi(s);
  const [o] = c.useState(
    () => new t(
      i,
      a
    )
  ), d = o.getOptimisticResult(a);
  if (c.useSyncExternalStore(
    c.useCallback(
      (m) => {
        const u = r ? () => {
        } : o.subscribe(An.batchCalls(m));
        return o.updateResult(), u;
      },
      [o, r]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), c.useEffect(() => {
    o.setOptions(a, { listeners: !1 });
  }, [a, o]), Gi(a, d))
    throw Zi(a, o, s);
  if (Xi({
    result: d,
    errorResetBoundary: s,
    throwOnError: a.throwOnError,
    query: o.getCurrentQuery()
  }))
    throw d.error;
  return a.notifyOnChangeProps ? d : o.trackResult(d);
}
function Ji(e, t) {
  return Yi(e, _i, t);
}
const En = ({
  left: e,
  center: t,
  right: n,
  top: i,
  ...r
}) => /* @__PURE__ */ H("div", { role: "toolbar", css: [{
  zIndex: "10",
  display: "flex",
  height: "3rem",
  width: "100%",
  alignItems: "center",
  overflow: "hidden",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, i ? {
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
}], ...r, children: [
  /* @__PURE__ */ w("div", { css: {
    display: "flex",
    gap: "0.5rem"
  }, children: e }),
  /* @__PURE__ */ w("div", { css: {
    maxWidth: "100%",
    flex: "1 1 0%"
  }, children: t }),
  /* @__PURE__ */ w("div", { css: {
    display: "flex",
    gap: "0.5rem"
  }, children: n })
] }), nr = ({
  bottomToolbarRenderer: e,
  children: t,
  topToolbarProps: n,
  topToolbarRenderer: i,
  bottomToolbarProps: r,
  ...s
}) => {
  const a = i ? i() : n ? /* @__PURE__ */ w(En, { ...n, top: !0 }) : null, o = e ? e() : r ? /* @__PURE__ */ w(En, { ...r }) : null;
  return /* @__PURE__ */ H("div", { css: [{
    display: "flex",
    height: "100%",
    userSelect: "text",
    flexDirection: "column"
  }], ...s, children: [
    a,
    /* @__PURE__ */ w("div", { css: [{
      flex: "1 1 0%",
      overflow: "auto"
    }], children: t }),
    o
  ] });
}, es = ({
  ...e
}) => /* @__PURE__ */ w("td", { css: [{
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  borderBottomWidth: "1px",
  borderRightWidth: "1px",
  padding: "0.375rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, e.column.getIsResizing() && {
  "--tw-border-opacity": "1",
  borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
}], children: tn(e.column.columnDef.cell, e.getContext()) }, e.id), ts = Ln.memo(es), ns = (e) => /* @__PURE__ */ w("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], children: e.getVisibleCells().map((t) => /* @__PURE__ */ w(ts, { ...t }, t.id)) }, e.id);
var xn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "caret-down", i = 320, r = 512, s = [], a = "f0d7", o = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(xn);
var _n = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", i = 384, r = 512, s = [8595], a = "f063", o = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(_n);
var Hn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", i = 384, r = 512, s = [8593], a = "f062", o = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(Hn);
var Fn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", i = 512, r = 512, s = ["columns"], a = "f0db", o = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(Fn);
var Un = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "eye-slash", i = 640, r = 512, s = [], a = "f070", o = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faEyeSlash = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(Un);
var Bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", i = 576, r = 512, s = ["sort-alpha-desc", "sort-alpha-down-alt"], a = "f881", o = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(Bn);
var Vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", i = 576, r = 512, s = ["sort-alpha-up"], a = "f15e", o = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(Vn);
const sn = (e) => !!e && e[0] === "o", Xt = Xe.unstable_batchedUpdates || ((e) => e()), Le = (e, t, n = 1e-4) => Math.abs(e - t) < n, qe = (e, t) => e === !0 || !!(e && e[t]), G = (e, t) => typeof e == "function" ? e(t) : e, is = "_szhsinMenu", ss = (e) => e[is], at = (e, t) => (t && Object.keys(t).forEach((n) => {
  const i = e[n], r = t[n];
  typeof r == "function" && i ? e[n] = (...s) => {
    r(...s), i(...s);
  } : e[n] = r;
}), e), rs = (e) => {
  if (typeof e != "string")
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  const t = e.trim().split(/\s+/, 4).map(parseFloat), n = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? n : t[1];
  return {
    top: n,
    right: i,
    bottom: isNaN(t[2]) ? n : t[2],
    left: isNaN(t[3]) ? i : t[3]
  };
}, xt = (e) => {
  for (; e; ) {
    if (e = e.parentNode, !e || e === document.body || !e.parentNode)
      return;
    const {
      overflow: t,
      overflowX: n,
      overflowY: i
    } = getComputedStyle(e);
    if (/auto|scroll|overlay|hidden/.test(t + i + n))
      return e;
  }
};
function rn(e, t) {
  return {
    "aria-disabled": e || void 0,
    tabIndex: t ? 0 : -1
  };
}
function Mn(e, t) {
  for (let n = 0; n < e.length; n++)
    if (e[n] === t)
      return n;
  return -1;
}
const Oe = ({
  block: e,
  element: t,
  modifiers: n,
  className: i
}) => c.useMemo(() => {
  const r = t ? `${e}__${t}` : e;
  let s = r;
  n && Object.keys(n).forEach((o) => {
    const d = n[o];
    d && (s += ` ${r}--${d === !0 ? o : `${o}-${d}`}`);
  });
  let a = typeof i == "function" ? i(n) : i;
  return typeof a == "string" && (a = a.trim(), a && (s += ` ${a}`)), s;
}, [e, t, n, i]), as = "szh-menu-container", ke = "szh-menu", os = "arrow", Wn = "item", cs = "divider", ls = "submenu", $n = /* @__PURE__ */ c.createContext(), an = /* @__PURE__ */ c.createContext({}), qt = /* @__PURE__ */ c.createContext({}), Kn = /* @__PURE__ */ c.createContext({}), us = /* @__PURE__ */ c.createContext({}), Nt = /* @__PURE__ */ c.createContext({}), V = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), A = /* @__PURE__ */ Object.freeze({
  RESET: 0,
  SET: 1,
  UNSET: 2,
  INCREASE: 3,
  DECREASE: 4,
  FIRST: 5,
  LAST: 6,
  SET_INDEX: 7
}), Ge = /* @__PURE__ */ Object.freeze({
  CLICK: "click",
  CANCEL: "cancel",
  BLUR: "blur",
  SCROLL: "scroll"
}), ze = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), ds = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), _t = "absolute", Qn = "presentation", on = "menuitem", Pn = {
  "aria-hidden": !0,
  role: on
}, hs = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: i,
  isOpen: r,
  theming: s,
  transition: a,
  onClose: o
}) => {
  const d = qe(a, "item"), m = ({
    key: p
  }) => {
    switch (p) {
      case V.ESC:
        G(o, {
          key: p,
          reason: Ge.CANCEL
        });
        break;
    }
  }, u = (p) => {
    r && !p.currentTarget.contains(p.relatedTarget) && G(o, {
      reason: Ge.BLUR
    });
  };
  return /* @__PURE__ */ L.jsx("div", {
    ...at({
      onKeyDown: m,
      onBlur: u
    }, n),
    className: Oe({
      block: as,
      modifiers: c.useMemo(() => ({
        theme: s,
        itemTransition: d
      }), [s, d]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: i
  });
}, fs = () => {
  let e, t = 0;
  return {
    toggle: (n) => {
      n ? t++ : t--, t = Math.max(t, 0);
    },
    on: (n, i, r) => {
      t ? e || (e = setTimeout(() => {
        e = 0, i();
      }, n)) : r == null || r();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, gs = (e, t) => {
  const [n, i] = c.useState(), s = c.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, a = c.useCallback((d, m) => {
    const {
      items: u
    } = s;
    if (!d)
      s.items = [];
    else if (m)
      u.push(d);
    else {
      const p = u.indexOf(d);
      p > -1 && (u.splice(p, 1), d.contains(document.activeElement) && (t.current.focus(), i()));
    }
    s.hoverIndex = -1, s.sorted = !1;
  }, [s, t]), o = c.useCallback((d, m, u) => {
    const {
      items: p,
      hoverIndex: S
    } = s, f = () => {
      if (s.sorted)
        return;
      const v = e.current.querySelectorAll(".szh-menu__item");
      p.sort((y, b) => Mn(v, y) - Mn(v, b)), s.sorted = !0;
    };
    let l = -1, h;
    switch (d) {
      case A.RESET:
        break;
      case A.SET:
        h = m;
        break;
      case A.UNSET:
        h = (v) => v === m ? void 0 : v;
        break;
      case A.FIRST:
        f(), l = 0, h = p[l];
        break;
      case A.LAST:
        f(), l = p.length - 1, h = p[l];
        break;
      case A.SET_INDEX:
        f(), l = u, h = p[l];
        break;
      case A.INCREASE:
        f(), l = S, l < 0 && (l = p.indexOf(m)), l++, l >= p.length && (l = 0), h = p[l];
        break;
      case A.DECREASE:
        f(), l = S, l < 0 && (l = p.indexOf(m)), l--, l < 0 && (l = p.length - 1), h = p[l];
        break;
    }
    h || (l = -1), i(h), s.hoverIndex = l;
  }, [e, s]);
  return {
    hoverItem: n,
    dispatch: o,
    updateItems: a
  };
}, ms = (e, t, n, i) => {
  const r = t.current.getBoundingClientRect(), s = e.current.getBoundingClientRect(), a = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), o = rs(i), d = (l) => l + s.left - a.left - o.left, m = (l) => l + s.left + r.width - a.right + o.right, u = (l) => l + s.top - a.top - o.top, p = (l) => l + s.top + r.height - a.bottom + o.bottom;
  return {
    menuRect: r,
    containerRect: s,
    getLeftOverflow: d,
    getRightOverflow: m,
    getTopOverflow: u,
    getBottomOverflow: p,
    confineHorizontally: (l) => {
      let h = d(l);
      if (h < 0)
        l -= h;
      else {
        const v = m(l);
        v > 0 && (l -= v, h = d(l), h < 0 && (l -= h));
      }
      return l;
    },
    confineVertically: (l) => {
      let h = u(l);
      if (h < 0)
        l -= h;
      else {
        const v = p(l);
        v > 0 && (l -= v, h = u(l), h < 0 && (l -= h));
      }
      return l;
    }
  };
}, vs = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: i,
  menuRect: r
}) => {
  let s = n.top - i.top - t + n.height / 2;
  const a = e.current.offsetHeight * 1.25;
  return s = Math.max(a, s), s = Math.min(s, r.height - a), s;
}, ps = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: i,
  placeLeftX: r,
  placeRightX: s,
  getLeftOverflow: a,
  getRightOverflow: o,
  confineHorizontally: d,
  confineVertically: m,
  arrowRef: u,
  arrow: p,
  direction: S,
  position: f
}) => {
  let l = S, h = i;
  f !== "initial" && (h = m(h), f === "anchor" && (h = Math.min(h, e.bottom - t.top), h = Math.max(h, e.top - t.top - n.height)));
  let v, y, b;
  return l === "left" ? (v = r, f !== "initial" && (y = a(v), y < 0 && (b = o(s), (b <= 0 || -y > b) && (v = s, l = "right")))) : (v = s, f !== "initial" && (b = o(v), b > 0 && (y = a(r), (y >= 0 || -y < b) && (v = r, l = "left")))), f === "auto" && (v = d(v)), {
    arrowY: p ? vs({
      menuY: h,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: v,
    y: h,
    computedDirection: l
  };
}, bs = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: i,
  menuRect: r
}) => {
  let s = n.left - i.left - t + n.width / 2;
  const a = e.current.offsetWidth * 1.25;
  return s = Math.max(a, s), s = Math.min(s, r.width - a), s;
}, ws = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: i,
  placeTopY: r,
  placeBottomY: s,
  getTopOverflow: a,
  getBottomOverflow: o,
  confineHorizontally: d,
  confineVertically: m,
  arrowRef: u,
  arrow: p,
  direction: S,
  position: f
}) => {
  let l = S === "top" ? "top" : "bottom", h = i;
  f !== "initial" && (h = d(h), f === "anchor" && (h = Math.min(h, e.right - t.left), h = Math.max(h, e.left - t.left - n.width)));
  let v, y, b;
  return l === "top" ? (v = r, f !== "initial" && (y = a(v), y < 0 && (b = o(s), (b <= 0 || -y > b) && (v = s, l = "bottom")))) : (v = s, f !== "initial" && (b = o(v), b > 0 && (y = a(r), (y >= 0 || -y < b) && (v = r, l = "top")))), f === "auto" && (v = m(v)), {
    arrowX: p ? bs({
      menuX: h,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: h,
    y: v,
    computedDirection: l
  };
}, ys = ({
  arrow: e,
  align: t,
  direction: n,
  gap: i,
  shift: r,
  position: s,
  anchorRect: a,
  arrowRef: o,
  positionHelpers: d
}) => {
  const {
    menuRect: m,
    containerRect: u
  } = d, p = n === "left" || n === "right";
  let S = p ? i : r, f = p ? r : i;
  if (e) {
    const N = o.current;
    p ? S += N.offsetWidth : f += N.offsetHeight;
  }
  const l = a.left - u.left - m.width - S, h = a.right - u.left + S, v = a.top - u.top - m.height - f, y = a.bottom - u.top + f;
  let b, C;
  t === "end" ? (b = a.right - u.left - m.width, C = a.bottom - u.top - m.height) : t === "center" ? (b = a.left - u.left - (m.width - a.width) / 2, C = a.top - u.top - (m.height - a.height) / 2) : (b = a.left - u.left, C = a.top - u.top), b += S, C += f;
  const M = {
    ...d,
    anchorRect: a,
    placeLeftX: l,
    placeRightX: h,
    placeLeftorRightY: C,
    placeTopY: v,
    placeBottomY: y,
    placeToporBottomX: b,
    arrowRef: o,
    arrow: e,
    direction: n,
    position: s
  };
  switch (n) {
    case "left":
    case "right":
      return ps(M);
    case "top":
    case "bottom":
    default:
      return ws(M);
  }
}, bt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect;
function Rn(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const kt = (e, t) => c.useMemo(() => e ? t ? (n) => {
  Rn(e, n), Rn(t, n);
} : e : t, [e, t]), Nn = -9999, Xn = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: n,
  arrow: i,
  arrowProps: r = {},
  anchorPoint: s,
  anchorRef: a,
  containerRef: o,
  containerProps: d,
  focusProps: m,
  externalRef: u,
  parentScrollingRef: p,
  align: S = "start",
  direction: f = "bottom",
  position: l = "auto",
  overflow: h = "visible",
  setDownOverflow: v,
  repositionFlag: y,
  captureFocus: b = !0,
  state: C,
  endTransition: M,
  isDisabled: N,
  menuItemFocus: j,
  gap: R = 0,
  shift: W = 0,
  children: ue,
  onClose: K,
  ...D
}) => {
  const [F, pe] = c.useState({
    x: Nn,
    y: Nn
  }), [Fe, se] = c.useState({}), [x, be] = c.useState(), [Q, ot] = c.useState(f), [te] = c.useState(fs), [Ue, Be] = c.useReducer((E) => E + 1, 1), {
    transition: ct,
    boundingBoxRef: Ve,
    boundingBoxPadding: lt,
    rootMenuRef: ut,
    rootAnchorRef: we,
    scrollNodesRef: Ot,
    reposition: dt,
    viewScroll: We,
    submenuCloseDelay: Tt
  } = c.useContext(Nt), {
    submenuCtx: ht,
    reposSubmenu: _ = y
  } = c.useContext(qt), X = c.useRef(null), ft = c.useRef(), cn = c.useRef(), ln = c.useRef(!1), gt = c.useRef({
    width: 0,
    height: 0
  }), un = c.useRef(() => {
  }), {
    hoverItem: Dt,
    dispatch: Y,
    updateItems: mt
  } = gs(X, ft), J = sn(C), dn = qe(ct, "open"), hn = qe(ct, "close"), ne = Ot.current, gi = (E) => {
    switch (E.key) {
      case V.HOME:
        Y(A.FIRST);
        break;
      case V.END:
        Y(A.LAST);
        break;
      case V.UP:
        Y(A.DECREASE, Dt);
        break;
      case V.DOWN:
        Y(A.INCREASE, Dt);
        break;
      case V.SPACE:
        E.target && E.target.className.indexOf(ke) !== -1 && E.preventDefault();
        return;
      default:
        return;
    }
    E.preventDefault(), E.stopPropagation();
  }, mi = () => {
    C === "closing" && be(), G(M);
  }, vi = (E) => {
    E.stopPropagation(), te.on(Tt, () => {
      Y(A.RESET), ft.current.focus();
    });
  }, pi = (E) => {
    E.target === E.currentTarget && te.off();
  }, ye = c.useCallback((E) => {
    var $;
    const re = a ? ($ = a.current) == null ? void 0 : $.getBoundingClientRect() : s ? {
      left: s.x,
      right: s.x,
      top: s.y,
      bottom: s.y,
      width: 0,
      height: 0
    } : null;
    if (!re)
      return;
    ne.menu || (ne.menu = (Ve ? Ve.current : xt(ut.current)) || window);
    const ee = ms(o, X, ne.menu, lt);
    let {
      arrowX: U,
      arrowY: Te,
      x: De,
      y: de,
      computedDirection: Lt
    } = ys({
      arrow: i,
      align: S,
      direction: f,
      gap: R,
      shift: W,
      position: l,
      anchorRect: re,
      arrowRef: cn,
      positionHelpers: ee
    });
    const {
      menuRect: vn
    } = ee;
    let Ie = vn.height;
    if (!E && h !== "visible") {
      const {
        getTopOverflow: Ei,
        getBottomOverflow: Mi
      } = ee;
      let Ae, zt;
      const pn = gt.current.height, vt = Mi(de);
      if (vt > 0 || Le(vt, 0) && Le(Ie, pn))
        Ae = Ie - vt, zt = vt;
      else {
        const $e = Ei(de);
        ($e < 0 || Le($e, 0) && Le(Ie, pn)) && (Ae = Ie + $e, zt = 0 - $e, Ae >= 0 && (de -= $e));
      }
      Ae >= 0 ? (Ie = Ae, be({
        height: Ae,
        overflowAmt: zt
      })) : be();
    }
    i && se({
      x: U,
      y: Te
    }), pe({
      x: De,
      y: de
    }), ot(Lt), gt.current = {
      width: vn.width,
      height: Ie
    };
  }, [i, S, lt, f, R, W, l, h, s, a, o, Ve, ut, ne]);
  bt(() => {
    J && (ye(), ln.current && Be()), ln.current = J, un.current = ye;
  }, [J, ye, _]), bt(() => {
    x && !v && (X.current.scrollTop = 0);
  }, [x, v]), bt(() => mt, [mt]), c.useEffect(() => {
    let {
      menu: E
    } = ne;
    if (!J || !E)
      return;
    if (E = E.addEventListener ? E : window, !ne.anchors) {
      ne.anchors = [];
      let U = xt(we && we.current);
      for (; U && U !== E; )
        ne.anchors.push(U), U = xt(U);
    }
    let $ = We;
    if (ne.anchors.length && $ === "initial" && ($ = "auto"), $ === "initial")
      return;
    const re = () => {
      $ === "auto" ? Xt(() => ye(!0)) : G(K, {
        reason: Ge.SCROLL
      });
    }, ee = ne.anchors.concat(We !== "initial" ? E : []);
    return ee.forEach((U) => U.addEventListener("scroll", re)), () => ee.forEach((U) => U.removeEventListener("scroll", re));
  }, [we, ne, J, K, We, ye]);
  const fn = !!x && x.overflowAmt > 0;
  c.useEffect(() => {
    if (fn || !J || !p)
      return;
    const E = () => Xt(ye), $ = p.current;
    return $.addEventListener("scroll", E), () => $.removeEventListener("scroll", E);
  }, [J, fn, p, ye]), c.useEffect(() => {
    if (typeof ResizeObserver != "function" || dt === "initial")
      return;
    const E = new ResizeObserver(([re]) => {
      const {
        borderBoxSize: ee,
        target: U
      } = re;
      let Te, De;
      if (ee) {
        const {
          inlineSize: de,
          blockSize: Lt
        } = ee[0] || ee;
        Te = de, De = Lt;
      } else {
        const de = U.getBoundingClientRect();
        Te = de.width, De = de.height;
      }
      Te === 0 || De === 0 || Le(Te, gt.current.width, 1) && Le(De, gt.current.height, 1) || Xe.flushSync(() => {
        un.current(), Be();
      });
    }), $ = X.current;
    return E.observe($, {
      box: "border-box"
    }), () => E.unobserve($);
  }, [dt]), c.useEffect(() => {
    if (!J) {
      Y(A.RESET), hn || be();
      return;
    }
    const {
      position: E,
      alwaysUpdate: $
    } = j || {}, re = () => {
      E === ze.FIRST ? Y(A.FIRST) : E === ze.LAST ? Y(A.LAST) : E >= -1 && Y(A.SET_INDEX, void 0, E);
    };
    if ($)
      re();
    else if (b) {
      const ee = setTimeout(() => {
        const U = X.current;
        U && !U.contains(document.activeElement) && (ft.current.focus(), re());
      }, dn ? 170 : 100);
      return () => clearTimeout(ee);
    }
  }, [J, dn, hn, b, j, Y]);
  const bi = c.useMemo(() => ({
    isParentOpen: J,
    submenuCtx: te,
    dispatch: Y,
    updateItems: mt
  }), [J, te, Y, mt]);
  let It, At;
  x && (v ? At = x.overflowAmt : It = x.height);
  const wi = c.useMemo(() => ({
    reposSubmenu: Ue,
    submenuCtx: te,
    overflow: h,
    overflowAmt: At,
    parentMenuRef: X,
    parentDir: Q
  }), [Ue, te, h, At, Q]), yi = It >= 0 ? {
    maxHeight: It,
    overflow: h
  } : void 0, gn = c.useMemo(() => ({
    state: C,
    dir: Q
  }), [C, Q]), Ci = c.useMemo(() => ({
    dir: Q
  }), [Q]), Si = Oe({
    block: ke,
    element: os,
    modifiers: Ci,
    className: r.className
  }), mn = /* @__PURE__ */ L.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...rn(N),
    ...at({
      onPointerEnter: ht == null ? void 0 : ht.off,
      onPointerMove: vi,
      onPointerLeave: pi,
      onKeyDown: gi,
      onAnimationEnd: mi
    }, D),
    ref: kt(u, X),
    className: Oe({
      block: ke,
      modifiers: gn,
      className: t
    }),
    style: {
      ...n,
      ...yi,
      margin: 0,
      display: C === "closed" ? "none" : void 0,
      position: _t,
      left: F.x,
      top: F.y
    },
    children: [/* @__PURE__ */ L.jsx("li", {
      tabIndex: -1,
      style: {
        position: _t,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: ft,
      ...Pn,
      ...m
    }), i && /* @__PURE__ */ L.jsx("li", {
      ...Pn,
      ...r,
      className: Si,
      style: {
        display: "block",
        position: _t,
        left: Fe.x,
        top: Fe.y,
        ...r.style
      },
      ref: cn
    }), /* @__PURE__ */ L.jsx(qt.Provider, {
      value: wi,
      children: /* @__PURE__ */ L.jsx(an.Provider, {
        value: bi,
        children: /* @__PURE__ */ L.jsx($n.Provider, {
          value: Dt,
          children: G(ue, gn)
        })
      })
    })]
  });
  return d ? /* @__PURE__ */ L.jsx(hs, {
    ...d,
    isOpen: J,
    children: mn
  }) : mn;
}, Cs = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: i,
  initialMounted: r,
  unmountOnClose: s,
  transition: a,
  transitionTimeout: o,
  boundingBoxRef: d,
  boundingBoxPadding: m,
  reposition: u = "auto",
  submenuOpenDelay: p = 300,
  submenuCloseDelay: S = 150,
  viewScroll: f = "initial",
  portal: l,
  theming: h,
  onItemClick: v,
  ...y
}, b) {
  const C = c.useRef(null), M = c.useRef({}), {
    anchorRef: N,
    state: j,
    onClose: R
  } = y, W = c.useMemo(() => ({
    initialMounted: r,
    unmountOnClose: s,
    transition: a,
    transitionTimeout: o,
    boundingBoxRef: d,
    boundingBoxPadding: m,
    rootMenuRef: C,
    rootAnchorRef: N,
    scrollNodesRef: M,
    reposition: u,
    viewScroll: f,
    submenuOpenDelay: p,
    submenuCloseDelay: S
  }), [r, s, a, o, N, d, m, u, f, p, S]), ue = c.useMemo(() => ({
    handleClick(D, F) {
      D.stopPropagation || G(v, D);
      let pe = D.keepOpen;
      pe === void 0 && (pe = F && D.key === V.SPACE), pe || G(R, {
        value: D.value,
        key: D.key,
        reason: Ge.CLICK
      });
    },
    handleClose(D) {
      G(R, {
        key: D,
        reason: Ge.CLICK
      });
    }
  }), [v, R]);
  if (!j)
    return null;
  const K = /* @__PURE__ */ L.jsx(Nt.Provider, {
    value: W,
    children: /* @__PURE__ */ L.jsx(Kn.Provider, {
      value: ue,
      children: /* @__PURE__ */ L.jsx(Xn, {
        ...y,
        ariaLabel: t || "Menu",
        externalRef: b,
        containerRef: C,
        containerProps: {
          className: n,
          containerRef: C,
          containerProps: i,
          theming: h,
          transition: a,
          onClose: R
        }
      })
    })
  });
  return l === !0 && typeof document < "u" ? /* @__PURE__ */ Xe.createPortal(K, document.body) : l ? l.target ? /* @__PURE__ */ Xe.createPortal(K, l.target) : l.stablePosition ? null : K : K;
}), Gt = 0, Zt = 1, Ct = 2, St = 3, Et = 4, Ss = 5, qn = 6, Es = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Gn = (e) => ({
  _s: e,
  status: Es[e],
  isEnter: e < St,
  isMounted: e !== qn,
  isResolved: e === Ct || e > Et
}), Yt = (e) => e ? qn : Ss, Ms = (e, t) => {
  switch (e) {
    case Zt:
    case Gt:
      return Ct;
    case Et:
    case St:
      return Yt(t);
  }
}, Ps = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], Rs = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), kn = (e, t, n, i, r) => {
  clearTimeout(i.current);
  const s = Gn(e);
  t(s), n.current = s, r && r({
    current: s
  });
}, Ns = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: i,
  timeout: r,
  initialEntered: s,
  mountOnEnter: a,
  unmountOnExit: o,
  onStateChange: d
} = {}) => {
  const [m, u] = c.useState(() => Gn(s ? Ct : Yt(a))), p = c.useRef(m), S = c.useRef(), [f, l] = Ps(r), h = c.useCallback(() => {
    const y = Ms(p.current._s, o);
    y && kn(y, u, p, S, d);
  }, [d, o]), v = c.useCallback((y) => {
    const b = (M) => {
      switch (kn(M, u, p, S, d), M) {
        case Zt:
          f >= 0 && (S.current = setTimeout(h, f));
          break;
        case Et:
          l >= 0 && (S.current = setTimeout(h, l));
          break;
        case Gt:
        case St:
          S.current = Rs(b, M);
          break;
      }
    }, C = p.current.isEnter;
    typeof y != "boolean" && (y = !C), y ? !C && b(e ? n ? Gt : Zt : Ct) : C && b(t ? i ? St : Et : Yt(o));
  }, [h, d, e, t, n, i, f, l, o]);
  return c.useEffect(() => () => clearTimeout(S.current), []), [m, v, h];
}, ks = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: i,
  transitionTimeout: r = 500
} = {}) => {
  const [{
    status: s
  }, a, o] = Ns({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: r,
    enter: qe(i, "open"),
    exit: qe(i, "close")
  });
  return [{
    state: ds[s],
    endTransition: o
  }, a];
}, Zn = (e) => {
  const [t, n] = ks(e), [i, r] = c.useState(), s = (a, o) => {
    r({
      position: a,
      alwaysUpdate: o
    }), n(!0);
  };
  return [{
    menuItemFocus: i,
    ...t
  }, n, s];
}, Os = (e, t) => {
  const [n] = c.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (i) => n.v ? n.v = !1 : t(!0, i)
  };
}, Yn = (e, t) => {
  const n = c.useRef(t);
  c.useEffect(() => {
    n.current !== t && G(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, Ts = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: i,
  menuButton: r,
  instanceRef: s,
  onMenuChange: a,
  ...o
}, d) {
  const [m, u, p] = Zn(o), {
    state: S
  } = m, f = sn(S), l = c.useRef(null), h = Os(S, (N, j) => p(j.detail ? void 0 : ze.FIRST)), v = c.useCallback((N) => {
    u(!1), N.key && l.current.focus();
  }, [u]), y = (N) => {
    switch (N.key) {
      case V.UP:
        p(ze.LAST);
        break;
      case V.DOWN:
        p(ze.FIRST);
        break;
      default:
        return;
    }
    N.preventDefault();
  }, b = G(r, {
    open: f
  });
  if (!b || !b.type)
    throw new Error("Menu requires a menuButton prop.");
  const C = {
    ref: kt(b.ref, l),
    ...at({
      onKeyDown: y,
      ...h
    }, b.props)
  };
  ss(b.type) === "MenuButton" && (C.isOpen = f);
  const M = /* @__PURE__ */ c.cloneElement(b, C);
  return Yn(a, f), c.useImperativeHandle(s, () => ({
    openMenu: p,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ L.jsxs(c.Fragment, {
    children: [M, /* @__PURE__ */ L.jsx(Cs, {
      ...o,
      ...m,
      "aria-label": t || (typeof b.props.children == "string" ? b.props.children : "Menu"),
      anchorRef: l,
      ref: d,
      onClose: v
    })]
  });
}), Jn = (e, t) => {
  const n = /* @__PURE__ */ c.memo(t), i = /* @__PURE__ */ c.forwardRef((r, s) => {
    const a = c.useRef(null);
    return /* @__PURE__ */ L.jsx(n, {
      ...r,
      itemRef: a,
      externalRef: s,
      isHovering: c.useContext($n) === a.current
    });
  });
  return i.displayName = `WithHovering(${e})`, i;
}, ei = (e, t, n) => {
  bt(() => {
    if (e)
      return;
    const i = t.current;
    return n(i, !0), () => {
      n(i);
    };
  }, [e, t, n]);
}, Ds = /* @__PURE__ */ Jn("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: i,
  direction: r,
  label: s,
  openTrigger: a,
  onMenuChange: o,
  isHovering: d,
  instanceRef: m,
  itemRef: u,
  captureFocus: p,
  repositionFlag: S,
  itemProps: f = {},
  ...l
}) {
  const h = c.useContext(Nt), {
    rootMenuRef: v,
    submenuOpenDelay: y,
    submenuCloseDelay: b
  } = h, {
    parentMenuRef: C,
    parentDir: M,
    overflow: N
  } = c.useContext(qt), {
    isParentOpen: j,
    submenuCtx: R,
    dispatch: W,
    updateItems: ue
  } = c.useContext(an), K = N !== "visible", [D, F, pe] = Zn(h), {
    state: Fe
  } = D, se = !!i, x = sn(Fe), be = c.useRef(null), [Q] = c.useState({
    v: 0
  }), ot = () => {
    R.off(), Q.v && (clearTimeout(Q.v), Q.v = 0);
  }, te = (..._) => {
    ot(), Ue(), !se && pe(..._);
  }, Ue = () => !d && !se && W(A.SET, u.current), Be = (_) => {
    Ue(), a || (Q.v = setTimeout(() => Xt(te), Math.max(_, 0)));
  }, ct = (_) => {
    se || (_.stopPropagation(), !(Q.v || x) && R.on(b, () => Be(y - b), () => Be(y)));
  }, Ve = () => {
    ot(), x || W(A.UNSET, u.current);
  }, lt = (_) => {
    if (d)
      switch (_.key) {
        case V.ENTER:
          _.preventDefault();
        case V.SPACE:
        case V.RIGHT:
          a !== "none" && te(ze.FIRST);
      }
  }, ut = (_) => {
    let X = !1;
    switch (_.key) {
      case V.LEFT:
        x && (u.current.focus(), F(!1), X = !0);
        break;
      case V.RIGHT:
        x || (X = !0);
        break;
    }
    X && (_.preventDefault(), _.stopPropagation());
  };
  ei(se, u, ue), Yn(o, x), c.useEffect(() => R.toggle(x), [R, x]), c.useEffect(() => () => clearTimeout(Q.v), [Q]), c.useEffect(() => {
    d && j ? u.current.focus() : F(!1);
  }, [d, j, F, u]), c.useImperativeHandle(m, () => ({
    openMenu: (..._) => {
      j && te(..._);
    },
    closeMenu: () => {
      x && (u.current.focus(), F(!1));
    }
  }));
  const we = c.useMemo(() => ({
    open: x,
    hover: d,
    disabled: se,
    submenu: !0
  }), [x, d, se]), {
    ref: Ot,
    className: dt,
    ...We
  } = f, Tt = at({
    onPointerEnter: R.off,
    onPointerMove: ct,
    onPointerLeave: Ve,
    onKeyDown: lt,
    onClick: () => a !== "none" && te()
  }, We), ht = () => {
    const _ = /* @__PURE__ */ L.jsx(Xn, {
      ...l,
      ...D,
      ariaLabel: t || (typeof s == "string" ? s : "Submenu"),
      anchorRef: u,
      containerRef: K ? v : be,
      direction: r || (M === "right" || M === "left" ? M : "right"),
      parentScrollingRef: K && C,
      isDisabled: se
    }), X = v.current;
    return K && X ? /* @__PURE__ */ Xe.createPortal(_, X) : _;
  };
  return /* @__PURE__ */ L.jsxs("li", {
    className: Oe({
      block: ke,
      element: ls,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Qn,
    ref: be,
    onKeyDown: ut,
    children: [/* @__PURE__ */ L.jsx("div", {
      role: on,
      "aria-haspopup": !0,
      "aria-expanded": x,
      ...rn(se, d),
      ...Tt,
      ref: kt(Ot, u),
      className: Oe({
        block: ke,
        element: Wn,
        modifiers: we,
        className: dt
      }),
      children: c.useMemo(() => G(s, we), [s, we])
    }), Fe && ht()]
  });
}), Is = (e, t, n, i) => {
  const {
    submenuCloseDelay: r
  } = c.useContext(Nt), {
    isParentOpen: s,
    submenuCtx: a,
    dispatch: o,
    updateItems: d
  } = c.useContext(an), m = () => {
    !n && !i && o(A.SET, e.current);
  }, u = () => {
    !i && o(A.UNSET, e.current);
  }, p = (l) => {
    n && !l.currentTarget.contains(l.relatedTarget) && u();
  }, S = (l) => {
    i || (l.stopPropagation(), a.on(r, m, m));
  }, f = (l, h) => {
    a.off(), !h && u();
  };
  return ei(i, e, d), c.useEffect(() => {
    n && s && t.current && t.current.focus();
  }, [t, n, s]), {
    setHover: m,
    onBlur: p,
    onPointerMove: S,
    onPointerLeave: f
  };
}, pt = /* @__PURE__ */ Jn("MenuItem", function({
  className: t,
  value: n,
  href: i,
  type: r,
  checked: s,
  disabled: a,
  children: o,
  onClick: d,
  isHovering: m,
  itemRef: u,
  externalRef: p,
  ...S
}) {
  const f = !!a, {
    setHover: l,
    ...h
  } = Is(u, u, m, f), v = c.useContext(Kn), y = c.useContext(us), b = r === "radio", C = r === "checkbox", M = !!i && !f && !b && !C, N = b ? y.value === n : C ? !!s : !1, j = (D) => {
    if (f) {
      D.stopPropagation(), D.preventDefault();
      return;
    }
    const F = {
      value: n,
      syntheticEvent: D
    };
    D.key !== void 0 && (F.key = D.key), C && (F.checked = !N), b && (F.name = y.name), G(d, F), b && G(y.onRadioChange, F), v.handleClick(F, C || b);
  }, R = (D) => {
    if (m)
      switch (D.key) {
        case V.ENTER:
          D.preventDefault();
        case V.SPACE:
          M ? u.current.click() : j(D);
      }
  }, W = c.useMemo(() => ({
    type: r,
    disabled: f,
    hover: m,
    checked: N,
    anchor: M
  }), [r, f, m, N, M]), ue = at({
    ...h,
    onPointerDown: l,
    onKeyDown: R,
    onClick: j
  }, S), K = {
    role: b ? "menuitemradio" : C ? "menuitemcheckbox" : on,
    "aria-checked": b || C ? N : void 0,
    ...rn(f, m),
    ...ue,
    ref: kt(p, u),
    className: Oe({
      block: ke,
      element: Wn,
      modifiers: W,
      className: t
    }),
    children: c.useMemo(() => G(o, W), [o, W])
  };
  return M ? /* @__PURE__ */ L.jsx("li", {
    role: Qn,
    children: /* @__PURE__ */ L.jsx("a", {
      href: i,
      ...K
    })
  }) : /* @__PURE__ */ L.jsx("li", {
    ...K
  });
}), As = /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(function({
  className: t,
  ...n
}, i) {
  return /* @__PURE__ */ L.jsx("li", {
    role: "separator",
    ...n,
    ref: i,
    className: Oe({
      block: ke,
      element: cs,
      className: t
    })
  });
}));
const Ls = "szh-menu", zs = "item", js = (e) => (t) => (n) => {
  let i = `.${e}`;
  return t && (i += `__${t}`), n && (i += `--${n}`), i;
}, ti = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((i) => {
    const r = i.split("-").reduce((s, a) => `${s}${a[0].toUpperCase()}${a.slice(1)}`);
    Object.defineProperty(n, r, {
      value: e(i),
      enumerable: !0
    });
  }), n;
}, xs = ["dir-left", "dir-right", "dir-top", "dir-bottom"], ni = /* @__PURE__ */ js(Ls);
[...xs];
const On = /* @__PURE__ */ ti(/* @__PURE__ */ ni(zs), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), _s = zi(Ts)`
  ${On.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${On.typeCheckbox} {
      ${{
  paddingLeft: "2rem"
}}
    }
    .svg-inline--fa {
      ${{
  "--tw-text-opacity": "1",
  color: "rgb(75 85 99 / var(--tw-text-opacity))"
}}
    }
  }
`, Hs = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: i
  } = n, r = i.getVisibleLeafColumns().length;
  return /* @__PURE__ */ H(_s, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    /* @__PURE__ */ H(pt, { onClick: () => t.column.toggleSorting(!1), children: [
      /* @__PURE__ */ w(Z, { icon: Vn.faArrowUpAZ }),
      " Сортировать по возрастанию"
    ] }),
    /* @__PURE__ */ H(pt, { onClick: () => t.column.toggleSorting(!0), children: [
      /* @__PURE__ */ w(Z, { icon: Bn.faArrowDownZA }),
      "Сортировать по убыванию"
    ] }),
    /* @__PURE__ */ H(pt, { disabled: r === 1, onClick: () => t.column.toggleVisibility(), children: [
      /* @__PURE__ */ w(Z, { icon: Un.faEyeSlash }),
      "Скрыть колонку"
    ] }),
    /* @__PURE__ */ w(As, {}),
    /* @__PURE__ */ w(Ds, { label: /* @__PURE__ */ H(Di, { children: [
      /* @__PURE__ */ w(Z, { icon: Fn.faTableColumns }),
      "Колонки"
    ] }), children: i.getAllLeafColumns().map((s) => /* @__PURE__ */ w(pt, { type: "checkbox", checked: s.getIsVisible(), disabled: r === 1 && s.getIsVisible(), onClick: (a) => {
      a.keepOpen = !0, s.toggleVisibility();
    }, children: tn(s.columnDef.header, n) }, s.id)) })
  ] });
}, Fs = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: i,
    getContext: r,
    getResizeHandler: s
  } = e;
  return /* @__PURE__ */ H("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, yt`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: t, children: [
    /* @__PURE__ */ H("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, yt`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ H("div", { onClick: () => {
        if (n.getCanSort())
          return n.toggleSorting();
      }, css: [n.getCanSort() ? {
        cursor: "pointer"
      } : null, {
        position: "relative",
        flex: "1 1 0%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0.5rem"
      }], children: [
        i ? null : tn(n.columnDef.header, r()),
        " ",
        n.getIsSorted() === "asc" && /* @__PURE__ */ w(Z, { icon: Hn.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ w(Z, { icon: _n.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ w(Hs, { header: e, children: ({
        open: a
      }) => /* @__PURE__ */ w("div", { className: "menu", css: [{
        position: "relative",
        right: "0px",
        padding: "0.5rem",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
        }
      }, {
        cursor: "pointer"
      }, a ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ w(Z, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: xn.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ w("div", { css: [{
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
    }, n.getIsResizing() && {
      backgroundColor: "rgb(141 148 205 / 0.3)"
    }], onMouseDown: s(), onTouchStart: s(), className: "resizer" })
  ] });
}, Us = ({
  ...e
}) => /* @__PURE__ */ w("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ w("tr", { children: t.headers.map((n) => /* @__PURE__ */ w(Fs, { ...n }, n.id)) }, t.id)) });
var ii = {}, si = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-info", i = 512, r = 512, s = ["info-circle"], a = "f05a", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faCircleInfo = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(si);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = si;
  e.definition = {
    prefix: t.prefix,
    iconName: t.iconName,
    icon: [
      t.width,
      t.height,
      t.aliases,
      t.unicode,
      t.svgPathData
    ]
  }, e.faInfoCircle = e.definition, e.prefix = t.prefix, e.iconName = t.iconName, e.width = t.width, e.height = t.height, e.ligatures = t.aliases, e.unicode = t.unicode, e.svgPathData = t.svgPathData, e.aliases = t.aliases;
})(ii);
var ri = {}, ai = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-xmark", i = 512, r = 512, s = [61532, "times-circle", "xmark-circle"], a = "f057", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faCircleXmark = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(ai);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ai;
  e.definition = {
    prefix: t.prefix,
    iconName: t.iconName,
    icon: [
      t.width,
      t.height,
      t.aliases,
      t.unicode,
      t.svgPathData
    ]
  }, e.faTimesCircle = e.definition, e.prefix = t.prefix, e.iconName = t.iconName, e.width = t.width, e.height = t.height, e.ligatures = t.aliases, e.unicode = t.unicode, e.svgPathData = t.svgPathData, e.aliases = t.aliases;
})(ri);
var oi = {}, ci = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-check", i = 512, r = 512, s = [61533, "check-circle"], a = "f058", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faCircleCheck = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(ci);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = ci;
  e.definition = {
    prefix: t.prefix,
    iconName: t.iconName,
    icon: [
      t.width,
      t.height,
      t.aliases,
      t.unicode,
      t.svgPathData
    ]
  }, e.faCheckCircle = e.definition, e.prefix = t.prefix, e.iconName = t.iconName, e.width = t.width, e.height = t.height, e.ligatures = t.aliases, e.unicode = t.unicode, e.svgPathData = t.svgPathData, e.aliases = t.aliases;
})(oi);
const he = Symbol.for("@ts-pattern/matcher"), Bs = Symbol.for("@ts-pattern/isVariadic"), Mt = "@ts-pattern/anonymous-select-key", Jt = (e) => !!(e && typeof e == "object"), wt = (e) => e && !!e[he], le = (e, t, n) => {
  if (wt(e)) {
    const i = e[he](), { matched: r, selections: s } = i.match(t);
    return r && s && Object.keys(s).forEach((a) => n(a, s[a])), r;
  }
  if (Jt(e)) {
    if (!Jt(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let i = [], r = [], s = [];
      for (const a of e.keys()) {
        const o = e[a];
        wt(o) && o[Bs] ? s.push(o) : s.length ? r.push(o) : i.push(o);
      }
      if (s.length) {
        if (s.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < i.length + r.length)
          return !1;
        const a = t.slice(0, i.length), o = r.length === 0 ? [] : t.slice(-r.length), d = t.slice(i.length, r.length === 0 ? 1 / 0 : -r.length);
        return i.every((m, u) => le(m, a[u], n)) && r.every((m, u) => le(m, o[u], n)) && (s.length === 0 || le(s[0], d, n));
      }
      return e.length === t.length && e.every((a, o) => le(a, t[o], n));
    }
    return Object.keys(e).every((i) => {
      const r = e[i];
      return (i in t || wt(s = r) && s[he]().matcherType === "optional") && le(r, t[i], n);
      var s;
    });
  }
  return Object.is(t, e);
}, ve = (e) => {
  var t, n, i;
  return Jt(e) ? wt(e) ? (t = (n = (i = e[he]()).getSelectionKeys) == null ? void 0 : n.call(i)) != null ? t : [] : Array.isArray(e) ? Ze(e, ve) : Ze(Object.values(e), ve) : [];
}, Ze = (e, t) => e.reduce((n, i) => n.concat(t(i)), []);
function ie(e) {
  return Object.assign(e, { optional: () => Vs(e), and: (t) => I(e, t), or: (t) => Ws(e, t), select: (t) => t === void 0 ? Tn(e) : Tn(t, e) });
}
function Vs(e) {
  return ie({ [he]: () => ({ match: (t) => {
    let n = {};
    const i = (r, s) => {
      n[r] = s;
    };
    return t === void 0 ? (ve(e).forEach((r) => i(r, void 0)), { matched: !0, selections: n }) : { matched: le(e, t, i), selections: n };
  }, getSelectionKeys: () => ve(e), matcherType: "optional" }) });
}
function I(...e) {
  return ie({ [he]: () => ({ match: (t) => {
    let n = {};
    const i = (r, s) => {
      n[r] = s;
    };
    return { matched: e.every((r) => le(r, t, i)), selections: n };
  }, getSelectionKeys: () => Ze(e, ve), matcherType: "and" }) });
}
function Ws(...e) {
  return ie({ [he]: () => ({ match: (t) => {
    let n = {};
    const i = (r, s) => {
      n[r] = s;
    };
    return Ze(e, ve).forEach((r) => i(r, void 0)), { matched: e.some((r) => le(r, t, i)), selections: n };
  }, getSelectionKeys: () => Ze(e, ve), matcherType: "or" }) });
}
function P(e) {
  return { [he]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function Tn(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return ie({ [he]: () => ({ match: (i) => {
    let r = { [t ?? Mt]: i };
    return { matched: n === void 0 || le(n, i, (s, a) => {
      r[s] = a;
    }), selections: r };
  }, getSelectionKeys: () => [t ?? Mt].concat(n === void 0 ? [] : ve(n)) }) });
}
function ae(e) {
  return typeof e == "number";
}
function Ce(e) {
  return typeof e == "string";
}
function fe(e) {
  return typeof e == "bigint";
}
ie(P(function(e) {
  return !0;
}));
const Se = (e) => Object.assign(ie(e), { startsWith: (t) => {
  return Se(I(e, (n = t, P((i) => Ce(i) && i.startsWith(n)))));
  var n;
}, endsWith: (t) => {
  return Se(I(e, (n = t, P((i) => Ce(i) && i.endsWith(n)))));
  var n;
}, minLength: (t) => Se(I(e, ((n) => P((i) => Ce(i) && i.length >= n))(t))), maxLength: (t) => Se(I(e, ((n) => P((i) => Ce(i) && i.length <= n))(t))), includes: (t) => {
  return Se(I(e, (n = t, P((i) => Ce(i) && i.includes(n)))));
  var n;
}, regex: (t) => {
  return Se(I(e, (n = t, P((i) => Ce(i) && !!i.match(n)))));
  var n;
} });
Se(P(Ce));
const oe = (e) => Object.assign(ie(e), { between: (t, n) => oe(I(e, ((i, r) => P((s) => ae(s) && i <= s && r >= s))(t, n))), lt: (t) => oe(I(e, ((n) => P((i) => ae(i) && i < n))(t))), gt: (t) => oe(I(e, ((n) => P((i) => ae(i) && i > n))(t))), lte: (t) => oe(I(e, ((n) => P((i) => ae(i) && i <= n))(t))), gte: (t) => oe(I(e, ((n) => P((i) => ae(i) && i >= n))(t))), int: () => oe(I(e, P((t) => ae(t) && Number.isInteger(t)))), finite: () => oe(I(e, P((t) => ae(t) && Number.isFinite(t)))), positive: () => oe(I(e, P((t) => ae(t) && t > 0))), negative: () => oe(I(e, P((t) => ae(t) && t < 0))) });
oe(P(ae));
const ge = (e) => Object.assign(ie(e), { between: (t, n) => ge(I(e, ((i, r) => P((s) => fe(s) && i <= s && r >= s))(t, n))), lt: (t) => ge(I(e, ((n) => P((i) => fe(i) && i < n))(t))), gt: (t) => ge(I(e, ((n) => P((i) => fe(i) && i > n))(t))), lte: (t) => ge(I(e, ((n) => P((i) => fe(i) && i <= n))(t))), gte: (t) => ge(I(e, ((n) => P((i) => fe(i) && i >= n))(t))), positive: () => ge(I(e, P((t) => fe(t) && t > 0))), negative: () => ge(I(e, P((t) => fe(t) && t < 0))) });
ge(P(fe));
ie(P(function(e) {
  return typeof e == "boolean";
}));
ie(P(function(e) {
  return typeof e == "symbol";
}));
ie(P(function(e) {
  return e == null;
}));
const en = { matched: !1, value: void 0 };
function Dn(e) {
  return new Pt(e, en);
}
class Pt {
  constructor(t, n) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = n;
  }
  with(...t) {
    if (this.state.matched)
      return this;
    const n = t[t.length - 1], i = [t[0]];
    let r;
    t.length === 3 && typeof t[1] == "function" ? (i.push(t[0]), r = t[1]) : t.length > 2 && i.push(...t.slice(1, t.length - 1));
    let s = !1, a = {};
    const o = (m, u) => {
      s = !0, a[m] = u;
    }, d = !i.some((m) => le(m, this.input, o)) || r && !r(this.input) ? en : { matched: !0, value: n(s ? Mt in a ? a[Mt] : a : this.input, this.input) };
    return new Pt(this.input, d);
  }
  when(t, n) {
    if (this.state.matched)
      return this;
    const i = !!t(this.input);
    return new Pt(this.input, i ? { matched: !0, value: n(this.input, this.input) } : en);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    return this.run();
  }
  run() {
    if (this.state.matched)
      return this.state.value;
    let t;
    try {
      t = JSON.stringify(this.input);
    } catch {
      t = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${t}`);
  }
  returnType() {
    return this;
  }
}
const $s = ({
  type: e = "info",
  title: t,
  description: n,
  className: i,
  iconColor: r
}) => {
  const s = c.useMemo(() => Dn(e).with("success", () => oi.faCheckCircle).with("error", () => ri.faTimesCircle).with("info", () => ii.faInfoCircle).exhaustive(), [e]), a = c.useMemo(() => r || Dn(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ w("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: i, children: /* @__PURE__ */ w("div", { children: /* @__PURE__ */ H("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ w("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ w(Z, { icon: s, css: yt`
                color: ${a};
              `, size: "6x" }) }),
    /* @__PURE__ */ w("div", { children: t }),
    /* @__PURE__ */ w("div", { children: n })
  ] }) }) });
}, ir = ({
  table: e
}) => e.error ? /* @__PURE__ */ w($s, { type: "error", title: e.error.message }) : /* @__PURE__ */ w(Ii, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ H("table", { css: [{
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
  fontSize: "0.75rem",
  lineHeight: "1rem"
}, yt`
            table-layout: fixed;
          `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((t) => /* @__PURE__ */ w("colgroup", { children: t.headers.map((n) => /* @__PURE__ */ w("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, t.id)),
  e.isLoading === !0 ? null : /* @__PURE__ */ w(Us, { ...e }),
  /* @__PURE__ */ w("tbody", { children: e.getRowModel().rows.map((t) => /* @__PURE__ */ w(ns, { ...t }, t.id)) })
] }) });
var li = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrows-rotate", i = 512, r = 512, s = [128472, "refresh", "sync"], a = "f021", o = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(li);
var ui = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-right", i = 512, r = 512, s = [187, "angle-double-right"], a = "f101", o = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(ui);
var di = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-right", i = 320, r = 512, s = [8250], a = "f105", o = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(di);
var hi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-left", i = 320, r = 512, s = [8249], a = "f104", o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(hi);
var fi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-left", i = 512, r = 512, s = [171, "angle-double-left"], a = "f100", o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      r,
      s,
      a,
      o
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = r, e.ligatures = s, e.unicode = a, e.svgPathData = o, e.aliases = s;
})(fi);
const Ks = ({
  table: {
    refetch: e,
    recordsTotal: t = 0,
    ...n
  }
}) => {
  const i = n.getState(), {
    pagination: r
  } = i, s = c.useMemo(() => r.pageIndex * r.pageSize + (t > 0 ? 1 : 0), [r, t]), a = c.useMemo(() => Math.min(t, (r.pageIndex + 1) * r.pageSize), [r, t]);
  return /* @__PURE__ */ H("div", { css: {
    display: "flex",
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
    /* @__PURE__ */ H("div", { css: {
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
      /* @__PURE__ */ w(Ke, { onClick: () => n.setPageIndex(0), size: "small", disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ w(Z, { icon: fi.faAnglesLeft }) }),
      /* @__PURE__ */ w(Ke, { size: "small", onClick: () => n.previousPage(), disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ w(Z, { icon: hi.faAngleLeft }) }),
      /* @__PURE__ */ H("span", { css: {
        display: "none",
        alignItems: "center",
        gap: "0.5rem",
        whiteSpace: "nowrap",
        "@container (min-width: 220px)": {
          display: "flex"
        }
      }, children: [
        /* @__PURE__ */ w("span", { css: {
          display: "none",
          "@container (min-width: 610px)": {
            display: "block"
          }
        }, children: "Страница" }),
        /* @__PURE__ */ w("input", { type: "number", value: n.getState().pagination.pageIndex + 1, onChange: (o) => {
          const d = o.target.value ? Number(o.target.value) - 1 : 0;
          n.setPageIndex(d);
        }, css: {
          width: "3rem",
          borderWidth: "1px",
          padding: "0.25rem"
        } }),
        "из ",
        n.getPageCount()
      ] }),
      /* @__PURE__ */ w(Ke, { size: "small", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ w(Z, { icon: di.faAngleRight }) }),
      /* @__PURE__ */ w(Ke, { size: "small", onClick: () => n.setPageIndex(n.getPageCount() - 1), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ w(Z, { icon: ui.faAnglesRight }) }),
      e && /* @__PURE__ */ w(Ke, { size: "small", disabled: n.isFetching, onClick: e, children: /* @__PURE__ */ w(Z, { spin: n.isFetching, icon: li.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ H("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ H("div", { css: {
        display: "flex",
        gap: "0.125rem"
      }, children: [
        /* @__PURE__ */ w("span", { css: {
          display: "none",
          "@container (min-width: 530px)": {
            display: "block"
          }
        }, children: "Отражаются записи" }),
        /* @__PURE__ */ H("span", { css: {
          display: "none",
          "@container (min-width: 400px)": {
            display: "block"
          }
        }, children: [
          "c ",
          s,
          " по ",
          a,
          ","
        ] }),
        /* @__PURE__ */ H("span", { css: {
          display: "none",
          paddingLeft: "0.25rem",
          "@container (min-width: 350px)": {
            display: "block"
          }
        }, children: [
          " всего ",
          t
        ] })
      ] }),
      /* @__PURE__ */ w("select", { css: {
        display: "none",
        borderWidth: "1px",
        padding: "0.25rem",
        "@container (min-width: 300px)": {
          display: "block"
        }
      }, value: r.pageSize, onChange: (o) => {
        n.setPageSize(Number(o.target.value));
      }, children: [25, 50, 100].map((o) => /* @__PURE__ */ w("option", { value: o, children: o }, o)) })
    ] })
  ] });
}, sr = Ln.memo(Ks), Qs = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: i,
  ...r
}) => {
  const s = ji({
    getCoreRowModel: xi(),
    columnResizeMode: "onChange",
    ...r,
    columns: e,
    data: t
  });
  return {
    isLoading: n,
    isFetching: i,
    ...s
  };
}, Xs = () => {
  const e = Ai();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function qs(e, t) {
  let n;
  typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const {
    url: i,
    params: r,
    ...s
  } = n, a = Xs();
  return Ji({
    queryKey: r ? [i, r, a.defaults.headers.Authorization || ""] : [i, a.defaults.headers.Authorization || ""],
    queryFn: async ({
      signal: o
    }) => {
      const {
        data: d
      } = await a.get(i, {
        params: r,
        signal: o
      });
      return d;
    },
    ...s
  });
}
const rr = (e, t, {
  defaultSorting: n = [],
  defaultPageSize: i = 25,
  defaultColumnVisibility: r = {},
  ...s
} = {}) => {
  var b, C;
  const [a, o] = c.useState({
    pageIndex: 0,
    pageSize: i
  }), [d, m] = c.useState(n), [u, p] = c.useState(r), S = c.useMemo(() => {
    const {
      pageIndex: M,
      pageSize: N
    } = a;
    return {
      start: M * N,
      length: N,
      sort: JSON.stringify(d.map((j) => ({
        property: j.id,
        direction: j.desc ? "DESC" : "ASC"
      })))
    };
  }, [a, d]), f = qs(e, {
    params: S,
    placeholderData: Li
  }), l = c.useMemo(() => {
    var M, N;
    return isNaN(Number((M = f.data) == null ? void 0 : M.recordsFiltered)) ? 0 : Number((N = f.data) == null ? void 0 : N.recordsFiltered);
  }, [(b = f.data) == null ? void 0 : b.recordsFiltered]), h = c.useMemo(() => l > 0 ? Math.ceil(l / a.pageSize) : 1, [a.pageSize, l]), v = Qs({
    ...s,
    columns: t,
    data: (C = f.data) == null ? void 0 : C.data,
    isLoading: f.isLoading,
    isFetching: f.isFetching,
    manualPagination: !0,
    onPaginationChange: o,
    onSortingChange: m,
    onColumnVisibilityChange: p,
    pageCount: h,
    state: {
      ...s == null ? void 0 : s.state,
      pagination: a,
      sorting: d,
      columnVisibility: u
    }
  }), y = c.useCallback(() => {
    f.refetch();
  }, [f]);
  return {
    ...v,
    recordsTotal: l,
    refetch: y,
    error: f.error
  };
};
export {
  sr as P,
  ir as T,
  nr as a,
  rr as u
};
