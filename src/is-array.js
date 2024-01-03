const isArray = (value) => {
  return (typeof value === 'object') && (value instanceof Array);
};

export default isArray;
