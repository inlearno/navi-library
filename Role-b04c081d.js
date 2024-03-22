import "./react-6f5a8403.js";
import { l as i, u as c } from "./library-6311d705.js";
class a {
  constructor(s) {
    this.session = s;
  }
  get name() {
    return this.session.user.name;
  }
  get isLockedSession() {
    return !!this.session.locked;
  }
  getGroup() {
    return this.session.user.group_code;
  }
  can(s) {
    return s ? Array.isArray(s) ? this.canAll(s) : typeof s == "function" ? s(this) : this.session.perms[s] || !1 : !0;
  }
  canAll(s) {
    return i.every(s.map((e) => this.can(e)));
  }
  canNot(s) {
    return !this.can(s);
  }
  canAny(s) {
    return s.findIndex((e) => this.can(e)) >= 0;
  }
}
const f = () => {
  const [r] = c();
  if (r)
    return new a(r);
}, h = () => {
  const r = f();
  if (r)
    return r;
  throw new Error("User is not authenticated");
}, l = ({
  children: r,
  is: s,
  oneOf: e,
  not: u,
  notOneOf: o,
  fallback: t = null
}) => {
  const n = h().getGroup();
  return s ? n == s ? r : t : e ? e.includes(n) ? r : t : u ? n != u ? r : t : o ? o.includes(n) ? t : r : t;
};
export {
  l as R,
  h as u
};
