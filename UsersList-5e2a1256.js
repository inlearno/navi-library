import { j as t } from "./library-cedc3deb.js";
import { u as o, T as r, c as s } from "./index-c378ac40.js";
import { P as a, a as l } from "./DictionaryCell-728213ab.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-0b179c56.js";
import "./icons-ad9f8a73.js";
import "./mui-bfddf798.js";
import "./table-f5369550.js";
import "./useWindowController-9a1df740.js";
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
