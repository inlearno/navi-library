import { r } from "./react-bd6781bd.js";
import { u as s } from "./useWindowController-e2e7f944.js";
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
