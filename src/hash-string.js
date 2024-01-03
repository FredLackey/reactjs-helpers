import crypto from "crypto";
import { STRING_HMAC, DIGEST_OPTION } from "./constants";

import isValidString from "./is-valid-string";
import trimToUndefined from "./trim-to-undefined";

const hashString = (value) => {
  if (!isValidString(value, true)) {
    return undefined;
  }
  value = trimToUndefined(value);
  return crypto.createHash(STRING_HMAC).update(value).digest(DIGEST_OPTION);
};

export default hashString;
