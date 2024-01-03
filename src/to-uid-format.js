import { ALPHANUMERIC } from './constants';
import cleanString from './clean-string';
import isGuidFormat from './is-guid-format';
import isUidFormat from './is-uid-format';

const toUidFormat = value => {
  return isUidFormat(value) || isGuidFormat(value)
    ? cleanString(value, ALPHANUMERIC).toUpperCase()
    : null;
};

export default toUidFormat;