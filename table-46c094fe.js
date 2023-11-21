import { r as b } from "./react-72acea58.js";
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
function F(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function R(e, n) {
  return (t) => {
    n.setState((o) => ({
      ...o,
      [e]: F(t, o[e])
    }));
  };
}
function H(e) {
  return e instanceof Function;
}
function ae(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function de(e, n) {
  const t = [], o = (r) => {
    r.forEach((i) => {
      t.push(i);
      const l = n(i);
      l != null && l.length && o(l);
    });
  };
  return o(e), t;
}
function S(e, n, t) {
  let o = [], r;
  return () => {
    let i;
    t.key && t.debug && (i = Date.now());
    const l = e();
    if (!(l.length !== o.length || l.some((a, g) => o[g] !== a)))
      return r;
    o = l;
    let s;
    if (t.key && t.debug && (s = Date.now()), r = n(...l), t == null || t.onChange == null || t.onChange(r), t.key && t.debug && t != null && t.debug()) {
      const a = Math.round((Date.now() - i) * 100) / 100, g = Math.round((Date.now() - s) * 100) / 100, d = g / 16, p = (c, m) => {
        for (c = String(c); c.length < m; )
          c = " " + c;
        return c;
      };
      console.info(`%c⏱ ${p(g, 5)} /${p(a, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return r;
  };
}
function ce(e, n, t, o) {
  var r, i;
  const u = {
    ...e._getDefaultColumnDef(),
    ...n
  }, s = u.accessorKey;
  let a = (r = (i = u.id) != null ? i : s ? s.replace(".", "_") : void 0) != null ? r : typeof u.header == "string" ? u.header : void 0, g;
  if (u.accessorFn ? g = u.accessorFn : s && (s.includes(".") ? g = (p) => {
    let c = p;
    for (const f of s.split(".")) {
      var m;
      c = (m = c) == null ? void 0 : m[f];
    }
    return c;
  } : g = (p) => p[u.accessorKey]), !a)
    throw new Error();
  let d = {
    id: `${String(a)}`,
    accessorFn: g,
    parent: o,
    depth: t,
    columnDef: u,
    columns: [],
    getFlatColumns: S(() => [!0], () => {
      var p;
      return [d, ...(p = d.columns) == null ? void 0 : p.flatMap((c) => c.getFlatColumns())];
    }, {
      key: "column.getFlatColumns",
      debug: () => {
        var p;
        return (p = e.options.debugAll) != null ? p : e.options.debugColumns;
      }
    }),
    getLeafColumns: S(() => [e._getOrderColumnsFn()], (p) => {
      var c;
      if ((c = d.columns) != null && c.length) {
        let m = d.columns.flatMap((f) => f.getLeafColumns());
        return p(m);
      }
      return [d];
    }, {
      key: "column.getLeafColumns",
      debug: () => {
        var p;
        return (p = e.options.debugAll) != null ? p : e.options.debugColumns;
      }
    })
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(d, e);
  return d;
}
function W(e, n, t) {
  var o;
  let i = {
    id: (o = t.id) != null ? o : n.id,
    column: n,
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
      return u(i), l;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: n
    })
  };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(i, e);
  }), i;
}
const pe = {
  createTable: (e) => {
    e.getHeaderGroups = S(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, o, r) => {
      var i, l;
      const u = (i = o == null ? void 0 : o.map((d) => t.find((p) => p.id === d)).filter(Boolean)) != null ? i : [], s = (l = r == null ? void 0 : r.map((d) => t.find((p) => p.id === d)).filter(Boolean)) != null ? l : [], a = t.filter((d) => !(o != null && o.includes(d.id)) && !(r != null && r.includes(d.id)));
      return y(n, [...u, ...a, ...s], e);
    }, {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getCenterHeaderGroups = S(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, o, r) => (t = t.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), y(n, t, e, "center")), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getLeftHeaderGroups = S(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, o) => {
      var r;
      const i = (r = o == null ? void 0 : o.map((l) => t.find((u) => u.id === l)).filter(Boolean)) != null ? r : [];
      return y(n, i, e, "left");
    }, {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getRightHeaderGroups = S(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, o) => {
      var r;
      const i = (r = o == null ? void 0 : o.map((l) => t.find((u) => u.id === l)).filter(Boolean)) != null ? r : [];
      return y(n, i, e, "right");
    }, {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getFooterGroups = S(() => [e.getHeaderGroups()], (n) => [...n].reverse(), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getLeftFooterGroups = S(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getCenterFooterGroups = S(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getRightFooterGroups = S(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getFlatHeaders = S(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getLeftFlatHeaders = S(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getCenterFlatHeaders = S(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getRightFlatHeaders = S(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getCenterLeafHeaders = S(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var o;
      return !((o = t.subHeaders) != null && o.length);
    }), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getLeftLeafHeaders = S(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var o;
      return !((o = t.subHeaders) != null && o.length);
    }), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getRightLeafHeaders = S(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var o;
      return !((o = t.subHeaders) != null && o.length);
    }), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    }), e.getLeafHeaders = S(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, o) => {
      var r, i, l, u, s, a;
      return [...(r = (i = n[0]) == null ? void 0 : i.headers) != null ? r : [], ...(l = (u = t[0]) == null ? void 0 : u.headers) != null ? l : [], ...(s = (a = o[0]) == null ? void 0 : a.headers) != null ? s : []].map((g) => g.getLeafHeaders()).flat();
    }, {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugHeaders;
      }
    });
  }
};
function y(e, n, t, o) {
  var r, i;
  let l = 0;
  const u = function(p, c) {
    c === void 0 && (c = 1), l = Math.max(l, c), p.filter((m) => m.getIsVisible()).forEach((m) => {
      var f;
      (f = m.columns) != null && f.length && u(m.columns, c + 1);
    }, 0);
  };
  u(e);
  let s = [];
  const a = (p, c) => {
    const m = {
      depth: c,
      id: [o, `${c}`].filter(Boolean).join("_"),
      headers: []
    }, f = [];
    p.forEach((C) => {
      const v = [...f].reverse()[0], V = C.column.depth === m.depth;
      let w, $ = !1;
      if (V && C.column.parent ? w = C.column.parent : (w = C.column, $ = !0), v && (v == null ? void 0 : v.column) === w)
        v.subHeaders.push(C);
      else {
        const A = W(t, w, {
          id: [o, c, w.id, C == null ? void 0 : C.id].filter(Boolean).join("_"),
          isPlaceholder: $,
          placeholderId: $ ? `${f.filter((E) => E.column === w).length}` : void 0,
          depth: c,
          index: f.length
        });
        A.subHeaders.push(C), f.push(A);
      }
      m.headers.push(C), C.headerGroup = m;
    }), s.push(m), c > 0 && a(f, c - 1);
  }, g = n.map((p, c) => W(t, p, {
    depth: l,
    index: c
  }));
  a(g, l - 1), s.reverse();
  const d = (p) => p.filter((m) => m.column.getIsVisible()).map((m) => {
    let f = 0, C = 0, v = [0];
    m.subHeaders && m.subHeaders.length ? (v = [], d(m.subHeaders).forEach((w) => {
      let {
        colSpan: $,
        rowSpan: A
      } = w;
      f += $, v.push(A);
    })) : f = 1;
    const V = Math.min(...v);
    return C = C + V, m.colSpan = f, m.rowSpan = C, {
      colSpan: f,
      rowSpan: C
    };
  });
  return d((r = (i = s[0]) == null ? void 0 : i.headers) != null ? r : []), s;
}
const x = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, D = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), fe = {
  getDefaultColumnDef: () => x,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: D(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    onColumnSizingChange: R("columnSizing", e),
    onColumnSizingInfoChange: R("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, o, r;
      const i = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : x.minSize, (o = i ?? e.columnDef.size) != null ? o : x.size), (r = e.columnDef.maxSize) != null ? r : x.maxSize);
    }, e.getStart = (t) => {
      const o = t ? t === "left" ? n.getLeftVisibleLeafColumns() : n.getRightVisibleLeafColumns() : n.getVisibleLeafColumns(), r = o.findIndex((i) => i.id === e.id);
      if (r > 0) {
        const i = o[r - 1];
        return i.getStart(t) + i.getSize();
      }
      return 0;
    }, e.resetSize = () => {
      n.setColumnSizing((t) => {
        let {
          [e.id]: o,
          ...r
        } = t;
        return r;
      });
    }, e.getCanResize = () => {
      var t, o;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((o = n.options.enableColumnResizing) != null ? o : !0);
    }, e.getIsResizing = () => n.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, n) => {
    e.getSize = () => {
      let t = 0;
      const o = (r) => {
        if (r.subHeaders.length)
          r.subHeaders.forEach(o);
        else {
          var i;
          t += (i = r.column.getSize()) != null ? i : 0;
        }
      };
      return o(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = () => {
      const t = n.getColumn(e.column.id), o = t == null ? void 0 : t.getCanResize();
      return (r) => {
        if (!t || !o || (r.persist == null || r.persist(), G(r) && r.touches && r.touches.length > 1))
          return;
        const i = e.getSize(), l = e ? e.getLeafHeaders().map((f) => [f.column.id, f.column.getSize()]) : [[t.id, t.getSize()]], u = G(r) ? Math.round(r.touches[0].clientX) : r.clientX, s = {}, a = (f, C) => {
          typeof C == "number" && (n.setColumnSizingInfo((v) => {
            var V, w;
            const $ = C - ((V = v == null ? void 0 : v.startOffset) != null ? V : 0), A = Math.max($ / ((w = v == null ? void 0 : v.startSize) != null ? w : 0), -0.999999);
            return v.columnSizingStart.forEach((E) => {
              let [ge, Q] = E;
              s[ge] = Math.round(Math.max(Q + Q * A, 0) * 100) / 100;
            }), {
              ...v,
              deltaOffset: $,
              deltaPercentage: A
            };
          }), (n.options.columnResizeMode === "onChange" || f === "end") && n.setColumnSizing((v) => ({
            ...v,
            ...s
          })));
        }, g = (f) => a("move", f), d = (f) => {
          a("end", f), n.setColumnSizingInfo((C) => ({
            ...C,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, p = {
          moveHandler: (f) => g(f.clientX),
          upHandler: (f) => {
            document.removeEventListener("mousemove", p.moveHandler), document.removeEventListener("mouseup", p.upHandler), d(f.clientX);
          }
        }, c = {
          moveHandler: (f) => (f.cancelable && (f.preventDefault(), f.stopPropagation()), g(f.touches[0].clientX), !1),
          upHandler: (f) => {
            var C;
            document.removeEventListener("touchmove", c.moveHandler), document.removeEventListener("touchend", c.upHandler), f.cancelable && (f.preventDefault(), f.stopPropagation()), d((C = f.touches[0]) == null ? void 0 : C.clientX);
          }
        }, m = Se() ? {
          passive: !1
        } : !1;
        G(r) ? (document.addEventListener("touchmove", c.moveHandler, m), document.addEventListener("touchend", c.upHandler, m)) : (document.addEventListener("mousemove", p.moveHandler, m), document.addEventListener("mouseup", p.upHandler, m)), n.setColumnSizingInfo((f) => ({
          ...f,
          startOffset: u,
          startSize: i,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: l,
          isResizingColumn: t.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (n) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(n), e.setColumnSizingInfo = (n) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(n), e.resetColumnSizing = (n) => {
      var t;
      e.setColumnSizing(n ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (n) => {
      var t;
      e.setColumnSizingInfo(n ? D() : (t = e.initialState.columnSizingInfo) != null ? t : D());
    }, e.getTotalSize = () => {
      var n, t;
      return (n = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? n : 0;
    }, e.getLeftTotalSize = () => {
      var n, t;
      return (n = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? n : 0;
    }, e.getCenterTotalSize = () => {
      var n, t;
      return (n = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? n : 0;
    }, e.getRightTotalSize = () => {
      var n, t;
      return (n = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? n : 0;
    };
  }
};
let I = null;
function Se() {
  if (typeof I == "boolean")
    return I;
  let e = !1;
  try {
    const n = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, n), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return I = e, I;
}
function G(e) {
  return e.type === "touchstart";
}
const me = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: R("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetExpanded = () => {
      var o, r;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? o : !e.options.manualExpanding) {
        if (t)
          return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (o) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(o), e.toggleAllRowsExpanded = (o) => {
      o ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (o) => {
      var r, i;
      e.setExpanded(o ? {} : (r = (i = e.initialState) == null ? void 0 : i.expanded) != null ? r : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((o) => o.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (o) => {
      o.persist == null || o.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const o = e.getState().expanded;
      return o === !0 || Object.values(o).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const o = e.getState().expanded;
      return typeof o == "boolean" ? o === !0 : !(!Object.keys(o).length || e.getRowModel().flatRows.some((r) => !r.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let o = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const l = i.split(".");
        o = Math.max(o, l.length);
      }), o;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, n) => {
    e.toggleExpanded = (t) => {
      n.setExpanded((o) => {
        var r;
        const i = o === !0 ? !0 : !!(o != null && o[e.id]);
        let l = {};
        if (o === !0 ? Object.keys(n.getRowModel().rowsById).forEach((u) => {
          l[u] = !0;
        }) : l = o, t = (r = t) != null ? r : !i, !i && t)
          return {
            ...l,
            [e.id]: !0
          };
        if (i && !t) {
          const {
            [e.id]: u,
            ...s
          } = l;
          return s;
        }
        return o;
      });
    }, e.getIsExpanded = () => {
      var t;
      const o = n.getState().expanded;
      return !!((t = n.options.getIsRowExpanded == null ? void 0 : n.options.getIsRowExpanded(e)) != null ? t : o === !0 || o != null && o[e.id]);
    }, e.getCanExpand = () => {
      var t, o, r;
      return (t = n.options.getRowCanExpand == null ? void 0 : n.options.getRowCanExpand(e)) != null ? t : ((o = n.options.enableExpanding) != null ? o : !0) && !!((r = e.subRows) != null && r.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, o = e;
      for (; t && o.parentId; )
        o = n.getRow(o.parentId, !0), t = o.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, ee = (e, n, t) => {
  var o;
  const r = t.toLowerCase();
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(r));
};
ee.autoRemove = (e) => _(e);
const te = (e, n, t) => {
  var o;
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null) && o.includes(t));
};
te.autoRemove = (e) => _(e);
const ne = (e, n, t) => {
  var o;
  return ((o = e.getValue(n)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
ne.autoRemove = (e) => _(e);
const oe = (e, n, t) => {
  var o;
  return (o = e.getValue(n)) == null ? void 0 : o.includes(t);
};
oe.autoRemove = (e) => _(e) || !(e != null && e.length);
const re = (e, n, t) => !t.some((o) => {
  var r;
  return !((r = e.getValue(n)) != null && r.includes(o));
});
re.autoRemove = (e) => _(e) || !(e != null && e.length);
const ie = (e, n, t) => t.some((o) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(o);
});
ie.autoRemove = (e) => _(e) || !(e != null && e.length);
const le = (e, n, t) => e.getValue(n) === t;
le.autoRemove = (e) => _(e);
const ue = (e, n, t) => e.getValue(n) == t;
ue.autoRemove = (e) => _(e);
const X = (e, n, t) => {
  let [o, r] = t;
  const i = e.getValue(n);
  return i >= o && i <= r;
};
X.resolveFilterValue = (e) => {
  let [n, t] = e, o = typeof n != "number" ? parseFloat(n) : n, r = typeof t != "number" ? parseFloat(t) : t, i = n === null || Number.isNaN(o) ? -1 / 0 : o, l = t === null || Number.isNaN(r) ? 1 / 0 : r;
  if (i > l) {
    const u = i;
    i = l, l = u;
  }
  return [i, l];
};
X.autoRemove = (e) => _(e) || _(e[0]) && _(e[1]);
const h = {
  includesString: ee,
  includesStringSensitive: te,
  equalsString: ne,
  arrIncludes: oe,
  arrIncludesAll: re,
  arrIncludesSome: ie,
  equals: le,
  weakEquals: ue,
  inNumberRange: X
};
function _(e) {
  return e == null || e === "";
}
const Ce = {
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
    onColumnFiltersChange: R("columnFilters", e),
    onGlobalFilterChange: R("globalFilter", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (n) => {
      var t;
      const o = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[n.id]) == null ? void 0 : t.getValue();
      return typeof o == "string" || typeof o == "number";
    }
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], o = t == null ? void 0 : t.getValue(e.id);
      return typeof o == "string" ? h.includesString : typeof o == "number" ? h.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? h.equals : Array.isArray(o) ? h.arrIncludes : h.weakEquals;
    }, e.getFilterFn = () => {
      var t, o;
      return H(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (o = n.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? t : h[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, o, r;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((o = n.options.enableColumnFilters) != null ? o : !0) && ((r = n.options.enableFilters) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanGlobalFilter = () => {
      var t, o, r, i;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((o = n.options.enableGlobalFilter) != null ? o : !0) && ((r = n.options.enableFilters) != null ? r : !0) && ((i = n.options.getColumnCanGlobalFilter == null ? void 0 : n.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = n.getState().columnFilters) == null || (t = t.find((o) => o.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, o;
      return (t = (o = n.getState().columnFilters) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      n.setColumnFilters((o) => {
        const r = e.getFilterFn(), i = o == null ? void 0 : o.find((g) => g.id === e.id), l = F(t, i ? i.value : void 0);
        if (Y(r, l, e)) {
          var u;
          return (u = o == null ? void 0 : o.filter((g) => g.id !== e.id)) != null ? u : [];
        }
        const s = {
          id: e.id,
          value: l
        };
        if (i) {
          var a;
          return (a = o == null ? void 0 : o.map((g) => g.id === e.id ? s : g)) != null ? a : [];
        }
        return o != null && o.length ? [...o, s] : [s];
      });
    }, e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  },
  createRow: (e, n) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => h.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: o
      } = e.options;
      return H(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (
        // @ts-ignore
        (n = (t = e.options.filterFns) == null ? void 0 : t[o]) != null ? n : h[o]
      );
    }, e.setColumnFilters = (n) => {
      const t = e.getAllLeafColumns(), o = (r) => {
        var i;
        return (i = F(n, r)) == null ? void 0 : i.filter((l) => {
          const u = t.find((s) => s.id === l.id);
          if (u) {
            const s = u.getFilterFn();
            if (Y(s, l.value, u))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(o);
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    }, e.resetColumnFilters = (n) => {
      var t, o;
      e.setColumnFilters(n ? [] : (t = (o = e.initialState) == null ? void 0 : o.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel()), e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
};
function Y(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const ve = (e, n, t) => t.reduce((o, r) => {
  const i = r.getValue(e);
  return o + (typeof i == "number" ? i : 0);
}, 0), Re = (e, n, t) => {
  let o;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (o > i || o === void 0 && i >= i) && (o = i);
  }), o;
}, we = (e, n, t) => {
  let o;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (o < i || o === void 0 && i >= i) && (o = i);
  }), o;
}, _e = (e, n, t) => {
  let o, r;
  return t.forEach((i) => {
    const l = i.getValue(e);
    l != null && (o === void 0 ? l >= l && (o = r = l) : (o > l && (o = l), r < l && (r = l)));
  }), [o, r];
}, he = (e, n) => {
  let t = 0, o = 0;
  if (n.forEach((r) => {
    let i = r.getValue(e);
    i != null && (i = +i) >= i && (++t, o += i);
  }), t)
    return o / t;
}, $e = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((i) => i.getValue(e));
  if (!ae(t))
    return;
  if (t.length === 1)
    return t[0];
  const o = Math.floor(t.length / 2), r = t.sort((i, l) => i - l);
  return t.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
}, Fe = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), Me = (e, n) => new Set(n.map((t) => t.getValue(e))).size, Ae = (e, n) => n.length, z = {
  sum: ve,
  min: Re,
  max: we,
  extent: _e,
  mean: he,
  median: $e,
  unique: Fe,
  uniqueCount: Me,
  count: Ae
}, Ve = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var n, t;
      return (n = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? n : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: R("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, n) => {
    e.toggleGrouping = () => {
      n.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((o) => o !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, o, r, i;
      return (t = (o = (r = (i = e.columnDef.enableGrouping) != null ? i : !0) != null ? r : n.options.enableGrouping) != null ? o : !0) != null ? t : !!e.accessorFn;
    }, e.getIsGrouped = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = n.getCoreRowModel().flatRows[0], o = t == null ? void 0 : t.getValue(e.id);
      if (typeof o == "number")
        return z.sum;
      if (Object.prototype.toString.call(o) === "[object Date]")
        return z.extent;
    }, e.getAggregationFn = () => {
      var t, o;
      if (!e)
        throw new Error();
      return H(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (o = n.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? t : z[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (n) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(n), e.resetGrouping = (n) => {
      var t, o;
      e.setGrouping(n ? [] : (t = (o = e.initialState) == null ? void 0 : o.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, n) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const o = n.getColumn(t);
      return o != null && o.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = o.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, n, t, o) => {
    e.getIsGrouped = () => n.getIsGrouped() && n.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && n.getIsGrouped(), e.getIsAggregated = () => {
      var r;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = t.subRows) != null && r.length);
    };
  }
};
function Pe(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const o = e.filter((i) => !n.includes(i.id));
  return t === "remove" ? o : [...n.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...o];
}
const ye = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: R("columnOrder", e)
  }),
  createTable: (e) => {
    e.setColumnOrder = (n) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(n), e.resetColumnOrder = (n) => {
      var t;
      e.setColumnOrder(n ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = S(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, o) => (r) => {
      let i = [];
      if (!(n != null && n.length))
        i = r;
      else {
        const l = [...n], u = [...r];
        for (; u.length && l.length; ) {
          const s = l.shift(), a = u.findIndex((g) => g.id === s);
          a > -1 && i.push(u.splice(a, 1)[0]);
        }
        i = [...i, ...u];
      }
      return Pe(i, t, o);
    }, {
      key: !1
      // debug: () => table.options.debugAll ?? table.options.debugTable,
    });
  }
}, q = 0, T = 10, L = () => ({
  pageIndex: q,
  pageSize: T
}), xe = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...L(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: R("pagination", e)
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetPageIndex = () => {
      var o, r;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? o : !e.options.manualPagination) {
        if (t)
          return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (o) => {
      const r = (i) => F(o, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
    }, e.resetPagination = (o) => {
      var r;
      e.setPagination(o ? L() : (r = e.initialState.pagination) != null ? r : L());
    }, e.setPageIndex = (o) => {
      e.setPagination((r) => {
        let i = F(o, r.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...r,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (o) => {
      var r, i;
      e.setPageIndex(o ? q : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : q);
    }, e.resetPageSize = (o) => {
      var r, i;
      e.setPageSize(o ? T : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : T);
    }, e.setPageSize = (o) => {
      e.setPagination((r) => {
        const i = Math.max(1, F(o, r.pageSize)), l = r.pageSize * r.pageIndex, u = Math.floor(l / i);
        return {
          ...r,
          pageIndex: u,
          pageSize: i
        };
      });
    }, e.setPageCount = (o) => e.setPagination((r) => {
      var i;
      let l = F(o, (i = e.options.pageCount) != null ? i : -1);
      return typeof l == "number" && (l = Math.max(-1, l)), {
        ...r,
        pageCount: l
      };
    }), e.getPageOptions = S(() => [e.getPageCount()], (o) => {
      let r = [];
      return o && o > 0 && (r = [...new Array(o)].fill(null).map((i, l) => l)), r;
    }, {
      key: !1,
      debug: () => {
        var o;
        return (o = e.options.debugAll) != null ? o : e.options.debugTable;
      }
    }), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: o
      } = e.getState().pagination, r = e.getPageCount();
      return r === -1 ? !0 : r === 0 ? !1 : o < r - 1;
    }, e.previousPage = () => e.setPageIndex((o) => o - 1), e.nextPage = () => e.setPageIndex((o) => o + 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var o;
      return (o = e.options.pageCount) != null ? o : Math.ceil(e.getPrePaginationRowModel().rows.length / e.getState().pagination.pageSize);
    };
  }
}, O = () => ({
  left: [],
  right: []
}), k = () => ({
  top: [],
  bottom: []
}), Ie = {
  getInitialState: (e) => ({
    columnPinning: O(),
    rowPinning: k(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: R("columnPinning", e),
    onRowPinningChange: R("rowPinning", e)
  }),
  createColumn: (e, n) => {
    e.pin = (t) => {
      const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
      n.setColumnPinning((r) => {
        var i, l;
        if (t === "right") {
          var u, s;
          return {
            left: ((u = r == null ? void 0 : r.left) != null ? u : []).filter((d) => !(o != null && o.includes(d))),
            right: [...((s = r == null ? void 0 : r.right) != null ? s : []).filter((d) => !(o != null && o.includes(d))), ...o]
          };
        }
        if (t === "left") {
          var a, g;
          return {
            left: [...((a = r == null ? void 0 : r.left) != null ? a : []).filter((d) => !(o != null && o.includes(d))), ...o],
            right: ((g = r == null ? void 0 : r.right) != null ? g : []).filter((d) => !(o != null && o.includes(d)))
          };
        }
        return {
          left: ((i = r == null ? void 0 : r.left) != null ? i : []).filter((d) => !(o != null && o.includes(d))),
          right: ((l = r == null ? void 0 : r.right) != null ? l : []).filter((d) => !(o != null && o.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((o) => {
      var r, i, l;
      return ((r = o.columnDef.enablePinning) != null ? r : !0) && ((i = (l = n.options.enableColumnPinning) != null ? l : n.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((u) => u.id), {
        left: o,
        right: r
      } = n.getState().columnPinning, i = t.some((u) => o == null ? void 0 : o.includes(u)), l = t.some((u) => r == null ? void 0 : r.includes(u));
      return i ? "left" : l ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, o;
      const r = e.getIsPinned();
      return r ? (t = (o = n.getState().columnPinning) == null || (o = o[r]) == null ? void 0 : o.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, n) => {
    e.pin = (t, o, r) => {
      const i = o ? e.getLeafRows().map((s) => {
        let {
          id: a
        } = s;
        return a;
      }) : [], l = r ? e.getParentRows().map((s) => {
        let {
          id: a
        } = s;
        return a;
      }) : [], u = /* @__PURE__ */ new Set([...l, e.id, ...i]);
      n.setRowPinning((s) => {
        var a, g;
        if (t === "bottom") {
          var d, p;
          return {
            top: ((d = s == null ? void 0 : s.top) != null ? d : []).filter((f) => !(u != null && u.has(f))),
            bottom: [...((p = s == null ? void 0 : s.bottom) != null ? p : []).filter((f) => !(u != null && u.has(f))), ...Array.from(u)]
          };
        }
        if (t === "top") {
          var c, m;
          return {
            top: [...((c = s == null ? void 0 : s.top) != null ? c : []).filter((f) => !(u != null && u.has(f))), ...Array.from(u)],
            bottom: ((m = s == null ? void 0 : s.bottom) != null ? m : []).filter((f) => !(u != null && u.has(f)))
          };
        }
        return {
          top: ((a = s == null ? void 0 : s.top) != null ? a : []).filter((f) => !(u != null && u.has(f))),
          bottom: ((g = s == null ? void 0 : s.bottom) != null ? g : []).filter((f) => !(u != null && u.has(f)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: o,
        enablePinning: r
      } = n.options;
      return typeof o == "function" ? o(e) : (t = o ?? r) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: o,
        bottom: r
      } = n.getState().rowPinning, i = t.some((u) => o == null ? void 0 : o.includes(u)), l = t.some((u) => r == null ? void 0 : r.includes(u));
      return i ? "top" : l ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, o;
      const r = e.getIsPinned();
      if (!r)
        return -1;
      const i = (t = n._getPinnedRows(r)) == null ? void 0 : t.map((l) => {
        let {
          id: u
        } = l;
        return u;
      });
      return (o = i == null ? void 0 : i.indexOf(e.id)) != null ? o : -1;
    }, e.getCenterVisibleCells = S(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, o, r) => {
      const i = [...o ?? [], ...r ?? []];
      return t.filter((l) => !i.includes(l.column.id));
    }, {
      key: !1,
      debug: () => {
        var t;
        return (t = n.options.debugAll) != null ? t : n.options.debugRows;
      }
    }), e.getLeftVisibleCells = S(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, ,], (t, o) => (o ?? []).map((i) => t.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), {
      key: !1,
      debug: () => {
        var t;
        return (t = n.options.debugAll) != null ? t : n.options.debugRows;
      }
    }), e.getRightVisibleCells = S(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, o) => (o ?? []).map((i) => t.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), {
      key: !1,
      debug: () => {
        var t;
        return (t = n.options.debugAll) != null ? t : n.options.debugRows;
      }
    });
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, o;
      return e.setColumnPinning(n ? O() : (t = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? t : O());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const o = e.getState().columnPinning;
      if (!n) {
        var r, i;
        return !!((r = o.left) != null && r.length || (i = o.right) != null && i.length);
      }
      return !!((t = o[n]) != null && t.length);
    }, e.getLeftLeafColumns = S(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((o) => n.find((r) => r.id === o)).filter(Boolean), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugColumns;
      }
    }), e.getRightLeafColumns = S(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((o) => n.find((r) => r.id === o)).filter(Boolean), {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugColumns;
      }
    }), e.getCenterLeafColumns = S(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, o) => {
      const r = [...t ?? [], ...o ?? []];
      return n.filter((i) => !r.includes(i.id));
    }, {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugColumns;
      }
    }), e.setRowPinning = (n) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(n), e.resetRowPinning = (n) => {
      var t, o;
      return e.setRowPinning(n ? k() : (t = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? t : k());
    }, e.getIsSomeRowsPinned = (n) => {
      var t;
      const o = e.getState().rowPinning;
      if (!n) {
        var r, i;
        return !!((r = o.top) != null && r.length || (i = o.bottom) != null && i.length);
      }
      return !!((t = o[n]) != null && t.length);
    }, e._getPinnedRows = (n) => S(() => [e.getRowModel().rows, e.getState().rowPinning[n]], (t, o) => {
      var r;
      return ((r = e.options.keepPinnedRows) == null || r ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (o ?? []).map((l) => {
          const u = e.getRow(l, !0);
          return u.getIsAllParentsExpanded() ? u : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (o ?? []).map((l) => t.find((u) => u.id === l))
      )).filter(Boolean).map((l) => ({
        ...l,
        position: n
      }));
    }, {
      key: !1,
      debug: () => {
        var t;
        return (t = e.options.debugAll) != null ? t : e.options.debugRows;
      }
    })(), e.getTopRows = () => e._getPinnedRows("top"), e.getBottomRows = () => e._getPinnedRows("bottom"), e.getCenterRows = S(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, o) => {
      const r = /* @__PURE__ */ new Set([...t ?? [], ...o ?? []]);
      return n.filter((i) => !r.has(i.id));
    }, {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugRows;
      }
    });
  }
}, He = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: R("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (n) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(n), e.resetRowSelection = (n) => {
      var t;
      return e.setRowSelection(n ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (n) => {
      e.setRowSelection((t) => {
        n = typeof n < "u" ? n : !e.getIsAllRowsSelected();
        const o = {
          ...t
        }, r = e.getPreGroupedRowModel().flatRows;
        return n ? r.forEach((i) => {
          i.getCanSelect() && (o[i.id] = !0);
        }) : r.forEach((i) => {
          delete o[i.id];
        }), o;
      });
    }, e.toggleAllPageRowsSelected = (n) => e.setRowSelection((t) => {
      const o = typeof n < "u" ? n : !e.getIsAllPageRowsSelected(), r = {
        ...t
      };
      return e.getRowModel().rows.forEach((i) => {
        N(r, i.id, o, !0, e);
      }), r;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = S(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? B(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, {
      key: !1,
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugTable;
      }
    }), e.getFilteredSelectedRowModel = S(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? B(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, {
      key: "getFilteredSelectedRowModel",
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugTable;
      }
    }), e.getGroupedSelectedRowModel = S(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? B(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, {
      key: "getGroupedSelectedRowModel",
      debug: () => {
        var n;
        return (n = e.options.debugAll) != null ? n : e.options.debugTable;
      }
    }), e.getIsAllRowsSelected = () => {
      const n = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let o = !!(n.length && Object.keys(t).length);
      return o && n.some((r) => r.getCanSelect() && !t[r.id]) && (o = !1), o;
    }, e.getIsAllPageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let o = !!n.length;
      return o && n.some((r) => !t[r.id]) && (o = !1), o;
    }, e.getIsSomeRowsSelected = () => {
      var n;
      const t = Object.keys((n = e.getState().rowSelection) != null ? n : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : n.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (n) => {
      e.toggleAllRowsSelected(n.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (n) => {
      e.toggleAllPageRowsSelected(n.target.checked);
    };
  },
  createRow: (e, n) => {
    e.toggleSelected = (t, o) => {
      const r = e.getIsSelected();
      n.setRowSelection((i) => {
        var l;
        if (t = typeof t < "u" ? t : !r, e.getCanSelect() && r === t)
          return i;
        const u = {
          ...i
        };
        return N(u, e.id, t, (l = o == null ? void 0 : o.selectChildren) != null ? l : !0, n), u;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return K(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return j(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return j(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof n.options.enableRowSelection == "function" ? n.options.enableRowSelection(e) : (t = n.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof n.options.enableSubRowSelection == "function" ? n.options.enableSubRowSelection(e) : (t = n.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof n.options.enableMultiRowSelection == "function" ? n.options.enableMultiRowSelection(e) : (t = n.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (o) => {
        var r;
        t && e.toggleSelected((r = o.target) == null ? void 0 : r.checked);
      };
    };
  }
}, N = (e, n, t, o, r) => {
  var i;
  const l = r.getRow(n);
  t ? (l.getCanMultiSelect() || Object.keys(e).forEach((u) => delete e[u]), l.getCanSelect() && (e[n] = !0)) : delete e[n], o && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((u) => N(e, u.id, t, o, r));
};
function B(e, n) {
  const t = e.getState().rowSelection, o = [], r = {}, i = function(l, u) {
    return l.map((s) => {
      var a;
      const g = K(s, t);
      if (g && (o.push(s), r[s.id] = s), (a = s.subRows) != null && a.length && (s = {
        ...s,
        subRows: i(s.subRows)
      }), g)
        return s;
    }).filter(Boolean);
  };
  return {
    rows: i(n.rows),
    flatRows: o,
    rowsById: r
  };
}
function K(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function j(e, n, t) {
  var o;
  if (!((o = e.subRows) != null && o.length))
    return !1;
  let r = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !r) && (l.getCanSelect() && (K(l, n) ? i = !0 : r = !1), l.subRows && l.subRows.length)) {
      const u = j(l, n);
      u === "all" ? i = !0 : (u === "some" && (i = !0), r = !1);
    }
  }), r ? "all" : i ? "some" : !1;
}
const U = /([0-9]+)/gm, Ee = (e, n, t) => se(M(e.getValue(t)).toLowerCase(), M(n.getValue(t)).toLowerCase()), De = (e, n, t) => se(M(e.getValue(t)), M(n.getValue(t))), Ge = (e, n, t) => J(M(e.getValue(t)).toLowerCase(), M(n.getValue(t)).toLowerCase()), ze = (e, n, t) => J(M(e.getValue(t)), M(n.getValue(t))), Le = (e, n, t) => {
  const o = e.getValue(t), r = n.getValue(t);
  return o > r ? 1 : o < r ? -1 : 0;
}, Oe = (e, n, t) => J(e.getValue(t), n.getValue(t));
function J(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function M(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function se(e, n) {
  const t = e.split(U).filter(Boolean), o = n.split(U).filter(Boolean);
  for (; t.length && o.length; ) {
    const r = t.shift(), i = o.shift(), l = parseInt(r, 10), u = parseInt(i, 10), s = [l, u].sort();
    if (isNaN(s[0])) {
      if (r > i)
        return 1;
      if (i > r)
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
  return t.length - o.length;
}
const P = {
  alphanumeric: Ee,
  alphanumericCaseSensitive: De,
  text: Ge,
  textCaseSensitive: ze,
  datetime: Le,
  basic: Oe
}, ke = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: R("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let o = !1;
      for (const r of t) {
        const i = r == null ? void 0 : r.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return P.datetime;
        if (typeof i == "string" && (o = !0, i.split(U).length > 1))
          return P.alphanumeric;
      }
      return o ? P.text : P.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, o;
      if (!e)
        throw new Error();
      return H(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (o = n.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? t : P[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, o) => {
      const r = e.getNextSortingOrder(), i = typeof t < "u" && t !== null;
      n.setSorting((l) => {
        const u = l == null ? void 0 : l.find((c) => c.id === e.id), s = l == null ? void 0 : l.findIndex((c) => c.id === e.id);
        let a = [], g, d = i ? t : r === "desc";
        if (l != null && l.length && e.getCanMultiSort() && o ? u ? g = "toggle" : g = "add" : l != null && l.length && s !== l.length - 1 ? g = "replace" : u ? g = "toggle" : g = "replace", g === "toggle" && (i || r || (g = "remove")), g === "add") {
          var p;
          a = [...l, {
            id: e.id,
            desc: d
          }], a.splice(0, a.length - ((p = n.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else
          g === "toggle" ? a = l.map((c) => c.id === e.id ? {
            ...c,
            desc: d
          } : c) : g === "remove" ? a = l.filter((c) => c.id !== e.id) : a = [{
            id: e.id,
            desc: d
          }];
        return a;
      });
    }, e.getFirstSortDir = () => {
      var t, o;
      return ((t = (o = e.columnDef.sortDescFirst) != null ? o : n.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var o, r;
      const i = e.getFirstSortDir(), l = e.getIsSorted();
      return l ? l !== i && ((o = n.options.enableSortingRemoval) == null || o) && // If enableSortRemove, enable in general
      (!(t && (r = n.options.enableMultiRemove) != null) || r) ? !1 : l === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var t, o;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((o = n.options.enableSorting) != null ? o : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, o;
      return (t = (o = e.columnDef.enableMultiSort) != null ? o : n.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const o = (t = n.getState().sorting) == null ? void 0 : t.find((r) => r.id === e.id);
      return o ? o.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, o;
      return (t = (o = n.getState().sorting) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      n.setSorting((t) => t != null && t.length ? t.filter((o) => o.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (o) => {
        t && (o.persist == null || o.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? n.options.isMultiSortEvent == null ? void 0 : n.options.isMultiSortEvent(o) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (n) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(n), e.resetSorting = (n) => {
      var t, o;
      e.setSorting(n ? [] : (t = (o = e.initialState) == null ? void 0 : o.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Be = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: R("columnVisibility", e)
  }),
  createColumn: (e, n) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && n.setColumnVisibility((o) => ({
        ...o,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, o;
      return (t = (o = n.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, o;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((o = n.options.enableHiding) != null ? o : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, n) => {
    e._getAllVisibleCells = S(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((o) => o.column.getIsVisible()), {
      key: "row._getAllVisibleCells",
      debug: () => {
        var t;
        return (t = n.options.debugAll) != null ? t : n.options.debugRows;
      }
    }), e.getVisibleCells = S(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, o, r) => [...t, ...o, ...r], {
      key: !1,
      debug: () => {
        var t;
        return (t = n.options.debugAll) != null ? t : n.options.debugRows;
      }
    });
  },
  createTable: (e) => {
    const n = (t, o) => S(() => [o(), o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), {
      key: t,
      debug: () => {
        var r;
        return (r = e.options.debugAll) != null ? r : e.options.debugColumns;
      }
    });
    e.getVisibleFlatColumns = n("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = n("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = n("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = n("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = n("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var o;
      e.setColumnVisibility(t ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var o;
      t = (o = t) != null ? o : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, i) => ({
        ...r,
        [i.id]: t || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var o;
      e.toggleAllColumnsVisible((o = t.target) == null ? void 0 : o.checked);
    };
  }
}, Z = [pe, Be, ye, Ie, Ce, ke, Ve, me, xe, He, fe];
function be(e) {
  var n;
  (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  let t = {
    _features: Z
  };
  const o = t._features.reduce((g, d) => Object.assign(g, d.getDefaultOptions == null ? void 0 : d.getDefaultOptions(t)), {}), r = (g) => t.options.mergeOptions ? t.options.mergeOptions(o, g) : {
    ...o,
    ...g
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  t._features.forEach((g) => {
    var d;
    l = (d = g.getInitialState == null ? void 0 : g.getInitialState(l)) != null ? d : l;
  });
  const u = [];
  let s = !1;
  const a = {
    _features: Z,
    options: {
      ...o,
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
      const d = F(g, t.options);
      t.options = r(d);
    },
    getState: () => t.options.state,
    setState: (g) => {
      t.options.onStateChange == null || t.options.onStateChange(g);
    },
    _getRowId: (g, d, p) => {
      var c;
      return (c = t.options.getRowId == null ? void 0 : t.options.getRowId(g, d, p)) != null ? c : `${p ? [p.id, d].join(".") : d}`;
    },
    getCoreRowModel: () => (t._getCoreRowModel || (t._getCoreRowModel = t.options.getCoreRowModel(t)), t._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => t.getPaginationRowModel(),
    getRow: (g, d) => {
      const p = (d ? t.getCoreRowModel() : t.getRowModel()).rowsById[g];
      if (!p)
        throw new Error();
      return p;
    },
    _getDefaultColumnDef: S(() => [t.options.defaultColumn], (g) => {
      var d;
      return g = (d = g) != null ? d : {}, {
        header: (p) => {
          const c = p.header.column.columnDef;
          return c.accessorKey ? c.accessorKey : c.accessorFn ? c.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (p) => {
          var c, m;
          return (c = (m = p.renderValue()) == null || m.toString == null ? void 0 : m.toString()) != null ? c : null;
        },
        ...t._features.reduce((p, c) => Object.assign(p, c.getDefaultColumnDef == null ? void 0 : c.getDefaultColumnDef()), {}),
        ...g
      };
    }, {
      debug: () => {
        var g;
        return (g = t.options.debugAll) != null ? g : t.options.debugColumns;
      },
      key: !1
    }),
    _getColumnDefs: () => t.options.columns,
    getAllColumns: S(() => [t._getColumnDefs()], (g) => {
      const d = function(p, c, m) {
        return m === void 0 && (m = 0), p.map((f) => {
          const C = ce(t, f, m, c), v = f;
          return C.columns = v.columns ? d(v.columns, C, m + 1) : [], C;
        });
      };
      return d(g);
    }, {
      key: !1,
      debug: () => {
        var g;
        return (g = t.options.debugAll) != null ? g : t.options.debugColumns;
      }
    }),
    getAllFlatColumns: S(() => [t.getAllColumns()], (g) => g.flatMap((d) => d.getFlatColumns()), {
      key: !1,
      debug: () => {
        var g;
        return (g = t.options.debugAll) != null ? g : t.options.debugColumns;
      }
    }),
    _getAllFlatColumnsById: S(() => [t.getAllFlatColumns()], (g) => g.reduce((d, p) => (d[p.id] = p, d), {}), {
      key: !1,
      debug: () => {
        var g;
        return (g = t.options.debugAll) != null ? g : t.options.debugColumns;
      }
    }),
    getAllLeafColumns: S(() => [t.getAllColumns(), t._getOrderColumnsFn()], (g, d) => {
      let p = g.flatMap((c) => c.getLeafColumns());
      return d(p);
    }, {
      key: !1,
      debug: () => {
        var g;
        return (g = t.options.debugAll) != null ? g : t.options.debugColumns;
      }
    }),
    getColumn: (g) => t._getAllFlatColumnsById()[g]
  };
  Object.assign(t, a);
  for (let g = 0; g < t._features.length; g++) {
    const d = t._features[g];
    d == null || d.createTable == null || d.createTable(t);
  }
  return t;
}
function qe(e, n, t, o) {
  const r = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(o),
    renderValue: r,
    getContext: S(() => [e, t, n, i], (l, u, s, a) => ({
      table: l,
      column: u,
      row: s,
      cell: a,
      getValue: a.getValue,
      renderValue: a.renderValue
    }), {
      key: !1,
      debug: () => e.options.debugAll
    })
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, t, n, e);
  }, {}), i;
}
const Te = (e, n, t, o, r, i, l) => {
  let u = {
    id: n,
    index: o,
    original: t,
    depth: r,
    parentId: l,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (s) => {
      if (u._valuesCache.hasOwnProperty(s))
        return u._valuesCache[s];
      const a = e.getColumn(s);
      if (a != null && a.accessorFn)
        return u._valuesCache[s] = a.accessorFn(u.original, o), u._valuesCache[s];
    },
    getUniqueValues: (s) => {
      if (u._uniqueValuesCache.hasOwnProperty(s))
        return u._uniqueValuesCache[s];
      const a = e.getColumn(s);
      if (a != null && a.accessorFn)
        return a.columnDef.getUniqueValues ? (u._uniqueValuesCache[s] = a.columnDef.getUniqueValues(u.original, o), u._uniqueValuesCache[s]) : (u._uniqueValuesCache[s] = [u.getValue(s)], u._uniqueValuesCache[s]);
    },
    renderValue: (s) => {
      var a;
      return (a = u.getValue(s)) != null ? a : e.options.renderFallbackValue;
    },
    subRows: i ?? [],
    getLeafRows: () => de(u.subRows, (s) => s.subRows),
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
    getAllCells: S(() => [e.getAllLeafColumns()], (s) => s.map((a) => qe(e, u, a, a.id)), {
      key: !1,
      debug: () => {
        var s;
        return (s = e.options.debugAll) != null ? s : e.options.debugRows;
      }
    }),
    _getAllCellsByColumnId: S(() => [u.getAllCells()], (s) => s.reduce((a, g) => (a[g.column.id] = g, a), {}), {
      key: "row.getAllCellsByColumnId",
      debug: () => {
        var s;
        return (s = e.options.debugAll) != null ? s : e.options.debugRows;
      }
    })
  };
  for (let s = 0; s < e._features.length; s++) {
    const a = e._features[s];
    a == null || a.createRow == null || a.createRow(u, e);
  }
  return u;
};
function Ke() {
  return (e) => S(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, o = function(r, i, l) {
      i === void 0 && (i = 0);
      const u = [];
      for (let a = 0; a < r.length; a++) {
        const g = Te(e, e._getRowId(r[a], a, l), r[a], a, i, void 0, l == null ? void 0 : l.id);
        if (t.flatRows.push(g), t.rowsById[g.id] = g, u.push(g), e.options.getSubRows) {
          var s;
          g.originalSubRows = e.options.getSubRows(r[a], a), (s = g.originalSubRows) != null && s.length && (g.subRows = o(g.originalSubRows, i + 1, g));
        }
      }
      return u;
    };
    return t.rows = o(n), t;
  }, {
    key: !1,
    debug: () => {
      var n;
      return (n = e.options.debugAll) != null ? n : e.options.debugTable;
    },
    onChange: () => {
      e._autoResetPageIndex();
    }
  });
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
function Je(e, n) {
  return e ? Ne(e) ? /* @__PURE__ */ b.createElement(e, n) : e : null;
}
function Ne(e) {
  return je(e) || typeof e == "function" || Ue(e);
}
function je(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function Ue(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Qe(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = b.useState(() => ({
    current: be(n)
  })), [o, r] = b.useState(() => t.current.initialState);
  return t.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...o,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (l) => {
      r(l), e.onStateChange == null || e.onStateChange(l);
    }
  })), t.current;
}
export {
  Je as f,
  Ke as g,
  Qe as u
};
