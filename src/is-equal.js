import isString from './is-string';
import stringify from './stringify';

const isEqual = (value, original) => {
  return (isString(value) && isString(original))
    ? value === original
    : stringify(value) === stringify(original);
};

export default isEqual;
