import { u as c, j as i } from "./library-9bcdec1a.js";
import { P as u } from "./faCheckCircle-865ace2b.js";
import { u as d, P as p, T as f, c as T } from "./index-c9ff6c0a.js";
import { r as b } from "./react-f9a8d9d6.js";
import "./mui-6924e210.js";
import "./icons-796e9178.js";
import "./table-0c8b68f2.js";
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
