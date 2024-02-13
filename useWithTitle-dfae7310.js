import { r } from "./react-54946355.js";
import { u as s } from "./useWindowController-c4eb24ea.js";
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
