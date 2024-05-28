import { j as t } from "./library-36d20a53.js";
import { u as o, T as r, c as s } from "./index-590aa130.js";
import { P as a, a as l } from "./DictionaryCell-38ba9612.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-f47f9159.js";
import "./icons-ad9f8a73.js";
import "./mui-0a491bf1.js";
import "./table-f5369550.js";
import "./useWindowController-5f849b4c.js";
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
