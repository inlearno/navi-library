var wt = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var h = (e, t, n) => (wt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), T = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, M = (e, t, n, i) => (wt(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
var L = (e, t, n) => (wt(e, t, "access private method"), n);
import { S as Yn, s as St, n as Jn, i as Jt, a as en, t as es, f as ts, c as ns, r as tn, b as fn, u as ss, j as y, d as W, F as is, e as rs, g as os, k as as } from "./library-834fe54c.js";
import { P as cs } from "./Panel-4fc1e0b9.js";
import { j as D, n as ls, a as Et, I as Ae } from "./mui-a200cd22.js";
import { f as jt, u as us, g as ds } from "./table-46c094fe.js";
import { r as c, R as hn, c as xe } from "./react-72acea58.js";
import { F as Y } from "./icons-a8a50daa.js";
var K, P, Re, _, de, Me, se, _e, Pe, Ne, fe, he, oe, ge, me, ze, Fe, Rt, Ue, Mt, Ve, Pt, Be, Nt, Qe, Tt, $e, It, Ke, Ot, lt, gn, dn, fs = (dn = class extends Yn {
  constructor(t, n) {
    super();
    T(this, me);
    T(this, Fe);
    T(this, Ue);
    T(this, Ve);
    T(this, Be);
    T(this, Qe);
    T(this, $e);
    T(this, Ke);
    T(this, lt);
    T(this, K, void 0);
    T(this, P, void 0);
    T(this, Re, void 0);
    T(this, _, void 0);
    T(this, de, void 0);
    T(this, Me, void 0);
    T(this, se, void 0);
    T(this, _e, void 0);
    T(this, Pe, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    T(this, Ne, void 0);
    T(this, fe, void 0);
    T(this, he, void 0);
    T(this, oe, void 0);
    T(this, ge, void 0);
    M(this, P, void 0), M(this, Re, void 0), M(this, _, void 0), M(this, ge, /* @__PURE__ */ new Set()), M(this, K, t), this.options = n, M(this, se, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (h(this, P).addObserver(this), nn(h(this, P), this.options) ? L(this, me, ze).call(this) : this.updateResult(), L(this, Be, Nt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return kt(
      h(this, P),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return kt(
      h(this, P),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), L(this, Qe, Tt).call(this), L(this, $e, It).call(this), h(this, P).removeObserver(this);
  }
  setOptions(t, n) {
    const i = this.options, o = h(this, P);
    if (this.options = h(this, K).defaultQueryOptions(t), St(i, this.options) || h(this, K).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: h(this, P),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = i.queryKey), L(this, Ke, Ot).call(this);
    const s = this.hasListeners();
    s && sn(
      h(this, P),
      o,
      this.options,
      i
    ) && L(this, me, ze).call(this), this.updateResult(n), s && (h(this, P) !== o || this.options.enabled !== i.enabled || this.options.staleTime !== i.staleTime) && L(this, Fe, Rt).call(this);
    const r = L(this, Ue, Mt).call(this);
    s && (h(this, P) !== o || this.options.enabled !== i.enabled || r !== h(this, oe)) && L(this, Ve, Pt).call(this, r);
  }
  getOptimisticResult(t) {
    const n = h(this, K).getQueryCache().build(h(this, K), t), i = this.createResult(n, t);
    return gs(this, i) && (M(this, _, i), M(this, Me, this.options), M(this, de, h(this, P).state)), i;
  }
  getCurrentResult() {
    return h(this, _);
  }
  trackResult(t) {
    const n = {};
    return Object.keys(t).forEach((i) => {
      Object.defineProperty(n, i, {
        configurable: !1,
        enumerable: !0,
        get: () => (h(this, ge).add(i), t[i])
      });
    }), n;
  }
  getCurrentQuery() {
    return h(this, P);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = h(this, K).defaultQueryOptions(t), i = h(this, K).getQueryCache().build(h(this, K), n);
    return i.isFetchingOptimistic = !0, i.fetch().then(() => this.createResult(i, n));
  }
  fetch(t) {
    return L(this, me, ze).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), h(this, _)));
  }
  createResult(t, n) {
    var x;
    const i = h(this, P), o = this.options, s = h(this, _), r = h(this, de), a = h(this, Me), b = t !== i ? t.state : h(this, Re), { state: u } = t;
    let { error: m, errorUpdatedAt: S, fetchStatus: v, status: l } = u, d = !1, g;
    if (n._optimisticResults) {
      const R = this.hasListeners(), U = !R && nn(t, n), ie = R && sn(t, i, n, o);
      (U || ie) && (v = ns(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (l = "pending")), n._optimisticResults === "isRestoring" && (v = "idle");
    }
    if (n.select && typeof u.data < "u")
      if (s && u.data === (r == null ? void 0 : r.data) && n.select === h(this, _e))
        g = h(this, Pe);
      else
        try {
          M(this, _e, n.select), g = n.select(u.data), g = tn(s == null ? void 0 : s.data, g, n), M(this, Pe, g), M(this, se, null);
        } catch (R) {
          M(this, se, R);
        }
    else
      g = u.data;
    if (typeof n.placeholderData < "u" && typeof g > "u" && l === "pending") {
      let R;
      if (s != null && s.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
        R = s.data;
      else if (R = typeof n.placeholderData == "function" ? n.placeholderData(
        (x = h(this, Ne)) == null ? void 0 : x.state.data,
        h(this, Ne)
      ) : n.placeholderData, n.select && typeof R < "u")
        try {
          R = n.select(R), M(this, se, null);
        } catch (U) {
          M(this, se, U);
        }
      typeof R < "u" && (l = "success", g = tn(
        s == null ? void 0 : s.data,
        R,
        n
      ), d = !0);
    }
    h(this, se) && (m = h(this, se), g = h(this, Pe), S = Date.now(), l = "error");
    const w = v === "fetching", p = l === "pending", C = l === "error", N = p && w;
    return {
      status: l,
      fetchStatus: v,
      isPending: p,
      isSuccess: l === "success",
      isError: C,
      isInitialLoading: N,
      isLoading: N,
      data: g,
      dataUpdatedAt: u.dataUpdatedAt,
      error: m,
      errorUpdatedAt: S,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > b.dataUpdateCount || u.errorUpdateCount > b.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !p,
      isLoadingError: C && u.dataUpdatedAt === 0,
      isPaused: v === "paused",
      isPlaceholderData: d,
      isRefetchError: C && u.dataUpdatedAt !== 0,
      isStale: Ht(t, n),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const n = h(this, _), i = this.createResult(h(this, P), this.options);
    if (M(this, de, h(this, P).state), M(this, Me, this.options), h(this, de).data !== void 0 && M(this, Ne, h(this, P)), St(i, n))
      return;
    M(this, _, i);
    const o = {}, s = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: r } = this.options, a = typeof r == "function" ? r() : r;
      if (a === "all" || !a && !h(this, ge).size)
        return !0;
      const f = new Set(
        a ?? h(this, ge)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(h(this, _)).some((b) => {
        const u = b;
        return h(this, _)[u] !== n[u] && f.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (o.listeners = !0), L(this, lt, gn).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && L(this, Be, Nt).call(this);
  }
}, K = new WeakMap(), P = new WeakMap(), Re = new WeakMap(), _ = new WeakMap(), de = new WeakMap(), Me = new WeakMap(), se = new WeakMap(), _e = new WeakMap(), Pe = new WeakMap(), Ne = new WeakMap(), fe = new WeakMap(), he = new WeakMap(), oe = new WeakMap(), ge = new WeakMap(), me = new WeakSet(), ze = function(t) {
  L(this, Ke, Ot).call(this);
  let n = h(this, P).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Jn)), n;
}, Fe = new WeakSet(), Rt = function() {
  if (L(this, Qe, Tt).call(this), Jt || h(this, _).isStale || !en(this.options.staleTime))
    return;
  const n = es(
    h(this, _).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  M(this, fe, setTimeout(() => {
    h(this, _).isStale || this.updateResult();
  }, n));
}, Ue = new WeakSet(), Mt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(h(this, P)) : this.options.refetchInterval) ?? !1;
}, Ve = new WeakSet(), Pt = function(t) {
  L(this, $e, It).call(this), M(this, oe, t), !(Jt || this.options.enabled === !1 || !en(h(this, oe)) || h(this, oe) === 0) && M(this, he, setInterval(() => {
    (this.options.refetchIntervalInBackground || ts.isFocused()) && L(this, me, ze).call(this);
  }, h(this, oe)));
}, Be = new WeakSet(), Nt = function() {
  L(this, Fe, Rt).call(this), L(this, Ve, Pt).call(this, L(this, Ue, Mt).call(this));
}, Qe = new WeakSet(), Tt = function() {
  h(this, fe) && (clearTimeout(h(this, fe)), M(this, fe, void 0));
}, $e = new WeakSet(), It = function() {
  h(this, he) && (clearInterval(h(this, he)), M(this, he, void 0));
}, Ke = new WeakSet(), Ot = function() {
  const t = h(this, K).getQueryCache().build(h(this, K), this.options);
  if (t === h(this, P))
    return;
  const n = h(this, P);
  M(this, P, t), M(this, Re, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, lt = new WeakSet(), gn = function(t) {
  fn.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(h(this, _));
    }), h(this, K).getQueryCache().notify({
      query: h(this, P),
      type: "observerResultsUpdated"
    });
  });
}, dn);
function hs(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function nn(e, t) {
  return hs(e, t) || e.state.dataUpdatedAt > 0 && kt(e, t, t.refetchOnMount);
}
function kt(e, t, n) {
  if (t.enabled !== !1) {
    const i = typeof n == "function" ? n(e) : n;
    return i === "always" || i !== !1 && Ht(e, t);
  }
  return !1;
}
function sn(e, t, n, i) {
  return n.enabled !== !1 && (e !== t || i.enabled === !1) && (!n.suspense || e.state.status !== "error") && Ht(e, n);
}
function Ht(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function gs(e, t) {
  return !St(e.getCurrentResult(), t);
}
var mn = c.createContext(!1), ms = () => c.useContext(mn);
mn.Provider;
function ps() {
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
var vs = c.createContext(ps()), bs = () => c.useContext(vs);
function ws(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var ys = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, Cs = (e) => {
  c.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Ss = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: i
}) => e.isError && !t.isReset() && !e.isFetching && ws(n, [e.error, i]), Es = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Rs = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Ms = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Ps(e, t, n) {
  const i = ss(n), o = ms(), s = bs(), r = i.defaultQueryOptions(e);
  r._optimisticResults = o ? "isRestoring" : "optimistic", Es(r), ys(r, s), Cs(s);
  const [a] = c.useState(
    () => new t(
      i,
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
  }, [r, a]), Rs(r, f))
    throw Ms(r, a, s);
  if (Ss({
    result: f,
    errorResetBoundary: s,
    throwOnError: r.throwOnError,
    query: a.getCurrentQuery()
  }))
    throw f.error;
  return r.notifyOnChangeProps ? f : a.trackResult(f);
}
function Ns(e, t) {
  return Ps(e, fs, t);
}
const Ts = ({
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
}], children: /* @__PURE__ */ y("span", { css: [{
  position: "relative"
}], children: jt(e.column.columnDef.cell, e.getContext()) }) }, e.id), Is = hn.memo(Ts), Os = (e) => /* @__PURE__ */ y("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], children: e.getVisibleCells().map((t) => /* @__PURE__ */ y(Is, { ...t }, t.id)) }, e.id);
var pn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "caret-down", i = 320, o = 512, s = [], r = "f0d7", a = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(pn);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", i = 384, o = 512, s = [8595], r = "f063", a = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(vn);
var bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", i = 384, o = 512, s = [8593], r = "f062", a = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(bn);
var wn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", i = 512, o = 512, s = ["columns"], r = "f0db", a = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(wn);
var yn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "eye-slash", i = 640, o = 512, s = [], r = "f070", a = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faEyeSlash = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(yn);
var Cn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", i = 576, o = 512, s = ["sort-alpha-desc", "sort-alpha-down-alt"], r = "f881", a = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(Cn);
var Sn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", i = 576, o = 512, s = ["sort-alpha-up"], r = "f15e", a = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(Sn);
const _t = (e) => !!e && e[0] === "o", Dt = xe.unstable_batchedUpdates || ((e) => e()), Se = (e, t, n = 1e-4) => Math.abs(e - t) < n, je = (e, t) => e === !0 || !!(e && e[t]), X = (e, t) => typeof e == "function" ? e(t) : e, ks = "_szhsinMenu", Ds = (e) => e[ks], We = (e, t) => (t && Object.keys(t).forEach((n) => {
  const i = e[n], o = t[n];
  typeof o == "function" && i ? e[n] = (...s) => {
    o(...s), i(...s);
  } : e[n] = o;
}), e), Ls = (e) => {
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
}, yt = (e) => {
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
  className: i
}) => c.useMemo(() => {
  const o = t ? `${e}__${t}` : e;
  let s = o;
  n && Object.keys(n).forEach((a) => {
    const f = n[a];
    f && (s += ` ${o}--${f === !0 ? a : `${a}-${f}`}`);
  });
  let r = typeof i == "function" ? i(n) : i;
  return typeof r == "string" && (r = r.trim(), r && (s += ` ${r}`)), s;
}, [e, t, n, i]), As = "szh-menu-container", pe = "szh-menu", zs = "arrow", En = "item", xs = "divider", js = "submenu", Rn = /* @__PURE__ */ c.createContext(), Ut = /* @__PURE__ */ c.createContext({}), Lt = /* @__PURE__ */ c.createContext({}), Mn = /* @__PURE__ */ c.createContext({}), Hs = /* @__PURE__ */ c.createContext({}), ut = /* @__PURE__ */ c.createContext({}), F = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), k = /* @__PURE__ */ Object.freeze({
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
}), _s = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Ct = "absolute", Pn = "presentation", Vt = "menuitem", on = {
  "aria-hidden": !0,
  role: Vt
}, Fs = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: i,
  isOpen: o,
  theming: s,
  transition: r,
  onClose: a
}) => {
  const f = je(r, "item"), b = ({
    key: m
  }) => {
    switch (m) {
      case F.ESC:
        X(a, {
          key: m,
          reason: He.CANCEL
        });
        break;
    }
  }, u = (m) => {
    o && !m.currentTarget.contains(m.relatedTarget) && X(a, {
      reason: He.BLUR
    });
  };
  return /* @__PURE__ */ D.jsx("div", {
    ...We({
      onKeyDown: b,
      onBlur: u
    }, n),
    className: ve({
      block: As,
      modifiers: c.useMemo(() => ({
        theme: s,
        itemTransition: f
      }), [s, f]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: i
  });
}, Us = () => {
  let e, t = 0;
  return {
    toggle: (n) => {
      n ? t++ : t--, t = Math.max(t, 0);
    },
    on: (n, i, o) => {
      t ? e || (e = setTimeout(() => {
        e = 0, i();
      }, n)) : o == null || o();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, Vs = (e, t) => {
  const [n, i] = c.useState(), s = c.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, r = c.useCallback((f, b) => {
    const {
      items: u
    } = s;
    if (!f)
      s.items = [];
    else if (b)
      u.push(f);
    else {
      const m = u.indexOf(f);
      m > -1 && (u.splice(m, 1), f.contains(document.activeElement) && (t.current.focus(), i()));
    }
    s.hoverIndex = -1, s.sorted = !1;
  }, [s, t]), a = c.useCallback((f, b, u) => {
    const {
      items: m,
      hoverIndex: S
    } = s, v = () => {
      if (s.sorted)
        return;
      const g = e.current.querySelectorAll(".szh-menu__item");
      m.sort((w, p) => rn(g, w) - rn(g, p)), s.sorted = !0;
    };
    let l = -1, d;
    switch (f) {
      case k.RESET:
        break;
      case k.SET:
        d = b;
        break;
      case k.UNSET:
        d = (g) => g === b ? void 0 : g;
        break;
      case k.FIRST:
        v(), l = 0, d = m[l];
        break;
      case k.LAST:
        v(), l = m.length - 1, d = m[l];
        break;
      case k.SET_INDEX:
        v(), l = u, d = m[l];
        break;
      case k.INCREASE:
        v(), l = S, l < 0 && (l = m.indexOf(b)), l++, l >= m.length && (l = 0), d = m[l];
        break;
      case k.DECREASE:
        v(), l = S, l < 0 && (l = m.indexOf(b)), l--, l < 0 && (l = m.length - 1), d = m[l];
        break;
    }
    d || (l = -1), i(d), s.hoverIndex = l;
  }, [e, s]);
  return {
    hoverItem: n,
    dispatch: a,
    updateItems: r
  };
}, Bs = (e, t, n, i) => {
  const o = t.current.getBoundingClientRect(), s = e.current.getBoundingClientRect(), r = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), a = Ls(i), f = (l) => l + s.left - r.left - a.left, b = (l) => l + s.left + o.width - r.right + a.right, u = (l) => l + s.top - r.top - a.top, m = (l) => l + s.top + o.height - r.bottom + a.bottom;
  return {
    menuRect: o,
    containerRect: s,
    getLeftOverflow: f,
    getRightOverflow: b,
    getTopOverflow: u,
    getBottomOverflow: m,
    confineHorizontally: (l) => {
      let d = f(l);
      if (d < 0)
        l -= d;
      else {
        const g = b(l);
        g > 0 && (l -= g, d = f(l), d < 0 && (l -= d));
      }
      return l;
    },
    confineVertically: (l) => {
      let d = u(l);
      if (d < 0)
        l -= d;
      else {
        const g = m(l);
        g > 0 && (l -= g, d = u(l), d < 0 && (l -= d));
      }
      return l;
    }
  };
}, Qs = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: i,
  menuRect: o
}) => {
  let s = n.top - i.top - t + n.height / 2;
  const r = e.current.offsetHeight * 1.25;
  return s = Math.max(r, s), s = Math.min(s, o.height - r), s;
}, $s = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: i,
  placeLeftX: o,
  placeRightX: s,
  getLeftOverflow: r,
  getRightOverflow: a,
  confineHorizontally: f,
  confineVertically: b,
  arrowRef: u,
  arrow: m,
  direction: S,
  position: v
}) => {
  let l = S, d = i;
  v !== "initial" && (d = b(d), v === "anchor" && (d = Math.min(d, e.bottom - t.top), d = Math.max(d, e.top - t.top - n.height)));
  let g, w, p;
  return l === "left" ? (g = o, v !== "initial" && (w = r(g), w < 0 && (p = a(s), (p <= 0 || -w > p) && (g = s, l = "right")))) : (g = s, v !== "initial" && (p = a(g), p > 0 && (w = r(o), (w >= 0 || -w < p) && (g = o, l = "left")))), v === "auto" && (g = f(g)), {
    arrowY: m ? Qs({
      menuY: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: g,
    y: d,
    computedDirection: l
  };
}, Ks = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: i,
  menuRect: o
}) => {
  let s = n.left - i.left - t + n.width / 2;
  const r = e.current.offsetWidth * 1.25;
  return s = Math.max(r, s), s = Math.min(s, o.width - r), s;
}, Ws = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: i,
  placeTopY: o,
  placeBottomY: s,
  getTopOverflow: r,
  getBottomOverflow: a,
  confineHorizontally: f,
  confineVertically: b,
  arrowRef: u,
  arrow: m,
  direction: S,
  position: v
}) => {
  let l = S === "top" ? "top" : "bottom", d = i;
  v !== "initial" && (d = f(d), v === "anchor" && (d = Math.min(d, e.right - t.left), d = Math.max(d, e.left - t.left - n.width)));
  let g, w, p;
  return l === "top" ? (g = o, v !== "initial" && (w = r(g), w < 0 && (p = a(s), (p <= 0 || -w > p) && (g = s, l = "bottom")))) : (g = s, v !== "initial" && (p = a(g), p > 0 && (w = r(o), (w >= 0 || -w < p) && (g = o, l = "top")))), v === "auto" && (g = b(g)), {
    arrowX: m ? Ks({
      menuX: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: d,
    y: g,
    computedDirection: l
  };
}, Xs = ({
  arrow: e,
  align: t,
  direction: n,
  gap: i,
  shift: o,
  position: s,
  anchorRect: r,
  arrowRef: a,
  positionHelpers: f
}) => {
  const {
    menuRect: b,
    containerRect: u
  } = f, m = n === "left" || n === "right";
  let S = m ? i : o, v = m ? o : i;
  if (e) {
    const O = a.current;
    m ? S += O.offsetWidth : v += O.offsetHeight;
  }
  const l = r.left - u.left - b.width - S, d = r.right - u.left + S, g = r.top - u.top - b.height - v, w = r.bottom - u.top + v;
  let p, C;
  t === "end" ? (p = r.right - u.left - b.width, C = r.bottom - u.top - b.height) : t === "center" ? (p = r.left - u.left - (b.width - r.width) / 2, C = r.top - u.top - (b.height - r.height) / 2) : (p = r.left - u.left, C = r.top - u.top), p += S, C += v;
  const N = {
    ...f,
    anchorRect: r,
    placeLeftX: l,
    placeRightX: d,
    placeLeftorRightY: C,
    placeTopY: g,
    placeBottomY: w,
    placeToporBottomX: p,
    arrowRef: a,
    arrow: e,
    direction: n,
    position: s
  };
  switch (n) {
    case "left":
    case "right":
      return $s(N);
    case "top":
    case "bottom":
    default:
      return Ws(N);
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
  arrow: i,
  arrowProps: o = {},
  anchorPoint: s,
  anchorRef: r,
  containerRef: a,
  containerProps: f,
  focusProps: b,
  externalRef: u,
  parentScrollingRef: m,
  align: S = "start",
  direction: v = "bottom",
  position: l = "auto",
  overflow: d = "visible",
  setDownOverflow: g,
  repositionFlag: w,
  captureFocus: p = !0,
  state: C,
  endTransition: N,
  isDisabled: O,
  menuItemFocus: x,
  gap: R = 0,
  shift: U = 0,
  children: ie,
  onClose: B,
  ...I
}) => {
  const [j, ae] = c.useState({
    x: cn,
    y: cn
  }), [Te, te] = c.useState({}), [A, ce] = c.useState(), [Q, Xe] = c.useState(v), [J] = c.useState(Us), [Ie, Oe] = c.useReducer((E) => E + 1, 1), {
    transition: qe,
    boundingBoxRef: ke,
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
  } = c.useContext(Lt), $ = c.useRef(null), et = c.useRef(), Bt = c.useRef(), Qt = c.useRef(!1), tt = c.useRef({
    width: 0,
    height: 0
  }), $t = c.useRef(() => {
  }), {
    hoverItem: gt,
    dispatch: q,
    updateItems: nt
  } = Vs($, et), G = _t(C), Kt = je(qe, "open"), Wt = je(qe, "close"), ee = ft.current, Un = (E) => {
    switch (E.key) {
      case F.HOME:
        q(k.FIRST);
        break;
      case F.END:
        q(k.LAST);
        break;
      case F.UP:
        q(k.DECREASE, gt);
        break;
      case F.DOWN:
        q(k.INCREASE, gt);
        break;
      case F.SPACE:
        E.target && E.target.className.indexOf(pe) !== -1 && E.preventDefault();
        return;
      default:
        return;
    }
    E.preventDefault(), E.stopPropagation();
  }, Vn = () => {
    C === "closing" && ce(), X(N);
  }, Bn = (E) => {
    E.stopPropagation(), J.on(ht, () => {
      q(k.RESET), et.current.focus();
    });
  }, Qn = (E) => {
    E.target === E.currentTarget && J.off();
  }, ue = c.useCallback((E) => {
    var V;
    const ne = r ? (V = r.current) == null ? void 0 : V.getBoundingClientRect() : s ? {
      left: s.x,
      right: s.x,
      top: s.y,
      bottom: s.y,
      width: 0,
      height: 0
    } : null;
    if (!ne)
      return;
    ee.menu || (ee.menu = (ke ? ke.current : yt(Ze.current)) || window);
    const Z = Bs(a, $, ee.menu, Ge);
    let {
      arrowX: H,
      arrowY: be,
      x: we,
      y: re,
      computedDirection: vt
    } = Xs({
      arrow: i,
      align: S,
      direction: v,
      gap: R,
      shift: U,
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
      const Yt = tt.current.height, st = Zn(re);
      if (st > 0 || Se(st, 0) && Se(ye, Yt))
        Ce = ye - st, bt = st;
      else {
        const Le = Gn(re);
        (Le < 0 || Se(Le, 0) && Se(ye, Yt)) && (Ce = ye + Le, bt = 0 - Le, Ce >= 0 && (re -= Le));
      }
      Ce >= 0 ? (ye = Ce, ce({
        height: Ce,
        overflowAmt: bt
      })) : ce();
    }
    i && te({
      x: H,
      y: be
    }), ae({
      x: we,
      y: re
    }), Xe(vt), tt.current = {
      width: Zt.width,
      height: ye
    };
  }, [i, S, Ge, v, R, U, l, d, s, r, a, ke, Ze, ee]);
  rt(() => {
    G && (ue(), Qt.current && Oe()), Qt.current = G, $t.current = ue;
  }, [G, ue, z]), rt(() => {
    A && !g && ($.current.scrollTop = 0);
  }, [A, g]), rt(() => nt, [nt]), c.useEffect(() => {
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
    let V = De;
    if (ee.anchors.length && V === "initial" && (V = "auto"), V === "initial")
      return;
    const ne = () => {
      V === "auto" ? Dt(() => ue(!0)) : X(B, {
        reason: He.SCROLL
      });
    }, Z = ee.anchors.concat(De !== "initial" ? E : []);
    return Z.forEach((H) => H.addEventListener("scroll", ne)), () => Z.forEach((H) => H.removeEventListener("scroll", ne));
  }, [le, ee, G, B, De, ue]);
  const Xt = !!A && A.overflowAmt > 0;
  c.useEffect(() => {
    if (Xt || !G || !m)
      return;
    const E = () => Dt(ue), V = m.current;
    return V.addEventListener("scroll", E), () => V.removeEventListener("scroll", E);
  }, [G, Xt, m, ue]), c.useEffect(() => {
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
      be === 0 || we === 0 || Se(be, tt.current.width, 1) && Se(we, tt.current.height, 1) || xe.flushSync(() => {
        $t.current(), Oe();
      });
    }), V = $.current;
    return E.observe(V, {
      box: "border-box"
    }), () => E.unobserve(V);
  }, [Ye]), c.useEffect(() => {
    if (!G) {
      q(k.RESET), Wt || ce();
      return;
    }
    const {
      position: E,
      alwaysUpdate: V
    } = x || {}, ne = () => {
      E === Ee.FIRST ? q(k.FIRST) : E === Ee.LAST ? q(k.LAST) : E >= -1 && q(k.SET_INDEX, void 0, E);
    };
    if (V)
      ne();
    else if (p) {
      const Z = setTimeout(() => {
        const H = $.current;
        H && !H.contains(document.activeElement) && (et.current.focus(), ne());
      }, Kt ? 170 : 100);
      return () => clearTimeout(Z);
    }
  }, [G, Kt, Wt, p, x, q]);
  const $n = c.useMemo(() => ({
    isParentOpen: G,
    submenuCtx: J,
    dispatch: q,
    updateItems: nt
  }), [G, J, q, nt]);
  let mt, pt;
  A && (g ? pt = A.overflowAmt : mt = A.height);
  const Kn = c.useMemo(() => ({
    reposSubmenu: Ie,
    submenuCtx: J,
    overflow: d,
    overflowAmt: pt,
    parentMenuRef: $,
    parentDir: Q
  }), [Ie, J, d, pt, Q]), Wn = mt >= 0 ? {
    maxHeight: mt,
    overflow: d
  } : void 0, qt = c.useMemo(() => ({
    state: C,
    dir: Q
  }), [C, Q]), Xn = c.useMemo(() => ({
    dir: Q
  }), [Q]), qn = ve({
    block: pe,
    element: zs,
    modifiers: Xn,
    className: o.className
  }), Gt = /* @__PURE__ */ D.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ft(O),
    ...We({
      onPointerEnter: Je == null ? void 0 : Je.off,
      onPointerMove: Bn,
      onPointerLeave: Qn,
      onKeyDown: Un,
      onAnimationEnd: Vn
    }, I),
    ref: dt(u, $),
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
    }), i && /* @__PURE__ */ D.jsx("li", {
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
          children: X(ie, qt)
        })
      })
    })]
  });
  return f ? /* @__PURE__ */ D.jsx(Fs, {
    ...f,
    isOpen: G,
    children: Gt
  }) : Gt;
}, qs = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: i,
  initialMounted: o,
  unmountOnClose: s,
  transition: r,
  transitionTimeout: a,
  boundingBoxRef: f,
  boundingBoxPadding: b,
  reposition: u = "auto",
  submenuOpenDelay: m = 300,
  submenuCloseDelay: S = 150,
  viewScroll: v = "initial",
  portal: l,
  theming: d,
  onItemClick: g,
  ...w
}, p) {
  const C = c.useRef(null), N = c.useRef({}), {
    anchorRef: O,
    state: x,
    onClose: R
  } = w, U = c.useMemo(() => ({
    initialMounted: o,
    unmountOnClose: s,
    transition: r,
    transitionTimeout: a,
    boundingBoxRef: f,
    boundingBoxPadding: b,
    rootMenuRef: C,
    rootAnchorRef: O,
    scrollNodesRef: N,
    reposition: u,
    viewScroll: v,
    submenuOpenDelay: m,
    submenuCloseDelay: S
  }), [o, s, r, a, O, f, b, u, v, m, S]), ie = c.useMemo(() => ({
    handleClick(I, j) {
      I.stopPropagation || X(g, I);
      let ae = I.keepOpen;
      ae === void 0 && (ae = j && I.key === F.SPACE), ae || X(R, {
        value: I.value,
        key: I.key,
        reason: He.CLICK
      });
    },
    handleClose(I) {
      X(R, {
        key: I,
        reason: He.CLICK
      });
    }
  }), [g, R]);
  if (!x)
    return null;
  const B = /* @__PURE__ */ D.jsx(ut.Provider, {
    value: U,
    children: /* @__PURE__ */ D.jsx(Mn.Provider, {
      value: ie,
      children: /* @__PURE__ */ D.jsx(Nn, {
        ...w,
        ariaLabel: t || "Menu",
        externalRef: p,
        containerRef: C,
        containerProps: {
          className: n,
          containerRef: C,
          containerProps: i,
          theming: d,
          transition: r,
          onClose: R
        }
      })
    })
  });
  return l === !0 && typeof document < "u" ? /* @__PURE__ */ xe.createPortal(B, document.body) : l ? l.target ? /* @__PURE__ */ xe.createPortal(B, l.target) : l.stablePosition ? null : B : B;
}), At = 0, zt = 1, ot = 2, at = 3, ct = 4, Gs = 5, Tn = 6, Zs = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], In = (e) => ({
  _s: e,
  status: Zs[e],
  isEnter: e < at,
  isMounted: e !== Tn,
  isResolved: e === ot || e > ct
}), xt = (e) => e ? Tn : Gs, Ys = (e, t) => {
  switch (e) {
    case zt:
    case At:
      return ot;
    case ct:
    case at:
      return xt(t);
  }
}, Js = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], ei = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), ln = (e, t, n, i, o) => {
  clearTimeout(i.current);
  const s = In(e);
  t(s), n.current = s, o && o({
    current: s
  });
}, ti = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: i,
  timeout: o,
  initialEntered: s,
  mountOnEnter: r,
  unmountOnExit: a,
  onStateChange: f
} = {}) => {
  const [b, u] = c.useState(() => In(s ? ot : xt(r))), m = c.useRef(b), S = c.useRef(), [v, l] = Js(o), d = c.useCallback(() => {
    const w = Ys(m.current._s, a);
    w && ln(w, u, m, S, f);
  }, [f, a]), g = c.useCallback((w) => {
    const p = (N) => {
      switch (ln(N, u, m, S, f), N) {
        case zt:
          v >= 0 && (S.current = setTimeout(d, v));
          break;
        case ct:
          l >= 0 && (S.current = setTimeout(d, l));
          break;
        case At:
        case at:
          S.current = ei(p, N);
          break;
      }
    }, C = m.current.isEnter;
    typeof w != "boolean" && (w = !C), w ? !C && p(e ? n ? At : zt : ot) : C && p(t ? i ? at : ct : xt(a));
  }, [d, f, e, t, n, i, v, l, a]);
  return c.useEffect(() => () => clearTimeout(S.current), []), [b, g, d];
}, ni = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: i,
  transitionTimeout: o = 500
} = {}) => {
  const [{
    status: s
  }, r, a] = ti({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: o,
    enter: je(i, "open"),
    exit: je(i, "close")
  });
  return [{
    state: _s[s],
    endTransition: a
  }, r];
}, On = (e) => {
  const [t, n] = ni(e), [i, o] = c.useState(), s = (r, a) => {
    o({
      position: r,
      alwaysUpdate: a
    }), n(!0);
  };
  return [{
    menuItemFocus: i,
    ...t
  }, n, s];
}, si = (e, t) => {
  const [n] = c.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (i) => n.v ? n.v = !1 : t(!0, i)
  };
}, kn = (e, t) => {
  const n = c.useRef(t);
  c.useEffect(() => {
    n.current !== t && X(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, ii = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: i,
  menuButton: o,
  instanceRef: s,
  onMenuChange: r,
  ...a
}, f) {
  const [b, u, m] = On(a), {
    state: S
  } = b, v = _t(S), l = c.useRef(null), d = si(S, (O, x) => m(x.detail ? void 0 : Ee.FIRST)), g = c.useCallback((O) => {
    u(!1), O.key && l.current.focus();
  }, [u]), w = (O) => {
    switch (O.key) {
      case F.UP:
        m(Ee.LAST);
        break;
      case F.DOWN:
        m(Ee.FIRST);
        break;
      default:
        return;
    }
    O.preventDefault();
  }, p = X(o, {
    open: v
  });
  if (!p || !p.type)
    throw new Error("Menu requires a menuButton prop.");
  const C = {
    ref: dt(p.ref, l),
    ...We({
      onKeyDown: w,
      ...d
    }, p.props)
  };
  Ds(p.type) === "MenuButton" && (C.isOpen = v);
  const N = /* @__PURE__ */ c.cloneElement(p, C);
  return kn(r, v), c.useImperativeHandle(s, () => ({
    openMenu: m,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ D.jsxs(c.Fragment, {
    children: [N, /* @__PURE__ */ D.jsx(qs, {
      ...a,
      ...b,
      "aria-label": t || (typeof p.props.children == "string" ? p.props.children : "Menu"),
      anchorRef: l,
      ref: f,
      onClose: g
    })]
  });
}), Dn = (e, t) => {
  const n = /* @__PURE__ */ c.memo(t), i = /* @__PURE__ */ c.forwardRef((o, s) => {
    const r = c.useRef(null);
    return /* @__PURE__ */ D.jsx(n, {
      ...o,
      itemRef: r,
      externalRef: s,
      isHovering: c.useContext(Rn) === r.current
    });
  });
  return i.displayName = `WithHovering(${e})`, i;
}, Ln = (e, t, n) => {
  rt(() => {
    if (e)
      return;
    const i = t.current;
    return n(i, !0), () => {
      n(i);
    };
  }, [e, t, n]);
}, ri = /* @__PURE__ */ Dn("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: i,
  direction: o,
  label: s,
  openTrigger: r,
  onMenuChange: a,
  isHovering: f,
  instanceRef: b,
  itemRef: u,
  captureFocus: m,
  repositionFlag: S,
  itemProps: v = {},
  ...l
}) {
  const d = c.useContext(ut), {
    rootMenuRef: g,
    submenuOpenDelay: w,
    submenuCloseDelay: p
  } = d, {
    parentMenuRef: C,
    parentDir: N,
    overflow: O
  } = c.useContext(Lt), {
    isParentOpen: x,
    submenuCtx: R,
    dispatch: U,
    updateItems: ie
  } = c.useContext(Ut), B = O !== "visible", [I, j, ae] = On(d), {
    state: Te
  } = I, te = !!i, A = _t(Te), ce = c.useRef(null), [Q] = c.useState({
    v: 0
  }), Xe = () => {
    R.off(), Q.v && (clearTimeout(Q.v), Q.v = 0);
  }, J = (...z) => {
    Xe(), Ie(), !te && ae(...z);
  }, Ie = () => !f && !te && U(k.SET, u.current), Oe = (z) => {
    Ie(), r || (Q.v = setTimeout(() => Dt(J), Math.max(z, 0)));
  }, qe = (z) => {
    te || (z.stopPropagation(), !(Q.v || A) && R.on(p, () => Oe(w - p), () => Oe(w)));
  }, ke = () => {
    Xe(), A || U(k.UNSET, u.current);
  }, Ge = (z) => {
    if (f)
      switch (z.key) {
        case F.ENTER:
          z.preventDefault();
        case F.SPACE:
        case F.RIGHT:
          r !== "none" && J(Ee.FIRST);
      }
  }, Ze = (z) => {
    let $ = !1;
    switch (z.key) {
      case F.LEFT:
        A && (u.current.focus(), j(!1), $ = !0);
        break;
      case F.RIGHT:
        A || ($ = !0);
        break;
    }
    $ && (z.preventDefault(), z.stopPropagation());
  };
  Ln(te, u, ie), kn(a, A), c.useEffect(() => R.toggle(A), [R, A]), c.useEffect(() => () => clearTimeout(Q.v), [Q]), c.useEffect(() => {
    f && x ? u.current.focus() : j(!1);
  }, [f, x, j, u]), c.useImperativeHandle(b, () => ({
    openMenu: (...z) => {
      x && J(...z);
    },
    closeMenu: () => {
      A && (u.current.focus(), j(!1));
    }
  }));
  const le = c.useMemo(() => ({
    open: A,
    hover: f,
    disabled: te,
    submenu: !0
  }), [A, f, te]), {
    ref: ft,
    className: Ye,
    ...De
  } = v, ht = We({
    onPointerEnter: R.off,
    onPointerMove: qe,
    onPointerLeave: ke,
    onKeyDown: Ge,
    onClick: () => r !== "none" && J()
  }, De), Je = () => {
    const z = /* @__PURE__ */ D.jsx(Nn, {
      ...l,
      ...I,
      ariaLabel: t || (typeof s == "string" ? s : "Submenu"),
      anchorRef: u,
      containerRef: B ? g : ce,
      direction: o || (N === "right" || N === "left" ? N : "right"),
      parentScrollingRef: B && C,
      isDisabled: te
    }), $ = g.current;
    return B && $ ? /* @__PURE__ */ xe.createPortal(z, $) : z;
  };
  return /* @__PURE__ */ D.jsxs("li", {
    className: ve({
      block: pe,
      element: js,
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
      "aria-expanded": A,
      ...Ft(te, f),
      ...ht,
      ref: dt(ft, u),
      className: ve({
        block: pe,
        element: En,
        modifiers: le,
        className: Ye
      }),
      children: c.useMemo(() => X(s, le), [s, le])
    }), Te && Je()]
  });
}), oi = (e, t, n, i) => {
  const {
    submenuCloseDelay: o
  } = c.useContext(ut), {
    isParentOpen: s,
    submenuCtx: r,
    dispatch: a,
    updateItems: f
  } = c.useContext(Ut), b = () => {
    !n && !i && a(k.SET, e.current);
  }, u = () => {
    !i && a(k.UNSET, e.current);
  }, m = (l) => {
    n && !l.currentTarget.contains(l.relatedTarget) && u();
  }, S = (l) => {
    i || (l.stopPropagation(), r.on(o, b, b));
  }, v = (l, d) => {
    r.off(), !d && u();
  };
  return Ln(i, e, f), c.useEffect(() => {
    n && s && t.current && t.current.focus();
  }, [t, n, s]), {
    setHover: b,
    onBlur: m,
    onPointerMove: S,
    onPointerLeave: v
  };
}, it = /* @__PURE__ */ Dn("MenuItem", function({
  className: t,
  value: n,
  href: i,
  type: o,
  checked: s,
  disabled: r,
  children: a,
  onClick: f,
  isHovering: b,
  itemRef: u,
  externalRef: m,
  ...S
}) {
  const v = !!r, {
    setHover: l,
    ...d
  } = oi(u, u, b, v), g = c.useContext(Mn), w = c.useContext(Hs), p = o === "radio", C = o === "checkbox", N = !!i && !v && !p && !C, O = p ? w.value === n : C ? !!s : !1, x = (I) => {
    if (v) {
      I.stopPropagation(), I.preventDefault();
      return;
    }
    const j = {
      value: n,
      syntheticEvent: I
    };
    I.key !== void 0 && (j.key = I.key), C && (j.checked = !O), p && (j.name = w.name), X(f, j), p && X(w.onRadioChange, j), g.handleClick(j, C || p);
  }, R = (I) => {
    if (b)
      switch (I.key) {
        case F.ENTER:
          I.preventDefault();
        case F.SPACE:
          N ? u.current.click() : x(I);
      }
  }, U = c.useMemo(() => ({
    type: o,
    disabled: v,
    hover: b,
    checked: O,
    anchor: N
  }), [o, v, b, O, N]), ie = We({
    ...d,
    onPointerDown: l,
    onKeyDown: R,
    onClick: x
  }, S), B = {
    role: p ? "menuitemradio" : C ? "menuitemcheckbox" : Vt,
    "aria-checked": p || C ? O : void 0,
    ...Ft(v, b),
    ...ie,
    ref: dt(m, u),
    className: ve({
      block: pe,
      element: En,
      modifiers: U,
      className: t
    }),
    children: c.useMemo(() => X(a, U), [a, U])
  };
  return N ? /* @__PURE__ */ D.jsx("li", {
    role: Pn,
    children: /* @__PURE__ */ D.jsx("a", {
      href: i,
      ...B
    })
  }) : /* @__PURE__ */ D.jsx("li", {
    ...B
  });
}), ai = /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(function({
  className: t,
  ...n
}, i) {
  return /* @__PURE__ */ D.jsx("li", {
    role: "separator",
    ...n,
    ref: i,
    className: ve({
      block: pe,
      element: xs,
      className: t
    })
  });
}));
const ci = "szh-menu", li = "item", ui = (e) => (t) => (n) => {
  let i = `.${e}`;
  return t && (i += `__${t}`), n && (i += `--${n}`), i;
}, An = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((i) => {
    const o = i.split("-").reduce((s, r) => `${s}${r[0].toUpperCase()}${r.slice(1)}`);
    Object.defineProperty(n, o, {
      value: e(i),
      enumerable: !0
    });
  }), n;
}, di = ["dir-left", "dir-right", "dir-top", "dir-bottom"], zn = /* @__PURE__ */ ui(ci);
[...di];
const un = /* @__PURE__ */ An(/* @__PURE__ */ zn(li), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), fi = ls(ii)`
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
`, hi = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: i
  } = n, o = i.getVisibleLeafColumns().length;
  return /* @__PURE__ */ W(fi, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    /* @__PURE__ */ W(it, { onClick: () => t.column.toggleSorting(!1), children: [
      /* @__PURE__ */ y(Y, { icon: Sn.faArrowUpAZ }),
      " Сортировать по возрастанию"
    ] }),
    /* @__PURE__ */ W(it, { onClick: () => t.column.toggleSorting(!0), children: [
      /* @__PURE__ */ y(Y, { icon: Cn.faArrowDownZA }),
      "Сортировать по убыванию"
    ] }),
    /* @__PURE__ */ W(it, { disabled: o === 1, onClick: () => t.column.toggleVisibility(), children: [
      /* @__PURE__ */ y(Y, { icon: yn.faEyeSlash }),
      "Скрыть колонку"
    ] }),
    /* @__PURE__ */ y(ai, {}),
    /* @__PURE__ */ y(ri, { label: /* @__PURE__ */ W(is, { children: [
      /* @__PURE__ */ y(Y, { icon: wn.faTableColumns }),
      "Колонки"
    ] }), children: i.getAllLeafColumns().map((s) => /* @__PURE__ */ y(it, { type: "checkbox", checked: s.getIsVisible(), disabled: o === 1 && s.getIsVisible(), onClick: (r) => {
      r.keepOpen = !0, s.toggleVisibility();
    }, children: jt(s.columnDef.header, n) }, s.id)) })
  ] });
}, gi = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: i,
    getContext: o,
    getResizeHandler: s
  } = e;
  return /* @__PURE__ */ W("th", { css: [{
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
    /* @__PURE__ */ W("div", { css: [{
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
      /* @__PURE__ */ W("div", { onClick: () => {
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
        i ? null : jt(n.columnDef.header, o()),
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
      /* @__PURE__ */ y(hi, { header: e, children: ({
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
    }], onMouseDown: s(), onTouchStart: s(), className: "resizer" })
  ] });
}, mi = ({
  ...e
}) => /* @__PURE__ */ y("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ y("tr", { children: t.headers.map((n) => /* @__PURE__ */ y(gi, { ...n }, n.id)) }, t.id)) }), pi = ({
  ...e
}) => /* @__PURE__ */ y(rs, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ W("table", { css: [{
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
}, Et`
            table-layout: fixed;
          `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((t) => /* @__PURE__ */ y("colgroup", { children: t.headers.map((n) => /* @__PURE__ */ y("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, t.id)),
  /* @__PURE__ */ y(mi, { ...e }),
  /* @__PURE__ */ y("tbody", { children: e.getRowModel().rows.map((t) => /* @__PURE__ */ y(Os, { ...t }, t.id)) })
] }) });
var xn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrows-rotate", i = 512, o = 512, s = [128472, "refresh", "sync"], r = "f021", a = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(xn);
var jn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-right", i = 512, o = 512, s = [187, "angle-double-right"], r = "f101", a = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(jn);
var Hn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-right", i = 320, o = 512, s = [8250], r = "f105", a = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(Hn);
var _n = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-left", i = 320, o = 512, s = [8249], r = "f104", a = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(_n);
var Fn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-left", i = 512, o = 512, s = [171, "angle-double-left"], r = "f100", a = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      i,
      o,
      s,
      r,
      a
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = n, e.width = i, e.height = o, e.ligatures = s, e.unicode = r, e.svgPathData = a, e.aliases = s;
})(Fn);
const vi = ({
  refetch: e,
  recordsTotal: t = 0,
  ...n
}) => {
  const i = n.getState(), {
    pagination: o
  } = i, s = c.useMemo(() => o.pageIndex * o.pageSize + (t > 0 ? 1 : 0), [o, t]), r = c.useMemo(() => Math.min(t, (o.pageIndex + 1) * o.pageSize), [o, t]);
  return /* @__PURE__ */ W("div", { css: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem"
  }, children: [
    /* @__PURE__ */ W("div", { css: {
      display: "flex",
      gap: "0.75rem"
    }, children: [
      /* @__PURE__ */ y(Ae, { onClick: () => n.setPageIndex(0), size: "small", disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ y(Y, { icon: Fn.faAnglesLeft }) }),
      /* @__PURE__ */ y(Ae, { size: "small", onClick: () => n.previousPage(), disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ y(Y, { icon: _n.faAngleLeft }) }),
      /* @__PURE__ */ W("span", { css: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
      }, children: [
        "Страница",
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
      e && /* @__PURE__ */ y(Ae, { size: "small", disabled: n.isFetching, onClick: e, children: /* @__PURE__ */ y(Y, { spin: n.isFetching, icon: xn.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ W("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ W("span", { children: [
        "Отражаются записи c ",
        s,
        " по ",
        r,
        ", всего",
        " ",
        t
      ] }),
      /* @__PURE__ */ y("select", { css: {
        borderWidth: "1px",
        padding: "0.25rem"
      }, value: n.getState().pagination.pageSize, onChange: (a) => {
        n.setPageSize(Number(a.target.value));
      }, children: [25, 50, 100].map((a) => /* @__PURE__ */ y("option", { value: a, children: a }, a)) })
    ] })
  ] });
}, bi = hn.memo(vi), wi = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: i,
  ...o
}) => {
  const s = us({
    getCoreRowModel: ds(),
    columnResizeMode: "onChange",
    ...o,
    columns: e,
    data: t
  });
  return {
    isLoading: n,
    isFetching: i,
    ...s
  };
}, yi = () => {
  const e = os();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function Ci(e, t) {
  let n;
  typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const {
    url: i,
    params: o,
    ...s
  } = n, r = yi();
  return Ns({
    queryKey: o ? [i, o, r.defaults.headers.Authorization || ""] : [i, r.defaults.headers.Authorization || ""],
    queryFn: async ({
      signal: a
    }) => {
      const {
        data: f
      } = await r.get(i, {
        params: o,
        signal: a
      });
      return f;
    },
    ...s
  });
}
const Si = (e, t, {
  defaultSorting: n = [],
  defaultPageSize: i = 20,
  ...o
} = {}) => {
  var d, g;
  const [s, r] = c.useState({
    pageIndex: 0,
    pageSize: i
  }), [a, f] = c.useState(n), b = c.useMemo(() => {
    const {
      pageIndex: w,
      pageSize: p
    } = s;
    return {
      start: w * p,
      length: p,
      sort: JSON.stringify(a.map((C) => ({
        property: C.id,
        direction: C.desc ? "DESC" : "ASC"
      })))
    };
  }, [s, a]), u = Ci(e, {
    params: b,
    placeholderData: as
  }), m = c.useMemo(() => {
    var w, p;
    return isNaN(Number((w = u.data) == null ? void 0 : w.recordsFiltered)) ? 0 : Number((p = u.data) == null ? void 0 : p.recordsFiltered);
  }, [(d = u.data) == null ? void 0 : d.recordsFiltered]), S = c.useMemo(() => m > 0 ? Math.ceil(m / s.pageSize) : 1, [s.pageSize, m]), v = wi({
    ...o,
    columns: t,
    data: (g = u.data) == null ? void 0 : g.data,
    isLoading: u.isLoading,
    isFetching: u.isFetching,
    manualPagination: !0,
    onPaginationChange: r,
    onSortingChange: f,
    pageCount: S,
    state: {
      ...o == null ? void 0 : o.state,
      pagination: s,
      sorting: a
    }
  }), l = c.useCallback(() => {
    u.refetch();
  }, [u]);
  return {
    ...v,
    recordsTotal: m,
    refetch: l
  };
}, Ei = [{
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
}], ki = () => {
  const e = Si("/api/rest/user", Ei, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return /* @__PURE__ */ y(cs, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    center: /* @__PURE__ */ y(bi, { ...e })
  }, children: /* @__PURE__ */ y(pi, { ...e }) });
};
export {
  ki as default
};
