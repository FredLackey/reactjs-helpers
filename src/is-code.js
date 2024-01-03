import isAlphanumeric from './is-alphanumeric';

const isCode = (value, min = 6, max = 10) => {
  return isAlphanumeric(value) && value.length >= min && value.length <= max;
};

export default isCode;
