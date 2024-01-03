import isDate from './is-date';
import isNumber from './is-number';
import isDigits from './is-digits';

const addMinutes = (value, quantity) => {
  if (!isDate(value)) {
    return undefined;
  }
  if (!isNumber(quantity) && isDigits(quantity)) {
    quantity = Number(quantity);
  }
  if (!isNumber(quantity)) {
    return undefined;
  }

  return new Date(value.getTime() + quantity * 60000);
};

export default addMinutes;
