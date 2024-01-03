import isValidArray from './is-valid-array';
import isNumber from './is-number';

const uniqueNumbers = values => {
  if (!isValidArray(values)) { return values; }
  const cache = [];
  const results = [];
  [].concat(values).filter(isNumber).forEach(x => {

    if (cache.includes(Number(x))) {
      return;
    }
    cache.push(Number(x));

    results.push(x);
  });
  return results;
};

export default uniqueNumbers;
