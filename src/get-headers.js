const getHeaders = request => {
  const result = {};
  request.headers.forEach((value, name, headers) => {
    result[name] = value;
    request.headers === headers;
  });
  return result;
};

export default getHeaders;
