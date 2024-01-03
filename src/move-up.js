import moveObject from "./move-object";
import isValidArray from "./is-valid-array";

const moveUp = (array, item) => {
  if (!isValidArray(array)) {
    return array;
  }
  if (array.length < 2) {
    return array;
  }
  const curPosition = array.indexOf(item);
  if (curPosition < 0) {
    return array;
  }
  if (curPosition === 0) {
    return array;
  }
  const newPosition = curPosition - 1;
  return moveObject(array, curPosition, newPosition);
};

export default moveUp;