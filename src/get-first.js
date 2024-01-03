import getArrayCount from './get-array-count';
import isValidString from './is-valid-string';

const getFirst = (value, trim = false) => {

  if (isValidString(value, true)) {
    if (trim) {
      value = value.trim();
    }
    return value.length > 0
      ? value[0]
      : '';
  }

  return getArrayCount(value) > 0
    ? value[0]
    : undefined;
};

export default getFirst;
