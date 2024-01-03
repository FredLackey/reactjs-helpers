import isValidString from './is-valid-string';

const getEmails = value => {
  return isValidString(value)
    ? value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
    : [];
};

export default getEmails;
