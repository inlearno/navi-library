import { I as u, j as f } from "./library-13fd97e1.js";
import { r as i } from "./react-6f5a8403.js";
const o = () => {
  const t = u();
  return (e) => t.invalidateQueries({
    queryKey: [e]
  });
}, c = (t, e) => i.forwardRef((r, s) => (r.filters && e.filters && (r = {
  ...r,
  filters: [...e.filters, ...r.filters]
}), /* @__PURE__ */ f(t, { ...e, ...r, ref: s })));
export {
  c,
  o as u
};
