var k = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var r = (s, t, e) => (k(s, t, "read from private field"), e ? e.call(s) : t.get(s)), b = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, M = (s, t, e, i) => (k(s, t, "write to private field"), i ? i.call(s, e) : t.set(s, e), e);
var O = (s, t, e) => (k(s, t, "access private method"), e);
import { I as F, T as N, V as q, W as Q, J as B, O as I, X as A, Y as H, l as j, b as L, j as D, Z as _ } from "./library-e4cc27e1.js";
import { r as v } from "./react-6f5a8403.js";
import { n as J, u as V } from "./DictionaryCell-c555a711.js";
import { F as x } from "./icons-ad9f8a73.js";
import { B as W } from "./mui-2ff488a7.js";
var m, f, h, c, g, K, S, T, z, X = (z = class extends F {
  constructor(t, e) {
    super();
    b(this, g);
    b(this, S);
    b(this, m, void 0);
    b(this, f, void 0);
    b(this, h, void 0);
    b(this, c, void 0);
    M(this, m, t), this.setOptions(e), this.bindMethods(), O(this, g, K).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var i;
    const e = this.options;
    this.options = r(this, m).defaultMutationOptions(t), N(this.options, e) || r(this, m).getMutationCache().notify({
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
    return r(this, f);
  }
  reset() {
    var t;
    (t = r(this, h)) == null || t.removeObserver(this), M(this, h, void 0), O(this, g, K).call(this), O(this, S, T).call(this);
  }
  mutate(t, e) {
    var i;
    return M(this, c, e), (i = r(this, h)) == null || i.removeObserver(this), M(this, h, r(this, m).getMutationCache().build(r(this, m), this.options)), r(this, h).addObserver(this), r(this, h).execute(t);
  }
}, m = new WeakMap(), f = new WeakMap(), h = new WeakMap(), c = new WeakMap(), g = new WeakSet(), K = function() {
  var e;
  const t = ((e = r(this, h)) == null ? void 0 : e.state) ?? Q();
  M(this, f, {
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
    var e, i, n, o, a, u, w, p;
    if (r(this, c) && this.hasListeners()) {
      const l = r(this, f).variables, E = r(this, f).context;
      (t == null ? void 0 : t.type) === "success" ? ((i = (e = r(this, c)).onSuccess) == null || i.call(e, t.data, l, E), (o = (n = r(this, c)).onSettled) == null || o.call(n, t.data, null, l, E)) : (t == null ? void 0 : t.type) === "error" && ((u = (a = r(this, c)).onError) == null || u.call(a, t.error, l, E), (p = (w = r(this, c)).onSettled) == null || p.call(
        w,
        void 0,
        t.error,
        l,
        E
      ));
    }
    this.listeners.forEach((l) => {
      l(r(this, f));
    });
  });
}, z);
function Y(s, t) {
  const e = I(t), [i] = v.useState(
    () => new X(
      e,
      s
    )
  );
  v.useEffect(() => {
    i.setOptions(s);
  }, [i, s]);
  const n = v.useSyncExternalStore(
    v.useCallback(
      (a) => i.subscribe(B.batchCalls(a)),
      [i]
    ),
    () => i.getCurrentResult(),
    () => i.getCurrentResult()
  ), o = v.useCallback(
    (a, u) => {
      i.mutate(a, u).catch(Z);
    },
    [i]
  );
  if (n.error && J(i.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: o, mutateAsync: n.mutate };
}
function Z() {
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
  const n = v.useMemo(() => A(i.url, {
    encode: encodeURIComponent
  }), [i.url]), o = v.useMemo(() => H(i.url).reduce((y, d) => typeof d != "string" ? [...y, d.name] : y, []), [i.url]), a = V(), {
    wrapPayload: u = !0,
    syncQueryCache: w = !1,
    ...p
  } = i, l = I();
  return Y({
    ...p,
    mutationFn: async (C) => {
      const y = n(j.pick(C, ...o)), d = j.omit(C, ...o), P = j.isEmpty(d) ? void 0 : u ? {
        data: d
      } : d, {
        data: R
      } = await a.request({
        url: y,
        method: i.method || "POST",
        data: P
      });
      return R;
    },
    onSuccess: (C, y, d) => {
      var P;
      if (w) {
        const R = n(j.pick(y, ...o));
        l.setQueriesData({
          queryKey: [R]
        }, (U) => ({
          ...U,
          data: [C.data]
        }));
      }
      (P = p.onSuccess) == null || P.call(p, C, y, d);
    }
  });
}
const ot = ({
  children: s,
  className: t,
  tooltip: e,
  icon: i,
  iconAfter: n,
  size: o,
  ...a
}) => {
  let u = /* @__PURE__ */ L(W, { className: t, size: o || "small", css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...a, children: [
    i && /* @__PURE__ */ D(x, { icon: i }),
    s,
    n && /* @__PURE__ */ D(x, { icon: n })
  ] });
  return e && (u = /* @__PURE__ */ D(_, { title: e, arrow: !0, children: u })), u;
};
var $ = {};
(function(s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  var t = "fas", e = "eye", i = 576, n = 512, o = [128065], a = "f06e", u = "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z";
  s.definition = {
    prefix: t,
    iconName: e,
    icon: [
      i,
      n,
      o,
      a,
      u
    ]
  }, s.faEye = s.definition, s.prefix = t, s.iconName = e, s.width = i, s.height = n, s.ligatures = o, s.unicode = a, s.svgPathData = u, s.aliases = o;
})($);
export {
  ot as B,
  $ as f,
  nt as u
};
