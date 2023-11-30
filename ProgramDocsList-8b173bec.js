import { j as a } from "./library-9bcdec1a.js";
import { f as r, P as n } from "./constants-f6a5084f.js";
import { u as l, P as m, T as d, c } from "./index-c9ff6c0a.js";
import { P as p } from "./faCheckCircle-865ace2b.js";
import { u, r as f } from "./react-f9a8d9d6.js";
import "./mui-6924e210.js";
import "./icons-796e9178.js";
import "./table-0c8b68f2.js";
const e = c(), C = () => {
  const s = u(), t = f.useMemo(() => [e.id(), e.display("name", "Наименование программы", {
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
    onClick: (o) => {
      s(`/program-docs/${o.id}`);
    }
  }])], []), i = l(n, t, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ a(p, { bbar: /* @__PURE__ */ a(m, { table: i }), children: /* @__PURE__ */ a(d, { table: i }) });
};
export {
  C as default
};
