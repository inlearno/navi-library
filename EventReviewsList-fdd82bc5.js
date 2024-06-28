import { j as a, b as d } from "./library-c328e858.js";
import { f as u } from "./faPlus-da331287.js";
import { u as f, T as c, c as m } from "./useQueriedTable-552e23b2.js";
import { P as p, a as g } from "./DictionaryCell-9be52052.js";
import { F as w } from "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as I } from "./useNavigate-a281bf9a.js";
import { C as v } from "./Can-4a40a579.js";
import { S as R, e as h } from "./StarRating-9a1e6929.js";
import { m as b, f as y } from "./table-7e833027.js";
import { I as S } from "./mui-2ff488a7.js";
import "./useUser-a967c6ae.js";
const C = {
  getInitialState: (e) => ({
    rowsInfoOpened: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    rowInfoEnabled: !0,
    onRowInfoChange: b("rowsInfoOpened", e)
  }),
  createRow: (e, r) => {
    e.toggleRowInfo = () => {
      var s, l;
      const n = (i) => ({
        ...i,
        [e.id]: !i[e.id]
      }), t = (i) => y(n, i);
      return (l = (s = r.options).onRowInfoChange) == null ? void 0 : l.call(s, t);
    }, e.getIsRowInfoVisible = () => !!r.getState().rowsInfoOpened[e.id];
  }
}, o = m(), U = () => {
  const e = I(), r = [o.id(), o.display("fio", "ФИО"), o.display("email", "Email"), o.display("rate", "Рейтинг", {
    size: 120,
    cell: (t) => /* @__PURE__ */ a(R, { value: t.getValue(), fontSize: 13, readOnly: !0 })
  }), o.display("event_name", "Программа"), o.date("date", "Дата", {
    displayFormat: "DD.MM.YYYY"
  }), o.display("status", "Статус", {
    cell: (t) => h[t.getValue()]
  })], n = f("/api/rest/review", r, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    loadingOnFetch: !0,
    _features: [C],
    rowInfoEnabled: !0,
    renderRowInfo: (t) => /* @__PURE__ */ d("div", { children: [
      /* @__PURE__ */ a("span", { css: {
        fontWeight: "700"
      }, children: "Отзыв: " }),
      t.text
    ] })
  });
  return /* @__PURE__ */ a(g, { fit: !0, header: /* @__PURE__ */ a(v, { to: "ViewNavigatorReviews", children: /* @__PURE__ */ a(S, { size: "small", onClick: () => e("/reviews/create"), style: {
    background: "lightgreen"
  }, children: /* @__PURE__ */ a(w, { icon: u.faPlus }) }) }), footer: /* @__PURE__ */ a(p, { table: n }), children: /* @__PURE__ */ a(c, { table: n, onRowDoubleClick: (t) => {
    e(`/reviews/edit/${t.id}`);
  } }) });
};
export {
  U as default
};
