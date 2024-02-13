import { r } from "./react-54946355.js";
import { u as s } from "./useWindowController-ac7481d2.js";
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
