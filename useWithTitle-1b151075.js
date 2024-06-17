import { r } from "./react-bd6781bd.js";
import { u as s } from "./useWindowController-8d24671d.js";
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
