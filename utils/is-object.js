const isObject = (value) => {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    typeof value !== 'function'
  );
};

export default isObject;
