var $t = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var p = (e, t, r) => ($t(e, t, "read from private field"), r ? r.call(e) : t.get(e)), B = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, F = (e, t, r, n) => ($t(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var bt = (e, t, r, n) => ({
  set _(s) {
    F(e, t, s, r);
  },
  get _() {
    return p(e, t, n);
  }
}), G = (e, t, r) => ($t(e, t, "access private method"), r);
import { h as Xr, j as ft, E as Yr, c as Zr, a as en, G as Kn, b as Wn, T as Jn } from "./mui-36ebfa29.js";
import { c as tn, r as I, R as H, g as Gn } from "./react-72acea58.js";
import { F as Vn } from "./icons-a8a50daa.js";
var Xn = ft.Fragment;
function V(e, t, r) {
  return Xr.call(t, "css") ? ft.jsx(Yr, Zr(e, t), r) : ft.jsx(e, t, r);
}
function lr(e, t, r) {
  return Xr.call(t, "css") ? ft.jsxs(Yr, Zr(e, t), r) : ft.jsxs(e, t, r);
}
var er = {}, gr = tn;
er.createRoot = gr.createRoot, er.hydrateRoot = gr.hydrateRoot;
function Yn(e) {
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
function Zn(e, t) {
  t === void 0 && (t = {});
  for (var r = Yn(e), n = t.prefixes, s = n === void 0 ? "./" : n, i = "[^".concat($e(t.delimiter || "/#?"), "]+?"), o = [], u = 0, w = 0, g = "", l = function(q) {
    if (w < r.length && r[w].type === q)
      return r[w++].value;
  }, _ = function(q) {
    var K = l(q);
    if (K !== void 0)
      return K;
    var j = r[w], U = j.type, le = j.index;
    throw new TypeError("Unexpected ".concat(U, " at ").concat(le, ", expected ").concat(q));
  }, P = function() {
    for (var q = "", K; K = l("CHAR") || l("ESCAPED_CHAR"); )
      q += K;
    return q;
  }; w < r.length; ) {
    var b = l("CHAR"), m = l("NAME"), T = l("PATTERN");
    if (m || T) {
      var E = b || "";
      s.indexOf(E) === -1 && (g += E, E = ""), g && (o.push(g), g = ""), o.push({
        name: m || u++,
        prefix: E,
        suffix: "",
        pattern: T || i,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    var O = b || l("ESCAPED_CHAR");
    if (O) {
      g += O;
      continue;
    }
    g && (o.push(g), g = "");
    var L = l("OPEN");
    if (L) {
      var E = P(), M = l("NAME") || "", A = l("PATTERN") || "", k = P();
      _("CLOSE"), o.push({
        name: M || (A ? u++ : ""),
        pattern: M && !A ? i : A,
        prefix: E,
        suffix: k,
        modifier: l("MODIFIER") || ""
      });
      continue;
    }
    _("END");
  }
  return o;
}
function es(e, t) {
  var r = [], n = nn(e, r, t);
  return ts(n, r, t);
}
function ts(e, t, r) {
  r === void 0 && (r = {});
  var n = r.decode, s = n === void 0 ? function(i) {
    return i;
  } : n;
  return function(i) {
    var o = e.exec(i);
    if (!o)
      return !1;
    for (var u = o[0], w = o.index, g = /* @__PURE__ */ Object.create(null), l = function(P) {
      if (o[P] === void 0)
        return "continue";
      var b = t[P - 1];
      b.modifier === "*" || b.modifier === "+" ? g[b.name] = o[P].split(b.prefix + b.suffix).map(function(m) {
        return s(m, b);
      }) : g[b.name] = s(o[P], b);
    }, _ = 1; _ < o.length; _++)
      l(_);
    return { path: u, index: w, params: g };
  };
}
function $e(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function rn(e) {
  return e && e.sensitive ? "" : "i";
}
function rs(e, t) {
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
function ns(e, t, r) {
  var n = e.map(function(s) {
    return nn(s, t, r).source;
  });
  return new RegExp("(?:".concat(n.join("|"), ")"), rn(r));
}
function ss(e, t, r) {
  return is(Zn(e, r), t, r);
}
function is(e, t, r) {
  r === void 0 && (r = {});
  for (var n = r.strict, s = n === void 0 ? !1 : n, i = r.start, o = i === void 0 ? !0 : i, u = r.end, w = u === void 0 ? !0 : u, g = r.encode, l = g === void 0 ? function(le) {
    return le;
  } : g, _ = r.delimiter, P = _ === void 0 ? "/#?" : _, b = r.endsWith, m = b === void 0 ? "" : b, T = "[".concat($e(m), "]|$"), E = "[".concat($e(P), "]"), O = o ? "^" : "", L = 0, M = e; L < M.length; L++) {
    var A = M[L];
    if (typeof A == "string")
      O += $e(l(A));
    else {
      var k = $e(l(A.prefix)), q = $e(l(A.suffix));
      if (A.pattern)
        if (t && t.push(A), k || q)
          if (A.modifier === "+" || A.modifier === "*") {
            var K = A.modifier === "*" ? "?" : "";
            O += "(?:".concat(k, "((?:").concat(A.pattern, ")(?:").concat(q).concat(k, "(?:").concat(A.pattern, "))*)").concat(q, ")").concat(K);
          } else
            O += "(?:".concat(k, "(").concat(A.pattern, ")").concat(q, ")").concat(A.modifier);
        else
          A.modifier === "+" || A.modifier === "*" ? O += "((?:".concat(A.pattern, ")").concat(A.modifier, ")") : O += "(".concat(A.pattern, ")").concat(A.modifier);
      else
        O += "(?:".concat(k).concat(q, ")").concat(A.modifier);
    }
  }
  if (w)
    s || (O += "".concat(E, "?")), O += r.endsWith ? "(?=".concat(T, ")") : "$";
  else {
    var j = e[e.length - 1], U = typeof j == "string" ? E.indexOf(j[j.length - 1]) > -1 : j === void 0;
    s || (O += "(?:".concat(E, "(?=").concat(T, "))?")), U || (O += "(?=".concat(E, "|").concat(T, ")"));
  }
  return new RegExp(O, rn(r));
}
function nn(e, t, r) {
  return e instanceof RegExp ? rs(e, t) : Array.isArray(e) ? ns(e, t, r) : ss(e, t, r);
}
const os = (e) => e.map((t) => [t, es(t.path)]), as = (e, t) => {
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
function sn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = sn(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function je() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = sn(e)) && (n && (n += " "), n += t);
  return n;
}
const ut = (e) => typeof e == "number" && !isNaN(e), Qe = (e) => typeof e == "string", ae = (e) => typeof e == "function", Tt = (e) => Qe(e) || ae(e) ? e : null, Kt = (e) => I.isValidElement(e) || Qe(e) || ae(e) || ut(e);
function cs(e, t, r) {
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
    let { children: u, position: w, preventExitTransition: g, done: l, nodeRef: _, isIn: P } = o;
    const b = n ? `${t}--${w}` : t, m = n ? `${r}--${w}` : r, T = I.useRef(0);
    return I.useLayoutEffect(() => {
      const E = _.current, O = b.split(" "), L = (M) => {
        M.target === _.current && (E.dispatchEvent(new Event("d")), E.removeEventListener("animationend", L), E.removeEventListener("animationcancel", L), T.current === 0 && M.type !== "animationcancel" && E.classList.remove(...O));
      };
      E.classList.add(...O), E.addEventListener("animationend", L), E.addEventListener("animationcancel", L);
    }, []), I.useEffect(() => {
      const E = _.current, O = () => {
        E.removeEventListener("animationend", O), s ? cs(E, l, i) : l();
      };
      P || (g ? O() : (T.current = 1, E.className += ` ${m}`, E.addEventListener("animationend", O)));
    }, [P]), H.createElement(H.Fragment, null, u);
  };
}
function br(e, t) {
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
} }, Et = (e) => {
  let { theme: t, type: r, ...n } = e;
  return H.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`, ...n });
}, Wt = { info: function(e) {
  return H.createElement(Et, { ...e }, H.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e) {
  return H.createElement(Et, { ...e }, H.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e) {
  return H.createElement(Et, { ...e }, H.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e) {
  return H.createElement(Et, { ...e }, H.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return H.createElement("div", { className: "Toastify__spinner" });
} };
function us(e) {
  const [, t] = I.useReducer((b) => b + 1, 0), [r, n] = I.useState([]), s = I.useRef(null), i = I.useRef(/* @__PURE__ */ new Map()).current, o = (b) => r.indexOf(b) !== -1, u = I.useRef({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: e, containerId: null, isToastActive: o, getToast: (b) => i.get(b) }).current;
  function w(b) {
    let { containerId: m } = b;
    const { limit: T } = u.props;
    !T || m && u.containerId !== m || (u.count -= u.queue.length, u.queue = []);
  }
  function g(b) {
    n((m) => b == null ? [] : m.filter((T) => T !== b));
  }
  function l() {
    const { toastContent: b, toastProps: m, staleId: T } = u.queue.shift();
    P(b, m, T);
  }
  function _(b, m) {
    let { delay: T, staleId: E, ...O } = m;
    if (!Kt(b) || function(te) {
      return !s.current || u.props.enableMultiContainer && te.containerId !== u.props.containerId || i.has(te.toastId) && te.updateId == null;
    }(O))
      return;
    const { toastId: L, updateId: M, data: A } = O, { props: k } = u, q = () => g(L), K = M == null;
    K && u.count++;
    const j = { ...k, style: k.toastStyle, key: u.toastKey++, ...Object.fromEntries(Object.entries(O).filter((te) => {
      let [fe, re] = te;
      return re != null;
    })), toastId: L, updateId: M, data: A, closeToast: q, isIn: !1, className: Tt(O.className || k.toastClassName), bodyClassName: Tt(O.bodyClassName || k.bodyClassName), progressClassName: Tt(O.progressClassName || k.progressClassName), autoClose: !O.isLoading && (U = O.autoClose, le = k.autoClose, U === !1 || ut(U) && U > 0 ? U : le), deleteToast() {
      const te = br(i.get(L), "removed");
      i.delete(L), me.emit(4, te);
      const fe = u.queue.length;
      if (u.count = L == null ? u.count - u.displayedToast : u.count - 1, u.count < 0 && (u.count = 0), fe > 0) {
        const re = L == null ? u.props.limit : 1;
        if (fe === 1 || re === 1)
          u.displayedToast++, l();
        else {
          const D = re > fe ? fe : re;
          u.displayedToast = D;
          for (let ne = 0; ne < D; ne++)
            l();
        }
      } else
        t();
    } };
    var U, le;
    j.iconOut = function(te) {
      let { theme: fe, type: re, isLoading: D, icon: ne } = te, ce = null;
      const a = { theme: fe, type: re };
      return ne === !1 || (ae(ne) ? ce = ne(a) : I.isValidElement(ne) ? ce = I.cloneElement(ne, a) : Qe(ne) || ut(ne) ? ce = ne : D ? ce = Wt.spinner() : ((c) => c in Wt)(re) && (ce = Wt[re](a))), ce;
    }(j), ae(O.onOpen) && (j.onOpen = O.onOpen), ae(O.onClose) && (j.onClose = O.onClose), j.closeButton = k.closeButton, O.closeButton === !1 || Kt(O.closeButton) ? j.closeButton = O.closeButton : O.closeButton === !0 && (j.closeButton = !Kt(k.closeButton) || k.closeButton);
    let ge = b;
    I.isValidElement(b) && !Qe(b.type) ? ge = I.cloneElement(b, { closeToast: q, toastProps: j, data: A }) : ae(b) && (ge = b({ closeToast: q, toastProps: j, data: A })), k.limit && k.limit > 0 && u.count > k.limit && K ? u.queue.push({ toastContent: ge, toastProps: j, staleId: E }) : ut(T) ? setTimeout(() => {
      P(ge, j, E);
    }, T) : P(ge, j, E);
  }
  function P(b, m, T) {
    const { toastId: E } = m;
    T && i.delete(T);
    const O = { content: b, props: m };
    i.set(E, O), n((L) => [...L, E].filter((M) => M !== T)), me.emit(4, br(O, O.props.updateId == null ? "added" : "updated"));
  }
  return I.useEffect(() => (u.containerId = e.containerId, me.cancelEmit(3).on(0, _).on(1, (b) => s.current && g(b)).on(5, w).emit(2, u), () => {
    i.clear(), me.emit(3, u);
  }), []), I.useEffect(() => {
    u.props = e, u.isToastActive = o, u.displayedToast = r.length;
  }), { getToastToRender: function(b) {
    const m = /* @__PURE__ */ new Map(), T = Array.from(i.values());
    return e.newestOnTop && T.reverse(), T.forEach((E) => {
      const { position: O } = E.props;
      m.has(O) || m.set(O, []), m.get(O).push(E);
    }), Array.from(m, (E) => b(E[0], E[1]));
  }, containerRef: s, isToastActive: o };
}
function Er(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function _r(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function ls(e) {
  const [t, r] = I.useState(!1), [n, s] = I.useState(!1), i = I.useRef(null), o = I.useRef({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, boundingRect: null, didMove: !1 }).current, u = I.useRef(e), { autoClose: w, pauseOnHover: g, closeToast: l, onClick: _, closeOnClick: P } = e;
  function b(A) {
    if (e.draggable) {
      A.nativeEvent.type === "touchstart" && A.nativeEvent.preventDefault(), o.didMove = !1, document.addEventListener("mousemove", O), document.addEventListener("mouseup", L), document.addEventListener("touchmove", O), document.addEventListener("touchend", L);
      const k = i.current;
      o.canCloseOnClick = !0, o.canDrag = !0, o.boundingRect = k.getBoundingClientRect(), k.style.transition = "", o.x = Er(A.nativeEvent), o.y = _r(A.nativeEvent), e.draggableDirection === "x" ? (o.start = o.x, o.removalDistance = k.offsetWidth * (e.draggablePercent / 100)) : (o.start = o.y, o.removalDistance = k.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100));
    }
  }
  function m(A) {
    if (o.boundingRect) {
      const { top: k, bottom: q, left: K, right: j } = o.boundingRect;
      A.nativeEvent.type !== "touchend" && e.pauseOnHover && o.x >= K && o.x <= j && o.y >= k && o.y <= q ? E() : T();
    }
  }
  function T() {
    r(!0);
  }
  function E() {
    r(!1);
  }
  function O(A) {
    const k = i.current;
    o.canDrag && k && (o.didMove = !0, t && E(), o.x = Er(A), o.y = _r(A), o.delta = e.draggableDirection === "x" ? o.x - o.start : o.y - o.start, o.start !== o.x && (o.canCloseOnClick = !1), k.style.transform = `translate${e.draggableDirection}(${o.delta}px)`, k.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
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
  I.useEffect(() => {
    u.current = e;
  }), I.useEffect(() => (i.current && i.current.addEventListener("d", T, { once: !0 }), ae(e.onOpen) && e.onOpen(I.isValidElement(e.children) && e.children.props), () => {
    const A = u.current;
    ae(A.onClose) && A.onClose(I.isValidElement(A.children) && A.children.props);
  }), []), I.useEffect(() => (e.pauseOnFocusLoss && (document.hasFocus() || E(), window.addEventListener("focus", T), window.addEventListener("blur", E)), () => {
    e.pauseOnFocusLoss && (window.removeEventListener("focus", T), window.removeEventListener("blur", E));
  }), [e.pauseOnFocusLoss]);
  const M = { onMouseDown: b, onTouchStart: b, onMouseUp: m, onTouchEnd: m };
  return w && g && (M.onMouseEnter = E, M.onMouseLeave = T), P && (M.onClick = (A) => {
    _ && _(A), o.canCloseOnClick && l();
  }), { playToast: T, pauseToast: E, isRunning: t, preventExitTransition: n, toastRef: i, eventHandlers: M };
}
function on(e) {
  let { closeToast: t, theme: r, ariaLabel: n = "close" } = e;
  return H.createElement("button", { className: `Toastify__close-button Toastify__close-button--${r}`, type: "button", onClick: (s) => {
    s.stopPropagation(), t(s);
  }, "aria-label": n }, H.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, H.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function fs(e) {
  let { delay: t, isRunning: r, closeToast: n, type: s = "default", hide: i, className: o, style: u, controlledProgress: w, progress: g, rtl: l, isIn: _, theme: P } = e;
  const b = i || w && g === 0, m = { ...u, animationDuration: `${t}ms`, animationPlayState: r ? "running" : "paused", opacity: b ? 0 : 1 };
  w && (m.transform = `scaleX(${g})`);
  const T = je("Toastify__progress-bar", w ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${P}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": l }), E = ae(o) ? o({ rtl: l, type: s, defaultClassName: T }) : je(T, o);
  return H.createElement("div", { role: "progressbar", "aria-hidden": b ? "true" : "false", "aria-label": "notification timer", className: E, style: m, [w && g >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: w && g < 1 ? null : () => {
    _ && n();
  } });
}
const hs = (e) => {
  const { isRunning: t, preventExitTransition: r, toastRef: n, eventHandlers: s } = ls(e), { closeButton: i, children: o, autoClose: u, onClick: w, type: g, hideProgressBar: l, closeToast: _, transition: P, position: b, className: m, style: T, bodyClassName: E, bodyStyle: O, progressClassName: L, progressStyle: M, updateId: A, role: k, progress: q, rtl: K, toastId: j, deleteToast: U, isIn: le, isLoading: ge, iconOut: te, closeOnClick: fe, theme: re } = e, D = je("Toastify__toast", `Toastify__toast-theme--${re}`, `Toastify__toast--${g}`, { "Toastify__toast--rtl": K }, { "Toastify__toast--close-on-click": fe }), ne = ae(m) ? m({ rtl: K, position: b, type: g, defaultClassName: D }) : je(D, m), ce = !!q || !u, a = { closeToast: _, type: g, theme: re };
  let c = null;
  return i === !1 || (c = ae(i) ? i(a) : I.isValidElement(i) ? I.cloneElement(i, a) : on(a)), H.createElement(P, { isIn: le, done: U, position: b, preventExitTransition: r, nodeRef: n }, H.createElement("div", { id: j, onClick: w, className: ne, ...s, style: T, ref: n }, H.createElement("div", { ...le && { role: k }, className: ae(E) ? E({ type: g }) : je("Toastify__toast-body", E), style: O }, te != null && H.createElement("div", { className: je("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !ge }) }, te), H.createElement("div", null, o)), c, H.createElement(fs, { ...A && !ce ? { key: `pb-${A}` } : {}, rtl: K, theme: re, delay: u, isRunning: t, isIn: le, closeToast: _, hide: l, type: g, style: M, className: L, controlledProgress: ce, progress: q || 0 })));
}, Mt = function(e, t) {
  return t === void 0 && (t = !1), { enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t };
}, ds = Ft(Mt("bounce", !0));
Ft(Mt("slide", !0));
Ft(Mt("zoom"));
Ft(Mt("flip"));
const tr = I.forwardRef((e, t) => {
  const { getToastToRender: r, containerRef: n, isToastActive: s } = us(e), { className: i, style: o, rtl: u, containerId: w } = e;
  function g(l) {
    const _ = je("Toastify__toast-container", `Toastify__toast-container--${l}`, { "Toastify__toast-container--rtl": u });
    return ae(i) ? i({ position: l, rtl: u, defaultClassName: _ }) : je(_, Tt(i));
  }
  return I.useEffect(() => {
    t && (t.current = n.current);
  }, []), H.createElement("div", { ref: n, className: "Toastify", id: w }, r((l, _) => {
    const P = _.length ? { ...o } : { ...o, pointerEvents: "none" };
    return H.createElement("div", { className: g(l), style: P, key: `container-${l}` }, _.map((b, m) => {
      let { content: T, props: E } = b;
      return H.createElement(hs, { ...E, isIn: s(E.toastId), style: { ...E.style, "--nth": m + 1, "--len": _.length }, key: `toast-${E.key}` }, T);
    }));
  }));
});
tr.displayName = "ToastContainer", tr.defaultProps = { position: "top-right", transition: ds, autoClose: 5e3, closeButton: on, pauseOnHover: !0, pauseOnFocusLoss: !0, closeOnClick: !0, draggable: !0, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
let Jt, Ie = /* @__PURE__ */ new Map(), ct = [], ps = 1;
function an() {
  return "" + ps++;
}
function ms(e) {
  return e && (Qe(e.toastId) || ut(e.toastId)) ? e.toastId : an();
}
function lt(e, t) {
  return Ie.size > 0 ? me.emit(0, e, t) : ct.push({ content: e, options: t }), t.toastId;
}
function xt(e, t) {
  return { ...t, type: t && t.type || e, toastId: ms(t) };
}
function _t(e) {
  return (t, r) => lt(t, xt(e, r));
}
function W(e, t) {
  return lt(e, xt("default", t));
}
W.loading = (e, t) => lt(e, xt("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t })), W.promise = function(e, t, r) {
  let n, { pending: s, error: i, success: o } = t;
  s && (n = Qe(s) ? W.loading(s, r) : W.loading(s.render, { ...r, ...s }));
  const u = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, w = (l, _, P) => {
    if (_ == null)
      return void W.dismiss(n);
    const b = { type: l, ...u, ...r, data: P }, m = Qe(_) ? { render: _ } : _;
    return n ? W.update(n, { ...b, ...m }) : W(m.render, { ...b, ...m }), P;
  }, g = ae(e) ? e() : e;
  return g.then((l) => w("success", o, l)).catch((l) => w("error", i, l)), g;
}, W.success = _t("success"), W.info = _t("info"), W.error = _t("error"), W.warning = _t("warning"), W.warn = W.warning, W.dark = (e, t) => lt(e, xt("default", { theme: "dark", ...t })), W.dismiss = (e) => {
  Ie.size > 0 ? me.emit(1, e) : ct = ct.filter((t) => e != null && t.options.toastId !== e);
}, W.clearWaitingQueue = function(e) {
  return e === void 0 && (e = {}), me.emit(5, e);
}, W.isActive = (e) => {
  let t = !1;
  return Ie.forEach((r) => {
    r.isToastActive && r.isToastActive(e) && (t = !0);
  }), t;
}, W.update = function(e, t) {
  t === void 0 && (t = {}), setTimeout(() => {
    const r = function(n, s) {
      let { containerId: i } = s;
      const o = Ie.get(i || Jt);
      return o && o.getToast(n);
    }(e, t);
    if (r) {
      const { props: n, content: s } = r, i = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: an() };
      i.toastId !== e && (i.staleId = e);
      const o = i.render || s;
      delete i.render, lt(o, i);
    }
  }, 0);
}, W.done = (e) => {
  W.update(e, { progress: 1 });
}, W.onChange = (e) => (me.on(4, e), () => {
  me.off(4, e);
}), W.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, W.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, me.on(2, (e) => {
  Jt = e.containerId || e, Ie.set(Jt, e), ct.forEach((t) => {
    me.emit(0, t.content, t.options);
  }), ct = [];
}).on(3, (e) => {
  Ie.delete(e.containerId || e), Ie.size === 0 && me.off(0).off(1).off(5);
});
const ys = () => /* @__PURE__ */ V(Kn, { styles: en`*, ::before, ::after {
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
}` }), vs = () => /* @__PURE__ */ lr(Xn, { children: [
  /* @__PURE__ */ V(ys, {}),
  /* @__PURE__ */ V(tr, { position: "bottom-left", pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !1, style: {
    zIndex: 1e5
  } })
] });
var kt = class {
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
}, Dt = typeof window > "u" || "Deno" in window;
function ve() {
}
function ws(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gs(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function bs(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Tr(e, t) {
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
      if (t.queryHash !== fr(o, t.options))
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
function Or(e, t) {
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
function fr(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ht)(e);
}
function ht(e) {
  return JSON.stringify(
    e,
    (t, r) => rr(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function dt(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !dt(e[r], t[r])) : !1;
}
function cn(e, t) {
  if (e === t)
    return e;
  const r = Rr(e) && Rr(t);
  if (r || rr(e) && rr(t)) {
    const n = r ? e.length : Object.keys(e).length, s = r ? t : Object.keys(t), i = s.length, o = r ? [] : {};
    let u = 0;
    for (let w = 0; w < i; w++) {
      const g = r ? w : s[w];
      o[g] = cn(e[g], t[g]), o[g] === e[g] && u++;
    }
    return n === i && u === n ? e : o;
  }
  return t;
}
function Ao(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Rr(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function rr(e) {
  if (!Cr(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!Cr(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Cr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function un(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Sr(e) {
  un(0).then(e);
}
function Es(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? cn(e, t) : t;
}
function _s(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function Ts(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Ue, Le, Ke, Hr, Os = (Hr = class extends kt {
  constructor() {
    super();
    B(this, Ue, void 0);
    B(this, Le, void 0);
    B(this, Ke, void 0);
    F(this, Ke, (t) => {
      if (!Dt && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    p(this, Le) || this.setEventListener(p(this, Ke));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = p(this, Le)) == null || t.call(this), F(this, Le, void 0));
  }
  setEventListener(t) {
    var r;
    F(this, Ke, t), (r = p(this, Le)) == null || r.call(this), F(this, Le, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    p(this, Ue) !== t && (F(this, Ue, t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    var t;
    return typeof p(this, Ue) == "boolean" ? p(this, Ue) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Ue = new WeakMap(), Le = new WeakMap(), Ke = new WeakMap(), Hr), nr = new Os(), We, Ne, Je, Qr, Rs = (Qr = class extends kt {
  constructor() {
    super();
    B(this, We, !0);
    B(this, Ne, void 0);
    B(this, Je, void 0);
    F(this, Je, (t) => {
      if (!Dt && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    p(this, Ne) || this.setEventListener(p(this, Je));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = p(this, Ne)) == null || t.call(this), F(this, Ne, void 0));
  }
  setEventListener(t) {
    var r;
    F(this, Je, t), (r = p(this, Ne)) == null || r.call(this), F(this, Ne, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    p(this, We) !== t && (F(this, We, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return p(this, We);
  }
}, We = new WeakMap(), Ne = new WeakMap(), Je = new WeakMap(), Qr), At = new Rs();
function Cs(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function hr(e) {
  return (e ?? "online") === "online" ? At.isOnline() : !0;
}
var ln = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Gt(e) {
  return e instanceof ln;
}
function fn(e) {
  let t = !1, r = 0, n = !1, s, i, o;
  const u = new Promise((E, O) => {
    i = E, o = O;
  }), w = (E) => {
    var O;
    n || (b(new ln(E)), (O = e.abort) == null || O.call(e));
  }, g = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, _ = () => !nr.isFocused() || e.networkMode !== "always" && !At.isOnline(), P = (E) => {
    var O;
    n || (n = !0, (O = e.onSuccess) == null || O.call(e, E), s == null || s(), i(E));
  }, b = (E) => {
    var O;
    n || (n = !0, (O = e.onError) == null || O.call(e, E), s == null || s(), o(E));
  }, m = () => new Promise((E) => {
    var O;
    s = (L) => {
      const M = n || !_();
      return M && E(L), M;
    }, (O = e.onPause) == null || O.call(e);
  }).then(() => {
    var E;
    s = void 0, n || (E = e.onContinue) == null || E.call(e);
  }), T = () => {
    if (n)
      return;
    let E;
    try {
      E = e.fn();
    } catch (O) {
      E = Promise.reject(O);
    }
    Promise.resolve(E).then(P).catch((O) => {
      var q;
      if (n)
        return;
      const L = e.retry ?? (Dt ? 0 : 3), M = e.retryDelay ?? Cs, A = typeof M == "function" ? M(r, O) : M, k = L === !0 || typeof L == "number" && r < L || typeof L == "function" && L(r, O);
      if (t || !k) {
        b(O);
        return;
      }
      r++, (q = e.onFail) == null || q.call(e, r, O), un(A).then(() => {
        if (_())
          return m();
      }).then(() => {
        t ? b(O) : T();
      });
    });
  };
  return hr(e.networkMode) ? T() : m().then(T), {
    promise: u,
    cancel: w,
    continue: () => (s == null ? void 0 : s()) ? u : Promise.resolve(),
    cancelRetry: g,
    continueRetry: l
  };
}
function Ss() {
  let e = [], t = 0, r = (l) => {
    l();
  }, n = (l) => {
    l();
  };
  const s = (l) => {
    let _;
    t++;
    try {
      _ = l();
    } finally {
      t--, t || u();
    }
    return _;
  }, i = (l) => {
    t ? e.push(l) : Sr(() => {
      r(l);
    });
  }, o = (l) => (..._) => {
    i(() => {
      l(..._);
    });
  }, u = () => {
    const l = e;
    e = [], l.length && Sr(() => {
      n(() => {
        l.forEach((_) => {
          r(_);
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
var ie = Ss(), Be, $r, hn = ($r = class {
  constructor() {
    B(this, Be, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), gs(this.gcTime) && F(this, Be, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Dt ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    p(this, Be) && (clearTimeout(p(this, Be)), F(this, Be, void 0));
  }
}, Be = new WeakMap(), $r), Ge, Ve, he, Fe, de, Z, mt, qe, Xe, Ot, we, Ce, Kr, xs = (Kr = class extends hn {
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
    B(this, qe, void 0);
    F(this, qe, !1), F(this, mt, t.defaultOptions), G(this, Xe, Ot).call(this, t.options), F(this, Z, []), F(this, he, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, F(this, Ge, t.state || As(this.options)), this.state = p(this, Ge), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !p(this, Z).length && this.state.fetchStatus === "idle" && p(this, he).remove(this);
  }
  setData(t, r) {
    const n = Es(this.state.data, t, this.options);
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
    const r = p(this, Fe);
    return (n = p(this, de)) == null || n.cancel(t), r ? r.then(ve).catch(ve) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(p(this, Ge));
  }
  isActive() {
    return p(this, Z).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || p(this, Z).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !bs(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = p(this, Z).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = p(this, de)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = p(this, Z).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = p(this, de)) == null || r.continue();
  }
  addObserver(t) {
    p(this, Z).includes(t) || (p(this, Z).push(t), this.clearGcTimeout(), p(this, he).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    p(this, Z).includes(t) && (F(this, Z, p(this, Z).filter((r) => r !== t)), p(this, Z).length || (p(this, de) && (p(this, qe) ? p(this, de).cancel({ revert: !0 }) : p(this, de).cancelRetry()), this.scheduleGc()), p(this, he).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return p(this, Z).length;
  }
  invalidate() {
    this.state.isInvalidated || G(this, we, Ce).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var g, l, _, P;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (p(this, Fe))
        return (g = p(this, de)) == null || g.continueRetry(), p(this, Fe);
    }
    if (t && G(this, Xe, Ot).call(this, t), !this.options.queryFn) {
      const b = p(this, Z).find((m) => m.options.queryFn);
      b && G(this, Xe, Ot).call(this, b.options);
    }
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (b) => {
      Object.defineProperty(b, "signal", {
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
    ), F(this, Ve, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_ = u.fetchOptions) == null ? void 0 : _.meta)) && G(this, we, Ce).call(this, { type: "fetch", meta: (P = u.fetchOptions) == null ? void 0 : P.meta });
    const w = (b) => {
      var m, T, E, O;
      Gt(b) && b.silent || G(this, we, Ce).call(this, {
        type: "error",
        error: b
      }), Gt(b) || ((T = (m = p(this, he).config).onError) == null || T.call(
        m,
        b,
        this
      ), (O = (E = p(this, he).config).onSettled) == null || O.call(
        E,
        this.state.data,
        b,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return F(this, de, fn({
      fn: u.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (b) => {
        var m, T, E, O;
        if (typeof b > "u") {
          w(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(b), (T = (m = p(this, he).config).onSuccess) == null || T.call(m, b, this), (O = (E = p(this, he).config).onSettled) == null || O.call(
          E,
          b,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: w,
      onFail: (b, m) => {
        G(this, we, Ce).call(this, { type: "failed", failureCount: b, error: m });
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
    })), F(this, Fe, p(this, de).promise), p(this, Fe);
  }
}, Ge = new WeakMap(), Ve = new WeakMap(), he = new WeakMap(), Fe = new WeakMap(), de = new WeakMap(), Z = new WeakMap(), mt = new WeakMap(), qe = new WeakMap(), Xe = new WeakSet(), Ot = function(t) {
  this.options = { ...p(this, mt), ...t }, this.updateGcTime(this.options.gcTime);
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
          fetchStatus: hr(this.options.networkMode) ? "fetching" : "paused",
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
        return Gt(s) && s.revert && p(this, Ve) ? { ...p(this, Ve), fetchStatus: "idle" } : {
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
    p(this, Z).forEach((n) => {
      n.onQueryUpdate();
    }), p(this, he).notify({ query: this, type: "updated", action: t });
  });
}, Kr);
function As(e) {
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
var be, Wr, Ps = (Wr = class extends kt {
  constructor(t = {}) {
    super();
    B(this, be, void 0);
    this.config = t, F(this, be, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const s = r.queryKey, i = r.queryHash ?? fr(s, r);
    let o = this.get(i);
    return o || (o = new xs({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(t) {
    p(this, be).has(t.queryHash) || (p(this, be).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = p(this, be).get(t.queryHash);
    r && (t.destroy(), r === t && p(this, be).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    ie.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return p(this, be).get(t);
  }
  getAll() {
    return [...p(this, be).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Tr(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => Tr(t, n)) : r;
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
}, be = new WeakMap(), Wr), Ee, yt, ue, Ye, _e, Pe, Jr, Ls = (Jr = class extends hn {
  constructor(t) {
    super();
    B(this, _e);
    B(this, Ee, void 0);
    B(this, yt, void 0);
    B(this, ue, void 0);
    B(this, Ye, void 0);
    this.mutationId = t.mutationId, F(this, yt, t.defaultOptions), F(this, ue, t.mutationCache), F(this, Ee, []), this.state = t.state || Ns(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...p(this, yt), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    p(this, Ee).includes(t) || (p(this, Ee).push(t), this.clearGcTimeout(), p(this, ue).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    F(this, Ee, p(this, Ee).filter((r) => r !== t)), this.scheduleGc(), p(this, ue).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    p(this, Ee).length || (this.state.status === "pending" ? this.scheduleGc() : p(this, ue).remove(this));
  }
  continue() {
    var t;
    return ((t = p(this, Ye)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, i, o, u, w, g, l, _, P, b, m, T, E, O, L, M, A, k, q, K;
    const r = () => (F(this, Ye, fn({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (j, U) => {
        G(this, _e, Pe).call(this, { type: "failed", failureCount: j, error: U });
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
    })), p(this, Ye).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        G(this, _e, Pe).call(this, { type: "pending", variables: t }), await ((i = (s = p(this, ue).config).onMutate) == null ? void 0 : i.call(
          s,
          t,
          this
        ));
        const U = await ((u = (o = this.options).onMutate) == null ? void 0 : u.call(o, t));
        U !== this.state.context && G(this, _e, Pe).call(this, {
          type: "pending",
          context: U,
          variables: t
        });
      }
      const j = await r();
      return await ((g = (w = p(this, ue).config).onSuccess) == null ? void 0 : g.call(
        w,
        j,
        t,
        this.state.context,
        this
      )), await ((_ = (l = this.options).onSuccess) == null ? void 0 : _.call(l, j, t, this.state.context)), await ((b = (P = p(this, ue).config).onSettled) == null ? void 0 : b.call(
        P,
        j,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((T = (m = this.options).onSettled) == null ? void 0 : T.call(m, j, null, t, this.state.context)), G(this, _e, Pe).call(this, { type: "success", data: j }), j;
    } catch (j) {
      try {
        throw await ((O = (E = p(this, ue).config).onError) == null ? void 0 : O.call(
          E,
          j,
          t,
          this.state.context,
          this
        )), await ((M = (L = this.options).onError) == null ? void 0 : M.call(
          L,
          j,
          t,
          this.state.context
        )), await ((k = (A = p(this, ue).config).onSettled) == null ? void 0 : k.call(
          A,
          void 0,
          j,
          this.state.variables,
          this.state.context,
          this
        )), await ((K = (q = this.options).onSettled) == null ? void 0 : K.call(
          q,
          void 0,
          j,
          t,
          this.state.context
        )), j;
      } finally {
        G(this, _e, Pe).call(this, { type: "error", error: j });
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
          isPaused: !hr(this.options.networkMode),
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
    p(this, Ee).forEach((n) => {
      n.onMutationUpdate(t);
    }), p(this, ue).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Jr);
function Ns() {
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
var pe, vt, ze, Gr, Fs = (Gr = class extends kt {
  constructor(t = {}) {
    super();
    B(this, pe, void 0);
    B(this, vt, void 0);
    B(this, ze, void 0);
    this.config = t, F(this, pe, []), F(this, vt, 0);
  }
  build(t, r, n) {
    const s = new Ls({
      mutationCache: this,
      mutationId: ++bt(this, vt)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(t) {
    p(this, pe).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    F(this, pe, p(this, pe).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    ie.batch(() => {
      p(this, pe).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return p(this, pe);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return p(this, pe).find(
      (n) => Or(r, n)
    );
  }
  findAll(t = {}) {
    return p(this, pe).filter(
      (r) => Or(t, r)
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
    return F(this, ze, (p(this, ze) ?? Promise.resolve()).then(() => {
      const t = p(this, pe).filter((r) => r.state.isPaused);
      return ie.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(ve)),
          Promise.resolve()
        )
      );
    }).then(() => {
      F(this, ze, void 0);
    })), p(this, ze);
  }
}, pe = new WeakMap(), vt = new WeakMap(), ze = new WeakMap(), Gr);
function Ms(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var m, T, E, O, L;
        const s = t.options, i = (E = (T = (m = t.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : T.fetchMore) == null ? void 0 : E.direction, o = ((O = t.state.data) == null ? void 0 : O.pages) || [], u = ((L = t.state.data) == null ? void 0 : L.pageParams) || [], w = { pages: [], pageParams: [] };
        let g = !1;
        const l = (M) => {
          Object.defineProperty(M, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
              g = !0;
            }), t.signal)
          });
        }, _ = t.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), P = async (M, A, k) => {
          if (g)
            return Promise.reject();
          if (A == null && M.pages.length)
            return Promise.resolve(M);
          const q = {
            queryKey: t.queryKey,
            pageParam: A,
            direction: k ? "backward" : "forward",
            meta: t.options.meta
          };
          l(q);
          const K = await _(
            q
          ), { maxPages: j } = t.options, U = k ? Ts : _s;
          return {
            pages: U(M.pages, K, j),
            pageParams: U(M.pageParams, A, j)
          };
        };
        let b;
        if (i && o.length) {
          const M = i === "backward", A = M ? ks : xr, k = {
            pages: o,
            pageParams: u
          }, q = A(s, k);
          b = await P(k, q, M);
        } else {
          b = await P(
            w,
            u[0] ?? s.initialPageParam
          );
          const M = e ?? o.length;
          for (let A = 1; A < M; A++) {
            const k = xr(s, b);
            b = await P(b, k);
          }
        }
        return b;
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
function xr(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function ks(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var Y, Me, ke, Ze, et, De, tt, rt, Vr, Ds = (Vr = class {
  constructor(e = {}) {
    B(this, Y, void 0);
    B(this, Me, void 0);
    B(this, ke, void 0);
    B(this, Ze, void 0);
    B(this, et, void 0);
    B(this, De, void 0);
    B(this, tt, void 0);
    B(this, rt, void 0);
    F(this, Y, e.queryCache || new Ps()), F(this, Me, e.mutationCache || new Fs()), F(this, ke, e.defaultOptions || {}), F(this, Ze, /* @__PURE__ */ new Map()), F(this, et, /* @__PURE__ */ new Map()), F(this, De, 0);
  }
  mount() {
    bt(this, De)._++, p(this, De) === 1 && (F(this, tt, nr.subscribe(() => {
      nr.isFocused() && (this.resumePausedMutations(), p(this, Y).onFocus());
    })), F(this, rt, At.subscribe(() => {
      At.isOnline() && (this.resumePausedMutations(), p(this, Y).onOnline());
    })));
  }
  unmount() {
    var e, t;
    bt(this, De)._--, p(this, De) === 0 && ((e = p(this, tt)) == null || e.call(this), F(this, tt, void 0), (t = p(this, rt)) == null || t.call(this), F(this, rt, void 0));
  }
  isFetching(e) {
    return p(this, Y).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return p(this, Me).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var t;
    return (t = p(this, Y).find({ queryKey: e })) == null ? void 0 : t.state.data;
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
    const n = p(this, Y).find({ queryKey: e }), s = n == null ? void 0 : n.state.data, i = ws(t, s);
    if (typeof i > "u")
      return;
    const o = this.defaultQueryOptions({ queryKey: e });
    return p(this, Y).build(this, o).setData(i, { ...r, manual: !0 });
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
    return (t = p(this, Y).find({ queryKey: e })) == null ? void 0 : t.state;
  }
  removeQueries(e) {
    const t = p(this, Y);
    ie.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = p(this, Y), n = {
      type: "active",
      ...e
    };
    return ie.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = ie.batch(
      () => p(this, Y).findAll(e).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(ve).catch(ve);
  }
  invalidateQueries(e = {}, t = {}) {
    return ie.batch(() => {
      if (p(this, Y).findAll(e).forEach((n) => {
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
      () => p(this, Y).findAll(e).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(ve)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(ve);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = p(this, Y).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ve).catch(ve);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Ms(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ve).catch(ve);
  }
  resumePausedMutations() {
    return p(this, Me).resumePausedMutations();
  }
  getQueryCache() {
    return p(this, Y);
  }
  getMutationCache() {
    return p(this, Me);
  }
  getDefaultOptions() {
    return p(this, ke);
  }
  setDefaultOptions(e) {
    F(this, ke, e);
  }
  setQueryDefaults(e, t) {
    p(this, Ze).set(ht(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...p(this, Ze).values()];
    let r = {};
    return t.forEach((n) => {
      dt(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    p(this, et).set(ht(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...p(this, et).values()];
    let r = {};
    return t.forEach((n) => {
      dt(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const t = {
      ...p(this, ke).queries,
      ...(e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = fr(
      t.queryKey,
      t
    )), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...p(this, ke).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    p(this, Y).clear(), p(this, Me).clear();
  }
}, Y = new WeakMap(), Me = new WeakMap(), ke = new WeakMap(), Ze = new WeakMap(), et = new WeakMap(), De = new WeakMap(), tt = new WeakMap(), rt = new WeakMap(), Vr), dn = I.createContext(
  void 0
), Po = (e) => {
  const t = I.useContext(dn);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, js = ({
  client: e,
  children: t
}) => (I.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ I.createElement(dn.Provider, { value: e }, t));
function pn(e, t) {
  window.dispatchEvent(new StorageEvent("storage", { key: e, newValue: t }));
}
const Ar = (e, t) => {
  const r = JSON.stringify(t);
  window.localStorage.setItem(e, r), pn(e, r);
}, Is = (e) => {
  window.localStorage.removeItem(e), pn(e, null);
}, Pr = (e) => window.localStorage.getItem(e), Us = (e) => (window.addEventListener("storage", e), () => window.removeEventListener("storage", e)), Bs = () => {
  throw Error("useLocalStorage is a client-only hook");
};
function qs(e, t) {
  const r = () => Pr(e), n = I.useSyncExternalStore(
    Us,
    r,
    Bs
  ), s = I.useCallback(
    (i) => {
      try {
        const o = typeof i == "function" ? i(JSON.parse(n)) : i;
        o == null ? Is(e) : Ar(e, o);
      } catch (o) {
        console.warn(o);
      }
    },
    [e, n]
  );
  return I.useEffect(() => {
    Pr(e) === null && typeof t < "u" && Ar(e, t);
  }, [e, t]), [n ? JSON.parse(n) : t, s];
}
function Lo() {
  const [e, t] = I.useState({
    width: null,
    height: null
  }), r = I.useRef(null);
  return [I.useCallback((s) => {
    if (r.current && (r.current.disconnect(), r.current = null), (s == null ? void 0 : s.nodeType) === Node.ELEMENT_NODE) {
      const i = new ResizeObserver(([o]) => {
        if (o && o.borderBoxSize) {
          const { inlineSize: u, blockSize: w } = o.borderBoxSize[0];
          t({ width: u, height: w });
        }
      });
      i.observe(s), r.current = i;
    }
  }, []), e];
}
const mn = () => qs("app-state-session"), zs = () => {
  const [e, t] = mn();
  return () => t(e ? {
    ...e,
    locked: !0
  } : void 0);
};
function yn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Hs } = Object.prototype, { getPrototypeOf: dr } = Object, jt = ((e) => (t) => {
  const r = Hs.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Oe = (e) => (e = e.toLowerCase(), (t) => jt(t) === e), It = (e) => (t) => typeof t === e, { isArray: it } = Array, pt = It("undefined");
function Qs(e) {
  return e !== null && !pt(e) && e.constructor !== null && !pt(e.constructor) && ye(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vn = Oe("ArrayBuffer");
function $s(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vn(e.buffer), t;
}
const Ks = It("string"), ye = It("function"), wn = It("number"), Ut = (e) => e !== null && typeof e == "object", Ws = (e) => e === !0 || e === !1, Rt = (e) => {
  if (jt(e) !== "object")
    return !1;
  const t = dr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Js = Oe("Date"), Gs = Oe("File"), Vs = Oe("Blob"), Xs = Oe("FileList"), Ys = (e) => Ut(e) && ye(e.pipe), Zs = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ye(e.append) && ((t = jt(e)) === "formdata" || // detect form-data instance
  t === "object" && ye(e.toString) && e.toString() === "[object FormData]"));
}, ei = Oe("URLSearchParams"), ti = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function gn(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const bn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), En = (e) => !pt(e) && e !== bn;
function sr() {
  const { caseless: e } = En(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && gn(t, s) || s;
    Rt(t[i]) && Rt(n) ? t[i] = sr(t[i], n) : Rt(n) ? t[i] = sr({}, n) : it(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && wt(arguments[n], r);
  return t;
}
const ri = (e, t, r, { allOwnKeys: n } = {}) => (wt(t, (s, i) => {
  r && ye(s) ? e[i] = yn(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), ni = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), si = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, ii = (e, t, r, n) => {
  let s, i, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = r !== !1 && dr(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, oi = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ai = (e) => {
  if (!e)
    return null;
  if (it(e))
    return e;
  let t = e.length;
  if (!wn(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ci = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && dr(Uint8Array)), ui = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, li = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, fi = Oe("HTMLFormElement"), hi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Lr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), di = Oe("RegExp"), _n = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  wt(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, pi = (e) => {
  _n(e, (t, r) => {
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
}, mi = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return it(e) ? n(e) : n(String(e).split(t)), r;
}, yi = () => {
}, vi = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Vt = "abcdefghijklmnopqrstuvwxyz", Nr = "0123456789", Tn = {
  DIGIT: Nr,
  ALPHA: Vt,
  ALPHA_DIGIT: Vt + Vt.toUpperCase() + Nr
}, wi = (e = 16, t = Tn.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function gi(e) {
  return !!(e && ye(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const bi = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Ut(n)) {
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
}, Ei = Oe("AsyncFunction"), _i = (e) => e && (Ut(e) || ye(e)) && ye(e.then) && ye(e.catch), v = {
  isArray: it,
  isArrayBuffer: vn,
  isBuffer: Qs,
  isFormData: Zs,
  isArrayBufferView: $s,
  isString: Ks,
  isNumber: wn,
  isBoolean: Ws,
  isObject: Ut,
  isPlainObject: Rt,
  isUndefined: pt,
  isDate: Js,
  isFile: Gs,
  isBlob: Vs,
  isRegExp: di,
  isFunction: ye,
  isStream: Ys,
  isURLSearchParams: ei,
  isTypedArray: ci,
  isFileList: Xs,
  forEach: wt,
  merge: sr,
  extend: ri,
  trim: ti,
  stripBOM: ni,
  inherits: si,
  toFlatObject: ii,
  kindOf: jt,
  kindOfTest: Oe,
  endsWith: oi,
  toArray: ai,
  forEachEntry: ui,
  matchAll: li,
  isHTMLForm: fi,
  hasOwnProperty: Lr,
  hasOwnProp: Lr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _n,
  freezeMethods: pi,
  toObjectSet: mi,
  toCamelCase: hi,
  noop: yi,
  toFiniteNumber: vi,
  findKey: gn,
  global: bn,
  isContextDefined: En,
  ALPHABET: Tn,
  generateString: wi,
  isSpecCompliantForm: gi,
  toJSONObject: bi,
  isAsyncFn: Ei,
  isThenable: _i
};
function z(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
v.inherits(z, Error, {
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
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const On = z.prototype, Rn = {};
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
  Rn[e] = { value: e };
});
Object.defineProperties(z, Rn);
Object.defineProperty(On, "isAxiosError", { value: !0 });
z.from = (e, t, r, n, s, i) => {
  const o = Object.create(On);
  return v.toFlatObject(e, o, function(w) {
    return w !== Error.prototype;
  }, (u) => u !== "isAxiosError"), z.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Ti = null;
function ir(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function Cn(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Fr(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Cn(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Oi(e) {
  return v.isArray(e) && !e.some(ir);
}
const Ri = v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bt(e, t, r) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = v.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(T, E) {
    return !v.isUndefined(E[T]);
  });
  const n = r.metaTokens, s = r.visitor || l, i = r.dots, o = r.indexes, w = (r.Blob || typeof Blob < "u" && Blob) && v.isSpecCompliantForm(t);
  if (!v.isFunction(s))
    throw new TypeError("visitor must be a function");
  function g(m) {
    if (m === null)
      return "";
    if (v.isDate(m))
      return m.toISOString();
    if (!w && v.isBlob(m))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(m) || v.isTypedArray(m) ? w && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function l(m, T, E) {
    let O = m;
    if (m && !E && typeof m == "object") {
      if (v.endsWith(T, "{}"))
        T = n ? T : T.slice(0, -2), m = JSON.stringify(m);
      else if (v.isArray(m) && Oi(m) || (v.isFileList(m) || v.endsWith(T, "[]")) && (O = v.toArray(m)))
        return T = Cn(T), O.forEach(function(M, A) {
          !(v.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Fr([T], A, i) : o === null ? T : T + "[]",
            g(M)
          );
        }), !1;
    }
    return ir(m) ? !0 : (t.append(Fr(E, T, i), g(m)), !1);
  }
  const _ = [], P = Object.assign(Ri, {
    defaultVisitor: l,
    convertValue: g,
    isVisitable: ir
  });
  function b(m, T) {
    if (!v.isUndefined(m)) {
      if (_.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      _.push(m), v.forEach(m, function(O, L) {
        (!(v.isUndefined(O) || O === null) && s.call(
          t,
          O,
          v.isString(L) ? L.trim() : L,
          T,
          P
        )) === !0 && b(O, T ? T.concat(L) : [L]);
      }), _.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Mr(e) {
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
function pr(e, t) {
  this._pairs = [], e && Bt(e, this, t);
}
const Sn = pr.prototype;
Sn.append = function(t, r) {
  this._pairs.push([t, r]);
};
Sn.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Mr);
  } : Mr;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Ci(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xn(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Ci, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = v.isURLSearchParams(t) ? t.toString() : new pr(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Si {
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
    v.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const kr = Si, An = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xi = typeof URLSearchParams < "u" ? URLSearchParams : pr, Ai = typeof FormData < "u" ? FormData : null, Pi = typeof Blob < "u" ? Blob : null, Li = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xi,
    FormData: Ai,
    Blob: Pi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Pn = typeof window < "u" && typeof document < "u", Ni = ((e) => Pn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Fi = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Pn,
  hasStandardBrowserEnv: Ni,
  hasStandardBrowserWebWorkerEnv: Fi
}, Symbol.toStringTag, { value: "Module" })), Te = {
  ...Mi,
  ...Li
};
function ki(e, t) {
  return Bt(e, new Te.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return Te.isNode && v.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Di(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ji(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Ln(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    const u = Number.isFinite(+o), w = i >= r.length;
    return o = !o && v.isArray(s) ? s.length : o, w ? (v.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !u) : ((!s[o] || !v.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && v.isArray(s[o]) && (s[o] = ji(s[o])), !u);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const r = {};
    return v.forEachEntry(e, (n, s) => {
      t(Di(n), s, r, 0);
    }), r;
  }
  return null;
}
function Ii(e, t, r) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const mr = {
  transitional: An,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = v.isObject(t);
    if (i && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t))
      return s && s ? JSON.stringify(Ln(t)) : t;
    if (v.isArrayBuffer(t) || v.isBuffer(t) || v.isStream(t) || v.isFile(t) || v.isBlob(t))
      return t;
    if (v.isArrayBufferView(t))
      return t.buffer;
    if (v.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ki(t, this.formSerializer).toString();
      if ((u = v.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const w = this.env && this.env.FormData;
        return Bt(
          u ? { "files[]": t } : t,
          w && new w(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), Ii(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || mr.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && v.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? z.from(u, z.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  mr.headers[e] = {};
});
const yr = mr, Ui = v.toObjectSet([
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
]), Bi = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && Ui[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Dr = Symbol("internals");
function at(e) {
  return e && String(e).trim().toLowerCase();
}
function Ct(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(Ct) : String(e);
}
function qi(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const zi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xt(e, t, r, n, s) {
  if (v.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!v.isString(t)) {
    if (v.isString(n))
      return t.indexOf(n) !== -1;
    if (v.isRegExp(n))
      return n.test(t);
  }
}
function Hi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Qi(e, t) {
  const r = v.toCamelCase(" " + t);
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
    function i(u, w, g) {
      const l = at(w);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const _ = v.findKey(s, l);
      (!_ || s[_] === void 0 || g === !0 || g === void 0 && s[_] !== !1) && (s[_ || w] = Ct(u));
    }
    const o = (u, w) => v.forEach(u, (g, l) => i(g, l, w));
    return v.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : v.isString(t) && (t = t.trim()) && !zi(t) ? o(Bi(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = at(t), t) {
      const n = v.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return qi(s);
        if (v.isFunction(r))
          return r.call(this, s, n);
        if (v.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = at(t), t) {
      const n = v.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Xt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = at(o), o) {
        const u = v.findKey(n, o);
        u && (!r || Xt(n, n[u], u, r)) && (delete n[u], s = !0);
      }
    }
    return v.isArray(t) ? t.forEach(i) : i(t), s;
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
    return v.forEach(this, (s, i) => {
      const o = v.findKey(n, i);
      if (o) {
        r[o] = Ct(s), delete r[i];
        return;
      }
      const u = t ? Hi(i) : String(i).trim();
      u !== i && delete r[i], r[u] = Ct(s), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return v.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && v.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Dr] = this[Dr] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const u = at(o);
      n[u] || (Qi(s, o), n[u] = !0);
    }
    return v.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
qt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(qt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
v.freezeMethods(qt);
const xe = qt;
function Yt(e, t) {
  const r = this || yr, n = t || r, s = xe.from(n.headers);
  let i = n.data;
  return v.forEach(e, function(u) {
    i = u.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function Nn(e) {
  return !!(e && e.__CANCEL__);
}
function gt(e, t, r) {
  z.call(this, e ?? "canceled", z.ERR_CANCELED, t, r), this.name = "CanceledError";
}
v.inherits(gt, z, {
  __CANCEL__: !0
});
function $i(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new z(
    "Request failed with status code " + r.status,
    [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Ki = Te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, s, i, o, u) {
        const w = [];
        w.push(r + "=" + encodeURIComponent(n)), v.isNumber(s) && w.push("expires=" + new Date(s).toGMTString()), v.isString(i) && w.push("path=" + i), v.isString(o) && w.push("domain=" + o), u === !0 && w.push("secure"), document.cookie = w.join("; ");
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
function Wi(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ji(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Fn(e, t) {
  return e && !Wi(t) ? Ji(e, t) : t;
}
const Gi = Te.hasStandardBrowserEnv ? (
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
      const u = v.isString(o) ? s(o) : o;
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
function Vi(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Xi(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(w) {
    const g = Date.now(), l = n[i];
    o || (o = g), r[s] = w, n[s] = g;
    let _ = i, P = 0;
    for (; _ !== s; )
      P += r[_++], _ = _ % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), g - o < t)
      return;
    const b = l && g - l;
    return b ? Math.round(P * 1e3 / b) : void 0;
  };
}
function jr(e, t) {
  let r = 0;
  const n = Xi(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, u = i - r, w = n(u), g = i <= o;
    r = i;
    const l = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: u,
      rate: w || void 0,
      estimated: w && o && g ? (o - i) / w : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Yi = typeof XMLHttpRequest < "u", Zi = Yi && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = xe.from(e.headers).normalize(), o = e.responseType;
    let u;
    function w() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let g;
    if (v.isFormData(s)) {
      if (Te.hasStandardBrowserEnv || Te.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((g = i.getContentType()) !== !1) {
        const [m, ...T] = g ? g.split(";").map((E) => E.trim()).filter(Boolean) : [];
        i.setContentType([m || "multipart/form-data", ...T].join("; "));
      }
    }
    let l = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", T = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(m + ":" + T));
    }
    const _ = Fn(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), xn(_, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function P() {
      if (!l)
        return;
      const m = xe.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), E = {
        data: !o || o === "text" || o === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: m,
        config: e,
        request: l
      };
      $i(function(L) {
        r(L), w();
      }, function(L) {
        n(L), w();
      }, E), l = null;
    }
    if ("onloadend" in l ? l.onloadend = P : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(P);
    }, l.onabort = function() {
      l && (n(new z("Request aborted", z.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      n(new z("Network Error", z.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let T = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || An;
      e.timeoutErrorMessage && (T = e.timeoutErrorMessage), n(new z(
        T,
        E.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
        e,
        l
      )), l = null;
    }, Te.hasStandardBrowserEnv) {
      const m = Gi(_) && e.xsrfCookieName && Ki.read(e.xsrfCookieName);
      m && i.set(e.xsrfHeaderName, m);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in l && v.forEach(i.toJSON(), function(T, E) {
      l.setRequestHeader(E, T);
    }), v.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), o && o !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", jr(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", jr(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (m) => {
      l && (n(!m || m.type ? new gt(null, e, l) : m), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const b = Vi(_);
    if (b && Te.protocols.indexOf(b) === -1) {
      n(new z("Unsupported protocol " + b + ":", z.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(s || null);
  });
}, or = {
  http: Ti,
  xhr: Zi
};
v.forEach(or, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ir = (e) => `- ${e}`, eo = (e) => v.isFunction(e) || e === null || e === !1, Mn = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !eo(r) && (n = or[(o = String(r)).toLowerCase()], n === void 0))
        throw new z(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([u, w]) => `adapter ${u} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Ir).join(`
`) : " " + Ir(i[0]) : "as no adapter specified";
      throw new z(
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
    throw new gt(null, e);
}
function Ur(e) {
  return Zt(e), e.headers = xe.from(e.headers), e.data = Yt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mn.getAdapter(e.adapter || yr.adapter)(e).then(function(n) {
    return Zt(e), n.data = Yt.call(
      e,
      e.transformResponse,
      n
    ), n.headers = xe.from(n.headers), n;
  }, function(n) {
    return Nn(n) || (Zt(e), n && n.response && (n.response.data = Yt.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = xe.from(n.response.headers))), Promise.reject(n);
  });
}
const Br = (e) => e instanceof xe ? e.toJSON() : e;
function st(e, t) {
  t = t || {};
  const r = {};
  function n(g, l, _) {
    return v.isPlainObject(g) && v.isPlainObject(l) ? v.merge.call({ caseless: _ }, g, l) : v.isPlainObject(l) ? v.merge({}, l) : v.isArray(l) ? l.slice() : l;
  }
  function s(g, l, _) {
    if (v.isUndefined(l)) {
      if (!v.isUndefined(g))
        return n(void 0, g, _);
    } else
      return n(g, l, _);
  }
  function i(g, l) {
    if (!v.isUndefined(l))
      return n(void 0, l);
  }
  function o(g, l) {
    if (v.isUndefined(l)) {
      if (!v.isUndefined(g))
        return n(void 0, g);
    } else
      return n(void 0, l);
  }
  function u(g, l, _) {
    if (_ in t)
      return n(g, l);
    if (_ in e)
      return n(void 0, g);
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
    headers: (g, l) => s(Br(g), Br(l), !0)
  };
  return v.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const _ = w[l] || s, P = _(e[l], t[l], l);
    v.isUndefined(P) && _ !== u || (r[l] = P);
  }), r;
}
const kn = "1.6.1", vr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  vr[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qr = {};
vr.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + kn + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, u) => {
    if (t === !1)
      throw new z(
        s(o, " has been removed" + (r ? " in " + r : "")),
        z.ERR_DEPRECATED
      );
    return r && !qr[o] && (qr[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, u) : !0;
  };
};
function to(e, t, r) {
  if (typeof e != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const u = e[i], w = u === void 0 || o(u, i, e);
      if (w !== !0)
        throw new z("option " + i + " must be " + w, z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new z("Unknown option " + i, z.ERR_BAD_OPTION);
  }
}
const ar = {
  assertOptions: to,
  validators: vr
}, Ae = ar.validators;
class Pt {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new kr(),
      response: new kr()
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
    n !== void 0 && ar.assertOptions(n, {
      silentJSONParsing: Ae.transitional(Ae.boolean),
      forcedJSONParsing: Ae.transitional(Ae.boolean),
      clarifyTimeoutError: Ae.transitional(Ae.boolean)
    }, !1), s != null && (v.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ar.assertOptions(s, {
      encode: Ae.function,
      serialize: Ae.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && v.merge(
      i.common,
      i[r.method]
    );
    i && v.forEach(
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
    const g = [];
    this.interceptors.response.forEach(function(T) {
      g.push(T.fulfilled, T.rejected);
    });
    let l, _ = 0, P;
    if (!w) {
      const m = [Ur.bind(this), void 0];
      for (m.unshift.apply(m, u), m.push.apply(m, g), P = m.length, l = Promise.resolve(r); _ < P; )
        l = l.then(m[_++], m[_++]);
      return l;
    }
    P = u.length;
    let b = r;
    for (_ = 0; _ < P; ) {
      const m = u[_++], T = u[_++];
      try {
        b = m(b);
      } catch (E) {
        T.call(this, E);
        break;
      }
    }
    try {
      l = Ur.call(this, b);
    } catch (m) {
      return Promise.reject(m);
    }
    for (_ = 0, P = g.length; _ < P; )
      l = l.then(g[_++], g[_++]);
    return l;
  }
  getUri(t) {
    t = st(this.defaults, t);
    const r = Fn(t.baseURL, t.url);
    return xn(r, t.params, t.paramsSerializer);
  }
}
v.forEach(["delete", "get", "head", "options"], function(t) {
  Pt.prototype[t] = function(r, n) {
    return this.request(st(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(t) {
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
  Pt.prototype[t] = r(), Pt.prototype[t + "Form"] = r(!0);
});
const St = Pt;
class wr {
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
      token: new wr(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const ro = wr;
function no(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function so(e) {
  return v.isObject(e) && e.isAxiosError === !0;
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
const io = cr;
function Dn(e) {
  const t = new St(e), r = yn(St.prototype.request, t);
  return v.extend(r, St.prototype, t, { allOwnKeys: !0 }), v.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Dn(st(e, s));
  }, r;
}
const X = Dn(yr);
X.Axios = St;
X.CanceledError = gt;
X.CancelToken = ro;
X.isCancel = Nn;
X.VERSION = kn;
X.toFormData = Bt;
X.AxiosError = z;
X.Cancel = X.CanceledError;
X.all = function(t) {
  return Promise.all(t);
};
X.spread = no;
X.isAxiosError = so;
X.mergeConfig = st;
X.AxiosHeaders = xe;
X.formToJSON = (e) => Ln(v.isHTMLForm(e) ? new FormData(e) : e);
X.getAdapter = Mn.getAdapter;
X.HttpStatusCode = io;
X.default = X;
const zr = X, jn = H.createContext(null), No = () => H.useContext(jn), oo = ({
  children: e,
  baseURL: t
}) => {
  const [r, n] = mn(), s = zs(), i = I.useMemo(() => {
    const o = zr.create({
      baseURL: t,
      headers: {
        Authorization: r ? `Bearer ${r.access_token}` : void 0,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    return o.interceptors.response.use((u) => u, async (u) => {
      const w = u.config;
      if (r && u.response.status === 401 && !w._retry) {
        w._retry = !0;
        try {
          const {
            data: {
              data: g
            }
          } = await zr.post("/api/user/refresh", {
            refresh_token: r.refresh_token
          }, {
            baseURL: t,
            headers: {
              Authorization: `Bearer ${r.access_token}`,
              "X-Requested-With": "XMLHttpRequest"
            }
          });
          return n(g), w.headers.Authorization = `Bearer ${g.access_token}`, o(w);
        } catch {
          W.warn("Сессия истекла"), s();
        }
      }
      throw u;
    }), o;
  }, [t, r, n, s]);
  return /* @__PURE__ */ V(jn.Provider, { value: {
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
const ao = [{
  id: "users",
  path: "/users",
  component: () => import("./UsersList-d6dd1561.js"),
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
var In = {};
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
})(In);
const co = [{
  id: "program-constructor",
  path: "/program-constructor",
  component: () => import("./ProgramConstructor-225450f7.js"),
  windowOptions: {
    title: "Конструктор программы",
    width: 600,
    height: 500,
    maximized: !0
  },
  shortcut: {
    title: "Конструктор программы",
    icon: In.faCode,
    color: "#ef4444",
    group: "general",
    order: 1e3
  }
}], Un = [...co, ...ao], Bn = H.createContext(null), uo = () => {
  const e = H.useContext(Bn);
  if (!e)
    throw new Error("useRouteContext must be used within a RouteContextProvider");
  return e;
}, lo = ({
  children: e,
  routes: t
}) => /* @__PURE__ */ V(Bn.Provider, { value: {
  routes: t
}, children: e }), fo = new Ds({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    },
    mutations: {
      retry: !1
    }
  }
}), ho = Wn({
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
}), po = ({
  children: e
}) => /* @__PURE__ */ V(Jn, { theme: ho, children: /* @__PURE__ */ V(oo, { children: /* @__PURE__ */ V(js, { client: fo, children: /* @__PURE__ */ V(lo, { routes: Un, children: e }) }) }) }), mo = () => {
  const {
    routes: e
  } = uo();
  return e;
};
var qn = {};
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
})(qn);
const yo = ({
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
  }, children: /* @__PURE__ */ V(Vn, { icon: qn.faCircleNotch, css: [{
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))"
  }, en`
                font-size: 32px;
              `], spin: !0 }) })
] }) : e, vo = ({
  id: e
}) => {
  const t = mo(), r = I.useMemo(() => {
    const {
      component: n,
      ...s
    } = t.find((i) => i.id === e) || {};
    if (!n)
      throw new Error(`Route with id ${e} not found`);
    return {
      ...s,
      Component: I.lazy(() => n())
    };
  }, [e, t]);
  return /* @__PURE__ */ V(I.Suspense, { fallback: /* @__PURE__ */ V(yo, {}), children: /* @__PURE__ */ V(r.Component, {}) });
}, zn = H.createContext(null), Fo = () => {
  const e = H.useContext(zn);
  if (!e)
    throw new Error("useWindowContext must be used within a WindowContextProvider");
  return e;
}, wo = ({
  children: e,
  ...t
}) => /* @__PURE__ */ V(zn.Provider, { value: t, children: e }), go = ({
  el: e,
  match: t,
  window: r
}) => tn.createPortal(/* @__PURE__ */ V(wo, { width: 0, height: 0, title: "", position: {
  x: 0,
  y: 0
}, maximized: !0, folded: !0, focused: !0, focus: () => r.focus(), blur: () => r.blur(), maximize: () => r.maximize(), minimize: () => r.restore(), fold: () => r.minimize(), close: () => r.close(), updatePosition: ({
  x: n,
  y: s
}) => r.showAt(n, s), setTitle: (n) => r.setTitle(n), setWidth: (n) => r.setWidth(n), setHeight: (n) => r.setHeight(n), children: /* @__PURE__ */ V(vo, { id: t.route.id }) }), e), bo = ({
  eventEmitter: e
}) => {
  const [t, r] = H.useState([]);
  return H.useEffect(() => (e.on("add", (n, s, i) => {
    r((o) => [...o, {
      el: n,
      match: s,
      window: i
    }]);
  }), e.on("destroy", (n) => {
    r((s) => s.filter((i) => i.el !== n));
  }), () => {
    e.removeAllListeners("add"), e.removeAllListeners("destroy");
  }), [e]), /* @__PURE__ */ lr(po, { children: [
    /* @__PURE__ */ V(vs, {}),
    t.map((n) => /* @__PURE__ */ V(go, { ...n }, n.match.route.id))
  ] });
};
var Hn = { exports: {} };
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
    }, i = 10, o = typeof process == "object" && typeof process.nextTick == "function", u = typeof Symbol == "function", w = typeof Reflect == "object", g = typeof setImmediate == "function", l = g ? setImmediate : setTimeout, _ = u ? w && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(a) {
      var c = Object.getOwnPropertyNames(a);
      return c.push.apply(c, Object.getOwnPropertySymbols(a)), c;
    } : Object.keys;
    function P() {
      this._events = {}, this._conf && b.call(this, this._conf);
    }
    function b(a) {
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
    function E(a, c) {
      for (var f = {}, h, d = a.length, y = c ? c.length : 0, R = 0; R < d; R++)
        h = a[R], f[h] = R < y ? c[R] : r;
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
      var y = a._observers;
      y ? y.push(this) : a._observers = [this];
    }
    Object.assign(O.prototype, {
      subscribe: function(a, c, f) {
        var h = this, d = this._target, y = this._emitter, R = this._listeners, x = function() {
          var C = T.apply(null, arguments), S = {
            data: C,
            name: c,
            original: a
          };
          if (f) {
            var N = f.call(d, S);
            N !== !1 && y.emit.apply(y, [S.name].concat(C));
            return;
          }
          y.emit.apply(y, [c].concat(C));
        };
        if (R[a])
          throw Error("Event '" + a + "' is already listening");
        this._listenersCount++, y._newListener && y._removeListener && !h._onNewListener ? (this._onNewListener = function(C) {
          C === c && R[a] === null && (R[a] = x, h._on.call(d, a, x));
        }, y.on("newListener", this._onNewListener), this._onRemoveListener = function(C) {
          C === c && !y.hasListeners(C) && R[a] && (R[a] = null, h._off.call(d, a, x));
        }, R[a] = null, y.on("removeListener", this._onRemoveListener)) : (R[a] = x, h._on.call(d, a, x));
      },
      unsubscribe: function(a) {
        var c = this, f = this._listeners, h = this._emitter, d, y, R = this._off, x = this._target, C;
        if (a && typeof a != "string")
          throw TypeError("event must be a string");
        function S() {
          c._onNewListener && (h.off("newListener", c._onNewListener), h.off("removeListener", c._onRemoveListener), c._onNewListener = null, c._onRemoveListener = null);
          var N = j.call(h, c);
          h._observers.splice(N, 1);
        }
        if (a) {
          if (d = f[a], !d)
            return;
          R.call(x, a, d), delete f[a], --this._listenersCount || S();
        } else {
          for (y = _(f), C = y.length; C-- > 0; )
            a = y[C], R.call(x, a, f[a]);
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
      var y = Object.keys(a), R = y.length, x, C, S;
      function N(Q) {
        throw Error('Invalid "' + x + '" option value' + (Q ? ". Reason: " + Q : ""));
      }
      for (var ee = 0; ee < R; ee++) {
        if (x = y[ee], !h && !n.call(c, x))
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
      return f === 1 ? function(y, R) {
        if (typeof y === h)
          return y;
        R(c);
      } : f === 2 ? function(y, R) {
        var x = typeof y;
        if (x === h || x === d)
          return y;
        R(c);
      } : function(y, R) {
        for (var x = typeof y, C = f; C-- > 0; )
          if (x === a[C])
            return y;
        R(c);
      };
    }
    var k = A(["function"]), q = A(["object", "function"]);
    function K(a, c, f) {
      var h, d, y = 0, R, x = new a(function(C, S, N) {
        f = L(f, {
          timeout: 0,
          overload: !1
        }, {
          timeout: function(J, se) {
            return J *= 1, (typeof J != "number" || J < 0 || !Number.isFinite(J)) && se("timeout must be a positive number"), J;
          }
        }), h = !f.overload && typeof a.prototype.cancel == "function" && typeof N == "function";
        function ee() {
          d && (d = null), y && (clearTimeout(y), y = 0);
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
        }), R = !0), f.timeout > 0 && (y = setTimeout(function() {
          var J = Error("timeout");
          J.code = "ETIMEDOUT", y = 0, x.cancel(J), S(J);
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
    function j(a) {
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
        var y = typeof c;
        if (y === "string") {
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
          y === "object" ? d = c.length : (c = [c], d = 1);
      }
      var Q = null, $, J, se, zt, Ht, ot = c[h], Qt = c[h + 1], Re, oe;
      if (h === d)
        f._listeners && (typeof f._listeners == "function" ? (a && a.push(f._listeners), Q = [f]) : (a && a.push.apply(a, f._listeners), Q = [f]));
      else if (ot === "*") {
        for (Re = _(f), x = Re.length; x-- > 0; )
          $ = Re[x], $ !== "_listeners" && (oe = U(a, c, f[$], h + 1, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else if (ot === "**") {
        for (Ht = h + 1 === d || h + 2 === d && Qt === "*", Ht && f._listeners && (Q = U(a, c, f, d, d)), Re = _(f), x = Re.length; x-- > 0; )
          $ = Re[x], $ !== "_listeners" && ($ === "*" || $ === "**" ? (f[$]._listeners && !Ht && (oe = U(a, c, f[$], d, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe)), oe = U(a, c, f[$], h, d)) : $ === Qt ? oe = U(a, c, f[$], h + 2, d) : oe = U(a, c, f[$], h, d), oe && (Q ? Q.push.apply(Q, oe) : Q = oe));
        return Q;
      } else
        f[ot] && (Q = U(a, c, f[ot], h + 1, d));
      if (J = f["*"], J && U(a, c, J, h + 1, d), se = f["**"], se)
        if (h < d)
          for (se._listeners && U(a, c, se, d, d), Re = _(se), x = Re.length; x-- > 0; )
            $ = Re[x], $ !== "_listeners" && ($ === Qt ? U(a, c, se[$], h + 2, d) : $ === ot ? U(a, c, se[$], h + 1, d) : (zt = {}, zt[$] = se[$], U(a, c, { "**": zt }, h + 1, d)));
        else
          se._listeners ? U(a, c, se, d, d) : se["*"] && se["*"]._listeners && U(a, c, se["*"], d, d);
      return Q;
    }
    function le(a, c, f) {
      var h = 0, d = 0, y, R = this.delimiter, x = R.length, C;
      if (typeof a == "string")
        if ((y = a.indexOf(R)) !== -1) {
          C = new Array(5);
          do
            C[h++] = a.slice(d, y), d = y + x;
          while ((y = a.indexOf(R, d)) !== -1);
          C[h++] = a.slice(d);
        } else
          C = [a], h = 1;
      else
        C = a, h = a.length;
      if (h > 1) {
        for (y = 0; y + 1 < h; y++)
          if (C[y] === "**" && C[y + 1] === "**")
            return;
      }
      var S = this.listenerTree, N;
      for (y = 0; y < h; y++)
        if (N = C[y], S = S[N] || (S[N] = {}), y === h - 1)
          return S._listeners ? (typeof S._listeners == "function" && (S._listeners = [S._listeners]), f ? S._listeners.unshift(c) : S._listeners.push(c), !S._listeners.warned && this._maxListeners > 0 && S._listeners.length > this._maxListeners && (S._listeners.warned = !0, m.call(this, S._listeners.length, N))) : S._listeners = c, !0;
      return !0;
    }
    function ge(a, c, f, h) {
      for (var d = _(a), y = d.length, R, x, C, S = a._listeners, N; y-- > 0; )
        x = d[y], R = a[x], x === "_listeners" ? C = f : C = f ? f.concat(x) : [x], N = h || typeof x == "symbol", S && c.push(N ? C : C.join(this.delimiter)), typeof R == "object" && ge.call(this, R, c, C, N);
      return c;
    }
    function te(a) {
      for (var c = _(a), f = c.length, h, d, y; f-- > 0; )
        d = c[f], h = a[d], h && (y = !0, d !== "_listeners" && !te(h) && delete a[d]);
      return y;
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
        var h = f.async, d = f.promisify, y = f.nextTick, R = f.objectify;
      }
      if (h || y || d) {
        var x = c, C = c._origin || c;
        if (y && !o)
          throw Error("process.nextTick is not supported");
        d === r && (d = c.constructor.name === "AsyncFunction"), c = function() {
          var S = arguments, N = this, ee = this.event;
          return d ? y ? Promise.resolve() : new Promise(function(Q) {
            l(Q);
          }).then(function() {
            return N.event = ee, x.apply(N, S);
          }) : (y ? process.nextTick : l)(function() {
            N.event = ee, x.apply(N, S);
          });
        }, c._async = !0, c._origin = C;
      }
      return [c, R ? new fe(this, a, c) : this];
    }
    function D(a) {
      this._events = {}, this._newListener = !1, this._removeListener = !1, this.verboseMemoryLeak = !1, b.call(this, a);
    }
    D.EventEmitter2 = D, D.prototype.listenTo = function(a, c, f) {
      if (typeof a != "object")
        throw TypeError("target musts be an object");
      var h = this;
      f = L(f, {
        on: r,
        off: r,
        reducers: r
      }, {
        on: k,
        off: k,
        reducers: q
      });
      function d(y) {
        if (typeof y != "object")
          throw TypeError("events must be an object");
        var R = f.reducers, x = j.call(h, a), C;
        x === -1 ? C = new O(h, a, f) : C = h._observers[x];
        for (var S = _(y), N = S.length, ee, Q = typeof R == "function", $ = 0; $ < N; $++)
          ee = S[$], C.subscribe(
            ee,
            y[ee] || ee,
            Q ? R : R && R[ee]
          );
      }
      return s(c) ? d(E(c)) : d(typeof c == "string" ? E(c.split(/\s+/)) : c), this;
    }, D.prototype.stopListeningTo = function(a, c) {
      var f = this._observers;
      if (!f)
        return !1;
      var h = f.length, d, y = !1;
      if (a && typeof a != "object")
        throw TypeError("target should be an object");
      for (; h-- > 0; )
        d = f[h], (!a || d._target === a) && (d.unsubscribe(c), y = !0);
      return y;
    }, D.prototype.delimiter = ".", D.prototype.setMaxListeners = function(a) {
      a !== r && (this._maxListeners = a, this._conf || (this._conf = {}), this._conf.maxListeners = a);
    }, D.prototype.getMaxListeners = function() {
      return this._maxListeners;
    }, D.prototype.event = "", D.prototype.once = function(a, c, f) {
      return this._once(a, c, !1, f);
    }, D.prototype.prependOnceListener = function(a, c, f) {
      return this._once(a, c, !0, f);
    }, D.prototype._once = function(a, c, f, h) {
      return this._many(a, 1, c, f, h);
    }, D.prototype.many = function(a, c, f, h) {
      return this._many(a, c, f, !1, h);
    }, D.prototype.prependMany = function(a, c, f, h) {
      return this._many(a, c, f, !0, h);
    }, D.prototype._many = function(a, c, f, h, d) {
      var y = this;
      if (typeof f != "function")
        throw new Error("many only accepts instances of Function");
      function R() {
        return --c === 0 && y.off(a, R), f.apply(this, arguments);
      }
      return R._origin = f, this._on(a, R, h, d);
    }, D.prototype.emit = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || P.call(this);
      var a = arguments[0], c, f = this.wildcard, h, d, y, R, x;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return !1;
      if (f && (c = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (d = a.length, u) {
          for (y = 0; y < d; y++)
            if (typeof a[y] == "symbol") {
              x = !0;
              break;
            }
        }
        x || (a = a.join(this.delimiter));
      }
      var C = arguments.length, S;
      if (this._all && this._all.length)
        for (S = this._all.slice(), y = 0, d = S.length; y < d; y++)
          switch (this.event = a, C) {
            case 1:
              S[y].call(this, a);
              break;
            case 2:
              S[y].call(this, a, arguments[1]);
              break;
            case 3:
              S[y].call(this, a, arguments[1], arguments[2]);
              break;
            default:
              S[y].apply(this, arguments);
          }
      if (f)
        S = [], U.call(this, S, c, this.listenerTree, 0, d);
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
        for (y = 0, d = S.length; y < d; y++)
          switch (this.event = a, C) {
            case 1:
              S[y].call(this);
              break;
            case 2:
              S[y].call(this, arguments[1]);
              break;
            case 3:
              S[y].call(this, arguments[1], arguments[2]);
              break;
            default:
              S[y].apply(this, h);
          }
        return !0;
      } else if (!this.ignoreErrors && !this._all && a === "error")
        throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
      return !!this._all;
    }, D.prototype.emitAsync = function() {
      if (!this._events && !this._all)
        return !1;
      this._events || P.call(this);
      var a = arguments[0], c = this.wildcard, f, h, d, y, R, x;
      if (a === "newListener" && !this._newListener && !this._events.newListener)
        return Promise.resolve([!1]);
      if (c && (f = a, a !== "newListener" && a !== "removeListener" && typeof a == "object")) {
        if (y = a.length, u) {
          for (R = 0; R < y; R++)
            if (typeof a[R] == "symbol") {
              h = !0;
              break;
            }
        }
        h || (a = a.join(this.delimiter));
      }
      var C = [], S = arguments.length, N;
      if (this._all)
        for (R = 0, y = this._all.length; R < y; R++)
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
      if (c ? (N = [], U.call(this, N, f, this.listenerTree, 0)) : N = this._events[a], typeof N == "function")
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
        for (R = 0, y = N.length; R < y; R++)
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
    }, D.prototype.on = function(a, c, f) {
      return this._on(a, c, !1, f);
    }, D.prototype.prependListener = function(a, c, f) {
      return this._on(a, c, !0, f);
    }, D.prototype.onAny = function(a) {
      return this._onAny(a, !1);
    }, D.prototype.prependAny = function(a) {
      return this._onAny(a, !0);
    }, D.prototype.addListener = D.prototype.on, D.prototype._onAny = function(a, c) {
      if (typeof a != "function")
        throw new Error("onAny only accepts instances of Function");
      return this._all || (this._all = []), c ? this._all.unshift(a) : this._all.push(a), this;
    }, D.prototype._on = function(a, c, f, h) {
      if (typeof a == "function")
        return this._onAny(a, c), this;
      if (typeof c != "function")
        throw new Error("on only accepts instances of Function");
      this._events || P.call(this);
      var d = this, y;
      return h !== r && (y = re.call(this, a, c, h), c = y[0], d = y[1]), this._newListener && this.emit("newListener", a, c), this.wildcard ? (le.call(this, a, c, f), d) : (this._events[a] ? (typeof this._events[a] == "function" && (this._events[a] = [this._events[a]]), f ? this._events[a].unshift(c) : this._events[a].push(c), !this._events[a].warned && this._maxListeners > 0 && this._events[a].length > this._maxListeners && (this._events[a].warned = !0, m.call(this, this._events[a].length, a))) : this._events[a] = c, d);
    }, D.prototype.off = function(a, c) {
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
      for (var y = 0; y < h.length; y++) {
        var R = h[y];
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
    }, D.prototype.offAny = function(a) {
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
    }, D.prototype.removeListener = D.prototype.off, D.prototype.removeAllListeners = function(a) {
      if (a === r)
        return !this._events || P.call(this), this;
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
    }, D.prototype.listeners = function(a) {
      var c = this._events, f, h, d, y, R;
      if (a === r) {
        if (this.wildcard)
          throw Error("event name required for wildcard emitter");
        if (!c)
          return [];
        for (f = _(c), y = f.length, d = []; y-- > 0; )
          h = c[f[y]], typeof h == "function" ? d.push(h) : d.push.apply(d, h);
        return d;
      } else {
        if (this.wildcard) {
          if (R = this.listenerTree, !R)
            return [];
          var x = [], C = typeof a == "string" ? a.split(this.delimiter) : a.slice();
          return U.call(this, x, C, R, 0), x;
        }
        return c ? (h = c[a], h ? typeof h == "function" ? [h] : h : []) : [];
      }
    }, D.prototype.eventNames = function(a) {
      var c = this._events;
      return this.wildcard ? ge.call(this, this.listenerTree, [], null, a) : c ? _(c) : [];
    }, D.prototype.listenerCount = function(a) {
      return this.listeners(a).length;
    }, D.prototype.hasListeners = function(a) {
      if (this.wildcard) {
        var c = [], f = typeof a == "string" ? a.split(this.delimiter) : a.slice();
        return U.call(this, c, f, this.listenerTree, 0), c.length > 0;
      }
      var h = this._events, d = this._all;
      return !!(d && d.length || h && (a === r ? _(h).length : h[a]));
    }, D.prototype.listenersAny = function() {
      return this._all ? this._all : [];
    }, D.prototype.waitFor = function(a, c) {
      var f = this, h = typeof c;
      return h === "number" ? c = { timeout: c } : h === "function" && (c = { filter: c }), c = L(c, {
        timeout: 0,
        filter: r,
        handleError: !1,
        Promise,
        overload: !1
      }, {
        filter: k,
        Promise: M
      }), K(c.Promise, function(d, y, R) {
        function x() {
          var C = c.filter;
          if (!(C && !C.apply(f, arguments)))
            if (f.off(a, x), c.handleError) {
              var S = arguments[0];
              S ? y(S) : d(T.apply(null, arguments).slice(1));
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
      return K(h, function(d, y, R) {
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
          a.removeListener(c, C), y(N);
        }, a.once("error", S)), R(function() {
          S && a.removeListener("error", S), a.removeListener(c, C);
        }), a.once(c, C);
      }, {
        timeout: f.timeout,
        overload: f.overload
      });
    }
    var ce = D.prototype;
    Object.defineProperties(D, {
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
      return D;
    }) : e.exports = D;
  })();
})(Hn);
var Eo = Hn.exports;
const _o = /* @__PURE__ */ Gn(Eo);
var nt, Se, He, Lt, Qn, Nt, $n;
class To {
  constructor(t) {
    B(this, Lt);
    B(this, Nt);
    B(this, nt, []);
    B(this, Se, void 0);
    B(this, He, void 0);
    F(this, nt, os(t)), F(this, Se, G(this, Lt, Qn).call(this)), F(this, He, new _o()), G(this, Nt, $n).call(this);
  }
  match(t) {
    const r = as(p(this, nt), t);
    if (r)
      return {
        windowOptions: r.route.windowOptions,
        renderComponent: (n, s) => p(this, He).emit("add", n, r, s),
        destroyComponent: (n) => p(this, He).emit("destroy", n)
      };
  }
  getShortcuts() {
    return p(this, nt).filter(([t]) => t.shortcut).map(([t]) => ({
      ...t.shortcut,
      route: t.path
    }));
  }
}
nt = new WeakMap(), Se = new WeakMap(), He = new WeakMap(), Lt = new WeakSet(), Qn = function() {
  return F(this, Se, document.createElement("div")), p(this, Se).id = "react-injector", p(this, Se);
}, Nt = new WeakSet(), $n = function() {
  document.body.appendChild(p(this, Se)), er.createRoot(p(this, Se)).render(/* @__PURE__ */ V(bo, { eventEmitter: p(this, He) }));
};
const Oo = (e) => {
  const t = new To(e.filter((r) => !r.notExposeToLibrary));
  window.__REACT_INJECTOR__ = t;
};
Oo(Un);
export {
  Xn as F,
  W as Q,
  kt as S,
  gs as a,
  ie as b,
  hr as c,
  V as d,
  Lo as e,
  nr as f,
  Fo as g,
  No as h,
  Dt as i,
  lr as j,
  yo as k,
  ve as n,
  Es as r,
  Ao as s,
  bs as t,
  Po as u
};