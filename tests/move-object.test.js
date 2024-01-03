import { describe, expect, it } from '@jest/globals';
import { moveObject } from '../';

describe('moveObject function', () => {
  // Test case 1: Move an object from curPosition to newPosition
  it('moves an object from curPosition to newPosition', () => {
    const originalArray = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
      { id: 3, name: 'Object 3' },
      { id: 4, name: 'Object 4' },
    ];
    const curPosition = 1;
    const newPosition = 3;

    const newArray = moveObject(originalArray, curPosition, newPosition);

    // Check if the object was moved correctly
    expect(newArray).toEqual([
      { id: 1, name: 'Object 1' },
      { id: 3, name: 'Object 3' },
      { id: 4, name: 'Object 4' },
      { id: 2, name: 'Object 2' },
    ]);
  });

  // Test case 2: Invalid curPosition
  it('throws an error for an invalid curPosition', () => {
    const originalArray = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
    ];
    const curPosition = -1;
    const newPosition = 1;

    // Expect an error to be thrown
    expect(() => moveObject(originalArray, curPosition, newPosition)).toThrowError(
      'Invalid positions'
    );
  });

  // Test case 3: Invalid newPosition
  it('throws an error for an invalid newPosition', () => {
    const originalArray = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
    ];
    const curPosition = 0;
    const newPosition = 5;

    // Expect an error to be thrown
    expect(() => moveObject(originalArray, curPosition, newPosition)).toThrowError(
      'Invalid positions'
    );
  });

  // Test case 4: Moving to the same position
  it('throws an error when moving to the same position', () => {
    const originalArray = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
    ];
    const curPosition = 0;
    const newPosition = 0;

    // Expect an error to be thrown
    expect(() => moveObject(originalArray, curPosition, newPosition)).toThrowError(
      'Invalid positions'
    );
  });
});
