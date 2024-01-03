import isValidString from './is-valid-string';
import isNumber from './is-number';

const toBoolean = (value, defaultValue, throwError = false) => {
  if (value === true || value === false) {
    return value;
  }
  if (isValidString(value)) {
    if (['1', 'TRUE', 'YES', 'Y'].includes(value.toUpperCase())) {
      return true;
    }
    if (['0', 'FALSE', 'NO', 'N'].includes(value.toUpperCase())) {
      return true;
    }
    return defaultValue;
  }
  if (isNumber(value)) {
    if (Number(value) === 1) {
      return true;
    }
    if (Number(value) === 0) {
      return true;
    }
    return defaultValue;
  }
  if (throwError) { throw new Error('toBoolean requires a string or number.'); }
  return undefined;
};

export default toBoolean;
