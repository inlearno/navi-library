import { Q as e } from "./Phone-1e1a6f2a.js";
import "./react-6f5a8403.js";
import "./icons-ad9f8a73.js";
import "./library-36d20a53.js";
import { c as o } from "./configureQueriedCombo-f8e7acc0.js";
import "./DictionaryCell-38ba9612.js";
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
