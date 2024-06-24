import { j as d } from "./library-75cbf1f9.js";
import { u as M, F as C } from "./Phone-727e8dce.js";
import "./react-bd6781bd.js";
import "./icons-56df5d3c.js";
import { a as F, u as P } from "./faEye-a5fee5cd.js";
import { a as g } from "./DictionaryCell-7121ea48.js";
import { B as j } from "./mui-51f6b52b.js";
const D = ({
  fit: p,
  onSave: c,
  onSubmit: s,
  onError: t,
  initialValues: o,
  url: e,
  children: h
}) => {
  const x = F(), f = P({
    method: o != null && o.id ? "PUT" : "POST",
    url: `${e}${o != null && o.id ? `/${o.id}` : ""}`,
    onMutate: (r) => {
      s == null || s(r);
    },
    onSuccess: ({
      data: r
    }) => {
      c == null || c(r);
    },
    onError: (r) => {
      t == null || t(r);
    }
  }), m = M({
    defaultValues: o,
    mutation: f
  });
  return /* @__PURE__ */ d(g, { fit: p ?? x, footer: /* @__PURE__ */ d("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ d(j, { variant: "contained", color: "success", disabled: f.isPending, onClick: () => m.submit(), children: o != null && o.id ? "Обновить" : "Создать" }) }), children: /* @__PURE__ */ d(C, { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  }, form: m, children: h(m) }) });
};
export {
  D as C
};
