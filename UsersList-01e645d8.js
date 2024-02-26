import { j as i } from "./library-4abb055a.js";
import { u as r, T as s, c as a } from "./index-def21c5c.js";
import { P as o, a as l } from "./DictionaryCell-860b563e.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-2df44a65.js";
import "./icons-ad9f8a73.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
import "./useWindowController-b762de66.js";
const n = "/api/rest/user", e = a(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], _ = () => {
  const t = r(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return m("Список пользователей"), /* @__PURE__ */ i(l, { bbar: /* @__PURE__ */ i(o, { table: t }), children: /* @__PURE__ */ i(s, { table: t }) });
};
export {
  _ as default
};
