import { j as i } from "./library-504a24c4.js";
import { u as e, P as a, T as r, a as l } from "./useQueriedTable-a2a81102.js";
import "./mui-b24eacef.js";
import "./react-97c263ed.js";
import "./icons-fa70a1ec.js";
import "./table-ce790a12.js";
var t = /* @__PURE__ */ ((s) => (s.DONE = "done", s.ACTIVE = "active", s.DISABLED = "disabled", s))(t || {});
const o = "/api/rest/program-docs";
t.DONE, t.DONE, t.DONE, t.DONE, t.ACTIVE, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED, t.DISABLED;
const D = [], A = () => {
  const s = e(o, D, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }]
    // defaultColumnVisibility: {
    //   id: false,
    // },
  });
  return /* @__PURE__ */ i(l, { bottomToolbarProps: {
    center: /* @__PURE__ */ i(a, { table: s })
  }, children: /* @__PURE__ */ i(r, { table: s }) });
};
export {
  A as default
};
