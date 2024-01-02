import isAlphanumeric from "./is-alphanumeric";

const isUidFormat = value => {
  return isAlphanumeric(value) && value.length === 32;
};

export default isUidFormat;