import crypto from 'crypto';
import { SALT_OPTION } from './constants';

const newSalt = (byteCount, slatOption = SALT_OPTION) => {
  return crypto.randomBytes(byteCount).toString(slatOption);
};

export default newSalt;
