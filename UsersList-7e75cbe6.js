import { j as t } from "./library-3f58680c.js";
import { u as o, T as r, c as s } from "./index-0ac43405.js";
import { P as a, a as l } from "./DictionaryCell-8fb4fd99.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-8bec7cbd.js";
import "./icons-ad9f8a73.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
import "./useWindowController-f611f75a.js";
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
