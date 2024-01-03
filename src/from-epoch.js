import isNumber from './is-number';
import isDigits from './is-digits';

const fromEpoch = (value) => {
  if (!isNumber(value) || !isDigits(`${value}`)) {
    return null;
  }
  const ms = Number(value) * 1000;
  const date = new Date(ms);
  return date;
};

export default fromEpoch;
