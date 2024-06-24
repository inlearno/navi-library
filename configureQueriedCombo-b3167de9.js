import { j as o } from "./library-75cbf1f9.js";
import { r as m } from "./react-bd6781bd.js";
const i = (f, e) => m.forwardRef((r, t) => (r.filters && e.filters && (r = {
  ...r,
  filters: [...e.filters, ...r.filters]
}), /* @__PURE__ */ o(f, { ...e, ...r, ref: t })));
export {
  i as c
};
