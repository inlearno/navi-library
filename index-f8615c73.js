var _s = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var _ = (e, t, n) => (_s(e, t, "read from private field"), n ? n.call(e) : t.get(e)), z = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, F = (e, t, n, s) => (_s(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var Q = (e, t, n) => (_s(e, t, "access private method"), n);
import { S as Na, s as Os, n as xa, i as Nr, a as xr, t as Ea, f as Ia, c as La, r as Er, b as qr, d as Aa, j as M, e as ee, F as Cs, g as Fa, k as Wa, h as Ha } from "./library-e71f0112.js";
import { j as Z, n as Ua, a as Fn, I as Pt } from "./mui-fb8b9569.js";
import { f as Ks, u as za, g as ja } from "./table-90839a50.js";
import { r as u, R as qn, c as Jt } from "./react-181b9648.js";
import { F as ce } from "./icons-cd19d6df.js";
import { s as Va, f as Ga, u as $a } from "./lodash-cd26206b.js";
var ge, W, Lt, se, mt, At, Le, on, Ft, Wt, gt, yt, tt, vt, pt, Kt, ln, Ts, un, Ps, cn, Ys, dn, Rs, hn, Ns, fn, xs, mn, Es, Kn, Xr, Kr, Ba = (Kr = class extends Na {
  constructor(t, n) {
    super();
    z(this, pt);
    z(this, ln);
    z(this, un);
    z(this, cn);
    z(this, dn);
    z(this, hn);
    z(this, fn);
    z(this, mn);
    z(this, Kn);
    z(this, ge, void 0);
    z(this, W, void 0);
    z(this, Lt, void 0);
    z(this, se, void 0);
    z(this, mt, void 0);
    z(this, At, void 0);
    z(this, Le, void 0);
    z(this, on, void 0);
    z(this, Ft, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    z(this, Wt, void 0);
    z(this, gt, void 0);
    z(this, yt, void 0);
    z(this, tt, void 0);
    z(this, vt, void 0);
    F(this, W, void 0), F(this, Lt, void 0), F(this, se, void 0), F(this, vt, /* @__PURE__ */ new Set()), F(this, ge, t), this.options = n, F(this, Le, null), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (_(this, W).addObserver(this), Ir(_(this, W), this.options) ? Q(this, pt, Kt).call(this) : this.updateResult(), Q(this, dn, Rs).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Is(
      _(this, W),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Is(
      _(this, W),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Q(this, hn, Ns).call(this), Q(this, fn, xs).call(this), _(this, W).removeObserver(this);
  }
  setOptions(t, n) {
    const s = this.options, r = _(this, W);
    if (this.options = _(this, ge).defaultQueryOptions(t), Os(s, this.options) || _(this, ge).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: _(this, W),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey), Q(this, mn, Es).call(this);
    const i = this.hasListeners();
    i && Lr(
      _(this, W),
      r,
      this.options,
      s
    ) && Q(this, pt, Kt).call(this), this.updateResult(n), i && (_(this, W) !== r || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && Q(this, ln, Ts).call(this);
    const a = Q(this, un, Ps).call(this);
    i && (_(this, W) !== r || this.options.enabled !== s.enabled || a !== _(this, tt)) && Q(this, cn, Ys).call(this, a);
  }
  getOptimisticResult(t) {
    const n = _(this, ge).getQueryCache().build(_(this, ge), t), s = this.createResult(n, t);
    return Qa(this, s) && (F(this, se, s), F(this, At, this.options), F(this, mt, _(this, W).state)), s;
  }
  getCurrentResult() {
    return _(this, se);
  }
  trackResult(t) {
    const n = {};
    return Object.keys(t).forEach((s) => {
      Object.defineProperty(n, s, {
        configurable: !1,
        enumerable: !0,
        get: () => (_(this, vt).add(s), t[s])
      });
    }), n;
  }
  getCurrentQuery() {
    return _(this, W);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = _(this, ge).defaultQueryOptions(t), s = _(this, ge).getQueryCache().build(_(this, ge), n);
    return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, n));
  }
  fetch(t) {
    return Q(this, pt, Kt).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), _(this, se)));
  }
  createResult(t, n) {
    var K;
    const s = _(this, W), r = this.options, i = _(this, se), a = _(this, mt), o = _(this, At), f = t !== s ? t.state : _(this, Lt), { state: c } = t;
    let { error: g, errorUpdatedAt: k, fetchStatus: p, status: d } = c, y = !1, w;
    if (n._optimisticResults) {
      const I = this.hasListeners(), le = !I && Ir(t, n), ze = I && Lr(t, s, n, r);
      (le || ze) && (p = La(t.options.networkMode) ? "fetching" : "paused", c.dataUpdatedAt || (d = "pending")), n._optimisticResults === "isRestoring" && (p = "idle");
    }
    if (n.select && typeof c.data < "u")
      if (i && c.data === (a == null ? void 0 : a.data) && n.select === _(this, on))
        w = _(this, Ft);
      else
        try {
          F(this, on, n.select), w = n.select(c.data), w = Er(i == null ? void 0 : i.data, w, n), F(this, Ft, w), F(this, Le, null);
        } catch (I) {
          F(this, Le, I);
        }
    else
      w = c.data;
    if (typeof n.placeholderData < "u" && typeof w > "u" && d === "pending") {
      let I;
      if (i != null && i.isPlaceholderData && n.placeholderData === (o == null ? void 0 : o.placeholderData))
        I = i.data;
      else if (I = typeof n.placeholderData == "function" ? n.placeholderData(
        (K = _(this, Wt)) == null ? void 0 : K.state.data,
        _(this, Wt)
      ) : n.placeholderData, n.select && typeof I < "u")
        try {
          I = n.select(I), F(this, Le, null);
        } catch (le) {
          F(this, Le, le);
        }
      typeof I < "u" && (d = "success", w = Er(
        i == null ? void 0 : i.data,
        I,
        n
      ), y = !0);
    }
    _(this, Le) && (g = _(this, Le), w = _(this, Ft), k = Date.now(), d = "error");
    const D = p === "fetching", S = d === "pending", C = d === "error", x = S && D;
    return {
      status: d,
      fetchStatus: p,
      isPending: S,
      isSuccess: d === "success",
      isError: C,
      isInitialLoading: x,
      isLoading: x,
      data: w,
      dataUpdatedAt: c.dataUpdatedAt,
      error: g,
      errorUpdatedAt: k,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > f.dataUpdateCount || c.errorUpdateCount > f.errorUpdateCount,
      isFetching: D,
      isRefetching: D && !S,
      isLoadingError: C && c.dataUpdatedAt === 0,
      isPaused: p === "paused",
      isPlaceholderData: y,
      isRefetchError: C && c.dataUpdatedAt !== 0,
      isStale: qs(t, n),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const n = _(this, se), s = this.createResult(_(this, W), this.options);
    if (F(this, mt, _(this, W).state), F(this, At, this.options), _(this, mt).data !== void 0 && F(this, Wt, _(this, W)), Os(s, n))
      return;
    F(this, se, s);
    const r = {}, i = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: a } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !_(this, vt).size)
        return !0;
      const l = new Set(
        o ?? _(this, vt)
      );
      return this.options.throwOnError && l.add("error"), Object.keys(_(this, se)).some((f) => {
        const c = f;
        return _(this, se)[c] !== n[c] && l.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (r.listeners = !0), Q(this, Kn, Xr).call(this, { ...r, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Q(this, dn, Rs).call(this);
  }
}, ge = new WeakMap(), W = new WeakMap(), Lt = new WeakMap(), se = new WeakMap(), mt = new WeakMap(), At = new WeakMap(), Le = new WeakMap(), on = new WeakMap(), Ft = new WeakMap(), Wt = new WeakMap(), gt = new WeakMap(), yt = new WeakMap(), tt = new WeakMap(), vt = new WeakMap(), pt = new WeakSet(), Kt = function(t) {
  Q(this, mn, Es).call(this);
  let n = _(this, W).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(xa)), n;
}, ln = new WeakSet(), Ts = function() {
  if (Q(this, hn, Ns).call(this), Nr || _(this, se).isStale || !xr(this.options.staleTime))
    return;
  const n = Ea(
    _(this, se).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  F(this, gt, setTimeout(() => {
    _(this, se).isStale || this.updateResult();
  }, n));
}, un = new WeakSet(), Ps = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(_(this, W)) : this.options.refetchInterval) ?? !1;
}, cn = new WeakSet(), Ys = function(t) {
  Q(this, fn, xs).call(this), F(this, tt, t), !(Nr || this.options.enabled === !1 || !xr(_(this, tt)) || _(this, tt) === 0) && F(this, yt, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ia.isFocused()) && Q(this, pt, Kt).call(this);
  }, _(this, tt)));
}, dn = new WeakSet(), Rs = function() {
  Q(this, ln, Ts).call(this), Q(this, cn, Ys).call(this, Q(this, un, Ps).call(this));
}, hn = new WeakSet(), Ns = function() {
  _(this, gt) && (clearTimeout(_(this, gt)), F(this, gt, void 0));
}, fn = new WeakSet(), xs = function() {
  _(this, yt) && (clearInterval(_(this, yt)), F(this, yt, void 0));
}, mn = new WeakSet(), Es = function() {
  const t = _(this, ge).getQueryCache().build(_(this, ge), this.options);
  if (t === _(this, W))
    return;
  const n = _(this, W);
  F(this, W, t), F(this, Lt, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, Kn = new WeakSet(), Xr = function(t) {
  qr.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(_(this, se));
    }), _(this, ge).getQueryCache().notify({
      query: _(this, W),
      type: "observerResultsUpdated"
    });
  });
}, Kr);
function Za(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Ir(e, t) {
  return Za(e, t) || e.state.dataUpdatedAt > 0 && Is(e, t, t.refetchOnMount);
}
function Is(e, t, n) {
  if (t.enabled !== !1) {
    const s = typeof n == "function" ? n(e) : n;
    return s === "always" || s !== !1 && qs(e, t);
  }
  return !1;
}
function Lr(e, t, n, s) {
  return n.enabled !== !1 && (e !== t || s.enabled === !1) && (!n.suspense || e.state.status !== "error") && qs(e, n);
}
function qs(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function Qa(e, t) {
  return !Os(e.getCurrentResult(), t);
}
var Jr = u.createContext(!1), Ka = () => u.useContext(Jr);
Jr.Provider;
function qa() {
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
var Xa = u.createContext(qa()), Ja = () => u.useContext(Xa), eo = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, to = (e) => {
  u.useEffect(() => {
    e.clearReset();
  }, [e]);
}, no = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: s
}) => e.isError && !t.isReset() && !e.isFetching && Va(n, [e.error, s]), so = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, ro = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, io = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function ao(e, t, n) {
  const s = Aa(n), r = Ka(), i = Ja(), a = s.defaultQueryOptions(e);
  a._optimisticResults = r ? "isRestoring" : "optimistic", so(a), eo(a, i), to(i);
  const [o] = u.useState(
    () => new t(
      s,
      a
    )
  ), l = o.getOptimisticResult(a);
  if (u.useSyncExternalStore(
    u.useCallback(
      (f) => {
        const c = r ? () => {
        } : o.subscribe(qr.batchCalls(f));
        return o.updateResult(), c;
      },
      [o, r]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), u.useEffect(() => {
    o.setOptions(a, { listeners: !1 });
  }, [a, o]), ro(a, l))
    throw io(a, o, i);
  if (no({
    result: l,
    errorResetBoundary: i,
    throwOnError: a.throwOnError,
    query: o.getCurrentQuery()
  }))
    throw l.error;
  return a.notifyOnChangeProps ? l : o.trackResult(l);
}
function oo(e, t) {
  return ao(e, Ba, t);
}
const lo = ({
  ...e
}) => /* @__PURE__ */ M("td", { css: [{
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
}], children: Ks(e.column.columnDef.cell, e.getContext()) }, e.id), uo = qn.memo(lo), co = (e) => /* @__PURE__ */ M("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], children: e.getVisibleCells().map((t) => /* @__PURE__ */ M(uo, { ...t }, t.id)) }, e.id);
var ei = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "caret-down", s = 320, r = 512, i = [], a = "f0d7", o = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(ei);
var ti = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down", s = 384, r = 512, i = [8595], a = "f063", o = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faArrowDown = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(ti);
var ni = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up", s = 384, r = 512, i = [8593], a = "f062", o = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faArrowUp = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(ni);
var si = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "table-columns", s = 512, r = 512, i = ["columns"], a = "f0db", o = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faTableColumns = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(si);
var ri = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "eye-slash", s = 640, r = 512, i = [], a = "f070", o = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faEyeSlash = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(ri);
var ii = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-down-z-a", s = 576, r = 512, i = ["sort-alpha-desc", "sort-alpha-down-alt"], a = "f881", o = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(ii);
var ai = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrow-up-a-z", s = 576, r = 512, i = ["sort-alpha-up"], a = "f15e", o = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(ai);
const Xs = (e) => !!e && e[0] === "o", Ls = Jt.unstable_batchedUpdates || ((e) => e()), Ct = (e, t, n = 1e-4) => Math.abs(e - t) < n, en = (e, t) => e === !0 || !!(e && e[t]), ye = (e, t) => typeof e == "function" ? e(t) : e, ho = "_szhsinMenu", fo = (e) => e[ho], gn = (e, t) => (t && Object.keys(t).forEach((n) => {
  const s = e[n], r = t[n];
  typeof r == "function" && s ? e[n] = (...i) => {
    r(...i), s(...i);
  } : e[n] = r;
}), e), mo = (e) => {
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
}, ws = (e) => {
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
function Js(e, t) {
  return {
    "aria-disabled": e || void 0,
    tabIndex: t ? 0 : -1
  };
}
function Ar(e, t) {
  for (let n = 0; n < e.length; n++)
    if (e[n] === t)
      return n;
  return -1;
}
const St = ({
  block: e,
  element: t,
  modifiers: n,
  className: s
}) => u.useMemo(() => {
  const r = t ? `${e}__${t}` : e;
  let i = r;
  n && Object.keys(n).forEach((o) => {
    const l = n[o];
    l && (i += ` ${r}--${l === !0 ? o : `${o}-${l}`}`);
  });
  let a = typeof s == "function" ? s(n) : s;
  return typeof a == "string" && (a = a.trim(), a && (i += ` ${a}`)), i;
}, [e, t, n, s]), go = "szh-menu-container", _t = "szh-menu", yo = "arrow", oi = "item", vo = "divider", po = "submenu", li = /* @__PURE__ */ u.createContext(), er = /* @__PURE__ */ u.createContext({}), As = /* @__PURE__ */ u.createContext({}), ui = /* @__PURE__ */ u.createContext({}), _o = /* @__PURE__ */ u.createContext({}), Xn = /* @__PURE__ */ u.createContext({}), re = /* @__PURE__ */ Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  HOME: "Home",
  END: "End",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown"
}), B = /* @__PURE__ */ Object.freeze({
  RESET: 0,
  SET: 1,
  UNSET: 2,
  INCREASE: 3,
  DECREASE: 4,
  FIRST: 5,
  LAST: 6,
  SET_INDEX: 7
}), tn = /* @__PURE__ */ Object.freeze({
  CLICK: "click",
  CANCEL: "cancel",
  BLUR: "blur",
  SCROLL: "scroll"
}), Nt = /* @__PURE__ */ Object.freeze({
  FIRST: "first",
  LAST: "last"
}), wo = /* @__PURE__ */ Object.freeze({
  entering: "opening",
  entered: "open",
  exiting: "closing",
  exited: "closed"
}), Ss = "absolute", ci = "presentation", tr = "menuitem", Fr = {
  "aria-hidden": !0,
  role: tr
}, So = ({
  className: e,
  containerRef: t,
  containerProps: n,
  children: s,
  isOpen: r,
  theming: i,
  transition: a,
  onClose: o
}) => {
  const l = en(a, "item"), f = ({
    key: g
  }) => {
    switch (g) {
      case re.ESC:
        ye(o, {
          key: g,
          reason: tn.CANCEL
        });
        break;
    }
  }, c = (g) => {
    r && !g.currentTarget.contains(g.relatedTarget) && ye(o, {
      reason: tn.BLUR
    });
  };
  return /* @__PURE__ */ Z.jsx("div", {
    ...gn({
      onKeyDown: f,
      onBlur: c
    }, n),
    className: St({
      block: go,
      modifiers: u.useMemo(() => ({
        theme: i,
        itemTransition: l
      }), [i, l]),
      className: e
    }),
    style: {
      position: "absolute",
      ...n == null ? void 0 : n.style
    },
    ref: t,
    children: s
  });
}, bo = () => {
  let e, t = 0;
  return {
    toggle: (n) => {
      n ? t++ : t--, t = Math.max(t, 0);
    },
    on: (n, s, r) => {
      t ? e || (e = setTimeout(() => {
        e = 0, s();
      }, n)) : r == null || r();
    },
    off: () => {
      e && (clearTimeout(e), e = 0);
    }
  };
}, Mo = (e, t) => {
  const [n, s] = u.useState(), i = u.useRef({
    items: [],
    hoverIndex: -1,
    sorted: !1
  }).current, a = u.useCallback((l, f) => {
    const {
      items: c
    } = i;
    if (!l)
      i.items = [];
    else if (f)
      c.push(l);
    else {
      const g = c.indexOf(l);
      g > -1 && (c.splice(g, 1), l.contains(document.activeElement) && (t.current.focus(), s()));
    }
    i.hoverIndex = -1, i.sorted = !1;
  }, [i, t]), o = u.useCallback((l, f, c) => {
    const {
      items: g,
      hoverIndex: k
    } = i, p = () => {
      if (i.sorted)
        return;
      const w = e.current.querySelectorAll(".szh-menu__item");
      g.sort((D, S) => Ar(w, D) - Ar(w, S)), i.sorted = !0;
    };
    let d = -1, y;
    switch (l) {
      case B.RESET:
        break;
      case B.SET:
        y = f;
        break;
      case B.UNSET:
        y = (w) => w === f ? void 0 : w;
        break;
      case B.FIRST:
        p(), d = 0, y = g[d];
        break;
      case B.LAST:
        p(), d = g.length - 1, y = g[d];
        break;
      case B.SET_INDEX:
        p(), d = c, y = g[d];
        break;
      case B.INCREASE:
        p(), d = k, d < 0 && (d = g.indexOf(f)), d++, d >= g.length && (d = 0), y = g[d];
        break;
      case B.DECREASE:
        p(), d = k, d < 0 && (d = g.indexOf(f)), d--, d < 0 && (d = g.length - 1), y = g[d];
        break;
    }
    y || (d = -1), s(y), i.hoverIndex = d;
  }, [e, i]);
  return {
    hoverItem: n,
    dispatch: o,
    updateItems: a
  };
}, ko = (e, t, n, s) => {
  const r = t.current.getBoundingClientRect(), i = e.current.getBoundingClientRect(), a = n === window ? {
    left: 0,
    top: 0,
    right: document.documentElement.clientWidth,
    bottom: window.innerHeight
  } : n.getBoundingClientRect(), o = mo(s), l = (d) => d + i.left - a.left - o.left, f = (d) => d + i.left + r.width - a.right + o.right, c = (d) => d + i.top - a.top - o.top, g = (d) => d + i.top + r.height - a.bottom + o.bottom;
  return {
    menuRect: r,
    containerRect: i,
    getLeftOverflow: l,
    getRightOverflow: f,
    getTopOverflow: c,
    getBottomOverflow: g,
    confineHorizontally: (d) => {
      let y = l(d);
      if (y < 0)
        d -= y;
      else {
        const w = f(d);
        w > 0 && (d -= w, y = l(d), y < 0 && (d -= y));
      }
      return d;
    },
    confineVertically: (d) => {
      let y = c(d);
      if (y < 0)
        d -= y;
      else {
        const w = g(d);
        w > 0 && (d -= w, y = c(d), y < 0 && (d -= y));
      }
      return d;
    }
  };
}, Do = ({
  arrowRef: e,
  menuY: t,
  anchorRect: n,
  containerRect: s,
  menuRect: r
}) => {
  let i = n.top - s.top - t + n.height / 2;
  const a = e.current.offsetHeight * 1.25;
  return i = Math.max(a, i), i = Math.min(i, r.height - a), i;
}, Oo = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeLeftorRightY: s,
  placeLeftX: r,
  placeRightX: i,
  getLeftOverflow: a,
  getRightOverflow: o,
  confineHorizontally: l,
  confineVertically: f,
  arrowRef: c,
  arrow: g,
  direction: k,
  position: p
}) => {
  let d = k, y = s;
  p !== "initial" && (y = f(y), p === "anchor" && (y = Math.min(y, e.bottom - t.top), y = Math.max(y, e.top - t.top - n.height)));
  let w, D, S;
  return d === "left" ? (w = r, p !== "initial" && (D = a(w), D < 0 && (S = o(i), (S <= 0 || -D > S) && (w = i, d = "right")))) : (w = i, p !== "initial" && (S = o(w), S > 0 && (D = a(r), (D >= 0 || -D < S) && (w = r, d = "left")))), p === "auto" && (w = l(w)), {
    arrowY: g ? Do({
      menuY: y,
      arrowRef: c,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: w,
    y,
    computedDirection: d
  };
}, Co = ({
  arrowRef: e,
  menuX: t,
  anchorRect: n,
  containerRect: s,
  menuRect: r
}) => {
  let i = n.left - s.left - t + n.width / 2;
  const a = e.current.offsetWidth * 1.25;
  return i = Math.max(a, i), i = Math.min(i, r.width - a), i;
}, To = ({
  anchorRect: e,
  containerRect: t,
  menuRect: n,
  placeToporBottomX: s,
  placeTopY: r,
  placeBottomY: i,
  getTopOverflow: a,
  getBottomOverflow: o,
  confineHorizontally: l,
  confineVertically: f,
  arrowRef: c,
  arrow: g,
  direction: k,
  position: p
}) => {
  let d = k === "top" ? "top" : "bottom", y = s;
  p !== "initial" && (y = l(y), p === "anchor" && (y = Math.min(y, e.right - t.left), y = Math.max(y, e.left - t.left - n.width)));
  let w, D, S;
  return d === "top" ? (w = r, p !== "initial" && (D = a(w), D < 0 && (S = o(i), (S <= 0 || -D > S) && (w = i, d = "bottom")))) : (w = i, p !== "initial" && (S = o(w), S > 0 && (D = a(r), (D >= 0 || -D < S) && (w = r, d = "top")))), p === "auto" && (w = f(w)), {
    arrowX: g ? Co({
      menuX: y,
      arrowRef: c,
      anchorRect: e,
      containerRect: t,
      menuRect: n
    }) : void 0,
    x: y,
    y: w,
    computedDirection: d
  };
}, Po = ({
  arrow: e,
  align: t,
  direction: n,
  gap: s,
  shift: r,
  position: i,
  anchorRect: a,
  arrowRef: o,
  positionHelpers: l
}) => {
  const {
    menuRect: f,
    containerRect: c
  } = l, g = n === "left" || n === "right";
  let k = g ? s : r, p = g ? r : s;
  if (e) {
    const A = o.current;
    g ? k += A.offsetWidth : p += A.offsetHeight;
  }
  const d = a.left - c.left - f.width - k, y = a.right - c.left + k, w = a.top - c.top - f.height - p, D = a.bottom - c.top + p;
  let S, C;
  t === "end" ? (S = a.right - c.left - f.width, C = a.bottom - c.top - f.height) : t === "center" ? (S = a.left - c.left - (f.width - a.width) / 2, C = a.top - c.top - (f.height - a.height) / 2) : (S = a.left - c.left, C = a.top - c.top), S += k, C += p;
  const x = {
    ...l,
    anchorRect: a,
    placeLeftX: d,
    placeRightX: y,
    placeLeftorRightY: C,
    placeTopY: w,
    placeBottomY: D,
    placeToporBottomX: S,
    arrowRef: o,
    arrow: e,
    direction: n,
    position: i
  };
  switch (n) {
    case "left":
    case "right":
      return Oo(x);
    case "top":
    case "bottom":
    default:
      return To(x);
  }
}, xn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? u.useLayoutEffect : u.useEffect;
function Wr(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
const Jn = (e, t) => u.useMemo(() => e ? t ? (n) => {
  Wr(e, n), Wr(t, n);
} : e : t, [e, t]), Hr = -9999, di = ({
  ariaLabel: e,
  menuClassName: t,
  menuStyle: n,
  arrow: s,
  arrowProps: r = {},
  anchorPoint: i,
  anchorRef: a,
  containerRef: o,
  containerProps: l,
  focusProps: f,
  externalRef: c,
  parentScrollingRef: g,
  align: k = "start",
  direction: p = "bottom",
  position: d = "auto",
  overflow: y = "visible",
  setDownOverflow: w,
  repositionFlag: D,
  captureFocus: S = !0,
  state: C,
  endTransition: x,
  isDisabled: A,
  menuItemFocus: K,
  gap: I = 0,
  shift: le = 0,
  children: ze,
  onClose: de,
  ...V
}) => {
  const [te, at] = u.useState({
    x: Hr,
    y: Hr
  }), [zt, Ne] = u.useState({}), [q, ot] = u.useState(), [he, wn] = u.useState(p), [De] = u.useState(bo), [jt, Vt] = u.useReducer((Y) => Y + 1, 1), {
    transition: Sn,
    boundingBoxRef: Gt,
    boundingBoxPadding: bn,
    rootMenuRef: Mn,
    rootAnchorRef: lt,
    scrollNodesRef: hs,
    reposition: kn,
    viewScroll: $t,
    submenuCloseDelay: fs
  } = u.useContext(Xn), {
    submenuCtx: Dn,
    reposSubmenu: X = D
  } = u.useContext(As), fe = u.useRef(null), On = u.useRef(), br = u.useRef(), Mr = u.useRef(!1), Cn = u.useRef({
    width: 0,
    height: 0
  }), kr = u.useRef(() => {
  }), {
    hoverItem: ms,
    dispatch: _e,
    updateItems: Tn
  } = Mo(fe, On), we = Xs(C), Dr = en(Sn, "open"), Or = en(Sn, "close"), Oe = hs.current, Sa = (Y) => {
    switch (Y.key) {
      case re.HOME:
        _e(B.FIRST);
        break;
      case re.END:
        _e(B.LAST);
        break;
      case re.UP:
        _e(B.DECREASE, ms);
        break;
      case re.DOWN:
        _e(B.INCREASE, ms);
        break;
      case re.SPACE:
        Y.target && Y.target.className.indexOf(_t) !== -1 && Y.preventDefault();
        return;
      default:
        return;
    }
    Y.preventDefault(), Y.stopPropagation();
  }, ba = () => {
    C === "closing" && ot(), ye(x);
  }, Ma = (Y) => {
    Y.stopPropagation(), De.on(fs, () => {
      _e(B.RESET), On.current.focus();
    });
  }, ka = (Y) => {
    Y.target === Y.currentTarget && De.off();
  }, ut = u.useCallback((Y) => {
    var ue;
    const xe = a ? (ue = a.current) == null ? void 0 : ue.getBoundingClientRect() : i ? {
      left: i.x,
      right: i.x,
      top: i.y,
      bottom: i.y,
      width: 0,
      height: 0
    } : null;
    if (!xe)
      return;
    Oe.menu || (Oe.menu = (Gt ? Gt.current : ws(Mn.current)) || window);
    const Se = ko(o, fe, Oe.menu, bn);
    let {
      arrowX: ne,
      arrowY: Mt,
      x: kt,
      y: je,
      computedDirection: vs
    } = Po({
      arrow: s,
      align: k,
      direction: p,
      gap: I,
      shift: le,
      position: d,
      anchorRect: xe,
      arrowRef: br,
      positionHelpers: Se
    });
    const {
      menuRect: Yr
    } = Se;
    let Dt = Yr.height;
    if (!Y && y !== "visible") {
      const {
        getTopOverflow: Ya,
        getBottomOverflow: Ra
      } = Se;
      let Ot, ps;
      const Rr = Cn.current.height, Pn = Ra(je);
      if (Pn > 0 || Ct(Pn, 0) && Ct(Dt, Rr))
        Ot = Dt - Pn, ps = Pn;
      else {
        const Bt = Ya(je);
        (Bt < 0 || Ct(Bt, 0) && Ct(Dt, Rr)) && (Ot = Dt + Bt, ps = 0 - Bt, Ot >= 0 && (je -= Bt));
      }
      Ot >= 0 ? (Dt = Ot, ot({
        height: Ot,
        overflowAmt: ps
      })) : ot();
    }
    s && Ne({
      x: ne,
      y: Mt
    }), at({
      x: kt,
      y: je
    }), wn(vs), Cn.current = {
      width: Yr.width,
      height: Dt
    };
  }, [s, k, bn, p, I, le, d, y, i, a, o, Gt, Mn, Oe]);
  xn(() => {
    we && (ut(), Mr.current && Vt()), Mr.current = we, kr.current = ut;
  }, [we, ut, X]), xn(() => {
    q && !w && (fe.current.scrollTop = 0);
  }, [q, w]), xn(() => Tn, [Tn]), u.useEffect(() => {
    let {
      menu: Y
    } = Oe;
    if (!we || !Y)
      return;
    if (Y = Y.addEventListener ? Y : window, !Oe.anchors) {
      Oe.anchors = [];
      let ne = ws(lt && lt.current);
      for (; ne && ne !== Y; )
        Oe.anchors.push(ne), ne = ws(ne);
    }
    let ue = $t;
    if (Oe.anchors.length && ue === "initial" && (ue = "auto"), ue === "initial")
      return;
    const xe = () => {
      ue === "auto" ? Ls(() => ut(!0)) : ye(de, {
        reason: tn.SCROLL
      });
    }, Se = Oe.anchors.concat($t !== "initial" ? Y : []);
    return Se.forEach((ne) => ne.addEventListener("scroll", xe)), () => Se.forEach((ne) => ne.removeEventListener("scroll", xe));
  }, [lt, Oe, we, de, $t, ut]);
  const Cr = !!q && q.overflowAmt > 0;
  u.useEffect(() => {
    if (Cr || !we || !g)
      return;
    const Y = () => Ls(ut), ue = g.current;
    return ue.addEventListener("scroll", Y), () => ue.removeEventListener("scroll", Y);
  }, [we, Cr, g, ut]), u.useEffect(() => {
    if (typeof ResizeObserver != "function" || kn === "initial")
      return;
    const Y = new ResizeObserver(([xe]) => {
      const {
        borderBoxSize: Se,
        target: ne
      } = xe;
      let Mt, kt;
      if (Se) {
        const {
          inlineSize: je,
          blockSize: vs
        } = Se[0] || Se;
        Mt = je, kt = vs;
      } else {
        const je = ne.getBoundingClientRect();
        Mt = je.width, kt = je.height;
      }
      Mt === 0 || kt === 0 || Ct(Mt, Cn.current.width, 1) && Ct(kt, Cn.current.height, 1) || Jt.flushSync(() => {
        kr.current(), Vt();
      });
    }), ue = fe.current;
    return Y.observe(ue, {
      box: "border-box"
    }), () => Y.unobserve(ue);
  }, [kn]), u.useEffect(() => {
    if (!we) {
      _e(B.RESET), Or || ot();
      return;
    }
    const {
      position: Y,
      alwaysUpdate: ue
    } = K || {}, xe = () => {
      Y === Nt.FIRST ? _e(B.FIRST) : Y === Nt.LAST ? _e(B.LAST) : Y >= -1 && _e(B.SET_INDEX, void 0, Y);
    };
    if (ue)
      xe();
    else if (S) {
      const Se = setTimeout(() => {
        const ne = fe.current;
        ne && !ne.contains(document.activeElement) && (On.current.focus(), xe());
      }, Dr ? 170 : 100);
      return () => clearTimeout(Se);
    }
  }, [we, Dr, Or, S, K, _e]);
  const Da = u.useMemo(() => ({
    isParentOpen: we,
    submenuCtx: De,
    dispatch: _e,
    updateItems: Tn
  }), [we, De, _e, Tn]);
  let gs, ys;
  q && (w ? ys = q.overflowAmt : gs = q.height);
  const Oa = u.useMemo(() => ({
    reposSubmenu: jt,
    submenuCtx: De,
    overflow: y,
    overflowAmt: ys,
    parentMenuRef: fe,
    parentDir: he
  }), [jt, De, y, ys, he]), Ca = gs >= 0 ? {
    maxHeight: gs,
    overflow: y
  } : void 0, Tr = u.useMemo(() => ({
    state: C,
    dir: he
  }), [C, he]), Ta = u.useMemo(() => ({
    dir: he
  }), [he]), Pa = St({
    block: _t,
    element: yo,
    modifiers: Ta,
    className: r.className
  }), Pr = /* @__PURE__ */ Z.jsxs("ul", {
    role: "menu",
    "aria-label": e,
    ...Js(A),
    ...gn({
      onPointerEnter: Dn == null ? void 0 : Dn.off,
      onPointerMove: Ma,
      onPointerLeave: ka,
      onKeyDown: Sa,
      onAnimationEnd: ba
    }, V),
    ref: Jn(c, fe),
    className: St({
      block: _t,
      modifiers: Tr,
      className: t
    }),
    style: {
      ...n,
      ...Ca,
      margin: 0,
      display: C === "closed" ? "none" : void 0,
      position: Ss,
      left: te.x,
      top: te.y
    },
    children: [/* @__PURE__ */ Z.jsx("li", {
      tabIndex: -1,
      style: {
        position: Ss,
        left: 0,
        top: 0,
        display: "block",
        outline: "none"
      },
      ref: On,
      ...Fr,
      ...f
    }), s && /* @__PURE__ */ Z.jsx("li", {
      ...Fr,
      ...r,
      className: Pa,
      style: {
        display: "block",
        position: Ss,
        left: zt.x,
        top: zt.y,
        ...r.style
      },
      ref: br
    }), /* @__PURE__ */ Z.jsx(As.Provider, {
      value: Oa,
      children: /* @__PURE__ */ Z.jsx(er.Provider, {
        value: Da,
        children: /* @__PURE__ */ Z.jsx(li.Provider, {
          value: ms,
          children: ye(ze, Tr)
        })
      })
    })]
  });
  return l ? /* @__PURE__ */ Z.jsx(So, {
    ...l,
    isOpen: we,
    children: Pr
  }) : Pr;
}, Yo = /* @__PURE__ */ u.forwardRef(function({
  "aria-label": t,
  className: n,
  containerProps: s,
  initialMounted: r,
  unmountOnClose: i,
  transition: a,
  transitionTimeout: o,
  boundingBoxRef: l,
  boundingBoxPadding: f,
  reposition: c = "auto",
  submenuOpenDelay: g = 300,
  submenuCloseDelay: k = 150,
  viewScroll: p = "initial",
  portal: d,
  theming: y,
  onItemClick: w,
  ...D
}, S) {
  const C = u.useRef(null), x = u.useRef({}), {
    anchorRef: A,
    state: K,
    onClose: I
  } = D, le = u.useMemo(() => ({
    initialMounted: r,
    unmountOnClose: i,
    transition: a,
    transitionTimeout: o,
    boundingBoxRef: l,
    boundingBoxPadding: f,
    rootMenuRef: C,
    rootAnchorRef: A,
    scrollNodesRef: x,
    reposition: c,
    viewScroll: p,
    submenuOpenDelay: g,
    submenuCloseDelay: k
  }), [r, i, a, o, A, l, f, c, p, g, k]), ze = u.useMemo(() => ({
    handleClick(V, te) {
      V.stopPropagation || ye(w, V);
      let at = V.keepOpen;
      at === void 0 && (at = te && V.key === re.SPACE), at || ye(I, {
        value: V.value,
        key: V.key,
        reason: tn.CLICK
      });
    },
    handleClose(V) {
      ye(I, {
        key: V,
        reason: tn.CLICK
      });
    }
  }), [w, I]);
  if (!K)
    return null;
  const de = /* @__PURE__ */ Z.jsx(Xn.Provider, {
    value: le,
    children: /* @__PURE__ */ Z.jsx(ui.Provider, {
      value: ze,
      children: /* @__PURE__ */ Z.jsx(di, {
        ...D,
        ariaLabel: t || "Menu",
        externalRef: S,
        containerRef: C,
        containerProps: {
          className: n,
          containerRef: C,
          containerProps: s,
          theming: y,
          transition: a,
          onClose: I
        }
      })
    })
  });
  return d === !0 && typeof document < "u" ? /* @__PURE__ */ Jt.createPortal(de, document.body) : d ? d.target ? /* @__PURE__ */ Jt.createPortal(de, d.target) : d.stablePosition ? null : de : de;
}), Fs = 0, Ws = 1, Wn = 2, Hn = 3, Un = 4, Ro = 5, hi = 6, No = ["preEnter", "entering", "entered", "preExit", "exiting", "exited", "unmounted"], fi = (e) => ({
  _s: e,
  status: No[e],
  isEnter: e < Hn,
  isMounted: e !== hi,
  isResolved: e === Wn || e > Un
}), Hs = (e) => e ? hi : Ro, xo = (e, t) => {
  switch (e) {
    case Ws:
    case Fs:
      return Wn;
    case Un:
    case Hn:
      return Hs(t);
  }
}, Eo = (e) => typeof e == "object" ? [e.enter, e.exit] : [e, e], Io = (e, t) => setTimeout(() => {
  isNaN(document.body.offsetTop) || e(t + 1);
}, 0), Ur = (e, t, n, s, r) => {
  clearTimeout(s.current);
  const i = fi(e);
  t(i), n.current = i, r && r({
    current: i
  });
}, Lo = ({
  enter: e = !0,
  exit: t = !0,
  preEnter: n,
  preExit: s,
  timeout: r,
  initialEntered: i,
  mountOnEnter: a,
  unmountOnExit: o,
  onStateChange: l
} = {}) => {
  const [f, c] = u.useState(() => fi(i ? Wn : Hs(a))), g = u.useRef(f), k = u.useRef(), [p, d] = Eo(r), y = u.useCallback(() => {
    const D = xo(g.current._s, o);
    D && Ur(D, c, g, k, l);
  }, [l, o]), w = u.useCallback((D) => {
    const S = (x) => {
      switch (Ur(x, c, g, k, l), x) {
        case Ws:
          p >= 0 && (k.current = setTimeout(y, p));
          break;
        case Un:
          d >= 0 && (k.current = setTimeout(y, d));
          break;
        case Fs:
        case Hn:
          k.current = Io(S, x);
          break;
      }
    }, C = g.current.isEnter;
    typeof D != "boolean" && (D = !C), D ? !C && S(e ? n ? Fs : Ws : Wn) : C && S(t ? s ? Hn : Un : Hs(o));
  }, [y, l, e, t, n, s, p, d, o]);
  return u.useEffect(() => () => clearTimeout(k.current), []), [f, w, y];
}, Ao = ({
  initialOpen: e,
  initialMounted: t,
  unmountOnClose: n,
  transition: s,
  transitionTimeout: r = 500
} = {}) => {
  const [{
    status: i
  }, a, o] = Lo({
    initialEntered: e,
    mountOnEnter: !t,
    unmountOnExit: n,
    timeout: r,
    enter: en(s, "open"),
    exit: en(s, "close")
  });
  return [{
    state: wo[i],
    endTransition: o
  }, a];
}, mi = (e) => {
  const [t, n] = Ao(e), [s, r] = u.useState(), i = (a, o) => {
    r({
      position: a,
      alwaysUpdate: o
    }), n(!0);
  };
  return [{
    menuItemFocus: s,
    ...t
  }, n, i];
}, Fo = (e, t) => {
  const [n] = u.useState({});
  return {
    onMouseDown: () => {
      n.v = e && e !== "closed";
    },
    onClick: (s) => n.v ? n.v = !1 : t(!0, s)
  };
}, gi = (e, t) => {
  const n = u.useRef(t);
  u.useEffect(() => {
    n.current !== t && ye(e, {
      open: t
    }), n.current = t;
  }, [e, t]);
}, Wo = /* @__PURE__ */ u.forwardRef(function({
  "aria-label": t,
  captureFocus: n,
  initialOpen: s,
  menuButton: r,
  instanceRef: i,
  onMenuChange: a,
  ...o
}, l) {
  const [f, c, g] = mi(o), {
    state: k
  } = f, p = Xs(k), d = u.useRef(null), y = Fo(k, (A, K) => g(K.detail ? void 0 : Nt.FIRST)), w = u.useCallback((A) => {
    c(!1), A.key && d.current.focus();
  }, [c]), D = (A) => {
    switch (A.key) {
      case re.UP:
        g(Nt.LAST);
        break;
      case re.DOWN:
        g(Nt.FIRST);
        break;
      default:
        return;
    }
    A.preventDefault();
  }, S = ye(r, {
    open: p
  });
  if (!S || !S.type)
    throw new Error("Menu requires a menuButton prop.");
  const C = {
    ref: Jn(S.ref, d),
    ...gn({
      onKeyDown: D,
      ...y
    }, S.props)
  };
  fo(S.type) === "MenuButton" && (C.isOpen = p);
  const x = /* @__PURE__ */ u.cloneElement(S, C);
  return gi(a, p), u.useImperativeHandle(i, () => ({
    openMenu: g,
    closeMenu: () => c(!1)
  })), /* @__PURE__ */ Z.jsxs(u.Fragment, {
    children: [x, /* @__PURE__ */ Z.jsx(Yo, {
      ...o,
      ...f,
      "aria-label": t || (typeof S.props.children == "string" ? S.props.children : "Menu"),
      anchorRef: d,
      ref: l,
      onClose: w
    })]
  });
}), yi = (e, t) => {
  const n = /* @__PURE__ */ u.memo(t), s = /* @__PURE__ */ u.forwardRef((r, i) => {
    const a = u.useRef(null);
    return /* @__PURE__ */ Z.jsx(n, {
      ...r,
      itemRef: a,
      externalRef: i,
      isHovering: u.useContext(li) === a.current
    });
  });
  return s.displayName = `WithHovering(${e})`, s;
}, vi = (e, t, n) => {
  xn(() => {
    if (e)
      return;
    const s = t.current;
    return n(s, !0), () => {
      n(s);
    };
  }, [e, t, n]);
}, Ho = /* @__PURE__ */ yi("SubMenu", function({
  "aria-label": t,
  className: n,
  disabled: s,
  direction: r,
  label: i,
  openTrigger: a,
  onMenuChange: o,
  isHovering: l,
  instanceRef: f,
  itemRef: c,
  captureFocus: g,
  repositionFlag: k,
  itemProps: p = {},
  ...d
}) {
  const y = u.useContext(Xn), {
    rootMenuRef: w,
    submenuOpenDelay: D,
    submenuCloseDelay: S
  } = y, {
    parentMenuRef: C,
    parentDir: x,
    overflow: A
  } = u.useContext(As), {
    isParentOpen: K,
    submenuCtx: I,
    dispatch: le,
    updateItems: ze
  } = u.useContext(er), de = A !== "visible", [V, te, at] = mi(y), {
    state: zt
  } = V, Ne = !!s, q = Xs(zt), ot = u.useRef(null), [he] = u.useState({
    v: 0
  }), wn = () => {
    I.off(), he.v && (clearTimeout(he.v), he.v = 0);
  }, De = (...X) => {
    wn(), jt(), !Ne && at(...X);
  }, jt = () => !l && !Ne && le(B.SET, c.current), Vt = (X) => {
    jt(), a || (he.v = setTimeout(() => Ls(De), Math.max(X, 0)));
  }, Sn = (X) => {
    Ne || (X.stopPropagation(), !(he.v || q) && I.on(S, () => Vt(D - S), () => Vt(D)));
  }, Gt = () => {
    wn(), q || le(B.UNSET, c.current);
  }, bn = (X) => {
    if (l)
      switch (X.key) {
        case re.ENTER:
          X.preventDefault();
        case re.SPACE:
        case re.RIGHT:
          a !== "none" && De(Nt.FIRST);
      }
  }, Mn = (X) => {
    let fe = !1;
    switch (X.key) {
      case re.LEFT:
        q && (c.current.focus(), te(!1), fe = !0);
        break;
      case re.RIGHT:
        q || (fe = !0);
        break;
    }
    fe && (X.preventDefault(), X.stopPropagation());
  };
  vi(Ne, c, ze), gi(o, q), u.useEffect(() => I.toggle(q), [I, q]), u.useEffect(() => () => clearTimeout(he.v), [he]), u.useEffect(() => {
    l && K ? c.current.focus() : te(!1);
  }, [l, K, te, c]), u.useImperativeHandle(f, () => ({
    openMenu: (...X) => {
      K && De(...X);
    },
    closeMenu: () => {
      q && (c.current.focus(), te(!1));
    }
  }));
  const lt = u.useMemo(() => ({
    open: q,
    hover: l,
    disabled: Ne,
    submenu: !0
  }), [q, l, Ne]), {
    ref: hs,
    className: kn,
    ...$t
  } = p, fs = gn({
    onPointerEnter: I.off,
    onPointerMove: Sn,
    onPointerLeave: Gt,
    onKeyDown: bn,
    onClick: () => a !== "none" && De()
  }, $t), Dn = () => {
    const X = /* @__PURE__ */ Z.jsx(di, {
      ...d,
      ...V,
      ariaLabel: t || (typeof i == "string" ? i : "Submenu"),
      anchorRef: c,
      containerRef: de ? w : ot,
      direction: r || (x === "right" || x === "left" ? x : "right"),
      parentScrollingRef: de && C,
      isDisabled: Ne
    }), fe = w.current;
    return de && fe ? /* @__PURE__ */ Jt.createPortal(X, fe) : X;
  };
  return /* @__PURE__ */ Z.jsxs("li", {
    className: St({
      block: _t,
      element: po,
      className: n
    }),
    style: {
      position: "relative"
    },
    role: ci,
    ref: ot,
    onKeyDown: Mn,
    children: [/* @__PURE__ */ Z.jsx("div", {
      role: tr,
      "aria-haspopup": !0,
      "aria-expanded": q,
      ...Js(Ne, l),
      ...fs,
      ref: Jn(hs, c),
      className: St({
        block: _t,
        element: oi,
        modifiers: lt,
        className: kn
      }),
      children: u.useMemo(() => ye(i, lt), [i, lt])
    }), zt && Dn()]
  });
}), Uo = (e, t, n, s) => {
  const {
    submenuCloseDelay: r
  } = u.useContext(Xn), {
    isParentOpen: i,
    submenuCtx: a,
    dispatch: o,
    updateItems: l
  } = u.useContext(er), f = () => {
    !n && !s && o(B.SET, e.current);
  }, c = () => {
    !s && o(B.UNSET, e.current);
  }, g = (d) => {
    n && !d.currentTarget.contains(d.relatedTarget) && c();
  }, k = (d) => {
    s || (d.stopPropagation(), a.on(r, f, f));
  }, p = (d, y) => {
    a.off(), !y && c();
  };
  return vi(s, e, l), u.useEffect(() => {
    n && i && t.current && t.current.focus();
  }, [t, n, i]), {
    setHover: f,
    onBlur: g,
    onPointerMove: k,
    onPointerLeave: p
  };
}, Yn = /* @__PURE__ */ yi("MenuItem", function({
  className: t,
  value: n,
  href: s,
  type: r,
  checked: i,
  disabled: a,
  children: o,
  onClick: l,
  isHovering: f,
  itemRef: c,
  externalRef: g,
  ...k
}) {
  const p = !!a, {
    setHover: d,
    ...y
  } = Uo(c, c, f, p), w = u.useContext(ui), D = u.useContext(_o), S = r === "radio", C = r === "checkbox", x = !!s && !p && !S && !C, A = S ? D.value === n : C ? !!i : !1, K = (V) => {
    if (p) {
      V.stopPropagation(), V.preventDefault();
      return;
    }
    const te = {
      value: n,
      syntheticEvent: V
    };
    V.key !== void 0 && (te.key = V.key), C && (te.checked = !A), S && (te.name = D.name), ye(l, te), S && ye(D.onRadioChange, te), w.handleClick(te, C || S);
  }, I = (V) => {
    if (f)
      switch (V.key) {
        case re.ENTER:
          V.preventDefault();
        case re.SPACE:
          x ? c.current.click() : K(V);
      }
  }, le = u.useMemo(() => ({
    type: r,
    disabled: p,
    hover: f,
    checked: A,
    anchor: x
  }), [r, p, f, A, x]), ze = gn({
    ...y,
    onPointerDown: d,
    onKeyDown: I,
    onClick: K
  }, k), de = {
    role: S ? "menuitemradio" : C ? "menuitemcheckbox" : tr,
    "aria-checked": S || C ? A : void 0,
    ...Js(p, f),
    ...ze,
    ref: Jn(g, c),
    className: St({
      block: _t,
      element: oi,
      modifiers: le,
      className: t
    }),
    children: u.useMemo(() => ye(o, le), [o, le])
  };
  return x ? /* @__PURE__ */ Z.jsx("li", {
    role: ci,
    children: /* @__PURE__ */ Z.jsx("a", {
      href: s,
      ...de
    })
  }) : /* @__PURE__ */ Z.jsx("li", {
    ...de
  });
}), zo = /* @__PURE__ */ u.memo(/* @__PURE__ */ u.forwardRef(function({
  className: t,
  ...n
}, s) {
  return /* @__PURE__ */ Z.jsx("li", {
    role: "separator",
    ...n,
    ref: s,
    className: St({
      block: _t,
      element: vo,
      className: t
    })
  });
}));
const jo = "szh-menu", Vo = "item", Go = (e) => (t) => (n) => {
  let s = `.${e}`;
  return t && (s += `__${t}`), n && (s += `--${n}`), s;
}, pi = (e, t = []) => {
  const n = {};
  return Object.defineProperty(n, "name", {
    value: e(),
    enumerable: !0
  }), t.forEach((s) => {
    const r = s.split("-").reduce((i, a) => `${i}${a[0].toUpperCase()}${a.slice(1)}`);
    Object.defineProperty(n, r, {
      value: e(s),
      enumerable: !0
    });
  }), n;
}, $o = ["dir-left", "dir-right", "dir-top", "dir-bottom"], _i = /* @__PURE__ */ Go(jo);
[...$o];
const zr = /* @__PURE__ */ pi(/* @__PURE__ */ _i(Vo), ["hover", "disabled", "anchor", "checked", "open", "submenu", "focusable", "type-radio", "type-checkbox"]), Bo = Ua(Wo)`
  ${zr.name} {
    ${{
  gap: "0.5rem",
  padding: "0.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem"
}}
    &${zr.typeCheckbox} {
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
`, Zo = ({
  children: e,
  header: t
}) => {
  const n = t.getContext(), {
    table: s
  } = n, {
    column: r
  } = t, i = s.getVisibleLeafColumns().length, a = [];
  return r.getCanSort() && a.push(/* @__PURE__ */ ee(Yn, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ M(ce, { icon: ai.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ ee(Yn, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ M(ce, { icon: ii.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && a.push(/* @__PURE__ */ ee(Yn, { disabled: i === 1, onClick: () => t.column.toggleVisibility(), children: [
    /* @__PURE__ */ M(ce, { icon: ri.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ ee(Bo, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    a.length > 0 && /* @__PURE__ */ ee(Cs, { children: [
      a,
      /* @__PURE__ */ M(zo, {})
    ] }),
    /* @__PURE__ */ M(Ho, { label: /* @__PURE__ */ ee(Cs, { children: [
      /* @__PURE__ */ M(ce, { icon: si.faTableColumns }),
      "Колонки"
    ] }), children: s.getAllLeafColumns().filter((o) => o.getCanHide()).map((o) => /* @__PURE__ */ M(Yn, { type: "checkbox", checked: o.getIsVisible(), disabled: i === 1 && o.getIsVisible(), onClick: (l) => {
      l.keepOpen = !0, o.toggleVisibility();
    }, children: Ks(o.columnDef.header, n) }, o.id)) })
  ] });
}, Qo = (e) => {
  const {
    colSpan: t,
    column: n,
    isPlaceholder: s,
    getContext: r,
    getResizeHandler: i
  } = e;
  return /* @__PURE__ */ ee("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, Fn`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: t, children: [
    /* @__PURE__ */ ee("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, Fn`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ ee("div", { onClick: () => {
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
        s ? null : Ks(n.columnDef.header, r()),
        " ",
        n.getIsSorted() === "asc" && /* @__PURE__ */ M(ce, { icon: ni.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        n.getIsSorted() === "desc" && /* @__PURE__ */ M(ce, { icon: ti.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ M(Zo, { header: e, children: ({
        open: a
      }) => /* @__PURE__ */ M("div", { className: "menu", css: [{
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
      }], children: /* @__PURE__ */ M(ce, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: ei.faCaretDown }) }) })
    ] }),
    n.getCanResize() && /* @__PURE__ */ M("div", { css: [{
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
}, Ko = ({
  ...e
}) => /* @__PURE__ */ M("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((t) => /* @__PURE__ */ M("tr", { children: t.headers.map((n) => /* @__PURE__ */ M(Qo, { ...n }, n.id)) }, t.id)) });
var wi = {}, Si = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-info", s = 512, r = 512, i = ["info-circle"], a = "f05a", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faCircleInfo = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(Si);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Si;
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
})(wi);
var bi = {}, Mi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "circle-xmark", s = 512, r = 512, i = [61532, "times-circle", "xmark-circle"], a = "f057", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faCircleXmark = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(Mi);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Mi;
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
})(bi);
const Qe = Symbol.for("@ts-pattern/matcher"), qo = Symbol.for("@ts-pattern/isVariadic"), zn = "@ts-pattern/anonymous-select-key", Us = (e) => !!(e && typeof e == "object"), En = (e) => e && !!e[Qe], Ae = (e, t, n) => {
  if (En(e)) {
    const s = e[Qe](), { matched: r, selections: i } = s.match(t);
    return r && i && Object.keys(i).forEach((a) => n(a, i[a])), r;
  }
  if (Us(e)) {
    if (!Us(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let s = [], r = [], i = [];
      for (const a of e.keys()) {
        const o = e[a];
        En(o) && o[qo] ? i.push(o) : i.length ? r.push(o) : s.push(o);
      }
      if (i.length) {
        if (i.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < s.length + r.length)
          return !1;
        const a = t.slice(0, s.length), o = r.length === 0 ? [] : t.slice(-r.length), l = t.slice(s.length, r.length === 0 ? 1 / 0 : -r.length);
        return s.every((f, c) => Ae(f, a[c], n)) && r.every((f, c) => Ae(f, o[c], n)) && (i.length === 0 || Ae(i[0], l, n));
      }
      return e.length === t.length && e.every((a, o) => Ae(a, t[o], n));
    }
    return Object.keys(e).every((s) => {
      const r = e[s];
      return (s in t || En(i = r) && i[Qe]().matcherType === "optional") && Ae(r, t[s], n);
      var i;
    });
  }
  return Object.is(t, e);
}, it = (e) => {
  var t, n, s;
  return Us(e) ? En(e) ? (t = (n = (s = e[Qe]()).getSelectionKeys) == null ? void 0 : n.call(s)) != null ? t : [] : Array.isArray(e) ? nn(e, it) : nn(Object.values(e), it) : [];
}, nn = (e, t) => e.reduce((n, s) => n.concat(t(s)), []);
function Ye(e) {
  return Object.assign(e, { optional: () => Xo(e), and: (t) => G(e, t), or: (t) => Jo(e, t), select: (t) => t === void 0 ? jr(e) : jr(t, e) });
}
function Xo(e) {
  return Ye({ [Qe]: () => ({ match: (t) => {
    let n = {};
    const s = (r, i) => {
      n[r] = i;
    };
    return t === void 0 ? (it(e).forEach((r) => s(r, void 0)), { matched: !0, selections: n }) : { matched: Ae(e, t, s), selections: n };
  }, getSelectionKeys: () => it(e), matcherType: "optional" }) });
}
function G(...e) {
  return Ye({ [Qe]: () => ({ match: (t) => {
    let n = {};
    const s = (r, i) => {
      n[r] = i;
    };
    return { matched: e.every((r) => Ae(r, t, s)), selections: n };
  }, getSelectionKeys: () => nn(e, it), matcherType: "and" }) });
}
function Jo(...e) {
  return Ye({ [Qe]: () => ({ match: (t) => {
    let n = {};
    const s = (r, i) => {
      n[r] = i;
    };
    return nn(e, it).forEach((r) => s(r, void 0)), { matched: e.some((r) => Ae(r, t, s)), selections: n };
  }, getSelectionKeys: () => nn(e, it), matcherType: "or" }) });
}
function E(e) {
  return { [Qe]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function jr(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return Ye({ [Qe]: () => ({ match: (s) => {
    let r = { [t ?? zn]: s };
    return { matched: n === void 0 || Ae(n, s, (i, a) => {
      r[i] = a;
    }), selections: r };
  }, getSelectionKeys: () => [t ?? zn].concat(n === void 0 ? [] : it(n)) }) });
}
function Ee(e) {
  return typeof e == "number";
}
function dt(e) {
  return typeof e == "string";
}
function Je(e) {
  return typeof e == "bigint";
}
Ye(E(function(e) {
  return !0;
}));
const ht = (e) => Object.assign(Ye(e), { startsWith: (t) => {
  return ht(G(e, (n = t, E((s) => dt(s) && s.startsWith(n)))));
  var n;
}, endsWith: (t) => {
  return ht(G(e, (n = t, E((s) => dt(s) && s.endsWith(n)))));
  var n;
}, minLength: (t) => ht(G(e, ((n) => E((s) => dt(s) && s.length >= n))(t))), maxLength: (t) => ht(G(e, ((n) => E((s) => dt(s) && s.length <= n))(t))), includes: (t) => {
  return ht(G(e, (n = t, E((s) => dt(s) && s.includes(n)))));
  var n;
}, regex: (t) => {
  return ht(G(e, (n = t, E((s) => dt(s) && !!s.match(n)))));
  var n;
} });
ht(E(dt));
const Ie = (e) => Object.assign(Ye(e), { between: (t, n) => Ie(G(e, ((s, r) => E((i) => Ee(i) && s <= i && r >= i))(t, n))), lt: (t) => Ie(G(e, ((n) => E((s) => Ee(s) && s < n))(t))), gt: (t) => Ie(G(e, ((n) => E((s) => Ee(s) && s > n))(t))), lte: (t) => Ie(G(e, ((n) => E((s) => Ee(s) && s <= n))(t))), gte: (t) => Ie(G(e, ((n) => E((s) => Ee(s) && s >= n))(t))), int: () => Ie(G(e, E((t) => Ee(t) && Number.isInteger(t)))), finite: () => Ie(G(e, E((t) => Ee(t) && Number.isFinite(t)))), positive: () => Ie(G(e, E((t) => Ee(t) && t > 0))), negative: () => Ie(G(e, E((t) => Ee(t) && t < 0))) });
Ie(E(Ee));
const et = (e) => Object.assign(Ye(e), { between: (t, n) => et(G(e, ((s, r) => E((i) => Je(i) && s <= i && r >= i))(t, n))), lt: (t) => et(G(e, ((n) => E((s) => Je(s) && s < n))(t))), gt: (t) => et(G(e, ((n) => E((s) => Je(s) && s > n))(t))), lte: (t) => et(G(e, ((n) => E((s) => Je(s) && s <= n))(t))), gte: (t) => et(G(e, ((n) => E((s) => Je(s) && s >= n))(t))), positive: () => et(G(e, E((t) => Je(t) && t > 0))), negative: () => et(G(e, E((t) => Je(t) && t < 0))) });
et(E(Je));
Ye(E(function(e) {
  return typeof e == "boolean";
}));
Ye(E(function(e) {
  return typeof e == "symbol";
}));
Ye(E(function(e) {
  return e == null;
}));
const zs = { matched: !1, value: void 0 };
function Vr(e) {
  return new jn(e, zs);
}
class jn {
  constructor(t, n) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = n;
  }
  with(...t) {
    if (this.state.matched)
      return this;
    const n = t[t.length - 1], s = [t[0]];
    let r;
    t.length === 3 && typeof t[1] == "function" ? (s.push(t[0]), r = t[1]) : t.length > 2 && s.push(...t.slice(1, t.length - 1));
    let i = !1, a = {};
    const o = (f, c) => {
      i = !0, a[f] = c;
    }, l = !s.some((f) => Ae(f, this.input, o)) || r && !r(this.input) ? zs : { matched: !0, value: n(i ? zn in a ? a[zn] : a : this.input, this.input) };
    return new jn(this.input, l);
  }
  when(t, n) {
    if (this.state.matched)
      return this;
    const s = !!t(this.input);
    return new jn(this.input, s ? { matched: !0, value: n(this.input, this.input) } : zs);
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
const el = ({
  type: e = "info",
  title: t,
  description: n,
  className: s,
  iconColor: r
}) => {
  const i = u.useMemo(() => Vr(e).with("success", () => Ga.faCheckCircle).with("error", () => bi.faTimesCircle).with("info", () => wi.faInfoCircle).exhaustive(), [e]), a = u.useMemo(() => r || Vr(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ M("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: s, children: /* @__PURE__ */ M("div", { children: /* @__PURE__ */ ee("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ M("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ M(ce, { icon: i, css: Fn`
                color: ${a};
              `, size: "6x" }) }),
    /* @__PURE__ */ M("div", { children: t }),
    /* @__PURE__ */ M("div", { children: n })
  ] }) }) });
}, Sh = ({
  table: e
}) => e.error ? /* @__PURE__ */ M(el, { type: "error", title: e.error.message }) : /* @__PURE__ */ M(Fa, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ ee("table", { css: [{
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
  fontSize: "0.75rem",
  lineHeight: "1rem"
}, Fn`
            table-layout: fixed;
          `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((t) => /* @__PURE__ */ M("colgroup", { children: t.headers.map((n) => /* @__PURE__ */ M("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, t.id)),
  e.isLoading === !0 ? null : /* @__PURE__ */ M(Ko, { ...e }),
  /* @__PURE__ */ M("tbody", { children: e.getRowModel().rows.map((t) => /* @__PURE__ */ M(co, { ...t }, t.id)) })
] }) });
var ki = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "arrows-rotate", s = 512, r = 512, i = [128472, "refresh", "sync"], a = "f021", o = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(ki);
var Di = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-right", s = 512, r = 512, i = [187, "angle-double-right"], a = "f101", o = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(Di);
var Oi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-right", s = 320, r = 512, i = [8250], a = "f105", o = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(Oi);
var Ci = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angle-left", s = 320, r = 512, i = [8249], a = "f104", o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(Ci);
var Ti = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", n = "angles-left", s = 512, r = 512, i = [171, "angle-double-left"], a = "f100", o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: n,
    icon: [
      s,
      r,
      i,
      a,
      o
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = n, e.width = s, e.height = r, e.ligatures = i, e.unicode = a, e.svgPathData = o, e.aliases = i;
})(Ti);
const tl = ({
  table: {
    refetch: e,
    recordsTotal: t = 0,
    ...n
  }
}) => {
  const s = n.getState(), {
    pagination: r
  } = s, i = u.useMemo(() => r.pageIndex * r.pageSize + (t > 0 ? 1 : 0), [r, t]), a = u.useMemo(() => Math.min(t, (r.pageIndex + 1) * r.pageSize), [r, t]);
  return /* @__PURE__ */ ee("div", { css: {
    display: "flex",
    width: "100%",
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
    /* @__PURE__ */ ee("div", { css: {
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
      /* @__PURE__ */ M(Pt, { onClick: () => n.setPageIndex(0), size: "small", disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ M(ce, { icon: Ti.faAnglesLeft }) }),
      /* @__PURE__ */ M(Pt, { size: "small", onClick: () => n.previousPage(), disabled: !n.getCanPreviousPage(), children: /* @__PURE__ */ M(ce, { css: {
        width: "18px"
      }, icon: Ci.faAngleLeft }) }),
      /* @__PURE__ */ ee("span", { css: {
        display: "none",
        alignItems: "center",
        gap: "0.5rem",
        whiteSpace: "nowrap",
        "@container (min-width: 220px)": {
          display: "flex"
        }
      }, children: [
        /* @__PURE__ */ M("span", { css: {
          display: "none",
          "@container (min-width: 610px)": {
            display: "block"
          }
        }, children: "Страница" }),
        /* @__PURE__ */ M("input", { type: "number", value: n.getState().pagination.pageIndex + 1, onChange: (o) => {
          const l = o.target.value ? Number(o.target.value) - 1 : 0;
          n.setPageIndex(l);
        }, css: {
          width: "3rem",
          borderWidth: "1px",
          padding: "0.25rem"
        } }),
        "из ",
        n.getPageCount()
      ] }),
      /* @__PURE__ */ M(Pt, { size: "small", onClick: () => n.nextPage(), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ M(ce, { css: {
        width: "18px"
      }, icon: Oi.faAngleRight }) }),
      /* @__PURE__ */ M(Pt, { size: "small", onClick: () => n.setPageIndex(n.getPageCount() - 1), disabled: !n.getCanNextPage(), children: /* @__PURE__ */ M(ce, { icon: Di.faAnglesRight }) }),
      e && /* @__PURE__ */ M(Pt, { size: "small", disabled: n.isFetching, onClick: e, children: /* @__PURE__ */ M(ce, { spin: n.isFetching, icon: ki.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ ee("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ ee("div", { css: {
        display: "flex",
        gap: "0.125rem"
      }, children: [
        /* @__PURE__ */ M("span", { css: {
          display: "none",
          "@container (min-width: 540px)": {
            display: "block"
          }
        }, children: "Отражаются записи" }),
        /* @__PURE__ */ ee("span", { css: {
          display: "none",
          "@container (min-width: 410px)": {
            display: "block"
          }
        }, children: [
          "c ",
          i,
          " по ",
          a,
          ","
        ] }),
        /* @__PURE__ */ ee("span", { css: {
          display: "none",
          paddingLeft: "0.25rem",
          "@container (min-width: 360px)": {
            display: "block"
          }
        }, children: [
          " всего ",
          t
        ] })
      ] }),
      /* @__PURE__ */ M("select", { css: {
        display: "none",
        borderWidth: "1px",
        padding: "0.25rem",
        "@container (min-width: 300px)": {
          display: "block"
        }
      }, value: r.pageSize, onChange: (o) => {
        n.setPageSize(Number(o.target.value));
      }, children: [25, 50, 100].map((o) => /* @__PURE__ */ M("option", { value: o, children: o }, o)) })
    ] })
  ] });
}, bh = qn.memo(tl), nl = ({
  columns: e,
  data: t = [],
  isLoading: n,
  isFetching: s,
  ...r
}) => {
  const i = za({
    getCoreRowModel: ja(),
    columnResizeMode: "onChange",
    ...r,
    columns: e,
    data: t
  });
  return {
    isLoading: n,
    isFetching: s,
    ...i
  };
};
function Pi(e, t) {
  let n;
  typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const {
    url: s,
    params: r,
    ...i
  } = n, a = $a();
  return oo({
    queryKey: r ? [s, r, a.defaults.headers.Authorization || ""] : [s, a.defaults.headers.Authorization || ""],
    queryFn: async ({
      signal: o
    }) => {
      const {
        data: l
      } = await a.get(s, {
        params: r,
        signal: o
      });
      return l;
    },
    ...i
  });
}
const Mh = (e, t, {
  defaultSorting: n = [],
  defaultPageSize: s = 25,
  defaultColumnVisibility: r = {},
  ...i
} = {}) => {
  var S, C;
  const [a, o] = u.useState({
    pageIndex: 0,
    pageSize: s
  }), [l, f] = u.useState(n), [c, g] = u.useState(r), k = u.useMemo(() => {
    const {
      pageIndex: x,
      pageSize: A
    } = a;
    return {
      start: x * A,
      length: A,
      sort: JSON.stringify(l.map((K) => ({
        property: K.id,
        direction: K.desc ? "DESC" : "ASC"
      })))
    };
  }, [a, l]), p = Pi(e, {
    params: k,
    placeholderData: Wa
  }), d = u.useMemo(() => {
    var x, A;
    return isNaN(Number((x = p.data) == null ? void 0 : x.recordsFiltered)) ? 0 : Number((A = p.data) == null ? void 0 : A.recordsFiltered);
  }, [(S = p.data) == null ? void 0 : S.recordsFiltered]), y = u.useMemo(() => d > 0 ? Math.ceil(d / a.pageSize) : 1, [a.pageSize, d]), w = nl({
    ...i,
    columns: t,
    data: (C = p.data) == null ? void 0 : C.data,
    isLoading: p.isLoading,
    isFetching: p.isFetching,
    manualPagination: !0,
    onPaginationChange: o,
    onSortingChange: f,
    onColumnVisibilityChange: g,
    pageCount: y,
    state: {
      ...i == null ? void 0 : i.state,
      pagination: a,
      sorting: l,
      columnVisibility: c
    }
  }), D = u.useCallback(() => {
    p.refetch();
  }, [p]);
  return {
    ...w,
    recordsTotal: d,
    refetch: D,
    error: p.error
  };
}, sl = ({
  info: e,
  actions: t
}) => /* @__PURE__ */ M("div", { css: {
  display: "flex",
  gap: "0.25rem"
}, children: t.map(({
  key: n,
  icon: s,
  onClick: r
}) => /* @__PURE__ */ M(Pt, { onClick: () => r == null ? void 0 : r(e.row.original), css: {
  padding: "4px",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  "--tw-text-opacity": "1",
  color: "rgb(156 163 175 / var(--tw-text-opacity))",
  ":hover": {
    "--tw-text-opacity": "1",
    color: "rgb(75 85 99 / var(--tw-text-opacity))"
  }
}, children: /* @__PURE__ */ M(ce, { icon: s }) }, n)) }), rl = qn.memo(sl), il = (e) => ({
  header: "",
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (t) => /* @__PURE__ */ M(rl, { info: t, actions: e })
}), al = () => (e, t, n) => ({
  header: t,
  accessorKey: e,
  cell: (s) => /* @__PURE__ */ M(Cs, { children: s.getValue() ? "Да" : "Нет" }),
  ...n
});
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Yi;
function m() {
  return Yi.apply(null, arguments);
}
function ol(e) {
  Yi = e;
}
function Te(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function wt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function R(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function nr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (R(e, t))
      return !1;
  return !0;
}
function me(e) {
  return e === void 0;
}
function Ke(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function yn(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ri(e, t) {
  var n = [], s, r = e.length;
  for (s = 0; s < r; ++s)
    n.push(t(e[s], s));
  return n;
}
function nt(e, t) {
  for (var n in t)
    R(t, n) && (e[n] = t[n]);
  return R(t, "toString") && (e.toString = t.toString), R(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function He(e, t, n, s) {
  return ta(e, t, n, s, !0).utc();
}
function ll() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function O(e) {
  return e._pf == null && (e._pf = ll()), e._pf;
}
var js;
Array.prototype.some ? js = Array.prototype.some : js = function(e) {
  var t = Object(this), n = t.length >>> 0, s;
  for (s = 0; s < n; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function sr(e) {
  if (e._isValid == null) {
    var t = O(e), n = js.call(t.parsedDateParts, function(r) {
      return r != null;
    }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
    if (e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = s;
    else
      return s;
  }
  return e._isValid;
}
function es(e) {
  var t = He(NaN);
  return e != null ? nt(O(t), e) : O(t).userInvalidated = !0, t;
}
var Gr = m.momentProperties = [], bs = !1;
function rr(e, t) {
  var n, s, r, i = Gr.length;
  if (me(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), me(t._i) || (e._i = t._i), me(t._f) || (e._f = t._f), me(t._l) || (e._l = t._l), me(t._strict) || (e._strict = t._strict), me(t._tzm) || (e._tzm = t._tzm), me(t._isUTC) || (e._isUTC = t._isUTC), me(t._offset) || (e._offset = t._offset), me(t._pf) || (e._pf = O(t)), me(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      s = Gr[n], r = t[s], me(r) || (e[s] = r);
  return e;
}
function vn(e) {
  rr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), bs === !1 && (bs = !0, m.updateOffset(this), bs = !1);
}
function Pe(e) {
  return e instanceof vn || e != null && e._isAMomentObject != null;
}
function Ni(e) {
  m.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Me(e, t) {
  var n = !0;
  return nt(function() {
    if (m.deprecationHandler != null && m.deprecationHandler(null, e), n) {
      var s = [], r, i, a, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (r = "", typeof arguments[i] == "object") {
          r += `
[` + i + "] ";
          for (a in arguments[0])
            R(arguments[0], a) && (r += a + ": " + arguments[0][a] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[i];
        s.push(r);
      }
      Ni(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var $r = {};
function xi(e, t) {
  m.deprecationHandler != null && m.deprecationHandler(e, t), $r[e] || (Ni(t), $r[e] = !0);
}
m.suppressDeprecationWarnings = !1;
m.deprecationHandler = null;
function Ue(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ul(e) {
  var t, n;
  for (n in e)
    R(e, n) && (t = e[n], Ue(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Vs(e, t) {
  var n = nt({}, e), s;
  for (s in t)
    R(t, s) && (wt(e[s]) && wt(t[s]) ? (n[s] = {}, nt(n[s], e[s]), nt(n[s], t[s])) : t[s] != null ? n[s] = t[s] : delete n[s]);
  for (s in e)
    R(e, s) && !R(t, s) && wt(e[s]) && (n[s] = nt({}, n[s]));
  return n;
}
function ir(e) {
  e != null && this.set(e);
}
var Gs;
Object.keys ? Gs = Object.keys : Gs = function(e) {
  var t, n = [];
  for (t in e)
    R(e, t) && n.push(t);
  return n;
};
var cl = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function dl(e, t, n) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return Ue(s) ? s.call(t, n) : s;
}
function We(e, t, n) {
  var s = "" + Math.abs(e), r = t - s.length, i = e >= 0;
  return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + s;
}
var ar = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Rn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ms = {}, xt = {};
function b(e, t, n, s) {
  var r = s;
  typeof s == "string" && (r = function() {
    return this[s]();
  }), e && (xt[e] = r), t && (xt[t[0]] = function() {
    return We(r.apply(this, arguments), t[1], t[2]);
  }), n && (xt[n] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function hl(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function fl(e) {
  var t = e.match(ar), n, s;
  for (n = 0, s = t.length; n < s; n++)
    xt[t[n]] ? t[n] = xt[t[n]] : t[n] = hl(t[n]);
  return function(r) {
    var i = "", a;
    for (a = 0; a < s; a++)
      i += Ue(t[a]) ? t[a].call(r, e) : t[a];
    return i;
  };
}
function In(e, t) {
  return e.isValid() ? (t = Ei(t, e.localeData()), Ms[t] = Ms[t] || fl(t), Ms[t](e)) : e.localeData().invalidDate();
}
function Ei(e, t) {
  var n = 5;
  function s(r) {
    return t.longDateFormat(r) || r;
  }
  for (Rn.lastIndex = 0; n >= 0 && Rn.test(e); )
    e = e.replace(
      Rn,
      s
    ), Rn.lastIndex = 0, n -= 1;
  return e;
}
var ml = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function gl(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(ar).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var yl = "Invalid date";
function vl() {
  return this._invalidDate;
}
var pl = "%d", _l = /\d{1,2}/;
function wl(e) {
  return this._ordinal.replace("%d", e);
}
var Sl = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function bl(e, t, n, s) {
  var r = this._relativeTime[n];
  return Ue(r) ? r(e, t, n, s) : r.replace(/%d/i, e);
}
function Ml(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Ue(n) ? n(t) : n.replace(/%s/i, t);
}
var qt = {};
function ae(e, t) {
  var n = e.toLowerCase();
  qt[n] = qt[n + "s"] = qt[t] = e;
}
function ke(e) {
  return typeof e == "string" ? qt[e] || qt[e.toLowerCase()] : void 0;
}
function or(e) {
  var t = {}, n, s;
  for (s in e)
    R(e, s) && (n = ke(s), n && (t[n] = e[s]));
  return t;
}
var Ii = {};
function oe(e, t) {
  Ii[e] = t;
}
function kl(e) {
  var t = [], n;
  for (n in e)
    R(e, n) && t.push({ unit: n, priority: Ii[n] });
  return t.sort(function(s, r) {
    return s.priority - r.priority;
  }), t;
}
function ts(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function be(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function T(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = be(t)), n;
}
function Ht(e, t) {
  return function(n) {
    return n != null ? (Li(this, e, n), m.updateOffset(this, t), this) : Vn(this, e);
  };
}
function Vn(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Li(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && ts(e.year()) && e.month() === 1 && e.date() === 29 ? (n = T(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    os(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function Dl(e) {
  return e = ke(e), Ue(this[e]) ? this[e]() : this;
}
function Ol(e, t) {
  if (typeof e == "object") {
    e = or(e);
    var n = kl(e), s, r = n.length;
    for (s = 0; s < r; s++)
      this[n[s].unit](e[n[s].unit]);
  } else if (e = ke(e), Ue(this[e]))
    return this[e](t);
  return this;
}
var Ai = /\d/, pe = /\d\d/, Fi = /\d{3}/, lr = /\d{4}/, ns = /[+-]?\d{6}/, U = /\d\d?/, Wi = /\d\d\d\d?/, Hi = /\d\d\d\d\d\d?/, ss = /\d{1,3}/, ur = /\d{1,4}/, rs = /[+-]?\d{1,6}/, Ut = /\d+/, is = /[+-]?\d+/, Cl = /Z|[+-]\d\d:?\d\d/gi, as = /Z|[+-]\d\d(?::?\d\d)?/gi, Tl = /[+-]?\d+(\.\d{1,3})?/, pn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Gn;
Gn = {};
function v(e, t, n) {
  Gn[e] = Ue(t) ? t : function(s, r) {
    return s && n ? n : t;
  };
}
function Pl(e, t) {
  return R(Gn, e) ? Gn[e](t._strict, t._locale) : new RegExp(Yl(e));
}
function Yl(e) {
  return ve(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, s, r, i) {
        return n || s || r || i;
      }
    )
  );
}
function ve(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var $s = {};
function L(e, t) {
  var n, s = t, r;
  for (typeof e == "string" && (e = [e]), Ke(t) && (s = function(i, a) {
    a[t] = T(i);
  }), r = e.length, n = 0; n < r; n++)
    $s[e[n]] = s;
}
function _n(e, t) {
  L(e, function(n, s, r, i) {
    r._w = r._w || {}, t(n, r._w, r, i);
  });
}
function Rl(e, t, n) {
  t != null && R($s, e) && $s[e](t, n._a, n, e);
}
var ie = 0, $e = 1, Fe = 2, J = 3, Ce = 4, Be = 5, ft = 6, Nl = 7, xl = 8;
function El(e, t) {
  return (e % t + t) % t;
}
var $;
Array.prototype.indexOf ? $ = Array.prototype.indexOf : $ = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function os(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = El(t, 12);
  return e += (t - n) / 12, n === 1 ? ts(e) ? 29 : 28 : 31 - n % 7 % 2;
}
b("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
b("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
b("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
ae("month", "M");
oe("month", 8);
v("M", U);
v("MM", U, pe);
v("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
v("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
L(["M", "MM"], function(e, t) {
  t[$e] = T(e) - 1;
});
L(["MMM", "MMMM"], function(e, t, n, s) {
  var r = n._locale.monthsParse(e, s, n._strict);
  r != null ? t[$e] = r : O(n).invalidMonth = e;
});
var Il = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ui = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), zi = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ll = pn, Al = pn;
function Fl(e, t) {
  return e ? Te(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || zi).test(t) ? "format" : "standalone"][e.month()] : Te(this._months) ? this._months : this._months.standalone;
}
function Wl(e, t) {
  return e ? Te(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[zi.test(t) ? "format" : "standalone"][e.month()] : Te(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Hl(e, t, n) {
  var s, r, i, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      i = He([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (r = $.call(this._shortMonthsParse, a), r !== -1 ? r : null) : (r = $.call(this._longMonthsParse, a), r !== -1 ? r : null) : t === "MMM" ? (r = $.call(this._shortMonthsParse, a), r !== -1 ? r : (r = $.call(this._longMonthsParse, a), r !== -1 ? r : null)) : (r = $.call(this._longMonthsParse, a), r !== -1 ? r : (r = $.call(this._shortMonthsParse, a), r !== -1 ? r : null));
}
function Ul(e, t, n) {
  var s, r, i;
  if (this._monthsParseExact)
    return Hl.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (r = He([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[s] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[s] && (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[s] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[s].test(e))
      return s;
    if (n && t === "MMM" && this._shortMonthsParse[s].test(e))
      return s;
    if (!n && this._monthsParse[s].test(e))
      return s;
  }
}
function ji(e, t) {
  var n;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = T(t);
    else if (t = e.localeData().monthsParse(t), !Ke(t))
      return e;
  }
  return n = Math.min(e.date(), os(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
}
function Vi(e) {
  return e != null ? (ji(this, e), m.updateOffset(this, !0), this) : Vn(this, "Month");
}
function zl() {
  return os(this.year(), this.month());
}
function jl(e) {
  return this._monthsParseExact ? (R(this, "_monthsRegex") || Gi.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (R(this, "_monthsShortRegex") || (this._monthsShortRegex = Ll), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Vl(e) {
  return this._monthsParseExact ? (R(this, "_monthsRegex") || Gi.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (R(this, "_monthsRegex") || (this._monthsRegex = Al), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Gi() {
  function e(a, o) {
    return o.length - a.length;
  }
  var t = [], n = [], s = [], r, i;
  for (r = 0; r < 12; r++)
    i = He([2e3, r]), t.push(this.monthsShort(i, "")), n.push(this.months(i, "")), s.push(this.months(i, "")), s.push(this.monthsShort(i, ""));
  for (t.sort(e), n.sort(e), s.sort(e), r = 0; r < 12; r++)
    t[r] = ve(t[r]), n[r] = ve(n[r]);
  for (r = 0; r < 24; r++)
    s[r] = ve(s[r]);
  this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
b("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? We(e, 4) : "+" + e;
});
b(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
b(0, ["YYYY", 4], 0, "year");
b(0, ["YYYYY", 5], 0, "year");
b(0, ["YYYYYY", 6, !0], 0, "year");
ae("year", "y");
oe("year", 1);
v("Y", is);
v("YY", U, pe);
v("YYYY", ur, lr);
v("YYYYY", rs, ns);
v("YYYYYY", rs, ns);
L(["YYYYY", "YYYYYY"], ie);
L("YYYY", function(e, t) {
  t[ie] = e.length === 2 ? m.parseTwoDigitYear(e) : T(e);
});
L("YY", function(e, t) {
  t[ie] = m.parseTwoDigitYear(e);
});
L("Y", function(e, t) {
  t[ie] = parseInt(e, 10);
});
function Xt(e) {
  return ts(e) ? 366 : 365;
}
m.parseTwoDigitYear = function(e) {
  return T(e) + (T(e) > 68 ? 1900 : 2e3);
};
var $i = Ht("FullYear", !0);
function Gl() {
  return ts(this.year());
}
function $l(e, t, n, s, r, i, a) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, s, r, i, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, r, i, a), o;
}
function sn(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function $n(e, t, n) {
  var s = 7 + t - n, r = (7 + sn(e, 0, s).getUTCDay() - t) % 7;
  return -r + s - 1;
}
function Bi(e, t, n, s, r) {
  var i = (7 + n - s) % 7, a = $n(e, s, r), o = 1 + 7 * (t - 1) + i + a, l, f;
  return o <= 0 ? (l = e - 1, f = Xt(l) + o) : o > Xt(e) ? (l = e + 1, f = o - Xt(e)) : (l = e, f = o), {
    year: l,
    dayOfYear: f
  };
}
function rn(e, t, n) {
  var s = $n(e.year(), t, n), r = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, i, a;
  return r < 1 ? (a = e.year() - 1, i = r + Ze(a, t, n)) : r > Ze(e.year(), t, n) ? (i = r - Ze(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = r), {
    week: i,
    year: a
  };
}
function Ze(e, t, n) {
  var s = $n(e, t, n), r = $n(e + 1, t, n);
  return (Xt(e) - s + r) / 7;
}
b("w", ["ww", 2], "wo", "week");
b("W", ["WW", 2], "Wo", "isoWeek");
ae("week", "w");
ae("isoWeek", "W");
oe("week", 5);
oe("isoWeek", 5);
v("w", U);
v("ww", U, pe);
v("W", U);
v("WW", U, pe);
_n(
  ["w", "ww", "W", "WW"],
  function(e, t, n, s) {
    t[s.substr(0, 1)] = T(e);
  }
);
function Bl(e) {
  return rn(e, this._week.dow, this._week.doy).week;
}
var Zl = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ql() {
  return this._week.dow;
}
function Kl() {
  return this._week.doy;
}
function ql(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Xl(e) {
  var t = rn(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
b("d", 0, "do", "day");
b("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
b("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
b("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
b("e", 0, 0, "weekday");
b("E", 0, 0, "isoWeekday");
ae("day", "d");
ae("weekday", "e");
ae("isoWeekday", "E");
oe("day", 11);
oe("weekday", 11);
oe("isoWeekday", 11);
v("d", U);
v("e", U);
v("E", U);
v("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
v("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
v("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
_n(["dd", "ddd", "dddd"], function(e, t, n, s) {
  var r = n._locale.weekdaysParse(e, s, n._strict);
  r != null ? t.d = r : O(n).invalidWeekday = e;
});
_n(["d", "e", "E"], function(e, t, n, s) {
  t[s] = T(e);
});
function Jl(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function eu(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function cr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var tu = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Zi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), nu = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), su = pn, ru = pn, iu = pn;
function au(e, t) {
  var n = Te(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? cr(n, this._week.dow) : e ? n[e.day()] : n;
}
function ou(e) {
  return e === !0 ? cr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function lu(e) {
  return e === !0 ? cr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function uu(e, t, n) {
  var s, r, i, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      i = He([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(i, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (r = $.call(this._weekdaysParse, a), r !== -1 ? r : null) : t === "ddd" ? (r = $.call(this._shortWeekdaysParse, a), r !== -1 ? r : null) : (r = $.call(this._minWeekdaysParse, a), r !== -1 ? r : null) : t === "dddd" ? (r = $.call(this._weekdaysParse, a), r !== -1 || (r = $.call(this._shortWeekdaysParse, a), r !== -1) ? r : (r = $.call(this._minWeekdaysParse, a), r !== -1 ? r : null)) : t === "ddd" ? (r = $.call(this._shortWeekdaysParse, a), r !== -1 || (r = $.call(this._weekdaysParse, a), r !== -1) ? r : (r = $.call(this._minWeekdaysParse, a), r !== -1 ? r : null)) : (r = $.call(this._minWeekdaysParse, a), r !== -1 || (r = $.call(this._weekdaysParse, a), r !== -1) ? r : (r = $.call(this._shortWeekdaysParse, a), r !== -1 ? r : null));
}
function cu(e, t, n) {
  var s, r, i;
  if (this._weekdaysParseExact)
    return uu.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (r = He([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[s] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[s].test(e))
      return s;
    if (n && t === "ddd" && this._shortWeekdaysParse[s].test(e))
      return s;
    if (n && t === "dd" && this._minWeekdaysParse[s].test(e))
      return s;
    if (!n && this._weekdaysParse[s].test(e))
      return s;
  }
}
function du(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Jl(e, this.localeData()), this.add(e - t, "d")) : t;
}
function hu(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function fu(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = eu(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function mu(e) {
  return this._weekdaysParseExact ? (R(this, "_weekdaysRegex") || dr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (R(this, "_weekdaysRegex") || (this._weekdaysRegex = su), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function gu(e) {
  return this._weekdaysParseExact ? (R(this, "_weekdaysRegex") || dr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (R(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ru), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function yu(e) {
  return this._weekdaysParseExact ? (R(this, "_weekdaysRegex") || dr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (R(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = iu), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function dr() {
  function e(c, g) {
    return g.length - c.length;
  }
  var t = [], n = [], s = [], r = [], i, a, o, l, f;
  for (i = 0; i < 7; i++)
    a = He([2e3, 1]).day(i), o = ve(this.weekdaysMin(a, "")), l = ve(this.weekdaysShort(a, "")), f = ve(this.weekdays(a, "")), t.push(o), n.push(l), s.push(f), r.push(o), r.push(l), r.push(f);
  t.sort(e), n.sort(e), s.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function hr() {
  return this.hours() % 12 || 12;
}
function vu() {
  return this.hours() || 24;
}
b("H", ["HH", 2], 0, "hour");
b("h", ["hh", 2], 0, hr);
b("k", ["kk", 2], 0, vu);
b("hmm", 0, 0, function() {
  return "" + hr.apply(this) + We(this.minutes(), 2);
});
b("hmmss", 0, 0, function() {
  return "" + hr.apply(this) + We(this.minutes(), 2) + We(this.seconds(), 2);
});
b("Hmm", 0, 0, function() {
  return "" + this.hours() + We(this.minutes(), 2);
});
b("Hmmss", 0, 0, function() {
  return "" + this.hours() + We(this.minutes(), 2) + We(this.seconds(), 2);
});
function Qi(e, t) {
  b(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Qi("a", !0);
Qi("A", !1);
ae("hour", "h");
oe("hour", 13);
function Ki(e, t) {
  return t._meridiemParse;
}
v("a", Ki);
v("A", Ki);
v("H", U);
v("h", U);
v("k", U);
v("HH", U, pe);
v("hh", U, pe);
v("kk", U, pe);
v("hmm", Wi);
v("hmmss", Hi);
v("Hmm", Wi);
v("Hmmss", Hi);
L(["H", "HH"], J);
L(["k", "kk"], function(e, t, n) {
  var s = T(e);
  t[J] = s === 24 ? 0 : s;
});
L(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
L(["h", "hh"], function(e, t, n) {
  t[J] = T(e), O(n).bigHour = !0;
});
L("hmm", function(e, t, n) {
  var s = e.length - 2;
  t[J] = T(e.substr(0, s)), t[Ce] = T(e.substr(s)), O(n).bigHour = !0;
});
L("hmmss", function(e, t, n) {
  var s = e.length - 4, r = e.length - 2;
  t[J] = T(e.substr(0, s)), t[Ce] = T(e.substr(s, 2)), t[Be] = T(e.substr(r)), O(n).bigHour = !0;
});
L("Hmm", function(e, t, n) {
  var s = e.length - 2;
  t[J] = T(e.substr(0, s)), t[Ce] = T(e.substr(s));
});
L("Hmmss", function(e, t, n) {
  var s = e.length - 4, r = e.length - 2;
  t[J] = T(e.substr(0, s)), t[Ce] = T(e.substr(s, 2)), t[Be] = T(e.substr(r));
});
function pu(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var _u = /[ap]\.?m?\.?/i, wu = Ht("Hours", !0);
function Su(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var qi = {
  calendar: cl,
  longDateFormat: ml,
  invalidDate: yl,
  ordinal: pl,
  dayOfMonthOrdinalParse: _l,
  relativeTime: Sl,
  months: Il,
  monthsShort: Ui,
  week: Zl,
  weekdays: tu,
  weekdaysMin: nu,
  weekdaysShort: Zi,
  meridiemParse: _u
}, j = {}, Zt = {}, an;
function bu(e, t) {
  var n, s = Math.min(e.length, t.length);
  for (n = 0; n < s; n += 1)
    if (e[n] !== t[n])
      return n;
  return s;
}
function Br(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Mu(e) {
  for (var t = 0, n, s, r, i; t < e.length; ) {
    for (i = Br(e[t]).split("-"), n = i.length, s = Br(e[t + 1]), s = s ? s.split("-") : null; n > 0; ) {
      if (r = ls(i.slice(0, n).join("-")), r)
        return r;
      if (s && s.length >= n && bu(i, s) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return an;
}
function ku(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function ls(e) {
  var t = null, n;
  if (j[e] === void 0 && typeof module < "u" && module && module.exports && ku(e))
    try {
      t = an._abbr, n = require, n("./locale/" + e), rt(t);
    } catch {
      j[e] = null;
    }
  return j[e];
}
function rt(e, t) {
  var n;
  return e && (me(t) ? n = qe(e) : n = fr(e, t), n ? an = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), an._abbr;
}
function fr(e, t) {
  if (t !== null) {
    var n, s = qi;
    if (t.abbr = e, j[e] != null)
      xi(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = j[e]._config;
    else if (t.parentLocale != null)
      if (j[t.parentLocale] != null)
        s = j[t.parentLocale]._config;
      else if (n = ls(t.parentLocale), n != null)
        s = n._config;
      else
        return Zt[t.parentLocale] || (Zt[t.parentLocale] = []), Zt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return j[e] = new ir(Vs(s, t)), Zt[e] && Zt[e].forEach(function(r) {
      fr(r.name, r.config);
    }), rt(e), j[e];
  } else
    return delete j[e], null;
}
function Du(e, t) {
  if (t != null) {
    var n, s, r = qi;
    j[e] != null && j[e].parentLocale != null ? j[e].set(Vs(j[e]._config, t)) : (s = ls(e), s != null && (r = s._config), t = Vs(r, t), s == null && (t.abbr = e), n = new ir(t), n.parentLocale = j[e], j[e] = n), rt(e);
  } else
    j[e] != null && (j[e].parentLocale != null ? (j[e] = j[e].parentLocale, e === rt() && rt(e)) : j[e] != null && delete j[e]);
  return j[e];
}
function qe(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return an;
  if (!Te(e)) {
    if (t = ls(e), t)
      return t;
    e = [e];
  }
  return Mu(e);
}
function Ou() {
  return Gs(j);
}
function mr(e) {
  var t, n = e._a;
  return n && O(e).overflow === -2 && (t = n[$e] < 0 || n[$e] > 11 ? $e : n[Fe] < 1 || n[Fe] > os(n[ie], n[$e]) ? Fe : n[J] < 0 || n[J] > 24 || n[J] === 24 && (n[Ce] !== 0 || n[Be] !== 0 || n[ft] !== 0) ? J : n[Ce] < 0 || n[Ce] > 59 ? Ce : n[Be] < 0 || n[Be] > 59 ? Be : n[ft] < 0 || n[ft] > 999 ? ft : -1, O(e)._overflowDayOfYear && (t < ie || t > Fe) && (t = Fe), O(e)._overflowWeeks && t === -1 && (t = Nl), O(e)._overflowWeekday && t === -1 && (t = xl), O(e).overflow = t), e;
}
var Cu = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Tu = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Pu = /Z|[+-]\d\d(?::?\d\d)?/, Nn = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], ks = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Yu = /^\/?Date\((-?\d+)/i, Ru = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Nu = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Xi(e) {
  var t, n, s = e._i, r = Cu.exec(s) || Tu.exec(s), i, a, o, l, f = Nn.length, c = ks.length;
  if (r) {
    for (O(e).iso = !0, t = 0, n = f; t < n; t++)
      if (Nn[t][1].exec(r[1])) {
        a = Nn[t][0], i = Nn[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, n = c; t < n; t++)
        if (ks[t][1].exec(r[3])) {
          o = (r[2] || " ") + ks[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && o != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (Pu.exec(r[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (o || "") + (l || ""), yr(e);
  } else
    e._isValid = !1;
}
function xu(e, t, n, s, r, i) {
  var a = [
    Eu(e),
    Ui.indexOf(t),
    parseInt(n, 10),
    parseInt(s, 10),
    parseInt(r, 10)
  ];
  return i && a.push(parseInt(i, 10)), a;
}
function Eu(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Iu(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Lu(e, t, n) {
  if (e) {
    var s = Zi.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== r)
      return O(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function Au(e, t, n) {
  if (e)
    return Nu[e];
  if (t)
    return 0;
  var s = parseInt(n, 10), r = s % 100, i = (s - r) / 100;
  return i * 60 + r;
}
function Ji(e) {
  var t = Ru.exec(Iu(e._i)), n;
  if (t) {
    if (n = xu(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Lu(t[1], n, e))
      return;
    e._a = n, e._tzm = Au(t[8], t[9], t[10]), e._d = sn.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), O(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Fu(e) {
  var t = Yu.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Xi(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ji(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : m.createFromInputFallback(e);
}
m.createFromInputFallback = Me(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Yt(e, t, n) {
  return e ?? t ?? n;
}
function Wu(e) {
  var t = new Date(m.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function gr(e) {
  var t, n, s = [], r, i, a;
  if (!e._d) {
    for (r = Wu(e), e._w && e._a[Fe] == null && e._a[$e] == null && Hu(e), e._dayOfYear != null && (a = Yt(e._a[ie], r[ie]), (e._dayOfYear > Xt(a) || e._dayOfYear === 0) && (O(e)._overflowDayOfYear = !0), n = sn(a, 0, e._dayOfYear), e._a[$e] = n.getUTCMonth(), e._a[Fe] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[J] === 24 && e._a[Ce] === 0 && e._a[Be] === 0 && e._a[ft] === 0 && (e._nextDay = !0, e._a[J] = 0), e._d = (e._useUTC ? sn : $l).apply(
      null,
      s
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[J] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (O(e).weekdayMismatch = !0);
  }
}
function Hu(e) {
  var t, n, s, r, i, a, o, l, f;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, a = 4, n = Yt(
    t.GG,
    e._a[ie],
    rn(H(), 1, 4).year
  ), s = Yt(t.W, 1), r = Yt(t.E, 1), (r < 1 || r > 7) && (l = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, f = rn(H(), i, a), n = Yt(t.gg, e._a[ie], f.year), s = Yt(t.w, f.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (l = !0)) : t.e != null ? (r = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : r = i), s < 1 || s > Ze(n, i, a) ? O(e)._overflowWeeks = !0 : l != null ? O(e)._overflowWeekday = !0 : (o = Bi(n, s, r, i, a), e._a[ie] = o.year, e._dayOfYear = o.dayOfYear);
}
m.ISO_8601 = function() {
};
m.RFC_2822 = function() {
};
function yr(e) {
  if (e._f === m.ISO_8601) {
    Xi(e);
    return;
  }
  if (e._f === m.RFC_2822) {
    Ji(e);
    return;
  }
  e._a = [], O(e).empty = !0;
  var t = "" + e._i, n, s, r, i, a, o = t.length, l = 0, f, c;
  for (r = Ei(e._f, e._locale).match(ar) || [], c = r.length, n = 0; n < c; n++)
    i = r[n], s = (t.match(Pl(i, e)) || [])[0], s && (a = t.substr(0, t.indexOf(s)), a.length > 0 && O(e).unusedInput.push(a), t = t.slice(
      t.indexOf(s) + s.length
    ), l += s.length), xt[i] ? (s ? O(e).empty = !1 : O(e).unusedTokens.push(i), Rl(i, s, e)) : e._strict && !s && O(e).unusedTokens.push(i);
  O(e).charsLeftOver = o - l, t.length > 0 && O(e).unusedInput.push(t), e._a[J] <= 12 && O(e).bigHour === !0 && e._a[J] > 0 && (O(e).bigHour = void 0), O(e).parsedDateParts = e._a.slice(0), O(e).meridiem = e._meridiem, e._a[J] = Uu(
    e._locale,
    e._a[J],
    e._meridiem
  ), f = O(e).era, f !== null && (e._a[ie] = e._locale.erasConvertYear(f, e._a[ie])), gr(e), mr(e);
}
function Uu(e, t, n) {
  var s;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (s = e.isPM(n), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function zu(e) {
  var t, n, s, r, i, a, o = !1, l = e._f.length;
  if (l === 0) {
    O(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (r = 0; r < l; r++)
    i = 0, a = !1, t = rr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], yr(t), sr(t) && (a = !0), i += O(t).charsLeftOver, i += O(t).unusedTokens.length * 10, O(t).score = i, o ? i < s && (s = i, n = t) : (s == null || i < s || a) && (s = i, n = t, a && (o = !0));
  nt(e, n || t);
}
function ju(e) {
  if (!e._d) {
    var t = or(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Ri(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), gr(e);
  }
}
function Vu(e) {
  var t = new vn(mr(ea(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ea(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || qe(e._l), t === null || n === void 0 && t === "" ? es({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Pe(t) ? new vn(mr(t)) : (yn(t) ? e._d = t : Te(n) ? zu(e) : n ? yr(e) : Gu(e), sr(e) || (e._d = null), e));
}
function Gu(e) {
  var t = e._i;
  me(t) ? e._d = new Date(m.now()) : yn(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Fu(e) : Te(t) ? (e._a = Ri(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), gr(e)) : wt(t) ? ju(e) : Ke(t) ? e._d = new Date(t) : m.createFromInputFallback(e);
}
function ta(e, t, n, s, r) {
  var i = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (n === !0 || n === !1) && (s = n, n = void 0), (wt(e) && nr(e) || Te(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = r, i._l = n, i._i = e, i._f = t, i._strict = s, Vu(i);
}
function H(e, t, n, s) {
  return ta(e, t, n, s, !1);
}
var $u = Me(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = H.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : es();
  }
), Bu = Me(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = H.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : es();
  }
);
function na(e, t) {
  var n, s;
  if (t.length === 1 && Te(t[0]) && (t = t[0]), !t.length)
    return H();
  for (n = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](n)) && (n = t[s]);
  return n;
}
function Zu() {
  var e = [].slice.call(arguments, 0);
  return na("isBefore", e);
}
function Qu() {
  var e = [].slice.call(arguments, 0);
  return na("isAfter", e);
}
var Ku = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Qt = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function qu(e) {
  var t, n = !1, s, r = Qt.length;
  for (t in e)
    if (R(e, t) && !($.call(Qt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < r; ++s)
    if (e[Qt[s]]) {
      if (n)
        return !1;
      parseFloat(e[Qt[s]]) !== T(e[Qt[s]]) && (n = !0);
    }
  return !0;
}
function Xu() {
  return this._isValid;
}
function Ju() {
  return Re(NaN);
}
function us(e) {
  var t = or(e), n = t.year || 0, s = t.quarter || 0, r = t.month || 0, i = t.week || t.isoWeek || 0, a = t.day || 0, o = t.hour || 0, l = t.minute || 0, f = t.second || 0, c = t.millisecond || 0;
  this._isValid = qu(t), this._milliseconds = +c + f * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +r + s * 3 + n * 12, this._data = {}, this._locale = qe(), this._bubble();
}
function Ln(e) {
  return e instanceof us;
}
function Bs(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function ec(e, t, n) {
  var s = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, a;
  for (a = 0; a < s; a++)
    (n && e[a] !== t[a] || !n && T(e[a]) !== T(t[a])) && i++;
  return i + r;
}
function sa(e, t) {
  b(e, 0, 0, function() {
    var n = this.utcOffset(), s = "+";
    return n < 0 && (n = -n, s = "-"), s + We(~~(n / 60), 2) + t + We(~~n % 60, 2);
  });
}
sa("Z", ":");
sa("ZZ", "");
v("Z", as);
v("ZZ", as);
L(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = vr(as, e);
});
var tc = /([\+\-]|\d\d)/gi;
function vr(e, t) {
  var n = (t || "").match(e), s, r, i;
  return n === null ? null : (s = n[n.length - 1] || [], r = (s + "").match(tc) || ["-", 0, 0], i = +(r[1] * 60) + T(r[2]), i === 0 ? 0 : r[0] === "+" ? i : -i);
}
function pr(e, t) {
  var n, s;
  return t._isUTC ? (n = t.clone(), s = (Pe(e) || yn(e) ? e.valueOf() : H(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), m.updateOffset(n, !1), n) : H(e).local();
}
function Zs(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
m.updateOffset = function() {
};
function nc(e, t, n) {
  var s = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = vr(as, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (r = Zs(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), s !== e && (!t || this._changeInProgress ? aa(
      this,
      Re(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, m.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : Zs(this);
}
function sc(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function rc(e) {
  return this.utcOffset(0, e);
}
function ic(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Zs(this), "m")), this;
}
function ac() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = vr(Cl, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function oc(e) {
  return this.isValid() ? (e = e ? H(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function lc() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function uc() {
  if (!me(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return rr(e, this), e = ea(e), e._a ? (t = e._isUTC ? He(e._a) : H(e._a), this._isDSTShifted = this.isValid() && ec(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function cc() {
  return this.isValid() ? !this._isUTC : !1;
}
function dc() {
  return this.isValid() ? this._isUTC : !1;
}
function ra() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var hc = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, fc = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Re(e, t) {
  var n = e, s = null, r, i, a;
  return Ln(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Ke(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (s = hc.exec(e)) ? (r = s[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: T(s[Fe]) * r,
    h: T(s[J]) * r,
    m: T(s[Ce]) * r,
    s: T(s[Be]) * r,
    ms: T(Bs(s[ft] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (s = fc.exec(e)) ? (r = s[1] === "-" ? -1 : 1, n = {
    y: ct(s[2], r),
    M: ct(s[3], r),
    w: ct(s[4], r),
    d: ct(s[5], r),
    h: ct(s[6], r),
    m: ct(s[7], r),
    s: ct(s[8], r)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (a = mc(
    H(n.from),
    H(n.to)
  ), n = {}, n.ms = a.milliseconds, n.M = a.months), i = new us(n), Ln(e) && R(e, "_locale") && (i._locale = e._locale), Ln(e) && R(e, "_isValid") && (i._isValid = e._isValid), i;
}
Re.fn = us.prototype;
Re.invalid = Ju;
function ct(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Zr(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function mc(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = pr(t, e), e.isBefore(t) ? n = Zr(e, t) : (n = Zr(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function ia(e, t) {
  return function(n, s) {
    var r, i;
    return s !== null && !isNaN(+s) && (xi(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = s, s = i), r = Re(n, s), aa(this, r, e), this;
  };
}
function aa(e, t, n, s) {
  var r = t._milliseconds, i = Bs(t._days), a = Bs(t._months);
  e.isValid() && (s = s ?? !0, a && ji(e, Vn(e, "Month") + a * n), i && Li(e, "Date", Vn(e, "Date") + i * n), r && e._d.setTime(e._d.valueOf() + r * n), s && m.updateOffset(e, i || a));
}
var gc = ia(1, "add"), yc = ia(-1, "subtract");
function oa(e) {
  return typeof e == "string" || e instanceof String;
}
function vc(e) {
  return Pe(e) || yn(e) || oa(e) || Ke(e) || _c(e) || pc(e) || e === null || e === void 0;
}
function pc(e) {
  var t = wt(e) && !nr(e), n = !1, s = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], r, i, a = s.length;
  for (r = 0; r < a; r += 1)
    i = s[r], n = n || R(e, i);
  return t && n;
}
function _c(e) {
  var t = Te(e), n = !1;
  return t && (n = e.filter(function(s) {
    return !Ke(s) && oa(e);
  }).length === 0), t && n;
}
function wc(e) {
  var t = wt(e) && !nr(e), n = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, i;
  for (r = 0; r < s.length; r += 1)
    i = s[r], n = n || R(e, i);
  return t && n;
}
function Sc(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function bc(e, t) {
  arguments.length === 1 && (arguments[0] ? vc(arguments[0]) ? (e = arguments[0], t = void 0) : wc(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || H(), s = pr(n, this).startOf("day"), r = m.calendarFormat(this, s) || "sameElse", i = t && (Ue(t[r]) ? t[r].call(this, n) : t[r]);
  return this.format(
    i || this.localeData().calendar(r, this, H(n))
  );
}
function Mc() {
  return new vn(this);
}
function kc(e, t) {
  var n = Pe(e) ? e : H(e);
  return this.isValid() && n.isValid() ? (t = ke(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Dc(e, t) {
  var n = Pe(e) ? e : H(e);
  return this.isValid() && n.isValid() ? (t = ke(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Oc(e, t, n, s) {
  var r = Pe(e) ? e : H(e), i = Pe(t) ? t : H(t);
  return this.isValid() && r.isValid() && i.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(r, n) : !this.isBefore(r, n)) && (s[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function Cc(e, t) {
  var n = Pe(e) ? e : H(e), s;
  return this.isValid() && n.isValid() ? (t = ke(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (s = n.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function Tc(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Pc(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Yc(e, t, n) {
  var s, r, i;
  if (!this.isValid())
    return NaN;
  if (s = pr(e, this), !s.isValid())
    return NaN;
  switch (r = (s.utcOffset() - this.utcOffset()) * 6e4, t = ke(t), t) {
    case "year":
      i = An(this, s) / 12;
      break;
    case "month":
      i = An(this, s);
      break;
    case "quarter":
      i = An(this, s) / 3;
      break;
    case "second":
      i = (this - s) / 1e3;
      break;
    case "minute":
      i = (this - s) / 6e4;
      break;
    case "hour":
      i = (this - s) / 36e5;
      break;
    case "day":
      i = (this - s - r) / 864e5;
      break;
    case "week":
      i = (this - s - r) / 6048e5;
      break;
    default:
      i = this - s;
  }
  return n ? i : be(i);
}
function An(e, t) {
  if (e.date() < t.date())
    return -An(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(n, "months"), r, i;
  return t - s < 0 ? (r = e.clone().add(n - 1, "months"), i = (t - s) / (s - r)) : (r = e.clone().add(n + 1, "months"), i = (t - s) / (r - s)), -(n + i) || 0;
}
m.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
m.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Rc() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Nc(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? In(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Ue(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", In(n, "Z")) : In(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function xc() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, s, r, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + s + r + i);
}
function Ec(e) {
  e || (e = this.isUtc() ? m.defaultFormatUtc : m.defaultFormat);
  var t = In(this, e);
  return this.localeData().postformat(t);
}
function Ic(e, t) {
  return this.isValid() && (Pe(e) && e.isValid() || H(e).isValid()) ? Re({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Lc(e) {
  return this.from(H(), e);
}
function Ac(e, t) {
  return this.isValid() && (Pe(e) && e.isValid() || H(e).isValid()) ? Re({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Fc(e) {
  return this.to(H(), e);
}
function la(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = qe(e), t != null && (this._locale = t), this);
}
var ua = Me(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ca() {
  return this._locale;
}
var Bn = 1e3, Et = 60 * Bn, Zn = 60 * Et, da = (365 * 400 + 97) * 24 * Zn;
function It(e, t) {
  return (e % t + t) % t;
}
function ha(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - da : new Date(e, t, n).valueOf();
}
function fa(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - da : Date.UTC(e, t, n);
}
function Wc(e) {
  var t, n;
  if (e = ke(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? fa : ha, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= It(
        t + (this._isUTC ? 0 : this.utcOffset() * Et),
        Zn
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= It(t, Et);
      break;
    case "second":
      t = this._d.valueOf(), t -= It(t, Bn);
      break;
  }
  return this._d.setTime(t), m.updateOffset(this, !0), this;
}
function Hc(e) {
  var t, n;
  if (e = ke(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? fa : ha, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Zn - It(
        t + (this._isUTC ? 0 : this.utcOffset() * Et),
        Zn
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Et - It(t, Et) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Bn - It(t, Bn) - 1;
      break;
  }
  return this._d.setTime(t), m.updateOffset(this, !0), this;
}
function Uc() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function zc() {
  return Math.floor(this.valueOf() / 1e3);
}
function jc() {
  return new Date(this.valueOf());
}
function Vc() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Gc() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function $c() {
  return this.isValid() ? this.toISOString() : null;
}
function Bc() {
  return sr(this);
}
function Zc() {
  return nt({}, O(this));
}
function Qc() {
  return O(this).overflow;
}
function Kc() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
b("N", 0, 0, "eraAbbr");
b("NN", 0, 0, "eraAbbr");
b("NNN", 0, 0, "eraAbbr");
b("NNNN", 0, 0, "eraName");
b("NNNNN", 0, 0, "eraNarrow");
b("y", ["y", 1], "yo", "eraYear");
b("y", ["yy", 2], 0, "eraYear");
b("y", ["yyy", 3], 0, "eraYear");
b("y", ["yyyy", 4], 0, "eraYear");
v("N", _r);
v("NN", _r);
v("NNN", _r);
v("NNNN", od);
v("NNNNN", ld);
L(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, s) {
    var r = n._locale.erasParse(e, s, n._strict);
    r ? O(n).era = r : O(n).invalidEra = e;
  }
);
v("y", Ut);
v("yy", Ut);
v("yyy", Ut);
v("yyyy", Ut);
v("yo", ud);
L(["y", "yy", "yyy", "yyyy"], ie);
L(["yo"], function(e, t, n, s) {
  var r;
  n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[ie] = n._locale.eraYearOrdinalParse(e, r) : t[ie] = parseInt(e, 10);
});
function qc(e, t) {
  var n, s, r, i = this._eras || qe("en")._eras;
  for (n = 0, s = i.length; n < s; ++n) {
    switch (typeof i[n].since) {
      case "string":
        r = m(i[n].since).startOf("day"), i[n].since = r.valueOf();
        break;
    }
    switch (typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        r = m(i[n].until).startOf("day").valueOf(), i[n].until = r.valueOf();
        break;
    }
  }
  return i;
}
function Xc(e, t, n) {
  var s, r, i = this.eras(), a, o, l;
  for (e = e.toUpperCase(), s = 0, r = i.length; s < r; ++s)
    if (a = i[s].name.toUpperCase(), o = i[s].abbr.toUpperCase(), l = i[s].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[s];
          break;
        case "NNNN":
          if (a === e)
            return i[s];
          break;
        case "NNNNN":
          if (l === e)
            return i[s];
          break;
      }
    else if ([a, o, l].indexOf(e) >= 0)
      return i[s];
}
function Jc(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? m(e.since).year() : m(e.since).year() + (t - e.offset) * n;
}
function ed() {
  var e, t, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return s[e].name;
  return "";
}
function td() {
  var e, t, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return s[e].narrow;
  return "";
}
function nd() {
  var e, t, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return s[e].abbr;
  return "";
}
function sd() {
  var e, t, n, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = r[e].since <= r[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return (this.year() - m(r[e].since).year()) * n + r[e].offset;
  return this.year();
}
function rd(e) {
  return R(this, "_erasNameRegex") || wr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function id(e) {
  return R(this, "_erasAbbrRegex") || wr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ad(e) {
  return R(this, "_erasNarrowRegex") || wr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function _r(e, t) {
  return t.erasAbbrRegex(e);
}
function od(e, t) {
  return t.erasNameRegex(e);
}
function ld(e, t) {
  return t.erasNarrowRegex(e);
}
function ud(e, t) {
  return t._eraYearOrdinalRegex || Ut;
}
function wr() {
  var e = [], t = [], n = [], s = [], r, i, a = this.eras();
  for (r = 0, i = a.length; r < i; ++r)
    t.push(ve(a[r].name)), e.push(ve(a[r].abbr)), n.push(ve(a[r].narrow)), s.push(ve(a[r].name)), s.push(ve(a[r].abbr)), s.push(ve(a[r].narrow));
  this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
b(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
b(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function cs(e, t) {
  b(0, [e, e.length], 0, t);
}
cs("gggg", "weekYear");
cs("ggggg", "weekYear");
cs("GGGG", "isoWeekYear");
cs("GGGGG", "isoWeekYear");
ae("weekYear", "gg");
ae("isoWeekYear", "GG");
oe("weekYear", 1);
oe("isoWeekYear", 1);
v("G", is);
v("g", is);
v("GG", U, pe);
v("gg", U, pe);
v("GGGG", ur, lr);
v("gggg", ur, lr);
v("GGGGG", rs, ns);
v("ggggg", rs, ns);
_n(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, s) {
    t[s.substr(0, 2)] = T(e);
  }
);
_n(["gg", "GG"], function(e, t, n, s) {
  t[s] = m.parseTwoDigitYear(e);
});
function cd(e) {
  return ma.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function dd(e) {
  return ma.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function hd() {
  return Ze(this.year(), 1, 4);
}
function fd() {
  return Ze(this.isoWeekYear(), 1, 4);
}
function md() {
  var e = this.localeData()._week;
  return Ze(this.year(), e.dow, e.doy);
}
function gd() {
  var e = this.localeData()._week;
  return Ze(this.weekYear(), e.dow, e.doy);
}
function ma(e, t, n, s, r) {
  var i;
  return e == null ? rn(this, s, r).year : (i = Ze(e, s, r), t > i && (t = i), yd.call(this, e, t, n, s, r));
}
function yd(e, t, n, s, r) {
  var i = Bi(e, t, n, s, r), a = sn(i.year, 0, i.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
b("Q", 0, "Qo", "quarter");
ae("quarter", "Q");
oe("quarter", 7);
v("Q", Ai);
L("Q", function(e, t) {
  t[$e] = (T(e) - 1) * 3;
});
function vd(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
b("D", ["DD", 2], "Do", "date");
ae("date", "D");
oe("date", 9);
v("D", U);
v("DD", U, pe);
v("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
L(["D", "DD"], Fe);
L("Do", function(e, t) {
  t[Fe] = T(e.match(U)[0]);
});
var ga = Ht("Date", !0);
b("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
ae("dayOfYear", "DDD");
oe("dayOfYear", 4);
v("DDD", ss);
v("DDDD", Fi);
L(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = T(e);
});
function pd(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
b("m", ["mm", 2], 0, "minute");
ae("minute", "m");
oe("minute", 14);
v("m", U);
v("mm", U, pe);
L(["m", "mm"], Ce);
var _d = Ht("Minutes", !1);
b("s", ["ss", 2], 0, "second");
ae("second", "s");
oe("second", 15);
v("s", U);
v("ss", U, pe);
L(["s", "ss"], Be);
var wd = Ht("Seconds", !1);
b("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
b(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
b(0, ["SSS", 3], 0, "millisecond");
b(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
b(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
b(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
b(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
b(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
b(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
ae("millisecond", "ms");
oe("millisecond", 16);
v("S", ss, Ai);
v("SS", ss, pe);
v("SSS", ss, Fi);
var st, ya;
for (st = "SSSS"; st.length <= 9; st += "S")
  v(st, Ut);
function Sd(e, t) {
  t[ft] = T(("0." + e) * 1e3);
}
for (st = "S"; st.length <= 9; st += "S")
  L(st, Sd);
ya = Ht("Milliseconds", !1);
b("z", 0, 0, "zoneAbbr");
b("zz", 0, 0, "zoneName");
function bd() {
  return this._isUTC ? "UTC" : "";
}
function Md() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var h = vn.prototype;
h.add = gc;
h.calendar = bc;
h.clone = Mc;
h.diff = Yc;
h.endOf = Hc;
h.format = Ec;
h.from = Ic;
h.fromNow = Lc;
h.to = Ac;
h.toNow = Fc;
h.get = Dl;
h.invalidAt = Qc;
h.isAfter = kc;
h.isBefore = Dc;
h.isBetween = Oc;
h.isSame = Cc;
h.isSameOrAfter = Tc;
h.isSameOrBefore = Pc;
h.isValid = Bc;
h.lang = ua;
h.locale = la;
h.localeData = ca;
h.max = Bu;
h.min = $u;
h.parsingFlags = Zc;
h.set = Ol;
h.startOf = Wc;
h.subtract = yc;
h.toArray = Vc;
h.toObject = Gc;
h.toDate = jc;
h.toISOString = Nc;
h.inspect = xc;
typeof Symbol < "u" && Symbol.for != null && (h[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
h.toJSON = $c;
h.toString = Rc;
h.unix = zc;
h.valueOf = Uc;
h.creationData = Kc;
h.eraName = ed;
h.eraNarrow = td;
h.eraAbbr = nd;
h.eraYear = sd;
h.year = $i;
h.isLeapYear = Gl;
h.weekYear = cd;
h.isoWeekYear = dd;
h.quarter = h.quarters = vd;
h.month = Vi;
h.daysInMonth = zl;
h.week = h.weeks = ql;
h.isoWeek = h.isoWeeks = Xl;
h.weeksInYear = md;
h.weeksInWeekYear = gd;
h.isoWeeksInYear = hd;
h.isoWeeksInISOWeekYear = fd;
h.date = ga;
h.day = h.days = du;
h.weekday = hu;
h.isoWeekday = fu;
h.dayOfYear = pd;
h.hour = h.hours = wu;
h.minute = h.minutes = _d;
h.second = h.seconds = wd;
h.millisecond = h.milliseconds = ya;
h.utcOffset = nc;
h.utc = rc;
h.local = ic;
h.parseZone = ac;
h.hasAlignedHourOffset = oc;
h.isDST = lc;
h.isLocal = cc;
h.isUtcOffset = dc;
h.isUtc = ra;
h.isUTC = ra;
h.zoneAbbr = bd;
h.zoneName = Md;
h.dates = Me(
  "dates accessor is deprecated. Use date instead.",
  ga
);
h.months = Me(
  "months accessor is deprecated. Use month instead",
  Vi
);
h.years = Me(
  "years accessor is deprecated. Use year instead",
  $i
);
h.zone = Me(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  sc
);
h.isDSTShifted = Me(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  uc
);
function kd(e) {
  return H(e * 1e3);
}
function Dd() {
  return H.apply(null, arguments).parseZone();
}
function va(e) {
  return e;
}
var N = ir.prototype;
N.calendar = dl;
N.longDateFormat = gl;
N.invalidDate = vl;
N.ordinal = wl;
N.preparse = va;
N.postformat = va;
N.relativeTime = bl;
N.pastFuture = Ml;
N.set = ul;
N.eras = qc;
N.erasParse = Xc;
N.erasConvertYear = Jc;
N.erasAbbrRegex = id;
N.erasNameRegex = rd;
N.erasNarrowRegex = ad;
N.months = Fl;
N.monthsShort = Wl;
N.monthsParse = Ul;
N.monthsRegex = Vl;
N.monthsShortRegex = jl;
N.week = Bl;
N.firstDayOfYear = Kl;
N.firstDayOfWeek = Ql;
N.weekdays = au;
N.weekdaysMin = lu;
N.weekdaysShort = ou;
N.weekdaysParse = cu;
N.weekdaysRegex = mu;
N.weekdaysShortRegex = gu;
N.weekdaysMinRegex = yu;
N.isPM = pu;
N.meridiem = Su;
function Qn(e, t, n, s) {
  var r = qe(), i = He().set(s, t);
  return r[n](i, e);
}
function pa(e, t, n) {
  if (Ke(e) && (t = e, e = void 0), e = e || "", t != null)
    return Qn(e, t, n, "month");
  var s, r = [];
  for (s = 0; s < 12; s++)
    r[s] = Qn(e, s, n, "month");
  return r;
}
function Sr(e, t, n, s) {
  typeof e == "boolean" ? (Ke(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Ke(t) && (n = t, t = void 0), t = t || "");
  var r = qe(), i = e ? r._week.dow : 0, a, o = [];
  if (n != null)
    return Qn(t, (n + i) % 7, s, "day");
  for (a = 0; a < 7; a++)
    o[a] = Qn(t, (a + i) % 7, s, "day");
  return o;
}
function Od(e, t) {
  return pa(e, t, "months");
}
function Cd(e, t) {
  return pa(e, t, "monthsShort");
}
function Td(e, t, n) {
  return Sr(e, t, n, "weekdays");
}
function Pd(e, t, n) {
  return Sr(e, t, n, "weekdaysShort");
}
function Yd(e, t, n) {
  return Sr(e, t, n, "weekdaysMin");
}
rt("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = T(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
m.lang = Me(
  "moment.lang is deprecated. Use moment.locale instead.",
  rt
);
m.langData = Me(
  "moment.langData is deprecated. Use moment.localeData instead.",
  qe
);
var Ve = Math.abs;
function Rd() {
  var e = this._data;
  return this._milliseconds = Ve(this._milliseconds), this._days = Ve(this._days), this._months = Ve(this._months), e.milliseconds = Ve(e.milliseconds), e.seconds = Ve(e.seconds), e.minutes = Ve(e.minutes), e.hours = Ve(e.hours), e.months = Ve(e.months), e.years = Ve(e.years), this;
}
function _a(e, t, n, s) {
  var r = Re(t, n);
  return e._milliseconds += s * r._milliseconds, e._days += s * r._days, e._months += s * r._months, e._bubble();
}
function Nd(e, t) {
  return _a(this, e, t, 1);
}
function xd(e, t) {
  return _a(this, e, t, -1);
}
function Qr(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Ed() {
  var e = this._milliseconds, t = this._days, n = this._months, s = this._data, r, i, a, o, l;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Qr(Qs(n) + t) * 864e5, t = 0, n = 0), s.milliseconds = e % 1e3, r = be(e / 1e3), s.seconds = r % 60, i = be(r / 60), s.minutes = i % 60, a = be(i / 60), s.hours = a % 24, t += be(a / 24), l = be(wa(t)), n += l, t -= Qr(Qs(l)), o = be(n / 12), n %= 12, s.days = t, s.months = n, s.years = o, this;
}
function wa(e) {
  return e * 4800 / 146097;
}
function Qs(e) {
  return e * 146097 / 4800;
}
function Id(e) {
  if (!this.isValid())
    return NaN;
  var t, n, s = this._milliseconds;
  if (e = ke(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, n = this._months + wa(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Qs(this._months)), e) {
      case "week":
        return t / 7 + s / 6048e5;
      case "day":
        return t + s / 864e5;
      case "hour":
        return t * 24 + s / 36e5;
      case "minute":
        return t * 1440 + s / 6e4;
      case "second":
        return t * 86400 + s / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + s;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ld() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + T(this._months / 12) * 31536e6 : NaN;
}
function Xe(e) {
  return function() {
    return this.as(e);
  };
}
var Ad = Xe("ms"), Fd = Xe("s"), Wd = Xe("m"), Hd = Xe("h"), Ud = Xe("d"), zd = Xe("w"), jd = Xe("M"), Vd = Xe("Q"), Gd = Xe("y");
function $d() {
  return Re(this);
}
function Bd(e) {
  return e = ke(e), this.isValid() ? this[e + "s"]() : NaN;
}
function bt(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Zd = bt("milliseconds"), Qd = bt("seconds"), Kd = bt("minutes"), qd = bt("hours"), Xd = bt("days"), Jd = bt("months"), eh = bt("years");
function th() {
  return be(this.days() / 7);
}
var Ge = Math.round, Rt = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function nh(e, t, n, s, r) {
  return r.relativeTime(t || 1, !!n, e, s);
}
function sh(e, t, n, s) {
  var r = Re(e).abs(), i = Ge(r.as("s")), a = Ge(r.as("m")), o = Ge(r.as("h")), l = Ge(r.as("d")), f = Ge(r.as("M")), c = Ge(r.as("w")), g = Ge(r.as("y")), k = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || a <= 1 && ["m"] || a < n.m && ["mm", a] || o <= 1 && ["h"] || o < n.h && ["hh", o] || l <= 1 && ["d"] || l < n.d && ["dd", l];
  return n.w != null && (k = k || c <= 1 && ["w"] || c < n.w && ["ww", c]), k = k || f <= 1 && ["M"] || f < n.M && ["MM", f] || g <= 1 && ["y"] || ["yy", g], k[2] = t, k[3] = +e > 0, k[4] = s, nh.apply(null, k);
}
function rh(e) {
  return e === void 0 ? Ge : typeof e == "function" ? (Ge = e, !0) : !1;
}
function ih(e, t) {
  return Rt[e] === void 0 ? !1 : t === void 0 ? Rt[e] : (Rt[e] = t, e === "s" && (Rt.ss = t - 1), !0);
}
function ah(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, s = Rt, r, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (s = Object.assign({}, Rt, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), r = this.localeData(), i = sh(this, !n, s, r), n && (i = r.pastFuture(+this, i)), r.postformat(i);
}
var Ds = Math.abs;
function Tt(e) {
  return (e > 0) - (e < 0) || +e;
}
function ds() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ds(this._milliseconds) / 1e3, t = Ds(this._days), n = Ds(this._months), s, r, i, a, o = this.asSeconds(), l, f, c, g;
  return o ? (s = be(e / 60), r = be(s / 60), e %= 60, s %= 60, i = be(n / 12), n %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = o < 0 ? "-" : "", f = Tt(this._months) !== Tt(o) ? "-" : "", c = Tt(this._days) !== Tt(o) ? "-" : "", g = Tt(this._milliseconds) !== Tt(o) ? "-" : "", l + "P" + (i ? f + i + "Y" : "") + (n ? f + n + "M" : "") + (t ? c + t + "D" : "") + (r || s || e ? "T" : "") + (r ? g + r + "H" : "") + (s ? g + s + "M" : "") + (e ? g + a + "S" : "")) : "P0D";
}
var P = us.prototype;
P.isValid = Xu;
P.abs = Rd;
P.add = Nd;
P.subtract = xd;
P.as = Id;
P.asMilliseconds = Ad;
P.asSeconds = Fd;
P.asMinutes = Wd;
P.asHours = Hd;
P.asDays = Ud;
P.asWeeks = zd;
P.asMonths = jd;
P.asQuarters = Vd;
P.asYears = Gd;
P.valueOf = Ld;
P._bubble = Ed;
P.clone = $d;
P.get = Bd;
P.milliseconds = Zd;
P.seconds = Qd;
P.minutes = Kd;
P.hours = qd;
P.days = Xd;
P.weeks = th;
P.months = Jd;
P.years = eh;
P.humanize = ah;
P.toISOString = ds;
P.toString = ds;
P.toJSON = ds;
P.locale = la;
P.localeData = ca;
P.toIsoString = Me(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ds
);
P.lang = ua;
b("X", 0, 0, "unix");
b("x", 0, 0, "valueOf");
v("x", is);
v("X", Tl);
L("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
L("x", function(e, t, n) {
  n._d = new Date(T(e));
});
//! moment.js
m.version = "2.29.4";
ol(H);
m.fn = h;
m.min = Zu;
m.max = Qu;
m.now = Ku;
m.utc = He;
m.unix = kd;
m.months = Od;
m.isDate = yn;
m.locale = rt;
m.invalid = es;
m.duration = Re;
m.isMoment = Pe;
m.weekdays = Td;
m.parseZone = Dd;
m.localeData = qe;
m.isDuration = Ln;
m.monthsShort = Cd;
m.weekdaysMin = Yd;
m.defineLocale = fr;
m.updateLocale = Du;
m.locales = Ou;
m.weekdaysShort = Pd;
m.normalizeUnits = ke;
m.relativeTimeRounding = rh;
m.relativeTimeThreshold = ih;
m.calendarFormat = Sc;
m.prototype = h;
m.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const oh = () => (e, t, {
  inputFormat: n = "YYYY-MM-DD HH:mm:ss",
  displayFormat: s = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: t,
  accessorKey: e,
  ...r,
  cell: (i) => i.getValue() ? m(i.getValue(), n).format(s) : ""
}), lh = (e) => {
  const t = Pi(`/api/getDictionary/${e}`, {
    staleTime: 36e5,
    select: (r) => r.data
  }), n = u.useCallback((r) => {
    if (t.data)
      return t.data.find((i) => i.id == r);
  }, [t.data]), s = u.useCallback((r) => {
    var i;
    return (i = n(r)) == null ? void 0 : i.name;
  }, [n]);
  return u.useMemo(() => ({
    data: t.data,
    getEntryById: n,
    getValueById: s,
    isLoading: t.isLoading,
    isError: t.isError,
    error: t.error
  }), [t, n, s]);
}, uh = ({
  info: e,
  dictionary: t
}) => {
  const {
    getValueById: n,
    isLoading: s
  } = lh(t);
  return s ? /* @__PURE__ */ M(ce, { css: {
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, icon: Ha.faCircleNotch, spin: !0 }) : n(e.getValue());
}, ch = qn.memo(uh), dh = () => (e, t, n, s) => ({
  header: n,
  accessorKey: e,
  ...s,
  cell: (r) => /* @__PURE__ */ M(ch, { info: r, dictionary: t })
}), hh = () => (e, t, n) => ({
  ...n,
  header: t,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), fh = () => (e = "id", t) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...t
}), kh = () => ({
  id: fh(),
  actions: il,
  display: hh(),
  boolean: al(),
  date: oh(),
  dictionary: dh()
});
export {
  bh as P,
  Sh as T,
  kh as c,
  Mh as u
};
