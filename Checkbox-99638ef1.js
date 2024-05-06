var $t = (e, i, r) => {
  if (!i.has(e))
    throw TypeError("Cannot " + r);
};
var ue = (e, i, r) => ($t(e, i, "read from private field"), r ? r.call(e) : i.get(e)), ze = (e, i, r) => {
  if (i.has(e))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(e) : i.set(e, r);
}, He = (e, i, r, t) => ($t(e, i, "write to private field"), t ? t.call(e, r) : i.set(e, r), r);
var Oe = (e, i, r) => ($t(e, i, "access private method"), r);
import { J as Vi, T as Zt, X as Ii, I as Xr, b as ye, j as M, Y as ji, f as Qr, F as lt, Z as Ui, G as $i, l as qi } from "./library-cedc3deb.js";
import { F as Ve, p as Gr } from "./icons-ad9f8a73.js";
import { B as Yi, A as Xi, l as Qi, m as Gi, a as ur, o as Ki, u as Kr, P as Jr, p as Ji, I as Zi, f as es, q as ts, r as _r, s as rs, M as is, F as ss } from "./mui-bfddf798.js";
import { r as E, R as G, e as ns, c as Zr, g as ei } from "./react-6f5a8403.js";
import { f as os } from "./faEye-ea161ce6.js";
import { Q as ti, d as as, e as us, g as ls, i as cs, j as fs, k as Dr, l as zr, w as ds, m as hs, u as ps, c as gs, f as ys, n as vs, h as wt, b as ms } from "./DictionaryCell-728213ab.js";
function Or(e, i) {
  return e.filter((r) => !i.includes(r));
}
function bs(e, i, r) {
  const t = e.slice(0);
  return t[i] = r, t;
}
var Qe, it, st, Se, ft, nt, ot, Ot, dt, er, ht, tr, pt, rr, gt, ir, Yr, ws = (Yr = class extends Vi {
  constructor(i, r, t) {
    super();
    ze(this, ot);
    ze(this, dt);
    ze(this, ht);
    ze(this, pt);
    ze(this, gt);
    ze(this, Qe, void 0);
    ze(this, it, void 0);
    ze(this, st, void 0);
    ze(this, Se, void 0);
    ze(this, ft, void 0);
    ze(this, nt, void 0);
    He(this, Qe, i), He(this, st, []), He(this, Se, []), Oe(this, ot, Ot).call(this, []), this.setQueries(r, t);
  }
  onSubscribe() {
    this.listeners.size === 1 && ue(this, Se).forEach((i) => {
      i.subscribe((r) => {
        Oe(this, pt, rr).call(this, i, r);
      });
    });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ue(this, Se).forEach((i) => {
      i.destroy();
    });
  }
  setQueries(i, r, t) {
    He(this, st, i), He(this, ft, r), Zt.batch(() => {
      const s = ue(this, Se), n = Oe(this, ht, tr).call(this, ue(this, st));
      n.forEach(
        (f) => f.observer.setOptions(f.defaultedQueryOptions, t)
      );
      const o = n.map((f) => f.observer), u = o.map(
        (f) => f.getCurrentResult()
      ), l = o.some(
        (f, g) => f !== s[g]
      );
      s.length === o.length && !l || (He(this, Se, o), Oe(this, ot, Ot).call(this, u), this.hasListeners() && (Or(s, o).forEach((f) => {
        f.destroy();
      }), Or(o, s).forEach((f) => {
        f.subscribe((g) => {
          Oe(this, pt, rr).call(this, f, g);
        });
      }), Oe(this, gt, ir).call(this)));
    });
  }
  getCurrentResult() {
    return ue(this, nt);
  }
  getQueries() {
    return ue(this, Se).map((i) => i.getCurrentQuery());
  }
  getObservers() {
    return ue(this, Se);
  }
  getOptimisticResult(i, r) {
    const t = Oe(this, ht, tr).call(this, i), s = t.map(
      (n) => n.observer.getOptimisticResult(n.defaultedQueryOptions)
    );
    return [
      s,
      (n) => Oe(this, dt, er).call(this, n ?? s, r),
      () => t.map((n, o) => {
        const u = s[o];
        return n.defaultedQueryOptions.notifyOnChangeProps ? u : n.observer.trackResult(u);
      })
    ];
  }
}, Qe = new WeakMap(), it = new WeakMap(), st = new WeakMap(), Se = new WeakMap(), ft = new WeakMap(), nt = new WeakMap(), ot = new WeakSet(), Ot = function(i) {
  var r;
  He(this, it, i), He(this, nt, Oe(this, dt, er).call(this, i, (r = ue(this, ft)) == null ? void 0 : r.combine));
}, dt = new WeakSet(), er = function(i, r) {
  return r ? Ii(ue(this, nt), r(i)) : i;
}, ht = new WeakSet(), tr = function(i) {
  const r = ue(this, Se), t = new Map(
    r.map((h) => [h.options.queryHash, h])
  ), s = i.map(
    (h) => ue(this, Qe).defaultQueryOptions(h)
  ), n = s.flatMap((h) => {
    const d = t.get(h.queryHash);
    return d != null ? [{ defaultedQueryOptions: h, observer: d }] : [];
  }), o = new Set(
    n.map((h) => h.defaultedQueryOptions.queryHash)
  ), u = s.filter(
    (h) => !o.has(h.queryHash)
  ), l = (h) => {
    const d = ue(this, Qe).defaultQueryOptions(h);
    return ue(this, Se).find(
      (v) => v.options.queryHash === d.queryHash
    ) ?? new ti(ue(this, Qe), d);
  }, f = u.map((h) => ({
    defaultedQueryOptions: h,
    observer: l(h)
  })), g = (h, d) => s.indexOf(h.defaultedQueryOptions) - s.indexOf(d.defaultedQueryOptions);
  return n.concat(f).sort(g);
}, pt = new WeakSet(), rr = function(i, r) {
  const t = ue(this, Se).indexOf(i);
  t !== -1 && (Oe(this, ot, Ot).call(this, bs(ue(this, it), t, r)), Oe(this, gt, ir).call(this));
}, gt = new WeakSet(), ir = function() {
  Zt.batch(() => {
    this.listeners.forEach((i) => {
      i(ue(this, it));
    });
  });
}, Yr);
function Ss({
  queries: e,
  ...i
}, r) {
  const t = Xr(r), s = as(), n = us(), o = E.useMemo(
    () => e.map((v) => {
      const D = t.defaultQueryOptions(v);
      return D._optimisticResults = s ? "isRestoring" : "optimistic", D;
    }),
    [e, t, s]
  );
  o.forEach((v) => {
    ls(v), cs(v, n);
  }), fs(n);
  const [u] = E.useState(
    () => new ws(
      t,
      o,
      i
    )
  ), [l, f, g] = u.getOptimisticResult(
    o,
    i.combine
  );
  E.useSyncExternalStore(
    E.useCallback(
      (v) => s ? () => {
      } : u.subscribe(Zt.batchCalls(v)),
      [u, s]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), E.useEffect(() => {
    u.setQueries(
      o,
      i,
      {
        listeners: !1
      }
    );
  }, [o, i, u]);
  const d = l.some(
    (v, D) => Dr(o[D], v)
  ) ? l.flatMap((v, D) => {
    const F = o[D];
    if (F) {
      const H = new ti(t, F);
      if (Dr(F, v))
        return zr(F, H, n);
      ds(v, s) && zr(F, H, n);
    }
    return [];
  }) : [];
  if (d.length > 0)
    throw Promise.all(d);
  const m = l.find(
    (v, D) => {
      const F = o[D];
      return F && hs({
        result: v,
        errorResetBoundary: n,
        throwOnError: F.throwOnError,
        query: t.getQueryCache().get(F.queryHash)
      });
    }
  );
  if (m != null && m.error)
    throw m.error;
  return f(g());
}
const Rr = () => {
  let e, i;
  const r = new Promise((t, s) => {
    e = t, i = s;
  });
  return {
    resolve: e,
    reject: i,
    value: r
  };
}, xs = (e, i) => {
  var l;
  const r = e.name ?? `batcher:${Math.random().toString(16).slice(2)})`, t = e.scheduler ?? ri(10), s = (l = globalThis.__BATSHIT_DEVTOOLS__) == null ? void 0 : l.for(r);
  let n = i ?? {
    seq: 0,
    batch: /* @__PURE__ */ new Set(),
    currentRequest: Rr(),
    timer: void 0,
    start: null,
    latest: null
  };
  s == null || s.create({ seq: n.seq });
  const o = () => {
    n.batch = /* @__PURE__ */ new Set(), n.currentRequest = Rr(), n.timer = void 0, n.start = null, n.latest = null;
  };
  return { fetch: (f) => {
    n.start || (n.start = Date.now()), n.latest = Date.now(), n.batch.add(f), clearTimeout(n.timer);
    const g = t(n.start, n.latest, n.batch.size);
    s == null || s.queue({
      seq: n.seq,
      query: f,
      batch: [...n.batch],
      scheduled: g,
      latest: n.latest,
      start: n.start
    });
    const h = () => {
      const d = n.seq, m = e.fetcher([...n.batch]), v = n.currentRequest;
      return s == null || s.fetch({ seq: d, batch: [...n.batch] }), o(), m.then((D) => {
        s == null || s.data({ seq: d, data: D }), v.resolve(D);
      }).catch((D) => {
        s == null || s.error({ seq: d, error: D }), v.reject(D);
      }), n.seq++, m;
    };
    if (g === "immediate") {
      const d = n.currentRequest;
      return h(), d.value.then((m) => e.resolver(m, f));
    } else
      return g === "never" ? n.currentRequest.value.then((d) => e.resolver(d, f)) : (n.timer = setTimeout(h, g), n.currentRequest.value.then((d) => e.resolver(d, f)));
  } };
}, _s = (e) => (i, r) => i.find((t) => t[e] == r), ri = (e) => (i, r) => {
  const t = r - i;
  return e - t;
}, Ds = ({
  url: e,
  idField: i,
  params: r
}) => {
  const t = ps();
  return E.useMemo(() => xs({
    fetcher: async (s) => {
      const {
        data: {
          data: n
        }
      } = await t.get(e, {
        params: {
          ...r,
          id: s.join(",")
        }
      });
      return n;
    },
    resolver: _s(i),
    scheduler: ri(10)
  }), [e, r]);
}, zs = ({
  idField: e,
  value: i,
  url: r,
  params: t
}) => {
  const s = Ds({
    url: r,
    idField: e,
    params: t
  });
  return Ss({
    queries: i.map((o) => ({
      queryFn: () => s.fetch(o),
      queryKey: [r, "item", o],
      staleTime: 12e4
    })),
    combine: (o) => ({
      records: o.map((u) => u.data).filter((u) => !!u),
      isLoading: !!o.find((u) => u.isLoading)
    })
  });
}, Os = (e, i = "id") => {
  const r = Xr();
  return (t) => {
    t && r.setQueryData([e, "item", t[i]], t);
  };
}, Io = ({
  children: e,
  className: i,
  tooltip: r,
  icon: t,
  iconAfter: s,
  size: n,
  ...o
}) => {
  let u = /* @__PURE__ */ ye(Yi, { className: i, size: n || "small", css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...o, children: [
    t && /* @__PURE__ */ M(Ve, { icon: t }),
    e,
    s && /* @__PURE__ */ M(Ve, { icon: s })
  ] });
  return r && (u = /* @__PURE__ */ M(ji, { title: r, arrow: !0, children: u })), u;
};
function Rs(e, i) {
  const [r, t] = E.useState(e);
  return E.useEffect(() => {
    const s = setTimeout(() => {
      t(e);
    }, i);
    return () => {
      clearTimeout(s);
    };
  }, [e, i]), r;
}
function jo() {
  const [e, i] = E.useState({
    width: null,
    height: null
  });
  return E.useLayoutEffect(() => {
    const r = () => {
      i({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}
const Ps = ({
  children: e,
  className: i,
  form: r
}) => {
  var s, n;
  const t = r.formState.errors;
  return /* @__PURE__ */ ye("form", { className: i, onSubmit: r.onSubmit, children: [
    t.root && /* @__PURE__ */ ye(Xi, { severity: "error", children: [
      ((s = t.root.error) == null ? void 0 : s.message) && /* @__PURE__ */ M(Qi, { css: [{
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      }, !t.root.fields && {
        margin: "0px"
      }], children: (n = t.root.error) == null ? void 0 : n.message }),
      t.root.fields && /* @__PURE__ */ M("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(t.root.fields).map(([o, {
        message: u
      }]) => /* @__PURE__ */ M("li", { css: {}, children: u }, o)) })
    ] }),
    e
  ] });
}, Uo = Ps;
var yt = (e) => e.type === "checkbox", tt = (e) => e instanceof Date, pe = (e) => e == null;
const ii = (e) => typeof e == "object";
var ne = (e) => !pe(e) && !Array.isArray(e) && ii(e) && !tt(e), si = (e) => ne(e) && e.target ? yt(e.target) ? e.target.checked : e.target.value : e, Es = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, ni = (e, i) => e.has(Es(i)), Ms = (e) => {
  const i = e.constructor && e.constructor.prototype;
  return ne(i) && i.hasOwnProperty("isPrototypeOf");
}, lr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ge(e) {
  let i;
  const r = Array.isArray(e);
  if (e instanceof Date)
    i = new Date(e);
  else if (e instanceof Set)
    i = new Set(e);
  else if (!(lr && (e instanceof Blob || e instanceof FileList)) && (r || ne(e)))
    if (i = r ? [] : {}, !r && !Ms(e))
      i = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (i[t] = ge(e[t]));
  else
    return e;
  return i;
}
var vt = (e) => Array.isArray(e) ? e.filter(Boolean) : [], te = (e) => e === void 0, _ = (e, i, r) => {
  if (!i || !ne(e))
    return r;
  const t = vt(i.split(/[,[\].]+?/)).reduce((s, n) => pe(s) ? s : s[n], e);
  return te(t) || t === e ? te(e[i]) ? r : e[i] : t;
}, Me = (e) => typeof e == "boolean";
const Et = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Ce = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Be = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Cs = G.createContext(null), cr = () => G.useContext(Cs);
var oi = (e, i, r, t = !0) => {
  const s = {
    defaultValues: i._defaultValues
  };
  for (const n in e)
    Object.defineProperty(s, n, {
      get: () => {
        const o = n;
        return i._proxyFormState[o] !== Ce.all && (i._proxyFormState[o] = !t || Ce.all), r && (r[o] = !0), e[o];
      }
    });
  return s;
}, Pe = (e) => ne(e) && !Object.keys(e).length, ai = (e, i, r, t) => {
  r(e);
  const { name: s, ...n } = e;
  return Pe(n) || Object.keys(n).length >= Object.keys(i).length || Object.keys(n).find((o) => i[o] === (!t || Ce.all));
}, Rt = (e) => Array.isArray(e) ? e : [e], ui = (e, i, r) => !e || !i || e === i || Rt(e).some((t) => t && (r ? t === i : t.startsWith(i) || i.startsWith(t)));
function fr(e) {
  const i = G.useRef(e);
  i.current = e, G.useEffect(() => {
    const r = !e.disabled && i.current.subject && i.current.subject.subscribe({
      next: i.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function As(e) {
  const i = cr(), { control: r = i.control, disabled: t, name: s, exact: n } = e || {}, [o, u] = G.useState(r._formState), l = G.useRef(!0), f = G.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), g = G.useRef(s);
  return g.current = s, fr({
    disabled: t,
    next: (h) => l.current && ui(g.current, h.name, n) && ai(h, f.current, r._updateFormState) && u({
      ...r._formState,
      ...h
    }),
    subject: r._subjects.state
  }), G.useEffect(() => (l.current = !0, f.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), oi(o, r, f.current, !1);
}
var ke = (e) => typeof e == "string", li = (e, i, r, t, s) => ke(e) ? (t && i.watch.add(e), _(r, e, s)) : Array.isArray(e) ? e.map((n) => (t && i.watch.add(n), _(r, n))) : (t && (i.watchAll = !0), r);
function Ts(e) {
  const i = cr(), { control: r = i.control, name: t, defaultValue: s, disabled: n, exact: o } = e || {}, u = G.useRef(t);
  u.current = t, fr({
    disabled: n,
    subject: r._subjects.values,
    next: (g) => {
      ui(u.current, g.name, o) && f(ge(li(u.current, r._names, g.values || r._formValues, !1, s)));
    }
  });
  const [l, f] = G.useState(r._getWatch(t, s));
  return G.useEffect(() => r._removeUnmounted()), l;
}
var dr = (e) => /^\w*$/.test(e), ci = (e) => vt(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Q = (e, i, r) => {
  let t = -1;
  const s = dr(i) ? [i] : ci(i), n = s.length, o = n - 1;
  for (; ++t < n; ) {
    const u = s[t];
    let l = r;
    if (t !== o) {
      const f = e[u];
      l = ne(f) || Array.isArray(f) ? f : isNaN(+s[t + 1]) ? {} : [];
    }
    e[u] = l, e = e[u];
  }
  return e;
};
function Ns(e) {
  const i = cr(), { name: r, disabled: t, control: s = i.control, shouldUnregister: n } = e, o = ni(s._names.array, r), u = Ts({
    control: s,
    name: r,
    defaultValue: _(s._formValues, r, _(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = As({
    control: s,
    name: r
  }), f = G.useRef(s.register(r, {
    ...e.rules,
    value: u,
    ...Me(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return G.useEffect(() => {
    const g = s._options.shouldUnregister || n, h = (d, m) => {
      const v = _(s._fields, d);
      v && (v._f.mount = m);
    };
    if (h(r, !0), g) {
      const d = ge(_(s._options.defaultValues, r));
      Q(s._defaultValues, r, d), te(_(s._formValues, r)) && Q(s._formValues, r, d);
    }
    return () => {
      (o ? g && !s._state.action : g) ? s.unregister(r) : h(r, !1);
    };
  }, [r, s, o, n]), G.useEffect(() => {
    _(s._fields, r) && s._updateDisabledField({
      disabled: t,
      fields: s._fields,
      name: r,
      value: _(s._fields, r)._f.value
    });
  }, [t, r, s]), {
    field: {
      name: r,
      value: u,
      ...Me(t) || l.disabled ? { disabled: l.disabled || t } : {},
      onChange: G.useCallback((g) => f.current.onChange({
        target: {
          value: si(g),
          name: r
        },
        type: Et.CHANGE
      }), [r]),
      onBlur: G.useCallback(() => f.current.onBlur({
        target: {
          value: _(s._formValues, r),
          name: r
        },
        type: Et.BLUR
      }), [r, s]),
      ref: (g) => {
        const h = _(s._fields, r);
        h && g && (h._f.ref = {
          focus: () => g.focus(),
          select: () => g.select(),
          setCustomValidity: (d) => g.setCustomValidity(d),
          reportValidity: () => g.reportValidity()
        });
      }
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!_(l.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!_(l.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!_(l.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => _(l.errors, r)
      }
    })
  };
}
const ks = (e) => e.render(Ns(e));
var fi = (e, i, r, t, s) => i ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: s || !0
  }
} : {}, Pr = (e) => ({
  isOnSubmit: !e || e === Ce.onSubmit,
  isOnBlur: e === Ce.onBlur,
  isOnChange: e === Ce.onChange,
  isOnAll: e === Ce.all,
  isOnTouch: e === Ce.onTouched
}), Er = (e, i, r) => !r && (i.watchAll || i.watch.has(e) || [...i.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const ct = (e, i, r, t) => {
  for (const s of r || Object.keys(e)) {
    const n = _(e, s);
    if (n) {
      const { _f: o, ...u } = n;
      if (o) {
        if (o.refs && o.refs[0] && i(o.refs[0], s) && !t)
          break;
        if (o.ref && i(o.ref, o.name) && !t)
          break;
        ct(u, i);
      } else
        ne(u) && ct(u, i);
    }
  }
};
var Fs = (e, i, r) => {
  const t = vt(_(e, r));
  return Q(t, "root", i[r]), Q(e, r, t), e;
}, hr = (e) => e.type === "file", qe = (e) => typeof e == "function", Mt = (e) => {
  if (!lr)
    return !1;
  const i = e ? e.ownerDocument : 0;
  return e instanceof (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement);
}, Pt = (e) => ke(e), pr = (e) => e.type === "radio", Ct = (e) => e instanceof RegExp;
const Mr = {
  value: !1,
  isValid: !1
}, Cr = { value: !0, isValid: !0 };
var di = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const i = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: i, isValid: !!i.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !te(e[0].attributes.value) ? te(e[0].value) || e[0].value === "" ? Cr : { value: e[0].value, isValid: !0 } : Cr
    ) : Mr;
  }
  return Mr;
};
const Ar = {
  isValid: !1,
  value: null
};
var hi = (e) => Array.isArray(e) ? e.reduce((i, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : i, Ar) : Ar;
function Tr(e, i, r = "validate") {
  if (Pt(e) || Array.isArray(e) && e.every(Pt) || Me(e) && !e)
    return {
      type: r,
      message: Pt(e) ? e : "",
      ref: i
    };
}
var Ze = (e) => ne(e) && !Ct(e) ? e : {
  value: e,
  message: ""
}, Nr = async (e, i, r, t, s) => {
  const { ref: n, refs: o, required: u, maxLength: l, minLength: f, min: g, max: h, pattern: d, validate: m, name: v, valueAsNumber: D, mount: F, disabled: H } = e._f, S = _(i, v);
  if (!F || H)
    return {};
  const C = o ? o[0] : n, k = (A) => {
    t && C.reportValidity && (C.setCustomValidity(Me(A) ? "" : A || ""), C.reportValidity());
  }, W = {}, V = pr(n), X = yt(n), j = V || X, B = (D || hr(n)) && te(n.value) && te(S) || Mt(n) && n.value === "" || S === "" || Array.isArray(S) && !S.length, U = fi.bind(null, v, r, W), $ = (A, N, q, ie = Be.maxLength, Z = Be.minLength) => {
    const ee = A ? N : q;
    W[v] = {
      type: A ? ie : Z,
      message: ee,
      ref: n,
      ...U(A ? ie : Z, ee)
    };
  };
  if (s ? !Array.isArray(S) || !S.length : u && (!j && (B || pe(S)) || Me(S) && !S || X && !di(o).isValid || V && !hi(o).isValid)) {
    const { value: A, message: N } = Pt(u) ? { value: !!u, message: u } : Ze(u);
    if (A && (W[v] = {
      type: Be.required,
      message: N,
      ref: C,
      ...U(Be.required, N)
    }, !r))
      return k(N), W;
  }
  if (!B && (!pe(g) || !pe(h))) {
    let A, N;
    const q = Ze(h), ie = Ze(g);
    if (!pe(S) && !isNaN(S)) {
      const Z = n.valueAsNumber || S && +S;
      pe(q.value) || (A = Z > q.value), pe(ie.value) || (N = Z < ie.value);
    } else {
      const Z = n.valueAsDate || new Date(S), ee = (fe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + fe), oe = n.type == "time", _e = n.type == "week";
      ke(q.value) && S && (A = oe ? ee(S) > ee(q.value) : _e ? S > q.value : Z > new Date(q.value)), ke(ie.value) && S && (N = oe ? ee(S) < ee(ie.value) : _e ? S < ie.value : Z < new Date(ie.value));
    }
    if ((A || N) && ($(!!A, q.message, ie.message, Be.max, Be.min), !r))
      return k(W[v].message), W;
  }
  if ((l || f) && !B && (ke(S) || s && Array.isArray(S))) {
    const A = Ze(l), N = Ze(f), q = !pe(A.value) && S.length > +A.value, ie = !pe(N.value) && S.length < +N.value;
    if ((q || ie) && ($(q, A.message, N.message), !r))
      return k(W[v].message), W;
  }
  if (d && !B && ke(S)) {
    const { value: A, message: N } = Ze(d);
    if (Ct(A) && !S.match(A) && (W[v] = {
      type: Be.pattern,
      message: N,
      ref: n,
      ...U(Be.pattern, N)
    }, !r))
      return k(N), W;
  }
  if (m) {
    if (qe(m)) {
      const A = await m(S, i), N = Tr(A, C);
      if (N && (W[v] = {
        ...N,
        ...U(Be.validate, N.message)
      }, !r))
        return k(N.message), W;
    } else if (ne(m)) {
      let A = {};
      for (const N in m) {
        if (!Pe(A) && !r)
          break;
        const q = Tr(await m[N](S, i), C, N);
        q && (A = {
          ...q,
          ...U(N, q.message)
        }, k(q.message), r && (W[v] = A));
      }
      if (!Pe(A) && (W[v] = {
        ref: C,
        ...A
      }, !r))
        return W;
    }
  }
  return k(!0), W;
};
function Ls(e, i) {
  const r = i.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = te(e) ? t++ : e[i[t++]];
  return e;
}
function Ws(e) {
  for (const i in e)
    if (e.hasOwnProperty(i) && !te(e[i]))
      return !1;
  return !0;
}
function ce(e, i) {
  const r = Array.isArray(i) ? i : dr(i) ? [i] : ci(i), t = r.length === 1 ? e : Ls(e, r), s = r.length - 1, n = r[s];
  return t && delete t[n], s !== 0 && (ne(t) && Pe(t) || Array.isArray(t) && Ws(t)) && ce(e, r.slice(0, -1)), e;
}
var qt = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const n of e)
        n.next && n.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((n) => n !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, At = (e) => pe(e) || !ii(e);
function Xe(e, i) {
  if (At(e) || At(i))
    return e === i;
  if (tt(e) && tt(i))
    return e.getTime() === i.getTime();
  const r = Object.keys(e), t = Object.keys(i);
  if (r.length !== t.length)
    return !1;
  for (const s of r) {
    const n = e[s];
    if (!t.includes(s))
      return !1;
    if (s !== "ref") {
      const o = i[s];
      if (tt(n) && tt(o) || ne(n) && ne(o) || Array.isArray(n) && Array.isArray(o) ? !Xe(n, o) : n !== o)
        return !1;
    }
  }
  return !0;
}
var pi = (e) => e.type === "select-multiple", Hs = (e) => pr(e) || yt(e), Yt = (e) => Mt(e) && e.isConnected, gi = (e) => {
  for (const i in e)
    if (qe(e[i]))
      return !0;
  return !1;
};
function Tt(e, i = {}) {
  const r = Array.isArray(e);
  if (ne(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || ne(e[t]) && !gi(e[t]) ? (i[t] = Array.isArray(e[t]) ? [] : {}, Tt(e[t], i[t])) : pe(e[t]) || (i[t] = !0);
  return i;
}
function yi(e, i, r) {
  const t = Array.isArray(e);
  if (ne(e) || t)
    for (const s in e)
      Array.isArray(e[s]) || ne(e[s]) && !gi(e[s]) ? te(i) || At(r[s]) ? r[s] = Array.isArray(e[s]) ? Tt(e[s], []) : { ...Tt(e[s]) } : yi(e[s], pe(i) ? {} : i[s], r[s]) : r[s] = !Xe(e[s], i[s]);
  return r;
}
var St = (e, i) => yi(e, i, Tt(i)), vi = (e, { valueAsNumber: i, valueAsDate: r, setValueAs: t }) => te(e) ? e : i ? e === "" ? NaN : e && +e : r && ke(e) ? new Date(e) : t ? t(e) : e;
function Xt(e) {
  const i = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : i.disabled))
    return hr(i) ? i.files : pr(i) ? hi(e.refs).value : pi(i) ? [...i.selectedOptions].map(({ value: r }) => r) : yt(i) ? di(e.refs).value : vi(te(i.value) ? e.ref.value : i.value, e);
}
var Bs = (e, i, r, t) => {
  const s = {};
  for (const n of e) {
    const o = _(i, n);
    o && Q(s, n, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: t
  };
}, at = (e) => te(e) ? e : Ct(e) ? e.source : ne(e) ? Ct(e.value) ? e.value.source : e.value : e, Vs = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function kr(e, i, r) {
  const t = _(e, r);
  if (t || dr(r))
    return {
      error: t,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const n = s.join("."), o = _(i, n), u = _(e, n);
    if (o && !Array.isArray(o) && r !== n)
      return { name: r };
    if (u && u.type)
      return {
        name: n,
        error: u
      };
    s.pop();
  }
  return {
    name: r
  };
}
var Is = (e, i, r, t, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(i || e) : (r ? t.isOnBlur : s.isOnBlur) ? !e : (r ? t.isOnChange : s.isOnChange) ? e : !0, js = (e, i) => !vt(_(e, i)).length && ce(e, i);
const Us = {
  mode: Ce.onSubmit,
  reValidateMode: Ce.onChange,
  shouldFocusError: !0
};
function $s(e = {}, i) {
  let r = {
    ...Us,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: qe(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, s = {}, n = ne(r.values) || ne(r.defaultValues) ? ge(r.values || r.defaultValues) || {} : {}, o = r.shouldUnregister ? {} : ge(n), u = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, f, g = 0;
  const h = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, d = {
    values: qt(),
    array: qt(),
    state: qt()
  }, m = Pr(r.mode), v = Pr(r.reValidateMode), D = r.criteriaMode === Ce.all, F = (a) => (c) => {
    clearTimeout(g), g = setTimeout(a, c);
  }, H = async (a) => {
    if (h.isValid || a) {
      const c = r.resolver ? Pe((await B()).errors) : await $(s, !0);
      c !== t.isValid && d.state.next({
        isValid: c
      });
    }
  }, S = (a) => h.isValidating && d.state.next({
    isValidating: a
  }), C = (a, c = [], p, P, x = !0, b = !0) => {
    if (P && p) {
      if (u.action = !0, b && Array.isArray(_(s, a))) {
        const T = p(_(s, a), P.argA, P.argB);
        x && Q(s, a, T);
      }
      if (b && Array.isArray(_(t.errors, a))) {
        const T = p(_(t.errors, a), P.argA, P.argB);
        x && Q(t.errors, a, T), js(t.errors, a);
      }
      if (h.touchedFields && b && Array.isArray(_(t.touchedFields, a))) {
        const T = p(_(t.touchedFields, a), P.argA, P.argB);
        x && Q(t.touchedFields, a, T);
      }
      h.dirtyFields && (t.dirtyFields = St(n, o)), d.state.next({
        name: a,
        isDirty: N(a, c),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      Q(o, a, c);
  }, k = (a, c) => {
    Q(t.errors, a, c), d.state.next({
      errors: t.errors
    });
  }, W = (a) => {
    t.errors = a, d.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, V = (a, c, p, P) => {
    const x = _(s, a);
    if (x) {
      const b = _(o, a, te(p) ? _(n, a) : p);
      te(b) || P && P.defaultChecked || c ? Q(o, a, c ? b : Xt(x._f)) : Z(a, b), u.mount && H();
    }
  }, X = (a, c, p, P, x) => {
    let b = !1, T = !1;
    const J = {
      name: a
    }, ae = !!(_(s, a) && _(s, a)._f.disabled);
    if (!p || P) {
      h.isDirty && (T = t.isDirty, t.isDirty = J.isDirty = N(), b = T !== J.isDirty);
      const Te = ae || Xe(_(n, a), c);
      T = !!(!ae && _(t.dirtyFields, a)), Te || ae ? ce(t.dirtyFields, a) : Q(t.dirtyFields, a, !0), J.dirtyFields = t.dirtyFields, b = b || h.dirtyFields && T !== !Te;
    }
    if (p) {
      const Te = _(t.touchedFields, a);
      Te || (Q(t.touchedFields, a, p), J.touchedFields = t.touchedFields, b = b || h.touchedFields && Te !== p);
    }
    return b && x && d.state.next(J), b ? J : {};
  }, j = (a, c, p, P) => {
    const x = _(t.errors, a), b = h.isValid && Me(c) && t.isValid !== c;
    if (e.delayError && p ? (f = F(() => k(a, p)), f(e.delayError)) : (clearTimeout(g), f = null, p ? Q(t.errors, a, p) : ce(t.errors, a)), (p ? !Xe(x, p) : x) || !Pe(P) || b) {
      const T = {
        ...P,
        ...b && Me(c) ? { isValid: c } : {},
        errors: t.errors,
        name: a
      };
      t = {
        ...t,
        ...T
      }, d.state.next(T);
    }
    S(!1);
  }, B = async (a) => r.resolver(o, r.context, Bs(a || l.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), U = async (a) => {
    const { errors: c } = await B(a);
    if (a)
      for (const p of a) {
        const P = _(c, p);
        P ? Q(t.errors, p, P) : ce(t.errors, p);
      }
    else
      t.errors = c;
    return c;
  }, $ = async (a, c, p = {
    valid: !0
  }) => {
    for (const P in a) {
      const x = a[P];
      if (x) {
        const { _f: b, ...T } = x;
        if (b) {
          const J = l.array.has(b.name), ae = await Nr(x, o, D, r.shouldUseNativeValidation && !c, J);
          if (ae[b.name] && (p.valid = !1, c))
            break;
          !c && (_(ae, b.name) ? J ? Fs(t.errors, ae, b.name) : Q(t.errors, b.name, ae[b.name]) : ce(t.errors, b.name));
        }
        T && await $(T, c, p);
      }
    }
    return p.valid;
  }, A = () => {
    for (const a of l.unMount) {
      const c = _(s, a);
      c && (c._f.refs ? c._f.refs.every((p) => !Yt(p)) : !Yt(c._f.ref)) && L(a);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, N = (a, c) => (a && c && Q(o, a, c), !Xe(y(), n)), q = (a, c, p) => li(a, l, {
    ...u.mount ? o : te(c) ? n : ke(a) ? { [a]: c } : c
  }, p, c), ie = (a) => vt(_(u.mount ? o : n, a, e.shouldUnregister ? _(n, a, []) : [])), Z = (a, c, p = {}) => {
    const P = _(s, a);
    let x = c;
    if (P) {
      const b = P._f;
      b && (!b.disabled && Q(o, a, vi(c, b)), x = Mt(b.ref) && pe(c) ? "" : c, pi(b.ref) ? [...b.ref.options].forEach((T) => T.selected = x.includes(T.value)) : b.refs ? yt(b.ref) ? b.refs.length > 1 ? b.refs.forEach((T) => (!T.defaultChecked || !T.disabled) && (T.checked = Array.isArray(x) ? !!x.find((J) => J === T.value) : x === T.value)) : b.refs[0] && (b.refs[0].checked = !!x) : b.refs.forEach((T) => T.checked = T.value === x) : hr(b.ref) ? b.ref.value = "" : (b.ref.value = x, b.ref.type || d.values.next({
        name: a,
        values: { ...o }
      })));
    }
    (p.shouldDirty || p.shouldTouch) && X(a, x, p.shouldTouch, p.shouldDirty, !0), p.shouldValidate && Ae(a);
  }, ee = (a, c, p) => {
    for (const P in c) {
      const x = c[P], b = `${a}.${P}`, T = _(s, b);
      (l.array.has(a) || !At(x) || T && !T._f) && !tt(x) ? ee(b, x, p) : Z(b, x, p);
    }
  }, oe = (a, c, p = {}) => {
    const P = _(s, a), x = l.array.has(a), b = ge(c);
    Q(o, a, b), x ? (d.array.next({
      name: a,
      values: { ...o }
    }), (h.isDirty || h.dirtyFields) && p.shouldDirty && d.state.next({
      name: a,
      dirtyFields: St(n, o),
      isDirty: N(a, b)
    })) : P && !P._f && !pe(b) ? ee(a, b, p) : Z(a, b, p), Er(a, l) && d.state.next({ ...t }), d.values.next({
      name: a,
      values: { ...o }
    }), !u.mount && i();
  }, _e = async (a) => {
    const c = a.target;
    let p = c.name, P = !0;
    const x = _(s, p), b = () => c.type ? Xt(x._f) : si(a), T = (J) => {
      P = Number.isNaN(J) || J === _(o, p, J);
    };
    if (x) {
      let J, ae;
      const Te = b(), Je = a.type === Et.BLUR || a.type === Et.FOCUS_OUT, Wi = !Vs(x._f) && !r.resolver && !_(t.errors, p) && !x._f.deps || Is(Je, _(t.touchedFields, p), t.isSubmitted, v, m), jt = Er(p, l, Je);
      Q(o, p, Te), Je ? (x._f.onBlur && x._f.onBlur(a), f && f(0)) : x._f.onChange && x._f.onChange(a);
      const Ut = X(p, Te, Je, !1), Hi = !Pe(Ut) || jt;
      if (!Je && d.values.next({
        name: p,
        type: a.type,
        values: { ...o }
      }), Wi)
        return h.isValid && H(), Hi && d.state.next({ name: p, ...jt ? {} : Ut });
      if (!Je && jt && d.state.next({ ...t }), S(!0), r.resolver) {
        const { errors: Sr } = await B([p]);
        if (T(Te), P) {
          const Bi = kr(t.errors, s, p), xr = kr(Sr, s, Bi.name || p);
          J = xr.error, p = xr.name, ae = Pe(Sr);
        }
      } else
        J = (await Nr(x, o, D, r.shouldUseNativeValidation))[p], T(Te), P && (J ? ae = !1 : h.isValid && (ae = await $(s, !0)));
      P && (x._f.deps && Ae(x._f.deps), j(p, ae, J, Ut));
    }
  }, fe = (a, c) => {
    if (_(t.errors, c) && a.focus)
      return a.focus(), 1;
  }, Ae = async (a, c = {}) => {
    let p, P;
    const x = Rt(a);
    if (S(!0), r.resolver) {
      const b = await U(te(a) ? a : x);
      p = Pe(b), P = a ? !x.some((T) => _(b, T)) : p;
    } else
      a ? (P = (await Promise.all(x.map(async (b) => {
        const T = _(s, b);
        return await $(T && T._f ? { [b]: T } : T);
      }))).every(Boolean), !(!P && !t.isValid) && H()) : P = p = await $(s);
    return d.state.next({
      ...!ke(a) || h.isValid && p !== t.isValid ? {} : { name: a },
      ...r.resolver || !a ? { isValid: p } : {},
      errors: t.errors,
      isValidating: !1
    }), c.shouldFocus && !P && ct(s, fe, a ? x : l.mount), P;
  }, y = (a) => {
    const c = {
      ...n,
      ...u.mount ? o : {}
    };
    return te(a) ? c : ke(a) ? _(c, a) : a.map((p) => _(c, p));
  }, w = (a, c) => ({
    invalid: !!_((c || t).errors, a),
    isDirty: !!_((c || t).dirtyFields, a),
    isTouched: !!_((c || t).touchedFields, a),
    error: _((c || t).errors, a)
  }), O = (a) => {
    a && Rt(a).forEach((c) => ce(t.errors, c)), d.state.next({
      errors: a ? t.errors : {}
    });
  }, z = (a, c, p) => {
    const P = (_(s, a, { _f: {} })._f || {}).ref;
    Q(t.errors, a, {
      ...c,
      ref: P
    }), d.state.next({
      name: a,
      errors: t.errors,
      isValid: !1
    }), p && p.shouldFocus && P && P.focus && P.focus();
  }, R = (a, c) => qe(a) ? d.values.subscribe({
    next: (p) => a(q(void 0, c), p)
  }) : q(a, c, !0), L = (a, c = {}) => {
    for (const p of a ? Rt(a) : l.mount)
      l.mount.delete(p), l.array.delete(p), c.keepValue || (ce(s, p), ce(o, p)), !c.keepError && ce(t.errors, p), !c.keepDirty && ce(t.dirtyFields, p), !c.keepTouched && ce(t.touchedFields, p), !r.shouldUnregister && !c.keepDefaultValue && ce(n, p);
    d.values.next({
      values: { ...o }
    }), d.state.next({
      ...t,
      ...c.keepDirty ? { isDirty: N() } : {}
    }), !c.keepIsValid && H();
  }, I = ({ disabled: a, name: c, field: p, fields: P, value: x }) => {
    if (Me(a)) {
      const b = a ? void 0 : te(x) ? Xt(p ? p._f : _(P, c)._f) : x;
      Q(o, c, b), X(c, b, !1, !1, !0);
    }
  }, K = (a, c = {}) => {
    let p = _(s, a);
    const P = Me(c.disabled);
    return Q(s, a, {
      ...p || {},
      _f: {
        ...p && p._f ? p._f : { ref: { name: a } },
        name: a,
        mount: !0,
        ...c
      }
    }), l.mount.add(a), p ? I({
      field: p,
      disabled: c.disabled,
      name: a,
      value: c.value
    }) : V(a, !0, c.value), {
      ...P ? { disabled: c.disabled } : {},
      ...r.progressive ? {
        required: !!c.required,
        min: at(c.min),
        max: at(c.max),
        minLength: at(c.minLength),
        maxLength: at(c.maxLength),
        pattern: at(c.pattern)
      } : {},
      name: a,
      onChange: _e,
      onBlur: _e,
      ref: (x) => {
        if (x) {
          K(a, c), p = _(s, a);
          const b = te(x.value) && x.querySelectorAll && x.querySelectorAll("input,select,textarea")[0] || x, T = Hs(b), J = p._f.refs || [];
          if (T ? J.find((ae) => ae === b) : b === p._f.ref)
            return;
          Q(s, a, {
            _f: {
              ...p._f,
              ...T ? {
                refs: [
                  ...J.filter(Yt),
                  b,
                  ...Array.isArray(_(n, a)) ? [{}] : []
                ],
                ref: { type: b.type, name: a }
              } : { ref: b }
            }
          }), V(a, !1, void 0, b);
        } else
          p = _(s, a, {}), p._f && (p._f.mount = !1), (r.shouldUnregister || c.shouldUnregister) && !(ni(l.array, a) && u.action) && l.unMount.add(a);
      }
    };
  }, Y = () => r.shouldFocusError && ct(s, fe, l.mount), We = (a) => {
    Me(a) && (d.state.next({ disabled: a }), ct(s, (c, p) => {
      let P = a;
      const x = _(s, p);
      x && Me(x._f.disabled) && (P || (P = x._f.disabled)), c.disabled = P;
    }, 0, !1));
  }, ve = (a, c) => async (p) => {
    let P;
    p && (p.preventDefault && p.preventDefault(), p.persist && p.persist());
    let x = ge(o);
    if (d.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: b, values: T } = await B();
      t.errors = b, x = T;
    } else
      await $(s);
    if (ce(t.errors, "root"), Pe(t.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await a(x, p);
      } catch (b) {
        P = b;
      }
    } else
      c && await c({ ...t.errors }, p), Y(), setTimeout(Y);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Pe(t.errors) && !P,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), P)
      throw P;
  }, me = (a, c = {}) => {
    _(s, a) && (te(c.defaultValue) ? oe(a, ge(_(n, a))) : (oe(a, c.defaultValue), Q(n, a, ge(c.defaultValue))), c.keepTouched || ce(t.touchedFields, a), c.keepDirty || (ce(t.dirtyFields, a), t.isDirty = c.defaultValue ? N(a, ge(_(n, a))) : N()), c.keepError || (ce(t.errors, a), h.isValid && H()), d.state.next({ ...t }));
  }, De = (a, c = {}) => {
    const p = a ? ge(a) : n, P = ge(p), x = a && !Pe(a) ? P : n;
    if (c.keepDefaultValues || (n = p), !c.keepValues) {
      if (c.keepDirtyValues)
        for (const b of l.mount)
          _(t.dirtyFields, b) ? Q(x, b, _(o, b)) : oe(b, _(x, b));
      else {
        if (lr && te(a))
          for (const b of l.mount) {
            const T = _(s, b);
            if (T && T._f) {
              const J = Array.isArray(T._f.refs) ? T._f.refs[0] : T._f.ref;
              if (Mt(J)) {
                const ae = J.closest("form");
                if (ae) {
                  ae.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      o = e.shouldUnregister ? c.keepDefaultValues ? ge(n) : {} : ge(x), d.array.next({
        values: { ...x }
      }), d.values.next({
        values: { ...x }
      });
    }
    l = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !u.mount && i(), u.mount = !h.isValid || !!c.keepIsValid || !!c.keepDirtyValues, u.watch = !!e.shouldUnregister, d.state.next({
      submitCount: c.keepSubmitCount ? t.submitCount : 0,
      isDirty: c.keepDirty ? t.isDirty : !!(c.keepDefaultValues && !Xe(a, n)),
      isSubmitted: c.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: c.keepDirtyValues ? c.keepDefaultValues && o ? St(n, o) : t.dirtyFields : c.keepDefaultValues && a ? St(n, a) : {},
      touchedFields: c.keepTouched ? t.touchedFields : {},
      errors: c.keepErrors ? t.errors : {},
      isSubmitSuccessful: c.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ie = (a, c) => De(qe(a) ? a(o) : a, c);
  return {
    control: {
      register: K,
      unregister: L,
      getFieldState: w,
      handleSubmit: ve,
      setError: z,
      _executeSchema: B,
      _getWatch: q,
      _getDirty: N,
      _updateValid: H,
      _removeUnmounted: A,
      _updateFieldArray: C,
      _updateDisabledField: I,
      _getFieldArray: ie,
      _reset: De,
      _resetDefaultValues: () => qe(r.defaultValues) && r.defaultValues().then((a) => {
        Ie(a, r.resetOptions), d.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (a) => {
        t = {
          ...t,
          ...a
        };
      },
      _disableForm: We,
      _subjects: d,
      _proxyFormState: h,
      _setErrors: W,
      get _fields() {
        return s;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return u;
      },
      set _state(a) {
        u = a;
      },
      get _defaultValues() {
        return n;
      },
      get _names() {
        return l;
      },
      set _names(a) {
        l = a;
      },
      get _formState() {
        return t;
      },
      set _formState(a) {
        t = a;
      },
      get _options() {
        return r;
      },
      set _options(a) {
        r = {
          ...r,
          ...a
        };
      }
    },
    trigger: Ae,
    register: K,
    handleSubmit: ve,
    watch: R,
    setValue: oe,
    getValues: y,
    reset: Ie,
    resetField: me,
    clearErrors: O,
    unregister: L,
    setError: z,
    setFocus: (a, c = {}) => {
      const p = _(s, a), P = p && p._f;
      if (P) {
        const x = P.refs ? P.refs[0] : P.ref;
        x.focus && (x.focus(), c.shouldSelect && x.select());
      }
    },
    getFieldState: w
  };
}
function qs(e = {}) {
  const i = G.useRef(), r = G.useRef(), [t, s] = G.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: qe(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: qe(e.defaultValues) ? void 0 : e.defaultValues
  });
  i.current || (i.current = {
    ...$s(e, () => s((o) => ({ ...o }))),
    formState: t
  });
  const n = i.current.control;
  return n._options = e, fr({
    subject: n._subjects.state,
    next: (o) => {
      ai(o, n._proxyFormState, n._updateFormState, !0) && s({ ...n._formState });
    }
  }), G.useEffect(() => n._disableForm(e.disabled), [n, e.disabled]), G.useEffect(() => {
    if (n._proxyFormState.isDirty) {
      const o = n._getDirty();
      o !== t.isDirty && n._subjects.state.next({
        isDirty: o
      });
    }
  }, [n, t.isDirty]), G.useEffect(() => {
    e.values && !Xe(e.values, r.current) ? (n._reset(e.values, n._options.resetOptions), r.current = e.values, s((o) => ({ ...o }))) : n._resetDefaultValues();
  }, [e.values, n]), G.useEffect(() => {
    e.errors && n._setErrors(e.errors);
  }, [e.errors, n]), G.useEffect(() => {
    n._state.mount || (n._updateValid(), n._state.mount = !0), n._state.watch && (n._state.watch = !1, n._subjects.state.next({ ...n._formState })), n._removeUnmounted();
  }), G.useEffect(() => {
    e.shouldUnregister && n._subjects.values.next({
      values: n._getWatch()
    });
  }, [e.shouldUnregister, n]), i.current.formState = oi(t, n), i.current;
}
const Ys = ({
  render: e,
  ...i
}) => /* @__PURE__ */ M(ks, { ...i, render: ({
  field: r,
  fieldState: t,
  ...s
}) => {
  var n;
  return e({
    field: {
      ...r,
      error: (n = t.error) == null ? void 0 : n.message
    },
    fieldState: t,
    ...s
  });
} }), $o = Ys;
var mi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", r = "triangle-exclamation", t = 512, s = 512, n = [9888, "exclamation-triangle", "warning"], o = "f071", u = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  e.definition = {
    prefix: i,
    iconName: r,
    icon: [
      t,
      s,
      n,
      o,
      u
    ]
  }, e.faTriangleExclamation = e.definition, e.prefix = i, e.iconName = r, e.width = t, e.height = s, e.ligatures = n, e.unicode = o, e.svgPathData = u, e.aliases = n;
})(mi);
const Xs = ({
  helperText: e,
  label: i,
  error: r,
  children: t,
  ...s
}, n) => (e = r || e, /* @__PURE__ */ ye("div", { ref: n, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, i && {
  paddingTop: "1.5rem"
}], ...s, children: [
  t,
  i && /* @__PURE__ */ M("label", { css: [{
    pointerEvents: "none",
    position: "absolute",
    left: "0px",
    top: "0px",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(55 65 81 / var(--tw-text-opacity))",
    ".peer:focus ~ &": {
      "--tw-text-opacity": "1",
      color: "rgb(90 84 161 / var(--tw-text-opacity))"
    }
  }, r && {
    "--tw-text-opacity": "1",
    color: "rgb(220 38 38 / var(--tw-text-opacity))"
  }], children: i }),
  e && /* @__PURE__ */ ye("div", { css: [{
    pointerEvents: "none",
    marginTop: "0.25rem",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: "300"
  }, r ? {
    "--tw-text-opacity": "1",
    color: "rgb(220 38 38 / var(--tw-text-opacity))"
  } : {
    "--tw-text-opacity": "1",
    color: "rgb(107 114 128 / var(--tw-text-opacity))"
  }], children: [
    r && /* @__PURE__ */ M(Ve, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: mi.faTriangleExclamation }),
    e
  ] })
] })), Lt = E.forwardRef(Xs);
var Fr = function(e, i, r) {
  if (e && "reportValidity" in e) {
    var t = _(r, i);
    e.setCustomValidity(t && t.message || ""), e.reportValidity();
  }
}, bi = function(e, i) {
  var r = function(s) {
    var n = i.fields[s];
    n && n.ref && "reportValidity" in n.ref ? Fr(n.ref, s, e) : n.refs && n.refs.forEach(function(o) {
      return Fr(o, s, e);
    });
  };
  for (var t in i.fields)
    r(t);
}, Qs = function(e, i) {
  i.shouldUseNativeValidation && bi(e, i);
  var r = {};
  for (var t in e) {
    var s = _(i.fields, t), n = Object.assign(e[t] || {}, { ref: s && s.ref });
    if (Gs(i.names || Object.keys(e), t)) {
      var o = Object.assign({}, _(r, t));
      Q(o, "root", n), Q(r, t, o);
    } else
      Q(r, t, n);
  }
  return r;
}, Gs = function(e, i) {
  return e.some(function(r) {
    return r.startsWith(i + ".");
  });
}, Ks = function(e, i) {
  for (var r = {}; e.length; ) {
    var t = e[0], s = t.code, n = t.message, o = t.path.join(".");
    if (!r[o])
      if ("unionErrors" in t) {
        var u = t.unionErrors[0].errors[0];
        r[o] = { message: u.message, type: u.code };
      } else
        r[o] = { message: n, type: s };
    if ("unionErrors" in t && t.unionErrors.forEach(function(g) {
      return g.errors.forEach(function(h) {
        return e.push(h);
      });
    }), i) {
      var l = r[o].types, f = l && l[t.code];
      r[o] = fi(o, i, r, s, f ? [].concat(f, t.message) : t.message);
    }
    e.shift();
  }
  return r;
}, Js = function(e, i, r) {
  return r === void 0 && (r = {}), function(t, s, n) {
    try {
      return Promise.resolve(function(o, u) {
        try {
          var l = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](t, i)).then(function(f) {
            return n.shouldUseNativeValidation && bi({}, n), { errors: {}, values: r.raw ? t : f };
          });
        } catch (f) {
          return u(f);
        }
        return l && l.then ? l.then(void 0, u) : l;
      }(0, function(o) {
        if (function(u) {
          return u.errors != null;
        }(o))
          return { values: {}, errors: Qs(Ks(o.errors, !n.shouldUseNativeValidation && n.criteriaMode === "all"), n) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
};
const Zs = ({
  schema: e,
  mode: i = "onChange",
  reValidateMode: r = "onChange",
  onValid: t,
  onInvalid: s,
  ...n
} = {}) => {
  const o = qs({
    mode: i,
    reValidateMode: r,
    resolver: e ? Js(e) : void 0,
    ...n
  });
  return {
    onSubmit: o.handleSubmit((u, l) => t == null ? void 0 : t(u, l), s),
    submit: async () => new Promise((u, l) => {
      o.handleSubmit(async (g, h) => {
        try {
          await (t == null ? void 0 : t(g, h)), u(void 0);
        } catch (d) {
          l(d);
        }
      }, (g) => {
        l(g);
      })();
    }),
    ...o
  };
}, qo = ({
  onValid: e,
  context: i,
  mutation: r,
  defaultValues: t,
  schema: s,
  transformSendData: n,
  ...o
}) => {
  const u = Zs({
    context: i,
    schema: s,
    defaultValues: t,
    onValid: async (l) => {
      await (e == null ? void 0 : e(l)), await (r == null ? void 0 : r.mutateAsync(n ? n(l) : l, {
        onError: (f, g) => {
          var d;
          const h = (d = f.response) == null ? void 0 : d.data;
          h ? h.errors ? h.errors.forEach((m) => {
            m.attribute in g ? u.setError(m.attribute, {
              message: m.msg
            }) : u.setError(`root.fields.${m.attribute}`, {
              type: "server",
              message: m.msg
            });
          }) : u.setError("root.error", {
            type: "server",
            message: h.message
          }) : u.setError("root.error", {
            type: "server",
            message: f.message
          });
        }
      }));
    },
    ...o
  });
  return u;
};
var wi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = "fas", r = "xmark", t = 384, s = 512, n = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], o = "f00d", u = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  e.definition = {
    prefix: i,
    iconName: r,
    icon: [
      t,
      s,
      n,
      o,
      u
    ]
  }, e.faXmark = e.definition, e.prefix = i, e.iconName = r, e.width = t, e.height = s, e.ligatures = n, e.unicode = o, e.svgPathData = u, e.aliases = n;
})(wi);
var Wt = { exports: {} }, Si = {};
function xi(e) {
  var i, r, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (i = 0; i < e.length; i++)
        e[i] && (r = xi(e[i])) && (t && (t += " "), t += r);
    else
      for (i in e)
        e[i] && (t && (t += " "), t += i);
  return t;
}
function Lr() {
  for (var e, i, r = 0, t = ""; r < arguments.length; )
    (e = arguments[r++]) && (i = xi(e)) && (t && (t += " "), t += i);
  return t;
}
const en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Lr,
  default: Lr
}, Symbol.toStringTag, { value: "Module" })), tn = /* @__PURE__ */ ns(en);
var re = {}, Fe = {};
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.dontSetMe = an;
Fe.findInArray = rn;
Fe.int = on;
Fe.isFunction = sn;
Fe.isNum = nn;
function rn(e, i) {
  for (var r = 0, t = e.length; r < t; r++)
    if (i.apply(i, [e[r], r, e]))
      return e[r];
}
function sn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function nn(e) {
  return typeof e == "number" && !isNaN(e);
}
function on(e) {
  return parseInt(e, 10);
}
function an(e, i, r) {
  if (e[i])
    return new Error("Invalid prop ".concat(i, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var Ge = {};
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.browserPrefixToKey = Di;
Ge.browserPrefixToStyle = un;
Ge.default = void 0;
Ge.getPrefix = _i;
var Qt = ["Moz", "Webkit", "O", "ms"];
function _i() {
  var e, i, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var t = (e = window.document) === null || e === void 0 || (i = e.documentElement) === null || i === void 0 ? void 0 : i.style;
  if (!t || r in t)
    return "";
  for (var s = 0; s < Qt.length; s++)
    if (Di(r, Qt[s]) in t)
      return Qt[s];
  return "";
}
function Di(e, i) {
  return i ? "".concat(i).concat(ln(e)) : e;
}
function un(e, i) {
  return i ? "-".concat(i.toLowerCase(), "-").concat(e) : e;
}
function ln(e) {
  for (var i = "", r = !0, t = 0; t < e.length; t++)
    r ? (i += e[t].toUpperCase(), r = !1) : e[t] === "-" ? r = !0 : i += e[t];
  return i;
}
var cn = _i();
Ge.default = cn;
function sr(e) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, sr(e);
}
Object.defineProperty(re, "__esModule", {
  value: !0
});
re.addClassName = Ei;
re.addEvent = hn;
re.addUserSelectStyles = Dn;
re.createCSSTransform = wn;
re.createSVGTransform = Sn;
re.getTouch = xn;
re.getTouchIdentifier = _n;
re.getTranslation = gr;
re.innerHeight = vn;
re.innerWidth = mn;
re.matchesSelector = Pi;
re.matchesSelectorAndParentsTo = dn;
re.offsetXYFromParent = bn;
re.outerHeight = gn;
re.outerWidth = yn;
re.removeClassName = Mi;
re.removeEvent = pn;
re.removeUserSelectStyles = zn;
var xe = Fe, Wr = fn(Ge);
function zi(e) {
  if (typeof WeakMap != "function")
    return null;
  var i = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (zi = function(s) {
    return s ? r : i;
  })(e);
}
function fn(e, i) {
  if (!i && e && e.__esModule)
    return e;
  if (e === null || sr(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = zi(i);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var n in e)
    if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
      var o = s ? Object.getOwnPropertyDescriptor(e, n) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, n, o) : t[n] = e[n];
    }
  return t.default = e, r && r.set(e, t), t;
}
function Hr(e, i) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    i && (t = t.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Oi(e) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Hr(Object(r), !0).forEach(function(t) {
      Ri(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Ri(e, i, r) {
  return i in e ? Object.defineProperty(e, i, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = r, e;
}
var xt = "";
function Pi(e, i) {
  return xt || (xt = (0, xe.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, xe.isFunction)(e[r]);
  })), (0, xe.isFunction)(e[xt]) ? e[xt](i) : !1;
}
function dn(e, i, r) {
  var t = e;
  do {
    if (Pi(t, i))
      return !0;
    if (t === r)
      return !1;
    t = t.parentNode;
  } while (t);
  return !1;
}
function hn(e, i, r, t) {
  if (e) {
    var s = Oi({
      capture: !0
    }, t);
    e.addEventListener ? e.addEventListener(i, r, s) : e.attachEvent ? e.attachEvent("on" + i, r) : e["on" + i] = r;
  }
}
function pn(e, i, r, t) {
  if (e) {
    var s = Oi({
      capture: !0
    }, t);
    e.removeEventListener ? e.removeEventListener(i, r, s) : e.detachEvent ? e.detachEvent("on" + i, r) : e["on" + i] = null;
  }
}
function gn(e) {
  var i = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return i += (0, xe.int)(r.borderTopWidth), i += (0, xe.int)(r.borderBottomWidth), i;
}
function yn(e) {
  var i = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return i += (0, xe.int)(r.borderLeftWidth), i += (0, xe.int)(r.borderRightWidth), i;
}
function vn(e) {
  var i = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return i -= (0, xe.int)(r.paddingTop), i -= (0, xe.int)(r.paddingBottom), i;
}
function mn(e) {
  var i = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return i -= (0, xe.int)(r.paddingLeft), i -= (0, xe.int)(r.paddingRight), i;
}
function bn(e, i, r) {
  var t = i === i.ownerDocument.body, s = t ? {
    left: 0,
    top: 0
  } : i.getBoundingClientRect(), n = (e.clientX + i.scrollLeft - s.left) / r, o = (e.clientY + i.scrollTop - s.top) / r;
  return {
    x: n,
    y: o
  };
}
function wn(e, i) {
  var r = gr(e, i, "px");
  return Ri({}, (0, Wr.browserPrefixToKey)("transform", Wr.default), r);
}
function Sn(e, i) {
  var r = gr(e, i, "");
  return r;
}
function gr(e, i, r) {
  var t = e.x, s = e.y, n = "translate(".concat(t).concat(r, ",").concat(s).concat(r, ")");
  if (i) {
    var o = "".concat(typeof i.x == "string" ? i.x : i.x + r), u = "".concat(typeof i.y == "string" ? i.y : i.y + r);
    n = "translate(".concat(o, ", ").concat(u, ")") + n;
  }
  return n;
}
function xn(e, i) {
  return e.targetTouches && (0, xe.findInArray)(e.targetTouches, function(r) {
    return i === r.identifier;
  }) || e.changedTouches && (0, xe.findInArray)(e.changedTouches, function(r) {
    return i === r.identifier;
  });
}
function _n(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Dn(e) {
  if (e) {
    var i = e.getElementById("react-draggable-style-el");
    i || (i = e.createElement("style"), i.type = "text/css", i.id = "react-draggable-style-el", i.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, i.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(i)), e.body && Ei(e.body, "react-draggable-transparent-selection");
  }
}
function zn(e) {
  if (e)
    try {
      if (e.body && Mi(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var i = (e.defaultView || window).getSelection();
        i && i.type !== "Caret" && i.removeAllRanges();
      }
    } catch {
    }
}
function Ei(e, i) {
  e.classList ? e.classList.add(i) : e.className.match(new RegExp("(?:^|\\s)".concat(i, "(?!\\S)"))) || (e.className += " ".concat(i));
}
function Mi(e, i) {
  e.classList ? e.classList.remove(i) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(i, "(?!\\S)"), "g"), "");
}
var Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.canDragX = Pn;
Le.canDragY = En;
Le.createCoreData = Cn;
Le.createDraggableData = An;
Le.getBoundPosition = On;
Le.getControlPosition = Mn;
Le.snapToGrid = Rn;
var we = Fe, rt = re;
function On(e, i, r) {
  if (!e.props.bounds)
    return [i, r];
  var t = e.props.bounds;
  t = typeof t == "string" ? t : Tn(t);
  var s = yr(e);
  if (typeof t == "string") {
    var n = s.ownerDocument, o = n.defaultView, u;
    if (t === "parent" ? u = s.parentNode : u = n.querySelector(t), !(u instanceof o.HTMLElement))
      throw new Error('Bounds selector "' + t + '" could not find an element.');
    var l = u, f = o.getComputedStyle(s), g = o.getComputedStyle(l);
    t = {
      left: -s.offsetLeft + (0, we.int)(g.paddingLeft) + (0, we.int)(f.marginLeft),
      top: -s.offsetTop + (0, we.int)(g.paddingTop) + (0, we.int)(f.marginTop),
      right: (0, rt.innerWidth)(l) - (0, rt.outerWidth)(s) - s.offsetLeft + (0, we.int)(g.paddingRight) - (0, we.int)(f.marginRight),
      bottom: (0, rt.innerHeight)(l) - (0, rt.outerHeight)(s) - s.offsetTop + (0, we.int)(g.paddingBottom) - (0, we.int)(f.marginBottom)
    };
  }
  return (0, we.isNum)(t.right) && (i = Math.min(i, t.right)), (0, we.isNum)(t.bottom) && (r = Math.min(r, t.bottom)), (0, we.isNum)(t.left) && (i = Math.max(i, t.left)), (0, we.isNum)(t.top) && (r = Math.max(r, t.top)), [i, r];
}
function Rn(e, i, r) {
  var t = Math.round(i / e[0]) * e[0], s = Math.round(r / e[1]) * e[1];
  return [t, s];
}
function Pn(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function En(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Mn(e, i, r) {
  var t = typeof i == "number" ? (0, rt.getTouch)(e, i) : null;
  if (typeof i == "number" && !t)
    return null;
  var s = yr(r), n = r.props.offsetParent || s.offsetParent || s.ownerDocument.body;
  return (0, rt.offsetXYFromParent)(t || e, n, r.props.scale);
}
function Cn(e, i, r) {
  var t = e.state, s = !(0, we.isNum)(t.lastX), n = yr(e);
  return s ? {
    node: n,
    deltaX: 0,
    deltaY: 0,
    lastX: i,
    lastY: r,
    x: i,
    y: r
  } : {
    node: n,
    deltaX: i - t.lastX,
    deltaY: r - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: i,
    y: r
  };
}
function An(e, i) {
  var r = e.props.scale;
  return {
    node: i.node,
    x: e.state.x + i.deltaX / r,
    y: e.state.y + i.deltaY / r,
    deltaX: i.deltaX / r,
    deltaY: i.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Tn(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function yr(e) {
  var i = e.findDOMNode();
  if (!i)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return i;
}
var Ht = {}, Bt = {};
Object.defineProperty(Bt, "__esModule", {
  value: !0
});
Bt.default = Nn;
function Nn() {
}
function Nt(e) {
  "@babel/helpers - typeof";
  return Nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Nt(e);
}
Object.defineProperty(Ht, "__esModule", {
  value: !0
});
Ht.default = void 0;
var Gt = Fn(E), be = vr(Gr), kn = vr(Zr), de = re, Ue = Le, Kt = Fe, ut = vr(Bt);
function vr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ci(e) {
  if (typeof WeakMap != "function")
    return null;
  var i = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Ci = function(s) {
    return s ? r : i;
  })(e);
}
function Fn(e, i) {
  if (!i && e && e.__esModule)
    return e;
  if (e === null || Nt(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = Ci(i);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var n in e)
    if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
      var o = s ? Object.getOwnPropertyDescriptor(e, n) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, n, o) : t[n] = e[n];
    }
  return t.default = e, r && r.set(e, t), t;
}
function Br(e, i) {
  return Bn(e) || Hn(e, i) || Wn(e, i) || Ln();
}
function Ln() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wn(e, i) {
  if (e) {
    if (typeof e == "string")
      return Vr(e, i);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Vr(e, i);
  }
}
function Vr(e, i) {
  (i == null || i > e.length) && (i = e.length);
  for (var r = 0, t = new Array(i); r < i; r++)
    t[r] = e[r];
  return t;
}
function Hn(e, i) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t = [], s = !0, n = !1, o, u;
    try {
      for (r = r.call(e); !(s = (o = r.next()).done) && (t.push(o.value), !(i && t.length === i)); s = !0)
        ;
    } catch (l) {
      n = !0, u = l;
    } finally {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (n)
          throw u;
      }
    }
    return t;
  }
}
function Bn(e) {
  if (Array.isArray(e))
    return e;
}
function Vn(e, i) {
  if (!(e instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
function Ir(e, i) {
  for (var r = 0; r < i.length; r++) {
    var t = i[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function In(e, i, r) {
  return i && Ir(e.prototype, i), r && Ir(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jn(e, i) {
  if (typeof i != "function" && i !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(i && i.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), i && nr(e, i);
}
function nr(e, i) {
  return nr = Object.setPrototypeOf || function(t, s) {
    return t.__proto__ = s, t;
  }, nr(e, i);
}
function Un(e) {
  var i = qn();
  return function() {
    var t = kt(e), s;
    if (i) {
      var n = kt(this).constructor;
      s = Reflect.construct(t, arguments, n);
    } else
      s = t.apply(this, arguments);
    return $n(this, s);
  };
}
function $n(e, i) {
  if (i && (Nt(i) === "object" || typeof i == "function"))
    return i;
  if (i !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return he(e);
}
function he(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function kt(e) {
  return kt = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kt(e);
}
function Re(e, i, r) {
  return i in e ? Object.defineProperty(e, i, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = r, e;
}
var Ee = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
}, $e = Ee.mouse, Vt = /* @__PURE__ */ function(e) {
  jn(r, e);
  var i = Un(r);
  function r() {
    var t;
    Vn(this, r);
    for (var s = arguments.length, n = new Array(s), o = 0; o < s; o++)
      n[o] = arguments[o];
    return t = i.call.apply(i, [this].concat(n)), Re(he(t), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), Re(he(t), "mounted", !1), Re(he(t), "handleDragStart", function(u) {
      if (t.props.onMouseDown(u), !t.props.allowAnyClick && typeof u.button == "number" && u.button !== 0)
        return !1;
      var l = t.findDOMNode();
      if (!l || !l.ownerDocument || !l.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var f = l.ownerDocument;
      if (!(t.props.disabled || !(u.target instanceof f.defaultView.Node) || t.props.handle && !(0, de.matchesSelectorAndParentsTo)(u.target, t.props.handle, l) || t.props.cancel && (0, de.matchesSelectorAndParentsTo)(u.target, t.props.cancel, l))) {
        u.type === "touchstart" && u.preventDefault();
        var g = (0, de.getTouchIdentifier)(u);
        t.setState({
          touchIdentifier: g
        });
        var h = (0, Ue.getControlPosition)(u, g, he(t));
        if (h != null) {
          var d = h.x, m = h.y, v = (0, Ue.createCoreData)(he(t), d, m);
          (0, ut.default)("DraggableCore: handleDragStart: %j", v), (0, ut.default)("calling", t.props.onStart);
          var D = t.props.onStart(u, v);
          D === !1 || t.mounted === !1 || (t.props.enableUserSelectHack && (0, de.addUserSelectStyles)(f), t.setState({
            dragging: !0,
            lastX: d,
            lastY: m
          }), (0, de.addEvent)(f, $e.move, t.handleDrag), (0, de.addEvent)(f, $e.stop, t.handleDragStop));
        }
      }
    }), Re(he(t), "handleDrag", function(u) {
      var l = (0, Ue.getControlPosition)(u, t.state.touchIdentifier, he(t));
      if (l != null) {
        var f = l.x, g = l.y;
        if (Array.isArray(t.props.grid)) {
          var h = f - t.state.lastX, d = g - t.state.lastY, m = (0, Ue.snapToGrid)(t.props.grid, h, d), v = Br(m, 2);
          if (h = v[0], d = v[1], !h && !d)
            return;
          f = t.state.lastX + h, g = t.state.lastY + d;
        }
        var D = (0, Ue.createCoreData)(he(t), f, g);
        (0, ut.default)("DraggableCore: handleDrag: %j", D);
        var F = t.props.onDrag(u, D);
        if (F === !1 || t.mounted === !1) {
          try {
            t.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var H = document.createEvent("MouseEvents");
            H.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(H);
          }
          return;
        }
        t.setState({
          lastX: f,
          lastY: g
        });
      }
    }), Re(he(t), "handleDragStop", function(u) {
      if (t.state.dragging) {
        var l = (0, Ue.getControlPosition)(u, t.state.touchIdentifier, he(t));
        if (l != null) {
          var f = l.x, g = l.y;
          if (Array.isArray(t.props.grid)) {
            var h = f - t.state.lastX || 0, d = g - t.state.lastY || 0, m = (0, Ue.snapToGrid)(t.props.grid, h, d), v = Br(m, 2);
            h = v[0], d = v[1], f = t.state.lastX + h, g = t.state.lastY + d;
          }
          var D = (0, Ue.createCoreData)(he(t), f, g), F = t.props.onStop(u, D);
          if (F === !1 || t.mounted === !1)
            return !1;
          var H = t.findDOMNode();
          H && t.props.enableUserSelectHack && (0, de.removeUserSelectStyles)(H.ownerDocument), (0, ut.default)("DraggableCore: handleDragStop: %j", D), t.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), H && ((0, ut.default)("DraggableCore: Removing handlers"), (0, de.removeEvent)(H.ownerDocument, $e.move, t.handleDrag), (0, de.removeEvent)(H.ownerDocument, $e.stop, t.handleDragStop));
        }
      }
    }), Re(he(t), "onMouseDown", function(u) {
      return $e = Ee.mouse, t.handleDragStart(u);
    }), Re(he(t), "onMouseUp", function(u) {
      return $e = Ee.mouse, t.handleDragStop(u);
    }), Re(he(t), "onTouchStart", function(u) {
      return $e = Ee.touch, t.handleDragStart(u);
    }), Re(he(t), "onTouchEnd", function(u) {
      return $e = Ee.touch, t.handleDragStop(u);
    }), t;
  }
  return In(r, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var s = this.findDOMNode();
      s && (0, de.addEvent)(s, Ee.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var s = this.findDOMNode();
      if (s) {
        var n = s.ownerDocument;
        (0, de.removeEvent)(n, Ee.mouse.move, this.handleDrag), (0, de.removeEvent)(n, Ee.touch.move, this.handleDrag), (0, de.removeEvent)(n, Ee.mouse.stop, this.handleDragStop), (0, de.removeEvent)(n, Ee.touch.stop, this.handleDragStop), (0, de.removeEvent)(s, Ee.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, de.removeUserSelectStyles)(n);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var s, n, o;
      return (s = this.props) !== null && s !== void 0 && s.nodeRef ? (n = this.props) === null || n === void 0 || (o = n.nodeRef) === null || o === void 0 ? void 0 : o.current : kn.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Gt.cloneElement(Gt.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]), r;
}(Gt.Component);
Ht.default = Vt;
Re(Vt, "displayName", "DraggableCore");
Re(Vt, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: be.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: be.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: be.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(i, r) {
    if (i[r] && i[r].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: be.default.arrayOf(be.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: be.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: be.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: be.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: be.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: be.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: be.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: be.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: be.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Kt.dontSetMe,
  style: Kt.dontSetMe,
  transform: Kt.dontSetMe
});
Re(Vt, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  function i(y) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
      return typeof w;
    } : function(w) {
      return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
    }, i(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), e.default = void 0;
  var r = v(E), t = d(Gr), s = d(Zr), n = d(tn), o = re, u = Le, l = Fe, f = d(Ht), g = d(Bt), h = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function d(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function m(y) {
    if (typeof WeakMap != "function")
      return null;
    var w = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap();
    return (m = function(R) {
      return R ? O : w;
    })(y);
  }
  function v(y, w) {
    if (!w && y && y.__esModule)
      return y;
    if (y === null || i(y) !== "object" && typeof y != "function")
      return { default: y };
    var O = m(w);
    if (O && O.has(y))
      return O.get(y);
    var z = {}, R = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in y)
      if (L !== "default" && Object.prototype.hasOwnProperty.call(y, L)) {
        var I = R ? Object.getOwnPropertyDescriptor(y, L) : null;
        I && (I.get || I.set) ? Object.defineProperty(z, L, I) : z[L] = y[L];
      }
    return z.default = y, O && O.set(y, z), z;
  }
  function D() {
    return D = Object.assign || function(y) {
      for (var w = 1; w < arguments.length; w++) {
        var O = arguments[w];
        for (var z in O)
          Object.prototype.hasOwnProperty.call(O, z) && (y[z] = O[z]);
      }
      return y;
    }, D.apply(this, arguments);
  }
  function F(y, w) {
    if (y == null)
      return {};
    var O = H(y, w), z, R;
    if (Object.getOwnPropertySymbols) {
      var L = Object.getOwnPropertySymbols(y);
      for (R = 0; R < L.length; R++)
        z = L[R], !(w.indexOf(z) >= 0) && Object.prototype.propertyIsEnumerable.call(y, z) && (O[z] = y[z]);
    }
    return O;
  }
  function H(y, w) {
    if (y == null)
      return {};
    var O = {}, z = Object.keys(y), R, L;
    for (L = 0; L < z.length; L++)
      R = z[L], !(w.indexOf(R) >= 0) && (O[R] = y[R]);
    return O;
  }
  function S(y, w) {
    var O = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var z = Object.getOwnPropertySymbols(y);
      w && (z = z.filter(function(R) {
        return Object.getOwnPropertyDescriptor(y, R).enumerable;
      })), O.push.apply(O, z);
    }
    return O;
  }
  function C(y) {
    for (var w = 1; w < arguments.length; w++) {
      var O = arguments[w] != null ? arguments[w] : {};
      w % 2 ? S(Object(O), !0).forEach(function(z) {
        fe(y, z, O[z]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(O)) : S(Object(O)).forEach(function(z) {
        Object.defineProperty(y, z, Object.getOwnPropertyDescriptor(O, z));
      });
    }
    return y;
  }
  function k(y, w) {
    return B(y) || j(y, w) || V(y, w) || W();
  }
  function W() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function V(y, w) {
    if (y) {
      if (typeof y == "string")
        return X(y, w);
      var O = Object.prototype.toString.call(y).slice(8, -1);
      if (O === "Object" && y.constructor && (O = y.constructor.name), O === "Map" || O === "Set")
        return Array.from(y);
      if (O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))
        return X(y, w);
    }
  }
  function X(y, w) {
    (w == null || w > y.length) && (w = y.length);
    for (var O = 0, z = new Array(w); O < w; O++)
      z[O] = y[O];
    return z;
  }
  function j(y, w) {
    var O = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (O != null) {
      var z = [], R = !0, L = !1, I, K;
      try {
        for (O = O.call(y); !(R = (I = O.next()).done) && (z.push(I.value), !(w && z.length === w)); R = !0)
          ;
      } catch (Y) {
        L = !0, K = Y;
      } finally {
        try {
          !R && O.return != null && O.return();
        } finally {
          if (L)
            throw K;
        }
      }
      return z;
    }
  }
  function B(y) {
    if (Array.isArray(y))
      return y;
  }
  function U(y, w) {
    if (!(y instanceof w))
      throw new TypeError("Cannot call a class as a function");
  }
  function $(y, w) {
    for (var O = 0; O < w.length; O++) {
      var z = w[O];
      z.enumerable = z.enumerable || !1, z.configurable = !0, "value" in z && (z.writable = !0), Object.defineProperty(y, z.key, z);
    }
  }
  function A(y, w, O) {
    return w && $(y.prototype, w), O && $(y, O), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function N(y, w) {
    if (typeof w != "function" && w !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(w && w.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), w && q(y, w);
  }
  function q(y, w) {
    return q = Object.setPrototypeOf || function(z, R) {
      return z.__proto__ = R, z;
    }, q(y, w);
  }
  function ie(y) {
    var w = oe();
    return function() {
      var z = _e(y), R;
      if (w) {
        var L = _e(this).constructor;
        R = Reflect.construct(z, arguments, L);
      } else
        R = z.apply(this, arguments);
      return Z(this, R);
    };
  }
  function Z(y, w) {
    if (w && (i(w) === "object" || typeof w == "function"))
      return w;
    if (w !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return ee(y);
  }
  function ee(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function oe() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function _e(y) {
    return _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(O) {
      return O.__proto__ || Object.getPrototypeOf(O);
    }, _e(y);
  }
  function fe(y, w, O) {
    return w in y ? Object.defineProperty(y, w, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : y[w] = O, y;
  }
  var Ae = /* @__PURE__ */ function(y) {
    N(O, y);
    var w = ie(O);
    function O(z) {
      var R;
      return U(this, O), R = w.call(this, z), fe(ee(R), "onDragStart", function(L, I) {
        (0, g.default)("Draggable: onDragStart: %j", I);
        var K = R.props.onStart(L, (0, u.createDraggableData)(ee(R), I));
        if (K === !1)
          return !1;
        R.setState({
          dragging: !0,
          dragged: !0
        });
      }), fe(ee(R), "onDrag", function(L, I) {
        if (!R.state.dragging)
          return !1;
        (0, g.default)("Draggable: onDrag: %j", I);
        var K = (0, u.createDraggableData)(ee(R), I), Y = {
          x: K.x,
          y: K.y
        };
        if (R.props.bounds) {
          var We = Y.x, ve = Y.y;
          Y.x += R.state.slackX, Y.y += R.state.slackY;
          var me = (0, u.getBoundPosition)(ee(R), Y.x, Y.y), De = k(me, 2), Ie = De[0], Ye = De[1];
          Y.x = Ie, Y.y = Ye, Y.slackX = R.state.slackX + (We - Y.x), Y.slackY = R.state.slackY + (ve - Y.y), K.x = Y.x, K.y = Y.y, K.deltaX = Y.x - R.state.x, K.deltaY = Y.y - R.state.y;
        }
        var je = R.props.onDrag(L, K);
        if (je === !1)
          return !1;
        R.setState(Y);
      }), fe(ee(R), "onDragStop", function(L, I) {
        if (!R.state.dragging)
          return !1;
        var K = R.props.onStop(L, (0, u.createDraggableData)(ee(R), I));
        if (K === !1)
          return !1;
        (0, g.default)("Draggable: onDragStop: %j", I);
        var Y = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, We = !!R.props.position;
        if (We) {
          var ve = R.props.position, me = ve.x, De = ve.y;
          Y.x = me, Y.y = De;
        }
        R.setState(Y);
      }), R.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: z.position ? z.position.x : z.defaultPosition.x,
        y: z.position ? z.position.y : z.defaultPosition.y,
        prevPropsPosition: C({}, z.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, z.position && !(z.onDrag || z.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), R;
    }
    return A(O, [{
      key: "componentDidMount",
      value: function() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
    }, {
      key: "findDOMNode",
      value: function() {
        var R, L, I;
        return (R = (L = this.props) === null || L === void 0 || (I = L.nodeRef) === null || I === void 0 ? void 0 : I.current) !== null && R !== void 0 ? R : s.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var R, L = this.props;
        L.axis, L.bounds;
        var I = L.children, K = L.defaultPosition, Y = L.defaultClassName, We = L.defaultClassNameDragging, ve = L.defaultClassNameDragged, me = L.position, De = L.positionOffset;
        L.scale;
        var Ie = F(L, h), Ye = {}, je = null, bt = !!me, a = !bt || this.state.dragging, c = me || K, p = {
          // Set left if horizontal drag is enabled
          x: (0, u.canDragX)(this) && a ? this.state.x : c.x,
          // Set top if vertical drag is enabled
          y: (0, u.canDragY)(this) && a ? this.state.y : c.y
        };
        this.state.isElementSVG ? je = (0, o.createSVGTransform)(p, De) : Ye = (0, o.createCSSTransform)(p, De);
        var P = (0, n.default)(I.props.className || "", Y, (R = {}, fe(R, We, this.state.dragging), fe(R, ve, this.state.dragged), R));
        return /* @__PURE__ */ r.createElement(f.default, D({}, Ie, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only(I), {
          className: P,
          style: C(C({}, I.props.style), Ye),
          transform: je
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(R, L) {
          var I = R.position, K = L.prevPropsPosition;
          return I && (!K || I.x !== K.x || I.y !== K.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
            position: I,
            prevPropsPosition: K
          }), {
            x: I.x,
            y: I.y,
            prevPropsPosition: C({}, I)
          }) : null;
        }
      )
    }]), O;
  }(r.Component);
  e.default = Ae, fe(Ae, "displayName", "Draggable"), fe(Ae, "propTypes", C(C({}, f.default.propTypes), {}, {
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: t.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: t.default.oneOfType([t.default.shape({
      left: t.default.number,
      right: t.default.number,
      top: t.default.number,
      bottom: t.default.number
    }), t.default.string, t.default.oneOf([!1])]),
    defaultClassName: t.default.string,
    defaultClassNameDragging: t.default.string,
    defaultClassNameDragged: t.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: t.default.shape({
      x: t.default.number,
      y: t.default.number
    }),
    positionOffset: t.default.shape({
      x: t.default.oneOfType([t.default.number, t.default.string]),
      y: t.default.oneOfType([t.default.number, t.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: t.default.shape({
      x: t.default.number,
      y: t.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: l.dontSetMe,
    style: l.dontSetMe,
    transform: l.dontSetMe
  })), fe(Ae, "defaultProps", C(C({}, f.default.defaultProps), {}, {
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  }));
})(Si);
var Ai = Si, Ti = Ai.default, Yn = Ai.DraggableCore;
Wt.exports = Ti;
Wt.exports.default = Ti;
Wt.exports.DraggableCore = Yn;
var Xn = Wt.exports;
const Qn = /* @__PURE__ */ ei(Xn);
var Gn = globalThis && globalThis.__extends || function() {
  var e = function(i, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
      t.__proto__ = s;
    } || function(t, s) {
      for (var n in s)
        Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
    }, e(i, r);
  };
  return function(i, r) {
    e(i, r);
    function t() {
      this.constructor = i;
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Ft = globalThis && globalThis.__assign || function() {
  return Ft = Object.assign || function(e) {
    for (var i, r = 1, t = arguments.length; r < t; r++) {
      i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, Ft.apply(this, arguments);
}, Kn = {
  top: {
    width: "100%",
    height: "10px",
    top: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  right: {
    width: "10px",
    height: "100%",
    top: "0px",
    right: "-5px",
    cursor: "col-resize"
  },
  bottom: {
    width: "100%",
    height: "10px",
    bottom: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  left: {
    width: "10px",
    height: "100%",
    top: "0px",
    left: "-5px",
    cursor: "col-resize"
  },
  topRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    top: "-10px",
    cursor: "ne-resize"
  },
  bottomRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    bottom: "-10px",
    cursor: "se-resize"
  },
  bottomLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    bottom: "-10px",
    cursor: "sw-resize"
  },
  topLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    top: "-10px",
    cursor: "nw-resize"
  }
}, Jn = (
  /** @class */
  function(e) {
    Gn(i, e);
    function i() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.onMouseDown = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r.onTouchStart = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r;
    }
    return i.prototype.render = function() {
      return E.createElement("div", { className: this.props.className || "", style: Ft(Ft({ position: "absolute", userSelect: "none" }, Kn[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, i;
  }(E.PureComponent)
), mr = { exports: {} };
function Zn(e, i) {
  var r = i && i.cache ? i.cache : no, t = i && i.serializer ? i.serializer : so, s = i && i.strategy ? i.strategy : to;
  return s(e, {
    cache: r,
    serializer: t
  });
}
function eo(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Ni(e, i, r, t) {
  var s = eo(t) ? t : r(t), n = i.get(s);
  return typeof n > "u" && (n = e.call(this, t), i.set(s, n)), n;
}
function ki(e, i, r) {
  var t = Array.prototype.slice.call(arguments, 3), s = r(t), n = i.get(s);
  return typeof n > "u" && (n = e.apply(this, t), i.set(s, n)), n;
}
function br(e, i, r, t, s) {
  return r.bind(
    i,
    e,
    t,
    s
  );
}
function to(e, i) {
  var r = e.length === 1 ? Ni : ki;
  return br(
    e,
    this,
    r,
    i.cache.create(),
    i.serializer
  );
}
function ro(e, i) {
  var r = ki;
  return br(
    e,
    this,
    r,
    i.cache.create(),
    i.serializer
  );
}
function io(e, i) {
  var r = Ni;
  return br(
    e,
    this,
    r,
    i.cache.create(),
    i.serializer
  );
}
function so() {
  return JSON.stringify(arguments);
}
function It() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
It.prototype.has = function(e) {
  return e in this.cache;
};
It.prototype.get = function(e) {
  return this.cache[e];
};
It.prototype.set = function(e, i) {
  this.cache[e] = i;
};
var no = {
  create: function() {
    return new It();
  }
};
mr.exports = Zn;
mr.exports.strategies = {
  variadic: ro,
  monadic: io
};
var oo = mr.exports;
const Ke = /* @__PURE__ */ ei(oo);
var ao = globalThis && globalThis.__extends || function() {
  var e = function(i, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
      t.__proto__ = s;
    } || function(t, s) {
      for (var n in s)
        Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
    }, e(i, r);
  };
  return function(i, r) {
    e(i, r);
    function t() {
      this.constructor = i;
    }
    i.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Ne = globalThis && globalThis.__assign || function() {
  return Ne = Object.assign || function(e) {
    for (var i, r = 1, t = arguments.length; r < t; r++) {
      i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, Ne.apply(this, arguments);
}, uo = {
  width: "auto",
  height: "auto"
}, _t = Ke(function(e, i, r) {
  return Math.max(Math.min(e, r), i);
}), jr = Ke(function(e, i) {
  return Math.round(e / i) * i;
}), et = Ke(function(e, i) {
  return new RegExp(e, "i").test(i);
}), Dt = function(e) {
  return !!(e.touches && e.touches.length);
}, lo = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, Ur = Ke(function(e, i, r) {
  r === void 0 && (r = 0);
  var t = i.reduce(function(n, o, u) {
    return Math.abs(o - e) < Math.abs(i[n] - e) ? u : n;
  }, 0), s = Math.abs(i[t] - e);
  return r === 0 || s < r ? i[t] : e;
}), le = Ke(function(e, i) {
  return e.substr(e.length - i.length, i.length) === i;
}), Jt = Ke(function(e) {
  return e = e.toString(), e === "auto" || le(e, "px") || le(e, "%") || le(e, "vh") || le(e, "vw") || le(e, "vmax") || le(e, "vmin") ? e : e + "px";
}), zt = function(e, i, r, t) {
  if (e && typeof e == "string") {
    if (le(e, "px"))
      return Number(e.replace("px", ""));
    if (le(e, "%")) {
      var s = Number(e.replace("%", "")) / 100;
      return i * s;
    }
    if (le(e, "vw")) {
      var s = Number(e.replace("vw", "")) / 100;
      return r * s;
    }
    if (le(e, "vh")) {
      var s = Number(e.replace("vh", "")) / 100;
      return t * s;
    }
  }
  return e;
}, co = Ke(function(e, i, r, t, s, n, o) {
  return t = zt(t, e.width, i, r), s = zt(s, e.height, i, r), n = zt(n, e.width, i, r), o = zt(o, e.height, i, r), {
    maxWidth: typeof t > "u" ? void 0 : Number(t),
    maxHeight: typeof s > "u" ? void 0 : Number(s),
    minWidth: typeof n > "u" ? void 0 : Number(n),
    minHeight: typeof o > "u" ? void 0 : Number(o)
  };
}), fo = [
  "as",
  "style",
  "className",
  "grid",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
], $r = "__resizable_base__", ho = (
  /** @class */
  function(e) {
    ao(i, e);
    function i(r) {
      var t = e.call(this, r) || this;
      return t.ratio = 1, t.resizable = null, t.parentLeft = 0, t.parentTop = 0, t.resizableLeft = 0, t.resizableRight = 0, t.resizableTop = 0, t.resizableBottom = 0, t.targetLeft = 0, t.targetTop = 0, t.appendBase = function() {
        if (!t.resizable || !t.window)
          return null;
        var s = t.parentNode;
        if (!s)
          return null;
        var n = t.window.document.createElement("div");
        return n.style.width = "100%", n.style.height = "100%", n.style.position = "absolute", n.style.transform = "scale(0, 0)", n.style.left = "0", n.style.flex = "0 0 100%", n.classList ? n.classList.add($r) : n.className += $r, s.appendChild(n), n;
      }, t.removeBase = function(s) {
        var n = t.parentNode;
        n && n.removeChild(s);
      }, t.ref = function(s) {
        s && (t.resizable = s);
      }, t.state = {
        isResizing: !1,
        width: typeof (t.propsSize && t.propsSize.width) > "u" ? "auto" : t.propsSize && t.propsSize.width,
        height: typeof (t.propsSize && t.propsSize.height) > "u" ? "auto" : t.propsSize && t.propsSize.height,
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, t.onResizeStart = t.onResizeStart.bind(t), t.onMouseMove = t.onMouseMove.bind(t), t.onMouseUp = t.onMouseUp.bind(t), t;
    }
    return Object.defineProperty(i.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || uo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "size", {
      get: function() {
        var r = 0, t = 0;
        if (this.resizable && this.window) {
          var s = this.resizable.offsetWidth, n = this.resizable.offsetHeight, o = this.resizable.style.position;
          o !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : s, t = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : n, this.resizable.style.position = o;
        }
        return { width: r, height: t };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "sizeStyle", {
      get: function() {
        var r = this, t = this.props.size, s = function(u) {
          if (typeof r.state[u] > "u" || r.state[u] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[u] && le(r.propsSize[u].toString(), "%")) {
            if (le(r.state[u].toString(), "%"))
              return r.state[u].toString();
            var l = r.getParentSize(), f = Number(r.state[u].toString().replace("px", "")), g = f / l[u] * 100;
            return g + "%";
          }
          return Jt(r.state[u]);
        }, n = t && typeof t.width < "u" && !this.state.isResizing ? Jt(t.width) : s("width"), o = t && typeof t.height < "u" && !this.state.isResizing ? Jt(t.height) : s("height");
        return { width: n, height: o };
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var r = this.appendBase();
      if (!r)
        return { width: 0, height: 0 };
      var t = !1, s = this.parentNode.style.flexWrap;
      s !== "wrap" && (t = !0, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var n = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return t && (this.parentNode.style.flexWrap = s), this.removeBase(r), n;
    }, i.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, i.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, i.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var r = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0
        });
      }
    }, i.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, i.prototype.createSizeForCssProperty = function(r, t) {
      var s = this.propsSize && this.propsSize[t];
      return this.state[t] === "auto" && this.state.original[t] === r && (typeof s > "u" || s === "auto") ? "auto" : r;
    }, i.prototype.calculateNewMaxFromBoundary = function(r, t) {
      var s = this.props.boundsByDirection, n = this.state.direction, o = s && et("left", n), u = s && et("top", n), l, f;
      if (this.props.bounds === "parent") {
        var g = this.parentNode;
        g && (l = o ? this.resizableRight - this.parentLeft : g.offsetWidth + (this.parentLeft - this.resizableLeft), f = u ? this.resizableBottom - this.parentTop : g.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (l = o ? this.resizableRight : this.window.innerWidth - this.resizableLeft, f = u ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (l = o ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), f = u ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return l && Number.isFinite(l) && (r = r && r < l ? r : l), f && Number.isFinite(f) && (t = t && t < f ? t : f), { maxWidth: r, maxHeight: t };
    }, i.prototype.calculateNewSizeFromDirection = function(r, t) {
      var s = this.props.scale || 1, n = this.props.resizeRatio || 1, o = this.state, u = o.direction, l = o.original, f = this.props, g = f.lockAspectRatio, h = f.lockAspectRatioExtraHeight, d = f.lockAspectRatioExtraWidth, m = l.width, v = l.height, D = h || 0, F = d || 0;
      return et("right", u) && (m = l.width + (r - l.x) * n / s, g && (v = (m - F) / this.ratio + D)), et("left", u) && (m = l.width - (r - l.x) * n / s, g && (v = (m - F) / this.ratio + D)), et("bottom", u) && (v = l.height + (t - l.y) * n / s, g && (m = (v - D) * this.ratio + F)), et("top", u) && (v = l.height - (t - l.y) * n / s, g && (m = (v - D) * this.ratio + F)), { newWidth: m, newHeight: v };
    }, i.prototype.calculateNewSizeFromAspectRatio = function(r, t, s, n) {
      var o = this.props, u = o.lockAspectRatio, l = o.lockAspectRatioExtraHeight, f = o.lockAspectRatioExtraWidth, g = typeof n.width > "u" ? 10 : n.width, h = typeof s.width > "u" || s.width < 0 ? r : s.width, d = typeof n.height > "u" ? 10 : n.height, m = typeof s.height > "u" || s.height < 0 ? t : s.height, v = l || 0, D = f || 0;
      if (u) {
        var F = (d - v) * this.ratio + D, H = (m - v) * this.ratio + D, S = (g - D) / this.ratio + v, C = (h - D) / this.ratio + v, k = Math.max(g, F), W = Math.min(h, H), V = Math.max(d, S), X = Math.min(m, C);
        r = _t(r, k, W), t = _t(t, V, X);
      } else
        r = _t(r, g, h), t = _t(t, d, m);
      return { newWidth: r, newHeight: t };
    }, i.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var r = this.parentNode;
        if (r) {
          var t = r.getBoundingClientRect();
          this.parentLeft = t.left, this.parentTop = t.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var s = this.props.bounds.getBoundingClientRect();
        this.targetLeft = s.left, this.targetTop = s.top;
      }
      if (this.resizable) {
        var n = this.resizable.getBoundingClientRect(), o = n.left, u = n.top, l = n.right, f = n.bottom;
        this.resizableLeft = o, this.resizableRight = l, this.resizableTop = u, this.resizableBottom = f;
      }
    }, i.prototype.onResizeStart = function(r, t) {
      if (!(!this.resizable || !this.window)) {
        var s = 0, n = 0;
        if (r.nativeEvent && lo(r.nativeEvent) ? (s = r.nativeEvent.clientX, n = r.nativeEvent.clientY) : r.nativeEvent && Dt(r.nativeEvent) && (s = r.nativeEvent.touches[0].clientX, n = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var o = this.props.onResizeStart(r, t, this.resizable);
          if (o === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var u, l = this.window.getComputedStyle(this.resizable);
        if (l.flexBasis !== "auto") {
          var f = this.parentNode;
          if (f) {
            var g = this.window.getComputedStyle(f).flexDirection;
            this.flexDir = g.startsWith("row") ? "row" : "column", u = l.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var h = {
          original: {
            x: s,
            y: n,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: Ne(Ne({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: t,
          flexBasis: u
        };
        this.setState(h);
      }
    }, i.prototype.onMouseMove = function(r) {
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && Dt(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var t = this.props, s = t.maxWidth, n = t.maxHeight, o = t.minWidth, u = t.minHeight, l = Dt(r) ? r.touches[0].clientX : r.clientX, f = Dt(r) ? r.touches[0].clientY : r.clientY, g = this.state, h = g.direction, d = g.original, m = g.width, v = g.height, D = this.getParentSize(), F = co(D, this.window.innerWidth, this.window.innerHeight, s, n, o, u);
        s = F.maxWidth, n = F.maxHeight, o = F.minWidth, u = F.minHeight;
        var H = this.calculateNewSizeFromDirection(l, f), S = H.newHeight, C = H.newWidth, k = this.calculateNewMaxFromBoundary(s, n);
        this.props.snap && this.props.snap.x && (C = Ur(C, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (S = Ur(S, this.props.snap.y, this.props.snapGap));
        var W = this.calculateNewSizeFromAspectRatio(C, S, { width: k.maxWidth, height: k.maxHeight }, { width: o, height: u });
        if (C = W.newWidth, S = W.newHeight, this.props.grid) {
          var V = jr(C, this.props.grid[0]), X = jr(S, this.props.grid[1]), j = this.props.snapGap || 0;
          C = j === 0 || Math.abs(V - C) <= j ? V : C, S = j === 0 || Math.abs(X - S) <= j ? X : S;
        }
        var B = {
          width: C - d.width,
          height: S - d.height
        };
        if (m && typeof m == "string") {
          if (le(m, "%")) {
            var U = C / D.width * 100;
            C = U + "%";
          } else if (le(m, "vw")) {
            var $ = C / this.window.innerWidth * 100;
            C = $ + "vw";
          } else if (le(m, "vh")) {
            var A = C / this.window.innerHeight * 100;
            C = A + "vh";
          }
        }
        if (v && typeof v == "string") {
          if (le(v, "%")) {
            var U = S / D.height * 100;
            S = U + "%";
          } else if (le(v, "vw")) {
            var $ = S / this.window.innerWidth * 100;
            S = $ + "vw";
          } else if (le(v, "vh")) {
            var A = S / this.window.innerHeight * 100;
            S = A + "vh";
          }
        }
        var N = {
          width: this.createSizeForCssProperty(C, "width"),
          height: this.createSizeForCssProperty(S, "height")
        };
        this.flexDir === "row" ? N.flexBasis = N.width : this.flexDir === "column" && (N.flexBasis = N.height), this.setState(N), this.props.onResize && this.props.onResize(r, h, this.resizable, B);
      }
    }, i.prototype.onMouseUp = function(r) {
      var t = this.state, s = t.isResizing, n = t.direction, o = t.original;
      if (!(!s || !this.resizable)) {
        var u = {
          width: this.size.width - o.width,
          height: this.size.height - o.height
        };
        this.props.onResizeStop && this.props.onResizeStop(r, n, this.resizable, u), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: Ne(Ne({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, i.prototype.updateSize = function(r) {
      this.setState({ width: r.width, height: r.height });
    }, i.prototype.renderResizer = function() {
      var r = this, t = this.props, s = t.enable, n = t.handleStyles, o = t.handleClasses, u = t.handleWrapperStyle, l = t.handleWrapperClass, f = t.handleComponent;
      if (!s)
        return null;
      var g = Object.keys(s).map(function(h) {
        return s[h] !== !1 ? E.createElement(Jn, { key: h, direction: h, onResizeStart: r.onResizeStart, replaceStyles: n && n[h], className: o && o[h] }, f && f[h] ? f[h] : null) : null;
      });
      return E.createElement("div", { className: l, style: u }, g);
    }, i.prototype.render = function() {
      var r = this, t = Object.keys(this.props).reduce(function(o, u) {
        return fo.indexOf(u) !== -1 || (o[u] = r.props[u]), o;
      }, {}), s = Ne(Ne(Ne({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (s.flexBasis = this.state.flexBasis);
      var n = this.props.as || "div";
      return E.createElement(
        n,
        Ne({ ref: this.ref, style: s, className: this.props.className }, t),
        this.state.isResizing && E.createElement("div", { style: this.state.backgroundStyle }),
        this.props.children,
        this.renderResizer()
      );
    }, i.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        topRight: !0,
        bottomRight: !0,
        bottomLeft: !0,
        topLeft: !0
      },
      style: {},
      grid: [1, 1],
      lockAspectRatio: !1,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, i;
  }(E.PureComponent)
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var or = function(e, i) {
  return or = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var s in t)
      t.hasOwnProperty(s) && (r[s] = t[s]);
  }, or(e, i);
};
function po(e, i) {
  or(e, i);
  function r() {
    this.constructor = e;
  }
  e.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r());
}
var se = function() {
  return se = Object.assign || function(i) {
    for (var r, t = 1, s = arguments.length; t < s; t++) {
      r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
    }
    return i;
  }, se.apply(this, arguments);
};
function go(e, i) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && i.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, t = Object.getOwnPropertySymbols(e); s < t.length; s++)
      i.indexOf(t[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[s]) && (r[t[s]] = e[t[s]]);
  return r;
}
var yo = Qn, vo = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, mo = function(e) {
  return {
    bottom: e,
    bottomLeft: e,
    bottomRight: e,
    left: e,
    right: e,
    top: e,
    topLeft: e,
    topRight: e
  };
}, Yo = (
  /** @class */
  function(e) {
    po(i, e);
    function i(r) {
      var t = e.call(this, r) || this;
      return t.resizingPosition = { x: 0, y: 0 }, t.offsetFromParent = { left: 0, top: 0 }, t.resizableElement = { current: null }, t.originalPosition = { x: 0, y: 0 }, t.refDraggable = function(s) {
        s && (t.draggable = s);
      }, t.refResizable = function(s) {
        s && (t.resizable = s, t.resizableElement.current = s.resizable);
      }, t.state = {
        resizing: !1,
        bounds: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        maxWidth: r.maxWidth,
        maxHeight: r.maxHeight
      }, t.onResizeStart = t.onResizeStart.bind(t), t.onResize = t.onResize.bind(t), t.onResizeStop = t.onResizeStop.bind(t), t.onDragStart = t.onDragStart.bind(t), t.onDrag = t.onDrag.bind(t), t.onDragStop = t.onDragStop.bind(t), t.getMaxSizesFromProps = t.getMaxSizesFromProps.bind(t), t;
    }
    return i.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var r = this.offsetFromParent, t = r.left, s = r.top, n = this.getDraggablePosition(), o = n.x, u = n.y;
      this.draggable.setState({
        x: o - t,
        y: u - s
      }), this.forceUpdate();
    }, i.prototype.getDraggablePosition = function() {
      var r = this.draggable.state, t = r.x, s = r.y;
      return { x: t, y: s };
    }, i.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, i.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, i.prototype.getMaxSizesFromProps = function() {
      var r = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, t = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: r, maxHeight: t };
    }, i.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, i.prototype.getOffsetHeight = function(r) {
      var t = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / t;
        case "body":
          return document.body.offsetHeight / t;
        default:
          return r.offsetHeight;
      }
    }, i.prototype.getOffsetWidth = function(r) {
      var t = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / t;
        case "body":
          return document.body.offsetWidth / t;
        default:
          return r.offsetWidth;
      }
    }, i.prototype.onDragStart = function(r, t) {
      this.props.onDragStart && this.props.onDragStart(r, t);
      var s = this.getDraggablePosition();
      if (this.originalPosition = s, !!this.props.bounds) {
        var n = this.getParent(), o = this.props.scale, u;
        if (this.props.bounds === "parent")
          u = n;
        else if (this.props.bounds === "body") {
          var l = n.getBoundingClientRect(), f = l.left, g = l.top, h = document.body.getBoundingClientRect(), d = -(f - n.offsetLeft * o - h.left) / o, m = -(g - n.offsetTop * o - h.top) / o, v = (document.body.offsetWidth - this.resizable.size.width * o) / o + d, D = (document.body.offsetHeight - this.resizable.size.height * o) / o + m;
          return this.setState({ bounds: { top: m, right: v, bottom: D, left: d } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var F = n.getBoundingClientRect(), H = F.left, S = F.top, C = -(H - n.offsetLeft * o) / o, k = -(S - n.offsetTop * o) / o, v = (window.innerWidth - this.resizable.size.width * o) / o + C, D = (window.innerHeight - this.resizable.size.height * o) / o + k;
          return this.setState({ bounds: { top: k, right: v, bottom: D, left: C } });
        } else
          typeof this.props.bounds == "string" ? u = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (u = this.props.bounds);
        if (!(!(u instanceof HTMLElement) || !(n instanceof HTMLElement))) {
          var W = u.getBoundingClientRect(), V = W.left, X = W.top, j = n.getBoundingClientRect(), B = j.left, U = j.top, $ = (V - B) / o, A = X - U;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var N = this.offsetFromParent;
            this.setState({
              bounds: {
                top: A - N.top,
                right: $ + (u.offsetWidth - this.resizable.size.width) - N.left / o,
                bottom: A + (u.offsetHeight - this.resizable.size.height) - N.top,
                left: $ - N.left / o
              }
            });
          }
        }
      }
    }, i.prototype.onDrag = function(r, t) {
      if (this.props.onDrag) {
        var s = this.offsetFromParent, n = s.left, o = s.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, se(se({}, t), { x: t.x - n, y: t.y - o }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, se(se({}, t), { x: t.x + n, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, se(se({}, t), { x: this.originalPosition.x + n, y: t.y + o, deltaX: 0 }));
      }
    }, i.prototype.onDragStop = function(r, t) {
      if (this.props.onDragStop) {
        var s = this.offsetFromParent, n = s.left, o = s.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, se(se({}, t), { x: t.x + n, y: t.y + o }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, se(se({}, t), { x: t.x + n, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, se(se({}, t), { x: this.originalPosition.x + n, y: t.y + o, deltaX: 0 }));
      }
    }, i.prototype.onResizeStart = function(r, t, s) {
      r.stopPropagation(), this.setState({
        resizing: !0
      });
      var n = this.props.scale, o = this.offsetFromParent, u = this.getDraggablePosition();
      if (this.resizingPosition = { x: u.x + o.left, y: u.y + o.top }, this.originalPosition = u, this.props.bounds) {
        var l = this.getParent(), f = void 0;
        this.props.bounds === "parent" ? f = l : this.props.bounds === "body" ? f = document.body : this.props.bounds === "window" ? f = window : typeof this.props.bounds == "string" ? f = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (f = this.props.bounds);
        var g = this.getSelfElement();
        if (g instanceof Element && (f instanceof HTMLElement || f === window) && l instanceof HTMLElement) {
          var h = this.getMaxSizesFromProps(), d = h.maxWidth, m = h.maxHeight, v = this.getParentSize();
          if (d && typeof d == "string")
            if (d.endsWith("%")) {
              var D = Number(d.replace("%", "")) / 100;
              d = v.width * D;
            } else
              d.endsWith("px") && (d = Number(d.replace("px", "")));
          if (m && typeof m == "string")
            if (m.endsWith("%")) {
              var D = Number(m.replace("%", "")) / 100;
              m = v.width * D;
            } else
              m.endsWith("px") && (m = Number(m.replace("px", "")));
          var F = g.getBoundingClientRect(), H = F.left, S = F.top, C = this.props.bounds === "window" ? { left: 0, top: 0 } : f.getBoundingClientRect(), k = C.left, W = C.top, V = this.getOffsetWidth(f), X = this.getOffsetHeight(f), j = t.toLowerCase().endsWith("left"), B = t.toLowerCase().endsWith("right"), U = t.startsWith("top"), $ = t.startsWith("bottom");
          if ((j || U) && this.resizable) {
            var A = (H - k) / n + this.resizable.size.width;
            this.setState({ maxWidth: A > Number(d) ? d : A });
          }
          if (B || this.props.lockAspectRatio && !j && !U) {
            var A = V + (k - H) / n;
            this.setState({ maxWidth: A > Number(d) ? d : A });
          }
          if ((U || j) && this.resizable) {
            var A = (S - W) / n + this.resizable.size.height;
            this.setState({
              maxHeight: A > Number(m) ? m : A
            });
          }
          if ($ || this.props.lockAspectRatio && !U && !j) {
            var A = X + (W - S) / n;
            this.setState({
              maxHeight: A > Number(m) ? m : A
            });
          }
        }
      } else
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      this.props.onResizeStart && this.props.onResizeStart(r, t, s);
    }, i.prototype.onResize = function(r, t, s, n) {
      var o = { x: this.originalPosition.x, y: this.originalPosition.y }, u = -n.width, l = -n.height, f = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      f.indexOf(t) !== -1 && (t === "bottomLeft" ? o.x += u : (t === "topRight" || (o.x += u), o.y += l)), (o.x !== this.draggable.state.x || o.y !== this.draggable.state.y) && this.draggable.setState(o), this.updateOffsetFromParent();
      var g = this.offsetFromParent, h = this.getDraggablePosition().x + g.left, d = this.getDraggablePosition().y + g.top;
      this.resizingPosition = { x: h, y: d }, this.props.onResize && this.props.onResize(r, t, s, n, {
        x: h,
        y: d
      });
    }, i.prototype.onResizeStop = function(r, t, s, n) {
      this.setState({
        resizing: !1
      });
      var o = this.getMaxSizesFromProps(), u = o.maxWidth, l = o.maxHeight;
      this.setState({ maxWidth: u, maxHeight: l }), this.props.onResizeStop && this.props.onResizeStop(r, t, s, n, this.resizingPosition);
    }, i.prototype.updateSize = function(r) {
      this.resizable && this.resizable.updateSize({ width: r.width, height: r.height });
    }, i.prototype.updatePosition = function(r) {
      this.draggable.setState(r);
    }, i.prototype.updateOffsetFromParent = function() {
      var r = this.props.scale, t = this.getParent(), s = this.getSelfElement();
      if (!t || s === null)
        return {
          top: 0,
          left: 0
        };
      var n = t.getBoundingClientRect(), o = n.left, u = n.top, l = s.getBoundingClientRect(), f = this.getDraggablePosition(), g = t.scrollLeft, h = t.scrollTop;
      this.offsetFromParent = {
        left: l.left - o + g - f.x * r,
        top: l.top - u + h - f.y * r
      };
    }, i.prototype.render = function() {
      var r = this.props, t = r.disableDragging, s = r.style, n = r.dragHandleClassName, o = r.position, u = r.onMouseDown, l = r.onMouseUp, f = r.dragAxis, g = r.dragGrid, h = r.bounds, d = r.enableUserSelectHack, m = r.cancel, v = r.children;
      r.onResizeStart, r.onResize, r.onResizeStop, r.onDragStart, r.onDrag, r.onDragStop;
      var D = r.resizeHandleStyles, F = r.resizeHandleClasses, H = r.resizeHandleComponent, S = r.enableResizing, C = r.resizeGrid, k = r.resizeHandleWrapperClass, W = r.resizeHandleWrapperStyle, V = r.scale, X = r.allowAnyClick, j = go(r, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), B = this.props.default ? se({}, this.props.default) : void 0;
      delete j.default;
      var U = t || n ? { cursor: "auto" } : { cursor: "move" }, $ = se(se(se({}, vo), U), s), A = this.offsetFromParent, N = A.left, q = A.top, ie;
      o && (ie = {
        x: o.x - N,
        y: o.y - q
      });
      var Z = this.state.resizing ? void 0 : ie, ee = this.state.resizing ? "both" : f;
      return E.createElement(
        yo,
        { ref: this.refDraggable, handle: n ? ".".concat(n) : void 0, defaultPosition: B, onMouseDown: u, onMouseUp: l, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: ee, disabled: t, grid: g, bounds: h ? this.state.bounds : void 0, position: Z, enableUserSelectHack: d, cancel: m, scale: V, allowAnyClick: X, nodeRef: this.resizableElement },
        E.createElement(ho, se({}, j, { ref: this.refResizable, defaultSize: B, size: this.props.size, enable: typeof S == "boolean" ? mo(S) : S, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: $, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: C, handleWrapperClass: k, handleWrapperStyle: W, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: D, handleClasses: F, handleComponent: H, scale: this.props.scale }), v)
      );
    }, i.defaultProps = {
      maxWidth: Number.MAX_SAFE_INTEGER,
      maxHeight: Number.MAX_SAFE_INTEGER,
      scale: 1,
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      onDragStart: function() {
      },
      onDrag: function() {
      },
      onDragStop: function() {
      }
    }, i;
  }(E.PureComponent)
), wr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var i = wi;
  e.definition = {
    prefix: i.prefix,
    iconName: i.iconName,
    icon: [
      i.width,
      i.height,
      i.aliases,
      i.unicode,
      i.svgPathData
    ]
  }, e.faTimes = e.definition, e.prefix = i.prefix, e.iconName = i.iconName, e.width = i.width, e.height = i.height, e.ligatures = i.aliases, e.unicode = i.unicode, e.svgPathData = i.svgPathData, e.aliases = i.aliases;
})(wr);
const bo = [{
  pattern: new RegExp("(?<= |^|>|[^-!а-яёa-z0-9])-(?= |$|[^-])", "gi"),
  replace: "—"
}, {
  // Open quote
  pattern: /["»](?=\S)/g,
  replace: "«"
}, {
  // Close quote
  pattern: new RegExp('(?<=\\S)["«]', "g"),
  replace: "»"
}, {
  pattern: /^\s+/g,
  replace: "",
  onBlur: !0
}, {
  pattern: /^[а-яёa-z]/,
  replace: (e) => e.toUpperCase()
}, {
  pattern: /[ ]+/gm,
  replace: " ",
  onBlur: !0
}, {
  pattern: /\s([!?.:;,])/g,
  replace: "$1"
}, {
  pattern: /,(\w)/g,
  replace: ", $1"
}, {
  pattern: /[\s,.;:]+$/g,
  replace: "",
  onBlur: !0
}], qr = (e, i = !1) => {
  let r = e.selectionStart || 0, t = e.selectionEnd || 0;
  const s = e.selectionDirection, n = bo.filter((o) => i ? !0 : !o.onBlur || !1).reduce((o, u) => {
    const l = o.replace(u.pattern, u.replace), f = l.length - o.length;
    return r += f, t += f, l;
  }, e.value);
  return setTimeout(() => {
    e.setSelectionRange(r, t, s || "none");
  }, 0), n;
}, wo = E.forwardRef(({
  placeholder: e = "Введите",
  ...i
}, r) => /* @__PURE__ */ M("input", { ref: r, placeholder: e, ...i })), So = ({
  label: e,
  helperText: i,
  className: r,
  inputWrapRef: t,
  onBlur: s,
  onFocus: n,
  error: o,
  afterItems: u,
  useTypograf: l = !0,
  disabled: f,
  isLoading: g,
  inputComponent: h = wo,
  ...d
}, m) => {
  const [v, D] = G.useState(!1), {
    getRootProps: F,
    getInputProps: H
  } = Gi({
    error: !!o,
    onBlur: s,
    onFocus: n,
    disabled: f,
    inputRef: m,
    ...d
  }), {
    onBlur: S,
    onFocus: C,
    ...k
  } = H();
  k.value = k.value || "";
  const W = E.useCallback((j) => {
    f || (D(!0), C == null || C(j));
  }, [f, D, C]), V = E.useCallback((j) => {
    var B;
    if (l) {
      const U = qr(j.target, !0);
      U !== j.target.value && (j.target.value = U, (B = k.onChange) == null || B.call(k, U));
    }
    D(!1), S == null || S(j);
  }, [D, S]);
  let X = /* @__PURE__ */ ye("div", { className: r, ref: t, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, o ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, v && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : v ? {
    "--tw-border-opacity": "1",
    borderColor: "rgb(114 117 191 / var(--tw-border-opacity))",
    outlineWidth: "2px",
    outlineColor: "#d2d5eb"
  } : !f && {
    ":hover": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(114 117 191 / var(--tw-border-opacity))"
    }
  }], children: [
    g && /* @__PURE__ */ ye("div", { css: {
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",
      gap: "0.5rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
      padding: "0.375rem",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, children: [
      /* @__PURE__ */ M(Ve, { icon: Qr.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ M(h, { css: [{
      height: "100%",
      width: "100%",
      borderRadius: "4px",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: "400",
      "--tw-text-opacity": "1",
      color: "rgb(55 65 81 / var(--tw-text-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-placeholder-opacity))",
        fontWeight: "300"
      },
      outlineWidth: "0px",
      transitionProperty: "all",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "150ms"
    }, o && {
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        color: "rgb(239 68 68 / var(--tw-placeholder-opacity))"
      }
    }, f && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }], onFocus: W, onBlur: V, onInput: (j) => {
      l && (j.currentTarget.value = qr(j.currentTarget));
    }, ...d, ...k, type: g ? "hidden" : d.type || "text" }),
    u && !f && /* @__PURE__ */ M("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: u })
  ] });
  return e && (X = /* @__PURE__ */ M(Lt, { label: e, error: o, helperText: i, ...F(), children: X })), X;
}, mt = E.forwardRef(So), xo = ({
  getTagProps: e,
  optionRender: i,
  getOptionLabel: r,
  items: t,
  isLoading: s,
  valueCount: n
}) => s ? /* @__PURE__ */ M("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: Array.from({
  length: n
}).map((o, u) => /* @__PURE__ */ M("div", { css: [{
  "@keyframes pulse": {
    "50%": {
      opacity: ".5"
    }
  },
  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  borderRadius: "0.25rem",
  borderWidth: "1px",
  "--tw-border-opacity": "1",
  borderColor: "rgb(210 213 235 / var(--tw-border-opacity))",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(229 230 244 / var(--tw-bg-opacity))"
}, ur`
              width: ${Math.round(Math.random() * 5) * 30 + 60}px;
              height: 30px;
            `] }, u)) }) : t && (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ M("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: t.map((o, u) => {
  const {
    onDelete: l,
    key: f,
    ...g
  } = e({
    index: u
  });
  return /* @__PURE__ */ ye("div", { ...g, css: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "0.25rem",
    borderWidth: "1px",
    "--tw-border-opacity": "1",
    borderColor: "rgb(210 213 235 / var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))",
    padding: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }, children: [
    /* @__PURE__ */ M("span", { children: i ? i(o) : r(o) }),
    /* @__PURE__ */ M("button", { onClick: l, children: /* @__PURE__ */ M(Ve, { icon: wr.faTimes, css: {
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    } }) })
  ] }, f);
}) }), Fi = "id", _o = ({
  text: e = "Загрузка"
}) => {
  const [i, r] = E.useState("");
  return E.useEffect(() => {
    const t = setInterval(() => {
      r((s) => s.length < 3 ? s + "." : "");
    }, 300);
    return () => clearInterval(t);
  }, []), /* @__PURE__ */ ye("span", { css: {
    "@keyframes pulse": {
      "50%": {
        opacity: ".5"
      }
    },
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  }, children: [
    e,
    i
  ] });
}, Do = ({
  className: e,
  isLoading: i = !1,
  inputLoading: r = !1,
  valueLoading: t = !1,
  idField: s = Fi,
  displayField: n,
  options: o,
  multiple: u,
  open: l = !1,
  label: f,
  helperText: g,
  error: h,
  onOpen: d,
  onClose: m,
  optionRender: v,
  onChange: D,
  onInputChange: F,
  onSelect: H,
  disabled: S,
  placeholder: C = "Выберите",
  value: k,
  allowClear: W = !0,
  autoComplete: V = !0,
  autoSelect: X = !1,
  afterItems: j,
  popupAdditionalOptionsRenderer: B,
  tagListPosition: U = "top",
  tagListRenderer: $,
  ...A
}, N) => {
  const q = E.useCallback((a) => n && n in a ? a[n] : JSON.stringify(a), [n]), [ie, Z] = E.useState(l);
  E.useEffect(() => {
    Z(l);
  }, [l]);
  const ee = E.useMemo(() => u ? (k == null ? void 0 : k.map((a) => o.find((c) => c[s] == a)).filter((a) => !!a)) || [] : o.find((a) => a[s] == k) || null, [k, o]), {
    value: oe,
    getRootProps: _e,
    getInputProps: fe,
    getListboxProps: Ae,
    getOptionProps: y,
    groupedOptions: w,
    getClearProps: O,
    setAnchorEl: z,
    anchorEl: R,
    popupOpen: L,
    getTagProps: I
  } = Ki({
    options: o,
    autoComplete: V,
    autoSelect: X,
    multiple: u,
    open: ie,
    value: ee,
    getOptionLabel: q,
    isOptionEqualToValue: (a, c) => s ? a[s] === c[s] : a === c,
    onInputChange: F,
    onOpen: (a) => {
      Z(!0), d == null || d(a);
    },
    onClose: (a, c) => {
      Z(!1), m == null || m(a, c);
    },
    clearOnBlur: !1,
    disabled: S,
    unstable_classNamePrefix: "c",
    onChange: (a, c) => {
      D && (Array.isArray(c) ? D(c.map((p) => p[s])) : D(c && typeof c == "object" ? c[s] : null)), H == null || H(c);
    }
  }), K = E.useMemo(() => B ? B({
    closePopup: () => Z(!1)
  }) : null, [B, Z]), Y = i ? /* @__PURE__ */ M("div", { css: {
    zIndex: "20",
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0.5rem",
    padding: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(107 114 128 / var(--tw-text-opacity))"
  }, children: /* @__PURE__ */ M(_o, {}) }) : /* @__PURE__ */ M("ul", { css: {
    zIndex: "20",
    width: "100%"
  }, ...Ae(), children: R && w.length > 0 ? /* @__PURE__ */ ye(lt, { children: [
    w.map((a, c) => /* @__PURE__ */ M(G.Fragment, { children: "group" in a ? /* @__PURE__ */ M(lt, {}) : /* @__PURE__ */ M("li", { css: [{
      cursor: "pointer",
      "--tw-border-opacity": "1",
      borderColor: "rgb(243 244 246 / var(--tw-border-opacity))",
      padding: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(210 213 235 / var(--tw-bg-opacity))"
      },
      ":not(:last-child)": {
        borderBottomWidth: "1px"
      }
    }, ur`
                      &.c-focused {
                        ${{
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
    }}
                      }
                      &[aria-selected="true"] {
                        ${{
      backgroundColor: "rgb(114 117 191 / 0.9)",
      "--tw-text-opacity": "1",
      color: "rgb(255 255 255 / var(--tw-text-opacity))"
    }}
                      }
                    `], ...y({
      option: a,
      index: c
    }), children: v ? v(a) : q(a) }) }, s in a ? a[s] : c)),
    K
  ] }) : K }), We = E.useMemo(() => u ? oe && oe.length > 0 : !!oe, [oe, u]), {
    onBlur: ve,
    onChange: me,
    ref: De,
    ...Ie
  } = fe(), Ye = Kr(N, De), je = E.useMemo(() => u ? $ ? $({
    items: oe,
    isLoading: t,
    onDelete: (a) => {
      D == null || D(oe.filter((c) => c[s] !== a[s]).map((c) => c[s]));
    },
    valueCount: (k == null ? void 0 : k.length) || 0
  }) : /* @__PURE__ */ M(xo, { items: oe, optionRender: v, getOptionLabel: q, getTagProps: I, isLoading: t, valueCount: k == null ? void 0 : k.length }) : null, [oe, $]), bt = /* @__PURE__ */ ye(lt, { children: [
    U === "top" && je,
    /* @__PURE__ */ M(mt, { ...A, error: h, ...Ie, ref: Ye, inputWrapRef: z, placeholder: C, isLoading: r, useTypograf: !1, onChange: me, onBlur: (a) => {
      ve == null || ve(a), u && (me == null || me({
        ...a,
        target: {
          ...a.target,
          value: ""
        }
      }));
    }, afterItems: !S && [j && /* @__PURE__ */ M(G.Fragment, { children: j }, "after-items"), We && W && !u && /* @__PURE__ */ M("button", { ...O(), onMouseDown: (a) => {
      a.preventDefault(), a.stopPropagation();
    }, children: /* @__PURE__ */ M(Ve, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: wr.faTimes }) }, "clear"), /* @__PURE__ */ M("button", { onClick: (a) => {
      a.preventDefault(), a.stopPropagation(), Z((c) => !c);
    }, children: /* @__PURE__ */ M(Ve, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, h && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: gs.faCaretDown }) }, "arrow")] }),
    R && /* @__PURE__ */ M(Jr, { open: L, anchorEl: R, children: /* @__PURE__ */ M("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: R.offsetWidth
    }], children: Y }) })
  ] });
  return /* @__PURE__ */ ye(lt, { children: [
    /* @__PURE__ */ M(Lt, { label: f, error: h, helperText: g, className: e, ..._e(), children: bt }),
    U === "bottom" && je
  ] });
}, Li = E.forwardRef(Do), zo = (e, i) => {
  const [r, t] = E.useState(!1);
  return /* @__PURE__ */ M(es, { ref: i, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ M(Ji, { position: "end", children: /* @__PURE__ */ M(Zi, { size: "small", edge: "end", onClick: () => t((s) => !s), children: /* @__PURE__ */ M(Ve, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, ur`
                  width: 18px;
                `], icon: r ? ys.faEyeSlash : os.faEye }) }) })
  }, ...e });
};
E.forwardRef(zo);
const ar = (e) => Array.isArray(e) ? e.length === 0 : !e, Oo = ({
  dictionary: e,
  open: i = !1,
  value: r,
  filterOptions: t,
  ...s
}, n) => {
  const [o, u] = E.useState(i), l = vs(e, {
    enabled: o || !!r
  });
  E.useEffect(() => {
    u(i);
  }, [i]);
  const f = E.useMemo(() => t && l.data ? t(l.data) : l.data, [l.data, t]);
  return /* @__PURE__ */ M(
    Li,
    {
      displayField: "name",
      ...s,
      ref: n,
      open: o,
      value: r,
      isLoading: l.isLoading,
      onOpen: () => {
        u(!0);
      },
      onClose: () => {
        u(!1);
      },
      options: f || [],
      useTypograf: !1,
      inputLoading: l.isLoading && !ar(r),
      disabled: l.isLoading && !ar(r) || s.disabled
    }
  );
}, Xo = E.forwardRef(Oo), Ro = ({
  error: e,
  label: i,
  open: r,
  className: t,
  onFocus: s,
  onBlur: n,
  onClick: o,
  value: u,
  onChange: l,
  ...f
}, g) => {
  const [h, d] = E.useState(null), [m, v] = E.useState(!1), [D, F] = E.useState(!1);
  E.useEffect(() => {
    r !== void 0 && v(r);
  }, [r]);
  const H = E.useCallback((V) => {
    F(!0), v(!0), s == null || s(V);
  }, [s, v]), S = E.useCallback((V) => {
    F(!1), n == null || n(V);
  }, [s, v]), C = E.useCallback((V) => {
    d(V);
  }, [d]), k = E.useMemo(() => u ? wt(u, ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"]).toDate() : null, [u]), W = E.useMemo(() => k ? wt(k).format("DD.MM.YYYY") : "", [k]);
  return /* @__PURE__ */ M(ts, { onClickAway: () => v(!1), children: /* @__PURE__ */ ye(Lt, { className: t, label: i, error: e, children: [
    /* @__PURE__ */ M(mt, { ...f, inputWrapRef: C, ref: g, onFocus: H, onBlur: S, useTypograf: !1, value: W, onChange: (V) => {
      V.target.value ? l == null || l(wt(V.target.value, "DD.MM.YYYY").format("YYYY-MM-DD HH:mm:ss")) : l == null || l(void 0);
    }, onMouseDown: (V) => {
      D && v(!m), o == null || o(V);
    }, error: e }),
    h && /* @__PURE__ */ M(Jr, { open: m, anchorEl: h, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: h
      }
    }], children: /* @__PURE__ */ M("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ M(Ui, { value: k, onChange: (V) => {
      l == null || l(wt(V).format("YYYY-MM-DD HH:mm:ss")), v(!1);
    } }) }) })
  ] }) });
}, Qo = E.forwardRef(Ro), Po = ({
  multiple: e,
  value: i,
  url: r,
  params: t,
  idField: s = Fi,
  onInputChange: n,
  filters: o,
  open: u = !1,
  extraOptionsRenderer: l,
  ...f
}, g) => {
  const [h, d] = E.useState(""), [m, v] = E.useState(u), D = Rs(h, 500), F = Os(r, s), {
    records: H,
    isLoading: S
  } = zs({
    idField: s,
    value: (ar(i) ? [] : e ? i : [i]) || [],
    url: r,
    params: t
  });
  E.useEffect(() => {
    v(u);
  }, [u]);
  const C = E.useMemo(() => ({
    ...t,
    ...o && o.length > 0 && {
      extFilters: JSON.stringify(o)
    },
    ...D ? {
      query: D
    } : void 0
  }), [D, t, o]), k = h.length > 0 || m || !1, W = ms(r, {
    enabled: k,
    params: C,
    placeholderData: $i,
    staleTime: 1e3 * 60
  }), V = E.useMemo(() => {
    var B;
    return qi.uniqBy([...H, ...((B = W.data) == null ? void 0 : B.data) || []], s);
  }, [H, W.data]), X = !e && S, j = l ? (B) => l({
    ...B,
    search: h,
    searchIsLoading: W.isLoading
  }) : void 0;
  return /* @__PURE__ */ M(lt, { children: /* @__PURE__ */ M(Li, { ref: g, multiple: e, value: i, ...f, disabled: X || f.disabled, inputLoading: X, options: V, idField: s, onOpen: () => v(!0), onClose: () => v(!1), isLoading: W.isLoading || S, valueLoading: S, popupAdditionalOptionsRenderer: j, open: m, afterItems: [(W.isLoading || W.isFetching || e && S) && /* @__PURE__ */ M("div", { children: /* @__PURE__ */ M(Ve, { icon: Qr.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onSelect: (B) => {
    var U;
    e ? B == null || B.map(($) => {
      F($);
    }) : F(B), (U = f.onSelect) == null || U.call(f, B);
  }, onInputChange: (B, U, $) => {
    $ === "input" && d(U), $ === "reset" && h !== "" && d(""), n == null || n(B, U, $);
  } }) });
}, Go = E.forwardRef(Po), Eo = ({
  unit: e,
  error: i,
  onChange: r,
  allowFloat: t = !0,
  value: s,
  ...n
}, o) => {
  const [u, l] = E.useState(s), [f, g] = E.useState(null);
  E.useEffect(() => {
    l(s);
  }, [s]);
  const h = Kr(o, g);
  return /* @__PURE__ */ M(mt, { ...n, ref: h, error: i, value: u, useTypograf: !1, onChange: (d) => {
    const m = Number(d.target.value);
    if (!isNaN(m)) {
      if (d.target.value.includes(".") && !t)
        return;
      l(d.target.value), d.target.value.slice(-1) !== "." && (r == null || r(m));
    }
  }, afterItems: [e && /* @__PURE__ */ M("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, i && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => f == null ? void 0 : f.focus(), children: e }, "unit")] });
}, Ko = E.forwardRef(Eo), Mo = E.forwardRef(({
  placeholder: e = "Введите",
  ...i
}, r) => /* @__PURE__ */ M("textarea", { ref: r, placeholder: e, ...i })), Co = ({
  error: e,
  rows: i = 5,
  ...r
}, t) => /* @__PURE__ */ M(mt, { ...r, ref: t, rows: i, inputComponent: Mo, error: e }), Jo = E.forwardRef(Co), Ao = ({
  error: e,
  ...i
}, r) => /* @__PURE__ */ M(mt, { useTypograf: !1, ...i, ref: r, error: e }), Zo = E.forwardRef(Ao), To = ({
  label: e,
  error: i,
  value: r,
  helperText: t,
  className: s,
  onChange: n,
  ...o
}, u) => /* @__PURE__ */ M(Lt, { label: e, error: i, helperText: t, className: s, children: /* @__PURE__ */ ye(rs, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...o, onChange: (l) => {
  n == null || n(l.target.value === "true");
}, ref: u, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ M(_r, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ M(_r, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), ea = E.forwardRef(To), No = ({
  label: e,
  ...i
}, r) => /* @__PURE__ */ M(ss, { ref: r, label: e, labelPlacement: "top", sx: {
  mx: 0,
  alignItems: "flex-start",
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(55 65 81 / var(--tw-text-opacity))"
  }
}, control: /* @__PURE__ */ M(is, { ...i, checked: i.value, color: "primary", css: {
  paddingLeft: "0px",
  paddingRight: "0px"
} }) }), ta = E.forwardRef(No);
export {
  Io as B,
  ks as C,
  Xo as D,
  Uo as F,
  Lt as L,
  Ko as N,
  Go as Q,
  Yo as R,
  mt as T,
  Zo as Y,
  $o as a,
  Qo as b,
  Jo as c,
  ea as d,
  Zs as e,
  mi as f,
  jo as g,
  wi as h,
  Os as i,
  Fi as j,
  Li as k,
  ta as l,
  qo as u
};
