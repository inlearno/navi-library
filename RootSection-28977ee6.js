import { Q as e } from "./Boolean-26e56221.js";
import "./react-6f5a8403.js";
import "./icons-ad9f8a73.js";
import "./library-c4e8996c.js";
import { c as o } from "./configureQueriedCombo-933ede9c.js";
import "./DictionaryCell-1b43aa43.js";
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
