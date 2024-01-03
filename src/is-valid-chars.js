import { ALPHANUMERIC } from './constants';
import isValidString from './is-valid-string';
import cleanString from './clean-string';

const EMPTY_OK = false;

const isValidChars = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  return isValidString(value, EMPTY_OK)
    && (value === cleanString(value, valid, invalid, isCaseSensitive));
};

export default isValidChars;
