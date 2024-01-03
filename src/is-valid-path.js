import path from 'path';
import isValidString from './is-valid-string';

const getBase = value => {
  try {
    return path.basename(value);
  } catch (ex) {
    return undefined;
  }
};

const isValidPath = (value) => {
  return isValidString(getBase(value));
};

export default isValidPath;