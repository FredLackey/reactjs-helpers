const moveObject = (arrayOfObjects, curPosition, newPosition) => {
  if (
    curPosition < 0 ||
    curPosition >= arrayOfObjects.length ||
    newPosition < 0 ||
    newPosition >= arrayOfObjects.length ||
    curPosition === newPosition
  ) {
    throw new Error('Invalid positions');
  }

  const newArray = [...arrayOfObjects]; // Create a shallow copy of the original array
  const objectToMove = newArray.splice(curPosition, 1)[0]; // Remove the object from curPosition
  newArray.splice(newPosition, 0, objectToMove); // Insert the object at newPosition

  return newArray;
};

export default moveObject;