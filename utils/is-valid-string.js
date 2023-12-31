const isValidString = (value, isEmptyOkay = false) => {
  return (typeof value === 'string' && (isEmptyOkay || value.trim().length > 0));
}

export default isValidString;