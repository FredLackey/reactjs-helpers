import isValidArray  from './is-valid-array';
import isNumber          from './is-number';
import isObject          from './is-object';
import isValidString from './is-valid-string';
import uniqueNumbers     from './unique-numbers';
import uniqueObjects     from './unique-objects';
import uniqueStrings     from './unique-strings';

const EMPTY_OKAY = true;

const unique = (values, params = {}) => {

  if (!isValidArray(values)) { return values; }

  const numbers = values.filter(isNumber);
  if (numbers.length > 0) {
    return uniqueNumbers(values);
  }

  const objects = values.filter(isObject);
  if (objects.length > 0) {
    return uniqueObjects(values, params.strict);
  }

  const strings = values.filter(x => (isValidString(x, EMPTY_OKAY)));
  if (strings.length > 0) {
    return uniqueStrings(values, params.isCaseSensitive, params.trim);
  }

  return null;
};

export default unique;
