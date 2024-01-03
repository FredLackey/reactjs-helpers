import isNumber from './is-number';

const getMin = values => {
  let result = null;
  [].concat(values).filter(isNumber).forEach(value => {

    if (result === null) {
      result = value;
      return;
    }

    if (Number(result) <= Number(value)) {
      return;
    }

    result = value;
  });

  return result;
};

export default getMin;
