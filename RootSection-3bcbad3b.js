import { Q as e } from "./Phone-e554deed.js";
import "./react-6f5a8403.js";
import "./icons-ad9f8a73.js";
import "./library-edebc13d.js";
import { c as o } from "./configureQueriedCombo-f390ded5.js";
import "./DictionaryCell-0ed6c265.js";
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
