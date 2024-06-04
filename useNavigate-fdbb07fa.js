import { R as e } from "./react-6f5a8403.js";
import { c as o } from "./library-e4cc27e1.js";
const n = () => {
  const t = e.useContext(o);
  if (t === null)
    throw new Error("Required navigate context");
  return t.navigate;
};
export {
  n as u
};
