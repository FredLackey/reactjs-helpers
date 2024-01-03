import getHeaders from './get-headers';

const getHeader = (request, name) => {
  const headers = getHeaders(request);
  const key = Object.keys(headers).find(key => key.toLowerCase() === name.toLowerCase());
  return key ? headers[key] : undefined;
};

export default getHeader;