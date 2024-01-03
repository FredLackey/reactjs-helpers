import isValidString from './is-valid-string';

const isPhoneNumber = (value) => {

  if (!isValidString(value)) {
    return false;
  }

  const pattern = /^(\+\d{1,3}[- ]?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

  return pattern.test(value);
};

export default isPhoneNumber;
