import { j as t } from "./library-d3ab1de2.js";
import { u as o, T as r, c as s } from "./index-f96d2d88.js";
import { P as a, a as l } from "./DictionaryCell-f9be5d5e.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-9c45246b.js";
import "./icons-ad9f8a73.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
import "./useWindowController-fcb1d26b.js";
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
