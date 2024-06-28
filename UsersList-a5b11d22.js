import { j as t } from "./library-c328e858.js";
import { u as o, T as r, c as s } from "./useQueriedTable-552e23b2.js";
import { P as a, a as m } from "./DictionaryCell-9be52052.js";
import "./react-6f5a8403.js";
import { u as l } from "./useWithTitle-d57385d7.js";
import "./icons-ad9f8a73.js";
import "./mui-2ff488a7.js";
import "./table-7e833027.js";
import "./useUser-a967c6ae.js";
import "./useWindowController-f5858084.js";
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
