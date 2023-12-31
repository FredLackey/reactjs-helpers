import isValidString from "./is-valid-string";

const isAlphanumeric = (value) => {
  const alphanumericRegex = /^[a-z0-9]+$/i;
  return isValidString(value) && alphanumericRegex.test(value);
};

export default isAlphanumeric;