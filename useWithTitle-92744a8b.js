import { r } from "./react-6f5a8403.js";
import { u as s } from "./useWindowController-3ce4de13.js";
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
