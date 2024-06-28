import { j as l, Q as f } from "./library-c328e858.js";
import { f as b } from "./faPlus-da331287.js";
import { u as P, f as C } from "./faEye-c7d9d039.js";
import { f as D, a as S } from "./faPenAlt-b6fc506d.js";
import { u as z, T as E, c as H } from "./useQueriedTable-552e23b2.js";
import { u as _, P as L, a as R } from "./DictionaryCell-9be52052.js";
import { g as m, r as p } from "./react-6f5a8403.js";
import { u as j } from "./useNavigate-a281bf9a.js";
import { F as u } from "./icons-ad9f8a73.js";
import { u as U } from "./useUser-a967c6ae.js";
import { P as T } from "./PopoverConfirm-5ea1f6fc.js";
import { u as V } from "./useResetHttpQueryCache-6e8893c0.js";
import { I as g } from "./mui-2ff488a7.js";
import "./table-7e833027.js";
var $ = function(e, n, a, o) {
  var i = typeof o < "u" ? [o, e] : [e], t = new Blob(i, { type: a || "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob < "u")
    window.navigator.msSaveBlob(t, n);
  else {
    var s = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(t) : window.webkitURL.createObjectURL(t), r = document.createElement("a");
    r.style.display = "none", r.href = s, r.setAttribute("download", n), typeof r.download > "u" && r.setAttribute("target", "_blank"), document.body.appendChild(r), r.click(), setTimeout(function() {
      document.body.removeChild(r), window.URL.revokeObjectURL(s);
    }, 200);
  }
};
const M = /* @__PURE__ */ m($), N = /\s*;\s*/, O = /\s*:\s*/, A = /\s*=\s*(.+)/, B = /\s*'[^']*'\s*(.*)/, Q = /(?:^["'\s]*)|(?:["'\s]*$)/g, k = (e) => {
  if (!(e && typeof e == "string"))
    return;
  const n = e.split(N).map((o) => o.trim()).filter((o) => !!o);
  let a = n.shift();
  if (a)
    return a = a.toLowerCase().split(O), a = a[1] || a[0], n.map((o) => o.split(A)).reduce((o, [i, t]) => {
      if (!t)
        o[i] = !0;
      else if (i.slice(-1) === "*") {
        let s;
        if ([s, t] = t.split(B), t) {
          try {
            t = decodeURIComponent(t);
          } catch {
          }
          o[i.slice(0, -1).toLowerCase()] = t;
        }
        o.encoding = s.toLowerCase();
      } else
        i in o || (o[i.toLowerCase()] = t.replace(Q, ""));
      return o;
    }, { type: a });
};
var F = k;
const I = /* @__PURE__ */ m(F), x = () => {
  const [e, n] = p.useState(!1), [a, o] = p.useState(), i = _();
  return {
    loading: e,
    error: a,
    download: async (s, r = "file.unknown") => {
      n(!0);
      try {
        const {
          data: d,
          headers: v
        } = await i.get(s, {
          responseType: "blob"
        }), {
          filename: h = r
        } = I(v["content-disposition"] || `attachment; filename=${r}`);
        M(d, h);
      } catch (d) {
        throw o(d), d;
      } finally {
        n(!1);
      }
    }
  };
};
var w = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", a = "copy", o = 448, i = 512, t = [], s = "f0c5", r = "M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z";
  e.definition = {
    prefix: n,
    iconName: a,
    icon: [
      o,
      i,
      t,
      s,
      r
    ]
  }, e.faCopy = e.definition, e.prefix = n, e.iconName = a, e.width = o, e.height = i, e.ligatures = t, e.unicode = s, e.svgPathData = r, e.aliases = t;
})(w);
var y = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", a = "download", o = 512, i = 512, t = [], s = "f019", r = "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z";
  e.definition = {
    prefix: n,
    iconName: a,
    icon: [
      o,
      i,
      t,
      s,
      r
    ]
  }, e.faDownload = e.definition, e.prefix = n, e.iconName = a, e.width = o, e.height = i, e.ligatures = t, e.unicode = s, e.svgPathData = r, e.aliases = t;
})(y);
const q = (e) => {
  const n = V(), a = "/api/rest/program-docs", o = P({
    method: "DELETE",
    url: `${a}/${e.id}`,
    onSuccess: () => {
      n(a);
    }
  });
  return /* @__PURE__ */ l(T, { onConfirm: () => {
    o.mutate({});
  }, children: (i) => /* @__PURE__ */ l(g, { css: [{
    padding: "4px",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    "--tw-text-opacity": "1",
    color: "rgb(156 163 175 / var(--tw-text-opacity))",
    ":hover": {
      "--tw-text-opacity": "1",
      color: "rgb(220 38 38 / var(--tw-text-opacity))"
    }
  }], ...i, children: /* @__PURE__ */ l(u, { icon: D.faTrash }) }, "delete-button") });
}, c = H(), se = () => {
  const e = j(), {
    download: n
  } = x(), a = U(), o = p.useMemo(() => [c.id(), c.actions([{
    key: "download",
    icon: y.faDownload,
    tooltip: "Скачать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(22 163 74 / var(--tw-text-opacity))"
      }
    },
    onClick: async (t) => {
      const s = f.loading("Загрузка документа...", {
        position: "top-center"
      });
      try {
        await n(`/api/program-docs/${t.id}/docx/download`), f.dismiss(s);
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
    icon: w.faCopy,
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
    icon: a.can("ProgramDocsEdit") ? S.faPenAlt : C.faEye,
    tooltip: a.can("ProgramDocsEdit") ? "Редактировать документ" : "Просмотр документа",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }
    },
    onClick: (t) => {
      e(`/program-docs/constructor/${t.id}`);
    }
  }, a.can("ProgramDocsEdit") ? {
    key: "delete",
    render: q,
    tooltip: "Удалить документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(220 38 38 / var(--tw-text-opacity))"
      }
    }
  } : {
    key: "delete",
    icon: void 0,
    tooltip: ""
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
  })], []), i = z("/api/rest/program-docs", o, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ l(R, { fit: !0, header: a.can("ProgramDocsEdit") ? /* @__PURE__ */ l(g, { size: "small", onClick: () => e("/program-docs/draft"), children: /* @__PURE__ */ l(u, { icon: b.faPlus }) }) : null, footer: /* @__PURE__ */ l(L, { table: i }), children: /* @__PURE__ */ l(E, { table: i, onRowDoubleClick: (t) => {
    e(`/program-docs/constructor/${t.id}`);
  } }) });
};
export {
  se as default
};
