import getArrayCount from './get-array-count';

const getSingle = value => {
  return getArrayCount(value) === 1
    ? value[0]
    : undefined;
};

export default getSingle;
