import { j as t } from "./library-731656e2.js";
import { u as o, T as r, c as s } from "./index-59e79013.js";
import { P as a, a as l } from "./DictionaryCell-1acc0f0b.js";
import "./react-6f5a8403.js";
import { u as m } from "./useWithTitle-1b8c4e12.js";
import "./icons-ad9f8a73.js";
import "./mui-4f485058.js";
import "./table-f5369550.js";
import "./useWindowController-dcaea5f4.js";
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
