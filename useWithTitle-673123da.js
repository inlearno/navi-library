import { r } from "./react-54946355.js";
import { u as s } from "./useWindowController-6fe1b1a3.js";
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
