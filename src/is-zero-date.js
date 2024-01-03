import isDate from './is-date';
import { ZERO_DATE } from './constants';

const isZeroDate = value => {
  return isDate(value) && value.getTime() === ZERO_DATE.getTime();
};

export default isZeroDate;
