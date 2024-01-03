import moveObject from "./move-object";
import isValidArray from "./is-valid-array";

const moveDown = (array, item) => {
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
  if (curPosition === array.length - 1) {
    return array;
  }
  const newPosition = curPosition + 1;
  return moveObject(array, curPosition, newPosition);
};

export default moveDown;