import { r } from "./react-54946355.js";
import { u as s } from "./useWindowController-7ad76cdc.js";
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
