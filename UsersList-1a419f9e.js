import { j as i } from "./library-a76a413f.js";
import { P as r } from "./useDictionary-86cbcf79.js";
import { u as s, P as o, T as a, c as l } from "./index-831f138a.js";
import "./react-54946355.js";
import { u as m } from "./useWithTitle-91e90f6a.js";
import "./mui-02912ce2.js";
import "./icons-6b7f2986.js";
import "./table-e52be9b1.js";
import "./useWindowController-114dee28.js";
const n = "/api/rest/user", e = l(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], _ = () => {
  const t = s(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return m("Список пользователей"), /* @__PURE__ */ i(r, { bbar: /* @__PURE__ */ i(o, { table: t }), children: /* @__PURE__ */ i(a, { table: t }) });
};
export {
  _ as default
};
