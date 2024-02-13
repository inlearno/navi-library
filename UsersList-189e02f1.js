import { j as i } from "./library-8a98056f.js";
import { P as r } from "./useDictionary-fb45a895.js";
import { u as s, P as o, T as a, c as l } from "./index-adcf3182.js";
import "./react-54946355.js";
import { u as m } from "./useWithTitle-9271b46b.js";
import "./mui-02912ce2.js";
import "./icons-6b7f2986.js";
import "./table-e52be9b1.js";
import "./useWindowController-fd90d3a1.js";
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
