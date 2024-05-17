import { Q as e } from "./Boolean-3ce95c5c.js";
import "./react-6f5a8403.js";
import "./icons-ad9f8a73.js";
import "./library-d2e029ff.js";
import { c as o } from "./configureQueriedCombo-e780ea1b.js";
import "./DictionaryCell-a98dea67.js";
const l = o(e, {
  url: "/api/rest/partners",
  displayField: "name",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
});
o(e, {
  url: "/api/rest/sections",
  displayField: "title",
  filters: [{
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
});
const n = o(e, {
  url: "/api/rest/sections",
  displayField: "title",
  filters: [{
    property: "parent_id",
    value: 0
  }, {
    property: "is_deleted",
    value: !1,
    type: "boolean",
    comparison: "eq"
  }]
});
export {
  l as P,
  n as R
};
