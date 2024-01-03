import isGuidFormat from './is-guid-format';
import isUidFormat from './is-uid-format';

const toGuidFormat = value => {
  if (isGuidFormat(value)) { return value.toLowerCase(); }
  if (!isUidFormat(value)) { return undefined; }
  return [
    value.substr(0, 8),
    value.substr(8, 4),
    value.substr(12, 4),
    value.substr(16, 4),
    value.substr(20),
  ].join('-').toLowerCase();
};

export default toGuidFormat;
