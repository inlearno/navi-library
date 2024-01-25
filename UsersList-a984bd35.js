import { j as i } from "./library-7fb6c15a.js";
import { P as r } from "./useDictionary-a91051fc.js";
import { u as o, P as s, T as a, c as m } from "./index-59f4cd29.js";
import { u as l } from "./useWithTitle-18477666.js";
import "./mui-d2313b11.js";
import "./react-181b9648.js";
import "./icons-42066a3f.js";
import "./table-90839a50.js";
import "./index-38b3fe08.js";
import "./useWindowController-67a241b3.js";
const n = "/api/rest/user", e = m(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], g = () => {
  const t = o(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return l("Список пользователей"), /* @__PURE__ */ i(r, { bbar: /* @__PURE__ */ i(s, { table: t }), children: /* @__PURE__ */ i(a, { table: t }) });
};
export {
  g as default
};
