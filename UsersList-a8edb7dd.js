var vt = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var h = (e, t, n) => (vt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), T = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, M = (e, t, n, s) => (vt(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var D = (e, t, n) => (vt(e, t, "access private method"), n);
import { S as Wn, s as yt, n as Kn, i as Yt, a as Jt, t as $n, f as Xn, c as Gn, r as en, b as dn, u as qn, j as $, d as S, F as Zn, e as Yn, g as Jn, h as es, k as ts, l as ns } from "./library-3afbff30.js";
import { C as ss, P as rs } from "./Panel-4645ce6b.js";
import { j as N, n as os, a as St } from "./mui-36ebfa29.js";
import { f as zt, u as is, g as as } from "./table-46c094fe.js";
import { F as ue } from "./icons-a8a50daa.js";
import { r as l, c as Ae } from "./react-72acea58.js";
var K, x, Re, U, de, Me, ne, je, xe, Pe, fe, he, oe, pe, ge, Le, Ue, Et, Fe, Rt, _e, Mt, Ve, xt, Be, Pt, Qe, Tt, We, It, ct, fn, un, cs = (un = class extends Wn {
  constructor(t, n) {
    super();
    T(this, ge);
    T(this, Ue);
    T(this, Fe);
    T(this, _e);
    T(this, Ve);
    T(this, Be);
    T(this, Qe);
    T(this, We);
    T(this, ct);
    T(this, K, void 0);
    T(this, x, void 0);
    T(this, Re, void 0);
    T(this, U, void 0);
    T(this, de, void 0);
    T(this, Me, void 0);
    T(this, ne, void 0);
    T(this, je, void 0);
    T(this, xe, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    T(this, Pe, void 0);
    T(this, fe, void 0);
    T(this, he, void 0);
    T(this, oe, void 0);
    T(this, pe, void 0);
    M(this, x, void 0), M(this, Re, void 0), M(this, U, void 0), M(this, pe, /* @__PURE__ */ new Set()), M(this, K, t), this.options = n, M(this, ne, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (h(this, x).addObserver(this), tn(h(this, x), this.options) ? D(this, ge, Le).call(this) : this.updateResult(), D(this, Ve, xt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return kt(
      h(this, x),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return kt(
      h(this, x),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), D(this, Be, Pt).call(this), D(this, Qe, Tt).call(this), h(this, x).removeObserver(this);
  }
  setOptions(t, n) {
    const s = this.options, i = h(this, x);
    if (this.options = h(this, K).defaultQueryOptions(t), yt(s, this.options) || h(this, K).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: h(this, x),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey), D(this, We, It).call(this);
    const r = this.hasListeners();
    r && nn(
      h(this, x),
      i,
      this.options,
      s
    ) && D(this, ge, Le).call(this), this.updateResult(n), r && (h(this, x) !== i || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && D(this, Ue, Et).call(this);
    const o = D(this, Fe, Rt).call(this);
    r && (h(this, x) !== i || this.options.enabled !== s.enabled || o !== h(this, oe)) && D(this, _e, Mt).call(this, o);
  }
  getOptimisticResult(t) {
    const n = h(this, K).getQueryCache().build(h(this, K), t), s = this.createResult(n, t);
    return us(this, s) && (M(this, U, s), M(this, Me, this.options), M(this, de, h(this, x).state)), s;
  }
  getCurrentResult() {
    return h(this, U);
  }
  trackResult(t) {
    const n = {};
    return Object.keys(t).forEach((s) => {
      Object.defineProperty(n, s, {
        configurable: !1,
        enumerable: !0,
        get: () => (h(this, pe).add(s), t[s])
      });
    }), n;
  }
  getCurrentQuery() {
    return h(this, x);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = h(this, K).defaultQueryOptions(t), s = h(this, K).getQueryCache().build(h(this, K), n);
    return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, n));
  }
  fetch(t) {
    return D(this, ge, Le).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), h(this, U)));
  }
  createResult(t, n) {
    var z;
    const s = h(this, x), i = this.options, r = h(this, U), o = h(this, de), a = h(this, Me), m = t !== s ? t.state : h(this, Re), { state: u } = t;
    let { error: g, errorUpdatedAt: y, fetchStatus: b, status: c } = u, d = !1, p;
    if (n._optimisticResults) {
      const R = this.hasListeners(), _ = !R && tn(t, n), se = R && nn(t, s, n, i);
      (_ || se) && (b = Gn(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (c = "pending")), n._optimisticResults === "isRestoring" && (b = "idle");
    }
    if (n.select && typeof u.data < "u")
      if (r && u.data === (o == null ? void 0 : o.data) && n.select === h(this, je))
        p = h(this, xe);
      else
        try {
          M(this, je, n.select), p = n.select(u.data), p = en(r == null ? void 0 : r.data, p, n), M(this, xe, p), M(this, ne, null);
        } catch (R) {
          M(this, ne, R);
        }
    else
      p = u.data;
    if (typeof n.placeholderData < "u" && typeof p > "u" && c === "pending") {
      let R;
      if (r != null && r.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
        R = r.data;
      else if (R = typeof n.placeholderData == "function" ? n.placeholderData(
        (z = h(this, Pe)) == null ? void 0 : z.state.data,
        h(this, Pe)
      ) : n.placeholderData, n.select && typeof R < "u")
        try {
          R = n.select(R), M(this, ne, null);
        } catch (_) {
          M(this, ne, _);
        }
      typeof R < "u" && (c = "success", p = en(
        r == null ? void 0 : r.data,
        R,
        n
      ), d = !0);
    }
    h(this, ne) && (g = h(this, ne), p = h(this, xe), y = Date.now(), c = "error");
    const w = b === "fetching", v = c === "pending", C = c === "error", P = v && w;
    return {
      status: c,
      fetchStatus: b,
      isPending: v,
      isSuccess: c === "success",
      isError: C,
      isInitialLoading: P,
      isLoading: P,
      data: p,
      dataUpdatedAt: u.dataUpdatedAt,
      error: g,
      errorUpdatedAt: y,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > m.dataUpdateCount || u.errorUpdateCount > m.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !v,
      isLoadingError: C && u.dataUpdatedAt === 0,
      isPaused: b === "paused",
      isPlaceholderData: d,
      isRefetchError: C && u.dataUpdatedAt !== 0,
      isStale: Ht(t, n),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const n = h(this, U), s = this.createResult(h(this, x), this.options);
    if (M(this, de, h(this, x).state), M(this, Me, this.options), h(this, de).data !== void 0 && M(this, Pe, h(this, x)), yt(s, n))
      return;
    M(this, U, s);
    const i = {}, r = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !h(this, pe).size)
        return !0;
      const f = new Set(
        a ?? h(this, pe)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(h(this, U)).some((m) => {
        const u = m;
        return h(this, U)[u] !== n[u] && f.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && r() && (i.listeners = !0), D(this, ct, fn).call(this, { ...i, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && D(this, Ve, xt).call(this);
  }
}, K = new WeakMap(), x = new WeakMap(), Re = new WeakMap(), U = new WeakMap(), de = new WeakMap(), Me = new WeakMap(), ne = new WeakMap(), je = new WeakMap(), xe = new WeakMap(), Pe = new WeakMap(), fe = new WeakMap(), he = new WeakMap(), oe = new WeakMap(), pe = new WeakMap(), ge = new WeakSet(), Le = function(t) {
  D(this, We, It).call(this);
  let n = h(this, x).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Kn)), n;
}, Ue = new WeakSet(), Et = function() {
  if (D(this, Be, Pt).call(this), Yt || h(this, U).isStale || !Jt(this.options.staleTime))
    return;
  const n = $n(
    h(this, U).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  M(this, fe, setTimeout(() => {
    h(this, U).isStale || this.updateResult();
  }, n));
}, Fe = new WeakSet(), Rt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(h(this, x)) : this.options.refetchInterval) ?? !1;
}, _e = new WeakSet(), Mt = function(t) {
  D(this, Qe, Tt).call(this), M(this, oe, t), !(Yt || this.options.enabled === !1 || !Jt(h(this, oe)) || h(this, oe) === 0) && M(this, he, setInterval(() => {
    (this.options.refetchIntervalInBackground || Xn.isFocused()) && D(this, ge, Le).call(this);
  }, h(this, oe)));
}, Ve = new WeakSet(), xt = function() {
  D(this, Ue, Et).call(this), D(this, _e, Mt).call(this, D(this, Fe, Rt).call(this));
}, Be = new WeakSet(), Pt = function() {
  h(this, fe) && (clearTimeout(h(this, fe)), M(this, fe, void 0));
}, Qe = new WeakSet(), Tt = function() {
  h(this, he) && (clearInterval(h(this, he)), M(this, he, void 0));
}, We = new WeakSet(), It = function() {
  const t = h(this, K).getQueryCache().build(h(this, K), this.options);
  if (t === h(this, x))
    return;
  const n = h(this, x);
  M(this, x, t), M(this, Re, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, ct = new WeakSet(), fn = function(t) {
  dn.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(h(this, U));
    }), h(this, K).getQueryCache().notify({
      query: h(this, x),
      type: "observerResultsUpdated"
    });
  });
}, un);
function ls(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function tn(e, t) {
  return ls(e, t) || e.state.dataUpdatedAt > 0 && kt(e, t, t.refetchOnMount);
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
function us(e, t) {
  return !yt(e.getCurrentResult(), t);
}
var hn = l.createContext(!1), ds = () => l.useContext(hn);
hn.Provider;
function fs() {
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
var hs = l.createContext(fs()), ps = () => l.useContext(hs);
function gs(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var ms = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, bs = (e) => {
  l.useEffect(() => {
    e.clearReset();
  }, [e]);
}, vs = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: s
}) => e.isError && !t.isReset() && !e.isFetching && gs(n, [e.error, s]), ws = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Cs = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, ys = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Ss(e, t, n) {
  const s = qn(n), i = ds(), r = ps(), o = s.defaultQueryOptions(e);
  o._optimisticResults = i ? "isRestoring" : "optimistic", ws(o), ms(o, r), bs(r);
  const [a] = l.useState(
    () => new t(
      s,
      o
    )
  ), f = a.getOptimisticResult(o);
  if (l.useSyncExternalStore(
    l.useCallback(
      (m) => {
        const u = i ? () => {
        } : a.subscribe(dn.batchCalls(m));
        return a.updateResult(), u;
      },
      [a, i]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), l.useEffect(() => {
    a.setOptions(o, { listeners: !1 });
  }, [o, a]), Cs(o, f))
    throw ys(o, a, r);
  if (vs({
    result: f,
    errorResetBoundary: r,
    throwOnError: o.throwOnError,
    query: a.getCurrentQuery()
  }))
    throw f.error;
  return o.notifyOnChangeProps ? f : a.trackResult(f);
}
function Es(e, t) {
  return Ss(e, cs, t);
}
var pn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "caret-down", s = 320, i = 512, r = [], o = "f0d7", a = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      r,
      o,
      a
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = r, e.unicode = o, e.svgPathData = a, e.aliases = r;
})(pn);
var gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", s = 384, i = 512, r = [8595], o = "f063", a = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      r,
      o,
      a
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = r, e.unicode = o, e.svgPathData = a, e.aliases = r;
})(gn);
var mn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", s = 384, i = 512, r = [8593], o = "f062", a = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      r,
      o,
      a
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = r, e.unicode = o, e.svgPathData = a, e.aliases = r;
})(mn);
var bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", s = 512, i = 512, r = ["columns"], o = "f0db", a = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      r,
      o,
      a
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = r, e.unicode = o, e.svgPathData = a, e.aliases = r;
})(bn);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "eye-slash", s = 640, i = 512, r = [], o = "f070", a = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      r,
      o,
      a
    ]
  }, e.faEyeSlash = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = r, e.unicode = o, e.svgPathData = a, e.aliases = r;
})(vn);
var wn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", s = 576, i = 512, r = ["sort-alpha-desc", "sort-alpha-down-alt"], o = "f881", a = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      r,
      o,
      a
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = r, e.unicode = o, e.svgPathData = a, e.aliases = r;
})(wn);
var Cn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", s = 576, i = 512, r = ["sort-alpha-up"], o = "f15e", a = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      r,
      o,
      a
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = r, e.unicode = o, e.svgPathData = a, e.aliases = r;
})(Cn);
const jt = (e) => !!e && e[0] === "o", Ot = Ae.unstable_batchedUpdates || ((e) => e()), Se = (e, t, n = 1e-4) => Math.abs(e - t) < n, ze = (e, t) => e === !0 || !!(e && e[t]), X = (e, t) => typeof e == "function" ? e(t) : e, Rs = "_szhsinMenu", Ms = (e) => e[Rs], Ke = (e, t) => (t && Object.keys(t).forEach((n) => {
  const s = e[n], i = t[n];
  typeof i == "function" && s ? e[n] = (...r) => {
    i(...r), s(...r);
  } : e[n] = i;
}), e), xs = (e) => {
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
}, wt = (e) => {
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
const be = ({
  block: e,
  element: t,
  modifiers: n,
  className: s
}) => l.useMemo(() => {
  const i = t ? `${e}__${t}` : e;
  let r = i;
  n && Object.keys(n).forEach((a) => {
    const f = n[a];
    f && (r += ` ${i}--${f === !0 ? a : `${a}-${f}`}`);
  });
  let o = typeof s == "function" ? s(n) : s;
  return typeof o == "string" && (o = o.trim(), o && (r += ` ${o}`)), r;
}, [e, t, n, s]), Ps = "szh-menu-container", me = "szh-menu", Ts = "arrow", yn = "item", Is = "divider", ks = "submenu", Sn = /* @__PURE__ */ l.createContext(), Ft = /* @__PURE__ */ l.createContext({}), Nt = /* @__PURE__ */ l.createContext({}), En = /* @__PURE__ */ l.createContext({}), Os = /* @__PURE__ */ l.createContext({}), lt = /* @__PURE__ */ l.createContext({}), F = /* @__PURE__ */ Object.freeze({
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
}), Ns = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Ct = "absolute", Rn = "presentation", _t = "menuitem", rn = {
  "aria-hidden": !0,
  role: _t
}, Ds = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: s,
  isOpen: i,
  theming: r,
  transition: o,
  onClose: a
}) => {
  const f = ze(o, "item"), m = ({
    key: g
  }) => {
    switch (g) {
      case F.ESC:
        X(a, {
          key: g,
          reason: He.CANCEL
        });
        break;
    }
  }, u = (g) => {
    i && !g.currentTarget.contains(g.relatedTarget) && X(a, {
      reason: He.BLUR
    });
  };
  return /* @__PURE__ */ N.jsx("div", {
    ...Ke({
      onKeyDown: m,
      onBlur: u
    }, n),
    className: be({
      block: Ps,
      modifiers: l.useMemo(() => ({
        theme: r,
        itemTransition: f
      }), [r, f]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: s
  });
}, Ls = () => {
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
}, As = (e, t) => {
  const [n, s] = l.useState(), r = l.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, o = l.useCallback((f, m) => {
    const {
      items: u
    } = r;
    if (!f)
      r.items = [];
    else if (m)
      u.push(f);
    else {
      const g = u.indexOf(f);
      g > -1 && (u.splice(g, 1), f.contains(document.activeElement) && (t.current.focus(), s()));
    }
    r.hoverIndex = -1, r.sorted = !1;
  }, [r, t]), a = l.useCallback((f, m, u) => {
    const {
      items: g,
      hoverIndex: y
    } = r, b = () => {
      if (r.sorted)
        return;
      const p = e.current.querySelectorAll(".szh-menu__item");
      g.sort((w, v) => sn(p, w) - sn(p, v)), r.sorted = !0;
    };
    let c = -1, d;
    switch (f) {
      case O.RESET:
        break;
      case O.SET:
        d = m;
        break;
      case O.UNSET:
        d = (p) => p === m ? void 0 : p;
        break;
      case O.FIRST:
        b(), c = 0, d = g[c];
        break;
      case O.LAST:
        b(), c = g.length - 1, d = g[c];
        break;
      case O.SET_INDEX:
        b(), c = u, d = g[c];
        break;
      case O.INCREASE:
        b(), c = y, c < 0 && (c = g.indexOf(m)), c++, c >= g.length && (c = 0), d = g[c];
        break;
      case O.DECREASE:
        b(), c = y, c < 0 && (c = g.indexOf(m)), c--, c < 0 && (c = g.length - 1), d = g[c];
        break;
    }
    d || (c = -1), s(d), r.hoverIndex = c;
  }, [e, r]);
  return {
    hoverItem: n,
    dispatch: a,
    updateItems: o
  };
}, zs = (e, t, n, s) => {
  const i = t.current.getBoundingClientRect(), r = e.current.getBoundingClientRect(), o = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), a = xs(s), f = (c) => c + r.left - o.left - a.left, m = (c) => c + r.left + i.width - o.right + a.right, u = (c) => c + r.top - o.top - a.top, g = (c) => c + r.top + i.height - o.bottom + a.bottom;
  return {
    menuRect: i,
    containerRect: r,
    getLeftOverflow: f,
    getRightOverflow: m,
    getTopOverflow: u,
    getBottomOverflow: g,
    confineHorizontally: (c) => {
      let d = f(c);
      if (d < 0)
        c -= d;
      else {
        const p = m(c);
        p > 0 && (c -= p, d = f(c), d < 0 && (c -= d));
      }
      return c;
    },
    confineVertically: (c) => {
      let d = u(c);
      if (d < 0)
        c -= d;
      else {
        const p = g(c);
        p > 0 && (c -= p, d = u(c), d < 0 && (c -= d));
      }
      return c;
    }
  };
}, Hs = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: s,
  menuRect: i
}) => {
  let r = n.top - s.top - t + n.height / 2;
  const o = e.current.offsetHeight * 1.25;
  return r = Math.max(o, r), r = Math.min(r, i.height - o), r;
}, js = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: s,
  placeLeftX: i,
  placeRightX: r,
  getLeftOverflow: o,
  getRightOverflow: a,
  confineHorizontally: f,
  confineVertically: m,
  arrowRef: u,
  arrow: g,
  direction: y,
  position: b
}) => {
  let c = y, d = s;
  b !== "initial" && (d = m(d), b === "anchor" && (d = Math.min(d, e.bottom - t.top), d = Math.max(d, e.top - t.top - n.height)));
  let p, w, v;
  return c === "left" ? (p = i, b !== "initial" && (w = o(p), w < 0 && (v = a(r), (v <= 0 || -w > v) && (p = r, c = "right")))) : (p = r, b !== "initial" && (v = a(p), v > 0 && (w = o(i), (w >= 0 || -w < v) && (p = i, c = "left")))), b === "auto" && (p = f(p)), {
    arrowY: g ? Hs({
      menuY: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: p,
    y: d,
    computedDirection: c
  };
}, Us = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: s,
  menuRect: i
}) => {
  let r = n.left - s.left - t + n.width / 2;
  const o = e.current.offsetWidth * 1.25;
  return r = Math.max(o, r), r = Math.min(r, i.width - o), r;
}, Fs = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: s,
  placeTopY: i,
  placeBottomY: r,
  getTopOverflow: o,
  getBottomOverflow: a,
  confineHorizontally: f,
  confineVertically: m,
  arrowRef: u,
  arrow: g,
  direction: y,
  position: b
}) => {
  let c = y === "top" ? "top" : "bottom", d = s;
  b !== "initial" && (d = f(d), b === "anchor" && (d = Math.min(d, e.right - t.left), d = Math.max(d, e.left - t.left - n.width)));
  let p, w, v;
  return c === "top" ? (p = i, b !== "initial" && (w = o(p), w < 0 && (v = a(r), (v <= 0 || -w > v) && (p = r, c = "bottom")))) : (p = r, b !== "initial" && (v = a(p), v > 0 && (w = o(i), (w >= 0 || -w < v) && (p = i, c = "top")))), b === "auto" && (p = m(p)), {
    arrowX: g ? Us({
      menuX: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: d,
    y: p,
    computedDirection: c
  };
}, _s = ({
  arrow: e,
  align: t,
  direction: n,
  gap: s,
  shift: i,
  position: r,
  anchorRect: o,
  arrowRef: a,
  positionHelpers: f
}) => {
  const {
    menuRect: m,
    containerRect: u
  } = f, g = n === "left" || n === "right";
  let y = g ? s : i, b = g ? i : s;
  if (e) {
    const k = a.current;
    g ? y += k.offsetWidth : b += k.offsetHeight;
  }
  const c = o.left - u.left - m.width - y, d = o.right - u.left + y, p = o.top - u.top - m.height - b, w = o.bottom - u.top + b;
  let v, C;
  t === "end" ? (v = o.right - u.left - m.width, C = o.bottom - u.top - m.height) : t === "center" ? (v = o.left - u.left - (m.width - o.width) / 2, C = o.top - u.top - (m.height - o.height) / 2) : (v = o.left - u.left, C = o.top - u.top), v += y, C += b;
  const P = {
    ...f,
    anchorRect: o,
    placeLeftX: c,
    placeRightX: d,
    placeLeftorRightY: C,
    placeTopY: p,
    placeBottomY: w,
    placeToporBottomX: v,
    arrowRef: a,
    arrow: e,
    direction: n,
    position: r
  };
  switch (n) {
    case "left":
    case "right":
      return js(P);
    case "top":
    case "bottom":
    default:
      return Fs(P);
  }
}, rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? l.useLayoutEffect : l.useEffect;
function on(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const ut = (e, t) => l.useMemo(() => e ? t ? (n) => {
  on(e, n), on(t, n);
} : e : t, [e, t]), an = -9999, Mn = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: n,
  arrow: s,
  arrowProps: i = {},
  anchorPoint: r,
  anchorRef: o,
  containerRef: a,
  containerProps: f,
  focusProps: m,
  externalRef: u,
  parentScrollingRef: g,
  align: y = "start",
  direction: b = "bottom",
  position: c = "auto",
  overflow: d = "visible",
  setDownOverflow: p,
  repositionFlag: w,
  captureFocus: v = !0,
  state: C,
  endTransition: P,
  isDisabled: k,
  menuItemFocus: z,
  gap: R = 0,
  shift: _ = 0,
  children: se,
  onClose: B,
  ...I
}) => {
  const [H, ie] = l.useState({
    x: an,
    y: an
  }), [Te, ee] = l.useState({}), [L, ae] = l.useState(), [Q, $e] = l.useState(b), [Y] = l.useState(Ls), [Ie, ke] = l.useReducer((E) => E + 1, 1), {
    transition: Xe,
    boundingBoxRef: Oe,
    boundingBoxPadding: Ge,
    rootMenuRef: qe,
    rootAnchorRef: ce,
    scrollNodesRef: dt,
    reposition: Ze,
    viewScroll: Ne,
    submenuCloseDelay: ft
  } = l.useContext(lt), {
    submenuCtx: Ye,
    reposSubmenu: A = w
  } = l.useContext(Nt), W = l.useRef(null), Je = l.useRef(), Vt = l.useRef(), Bt = l.useRef(!1), et = l.useRef({
    width: 0,
    height: 0
  }), Qt = l.useRef(() => {
  }), {
    hoverItem: ht,
    dispatch: G,
    updateItems: tt
  } = As(W, Je), q = jt(C), Wt = ze(Xe, "open"), Kt = ze(Xe, "close"), J = dt.current, Ln = (E) => {
    switch (E.key) {
      case F.HOME:
        G(O.FIRST);
        break;
      case F.END:
        G(O.LAST);
        break;
      case F.UP:
        G(O.DECREASE, ht);
        break;
      case F.DOWN:
        G(O.INCREASE, ht);
        break;
      case F.SPACE:
        E.target && E.target.className.indexOf(me) !== -1 && E.preventDefault();
        return;
      default:
        return;
    }
    E.preventDefault(), E.stopPropagation();
  }, An = () => {
    C === "closing" && ae(), X(P);
  }, zn = (E) => {
    E.stopPropagation(), Y.on(ft, () => {
      G(O.RESET), Je.current.focus();
    });
  }, Hn = (E) => {
    E.target === E.currentTarget && Y.off();
  }, le = l.useCallback((E) => {
    var V;
    const te = o ? (V = o.current) == null ? void 0 : V.getBoundingClientRect() : r ? {
      left: r.x,
      right: r.x,
      top: r.y,
      bottom: r.y,
      width: 0,
      height: 0
    } : null;
    if (!te)
      return;
    J.menu || (J.menu = (Oe ? Oe.current : wt(qe.current)) || window);
    const Z = zs(a, W, J.menu, Ge);
    let {
      arrowX: j,
      arrowY: ve,
      x: we,
      y: re,
      computedDirection: mt
    } = _s({
      arrow: s,
      align: y,
      direction: b,
      gap: R,
      shift: _,
      position: c,
      anchorRect: te,
      arrowRef: Vt,
      positionHelpers: Z
    });
    const {
      menuRect: qt
    } = Z;
    let Ce = qt.height;
    if (!E && d !== "visible") {
      const {
        getTopOverflow: Bn,
        getBottomOverflow: Qn
      } = Z;
      let ye, bt;
      const Zt = et.current.height, nt = Qn(re);
      if (nt > 0 || Se(nt, 0) && Se(Ce, Zt))
        ye = Ce - nt, bt = nt;
      else {
        const De = Bn(re);
        (De < 0 || Se(De, 0) && Se(Ce, Zt)) && (ye = Ce + De, bt = 0 - De, ye >= 0 && (re -= De));
      }
      ye >= 0 ? (Ce = ye, ae({
        height: ye,
        overflowAmt: bt
      })) : ae();
    }
    s && ee({
      x: j,
      y: ve
    }), ie({
      x: we,
      y: re
    }), $e(mt), et.current = {
      width: qt.width,
      height: Ce
    };
  }, [s, y, Ge, b, R, _, c, d, r, o, a, Oe, qe, J]);
  rt(() => {
    q && (le(), Bt.current && ke()), Bt.current = q, Qt.current = le;
  }, [q, le, A]), rt(() => {
    L && !p && (W.current.scrollTop = 0);
  }, [L, p]), rt(() => tt, [tt]), l.useEffect(() => {
    let {
      menu: E
    } = J;
    if (!q || !E)
      return;
    if (E = E.addEventListener ? E : window, !J.anchors) {
      J.anchors = [];
      let j = wt(ce && ce.current);
      for (; j && j !== E; )
        J.anchors.push(j), j = wt(j);
    }
    let V = Ne;
    if (J.anchors.length && V === "initial" && (V = "auto"), V === "initial")
      return;
    const te = () => {
      V === "auto" ? Ot(() => le(!0)) : X(B, {
        reason: He.SCROLL
      });
    }, Z = J.anchors.concat(Ne !== "initial" ? E : []);
    return Z.forEach((j) => j.addEventListener("scroll", te)), () => Z.forEach((j) => j.removeEventListener("scroll", te));
  }, [ce, J, q, B, Ne, le]);
  const $t = !!L && L.overflowAmt > 0;
  l.useEffect(() => {
    if ($t || !q || !g)
      return;
    const E = () => Ot(le), V = g.current;
    return V.addEventListener("scroll", E), () => V.removeEventListener("scroll", E);
  }, [q, $t, g, le]), l.useEffect(() => {
    if (typeof ResizeObserver != "function" || Ze === "initial")
      return;
    const E = new ResizeObserver(([te]) => {
      const {
        borderBoxSize: Z,
        target: j
      } = te;
      let ve, we;
      if (Z) {
        const {
          inlineSize: re,
          blockSize: mt
        } = Z[0] || Z;
        ve = re, we = mt;
      } else {
        const re = j.getBoundingClientRect();
        ve = re.width, we = re.height;
      }
      ve === 0 || we === 0 || Se(ve, et.current.width, 1) && Se(we, et.current.height, 1) || Ae.flushSync(() => {
        Qt.current(), ke();
      });
    }), V = W.current;
    return E.observe(V, {
      box: "border-box"
    }), () => E.unobserve(V);
  }, [Ze]), l.useEffect(() => {
    if (!q) {
      G(O.RESET), Kt || ae();
      return;
    }
    const {
      position: E,
      alwaysUpdate: V
    } = z || {}, te = () => {
      E === Ee.FIRST ? G(O.FIRST) : E === Ee.LAST ? G(O.LAST) : E >= -1 && G(O.SET_INDEX, void 0, E);
    };
    if (V)
      te();
    else if (v) {
      const Z = setTimeout(() => {
        const j = W.current;
        j && !j.contains(document.activeElement) && (Je.current.focus(), te());
      }, Wt ? 170 : 100);
      return () => clearTimeout(Z);
    }
  }, [q, Wt, Kt, v, z, G]);
  const jn = l.useMemo(() => ({
    isParentOpen: q,
    submenuCtx: Y,
    dispatch: G,
    updateItems: tt
  }), [q, Y, G, tt]);
  let pt, gt;
  L && (p ? gt = L.overflowAmt : pt = L.height);
  const Un = l.useMemo(() => ({
    reposSubmenu: Ie,
    submenuCtx: Y,
    overflow: d,
    overflowAmt: gt,
    parentMenuRef: W,
    parentDir: Q
  }), [Ie, Y, d, gt, Q]), Fn = pt >= 0 ? {
    maxHeight: pt,
    overflow: d
  } : void 0, Xt = l.useMemo(() => ({
    state: C,
    dir: Q
  }), [C, Q]), _n = l.useMemo(() => ({
    dir: Q
  }), [Q]), Vn = be({
    block: me,
    element: Ts,
    modifiers: _n,
    className: i.className
  }), Gt = /* @__PURE__ */ N.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ut(k),
    ...Ke({
      onPointerEnter: Ye == null ? void 0 : Ye.off,
      onPointerMove: zn,
      onPointerLeave: Hn,
      onKeyDown: Ln,
      onAnimationEnd: An
    }, I),
    ref: ut(u, W),
    className: be({
      block: me,
      modifiers: Xt,
      className: t
    }),
    style: {
      ...n,
      ...Fn,
      margin: 0,
      display: C === "closed" ? "none" : void 0,
      position: Ct,
      left: H.x,
      top: H.y
    },
    children: [/* @__PURE__ */ N.jsx("li", {
      tabIndex: -1,
      style: {
        position: Ct,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: Je,
      ...rn,
      ...m
    }), s && /* @__PURE__ */ N.jsx("li", {
      ...rn,
      ...i,
      className: Vn,
      style: {
        display: "block",
        position: Ct,
        left: Te.x,
        top: Te.y,
        ...i.style
      },
      ref: Vt
    }), /* @__PURE__ */ N.jsx(Nt.Provider, {
      value: Un,
      children: /* @__PURE__ */ N.jsx(Ft.Provider, {
        value: jn,
        children: /* @__PURE__ */ N.jsx(Sn.Provider, {
          value: ht,
          children: X(se, Xt)
        })
      })
    })]
  });
  return f ? /* @__PURE__ */ N.jsx(Ds, {
    ...f,
    isOpen: q,
    children: Gt
  }) : Gt;
}, Vs = /* @__PURE__ */ l.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: s,
  initialMounted: i,
  unmountOnClose: r,
  transition: o,
  transitionTimeout: a,
  boundingBoxRef: f,
  boundingBoxPadding: m,
  reposition: u = "auto",
  submenuOpenDelay: g = 300,
  submenuCloseDelay: y = 150,
  viewScroll: b = "initial",
  portal: c,
  theming: d,
  onItemClick: p,
  ...w
}, v) {
  const C = l.useRef(null), P = l.useRef({}), {
    anchorRef: k,
    state: z,
    onClose: R
  } = w, _ = l.useMemo(() => ({
    initialMounted: i,
    unmountOnClose: r,
    transition: o,
    transitionTimeout: a,
    boundingBoxRef: f,
    boundingBoxPadding: m,
    rootMenuRef: C,
    rootAnchorRef: k,
    scrollNodesRef: P,
    reposition: u,
    viewScroll: b,
    submenuOpenDelay: g,
    submenuCloseDelay: y
  }), [i, r, o, a, k, f, m, u, b, g, y]), se = l.useMemo(() => ({
    handleClick(I, H) {
      I.stopPropagation || X(p, I);
      let ie = I.keepOpen;
      ie === void 0 && (ie = H && I.key === F.SPACE), ie || X(R, {
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
  }), [p, R]);
  if (!z)
    return null;
  const B = /* @__PURE__ */ N.jsx(lt.Provider, {
    value: _,
    children: /* @__PURE__ */ N.jsx(En.Provider, {
      value: se,
      children: /* @__PURE__ */ N.jsx(Mn, {
        ...w,
        ariaLabel: t || "Menu",
        externalRef: v,
        containerRef: C,
        containerProps: {
          className: n,
          containerRef: C,
          containerProps: s,
          theming: d,
          transition: o,
          onClose: R
        }
      })
    })
  });
  return c === !0 && typeof document < "u" ? /* @__PURE__ */ Ae.createPortal(B, document.body) : c ? c.target ? /* @__PURE__ */ Ae.createPortal(B, c.target) : c.stablePosition ? null : B : B;
}), Dt = 0, Lt = 1, ot = 2, it = 3, at = 4, Bs = 5, xn = 6, Qs = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Pn = (e) => ({
  _s: e,
  status: Qs[e],
  isEnter: e < it,
  isMounted: e !== xn,
  isResolved: e === ot || e > at
}), At = (e) => e ? xn : Bs, Ws = (e, t) => {
  switch (e) {
    case Lt:
    case Dt:
      return ot;
    case at:
    case it:
      return At(t);
  }
}, Ks = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], $s = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), cn = (e, t, n, s, i) => {
  clearTimeout(s.current);
  const r = Pn(e);
  t(r), n.current = r, i && i({
    current: r
  });
}, Xs = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: s,
  timeout: i,
  initialEntered: r,
  mountOnEnter: o,
  unmountOnExit: a,
  onStateChange: f
} = {}) => {
  const [m, u] = l.useState(() => Pn(r ? ot : At(o))), g = l.useRef(m), y = l.useRef(), [b, c] = Ks(i), d = l.useCallback(() => {
    const w = Ws(g.current._s, a);
    w && cn(w, u, g, y, f);
  }, [f, a]), p = l.useCallback((w) => {
    const v = (P) => {
      switch (cn(P, u, g, y, f), P) {
        case Lt:
          b >= 0 && (y.current = setTimeout(d, b));
          break;
        case at:
          c >= 0 && (y.current = setTimeout(d, c));
          break;
        case Dt:
        case it:
          y.current = $s(v, P);
          break;
      }
    }, C = g.current.isEnter;
    typeof w != "boolean" && (w = !C), w ? !C && v(e ? n ? Dt : Lt : ot) : C && v(t ? s ? it : at : At(a));
  }, [d, f, e, t, n, s, b, c, a]);
  return l.useEffect(() => () => clearTimeout(y.current), []), [m, p, d];
}, Gs = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: s,
  transitionTimeout: i = 500
} = {}) => {
  const [{
    status: r
  }, o, a] = Xs({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: i,
    enter: ze(s, "open"),
    exit: ze(s, "close")
  });
  return [{
    state: Ns[r],
    endTransition: a
  }, o];
}, Tn = (e) => {
  const [t, n] = Gs(e), [s, i] = l.useState(), r = (o, a) => {
    i({
      position: o,
      alwaysUpdate: a
    }), n(!0);
  };
  return [{
    menuItemFocus: s,
    ...t
  }, n, r];
}, qs = (e, t) => {
  const [n] = l.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (s) => n.v ? n.v = !1 : t(!0, s)
  };
}, In = (e, t) => {
  const n = l.useRef(t);
  l.useEffect(() => {
    n.current !== t && X(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, Zs = /* @__PURE__ */ l.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: s,
  menuButton: i,
  instanceRef: r,
  onMenuChange: o,
  ...a
}, f) {
  const [m, u, g] = Tn(a), {
    state: y
  } = m, b = jt(y), c = l.useRef(null), d = qs(y, (k, z) => g(z.detail ? void 0 : Ee.FIRST)), p = l.useCallback((k) => {
    u(!1), k.key && c.current.focus();
  }, [u]), w = (k) => {
    switch (k.key) {
      case F.UP:
        g(Ee.LAST);
        break;
      case F.DOWN:
        g(Ee.FIRST);
        break;
      default:
        return;
    }
    k.preventDefault();
  }, v = X(i, {
    open: b
  });
  if (!v || !v.type)
    throw new Error("Menu requires a menuButton prop.");
  const C = {
    ref: ut(v.ref, c),
    ...Ke({
      onKeyDown: w,
      ...d
    }, v.props)
  };
  Ms(v.type) === "MenuButton" && (C.isOpen = b);
  const P = /* @__PURE__ */ l.cloneElement(v, C);
  return In(o, b), l.useImperativeHandle(r, () => ({
    openMenu: g,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ N.jsxs(l.Fragment, {
    children: [P, /* @__PURE__ */ N.jsx(Vs, {
      ...a,
      ...m,
      "aria-label": t || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: c,
      ref: f,
      onClose: p
    })]
  });
}), kn = (e, t) => {
  const n = /* @__PURE__ */ l.memo(t), s = /* @__PURE__ */ l.forwardRef((i, r) => {
    const o = l.useRef(null);
    return /* @__PURE__ */ N.jsx(n, {
      ...i,
      itemRef: o,
      externalRef: r,
      isHovering: l.useContext(Sn) === o.current
    });
  });
  return s.displayName = `WithHovering(${e})`, s;
}, On = (e, t, n) => {
  rt(() => {
    if (e)
      return;
    const s = t.current;
    return n(s, !0), () => {
      n(s);
    };
  }, [e, t, n]);
}, Ys = /* @__PURE__ */ kn("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: s,
  direction: i,
  label: r,
  openTrigger: o,
  onMenuChange: a,
  isHovering: f,
  instanceRef: m,
  itemRef: u,
  captureFocus: g,
  repositionFlag: y,
  itemProps: b = {},
  ...c
}) {
  const d = l.useContext(lt), {
    rootMenuRef: p,
    submenuOpenDelay: w,
    submenuCloseDelay: v
  } = d, {
    parentMenuRef: C,
    parentDir: P,
    overflow: k
  } = l.useContext(Nt), {
    isParentOpen: z,
    submenuCtx: R,
    dispatch: _,
    updateItems: se
  } = l.useContext(Ft), B = k !== "visible", [I, H, ie] = Tn(d), {
    state: Te
  } = I, ee = !!s, L = jt(Te), ae = l.useRef(null), [Q] = l.useState({
    v: 0
  }), $e = () => {
    R.off(), Q.v && (clearTimeout(Q.v), Q.v = 0);
  }, Y = (...A) => {
    $e(), Ie(), !ee && ie(...A);
  }, Ie = () => !f && !ee && _(O.SET, u.current), ke = (A) => {
    Ie(), o || (Q.v = setTimeout(() => Ot(Y), Math.max(A, 0)));
  }, Xe = (A) => {
    ee || (A.stopPropagation(), !(Q.v || L) && R.on(v, () => ke(w - v), () => ke(w)));
  }, Oe = () => {
    $e(), L || _(O.UNSET, u.current);
  }, Ge = (A) => {
    if (f)
      switch (A.key) {
        case F.ENTER:
          A.preventDefault();
        case F.SPACE:
        case F.RIGHT:
          o !== "none" && Y(Ee.FIRST);
      }
  }, qe = (A) => {
    let W = !1;
    switch (A.key) {
      case F.LEFT:
        L && (u.current.focus(), H(!1), W = !0);
        break;
      case F.RIGHT:
        L || (W = !0);
        break;
    }
    W && (A.preventDefault(), A.stopPropagation());
  };
  On(ee, u, se), In(a, L), l.useEffect(() => R.toggle(L), [R, L]), l.useEffect(() => () => clearTimeout(Q.v), [Q]), l.useEffect(() => {
    f && z ? u.current.focus() : H(!1);
  }, [f, z, H, u]), l.useImperativeHandle(m, () => ({
    openMenu: (...A) => {
      z && Y(...A);
    },
    closeMenu: () => {
      L && (u.current.focus(), H(!1));
    }
  }));
  const ce = l.useMemo(() => ({
    open: L,
    hover: f,
    disabled: ee,
    submenu: !0
  }), [L, f, ee]), {
    ref: dt,
    className: Ze,
    ...Ne
  } = b, ft = Ke({
    onPointerEnter: R.off,
    onPointerMove: Xe,
    onPointerLeave: Oe,
    onKeyDown: Ge,
    onClick: () => o !== "none" && Y()
  }, Ne), Ye = () => {
    const A = /* @__PURE__ */ N.jsx(Mn, {
      ...c,
      ...I,
      ariaLabel: t || (typeof r == "string" ? r : "Submenu"),
      anchorRef: u,
      containerRef: B ? p : ae,
      direction: i || (P === "right" || P === "left" ? P : "right"),
      parentScrollingRef: B && C,
      isDisabled: ee
    }), W = p.current;
    return B && W ? /* @__PURE__ */ Ae.createPortal(A, W) : A;
  };
  return /* @__PURE__ */ N.jsxs("li", {
    className: be({
      block: me,
      element: ks,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Rn,
    ref: ae,
    onKeyDown: qe,
    children: [/* @__PURE__ */ N.jsx("div", {
      role: _t,
      "aria-haspopup": !0,
      "aria-expanded": L,
      ...Ut(ee, f),
      ...ft,
      ref: ut(dt, u),
      className: be({
        block: me,
        element: yn,
        modifiers: ce,
        className: Ze
      }),
      children: l.useMemo(() => X(r, ce), [r, ce])
    }), Te && Ye()]
  });
}), Js = (e, t, n, s) => {
  const {
    submenuCloseDelay: i
  } = l.useContext(lt), {
    isParentOpen: r,
    submenuCtx: o,
    dispatch: a,
    updateItems: f
  } = l.useContext(Ft), m = () => {
    !n && !s && a(O.SET, e.current);
  }, u = () => {
    !s && a(O.UNSET, e.current);
  }, g = (c) => {
    n && !c.currentTarget.contains(c.relatedTarget) && u();
  }, y = (c) => {
    s || (c.stopPropagation(), o.on(i, m, m));
  }, b = (c, d) => {
    o.off(), !d && u();
  };
  return On(s, e, f), l.useEffect(() => {
    n && r && t.current && t.current.focus();
  }, [t, n, r]), {
    setHover: m,
    onBlur: g,
    onPointerMove: y,
    onPointerLeave: b
  };
}, st = /* @__PURE__ */ kn("MenuItem", function({
  className: t,
  value: n,
  href: s,
  type: i,
  checked: r,
  disabled: o,
  children: a,
  onClick: f,
  isHovering: m,
  itemRef: u,
  externalRef: g,
  ...y
}) {
  const b = !!o, {
    setHover: c,
    ...d
  } = Js(u, u, m, b), p = l.useContext(En), w = l.useContext(Os), v = i === "radio", C = i === "checkbox", P = !!s && !b && !v && !C, k = v ? w.value === n : C ? !!r : !1, z = (I) => {
    if (b) {
      I.stopPropagation(), I.preventDefault();
      return;
    }
    const H = {
      value: n,
      syntheticEvent: I
    };
    I.key !== void 0 && (H.key = I.key), C && (H.checked = !k), v && (H.name = w.name), X(f, H), v && X(w.onRadioChange, H), p.handleClick(H, C || v);
  }, R = (I) => {
    if (m)
      switch (I.key) {
        case F.ENTER:
          I.preventDefault();
        case F.SPACE:
          P ? u.current.click() : z(I);
      }
  }, _ = l.useMemo(() => ({
    type: i,
    disabled: b,
    hover: m,
    checked: k,
    anchor: P
  }), [i, b, m, k, P]), se = Ke({
    ...d,
    onPointerDown: c,
    onKeyDown: R,
    onClick: z
  }, y), B = {
    role: v ? "menuitemradio" : C ? "menuitemcheckbox" : _t,
    "aria-checked": v || C ? k : void 0,
    ...Ut(b, m),
    ...se,
    ref: ut(g, u),
    className: be({
      block: me,
      element: yn,
      modifiers: _,
      className: t
    }),
    children: l.useMemo(() => X(a, _), [a, _])
  };
  return P ? /* @__PURE__ */ N.jsx("li", {
    role: Rn,
    children: /* @__PURE__ */ N.jsx("a", {
      href: s,
      ...B
    })
  }) : /* @__PURE__ */ N.jsx("li", {
    ...B
  });
}), er = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: t,
  ...n
}, s) {
  return /* @__PURE__ */ N.jsx("li", {
    role: "separator",
    ...n,
    ref: s,
    className: be({
      block: me,
      element: Is,
      className: t
    })
  });
}));
const tr = "szh-menu", nr = "item", sr = (e) => (t) => (n) => {
  let s = `.${e}`;
  return t && (s += `__${t}`), n && (s += `--${n}`), s;
}, Nn = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((s) => {
    const i = s.split("-").reduce((r, o) => `${r}${o[0].toUpperCase()}${o.slice(1)}`);
    Object.defineProperty(n, i, {
      value: e(s),
      enumerable: !0
    });
  }), n;
}, rr = ["dir-left", "dir-right", "dir-top", "dir-bottom"], Dn = /* @__PURE__ */ sr(tr);
[...rr];
const ln = /* @__PURE__ */ Nn(/* @__PURE__ */ Dn(nr), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), or = os(Zs)`
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
`, ir = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: s
  } = n, i = s.getVisibleLeafColumns().length;
  return /* @__PURE__ */ $(or, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    /* @__PURE__ */ $(st, { onClick: () => t.column.toggleSorting(!1), children: [
      /* @__PURE__ */ S(ue, { icon: Cn.faArrowUpAZ }),
      " Сортировать по возрастанию"
    ] }),
    /* @__PURE__ */ $(st, { onClick: () => t.column.toggleSorting(!0), children: [
      /* @__PURE__ */ S(ue, { icon: wn.faArrowDownZA }),
      "Сортировать по убыванию"
    ] }),
    /* @__PURE__ */ $(st, { disabled: i === 1, onClick: () => t.column.toggleVisibility(), children: [
      /* @__PURE__ */ S(ue, { icon: vn.faEyeSlash }),
      "Скрыть колонку"
    ] }),
    /* @__PURE__ */ S(er, {}),
    /* @__PURE__ */ S(Ys, { label: /* @__PURE__ */ $(Zn, { children: [
      /* @__PURE__ */ S(ue, { icon: bn.faTableColumns }),
      "Колонки"
    ] }), children: s.getAllLeafColumns().map((r) => /* @__PURE__ */ S(st, { type: "checkbox", checked: r.getIsVisible(), disabled: i === 1 && r.getIsVisible(), onClick: (o) => {
      o.keepOpen = !0, r.toggleVisibility();
    }, children: zt(r.columnDef.header, n) }, r.id)) })
  ] });
}, ar = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: s,
    getContext: i,
    getResizeHandler: r
  } = e;
  return /* @__PURE__ */ $("th", { css: [{
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
  }, St`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: t, children: [
    /* @__PURE__ */ $("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, St`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ $("div", { onClick: () => {
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
        n.getIsSorted() === "asc" && /* @__PURE__ */ S(ue, { icon: mn.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ S(ue, { icon: gn.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ S(ir, { header: e, children: ({
        open: o
      }) => /* @__PURE__ */ S("div", { className: "menu", css: [{
        position: "relative",
        right: "0px",
        padding: "0.5rem",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
        }
      }, {
        cursor: "pointer"
      }, o ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ S(ue, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: pn.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ S("div", { css: [{
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
    }], onMouseDown: r(), onTouchStart: r(), className: "resizer" })
  ] });
}, cr = ({
  table: e
}) => /* @__PURE__ */ S(Yn, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ $("table", { css: [{
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
}, St`
            table-layout: fixed;
          `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((t) => /* @__PURE__ */ S("colgroup", { children: t.headers.map((n) => /* @__PURE__ */ S("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, t.id)),
  /* @__PURE__ */ S("thead", { css: {
    position: "sticky",
    top: "0px",
    zIndex: "10",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ S("tr", { children: t.headers.map((n) => /* @__PURE__ */ S(ar, { ...n }, n.id)) }, t.id)) }),
  /* @__PURE__ */ S("tbody", { children: e.getRowModel().rows.map((t) => /* @__PURE__ */ S("tr", { css: [{
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
    }
  }], children: t.getVisibleCells().map((n) => /* @__PURE__ */ S("td", { css: [{
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderBottomWidth: "1px",
    borderRightWidth: "1px",
    padding: "0.375rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem"
  }, n.column.getIsResizing() && {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  }], children: /* @__PURE__ */ S("span", { css: [{
    position: "relative"
  }], children: zt(n.column.columnDef.cell, n.getContext()) }) }, n.id)) }, t.id)) })
] }) }), lr = ({
  table: e
}) => /* @__PURE__ */ $("div", { css: {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem"
}, children: [
  /* @__PURE__ */ S("button", { css: {
    borderRadius: "0.25rem",
    borderWidth: "1px",
    padding: "0.25rem"
  }, onClick: () => e.setPageIndex(0), disabled: !e.getCanPreviousPage(), children: "<<" }),
  /* @__PURE__ */ S("button", { css: {
    borderRadius: "0.25rem",
    borderWidth: "1px",
    padding: "0.25rem"
  }, onClick: () => e.previousPage(), disabled: !e.getCanPreviousPage(), children: "<" }),
  /* @__PURE__ */ S("button", { css: {
    borderRadius: "0.25rem",
    borderWidth: "1px",
    padding: "0.25rem"
  }, onClick: () => e.nextPage(), disabled: !e.getCanNextPage(), children: ">" }),
  /* @__PURE__ */ S("button", { css: {
    borderRadius: "0.25rem",
    borderWidth: "1px",
    padding: "0.25rem"
  }, onClick: () => e.setPageIndex(e.getPageCount() - 1), disabled: !e.getCanNextPage(), children: ">>" }),
  /* @__PURE__ */ $("span", { css: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem"
  }, children: [
    /* @__PURE__ */ S("div", { children: "Page" }),
    /* @__PURE__ */ $("strong", { children: [
      e.getState().pagination.pageIndex + 1,
      " of ",
      e.getPageCount()
    ] })
  ] }),
  /* @__PURE__ */ $("span", { css: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem"
  }, children: [
    "| Go to page:",
    /* @__PURE__ */ S("input", { type: "number", defaultValue: e.getState().pagination.pageIndex + 1, onChange: (t) => {
      const n = t.target.value ? Number(t.target.value) - 1 : 0;
      e.setPageIndex(n);
    }, css: {
      width: "4rem",
      borderRadius: "0.25rem",
      borderWidth: "1px",
      padding: "0.25rem"
    } })
  ] }),
  /* @__PURE__ */ S("select", { value: e.getState().pagination.pageSize, onChange: (t) => {
    e.setPageSize(Number(t.target.value));
  }, children: [10, 20, 30, 40, 50].map((t) => /* @__PURE__ */ $("option", { value: t, children: [
    "Show ",
    t
  ] }, t)) }),
  e.isLoading ? "Loading..." : null
] }), ur = ({
  columns: e,
  data: t = [],
  isLoading: n,
  ...s
}) => {
  const [i, {
    width: r
  }] = Jn(), o = is({
    getCoreRowModel: as(),
    columnResizeMode: "onChange",
    ...s,
    columns: e,
    data: t
  });
  return {
    ref: i,
    isLoading: n,
    ...o
  };
}, dr = () => {
  const e = es();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function fr(e, t) {
  let n;
  typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const {
    url: s,
    params: i,
    ...r
  } = n, o = dr();
  return Es({
    queryKey: i ? [s, i, o.defaults.headers.Authorization || ""] : [s, o.defaults.headers.Authorization || ""],
    queryFn: async ({
      signal: a
    }) => {
      const {
        data: f
      } = await o.get(s, {
        params: i,
        signal: a
      });
      return f;
    },
    ...r
  });
}
const hr = (e, t, n) => {
  var m, u;
  const [s, i] = l.useState({
    pageIndex: 0,
    pageSize: 20
  }), {
    pageIndex: r,
    pageSize: o
  } = s, a = fr(e, {
    params: {
      start: r * o,
      length: o
    },
    placeholderData: ts
  }), f = Number((m = a.data) == null ? void 0 : m.recordsFiltered);
  return ur({
    ...n,
    columns: t,
    data: (u = a.data) == null ? void 0 : u.data,
    isLoading: a.isFetching,
    manualPagination: !0,
    onPaginationChange: i,
    pageCount: f > 0 ? Math.ceil(f / o) : -1,
    state: {
      ...n == null ? void 0 : n.state,
      pagination: s
    }
  });
}, pr = () => {
  const {
    close: e,
    setTitle: t,
    maximize: n,
    minimize: s,
    fold: i,
    setWidth: r,
    setHeight: o,
    updatePosition: a
  } = ns();
  return {
    close: e,
    setTitle: t,
    maximize: n,
    minimize: s,
    fold: i,
    setWidth: r,
    setHeight: o,
    updatePosition: a
  };
}, gr = [{
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
}], Er = () => {
  const {
    close: e
  } = pr(), t = hr("/api/rest/user", gr);
  return /* @__PURE__ */ S(rs, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ S(ss, { onClick: e, children: "Закрыть" }, "close")],
    left: /* @__PURE__ */ S(lr, { table: t })
  }, children: /* @__PURE__ */ S(cr, { table: t }) });
};
export {
  Er as default
};
