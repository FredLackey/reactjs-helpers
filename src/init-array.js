import isDefined from './is-defined';

const initArray = (value) => {
  return [].concat(value).filter(isDefined);
};

export default initArray;
