import { j as t } from "./library-364e75ac.js";
import { P as r } from "./useDictionary-403c6ca6.js";
import { u as i, P as a, T as l, c as m } from "./index-d1f9a667.js";
import { r as n } from "./react-181b9648.js";
import { u as p } from "./useWindowController-0b93e3bf.js";
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
