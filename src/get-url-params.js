const getParams = urlText => {
  const url = new URL(urlText);
  const result = {};
  url.searchParams.forEach((value, name, searchParams) => {
    result[name] = value;
    url.searchParams === searchParams;
  });
  return result;
};

export default getParams;
