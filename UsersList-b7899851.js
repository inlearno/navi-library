import { u as c, j as i } from "./library-e71f0112.js";
import { P as u } from "./lodash-cd26206b.js";
import { u as d, P as p, T as f, c as T } from "./index-f8615c73.js";
import { r as b } from "./react-181b9648.js";
import "./mui-fb8b9569.js";
import "./icons-cd19d6df.js";
import "./table-90839a50.js";
const P = "/api/rest/user", x = () => {
  const {
    close: e,
    setTitle: s,
    maximize: o,
    minimize: r,
    fold: a,
    setWidth: n,
    setHeight: l,
    updatePosition: m
  } = c();
  return {
    close: e,
    setTitle: s,
    maximize: o,
    minimize: r,
    fold: a,
    setWidth: n,
    setHeight: l,
    updatePosition: m
  };
}, E = (e) => {
  const {
    setTitle: s
  } = x();
  b.useEffect(() => {
    s(e);
  }, [e]);
}, t = T(), h = [t.id(), t.display("email", "Email"), t.display("name", "Имя", {
  size: 300
}), t.boolean("is_deleted", "Удален", {
  size: 80
})], j = () => {
  const e = d(P, h, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return E("Список пользователей"), /* @__PURE__ */ i(u, { bbar: /* @__PURE__ */ i(p, { table: e }), children: /* @__PURE__ */ i(f, { table: e }) });
};
export {
  j as default
};
