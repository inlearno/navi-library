import { j as i } from "./library-349d48a8.js";
import { P as r, a as s } from "./DictionaryCell-7ffb8cbc.js";
import { u as a, T as o, c as l } from "./index-4b986912.js";
import "./react-54946355.js";
import { u as m } from "./useWithTitle-e1b4a082.js";
import "./mui-02912ce2.js";
import "./icons-6b7f2986.js";
import "./table-e52be9b1.js";
import "./useWindowController-b8b5284b.js";
const n = "/api/rest/user", e = l(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], _ = () => {
  const t = a(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return m("Список пользователей"), /* @__PURE__ */ i(s, { bbar: /* @__PURE__ */ i(r, { table: t }), children: /* @__PURE__ */ i(o, { table: t }) });
};
export {
  _ as default
};
