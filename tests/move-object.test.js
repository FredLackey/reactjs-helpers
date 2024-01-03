import { describe, expect, it } from '@jest/globals';
import { moveObject } from '../';

describe('moveObject function', () => {
  // Test case 1: Move an object within the array
  it('moves an object within the array', () => {
    const arrayOfObjects = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
      { id: 3, name: 'Object 3' },
      { id: 4, name: 'Object 4' },
    ];
    const curPosition = 1;
    const newPosition = 3;

    const newArray = moveObject(arrayOfObjects, curPosition, newPosition);

    // Check if the object was moved correctly
    expect(newArray).toEqual([
      { id: 1, name: 'Object 1' },
      { id: 3, name: 'Object 3' },
      { id: 4, name: 'Object 4' },
      { id: 2, name: 'Object 2' },
    ]);
  });

  // Test case 2: Invalid curPosition
  it('returns the original array for an invalid curPosition', () => {
    const arrayOfObjects = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
    ];
    const curPosition = -1;
    const newPosition = 1;

    const newArray = moveObject(arrayOfObjects, curPosition, newPosition);

    // Expect the original array to be returned
    expect(newArray).toBe(arrayOfObjects);
  });

  // Test case 3: Invalid newPosition
  it('returns the original array for an invalid newPosition', () => {
    const arrayOfObjects = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
    ];
    const curPosition = 0;
    const newPosition = 5;

    const newArray = moveObject(arrayOfObjects, curPosition, newPosition);

    // Expect the original array to be returned
    expect(newArray).toBe(arrayOfObjects);
  });

  // Test case 4: Move to the same position
  it('returns the original array when moving to the same position', () => {
    const arrayOfObjects = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
    ];
    const curPosition = 0;
    const newPosition = 0;

    const newArray = moveObject(arrayOfObjects, curPosition, newPosition);

    // Expect the original array to be returned
    expect(newArray).toBe(arrayOfObjects);
  });
});
