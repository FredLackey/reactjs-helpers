import isSemver from "./is-semver";
import isNumber from "./is-number";

const DIVIDER = '-';
const MAJOR = 0;
const MINOR = 1;
const PATCH = 2;
const RELEASE = 3;
const POSITIONS = [MAJOR, MINOR, PATCH, RELEASE];

const toParts = value => {
  const divider = value.includes(DIVIDER) ? DIVIDER : undefined;
  if (!divider) {
    return [value];
  }
  return value.split(divider);
};

const getMax = (values, position) => {
  if (!POSITIONS.includes(position)) {
    throw new Error('Invalid position');
  }
  let list = [].concat(values).filter(x => (isSemver(x))).map(x => {
    const [ semver, release = '-' ] = toParts(x);
    if (position === RELEASE) {
      return release;
    }
    const parts = semver.split('.');
    return parts[position];
  });
  if (list.length === 0) {
    return null;
  }
  if (isNumber(list[0])) {
    return Math.max(...list);
  }
  const hasEmpty = list.some(x => (x === '-'));
  list = list.filter(x => (x !== '-'));
  if (hasEmpty && list.length === 0) {
    return ' ';
  }
  list.sort();
  return list[list.length - 1];
};

const getLatestSemver = values => {

  let list = [].concat(values).filter(x => (isSemver(x)));
  if (list.length === 0) {
    return null;
  }

  const maxMajor = getMax(list, MAJOR);
  list = list.filter(x => (x.startsWith(`${maxMajor}.`)));

  const maxMinor = getMax(list, MINOR);
  list = list.filter(x => (x.startsWith(`${maxMajor}.${maxMinor}.`)));

  const maxPatch = getMax(list, PATCH);

  return `${maxMajor}.${maxMinor}.${maxPatch}`;

};

export default getLatestSemver;
