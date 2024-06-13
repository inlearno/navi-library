import "./react-6f5a8403.js";
import "./library-89924fb6.js";
import { u as o } from "./useUser-268e1bce.js";
const N = ({
  children: r,
  is: e,
  oneOf: s,
  not: i,
  notOneOf: n,
  fallback: u = null
}) => {
  const t = o().getGroup();
  return e ? t == e ? r : u : s ? s.includes(t) ? r : u : i ? t != i ? r : u : n ? n.includes(t) ? u : r : u;
}, R = (r) => {
  const e = Number(r);
  return isNaN(e) || !(e >= 1900 && e <= (/* @__PURE__ */ new Date()).getFullYear()) ? "Введите год" : !0;
};
export {
  N as R,
  R as i
};
