import { R as e } from "./react-bd6781bd.js";
import { c as o } from "./library-75cbf1f9.js";
const n = () => {
  const t = e.useContext(o);
  if (t === null)
    throw new Error("Required navigate context");
  return t.navigate;
};
export {
  n as u
};
