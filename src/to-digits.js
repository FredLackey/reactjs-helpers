import isString from './is-string';

const toDigits = (value, throwError = false) => {
  if (!isString(value)) {
    if (throwError) { throw new Error('toDigits requires a string.'); }
    return undefined;
  }
  return value
    .split('')
    .filter((char) => {
      return '123456789'.includes(char);
    })
    .join('');
};

export default toDigits;
