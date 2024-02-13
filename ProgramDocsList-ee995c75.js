import { Q as f, j as l, F as y } from "./library-8a98056f.js";
import { f as h, a as b } from "./faPen-2519e1be.js";
import { u as C, P, T as D, c as z } from "./index-adcf3182.js";
import { u as S, P as _ } from "./useDictionary-fb45a895.js";
import { g as u, r as p } from "./react-54946355.js";
import { u as H } from "./useNavigate-483a855c.js";
import { F as L } from "./icons-6b7f2986.js";
import { I as j } from "./mui-02912ce2.js";
import "./table-e52be9b1.js";
var R = function(e, r, i, t) {
  var a = typeof t < "u" ? [t, e] : [e], o = new Blob(a, { type: i || "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob < "u")
    window.navigator.msSaveBlob(o, r);
  else {
    var s = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(o) : window.webkitURL.createObjectURL(o), n = document.createElement("a");
    n.style.display = "none", n.href = s, n.setAttribute("download", r), typeof n.download > "u" && n.setAttribute("target", "_blank"), document.body.appendChild(n), n.click(), setTimeout(function() {
      document.body.removeChild(n), window.URL.revokeObjectURL(s);
    }, 200);
  }
};
const U = /* @__PURE__ */ u(R), V = /\s*;\s*/, M = /\s*:\s*/, $ = /\s*=\s*(.+)/, E = /\s*'[^']*'\s*(.*)/, F = /(?:^["'\s]*)|(?:["'\s]*$)/g, N = (e) => {
  if (!(e && typeof e == "string"))
    return;
  const r = e.split(V).map((t) => t.trim()).filter((t) => !!t);
  let i = r.shift();
  if (i)
    return i = i.toLowerCase().split(M), i = i[1] || i[0], r.map((t) => t.split($)).reduce((t, [a, o]) => {
      if (!o)
        t[a] = !0;
      else if (a.slice(-1) === "*") {
        let s;
        if ([s, o] = o.split(E), o) {
          try {
            o = decodeURIComponent(o);
          } catch {
          }
          t[a.slice(0, -1).toLowerCase()] = o;
        }
        t.encoding = s.toLowerCase();
      } else
        a in t || (t[a.toLowerCase()] = o.replace(F, ""));
      return t;
    }, { type: i });
};
var O = N;
const T = /* @__PURE__ */ u(O), B = () => {
  const [e, r] = p.useState(!1), [i, t] = p.useState(), a = S();
  return {
    loading: e,
    error: i,
    download: async (s, n = "file.unknown") => {
      r(!0);
      try {
        const {
          data: d,
          headers: g
        } = await a.get(s, {
          responseType: "blob"
        }), {
          filename: v = n
        } = T(g["content-disposition"] || `attachment; filename=${n}`);
        U(d, v);
      } catch (d) {
        throw t(d), d;
      } finally {
        r(!1);
      }
    }
  };
};
var m = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", i = "copy", t = 448, a = 512, o = [], s = "f0c5", n = "M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z";
  e.definition = {
    prefix: r,
    iconName: i,
    icon: [
      t,
      a,
      o,
      s,
      n
    ]
  }, e.faCopy = e.definition, e.prefix = r, e.iconName = i, e.width = t, e.height = a, e.ligatures = o, e.unicode = s, e.svgPathData = n, e.aliases = o;
})(m);
var w = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", i = "download", t = 512, a = 512, o = [], s = "f019", n = "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z";
  e.definition = {
    prefix: r,
    iconName: i,
    icon: [
      t,
      a,
      o,
      s,
      n
    ]
  }, e.faDownload = e.definition, e.prefix = r, e.iconName = i, e.width = t, e.height = a, e.ligatures = o, e.unicode = s, e.svgPathData = n, e.aliases = o;
})(w);
const c = z(), X = () => {
  const e = H(), {
    download: r
  } = B(), i = p.useMemo(() => [c.id(), c.actions([{
    key: "download",
    icon: w.faDownload,
    tooltip: "Скачать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(22 163 74 / var(--tw-text-opacity))"
      }
    },
    onClick: async (a) => {
      const o = f.loading("Загрузка документа...", {
        position: "top-center"
      });
      try {
        await r(`/api/program-docs/${a.id}/docx/download`), f.dismiss(o);
      } catch {
        f.update(o, {
          autoClose: 5e3,
          type: "error",
          isLoading: !1,
          render: "Ошибка загрузки"
        });
      }
    }
  }, {
    key: "copy",
    icon: m.faCopy,
    tooltip: "Копировать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(217 119 6 / var(--tw-text-opacity))"
      }
    },
    onClick: (a) => {
      e(`/program-docs/copy/${a.id}`);
    }
  }, {
    key: "edit",
    icon: h.faPen,
    tooltip: "Редактировать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }
    },
    onClick: (a) => {
      e(`/program-docs/constructor/${a.id}`);
    }
  }], {
    header: "Действия"
  }), c.display("name", "Наименование программы", {
    size: 150
  }), c.display("partner_name", "Организация", {
    size: 150,
    enableSorting: !1
  }), c.display("municipality_name", "Муниципалитет организации", {
    size: 150,
    enableSorting: !1
  }), c.dictionary("state_id", "programDocStates", "Статус", {
    size: 80
  }), c.display("section_name", "Направленность", {
    size: 150,
    enableSorting: !1
  }), c.dictionary("program_level_id", "EventLevelsDict", "Уровень", {
    size: 150
  }), c.date("created", "Дата создания", {
    size: 120
  }), c.boolean("is_deleted", "Удалён", {
    size: 50
  }), c.display("user_name", "Пользователь", {
    size: 150,
    enableSorting: !1
  })], []), t = C("/api/rest/program-docs", i, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ l(_, { tbar: /* @__PURE__ */ l(y, { children: /* @__PURE__ */ l(j, { size: "small", onClick: () => e("/program-docs/draft"), children: /* @__PURE__ */ l(L, { icon: b.faPlus }) }) }), bbar: /* @__PURE__ */ l(P, { table: t }), children: /* @__PURE__ */ l(D, { table: t, onRowDoubleClick: (a) => {
    e(`/program-docs/constructor/${a.id}`);
  } }) });
};
export {
  X as default
};
