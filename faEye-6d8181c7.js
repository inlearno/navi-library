var k = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var r = (e, t, s) => (k(e, t, "read from private field"), s ? s.call(e) : t.get(e)), E = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
}, M = (e, t, s, n) => (k(e, t, "write to private field"), n ? n.call(e, s) : t.set(e, s), s);
var g = (e, t, s) => (k(e, t, "access private method"), s);
import { J as U, V as _, W as j, X as A, L as T, P as B, Y as F, Z as H, l as z, Q as N, _ as V, b as W, j as x, $ as q } from "./library-5ad54f6e.js";
import { r as a } from "./react-bd6781bd.js";
import { n as $, u as J } from "./DictionaryCell-a7ae3894.js";
import { F as K } from "./icons-56df5d3c.js";
import { B as X } from "./mui-51f6b52b.js";
var b, v, c, m, C, R, O, D, Q, Y = (Q = class extends U {
  constructor(t, s) {
    super();
    E(this, C);
    E(this, O);
    E(this, b, void 0);
    E(this, v, void 0);
    E(this, c, void 0);
    E(this, m, void 0);
    M(this, b, t), this.setOptions(s), this.bindMethods(), g(this, C, R).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const s = this.options;
    this.options = r(this, b).defaultMutationOptions(t), _(this.options, s) || r(this, b).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: r(this, c),
      observer: this
    }), s != null && s.mutationKey && this.options.mutationKey && j(s.mutationKey) !== j(this.options.mutationKey) ? this.reset() : (n = r(this, c)) == null || n.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = r(this, c)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    g(this, C, R).call(this), g(this, O, D).call(this, t);
  }
  getCurrentResult() {
    return r(this, v);
  }
  reset() {
    var t;
    (t = r(this, c)) == null || t.removeObserver(this), M(this, c, void 0), g(this, C, R).call(this), g(this, O, D).call(this);
  }
  mutate(t, s) {
    var n;
    return M(this, m, s), (n = r(this, c)) == null || n.removeObserver(this), M(this, c, r(this, b).getMutationCache().build(r(this, b), this.options)), r(this, c).addObserver(this), r(this, c).execute(t);
  }
}, b = new WeakMap(), v = new WeakMap(), c = new WeakMap(), m = new WeakMap(), C = new WeakSet(), R = function() {
  var s;
  const t = ((s = r(this, c)) == null ? void 0 : s.state) ?? A();
  M(this, v, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, O = new WeakSet(), D = function(t) {
  T.batch(() => {
    var s, n, i, o, u, h, f, w;
    if (r(this, m) && this.hasListeners()) {
      const p = r(this, v).variables, S = r(this, v).context;
      (t == null ? void 0 : t.type) === "success" ? ((n = (s = r(this, m)).onSuccess) == null || n.call(s, t.data, p, S), (o = (i = r(this, m)).onSettled) == null || o.call(i, t.data, null, p, S)) : (t == null ? void 0 : t.type) === "error" && ((h = (u = r(this, m)).onError) == null || h.call(u, t.error, p, S), (w = (f = r(this, m)).onSettled) == null || w.call(
        f,
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
}, Q);
function Z(e, t) {
  const s = B(t), [n] = a.useState(
    () => new Y(
      s,
      e
    )
  );
  a.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const i = a.useSyncExternalStore(
    a.useCallback(
      (u) => n.subscribe(T.batchCalls(u)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), o = a.useCallback(
    (u, h) => {
      n.mutate(u, h).catch(G);
    },
    [n]
  );
  if (i.error && $(n.options.throwOnError, [i.error]))
    throw i.error;
  return { ...i, mutate: o, mutateAsync: i.mutate };
}
function G() {
}
function ct(e, t, s) {
  let n;
  typeof e == "string" && typeof t == "string" ? n = {
    url: t,
    method: e,
    ...s
  } : typeof e == "string" ? n = {
    url: e,
    ...t
  } : n = e;
  const i = a.useMemo(() => F(n.url, {
    encode: encodeURIComponent
  }), [n.url]), o = a.useMemo(() => H(n.url).reduce((l, y) => typeof y != "string" ? [...l, y.name] : l, []), [n.url]), u = J(), {
    wrapPayload: h = !0,
    syncQueryCache: f = !1,
    ...w
  } = n, p = B();
  return Z({
    ...w,
    mutationFn: async (d) => {
      const l = i(z.pick(d, ...o)), y = z.omit(d, ...o), L = z.isEmpty(y) ? void 0 : h ? {
        data: y
      } : y, {
        data: P
      } = await u.request({
        url: l,
        method: n.method || "POST",
        data: L
      });
      return P;
    },
    onSuccess: (d, l, y) => {
      var L;
      if (f) {
        const P = i(z.pick(l, ...o));
        p.setQueriesData({
          queryKey: [P]
        }, (I) => ({
          ...I,
          data: [d.data]
        }));
      }
      (L = w.onSuccess) == null || L.call(w, d, l, y);
    },
    onError: (d) => {
      if (d.response) {
        const {
          status: l
        } = d.response;
        l === 403 && N.error("Операция для данного пользователя запрещена", {
          position: "top-center"
        });
      }
    }
  });
}
function ht(e) {
  const t = a.useRef(null), s = a.useRef(e);
  return a.useLayoutEffect(() => {
    s.current = e;
  }), a.useEffect(() => {
    const n = (i) => {
      const o = t.current;
      o && !o.contains(i.target) && s.current(i);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, []), t;
}
function dt(e, t) {
  const [s, n] = a.useState(e);
  return a.useEffect(() => {
    const i = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(i);
    };
  }, [e, t]), s;
}
function tt(e) {
  const t = a.useCallback(
    (i) => {
      const o = window.matchMedia(e);
      return o.addEventListener("change", i), () => {
        o.removeEventListener("change", i);
      };
    },
    [e]
  ), s = () => window.matchMedia(e).matches, n = () => {
    throw Error("useMediaQuery is a client-only hook");
  };
  return a.useSyncExternalStore(t, s, n);
}
function lt() {
  const [e, t] = a.useState({
    width: null,
    height: null
  });
  return a.useLayoutEffect(() => {
    const s = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return s(), window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s);
    };
  }, []), e;
}
const et = () => tt("only screen and (max-width : 640px)") || V, mt = ({
  children: e,
  className: t,
  tooltip: s,
  icon: n,
  iconAfter: i,
  size: o,
  ...u
}) => {
  const h = et();
  let f = /* @__PURE__ */ W(X, { className: t, size: o ?? (h ? "medium" : "small"), css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...u, children: [
    n && /* @__PURE__ */ x(K, { icon: n }),
    e,
    i && /* @__PURE__ */ x(K, { icon: i })
  ] });
  return s && (f = /* @__PURE__ */ x(q, { title: s, arrow: !0, children: f })), f;
};
var st = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", s = "eye", n = 576, i = 512, o = [128065], u = "f06e", h = "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z";
  e.definition = {
    prefix: t,
    iconName: s,
    icon: [
      n,
      i,
      o,
      u,
      h
    ]
  }, e.faEye = e.definition, e.prefix = t, e.iconName = s, e.width = n, e.height = i, e.ligatures = o, e.unicode = u, e.svgPathData = h, e.aliases = o;
})(st);
export {
  mt as B,
  et as a,
  ht as b,
  lt as c,
  dt as d,
  st as f,
  ct as u
};
