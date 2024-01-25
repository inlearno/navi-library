import { r } from "./react-181b9648.js";
import { u as s } from "./useWindowController-67a241b3.js";
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
