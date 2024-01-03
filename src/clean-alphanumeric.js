import cleanString from './clean-string';
import { ALPHANUMERIC } from './constants';

const cleanAlphanumeric = value => {
  return cleanString(value, ALPHANUMERIC);
};

export default cleanAlphanumeric;
