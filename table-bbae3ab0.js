import { r as j } from "./react-bd6781bd.js";
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function P(e, o) {
  return typeof e == "function" ? e(o) : e;
}
function _(e, o) {
  return (t) => {
    o.setState((n) => ({
      ...n,
      [e]: P(t, n[e])
    }));
  };
}
function A(e) {
  return e instanceof Function;
}
function me(e) {
  return Array.isArray(e) && e.every((o) => typeof o == "number");
}
function Ce(e, o) {
  const t = [], n = (i) => {
    i.forEach((r) => {
      t.push(r);
      const l = o(r);
      l != null && l.length && n(l);
    });
  };
  return n(e), t;
}
function S(e, o, t) {
  let n = [], i;
  return (r) => {
    let l;
    t.key && t.debug && (l = Date.now());
    const u = e(r);
    if (!(u.length !== n.length || u.some((g, d) => n[d] !== g)))
      return i;
    n = u;
    let a;
    if (t.key && t.debug && (a = Date.now()), i = o(...u), t == null || t.onChange == null || t.onChange(i), t.key && t.debug && t != null && t.debug()) {
      const g = Math.round((Date.now() - l) * 100) / 100, d = Math.round((Date.now() - a) * 100) / 100, c = d / 16, f = (p, C) => {
        for (p = String(p); p.length < C; )
          p = " " + p;
        return p;
      };
      console.info(`%c⏱ ${f(d, 5)} /${f(g, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * c, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return i;
  };
}
function m(e, o, t, n) {
  return {
    debug: () => {
      var i;
      return (i = e == null ? void 0 : e.debugAll) != null ? i : e[o];
    },
    key: !1,
    onChange: n
  };
}
function Re(e, o, t, n) {
  var i, r;
  const u = {
    ...e._getDefaultColumnDef(),
    ...o
  }, s = u.accessorKey;
  let a = (i = (r = u.id) != null ? r : s ? s.replace(".", "_") : void 0) != null ? i : typeof u.header == "string" ? u.header : void 0, g;
  if (u.accessorFn ? g = u.accessorFn : s && (s.includes(".") ? g = (c) => {
    let f = c;
    for (const C of s.split(".")) {
      var p;
      f = (p = f) == null ? void 0 : p[C];
    }
    return f;
  } : g = (c) => c[u.accessorKey]), !a)
    throw new Error();
  let d = {
    id: `${String(a)}`,
    accessorFn: g,
    parent: n,
    depth: t,
    columnDef: u,
    columns: [],
    getFlatColumns: S(() => [!0], () => {
      var c;
      return [d, ...(c = d.columns) == null ? void 0 : c.flatMap((f) => f.getFlatColumns())];
    }, m(e.options, "debugColumns")),
    getLeafColumns: S(() => [e._getOrderColumnsFn()], (c) => {
      var f;
      if ((f = d.columns) != null && f.length) {
        let p = d.columns.flatMap((C) => C.getLeafColumns());
        return c(p);
      }
      return [d];
    }, m(e.options, "debugColumns"))
  };
  for (const c of e._features)
    c.createColumn == null || c.createColumn(d, e);
  return d;
}
const h = "debugHeaders";
function ne(e, o, t) {
  var n;
  let r = {
    id: (n = t.id) != null ? n : o.id,
    column: o,
    index: t.index,
    isPlaceholder: !!t.isPlaceholder,
    placeholderId: t.placeholderId,
    depth: t.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const l = [], u = (s) => {
        s.subHeaders && s.subHeaders.length && s.subHeaders.map(u), l.push(s);
      };
      return u(r), l;
    },
    getContext: () => ({
      table: e,
      header: r,
      column: o
    })
  };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(r, e);
  }), r;
}
const we = {
  createTable: (e) => {
    e.getHeaderGroups = S(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n, i) => {
      var r, l;
      const u = (r = n == null ? void 0 : n.map((d) => t.find((c) => c.id === d)).filter(Boolean)) != null ? r : [], s = (l = i == null ? void 0 : i.map((d) => t.find((c) => c.id === d)).filter(Boolean)) != null ? l : [], a = t.filter((d) => !(n != null && n.includes(d.id)) && !(i != null && i.includes(d.id)));
      return D(o, [...u, ...a, ...s], e);
    }, m(e.options, h)), e.getCenterHeaderGroups = S(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n, i) => (t = t.filter((r) => !(n != null && n.includes(r.id)) && !(i != null && i.includes(r.id))), D(o, t, e, "center")), m(e.options, h)), e.getLeftHeaderGroups = S(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (o, t, n) => {
      var i;
      const r = (i = n == null ? void 0 : n.map((l) => t.find((u) => u.id === l)).filter(Boolean)) != null ? i : [];
      return D(o, r, e, "left");
    }, m(e.options, h)), e.getRightHeaderGroups = S(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (o, t, n) => {
      var i;
      const r = (i = n == null ? void 0 : n.map((l) => t.find((u) => u.id === l)).filter(Boolean)) != null ? i : [];
      return D(o, r, e, "right");
    }, m(e.options, h)), e.getFooterGroups = S(() => [e.getHeaderGroups()], (o) => [...o].reverse(), m(e.options, h)), e.getLeftFooterGroups = S(() => [e.getLeftHeaderGroups()], (o) => [...o].reverse(), m(e.options, h)), e.getCenterFooterGroups = S(() => [e.getCenterHeaderGroups()], (o) => [...o].reverse(), m(e.options, h)), e.getRightFooterGroups = S(() => [e.getRightHeaderGroups()], (o) => [...o].reverse(), m(e.options, h)), e.getFlatHeaders = S(() => [e.getHeaderGroups()], (o) => o.map((t) => t.headers).flat(), m(e.options, h)), e.getLeftFlatHeaders = S(() => [e.getLeftHeaderGroups()], (o) => o.map((t) => t.headers).flat(), m(e.options, h)), e.getCenterFlatHeaders = S(() => [e.getCenterHeaderGroups()], (o) => o.map((t) => t.headers).flat(), m(e.options, h)), e.getRightFlatHeaders = S(() => [e.getRightHeaderGroups()], (o) => o.map((t) => t.headers).flat(), m(e.options, h)), e.getCenterLeafHeaders = S(() => [e.getCenterFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), m(e.options, h)), e.getLeftLeafHeaders = S(() => [e.getLeftFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), m(e.options, h)), e.getRightLeafHeaders = S(() => [e.getRightFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), m(e.options, h)), e.getLeafHeaders = S(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (o, t, n) => {
      var i, r, l, u, s, a;
      return [...(i = (r = o[0]) == null ? void 0 : r.headers) != null ? i : [], ...(l = (u = t[0]) == null ? void 0 : u.headers) != null ? l : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : []].map((g) => g.getLeafHeaders()).flat();
    }, m(e.options, h));
  }
};
function D(e, o, t, n) {
  var i, r;
  let l = 0;
  const u = function(c, f) {
    f === void 0 && (f = 1), l = Math.max(l, f), c.filter((p) => p.getIsVisible()).forEach((p) => {
      var C;
      (C = p.columns) != null && C.length && u(p.columns, f + 1);
    }, 0);
  };
  u(e);
  let s = [];
  const a = (c, f) => {
    const p = {
      depth: f,
      id: [n, `${f}`].filter(Boolean).join("_"),
      headers: []
    }, C = [];
    c.forEach((w) => {
      const R = [...C].reverse()[0], F = w.column.depth === p.depth;
      let v, V = !1;
      if (F && w.column.parent ? v = w.column.parent : (v = w.column, V = !0), R && (R == null ? void 0 : R.column) === v)
        R.subHeaders.push(w);
      else {
        const I = ne(t, v, {
          id: [n, f, v.id, w == null ? void 0 : w.id].filter(Boolean).join("_"),
          isPlaceholder: V,
          placeholderId: V ? `${C.filter((z) => z.column === v).length}` : void 0,
          depth: f,
          index: C.length
        });
        I.subHeaders.push(w), C.push(I);
      }
      p.headers.push(w), w.headerGroup = p;
    }), s.push(p), f > 0 && a(C, f - 1);
  }, g = o.map((c, f) => ne(t, c, {
    depth: l,
    index: f
  }));
  a(g, l - 1), s.reverse();
  const d = (c) => c.filter((p) => p.column.getIsVisible()).map((p) => {
    let C = 0, w = 0, R = [0];
    p.subHeaders && p.subHeaders.length ? (R = [], d(p.subHeaders).forEach((v) => {
      let {
        colSpan: V,
        rowSpan: I
      } = v;
      C += V, R.push(I);
    })) : C = 1;
    const F = Math.min(...R);
    return w = w + F, p.colSpan = C, p.rowSpan = w, {
      colSpan: C,
      rowSpan: w
    };
  });
  return d((i = (r = s[0]) == null ? void 0 : r.headers) != null ? i : []), s;
}
const H = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, L = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), ve = {
  getDefaultColumnDef: () => H,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: L(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: _("columnSizing", e),
    onColumnSizingInfoChange: _("columnSizingInfo", e)
  }),
  createColumn: (e, o) => {
    e.getSize = () => {
      var t, n, i;
      const r = o.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : H.minSize, (n = r ?? e.columnDef.size) != null ? n : H.size), (i = e.columnDef.maxSize) != null ? i : H.maxSize);
    }, e.getStart = S((t) => [t, E(o, t), o.getState().columnSizing], (t, n) => n.slice(0, e.getIndex(t)).reduce((i, r) => i + r.getSize(), 0), m(o.options, "debugColumns")), e.getAfter = S((t) => [t, E(o, t), o.getState().columnSizing], (t, n) => n.slice(e.getIndex(t) + 1).reduce((i, r) => i + r.getSize(), 0), m(o.options, "debugColumns")), e.resetSize = () => {
      o.setColumnSizing((t) => {
        let {
          [e.id]: n,
          ...i
        } = t;
        return i;
      });
    }, e.getCanResize = () => {
      var t, n;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((n = o.options.enableColumnResizing) != null ? n : !0);
    }, e.getIsResizing = () => o.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, o) => {
    e.getSize = () => {
      let t = 0;
      const n = (i) => {
        if (i.subHeaders.length)
          i.subHeaders.forEach(n);
        else {
          var r;
          t += (r = i.column.getSize()) != null ? r : 0;
        }
      };
      return n(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = (t) => {
      const n = o.getColumn(e.column.id), i = n == null ? void 0 : n.getCanResize();
      return (r) => {
        if (!n || !i || (r.persist == null || r.persist(), O(r) && r.touches && r.touches.length > 1))
          return;
        const l = e.getSize(), u = e ? e.getLeafHeaders().map((R) => [R.column.id, R.column.getSize()]) : [[n.id, n.getSize()]], s = O(r) ? Math.round(r.touches[0].clientX) : r.clientX, a = {}, g = (R, F) => {
          typeof F == "number" && (o.setColumnSizingInfo((v) => {
            var V, I;
            const z = o.options.columnResizeDirection === "rtl" ? -1 : 1, b = (F - ((V = v == null ? void 0 : v.startOffset) != null ? V : 0)) * z, ee = Math.max(b / ((I = v == null ? void 0 : v.startSize) != null ? I : 0), -0.999999);
            return v.columnSizingStart.forEach((pe) => {
              let [Se, te] = pe;
              a[Se] = Math.round(Math.max(te + te * ee, 0) * 100) / 100;
            }), {
              ...v,
              deltaOffset: b,
              deltaPercentage: ee
            };
          }), (o.options.columnResizeMode === "onChange" || R === "end") && o.setColumnSizing((v) => ({
            ...v,
            ...a
          })));
        }, d = (R) => g("move", R), c = (R) => {
          g("end", R), o.setColumnSizingInfo((F) => ({
            ...F,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, f = t || typeof document < "u" ? document : null, p = {
          moveHandler: (R) => d(R.clientX),
          upHandler: (R) => {
            f == null || f.removeEventListener("mousemove", p.moveHandler), f == null || f.removeEventListener("mouseup", p.upHandler), c(R.clientX);
          }
        }, C = {
          moveHandler: (R) => (R.cancelable && (R.preventDefault(), R.stopPropagation()), d(R.touches[0].clientX), !1),
          upHandler: (R) => {
            var F;
            f == null || f.removeEventListener("touchmove", C.moveHandler), f == null || f.removeEventListener("touchend", C.upHandler), R.cancelable && (R.preventDefault(), R.stopPropagation()), c((F = R.touches[0]) == null ? void 0 : F.clientX);
          }
        }, w = he() ? {
          passive: !1
        } : !1;
        O(r) ? (f == null || f.addEventListener("touchmove", C.moveHandler, w), f == null || f.addEventListener("touchend", C.upHandler, w)) : (f == null || f.addEventListener("mousemove", p.moveHandler, w), f == null || f.addEventListener("mouseup", p.upHandler, w)), o.setColumnSizingInfo((R) => ({
          ...R,
          startOffset: s,
          startSize: l,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: u,
          isResizingColumn: n.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (o) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(o), e.setColumnSizingInfo = (o) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(o), e.resetColumnSizing = (o) => {
      var t;
      e.setColumnSizing(o ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (o) => {
      var t;
      e.setColumnSizingInfo(o ? L() : (t = e.initialState.columnSizingInfo) != null ? t : L());
    }, e.getTotalSize = () => {
      var o, t;
      return (o = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, i) => n + i.getSize(), 0)) != null ? o : 0;
    }, e.getLeftTotalSize = () => {
      var o, t;
      return (o = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, i) => n + i.getSize(), 0)) != null ? o : 0;
    }, e.getCenterTotalSize = () => {
      var o, t;
      return (o = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, i) => n + i.getSize(), 0)) != null ? o : 0;
    }, e.getRightTotalSize = () => {
      var o, t;
      return (o = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, i) => n + i.getSize(), 0)) != null ? o : 0;
    };
  }
};
let G = null;
function he() {
  if (typeof G == "boolean")
    return G;
  let e = !1;
  try {
    const o = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, o), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return G = e, G;
}
function O(e) {
  return e.type === "touchstart";
}
const _e = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: _("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let o = !1, t = !1;
    e._autoResetExpanded = () => {
      var n, i;
      if (!o) {
        e._queue(() => {
          o = !0;
        });
        return;
      }
      if ((n = (i = e.options.autoResetAll) != null ? i : e.options.autoResetExpanded) != null ? n : !e.options.manualExpanding) {
        if (t)
          return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (n) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(n), e.toggleAllRowsExpanded = (n) => {
      n ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (n) => {
      var i, r;
      e.setExpanded(n ? {} : (i = (r = e.initialState) == null ? void 0 : r.expanded) != null ? i : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((n) => n.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (n) => {
      n.persist == null || n.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const n = e.getState().expanded;
      return n === !0 || Object.values(n).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const n = e.getState().expanded;
      return typeof n == "boolean" ? n === !0 : !(!Object.keys(n).length || e.getRowModel().flatRows.some((i) => !i.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let n = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((r) => {
        const l = r.split(".");
        n = Math.max(n, l.length);
      }), n;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, o) => {
    e.toggleExpanded = (t) => {
      o.setExpanded((n) => {
        var i;
        const r = n === !0 ? !0 : !!(n != null && n[e.id]);
        let l = {};
        if (n === !0 ? Object.keys(o.getRowModel().rowsById).forEach((u) => {
          l[u] = !0;
        }) : l = n, t = (i = t) != null ? i : !r, !r && t)
          return {
            ...l,
            [e.id]: !0
          };
        if (r && !t) {
          const {
            [e.id]: u,
            ...s
          } = l;
          return s;
        }
        return n;
      });
    }, e.getIsExpanded = () => {
      var t;
      const n = o.getState().expanded;
      return !!((t = o.options.getIsRowExpanded == null ? void 0 : o.options.getIsRowExpanded(e)) != null ? t : n === !0 || n != null && n[e.id]);
    }, e.getCanExpand = () => {
      var t, n, i;
      return (t = o.options.getRowCanExpand == null ? void 0 : o.options.getRowCanExpand(e)) != null ? t : ((n = o.options.enableExpanding) != null ? n : !0) && !!((i = e.subRows) != null && i.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, n = e;
      for (; t && n.parentId; )
        n = o.getRow(n.parentId, !0), t = n.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, re = (e, o, t) => {
  var n;
  const i = t.toLowerCase();
  return !!(!((n = e.getValue(o)) == null || (n = n.toString()) == null || (n = n.toLowerCase()) == null) && n.includes(i));
};
re.autoRemove = (e) => $(e);
const le = (e, o, t) => {
  var n;
  return !!(!((n = e.getValue(o)) == null || (n = n.toString()) == null) && n.includes(t));
};
le.autoRemove = (e) => $(e);
const ue = (e, o, t) => {
  var n;
  return ((n = e.getValue(o)) == null || (n = n.toString()) == null ? void 0 : n.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
ue.autoRemove = (e) => $(e);
const se = (e, o, t) => {
  var n;
  return (n = e.getValue(o)) == null ? void 0 : n.includes(t);
};
se.autoRemove = (e) => $(e) || !(e != null && e.length);
const ge = (e, o, t) => !t.some((n) => {
  var i;
  return !((i = e.getValue(o)) != null && i.includes(n));
});
ge.autoRemove = (e) => $(e) || !(e != null && e.length);
const ae = (e, o, t) => t.some((n) => {
  var i;
  return (i = e.getValue(o)) == null ? void 0 : i.includes(n);
});
ae.autoRemove = (e) => $(e) || !(e != null && e.length);
const de = (e, o, t) => e.getValue(o) === t;
de.autoRemove = (e) => $(e);
const fe = (e, o, t) => e.getValue(o) == t;
fe.autoRemove = (e) => $(e);
const W = (e, o, t) => {
  let [n, i] = t;
  const r = e.getValue(o);
  return r >= n && r <= i;
};
W.resolveFilterValue = (e) => {
  let [o, t] = e, n = typeof o != "number" ? parseFloat(o) : o, i = typeof t != "number" ? parseFloat(t) : t, r = o === null || Number.isNaN(n) ? -1 / 0 : n, l = t === null || Number.isNaN(i) ? 1 / 0 : i;
  if (r > l) {
    const u = r;
    r = l, l = u;
  }
  return [r, l];
};
W.autoRemove = (e) => $(e) || $(e[0]) && $(e[1]);
const M = {
  includesString: re,
  includesStringSensitive: le,
  equalsString: ue,
  arrIncludes: se,
  arrIncludesAll: ge,
  arrIncludesSome: ae,
  equals: de,
  weakEquals: fe,
  inNumberRange: W
};
function $(e) {
  return e == null || e === "";
}
const Fe = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    globalFilter: void 0,
    // filtersProgress: 1,
    // facetProgress: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: _("columnFilters", e),
    onGlobalFilterChange: _("globalFilter", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (o) => {
      var t;
      const n = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[o.id]) == null ? void 0 : t.getValue();
      return typeof n == "string" || typeof n == "number";
    }
  }),
  createColumn: (e, o) => {
    e.getAutoFilterFn = () => {
      const t = o.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
      return typeof n == "string" ? M.includesString : typeof n == "number" ? M.inNumberRange : typeof n == "boolean" || n !== null && typeof n == "object" ? M.equals : Array.isArray(n) ? M.arrIncludes : M.weakEquals;
    }, e.getFilterFn = () => {
      var t, n;
      return A(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (n = o.options.filterFns) == null ? void 0 : n[e.columnDef.filterFn]) != null ? t : M[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, n, i;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((n = o.options.enableColumnFilters) != null ? n : !0) && ((i = o.options.enableFilters) != null ? i : !0) && !!e.accessorFn;
    }, e.getCanGlobalFilter = () => {
      var t, n, i, r;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((n = o.options.enableGlobalFilter) != null ? n : !0) && ((i = o.options.enableFilters) != null ? i : !0) && ((r = o.options.getColumnCanGlobalFilter == null ? void 0 : o.options.getColumnCanGlobalFilter(e)) != null ? r : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = o.getState().columnFilters) == null || (t = t.find((n) => n.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, n;
      return (t = (n = o.getState().columnFilters) == null ? void 0 : n.findIndex((i) => i.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      o.setColumnFilters((n) => {
        const i = e.getFilterFn(), r = n == null ? void 0 : n.find((g) => g.id === e.id), l = P(t, r ? r.value : void 0);
        if (oe(i, l, e)) {
          var u;
          return (u = n == null ? void 0 : n.filter((g) => g.id !== e.id)) != null ? u : [];
        }
        const s = {
          id: e.id,
          value: l
        };
        if (r) {
          var a;
          return (a = n == null ? void 0 : n.map((g) => g.id === e.id ? s : g)) != null ? a : [];
        }
        return n != null && n.length ? [...n, s] : [s];
      });
    }, e._getFacetedRowModel = o.options.getFacetedRowModel && o.options.getFacetedRowModel(o, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : o.getPreFilteredRowModel(), e._getFacetedUniqueValues = o.options.getFacetedUniqueValues && o.options.getFacetedUniqueValues(o, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = o.options.getFacetedMinMaxValues && o.options.getFacetedMinMaxValues(o, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  },
  createRow: (e, o) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => M.includesString, e.getGlobalFilterFn = () => {
      var o, t;
      const {
        globalFilterFn: n
      } = e.options;
      return A(n) ? n : n === "auto" ? e.getGlobalAutoFilterFn() : (
        // @ts-ignore
        (o = (t = e.options.filterFns) == null ? void 0 : t[n]) != null ? o : M[n]
      );
    }, e.setColumnFilters = (o) => {
      const t = e.getAllLeafColumns(), n = (i) => {
        var r;
        return (r = P(o, i)) == null ? void 0 : r.filter((l) => {
          const u = t.find((s) => s.id === l.id);
          if (u) {
            const s = u.getFilterFn();
            if (oe(s, l.value, u))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(n);
    }, e.setGlobalFilter = (o) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(o);
    }, e.resetGlobalFilter = (o) => {
      e.setGlobalFilter(o ? void 0 : e.initialState.globalFilter);
    }, e.resetColumnFilters = (o) => {
      var t, n;
      e.setColumnFilters(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel()), e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
};
function oe(e, o, t) {
  return (e && e.autoRemove ? e.autoRemove(o, t) : !1) || typeof o > "u" || typeof o == "string" && !o;
}
const $e = (e, o, t) => t.reduce((n, i) => {
  const r = i.getValue(e);
  return n + (typeof r == "number" ? r : 0);
}, 0), Me = (e, o, t) => {
  let n;
  return t.forEach((i) => {
    const r = i.getValue(e);
    r != null && (n > r || n === void 0 && r >= r) && (n = r);
  }), n;
}, Ve = (e, o, t) => {
  let n;
  return t.forEach((i) => {
    const r = i.getValue(e);
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  }), n;
}, Pe = (e, o, t) => {
  let n, i;
  return t.forEach((r) => {
    const l = r.getValue(e);
    l != null && (n === void 0 ? l >= l && (n = i = l) : (n > l && (n = l), i < l && (i = l)));
  }), [n, i];
}, xe = (e, o) => {
  let t = 0, n = 0;
  if (o.forEach((i) => {
    let r = i.getValue(e);
    r != null && (r = +r) >= r && (++t, n += r);
  }), t)
    return n / t;
}, Ie = (e, o) => {
  if (!o.length)
    return;
  const t = o.map((r) => r.getValue(e));
  if (!me(t))
    return;
  if (t.length === 1)
    return t[0];
  const n = Math.floor(t.length / 2), i = t.sort((r, l) => r - l);
  return t.length % 2 !== 0 ? i[n] : (i[n - 1] + i[n]) / 2;
}, ye = (e, o) => Array.from(new Set(o.map((t) => t.getValue(e))).values()), Ee = (e, o) => new Set(o.map((t) => t.getValue(e))).size, De = (e, o) => o.length, B = {
  sum: $e,
  min: Me,
  max: Ve,
  extent: Pe,
  mean: xe,
  median: Ie,
  unique: ye,
  uniqueCount: Ee,
  count: De
}, He = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var o, t;
      return (o = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? o : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: _("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, o) => {
    e.toggleGrouping = () => {
      o.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((n) => n !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, n, i, r;
      return (t = (n = (i = (r = e.columnDef.enableGrouping) != null ? r : !0) != null ? i : o.options.enableGrouping) != null ? n : !0) != null ? t : !!e.accessorFn;
    }, e.getIsGrouped = () => {
      var t;
      return (t = o.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = o.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = o.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
      if (typeof n == "number")
        return B.sum;
      if (Object.prototype.toString.call(n) === "[object Date]")
        return B.extent;
    }, e.getAggregationFn = () => {
      var t, n;
      if (!e)
        throw new Error();
      return A(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (n = o.options.aggregationFns) == null ? void 0 : n[e.columnDef.aggregationFn]) != null ? t : B[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (o) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(o), e.resetGrouping = (o) => {
      var t, n;
      e.setGrouping(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, o) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const n = o.getColumn(t);
      return n != null && n.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = n.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, o, t, n) => {
    e.getIsGrouped = () => o.getIsGrouped() && o.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && o.getIsGrouped(), e.getIsAggregated = () => {
      var i;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((i = t.subRows) != null && i.length);
    };
  }
};
function Ge(e, o, t) {
  if (!(o != null && o.length) || !t)
    return e;
  const n = e.filter((r) => !o.includes(r.id));
  return t === "remove" ? n : [...o.map((r) => e.find((l) => l.id === r)).filter(Boolean), ...n];
}
const Ae = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: _("columnOrder", e)
  }),
  createColumn: (e, o) => {
    e.getIndex = S((t) => [E(o, t)], (t) => t.findIndex((n) => n.id === e.id), m(o.options, "debugColumns")), e.getIsFirstColumn = (t) => {
      var n;
      return ((n = E(o, t)[0]) == null ? void 0 : n.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var n;
      const i = E(o, t);
      return ((n = i[i.length - 1]) == null ? void 0 : n.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (o) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(o), e.resetColumnOrder = (o) => {
      var t;
      e.setColumnOrder(o ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = S(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (o, t, n) => (i) => {
      let r = [];
      if (!(o != null && o.length))
        r = i;
      else {
        const l = [...o], u = [...i];
        for (; u.length && l.length; ) {
          const s = l.shift(), a = u.findIndex((g) => g.id === s);
          a > -1 && r.push(u.splice(a, 1)[0]);
        }
        r = [...r, ...u];
      }
      return Ge(r, t, n);
    }, m(e.options, "debugTable"));
  }
}, U = 0, X = 10, q = () => ({
  pageIndex: U,
  pageSize: X
}), ze = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...q(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: _("pagination", e)
  }),
  createTable: (e) => {
    let o = !1, t = !1;
    e._autoResetPageIndex = () => {
      var n, i;
      if (!o) {
        e._queue(() => {
          o = !0;
        });
        return;
      }
      if ((n = (i = e.options.autoResetAll) != null ? i : e.options.autoResetPageIndex) != null ? n : !e.options.manualPagination) {
        if (t)
          return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (n) => {
      const i = (r) => P(n, r);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(i);
    }, e.resetPagination = (n) => {
      var i;
      e.setPagination(n ? q() : (i = e.initialState.pagination) != null ? i : q());
    }, e.setPageIndex = (n) => {
      e.setPagination((i) => {
        let r = P(n, i.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return r = Math.max(0, Math.min(r, l)), {
          ...i,
          pageIndex: r
        };
      });
    }, e.resetPageIndex = (n) => {
      var i, r;
      e.setPageIndex(n ? U : (i = (r = e.initialState) == null || (r = r.pagination) == null ? void 0 : r.pageIndex) != null ? i : U);
    }, e.resetPageSize = (n) => {
      var i, r;
      e.setPageSize(n ? X : (i = (r = e.initialState) == null || (r = r.pagination) == null ? void 0 : r.pageSize) != null ? i : X);
    }, e.setPageSize = (n) => {
      e.setPagination((i) => {
        const r = Math.max(1, P(n, i.pageSize)), l = i.pageSize * i.pageIndex, u = Math.floor(l / r);
        return {
          ...i,
          pageIndex: u,
          pageSize: r
        };
      });
    }, e.setPageCount = (n) => e.setPagination((i) => {
      var r;
      let l = P(n, (r = e.options.pageCount) != null ? r : -1);
      return typeof l == "number" && (l = Math.max(-1, l)), {
        ...i,
        pageCount: l
      };
    }), e.getPageOptions = S(() => [e.getPageCount()], (n) => {
      let i = [];
      return n && n > 0 && (i = [...new Array(n)].fill(null).map((r, l) => l)), i;
    }, m(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: n
      } = e.getState().pagination, i = e.getPageCount();
      return i === -1 ? !0 : i === 0 ? !1 : n < i - 1;
    }, e.previousPage = () => e.setPageIndex((n) => n - 1), e.nextPage = () => e.setPageIndex((n) => n + 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var n;
      return (n = e.options.pageCount) != null ? n : Math.ceil(e.getPrePaginationRowModel().rows.length / e.getState().pagination.pageSize);
    };
  }
}, T = () => ({
  left: [],
  right: []
}), k = () => ({
  top: [],
  bottom: []
}), Le = {
  getInitialState: (e) => ({
    columnPinning: T(),
    rowPinning: k(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: _("columnPinning", e),
    onRowPinningChange: _("rowPinning", e)
  }),
  createColumn: (e, o) => {
    e.pin = (t) => {
      const n = e.getLeafColumns().map((i) => i.id).filter(Boolean);
      o.setColumnPinning((i) => {
        var r, l;
        if (t === "right") {
          var u, s;
          return {
            left: ((u = i == null ? void 0 : i.left) != null ? u : []).filter((d) => !(n != null && n.includes(d))),
            right: [...((s = i == null ? void 0 : i.right) != null ? s : []).filter((d) => !(n != null && n.includes(d))), ...n]
          };
        }
        if (t === "left") {
          var a, g;
          return {
            left: [...((a = i == null ? void 0 : i.left) != null ? a : []).filter((d) => !(n != null && n.includes(d))), ...n],
            right: ((g = i == null ? void 0 : i.right) != null ? g : []).filter((d) => !(n != null && n.includes(d)))
          };
        }
        return {
          left: ((r = i == null ? void 0 : i.left) != null ? r : []).filter((d) => !(n != null && n.includes(d))),
          right: ((l = i == null ? void 0 : i.right) != null ? l : []).filter((d) => !(n != null && n.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((n) => {
      var i, r, l;
      return ((i = n.columnDef.enablePinning) != null ? i : !0) && ((r = (l = o.options.enableColumnPinning) != null ? l : o.options.enablePinning) != null ? r : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((u) => u.id), {
        left: n,
        right: i
      } = o.getState().columnPinning, r = t.some((u) => n == null ? void 0 : n.includes(u)), l = t.some((u) => i == null ? void 0 : i.includes(u));
      return r ? "left" : l ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, n;
      const i = e.getIsPinned();
      return i ? (t = (n = o.getState().columnPinning) == null || (n = n[i]) == null ? void 0 : n.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, o) => {
    e.pin = (t, n, i) => {
      const r = n ? e.getLeafRows().map((s) => {
        let {
          id: a
        } = s;
        return a;
      }) : [], l = i ? e.getParentRows().map((s) => {
        let {
          id: a
        } = s;
        return a;
      }) : [], u = /* @__PURE__ */ new Set([...l, e.id, ...r]);
      o.setRowPinning((s) => {
        var a, g;
        if (t === "bottom") {
          var d, c;
          return {
            top: ((d = s == null ? void 0 : s.top) != null ? d : []).filter((C) => !(u != null && u.has(C))),
            bottom: [...((c = s == null ? void 0 : s.bottom) != null ? c : []).filter((C) => !(u != null && u.has(C))), ...Array.from(u)]
          };
        }
        if (t === "top") {
          var f, p;
          return {
            top: [...((f = s == null ? void 0 : s.top) != null ? f : []).filter((C) => !(u != null && u.has(C))), ...Array.from(u)],
            bottom: ((p = s == null ? void 0 : s.bottom) != null ? p : []).filter((C) => !(u != null && u.has(C)))
          };
        }
        return {
          top: ((a = s == null ? void 0 : s.top) != null ? a : []).filter((C) => !(u != null && u.has(C))),
          bottom: ((g = s == null ? void 0 : s.bottom) != null ? g : []).filter((C) => !(u != null && u.has(C)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: n,
        enablePinning: i
      } = o.options;
      return typeof n == "function" ? n(e) : (t = n ?? i) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: n,
        bottom: i
      } = o.getState().rowPinning, r = t.some((u) => n == null ? void 0 : n.includes(u)), l = t.some((u) => i == null ? void 0 : i.includes(u));
      return r ? "top" : l ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, n;
      const i = e.getIsPinned();
      if (!i)
        return -1;
      const r = (t = o._getPinnedRows(i)) == null ? void 0 : t.map((l) => {
        let {
          id: u
        } = l;
        return u;
      });
      return (n = r == null ? void 0 : r.indexOf(e.id)) != null ? n : -1;
    }, e.getCenterVisibleCells = S(() => [e._getAllVisibleCells(), o.getState().columnPinning.left, o.getState().columnPinning.right], (t, n, i) => {
      const r = [...n ?? [], ...i ?? []];
      return t.filter((l) => !r.includes(l.column.id));
    }, m(o.options, "debugRows")), e.getLeftVisibleCells = S(() => [e._getAllVisibleCells(), o.getState().columnPinning.left, ,], (t, n) => (n ?? []).map((r) => t.find((l) => l.column.id === r)).filter(Boolean).map((r) => ({
      ...r,
      position: "left"
    })), m(o.options, "debugRows")), e.getRightVisibleCells = S(() => [e._getAllVisibleCells(), o.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((l) => l.column.id === r)).filter(Boolean).map((r) => ({
      ...r,
      position: "right"
    })), m(o.options, "debugRows"));
  },
  createTable: (e) => {
    e.setColumnPinning = (o) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(o), e.resetColumnPinning = (o) => {
      var t, n;
      return e.setColumnPinning(o ? T() : (t = (n = e.initialState) == null ? void 0 : n.columnPinning) != null ? t : T());
    }, e.getIsSomeColumnsPinned = (o) => {
      var t;
      const n = e.getState().columnPinning;
      if (!o) {
        var i, r;
        return !!((i = n.left) != null && i.length || (r = n.right) != null && r.length);
      }
      return !!((t = n[o]) != null && t.length);
    }, e.getLeftLeafColumns = S(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (o, t) => (t ?? []).map((n) => o.find((i) => i.id === n)).filter(Boolean), m(e.options, "debugColumns")), e.getRightLeafColumns = S(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (o, t) => (t ?? []).map((n) => o.find((i) => i.id === n)).filter(Boolean), m(e.options, "debugColumns")), e.getCenterLeafColumns = S(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n) => {
      const i = [...t ?? [], ...n ?? []];
      return o.filter((r) => !i.includes(r.id));
    }, m(e.options, "debugColumns")), e.setRowPinning = (o) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(o), e.resetRowPinning = (o) => {
      var t, n;
      return e.setRowPinning(o ? k() : (t = (n = e.initialState) == null ? void 0 : n.rowPinning) != null ? t : k());
    }, e.getIsSomeRowsPinned = (o) => {
      var t;
      const n = e.getState().rowPinning;
      if (!o) {
        var i, r;
        return !!((i = n.top) != null && i.length || (r = n.bottom) != null && r.length);
      }
      return !!((t = n[o]) != null && t.length);
    }, e._getPinnedRows = S((o) => [e.getRowModel().rows, e.getState().rowPinning[o], o], (o, t, n) => {
      var i;
      return ((i = e.options.keepPinnedRows) == null || i ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((l) => {
          const u = e.getRow(l, !0);
          return u.getIsAllParentsExpanded() ? u : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((l) => o.find((u) => u.id === l))
      )).filter(Boolean).map((l) => ({
        ...l,
        position: n
      }));
    }, m(e.options, "debugRows")), e.getTopRows = () => e._getPinnedRows("top"), e.getBottomRows = () => e._getPinnedRows("bottom"), e.getCenterRows = S(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (o, t, n) => {
      const i = /* @__PURE__ */ new Set([...t ?? [], ...n ?? []]);
      return o.filter((r) => !i.has(r.id));
    }, m(e.options, "debugRows"));
  }
}, Oe = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: _("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (o) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(o), e.resetRowSelection = (o) => {
      var t;
      return e.setRowSelection(o ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (o) => {
      e.setRowSelection((t) => {
        o = typeof o < "u" ? o : !e.getIsAllRowsSelected();
        const n = {
          ...t
        }, i = e.getPreGroupedRowModel().flatRows;
        return o ? i.forEach((r) => {
          r.getCanSelect() && (n[r.id] = !0);
        }) : i.forEach((r) => {
          delete n[r.id];
        }), n;
      });
    }, e.toggleAllPageRowsSelected = (o) => e.setRowSelection((t) => {
      const n = typeof o < "u" ? o : !e.getIsAllPageRowsSelected(), i = {
        ...t
      };
      return e.getRowModel().rows.forEach((r) => {
        K(i, r.id, n, !0, e);
      }), i;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = S(() => [e.getState().rowSelection, e.getCoreRowModel()], (o, t) => Object.keys(o).length ? N(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, m(e.options, "debugTable")), e.getFilteredSelectedRowModel = S(() => [e.getState().rowSelection, e.getFilteredRowModel()], (o, t) => Object.keys(o).length ? N(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, m(e.options, "debugTable")), e.getGroupedSelectedRowModel = S(() => [e.getState().rowSelection, e.getSortedRowModel()], (o, t) => Object.keys(o).length ? N(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, m(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
      const o = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let n = !!(o.length && Object.keys(t).length);
      return n && o.some((i) => i.getCanSelect() && !t[i.id]) && (n = !1), n;
    }, e.getIsAllPageRowsSelected = () => {
      const o = e.getPaginationRowModel().flatRows.filter((i) => i.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let n = !!o.length;
      return n && o.some((i) => !t[i.id]) && (n = !1), n;
    }, e.getIsSomeRowsSelected = () => {
      var o;
      const t = Object.keys((o = e.getState().rowSelection) != null ? o : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const o = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : o.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (o) => {
      e.toggleAllRowsSelected(o.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (o) => {
      e.toggleAllPageRowsSelected(o.target.checked);
    };
  },
  createRow: (e, o) => {
    e.toggleSelected = (t, n) => {
      const i = e.getIsSelected();
      o.setRowSelection((r) => {
        var l;
        if (t = typeof t < "u" ? t : !i, e.getCanSelect() && i === t)
          return r;
        const u = {
          ...r
        };
        return K(u, e.id, t, (l = n == null ? void 0 : n.selectChildren) != null ? l : !0, o), u;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return Y(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return J(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return J(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof o.options.enableRowSelection == "function" ? o.options.enableRowSelection(e) : (t = o.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof o.options.enableSubRowSelection == "function" ? o.options.enableSubRowSelection(e) : (t = o.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof o.options.enableMultiRowSelection == "function" ? o.options.enableMultiRowSelection(e) : (t = o.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (n) => {
        var i;
        t && e.toggleSelected((i = n.target) == null ? void 0 : i.checked);
      };
    };
  }
}, K = (e, o, t, n, i) => {
  var r;
  const l = i.getRow(o, !0);
  t ? (l.getCanMultiSelect() || Object.keys(e).forEach((u) => delete e[u]), l.getCanSelect() && (e[o] = !0)) : delete e[o], n && (r = l.subRows) != null && r.length && l.getCanSelectSubRows() && l.subRows.forEach((u) => K(e, u.id, t, n, i));
};
function N(e, o) {
  const t = e.getState().rowSelection, n = [], i = {}, r = function(l, u) {
    return l.map((s) => {
      var a;
      const g = Y(s, t);
      if (g && (n.push(s), i[s.id] = s), (a = s.subRows) != null && a.length && (s = {
        ...s,
        subRows: r(s.subRows)
      }), g)
        return s;
    }).filter(Boolean);
  };
  return {
    rows: r(o.rows),
    flatRows: n,
    rowsById: i
  };
}
function Y(e, o) {
  var t;
  return (t = o[e.id]) != null ? t : !1;
}
function J(e, o, t) {
  var n;
  if (!((n = e.subRows) != null && n.length))
    return !1;
  let i = !0, r = !1;
  return e.subRows.forEach((l) => {
    if (!(r && !i) && (l.getCanSelect() && (Y(l, o) ? r = !0 : i = !1), l.subRows && l.subRows.length)) {
      const u = J(l, o);
      u === "all" ? r = !0 : (u === "some" && (r = !0), i = !1);
    }
  }), i ? "all" : r ? "some" : !1;
}
const Q = /([0-9]+)/gm, Be = (e, o, t) => ce(x(e.getValue(t)).toLowerCase(), x(o.getValue(t)).toLowerCase()), qe = (e, o, t) => ce(x(e.getValue(t)), x(o.getValue(t))), Te = (e, o, t) => Z(x(e.getValue(t)).toLowerCase(), x(o.getValue(t)).toLowerCase()), ke = (e, o, t) => Z(x(e.getValue(t)), x(o.getValue(t))), Ne = (e, o, t) => {
  const n = e.getValue(t), i = o.getValue(t);
  return n > i ? 1 : n < i ? -1 : 0;
}, je = (e, o, t) => Z(e.getValue(t), o.getValue(t));
function Z(e, o) {
  return e === o ? 0 : e > o ? 1 : -1;
}
function x(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function ce(e, o) {
  const t = e.split(Q).filter(Boolean), n = o.split(Q).filter(Boolean);
  for (; t.length && n.length; ) {
    const i = t.shift(), r = n.shift(), l = parseInt(i, 10), u = parseInt(r, 10), s = [l, u].sort();
    if (isNaN(s[0])) {
      if (i > r)
        return 1;
      if (r > i)
        return -1;
      continue;
    }
    if (isNaN(s[1]))
      return isNaN(l) ? -1 : 1;
    if (l > u)
      return 1;
    if (u > l)
      return -1;
  }
  return t.length - n.length;
}
const y = {
  alphanumeric: Be,
  alphanumericCaseSensitive: qe,
  text: Te,
  textCaseSensitive: ke,
  datetime: Ne,
  basic: je
}, Ue = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: _("sorting", e),
    isMultiSortEvent: (o) => o.shiftKey
  }),
  createColumn: (e, o) => {
    e.getAutoSortingFn = () => {
      const t = o.getFilteredRowModel().flatRows.slice(10);
      let n = !1;
      for (const i of t) {
        const r = i == null ? void 0 : i.getValue(e.id);
        if (Object.prototype.toString.call(r) === "[object Date]")
          return y.datetime;
        if (typeof r == "string" && (n = !0, r.split(Q).length > 1))
          return y.alphanumeric;
      }
      return n ? y.text : y.basic;
    }, e.getAutoSortDir = () => {
      const t = o.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, n;
      if (!e)
        throw new Error();
      return A(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (n = o.options.sortingFns) == null ? void 0 : n[e.columnDef.sortingFn]) != null ? t : y[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, n) => {
      const i = e.getNextSortingOrder(), r = typeof t < "u" && t !== null;
      o.setSorting((l) => {
        const u = l == null ? void 0 : l.find((f) => f.id === e.id), s = l == null ? void 0 : l.findIndex((f) => f.id === e.id);
        let a = [], g, d = r ? t : i === "desc";
        if (l != null && l.length && e.getCanMultiSort() && n ? u ? g = "toggle" : g = "add" : l != null && l.length && s !== l.length - 1 ? g = "replace" : u ? g = "toggle" : g = "replace", g === "toggle" && (r || i || (g = "remove")), g === "add") {
          var c;
          a = [...l, {
            id: e.id,
            desc: d
          }], a.splice(0, a.length - ((c = o.options.maxMultiSortColCount) != null ? c : Number.MAX_SAFE_INTEGER));
        } else
          g === "toggle" ? a = l.map((f) => f.id === e.id ? {
            ...f,
            desc: d
          } : f) : g === "remove" ? a = l.filter((f) => f.id !== e.id) : a = [{
            id: e.id,
            desc: d
          }];
        return a;
      });
    }, e.getFirstSortDir = () => {
      var t, n;
      return ((t = (n = e.columnDef.sortDescFirst) != null ? n : o.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var n, i;
      const r = e.getFirstSortDir(), l = e.getIsSorted();
      return l ? l !== r && ((n = o.options.enableSortingRemoval) == null || n) && // If enableSortRemove, enable in general
      (!(t && (i = o.options.enableMultiRemove) != null) || i) ? !1 : l === "desc" ? "asc" : "desc" : r;
    }, e.getCanSort = () => {
      var t, n;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((n = o.options.enableSorting) != null ? n : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, n;
      return (t = (n = e.columnDef.enableMultiSort) != null ? n : o.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const n = (t = o.getState().sorting) == null ? void 0 : t.find((i) => i.id === e.id);
      return n ? n.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, n;
      return (t = (n = o.getState().sorting) == null ? void 0 : n.findIndex((i) => i.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      o.setSorting((t) => t != null && t.length ? t.filter((n) => n.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (n) => {
        t && (n.persist == null || n.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? o.options.isMultiSortEvent == null ? void 0 : o.options.isMultiSortEvent(n) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (o) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(o), e.resetSorting = (o) => {
      var t, n;
      e.setSorting(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Xe = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: _("columnVisibility", e)
  }),
  createColumn: (e, o) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && o.setColumnVisibility((n) => ({
        ...n,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, n;
      return (t = (n = o.getState().columnVisibility) == null ? void 0 : n[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, n;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((n = o.options.enableHiding) != null ? n : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, o) => {
    e._getAllVisibleCells = S(() => [e.getAllCells(), o.getState().columnVisibility], (t) => t.filter((n) => n.column.getIsVisible()), m(o.options, "debugRows")), e.getVisibleCells = S(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, n, i) => [...t, ...n, ...i], m(o.options, "debugRows"));
  },
  createTable: (e) => {
    const o = (t, n) => S(() => [n(), n().filter((i) => i.getIsVisible()).map((i) => i.id).join("_")], (i) => i.filter((r) => r.getIsVisible == null ? void 0 : r.getIsVisible()), m(e.options, "debugColumns"));
    e.getVisibleFlatColumns = o("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = o("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = o("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = o("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = o("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var n;
      e.setColumnVisibility(t ? {} : (n = e.initialState.columnVisibility) != null ? n : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var n;
      t = (n = t) != null ? n : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((i, r) => ({
        ...i,
        [r.id]: t || !(r.getCanHide != null && r.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var n;
      e.toggleAllColumnsVisible((n = t.target) == null ? void 0 : n.checked);
    };
  }
};
function E(e, o) {
  return o ? o === "center" ? e.getCenterVisibleLeafColumns() : o === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const ie = [we, Xe, Ae, Le, Fe, Ue, He, _e, ze, Oe, ve];
function Ke(e) {
  var o;
  (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  let t = {
    _features: ie
  };
  const n = t._features.reduce((g, d) => Object.assign(g, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(t)), {}), i = (g) => t.options.mergeOptions ? t.options.mergeOptions(n, g) : {
    ...n,
    ...g
  };
  let l = {
    ...{},
    ...(o = e.initialState) != null ? o : {}
  };
  t._features.forEach((g) => {
    var d;
    l = (d = g.getInitialState == null ? void 0 : g.getInitialState(l)) != null ? d : l;
  });
  const u = [];
  let s = !1;
  const a = {
    _features: ie,
    options: {
      ...n,
      ...e
    },
    initialState: l,
    _queue: (g) => {
      u.push(g), s || (s = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        s = !1;
      }).catch((d) => setTimeout(() => {
        throw d;
      })));
    },
    reset: () => {
      t.setState(t.initialState);
    },
    setOptions: (g) => {
      const d = P(g, t.options);
      t.options = i(d);
    },
    getState: () => t.options.state,
    setState: (g) => {
      t.options.onStateChange == null || t.options.onStateChange(g);
    },
    _getRowId: (g, d, c) => {
      var f;
      return (f = t.options.getRowId == null ? void 0 : t.options.getRowId(g, d, c)) != null ? f : `${c ? [c.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (t._getCoreRowModel || (t._getCoreRowModel = t.options.getCoreRowModel(t)), t._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => t.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (g, d) => {
      let c = (d ? t.getPrePaginationRowModel() : t.getRowModel()).rowsById[g];
      if (!c && (c = t.getCoreRowModel().rowsById[g], !c))
        throw new Error();
      return c;
    },
    _getDefaultColumnDef: S(() => [t.options.defaultColumn], (g) => {
      var d;
      return g = (d = g) != null ? d : {}, {
        header: (c) => {
          const f = c.header.column.columnDef;
          return f.accessorKey ? f.accessorKey : f.accessorFn ? f.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (c) => {
          var f, p;
          return (f = (p = c.renderValue()) == null || p.toString == null ? void 0 : p.toString()) != null ? f : null;
        },
        ...t._features.reduce((c, f) => Object.assign(c, f.getDefaultColumnDef == null ? void 0 : f.getDefaultColumnDef()), {}),
        ...g
      };
    }, m(e, "debugColumns")),
    _getColumnDefs: () => t.options.columns,
    getAllColumns: S(() => [t._getColumnDefs()], (g) => {
      const d = function(c, f, p) {
        return p === void 0 && (p = 0), c.map((C) => {
          const w = Re(t, C, p, f), R = C;
          return w.columns = R.columns ? d(R.columns, w, p + 1) : [], w;
        });
      };
      return d(g);
    }, m(e, "debugColumns")),
    getAllFlatColumns: S(() => [t.getAllColumns()], (g) => g.flatMap((d) => d.getFlatColumns()), m(e, "debugColumns")),
    _getAllFlatColumnsById: S(() => [t.getAllFlatColumns()], (g) => g.reduce((d, c) => (d[c.id] = c, d), {}), m(e, "debugColumns")),
    getAllLeafColumns: S(() => [t.getAllColumns(), t._getOrderColumnsFn()], (g, d) => {
      let c = g.flatMap((f) => f.getLeafColumns());
      return d(c);
    }, m(e, "debugColumns")),
    getColumn: (g) => t._getAllFlatColumnsById()[g]
  };
  Object.assign(t, a);
  for (let g = 0; g < t._features.length; g++) {
    const d = t._features[g];
    d == null || d.createTable == null || d.createTable(t);
  }
  return t;
}
function Je(e, o, t, n) {
  const i = () => {
    var l;
    return (l = r.getValue()) != null ? l : e.options.renderFallbackValue;
  }, r = {
    id: `${o.id}_${t.id}`,
    row: o,
    column: t,
    getValue: () => o.getValue(n),
    renderValue: i,
    getContext: S(() => [e, t, o, r], (l, u, s, a) => ({
      table: l,
      column: u,
      row: s,
      cell: a,
      getValue: a.getValue,
      renderValue: a.renderValue
    }), m(e.options, "debugCells"))
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(r, t, o, e);
  }, {}), r;
}
const Qe = (e, o, t, n, i, r, l) => {
  let u = {
    id: o,
    index: n,
    original: t,
    depth: i,
    parentId: l,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (s) => {
      if (u._valuesCache.hasOwnProperty(s))
        return u._valuesCache[s];
      const a = e.getColumn(s);
      if (a != null && a.accessorFn)
        return u._valuesCache[s] = a.accessorFn(u.original, n), u._valuesCache[s];
    },
    getUniqueValues: (s) => {
      if (u._uniqueValuesCache.hasOwnProperty(s))
        return u._uniqueValuesCache[s];
      const a = e.getColumn(s);
      if (a != null && a.accessorFn)
        return a.columnDef.getUniqueValues ? (u._uniqueValuesCache[s] = a.columnDef.getUniqueValues(u.original, n), u._uniqueValuesCache[s]) : (u._uniqueValuesCache[s] = [u.getValue(s)], u._uniqueValuesCache[s]);
    },
    renderValue: (s) => {
      var a;
      return (a = u.getValue(s)) != null ? a : e.options.renderFallbackValue;
    },
    subRows: r ?? [],
    getLeafRows: () => Ce(u.subRows, (s) => s.subRows),
    getParentRow: () => u.parentId ? e.getRow(u.parentId, !0) : void 0,
    getParentRows: () => {
      let s = [], a = u;
      for (; ; ) {
        const g = a.getParentRow();
        if (!g)
          break;
        s.push(g), a = g;
      }
      return s.reverse();
    },
    getAllCells: S(() => [e.getAllLeafColumns()], (s) => s.map((a) => Je(e, u, a, a.id)), m(e.options, "debugRows")),
    _getAllCellsByColumnId: S(() => [u.getAllCells()], (s) => s.reduce((a, g) => (a[g.column.id] = g, a), {}), m(e.options, "debugRows"))
  };
  for (let s = 0; s < e._features.length; s++) {
    const a = e._features[s];
    a == null || a.createRow == null || a.createRow(u, e);
  }
  return u;
};
function et() {
  return (e) => S(() => [e.options.data], (o) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, n = function(i, r, l) {
      r === void 0 && (r = 0);
      const u = [];
      for (let a = 0; a < i.length; a++) {
        const g = Qe(e, e._getRowId(i[a], a, l), i[a], a, r, void 0, l == null ? void 0 : l.id);
        if (t.flatRows.push(g), t.rowsById[g.id] = g, u.push(g), e.options.getSubRows) {
          var s;
          g.originalSubRows = e.options.getSubRows(i[a], a), (s = g.originalSubRows) != null && s.length && (g.subRows = n(g.originalSubRows, r + 1, g));
        }
      }
      return u;
    };
    return t.rows = n(o), t;
  }, m(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function tt(e, o) {
  return e ? We(e) ? /* @__PURE__ */ j.createElement(e, o) : e : null;
}
function We(e) {
  return Ye(e) || typeof e == "function" || Ze(e);
}
function Ye(e) {
  return typeof e == "function" && (() => {
    const o = Object.getPrototypeOf(e);
    return o.prototype && o.prototype.isReactComponent;
  })();
}
function Ze(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function nt(e) {
  const o = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = j.useState(() => ({
    current: Ke(o)
  })), [n, i] = j.useState(() => t.current.initialState);
  return t.current.setOptions((r) => ({
    ...r,
    ...e,
    state: {
      ...n,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (l) => {
      i(l), e.onStateChange == null || e.onStateChange(l);
    }
  })), t.current;
}
export {
  tt as f,
  et as g,
  nt as u
};
