import { j as t } from "./library-637ff442.js";
import { u as o, T as r, c as s } from "./index-8eccee31.js";
import { P as a, a as l } from "./DictionaryCell-72e23628.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-0739e645.js";
import "./icons-ad9f8a73.js";
import "./mui-2ff488a7.js";
import "./table-f5369550.js";
import "./useWindowController-e5324a43.js";
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
