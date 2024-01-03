import getArrayCount from './get-array-count';

const getLast = value => {
  return getArrayCount(value) > 0
    ? value[value.length - 1]
    : undefined;
};

export default getLast;
