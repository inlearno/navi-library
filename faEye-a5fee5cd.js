var D = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var r = (e, t, s) => (D(e, t, "read from private field"), s ? s.call(e) : t.get(e)), M = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
}, C = (e, t, s, n) => (D(e, t, "write to private field"), n ? n.call(e, s) : t.set(e, s), s);
var S = (e, t, s) => (D(e, t, "access private method"), s);
import { J as A, V as F, W as K, X as H, L as B, P as U, Y as N, Z as V, l as R, Q, b as _, j as z, _ as W, $ as q } from "./library-75cbf1f9.js";
import { r as a } from "./react-bd6781bd.js";
import { n as $, u as J } from "./DictionaryCell-7121ea48.js";
import { F as T } from "./icons-56df5d3c.js";
import { B as X } from "./mui-51f6b52b.js";
var b, w, c, p, L, P, x, j, I, Y = (I = class extends A {
  constructor(t, s) {
    super();
    M(this, L);
    M(this, x);
    M(this, b, void 0);
    M(this, w, void 0);
    M(this, c, void 0);
    M(this, p, void 0);
    C(this, b, t), this.setOptions(s), this.bindMethods(), S(this, L, P).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var n;
    const s = this.options;
    this.options = r(this, b).defaultMutationOptions(t), F(this.options, s) || r(this, b).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: r(this, c),
      observer: this
    }), s != null && s.mutationKey && this.options.mutationKey && K(s.mutationKey) !== K(this.options.mutationKey) ? this.reset() : (n = r(this, c)) == null || n.setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = r(this, c)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    S(this, L, P).call(this), S(this, x, j).call(this, t);
  }
  getCurrentResult() {
    return r(this, w);
  }
  reset() {
    var t;
    (t = r(this, c)) == null || t.removeObserver(this), C(this, c, void 0), S(this, L, P).call(this), S(this, x, j).call(this);
  }
  mutate(t, s) {
    var n;
    return C(this, p, s), (n = r(this, c)) == null || n.removeObserver(this), C(this, c, r(this, b).getMutationCache().build(r(this, b), this.options)), r(this, c).addObserver(this), r(this, c).execute(t);
  }
}, b = new WeakMap(), w = new WeakMap(), c = new WeakMap(), p = new WeakMap(), L = new WeakSet(), P = function() {
  var s;
  const t = ((s = r(this, c)) == null ? void 0 : s.state) ?? H();
  C(this, w, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, x = new WeakSet(), j = function(t) {
  B.batch(() => {
    var s, n, i, o, u, h, v, l;
    if (r(this, p) && this.hasListeners()) {
      const y = r(this, w).variables, O = r(this, w).context;
      (t == null ? void 0 : t.type) === "success" ? ((n = (s = r(this, p)).onSuccess) == null || n.call(s, t.data, y, O), (o = (i = r(this, p)).onSettled) == null || o.call(i, t.data, null, y, O)) : (t == null ? void 0 : t.type) === "error" && ((h = (u = r(this, p)).onError) == null || h.call(u, t.error, y, O), (l = (v = r(this, p)).onSettled) == null || l.call(
        v,
        void 0,
        t.error,
        y,
        O
      ));
    }
    this.listeners.forEach((y) => {
      y(r(this, w));
    });
  });
}, I);
function Z(e, t) {
  const s = U(t), [n] = a.useState(
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
      (u) => n.subscribe(B.batchCalls(u)),
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
  const i = a.useMemo(() => N(n.url, {
    encode: encodeURIComponent
  }), [n.url]), o = a.useMemo(() => V(n.url).reduce((f, m) => typeof m != "string" ? [...f, m.name] : f, []), [n.url]), u = J(), {
    wrapPayload: h = !0,
    syncQueryCache: v = !1,
    ...l
  } = n, y = U();
  return Z({
    ...l,
    mutationFn: async (d) => {
      const f = i(R.pick(d, ...o)), m = R.omit(d, ...o), E = R.isEmpty(m) ? void 0 : h ? {
        data: m
      } : m, {
        data: g
      } = await u.request({
        url: f,
        method: n.method || "POST",
        data: E
      });
      return g;
    },
    onSuccess: (d, f, m) => {
      var E;
      if (v) {
        const g = i(R.pick(f, ...o));
        y.setQueriesData({
          queryKey: [g]
        }, (k) => ({
          ...k,
          data: [d.data]
        }));
      }
      (E = l.onSuccess) == null || E.call(l, d, f, m);
    },
    onError: (d, f, m) => {
      var E;
      if (d.response) {
        const {
          status: g,
          data: k
        } = d.response;
        if (g === 400)
          return;
        g === 403 && Q.error("Операция для данного пользователя запрещена", {
          position: "top-center"
        }), g === 500 && Q.error(/* @__PURE__ */ _("div", { children: [
          /* @__PURE__ */ z("div", { tw: "font-medium", children: "Ошибка сервера" }),
          /* @__PURE__ */ z("div", { tw: "p-1 text-xs", children: k.message || d.message })
        ] }), {
          toastId: "server-error",
          position: "top-right"
        });
      }
      (E = l.onError) == null || E.call(l, d, f, m);
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
const et = () => tt("only screen and (max-width : 640px)") || W, mt = ({
  children: e,
  className: t,
  tooltip: s,
  icon: n,
  iconAfter: i,
  size: o,
  ...u
}) => {
  const h = et();
  let v = /* @__PURE__ */ _(X, { className: t, size: o ?? (h ? "medium" : "small"), css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...u, children: [
    n && /* @__PURE__ */ z(T, { icon: n }),
    e,
    i && /* @__PURE__ */ z(T, { icon: i })
  ] });
  return s && (v = /* @__PURE__ */ z(q, { title: s, arrow: !0, children: v })), v;
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
