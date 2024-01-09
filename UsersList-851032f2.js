import { j as t } from "./library-f93f7de3.js";
import { P as r } from "./useDictionary-43b83091.js";
import { u as i, P as a, T as l, c as m } from "./index-090ab901.js";
import { r as n } from "./react-181b9648.js";
import { u as p } from "./useWindowController-99debd62.js";
import "./mui-3466ac1e.js";
import "./icons-cd19d6df.js";
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
