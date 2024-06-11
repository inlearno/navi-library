var Gt = (e, n, r) => {
  if (!n.has(e))
    throw TypeError("Cannot " + r);
};
var ce = (e, n, r) => (Gt(e, n, "read from private field"), r ? r.call(e) : n.get(e)), Pe = (e, n, r) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, r);
}, Ie = (e, n, r, t) => (Gt(e, n, "write to private field"), t ? t.call(e, r) : n.set(e, r), r);
var Te = (e, n, r) => (Gt(e, n, "access private method"), r);
import { J as si, L as sr, O as oi, P as fn, b as Ee, j as B, f as dn, F as dt, T as ai, G as ui, l as li } from "./library-0c8fbdb5.js";
import { A as ci, L as fi, M as di, a as mr, N as pi, u as pn, P as hn, O as hi, I as gi, f as vi, j as yi, Q as mi, R as Nr, S as bi, U as wi, V as Si } from "./mui-0a491bf1.js";
import { r as R, R as re, e as xi, c as kt, g as gn } from "./react-6f5a8403.js";
import { F as Ge, p as vn } from "./icons-ad9f8a73.js";
import { f as _i } from "./faEye-7bea50c5.js";
import { Q as yn, d as Oi, e as Di, g as Ei, i as Ri, j as zi, s as Lr, k as Fr, w as Pi, l as Ti, u as Mi, c as Ci, f as ki, m as Ai, h as _t, b as Ni } from "./DictionaryCell-a901e8dd.js";
function Wr(e, n) {
  return e.filter((r) => !n.includes(r));
}
function Li(e, n, r) {
  const t = e.slice(0);
  return t[n] = r, t;
}
var Qe, st, ot, De, vt, at, ut, Tt, yt, or, mt, ar, bt, ur, wt, lr, cn, Fi = (cn = class extends si {
  constructor(n, r, t) {
    super();
    Pe(this, ut);
    Pe(this, yt);
    Pe(this, mt);
    Pe(this, bt);
    Pe(this, wt);
    Pe(this, Qe, void 0);
    Pe(this, st, void 0);
    Pe(this, ot, void 0);
    Pe(this, De, void 0);
    Pe(this, vt, void 0);
    Pe(this, at, void 0);
    Ie(this, Qe, n), Ie(this, ot, []), Ie(this, De, []), Te(this, ut, Tt).call(this, []), this.setQueries(r, t);
  }
  onSubscribe() {
    this.listeners.size === 1 && ce(this, De).forEach((n) => {
      n.subscribe((r) => {
        Te(this, bt, ur).call(this, n, r);
      });
    });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ce(this, De).forEach((n) => {
      n.destroy();
    });
  }
  setQueries(n, r, t) {
    Ie(this, ot, n), Ie(this, vt, r), sr.batch(() => {
      const i = ce(this, De), s = Te(this, mt, ar).call(this, ce(this, ot));
      s.forEach(
        (c) => c.observer.setOptions(c.defaultedQueryOptions, t)
      );
      const o = s.map((c) => c.observer), a = o.map(
        (c) => c.getCurrentResult()
      ), l = o.some(
        (c, d) => c !== i[d]
      );
      i.length === o.length && !l || (Ie(this, De, o), Te(this, ut, Tt).call(this, a), this.hasListeners() && (Wr(i, o).forEach((c) => {
        c.destroy();
      }), Wr(o, i).forEach((c) => {
        c.subscribe((d) => {
          Te(this, bt, ur).call(this, c, d);
        });
      }), Te(this, wt, lr).call(this)));
    });
  }
  getCurrentResult() {
    return ce(this, at);
  }
  getQueries() {
    return ce(this, De).map((n) => n.getCurrentQuery());
  }
  getObservers() {
    return ce(this, De);
  }
  getOptimisticResult(n, r) {
    const t = Te(this, mt, ar).call(this, n), i = t.map(
      (s) => s.observer.getOptimisticResult(s.defaultedQueryOptions)
    );
    return [
      i,
      (s) => Te(this, yt, or).call(this, s ?? i, r),
      () => t.map((s, o) => {
        const a = i[o];
        return s.defaultedQueryOptions.notifyOnChangeProps ? a : s.observer.trackResult(a);
      })
    ];
  }
}, Qe = new WeakMap(), st = new WeakMap(), ot = new WeakMap(), De = new WeakMap(), vt = new WeakMap(), at = new WeakMap(), ut = new WeakSet(), Tt = function(n) {
  var r;
  Ie(this, st, n), Ie(this, at, Te(this, yt, or).call(this, n, (r = ce(this, vt)) == null ? void 0 : r.combine));
}, yt = new WeakSet(), or = function(n, r) {
  return r ? oi(ce(this, at), r(n)) : n;
}, mt = new WeakSet(), ar = function(n) {
  const r = ce(this, De), t = new Map(
    r.map((h) => [h.options.queryHash, h])
  ), i = n.map(
    (h) => ce(this, Qe).defaultQueryOptions(h)
  ), s = i.flatMap((h) => {
    const p = t.get(h.queryHash);
    return p != null ? [{ defaultedQueryOptions: h, observer: p }] : [];
  }), o = new Set(
    s.map((h) => h.defaultedQueryOptions.queryHash)
  ), a = i.filter(
    (h) => !o.has(h.queryHash)
  ), l = (h) => {
    const p = ce(this, Qe).defaultQueryOptions(h);
    return ce(this, De).find(
      (m) => m.options.queryHash === p.queryHash
    ) ?? new yn(ce(this, Qe), p);
  }, c = a.map((h) => ({
    defaultedQueryOptions: h,
    observer: l(h)
  })), d = (h, p) => i.indexOf(h.defaultedQueryOptions) - i.indexOf(p.defaultedQueryOptions);
  return s.concat(c).sort(d);
}, bt = new WeakSet(), ur = function(n, r) {
  const t = ce(this, De).indexOf(n);
  t !== -1 && (Te(this, ut, Tt).call(this, Li(ce(this, st), t, r)), Te(this, wt, lr).call(this));
}, wt = new WeakSet(), lr = function() {
  sr.batch(() => {
    this.listeners.forEach((n) => {
      n(ce(this, st));
    });
  });
}, cn);
function Wi({
  queries: e,
  ...n
}, r) {
  const t = fn(r), i = Oi(), s = Di(), o = R.useMemo(
    () => e.map((m) => {
      const S = t.defaultQueryOptions(m);
      return S._optimisticResults = i ? "isRestoring" : "optimistic", S;
    }),
    [e, t, i]
  );
  o.forEach((m) => {
    Ei(m), Ri(m, s);
  }), zi(s);
  const [a] = R.useState(
    () => new Fi(
      t,
      o,
      n
    )
  ), [l, c, d] = a.getOptimisticResult(
    o,
    n.combine
  );
  R.useSyncExternalStore(
    R.useCallback(
      (m) => i ? () => {
      } : a.subscribe(sr.batchCalls(m)),
      [a, i]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), R.useEffect(() => {
    a.setQueries(
      o,
      n,
      {
        listeners: !1
      }
    );
  }, [o, n, a]);
  const p = l.some(
    (m, S) => Lr(o[S], m)
  ) ? l.flatMap((m, S) => {
    const C = o[S];
    if (C) {
      const E = new yn(t, C);
      if (Lr(C, m))
        return Fr(C, E, s);
      Pi(m, i) && Fr(C, E, s);
    }
    return [];
  }) : [];
  if (p.length > 0)
    throw Promise.all(p);
  const g = l.find(
    (m, S) => {
      const C = o[S];
      return C && Ti({
        result: m,
        errorResetBoundary: s,
        throwOnError: C.throwOnError,
        query: t.getQueryCache().get(C.queryHash)
      });
    }
  );
  if (g != null && g.error)
    throw g.error;
  return c(d());
}
const Br = () => {
  let e, n;
  const r = new Promise((t, i) => {
    e = t, n = i;
  });
  return {
    resolve: e,
    reject: n,
    value: r
  };
}, Bi = (e, n) => {
  var l;
  const r = e.name ?? `batcher:${Math.random().toString(16).slice(2)})`, t = e.scheduler ?? mn(10), i = (l = globalThis.__BATSHIT_DEVTOOLS__) == null ? void 0 : l.for(r);
  let s = n ?? {
    seq: 0,
    batch: /* @__PURE__ */ new Set(),
    currentRequest: Br(),
    timer: void 0,
    start: null,
    latest: null
  };
  i == null || i.create({ seq: s.seq });
  const o = () => {
    s.batch = /* @__PURE__ */ new Set(), s.currentRequest = Br(), s.timer = void 0, s.start = null, s.latest = null;
  };
  return { fetch: (c) => {
    s.start || (s.start = Date.now()), s.latest = Date.now(), s.batch.add(c), clearTimeout(s.timer);
    const d = t(s.start, s.latest, s.batch.size);
    i == null || i.queue({
      seq: s.seq,
      query: c,
      batch: [...s.batch],
      scheduled: d,
      latest: s.latest,
      start: s.start
    });
    const h = () => {
      const p = s.seq, g = e.fetcher([...s.batch]), m = s.currentRequest;
      return i == null || i.fetch({ seq: p, batch: [...s.batch] }), o(), g.then((S) => {
        i == null || i.data({ seq: p, data: S }), m.resolve(S);
      }).catch((S) => {
        i == null || i.error({ seq: p, error: S }), m.reject(S);
      }), s.seq++, g;
    };
    if (d === "immediate") {
      const p = s.currentRequest;
      return h(), p.value.then((g) => e.resolver(g, c));
    } else
      return d === "never" ? s.currentRequest.value.then((p) => e.resolver(p, c)) : (s.timer = setTimeout(h, d), s.currentRequest.value.then((p) => e.resolver(p, c)));
  } };
}, Vi = (e) => (n, r) => n.find((t) => t[e] == r), mn = (e) => (n, r) => {
  const t = r - n;
  return e - t;
}, ji = ({
  url: e,
  idField: n,
  params: r
}) => {
  const t = Mi();
  return R.useMemo(() => Bi({
    fetcher: async (i) => {
      const {
        data: {
          data: s
        }
      } = await t.get(e, {
        params: {
          ...r,
          id: i.join(",")
        }
      });
      return s;
    },
    resolver: Vi(n),
    scheduler: mn(10)
  }), [e, r]);
}, Hi = ({
  idField: e,
  value: n,
  url: r,
  params: t
}) => {
  const i = ji({
    url: r,
    idField: e,
    params: t
  });
  return Wi({
    queries: n.map((o) => ({
      queryFn: () => i.fetch(o),
      queryKey: [r, "item", o],
      staleTime: 12e4
    })),
    combine: (o) => ({
      records: o.map((a) => a.data).filter((a) => !!a),
      isLoading: !!o.find((a) => a.isLoading)
    })
  });
}, Ii = (e, n = "id") => {
  const r = fn();
  return (t) => {
    t && r.setQueryData([e, "item", t[n]], t);
  };
};
function ma(e) {
  const n = R.useRef(null), r = R.useRef(e);
  return R.useLayoutEffect(() => {
    r.current = e;
  }), R.useEffect(() => {
    const t = (i) => {
      const s = n.current;
      s && !s.contains(i.target) && r.current(i);
    };
    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), () => {
      document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t);
    };
  }, []), n;
}
function Ui(e, n) {
  const [r, t] = R.useState(e);
  return R.useEffect(() => {
    const i = setTimeout(() => {
      t(e);
    }, n);
    return () => {
      clearTimeout(i);
    };
  }, [e, n]), r;
}
function ba(e) {
  const n = R.useCallback(
    (i) => {
      const s = window.matchMedia(e);
      return s.addEventListener("change", i), () => {
        s.removeEventListener("change", i);
      };
    },
    [e]
  ), r = () => window.matchMedia(e).matches, t = () => {
    throw Error("useMediaQuery is a client-only hook");
  };
  return R.useSyncExternalStore(n, r, t);
}
function wa() {
  const [e, n] = R.useState({
    width: null,
    height: null
  });
  return R.useLayoutEffect(() => {
    const r = () => {
      n({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}
const $i = ({
  children: e,
  className: n,
  form: r
}) => {
  var i, s;
  const t = r.formState.errors;
  return /* @__PURE__ */ Ee("form", { className: n, onSubmit: r.onSubmit, children: [
    t.root && /* @__PURE__ */ Ee(ci, { severity: "error", children: [
      ((i = t.root.error) == null ? void 0 : i.message) && /* @__PURE__ */ B(fi, { css: [{
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      }, !t.root.fields && {
        margin: "0px"
      }], children: (s = t.root.error) == null ? void 0 : s.message }),
      t.root.fields && /* @__PURE__ */ B("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(t.root.fields).map(([o, {
        message: a
      }]) => /* @__PURE__ */ B("li", { css: {}, children: a }, o)) })
    ] }),
    e
  ] });
}, Sa = $i;
var St = (e) => e.type === "checkbox", rt = (e) => e instanceof Date, we = (e) => e == null;
const bn = (e) => typeof e == "object";
var ue = (e) => !we(e) && !Array.isArray(e) && bn(e) && !rt(e), wn = (e) => ue(e) && e.target ? St(e.target) ? e.target.checked : e.target.value : e, qi = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Sn = (e, n) => e.has(qi(n)), Yi = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return ue(n) && n.hasOwnProperty("isPrototypeOf");
}, br = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function xe(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(br && (e instanceof Blob || e instanceof FileList)) && (r || ue(e)))
    if (n = r ? [] : {}, !r && !Yi(e))
      n = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (n[t] = xe(e[t]));
  else
    return e;
  return n;
}
var xt = (e) => Array.isArray(e) ? e.filter(Boolean) : [], se = (e) => e === void 0, P = (e, n, r) => {
  if (!n || !ue(e))
    return r;
  const t = xt(n.split(/[,[\].]+?/)).reduce((i, s) => we(i) ? i : i[s], e);
  return se(t) || t === e ? se(e[n]) ? r : e[n] : t;
}, Ne = (e) => typeof e == "boolean";
const At = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Le = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ue = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Xi = re.createContext(null), wr = () => re.useContext(Xi);
var xn = (e, n, r, t = !0) => {
  const i = {
    defaultValues: n._defaultValues
  };
  for (const s in e)
    Object.defineProperty(i, s, {
      get: () => {
        const o = s;
        return n._proxyFormState[o] !== Le.all && (n._proxyFormState[o] = !t || Le.all), r && (r[o] = !0), e[o];
      }
    });
  return i;
}, Ce = (e) => ue(e) && !Object.keys(e).length, _n = (e, n, r, t) => {
  r(e);
  const { name: i, ...s } = e;
  return Ce(s) || Object.keys(s).length >= Object.keys(n).length || Object.keys(s).find((o) => n[o] === (!t || Le.all));
}, Mt = (e) => Array.isArray(e) ? e : [e], On = (e, n, r) => !e || !n || e === n || Mt(e).some((t) => t && (r ? t === n : t.startsWith(n) || n.startsWith(t)));
function Sr(e) {
  const n = re.useRef(e);
  n.current = e, re.useEffect(() => {
    const r = !e.disabled && n.current.subject && n.current.subject.subscribe({
      next: n.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function Qi(e) {
  const n = wr(), { control: r = n.control, disabled: t, name: i, exact: s } = e || {}, [o, a] = re.useState(r._formState), l = re.useRef(!0), c = re.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = re.useRef(i);
  return d.current = i, Sr({
    disabled: t,
    next: (h) => l.current && On(d.current, h.name, s) && _n(h, c.current, r._updateFormState) && a({
      ...r._formState,
      ...h
    }),
    subject: r._subjects.state
  }), re.useEffect(() => (l.current = !0, c.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), xn(o, r, c.current, !1);
}
var Ve = (e) => typeof e == "string", Dn = (e, n, r, t, i) => Ve(e) ? (t && n.watch.add(e), P(r, e, i)) : Array.isArray(e) ? e.map((s) => (t && n.watch.add(s), P(r, s))) : (t && (n.watchAll = !0), r);
function Gi(e) {
  const n = wr(), { control: r = n.control, name: t, defaultValue: i, disabled: s, exact: o } = e || {}, a = re.useRef(t);
  a.current = t, Sr({
    disabled: s,
    subject: r._subjects.values,
    next: (d) => {
      On(a.current, d.name, o) && c(xe(Dn(a.current, r._names, d.values || r._formValues, !1, i)));
    }
  });
  const [l, c] = re.useState(r._getWatch(t, i));
  return re.useEffect(() => r._removeUnmounted()), l;
}
var xr = (e) => /^\w*$/.test(e), En = (e) => xt(e.replace(/["|']|\]/g, "").split(/\.|\[/)), te = (e, n, r) => {
  let t = -1;
  const i = xr(n) ? [n] : En(n), s = i.length, o = s - 1;
  for (; ++t < s; ) {
    const a = i[t];
    let l = r;
    if (t !== o) {
      const c = e[a];
      l = ue(c) || Array.isArray(c) ? c : isNaN(+i[t + 1]) ? {} : [];
    }
    e[a] = l, e = e[a];
  }
  return e;
};
function Ki(e) {
  const n = wr(), { name: r, disabled: t, control: i = n.control, shouldUnregister: s } = e, o = Sn(i._names.array, r), a = Gi({
    control: i,
    name: r,
    defaultValue: P(i._formValues, r, P(i._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = Qi({
    control: i,
    name: r
  }), c = re.useRef(i.register(r, {
    ...e.rules,
    value: a,
    ...Ne(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return re.useEffect(() => {
    const d = i._options.shouldUnregister || s, h = (p, g) => {
      const m = P(i._fields, p);
      m && (m._f.mount = g);
    };
    if (h(r, !0), d) {
      const p = xe(P(i._options.defaultValues, r));
      te(i._defaultValues, r, p), se(P(i._formValues, r)) && te(i._formValues, r, p);
    }
    return () => {
      (o ? d && !i._state.action : d) ? i.unregister(r) : h(r, !1);
    };
  }, [r, i, o, s]), re.useEffect(() => {
    P(i._fields, r) && i._updateDisabledField({
      disabled: t,
      fields: i._fields,
      name: r,
      value: P(i._fields, r)._f.value
    });
  }, [t, r, i]), {
    field: {
      name: r,
      value: a,
      ...Ne(t) || l.disabled ? { disabled: l.disabled || t } : {},
      onChange: re.useCallback((d) => c.current.onChange({
        target: {
          value: wn(d),
          name: r
        },
        type: At.CHANGE
      }), [r]),
      onBlur: re.useCallback(() => c.current.onBlur({
        target: {
          value: P(i._formValues, r),
          name: r
        },
        type: At.BLUR
      }), [r, i]),
      ref: (d) => {
        const h = P(i._fields, r);
        h && d && (h._f.ref = {
          focus: () => d.focus(),
          select: () => d.select(),
          setCustomValidity: (p) => d.setCustomValidity(p),
          reportValidity: () => d.reportValidity()
        });
      }
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!P(l.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!P(l.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!P(l.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => P(l.errors, r)
      }
    })
  };
}
const Ji = (e) => e.render(Ki(e));
var Rn = (e, n, r, t, i) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: i || !0
  }
} : {}, Vr = (e) => ({
  isOnSubmit: !e || e === Le.onSubmit,
  isOnBlur: e === Le.onBlur,
  isOnChange: e === Le.onChange,
  isOnAll: e === Le.all,
  isOnTouch: e === Le.onTouched
}), jr = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const pt = (e, n, r, t) => {
  for (const i of r || Object.keys(e)) {
    const s = P(e, i);
    if (s) {
      const { _f: o, ...a } = s;
      if (o) {
        if (o.refs && o.refs[0] && n(o.refs[0], i) && !t)
          break;
        if (o.ref && n(o.ref, o.name) && !t)
          break;
        pt(a, n);
      } else
        ue(a) && pt(a, n);
    }
  }
};
var Zi = (e, n, r) => {
  const t = xt(P(e, r));
  return te(t, "root", n[r]), te(e, r, t), e;
}, _r = (e) => e.type === "file", Ye = (e) => typeof e == "function", Nt = (e) => {
  if (!br)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, Ct = (e) => Ve(e), Or = (e) => e.type === "radio", Lt = (e) => e instanceof RegExp;
const Hr = {
  value: !1,
  isValid: !1
}, Ir = { value: !0, isValid: !0 };
var zn = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !se(e[0].attributes.value) ? se(e[0].value) || e[0].value === "" ? Ir : { value: e[0].value, isValid: !0 } : Ir
    ) : Hr;
  }
  return Hr;
};
const Ur = {
  isValid: !1,
  value: null
};
var Pn = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, Ur) : Ur;
function $r(e, n, r = "validate") {
  if (Ct(e) || Array.isArray(e) && e.every(Ct) || Ne(e) && !e)
    return {
      type: r,
      message: Ct(e) ? e : "",
      ref: n
    };
}
var et = (e) => ue(e) && !Lt(e) ? e : {
  value: e,
  message: ""
}, qr = async (e, n, r, t, i) => {
  const { ref: s, refs: o, required: a, maxLength: l, minLength: c, min: d, max: h, pattern: p, validate: g, name: m, valueAsNumber: S, mount: C, disabled: E } = e._f, b = P(n, m);
  if (!C || E)
    return {};
  const T = o ? o[0] : s, A = (M) => {
    t && T.reportValidity && (T.setCustomValidity(Ne(M) ? "" : M || ""), T.reportValidity());
  }, N = {}, Z = Or(s), q = St(s), H = Z || q, V = (S || _r(s)) && se(s.value) && se(b) || Nt(s) && s.value === "" || b === "" || Array.isArray(b) && !b.length, F = Rn.bind(null, m, r, N), U = (M, L, X, K = Ue.maxLength, G = Ue.minLength) => {
    const Q = M ? L : X;
    N[m] = {
      type: M ? K : G,
      message: Q,
      ref: s,
      ...F(M ? K : G, Q)
    };
  };
  if (i ? !Array.isArray(b) || !b.length : a && (!H && (V || we(b)) || Ne(b) && !b || q && !zn(o).isValid || Z && !Pn(o).isValid)) {
    const { value: M, message: L } = Ct(a) ? { value: !!a, message: a } : et(a);
    if (M && (N[m] = {
      type: Ue.required,
      message: L,
      ref: T,
      ...F(Ue.required, L)
    }, !r))
      return A(L), N;
  }
  if (!V && (!we(d) || !we(h))) {
    let M, L;
    const X = et(h), K = et(d);
    if (!we(b) && !isNaN(b)) {
      const G = s.valueAsNumber || b && +b;
      we(X.value) || (M = G > X.value), we(K.value) || (L = G < K.value);
    } else {
      const G = s.valueAsDate || new Date(b), Q = (ne) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ne), J = s.type == "time", ee = s.type == "week";
      Ve(X.value) && b && (M = J ? Q(b) > Q(X.value) : ee ? b > X.value : G > new Date(X.value)), Ve(K.value) && b && (L = J ? Q(b) < Q(K.value) : ee ? b < K.value : G < new Date(K.value));
    }
    if ((M || L) && (U(!!M, X.message, K.message, Ue.max, Ue.min), !r))
      return A(N[m].message), N;
  }
  if ((l || c) && !V && (Ve(b) || i && Array.isArray(b))) {
    const M = et(l), L = et(c), X = !we(M.value) && b.length > +M.value, K = !we(L.value) && b.length < +L.value;
    if ((X || K) && (U(X, M.message, L.message), !r))
      return A(N[m].message), N;
  }
  if (p && !V && Ve(b)) {
    const { value: M, message: L } = et(p);
    if (Lt(M) && !b.match(M) && (N[m] = {
      type: Ue.pattern,
      message: L,
      ref: s,
      ...F(Ue.pattern, L)
    }, !r))
      return A(L), N;
  }
  if (g) {
    if (Ye(g)) {
      const M = await g(b, n), L = $r(M, T);
      if (L && (N[m] = {
        ...L,
        ...F(Ue.validate, L.message)
      }, !r))
        return A(L.message), N;
    } else if (ue(g)) {
      let M = {};
      for (const L in g) {
        if (!Ce(M) && !r)
          break;
        const X = $r(await g[L](b, n), T, L);
        X && (M = {
          ...X,
          ...F(L, X.message)
        }, A(X.message), r && (N[m] = M));
      }
      if (!Ce(M) && (N[m] = {
        ref: T,
        ...M
      }, !r))
        return N;
    }
  }
  return A(!0), N;
};
function es(e, n) {
  const r = n.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = se(e) ? t++ : e[n[t++]];
  return e;
}
function ts(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !se(e[n]))
      return !1;
  return !0;
}
function he(e, n) {
  const r = Array.isArray(n) ? n : xr(n) ? [n] : En(n), t = r.length === 1 ? e : es(e, r), i = r.length - 1, s = r[i];
  return t && delete t[s], i !== 0 && (ue(t) && Ce(t) || Array.isArray(t) && ts(t)) && he(e, r.slice(0, -1)), e;
}
var Kt = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const s of e)
        s.next && s.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((s) => s !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Ft = (e) => we(e) || !bn(e);
function Xe(e, n) {
  if (Ft(e) || Ft(n))
    return e === n;
  if (rt(e) && rt(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), t = Object.keys(n);
  if (r.length !== t.length)
    return !1;
  for (const i of r) {
    const s = e[i];
    if (!t.includes(i))
      return !1;
    if (i !== "ref") {
      const o = n[i];
      if (rt(s) && rt(o) || ue(s) && ue(o) || Array.isArray(s) && Array.isArray(o) ? !Xe(s, o) : s !== o)
        return !1;
    }
  }
  return !0;
}
var Tn = (e) => e.type === "select-multiple", rs = (e) => Or(e) || St(e), Jt = (e) => Nt(e) && e.isConnected, Mn = (e) => {
  for (const n in e)
    if (Ye(e[n]))
      return !0;
  return !1;
};
function Wt(e, n = {}) {
  const r = Array.isArray(e);
  if (ue(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || ue(e[t]) && !Mn(e[t]) ? (n[t] = Array.isArray(e[t]) ? [] : {}, Wt(e[t], n[t])) : we(e[t]) || (n[t] = !0);
  return n;
}
function Cn(e, n, r) {
  const t = Array.isArray(e);
  if (ue(e) || t)
    for (const i in e)
      Array.isArray(e[i]) || ue(e[i]) && !Mn(e[i]) ? se(n) || Ft(r[i]) ? r[i] = Array.isArray(e[i]) ? Wt(e[i], []) : { ...Wt(e[i]) } : Cn(e[i], we(n) ? {} : n[i], r[i]) : r[i] = !Xe(e[i], n[i]);
  return r;
}
var Ot = (e, n) => Cn(e, n, Wt(n)), kn = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: t }) => se(e) ? e : n ? e === "" ? NaN : e && +e : r && Ve(e) ? new Date(e) : t ? t(e) : e;
function Zt(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return _r(n) ? n.files : Or(n) ? Pn(e.refs).value : Tn(n) ? [...n.selectedOptions].map(({ value: r }) => r) : St(n) ? zn(e.refs).value : kn(se(n.value) ? e.ref.value : n.value, e);
}
var ns = (e, n, r, t) => {
  const i = {};
  for (const s of e) {
    const o = P(n, s);
    o && te(i, s, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: t
  };
}, ct = (e) => se(e) ? e : Lt(e) ? e.source : ue(e) ? Lt(e.value) ? e.value.source : e.value : e, is = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Yr(e, n, r) {
  const t = P(e, r);
  if (t || xr(r))
    return {
      error: t,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const s = i.join("."), o = P(n, s), a = P(e, s);
    if (o && !Array.isArray(o) && r !== s)
      return { name: r };
    if (a && a.type)
      return {
        name: s,
        error: a
      };
    i.pop();
  }
  return {
    name: r
  };
}
var ss = (e, n, r, t, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(n || e) : (r ? t.isOnBlur : i.isOnBlur) ? !e : (r ? t.isOnChange : i.isOnChange) ? e : !0, os = (e, n) => !xt(P(e, n)).length && he(e, n);
const as = {
  mode: Le.onSubmit,
  reValidateMode: Le.onChange,
  shouldFocusError: !0
};
function us(e = {}, n) {
  let r = {
    ...as,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Ye(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, i = {}, s = ue(r.values) || ue(r.defaultValues) ? xe(r.values || r.defaultValues) || {} : {}, o = r.shouldUnregister ? {} : xe(s), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, d = 0;
  const h = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, p = {
    values: Kt(),
    array: Kt(),
    state: Kt()
  }, g = Vr(r.mode), m = Vr(r.reValidateMode), S = r.criteriaMode === Le.all, C = (u) => (f) => {
    clearTimeout(d), d = setTimeout(u, f);
  }, E = async (u) => {
    if (h.isValid || u) {
      const f = r.resolver ? Ce((await V()).errors) : await U(i, !0);
      f !== t.isValid && p.state.next({
        isValid: f
      });
    }
  }, b = (u) => h.isValidating && p.state.next({
    isValidating: u
  }), T = (u, f = [], v, k, z = !0, _ = !0) => {
    if (k && v) {
      if (a.action = !0, _ && Array.isArray(P(i, u))) {
        const j = v(P(i, u), k.argA, k.argB);
        z && te(i, u, j);
      }
      if (_ && Array.isArray(P(t.errors, u))) {
        const j = v(P(t.errors, u), k.argA, k.argB);
        z && te(t.errors, u, j), os(t.errors, u);
      }
      if (h.touchedFields && _ && Array.isArray(P(t.touchedFields, u))) {
        const j = v(P(t.touchedFields, u), k.argA, k.argB);
        z && te(t.touchedFields, u, j);
      }
      h.dirtyFields && (t.dirtyFields = Ot(s, o)), p.state.next({
        name: u,
        isDirty: L(u, f),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      te(o, u, f);
  }, A = (u, f) => {
    te(t.errors, u, f), p.state.next({
      errors: t.errors
    });
  }, N = (u) => {
    t.errors = u, p.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, Z = (u, f, v, k) => {
    const z = P(i, u);
    if (z) {
      const _ = P(o, u, se(v) ? P(s, u) : v);
      se(_) || k && k.defaultChecked || f ? te(o, u, f ? _ : Zt(z._f)) : G(u, _), a.mount && E();
    }
  }, q = (u, f, v, k, z) => {
    let _ = !1, j = !1;
    const ie = {
      name: u
    }, le = !!(P(i, u) && P(i, u)._f.disabled);
    if (!v || k) {
      h.isDirty && (j = t.isDirty, t.isDirty = ie.isDirty = L(), _ = j !== ie.isDirty);
      const We = le || Xe(P(s, u), f);
      j = !!(!le && P(t.dirtyFields, u)), We || le ? he(t.dirtyFields, u) : te(t.dirtyFields, u, !0), ie.dirtyFields = t.dirtyFields, _ = _ || h.dirtyFields && j !== !We;
    }
    if (v) {
      const We = P(t.touchedFields, u);
      We || (te(t.touchedFields, u, v), ie.touchedFields = t.touchedFields, _ = _ || h.touchedFields && We !== v);
    }
    return _ && z && p.state.next(ie), _ ? ie : {};
  }, H = (u, f, v, k) => {
    const z = P(t.errors, u), _ = h.isValid && Ne(f) && t.isValid !== f;
    if (e.delayError && v ? (c = C(() => A(u, v)), c(e.delayError)) : (clearTimeout(d), c = null, v ? te(t.errors, u, v) : he(t.errors, u)), (v ? !Xe(z, v) : z) || !Ce(k) || _) {
      const j = {
        ...k,
        ..._ && Ne(f) ? { isValid: f } : {},
        errors: t.errors,
        name: u
      };
      t = {
        ...t,
        ...j
      }, p.state.next(j);
    }
    b(!1);
  }, V = async (u) => r.resolver(o, r.context, ns(u || l.mount, i, r.criteriaMode, r.shouldUseNativeValidation)), F = async (u) => {
    const { errors: f } = await V(u);
    if (u)
      for (const v of u) {
        const k = P(f, v);
        k ? te(t.errors, v, k) : he(t.errors, v);
      }
    else
      t.errors = f;
    return f;
  }, U = async (u, f, v = {
    valid: !0
  }) => {
    for (const k in u) {
      const z = u[k];
      if (z) {
        const { _f: _, ...j } = z;
        if (_) {
          const ie = l.array.has(_.name), le = await qr(z, o, S, r.shouldUseNativeValidation && !f, ie);
          if (le[_.name] && (v.valid = !1, f))
            break;
          !f && (P(le, _.name) ? ie ? Zi(t.errors, le, _.name) : te(t.errors, _.name, le[_.name]) : he(t.errors, _.name));
        }
        j && await U(j, f, v);
      }
    }
    return v.valid;
  }, M = () => {
    for (const u of l.unMount) {
      const f = P(i, u);
      f && (f._f.refs ? f._f.refs.every((v) => !Jt(v)) : !Jt(f._f.ref)) && W(u);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, L = (u, f) => (u && f && te(o, u, f), !Xe(y(), s)), X = (u, f, v) => Dn(u, l, {
    ...a.mount ? o : se(f) ? s : Ve(u) ? { [u]: f } : f
  }, v, f), K = (u) => xt(P(a.mount ? o : s, u, e.shouldUnregister ? P(s, u, []) : [])), G = (u, f, v = {}) => {
    const k = P(i, u);
    let z = f;
    if (k) {
      const _ = k._f;
      _ && (!_.disabled && te(o, u, kn(f, _)), z = Nt(_.ref) && we(f) ? "" : f, Tn(_.ref) ? [..._.ref.options].forEach((j) => j.selected = z.includes(j.value)) : _.refs ? St(_.ref) ? _.refs.length > 1 ? _.refs.forEach((j) => (!j.defaultChecked || !j.disabled) && (j.checked = Array.isArray(z) ? !!z.find((ie) => ie === j.value) : z === j.value)) : _.refs[0] && (_.refs[0].checked = !!z) : _.refs.forEach((j) => j.checked = j.value === z) : _r(_.ref) ? _.ref.value = "" : (_.ref.value = z, _.ref.type || p.values.next({
        name: u,
        values: { ...o }
      })));
    }
    (v.shouldDirty || v.shouldTouch) && q(u, z, v.shouldTouch, v.shouldDirty, !0), v.shouldValidate && de(u);
  }, Q = (u, f, v) => {
    for (const k in f) {
      const z = f[k], _ = `${u}.${k}`, j = P(i, _);
      (l.array.has(u) || !Ft(z) || j && !j._f) && !rt(z) ? Q(_, z, v) : G(_, z, v);
    }
  }, J = (u, f, v = {}) => {
    const k = P(i, u), z = l.array.has(u), _ = xe(f);
    te(o, u, _), z ? (p.array.next({
      name: u,
      values: { ...o }
    }), (h.isDirty || h.dirtyFields) && v.shouldDirty && p.state.next({
      name: u,
      dirtyFields: Ot(s, o),
      isDirty: L(u, _)
    })) : k && !k._f && !we(_) ? Q(u, _, v) : G(u, _, v), jr(u, l) && p.state.next({ ...t }), p.values.next({
      name: u,
      values: { ...o }
    }), !a.mount && n();
  }, ee = async (u) => {
    const f = u.target;
    let v = f.name, k = !0;
    const z = P(i, v), _ = () => f.type ? Zt(z._f) : wn(u), j = (ie) => {
      k = Number.isNaN(ie) || ie === P(o, v, ie);
    };
    if (z) {
      let ie, le;
      const We = _(), Ze = u.type === At.BLUR || u.type === At.FOCUS_OUT, ri = !is(z._f) && !r.resolver && !P(t.errors, v) && !z._f.deps || ss(Ze, P(t.touchedFields, v), t.isSubmitted, m, g), Xt = jr(v, l, Ze);
      te(o, v, We), Ze ? (z._f.onBlur && z._f.onBlur(u), c && c(0)) : z._f.onChange && z._f.onChange(u);
      const Qt = q(v, We, Ze, !1), ni = !Ce(Qt) || Xt;
      if (!Ze && p.values.next({
        name: v,
        type: u.type,
        values: { ...o }
      }), ri)
        return h.isValid && E(), ni && p.state.next({ name: v, ...Xt ? {} : Qt });
      if (!Ze && Xt && p.state.next({ ...t }), b(!0), r.resolver) {
        const { errors: kr } = await V([v]);
        if (j(We), k) {
          const ii = Yr(t.errors, i, v), Ar = Yr(kr, i, ii.name || v);
          ie = Ar.error, v = Ar.name, le = Ce(kr);
        }
      } else
        ie = (await qr(z, o, S, r.shouldUseNativeValidation))[v], j(We), k && (ie ? le = !1 : h.isValid && (le = await U(i, !0)));
      k && (z._f.deps && de(z._f.deps), H(v, le, ie, Qt));
    }
  }, ne = (u, f) => {
    if (P(t.errors, f) && u.focus)
      return u.focus(), 1;
  }, de = async (u, f = {}) => {
    let v, k;
    const z = Mt(u);
    if (b(!0), r.resolver) {
      const _ = await F(se(u) ? u : z);
      v = Ce(_), k = u ? !z.some((j) => P(_, j)) : v;
    } else
      u ? (k = (await Promise.all(z.map(async (_) => {
        const j = P(i, _);
        return await U(j && j._f ? { [_]: j } : j);
      }))).every(Boolean), !(!k && !t.isValid) && E()) : k = v = await U(i);
    return p.state.next({
      ...!Ve(u) || h.isValid && v !== t.isValid ? {} : { name: u },
      ...r.resolver || !u ? { isValid: v } : {},
      errors: t.errors,
      isValidating: !1
    }), f.shouldFocus && !k && pt(i, ne, u ? z : l.mount), k;
  }, y = (u) => {
    const f = {
      ...s,
      ...a.mount ? o : {}
    };
    return se(u) ? f : Ve(u) ? P(f, u) : u.map((v) => P(f, v));
  }, w = (u, f) => ({
    invalid: !!P((f || t).errors, u),
    isDirty: !!P((f || t).dirtyFields, u),
    isTouched: !!P((f || t).touchedFields, u),
    error: P((f || t).errors, u)
  }), x = (u) => {
    u && Mt(u).forEach((f) => he(t.errors, f)), p.state.next({
      errors: u ? t.errors : {}
    });
  }, O = (u, f, v) => {
    const k = (P(i, u, { _f: {} })._f || {}).ref;
    te(t.errors, u, {
      ...f,
      ref: k
    }), p.state.next({
      name: u,
      errors: t.errors,
      isValid: !1
    }), v && v.shouldFocus && k && k.focus && k.focus();
  }, D = (u, f) => Ye(u) ? p.values.subscribe({
    next: (v) => u(X(void 0, f), v)
  }) : X(u, f, !0), W = (u, f = {}) => {
    for (const v of u ? Mt(u) : l.mount)
      l.mount.delete(v), l.array.delete(v), f.keepValue || (he(i, v), he(o, v)), !f.keepError && he(t.errors, v), !f.keepDirty && he(t.dirtyFields, v), !f.keepTouched && he(t.touchedFields, v), !r.shouldUnregister && !f.keepDefaultValue && he(s, v);
    p.values.next({
      values: { ...o }
    }), p.state.next({
      ...t,
      ...f.keepDirty ? { isDirty: L() } : {}
    }), !f.keepIsValid && E();
  }, $ = ({ disabled: u, name: f, field: v, fields: k, value: z }) => {
    if (Ne(u)) {
      const _ = u ? void 0 : se(z) ? Zt(v ? v._f : P(k, f)._f) : z;
      te(o, f, _), q(f, _, !1, !1, !0);
    }
  }, I = (u, f = {}) => {
    let v = P(i, u);
    const k = Ne(f.disabled);
    return te(i, u, {
      ...v || {},
      _f: {
        ...v && v._f ? v._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...f
      }
    }), l.mount.add(u), v ? $({
      field: v,
      disabled: f.disabled,
      name: u,
      value: f.value
    }) : Z(u, !0, f.value), {
      ...k ? { disabled: f.disabled } : {},
      ...r.progressive ? {
        required: !!f.required,
        min: ct(f.min),
        max: ct(f.max),
        minLength: ct(f.minLength),
        maxLength: ct(f.maxLength),
        pattern: ct(f.pattern)
      } : {},
      name: u,
      onChange: ee,
      onBlur: ee,
      ref: (z) => {
        if (z) {
          I(u, f), v = P(i, u);
          const _ = se(z.value) && z.querySelectorAll && z.querySelectorAll("input,select,textarea")[0] || z, j = rs(_), ie = v._f.refs || [];
          if (j ? ie.find((le) => le === _) : _ === v._f.ref)
            return;
          te(i, u, {
            _f: {
              ...v._f,
              ...j ? {
                refs: [
                  ...ie.filter(Jt),
                  _,
                  ...Array.isArray(P(s, u)) ? [{}] : []
                ],
                ref: { type: _.type, name: u }
              } : { ref: _ }
            }
          }), Z(u, !1, void 0, _);
        } else
          v = P(i, u, {}), v._f && (v._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(Sn(l.array, u) && a.action) && l.unMount.add(u);
      }
    };
  }, Y = () => r.shouldFocusError && pt(i, ne, l.mount), ye = (u) => {
    Ne(u) && (p.state.next({ disabled: u }), pt(i, (f, v) => {
      let k = u;
      const z = P(i, v);
      z && Ne(z._f.disabled) && (k || (k = z._f.disabled)), f.disabled = k;
    }, 0, !1));
  }, pe = (u, f) => async (v) => {
    let k;
    v && (v.preventDefault && v.preventDefault(), v.persist && v.persist());
    let z = xe(o);
    if (p.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: _, values: j } = await V();
      t.errors = _, z = j;
    } else
      await U(i);
    if (he(t.errors, "root"), Ce(t.errors)) {
      p.state.next({
        errors: {}
      });
      try {
        await u(z, v);
      } catch (_) {
        k = _;
      }
    } else
      f && await f({ ...t.errors }, v), Y(), setTimeout(Y);
    if (p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ce(t.errors) && !k,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), k)
      throw k;
  }, me = (u, f = {}) => {
    P(i, u) && (se(f.defaultValue) ? J(u, xe(P(s, u))) : (J(u, f.defaultValue), te(s, u, xe(f.defaultValue))), f.keepTouched || he(t.touchedFields, u), f.keepDirty || (he(t.dirtyFields, u), t.isDirty = f.defaultValue ? L(u, xe(P(s, u))) : L()), f.keepError || (he(t.errors, u), h.isValid && E()), p.state.next({ ...t }));
  }, Se = (u, f = {}) => {
    const v = u ? xe(u) : s, k = xe(v), z = u && !Ce(u) ? k : s;
    if (f.keepDefaultValues || (s = v), !f.keepValues) {
      if (f.keepDirtyValues)
        for (const _ of l.mount)
          P(t.dirtyFields, _) ? te(z, _, P(o, _)) : J(_, P(z, _));
      else {
        if (br && se(u))
          for (const _ of l.mount) {
            const j = P(i, _);
            if (j && j._f) {
              const ie = Array.isArray(j._f.refs) ? j._f.refs[0] : j._f.ref;
              if (Nt(ie)) {
                const le = ie.closest("form");
                if (le) {
                  le.reset();
                  break;
                }
              }
            }
          }
        i = {};
      }
      o = e.shouldUnregister ? f.keepDefaultValues ? xe(s) : {} : xe(z), p.array.next({
        values: { ...z }
      }), p.values.next({
        values: { ...z }
      });
    }
    l = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !a.mount && n(), a.mount = !h.isValid || !!f.keepIsValid || !!f.keepDirtyValues, a.watch = !!e.shouldUnregister, p.state.next({
      submitCount: f.keepSubmitCount ? t.submitCount : 0,
      isDirty: f.keepDirty ? t.isDirty : !!(f.keepDefaultValues && !Xe(u, s)),
      isSubmitted: f.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: f.keepDirtyValues ? f.keepDefaultValues && o ? Ot(s, o) : t.dirtyFields : f.keepDefaultValues && u ? Ot(s, u) : {},
      touchedFields: f.keepTouched ? t.touchedFields : {},
      errors: f.keepErrors ? t.errors : {},
      isSubmitSuccessful: f.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ze = (u, f) => Se(Ye(u) ? u(o) : u, f);
  return {
    control: {
      register: I,
      unregister: W,
      getFieldState: w,
      handleSubmit: pe,
      setError: O,
      _executeSchema: V,
      _getWatch: X,
      _getDirty: L,
      _updateValid: E,
      _removeUnmounted: M,
      _updateFieldArray: T,
      _updateDisabledField: $,
      _getFieldArray: K,
      _reset: Se,
      _resetDefaultValues: () => Ye(r.defaultValues) && r.defaultValues().then((u) => {
        ze(u, r.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (u) => {
        t = {
          ...t,
          ...u
        };
      },
      _disableForm: ye,
      _subjects: p,
      _proxyFormState: h,
      _setErrors: N,
      get _fields() {
        return i;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(u) {
        a = u;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return l;
      },
      set _names(u) {
        l = u;
      },
      get _formState() {
        return t;
      },
      set _formState(u) {
        t = u;
      },
      get _options() {
        return r;
      },
      set _options(u) {
        r = {
          ...r,
          ...u
        };
      }
    },
    trigger: de,
    register: I,
    handleSubmit: pe,
    watch: D,
    setValue: J,
    getValues: y,
    reset: ze,
    resetField: me,
    clearErrors: x,
    unregister: W,
    setError: O,
    setFocus: (u, f = {}) => {
      const v = P(i, u), k = v && v._f;
      if (k) {
        const z = k.refs ? k.refs[0] : k.ref;
        z.focus && (z.focus(), f.shouldSelect && z.select());
      }
    },
    getFieldState: w
  };
}
function ls(e = {}) {
  const n = re.useRef(), r = re.useRef(), [t, i] = re.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ye(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: Ye(e.defaultValues) ? void 0 : e.defaultValues
  });
  n.current || (n.current = {
    ...us(e, () => i((o) => ({ ...o }))),
    formState: t
  });
  const s = n.current.control;
  return s._options = e, Sr({
    subject: s._subjects.state,
    next: (o) => {
      _n(o, s._proxyFormState, s._updateFormState, !0) && i({ ...s._formState });
    }
  }), re.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), re.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const o = s._getDirty();
      o !== t.isDirty && s._subjects.state.next({
        isDirty: o
      });
    }
  }, [s, t.isDirty]), re.useEffect(() => {
    e.values && !Xe(e.values, r.current) ? (s._reset(e.values, s._options.resetOptions), r.current = e.values, i((o) => ({ ...o }))) : s._resetDefaultValues();
  }, [e.values, s]), re.useEffect(() => {
    e.errors && s._setErrors(e.errors);
  }, [e.errors, s]), re.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), re.useEffect(() => {
    e.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [e.shouldUnregister, s]), n.current.formState = xn(t, s), n.current;
}
const cs = ({
  render: e,
  ...n
}) => /* @__PURE__ */ B(Ji, { ...n, render: ({
  field: r,
  fieldState: t,
  ...i
}) => {
  var s;
  return e({
    field: {
      ...r,
      error: (s = t.error) == null ? void 0 : s.message
    },
    fieldState: t,
    ...i
  });
} }), xa = cs;
var An = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", r = "triangle-exclamation", t = 512, i = 512, s = [9888, "exclamation-triangle", "warning"], o = "f071", a = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  e.definition = {
    prefix: n,
    iconName: r,
    icon: [
      t,
      i,
      s,
      o,
      a
    ]
  }, e.faTriangleExclamation = e.definition, e.prefix = n, e.iconName = r, e.width = t, e.height = i, e.ligatures = s, e.unicode = o, e.svgPathData = a, e.aliases = s;
})(An);
const fs = ({
  helperText: e,
  label: n,
  error: r,
  children: t,
  ...i
}, s) => (e = r || e, /* @__PURE__ */ Ee("div", { ref: s, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, n && {
  paddingTop: "1.5rem"
}], ...i, children: [
  t,
  n && /* @__PURE__ */ B("label", { css: [{
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
  }], children: n }),
  e && /* @__PURE__ */ Ee("div", { css: [{
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
    r && /* @__PURE__ */ B(Ge, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: An.faTriangleExclamation }),
    e
  ] })
] })), Ht = R.forwardRef(fs);
var Xr = function(e, n, r) {
  if (e && "reportValidity" in e) {
    var t = P(r, n);
    e.setCustomValidity(t && t.message || ""), e.reportValidity();
  }
}, Nn = function(e, n) {
  var r = function(i) {
    var s = n.fields[i];
    s && s.ref && "reportValidity" in s.ref ? Xr(s.ref, i, e) : s.refs && s.refs.forEach(function(o) {
      return Xr(o, i, e);
    });
  };
  for (var t in n.fields)
    r(t);
}, ds = function(e, n) {
  n.shouldUseNativeValidation && Nn(e, n);
  var r = {};
  for (var t in e) {
    var i = P(n.fields, t), s = Object.assign(e[t] || {}, { ref: i && i.ref });
    if (ps(n.names || Object.keys(e), t)) {
      var o = Object.assign({}, P(r, t));
      te(o, "root", s), te(r, t, o);
    } else
      te(r, t, s);
  }
  return r;
}, ps = function(e, n) {
  return e.some(function(r) {
    return r.startsWith(n + ".");
  });
}, hs = function(e, n) {
  for (var r = {}; e.length; ) {
    var t = e[0], i = t.code, s = t.message, o = t.path.join(".");
    if (!r[o])
      if ("unionErrors" in t) {
        var a = t.unionErrors[0].errors[0];
        r[o] = { message: a.message, type: a.code };
      } else
        r[o] = { message: s, type: i };
    if ("unionErrors" in t && t.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(h) {
        return e.push(h);
      });
    }), n) {
      var l = r[o].types, c = l && l[t.code];
      r[o] = Rn(o, n, r, i, c ? [].concat(c, t.message) : t.message);
    }
    e.shift();
  }
  return r;
}, gs = function(e, n, r) {
  return r === void 0 && (r = {}), function(t, i, s) {
    try {
      return Promise.resolve(function(o, a) {
        try {
          var l = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](t, n)).then(function(c) {
            return s.shouldUseNativeValidation && Nn({}, s), { errors: {}, values: r.raw ? t : c };
          });
        } catch (c) {
          return a(c);
        }
        return l && l.then ? l.then(void 0, a) : l;
      }(0, function(o) {
        if (function(a) {
          return a.errors != null;
        }(o))
          return { values: {}, errors: ds(hs(o.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
};
const vs = ({
  schema: e,
  mode: n = "onChange",
  reValidateMode: r = "onChange",
  onValid: t,
  onInvalid: i,
  ...s
} = {}) => {
  const o = ls({
    mode: n,
    reValidateMode: r,
    resolver: e ? gs(e) : void 0,
    ...s
  });
  return {
    onSubmit: o.handleSubmit((a, l) => t == null ? void 0 : t(a, l), i),
    submit: async () => new Promise((a, l) => {
      o.handleSubmit(async (d, h) => {
        try {
          await (t == null ? void 0 : t(d, h)), a(void 0);
        } catch (p) {
          l(p);
        }
      }, (d) => {
        l(d);
      })();
    }),
    ...o
  };
}, _a = ({
  onValid: e,
  context: n,
  mutation: r,
  defaultValues: t,
  schema: i,
  transformSendData: s,
  ...o
}) => {
  const a = vs({
    context: n,
    schema: i,
    defaultValues: t,
    onValid: async (l) => {
      await (e == null ? void 0 : e(l)), await (r == null ? void 0 : r.mutateAsync(s ? s(l) : l, {
        onError: (c, d) => {
          var p;
          const h = (p = c.response) == null ? void 0 : p.data;
          h ? h.errors ? h.errors.forEach((g) => {
            g.attribute in d ? a.setError(g.attribute, {
              message: g.msg
            }) : a.setError(`root.fields.${g.attribute}`, {
              type: "server",
              message: g.msg
            });
          }) : a.setError("root.error", {
            type: "server",
            message: h.message
          }) : a.setError("root.error", {
            type: "server",
            message: c.message
          });
        }
      }));
    },
    ...o
  });
  return a;
};
var Ln = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", r = "xmark", t = 384, i = 512, s = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], o = "f00d", a = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  e.definition = {
    prefix: n,
    iconName: r,
    icon: [
      t,
      i,
      s,
      o,
      a
    ]
  }, e.faXmark = e.definition, e.prefix = n, e.iconName = r, e.width = t, e.height = i, e.ligatures = s, e.unicode = o, e.svgPathData = a, e.aliases = s;
})(Ln);
var It = { exports: {} }, Fn = {};
function Wn(e) {
  var n, r, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (r = Wn(e[n])) && (t && (t += " "), t += r);
    else
      for (n in e)
        e[n] && (t && (t += " "), t += n);
  return t;
}
function Qr() {
  for (var e, n, r = 0, t = ""; r < arguments.length; )
    (e = arguments[r++]) && (n = Wn(e)) && (t && (t += " "), t += n);
  return t;
}
const ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Qr,
  default: Qr
}, Symbol.toStringTag, { value: "Module" })), ms = /* @__PURE__ */ xi(ys);
var oe = {}, je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.dontSetMe = _s;
je.findInArray = bs;
je.int = xs;
je.isFunction = ws;
je.isNum = Ss;
function bs(e, n) {
  for (var r = 0, t = e.length; r < t; r++)
    if (n.apply(n, [e[r], r, e]))
      return e[r];
}
function ws(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Ss(e) {
  return typeof e == "number" && !isNaN(e);
}
function xs(e) {
  return parseInt(e, 10);
}
function _s(e, n, r) {
  if (e[n])
    return new Error("Invalid prop ".concat(n, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.browserPrefixToKey = Vn;
Ke.browserPrefixToStyle = Os;
Ke.default = void 0;
Ke.getPrefix = Bn;
var er = ["Moz", "Webkit", "O", "ms"];
function Bn() {
  var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var t = (e = window.document) === null || e === void 0 || (n = e.documentElement) === null || n === void 0 ? void 0 : n.style;
  if (!t || r in t)
    return "";
  for (var i = 0; i < er.length; i++)
    if (Vn(r, er[i]) in t)
      return er[i];
  return "";
}
function Vn(e, n) {
  return n ? "".concat(n).concat(Ds(e)) : e;
}
function Os(e, n) {
  return n ? "-".concat(n.toLowerCase(), "-").concat(e) : e;
}
function Ds(e) {
  for (var n = "", r = !0, t = 0; t < e.length; t++)
    r ? (n += e[t].toUpperCase(), r = !1) : e[t] === "-" ? r = !0 : n += e[t];
  return n;
}
var Es = Bn();
Ke.default = Es;
function cr(e) {
  "@babel/helpers - typeof";
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, cr(e);
}
Object.defineProperty(oe, "__esModule", {
  value: !0
});
oe.addClassName = $n;
oe.addEvent = Ps;
oe.addUserSelectStyles = Vs;
oe.createCSSTransform = Ls;
oe.createSVGTransform = Fs;
oe.getTouch = Ws;
oe.getTouchIdentifier = Bs;
oe.getTranslation = Dr;
oe.innerHeight = ks;
oe.innerWidth = As;
oe.matchesSelector = Un;
oe.matchesSelectorAndParentsTo = zs;
oe.offsetXYFromParent = Ns;
oe.outerHeight = Ms;
oe.outerWidth = Cs;
oe.removeClassName = qn;
oe.removeEvent = Ts;
oe.removeUserSelectStyles = js;
var Re = je, Gr = Rs(Ke);
function jn(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (jn = function(i) {
    return i ? r : n;
  })(e);
}
function Rs(e, n) {
  if (!n && e && e.__esModule)
    return e;
  if (e === null || cr(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = jn(n);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, s) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, s, o) : t[s] = e[s];
    }
  return t.default = e, r && r.set(e, t), t;
}
function Kr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Hn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Kr(Object(r), !0).forEach(function(t) {
      In(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function In(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
var Dt = "";
function Un(e, n) {
  return Dt || (Dt = (0, Re.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, Re.isFunction)(e[r]);
  })), (0, Re.isFunction)(e[Dt]) ? e[Dt](n) : !1;
}
function zs(e, n, r) {
  var t = e;
  do {
    if (Un(t, n))
      return !0;
    if (t === r)
      return !1;
    t = t.parentNode;
  } while (t);
  return !1;
}
function Ps(e, n, r, t) {
  if (e) {
    var i = Hn({
      capture: !0
    }, t);
    e.addEventListener ? e.addEventListener(n, r, i) : e.attachEvent ? e.attachEvent("on" + n, r) : e["on" + n] = r;
  }
}
function Ts(e, n, r, t) {
  if (e) {
    var i = Hn({
      capture: !0
    }, t);
    e.removeEventListener ? e.removeEventListener(n, r, i) : e.detachEvent ? e.detachEvent("on" + n, r) : e["on" + n] = null;
  }
}
function Ms(e) {
  var n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n += (0, Re.int)(r.borderTopWidth), n += (0, Re.int)(r.borderBottomWidth), n;
}
function Cs(e) {
  var n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n += (0, Re.int)(r.borderLeftWidth), n += (0, Re.int)(r.borderRightWidth), n;
}
function ks(e) {
  var n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n -= (0, Re.int)(r.paddingTop), n -= (0, Re.int)(r.paddingBottom), n;
}
function As(e) {
  var n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n -= (0, Re.int)(r.paddingLeft), n -= (0, Re.int)(r.paddingRight), n;
}
function Ns(e, n, r) {
  var t = n === n.ownerDocument.body, i = t ? {
    left: 0,
    top: 0
  } : n.getBoundingClientRect(), s = (e.clientX + n.scrollLeft - i.left) / r, o = (e.clientY + n.scrollTop - i.top) / r;
  return {
    x: s,
    y: o
  };
}
function Ls(e, n) {
  var r = Dr(e, n, "px");
  return In({}, (0, Gr.browserPrefixToKey)("transform", Gr.default), r);
}
function Fs(e, n) {
  var r = Dr(e, n, "");
  return r;
}
function Dr(e, n, r) {
  var t = e.x, i = e.y, s = "translate(".concat(t).concat(r, ",").concat(i).concat(r, ")");
  if (n) {
    var o = "".concat(typeof n.x == "string" ? n.x : n.x + r), a = "".concat(typeof n.y == "string" ? n.y : n.y + r);
    s = "translate(".concat(o, ", ").concat(a, ")") + s;
  }
  return s;
}
function Ws(e, n) {
  return e.targetTouches && (0, Re.findInArray)(e.targetTouches, function(r) {
    return n === r.identifier;
  }) || e.changedTouches && (0, Re.findInArray)(e.changedTouches, function(r) {
    return n === r.identifier;
  });
}
function Bs(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Vs(e) {
  if (e) {
    var n = e.getElementById("react-draggable-style-el");
    n || (n = e.createElement("style"), n.type = "text/css", n.id = "react-draggable-style-el", n.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, n.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(n)), e.body && $n(e.body, "react-draggable-transparent-selection");
  }
}
function js(e) {
  if (e)
    try {
      if (e.body && qn(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var n = (e.defaultView || window).getSelection();
        n && n.type !== "Caret" && n.removeAllRanges();
      }
    } catch {
    }
}
function $n(e, n) {
  e.classList ? e.classList.add(n) : e.className.match(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"))) || (e.className += " ".concat(n));
}
function qn(e, n) {
  e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"), "g"), "");
}
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.canDragX = Us;
He.canDragY = $s;
He.createCoreData = Ys;
He.createDraggableData = Xs;
He.getBoundPosition = Hs;
He.getControlPosition = qs;
He.snapToGrid = Is;
var Oe = je, nt = oe;
function Hs(e, n, r) {
  if (!e.props.bounds)
    return [n, r];
  var t = e.props.bounds;
  t = typeof t == "string" ? t : Qs(t);
  var i = Er(e);
  if (typeof t == "string") {
    var s = i.ownerDocument, o = s.defaultView, a;
    if (t === "parent" ? a = i.parentNode : a = s.querySelector(t), !(a instanceof o.HTMLElement))
      throw new Error('Bounds selector "' + t + '" could not find an element.');
    var l = a, c = o.getComputedStyle(i), d = o.getComputedStyle(l);
    t = {
      left: -i.offsetLeft + (0, Oe.int)(d.paddingLeft) + (0, Oe.int)(c.marginLeft),
      top: -i.offsetTop + (0, Oe.int)(d.paddingTop) + (0, Oe.int)(c.marginTop),
      right: (0, nt.innerWidth)(l) - (0, nt.outerWidth)(i) - i.offsetLeft + (0, Oe.int)(d.paddingRight) - (0, Oe.int)(c.marginRight),
      bottom: (0, nt.innerHeight)(l) - (0, nt.outerHeight)(i) - i.offsetTop + (0, Oe.int)(d.paddingBottom) - (0, Oe.int)(c.marginBottom)
    };
  }
  return (0, Oe.isNum)(t.right) && (n = Math.min(n, t.right)), (0, Oe.isNum)(t.bottom) && (r = Math.min(r, t.bottom)), (0, Oe.isNum)(t.left) && (n = Math.max(n, t.left)), (0, Oe.isNum)(t.top) && (r = Math.max(r, t.top)), [n, r];
}
function Is(e, n, r) {
  var t = Math.round(n / e[0]) * e[0], i = Math.round(r / e[1]) * e[1];
  return [t, i];
}
function Us(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function $s(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function qs(e, n, r) {
  var t = typeof n == "number" ? (0, nt.getTouch)(e, n) : null;
  if (typeof n == "number" && !t)
    return null;
  var i = Er(r), s = r.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, nt.offsetXYFromParent)(t || e, s, r.props.scale);
}
function Ys(e, n, r) {
  var t = e.state, i = !(0, Oe.isNum)(t.lastX), s = Er(e);
  return i ? {
    node: s,
    deltaX: 0,
    deltaY: 0,
    lastX: n,
    lastY: r,
    x: n,
    y: r
  } : {
    node: s,
    deltaX: n - t.lastX,
    deltaY: r - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: n,
    y: r
  };
}
function Xs(e, n) {
  var r = e.props.scale;
  return {
    node: n.node,
    x: e.state.x + n.deltaX / r,
    y: e.state.y + n.deltaY / r,
    deltaX: n.deltaX / r,
    deltaY: n.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Qs(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Er(e) {
  var n = e.findDOMNode();
  if (!n)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return n;
}
var Ut = {}, $t = {};
Object.defineProperty($t, "__esModule", {
  value: !0
});
$t.default = Gs;
function Gs() {
}
function Bt(e) {
  "@babel/helpers - typeof";
  return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bt(e);
}
Object.defineProperty(Ut, "__esModule", {
  value: !0
});
Ut.default = void 0;
var tr = Js(R), _e = Rr(vn), Ks = Rr(kt), ge = oe, $e = He, rr = je, ft = Rr($t);
function Rr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yn(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Yn = function(i) {
    return i ? r : n;
  })(e);
}
function Js(e, n) {
  if (!n && e && e.__esModule)
    return e;
  if (e === null || Bt(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = Yn(n);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, s) : null;
      o && (o.get || o.set) ? Object.defineProperty(t, s, o) : t[s] = e[s];
    }
  return t.default = e, r && r.set(e, t), t;
}
function Jr(e, n) {
  return ro(e) || to(e, n) || eo(e, n) || Zs();
}
function Zs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eo(e, n) {
  if (e) {
    if (typeof e == "string")
      return Zr(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zr(e, n);
  }
}
function Zr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function to(e, n) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t = [], i = !0, s = !1, o, a;
    try {
      for (r = r.call(e); !(i = (o = r.next()).done) && (t.push(o.value), !(n && t.length === n)); i = !0)
        ;
    } catch (l) {
      s = !0, a = l;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw a;
      }
    }
    return t;
  }
}
function ro(e) {
  if (Array.isArray(e))
    return e;
}
function no(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function en(e, n) {
  for (var r = 0; r < n.length; r++) {
    var t = n[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function io(e, n, r) {
  return n && en(e.prototype, n), r && en(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function so(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && fr(e, n);
}
function fr(e, n) {
  return fr = Object.setPrototypeOf || function(t, i) {
    return t.__proto__ = i, t;
  }, fr(e, n);
}
function oo(e) {
  var n = uo();
  return function() {
    var t = Vt(e), i;
    if (n) {
      var s = Vt(this).constructor;
      i = Reflect.construct(t, arguments, s);
    } else
      i = t.apply(this, arguments);
    return ao(this, i);
  };
}
function ao(e, n) {
  if (n && (Bt(n) === "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ve(e);
}
function ve(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uo() {
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
function Vt(e) {
  return Vt = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vt(e);
}
function Me(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
var Ae = {
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
}, qe = Ae.mouse, qt = /* @__PURE__ */ function(e) {
  so(r, e);
  var n = oo(r);
  function r() {
    var t;
    no(this, r);
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return t = n.call.apply(n, [this].concat(s)), Me(ve(t), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), Me(ve(t), "mounted", !1), Me(ve(t), "handleDragStart", function(a) {
      if (t.props.onMouseDown(a), !t.props.allowAnyClick && typeof a.button == "number" && a.button !== 0)
        return !1;
      var l = t.findDOMNode();
      if (!l || !l.ownerDocument || !l.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var c = l.ownerDocument;
      if (!(t.props.disabled || !(a.target instanceof c.defaultView.Node) || t.props.handle && !(0, ge.matchesSelectorAndParentsTo)(a.target, t.props.handle, l) || t.props.cancel && (0, ge.matchesSelectorAndParentsTo)(a.target, t.props.cancel, l))) {
        a.type === "touchstart" && a.preventDefault();
        var d = (0, ge.getTouchIdentifier)(a);
        t.setState({
          touchIdentifier: d
        });
        var h = (0, $e.getControlPosition)(a, d, ve(t));
        if (h != null) {
          var p = h.x, g = h.y, m = (0, $e.createCoreData)(ve(t), p, g);
          (0, ft.default)("DraggableCore: handleDragStart: %j", m), (0, ft.default)("calling", t.props.onStart);
          var S = t.props.onStart(a, m);
          S === !1 || t.mounted === !1 || (t.props.enableUserSelectHack && (0, ge.addUserSelectStyles)(c), t.setState({
            dragging: !0,
            lastX: p,
            lastY: g
          }), (0, ge.addEvent)(c, qe.move, t.handleDrag), (0, ge.addEvent)(c, qe.stop, t.handleDragStop));
        }
      }
    }), Me(ve(t), "handleDrag", function(a) {
      var l = (0, $e.getControlPosition)(a, t.state.touchIdentifier, ve(t));
      if (l != null) {
        var c = l.x, d = l.y;
        if (Array.isArray(t.props.grid)) {
          var h = c - t.state.lastX, p = d - t.state.lastY, g = (0, $e.snapToGrid)(t.props.grid, h, p), m = Jr(g, 2);
          if (h = m[0], p = m[1], !h && !p)
            return;
          c = t.state.lastX + h, d = t.state.lastY + p;
        }
        var S = (0, $e.createCoreData)(ve(t), c, d);
        (0, ft.default)("DraggableCore: handleDrag: %j", S);
        var C = t.props.onDrag(a, S);
        if (C === !1 || t.mounted === !1) {
          try {
            t.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var E = document.createEvent("MouseEvents");
            E.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(E);
          }
          return;
        }
        t.setState({
          lastX: c,
          lastY: d
        });
      }
    }), Me(ve(t), "handleDragStop", function(a) {
      if (t.state.dragging) {
        var l = (0, $e.getControlPosition)(a, t.state.touchIdentifier, ve(t));
        if (l != null) {
          var c = l.x, d = l.y;
          if (Array.isArray(t.props.grid)) {
            var h = c - t.state.lastX || 0, p = d - t.state.lastY || 0, g = (0, $e.snapToGrid)(t.props.grid, h, p), m = Jr(g, 2);
            h = m[0], p = m[1], c = t.state.lastX + h, d = t.state.lastY + p;
          }
          var S = (0, $e.createCoreData)(ve(t), c, d), C = t.props.onStop(a, S);
          if (C === !1 || t.mounted === !1)
            return !1;
          var E = t.findDOMNode();
          E && t.props.enableUserSelectHack && (0, ge.removeUserSelectStyles)(E.ownerDocument), (0, ft.default)("DraggableCore: handleDragStop: %j", S), t.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), E && ((0, ft.default)("DraggableCore: Removing handlers"), (0, ge.removeEvent)(E.ownerDocument, qe.move, t.handleDrag), (0, ge.removeEvent)(E.ownerDocument, qe.stop, t.handleDragStop));
        }
      }
    }), Me(ve(t), "onMouseDown", function(a) {
      return qe = Ae.mouse, t.handleDragStart(a);
    }), Me(ve(t), "onMouseUp", function(a) {
      return qe = Ae.mouse, t.handleDragStop(a);
    }), Me(ve(t), "onTouchStart", function(a) {
      return qe = Ae.touch, t.handleDragStart(a);
    }), Me(ve(t), "onTouchEnd", function(a) {
      return qe = Ae.touch, t.handleDragStop(a);
    }), t;
  }
  return io(r, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var i = this.findDOMNode();
      i && (0, ge.addEvent)(i, Ae.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.findDOMNode();
      if (i) {
        var s = i.ownerDocument;
        (0, ge.removeEvent)(s, Ae.mouse.move, this.handleDrag), (0, ge.removeEvent)(s, Ae.touch.move, this.handleDrag), (0, ge.removeEvent)(s, Ae.mouse.stop, this.handleDragStop), (0, ge.removeEvent)(s, Ae.touch.stop, this.handleDragStop), (0, ge.removeEvent)(i, Ae.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, ge.removeUserSelectStyles)(s);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var i, s, o;
      return (i = this.props) !== null && i !== void 0 && i.nodeRef ? (s = this.props) === null || s === void 0 || (o = s.nodeRef) === null || o === void 0 ? void 0 : o.current : Ks.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ tr.cloneElement(tr.Children.only(this.props.children), {
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
}(tr.Component);
Ut.default = qt;
Me(qt, "displayName", "DraggableCore");
Me(qt, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _e.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _e.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _e.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(n, r) {
    if (n[r] && n[r].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _e.default.arrayOf(_e.default.number),
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
  handle: _e.default.string,
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
  cancel: _e.default.string,
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
  nodeRef: _e.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _e.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _e.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _e.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _e.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _e.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: rr.dontSetMe,
  style: rr.dontSetMe,
  transform: rr.dontSetMe
});
Me(qt, "defaultProps", {
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
  function n(y) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
      return typeof w;
    } : function(w) {
      return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
    }, n(y);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return c.default;
    }
  }), e.default = void 0;
  var r = m(R), t = p(vn), i = p(kt), s = p(ms), o = oe, a = He, l = je, c = p(Ut), d = p($t), h = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function p(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function g(y) {
    if (typeof WeakMap != "function")
      return null;
    var w = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (g = function(D) {
      return D ? x : w;
    })(y);
  }
  function m(y, w) {
    if (!w && y && y.__esModule)
      return y;
    if (y === null || n(y) !== "object" && typeof y != "function")
      return { default: y };
    var x = g(w);
    if (x && x.has(y))
      return x.get(y);
    var O = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var W in y)
      if (W !== "default" && Object.prototype.hasOwnProperty.call(y, W)) {
        var $ = D ? Object.getOwnPropertyDescriptor(y, W) : null;
        $ && ($.get || $.set) ? Object.defineProperty(O, W, $) : O[W] = y[W];
      }
    return O.default = y, x && x.set(y, O), O;
  }
  function S() {
    return S = Object.assign || function(y) {
      for (var w = 1; w < arguments.length; w++) {
        var x = arguments[w];
        for (var O in x)
          Object.prototype.hasOwnProperty.call(x, O) && (y[O] = x[O]);
      }
      return y;
    }, S.apply(this, arguments);
  }
  function C(y, w) {
    if (y == null)
      return {};
    var x = E(y, w), O, D;
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(y);
      for (D = 0; D < W.length; D++)
        O = W[D], !(w.indexOf(O) >= 0) && Object.prototype.propertyIsEnumerable.call(y, O) && (x[O] = y[O]);
    }
    return x;
  }
  function E(y, w) {
    if (y == null)
      return {};
    var x = {}, O = Object.keys(y), D, W;
    for (W = 0; W < O.length; W++)
      D = O[W], !(w.indexOf(D) >= 0) && (x[D] = y[D]);
    return x;
  }
  function b(y, w) {
    var x = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(y);
      w && (O = O.filter(function(D) {
        return Object.getOwnPropertyDescriptor(y, D).enumerable;
      })), x.push.apply(x, O);
    }
    return x;
  }
  function T(y) {
    for (var w = 1; w < arguments.length; w++) {
      var x = arguments[w] != null ? arguments[w] : {};
      w % 2 ? b(Object(x), !0).forEach(function(O) {
        ne(y, O, x[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(x)) : b(Object(x)).forEach(function(O) {
        Object.defineProperty(y, O, Object.getOwnPropertyDescriptor(x, O));
      });
    }
    return y;
  }
  function A(y, w) {
    return V(y) || H(y, w) || Z(y, w) || N();
  }
  function N() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Z(y, w) {
    if (y) {
      if (typeof y == "string")
        return q(y, w);
      var x = Object.prototype.toString.call(y).slice(8, -1);
      if (x === "Object" && y.constructor && (x = y.constructor.name), x === "Map" || x === "Set")
        return Array.from(y);
      if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))
        return q(y, w);
    }
  }
  function q(y, w) {
    (w == null || w > y.length) && (w = y.length);
    for (var x = 0, O = new Array(w); x < w; x++)
      O[x] = y[x];
    return O;
  }
  function H(y, w) {
    var x = y == null ? null : typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (x != null) {
      var O = [], D = !0, W = !1, $, I;
      try {
        for (x = x.call(y); !(D = ($ = x.next()).done) && (O.push($.value), !(w && O.length === w)); D = !0)
          ;
      } catch (Y) {
        W = !0, I = Y;
      } finally {
        try {
          !D && x.return != null && x.return();
        } finally {
          if (W)
            throw I;
        }
      }
      return O;
    }
  }
  function V(y) {
    if (Array.isArray(y))
      return y;
  }
  function F(y, w) {
    if (!(y instanceof w))
      throw new TypeError("Cannot call a class as a function");
  }
  function U(y, w) {
    for (var x = 0; x < w.length; x++) {
      var O = w[x];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(y, O.key, O);
    }
  }
  function M(y, w, x) {
    return w && U(y.prototype, w), x && U(y, x), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function L(y, w) {
    if (typeof w != "function" && w !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(w && w.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), w && X(y, w);
  }
  function X(y, w) {
    return X = Object.setPrototypeOf || function(O, D) {
      return O.__proto__ = D, O;
    }, X(y, w);
  }
  function K(y) {
    var w = J();
    return function() {
      var O = ee(y), D;
      if (w) {
        var W = ee(this).constructor;
        D = Reflect.construct(O, arguments, W);
      } else
        D = O.apply(this, arguments);
      return G(this, D);
    };
  }
  function G(y, w) {
    if (w && (n(w) === "object" || typeof w == "function"))
      return w;
    if (w !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return Q(y);
  }
  function Q(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function J() {
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
  function ee(y) {
    return ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
      return x.__proto__ || Object.getPrototypeOf(x);
    }, ee(y);
  }
  function ne(y, w, x) {
    return w in y ? Object.defineProperty(y, w, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : y[w] = x, y;
  }
  var de = /* @__PURE__ */ function(y) {
    L(x, y);
    var w = K(x);
    function x(O) {
      var D;
      return F(this, x), D = w.call(this, O), ne(Q(D), "onDragStart", function(W, $) {
        (0, d.default)("Draggable: onDragStart: %j", $);
        var I = D.props.onStart(W, (0, a.createDraggableData)(Q(D), $));
        if (I === !1)
          return !1;
        D.setState({
          dragging: !0,
          dragged: !0
        });
      }), ne(Q(D), "onDrag", function(W, $) {
        if (!D.state.dragging)
          return !1;
        (0, d.default)("Draggable: onDrag: %j", $);
        var I = (0, a.createDraggableData)(Q(D), $), Y = {
          x: I.x,
          y: I.y
        };
        if (D.props.bounds) {
          var ye = Y.x, pe = Y.y;
          Y.x += D.state.slackX, Y.y += D.state.slackY;
          var me = (0, a.getBoundPosition)(Q(D), Y.x, Y.y), Se = A(me, 2), ze = Se[0], Fe = Se[1];
          Y.x = ze, Y.y = Fe, Y.slackX = D.state.slackX + (ye - Y.x), Y.slackY = D.state.slackY + (pe - Y.y), I.x = Y.x, I.y = Y.y, I.deltaX = Y.x - D.state.x, I.deltaY = Y.y - D.state.y;
        }
        var be = D.props.onDrag(W, I);
        if (be === !1)
          return !1;
        D.setState(Y);
      }), ne(Q(D), "onDragStop", function(W, $) {
        if (!D.state.dragging)
          return !1;
        var I = D.props.onStop(W, (0, a.createDraggableData)(Q(D), $));
        if (I === !1)
          return !1;
        (0, d.default)("Draggable: onDragStop: %j", $);
        var Y = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, ye = !!D.props.position;
        if (ye) {
          var pe = D.props.position, me = pe.x, Se = pe.y;
          Y.x = me, Y.y = Se;
        }
        D.setState(Y);
      }), D.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: O.position ? O.position.x : O.defaultPosition.x,
        y: O.position ? O.position.y : O.defaultPosition.y,
        prevPropsPosition: T({}, O.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, O.position && !(O.onDrag || O.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), D;
    }
    return M(x, [{
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
        var D, W, $;
        return (D = (W = this.props) === null || W === void 0 || ($ = W.nodeRef) === null || $ === void 0 ? void 0 : $.current) !== null && D !== void 0 ? D : i.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var D, W = this.props;
        W.axis, W.bounds;
        var $ = W.children, I = W.defaultPosition, Y = W.defaultClassName, ye = W.defaultClassNameDragging, pe = W.defaultClassNameDragged, me = W.position, Se = W.positionOffset;
        W.scale;
        var ze = C(W, h), Fe = {}, be = null, ke = !!me, u = !ke || this.state.dragging, f = me || I, v = {
          // Set left if horizontal drag is enabled
          x: (0, a.canDragX)(this) && u ? this.state.x : f.x,
          // Set top if vertical drag is enabled
          y: (0, a.canDragY)(this) && u ? this.state.y : f.y
        };
        this.state.isElementSVG ? be = (0, o.createSVGTransform)(v, Se) : Fe = (0, o.createCSSTransform)(v, Se);
        var k = (0, s.default)($.props.className || "", Y, (D = {}, ne(D, ye, this.state.dragging), ne(D, pe, this.state.dragged), D));
        return /* @__PURE__ */ r.createElement(c.default, S({}, ze, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only($), {
          className: k,
          style: T(T({}, $.props.style), Fe),
          transform: be
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(D, W) {
          var $ = D.position, I = W.prevPropsPosition;
          return $ && (!I || $.x !== I.x || $.y !== I.y) ? ((0, d.default)("Draggable: getDerivedStateFromProps %j", {
            position: $,
            prevPropsPosition: I
          }), {
            x: $.x,
            y: $.y,
            prevPropsPosition: T({}, $)
          }) : null;
        }
      )
    }]), x;
  }(r.Component);
  e.default = de, ne(de, "displayName", "Draggable"), ne(de, "propTypes", T(T({}, c.default.propTypes), {}, {
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
  })), ne(de, "defaultProps", T(T({}, c.default.defaultProps), {}, {
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
})(Fn);
var Xn = Fn, Qn = Xn.default, lo = Xn.DraggableCore;
It.exports = Qn;
It.exports.default = Qn;
It.exports.DraggableCore = lo;
var co = It.exports;
const fo = /* @__PURE__ */ gn(co);
var po = globalThis && globalThis.__extends || function() {
  var e = function(n, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }, e(n, r);
  };
  return function(n, r) {
    e(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), jt = globalThis && globalThis.__assign || function() {
  return jt = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, jt.apply(this, arguments);
}, ho = {
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
}, go = (
  /** @class */
  function(e) {
    po(n, e);
    function n() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.onMouseDown = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r.onTouchStart = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r;
    }
    return n.prototype.render = function() {
      return R.createElement("div", { className: this.props.className || "", style: jt(jt({ position: "absolute", userSelect: "none" }, ho[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, n;
  }(R.PureComponent)
), zr = { exports: {} };
function vo(e, n) {
  var r = n && n.cache ? n.cache : xo, t = n && n.serializer ? n.serializer : So, i = n && n.strategy ? n.strategy : mo;
  return i(e, {
    cache: r,
    serializer: t
  });
}
function yo(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Gn(e, n, r, t) {
  var i = yo(t) ? t : r(t), s = n.get(i);
  return typeof s > "u" && (s = e.call(this, t), n.set(i, s)), s;
}
function Kn(e, n, r) {
  var t = Array.prototype.slice.call(arguments, 3), i = r(t), s = n.get(i);
  return typeof s > "u" && (s = e.apply(this, t), n.set(i, s)), s;
}
function Pr(e, n, r, t, i) {
  return r.bind(
    n,
    e,
    t,
    i
  );
}
function mo(e, n) {
  var r = e.length === 1 ? Gn : Kn;
  return Pr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function bo(e, n) {
  var r = Kn;
  return Pr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function wo(e, n) {
  var r = Gn;
  return Pr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function So() {
  return JSON.stringify(arguments);
}
function Yt() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Yt.prototype.has = function(e) {
  return e in this.cache;
};
Yt.prototype.get = function(e) {
  return this.cache[e];
};
Yt.prototype.set = function(e, n) {
  this.cache[e] = n;
};
var xo = {
  create: function() {
    return new Yt();
  }
};
zr.exports = vo;
zr.exports.strategies = {
  variadic: bo,
  monadic: wo
};
var _o = zr.exports;
const Je = /* @__PURE__ */ gn(_o);
var Oo = globalThis && globalThis.__extends || function() {
  var e = function(n, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }, e(n, r);
  };
  return function(n, r) {
    e(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Be = globalThis && globalThis.__assign || function() {
  return Be = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Be.apply(this, arguments);
}, Do = {
  width: "auto",
  height: "auto"
}, Et = Je(function(e, n, r) {
  return Math.max(Math.min(e, r), n);
}), tn = Je(function(e, n) {
  return Math.round(e / n) * n;
}), tt = Je(function(e, n) {
  return new RegExp(e, "i").test(n);
}), Rt = function(e) {
  return !!(e.touches && e.touches.length);
}, Eo = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, rn = Je(function(e, n, r) {
  r === void 0 && (r = 0);
  var t = n.reduce(function(s, o, a) {
    return Math.abs(o - e) < Math.abs(n[s] - e) ? a : s;
  }, 0), i = Math.abs(n[t] - e);
  return r === 0 || i < r ? n[t] : e;
}), fe = Je(function(e, n) {
  return e.substr(e.length - n.length, n.length) === n;
}), nr = Je(function(e) {
  return e = e.toString(), e === "auto" || fe(e, "px") || fe(e, "%") || fe(e, "vh") || fe(e, "vw") || fe(e, "vmax") || fe(e, "vmin") ? e : e + "px";
}), zt = function(e, n, r, t) {
  if (e && typeof e == "string") {
    if (fe(e, "px"))
      return Number(e.replace("px", ""));
    if (fe(e, "%")) {
      var i = Number(e.replace("%", "")) / 100;
      return n * i;
    }
    if (fe(e, "vw")) {
      var i = Number(e.replace("vw", "")) / 100;
      return r * i;
    }
    if (fe(e, "vh")) {
      var i = Number(e.replace("vh", "")) / 100;
      return t * i;
    }
  }
  return e;
}, Ro = Je(function(e, n, r, t, i, s, o) {
  return t = zt(t, e.width, n, r), i = zt(i, e.height, n, r), s = zt(s, e.width, n, r), o = zt(o, e.height, n, r), {
    maxWidth: typeof t > "u" ? void 0 : Number(t),
    maxHeight: typeof i > "u" ? void 0 : Number(i),
    minWidth: typeof s > "u" ? void 0 : Number(s),
    minHeight: typeof o > "u" ? void 0 : Number(o)
  };
}), zo = [
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
], nn = "__resizable_base__", Po = (
  /** @class */
  function(e) {
    Oo(n, e);
    function n(r) {
      var t = e.call(this, r) || this;
      return t.ratio = 1, t.resizable = null, t.parentLeft = 0, t.parentTop = 0, t.resizableLeft = 0, t.resizableRight = 0, t.resizableTop = 0, t.resizableBottom = 0, t.targetLeft = 0, t.targetTop = 0, t.appendBase = function() {
        if (!t.resizable || !t.window)
          return null;
        var i = t.parentNode;
        if (!i)
          return null;
        var s = t.window.document.createElement("div");
        return s.style.width = "100%", s.style.height = "100%", s.style.position = "absolute", s.style.transform = "scale(0, 0)", s.style.left = "0", s.style.flex = "0 0 100%", s.classList ? s.classList.add(nn) : s.className += nn, i.appendChild(s), s;
      }, t.removeBase = function(i) {
        var s = t.parentNode;
        s && s.removeChild(i);
      }, t.ref = function(i) {
        i && (t.resizable = i);
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
    return Object.defineProperty(n.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || Do;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "size", {
      get: function() {
        var r = 0, t = 0;
        if (this.resizable && this.window) {
          var i = this.resizable.offsetWidth, s = this.resizable.offsetHeight, o = this.resizable.style.position;
          o !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : i, t = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : s, this.resizable.style.position = o;
        }
        return { width: r, height: t };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "sizeStyle", {
      get: function() {
        var r = this, t = this.props.size, i = function(a) {
          if (typeof r.state[a] > "u" || r.state[a] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[a] && fe(r.propsSize[a].toString(), "%")) {
            if (fe(r.state[a].toString(), "%"))
              return r.state[a].toString();
            var l = r.getParentSize(), c = Number(r.state[a].toString().replace("px", "")), d = c / l[a] * 100;
            return d + "%";
          }
          return nr(r.state[a]);
        }, s = t && typeof t.width < "u" && !this.state.isResizing ? nr(t.width) : i("width"), o = t && typeof t.height < "u" && !this.state.isResizing ? nr(t.height) : i("height");
        return { width: s, height: o };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var r = this.appendBase();
      if (!r)
        return { width: 0, height: 0 };
      var t = !1, i = this.parentNode.style.flexWrap;
      i !== "wrap" && (t = !0, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var s = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return t && (this.parentNode.style.flexWrap = i), this.removeBase(r), s;
    }, n.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: !0,
        passive: !1
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, n.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
    }, n.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var r = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0
        });
      }
    }, n.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, n.prototype.createSizeForCssProperty = function(r, t) {
      var i = this.propsSize && this.propsSize[t];
      return this.state[t] === "auto" && this.state.original[t] === r && (typeof i > "u" || i === "auto") ? "auto" : r;
    }, n.prototype.calculateNewMaxFromBoundary = function(r, t) {
      var i = this.props.boundsByDirection, s = this.state.direction, o = i && tt("left", s), a = i && tt("top", s), l, c;
      if (this.props.bounds === "parent") {
        var d = this.parentNode;
        d && (l = o ? this.resizableRight - this.parentLeft : d.offsetWidth + (this.parentLeft - this.resizableLeft), c = a ? this.resizableBottom - this.parentTop : d.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (l = o ? this.resizableRight : this.window.innerWidth - this.resizableLeft, c = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (l = o ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), c = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return l && Number.isFinite(l) && (r = r && r < l ? r : l), c && Number.isFinite(c) && (t = t && t < c ? t : c), { maxWidth: r, maxHeight: t };
    }, n.prototype.calculateNewSizeFromDirection = function(r, t) {
      var i = this.props.scale || 1, s = this.props.resizeRatio || 1, o = this.state, a = o.direction, l = o.original, c = this.props, d = c.lockAspectRatio, h = c.lockAspectRatioExtraHeight, p = c.lockAspectRatioExtraWidth, g = l.width, m = l.height, S = h || 0, C = p || 0;
      return tt("right", a) && (g = l.width + (r - l.x) * s / i, d && (m = (g - C) / this.ratio + S)), tt("left", a) && (g = l.width - (r - l.x) * s / i, d && (m = (g - C) / this.ratio + S)), tt("bottom", a) && (m = l.height + (t - l.y) * s / i, d && (g = (m - S) * this.ratio + C)), tt("top", a) && (m = l.height - (t - l.y) * s / i, d && (g = (m - S) * this.ratio + C)), { newWidth: g, newHeight: m };
    }, n.prototype.calculateNewSizeFromAspectRatio = function(r, t, i, s) {
      var o = this.props, a = o.lockAspectRatio, l = o.lockAspectRatioExtraHeight, c = o.lockAspectRatioExtraWidth, d = typeof s.width > "u" ? 10 : s.width, h = typeof i.width > "u" || i.width < 0 ? r : i.width, p = typeof s.height > "u" ? 10 : s.height, g = typeof i.height > "u" || i.height < 0 ? t : i.height, m = l || 0, S = c || 0;
      if (a) {
        var C = (p - m) * this.ratio + S, E = (g - m) * this.ratio + S, b = (d - S) / this.ratio + m, T = (h - S) / this.ratio + m, A = Math.max(d, C), N = Math.min(h, E), Z = Math.max(p, b), q = Math.min(g, T);
        r = Et(r, A, N), t = Et(t, Z, q);
      } else
        r = Et(r, d, h), t = Et(t, p, g);
      return { newWidth: r, newHeight: t };
    }, n.prototype.setBoundingClientRect = function() {
      if (this.props.bounds === "parent") {
        var r = this.parentNode;
        if (r) {
          var t = r.getBoundingClientRect();
          this.parentLeft = t.left, this.parentTop = t.top;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var i = this.props.bounds.getBoundingClientRect();
        this.targetLeft = i.left, this.targetTop = i.top;
      }
      if (this.resizable) {
        var s = this.resizable.getBoundingClientRect(), o = s.left, a = s.top, l = s.right, c = s.bottom;
        this.resizableLeft = o, this.resizableRight = l, this.resizableTop = a, this.resizableBottom = c;
      }
    }, n.prototype.onResizeStart = function(r, t) {
      if (!(!this.resizable || !this.window)) {
        var i = 0, s = 0;
        if (r.nativeEvent && Eo(r.nativeEvent) ? (i = r.nativeEvent.clientX, s = r.nativeEvent.clientY) : r.nativeEvent && Rt(r.nativeEvent) && (i = r.nativeEvent.touches[0].clientX, s = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var o = this.props.onResizeStart(r, t, this.resizable);
          if (o === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var a, l = this.window.getComputedStyle(this.resizable);
        if (l.flexBasis !== "auto") {
          var c = this.parentNode;
          if (c) {
            var d = this.window.getComputedStyle(c).flexDirection;
            this.flexDir = d.startsWith("row") ? "row" : "column", a = l.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var h = {
          original: {
            x: i,
            y: s,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: Be(Be({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: t,
          flexBasis: a
        };
        this.setState(h);
      }
    }, n.prototype.onMouseMove = function(r) {
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && Rt(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var t = this.props, i = t.maxWidth, s = t.maxHeight, o = t.minWidth, a = t.minHeight, l = Rt(r) ? r.touches[0].clientX : r.clientX, c = Rt(r) ? r.touches[0].clientY : r.clientY, d = this.state, h = d.direction, p = d.original, g = d.width, m = d.height, S = this.getParentSize(), C = Ro(S, this.window.innerWidth, this.window.innerHeight, i, s, o, a);
        i = C.maxWidth, s = C.maxHeight, o = C.minWidth, a = C.minHeight;
        var E = this.calculateNewSizeFromDirection(l, c), b = E.newHeight, T = E.newWidth, A = this.calculateNewMaxFromBoundary(i, s);
        this.props.snap && this.props.snap.x && (T = rn(T, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (b = rn(b, this.props.snap.y, this.props.snapGap));
        var N = this.calculateNewSizeFromAspectRatio(T, b, { width: A.maxWidth, height: A.maxHeight }, { width: o, height: a });
        if (T = N.newWidth, b = N.newHeight, this.props.grid) {
          var Z = tn(T, this.props.grid[0]), q = tn(b, this.props.grid[1]), H = this.props.snapGap || 0;
          T = H === 0 || Math.abs(Z - T) <= H ? Z : T, b = H === 0 || Math.abs(q - b) <= H ? q : b;
        }
        var V = {
          width: T - p.width,
          height: b - p.height
        };
        if (g && typeof g == "string") {
          if (fe(g, "%")) {
            var F = T / S.width * 100;
            T = F + "%";
          } else if (fe(g, "vw")) {
            var U = T / this.window.innerWidth * 100;
            T = U + "vw";
          } else if (fe(g, "vh")) {
            var M = T / this.window.innerHeight * 100;
            T = M + "vh";
          }
        }
        if (m && typeof m == "string") {
          if (fe(m, "%")) {
            var F = b / S.height * 100;
            b = F + "%";
          } else if (fe(m, "vw")) {
            var U = b / this.window.innerWidth * 100;
            b = U + "vw";
          } else if (fe(m, "vh")) {
            var M = b / this.window.innerHeight * 100;
            b = M + "vh";
          }
        }
        var L = {
          width: this.createSizeForCssProperty(T, "width"),
          height: this.createSizeForCssProperty(b, "height")
        };
        this.flexDir === "row" ? L.flexBasis = L.width : this.flexDir === "column" && (L.flexBasis = L.height), this.setState(L), this.props.onResize && this.props.onResize(r, h, this.resizable, V);
      }
    }, n.prototype.onMouseUp = function(r) {
      var t = this.state, i = t.isResizing, s = t.direction, o = t.original;
      if (!(!i || !this.resizable)) {
        var a = {
          width: this.size.width - o.width,
          height: this.size.height - o.height
        };
        this.props.onResizeStop && this.props.onResizeStop(r, s, this.resizable, a), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: Be(Be({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, n.prototype.updateSize = function(r) {
      this.setState({ width: r.width, height: r.height });
    }, n.prototype.renderResizer = function() {
      var r = this, t = this.props, i = t.enable, s = t.handleStyles, o = t.handleClasses, a = t.handleWrapperStyle, l = t.handleWrapperClass, c = t.handleComponent;
      if (!i)
        return null;
      var d = Object.keys(i).map(function(h) {
        return i[h] !== !1 ? R.createElement(go, { key: h, direction: h, onResizeStart: r.onResizeStart, replaceStyles: s && s[h], className: o && o[h] }, c && c[h] ? c[h] : null) : null;
      });
      return R.createElement("div", { className: l, style: a }, d);
    }, n.prototype.render = function() {
      var r = this, t = Object.keys(this.props).reduce(function(o, a) {
        return zo.indexOf(a) !== -1 || (o[a] = r.props[a]), o;
      }, {}), i = Be(Be(Be({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
      var s = this.props.as || "div";
      return R.createElement(
        s,
        Be({ ref: this.ref, style: i, className: this.props.className }, t),
        this.state.isResizing && R.createElement("div", { style: this.state.backgroundStyle }),
        this.props.children,
        this.renderResizer()
      );
    }, n.defaultProps = {
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
    }, n;
  }(R.PureComponent)
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
var dr = function(e, n) {
  return dr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var i in t)
      t.hasOwnProperty(i) && (r[i] = t[i]);
  }, dr(e, n);
};
function To(e, n) {
  dr(e, n);
  function r() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
var ae = function() {
  return ae = Object.assign || function(n) {
    for (var r, t = 1, i = arguments.length; t < i; t++) {
      r = arguments[t];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
    }
    return n;
  }, ae.apply(this, arguments);
};
function Mo(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
      n.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
  return r;
}
var Co = fo, ko = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, Ao = function(e) {
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
}, Oa = (
  /** @class */
  function(e) {
    To(n, e);
    function n(r) {
      var t = e.call(this, r) || this;
      return t.resizingPosition = { x: 0, y: 0 }, t.offsetFromParent = { left: 0, top: 0 }, t.resizableElement = { current: null }, t.originalPosition = { x: 0, y: 0 }, t.refDraggable = function(i) {
        i && (t.draggable = i);
      }, t.refResizable = function(i) {
        i && (t.resizable = i, t.resizableElement.current = i.resizable);
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
    return n.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var r = this.offsetFromParent, t = r.left, i = r.top, s = this.getDraggablePosition(), o = s.x, a = s.y;
      this.draggable.setState({
        x: o - t,
        y: a - i
      }), this.forceUpdate();
    }, n.prototype.getDraggablePosition = function() {
      var r = this.draggable.state, t = r.x, i = r.y;
      return { x: t, y: i };
    }, n.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, n.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, n.prototype.getMaxSizesFromProps = function() {
      var r = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, t = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return { maxWidth: r, maxHeight: t };
    }, n.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, n.prototype.getOffsetHeight = function(r) {
      var t = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / t;
        case "body":
          return document.body.offsetHeight / t;
        default:
          return r.offsetHeight;
      }
    }, n.prototype.getOffsetWidth = function(r) {
      var t = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / t;
        case "body":
          return document.body.offsetWidth / t;
        default:
          return r.offsetWidth;
      }
    }, n.prototype.onDragStart = function(r, t) {
      this.props.onDragStart && this.props.onDragStart(r, t);
      var i = this.getDraggablePosition();
      if (this.originalPosition = i, !!this.props.bounds) {
        var s = this.getParent(), o = this.props.scale, a;
        if (this.props.bounds === "parent")
          a = s;
        else if (this.props.bounds === "body") {
          var l = s.getBoundingClientRect(), c = l.left, d = l.top, h = document.body.getBoundingClientRect(), p = -(c - s.offsetLeft * o - h.left) / o, g = -(d - s.offsetTop * o - h.top) / o, m = (document.body.offsetWidth - this.resizable.size.width * o) / o + p, S = (document.body.offsetHeight - this.resizable.size.height * o) / o + g;
          return this.setState({ bounds: { top: g, right: m, bottom: S, left: p } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var C = s.getBoundingClientRect(), E = C.left, b = C.top, T = -(E - s.offsetLeft * o) / o, A = -(b - s.offsetTop * o) / o, m = (window.innerWidth - this.resizable.size.width * o) / o + T, S = (window.innerHeight - this.resizable.size.height * o) / o + A;
          return this.setState({ bounds: { top: A, right: m, bottom: S, left: T } });
        } else
          typeof this.props.bounds == "string" ? a = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (a = this.props.bounds);
        if (!(!(a instanceof HTMLElement) || !(s instanceof HTMLElement))) {
          var N = a.getBoundingClientRect(), Z = N.left, q = N.top, H = s.getBoundingClientRect(), V = H.left, F = H.top, U = (Z - V) / o, M = q - F;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var L = this.offsetFromParent;
            this.setState({
              bounds: {
                top: M - L.top,
                right: U + (a.offsetWidth - this.resizable.size.width) - L.left / o,
                bottom: M + (a.offsetHeight - this.resizable.size.height) - L.top,
                left: U - L.left / o
              }
            });
          }
        }
      }
    }, n.prototype.onDrag = function(r, t) {
      if (this.props.onDrag) {
        var i = this.offsetFromParent, s = i.left, o = i.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, ae(ae({}, t), { x: t.x - s, y: t.y - o }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, ae(ae({}, t), { x: t.x + s, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, ae(ae({}, t), { x: this.originalPosition.x + s, y: t.y + o, deltaX: 0 }));
      }
    }, n.prototype.onDragStop = function(r, t) {
      if (this.props.onDragStop) {
        var i = this.offsetFromParent, s = i.left, o = i.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, ae(ae({}, t), { x: t.x + s, y: t.y + o }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, ae(ae({}, t), { x: t.x + s, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, ae(ae({}, t), { x: this.originalPosition.x + s, y: t.y + o, deltaX: 0 }));
      }
    }, n.prototype.onResizeStart = function(r, t, i) {
      r.stopPropagation(), this.setState({
        resizing: !0
      });
      var s = this.props.scale, o = this.offsetFromParent, a = this.getDraggablePosition();
      if (this.resizingPosition = { x: a.x + o.left, y: a.y + o.top }, this.originalPosition = a, this.props.bounds) {
        var l = this.getParent(), c = void 0;
        this.props.bounds === "parent" ? c = l : this.props.bounds === "body" ? c = document.body : this.props.bounds === "window" ? c = window : typeof this.props.bounds == "string" ? c = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (c = this.props.bounds);
        var d = this.getSelfElement();
        if (d instanceof Element && (c instanceof HTMLElement || c === window) && l instanceof HTMLElement) {
          var h = this.getMaxSizesFromProps(), p = h.maxWidth, g = h.maxHeight, m = this.getParentSize();
          if (p && typeof p == "string")
            if (p.endsWith("%")) {
              var S = Number(p.replace("%", "")) / 100;
              p = m.width * S;
            } else
              p.endsWith("px") && (p = Number(p.replace("px", "")));
          if (g && typeof g == "string")
            if (g.endsWith("%")) {
              var S = Number(g.replace("%", "")) / 100;
              g = m.width * S;
            } else
              g.endsWith("px") && (g = Number(g.replace("px", "")));
          var C = d.getBoundingClientRect(), E = C.left, b = C.top, T = this.props.bounds === "window" ? { left: 0, top: 0 } : c.getBoundingClientRect(), A = T.left, N = T.top, Z = this.getOffsetWidth(c), q = this.getOffsetHeight(c), H = t.toLowerCase().endsWith("left"), V = t.toLowerCase().endsWith("right"), F = t.startsWith("top"), U = t.startsWith("bottom");
          if ((H || F) && this.resizable) {
            var M = (E - A) / s + this.resizable.size.width;
            this.setState({ maxWidth: M > Number(p) ? p : M });
          }
          if (V || this.props.lockAspectRatio && !H && !F) {
            var M = Z + (A - E) / s;
            this.setState({ maxWidth: M > Number(p) ? p : M });
          }
          if ((F || H) && this.resizable) {
            var M = (b - N) / s + this.resizable.size.height;
            this.setState({
              maxHeight: M > Number(g) ? g : M
            });
          }
          if (U || this.props.lockAspectRatio && !F && !H) {
            var M = q + (N - b) / s;
            this.setState({
              maxHeight: M > Number(g) ? g : M
            });
          }
        }
      } else
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      this.props.onResizeStart && this.props.onResizeStart(r, t, i);
    }, n.prototype.onResize = function(r, t, i, s) {
      var o = { x: this.originalPosition.x, y: this.originalPosition.y }, a = -s.width, l = -s.height, c = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      c.indexOf(t) !== -1 && (t === "bottomLeft" ? o.x += a : (t === "topRight" || (o.x += a), o.y += l)), (o.x !== this.draggable.state.x || o.y !== this.draggable.state.y) && this.draggable.setState(o), this.updateOffsetFromParent();
      var d = this.offsetFromParent, h = this.getDraggablePosition().x + d.left, p = this.getDraggablePosition().y + d.top;
      this.resizingPosition = { x: h, y: p }, this.props.onResize && this.props.onResize(r, t, i, s, {
        x: h,
        y: p
      });
    }, n.prototype.onResizeStop = function(r, t, i, s) {
      this.setState({
        resizing: !1
      });
      var o = this.getMaxSizesFromProps(), a = o.maxWidth, l = o.maxHeight;
      this.setState({ maxWidth: a, maxHeight: l }), this.props.onResizeStop && this.props.onResizeStop(r, t, i, s, this.resizingPosition);
    }, n.prototype.updateSize = function(r) {
      this.resizable && this.resizable.updateSize({ width: r.width, height: r.height });
    }, n.prototype.updatePosition = function(r) {
      this.draggable.setState(r);
    }, n.prototype.updateOffsetFromParent = function() {
      var r = this.props.scale, t = this.getParent(), i = this.getSelfElement();
      if (!t || i === null)
        return {
          top: 0,
          left: 0
        };
      var s = t.getBoundingClientRect(), o = s.left, a = s.top, l = i.getBoundingClientRect(), c = this.getDraggablePosition(), d = t.scrollLeft, h = t.scrollTop;
      this.offsetFromParent = {
        left: l.left - o + d - c.x * r,
        top: l.top - a + h - c.y * r
      };
    }, n.prototype.render = function() {
      var r = this.props, t = r.disableDragging, i = r.style, s = r.dragHandleClassName, o = r.position, a = r.onMouseDown, l = r.onMouseUp, c = r.dragAxis, d = r.dragGrid, h = r.bounds, p = r.enableUserSelectHack, g = r.cancel, m = r.children;
      r.onResizeStart, r.onResize, r.onResizeStop, r.onDragStart, r.onDrag, r.onDragStop;
      var S = r.resizeHandleStyles, C = r.resizeHandleClasses, E = r.resizeHandleComponent, b = r.enableResizing, T = r.resizeGrid, A = r.resizeHandleWrapperClass, N = r.resizeHandleWrapperStyle, Z = r.scale, q = r.allowAnyClick, H = Mo(r, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), V = this.props.default ? ae({}, this.props.default) : void 0;
      delete H.default;
      var F = t || s ? { cursor: "auto" } : { cursor: "move" }, U = ae(ae(ae({}, ko), F), i), M = this.offsetFromParent, L = M.left, X = M.top, K;
      o && (K = {
        x: o.x - L,
        y: o.y - X
      });
      var G = this.state.resizing ? void 0 : K, Q = this.state.resizing ? "both" : c;
      return R.createElement(
        Co,
        { ref: this.refDraggable, handle: s ? ".".concat(s) : void 0, defaultPosition: V, onMouseDown: a, onMouseUp: l, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: Q, disabled: t, grid: d, bounds: h ? this.state.bounds : void 0, position: G, enableUserSelectHack: p, cancel: g, scale: Z, allowAnyClick: q, nodeRef: this.resizableElement },
        R.createElement(Po, ae({}, H, { ref: this.refResizable, defaultSize: V, size: this.props.size, enable: typeof b == "boolean" ? Ao(b) : b, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: U, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: T, handleWrapperClass: A, handleWrapperStyle: N, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: S, handleClasses: C, handleComponent: E, scale: this.props.scale }), m)
      );
    }, n.defaultProps = {
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
    }, n;
  }(R.PureComponent)
), Tr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = Ln;
  e.definition = {
    prefix: n.prefix,
    iconName: n.iconName,
    icon: [
      n.width,
      n.height,
      n.aliases,
      n.unicode,
      n.svgPathData
    ]
  }, e.faTimes = e.definition, e.prefix = n.prefix, e.iconName = n.iconName, e.width = n.width, e.height = n.height, e.ligatures = n.aliases, e.unicode = n.unicode, e.svgPathData = n.svgPathData, e.aliases = n.aliases;
})(Tr);
const No = [{
  pattern: /^[\p{So}\p{Pd}\p{Po}]\s*/gu,
  replace: ""
}, {
  pattern: /^\p{C}/gu,
  replace: ""
}, {
  pattern: new RegExp("(?<= |^|>|[^-!\\p{L}])-(?= |$|[^-])", "giu"),
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
  pattern: /^\p{Ll}/u,
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
}], sn = (e, n = !1) => {
  let r = e.selectionStart || 0, t = e.selectionEnd || 0;
  const i = e.selectionDirection, s = No.filter((o) => n ? !0 : !o.onBlur || !1).reduce((o, a) => {
    const l = o.replace(a.pattern, a.replace), c = l.length - o.length;
    return r += c, t += c, l;
  }, e.value);
  return queueMicrotask(() => {
    document.activeElement === e && e.setSelectionRange(r, t, i || "none");
  }), s;
}, Lo = R.forwardRef(({
  placeholder: e = "Введите",
  ...n
}, r) => /* @__PURE__ */ B("input", { ref: r, placeholder: e, css: {
  appearance: "none",
  outline: "2px solid transparent",
  outlineOffset: "2px"
}, ...n })), Fo = ({
  label: e,
  helperText: n,
  className: r,
  inputWrapRef: t,
  onBlur: i,
  onFocus: s,
  error: o,
  afterItems: a,
  useTypograf: l = !0,
  disabled: c,
  isLoading: d,
  inputComponent: h = Lo,
  ...p
}, g) => {
  const [m, S] = re.useState(!1), {
    getRootProps: C,
    getInputProps: E
  } = di({
    error: !!o,
    onBlur: i,
    onFocus: s,
    disabled: c,
    inputRef: g,
    ...p
  }), {
    onBlur: b,
    onFocus: T,
    ...A
  } = E();
  A.value = A.value || "";
  const N = R.useCallback((H) => {
    c || (T == null || T(H), S(!0));
  }, [c, S, T]), Z = R.useCallback((H) => {
    var V;
    if (l) {
      const F = sn(H.target, !0);
      F !== H.target.value && (H.target.value = F, (V = A.onChange) == null || V.call(A, F));
    }
    S(!1), b == null || b(H);
  }, [S, b]);
  let q = /* @__PURE__ */ Ee("div", { className: r, ref: t, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, o ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, m && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : m ? {
    borderColor: "transparent",
    outlineWidth: "2px",
    outlineColor: "#7275bf"
  } : !c && {
    ":hover": {
      "--tw-border-opacity": "1",
      borderColor: "rgb(114 117 191 / var(--tw-border-opacity))"
    }
  }], children: [
    d && /* @__PURE__ */ Ee("div", { css: {
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
      /* @__PURE__ */ B(Ge, { icon: dn.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ B(h, { css: [{
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
    }, c && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }], onFocus: N, onBlur: Z, onInput: (H) => {
      l && (H.currentTarget.value = sn(H.currentTarget));
    }, ...p, ...A, type: d ? "hidden" : p.type || "text" }),
    a && !c && /* @__PURE__ */ B("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: a })
  ] });
  return e && (q = /* @__PURE__ */ B(Ht, { label: e, error: o, helperText: n, ...C(), children: q })), q;
}, lt = R.forwardRef(Fo), Wo = ({
  getTagProps: e,
  optionRender: n,
  getOptionLabel: r,
  items: t,
  isLoading: i,
  valueCount: s
}) => i ? /* @__PURE__ */ B("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: Array.from({
  length: s
}).map((o, a) => /* @__PURE__ */ B("div", { css: [{
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
}, mr`
              width: ${Math.round(Math.random() * 5) * 30 + 60}px;
              height: 30px;
            `] }, a)) }) : t && (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ B("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: t.map((o, a) => {
  const {
    onDelete: l,
    key: c,
    ...d
  } = e({
    index: a
  });
  return /* @__PURE__ */ Ee("div", { ...d, css: {
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
    /* @__PURE__ */ B("span", { children: n ? n(o) : r(o) }),
    /* @__PURE__ */ B("button", { onClick: l, children: /* @__PURE__ */ B(Ge, { icon: Tr.faTimes, css: {
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    } }) })
  ] }, c);
}) }), Jn = "id", Bo = ({
  text: e = "Загрузка"
}) => {
  const [n, r] = R.useState("");
  return R.useEffect(() => {
    const t = setInterval(() => {
      r((i) => i.length < 3 ? i + "." : "");
    }, 300);
    return () => clearInterval(t);
  }, []), /* @__PURE__ */ Ee("span", { css: {
    "@keyframes pulse": {
      "50%": {
        opacity: ".5"
      }
    },
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  }, children: [
    e,
    n
  ] });
}, Vo = ({
  className: e,
  isLoading: n = !1,
  inputLoading: r = !1,
  valueLoading: t = !1,
  idField: i = Jn,
  displayField: s,
  options: o,
  multiple: a,
  open: l = !1,
  label: c,
  helperText: d,
  error: h,
  onOpen: p,
  onClose: g,
  optionRender: m,
  onChange: S,
  onInputChange: C,
  onSelect: E,
  disabled: b,
  placeholder: T = "Выберите",
  value: A,
  allowClear: N = !0,
  autoComplete: Z = !0,
  autoSelect: q = !1,
  afterItems: H,
  popupAdditionalOptionsRenderer: V,
  tagListPosition: F = "top",
  tagListRenderer: U,
  ...M
}, L) => {
  const X = R.useCallback((u) => s && s in u ? u[s] : JSON.stringify(u), [s]), [K, G] = R.useState(l);
  R.useEffect(() => {
    G(l);
  }, [l]);
  const Q = R.useMemo(() => a ? (A == null ? void 0 : A.map((u) => o.find((f) => f[i] == u)).filter((u) => !!u)) || [] : o.find((u) => u[i] == A) || null, [A, o]), {
    value: J,
    getRootProps: ee,
    getInputProps: ne,
    getListboxProps: de,
    getOptionProps: y,
    groupedOptions: w,
    getClearProps: x,
    setAnchorEl: O,
    anchorEl: D,
    popupOpen: W,
    getTagProps: $
  } = pi({
    options: o,
    autoComplete: Z,
    autoSelect: q,
    multiple: a,
    open: K,
    value: Q,
    getOptionLabel: X,
    isOptionEqualToValue: (u, f) => i ? u[i] === f[i] : u === f,
    onInputChange: C,
    onOpen: (u) => {
      G(!0), p == null || p(u);
    },
    onClose: (u, f) => {
      G(!1), g == null || g(u, f);
    },
    clearOnBlur: !1,
    disabled: b,
    unstable_classNamePrefix: "c",
    onChange: (u, f) => {
      S && (Array.isArray(f) ? S(f.map((v) => v[i])) : S(f && typeof f == "object" ? f[i] : null)), E == null || E(f);
    }
  }), I = R.useMemo(() => V ? V({
    closePopup: () => G(!1)
  }) : null, [V, G]), Y = n ? /* @__PURE__ */ B("div", { css: {
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
  }, children: /* @__PURE__ */ B(Bo, {}) }) : /* @__PURE__ */ B("ul", { css: {
    zIndex: "20",
    width: "100%"
  }, ...de(), children: D && w.length > 0 ? /* @__PURE__ */ Ee(dt, { children: [
    w.map((u, f) => /* @__PURE__ */ B(re.Fragment, { children: "group" in u ? /* @__PURE__ */ B(dt, {}) : /* @__PURE__ */ B("li", { css: [{
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
    }, mr`
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
      option: u,
      index: f
    }), children: m ? m(u) : X(u) }) }, i in u ? u[i] : f)),
    I
  ] }) : I }), ye = R.useMemo(() => a ? J && J.length > 0 : !!J, [J, a]), {
    onBlur: pe,
    onChange: me,
    ref: Se,
    ...ze
  } = ne(), Fe = pn(L, Se), be = R.useMemo(() => a ? U ? U({
    items: J,
    isLoading: t,
    onDelete: (u) => {
      S == null || S(J.filter((f) => f[i] !== u[i]).map((f) => f[i]));
    },
    valueCount: (A == null ? void 0 : A.length) || 0
  }) : /* @__PURE__ */ B(Wo, { items: J, optionRender: m, getOptionLabel: X, getTagProps: $, isLoading: t, valueCount: A == null ? void 0 : A.length }) : null, [J, U]), ke = /* @__PURE__ */ Ee(dt, { children: [
    F === "top" && be,
    /* @__PURE__ */ B(lt, { ...M, error: h, ...ze, ref: Fe, inputWrapRef: O, placeholder: T, isLoading: r, useTypograf: !1, onChange: me, onBlur: (u) => {
      pe == null || pe(u), a && (me == null || me({
        ...u,
        target: {
          ...u.target,
          value: ""
        }
      }));
    }, afterItems: !b && [H && /* @__PURE__ */ B(re.Fragment, { children: H }, "after-items"), ye && N && !a && /* @__PURE__ */ B("button", { ...x(), onMouseDown: (u) => {
      u.preventDefault(), u.stopPropagation();
    }, children: /* @__PURE__ */ B(Ge, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: Tr.faTimes }) }, "clear"), /* @__PURE__ */ B("button", { onClick: (u) => {
      u.preventDefault(), u.stopPropagation(), G((f) => !f);
    }, children: /* @__PURE__ */ B(Ge, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, h && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: Ci.faCaretDown }) }, "arrow")] }),
    D && /* @__PURE__ */ B(hn, { open: W, anchorEl: D, children: /* @__PURE__ */ B("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: D.offsetWidth
    }], children: Y }) })
  ] });
  return /* @__PURE__ */ Ee(dt, { children: [
    /* @__PURE__ */ B(Ht, { label: c, error: h, helperText: d, className: e, ...ee(), children: ke }),
    F === "bottom" && be
  ] });
}, Zn = R.forwardRef(Vo), jo = (e, n) => {
  const [r, t] = R.useState(!1);
  return /* @__PURE__ */ B(vi, { ref: n, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ B(hi, { position: "end", children: /* @__PURE__ */ B(gi, { size: "small", edge: "end", onClick: () => t((i) => !i), children: /* @__PURE__ */ B(Ge, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, mr`
                  width: 18px;
                `], icon: r ? ki.faEyeSlash : _i.faEye }) }) })
  }, ...e });
};
R.forwardRef(jo);
const pr = (e) => Array.isArray(e) ? e.length === 0 : !e, Ho = ({
  dictionary: e,
  open: n = !1,
  value: r,
  filterOptions: t,
  ...i
}, s) => {
  const [o, a] = R.useState(n), l = Ai(e, {
    enabled: o || !!r
  });
  R.useEffect(() => {
    a(n);
  }, [n]);
  const c = R.useMemo(() => t && l.data ? t(l.data) : l.data, [l.data, t]);
  return /* @__PURE__ */ B(
    Zn,
    {
      displayField: "name",
      ...i,
      ref: s,
      open: o,
      value: r,
      isLoading: l.isLoading,
      onOpen: () => {
        a(!0);
      },
      onClose: () => {
        a(!1);
      },
      options: c || [],
      useTypograf: !1,
      inputLoading: l.isLoading && !pr(r),
      disabled: l.isLoading && !pr(r) || i.disabled
    }
  );
}, Da = R.forwardRef(Ho);
function on(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function hr(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? on(Object(r), !0).forEach(function(t) {
      ei(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : on(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Io(e) {
  var n = function(r, t) {
    if (typeof r != "object" || !r)
      return r;
    var i = r[Symbol.toPrimitive];
    if (i !== void 0) {
      var s = i.call(r, t || "default");
      if (typeof s != "object")
        return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(r);
  }(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function ei(e, n, r) {
  return (n = Io(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function Uo(e, n) {
  if (e == null)
    return {};
  var r, t, i = function(o, a) {
    if (o == null)
      return {};
    var l, c, d = {}, h = Object.keys(o);
    for (c = 0; c < h.length; c++)
      l = h[c], a.indexOf(l) >= 0 || (d[l] = o[l]);
    return d;
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (t = 0; t < s.length; t++)
      r = s[t], n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function an(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function ti(e, n) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = function(l, c) {
      if (l) {
        if (typeof l == "string")
          return an(l, c);
        var d = Object.prototype.toString.call(l).slice(8, -1);
        return d === "Object" && l.constructor && (d = l.constructor.name), d === "Map" || d === "Set" ? Array.from(l) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? an(l, c) : void 0;
      }
    }(e)) || n) {
      r && (e = r);
      var t = 0, i = function() {
      };
      return { s: i, n: function() {
        return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, o = !0, a = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var l = r.next();
    return o = l.done, l;
  }, e: function(l) {
    a = !0, s = l;
  }, f: function() {
    try {
      o || r.return == null || r.return();
    } finally {
      if (a)
        throw s;
    }
  } };
}
function ir(e, n) {
  var r, t = n.replacementChars, i = n.replacement, s = n.separate, o = t, a = "", l = ti(e);
  try {
    for (l.s(); !(r = l.n()).done; ) {
      var c, d = r.value, h = !Object.prototype.hasOwnProperty.call(i, d) && ((c = i[o[0]]) === null || c === void 0 ? void 0 : c.test(d));
      (s && d === o[0] || h) && (o = o.slice(1), a += d);
    }
  } catch (p) {
    l.e(p);
  } finally {
    l.f();
  }
  return a;
}
function gr(e) {
  return e.length > 0 ? ei({}, e, /./) : {};
}
function $o(e, n) {
  var r, t = n.mask, i = n.replacement, s = n.showMask, o = 0, a = "", l = ti(t);
  try {
    for (l.s(); !(r = l.n()).done; ) {
      var c = r.value;
      if (!s && e[o] === void 0)
        break;
      Object.prototype.hasOwnProperty.call(i, c) && e[o] !== void 0 ? a += e[o++] : a += c;
    }
  } catch (d) {
    l.e(d);
  } finally {
    l.f();
  }
  return a;
}
function qo(e, n) {
  for (var r = n.mask, t = n.replacement, i = [], s = 0; s < r.length; s++) {
    var o, a = (o = e[s]) !== null && o !== void 0 ? o : r[s], l = Object.prototype.hasOwnProperty.call(t, a) ? "replacement" : e[s] !== void 0 && e[s] !== r[s] ? "input" : "mask";
    i.push({ type: l, value: a, index: s });
  }
  return i;
}
function un(e, n) {
  for (var r = n.start, t = r === void 0 ? 0 : r, i = n.end, s = n.mask, o = n.replacement, a = n.separate, l = e.slice(t, i), c = s.slice(t, i), d = "", h = 0; h < c.length; h++) {
    var p = Object.prototype.hasOwnProperty.call(o, c[h]);
    p && l[h] !== void 0 && l[h] !== c[h] ? d += l[h] : p && a && (d += c[h]);
  }
  return d;
}
function ln(e) {
  for (var n = e.mask, r = e.replacement, t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = typeof r == "string" ? gr(r) : r, s = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"], o = "", a = 0; a < n.length; a++) {
    var l = Object.prototype.hasOwnProperty.call(i, n[a]), c = t ? "(?!".concat(n[a], ")") : "";
    a === 0 && (o += "^"), o += l ? c + i[n[a]].toString().slice(1, -1) : s.includes(n[a]) ? "\\".concat(n[a]) : n[a], a === n.length - 1 && (o += "$");
  }
  return o;
}
function Yo(e, n, r) {
  return n = ht(n), function(t, i) {
    if (i && (typeof i == "object" || typeof i == "function"))
      return i;
    if (i !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return function(s) {
      if (s === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return s;
    }(t);
  }(e, Mr() ? Reflect.construct(n, r || [], ht(e).constructor) : n.apply(e, r));
}
function Mr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mr = function() {
    return !!e;
  })();
}
function vr(e) {
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vr(e);
}
function Xo(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Qo(e, n, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Go(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && gt(e, n);
}
function ht(e) {
  return ht = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ht(e);
}
function gt(e, n) {
  return gt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, t) {
    return r.__proto__ = t, r;
  }, gt(e, n);
}
function yr(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return yr = function(r) {
    if (r === null || !function(i) {
      try {
        return Function.toString.call(i).indexOf("[native code]") !== -1;
      } catch {
        return typeof i == "function";
      }
    }(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (n !== void 0) {
      if (n.has(r))
        return n.get(r);
      n.set(r, t);
    }
    function t() {
      return function(i, s, o) {
        if (Mr())
          return Reflect.construct.apply(null, arguments);
        var a = [null];
        a.push.apply(a, s);
        var l = new (i.bind.apply(i, a))();
        return o && gt(l, o.prototype), l;
      }(r, arguments, ht(this).constructor);
    }
    return t.prototype = Object.create(r.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), gt(t, r);
  }, yr(e);
}
var it = function(e) {
  function n(r, t) {
    var i;
    return Xo(this, n), (i = Yo(this, n, [r])).name = "SyntheticChangeError", i.cause = t, i;
  }
  return Go(n, e), Qo(n);
}(yr(Error));
function Ko(e, n) {
  return R.useCallback(function(r) {
    e.current = r, typeof n == "function" ? n(r) : vr(n) === "object" && n !== null && (n.current = r);
  }, [e, n]);
}
function Pt(e, n) {
  var r = n.value, t = n.selectionStart, i = n.selectionEnd;
  r !== void 0 && (e.value = r), t !== void 0 && i !== void 0 && e.setSelectionRange(t, i);
}
var Jo = ["text", "email", "tel", "search", "url"];
function Zo(e) {
  var n = e.init, r = e.tracking, t = e.eventType, i = e.eventHandler, s = R.useRef({ timeoutId: -1, fallbackTimeoutId: -1, cachedTimeoutId: -1, start: 0, end: 0 }), o = R.useRef(!0), a = R.useRef(null), l = R.useRef({ init: n, tracking: r, eventType: t, eventHandler: i });
  return l.current.init = n, l.current.tracking = r, l.current.eventType = t, l.current.eventHandler = i, R.useMemo(function() {
    return function(c, d, h) {
      var p = h.onFocus, g = h.onBlur, m = h.onInput;
      return new Proxy(c, { set: function(S, C, E) {
        if (C !== "current")
          return !1;
        var b = E !== null && Jo.includes(E.type);
        if (E !== c.current && (c.current !== null && (c.current.removeEventListener("focus", p), c.current.removeEventListener("blur", g), c.current.removeEventListener("input", m)), E !== null && b)) {
          var T, A = (T = E._wrapperState) !== null && T !== void 0 ? T : {}, N = A.controlled, Z = N !== void 0 && N, q = A.initialValue, H = q === void 0 ? "" : q, V = d({ controlled: Z, initialValue: E.value || H });
          Pt(E, { value: V.value }), document.activeElement === E && p(), E.addEventListener("focus", p), E.addEventListener("blur", g), E.addEventListener("input", m);
        }
        return S[C] = E, !0;
      } });
    }(a, l.current.init, { onFocus: function() {
      s.current.timeoutId = window.setTimeout(function c() {
        var d, h, p, g;
        o.current ? (s.current.start = (d = (h = a.current) === null || h === void 0 ? void 0 : h.selectionStart) !== null && d !== void 0 ? d : 0, s.current.end = (p = (g = a.current) === null || g === void 0 ? void 0 : g.selectionEnd) !== null && p !== void 0 ? p : 0, s.current.timeoutId = window.setTimeout(c)) : s.current.fallbackTimeoutId = window.setTimeout(c);
      });
    }, onBlur: function() {
      window.clearTimeout(s.current.timeoutId), window.clearTimeout(s.current.fallbackTimeoutId), s.current.timeoutId = -1, s.current.fallbackTimeoutId = -1, s.current.cachedTimeoutId = -1;
    }, onInput: function(c) {
      var d = a.current;
      if (d !== null)
        try {
          var h, p, g, m, S;
          if (s.current.cachedTimeoutId === s.current.timeoutId)
            throw new it("The input selection has not been updated.");
          s.current.cachedTimeoutId = s.current.timeoutId;
          var C = d.value, E = d.selectionStart, b = d.selectionEnd;
          if (E === null || b === null)
            throw new it("The selection attributes have not been initialized.");
          var T, A = (h = (p = d._valueTracker) === null || p === void 0 || (g = p.getValue) === null || g === void 0 ? void 0 : g.call(p)) !== null && h !== void 0 ? h : "";
          if (E > s.current.start ? T = "insert" : E <= s.current.start && E < s.current.end ? T = "deleteBackward" : E === s.current.end && C.length < A.length && (T = "deleteForward"), T === void 0 || (T === "deleteBackward" || T === "deleteForward") && C.length > A.length)
            throw new it("Input type detection error.");
          var N = "", Z = "", q = s.current.start, H = s.current.end;
          if (T === "insert")
            N = C.slice(s.current.start, E);
          else {
            var V = A.length - C.length;
            q = E, H = E + V, Z = A.slice(q, H);
          }
          var F = l.current.tracking({ inputType: T, previousValue: A, value: C, addedValue: N, deletedValue: Z, changeStart: q, changeEnd: H, selectionStart: E, selectionEnd: b });
          Pt(d, { value: F.value, selectionStart: F.selectionStart, selectionEnd: F.selectionEnd });
          var U = l.current.eventType, M = l.current.eventHandler;
          if (typeof U == "string" && M) {
            var L = d.value, X = d.selectionStart, K = d.selectionEnd;
            o.current = !1, requestAnimationFrame(function() {
              Pt(d, { value: L, selectionStart: X ?? L.length, selectionEnd: K ?? L.length });
              var Y = new CustomEvent(U, { bubbles: !0, cancelable: !1, composed: !0, detail: F.__detail });
              d.dispatchEvent(Y), kt.unstable_batchedUpdates ? kt.unstable_batchedUpdates(M, Y) : M(Y), o.current = !0;
            });
          }
          (m = d._valueTracker) === null || m === void 0 || (S = m.setValue) === null || S === void 0 || S.call(m, A), s.current.start = F.selectionStart, s.current.end = F.selectionEnd;
        } catch (Y) {
          var G, Q, J, ee, ne, de, y, w, x, O, D, W = Y, $ = W.name, I = W.cause;
          if (Pt(d, { value: (G = (Q = I == null || (J = I.__attributes) === null || J === void 0 ? void 0 : J.value) !== null && Q !== void 0 ? Q : (ee = d._valueTracker) === null || ee === void 0 || (ne = ee.getValue) === null || ne === void 0 ? void 0 : ne.call(ee)) !== null && G !== void 0 ? G : "", selectionStart: (de = I == null || (y = I.__attributes) === null || y === void 0 ? void 0 : y.selectionStart) !== null && de !== void 0 ? de : s.current.start, selectionEnd: (w = I == null || (x = I.__attributes) === null || x === void 0 ? void 0 : x.selectionEnd) !== null && w !== void 0 ? w : s.current.end }), (I == null || (O = I.__attributes) === null || O === void 0 ? void 0 : O.selectionStart) !== void 0 && (s.current.start = I.__attributes.selectionStart), (I == null || (D = I.__attributes) === null || D === void 0 ? void 0 : D.selectionEnd) !== void 0 && (s.current.end = I.__attributes.selectionEnd), c.preventDefault(), c.stopPropagation(), $ !== "SyntheticChangeError")
            throw Y;
        }
    } });
  }, []);
}
function Cr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mask, r = n === void 0 ? "" : n, t = e.replacement, i = t === void 0 ? {} : t, s = e.showMask, o = s !== void 0 && s, a = e.separate, l = a !== void 0 && a, c = e.track, d = e.modify, h = e.onMask, p = typeof i == "string" ? gr(i) : i, g = R.useRef(null);
  return Zo({ init: function(m) {
    var S = m.controlled, C = m.initialValue;
    C = S || C ? C : o ? r : "";
    var E = { mask: r, replacement: p, showMask: o, separate: l };
    return g.current = { value: C, props: E, fallbackProps: E }, { value: C };
  }, tracking: function(m) {
    var S, C = m.inputType, E = m.previousValue, b = m.addedValue, T = m.changeStart, A = m.changeEnd;
    if (g.current === null)
      throw new it("The state has not been initialized.");
    g.current.value !== E ? g.current.props = g.current.fallbackProps : g.current.fallbackProps = g.current.props;
    var N = un(E, { end: T, mask: g.current.props.mask, replacement: g.current.props.replacement, separate: g.current.props.separate }), Z = RegExp("[^".concat(Object.keys(g.current.props.replacement).join(""), "]"), "g"), q = g.current.props.mask.replace(Z, "");
    N && (N = ir(N, { replacementChars: q, replacement: g.current.props.replacement, separate: g.current.props.separate }));
    var H = c == null ? void 0 : c(hr(hr({}, C === "insert" ? { inputType: C, data: b } : { inputType: C, data: null }), {}, { value: E, selectionStart: T, selectionEnd: A }));
    if (H === !1)
      throw new it("Custom trekking stop.");
    if (H === null ? b = "" : H !== !0 && H !== void 0 && (b = H), b && (b = ir(b, { replacementChars: q.slice(N.length), replacement: g.current.props.replacement, separate: !1 })), C === "insert" && b === "")
      throw new it("The character does not match the key value of the `replacement` object.");
    var V = un(E, { start: A, mask: g.current.props.mask, replacement: g.current.props.replacement, separate: g.current.props.separate });
    if (g.current.props.separate) {
      var F = g.current.props.mask.slice(T, A).replace(Z, ""), U = F.length - b.length;
      U < 0 ? V = V.slice(-U) : U > 0 && (V = F.slice(-U) + V);
    }
    V && (V = ir(V, { replacementChars: q.slice(N.length + b.length), replacement: g.current.props.replacement, separate: g.current.props.separate }));
    var M = N + b + V, L = (S = d == null ? void 0 : d(M)) !== null && S !== void 0 ? S : {}, X = L.mask, K = X === void 0 ? r : X, G = L.replacement, Q = G === void 0 ? p : G, J = L.showMask, ee = J === void 0 ? o : J, ne = L.separate, de = ne === void 0 ? l : ne;
    typeof Q == "string" && (Q = gr(Q));
    var y = function(x, O) {
      var D = O.mask, W = O.replacement, $ = O.showMask, I = $o(x, { mask: D, replacement: W, showMask: $ }), Y = qo(I, { mask: D, replacement: W }), ye = ln({ mask: D, replacement: W }), pe = ln({ mask: D, replacement: W }, !0);
      return { value: I, input: x, parts: Y, pattern: ye, isValid: RegExp(pe).test(I) };
    }(M, { mask: K, replacement: Q, showMask: ee }), w = function(x) {
      var O, D, W, $ = x.inputType, I = x.value, Y = x.addedValue, ye = x.beforeChangeValue, pe = x.parts, me = x.replacement, Se = x.separate, ze = pe.filter(function(f) {
        var v = f.type;
        return v === "input" || Se && v === "replacement";
      }), Fe = (O = ze[ye.length + Y.length - 1]) === null || O === void 0 ? void 0 : O.index, be = (D = ze[ye.length - 1]) === null || D === void 0 ? void 0 : D.index, ke = (W = ze[ye.length + Y.length]) === null || W === void 0 ? void 0 : W.index;
      if ($ === "insert") {
        if (Fe !== void 0)
          return Fe + 1;
        if (ke !== void 0)
          return ke;
        if (be !== void 0)
          return be + 1;
      }
      if ($ === "deleteForward") {
        if (ke !== void 0)
          return ke;
        if (be !== void 0)
          return be + 1;
      }
      if ($ === "deleteBackward") {
        if (be !== void 0)
          return be + 1;
        if (ke !== void 0)
          return ke;
      }
      var u = I.split("").findIndex(function(f) {
        return Object.prototype.hasOwnProperty.call(me, f);
      });
      return u !== -1 ? u : I.length;
    }({ inputType: C, value: y.value, addedValue: b, beforeChangeValue: N, parts: y.parts, replacement: Q, separate: de });
    return g.current.value = y.value, g.current.props = { mask: K, replacement: Q, showMask: ee, separate: de }, { value: y.value, selectionStart: w, selectionEnd: w, __detail: y };
  }, eventType: "input-mask", eventHandler: h });
}
var ea = ["component", "mask", "replacement", "showMask", "separate", "track", "modify", "onMask"];
function ta(e, n) {
  var r = e.component, t = e.mask, i = e.replacement, s = e.showMask, o = e.separate, a = e.track, l = e.modify, c = e.onMask, d = Uo(e, ea), h = Cr({ mask: t, replacement: i, showMask: s, separate: o, track: a, modify: l, onMask: c }), p = Ko(h, n);
  return yi.jsx(r || "input", hr({ ref: p }, d));
}
R.forwardRef(ta);
const ra = ({
  error: e,
  label: n,
  open: r,
  className: t,
  onFocus: i,
  onBlur: s,
  onClick: o,
  value: a,
  onChange: l,
  mask: c = "ДД.ММ.ГГГГ",
  replacement: d = {
    Д: /\d/,
    М: /\d/,
    Г: /\d/
  },
  showMask: h = !0,
  ...p
}, g) => {
  const [m, S] = R.useState(null), [C, E] = R.useState(!1), [b, T] = R.useState(!1), [A, N] = R.useState(a ? _t(a).format("DD.MM.YYYY") : "");
  g = Cr({
    mask: c,
    replacement: d,
    showMask: h,
    track: (F) => {
      const {
        value: U,
        data: M,
        selectionEnd: L,
        selectionStart: X
      } = F, [K, G, Q] = (U == null ? void 0 : U.split(".")) || [], J = (ne) => L === ne && X === ne, ee = M !== null;
      return J(0) && ee && !/[0123]/.test(M) || J(1) && ee && (K == null ? void 0 : K[0]) === "3" && +M > 1 || J(1) && ee && (K == null ? void 0 : K[0]) === "0" && +M == 0 || J(2) && ee && !/[01]/.test(M) || J(4) && ee && (G == null ? void 0 : G[0]) === "1" && !/[012]/.test(M) || J(4) && ee && (G == null ? void 0 : G[0]) === "0" && +M < 1 || J(5) && ee && !/[12]/.test(M) || J(7) && ee && (Q == null ? void 0 : Q[0]) === "1" && +M != 9 ? !1 : F.data;
    }
  }), R.useEffect(() => {
    r !== void 0 && E(r);
  }, [r]);
  const q = R.useCallback((F) => {
    T(!0), E(!0), i == null || i(F);
  }, [i, E]), H = (F) => {
    T(!1), A && (l == null || l(_t(A, "DD-MM-YYYY").format("YYYY-MM-DD"))), s == null || s(F);
  }, V = R.useCallback((F) => {
    S(F);
  }, [S]);
  return /* @__PURE__ */ B(mi, { onClickAway: () => E(!1), children: /* @__PURE__ */ Ee(Ht, { className: t, label: n, error: e, children: [
    /* @__PURE__ */ B(lt, { ...p, inputWrapRef: V, ref: g, onFocus: q, onBlur: H, useTypograf: !1, value: A, onChange: (F) => {
      N == null || N(F.target.value);
    }, onMouseDown: (F) => {
      b && E(!C), o == null || o(F);
    }, error: e }),
    m && /* @__PURE__ */ B(hn, { open: C, anchorEl: m, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: m
      }
    }], children: /* @__PURE__ */ B("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ B(ai, { value: a, onChange: (F) => {
      l == null || l(_t(F).format("YYYY-MM-DD")), N(_t(F).format("DD.MM.YYYY")), E(!1);
    } }) }) })
  ] }) });
}, Ea = R.forwardRef(ra), na = ({
  multiple: e,
  value: n,
  url: r,
  params: t,
  idField: i = Jn,
  onInputChange: s,
  filters: o,
  open: a = !1,
  extraOptionsRenderer: l,
  ...c
}, d) => {
  const [h, p] = R.useState(""), [g, m] = R.useState(a), S = Ui(h, 500), C = Ii(r, i), {
    records: E,
    isLoading: b
  } = Hi({
    idField: i,
    value: (pr(n) ? [] : e ? n : [n]) || [],
    url: r,
    params: t
  });
  R.useEffect(() => {
    m(a);
  }, [a]);
  const T = R.useMemo(() => ({
    ...t,
    ...o && o.length > 0 && {
      extFilters: JSON.stringify(o)
    },
    ...S ? {
      query: S
    } : void 0
  }), [S, t, o]), A = h.length > 0 || g || !1, N = Ni(r, {
    enabled: A,
    params: T,
    placeholderData: ui,
    staleTime: 1e3 * 60
  }), Z = R.useMemo(() => {
    var V;
    return li.uniqBy([...E, ...((V = N.data) == null ? void 0 : V.data) || []], i);
  }, [E, N.data]), q = !e && b, H = l ? (V) => l({
    ...V,
    search: h,
    searchIsLoading: N.isLoading
  }) : void 0;
  return /* @__PURE__ */ B(dt, { children: /* @__PURE__ */ B(Zn, { ref: d, multiple: e, value: n, ...c, disabled: q || c.disabled, inputLoading: q, options: Z, idField: i, onOpen: () => m(!0), onClose: () => m(!1), isLoading: N.isLoading || b, valueLoading: b, popupAdditionalOptionsRenderer: H, open: g, afterItems: [(N.isLoading || N.isFetching || e && b) && /* @__PURE__ */ B("div", { children: /* @__PURE__ */ B(Ge, { icon: dn.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onSelect: (V) => {
    var F;
    e ? V == null || V.map((U) => {
      C(U);
    }) : C(V), (F = c.onSelect) == null || F.call(c, V);
  }, onInputChange: (V, F, U) => {
    U === "input" && p(F), U === "reset" && h !== "" && p(""), s == null || s(V, F, U);
  } }) });
}, Ra = R.forwardRef(na), ia = ({
  unit: e,
  error: n,
  onChange: r,
  allowFloat: t = !0,
  value: i,
  ...s
}, o) => {
  const [a, l] = R.useState(i), [c, d] = R.useState(null);
  R.useEffect(() => {
    l(i);
  }, [i]);
  const h = pn(o, d);
  return /* @__PURE__ */ B(lt, { ...s, ref: h, error: n, value: a, useTypograf: !1, onChange: (p) => {
    const g = Number(p.target.value);
    if (!isNaN(g)) {
      if (p.target.value.includes(".") && !t)
        return;
      l(p.target.value), p.target.value.slice(-1) !== "." && (r == null || r(g));
    }
  }, afterItems: [e && /* @__PURE__ */ B("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, n && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => c == null ? void 0 : c.focus(), children: e }, "unit")] });
}, za = R.forwardRef(ia), sa = R.forwardRef(({
  placeholder: e = "Введите",
  ...n
}, r) => /* @__PURE__ */ B("textarea", { ref: r, placeholder: e, ...n })), oa = ({
  error: e,
  rows: n = 5,
  ...r
}, t) => /* @__PURE__ */ B(lt, { ...r, ref: t, rows: n, inputComponent: sa, error: e }), Pa = R.forwardRef(oa), aa = ({
  error: e,
  ...n
}, r) => /* @__PURE__ */ B(lt, { useTypograf: !1, ...n, ref: r, error: e }), Ta = R.forwardRef(aa), ua = ({
  label: e,
  error: n,
  value: r,
  helperText: t,
  className: i,
  onChange: s,
  ...o
}, a) => /* @__PURE__ */ B(Ht, { label: e, error: n, helperText: t, className: i, children: /* @__PURE__ */ Ee(bi, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...o, onChange: (l) => {
  s == null || s(l.target.value === "true");
}, ref: a, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ B(Nr, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ B(Nr, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), Ma = R.forwardRef(ua), la = ({
  label: e,
  ...n
}, r) => /* @__PURE__ */ B(Si, { ref: r, label: e, labelPlacement: "top", sx: {
  mx: 0,
  alignItems: "flex-start",
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    "--tw-text-opacity": "1",
    color: "rgb(55 65 81 / var(--tw-text-opacity))"
  }
}, control: /* @__PURE__ */ B(wi, { ...n, checked: n.value, color: "primary", css: {
  paddingLeft: "0px",
  paddingRight: "0px"
} }) }), Ca = R.forwardRef(la), ca = ({
  mask: e = "+7 (___) ___-__-__",
  replacement: n = {
    _: /\d/
  },
  showMask: r,
  ...t
}, i) => (i = Cr({
  mask: e,
  replacement: n,
  showMask: r
}), /* @__PURE__ */ B(lt, { useTypograf: !1, ...t, ref: i })), ka = R.forwardRef(ca);
export {
  Ma as B,
  Ji as C,
  Da as D,
  Sa as F,
  Ht as L,
  za as N,
  ka as P,
  Ra as Q,
  Oa as R,
  lt as T,
  Ta as Y,
  xa as a,
  Ea as b,
  Pa as c,
  vs as d,
  Ii as e,
  An as f,
  Jn as g,
  Zn as h,
  Ca as i,
  ba as j,
  ma as k,
  wa as l,
  Ln as m,
  _a as u
};
