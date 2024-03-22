import { j as t } from "./library-a00c55f9.js";
import { u as o, T as r, c as s } from "./index-51db83f5.js";
import { P as a, a as l } from "./DictionaryCell-6b9b4da0.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-5dc305a1.js";
import "./icons-ad9f8a73.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
import "./useWindowController-bf9b2b78.js";
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
