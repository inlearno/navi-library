import { u as s } from "./library-f46692ef.js";
import { g as e, Q as t } from "./Boolean-9cd52fea.js";
import "./react-6f5a8403.js";
import "./icons-ad9f8a73.js";
import "./DictionaryCell-123590ec.js";
const n = () => {
  const r = s();
  return (i) => r.invalidateQueries({
    queryKey: [i]
  });
}, d = e(t, {
  url: "/api/rest/partners",
  displayField: "name"
});
e(t, {
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "is_deleted",
      value: !1
    }])
  }
});
const y = e(t, {
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "parent_id",
      value: 0
    }, {
      property: "is_deleted",
      value: !1
    }])
  }
});
export {
  d as P,
  y as R,
  n as u
};
