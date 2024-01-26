import { r } from "./react-181b9648.js";
import { u as s } from "./useWindowController-1af7876d.js";
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
