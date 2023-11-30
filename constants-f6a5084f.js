var u = {};
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  var e = "fas", s = "pen", l = 512, n = 512, a = [128394], D = "f304", d = "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z";
  i.definition = {
    prefix: e,
    iconName: s,
    icon: [
      l,
      n,
      a,
      D,
      d
    ]
  }, i.faPen = i.definition, i.prefix = e, i.iconName = s, i.width = l, i.height = n, i.ligatures = a, i.unicode = D, i.svgPathData = d, i.aliases = a;
})(u);
var t = /* @__PURE__ */ ((i) => (i.DONE = "done", i.ACTIVE = "active", i.DISABLED = "disabled", i))(t || {});
const r = "/api/rest/program-docs", c = [{
  id: "general",
  title: "Основное",
  status: t.DONE
}, {
  id: "description",
  title: "Описание",
  status: t.DONE
}, {
  id: "parameters",
  title: "Параметры",
  status: t.DONE
}, {
  id: "plan-results",
  title: "Планируемые результаты (знать, уметь, способности, качества)",
  status: t.DONE
}, {
  id: "goals-tasks",
  title: "Цели и задачи",
  status: t.ACTIVE
}, {
  id: "study-plan",
  title: "Учебный план",
  status: t.DISABLED
}, {
  id: "evaluation",
  title: "Формы аттестации и оценочные материалы",
  status: t.DISABLED
}, {
  id: "criteria",
  title: "Критерии оценки учебных результатов",
  status: t.DISABLED
}, {
  id: "assessment",
  title: "Способ фиксации учебных результатов",
  status: t.DISABLED
}, {
  id: "materials",
  title: "Методические материалы",
  status: t.DISABLED
}, {
  title: "Особенности организации образовательной деятельности",
  id: "organizational-features",
  status: t.DISABLED
}, {
  title: "Воспитательная деятельность",
  id: "teaching-experience",
  status: t.DISABLED
}, {
  title: "Развивающая деятельность",
  id: "academic-experience",
  status: t.DISABLED
}, {
  title: "Кадровое обеспечение",
  id: "learning-style",
  status: t.DISABLED
}, {
  title: "Материально-техническое обеспечение",
  id: "technology-support",
  status: t.DISABLED
}, {
  title: "Информационное обеспечение",
  id: "information-support",
  status: t.DISABLED
}, {
  title: "Список литературы",
  id: "list-of-references",
  status: t.DISABLED
}, {
  title: "Календарный учебный график",
  id: "calendar-study-plan",
  status: t.DISABLED
}];
export {
  r as P,
  t as S,
  u as f,
  c as s
};
