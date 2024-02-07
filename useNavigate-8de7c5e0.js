import { R as e } from "./react-54946355.js";
import { N as o } from "./library-9c72dfde.js";
const n = () => {
  const t = e.useContext(o);
  if (t === null)
    throw new Error("Required navigate context");
  return t.navigate;
};
export {
  n as u
};
