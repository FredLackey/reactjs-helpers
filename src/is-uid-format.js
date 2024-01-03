import isAlphaNumeric from './is-alphanumeric';

const isUidFormat = value => {
  return isAlphaNumeric(value) && value.length === 32;
};

export default isUidFormat;