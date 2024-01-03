import isIsoDate from './is-iso-date';

const fromIsoDate = (value) => {
  if (!isIsoDate(value)) { return null; }
  return new Date(Date.parse(value));
};

export default fromIsoDate;
