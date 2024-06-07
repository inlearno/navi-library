import { Q as f, j as l } from "./library-d5a831b9.js";
import { f as v, a as h } from "./faPenAlt-466fde8a.js";
import { f as b } from "./faEye-ea161ce6.js";
import { u as C, T as D, c as P } from "./index-4c45a64d.js";
import { u as z, P as S, a as _ } from "./DictionaryCell-8a3fecdd.js";
import { g as m, r as p } from "./react-6f5a8403.js";
import { u as H } from "./useNavigate-3ef6c72c.js";
import { F as E } from "./icons-ad9f8a73.js";
import { u as L } from "./useUser-8d551be8.js";
import { I as j } from "./mui-a6e6a5b1.js";
import "./table-f5369550.js";
var R = function(e, r, a, t) {
  var n = typeof t < "u" ? [t, e] : [e], o = new Blob(n, { type: a || "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob < "u")
    window.navigator.msSaveBlob(o, r);
  else {
    var s = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(o) : window.webkitURL.createObjectURL(o), i = document.createElement("a");
    i.style.display = "none", i.href = s, i.setAttribute("download", r), typeof i.download > "u" && i.setAttribute("target", "_blank"), document.body.appendChild(i), i.click(), setTimeout(function() {
      document.body.removeChild(i), window.URL.revokeObjectURL(s);
    }, 200);
  }
};
const U = /* @__PURE__ */ m(R), V = /\s*;\s*/, M = /\s*:\s*/, $ = /\s*=\s*(.+)/, N = /\s*'[^']*'\s*(.*)/, O = /(?:^["'\s]*)|(?:["'\s]*$)/g, T = (e) => {
  if (!(e && typeof e == "string"))
    return;
  const r = e.split(V).map((t) => t.trim()).filter((t) => !!t);
  let a = r.shift();
  if (a)
    return a = a.toLowerCase().split(M), a = a[1] || a[0], r.map((t) => t.split($)).reduce((t, [n, o]) => {
      if (!o)
        t[n] = !0;
      else if (n.slice(-1) === "*") {
        let s;
        if ([s, o] = o.split(N), o) {
          try {
            o = decodeURIComponent(o);
          } catch {
          }
          t[n.slice(0, -1).toLowerCase()] = o;
        }
        t.encoding = s.toLowerCase();
      } else
        n in t || (t[n.toLowerCase()] = o.replace(O, ""));
      return t;
    }, { type: a });
};
var A = T;
const B = /* @__PURE__ */ m(A), F = () => {
  const [e, r] = p.useState(!1), [a, t] = p.useState(), n = z();
  return {
    loading: e,
    error: a,
    download: async (s, i = "file.unknown") => {
      r(!0);
      try {
        const {
          data: d,
          headers: g
        } = await n.get(s, {
          responseType: "blob"
        }), {
          filename: y = i
        } = B(g["content-disposition"] || `attachment; filename=${i}`);
        U(d, y);
      } catch (d) {
        throw t(d), d;
      } finally {
        r(!1);
      }
    }
  };
};
var u = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "copy", t = 448, n = 512, o = [], s = "f0c5", i = "M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      t,
      n,
      o,
      s,
      i
    ]
  }, e.faCopy = e.definition, e.prefix = r, e.iconName = a, e.width = t, e.height = n, e.ligatures = o, e.unicode = s, e.svgPathData = i, e.aliases = o;
})(u);
var w = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = "fas", a = "download", t = 512, n = 512, o = [], s = "f019", i = "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z";
  e.definition = {
    prefix: r,
    iconName: a,
    icon: [
      t,
      n,
      o,
      s,
      i
    ]
  }, e.faDownload = e.definition, e.prefix = r, e.iconName = a, e.width = t, e.height = n, e.ligatures = o, e.unicode = s, e.svgPathData = i, e.aliases = o;
})(w);
const c = P(), x = () => {
  const e = H(), {
    download: r
  } = F(), a = L(), t = p.useMemo(() => [c.id(), c.actions([{
    key: "download",
    icon: w.faDownload,
    tooltip: "Скачать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(22 163 74 / var(--tw-text-opacity))"
      }
    },
    onClick: async (o) => {
      const s = f.loading("Загрузка документа...", {
        position: "top-center"
      });
      try {
        await r(`/api/program-docs/${o.id}/docx/download`), f.dismiss(s);
      } catch {
        f.update(s, {
          autoClose: 5e3,
          type: "error",
          isLoading: !1,
          render: "Ошибка загрузки"
        });
      }
    }
  }, {
    key: "copy",
    icon: u.faCopy,
    tooltip: "Копировать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(217 119 6 / var(--tw-text-opacity))"
      }
    },
    onClick: (o) => {
      e(`/program-docs/copy/${o.id}`);
    }
  }, {
    key: "edit",
    icon: a.can("ProgramDocsEdit") ? v.faPenAlt : b.faEye,
    tooltip: a.can("ProgramDocsEdit") ? "Редактировать документ" : "Просмотр документа",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }
    },
    onClick: (o) => {
      e(`/program-docs/constructor/${o.id}`);
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
  })], []), n = C("/api/rest/program-docs", t, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ l(_, { fit: !0, header: a.can("ProgramDocsEdit") ? /* @__PURE__ */ l(j, { size: "small", onClick: () => e("/program-docs/draft"), children: /* @__PURE__ */ l(E, { icon: h.faPlus }) }) : null, footer: /* @__PURE__ */ l(S, { table: n }), children: /* @__PURE__ */ l(D, { table: n, onRowDoubleClick: (o) => {
    e(`/program-docs/constructor/${o.id}`);
  } }) });
};
export {
  x as default
};
