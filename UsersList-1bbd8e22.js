import { j as i } from "./library-844ac20a.js";
import { P as r, a as s } from "./DictionaryCell-4d28d7d4.js";
import { u as a, T as o, c as l } from "./index-be4f9076.js";
import "./react-54946355.js";
import { u as m } from "./useWithTitle-175ee66d.js";
import "./mui-02912ce2.js";
import "./icons-6b7f2986.js";
import "./table-e52be9b1.js";
import "./useWindowController-625f6aa7.js";
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
