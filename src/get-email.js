import getEmails from './get-emails';
import getSingle from './get-single';

const getEmail = value => {
  const items = getEmails(value);
  return getSingle(items);
};

export default getEmail;
