import { r as s } from "./react-bd6781bd.js";
import { u as e, U as t } from "./library-75cbf1f9.js";
const o = () => {
  const [r] = e();
  return s.useMemo(() => r ? new t(r) : null, [r]);
}, i = () => {
  const r = o();
  if (r)
    return r;
  throw new Error("User is not authenticated");
};
export {
  i as u
};
