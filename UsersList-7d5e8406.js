var bt = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var d = (e, t, n) => (bt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), P = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, R = (e, t, n, s) => (bt(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var N = (e, t, n) => (bt(e, t, "access private method"), n);
import { S as Kn, s as Ct, n as $n, i as Yt, a as Jt, t as Wn, f as Xn, c as qn, r as en, b as fn, u as Gn, j as oe, d as T, F as Zn, e as Yn, g as Jn, h as es, k as ts, l as ns } from "./library-1ca2ede2.js";
import { C as ss, P as os } from "./Panel-cd2ccd2c.js";
import { j as D, n as rs, a as Et } from "./mui-36ebfa29.js";
import { f as zt, u as is, g as as } from "./table-46c094fe.js";
import { F as ue } from "./icons-a8a50daa.js";
import { r as l, c as Ae } from "./react-72acea58.js";
var $, M, Re, U, fe, Me, te, je, Te, Oe, de, he, re, pe, me, Le, Ue, St, _e, Rt, Fe, Mt, Be, Tt, Ve, Ot, Qe, Pt, Ke, xt, ct, dn, un, cs = (un = class extends Kn {
  constructor(t, n) {
    super();
    P(this, me);
    P(this, Ue);
    P(this, _e);
    P(this, Fe);
    P(this, Be);
    P(this, Ve);
    P(this, Qe);
    P(this, Ke);
    P(this, ct);
    P(this, $, void 0);
    P(this, M, void 0);
    P(this, Re, void 0);
    P(this, U, void 0);
    P(this, fe, void 0);
    P(this, Me, void 0);
    P(this, te, void 0);
    P(this, je, void 0);
    P(this, Te, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    P(this, Oe, void 0);
    P(this, de, void 0);
    P(this, he, void 0);
    P(this, re, void 0);
    P(this, pe, void 0);
    R(this, M, void 0), R(this, Re, void 0), R(this, U, void 0), R(this, pe, /* @__PURE__ */ new Set()), R(this, $, t), this.options = n, R(this, te, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (d(this, M).addObserver(this), tn(d(this, M), this.options) ? N(this, me, Le).call(this) : this.updateResult(), N(this, Be, Tt).call(this));
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
    this.listeners = /* @__PURE__ */ new Set(), N(this, Ve, Ot).call(this), N(this, Qe, Pt).call(this), d(this, M).removeObserver(this);
  }
  setOptions(t, n) {
    const s = this.options, i = d(this, M);
    if (this.options = d(this, $).defaultQueryOptions(t), Ct(s, this.options) || d(this, $).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: d(this, M),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey), N(this, Ke, xt).call(this);
    const o = this.hasListeners();
    o && nn(
      d(this, M),
      i,
      this.options,
      s
    ) && N(this, me, Le).call(this), this.updateResult(n), o && (d(this, M) !== i || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && N(this, Ue, St).call(this);
    const r = N(this, _e, Rt).call(this);
    o && (d(this, M) !== i || this.options.enabled !== s.enabled || r !== d(this, re)) && N(this, Fe, Mt).call(this, r);
  }
  getOptimisticResult(t) {
    const n = d(this, $).getQueryCache().build(d(this, $), t), s = this.createResult(n, t);
    return us(this, s) && (R(this, U, s), R(this, Me, this.options), R(this, fe, d(this, M).state)), s;
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
        get: () => (d(this, pe).add(s), t[s])
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
    return N(this, me, Le).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), d(this, U)));
  }
  createResult(t, n) {
    var z;
    const s = d(this, M), i = this.options, o = d(this, U), r = d(this, fe), c = d(this, Me), b = t !== s ? t.state : d(this, Re), { state: u } = t;
    let { error: m, errorUpdatedAt: C, fetchStatus: g, status: a } = u, f = !1, p;
    if (n._optimisticResults) {
      const S = this.hasListeners(), F = !S && tn(t, n), ne = S && nn(t, s, n, i);
      (F || ne) && (g = qn(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (a = "pending")), n._optimisticResults === "isRestoring" && (g = "idle");
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
      if (o != null && o.isPlaceholderData && n.placeholderData === (c == null ? void 0 : c.placeholderData))
        S = o.data;
      else if (S = typeof n.placeholderData == "function" ? n.placeholderData(
        (z = d(this, Oe)) == null ? void 0 : z.state.data,
        d(this, Oe)
      ) : n.placeholderData, n.select && typeof S < "u")
        try {
          S = n.select(S), R(this, te, null);
        } catch (F) {
          R(this, te, F);
        }
      typeof S < "u" && (a = "success", p = en(
        o == null ? void 0 : o.data,
        S,
        n
      ), f = !0);
    }
    d(this, te) && (m = d(this, te), p = d(this, Te), C = Date.now(), a = "error");
    const w = g === "fetching", v = a === "pending", y = a === "error", O = v && w;
    return {
      status: a,
      fetchStatus: g,
      isPending: v,
      isSuccess: a === "success",
      isError: y,
      isInitialLoading: O,
      isLoading: O,
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
    if (R(this, fe, d(this, M).state), R(this, Me, this.options), d(this, fe).data !== void 0 && R(this, Oe, d(this, M)), Ct(s, n))
      return;
    R(this, U, s);
    const i = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: r } = this.options, c = typeof r == "function" ? r() : r;
      if (c === "all" || !c && !d(this, pe).size)
        return !0;
      const h = new Set(
        c ?? d(this, pe)
      );
      return this.options.throwOnError && h.add("error"), Object.keys(d(this, U)).some((b) => {
        const u = b;
        return d(this, U)[u] !== n[u] && h.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0), N(this, ct, dn).call(this, { ...i, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && N(this, Be, Tt).call(this);
  }
}, $ = new WeakMap(), M = new WeakMap(), Re = new WeakMap(), U = new WeakMap(), fe = new WeakMap(), Me = new WeakMap(), te = new WeakMap(), je = new WeakMap(), Te = new WeakMap(), Oe = new WeakMap(), de = new WeakMap(), he = new WeakMap(), re = new WeakMap(), pe = new WeakMap(), me = new WeakSet(), Le = function(t) {
  N(this, Ke, xt).call(this);
  let n = d(this, M).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch($n)), n;
}, Ue = new WeakSet(), St = function() {
  if (N(this, Ve, Ot).call(this), Yt || d(this, U).isStale || !Jt(this.options.staleTime))
    return;
  const n = Wn(
    d(this, U).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  R(this, de, setTimeout(() => {
    d(this, U).isStale || this.updateResult();
  }, n));
}, _e = new WeakSet(), Rt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(d(this, M)) : this.options.refetchInterval) ?? !1;
}, Fe = new WeakSet(), Mt = function(t) {
  N(this, Qe, Pt).call(this), R(this, re, t), !(Yt || this.options.enabled === !1 || !Jt(d(this, re)) || d(this, re) === 0) && R(this, he, setInterval(() => {
    (this.options.refetchIntervalInBackground || Xn.isFocused()) && N(this, me, Le).call(this);
  }, d(this, re)));
}, Be = new WeakSet(), Tt = function() {
  N(this, Ue, St).call(this), N(this, Fe, Mt).call(this, N(this, _e, Rt).call(this));
}, Ve = new WeakSet(), Ot = function() {
  d(this, de) && (clearTimeout(d(this, de)), R(this, de, void 0));
}, Qe = new WeakSet(), Pt = function() {
  d(this, he) && (clearInterval(d(this, he)), R(this, he, void 0));
}, Ke = new WeakSet(), xt = function() {
  const t = d(this, $).getQueryCache().build(d(this, $), this.options);
  if (t === d(this, M))
    return;
  const n = d(this, M);
  R(this, M, t), R(this, Re, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, ct = new WeakSet(), dn = function(t) {
  fn.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(d(this, U));
    }), d(this, $).getQueryCache().notify({
      query: d(this, M),
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
  return !Ct(e.getCurrentResult(), t);
}
var hn = l.createContext(!1), fs = () => l.useContext(hn);
hn.Provider;
function ds() {
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
var hs = l.createContext(ds()), ps = () => l.useContext(hs);
function ms(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var gs = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, vs = (e) => {
  l.useEffect(() => {
    e.clearReset();
  }, [e]);
}, bs = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: s
}) => e.isError && !t.isReset() && !e.isFetching && ms(n, [e.error, s]), ws = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, ys = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Cs = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Es(e, t, n) {
  const s = Gn(n), i = fs(), o = ps(), r = s.defaultQueryOptions(e);
  r._optimisticResults = i ? "isRestoring" : "optimistic", ws(r), gs(r, o), vs(o);
  const [c] = l.useState(
    () => new t(
      s,
      r
    )
  ), h = c.getOptimisticResult(r);
  if (l.useSyncExternalStore(
    l.useCallback(
      (b) => {
        const u = i ? () => {
        } : c.subscribe(fn.batchCalls(b));
        return c.updateResult(), u;
      },
      [c, i]
    ),
    () => c.getCurrentResult(),
    () => c.getCurrentResult()
  ), l.useEffect(() => {
    c.setOptions(r, { listeners: !1 });
  }, [r, c]), ys(r, h))
    throw Cs(r, c, o);
  if (bs({
    result: h,
    errorResetBoundary: o,
    throwOnError: r.throwOnError,
    query: c.getCurrentQuery()
  }))
    throw h.error;
  return r.notifyOnChangeProps ? h : c.trackResult(h);
}
function Ss(e, t) {
  return Es(e, cs, t);
}
var pn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "caret-down", s = 320, i = 512, o = [], r = "f0d7", c = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      c
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = c, e.aliases = o;
})(pn);
var mn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", s = 384, i = 512, o = [8595], r = "f063", c = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      c
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = c, e.aliases = o;
})(mn);
var gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", s = 384, i = 512, o = [8593], r = "f062", c = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      c
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = c, e.aliases = o;
})(gn);
var vn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", s = 512, i = 512, o = ["columns"], r = "f0db", c = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      c
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = c, e.aliases = o;
})(vn);
var bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "eye-slash", s = 640, i = 512, o = [], r = "f070", c = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      c
    ]
  }, e.faEyeSlash = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = c, e.aliases = o;
})(bn);
var wn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", s = 576, i = 512, o = ["sort-alpha-desc", "sort-alpha-down-alt"], r = "f881", c = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      c
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = c, e.aliases = o;
})(wn);
var yn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", s = 576, i = 512, o = ["sort-alpha-up"], r = "f15e", c = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      i,
      o,
      r,
      c
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = i, e.ligatures = o, e.unicode = r, e.svgPathData = c, e.aliases = o;
})(yn);
const jt = (e) => !!e && e[0] === "o", It = Ae.unstable_batchedUpdates || ((e) => e()), Ee = (e, t, n = 1e-4) => Math.abs(e - t) < n, ze = (e, t) => e === !0 || !!(e && e[t]), W = (e, t) => typeof e == "function" ? e(t) : e, Rs = "_szhsinMenu", Ms = (e) => e[Rs], $e = (e, t) => (t && Object.keys(t).forEach((n) => {
  const s = e[n], i = t[n];
  typeof i == "function" && s ? e[n] = (...o) => {
    i(...o), s(...o);
  } : e[n] = i;
}), e), Ts = (e) => {
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
const ve = ({
  block: e,
  element: t,
  modifiers: n,
  className: s
}) => l.useMemo(() => {
  const i = t ? `${e}__${t}` : e;
  let o = i;
  n && Object.keys(n).forEach((c) => {
    const h = n[c];
    h && (o += ` ${i}--${h === !0 ? c : `${c}-${h}`}`);
  });
  let r = typeof s == "function" ? s(n) : s;
  return typeof r == "string" && (r = r.trim(), r && (o += ` ${r}`)), o;
}, [e, t, n, s]), Os = "szh-menu-container", ge = "szh-menu", Ps = "arrow", Cn = "item", xs = "divider", ks = "submenu", En = /* @__PURE__ */ l.createContext(), _t = /* @__PURE__ */ l.createContext({}), Dt = /* @__PURE__ */ l.createContext({}), Sn = /* @__PURE__ */ l.createContext({}), Is = /* @__PURE__ */ l.createContext({}), lt = /* @__PURE__ */ l.createContext({}), _ = /* @__PURE__ */ Object.freeze({
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
}), Ds = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), yt = "absolute", Rn = "presentation", Ft = "menuitem", on = {
  "aria-hidden": !0,
  role: Ft
}, Ns = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: s,
  isOpen: i,
  theming: o,
  transition: r,
  onClose: c
}) => {
  const h = ze(r, "item"), b = ({
    key: m
  }) => {
    switch (m) {
      case _.ESC:
        W(c, {
          key: m,
          reason: He.CANCEL
        });
        break;
    }
  }, u = (m) => {
    i && !m.currentTarget.contains(m.relatedTarget) && W(c, {
      reason: He.BLUR
    });
  };
  return /* @__PURE__ */ D.jsx("div", {
    ...$e({
      onKeyDown: b,
      onBlur: u
    }, n),
    className: ve({
      block: Os,
      modifiers: l.useMemo(() => ({
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
  const [n, s] = l.useState(), o = l.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, r = l.useCallback((h, b) => {
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
  }, [o, t]), c = l.useCallback((h, b, u) => {
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
    dispatch: c,
    updateItems: r
  };
}, zs = (e, t, n, s) => {
  const i = t.current.getBoundingClientRect(), o = e.current.getBoundingClientRect(), r = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), c = Ts(s), h = (a) => a + o.left - r.left - c.left, b = (a) => a + o.left + i.width - r.right + c.right, u = (a) => a + o.top - r.top - c.top, m = (a) => a + o.top + i.height - r.bottom + c.bottom;
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
}, Hs = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: s,
  menuRect: i
}) => {
  let o = n.top - s.top - t + n.height / 2;
  const r = e.current.offsetHeight * 1.25;
  return o = Math.max(r, o), o = Math.min(o, i.height - r), o;
}, js = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: s,
  placeLeftX: i,
  placeRightX: o,
  getLeftOverflow: r,
  getRightOverflow: c,
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
  return a === "left" ? (p = i, g !== "initial" && (w = r(p), w < 0 && (v = c(o), (v <= 0 || -w > v) && (p = o, a = "right")))) : (p = o, g !== "initial" && (v = c(p), v > 0 && (w = r(i), (w >= 0 || -w < v) && (p = i, a = "left")))), g === "auto" && (p = h(p)), {
    arrowY: m ? Hs({
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
}, Us = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: s,
  menuRect: i
}) => {
  let o = n.left - s.left - t + n.width / 2;
  const r = e.current.offsetWidth * 1.25;
  return o = Math.max(r, o), o = Math.min(o, i.width - r), o;
}, _s = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: s,
  placeTopY: i,
  placeBottomY: o,
  getTopOverflow: r,
  getBottomOverflow: c,
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
  return a === "top" ? (p = i, g !== "initial" && (w = r(p), w < 0 && (v = c(o), (v <= 0 || -w > v) && (p = o, a = "bottom")))) : (p = o, g !== "initial" && (v = c(p), v > 0 && (w = r(i), (w >= 0 || -w < v) && (p = i, a = "top")))), g === "auto" && (p = b(p)), {
    arrowX: m ? Us({
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
}, Fs = ({
  arrow: e,
  align: t,
  direction: n,
  gap: s,
  shift: i,
  position: o,
  anchorRect: r,
  arrowRef: c,
  positionHelpers: h
}) => {
  const {
    menuRect: b,
    containerRect: u
  } = h, m = n === "left" || n === "right";
  let C = m ? s : i, g = m ? i : s;
  if (e) {
    const k = c.current;
    m ? C += k.offsetWidth : g += k.offsetHeight;
  }
  const a = r.left - u.left - b.width - C, f = r.right - u.left + C, p = r.top - u.top - b.height - g, w = r.bottom - u.top + g;
  let v, y;
  t === "end" ? (v = r.right - u.left - b.width, y = r.bottom - u.top - b.height) : t === "center" ? (v = r.left - u.left - (b.width - r.width) / 2, y = r.top - u.top - (b.height - r.height) / 2) : (v = r.left - u.left, y = r.top - u.top), v += C, y += g;
  const O = {
    ...h,
    anchorRect: r,
    placeLeftX: a,
    placeRightX: f,
    placeLeftorRightY: y,
    placeTopY: p,
    placeBottomY: w,
    placeToporBottomX: v,
    arrowRef: c,
    arrow: e,
    direction: n,
    position: o
  };
  switch (n) {
    case "left":
    case "right":
      return js(O);
    case "top":
    case "bottom":
    default:
      return _s(O);
  }
}, ot = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? l.useLayoutEffect : l.useEffect;
function rn(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const ut = (e, t) => l.useMemo(() => e ? t ? (n) => {
  rn(e, n), rn(t, n);
} : e : t, [e, t]), an = -9999, Mn = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: n,
  arrow: s,
  arrowProps: i = {},
  anchorPoint: o,
  anchorRef: r,
  containerRef: c,
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
  endTransition: O,
  isDisabled: k,
  menuItemFocus: z,
  gap: S = 0,
  shift: F = 0,
  children: ne,
  onClose: V,
  ...x
}) => {
  const [H, ie] = l.useState({
    x: an,
    y: an
  }), [Pe, J] = l.useState({}), [L, ae] = l.useState(), [Q, We] = l.useState(g), [Z] = l.useState(Ls), [xe, ke] = l.useReducer((E) => E + 1, 1), {
    transition: Xe,
    boundingBoxRef: Ie,
    boundingBoxPadding: qe,
    rootMenuRef: Ge,
    rootAnchorRef: ce,
    scrollNodesRef: ft,
    reposition: Ze,
    viewScroll: De,
    submenuCloseDelay: dt
  } = l.useContext(lt), {
    submenuCtx: Ye,
    reposSubmenu: A = w
  } = l.useContext(Dt), K = l.useRef(null), Je = l.useRef(), Bt = l.useRef(), Vt = l.useRef(!1), et = l.useRef({
    width: 0,
    height: 0
  }), Qt = l.useRef(() => {
  }), {
    hoverItem: ht,
    dispatch: X,
    updateItems: tt
  } = As(K, Je), q = jt(y), Kt = ze(Xe, "open"), $t = ze(Xe, "close"), Y = ft.current, Ln = (E) => {
    switch (E.key) {
      case _.HOME:
        X(I.FIRST);
        break;
      case _.END:
        X(I.LAST);
        break;
      case _.UP:
        X(I.DECREASE, ht);
        break;
      case _.DOWN:
        X(I.INCREASE, ht);
        break;
      case _.SPACE:
        E.target && E.target.className.indexOf(ge) !== -1 && E.preventDefault();
        return;
      default:
        return;
    }
    E.preventDefault(), E.stopPropagation();
  }, An = () => {
    y === "closing" && ae(), W(O);
  }, zn = (E) => {
    E.stopPropagation(), Z.on(dt, () => {
      X(I.RESET), Je.current.focus();
    });
  }, Hn = (E) => {
    E.target === E.currentTarget && Z.off();
  }, le = l.useCallback((E) => {
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
    Y.menu || (Y.menu = (Ie ? Ie.current : wt(Ge.current)) || window);
    const G = zs(c, K, Y.menu, qe);
    let {
      arrowX: j,
      arrowY: be,
      x: we,
      y: se,
      computedDirection: gt
    } = Fs({
      arrow: s,
      align: C,
      direction: g,
      gap: S,
      shift: F,
      position: a,
      anchorRect: ee,
      arrowRef: Bt,
      positionHelpers: G
    });
    const {
      menuRect: Gt
    } = G;
    let ye = Gt.height;
    if (!E && f !== "visible") {
      const {
        getTopOverflow: Vn,
        getBottomOverflow: Qn
      } = G;
      let Ce, vt;
      const Zt = et.current.height, nt = Qn(se);
      if (nt > 0 || Ee(nt, 0) && Ee(ye, Zt))
        Ce = ye - nt, vt = nt;
      else {
        const Ne = Vn(se);
        (Ne < 0 || Ee(Ne, 0) && Ee(ye, Zt)) && (Ce = ye + Ne, vt = 0 - Ne, Ce >= 0 && (se -= Ne));
      }
      Ce >= 0 ? (ye = Ce, ae({
        height: Ce,
        overflowAmt: vt
      })) : ae();
    }
    s && J({
      x: j,
      y: be
    }), ie({
      x: we,
      y: se
    }), We(gt), et.current = {
      width: Gt.width,
      height: ye
    };
  }, [s, C, qe, g, S, F, a, f, o, r, c, Ie, Ge, Y]);
  ot(() => {
    q && (le(), Vt.current && ke()), Vt.current = q, Qt.current = le;
  }, [q, le, A]), ot(() => {
    L && !p && (K.current.scrollTop = 0);
  }, [L, p]), ot(() => tt, [tt]), l.useEffect(() => {
    let {
      menu: E
    } = Y;
    if (!q || !E)
      return;
    if (E = E.addEventListener ? E : window, !Y.anchors) {
      Y.anchors = [];
      let j = wt(ce && ce.current);
      for (; j && j !== E; )
        Y.anchors.push(j), j = wt(j);
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
  const Wt = !!L && L.overflowAmt > 0;
  l.useEffect(() => {
    if (Wt || !q || !m)
      return;
    const E = () => It(le), B = m.current;
    return B.addEventListener("scroll", E), () => B.removeEventListener("scroll", E);
  }, [q, Wt, m, le]), l.useEffect(() => {
    if (typeof ResizeObserver != "function" || Ze === "initial")
      return;
    const E = new ResizeObserver(([ee]) => {
      const {
        borderBoxSize: G,
        target: j
      } = ee;
      let be, we;
      if (G) {
        const {
          inlineSize: se,
          blockSize: gt
        } = G[0] || G;
        be = se, we = gt;
      } else {
        const se = j.getBoundingClientRect();
        be = se.width, we = se.height;
      }
      be === 0 || we === 0 || Ee(be, et.current.width, 1) && Ee(we, et.current.height, 1) || Ae.flushSync(() => {
        Qt.current(), ke();
      });
    }), B = K.current;
    return E.observe(B, {
      box: "border-box"
    }), () => E.unobserve(B);
  }, [Ze]), l.useEffect(() => {
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
        const j = K.current;
        j && !j.contains(document.activeElement) && (Je.current.focus(), ee());
      }, Kt ? 170 : 100);
      return () => clearTimeout(G);
    }
  }, [q, Kt, $t, v, z, X]);
  const jn = l.useMemo(() => ({
    isParentOpen: q,
    submenuCtx: Z,
    dispatch: X,
    updateItems: tt
  }), [q, Z, X, tt]);
  let pt, mt;
  L && (p ? mt = L.overflowAmt : pt = L.height);
  const Un = l.useMemo(() => ({
    reposSubmenu: xe,
    submenuCtx: Z,
    overflow: f,
    overflowAmt: mt,
    parentMenuRef: K,
    parentDir: Q
  }), [xe, Z, f, mt, Q]), _n = pt >= 0 ? {
    maxHeight: pt,
    overflow: f
  } : void 0, Xt = l.useMemo(() => ({
    state: y,
    dir: Q
  }), [y, Q]), Fn = l.useMemo(() => ({
    dir: Q
  }), [Q]), Bn = ve({
    block: ge,
    element: Ps,
    modifiers: Fn,
    className: i.className
  }), qt = /* @__PURE__ */ D.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Ut(k),
    ...$e({
      onPointerEnter: Ye == null ? void 0 : Ye.off,
      onPointerMove: zn,
      onPointerLeave: Hn,
      onKeyDown: Ln,
      onAnimationEnd: An
    }, x),
    ref: ut(u, K),
    className: ve({
      block: ge,
      modifiers: Xt,
      className: t
    }),
    style: {
      ...n,
      ..._n,
      margin: 0,
      display: y === "closed" ? "none" : void 0,
      position: yt,
      left: H.x,
      top: H.y
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
      ref: Je,
      ...on,
      ...b
    }), s && /* @__PURE__ */ D.jsx("li", {
      ...on,
      ...i,
      className: Bn,
      style: {
        display: "block",
        position: yt,
        left: Pe.x,
        top: Pe.y,
        ...i.style
      },
      ref: Bt
    }), /* @__PURE__ */ D.jsx(Dt.Provider, {
      value: Un,
      children: /* @__PURE__ */ D.jsx(_t.Provider, {
        value: jn,
        children: /* @__PURE__ */ D.jsx(En.Provider, {
          value: ht,
          children: W(ne, Xt)
        })
      })
    })]
  });
  return h ? /* @__PURE__ */ D.jsx(Ns, {
    ...h,
    isOpen: q,
    children: qt
  }) : qt;
}, Bs = /* @__PURE__ */ l.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: s,
  initialMounted: i,
  unmountOnClose: o,
  transition: r,
  transitionTimeout: c,
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
  const y = l.useRef(null), O = l.useRef({}), {
    anchorRef: k,
    state: z,
    onClose: S
  } = w, F = l.useMemo(() => ({
    initialMounted: i,
    unmountOnClose: o,
    transition: r,
    transitionTimeout: c,
    boundingBoxRef: h,
    boundingBoxPadding: b,
    rootMenuRef: y,
    rootAnchorRef: k,
    scrollNodesRef: O,
    reposition: u,
    viewScroll: g,
    submenuOpenDelay: m,
    submenuCloseDelay: C
  }), [i, o, r, c, k, h, b, u, g, m, C]), ne = l.useMemo(() => ({
    handleClick(x, H) {
      x.stopPropagation || W(p, x);
      let ie = x.keepOpen;
      ie === void 0 && (ie = H && x.key === _.SPACE), ie || W(S, {
        value: x.value,
        key: x.key,
        reason: He.CLICK
      });
    },
    handleClose(x) {
      W(S, {
        key: x,
        reason: He.CLICK
      });
    }
  }), [p, S]);
  if (!z)
    return null;
  const V = /* @__PURE__ */ D.jsx(lt.Provider, {
    value: F,
    children: /* @__PURE__ */ D.jsx(Sn.Provider, {
      value: ne,
      children: /* @__PURE__ */ D.jsx(Mn, {
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
  return a === !0 && typeof document < "u" ? /* @__PURE__ */ Ae.createPortal(V, document.body) : a ? a.target ? /* @__PURE__ */ Ae.createPortal(V, a.target) : a.stablePosition ? null : V : V;
}), Nt = 0, Lt = 1, rt = 2, it = 3, at = 4, Vs = 5, Tn = 6, Qs = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], On = (e) => ({
  _s: e,
  status: Qs[e],
  isEnter: e < it,
  isMounted: e !== Tn,
  isResolved: e === rt || e > at
}), At = (e) => e ? Tn : Vs, Ks = (e, t) => {
  switch (e) {
    case Lt:
    case Nt:
      return rt;
    case at:
    case it:
      return At(t);
  }
}, $s = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], Ws = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), cn = (e, t, n, s, i) => {
  clearTimeout(s.current);
  const o = On(e);
  t(o), n.current = o, i && i({
    current: o
  });
}, Xs = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: s,
  timeout: i,
  initialEntered: o,
  mountOnEnter: r,
  unmountOnExit: c,
  onStateChange: h
} = {}) => {
  const [b, u] = l.useState(() => On(o ? rt : At(r))), m = l.useRef(b), C = l.useRef(), [g, a] = $s(i), f = l.useCallback(() => {
    const w = Ks(m.current._s, c);
    w && cn(w, u, m, C, h);
  }, [h, c]), p = l.useCallback((w) => {
    const v = (O) => {
      switch (cn(O, u, m, C, h), O) {
        case Lt:
          g >= 0 && (C.current = setTimeout(f, g));
          break;
        case at:
          a >= 0 && (C.current = setTimeout(f, a));
          break;
        case Nt:
        case it:
          C.current = Ws(v, O);
          break;
      }
    }, y = m.current.isEnter;
    typeof w != "boolean" && (w = !y), w ? !y && v(e ? n ? Nt : Lt : rt) : y && v(t ? s ? it : at : At(c));
  }, [f, h, e, t, n, s, g, a, c]);
  return l.useEffect(() => () => clearTimeout(C.current), []), [b, p, f];
}, qs = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: s,
  transitionTimeout: i = 500
} = {}) => {
  const [{
    status: o
  }, r, c] = Xs({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: i,
    enter: ze(s, "open"),
    exit: ze(s, "close")
  });
  return [{
    state: Ds[o],
    endTransition: c
  }, r];
}, Pn = (e) => {
  const [t, n] = qs(e), [s, i] = l.useState(), o = (r, c) => {
    i({
      position: r,
      alwaysUpdate: c
    }), n(!0);
  };
  return [{
    menuItemFocus: s,
    ...t
  }, n, o];
}, Gs = (e, t) => {
  const [n] = l.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (s) => n.v ? n.v = !1 : t(!0, s)
  };
}, xn = (e, t) => {
  const n = l.useRef(t);
  l.useEffect(() => {
    n.current !== t && W(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, Zs = /* @__PURE__ */ l.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: s,
  menuButton: i,
  instanceRef: o,
  onMenuChange: r,
  ...c
}, h) {
  const [b, u, m] = Pn(c), {
    state: C
  } = b, g = jt(C), a = l.useRef(null), f = Gs(C, (k, z) => m(z.detail ? void 0 : Se.FIRST)), p = l.useCallback((k) => {
    u(!1), k.key && a.current.focus();
  }, [u]), w = (k) => {
    switch (k.key) {
      case _.UP:
        m(Se.LAST);
        break;
      case _.DOWN:
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
    ref: ut(v.ref, a),
    ...$e({
      onKeyDown: w,
      ...f
    }, v.props)
  };
  Ms(v.type) === "MenuButton" && (y.isOpen = g);
  const O = /* @__PURE__ */ l.cloneElement(v, y);
  return xn(r, g), l.useImperativeHandle(o, () => ({
    openMenu: m,
    closeMenu: () => u(!1)
  })), /* @__PURE__ */ D.jsxs(l.Fragment, {
    children: [O, /* @__PURE__ */ D.jsx(Bs, {
      ...c,
      ...b,
      "aria-label": t || (typeof v.props.children == "string" ? v.props.children : "Menu"),
      anchorRef: a,
      ref: h,
      onClose: p
    })]
  });
}), kn = (e, t) => {
  const n = /* @__PURE__ */ l.memo(t), s = /* @__PURE__ */ l.forwardRef((i, o) => {
    const r = l.useRef(null);
    return /* @__PURE__ */ D.jsx(n, {
      ...i,
      itemRef: r,
      externalRef: o,
      isHovering: l.useContext(En) === r.current
    });
  });
  return s.displayName = `WithHovering(${e})`, s;
}, In = (e, t, n) => {
  ot(() => {
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
  label: o,
  openTrigger: r,
  onMenuChange: c,
  isHovering: h,
  instanceRef: b,
  itemRef: u,
  captureFocus: m,
  repositionFlag: C,
  itemProps: g = {},
  ...a
}) {
  const f = l.useContext(lt), {
    rootMenuRef: p,
    submenuOpenDelay: w,
    submenuCloseDelay: v
  } = f, {
    parentMenuRef: y,
    parentDir: O,
    overflow: k
  } = l.useContext(Dt), {
    isParentOpen: z,
    submenuCtx: S,
    dispatch: F,
    updateItems: ne
  } = l.useContext(_t), V = k !== "visible", [x, H, ie] = Pn(f), {
    state: Pe
  } = x, J = !!s, L = jt(Pe), ae = l.useRef(null), [Q] = l.useState({
    v: 0
  }), We = () => {
    S.off(), Q.v && (clearTimeout(Q.v), Q.v = 0);
  }, Z = (...A) => {
    We(), xe(), !J && ie(...A);
  }, xe = () => !h && !J && F(I.SET, u.current), ke = (A) => {
    xe(), r || (Q.v = setTimeout(() => It(Z), Math.max(A, 0)));
  }, Xe = (A) => {
    J || (A.stopPropagation(), !(Q.v || L) && S.on(v, () => ke(w - v), () => ke(w)));
  }, Ie = () => {
    We(), L || F(I.UNSET, u.current);
  }, qe = (A) => {
    if (h)
      switch (A.key) {
        case _.ENTER:
          A.preventDefault();
        case _.SPACE:
        case _.RIGHT:
          r !== "none" && Z(Se.FIRST);
      }
  }, Ge = (A) => {
    let K = !1;
    switch (A.key) {
      case _.LEFT:
        L && (u.current.focus(), H(!1), K = !0);
        break;
      case _.RIGHT:
        L || (K = !0);
        break;
    }
    K && (A.preventDefault(), A.stopPropagation());
  };
  In(J, u, ne), xn(c, L), l.useEffect(() => S.toggle(L), [S, L]), l.useEffect(() => () => clearTimeout(Q.v), [Q]), l.useEffect(() => {
    h && z ? u.current.focus() : H(!1);
  }, [h, z, H, u]), l.useImperativeHandle(b, () => ({
    openMenu: (...A) => {
      z && Z(...A);
    },
    closeMenu: () => {
      L && (u.current.focus(), H(!1));
    }
  }));
  const ce = l.useMemo(() => ({
    open: L,
    hover: h,
    disabled: J,
    submenu: !0
  }), [L, h, J]), {
    ref: ft,
    className: Ze,
    ...De
  } = g, dt = $e({
    onPointerEnter: S.off,
    onPointerMove: Xe,
    onPointerLeave: Ie,
    onKeyDown: qe,
    onClick: () => r !== "none" && Z()
  }, De), Ye = () => {
    const A = /* @__PURE__ */ D.jsx(Mn, {
      ...a,
      ...x,
      ariaLabel: t || (typeof o == "string" ? o : "Submenu"),
      anchorRef: u,
      containerRef: V ? p : ae,
      direction: i || (O === "right" || O === "left" ? O : "right"),
      parentScrollingRef: V && y,
      isDisabled: J
    }), K = p.current;
    return V && K ? /* @__PURE__ */ Ae.createPortal(A, K) : A;
  };
  return /* @__PURE__ */ D.jsxs("li", {
    className: ve({
      block: ge,
      element: ks,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: Rn,
    ref: ae,
    onKeyDown: Ge,
    children: [/* @__PURE__ */ D.jsx("div", {
      role: Ft,
      "aria-haspopup": !0,
      "aria-expanded": L,
      ...Ut(J, h),
      ...dt,
      ref: ut(ft, u),
      className: ve({
        block: ge,
        element: Cn,
        modifiers: ce,
        className: Ze
      }),
      children: l.useMemo(() => W(o, ce), [o, ce])
    }), Pe && Ye()]
  });
}), Js = (e, t, n, s) => {
  const {
    submenuCloseDelay: i
  } = l.useContext(lt), {
    isParentOpen: o,
    submenuCtx: r,
    dispatch: c,
    updateItems: h
  } = l.useContext(_t), b = () => {
    !n && !s && c(I.SET, e.current);
  }, u = () => {
    !s && c(I.UNSET, e.current);
  }, m = (a) => {
    n && !a.currentTarget.contains(a.relatedTarget) && u();
  }, C = (a) => {
    s || (a.stopPropagation(), r.on(i, b, b));
  }, g = (a, f) => {
    r.off(), !f && u();
  };
  return In(s, e, h), l.useEffect(() => {
    n && o && t.current && t.current.focus();
  }, [t, n, o]), {
    setHover: b,
    onBlur: m,
    onPointerMove: C,
    onPointerLeave: g
  };
}, st = /* @__PURE__ */ kn("MenuItem", function({
  className: t,
  value: n,
  href: s,
  type: i,
  checked: o,
  disabled: r,
  children: c,
  onClick: h,
  isHovering: b,
  itemRef: u,
  externalRef: m,
  ...C
}) {
  const g = !!r, {
    setHover: a,
    ...f
  } = Js(u, u, b, g), p = l.useContext(Sn), w = l.useContext(Is), v = i === "radio", y = i === "checkbox", O = !!s && !g && !v && !y, k = v ? w.value === n : y ? !!o : !1, z = (x) => {
    if (g) {
      x.stopPropagation(), x.preventDefault();
      return;
    }
    const H = {
      value: n,
      syntheticEvent: x
    };
    x.key !== void 0 && (H.key = x.key), y && (H.checked = !k), v && (H.name = w.name), W(h, H), v && W(w.onRadioChange, H), p.handleClick(H, y || v);
  }, S = (x) => {
    if (b)
      switch (x.key) {
        case _.ENTER:
          x.preventDefault();
        case _.SPACE:
          O ? u.current.click() : z(x);
      }
  }, F = l.useMemo(() => ({
    type: i,
    disabled: g,
    hover: b,
    checked: k,
    anchor: O
  }), [i, g, b, k, O]), ne = $e({
    ...f,
    onPointerDown: a,
    onKeyDown: S,
    onClick: z
  }, C), V = {
    role: v ? "menuitemradio" : y ? "menuitemcheckbox" : Ft,
    "aria-checked": v || y ? k : void 0,
    ...Ut(g, b),
    ...ne,
    ref: ut(m, u),
    className: ve({
      block: ge,
      element: Cn,
      modifiers: F,
      className: t
    }),
    children: l.useMemo(() => W(c, F), [c, F])
  };
  return O ? /* @__PURE__ */ D.jsx("li", {
    role: Rn,
    children: /* @__PURE__ */ D.jsx("a", {
      href: s,
      ...V
    })
  }) : /* @__PURE__ */ D.jsx("li", {
    ...V
  });
}), eo = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: t,
  ...n
}, s) {
  return /* @__PURE__ */ D.jsx("li", {
    role: "separator",
    ...n,
    ref: s,
    className: ve({
      block: ge,
      element: xs,
      className: t
    })
  });
}));
const to = "szh-menu", no = "item", so = (e) => (t) => (n) => {
  let s = `.${e}`;
  return t && (s += `__${t}`), n && (s += `--${n}`), s;
}, Dn = (e, t = []) => {
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
}, oo = ["dir-left", "dir-right", "dir-top", "dir-bottom"], Nn = /* @__PURE__ */ so(to);
[...oo];
const ln = /* @__PURE__ */ Dn(/* @__PURE__ */ Nn(no), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), ro = rs(Zs)`
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
`, io = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: s
  } = n, i = s.getVisibleLeafColumns().length;
  return /* @__PURE__ */ oe(ro, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    /* @__PURE__ */ oe(st, { onClick: () => t.column.toggleSorting(!1), children: [
      /* @__PURE__ */ T(ue, { icon: yn.faArrowUpAZ }),
      " Сортировать по возрастанию"
    ] }),
    /* @__PURE__ */ oe(st, { onClick: () => t.column.toggleSorting(!0), children: [
      /* @__PURE__ */ T(ue, { icon: wn.faArrowDownZA }),
      "Сортировать по убыванию"
    ] }),
    /* @__PURE__ */ oe(st, { disabled: i === 1, onClick: () => t.column.toggleVisibility(), children: [
      /* @__PURE__ */ T(ue, { icon: bn.faEyeSlash }),
      "Скрыть колонку"
    ] }),
    /* @__PURE__ */ T(eo, {}),
    /* @__PURE__ */ T(Ys, { label: /* @__PURE__ */ oe(Zn, { children: [
      /* @__PURE__ */ T(ue, { icon: vn.faTableColumns }),
      "Колонки"
    ] }), children: s.getAllLeafColumns().map((o) => /* @__PURE__ */ T(st, { type: "checkbox", checked: o.getIsVisible(), disabled: i === 1 && o.getIsVisible(), onClick: (r) => {
      r.keepOpen = !0, o.toggleVisibility();
    }, children: zt(o.columnDef.header, n) }, o.id)) })
  ] });
}, ao = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: s,
    getContext: i,
    getResizeHandler: o
  } = e;
  return /* @__PURE__ */ oe("th", { css: [{
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
    /* @__PURE__ */ oe("div", { css: [{
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
      /* @__PURE__ */ oe("div", { onClick: () => {
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
        n.getIsSorted() === "asc" && /* @__PURE__ */ T(ue, { icon: gn.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ T(ue, { icon: mn.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ T(io, { header: e, children: ({
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
      }], children: /* @__PURE__ */ T(ue, { css: {
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
}, co = ({
  table: e
}) => /* @__PURE__ */ T(Yn, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ oe("table", { css: [{
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
  }, children: t.headers.map((n) => /* @__PURE__ */ T(ao, { ...n }, n.id)) }, t.id)) }),
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
] }) }), lo = ({
  columns: e,
  data: t = [],
  isLoading: n,
  ...s
}) => {
  const [i, {
    width: o
  }] = Jn(), r = is({
    getCoreRowModel: as(),
    columnResizeMode: "onChange",
    ...s,
    columns: e,
    data: t
  });
  return {
    ref: i,
    isLoading: n,
    ...r
  };
}, uo = () => {
  const e = es();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function fo(e, t) {
  let n;
  typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const {
    url: s,
    params: i,
    ...o
  } = n, r = uo();
  return Ss({
    queryKey: i ? [s, i, r.defaults.headers.Authorization || ""] : [s, r.defaults.headers.Authorization || ""],
    queryFn: async ({
      signal: c
    }) => {
      const {
        data: h
      } = await r.get(s, {
        params: i,
        signal: c
      });
      return h;
    },
    ...o
  });
}
const ho = (e, t, n) => {
  var i;
  const s = fo(e, {
    placeholderData: ts
  });
  return lo({
    ...n,
    columns: t,
    data: (i = s.data) == null ? void 0 : i.data,
    isLoading: s.isLoading
  });
}, po = () => {
  const {
    close: e,
    setTitle: t,
    maximize: n,
    minimize: s,
    fold: i,
    setWidth: o,
    setHeight: r,
    updatePosition: c
  } = ns();
  return {
    close: e,
    setTitle: t,
    maximize: n,
    minimize: s,
    fold: i,
    setWidth: o,
    setHeight: r,
    updatePosition: c
  };
}, mo = [{
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
}], So = () => {
  const {
    close: e
  } = po(), t = ho("/api/rest/user", mo);
  return /* @__PURE__ */ T(os, { css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, bottomToolbarProps: {
    right: [/* @__PURE__ */ T(ss, { onClick: e, children: "Закрыть" }, "close")]
  }, children: /* @__PURE__ */ T(co, { table: t }) });
};
export {
  So as default
};
