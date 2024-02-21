import { r } from "./react-6f5a8403.js";
import { u as s } from "./useWindowController-aed1c1e2.js";
const u = (o) => {
  const {
    setTitle: t
  } = s();
  r.useEffect(() => {
    t(o);
  }, [o]);
};
export {
  u
};
