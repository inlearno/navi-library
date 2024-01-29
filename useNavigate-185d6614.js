import { R as e } from "./react-54946355.js";
const n = e.createContext(null), a = () => {
  const t = e.useContext(n);
  if (t === null)
    throw new Error("Required navigate context");
  return t.navigate;
};
export {
  a as u
};
