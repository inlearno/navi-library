import { b as r, j as t } from "./library-5ad54f6e.js";
import { f } from "./faChevronDown-dd97b173.js";
import { r as g } from "./react-bd6781bd.js";
import { a as v } from "./faEye-6d8181c7.js";
import { F as u } from "./icons-56df5d3c.js";
import { m as y } from "./ModalWindow-76448e19.js";
import { J as C, K as k } from "./mui-51f6b52b.js";
const L = ({
  className: m,
  orientation: a = "horizontal",
  textColor: w,
  tabComponentRenderer: n,
  tabs: s
}) => {
  var p;
  const x = v(), [o, l] = g.useState(0), b = (i, e) => {
    l(e);
  }, [d, c] = g.useState(!1);
  return x ? /* @__PURE__ */ r("div", { css: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column"
  }, children: [
    /* @__PURE__ */ r("div", { onClick: () => c(!d), css: {
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      borderBottomWidth: "1px",
      padding: "0.5rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      ":hover": {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(249 250 251 / var(--tw-bg-opacity))"
      }
    }, children: [
      /* @__PURE__ */ t("div", { css: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        maxWidth: "80%"
      }, children: (p = s[o]) == null ? void 0 : p.title }),
      " ",
      /* @__PURE__ */ t(u, { icon: f.faChevronDown })
    ] }),
    /* @__PURE__ */ r("div", { css: {
      position: "relative",
      width: "100%",
      flex: "1 1 0%",
      overflow: "scroll"
    }, children: [
      /* @__PURE__ */ t("div", { css: {
        position: "absolute",
        left: "0px",
        top: "0px",
        height: "100%",
        width: "100%",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem"
      }, children: n(o) }),
      /* @__PURE__ */ t(y.div, { css: {
        position: "absolute",
        left: "0px",
        top: "0px",
        zIndex: "10",
        width: "100%",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        "--tw-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
        boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      }, variants: {
        closed: {
          y: "-105%"
        },
        open: {
          y: "0%",
          transition: {
            ease: "easeOut"
          }
        }
      }, initial: "closed", animate: d ? "open" : "closed", transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.3
      }, children: s.map(({
        id: i,
        title: e
      }, h) => /* @__PURE__ */ t("div", { css: [{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        borderBottomWidth: "1px",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
      }, o === h ? {
        userSelect: "none",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(141 148 205 / var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        color: "rgb(255 255 255 / var(--tw-text-opacity))"
      } : {
        cursor: "pointer",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 230 244 / var(--tw-bg-opacity))"
        }
      }], onClick: () => {
        l(h), c(!1);
      }, children: /* @__PURE__ */ t("span", { children: e }) }, i)) })
    ] })
  ] }) : /* @__PURE__ */ r("div", { className: m, css: [{
    display: "flex",
    flexDirection: "column"
  }, a === "vertical" && {
    height: "100%",
    flexDirection: "row"
  }], children: [
    /* @__PURE__ */ t(k, { variant: "scrollable", scrollButtons: "auto", value: o, onChange: b, orientation: a, css: [{
      "--tw-bg-opacity": "1",
      backgroundColor: "rgb(90 84 161 / var(--tw-bg-opacity))"
    }, a === "vertical" && {
      height: "100%",
      flexDirection: "row"
    }], textColor: w || "inherit", children: s.map(({
      id: i,
      title: e
    }) => /* @__PURE__ */ t(C, { className: "tab", label: e, css: {
      "--tw-text-opacity": "1",
      color: "rgb(255 255 255 / var(--tw-text-opacity))"
    } }, i)) }),
    /* @__PURE__ */ t("div", { css: [{
      display: "flex",
      height: "100%",
      width: "100%",
      overflow: "auto"
    }], children: n(o) })
  ] });
};
export {
  L as C
};
