const isDate = value => {
  return (typeof value === 'object' && value instanceof Date && !isNaN(value.getTime()));
};

export default isDate;
