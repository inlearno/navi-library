import { R as e } from "./react-181b9648.js";
const n = e.createContext(null), a = () => {
  const t = e.useContext(n);
  if (t === null)
    throw new Error("Required navigate context");
  return t.navigate;
};
export {
  a as u
};
