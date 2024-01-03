import isValidArray from './is-valid-array';
import getFirst from './get-first';

const EMPTY_OK = true;

const toResult = (result, sample) => {
  if (isValidArray(sample, EMPTY_OK) === isValidArray(result, EMPTY_OK)) {
    return result;
  }
  return isValidArray(sample, EMPTY_OK)
    ? [result]
    : getFirst(result);
};

export default toResult;
