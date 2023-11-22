var bt = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var d = (e, t, n) => (bt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), O = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, R = (e, t, n, s) => (bt(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var N = (e, t, n) => (bt(e, t, "access private method"), n);
import { S as Kn, s as Ct, n as Qn, i as Yt, a as Jt, t as $n, f as Wn, c as Xn, r as en, b as fn, u as qn, j as re, d as T, F as Gn, e as Zn, g as Yn, h as Jn, k as es } from "./library-92ab0ef5.js";
import { C as ts, P as ns } from "./Panel-ee3b82fd.js";
import { j as D, n as ss, a as Et } from "./mui-36ebfa29.js";
import { f as zt, u as os, g as rs } from "./table-46c094fe.js";
import { F as Ee } from "./icons-a8a50daa.js";
import { r as c, c as Le } from "./react-72acea58.js";
var $, M, Re, U, ue, Me, te, je, Te, xe, fe, de, oe, he, pe, Ae, Ue, St, Fe, Rt, _e, Mt, Be, Tt, Ve, xt, Ke, Ot, Qe, Pt, at, dn, un, is = (un = class extends Kn {
  constructor(t, n) {
    super();
    O(this, pe);
    O(this, Ue);
    O(this, Fe);
    O(this, _e);
    O(this, Be);
    O(this, Ve);
    O(this, Ke);
    O(this, Qe);
    O(this, at);
    O(this, $, void 0);
    O(this, M, void 0);
    O(this, Re, void 0);
    O(this, U, void 0);
    O(this, ue, void 0);
    O(this, Me, void 0);
    O(this, te, void 0);
    O(this, je, void 0);
    O(this, Te, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    O(this, xe, void 0);
    O(this, fe, void 0);
    O(this, de, void 0);
    O(this, oe, void 0);
    O(this, he, void 0);
    R(this, M, void 0), R(this, Re, void 0), R(this, U, void 0), R(this, he, /* @__PURE__ */ new Set()), R(this, $, t), this.options = n, R(this, te, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (d(this, M).addObserver(this), tn(d(this, M), this.options) ? N(this, pe, Ae).call(this) : this.updateResult(), N(this, Be, Tt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return kt(
      d(this, M),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return kt(
      d(this, M),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), N(this, Ve, xt).call(this), N(this, Ke, Ot).call(this), d(this, M).removeObserver(this);
  }
  setOptions(t, n) {
    const s = this.options, i = d(this, M);
    if (this.options = d(this, $).defaultQueryOptions(t), Ct(s, this.options) || d(this, $).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: d(this, M),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey), N(this, Qe, Pt).call(this);
    const o = this.hasListeners();
    o && nn(
      d(this, M),
      i,
      this.options,
      s
    ) && N(this, pe, Ae).call(this), this.updateResult(n), o && (d(this, M) !== i || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && N(this, Ue, St).call(this);
    const r = N(this, Fe, Rt).call(this);
    o && (d(this, M) !== i || this.options.enabled !== s.enabled || r !== d(this, oe)) && N(this, _e, Mt).call(this, r);
  }
  getOptimisticResult(t) {
    const n = d(this, $).getQueryCache().build(d(this, $), t), s = this.createResult(n, t);
    return cs(this, s) && (R(this, U, s), R(this, Me, this.options), R(this, ue, d(this, M).state)), s;
  }
  getCurrentResult() {
    return d(this, U);
  }
  trackResult(t) {
    const n = {};
    return Object.keys(t).forEach((s) => {
      Object.defineProperty(n, s, {
        configurable: !1,
        enumerable: !0,
        get: () => (d(this, he).add(s), t[s])
      });
    }), n;
  }
  getCurrentQuery() {
    return d(this, M);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = d(this, $).defaultQueryOptions(t), s = d(this, $).getQueryCache().build(d(this, $), n);
    return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, n));
  }
  fetch(t) {
    return N(this, pe, Ae).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), d(this, U)));
  }
  createResult(t, n) {
    var z;
    const s = d(this, M), i = this.options, o = d(this, U), r = d(this, ue), l = d(this, Me), b = t !== s ? t.state : d(this, Re), { state: u } = t;
    let { error: m, errorUpdatedAt: C, fetchStatus: g, status: a } = u, f = !1, p;
    if (n._optimisticResults) {
      const S = this.hasListeners(), _ = !S && tn(t, n), ne = S && nn(t, s, n, i);
      (_ || ne) && (g = Xn(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (a = "pending")), n._optimisticResults === "isRestoring" && (g = "idle");
    }
    if (n.select && typeof u.data < "u")
      if (o && u.data === (r == null ? void 0 : r.data) && n.select === d(this, je))
        p = d(this, Te);
      else
        try {
          R(this, je, n.select), p = n.select(u.data), p = en(o == null ? void 0 : o.data, p, n), R(this, Te, p), R(this, te, null);
        } catch (S) {
          R(this, te, S);
        }
    else
      p = u.data;
    if (typeof n.placeholderData < "u" && typeof p > "u" && a === "pending") {
      let S;
      if (o != null && o.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        S = o.data;
      else if (S = typeof n.placeholderData == "function" ? n.placeholderData(
        (z = d(this, xe)) == null ? void 0 : z.state.data,
        d(this, xe)
      ) : n.placeholderData, n.select && typeof S < "u")
        try {
          S = n.select(S), R(this, te, null);
        } catch (_) {
          R(this, te, _);
        }
      typeof S < "u" && (a = "success", p = en(
        o == null ? void 0 : o.data,
        S,
        n
      ), f = !0);
    }
    d(this, te) && (m = d(this, te), p = d(this, Te), C = Date.now(), a = "error");
    const w = g === "fetching", v = a === "pending", y = a === "error", x = v && w;
    return {
      status: a,
      fetchStatus: g,
      isPending: v,
      isSuccess: a === "success",
      isError: y,
      isInitialLoading: x,
      isLoading: x,
      data: p,
      dataUpdatedAt: u.dataUpdatedAt,
      error: m,
      errorUpdatedAt: C,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > b.dataUpdateCount || u.errorUpdateCount > b.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !v,
      isLoadingError: y && u.dataUpdatedAt === 0,
      isPaused: g === "paused",
      isPlaceholderData: f,
      isRefetchError: y && u.dataUpdatedAt !== 0,
      isStale: Ht(t, n),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const n = d(this, U), s = this.createResult(d(this, M), this.options);
    if (R(this, ue, d(this, M).state), R(this, Me, this.options), d(this, ue).data !== void 0 && R(this, xe, d(this, M)), Ct(s, n))
      return;
    R(this, U, s);
    const i = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: r } = this.options, l = typeof r == "function" ? r() : r;
      if (l === "all" || !l && !d(this, he).size)
        return !0;
      const h = new Set(
        l ?? d(this, he)
      );
      return this.options.throwOnError && h.add("error"), Object.keys(d(this, U)).some((b) => {
        const u = b;
        return d(this, U)[u] !== n[u] && h.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0), N(this, at, dn).call(this, { ...i, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && N(this, Be, Tt).call(this);
  }
}, $ = new WeakMap(), M = new WeakMap(), Re = new WeakMap(), U = new WeakMap(), ue = new WeakMap(), Me = new WeakMap(), te = new WeakMap(), je = new WeakMap(), Te = new WeakMap(), xe = new WeakMap(), fe = new WeakMap(), de = new WeakMap(), oe = new WeakMap(), he = new WeakMap(), pe = new WeakSet(), Ae = function(t) {
  N(this, Qe, Pt).call(this);
  let n = d(this, M).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Qn)), n;
}, Ue = new WeakSet(), St = function() {
  if (N(this, Ve, xt).call(this), Yt || d(this, U).isStale || !Jt(this.options.staleTime))
    return;
  const n = $n(
    d(this, U).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  R(this, fe, setTimeout(() => {
    d(this, U).isStale || this.updateResult();
  }, n));
}, Fe = new WeakSet(), Rt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(d(this, M)) : this.options.refetchInterval) ?? !1;
}, _e = new WeakSet(), Mt = function(t) {
  N(this, Ke, Ot).call(this), R(this, oe, t), !(Yt || this.options.enabled === !1 || !Jt(d(this, oe)) || d(this, oe) === 0) && R(this, de, setInterval(() => {
    (this.options.refetchIntervalInBackground || Wn.isFocused()) && N(this, pe, Ae).call(this);
  }, d(this, oe)));
}, Be = new WeakSet(), Tt = function() {
  N(this, Ue, St).call(this), N(this, _e, Mt).call(this, N(this, Fe, Rt).call(this));
}, Ve = new WeakSet(), xt = function() {
  d(this, fe) && (clearTimeout(d(this, fe)), R(this, fe, void 0));
}, Ke = new WeakSet(), Ot = function() {
  d(this, de) && (clearInterval(d(this, de)), R(this, de, void 0));
}, Qe = new WeakSet(), Pt = function() {
  const t = d(this, $).getQueryCache().build(d(this, $), this.options);
  if (t === d(this, M))
    return;
  const n = d(this, M);
  R(this, M, t), R(this, Re, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, at = new WeakSet(), dn = function(t) {
  fn.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(d(this, U));
    }), d(this, $).getQueryCache().notify({
      query: d(this, M),
      type: "observerResultsUpdated"
    });
  });
}, un);
function as(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function tn(e, t) {
  return as(e, t) || e.state.dataUpdatedAt > 0 && kt(e, t, t.refetchOnMount);
}
function kt(e, t, n) {
  if (t.enabled !== !1) {
    const s = typeof n == "function" ? n(e) : n;
    return s === "always" || s !== !1 && Ht(e, t);
  }
  return !1;
}
function nn(e, t, n, s) {
  return n.enabled !== !1 && (e !== t || s.enabled === !1) && (!n.suspense || e.state.status !== "error") && Ht(e, n);
}
function Ht(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function cs(e, t) {
  return !Ct(e.getCurrentResult(), t);
}
var hn = c.createContext(!1), ls = () => c.useContext(hn);
hn.Provider;
function us() {
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
var fs = c.createContext(us()), ds = () => c.useContext(fs);
function hs(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var ps = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, ms = (e) => {
  c.useEffect(() => {
    e.clearReset();
  }, [e]);
}, gs = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: s
}) => e.isError && !t.isReset() && !e.isFetching && hs(n, [e.error, s]), bs = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, vs = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, ws = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function ys(e, t, n) {
  const s = qn(n), i = ls(), o = ds(), r = s.defaultQueryOptions(e);
  r._optimisticResults = i ? "isRestoring" : "optimistic", bs(r), ps(r, o), ms(o);
  const [l] = c.useState(
    () => new t(
      s,
      r
    )
  ), h = l.getOptimisticResult(r);
  if (c.useSyncExternalStore(
    c.useCallback(
      (b) => {
        const u = i ? () => {
        } : l.subscribe(fn.batchCalls(b));
        return l.updateResult(), u;
      },
      [l, i]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), c.useEffect(() => {
    l.setOptions(r, { listeners: !1 });
  }, [r, l]), vs(r, h))
    throw ws(r, l, o);
  if (gs({
    result: h,
    errorResetBoundary: o,
    throwOnError: r.throwOnError,
    query: l.getCurrentQuery()
  }))
    throw h.error;
  return r.notifyOnChangeProps ? h : l.trackResult(h);
}
function Cs(e, t) {
  return ys(e, is, t);
}
var pn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "caret-down", s = 320, i = 512, o = [], r = "f0d7", l = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      l
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = l, e.aliases = o;
})(pn);
var mn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", s = 384, i = 512, o = [8595], r = "f063", l = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      l
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = l, e.aliases = o;
})(mn);
var gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", s = 384, i = 512, o = [8593], r = "f062", l = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      l
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = l, e.aliases = o;
})(gn);
var bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", s = 512, i = 512, o = ["columns"], r = "f0db", l = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      l
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = l, e.aliases = o;
})(bn);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", s = 576, i = 512, o = ["sort-alpha-desc", "sort-alpha-down-alt"], r = "f881", l = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      l
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = l, e.aliases = o;
})(vn);
var wn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", s = 576, i = 512, o = ["sort-alpha-up"], r = "f15e", l = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      l
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = l, e.aliases = o;
})(wn);
const jt = (e) => !!e && e[0] === "o", It = Le.unstable_batchedUpdates || ((e) => e()), Ce = (e, t, n = 1e-4) => Math.abs(e - t) < n, ze = (e, t) => e === !0 || !!(e && e[t]), W = (e, t) => typeof e == "function" ? e(t) : e, Es = "_szhsinMenu", Ss = (e) => e[Es], $e = (e, t) => (t && Object.keys(t).forEach((n) => {
  const s = e[n], i = t[n];
  typeof i == "function" && s ? e[n] = (...o) => {
    i(...o), s(...o);
  } : e[n] = i;
}), e), Rs = (e) => {
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
}, vt = (e) => {
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
function Ut(e, t) {
  return {
    "aria-disabled": e || void 0,
    tabIndex: t ? 0 : -1
  };
}
function sn(e, t) {
  for (let n = 0; n < e.length; n++)
    if (e[n] === t)
      return n;
  return -1;
}
const ge = ({
  block: e,
  element: t,
  modifiers: n,
  className: s
}) => c.useMemo(() => {
  const i = t ? `${e}__${t}` : e;
  let o = i;
  n && Object.keys(n).forEach((l) => {
    const h = n[l];
    h && (o += ` ${i}--${h === !0 ? l : `${l}-${h}`}`);
  });
  let r = typeof s == "function" ? s(n) : s;
  return typeof r == "string" && (r = r.trim(), r && (o += ` ${r}`)), o;
}, [e, t, n, s]), Ms = "szh-menu-container", me = "szh-menu", Ts = "arrow", yn = "item", xs = "divider", Os = "submenu", Cn = /* @__PURE__ */ c.createContext(), Ft = /* @__PURE__ */ c.createContext({}), Dt = /* @__PURE__ */ c.createContext({}), En = /* @__PURE__ */ c.createContext({}), Ps = /* @__PURE__ */ c.createContext({}), ct = /* @__PURE__ */ c.createContext({}), F = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), I = /* @__PURE__ */ Object.freeze({
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
}), Se = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), ks = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), wt = "absolute", Sn = "presentation", _t = "menuitem", on = {
  "aria-hidden": !0,
  role: _t
}, Is = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: s,
  isOpen: i,
  theming: o,
  transition: r,
  onClose: l
}) => {
  const h = ze(r, "item"), b = ({
    key: m
  }) => {
    switch (m) {
      case F.ESC:
        W(l, {
          key: m,
          reason: He.CANCEL
        });
        break;
    }
  }, u = (m) => {
    i && !m.currentTarget.contains(m.relatedTarget) && W(l, {
      reason: He.BLUR
    });
  };
  return /* @__PURE__ */ D.jsx("div", {
    ...$e({
      onKeyDown: b,
      onBlur: u
    }, n),
    className: ge({
      block: Ms,
      modifiers: c.useMemo(() => ({
        theme: o,
        itemTransition: h
      }), [o, h]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: s
  });
}, Ds = () => {
  let e, t = 0;
  return {
    toggle: (n) => {
      n ? t++ : t--, t = Math.max(t, 0);
    },
    on: (n, s, i) => {
      t ? e || (e = setTimeout(() => {
        e = 0, s();
      }, n)) : i == null || i();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, Ns = (e, t) => {
  const [n, s] = c.useState(), o = c.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, r = c.useCallback((h, b) => {
    const {
      items: u
    } = o;
    if (!h)
      o.items = [];
    else if (b)
      u.push(h);
    else {
      const m = u.indexOf(h);
      m > -1 && (u.splice(m, 1), h.contains(document.activeElement) && (t.current.focus(), s()));
    }
    o.hoverIndex = -1, o.sorted = !1;
  }, [o, t]), l = c.useCallback((h, b, u) => {
    const {
      items: m,
      hoverIndex: C
    } = o, g = () => {
      if (o.sorted)
        return;
      const p = e.current.querySelectorAll(".szh-menu__item");
      m.sort((w, v) => sn(p, w) - sn(p, v)), o.sorted = !0;
    };
    let a = -1, f;
    switch (h) {
      case I.RESET:
        break;
      case I.SET:
        f = b;
        break;
      case I.UNSET:
        f = (p) => p === b ? void 0 : p;
        break;
      case I.FIRST:
        g(), a = 0, f = m[a];
        break;
      case I.LAST:
        g(), a = m.length - 1, f = m[a];
        break;
      case I.SET_INDEX:
        g(), a = u, f = m[a];
        break;
      case I.INCREASE:
        g(), a = C, a < 0 && (a = m.indexOf(b)), a++, a >= m.length && (a = 0), f = m[a];
        break;
      case I.DECREASE:
        g(), a = C, a < 0 && (a = m.indexOf(b)), a--, a < 0 && (a = m.length - 1), f = m[a];
        break;
    }
    f || (a = -1), s(f), o.hoverIndex = a;
  }, [e, o]);
  return {
    hoverItem: n,
    dispatch: l,
    updateItems: r
  };
}, As = (e, t, n, s) => {
  const i = t.current.getBoundingClientRect(), o = e.current.getBoundingClientRect(), r = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), l = Rs(s), h = (a) => a + o.left - r.left - l.left, b = (a) => a + o.left + i.width - r.right + l.right, u = (a) => a + o.top - r.top - l.top, m = (a) => a + o.top + i.height - r.bottom + l.bottom;
  return {
    menuRect: i,
    containerRect: o,
    getLeftOverflow: h,
    getRightOverflow: b,
    getTopOverflow: u,
    getBottomOverflow: m,
    confineHorizontally: (a) => {
      let f = h(a);
      if (f < 0)
        a -= f;
      else {
        const p = b(a);
        p > 0 && (a -= p, f = h(a), f < 0 && (a -= f));
      }
      return a;
    },
    confineVertically: (a) => {
      let f = u(a);
      if (f < 0)
        a -= f;
      else {
        const p = m(a);
        p > 0 && (a -= p, f = u(a), f < 0 && (a -= f));
      }
      return a;
    }
  };
}, Ls = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: s,
  menuRect: i
}) => {
  let o = n.top - s.top - t + n.height / 2;
  const r = e.current.offsetHeight * 1.25;
  return o = Math.max(r, o), o = Math.min(o, i.height - r), o;
}, zs = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: s,
  placeLeftX: i,
  placeRightX: o,
  getLeftOverflow: r,
  getRightOverflow: l,
  confineHorizontally: h,
  confineVertically: b,
  arrowRef: u,
  arrow: m,
  direction: C,
  position: g
}) => {
  let a = C, f = s;
  g !== "initial" && (f = b(f), g === "anchor" && (f = Math.min(f, e.bottom - t.top), f = Math.max(f, e.top - t.top - n.height)));
  let p, w, v;
  return a === "left" ? (p = i, g !== "initial" && (w = r(p), w < 0 && (v = l(o), (v <= 0 || -w > v) && (p = o, a = "right")))) : (p = o, g !== "initial" && (v = l(p), v > 0 && (w = r(i), (w >= 0 || -w < v) && (p = i, a = "left")))), g === "auto" && (p = h(p)), {
    arrowY: m ? Ls({
      menuY: f,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: p,
    y: f,
    computedDirection: a
  };
}, Hs = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: s,
  menuRect: i
}) => {
  let o = n.left - s.left - t + n.width / 2;
  const r = e.current.offsetWidth * 1.25;
  return o = Math.max(r, o), o = Math.min(o, i.width - r), o;
}, js = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: s,
  placeTopY: i,
  placeBottomY: o,
  getTopOverflow: r,
  getBottomOverflow: l,
  confineHorizontally: h,
  confineVertically: b,
  arrowRef: u,
  arrow: m,
  direction: C,
  position: g
}) => {
  let a = C === "top" ? "top" : "bottom", f = s;
  g !== "initial" && (f = h(f), g === "anchor" && (f = Math.min(f, e.right - t.left), f = Math.max(f, e.left - t.left - n.width)));
  let p, w, v;
  return a === "top" ? (p = i, g !== "initial" && (w = r(p), w < 0 && (v = l(o), (v <= 0 || -w > v) && (p = o, a = "bottom")))) : (p = o, g !== "initial" && (v = l(p), v > 0 && (w = r(i), (w >= 0 || -w < v) && (p = i, a = "top")))), g === "auto" && (p = b(p)), {
    arrowX: m ? Hs({
      menuX: f,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: f,
    y: p,
    computedDirection: a
  };
}, Us = ({
  arrow: e,
  align: t,
  direction: n,
  gap: s,
  shift: i,
  position: o,
  anchorRect: r,
  arrowRef: l,
  positionHelpers: h
}) => {
  const {
    menuRect: b,
    containerRect: u
  } = h, m = n === "left" || n === "right";
  let C = m ? s : i, g = m ? i : s;
  if (e) {
    const k = l.current;
    m ? C += k.offsetWidth : g += k.offsetHeight;
  }
  const a = r.left - u.left - b.width - C, f = r.right - u.left + C, p = r.top - u.top - b.height - g, w = r.bottom - u.top + g;
  let v, y;
  t === "end" ? (v = r.right - u.left - b.width, y = r.bottom - u.top - b.height) : t === "center" ? (v = r.left - u.left - (b.width - r.width) / 2, y = r.top - u.top - (b.height - r.height) / 2) : (v = r.left - u.left, y = r.top - u.top), v += C, y += g;
  const x = {
    ...h,
    anchorRect: r,
    placeLeftX: a,
    placeRightX: f,
    placeLeftorRightY: y,
    placeTopY: p,
    placeBottomY: w,
    placeToporBottomX: v,
    arrowRef: l,
    arrow: e,
    direction: n,
    position: o
  };
  switch (n) {
    case "left":
    case "right":
      return zs(x);
    case "top":
    case "bottom":
    default:
      return js(x);
  }
}, st = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? c.useLayoutEffect : c.useEffect;
function rn(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const lt = (e, t) => c.useMemo(() => e ? t ? (n) => {
  rn(e, n), rn(t, n);
} : e : t, [e, t]), an = -9999, Rn = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: n,
  arrow: s,
  arrowProps: i = {},
  anchorPoint: o,
  anchorRef: r,
  containerRef: l,
  containerProps: h,
  focusProps: b,
  externalRef: u,
  parentScrollingRef: m,
  align: C = "start",
  direction: g = "bottom",
  position: a = "auto",
  overflow: f = "visible",
  setDownOverflow: p,
  repositionFlag: w,
  captureFocus: v = !0,
  state: y,
  endTransition: x,
  isDisabled: k,
  menuItemFocus: z,
  gap: S = 0,
  shift: _ = 0,
  children: ne,
  onClose: V,
  ...P
}) => {
  const [H, ie] = c.useState({
    x: an,
    y: an
  }), [Oe, J] = c.useState({}), [A, ae] = c.useState(), [K, We] = c.useState(g), [Z] = c.useState(Ds), [Pe, ke] = c.useReducer((E) => E + 1, 1), {
    transition: Xe,
    boundingBoxRef: Ie,
    boundingBoxPadding: qe,
    rootMenuRef: Ge,
    rootAnchorRef: ce,
    scrollNodesRef: ut,
    reposition: Ze,
    viewScroll: De,
    submenuCloseDelay: ft
  } = c.useContext(ct), {
    submenuCtx: Ye,
    reposSubmenu: L = w
  } = c.useContext(Dt), Q = c.useRef(null), Je = c.useRef(), Bt = c.useRef(), Vt = c.useRef(!1), et = c.useRef({
    width: 0,
    height: 0
  }), Kt = c.useRef(() => {
  }), {
    hoverItem: dt,
    dispatch: X,
    updateItems: tt
  } = Ns(Q, Je), q = jt(y), Qt = ze(Xe, "open"), $t = ze(Xe, "close"), Y = ut.current, Nn = (E) => {
    switch (E.key) {
      case F.HOME:
        X(I.FIRST);
        break;
      case F.END:
        X(I.LAST);
        break;
      case F.UP:
        X(I.DECREASE, dt);
        break;
      case F.DOWN:
        X(I.INCREASE, dt);
        break;
      case F.SPACE:
        E.target && E.target.className.indexOf(me) !== -1 && E.preventDefault();
        return;
      default:
        return;
    }
    E.preventDefault(), E.stopPropagation();
  }, An = () => {
    y === "closing" && ae(), W(x);
  }, Ln = (E) => {
    E.stopPropagation(), Z.on(ft, () => {
      X(I.RESET), Je.current.focus();
    });
  }, zn = (E) => {
    E.target === E.currentTarget && Z.off();
  }, le = c.useCallback((E) => {
    var B;
    const ee = r ? (B = r.current) == null ? void 0 : B.getBoundingClientRect() : o ? {
      left: o.x,
      right: o.x,
      top: o.y,
      bottom: o.y,
      width: 0,
      height: 0
    } : null;
    if (!ee)
      return;
    Y.menu || (Y.menu = (Ie ? Ie.current : vt(Ge.current)) || window);
    const G = As(l, Q, Y.menu, qe);
    let {
      arrowX: j,
      arrowY: be,
      x: ve,
      y: se,
      computedDirection: mt
    } = Us({
      arrow: s,
      align: C,
      direction: g,
      gap: S,
      shift: _,
      position: a,
      anchorRect: ee,
      arrowRef: Bt,
      positionHelpers: G
    });
    const {
      menuRect: Gt
    } = G;
    let we = Gt.height;
    if (!E && f !== "visible") {
      const {
        getTopOverflow: Bn,
        getBottomOverflow: Vn
      } = G;
      let ye, gt;
      const Zt = et.current.height, nt = Vn(se);
      if (nt > 0 || Ce(nt, 0) && Ce(we, Zt))
        ye = we - nt, gt = nt;
      else {
        const Ne = Bn(se);
        (Ne < 0 || Ce(Ne, 0) && Ce(we, Zt)) && (ye = we + Ne, gt = 0 - Ne, ye >= 0 && (se -= Ne));
      }
      ye >= 0 ? (we = ye, ae({
        height: ye,
        overflowAmt: gt
      })) : ae();
    }
    s && J({
      x: j,
      y: be
    }), ie({
      x: ve,
      y: se
    }), We(mt), et.current = {
      width: Gt.width,
      height: we
    };
  }, [s, C, qe, g, S, _, a, f, o, r, l, Ie, Ge, Y]);
  st(() => {
    q && (le(), Vt.current && ke()), Vt.current = q, Kt.current = le;
  }, [q, le, L]), st(() => {
    A && !p && (Q.current.scrollTop = 0);
  }, [A, p]), st(() => tt, [tt]), c.useEffect(() => {
    let {
      menu: E
    } = Y;
    if (!q || !E)
      return;
    if (E = E.addEventListener ? E : window, !Y.anchors) {
      Y.anchors = [];
      let j = vt(ce && ce.current);
      for (; j && j !== E; )
        Y.anchors.push(j), j = vt(j);
    }
    let B = De;
    if (Y.anchors.length && B === "initial" && (B = "auto"), B === "initial")
      return;
    const ee = () => {
      B === "auto" ? It(() => le(!0)) : W(V, {
        reason: He.SCROLL
      });
    }, G = Y.anchors.concat(De !== "initial" ? E : []);
    return G.forEach((j) => j.addEventListener("scroll", ee)), () => G.forEach((j) => j.removeEventListener("scroll", ee));
  }, [ce, Y, q, V, De, le]);
  const Wt = !!A && A.overflowAmt > 0;
  c.useEffect(() => {
    if (Wt || !q || !m)
      return;
    const E = () => It(le), B = m.current;
    return B.addEventListener("scroll", E), () => B.removeEventListener("scroll", E);
  }, [q, Wt, m, le]), c.useEffect(() => {
    if (typeof ResizeObserver != "function" || Ze === "initial")
      return;
    const E = new ResizeObserver(([ee]) => {
      const {
        borderBoxSize: G,
        target: j
      } = ee;
      let be, ve;
      if (G) {
        const {
          inlineSize: se,
          blockSize: mt
        } = G[0] || G;
        be = se, ve = mt;
      } else {
        const se = j.getBoundingClientRect();
        be = se.width, ve = se.height;
      }
      be === 0 || ve === 0 || Ce(be, et.current.width, 1) && Ce(ve, et.current.height, 1) || Le.flushSync(() => {
        Kt.current(), ke();
      });
    }), B = Q.current;
    return E.observe(B, {
      box: "border-box"
    }), () => E.unobserve(B);
  }, [Ze]), c.useEffect(() => {
    if (!q) {
      X(I.RESET), $t || ae();
      return;
    }
    const {
      position: E,
      alwaysUpdate: B
    } = z || {}, ee = () => {
      E === Se.FIRST ? X(I.FIRST) : E === Se.LAST ? X(I.LAST) : E >= -1 && X(I.SET_INDEX, void 0, E);
    };
    if (B)
      ee();
    else if (v) {
      const G = setTimeout(() => {
        const j = Q.current;
        j && !j.contains(document.activeElement) && (Je.current.focus(), ee());
      }, Qt ? 170 : 100);
      return () => clearTimeout(G);
    }
  }, [q, Qt, $t, v, z, X]);
  const Hn = c.useMemo(() => ({
    isParentOpen: q,
    submenuCtx: Z,
    dispatch: X,
    updateItems: tt
  }), [q, Z, X, tt]);
  let ht, pt;
  A && (p ? pt = A.overflowAmt : ht = A.height);
  const jn = c.useMemo(() => ({
    reposSubmenu: Pe,
    submenuCtx: Z,
    overflow: f,
    overflowAmt: pt,
    parentMenuRef: Q,
    parentDir: K
  }), [Pe, Z, f, pt, K]), Un = ht >= 0 ? {
    maxHeight: ht,
    overflow: f
  } : void 0, Xt = c.useMemo(() => ({
    state: y,
    dir: K
  }), [y, K]), Fn = c.useMemo(() => ({
    dir: K
  }), [K]), _n = ge({
    block: me,
    element: Ts,
    modifiers: Fn,
    className: i.className
  }), qt = /* @__PURE__ */ D.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ut(k),
    ...$e({
      onPointerEnter: Ye == null ? void 0 : Ye.off,
      onPointerMove: Ln,
      onPointerLeave: zn,
      onKeyDown: Nn,
      onAnimationEnd: An
    }, P),
    ref: lt(u, Q),
    className: ge({
      block: me,
      modifiers: Xt,
      className: t
    }),
    style: {
      ...n,
      ...Un,
      margin: 0,
      display: y === "closed" ? "none" : void 0,
      position: wt,
      left: H.x,
      top: H.y
    },
    children: [/* @__PURE__ */ D.jsx("li", {
      tabIndex: -1,
      style: {
        position: wt,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: Je,
      ...on,
      ...b
    }), s && /* @__PURE__ */ D.jsx("li", {
      ...on,
      ...i,
      className: _n,
      style: {
        display: "block",
        position: wt,
        left: Oe.x,
        top: Oe.y,
        ...i.style
      },
      ref: Bt
    }), /* @__PURE__ */ D.jsx(Dt.Provider, {
      value: jn,
      children: /* @__PURE__ */ D.jsx(Ft.Provider, {
        value: Hn,
        children: /* @__PURE__ */ D.jsx(Cn.Provider, {
          value: dt,
          children: W(ne, Xt)
        })
      })
    })]
  });
  return h ? /* @__PURE__ */ D.jsx(Is, {
    ...h,
    isOpen: q,
    children: qt
  }) : qt;
}, Fs = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: s,
  initialMounted: i,
  unmountOnClose: o,
  transition: r,
  transitionTimeout: l,
  boundingBoxRef: h,
  boundingBoxPadding: b,
  reposition: u = "auto",
  submenuOpenDelay: m = 300,
  submenuCloseDelay: C = 150,
  viewScroll: g = "initial",
  portal: a,
  theming: f,
  onItemClick: p,
  ...w
}, v) {
  const y = c.useRef(null), x = c.useRef({}), {
    anchorRef: k,
    state: z,
    onClose: S
  } = w, _ = c.useMemo(() => ({
    initialMounted: i,
    unmountOnClose: o,
    transition: r,
    transitionTimeout: l,
    boundingBoxRef: h,
    boundingBoxPadding: b,
    rootMenuRef: y,
    rootAnchorRef: k,
    scrollNodesRef: x,
    reposition: u,
    viewScroll: g,
    submenuOpenDelay: m,
    submenuCloseDelay: C
  }), [i, o, r, l, k, h, b, u, g, m, C]), ne = c.useMemo(() => ({
    handleClick(P, H) {
      P.stopPropagation || W(p, P);
      let ie = P.keepOpen;
      ie === void 0 && (ie = H && P.key === F.SPACE), ie || W(S, {
        value: P.value,
        key: P.key,
        reason: He.CLICK
      });
    },
    handleClose(P) {
      W(S, {
        key: P,
        reason: He.CLICK
      });
    }
  }), [p, S]);
  if (!z)
    return null;
  const V = /* @__PURE__ */ D.jsx(ct.Provider, {
    value: _,
    children: /* @__PURE__ */ D.jsx(En.Provider, {
      value: ne,
      children: /* @__PURE__ */ D.jsx(Rn, {
        ...w,
        ariaLabel: t || "Menu",
        externalRef: v,
        containerRef: y,
        containerProps: {
          className: n,
          containerRef: y,
          containerProps: s,
          theming: f,
          transition: r,
          onClose: S
        }
      })
    })
  });
  return a === !0 && typeof document < "u" ? /* @__PURE__ */ Le.createPortal(V, document.body) : a ? a.target ? /* @__PURE__ */ Le.createPortal(V, a.target) : a.stablePosition ? null : V : V;
}), Nt = 0, At = 1, ot = 2, rt = 3, it = 4, _s = 5, Mn = 6, Bs = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Tn = (e) => ({
  _s: e,
  status: Bs[e],
  isEnter: e < rt,
  isMounted: e !== Mn,
  isResolved: e === ot || e > it
}), Lt = (e) => e ? Mn : _s, Vs = (e, t) => {
  switch (e) {
    case At:
    case Nt:
      return ot;
    case it:
    case rt:
      return Lt(t);
  }
}, Ks = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], Qs = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), cn = (e, t, n, s, i) => {
  clearTimeout(s.current);
  const o = Tn(e);
  t(o), n.current = o, i && i({
    current: o
  });
}, $s = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: s,
  timeout: i,
  initialEntered: o,
  mountOnEnter: r,
  unmountOnExit: l,
  onStateChange: h
} = {}) => {
  const [b, u] = c.useState(() => Tn(o ? ot : Lt(r))), m = c.useRef(b), C = c.useRef(), [g, a] = Ks(i), f = c.useCallback(() => {
    const w = Vs(m.current._s, l);
    w && cn(w, u, m, C, h);
  }, [h, l]), p = c.useCallback((w) => {
    const v = (x) => {
      switch (cn(x, u, m, C, h), x) {
        case At:
          g >= 0 && (C.current = setTimeout(f, g));
          break;
        case it:
          a >= 0 && (C.current = setTimeout(f, a));
          break;
        case Nt:
        case rt:
          C.current = Qs(v, x);
          break;
      }
    }, y = m.current.isEnter;
    typeof w != "boolean" && (w = !y), w ? !y && v(e ? n ? Nt : At : ot) : y && v(t ? s ? rt : it : Lt(l));
  }, [f, h, e, t, n, s, g, a, l]);
  return c.useEffect(() => () => clearTimeout(C.current), []), [b, p, f];
}, Ws = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: s,
  transitionTimeout: i = 500
} = {}) => {
  const [{
    status: o
  }, r, l] = $s({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: i,
    enter: ze(s, "open"),
    exit: ze(s, "close")
  });
  return [{
    state: ks[o],
    endTransition: l
  }, r];
}, xn = (e) => {
  const [t, n] = Ws(e), [s, i] = c.useState(), o = (r, l) => {
    i({
      position: r,
      alwaysUpdate: l
    }), n(!0);
  };
  return [{
    menuItemFocus: s,
    ...t
  }, n, o];
}, Xs = (e, t) => {
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
    n.current !== t && W(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, qs = /* @__PURE__ */ c.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: s,
  menuButton: i,
  instanceRef: o,
  onMenuChange: r,
  ...l
}, h) {
  const [b, u, m] = xn(l), {
    state: C
  } = b, g = jt(C), a = c.useRef(null), f = Xs(C, (k, z) => m(z.detail ? void 0 : Se.FIRST)), p = c.useCallback((k) => {
    u(!1), k.key && a.current.focus();
  }, [u]), w = (k) => {
    switch (k.key) {
      case F.UP:
        m(Se.LAST);
        break;
      case F.DOWN:
        m(Se.FIRST);
        break;
      default:
        return;
    }
    k.preventDefault();
  }, v = W(i, {
    open: g
  });
  if (!v || !v.type)
    throw new Error("Menu requires a menuButton prop.");
  const y = {
    ref: lt(v.ref, a),
    ...$e({
      onKeyDown: w,
      ...f
    }, v.props)
  };
  Ss(v.type) === "MenuButton" && (y.isOpen = g);
  const x = /* @__PURE__ */ c.cloneElement(v, y);
  return On(r, g), c.useImperativeHandle(o, () => ({
    openMenu: m,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ D.jsxs(c.Fragment, {
    children: [x, /* @__PURE__ */ D.jsx(Fs, {
      ...l,
      ...b,
      "aria-label": t || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: a,
      ref: h,
      onClose: p
    })]
  });
}), Pn = (e, t) => {
  const n = /* @__PURE__ */ c.memo(t), s = /* @__PURE__ */ c.forwardRef((i, o) => {
    const r = c.useRef(null);
    return /* @__PURE__ */ D.jsx(n, {
      ...i,
      itemRef: r,
      externalRef: o,
      isHovering: c.useContext(Cn) === r.current
    });
  });
  return s.displayName = `WithHovering(${e})`, s;
}, kn = (e, t, n) => {
  st(() => {
    if (e)
      return;
    const s = t.current;
    return n(s, !0), () => {
      n(s);
    };
  }, [e, t, n]);
}, Gs = /* @__PURE__ */ Pn("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: s,
  direction: i,
  label: o,
  openTrigger: r,
  onMenuChange: l,
  isHovering: h,
  instanceRef: b,
  itemRef: u,
  captureFocus: m,
  repositionFlag: C,
  itemProps: g = {},
  ...a
}) {
  const f = c.useContext(ct), {
    rootMenuRef: p,
    submenuOpenDelay: w,
    submenuCloseDelay: v
  } = f, {
    parentMenuRef: y,
    parentDir: x,
    overflow: k
  } = c.useContext(Dt), {
    isParentOpen: z,
    submenuCtx: S,
    dispatch: _,
    updateItems: ne
  } = c.useContext(Ft), V = k !== "visible", [P, H, ie] = xn(f), {
    state: Oe
  } = P, J = !!s, A = jt(Oe), ae = c.useRef(null), [K] = c.useState({
    v: 0
  }), We = () => {
    S.off(), K.v && (clearTimeout(K.v), K.v = 0);
  }, Z = (...L) => {
    We(), Pe(), !J && ie(...L);
  }, Pe = () => !h && !J && _(I.SET, u.current), ke = (L) => {
    Pe(), r || (K.v = setTimeout(() => It(Z), Math.max(L, 0)));
  }, Xe = (L) => {
    J || (L.stopPropagation(), !(K.v || A) && S.on(v, () => ke(w - v), () => ke(w)));
  }, Ie = () => {
    We(), A || _(I.UNSET, u.current);
  }, qe = (L) => {
    if (h)
      switch (L.key) {
        case F.ENTER:
          L.preventDefault();
        case F.SPACE:
        case F.RIGHT:
          r !== "none" && Z(Se.FIRST);
      }
  }, Ge = (L) => {
    let Q = !1;
    switch (L.key) {
      case F.LEFT:
        A && (u.current.focus(), H(!1), Q = !0);
        break;
      case F.RIGHT:
        A || (Q = !0);
        break;
    }
    Q && (L.preventDefault(), L.stopPropagation());
  };
  kn(J, u, ne), On(l, A), c.useEffect(() => S.toggle(A), [S, A]), c.useEffect(() => () => clearTimeout(K.v), [K]), c.useEffect(() => {
    h && z ? u.current.focus() : H(!1);
  }, [h, z, H, u]), c.useImperativeHandle(b, () => ({
    openMenu: (...L) => {
      z && Z(...L);
    },
    closeMenu: () => {
      A && (u.current.focus(), H(!1));
    }
  }));
  const ce = c.useMemo(() => ({
    open: A,
    hover: h,
    disabled: J,
    submenu: !0
  }), [A, h, J]), {
    ref: ut,
    className: Ze,
    ...De
  } = g, ft = $e({
    onPointerEnter: S.off,
    onPointerMove: Xe,
    onPointerLeave: Ie,
    onKeyDown: qe,
    onClick: () => r !== "none" && Z()
  }, De), Ye = () => {
    const L = /* @__PURE__ */ D.jsx(Rn, {
      ...a,
      ...P,
      ariaLabel: t || (typeof o == "string" ? o : "Submenu"),
      anchorRef: u,
      containerRef: V ? p : ae,
      direction: i || (x === "right" || x === "left" ? x : "right"),
      parentScrollingRef: V && y,
      isDisabled: J
    }), Q = p.current;
    return V && Q ? /* @__PURE__ */ Le.createPortal(L, Q) : L;
  };
  return /* @__PURE__ */ D.jsxs("li", {
    className: ge({
      block: me,
      element: Os,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Sn,
    ref: ae,
    onKeyDown: Ge,
    children: [/* @__PURE__ */ D.jsx("div", {
      role: _t,
      "aria-haspopup": !0,
      "aria-expanded": A,
      ...Ut(J, h),
      ...ft,
      ref: lt(ut, u),
      className: ge({
        block: me,
        element: yn,
        modifiers: ce,
        className: Ze
      }),
      children: c.useMemo(() => W(o, ce), [o, ce])
    }), Oe && Ye()]
  });
}), Zs = (e, t, n, s) => {
  const {
    submenuCloseDelay: i
  } = c.useContext(ct), {
    isParentOpen: o,
    submenuCtx: r,
    dispatch: l,
    updateItems: h
  } = c.useContext(Ft), b = () => {
    !n && !s && l(I.SET, e.current);
  }, u = () => {
    !s && l(I.UNSET, e.current);
  }, m = (a) => {
    n && !a.currentTarget.contains(a.relatedTarget) && u();
  }, C = (a) => {
    s || (a.stopPropagation(), r.on(i, b, b));
  }, g = (a, f) => {
    r.off(), !f && u();
  };
  return kn(s, e, h), c.useEffect(() => {
    n && o && t.current && t.current.focus();
  }, [t, n, o]), {
    setHover: b,
    onBlur: m,
    onPointerMove: C,
    onPointerLeave: g
  };
}, yt = /* @__PURE__ */ Pn("MenuItem", function({
  className: t,
  value: n,
  href: s,
  type: i,
  checked: o,
  disabled: r,
  children: l,
  onClick: h,
  isHovering: b,
  itemRef: u,
  externalRef: m,
  ...C
}) {
  const g = !!r, {
    setHover: a,
    ...f
  } = Zs(u, u, b, g), p = c.useContext(En), w = c.useContext(Ps), v = i === "radio", y = i === "checkbox", x = !!s && !g && !v && !y, k = v ? w.value === n : y ? !!o : !1, z = (P) => {
    if (g) {
      P.stopPropagation(), P.preventDefault();
      return;
    }
    const H = {
      value: n,
      syntheticEvent: P
    };
    P.key !== void 0 && (H.key = P.key), y && (H.checked = !k), v && (H.name = w.name), W(h, H), v && W(w.onRadioChange, H), p.handleClick(H, y || v);
  }, S = (P) => {
    if (b)
      switch (P.key) {
        case F.ENTER:
          P.preventDefault();
        case F.SPACE:
          x ? u.current.click() : z(P);
      }
  }, _ = c.useMemo(() => ({
    type: i,
    disabled: g,
    hover: b,
    checked: k,
    anchor: x
  }), [i, g, b, k, x]), ne = $e({
    ...f,
    onPointerDown: a,
    onKeyDown: S,
    onClick: z
  }, C), V = {
    role: v ? "menuitemradio" : y ? "menuitemcheckbox" : _t,
    "aria-checked": v || y ? k : void 0,
    ...Ut(g, b),
    ...ne,
    ref: lt(m, u),
    className: ge({
      block: me,
      element: yn,
      modifiers: _,
      className: t
    }),
    children: c.useMemo(() => W(l, _), [l, _])
  };
  return x ? /* @__PURE__ */ D.jsx("li", {
    role: Sn,
    children: /* @__PURE__ */ D.jsx("a", {
      href: s,
      ...V
    })
  }) : /* @__PURE__ */ D.jsx("li", {
    ...V
  });
}), Ys = /* @__PURE__ */ c.memo(/* @__PURE__ */ c.forwardRef(function({
  className: t,
  ...n
}, s) {
  return /* @__PURE__ */ D.jsx("li", {
    role: "separator",
    ...n,
    ref: s,
    className: ge({
      block: me,
      element: xs,
      className: t
    })
  });
}));
const Js = "szh-menu", eo = "item", to = (e) => (t) => (n) => {
  let s = `.${e}`;
  return t && (s += `__${t}`), n && (s += `--${n}`), s;
}, In = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((s) => {
    const i = s.split("-").reduce((o, r) => `${o}${r[0].toUpperCase()}${r.slice(1)}`);
    Object.defineProperty(n, i, {
      value: e(s),
      enumerable: !0
    });
  }), n;
}, no = ["dir-left", "dir-right", "dir-top", "dir-bottom"], Dn = /* @__PURE__ */ to(Js);
[...no];
const ln = /* @__PURE__ */ In(/* @__PURE__ */ Dn(eo), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), so = ss(qs)`
  ${ln.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${ln.typeCheckbox} {
      ${{
  paddingLeft: "2rem"
}}
    }
  }
`, oo = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: s
  } = n, i = s.getVisibleLeafColumns().length;
  return /* @__PURE__ */ re(so, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    /* @__PURE__ */ re(yt, { onClick: () => t.column.toggleSorting(!1), children: [
      /* @__PURE__ */ T(Ee, { icon: wn.faArrowUpAZ }),
      " Сортировать по возрастанию"
    ] }),
    /* @__PURE__ */ re(yt, { onClick: () => t.column.toggleSorting(!0), children: [
      /* @__PURE__ */ T(Ee, { icon: vn.faArrowDownZA }),
      "Сортировать по убыванию"
    ] }),
    /* @__PURE__ */ T(Ys, {}),
    /* @__PURE__ */ T(Gs, { label: /* @__PURE__ */ re(Gn, { children: [
      /* @__PURE__ */ T(Ee, { icon: bn.faTableColumns }),
      "Колонки"
    ] }), children: s.getAllLeafColumns().map((o) => /* @__PURE__ */ T(yt, { type: "checkbox", checked: o.getIsVisible(), disabled: i === 1 && o.getIsVisible(), onClick: (r) => {
      r.keepOpen = !0, o.toggleVisibility();
    }, children: zt(o.columnDef.header, n) }, o.id)) })
  ] });
}, ro = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: s,
    getContext: i,
    getResizeHandler: o
  } = e;
  return /* @__PURE__ */ re("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
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
    /* @__PURE__ */ re("div", { css: [{
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
      /* @__PURE__ */ re("div", { onClick: () => {
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
        s ? null : zt(n.columnDef.header, i()),
        " ",
        n.getIsSorted() === "asc" && /* @__PURE__ */ T(Ee, { icon: gn.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ T(Ee, { icon: mn.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ T(oo, { header: e, children: ({
        open: r
      }) => /* @__PURE__ */ T("div", { className: "menu", css: [{
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
      }], children: /* @__PURE__ */ T(Ee, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: pn.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ T("div", { css: [{
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
    }], onMouseDown: o(), onTouchStart: o(), className: "resizer" })
  ] });
}, io = ({
  table: e
}) => /* @__PURE__ */ re("table", { css: [{
  minWidth: "100%"
}, Et`
          table-layout: fixed;
        `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((t) => /* @__PURE__ */ T("colgroup", { children: t.headers.map((n) => /* @__PURE__ */ T("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, t.id)),
  /* @__PURE__ */ T("thead", { children: e.getHeaderGroups().map((t) => /* @__PURE__ */ T("tr", { css: {
    borderBottomWidth: "1px"
  }, children: t.headers.map((n) => /* @__PURE__ */ T(ro, { ...n }, n.id)) }, t.id)) }),
  /* @__PURE__ */ T("tbody", { children: e.getRowModel().rows.map((t) => /* @__PURE__ */ T("tr", { css: [{
    position: "relative",
    overflow: "hidden",
    textOverflow: "ellipsis",
    borderBottomWidth: "1px",
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
    }
  }], children: t.getVisibleCells().map((n) => /* @__PURE__ */ T("td", { css: [{
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderRightWidth: "1px",
    padding: "0.375rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem"
  }, n.column.getIsResizing() && {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  }], children: /* @__PURE__ */ T("span", { css: [{
    position: "relative"
  }], children: zt(n.column.columnDef.cell, n.getContext()) }) }, n.id)) }, t.id)) })
] }), ao = ({
  columns: e,
  data: t = [],
  ...n
}) => {
  const [s, {
    width: i
  }] = Zn(), o = os({
    getCoreRowModel: rs(),
    ...n,
    columns: e,
    data: t
    // onColumnSizingChange,
    // state: { columnSizing },
  });
  return {
    ref: s,
    ...o
  };
}, co = () => {
  const {
    close: e,
    setTitle: t,
    maximize: n,
    minimize: s,
    fold: i,
    setWidth: o,
    setHeight: r,
    updatePosition: l
  } = Yn();
  return {
    close: e,
    setTitle: t,
    maximize: n,
    minimize: s,
    fold: i,
    setWidth: o,
    setHeight: r,
    updatePosition: l
  };
}, lo = () => {
  const e = Jn();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function uo(e, t) {
  let n;
  typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const {
    url: s,
    params: i,
    ...o
  } = n, r = lo();
  return Cs({
    queryKey: i ? [s, i, r.defaults.headers.Authorization || ""] : [s, r.defaults.headers.Authorization || ""],
    queryFn: async ({
      queryKey: [l, h],
      signal: b
    }) => {
      const {
        data: u
      } = await r.get(l, {
        params: h,
        signal: b
      });
      return u;
    },
    ...o
  });
}
const fo = [{
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
}], yo = () => {
  const {
    close: e
  } = co(), {
    data: t,
    isLoading: n
  } = uo("/api/rest/user", {
    params: {
      page: 1,
      size: 3
    },
    select: ({
      data: i
    }) => i
  }), s = ao({
    data: t,
    columns: fo,
    columnResizeMode: "onChange"
  });
  return /* @__PURE__ */ T(ns, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ T(ts, { onClick: e, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ T(es, { spinning: n, children: /* @__PURE__ */ T(io, { table: s }) }) });
};
export {
  yo as default
};
