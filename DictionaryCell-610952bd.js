var Ct = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var h = (e, t, s) => (Ct(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Y = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
}, T = (e, t, s, r) => (Ct(e, t, "write to private field"), r ? r.call(e, s) : t.set(e, s), s);
var P = (e, t, s) => (Ct(e, t, "access private method"), s);
import { J as Er, P as Ut, Z as Ar, _ as Ys, $ as bs, a0 as Hr, a1 as Vr, a2 as jr, a3 as Ts, L as Es, c as Gr, j as M, a as de, a4 as zr, f as $r } from "./library-45c09cf9.js";
import { f as Zr } from "./table-f5369550.js";
import { r as L, R as gt } from "./react-6f5a8403.js";
import { F as _e } from "./icons-ad9f8a73.js";
import { I as Oe, d as Qr } from "./mui-4f485058.js";
var F, k, Ze, C, we, xe, B, Qe, Ne, Ce, ve, pe, he, We, Se, He, Be, Et, qe, At, Je, Ht, Ke, Vt, Xe, jt, et, Gt, tt, zt, _t, As, Us, Br = (Us = class extends Er {
  constructor(t, s) {
    super();
    Y(this, Se);
    Y(this, Be);
    Y(this, qe);
    Y(this, Je);
    Y(this, Ke);
    Y(this, Xe);
    Y(this, et);
    Y(this, tt);
    Y(this, _t);
    Y(this, F, void 0);
    Y(this, k, void 0);
    Y(this, Ze, void 0);
    Y(this, C, void 0);
    Y(this, we, void 0);
    Y(this, xe, void 0);
    Y(this, B, void 0);
    Y(this, Qe, void 0);
    Y(this, Ne, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    Y(this, Ce, void 0);
    Y(this, ve, void 0);
    Y(this, pe, void 0);
    Y(this, he, void 0);
    Y(this, We, /* @__PURE__ */ new Set());
    this.options = s, T(this, F, t), T(this, B, null), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (h(this, k).addObserver(this), Rs(h(this, k), this.options) ? P(this, Se, He).call(this) : this.updateResult(), P(this, Ke, Vt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return $t(
      h(this, k),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return $t(
      h(this, k),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), P(this, Xe, jt).call(this), P(this, et, Gt).call(this), h(this, k).removeObserver(this);
  }
  setOptions(t, s) {
    const r = this.options, a = h(this, k);
    if (this.options = h(this, F).defaultQueryOptions(t), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    P(this, tt, zt).call(this), Ut(this.options, r) || h(this, F).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: h(this, k),
      observer: this
    });
    const i = this.hasListeners();
    i && Ps(
      h(this, k),
      a,
      this.options,
      r
    ) && P(this, Se, He).call(this), this.updateResult(s), i && (h(this, k) !== a || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && P(this, Be, Et).call(this);
    const n = P(this, qe, At).call(this);
    i && (h(this, k) !== a || this.options.enabled !== r.enabled || n !== h(this, he)) && P(this, Je, Ht).call(this, n);
  }
  getOptimisticResult(t) {
    const s = h(this, F).getQueryCache().build(h(this, F), t), r = this.createResult(s, t);
    return Jr(this, r) && (T(this, C, r), T(this, xe, this.options), T(this, we, h(this, k).state)), r;
  }
  getCurrentResult() {
    return h(this, C);
  }
  trackResult(t) {
    const s = {};
    return Object.keys(t).forEach((r) => {
      Object.defineProperty(s, r, {
        configurable: !1,
        enumerable: !0,
        get: () => (h(this, We).add(r), t[r])
      });
    }), s;
  }
  getCurrentQuery() {
    return h(this, k);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const s = h(this, F).defaultQueryOptions(t), r = h(this, F).getQueryCache().build(h(this, F), s);
    return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, s));
  }
  fetch(t) {
    return P(this, Se, He).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), h(this, C)));
  }
  createResult(t, s) {
    var Os;
    const r = h(this, k), a = this.options, i = h(this, C), n = h(this, we), o = h(this, xe), m = t !== r ? t.state : h(this, Ze), { state: _ } = t;
    let { error: I, errorUpdatedAt: j, fetchStatus: Ue, status: ue } = _, Ms = !1, Q;
    if (s._optimisticResults) {
      const E = this.hasListeners(), Nt = !E && Rs(t, s), Ur = E && Ps(t, r, s, a);
      (Nt || Ur) && (Ue = jr(t.options.networkMode) ? "fetching" : "paused", _.dataUpdatedAt || (ue = "pending")), s._optimisticResults === "isRestoring" && (Ue = "idle");
    }
    if (s.select && typeof _.data < "u")
      if (i && _.data === (n == null ? void 0 : n.data) && s.select === h(this, Qe))
        Q = h(this, Ne);
      else
        try {
          T(this, Qe, s.select), Q = s.select(_.data), Q = Ts(i == null ? void 0 : i.data, Q, s), T(this, Ne, Q), T(this, B, null);
        } catch (E) {
          T(this, B, E);
        }
    else
      Q = _.data;
    if (typeof s.placeholderData < "u" && typeof Q > "u" && ue === "pending") {
      let E;
      if (i != null && i.isPlaceholderData && s.placeholderData === (o == null ? void 0 : o.placeholderData))
        E = i.data;
      else if (E = typeof s.placeholderData == "function" ? s.placeholderData(
        (Os = h(this, Ce)) == null ? void 0 : Os.state.data,
        h(this, Ce)
      ) : s.placeholderData, s.select && typeof E < "u")
        try {
          E = s.select(E), T(this, B, null);
        } catch (Nt) {
          T(this, B, Nt);
        }
      typeof E < "u" && (ue = "success", Q = Ts(
        i == null ? void 0 : i.data,
        E,
        s
      ), Ms = !0);
    }
    h(this, B) && (I = h(this, B), Q = h(this, Ne), j = Date.now(), ue = "error");
    const Rt = Ue === "fetching", Pt = ue === "pending", xt = ue === "error", Ds = Pt && Rt;
    return {
      status: ue,
      fetchStatus: Ue,
      isPending: Pt,
      isSuccess: ue === "success",
      isError: xt,
      isInitialLoading: Ds,
      isLoading: Ds,
      data: Q,
      dataUpdatedAt: _.dataUpdatedAt,
      error: I,
      errorUpdatedAt: j,
      failureCount: _.fetchFailureCount,
      failureReason: _.fetchFailureReason,
      errorUpdateCount: _.errorUpdateCount,
      isFetched: _.dataUpdateCount > 0 || _.errorUpdateCount > 0,
      isFetchedAfterMount: _.dataUpdateCount > m.dataUpdateCount || _.errorUpdateCount > m.errorUpdateCount,
      isFetching: Rt,
      isRefetching: Rt && !Pt,
      isLoadingError: xt && _.dataUpdatedAt === 0,
      isPaused: Ue === "paused",
      isPlaceholderData: Ms,
      isRefetchError: xt && _.dataUpdatedAt !== 0,
      isStale: es(t, s),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const s = h(this, C), r = this.createResult(h(this, k), this.options);
    if (T(this, we, h(this, k).state), T(this, xe, this.options), h(this, we).data !== void 0 && T(this, Ce, h(this, k)), Ut(r, s))
      return;
    T(this, C, r);
    const a = {}, i = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: n } = this.options, o = typeof n == "function" ? n() : n;
      if (o === "all" || !o && !h(this, We).size)
        return !0;
      const c = new Set(
        o ?? h(this, We)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(h(this, C)).some((m) => {
        const _ = m;
        return h(this, C)[_] !== s[_] && c.has(_);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (a.listeners = !0), P(this, _t, As).call(this, { ...a, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && P(this, Ke, Vt).call(this);
  }
}, F = new WeakMap(), k = new WeakMap(), Ze = new WeakMap(), C = new WeakMap(), we = new WeakMap(), xe = new WeakMap(), B = new WeakMap(), Qe = new WeakMap(), Ne = new WeakMap(), Ce = new WeakMap(), ve = new WeakMap(), pe = new WeakMap(), he = new WeakMap(), We = new WeakMap(), Se = new WeakSet(), He = function(t) {
  P(this, tt, zt).call(this);
  let s = h(this, k).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (s = s.catch(Ar)), s;
}, Be = new WeakSet(), Et = function() {
  if (P(this, Xe, jt).call(this), Ys || h(this, C).isStale || !bs(this.options.staleTime))
    return;
  const s = Hr(
    h(this, C).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  T(this, ve, setTimeout(() => {
    h(this, C).isStale || this.updateResult();
  }, s));
}, qe = new WeakSet(), At = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(h(this, k)) : this.options.refetchInterval) ?? !1;
}, Je = new WeakSet(), Ht = function(t) {
  P(this, et, Gt).call(this), T(this, he, t), !(Ys || this.options.enabled === !1 || !bs(h(this, he)) || h(this, he) === 0) && T(this, pe, setInterval(() => {
    (this.options.refetchIntervalInBackground || Vr.isFocused()) && P(this, Se, He).call(this);
  }, h(this, he)));
}, Ke = new WeakSet(), Vt = function() {
  P(this, Be, Et).call(this), P(this, Je, Ht).call(this, P(this, qe, At).call(this));
}, Xe = new WeakSet(), jt = function() {
  h(this, ve) && (clearTimeout(h(this, ve)), T(this, ve, void 0));
}, et = new WeakSet(), Gt = function() {
  h(this, pe) && (clearInterval(h(this, pe)), T(this, pe, void 0));
}, tt = new WeakSet(), zt = function() {
  const t = h(this, F).getQueryCache().build(h(this, F), this.options);
  if (t === h(this, k))
    return;
  const s = h(this, k);
  T(this, k, t), T(this, Ze, t.state), this.hasListeners() && (s == null || s.removeObserver(this), t.addObserver(this));
}, _t = new WeakSet(), As = function(t) {
  Es.batch(() => {
    t.listeners && this.listeners.forEach((s) => {
      s(h(this, C));
    }), h(this, F).getQueryCache().notify({
      query: h(this, k),
      type: "observerResultsUpdated"
    });
  });
}, Us);
function qr(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Rs(e, t) {
  return qr(e, t) || e.state.dataUpdatedAt > 0 && $t(e, t, t.refetchOnMount);
}
function $t(e, t, s) {
  if (t.enabled !== !1) {
    const r = typeof s == "function" ? s(e) : s;
    return r === "always" || r !== !1 && es(e, t);
  }
  return !1;
}
function Ps(e, t, s, r) {
  return s.enabled !== !1 && (e !== t || r.enabled === !1) && (!s.suspense || e.state.status !== "error") && es(e, s);
}
function es(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function Jr(e, t) {
  return !Ut(e.getCurrentResult(), t);
}
var Hs = L.createContext(!1), Kr = () => L.useContext(Hs);
Hs.Provider;
function Xr() {
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
var ea = L.createContext(Xr()), ta = () => L.useContext(ea);
function sa(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var ra = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, aa = (e) => {
  L.useEffect(() => {
    e.clearReset();
  }, [e]);
}, ia = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: s,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && sa(s, [e.error, r]), na = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Rl = (e, t) => e.isLoading && e.isFetching && !t, oa = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, la = (e, t, s) => t.fetchOptimistic(e).catch(() => {
  s.clearReset();
});
function ua(e, t, s) {
  const r = Gr(s), a = Kr(), i = ta(), n = r.defaultQueryOptions(e);
  n._optimisticResults = a ? "isRestoring" : "optimistic", na(n), ra(n, i), aa(i);
  const [o] = L.useState(
    () => new t(
      r,
      n
    )
  ), c = o.getOptimisticResult(n);
  if (L.useSyncExternalStore(
    L.useCallback(
      (m) => {
        const _ = a ? () => {
        } : o.subscribe(Es.batchCalls(m));
        return o.updateResult(), _;
      },
      [o, a]
    ),
    () => o.getCurrentResult(),
    () => o.getCurrentResult()
  ), L.useEffect(() => {
    o.setOptions(n, { listeners: !1 });
  }, [n, o]), oa(n, c))
    throw la(n, o, i);
  if (ia({
    result: c,
    errorResetBoundary: i,
    throwOnError: n.throwOnError,
    query: r.getQueryCache().get(n.queryHash)
  }))
    throw c.error;
  return n.notifyOnChangeProps ? c : o.trackResult(c);
}
function da(e, t) {
  return ua(e, Br, t);
}
const xs = ({
  children: e,
  top: t,
  className: s
}) => /* @__PURE__ */ M("div", { role: "toolbar", css: [{
  zIndex: "10",
  display: "flex",
  height: "3rem",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, t ? {
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
}], className: s, children: e }), Pl = ({
  children: e,
  header: t,
  footer: s,
  ...r
}) => /* @__PURE__ */ de("div", { css: [{
  display: "flex",
  height: "100%",
  userSelect: "text",
  flexDirection: "column"
}], ...r, children: [
  t && /* @__PURE__ */ M(xs, { top: !0, children: t }),
  /* @__PURE__ */ M("div", { css: [{
    flex: "1 1 0%",
    overflow: "auto"
  }], children: e }),
  s && /* @__PURE__ */ M(xs, { children: s })
] }), ha = ({
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
}], children: Zr(e.column.columnDef.cell, e.getContext()) }, e.id), xl = gt.memo(ha);
var ca = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "caret-down", r = 320, a = 512, i = [], n = "f0d7", o = "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faCaretDown = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(ca);
var fa = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "eye-slash", r = 640, a = 512, i = [], n = "f070", o = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faEyeSlash = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(fa);
var Vs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "arrows-rotate", r = 512, a = 512, i = [128472, "refresh", "sync"], n = "f021", o = "M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faArrowsRotate = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(Vs);
var js = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "angles-right", r = 512, a = 512, i = [187, "angle-double-right"], n = "f101", o = "M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faAnglesRight = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(js);
var Gs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "angle-right", r = 320, a = 512, i = [8250], n = "f105", o = "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faAngleRight = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(Gs);
var zs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "angle-left", r = 320, a = 512, i = [8249], n = "f104", o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faAngleLeft = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})(zs);
var $s = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "angles-left", r = 512, a = 512, i = [171, "angle-double-left"], n = "f100", o = "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      r,
      a,
      i,
      n,
      o
    ]
  }, e.faAnglesLeft = e.definition, e.prefix = t, e.iconName = s, e.width = r, e.height = a, e.ligatures = i, e.unicode = n, e.svgPathData = o, e.aliases = i;
})($s);
const ma = ({
  table: {
    refetch: e,
    recordsTotal: t = 0,
    ...s
  }
}) => {
  const r = s.getState(), {
    pagination: a
  } = r, i = L.useMemo(() => a.pageIndex * a.pageSize + (t > 0 ? 1 : 0), [a, t]), n = L.useMemo(() => Math.min(t, (a.pageIndex + 1) * a.pageSize), [a, t]);
  return /* @__PURE__ */ de("div", { css: {
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
    /* @__PURE__ */ de("div", { css: {
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
      /* @__PURE__ */ M(Oe, { onClick: () => s.setPageIndex(0), size: "small", disabled: !s.getCanPreviousPage(), children: /* @__PURE__ */ M(_e, { icon: $s.faAnglesLeft }) }),
      /* @__PURE__ */ M(Oe, { size: "small", onClick: () => s.previousPage(), disabled: !s.getCanPreviousPage(), children: /* @__PURE__ */ M(_e, { css: {
        width: "18px"
      }, icon: zs.faAngleLeft }) }),
      /* @__PURE__ */ de("span", { css: {
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
        /* @__PURE__ */ M("input", { type: "number", value: s.getState().pagination.pageIndex + 1, onChange: (o) => {
          const c = o.target.value ? Number(o.target.value) - 1 : 0;
          s.setPageIndex(c);
        }, css: {
          width: "3rem",
          borderWidth: "1px",
          padding: "0.25rem"
        } }),
        "из ",
        s.getPageCount()
      ] }),
      /* @__PURE__ */ M(Oe, { size: "small", onClick: () => s.nextPage(), disabled: !s.getCanNextPage(), children: /* @__PURE__ */ M(_e, { css: {
        width: "18px"
      }, icon: Gs.faAngleRight }) }),
      /* @__PURE__ */ M(Oe, { size: "small", onClick: () => s.setPageIndex(s.getPageCount() - 1), disabled: !s.getCanNextPage(), children: /* @__PURE__ */ M(_e, { icon: js.faAnglesRight }) }),
      e && /* @__PURE__ */ M(Oe, { size: "small", disabled: s.isFetching, onClick: e, children: /* @__PURE__ */ M(_e, { spin: s.isFetching, icon: Vs.faArrowsRotate }) })
    ] }),
    /* @__PURE__ */ de("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }, children: [
      /* @__PURE__ */ de("div", { css: {
        display: "flex",
        gap: "0.125rem"
      }, children: [
        /* @__PURE__ */ M("span", { css: {
          display: "none",
          "@container (min-width: 540px)": {
            display: "block"
          }
        }, children: "Отражаются записи" }),
        /* @__PURE__ */ de("span", { css: {
          display: "none",
          "@container (min-width: 410px)": {
            display: "block"
          }
        }, children: [
          "c ",
          i,
          " по ",
          n,
          ","
        ] }),
        /* @__PURE__ */ de("span", { css: {
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
      }, value: a.pageSize, onChange: (o) => {
        s.setPageSize(Number(o.target.value));
      }, children: [25, 50, 100].map((o) => /* @__PURE__ */ M("option", { value: o, children: o }, o)) })
    ] })
  ] });
}, Nl = gt.memo(ma), ya = () => {
  const e = zr();
  if (!e)
    throw new Error("useHttpClient must be used within a HttpContextProvider");
  return e.client;
};
function _a(e, t) {
  let s;
  typeof e == "string" ? s = {
    url: e,
    ...t
  } : s = e;
  const {
    url: r,
    params: a,
    schema: i,
    select: n,
    ...o
  } = s, c = ya();
  return da({
    queryKey: a ? [r, JSON.stringify(a)] : [r, c.defaults.headers.Authorization || ""],
    select: i ? (m) => i.parse(m) : n,
    queryFn: async ({
      signal: m
    }) => {
      const {
        data: _
      } = await c.get(r, {
        params: a,
        signal: m
      });
      return _;
    },
    ...o
  });
}
const ga = ({
  info: e,
  actions: t
}) => /* @__PURE__ */ M("div", { css: {
  display: "flex",
  gap: "0.25rem"
}, children: t.map(({
  key: s,
  icon: r,
  css: a,
  tooltip: i,
  onClick: n
}) => {
  const o = /* @__PURE__ */ M(Oe, { onClick: (c) => {
    n == null || n(e.row.original), c.stopPropagation();
  }, css: [{
    padding: "4px",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-text-opacity": "1",
      color: "rgb(75 85 99 / var(--tw-text-opacity))"
    }
  }, a], children: /* @__PURE__ */ M(_e, { icon: r }) }, s);
  return i ? /* @__PURE__ */ M(Qr, { title: i, children: o }, s) : o;
}) }), Cl = gt.memo(ga);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Zs;
function u() {
  return Zs.apply(null, arguments);
}
function wa(e) {
  Zs = e;
}
function z(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ke(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function v(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ts(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (v(e, t))
      return !1;
  return !0;
}
function W(e) {
  return e === void 0;
}
function ne(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function st(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Qs(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function ce(e, t) {
  for (var s in t)
    v(t, s) && (e[s] = t[s]);
  return v(t, "toString") && (e.toString = t.toString), v(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function K(e, t, s, r) {
  return gr(e, t, s, r, !0).utc();
}
function va() {
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
function y(e) {
  return e._pf == null && (e._pf = va()), e._pf;
}
var Zt;
Array.prototype.some ? Zt = Array.prototype.some : Zt = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function ss(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = y(e), s = Zt.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function wt(e) {
  var t = K(NaN);
  return e != null ? ce(y(t), e) : y(t).userInvalidated = !0, t;
}
var Ns = u.momentProperties = [], Wt = !1;
function rs(e, t) {
  var s, r, a, i = Ns.length;
  if (W(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), W(t._i) || (e._i = t._i), W(t._f) || (e._f = t._f), W(t._l) || (e._l = t._l), W(t._strict) || (e._strict = t._strict), W(t._tzm) || (e._tzm = t._tzm), W(t._isUTC) || (e._isUTC = t._isUTC), W(t._offset) || (e._offset = t._offset), W(t._pf) || (e._pf = y(t)), W(t._locale) || (e._locale = t._locale), i > 0)
    for (s = 0; s < i; s++)
      r = Ns[s], a = t[r], W(a) || (e[r] = a);
  return e;
}
function rt(e) {
  rs(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Wt === !1 && (Wt = !0, u.updateOffset(this), Wt = !1);
}
function $(e) {
  return e instanceof rt || e != null && e._isAMomentObject != null;
}
function Bs(e) {
  u.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function H(e, t) {
  var s = !0;
  return ce(function() {
    if (u.deprecationHandler != null && u.deprecationHandler(null, e), s) {
      var r = [], a, i, n, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (a = "", typeof arguments[i] == "object") {
          a += `
[` + i + "] ";
          for (n in arguments[0])
            v(arguments[0], n) && (a += n + ": " + arguments[0][n] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[i];
        r.push(a);
      }
      Bs(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Cs = {};
function qs(e, t) {
  u.deprecationHandler != null && u.deprecationHandler(e, t), Cs[e] || (Bs(t), Cs[e] = !0);
}
u.suppressDeprecationWarnings = !1;
u.deprecationHandler = null;
function X(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function pa(e) {
  var t, s;
  for (s in e)
    v(e, s) && (t = e[s], X(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Qt(e, t) {
  var s = ce({}, e), r;
  for (r in t)
    v(t, r) && (ke(e[r]) && ke(t[r]) ? (s[r] = {}, ce(s[r], e[r]), ce(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    v(e, r) && !v(t, r) && ke(e[r]) && (s[r] = ce({}, s[r]));
  return s;
}
function as(e) {
  e != null && this.set(e);
}
var Bt;
Object.keys ? Bt = Object.keys : Bt = function(e) {
  var t, s = [];
  for (t in e)
    v(e, t) && s.push(t);
  return s;
};
var Sa = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function ka(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return X(r) ? r.call(t, s) : r;
}
function J(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, i = e >= 0;
  return (i ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var is = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, nt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ft = {}, Te = {};
function f(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (Te[e] = a), t && (Te[t[0]] = function() {
    return J(a.apply(this, arguments), t[1], t[2]);
  }), s && (Te[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Ma(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Da(e) {
  var t = e.match(is), s, r;
  for (s = 0, r = t.length; s < r; s++)
    Te[t[s]] ? t[s] = Te[t[s]] : t[s] = Ma(t[s]);
  return function(a) {
    var i = "", n;
    for (n = 0; n < r; n++)
      i += X(t[n]) ? t[n].call(a, e) : t[n];
    return i;
  };
}
function lt(e, t) {
  return e.isValid() ? (t = Js(t, e.localeData()), Ft[t] = Ft[t] || Da(t), Ft[t](e)) : e.localeData().invalidDate();
}
function Js(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (nt.lastIndex = 0; s >= 0 && nt.test(e); )
    e = e.replace(
      nt,
      r
    ), nt.lastIndex = 0, s -= 1;
  return e;
}
var Oa = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ya(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(is).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var ba = "Invalid date";
function Ta() {
  return this._invalidDate;
}
var Ra = "%d", Pa = /\d{1,2}/;
function xa(e) {
  return this._ordinal.replace("%d", e);
}
var Na = {
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
function Ca(e, t, s, r) {
  var a = this._relativeTime[s];
  return X(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function Wa(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return X(s) ? s(t) : s.replace(/%s/i, t);
}
var Ws = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function V(e) {
  return typeof e == "string" ? Ws[e] || Ws[e.toLowerCase()] : void 0;
}
function ns(e) {
  var t = {}, s, r;
  for (r in e)
    v(e, r) && (s = V(r), s && (t[s] = e[r]));
  return t;
}
var Fa = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function La(e) {
  var t = [], s;
  for (s in e)
    v(e, s) && t.push({ unit: s, priority: Fa[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var Ks = /\d/, U = /\d\d/, Xs = /\d{3}/, os = /\d{4}/, vt = /[+-]?\d{6}/, O = /\d\d?/, er = /\d\d\d\d?/, tr = /\d\d\d\d\d\d?/, pt = /\d{1,3}/, ls = /\d{1,4}/, St = /[+-]?\d{1,6}/, Fe = /\d+/, kt = /[+-]?\d+/, Ia = /Z|[+-]\d\d:?\d\d/gi, Mt = /Z|[+-]\d\d(?::?\d\d)?/gi, Ua = /[+-]?\d+(\.\d{1,3})?/, at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Le = /^[1-9]\d?/, us = /^([1-9]\d|\d)/, ht;
ht = {};
function d(e, t, s) {
  ht[e] = X(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function Ea(e, t) {
  return v(ht, e) ? ht[e](t._strict, t._locale) : new RegExp(Aa(e));
}
function Aa(e) {
  return ae(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, i) {
        return s || r || a || i;
      }
    )
  );
}
function ae(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function A(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function g(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = A(t)), s;
}
var qt = {};
function S(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), ne(t) && (r = function(i, n) {
    n[t] = g(i);
  }), a = e.length, s = 0; s < a; s++)
    qt[e[s]] = r;
}
function it(e, t) {
  S(e, function(s, r, a, i) {
    a._w = a._w || {}, t(s, a._w, a, i);
  });
}
function Ha(e, t, s) {
  t != null && v(qt, e) && qt[e](t, s._a, s, e);
}
function Dt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var N = 0, se = 1, q = 2, x = 3, G = 4, re = 5, ge = 6, Va = 7, ja = 8;
f("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? J(e, 4) : "+" + e;
});
f(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
f(0, ["YYYY", 4], 0, "year");
f(0, ["YYYYY", 5], 0, "year");
f(0, ["YYYYYY", 6, !0], 0, "year");
d("Y", kt);
d("YY", O, U);
d("YYYY", ls, os);
d("YYYYY", St, vt);
d("YYYYYY", St, vt);
S(["YYYYY", "YYYYYY"], N);
S("YYYY", function(e, t) {
  t[N] = e.length === 2 ? u.parseTwoDigitYear(e) : g(e);
});
S("YY", function(e, t) {
  t[N] = u.parseTwoDigitYear(e);
});
S("Y", function(e, t) {
  t[N] = parseInt(e, 10);
});
function Ve(e) {
  return Dt(e) ? 366 : 365;
}
u.parseTwoDigitYear = function(e) {
  return g(e) + (g(e) > 68 ? 1900 : 2e3);
};
var sr = Ie("FullYear", !0);
function Ga() {
  return Dt(this.year());
}
function Ie(e, t) {
  return function(s) {
    return s != null ? (rr(this, e, s), u.updateOffset(this, t), this) : je(this, e);
  };
}
function je(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function rr(e, t, s) {
  var r, a, i, n, o;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    i = s, n = e.month(), o = e.date(), o = o === 29 && n === 1 && !Dt(i) ? 28 : o, a ? r.setUTCFullYear(i, n, o) : r.setFullYear(i, n, o);
  }
}
function za(e) {
  return e = V(e), X(this[e]) ? this[e]() : this;
}
function $a(e, t) {
  if (typeof e == "object") {
    e = ns(e);
    var s = La(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = V(e), X(this[e]))
    return this[e](t);
  return this;
}
function Za(e, t) {
  return (e % t + t) % t;
}
var R;
Array.prototype.indexOf ? R = Array.prototype.indexOf : R = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function ds(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Za(t, 12);
  return e += (t - s) / 12, s === 1 ? Dt(e) ? 29 : 28 : 31 - s % 7 % 2;
}
f("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
f("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
f("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
d("M", O, Le);
d("MM", O, U);
d("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
d("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
S(["M", "MM"], function(e, t) {
  t[se] = g(e) - 1;
});
S(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[se] = a : y(s).invalidMonth = e;
});
var Qa = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ar = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ir = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ba = at, qa = at;
function Ja(e, t) {
  return e ? z(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ir).test(t) ? "format" : "standalone"][e.month()] : z(this._months) ? this._months : this._months.standalone;
}
function Ka(e, t) {
  return e ? z(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ir.test(t) ? "format" : "standalone"][e.month()] : z(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Xa(e, t, s) {
  var r, a, i, n = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = K([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = R.call(this._shortMonthsParse, n), a !== -1 ? a : null) : (a = R.call(this._longMonthsParse, n), a !== -1 ? a : null) : t === "MMM" ? (a = R.call(this._shortMonthsParse, n), a !== -1 ? a : (a = R.call(this._longMonthsParse, n), a !== -1 ? a : null)) : (a = R.call(this._longMonthsParse, n), a !== -1 ? a : (a = R.call(this._shortMonthsParse, n), a !== -1 ? a : null));
}
function ei(e, t, s) {
  var r, a, i;
  if (this._monthsParseExact)
    return Xa.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = K([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function nr(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = g(t);
    else if (t = e.localeData().monthsParse(t), !ne(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, ds(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function or(e) {
  return e != null ? (nr(this, e), u.updateOffset(this, !0), this) : je(this, "Month");
}
function ti() {
  return ds(this.year(), this.month());
}
function si(e) {
  return this._monthsParseExact ? (v(this, "_monthsRegex") || lr.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (v(this, "_monthsShortRegex") || (this._monthsShortRegex = Ba), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function ri(e) {
  return this._monthsParseExact ? (v(this, "_monthsRegex") || lr.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (v(this, "_monthsRegex") || (this._monthsRegex = qa), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function lr() {
  function e(c, m) {
    return m.length - c.length;
  }
  var t = [], s = [], r = [], a, i, n, o;
  for (a = 0; a < 12; a++)
    i = K([2e3, a]), n = ae(this.monthsShort(i, "")), o = ae(this.months(i, "")), t.push(n), s.push(o), r.push(o), r.push(n);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function ai(e, t, s, r, a, i, n) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, s, r, a, i, n), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, s, r, a, i, n), o;
}
function Ge(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function ct(e, t, s) {
  var r = 7 + t - s, a = (7 + Ge(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function ur(e, t, s, r, a) {
  var i = (7 + s - r) % 7, n = ct(e, r, a), o = 1 + 7 * (t - 1) + i + n, c, m;
  return o <= 0 ? (c = e - 1, m = Ve(c) + o) : o > Ve(e) ? (c = e + 1, m = o - Ve(e)) : (c = e, m = o), {
    year: c,
    dayOfYear: m
  };
}
function ze(e, t, s) {
  var r = ct(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, n;
  return a < 1 ? (n = e.year() - 1, i = a + ie(n, t, s)) : a > ie(e.year(), t, s) ? (i = a - ie(e.year(), t, s), n = e.year() + 1) : (n = e.year(), i = a), {
    week: i,
    year: n
  };
}
function ie(e, t, s) {
  var r = ct(e, t, s), a = ct(e + 1, t, s);
  return (Ve(e) - r + a) / 7;
}
f("w", ["ww", 2], "wo", "week");
f("W", ["WW", 2], "Wo", "isoWeek");
d("w", O, Le);
d("ww", O, U);
d("W", O, Le);
d("WW", O, U);
it(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = g(e);
  }
);
function ii(e) {
  return ze(e, this._week.dow, this._week.doy).week;
}
var ni = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function oi() {
  return this._week.dow;
}
function li() {
  return this._week.doy;
}
function ui(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function di(e) {
  var t = ze(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
f("d", 0, "do", "day");
f("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
f("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
f("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
f("e", 0, 0, "weekday");
f("E", 0, 0, "isoWeekday");
d("d", O);
d("e", O);
d("E", O);
d("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
d("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
d("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
it(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : y(s).invalidWeekday = e;
});
it(["d", "e", "E"], function(e, t, s, r) {
  t[r] = g(e);
});
function hi(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function ci(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function hs(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var fi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), dr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), mi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), yi = at, _i = at, gi = at;
function wi(e, t) {
  var s = z(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? hs(s, this._week.dow) : e ? s[e.day()] : s;
}
function vi(e) {
  return e === !0 ? hs(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function pi(e) {
  return e === !0 ? hs(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Si(e, t, s) {
  var r, a, i, n = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = K([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = R.call(this._weekdaysParse, n), a !== -1 ? a : null) : t === "ddd" ? (a = R.call(this._shortWeekdaysParse, n), a !== -1 ? a : null) : (a = R.call(this._minWeekdaysParse, n), a !== -1 ? a : null) : t === "dddd" ? (a = R.call(this._weekdaysParse, n), a !== -1 || (a = R.call(this._shortWeekdaysParse, n), a !== -1) ? a : (a = R.call(this._minWeekdaysParse, n), a !== -1 ? a : null)) : t === "ddd" ? (a = R.call(this._shortWeekdaysParse, n), a !== -1 || (a = R.call(this._weekdaysParse, n), a !== -1) ? a : (a = R.call(this._minWeekdaysParse, n), a !== -1 ? a : null)) : (a = R.call(this._minWeekdaysParse, n), a !== -1 || (a = R.call(this._weekdaysParse, n), a !== -1) ? a : (a = R.call(this._shortWeekdaysParse, n), a !== -1 ? a : null));
}
function ki(e, t, s) {
  var r, a, i;
  if (this._weekdaysParseExact)
    return Si.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = K([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Mi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = je(this, "Day");
  return e != null ? (e = hi(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Di(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Oi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = ci(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Yi(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || cs.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (v(this, "_weekdaysRegex") || (this._weekdaysRegex = yi), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function bi(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || cs.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (v(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = _i), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ti(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || cs.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (v(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = gi), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function cs() {
  function e(_, I) {
    return I.length - _.length;
  }
  var t = [], s = [], r = [], a = [], i, n, o, c, m;
  for (i = 0; i < 7; i++)
    n = K([2e3, 1]).day(i), o = ae(this.weekdaysMin(n, "")), c = ae(this.weekdaysShort(n, "")), m = ae(this.weekdays(n, "")), t.push(o), s.push(c), r.push(m), a.push(o), a.push(c), a.push(m);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function fs() {
  return this.hours() % 12 || 12;
}
function Ri() {
  return this.hours() || 24;
}
f("H", ["HH", 2], 0, "hour");
f("h", ["hh", 2], 0, fs);
f("k", ["kk", 2], 0, Ri);
f("hmm", 0, 0, function() {
  return "" + fs.apply(this) + J(this.minutes(), 2);
});
f("hmmss", 0, 0, function() {
  return "" + fs.apply(this) + J(this.minutes(), 2) + J(this.seconds(), 2);
});
f("Hmm", 0, 0, function() {
  return "" + this.hours() + J(this.minutes(), 2);
});
f("Hmmss", 0, 0, function() {
  return "" + this.hours() + J(this.minutes(), 2) + J(this.seconds(), 2);
});
function hr(e, t) {
  f(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
hr("a", !0);
hr("A", !1);
function cr(e, t) {
  return t._meridiemParse;
}
d("a", cr);
d("A", cr);
d("H", O, us);
d("h", O, Le);
d("k", O, Le);
d("HH", O, U);
d("hh", O, U);
d("kk", O, U);
d("hmm", er);
d("hmmss", tr);
d("Hmm", er);
d("Hmmss", tr);
S(["H", "HH"], x);
S(["k", "kk"], function(e, t, s) {
  var r = g(e);
  t[x] = r === 24 ? 0 : r;
});
S(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
S(["h", "hh"], function(e, t, s) {
  t[x] = g(e), y(s).bigHour = !0;
});
S("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[x] = g(e.substr(0, r)), t[G] = g(e.substr(r)), y(s).bigHour = !0;
});
S("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[x] = g(e.substr(0, r)), t[G] = g(e.substr(r, 2)), t[re] = g(e.substr(a)), y(s).bigHour = !0;
});
S("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[x] = g(e.substr(0, r)), t[G] = g(e.substr(r));
});
S("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[x] = g(e.substr(0, r)), t[G] = g(e.substr(r, 2)), t[re] = g(e.substr(a));
});
function Pi(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var xi = /[ap]\.?m?\.?/i, Ni = Ie("Hours", !0);
function Ci(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var fr = {
  calendar: Sa,
  longDateFormat: Oa,
  invalidDate: ba,
  ordinal: Ra,
  dayOfMonthOrdinalParse: Pa,
  relativeTime: Na,
  months: Qa,
  monthsShort: ar,
  week: ni,
  weekdays: fi,
  weekdaysMin: mi,
  weekdaysShort: dr,
  meridiemParse: xi
}, b = {}, Ee = {}, $e;
function Wi(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function Fs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Fi(e) {
  for (var t = 0, s, r, a, i; t < e.length; ) {
    for (i = Fs(e[t]).split("-"), s = i.length, r = Fs(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = Ot(i.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && Wi(i, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return $e;
}
function Li(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Ot(e) {
  var t = null, s;
  if (b[e] === void 0 && typeof module < "u" && module && module.exports && Li(e))
    try {
      t = $e._abbr, s = require, s("./locale/" + e), me(t);
    } catch {
      b[e] = null;
    }
  return b[e];
}
function me(e, t) {
  var s;
  return e && (W(t) ? s = oe(e) : s = ms(e, t), s ? $e = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), $e._abbr;
}
function ms(e, t) {
  if (t !== null) {
    var s, r = fr;
    if (t.abbr = e, b[e] != null)
      qs(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = b[e]._config;
    else if (t.parentLocale != null)
      if (b[t.parentLocale] != null)
        r = b[t.parentLocale]._config;
      else if (s = Ot(t.parentLocale), s != null)
        r = s._config;
      else
        return Ee[t.parentLocale] || (Ee[t.parentLocale] = []), Ee[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return b[e] = new as(Qt(r, t)), Ee[e] && Ee[e].forEach(function(a) {
      ms(a.name, a.config);
    }), me(e), b[e];
  } else
    return delete b[e], null;
}
function Ii(e, t) {
  if (t != null) {
    var s, r, a = fr;
    b[e] != null && b[e].parentLocale != null ? b[e].set(Qt(b[e]._config, t)) : (r = Ot(e), r != null && (a = r._config), t = Qt(a, t), r == null && (t.abbr = e), s = new as(t), s.parentLocale = b[e], b[e] = s), me(e);
  } else
    b[e] != null && (b[e].parentLocale != null ? (b[e] = b[e].parentLocale, e === me() && me(e)) : b[e] != null && delete b[e]);
  return b[e];
}
function oe(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return $e;
  if (!z(e)) {
    if (t = Ot(e), t)
      return t;
    e = [e];
  }
  return Fi(e);
}
function Ui() {
  return Bt(b);
}
function ys(e) {
  var t, s = e._a;
  return s && y(e).overflow === -2 && (t = s[se] < 0 || s[se] > 11 ? se : s[q] < 1 || s[q] > ds(s[N], s[se]) ? q : s[x] < 0 || s[x] > 24 || s[x] === 24 && (s[G] !== 0 || s[re] !== 0 || s[ge] !== 0) ? x : s[G] < 0 || s[G] > 59 ? G : s[re] < 0 || s[re] > 59 ? re : s[ge] < 0 || s[ge] > 999 ? ge : -1, y(e)._overflowDayOfYear && (t < N || t > q) && (t = q), y(e)._overflowWeeks && t === -1 && (t = Va), y(e)._overflowWeekday && t === -1 && (t = ja), y(e).overflow = t), e;
}
var Ei = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ai = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Hi = /Z|[+-]\d\d(?::?\d\d)?/, ot = [
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
], Lt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Vi = /^\/?Date\((-?\d+)/i, ji = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Gi = {
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
function mr(e) {
  var t, s, r = e._i, a = Ei.exec(r) || Ai.exec(r), i, n, o, c, m = ot.length, _ = Lt.length;
  if (a) {
    for (y(e).iso = !0, t = 0, s = m; t < s; t++)
      if (ot[t][1].exec(a[1])) {
        n = ot[t][0], i = ot[t][2] !== !1;
        break;
      }
    if (n == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = _; t < s; t++)
        if (Lt[t][1].exec(a[3])) {
          o = (a[2] || " ") + Lt[t][0];
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
    if (a[4])
      if (Hi.exec(a[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = n + (o || "") + (c || ""), gs(e);
  } else
    e._isValid = !1;
}
function zi(e, t, s, r, a, i) {
  var n = [
    $i(e),
    ar.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return i && n.push(parseInt(i, 10)), n;
}
function $i(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Zi(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Qi(e, t, s) {
  if (e) {
    var r = dr.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return y(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Bi(e, t, s) {
  if (e)
    return Gi[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, i = (r - a) / 100;
  return i * 60 + a;
}
function yr(e) {
  var t = ji.exec(Zi(e._i)), s;
  if (t) {
    if (s = zi(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Qi(t[1], s, e))
      return;
    e._a = s, e._tzm = Bi(t[8], t[9], t[10]), e._d = Ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), y(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function qi(e) {
  var t = Vi.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (mr(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (yr(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : u.createFromInputFallback(e);
}
u.createFromInputFallback = H(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ye(e, t, s) {
  return e ?? t ?? s;
}
function Ji(e) {
  var t = new Date(u.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function _s(e) {
  var t, s, r = [], a, i, n;
  if (!e._d) {
    for (a = Ji(e), e._w && e._a[q] == null && e._a[se] == null && Ki(e), e._dayOfYear != null && (n = Ye(e._a[N], a[N]), (e._dayOfYear > Ve(n) || e._dayOfYear === 0) && (y(e)._overflowDayOfYear = !0), s = Ge(n, 0, e._dayOfYear), e._a[se] = s.getUTCMonth(), e._a[q] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[x] === 24 && e._a[G] === 0 && e._a[re] === 0 && e._a[ge] === 0 && (e._nextDay = !0, e._a[x] = 0), e._d = (e._useUTC ? Ge : ai).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[x] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (y(e).weekdayMismatch = !0);
  }
}
function Ki(e) {
  var t, s, r, a, i, n, o, c, m;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, n = 4, s = Ye(
    t.GG,
    e._a[N],
    ze(D(), 1, 4).year
  ), r = Ye(t.W, 1), a = Ye(t.E, 1), (a < 1 || a > 7) && (c = !0)) : (i = e._locale._week.dow, n = e._locale._week.doy, m = ze(D(), i, n), s = Ye(t.gg, e._a[N], m.year), r = Ye(t.w, m.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (c = !0)) : t.e != null ? (a = t.e + i, (t.e < 0 || t.e > 6) && (c = !0)) : a = i), r < 1 || r > ie(s, i, n) ? y(e)._overflowWeeks = !0 : c != null ? y(e)._overflowWeekday = !0 : (o = ur(s, r, a, i, n), e._a[N] = o.year, e._dayOfYear = o.dayOfYear);
}
u.ISO_8601 = function() {
};
u.RFC_2822 = function() {
};
function gs(e) {
  if (e._f === u.ISO_8601) {
    mr(e);
    return;
  }
  if (e._f === u.RFC_2822) {
    yr(e);
    return;
  }
  e._a = [], y(e).empty = !0;
  var t = "" + e._i, s, r, a, i, n, o = t.length, c = 0, m, _;
  for (a = Js(e._f, e._locale).match(is) || [], _ = a.length, s = 0; s < _; s++)
    i = a[s], r = (t.match(Ea(i, e)) || [])[0], r && (n = t.substr(0, t.indexOf(r)), n.length > 0 && y(e).unusedInput.push(n), t = t.slice(
      t.indexOf(r) + r.length
    ), c += r.length), Te[i] ? (r ? y(e).empty = !1 : y(e).unusedTokens.push(i), Ha(i, r, e)) : e._strict && !r && y(e).unusedTokens.push(i);
  y(e).charsLeftOver = o - c, t.length > 0 && y(e).unusedInput.push(t), e._a[x] <= 12 && y(e).bigHour === !0 && e._a[x] > 0 && (y(e).bigHour = void 0), y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[x] = Xi(
    e._locale,
    e._a[x],
    e._meridiem
  ), m = y(e).era, m !== null && (e._a[N] = e._locale.erasConvertYear(m, e._a[N])), _s(e), ys(e);
}
function Xi(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function en(e) {
  var t, s, r, a, i, n, o = !1, c = e._f.length;
  if (c === 0) {
    y(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < c; a++)
    i = 0, n = !1, t = rs({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], gs(t), ss(t) && (n = !0), i += y(t).charsLeftOver, i += y(t).unusedTokens.length * 10, y(t).score = i, o ? i < r && (r = i, s = t) : (r == null || i < r || n) && (r = i, s = t, n && (o = !0));
  ce(e, s || t);
}
function tn(e) {
  if (!e._d) {
    var t = ns(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Qs(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), _s(e);
  }
}
function sn(e) {
  var t = new rt(ys(_r(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function _r(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || oe(e._l), t === null || s === void 0 && t === "" ? wt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), $(t) ? new rt(ys(t)) : (st(t) ? e._d = t : z(s) ? en(e) : s ? gs(e) : rn(e), ss(e) || (e._d = null), e));
}
function rn(e) {
  var t = e._i;
  W(t) ? e._d = new Date(u.now()) : st(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? qi(e) : z(t) ? (e._a = Qs(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), _s(e)) : ke(t) ? tn(e) : ne(t) ? e._d = new Date(t) : u.createFromInputFallback(e);
}
function gr(e, t, s, r, a) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ke(e) && ts(e) || z(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = a, i._l = s, i._i = e, i._f = t, i._strict = r, sn(i);
}
function D(e, t, s, r) {
  return gr(e, t, s, r, !1);
}
var an = H(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = D.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : wt();
  }
), nn = H(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = D.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : wt();
  }
);
function wr(e, t) {
  var s, r;
  if (t.length === 1 && z(t[0]) && (t = t[0]), !t.length)
    return D();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function on() {
  var e = [].slice.call(arguments, 0);
  return wr("isBefore", e);
}
function ln() {
  var e = [].slice.call(arguments, 0);
  return wr("isAfter", e);
}
var un = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ae = [
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
function dn(e) {
  var t, s = !1, r, a = Ae.length;
  for (t in e)
    if (v(e, t) && !(R.call(Ae, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[Ae[r]]) {
      if (s)
        return !1;
      parseFloat(e[Ae[r]]) !== g(e[Ae[r]]) && (s = !0);
    }
  return !0;
}
function hn() {
  return this._isValid;
}
function cn() {
  return Z(NaN);
}
function Yt(e) {
  var t = ns(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, i = t.week || t.isoWeek || 0, n = t.day || 0, o = t.hour || 0, c = t.minute || 0, m = t.second || 0, _ = t.millisecond || 0;
  this._isValid = dn(t), this._milliseconds = +_ + m * 1e3 + // 1000
  c * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +n + i * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = oe(), this._bubble();
}
function ut(e) {
  return e instanceof Yt;
}
function Jt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function fn(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), i = 0, n;
  for (n = 0; n < r; n++)
    (s && e[n] !== t[n] || !s && g(e[n]) !== g(t[n])) && i++;
  return i + a;
}
function vr(e, t) {
  f(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + J(~~(s / 60), 2) + t + J(~~s % 60, 2);
  });
}
vr("Z", ":");
vr("ZZ", "");
d("Z", Mt);
d("ZZ", Mt);
S(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = ws(Mt, e);
});
var mn = /([\+\-]|\d\d)/gi;
function ws(e, t) {
  var s = (t || "").match(e), r, a, i;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(mn) || ["-", 0, 0], i = +(a[1] * 60) + g(a[2]), i === 0 ? 0 : a[0] === "+" ? i : -i);
}
function vs(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = ($(e) || st(e) ? e.valueOf() : D(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), u.updateOffset(s, !1), s) : D(e).local();
}
function Kt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
u.updateOffset = function() {
};
function yn(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ws(Mt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = Kt(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? kr(
      this,
      Z(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, u.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Kt(this);
}
function _n(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function gn(e) {
  return this.utcOffset(0, e);
}
function wn(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Kt(this), "m")), this;
}
function vn() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ws(Ia, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function pn(e) {
  return this.isValid() ? (e = e ? D(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Sn() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function kn() {
  if (!W(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return rs(e, this), e = _r(e), e._a ? (t = e._isUTC ? K(e._a) : D(e._a), this._isDSTShifted = this.isValid() && fn(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Mn() {
  return this.isValid() ? !this._isUTC : !1;
}
function Dn() {
  return this.isValid() ? this._isUTC : !1;
}
function pr() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var On = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Yn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Z(e, t) {
  var s = e, r = null, a, i, n;
  return ut(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ne(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = On.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: g(r[q]) * a,
    h: g(r[x]) * a,
    m: g(r[G]) * a,
    s: g(r[re]) * a,
    ms: g(Jt(r[ge] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = Yn.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: ye(r[2], a),
    M: ye(r[3], a),
    w: ye(r[4], a),
    d: ye(r[5], a),
    h: ye(r[6], a),
    m: ye(r[7], a),
    s: ye(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (n = bn(
    D(s.from),
    D(s.to)
  ), s = {}, s.ms = n.milliseconds, s.M = n.months), i = new Yt(s), ut(e) && v(e, "_locale") && (i._locale = e._locale), ut(e) && v(e, "_isValid") && (i._isValid = e._isValid), i;
}
Z.fn = Yt.prototype;
Z.invalid = cn;
function ye(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Ls(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function bn(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = vs(t, e), e.isBefore(t) ? s = Ls(e, t) : (s = Ls(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Sr(e, t) {
  return function(s, r) {
    var a, i;
    return r !== null && !isNaN(+r) && (qs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = s, s = r, r = i), a = Z(s, r), kr(this, a, e), this;
  };
}
function kr(e, t, s, r) {
  var a = t._milliseconds, i = Jt(t._days), n = Jt(t._months);
  e.isValid() && (r = r ?? !0, n && nr(e, je(e, "Month") + n * s), i && rr(e, "Date", je(e, "Date") + i * s), a && e._d.setTime(e._d.valueOf() + a * s), r && u.updateOffset(e, i || n));
}
var Tn = Sr(1, "add"), Rn = Sr(-1, "subtract");
function Mr(e) {
  return typeof e == "string" || e instanceof String;
}
function Pn(e) {
  return $(e) || st(e) || Mr(e) || ne(e) || Nn(e) || xn(e) || e === null || e === void 0;
}
function xn(e) {
  var t = ke(e) && !ts(e), s = !1, r = [
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
  ], a, i, n = r.length;
  for (a = 0; a < n; a += 1)
    i = r[a], s = s || v(e, i);
  return t && s;
}
function Nn(e) {
  var t = z(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !ne(r) && Mr(e);
  }).length === 0), t && s;
}
function Cn(e) {
  var t = ke(e) && !ts(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, i;
  for (a = 0; a < r.length; a += 1)
    i = r[a], s = s || v(e, i);
  return t && s;
}
function Wn(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Fn(e, t) {
  arguments.length === 1 && (arguments[0] ? Pn(arguments[0]) ? (e = arguments[0], t = void 0) : Cn(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || D(), r = vs(s, this).startOf("day"), a = u.calendarFormat(this, r) || "sameElse", i = t && (X(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    i || this.localeData().calendar(a, this, D(s))
  );
}
function Ln() {
  return new rt(this);
}
function In(e, t) {
  var s = $(e) ? e : D(e);
  return this.isValid() && s.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Un(e, t) {
  var s = $(e) ? e : D(e);
  return this.isValid() && s.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function En(e, t, s, r) {
  var a = $(e) ? e : D(e), i = $(t) ? t : D(t);
  return this.isValid() && a.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(i, s) : !this.isAfter(i, s))) : !1;
}
function An(e, t) {
  var s = $(e) ? e : D(e), r;
  return this.isValid() && s.isValid() ? (t = V(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Hn(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Vn(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function jn(e, t, s) {
  var r, a, i;
  if (!this.isValid())
    return NaN;
  if (r = vs(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = V(t), t) {
    case "year":
      i = dt(this, r) / 12;
      break;
    case "month":
      i = dt(this, r);
      break;
    case "quarter":
      i = dt(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    case "minute":
      i = (this - r) / 6e4;
      break;
    case "hour":
      i = (this - r) / 36e5;
      break;
    case "day":
      i = (this - r - a) / 864e5;
      break;
    case "week":
      i = (this - r - a) / 6048e5;
      break;
    default:
      i = this - r;
  }
  return s ? i : A(i);
}
function dt(e, t) {
  if (e.date() < t.date())
    return -dt(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, i;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), i = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), i = (t - r) / (a - r)), -(s + i) || 0;
}
u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
u.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Gn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function zn(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? lt(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : X(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", lt(s, "Z")) : lt(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function $n() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(s + r + a + i);
}
function Zn(e) {
  e || (e = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat);
  var t = lt(this, e);
  return this.localeData().postformat(t);
}
function Qn(e, t) {
  return this.isValid() && ($(e) && e.isValid() || D(e).isValid()) ? Z({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Bn(e) {
  return this.from(D(), e);
}
function qn(e, t) {
  return this.isValid() && ($(e) && e.isValid() || D(e).isValid()) ? Z({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Jn(e) {
  return this.to(D(), e);
}
function Dr(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = oe(e), t != null && (this._locale = t), this);
}
var Or = H(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Yr() {
  return this._locale;
}
var ft = 1e3, Re = 60 * ft, mt = 60 * Re, br = (365 * 400 + 97) * 24 * mt;
function Pe(e, t) {
  return (e % t + t) % t;
}
function Tr(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - br : new Date(e, t, s).valueOf();
}
function Rr(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - br : Date.UTC(e, t, s);
}
function Kn(e) {
  var t, s;
  if (e = V(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Rr : Tr, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Pe(
        t + (this._isUTC ? 0 : this.utcOffset() * Re),
        mt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Pe(t, Re);
      break;
    case "second":
      t = this._d.valueOf(), t -= Pe(t, ft);
      break;
  }
  return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function Xn(e) {
  var t, s;
  if (e = V(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Rr : Tr, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += mt - Pe(
        t + (this._isUTC ? 0 : this.utcOffset() * Re),
        mt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Re - Pe(t, Re) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += ft - Pe(t, ft) - 1;
      break;
  }
  return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function eo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function to() {
  return Math.floor(this.valueOf() / 1e3);
}
function so() {
  return new Date(this.valueOf());
}
function ro() {
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
function ao() {
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
function io() {
  return this.isValid() ? this.toISOString() : null;
}
function no() {
  return ss(this);
}
function oo() {
  return ce({}, y(this));
}
function lo() {
  return y(this).overflow;
}
function uo() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
f("N", 0, 0, "eraAbbr");
f("NN", 0, 0, "eraAbbr");
f("NNN", 0, 0, "eraAbbr");
f("NNNN", 0, 0, "eraName");
f("NNNNN", 0, 0, "eraNarrow");
f("y", ["y", 1], "yo", "eraYear");
f("y", ["yy", 2], 0, "eraYear");
f("y", ["yyy", 3], 0, "eraYear");
f("y", ["yyyy", 4], 0, "eraYear");
d("N", ps);
d("NN", ps);
d("NNN", ps);
d("NNNN", So);
d("NNNNN", ko);
S(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? y(s).era = a : y(s).invalidEra = e;
  }
);
d("y", Fe);
d("yy", Fe);
d("yyy", Fe);
d("yyyy", Fe);
d("yo", Mo);
S(["y", "yy", "yyy", "yyyy"], N);
S(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[N] = s._locale.eraYearOrdinalParse(e, a) : t[N] = parseInt(e, 10);
});
function ho(e, t) {
  var s, r, a, i = this._eras || oe("en")._eras;
  for (s = 0, r = i.length; s < r; ++s) {
    switch (typeof i[s].since) {
      case "string":
        a = u(i[s].since).startOf("day"), i[s].since = a.valueOf();
        break;
    }
    switch (typeof i[s].until) {
      case "undefined":
        i[s].until = 1 / 0;
        break;
      case "string":
        a = u(i[s].until).startOf("day").valueOf(), i[s].until = a.valueOf();
        break;
    }
  }
  return i;
}
function co(e, t, s) {
  var r, a, i = this.eras(), n, o, c;
  for (e = e.toUpperCase(), r = 0, a = i.length; r < a; ++r)
    if (n = i[r].name.toUpperCase(), o = i[r].abbr.toUpperCase(), c = i[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[r];
          break;
        case "NNNN":
          if (n === e)
            return i[r];
          break;
        case "NNNNN":
          if (c === e)
            return i[r];
          break;
      }
    else if ([n, o, c].indexOf(e) >= 0)
      return i[r];
}
function fo(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? u(e.since).year() : u(e.since).year() + (t - e.offset) * s;
}
function mo() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function yo() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function _o() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function go() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - u(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function wo(e) {
  return v(this, "_erasNameRegex") || Ss.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function vo(e) {
  return v(this, "_erasAbbrRegex") || Ss.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function po(e) {
  return v(this, "_erasNarrowRegex") || Ss.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ps(e, t) {
  return t.erasAbbrRegex(e);
}
function So(e, t) {
  return t.erasNameRegex(e);
}
function ko(e, t) {
  return t.erasNarrowRegex(e);
}
function Mo(e, t) {
  return t._eraYearOrdinalRegex || Fe;
}
function Ss() {
  var e = [], t = [], s = [], r = [], a, i, n, o, c, m = this.eras();
  for (a = 0, i = m.length; a < i; ++a)
    n = ae(m[a].name), o = ae(m[a].abbr), c = ae(m[a].narrow), t.push(n), e.push(o), s.push(c), r.push(n), r.push(o), r.push(c);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
f(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
f(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function bt(e, t) {
  f(0, [e, e.length], 0, t);
}
bt("gggg", "weekYear");
bt("ggggg", "weekYear");
bt("GGGG", "isoWeekYear");
bt("GGGGG", "isoWeekYear");
d("G", kt);
d("g", kt);
d("GG", O, U);
d("gg", O, U);
d("GGGG", ls, os);
d("gggg", ls, os);
d("GGGGG", St, vt);
d("ggggg", St, vt);
it(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = g(e);
  }
);
it(["gg", "GG"], function(e, t, s, r) {
  t[r] = u.parseTwoDigitYear(e);
});
function Do(e) {
  return Pr.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Oo(e) {
  return Pr.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Yo() {
  return ie(this.year(), 1, 4);
}
function bo() {
  return ie(this.isoWeekYear(), 1, 4);
}
function To() {
  var e = this.localeData()._week;
  return ie(this.year(), e.dow, e.doy);
}
function Ro() {
  var e = this.localeData()._week;
  return ie(this.weekYear(), e.dow, e.doy);
}
function Pr(e, t, s, r, a) {
  var i;
  return e == null ? ze(this, r, a).year : (i = ie(e, r, a), t > i && (t = i), Po.call(this, e, t, s, r, a));
}
function Po(e, t, s, r, a) {
  var i = ur(e, t, s, r, a), n = Ge(i.year, 0, i.dayOfYear);
  return this.year(n.getUTCFullYear()), this.month(n.getUTCMonth()), this.date(n.getUTCDate()), this;
}
f("Q", 0, "Qo", "quarter");
d("Q", Ks);
S("Q", function(e, t) {
  t[se] = (g(e) - 1) * 3;
});
function xo(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
f("D", ["DD", 2], "Do", "date");
d("D", O, Le);
d("DD", O, U);
d("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
S(["D", "DD"], q);
S("Do", function(e, t) {
  t[q] = g(e.match(O)[0]);
});
var xr = Ie("Date", !0);
f("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
d("DDD", pt);
d("DDDD", Xs);
S(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = g(e);
});
function No(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
f("m", ["mm", 2], 0, "minute");
d("m", O, us);
d("mm", O, U);
S(["m", "mm"], G);
var Co = Ie("Minutes", !1);
f("s", ["ss", 2], 0, "second");
d("s", O, us);
d("ss", O, U);
S(["s", "ss"], re);
var Wo = Ie("Seconds", !1);
f("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
f(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
f(0, ["SSS", 3], 0, "millisecond");
f(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
f(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
f(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
f(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
f(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
f(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
d("S", pt, Ks);
d("SS", pt, U);
d("SSS", pt, Xs);
var fe, Nr;
for (fe = "SSSS"; fe.length <= 9; fe += "S")
  d(fe, Fe);
function Fo(e, t) {
  t[ge] = g(("0." + e) * 1e3);
}
for (fe = "S"; fe.length <= 9; fe += "S")
  S(fe, Fo);
Nr = Ie("Milliseconds", !1);
f("z", 0, 0, "zoneAbbr");
f("zz", 0, 0, "zoneName");
function Lo() {
  return this._isUTC ? "UTC" : "";
}
function Io() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = rt.prototype;
l.add = Tn;
l.calendar = Fn;
l.clone = Ln;
l.diff = jn;
l.endOf = Xn;
l.format = Zn;
l.from = Qn;
l.fromNow = Bn;
l.to = qn;
l.toNow = Jn;
l.get = za;
l.invalidAt = lo;
l.isAfter = In;
l.isBefore = Un;
l.isBetween = En;
l.isSame = An;
l.isSameOrAfter = Hn;
l.isSameOrBefore = Vn;
l.isValid = no;
l.lang = Or;
l.locale = Dr;
l.localeData = Yr;
l.max = nn;
l.min = an;
l.parsingFlags = oo;
l.set = $a;
l.startOf = Kn;
l.subtract = Rn;
l.toArray = ro;
l.toObject = ao;
l.toDate = so;
l.toISOString = zn;
l.inspect = $n;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = io;
l.toString = Gn;
l.unix = to;
l.valueOf = eo;
l.creationData = uo;
l.eraName = mo;
l.eraNarrow = yo;
l.eraAbbr = _o;
l.eraYear = go;
l.year = sr;
l.isLeapYear = Ga;
l.weekYear = Do;
l.isoWeekYear = Oo;
l.quarter = l.quarters = xo;
l.month = or;
l.daysInMonth = ti;
l.week = l.weeks = ui;
l.isoWeek = l.isoWeeks = di;
l.weeksInYear = To;
l.weeksInWeekYear = Ro;
l.isoWeeksInYear = Yo;
l.isoWeeksInISOWeekYear = bo;
l.date = xr;
l.day = l.days = Mi;
l.weekday = Di;
l.isoWeekday = Oi;
l.dayOfYear = No;
l.hour = l.hours = Ni;
l.minute = l.minutes = Co;
l.second = l.seconds = Wo;
l.millisecond = l.milliseconds = Nr;
l.utcOffset = yn;
l.utc = gn;
l.local = wn;
l.parseZone = vn;
l.hasAlignedHourOffset = pn;
l.isDST = Sn;
l.isLocal = Mn;
l.isUtcOffset = Dn;
l.isUtc = pr;
l.isUTC = pr;
l.zoneAbbr = Lo;
l.zoneName = Io;
l.dates = H(
  "dates accessor is deprecated. Use date instead.",
  xr
);
l.months = H(
  "months accessor is deprecated. Use month instead",
  or
);
l.years = H(
  "years accessor is deprecated. Use year instead",
  sr
);
l.zone = H(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  _n
);
l.isDSTShifted = H(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  kn
);
function Uo(e) {
  return D(e * 1e3);
}
function Eo() {
  return D.apply(null, arguments).parseZone();
}
function Cr(e) {
  return e;
}
var p = as.prototype;
p.calendar = ka;
p.longDateFormat = Ya;
p.invalidDate = Ta;
p.ordinal = xa;
p.preparse = Cr;
p.postformat = Cr;
p.relativeTime = Ca;
p.pastFuture = Wa;
p.set = pa;
p.eras = ho;
p.erasParse = co;
p.erasConvertYear = fo;
p.erasAbbrRegex = vo;
p.erasNameRegex = wo;
p.erasNarrowRegex = po;
p.months = Ja;
p.monthsShort = Ka;
p.monthsParse = ei;
p.monthsRegex = ri;
p.monthsShortRegex = si;
p.week = ii;
p.firstDayOfYear = li;
p.firstDayOfWeek = oi;
p.weekdays = wi;
p.weekdaysMin = pi;
p.weekdaysShort = vi;
p.weekdaysParse = ki;
p.weekdaysRegex = Yi;
p.weekdaysShortRegex = bi;
p.weekdaysMinRegex = Ti;
p.isPM = Pi;
p.meridiem = Ci;
function yt(e, t, s, r) {
  var a = oe(), i = K().set(r, t);
  return a[s](i, e);
}
function Wr(e, t, s) {
  if (ne(e) && (t = e, e = void 0), e = e || "", t != null)
    return yt(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = yt(e, r, s, "month");
  return a;
}
function ks(e, t, s, r) {
  typeof e == "boolean" ? (ne(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, ne(t) && (s = t, t = void 0), t = t || "");
  var a = oe(), i = e ? a._week.dow : 0, n, o = [];
  if (s != null)
    return yt(t, (s + i) % 7, r, "day");
  for (n = 0; n < 7; n++)
    o[n] = yt(t, (n + i) % 7, r, "day");
  return o;
}
function Ao(e, t) {
  return Wr(e, t, "months");
}
function Ho(e, t) {
  return Wr(e, t, "monthsShort");
}
function Vo(e, t, s) {
  return ks(e, t, s, "weekdays");
}
function jo(e, t, s) {
  return ks(e, t, s, "weekdaysShort");
}
function Go(e, t, s) {
  return ks(e, t, s, "weekdaysMin");
}
me("en", {
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
    var t = e % 10, s = g(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
u.lang = H(
  "moment.lang is deprecated. Use moment.locale instead.",
  me
);
u.langData = H(
  "moment.langData is deprecated. Use moment.localeData instead.",
  oe
);
var ee = Math.abs;
function zo() {
  var e = this._data;
  return this._milliseconds = ee(this._milliseconds), this._days = ee(this._days), this._months = ee(this._months), e.milliseconds = ee(e.milliseconds), e.seconds = ee(e.seconds), e.minutes = ee(e.minutes), e.hours = ee(e.hours), e.months = ee(e.months), e.years = ee(e.years), this;
}
function Fr(e, t, s, r) {
  var a = Z(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function $o(e, t) {
  return Fr(this, e, t, 1);
}
function Zo(e, t) {
  return Fr(this, e, t, -1);
}
function Is(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Qo() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, i, n, o, c;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Is(Xt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = A(e / 1e3), r.seconds = a % 60, i = A(a / 60), r.minutes = i % 60, n = A(i / 60), r.hours = n % 24, t += A(n / 24), c = A(Lr(t)), s += c, t -= Is(Xt(c)), o = A(s / 12), s %= 12, r.days = t, r.months = s, r.years = o, this;
}
function Lr(e) {
  return e * 4800 / 146097;
}
function Xt(e) {
  return e * 146097 / 4800;
}
function Bo(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = V(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Lr(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(Xt(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function le(e) {
  return function() {
    return this.as(e);
  };
}
var Ir = le("ms"), qo = le("s"), Jo = le("m"), Ko = le("h"), Xo = le("d"), el = le("w"), tl = le("M"), sl = le("Q"), rl = le("y"), al = Ir;
function il() {
  return Z(this);
}
function nl(e) {
  return e = V(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Me(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var ol = Me("milliseconds"), ll = Me("seconds"), ul = Me("minutes"), dl = Me("hours"), hl = Me("days"), cl = Me("months"), fl = Me("years");
function ml() {
  return A(this.days() / 7);
}
var te = Math.round, be = {
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
function yl(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function _l(e, t, s, r) {
  var a = Z(e).abs(), i = te(a.as("s")), n = te(a.as("m")), o = te(a.as("h")), c = te(a.as("d")), m = te(a.as("M")), _ = te(a.as("w")), I = te(a.as("y")), j = i <= s.ss && ["s", i] || i < s.s && ["ss", i] || n <= 1 && ["m"] || n < s.m && ["mm", n] || o <= 1 && ["h"] || o < s.h && ["hh", o] || c <= 1 && ["d"] || c < s.d && ["dd", c];
  return s.w != null && (j = j || _ <= 1 && ["w"] || _ < s.w && ["ww", _]), j = j || m <= 1 && ["M"] || m < s.M && ["MM", m] || I <= 1 && ["y"] || ["yy", I], j[2] = t, j[3] = +e > 0, j[4] = r, yl.apply(null, j);
}
function gl(e) {
  return e === void 0 ? te : typeof e == "function" ? (te = e, !0) : !1;
}
function wl(e, t) {
  return be[e] === void 0 ? !1 : t === void 0 ? be[e] : (be[e] = t, e === "s" && (be.ss = t - 1), !0);
}
function vl(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = be, a, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, be, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), i = _l(this, !s, r, a), s && (i = a.pastFuture(+this, i)), a.postformat(i);
}
var It = Math.abs;
function De(e) {
  return (e > 0) - (e < 0) || +e;
}
function Tt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = It(this._milliseconds) / 1e3, t = It(this._days), s = It(this._months), r, a, i, n, o = this.asSeconds(), c, m, _, I;
  return o ? (r = A(e / 60), a = A(r / 60), e %= 60, r %= 60, i = A(s / 12), s %= 12, n = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = o < 0 ? "-" : "", m = De(this._months) !== De(o) ? "-" : "", _ = De(this._days) !== De(o) ? "-" : "", I = De(this._milliseconds) !== De(o) ? "-" : "", c + "P" + (i ? m + i + "Y" : "") + (s ? m + s + "M" : "") + (t ? _ + t + "D" : "") + (a || r || e ? "T" : "") + (a ? I + a + "H" : "") + (r ? I + r + "M" : "") + (e ? I + n + "S" : "")) : "P0D";
}
var w = Yt.prototype;
w.isValid = hn;
w.abs = zo;
w.add = $o;
w.subtract = Zo;
w.as = Bo;
w.asMilliseconds = Ir;
w.asSeconds = qo;
w.asMinutes = Jo;
w.asHours = Ko;
w.asDays = Xo;
w.asWeeks = el;
w.asMonths = tl;
w.asQuarters = sl;
w.asYears = rl;
w.valueOf = al;
w._bubble = Qo;
w.clone = il;
w.get = nl;
w.milliseconds = ol;
w.seconds = ll;
w.minutes = ul;
w.hours = dl;
w.days = hl;
w.weeks = ml;
w.months = cl;
w.years = fl;
w.humanize = vl;
w.toISOString = Tt;
w.toString = Tt;
w.toJSON = Tt;
w.locale = Dr;
w.localeData = Yr;
w.toIsoString = H(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Tt
);
w.lang = Or;
f("X", 0, 0, "unix");
f("x", 0, 0, "valueOf");
d("x", kt);
d("X", Ua);
S("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
S("x", function(e, t, s) {
  s._d = new Date(g(e));
});
//! moment.js
u.version = "2.30.1";
wa(D);
u.fn = l;
u.min = on;
u.max = ln;
u.now = un;
u.utc = K;
u.unix = Uo;
u.months = Ao;
u.isDate = st;
u.locale = me;
u.invalid = wt;
u.duration = Z;
u.isMoment = $;
u.weekdays = Vo;
u.parseZone = Eo;
u.localeData = oe;
u.isDuration = ut;
u.monthsShort = Ho;
u.weekdaysMin = Go;
u.defineLocale = ms;
u.updateLocale = Ii;
u.locales = Ui;
u.weekdaysShort = jo;
u.normalizeUnits = V;
u.relativeTimeRounding = gl;
u.relativeTimeThreshold = wl;
u.calendarFormat = Wn;
u.prototype = l;
u.HTML5_FMT = {
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
const pl = (e, t) => {
  const s = _a(`/api/getDictionary/${e}`, {
    ...t,
    staleTime: 36e5,
    select: (i) => i.data
  }), r = L.useCallback((i) => {
    if (s.data)
      return s.data.find((n) => n.id == i);
  }, [s.data]), a = L.useCallback((i) => {
    var n;
    return (n = r(i)) == null ? void 0 : n.name;
  }, [r]);
  return L.useMemo(() => ({
    data: s.data,
    getEntryById: r,
    getValueById: a,
    isLoading: s.isLoading,
    isError: s.isError,
    error: s.error
  }), [s, r, a]);
}, Sl = ({
  info: e,
  dictionary: t
}) => {
  const {
    getValueById: s,
    isLoading: r
  } = pl(t);
  return r ? /* @__PURE__ */ M(_e, { css: {
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, icon: $r.faCircleNotch, spin: !0 }) : s(e.getValue());
}, Wl = gt.memo(Sl);
export {
  Cl as A,
  xl as C,
  Wl as D,
  Nl as P,
  Br as Q,
  Pl as a,
  _a as b,
  ca as c,
  Kr as d,
  ta as e,
  fa as f,
  na as g,
  u as h,
  ra as i,
  aa as j,
  la as k,
  ia as l,
  sa as m,
  pl as n,
  oa as s,
  ya as u,
  Rl as w
};
