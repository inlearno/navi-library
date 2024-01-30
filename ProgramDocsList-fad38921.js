import { Q as f, j as l, F as y } from "./library-5dbdf3bb.js";
import { f as b } from "./faPen-6d05924c.js";
import { u as P, P as C, T as D, c as z } from "./index-885981c6.js";
import { u as H, P as _ } from "./useDictionary-c70be062.js";
import { g as m, r as u } from "./react-54946355.js";
import { u as S } from "./useNavigate-af97c0d3.js";
import { F as V } from "./icons-6b7f2986.js";
import { I as j } from "./mui-02912ce2.js";
import "./table-e52be9b1.js";
import "./index-38b3fe08.js";
var L = function(e, r, o, a) {
  var t = typeof a < "u" ? [a, e] : [e], i = new Blob(t, { type: o || "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob < "u")
    window.navigator.msSaveBlob(i, r);
  else {
    var c = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(i) : window.webkitURL.createObjectURL(i), n = document.createElement("a");
    n.style.display = "none", n.href = c, n.setAttribute("download", r), typeof n.download > "u" && n.setAttribute("target", "_blank"), document.body.appendChild(n), n.click(), setTimeout(function() {
      document.body.removeChild(n), window.URL.revokeObjectURL(c);
    }, 200);
  }
};
const R = /* @__PURE__ */ m(L), M = /\s*;\s*/, N = /\s*:\s*/, U = /\s*=\s*(.+)/, O = /\s*'[^']*'\s*(.*)/, $ = /(?:^["'\s]*)|(?:["'\s]*$)/g, E = (e) => {
  if (!(e && typeof e == "string"))
    return;
  const r = e.split(M).map((a) => a.trim()).filter((a) => !!a);
  let o = r.shift();
  if (o)
    return o = o.toLowerCase().split(N), o = o[1] || o[0], r.map((a) => a.split(U)).reduce((a, [t, i]) => {
      if (!i)
        a[t] = !0;
      else if (t.slice(-1) === "*") {
        let c;
        if ([c, i] = i.split(O), i) {
          try {
            i = decodeURIComponent(i);
          } catch {
          }
          a[t.slice(0, -1).toLowerCase()] = i;
        }
        a.encoding = c.toLowerCase();
      } else
        t in a || (a[t.toLowerCase()] = i.replace($, ""));
      return a;
    }, { type: o });
};
var F = E;
const T = /* @__PURE__ */ m(F), B = () => {
  const [e, r] = u.useState(!1), [o, a] = u.useState(), t = H();
  return {
    loading: e,
    error: o,
    download: async (c, n = "file.unknown") => {
      r(!0);
      try {
        const {
          data: d,
          headers: g
        } = await t.get(c, {
          responseType: "blob"
        }), {
          filename: h = n
        } = T(g["content-disposition"] || `attachment; filename=${n}`);
        R(d, h);
      } catch (d) {
        throw a(d), d;
      } finally {
        r(!1);
      }
    }
  };
};
var p = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", o = "plus", a = 448, t = 512, i = [10133, 61543, "add"], c = "2b", n = "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z";
  e.definition = {
    prefix: r,
    iconName: o,
    icon: [
      a,
      t,
      i,
      c,
      n
    ]
  }, e.faPlus = e.definition, e.prefix = r, e.iconName = o, e.width = a, e.height = t, e.ligatures = i, e.unicode = c, e.svgPathData = n, e.aliases = i;
})(p);
var v = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", o = "copy", a = 448, t = 512, i = [], c = "f0c5", n = "M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z";
  e.definition = {
    prefix: r,
    iconName: o,
    icon: [
      a,
      t,
      i,
      c,
      n
    ]
  }, e.faCopy = e.definition, e.prefix = r, e.iconName = o, e.width = a, e.height = t, e.ligatures = i, e.unicode = c, e.svgPathData = n, e.aliases = i;
})(v);
var w = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", o = "download", a = 512, t = 512, i = [], c = "f019", n = "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z";
  e.definition = {
    prefix: r,
    iconName: o,
    icon: [
      a,
      t,
      i,
      c,
      n
    ]
  }, e.faDownload = e.definition, e.prefix = r, e.iconName = o, e.width = a, e.height = t, e.ligatures = i, e.unicode = c, e.svgPathData = n, e.aliases = i;
})(w);
const s = z(), Y = () => {
  const e = S(), {
    download: r
  } = B(), o = u.useMemo(() => [s.id(), s.actions([{
    key: "download",
    icon: w.faDownload,
    tooltip: "Скачать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(22 163 74 / var(--tw-text-opacity))"
      }
    },
    onClick: async (t) => {
      const i = f.loading("Загрузка документа...", {
        position: "top-center"
      });
      try {
        await r(`/api/program-docs/${t.id}/docx/download`), f.dismiss(i);
      } catch {
        f.update(i, {
          autoClose: 5e3,
          type: "error",
          isLoading: !1,
          render: "Ошибка загрузки"
        });
      }
    }
  }, {
    key: "copy",
    icon: v.faCopy,
    tooltip: "Копировать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(217 119 6 / var(--tw-text-opacity))"
      }
    },
    onClick: (t) => {
      e(`/program-docs/copy/${t.id}`);
    }
  }, {
    key: "edit",
    icon: b.faPen,
    tooltip: "Редактировать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }
    },
    onClick: (t) => {
      e(`/program-docs/constructor/${t.id}`);
    }
  }], {
    header: "Действия"
  }), s.display("name", "Наименование программы", {
    size: 150
  }), s.display("partner_name", "Организация", {
    size: 150,
    enableSorting: !1
  }), s.display("municipality_name", "Муниципалитет организации", {
    size: 150,
    enableSorting: !1
  }), s.dictionary("state_id", "programDocStates", "Статус", {
    size: 80
  }), s.display("section_name", "Направленность", {
    size: 150,
    enableSorting: !1
  }), s.dictionary("program_level_id", "EventLevelsDict", "Уровень", {
    size: 150
  }), s.date("created", "Дата создания", {
    size: 120
  }), s.boolean("is_deleted", "Удалён", {
    size: 50
  }), s.display("user_name", "Пользователь", {
    size: 150,
    enableSorting: !1
  })], []), a = P("/api/rest/program-docs", o, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ l(_, { tbar: /* @__PURE__ */ l(y, { children: /* @__PURE__ */ l(j, { size: "small", onClick: () => e("/program-docs/draft"), children: /* @__PURE__ */ l(V, { icon: p.faPlus }) }) }), bbar: /* @__PURE__ */ l(C, { table: a }), children: /* @__PURE__ */ l(D, { table: a, onRowDoubleClick: (t) => {
    e(`/program-docs/constructor/${t.id}`);
  } }) });
};
export {
  Y as default
};
