import isObject from "./is-object";
import isFunction from "./is-function";

const isDeleted = (item, fn) => {
  if (!isFunction) { throw new Error('isDeleted fn is not a function!'); }
  if (!isObject) { return false; }
  return fn(item);
};

export default isDeleted;
