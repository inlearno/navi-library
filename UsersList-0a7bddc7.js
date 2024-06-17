import { j as t } from "./library-fa9914d3.js";
import { u as o, T as r, c as s } from "./index-37323e4d.js";
import { P as a, a as m } from "./DictionaryCell-78c8ae19.js";
import "./react-6f5a8403.js";
import { u as l } from "./useWithTitle-9c10dae0.js";
import "./icons-ad9f8a73.js";
import "./mui-2ff488a7.js";
import "./table-f5369550.js";
import "./useUser-bd306cca.js";
import "./useWindowController-b2a95b0d.js";
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
