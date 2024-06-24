import { I as Rn, b as De, j, f as Fr, F as tt, J as Tn, G as Mn, l as kn } from "./library-7049cee8.js";
import { A as Cn, g as An, i as Nn, a as Qt, k as Fn, u as Lr, P as Wr, l as Ln, I as Wn, f as Vn, j as jn, C as Bn, m as dr, o as In } from "./mui-2ff488a7.js";
import { r as M, R as re, e as Hn, c as yt, g as Vr } from "./react-6f5a8403.js";
import { F as Ue, p as jr } from "./icons-ad9f8a73.js";
import { f as Un } from "./faEye-bef7f0c1.js";
import { c as $n, f as Yn, e as Xn, h as lt, d as qn, b as Gn } from "./DictionaryCell-f2791dc0.js";
const Qn = (e, n = "id") => {
  const r = Rn();
  return (t) => {
    t && r.setQueryData([e, "item", t[n]], t);
  };
};
function Kn(e, n) {
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
function xa(e) {
  const n = M.useCallback(
    (i) => {
      const o = window.matchMedia(e);
      return o.addEventListener("change", i), () => {
        o.removeEventListener("change", i);
      };
    },
    [e]
  ), r = () => window.matchMedia(e).matches, t = () => {
    throw Error("useMediaQuery is a client-only hook");
  };
  return M.useSyncExternalStore(n, r, t);
}
function _a() {
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
const Jn = ({
  children: e,
  className: n,
  form: r
}) => {
  var i, o;
  const t = r.formState.errors;
  return /* @__PURE__ */ De("form", { className: n, onSubmit: r.onSubmit, children: [
    t.root && /* @__PURE__ */ De(Cn, { severity: "error", children: [
      ((i = t.root.error) == null ? void 0 : i.message) && /* @__PURE__ */ j(An, { css: [{
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
      }, !t.root.fields && {
        margin: "0px"
      }], children: (o = t.root.error) == null ? void 0 : o.message }),
      t.root.fields && /* @__PURE__ */ j("ul", { css: {
        listStylePosition: "inside",
        listStyleType: "disc",
        fontSize: "0.75rem",
        lineHeight: "1rem"
      }, children: Object.entries(t.root.fields).map(([a, {
        message: s
      }]) => /* @__PURE__ */ j("li", { css: {}, children: s }, a)) })
    ] }),
    e
  ] });
}, Da = Jn;
var ot = (e) => e.type === "checkbox", Qe = (e) => e instanceof Date, be = (e) => e == null;
const Br = (e) => typeof e == "object";
var le = (e) => !be(e) && !Array.isArray(e) && Br(e) && !Qe(e), Ir = (e) => le(e) && e.target ? ot(e.target) ? e.target.checked : e.target.value : e, Zn = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Hr = (e, n) => e.has(Zn(n)), ei = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return le(n) && n.hasOwnProperty("isPrototypeOf");
}, Kt = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Se(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(Kt && (e instanceof Blob || e instanceof FileList)) && (r || le(e)))
    if (n = r ? [] : {}, !r && !ei(e))
      n = e;
    else
      for (const t in e)
        e.hasOwnProperty(t) && (n[t] = Se(e[t]));
  else
    return e;
  return n;
}
var at = (e) => Array.isArray(e) ? e.filter(Boolean) : [], oe = (e) => e === void 0, E = (e, n, r) => {
  if (!n || !le(e))
    return r;
  const t = at(n.split(/[,[\].]+?/)).reduce((i, o) => be(i) ? i : i[o], e);
  return oe(t) || t === e ? oe(e[n]) ? r : e[n] : t;
}, Me = (e) => typeof e == "boolean";
const mt = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ke = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ve = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, ti = re.createContext(null), Jt = () => re.useContext(ti);
var Ur = (e, n, r, t = !0) => {
  const i = {
    defaultValues: n._defaultValues
  };
  for (const o in e)
    Object.defineProperty(i, o, {
      get: () => {
        const a = o;
        return n._proxyFormState[a] !== ke.all && (n._proxyFormState[a] = !t || ke.all), r && (r[a] = !0), e[a];
      }
    });
  return i;
}, Pe = (e) => le(e) && !Object.keys(e).length, $r = (e, n, r, t) => {
  r(e);
  const { name: i, ...o } = e;
  return Pe(o) || Object.keys(o).length >= Object.keys(n).length || Object.keys(o).find((a) => n[a] === (!t || ke.all));
}, gt = (e) => Array.isArray(e) ? e : [e], Yr = (e, n, r) => !e || !n || e === n || gt(e).some((t) => t && (r ? t === n : t.startsWith(n) || n.startsWith(t)));
function Zt(e) {
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
function ri(e) {
  const n = Jt(), { control: r = n.control, disabled: t, name: i, exact: o } = e || {}, [a, s] = re.useState(r._formState), u = re.useRef(!0), c = re.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = re.useRef(i);
  return d.current = i, Zt({
    disabled: t,
    next: (h) => u.current && Yr(d.current, h.name, o) && $r(h, c.current, r._updateFormState) && s({
      ...r._formState,
      ...h
    }),
    subject: r._subjects.state
  }), re.useEffect(() => (u.current = !0, c.current.isValid && r._updateValid(!0), () => {
    u.current = !1;
  }), [r]), Ur(a, r, c.current, !1);
}
var Fe = (e) => typeof e == "string", Xr = (e, n, r, t, i) => Fe(e) ? (t && n.watch.add(e), E(r, e, i)) : Array.isArray(e) ? e.map((o) => (t && n.watch.add(o), E(r, o))) : (t && (n.watchAll = !0), r);
function ni(e) {
  const n = Jt(), { control: r = n.control, name: t, defaultValue: i, disabled: o, exact: a } = e || {}, s = re.useRef(t);
  s.current = t, Zt({
    disabled: o,
    subject: r._subjects.values,
    next: (d) => {
      Yr(s.current, d.name, a) && c(Se(Xr(s.current, r._names, d.values || r._formValues, !1, i)));
    }
  });
  const [u, c] = re.useState(r._getWatch(t, i));
  return re.useEffect(() => r._removeUnmounted()), u;
}
var er = (e) => /^\w*$/.test(e), qr = (e) => at(e.replace(/["|']|\]/g, "").split(/\.|\[/)), te = (e, n, r) => {
  let t = -1;
  const i = er(n) ? [n] : qr(n), o = i.length, a = o - 1;
  for (; ++t < o; ) {
    const s = i[t];
    let u = r;
    if (t !== a) {
      const c = e[s];
      u = le(c) || Array.isArray(c) ? c : isNaN(+i[t + 1]) ? {} : [];
    }
    e[s] = u, e = e[s];
  }
  return e;
};
function ii(e) {
  const n = Jt(), { name: r, disabled: t, control: i = n.control, shouldUnregister: o } = e, a = Hr(i._names.array, r), s = ni({
    control: i,
    name: r,
    defaultValue: E(i._formValues, r, E(i._defaultValues, r, e.defaultValue)),
    exact: !0
  }), u = ri({
    control: i,
    name: r
  }), c = re.useRef(i.register(r, {
    ...e.rules,
    value: s,
    ...Me(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return re.useEffect(() => {
    const d = i._options.shouldUnregister || o, h = (p, y) => {
      const w = E(i._fields, p);
      w && (w._f.mount = y);
    };
    if (h(r, !0), d) {
      const p = Se(E(i._options.defaultValues, r));
      te(i._defaultValues, r, p), oe(E(i._formValues, r)) && te(i._formValues, r, p);
    }
    return () => {
      (a ? d && !i._state.action : d) ? i.unregister(r) : h(r, !1);
    };
  }, [r, i, a, o]), re.useEffect(() => {
    E(i._fields, r) && i._updateDisabledField({
      disabled: t,
      fields: i._fields,
      name: r,
      value: E(i._fields, r)._f.value
    });
  }, [t, r, i]), {
    field: {
      name: r,
      value: s,
      ...Me(t) || u.disabled ? { disabled: u.disabled || t } : {},
      onChange: re.useCallback((d) => c.current.onChange({
        target: {
          value: Ir(d),
          name: r
        },
        type: mt.CHANGE
      }), [r]),
      onBlur: re.useCallback(() => c.current.onBlur({
        target: {
          value: E(i._formValues, r),
          name: r
        },
        type: mt.BLUR
      }), [r, i]),
      ref: (d) => {
        const h = E(i._fields, r);
        h && d && (h._f.ref = {
          focus: () => d.focus(),
          select: () => d.select(),
          setCustomValidity: (p) => d.setCustomValidity(p),
          reportValidity: () => d.reportValidity()
        });
      }
    },
    formState: u,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!E(u.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!E(u.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!E(u.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => E(u.errors, r)
      }
    })
  };
}
const oi = (e) => e.render(ii(e));
var Gr = (e, n, r, t, i) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [t]: i || !0
  }
} : {}, pr = (e) => ({
  isOnSubmit: !e || e === ke.onSubmit,
  isOnBlur: e === ke.onBlur,
  isOnChange: e === ke.onChange,
  isOnAll: e === ke.all,
  isOnTouch: e === ke.onTouched
}), hr = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
const rt = (e, n, r, t) => {
  for (const i of r || Object.keys(e)) {
    const o = E(e, i);
    if (o) {
      const { _f: a, ...s } = o;
      if (a) {
        if (a.refs && a.refs[0] && n(a.refs[0], i) && !t)
          break;
        if (a.ref && n(a.ref, a.name) && !t)
          break;
        rt(s, n);
      } else
        le(s) && rt(s, n);
    }
  }
};
var ai = (e, n, r) => {
  const t = at(E(e, r));
  return te(t, "root", n[r]), te(e, r, t), e;
}, tr = (e) => e.type === "file", Ie = (e) => typeof e == "function", bt = (e) => {
  if (!Kt)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, vt = (e) => Fe(e), rr = (e) => e.type === "radio", wt = (e) => e instanceof RegExp;
const gr = {
  value: !1,
  isValid: !1
}, vr = { value: !0, isValid: !0 };
var Qr = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !oe(e[0].attributes.value) ? oe(e[0].value) || e[0].value === "" ? vr : { value: e[0].value, isValid: !0 } : vr
    ) : gr;
  }
  return gr;
};
const yr = {
  isValid: !1,
  value: null
};
var Kr = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, yr) : yr;
function mr(e, n, r = "validate") {
  if (vt(e) || Array.isArray(e) && e.every(vt) || Me(e) && !e)
    return {
      type: r,
      message: vt(e) ? e : "",
      ref: n
    };
}
var qe = (e) => le(e) && !wt(e) ? e : {
  value: e,
  message: ""
}, br = async (e, n, r, t, i) => {
  const { ref: o, refs: a, required: s, maxLength: u, minLength: c, min: d, max: h, pattern: p, validate: y, name: w, valueAsNumber: T, mount: W, disabled: O } = e._f, m = E(n, w);
  if (!W || O)
    return {};
  const P = a ? a[0] : o, C = (R) => {
    t && P.reportValidity && (P.setCustomValidity(Me(R) ? "" : R || ""), P.reportValidity());
  }, A = {}, Z = rr(o), Y = ot(o), I = Z || Y, V = (T || tr(o)) && oe(o.value) && oe(m) || bt(o) && o.value === "" || m === "" || Array.isArray(m) && !m.length, F = Gr.bind(null, w, r, A), U = (R, N, q, K = Ve.maxLength, Q = Ve.minLength) => {
    const G = R ? N : q;
    A[w] = {
      type: R ? K : Q,
      message: G,
      ref: o,
      ...F(R ? K : Q, G)
    };
  };
  if (i ? !Array.isArray(m) || !m.length : s && (!I && (V || be(m)) || Me(m) && !m || Y && !Qr(a).isValid || Z && !Kr(a).isValid)) {
    const { value: R, message: N } = vt(s) ? { value: !!s, message: s } : qe(s);
    if (R && (A[w] = {
      type: Ve.required,
      message: N,
      ref: P,
      ...F(Ve.required, N)
    }, !r))
      return C(N), A;
  }
  if (!V && (!be(d) || !be(h))) {
    let R, N;
    const q = qe(h), K = qe(d);
    if (!be(m) && !isNaN(m)) {
      const Q = o.valueAsNumber || m && +m;
      be(q.value) || (R = Q > q.value), be(K.value) || (N = Q < K.value);
    } else {
      const Q = o.valueAsDate || new Date(m), G = (ne) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ne), J = o.type == "time", ee = o.type == "week";
      Fe(q.value) && m && (R = J ? G(m) > G(q.value) : ee ? m > q.value : Q > new Date(q.value)), Fe(K.value) && m && (N = J ? G(m) < G(K.value) : ee ? m < K.value : Q < new Date(K.value));
    }
    if ((R || N) && (U(!!R, q.message, K.message, Ve.max, Ve.min), !r))
      return C(A[w].message), A;
  }
  if ((u || c) && !V && (Fe(m) || i && Array.isArray(m))) {
    const R = qe(u), N = qe(c), q = !be(R.value) && m.length > +R.value, K = !be(N.value) && m.length < +N.value;
    if ((q || K) && (U(q, R.message, N.message), !r))
      return C(A[w].message), A;
  }
  if (p && !V && Fe(m)) {
    const { value: R, message: N } = qe(p);
    if (wt(R) && !m.match(R) && (A[w] = {
      type: Ve.pattern,
      message: N,
      ref: o,
      ...F(Ve.pattern, N)
    }, !r))
      return C(N), A;
  }
  if (y) {
    if (Ie(y)) {
      const R = await y(m, n), N = mr(R, P);
      if (N && (A[w] = {
        ...N,
        ...F(Ve.validate, N.message)
      }, !r))
        return C(N.message), A;
    } else if (le(y)) {
      let R = {};
      for (const N in y) {
        if (!Pe(R) && !r)
          break;
        const q = mr(await y[N](m, n), P, N);
        q && (R = {
          ...q,
          ...F(N, q.message)
        }, C(q.message), r && (A[w] = R));
      }
      if (!Pe(R) && (A[w] = {
        ref: P,
        ...R
      }, !r))
        return A;
    }
  }
  return C(!0), A;
};
function si(e, n) {
  const r = n.slice(0, -1).length;
  let t = 0;
  for (; t < r; )
    e = oe(e) ? t++ : e[n[t++]];
  return e;
}
function li(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !oe(e[n]))
      return !1;
  return !0;
}
function pe(e, n) {
  const r = Array.isArray(n) ? n : er(n) ? [n] : qr(n), t = r.length === 1 ? e : si(e, r), i = r.length - 1, o = r[i];
  return t && delete t[o], i !== 0 && (le(t) && Pe(t) || Array.isArray(t) && li(t)) && pe(e, r.slice(0, -1)), e;
}
var At = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const o of e)
        o.next && o.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((o) => o !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, St = (e) => be(e) || !Br(e);
function He(e, n) {
  if (St(e) || St(n))
    return e === n;
  if (Qe(e) && Qe(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), t = Object.keys(n);
  if (r.length !== t.length)
    return !1;
  for (const i of r) {
    const o = e[i];
    if (!t.includes(i))
      return !1;
    if (i !== "ref") {
      const a = n[i];
      if (Qe(o) && Qe(a) || le(o) && le(a) || Array.isArray(o) && Array.isArray(a) ? !He(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var Jr = (e) => e.type === "select-multiple", ui = (e) => rr(e) || ot(e), Nt = (e) => bt(e) && e.isConnected, Zr = (e) => {
  for (const n in e)
    if (Ie(e[n]))
      return !0;
  return !1;
};
function xt(e, n = {}) {
  const r = Array.isArray(e);
  if (le(e) || r)
    for (const t in e)
      Array.isArray(e[t]) || le(e[t]) && !Zr(e[t]) ? (n[t] = Array.isArray(e[t]) ? [] : {}, xt(e[t], n[t])) : be(e[t]) || (n[t] = !0);
  return n;
}
function en(e, n, r) {
  const t = Array.isArray(e);
  if (le(e) || t)
    for (const i in e)
      Array.isArray(e[i]) || le(e[i]) && !Zr(e[i]) ? oe(n) || St(r[i]) ? r[i] = Array.isArray(e[i]) ? xt(e[i], []) : { ...xt(e[i]) } : en(e[i], be(n) ? {} : n[i], r[i]) : r[i] = !He(e[i], n[i]);
  return r;
}
var ut = (e, n) => en(e, n, xt(n)), tn = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: t }) => oe(e) ? e : n ? e === "" ? NaN : e && +e : r && Fe(e) ? new Date(e) : t ? t(e) : e;
function Ft(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return tr(n) ? n.files : rr(n) ? Kr(e.refs).value : Jr(n) ? [...n.selectedOptions].map(({ value: r }) => r) : ot(n) ? Qr(e.refs).value : tn(oe(n.value) ? e.ref.value : n.value, e);
}
var ci = (e, n, r, t) => {
  const i = {};
  for (const o of e) {
    const a = E(n, o);
    a && te(i, o, a._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: t
  };
}, Ze = (e) => oe(e) ? e : wt(e) ? e.source : le(e) ? wt(e.value) ? e.value.source : e.value : e, fi = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function wr(e, n, r) {
  const t = E(e, r);
  if (t || er(r))
    return {
      error: t,
      name: r
    };
  const i = r.split(".");
  for (; i.length; ) {
    const o = i.join("."), a = E(n, o), s = E(e, o);
    if (a && !Array.isArray(a) && r !== o)
      return { name: r };
    if (s && s.type)
      return {
        name: o,
        error: s
      };
    i.pop();
  }
  return {
    name: r
  };
}
var di = (e, n, r, t, i) => i.isOnAll ? !1 : !r && i.isOnTouch ? !(n || e) : (r ? t.isOnBlur : i.isOnBlur) ? !e : (r ? t.isOnChange : i.isOnChange) ? e : !0, pi = (e, n) => !at(E(e, n)).length && pe(e, n);
const hi = {
  mode: ke.onSubmit,
  reValidateMode: ke.onChange,
  shouldFocusError: !0
};
function gi(e = {}, n) {
  let r = {
    ...hi,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Ie(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, i = {}, o = le(r.values) || le(r.defaultValues) ? Se(r.values || r.defaultValues) || {} : {}, a = r.shouldUnregister ? {} : Se(o), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, u = {
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
    values: At(),
    array: At(),
    state: At()
  }, y = pr(r.mode), w = pr(r.reValidateMode), T = r.criteriaMode === ke.all, W = (l) => (f) => {
    clearTimeout(d), d = setTimeout(l, f);
  }, O = async (l) => {
    if (h.isValid || l) {
      const f = r.resolver ? Pe((await V()).errors) : await U(i, !0);
      f !== t.isValid && p.state.next({
        isValid: f
      });
    }
  }, m = (l) => h.isValidating && p.state.next({
    isValidating: l
  }), P = (l, f = [], g, k, z = !0, x = !0) => {
    if (k && g) {
      if (s.action = !0, x && Array.isArray(E(i, l))) {
        const B = g(E(i, l), k.argA, k.argB);
        z && te(i, l, B);
      }
      if (x && Array.isArray(E(t.errors, l))) {
        const B = g(E(t.errors, l), k.argA, k.argB);
        z && te(t.errors, l, B), pi(t.errors, l);
      }
      if (h.touchedFields && x && Array.isArray(E(t.touchedFields, l))) {
        const B = g(E(t.touchedFields, l), k.argA, k.argB);
        z && te(t.touchedFields, l, B);
      }
      h.dirtyFields && (t.dirtyFields = ut(o, a)), p.state.next({
        name: l,
        isDirty: N(l, f),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      te(a, l, f);
  }, C = (l, f) => {
    te(t.errors, l, f), p.state.next({
      errors: t.errors
    });
  }, A = (l) => {
    t.errors = l, p.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, Z = (l, f, g, k) => {
    const z = E(i, l);
    if (z) {
      const x = E(a, l, oe(g) ? E(o, l) : g);
      oe(x) || k && k.defaultChecked || f ? te(a, l, f ? x : Ft(z._f)) : Q(l, x), s.mount && O();
    }
  }, Y = (l, f, g, k, z) => {
    let x = !1, B = !1;
    const ie = {
      name: l
    }, ue = !!(E(i, l) && E(i, l)._f.disabled);
    if (!g || k) {
      h.isDirty && (B = t.isDirty, t.isDirty = ie.isDirty = N(), x = B !== ie.isDirty);
      const Ae = ue || He(E(o, l), f);
      B = !!(!ue && E(t.dirtyFields, l)), Ae || ue ? pe(t.dirtyFields, l) : te(t.dirtyFields, l, !0), ie.dirtyFields = t.dirtyFields, x = x || h.dirtyFields && B !== !Ae;
    }
    if (g) {
      const Ae = E(t.touchedFields, l);
      Ae || (te(t.touchedFields, l, g), ie.touchedFields = t.touchedFields, x = x || h.touchedFields && Ae !== g);
    }
    return x && z && p.state.next(ie), x ? ie : {};
  }, I = (l, f, g, k) => {
    const z = E(t.errors, l), x = h.isValid && Me(f) && t.isValid !== f;
    if (e.delayError && g ? (c = W(() => C(l, g)), c(e.delayError)) : (clearTimeout(d), c = null, g ? te(t.errors, l, g) : pe(t.errors, l)), (g ? !He(z, g) : z) || !Pe(k) || x) {
      const B = {
        ...k,
        ...x && Me(f) ? { isValid: f } : {},
        errors: t.errors,
        name: l
      };
      t = {
        ...t,
        ...B
      }, p.state.next(B);
    }
    m(!1);
  }, V = async (l) => r.resolver(a, r.context, ci(l || u.mount, i, r.criteriaMode, r.shouldUseNativeValidation)), F = async (l) => {
    const { errors: f } = await V(l);
    if (l)
      for (const g of l) {
        const k = E(f, g);
        k ? te(t.errors, g, k) : pe(t.errors, g);
      }
    else
      t.errors = f;
    return f;
  }, U = async (l, f, g = {
    valid: !0
  }) => {
    for (const k in l) {
      const z = l[k];
      if (z) {
        const { _f: x, ...B } = z;
        if (x) {
          const ie = u.array.has(x.name), ue = await br(z, a, T, r.shouldUseNativeValidation && !f, ie);
          if (ue[x.name] && (g.valid = !1, f))
            break;
          !f && (E(ue, x.name) ? ie ? ai(t.errors, ue, x.name) : te(t.errors, x.name, ue[x.name]) : pe(t.errors, x.name));
        }
        B && await U(B, f, g);
      }
    }
    return g.valid;
  }, R = () => {
    for (const l of u.unMount) {
      const f = E(i, l);
      f && (f._f.refs ? f._f.refs.every((g) => !Nt(g)) : !Nt(f._f.ref)) && L(l);
    }
    u.unMount = /* @__PURE__ */ new Set();
  }, N = (l, f) => (l && f && te(a, l, f), !He(v(), o)), q = (l, f, g) => Xr(l, u, {
    ...s.mount ? a : oe(f) ? o : Fe(l) ? { [l]: f } : f
  }, g, f), K = (l) => at(E(s.mount ? a : o, l, e.shouldUnregister ? E(o, l, []) : [])), Q = (l, f, g = {}) => {
    const k = E(i, l);
    let z = f;
    if (k) {
      const x = k._f;
      x && (!x.disabled && te(a, l, tn(f, x)), z = bt(x.ref) && be(f) ? "" : f, Jr(x.ref) ? [...x.ref.options].forEach((B) => B.selected = z.includes(B.value)) : x.refs ? ot(x.ref) ? x.refs.length > 1 ? x.refs.forEach((B) => (!B.defaultChecked || !B.disabled) && (B.checked = Array.isArray(z) ? !!z.find((ie) => ie === B.value) : z === B.value)) : x.refs[0] && (x.refs[0].checked = !!z) : x.refs.forEach((B) => B.checked = B.value === z) : tr(x.ref) ? x.ref.value = "" : (x.ref.value = z, x.ref.type || p.values.next({
        name: l,
        values: { ...a }
      })));
    }
    (g.shouldDirty || g.shouldTouch) && Y(l, z, g.shouldTouch, g.shouldDirty, !0), g.shouldValidate && fe(l);
  }, G = (l, f, g) => {
    for (const k in f) {
      const z = f[k], x = `${l}.${k}`, B = E(i, x);
      (u.array.has(l) || !St(z) || B && !B._f) && !Qe(z) ? G(x, z, g) : Q(x, z, g);
    }
  }, J = (l, f, g = {}) => {
    const k = E(i, l), z = u.array.has(l), x = Se(f);
    te(a, l, x), z ? (p.array.next({
      name: l,
      values: { ...a }
    }), (h.isDirty || h.dirtyFields) && g.shouldDirty && p.state.next({
      name: l,
      dirtyFields: ut(o, a),
      isDirty: N(l, x)
    })) : k && !k._f && !be(x) ? G(l, x, g) : Q(l, x, g), hr(l, u) && p.state.next({ ...t }), p.values.next({
      name: l,
      values: { ...a }
    }), !s.mount && n();
  }, ee = async (l) => {
    const f = l.target;
    let g = f.name, k = !0;
    const z = E(i, g), x = () => f.type ? Ft(z._f) : Ir(l), B = (ie) => {
      k = Number.isNaN(ie) || ie === E(a, g, ie);
    };
    if (z) {
      let ie, ue;
      const Ae = x(), Xe = l.type === mt.BLUR || l.type === mt.FOCUS_OUT, zn = !fi(z._f) && !r.resolver && !E(t.errors, g) && !z._f.deps || di(Xe, E(t.touchedFields, g), t.isSubmitted, w, y), kt = hr(g, u, Xe);
      te(a, g, Ae), Xe ? (z._f.onBlur && z._f.onBlur(l), c && c(0)) : z._f.onChange && z._f.onChange(l);
      const Ct = Y(g, Ae, Xe, !1), En = !Pe(Ct) || kt;
      if (!Xe && p.values.next({
        name: g,
        type: l.type,
        values: { ...a }
      }), zn)
        return h.isValid && O(), En && p.state.next({ name: g, ...kt ? {} : Ct });
      if (!Xe && kt && p.state.next({ ...t }), m(!0), r.resolver) {
        const { errors: cr } = await V([g]);
        if (B(Ae), k) {
          const Pn = wr(t.errors, i, g), fr = wr(cr, i, Pn.name || g);
          ie = fr.error, g = fr.name, ue = Pe(cr);
        }
      } else
        ie = (await br(z, a, T, r.shouldUseNativeValidation))[g], B(Ae), k && (ie ? ue = !1 : h.isValid && (ue = await U(i, !0)));
      k && (z._f.deps && fe(z._f.deps), I(g, ue, ie, Ct));
    }
  }, ne = (l, f) => {
    if (E(t.errors, f) && l.focus)
      return l.focus(), 1;
  }, fe = async (l, f = {}) => {
    let g, k;
    const z = gt(l);
    if (m(!0), r.resolver) {
      const x = await F(oe(l) ? l : z);
      g = Pe(x), k = l ? !z.some((B) => E(x, B)) : g;
    } else
      l ? (k = (await Promise.all(z.map(async (x) => {
        const B = E(i, x);
        return await U(B && B._f ? { [x]: B } : B);
      }))).every(Boolean), !(!k && !t.isValid) && O()) : k = g = await U(i);
    return p.state.next({
      ...!Fe(l) || h.isValid && g !== t.isValid ? {} : { name: l },
      ...r.resolver || !l ? { isValid: g } : {},
      errors: t.errors,
      isValidating: !1
    }), f.shouldFocus && !k && rt(i, ne, l ? z : u.mount), k;
  }, v = (l) => {
    const f = {
      ...o,
      ...s.mount ? a : {}
    };
    return oe(l) ? f : Fe(l) ? E(f, l) : l.map((g) => E(f, g));
  }, b = (l, f) => ({
    invalid: !!E((f || t).errors, l),
    isDirty: !!E((f || t).dirtyFields, l),
    isTouched: !!E((f || t).touchedFields, l),
    error: E((f || t).errors, l)
  }), S = (l) => {
    l && gt(l).forEach((f) => pe(t.errors, f)), p.state.next({
      errors: l ? t.errors : {}
    });
  }, _ = (l, f, g) => {
    const k = (E(i, l, { _f: {} })._f || {}).ref;
    te(t.errors, l, {
      ...f,
      ref: k
    }), p.state.next({
      name: l,
      errors: t.errors,
      isValid: !1
    }), g && g.shouldFocus && k && k.focus && k.focus();
  }, D = (l, f) => Ie(l) ? p.values.subscribe({
    next: (g) => l(q(void 0, f), g)
  }) : q(l, f, !0), L = (l, f = {}) => {
    for (const g of l ? gt(l) : u.mount)
      u.mount.delete(g), u.array.delete(g), f.keepValue || (pe(i, g), pe(a, g)), !f.keepError && pe(t.errors, g), !f.keepDirty && pe(t.dirtyFields, g), !f.keepTouched && pe(t.touchedFields, g), !r.shouldUnregister && !f.keepDefaultValue && pe(o, g);
    p.values.next({
      values: { ...a }
    }), p.state.next({
      ...t,
      ...f.keepDirty ? { isDirty: N() } : {}
    }), !f.keepIsValid && O();
  }, $ = ({ disabled: l, name: f, field: g, fields: k, value: z }) => {
    if (Me(l)) {
      const x = l ? void 0 : oe(z) ? Ft(g ? g._f : E(k, f)._f) : z;
      te(a, f, x), Y(f, x, !1, !1, !0);
    }
  }, H = (l, f = {}) => {
    let g = E(i, l);
    const k = Me(f.disabled);
    return te(i, l, {
      ...g || {},
      _f: {
        ...g && g._f ? g._f : { ref: { name: l } },
        name: l,
        mount: !0,
        ...f
      }
    }), u.mount.add(l), g ? $({
      field: g,
      disabled: f.disabled,
      name: l,
      value: f.value
    }) : Z(l, !0, f.value), {
      ...k ? { disabled: f.disabled } : {},
      ...r.progressive ? {
        required: !!f.required,
        min: Ze(f.min),
        max: Ze(f.max),
        minLength: Ze(f.minLength),
        maxLength: Ze(f.maxLength),
        pattern: Ze(f.pattern)
      } : {},
      name: l,
      onChange: ee,
      onBlur: ee,
      ref: (z) => {
        if (z) {
          H(l, f), g = E(i, l);
          const x = oe(z.value) && z.querySelectorAll && z.querySelectorAll("input,select,textarea")[0] || z, B = ui(x), ie = g._f.refs || [];
          if (B ? ie.find((ue) => ue === x) : x === g._f.ref)
            return;
          te(i, l, {
            _f: {
              ...g._f,
              ...B ? {
                refs: [
                  ...ie.filter(Nt),
                  x,
                  ...Array.isArray(E(o, l)) ? [{}] : []
                ],
                ref: { type: x.type, name: l }
              } : { ref: x }
            }
          }), Z(l, !1, void 0, x);
        } else
          g = E(i, l, {}), g._f && (g._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(Hr(u.array, l) && s.action) && u.unMount.add(l);
      }
    };
  }, X = () => r.shouldFocusError && rt(i, ne, u.mount), ve = (l) => {
    Me(l) && (p.state.next({ disabled: l }), rt(i, (f, g) => {
      let k = l;
      const z = E(i, g);
      z && Me(z._f.disabled) && (k || (k = z._f.disabled)), f.disabled = k;
    }, 0, !1));
  }, de = (l, f) => async (g) => {
    let k;
    g && (g.preventDefault && g.preventDefault(), g.persist && g.persist());
    let z = Se(a);
    if (p.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: x, values: B } = await V();
      t.errors = x, z = B;
    } else
      await U(i);
    if (pe(t.errors, "root"), Pe(t.errors)) {
      p.state.next({
        errors: {}
      });
      try {
        await l(z, g);
      } catch (x) {
        k = x;
      }
    } else
      f && await f({ ...t.errors }, g), X(), setTimeout(X);
    if (p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Pe(t.errors) && !k,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), k)
      throw k;
  }, ye = (l, f = {}) => {
    E(i, l) && (oe(f.defaultValue) ? J(l, Se(E(o, l))) : (J(l, f.defaultValue), te(o, l, Se(f.defaultValue))), f.keepTouched || pe(t.touchedFields, l), f.keepDirty || (pe(t.dirtyFields, l), t.isDirty = f.defaultValue ? N(l, Se(E(o, l))) : N()), f.keepError || (pe(t.errors, l), h.isValid && O()), p.state.next({ ...t }));
  }, we = (l, f = {}) => {
    const g = l ? Se(l) : o, k = Se(g), z = l && !Pe(l) ? k : o;
    if (f.keepDefaultValues || (o = g), !f.keepValues) {
      if (f.keepDirtyValues)
        for (const x of u.mount)
          E(t.dirtyFields, x) ? te(z, x, E(a, x)) : J(x, E(z, x));
      else {
        if (Kt && oe(l))
          for (const x of u.mount) {
            const B = E(i, x);
            if (B && B._f) {
              const ie = Array.isArray(B._f.refs) ? B._f.refs[0] : B._f.ref;
              if (bt(ie)) {
                const ue = ie.closest("form");
                if (ue) {
                  ue.reset();
                  break;
                }
              }
            }
          }
        i = {};
      }
      a = e.shouldUnregister ? f.keepDefaultValues ? Se(o) : {} : Se(z), p.array.next({
        values: { ...z }
      }), p.values.next({
        values: { ...z }
      });
    }
    u = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !s.mount && n(), s.mount = !h.isValid || !!f.keepIsValid || !!f.keepDirtyValues, s.watch = !!e.shouldUnregister, p.state.next({
      submitCount: f.keepSubmitCount ? t.submitCount : 0,
      isDirty: f.keepDirty ? t.isDirty : !!(f.keepDefaultValues && !He(l, o)),
      isSubmitted: f.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: f.keepDirtyValues ? f.keepDefaultValues && a ? ut(o, a) : t.dirtyFields : f.keepDefaultValues && l ? ut(o, l) : {},
      touchedFields: f.keepTouched ? t.touchedFields : {},
      errors: f.keepErrors ? t.errors : {},
      isSubmitSuccessful: f.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ze = (l, f) => we(Ie(l) ? l(a) : l, f);
  return {
    control: {
      register: H,
      unregister: L,
      getFieldState: b,
      handleSubmit: de,
      setError: _,
      _executeSchema: V,
      _getWatch: q,
      _getDirty: N,
      _updateValid: O,
      _removeUnmounted: R,
      _updateFieldArray: P,
      _updateDisabledField: $,
      _getFieldArray: K,
      _reset: we,
      _resetDefaultValues: () => Ie(r.defaultValues) && r.defaultValues().then((l) => {
        ze(l, r.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (l) => {
        t = {
          ...t,
          ...l
        };
      },
      _disableForm: ve,
      _subjects: p,
      _proxyFormState: h,
      _setErrors: A,
      get _fields() {
        return i;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(l) {
        s = l;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return u;
      },
      set _names(l) {
        u = l;
      },
      get _formState() {
        return t;
      },
      set _formState(l) {
        t = l;
      },
      get _options() {
        return r;
      },
      set _options(l) {
        r = {
          ...r,
          ...l
        };
      }
    },
    trigger: fe,
    register: H,
    handleSubmit: de,
    watch: D,
    setValue: J,
    getValues: v,
    reset: ze,
    resetField: ye,
    clearErrors: S,
    unregister: L,
    setError: _,
    setFocus: (l, f = {}) => {
      const g = E(i, l), k = g && g._f;
      if (k) {
        const z = k.refs ? k.refs[0] : k.ref;
        z.focus && (z.focus(), f.shouldSelect && z.select());
      }
    },
    getFieldState: b
  };
}
function vi(e = {}) {
  const n = re.useRef(), r = re.useRef(), [t, i] = re.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ie(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: Ie(e.defaultValues) ? void 0 : e.defaultValues
  });
  n.current || (n.current = {
    ...gi(e, () => i((a) => ({ ...a }))),
    formState: t
  });
  const o = n.current.control;
  return o._options = e, Zt({
    subject: o._subjects.state,
    next: (a) => {
      $r(a, o._proxyFormState, o._updateFormState, !0) && i({ ...o._formState });
    }
  }), re.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), re.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== t.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, t.isDirty]), re.useEffect(() => {
    e.values && !He(e.values, r.current) ? (o._reset(e.values, o._options.resetOptions), r.current = e.values, i((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [e.values, o]), re.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), re.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), re.useEffect(() => {
    e.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    });
  }, [e.shouldUnregister, o]), n.current.formState = Ur(t, o), n.current;
}
const yi = ({
  render: e,
  ...n
}) => /* @__PURE__ */ j(oi, { ...n, render: ({
  field: r,
  fieldState: t,
  ...i
}) => {
  var o;
  return e({
    field: {
      ...r,
      error: (o = t.error) == null ? void 0 : o.message
    },
    fieldState: t,
    ...i
  });
} }), Oa = yi;
var rn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", r = "triangle-exclamation", t = 512, i = 512, o = [9888, "exclamation-triangle", "warning"], a = "f071", s = "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z";
  e.definition = {
    prefix: n,
    iconName: r,
    icon: [
      t,
      i,
      o,
      a,
      s
    ]
  }, e.faTriangleExclamation = e.definition, e.prefix = n, e.iconName = r, e.width = t, e.height = i, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(rn);
const mi = ({
  helperText: e,
  label: n,
  error: r,
  children: t,
  ...i
}, o) => (e = r || e, /* @__PURE__ */ De("div", { ref: o, css: [{
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem"
}, n && {
  paddingTop: "1.5rem"
}], ...i, children: [
  t,
  n && /* @__PURE__ */ j("label", { css: [{
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
  e && /* @__PURE__ */ De("div", { css: [{
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
    r && /* @__PURE__ */ j(Ue, { css: {
      color: "rgb(220 38 38 / 0.7)"
    }, icon: rn.faTriangleExclamation }),
    e
  ] })
] })), zt = M.forwardRef(mi);
var Sr = function(e, n, r) {
  if (e && "reportValidity" in e) {
    var t = E(r, n);
    e.setCustomValidity(t && t.message || ""), e.reportValidity();
  }
}, nn = function(e, n) {
  var r = function(i) {
    var o = n.fields[i];
    o && o.ref && "reportValidity" in o.ref ? Sr(o.ref, i, e) : o.refs && o.refs.forEach(function(a) {
      return Sr(a, i, e);
    });
  };
  for (var t in n.fields)
    r(t);
}, bi = function(e, n) {
  n.shouldUseNativeValidation && nn(e, n);
  var r = {};
  for (var t in e) {
    var i = E(n.fields, t), o = Object.assign(e[t] || {}, { ref: i && i.ref });
    if (wi(n.names || Object.keys(e), t)) {
      var a = Object.assign({}, E(r, t));
      te(a, "root", o), te(r, t, a);
    } else
      te(r, t, o);
  }
  return r;
}, wi = function(e, n) {
  return e.some(function(r) {
    return r.startsWith(n + ".");
  });
}, Si = function(e, n) {
  for (var r = {}; e.length; ) {
    var t = e[0], i = t.code, o = t.message, a = t.path.join(".");
    if (!r[a])
      if ("unionErrors" in t) {
        var s = t.unionErrors[0].errors[0];
        r[a] = { message: s.message, type: s.code };
      } else
        r[a] = { message: o, type: i };
    if ("unionErrors" in t && t.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(h) {
        return e.push(h);
      });
    }), n) {
      var u = r[a].types, c = u && u[t.code];
      r[a] = Gr(a, n, r, i, c ? [].concat(c, t.message) : t.message);
    }
    e.shift();
  }
  return r;
}, xi = function(e, n, r) {
  return r === void 0 && (r = {}), function(t, i, o) {
    try {
      return Promise.resolve(function(a, s) {
        try {
          var u = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](t, n)).then(function(c) {
            return o.shouldUseNativeValidation && nn({}, o), { errors: {}, values: r.raw ? t : c };
          });
        } catch (c) {
          return s(c);
        }
        return u && u.then ? u.then(void 0, s) : u;
      }(0, function(a) {
        if (function(s) {
          return s.errors != null;
        }(a))
          return { values: {}, errors: bi(Si(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
};
const _i = ({
  schema: e,
  mode: n = "onChange",
  reValidateMode: r = "onChange",
  onValid: t,
  onInvalid: i,
  ...o
} = {}) => {
  const a = vi({
    mode: n,
    reValidateMode: r,
    resolver: e ? xi(e) : void 0,
    ...o
  });
  return {
    onSubmit: a.handleSubmit((s, u) => t == null ? void 0 : t(s, u), i),
    submit: async () => new Promise((s, u) => {
      a.handleSubmit(async (d, h) => {
        try {
          await (t == null ? void 0 : t(d, h)), s(void 0);
        } catch (p) {
          u(p);
        }
      }, (d) => {
        u(d);
      })();
    }),
    ...a
  };
}, za = ({
  onValid: e,
  context: n,
  mutation: r,
  defaultValues: t,
  schema: i,
  transformSendData: o,
  ...a
}) => {
  const s = _i({
    context: n,
    schema: i,
    defaultValues: t,
    onValid: async (u) => {
      await (e == null ? void 0 : e(u)), await (r == null ? void 0 : r.mutateAsync(o ? o(u) : u, {
        onError: (c, d) => {
          var p;
          const h = (p = c.response) == null ? void 0 : p.data;
          h ? h.errors ? h.errors.forEach((y) => {
            y.attribute in d ? s.setError(y.attribute, {
              message: y.msg
            }) : s.setError(`root.fields.${y.attribute}`, {
              type: "server",
              message: y.msg
            });
          }) : s.setError("root.error", {
            type: "server",
            message: h.message
          }) : s.setError("root.error", {
            type: "server",
            message: c.message
          });
        }
      }));
    },
    ...a
  });
  return s;
};
var on = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", r = "xmark", t = 384, i = 512, o = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], a = "f00d", s = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  e.definition = {
    prefix: n,
    iconName: r,
    icon: [
      t,
      i,
      o,
      a,
      s
    ]
  }, e.faXmark = e.definition, e.prefix = n, e.iconName = r, e.width = t, e.height = i, e.ligatures = o, e.unicode = a, e.svgPathData = s, e.aliases = o;
})(on);
var Et = { exports: {} }, an = {};
function sn(e) {
  var n, r, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (n = 0; n < e.length; n++)
        e[n] && (r = sn(e[n])) && (t && (t += " "), t += r);
    else
      for (n in e)
        e[n] && (t && (t += " "), t += n);
  return t;
}
function xr() {
  for (var e, n, r = 0, t = ""; r < arguments.length; )
    (e = arguments[r++]) && (n = sn(e)) && (t && (t += " "), t += n);
  return t;
}
const Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: xr,
  default: xr
}, Symbol.toStringTag, { value: "Module" })), Oi = /* @__PURE__ */ Hn(Di);
var ae = {}, Le = {};
Object.defineProperty(Le, "__esModule", {
  value: !0
});
Le.dontSetMe = Ti;
Le.findInArray = zi;
Le.int = Ri;
Le.isFunction = Ei;
Le.isNum = Pi;
function zi(e, n) {
  for (var r = 0, t = e.length; r < t; r++)
    if (n.apply(n, [e[r], r, e]))
      return e[r];
}
function Ei(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Pi(e) {
  return typeof e == "number" && !isNaN(e);
}
function Ri(e) {
  return parseInt(e, 10);
}
function Ti(e, n, r) {
  if (e[n])
    return new Error("Invalid prop ".concat(n, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.browserPrefixToKey = un;
$e.browserPrefixToStyle = Mi;
$e.default = void 0;
$e.getPrefix = ln;
var Lt = ["Moz", "Webkit", "O", "ms"];
function ln() {
  var e, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  var t = (e = window.document) === null || e === void 0 || (n = e.documentElement) === null || n === void 0 ? void 0 : n.style;
  if (!t || r in t)
    return "";
  for (var i = 0; i < Lt.length; i++)
    if (un(r, Lt[i]) in t)
      return Lt[i];
  return "";
}
function un(e, n) {
  return n ? "".concat(n).concat(ki(e)) : e;
}
function Mi(e, n) {
  return n ? "-".concat(n.toLowerCase(), "-").concat(e) : e;
}
function ki(e) {
  for (var n = "", r = !0, t = 0; t < e.length; t++)
    r ? (n += e[t].toUpperCase(), r = !1) : e[t] === "-" ? r = !0 : n += e[t];
  return n;
}
var Ci = ln();
$e.default = Ci;
function It(e) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, It(e);
}
Object.defineProperty(ae, "__esModule", {
  value: !0
});
ae.addClassName = hn;
ae.addEvent = Fi;
ae.addUserSelectStyles = Xi;
ae.createCSSTransform = Hi;
ae.createSVGTransform = Ui;
ae.getTouch = $i;
ae.getTouchIdentifier = Yi;
ae.getTranslation = nr;
ae.innerHeight = ji;
ae.innerWidth = Bi;
ae.matchesSelector = pn;
ae.matchesSelectorAndParentsTo = Ni;
ae.offsetXYFromParent = Ii;
ae.outerHeight = Wi;
ae.outerWidth = Vi;
ae.removeClassName = gn;
ae.removeEvent = Li;
ae.removeUserSelectStyles = qi;
var Oe = Le, _r = Ai($e);
function cn(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (cn = function(i) {
    return i ? r : n;
  })(e);
}
function Ai(e, n) {
  if (!n && e && e.__esModule)
    return e;
  if (e === null || It(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = cn(n);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      a && (a.get || a.set) ? Object.defineProperty(t, o, a) : t[o] = e[o];
    }
  return t.default = e, r && r.set(e, t), t;
}
function Dr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function fn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Dr(Object(r), !0).forEach(function(t) {
      dn(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function dn(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
var ct = "";
function pn(e, n) {
  return ct || (ct = (0, Oe.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, Oe.isFunction)(e[r]);
  })), (0, Oe.isFunction)(e[ct]) ? e[ct](n) : !1;
}
function Ni(e, n, r) {
  var t = e;
  do {
    if (pn(t, n))
      return !0;
    if (t === r)
      return !1;
    t = t.parentNode;
  } while (t);
  return !1;
}
function Fi(e, n, r, t) {
  if (e) {
    var i = fn({
      capture: !0
    }, t);
    e.addEventListener ? e.addEventListener(n, r, i) : e.attachEvent ? e.attachEvent("on" + n, r) : e["on" + n] = r;
  }
}
function Li(e, n, r, t) {
  if (e) {
    var i = fn({
      capture: !0
    }, t);
    e.removeEventListener ? e.removeEventListener(n, r, i) : e.detachEvent ? e.detachEvent("on" + n, r) : e["on" + n] = null;
  }
}
function Wi(e) {
  var n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n += (0, Oe.int)(r.borderTopWidth), n += (0, Oe.int)(r.borderBottomWidth), n;
}
function Vi(e) {
  var n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n += (0, Oe.int)(r.borderLeftWidth), n += (0, Oe.int)(r.borderRightWidth), n;
}
function ji(e) {
  var n = e.clientHeight, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n -= (0, Oe.int)(r.paddingTop), n -= (0, Oe.int)(r.paddingBottom), n;
}
function Bi(e) {
  var n = e.clientWidth, r = e.ownerDocument.defaultView.getComputedStyle(e);
  return n -= (0, Oe.int)(r.paddingLeft), n -= (0, Oe.int)(r.paddingRight), n;
}
function Ii(e, n, r) {
  var t = n === n.ownerDocument.body, i = t ? {
    left: 0,
    top: 0
  } : n.getBoundingClientRect(), o = (e.clientX + n.scrollLeft - i.left) / r, a = (e.clientY + n.scrollTop - i.top) / r;
  return {
    x: o,
    y: a
  };
}
function Hi(e, n) {
  var r = nr(e, n, "px");
  return dn({}, (0, _r.browserPrefixToKey)("transform", _r.default), r);
}
function Ui(e, n) {
  var r = nr(e, n, "");
  return r;
}
function nr(e, n, r) {
  var t = e.x, i = e.y, o = "translate(".concat(t).concat(r, ",").concat(i).concat(r, ")");
  if (n) {
    var a = "".concat(typeof n.x == "string" ? n.x : n.x + r), s = "".concat(typeof n.y == "string" ? n.y : n.y + r);
    o = "translate(".concat(a, ", ").concat(s, ")") + o;
  }
  return o;
}
function $i(e, n) {
  return e.targetTouches && (0, Oe.findInArray)(e.targetTouches, function(r) {
    return n === r.identifier;
  }) || e.changedTouches && (0, Oe.findInArray)(e.changedTouches, function(r) {
    return n === r.identifier;
  });
}
function Yi(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Xi(e) {
  if (e) {
    var n = e.getElementById("react-draggable-style-el");
    n || (n = e.createElement("style"), n.type = "text/css", n.id = "react-draggable-style-el", n.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, n.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(n)), e.body && hn(e.body, "react-draggable-transparent-selection");
  }
}
function qi(e) {
  if (e)
    try {
      if (e.body && gn(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        var n = (e.defaultView || window).getSelection();
        n && n.type !== "Caret" && n.removeAllRanges();
      }
    } catch {
    }
}
function hn(e, n) {
  e.classList ? e.classList.add(n) : e.className.match(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"))) || (e.className += " ".concat(n));
}
function gn(e, n) {
  e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(n, "(?!\\S)"), "g"), "");
}
var We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.canDragX = Ki;
We.canDragY = Ji;
We.createCoreData = eo;
We.createDraggableData = to;
We.getBoundPosition = Gi;
We.getControlPosition = Zi;
We.snapToGrid = Qi;
var _e = Le, Ke = ae;
function Gi(e, n, r) {
  if (!e.props.bounds)
    return [n, r];
  var t = e.props.bounds;
  t = typeof t == "string" ? t : ro(t);
  var i = ir(e);
  if (typeof t == "string") {
    var o = i.ownerDocument, a = o.defaultView, s;
    if (t === "parent" ? s = i.parentNode : s = o.querySelector(t), !(s instanceof a.HTMLElement))
      throw new Error('Bounds selector "' + t + '" could not find an element.');
    var u = s, c = a.getComputedStyle(i), d = a.getComputedStyle(u);
    t = {
      left: -i.offsetLeft + (0, _e.int)(d.paddingLeft) + (0, _e.int)(c.marginLeft),
      top: -i.offsetTop + (0, _e.int)(d.paddingTop) + (0, _e.int)(c.marginTop),
      right: (0, Ke.innerWidth)(u) - (0, Ke.outerWidth)(i) - i.offsetLeft + (0, _e.int)(d.paddingRight) - (0, _e.int)(c.marginRight),
      bottom: (0, Ke.innerHeight)(u) - (0, Ke.outerHeight)(i) - i.offsetTop + (0, _e.int)(d.paddingBottom) - (0, _e.int)(c.marginBottom)
    };
  }
  return (0, _e.isNum)(t.right) && (n = Math.min(n, t.right)), (0, _e.isNum)(t.bottom) && (r = Math.min(r, t.bottom)), (0, _e.isNum)(t.left) && (n = Math.max(n, t.left)), (0, _e.isNum)(t.top) && (r = Math.max(r, t.top)), [n, r];
}
function Qi(e, n, r) {
  var t = Math.round(n / e[0]) * e[0], i = Math.round(r / e[1]) * e[1];
  return [t, i];
}
function Ki(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Ji(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Zi(e, n, r) {
  var t = typeof n == "number" ? (0, Ke.getTouch)(e, n) : null;
  if (typeof n == "number" && !t)
    return null;
  var i = ir(r), o = r.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, Ke.offsetXYFromParent)(t || e, o, r.props.scale);
}
function eo(e, n, r) {
  var t = e.state, i = !(0, _e.isNum)(t.lastX), o = ir(e);
  return i ? {
    node: o,
    deltaX: 0,
    deltaY: 0,
    lastX: n,
    lastY: r,
    x: n,
    y: r
  } : {
    node: o,
    deltaX: n - t.lastX,
    deltaY: r - t.lastY,
    lastX: t.lastX,
    lastY: t.lastY,
    x: n,
    y: r
  };
}
function to(e, n) {
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
function ro(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function ir(e) {
  var n = e.findDOMNode();
  if (!n)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return n;
}
var Pt = {}, Rt = {};
Object.defineProperty(Rt, "__esModule", {
  value: !0
});
Rt.default = no;
function no() {
}
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _t(e);
}
Object.defineProperty(Pt, "__esModule", {
  value: !0
});
Pt.default = void 0;
var Wt = oo(M), xe = or(jr), io = or(yt), he = ae, je = We, Vt = Le, et = or(Rt);
function or(e) {
  return e && e.__esModule ? e : { default: e };
}
function vn(e) {
  if (typeof WeakMap != "function")
    return null;
  var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (vn = function(i) {
    return i ? r : n;
  })(e);
}
function oo(e, n) {
  if (!n && e && e.__esModule)
    return e;
  if (e === null || _t(e) !== "object" && typeof e != "function")
    return { default: e };
  var r = vn(n);
  if (r && r.has(e))
    return r.get(e);
  var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      a && (a.get || a.set) ? Object.defineProperty(t, o, a) : t[o] = e[o];
    }
  return t.default = e, r && r.set(e, t), t;
}
function Or(e, n) {
  return uo(e) || lo(e, n) || so(e, n) || ao();
}
function ao() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function so(e, n) {
  if (e) {
    if (typeof e == "string")
      return zr(e, n);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zr(e, n);
  }
}
function zr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function lo(e, n) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var t = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (t.push(a.value), !(n && t.length === n)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return t;
  }
}
function uo(e) {
  if (Array.isArray(e))
    return e;
}
function co(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function Er(e, n) {
  for (var r = 0; r < n.length; r++) {
    var t = n[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function fo(e, n, r) {
  return n && Er(e.prototype, n), r && Er(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function po(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && Ht(e, n);
}
function Ht(e, n) {
  return Ht = Object.setPrototypeOf || function(t, i) {
    return t.__proto__ = i, t;
  }, Ht(e, n);
}
function ho(e) {
  var n = vo();
  return function() {
    var t = Dt(e), i;
    if (n) {
      var o = Dt(this).constructor;
      i = Reflect.construct(t, arguments, o);
    } else
      i = t.apply(this, arguments);
    return go(this, i);
  };
}
function go(e, n) {
  if (n && (_t(n) === "object" || typeof n == "function"))
    return n;
  if (n !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ge(e);
}
function ge(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vo() {
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
function Dt(e) {
  return Dt = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Dt(e);
}
function Ee(e, n, r) {
  return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
var Te = {
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
}, Be = Te.mouse, Tt = /* @__PURE__ */ function(e) {
  po(r, e);
  var n = ho(r);
  function r() {
    var t;
    co(this, r);
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return t = n.call.apply(n, [this].concat(o)), Ee(ge(t), "state", {
      dragging: !1,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    }), Ee(ge(t), "mounted", !1), Ee(ge(t), "handleDragStart", function(s) {
      if (t.props.onMouseDown(s), !t.props.allowAnyClick && typeof s.button == "number" && s.button !== 0)
        return !1;
      var u = t.findDOMNode();
      if (!u || !u.ownerDocument || !u.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      var c = u.ownerDocument;
      if (!(t.props.disabled || !(s.target instanceof c.defaultView.Node) || t.props.handle && !(0, he.matchesSelectorAndParentsTo)(s.target, t.props.handle, u) || t.props.cancel && (0, he.matchesSelectorAndParentsTo)(s.target, t.props.cancel, u))) {
        s.type === "touchstart" && s.preventDefault();
        var d = (0, he.getTouchIdentifier)(s);
        t.setState({
          touchIdentifier: d
        });
        var h = (0, je.getControlPosition)(s, d, ge(t));
        if (h != null) {
          var p = h.x, y = h.y, w = (0, je.createCoreData)(ge(t), p, y);
          (0, et.default)("DraggableCore: handleDragStart: %j", w), (0, et.default)("calling", t.props.onStart);
          var T = t.props.onStart(s, w);
          T === !1 || t.mounted === !1 || (t.props.enableUserSelectHack && (0, he.addUserSelectStyles)(c), t.setState({
            dragging: !0,
            lastX: p,
            lastY: y
          }), (0, he.addEvent)(c, Be.move, t.handleDrag), (0, he.addEvent)(c, Be.stop, t.handleDragStop));
        }
      }
    }), Ee(ge(t), "handleDrag", function(s) {
      var u = (0, je.getControlPosition)(s, t.state.touchIdentifier, ge(t));
      if (u != null) {
        var c = u.x, d = u.y;
        if (Array.isArray(t.props.grid)) {
          var h = c - t.state.lastX, p = d - t.state.lastY, y = (0, je.snapToGrid)(t.props.grid, h, p), w = Or(y, 2);
          if (h = w[0], p = w[1], !h && !p)
            return;
          c = t.state.lastX + h, d = t.state.lastY + p;
        }
        var T = (0, je.createCoreData)(ge(t), c, d);
        (0, et.default)("DraggableCore: handleDrag: %j", T);
        var W = t.props.onDrag(s, T);
        if (W === !1 || t.mounted === !1) {
          try {
            t.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            var O = document.createEvent("MouseEvents");
            O.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(O);
          }
          return;
        }
        t.setState({
          lastX: c,
          lastY: d
        });
      }
    }), Ee(ge(t), "handleDragStop", function(s) {
      if (t.state.dragging) {
        var u = (0, je.getControlPosition)(s, t.state.touchIdentifier, ge(t));
        if (u != null) {
          var c = u.x, d = u.y;
          if (Array.isArray(t.props.grid)) {
            var h = c - t.state.lastX || 0, p = d - t.state.lastY || 0, y = (0, je.snapToGrid)(t.props.grid, h, p), w = Or(y, 2);
            h = w[0], p = w[1], c = t.state.lastX + h, d = t.state.lastY + p;
          }
          var T = (0, je.createCoreData)(ge(t), c, d), W = t.props.onStop(s, T);
          if (W === !1 || t.mounted === !1)
            return !1;
          var O = t.findDOMNode();
          O && t.props.enableUserSelectHack && (0, he.removeUserSelectStyles)(O.ownerDocument), (0, et.default)("DraggableCore: handleDragStop: %j", T), t.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          }), O && ((0, et.default)("DraggableCore: Removing handlers"), (0, he.removeEvent)(O.ownerDocument, Be.move, t.handleDrag), (0, he.removeEvent)(O.ownerDocument, Be.stop, t.handleDragStop));
        }
      }
    }), Ee(ge(t), "onMouseDown", function(s) {
      return Be = Te.mouse, t.handleDragStart(s);
    }), Ee(ge(t), "onMouseUp", function(s) {
      return Be = Te.mouse, t.handleDragStop(s);
    }), Ee(ge(t), "onTouchStart", function(s) {
      return Be = Te.touch, t.handleDragStart(s);
    }), Ee(ge(t), "onTouchEnd", function(s) {
      return Be = Te.touch, t.handleDragStop(s);
    }), t;
  }
  return fo(r, [{
    key: "componentDidMount",
    value: function() {
      this.mounted = !0;
      var i = this.findDOMNode();
      i && (0, he.addEvent)(i, Te.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.findDOMNode();
      if (i) {
        var o = i.ownerDocument;
        (0, he.removeEvent)(o, Te.mouse.move, this.handleDrag), (0, he.removeEvent)(o, Te.touch.move, this.handleDrag), (0, he.removeEvent)(o, Te.mouse.stop, this.handleDragStop), (0, he.removeEvent)(o, Te.touch.stop, this.handleDragStop), (0, he.removeEvent)(i, Te.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, he.removeUserSelectStyles)(o);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
  }, {
    key: "findDOMNode",
    value: function() {
      var i, o, a;
      return (i = this.props) !== null && i !== void 0 && i.nodeRef ? (o = this.props) === null || o === void 0 || (a = o.nodeRef) === null || a === void 0 ? void 0 : a.current : io.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Wt.cloneElement(Wt.Children.only(this.props.children), {
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
}(Wt.Component);
Pt.default = Tt;
Ee(Tt, "displayName", "DraggableCore");
Ee(Tt, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: xe.default.bool,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: xe.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: xe.default.bool,
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
  grid: xe.default.arrayOf(xe.default.number),
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
  handle: xe.default.string,
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
  cancel: xe.default.string,
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
  nodeRef: xe.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: xe.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: xe.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: xe.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: xe.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: xe.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Vt.dontSetMe,
  style: Vt.dontSetMe,
  transform: Vt.dontSetMe
});
Ee(Tt, "defaultProps", {
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
    return n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
      return typeof b;
    } : function(b) {
      return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
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
  var r = w(M), t = p(jr), i = p(yt), o = p(Oi), a = ae, s = We, u = Le, c = p(Pt), d = p(Rt), h = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function p(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function y(v) {
    if (typeof WeakMap != "function")
      return null;
    var b = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap();
    return (y = function(D) {
      return D ? S : b;
    })(v);
  }
  function w(v, b) {
    if (!b && v && v.__esModule)
      return v;
    if (v === null || n(v) !== "object" && typeof v != "function")
      return { default: v };
    var S = y(b);
    if (S && S.has(v))
      return S.get(v);
    var _ = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in v)
      if (L !== "default" && Object.prototype.hasOwnProperty.call(v, L)) {
        var $ = D ? Object.getOwnPropertyDescriptor(v, L) : null;
        $ && ($.get || $.set) ? Object.defineProperty(_, L, $) : _[L] = v[L];
      }
    return _.default = v, S && S.set(v, _), _;
  }
  function T() {
    return T = Object.assign || function(v) {
      for (var b = 1; b < arguments.length; b++) {
        var S = arguments[b];
        for (var _ in S)
          Object.prototype.hasOwnProperty.call(S, _) && (v[_] = S[_]);
      }
      return v;
    }, T.apply(this, arguments);
  }
  function W(v, b) {
    if (v == null)
      return {};
    var S = O(v, b), _, D;
    if (Object.getOwnPropertySymbols) {
      var L = Object.getOwnPropertySymbols(v);
      for (D = 0; D < L.length; D++)
        _ = L[D], !(b.indexOf(_) >= 0) && Object.prototype.propertyIsEnumerable.call(v, _) && (S[_] = v[_]);
    }
    return S;
  }
  function O(v, b) {
    if (v == null)
      return {};
    var S = {}, _ = Object.keys(v), D, L;
    for (L = 0; L < _.length; L++)
      D = _[L], !(b.indexOf(D) >= 0) && (S[D] = v[D]);
    return S;
  }
  function m(v, b) {
    var S = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(v);
      b && (_ = _.filter(function(D) {
        return Object.getOwnPropertyDescriptor(v, D).enumerable;
      })), S.push.apply(S, _);
    }
    return S;
  }
  function P(v) {
    for (var b = 1; b < arguments.length; b++) {
      var S = arguments[b] != null ? arguments[b] : {};
      b % 2 ? m(Object(S), !0).forEach(function(_) {
        ne(v, _, S[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(S)) : m(Object(S)).forEach(function(_) {
        Object.defineProperty(v, _, Object.getOwnPropertyDescriptor(S, _));
      });
    }
    return v;
  }
  function C(v, b) {
    return V(v) || I(v, b) || Z(v, b) || A();
  }
  function A() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Z(v, b) {
    if (v) {
      if (typeof v == "string")
        return Y(v, b);
      var S = Object.prototype.toString.call(v).slice(8, -1);
      if (S === "Object" && v.constructor && (S = v.constructor.name), S === "Map" || S === "Set")
        return Array.from(v);
      if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))
        return Y(v, b);
    }
  }
  function Y(v, b) {
    (b == null || b > v.length) && (b = v.length);
    for (var S = 0, _ = new Array(b); S < b; S++)
      _[S] = v[S];
    return _;
  }
  function I(v, b) {
    var S = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
    if (S != null) {
      var _ = [], D = !0, L = !1, $, H;
      try {
        for (S = S.call(v); !(D = ($ = S.next()).done) && (_.push($.value), !(b && _.length === b)); D = !0)
          ;
      } catch (X) {
        L = !0, H = X;
      } finally {
        try {
          !D && S.return != null && S.return();
        } finally {
          if (L)
            throw H;
        }
      }
      return _;
    }
  }
  function V(v) {
    if (Array.isArray(v))
      return v;
  }
  function F(v, b) {
    if (!(v instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function U(v, b) {
    for (var S = 0; S < b.length; S++) {
      var _ = b[S];
      _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(v, _.key, _);
    }
  }
  function R(v, b, S) {
    return b && U(v.prototype, b), S && U(v, S), Object.defineProperty(v, "prototype", { writable: !1 }), v;
  }
  function N(v, b) {
    if (typeof b != "function" && b !== null)
      throw new TypeError("Super expression must either be null or a function");
    v.prototype = Object.create(b && b.prototype, { constructor: { value: v, writable: !0, configurable: !0 } }), Object.defineProperty(v, "prototype", { writable: !1 }), b && q(v, b);
  }
  function q(v, b) {
    return q = Object.setPrototypeOf || function(_, D) {
      return _.__proto__ = D, _;
    }, q(v, b);
  }
  function K(v) {
    var b = J();
    return function() {
      var _ = ee(v), D;
      if (b) {
        var L = ee(this).constructor;
        D = Reflect.construct(_, arguments, L);
      } else
        D = _.apply(this, arguments);
      return Q(this, D);
    };
  }
  function Q(v, b) {
    if (b && (n(b) === "object" || typeof b == "function"))
      return b;
    if (b !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return G(v);
  }
  function G(v) {
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
  function ee(v) {
    return ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(S) {
      return S.__proto__ || Object.getPrototypeOf(S);
    }, ee(v);
  }
  function ne(v, b, S) {
    return b in v ? Object.defineProperty(v, b, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : v[b] = S, v;
  }
  var fe = /* @__PURE__ */ function(v) {
    N(S, v);
    var b = K(S);
    function S(_) {
      var D;
      return F(this, S), D = b.call(this, _), ne(G(D), "onDragStart", function(L, $) {
        (0, d.default)("Draggable: onDragStart: %j", $);
        var H = D.props.onStart(L, (0, s.createDraggableData)(G(D), $));
        if (H === !1)
          return !1;
        D.setState({
          dragging: !0,
          dragged: !0
        });
      }), ne(G(D), "onDrag", function(L, $) {
        if (!D.state.dragging)
          return !1;
        (0, d.default)("Draggable: onDrag: %j", $);
        var H = (0, s.createDraggableData)(G(D), $), X = {
          x: H.x,
          y: H.y
        };
        if (D.props.bounds) {
          var ve = X.x, de = X.y;
          X.x += D.state.slackX, X.y += D.state.slackY;
          var ye = (0, s.getBoundPosition)(G(D), X.x, X.y), we = C(ye, 2), ze = we[0], Ce = we[1];
          X.x = ze, X.y = Ce, X.slackX = D.state.slackX + (ve - X.x), X.slackY = D.state.slackY + (de - X.y), H.x = X.x, H.y = X.y, H.deltaX = X.x - D.state.x, H.deltaY = X.y - D.state.y;
        }
        var me = D.props.onDrag(L, H);
        if (me === !1)
          return !1;
        D.setState(X);
      }), ne(G(D), "onDragStop", function(L, $) {
        if (!D.state.dragging)
          return !1;
        var H = D.props.onStop(L, (0, s.createDraggableData)(G(D), $));
        if (H === !1)
          return !1;
        (0, d.default)("Draggable: onDragStop: %j", $);
        var X = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        }, ve = !!D.props.position;
        if (ve) {
          var de = D.props.position, ye = de.x, we = de.y;
          X.x = ye, X.y = we;
        }
        D.setState(X);
      }), D.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: _.position ? _.position.x : _.defaultPosition.x,
        y: _.position ? _.position.y : _.defaultPosition.y,
        prevPropsPosition: P({}, _.position),
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, _.position && !(_.onDrag || _.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), D;
    }
    return R(S, [{
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
        var D, L, $;
        return (D = (L = this.props) === null || L === void 0 || ($ = L.nodeRef) === null || $ === void 0 ? void 0 : $.current) !== null && D !== void 0 ? D : i.default.findDOMNode(this);
      }
    }, {
      key: "render",
      value: function() {
        var D, L = this.props;
        L.axis, L.bounds;
        var $ = L.children, H = L.defaultPosition, X = L.defaultClassName, ve = L.defaultClassNameDragging, de = L.defaultClassNameDragged, ye = L.position, we = L.positionOffset;
        L.scale;
        var ze = W(L, h), Ce = {}, me = null, Re = !!ye, l = !Re || this.state.dragging, f = ye || H, g = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && l ? this.state.x : f.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && l ? this.state.y : f.y
        };
        this.state.isElementSVG ? me = (0, a.createSVGTransform)(g, we) : Ce = (0, a.createCSSTransform)(g, we);
        var k = (0, o.default)($.props.className || "", X, (D = {}, ne(D, ve, this.state.dragging), ne(D, de, this.state.dragged), D));
        return /* @__PURE__ */ r.createElement(c.default, T({}, ze, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ r.cloneElement(r.Children.only($), {
          className: k,
          style: P(P({}, $.props.style), Ce),
          transform: me
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: (
        // React 16.3+
        // Arity (props, state)
        function(D, L) {
          var $ = D.position, H = L.prevPropsPosition;
          return $ && (!H || $.x !== H.x || $.y !== H.y) ? ((0, d.default)("Draggable: getDerivedStateFromProps %j", {
            position: $,
            prevPropsPosition: H
          }), {
            x: $.x,
            y: $.y,
            prevPropsPosition: P({}, $)
          }) : null;
        }
      )
    }]), S;
  }(r.Component);
  e.default = fe, ne(fe, "displayName", "Draggable"), ne(fe, "propTypes", P(P({}, c.default.propTypes), {}, {
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
    className: u.dontSetMe,
    style: u.dontSetMe,
    transform: u.dontSetMe
  })), ne(fe, "defaultProps", P(P({}, c.default.defaultProps), {}, {
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
})(an);
var yn = an, mn = yn.default, yo = yn.DraggableCore;
Et.exports = mn;
Et.exports.default = mn;
Et.exports.DraggableCore = yo;
var mo = Et.exports;
const bo = /* @__PURE__ */ Vr(mo);
var wo = globalThis && globalThis.__extends || function() {
  var e = function(n, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
    }, e(n, r);
  };
  return function(n, r) {
    e(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Ot = globalThis && globalThis.__assign || function() {
  return Ot = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Ot.apply(this, arguments);
}, So = {
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
}, xo = (
  /** @class */
  function(e) {
    wo(n, e);
    function n() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.onMouseDown = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r.onTouchStart = function(t) {
        r.props.onResizeStart(t, r.props.direction);
      }, r;
    }
    return n.prototype.render = function() {
      return M.createElement("div", { className: this.props.className || "", style: Ot(Ot({ position: "absolute", userSelect: "none" }, So[this.props.direction]), this.props.replaceStyles || {}), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart }, this.props.children);
    }, n;
  }(M.PureComponent)
), ar = { exports: {} };
function _o(e, n) {
  var r = n && n.cache ? n.cache : Ro, t = n && n.serializer ? n.serializer : Po, i = n && n.strategy ? n.strategy : Oo;
  return i(e, {
    cache: r,
    serializer: t
  });
}
function Do(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function bn(e, n, r, t) {
  var i = Do(t) ? t : r(t), o = n.get(i);
  return typeof o > "u" && (o = e.call(this, t), n.set(i, o)), o;
}
function wn(e, n, r) {
  var t = Array.prototype.slice.call(arguments, 3), i = r(t), o = n.get(i);
  return typeof o > "u" && (o = e.apply(this, t), n.set(i, o)), o;
}
function sr(e, n, r, t, i) {
  return r.bind(
    n,
    e,
    t,
    i
  );
}
function Oo(e, n) {
  var r = e.length === 1 ? bn : wn;
  return sr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function zo(e, n) {
  var r = wn;
  return sr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function Eo(e, n) {
  var r = bn;
  return sr(
    e,
    this,
    r,
    n.cache.create(),
    n.serializer
  );
}
function Po() {
  return JSON.stringify(arguments);
}
function Mt() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Mt.prototype.has = function(e) {
  return e in this.cache;
};
Mt.prototype.get = function(e) {
  return this.cache[e];
};
Mt.prototype.set = function(e, n) {
  this.cache[e] = n;
};
var Ro = {
  create: function() {
    return new Mt();
  }
};
ar.exports = _o;
ar.exports.strategies = {
  variadic: zo,
  monadic: Eo
};
var To = ar.exports;
const Ye = /* @__PURE__ */ Vr(To);
var Mo = globalThis && globalThis.__extends || function() {
  var e = function(n, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
      t.__proto__ = i;
    } || function(t, i) {
      for (var o in i)
        Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
    }, e(n, r);
  };
  return function(n, r) {
    e(n, r);
    function t() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
  };
}(), Ne = globalThis && globalThis.__assign || function() {
  return Ne = Object.assign || function(e) {
    for (var n, r = 1, t = arguments.length; r < t; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, Ne.apply(this, arguments);
}, ko = {
  width: "auto",
  height: "auto"
}, ft = Ye(function(e, n, r) {
  return Math.max(Math.min(e, r), n);
}), Pr = Ye(function(e, n) {
  return Math.round(e / n) * n;
}), Ge = Ye(function(e, n) {
  return new RegExp(e, "i").test(n);
}), dt = function(e) {
  return !!(e.touches && e.touches.length);
}, Co = function(e) {
  return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0));
}, Rr = Ye(function(e, n, r) {
  r === void 0 && (r = 0);
  var t = n.reduce(function(o, a, s) {
    return Math.abs(a - e) < Math.abs(n[o] - e) ? s : o;
  }, 0), i = Math.abs(n[t] - e);
  return r === 0 || i < r ? n[t] : e;
}), ce = Ye(function(e, n) {
  return e.substr(e.length - n.length, n.length) === n;
}), jt = Ye(function(e) {
  return e = e.toString(), e === "auto" || ce(e, "px") || ce(e, "%") || ce(e, "vh") || ce(e, "vw") || ce(e, "vmax") || ce(e, "vmin") ? e : e + "px";
}), pt = function(e, n, r, t) {
  if (e && typeof e == "string") {
    if (ce(e, "px"))
      return Number(e.replace("px", ""));
    if (ce(e, "%")) {
      var i = Number(e.replace("%", "")) / 100;
      return n * i;
    }
    if (ce(e, "vw")) {
      var i = Number(e.replace("vw", "")) / 100;
      return r * i;
    }
    if (ce(e, "vh")) {
      var i = Number(e.replace("vh", "")) / 100;
      return t * i;
    }
  }
  return e;
}, Ao = Ye(function(e, n, r, t, i, o, a) {
  return t = pt(t, e.width, n, r), i = pt(i, e.height, n, r), o = pt(o, e.width, n, r), a = pt(a, e.height, n, r), {
    maxWidth: typeof t > "u" ? void 0 : Number(t),
    maxHeight: typeof i > "u" ? void 0 : Number(i),
    minWidth: typeof o > "u" ? void 0 : Number(o),
    minHeight: typeof a > "u" ? void 0 : Number(a)
  };
}), No = [
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
], Tr = "__resizable_base__", Fo = (
  /** @class */
  function(e) {
    Mo(n, e);
    function n(r) {
      var t = e.call(this, r) || this;
      return t.ratio = 1, t.resizable = null, t.parentLeft = 0, t.parentTop = 0, t.resizableLeft = 0, t.resizableRight = 0, t.resizableTop = 0, t.resizableBottom = 0, t.targetLeft = 0, t.targetTop = 0, t.appendBase = function() {
        if (!t.resizable || !t.window)
          return null;
        var i = t.parentNode;
        if (!i)
          return null;
        var o = t.window.document.createElement("div");
        return o.style.width = "100%", o.style.height = "100%", o.style.position = "absolute", o.style.transform = "scale(0, 0)", o.style.left = "0", o.style.flex = "0 0 100%", o.classList ? o.classList.add(Tr) : o.className += Tr, i.appendChild(o), o;
      }, t.removeBase = function(i) {
        var o = t.parentNode;
        o && o.removeChild(i);
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
        return this.props.size || this.props.defaultSize || ko;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "size", {
      get: function() {
        var r = 0, t = 0;
        if (this.resizable && this.window) {
          var i = this.resizable.offsetWidth, o = this.resizable.offsetHeight, a = this.resizable.style.position;
          a !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : i, t = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : o, this.resizable.style.position = a;
        }
        return { width: r, height: t };
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "sizeStyle", {
      get: function() {
        var r = this, t = this.props.size, i = function(s) {
          if (typeof r.state[s] > "u" || r.state[s] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[s] && ce(r.propsSize[s].toString(), "%")) {
            if (ce(r.state[s].toString(), "%"))
              return r.state[s].toString();
            var u = r.getParentSize(), c = Number(r.state[s].toString().replace("px", "")), d = c / u[s] * 100;
            return d + "%";
          }
          return jt(r.state[s]);
        }, o = t && typeof t.width < "u" && !this.state.isResizing ? jt(t.width) : i("width"), a = t && typeof t.height < "u" && !this.state.isResizing ? jt(t.height) : i("height");
        return { width: o, height: a };
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
      var o = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return t && (this.parentNode.style.flexWrap = i), this.removeBase(r), o;
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
      var i = this.props.boundsByDirection, o = this.state.direction, a = i && Ge("left", o), s = i && Ge("top", o), u, c;
      if (this.props.bounds === "parent") {
        var d = this.parentNode;
        d && (u = a ? this.resizableRight - this.parentLeft : d.offsetWidth + (this.parentLeft - this.resizableLeft), c = s ? this.resizableBottom - this.parentTop : d.offsetHeight + (this.parentTop - this.resizableTop));
      } else
        this.props.bounds === "window" ? this.window && (u = a ? this.resizableRight : this.window.innerWidth - this.resizableLeft, c = s ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (u = a ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), c = s ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return u && Number.isFinite(u) && (r = r && r < u ? r : u), c && Number.isFinite(c) && (t = t && t < c ? t : c), { maxWidth: r, maxHeight: t };
    }, n.prototype.calculateNewSizeFromDirection = function(r, t) {
      var i = this.props.scale || 1, o = this.props.resizeRatio || 1, a = this.state, s = a.direction, u = a.original, c = this.props, d = c.lockAspectRatio, h = c.lockAspectRatioExtraHeight, p = c.lockAspectRatioExtraWidth, y = u.width, w = u.height, T = h || 0, W = p || 0;
      return Ge("right", s) && (y = u.width + (r - u.x) * o / i, d && (w = (y - W) / this.ratio + T)), Ge("left", s) && (y = u.width - (r - u.x) * o / i, d && (w = (y - W) / this.ratio + T)), Ge("bottom", s) && (w = u.height + (t - u.y) * o / i, d && (y = (w - T) * this.ratio + W)), Ge("top", s) && (w = u.height - (t - u.y) * o / i, d && (y = (w - T) * this.ratio + W)), { newWidth: y, newHeight: w };
    }, n.prototype.calculateNewSizeFromAspectRatio = function(r, t, i, o) {
      var a = this.props, s = a.lockAspectRatio, u = a.lockAspectRatioExtraHeight, c = a.lockAspectRatioExtraWidth, d = typeof o.width > "u" ? 10 : o.width, h = typeof i.width > "u" || i.width < 0 ? r : i.width, p = typeof o.height > "u" ? 10 : o.height, y = typeof i.height > "u" || i.height < 0 ? t : i.height, w = u || 0, T = c || 0;
      if (s) {
        var W = (p - w) * this.ratio + T, O = (y - w) * this.ratio + T, m = (d - T) / this.ratio + w, P = (h - T) / this.ratio + w, C = Math.max(d, W), A = Math.min(h, O), Z = Math.max(p, m), Y = Math.min(y, P);
        r = ft(r, C, A), t = ft(t, Z, Y);
      } else
        r = ft(r, d, h), t = ft(t, p, y);
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
        var o = this.resizable.getBoundingClientRect(), a = o.left, s = o.top, u = o.right, c = o.bottom;
        this.resizableLeft = a, this.resizableRight = u, this.resizableTop = s, this.resizableBottom = c;
      }
    }, n.prototype.onResizeStart = function(r, t) {
      if (!(!this.resizable || !this.window)) {
        var i = 0, o = 0;
        if (r.nativeEvent && Co(r.nativeEvent) ? (i = r.nativeEvent.clientX, o = r.nativeEvent.clientY) : r.nativeEvent && dt(r.nativeEvent) && (i = r.nativeEvent.touches[0].clientX, o = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var a = this.props.onResizeStart(r, t, this.resizable);
          if (a === !1)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var s, u = this.window.getComputedStyle(this.resizable);
        if (u.flexBasis !== "auto") {
          var c = this.parentNode;
          if (c) {
            var d = this.window.getComputedStyle(c).flexDirection;
            this.flexDir = d.startsWith("row") ? "row" : "column", s = u.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var h = {
          original: {
            x: i,
            y: o,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: !0,
          backgroundStyle: Ne(Ne({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: t,
          flexBasis: s
        };
        this.setState(h);
      }
    }, n.prototype.onMouseMove = function(r) {
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && dt(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var t = this.props, i = t.maxWidth, o = t.maxHeight, a = t.minWidth, s = t.minHeight, u = dt(r) ? r.touches[0].clientX : r.clientX, c = dt(r) ? r.touches[0].clientY : r.clientY, d = this.state, h = d.direction, p = d.original, y = d.width, w = d.height, T = this.getParentSize(), W = Ao(T, this.window.innerWidth, this.window.innerHeight, i, o, a, s);
        i = W.maxWidth, o = W.maxHeight, a = W.minWidth, s = W.minHeight;
        var O = this.calculateNewSizeFromDirection(u, c), m = O.newHeight, P = O.newWidth, C = this.calculateNewMaxFromBoundary(i, o);
        this.props.snap && this.props.snap.x && (P = Rr(P, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (m = Rr(m, this.props.snap.y, this.props.snapGap));
        var A = this.calculateNewSizeFromAspectRatio(P, m, { width: C.maxWidth, height: C.maxHeight }, { width: a, height: s });
        if (P = A.newWidth, m = A.newHeight, this.props.grid) {
          var Z = Pr(P, this.props.grid[0]), Y = Pr(m, this.props.grid[1]), I = this.props.snapGap || 0;
          P = I === 0 || Math.abs(Z - P) <= I ? Z : P, m = I === 0 || Math.abs(Y - m) <= I ? Y : m;
        }
        var V = {
          width: P - p.width,
          height: m - p.height
        };
        if (y && typeof y == "string") {
          if (ce(y, "%")) {
            var F = P / T.width * 100;
            P = F + "%";
          } else if (ce(y, "vw")) {
            var U = P / this.window.innerWidth * 100;
            P = U + "vw";
          } else if (ce(y, "vh")) {
            var R = P / this.window.innerHeight * 100;
            P = R + "vh";
          }
        }
        if (w && typeof w == "string") {
          if (ce(w, "%")) {
            var F = m / T.height * 100;
            m = F + "%";
          } else if (ce(w, "vw")) {
            var U = m / this.window.innerWidth * 100;
            m = U + "vw";
          } else if (ce(w, "vh")) {
            var R = m / this.window.innerHeight * 100;
            m = R + "vh";
          }
        }
        var N = {
          width: this.createSizeForCssProperty(P, "width"),
          height: this.createSizeForCssProperty(m, "height")
        };
        this.flexDir === "row" ? N.flexBasis = N.width : this.flexDir === "column" && (N.flexBasis = N.height), this.setState(N), this.props.onResize && this.props.onResize(r, h, this.resizable, V);
      }
    }, n.prototype.onMouseUp = function(r) {
      var t = this.state, i = t.isResizing, o = t.direction, a = t.original;
      if (!(!i || !this.resizable)) {
        var s = {
          width: this.size.width - a.width,
          height: this.size.height - a.height
        };
        this.props.onResizeStop && this.props.onResizeStop(r, o, this.resizable, s), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: Ne(Ne({}, this.state.backgroundStyle), { cursor: "auto" })
        });
      }
    }, n.prototype.updateSize = function(r) {
      this.setState({ width: r.width, height: r.height });
    }, n.prototype.renderResizer = function() {
      var r = this, t = this.props, i = t.enable, o = t.handleStyles, a = t.handleClasses, s = t.handleWrapperStyle, u = t.handleWrapperClass, c = t.handleComponent;
      if (!i)
        return null;
      var d = Object.keys(i).map(function(h) {
        return i[h] !== !1 ? M.createElement(xo, { key: h, direction: h, onResizeStart: r.onResizeStart, replaceStyles: o && o[h], className: a && a[h] }, c && c[h] ? c[h] : null) : null;
      });
      return M.createElement("div", { className: u, style: s }, d);
    }, n.prototype.render = function() {
      var r = this, t = Object.keys(this.props).reduce(function(a, s) {
        return No.indexOf(s) !== -1 || (a[s] = r.props[s]), a;
      }, {}), i = Ne(Ne(Ne({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
      var o = this.props.as || "div";
      return M.createElement(
        o,
        Ne({ ref: this.ref, style: i, className: this.props.className }, t),
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
var Ut = function(e, n) {
  return Ut = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, t) {
    r.__proto__ = t;
  } || function(r, t) {
    for (var i in t)
      t.hasOwnProperty(i) && (r[i] = t[i]);
  }, Ut(e, n);
};
function Lo(e, n) {
  Ut(e, n);
  function r() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
}
var se = function() {
  return se = Object.assign || function(n) {
    for (var r, t = 1, i = arguments.length; t < i; t++) {
      r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
    }
    return n;
  }, se.apply(this, arguments);
};
function Wo(e, n) {
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
      n.indexOf(t[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[i]) && (r[t[i]] = e[t[i]]);
  return r;
}
var Vo = bo, jo = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  position: "absolute",
  top: 0,
  left: 0
}, Bo = function(e) {
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
}, Ea = (
  /** @class */
  function(e) {
    Lo(n, e);
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
      var r = this.offsetFromParent, t = r.left, i = r.top, o = this.getDraggablePosition(), a = o.x, s = o.y;
      this.draggable.setState({
        x: a - t,
        y: s - i
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
        var o = this.getParent(), a = this.props.scale, s;
        if (this.props.bounds === "parent")
          s = o;
        else if (this.props.bounds === "body") {
          var u = o.getBoundingClientRect(), c = u.left, d = u.top, h = document.body.getBoundingClientRect(), p = -(c - o.offsetLeft * a - h.left) / a, y = -(d - o.offsetTop * a - h.top) / a, w = (document.body.offsetWidth - this.resizable.size.width * a) / a + p, T = (document.body.offsetHeight - this.resizable.size.height * a) / a + y;
          return this.setState({ bounds: { top: y, right: w, bottom: T, left: p } });
        } else if (this.props.bounds === "window") {
          if (!this.resizable)
            return;
          var W = o.getBoundingClientRect(), O = W.left, m = W.top, P = -(O - o.offsetLeft * a) / a, C = -(m - o.offsetTop * a) / a, w = (window.innerWidth - this.resizable.size.width * a) / a + P, T = (window.innerHeight - this.resizable.size.height * a) / a + C;
          return this.setState({ bounds: { top: C, right: w, bottom: T, left: P } });
        } else
          typeof this.props.bounds == "string" ? s = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (s = this.props.bounds);
        if (!(!(s instanceof HTMLElement) || !(o instanceof HTMLElement))) {
          var A = s.getBoundingClientRect(), Z = A.left, Y = A.top, I = o.getBoundingClientRect(), V = I.left, F = I.top, U = (Z - V) / a, R = Y - F;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var N = this.offsetFromParent;
            this.setState({
              bounds: {
                top: R - N.top,
                right: U + (s.offsetWidth - this.resizable.size.width) - N.left / a,
                bottom: R + (s.offsetHeight - this.resizable.size.height) - N.top,
                left: U - N.left / a
              }
            });
          }
        }
      }
    }, n.prototype.onDrag = function(r, t) {
      if (this.props.onDrag) {
        var i = this.offsetFromParent, o = i.left, a = i.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDrag(r, se(se({}, t), { x: t.x - o, y: t.y - a }));
        if (this.props.dragAxis === "x")
          return this.props.onDrag(r, se(se({}, t), { x: t.x + o, y: this.originalPosition.y + a, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDrag(r, se(se({}, t), { x: this.originalPosition.x + o, y: t.y + a, deltaX: 0 }));
      }
    }, n.prototype.onDragStop = function(r, t) {
      if (this.props.onDragStop) {
        var i = this.offsetFromParent, o = i.left, a = i.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both")
          return this.props.onDragStop(r, se(se({}, t), { x: t.x + o, y: t.y + a }));
        if (this.props.dragAxis === "x")
          return this.props.onDragStop(r, se(se({}, t), { x: t.x + o, y: this.originalPosition.y + a, deltaY: 0 }));
        if (this.props.dragAxis === "y")
          return this.props.onDragStop(r, se(se({}, t), { x: this.originalPosition.x + o, y: t.y + a, deltaX: 0 }));
      }
    }, n.prototype.onResizeStart = function(r, t, i) {
      r.stopPropagation(), this.setState({
        resizing: !0
      });
      var o = this.props.scale, a = this.offsetFromParent, s = this.getDraggablePosition();
      if (this.resizingPosition = { x: s.x + a.left, y: s.y + a.top }, this.originalPosition = s, this.props.bounds) {
        var u = this.getParent(), c = void 0;
        this.props.bounds === "parent" ? c = u : this.props.bounds === "body" ? c = document.body : this.props.bounds === "window" ? c = window : typeof this.props.bounds == "string" ? c = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (c = this.props.bounds);
        var d = this.getSelfElement();
        if (d instanceof Element && (c instanceof HTMLElement || c === window) && u instanceof HTMLElement) {
          var h = this.getMaxSizesFromProps(), p = h.maxWidth, y = h.maxHeight, w = this.getParentSize();
          if (p && typeof p == "string")
            if (p.endsWith("%")) {
              var T = Number(p.replace("%", "")) / 100;
              p = w.width * T;
            } else
              p.endsWith("px") && (p = Number(p.replace("px", "")));
          if (y && typeof y == "string")
            if (y.endsWith("%")) {
              var T = Number(y.replace("%", "")) / 100;
              y = w.width * T;
            } else
              y.endsWith("px") && (y = Number(y.replace("px", "")));
          var W = d.getBoundingClientRect(), O = W.left, m = W.top, P = this.props.bounds === "window" ? { left: 0, top: 0 } : c.getBoundingClientRect(), C = P.left, A = P.top, Z = this.getOffsetWidth(c), Y = this.getOffsetHeight(c), I = t.toLowerCase().endsWith("left"), V = t.toLowerCase().endsWith("right"), F = t.startsWith("top"), U = t.startsWith("bottom");
          if ((I || F) && this.resizable) {
            var R = (O - C) / o + this.resizable.size.width;
            this.setState({ maxWidth: R > Number(p) ? p : R });
          }
          if (V || this.props.lockAspectRatio && !I && !F) {
            var R = Z + (C - O) / o;
            this.setState({ maxWidth: R > Number(p) ? p : R });
          }
          if ((F || I) && this.resizable) {
            var R = (m - A) / o + this.resizable.size.height;
            this.setState({
              maxHeight: R > Number(y) ? y : R
            });
          }
          if (U || this.props.lockAspectRatio && !F && !I) {
            var R = Y + (A - m) / o;
            this.setState({
              maxHeight: R > Number(y) ? y : R
            });
          }
        }
      } else
        this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      this.props.onResizeStart && this.props.onResizeStart(r, t, i);
    }, n.prototype.onResize = function(r, t, i, o) {
      var a = { x: this.originalPosition.x, y: this.originalPosition.y }, s = -o.width, u = -o.height, c = ["top", "left", "topLeft", "bottomLeft", "topRight"];
      c.indexOf(t) !== -1 && (t === "bottomLeft" ? a.x += s : (t === "topRight" || (a.x += s), a.y += u)), (a.x !== this.draggable.state.x || a.y !== this.draggable.state.y) && this.draggable.setState(a), this.updateOffsetFromParent();
      var d = this.offsetFromParent, h = this.getDraggablePosition().x + d.left, p = this.getDraggablePosition().y + d.top;
      this.resizingPosition = { x: h, y: p }, this.props.onResize && this.props.onResize(r, t, i, o, {
        x: h,
        y: p
      });
    }, n.prototype.onResizeStop = function(r, t, i, o) {
      this.setState({
        resizing: !1
      });
      var a = this.getMaxSizesFromProps(), s = a.maxWidth, u = a.maxHeight;
      this.setState({ maxWidth: s, maxHeight: u }), this.props.onResizeStop && this.props.onResizeStop(r, t, i, o, this.resizingPosition);
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
      var o = t.getBoundingClientRect(), a = o.left, s = o.top, u = i.getBoundingClientRect(), c = this.getDraggablePosition(), d = t.scrollLeft, h = t.scrollTop;
      this.offsetFromParent = {
        left: u.left - a + d - c.x * r,
        top: u.top - s + h - c.y * r
      };
    }, n.prototype.render = function() {
      var r = this.props, t = r.disableDragging, i = r.style, o = r.dragHandleClassName, a = r.position, s = r.onMouseDown, u = r.onMouseUp, c = r.dragAxis, d = r.dragGrid, h = r.bounds, p = r.enableUserSelectHack, y = r.cancel, w = r.children;
      r.onResizeStart, r.onResize, r.onResizeStop, r.onDragStart, r.onDrag, r.onDragStop;
      var T = r.resizeHandleStyles, W = r.resizeHandleClasses, O = r.resizeHandleComponent, m = r.enableResizing, P = r.resizeGrid, C = r.resizeHandleWrapperClass, A = r.resizeHandleWrapperStyle, Z = r.scale, Y = r.allowAnyClick, I = Wo(r, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick"]), V = this.props.default ? se({}, this.props.default) : void 0;
      delete I.default;
      var F = t || o ? { cursor: "auto" } : { cursor: "move" }, U = se(se(se({}, jo), F), i), R = this.offsetFromParent, N = R.left, q = R.top, K;
      a && (K = {
        x: a.x - N,
        y: a.y - q
      });
      var Q = this.state.resizing ? void 0 : K, G = this.state.resizing ? "both" : c;
      return M.createElement(
        Vo,
        { ref: this.refDraggable, handle: o ? ".".concat(o) : void 0, defaultPosition: V, onMouseDown: s, onMouseUp: u, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop, axis: G, disabled: t, grid: d, bounds: h ? this.state.bounds : void 0, position: Q, enableUserSelectHack: p, cancel: y, scale: Z, allowAnyClick: Y, nodeRef: this.resizableElement },
        M.createElement(Fo, se({}, I, { ref: this.refResizable, defaultSize: V, size: this.props.size, enable: typeof m == "boolean" ? Bo(m) : m, onResizeStart: this.onResizeStart, onResize: this.onResize, onResizeStop: this.onResizeStop, style: U, minWidth: this.props.minWidth, minHeight: this.props.minHeight, maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth, maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight, grid: P, handleWrapperClass: C, handleWrapperStyle: A, lockAspectRatio: this.props.lockAspectRatio, lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth, lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight, handleStyles: T, handleClasses: W, handleComponent: O, scale: this.props.scale }), w)
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
), lr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = on;
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
})(lr);
const Io = [{
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
}], Mr = (e, n = !1) => {
  let r = e.selectionStart || 0, t = e.selectionEnd || 0;
  const i = e.selectionDirection, o = Io.filter((a) => n ? !0 : !a.onBlur || !1).reduce((a, s) => {
    const u = a.replace(s.pattern, s.replace), c = u.length - a.length;
    return r += c, t += c, u;
  }, e.value);
  return queueMicrotask(() => {
    document.activeElement === e && e.setSelectionRange(r, t, i || "none");
  }), o;
}, Ho = M.forwardRef(({
  placeholder: e = "Введите",
  ...n
}, r) => /* @__PURE__ */ j("input", { ref: r, placeholder: e, css: {
  appearance: "none",
  outline: "2px solid transparent",
  outlineOffset: "2px"
}, ...n })), Uo = ({
  label: e,
  helperText: n,
  className: r,
  inputWrapRef: t,
  onBlur: i,
  onFocus: o,
  error: a,
  afterItems: s,
  useTypograf: u = !0,
  disabled: c,
  isLoading: d,
  inputComponent: h = Ho,
  ...p
}, y) => {
  const [w, T] = re.useState(!1), {
    getRootProps: W,
    getInputProps: O
  } = Nn({
    error: !!a,
    onBlur: i,
    onFocus: o,
    disabled: c,
    inputRef: y,
    ...p
  }), {
    onBlur: m,
    onFocus: P,
    ...C
  } = O();
  C.value = C.value || "";
  const A = M.useCallback((I) => {
    c || (P == null || P(I), T(!0));
  }, [c, T, P]), Z = M.useCallback((I) => {
    var V;
    if (u) {
      const F = Mr(I.target, !0);
      F !== I.target.value && (I.target.value = F, (V = C.onChange) == null || V.call(C, F));
    }
    T(!1), m == null || m(I);
  }, [T, m]);
  let Y = /* @__PURE__ */ De("div", { className: r, ref: t, css: [{
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    outlineStyle: "solid",
    outlineWidth: "0px"
  }, a ? [{
    borderColor: "rgb(239 68 68 / 0.9)",
    outlineWidth: "0px"
  }, w && {
    outlineWidth: "2px",
    outlineColor: "rgb(254 202 202 / 0.9)"
  }] : w ? {
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
    d && /* @__PURE__ */ De("div", { css: {
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
      /* @__PURE__ */ j(Ue, { icon: Fr.faCircleNotch, css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, spin: !0, size: "sm" }),
      " ",
      "Загрузка..."
    ] }),
    /* @__PURE__ */ j(h, { css: [{
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
    }, a && {
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))",
      "::placeholder": {
        "--tw-placeholder-opacity": "1",
        color: "rgb(239 68 68 / var(--tw-placeholder-opacity))"
      }
    }, c && {
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))"
    }], onFocus: A, onBlur: Z, onInput: (I) => {
      u && (I.currentTarget.value = Mr(I.currentTarget));
    }, ...p, ...C, type: d ? "hidden" : p.type || "text" }),
    s && !c && /* @__PURE__ */ j("div", { css: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: "0.625rem"
    }, children: s })
  ] });
  return e && (Y = /* @__PURE__ */ j(zt, { label: e, error: a, helperText: n, ...W(), children: Y })), Y;
}, st = M.forwardRef(Uo), $o = ({
  getTagProps: e,
  optionRender: n,
  getOptionLabel: r,
  items: t,
  isLoading: i,
  valueCount: o
}) => i ? /* @__PURE__ */ j("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: Array.from({
  length: o
}).map((a, s) => /* @__PURE__ */ j("div", { css: [{
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
}, Qt`
              width: ${Math.round(Math.random() * 5) * 30 + 60}px;
              height: 30px;
            `] }, s)) }) : t && (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ j("div", { css: {
  marginBottom: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
}, children: t.map((a, s) => {
  const {
    onDelete: u,
    key: c,
    ...d
  } = e({
    index: s
  });
  return /* @__PURE__ */ De("div", { ...d, css: {
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
    /* @__PURE__ */ j("span", { children: n ? n(a) : r(a) }),
    /* @__PURE__ */ j("button", { onClick: u, children: /* @__PURE__ */ j(Ue, { icon: lr.faTimes, css: {
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    } }) })
  ] }, c);
}) }), Sn = "id", Yo = ({
  text: e = "Загрузка"
}) => {
  const [n, r] = M.useState("");
  return M.useEffect(() => {
    const t = setInterval(() => {
      r((i) => i.length < 3 ? i + "." : "");
    }, 300);
    return () => clearInterval(t);
  }, []), /* @__PURE__ */ De("span", { css: {
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
}, Xo = ({
  className: e,
  isLoading: n = !1,
  inputLoading: r = !1,
  valueLoading: t = !1,
  idField: i = Sn,
  displayField: o,
  options: a,
  multiple: s,
  open: u = !1,
  label: c,
  helperText: d,
  error: h,
  onOpen: p,
  onClose: y,
  optionRender: w,
  onChange: T,
  onInputChange: W,
  onSelect: O,
  disabled: m,
  placeholder: P = "Выберите",
  value: C,
  allowClear: A = !0,
  autoComplete: Z = !0,
  autoSelect: Y = !1,
  afterItems: I,
  popupAdditionalOptionsRenderer: V,
  tagListPosition: F = "top",
  tagListRenderer: U,
  ...R
}, N) => {
  const q = M.useCallback((l) => o && o in l ? l[o] : JSON.stringify(l), [o]), [K, Q] = M.useState(u);
  M.useEffect(() => {
    Q(u);
  }, [u]);
  const G = M.useMemo(() => s ? (C == null ? void 0 : C.map((l) => a.find((f) => f[i] == l)).filter((l) => !!l)) || [] : a.find((l) => l[i] == C) || null, [C, a]), {
    value: J,
    getRootProps: ee,
    getInputProps: ne,
    getListboxProps: fe,
    getOptionProps: v,
    groupedOptions: b,
    getClearProps: S,
    setAnchorEl: _,
    anchorEl: D,
    popupOpen: L,
    getTagProps: $
  } = Fn({
    options: a,
    autoComplete: Z,
    autoSelect: Y,
    multiple: s,
    open: K,
    value: G,
    getOptionLabel: q,
    isOptionEqualToValue: (l, f) => i ? l[i] === f[i] : l === f,
    onInputChange: W,
    onOpen: (l) => {
      Q(!0), p == null || p(l);
    },
    onClose: (l, f) => {
      Q(!1), y == null || y(l, f);
    },
    clearOnBlur: !1,
    disabled: m,
    unstable_classNamePrefix: "c",
    onChange: (l, f) => {
      T && (Array.isArray(f) ? T(f.map((g) => g[i])) : T(f && typeof f == "object" ? f[i] : null)), O == null || O(f);
    }
  }), H = M.useMemo(() => V ? V({
    closePopup: () => Q(!1)
  }) : null, [V, Q]), X = n ? /* @__PURE__ */ j("div", { css: {
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
  }, children: /* @__PURE__ */ j(Yo, {}) }) : /* @__PURE__ */ j("ul", { css: {
    zIndex: "20",
    width: "100%"
  }, ...fe(), children: D && b.length > 0 ? /* @__PURE__ */ De(tt, { children: [
    b.map((l, f) => /* @__PURE__ */ j(re.Fragment, { children: "group" in l ? /* @__PURE__ */ j(tt, {}) : /* @__PURE__ */ j("li", { css: [{
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
    }, Qt`
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
      option: l,
      index: f
    }), children: w ? w(l) : q(l) }) }, i in l ? l[i] : f)),
    H
  ] }) : H }), ve = M.useMemo(() => s ? J && J.length > 0 : !!J, [J, s]), {
    onBlur: de,
    onChange: ye,
    ref: we,
    ...ze
  } = ne(), Ce = Lr(N, we), me = M.useMemo(() => s ? U ? U({
    items: J,
    isLoading: t,
    onDelete: (l) => {
      T == null || T(J.filter((f) => f[i] !== l[i]).map((f) => f[i]));
    },
    valueCount: (C == null ? void 0 : C.length) || 0
  }) : /* @__PURE__ */ j($o, { items: J, optionRender: w, getOptionLabel: q, getTagProps: $, isLoading: t, valueCount: C == null ? void 0 : C.length }) : null, [J, U]), Re = /* @__PURE__ */ De(tt, { children: [
    F === "top" && me,
    /* @__PURE__ */ j(st, { ...R, error: h, ...ze, ref: Ce, inputWrapRef: _, placeholder: P, isLoading: r, useTypograf: !1, onChange: ye, onBlur: (l) => {
      de == null || de(l), s && (ye == null || ye({
        ...l,
        target: {
          ...l.target,
          value: ""
        }
      }));
    }, afterItems: !m && [I && /* @__PURE__ */ j(re.Fragment, { children: I }, "after-items"), ve && A && !s && /* @__PURE__ */ j("button", { ...S(), onMouseDown: (l) => {
      l.preventDefault(), l.stopPropagation();
    }, children: /* @__PURE__ */ j(Ue, { css: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, icon: lr.faTimes }) }, "clear"), /* @__PURE__ */ j("button", { onClick: (l) => {
      l.preventDefault(), l.stopPropagation(), Q((f) => !f);
    }, children: /* @__PURE__ */ j(Ue, { css: [{
      marginBottom: "1px",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))"
    }, h && {
      "--tw-text-opacity": "1",
      color: "rgb(248 113 113 / var(--tw-text-opacity))"
    }], icon: $n.faCaretDown }) }, "arrow")] }),
    D && /* @__PURE__ */ j(Wr, { open: L, anchorEl: D, children: /* @__PURE__ */ j("div", { css: [{
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, {
      width: D.offsetWidth
    }], children: X }) })
  ] });
  return /* @__PURE__ */ De(tt, { children: [
    /* @__PURE__ */ j(zt, { label: c, error: h, helperText: d, className: e, ...ee(), children: Re }),
    F === "bottom" && me
  ] });
}, xn = M.forwardRef(Xo), qo = (e, n) => {
  const [r, t] = M.useState(!1);
  return /* @__PURE__ */ j(Vn, { ref: n, type: r ? "text" : "password", InputProps: {
    endAdornment: /* @__PURE__ */ j(Ln, { position: "end", children: /* @__PURE__ */ j(Wn, { size: "small", edge: "end", onClick: () => t((i) => !i), children: /* @__PURE__ */ j(Ue, { css: [{
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }, Qt`
                  width: 18px;
                `], icon: r ? Yn.faEyeSlash : Un.faEye }) }) })
  }, ...e });
};
M.forwardRef(qo);
const $t = (e) => Array.isArray(e) ? e.length === 0 : !e, Go = ({
  dictionary: e,
  open: n = !1,
  value: r,
  filterOptions: t,
  ...i
}, o) => {
  const [a, s] = M.useState(n), u = Xn(e, {
    enabled: a || !!r
  });
  M.useEffect(() => {
    s(n);
  }, [n]);
  const c = M.useMemo(() => t && u.data ? t(u.data) : u.data, [u.data, t]);
  return /* @__PURE__ */ j(
    xn,
    {
      displayField: "name",
      ...i,
      ref: o,
      open: a,
      value: r,
      isLoading: u.isLoading,
      onOpen: () => {
        s(!0);
      },
      onClose: () => {
        s(!1);
      },
      options: c || [],
      useTypograf: !1,
      inputLoading: u.isLoading && !$t(r),
      disabled: u.isLoading && !$t(r) || i.disabled
    }
  );
}, Pa = M.forwardRef(Go);
function kr(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function Yt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? kr(Object(r), !0).forEach(function(t) {
      _n(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kr(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function Qo(e) {
  var n = function(r, t) {
    if (typeof r != "object" || !r)
      return r;
    var i = r[Symbol.toPrimitive];
    if (i !== void 0) {
      var o = i.call(r, t || "default");
      if (typeof o != "object")
        return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(r);
  }(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function _n(e, n, r) {
  return (n = Qo(n)) in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function Ko(e, n) {
  if (e == null)
    return {};
  var r, t, i = function(a, s) {
    if (a == null)
      return {};
    var u, c, d = {}, h = Object.keys(a);
    for (c = 0; c < h.length; c++)
      u = h[c], s.indexOf(u) >= 0 || (d[u] = a[u]);
    return d;
  }(e, n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (t = 0; t < o.length; t++)
      r = o[t], n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Cr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var r = 0, t = new Array(n); r < n; r++)
    t[r] = e[r];
  return t;
}
function Dn(e, n) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = function(u, c) {
      if (u) {
        if (typeof u == "string")
          return Cr(u, c);
        var d = Object.prototype.toString.call(u).slice(8, -1);
        return d === "Object" && u.constructor && (d = u.constructor.name), d === "Map" || d === "Set" ? Array.from(u) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Cr(u, c) : void 0;
      }
    }(e)) || n) {
      r && (e = r);
      var t = 0, i = function() {
      };
      return { s: i, n: function() {
        return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
      }, e: function(u) {
        throw u;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, a = !0, s = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    s = !0, o = u;
  }, f: function() {
    try {
      a || r.return == null || r.return();
    } finally {
      if (s)
        throw o;
    }
  } };
}
function Bt(e, n) {
  var r, t = n.replacementChars, i = n.replacement, o = n.separate, a = t, s = "", u = Dn(e);
  try {
    for (u.s(); !(r = u.n()).done; ) {
      var c, d = r.value, h = !Object.prototype.hasOwnProperty.call(i, d) && ((c = i[a[0]]) === null || c === void 0 ? void 0 : c.test(d));
      (o && d === a[0] || h) && (a = a.slice(1), s += d);
    }
  } catch (p) {
    u.e(p);
  } finally {
    u.f();
  }
  return s;
}
function Xt(e) {
  return e.length > 0 ? _n({}, e, /./) : {};
}
function Jo(e, n) {
  var r, t = n.mask, i = n.replacement, o = n.showMask, a = 0, s = "", u = Dn(t);
  try {
    for (u.s(); !(r = u.n()).done; ) {
      var c = r.value;
      if (!o && e[a] === void 0)
        break;
      Object.prototype.hasOwnProperty.call(i, c) && e[a] !== void 0 ? s += e[a++] : s += c;
    }
  } catch (d) {
    u.e(d);
  } finally {
    u.f();
  }
  return s;
}
function Zo(e, n) {
  for (var r = n.mask, t = n.replacement, i = [], o = 0; o < r.length; o++) {
    var a, s = (a = e[o]) !== null && a !== void 0 ? a : r[o], u = Object.prototype.hasOwnProperty.call(t, s) ? "replacement" : e[o] !== void 0 && e[o] !== r[o] ? "input" : "mask";
    i.push({ type: u, value: s, index: o });
  }
  return i;
}
function Ar(e, n) {
  for (var r = n.start, t = r === void 0 ? 0 : r, i = n.end, o = n.mask, a = n.replacement, s = n.separate, u = e.slice(t, i), c = o.slice(t, i), d = "", h = 0; h < c.length; h++) {
    var p = Object.prototype.hasOwnProperty.call(a, c[h]);
    p && u[h] !== void 0 && u[h] !== c[h] ? d += u[h] : p && s && (d += c[h]);
  }
  return d;
}
function Nr(e) {
  for (var n = e.mask, r = e.replacement, t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = typeof r == "string" ? Xt(r) : r, o = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"], a = "", s = 0; s < n.length; s++) {
    var u = Object.prototype.hasOwnProperty.call(i, n[s]), c = t ? "(?!".concat(n[s], ")") : "";
    s === 0 && (a += "^"), a += u ? c + i[n[s]].toString().slice(1, -1) : o.includes(n[s]) ? "\\".concat(n[s]) : n[s], s === n.length - 1 && (a += "$");
  }
  return a;
}
function ea(e, n, r) {
  return n = nt(n), function(t, i) {
    if (i && (typeof i == "object" || typeof i == "function"))
      return i;
    if (i !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return function(o) {
      if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return o;
    }(t);
  }(e, ur() ? Reflect.construct(n, r || [], nt(e).constructor) : n.apply(e, r));
}
function ur() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ur = function() {
    return !!e;
  })();
}
function qt(e) {
  return qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qt(e);
}
function ta(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function ra(e, n, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function na(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), n && it(e, n);
}
function nt(e) {
  return nt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, nt(e);
}
function it(e, n) {
  return it = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, t) {
    return r.__proto__ = t, r;
  }, it(e, n);
}
function Gt(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Gt = function(r) {
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
      return function(i, o, a) {
        if (ur())
          return Reflect.construct.apply(null, arguments);
        var s = [null];
        s.push.apply(s, o);
        var u = new (i.bind.apply(i, s))();
        return a && it(u, a.prototype), u;
      }(r, arguments, nt(this).constructor);
    }
    return t.prototype = Object.create(r.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), it(t, r);
  }, Gt(e);
}
var Je = function(e) {
  function n(r, t) {
    var i;
    return ta(this, n), (i = ea(this, n, [r])).name = "SyntheticChangeError", i.cause = t, i;
  }
  return na(n, e), ra(n);
}(Gt(Error));
function ia(e, n) {
  return M.useCallback(function(r) {
    e.current = r, typeof n == "function" ? n(r) : qt(n) === "object" && n !== null && (n.current = r);
  }, [e, n]);
}
function ht(e, n) {
  var r = n.value, t = n.selectionStart, i = n.selectionEnd;
  r !== void 0 && (e.value = r), t !== void 0 && i !== void 0 && e.setSelectionRange(t, i);
}
var oa = ["text", "email", "tel", "search", "url"];
function aa(e) {
  var n = e.init, r = e.tracking, t = e.eventType, i = e.eventHandler, o = M.useRef({ timeoutId: -1, fallbackTimeoutId: -1, cachedTimeoutId: -1, start: 0, end: 0 }), a = M.useRef(!0), s = M.useRef(null), u = M.useRef({ init: n, tracking: r, eventType: t, eventHandler: i });
  return u.current.init = n, u.current.tracking = r, u.current.eventType = t, u.current.eventHandler = i, M.useMemo(function() {
    return function(c, d, h) {
      var p = h.onFocus, y = h.onBlur, w = h.onInput;
      return new Proxy(c, { set: function(T, W, O) {
        if (W !== "current")
          return !1;
        var m = O !== null && oa.includes(O.type);
        if (O !== c.current && (c.current !== null && (c.current.removeEventListener("focus", p), c.current.removeEventListener("blur", y), c.current.removeEventListener("input", w)), O !== null && m)) {
          var P, C = (P = O._wrapperState) !== null && P !== void 0 ? P : {}, A = C.controlled, Z = A !== void 0 && A, Y = C.initialValue, I = Y === void 0 ? "" : Y, V = d({ controlled: Z, initialValue: O.value || I });
          ht(O, { value: V.value }), document.activeElement === O && p(), O.addEventListener("focus", p), O.addEventListener("blur", y), O.addEventListener("input", w);
        }
        return T[W] = O, !0;
      } });
    }(s, u.current.init, { onFocus: function() {
      o.current.timeoutId = window.setTimeout(function c() {
        var d, h, p, y;
        a.current ? (o.current.start = (d = (h = s.current) === null || h === void 0 ? void 0 : h.selectionStart) !== null && d !== void 0 ? d : 0, o.current.end = (p = (y = s.current) === null || y === void 0 ? void 0 : y.selectionEnd) !== null && p !== void 0 ? p : 0, o.current.timeoutId = window.setTimeout(c)) : o.current.fallbackTimeoutId = window.setTimeout(c);
      });
    }, onBlur: function() {
      window.clearTimeout(o.current.timeoutId), window.clearTimeout(o.current.fallbackTimeoutId), o.current.timeoutId = -1, o.current.fallbackTimeoutId = -1, o.current.cachedTimeoutId = -1;
    }, onInput: function(c) {
      var d = s.current;
      if (d !== null)
        try {
          var h, p, y, w, T;
          if (o.current.cachedTimeoutId === o.current.timeoutId)
            throw new Je("The input selection has not been updated.");
          o.current.cachedTimeoutId = o.current.timeoutId;
          var W = d.value, O = d.selectionStart, m = d.selectionEnd;
          if (O === null || m === null)
            throw new Je("The selection attributes have not been initialized.");
          var P, C = (h = (p = d._valueTracker) === null || p === void 0 || (y = p.getValue) === null || y === void 0 ? void 0 : y.call(p)) !== null && h !== void 0 ? h : "";
          if (O > o.current.start ? P = "insert" : O <= o.current.start && O < o.current.end ? P = "deleteBackward" : O === o.current.end && W.length < C.length && (P = "deleteForward"), P === void 0 || (P === "deleteBackward" || P === "deleteForward") && W.length > C.length)
            throw new Je("Input type detection error.");
          var A = "", Z = "", Y = o.current.start, I = o.current.end;
          if (P === "insert")
            A = W.slice(o.current.start, O);
          else {
            var V = C.length - W.length;
            Y = O, I = O + V, Z = C.slice(Y, I);
          }
          var F = u.current.tracking({ inputType: P, previousValue: C, value: W, addedValue: A, deletedValue: Z, changeStart: Y, changeEnd: I, selectionStart: O, selectionEnd: m });
          ht(d, { value: F.value, selectionStart: F.selectionStart, selectionEnd: F.selectionEnd });
          var U = u.current.eventType, R = u.current.eventHandler;
          if (typeof U == "string" && R) {
            var N = d.value, q = d.selectionStart, K = d.selectionEnd;
            a.current = !1, requestAnimationFrame(function() {
              ht(d, { value: N, selectionStart: q ?? N.length, selectionEnd: K ?? N.length });
              var X = new CustomEvent(U, { bubbles: !0, cancelable: !1, composed: !0, detail: F.__detail });
              d.dispatchEvent(X), yt.unstable_batchedUpdates ? yt.unstable_batchedUpdates(R, X) : R(X), a.current = !0;
            });
          }
          (w = d._valueTracker) === null || w === void 0 || (T = w.setValue) === null || T === void 0 || T.call(w, C), o.current.start = F.selectionStart, o.current.end = F.selectionEnd;
        } catch (X) {
          var Q, G, J, ee, ne, fe, v, b, S, _, D, L = X, $ = L.name, H = L.cause;
          if (ht(d, { value: (Q = (G = H == null || (J = H.__attributes) === null || J === void 0 ? void 0 : J.value) !== null && G !== void 0 ? G : (ee = d._valueTracker) === null || ee === void 0 || (ne = ee.getValue) === null || ne === void 0 ? void 0 : ne.call(ee)) !== null && Q !== void 0 ? Q : "", selectionStart: (fe = H == null || (v = H.__attributes) === null || v === void 0 ? void 0 : v.selectionStart) !== null && fe !== void 0 ? fe : o.current.start, selectionEnd: (b = H == null || (S = H.__attributes) === null || S === void 0 ? void 0 : S.selectionEnd) !== null && b !== void 0 ? b : o.current.end }), (H == null || (_ = H.__attributes) === null || _ === void 0 ? void 0 : _.selectionStart) !== void 0 && (o.current.start = H.__attributes.selectionStart), (H == null || (D = H.__attributes) === null || D === void 0 ? void 0 : D.selectionEnd) !== void 0 && (o.current.end = H.__attributes.selectionEnd), c.preventDefault(), c.stopPropagation(), $ !== "SyntheticChangeError")
            throw X;
        }
    } });
  }, []);
}
function On() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mask, r = n === void 0 ? "" : n, t = e.replacement, i = t === void 0 ? {} : t, o = e.showMask, a = o !== void 0 && o, s = e.separate, u = s !== void 0 && s, c = e.track, d = e.modify, h = e.onMask, p = typeof i == "string" ? Xt(i) : i, y = M.useRef(null);
  return aa({ init: function(w) {
    var T = w.controlled, W = w.initialValue;
    W = T || W ? W : a ? r : "";
    var O = { mask: r, replacement: p, showMask: a, separate: u };
    return y.current = { value: W, props: O, fallbackProps: O }, { value: W };
  }, tracking: function(w) {
    var T, W = w.inputType, O = w.previousValue, m = w.addedValue, P = w.changeStart, C = w.changeEnd;
    if (y.current === null)
      throw new Je("The state has not been initialized.");
    y.current.value !== O ? y.current.props = y.current.fallbackProps : y.current.fallbackProps = y.current.props;
    var A = Ar(O, { end: P, mask: y.current.props.mask, replacement: y.current.props.replacement, separate: y.current.props.separate }), Z = RegExp("[^".concat(Object.keys(y.current.props.replacement).join(""), "]"), "g"), Y = y.current.props.mask.replace(Z, "");
    A && (A = Bt(A, { replacementChars: Y, replacement: y.current.props.replacement, separate: y.current.props.separate }));
    var I = c == null ? void 0 : c(Yt(Yt({}, W === "insert" ? { inputType: W, data: m } : { inputType: W, data: null }), {}, { value: O, selectionStart: P, selectionEnd: C }));
    if (I === !1)
      throw new Je("Custom trekking stop.");
    if (I === null ? m = "" : I !== !0 && I !== void 0 && (m = I), m && (m = Bt(m, { replacementChars: Y.slice(A.length), replacement: y.current.props.replacement, separate: !1 })), W === "insert" && m === "")
      throw new Je("The character does not match the key value of the `replacement` object.");
    var V = Ar(O, { start: C, mask: y.current.props.mask, replacement: y.current.props.replacement, separate: y.current.props.separate });
    if (y.current.props.separate) {
      var F = y.current.props.mask.slice(P, C).replace(Z, ""), U = F.length - m.length;
      U < 0 ? V = V.slice(-U) : U > 0 && (V = F.slice(-U) + V);
    }
    V && (V = Bt(V, { replacementChars: Y.slice(A.length + m.length), replacement: y.current.props.replacement, separate: y.current.props.separate }));
    var R = A + m + V, N = (T = d == null ? void 0 : d(R)) !== null && T !== void 0 ? T : {}, q = N.mask, K = q === void 0 ? r : q, Q = N.replacement, G = Q === void 0 ? p : Q, J = N.showMask, ee = J === void 0 ? a : J, ne = N.separate, fe = ne === void 0 ? u : ne;
    typeof G == "string" && (G = Xt(G));
    var v = function(S, _) {
      var D = _.mask, L = _.replacement, $ = _.showMask, H = Jo(S, { mask: D, replacement: L, showMask: $ }), X = Zo(H, { mask: D, replacement: L }), ve = Nr({ mask: D, replacement: L }), de = Nr({ mask: D, replacement: L }, !0);
      return { value: H, input: S, parts: X, pattern: ve, isValid: RegExp(de).test(H) };
    }(R, { mask: K, replacement: G, showMask: ee }), b = function(S) {
      var _, D, L, $ = S.inputType, H = S.value, X = S.addedValue, ve = S.beforeChangeValue, de = S.parts, ye = S.replacement, we = S.separate, ze = de.filter(function(f) {
        var g = f.type;
        return g === "input" || we && g === "replacement";
      }), Ce = (_ = ze[ve.length + X.length - 1]) === null || _ === void 0 ? void 0 : _.index, me = (D = ze[ve.length - 1]) === null || D === void 0 ? void 0 : D.index, Re = (L = ze[ve.length + X.length]) === null || L === void 0 ? void 0 : L.index;
      if ($ === "insert") {
        if (Ce !== void 0)
          return Ce + 1;
        if (Re !== void 0)
          return Re;
        if (me !== void 0)
          return me + 1;
      }
      if ($ === "deleteForward") {
        if (Re !== void 0)
          return Re;
        if (me !== void 0)
          return me + 1;
      }
      if ($ === "deleteBackward") {
        if (me !== void 0)
          return me + 1;
        if (Re !== void 0)
          return Re;
      }
      var l = H.split("").findIndex(function(f) {
        return Object.prototype.hasOwnProperty.call(ye, f);
      });
      return l !== -1 ? l : H.length;
    }({ inputType: W, value: v.value, addedValue: m, beforeChangeValue: A, parts: v.parts, replacement: G, separate: fe });
    return y.current.value = v.value, y.current.props = { mask: K, replacement: G, showMask: ee, separate: fe }, { value: v.value, selectionStart: b, selectionEnd: b, __detail: v };
  }, eventType: "input-mask", eventHandler: h });
}
var sa = ["component", "mask", "replacement", "showMask", "separate", "track", "modify", "onMask"];
function la(e, n) {
  var r = e.component, t = e.mask, i = e.replacement, o = e.showMask, a = e.separate, s = e.track, u = e.modify, c = e.onMask, d = Ko(e, sa), h = On({ mask: t, replacement: i, showMask: o, separate: a, track: s, modify: u, onMask: c }), p = ia(h, n);
  return jn.jsx(r || "input", Yt({ ref: p }, d));
}
M.forwardRef(la);
const ua = ({
  error: e,
  label: n,
  open: r,
  className: t,
  onFocus: i,
  onBlur: o,
  onClick: a,
  value: s,
  onChange: u,
  mask: c = "ДД.ММ.ГГГГ",
  replacement: d = {
    Д: /\d/,
    М: /\d/,
    Г: /\d/
  },
  showMask: h = !0,
  ...p
}, y) => {
  const [w, T] = M.useState(null), [W, O] = M.useState(!1), [m, P] = M.useState(!1), [C, A] = M.useState(s ? lt(s).format("DD.MM.YYYY") : "");
  y = On({
    mask: c,
    replacement: d,
    showMask: h,
    track: (F) => {
      const {
        value: U,
        data: R,
        selectionEnd: N,
        selectionStart: q
      } = F, [K, Q, G] = (U == null ? void 0 : U.split(".")) || [], J = (ne) => N === ne && q === ne, ee = R !== null;
      return J(0) && ee && !/[0123]/.test(R) || J(1) && ee && (K == null ? void 0 : K[0]) === "3" && +R > 1 || J(1) && ee && (K == null ? void 0 : K[0]) === "0" && +R == 0 || J(2) && ee && !/[01]/.test(R) || J(4) && ee && (Q == null ? void 0 : Q[0]) === "1" && !/[012]/.test(R) || J(4) && ee && (Q == null ? void 0 : Q[0]) === "0" && +R < 1 || J(5) && ee && !/[12]/.test(R) || J(7) && ee && (G == null ? void 0 : G[0]) === "1" && +R != 9 ? !1 : F.data;
    }
  }), M.useEffect(() => {
    r !== void 0 && O(r);
  }, [r]);
  const Y = M.useCallback((F) => {
    P(!0), O(!0), i == null || i(F);
  }, [i, O]), I = (F) => {
    P(!1), C && (u == null || u(lt(C, "DD-MM-YYYY").format("YYYY-MM-DD"))), o == null || o(F);
  }, V = M.useCallback((F) => {
    T(F);
  }, [T]);
  return /* @__PURE__ */ j(Bn, { onClickAway: () => O(!1), children: /* @__PURE__ */ De(zt, { className: t, label: n, error: e, children: [
    /* @__PURE__ */ j(st, { ...p, inputWrapRef: V, ref: y, onFocus: Y, onBlur: I, useTypograf: !1, value: C, onChange: (F) => {
      A == null || A(F.target.value);
    }, onMouseDown: (F) => {
      m && O(!W), a == null || a(F);
    }, error: e }),
    w && /* @__PURE__ */ j(Wr, { open: W, anchorEl: w, placement: "bottom-start", modifiers: [{
      name: "arrow",
      enabled: !0,
      options: {
        element: w
      }
    }], children: /* @__PURE__ */ j("div", { css: {
      marginTop: "0.125rem",
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      "--tw-drop-shadow": "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
    }, children: /* @__PURE__ */ j(Tn, { value: s, onChange: (F) => {
      u == null || u(lt(F).format("YYYY-MM-DD")), A(lt(F).format("DD.MM.YYYY")), O(!1);
    } }) }) })
  ] }) });
}, Ra = M.forwardRef(ua), ca = ({
  multiple: e,
  value: n,
  url: r,
  params: t,
  idField: i = Sn,
  onInputChange: o,
  filters: a,
  open: s = !1,
  extraOptionsRenderer: u,
  ...c
}, d) => {
  const [h, p] = M.useState(""), [y, w] = M.useState(s), T = Kn(h, 500), W = Qn(r, i), {
    records: O,
    isLoading: m
  } = qn({
    idField: i,
    value: ($t(n) ? [] : e ? n : [n]) || [],
    url: r,
    params: t
  });
  M.useEffect(() => {
    w(s);
  }, [s]);
  const P = M.useMemo(() => ({
    ...t,
    ...a && a.length > 0 && {
      extFilters: JSON.stringify(a)
    },
    ...T ? {
      query: T
    } : void 0
  }), [T, t, a]), C = h.length > 0 || y || !1, A = Gn(r, {
    enabled: C,
    params: P,
    placeholderData: Mn,
    staleTime: 1e3 * 60
  }), Z = M.useMemo(() => {
    var V;
    return kn.uniqBy([...O, ...((V = A.data) == null ? void 0 : V.data) || []], i);
  }, [O, A.data]), Y = !e && m, I = u ? (V) => u({
    ...V,
    search: h,
    searchIsLoading: A.isLoading
  }) : void 0;
  return /* @__PURE__ */ j(tt, { children: /* @__PURE__ */ j(xn, { ref: d, multiple: e, value: n, ...c, disabled: Y || c.disabled, inputLoading: Y, options: Z, idField: i, onOpen: () => w(!0), onClose: () => w(!1), isLoading: A.isLoading || m, valueLoading: m, popupAdditionalOptionsRenderer: I, open: y, afterItems: [(A.isLoading || A.isFetching || e && m) && /* @__PURE__ */ j("div", { children: /* @__PURE__ */ j(Ue, { icon: Fr.faCircleNotch, css: {
    "--tw-text-opacity": "1",
    color: "rgb(209 213 219 / var(--tw-text-opacity))"
  }, spin: !0 }) }, "loading")], onSelect: (V) => {
    var F;
    e ? V == null || V.map((U) => {
      W(U);
    }) : W(V), (F = c.onSelect) == null || F.call(c, V);
  }, onInputChange: (V, F, U) => {
    U === "input" && p(F), U === "reset" && h !== "" && p(""), o == null || o(V, F, U);
  } }) });
}, Ta = M.forwardRef(ca), fa = ({
  unit: e,
  error: n,
  onChange: r,
  allowFloat: t = !0,
  value: i,
  ...o
}, a) => {
  const [s, u] = M.useState(i), [c, d] = M.useState(null);
  M.useEffect(() => {
    u(i);
  }, [i]);
  const h = Lr(a, d);
  return /* @__PURE__ */ j(st, { ...o, ref: h, error: n, value: s, useTypograf: !1, onChange: (p) => {
    const y = Number(p.target.value);
    if (!isNaN(y)) {
      if (p.target.value.includes(".") && !t)
        return;
      u(p.target.value), p.target.value.slice(-1) !== "." && (r == null || r(y));
    }
  }, afterItems: [e && /* @__PURE__ */ j("div", { css: [{
    cursor: "default",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128 / 0.9)"
  }, n && {
    "--tw-text-opacity": "1",
    color: "rgb(239 68 68 / var(--tw-text-opacity))"
  }], onClick: () => c == null ? void 0 : c.focus(), children: e }, "unit")] });
}, Ma = M.forwardRef(fa), da = M.forwardRef(({
  placeholder: e = "Введите",
  ...n
}, r) => /* @__PURE__ */ j("textarea", { ref: r, placeholder: e, ...n })), pa = ({
  error: e,
  rows: n = 5,
  ...r
}, t) => /* @__PURE__ */ j(st, { ...r, ref: t, rows: n, inputComponent: da, error: e }), ka = M.forwardRef(pa), ha = ({
  error: e,
  ...n
}, r) => /* @__PURE__ */ j(st, { useTypograf: !1, ...n, ref: r, error: e }), Ca = M.forwardRef(ha), ga = ({
  label: e,
  error: n,
  value: r,
  helperText: t,
  className: i,
  onChange: o,
  ...a
}, s) => /* @__PURE__ */ j(zt, { label: e, error: n, helperText: t, className: i, children: /* @__PURE__ */ De(In, { value: r === !0 ? "true" : r === !1 ? "false" : void 0, ...a, onChange: (u) => {
  o == null || o(u.target.value === "true");
}, ref: s, size: "small", css: {
  marginTop: "0.25rem"
}, children: [
  /* @__PURE__ */ j(dr, { value: "true", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Да" }),
  /* @__PURE__ */ j(dr, { value: "false", css: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    lineHeight: "20px",
    textTransform: "none"
  }, children: "Нет" })
] }) }), Aa = M.forwardRef(ga);
export {
  Aa as B,
  oi as C,
  Pa as D,
  Da as F,
  zt as L,
  Ma as N,
  Ta as Q,
  Ea as R,
  st as T,
  Ca as Y,
  xa as a,
  Oa as b,
  Ra as c,
  ka as d,
  _i as e,
  rn as f,
  _a as g,
  on as h,
  Qn as i,
  Sn as j,
  za as u
};
