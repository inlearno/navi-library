var Jn = Object.defineProperty;
var Gn = (e, t, r) => t in e ? Jn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var bt = (e, t, r) => (Gn(e, typeof t != "symbol" ? t + "" : t, r), r), Wt = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var y = (e, t, r) => (Wt(e, t, "read from private field"), r ? r.call(e) : t.get(e)), B = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, F = (e, t, r, n) => (Wt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var Et = (e, t, r, n) => ({
  set _(s) {
    F(e, t, s, r);
  },
  get _() {
    return y(e, t, n);
  }
}), V = (e, t, r) => (Wt(e, t, "access private method"), r);
import { h as Zr, j as ft, E as en, c as tn, a as rn, G as Vn, b as Xn, T as Yn } from "./mui-02912ce2.js";
import { c as nn, r as k, R as q, g as Zn } from "./react-54946355.js";
import { F as es } from "./icons-6b7f2986.js";
var ts = ft.Fragment;
function J(e, t, r) {
  return Zr.call(t, "css") ? ft.jsx(en, tn(e, t), r) : ft.jsx(e, t, r);
}
function Mt(e, t, r) {
  return Zr.call(t, "css") ? ft.jsxs(en, tn(e, t), r) : ft.jsxs(e, t, r);
}
var rr = {}, Er = nn;
rr.createRoot = Er.createRoot, rr.hydrateRoot = Er.hydrateRoot;
function rs(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r];
    if (n === "*" || n === "+" || n === "?") {
      t.push({ type: "MODIFIER", index: r, value: e[r++] });
      continue;
    }
    if (n === "\\") {
      t.push({ type: "ESCAPED_CHAR", index: r++, value: e[r++] });
      continue;
    }
    if (n === "{") {
      t.push({ type: "OPEN", index: r, value: e[r++] });
      continue;
    }
    if (n === "}") {
      t.push({ type: "CLOSE", index: r, value: e[r++] });
      continue;
    }
    if (n === ":") {
      for (var s = "", i = r + 1; i < e.length; ) {
        var o = e.charCodeAt(i);
        if (
          // `0-9`
          o >= 48 && o <= 57 || // `A-Z`
          o >= 65 && o <= 90 || // `a-z`
          o >= 97 && o <= 122 || // `_`
          o === 95
        ) {
          s += e[i++];
          continue;
        }
        break;
      }
      if (!s)
        throw new TypeError("Missing parameter name at ".concat(r));
      t.push({ type: "NAME", index: r, value: s }), r = i;
      continue;
    }
    if (n === "(") {
      var u = 1, w = "", i = r + 1;
      if (e[i] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(i));
      for (; i < e.length; ) {
        if (e[i] === "\\") {
          w += e[i++] + e[i++];
          continue;
        }
        if (e[i] === ")") {
          if (u--, u === 0) {
            i++;
            break;
          }
        } else if (e[i] === "(" && (u++, e[i + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(i));
        w += e[i++];
      }
      if (u)
        throw new TypeError("Unbalanced pattern at ".concat(r));
      if (!w)
        throw new TypeError("Missing pattern at ".concat(r));
      t.push({ type: "PATTERN", index: r, value: w }), r = i;
      continue;
    }
    t.push({ type: "CHAR", index: r, value: e[r++] });
  }
  return t.push({ type: "END", index: r, value: "" }), t;
}
function sn(e, t) {
  t === void 0 && (t = {});
  for (var r = rs(e), n = t.prefixes, s = n === void 0 ? "./" : n, i = "[^".concat($e(t.delimiter || "/#?"), "]+?"), o = [], u = 0, w = 0, _ = "", l = function(z) {
    if (w < r.length && r[w].type === z)
      return r[w++].value;
  }, p = function(z) {
    var W = l(z);
    if (W !== void 0)
      return W;
    var I = r[w], U = I.type, le = I.index;
    throw new TypeError("Unexpected ".concat(U, " at ").concat(le, ", expected ").concat(z));
  }, A = function() {
    for (var z = "", W; W = l("CHAR") || l("ESCAPED_CHAR"); )
      z += W;
    return z;
  }; w < r.length; ) {
    var v = l("CHAR"), m = l("NAME"), T = l("PATTERN");
    if (m || T) {
      var b = v || "";
      s.indexOf(b) === -1 && (_ += b, b = ""), _ && (o.push(_), _ = ""), o.push({
        name: m || u++,
        prefix: b,
        suffix: "",
        pattern: T || i,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    var O = v || l("ESCAPED_CHAR");
    if (O) {
      _ += O;
      continue;
    }
    _ && (o.push(_), _ = "");
    var L = l("OPEN");
    if (L) {
      var b = A(), M = l("NAME") || "", P = l("PATTERN") || "", D = A();
      p("CLOSE"), o.push({
        name: M || (P ? u++ : ""),
        pattern: M && !P ? i : P,
        prefix: b,
        suffix: D,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    p("END");
  }
  return o;
}
function Mo(e, t) {
  return ns(sn(e, t), t);
}
function ns(e, t) {
  t === void 0 && (t = {});
  var r = hr(t), n = t.encode, s = n === void 0 ? function(w) {
    return w;
  } : n, i = t.validate, o = i === void 0 ? !0 : i, u = e.map(function(w) {
    if (typeof w == "object")
      return new RegExp("^(?:".concat(w.pattern, ")$"), r);
  });
  return function(w) {
    for (var _ = "", l = 0; l < e.length; l++) {
      var p = e[l];
      if (typeof p == "string") {
        _ += p;
        continue;
      }
      var A = w ? w[p.name] : void 0, v = p.modifier === "?" || p.modifier === "*", m = p.modifier === "*" || p.modifier === "+";
      if (Array.isArray(A)) {
        if (!m)
          throw new TypeError('Expected "'.concat(p.name, '" to not repeat, but got an array'));
        if (A.length === 0) {
          if (v)
            continue;
          throw new TypeError('Expected "'.concat(p.name, '" to not be empty'));
        }
        for (var T = 0; T < A.length; T++) {
          var b = s(A[T], p);
          if (o && !u[l].test(b))
            throw new TypeError('Expected all "'.concat(p.name, '" to match "').concat(p.pattern, '", but got "').concat(b, '"'));
          _ += p.prefix + b + p.suffix;
        }
        continue;
      }
      if (typeof A == "string" || typeof A == "number") {
        var b = s(String(A), p);
        if (o && !u[l].test(b))
          throw new TypeError('Expected "'.concat(p.name, '" to match "').concat(p.pattern, '", but got "').concat(b, '"'));
        _ += p.prefix + b + p.suffix;
        continue;
      }
      if (!v) {
        var O = m ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(p.name, '" to be ').concat(O));
      }
    }
    return _;
  };
}
function ss(e, t) {
  var r = [], n = on(e, r, t);
  return is(n, r, t);
}
function is(e, t, r) {
  r === void 0 && (r = {});
  var n = r.decode, s = n === void 0 ? function(i) {
    return i;
  } : n;
  return function(i) {
    var o = e.exec(i);
    if (!o)
      return !1;
    for (var u = o[0], w = o.index, _ = /* @__PURE__ */ Object.create(null), l = function(A) {
      if (o[A] === void 0)
        return "continue";
      var v = t[A - 1];
      v.modifier === "*" || v.modifier === "+" ? _[v.name] = o[A].split(v.prefix + v.suffix).map(function(m) {
        return s(m, v);
      }) : _[v.name] = s(o[A], v);
    }, p = 1; p < o.length; p++)
      l(p);
    return { path: u, index: w, params: _ };
  };
}
function $e(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function hr(e) {
  return e && e.sensitive ? "" : "i";
}
function os(e, t) {
  if (!t)
    return e;
  for (var r = /\((?:\?<(.*?)>)?(?!\?)/g, n = 0, s = r.exec(e.source); s; )
    t.push({
      // Use parenthesized substring match if available, index otherwise
      name: s[1] || n++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), s = r.exec(e.source);
  return e;
}
function as(e, t, r) {
  var n = e.map(function(s) {
    return on(s, t, r).source;
  });
  return new RegExp("(?:".concat(n.join("|"), ")"), hr(r));
}
function cs(e, t, r) {
  return us(sn(e, r), t, r);
}
function us(e, t, r) {
  r === void 0 && (r = {});
  for (var n = r.strict, s = n === void 0 ? !1 : n, i = r.start, o = i === void 0 ? !0 : i, u = r.end, w = u === void 0 ? !0 : u, _ = r.encode, l = _ === void 0 ? function(le) {
    return le;
  } : _, p = r.delimiter, A = p === void 0 ? "/#?" : p, v = r.endsWith, m = v === void 0 ? "" : v, T = "[".concat($e(m), "]|$"), b = "[".concat($e(A), "]"), O = o ? "^" : "", L = 0, M = e; L < M.length; L++) {
    var P = M[L];
    if (typeof P == "string")
      O += $e(l(P));
    else {
      var D = $e(l(P.prefix)), z = $e(l(P.suffix));
      if (P.pattern)
        if (t && t.push(P), D || z)
          if (P.modifier === "+" || P.modifier === "*") {
            var W = P.modifier === "*" ? "?" : "";
            O += "(?:".concat(D, "((?:").concat(P.pattern, ")(?:").concat(z).concat(D, "(?:").concat(P.pattern, "))*)").concat(z, ")").concat(W);
          } else
            O += "(?:".concat(D, "(").concat(P.pattern, ")").concat(z, ")").concat(P.modifier);
        else
          P.modifier === "+" || P.modifier === "*" ? O += "((?:".concat(P.pattern, ")").concat(P.modifier, ")") : O += "(".concat(P.pattern, ")").concat(P.modifier);
      else
        O += "(?:".concat(D).concat(z, ")").concat(P.modifier);
    }
  }
  if (w)
    s || (O += "".concat(b, "?")), O += r.endsWith ? "(?=".concat(T, ")") : "$";
  else {
    var I = e[e.length - 1], U = typeof I == "string" ? b.indexOf(I[I.length - 1]) > -1 : I === void 0;
    s || (O += "(?:".concat(b, "(?=").concat(T, "))?")), U || (O += "(?=".concat(b, "|").concat(T, ")"));
  }
  return new RegExp(O, hr(r));
}
function on(e, t, r) {
  return e instanceof RegExp ? os(e, t) : Array.isArray(e) ? as(e, t, r) : cs(e, t, r);
}
const ls = (e) => e.map((t) => [t, ss(t.path)]), fs = (e, t) => {
  for (let r = 0; r < e.length; r++) {
    const [n, s] = e[r], i = s(t);
    if (i)
      return {
        params: i.params,
        route: n,
        path: t
      };
  }
};
function an(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = an(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ie() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = an(e)) && (n && (n += " "), n += t);
  return n;
}
const ut = (e) => typeof e == "number" && !isNaN(e), Qe = (e) => typeof e == "string", ae = (e) => typeof e == "function", Ot = (e) => Qe(e) || ae(e) ? e : null, Jt = (e) => k.isValidElement(e) || Qe(e) || ae(e) || ut(e);
function hs(e, t, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: s } = e;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = n + "px", s.transition = `all ${r}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t, r);
    });
  });
}
function Dt(e) {
  let { enter: t, exit: r, appendPosition: n = !1, collapse: s = !0, collapseDuration: i = 300 } = e;
  return function(o) {
    let { children: u, position: w, preventExitTransition: _, done: l, nodeRef: p, isIn: A } = o;
    const v = n ? `${t}--${w}` : t, m = n ? `${r}--${w}` : r, T = k.useRef(0);
    return k.useLayoutEffect(() => {
      const b = p.current, O = v.split(" "), L = (M) => {
        M.target === p.current && (b.dispatchEvent(new Event("d")), b.removeEventListener("animationend", L), b.removeEventListener("animationcancel", L), T.current === 0 && M.type !== "animationcancel" && b.classList.remove(...O));
      };
      b.classList.add(...O), b.addEventListener("animationend", L), b.addEventListener("animationcancel", L);
    }, []), k.useEffect(() => {
      const b = p.current, O = () => {
        b.removeEventListener("animationend", O), s ? hs(b, l, i) : l();
      };
      A || (_ ? O() : (T.current = 1, b.className += ` ${m}`, b.addEventListener("animationend", O)));
    }, [A]), q.createElement(q.Fragment, null, u);
  };
}
function _r(e, t) {
  return e != null ? { content: e.content, containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, status: t } : {};
}
const me = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(e, t) {
  return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
}, off(e, t) {
  if (t) {
    const r = this.list.get(e).filter((n) => n !== t);
    return this.list.set(e, r), this;
  }
  return this.list.delete(e), this;
}, cancelEmit(e) {
  const t = this.emitQueue.get(e);
  return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
}, emit(e) {
  this.list.has(e) && this.list.get(e).forEach((t) => {
    const r = setTimeout(() => {
      t(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(r);
  });
} }, _t = (e) => {
  let { theme: t, type: r, ...n } = e;
  return q.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...n });
}, Gt = { info: function(e) {
  return q.createElement(_t, { ...e }, q.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return q.createElement(_t, { ...e }, q.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return q.createElement(_t, { ...e }, q.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return q.createElement(_t, { ...e }, q.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return q.createElement("div", { className: "Toastify__spinner" });
} };
function ds(e) {
  const [, t] = k.useReducer((v) => v + 1, 0), [r, n] = k.useState([]), s = k.useRef(null), i = k.useRef(/* @__PURE__ */ new Map()).current, o = (v) => r.indexOf(v) !== -1, u = k.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: o, getToast: (v) => i.get(v) }).current;
  function w(v) {
    let { containerId: m } = v;
    const { limit: T } = u.props;
    !T || m && u.containerId !== m || (u.count -= u.queue.length, u.queue = []);
  }
  function _(v) {
    n((m) => v == null ? [] : m.filter((T) => T !== v));
  }
  function l() {
    const { toastContent: v, toastProps: m, staleId: T } = u.queue.shift();
    A(v, m, T);
  }
  function p(v, m) {
    let { delay: T, staleId: b, ...O } = m;
    if (!Jt(v) || function(te) {
      return !s.current || u.props.enableMultiContainer && te.containerId !== u.props.containerId || i.has(te.toastId) && te.updateId == null;
    }(O))
      return;
    const { toastId: L, updateId: M, data: P } = O, { props: D } = u, z = () => _(L), W = M == null;
    W && u.count++;
    const I = { ...D, style: D.toastStyle, key: u.toastKey++, ...Object.fromEntries(Object.entries(O).filter((te) => {
      let [fe, re] = te;
      return re != null;
    })), toastId: L, updateId: M, data: P, closeToast: z, isIn: !1, className: Ot(O.className || D.toastClassName), bodyClassName: Ot(O.bodyClassName || D.bodyClassName), progressClassName: Ot(O.progressClassName || D.progressClassName), autoClose: !O.isLoading && (U = O.autoClose, le = D.autoClose, U === !1 || ut(U) && U > 0 ? U : le), deleteToast() {
      const te = _r(i.get(L), "removed");
      i.delete(L), me.emit(4, te);
      const fe = u.queue.length;
      if (u.count = L == null ? u.count - u.displayedToast : u.count - 1, u.count < 0 && (u.count = 0), fe > 0) {
        const re = L == null ? u.props.limit : 1;
        if (fe === 1 || re === 1)
          u.displayedToast++, l();
        else {
          const j = re > fe ? fe : re;
          u.displayedToast = j;
          for (let ne = 0; ne < j; ne++)
            l();
        }
      } else
        t();
    } };
    var U, le;
    I.iconOut = function(te) {
      let { theme: fe, type: re, isLoading: j, icon: ne } = te, ce = null;
      const a = { theme: fe, type: re };
      return ne === !1 || (ae(ne) ? ce = ne(a) : k.isValidElement(ne) ? ce = k.cloneElement(ne, a) : Qe(ne) || ut(ne) ? ce = ne : j ? ce = Gt.spinner() : ((c) => c in Gt)(re) && (ce = Gt[re](a))), ce;
    }(I), ae(O.onOpen) && (I.onOpen = O.onOpen), ae(O.onClose) && (I.onClose = O.onClose), I.closeButton = D.closeButton, O.closeButton === !1 || Jt(O.closeButton) ? I.closeButton = O.closeButton : O.closeButton === !0 && (I.closeButton = !Jt(D.closeButton) || D.closeButton);
    let ge = v;
    k.isValidElement(v) && !Qe(v.type) ? ge = k.cloneElement(v, { closeToast: z, toastProps: I, data: P }) : ae(v) && (ge = v({ closeToast: z, toastProps: I, data: P })), D.limit && D.limit > 0 && u.count > D.limit && W ? u.queue.push({ toastContent: ge, toastProps: I, staleId: b }) : ut(T) ? setTimeout(() => {
      A(ge, I, b);
    }, T) : A(ge, I, b);
  }
  function A(v, m, T) {
    const { toastId: b } = m;
    T && i.delete(T);
    const O = { content: v, props: m };
    i.set(b, O), n((L) => [...L, b].filter((M) => M !== T)), me.emit(4, _r(O, O.props.updateId == null ? "added" : "updated"));
  }
  return k.useEffect(() => (u.containerId = e.containerId, me.cancelEmit(3).on(0, p).on(1, (v) => s.current && _(v)).on(5, w).emit(2, u), () => {
    i.clear(), me.emit(3, u);
  }), []), k.useEffect(() => {
    u.props = e, u.isToastActive = o, u.displayedToast = r.length;
  }), { getToastToRender: function(v) {
    const m = /* @__PURE__ */ new Map(), T = Array.from(i.values());
    return e.newestOnTop && T.reverse(), T.forEach((b) => {
      const { position: O } = b.props;
      m.has(O) || m.set(O, []), m.get(O).push(b);
    }), Array.from(m, (b) => v(b[0], b[1]));
  }, containerRef: s, isToastActive: o };
}
function Tr(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function Or(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function ps(e) {
  const [t, r] = k.useState(!1), [n, s] = k.useState(!1), i = k.useRef(null), o = k.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, u = k.useRef(e), { autoClose: w, pauseOnHover: _, closeToast: l, onClick: p, closeOnClick: A } = e;
  function v(P) {
    if (e.draggable) {
      P.nativeEvent.type === "touchstart" && P.nativeEvent.preventDefault(), o.didMove = !1, document.addEventListener("mousemove", O), document.addEventListener("mouseup", L), document.addEventListener("touchmove", O), document.addEventListener("touchend", L);
      const D = i.current;
      o.canCloseOnClick = !0, o.canDrag = !0, o.boundingRect = D.getBoundingClientRect(), D.style.transition = "", o.x = Tr(P.nativeEvent), o.y = Or(P.nativeEvent), e.draggableDirection === "x" ? (o.start = o.x, o.removalDistance = D.offsetWidth * (e.draggablePercent / 100)) : (o.start = o.y, o.removalDistance = D.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }
  function m(P) {
    if (o.boundingRect) {
      const { top: D, bottom: z, left: W, right: I } = o.boundingRect;
      P.nativeEvent.type !== "touchend" && e.pauseOnHover && o.x >= W && o.x <= I && o.y >= D && o.y <= z ? b() : T();
    }
  }
  function T() {
    r(!0);
  }
  function b() {
    r(!1);
  }
  function O(P) {
    const D = i.current;
    o.canDrag && D && (o.didMove = !0, t && b(), o.x = Tr(P), o.y = Or(P), o.delta = e.draggableDirection === "x" ? o.x - o.start : o.y - o.start, o.start !== o.x && (o.canCloseOnClick = !1), D.style.transform = `translate${e.draggableDirection}(${o.delta}px)`, D.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
  }
  function L() {
    document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", L), document.removeEventListener("touchmove", O), document.removeEventListener("touchend", L);
    const P = i.current;
    if (o.canDrag && o.didMove && P) {
      if (o.canDrag = !1, Math.abs(o.delta) > o.removalDistance)
        return s(!0), void e.closeToast();
      P.style.transition = "transform 0.2s, opacity 0.2s", P.style.transform = `translate${e.draggableDirection}(0)`, P.style.opacity = "1";
    }
  }
  k.useEffect(() => {
    u.current = e;
  }), k.useEffect(() => (i.current && i.current.addEventListener("d", T, { once: !0 }), ae(e.onOpen) && e.onOpen(k.isValidElement(e.children) && e.children.props), () => {
    const P = u.current;
    ae(P.onClose) && P.onClose(k.isValidElement(P.children) && P.children.props);
  }), []), k.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || b(), window.addEventListener("focus", T), window.addEventListener("blur", b)), () => {
    e.pauseOnFocusLoss && (window.removeEventListener("focus", T), window.removeEventListener("blur", b));
  }), [e.pauseOnFocusLoss]);
  const M = { onMouseDown: v, onTouchStart: v, onMouseUp: m, onTouchEnd: m };
  return w && _ && (M.onMouseEnter = b, M.onMouseLeave = T), A && (M.onClick = (P) => {
    p && p(P), o.canCloseOnClick && l();
  }), { playToast: T, pauseToast: b, isRunning: t, preventExitTransition: n, toastRef: i, eventHandlers: M };
}
function cn(e) {
  let { closeToast: t, theme: r, ariaLabel: n = "close" } = e;
  return q.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (s) => {
    s.stopPropagation(), t(s);
  }, "aria-label": n }, q.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, q.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function ms(e) {
  let { delay: t, isRunning: r, closeToast: n, type: s = "default", hide: i, className: o, style: u, controlledProgress: w, progress: _, rtl: l, isIn: p, theme: A } = e;
  const v = i || w && _ === 0, m = { ...u, animationDuration: `${t}ms`, animationPlayState: r ? "running" : "paused", opacity: v ? 0 : 1 };
  w && (m.transform = `scaleX(${_})`);
  const T = Ie("Toastify__progress-bar", w ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${A}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": l }), b = ae(o) ? o({ rtl: l, type: s, defaultClassName: T }) : Ie(T, o);
  return q.createElement("div", { role: "progressbar", "aria-hidden": v ? "true" : "false", "aria-label": "notification timer", className: b, style: m, [w && _ >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: w && _ < 1 ? null : () => {
    p && n();
  } });
}
const ys = (e) => {
  const { isRunning: t, preventExitTransition: r, toastRef: n, eventHandlers: s } = ps(e), { closeButton: i, children: o, autoClose: u, onClick: w, type: _, hideProgressBar: l, closeToast: p, transition: A, position: v, className: m, style: T, bodyClassName: b, bodyStyle: O, progressClassName: L, progressStyle: M, updateId: P, role: D, progress: z, rtl: W, toastId: I, deleteToast: U, isIn: le, isLoading: ge, iconOut: te, closeOnClick: fe, theme: re } = e, j = Ie("Toastify__toast", `Toastify__toast-theme--${re}`, `Toastify__toast--${_}`, { "Toastify__toast--rtl": W }, { "Toastify__toast--close-on-click": fe }), ne = ae(m) ? m({ rtl: W, position: v, type: _, defaultClassName: j }) : Ie(j, m), ce = !!z || !u, a = { closeToast: p, type: _, theme: re };
  let c = null;
  return i === !1 || (c = ae(i) ? i(a) : k.isValidElement(i) ? k.cloneElement(i, a) : cn(a)), q.createElement(A, { isIn: le, done: U, position: v, preventExitTransition: r, nodeRef: n }, q.createElement("div", { id: I, onClick: w, className: ne, ...s, style: T, ref: n }, q.createElement("div", { ...le && { role: D }, className: ae(b) ? b({ type: _ }) : Ie("Toastify__toast-body", b), style: O }, te != null && q.createElement("div", { className: Ie("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !ge }) }, te), q.createElement("div", null, o)), c, q.createElement(ms, { ...P && !ce ? { key: `pb-${P}` } : {}, rtl: W, theme: re, delay: u, isRunning: t, isIn: le, closeToast: p, hide: l, type: _, style: M, className: L, controlledProgress: ce, progress: z || 0 })));
}, jt = function(e, t) {
  return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, vs = Dt(jt("bounce", !0));
Dt(jt("slide", !0));
Dt(jt("zoom"));
Dt(jt("flip"));
const nr = k.forwardRef((e, t) => {
  const { getToastToRender: r, containerRef: n, isToastActive: s } = ds(e), { className: i, style: o, rtl: u, containerId: w } = e;
  function _(l) {
    const p = Ie("Toastify__toast-container", `Toastify__toast-container--${l}`, { "Toastify__toast-container--rtl": u });
    return ae(i) ? i({ position: l, rtl: u, defaultClassName: p }) : Ie(p, Ot(i));
  }
  return k.useEffect(() => {
    t && (t.current = n.current);
  }, []), q.createElement("div", { ref: n, className: "Toastify", id: w }, r((l, p) => {
    const A = p.length ? { ...o } : { ...o, pointerEvents: "none" };
    return q.createElement("div", { className: _(l), style: A, key: `container-${l}` }, p.map((v, m) => {
      let { content: T, props: b } = v;
      return q.createElement(ys, { ...b, isIn: s(b.toastId), style: { ...b.style, "--nth": m + 1, "--len": p.length }, key: `toast-${b.key}` }, T);
    }));
  }));
});
nr.displayName = "ToastContainer", nr.defaultProps = { position: "top-right", transition: vs, autoClose: 5e3, closeButton: cn, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let Vt, ke = /* @__PURE__ */ new Map(), ct = [], ws = 1;
function un() {
  return "" + ws++;
}
function gs(e) {
  return e && (Qe(e.toastId) || ut(e.toastId)) ? e.toastId : un();
}
function lt(e, t) {
  return ke.size > 0 ? me.emit(0, e, t) : ct.push({ content: e, options: t }), t.toastId;
}
function At(e, t) {
  return { ...t, type: t && t.type || e, toastId: gs(t) };
}
function Tt(e) {
  return (t, r) => lt(t, At(e, r));
}
function K(e, t) {
  return lt(e, At("default", t));
}
K.loading = (e, t) => lt(e, At("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), K.promise = function(e, t, r) {
  let n, { pending: s, error: i, success: o } = t;
  s && (n = Qe(s) ? K.loading(s, r) : K.loading(s.render, { ...r, ...s }));
  const u = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, w = (l, p, A) => {
    if (p == null)
      return void K.dismiss(n);
    const v = { type: l, ...u, ...r, data: A }, m = Qe(p) ? { render: p } : p;
    return n ? K.update(n, { ...v, ...m }) : K(m.render, { ...v, ...m }), A;
  }, _ = ae(e) ? e() : e;
  return _.then((l) => w("success", o, l)).catch((l) => w("error", i, l)), _;
}, K.success = Tt("success"), K.info = Tt("info"), K.error = Tt("error"), K.warning = Tt("warning"), K.warn = K.warning, K.dark = (e, t) => lt(e, At("default", { theme: "dark", ...t })), K.dismiss = (e) => {
  ke.size > 0 ? me.emit(1, e) : ct = ct.filter((t) => e != null && t.options.toastId !== e);
}, K.clearWaitingQueue = function(e) {
  return e === void 0 && (e = {}), me.emit(5, e);
}, K.isActive = (e) => {
  let t = !1;
  return ke.forEach((r) => {
    r.isToastActive && r.isToastActive(e) && (t = !0);
  }), t;
}, K.update = function(e, t) {
  t === void 0 && (t = {}), setTimeout(() => {
    const r = function(n, s) {
      let { containerId: i } = s;
      const o = ke.get(i || Vt);
      return o && o.getToast(n);
    }(e, t);
    if (r) {
      const { props: n, content: s } = r, i = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: un() };
      i.toastId !== e && (i.staleId = e);
      const o = i.render || s;
      delete i.render, lt(o, i);
    }
  }, 0);
}, K.done = (e) => {
  K.update(e, { progress: 1 });
}, K.onChange = (e) => (me.on(4, e), () => {
  me.off(4, e);
}), K.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, K.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, me.on(2, (e) => {
  Vt = e.containerId || e, ke.set(Vt, e), ct.forEach((t) => {
    me.emit(0, t.content, t.options);
  }), ct = [];
}).on(3, (e) => {
  ke.delete(e.containerId || e), ke.size === 0 && me.off(0).off(1).off(5);
});
const bs = () => /* @__PURE__ */ J(Vn, { styles: rn`*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-gradient-via-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-gradient-to-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}
::before, ::after {
  --tw-content: '';
}
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:  normal;
  font-variation-settings:  normal;
}
body {
  margin: 0;
  line-height: inherit;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  text-decoration: underline dotted;
}
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b, strong {
  font-weight: bolder;
}
code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button, select {
  text-transform: none;
}
button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
dialog {
  padding: 0;
}
textarea {
  resize: vertical;
}
input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
button, [role="button"] {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}
img, video {
  max-width: 100%;
  height: auto;
}
[hidden] {
  display: none;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-gradient-via-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-gradient-to-position: var(--tw-empty,/*!*/ /*!*/);
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}` }), Es = () => /* @__PURE__ */ Mt(ts, { children: [
  /* @__PURE__ */ J(bs, {}),
  /* @__PURE__ */ J(nr, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
var It = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, kt = typeof window > "u" || "Deno" in window;
function ve() {
}
function _s(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ts(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Os(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Rr(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: u
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== dr(o, t.options))
        return !1;
    } else if (!dt(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const w = t.isActive();
    if (r === "active" && !w || r === "inactive" && w)
      return !1;
  }
  return !(typeof u == "boolean" && t.isStale() !== u || typeof s < "u" && s !== t.state.fetchStatus || i && !i(t));
}
function Sr(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (ht(t.options.mutationKey) !== ht(i))
        return !1;
    } else if (!dt(t.options.mutationKey, i))
      return !1;
  }
  return !(n && t.state.status !== n || s && !s(t));
}
function dr(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ht)(e);
}
function ht(e) {
  return JSON.stringify(
    e,
    (t, r) => sr(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function dt(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !dt(e[r], t[r])) : !1;
}
function ln(e, t) {
  if (e === t)
    return e;
  const r = Cr(e) && Cr(t);
  if (r || sr(e) && sr(t)) {
    const n = r ? e.length : Object.keys(e).length, s = r ? t : Object.keys(t), i = s.length, o = r ? [] : {};
    let u = 0;
    for (let w = 0; w < i; w++) {
      const _ = r ? w : s[w];
      o[_] = ln(e[_], t[_]), o[_] === e[_] && u++;
    }
    return n === i && u === n ? e : o;
  }
  return t;
}
function Do(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Cr(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function sr(e) {
  if (!xr(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!xr(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function xr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function fn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Ar(e) {
  fn(0).then(e);
}
function Rs(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? ln(e, t) : t;
}
function jo(e) {
  return e;
}
function Ss(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function Cs(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Ue, Le, Ke, $r, xs = ($r = class extends It {
  constructor() {
    super();
    B(this, Ue, void 0);
    B(this, Le, void 0);
    B(this, Ke, void 0);
    F(this, Ke, (t) => {
      if (!kt && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    y(this, Le) || this.setEventListener(y(this, Ke));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = y(this, Le)) == null || t.call(this), F(this, Le, void 0));
  }
  setEventListener(t) {
    var r;
    F(this, Ke, t), (r = y(this, Le)) == null || r.call(this), F(this, Le, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    y(this, Ue) !== t && (F(this, Ue, t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    var t;
    return typeof y(this, Ue) == "boolean" ? y(this, Ue) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Ue = new WeakMap(), Le = new WeakMap(), Ke = new WeakMap(), $r), ir = new xs(), We, Ne, Je, Kr, As = (Kr = class extends It {
  constructor() {
    super();
    B(this, We, !0);
    B(this, Ne, void 0);
    B(this, Je, void 0);
    F(this, Je, (t) => {
      if (!kt && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    y(this, Ne) || this.setEventListener(y(this, Je));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = y(this, Ne)) == null || t.call(this), F(this, Ne, void 0));
  }
  setEventListener(t) {
    var r;
    F(this, Je, t), (r = y(this, Ne)) == null || r.call(this), F(this, Ne, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    y(this, We) !== t && (F(this, We, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return y(this, We);
  }
}, We = new WeakMap(), Ne = new WeakMap(), Je = new WeakMap(), Kr), Pt = new As();
function Ps(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function pr(e) {
  return (e ?? "online") === "online" ? Pt.isOnline() : !0;
}
var hn = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Xt(e) {
  return e instanceof hn;
}
function dn(e) {
  let t = !1, r = 0, n = !1, s, i, o;
  const u = new Promise((b, O) => {
    i = b, o = O;
  }), w = (b) => {
    var O;
    n || (v(new hn(b)), (O = e.abort) == null || O.call(e));
  }, _ = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, p = () => !ir.isFocused() || e.networkMode !== "always" && !Pt.isOnline(), A = (b) => {
    var O;
    n || (n = !0, (O = e.onSuccess) == null || O.call(e, b), s == null || s(), i(b));
  }, v = (b) => {
    var O;
    n || (n = !0, (O = e.onError) == null || O.call(e, b), s == null || s(), o(b));
  }, m = () => new Promise((b) => {
    var O;
    s = (L) => {
      const M = n || !p();
      return M && b(L), M;
    }, (O = e.onPause) == null || O.call(e);
  }).then(() => {
    var b;
    s = void 0, n || (b = e.onContinue) == null || b.call(e);
  }), T = () => {
    if (n)
      return;
    let b;
    try {
      b = e.fn();
    } catch (O) {
      b = Promise.reject(O);
    }
    Promise.resolve(b).then(A).catch((O) => {
      var z;
      if (n)
        return;
      const L = e.retry ?? (kt ? 0 : 3), M = e.retryDelay ?? Ps, P = typeof M == "function" ? M(r, O) : M, D = L === !0 || typeof L == "number" && r < L || typeof L == "function" && L(r, O);
      if (t || !D) {
        v(O);
        return;
      }
      r++, (z = e.onFail) == null || z.call(e, r, O), fn(P).then(() => {
        if (p())
          return m();
      }).then(() => {
        t ? v(O) : T();
      });
    });
  };
  return pr(e.networkMode) ? T() : m().then(T), {
    promise: u,
    cancel: w,
    continue: () => (s == null ? void 0 : s()) ? u : Promise.resolve(),
    cancelRetry: _,
    continueRetry: l
  };
}
function Ls() {
  let e = [], t = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  };
  const s = (l) => {
    let p;
    t++;
    try {
      p = l();
    } finally {
      t--, t || u();
    }
    return p;
  }, i = (l) => {
    t ? e.push(l) : Ar(() => {
      r(l);
    });
  }, o = (l) => (...p) => {
    i(() => {
      l(...p);
    });
  }, u = () => {
    const l = e;
    e = [], l.length && Ar(() => {
      n(() => {
        l.forEach((p) => {
          r(p);
        });
      });
    });
  };
  return {
    batch: s,
    batchCalls: o,
    schedule: i,
    setNotifyFunction: (l) => {
      r = l;
    },
    setBatchNotifyFunction: (l) => {
      n = l;
    }
  };
}
var ie = Ls(), Be, Wr, pn = (Wr = class {
  constructor() {
    B(this, Be, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ts(this.gcTime) && F(this, Be, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (kt ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    y(this, Be) && (clearTimeout(y(this, Be)), F(this, Be, void 0));
  }
}, Be = new WeakMap(), Wr), Ge, Ve, he, Fe, de, Z, mt, ze, Xe, Rt, we, Se, Jr, Ns = (Jr = class extends pn {
  constructor(t) {
    super();
    B(this, Xe);
    B(this, we);
    B(this, Ge, void 0);
    B(this, Ve, void 0);
    B(this, he, void 0);
    B(this, Fe, void 0);
    B(this, de, void 0);
    B(this, Z, void 0);
    B(this, mt, void 0);
    B(this, ze, void 0);
    F(this, ze, !1), F(this, mt, t.defaultOptions), V(this, Xe, Rt).call(this, t.options), F(this, Z, []), F(this, he, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, F(this, Ge, t.state || Fs(this.options)), this.state = y(this, Ge), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !y(this, Z).length && this.state.fetchStatus === "idle" && y(this, he).remove(this);
  }
  setData(t, r) {
    const n = Rs(this.state.data, t, this.options);
    return V(this, we, Se).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    V(this, we, Se).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n;
    const r = y(this, Fe);
    return (n = y(this, de)) == null || n.cancel(t), r ? r.then(ve).catch(ve) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(y(this, Ge));
  }
  isActive() {
    return y(this, Z).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || y(this, Z).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Os(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = y(this, Z).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = y(this, de)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = y(this, Z).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = y(this, de)) == null || r.continue();
  }
  addObserver(t) {
    y(this, Z).includes(t) || (y(this, Z).push(t), this.clearGcTimeout(), y(this, he).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    y(this, Z).includes(t) && (F(this, Z, y(this, Z).filter((r) => r !== t)), y(this, Z).length || (y(this, de) && (y(this, ze) ? y(this, de).cancel({ revert: !0 }) : y(this, de).cancelRetry()), this.scheduleGc()), y(this, he).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return y(this, Z).length;
  }
  invalidate() {
    this.state.isInvalidated || V(this, we, Se).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var _, l, p, A;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (y(this, Fe))
        return (_ = y(this, de)) == null || _.continueRetry(), y(this, Fe);
    }
    if (t && V(this, Xe, Rt).call(this, t), !this.options.queryFn) {
      const v = y(this, Z).find((m) => m.options.queryFn);
      v && V(this, Xe, Rt).call(this, v.options);
    }
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (v) => {
      Object.defineProperty(v, "signal", {
        enumerable: !0,
        get: () => (F(this, ze, !0), n.signal)
      });
    };
    i(s);
    const o = () => this.options.queryFn ? (F(this, ze, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      s,
      this
    ) : this.options.queryFn(
      s
    )) : Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ), u = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    i(u), (l = this.options.behavior) == null || l.onFetch(
      u,
      this
    ), F(this, Ve, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((p = u.fetchOptions) == null ? void 0 : p.meta)) && V(this, we, Se).call(this, { type: "fetch", meta: (A = u.fetchOptions) == null ? void 0 : A.meta });
    const w = (v) => {
      var m, T, b, O;
      Xt(v) && v.silent || V(this, we, Se).call(this, {
        type: "error",
        error: v
      }), Xt(v) || ((T = (m = y(this, he).config).onError) == null || T.call(
        m,
        v,
        this
      ), (O = (b = y(this, he).config).onSettled) == null || O.call(
        b,
        this.state.data,
        v,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return F(this, de, dn({
      fn: u.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (v) => {
        var m, T, b, O;
        if (typeof v > "u") {
          w(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(v), (T = (m = y(this, he).config).onSuccess) == null || T.call(m, v, this), (O = (b = y(this, he).config).onSettled) == null || O.call(
          b,
          v,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: w,
      onFail: (v, m) => {
        V(this, we, Se).call(this, { type: "failed", failureCount: v, error: m });
      },
      onPause: () => {
        V(this, we, Se).call(this, { type: "pause" });
      },
      onContinue: () => {
        V(this, we, Se).call(this, { type: "continue" });
      },
      retry: u.options.retry,
      retryDelay: u.options.retryDelay,
      networkMode: u.options.networkMode
    })), F(this, Fe, y(this, de).promise), y(this, Fe);
  }
}, Ge = new WeakMap(), Ve = new WeakMap(), he = new WeakMap(), Fe = new WeakMap(), de = new WeakMap(), Z = new WeakMap(), mt = new WeakMap(), ze = new WeakMap(), Xe = new WeakSet(), Rt = function(t) {
  this.options = { ...y(this, mt), ...t }, this.updateGcTime(this.options.gcTime);
}, we = new WeakSet(), Se = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: t.meta ?? null,
          fetchStatus: pr(this.options.networkMode) ? "fetching" : "paused",
          ...!n.dataUpdatedAt && {
            error: null,
            status: "pending"
          }
        };
      case "success":
        return {
          ...n,
          data: t.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const s = t.error;
        return Xt(s) && s.revert && y(this, Ve) ? { ...y(this, Ve), fetchStatus: "idle" } : {
          ...n,
          error: s,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: s,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...t.state
        };
    }
  };
  this.state = r(this.state), ie.batch(() => {
    y(this, Z).forEach((n) => {
      n.onQueryUpdate();
    }), y(this, he).notify({ query: this, type: "updated", action: t });
  });
}, Jr);
function Fs(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = typeof t < "u", n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var be, Gr, Ms = (Gr = class extends It {
  constructor(t = {}) {
    super();
    B(this, be, void 0);
    this.config = t, F(this, be, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const s = r.queryKey, i = r.queryHash ?? dr(s, r);
    let o = this.get(i);
    return o || (o = new Ns({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(t) {
    y(this, be).has(t.queryHash) || (y(this, be).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = y(this, be).get(t.queryHash);
    r && (t.destroy(), r === t && y(this, be).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return y(this, be).get(t);
  }
  getAll() {
    return [...y(this, be).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Rr(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => Rr(t, n)) : r;
  }
  notify(t) {
    ie.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, be = new WeakMap(), Gr), Ee, yt, ue, Ye, _e, Pe, Vr, Ds = (Vr = class extends pn {
  constructor(t) {
    super();
    B(this, _e);
    B(this, Ee, void 0);
    B(this, yt, void 0);
    B(this, ue, void 0);
    B(this, Ye, void 0);
    this.mutationId = t.mutationId, F(this, yt, t.defaultOptions), F(this, ue, t.mutationCache), F(this, Ee, []), this.state = t.state || js(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...y(this, yt), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    y(this, Ee).includes(t) || (y(this, Ee).push(t), this.clearGcTimeout(), y(this, ue).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    F(this, Ee, y(this, Ee).filter((r) => r !== t)), this.scheduleGc(), y(this, ue).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    y(this, Ee).length || (this.state.status === "pending" ? this.scheduleGc() : y(this, ue).remove(this));
  }
  continue() {
    var t;
    return ((t = y(this, Ye)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, i, o, u, w, _, l, p, A, v, m, T, b, O, L, M, P, D, z, W;
    const r = () => (F(this, Ye, dn({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (I, U) => {
        V(this, _e, Pe).call(this, { type: "failed", failureCount: I, error: U });
      },
      onPause: () => {
        V(this, _e, Pe).call(this, { type: "pause" });
      },
      onContinue: () => {
        V(this, _e, Pe).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), y(this, Ye).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        V(this, _e, Pe).call(this, { type: "pending", variables: t }), await ((i = (s = y(this, ue).config).onMutate) == null ? void 0 : i.call(
          s,
          t,
          this
        ));
        const U = await ((u = (o = this.options).onMutate) == null ? void 0 : u.call(o, t));
        U !== this.state.context && V(this, _e, Pe).call(this, {
          type: "pending",
          context: U,
          variables: t
        });
      }
      const I = await r();
      return await ((_ = (w = y(this, ue).config).onSuccess) == null ? void 0 : _.call(
        w,
        I,
        t,
        this.state.context,
        this
      )), await ((p = (l = this.options).onSuccess) == null ? void 0 : p.call(l, I, t, this.state.context)), await ((v = (A = y(this, ue).config).onSettled) == null ? void 0 : v.call(
        A,
        I,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((T = (m = this.options).onSettled) == null ? void 0 : T.call(m, I, null, t, this.state.context)), V(this, _e, Pe).call(this, { type: "success", data: I }), I;
    } catch (I) {
      try {
        throw await ((O = (b = y(this, ue).config).onError) == null ? void 0 : O.call(
          b,
          I,
          t,
          this.state.context,
          this
        )), await ((M = (L = this.options).onError) == null ? void 0 : M.call(
          L,
          I,
          t,
          this.state.context
        )), await ((D = (P = y(this, ue).config).onSettled) == null ? void 0 : D.call(
          P,
          void 0,
          I,
          this.state.variables,
          this.state.context,
          this
        )), await ((W = (z = this.options).onSettled) == null ? void 0 : W.call(
          z,
          void 0,
          I,
          t,
          this.state.context
        )), I;
      } finally {
        V(this, _e, Pe).call(this, { type: "error", error: I });
      }
    }
  }
}, Ee = new WeakMap(), yt = new WeakMap(), ue = new WeakMap(), Ye = new WeakMap(), _e = new WeakSet(), Pe = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: !pr(this.options.networkMode),
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: t.error,
          failureCount: n.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), ie.batch(() => {
    y(this, Ee).forEach((n) => {
      n.onMutationUpdate(t);
    }), y(this, ue).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Vr);
function js() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var pe, vt, qe, Xr, Is = (Xr = class extends It {
  constructor(t = {}) {
    super();
    B(this, pe, void 0);
    B(this, vt, void 0);
    B(this, qe, void 0);
    this.config = t, F(this, pe, []), F(this, vt, 0);
  }
  build(t, r, n) {
    const s = new Ds({
      mutationCache: this,
      mutationId: ++Et(this, vt)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(t) {
    y(this, pe).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    F(this, pe, y(this, pe).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    ie.batch(() => {
      y(this, pe).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return y(this, pe);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return y(this, pe).find(
      (n) => Sr(r, n)
    );
  }
  findAll(t = {}) {
    return y(this, pe).filter(
      (r) => Sr(t, r)
    );
  }
  notify(t) {
    ie.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    return F(this, qe, (y(this, qe) ?? Promise.resolve()).then(() => {
      const t = y(this, pe).filter((r) => r.state.isPaused);
      return ie.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(ve)),
          Promise.resolve()
        )
      );
    }).then(() => {
      F(this, qe, void 0);
    })), y(this, qe);
  }
}, pe = new WeakMap(), vt = new WeakMap(), qe = new WeakMap(), Xr);
function ks(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var m, T, b, O, L;
        const s = t.options, i = (b = (T = (m = t.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : T.fetchMore) == null ? void 0 : b.direction, o = ((O = t.state.data) == null ? void 0 : O.pages) || [], u = ((L = t.state.data) == null ? void 0 : L.pageParams) || [], w = { pages: [], pageParams: [] };
        let _ = !1;
        const l = (M) => {
          Object.defineProperty(M, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? _ = !0 : t.signal.addEventListener("abort", () => {
              _ = !0;
            }), t.signal)
          });
        }, p = t.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), A = async (M, P, D) => {
          if (_)
            return Promise.reject();
          if (P == null && M.pages.length)
            return Promise.resolve(M);
          const z = {
            queryKey: t.queryKey,
            pageParam: P,
            direction: D ? "backward" : "forward",
            meta: t.options.meta
          };
          l(z);
          const W = await p(
            z
          ), { maxPages: I } = t.options, U = D ? Cs : Ss;
          return {
            pages: U(M.pages, W, I),
            pageParams: U(M.pageParams, P, I)
          };
        };
        let v;
        if (i && o.length) {
          const M = i === "backward", P = M ? Us : Pr, D = {
            pages: o,
            pageParams: u
          }, z = P(s, D);
          v = await A(D, z, M);
        } else {
          v = await A(
            w,
            u[0] ?? s.initialPageParam
          );
          const M = e ?? o.length;
          for (let P = 1; P < M; P++) {
            const D = Pr(s, v);
            v = await A(v, D);
          }
        }
        return v;
      };
      t.options.persister ? t.fetchFn = () => {
        var s, i;
        return (i = (s = t.options).persister) == null ? void 0 : i.call(
          s,
          n,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = n;
    }
  };
}
function Pr(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function Us(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var Y, Me, De, Ze, et, je, tt, rt, Yr, Bs = (Yr = class {
  constructor(e = {}) {
    B(this, Y, void 0);
    B(this, Me, void 0);
    B(this, De, void 0);
    B(this, Ze, void 0);
    B(this, et, void 0);
    B(this, je, void 0);
    B(this, tt, void 0);
    B(this, rt, void 0);
    F(this, Y, e.queryCache || new Ms()), F(this, Me, e.mutationCache || new Is()), F(this, De, e.defaultOptions || {}), F(this, Ze, /* @__PURE__ */ new Map()), F(this, et, /* @__PURE__ */ new Map()), F(this, je, 0);
  }
  mount() {
    Et(this, je)._++, y(this, je) === 1 && (F(this, tt, ir.subscribe(() => {
      ir.isFocused() && (this.resumePausedMutations(), y(this, Y).onFocus());
    })), F(this, rt, Pt.subscribe(() => {
      Pt.isOnline() && (this.resumePausedMutations(), y(this, Y).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Et(this, je)._--, y(this, je) === 0 && ((e = y(this, tt)) == null || e.call(this), F(this, tt, void 0), (t = y(this, rt)) == null || t.call(this), F(this, rt, void 0));
  }
  isFetching(e) {
    return y(this, Y).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return y(this, Me).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var t;
    return (t = y(this, Y).find({ queryKey: e })) == null ? void 0 : t.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    return t !== void 0 ? Promise.resolve(t) : this.fetchQuery(e);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({ queryKey: t, state: r }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = y(this, Y).find({ queryKey: e }), s = n == null ? void 0 : n.state.data, i = _s(t, s);
    if (typeof i > "u")
      return;
    const o = this.defaultQueryOptions({ queryKey: e });
    return y(this, Y).build(this, o).setData(i, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return ie.batch(
      () => this.getQueryCache().findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var t;
    return (t = y(this, Y).find({ queryKey: e })) == null ? void 0 : t.state;
  }
  removeQueries(e) {
    const t = y(this, Y);
    ie.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = y(this, Y), n = {
      type: "active",
      ...e
    };
    return ie.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = ie.batch(
      () => y(this, Y).findAll(e).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(ve).catch(ve);
  }
  invalidateQueries(e = {}, t = {}) {
    return ie.batch(() => {
      if (y(this, Y).findAll(e).forEach((n) => {
        n.invalidate();
      }), e.refetchType === "none")
        return Promise.resolve();
      const r = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(r, t);
    });
  }
  refetchQueries(e = {}, t) {
    const r = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }, n = ie.batch(
      () => y(this, Y).findAll(e).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(ve)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(ve);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = y(this, Y).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ve).catch(ve);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = ks(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ve).catch(ve);
  }
  resumePausedMutations() {
    return y(this, Me).resumePausedMutations();
  }
  getQueryCache() {
    return y(this, Y);
  }
  getMutationCache() {
    return y(this, Me);
  }
  getDefaultOptions() {
    return y(this, De);
  }
  setDefaultOptions(e) {
    F(this, De, e);
  }
  setQueryDefaults(e, t) {
    y(this, Ze).set(ht(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...y(this, Ze).values()];
    let r = {};
    return t.forEach((n) => {
      dt(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    y(this, et).set(ht(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...y(this, et).values()];
    let r = {};
    return t.forEach((n) => {
      dt(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const t = {
      ...y(this, De).queries,
      ...(e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = dr(
      t.queryKey,
      t
    )), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...y(this, De).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    y(this, Y).clear(), y(this, Me).clear();
  }
}, Y = new WeakMap(), Me = new WeakMap(), De = new WeakMap(), Ze = new WeakMap(), et = new WeakMap(), je = new WeakMap(), tt = new WeakMap(), rt = new WeakMap(), Yr), mn = k.createContext(
  void 0
), Io = (e) => {
  const t = k.useContext(mn);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, zs = ({
  client: e,
  children: t
}) => (k.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ k.createElement(mn.Provider, { value: e }, t));
function yn(e, t) {
  window.dispatchEvent(new StorageEvent("storage", { key: e, newValue: t }));
}
function ko(e, t) {
  const [r, n] = k.useState(e);
  return k.useEffect(() => {
    const s = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), r;
}
const Lr = (e, t) => {
  const r = JSON.stringify(t);
  window.localStorage.setItem(e, r), yn(e, r);
}, qs = (e) => {
  window.localStorage.removeItem(e), yn(e, null);
}, Nr = (e) => window.localStorage.getItem(e), Hs = (e) => (window.addEventListener("storage", e), () => window.removeEventListener("storage", e)), Qs = () => {
  throw Error("useLocalStorage is a client-only hook");
};
function $s(e, t) {
  const r = () => Nr(e), n = k.useSyncExternalStore(
    Hs,
    r,
    Qs
  ), s = k.useCallback(
    (i) => {
      try {
        const o = typeof i == "function" ? i(JSON.parse(n)) : i;
        o == null ? qs(e) : Lr(e, o);
      } catch (o) {
        console.warn(o);
      }
    },
    [e, n]
  );
  return k.useEffect(() => {
    Nr(e) === null && typeof t < "u" && Lr(e, t);
  }, [e, t]), [n ? JSON.parse(n) : t, s];
}
function Uo() {
  const [e, t] = k.useState({
    width: null,
    height: null
  });
  return k.useLayoutEffect(() => {
    const r = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return r(), window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}
const vn = () => $s("app-state-session"), Ks = () => {
  const [e, t] = vn();
  return () => t((r) => r ? {
    ...r,
    locked: !0
  } : void 0);
};
function wn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ws } = Object.prototype, { getPrototypeOf: mr } = Object, Ut = ((e) => (t) => {
  const r = Ws.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => Ut(t) === e), Bt = (e) => (t) => typeof t === e, { isArray: it } = Array, pt = Bt("undefined");
function Js(e) {
  return e !== null && !pt(e) && e.constructor !== null && !pt(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gn = Oe("ArrayBuffer");
function Gs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gn(e.buffer), t;
}
const Vs = Bt("string"), ye = Bt("function"), bn = Bt("number"), zt = (e) => e !== null && typeof e == "object", Xs = (e) => e === !0 || e === !1, St = (e) => {
  if (Ut(e) !== "object")
    return !1;
  const t = mr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ys = Oe("Date"), Zs = Oe("File"), ei = Oe("Blob"), ti = Oe("FileList"), ri = (e) => zt(e) && ye(e.pipe), ni = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = Ut(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, si = Oe("URLSearchParams"), ii = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), it(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let u;
    for (n = 0; n < o; n++)
      u = i[n], t.call(null, e[u], u, e);
  }
}
function En(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const _n = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Tn = (e) => !pt(e) && e !== _n;
function or() {
  const { caseless: e } = Tn(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && En(t, s) || s;
    St(t[i]) && St(n) ? t[i] = or(t[i], n) : St(n) ? t[i] = or({}, n) : it(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && wt(arguments[n], r);
  return t;
}
const oi = (e, t, r, { allOwnKeys: n } = {}) => (wt(t, (s, i) => {
  r && ye(s) ? e[i] = wn(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), ai = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ci = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, ui = (e, t, r, n) => {
  let s, i, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = r !== !1 && mr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, li = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, fi = (e) => {
  if (!e)
    return null;
  if (it(e))
    return e;
  let t = e.length;
  if (!bn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, hi = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && mr(Uint8Array)), di = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, pi = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, mi = Oe("HTMLFormElement"), yi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Fr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), vi = Oe("RegExp"), On = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  wt(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, wi = (e) => {
  On(e, (t, r) => {
    if (ye(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ye(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, gi = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return it(e) ? n(e) : n(String(e).split(t)), r;
}, bi = () => {
}, Ei = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Yt = "abcdefghijklmnopqrstuvwxyz", Mr = "0123456789", Rn = {
  DIGIT: Mr,
  ALPHA: Yt,
  ALPHA_DIGIT: Yt + Yt.toUpperCase() + Mr
}, _i = (e = 16, t = Rn.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Ti(e) {
  return !!(e && ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Oi = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (zt(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = it(n) ? [] : {};
        return wt(n, (o, u) => {
          const w = r(o, s + 1);
          !pt(w) && (i[u] = w);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ri = Oe("AsyncFunction"), Si = (e) => e && (zt(e) || ye(e)) && ye(e.then) && ye(e.catch), E = {
  isArray: it,
  isArrayBuffer: gn,
  isBuffer: Js,
  isFormData: ni,
  isArrayBufferView: Gs,
  isString: Vs,
  isNumber: bn,
  isBoolean: Xs,
  isObject: zt,
  isPlainObject: St,
  isUndefined: pt,
  isDate: Ys,
  isFile: Zs,
  isBlob: ei,
  isRegExp: vi,
  isFunction: ye,
  isStream: ri,
  isURLSearchParams: si,
  isTypedArray: hi,
  isFileList: ti,
  forEach: wt,
  merge: or,
  extend: oi,
  trim: ii,
  stripBOM: ai,
  inherits: ci,
  toFlatObject: ui,
  kindOf: Ut,
  kindOfTest: Oe,
  endsWith: li,
  toArray: fi,
  forEachEntry: di,
  matchAll: pi,
  isHTMLForm: mi,
  hasOwnProperty: Fr,
  hasOwnProp: Fr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: On,
  freezeMethods: wi,
  toObjectSet: gi,
  toCamelCase: yi,
  noop: bi,
  toFiniteNumber: Ei,
  findKey: En,
  global: _n,
  isContextDefined: Tn,
  ALPHABET: Rn,
  generateString: _i,
  isSpecCompliantForm: Ti,
  toJSONObject: Oi,
  isAsyncFn: Ri,
  isThenable: Si
};
function H(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
E.inherits(H, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Sn = H.prototype, Cn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Cn[e] = { value: e };
});
Object.defineProperties(H, Cn);
Object.defineProperty(Sn, "isAxiosError", { value: !0 });
H.from = (e, t, r, n, s, i) => {
  const o = Object.create(Sn);
  return E.toFlatObject(e, o, function(w) {
    return w !== Error.prototype;
  }, (u) => u !== "isAxiosError"), H.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Ci = null;
function ar(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function xn(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dr(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = xn(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function xi(e) {
  return E.isArray(e) && !e.some(ar);
}
const Ai = E.toFlatObject(E, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qt(e, t, r) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = E.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(T, b) {
    return !E.isUndefined(b[T]);
  });
  const n = r.metaTokens, s = r.visitor || l, i = r.dots, o = r.indexes, w = (r.Blob || typeof Blob < "u" && Blob) && E.isSpecCompliantForm(t);
  if (!E.isFunction(s))
    throw new TypeError("visitor must be a function");
  function _(m) {
    if (m === null)
      return "";
    if (E.isDate(m))
      return m.toISOString();
    if (!w && E.isBlob(m))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(m) || E.isTypedArray(m) ? w && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function l(m, T, b) {
    let O = m;
    if (m && !b && typeof m == "object") {
      if (E.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), m = JSON.stringify(m);
      else if (E.isArray(m) && xi(m) || (E.isFileList(m) || E.endsWith(T, "[]")) && (O = E.toArray(m)))
        return T = xn(T), O.forEach(function(M, P) {
          !(E.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Dr([T], P, i) : o === null ? T : T + "[]",
            _(M)
          );
        }), !1;
    }
    return ar(m) ? !0 : (t.append(Dr(b, T, i), _(m)), !1);
  }
  const p = [], A = Object.assign(Ai, {
    defaultVisitor: l,
    convertValue: _,
    isVisitable: ar
  });
  function v(m, T) {
    if (!E.isUndefined(m)) {
      if (p.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      p.push(m), E.forEach(m, function(O, L) {
        (!(E.isUndefined(O) || O === null) && s.call(
          t,
          O,
          E.isString(L) ? L.trim() : L,
          T,
          A
        )) === !0 && v(O, T ? T.concat(L) : [L]);
      }), p.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function jr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function yr(e, t) {
  this._pairs = [], e && qt(e, this, t);
}
const An = yr.prototype;
An.append = function(t, r) {
  this._pairs.push([t, r]);
};
An.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, jr);
  } : jr;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Pi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Pn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Pi, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = E.isURLSearchParams(t) ? t.toString() : new yr(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Li {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    E.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Ir = Li, Ln = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ni = typeof URLSearchParams < "u" ? URLSearchParams : yr, Fi = typeof FormData < "u" ? FormData : null, Mi = typeof Blob < "u" ? Blob : null, Di = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ni,
    FormData: Fi,
    Blob: Mi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Nn = typeof window < "u" && typeof document < "u", ji = ((e) => Nn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Ii = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Nn,
  hasStandardBrowserEnv: ji,
  hasStandardBrowserWebWorkerEnv: Ii
}, Symbol.toStringTag, { value: "Module" })), Te = {
  ...ki,
  ...Di
};
function Ui(e, t) {
  return qt(e, new Te.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return Te.isNode && E.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Bi(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function zi(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Fn(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    const u = Number.isFinite(+o), w = i >= r.length;
    return o = !o && E.isArray(s) ? s.length : o, w ? (E.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !E.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && E.isArray(s[o]) && (s[o] = zi(s[o])), !u);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const r = {};
    return E.forEachEntry(e, (n, s) => {
      t(Bi(n), s, r, 0);
    }), r;
  }
  return null;
}
function qi(e, t, r) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const vr = {
  transitional: Ln,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = E.isObject(t);
    if (i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))
      return s && s ? JSON.stringify(Fn(t)) : t;
    if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ui(t, this.formSerializer).toString();
      if ((u = E.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const w = this.env && this.env.FormData;
        return qt(
          u ? { "files[]": t } : t,
          w && new w(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), qi(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || vr.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && E.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? H.from(u, H.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Te.classes.FormData,
    Blob: Te.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  vr.headers[e] = {};
});
const wr = vr, Hi = E.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Qi = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && Hi[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, kr = Symbol("internals");
function at(e) {
  return e && String(e).trim().toLowerCase();
}
function Ct(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Ct) : String(e);
}
function $i(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Ki = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Zt(e, t, r, n, s) {
  if (E.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!E.isString(t)) {
    if (E.isString(n))
      return t.indexOf(n) !== -1;
    if (E.isRegExp(n))
      return n.test(t);
  }
}
function Wi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ji(e, t) {
  const r = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class Ht {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(u, w, _) {
      const l = at(w);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = E.findKey(s, l);
      (!p || s[p] === void 0 || _ === !0 || _ === void 0 && s[p] !== !1) && (s[p || w] = Ct(u));
    }
    const o = (u, w) => E.forEach(u, (_, l) => i(_, l, w));
    return E.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : E.isString(t) && (t = t.trim()) && !Ki(t) ? o(Qi(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = at(t), t) {
      const n = E.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return $i(s);
        if (E.isFunction(r))
          return r.call(this, s, n);
        if (E.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = at(t), t) {
      const n = E.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Zt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = at(o), o) {
        const u = E.findKey(n, o);
        u && (!r || Zt(n, n[u], u, r)) && (delete n[u], s = !0);
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Zt(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return E.forEach(this, (s, i) => {
      const o = E.findKey(n, i);
      if (o) {
        r[o] = Ct(s), delete r[i];
        return;
      }
      const u = t ? Wi(i) : String(i).trim();
      u !== i && delete r[i], r[u] = Ct(s), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && E.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[kr] = this[kr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const u = at(o);
      n[u] || (Ji(s, o), n[u] = !0);
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Ht.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
E.freezeMethods(Ht);
const xe = Ht;
function er(e, t) {
  const r = this || wr, n = t || r, s = xe.from(n.headers);
  let i = n.data;
  return E.forEach(e, function(u) {
    i = u.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Mn(e) {
  return !!(e && e.__CANCEL__);
}
function gt(e, t, r) {
  H.call(this, e ?? "canceled", H.ERR_CANCELED, t, r), this.name = "CanceledError";
}
E.inherits(gt, H, {
  __CANCEL__: !0
});
function Gi(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new H(
    "Request failed with status code " + r.status,
    [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Vi = Te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, s, i, o, u) {
        const w = [];
        w.push(r + "=" + encodeURIComponent(n)), E.isNumber(s) && w.push("expires=" + new Date(s).toGMTString()), E.isString(i) && w.push("path=" + i), E.isString(o) && w.push("domain=" + o), u === !0 && w.push("secure"), document.cookie = w.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Xi(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Yi(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Dn(e, t) {
  return e && !Xi(t) ? Yi(e, t) : t;
}
const Zi = Te.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(i) {
      let o = i;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(o) {
      const u = E.isString(o) ? s(o) : o;
      return u.protocol === n.protocol && u.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function eo(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function to(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(w) {
    const _ = Date.now(), l = n[i];
    o || (o = _), r[s] = w, n[s] = _;
    let p = i, A = 0;
    for (; p !== s; )
      A += r[p++], p = p % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), _ - o < t)
      return;
    const v = l && _ - l;
    return v ? Math.round(A * 1e3 / v) : void 0;
  };
}
function Ur(e, t) {
  let r = 0;
  const n = to(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, u = i - r, w = n(u), _ = i <= o;
    r = i;
    const l = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: u,
      rate: w || void 0,
      estimated: w && o && _ ? (o - i) / w : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const ro = typeof XMLHttpRequest < "u", no = ro && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = xe.from(e.headers).normalize(), o = e.responseType;
    let u;
    function w() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let _;
    if (E.isFormData(s)) {
      if (Te.hasStandardBrowserEnv || Te.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((_ = i.getContentType()) !== !1) {
        const [m, ...T] = _ ? _.split(";").map((b) => b.trim()).filter(Boolean) : [];
        i.setContentType([m || "multipart/form-data", ...T].join("; "));
      }
    }
    let l = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(m + ":" + T));
    }
    const p = Dn(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), Pn(p, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function A() {
      if (!l)
        return;
      const m = xe.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), b = {
        data: !o || o === "text" || o === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: m,
        config: e,
        request: l
      };
      Gi(function(L) {
        r(L), w();
      }, function(L) {
        n(L), w();
      }, b), l = null;
    }
    if ("onloadend" in l ? l.onloadend = A : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, l.onabort = function() {
      l && (n(new H("Request aborted", H.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      n(new H("Network Error", H.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let T = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || Ln;
      e.timeoutErrorMessage && (T = e.timeoutErrorMessage), n(new H(
        T,
        b.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
        e,
        l
      )), l = null;
    }, Te.hasStandardBrowserEnv) {
      const m = Zi(p) && e.xsrfCookieName && Vi.read(e.xsrfCookieName);
      m && i.set(e.xsrfHeaderName, m);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in l && E.forEach(i.toJSON(), function(T, b) {
      l.setRequestHeader(b, T);
    }), E.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), o && o !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", Ur(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Ur(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (m) => {
      l && (n(!m || m.type ? new gt(null, e, l) : m), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const v = eo(p);
    if (v && Te.protocols.indexOf(v) === -1) {
      n(new H("Unsupported protocol " + v + ":", H.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(s || null);
  });
}, cr = {
  http: Ci,
  xhr: no
};
E.forEach(cr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Br = (e) => `- ${e}`, so = (e) => E.isFunction(e) || e === null || e === !1, jn = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !so(r) && (n = cr[(o = String(r)).toLowerCase()], n === void 0))
        throw new H(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([u, w]) => `adapter ${u} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Br).join(`
`) : " " + Br(i[0]) : "as no adapter specified";
      throw new H(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: cr
};
function tr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new gt(null, e);
}
function zr(e) {
  return tr(e), e.headers = xe.from(e.headers), e.data = er.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), jn.getAdapter(e.adapter || wr.adapter)(e).then(function(n) {
    return tr(e), n.data = er.call(
      e,
      e.transformResponse,
      n
    ), n.headers = xe.from(n.headers), n;
  }, function(n) {
    return Mn(n) || (tr(e), n && n.response && (n.response.data = er.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = xe.from(n.response.headers))), Promise.reject(n);
  });
}
const qr = (e) => e instanceof xe ? e.toJSON() : e;
function st(e, t) {
  t = t || {};
  const r = {};
  function n(_, l, p) {
    return E.isPlainObject(_) && E.isPlainObject(l) ? E.merge.call({ caseless: p }, _, l) : E.isPlainObject(l) ? E.merge({}, l) : E.isArray(l) ? l.slice() : l;
  }
  function s(_, l, p) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(_))
        return n(void 0, _, p);
    } else
      return n(_, l, p);
  }
  function i(_, l) {
    if (!E.isUndefined(l))
      return n(void 0, l);
  }
  function o(_, l) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(_))
        return n(void 0, _);
    } else
      return n(void 0, l);
  }
  function u(_, l, p) {
    if (p in t)
      return n(_, l);
    if (p in e)
      return n(void 0, _);
  }
  const w = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: u,
    headers: (_, l) => s(qr(_), qr(l), !0)
  };
  return E.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const p = w[l] || s, A = p(e[l], t[l], l);
    E.isUndefined(A) && p !== u || (r[l] = A);
  }), r;
}
const In = "1.6.1", gr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  gr[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Hr = {};
gr.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + In + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, u) => {
    if (t === !1)
      throw new H(
        s(o, " has been removed" + (r ? " in " + r : "")),
        H.ERR_DEPRECATED
      );
    return r && !Hr[o] && (Hr[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, u) : !0;
  };
};
function io(e, t, r) {
  if (typeof e != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const u = e[i], w = u === void 0 || o(u, i, e);
      if (w !== !0)
        throw new H("option " + i + " must be " + w, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new H("Unknown option " + i, H.ERR_BAD_OPTION);
  }
}
const ur = {
  assertOptions: io,
  validators: gr
}, Ae = ur.validators;
class Lt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ir(),
      response: new Ir()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = st(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && ur.assertOptions(n, {
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), s != null && (E.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ur.assertOptions(s, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && E.merge(
      i.common,
      i[r.method]
    );
    i && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), r.headers = xe.concat(o, i);
    const u = [];
    let w = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (w = w && T.synchronous, u.unshift(T.fulfilled, T.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function(T) {
      _.push(T.fulfilled, T.rejected);
    });
    let l, p = 0, A;
    if (!w) {
      const m = [zr.bind(this), void 0];
      for (m.unshift.apply(m, u), m.push.apply(m, _), A = m.length, l = Promise.resolve(r); p < A; )
        l = l.then(m[p++], m[p++]);
      return l;
    }
    A = u.length;
    let v = r;
    for (p = 0; p < A; ) {
      const m = u[p++], T = u[p++];
      try {
        v = m(v);
      } catch (b) {
        T.call(this, b);
        break;
      }
    }
    try {
      l = zr.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (p = 0, A = _.length; p < A; )
      l = l.then(_[p++], _[p++]);
    return l;
  }
  getUri(t) {
    t = st(this.defaults, t);
    const r = Dn(t.baseURL, t.url);
    return Pn(r, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function(t) {
  Lt.prototype[t] = function(r, n) {
    return this.request(st(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, u) {
      return this.request(st(u || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Lt.prototype[t] = r(), Lt.prototype[t + "Form"] = r(!0);
});
const xt = Lt;
class br {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((u) => {
        n.subscribe(u), i = u;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, t(function(i, o, u) {
      n.reason || (n.reason = new gt(i, o, u), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new br(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const oo = br;
function ao(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function co(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const lr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(lr).forEach(([e, t]) => {
  lr[t] = e;
});
const uo = lr;
function kn(e) {
  const t = new xt(e), r = wn(xt.prototype.request, t);
  return E.extend(r, xt.prototype, t, { allOwnKeys: !0 }), E.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return kn(st(e, s));
  }, r;
}
const X = kn(wr);
X.Axios = xt;
X.CanceledError = gt;
X.CancelToken = oo;
X.isCancel = Mn;
X.VERSION = In;
X.toFormData = qt;
X.AxiosError = H;
X.Cancel = X.CanceledError;
X.all = function(t) {
  return Promise.all(t);
};
X.spread = ao;
X.isAxiosError = co;
X.mergeConfig = st;
X.AxiosHeaders = xe;
X.formToJSON = (e) => Fn(E.isHTMLForm(e) ? new FormData(e) : e);
X.getAdapter = jn.getAdapter;
X.HttpStatusCode = uo;
X.default = X;
const Qr = X, Un = q.createContext(null), Bo = () => q.useContext(Un), lo = ({
  children: e,
  baseURL: t
}) => {
  const [r, n] = vn(), s = Ks();
  let i = null;
  const o = k.useMemo(() => {
    const u = Qr.create({
      baseURL: t,
      headers: {
        Authorization: r ? `Bearer ${r.access_token}` : void 0,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    return u.interceptors.response.use((w) => w, async (w) => {
      var l, p, A;
      const _ = (v) => u({
        ...w.config,
        headers: {
          ...w.config.headers,
          Authorization: `Bearer ${v}`
        }
      });
      if (r && !r.locked && ((l = w.response) == null ? void 0 : l.status) === 401)
        if (i) {
          const v = await i;
          if (v)
            return _(v);
        } else {
          i = new fo();
          try {
            const {
              data: {
                data: v
              }
            } = await Qr.post("/api/user/refresh", {
              refresh_token: r.refresh_token
            }, {
              baseURL: t,
              headers: {
                Authorization: `Bearer ${r.access_token}`,
                "X-Requested-With": "XMLHttpRequest"
              }
            });
            return n(v), i.resolve(v.access_token), _(v.access_token);
          } catch {
            i.resolve(null), K.warn("Сессия истекла", {
              toastId: "session-stale"
            }), s();
          } finally {
            i = null;
          }
        }
      throw ((p = w.response) == null ? void 0 : p.status) === 500 && K.error(/* @__PURE__ */ Mt("div", { children: [
        /* @__PURE__ */ J("div", { css: {
          fontWeight: "500"
        }, children: "Ошибка сервера" }),
        /* @__PURE__ */ J("div", { css: {
          padding: "0.25rem",
          fontSize: "0.75rem",
          lineHeight: "1rem"
        }, children: ((A = w.response.data) == null ? void 0 : A.message) || w.message })
      ] }), {
        toastId: "server-error",
        position: "top-right"
      }), w;
    }), u;
  }, [r == null ? void 0 : r.access_token]);
  return /* @__PURE__ */ J(Un.Provider, { value: {
    client: o
  }, children: e });
};
class fo {
  constructor() {
    bt(this, "internal");
    bt(this, "resolver");
    bt(this, "rejecter");
    this.internal = new Promise((t, r) => {
      this.resolver = t, this.rejecter = r;
    });
  }
  then(t, r) {
    return this.internal.then(t, r);
  }
  resolve(t) {
    this.resolver && this.resolver(t);
  }
}
var fr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "users", n = 640, s = 512, i = [], o = "f0c0", u = "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      s,
      i,
      o,
      u
    ]
  }, e.faUsers = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = s, e.ligatures = i, e.unicode = o, e.svgPathData = u, e.aliases = i;
})(fr);
const ho = [{
  id: "users",
  path: "/users",
  component: () => import("./UsersList-0828e7b0.js"),
  windowOptions: {
    icon: fr.faUsers,
    title: "Пользователи",
    width: 800
  },
  shortcut: {
    title: "Пользователи",
    icon: fr.faUsers,
    group: "fourth",
    order: 100
  }
  // notExposeToLibrary: true,
}];
var Bn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "code", n = 640, s = 512, i = [], o = "f121", u = "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      s,
      i,
      o,
      u
    ]
  }, e.faCode = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = s, e.ligatures = i, e.unicode = o, e.svgPathData = u, e.aliases = i;
})(Bn);
const po = [{
  id: "program-docs",
  path: "/program-docs",
  component: () => import("./ProgramDocsList-d2c4ac05.js"),
  windowOptions: {
    title: "Конструктор документов программ",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Конструктор документов программ",
    icon: Bn.faCode,
    color: "#ef4444",
    group: "general",
    order: 1e3
  }
}, {
  id: "program-docs-constructor",
  path: "/program-docs/constructor/:id",
  component: () => import("./ProgramConstructor-10610aa8.js"),
  windowOptions: {
    title: "Конструктор программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-docs-draft",
  path: "/program-docs/draft",
  component: () => import("./Draft-765451da.js"),
  windowOptions: {
    title: "Черновик программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-constructor-copy",
  path: "/program-docs/copy/:id",
  component: () => import("./CopyProgramForm-0325dec4.js"),
  windowOptions: {
    title: "Копирование программы",
    width: 700,
    height: 500
  }
}], zn = [...po, ...ho], qn = q.createContext(null), mo = () => {
  const e = q.useContext(qn);
  if (!e)
    throw new Error("useRouteContext must be used within a RouteContextProvider");
  return e;
}, yo = ({
  children: e,
  routes: t
}) => /* @__PURE__ */ J(qn.Provider, { value: {
  routes: t
}, children: e }), vo = new Bs({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    },
    mutations: {
      retry: !1
    }
  }
}), wo = Xn({
  palette: {
    primary: {
      50: "#f4f5fa",
      100: "#e5e6f4",
      200: "#d2d5eb",
      300: "#b2b8de",
      400: "#8d94cd",
      500: "#7275bf",
      600: "#5a58ad",
      700: "#5a54a1",
      800: "#4f4984",
      900: "#423e6a",
      950: "#2b2942"
    }
  }
}), go = ({
  children: e
}) => /* @__PURE__ */ J(Yn, { theme: wo, children: /* @__PURE__ */ J(lo, { children: /* @__PURE__ */ J(zs, { client: vo, children: /* @__PURE__ */ J(yo, { routes: zn, children: e }) }) }) }), bo = () => {
  const {
    routes: e
  } = mo();
  return e;
};
var Hn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = "fas", r = "circle-notch", n = 512, s = 512, i = [], o = "f1ce", u = "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z";
  e.definition = {
    prefix: t,
    iconName: r,
    icon: [
      n,
      s,
      i,
      o,
      u
    ]
  }, e.faCircleNotch = e.definition, e.prefix = t, e.iconName = r, e.width = n, e.height = s, e.ligatures = i, e.unicode = o, e.svgPathData = u, e.aliases = i;
})(Hn);
const Eo = ({
  children: e,
  spinning: t = !0
}) => t ? /* @__PURE__ */ Mt("div", { css: {
  position: "relative",
  height: "100%",
  width: "100%",
  cursor: "wait"
}, children: [
  /* @__PURE__ */ J("div", { css: {
    opacity: "0.3",
    "--tw-grayscale": "grayscale(100%)",
    filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  }, children: e }),
  t && /* @__PURE__ */ J("div", { css: {
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(229 231 235 / 0.3)"
  }, children: /* @__PURE__ */ J(es, { icon: Hn.faCircleNotch, css: [{
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, rn`
                font-size: 32px;
              `], spin: !0 }) })
] }) : e, _o = ({
  id: e
}) => {
  const t = bo(), r = k.useMemo(() => {
    const {
      component: n,
      ...s
    } = t.find((i) => i.id === e) || {};
    if (!n)
      throw new Error(`Route with id ${e} not found`);
    return {
      ...s,
      Component: k.lazy(() => n())
    };
  }, [e, t]);
  return /* @__PURE__ */ J(k.Suspense, { fallback: /* @__PURE__ */ J(Eo, {}), children: /* @__PURE__ */ J(r.Component, {}) });
}, Qn = q.createContext(null), zo = () => {
  const e = q.useContext(Qn);
  if (!e)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return e;
}, To = ({
  children: e,
  ...t
}) => {
  const [r, n] = q.useState();
  return /* @__PURE__ */ J(Qn.Provider, { value: {
    ...t,
    state: r,
    setState: n
  }, children: e });
}, Oo = ({
  el: e,
  match: t,
  window: r
}) => nn.createPortal(/* @__PURE__ */ J(To, { width: 0, height: 0, title: "", position: {
  x: 0,
  y: 0
}, maximized: !0, folded: !0, focused: !0, params: t.params, focus: () => r.focus(), blur: () => r.blur(), maximize: () => r.maximize(), minimize: () => r.restore(), fold: () => r.minimize(), close: () => r.close(), updatePosition: ({
  x: n,
  y: s
}) => r.showAt(n, s), setTitle: (n) => r.setTitle(n), setWidth: (n) => r.setWidth(n), setHeight: (n) => r.setHeight(n), children: /* @__PURE__ */ J(_o, { id: t.route.id }) }), e), Ro = ({
  eventEmitter: e
}) => {
  const [t, r] = q.useState([]);
  return q.useEffect(() => (e.on("add", (n, s, i) => {
    r((o) => [...o, {
      el: n,
      match: s,
      window: i
    }]);
  }), e.on("destroy", (n) => {
    r((s) => s.filter((i) => i.el !== n));
  }), () => {
    e.removeAllListeners("add"), e.removeAllListeners("destroy");
  }), [e]), /* @__PURE__ */ Mt(go, { children: [
    /* @__PURE__ */ J(Es, {}),
    t.map((n) => /* @__PURE__ */ J(Oo, { ...n }, n.match.route.id))
  ] });
};
var $n = { exports: {} };
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
(function(e, t) {
  (function(r) {
    var n = Object.hasOwnProperty, s = Array.isArray ? Array.isArray : function(c) {
      return Object.prototype.toString.call(c) === "[object Array]";
    }, i = 10, o = typeof process == "object" && typeof process.nextTick == "function", u = typeof Symbol == "function", w = typeof Reflect == "object", _ = typeof setImmediate == "function", l = _ ? setImmediate : setTimeout, p = u ? w && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(a) {
      var c = Object.getOwnPropertyNames(a);
      return c.push.apply(c, Object.getOwnPropertySymbols(a)), c;
    } : Object.keys;
    function A() {
      this._events = {}, this._conf && v.call(this, this._conf);
    }
    function v(a) {
      a && (this._conf = a, a.delimiter && (this.delimiter = a.delimiter), a.maxListeners !== r && (this._maxListeners = a.maxListeners), a.wildcard && (this.wildcard = a.wildcard), a.newListener && (this._newListener = a.newListener), a.removeListener && (this._removeListener = a.removeListener), a.verboseMemoryLeak && (this.verboseMemoryLeak = a.verboseMemoryLeak), a.ignoreErrors && (this.ignoreErrors = a.ignoreErrors), this.wildcard && (this.listenerTree = {}));
    }
    function m(a, c) {
      var f = "(node) warning: possible EventEmitter memory leak detected. " + a + " listeners added. Use emitter.setMaxListeners() to increase limit.";
      if (this.verboseMemoryLeak && (f += " Event name: " + c + "."), typeof process < "u" && process.emitWarning) {
        var h = new Error(f);
        h.name = "MaxListenersExceededWarning", h.emitter = this, h.count = a, process.emitWarning(h);
      } else
        console.error(f), console.trace && console.trace();
    }
    var T = function(a, c, f) {
      var h = arguments.length;
      switch (h) {
        case 0:
          return [];
        case 1:
          return [a];
        case 2:
          return [a, c];
        case 3:
          return [a, c, f];
        default:
          for (var d = new Array(h); h--; )
            d[h] = arguments[h];
          return d;
      }
    };
    function b(a, c) {
      for (var f = {}, h, d = a.length, g = c ? c.length : 0, R = 0; R < d; R++)
        h = a[R], f[h] = R < g ? c[R] : r;
      return f;
    }
    function O(a, c, f) {
      this._emitter = a, this._target = c, this._listeners = {}, this._listenersCount = 0;
      var h, d;
      if ((f.on || f.off) && (h = f.on, d = f.off), c.addEventListener ? (h = c.addEventListener, d = c.removeEventListener) : c.addListener ? (h = c.addListener, d = c.removeListener) : c.on && (h = c.on, d = c.off), !h && !d)
        throw Error("target does not implement any known event API");
      if (typeof h != "function")
        throw TypeError("on method must be a function");
      if (typeof d != "function")
        throw TypeError("off method must be a function");
      this._on = h, this._off = d;
      var g = a._observers;
      g ? g.push(this) : a._observers = [this];
    }
    Object.assign(O.prototype, {
      subscribe: function(a, c, f) {
        var h = this, d = this._target, g = this._emitter, R = this._listeners, x = function() {
          var S = T.apply(null, arguments), C = {
            data: S,
            name: c,
            original: a
          };
          if (f) {
            var N = f.call(d, C);
            N !== !1 && g.emit.apply(g, [C.name].concat(S));
            return;
          }
          g.emit.apply(g, [c].concat(S));
        };
        if (R[a])
          throw Error("Event '" + a + "' is already listening");
        this._listenersCount++, g._newListener && g._removeListener && !h._onNewListener ? (this._onNewListener = function(S) {
          S === c && R[a] === null && (R[a] = x, h._on.call(d, a, x));
        }, g.on("newListener", this._onNewListener), this._onRemoveListener = function(S) {
          S === c && !g.hasListeners(S) && R[a] && (R[a] = null, h._off.call(d, a, x));
        }, R[a] = null, g.on("removeListener", this._onRemoveListener)) : (R[a] = x, h._on.call(d, a, x));
      },
      unsubscribe: function(a) {
        var c = this, f = this._listeners, h = this._emitter, d, g, R = this._off, x = this._target, S;
        if (a && typeof a != "string")
          throw TypeError("event must be a string");
        function C() {
          c._onNewListener && (h.off("newListener", c._onNewListener), h.off("removeListener", c._onRemoveListener), c._onNewListener = null, c._onRemoveListener = null);
          var N = I.call(h, c);
          h._observers.splice(N, 1);
        }
        if (a) {
          if (d = f[a], !d)
            return;
          R.call(x, a, d), delete f[a], --this._listenersCount || C();
        } else {
          for (g = p(f), S = g.length; S-- > 0; )
            a = g[S], R.call(x, a, f[a]);
          this._listeners = {}, this._listenersCount = 0, C();
        }
      }
    });
    function L(a, c, f, h) {
      var d = Object.assign({}, c);
      if (!a)
        return d;
      if (typeof a != "object")
        throw TypeError("options must be an object");
      var g = Object.keys(a), R = g.length, x, S, C;
      function N(Q) {
        throw Error('Invalid "' + x + '" option value' + (Q ? ". Reason: " + Q : ""));
      }
      for (var ee = 0; ee < R; ee++) {
        if (x = g[ee], !h && !n.call(c, x))
          throw Error('Unknown "' + x + '" option');
        S = a[x], S !== r && (C = f[x], d[x] = C ? C(S, N) : S);
      }
      return d;
    }
    function M(a, c) {
      return (typeof a != "function" || !a.hasOwnProperty("prototype")) && c("value must be a constructor"), a;
    }
    function P(a) {
      var c = "value must be type of " + a.join("|"), f = a.length, h = a[0], d = a[1];
      return f === 1 ? function(g, R) {
        if (typeof g === h)
          return g;
        R(c);
      } : f === 2 ? function(g, R) {
        var x = typeof g;
        if (x === h || x === d)
          return g;
        R(c);
      } : function(g, R) {
        for (var x = typeof g, S = f; S-- > 0; )
          if (x === a[S])
            return g;
        R(c);
      };
    }
    var D = P(["function"]), z = P(["object", "function"]);
    function W(a, c, f) {
      var h, d, g = 0, R, x = new a(function(S, C, N) {
        f = L(f, {
          timeout: 0,
          overload: !1
        }, {
          timeout: function(G, se) {
            return G *= 1, (typeof G != "number" || G < 0 || !Number.isFinite(G)) && se("timeout must be a positive number"), G;
          }
        }), h = !f.overload && typeof a.prototype.cancel == "function" && typeof N == "function";
        function ee() {
          d && (d = null), g && (clearTimeout(g), g = 0);
        }
        var Q = function(G) {
          ee(), S(G);
        }, $ = function(G) {
          ee(), C(G);
        };
        h ? c(Q, $, N) : (d = [function(G) {
          $(G || Error("canceled"));
        }], c(Q, $, function(G) {
          if (R)
            throw Error("Unable to subscribe on cancel event asynchronously");
          if (typeof G != "function")
            throw TypeError("onCancel callback must be a function");
          d.push(G);
        }), R = !0), f.timeout > 0 && (g = setTimeout(function() {
          var G = Error("timeout");
          G.code = "ETIMEDOUT", g = 0, x.cancel(G), C(G);
        }, f.timeout));
      });
      return h || (x.cancel = function(S) {
        if (d) {
          for (var C = d.length, N = 1; N < C; N++)
            d[N](S);
          d[0](S), d = null;
        }
      }), x;
    }
    function I(a) {
      var c = this._observers;
      if (!c)
        return -1;
      for (var f = c.length, h = 0; h < f; h++)
        if (c[h]._target === a)
          return h;
      return -1;
    }
    function U(a, c, f, h, d) {
      if (!f)
        return null;
      if (h === 0) {
        var g = typeof c;
        if (g === "string") {
          var R, x, S = 0, C = 0, N = this.delimiter, ee = N.length;
          if ((x = c.indexOf(N)) !== -1) {
            R = new Array(5);
            do
              R[S++] = c.slice(C, x), C = x + ee;
            while ((x = c.indexOf(N, C)) !== -1);
            R[S++] = c.slice(C), c = R, d = S;
          } else
            c = [c], d = 1;
        } else
          g === "object" ? d = c.length : (c = [c], d = 1);
      }
      var Q = null, $, G, se, Qt, $t, ot = c[h], Kt = c[h + 1], Re, oe;
      if (h === d)
        f._listeners && (typeof f._listeners == "function" ? (a && a.push(f._listeners), Q = [f]) : (a && a.push.apply(a, f._listeners), Q = [f]));
      else if (ot === "*") {
        for (Re = p(f), x = Re.length; x-- > 0; )
          $ = Re[x], $ !== "_listeners" && (oe = U(a, c, f[$], h + 1, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else if (ot === "**") {
        for ($t = h + 1 === d || h + 2 === d && Kt === "*", $t && f._listeners && (Q = U(a, c, f, d, d)), Re = p(f), x = Re.length; x-- > 0; )
          $ = Re[x], $ !== "_listeners" && ($ === "*" || $ === "**" ? (f[$]._listeners && !$t && (oe = U(a, c, f[$], d, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe)), oe = U(a, c, f[$], h, d)) : $ === Kt ? oe = U(a, c, f[$], h + 2, d) : oe = U(a, c, f[$], h, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else
        f[ot] && (Q = U(a, c, f[ot], h + 1, d));
      if (G = f["*"], G && U(a, c, G, h + 1, d), se = f["**"], se)
        if (h < d)
          for (se._listeners && U(a, c, se, d, d), Re = p(se), x = Re.length; x-- > 0; )
            $ = Re[x], $ !== "_listeners" && ($ === Kt ? U(a, c, se[$], h + 2, d) : $ === ot ? U(a, c, se[$], h + 1, d) : (Qt = {}, Qt[$] = se[$], U(a, c, { "**": Qt }, h + 1, d)));
        else
          se._listeners ? U(a, c, se, d, d) : se["*"] && se["*"]._listeners && U(a, c, se["*"], d, d);
      return Q;
    }
    function le(a, c, f) {
      var h = 0, d = 0, g, R = this.delimiter, x = R.length, S;
      if (typeof a == "string")
        if ((g = a.indexOf(R)) !== -1) {
          S = new Array(5);
          do
            S[h++] = a.slice(d, g), d = g + x;
          while ((g = a.indexOf(R, d)) !== -1);
          S[h++] = a.slice(d);
        } else
          S = [a], h = 1;
      else
        S = a, h = a.length;
      if (h > 1) {
        for (g = 0; g + 1 < h; g++)
          if (S[g] === "**" && S[g + 1] === "**")
            return;
      }
      var C = this.listenerTree, N;
      for (g = 0; g < h; g++)
        if (N = S[g], C = C[N] || (C[N] = {}), g === h - 1)
          return C._listeners ? (typeof C._listeners == "function" && (C._listeners = [C._listeners]), f ? C._listeners.unshift(c) : C._listeners.push(c), !C._listeners.warned && this._maxListeners > 0 && C._listeners.length > this._maxListeners && (C._listeners.warned = !0, m.call(this, C._listeners.length, N))) : C._listeners = c, !0;
      return !0;
    }
    function ge(a, c, f, h) {
      for (var d = p(a), g = d.length, R, x, S, C = a._listeners, N; g-- > 0; )
        x = d[g], R = a[x], x === "_listeners" ? S = f : S = f ? f.concat(x) : [x], N = h || typeof x == "symbol", C && c.push(N ? S : S.join(this.delimiter)), typeof R == "object" && ge.call(this, R, c, S, N);
      return c;
    }
    function te(a) {
      for (var c = p(a), f = c.length, h, d, g; f-- > 0; )
        d = c[f], h = a[d], h && (g = !0, d !== "_listeners" && !te(h) && delete a[d]);
      return g;
    }
    function fe(a, c, f) {
      this.emitter = a, this.event = c, this.listener = f;
    }
    fe.prototype.off = function() {
      return this.emitter.off(this.event, this.listener), this;
    };
    function re(a, c, f) {
      if (f === !0)
        d = !0;
      else if (f === !1)
        h = !0;
      else {
        if (!f || typeof f != "object")
          throw TypeError("options should be an object or true");
        var h = f.async, d = f.promisify, g = f.nextTick, R = f.objectify;
      }
      if (h || g || d) {
        var x = c, S = c._origin || c;
        if (g && !o)
          throw Error("process.nextTick is not supported");
        d === r && (d = c.constructor.name === "AsyncFunction"), c = function() {
          var C = arguments, N = this, ee = this.event;
          return d ? g ? Promise.resolve() : new Promise(function(Q) {
            l(Q);
          }).then(function() {
            return N.event = ee, x.apply(N, C);
          }) : (g ? process.nextTick : l)(function() {
            N.event = ee, x.apply(N, C);
          });
        }, c._async = !0, c._origin = S;
      }
      return [c, R ? new fe(this, a, c) : this];
    }
    function j(a) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, v.call(this, a);
    }
    j.EventEmitter2 = j, j.prototype.listenTo = function(a, c, f) {
      if (typeof a != "object")
        throw TypeError("target musts be an object");
      var h = this;
      f = L(f, {
        on: r,
        off: r,
        reducers: r
      }, {
        on: D,
        off: D,
        reducers: z
      });
      function d(g) {
        if (typeof g != "object")
          throw TypeError("events must be an object");
        var R = f.reducers, x = I.call(h, a), S;
        x === -1 ? S = new O(h, a, f) : S = h._observers[x];
        for (var C = p(g), N = C.length, ee, Q = typeof R == "function", $ = 0; $ < N; $++)
          ee = C[$], S.subscribe(
            ee,
            g[ee] || ee,
            Q ? R : R && R[ee]
          );
      }
      return s(c) ? d(b(c)) : d(typeof c == "string" ? b(c.split(/\s+/)) : c), this;
    }, j.prototype.stopListeningTo = function(a, c) {
      var f = this._observers;
      if (!f)
        return !1;
      var h = f.length, d, g = !1;
      if (a && typeof a != "object")
        throw TypeError("target should be an object");
      for (; h-- > 0; )
        d = f[h], (!a || d._target === a) && (d.unsubscribe(c), g = !0);
      return g;
    }, j.prototype.delimiter = ".", j.prototype.setMaxListeners = function(a) {
      a !== r && (this._maxListeners = a, this._conf || (this._conf = {}), this._conf.maxListeners = a);
    }, j.prototype.getMaxListeners = function() {
      return this._maxListeners;
    }, j.prototype.event = "", j.prototype.once = function(a, c, f) {
      return this._once(a, c, !1, f);
    }, j.prototype.prependOnceListener = function(a, c, f) {
      return this._once(a, c, !0, f);
    }, j.prototype._once = function(a, c, f, h) {
      return this._many(a, 1, c, f, h);
    }, j.prototype.many = function(a, c, f, h) {
      return this._many(a, c, f, !1, h);
    }, j.prototype.prependMany = function(a, c, f, h) {
      return this._many(a, c, f, !0, h);
    }, j.prototype._many = function(a, c, f, h, d) {
      var g = this;
      if (typeof f != "function")
        throw new Error("many only accepts instances of Function");
      function R() {
        return --c === 0 && g.off(a, R), f.apply(this, arguments);
      }
      return R._origin = f, this._on(a, R, h, d);
    }, j.prototype.emit = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || A.call(this);
      var a = arguments[0], c, f = this.wildcard, h, d, g, R, x;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return !1;
      if (f && (c = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (d = a.length, u) {
          for (g = 0; g < d; g++)
            if (typeof a[g] == "symbol") {
              x = !0;
              break;
            }
        }
        x || (a = a.join(this.delimiter));
      }
      var S = arguments.length, C;
      if (this._all && this._all.length)
        for (C = this._all.slice(), g = 0, d = C.length; g < d; g++)
          switch (this.event = a, S) {
            case 1:
              C[g].call(this, a);
              break;
            case 2:
              C[g].call(this, a, arguments[1]);
              break;
            case 3:
              C[g].call(this, a, arguments[1], arguments[2]);
              break;
            default:
              C[g].apply(this, arguments);
          }
      if (f)
        C = [], U.call(this, C, c, this.listenerTree, 0, d);
      else if (C = this._events[a], typeof C == "function") {
        switch (this.event = a, S) {
          case 1:
            C.call(this);
            break;
          case 2:
            C.call(this, arguments[1]);
            break;
          case 3:
            C.call(this, arguments[1], arguments[2]);
            break;
          default:
            for (h = new Array(S - 1), R = 1; R < S; R++)
              h[R - 1] = arguments[R];
            C.apply(this, h);
        }
        return !0;
      } else
        C && (C = C.slice());
      if (C && C.length) {
        if (S > 3)
          for (h = new Array(S - 1), R = 1; R < S; R++)
            h[R - 1] = arguments[R];
        for (g = 0, d = C.length; g < d; g++)
          switch (this.event = a, S) {
            case 1:
              C[g].call(this);
              break;
            case 2:
              C[g].call(this, arguments[1]);
              break;
            case 3:
              C[g].call(this, arguments[1], arguments[2]);
              break;
            default:
              C[g].apply(this, h);
          }
        return !0;
      } else if (!this.ignoreErrors && !this._all && a === "error")
        throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all;
    }, j.prototype.emitAsync = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || A.call(this);
      var a = arguments[0], c = this.wildcard, f, h, d, g, R, x;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return Promise.resolve([!1]);
      if (c && (f = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (g = a.length, u) {
          for (R = 0; R < g; R++)
            if (typeof a[R] == "symbol") {
              h = !0;
              break;
            }
        }
        h || (a = a.join(this.delimiter));
      }
      var S = [], C = arguments.length, N;
      if (this._all)
        for (R = 0, g = this._all.length; R < g; R++)
          switch (this.event = a, C) {
            case 1:
              S.push(this._all[R].call(this, a));
              break;
            case 2:
              S.push(this._all[R].call(this, a, arguments[1]));
              break;
            case 3:
              S.push(this._all[R].call(this, a, arguments[1], arguments[2]));
              break;
            default:
              S.push(this._all[R].apply(this, arguments));
          }
      if (c ? (N = [], U.call(this, N, f, this.listenerTree, 0)) : N = this._events[a], typeof N == "function")
        switch (this.event = a, C) {
          case 1:
            S.push(N.call(this));
            break;
          case 2:
            S.push(N.call(this, arguments[1]));
            break;
          case 3:
            S.push(N.call(this, arguments[1], arguments[2]));
            break;
          default:
            for (d = new Array(C - 1), x = 1; x < C; x++)
              d[x - 1] = arguments[x];
            S.push(N.apply(this, d));
        }
      else if (N && N.length) {
        if (N = N.slice(), C > 3)
          for (d = new Array(C - 1), x = 1; x < C; x++)
            d[x - 1] = arguments[x];
        for (R = 0, g = N.length; R < g; R++)
          switch (this.event = a, C) {
            case 1:
              S.push(N[R].call(this));
              break;
            case 2:
              S.push(N[R].call(this, arguments[1]));
              break;
            case 3:
              S.push(N[R].call(this, arguments[1], arguments[2]));
              break;
            default:
              S.push(N[R].apply(this, d));
          }
      } else if (!this.ignoreErrors && !this._all && a === "error")
        return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
      return Promise.all(S);
    }, j.prototype.on = function(a, c, f) {
      return this._on(a, c, !1, f);
    }, j.prototype.prependListener = function(a, c, f) {
      return this._on(a, c, !0, f);
    }, j.prototype.onAny = function(a) {
      return this._onAny(a, !1);
    }, j.prototype.prependAny = function(a) {
      return this._onAny(a, !0);
    }, j.prototype.addListener = j.prototype.on, j.prototype._onAny = function(a, c) {
      if (typeof a != "function")
        throw new Error("onAny only accepts instances of Function");
      return this._all || (this._all = []), c ? this._all.unshift(a) : this._all.push(a), this;
    }, j.prototype._on = function(a, c, f, h) {
      if (typeof a == "function")
        return this._onAny(a, c), this;
      if (typeof c != "function")
        throw new Error("on only accepts instances of Function");
      this._events || A.call(this);
      var d = this, g;
      return h !== r && (g = re.call(this, a, c, h), c = g[0], d = g[1]), this._newListener && this.emit("newListener", a, c), this.wildcard ? (le.call(this, a, c, f), d) : (this._events[a] ? (typeof this._events[a] == "function" && (this._events[a] = [this._events[a]]), f ? this._events[a].unshift(c) : this._events[a].push(c), !this._events[a].warned && this._maxListeners > 0 && this._events[a].length > this._maxListeners && (this._events[a].warned = !0, m.call(this, this._events[a].length, a))) : this._events[a] = c, d);
    }, j.prototype.off = function(a, c) {
      if (typeof c != "function")
        throw new Error("removeListener only takes instances of Function");
      var f, h = [];
      if (this.wildcard) {
        var d = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        if (h = U.call(this, null, d, this.listenerTree, 0), !h)
          return this;
      } else {
        if (!this._events[a])
          return this;
        f = this._events[a], h.push({ _listeners: f });
      }
      for (var g = 0; g < h.length; g++) {
        var R = h[g];
        if (f = R._listeners, s(f)) {
          for (var x = -1, S = 0, C = f.length; S < C; S++)
            if (f[S] === c || f[S].listener && f[S].listener === c || f[S]._origin && f[S]._origin === c) {
              x = S;
              break;
            }
          if (x < 0)
            continue;
          return this.wildcard ? R._listeners.splice(x, 1) : this._events[a].splice(x, 1), f.length === 0 && (this.wildcard ? delete R._listeners : delete this._events[a]), this._removeListener && this.emit("removeListener", a, c), this;
        } else
          (f === c || f.listener && f.listener === c || f._origin && f._origin === c) && (this.wildcard ? delete R._listeners : delete this._events[a], this._removeListener && this.emit("removeListener", a, c));
      }
      return this.listenerTree && te(this.listenerTree), this;
    }, j.prototype.offAny = function(a) {
      var c = 0, f = 0, h;
      if (a && this._all && this._all.length > 0) {
        for (h = this._all, c = 0, f = h.length; c < f; c++)
          if (a === h[c])
            return h.splice(c, 1), this._removeListener && this.emit("removeListenerAny", a), this;
      } else {
        if (h = this._all, this._removeListener)
          for (c = 0, f = h.length; c < f; c++)
            this.emit("removeListenerAny", h[c]);
        this._all = [];
      }
      return this;
    }, j.prototype.removeListener = j.prototype.off, j.prototype.removeAllListeners = function(a) {
      if (a === r)
        return !this._events || A.call(this), this;
      if (this.wildcard) {
        var c = U.call(this, null, a, this.listenerTree, 0), f, h;
        if (!c)
          return this;
        for (h = 0; h < c.length; h++)
          f = c[h], f._listeners = null;
        this.listenerTree && te(this.listenerTree);
      } else
        this._events && (this._events[a] = null);
      return this;
    }, j.prototype.listeners = function(a) {
      var c = this._events, f, h, d, g, R;
      if (a === r) {
        if (this.wildcard)
          throw Error("event name required for wildcard emitter");
        if (!c)
          return [];
        for (f = p(c), g = f.length, d = []; g-- > 0; )
          h = c[f[g]], typeof h == "function" ? d.push(h) : d.push.apply(d, h);
        return d;
      } else {
        if (this.wildcard) {
          if (R = this.listenerTree, !R)
            return [];
          var x = [], S = typeof a == "string" ? a.split(this.delimiter) : a.slice();
          return U.call(this, x, S, R, 0), x;
        }
        return c ? (h = c[a], h ? typeof h == "function" ? [h] : h : []) : [];
      }
    }, j.prototype.eventNames = function(a) {
      var c = this._events;
      return this.wildcard ? ge.call(this, this.listenerTree, [], null, a) : c ? p(c) : [];
    }, j.prototype.listenerCount = function(a) {
      return this.listeners(a).length;
    }, j.prototype.hasListeners = function(a) {
      if (this.wildcard) {
        var c = [], f = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        return U.call(this, c, f, this.listenerTree, 0), c.length > 0;
      }
      var h = this._events, d = this._all;
      return !!(d && d.length || h && (a === r ? p(h).length : h[a]));
    }, j.prototype.listenersAny = function() {
      return this._all ? this._all : [];
    }, j.prototype.waitFor = function(a, c) {
      var f = this, h = typeof c;
      return h === "number" ? c = { timeout: c } : h === "function" && (c = { filter: c }), c = L(c, {
        timeout: 0,
        filter: r,
        handleError: !1,
        Promise,
        overload: !1
      }, {
        filter: D,
        Promise: M
      }), W(c.Promise, function(d, g, R) {
        function x() {
          var S = c.filter;
          if (!(S && !S.apply(f, arguments)))
            if (f.off(a, x), c.handleError) {
              var C = arguments[0];
              C ? g(C) : d(T.apply(null, arguments).slice(1));
            } else
              d(T.apply(null, arguments));
        }
        R(function() {
          f.off(a, x);
        }), f._on(a, x, !1);
      }, {
        timeout: c.timeout,
        overload: c.overload
      });
    };
    function ne(a, c, f) {
      f = L(f, {
        Promise,
        timeout: 0,
        overload: !1
      }, {
        Promise: M
      });
      var h = f.Promise;
      return W(h, function(d, g, R) {
        var x;
        if (typeof a.addEventListener == "function") {
          x = function() {
            d(T.apply(null, arguments));
          }, R(function() {
            a.removeEventListener(c, x);
          }), a.addEventListener(
            c,
            x,
            { once: !0 }
          );
          return;
        }
        var S = function() {
          C && a.removeListener("error", C), d(T.apply(null, arguments));
        }, C;
        c !== "error" && (C = function(N) {
          a.removeListener(c, S), g(N);
        }, a.once("error", C)), R(function() {
          C && a.removeListener("error", C), a.removeListener(c, S);
        }), a.once(c, S);
      }, {
        timeout: f.timeout,
        overload: f.overload
      });
    }
    var ce = j.prototype;
    Object.defineProperties(j, {
      defaultMaxListeners: {
        get: function() {
          return ce._maxListeners;
        },
        set: function(a) {
          if (typeof a != "number" || a < 0 || Number.isNaN(a))
            throw TypeError("n must be a non-negative number");
          ce._maxListeners = a;
        },
        enumerable: !0
      },
      once: {
        value: ne,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperties(ce, {
      _maxListeners: {
        value: i,
        writable: !0,
        configurable: !0
      },
      _observers: { value: null, writable: !0, configurable: !0 }
    }), typeof r == "function" && r.amd ? r(function() {
      return j;
    }) : e.exports = j;
  })();
})($n);
var So = $n.exports;
const Co = /* @__PURE__ */ Zn(So);
var nt, Ce, He, Nt, Kn, Ft, Wn;
class xo {
  constructor(t) {
    B(this, Nt);
    B(this, Ft);
    B(this, nt, []);
    B(this, Ce, void 0);
    B(this, He, void 0);
    F(this, nt, ls(t)), F(this, Ce, V(this, Nt, Kn).call(this)), F(this, He, new Co()), V(this, Ft, Wn).call(this);
  }
  match(t) {
    const r = fs(y(this, nt), t);
    if (r)
      return {
        windowOptions: r.route.windowOptions,
        renderComponent: (n, s) => y(this, He).emit("add", n, r, s),
        destroyComponent: (n) => y(this, He).emit("destroy", n)
      };
  }
  getShortcuts() {
    return y(this, nt).filter(([t]) => t.shortcut).map(([t]) => ({
      ...t.shortcut,
      route: t.path
    }));
  }
}
nt = new WeakMap(), Ce = new WeakMap(), He = new WeakMap(), Nt = new WeakSet(), Kn = function() {
  return F(this, Ce, document.createElement("div")), y(this, Ce).id = "react-injector", y(this, Ce);
}, Ft = new WeakSet(), Wn = function() {
  document.body.appendChild(y(this, Ce)), rr.createRoot(y(this, Ce)).render(/* @__PURE__ */ J(Ro, { eventEmitter: y(this, He) }));
};
const Ao = (e) => {
  const t = new xo(e.filter((r) => !r.notExposeToLibrary));
  window.__REACT_INJECTOR__ = t;
};
Ao(zn);
export {
  ts as F,
  K as Q,
  Eo as S,
  Mt as a,
  It as b,
  Io as c,
  Mo as d,
  ko as e,
  Hn as f,
  js as g,
  zo as h,
  ve as i,
  J as j,
  jo as k,
  kt as l,
  Ts as m,
  ie as n,
  ir as o,
  sn as p,
  pr as q,
  Rs as r,
  Do as s,
  Os as t,
  Uo as u,
  Bo as v
};
