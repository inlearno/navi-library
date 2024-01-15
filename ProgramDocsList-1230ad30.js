import { j as i, F as m } from "./library-ea68d1cc.js";
import { f } from "./faPen-6d05924c.js";
import { u, P as p, T as g, c as v } from "./index-11c0a841.js";
import { P as b } from "./useDictionary-cd08dfb2.js";
import { r as P } from "./react-181b9648.js";
import { u as h } from "./useNavigate-2d87d7c7.js";
import { F as y } from "./icons-42066a3f.js";
import { I as z } from "./mui-d2313b11.js";
import "./table-90839a50.js";
import "./faCheckCircle-ad748d9a.js";
var d = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 });
  var r = "fas", s = "plus", t = 448, o = 512, n = [10133, 61543, "add"], l = "2b", c = "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z";
  a.definition = {
    prefix: r,
    iconName: s,
    icon: [
      t,
      o,
      n,
      l,
      c
    ]
  }, a.faPlus = a.definition, a.prefix = r, a.iconName = s, a.width = t, a.height = o, a.ligatures = n, a.unicode = l, a.svgPathData = c, a.aliases = n;
})(d);
const e = v(), w = () => {
  const a = h(), r = P.useMemo(() => [e.id(), e.display("name", "Наименование программы", {
    size: 150
  }), e.display("partner_name", "Организация", {
    size: 150,
    enableSorting: !1
  }), e.display("municipality_name", "Муниципалитет организации", {
    size: 150,
    enableSorting: !1
  }), e.dictionary("state_id", "programDocStates", "Статус", {
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
    icon: f.faPen,
    onClick: (t) => {
      a(`/program-docs/constructor/${t.id}`);
    }
  }])], []), s = u("/api/rest/program-docs", r, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ i(b, { tbar: /* @__PURE__ */ i(m, { children: /* @__PURE__ */ i(z, { size: "small", onClick: () => a("/program-docs/draft"), children: /* @__PURE__ */ i(y, { icon: d.faPlus }) }) }), bbar: /* @__PURE__ */ i(p, { table: s }), children: /* @__PURE__ */ i(g, { table: s }) });
};
export {
  w as default
};
