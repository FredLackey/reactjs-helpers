import getReactVersion from "./utils/get-react-version";
import isAlphanumeric from "./utils/is-alphanumeric";
import isObject from "./utils/is-object";
import isUidFormat from "./utils/is-uid-format";
import isValidString from './utils/is-valid-string';

export default {
  getReactVersion,
  isAlphanumeric,
  isObject,
  isUidFormat,
  isValidString,

  // CONVENIENCE
  isAlphaNumierc: isAlphanumeric,
};

