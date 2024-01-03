const fromJson = (str, throwError = false) => {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    if (throwError) {
      throw e;
    }
    return undefined;
  }
};

export default fromJson;
