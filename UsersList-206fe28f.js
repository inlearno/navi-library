import { u as n, j as t } from "./library-504a24c4.js";
import { u as d, P as u, T as m, a as p } from "./useQueriedTable-a2a81102.js";
import { r as h } from "./react-97c263ed.js";
import "./mui-b24eacef.js";
import "./icons-fa70a1ec.js";
import "./table-ce790a12.js";
const T = "/api/rest/user", f = () => {
  const {
    close: e,
    setTitle: s,
    maximize: o,
    minimize: r,
    fold: a,
    setWidth: i,
    setHeight: c,
    updatePosition: l
  } = n();
  return {
    close: e,
    setTitle: s,
    maximize: o,
    minimize: r,
    fold: a,
    setWidth: i,
    setHeight: c,
    updatePosition: l
  };
}, g = (e) => {
  const {
    setTitle: s
  } = f();
  h.useEffect(() => {
    s(e);
  }, [e]);
}, P = [{
  header: "iD",
  accessorKey: "id",
  size: 50,
  cell: (e) => e.getValue()
}, {
  header: "E-mail",
  accessorKey: "email",
  cell: (e) => e.getValue()
}, {
  header: "Имя",
  accessorKey: "name",
  size: 300
}, {
  header: "Группа",
  accessorKey: "group_id"
}, {
  header: "Удален",
  accessorKey: "is_deleted",
  size: 80,
  cell: (e) => e.getValue() ? "Да" : "Нет"
}], S = () => {
  const e = d(T, P, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
    // defaultColumnVisibility: {
    //   id: false,
    // },
  });
  return g("Список пользователей"), /* @__PURE__ */ t(p, { bottomToolbarProps: {
    center: /* @__PURE__ */ t(u, { table: e })
  }, children: /* @__PURE__ */ t(m, { table: e }) });
};
export {
  S as default
};
