import trimString from './trim-string';
import isValidString from './is-valid-string';

const EMPTY_NOT_OK = false;

const trimToUndefined = value => {
  value = trimString(value);
  return isValidString(value, EMPTY_NOT_OK) ? value : undefined;
};
export default trimToUndefined;
