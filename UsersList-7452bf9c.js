var wt = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var h = (e, t, n) => (wt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), N = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, M = (e, t, n, i) => (wt(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
var L = (e, t, n) => (wt(e, t, "access private method"), n);
import { S as Yn, s as St, n as qn, i as Jt, a as en, t as Jn, f as es, c as ts, r as tn, b as fn, u as ns, j as X, d as C, F as ss, e as is, g as rs, h as os, k as as, l as cs } from "./library-739aa917.js";
import { C as ls, P as us } from "./Panel-4b0faf03.js";
import { j as D, n as ds, a as Et, I as Ae } from "./mui-a200cd22.js";
import { f as jt, u as fs, g as hs } from "./table-46c094fe.js";
import { F as q } from "./icons-a8a50daa.js";
import { r as l, c as xe } from "./react-72acea58.js";
var W, P, Re, _, de, Me, se, _e, Pe, Te, fe, he, oe, ge, me, ze, Fe, Rt, Ue, Mt, Ve, Pt, Be, Tt, Qe, Nt, Ke, Ot, We, It, lt, hn, dn, gs = (dn = class extends Yn {
  constructor(t, n) {
    super();
    N(this, me);
    N(this, Fe);
    N(this, Ue);
    N(this, Ve);
    N(this, Be);
    N(this, Qe);
    N(this, Ke);
    N(this, We);
    N(this, lt);
    N(this, W, void 0);
    N(this, P, void 0);
    N(this, Re, void 0);
    N(this, _, void 0);
    N(this, de, void 0);
    N(this, Me, void 0);
    N(this, se, void 0);
    N(this, _e, void 0);
    N(this, Pe, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    N(this, Te, void 0);
    N(this, fe, void 0);
    N(this, he, void 0);
    N(this, oe, void 0);
    N(this, ge, void 0);
    M(this, P, void 0), M(this, Re, void 0), M(this, _, void 0), M(this, ge, /* @__PURE__ */ new Set()), M(this, W, t), this.options = n, M(this, se, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (h(this, P).addObserver(this), nn(h(this, P), this.options) ? L(this, me, ze).call(this) : this.updateResult(), L(this, Be, Tt).call(this));
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
    this.listeners = /* @__PURE__ */ new Set(), L(this, Qe, Nt).call(this), L(this, Ke, Ot).call(this), h(this, P).removeObserver(this);
  }
  setOptions(t, n) {
    const i = this.options, o = h(this, P);
    if (this.options = h(this, W).defaultQueryOptions(t), St(i, this.options) || h(this, W).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: h(this, P),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = i.queryKey), L(this, We, It).call(this);
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
    const n = h(this, W).getQueryCache().build(h(this, W), t), i = this.createResult(n, t);
    return ps(this, i) && (M(this, _, i), M(this, Me, this.options), M(this, de, h(this, P).state)), i;
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
    const n = h(this, W).defaultQueryOptions(t), i = h(this, W).getQueryCache().build(h(this, W), n);
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
    let { error: g, errorUpdatedAt: S, fetchStatus: p, status: c } = u, d = !1, m;
    if (n._optimisticResults) {
      const R = this.hasListeners(), U = !R && nn(t, n), ie = R && sn(t, i, n, o);
      (U || ie) && (p = ts(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (c = "pending")), n._optimisticResults === "isRestoring" && (p = "idle");
    }
    if (n.select && typeof u.data < "u")
      if (s && u.data === (r == null ? void 0 : r.data) && n.select === h(this, _e))
        m = h(this, Pe);
      else
        try {
          M(this, _e, n.select), m = n.select(u.data), m = tn(s == null ? void 0 : s.data, m, n), M(this, Pe, m), M(this, se, null);
        } catch (R) {
          M(this, se, R);
        }
    else
      m = u.data;
    if (typeof n.placeholderData < "u" && typeof m > "u" && c === "pending") {
      let R;
      if (s != null && s.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
        R = s.data;
      else if (R = typeof n.placeholderData == "function" ? n.placeholderData(
        (x = h(this, Te)) == null ? void 0 : x.state.data,
        h(this, Te)
      ) : n.placeholderData, n.select && typeof R < "u")
        try {
          R = n.select(R), M(this, se, null);
        } catch (U) {
          M(this, se, U);
        }
      typeof R < "u" && (c = "success", m = tn(
        s == null ? void 0 : s.data,
        R,
        n
      ), d = !0);
    }
    h(this, se) && (g = h(this, se), m = h(this, Pe), S = Date.now(), c = "error");
    const w = p === "fetching", v = c === "pending", y = c === "error", T = v && w;
    return {
      status: c,
      fetchStatus: p,
      isPending: v,
      isSuccess: c === "success",
      isError: y,
      isInitialLoading: T,
      isLoading: T,
      data: m,
      dataUpdatedAt: u.dataUpdatedAt,
      error: g,
      errorUpdatedAt: S,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > b.dataUpdateCount || u.errorUpdateCount > b.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !v,
      isLoadingError: y && u.dataUpdatedAt === 0,
      isPaused: p === "paused",
      isPlaceholderData: d,
      isRefetchError: y && u.dataUpdatedAt !== 0,
      isStale: Ht(t, n),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const n = h(this, _), i = this.createResult(h(this, P), this.options);
    if (M(this, de, h(this, P).state), M(this, Me, this.options), h(this, de).data !== void 0 && M(this, Te, h(this, P)), St(i, n))
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
    (t == null ? void 0 : t.listeners) !== !1 && s() && (o.listeners = !0), L(this, lt, hn).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && L(this, Be, Tt).call(this);
  }
}, W = new WeakMap(), P = new WeakMap(), Re = new WeakMap(), _ = new WeakMap(), de = new WeakMap(), Me = new WeakMap(), se = new WeakMap(), _e = new WeakMap(), Pe = new WeakMap(), Te = new WeakMap(), fe = new WeakMap(), he = new WeakMap(), oe = new WeakMap(), ge = new WeakMap(), me = new WeakSet(), ze = function(t) {
  L(this, We, It).call(this);
  let n = h(this, P).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(qn)), n;
}, Fe = new WeakSet(), Rt = function() {
  if (L(this, Qe, Nt).call(this), Jt || h(this, _).isStale || !en(this.options.staleTime))
    return;
  const n = Jn(
    h(this, _).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  M(this, fe, setTimeout(() => {
    h(this, _).isStale || this.updateResult();
  }, n));
}, Ue = new WeakSet(), Mt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(h(this, P)) : this.options.refetchInterval) ?? !1;
}, Ve = new WeakSet(), Pt = function(t) {
  L(this, Ke, Ot).call(this), M(this, oe, t), !(Jt || this.options.enabled === !1 || !en(h(this, oe)) || h(this, oe) === 0) && M(this, he, setInterval(() => {
    (this.options.refetchIntervalInBackground || es.isFocused()) && L(this, me, ze).call(this);
  }, h(this, oe)));
}, Be = new WeakSet(), Tt = function() {
  L(this, Fe, Rt).call(this), L(this, Ve, Pt).call(this, L(this, Ue, Mt).call(this));
}, Qe = new WeakSet(), Nt = function() {
  h(this, fe) && (clearTimeout(h(this, fe)), M(this, fe, void 0));
}, Ke = new WeakSet(), Ot = function() {
  h(this, he) && (clearInterval(h(this, he)), M(this, he, void 0));
}, We = new WeakSet(), It = function() {
  const t = h(this, W).getQueryCache().build(h(this, W), this.options);
  if (t === h(this, P))
    return;
  const n = h(this, P);
  M(this, P, t), M(this, Re, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, lt = new WeakSet(), hn = function(t) {
  fn.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(h(this, _));
    }), h(this, W).getQueryCache().notify({
      query: h(this, P),
      type: "observerResultsUpdated"
    });
  });
}, dn);
function ms(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function nn(e, t) {
  return ms(e, t) || e.state.dataUpdatedAt > 0 && kt(e, t, t.refetchOnMount);
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
function ps(e, t) {
  return !St(e.getCurrentResult(), t);
}
var gn = l.createContext(!1), vs = () => l.useContext(gn);
gn.Provider;
function bs() {
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
var ws = l.createContext(bs()), Cs = () => l.useContext(ws);
function ys(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Ss = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, Es = (e) => {
  l.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Rs = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: i
}) => e.isError && !t.isReset() && !e.isFetching && ys(n, [e.error, i]), Ms = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Ps = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Ts = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Ns(e, t, n) {
  const i = ns(n), o = vs(), s = Cs(), r = i.defaultQueryOptions(e);
  r._optimisticResults = o ? "isRestoring" : "optimistic", Ms(r), Ss(r, s), Es(s);
  const [a] = l.useState(
    () => new t(
      i,
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
  }, [r, a]), Ps(r, f))
    throw Ts(r, a, s);
  if (Rs({
    result: f,
    errorResetBoundary: s,
    throwOnError: r.throwOnError,
    query: a.getCurrentQuery()
  }))
    throw f.error;
  return r.notifyOnChangeProps ? f : a.trackResult(f);
}
function Os(e, t) {
  return Ns(e, gs, t);
}
var mn = {};
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
})(mn);
var pn = {};
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
})(pn);
var vn = {};
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
})(vn);
var bn = {};
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
})(bn);
var wn = {};
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
})(wn);
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
var yn = {};
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
})(yn);
const _t = (e) => !!e && e[0] === "o", Dt = xe.unstable_batchedUpdates || ((e) => e()), Se = (e, t, n = 1e-4) => Math.abs(e - t) < n, je = (e, t) => e === !0 || !!(e && e[t]), $ = (e, t) => typeof e == "function" ? e(t) : e, Is = "_szhsinMenu", ks = (e) => e[Is], $e = (e, t) => (t && Object.keys(t).forEach((n) => {
  const i = e[n], o = t[n];
  typeof o == "function" && i ? e[n] = (...s) => {
    o(...s), i(...s);
  } : e[n] = o;
}), e), Ds = (e) => {
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
}, Ct = (e) => {
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
}) => l.useMemo(() => {
  const o = t ? `${e}__${t}` : e;
  let s = o;
  n && Object.keys(n).forEach((a) => {
    const f = n[a];
    f && (s += ` ${o}--${f === !0 ? a : `${a}-${f}`}`);
  });
  let r = typeof i == "function" ? i(n) : i;
  return typeof r == "string" && (r = r.trim(), r && (s += ` ${r}`)), s;
}, [e, t, n, i]), Ls = "szh-menu-container", pe = "szh-menu", As = "arrow", Sn = "item", zs = "divider", xs = "submenu", En = /* @__PURE__ */ l.createContext(), Ut = /* @__PURE__ */ l.createContext({}), Lt = /* @__PURE__ */ l.createContext({}), Rn = /* @__PURE__ */ l.createContext({}), js = /* @__PURE__ */ l.createContext({}), ut = /* @__PURE__ */ l.createContext({}), F = /* @__PURE__ */ Object.freeze({
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
}), Hs = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), yt = "absolute", Mn = "presentation", Vt = "menuitem", on = {
  "aria-hidden": !0,
  role: Vt
}, _s = ({
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
    key: g
  }) => {
    switch (g) {
      case F.ESC:
        $(a, {
          key: g,
          reason: He.CANCEL
        });
        break;
    }
  }, u = (g) => {
    o && !g.currentTarget.contains(g.relatedTarget) && $(a, {
      reason: He.BLUR
    });
  };
  return /* @__PURE__ */ D.jsx("div", {
    ...$e({
      onKeyDown: b,
      onBlur: u
    }, n),
    className: ve({
      block: Ls,
      modifiers: l.useMemo(() => ({
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
}, Fs = () => {
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
}, Us = (e, t) => {
  const [n, i] = l.useState(), s = l.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, r = l.useCallback((f, b) => {
    const {
      items: u
    } = s;
    if (!f)
      s.items = [];
    else if (b)
      u.push(f);
    else {
      const g = u.indexOf(f);
      g > -1 && (u.splice(g, 1), f.contains(document.activeElement) && (t.current.focus(), i()));
    }
    s.hoverIndex = -1, s.sorted = !1;
  }, [s, t]), a = l.useCallback((f, b, u) => {
    const {
      items: g,
      hoverIndex: S
    } = s, p = () => {
      if (s.sorted)
        return;
      const m = e.current.querySelectorAll(".szh-menu__item");
      g.sort((w, v) => rn(m, w) - rn(m, v)), s.sorted = !0;
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
        p(), c = S, c < 0 && (c = g.indexOf(b)), c++, c >= g.length && (c = 0), d = g[c];
        break;
      case k.DECREASE:
        p(), c = S, c < 0 && (c = g.indexOf(b)), c--, c < 0 && (c = g.length - 1), d = g[c];
        break;
    }
    d || (c = -1), i(d), s.hoverIndex = c;
  }, [e, s]);
  return {
    hoverItem: n,
    dispatch: a,
    updateItems: r
  };
}, Vs = (e, t, n, i) => {
  const o = t.current.getBoundingClientRect(), s = e.current.getBoundingClientRect(), r = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), a = Ds(i), f = (c) => c + s.left - r.left - a.left, b = (c) => c + s.left + o.width - r.right + a.right, u = (c) => c + s.top - r.top - a.top, g = (c) => c + s.top + o.height - r.bottom + a.bottom;
  return {
    menuRect: o,
    containerRect: s,
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
}, Bs = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: i,
  menuRect: o
}) => {
  let s = n.top - i.top - t + n.height / 2;
  const r = e.current.offsetHeight * 1.25;
  return s = Math.max(r, s), s = Math.min(s, o.height - r), s;
}, Qs = ({
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
  arrow: g,
  direction: S,
  position: p
}) => {
  let c = S, d = i;
  p !== "initial" && (d = b(d), p === "anchor" && (d = Math.min(d, e.bottom - t.top), d = Math.max(d, e.top - t.top - n.height)));
  let m, w, v;
  return c === "left" ? (m = o, p !== "initial" && (w = r(m), w < 0 && (v = a(s), (v <= 0 || -w > v) && (m = s, c = "right")))) : (m = s, p !== "initial" && (v = a(m), v > 0 && (w = r(o), (w >= 0 || -w < v) && (m = o, c = "left")))), p === "auto" && (m = f(m)), {
    arrowY: g ? Bs({
      menuY: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: m,
    y: d,
    computedDirection: c
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
  arrow: g,
  direction: S,
  position: p
}) => {
  let c = S === "top" ? "top" : "bottom", d = i;
  p !== "initial" && (d = f(d), p === "anchor" && (d = Math.min(d, e.right - t.left), d = Math.max(d, e.left - t.left - n.width)));
  let m, w, v;
  return c === "top" ? (m = o, p !== "initial" && (w = r(m), w < 0 && (v = a(s), (v <= 0 || -w > v) && (m = s, c = "bottom")))) : (m = s, p !== "initial" && (v = a(m), v > 0 && (w = r(o), (w >= 0 || -w < v) && (m = o, c = "top")))), p === "auto" && (m = b(m)), {
    arrowX: g ? Ks({
      menuX: d,
      arrowRef: u,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: d,
    y: m,
    computedDirection: c
  };
}, $s = ({
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
  } = f, g = n === "left" || n === "right";
  let S = g ? i : o, p = g ? o : i;
  if (e) {
    const I = a.current;
    g ? S += I.offsetWidth : p += I.offsetHeight;
  }
  const c = r.left - u.left - b.width - S, d = r.right - u.left + S, m = r.top - u.top - b.height - p, w = r.bottom - u.top + p;
  let v, y;
  t === "end" ? (v = r.right - u.left - b.width, y = r.bottom - u.top - b.height) : t === "center" ? (v = r.left - u.left - (b.width - r.width) / 2, y = r.top - u.top - (b.height - r.height) / 2) : (v = r.left - u.left, y = r.top - u.top), v += S, y += p;
  const T = {
    ...f,
    anchorRect: r,
    placeLeftX: c,
    placeRightX: d,
    placeLeftorRightY: y,
    placeTopY: m,
    placeBottomY: w,
    placeToporBottomX: v,
    arrowRef: a,
    arrow: e,
    direction: n,
    position: s
  };
  switch (n) {
    case "left":
    case "right":
      return Qs(T);
    case "top":
    case "bottom":
    default:
      return Ws(T);
  }
}, rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? l.useLayoutEffect : l.useEffect;
function an(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const dt = (e, t) => l.useMemo(() => e ? t ? (n) => {
  an(e, n), an(t, n);
} : e : t, [e, t]), cn = -9999, Pn = ({
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
  parentScrollingRef: g,
  align: S = "start",
  direction: p = "bottom",
  position: c = "auto",
  overflow: d = "visible",
  setDownOverflow: m,
  repositionFlag: w,
  captureFocus: v = !0,
  state: y,
  endTransition: T,
  isDisabled: I,
  menuItemFocus: x,
  gap: R = 0,
  shift: U = 0,
  children: ie,
  onClose: B,
  ...O
}) => {
  const [j, ae] = l.useState({
    x: cn,
    y: cn
  }), [Ne, te] = l.useState({}), [A, ce] = l.useState(), [Q, Xe] = l.useState(p), [J] = l.useState(Fs), [Oe, Ie] = l.useReducer((E) => E + 1, 1), {
    transition: Ge,
    boundingBoxRef: ke,
    boundingBoxPadding: Ze,
    rootMenuRef: Ye,
    rootAnchorRef: le,
    scrollNodesRef: ft,
    reposition: qe,
    viewScroll: De,
    submenuCloseDelay: ht
  } = l.useContext(ut), {
    submenuCtx: Je,
    reposSubmenu: z = w
  } = l.useContext(Lt), K = l.useRef(null), et = l.useRef(), Bt = l.useRef(), Qt = l.useRef(!1), tt = l.useRef({
    width: 0,
    height: 0
  }), Kt = l.useRef(() => {
  }), {
    hoverItem: gt,
    dispatch: G,
    updateItems: nt
  } = Us(K, et), Z = _t(y), Wt = je(Ge, "open"), $t = je(Ge, "close"), ee = ft.current, Fn = (E) => {
    switch (E.key) {
      case F.HOME:
        G(k.FIRST);
        break;
      case F.END:
        G(k.LAST);
        break;
      case F.UP:
        G(k.DECREASE, gt);
        break;
      case F.DOWN:
        G(k.INCREASE, gt);
        break;
      case F.SPACE:
        E.target && E.target.className.indexOf(pe) !== -1 && E.preventDefault();
        return;
      default:
        return;
    }
    E.preventDefault(), E.stopPropagation();
  }, Un = () => {
    y === "closing" && ce(), $(T);
  }, Vn = (E) => {
    E.stopPropagation(), J.on(ht, () => {
      G(k.RESET), et.current.focus();
    });
  }, Bn = (E) => {
    E.target === E.currentTarget && J.off();
  }, ue = l.useCallback((E) => {
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
    ee.menu || (ee.menu = (ke ? ke.current : Ct(Ye.current)) || window);
    const Y = Vs(a, K, ee.menu, Ze);
    let {
      arrowX: H,
      arrowY: be,
      x: we,
      y: re,
      computedDirection: vt
    } = $s({
      arrow: i,
      align: S,
      direction: p,
      gap: R,
      shift: U,
      position: c,
      anchorRect: ne,
      arrowRef: Bt,
      positionHelpers: Y
    });
    const {
      menuRect: Yt
    } = Y;
    let Ce = Yt.height;
    if (!E && d !== "visible") {
      const {
        getTopOverflow: Gn,
        getBottomOverflow: Zn
      } = Y;
      let ye, bt;
      const qt = tt.current.height, st = Zn(re);
      if (st > 0 || Se(st, 0) && Se(Ce, qt))
        ye = Ce - st, bt = st;
      else {
        const Le = Gn(re);
        (Le < 0 || Se(Le, 0) && Se(Ce, qt)) && (ye = Ce + Le, bt = 0 - Le, ye >= 0 && (re -= Le));
      }
      ye >= 0 ? (Ce = ye, ce({
        height: ye,
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
      width: Yt.width,
      height: Ce
    };
  }, [i, S, Ze, p, R, U, c, d, s, r, a, ke, Ye, ee]);
  rt(() => {
    Z && (ue(), Qt.current && Ie()), Qt.current = Z, Kt.current = ue;
  }, [Z, ue, z]), rt(() => {
    A && !m && (K.current.scrollTop = 0);
  }, [A, m]), rt(() => nt, [nt]), l.useEffect(() => {
    let {
      menu: E
    } = ee;
    if (!Z || !E)
      return;
    if (E = E.addEventListener ? E : window, !ee.anchors) {
      ee.anchors = [];
      let H = Ct(le && le.current);
      for (; H && H !== E; )
        ee.anchors.push(H), H = Ct(H);
    }
    let V = De;
    if (ee.anchors.length && V === "initial" && (V = "auto"), V === "initial")
      return;
    const ne = () => {
      V === "auto" ? Dt(() => ue(!0)) : $(B, {
        reason: He.SCROLL
      });
    }, Y = ee.anchors.concat(De !== "initial" ? E : []);
    return Y.forEach((H) => H.addEventListener("scroll", ne)), () => Y.forEach((H) => H.removeEventListener("scroll", ne));
  }, [le, ee, Z, B, De, ue]);
  const Xt = !!A && A.overflowAmt > 0;
  l.useEffect(() => {
    if (Xt || !Z || !g)
      return;
    const E = () => Dt(ue), V = g.current;
    return V.addEventListener("scroll", E), () => V.removeEventListener("scroll", E);
  }, [Z, Xt, g, ue]), l.useEffect(() => {
    if (typeof ResizeObserver != "function" || qe === "initial")
      return;
    const E = new ResizeObserver(([ne]) => {
      const {
        borderBoxSize: Y,
        target: H
      } = ne;
      let be, we;
      if (Y) {
        const {
          inlineSize: re,
          blockSize: vt
        } = Y[0] || Y;
        be = re, we = vt;
      } else {
        const re = H.getBoundingClientRect();
        be = re.width, we = re.height;
      }
      be === 0 || we === 0 || Se(be, tt.current.width, 1) && Se(we, tt.current.height, 1) || xe.flushSync(() => {
        Kt.current(), Ie();
      });
    }), V = K.current;
    return E.observe(V, {
      box: "border-box"
    }), () => E.unobserve(V);
  }, [qe]), l.useEffect(() => {
    if (!Z) {
      G(k.RESET), $t || ce();
      return;
    }
    const {
      position: E,
      alwaysUpdate: V
    } = x || {}, ne = () => {
      E === Ee.FIRST ? G(k.FIRST) : E === Ee.LAST ? G(k.LAST) : E >= -1 && G(k.SET_INDEX, void 0, E);
    };
    if (V)
      ne();
    else if (v) {
      const Y = setTimeout(() => {
        const H = K.current;
        H && !H.contains(document.activeElement) && (et.current.focus(), ne());
      }, Wt ? 170 : 100);
      return () => clearTimeout(Y);
    }
  }, [Z, Wt, $t, v, x, G]);
  const Qn = l.useMemo(() => ({
    isParentOpen: Z,
    submenuCtx: J,
    dispatch: G,
    updateItems: nt
  }), [Z, J, G, nt]);
  let mt, pt;
  A && (m ? pt = A.overflowAmt : mt = A.height);
  const Kn = l.useMemo(() => ({
    reposSubmenu: Oe,
    submenuCtx: J,
    overflow: d,
    overflowAmt: pt,
    parentMenuRef: K,
    parentDir: Q
  }), [Oe, J, d, pt, Q]), Wn = mt >= 0 ? {
    maxHeight: mt,
    overflow: d
  } : void 0, Gt = l.useMemo(() => ({
    state: y,
    dir: Q
  }), [y, Q]), $n = l.useMemo(() => ({
    dir: Q
  }), [Q]), Xn = ve({
    block: pe,
    element: As,
    modifiers: $n,
    className: o.className
  }), Zt = /* @__PURE__ */ D.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ft(I),
    ...$e({
      onPointerEnter: Je == null ? void 0 : Je.off,
      onPointerMove: Vn,
      onPointerLeave: Bn,
      onKeyDown: Fn,
      onAnimationEnd: Un
    }, O),
    ref: dt(u, K),
    className: ve({
      block: pe,
      modifiers: Gt,
      className: t
    }),
    style: {
      ...n,
      ...Wn,
      margin: 0,
      display: y === "closed" ? "none" : void 0,
      position: yt,
      left: j.x,
      top: j.y
    },
    children: [/* @__PURE__ */ D.jsx("li", {
      tabIndex: -1,
      style: {
        position: yt,
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
      className: Xn,
      style: {
        display: "block",
        position: yt,
        left: Ne.x,
        top: Ne.y,
        ...o.style
      },
      ref: Bt
    }), /* @__PURE__ */ D.jsx(Lt.Provider, {
      value: Kn,
      children: /* @__PURE__ */ D.jsx(Ut.Provider, {
        value: Qn,
        children: /* @__PURE__ */ D.jsx(En.Provider, {
          value: gt,
          children: $(ie, Gt)
        })
      })
    })]
  });
  return f ? /* @__PURE__ */ D.jsx(_s, {
    ...f,
    isOpen: Z,
    children: Zt
  }) : Zt;
}, Xs = /* @__PURE__ */ l.forwardRef(function({
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
  submenuOpenDelay: g = 300,
  submenuCloseDelay: S = 150,
  viewScroll: p = "initial",
  portal: c,
  theming: d,
  onItemClick: m,
  ...w
}, v) {
  const y = l.useRef(null), T = l.useRef({}), {
    anchorRef: I,
    state: x,
    onClose: R
  } = w, U = l.useMemo(() => ({
    initialMounted: o,
    unmountOnClose: s,
    transition: r,
    transitionTimeout: a,
    boundingBoxRef: f,
    boundingBoxPadding: b,
    rootMenuRef: y,
    rootAnchorRef: I,
    scrollNodesRef: T,
    reposition: u,
    viewScroll: p,
    submenuOpenDelay: g,
    submenuCloseDelay: S
  }), [o, s, r, a, I, f, b, u, p, g, S]), ie = l.useMemo(() => ({
    handleClick(O, j) {
      O.stopPropagation || $(m, O);
      let ae = O.keepOpen;
      ae === void 0 && (ae = j && O.key === F.SPACE), ae || $(R, {
        value: O.value,
        key: O.key,
        reason: He.CLICK
      });
    },
    handleClose(O) {
      $(R, {
        key: O,
        reason: He.CLICK
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
        ariaLabel: t || "Menu",
        externalRef: v,
        containerRef: y,
        containerProps: {
          className: n,
          containerRef: y,
          containerProps: i,
          theming: d,
          transition: r,
          onClose: R
        }
      })
    })
  });
  return c === !0 && typeof document < "u" ? /* @__PURE__ */ xe.createPortal(B, document.body) : c ? c.target ? /* @__PURE__ */ xe.createPortal(B, c.target) : c.stablePosition ? null : B : B;
}), At = 0, zt = 1, ot = 2, at = 3, ct = 4, Gs = 5, Tn = 6, Zs = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], Nn = (e) => ({
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
}, qs = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], Js = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), ln = (e, t, n, i, o) => {
  clearTimeout(i.current);
  const s = Nn(e);
  t(s), n.current = s, o && o({
    current: s
  });
}, ei = ({
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
  const [b, u] = l.useState(() => Nn(s ? ot : xt(r))), g = l.useRef(b), S = l.useRef(), [p, c] = qs(o), d = l.useCallback(() => {
    const w = Ys(g.current._s, a);
    w && ln(w, u, g, S, f);
  }, [f, a]), m = l.useCallback((w) => {
    const v = (T) => {
      switch (ln(T, u, g, S, f), T) {
        case zt:
          p >= 0 && (S.current = setTimeout(d, p));
          break;
        case ct:
          c >= 0 && (S.current = setTimeout(d, c));
          break;
        case At:
        case at:
          S.current = Js(v, T);
          break;
      }
    }, y = g.current.isEnter;
    typeof w != "boolean" && (w = !y), w ? !y && v(e ? n ? At : zt : ot) : y && v(t ? i ? at : ct : xt(a));
  }, [d, f, e, t, n, i, p, c, a]);
  return l.useEffect(() => () => clearTimeout(S.current), []), [b, m, d];
}, ti = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: i,
  transitionTimeout: o = 500
} = {}) => {
  const [{
    status: s
  }, r, a] = ei({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: o,
    enter: je(i, "open"),
    exit: je(i, "close")
  });
  return [{
    state: Hs[s],
    endTransition: a
  }, r];
}, On = (e) => {
  const [t, n] = ti(e), [i, o] = l.useState(), s = (r, a) => {
    o({
      position: r,
      alwaysUpdate: a
    }), n(!0);
  };
  return [{
    menuItemFocus: i,
    ...t
  }, n, s];
}, ni = (e, t) => {
  const [n] = l.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (i) => n.v ? n.v = !1 : t(!0, i)
  };
}, In = (e, t) => {
  const n = l.useRef(t);
  l.useEffect(() => {
    n.current !== t && $(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, si = /* @__PURE__ */ l.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: i,
  menuButton: o,
  instanceRef: s,
  onMenuChange: r,
  ...a
}, f) {
  const [b, u, g] = On(a), {
    state: S
  } = b, p = _t(S), c = l.useRef(null), d = ni(S, (I, x) => g(x.detail ? void 0 : Ee.FIRST)), m = l.useCallback((I) => {
    u(!1), I.key && c.current.focus();
  }, [u]), w = (I) => {
    switch (I.key) {
      case F.UP:
        g(Ee.LAST);
        break;
      case F.DOWN:
        g(Ee.FIRST);
        break;
      default:
        return;
    }
    I.preventDefault();
  }, v = $(o, {
    open: p
  });
  if (!v || !v.type)
    throw new Error("Menu requires a menuButton prop.");
  const y = {
    ref: dt(v.ref, c),
    ...$e({
      onKeyDown: w,
      ...d
    }, v.props)
  };
  ks(v.type) === "MenuButton" && (y.isOpen = p);
  const T = /* @__PURE__ */ l.cloneElement(v, y);
  return In(r, p), l.useImperativeHandle(s, () => ({
    openMenu: g,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ D.jsxs(l.Fragment, {
    children: [T, /* @__PURE__ */ D.jsx(Xs, {
      ...a,
      ...b,
      "aria-label": t || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: c,
      ref: f,
      onClose: m
    })]
  });
}), kn = (e, t) => {
  const n = /* @__PURE__ */ l.memo(t), i = /* @__PURE__ */ l.forwardRef((o, s) => {
    const r = l.useRef(null);
    return /* @__PURE__ */ D.jsx(n, {
      ...o,
      itemRef: r,
      externalRef: s,
      isHovering: l.useContext(En) === r.current
    });
  });
  return i.displayName = `WithHovering(${e})`, i;
}, Dn = (e, t, n) => {
  rt(() => {
    if (e)
      return;
    const i = t.current;
    return n(i, !0), () => {
      n(i);
    };
  }, [e, t, n]);
}, ii = /* @__PURE__ */ kn("SubMenu", function({
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
  captureFocus: g,
  repositionFlag: S,
  itemProps: p = {},
  ...c
}) {
  const d = l.useContext(ut), {
    rootMenuRef: m,
    submenuOpenDelay: w,
    submenuCloseDelay: v
  } = d, {
    parentMenuRef: y,
    parentDir: T,
    overflow: I
  } = l.useContext(Lt), {
    isParentOpen: x,
    submenuCtx: R,
    dispatch: U,
    updateItems: ie
  } = l.useContext(Ut), B = I !== "visible", [O, j, ae] = On(d), {
    state: Ne
  } = O, te = !!i, A = _t(Ne), ce = l.useRef(null), [Q] = l.useState({
    v: 0
  }), Xe = () => {
    R.off(), Q.v && (clearTimeout(Q.v), Q.v = 0);
  }, J = (...z) => {
    Xe(), Oe(), !te && ae(...z);
  }, Oe = () => !f && !te && U(k.SET, u.current), Ie = (z) => {
    Oe(), r || (Q.v = setTimeout(() => Dt(J), Math.max(z, 0)));
  }, Ge = (z) => {
    te || (z.stopPropagation(), !(Q.v || A) && R.on(v, () => Ie(w - v), () => Ie(w)));
  }, ke = () => {
    Xe(), A || U(k.UNSET, u.current);
  }, Ze = (z) => {
    if (f)
      switch (z.key) {
        case F.ENTER:
          z.preventDefault();
        case F.SPACE:
        case F.RIGHT:
          r !== "none" && J(Ee.FIRST);
      }
  }, Ye = (z) => {
    let K = !1;
    switch (z.key) {
      case F.LEFT:
        A && (u.current.focus(), j(!1), K = !0);
        break;
      case F.RIGHT:
        A || (K = !0);
        break;
    }
    K && (z.preventDefault(), z.stopPropagation());
  };
  Dn(te, u, ie), In(a, A), l.useEffect(() => R.toggle(A), [R, A]), l.useEffect(() => () => clearTimeout(Q.v), [Q]), l.useEffect(() => {
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
    className: qe,
    ...De
  } = p, ht = $e({
    onPointerEnter: R.off,
    onPointerMove: Ge,
    onPointerLeave: ke,
    onKeyDown: Ze,
    onClick: () => r !== "none" && J()
  }, De), Je = () => {
    const z = /* @__PURE__ */ D.jsx(Pn, {
      ...c,
      ...O,
      ariaLabel: t || (typeof s == "string" ? s : "Submenu"),
      anchorRef: u,
      containerRef: B ? m : ce,
      direction: o || (T === "right" || T === "left" ? T : "right"),
      parentScrollingRef: B && y,
      isDisabled: te
    }), K = m.current;
    return B && K ? /* @__PURE__ */ xe.createPortal(z, K) : z;
  };
  return /* @__PURE__ */ D.jsxs("li", {
    className: ve({
      block: pe,
      element: xs,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Mn,
    ref: ce,
    onKeyDown: Ye,
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
        className: qe
      }),
      children: l.useMemo(() => $(s, le), [s, le])
    }), Ne && Je()]
  });
}), ri = (e, t, n, i) => {
  const {
    submenuCloseDelay: o
  } = l.useContext(ut), {
    isParentOpen: s,
    submenuCtx: r,
    dispatch: a,
    updateItems: f
  } = l.useContext(Ut), b = () => {
    !n && !i && a(k.SET, e.current);
  }, u = () => {
    !i && a(k.UNSET, e.current);
  }, g = (c) => {
    n && !c.currentTarget.contains(c.relatedTarget) && u();
  }, S = (c) => {
    i || (c.stopPropagation(), r.on(o, b, b));
  }, p = (c, d) => {
    r.off(), !d && u();
  };
  return Dn(i, e, f), l.useEffect(() => {
    n && s && t.current && t.current.focus();
  }, [t, n, s]), {
    setHover: b,
    onBlur: g,
    onPointerMove: S,
    onPointerLeave: p
  };
}, it = /* @__PURE__ */ kn("MenuItem", function({
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
  externalRef: g,
  ...S
}) {
  const p = !!r, {
    setHover: c,
    ...d
  } = ri(u, u, b, p), m = l.useContext(Rn), w = l.useContext(js), v = o === "radio", y = o === "checkbox", T = !!i && !p && !v && !y, I = v ? w.value === n : y ? !!s : !1, x = (O) => {
    if (p) {
      O.stopPropagation(), O.preventDefault();
      return;
    }
    const j = {
      value: n,
      syntheticEvent: O
    };
    O.key !== void 0 && (j.key = O.key), y && (j.checked = !I), v && (j.name = w.name), $(f, j), v && $(w.onRadioChange, j), m.handleClick(j, y || v);
  }, R = (O) => {
    if (b)
      switch (O.key) {
        case F.ENTER:
          O.preventDefault();
        case F.SPACE:
          T ? u.current.click() : x(O);
      }
  }, U = l.useMemo(() => ({
    type: o,
    disabled: p,
    hover: b,
    checked: I,
    anchor: T
  }), [o, p, b, I, T]), ie = $e({
    ...d,
    onPointerDown: c,
    onKeyDown: R,
    onClick: x
  }, S), B = {
    role: v ? "menuitemradio" : y ? "menuitemcheckbox" : Vt,
    "aria-checked": v || y ? I : void 0,
    ...Ft(p, b),
    ...ie,
    ref: dt(g, u),
    className: ve({
      block: pe,
      element: Sn,
      modifiers: U,
      className: t
    }),
    children: l.useMemo(() => $(a, U), [a, U])
  };
  return T ? /* @__PURE__ */ D.jsx("li", {
    role: Mn,
    children: /* @__PURE__ */ D.jsx("a", {
      href: i,
      ...B
    })
  }) : /* @__PURE__ */ D.jsx("li", {
    ...B
  });
}), oi = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: t,
  ...n
}, i) {
  return /* @__PURE__ */ D.jsx("li", {
    role: "separator",
    ...n,
    ref: i,
    className: ve({
      block: pe,
      element: zs,
      className: t
    })
  });
}));
const ai = "szh-menu", ci = "item", li = (e) => (t) => (n) => {
  let i = `.${e}`;
  return t && (i += `__${t}`), n && (i += `--${n}`), i;
}, Ln = (e, t = []) => {
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
}, ui = ["dir-left", "dir-right", "dir-top", "dir-bottom"], An = /* @__PURE__ */ li(ai);
[...ui];
const un = /* @__PURE__ */ Ln(/* @__PURE__ */ An(ci), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), di = ds(si)`
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
`, fi = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: i
  } = n, o = i.getVisibleLeafColumns().length;
  return /* @__PURE__ */ X(di, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    /* @__PURE__ */ X(it, { onClick: () => t.column.toggleSorting(!1), children: [
      /* @__PURE__ */ C(q, { icon: yn.faArrowUpAZ }),
      " Сортировать по возрастанию"
    ] }),
    /* @__PURE__ */ X(it, { onClick: () => t.column.toggleSorting(!0), children: [
      /* @__PURE__ */ C(q, { icon: Cn.faArrowDownZA }),
      "Сортировать по убыванию"
    ] }),
    /* @__PURE__ */ X(it, { disabled: o === 1, onClick: () => t.column.toggleVisibility(), children: [
      /* @__PURE__ */ C(q, { icon: wn.faEyeSlash }),
      "Скрыть колонку"
    ] }),
    /* @__PURE__ */ C(oi, {}),
    /* @__PURE__ */ C(ii, { label: /* @__PURE__ */ X(ss, { children: [
      /* @__PURE__ */ C(q, { icon: bn.faTableColumns }),
      "Колонки"
    ] }), children: i.getAllLeafColumns().map((s) => /* @__PURE__ */ C(it, { type: "checkbox", checked: s.getIsVisible(), disabled: o === 1 && s.getIsVisible(), onClick: (r) => {
      r.keepOpen = !0, s.toggleVisibility();
    }, children: jt(s.columnDef.header, n) }, s.id)) })
  ] });
}, hi = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: i,
    getContext: o,
    getResizeHandler: s
  } = e;
  return /* @__PURE__ */ X("th", { css: [{
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
    /* @__PURE__ */ X("div", { css: [{
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
      /* @__PURE__ */ X("div", { onClick: () => {
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
        n.getIsSorted() === "asc" && /* @__PURE__ */ C(q, { icon: vn.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ C(q, { icon: pn.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ C(fi, { header: e, children: ({
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
      }], children: /* @__PURE__ */ C(q, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: mn.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ C("div", { css: [{
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
}, gi = ({
  ...e
}) => /* @__PURE__ */ C(is, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ X("table", { css: [{
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
  e.getHeaderGroups().map((t) => /* @__PURE__ */ C("colgroup", { children: t.headers.map((n) => /* @__PURE__ */ C("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, t.id)),
  /* @__PURE__ */ C("thead", { css: {
    position: "sticky",
    top: "0px",
    zIndex: "10",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
  }, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ C("tr", { children: t.headers.map((n) => /* @__PURE__ */ C(hi, { ...n }, n.id)) }, t.id)) }),
  /* @__PURE__ */ C("tbody", { children: e.getRowModel().rows.map((t) => /* @__PURE__ */ C("tr", { css: [{
    ":hover": {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
    }
  }], children: t.getVisibleCells().map((n) => /* @__PURE__ */ C("td", { css: [{
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
  }], children: /* @__PURE__ */ C("span", { css: [{
    position: "relative"
  }], children: jt(n.column.columnDef.cell, n.getContext()) }) }, n.id)) }, t.id)) })
] }) });
var zn = {};
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
})(zn);
var xn = {};
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
})(xn);
var jn = {};
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
})(jn);
var Hn = {};
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
})(Hn);
var _n = {};
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
})(_n);
const mi = ({
  query: e,
  ...t
}) => /* @__PURE__ */ X("div", { css: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, children: [
  /* @__PURE__ */ X("div", { css: {
    display: "flex",
    gap: "0.75rem"
  }, children: [
    /* @__PURE__ */ C(Ae, { onClick: () => t.setPageIndex(0), size: "small", disabled: !t.getCanPreviousPage(), children: /* @__PURE__ */ C(q, { icon: _n.faAnglesLeft }) }),
    /* @__PURE__ */ C(Ae, { size: "small", onClick: () => t.previousPage(), disabled: !t.getCanPreviousPage(), children: /* @__PURE__ */ C(q, { icon: Hn.faAngleLeft }) }),
    /* @__PURE__ */ X("span", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      "Страница",
      /* @__PURE__ */ C("input", { type: "number", value: t.getState().pagination.pageIndex + 1, onChange: (n) => {
        const i = n.target.value ? Number(n.target.value) - 1 : 0;
        t.setPageIndex(i);
      }, css: {
        width: "3rem",
        borderWidth: "1px",
        padding: "0.25rem"
      } }),
      "из ",
      t.getPageCount()
    ] }),
    /* @__PURE__ */ C(Ae, { size: "small", onClick: () => t.nextPage(), disabled: !t.getCanNextPage(), children: /* @__PURE__ */ C(q, { icon: jn.faAngleRight }) }),
    /* @__PURE__ */ C(Ae, { size: "small", onClick: () => t.setPageIndex(t.getPageCount() - 1), disabled: !t.getCanNextPage(), children: /* @__PURE__ */ C(q, { icon: xn.faAnglesRight }) }),
    e && /* @__PURE__ */ C(Ae, { size: "small", disabled: e.isFetching, onClick: () => e.refetch(), children: /* @__PURE__ */ C(q, { spin: e.isFetching, icon: zn.faArrowsRotate }) })
  ] }),
  /* @__PURE__ */ X("div", { css: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }, children: [
    !e && /* @__PURE__ */ C("span", { children: t.isFetching ? "Загружаю..." : null }),
    /* @__PURE__ */ C("select", { css: {
      borderWidth: "1px",
      padding: "0.25rem"
    }, value: t.getState().pagination.pageSize, onChange: (n) => {
      t.setPageSize(Number(n.target.value));
    }, children: [10, 20, 30, 40, 50].map((n) => /* @__PURE__ */ C("option", { value: n, children: n }, n)) })
  ] })
] }), pi = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: i,
  ...o
}) => {
  const [s, {
    width: r
  }] = rs(), a = fs({
    getCoreRowModel: hs(),
    columnResizeMode: "onChange",
    ...o,
    columns: e,
    data: t
  });
  return {
    ref: s,
    isLoading: n,
    isFetching: i,
    ...a
  };
}, vi = () => {
  const e = os();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function bi(e, t) {
  let n;
  typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const {
    url: i,
    params: o,
    ...s
  } = n, r = vi();
  return Os({
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
const wi = (e, t, n) => {
  var u, g;
  const [i, o] = l.useState({
    pageIndex: 0,
    pageSize: 20
  }), {
    pageIndex: s,
    pageSize: r
  } = i, a = bi(e, {
    params: {
      start: s * r,
      length: r
    },
    placeholderData: as
  }), f = Number((u = a.data) == null ? void 0 : u.recordsFiltered);
  return {
    ...pi({
      ...n,
      columns: t,
      data: (g = a.data) == null ? void 0 : g.data,
      isLoading: a.isLoading,
      isFetching: a.isFetching,
      manualPagination: !0,
      onPaginationChange: o,
      pageCount: f > 0 ? Math.ceil(f / r) : -1,
      state: {
        ...n == null ? void 0 : n.state,
        pagination: i
      }
    }),
    query: a
  };
}, Ci = () => {
  const {
    close: e,
    setTitle: t,
    maximize: n,
    minimize: i,
    fold: o,
    setWidth: s,
    setHeight: r,
    updatePosition: a
  } = cs();
  return {
    close: e,
    setTitle: t,
    maximize: n,
    minimize: i,
    fold: o,
    setWidth: s,
    setHeight: r,
    updatePosition: a
  };
}, yi = [{
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
}], Oi = () => {
  const {
    close: e
  } = Ci(), t = wi("/api/rest/user", yi);
  return /* @__PURE__ */ C(us, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ C(ls, { onClick: e, children: "Закрыть" }, "close")],
    center: /* @__PURE__ */ C(mi, { ...t })
  }, children: /* @__PURE__ */ C(gi, { ...t }) });
};
export {
  Oi as default
};
