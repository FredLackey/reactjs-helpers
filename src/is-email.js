import isValidString from './is-valid-string';
import getEmail from './get-email';

const isEmail = value => {
  const email = getEmail(value);
  return isValidString(email) && value === email;
};

export default isEmail;
