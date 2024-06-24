import { r as s } from "./react-6f5a8403.js";
import { u as e, U as t } from "./library-7049cee8.js";
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
