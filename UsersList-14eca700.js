import { u as c, j as i } from "./library-0cba57f7.js";
import { u, P as d, T as p, a as f, c as T } from "./index-25d62e8c.js";
import { r as b } from "./react-c74cb93d.js";
import "./mui-78d21057.js";
import "./icons-0549b5e1.js";
import "./table-c712313a.js";
const x = "/api/rest/user", E = () => {
  const {
    close: e,
    setTitle: s,
    maximize: o,
    minimize: a,
    fold: r,
    setWidth: n,
    setHeight: l,
    updatePosition: m
  } = c();
  return {
    close: e,
    setTitle: s,
    maximize: o,
    minimize: a,
    fold: r,
    setWidth: n,
    setHeight: l,
    updatePosition: m
  };
}, P = (e) => {
  const {
    setTitle: s
  } = E();
  b.useEffect(() => {
    s(e);
  }, [e]);
}, t = T(), h = [t.id(), t.display("email", "Email"), t.display("name", "Имя", {
  size: 300
}), t.boolean("is_deleted", "Удален", {
  size: 80
})], _ = () => {
  const e = u(x, h, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return P("Список пользователей"), /* @__PURE__ */ i(f, { bbar: /* @__PURE__ */ i(d, { table: e }), children: /* @__PURE__ */ i(p, { table: e }) });
};
export {
  _ as default
};
