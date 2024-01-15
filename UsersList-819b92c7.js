import { j as t } from "./library-ea68d1cc.js";
import { P as r } from "./useDictionary-cd08dfb2.js";
import { u as i, P as a, T as l, c as m } from "./index-11c0a841.js";
import { r as n } from "./react-181b9648.js";
import { u as p } from "./useWindowController-393e37c7.js";
import "./mui-d2313b11.js";
import "./icons-42066a3f.js";
import "./table-90839a50.js";
import "./faCheckCircle-ad748d9a.js";
const c = "/api/rest/user", u = (e) => {
  const {
    setTitle: o
  } = p();
  n.useEffect(() => {
    o(e);
  }, [e]);
}, s = m(), d = [s.id(), s.display("email", "Email"), s.display("name", "Имя", {
  size: 300
}), s.boolean("is_deleted", "Удален", {
  size: 80
})], h = () => {
  const e = i(c, d, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return u("Список пользователей"), /* @__PURE__ */ t(r, { bbar: /* @__PURE__ */ t(a, { table: e }), children: /* @__PURE__ */ t(l, { table: e }) });
};
export {
  h as default
};
