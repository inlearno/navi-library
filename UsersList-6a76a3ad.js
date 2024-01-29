import { j as i } from "./library-b497cab0.js";
import { P as r } from "./useDictionary-b8dcd22c.js";
import { u as o, P as s, T as a, c as m } from "./index-e6ea262a.js";
import "./react-54946355.js";
import { u as l } from "./useWithTitle-e19d3d3b.js";
import "./mui-02912ce2.js";
import "./icons-6b7f2986.js";
import "./table-e52be9b1.js";
import "./index-38b3fe08.js";
import "./useWindowController-08138669.js";
const n = "/api/rest/user", e = m(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], g = () => {
  const t = o(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return l("Список пользователей"), /* @__PURE__ */ i(r, { bbar: /* @__PURE__ */ i(s, { table: t }), children: /* @__PURE__ */ i(a, { table: t }) });
};
export {
  g as default
};
