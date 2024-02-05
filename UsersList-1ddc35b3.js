import { j as i } from "./library-7b8670ef.js";
import { P as r } from "./useDictionary-440d6546.js";
import { u as s, P as o, T as a, c as l } from "./index-2814e94c.js";
import "./react-54946355.js";
import { u as m } from "./useWithTitle-c80bc18c.js";
import "./mui-02912ce2.js";
import "./icons-6b7f2986.js";
import "./table-e52be9b1.js";
import "./useWindowController-c53ddaaa.js";
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
