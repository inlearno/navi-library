import { u, j as i } from "./library-00a086c4.js";
import { u as c, P as m, T as p, a as f, c as T } from "./index-b6113f9e.js";
import { r as b } from "./react-c74cb93d.js";
import "./mui-78d21057.js";
import "./icons-0549b5e1.js";
import "./table-c712313a.js";
const g = "/api/rest/user", x = () => {
  const {
    close: e,
    setTitle: s,
    maximize: o,
    minimize: a,
    fold: r,
    setWidth: l,
    setHeight: n,
    updatePosition: d
  } = u();
  return {
    close: e,
    setTitle: s,
    maximize: o,
    minimize: a,
    fold: r,
    setWidth: l,
    setHeight: n,
    updatePosition: d
  };
}, E = (e) => {
  const {
    setTitle: s
  } = x();
  b.useEffect(() => {
    s(e);
  }, [e]);
}, t = T(), P = [t.id(), t.display("email", "Email"), t.display("name", "Имя", {
  size: 300
}), t.display("group_id", "Группа"), t.display("is_deleted", "Удален", {
  size: 80,
  cell: (e) => e.getValue() ? "Да" : "Нет"
})], C = () => {
  const e = c(g, P, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return E("Список пользователей"), /* @__PURE__ */ i(f, { bbar: /* @__PURE__ */ i(m, { table: e }), children: /* @__PURE__ */ i(p, { table: e }) });
};
export {
  C as default
};
