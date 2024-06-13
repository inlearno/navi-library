import { j as t } from "./library-89924fb6.js";
import { u as o, T as r, c as s } from "./index-45768fcf.js";
import { P as a, a as m } from "./DictionaryCell-ab51e979.js";
import "./react-6f5a8403.js";
import { u as l } from "./useWithTitle-4e769139.js";
import "./icons-ad9f8a73.js";
import "./mui-2ff488a7.js";
import "./table-f5369550.js";
import "./useUser-268e1bce.js";
import "./useWindowController-e96b5028.js";
const n = "/api/rest/user", e = s(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], g = () => {
  const i = o(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return l("Список пользователей"), /* @__PURE__ */ t(m, { fit: !0, footer: /* @__PURE__ */ t(a, { table: i }), children: /* @__PURE__ */ t(r, { table: i }) });
};
export {
  g as default
};
