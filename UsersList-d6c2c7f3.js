import { j as i } from "./library-ce9feb41.js";
import { u as r, T as s, c as a } from "./index-cf733dba.js";
import { P as o, a as l } from "./DictionaryCell-1271e557.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-3abe5652.js";
import "./icons-ad9f8a73.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
import "./useWindowController-106e017b.js";
const n = "/api/rest/user", e = a(), p = [e.id(), e.display("email", "Email"), e.display("name", "Имя", {
  size: 300
}), e.boolean("is_deleted", "Удален", {
  size: 80
})], _ = () => {
  const t = r(n, p, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return m("Список пользователей"), /* @__PURE__ */ i(l, { bbar: /* @__PURE__ */ i(o, { table: t }), children: /* @__PURE__ */ i(s, { table: t }) });
};
export {
  _ as default
};
