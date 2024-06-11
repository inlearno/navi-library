import { j as o } from "./library-0c8fbdb5.js";
import { r as m } from "./react-6f5a8403.js";
const i = (f, e) => m.forwardRef((r, t) => (r.filters && e.filters && (r = {
  ...r,
  filters: [...e.filters, ...r.filters]
}), /* @__PURE__ */ o(f, { ...e, ...r, ref: t })));
export {
  i as c
};
