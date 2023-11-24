var wt = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var g = (e, t, n) => (wt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), k = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, N = (e, t, n, s) => (wt(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var L = (e, t, n) => (wt(e, t, "access private method"), n);
import { S as Yn, s as St, n as Jn, i as Jt, a as en, t as ei, f as ti, c as ni, r as tn, b as fn, u as ii, j as y, d as F, F as si, e as ri, g as oi, k as ai } from "./library-c7653894.js";
import { P as ci } from "./Panel-fbbeb872.js";
import { j as D, n as li, a as Et, I as Ae } from "./mui-a200cd22.js";
import { f as jt, u as ui, g as di } from "./table-46c094fe.js";
import { r as c, R as hn, c as ze } from "./react-72acea58.js";
import { F as Y } from "./icons-a8a50daa.js";
var W, T, Re, _, de, Me, ie, _e, Pe, Ne, fe, he, oe, ge, me, xe, Fe, Rt, Ue, Mt, Ve, Pt, Be, Nt, Qe, Tt, $e, kt, Ke, It, lt, gn, dn, fi = (dn = class extends Yn {
  constructor(t, n) {
    super();
    k(this, me);
    k(this, Fe);
    k(this, Ue);
    k(this, Ve);
    k(this, Be);
    k(this, Qe);
    k(this, $e);
    k(this, Ke);
    k(this, lt);
    k(this, W, void 0);
    k(this, T, void 0);
    k(this, Re, void 0);
    k(this, _, void 0);
    k(this, de, void 0);
    k(this, Me, void 0);
    k(this, ie, void 0);
    k(this, _e, void 0);
    k(this, Pe, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    k(this, Ne, void 0);
    k(this, fe, void 0);
    k(this, he, void 0);
    k(this, oe, void 0);
    k(this, ge, void 0);
    N(this, T, void 0), N(this, Re, void 0), N(this, _, void 0), N(this, ge, /* @__PURE__ */ new Set()), N(this, W, t), this.options = n, N(this, ie, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (g(this, T).addObserver(this), nn(g(this, T), this.options) ? L(this, me, xe).call(this) : this.updateResult(), L(this, Be, Nt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Ot(
      g(this, T),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Ot(
      g(this, T),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), L(this, Qe, Tt).call(this), L(this, $e, kt).call(this), g(this, T).removeObserver(this);
  }
  setOptions(t, n) {
    const s = this.options, o = g(this, T);
    if (this.options = g(this, W).defaultQueryOptions(t), St(s, this.options) || g(this, W).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: g(this, T),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey), L(this, Ke, It).call(this);
    const i = this.hasListeners();
    i && sn(
      g(this, T),
      o,
      this.options,
      s
    ) && L(this, me, xe).call(this), this.updateResult(n), i && (g(this, T) !== o || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && L(this, Fe, Rt).call(this);
    const r = L(this, Ue, Mt).call(this);
    i && (g(this, T) !== o || this.options.enabled !== s.enabled || r !== g(this, oe)) && L(this, Ve, Pt).call(this, r);
  }
  getOptimisticResult(t) {
    const n = g(this, W).getQueryCache().build(g(this, W), t), s = this.createResult(n, t);
    return gi(this, s) && (N(this, _, s), N(this, Me, this.options), N(this, de, g(this, T).state)), s;
  }
  getCurrentResult() {
    return g(this, _);
  }
  trackResult(t) {
    const n = {};
    return Object.keys(t).forEach((s) => {
      Object.defineProperty(n, s, {
        configurable: !1,
        enumerable: !0,
        get: () => (g(this, ge).add(s), t[s])
      });
    }), n;
  }
  getCurrentQuery() {
    return g(this, T);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = g(this, W).defaultQueryOptions(t), s = g(this, W).getQueryCache().build(g(this, W), n);
    return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, n));
  }
  fetch(t) {
    return L(this, me, xe).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), g(this, _)));
  }
  createResult(t, n) {
    var A;
    const s = g(this, T), o = this.options, i = g(this, _), r = g(this, de), a = g(this, Me), b = t !== s ? t.state : g(this, Re), { state: u } = t;
    let { error: p, errorUpdatedAt: S, fetchStatus: h, status: l } = u, d = !1, m;
    if (n._optimisticResults) {
      const M = this.hasListeners(), V = !M && nn(t, n), se = M && sn(t, s, n, o);
      (V || se) && (h = ni(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (l = "pending")), n._optimisticResults === "isRestoring" && (h = "idle");
    }
    if (n.select && typeof u.data < "u")
      if (i && u.data === (r == null ? void 0 : r.data) && n.select === g(this, _e))
        m = g(this, Pe);
      else
        try {
          N(this, _e, n.select), m = n.select(u.data), m = tn(i == null ? void 0 : i.data, m, n), N(this, Pe, m), N(this, ie, null);
        } catch (M) {
          N(this, ie, M);
        }
    else
      m = u.data;
    if (typeof n.placeholderData < "u" && typeof m > "u" && l === "pending") {
      let M;
      if (i != null && i.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
        M = i.data;
      else if (M = typeof n.placeholderData == "function" ? n.placeholderData(
        (A = g(this, Ne)) == null ? void 0 : A.state.data,
        g(this, Ne)
      ) : n.placeholderData, n.select && typeof M < "u")
        try {
          M = n.select(M), N(this, ie, null);
        } catch (V) {
          N(this, ie, V);
        }
      typeof M < "u" && (l = "success", m = tn(
        i == null ? void 0 : i.data,
        M,
        n
      ), d = !0);
    }
    g(this, ie) && (p = g(this, ie), m = g(this, Pe), S = Date.now(), l = "error");
    const w = h === "fetching", v = l === "pending", C = l === "error", R = v && w;
    return {
      status: l,
      fetchStatus: h,
      isPending: v,
      isSuccess: l === "success",
      isError: C,
      isInitialLoading: R,
      isLoading: R,
      data: m,
      dataUpdatedAt: u.dataUpdatedAt,
      error: p,
      errorUpdatedAt: S,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > b.dataUpdateCount || u.errorUpdateCount > b.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !v,
      isLoadingError: C && u.dataUpdatedAt === 0,
      isPaused: h === "paused",
      isPlaceholderData: d,
      isRefetchError: C && u.dataUpdatedAt !== 0,
      isStale: Ht(t, n),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const n = g(this, _), s = this.createResult(g(this, T), this.options);
    if (N(this, de, g(this, T).state), N(this, Me, this.options), g(this, de).data !== void 0 && N(this, Ne, g(this, T)), St(s, n))
      return;
    N(this, _, s);
    const o = {}, i = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: r } = this.options, a = typeof r == "function" ? r() : r;
      if (a === "all" || !a && !g(this, ge).size)
        return !0;
      const f = new Set(
        a ?? g(this, ge)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(g(this, _)).some((b) => {
        const u = b;
        return g(this, _)[u] !== n[u] && f.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (o.listeners = !0), L(this, lt, gn).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && L(this, Be, Nt).call(this);
  }
}, W = new WeakMap(), T = new WeakMap(), Re = new WeakMap(), _ = new WeakMap(), de = new WeakMap(), Me = new WeakMap(), ie = new WeakMap(), _e = new WeakMap(), Pe = new WeakMap(), Ne = new WeakMap(), fe = new WeakMap(), he = new WeakMap(), oe = new WeakMap(), ge = new WeakMap(), me = new WeakSet(), xe = function(t) {
  L(this, Ke, It).call(this);
  let n = g(this, T).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Jn)), n;
}, Fe = new WeakSet(), Rt = function() {
  if (L(this, Qe, Tt).call(this), Jt || g(this, _).isStale || !en(this.options.staleTime))
    return;
  const n = ei(
    g(this, _).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  N(this, fe, setTimeout(() => {
    g(this, _).isStale || this.updateResult();
  }, n));
}, Ue = new WeakSet(), Mt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(g(this, T)) : this.options.refetchInterval) ?? !1;
}, Ve = new WeakSet(), Pt = function(t) {
  L(this, $e, kt).call(this), N(this, oe, t), !(Jt || this.options.enabled === !1 || !en(g(this, oe)) || g(this, oe) === 0) && N(this, he, setInterval(() => {
    (this.options.refetchIntervalInBackground || ti.isFocused()) && L(this, me, xe).call(this);
  }, g(this, oe)));
}, Be = new WeakSet(), Nt = function() {
  L(this, Fe, Rt).call(this), L(this, Ve, Pt).call(this, L(this, Ue, Mt).call(this));
}, Qe = new WeakSet(), Tt = function() {
  g(this, fe) && (clearTimeout(g(this, fe)), N(this, fe, void 0));
}, $e = new WeakSet(), kt = function() {
  g(this, he) && (clearInterval(g(this, he)), N(this, he, void 0));
}, Ke = new WeakSet(), It = function() {
  const t = g(this, W).getQueryCache().build(g(this, W), this.options);
  if (t === g(this, T))
    return;
  const n = g(this, T);
  N(this, T, t), N(this, Re, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, lt = new WeakSet(), gn = function(t) {
  fn.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(g(this, _));
    }), g(this, W).getQueryCache().notify({
      query: g(this, T),
      type: "observerResultsUpdated"
    });
  });
}, dn);
function hi(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function nn(e, t) {
  return hi(e, t) || e.state.dataUpdatedAt > 0 && Ot(e, t, t.refetchOnMount);
}
function Ot(e, t, n) {
  if (t.enabled !== !1) {
    const s = typeof n == "function" ? n(e) : n;
    return s === "always" || s !== !1 && Ht(e, t);
  }
  return !1;
}
function sn(e, t, n, s) {
  return n.enabled !== !1 && (e !== t || s.enabled === !1) && (!n.suspense || e.state.status !== "error") && Ht(e, n);
}
function Ht(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function gi(e, t) {
  return !St(e.getCurrentResult(), t);
}
var mn = c.createContext(!1), mi = () => c.useContext(mn);
mn.Provider;
function pi() {
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
var vi = c.createContext(pi()), bi = () => c.useContext(vi);
function wi(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var yi = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, Ci = (e) => {
  c.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Si = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: s
}) => e.isError && !t.isReset() && !e.isFetching && wi(n, [e.error, s]), Ei = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Ri = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Mi = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Pi(e, t, n) {
  const s = ii(n), o = mi(), i = bi(), r = s.defaultQueryOptions(e);
  r._optimisticResults = o ? "isRestoring" : "optimistic", Ei(r), yi(r, i), Ci(i);
  const [a] = c.useState(
    () => new t(
      s,
      r
    )
  ), f = a.getOptimisticResult(r);
  if (c.useSyncExternalStore(
    c.useCallback(
      (b) => {
        const u = o ? () => {
        } : a.subscribe(fn.batchCalls(b));
        return a.updateResult(), u;
      },
      [a, o]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), c.useEffect(() => {
    a.setOptions(r, { listeners: !1 });
  }, [r, a]), Ri(r, f))
    throw Mi(r, a, i);
  if (Si({
    result: f,
    errorResetBoundary: i,
    throwOnError: r.throwOnError,
    query: a.getCurrentQuery()
  }))
    throw f.error;
  return r.notifyOnChangeProps ? f : a.trackResult(f);
}
function Ni(e, t) {
  return Pi(e, fi, t);
}
const Ti = ({
  ...e
}) => /* @__PURE__ */ y("td", { css: [{
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
}], children: jt(e.column.columnDef.cell, e.getContext()) }, e.id), ki = hn.memo(Ti), Ii = (e) => /* @__PURE__ */ y("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], children: e.getVisibleCells().map((t) => /* @__PURE__ */ y(ki, { ...t }, t.id)) }, e.id);
var pn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "caret-down", s = 320, o = 512, i = [], r = "f0d7", a = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(pn);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", s = 384, o = 512, i = [8595], r = "f063", a = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(vn);
var bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", s = 384, o = 512, i = [8593], r = "f062", a = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(bn);
var wn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", s = 512, o = 512, i = ["columns"], r = "f0db", a = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(wn);
var yn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "eye-slash", s = 640, o = 512, i = [], r = "f070", a = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faEyeSlash = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(yn);
var Cn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", s = 576, o = 512, i = ["sort-alpha-desc", "sort-alpha-down-alt"], r = "f881", a = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(Cn);
var Sn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", s = 576, o = 512, i = ["sort-alpha-up"], r = "f15e", a = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(Sn);
const _t = (e) => !!e && e[0] === "o", Dt = ze.unstable_batchedUpdates || ((e) => e()), Se = (e, t, n = 1e-4) => Math.abs(e - t) < n, je = (e, t) => e === !0 || !!(e && e[t]), X = (e, t) => typeof e == "function" ? e(t) : e, Oi = "_szhsinMenu", Di = (e) => e[Oi], We = (e, t) => (t && Object.keys(t).forEach((n) => {
  const s = e[n], o = t[n];
  typeof o == "function" && s ? e[n] = (...i) => {
    o(...i), s(...i);
  } : e[n] = o;
}), e), Li = (e) => {
  if (typeof e != "string")
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  const t = e.trim().split(/\s+/, 4).map(parseFloat), n = isNaN(t[0]) ? 0 : t[0], s = isNaN(t[1]) ? n : t[1];
  return {
    top: n,
    right: s,
    bottom: isNaN(t[2]) ? n : t[2],
    left: isNaN(t[3]) ? s : t[3]
  };
}, yt = (e) => {
  for (; e; ) {
    if (e = e.parentNode, !e || e === document.body || !e.parentNode)
      return;
    const {
      overflow: t,
      overflowX: n,
      overflowY: s
    } = getComputedStyle(e);
    if (/auto|scroll|overlay|hidden/.test(t + s + n))
      return e;
  }
};
function Ft(e, t) {
  return {
    "aria-disabled": e || void 0,
    tabIndex: t ? 0 : -1
  };
}
function rn(e, t) {
  for (let n = 0; n < e.length; n++)
    if (e[n] === t)
      return n;
  return -1;
}
const ve = ({
  block: e,
  element: t,
  modifiers: n,
  className: s
}) => c.useMemo(() => {
  const o = t ? `${e}__${t}` : e;
  let i = o;
  n && Object.keys(n).forEach((a) => {
    const f = n[a];
    f && (i += ` ${o}--${f === !0 ? a : `${a}-${f}`}`);
  });
  let r = typeof s == "function" ? s(n) : s;
  return typeof r == "string" && (r = r.trim(), r && (i += ` ${r}`)), i;
}, [e, t, n, s]), Ai = "szh-menu-container", pe = "szh-menu", xi = "arrow", En = "item", zi = "divider", ji = "submenu", Rn = /* @__PURE__ */ c.createContext(), Ut = /* @__PURE__ */ c.createContext({}), Lt = /* @__PURE__ */ c.createContext({}), Mn = /* @__PURE__ */ c.createContext({}), Hi = /* @__PURE__ */ c.createContext({}), ut = /* @__PURE__ */ c.createContext({}), U = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), O = /* @__PURE__ */ Object.freeze({
  RESET: 0,
  SET: 1,
  UNSET: 2,
  INCREASE: 3,
  DECREASE: 4,
  FIRST: 5,
  LAST: 6,
  SET_INDEX: 7
}), He = /* @__PURE__ */ Object.freeze({
  CLICK: "click",
  CANCEL: "cancel",
  BLUR: "blur",
  SCROLL: "scroll"
}), Ee = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), _i = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Ct = "absolute", Pn = "presentation", Vt = "menuitem", on = {
  "aria-hidden": !0,
  role: Vt
}, Fi = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: s,
  isOpen: o,
  theming: i,
  transition: r,
  onClose: a
}) => {
  const f = je(r, "item"), b = ({
    key: p
  }) => {
    switch (p) {
      case U.ESC:
        X(a, {
          key: p,
          reason: He.CANCEL
        });
        break;
    }
  }, u = (p) => {
    o && !p.currentTarget.contains(p.relatedTarget) && X(a, {
      reason: He.BLUR
    });
  };
  return /* @__PURE__ */ D.jsx("div", {
    ...We({
      onKeyDown: b,
      onBlur: u
    }, n),
    className: ve({
      block: Ai,
      modifiers: c.useMemo(() => ({
        theme: i,
        itemTransition: f
      }), [i, f]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: s
  });
}, Ui = () => {
  let e, t = 0;
  return {
    toggle: (n) => {
      n ? t++ : t--, t = Math.max(t, 0);
    },
    on: (n, s, o) => {
      t ? e || (e = setTimeout(() => {
        e = 0, s();
      }, n)) : o == null || o();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, Vi = (e, t) => {
  const [n, s] = c.useState(), i = c.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, r = c.useCallback((f, b) => {
    const {
      items: u
    } = i;
    if (!f)
      i.items = [];
    else if (b)
      u.push(f);
    else {
      const p = u.indexOf(f);
      p > -1 && (u.splice(p, 1), f.contains(document.activeElement) && (t.current.focus(), s()));
    }
    i.hoverIndex = -1, i.sorted = !1;
  }, [i, t]), a = c.useCallback((f, b, u) => {
    const {
      items: p,
      hoverIndex: S
    } = i, h = () => {
      if (i.sorted)
        return;
      const m = e.current.querySelectorAll(".szh-menu__item");
      p.sort((w, v) => rn(m, w) - rn(m, v)), i.sorted = !0;
    };
    let l = -1, d;
    switch (f) {
      case O.RESET:
        break;
      case O.SET:
        d = b;
        break;
      case O.UNSET:
        d = (m) => m === b ? void 0 : m;
        break;
      case O.FIRST:
        h(), l = 0, d = p[l];
        break;
      case O.LAST:
        h(), l = p.length - 1, d = p[l];
        break;
      case O.SET_INDEX:
        h(), l = u, d = p[l];
        break;
      case O.INCREASE:
        h(), l = S, l < 0 && (l = p.indexOf(b)), l++, l >= p.length && (l = 0), d = p[l];
        break;
      case O.DECREASE:
        h(), l = S, l < 0 && (l = p.indexOf(b)), l--, l < 0 && (l = p.length - 1), d = p[l];
        break;
    }
    d || (l = -1), s(d), i.hoverIndex = l;
  }, [e, i]);
  return {
    hoverItem: n,
    dispatch: a,
    updateItems: r
  };
}, Bi = (e, t, n, s) => {
  const o = t.current.getBoundingClientRect(), i = e.current.getBoundingClientRect(), r = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), a = Li(s), f = (l) => l + i.left - r.left - a.left, b = (l) => l + i.left + o.width - r.right + a.right, u = (l) => l + i.top - r.top - a.top, p = (l) => l + i.top + o.height - r.bottom + a.bottom;
  return {
    menuRect: o,
    containerRect: i,
    getLeftOverflow: f,
    getRightOverflow: b,
    getTopOverflow: u,
    getBottomOverflow: p,
    confineHorizontally: (l) => {
      let d = f(l);
      if (d < 0)
        l -= d;
      else {
        const m = b(l);
        m > 0 && (l -= m, d = f(l), d < 0 && (l -= d));
      }
      return l;
    },
    confineVertically: (l) => {
      let d = u(l);
      if (d < 0)
        l -= d;
      else {
        const m = p(l);
        m > 0 && (l -= m, d = u(l), d < 0 && (l -= d));
      }
      return l;
    }
  };
}, Qi = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: s,
  menuRect: o
}) => {
  let i = n.top - s.top - t + n.height / 2;
  const r = e.current.offsetHeight * 1.25;
  return i = Math.max(r, i), i = Math.min(i, o.height - r), i;
}, $i = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: s,
  placeLeftX: o,
  placeRightX: i,
  getLeftOverflow: r,
  getRightOverflow: a,
  confineHorizontally: f,
  confineVertically: b,
  arrowRef: u,
  arrow: p,
  direction: S,
  position: h
}) => {
  let l = S, d = s;
  h !== "initial" && (d = b(d), h === "anchor" && (d = Math.min(d, e.bottom - t.top), d = Math.max(d, e.top - t.top - n.height)));
  let m, w, v;
  return l === "left" ? (m = o, h !== "initial" && (w = r(m), w < 0 && (v = a(i), (v <= 0 || -w > v) && (m = i, l = "right")))) : (m = i, h !== "initial" && (v = a(m), v > 0 && (w = r(o), (w >= 0 || -w < v) && (m = o, l = "left")))), h === "auto" && (m = f(m)), {
    arrowY: p ? Qi({
      menuY: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: m,
    y: d,
    computedDirection: l
  };
}, Ki = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: s,
  menuRect: o
}) => {
  let i = n.left - s.left - t + n.width / 2;
  const r = e.current.offsetWidth * 1.25;
  return i = Math.max(r, i), i = Math.min(i, o.width - r), i;
}, Wi = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: s,
  placeTopY: o,
  placeBottomY: i,
  getTopOverflow: r,
  getBottomOverflow: a,
  confineHorizontally: f,
  confineVertically: b,
  arrowRef: u,
  arrow: p,
  direction: S,
  position: h
}) => {
  let l = S === "top" ? "top" : "bottom", d = s;
  h !== "initial" && (d = f(d), h === "anchor" && (d = Math.min(d, e.right - t.left), d = Math.max(d, e.left - t.left - n.width)));
  let m, w, v;
  return l === "top" ? (m = o, h !== "initial" && (w = r(m), w < 0 && (v = a(i), (v <= 0 || -w > v) && (m = i, l = "bottom")))) : (m = i, h !== "initial" && (v = a(m), v > 0 && (w = r(o), (w >= 0 || -w < v) && (m = o, l = "top")))), h === "auto" && (m = b(m)), {
    arrowX: p ? Ki({
      menuX: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: d,
    y: m,
    computedDirection: l
  };
}, Xi = ({
  arrow: e,
  align: t,
  direction: n,
  gap: s,
  shift: o,
  position: i,
  anchorRect: r,
  arrowRef: a,
  positionHelpers: f
}) => {
  const {
    menuRect: b,
    containerRect: u
  } = f, p = n === "left" || n === "right";
  let S = p ? s : o, h = p ? o : s;
  if (e) {
    const P = a.current;
    p ? S += P.offsetWidth : h += P.offsetHeight;
  }
  const l = r.left - u.left - b.width - S, d = r.right - u.left + S, m = r.top - u.top - b.height - h, w = r.bottom - u.top + h;
  let v, C;
  t === "end" ? (v = r.right - u.left - b.width, C = r.bottom - u.top - b.height) : t === "center" ? (v = r.left - u.left - (b.width - r.width) / 2, C = r.top - u.top - (b.height - r.height) / 2) : (v = r.left - u.left, C = r.top - u.top), v += S, C += h;
  const R = {
    ...f,
    anchorRect: r,
    placeLeftX: l,
    placeRightX: d,
    placeLeftorRightY: C,
    placeTopY: m,
    placeBottomY: w,
    placeToporBottomX: v,
    arrowRef: a,
    arrow: e,
    direction: n,
    position: i
  };
  switch (n) {
    case "left":
    case "right":
      return $i(R);
    case "top":
    case "bottom":
    default:
      return Wi(R);
  }
}, rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect;
function an(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const dt = (e, t) => c.useMemo(() => e ? t ? (n) => {
  an(e, n), an(t, n);
} : e : t, [e, t]), cn = -9999, Nn = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: n,
  arrow: s,
  arrowProps: o = {},
  anchorPoint: i,
  anchorRef: r,
  containerRef: a,
  containerProps: f,
  focusProps: b,
  externalRef: u,
  parentScrollingRef: p,
  align: S = "start",
  direction: h = "bottom",
  position: l = "auto",
  overflow: d = "visible",
  setDownOverflow: m,
  repositionFlag: w,
  captureFocus: v = !0,
  state: C,
  endTransition: R,
  isDisabled: P,
  menuItemFocus: A,
  gap: M = 0,
  shift: V = 0,
  children: se,
  onClose: Q,
  ...I
}) => {
  const [j, ae] = c.useState({
    x: cn,
    y: cn
  }), [Te, te] = c.useState({}), [x, ce] = c.useState(), [$, Xe] = c.useState(h), [J] = c.useState(Ui), [ke, Ie] = c.useReducer((E) => E + 1, 1), {
    transition: qe,
    boundingBoxRef: Oe,
    boundingBoxPadding: Ge,
    rootMenuRef: Ze,
    rootAnchorRef: le,
    scrollNodesRef: ft,
    reposition: Ye,
    viewScroll: De,
    submenuCloseDelay: ht
  } = c.useContext(ut), {
    submenuCtx: Je,
    reposSubmenu: z = w
  } = c.useContext(Lt), K = c.useRef(null), et = c.useRef(), Bt = c.useRef(), Qt = c.useRef(!1), tt = c.useRef({
    width: 0,
    height: 0
  }), $t = c.useRef(() => {
  }), {
    hoverItem: gt,
    dispatch: q,
    updateItems: nt
  } = Vi(K, et), G = _t(C), Kt = je(qe, "open"), Wt = je(qe, "close"), ee = ft.current, Un = (E) => {
    switch (E.key) {
      case U.HOME:
        q(O.FIRST);
        break;
      case U.END:
        q(O.LAST);
        break;
      case U.UP:
        q(O.DECREASE, gt);
        break;
      case U.DOWN:
        q(O.INCREASE, gt);
        break;
      case U.SPACE:
        E.target && E.target.className.indexOf(pe) !== -1 && E.preventDefault();
        return;
      default:
        return;
    }
    E.preventDefault(), E.stopPropagation();
  }, Vn = () => {
    C === "closing" && ce(), X(R);
  }, Bn = (E) => {
    E.stopPropagation(), J.on(ht, () => {
      q(O.RESET), et.current.focus();
    });
  }, Qn = (E) => {
    E.target === E.currentTarget && J.off();
  }, ue = c.useCallback((E) => {
    var B;
    const ne = r ? (B = r.current) == null ? void 0 : B.getBoundingClientRect() : i ? {
      left: i.x,
      right: i.x,
      top: i.y,
      bottom: i.y,
      width: 0,
      height: 0
    } : null;
    if (!ne)
      return;
    ee.menu || (ee.menu = (Oe ? Oe.current : yt(Ze.current)) || window);
    const Z = Bi(a, K, ee.menu, Ge);
    let {
      arrowX: H,
      arrowY: be,
      x: we,
      y: re,
      computedDirection: vt
    } = Xi({
      arrow: s,
      align: S,
      direction: h,
      gap: M,
      shift: V,
      position: l,
      anchorRect: ne,
      arrowRef: Bt,
      positionHelpers: Z
    });
    const {
      menuRect: Zt
    } = Z;
    let ye = Zt.height;
    if (!E && d !== "visible") {
      const {
        getTopOverflow: Gn,
        getBottomOverflow: Zn
      } = Z;
      let Ce, bt;
      const Yt = tt.current.height, it = Zn(re);
      if (it > 0 || Se(it, 0) && Se(ye, Yt))
        Ce = ye - it, bt = it;
      else {
        const Le = Gn(re);
        (Le < 0 || Se(Le, 0) && Se(ye, Yt)) && (Ce = ye + Le, bt = 0 - Le, Ce >= 0 && (re -= Le));
      }
      Ce >= 0 ? (ye = Ce, ce({
        height: Ce,
        overflowAmt: bt
      })) : ce();
    }
    s && te({
      x: H,
      y: be
    }), ae({
      x: we,
      y: re
    }), Xe(vt), tt.current = {
      width: Zt.width,
      height: ye
    };
  }, [s, S, Ge, h, M, V, l, d, i, r, a, Oe, Ze, ee]);
  rt(() => {
    G && (ue(), Qt.current && Ie()), Qt.current = G, $t.current = ue;
  }, [G, ue, z]), rt(() => {
    x && !m && (K.current.scrollTop = 0);
  }, [x, m]), rt(() => nt, [nt]), c.useEffect(() => {
    let {
      menu: E
    } = ee;
    if (!G || !E)
      return;
    if (E = E.addEventListener ? E : window, !ee.anchors) {
      ee.anchors = [];
      let H = yt(le && le.current);
      for (; H && H !== E; )
        ee.anchors.push(H), H = yt(H);
    }
    let B = De;
    if (ee.anchors.length && B === "initial" && (B = "auto"), B === "initial")
      return;
    const ne = () => {
      B === "auto" ? Dt(() => ue(!0)) : X(Q, {
        reason: He.SCROLL
      });
    }, Z = ee.anchors.concat(De !== "initial" ? E : []);
    return Z.forEach((H) => H.addEventListener("scroll", ne)), () => Z.forEach((H) => H.removeEventListener("scroll", ne));
  }, [le, ee, G, Q, De, ue]);
  const Xt = !!x && x.overflowAmt > 0;
  c.useEffect(() => {
    if (Xt || !G || !p)
      return;
    const E = () => Dt(ue), B = p.current;
    return B.addEventListener("scroll", E), () => B.removeEventListener("scroll", E);
  }, [G, Xt, p, ue]), c.useEffect(() => {
    if (typeof ResizeObserver != "function" || Ye === "initial")
      return;
    const E = new ResizeObserver(([ne]) => {
      const {
        borderBoxSize: Z,
        target: H
      } = ne;
      let be, we;
      if (Z) {
        const {
          inlineSize: re,
          blockSize: vt
        } = Z[0] || Z;
        be = re, we = vt;
      } else {
        const re = H.getBoundingClientRect();
        be = re.width, we = re.height;
      }
      be === 0 || we === 0 || Se(be, tt.current.width, 1) && Se(we, tt.current.height, 1) || ze.flushSync(() => {
        $t.current(), Ie();
      });
    }), B = K.current;
    return E.observe(B, {
      box: "border-box"
    }), () => E.unobserve(B);
  }, [Ye]), c.useEffect(() => {
    if (!G) {
      q(O.RESET), Wt || ce();
      return;
    }
    const {
      position: E,
      alwaysUpdate: B
    } = A || {}, ne = () => {
      E === Ee.FIRST ? q(O.FIRST) : E === Ee.LAST ? q(O.LAST) : E >= -1 && q(O.SET_INDEX, void 0, E);
    };
    if (B)
      ne();
    else if (v) {
      const Z = setTimeout(() => {
        const H = K.current;
        H && !H.contains(document.activeElement) && (et.current.focus(), ne());
      }, Kt ? 170 : 100);
      return () => clearTimeout(Z);
    }
  }, [G, Kt, Wt, v, A, q]);
  const $n = c.useMemo(() => ({
    isParentOpen: G,
    submenuCtx: J,
    dispatch: q,
    updateItems: nt
  }), [G, J, q, nt]);
  let mt, pt;
  x && (m ? pt = x.overflowAmt : mt = x.height);
  const Kn = c.useMemo(() => ({
    reposSubmenu: ke,
    submenuCtx: J,
    overflow: d,
    overflowAmt: pt,
    parentMenuRef: K,
    parentDir: $
  }), [ke, J, d, pt, $]), Wn = mt >= 0 ? {
    maxHeight: mt,
    overflow: d
  } : void 0, qt = c.useMemo(() => ({
    state: C,
    dir: $
  }), [C, $]), Xn = c.useMemo(() => ({
    dir: $
  }), [$]), qn = ve({
    block: pe,
    element: xi,
    modifiers: Xn,
    className: o.className
  }), Gt = /* @__PURE__ */ D.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ft(P),
    ...We({
      onPointerEnter: Je == null ? void 0 : Je.off,
      onPointerMove: Bn,
      onPointerLeave: Qn,
      onKeyDown: Un,
      onAnimationEnd: Vn
    }, I),
    ref: dt(u, K),
    className: ve({
      block: pe,
      modifiers: qt,
      className: t
    }),
    style: {
      ...n,
      ...Wn,
      margin: 0,
      display: C === "closed" ? "none" : void 0,
      position: Ct,
      left: j.x,
      top: j.y
    },
    children: [/* @__PURE__ */ D.jsx("li", {
      tabIndex: -1,
      style: {
        position: Ct,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: et,
      ...on,
      ...b
    }), s && /* @__PURE__ */ D.jsx("li", {
      ...on,
      ...o,
      className: qn,
      style: {
        display: "block",
        position: Ct,
        left: Te.x,
        top: Te.y,
        ...o.style
      },
      ref: Bt
    }), /* @__PURE__ */ D.jsx(Lt.Provider, {
      value: Kn,
      children: /* @__PURE__ */ D.jsx(Ut.Provider, {
        value: $n,
        children: /* @__PURE__ */ D.jsx(Rn.Provider, {
          value: gt,
          children: X(se, qt)
        })
      })
    })]
  });
  return f ? /* @__PURE__ */ D.jsx(Fi, {
    ...f,
    isOpen: G,
    children: Gt
  }) : Gt;
}, qi = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: s,
  initialMounted: o,
  unmountOnClose: i,
  transition: r,
  transitionTimeout: a,
  boundingBoxRef: f,
  boundingBoxPadding: b,
  reposition: u = "auto",
  submenuOpenDelay: p = 300,
  submenuCloseDelay: S = 150,
  viewScroll: h = "initial",
  portal: l,
  theming: d,
  onItemClick: m,
  ...w
}, v) {
  const C = c.useRef(null), R = c.useRef({}), {
    anchorRef: P,
    state: A,
    onClose: M
  } = w, V = c.useMemo(() => ({
    initialMounted: o,
    unmountOnClose: i,
    transition: r,
    transitionTimeout: a,
    boundingBoxRef: f,
    boundingBoxPadding: b,
    rootMenuRef: C,
    rootAnchorRef: P,
    scrollNodesRef: R,
    reposition: u,
    viewScroll: h,
    submenuOpenDelay: p,
    submenuCloseDelay: S
  }), [o, i, r, a, P, f, b, u, h, p, S]), se = c.useMemo(() => ({
    handleClick(I, j) {
      I.stopPropagation || X(m, I);
      let ae = I.keepOpen;
      ae === void 0 && (ae = j && I.key === U.SPACE), ae || X(M, {
        value: I.value,
        key: I.key,
        reason: He.CLICK
      });
    },
    handleClose(I) {
      X(M, {
        key: I,
        reason: He.CLICK
      });
    }
  }), [m, M]);
  if (!A)
    return null;
  const Q = /* @__PURE__ */ D.jsx(ut.Provider, {
    value: V,
    children: /* @__PURE__ */ D.jsx(Mn.Provider, {
      value: se,
      children: /* @__PURE__ */ D.jsx(Nn, {
        ...w,
        ariaLabel: t || "Menu",
        externalRef: v,
        containerRef: C,
        containerProps: {
          className: n,
          containerRef: C,
          containerProps: s,
          theming: d,
          transition: r,
          onClose: M
        }
      })
    })
  });
  return l === !0 && typeof document < "u" ? /* @__PURE__ */ ze.createPortal(Q, document.body) : l ? l.target ? /* @__PURE__ */ ze.createPortal(Q, l.target) : l.stablePosition ? null : Q : Q;
}), At = 0, xt = 1, ot = 2, at = 3, ct = 4, Gi = 5, Tn = 6, Zi = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], kn = (e) => ({
  _s: e,
  status: Zi[e],
  isEnter: e < at,
  isMounted: e !== Tn,
  isResolved: e === ot || e > ct
}), zt = (e) => e ? Tn : Gi, Yi = (e, t) => {
  switch (e) {
    case xt:
    case At:
      return ot;
    case ct:
    case at:
      return zt(t);
  }
}, Ji = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], es = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), ln = (e, t, n, s, o) => {
  clearTimeout(s.current);
  const i = kn(e);
  t(i), n.current = i, o && o({
    current: i
  });
}, ts = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: s,
  timeout: o,
  initialEntered: i,
  mountOnEnter: r,
  unmountOnExit: a,
  onStateChange: f
} = {}) => {
  const [b, u] = c.useState(() => kn(i ? ot : zt(r))), p = c.useRef(b), S = c.useRef(), [h, l] = Ji(o), d = c.useCallback(() => {
    const w = Yi(p.current._s, a);
    w && ln(w, u, p, S, f);
  }, [f, a]), m = c.useCallback((w) => {
    const v = (R) => {
      switch (ln(R, u, p, S, f), R) {
        case xt:
          h >= 0 && (S.current = setTimeout(d, h));
          break;
        case ct:
          l >= 0 && (S.current = setTimeout(d, l));
          break;
        case At:
        case at:
          S.current = es(v, R);
          break;
      }
    }, C = p.current.isEnter;
    typeof w != "boolean" && (w = !C), w ? !C && v(e ? n ? At : xt : ot) : C && v(t ? s ? at : ct : zt(a));
  }, [d, f, e, t, n, s, h, l, a]);
  return c.useEffect(() => () => clearTimeout(S.current), []), [b, m, d];
}, ns = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: s,
  transitionTimeout: o = 500
} = {}) => {
  const [{
    status: i
  }, r, a] = ts({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: o,
    enter: je(s, "open"),
    exit: je(s, "close")
  });
  return [{
    state: _i[i],
    endTransition: a
  }, r];
}, In = (e) => {
  const [t, n] = ns(e), [s, o] = c.useState(), i = (r, a) => {
    o({
      position: r,
      alwaysUpdate: a
    }), n(!0);
  };
  return [{
    menuItemFocus: s,
    ...t
  }, n, i];
}, is = (e, t) => {
  const [n] = c.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (s) => n.v ? n.v = !1 : t(!0, s)
  };
}, On = (e, t) => {
  const n = c.useRef(t);
  c.useEffect(() => {
    n.current !== t && X(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, ss = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: s,
  menuButton: o,
  instanceRef: i,
  onMenuChange: r,
  ...a
}, f) {
  const [b, u, p] = In(a), {
    state: S
  } = b, h = _t(S), l = c.useRef(null), d = is(S, (P, A) => p(A.detail ? void 0 : Ee.FIRST)), m = c.useCallback((P) => {
    u(!1), P.key && l.current.focus();
  }, [u]), w = (P) => {
    switch (P.key) {
      case U.UP:
        p(Ee.LAST);
        break;
      case U.DOWN:
        p(Ee.FIRST);
        break;
      default:
        return;
    }
    P.preventDefault();
  }, v = X(o, {
    open: h
  });
  if (!v || !v.type)
    throw new Error("Menu requires a menuButton prop.");
  const C = {
    ref: dt(v.ref, l),
    ...We({
      onKeyDown: w,
      ...d
    }, v.props)
  };
  Di(v.type) === "MenuButton" && (C.isOpen = h);
  const R = /* @__PURE__ */ c.cloneElement(v, C);
  return On(r, h), c.useImperativeHandle(i, () => ({
    openMenu: p,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ D.jsxs(c.Fragment, {
    children: [R, /* @__PURE__ */ D.jsx(qi, {
      ...a,
      ...b,
      "aria-label": t || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: l,
      ref: f,
      onClose: m
    })]
  });
}), Dn = (e, t) => {
  const n = /* @__PURE__ */ c.memo(t), s = /* @__PURE__ */ c.forwardRef((o, i) => {
    const r = c.useRef(null);
    return /* @__PURE__ */ D.jsx(n, {
      ...o,
      itemRef: r,
      externalRef: i,
      isHovering: c.useContext(Rn) === r.current
    });
  });
  return s.displayName = `WithHovering(${e})`, s;
}, Ln = (e, t, n) => {
  rt(() => {
    if (e)
      return;
    const s = t.current;
    return n(s, !0), () => {
      n(s);
    };
  }, [e, t, n]);
}, rs = /* @__PURE__ */ Dn("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: s,
  direction: o,
  label: i,
  openTrigger: r,
  onMenuChange: a,
  isHovering: f,
  instanceRef: b,
  itemRef: u,
  captureFocus: p,
  repositionFlag: S,
  itemProps: h = {},
  ...l
}) {
  const d = c.useContext(ut), {
    rootMenuRef: m,
    submenuOpenDelay: w,
    submenuCloseDelay: v
  } = d, {
    parentMenuRef: C,
    parentDir: R,
    overflow: P
  } = c.useContext(Lt), {
    isParentOpen: A,
    submenuCtx: M,
    dispatch: V,
    updateItems: se
  } = c.useContext(Ut), Q = P !== "visible", [I, j, ae] = In(d), {
    state: Te
  } = I, te = !!s, x = _t(Te), ce = c.useRef(null), [$] = c.useState({
    v: 0
  }), Xe = () => {
    M.off(), $.v && (clearTimeout($.v), $.v = 0);
  }, J = (...z) => {
    Xe(), ke(), !te && ae(...z);
  }, ke = () => !f && !te && V(O.SET, u.current), Ie = (z) => {
    ke(), r || ($.v = setTimeout(() => Dt(J), Math.max(z, 0)));
  }, qe = (z) => {
    te || (z.stopPropagation(), !($.v || x) && M.on(v, () => Ie(w - v), () => Ie(w)));
  }, Oe = () => {
    Xe(), x || V(O.UNSET, u.current);
  }, Ge = (z) => {
    if (f)
      switch (z.key) {
        case U.ENTER:
          z.preventDefault();
        case U.SPACE:
        case U.RIGHT:
          r !== "none" && J(Ee.FIRST);
      }
  }, Ze = (z) => {
    let K = !1;
    switch (z.key) {
      case U.LEFT:
        x && (u.current.focus(), j(!1), K = !0);
        break;
      case U.RIGHT:
        x || (K = !0);
        break;
    }
    K && (z.preventDefault(), z.stopPropagation());
  };
  Ln(te, u, se), On(a, x), c.useEffect(() => M.toggle(x), [M, x]), c.useEffect(() => () => clearTimeout($.v), [$]), c.useEffect(() => {
    f && A ? u.current.focus() : j(!1);
  }, [f, A, j, u]), c.useImperativeHandle(b, () => ({
    openMenu: (...z) => {
      A && J(...z);
    },
    closeMenu: () => {
      x && (u.current.focus(), j(!1));
    }
  }));
  const le = c.useMemo(() => ({
    open: x,
    hover: f,
    disabled: te,
    submenu: !0
  }), [x, f, te]), {
    ref: ft,
    className: Ye,
    ...De
  } = h, ht = We({
    onPointerEnter: M.off,
    onPointerMove: qe,
    onPointerLeave: Oe,
    onKeyDown: Ge,
    onClick: () => r !== "none" && J()
  }, De), Je = () => {
    const z = /* @__PURE__ */ D.jsx(Nn, {
      ...l,
      ...I,
      ariaLabel: t || (typeof i == "string" ? i : "Submenu"),
      anchorRef: u,
      containerRef: Q ? m : ce,
      direction: o || (R === "right" || R === "left" ? R : "right"),
      parentScrollingRef: Q && C,
      isDisabled: te
    }), K = m.current;
    return Q && K ? /* @__PURE__ */ ze.createPortal(z, K) : z;
  };
  return /* @__PURE__ */ D.jsxs("li", {
    className: ve({
      block: pe,
      element: ji,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Pn,
    ref: ce,
    onKeyDown: Ze,
    children: [/* @__PURE__ */ D.jsx("div", {
      role: Vt,
      "aria-haspopup": !0,
      "aria-expanded": x,
      ...Ft(te, f),
      ...ht,
      ref: dt(ft, u),
      className: ve({
        block: pe,
        element: En,
        modifiers: le,
        className: Ye
      }),
      children: c.useMemo(() => X(i, le), [i, le])
    }), Te && Je()]
  });
}), os = (e, t, n, s) => {
  const {
    submenuCloseDelay: o
  } = c.useContext(ut), {
    isParentOpen: i,
    submenuCtx: r,
    dispatch: a,
    updateItems: f
  } = c.useContext(Ut), b = () => {
    !n && !s && a(O.SET, e.current);
  }, u = () => {
    !s && a(O.UNSET, e.current);
  }, p = (l) => {
    n && !l.currentTarget.contains(l.relatedTarget) && u();
  }, S = (l) => {
    s || (l.stopPropagation(), r.on(o, b, b));
  }, h = (l, d) => {
    r.off(), !d && u();
  };
  return Ln(s, e, f), c.useEffect(() => {
    n && i && t.current && t.current.focus();
  }, [t, n, i]), {
    setHover: b,
    onBlur: p,
    onPointerMove: S,
    onPointerLeave: h
  };
}, st = /* @__PURE__ */ Dn("MenuItem", function({
  className: t,
  value: n,
  href: s,
  type: o,
  checked: i,
  disabled: r,
  children: a,
  onClick: f,
  isHovering: b,
  itemRef: u,
  externalRef: p,
  ...S
}) {
  const h = !!r, {
    setHover: l,
    ...d
  } = os(u, u, b, h), m = c.useContext(Mn), w = c.useContext(Hi), v = o === "radio", C = o === "checkbox", R = !!s && !h && !v && !C, P = v ? w.value === n : C ? !!i : !1, A = (I) => {
    if (h) {
      I.stopPropagation(), I.preventDefault();
      return;
    }
    const j = {
      value: n,
      syntheticEvent: I
    };
    I.key !== void 0 && (j.key = I.key), C && (j.checked = !P), v && (j.name = w.name), X(f, j), v && X(w.onRadioChange, j), m.handleClick(j, C || v);
  }, M = (I) => {
    if (b)
      switch (I.key) {
        case U.ENTER:
          I.preventDefault();
        case U.SPACE:
          R ? u.current.click() : A(I);
      }
  }, V = c.useMemo(() => ({
    type: o,
    disabled: h,
    hover: b,
    checked: P,
    anchor: R
  }), [o, h, b, P, R]), se = We({
    ...d,
    onPointerDown: l,
    onKeyDown: M,
    onClick: A
  }, S), Q = {
    role: v ? "menuitemradio" : C ? "menuitemcheckbox" : Vt,
    "aria-checked": v || C ? P : void 0,
    ...Ft(h, b),
    ...se,
    ref: dt(p, u),
    className: ve({
      block: pe,
      element: En,
      modifiers: V,
      className: t
    }),
    children: c.useMemo(() => X(a, V), [a, V])
  };
  return R ? /* @__PURE__ */ D.jsx("li", {
    role: Pn,
    children: /* @__PURE__ */ D.jsx("a", {
      href: s,
      ...Q
    })
  }) : /* @__PURE__ */ D.jsx("li", {
    ...Q
  });
}), as = /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(function({
  className: t,
  ...n
}, s) {
  return /* @__PURE__ */ D.jsx("li", {
    role: "separator",
    ...n,
    ref: s,
    className: ve({
      block: pe,
      element: zi,
      className: t
    })
  });
}));
const cs = "szh-menu", ls = "item", us = (e) => (t) => (n) => {
  let s = `.${e}`;
  return t && (s += `__${t}`), n && (s += `--${n}`), s;
}, An = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((s) => {
    const o = s.split("-").reduce((i, r) => `${i}${r[0].toUpperCase()}${r.slice(1)}`);
    Object.defineProperty(n, o, {
      value: e(s),
      enumerable: !0
    });
  }), n;
}, ds = ["dir-left", "dir-right", "dir-top", "dir-bottom"], xn = /* @__PURE__ */ us(cs);
[...ds];
const un = /* @__PURE__ */ An(/* @__PURE__ */ xn(ls), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), fs = li(ss)`
  ${un.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${un.typeCheckbox} {
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
`, hs = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: s
  } = n, o = s.getVisibleLeafColumns().length;
  return /* @__PURE__ */ F(fs, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    /* @__PURE__ */ F(st, { onClick: () => t.column.toggleSorting(!1), children: [
      /* @__PURE__ */ y(Y, { icon: Sn.faArrowUpAZ }),
      " Сортировать по возрастанию"
    ] }),
    /* @__PURE__ */ F(st, { onClick: () => t.column.toggleSorting(!0), children: [
      /* @__PURE__ */ y(Y, { icon: Cn.faArrowDownZA }),
      "Сортировать по убыванию"
    ] }),
    /* @__PURE__ */ F(st, { disabled: o === 1, onClick: () => t.column.toggleVisibility(), children: [
      /* @__PURE__ */ y(Y, { icon: yn.faEyeSlash }),
      "Скрыть колонку"
    ] }),
    /* @__PURE__ */ y(as, {}),
    /* @__PURE__ */ y(rs, { label: /* @__PURE__ */ F(si, { children: [
      /* @__PURE__ */ y(Y, { icon: wn.faTableColumns }),
      "Колонки"
    ] }), children: s.getAllLeafColumns().map((i) => /* @__PURE__ */ y(st, { type: "checkbox", checked: i.getIsVisible(), disabled: o === 1 && i.getIsVisible(), onClick: (r) => {
      r.keepOpen = !0, i.toggleVisibility();
    }, children: jt(i.columnDef.header, n) }, i.id)) })
  ] });
}, gs = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: s,
    getContext: o,
    getResizeHandler: i
  } = e;
  return /* @__PURE__ */ F("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, n.getIsResizing() && {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  }, Et`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: t, children: [
    /* @__PURE__ */ F("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, Et`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ F("div", { onClick: () => {
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
        s ? null : jt(n.columnDef.header, o()),
        " ",
        n.getIsSorted() === "asc" && /* @__PURE__ */ y(Y, { icon: bn.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ y(Y, { icon: vn.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ y(hs, { header: e, children: ({
        open: r
      }) => /* @__PURE__ */ y("div", { className: "menu", css: [{
        position: "relative",
        right: "0px",
        padding: "0.5rem",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
        }
      }, {
        cursor: "pointer"
      }, r ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ y(Y, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: pn.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ y("div", { css: [{
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
    }], onMouseDown: i(), onTouchStart: i(), className: "resizer" })
  ] });
}, ms = ({
  ...e
}) => /* @__PURE__ */ y("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ y("tr", { children: t.headers.map((n) => /* @__PURE__ */ y(gs, { ...n }, n.id)) }, t.id)) }), ps = ({
  ...e
}) => /* @__PURE__ */ y(ri, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ F("table", { css: [{
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
  fontSize: "0.75rem",
  lineHeight: "1rem"
}, Et`
            table-layout: fixed;
          `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((t) => /* @__PURE__ */ y("colgroup", { children: t.headers.map((n) => /* @__PURE__ */ y("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, t.id)),
  /* @__PURE__ */ y(ms, { ...e }),
  /* @__PURE__ */ y("tbody", { children: e.getRowModel().rows.map((t) => /* @__PURE__ */ y(Ii, { ...t }, t.id)) })
] }) });
var zn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrows-rotate", s = 512, o = 512, i = [128472, "refresh", "sync"], r = "f021", a = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(zn);
var jn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-right", s = 512, o = 512, i = [187, "angle-double-right"], r = "f101", a = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(jn);
var Hn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-right", s = 320, o = 512, i = [8250], r = "f105", a = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(Hn);
var _n = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-left", s = 320, o = 512, i = [8249], r = "f104", a = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(_n);
var Fn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-left", s = 512, o = 512, i = [171, "angle-double-left"], r = "f100", a = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(Fn);
const vs = ({
  refetch: e,
  recordsTotal: t = 0,
  ...n
}) => {
  const s = n.getState(), {
    pagination: o
  } = s, i = c.useMemo(() => o.pageIndex * o.pageSize + (t > 0 ? 1 : 0), [o, t]), r = c.useMemo(() => Math.min(t, (o.pageIndex + 1) * o.pageSize), [o, t]);
  return /* @__PURE__ */ F("div", { css: {
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
    /* @__PURE__ */ F("div", { css: {
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
      /* @__PURE__ */ y(Ae, { onClick: () => n.setPageIndex(0), size: "small", disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ y(Y, { icon: Fn.faAnglesLeft }) }),
      /* @__PURE__ */ y(Ae, { size: "small", onClick: () => n.previousPage(), disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ y(Y, { icon: _n.faAngleLeft }) }),
      /* @__PURE__ */ F("span", { css: {
        display: "none",
        alignItems: "center",
        gap: "0.5rem",
        whiteSpace: "nowrap",
        "@container (min-width: 220px)": {
          display: "flex"
        }
      }, children: [
        /* @__PURE__ */ y("span", { css: {
          display: "none",
          "@container (min-width: 610px)": {
            display: "block"
          }
        }, children: "Страница" }),
        /* @__PURE__ */ y("input", { type: "number", value: n.getState().pagination.pageIndex + 1, onChange: (a) => {
          const f = a.target.value ? Number(a.target.value) - 1 : 0;
          n.setPageIndex(f);
        }, css: {
          width: "3rem",
          borderWidth: "1px",
          padding: "0.25rem"
        } }),
        "из ",
        n.getPageCount()
      ] }),
      /* @__PURE__ */ y(Ae, { size: "small", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ y(Y, { icon: Hn.faAngleRight }) }),
      /* @__PURE__ */ y(Ae, { size: "small", onClick: () => n.setPageIndex(n.getPageCount() - 1), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ y(Y, { icon: jn.faAnglesRight }) }),
      e && /* @__PURE__ */ y(Ae, { size: "small", disabled: n.isFetching, onClick: e, children: /* @__PURE__ */ y(Y, { spin: n.isFetching, icon: zn.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ F("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ F("div", { css: {
        display: "flex",
        gap: "0.125rem"
      }, children: [
        /* @__PURE__ */ y("span", { css: {
          display: "none",
          "@container (min-width: 530px)": {
            display: "block"
          }
        }, children: "Отражаются записи" }),
        /* @__PURE__ */ F("span", { css: {
          display: "none",
          "@container (min-width: 400px)": {
            display: "block"
          }
        }, children: [
          "c ",
          i,
          " по ",
          r,
          ","
        ] }),
        /* @__PURE__ */ F("span", { css: {
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
      /* @__PURE__ */ y("select", { css: {
        display: "none",
        borderWidth: "1px",
        padding: "0.25rem",
        "@container (min-width: 300px)": {
          display: "block"
        }
      }, value: o.pageSize, onChange: (a) => {
        n.setPageSize(Number(a.target.value));
      }, children: [25, 50, 100].map((a) => /* @__PURE__ */ y("option", { value: a, children: a }, a)) })
    ] })
  ] });
}, bs = hn.memo(vs), ws = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: s,
  ...o
}) => {
  const i = ui({
    getCoreRowModel: di(),
    columnResizeMode: "onChange",
    ...o,
    columns: e,
    data: t
  });
  return {
    isLoading: n,
    isFetching: s,
    ...i
  };
}, ys = () => {
  const e = oi();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function Cs(e, t) {
  let n;
  typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const {
    url: s,
    params: o,
    ...i
  } = n, r = ys();
  return Ni({
    queryKey: o ? [s, o, r.defaults.headers.Authorization || ""] : [s, r.defaults.headers.Authorization || ""],
    queryFn: async ({
      signal: a
    }) => {
      const {
        data: f
      } = await r.get(s, {
        params: o,
        signal: a
      });
      return f;
    },
    ...i
  });
}
const Ss = (e, t, {
  defaultSorting: n = [],
  defaultPageSize: s = 25,
  defaultColumnVisibility: o = {},
  ...i
} = {}) => {
  var v, C;
  const [r, a] = c.useState({
    pageIndex: 0,
    pageSize: s
  }), [f, b] = c.useState(n), [u, p] = c.useState(o), S = c.useMemo(() => {
    const {
      pageIndex: R,
      pageSize: P
    } = r;
    return {
      start: R * P,
      length: P,
      sort: JSON.stringify(f.map((A) => ({
        property: A.id,
        direction: A.desc ? "DESC" : "ASC"
      })))
    };
  }, [r, f]), h = Cs(e, {
    params: S,
    placeholderData: ai
  }), l = c.useMemo(() => {
    var R, P;
    return isNaN(Number((R = h.data) == null ? void 0 : R.recordsFiltered)) ? 0 : Number((P = h.data) == null ? void 0 : P.recordsFiltered);
  }, [(v = h.data) == null ? void 0 : v.recordsFiltered]), d = c.useMemo(() => l > 0 ? Math.ceil(l / r.pageSize) : 1, [r.pageSize, l]), m = ws({
    ...i,
    columns: t,
    data: (C = h.data) == null ? void 0 : C.data,
    isLoading: h.isLoading,
    isFetching: h.isFetching,
    manualPagination: !0,
    onPaginationChange: a,
    onSortingChange: b,
    onColumnVisibilityChange: p,
    pageCount: d,
    state: {
      ...i == null ? void 0 : i.state,
      pagination: r,
      sorting: f,
      columnVisibility: u
    }
  }), w = c.useCallback(() => {
    h.refetch();
  }, [h]);
  return {
    ...m,
    recordsTotal: l,
    refetch: w
  };
}, Es = [{
  header: "iD",
  accessorKey: "id",
  size: 50,
  cell: (e) => e.getValue()
}, {
  header: "E-mail",
  accessorKey: "email",
  cell: (e) => e.getValue()
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
}], Os = () => {
  const e = Ss("/api/rest/user", Es, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
    // defaultColumnVisibility: {
    //   id: false,
    // },
  });
  return /* @__PURE__ */ y(ci, { bottomToolbarProps: {
    center: /* @__PURE__ */ y(bs, { ...e })
  }, children: /* @__PURE__ */ y(ps, { ...e }) });
};
export {
  Os as default
};
