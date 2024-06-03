import { j as t } from "./library-13fd97e1.js";
import { u as o, T as r, c as s } from "./index-5194c745.js";
import { P as a, a as l } from "./DictionaryCell-d02866e3.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-699671ad.js";
import "./icons-ad9f8a73.js";
import "./mui-2ff488a7.js";
import "./table-f5369550.js";
import "./useWindowController-aaa9738f.js";
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
