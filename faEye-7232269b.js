var D = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var r = (e, t, s) => (D(e, t, "read from private field"), s ? s.call(e) : t.get(e)), g = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
}, E = (e, t, s, i) => (D(e, t, "write to private field"), i ? i.call(e, s) : t.set(e, s), s);
var w = (e, t, s) => (D(e, t, "access private method"), s);
import { I as N, T as A, V as T, W as H, J as Q, O as U, X as L, Y as _, l as K, Q as q, b as F, j as P, Z as J } from "./library-fa9914d3.js";
import { r as M } from "./react-6f5a8403.js";
import { n as V, u as W } from "./DictionaryCell-78c8ae19.js";
import { F as z } from "./icons-ad9f8a73.js";
import { B as X } from "./mui-2ff488a7.js";
var y, v, h, m, O, R, j, I, B, Y = (B = class extends N {
  constructor(t, s) {
    super();
    g(this, O);
    g(this, j);
    g(this, y, void 0);
    g(this, v, void 0);
    g(this, h, void 0);
    g(this, m, void 0);
    E(this, y, t), this.setOptions(s), this.bindMethods(), w(this, O, R).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var i;
    const s = this.options;
    this.options = r(this, y).defaultMutationOptions(t), A(this.options, s) || r(this, y).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: r(this, h),
      observer: this
    }), s != null && s.mutationKey && this.options.mutationKey && T(s.mutationKey) !== T(this.options.mutationKey) ? this.reset() : (i = r(this, h)) == null || i.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = r(this, h)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    w(this, O, R).call(this), w(this, j, I).call(this, t);
  }
  getCurrentResult() {
    return r(this, v);
  }
  reset() {
    var t;
    (t = r(this, h)) == null || t.removeObserver(this), E(this, h, void 0), w(this, O, R).call(this), w(this, j, I).call(this);
  }
  mutate(t, s) {
    var i;
    return E(this, m, s), (i = r(this, h)) == null || i.removeObserver(this), E(this, h, r(this, y).getMutationCache().build(r(this, y), this.options)), r(this, h).addObserver(this), r(this, h).execute(t);
  }
}, y = new WeakMap(), v = new WeakMap(), h = new WeakMap(), m = new WeakMap(), O = new WeakSet(), R = function() {
  var s;
  const t = ((s = r(this, h)) == null ? void 0 : s.state) ?? H();
  E(this, v, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, j = new WeakSet(), I = function(t) {
  Q.batch(() => {
    var s, i, o, n, a, u, x, l;
    if (r(this, m) && this.hasListeners()) {
      const p = r(this, v).variables, S = r(this, v).context;
      (t == null ? void 0 : t.type) === "success" ? ((i = (s = r(this, m)).onSuccess) == null || i.call(s, t.data, p, S), (n = (o = r(this, m)).onSettled) == null || n.call(o, t.data, null, p, S)) : (t == null ? void 0 : t.type) === "error" && ((u = (a = r(this, m)).onError) == null || u.call(a, t.error, p, S), (l = (x = r(this, m)).onSettled) == null || l.call(
        x,
        void 0,
        t.error,
        p,
        S
      ));
    }
    this.listeners.forEach((p) => {
      p(r(this, v));
    });
  });
}, B);
function Z(e, t) {
  const s = U(t), [i] = M.useState(
    () => new Y(
      s,
      e
    )
  );
  M.useEffect(() => {
    i.setOptions(e);
  }, [i, e]);
  const o = M.useSyncExternalStore(
    M.useCallback(
      (a) => i.subscribe(Q.batchCalls(a)),
      [i]
    ),
    () => i.getCurrentResult(),
    () => i.getCurrentResult()
  ), n = M.useCallback(
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
function nt(e, t, s) {
  let i;
  typeof e == "string" && typeof t == "string" ? i = {
    url: t,
    method: e,
    ...s
  } : typeof e == "string" ? i = {
    url: e,
    ...t
  } : i = e;
  const o = M.useMemo(() => L(i.url, {
    encode: encodeURIComponent
  }), [i.url]), n = M.useMemo(() => _(i.url).reduce((f, d) => typeof d != "string" ? [...f, d.name] : f, []), [i.url]), a = W(), {
    wrapPayload: u = !0,
    syncQueryCache: x = !1,
    ...l
  } = i, p = U();
  return Z({
    ...l,
    mutationFn: async (c) => {
      const f = o(K.pick(c, ...n)), d = K.omit(c, ...n), b = K.isEmpty(d) ? void 0 : u ? {
        data: d
      } : d, {
        data: C
      } = await a.request({
        url: f,
        method: i.method || "POST",
        data: b
      });
      return C;
    },
    onSuccess: (c, f, d) => {
      var b;
      if (x) {
        const C = o(K.pick(f, ...n));
        p.setQueriesData({
          queryKey: [C]
        }, (k) => ({
          ...k,
          data: [c.data]
        }));
      }
      (b = l.onSuccess) == null || b.call(l, c, f, d);
    },
    onError: (c, f, d) => {
      var b;
      if (c.response) {
        const {
          status: C,
          data: k
        } = c.response;
        if (C === 400)
          return;
        C === 403 && q.error("Операция для данного пользователя запрещена", {
          position: "top-center"
        }), C === 500 && q.error(/* @__PURE__ */ F("div", { children: [
          /* @__PURE__ */ P("div", { tw: "font-medium", children: "Ошибка сервера" }),
          /* @__PURE__ */ P("div", { tw: "p-1 text-xs", children: k.message || c.message })
        ] }), {
          toastId: "server-error",
          position: "top-right"
        });
      }
      (b = l.onError) == null || b.call(l, c, f, d);
    }
  });
}
const at = ({
  children: e,
  className: t,
  tooltip: s,
  icon: i,
  iconAfter: o,
  size: n,
  ...a
}) => {
  let u = /* @__PURE__ */ F(X, { className: t, size: n || "small", css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...a, children: [
    i && /* @__PURE__ */ P(z, { icon: i }),
    e,
    o && /* @__PURE__ */ P(z, { icon: o })
  ] });
  return s && (u = /* @__PURE__ */ P(J, { title: s, arrow: !0, children: u })), u;
};
var G = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "eye", i = 576, o = 512, n = [128065], a = "f06e", u = "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      i,
      o,
      n,
      a,
      u
    ]
  }, e.faEye = e.definition, e.prefix = t, e.iconName = s, e.width = i, e.height = o, e.ligatures = n, e.unicode = a, e.svgPathData = u, e.aliases = n;
})(G);
export {
  at as B,
  G as f,
  nt as u
};
