import { j as t } from "./library-e71f0112.js";
import { f as n } from "./faPen-6d05924c.js";
import { u as l, P as c, T as d, c as m } from "./index-f8615c73.js";
import { P as p } from "./lodash-cd26206b.js";
import { R as s, r as u } from "./react-181b9648.js";
import "./mui-fb8b9569.js";
import "./icons-cd19d6df.js";
import "./table-90839a50.js";
const f = s.createContext(null), g = () => {
  const a = s.useContext(f);
  if (a === null)
    throw new Error("Required navigate context");
  return a.navigate;
}, e = m(), S = () => {
  const a = g(), o = u.useMemo(() => [e.id(), e.display("name", "Наименование программы", {
    size: 150
  }), e.display("partner_name", "Организация", {
    size: 150,
    enableSorting: !1
  }), e.display("municipality_name", "Муниципалитет организации", {
    size: 150,
    enableSorting: !1
  }), e.dictionary("state_id", "programDocsStates", "Статус", {
    size: 80
  }), e.display("section_name", "Направленность", {
    size: 150,
    enableSorting: !1
  }), e.dictionary("program_level_id", "EventLevelsDict", "Уровень", {
    size: 150
  }), e.date("created", "Дата создания", {
    size: 120
  }), e.boolean("is_deleted", "Удалён", {
    size: 50
  }), e.display("user_name", "Пользователь", {
    size: 150,
    enableSorting: !1
  }), e.actions([{
    key: "edit",
    icon: n.faPen,
    onClick: (r) => {
      a(`/program-docs/${r.id}`);
    }
  }])], []), i = l("/api/rest/program-docs", o, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ t(p, { bbar: /* @__PURE__ */ t(c, { table: i }), children: /* @__PURE__ */ t(d, { table: i }) });
};
export {
  S as default
};
