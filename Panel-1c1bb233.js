import { d as o, j as l } from "./library-ba578f6d.js";
import { n as h, M as x, t as n, B as g } from "./mui-36ebfa29.js";
import { F as w } from "./icons-a8a50daa.js";
const m = h(({
  className: t,
  ...r
}) => /* @__PURE__ */ o(x, { ...r, classes: {
  popper: t
} }))`
  .${n.tooltip} {
    ${{
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(55 65 81 / var(--tw-bg-opacity))"
}}
  }
  .${n.arrow} {
    ${{
  "--tw-text-opacity": "1",
  color: "rgb(55 65 81 / var(--tw-text-opacity))"
}}
  }
`, y = ({
  children: t,
  className: r,
  tooltip: e,
  icon: a,
  iconAfter: s,
  ...i
}) => {
  let d = /* @__PURE__ */ l(g, { className: r, css: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    textTransform: "none"
  }, ...i, children: [
    a && /* @__PURE__ */ o(w, { icon: a }),
    t,
    s && /* @__PURE__ */ o(w, { icon: s })
  ] });
  return e && (d = /* @__PURE__ */ o(m, { title: e, arrow: !0, children: d })), d;
}, c = ({
  left: t,
  center: r,
  right: e,
  top: a,
  ...s
}) => /* @__PURE__ */ l("div", { role: "toolbar", css: [{
  zIndex: "10",
  display: "flex",
  height: "3rem",
  alignItems: "center",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, a ? {
  borderBottomWidth: "1px",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  "--tw-shadow": "var(--tw-shadow-colored)",
  "--tw-shadow-colored": "0 10px 20px -5px var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-shadow-color": "rgb(0 0 0 / 0.05)"
} : {
  borderTopWidth: "1px",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  "--tw-shadow": "var(--tw-shadow-colored)",
  "--tw-shadow-colored": "0 -10px 30px -15px var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-shadow-color": "rgb(0 0 0 / 0.1)"
}], ...s, children: [
  /* @__PURE__ */ o("div", { css: {
    display: "flex",
    gap: "0.5rem"
  }, children: t }),
  /* @__PURE__ */ o("div", { css: {
    display: "flex",
    flex: "1 1 0%",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem"
  }, children: r }),
  /* @__PURE__ */ o("div", { css: {
    display: "flex",
    gap: "0.5rem"
  }, children: e })
] }), b = ({
  bottomToolbarRenderer: t,
  children: r,
  topToolbarProps: e,
  topToolbarRenderer: a,
  bottomToolbarProps: s,
  ...i
}) => {
  const d = a ? a() : e ? /* @__PURE__ */ o(c, { ...e, top: !0 }) : null, p = t ? t() : s ? /* @__PURE__ */ o(c, { ...s }) : null;
  return /* @__PURE__ */ l("div", { css: [{
    display: "flex",
    height: "100%",
    userSelect: "text",
    flexDirection: "column"
  }], ...i, children: [
    d,
    /* @__PURE__ */ o("div", { css: [{
      flex: "1 1 0%",
      overflow: "auto"
    }], children: r }),
    p
  ] });
};
export {
  y as C,
  b as P
};
