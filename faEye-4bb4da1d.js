var k = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var r = (s, t, e) => (k(s, t, "read from private field"), e ? e.call(s) : t.get(s)), v = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, M = (s, t, e, i) => (k(s, t, "write to private field"), i ? i.call(s, e) : t.set(s, e), e);
var O = (s, t, e) => (k(s, t, "access private method"), e);
import { I as U, T as F, V as q, W as N, J as B, O as I, X as A, Y as H, l as j, Q as L, b as _, j as D, Z as J } from "./library-89924fb6.js";
import { r as C } from "./react-6f5a8403.js";
import { n as V, u as W } from "./DictionaryCell-ab51e979.js";
import { F as x } from "./icons-ad9f8a73.js";
import { B as X } from "./mui-2ff488a7.js";
var p, y, h, d, g, K, S, T, z, Y = (z = class extends U {
  constructor(t, e) {
    super();
    v(this, g);
    v(this, S);
    v(this, p, void 0);
    v(this, y, void 0);
    v(this, h, void 0);
    v(this, d, void 0);
    M(this, p, t), this.setOptions(e), this.bindMethods(), O(this, g, K).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var i;
    const e = this.options;
    this.options = r(this, p).defaultMutationOptions(t), F(this.options, e) || r(this, p).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: r(this, h),
      observer: this
    }), e != null && e.mutationKey && this.options.mutationKey && q(e.mutationKey) !== q(this.options.mutationKey) ? this.reset() : (i = r(this, h)) == null || i.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = r(this, h)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    O(this, g, K).call(this), O(this, S, T).call(this, t);
  }
  getCurrentResult() {
    return r(this, y);
  }
  reset() {
    var t;
    (t = r(this, h)) == null || t.removeObserver(this), M(this, h, void 0), O(this, g, K).call(this), O(this, S, T).call(this);
  }
  mutate(t, e) {
    var i;
    return M(this, d, e), (i = r(this, h)) == null || i.removeObserver(this), M(this, h, r(this, p).getMutationCache().build(r(this, p), this.options)), r(this, h).addObserver(this), r(this, h).execute(t);
  }
}, p = new WeakMap(), y = new WeakMap(), h = new WeakMap(), d = new WeakMap(), g = new WeakSet(), K = function() {
  var e;
  const t = ((e = r(this, h)) == null ? void 0 : e.state) ?? N();
  M(this, y, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, S = new WeakSet(), T = function(t) {
  B.batch(() => {
    var e, i, o, n, a, u, w, b;
    if (r(this, d) && this.hasListeners()) {
      const f = r(this, y).variables, E = r(this, y).context;
      (t == null ? void 0 : t.type) === "success" ? ((i = (e = r(this, d)).onSuccess) == null || i.call(e, t.data, f, E), (n = (o = r(this, d)).onSettled) == null || n.call(o, t.data, null, f, E)) : (t == null ? void 0 : t.type) === "error" && ((u = (a = r(this, d)).onError) == null || u.call(a, t.error, f, E), (b = (w = r(this, d)).onSettled) == null || b.call(
        w,
        void 0,
        t.error,
        f,
        E
      ));
    }
    this.listeners.forEach((f) => {
      f(r(this, y));
    });
  });
}, z);
function Z(s, t) {
  const e = I(t), [i] = C.useState(
    () => new Y(
      e,
      s
    )
  );
  C.useEffect(() => {
    i.setOptions(s);
  }, [i, s]);
  const o = C.useSyncExternalStore(
    C.useCallback(
      (a) => i.subscribe(B.batchCalls(a)),
      [i]
    ),
    () => i.getCurrentResult(),
    () => i.getCurrentResult()
  ), n = C.useCallback(
    (a, u) => {
      i.mutate(a, u).catch($);
    },
    [i]
  );
  if (o.error && V(i.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: n, mutateAsync: o.mutate };
}
function $() {
}
function nt(s, t, e) {
  let i;
  typeof s == "string" && typeof t == "string" ? i = {
    url: t,
    method: s,
    ...e
  } : typeof s == "string" ? i = {
    url: s,
    ...t
  } : i = s;
  const o = C.useMemo(() => A(i.url, {
    encode: encodeURIComponent
  }), [i.url]), n = C.useMemo(() => H(i.url).reduce((l, m) => typeof m != "string" ? [...l, m.name] : l, []), [i.url]), a = W(), {
    wrapPayload: u = !0,
    syncQueryCache: w = !1,
    ...b
  } = i, f = I();
  return Z({
    ...b,
    mutationFn: async (c) => {
      const l = o(j.pick(c, ...n)), m = j.omit(c, ...n), P = j.isEmpty(m) ? void 0 : u ? {
        data: m
      } : m, {
        data: R
      } = await a.request({
        url: l,
        method: i.method || "POST",
        data: P
      });
      return R;
    },
    onSuccess: (c, l, m) => {
      var P;
      if (w) {
        const R = o(j.pick(l, ...n));
        f.setQueriesData({
          queryKey: [R]
        }, (Q) => ({
          ...Q,
          data: [c.data]
        }));
      }
      (P = b.onSuccess) == null || P.call(b, c, l, m);
    },
    onError: (c) => {
      if (c.response) {
        const {
          status: l
        } = c.response;
        l === 403 && L.error("Операция для данного пользователя запрещена", {
          position: "top-center"
        });
      }
    }
  });
}
const at = ({
  children: s,
  className: t,
  tooltip: e,
  icon: i,
  iconAfter: o,
  size: n,
  ...a
}) => {
  let u = /* @__PURE__ */ _(X, { className: t, size: n || "small", css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...a, children: [
    i && /* @__PURE__ */ D(x, { icon: i }),
    s,
    o && /* @__PURE__ */ D(x, { icon: o })
  ] });
  return e && (u = /* @__PURE__ */ D(J, { title: e, arrow: !0, children: u })), u;
};
var G = {};
(function(s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  var t = "fas", e = "eye", i = 576, o = 512, n = [128065], a = "f06e", u = "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z";
  s.definition = {
    prefix: t,
    iconName: e,
    icon: [
      i,
      o,
      n,
      a,
      u
    ]
  }, s.faEye = s.definition, s.prefix = t, s.iconName = e, s.width = i, s.height = o, s.ligatures = n, s.unicode = a, s.svgPathData = u, s.aliases = n;
})(G);
export {
  at as B,
  G as f,
  nt as u
};
