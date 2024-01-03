const parseJson = (rawJson) => {
  let obj;
  try {
    obj = JSON.parse(rawJson);
  } catch (ex) {
    console.debug(ex);
    return undefined;
  }
  return obj;
};

export default parseJson;
