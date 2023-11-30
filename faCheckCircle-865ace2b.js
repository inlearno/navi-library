import { j as d, e as w } from "./library-9bcdec1a.js";
const n = ({
  children: a,
  top: e,
  className: i
}) => /* @__PURE__ */ d("div", { role: "toolbar", css: [{
  zIndex: "10",
  display: "flex",
  height: "3rem",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, e ? {
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
}], className: i, children: a }), v = ({
  children: a,
  tbar: e,
  bbar: i,
  ...o
}) => /* @__PURE__ */ w("div", { css: [{
  display: "flex",
  height: "100%",
  userSelect: "text",
  flexDirection: "column"
}], ...o, children: [
  e && /* @__PURE__ */ d(n, { top: !0, children: e }),
  /* @__PURE__ */ d("div", { css: [{
    flex: "1 1 0%",
    overflow: "auto"
  }], children: a }),
  i && /* @__PURE__ */ d(n, { children: i })
] });
var s = {}, l = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 });
  var e = "fas", i = "circle-check", o = 512, t = 512, r = [61533, "check-circle"], c = "f058", h = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  a.definition = {
    prefix: e,
    iconName: i,
    icon: [
      o,
      t,
      r,
      c,
      h
    ]
  }, a.faCircleCheck = a.definition, a.prefix = e, a.iconName = i, a.width = o, a.height = t, a.ligatures = r, a.unicode = c, a.svgPathData = h, a.aliases = r;
})(l);
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 });
  var e = l;
  a.definition = {
    prefix: e.prefix,
    iconName: e.iconName,
    icon: [
      e.width,
      e.height,
      e.aliases,
      e.unicode,
      e.svgPathData
    ]
  }, a.faCheckCircle = a.definition, a.prefix = e.prefix, a.iconName = e.iconName, a.width = e.width, a.height = e.height, a.ligatures = e.aliases, a.unicode = e.unicode, a.svgPathData = e.svgPathData, a.aliases = e.aliases;
})(s);
export {
  v as P,
  s as f
};
