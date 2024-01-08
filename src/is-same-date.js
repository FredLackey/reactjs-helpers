import isDate from './is-date';

const isSameDate = (a, b) => {
  return isDate(a) && isDate(b) && a.getTime() === b.getTime();
};

export default isSameDate;
