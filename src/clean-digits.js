import cleanString from './clean-string';
import { DIGITS } from './constants';

const cleanDigits = value => {
  return cleanString(value, DIGITS);
};

export default cleanDigits;
