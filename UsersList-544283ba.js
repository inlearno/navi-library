import { j as t } from "./library-5ad54f6e.js";
import { u as o, T as r, c as s } from "./index-c2c3b33f.js";
import { P as a, a as m } from "./DictionaryCell-a7ae3894.js";
import "./react-bd6781bd.js";
import { u as l } from "./useWithTitle-1b151075.js";
import "./icons-56df5d3c.js";
import "./mui-51f6b52b.js";
import "./table-bbae3ab0.js";
import "./useUser-8c01750e.js";
import "./useWindowController-8d24671d.js";
const n = "/api/rest/user", e = s(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], g = () => {
  const i = o(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return l("Список пользователей"), /* @__PURE__ */ t(m, { fit: !0, footer: /* @__PURE__ */ t(a, { table: i }), children: /* @__PURE__ */ t(r, { table: i }) });
};
export {
  g as default
};
