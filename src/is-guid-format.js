import { EMPTY_GUID } from './constants';
import isAlphanumeric from './is-alphanumeric';
import isValidString from './is-valid-string';

const isGuidFormat = value => {
  if (!isValidString(value)) {
    return null;
  }
  const emptyParts = EMPTY_GUID.split('-');
  const parts = value.split('-');
  if (emptyParts.length !== parts.length) { return false; }
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].length !== emptyParts[i].length) { return false; }
    if (!isAlphanumeric(parts[i])) { return false; }
  }
  return true;
};

export default isGuidFormat;
