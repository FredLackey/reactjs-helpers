import isValidString from "./is-valid-string";

const isDigits = value => {
  return isValidString(value) && 
    value
      .toLowerCase()
      .split('')
      .filter(ch => ('0123456789'.includes(ch))).join('') === value.toLowerCase();
};

export default isDigits;
