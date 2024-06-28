import { j as l } from "./library-c328e858.js";
import { F as m } from "./icons-ad9f8a73.js";
import { r as v } from "./react-6f5a8403.js";
import { I as h } from "./mui-2ff488a7.js";
const p = {
  draft: "Черновик",
  published: "Опубликовано",
  deleted: "Удалено"
};
var u = {};
(function(a) {
  Object.defineProperty(a, "__esModule", { value: !0 });
  var t = "fas", s = "star", o = 576, n = 512, e = [11088, 61446], r = "f005", i = "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z";
  a.definition = {
    prefix: t,
    iconName: s,
    icon: [
      o,
      n,
      e,
      r,
      i
    ]
  }, a.faStar = a.definition, a.prefix = t, a.iconName = s, a.width = o, a.height = n, a.ligatures = e, a.unicode = r, a.svgPathData = i, a.aliases = e;
})(u);
const S = ["star1", "star2", "star3", "star4", "star5"], M = v.forwardRef(({
  value: a = 0,
  onChange: t,
  readOnly: s,
  fontSize: o,
  ...n
}, e) => {
  const [r, i] = v.useState(0), d = (c) => a && a >= c + 1 || r && r >= c + 1 ? "#ffb733" : void 0;
  return /* @__PURE__ */ l("div", { children: S.map((c, f) => /* @__PURE__ */ l(h, { ref: e, onClick: () => t == null ? void 0 : t(f + 1), onMouseEnter: () => i(f + 1), onMouseLeave: () => i(0), size: "small", ...n, style: {
    pointerEvents: s ? "none" : "auto"
  }, disableRipple: !0, children: /* @__PURE__ */ l(m, { icon: u.faStar, color: d(f), fontSize: o }) }, c)) });
});
export {
  M as S,
  p as e
};
