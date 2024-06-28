var Gt = (e, n, r) => {
  if (!n.has(e))
    throw TypeError("Cannot " + r);
};
var fe = (e, n, r) => (Gt(e, n, "read from private field"), r ? r.call(e) : n.get(e)), Pe = (e, n, r) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, r);
}, Ie = (e, n, r, t) => (Gt(e, n, "write to private field"), t ? t.call(e, r) : n.set(e, r), r);
var Te = (e, n, r) => (Gt(e, n, "access private method"), r);
import { I as si, J as sr, L as oi, O as cn, b as Ee, j as B, f as fn, F as dt, P as ai, G as ui, l as li } from "./library-c328e858.js";
import { A as ci, g as fi, i as di, a as mr, k as pi, u as dn, P as pn, l as hi, I as gi, f as vi, j as yi, C as mi, m as Ar, o as bi } from "./mui-2ff488a7.js";
import { r as M, R as re, e as wi, c as Ct, g as hn } from "./react-6f5a8403.js";
import { F as Ge, p as gn } from "./icons-ad9f8a73.js";
import { f as Si } from "./faEye-c7d9d039.js";
import { Q as vn, d as xi, e as _i, g as Oi, i as Di, j as Ei, s as Nr, k as Fr, w as zi, l as Ri, u as Pi, c as Ti, f as Mi, m as ki, h as et, b as Ci } from "./DictionaryCell-9be52052.js";
function Lr(e, n) {
  return e.filter((r) => !n.includes(r));
}
function Ai(e, n, r) {
  const t = e.slice(0);
  return t[n] = r, t;
}
var Qe, ot, at, De, vt, ut, lt, Tt, yt, or, mt, ar, bt, ur, wt, lr, ln, Ni = (ln = class extends si {
  constructor(n, r, t) {
    super();
    Pe(this, lt);
    Pe(this, yt);
    Pe(this, mt);
    Pe(this, bt);
    Pe(this, wt);
    Pe(this, Qe, void 0);
    Pe(this, ot, void 0);
    Pe(this, at, void 0);
    Pe(this, De, void 0);
    Pe(this, vt, void 0);
    Pe(this, ut, void 0);
    Ie(this, Qe, n), Ie(this, at, []), Ie(this, De, []), Te(this, lt, Tt).call(this, []), this.setQueries(r, t);
  }
  onSubscribe() {
    this.listeners.size === 1 && fe(this, De).forEach((n) => {
      n.subscribe((r) => {
        Te(this, bt, ur).call(this, n, r);
      });
    });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), fe(this, De).forEach((n) => {
      n.destroy();
    });
  }
  setQueries(n, r, t) {
    Ie(this, at, n), Ie(this, vt, r), sr.batch(() => {
      const i = fe(this, De), s = Te(this, mt, ar).call(this, fe(this, at));
      s.forEach(
        (c) => c.observer.setOptions(c.defaultedQueryOptions, t)
      );
      const o = s.map((c) => c.observer), a = o.map(
        (c) => c.getCurrentResult()
      ), l = o.some(
        (c, d) => c !== i[d]
      );
      i.length === o.length && !l || (Ie(this, De, o), Te(this, lt, Tt).call(this, a), this.hasListeners() && (Lr(i, o).forEach((c) => {
        c.destroy();
      }), Lr(o, i).forEach((c) => {
        c.subscribe((d) => {
          Te(this, bt, ur).call(this, c, d);
        });
      }), Te(this, wt, lr).call(this)));
    });
  }
  getCurrentResult() {
    return fe(this, ut);
  }
  getQueries() {
    return fe(this, De).map((n) => n.getCurrentQuery());
  }
  getObservers() {
    return fe(this, De);
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
}, Qe = new WeakMap(), ot = new WeakMap(), at = new WeakMap(), De = new WeakMap(), vt = new WeakMap(), ut = new WeakMap(), lt = new WeakSet(), Tt = function(n) {
  var r;
  Ie(this, ot, n), Ie(this, ut, Te(this, yt, or).call(this, n, (r = fe(this, vt)) == null ? void 0 : r.combine));
}, yt = new WeakSet(), or = function(n, r) {
  return r ? oi(fe(this, ut), r(n)) : n;
}, mt = new WeakSet(), ar = function(n) {
  const r = fe(this, De), t = new Map(
    r.map((h) => [h.options.queryHash, h])
  ), i = n.map(
    (h) => fe(this, Qe).defaultQueryOptions(h)
  ), s = i.flatMap((h) => {
    const p = t.get(h.queryHash);
    return p != null ? [{ defaultedQueryOptions: h, observer: p }] : [];
  }), o = new Set(
    s.map((h) => h.defaultedQueryOptions.queryHash)
  ), a = i.filter(
    (h) => !o.has(h.queryHash)
  ), l = (h) => {
    const p = fe(this, Qe).defaultQueryOptions(h);
    return fe(this, De).find(
      (m) => m.options.queryHash === p.queryHash
    ) ?? new vn(fe(this, Qe), p);
  }, c = a.map((h) => ({
    defaultedQueryOptions: h,
    observer: l(h)
  })), d = (h, p) => i.indexOf(h.defaultedQueryOptions) - i.indexOf(p.defaultedQueryOptions);
  return s.concat(c).sort(d);
}, bt = new WeakSet(), ur = function(n, r) {
  const t = fe(this, De).indexOf(n);
  t !== -1 && (Te(this, lt, Tt).call(this, Ai(fe(this, ot), t, r)), Te(this, wt, lr).call(this));
}, wt = new WeakSet(), lr = function() {
  sr.batch(() => {
    this.listeners.forEach((n) => {
      n(fe(this, ot));
    });
  });
}, ln);
function Fi({
  queries: e,
  ...n
}, r) {
  const t = cn(r), i = xi(), s = _i(), o = M.useMemo(
    () => e.map((m) => {
      const S = t.defaultQueryOptions(m);
      return S._optimisticResults = i ? "isRestoring" : "optimistic", S;
    }),
    [e, t, i]
  );
  o.forEach((m) => {
    Oi(m), Di(m, s);
  }), Ei(s);
  const [a] = M.useState(
    () => new Ni(
      t,
      o,
      n
    )
  ), [l, c, d] = a.getOptimisticResult(
    o,
    n.combine
  );
  M.useSyncExternalStore(
    M.useCallback(
      (m) => i ? () => {
      } : a.subscribe(sr.batchCalls(m)),
      [a, i]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), M.useEffect(() => {
    a.setQueries(
      o,
      n,
      {
        listeners: !1
      }
    );
  }, [o, n, a]);
  const p = l.some(
    (m, S) => Nr(o[S], m)
  ) ? l.flatMap((m, S) => {
    const k = o[S];
    if (k) {
      const R = new vn(t, k);
      if (Nr(k, m))
        return Fr(k, R, s);
      zi(m, i) && Fr(k, R, s);
    }
    return [];
  }) : [];
  if (p.length > 0)
    throw Promise.all(p);
  const g = l.find(
    (m, S) => {
      const k = o[S];
      return k && Ri({
        result: m,
        errorResetBoundary: s,
        throwOnError: k.throwOnError,
        query: t.getQueryCache().get(k.queryHash)
      });
    }
  );
  if (g != null && g.error)
    throw g.error;
  return c(d());
}
const Wr = () => {
  let e, n;
  const r = new Promise((t, i) => {
    e = t, n = i;
  });
  return {
    resolve: e,
    reject: n,
    value: r
  };
}, Li = (e, n) => {
  var l;
  const r = e.name ?? `batcher:${Math.random().toString(16).slice(2)})`, t = e.scheduler ?? yn(10), i = (l = globalThis.__BATSHIT_DEVTOOLS__) == null ? void 0 : l.for(r);
  let s = n ?? {
    seq: 0,
    batch: /* @__PURE__ */ new Set(),
    currentRequest: Wr(),
    timer: void 0,
    start: null,
    latest: null
  };
  i == null || i.create({ seq: s.seq });
  const o = () => {
    s.batch = /* @__PURE__ */ new Set(), s.currentRequest = Wr(), s.timer = void 0, s.start = null, s.latest = null;
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
}, Wi = (e) => (n, r) => n.find((t) => t[e] == r), yn = (e) => (n, r) => {
  const t = r - n;
  return e - t;
}, Bi = ({
  url: e,
  idField: n,
  params: r
}) => {
  const t = Pi();
  return M.useMemo(() => Li({
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
    resolver: Wi(n),
    scheduler: yn(10)
  }), [e, r]);
}, ji = ({
  idField: e,
  value: n,
  url: r,
  params: t
}) => {
  const i = Bi({
    url: r,
    idField: e,
    params: t
  });
  return Fi({
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
}, Vi = (e, n = "id") => {
  const r = cn();
  return (t) => {
    t && r.setQueryData([e, "item", t[n]], t);
  };
};
function Hi(e, n) {
  const [r, t] = M.useState(e);
  return M.useEffect(() => {
    const i = setTimeout(() => {
      t(e);
    }, n);
    return () => {
      clearTimeout(i);
    };
  }, [e, n]), r;
}
function ha(e) {
  const n = M.useCallback(
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
  return M.useSyncExternalStore(n, r, t);
}
function ga() {
  const [e, n] = M.useState({
    width: null,
    height: null
  });
  return M.useLayoutEffect(() => {
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
const Ii = ({
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
}, va = Ii;
var St = (e) => e.type === "checkbox", nt = (e) => e instanceof Date, we = (e) => e == null;
const mn = (e) => typeof e == "object";
var le = (e) => !we(e) && !Array.isArray(e) && mn(e) && !nt(e), bn = (e) => le(e) && e.target ? St(e.target) ? e.target.checked : e.target.value : e, Ui = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, wn = (e, n) => e.has(Ui(n)), $i = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return le(n) && n.hasOwnProperty("isPrototypeOf");
}, br = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function xe(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(br && (e instanceof Blob || e instanceof FileList)) && (r || le(e)))
    if (n = r ? [] : {}, !r && !$i(e))
      n = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (n[t] = xe(e[t]));
  else
    return e;
  return n;
}
var xt = (e) => Array.isArray(e) ? e.filter(Boolean) : [], oe = (e) => e === void 0, T = (e, n, r) => {
  if (!n || !le(e))
    return r;
  const t = xt(n.split(/[,[\].]+?/)).reduce((i, s) => we(i) ? i : i[s], e);
  return oe(t) || t === e ? oe(e[n]) ? r : e[n] : t;
}, Ne = (e) => typeof e == "boolean";
const At = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Fe = {
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
}, qi = re.createContext(null), wr = () => re.useContext(qi);
var Sn = (e, n, r, t = !0) => {
  const i = {
    defaultValues: n._defaultValues
  };
  for (const s in e)
    Object.defineProperty(i, s, {
      get: () => {
        const o = s;
        return n._proxyFormState[o] !== Fe.all && (n._proxyFormState[o] = !t || Fe.all), r && (r[o] = !0), e[o];
      }
    });
  return i;
}, ke = (e) => le(e) && !Object.keys(e).length, xn = (e, n, r, t) => {
  r(e);
  const { name: i, ...s } = e;
  return ke(s) || Object.keys(s).length >= Object.keys(n).length || Object.keys(s).find((o) => n[o] === (!t || Fe.all));
}, Mt = (e) => Array.isArray(e) ? e : [e], _n = (e, n, r) => !e || !n || e === n || Mt(e).some((t) => t && (r ? t === n : t.startsWith(n) || n.startsWith(t)));
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
function Yi(e) {
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
    next: (h) => l.current && _n(d.current, h.name, s) && xn(h, c.current, r._updateFormState) && a({
      ...r._formState,
      ...h
    }),
    subject: r._subjects.state
  }), re.useEffect(() => (l.current = !0, c.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), Sn(o, r, c.current, !1);
}
var je = (e) => typeof e == "string", On = (e, n, r, t, i) => je(e) ? (t && n.watch.add(e), T(r, e, i)) : Array.isArray(e) ? e.map((s) => (t && n.watch.add(s), T(r, s))) : (t && (n.watchAll = !0), r);
function Xi(e) {
  const n = wr(), { control: r = n.control, name: t, defaultValue: i, disabled: s, exact: o } = e || {}, a = re.useRef(t);
  a.current = t, Sr({
    disabled: s,
    subject: r._subjects.values,
    next: (d) => {
      _n(a.current, d.name, o) && c(xe(On(a.current, r._names, d.values || r._formValues, !1, i)));
    }
  });
  const [l, c] = re.useState(r._getWatch(t, i));
  return re.useEffect(() => r._removeUnmounted()), l;
}
var xr = (e) => /^\w*$/.test(e), Dn = (e) => xt(e.replace(/["|']|\]/g, "").split(/\.|\[/)), te = (e, n, r) => {
  let t = -1;
  const i = xr(n) ? [n] : Dn(n), s = i.length, o = s - 1;
  for (; ++t < s; ) {
    const a = i[t];
    let l = r;
    if (t !== o) {
      const c = e[a];
      l = le(c) || Array.isArray(c) ? c : isNaN(+i[t + 1]) ? {} : [];
    }
    e[a] = l, e = e[a];
  }
  return e;
};
function Qi(e) {
  const n = wr(), { name: r, disabled: t, control: i = n.control, shouldUnregister: s } = e, o = wn(i._names.array, r), a = Xi({
    control: i,
    name: r,
    defaultValue: T(i._formValues, r, T(i._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = Yi({
    control: i,
    name: r
  }), c = re.useRef(i.register(r, {
    ...e.rules,
    value: a,
    ...Ne(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return re.useEffect(() => {
    const d = i._options.shouldUnregister || s, h = (p, g) => {
      const m = T(i._fields, p);
      m && (m._f.mount = g);
    };
    if (h(r, !0), d) {
      const p = xe(T(i._options.defaultValues, r));
      te(i._defaultValues, r, p), oe(T(i._formValues, r)) && te(i._formValues, r, p);
    }
    return () => {
      (o ? d && !i._state.action : d) ? i.unregister(r) : h(r, !1);
    };
  }, [r, i, o, s]), re.useEffect(() => {
    T(i._fields, r) && i._updateDisabledField({
      disabled: t,
      fields: i._fields,
      name: r,
      value: T(i._fields, r)._f.value
    });
  }, [t, r, i]), {
    field: {
      name: r,
      value: a,
      ...Ne(t) || l.disabled ? { disabled: l.disabled || t } : {},
      onChange: re.useCallback((d) => c.current.onChange({
        target: {
          value: bn(d),
          name: r
        },
        type: At.CHANGE
      }), [r]),
      onBlur: re.useCallback(() => c.current.onBlur({
        target: {
          value: T(i._formValues, r),
          name: r
        },
        type: At.BLUR
      }), [r, i]),
      ref: (d) => {
        const h = T(i._fields, r);
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
        get: () => !!T(l.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!T(l.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!T(l.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => T(l.errors, r)
      }
    })
  };
}
const Gi = (e) => e.render(Qi(e));
var En = (e, n, r, t, i) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: i || !0
  }
} : {}, Br = (e) => ({
  isOnSubmit: !e || e === Fe.onSubmit,
  isOnBlur: e === Fe.onBlur,
  isOnChange: e === Fe.onChange,
  isOnAll: e === Fe.all,
  isOnTouch: e === Fe.onTouched
}), jr = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const pt = (e, n, r, t) => {
  for (const i of r || Object.keys(e)) {
    const s = T(e, i);
    if (s) {
      const { _f: o, ...a } = s;
      if (o) {
        if (o.refs && o.refs[0] && n(o.refs[0], i) && !t)
          break;
        if (o.ref && n(o.ref, o.name) && !t)
          break;
        pt(a, n);
      } else
        le(a) && pt(a, n);
    }
  }
};
var Ki = (e, n, r) => {
  const t = xt(T(e, r));
  return te(t, "root", n[r]), te(e, r, t), e;
}, _r = (e) => e.type === "file", Ye = (e) => typeof e == "function", Nt = (e) => {
  if (!br)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, kt = (e) => je(e), Or = (e) => e.type === "radio", Ft = (e) => e instanceof RegExp;
const Vr = {
  value: !1,
  isValid: !1
}, Hr = { value: !0, isValid: !0 };
var zn = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !oe(e[0].attributes.value) ? oe(e[0].value) || e[0].value === "" ? Hr : { value: e[0].value, isValid: !0 } : Hr
    ) : Vr;
  }
  return Vr;
};
const Ir = {
  isValid: !1,
  value: null
};
var Rn = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, Ir) : Ir;
function Ur(e, n, r = "validate") {
  if (kt(e) || Array.isArray(e) && e.every(kt) || Ne(e) && !e)
    return {
      type: r,
      message: kt(e) ? e : "",
      ref: n
    };
}
var tt = (e) => le(e) && !Ft(e) ? e : {
  value: e,
  message: ""
}, $r = async (e, n, r, t, i) => {
  const { ref: s, refs: o, required: a, maxLength: l, minLength: c, min: d, max: h, pattern: p, validate: g, name: m, valueAsNumber: S, mount: k, disabled: R } = e._f, b = T(n, m);
  if (!k || R)
    return {};
  const z = o ? o[0] : s, N = (E) => {
    t && z.reportValidity && (z.setCustomValidity(Ne(E) ? "" : E || ""), z.reportValidity());
  }, F = {}, G = Or(s), $ = St(s), V = G || $, W = (S || _r(s)) && oe(s.value) && oe(b) || Nt(s) && s.value === "" || b === "" || Array.isArray(b) && !b.length, U = En.bind(null, m, r, F), Y = (E, A, H, ee = Ue.maxLength, K = Ue.minLength) => {
    const Q = E ? A : H;
    F[m] = {
      type: E ? ee : K,
      message: Q,
      ref: s,
      ...U(E ? ee : K, Q)
    };
  };
  if (i ? !Array.isArray(b) || !b.length : a && (!V && (W || we(b)) || Ne(b) && !b || $ && !zn(o).isValid || G && !Rn(o).isValid)) {
    const { value: E, message: A } = kt(a) ? { value: !!a, message: a } : tt(a);
    if (E && (F[m] = {
      type: Ue.required,
      message: A,
      ref: z,
      ...U(Ue.required, A)
    }, !r))
      return N(A), F;
  }
  if (!W && (!we(d) || !we(h))) {
    let E, A;
    const H = tt(h), ee = tt(d);
    if (!we(b) && !isNaN(b)) {
      const K = s.valueAsNumber || b && +b;
      we(H.value) || (E = K > H.value), we(ee.value) || (A = K < ee.value);
    } else {
      const K = s.valueAsDate || new Date(b), Q = (Z) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Z), J = s.type == "time", se = s.type == "week";
      je(H.value) && b && (E = J ? Q(b) > Q(H.value) : se ? b > H.value : K > new Date(H.value)), je(ee.value) && b && (A = J ? Q(b) < Q(ee.value) : se ? b < ee.value : K < new Date(ee.value));
    }
    if ((E || A) && (Y(!!E, H.message, ee.message, Ue.max, Ue.min), !r))
      return N(F[m].message), F;
  }
  if ((l || c) && !W && (je(b) || i && Array.isArray(b))) {
    const E = tt(l), A = tt(c), H = !we(E.value) && b.length > +E.value, ee = !we(A.value) && b.length < +A.value;
    if ((H || ee) && (Y(H, E.message, A.message), !r))
      return N(F[m].message), F;
  }
  if (p && !W && je(b)) {
    const { value: E, message: A } = tt(p);
    if (Ft(E) && !b.match(E) && (F[m] = {
      type: Ue.pattern,
      message: A,
      ref: s,
      ...U(Ue.pattern, A)
    }, !r))
      return N(A), F;
  }
  if (g) {
    if (Ye(g)) {
      const E = await g(b, n), A = Ur(E, z);
      if (A && (F[m] = {
        ...A,
        ...U(Ue.validate, A.message)
      }, !r))
        return N(A.message), F;
    } else if (le(g)) {
      let E = {};
      for (const A in g) {
        if (!ke(E) && !r)
          break;
        const H = Ur(await g[A](b, n), z, A);
        H && (E = {
          ...H,
          ...U(A, H.message)
        }, N(H.message), r && (F[m] = E));
      }
      if (!ke(E) && (F[m] = {
        ref: z,
        ...E
      }, !r))
        return F;
    }
  }
  return N(!0), F;
};
function Ji(e, n) {
  const r = n.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = oe(e) ? t++ : e[n[t++]];
  return e;
}
function Zi(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !oe(e[n]))
      return !1;
  return !0;
}
function he(e, n) {
  const r = Array.isArray(n) ? n : xr(n) ? [n] : Dn(n), t = r.length === 1 ? e : Ji(e, r), i = r.length - 1, s = r[i];
  return t && delete t[s], i !== 0 && (le(t) && ke(t) || Array.isArray(t) && Zi(t)) && he(e, r.slice(0, -1)), e;
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
}, Lt = (e) => we(e) || !mn(e);
function Xe(e, n) {
  if (Lt(e) || Lt(n))
    return e === n;
  if (nt(e) && nt(n))
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
      if (nt(s) && nt(o) || le(s) && le(o) || Array.isArray(s) && Array.isArray(o) ? !Xe(s, o) : s !== o)
        return !1;
    }
  }
  return !0;
}
var Pn = (e) => e.type === "select-multiple", es = (e) => Or(e) || St(e), Jt = (e) => Nt(e) && e.isConnected, Tn = (e) => {
  for (const n in e)
    if (Ye(e[n]))
      return !0;
  return !1;
};
function Wt(e, n = {}) {
  const r = Array.isArray(e);
  if (le(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || le(e[t]) && !Tn(e[t]) ? (n[t] = Array.isArray(e[t]) ? [] : {}, Wt(e[t], n[t])) : we(e[t]) || (n[t] = !0);
  return n;
}
function Mn(e, n, r) {
  const t = Array.isArray(e);
  if (le(e) || t)
    for (const i in e)
      Array.isArray(e[i]) || le(e[i]) && !Tn(e[i]) ? oe(n) || Lt(r[i]) ? r[i] = Array.isArray(e[i]) ? Wt(e[i], []) : { ...Wt(e[i]) } : Mn(e[i], we(n) ? {} : n[i], r[i]) : r[i] = !Xe(e[i], n[i]);
  return r;
}
var Ot = (e, n) => Mn(e, n, Wt(n)), kn = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: t }) => oe(e) ? e : n ? e === "" ? NaN : e && +e : r && je(e) ? new Date(e) : t ? t(e) : e;
function Zt(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return _r(n) ? n.files : Or(n) ? Rn(e.refs).value : Pn(n) ? [...n.selectedOptions].map(({ value: r }) => r) : St(n) ? zn(e.refs).value : kn(oe(n.value) ? e.ref.value : n.value, e);
}
var ts = (e, n, r, t) => {
  const i = {};
  for (const s of e) {
    const o = T(n, s);
    o && te(i, s, o._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: t
  };
}, ct = (e) => oe(e) ? e : Ft(e) ? e.source : le(e) ? Ft(e.value) ? e.value.source : e.value : e, rs = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function qr(e, n, r) {
  const t = T(e, r);
  if (t || xr(r))
    return {
      error: t,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const s = i.join("."), o = T(n, s), a = T(e, s);
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
var ns = (e, n, r, t, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(n || e) : (r ? t.isOnBlur : i.isOnBlur) ? !e : (r ? t.isOnChange : i.isOnChange) ? e : !0, is = (e, n) => !xt(T(e, n)).length && he(e, n);
const ss = {
  mode: Fe.onSubmit,
  reValidateMode: Fe.onChange,
  shouldFocusError: !0
};
function os(e = {}, n) {
  let r = {
    ...ss,
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
  }, i = {}, s = le(r.values) || le(r.defaultValues) ? xe(r.values || r.defaultValues) || {} : {}, o = r.shouldUnregister ? {} : xe(s), a = {
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
  }, g = Br(r.mode), m = Br(r.reValidateMode), S = r.criteriaMode === Fe.all, k = (u) => (f) => {
    clearTimeout(d), d = setTimeout(u, f);
  }, R = async (u) => {
    if (h.isValid || u) {
      const f = r.resolver ? ke((await W()).errors) : await Y(i, !0);
      f !== t.isValid && p.state.next({
        isValid: f
      });
    }
  }, b = (u) => h.isValidating && p.state.next({
    isValidating: u
  }), z = (u, f = [], y, C, P = !0, _ = !0) => {
    if (C && y) {
      if (a.action = !0, _ && Array.isArray(T(i, u))) {
        const j = y(T(i, u), C.argA, C.argB);
        P && te(i, u, j);
      }
      if (_ && Array.isArray(T(t.errors, u))) {
        const j = y(T(t.errors, u), C.argA, C.argB);
        P && te(t.errors, u, j), is(t.errors, u);
      }
      if (h.touchedFields && _ && Array.isArray(T(t.touchedFields, u))) {
        const j = y(T(t.touchedFields, u), C.argA, C.argB);
        P && te(t.touchedFields, u, j);
      }
      h.dirtyFields && (t.dirtyFields = Ot(s, o)), p.state.next({
        name: u,
        isDirty: A(u, f),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      te(o, u, f);
  }, N = (u, f) => {
    te(t.errors, u, f), p.state.next({
      errors: t.errors
    });
  }, F = (u) => {
    t.errors = u, p.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, G = (u, f, y, C) => {
    const P = T(i, u);
    if (P) {
      const _ = T(o, u, oe(y) ? T(s, u) : y);
      oe(_) || C && C.defaultChecked || f ? te(o, u, f ? _ : Zt(P._f)) : K(u, _), a.mount && R();
    }
  }, $ = (u, f, y, C, P) => {
    let _ = !1, j = !1;
    const ie = {
      name: u
    }, ce = !!(T(i, u) && T(i, u)._f.disabled);
    if (!y || C) {
      h.isDirty && (j = t.isDirty, t.isDirty = ie.isDirty = A(), _ = j !== ie.isDirty);
      const We = ce || Xe(T(s, u), f);
      j = !!(!ce && T(t.dirtyFields, u)), We || ce ? he(t.dirtyFields, u) : te(t.dirtyFields, u, !0), ie.dirtyFields = t.dirtyFields, _ = _ || h.dirtyFields && j !== !We;
    }
    if (y) {
      const We = T(t.touchedFields, u);
      We || (te(t.touchedFields, u, y), ie.touchedFields = t.touchedFields, _ = _ || h.touchedFields && We !== y);
    }
    return _ && P && p.state.next(ie), _ ? ie : {};
  }, V = (u, f, y, C) => {
    const P = T(t.errors, u), _ = h.isValid && Ne(f) && t.isValid !== f;
    if (e.delayError && y ? (c = k(() => N(u, y)), c(e.delayError)) : (clearTimeout(d), c = null, y ? te(t.errors, u, y) : he(t.errors, u)), (y ? !Xe(P, y) : P) || !ke(C) || _) {
      const j = {
        ...C,
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
  }, W = async (u) => r.resolver(o, r.context, ts(u || l.mount, i, r.criteriaMode, r.shouldUseNativeValidation)), U = async (u) => {
    const { errors: f } = await W(u);
    if (u)
      for (const y of u) {
        const C = T(f, y);
        C ? te(t.errors, y, C) : he(t.errors, y);
      }
    else
      t.errors = f;
    return f;
  }, Y = async (u, f, y = {
    valid: !0
  }) => {
    for (const C in u) {
      const P = u[C];
      if (P) {
        const { _f: _, ...j } = P;
        if (_) {
          const ie = l.array.has(_.name), ce = await $r(P, o, S, r.shouldUseNativeValidation && !f, ie);
          if (ce[_.name] && (y.valid = !1, f))
            break;
          !f && (T(ce, _.name) ? ie ? Ki(t.errors, ce, _.name) : te(t.errors, _.name, ce[_.name]) : he(t.errors, _.name));
        }
        j && await Y(j, f, y);
      }
    }
    return y.valid;
  }, E = () => {
    for (const u of l.unMount) {
      const f = T(i, u);
      f && (f._f.refs ? f._f.refs.every((y) => !Jt(y)) : !Jt(f._f.ref)) && L(u);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, A = (u, f) => (u && f && te(o, u, f), !Xe(v(), s)), H = (u, f, y) => On(u, l, {
    ...a.mount ? o : oe(f) ? s : je(u) ? { [u]: f } : f
  }, y, f), ee = (u) => xt(T(a.mount ? o : s, u, e.shouldUnregister ? T(s, u, []) : [])), K = (u, f, y = {}) => {
    const C = T(i, u);
    let P = f;
    if (C) {
      const _ = C._f;
      _ && (!_.disabled && te(o, u, kn(f, _)), P = Nt(_.ref) && we(f) ? "" : f, Pn(_.ref) ? [..._.ref.options].forEach((j) => j.selected = P.includes(j.value)) : _.refs ? St(_.ref) ? _.refs.length > 1 ? _.refs.forEach((j) => (!j.defaultChecked || !j.disabled) && (j.checked = Array.isArray(P) ? !!P.find((ie) => ie === j.value) : P === j.value)) : _.refs[0] && (_.refs[0].checked = !!P) : _.refs.forEach((j) => j.checked = j.value === P) : _r(_.ref) ? _.ref.value = "" : (_.ref.value = P, _.ref.type || p.values.next({
        name: u,
        values: { ...o }
      })));
    }
    (y.shouldDirty || y.shouldTouch) && $(u, P, y.shouldTouch, y.shouldDirty, !0), y.shouldValidate && ne(u);
  }, Q = (u, f, y) => {
    for (const C in f) {
      const P = f[C], _ = `${u}.${C}`, j = T(i, _);
      (l.array.has(u) || !Lt(P) || j && !j._f) && !nt(P) ? Q(_, P, y) : K(_, P, y);
    }
  }, J = (u, f, y = {}) => {
    const C = T(i, u), P = l.array.has(u), _ = xe(f);
    te(o, u, _), P ? (p.array.next({
      name: u,
      values: { ...o }
    }), (h.isDirty || h.dirtyFields) && y.shouldDirty && p.state.next({
      name: u,
      dirtyFields: Ot(s, o),
      isDirty: A(u, _)
    })) : C && !C._f && !we(_) ? Q(u, _, y) : K(u, _, y), jr(u, l) && p.state.next({ ...t }), p.values.next({
      name: u,
      values: { ...o }
    }), !a.mount && n();
  }, se = async (u) => {
    const f = u.target;
    let y = f.name, C = !0;
    const P = T(i, y), _ = () => f.type ? Zt(P._f) : bn(u), j = (ie) => {
      C = Number.isNaN(ie) || ie === T(o, y, ie);
    };
    if (P) {
      let ie, ce;
      const We = _(), Ze = u.type === At.BLUR || u.type === At.FOCUS_OUT, ri = !rs(P._f) && !r.resolver && !T(t.errors, y) && !P._f.deps || ns(Ze, T(t.touchedFields, y), t.isSubmitted, m, g), Xt = jr(y, l, Ze);
      te(o, y, We), Ze ? (P._f.onBlur && P._f.onBlur(u), c && c(0)) : P._f.onChange && P._f.onChange(u);
      const Qt = $(y, We, Ze, !1), ni = !ke(Qt) || Xt;
      if (!Ze && p.values.next({
        name: y,
        type: u.type,
        values: { ...o }
      }), ri)
        return h.isValid && R(), ni && p.state.next({ name: y, ...Xt ? {} : Qt });
      if (!Ze && Xt && p.state.next({ ...t }), b(!0), r.resolver) {
        const { errors: kr } = await W([y]);
        if (j(We), C) {
          const ii = qr(t.errors, i, y), Cr = qr(kr, i, ii.name || y);
          ie = Cr.error, y = Cr.name, ce = ke(kr);
        }
      } else
        ie = (await $r(P, o, S, r.shouldUseNativeValidation))[y], j(We), C && (ie ? ce = !1 : h.isValid && (ce = await Y(i, !0)));
      C && (P._f.deps && ne(P._f.deps), V(y, ce, ie, Qt));
    }
  }, Z = (u, f) => {
    if (T(t.errors, f) && u.focus)
      return u.focus(), 1;
  }, ne = async (u, f = {}) => {
    let y, C;
    const P = Mt(u);
    if (b(!0), r.resolver) {
      const _ = await U(oe(u) ? u : P);
      y = ke(_), C = u ? !P.some((j) => T(_, j)) : y;
    } else
      u ? (C = (await Promise.all(P.map(async (_) => {
        const j = T(i, _);
        return await Y(j && j._f ? { [_]: j } : j);
      }))).every(Boolean), !(!C && !t.isValid) && R()) : C = y = await Y(i);
    return p.state.next({
      ...!je(u) || h.isValid && y !== t.isValid ? {} : { name: u },
      ...r.resolver || !u ? { isValid: y } : {},
      errors: t.errors,
      isValidating: !1
    }), f.shouldFocus && !C && pt(i, Z, u ? P : l.mount), C;
  }, v = (u) => {
    const f = {
      ...s,
      ...a.mount ? o : {}
    };
    return oe(u) ? f : je(u) ? T(f, u) : u.map((y) => T(f, y));
  }, w = (u, f) => ({
    invalid: !!T((f || t).errors, u),
    isDirty: !!T((f || t).dirtyFields, u),
    isTouched: !!T((f || t).touchedFields, u),
    error: T((f || t).errors, u)
  }), x = (u) => {
    u && Mt(u).forEach((f) => he(t.errors, f)), p.state.next({
      errors: u ? t.errors : {}
    });
  }, O = (u, f, y) => {
    const C = (T(i, u, { _f: {} })._f || {}).ref;
    te(t.errors, u, {
      ...f,
      ref: C
    }), p.state.next({
      name: u,
      errors: t.errors,
      isValid: !1
    }), y && y.shouldFocus && C && C.focus && C.focus();
  }, D = (u, f) => Ye(u) ? p.values.subscribe({
    next: (y) => u(H(void 0, f), y)
  }) : H(u, f, !0), L = (u, f = {}) => {
    for (const y of u ? Mt(u) : l.mount)
      l.mount.delete(y), l.array.delete(y), f.keepValue || (he(i, y), he(o, y)), !f.keepError && he(t.errors, y), !f.keepDirty && he(t.dirtyFields, y), !f.keepTouched && he(t.touchedFields, y), !r.shouldUnregister && !f.keepDefaultValue && he(s, y);
    p.values.next({
      values: { ...o }
    }), p.state.next({
      ...t,
      ...f.keepDirty ? { isDirty: A() } : {}
    }), !f.keepIsValid && R();
  }, q = ({ disabled: u, name: f, field: y, fields: C, value: P }) => {
    if (Ne(u)) {
      const _ = u ? void 0 : oe(P) ? Zt(y ? y._f : T(C, f)._f) : P;
      te(o, f, _), $(f, _, !1, !1, !0);
    }
  }, I = (u, f = {}) => {
    let y = T(i, u);
    const C = Ne(f.disabled);
    return te(i, u, {
      ...y || {},
      _f: {
        ...y && y._f ? y._f : { ref: { name: u } },
        name: u,
        mount: !0,
        ...f
      }
    }), l.mount.add(u), y ? q({
      field: y,
      disabled: f.disabled,
      name: u,
      value: f.value
    }) : G(u, !0, f.value), {
      ...C ? { disabled: f.disabled } : {},
      ...r.progressive ? {
        required: !!f.required,
        min: ct(f.min),
        max: ct(f.max),
        minLength: ct(f.minLength),
        maxLength: ct(f.maxLength),
        pattern: ct(f.pattern)
      } : {},
      name: u,
      onChange: se,
      onBlur: se,
      ref: (P) => {
        if (P) {
          I(u, f), y = T(i, u);
          const _ = oe(P.value) && P.querySelectorAll && P.querySelectorAll("input,select,textarea")[0] || P, j = es(_), ie = y._f.refs || [];
          if (j ? ie.find((ce) => ce === _) : _ === y._f.ref)
            return;
          te(i, u, {
            _f: {
              ...y._f,
              ...j ? {
                refs: [
                  ...ie.filter(Jt),
                  _,
                  ...Array.isArray(T(s, u)) ? [{}] : []
                ],
                ref: { type: _.type, name: u }
              } : { ref: _ }
            }
          }), G(u, !1, void 0, _);
        } else
          y = T(i, u, {}), y._f && (y._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(wn(l.array, u) && a.action) && l.unMount.add(u);
      }
    };
  }, X = () => r.shouldFocusError && pt(i, Z, l.mount), ye = (u) => {
    Ne(u) && (p.state.next({ disabled: u }), pt(i, (f, y) => {
      let C = u;
      const P = T(i, y);
      P && Ne(P._f.disabled) && (C || (C = P._f.disabled)), f.disabled = C;
    }, 0, !1));
  }, pe = (u, f) => async (y) => {
    let C;
    y && (y.preventDefault && y.preventDefault(), y.persist && y.persist());
    let P = xe(o);
    if (p.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: _, values: j } = await W();
      t.errors = _, P = j;
    } else
      await Y(i);
    if (he(t.errors, "root"), ke(t.errors)) {
      p.state.next({
        errors: {}
      });
      try {
        await u(P, y);
      } catch (_) {
        C = _;
      }
    } else
      f && await f({ ...t.errors }, y), X(), setTimeout(X);
    if (p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: ke(t.errors) && !C,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), C)
      throw C;
  }, me = (u, f = {}) => {
    T(i, u) && (oe(f.defaultValue) ? J(u, xe(T(s, u))) : (J(u, f.defaultValue), te(s, u, xe(f.defaultValue))), f.keepTouched || he(t.touchedFields, u), f.keepDirty || (he(t.dirtyFields, u), t.isDirty = f.defaultValue ? A(u, xe(T(s, u))) : A()), f.keepError || (he(t.errors, u), h.isValid && R()), p.state.next({ ...t }));
  }, Se = (u, f = {}) => {
    const y = u ? xe(u) : s, C = xe(y), P = u && !ke(u) ? C : s;
    if (f.keepDefaultValues || (s = y), !f.keepValues) {
      if (f.keepDirtyValues)
        for (const _ of l.mount)
          T(t.dirtyFields, _) ? te(P, _, T(o, _)) : J(_, T(P, _));
      else {
        if (br && oe(u))
          for (const _ of l.mount) {
            const j = T(i, _);
            if (j && j._f) {
              const ie = Array.isArray(j._f.refs) ? j._f.refs[0] : j._f.ref;
              if (Nt(ie)) {
                const ce = ie.closest("form");
                if (ce) {
                  ce.reset();
                  break;
                }
              }
            }
          }
        i = {};
      }
      o = e.shouldUnregister ? f.keepDefaultValues ? xe(s) : {} : xe(P), p.array.next({
        values: { ...P }
      }), p.values.next({
        values: { ...P }
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
  }, Re = (u, f) => Se(Ye(u) ? u(o) : u, f);
  return {
    control: {
      register: I,
      unregister: L,
      getFieldState: w,
      handleSubmit: pe,
      setError: O,
      _executeSchema: W,
      _getWatch: H,
      _getDirty: A,
      _updateValid: R,
      _removeUnmounted: E,
      _updateFieldArray: z,
      _updateDisabledField: q,
      _getFieldArray: ee,
      _reset: Se,
      _resetDefaultValues: () => Ye(r.defaultValues) && r.defaultValues().then((u) => {
        Re(u, r.resetOptions), p.state.next({
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
      _setErrors: F,
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
    trigger: ne,
    register: I,
    handleSubmit: pe,
    watch: D,
    setValue: J,
    getValues: v,
    reset: Re,
    resetField: me,
    clearErrors: x,
    unregister: L,
    setError: O,
    setFocus: (u, f = {}) => {
      const y = T(i, u), C = y && y._f;
      if (C) {
        const P = C.refs ? C.refs[0] : C.ref;
        P.focus && (P.focus(), f.shouldSelect && P.select());
      }
    },
    getFieldState: w
  };
}
function as(e = {}) {
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
    ...os(e, () => i((o) => ({ ...o }))),
    formState: t
  });
  const s = n.current.control;
  return s._options = e, Sr({
    subject: s._subjects.state,
    next: (o) => {
      xn(o, s._proxyFormState, s._updateFormState, !0) && i({ ...s._formState });
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
  }, [e.shouldUnregister, s]), n.current.formState = Sn(t, s), n.current;
}
const us = ({
  render: e,
  ...n
}) => /* @__PURE__ */ B(Gi, { ...n, render: ({
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
} }), ya = us;
var Cn = {};
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
})(Cn);
const ls = ({
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
    }, icon: Cn.faTriangleExclamation }),
    e
  ] })
] })), Ht = M.forwardRef(ls);
var Yr = function(e, n, r) {
  if (e && "reportValidity" in e) {
    var t = T(r, n);
    e.setCustomValidity(t && t.message || ""), e.reportValidity();
  }
}, An = function(e, n) {
  var r = function(i) {
    var s = n.fields[i];
    s && s.ref && "reportValidity" in s.ref ? Yr(s.ref, i, e) : s.refs && s.refs.forEach(function(o) {
      return Yr(o, i, e);
    });
  };
  for (var t in n.fields)
    r(t);
}, cs = function(e, n) {
  n.shouldUseNativeValidation && An(e, n);
  var r = {};
  for (var t in e) {
    var i = T(n.fields, t), s = Object.assign(e[t] || {}, { ref: i && i.ref });
    if (fs(n.names || Object.keys(e), t)) {
      var o = Object.assign({}, T(r, t));
      te(o, "root", s), te(r, t, o);
    } else
      te(r, t, s);
  }
  return r;
}, fs = function(e, n) {
  return e.some(function(r) {
    return r.startsWith(n + ".");
  });
}, ds = function(e, n) {
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
      r[o] = En(o, n, r, i, c ? [].concat(c, t.message) : t.message);
    }
    e.shift();
  }
  return r;
}, ps = function(e, n, r) {
  return r === void 0 && (r = {}), function(t, i, s) {
    try {
      return Promise.resolve(function(o, a) {
        try {
          var l = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](t, n)).then(function(c) {
            return s.shouldUseNativeValidation && An({}, s), { errors: {}, values: r.raw ? t : c };
          });
        } catch (c) {
          return a(c);
        }
        return l && l.then ? l.then(void 0, a) : l;
      }(0, function(o) {
        if (function(a) {
          return a.errors != null;
        }(o))
          return { values: {}, errors: cs(ds(o.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw o;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
};
const hs = ({
  schema: e,
  mode: n = "onChange",
  reValidateMode: r = "onChange",
  onValid: t,
  onInvalid: i,
  ...s
} = {}) => {
  const o = as({
    mode: n,
    reValidateMode: r,
    resolver: e ? ps(e) : void 0,
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
}, ma = ({
  onValid: e,
  context: n,
  mutation: r,
  defaultValues: t,
  schema: i,
  transformSendData: s,
  ...o
}) => {
  const a = hs({
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
var Nn = {};
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
})(Nn);
var It = { exports: {} }, Fn = {};
function Ln(e) {
  var n, r, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (r = Ln(e[n])) && (t && (t += " "), t += r);
    else
      for (n in e)
        e[n] && (t && (t += " "), t += n);
  return t;
}
function Xr() {
  for (var e, n, r = 0, t = ""; r < arguments.length; )
    (e = arguments[r++]) && (n = Ln(e)) && (t && (t += " "), t += n);
  return t;
}
const gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Xr,
  default: Xr
}, Symbol.toStringTag, { value: "Module" })), vs = /* @__PURE__ */ wi(gs);
var ae = {}, Ve = {};
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.dontSetMe = Ss;
Ve.findInArray = ys;
Ve.int = ws;
Ve.isFunction = ms;
Ve.isNum = bs;
function ys(e, n) {
  for (var r = 0, t = e.length; r < t; r++)
    if (n.apply(n, [e[r], r, e]))
      return e[r];
}
function ms(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function bs(e) {
  return typeof e == "number" && !isNaN(e);
}
function ws(e) {
  return parseInt(e, 10);
}
function Ss(e, n, r) {
  if (e[n])
    return new Error("Invalid prop ".concat(n, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.browserPrefixToKey = Bn;
Ke.browserPrefixToStyle = xs;
Ke.default = void 0;
Ke.getPrefix = Wn;
var er = ["Moz", "Webkit", "O", "ms"];
function Wn() {
  var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var t = (e = window.document) === null || e === void 0 || (n = e.documentElement) === null || n === void 0 ? void 0 : n.style;
  if (!t || r in t)
    return "";
  for (var i = 0; i < er.length; i++)
    if (Bn(r, er[i]) in t)
      return er[i];
  return "";
}
function Bn(e, n) {
  return n ? "".concat(n).concat(_s(e)) : e;
}
function xs(e, n) {
  return n ? "-".concat(n.toLowerCase(), "-").concat(e) : e;
}
function _s(e) {
  for (var n = "", r = !0, t = 0; t < e.length; t++)
    r ? (n += e[t].toUpperCase(), r = !1) : e[t] === "-" ? r = !0 : n += e[t];
  return n;
}
var Os = Wn();
Ke.default = Os;
function cr(e) {
  "@babel/helpers - typeof";
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, cr(e);
}
Object.defineProperty(ae, "__esModule", {
  value: !0
});
ae.addClassName = Un;
ae.addEvent = zs;
ae.addUserSelectStyles = Ws;
ae.createCSSTransform = As;
ae.createSVGTransform = Ns;
ae.getTouch = Fs;
ae.getTouchIdentifier = Ls;
ae.getTranslation = Dr;
ae.innerHeight = Ms;
ae.innerWidth = ks;
ae.matchesSelector = In;
ae.matchesSelectorAndParentsTo = Es;
ae.offsetXYFromParent = Cs;
ae.outerHeight = Ps;
ae.outerWidth = Ts;
ae.removeClassName = $n;
ae.removeEvent = Rs;
ae.removeUserSelectStyles = Bs;
var ze = Ve, Qr = Ds(Ke);
function jn(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (jn = function(i) {
    return i ? r : n;
  })(e);
}
function Ds(e, n) {
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
function Gr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Vn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Gr(Object(r), !0).forEach(function(t) {
      Hn(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Hn(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
var Dt = "";
function In(e, n) {
  return Dt || (Dt = (0, ze.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, ze.isFunction)(e[r]);
  })), (0, ze.isFunction)(e[Dt]) ? e[Dt](n) : !1;
}
function Es(e, n, r) {
  var t = e;
  do {
    if (In(t, n))
      return !0;
    if (t === r)
      return !1;
    t = t.parentNode;
  } while (t);
  return !1;
}
function zs(e, n, r, t) {
  if (e) {
    var i = Vn({
      capture: !0
    }, t);
    e.addEventListener ? e.addEventListener(n, r, i) : e.attachEvent ? e.attachEvent("on" + n, r) : e["on" + n] = r;
  }
}
function Rs(e, n, r, t) {
  if (e) {
    var i = Vn({
      capture: !0
    }, t);
    e.removeEventListener ? e.removeEventListener(n, r, i) : e.detachEvent ? e.detachEvent("on" + n, r) : e["on" + n] = null;
  }
}
function Ps(e) {
  var n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n += (0, ze.int)(r.borderTopWidth), n += (0, ze.int)(r.borderBottomWidth), n;
}
function Ts(e) {
  var n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n += (0, ze.int)(r.borderLeftWidth), n += (0, ze.int)(r.borderRightWidth), n;
}
function Ms(e) {
  var n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n -= (0, ze.int)(r.paddingTop), n -= (0, ze.int)(r.paddingBottom), n;
}
function ks(e) {
  var n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n -= (0, ze.int)(r.paddingLeft), n -= (0, ze.int)(r.paddingRight), n;
}
function Cs(e, n, r) {
  var t = n === n.ownerDocument.body, i = t ? {
    left: 0,
    top: 0
  } : n.getBoundingClientRect(), s = (e.clientX + n.scrollLeft - i.left) / r, o = (e.clientY + n.scrollTop - i.top) / r;
  return {
    x: s,
    y: o
  };
}
function As(e, n) {
  var r = Dr(e, n, "px");
  return Hn({}, (0, Qr.browserPrefixToKey)("transform", Qr.default), r);
}
function Ns(e, n) {
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
function Fs(e, n) {
  return e.targetTouches && (0, ze.findInArray)(e.targetTouches, function(r) {
    return n === r.identifier;
  }) || e.changedTouches && (0, ze.findInArray)(e.changedTouches, function(r) {
    return n === r.identifier;
  });
}
function Ls(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Ws(e) {
  if (e) {
    var n = e.getElementById("react-draggable-style-el");
    n || (n = e.createElement("style"), n.type = "text/css", n.id = "react-draggable-style-el", n.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, n.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(n)), e.body && Un(e.body, "react-draggable-transparent-selection");
  }
}
function Bs(e) {
  if (e)
    try {
      if (e.body && $n(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var n = (e.defaultView || window).getSelection();
        n && n.type !== "Caret" && n.removeAllRanges();
      }
    } catch {
    }
}
function Un(e, n) {
  e.classList ? e.classList.add(n) : e.className.match(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"))) || (e.className += " ".concat(n));
}
function $n(e, n) {
  e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"), "g"), "");
}
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.canDragX = Hs;
He.canDragY = Is;
He.createCoreData = $s;
He.createDraggableData = qs;
He.getBoundPosition = js;
He.getControlPosition = Us;
He.snapToGrid = Vs;
var Oe = Ve, it = ae;
function js(e, n, r) {
  if (!e.props.bounds)
    return [n, r];
  var t = e.props.bounds;
  t = typeof t == "string" ? t : Ys(t);
  var i = Er(e);
  if (typeof t == "string") {
    var s = i.ownerDocument, o = s.defaultView, a;
    if (t === "parent" ? a = i.parentNode : a = s.querySelector(t), !(a instanceof o.HTMLElement))
      throw new Error('Bounds selector "' + t + '" could not find an element.');
    var l = a, c = o.getComputedStyle(i), d = o.getComputedStyle(l);
    t = {
      left: -i.offsetLeft + (0, Oe.int)(d.paddingLeft) + (0, Oe.int)(c.marginLeft),
      top: -i.offsetTop + (0, Oe.int)(d.paddingTop) + (0, Oe.int)(c.marginTop),
      right: (0, it.innerWidth)(l) - (0, it.outerWidth)(i) - i.offsetLeft + (0, Oe.int)(d.paddingRight) - (0, Oe.int)(c.marginRight),
      bottom: (0, it.innerHeight)(l) - (0, it.outerHeight)(i) - i.offsetTop + (0, Oe.int)(d.paddingBottom) - (0, Oe.int)(c.marginBottom)
    };
  }
  return (0, Oe.isNum)(t.right) && (n = Math.min(n, t.right)), (0, Oe.isNum)(t.bottom) && (r = Math.min(r, t.bottom)), (0, Oe.isNum)(t.left) && (n = Math.max(n, t.left)), (0, Oe.isNum)(t.top) && (r = Math.max(r, t.top)), [n, r];
}
function Vs(e, n, r) {
  var t = Math.round(n / e[0]) * e[0], i = Math.round(r / e[1]) * e[1];
  return [t, i];
}
function Hs(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Is(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Us(e, n, r) {
  var t = typeof n == "number" ? (0, it.getTouch)(e, n) : null;
  if (typeof n == "number" && !t)
    return null;
  var i = Er(r), s = r.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, it.offsetXYFromParent)(t || e, s, r.props.scale);
}
function $s(e, n, r) {
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
function qs(e, n) {
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
function Ys(e) {
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
$t.default = Xs;
function Xs() {
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
var tr = Gs(M), _e = zr(gn), Qs = zr(Ct), ge = ae, $e = He, rr = Ve, ft = zr($t);
function zr(e) {
  return e && e.__esModule ? e : { default: e };
}
function qn(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (qn = function(i) {
    return i ? r : n;
  })(e);
}
function Gs(e, n) {
  if (!n && e && e.__esModule)
    return e;
  if (e === null || Bt(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = qn(n);
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
  return eo(e) || Zs(e, n) || Js(e, n) || Ks();
}
function Ks() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Js(e, n) {
  if (e) {
    if (typeof e == "string")
      return Jr(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Jr(e, n);
  }
}
function Jr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function Zs(e, n) {
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
function eo(e) {
  if (Array.isArray(e))
    return e;
}
function to(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Zr(e, n) {
  for (var r = 0; r < n.length; r++) {
    var t = n[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function ro(e, n, r) {
  return n && Zr(e.prototype, n), r && Zr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function no(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && fr(e, n);
}
function fr(e, n) {
  return fr = Object.setPrototypeOf || function(t, i) {
    return t.__proto__ = i, t;
  }, fr(e, n);
}
function io(e) {
  var n = oo();
  return function() {
    var t = jt(e), i;
    if (n) {
      var s = jt(this).constructor;
      i = Reflect.construct(t, arguments, s);
    } else
      i = t.apply(this, arguments);
    return so(this, i);
  };
}
function so(e, n) {
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
function oo() {
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
function jt(e) {
  return jt = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jt(e);
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
  no(r, e);
  var n = io(r);
  function r() {
    var t;
    to(this, r);
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
          var h = c - t.state.lastX, p = d - t.state.lastY, g = (0, $e.snapToGrid)(t.props.grid, h, p), m = Kr(g, 2);
          if (h = m[0], p = m[1], !h && !p)
            return;
          c = t.state.lastX + h, d = t.state.lastY + p;
        }
        var S = (0, $e.createCoreData)(ve(t), c, d);
        (0, ft.default)("DraggableCore: handleDrag: %j", S);
        var k = t.props.onDrag(a, S);
        if (k === !1 || t.mounted === !1) {
          try {
            t.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var R = document.createEvent("MouseEvents");
            R.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(R);
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
            var h = c - t.state.lastX || 0, p = d - t.state.lastY || 0, g = (0, $e.snapToGrid)(t.props.grid, h, p), m = Kr(g, 2);
            h = m[0], p = m[1], c = t.state.lastX + h, d = t.state.lastY + p;
          }
          var S = (0, $e.createCoreData)(ve(t), c, d), k = t.props.onStop(a, S);
          if (k === !1 || t.mounted === !1)
            return !1;
          var R = t.findDOMNode();
          R && t.props.enableUserSelectHack && (0, ge.removeUserSelectStyles)(R.ownerDocument), (0, ft.default)("DraggableCore: handleDragStop: %j", S), t.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), R && ((0, ft.default)("DraggableCore: Removing handlers"), (0, ge.removeEvent)(R.ownerDocument, qe.move, t.handleDrag), (0, ge.removeEvent)(R.ownerDocument, qe.stop, t.handleDragStop));
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
  return ro(r, [{
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
      return (i = this.props) !== null && i !== void 0 && i.nodeRef ? (s = this.props) === null || s === void 0 || (o = s.nodeRef) === null || o === void 0 ? void 0 : o.current : Qs.default.findDOMNode(this);
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
  function n(v) {
    "@babel/helpers - typeof";
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
      return typeof w;
    } : function(w) {
      return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
    }, n(v);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return c.default;
    }
  }), e.default = void 0;
  var r = m(M), t = p(gn), i = p(Ct), s = p(vs), o = ae, a = He, l = Ve, c = p(Ut), d = p($t), h = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function p(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function g(v) {
    if (typeof WeakMap != "function")
      return null;
    var w = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (g = function(D) {
      return D ? x : w;
    })(v);
  }
  function m(v, w) {
    if (!w && v && v.__esModule)
      return v;
    if (v === null || n(v) !== "object" && typeof v != "function")
      return { default: v };
    var x = g(w);
    if (x && x.has(v))
      return x.get(v);
    var O = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in v)
      if (L !== "default" && Object.prototype.hasOwnProperty.call(v, L)) {
        var q = D ? Object.getOwnPropertyDescriptor(v, L) : null;
        q && (q.get || q.set) ? Object.defineProperty(O, L, q) : O[L] = v[L];
      }
    return O.default = v, x && x.set(v, O), O;
  }
  function S() {
    return S = Object.assign || function(v) {
      for (var w = 1; w < arguments.length; w++) {
        var x = arguments[w];
        for (var O in x)
          Object.prototype.hasOwnProperty.call(x, O) && (v[O] = x[O]);
      }
      return v;
    }, S.apply(this, arguments);
  }
  function k(v, w) {
    if (v == null)
      return {};
    var x = R(v, w), O, D;
    if (Object.getOwnPropertySymbols) {
      var L = Object.getOwnPropertySymbols(v);
      for (D = 0; D < L.length; D++)
        O = L[D], !(w.indexOf(O) >= 0) && Object.prototype.propertyIsEnumerable.call(v, O) && (x[O] = v[O]);
    }
    return x;
  }
  function R(v, w) {
    if (v == null)
      return {};
    var x = {}, O = Object.keys(v), D, L;
    for (L = 0; L < O.length; L++)
      D = O[L], !(w.indexOf(D) >= 0) && (x[D] = v[D]);
    return x;
  }
  function b(v, w) {
    var x = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(v);
      w && (O = O.filter(function(D) {
        return Object.getOwnPropertyDescriptor(v, D).enumerable;
      })), x.push.apply(x, O);
    }
    return x;
  }
  function z(v) {
    for (var w = 1; w < arguments.length; w++) {
      var x = arguments[w] != null ? arguments[w] : {};
      w % 2 ? b(Object(x), !0).forEach(function(O) {
        Z(v, O, x[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(x)) : b(Object(x)).forEach(function(O) {
        Object.defineProperty(v, O, Object.getOwnPropertyDescriptor(x, O));
      });
    }
    return v;
  }
  function N(v, w) {
    return W(v) || V(v, w) || G(v, w) || F();
  }
  function F() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function G(v, w) {
    if (v) {
      if (typeof v == "string")
        return $(v, w);
      var x = Object.prototype.toString.call(v).slice(8, -1);
      if (x === "Object" && v.constructor && (x = v.constructor.name), x === "Map" || x === "Set")
        return Array.from(v);
      if (x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))
        return $(v, w);
    }
  }
  function $(v, w) {
    (w == null || w > v.length) && (w = v.length);
    for (var x = 0, O = new Array(w); x < w; x++)
      O[x] = v[x];
    return O;
  }
  function V(v, w) {
    var x = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
    if (x != null) {
      var O = [], D = !0, L = !1, q, I;
      try {
        for (x = x.call(v); !(D = (q = x.next()).done) && (O.push(q.value), !(w && O.length === w)); D = !0)
          ;
      } catch (X) {
        L = !0, I = X;
      } finally {
        try {
          !D && x.return != null && x.return();
        } finally {
          if (L)
            throw I;
        }
      }
      return O;
    }
  }
  function W(v) {
    if (Array.isArray(v))
      return v;
  }
  function U(v, w) {
    if (!(v instanceof w))
      throw new TypeError("Cannot call a class as a function");
  }
  function Y(v, w) {
    for (var x = 0; x < w.length; x++) {
      var O = w[x];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(v, O.key, O);
    }
  }
  function E(v, w, x) {
    return w && Y(v.prototype, w), x && Y(v, x), Object.defineProperty(v, "prototype", { writable: !1 }), v;
  }
  function A(v, w) {
    if (typeof w != "function" && w !== null)
      throw new TypeError("Super expression must either be null or a function");
    v.prototype = Object.create(w && w.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), Object.defineProperty(v, "prototype", { writable: !1 }), w && H(v, w);
  }
  function H(v, w) {
    return H = Object.setPrototypeOf || function(O, D) {
      return O.__proto__ = D, O;
    }, H(v, w);
  }
  function ee(v) {
    var w = J();
    return function() {
      var O = se(v), D;
      if (w) {
        var L = se(this).constructor;
        D = Reflect.construct(O, arguments, L);
      } else
        D = O.apply(this, arguments);
      return K(this, D);
    };
  }
  function K(v, w) {
    if (w && (n(w) === "object" || typeof w == "function"))
      return w;
    if (w !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return Q(v);
  }
  function Q(v) {
    if (v === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return v;
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
  function se(v) {
    return se = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
      return x.__proto__ || Object.getPrototypeOf(x);
    }, se(v);
  }
  function Z(v, w, x) {
    return w in v ? Object.defineProperty(v, w, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : v[w] = x, v;
  }
  var ne = /* @__PURE__ */ function(v) {
    A(x, v);
    var w = ee(x);
    function x(O) {
      var D;
      return U(this, x), D = w.call(this, O), Z(Q(D), "onDragStart", function(L, q) {
        (0, d.default)("Draggable: onDragStart: %j", q);
        var I = D.props.onStart(L, (0, a.createDraggableData)(Q(D), q));
        if (I === !1)
          return !1;
        D.setState({
          dragging: !0,
          dragged: !0
        });
      }), Z(Q(D), "onDrag", function(L, q) {
        if (!D.state.dragging)
          return !1;
        (0, d.default)("Draggable: onDrag: %j", q);
        var I = (0, a.createDraggableData)(Q(D), q), X = {
          x: I.x,
          y: I.y
        };
        if (D.props.bounds) {
          var ye = X.x, pe = X.y;
          X.x += D.state.slackX, X.y += D.state.slackY;
          var me = (0, a.getBoundPosition)(Q(D), X.x, X.y), Se = N(me, 2), Re = Se[0], Le = Se[1];
          X.x = Re, X.y = Le, X.slackX = D.state.slackX + (ye - X.x), X.slackY = D.state.slackY + (pe - X.y), I.x = X.x, I.y = X.y, I.deltaX = X.x - D.state.x, I.deltaY = X.y - D.state.y;
        }
        var be = D.props.onDrag(L, I);
        if (be === !1)
          return !1;
        D.setState(X);
      }), Z(Q(D), "onDragStop", function(L, q) {
        if (!D.state.dragging)
          return !1;
        var I = D.props.onStop(L, (0, a.createDraggableData)(Q(D), q));
        if (I === !1)
          return !1;
        (0, d.default)("Draggable: onDragStop: %j", q);
        var X = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, ye = !!D.props.position;
        if (ye) {
          var pe = D.props.position, me = pe.x, Se = pe.y;
          X.x = me, X.y = Se;
        }
        D.setState(X);
      }), D.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: O.position ? O.position.x : O.defaultPosition.x,
        y: O.position ? O.position.y : O.defaultPosition.y,
        prevPropsPosition: z({}, O.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, O.position && !(O.onDrag || O.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), D;
    }
    return E(x, [{
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
        var D, L, q;
        return (D = (L = this.props) === null || L === void 0 || (q = L.nodeRef) === null || q === void 0 ? void 0 : q.current) !== null && D !== void 0 ? D : i.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var D, L = this.props;
        L.axis, L.bounds;
        var q = L.children, I = L.defaultPosition, X = L.defaultClassName, ye = L.defaultClassNameDragging, pe = L.defaultClassNameDragged, me = L.position, Se = L.positionOffset;
        L.scale;
        var Re = k(L, h), Le = {}, be = null, Ce = !!me, u = !Ce || this.state.dragging, f = me || I, y = {
          // Set left if horizontal drag is enabled
          x: (0, a.canDragX)(this) && u ? this.state.x : f.x,
          // Set top if vertical drag is enabled
          y: (0, a.canDragY)(this) && u ? this.state.y : f.y
        };
        this.state.isElementSVG ? be = (0, o.createSVGTransform)(y, Se) : Le = (0, o.createCSSTransform)(y, Se);
        var C = (0, s.default)(q.props.className || "", X, (D = {}, Z(D, ye, this.state.dragging), Z(D, pe, this.state.dragged), D));
        return /* @__PURE__ */ r.createElement(c.default, S({}, Re, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only(q), {
          className: C,
          style: z(z({}, q.props.style), Le),
          transform: be
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(D, L) {
          var q = D.position, I = L.prevPropsPosition;
          return q && (!I || q.x !== I.x || q.y !== I.y) ? ((0, d.default)("Draggable: getDerivedStateFromProps %j", {
            position: q,
            prevPropsPosition: I
          }), {
            x: q.x,
            y: q.y,
            prevPropsPosition: z({}, q)
          }) : null;
        }
      )
    }]), x;
  }(r.Component);
  e.default = ne, Z(ne, "displayName", "Draggable"), Z(ne, "propTypes", z(z({}, c.default.propTypes), {}, {
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
  })), Z(ne, "defaultProps", z(z({}, c.default.defaultProps), {}, {
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
var Yn = Fn, Xn = Yn.default, ao = Yn.DraggableCore;
It.exports = Xn;
It.exports.default = Xn;
It.exports.DraggableCore = ao;
var uo = It.exports;
const lo = /* @__PURE__ */ hn(uo);
var co = globalThis && globalThis.__extends || function() {
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
}(), Vt = globalThis && globalThis.__assign || function() {
  return Vt = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Vt.apply(this, arguments);
}, fo = {
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
}, po = (
  /** @class */
  function(e) {
    co(n, e);
    function n() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.onMouseDown = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r.onTouchStart = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r;
    }
    return n.prototype.render = function() {
      return M.createElement("div", { className: this.props.className || "", style: Vt(Vt({ position: "absolute", userSelect: "none" }, fo[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, n;
  }(M.PureComponent)
), Rr = { exports: {} };
function ho(e, n) {
  var r = n && n.cache ? n.cache : wo, t = n && n.serializer ? n.serializer : bo, i = n && n.strategy ? n.strategy : vo;
  return i(e, {
    cache: r,
    serializer: t
  });
}
function go(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Qn(e, n, r, t) {
  var i = go(t) ? t : r(t), s = n.get(i);
  return typeof s > "u" && (s = e.call(this, t), n.set(i, s)), s;
}
function Gn(e, n, r) {
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
function vo(e, n) {
  var r = e.length === 1 ? Qn : Gn;
  return Pr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function yo(e, n) {
  var r = Gn;
  return Pr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function mo(e, n) {
  var r = Qn;
  return Pr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function bo() {
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
var wo = {
  create: function() {
    return new Yt();
  }
};
Rr.exports = ho;
Rr.exports.strategies = {
  variadic: yo,
  monadic: mo
};
var So = Rr.exports;
const Je = /* @__PURE__ */ hn(So);
var xo = globalThis && globalThis.__extends || function() {
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
}, _o = {
  width: "auto",
  height: "auto"
}, Et = Je(function(e, n, r) {
  return Math.max(Math.min(e, r), n);
}), en = Je(function(e, n) {
  return Math.round(e / n) * n;
}), rt = Je(function(e, n) {
  return new RegExp(e, "i").test(n);
}), zt = function(e) {
  return !!(e.touches && e.touches.length);
}, Oo = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, tn = Je(function(e, n, r) {
  r === void 0 && (r = 0);
  var t = n.reduce(function(s, o, a) {
    return Math.abs(o - e) < Math.abs(n[s] - e) ? a : s;
  }, 0), i = Math.abs(n[t] - e);
  return r === 0 || i < r ? n[t] : e;
}), de = Je(function(e, n) {
  return e.substr(e.length - n.length, n.length) === n;
}), nr = Je(function(e) {
  return e = e.toString(), e === "auto" || de(e, "px") || de(e, "%") || de(e, "vh") || de(e, "vw") || de(e, "vmax") || de(e, "vmin") ? e : e + "px";
}), Rt = function(e, n, r, t) {
  if (e && typeof e == "string") {
    if (de(e, "px"))
      return Number(e.replace("px", ""));
    if (de(e, "%")) {
      var i = Number(e.replace("%", "")) / 100;
      return n * i;
    }
    if (de(e, "vw")) {
      var i = Number(e.replace("vw", "")) / 100;
      return r * i;
    }
    if (de(e, "vh")) {
      var i = Number(e.replace("vh", "")) / 100;
      return t * i;
    }
  }
  return e;
}, Do = Je(function(e, n, r, t, i, s, o) {
  return t = Rt(t, e.width, n, r), i = Rt(i, e.height, n, r), s = Rt(s, e.width, n, r), o = Rt(o, e.height, n, r), {
    maxWidth: typeof t > "u" ? void 0 : Number(t),
    maxHeight: typeof i > "u" ? void 0 : Number(i),
    minWidth: typeof s > "u" ? void 0 : Number(s),
    minHeight: typeof o > "u" ? void 0 : Number(o)
  };
}), Eo = [
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
], rn = "__resizable_base__", zo = (
  /** @class */
  function(e) {
    xo(n, e);
    function n(r) {
      var t = e.call(this, r) || this;
      return t.ratio = 1, t.resizable = null, t.parentLeft = 0, t.parentTop = 0, t.resizableLeft = 0, t.resizableRight = 0, t.resizableTop = 0, t.resizableBottom = 0, t.targetLeft = 0, t.targetTop = 0, t.appendBase = function() {
        if (!t.resizable || !t.window)
          return null;
        var i = t.parentNode;
        if (!i)
          return null;
        var s = t.window.document.createElement("div");
        return s.style.width = "100%", s.style.height = "100%", s.style.position = "absolute", s.style.transform = "scale(0, 0)", s.style.left = "0", s.style.flex = "0 0 100%", s.classList ? s.classList.add(rn) : s.className += rn, i.appendChild(s), s;
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
        return this.props.size || this.props.defaultSize || _o;
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
          if (r.propsSize && r.propsSize[a] && de(r.propsSize[a].toString(), "%")) {
            if (de(r.state[a].toString(), "%"))
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
      var i = this.props.boundsByDirection, s = this.state.direction, o = i && rt("left", s), a = i && rt("top", s), l, c;
      if (this.props.bounds === "parent") {
        var d = this.parentNode;
        d && (l = o ? this.resizableRight - this.parentLeft : d.offsetWidth + (this.parentLeft - this.resizableLeft), c = a ? this.resizableBottom - this.parentTop : d.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (l = o ? this.resizableRight : this.window.innerWidth - this.resizableLeft, c = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (l = o ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), c = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return l && Number.isFinite(l) && (r = r && r < l ? r : l), c && Number.isFinite(c) && (t = t && t < c ? t : c), { maxWidth: r, maxHeight: t };
    }, n.prototype.calculateNewSizeFromDirection = function(r, t) {
      var i = this.props.scale || 1, s = this.props.resizeRatio || 1, o = this.state, a = o.direction, l = o.original, c = this.props, d = c.lockAspectRatio, h = c.lockAspectRatioExtraHeight, p = c.lockAspectRatioExtraWidth, g = l.width, m = l.height, S = h || 0, k = p || 0;
      return rt("right", a) && (g = l.width + (r - l.x) * s / i, d && (m = (g - k) / this.ratio + S)), rt("left", a) && (g = l.width - (r - l.x) * s / i, d && (m = (g - k) / this.ratio + S)), rt("bottom", a) && (m = l.height + (t - l.y) * s / i, d && (g = (m - S) * this.ratio + k)), rt("top", a) && (m = l.height - (t - l.y) * s / i, d && (g = (m - S) * this.ratio + k)), { newWidth: g, newHeight: m };
    }, n.prototype.calculateNewSizeFromAspectRatio = function(r, t, i, s) {
      var o = this.props, a = o.lockAspectRatio, l = o.lockAspectRatioExtraHeight, c = o.lockAspectRatioExtraWidth, d = typeof s.width > "u" ? 10 : s.width, h = typeof i.width > "u" || i.width < 0 ? r : i.width, p = typeof s.height > "u" ? 10 : s.height, g = typeof i.height > "u" || i.height < 0 ? t : i.height, m = l || 0, S = c || 0;
      if (a) {
        var k = (p - m) * this.ratio + S, R = (g - m) * this.ratio + S, b = (d - S) / this.ratio + m, z = (h - S) / this.ratio + m, N = Math.max(d, k), F = Math.min(h, R), G = Math.max(p, b), $ = Math.min(g, z);
        r = Et(r, N, F), t = Et(t, G, $);
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
        if (r.nativeEvent && Oo(r.nativeEvent) ? (i = r.nativeEvent.clientX, s = r.nativeEvent.clientY) : r.nativeEvent && zt(r.nativeEvent) && (i = r.nativeEvent.touches[0].clientX, s = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
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
        if (this.window.TouchEvent && zt(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var t = this.props, i = t.maxWidth, s = t.maxHeight, o = t.minWidth, a = t.minHeight, l = zt(r) ? r.touches[0].clientX : r.clientX, c = zt(r) ? r.touches[0].clientY : r.clientY, d = this.state, h = d.direction, p = d.original, g = d.width, m = d.height, S = this.getParentSize(), k = Do(S, this.window.innerWidth, this.window.innerHeight, i, s, o, a);
        i = k.maxWidth, s = k.maxHeight, o = k.minWidth, a = k.minHeight;
        var R = this.calculateNewSizeFromDirection(l, c), b = R.newHeight, z = R.newWidth, N = this.calculateNewMaxFromBoundary(i, s);
        this.props.snap && this.props.snap.x && (z = tn(z, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (b = tn(b, this.props.snap.y, this.props.snapGap));
        var F = this.calculateNewSizeFromAspectRatio(z, b, { width: N.maxWidth, height: N.maxHeight }, { width: o, height: a });
        if (z = F.newWidth, b = F.newHeight, this.props.grid) {
          var G = en(z, this.props.grid[0]), $ = en(b, this.props.grid[1]), V = this.props.snapGap || 0;
          z = V === 0 || Math.abs(G - z) <= V ? G : z, b = V === 0 || Math.abs($ - b) <= V ? $ : b;
        }
        var W = {
          width: z - p.width,
          height: b - p.height
        };
        if (g && typeof g == "string") {
          if (de(g, "%")) {
            var U = z / S.width * 100;
            z = U + "%";
          } else if (de(g, "vw")) {
            var Y = z / this.window.innerWidth * 100;
            z = Y + "vw";
          } else if (de(g, "vh")) {
            var E = z / this.window.innerHeight * 100;
            z = E + "vh";
          }
        }
        if (m && typeof m == "string") {
          if (de(m, "%")) {
            var U = b / S.height * 100;
            b = U + "%";
          } else if (de(m, "vw")) {
            var Y = b / this.window.innerWidth * 100;
            b = Y + "vw";
          } else if (de(m, "vh")) {
            var E = b / this.window.innerHeight * 100;
            b = E + "vh";
          }
        }
        var A = {
          width: this.createSizeForCssProperty(z, "width"),
          height: this.createSizeForCssProperty(b, "height")
        };
        this.flexDir === "row" ? A.flexBasis = A.width : this.flexDir === "column" && (A.flexBasis = A.height), this.setState(A), this.props.onResize && this.props.onResize(r, h, this.resizable, W);
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
        return i[h] !== !1 ? M.createElement(po, { key: h, direction: h, onResizeStart: r.onResizeStart, replaceStyles: s && s[h], className: o && o[h] }, c && c[h] ? c[h] : null) : null;
      });
      return M.createElement("div", { className: l, style: a }, d);
    }, n.prototype.render = function() {
      var r = this, t = Object.keys(this.props).reduce(function(o, a) {
        return Eo.indexOf(a) !== -1 || (o[a] = r.props[a]), o;
      }, {}), i = Be(Be(Be({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
      var s = this.props.as || "div";
      return M.createElement(
        s,
        Be({ ref: this.ref, style: i, className: this.props.className }, t),
        this.state.isResizing && M.createElement("div", { style: this.state.backgroundStyle }),
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
  }(M.PureComponent)
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
function Ro(e, n) {
  dr(e, n);
  function r() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
var ue = function() {
  return ue = Object.assign || function(n) {
    for (var r, t = 1, i = arguments.length; t < i; t++) {
      r = arguments[t];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
    }
    return n;
  }, ue.apply(this, arguments);
};
function Po(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
      n.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
  return r;
}
var To = lo, Mo = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, ko = function(e) {
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
}, ba = (
  /** @class */
  function(e) {
    Ro(n, e);
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
          var k = s.getBoundingClientRect(), R = k.left, b = k.top, z = -(R - s.offsetLeft * o) / o, N = -(b - s.offsetTop * o) / o, m = (window.innerWidth - this.resizable.size.width * o) / o + z, S = (window.innerHeight - this.resizable.size.height * o) / o + N;
          return this.setState({ bounds: { top: N, right: m, bottom: S, left: z } });
        } else
          typeof this.props.bounds == "string" ? a = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (a = this.props.bounds);
        if (!(!(a instanceof HTMLElement) || !(s instanceof HTMLElement))) {
          var F = a.getBoundingClientRect(), G = F.left, $ = F.top, V = s.getBoundingClientRect(), W = V.left, U = V.top, Y = (G - W) / o, E = $ - U;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var A = this.offsetFromParent;
            this.setState({
              bounds: {
                top: E - A.top,
                right: Y + (a.offsetWidth - this.resizable.size.width) - A.left / o,
                bottom: E + (a.offsetHeight - this.resizable.size.height) - A.top,
                left: Y - A.left / o
              }
            });
          }
        }
      }
    }, n.prototype.onDrag = function(r, t) {
      if (this.props.onDrag) {
        var i = this.offsetFromParent, s = i.left, o = i.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, ue(ue({}, t), { x: t.x - s, y: t.y - o }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, ue(ue({}, t), { x: t.x + s, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, ue(ue({}, t), { x: this.originalPosition.x + s, y: t.y + o, deltaX: 0 }));
      }
    }, n.prototype.onDragStop = function(r, t) {
      if (this.props.onDragStop) {
        var i = this.offsetFromParent, s = i.left, o = i.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, ue(ue({}, t), { x: t.x + s, y: t.y + o }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, ue(ue({}, t), { x: t.x + s, y: this.originalPosition.y + o, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, ue(ue({}, t), { x: this.originalPosition.x + s, y: t.y + o, deltaX: 0 }));
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
          var k = d.getBoundingClientRect(), R = k.left, b = k.top, z = this.props.bounds === "window" ? { left: 0, top: 0 } : c.getBoundingClientRect(), N = z.left, F = z.top, G = this.getOffsetWidth(c), $ = this.getOffsetHeight(c), V = t.toLowerCase().endsWith("left"), W = t.toLowerCase().endsWith("right"), U = t.startsWith("top"), Y = t.startsWith("bottom");
          if ((V || U) && this.resizable) {
            var E = (R - N) / s + this.resizable.size.width;
            this.setState({ maxWidth: E > Number(p) ? p : E });
          }
          if (W || this.props.lockAspectRatio && !V && !U) {
            var E = G + (N - R) / s;
            this.setState({ maxWidth: E > Number(p) ? p : E });
          }
          if ((U || V) && this.resizable) {
            var E = (b - F) / s + this.resizable.size.height;
            this.setState({
              maxHeight: E > Number(g) ? g : E
            });
          }
          if (Y || this.props.lockAspectRatio && !U && !V) {
            var E = $ + (F - b) / s;
            this.setState({
              maxHeight: E > Number(g) ? g : E
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
      var S = r.resizeHandleStyles, k = r.resizeHandleClasses, R = r.resizeHandleComponent, b = r.enableResizing, z = r.resizeGrid, N = r.resizeHandleWrapperClass, F = r.resizeHandleWrapperStyle, G = r.scale, $ = r.allowAnyClick, V = Po(r, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), W = this.props.default ? ue({}, this.props.default) : void 0;
      delete V.default;
      var U = t || s ? { cursor: "auto" } : { cursor: "move" }, Y = ue(ue(ue({}, Mo), U), i), E = this.offsetFromParent, A = E.left, H = E.top, ee;
      o && (ee = {
        x: o.x - A,
        y: o.y - H
      });
      var K = this.state.resizing ? void 0 : ee, Q = this.state.resizing ? "both" : c;
      return M.createElement(
        To,
        { ref: this.refDraggable, handle: s ? ".".concat(s) : void 0, defaultPosition: W, onMouseDown: a, onMouseUp: l, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: Q, disabled: t, grid: d, bounds: h ? this.state.bounds : void 0, position: K, enableUserSelectHack: p, cancel: g, scale: G, allowAnyClick: $, nodeRef: this.resizableElement },
        M.createElement(zo, ue({}, V, { ref: this.refResizable, defaultSize: W, size: this.props.size, enable: typeof b == "boolean" ? ko(b) : b, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: Y, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: z, handleWrapperClass: N, handleWrapperStyle: F, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: S, handleClasses: k, handleComponent: R, scale: this.props.scale }), m)
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
  }(M.PureComponent)
), Tr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = Nn;
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
const Co = [{
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
}], nn = (e, n = !1) => {
  let r = e.selectionStart || 0, t = e.selectionEnd || 0;
  const i = e.selectionDirection, s = Co.filter((o) => n ? !0 : !o.onBlur || !1).reduce((o, a) => {
    const l = o.replace(a.pattern, a.replace), c = l.length - o.length;
    return r += c, t += c, l;
  }, e.value);
  return queueMicrotask(() => {
    document.activeElement === e && e.setSelectionRange(r, t, i || "none");
  }), s;
}, Ao = M.forwardRef(({
  placeholder: e = "Введите",
  ...n
}, r) => /* @__PURE__ */ B("input", { ref: r, placeholder: e, css: {
  appearance: "none",
  outline: "2px solid transparent",
  outlineOffset: "2px"
}, ...n })), No = ({
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
  inputComponent: h = Ao,
  ...p
}, g) => {
  const [m, S] = re.useState(!1), {
    getRootProps: k,
    getInputProps: R
  } = di({
    error: !!o,
    onBlur: i,
    onFocus: s,
    disabled: c,
    inputRef: g,
    ...p
  }), {
    onBlur: b,
    onFocus: z,
    ...N
  } = R();
  N.value = N.value || "";
  const F = M.useCallback((V) => {
    c || (z == null || z(V), S(!0));
  }, [c, S, z]), G = M.useCallback((V) => {
    var W;
    if (l) {
      const U = nn(V.target, !0);
      U !== V.target.value && (V.target.value = U, (W = N.onChange) == null || W.call(N, U));
    }
    S(!1), b == null || b(V);
  }, [S, b]);
  let $ = /* @__PURE__ */ Ee("div", { className: r, ref: t, css: [{
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
    "--tw-border-opacity": "1",
    borderColor: "rgb(114 117 191 / var(--tw-border-opacity))",
    outlineWidth: "2px",
    outlineColor: "#d2d5eb"
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
      /* @__PURE__ */ B(Ge, { icon: fn.faCircleNotch, css: {
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
    }], onFocus: F, onBlur: G, onInput: (V) => {
      l && (V.currentTarget.value = nn(V.currentTarget));
    }, ...p, ...N, type: d ? "hidden" : p.type || "text" }),
    a && !c && /* @__PURE__ */ B("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: a })
  ] });
  return e && ($ = /* @__PURE__ */ B(Ht, { label: e, error: o, helperText: n, ...k(), children: $ })), $;
}, _t = M.forwardRef(No), Fo = ({
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
}) }), Kn = "id", Lo = ({
  text: e = "Загрузка"
}) => {
  const [n, r] = M.useState("");
  return M.useEffect(() => {
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
}, Wo = ({
  className: e,
  isLoading: n = !1,
  inputLoading: r = !1,
  valueLoading: t = !1,
  idField: i = Kn,
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
  onInputChange: k,
  onSelect: R,
  disabled: b,
  placeholder: z = "Выберите",
  value: N,
  allowClear: F = !0,
  autoComplete: G = !0,
  autoSelect: $ = !1,
  afterItems: V,
  popupAdditionalOptionsRenderer: W,
  tagListPosition: U = "top",
  tagListRenderer: Y,
  ...E
}, A) => {
  const H = M.useCallback((u) => s && s in u ? u[s] : JSON.stringify(u), [s]), [ee, K] = M.useState(l);
  M.useEffect(() => {
    K(l);
  }, [l]);
  const Q = M.useMemo(() => a ? (N == null ? void 0 : N.map((u) => o.find((f) => f[i] == u)).filter((u) => !!u)) || [] : o.find((u) => u[i] == N) || null, [N, o]), {
    value: J,
    getRootProps: se,
    getInputProps: Z,
    getListboxProps: ne,
    getOptionProps: v,
    groupedOptions: w,
    getClearProps: x,
    setAnchorEl: O,
    anchorEl: D,
    popupOpen: L,
    getTagProps: q
  } = pi({
    options: o,
    autoComplete: G,
    autoSelect: $,
    multiple: a,
    open: ee,
    value: Q,
    getOptionLabel: H,
    isOptionEqualToValue: (u, f) => i ? u[i] === f[i] : u === f,
    onInputChange: k,
    onOpen: (u) => {
      K(!0), p == null || p(u);
    },
    onClose: (u, f) => {
      K(!1), g == null || g(u, f);
    },
    clearOnBlur: !1,
    disabled: b,
    unstable_classNamePrefix: "c",
    onChange: (u, f) => {
      S && (Array.isArray(f) ? S(f.map((y) => y[i])) : S(f && typeof f == "object" ? f[i] : null)), R == null || R(f);
    }
  }), I = M.useMemo(() => W ? W({
    closePopup: () => K(!1)
  }) : null, [W, K]), X = n ? /* @__PURE__ */ B("div", { css: {
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
  }, children: /* @__PURE__ */ B(Lo, {}) }) : /* @__PURE__ */ B("ul", { css: {
    zIndex: "20",
    width: "100%"
  }, ...ne(), children: D && w.length > 0 ? /* @__PURE__ */ Ee(dt, { children: [
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
                    `], ...v({
      option: u,
      index: f
    }), children: m ? m(u) : H(u) }) }, i in u ? u[i] : f)),
    I
  ] }) : I }), ye = M.useMemo(() => a ? J && J.length > 0 : !!J, [J, a]), {
    onBlur: pe,
    onChange: me,
    ref: Se,
    ...Re
  } = Z(), Le = dn(A, Se), be = M.useMemo(() => a ? Y ? Y({
    items: J,
    isLoading: t,
    onDelete: (u) => {
      S == null || S(J.filter((f) => f[i] !== u[i]).map((f) => f[i]));
    },
    valueCount: (N == null ? void 0 : N.length) || 0
  }) : /* @__PURE__ */ B(Fo, { items: J, optionRender: m, getOptionLabel: H, getTagProps: q, isLoading: t, valueCount: N == null ? void 0 : N.length }) : null, [J, Y]), Ce = /* @__PURE__ */ Ee(dt, { children: [
    U === "top" && be,
    /* @__PURE__ */ B(_t, { ...E, error: h, ...Re, ref: Le, inputWrapRef: O, placeholder: z, isLoading: r, useTypograf: !1, onChange: me, onBlur: (u) => {
      pe == null || pe(u), a && (me == null || me({
        ...u,
        target: {
          ...u.target,
          value: ""
        }
      }));
    }, afterItems: !b && [V && /* @__PURE__ */ B(re.Fragment, { children: V }, "after-items"), ye && F && !a && /* @__PURE__ */ B("button", { ...x(), onMouseDown: (u) => {
      u.preventDefault(), u.stopPropagation();
    }, children: /* @__PURE__ */ B(Ge, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: Tr.faTimes }) }, "clear"), /* @__PURE__ */ B("button", { onClick: (u) => {
      u.preventDefault(), u.stopPropagation(), K((f) => !f);
    }, children: /* @__PURE__ */ B(Ge, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, h && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: Ti.faCaretDown }) }, "arrow")] }),
    D && /* @__PURE__ */ B(pn, { open: L, anchorEl: D, children: /* @__PURE__ */ B("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: D.offsetWidth
    }], children: X }) })
  ] });
  return /* @__PURE__ */ Ee(dt, { children: [
    /* @__PURE__ */ B(Ht, { label: c, error: h, helperText: d, className: e, ...se(), children: Ce }),
    U === "bottom" && be
  ] });
}, Jn = M.forwardRef(Wo), Bo = (e, n) => {
  const [r, t] = M.useState(!1);
  return /* @__PURE__ */ B(vi, { ref: n, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ B(hi, { position: "end", children: /* @__PURE__ */ B(gi, { size: "small", edge: "end", onClick: () => t((i) => !i), children: /* @__PURE__ */ B(Ge, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, mr`
                  width: 18px;
                `], icon: r ? Mi.faEyeSlash : Si.faEye }) }) })
  }, ...e });
};
M.forwardRef(Bo);
const pr = (e) => Array.isArray(e) ? e.length === 0 : !e, jo = ({
  dictionary: e,
  open: n = !1,
  value: r,
  filterOptions: t,
  ...i
}, s) => {
  const [o, a] = M.useState(n), l = ki(e, {
    enabled: o || !!r
  });
  M.useEffect(() => {
    a(n);
  }, [n]);
  const c = M.useMemo(() => t && l.data ? t(l.data) : l.data, [l.data, t]);
  return /* @__PURE__ */ B(
    Jn,
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
}, wa = M.forwardRef(jo);
function sn(e, n) {
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
    n % 2 ? sn(Object(r), !0).forEach(function(t) {
      Zn(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sn(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Vo(e) {
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
function Zn(e, n, r) {
  return (n = Vo(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function Ho(e, n) {
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
function on(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function ei(e, n) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = function(l, c) {
      if (l) {
        if (typeof l == "string")
          return on(l, c);
        var d = Object.prototype.toString.call(l).slice(8, -1);
        return d === "Object" && l.constructor && (d = l.constructor.name), d === "Map" || d === "Set" ? Array.from(l) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? on(l, c) : void 0;
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
  var r, t = n.replacementChars, i = n.replacement, s = n.separate, o = t, a = "", l = ei(e);
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
  return e.length > 0 ? Zn({}, e, /./) : {};
}
function Io(e, n) {
  var r, t = n.mask, i = n.replacement, s = n.showMask, o = 0, a = "", l = ei(t);
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
function Uo(e, n) {
  for (var r = n.mask, t = n.replacement, i = [], s = 0; s < r.length; s++) {
    var o, a = (o = e[s]) !== null && o !== void 0 ? o : r[s], l = Object.prototype.hasOwnProperty.call(t, a) ? "replacement" : e[s] !== void 0 && e[s] !== r[s] ? "input" : "mask";
    i.push({ type: l, value: a, index: s });
  }
  return i;
}
function an(e, n) {
  for (var r = n.start, t = r === void 0 ? 0 : r, i = n.end, s = n.mask, o = n.replacement, a = n.separate, l = e.slice(t, i), c = s.slice(t, i), d = "", h = 0; h < c.length; h++) {
    var p = Object.prototype.hasOwnProperty.call(o, c[h]);
    p && l[h] !== void 0 && l[h] !== c[h] ? d += l[h] : p && a && (d += c[h]);
  }
  return d;
}
function un(e) {
  for (var n = e.mask, r = e.replacement, t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = typeof r == "string" ? gr(r) : r, s = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"], o = "", a = 0; a < n.length; a++) {
    var l = Object.prototype.hasOwnProperty.call(i, n[a]), c = t ? "(?!".concat(n[a], ")") : "";
    a === 0 && (o += "^"), o += l ? c + i[n[a]].toString().slice(1, -1) : s.includes(n[a]) ? "\\".concat(n[a]) : n[a], a === n.length - 1 && (o += "$");
  }
  return o;
}
function $o(e, n, r) {
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
function qo(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Yo(e, n, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xo(e, n) {
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
var st = function(e) {
  function n(r, t) {
    var i;
    return qo(this, n), (i = $o(this, n, [r])).name = "SyntheticChangeError", i.cause = t, i;
  }
  return Xo(n, e), Yo(n);
}(yr(Error));
function Qo(e, n) {
  return M.useCallback(function(r) {
    e.current = r, typeof n == "function" ? n(r) : vr(n) === "object" && n !== null && (n.current = r);
  }, [e, n]);
}
function Pt(e, n) {
  var r = n.value, t = n.selectionStart, i = n.selectionEnd;
  r !== void 0 && (e.value = r), t !== void 0 && i !== void 0 && e.setSelectionRange(t, i);
}
var Go = ["text", "email", "tel", "search", "url"];
function Ko(e) {
  var n = e.init, r = e.tracking, t = e.eventType, i = e.eventHandler, s = M.useRef({ timeoutId: -1, fallbackTimeoutId: -1, cachedTimeoutId: -1, start: 0, end: 0 }), o = M.useRef(!0), a = M.useRef(null), l = M.useRef({ init: n, tracking: r, eventType: t, eventHandler: i });
  return l.current.init = n, l.current.tracking = r, l.current.eventType = t, l.current.eventHandler = i, M.useMemo(function() {
    return function(c, d, h) {
      var p = h.onFocus, g = h.onBlur, m = h.onInput;
      return new Proxy(c, { set: function(S, k, R) {
        if (k !== "current")
          return !1;
        var b = R !== null && Go.includes(R.type);
        if (R !== c.current && (c.current !== null && (c.current.removeEventListener("focus", p), c.current.removeEventListener("blur", g), c.current.removeEventListener("input", m)), R !== null && b)) {
          var z, N = (z = R._wrapperState) !== null && z !== void 0 ? z : {}, F = N.controlled, G = F !== void 0 && F, $ = N.initialValue, V = $ === void 0 ? "" : $, W = d({ controlled: G, initialValue: R.value || V });
          Pt(R, { value: W.value }), document.activeElement === R && p(), R.addEventListener("focus", p), R.addEventListener("blur", g), R.addEventListener("input", m);
        }
        return S[k] = R, !0;
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
            throw new st("The input selection has not been updated.");
          s.current.cachedTimeoutId = s.current.timeoutId;
          var k = d.value, R = d.selectionStart, b = d.selectionEnd;
          if (R === null || b === null)
            throw new st("The selection attributes have not been initialized.");
          var z, N = (h = (p = d._valueTracker) === null || p === void 0 || (g = p.getValue) === null || g === void 0 ? void 0 : g.call(p)) !== null && h !== void 0 ? h : "";
          if (R > s.current.start ? z = "insert" : R <= s.current.start && R < s.current.end ? z = "deleteBackward" : R === s.current.end && k.length < N.length && (z = "deleteForward"), z === void 0 || (z === "deleteBackward" || z === "deleteForward") && k.length > N.length)
            throw new st("Input type detection error.");
          var F = "", G = "", $ = s.current.start, V = s.current.end;
          if (z === "insert")
            F = k.slice(s.current.start, R);
          else {
            var W = N.length - k.length;
            $ = R, V = R + W, G = N.slice($, V);
          }
          var U = l.current.tracking({ inputType: z, previousValue: N, value: k, addedValue: F, deletedValue: G, changeStart: $, changeEnd: V, selectionStart: R, selectionEnd: b });
          Pt(d, { value: U.value, selectionStart: U.selectionStart, selectionEnd: U.selectionEnd });
          var Y = l.current.eventType, E = l.current.eventHandler;
          if (typeof Y == "string" && E) {
            var A = d.value, H = d.selectionStart, ee = d.selectionEnd;
            o.current = !1, requestAnimationFrame(function() {
              Pt(d, { value: A, selectionStart: H ?? A.length, selectionEnd: ee ?? A.length });
              var X = new CustomEvent(Y, { bubbles: !0, cancelable: !1, composed: !0, detail: U.__detail });
              d.dispatchEvent(X), Ct.unstable_batchedUpdates ? Ct.unstable_batchedUpdates(E, X) : E(X), o.current = !0;
            });
          }
          (m = d._valueTracker) === null || m === void 0 || (S = m.setValue) === null || S === void 0 || S.call(m, N), s.current.start = U.selectionStart, s.current.end = U.selectionEnd;
        } catch (X) {
          var K, Q, J, se, Z, ne, v, w, x, O, D, L = X, q = L.name, I = L.cause;
          if (Pt(d, { value: (K = (Q = I == null || (J = I.__attributes) === null || J === void 0 ? void 0 : J.value) !== null && Q !== void 0 ? Q : (se = d._valueTracker) === null || se === void 0 || (Z = se.getValue) === null || Z === void 0 ? void 0 : Z.call(se)) !== null && K !== void 0 ? K : "", selectionStart: (ne = I == null || (v = I.__attributes) === null || v === void 0 ? void 0 : v.selectionStart) !== null && ne !== void 0 ? ne : s.current.start, selectionEnd: (w = I == null || (x = I.__attributes) === null || x === void 0 ? void 0 : x.selectionEnd) !== null && w !== void 0 ? w : s.current.end }), (I == null || (O = I.__attributes) === null || O === void 0 ? void 0 : O.selectionStart) !== void 0 && (s.current.start = I.__attributes.selectionStart), (I == null || (D = I.__attributes) === null || D === void 0 ? void 0 : D.selectionEnd) !== void 0 && (s.current.end = I.__attributes.selectionEnd), c.preventDefault(), c.stopPropagation(), q !== "SyntheticChangeError")
            throw X;
        }
    } });
  }, []);
}
function ti() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mask, r = n === void 0 ? "" : n, t = e.replacement, i = t === void 0 ? {} : t, s = e.showMask, o = s !== void 0 && s, a = e.separate, l = a !== void 0 && a, c = e.track, d = e.modify, h = e.onMask, p = typeof i == "string" ? gr(i) : i, g = M.useRef(null);
  return Ko({ init: function(m) {
    var S = m.controlled, k = m.initialValue;
    k = S || k ? k : o ? r : "";
    var R = { mask: r, replacement: p, showMask: o, separate: l };
    return g.current = { value: k, props: R, fallbackProps: R }, { value: k };
  }, tracking: function(m) {
    var S, k = m.inputType, R = m.previousValue, b = m.addedValue, z = m.changeStart, N = m.changeEnd;
    if (g.current === null)
      throw new st("The state has not been initialized.");
    g.current.value !== R ? g.current.props = g.current.fallbackProps : g.current.fallbackProps = g.current.props;
    var F = an(R, { end: z, mask: g.current.props.mask, replacement: g.current.props.replacement, separate: g.current.props.separate }), G = RegExp("[^".concat(Object.keys(g.current.props.replacement).join(""), "]"), "g"), $ = g.current.props.mask.replace(G, "");
    F && (F = ir(F, { replacementChars: $, replacement: g.current.props.replacement, separate: g.current.props.separate }));
    var V = c == null ? void 0 : c(hr(hr({}, k === "insert" ? { inputType: k, data: b } : { inputType: k, data: null }), {}, { value: R, selectionStart: z, selectionEnd: N }));
    if (V === !1)
      throw new st("Custom trekking stop.");
    if (V === null ? b = "" : V !== !0 && V !== void 0 && (b = V), b && (b = ir(b, { replacementChars: $.slice(F.length), replacement: g.current.props.replacement, separate: !1 })), k === "insert" && b === "")
      throw new st("The character does not match the key value of the `replacement` object.");
    var W = an(R, { start: N, mask: g.current.props.mask, replacement: g.current.props.replacement, separate: g.current.props.separate });
    if (g.current.props.separate) {
      var U = g.current.props.mask.slice(z, N).replace(G, ""), Y = U.length - b.length;
      Y < 0 ? W = W.slice(-Y) : Y > 0 && (W = U.slice(-Y) + W);
    }
    W && (W = ir(W, { replacementChars: $.slice(F.length + b.length), replacement: g.current.props.replacement, separate: g.current.props.separate }));
    var E = F + b + W, A = (S = d == null ? void 0 : d(E)) !== null && S !== void 0 ? S : {}, H = A.mask, ee = H === void 0 ? r : H, K = A.replacement, Q = K === void 0 ? p : K, J = A.showMask, se = J === void 0 ? o : J, Z = A.separate, ne = Z === void 0 ? l : Z;
    typeof Q == "string" && (Q = gr(Q));
    var v = function(x, O) {
      var D = O.mask, L = O.replacement, q = O.showMask, I = Io(x, { mask: D, replacement: L, showMask: q }), X = Uo(I, { mask: D, replacement: L }), ye = un({ mask: D, replacement: L }), pe = un({ mask: D, replacement: L }, !0);
      return { value: I, input: x, parts: X, pattern: ye, isValid: RegExp(pe).test(I) };
    }(E, { mask: ee, replacement: Q, showMask: se }), w = function(x) {
      var O, D, L, q = x.inputType, I = x.value, X = x.addedValue, ye = x.beforeChangeValue, pe = x.parts, me = x.replacement, Se = x.separate, Re = pe.filter(function(f) {
        var y = f.type;
        return y === "input" || Se && y === "replacement";
      }), Le = (O = Re[ye.length + X.length - 1]) === null || O === void 0 ? void 0 : O.index, be = (D = Re[ye.length - 1]) === null || D === void 0 ? void 0 : D.index, Ce = (L = Re[ye.length + X.length]) === null || L === void 0 ? void 0 : L.index;
      if (q === "insert") {
        if (Le !== void 0)
          return Le + 1;
        if (Ce !== void 0)
          return Ce;
        if (be !== void 0)
          return be + 1;
      }
      if (q === "deleteForward") {
        if (Ce !== void 0)
          return Ce;
        if (be !== void 0)
          return be + 1;
      }
      if (q === "deleteBackward") {
        if (be !== void 0)
          return be + 1;
        if (Ce !== void 0)
          return Ce;
      }
      var u = I.split("").findIndex(function(f) {
        return Object.prototype.hasOwnProperty.call(me, f);
      });
      return u !== -1 ? u : I.length;
    }({ inputType: k, value: v.value, addedValue: b, beforeChangeValue: F, parts: v.parts, replacement: Q, separate: ne });
    return g.current.value = v.value, g.current.props = { mask: ee, replacement: Q, showMask: se, separate: ne }, { value: v.value, selectionStart: w, selectionEnd: w, __detail: v };
  }, eventType: "input-mask", eventHandler: h });
}
var Jo = ["component", "mask", "replacement", "showMask", "separate", "track", "modify", "onMask"];
function Zo(e, n) {
  var r = e.component, t = e.mask, i = e.replacement, s = e.showMask, o = e.separate, a = e.track, l = e.modify, c = e.onMask, d = Ho(e, Jo), h = ti({ mask: t, replacement: i, showMask: s, separate: o, track: a, modify: l, onMask: c }), p = Qo(h, n);
  return yi.jsx(r || "input", hr({ ref: p }, d));
}
M.forwardRef(Zo);
const ea = ({
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
  defaultValue: p,
  serverDateFormat: g = "YYYY-MM-DD",
  ...m
}, S) => {
  const [k, R] = M.useState(null), [b, z] = M.useState(!1), [N, F] = M.useState(!1), [G, $] = M.useState(a ? et(a).format("DD.MM.YYYY") : p ? et(p).format("DD.MM.YYYY") : "");
  M.useEffect(() => {
    p && (l == null || l(et(p).format(g)));
  }, [p]), S = ti({
    mask: c,
    replacement: d,
    showMask: h,
    track: (E) => {
      const {
        value: A,
        data: H,
        selectionEnd: ee,
        selectionStart: K
      } = E, [Q, J, se] = (A == null ? void 0 : A.split(".")) || [], Z = (v) => ee === v && K === v, ne = H !== null;
      return Z(0) && ne && !/[0123]/.test(H) || Z(1) && ne && (Q == null ? void 0 : Q[0]) === "3" && +H > 1 || Z(1) && ne && (Q == null ? void 0 : Q[0]) === "0" && +H == 0 || Z(2) && ne && !/[01]/.test(H) || Z(4) && ne && (J == null ? void 0 : J[0]) === "1" && !/[012]/.test(H) || Z(4) && ne && (J == null ? void 0 : J[0]) === "0" && +H < 1 || Z(5) && ne && !/[12]/.test(H) || Z(7) && ne && (se == null ? void 0 : se[0]) === "1" && +H != 9 ? !1 : E.data;
    }
  }), M.useEffect(() => {
    r !== void 0 && z(r);
  }, [r]);
  const W = M.useCallback((E) => {
    F(!0), z(!0), i == null || i(E);
  }, [i, z]), U = (E) => {
    F(!1), G && (l == null || l(et(G, "DD-MM-YYYY").format(g))), s == null || s(E);
  }, Y = M.useCallback((E) => {
    R(E);
  }, [R]);
  return /* @__PURE__ */ B(mi, { onClickAway: () => z(!1), children: /* @__PURE__ */ Ee(Ht, { className: t, label: n, error: e, children: [
    /* @__PURE__ */ B(_t, { ...m, inputWrapRef: Y, ref: S, onFocus: W, onBlur: U, useTypograf: !1, value: G, onChange: (E) => {
      $ == null || $(E.target.value);
    }, onMouseDown: (E) => {
      N && z(!b), o == null || o(E);
    }, error: e }),
    k && /* @__PURE__ */ B(pn, { open: b, anchorEl: k, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: k
      }
    }], children: /* @__PURE__ */ B("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ B(ai, { value: a, onChange: (E) => {
      l == null || l(et(E).format(g)), $(et(E).format("DD.MM.YYYY")), z(!1);
    } }) }) })
  ] }) });
}, Sa = M.forwardRef(ea), ta = ({
  multiple: e,
  value: n,
  url: r,
  params: t,
  idField: i = Kn,
  onInputChange: s,
  filters: o,
  open: a = !1,
  extraOptionsRenderer: l,
  ...c
}, d) => {
  const [h, p] = M.useState(""), [g, m] = M.useState(a), S = Hi(h, 500), k = Vi(r, i), {
    records: R,
    isLoading: b
  } = ji({
    idField: i,
    value: (pr(n) ? [] : e ? n : [n]) || [],
    url: r,
    params: t
  });
  M.useEffect(() => {
    m(a);
  }, [a]);
  const z = M.useMemo(() => ({
    ...t,
    ...o && o.length > 0 && {
      extFilters: JSON.stringify(o)
    },
    ...S ? {
      query: S
    } : void 0
  }), [S, t, o]), N = h.length > 0 || g || !1, F = Ci(r, {
    enabled: N,
    params: z,
    placeholderData: ui,
    staleTime: 1e3 * 60
  }), G = M.useMemo(() => {
    var W;
    return li.uniqBy([...R, ...((W = F.data) == null ? void 0 : W.data) || []], i);
  }, [R, F.data]), $ = !e && b, V = l ? (W) => l({
    ...W,
    search: h,
    searchIsLoading: F.isLoading
  }) : void 0;
  return /* @__PURE__ */ B(dt, { children: /* @__PURE__ */ B(Jn, { ref: d, multiple: e, value: n, ...c, disabled: $ || c.disabled, inputLoading: $, options: G, idField: i, onOpen: () => m(!0), onClose: () => m(!1), isLoading: F.isLoading || b, valueLoading: b, popupAdditionalOptionsRenderer: V, open: g, afterItems: [(F.isLoading || F.isFetching || e && b) && /* @__PURE__ */ B("div", { children: /* @__PURE__ */ B(Ge, { icon: fn.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onSelect: (W) => {
    var U;
    e ? W == null || W.map((Y) => {
      k(Y);
    }) : k(W), (U = c.onSelect) == null || U.call(c, W);
  }, onInputChange: (W, U, Y) => {
    Y === "input" && p(U), Y === "reset" && h !== "" && p(""), s == null || s(W, U, Y);
  } }) });
}, xa = M.forwardRef(ta), ra = ({
  unit: e,
  error: n,
  onChange: r,
  allowFloat: t = !0,
  value: i,
  ...s
}, o) => {
  const [a, l] = M.useState(i), [c, d] = M.useState(null);
  M.useEffect(() => {
    l(i);
  }, [i]);
  const h = dn(o, d);
  return /* @__PURE__ */ B(_t, { ...s, ref: h, error: n, value: a, useTypograf: !1, onChange: (p) => {
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
}, _a = M.forwardRef(ra), na = M.forwardRef(({
  placeholder: e = "Введите",
  ...n
}, r) => /* @__PURE__ */ B("textarea", { ref: r, placeholder: e, ...n })), ia = ({
  error: e,
  rows: n = 5,
  ...r
}, t) => /* @__PURE__ */ B(_t, { ...r, ref: t, rows: n, inputComponent: na, error: e }), Oa = M.forwardRef(ia), sa = ({
  error: e,
  ...n
}, r) => /* @__PURE__ */ B(_t, { useTypograf: !1, ...n, ref: r, error: e }), Da = M.forwardRef(sa), oa = ({
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
  /* @__PURE__ */ B(Ar, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ B(Ar, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), Ea = M.forwardRef(oa);
export {
  Ea as B,
  Gi as C,
  wa as D,
  va as F,
  Ht as L,
  _a as N,
  xa as Q,
  ba as R,
  _t as T,
  Da as Y,
  ha as a,
  ya as b,
  Sa as c,
  Oa as d,
  hs as e,
  Cn as f,
  ga as g,
  Nn as h,
  Vi as i,
  Kn as j,
  Jn as k,
  ma as u
};
