import { j as t } from "./library-98acb620.js";
import { u as o, T as r, c as s } from "./index-d2b40b0e.js";
import { P as a, a as l } from "./DictionaryCell-9ce397ef.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-7439f9ec.js";
import "./icons-ad9f8a73.js";
import "./mui-a6e6a5b1.js";
import "./table-f5369550.js";
import "./useWindowController-ee3f4372.js";
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
