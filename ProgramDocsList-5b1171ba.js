import { j as t } from "./library-22552ae6.js";
import { f as r, P as l } from "./constants-f6a5084f.js";
import { u as c, P as d, T as m, c as p } from "./index-855c5445.js";
import { P as u } from "./faCheckCircle-2f98e90d.js";
import { R as s, r as f } from "./react-181b9648.js";
import "./mui-e0e0d1d4.js";
import "./icons-cd19d6df.js";
import "./table-90839a50.js";
const g = s.createContext(null), b = () => {
  const a = s.useContext(g);
  if (a === null)
    throw new Error("Required navigate context");
  return a.navigate;
}, e = p(), R = () => {
  const a = b(), o = f.useMemo(() => [e.id(), e.display("name", "Наименование программы", {
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
    icon: r.faPen,
    onClick: (n) => {
      a(`/program-docs/${n.id}`);
    }
  }])], []), i = c(l, o, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ t(u, { bbar: /* @__PURE__ */ t(d, { table: i }), children: /* @__PURE__ */ t(m, { table: i }) });
};
export {
  R as default
};
