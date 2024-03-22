import { j as t } from "./library-f80fb3e3.js";
import { u as o, T as r, c as s } from "./index-018ffa62.js";
import { P as a, a as l } from "./DictionaryCell-a80ddbbc.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-f4787d37.js";
import "./icons-ad9f8a73.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
import "./useWindowController-a822a97f.js";
const n = "/api/rest/user", e = s(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], _ = () => {
  const i = o(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return m("Список пользователей"), /* @__PURE__ */ t(l, { footer: /* @__PURE__ */ t(a, { table: i }), children: /* @__PURE__ */ t(r, { table: i }) });
};
export {
  _ as default
};
