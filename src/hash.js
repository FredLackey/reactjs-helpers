import crypto from 'crypto';
import { HMAC_OPTION, DIGEST_OPTION } from './constants';

const hash = (value, salt, hmacOption = HMAC_OPTION, digestOption = DIGEST_OPTION) => {
  const hmac = crypto.createHmac(hmacOption, salt);
  return hmac.update(value).digest(digestOption);
};

export default hash;
