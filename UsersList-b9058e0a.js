import { j as t } from "./library-d2e029ff.js";
import { u as o, T as r, c as s } from "./index-61f80457.js";
import { P as a, a as l } from "./DictionaryCell-a98dea67.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-56b7d4b9.js";
import "./icons-ad9f8a73.js";
import "./mui-2ff488a7.js";
import "./table-f5369550.js";
import "./useWindowController-e10e8f22.js";
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
  return m("Список пользователей"), /* @__PURE__ */ t(l, { fit: !0, footer: /* @__PURE__ */ t(a, { table: i }), children: /* @__PURE__ */ t(r, { table: i }) });
};
export {
  _ as default
};
