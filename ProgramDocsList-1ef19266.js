import { j as r } from "./library-00a086c4.js";
import { u as D, P as m, T as E, a as f, c as L } from "./index-b6113f9e.js";
import { r as p } from "./react-c74cb93d.js";
import "./mui-78d21057.js";
import "./icons-0549b5e1.js";
import "./table-c712313a.js";
var c = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var a = "fas", l = "pen", n = 512, d = 512, s = [128394], o = "f304", u = "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z";
  t.definition = {
    prefix: a,
    iconName: l,
    icon: [
      n,
      d,
      s,
      o,
      u
    ]
  }, t.faPen = t.definition, t.prefix = a, t.iconName = l, t.width = n, t.height = d, t.ligatures = s, t.unicode = o, t.svgPathData = u, t.aliases = s;
})(c);
var i = /* @__PURE__ */ ((t) => (t.DONE = "done", t.ACTIVE = "active", t.DISABLED = "disabled", t))(i || {});
const A = "/api/rest/program-docs";
i.DONE, i.DONE, i.DONE, i.DONE, i.ACTIVE, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED, i.DISABLED;
const e = L(), h = () => {
  const t = p.useMemo(() => [e.id(), e.display("name", "Название", {
    size: 300
  }), e.dictionary("program_level_id", "programDocsLevels", "Уровень"), e.actions([{
    key: "edit",
    icon: c.faPen
  }])], []), a = D(A, t, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
  });
  return /* @__PURE__ */ r(f, { bbar: /* @__PURE__ */ r(m, { table: a }), children: /* @__PURE__ */ r(E, { table: a }) });
};
export {
  h as default
};
