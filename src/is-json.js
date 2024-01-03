import isValidString from './is-valid-string';
import isObject from './is-object';
import isArray from './is-array';
import fromJson from './from-json';

const isJson = (str) => {
  if (!isValidString(str)) {
    return false;
  }
  const obj = fromJson(str);
  return isObject(obj) || isArray(obj);
};

export default isJson;
