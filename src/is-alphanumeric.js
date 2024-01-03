import isValidString from "./is-valid-string";

const isAlphanumeric = value => {
  return isValidString(value) && 
    value
      .toLowerCase()
      .split('')
      .filter(ch => ('abcdefghijklmnopqrstuvwxyz0123456789'.includes(ch))).join('') === value.toLowerCase();
};

export default isAlphanumeric;