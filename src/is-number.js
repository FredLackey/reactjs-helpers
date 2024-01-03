const isNumber = (value) => {
  return !Number.isNaN(parseFloat(value)) && Number.isFinite(value);
};

export default isNumber;
