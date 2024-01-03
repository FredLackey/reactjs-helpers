import getHeader from "./get-header";
import getUrlParam from "./get-url-param";
import isValidString from "./is-valid-string";

const TOKEN_NAME = 'jwt';
const HEADER_NAME = 'authorization';
const HEADER_PREFIX = 'Bearer ';

const getJwt = (req, name = TOKEN_NAME) => {

  const header = getHeader(req, HEADER_NAME);
  if (isValidString(header) && header.toLowerCase().startsWith(HEADER_PREFIX.toLowerCase()) && header.length > HEADER_PREFIX.length) {
    const parts = header.split(' ');
    if (parts.length === 2) {
      return parts[1];
    }
  }

  const param = getUrlParam(req.url, name);
  if (isValidString(param)) {
    return param;
  }

  return undefined;
};

export default getJwt;