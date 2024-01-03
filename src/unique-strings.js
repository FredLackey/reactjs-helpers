import isValidArray from './is-valid-array';
import isValidString from './is-valid-string';

const uniqueString = (values, isCaseSensitive = false, trim = true) => {
  if (!isValidArray(values)) { return values; }
  const result = [];
  const lower = [];
  [].concat(values).filter(isValidString).forEach(v => {
    const value = (trim ? v.trim() : v);
    if (
      (isCaseSensitive && result.indexOf(value) < 0)
      || (!isCaseSensitive && lower.indexOf(value.toLowerCase()) < 0)) {
      result.push(value);
      lower.push(value.toLowerCase());
    }
  });
  return result;
};

export default uniqueString;
