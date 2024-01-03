import isValidString from "./is-valid-string";
import isObject from "./is-object";
import jwt from "./jwt";

const IGNORE_EXPIRATION = true;
const ENFORCE_EXPIRATION = false;

const parseJwt = (token, secret = '') => {

  const claims     = isValidString(token) ? jwt.decode(token) : null;
  const payload    = isObject(claims) ? jwt.fromClaims(claims) : null;
  const verified   = (claims && secret) ? jwt.verify(token, secret, IGNORE_EXPIRATION) : null;
  const isValid    = isObject(verified);
  const notExpired = (claims && secret) ? jwt.verify(token, secret, ENFORCE_EXPIRATION) : null;
  const isExpired  = isValid && !isObject(notExpired);

  const result = {
    token: isValidString(token) ? token : null,
    claims,
    payload,
    isValid,
    isExpired
  };

  return result;
};

export default parseJwt;