import isValidArray from './is-valid-array';
import isObject from './is-object';
import stringify from './stringify';

const uniqueObjects = (values, strict = true) => {
  if (!isValidArray(values)) { return values; }
  const cache = [];
  const results = [];
  [].concat(values).filter(isObject).forEach(x => {

    const cacheValue = strict ? x : stringify(x);
    if (cache.includes(cacheValue)) {
      return;
    }
    cache.push(cacheValue);

    results.push(x);
  });
  return results;
};

export default uniqueObjects;
