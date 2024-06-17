import { R as e } from "./react-bd6781bd.js";
import { c as o } from "./library-5ad54f6e.js";
const n = () => {
  const t = e.useContext(o);
  if (t === null)
    throw new Error("Required navigate context");
  return t.navigate;
};
export {
  n as u
};
