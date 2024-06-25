import { j as r } from "./library-6ace56c9.js";
import { u as i, T as o, c as s } from "./index-ec092327.js";
import { P as a, a as l } from "./DictionaryCell-9553281c.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-9c2f0307.js";
import "./icons-ad9f8a73.js";
import "./mui-2ff488a7.js";
import "./table-f5369550.js";
import "./useUser-9f55d042.js";
import "./useWindowController-b03047e5.js";
const p = "/api/rest/user", e = s(), u = [e.id(), e.resource("group_id", {
  label: "Группа",
  url: "/api/rest/group"
}), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], E = () => {
  const t = i(p, u, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return m("Список пользователей"), /* @__PURE__ */ r(l, { fit: !0, footer: /* @__PURE__ */ r(a, { table: t }), children: /* @__PURE__ */ r(o, { table: t }) });
};
export {
  E as default
};
