import isValidString from "./is-valid-string";

const isAlpha = value => {
  return isValidString(value) && 
    value
      .toLowerCase()
      .split('')
      .filter(ch => ('abcdefghijklmnopqrstuvwxyz'.includes(ch))).join('') === value.toLowerCase();
};

export default isAlpha;
