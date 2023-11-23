var wt = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var h = (e, n, t) => (wt(e, n, "read from private field"), t ? t.call(e) : n.get(e)), T = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, M = (e, n, t, s) => (wt(e, n, "write to private field"), s ? s.call(e, t) : n.set(e, t), t);
var L = (e, n, t) => (wt(e, n, "access private method"), t);
import { S as Zn, s as St, n as Yn, i as Jt, a as en, t as Jn, f as es, c as ts, r as tn, b as fn, u as ns, j as W, d as C, F as ss, e as is, g as rs, h as os, k as as } from "./library-f9686326.js";
import { P as cs } from "./Panel-3d904a02.js";
import { j as D, n as ls, a as Et, I as Ae } from "./mui-a200cd22.js";
import { f as jt, u as us, g as ds } from "./table-46c094fe.js";
import { F as Y } from "./icons-a8a50daa.js";
import { r as l, c as xe } from "./react-72acea58.js";
var K, P, Re, H, de, Me, se, He, Pe, Ne, fe, he, oe, ge, me, ze, Fe, Rt, Ue, Mt, Ve, Pt, Be, Nt, Qe, Tt, $e, It, Ke, Ot, lt, hn, dn, fs = (dn = class extends Zn {
  constructor(n, t) {
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
    T(this, H, void 0);
    T(this, de, void 0);
    T(this, Me, void 0);
    T(this, se, void 0);
    T(this, He, void 0);
    T(this, Pe, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    T(this, Ne, void 0);
    T(this, fe, void 0);
    T(this, he, void 0);
    T(this, oe, void 0);
    T(this, ge, void 0);
    M(this, P, void 0), M(this, Re, void 0), M(this, H, void 0), M(this, ge, /* @__PURE__ */ new Set()), M(this, K, n), this.options = t, M(this, se, null), this.bindMethods(), this.setOptions(t);
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
  setOptions(n, t) {
    const s = this.options, o = h(this, P);
    if (this.options = h(this, K).defaultQueryOptions(n), St(s, this.options) || h(this, K).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: h(this, P),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey), L(this, Ke, Ot).call(this);
    const i = this.hasListeners();
    i && sn(
      h(this, P),
      o,
      this.options,
      s
    ) && L(this, me, ze).call(this), this.updateResult(t), i && (h(this, P) !== o || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && L(this, Fe, Rt).call(this);
    const r = L(this, Ue, Mt).call(this);
    i && (h(this, P) !== o || this.options.enabled !== s.enabled || r !== h(this, oe)) && L(this, Ve, Pt).call(this, r);
  }
  getOptimisticResult(n) {
    const t = h(this, K).getQueryCache().build(h(this, K), n), s = this.createResult(t, n);
    return gs(this, s) && (M(this, H, s), M(this, Me, this.options), M(this, de, h(this, P).state)), s;
  }
  getCurrentResult() {
    return h(this, H);
  }
  trackResult(n) {
    const t = {};
    return Object.keys(n).forEach((s) => {
      Object.defineProperty(t, s, {
        configurable: !1,
        enumerable: !0,
        get: () => (h(this, ge).add(s), n[s])
      });
    }), t;
  }
  getCurrentQuery() {
    return h(this, P);
  }
  refetch({ ...n } = {}) {
    return this.fetch({
      ...n
    });
  }
  fetchOptimistic(n) {
    const t = h(this, K).defaultQueryOptions(n), s = h(this, K).getQueryCache().build(h(this, K), t);
    return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, t));
  }
  fetch(n) {
    return L(this, me, ze).call(this, {
      ...n,
      cancelRefetch: n.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), h(this, H)));
  }
  createResult(n, t) {
    var x;
    const s = h(this, P), o = this.options, i = h(this, H), r = h(this, de), a = h(this, Me), b = n !== s ? n.state : h(this, Re), { state: u } = n;
    let { error: g, errorUpdatedAt: y, fetchStatus: p, status: c } = u, d = !1, m;
    if (t._optimisticResults) {
      const R = this.hasListeners(), U = !R && nn(n, t), ie = R && sn(n, s, t, o);
      (U || ie) && (p = ts(n.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (c = "pending")), t._optimisticResults === "isRestoring" && (p = "idle");
    }
    if (t.select && typeof u.data < "u")
      if (i && u.data === (r == null ? void 0 : r.data) && t.select === h(this, He))
        m = h(this, Pe);
      else
        try {
          M(this, He, t.select), m = t.select(u.data), m = tn(i == null ? void 0 : i.data, m, t), M(this, Pe, m), M(this, se, null);
        } catch (R) {
          M(this, se, R);
        }
    else
      m = u.data;
    if (typeof t.placeholderData < "u" && typeof m > "u" && c === "pending") {
      let R;
      if (i != null && i.isPlaceholderData && t.placeholderData === (a == null ? void 0 : a.placeholderData))
        R = i.data;
      else if (R = typeof t.placeholderData == "function" ? t.placeholderData(
        (x = h(this, Ne)) == null ? void 0 : x.state.data,
        h(this, Ne)
      ) : t.placeholderData, t.select && typeof R < "u")
        try {
          R = t.select(R), M(this, se, null);
        } catch (U) {
          M(this, se, U);
        }
      typeof R < "u" && (c = "success", m = tn(
        i == null ? void 0 : i.data,
        R,
        t
      ), d = !0);
    }
    h(this, se) && (g = h(this, se), m = h(this, Pe), y = Date.now(), c = "error");
    const w = p === "fetching", v = c === "pending", S = c === "error", N = v && w;
    return {
      status: c,
      fetchStatus: p,
      isPending: v,
      isSuccess: c === "success",
      isError: S,
      isInitialLoading: N,
      isLoading: N,
      data: m,
      dataUpdatedAt: u.dataUpdatedAt,
      error: g,
      errorUpdatedAt: y,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > b.dataUpdateCount || u.errorUpdateCount > b.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !v,
      isLoadingError: S && u.dataUpdatedAt === 0,
      isPaused: p === "paused",
      isPlaceholderData: d,
      isRefetchError: S && u.dataUpdatedAt !== 0,
      isStale: _t(n, t),
      refetch: this.refetch
    };
  }
  updateResult(n) {
    const t = h(this, H), s = this.createResult(h(this, P), this.options);
    if (M(this, de, h(this, P).state), M(this, Me, this.options), h(this, de).data !== void 0 && M(this, Ne, h(this, P)), St(s, t))
      return;
    M(this, H, s);
    const o = {}, i = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: r } = this.options, a = typeof r == "function" ? r() : r;
      if (a === "all" || !a && !h(this, ge).size)
        return !0;
      const f = new Set(
        a ?? h(this, ge)
      );
      return this.options.throwOnError && f.add("error"), Object.keys(h(this, H)).some((b) => {
        const u = b;
        return h(this, H)[u] !== t[u] && f.has(u);
      });
    };
    (n == null ? void 0 : n.listeners) !== !1 && i() && (o.listeners = !0), L(this, lt, hn).call(this, { ...o, ...n });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && L(this, Be, Nt).call(this);
  }
}, K = new WeakMap(), P = new WeakMap(), Re = new WeakMap(), H = new WeakMap(), de = new WeakMap(), Me = new WeakMap(), se = new WeakMap(), He = new WeakMap(), Pe = new WeakMap(), Ne = new WeakMap(), fe = new WeakMap(), he = new WeakMap(), oe = new WeakMap(), ge = new WeakMap(), me = new WeakSet(), ze = function(n) {
  L(this, Ke, Ot).call(this);
  let t = h(this, P).fetch(
    this.options,
    n
  );
  return n != null && n.throwOnError || (t = t.catch(Yn)), t;
}, Fe = new WeakSet(), Rt = function() {
  if (L(this, Qe, Tt).call(this), Jt || h(this, H).isStale || !en(this.options.staleTime))
    return;
  const t = Jn(
    h(this, H).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  M(this, fe, setTimeout(() => {
    h(this, H).isStale || this.updateResult();
  }, t));
}, Ue = new WeakSet(), Mt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(h(this, P)) : this.options.refetchInterval) ?? !1;
}, Ve = new WeakSet(), Pt = function(n) {
  L(this, $e, It).call(this), M(this, oe, n), !(Jt || this.options.enabled === !1 || !en(h(this, oe)) || h(this, oe) === 0) && M(this, he, setInterval(() => {
    (this.options.refetchIntervalInBackground || es.isFocused()) && L(this, me, ze).call(this);
  }, h(this, oe)));
}, Be = new WeakSet(), Nt = function() {
  L(this, Fe, Rt).call(this), L(this, Ve, Pt).call(this, L(this, Ue, Mt).call(this));
}, Qe = new WeakSet(), Tt = function() {
  h(this, fe) && (clearTimeout(h(this, fe)), M(this, fe, void 0));
}, $e = new WeakSet(), It = function() {
  h(this, he) && (clearInterval(h(this, he)), M(this, he, void 0));
}, Ke = new WeakSet(), Ot = function() {
  const n = h(this, K).getQueryCache().build(h(this, K), this.options);
  if (n === h(this, P))
    return;
  const t = h(this, P);
  M(this, P, n), M(this, Re, n.state), this.hasListeners() && (t == null || t.removeObserver(this), n.addObserver(this));
}, lt = new WeakSet(), hn = function(n) {
  fn.batch(() => {
    n.listeners && this.listeners.forEach((t) => {
      t(h(this, H));
    }), h(this, K).getQueryCache().notify({
      query: h(this, P),
      type: "observerResultsUpdated"
    });
  });
}, dn);
function hs(e, n) {
  return n.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && n.retryOnMount === !1);
}
function nn(e, n) {
  return hs(e, n) || e.state.dataUpdatedAt > 0 && kt(e, n, n.refetchOnMount);
}
function kt(e, n, t) {
  if (n.enabled !== !1) {
    const s = typeof t == "function" ? t(e) : t;
    return s === "always" || s !== !1 && _t(e, n);
  }
  return !1;
}
function sn(e, n, t, s) {
  return t.enabled !== !1 && (e !== n || s.enabled === !1) && (!t.suspense || e.state.status !== "error") && _t(e, t);
}
function _t(e, n) {
  return e.isStaleByTime(n.staleTime);
}
function gs(e, n) {
  return !St(e.getCurrentResult(), n);
}
var gn = l.createContext(!1), ms = () => l.useContext(gn);
gn.Provider;
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
var vs = l.createContext(ps()), bs = () => l.useContext(vs);
function ws(e, n) {
  return typeof e == "function" ? e(...n) : !!e;
}
var ys = (e, n) => {
  (e.suspense || e.throwOnError) && (n.isReset() || (e.retryOnMount = !1));
}, Cs = (e) => {
  l.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Ss = ({
  result: e,
  errorResetBoundary: n,
  throwOnError: t,
  query: s
}) => e.isError && !n.isReset() && !e.isFetching && ws(t, [e.error, s]), Es = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Rs = (e, n) => (e == null ? void 0 : e.suspense) && n.isPending, Ms = (e, n, t) => n.fetchOptimistic(e).catch(() => {
  t.clearReset();
});
function Ps(e, n, t) {
  const s = ns(t), o = ms(), i = bs(), r = s.defaultQueryOptions(e);
  r._optimisticResults = o ? "isRestoring" : "optimistic", Es(r), ys(r, i), Cs(i);
  const [a] = l.useState(
    () => new n(
      s,
      r
    )
  ), f = a.getOptimisticResult(r);
  if (l.useSyncExternalStore(
    l.useCallback(
      (b) => {
        const u = o ? () => {
        } : a.subscribe(fn.batchCalls(b));
        return a.updateResult(), u;
      },
      [a, o]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), l.useEffect(() => {
    a.setOptions(r, { listeners: !1 });
  }, [r, a]), Rs(r, f))
    throw Ms(r, a, i);
  if (Ss({
    result: f,
    errorResetBoundary: i,
    throwOnError: r.throwOnError,
    query: a.getCurrentQuery()
  }))
    throw f.error;
  return r.notifyOnChangeProps ? f : a.trackResult(f);
}
function Ns(e, n) {
  return Ps(e, fs, n);
}
var mn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "caret-down", s = 320, o = 512, i = [], r = "f0d7", a = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faCaretDown = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(mn);
var pn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "arrow-down", s = 384, o = 512, i = [8595], r = "f063", a = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowDown = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(pn);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "arrow-up", s = 384, o = 512, i = [8593], r = "f062", a = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowUp = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(vn);
var bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "table-columns", s = 512, o = 512, i = ["columns"], r = "f0db", a = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faTableColumns = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(bn);
var wn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "eye-slash", s = 640, o = 512, i = [], r = "f070", a = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faEyeSlash = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(wn);
var yn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "arrow-down-z-a", s = 576, o = 512, i = ["sort-alpha-desc", "sort-alpha-down-alt"], r = "f881", a = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(yn);
var Cn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "arrow-up-a-z", s = 576, o = 512, i = ["sort-alpha-up"], r = "f15e", a = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(Cn);
const Ht = (e) => !!e && e[0] === "o", Dt = xe.unstable_batchedUpdates || ((e) => e()), Se = (e, n, t = 1e-4) => Math.abs(e - n) < t, je = (e, n) => e === !0 || !!(e && e[n]), X = (e, n) => typeof e == "function" ? e(n) : e, Ts = "_szhsinMenu", Is = (e) => e[Ts], We = (e, n) => (n && Object.keys(n).forEach((t) => {
  const s = e[t], o = n[t];
  typeof o == "function" && s ? e[t] = (...i) => {
    o(...i), s(...i);
  } : e[t] = o;
}), e), Os = (e) => {
  if (typeof e != "string")
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  const n = e.trim().split(/\s+/, 4).map(parseFloat), t = isNaN(n[0]) ? 0 : n[0], s = isNaN(n[1]) ? t : n[1];
  return {
    top: t,
    right: s,
    bottom: isNaN(n[2]) ? t : n[2],
    left: isNaN(n[3]) ? s : n[3]
  };
}, yt = (e) => {
  for (; e; ) {
    if (e = e.parentNode, !e || e === document.body || !e.parentNode)
      return;
    const {
      overflow: n,
      overflowX: t,
      overflowY: s
    } = getComputedStyle(e);
    if (/auto|scroll|overlay|hidden/.test(n + s + t))
      return e;
  }
};
function Ft(e, n) {
  return {
    "aria-disabled": e || void 0,
    tabIndex: n ? 0 : -1
  };
}
function rn(e, n) {
  for (let t = 0; t < e.length; t++)
    if (e[t] === n)
      return t;
  return -1;
}
const ve = ({
  block: e,
  element: n,
  modifiers: t,
  className: s
}) => l.useMemo(() => {
  const o = n ? `${e}__${n}` : e;
  let i = o;
  t && Object.keys(t).forEach((a) => {
    const f = t[a];
    f && (i += ` ${o}--${f === !0 ? a : `${a}-${f}`}`);
  });
  let r = typeof s == "function" ? s(t) : s;
  return typeof r == "string" && (r = r.trim(), r && (i += ` ${r}`)), i;
}, [e, n, t, s]), ks = "szh-menu-container", pe = "szh-menu", Ds = "arrow", Sn = "item", Ls = "divider", As = "submenu", En = /* @__PURE__ */ l.createContext(), Ut = /* @__PURE__ */ l.createContext({}), Lt = /* @__PURE__ */ l.createContext({}), Rn = /* @__PURE__ */ l.createContext({}), zs = /* @__PURE__ */ l.createContext({}), ut = /* @__PURE__ */ l.createContext({}), F = /* @__PURE__ */ Object.freeze({
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
}), _e = /* @__PURE__ */ Object.freeze({
  CLICK: "click",
  CANCEL: "cancel",
  BLUR: "blur",
  SCROLL: "scroll"
}), Ee = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), xs = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Ct = "absolute", Mn = "presentation", Vt = "menuitem", on = {
  "aria-hidden": !0,
  role: Vt
}, js = ({
  className: e,
  containerRef: n,
  containerProps: t,
  children: s,
  isOpen: o,
  theming: i,
  transition: r,
  onClose: a
}) => {
  const f = je(r, "item"), b = ({
    key: g
  }) => {
    switch (g) {
      case F.ESC:
        X(a, {
          key: g,
          reason: _e.CANCEL
        });
        break;
    }
  }, u = (g) => {
    o && !g.currentTarget.contains(g.relatedTarget) && X(a, {
      reason: _e.BLUR
    });
  };
  return /* @__PURE__ */ D.jsx("div", {
    ...We({
      onKeyDown: b,
      onBlur: u
    }, t),
    className: ve({
      block: ks,
      modifiers: l.useMemo(() => ({
        theme: i,
        itemTransition: f
      }), [i, f]),
      className: e
    }),
    style: {
      position: "absolute",
      ...t == null ? void 0 : t.style
    },
    ref: n,
    children: s
  });
}, _s = () => {
  let e, n = 0;
  return {
    toggle: (t) => {
      t ? n++ : n--, n = Math.max(n, 0);
    },
    on: (t, s, o) => {
      n ? e || (e = setTimeout(() => {
        e = 0, s();
      }, t)) : o == null || o();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, Hs = (e, n) => {
  const [t, s] = l.useState(), i = l.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, r = l.useCallback((f, b) => {
    const {
      items: u
    } = i;
    if (!f)
      i.items = [];
    else if (b)
      u.push(f);
    else {
      const g = u.indexOf(f);
      g > -1 && (u.splice(g, 1), f.contains(document.activeElement) && (n.current.focus(), s()));
    }
    i.hoverIndex = -1, i.sorted = !1;
  }, [i, n]), a = l.useCallback((f, b, u) => {
    const {
      items: g,
      hoverIndex: y
    } = i, p = () => {
      if (i.sorted)
        return;
      const m = e.current.querySelectorAll(".szh-menu__item");
      g.sort((w, v) => rn(m, w) - rn(m, v)), i.sorted = !0;
    };
    let c = -1, d;
    switch (f) {
      case k.RESET:
        break;
      case k.SET:
        d = b;
        break;
      case k.UNSET:
        d = (m) => m === b ? void 0 : m;
        break;
      case k.FIRST:
        p(), c = 0, d = g[c];
        break;
      case k.LAST:
        p(), c = g.length - 1, d = g[c];
        break;
      case k.SET_INDEX:
        p(), c = u, d = g[c];
        break;
      case k.INCREASE:
        p(), c = y, c < 0 && (c = g.indexOf(b)), c++, c >= g.length && (c = 0), d = g[c];
        break;
      case k.DECREASE:
        p(), c = y, c < 0 && (c = g.indexOf(b)), c--, c < 0 && (c = g.length - 1), d = g[c];
        break;
    }
    d || (c = -1), s(d), i.hoverIndex = c;
  }, [e, i]);
  return {
    hoverItem: t,
    dispatch: a,
    updateItems: r
  };
}, Fs = (e, n, t, s) => {
  const o = n.current.getBoundingClientRect(), i = e.current.getBoundingClientRect(), r = t === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : t.getBoundingClientRect(), a = Os(s), f = (c) => c + i.left - r.left - a.left, b = (c) => c + i.left + o.width - r.right + a.right, u = (c) => c + i.top - r.top - a.top, g = (c) => c + i.top + o.height - r.bottom + a.bottom;
  return {
    menuRect: o,
    containerRect: i,
    getLeftOverflow: f,
    getRightOverflow: b,
    getTopOverflow: u,
    getBottomOverflow: g,
    confineHorizontally: (c) => {
      let d = f(c);
      if (d < 0)
        c -= d;
      else {
        const m = b(c);
        m > 0 && (c -= m, d = f(c), d < 0 && (c -= d));
      }
      return c;
    },
    confineVertically: (c) => {
      let d = u(c);
      if (d < 0)
        c -= d;
      else {
        const m = g(c);
        m > 0 && (c -= m, d = u(c), d < 0 && (c -= d));
      }
      return c;
    }
  };
}, Us = ({
  arrowRef: e,
  menuY: n,
  anchorRect: t,
  containerRect: s,
  menuRect: o
}) => {
  let i = t.top - s.top - n + t.height / 2;
  const r = e.current.offsetHeight * 1.25;
  return i = Math.max(r, i), i = Math.min(i, o.height - r), i;
}, Vs = ({
  anchorRect: e,
  containerRect: n,
  menuRect: t,
  placeLeftorRightY: s,
  placeLeftX: o,
  placeRightX: i,
  getLeftOverflow: r,
  getRightOverflow: a,
  confineHorizontally: f,
  confineVertically: b,
  arrowRef: u,
  arrow: g,
  direction: y,
  position: p
}) => {
  let c = y, d = s;
  p !== "initial" && (d = b(d), p === "anchor" && (d = Math.min(d, e.bottom - n.top), d = Math.max(d, e.top - n.top - t.height)));
  let m, w, v;
  return c === "left" ? (m = o, p !== "initial" && (w = r(m), w < 0 && (v = a(i), (v <= 0 || -w > v) && (m = i, c = "right")))) : (m = i, p !== "initial" && (v = a(m), v > 0 && (w = r(o), (w >= 0 || -w < v) && (m = o, c = "left")))), p === "auto" && (m = f(m)), {
    arrowY: g ? Us({
      menuY: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: n,
      menuRect: t
    }) : void 0,
    x: m,
    y: d,
    computedDirection: c
  };
}, Bs = ({
  arrowRef: e,
  menuX: n,
  anchorRect: t,
  containerRect: s,
  menuRect: o
}) => {
  let i = t.left - s.left - n + t.width / 2;
  const r = e.current.offsetWidth * 1.25;
  return i = Math.max(r, i), i = Math.min(i, o.width - r), i;
}, Qs = ({
  anchorRect: e,
  containerRect: n,
  menuRect: t,
  placeToporBottomX: s,
  placeTopY: o,
  placeBottomY: i,
  getTopOverflow: r,
  getBottomOverflow: a,
  confineHorizontally: f,
  confineVertically: b,
  arrowRef: u,
  arrow: g,
  direction: y,
  position: p
}) => {
  let c = y === "top" ? "top" : "bottom", d = s;
  p !== "initial" && (d = f(d), p === "anchor" && (d = Math.min(d, e.right - n.left), d = Math.max(d, e.left - n.left - t.width)));
  let m, w, v;
  return c === "top" ? (m = o, p !== "initial" && (w = r(m), w < 0 && (v = a(i), (v <= 0 || -w > v) && (m = i, c = "bottom")))) : (m = i, p !== "initial" && (v = a(m), v > 0 && (w = r(o), (w >= 0 || -w < v) && (m = o, c = "top")))), p === "auto" && (m = b(m)), {
    arrowX: g ? Bs({
      menuX: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: n,
      menuRect: t
    }) : void 0,
    x: d,
    y: m,
    computedDirection: c
  };
}, $s = ({
  arrow: e,
  align: n,
  direction: t,
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
  } = f, g = t === "left" || t === "right";
  let y = g ? s : o, p = g ? o : s;
  if (e) {
    const O = a.current;
    g ? y += O.offsetWidth : p += O.offsetHeight;
  }
  const c = r.left - u.left - b.width - y, d = r.right - u.left + y, m = r.top - u.top - b.height - p, w = r.bottom - u.top + p;
  let v, S;
  n === "end" ? (v = r.right - u.left - b.width, S = r.bottom - u.top - b.height) : n === "center" ? (v = r.left - u.left - (b.width - r.width) / 2, S = r.top - u.top - (b.height - r.height) / 2) : (v = r.left - u.left, S = r.top - u.top), v += y, S += p;
  const N = {
    ...f,
    anchorRect: r,
    placeLeftX: c,
    placeRightX: d,
    placeLeftorRightY: S,
    placeTopY: m,
    placeBottomY: w,
    placeToporBottomX: v,
    arrowRef: a,
    arrow: e,
    direction: t,
    position: i
  };
  switch (t) {
    case "left":
    case "right":
      return Vs(N);
    case "top":
    case "bottom":
    default:
      return Qs(N);
  }
}, rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? l.useLayoutEffect : l.useEffect;
function an(e, n) {
  typeof e == "function" ? e(n) : e.current = n;
}
const dt = (e, n) => l.useMemo(() => e ? n ? (t) => {
  an(e, t), an(n, t);
} : e : n, [e, n]), cn = -9999, Pn = ({
  ariaLabel: e,
  menuClassName: n,
  menuStyle: t,
  arrow: s,
  arrowProps: o = {},
  anchorPoint: i,
  anchorRef: r,
  containerRef: a,
  containerProps: f,
  focusProps: b,
  externalRef: u,
  parentScrollingRef: g,
  align: y = "start",
  direction: p = "bottom",
  position: c = "auto",
  overflow: d = "visible",
  setDownOverflow: m,
  repositionFlag: w,
  captureFocus: v = !0,
  state: S,
  endTransition: N,
  isDisabled: O,
  menuItemFocus: x,
  gap: R = 0,
  shift: U = 0,
  children: ie,
  onClose: B,
  ...I
}) => {
  const [j, ae] = l.useState({
    x: cn,
    y: cn
  }), [Te, te] = l.useState({}), [A, ce] = l.useState(), [Q, Xe] = l.useState(p), [J] = l.useState(_s), [Ie, Oe] = l.useReducer((E) => E + 1, 1), {
    transition: qe,
    boundingBoxRef: ke,
    boundingBoxPadding: Ge,
    rootMenuRef: Ze,
    rootAnchorRef: le,
    scrollNodesRef: ft,
    reposition: Ye,
    viewScroll: De,
    submenuCloseDelay: ht
  } = l.useContext(ut), {
    submenuCtx: Je,
    reposSubmenu: z = w
  } = l.useContext(Lt), $ = l.useRef(null), et = l.useRef(), Bt = l.useRef(), Qt = l.useRef(!1), tt = l.useRef({
    width: 0,
    height: 0
  }), $t = l.useRef(() => {
  }), {
    hoverItem: gt,
    dispatch: q,
    updateItems: nt
  } = Hs($, et), G = Ht(S), Kt = je(qe, "open"), Wt = je(qe, "close"), ee = ft.current, Fn = (E) => {
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
  }, Un = () => {
    S === "closing" && ce(), X(N);
  }, Vn = (E) => {
    E.stopPropagation(), J.on(ht, () => {
      q(k.RESET), et.current.focus();
    });
  }, Bn = (E) => {
    E.target === E.currentTarget && J.off();
  }, ue = l.useCallback((E) => {
    var V;
    const ne = r ? (V = r.current) == null ? void 0 : V.getBoundingClientRect() : i ? {
      left: i.x,
      right: i.x,
      top: i.y,
      bottom: i.y,
      width: 0,
      height: 0
    } : null;
    if (!ne)
      return;
    ee.menu || (ee.menu = (ke ? ke.current : yt(Ze.current)) || window);
    const Z = Fs(a, $, ee.menu, Ge);
    let {
      arrowX: _,
      arrowY: be,
      x: we,
      y: re,
      computedDirection: vt
    } = $s({
      arrow: s,
      align: y,
      direction: p,
      gap: R,
      shift: U,
      position: c,
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
        getTopOverflow: qn,
        getBottomOverflow: Gn
      } = Z;
      let Ce, bt;
      const Yt = tt.current.height, st = Gn(re);
      if (st > 0 || Se(st, 0) && Se(ye, Yt))
        Ce = ye - st, bt = st;
      else {
        const Le = qn(re);
        (Le < 0 || Se(Le, 0) && Se(ye, Yt)) && (Ce = ye + Le, bt = 0 - Le, Ce >= 0 && (re -= Le));
      }
      Ce >= 0 ? (ye = Ce, ce({
        height: Ce,
        overflowAmt: bt
      })) : ce();
    }
    s && te({
      x: _,
      y: be
    }), ae({
      x: we,
      y: re
    }), Xe(vt), tt.current = {
      width: Zt.width,
      height: ye
    };
  }, [s, y, Ge, p, R, U, c, d, i, r, a, ke, Ze, ee]);
  rt(() => {
    G && (ue(), Qt.current && Oe()), Qt.current = G, $t.current = ue;
  }, [G, ue, z]), rt(() => {
    A && !m && ($.current.scrollTop = 0);
  }, [A, m]), rt(() => nt, [nt]), l.useEffect(() => {
    let {
      menu: E
    } = ee;
    if (!G || !E)
      return;
    if (E = E.addEventListener ? E : window, !ee.anchors) {
      ee.anchors = [];
      let _ = yt(le && le.current);
      for (; _ && _ !== E; )
        ee.anchors.push(_), _ = yt(_);
    }
    let V = De;
    if (ee.anchors.length && V === "initial" && (V = "auto"), V === "initial")
      return;
    const ne = () => {
      V === "auto" ? Dt(() => ue(!0)) : X(B, {
        reason: _e.SCROLL
      });
    }, Z = ee.anchors.concat(De !== "initial" ? E : []);
    return Z.forEach((_) => _.addEventListener("scroll", ne)), () => Z.forEach((_) => _.removeEventListener("scroll", ne));
  }, [le, ee, G, B, De, ue]);
  const Xt = !!A && A.overflowAmt > 0;
  l.useEffect(() => {
    if (Xt || !G || !g)
      return;
    const E = () => Dt(ue), V = g.current;
    return V.addEventListener("scroll", E), () => V.removeEventListener("scroll", E);
  }, [G, Xt, g, ue]), l.useEffect(() => {
    if (typeof ResizeObserver != "function" || Ye === "initial")
      return;
    const E = new ResizeObserver(([ne]) => {
      const {
        borderBoxSize: Z,
        target: _
      } = ne;
      let be, we;
      if (Z) {
        const {
          inlineSize: re,
          blockSize: vt
        } = Z[0] || Z;
        be = re, we = vt;
      } else {
        const re = _.getBoundingClientRect();
        be = re.width, we = re.height;
      }
      be === 0 || we === 0 || Se(be, tt.current.width, 1) && Se(we, tt.current.height, 1) || xe.flushSync(() => {
        $t.current(), Oe();
      });
    }), V = $.current;
    return E.observe(V, {
      box: "border-box"
    }), () => E.unobserve(V);
  }, [Ye]), l.useEffect(() => {
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
    else if (v) {
      const Z = setTimeout(() => {
        const _ = $.current;
        _ && !_.contains(document.activeElement) && (et.current.focus(), ne());
      }, Kt ? 170 : 100);
      return () => clearTimeout(Z);
    }
  }, [G, Kt, Wt, v, x, q]);
  const Qn = l.useMemo(() => ({
    isParentOpen: G,
    submenuCtx: J,
    dispatch: q,
    updateItems: nt
  }), [G, J, q, nt]);
  let mt, pt;
  A && (m ? pt = A.overflowAmt : mt = A.height);
  const $n = l.useMemo(() => ({
    reposSubmenu: Ie,
    submenuCtx: J,
    overflow: d,
    overflowAmt: pt,
    parentMenuRef: $,
    parentDir: Q
  }), [Ie, J, d, pt, Q]), Kn = mt >= 0 ? {
    maxHeight: mt,
    overflow: d
  } : void 0, qt = l.useMemo(() => ({
    state: S,
    dir: Q
  }), [S, Q]), Wn = l.useMemo(() => ({
    dir: Q
  }), [Q]), Xn = ve({
    block: pe,
    element: Ds,
    modifiers: Wn,
    className: o.className
  }), Gt = /* @__PURE__ */ D.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ft(O),
    ...We({
      onPointerEnter: Je == null ? void 0 : Je.off,
      onPointerMove: Vn,
      onPointerLeave: Bn,
      onKeyDown: Fn,
      onAnimationEnd: Un
    }, I),
    ref: dt(u, $),
    className: ve({
      block: pe,
      modifiers: qt,
      className: n
    }),
    style: {
      ...t,
      ...Kn,
      margin: 0,
      display: S === "closed" ? "none" : void 0,
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
      className: Xn,
      style: {
        display: "block",
        position: Ct,
        left: Te.x,
        top: Te.y,
        ...o.style
      },
      ref: Bt
    }), /* @__PURE__ */ D.jsx(Lt.Provider, {
      value: $n,
      children: /* @__PURE__ */ D.jsx(Ut.Provider, {
        value: Qn,
        children: /* @__PURE__ */ D.jsx(En.Provider, {
          value: gt,
          children: X(ie, qt)
        })
      })
    })]
  });
  return f ? /* @__PURE__ */ D.jsx(js, {
    ...f,
    isOpen: G,
    children: Gt
  }) : Gt;
}, Ks = /* @__PURE__ */ l.forwardRef(function({
  "aria-label": n,
  className: t,
  containerProps: s,
  initialMounted: o,
  unmountOnClose: i,
  transition: r,
  transitionTimeout: a,
  boundingBoxRef: f,
  boundingBoxPadding: b,
  reposition: u = "auto",
  submenuOpenDelay: g = 300,
  submenuCloseDelay: y = 150,
  viewScroll: p = "initial",
  portal: c,
  theming: d,
  onItemClick: m,
  ...w
}, v) {
  const S = l.useRef(null), N = l.useRef({}), {
    anchorRef: O,
    state: x,
    onClose: R
  } = w, U = l.useMemo(() => ({
    initialMounted: o,
    unmountOnClose: i,
    transition: r,
    transitionTimeout: a,
    boundingBoxRef: f,
    boundingBoxPadding: b,
    rootMenuRef: S,
    rootAnchorRef: O,
    scrollNodesRef: N,
    reposition: u,
    viewScroll: p,
    submenuOpenDelay: g,
    submenuCloseDelay: y
  }), [o, i, r, a, O, f, b, u, p, g, y]), ie = l.useMemo(() => ({
    handleClick(I, j) {
      I.stopPropagation || X(m, I);
      let ae = I.keepOpen;
      ae === void 0 && (ae = j && I.key === F.SPACE), ae || X(R, {
        value: I.value,
        key: I.key,
        reason: _e.CLICK
      });
    },
    handleClose(I) {
      X(R, {
        key: I,
        reason: _e.CLICK
      });
    }
  }), [m, R]);
  if (!x)
    return null;
  const B = /* @__PURE__ */ D.jsx(ut.Provider, {
    value: U,
    children: /* @__PURE__ */ D.jsx(Rn.Provider, {
      value: ie,
      children: /* @__PURE__ */ D.jsx(Pn, {
        ...w,
        ariaLabel: n || "Menu",
        externalRef: v,
        containerRef: S,
        containerProps: {
          className: t,
          containerRef: S,
          containerProps: s,
          theming: d,
          transition: r,
          onClose: R
        }
      })
    })
  });
  return c === !0 && typeof document < "u" ? /* @__PURE__ */ xe.createPortal(B, document.body) : c ? c.target ? /* @__PURE__ */ xe.createPortal(B, c.target) : c.stablePosition ? null : B : B;
}), At = 0, zt = 1, ot = 2, at = 3, ct = 4, Ws = 5, Nn = 6, Xs = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Tn = (e) => ({
  _s: e,
  status: Xs[e],
  isEnter: e < at,
  isMounted: e !== Nn,
  isResolved: e === ot || e > ct
}), xt = (e) => e ? Nn : Ws, qs = (e, n) => {
  switch (e) {
    case zt:
    case At:
      return ot;
    case ct:
    case at:
      return xt(n);
  }
}, Gs = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], Zs = (e, n) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(n + 1);
}, 0), ln = (e, n, t, s, o) => {
  clearTimeout(s.current);
  const i = Tn(e);
  n(i), t.current = i, o && o({
    current: i
  });
}, Ys = ({
  enter: e = !0,
  exit: n = !0,
  preEnter: t,
  preExit: s,
  timeout: o,
  initialEntered: i,
  mountOnEnter: r,
  unmountOnExit: a,
  onStateChange: f
} = {}) => {
  const [b, u] = l.useState(() => Tn(i ? ot : xt(r))), g = l.useRef(b), y = l.useRef(), [p, c] = Gs(o), d = l.useCallback(() => {
    const w = qs(g.current._s, a);
    w && ln(w, u, g, y, f);
  }, [f, a]), m = l.useCallback((w) => {
    const v = (N) => {
      switch (ln(N, u, g, y, f), N) {
        case zt:
          p >= 0 && (y.current = setTimeout(d, p));
          break;
        case ct:
          c >= 0 && (y.current = setTimeout(d, c));
          break;
        case At:
        case at:
          y.current = Zs(v, N);
          break;
      }
    }, S = g.current.isEnter;
    typeof w != "boolean" && (w = !S), w ? !S && v(e ? t ? At : zt : ot) : S && v(n ? s ? at : ct : xt(a));
  }, [d, f, e, n, t, s, p, c, a]);
  return l.useEffect(() => () => clearTimeout(y.current), []), [b, m, d];
}, Js = ({
  initialOpen: e,
  initialMounted: n,
  unmountOnClose: t,
  transition: s,
  transitionTimeout: o = 500
} = {}) => {
  const [{
    status: i
  }, r, a] = Ys({
    initialEntered: e,
    mountOnEnter: !n,
    unmountOnExit: t,
    timeout: o,
    enter: je(s, "open"),
    exit: je(s, "close")
  });
  return [{
    state: xs[i],
    endTransition: a
  }, r];
}, In = (e) => {
  const [n, t] = Js(e), [s, o] = l.useState(), i = (r, a) => {
    o({
      position: r,
      alwaysUpdate: a
    }), t(!0);
  };
  return [{
    menuItemFocus: s,
    ...n
  }, t, i];
}, ei = (e, n) => {
  const [t] = l.useState({});
  return {
    onMouseDown: () => {
      t.v = e && e !== "closed";
    },
    onClick: (s) => t.v ? t.v = !1 : n(!0, s)
  };
}, On = (e, n) => {
  const t = l.useRef(n);
  l.useEffect(() => {
    t.current !== n && X(e, {
      open: n
    }), t.current = n;
  }, [e, n]);
}, ti = /* @__PURE__ */ l.forwardRef(function({
  "aria-label": n,
  captureFocus: t,
  initialOpen: s,
  menuButton: o,
  instanceRef: i,
  onMenuChange: r,
  ...a
}, f) {
  const [b, u, g] = In(a), {
    state: y
  } = b, p = Ht(y), c = l.useRef(null), d = ei(y, (O, x) => g(x.detail ? void 0 : Ee.FIRST)), m = l.useCallback((O) => {
    u(!1), O.key && c.current.focus();
  }, [u]), w = (O) => {
    switch (O.key) {
      case F.UP:
        g(Ee.LAST);
        break;
      case F.DOWN:
        g(Ee.FIRST);
        break;
      default:
        return;
    }
    O.preventDefault();
  }, v = X(o, {
    open: p
  });
  if (!v || !v.type)
    throw new Error("Menu requires a menuButton prop.");
  const S = {
    ref: dt(v.ref, c),
    ...We({
      onKeyDown: w,
      ...d
    }, v.props)
  };
  Is(v.type) === "MenuButton" && (S.isOpen = p);
  const N = /* @__PURE__ */ l.cloneElement(v, S);
  return On(r, p), l.useImperativeHandle(i, () => ({
    openMenu: g,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ D.jsxs(l.Fragment, {
    children: [N, /* @__PURE__ */ D.jsx(Ks, {
      ...a,
      ...b,
      "aria-label": n || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: c,
      ref: f,
      onClose: m
    })]
  });
}), kn = (e, n) => {
  const t = /* @__PURE__ */ l.memo(n), s = /* @__PURE__ */ l.forwardRef((o, i) => {
    const r = l.useRef(null);
    return /* @__PURE__ */ D.jsx(t, {
      ...o,
      itemRef: r,
      externalRef: i,
      isHovering: l.useContext(En) === r.current
    });
  });
  return s.displayName = `WithHovering(${e})`, s;
}, Dn = (e, n, t) => {
  rt(() => {
    if (e)
      return;
    const s = n.current;
    return t(s, !0), () => {
      t(s);
    };
  }, [e, n, t]);
}, ni = /* @__PURE__ */ kn("SubMenu", function({
  "aria-label": n,
  className: t,
  disabled: s,
  direction: o,
  label: i,
  openTrigger: r,
  onMenuChange: a,
  isHovering: f,
  instanceRef: b,
  itemRef: u,
  captureFocus: g,
  repositionFlag: y,
  itemProps: p = {},
  ...c
}) {
  const d = l.useContext(ut), {
    rootMenuRef: m,
    submenuOpenDelay: w,
    submenuCloseDelay: v
  } = d, {
    parentMenuRef: S,
    parentDir: N,
    overflow: O
  } = l.useContext(Lt), {
    isParentOpen: x,
    submenuCtx: R,
    dispatch: U,
    updateItems: ie
  } = l.useContext(Ut), B = O !== "visible", [I, j, ae] = In(d), {
    state: Te
  } = I, te = !!s, A = Ht(Te), ce = l.useRef(null), [Q] = l.useState({
    v: 0
  }), Xe = () => {
    R.off(), Q.v && (clearTimeout(Q.v), Q.v = 0);
  }, J = (...z) => {
    Xe(), Ie(), !te && ae(...z);
  }, Ie = () => !f && !te && U(k.SET, u.current), Oe = (z) => {
    Ie(), r || (Q.v = setTimeout(() => Dt(J), Math.max(z, 0)));
  }, qe = (z) => {
    te || (z.stopPropagation(), !(Q.v || A) && R.on(v, () => Oe(w - v), () => Oe(w)));
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
  Dn(te, u, ie), On(a, A), l.useEffect(() => R.toggle(A), [R, A]), l.useEffect(() => () => clearTimeout(Q.v), [Q]), l.useEffect(() => {
    f && x ? u.current.focus() : j(!1);
  }, [f, x, j, u]), l.useImperativeHandle(b, () => ({
    openMenu: (...z) => {
      x && J(...z);
    },
    closeMenu: () => {
      A && (u.current.focus(), j(!1));
    }
  }));
  const le = l.useMemo(() => ({
    open: A,
    hover: f,
    disabled: te,
    submenu: !0
  }), [A, f, te]), {
    ref: ft,
    className: Ye,
    ...De
  } = p, ht = We({
    onPointerEnter: R.off,
    onPointerMove: qe,
    onPointerLeave: ke,
    onKeyDown: Ge,
    onClick: () => r !== "none" && J()
  }, De), Je = () => {
    const z = /* @__PURE__ */ D.jsx(Pn, {
      ...c,
      ...I,
      ariaLabel: n || (typeof i == "string" ? i : "Submenu"),
      anchorRef: u,
      containerRef: B ? m : ce,
      direction: o || (N === "right" || N === "left" ? N : "right"),
      parentScrollingRef: B && S,
      isDisabled: te
    }), $ = m.current;
    return B && $ ? /* @__PURE__ */ xe.createPortal(z, $) : z;
  };
  return /* @__PURE__ */ D.jsxs("li", {
    className: ve({
      block: pe,
      element: As,
      className: t
    }),
    style: {
      position: "relative"
    },
    role: Mn,
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
        element: Sn,
        modifiers: le,
        className: Ye
      }),
      children: l.useMemo(() => X(i, le), [i, le])
    }), Te && Je()]
  });
}), si = (e, n, t, s) => {
  const {
    submenuCloseDelay: o
  } = l.useContext(ut), {
    isParentOpen: i,
    submenuCtx: r,
    dispatch: a,
    updateItems: f
  } = l.useContext(Ut), b = () => {
    !t && !s && a(k.SET, e.current);
  }, u = () => {
    !s && a(k.UNSET, e.current);
  }, g = (c) => {
    t && !c.currentTarget.contains(c.relatedTarget) && u();
  }, y = (c) => {
    s || (c.stopPropagation(), r.on(o, b, b));
  }, p = (c, d) => {
    r.off(), !d && u();
  };
  return Dn(s, e, f), l.useEffect(() => {
    t && i && n.current && n.current.focus();
  }, [n, t, i]), {
    setHover: b,
    onBlur: g,
    onPointerMove: y,
    onPointerLeave: p
  };
}, it = /* @__PURE__ */ kn("MenuItem", function({
  className: n,
  value: t,
  href: s,
  type: o,
  checked: i,
  disabled: r,
  children: a,
  onClick: f,
  isHovering: b,
  itemRef: u,
  externalRef: g,
  ...y
}) {
  const p = !!r, {
    setHover: c,
    ...d
  } = si(u, u, b, p), m = l.useContext(Rn), w = l.useContext(zs), v = o === "radio", S = o === "checkbox", N = !!s && !p && !v && !S, O = v ? w.value === t : S ? !!i : !1, x = (I) => {
    if (p) {
      I.stopPropagation(), I.preventDefault();
      return;
    }
    const j = {
      value: t,
      syntheticEvent: I
    };
    I.key !== void 0 && (j.key = I.key), S && (j.checked = !O), v && (j.name = w.name), X(f, j), v && X(w.onRadioChange, j), m.handleClick(j, S || v);
  }, R = (I) => {
    if (b)
      switch (I.key) {
        case F.ENTER:
          I.preventDefault();
        case F.SPACE:
          N ? u.current.click() : x(I);
      }
  }, U = l.useMemo(() => ({
    type: o,
    disabled: p,
    hover: b,
    checked: O,
    anchor: N
  }), [o, p, b, O, N]), ie = We({
    ...d,
    onPointerDown: c,
    onKeyDown: R,
    onClick: x
  }, y), B = {
    role: v ? "menuitemradio" : S ? "menuitemcheckbox" : Vt,
    "aria-checked": v || S ? O : void 0,
    ...Ft(p, b),
    ...ie,
    ref: dt(g, u),
    className: ve({
      block: pe,
      element: Sn,
      modifiers: U,
      className: n
    }),
    children: l.useMemo(() => X(a, U), [a, U])
  };
  return N ? /* @__PURE__ */ D.jsx("li", {
    role: Mn,
    children: /* @__PURE__ */ D.jsx("a", {
      href: s,
      ...B
    })
  }) : /* @__PURE__ */ D.jsx("li", {
    ...B
  });
}), ii = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: n,
  ...t
}, s) {
  return /* @__PURE__ */ D.jsx("li", {
    role: "separator",
    ...t,
    ref: s,
    className: ve({
      block: pe,
      element: Ls,
      className: n
    })
  });
}));
const ri = "szh-menu", oi = "item", ai = (e) => (n) => (t) => {
  let s = `.${e}`;
  return n && (s += `__${n}`), t && (s += `--${t}`), s;
}, Ln = (e, n = []) => {
  const t = {};
  return Object.defineProperty(t, "name", {
    value: e(),
    enumerable: !0
  }), n.forEach((s) => {
    const o = s.split("-").reduce((i, r) => `${i}${r[0].toUpperCase()}${r.slice(1)}`);
    Object.defineProperty(t, o, {
      value: e(s),
      enumerable: !0
    });
  }), t;
}, ci = ["dir-left", "dir-right", "dir-top", "dir-bottom"], An = /* @__PURE__ */ ai(ri);
[...ci];
const un = /* @__PURE__ */ Ln(/* @__PURE__ */ An(oi), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), li = ls(ti)`
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
  }
`, ui = ({
  children: e,
  header: n
}) => {
  const t = n.getContext(), {
    table: s
  } = t, o = s.getVisibleLeafColumns().length;
  return /* @__PURE__ */ W(li, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    /* @__PURE__ */ W(it, { onClick: () => n.column.toggleSorting(!1), children: [
      /* @__PURE__ */ C(Y, { icon: Cn.faArrowUpAZ }),
      " Сортировать по возрастанию"
    ] }),
    /* @__PURE__ */ W(it, { onClick: () => n.column.toggleSorting(!0), children: [
      /* @__PURE__ */ C(Y, { icon: yn.faArrowDownZA }),
      "Сортировать по убыванию"
    ] }),
    /* @__PURE__ */ W(it, { disabled: o === 1, onClick: () => n.column.toggleVisibility(), children: [
      /* @__PURE__ */ C(Y, { icon: wn.faEyeSlash }),
      "Скрыть колонку"
    ] }),
    /* @__PURE__ */ C(ii, {}),
    /* @__PURE__ */ C(ni, { label: /* @__PURE__ */ W(ss, { children: [
      /* @__PURE__ */ C(Y, { icon: bn.faTableColumns }),
      "Колонки"
    ] }), children: s.getAllLeafColumns().map((i) => /* @__PURE__ */ C(it, { type: "checkbox", checked: i.getIsVisible(), disabled: o === 1 && i.getIsVisible(), onClick: (r) => {
      r.keepOpen = !0, i.toggleVisibility();
    }, children: jt(i.columnDef.header, t) }, i.id)) })
  ] });
}, di = (e) => {
  const {
    colSpan: n,
    column: t,
    isPlaceholder: s,
    getContext: o,
    getResizeHandler: i
  } = e;
  return /* @__PURE__ */ W("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, t.getIsResizing() && {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  }, Et`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: n, children: [
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
        if (t.getCanSort())
          return t.toggleSorting();
      }, css: [t.getCanSort() ? {
        cursor: "pointer"
      } : null, {
        position: "relative",
        flex: "1 1 0%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0.5rem"
      }], children: [
        s ? null : jt(t.columnDef.header, o()),
        " ",
        t.getIsSorted() === "asc" && /* @__PURE__ */ C(Y, { icon: vn.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        t.getIsSorted() === "desc" && /* @__PURE__ */ C(Y, { icon: pn.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ C(ui, { header: e, children: ({
        open: r
      }) => /* @__PURE__ */ C("div", { className: "menu", css: [{
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
      }], children: /* @__PURE__ */ C(Y, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: mn.faCaretDown }) }) })
    ] }),
    t.getCanResize() && /* @__PURE__ */ C("div", { css: [{
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
    }, t.getIsResizing() && {
      backgroundColor: "rgb(141 148 205 / 0.3)"
    }], onMouseDown: i(), onTouchStart: i(), className: "resizer" })
  ] });
}, fi = ({
  ...e
}) => /* @__PURE__ */ C(is, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ W("table", { css: [{
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
  e.getHeaderGroups().map((n) => /* @__PURE__ */ C("colgroup", { children: n.headers.map((t) => /* @__PURE__ */ C("col", { span: t.colSpan, style: {
    width: t.column.getSize()
  } }, t.id)) }, n.id)),
  /* @__PURE__ */ C("thead", { css: {
    position: "sticky",
    top: "0px",
    zIndex: "10",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }, children: e.getHeaderGroups().map((n) => /* @__PURE__ */ C("tr", { children: n.headers.map((t) => /* @__PURE__ */ C(di, { ...t }, t.id)) }, n.id)) }),
  /* @__PURE__ */ C("tbody", { children: e.getRowModel().rows.map((n) => /* @__PURE__ */ C("tr", { css: [{
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
    }
  }], children: n.getVisibleCells().map((t) => /* @__PURE__ */ C("td", { css: [{
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    borderBottomWidth: "1px",
    borderRightWidth: "1px",
    padding: "0.375rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem"
  }, t.column.getIsResizing() && {
    "--tw-border-opacity": "1",
    borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
  }], children: /* @__PURE__ */ C("span", { css: [{
    position: "relative"
  }], children: jt(t.column.columnDef.cell, t.getContext()) }) }, t.id)) }, n.id)) })
] }) });
var zn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "arrows-rotate", s = 512, o = 512, i = [128472, "refresh", "sync"], r = "f021", a = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(zn);
var xn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "angles-right", s = 512, o = 512, i = [187, "angle-double-right"], r = "f101", a = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faAnglesRight = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(xn);
var jn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "angle-right", s = 320, o = 512, i = [8250], r = "f105", a = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faAngleRight = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(jn);
var _n = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "angle-left", s = 320, o = 512, i = [8249], r = "f104", a = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faAngleLeft = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(_n);
var Hn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", t = "angles-left", s = 512, o = 512, i = [171, "angle-double-left"], r = "f100", a = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: n,
    iconName: t,
    icon: [
      s,
      o,
      i,
      r,
      a
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = n, e.iconName = t, e.width = s, e.height = o, e.ligatures = i, e.unicode = r, e.svgPathData = a, e.aliases = i;
})(Hn);
const hi = ({
  refetch: e,
  recordsTotal: n,
  ...t
}) => /* @__PURE__ */ W("div", { css: {
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
    /* @__PURE__ */ C(Ae, { onClick: () => t.setPageIndex(0), size: "small", disabled: !t.getCanPreviousPage(), children: /* @__PURE__ */ C(Y, { icon: Hn.faAnglesLeft }) }),
    /* @__PURE__ */ C(Ae, { size: "small", onClick: () => t.previousPage(), disabled: !t.getCanPreviousPage(), children: /* @__PURE__ */ C(Y, { icon: _n.faAngleLeft }) }),
    /* @__PURE__ */ W("span", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      "Страница",
      /* @__PURE__ */ C("input", { type: "number", value: t.getState().pagination.pageIndex + 1, onChange: (s) => {
        const o = s.target.value ? Number(s.target.value) - 1 : 0;
        t.setPageIndex(o);
      }, css: {
        width: "3rem",
        borderWidth: "1px",
        padding: "0.25rem"
      } }),
      "из ",
      t.getPageCount()
    ] }),
    /* @__PURE__ */ C(Ae, { size: "small", onClick: () => t.nextPage(), disabled: !t.getCanNextPage(), children: /* @__PURE__ */ C(Y, { icon: jn.faAngleRight }) }),
    /* @__PURE__ */ C(Ae, { size: "small", onClick: () => t.setPageIndex(t.getPageCount() - 1), disabled: !t.getCanNextPage(), children: /* @__PURE__ */ C(Y, { icon: xn.faAnglesRight }) }),
    e && /* @__PURE__ */ C(Ae, { size: "small", disabled: t.isFetching, onClick: e, children: /* @__PURE__ */ C(Y, { spin: t.isFetching, icon: zn.faArrowsRotate }) })
  ] }),
  /* @__PURE__ */ W("div", { css: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }, children: [
    /* @__PURE__ */ W("span", { children: [
      `Отражаются записи c ${t.getState().pagination.pageIndex * t.getState().pagination.pageSize + 1} по ${t.getState().pagination.pageIndex * t.getState().pagination.pageSize + t.getRowModel().rows.length}`,
      n && n > 0 ? `, всего ${n}` : ""
    ] }),
    /* @__PURE__ */ C("select", { css: {
      borderWidth: "1px",
      padding: "0.25rem"
    }, value: t.getState().pagination.pageSize, onChange: (s) => {
      t.setPageSize(Number(s.target.value));
    }, children: [10, 20, 30, 40, 50].map((s) => /* @__PURE__ */ C("option", { value: s, children: s }, s)) })
  ] })
] }), gi = ({
  columns: e,
  data: n = [],
  isLoading: t,
  isFetching: s,
  ...o
}) => {
  const [i, {
    width: r
  }] = rs(), a = us({
    getCoreRowModel: ds(),
    columnResizeMode: "onChange",
    ...o,
    columns: e,
    data: n
  });
  return {
    ref: i,
    isLoading: t,
    isFetching: s,
    ...a
  };
}, mi = () => {
  const e = os();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function pi(e, n) {
  let t;
  typeof e == "string" ? t = {
    url: e,
    ...n
  } : t = e;
  const {
    url: s,
    params: o,
    ...i
  } = t, r = mi();
  return Ns({
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
const vi = (e, n, t) => {
  var u, g, y;
  const [s, o] = l.useState({
    pageIndex: 0,
    pageSize: 20
  }), {
    pageIndex: i,
    pageSize: r
  } = s, a = pi(e, {
    params: {
      start: i * r,
      length: r
    },
    placeholderData: as
  }), f = isNaN(Number((u = a.data) == null ? void 0 : u.recordsFiltered)) ? 0 : Number((g = a.data) == null ? void 0 : g.recordsFiltered);
  return {
    ...gi({
      ...t,
      columns: n,
      data: (y = a.data) == null ? void 0 : y.data,
      isLoading: a.isLoading,
      isFetching: a.isFetching,
      manualPagination: !0,
      onPaginationChange: o,
      pageCount: f > 0 ? Math.ceil(f / r) : 1,
      state: {
        ...t == null ? void 0 : t.state,
        pagination: s
      }
    }),
    recordsTotal: f,
    refetch: () => a.refetch()
  };
}, bi = [{
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
}], Pi = () => {
  const e = vi("/api/rest/user", bi);
  return /* @__PURE__ */ C(cs, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    center: /* @__PURE__ */ C(hi, { ...e })
  }, children: /* @__PURE__ */ C(fi, { ...e }) });
};
export {
  Pi as default
};
