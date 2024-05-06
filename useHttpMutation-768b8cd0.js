var P = (i, t, s) => {
  if (!t.has(i))
    throw TypeError("Cannot " + s);
};
var r = (i, t, s) => (P(i, t, "read from private field"), s ? s.call(i) : t.get(i)), y = (i, t, s) => {
  if (t.has(i))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(i) : t.set(i, s);
}, C = (i, t, s, e) => (P(i, t, "write to private field"), e ? e.call(i, s) : t.set(i, s), s);
var M = (i, t, s) => (P(i, t, "access private method"), s);
import { J as T, L as A, O as U, P as H, T as I, I as L, V as j, W as F, l as K } from "./library-cedc3deb.js";
import { r as b } from "./react-6f5a8403.js";
import { s as J, u as V } from "./DictionaryCell-728213ab.js";
var d, p, o, u, S, R, g, q, D, W = (D = class extends T {
  constructor(t, s) {
    super();
    y(this, S);
    y(this, g);
    y(this, d, void 0);
    y(this, p, void 0);
    y(this, o, void 0);
    y(this, u, void 0);
    C(this, d, t), this.setOptions(s), this.bindMethods(), M(this, S, R).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var e;
    const s = this.options;
    this.options = r(this, d).defaultMutationOptions(t), A(this.options, s) || r(this, d).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: r(this, o),
      observer: this
    }), s != null && s.mutationKey && this.options.mutationKey && U(s.mutationKey) !== U(this.options.mutationKey) ? this.reset() : (e = r(this, o)) == null || e.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = r(this, o)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    M(this, S, R).call(this), M(this, g, q).call(this, t);
  }
  getCurrentResult() {
    return r(this, p);
  }
  reset() {
    var t;
    (t = r(this, o)) == null || t.removeObserver(this), C(this, o, void 0), M(this, S, R).call(this), M(this, g, q).call(this);
  }
  mutate(t, s) {
    var e;
    return C(this, u, s), (e = r(this, o)) == null || e.removeObserver(this), C(this, o, r(this, d).getMutationCache().build(r(this, d), this.options)), r(this, o).addObserver(this), r(this, o).execute(t);
  }
}, d = new WeakMap(), p = new WeakMap(), o = new WeakMap(), u = new WeakMap(), S = new WeakSet(), R = function() {
  var s;
  const t = ((s = r(this, o)) == null ? void 0 : s.state) ?? H();
  C(this, p, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, g = new WeakSet(), q = function(t) {
  I.batch(() => {
    var s, e, n, a, h, v, x, m;
    if (r(this, u) && this.hasListeners()) {
      const c = r(this, p).variables, E = r(this, p).context;
      (t == null ? void 0 : t.type) === "success" ? ((e = (s = r(this, u)).onSuccess) == null || e.call(s, t.data, c, E), (a = (n = r(this, u)).onSettled) == null || a.call(n, t.data, null, c, E)) : (t == null ? void 0 : t.type) === "error" && ((v = (h = r(this, u)).onError) == null || v.call(h, t.error, c, E), (m = (x = r(this, u)).onSettled) == null || m.call(
        x,
        void 0,
        t.error,
        c,
        E
      ));
    }
    this.listeners.forEach((c) => {
      c(r(this, p));
    });
  });
}, D);
function z(i, t) {
  const s = L(t), [e] = b.useState(
    () => new W(
      s,
      i
    )
  );
  b.useEffect(() => {
    e.setOptions(i);
  }, [e, i]);
  const n = b.useSyncExternalStore(
    b.useCallback(
      (h) => e.subscribe(I.batchCalls(h)),
      [e]
    ),
    () => e.getCurrentResult(),
    () => e.getCurrentResult()
  ), a = b.useCallback(
    (h, v) => {
      e.mutate(h, v).catch(B);
    },
    [e]
  );
  if (n.error && J(e.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: a, mutateAsync: n.mutate };
}
function B() {
}
function Z(i, t, s) {
  let e;
  typeof i == "string" && typeof t == "string" ? e = {
    url: t,
    method: i,
    ...s
  } : typeof i == "string" ? e = {
    url: i,
    ...t
  } : e = i;
  const n = b.useMemo(() => j(e.url, {
    encode: encodeURIComponent
  }), [e.url]), a = b.useMemo(() => F(e.url).reduce((f, l) => typeof l != "string" ? [...f, l.name] : f, []), [e.url]), h = V(), {
    wrapPayload: v = !0,
    syncQueryCache: x = !1,
    ...m
  } = e, c = L();
  return z({
    ...m,
    mutationFn: async (O) => {
      const f = n(K.pick(O, ...a)), l = K.omit(O, ...a), w = K.isEmpty(l) ? void 0 : v ? {
        data: l
      } : l, {
        data: k
      } = await h.request({
        url: f,
        method: e.method || "POST",
        data: w
      });
      return k;
    },
    onSuccess: (O, f, l) => {
      var w;
      if (x) {
        const k = n(K.pick(f, ...a));
        c.setQueriesData({
          queryKey: [k]
        }, (Q) => ({
          ...Q,
          data: [O.data]
        }));
      }
      (w = m.onSuccess) == null || w.call(m, O, f, l);
    }
  });
}
export {
  Z as u
};
