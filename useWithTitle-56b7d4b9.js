import { r } from "./react-6f5a8403.js";
import { u as s } from "./useWindowController-e10e8f22.js";
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
