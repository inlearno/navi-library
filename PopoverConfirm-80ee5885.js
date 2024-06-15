import { b as v, j as m, F as z } from "./library-c4e8996c.js";
import { P as L, a as A } from "./mui-2ff488a7.js";
import { r as d } from "./react-6f5a8403.js";
import { B as T } from "./faEye-967beef5.js";
function a(o) {
  if (typeof window > "u")
    return o;
  const t = d.useRef(null);
  return d.useLayoutEffect(() => {
    t.current = o;
  }), d.useCallback((...r) => {
    var u;
    (u = t.current) === null || u === void 0 || u.call(t, ...r);
  }, []);
}
const N = {};
function I(o, t) {
  N[o] || (N[o] = !0, console.error("[material-ui-popup-state] WARNING", t));
}
const M = {
  isOpen: !1,
  setAnchorElUsed: !1,
  anchorEl: void 0,
  anchorPosition: void 0,
  hovered: !1,
  focused: !1,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: !1,
  _deferNextClose: !1
};
function W({
  parentPopupState: o,
  popupId: t,
  variant: r,
  disableAutoFocus: u
}) {
  const f = d.useRef(!0);
  d.useEffect(() => (f.current = !0, () => {
    f.current = !1;
  }), []);
  const [c, g] = d.useState(M), s = d.useCallback((n) => {
    f.current && g(n);
  }, []), P = d.useCallback((n) => s((e) => ({
    ...e,
    setAnchorElUsed: !0,
    anchorEl: n ?? void 0
  })), []), k = a((n) => (c.isOpen ? b(n) : x(n), c)), x = a((n) => {
    const e = n instanceof Element ? void 0 : n, i = n instanceof Element ? n : (n == null ? void 0 : n.currentTarget) instanceof Element ? n.currentTarget : void 0;
    if ((e == null ? void 0 : e.type) === "touchstart") {
      s((l) => ({
        ...l,
        _deferNextOpen: !0
      }));
      return;
    }
    const y = e == null ? void 0 : e.clientX, C = e == null ? void 0 : e.clientY, j = typeof y == "number" && typeof C == "number" ? {
      left: y,
      top: C
    } : void 0, _ = (l) => {
      if (!n && !l.setAnchorElUsed && r !== "dialog" && I("missingEventOrAnchorEl", "eventOrAnchorEl should be defined if setAnchorEl is not used"), o) {
        if (!o.isOpen)
          return l;
        setTimeout(() => o._setChildPopupState(h));
      }
      const w = {
        ...l,
        isOpen: !0,
        anchorPosition: j,
        hovered: (e == null ? void 0 : e.type) === "mouseover" || l.hovered,
        focused: (e == null ? void 0 : e.type) === "focus" || l.focused,
        _openEventType: e == null ? void 0 : e.type
      };
      return e != null && e.currentTarget ? l.setAnchorElUsed || (w.anchorEl = e == null ? void 0 : e.currentTarget) : i && (w.anchorEl = i), w;
    };
    s((l) => l._deferNextOpen ? (setTimeout(() => s(_), 0), {
      ...l,
      _deferNextOpen: !1
    }) : _(l));
  }), p = (n) => {
    const {
      _childPopupState: e
    } = n;
    return setTimeout(() => {
      e == null || e.close(), o == null || o._setChildPopupState(null);
    }), {
      ...n,
      isOpen: !1,
      hovered: !1,
      focused: !1
    };
  }, b = a((n) => {
    const e = n instanceof Element ? void 0 : n;
    if ((e == null ? void 0 : e.type) === "touchstart") {
      s((i) => ({
        ...i,
        _deferNextClose: !0
      }));
      return;
    }
    s((i) => i._deferNextClose ? (setTimeout(() => s(p), 0), {
      ...i,
      _deferNextClose: !1
    }) : p(i));
  }), S = d.useCallback((n, e) => {
    n ? x(e) : b(e);
  }, []), B = a((n) => {
    const {
      relatedTarget: e
    } = n;
    s((i) => i.hovered && !(e instanceof Element && E(e, h)) ? i.focused ? {
      ...i,
      hovered: !1
    } : p(i) : i);
  }), F = a((n) => {
    if (!n)
      return;
    const {
      relatedTarget: e
    } = n;
    s((i) => i.focused && !(e instanceof Element && E(e, h)) ? i.hovered ? {
      ...i,
      focused: !1
    } : p(i) : i);
  }), U = d.useCallback((n) => s((e) => ({
    ...e,
    _childPopupState: n
  })), []), h = {
    ...c,
    setAnchorEl: P,
    popupId: t,
    variant: r,
    open: x,
    close: b,
    toggle: k,
    setOpen: S,
    onBlur: F,
    onMouseLeave: B,
    disableAutoFocus: u ?? !!(c.hovered || c.focused),
    _setChildPopupState: U
  };
  return h;
}
function X({
  isOpen: o,
  popupId: t,
  variant: r
}) {
  return {
    ...r === "popover" ? {
      "aria-haspopup": !0,
      "aria-controls": o && t != null ? t : void 0
    } : r === "popper" ? {
      "aria-describedby": o && t != null ? t : void 0
    } : void 0
  };
}
function Y(o) {
  return {
    ...X(o),
    onClick: o.open,
    onTouchStart: o.open
  };
}
function D({
  isOpen: o,
  anchorEl: t,
  anchorPosition: r,
  close: u,
  popupId: f,
  onMouseLeave: c,
  disableAutoFocus: g,
  _openEventType: s
}) {
  return {
    id: f,
    anchorEl: t,
    anchorPosition: r,
    anchorReference: s === "contextmenu" ? "anchorPosition" : "anchorEl",
    open: o,
    onClose: u,
    onMouseLeave: c,
    ...g && {
      disableAutoFocus: !0,
      disableEnforceFocus: !0,
      disableRestoreFocus: !0
    }
  };
}
function G(o, {
  popupId: t
}) {
  if (!t)
    return null;
  const r = typeof o.getRootNode == "function" ? o.getRootNode() : document;
  return typeof r.getElementById == "function" ? r.getElementById(t) : null;
}
function E(o, t) {
  const {
    anchorEl: r,
    _childPopupState: u
  } = t;
  return R(r, o) || R(G(o, t), o) || u != null && E(o, u);
}
function R(o, t) {
  if (!o)
    return !1;
  for (; t; ) {
    if (t === o)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
const J = ({
  children: o,
  onConfirm: t
}) => {
  const r = W({
    variant: "popover",
    popupId: "confirm-popover"
  }), {
    anchorPosition: u,
    anchorReference: f,
    ...c
  } = D(r);
  return /* @__PURE__ */ v(z, { children: [
    o(Y(r)),
    /* @__PURE__ */ v(L, { ...c, disablePortal: !1, onBlur: () => r.close(), placement: "bottom-end", modifiers: [
      {
        name: "offset",
        options: {
          offset: [10, 10]
        }
      },
      {
        name: "arrow",
        enabled: !0,
        options: {
          padding: 15
          // 5px from the edges of the popper
        }
      }
      // {
      //   name: "flip",
      //   enabled: true,
      //   options: {
      //     altBoundary: true,
      //     rootBoundary: "document",
      //     padding: 8,
      //   },
      // },
      // {
      //   name: "preventOverflow",
      //   enabled: true,
      //   options: {
      //     altAxis: true,
      //     altBoundary: true,
      //     tether: true,
      //     rootBoundary: "document",
      //     padding: 8,
      //   },
      // },
    ], children: [
      /* @__PURE__ */ m("div", { "data-popper-arrow": !0, css: A`
            width: 12px;
            height: 12px;
            &:before {
              background-color: white;
              content: "";
              display: block;
              position: absolute;
              width: 12px;
              height: 12px;
              top: -6px;
              transform: rotate(45deg);
              left: calc(50% - 6px);
            }
          ` }),
      /* @__PURE__ */ v("div", { css: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "1rem",
        borderRadius: "0.25rem",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        "--tw-shadow": "12px 12px 15px 0px rgb(0 0 0 / 0.1),0 -5px 38px -1px rgb(0 0 0 / 0.1)",
        "--tw-shadow-colored": "12px 12px 15px 0px var(--tw-shadow-color), 0 -5px 38px -1px var(--tw-shadow-color)",
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }, children: [
        /* @__PURE__ */ m("div", { children: "Вы действительно хотите удалить этот элемент?" }),
        /* @__PURE__ */ v("div", { css: {
          display: "flex",
          gap: "0.5rem"
        }, children: [
          /* @__PURE__ */ m(T, { variant: "outlined", size: "small", onClick: () => r.close(), children: "Нет" }),
          /* @__PURE__ */ m(T, { size: "small", autoFocus: !0, variant: "contained", onClick: () => {
            r.close(), t();
          }, children: "Да" })
        ] })
      ] })
    ] })
  ] });
};
export {
  J as P
};
