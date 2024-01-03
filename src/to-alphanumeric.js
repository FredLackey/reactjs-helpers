import isString from './is-string';

const toAlphanumeric = (value, throwError = false) => {
  if (!isString(value)) {
    if (throwError) { throw new Error('toAlphanumeric requires a string.'); }
    return undefined;
  }
  return value
    .split('')
    .filter((char) => {
      return 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(char.toLowerCase());
    })
    .join('');
};

export default toAlphanumeric;
