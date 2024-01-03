import isValidString from './is-valid-string';

const isSemver = value => {
  if (!isValidString(value)) {
    return false;
  }
  const semverRegex = /^\d+\.\d+\.\d+(-[\w\d]+(\.[\w\d]+)*)?(\+[\w\d]+(\.[\w\d]+)*)?$/;
  return semverRegex.test(value);
};


export default isSemver;