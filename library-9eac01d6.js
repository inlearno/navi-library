var $t = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var m = (e, t, r) => ($t(e, t, "read from private field"), r ? r.call(e) : t.get(e)), U = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, F = (e, t, r, n) => ($t(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var Et = (e, t, r, n) => ({
  set _(s) {
    F(e, t, s, r);
  },
  get _() {
    return m(e, t, n);
  }
}), G = (e, t, r) => ($t(e, t, "access private method"), r);
import { h as Yr, j as ht, E as Zr, c as en, a as tn, G as Wn, b as Jn, T as Gn } from "./mui-d2313b11.js";
import { c as rn, r as B, R as z, g as Vn } from "./react-181b9648.js";
import { F as Xn } from "./icons-42066a3f.js";
var Yn = ht.Fragment;
function V(e, t, r) {
  return Yr.call(t, "css") ? ht.jsx(Zr, en(e, t), r) : ht.jsx(e, t, r);
}
function lr(e, t, r) {
  return Yr.call(t, "css") ? ht.jsxs(Zr, en(e, t), r) : ht.jsxs(e, t, r);
}
var er = {}, br = rn;
er.createRoot = br.createRoot, er.hydrateRoot = br.hydrateRoot;
function Zn(e) {
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
      var u = 1, g = "", i = r + 1;
      if (e[i] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(i));
      for (; i < e.length; ) {
        if (e[i] === "\\") {
          g += e[i++] + e[i++];
          continue;
        }
        if (e[i] === ")") {
          if (u--, u === 0) {
            i++;
            break;
          }
        } else if (e[i] === "(" && (u++, e[i + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(i));
        g += e[i++];
      }
      if (u)
        throw new TypeError("Unbalanced pattern at ".concat(r));
      if (!g)
        throw new TypeError("Missing pattern at ".concat(r));
      t.push({ type: "PATTERN", index: r, value: g }), r = i;
      continue;
    }
    t.push({ type: "CHAR", index: r, value: e[r++] });
  }
  return t.push({ type: "END", index: r, value: "" }), t;
}
function nn(e, t) {
  t === void 0 && (t = {});
  for (var r = Zn(e), n = t.prefixes, s = n === void 0 ? "./" : n, i = "[^".concat($e(t.delimiter || "/#?"), "]+?"), o = [], u = 0, g = 0, E = "", l = function(q) {
    if (g < r.length && r[g].type === q)
      return r[g++].value;
  }, y = function(q) {
    var K = l(q);
    if (K !== void 0)
      return K;
    var I = r[g], k = I.type, le = I.index;
    throw new TypeError("Unexpected ".concat(k, " at ").concat(le, ", expected ").concat(q));
  }, P = function() {
    for (var q = "", K; K = l("CHAR") || l("ESCAPED_CHAR"); )
      q += K;
    return q;
  }; g < r.length; ) {
    var _ = l("CHAR"), p = l("NAME"), T = l("PATTERN");
    if (p || T) {
      var w = _ || "";
      s.indexOf(w) === -1 && (E += w, w = ""), E && (o.push(E), E = ""), o.push({
        name: p || u++,
        prefix: w,
        suffix: "",
        pattern: T || i,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    var O = _ || l("ESCAPED_CHAR");
    if (O) {
      E += O;
      continue;
    }
    E && (o.push(E), E = "");
    var L = l("OPEN");
    if (L) {
      var w = P(), M = l("NAME") || "", A = l("PATTERN") || "", D = P();
      y("CLOSE"), o.push({
        name: M || (A ? u++ : ""),
        pattern: M && !A ? i : A,
        prefix: w,
        suffix: D,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    y("END");
  }
  return o;
}
function Po(e, t) {
  return es(nn(e, t), t);
}
function es(e, t) {
  t === void 0 && (t = {});
  var r = fr(t), n = t.encode, s = n === void 0 ? function(g) {
    return g;
  } : n, i = t.validate, o = i === void 0 ? !0 : i, u = e.map(function(g) {
    if (typeof g == "object")
      return new RegExp("^(?:".concat(g.pattern, ")$"), r);
  });
  return function(g) {
    for (var E = "", l = 0; l < e.length; l++) {
      var y = e[l];
      if (typeof y == "string") {
        E += y;
        continue;
      }
      var P = g ? g[y.name] : void 0, _ = y.modifier === "?" || y.modifier === "*", p = y.modifier === "*" || y.modifier === "+";
      if (Array.isArray(P)) {
        if (!p)
          throw new TypeError('Expected "'.concat(y.name, '" to not repeat, but got an array'));
        if (P.length === 0) {
          if (_)
            continue;
          throw new TypeError('Expected "'.concat(y.name, '" to not be empty'));
        }
        for (var T = 0; T < P.length; T++) {
          var w = s(P[T], y);
          if (o && !u[l].test(w))
            throw new TypeError('Expected all "'.concat(y.name, '" to match "').concat(y.pattern, '", but got "').concat(w, '"'));
          E += y.prefix + w + y.suffix;
        }
        continue;
      }
      if (typeof P == "string" || typeof P == "number") {
        var w = s(String(P), y);
        if (o && !u[l].test(w))
          throw new TypeError('Expected "'.concat(y.name, '" to match "').concat(y.pattern, '", but got "').concat(w, '"'));
        E += y.prefix + w + y.suffix;
        continue;
      }
      if (!_) {
        var O = p ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(y.name, '" to be ').concat(O));
      }
    }
    return E;
  };
}
function ts(e, t) {
  var r = [], n = sn(e, r, t);
  return rs(n, r, t);
}
function rs(e, t, r) {
  r === void 0 && (r = {});
  var n = r.decode, s = n === void 0 ? function(i) {
    return i;
  } : n;
  return function(i) {
    var o = e.exec(i);
    if (!o)
      return !1;
    for (var u = o[0], g = o.index, E = /* @__PURE__ */ Object.create(null), l = function(P) {
      if (o[P] === void 0)
        return "continue";
      var _ = t[P - 1];
      _.modifier === "*" || _.modifier === "+" ? E[_.name] = o[P].split(_.prefix + _.suffix).map(function(p) {
        return s(p, _);
      }) : E[_.name] = s(o[P], _);
    }, y = 1; y < o.length; y++)
      l(y);
    return { path: u, index: g, params: E };
  };
}
function $e(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function fr(e) {
  return e && e.sensitive ? "" : "i";
}
function ns(e, t) {
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
function ss(e, t, r) {
  var n = e.map(function(s) {
    return sn(s, t, r).source;
  });
  return new RegExp("(?:".concat(n.join("|"), ")"), fr(r));
}
function is(e, t, r) {
  return os(nn(e, r), t, r);
}
function os(e, t, r) {
  r === void 0 && (r = {});
  for (var n = r.strict, s = n === void 0 ? !1 : n, i = r.start, o = i === void 0 ? !0 : i, u = r.end, g = u === void 0 ? !0 : u, E = r.encode, l = E === void 0 ? function(le) {
    return le;
  } : E, y = r.delimiter, P = y === void 0 ? "/#?" : y, _ = r.endsWith, p = _ === void 0 ? "" : _, T = "[".concat($e(p), "]|$"), w = "[".concat($e(P), "]"), O = o ? "^" : "", L = 0, M = e; L < M.length; L++) {
    var A = M[L];
    if (typeof A == "string")
      O += $e(l(A));
    else {
      var D = $e(l(A.prefix)), q = $e(l(A.suffix));
      if (A.pattern)
        if (t && t.push(A), D || q)
          if (A.modifier === "+" || A.modifier === "*") {
            var K = A.modifier === "*" ? "?" : "";
            O += "(?:".concat(D, "((?:").concat(A.pattern, ")(?:").concat(q).concat(D, "(?:").concat(A.pattern, "))*)").concat(q, ")").concat(K);
          } else
            O += "(?:".concat(D, "(").concat(A.pattern, ")").concat(q, ")").concat(A.modifier);
        else
          A.modifier === "+" || A.modifier === "*" ? O += "((?:".concat(A.pattern, ")").concat(A.modifier, ")") : O += "(".concat(A.pattern, ")").concat(A.modifier);
      else
        O += "(?:".concat(D).concat(q, ")").concat(A.modifier);
    }
  }
  if (g)
    s || (O += "".concat(w, "?")), O += r.endsWith ? "(?=".concat(T, ")") : "$";
  else {
    var I = e[e.length - 1], k = typeof I == "string" ? w.indexOf(I[I.length - 1]) > -1 : I === void 0;
    s || (O += "(?:".concat(w, "(?=").concat(T, "))?")), k || (O += "(?=".concat(w, "|").concat(T, ")"));
  }
  return new RegExp(O, fr(r));
}
function sn(e, t, r) {
  return e instanceof RegExp ? ns(e, t) : Array.isArray(e) ? ss(e, t, r) : is(e, t, r);
}
const as = (e) => e.map((t) => [t, ts(t.path)]), cs = (e, t) => {
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
function on(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = on(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ie() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = on(e)) && (n && (n += " "), n += t);
  return n;
}
const lt = (e) => typeof e == "number" && !isNaN(e), Qe = (e) => typeof e == "string", ae = (e) => typeof e == "function", Ot = (e) => Qe(e) || ae(e) ? e : null, Kt = (e) => B.isValidElement(e) || Qe(e) || ae(e) || lt(e);
function us(e, t, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: s } = e;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = n + "px", s.transition = `all ${r}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t, r);
    });
  });
}
function Ft(e) {
  let { enter: t, exit: r, appendPosition: n = !1, collapse: s = !0, collapseDuration: i = 300 } = e;
  return function(o) {
    let { children: u, position: g, preventExitTransition: E, done: l, nodeRef: y, isIn: P } = o;
    const _ = n ? `${t}--${g}` : t, p = n ? `${r}--${g}` : r, T = B.useRef(0);
    return B.useLayoutEffect(() => {
      const w = y.current, O = _.split(" "), L = (M) => {
        M.target === y.current && (w.dispatchEvent(new Event("d")), w.removeEventListener("animationend", L), w.removeEventListener("animationcancel", L), T.current === 0 && M.type !== "animationcancel" && w.classList.remove(...O));
      };
      w.classList.add(...O), w.addEventListener("animationend", L), w.addEventListener("animationcancel", L);
    }, []), B.useEffect(() => {
      const w = y.current, O = () => {
        w.removeEventListener("animationend", O), s ? us(w, l, i) : l();
      };
      P || (E ? O() : (T.current = 1, w.className += ` ${p}`, w.addEventListener("animationend", O)));
    }, [P]), z.createElement(z.Fragment, null, u);
  };
}
function Er(e, t) {
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
  return z.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...n });
}, Wt = { info: function(e) {
  return z.createElement(_t, { ...e }, z.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return z.createElement(_t, { ...e }, z.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return z.createElement(_t, { ...e }, z.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return z.createElement(_t, { ...e }, z.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return z.createElement("div", { className: "Toastify__spinner" });
} };
function ls(e) {
  const [, t] = B.useReducer((_) => _ + 1, 0), [r, n] = B.useState([]), s = B.useRef(null), i = B.useRef(/* @__PURE__ */ new Map()).current, o = (_) => r.indexOf(_) !== -1, u = B.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: o, getToast: (_) => i.get(_) }).current;
  function g(_) {
    let { containerId: p } = _;
    const { limit: T } = u.props;
    !T || p && u.containerId !== p || (u.count -= u.queue.length, u.queue = []);
  }
  function E(_) {
    n((p) => _ == null ? [] : p.filter((T) => T !== _));
  }
  function l() {
    const { toastContent: _, toastProps: p, staleId: T } = u.queue.shift();
    P(_, p, T);
  }
  function y(_, p) {
    let { delay: T, staleId: w, ...O } = p;
    if (!Kt(_) || function(te) {
      return !s.current || u.props.enableMultiContainer && te.containerId !== u.props.containerId || i.has(te.toastId) && te.updateId == null;
    }(O))
      return;
    const { toastId: L, updateId: M, data: A } = O, { props: D } = u, q = () => E(L), K = M == null;
    K && u.count++;
    const I = { ...D, style: D.toastStyle, key: u.toastKey++, ...Object.fromEntries(Object.entries(O).filter((te) => {
      let [fe, re] = te;
      return re != null;
    })), toastId: L, updateId: M, data: A, closeToast: q, isIn: !1, className: Ot(O.className || D.toastClassName), bodyClassName: Ot(O.bodyClassName || D.bodyClassName), progressClassName: Ot(O.progressClassName || D.progressClassName), autoClose: !O.isLoading && (k = O.autoClose, le = D.autoClose, k === !1 || lt(k) && k > 0 ? k : le), deleteToast() {
      const te = Er(i.get(L), "removed");
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
    var k, le;
    I.iconOut = function(te) {
      let { theme: fe, type: re, isLoading: j, icon: ne } = te, ce = null;
      const a = { theme: fe, type: re };
      return ne === !1 || (ae(ne) ? ce = ne(a) : B.isValidElement(ne) ? ce = B.cloneElement(ne, a) : Qe(ne) || lt(ne) ? ce = ne : j ? ce = Wt.spinner() : ((c) => c in Wt)(re) && (ce = Wt[re](a))), ce;
    }(I), ae(O.onOpen) && (I.onOpen = O.onOpen), ae(O.onClose) && (I.onClose = O.onClose), I.closeButton = D.closeButton, O.closeButton === !1 || Kt(O.closeButton) ? I.closeButton = O.closeButton : O.closeButton === !0 && (I.closeButton = !Kt(D.closeButton) || D.closeButton);
    let ge = _;
    B.isValidElement(_) && !Qe(_.type) ? ge = B.cloneElement(_, { closeToast: q, toastProps: I, data: A }) : ae(_) && (ge = _({ closeToast: q, toastProps: I, data: A })), D.limit && D.limit > 0 && u.count > D.limit && K ? u.queue.push({ toastContent: ge, toastProps: I, staleId: w }) : lt(T) ? setTimeout(() => {
      P(ge, I, w);
    }, T) : P(ge, I, w);
  }
  function P(_, p, T) {
    const { toastId: w } = p;
    T && i.delete(T);
    const O = { content: _, props: p };
    i.set(w, O), n((L) => [...L, w].filter((M) => M !== T)), me.emit(4, Er(O, O.props.updateId == null ? "added" : "updated"));
  }
  return B.useEffect(() => (u.containerId = e.containerId, me.cancelEmit(3).on(0, y).on(1, (_) => s.current && E(_)).on(5, g).emit(2, u), () => {
    i.clear(), me.emit(3, u);
  }), []), B.useEffect(() => {
    u.props = e, u.isToastActive = o, u.displayedToast = r.length;
  }), { getToastToRender: function(_) {
    const p = /* @__PURE__ */ new Map(), T = Array.from(i.values());
    return e.newestOnTop && T.reverse(), T.forEach((w) => {
      const { position: O } = w.props;
      p.has(O) || p.set(O, []), p.get(O).push(w);
    }), Array.from(p, (w) => _(w[0], w[1]));
  }, containerRef: s, isToastActive: o };
}
function _r(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function Tr(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function fs(e) {
  const [t, r] = B.useState(!1), [n, s] = B.useState(!1), i = B.useRef(null), o = B.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, u = B.useRef(e), { autoClose: g, pauseOnHover: E, closeToast: l, onClick: y, closeOnClick: P } = e;
  function _(A) {
    if (e.draggable) {
      A.nativeEvent.type === "touchstart" && A.nativeEvent.preventDefault(), o.didMove = !1, document.addEventListener("mousemove", O), document.addEventListener("mouseup", L), document.addEventListener("touchmove", O), document.addEventListener("touchend", L);
      const D = i.current;
      o.canCloseOnClick = !0, o.canDrag = !0, o.boundingRect = D.getBoundingClientRect(), D.style.transition = "", o.x = _r(A.nativeEvent), o.y = Tr(A.nativeEvent), e.draggableDirection === "x" ? (o.start = o.x, o.removalDistance = D.offsetWidth * (e.draggablePercent / 100)) : (o.start = o.y, o.removalDistance = D.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }
  function p(A) {
    if (o.boundingRect) {
      const { top: D, bottom: q, left: K, right: I } = o.boundingRect;
      A.nativeEvent.type !== "touchend" && e.pauseOnHover && o.x >= K && o.x <= I && o.y >= D && o.y <= q ? w() : T();
    }
  }
  function T() {
    r(!0);
  }
  function w() {
    r(!1);
  }
  function O(A) {
    const D = i.current;
    o.canDrag && D && (o.didMove = !0, t && w(), o.x = _r(A), o.y = Tr(A), o.delta = e.draggableDirection === "x" ? o.x - o.start : o.y - o.start, o.start !== o.x && (o.canCloseOnClick = !1), D.style.transform = `translate${e.draggableDirection}(${o.delta}px)`, D.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
  }
  function L() {
    document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", L), document.removeEventListener("touchmove", O), document.removeEventListener("touchend", L);
    const A = i.current;
    if (o.canDrag && o.didMove && A) {
      if (o.canDrag = !1, Math.abs(o.delta) > o.removalDistance)
        return s(!0), void e.closeToast();
      A.style.transition = "transform 0.2s, opacity 0.2s", A.style.transform = `translate${e.draggableDirection}(0)`, A.style.opacity = "1";
    }
  }
  B.useEffect(() => {
    u.current = e;
  }), B.useEffect(() => (i.current && i.current.addEventListener("d", T, { once: !0 }), ae(e.onOpen) && e.onOpen(B.isValidElement(e.children) && e.children.props), () => {
    const A = u.current;
    ae(A.onClose) && A.onClose(B.isValidElement(A.children) && A.children.props);
  }), []), B.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || w(), window.addEventListener("focus", T), window.addEventListener("blur", w)), () => {
    e.pauseOnFocusLoss && (window.removeEventListener("focus", T), window.removeEventListener("blur", w));
  }), [e.pauseOnFocusLoss]);
  const M = { onMouseDown: _, onTouchStart: _, onMouseUp: p, onTouchEnd: p };
  return g && E && (M.onMouseEnter = w, M.onMouseLeave = T), P && (M.onClick = (A) => {
    y && y(A), o.canCloseOnClick && l();
  }), { playToast: T, pauseToast: w, isRunning: t, preventExitTransition: n, toastRef: i, eventHandlers: M };
}
function an(e) {
  let { closeToast: t, theme: r, ariaLabel: n = "close" } = e;
  return z.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (s) => {
    s.stopPropagation(), t(s);
  }, "aria-label": n }, z.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, z.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function hs(e) {
  let { delay: t, isRunning: r, closeToast: n, type: s = "default", hide: i, className: o, style: u, controlledProgress: g, progress: E, rtl: l, isIn: y, theme: P } = e;
  const _ = i || g && E === 0, p = { ...u, animationDuration: `${t}ms`, animationPlayState: r ? "running" : "paused", opacity: _ ? 0 : 1 };
  g && (p.transform = `scaleX(${E})`);
  const T = Ie("Toastify__progress-bar", g ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${P}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": l }), w = ae(o) ? o({ rtl: l, type: s, defaultClassName: T }) : Ie(T, o);
  return z.createElement("div", { role: "progressbar", "aria-hidden": _ ? "true" : "false", "aria-label": "notification timer", className: w, style: p, [g && E >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: g && E < 1 ? null : () => {
    y && n();
  } });
}
const ds = (e) => {
  const { isRunning: t, preventExitTransition: r, toastRef: n, eventHandlers: s } = fs(e), { closeButton: i, children: o, autoClose: u, onClick: g, type: E, hideProgressBar: l, closeToast: y, transition: P, position: _, className: p, style: T, bodyClassName: w, bodyStyle: O, progressClassName: L, progressStyle: M, updateId: A, role: D, progress: q, rtl: K, toastId: I, deleteToast: k, isIn: le, isLoading: ge, iconOut: te, closeOnClick: fe, theme: re } = e, j = Ie("Toastify__toast", `Toastify__toast-theme--${re}`, `Toastify__toast--${E}`, { "Toastify__toast--rtl": K }, { "Toastify__toast--close-on-click": fe }), ne = ae(p) ? p({ rtl: K, position: _, type: E, defaultClassName: j }) : Ie(j, p), ce = !!q || !u, a = { closeToast: y, type: E, theme: re };
  let c = null;
  return i === !1 || (c = ae(i) ? i(a) : B.isValidElement(i) ? B.cloneElement(i, a) : an(a)), z.createElement(P, { isIn: le, done: k, position: _, preventExitTransition: r, nodeRef: n }, z.createElement("div", { id: I, onClick: g, className: ne, ...s, style: T, ref: n }, z.createElement("div", { ...le && { role: D }, className: ae(w) ? w({ type: E }) : Ie("Toastify__toast-body", w), style: O }, te != null && z.createElement("div", { className: Ie("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !ge }) }, te), z.createElement("div", null, o)), c, z.createElement(hs, { ...A && !ce ? { key: `pb-${A}` } : {}, rtl: K, theme: re, delay: u, isRunning: t, isIn: le, closeToast: y, hide: l, type: E, style: M, className: L, controlledProgress: ce, progress: q || 0 })));
}, Mt = function(e, t) {
  return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, ps = Ft(Mt("bounce", !0));
Ft(Mt("slide", !0));
Ft(Mt("zoom"));
Ft(Mt("flip"));
const tr = B.forwardRef((e, t) => {
  const { getToastToRender: r, containerRef: n, isToastActive: s } = ls(e), { className: i, style: o, rtl: u, containerId: g } = e;
  function E(l) {
    const y = Ie("Toastify__toast-container", `Toastify__toast-container--${l}`, { "Toastify__toast-container--rtl": u });
    return ae(i) ? i({ position: l, rtl: u, defaultClassName: y }) : Ie(y, Ot(i));
  }
  return B.useEffect(() => {
    t && (t.current = n.current);
  }, []), z.createElement("div", { ref: n, className: "Toastify", id: g }, r((l, y) => {
    const P = y.length ? { ...o } : { ...o, pointerEvents: "none" };
    return z.createElement("div", { className: E(l), style: P, key: `container-${l}` }, y.map((_, p) => {
      let { content: T, props: w } = _;
      return z.createElement(ds, { ...w, isIn: s(w.toastId), style: { ...w.style, "--nth": p + 1, "--len": y.length }, key: `toast-${w.key}` }, T);
    }));
  }));
});
tr.displayName = "ToastContainer", tr.defaultProps = { position: "top-right", transition: ps, autoClose: 5e3, closeButton: an, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let Jt, ke = /* @__PURE__ */ new Map(), ut = [], ms = 1;
function cn() {
  return "" + ms++;
}
function ys(e) {
  return e && (Qe(e.toastId) || lt(e.toastId)) ? e.toastId : cn();
}
function ft(e, t) {
  return ke.size > 0 ? me.emit(0, e, t) : ut.push({ content: e, options: t }), t.toastId;
}
function At(e, t) {
  return { ...t, type: t && t.type || e, toastId: ys(t) };
}
function Tt(e) {
  return (t, r) => ft(t, At(e, r));
}
function W(e, t) {
  return ft(e, At("default", t));
}
W.loading = (e, t) => ft(e, At("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), W.promise = function(e, t, r) {
  let n, { pending: s, error: i, success: o } = t;
  s && (n = Qe(s) ? W.loading(s, r) : W.loading(s.render, { ...r, ...s }));
  const u = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, g = (l, y, P) => {
    if (y == null)
      return void W.dismiss(n);
    const _ = { type: l, ...u, ...r, data: P }, p = Qe(y) ? { render: y } : y;
    return n ? W.update(n, { ..._, ...p }) : W(p.render, { ..._, ...p }), P;
  }, E = ae(e) ? e() : e;
  return E.then((l) => g("success", o, l)).catch((l) => g("error", i, l)), E;
}, W.success = Tt("success"), W.info = Tt("info"), W.error = Tt("error"), W.warning = Tt("warning"), W.warn = W.warning, W.dark = (e, t) => ft(e, At("default", { theme: "dark", ...t })), W.dismiss = (e) => {
  ke.size > 0 ? me.emit(1, e) : ut = ut.filter((t) => e != null && t.options.toastId !== e);
}, W.clearWaitingQueue = function(e) {
  return e === void 0 && (e = {}), me.emit(5, e);
}, W.isActive = (e) => {
  let t = !1;
  return ke.forEach((r) => {
    r.isToastActive && r.isToastActive(e) && (t = !0);
  }), t;
}, W.update = function(e, t) {
  t === void 0 && (t = {}), setTimeout(() => {
    const r = function(n, s) {
      let { containerId: i } = s;
      const o = ke.get(i || Jt);
      return o && o.getToast(n);
    }(e, t);
    if (r) {
      const { props: n, content: s } = r, i = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: cn() };
      i.toastId !== e && (i.staleId = e);
      const o = i.render || s;
      delete i.render, ft(o, i);
    }
  }, 0);
}, W.done = (e) => {
  W.update(e, { progress: 1 });
}, W.onChange = (e) => (me.on(4, e), () => {
  me.off(4, e);
}), W.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, W.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, me.on(2, (e) => {
  Jt = e.containerId || e, ke.set(Jt, e), ut.forEach((t) => {
    me.emit(0, t.content, t.options);
  }), ut = [];
}).on(3, (e) => {
  ke.delete(e.containerId || e), ke.size === 0 && me.off(0).off(1).off(5);
});
const vs = () => /* @__PURE__ */ V(Wn, { styles: tn`*, ::before, ::after {
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
}` }), ws = () => /* @__PURE__ */ lr(Yn, { children: [
  /* @__PURE__ */ V(vs, {}),
  /* @__PURE__ */ V(tr, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
var Dt = class {
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
}, jt = typeof window > "u" || "Deno" in window;
function ve() {
}
function gs(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bs(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Es(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Or(e, t) {
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
      if (t.queryHash !== hr(o, t.options))
        return !1;
    } else if (!pt(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const g = t.isActive();
    if (r === "active" && !g || r === "inactive" && g)
      return !1;
  }
  return !(typeof u == "boolean" && t.isStale() !== u || typeof s < "u" && s !== t.state.fetchStatus || i && !i(t));
}
function Rr(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (dt(t.options.mutationKey) !== dt(i))
        return !1;
    } else if (!pt(t.options.mutationKey, i))
      return !1;
  }
  return !(n && t.state.status !== n || s && !s(t));
}
function hr(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || dt)(e);
}
function dt(e) {
  return JSON.stringify(
    e,
    (t, r) => rr(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function pt(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !pt(e[r], t[r])) : !1;
}
function un(e, t) {
  if (e === t)
    return e;
  const r = Cr(e) && Cr(t);
  if (r || rr(e) && rr(t)) {
    const n = r ? e.length : Object.keys(e).length, s = r ? t : Object.keys(t), i = s.length, o = r ? [] : {};
    let u = 0;
    for (let g = 0; g < i; g++) {
      const E = r ? g : s[g];
      o[E] = un(e[E], t[E]), o[E] === e[E] && u++;
    }
    return n === i && u === n ? e : o;
  }
  return t;
}
function Lo(e, t) {
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
function rr(e) {
  if (!Sr(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!Sr(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Sr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ln(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function xr(e) {
  ln(0).then(e);
}
function _s(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? un(e, t) : t;
}
function No(e) {
  return e;
}
function Ts(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function Os(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Ue, Le, Ke, Qr, Rs = (Qr = class extends Dt {
  constructor() {
    super();
    U(this, Ue, void 0);
    U(this, Le, void 0);
    U(this, Ke, void 0);
    F(this, Ke, (t) => {
      if (!jt && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    m(this, Le) || this.setEventListener(m(this, Ke));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = m(this, Le)) == null || t.call(this), F(this, Le, void 0));
  }
  setEventListener(t) {
    var r;
    F(this, Ke, t), (r = m(this, Le)) == null || r.call(this), F(this, Le, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    m(this, Ue) !== t && (F(this, Ue, t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    var t;
    return typeof m(this, Ue) == "boolean" ? m(this, Ue) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Ue = new WeakMap(), Le = new WeakMap(), Ke = new WeakMap(), Qr), nr = new Rs(), We, Ne, Je, $r, Cs = ($r = class extends Dt {
  constructor() {
    super();
    U(this, We, !0);
    U(this, Ne, void 0);
    U(this, Je, void 0);
    F(this, Je, (t) => {
      if (!jt && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    m(this, Ne) || this.setEventListener(m(this, Je));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = m(this, Ne)) == null || t.call(this), F(this, Ne, void 0));
  }
  setEventListener(t) {
    var r;
    F(this, Je, t), (r = m(this, Ne)) == null || r.call(this), F(this, Ne, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    m(this, We) !== t && (F(this, We, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return m(this, We);
  }
}, We = new WeakMap(), Ne = new WeakMap(), Je = new WeakMap(), $r), st = new Cs();
function Ss(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function dr(e) {
  return (e ?? "online") === "online" ? st.isOnline() : !0;
}
var fn = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Gt(e) {
  return e instanceof fn;
}
function hn(e) {
  let t = !1, r = 0, n = !1, s, i, o;
  const u = new Promise((w, O) => {
    i = w, o = O;
  }), g = (w) => {
    var O;
    n || (_(new fn(w)), (O = e.abort) == null || O.call(e));
  }, E = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, y = () => !nr.isFocused() || e.networkMode !== "always" && !st.isOnline(), P = (w) => {
    var O;
    n || (n = !0, (O = e.onSuccess) == null || O.call(e, w), s == null || s(), i(w));
  }, _ = (w) => {
    var O;
    n || (n = !0, (O = e.onError) == null || O.call(e, w), s == null || s(), o(w));
  }, p = () => new Promise((w) => {
    var O;
    s = (L) => {
      const M = n || !y();
      return M && w(L), M;
    }, (O = e.onPause) == null || O.call(e);
  }).then(() => {
    var w;
    s = void 0, n || (w = e.onContinue) == null || w.call(e);
  }), T = () => {
    if (n)
      return;
    let w;
    try {
      w = e.fn();
    } catch (O) {
      w = Promise.reject(O);
    }
    Promise.resolve(w).then(P).catch((O) => {
      var q;
      if (n)
        return;
      const L = e.retry ?? (jt ? 0 : 3), M = e.retryDelay ?? Ss, A = typeof M == "function" ? M(r, O) : M, D = L === !0 || typeof L == "number" && r < L || typeof L == "function" && L(r, O);
      if (t || !D) {
        _(O);
        return;
      }
      r++, (q = e.onFail) == null || q.call(e, r, O), ln(A).then(() => {
        if (y())
          return p();
      }).then(() => {
        t ? _(O) : T();
      });
    });
  };
  return dr(e.networkMode) ? T() : p().then(T), {
    promise: u,
    cancel: g,
    continue: () => (s == null ? void 0 : s()) ? u : Promise.resolve(),
    cancelRetry: E,
    continueRetry: l
  };
}
function xs() {
  let e = [], t = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  };
  const s = (l) => {
    let y;
    t++;
    try {
      y = l();
    } finally {
      t--, t || u();
    }
    return y;
  }, i = (l) => {
    t ? e.push(l) : xr(() => {
      r(l);
    });
  }, o = (l) => (...y) => {
    i(() => {
      l(...y);
    });
  }, u = () => {
    const l = e;
    e = [], l.length && xr(() => {
      n(() => {
        l.forEach((y) => {
          r(y);
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
var ie = xs(), Be, Kr, dn = (Kr = class {
  constructor() {
    U(this, Be, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), bs(this.gcTime) && F(this, Be, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (jt ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    m(this, Be) && (clearTimeout(m(this, Be)), F(this, Be, void 0));
  }
}, Be = new WeakMap(), Kr), Ge, Ve, he, Fe, de, Z, yt, qe, Xe, Rt, we, Ce, Wr, As = (Wr = class extends dn {
  constructor(t) {
    super();
    U(this, Xe);
    U(this, we);
    U(this, Ge, void 0);
    U(this, Ve, void 0);
    U(this, he, void 0);
    U(this, Fe, void 0);
    U(this, de, void 0);
    U(this, Z, void 0);
    U(this, yt, void 0);
    U(this, qe, void 0);
    F(this, qe, !1), F(this, yt, t.defaultOptions), G(this, Xe, Rt).call(this, t.options), F(this, Z, []), F(this, he, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, F(this, Ge, t.state || Ps(this.options)), this.state = m(this, Ge), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !m(this, Z).length && this.state.fetchStatus === "idle" && m(this, he).remove(this);
  }
  setData(t, r) {
    const n = _s(this.state.data, t, this.options);
    return G(this, we, Ce).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    G(this, we, Ce).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n;
    const r = m(this, Fe);
    return (n = m(this, de)) == null || n.cancel(t), r ? r.then(ve).catch(ve) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(m(this, Ge));
  }
  isActive() {
    return m(this, Z).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || m(this, Z).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Es(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = m(this, Z).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = m(this, de)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = m(this, Z).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = m(this, de)) == null || r.continue();
  }
  addObserver(t) {
    m(this, Z).includes(t) || (m(this, Z).push(t), this.clearGcTimeout(), m(this, he).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    m(this, Z).includes(t) && (F(this, Z, m(this, Z).filter((r) => r !== t)), m(this, Z).length || (m(this, de) && (m(this, qe) ? m(this, de).cancel({ revert: !0 }) : m(this, de).cancelRetry()), this.scheduleGc()), m(this, he).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return m(this, Z).length;
  }
  invalidate() {
    this.state.isInvalidated || G(this, we, Ce).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var E, l, y, P;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (m(this, Fe))
        return (E = m(this, de)) == null || E.continueRetry(), m(this, Fe);
    }
    if (t && G(this, Xe, Rt).call(this, t), !this.options.queryFn) {
      const _ = m(this, Z).find((p) => p.options.queryFn);
      _ && G(this, Xe, Rt).call(this, _.options);
    }
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (_) => {
      Object.defineProperty(_, "signal", {
        enumerable: !0,
        get: () => (F(this, qe, !0), n.signal)
      });
    };
    i(s);
    const o = () => this.options.queryFn ? (F(this, qe, !1), this.options.persister ? this.options.persister(
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
    ), F(this, Ve, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((y = u.fetchOptions) == null ? void 0 : y.meta)) && G(this, we, Ce).call(this, { type: "fetch", meta: (P = u.fetchOptions) == null ? void 0 : P.meta });
    const g = (_) => {
      var p, T, w, O;
      Gt(_) && _.silent || G(this, we, Ce).call(this, {
        type: "error",
        error: _
      }), Gt(_) || ((T = (p = m(this, he).config).onError) == null || T.call(
        p,
        _,
        this
      ), (O = (w = m(this, he).config).onSettled) == null || O.call(
        w,
        this.state.data,
        _,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return F(this, de, hn({
      fn: u.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (_) => {
        var p, T, w, O;
        if (typeof _ > "u") {
          g(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(_), (T = (p = m(this, he).config).onSuccess) == null || T.call(p, _, this), (O = (w = m(this, he).config).onSettled) == null || O.call(
          w,
          _,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: g,
      onFail: (_, p) => {
        G(this, we, Ce).call(this, { type: "failed", failureCount: _, error: p });
      },
      onPause: () => {
        G(this, we, Ce).call(this, { type: "pause" });
      },
      onContinue: () => {
        G(this, we, Ce).call(this, { type: "continue" });
      },
      retry: u.options.retry,
      retryDelay: u.options.retryDelay,
      networkMode: u.options.networkMode
    })), F(this, Fe, m(this, de).promise), m(this, Fe);
  }
}, Ge = new WeakMap(), Ve = new WeakMap(), he = new WeakMap(), Fe = new WeakMap(), de = new WeakMap(), Z = new WeakMap(), yt = new WeakMap(), qe = new WeakMap(), Xe = new WeakSet(), Rt = function(t) {
  this.options = { ...m(this, yt), ...t }, this.updateGcTime(this.options.gcTime);
}, we = new WeakSet(), Ce = function(t) {
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
          fetchStatus: dr(this.options.networkMode) ? "fetching" : "paused",
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
        return Gt(s) && s.revert && m(this, Ve) ? { ...m(this, Ve), fetchStatus: "idle" } : {
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
    m(this, Z).forEach((n) => {
      n.onQueryUpdate();
    }), m(this, he).notify({ query: this, type: "updated", action: t });
  });
}, Wr);
function Ps(e) {
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
var be, Jr, Ls = (Jr = class extends Dt {
  constructor(t = {}) {
    super();
    U(this, be, void 0);
    this.config = t, F(this, be, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const s = r.queryKey, i = r.queryHash ?? hr(s, r);
    let o = this.get(i);
    return o || (o = new As({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(t) {
    m(this, be).has(t.queryHash) || (m(this, be).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = m(this, be).get(t.queryHash);
    r && (t.destroy(), r === t && m(this, be).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return m(this, be).get(t);
  }
  getAll() {
    return [...m(this, be).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Or(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => Or(t, n)) : r;
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
}, be = new WeakMap(), Jr), Ee, vt, ue, Ye, _e, Pe, Gr, Ns = (Gr = class extends dn {
  constructor(t) {
    super();
    U(this, _e);
    U(this, Ee, void 0);
    U(this, vt, void 0);
    U(this, ue, void 0);
    U(this, Ye, void 0);
    this.mutationId = t.mutationId, F(this, vt, t.defaultOptions), F(this, ue, t.mutationCache), F(this, Ee, []), this.state = t.state || Fs(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...m(this, vt), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    m(this, Ee).includes(t) || (m(this, Ee).push(t), this.clearGcTimeout(), m(this, ue).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    F(this, Ee, m(this, Ee).filter((r) => r !== t)), this.scheduleGc(), m(this, ue).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    m(this, Ee).length || (this.state.status === "pending" ? this.scheduleGc() : m(this, ue).remove(this));
  }
  continue() {
    var t;
    return ((t = m(this, Ye)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, i, o, u, g, E, l, y, P, _, p, T, w, O, L, M, A, D, q, K;
    const r = () => (F(this, Ye, hn({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (I, k) => {
        G(this, _e, Pe).call(this, { type: "failed", failureCount: I, error: k });
      },
      onPause: () => {
        G(this, _e, Pe).call(this, { type: "pause" });
      },
      onContinue: () => {
        G(this, _e, Pe).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), m(this, Ye).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        G(this, _e, Pe).call(this, { type: "pending", variables: t }), await ((i = (s = m(this, ue).config).onMutate) == null ? void 0 : i.call(
          s,
          t,
          this
        ));
        const k = await ((u = (o = this.options).onMutate) == null ? void 0 : u.call(o, t));
        k !== this.state.context && G(this, _e, Pe).call(this, {
          type: "pending",
          context: k,
          variables: t
        });
      }
      const I = await r();
      return await ((E = (g = m(this, ue).config).onSuccess) == null ? void 0 : E.call(
        g,
        I,
        t,
        this.state.context,
        this
      )), await ((y = (l = this.options).onSuccess) == null ? void 0 : y.call(l, I, t, this.state.context)), await ((_ = (P = m(this, ue).config).onSettled) == null ? void 0 : _.call(
        P,
        I,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((T = (p = this.options).onSettled) == null ? void 0 : T.call(p, I, null, t, this.state.context)), G(this, _e, Pe).call(this, { type: "success", data: I }), I;
    } catch (I) {
      try {
        throw await ((O = (w = m(this, ue).config).onError) == null ? void 0 : O.call(
          w,
          I,
          t,
          this.state.context,
          this
        )), await ((M = (L = this.options).onError) == null ? void 0 : M.call(
          L,
          I,
          t,
          this.state.context
        )), await ((D = (A = m(this, ue).config).onSettled) == null ? void 0 : D.call(
          A,
          void 0,
          I,
          this.state.variables,
          this.state.context,
          this
        )), await ((K = (q = this.options).onSettled) == null ? void 0 : K.call(
          q,
          void 0,
          I,
          t,
          this.state.context
        )), I;
      } finally {
        G(this, _e, Pe).call(this, { type: "error", error: I });
      }
    }
  }
}, Ee = new WeakMap(), vt = new WeakMap(), ue = new WeakMap(), Ye = new WeakMap(), _e = new WeakSet(), Pe = function(t) {
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
          isPaused: !dr(this.options.networkMode),
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
    m(this, Ee).forEach((n) => {
      n.onMutationUpdate(t);
    }), m(this, ue).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Gr);
function Fs() {
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
var pe, wt, ze, Vr, Ms = (Vr = class extends Dt {
  constructor(t = {}) {
    super();
    U(this, pe, void 0);
    U(this, wt, void 0);
    U(this, ze, void 0);
    this.config = t, F(this, pe, []), F(this, wt, 0);
  }
  build(t, r, n) {
    const s = new Ns({
      mutationCache: this,
      mutationId: ++Et(this, wt)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(t) {
    m(this, pe).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    F(this, pe, m(this, pe).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    ie.batch(() => {
      m(this, pe).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return m(this, pe);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return m(this, pe).find(
      (n) => Rr(r, n)
    );
  }
  findAll(t = {}) {
    return m(this, pe).filter(
      (r) => Rr(t, r)
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
    return F(this, ze, (m(this, ze) ?? Promise.resolve()).then(() => {
      const t = m(this, pe).filter((r) => r.state.isPaused);
      return ie.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(ve)),
          Promise.resolve()
        )
      );
    }).then(() => {
      F(this, ze, void 0);
    })), m(this, ze);
  }
}, pe = new WeakMap(), wt = new WeakMap(), ze = new WeakMap(), Vr);
function Ds(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var p, T, w, O, L;
        const s = t.options, i = (w = (T = (p = t.fetchOptions) == null ? void 0 : p.meta) == null ? void 0 : T.fetchMore) == null ? void 0 : w.direction, o = ((O = t.state.data) == null ? void 0 : O.pages) || [], u = ((L = t.state.data) == null ? void 0 : L.pageParams) || [], g = { pages: [], pageParams: [] };
        let E = !1;
        const l = (M) => {
          Object.defineProperty(M, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? E = !0 : t.signal.addEventListener("abort", () => {
              E = !0;
            }), t.signal)
          });
        }, y = t.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), P = async (M, A, D) => {
          if (E)
            return Promise.reject();
          if (A == null && M.pages.length)
            return Promise.resolve(M);
          const q = {
            queryKey: t.queryKey,
            pageParam: A,
            direction: D ? "backward" : "forward",
            meta: t.options.meta
          };
          l(q);
          const K = await y(
            q
          ), { maxPages: I } = t.options, k = D ? Os : Ts;
          return {
            pages: k(M.pages, K, I),
            pageParams: k(M.pageParams, A, I)
          };
        };
        let _;
        if (i && o.length) {
          const M = i === "backward", A = M ? js : Ar, D = {
            pages: o,
            pageParams: u
          }, q = A(s, D);
          _ = await P(D, q, M);
        } else {
          _ = await P(
            g,
            u[0] ?? s.initialPageParam
          );
          const M = e ?? o.length;
          for (let A = 1; A < M; A++) {
            const D = Ar(s, _);
            _ = await P(_, D);
          }
        }
        return _;
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
function Ar(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function js(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var Y, Me, De, Ze, et, je, tt, rt, Xr, Is = (Xr = class {
  constructor(e = {}) {
    U(this, Y, void 0);
    U(this, Me, void 0);
    U(this, De, void 0);
    U(this, Ze, void 0);
    U(this, et, void 0);
    U(this, je, void 0);
    U(this, tt, void 0);
    U(this, rt, void 0);
    F(this, Y, e.queryCache || new Ls()), F(this, Me, e.mutationCache || new Ms()), F(this, De, e.defaultOptions || {}), F(this, Ze, /* @__PURE__ */ new Map()), F(this, et, /* @__PURE__ */ new Map()), F(this, je, 0);
  }
  mount() {
    Et(this, je)._++, m(this, je) === 1 && (F(this, tt, nr.subscribe(() => {
      nr.isFocused() && (this.resumePausedMutations(), m(this, Y).onFocus());
    })), F(this, rt, st.subscribe(() => {
      st.isOnline() && (this.resumePausedMutations(), m(this, Y).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Et(this, je)._--, m(this, je) === 0 && ((e = m(this, tt)) == null || e.call(this), F(this, tt, void 0), (t = m(this, rt)) == null || t.call(this), F(this, rt, void 0));
  }
  isFetching(e) {
    return m(this, Y).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return m(this, Me).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var t;
    return (t = m(this, Y).find({ queryKey: e })) == null ? void 0 : t.state.data;
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
    const n = m(this, Y).find({ queryKey: e }), s = n == null ? void 0 : n.state.data, i = gs(t, s);
    if (typeof i > "u")
      return;
    const o = this.defaultQueryOptions({ queryKey: e });
    return m(this, Y).build(this, o).setData(i, { ...r, manual: !0 });
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
    return (t = m(this, Y).find({ queryKey: e })) == null ? void 0 : t.state;
  }
  removeQueries(e) {
    const t = m(this, Y);
    ie.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = m(this, Y), n = {
      type: "active",
      ...e
    };
    return ie.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = ie.batch(
      () => m(this, Y).findAll(e).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(ve).catch(ve);
  }
  invalidateQueries(e = {}, t = {}) {
    return ie.batch(() => {
      if (m(this, Y).findAll(e).forEach((n) => {
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
      () => m(this, Y).findAll(e).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(ve)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(ve);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = m(this, Y).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ve).catch(ve);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Ds(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ve).catch(ve);
  }
  resumePausedMutations() {
    return m(this, Me).resumePausedMutations();
  }
  getQueryCache() {
    return m(this, Y);
  }
  getMutationCache() {
    return m(this, Me);
  }
  getDefaultOptions() {
    return m(this, De);
  }
  setDefaultOptions(e) {
    F(this, De, e);
  }
  setQueryDefaults(e, t) {
    m(this, Ze).set(dt(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...m(this, Ze).values()];
    let r = {};
    return t.forEach((n) => {
      pt(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    m(this, et).set(dt(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...m(this, et).values()];
    let r = {};
    return t.forEach((n) => {
      pt(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const t = {
      ...m(this, De).queries,
      ...(e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = hr(
      t.queryKey,
      t
    )), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...m(this, De).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    m(this, Y).clear(), m(this, Me).clear();
  }
}, Y = new WeakMap(), Me = new WeakMap(), De = new WeakMap(), Ze = new WeakMap(), et = new WeakMap(), je = new WeakMap(), tt = new WeakMap(), rt = new WeakMap(), Xr), pn = B.createContext(
  void 0
), Fo = (e) => {
  const t = B.useContext(pn);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, ks = ({
  client: e,
  children: t
}) => (B.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ B.createElement(pn.Provider, { value: e }, t));
function mn(e, t) {
  window.dispatchEvent(new StorageEvent("storage", { key: e, newValue: t }));
}
const Pr = (e, t) => {
  const r = JSON.stringify(t);
  window.localStorage.setItem(e, r), mn(e, r);
}, Us = (e) => {
  window.localStorage.removeItem(e), mn(e, null);
}, Lr = (e) => window.localStorage.getItem(e), Bs = (e) => (window.addEventListener("storage", e), () => window.removeEventListener("storage", e)), qs = () => {
  throw Error("useLocalStorage is a client-only hook");
};
function zs(e, t) {
  const r = () => Lr(e), n = B.useSyncExternalStore(
    Bs,
    r,
    qs
  ), s = B.useCallback(
    (i) => {
      try {
        const o = typeof i == "function" ? i(JSON.parse(n)) : i;
        o == null ? Us(e) : Pr(e, o);
      } catch (o) {
        console.warn(o);
      }
    },
    [e, n]
  );
  return B.useEffect(() => {
    Lr(e) === null && typeof t < "u" && Pr(e, t);
  }, [e, t]), [n ? JSON.parse(n) : t, s];
}
const yn = () => zs("app-state-session"), Hs = () => {
  const [e, t] = yn();
  return () => t(e ? {
    ...e,
    locked: !0
  } : void 0);
};
function vn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Qs } = Object.prototype, { getPrototypeOf: pr } = Object, It = ((e) => (t) => {
  const r = Qs.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => It(t) === e), kt = (e) => (t) => typeof t === e, { isArray: ot } = Array, mt = kt("undefined");
function $s(e) {
  return e !== null && !mt(e) && e.constructor !== null && !mt(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wn = Oe("ArrayBuffer");
function Ks(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wn(e.buffer), t;
}
const Ws = kt("string"), ye = kt("function"), gn = kt("number"), Ut = (e) => e !== null && typeof e == "object", Js = (e) => e === !0 || e === !1, Ct = (e) => {
  if (It(e) !== "object")
    return !1;
  const t = pr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Gs = Oe("Date"), Vs = Oe("File"), Xs = Oe("Blob"), Ys = Oe("FileList"), Zs = (e) => Ut(e) && ye(e.pipe), ei = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = It(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, ti = Oe("URLSearchParams"), ri = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function gt(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), ot(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let u;
    for (n = 0; n < o; n++)
      u = i[n], t.call(null, e[u], u, e);
  }
}
function bn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const En = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), _n = (e) => !mt(e) && e !== En;
function sr() {
  const { caseless: e } = _n(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && bn(t, s) || s;
    Ct(t[i]) && Ct(n) ? t[i] = sr(t[i], n) : Ct(n) ? t[i] = sr({}, n) : ot(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && gt(arguments[n], r);
  return t;
}
const ni = (e, t, r, { allOwnKeys: n } = {}) => (gt(t, (s, i) => {
  r && ye(s) ? e[i] = vn(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), si = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ii = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, oi = (e, t, r, n) => {
  let s, i, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = r !== !1 && pr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ai = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ci = (e) => {
  if (!e)
    return null;
  if (ot(e))
    return e;
  let t = e.length;
  if (!gn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ui = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && pr(Uint8Array)), li = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, fi = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, hi = Oe("HTMLFormElement"), di = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Nr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), pi = Oe("RegExp"), Tn = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  gt(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, mi = (e) => {
  Tn(e, (t, r) => {
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
}, yi = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return ot(e) ? n(e) : n(String(e).split(t)), r;
}, vi = () => {
}, wi = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Vt = "abcdefghijklmnopqrstuvwxyz", Fr = "0123456789", On = {
  DIGIT: Fr,
  ALPHA: Vt,
  ALPHA_DIGIT: Vt + Vt.toUpperCase() + Fr
}, gi = (e = 16, t = On.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function bi(e) {
  return !!(e && ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ei = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Ut(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = ot(n) ? [] : {};
        return gt(n, (o, u) => {
          const g = r(o, s + 1);
          !mt(g) && (i[u] = g);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, _i = Oe("AsyncFunction"), Ti = (e) => e && (Ut(e) || ye(e)) && ye(e.then) && ye(e.catch), b = {
  isArray: ot,
  isArrayBuffer: wn,
  isBuffer: $s,
  isFormData: ei,
  isArrayBufferView: Ks,
  isString: Ws,
  isNumber: gn,
  isBoolean: Js,
  isObject: Ut,
  isPlainObject: Ct,
  isUndefined: mt,
  isDate: Gs,
  isFile: Vs,
  isBlob: Xs,
  isRegExp: pi,
  isFunction: ye,
  isStream: Zs,
  isURLSearchParams: ti,
  isTypedArray: ui,
  isFileList: Ys,
  forEach: gt,
  merge: sr,
  extend: ni,
  trim: ri,
  stripBOM: si,
  inherits: ii,
  toFlatObject: oi,
  kindOf: It,
  kindOfTest: Oe,
  endsWith: ai,
  toArray: ci,
  forEachEntry: li,
  matchAll: fi,
  isHTMLForm: hi,
  hasOwnProperty: Nr,
  hasOwnProp: Nr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Tn,
  freezeMethods: mi,
  toObjectSet: yi,
  toCamelCase: di,
  noop: vi,
  toFiniteNumber: wi,
  findKey: bn,
  global: En,
  isContextDefined: _n,
  ALPHABET: On,
  generateString: gi,
  isSpecCompliantForm: bi,
  toJSONObject: Ei,
  isAsyncFn: _i,
  isThenable: Ti
};
function H(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
b.inherits(H, Error, {
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
      config: b.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Rn = H.prototype, Cn = {};
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
Object.defineProperty(Rn, "isAxiosError", { value: !0 });
H.from = (e, t, r, n, s, i) => {
  const o = Object.create(Rn);
  return b.toFlatObject(e, o, function(g) {
    return g !== Error.prototype;
  }, (u) => u !== "isAxiosError"), H.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Oi = null;
function ir(e) {
  return b.isPlainObject(e) || b.isArray(e);
}
function Sn(e) {
  return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mr(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Sn(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Ri(e) {
  return b.isArray(e) && !e.some(ir);
}
const Ci = b.toFlatObject(b, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bt(e, t, r) {
  if (!b.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = b.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(T, w) {
    return !b.isUndefined(w[T]);
  });
  const n = r.metaTokens, s = r.visitor || l, i = r.dots, o = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && b.isSpecCompliantForm(t);
  if (!b.isFunction(s))
    throw new TypeError("visitor must be a function");
  function E(p) {
    if (p === null)
      return "";
    if (b.isDate(p))
      return p.toISOString();
    if (!g && b.isBlob(p))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return b.isArrayBuffer(p) || b.isTypedArray(p) ? g && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, T, w) {
    let O = p;
    if (p && !w && typeof p == "object") {
      if (b.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), p = JSON.stringify(p);
      else if (b.isArray(p) && Ri(p) || (b.isFileList(p) || b.endsWith(T, "[]")) && (O = b.toArray(p)))
        return T = Sn(T), O.forEach(function(M, A) {
          !(b.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Mr([T], A, i) : o === null ? T : T + "[]",
            E(M)
          );
        }), !1;
    }
    return ir(p) ? !0 : (t.append(Mr(w, T, i), E(p)), !1);
  }
  const y = [], P = Object.assign(Ci, {
    defaultVisitor: l,
    convertValue: E,
    isVisitable: ir
  });
  function _(p, T) {
    if (!b.isUndefined(p)) {
      if (y.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      y.push(p), b.forEach(p, function(O, L) {
        (!(b.isUndefined(O) || O === null) && s.call(
          t,
          O,
          b.isString(L) ? L.trim() : L,
          T,
          P
        )) === !0 && _(O, T ? T.concat(L) : [L]);
      }), y.pop();
    }
  }
  if (!b.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Dr(e) {
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
function mr(e, t) {
  this._pairs = [], e && Bt(e, this, t);
}
const xn = mr.prototype;
xn.append = function(t, r) {
  this._pairs.push([t, r]);
};
xn.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Dr);
  } : Dr;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Si(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function An(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Si, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = b.isURLSearchParams(t) ? t.toString() : new mr(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class xi {
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
    b.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const jr = xi, Pn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ai = typeof URLSearchParams < "u" ? URLSearchParams : mr, Pi = typeof FormData < "u" ? FormData : null, Li = typeof Blob < "u" ? Blob : null, Ni = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ai,
    FormData: Pi,
    Blob: Li
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ln = typeof window < "u" && typeof document < "u", Fi = ((e) => Ln && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Mi = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ln,
  hasStandardBrowserEnv: Fi,
  hasStandardBrowserWebWorkerEnv: Mi
}, Symbol.toStringTag, { value: "Module" })), Te = {
  ...Di,
  ...Ni
};
function ji(e, t) {
  return Bt(e, new Te.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return Te.isNode && b.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ii(e) {
  return b.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ki(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Nn(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    const u = Number.isFinite(+o), g = i >= r.length;
    return o = !o && b.isArray(s) ? s.length : o, g ? (b.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !b.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && b.isArray(s[o]) && (s[o] = ki(s[o])), !u);
  }
  if (b.isFormData(e) && b.isFunction(e.entries)) {
    const r = {};
    return b.forEachEntry(e, (n, s) => {
      t(Ii(n), s, r, 0);
    }), r;
  }
  return null;
}
function Ui(e, t, r) {
  if (b.isString(e))
    try {
      return (t || JSON.parse)(e), b.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const yr = {
  transitional: Pn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = b.isObject(t);
    if (i && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t))
      return s && s ? JSON.stringify(Nn(t)) : t;
    if (b.isArrayBuffer(t) || b.isBuffer(t) || b.isStream(t) || b.isFile(t) || b.isBlob(t))
      return t;
    if (b.isArrayBufferView(t))
      return t.buffer;
    if (b.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ji(t, this.formSerializer).toString();
      if ((u = b.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Bt(
          u ? { "files[]": t } : t,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), Ui(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || yr.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && b.isString(t) && (n && !this.responseType || s)) {
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
b.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  yr.headers[e] = {};
});
const vr = yr, Bi = b.toObjectSet([
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
]), qi = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && Bi[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ir = Symbol("internals");
function ct(e) {
  return e && String(e).trim().toLowerCase();
}
function St(e) {
  return e === !1 || e == null ? e : b.isArray(e) ? e.map(St) : String(e);
}
function zi(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Hi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xt(e, t, r, n, s) {
  if (b.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!b.isString(t)) {
    if (b.isString(n))
      return t.indexOf(n) !== -1;
    if (b.isRegExp(n))
      return n.test(t);
  }
}
function Qi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function $i(e, t) {
  const r = b.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class qt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(u, g, E) {
      const l = ct(g);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const y = b.findKey(s, l);
      (!y || s[y] === void 0 || E === !0 || E === void 0 && s[y] !== !1) && (s[y || g] = St(u));
    }
    const o = (u, g) => b.forEach(u, (E, l) => i(E, l, g));
    return b.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : b.isString(t) && (t = t.trim()) && !Hi(t) ? o(qi(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = ct(t), t) {
      const n = b.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return zi(s);
        if (b.isFunction(r))
          return r.call(this, s, n);
        if (b.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = ct(t), t) {
      const n = b.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Xt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = ct(o), o) {
        const u = b.findKey(n, o);
        u && (!r || Xt(n, n[u], u, r)) && (delete n[u], s = !0);
      }
    }
    return b.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Xt(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return b.forEach(this, (s, i) => {
      const o = b.findKey(n, i);
      if (o) {
        r[o] = St(s), delete r[i];
        return;
      }
      const u = t ? Qi(i) : String(i).trim();
      u !== i && delete r[i], r[u] = St(s), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return b.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && b.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Ir] = this[Ir] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const u = ct(o);
      n[u] || ($i(s, o), n[u] = !0);
    }
    return b.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
qt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
b.reduceDescriptors(qt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
b.freezeMethods(qt);
const xe = qt;
function Yt(e, t) {
  const r = this || vr, n = t || r, s = xe.from(n.headers);
  let i = n.data;
  return b.forEach(e, function(u) {
    i = u.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Fn(e) {
  return !!(e && e.__CANCEL__);
}
function bt(e, t, r) {
  H.call(this, e ?? "canceled", H.ERR_CANCELED, t, r), this.name = "CanceledError";
}
b.inherits(bt, H, {
  __CANCEL__: !0
});
function Ki(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new H(
    "Request failed with status code " + r.status,
    [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Wi = Te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, s, i, o, u) {
        const g = [];
        g.push(r + "=" + encodeURIComponent(n)), b.isNumber(s) && g.push("expires=" + new Date(s).toGMTString()), b.isString(i) && g.push("path=" + i), b.isString(o) && g.push("domain=" + o), u === !0 && g.push("secure"), document.cookie = g.join("; ");
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
function Ji(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Gi(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mn(e, t) {
  return e && !Ji(t) ? Gi(e, t) : t;
}
const Vi = Te.hasStandardBrowserEnv ? (
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
      const u = b.isString(o) ? s(o) : o;
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
function Xi(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Yi(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(g) {
    const E = Date.now(), l = n[i];
    o || (o = E), r[s] = g, n[s] = E;
    let y = i, P = 0;
    for (; y !== s; )
      P += r[y++], y = y % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), E - o < t)
      return;
    const _ = l && E - l;
    return _ ? Math.round(P * 1e3 / _) : void 0;
  };
}
function kr(e, t) {
  let r = 0;
  const n = Yi(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, u = i - r, g = n(u), E = i <= o;
    r = i;
    const l = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: u,
      rate: g || void 0,
      estimated: g && o && E ? (o - i) / g : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Zi = typeof XMLHttpRequest < "u", eo = Zi && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = xe.from(e.headers).normalize(), o = e.responseType;
    let u;
    function g() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let E;
    if (b.isFormData(s)) {
      if (Te.hasStandardBrowserEnv || Te.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((E = i.getContentType()) !== !1) {
        const [p, ...T] = E ? E.split(";").map((w) => w.trim()).filter(Boolean) : [];
        i.setContentType([p || "multipart/form-data", ...T].join("; "));
      }
    }
    let l = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(p + ":" + T));
    }
    const y = Mn(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), An(y, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function P() {
      if (!l)
        return;
      const p = xe.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), w = {
        data: !o || o === "text" || o === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: p,
        config: e,
        request: l
      };
      Ki(function(L) {
        r(L), g();
      }, function(L) {
        n(L), g();
      }, w), l = null;
    }
    if ("onloadend" in l ? l.onloadend = P : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(P);
    }, l.onabort = function() {
      l && (n(new H("Request aborted", H.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      n(new H("Network Error", H.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let T = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const w = e.transitional || Pn;
      e.timeoutErrorMessage && (T = e.timeoutErrorMessage), n(new H(
        T,
        w.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
        e,
        l
      )), l = null;
    }, Te.hasStandardBrowserEnv) {
      const p = Vi(y) && e.xsrfCookieName && Wi.read(e.xsrfCookieName);
      p && i.set(e.xsrfHeaderName, p);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in l && b.forEach(i.toJSON(), function(T, w) {
      l.setRequestHeader(w, T);
    }), b.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), o && o !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", kr(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", kr(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (p) => {
      l && (n(!p || p.type ? new bt(null, e, l) : p), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const _ = Xi(y);
    if (_ && Te.protocols.indexOf(_) === -1) {
      n(new H("Unsupported protocol " + _ + ":", H.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(s || null);
  });
}, or = {
  http: Oi,
  xhr: eo
};
b.forEach(or, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ur = (e) => `- ${e}`, to = (e) => b.isFunction(e) || e === null || e === !1, Dn = {
  getAdapter: (e) => {
    e = b.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !to(r) && (n = or[(o = String(r)).toLowerCase()], n === void 0))
        throw new H(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([u, g]) => `adapter ${u} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Ur).join(`
`) : " " + Ur(i[0]) : "as no adapter specified";
      throw new H(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: or
};
function Zt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new bt(null, e);
}
function Br(e) {
  return Zt(e), e.headers = xe.from(e.headers), e.data = Yt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Dn.getAdapter(e.adapter || vr.adapter)(e).then(function(n) {
    return Zt(e), n.data = Yt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = xe.from(n.headers), n;
  }, function(n) {
    return Fn(n) || (Zt(e), n && n.response && (n.response.data = Yt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = xe.from(n.response.headers))), Promise.reject(n);
  });
}
const qr = (e) => e instanceof xe ? e.toJSON() : e;
function it(e, t) {
  t = t || {};
  const r = {};
  function n(E, l, y) {
    return b.isPlainObject(E) && b.isPlainObject(l) ? b.merge.call({ caseless: y }, E, l) : b.isPlainObject(l) ? b.merge({}, l) : b.isArray(l) ? l.slice() : l;
  }
  function s(E, l, y) {
    if (b.isUndefined(l)) {
      if (!b.isUndefined(E))
        return n(void 0, E, y);
    } else
      return n(E, l, y);
  }
  function i(E, l) {
    if (!b.isUndefined(l))
      return n(void 0, l);
  }
  function o(E, l) {
    if (b.isUndefined(l)) {
      if (!b.isUndefined(E))
        return n(void 0, E);
    } else
      return n(void 0, l);
  }
  function u(E, l, y) {
    if (y in t)
      return n(E, l);
    if (y in e)
      return n(void 0, E);
  }
  const g = {
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
    headers: (E, l) => s(qr(E), qr(l), !0)
  };
  return b.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const y = g[l] || s, P = y(e[l], t[l], l);
    b.isUndefined(P) && y !== u || (r[l] = P);
  }), r;
}
const jn = "1.6.1", wr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wr[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const zr = {};
wr.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + jn + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, u) => {
    if (t === !1)
      throw new H(
        s(o, " has been removed" + (r ? " in " + r : "")),
        H.ERR_DEPRECATED
      );
    return r && !zr[o] && (zr[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, u) : !0;
  };
};
function ro(e, t, r) {
  if (typeof e != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const u = e[i], g = u === void 0 || o(u, i, e);
      if (g !== !0)
        throw new H("option " + i + " must be " + g, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new H("Unknown option " + i, H.ERR_BAD_OPTION);
  }
}
const ar = {
  assertOptions: ro,
  validators: wr
}, Ae = ar.validators;
class Pt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new jr(),
      response: new jr()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = it(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && ar.assertOptions(n, {
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), s != null && (b.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ar.assertOptions(s, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && b.merge(
      i.common,
      i[r.method]
    );
    i && b.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), r.headers = xe.concat(o, i);
    const u = [];
    let g = !0;
    this.interceptors.request.forEach(function(T) {
      typeof T.runWhen == "function" && T.runWhen(r) === !1 || (g = g && T.synchronous, u.unshift(T.fulfilled, T.rejected));
    });
    const E = [];
    this.interceptors.response.forEach(function(T) {
      E.push(T.fulfilled, T.rejected);
    });
    let l, y = 0, P;
    if (!g) {
      const p = [Br.bind(this), void 0];
      for (p.unshift.apply(p, u), p.push.apply(p, E), P = p.length, l = Promise.resolve(r); y < P; )
        l = l.then(p[y++], p[y++]);
      return l;
    }
    P = u.length;
    let _ = r;
    for (y = 0; y < P; ) {
      const p = u[y++], T = u[y++];
      try {
        _ = p(_);
      } catch (w) {
        T.call(this, w);
        break;
      }
    }
    try {
      l = Br.call(this, _);
    } catch (p) {
      return Promise.reject(p);
    }
    for (y = 0, P = E.length; y < P; )
      l = l.then(E[y++], E[y++]);
    return l;
  }
  getUri(t) {
    t = it(this.defaults, t);
    const r = Mn(t.baseURL, t.url);
    return An(r, t.params, t.paramsSerializer);
  }
}
b.forEach(["delete", "get", "head", "options"], function(t) {
  Pt.prototype[t] = function(r, n) {
    return this.request(it(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
b.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, u) {
      return this.request(it(u || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Pt.prototype[t] = r(), Pt.prototype[t + "Form"] = r(!0);
});
const xt = Pt;
class gr {
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
      n.reason || (n.reason = new bt(i, o, u), r(n.reason));
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
      token: new gr(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const no = gr;
function so(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function io(e) {
  return b.isObject(e) && e.isAxiosError === !0;
}
const cr = {
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
Object.entries(cr).forEach(([e, t]) => {
  cr[t] = e;
});
const oo = cr;
function In(e) {
  const t = new xt(e), r = vn(xt.prototype.request, t);
  return b.extend(r, xt.prototype, t, { allOwnKeys: !0 }), b.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return In(it(e, s));
  }, r;
}
const X = In(vr);
X.Axios = xt;
X.CanceledError = bt;
X.CancelToken = no;
X.isCancel = Fn;
X.VERSION = jn;
X.toFormData = Bt;
X.AxiosError = H;
X.Cancel = X.CanceledError;
X.all = function(t) {
  return Promise.all(t);
};
X.spread = so;
X.isAxiosError = io;
X.mergeConfig = it;
X.AxiosHeaders = xe;
X.formToJSON = (e) => Nn(b.isHTMLForm(e) ? new FormData(e) : e);
X.getAdapter = Dn.getAdapter;
X.HttpStatusCode = oo;
X.default = X;
const Hr = X, kn = z.createContext(null), Mo = () => z.useContext(kn), ao = ({
  children: e,
  baseURL: t
}) => {
  const [r, n] = yn(), s = Hs(), i = B.useMemo(() => {
    const o = Hr.create({
      baseURL: t,
      headers: {
        Authorization: r ? `Bearer ${r.access_token}` : void 0,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    return o.interceptors.response.use((u) => u, async (u) => {
      var E;
      const g = u.config;
      if (r && ((E = u.response) == null ? void 0 : E.status) === 401 && !g._retry) {
        g._retry = !0, st.setOnline(!1);
        try {
          const {
            data: {
              data: l
            }
          } = await Hr.post("/api/user/refresh", {
            refresh_token: r.refresh_token
          }, {
            baseURL: t,
            headers: {
              Authorization: `Bearer ${r.access_token}`,
              "X-Requested-With": "XMLHttpRequest"
            }
          });
          return n(l), g.headers.Authorization = `Bearer ${l.access_token}`, o(g);
        } catch {
          W.warn("Сессия истекла", {
            toastId: "session-stale"
          }), s();
        } finally {
          st.setOnline(!0);
        }
      }
      throw u;
    }), o;
  }, [t, r, n, s]);
  return /* @__PURE__ */ V(kn.Provider, { value: {
    client: i
  }, children: e });
};
var ur = {};
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
})(ur);
const co = [{
  id: "users",
  path: "/users",
  component: () => import("./UsersList-84a1ba6c.js"),
  windowOptions: {
    icon: ur.faUsers,
    title: "Пользователи",
    width: 800
  },
  shortcut: {
    title: "Пользователи",
    icon: ur.faUsers,
    group: "fourth",
    order: 100
  }
  // notExposeToLibrary: true,
}];
var Un = {};
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
})(Un);
const uo = [{
  id: "program-docs",
  path: "/program-docs",
  component: () => import("./ProgramDocsList-724a232c.js"),
  windowOptions: {
    title: "Конструктор документов программ",
    width: 700,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Конструктор документов программ",
    icon: Un.faCode,
    color: "#ef4444",
    group: "general",
    order: 1e3
  }
}, {
  id: "program-docs-constructor",
  path: "/program-docs/constructor/:id",
  component: () => import("./ProgramConstructor-db0dc971.js"),
  windowOptions: {
    title: "Конструктор программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}, {
  id: "program-docs-draft",
  path: "/program-docs/draft",
  component: () => import("./Draft-2c37129e.js"),
  windowOptions: {
    title: "Черновик программы",
    width: 700,
    height: 500,
    maximized: !0
  }
}], Bn = [...uo, ...co], qn = z.createContext(null), lo = () => {
  const e = z.useContext(qn);
  if (!e)
    throw new Error("useRouteContext must be used within a RouteContextProvider");
  return e;
}, fo = ({
  children: e,
  routes: t
}) => /* @__PURE__ */ V(qn.Provider, { value: {
  routes: t
}, children: e }), ho = new Is({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    },
    mutations: {
      retry: !1
    }
  }
}), po = Jn({
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
}), mo = ({
  children: e
}) => /* @__PURE__ */ V(Gn, { theme: po, children: /* @__PURE__ */ V(ao, { children: /* @__PURE__ */ V(ks, { client: ho, children: /* @__PURE__ */ V(fo, { routes: Bn, children: e }) }) }) }), yo = () => {
  const {
    routes: e
  } = lo();
  return e;
};
var zn = {};
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
})(zn);
const vo = ({
  children: e,
  spinning: t = !0
}) => t ? /* @__PURE__ */ lr("div", { css: {
  position: "relative",
  height: "100%",
  width: "100%",
  cursor: "wait"
}, children: [
  /* @__PURE__ */ V("div", { css: {
    opacity: "0.3",
    "--tw-grayscale": "grayscale(100%)",
    filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)"
  }, children: e }),
  t && /* @__PURE__ */ V("div", { css: {
    position: "absolute",
    left: "0px",
    top: "0px",
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(229 231 235 / 0.3)"
  }, children: /* @__PURE__ */ V(Xn, { icon: zn.faCircleNotch, css: [{
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, tn`
                font-size: 32px;
              `], spin: !0 }) })
] }) : e, wo = ({
  id: e
}) => {
  const t = yo(), r = B.useMemo(() => {
    const {
      component: n,
      ...s
    } = t.find((i) => i.id === e) || {};
    if (!n)
      throw new Error(`Route with id ${e} not found`);
    return {
      ...s,
      Component: B.lazy(() => n())
    };
  }, [e, t]);
  return /* @__PURE__ */ V(B.Suspense, { fallback: /* @__PURE__ */ V(vo, {}), children: /* @__PURE__ */ V(r.Component, {}) });
}, Hn = z.createContext(null), Do = () => {
  const e = z.useContext(Hn);
  if (!e)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return e;
}, go = ({
  children: e,
  ...t
}) => {
  const [r, n] = z.useState();
  return /* @__PURE__ */ V(Hn.Provider, { value: {
    ...t,
    state: r,
    setState: n
  }, children: e });
}, bo = ({
  el: e,
  match: t,
  window: r
}) => rn.createPortal(/* @__PURE__ */ V(go, { width: 0, height: 0, title: "", position: {
  x: 0,
  y: 0
}, maximized: !0, folded: !0, focused: !0, params: t.params, focus: () => r.focus(), blur: () => r.blur(), maximize: () => r.maximize(), minimize: () => r.restore(), fold: () => r.minimize(), close: () => r.close(), updatePosition: ({
  x: n,
  y: s
}) => r.showAt(n, s), setTitle: (n) => r.setTitle(n), setWidth: (n) => r.setWidth(n), setHeight: (n) => r.setHeight(n), children: /* @__PURE__ */ V(wo, { id: t.route.id }) }), e), Eo = ({
  eventEmitter: e
}) => {
  const [t, r] = z.useState([]);
  return z.useEffect(() => (e.on("add", (n, s, i) => {
    r((o) => [...o, {
      el: n,
      match: s,
      window: i
    }]);
  }), e.on("destroy", (n) => {
    r((s) => s.filter((i) => i.el !== n));
  }), () => {
    e.removeAllListeners("add"), e.removeAllListeners("destroy");
  }), [e]), /* @__PURE__ */ lr(mo, { children: [
    /* @__PURE__ */ V(ws, {}),
    t.map((n) => /* @__PURE__ */ V(bo, { ...n }, n.match.route.id))
  ] });
};
var Qn = { exports: {} };
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
    }, i = 10, o = typeof process == "object" && typeof process.nextTick == "function", u = typeof Symbol == "function", g = typeof Reflect == "object", E = typeof setImmediate == "function", l = E ? setImmediate : setTimeout, y = u ? g && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(a) {
      var c = Object.getOwnPropertyNames(a);
      return c.push.apply(c, Object.getOwnPropertySymbols(a)), c;
    } : Object.keys;
    function P() {
      this._events = {}, this._conf && _.call(this, this._conf);
    }
    function _(a) {
      a && (this._conf = a, a.delimiter && (this.delimiter = a.delimiter), a.maxListeners !== r && (this._maxListeners = a.maxListeners), a.wildcard && (this.wildcard = a.wildcard), a.newListener && (this._newListener = a.newListener), a.removeListener && (this._removeListener = a.removeListener), a.verboseMemoryLeak && (this.verboseMemoryLeak = a.verboseMemoryLeak), a.ignoreErrors && (this.ignoreErrors = a.ignoreErrors), this.wildcard && (this.listenerTree = {}));
    }
    function p(a, c) {
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
    function w(a, c) {
      for (var f = {}, h, d = a.length, v = c ? c.length : 0, R = 0; R < d; R++)
        h = a[R], f[h] = R < v ? c[R] : r;
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
      var v = a._observers;
      v ? v.push(this) : a._observers = [this];
    }
    Object.assign(O.prototype, {
      subscribe: function(a, c, f) {
        var h = this, d = this._target, v = this._emitter, R = this._listeners, x = function() {
          var C = T.apply(null, arguments), S = {
            data: C,
            name: c,
            original: a
          };
          if (f) {
            var N = f.call(d, S);
            N !== !1 && v.emit.apply(v, [S.name].concat(C));
            return;
          }
          v.emit.apply(v, [c].concat(C));
        };
        if (R[a])
          throw Error("Event '" + a + "' is already listening");
        this._listenersCount++, v._newListener && v._removeListener && !h._onNewListener ? (this._onNewListener = function(C) {
          C === c && R[a] === null && (R[a] = x, h._on.call(d, a, x));
        }, v.on("newListener", this._onNewListener), this._onRemoveListener = function(C) {
          C === c && !v.hasListeners(C) && R[a] && (R[a] = null, h._off.call(d, a, x));
        }, R[a] = null, v.on("removeListener", this._onRemoveListener)) : (R[a] = x, h._on.call(d, a, x));
      },
      unsubscribe: function(a) {
        var c = this, f = this._listeners, h = this._emitter, d, v, R = this._off, x = this._target, C;
        if (a && typeof a != "string")
          throw TypeError("event must be a string");
        function S() {
          c._onNewListener && (h.off("newListener", c._onNewListener), h.off("removeListener", c._onRemoveListener), c._onNewListener = null, c._onRemoveListener = null);
          var N = I.call(h, c);
          h._observers.splice(N, 1);
        }
        if (a) {
          if (d = f[a], !d)
            return;
          R.call(x, a, d), delete f[a], --this._listenersCount || S();
        } else {
          for (v = y(f), C = v.length; C-- > 0; )
            a = v[C], R.call(x, a, f[a]);
          this._listeners = {}, this._listenersCount = 0, S();
        }
      }
    });
    function L(a, c, f, h) {
      var d = Object.assign({}, c);
      if (!a)
        return d;
      if (typeof a != "object")
        throw TypeError("options must be an object");
      var v = Object.keys(a), R = v.length, x, C, S;
      function N(Q) {
        throw Error('Invalid "' + x + '" option value' + (Q ? ". Reason: " + Q : ""));
      }
      for (var ee = 0; ee < R; ee++) {
        if (x = v[ee], !h && !n.call(c, x))
          throw Error('Unknown "' + x + '" option');
        C = a[x], C !== r && (S = f[x], d[x] = S ? S(C, N) : C);
      }
      return d;
    }
    function M(a, c) {
      return (typeof a != "function" || !a.hasOwnProperty("prototype")) && c("value must be a constructor"), a;
    }
    function A(a) {
      var c = "value must be type of " + a.join("|"), f = a.length, h = a[0], d = a[1];
      return f === 1 ? function(v, R) {
        if (typeof v === h)
          return v;
        R(c);
      } : f === 2 ? function(v, R) {
        var x = typeof v;
        if (x === h || x === d)
          return v;
        R(c);
      } : function(v, R) {
        for (var x = typeof v, C = f; C-- > 0; )
          if (x === a[C])
            return v;
        R(c);
      };
    }
    var D = A(["function"]), q = A(["object", "function"]);
    function K(a, c, f) {
      var h, d, v = 0, R, x = new a(function(C, S, N) {
        f = L(f, {
          timeout: 0,
          overload: !1
        }, {
          timeout: function(J, se) {
            return J *= 1, (typeof J != "number" || J < 0 || !Number.isFinite(J)) && se("timeout must be a positive number"), J;
          }
        }), h = !f.overload && typeof a.prototype.cancel == "function" && typeof N == "function";
        function ee() {
          d && (d = null), v && (clearTimeout(v), v = 0);
        }
        var Q = function(J) {
          ee(), C(J);
        }, $ = function(J) {
          ee(), S(J);
        };
        h ? c(Q, $, N) : (d = [function(J) {
          $(J || Error("canceled"));
        }], c(Q, $, function(J) {
          if (R)
            throw Error("Unable to subscribe on cancel event asynchronously");
          if (typeof J != "function")
            throw TypeError("onCancel callback must be a function");
          d.push(J);
        }), R = !0), f.timeout > 0 && (v = setTimeout(function() {
          var J = Error("timeout");
          J.code = "ETIMEDOUT", v = 0, x.cancel(J), S(J);
        }, f.timeout));
      });
      return h || (x.cancel = function(C) {
        if (d) {
          for (var S = d.length, N = 1; N < S; N++)
            d[N](C);
          d[0](C), d = null;
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
    function k(a, c, f, h, d) {
      if (!f)
        return null;
      if (h === 0) {
        var v = typeof c;
        if (v === "string") {
          var R, x, C = 0, S = 0, N = this.delimiter, ee = N.length;
          if ((x = c.indexOf(N)) !== -1) {
            R = new Array(5);
            do
              R[C++] = c.slice(S, x), S = x + ee;
            while ((x = c.indexOf(N, S)) !== -1);
            R[C++] = c.slice(S), c = R, d = C;
          } else
            c = [c], d = 1;
        } else
          v === "object" ? d = c.length : (c = [c], d = 1);
      }
      var Q = null, $, J, se, zt, Ht, at = c[h], Qt = c[h + 1], Re, oe;
      if (h === d)
        f._listeners && (typeof f._listeners == "function" ? (a && a.push(f._listeners), Q = [f]) : (a && a.push.apply(a, f._listeners), Q = [f]));
      else if (at === "*") {
        for (Re = y(f), x = Re.length; x-- > 0; )
          $ = Re[x], $ !== "_listeners" && (oe = k(a, c, f[$], h + 1, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else if (at === "**") {
        for (Ht = h + 1 === d || h + 2 === d && Qt === "*", Ht && f._listeners && (Q = k(a, c, f, d, d)), Re = y(f), x = Re.length; x-- > 0; )
          $ = Re[x], $ !== "_listeners" && ($ === "*" || $ === "**" ? (f[$]._listeners && !Ht && (oe = k(a, c, f[$], d, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe)), oe = k(a, c, f[$], h, d)) : $ === Qt ? oe = k(a, c, f[$], h + 2, d) : oe = k(a, c, f[$], h, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else
        f[at] && (Q = k(a, c, f[at], h + 1, d));
      if (J = f["*"], J && k(a, c, J, h + 1, d), se = f["**"], se)
        if (h < d)
          for (se._listeners && k(a, c, se, d, d), Re = y(se), x = Re.length; x-- > 0; )
            $ = Re[x], $ !== "_listeners" && ($ === Qt ? k(a, c, se[$], h + 2, d) : $ === at ? k(a, c, se[$], h + 1, d) : (zt = {}, zt[$] = se[$], k(a, c, { "**": zt }, h + 1, d)));
        else
          se._listeners ? k(a, c, se, d, d) : se["*"] && se["*"]._listeners && k(a, c, se["*"], d, d);
      return Q;
    }
    function le(a, c, f) {
      var h = 0, d = 0, v, R = this.delimiter, x = R.length, C;
      if (typeof a == "string")
        if ((v = a.indexOf(R)) !== -1) {
          C = new Array(5);
          do
            C[h++] = a.slice(d, v), d = v + x;
          while ((v = a.indexOf(R, d)) !== -1);
          C[h++] = a.slice(d);
        } else
          C = [a], h = 1;
      else
        C = a, h = a.length;
      if (h > 1) {
        for (v = 0; v + 1 < h; v++)
          if (C[v] === "**" && C[v + 1] === "**")
            return;
      }
      var S = this.listenerTree, N;
      for (v = 0; v < h; v++)
        if (N = C[v], S = S[N] || (S[N] = {}), v === h - 1)
          return S._listeners ? (typeof S._listeners == "function" && (S._listeners = [S._listeners]), f ? S._listeners.unshift(c) : S._listeners.push(c), !S._listeners.warned && this._maxListeners > 0 && S._listeners.length > this._maxListeners && (S._listeners.warned = !0, p.call(this, S._listeners.length, N))) : S._listeners = c, !0;
      return !0;
    }
    function ge(a, c, f, h) {
      for (var d = y(a), v = d.length, R, x, C, S = a._listeners, N; v-- > 0; )
        x = d[v], R = a[x], x === "_listeners" ? C = f : C = f ? f.concat(x) : [x], N = h || typeof x == "symbol", S && c.push(N ? C : C.join(this.delimiter)), typeof R == "object" && ge.call(this, R, c, C, N);
      return c;
    }
    function te(a) {
      for (var c = y(a), f = c.length, h, d, v; f-- > 0; )
        d = c[f], h = a[d], h && (v = !0, d !== "_listeners" && !te(h) && delete a[d]);
      return v;
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
        var h = f.async, d = f.promisify, v = f.nextTick, R = f.objectify;
      }
      if (h || v || d) {
        var x = c, C = c._origin || c;
        if (v && !o)
          throw Error("process.nextTick is not supported");
        d === r && (d = c.constructor.name === "AsyncFunction"), c = function() {
          var S = arguments, N = this, ee = this.event;
          return d ? v ? Promise.resolve() : new Promise(function(Q) {
            l(Q);
          }).then(function() {
            return N.event = ee, x.apply(N, S);
          }) : (v ? process.nextTick : l)(function() {
            N.event = ee, x.apply(N, S);
          });
        }, c._async = !0, c._origin = C;
      }
      return [c, R ? new fe(this, a, c) : this];
    }
    function j(a) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, _.call(this, a);
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
        reducers: q
      });
      function d(v) {
        if (typeof v != "object")
          throw TypeError("events must be an object");
        var R = f.reducers, x = I.call(h, a), C;
        x === -1 ? C = new O(h, a, f) : C = h._observers[x];
        for (var S = y(v), N = S.length, ee, Q = typeof R == "function", $ = 0; $ < N; $++)
          ee = S[$], C.subscribe(
            ee,
            v[ee] || ee,
            Q ? R : R && R[ee]
          );
      }
      return s(c) ? d(w(c)) : d(typeof c == "string" ? w(c.split(/\s+/)) : c), this;
    }, j.prototype.stopListeningTo = function(a, c) {
      var f = this._observers;
      if (!f)
        return !1;
      var h = f.length, d, v = !1;
      if (a && typeof a != "object")
        throw TypeError("target should be an object");
      for (; h-- > 0; )
        d = f[h], (!a || d._target === a) && (d.unsubscribe(c), v = !0);
      return v;
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
      var v = this;
      if (typeof f != "function")
        throw new Error("many only accepts instances of Function");
      function R() {
        return --c === 0 && v.off(a, R), f.apply(this, arguments);
      }
      return R._origin = f, this._on(a, R, h, d);
    }, j.prototype.emit = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || P.call(this);
      var a = arguments[0], c, f = this.wildcard, h, d, v, R, x;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return !1;
      if (f && (c = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (d = a.length, u) {
          for (v = 0; v < d; v++)
            if (typeof a[v] == "symbol") {
              x = !0;
              break;
            }
        }
        x || (a = a.join(this.delimiter));
      }
      var C = arguments.length, S;
      if (this._all && this._all.length)
        for (S = this._all.slice(), v = 0, d = S.length; v < d; v++)
          switch (this.event = a, C) {
            case 1:
              S[v].call(this, a);
              break;
            case 2:
              S[v].call(this, a, arguments[1]);
              break;
            case 3:
              S[v].call(this, a, arguments[1], arguments[2]);
              break;
            default:
              S[v].apply(this, arguments);
          }
      if (f)
        S = [], k.call(this, S, c, this.listenerTree, 0, d);
      else if (S = this._events[a], typeof S == "function") {
        switch (this.event = a, C) {
          case 1:
            S.call(this);
            break;
          case 2:
            S.call(this, arguments[1]);
            break;
          case 3:
            S.call(this, arguments[1], arguments[2]);
            break;
          default:
            for (h = new Array(C - 1), R = 1; R < C; R++)
              h[R - 1] = arguments[R];
            S.apply(this, h);
        }
        return !0;
      } else
        S && (S = S.slice());
      if (S && S.length) {
        if (C > 3)
          for (h = new Array(C - 1), R = 1; R < C; R++)
            h[R - 1] = arguments[R];
        for (v = 0, d = S.length; v < d; v++)
          switch (this.event = a, C) {
            case 1:
              S[v].call(this);
              break;
            case 2:
              S[v].call(this, arguments[1]);
              break;
            case 3:
              S[v].call(this, arguments[1], arguments[2]);
              break;
            default:
              S[v].apply(this, h);
          }
        return !0;
      } else if (!this.ignoreErrors && !this._all && a === "error")
        throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all;
    }, j.prototype.emitAsync = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || P.call(this);
      var a = arguments[0], c = this.wildcard, f, h, d, v, R, x;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return Promise.resolve([!1]);
      if (c && (f = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (v = a.length, u) {
          for (R = 0; R < v; R++)
            if (typeof a[R] == "symbol") {
              h = !0;
              break;
            }
        }
        h || (a = a.join(this.delimiter));
      }
      var C = [], S = arguments.length, N;
      if (this._all)
        for (R = 0, v = this._all.length; R < v; R++)
          switch (this.event = a, S) {
            case 1:
              C.push(this._all[R].call(this, a));
              break;
            case 2:
              C.push(this._all[R].call(this, a, arguments[1]));
              break;
            case 3:
              C.push(this._all[R].call(this, a, arguments[1], arguments[2]));
              break;
            default:
              C.push(this._all[R].apply(this, arguments));
          }
      if (c ? (N = [], k.call(this, N, f, this.listenerTree, 0)) : N = this._events[a], typeof N == "function")
        switch (this.event = a, S) {
          case 1:
            C.push(N.call(this));
            break;
          case 2:
            C.push(N.call(this, arguments[1]));
            break;
          case 3:
            C.push(N.call(this, arguments[1], arguments[2]));
            break;
          default:
            for (d = new Array(S - 1), x = 1; x < S; x++)
              d[x - 1] = arguments[x];
            C.push(N.apply(this, d));
        }
      else if (N && N.length) {
        if (N = N.slice(), S > 3)
          for (d = new Array(S - 1), x = 1; x < S; x++)
            d[x - 1] = arguments[x];
        for (R = 0, v = N.length; R < v; R++)
          switch (this.event = a, S) {
            case 1:
              C.push(N[R].call(this));
              break;
            case 2:
              C.push(N[R].call(this, arguments[1]));
              break;
            case 3:
              C.push(N[R].call(this, arguments[1], arguments[2]));
              break;
            default:
              C.push(N[R].apply(this, d));
          }
      } else if (!this.ignoreErrors && !this._all && a === "error")
        return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
      return Promise.all(C);
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
      this._events || P.call(this);
      var d = this, v;
      return h !== r && (v = re.call(this, a, c, h), c = v[0], d = v[1]), this._newListener && this.emit("newListener", a, c), this.wildcard ? (le.call(this, a, c, f), d) : (this._events[a] ? (typeof this._events[a] == "function" && (this._events[a] = [this._events[a]]), f ? this._events[a].unshift(c) : this._events[a].push(c), !this._events[a].warned && this._maxListeners > 0 && this._events[a].length > this._maxListeners && (this._events[a].warned = !0, p.call(this, this._events[a].length, a))) : this._events[a] = c, d);
    }, j.prototype.off = function(a, c) {
      if (typeof c != "function")
        throw new Error("removeListener only takes instances of Function");
      var f, h = [];
      if (this.wildcard) {
        var d = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        if (h = k.call(this, null, d, this.listenerTree, 0), !h)
          return this;
      } else {
        if (!this._events[a])
          return this;
        f = this._events[a], h.push({ _listeners: f });
      }
      for (var v = 0; v < h.length; v++) {
        var R = h[v];
        if (f = R._listeners, s(f)) {
          for (var x = -1, C = 0, S = f.length; C < S; C++)
            if (f[C] === c || f[C].listener && f[C].listener === c || f[C]._origin && f[C]._origin === c) {
              x = C;
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
        return !this._events || P.call(this), this;
      if (this.wildcard) {
        var c = k.call(this, null, a, this.listenerTree, 0), f, h;
        if (!c)
          return this;
        for (h = 0; h < c.length; h++)
          f = c[h], f._listeners = null;
        this.listenerTree && te(this.listenerTree);
      } else
        this._events && (this._events[a] = null);
      return this;
    }, j.prototype.listeners = function(a) {
      var c = this._events, f, h, d, v, R;
      if (a === r) {
        if (this.wildcard)
          throw Error("event name required for wildcard emitter");
        if (!c)
          return [];
        for (f = y(c), v = f.length, d = []; v-- > 0; )
          h = c[f[v]], typeof h == "function" ? d.push(h) : d.push.apply(d, h);
        return d;
      } else {
        if (this.wildcard) {
          if (R = this.listenerTree, !R)
            return [];
          var x = [], C = typeof a == "string" ? a.split(this.delimiter) : a.slice();
          return k.call(this, x, C, R, 0), x;
        }
        return c ? (h = c[a], h ? typeof h == "function" ? [h] : h : []) : [];
      }
    }, j.prototype.eventNames = function(a) {
      var c = this._events;
      return this.wildcard ? ge.call(this, this.listenerTree, [], null, a) : c ? y(c) : [];
    }, j.prototype.listenerCount = function(a) {
      return this.listeners(a).length;
    }, j.prototype.hasListeners = function(a) {
      if (this.wildcard) {
        var c = [], f = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        return k.call(this, c, f, this.listenerTree, 0), c.length > 0;
      }
      var h = this._events, d = this._all;
      return !!(d && d.length || h && (a === r ? y(h).length : h[a]));
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
      }), K(c.Promise, function(d, v, R) {
        function x() {
          var C = c.filter;
          if (!(C && !C.apply(f, arguments)))
            if (f.off(a, x), c.handleError) {
              var S = arguments[0];
              S ? v(S) : d(T.apply(null, arguments).slice(1));
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
      return K(h, function(d, v, R) {
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
        var C = function() {
          S && a.removeListener("error", S), d(T.apply(null, arguments));
        }, S;
        c !== "error" && (S = function(N) {
          a.removeListener(c, C), v(N);
        }, a.once("error", S)), R(function() {
          S && a.removeListener("error", S), a.removeListener(c, C);
        }), a.once(c, C);
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
})(Qn);
var _o = Qn.exports;
const To = /* @__PURE__ */ Vn(_o);
var nt, Se, He, Lt, $n, Nt, Kn;
class Oo {
  constructor(t) {
    U(this, Lt);
    U(this, Nt);
    U(this, nt, []);
    U(this, Se, void 0);
    U(this, He, void 0);
    F(this, nt, as(t)), F(this, Se, G(this, Lt, $n).call(this)), F(this, He, new To()), G(this, Nt, Kn).call(this);
  }
  match(t) {
    const r = cs(m(this, nt), t);
    if (r)
      return {
        windowOptions: r.route.windowOptions,
        renderComponent: (n, s) => m(this, He).emit("add", n, r, s),
        destroyComponent: (n) => m(this, He).emit("destroy", n)
      };
  }
  getShortcuts() {
    return m(this, nt).filter(([t]) => t.shortcut).map(([t]) => ({
      ...t.shortcut,
      route: t.path
    }));
  }
}
nt = new WeakMap(), Se = new WeakMap(), He = new WeakMap(), Lt = new WeakSet(), $n = function() {
  return F(this, Se, document.createElement("div")), m(this, Se).id = "react-injector", m(this, Se);
}, Nt = new WeakSet(), Kn = function() {
  document.body.appendChild(m(this, Se)), er.createRoot(m(this, Se)).render(/* @__PURE__ */ V(Eo, { eventEmitter: m(this, He) }));
};
const Ro = (e) => {
  const t = new Oo(e.filter((r) => !r.notExposeToLibrary));
  window.__REACT_INJECTOR__ = t;
};
Ro(Bn);
export {
  Yn as F,
  vo as S,
  lr as a,
  Dt as b,
  Po as c,
  Do as d,
  ve as e,
  zn as f,
  Fs as g,
  bs as h,
  jt as i,
  V as j,
  No as k,
  nr as l,
  dr as m,
  ie as n,
  Mo as o,
  nn as p,
  _s as r,
  Lo as s,
  Es as t,
  Fo as u
};
